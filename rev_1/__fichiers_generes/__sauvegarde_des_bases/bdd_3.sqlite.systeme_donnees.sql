

/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_projets offset 0 (1) */
INSERT INTO tbl_projets (  chi_id_projet ,  chp_nom_projet ,  cht_commentaire_projet ,  che__nur_projet ,  chd__dtm_projet ,  chd__dtc_projet ) VALUES
('3','ref 3','projet de référence
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
('1','dev_dev','1','1','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"10\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"1\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"les tâches\",\"attributs\":{\"data-chi_id_source\":\"991\",\"data-chp_nom_source\":\"taches2_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"les tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"11\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":8,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":12,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"paramètres\",\"attributs\":{\"data-chi_id_source\":\"1019\",\"data-chp_nom_source\":\"parametres1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"21\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"paramètres\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"49\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"9\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"5\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"7\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"3\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"1014\",\"data-chp_nom_source\":\"sources2_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"sources\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"43\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"4\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":11,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"6\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"1\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"991\" data-chp_nom_source=\"taches2_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"les tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"11\" data-separateur=\"0\">les tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"1019\" data-chp_nom_source=\"parametres1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"21\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"paramètres\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"49\" data-separateur=\"0\">paramètres</li><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"9\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"7\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"3\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"1014\" data-chp_nom_source=\"sources2_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"43\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">menus</li></ul></li>"}','1'),
('2','admin_admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"13\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"acteurs\",\"attributs\":{\"data-chi_id_source\":\"1016\",\"data-chp_nom_source\":\"acteurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"20\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"47\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":6,\"contenu\":\"admin\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"13\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"25\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"27\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"29\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"16\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"31\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"33\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"36\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"13\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"1016\" data-chp_nom_source=\"acteurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"20\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"47\" data-separateur=\"0\">acteurs</li><li data-liste_des_menus=\"1\">admin<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"13\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"25\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"27\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"29\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"16\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"31\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"33\" data-separateur=\"0\">menus</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"36\" data-separateur=\"0\">utilisateurs</li></ul></li>    "}','1');
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

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (48) */
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ,  che_autorisation_globale_source ,  cht_condition_rev_source ,  cht_condition_js_source ,  cht_notification_ko_source ,  che_pour_util_source ,  chp_usage_source ) VALUES
('77','__serveur.js',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('78','__serveur.ps1',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('79','_connexion1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'1','fichier'),
('80','_connexion1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'1','fichier'),
('83','__ig1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('84','__ig1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('85','__rev1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('86','__worker1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('88','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2','mes coordonnées','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('89','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2','mes coordonnées','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('94','groupes1_c.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('95','groupes1_s.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('96','metiers1_c.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('97','metiers1_s.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('98','acces1_s.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('99','acces1_c.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('100','_tri_arbre1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('101','utilisateurs1_c.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('102','utilisateurs1_s.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('105','autorisations1_c.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('106','autorisations1_s.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('107','menus1_c.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('108','menus1_s.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('109','w_ast_js_vers_rev1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('110','acorn1_c.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('111','__zip1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('112','__serveur_not_watch.ps1',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('113','__fnt1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('114','__fnt1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('115','__fnts_c_et_s_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('116','w_rev_vers_js1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('991','taches2_c.js',NULL,NULL,'0','2','tâches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('992','taches2_s.js',NULL,NULL,'0','2','taches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('1000','x_ecran_a_propos1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'1','fichier'),
('1011','taches1_c.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('1012','taches1_s.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('1013','__navigation1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1014','sources2_c.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1015','sources2_s.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1016','acteurs1_c.js',NULL,NULL,'0','2','les acteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1017','acteurs1_s.js',NULL,NULL,'0','2','les acteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1018','__televersement1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1019','parametres1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1020','parametres1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1021','grandeurs1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1022','grandeurs1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1023','grandeurs2_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1024','grandeurs2_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (49) */
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
('43','1014','1','0'),
('44','1015','1','0'),
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
('56','1024','2','0');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (21) */
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
('21','paramètres','paramètres','49','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (1) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','',NULL,NULL,'0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_genres offset 0 (26) */
INSERT INTO tbl_genres (  chi_id_genre ,  chp_nom_genre ,  che_ordre_genre ,  chp_prefixe_genre ,  chp_espece_genre ,  che_longueur_genre ,  che_est_primaire_genre ,  che_est_incrément_genre ,  che_est_obligatoire_genre ,  che_a_init_genre ,  che_init_est_mot_genre ,  cht_valeur_init_genre ,  che_est_parmis_genre ,  cht_parmis_genre ,  cht_fonctions_genre ,  che_est_nur_genre ,  che_est_tsm_genre ,  che_est_tsc_genre ,  chd__dtc_genre ,  chd__dtm_genre ,  che__nur_genre ,  che_est_positif_genre ,  cht_particularités_genre ) VALUES
('1','***indéfini***','25','cht','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('2','id primaire non nulle','1','chi','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2025-09-25 16:55:08.841','18','1',NULL),
('3','varchar 64 NON NULLE','2','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('4','lien NON NULL','5','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('5','zero_un non nulle à 0','17','che','INTEGER',NULL,'0','0','1','1','0','0','1','0,1',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('6','texte NULL','12','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('7','entier NULL','9','che','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('8','lien NULL','6','chx','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('9','entier NON NULL','7','che','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('10','entier NON NULL à zéro','8','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('11','texte NON NULL','11','cht','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('12','varchar 64 NULL','3','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('13','mot de passe','20','chp','VARCHAR','256','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('14','dt23 création','18','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('15','nur','22','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('16','dt23 modification','19','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('17','varchar 255 NON NULLE','4','chp','VARCHAR','255','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('18','id utilisateur','23','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-06 14:10:54.357','2025-10-04 07:03:24.668','8','0',NULL),
('19','nom technique','21','cht','VARCHAR','128','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_technique1()','0','0','0','2025-11-19 12:07:33.326','2025-11-19 12:07:33.326','0','0',NULL),
('21','durée_du_travail','10','chn','FLOAT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-02-15 13:48:23.907','2026-02-15 14:10:08.496','1','0',NULL),
('22','dt10 aaaa_mm_jj','15','chd','VARCHAR','10','0','0','0','1','0','NULL','0',NULL,'date_nulle_ou_comprise_entre(''1000_01_01'',''9999_12_31'')','0','0','0','2026-03-16 12:16:06.262','2026-03-16 12:16:06.262','0','0',NULL),
('23','tp8 hh_mm_ss','16','chd','VARCHAR','8','0','0','1','1','1','00_00_00','0',NULL,'heure_nulle_ou_comprise_entre(''00_00_00'',''23_59_59'')','0','0','0','2026-03-17 15:45:36.973','2026-03-17 15:45:36.973','0','0',NULL),
('97','texte NULL source_non_rev','14','cht','TEXT','','0','0','0','1','0','NULL','0','','','0','0','0','2025-10-21 10:14:55.512','2025-10-21 10:14:55.512','0','0','source_non_rev(1)'),
('98','texte NULL source_au_format_rev','13','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'test_est_au_format_rev()','0','0','0','2025-10-20 17:48:22.207','2026-06-08 12:56:45.307','6','0','source_au_format_rev(1)'),
('99','priorité','24','che','INTEGER','2','0','0','1','1','0','0','0',NULL,'test_entier_compris_entre(0,99)','0','0','0','2025-09-06 09:19:20.196','2026-05-07 09:26:44.793','1','0',NULL),
('109','id projet','26','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-01-17 12:12:01.759','2026-01-17 12:12:01.759','0','0',NULL);
/*================================================================================ FIN BLOC TABLE tbl_genres offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_bdds offset 0 (2) */
INSERT INTO tbl_bdds (  chi_id_basedd ,  chp_rev_travail_basedd ,  chp_fournisseur_basedd ,  chp_commentaire_basedd ,  chd__dtm_basedd ,  chd__dtc_basedd ,  che__nur_basedd ) VALUES
('1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''''),
   collate(''''),
   transform_base_sur_svg(translate(55.5,44.5))
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
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_base_sur_svg(translate(7,207))
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
            abrege_du_champ(''nom du groupe''),
            entete_distant_du_champ(''nom groupe''),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
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
            nom_bref_du_champ(''id parent''),
            abrege_du_champ(''id parent du groupe''),
            entete_distant_du_champ(''groupe''),
            typologie(chx),
            genre(8)
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
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_base_sur_svg(translate(6,303))
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
            abrege_du_champ(''nom du métier''),
            entete_distant_du_champ(''nom metier''),
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            longueur_du_champ(128)
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
            nom_bref_du_champ(''id parent''),
            abrege_du_champ(''id parent du métier''),
            entete_distant_du_champ(''métier''),
            typologie(chx),
            genre(8)
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
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2),ne_pas_modifier(0)''),
      transform_base_sur_svg(translate(210,266))
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
            abrege_du_champ(''nom''),
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
            abrege_du_champ(''id du groupe''),
            entete_distant_du_champ(''id groupe accès''),
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
            abrege_du_champ(''id du métier''),
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
            abrege_du_champ(''parametres''),
            entete_distant_du_champ(''parametres accès''),
            typologie(cht),
            genre(11)
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
            abrege_du_champ(''actif''),
            entete_distant_du_champ(''actif accès''),
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
      rang_de_la_table(40),
      permet_la_gestion_de(''autorisation''),
      distinction_pour_liste(''liste des autorisations''),
      distinction_pour_isad(''d\''une autorisation''),
      transform_base_sur_svg(translate(470,260))
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
            abrege_du_champ(''id de la source''),
            entete_distant_du_champ(''source''),
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
            abrege_du_champ(''id de l\''accès''),
            entete_distant_du_champ(''accès''),
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
            abrege_du_champ(''pour accès sous liste''),
            entete_distant_du_champ(''pour sous liste autorisation''),
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
      rang_de_la_table(50),
      permet_la_gestion_de(''menu''),
      distinction_pour_liste(''liste des menus''),
      distinction_pour_isad(''d\''un menu''),
      transform_base_sur_svg(translate(743,269))
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
            entete_distant_du_champ(''id menu''),
            typologie(chi),
            genre(2)
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
            entete_distant_du_champ(''libelle menu''),
            typologie(cht),
            genre(11)
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
            abrege_du_champ(''id de l\''autorisation''),
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
            abrege_du_champ(''methode''),
            entete_distant_du_champ(''methode menu''),
            typologie(chp),
            genre(3),
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
            entete_distant_du_champ(''initialisation menu''),
            typologie(cht),
            genre(98)
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
            abrege_du_champ(''condition au format rev''),
            entete_distant_du_champ(''condition menu''),
            typologie(cht),
            genre(98)
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
            entete_distant_du_champ(''condition php menu''),
            typologie(cht),
            genre(97)
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
      rang_de_la_table(60),
      permet_la_gestion_de(''source''),
      distinction_pour_liste(''liste des sources''),
      distinction_pour_isad(''d\''un source''),
      transform_base_sur_svg(translate(192,-1))
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
            abrege_du_champ(''nom''),
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
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_source''),
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''rev''),
            entete_distant_du_champ(''rev source''),
            typologie(cht),
            genre(98)
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
            entete_distant_du_champ(''genere source''),
            typologie(cht),
            genre(97)
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
            abrege_du_champ(''dossier id''),
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
            abrege_du_champ(''commentaire''),
            entete_distant_du_champ(''commentaire source''),
            typologie(cht),
            genre(6)
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
            abrege_du_champ('' dtc''),
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
            abrege_du_champ('' nur''),
            entete_distant_du_champ('' nur source''),
            typologie(chi),
            genre(10),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_autorisation_globale_source''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_autorisation_globale_source''),
            nom_bref_du_champ(''autorisation globale''),
            abrege_du_champ(''autorisation globale''),
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
            abrege_du_champ(''condition au format js''),
            entete_distant_du_champ(''condition js source''),
            typologie(cht),
            genre(97)
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
            abrege_du_champ(''condition au format rev''),
            entete_distant_du_champ(''condition rev source''),
            typologie(cht),
            genre(98)
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
            abrege_du_champ(''notification si condition ko''),
            entete_distant_du_champ(''notification ko source''),
            typologie(cht),
            genre(6)
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
            nom_bref_du_champ(''pas pour util''),
            abrege_du_champ(''pas pour util''),
            entete_distant_du_champ(''pas pour util source''),
            typologie(che),
            genre(5)
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
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_base_sur_svg(translate(431,399))
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
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom de connexion de l\''utilisateur''),
            entete_distant_du_champ(''login''),
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
            abrege_du_champ(''mot de passe''),
            entete_distant_du_champ(''mot de passe utilisateur''),
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
            abrege_du_champ(''parametres''),
            entete_distant_du_champ(''parametres utilisateur''),
            typologie(cht),
            genre(6)
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
            nom_bref_du_champ(''acces''),
            abrege_du_champ(''acces''),
            entete_distant_du_champ(''acces utilisateur''),
            typologie(chx),
            genre(4)
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
            abrege_du_champ('' dtc''),
            entete_distant_du_champ('' dtc utilisateur''),
            typologie(chi),
            genre(14),
            masquer_champ_dans_svg(1),
            longueur_du_champ(23)
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
            abrege_du_champ(''actif''),
            entete_distant_du_champ(''actif utilisateur''),
            typologie(che),
            genre(5)
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
      transform_base_sur_svg(translate(727,511))
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
            abrege_du_champ(''utilisateur''),
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
            abrege_du_champ(''texte''),
            entete_distant_du_champ(''texte tâche''),
            typologie(cht),
            genre(11),
            est_libelle_lien(1)
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
            nom_bref_du_champ(''priorite''),
            abrege_du_champ(''priorite de la tâche''),
            entete_distant_du_champ(''priorite tâche''),
            suggestion_du_champ(''00,20,50,80,99''),
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
            abrege_du_champ('' dtm''),
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
            abrege_du_champ('' dtc''),
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
            abrege_du_champ('' nur''),
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
      distinction_pour_isad(''d\''un paramètres''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_base_sur_svg(translate(80,514))
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
            abrege_du_champ(''id du parametre''),
            entete_distant_du_champ(''paramètre''),
            typologie(chi),
            genre(2)
         )
      ),
      champ(
         nom_du_champ(''chp_cle_parametre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_cle_parametre''),
            nom_bref_du_champ(''cle''),
            abrege_du_champ(''cle du paramètre''),
            entete_distant_du_champ(''paramètre''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''chp_nom_parametre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_parametre''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom du paramètre''),
            entete_distant_du_champ(''paramètre''),
            typologie(chp),
            genre(3),
            longueur_du_champ(64)
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_parametre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_parametre''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire du parametre''),
            entete_distant_du_champ(''commentaire paramètre''),
            typologie(cht),
            genre(11)
         )
      ),
      champ(
         nom_du_champ(''cht_rev_parametre''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_parametre''),
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''rev du parametre''),
            entete_distant_du_champ(''rev paramètre''),
            typologie(cht),
            genre(98)
         )
      ),
      champ(
         nom_du_champ(''cht_ordre_parametre''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_ordre_parametre''),
            nom_bref_du_champ(''ordre''),
            abrege_du_champ(''ordre du parametre''),
            entete_distant_du_champ(''ordre paramètre''),
            typologie(cht),
            genre(6)
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
            abrege_du_champ(''pour admin du parametre''),
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
            abrege_du_champ(''fld tscrt parnams''),
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
            abrege_du_champ(''fld tsupd parnams''),
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
            nom_bref_du_champ(''fld cntupd parnams''),
            abrege_du_champ(''fld cntupd parnams''),
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
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1,2)''),
      transform_base_sur_svg(translate(363,570))
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
            abrege_du_champ(''id de la grandeur''),
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
            abrege_du_champ(''id du paramètre''),
            entete_distant_du_champ(''id paramètre grandeur''),
            typologie(chx),
            genre(4)
         )
      ),
      champ(
         nom_du_champ(''chp_cle_grandeur''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_cle_grandeur''),
            nom_bref_du_champ(''cle''),
            abrege_du_champ(''cle de la grandeur''),
            entete_distant_du_champ(''grandeur''),
            libelle_grandeur(''voir_champ_dependant''),
            typologie(cht),
            genre(98),
            est_libelle_lien(1)
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
            abrege_du_champ(''rev de la grandeur''),
            entete_distant_du_champ(''rev grandeur''),
            typologie(cht),
            genre(11)
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
            abrege_du_champ(''la grandeur est active''),
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
            abrege_du_champ(''fld tscrt parnams''),
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
            abrege_du_champ(''fld tsupd parnams''),
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
            nom_bref_du_champ(''fld cntupd parnams''),
            abrege_du_champ(''fld cntupd parnams''),
            entete_distant_du_champ(''grandeur''),
            typologie(che),
            genre(15),
            masquer_champ_dans_svg(1)
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
   nom_de_la_table_pour_l_index(''tbl_autorisations''),
   nom_de_l_index(''idx_unique1''),
   meta(nom_de_l_index(idx_unique1),genre_meta(index_de_table),message('''')),
   champs(''chx_acces_autorisation'',''chx_source_autorisation''),
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
            abrege_du_champ(''id de l\''acteur''),
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
            abrege_du_champ(''nom de l\''acteur''),
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
            abrege_du_champ(''prénom de l\''acteur''),
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
         valeur_par_defaut(2),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_statut_acteur''),
            nom_bref_du_champ(''statut''),
            abrege_du_champ(''statut de l\''acteur''),
            entete_distant_du_champ(''statut''),
            libelle_grandeur(''statut''),
            chi_id_parametre(''1''),
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

/*================================================================================ DEBUT BLOC TABLE tbl_requetes offset 0 (84) */
INSERT INTO tbl_requetes (  chi_id_requete ,  cht_commentaire_requete ,  chp_type_requete ,  cht_rev_requete ,  cht_sql_requete ,  cht_matrice_requete ,  che__nur_requete ,  chd__dtm_requete ,  chd__dtc_requete ,  che_est_souche_requete ,  chp_table_reference_requete ) VALUES
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('1112','tâches','select','sélectionner(
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
      et(egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache),egal(champ(`T0`,`chx_utilisateur_tache`),session(chi_id_utilisateur)))
   )
)  ','SELECT 
`T0`.`chi_id_tache` , `T0`.`chx_utilisateur_tache` , `T0`.`chp_texte_tache` , `T0`.`che_priorite_tache` , `T1`.`chp_nom_de_connexion_utilisateur`
 FROM b1.tbl_taches T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_tache

WHERE (`T0`.`chi_id_tache` = :T0_chi_id_tache
   AND `T0`.`chx_utilisateur_tache` = chi_id_utilisateur)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('1113','taches','update','modifier(
   valeurs(affecte(champ(`chp_texte_tache`),:n_chp_texte_tache),affecte(champ(`che_priorite_tache`),:n_che_priorite_tache),affecte(champ(`chd__dtm_tache`),:n_chd__dtm_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_tache`),:c_chi_id_tache),egal(champ(`chx_utilisateur_tache`),session(chi_id_utilisateur)))
   )
)  ','UPDATE b1.tbl_taches SET 
   `chp_texte_tache` = :n_chp_texte_tache , 
   `che_priorite_tache` = :n_che_priorite_tache , 
   `chd__dtm_tache` = :n_chd__dtm_tache
WHERE (`chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = chi_id_utilisateur) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
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
   AND `chx_utilisateur_tache` = chi_id_utilisateur) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('1119','utilisateurs','liste_ecran','sélectionner(
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
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chx_acces_utilisateur` , 
`T1`.`chp_nom_acces` , `T0`.`che_actif_utilisateur` , `T1`.`che_actif_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE (`T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`che_actif_utilisateur` = :T0_che_actif_utilisateur
   AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T1`.`che_actif_acces` = :T1_che_actif_acces
   AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
   AND `T0`.`chx_acces_utilisateur` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('1123','utilisateurs','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:chi_id_utilisateur))
)  ','DELETE FROM b1.tbl_utilisateurs
WHERE `chi_id_utilisateur` = :chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
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
WHERE `chi_id_metier` = :c_chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('1129','métier','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:chi_id_metier))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
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
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
('1134','groupes','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:chi_id_groupe))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_groupes'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
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
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('1139','acces','delete','supprimer(
   base_de_reference(1),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:chi_id_acces))
)  ','DELETE FROM b1.tbl_acces
WHERE `chi_id_acces` = :chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('1140','autorisations','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T0`,`che_pour_sous_liste_autorisation`),
      champ(`T1`,`chp_nom_acces`),
      champ(`T2`,`chp_nom_source`),
      champ(`T0`,`chi_id_autorisation`)
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
         egal(champ(`T0`,`chx_acces_autorisation`),:T0_chx_acces_autorisation),
         egal(champ(`T0`,`chx_source_autorisation`),:T0_chx_source_autorisation),
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
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
`T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , `T2`.`chp_nom_source` , 
`T0`.`chi_id_autorisation`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
   AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T0`.`che_pour_sous_liste_autorisation` = :T0_che_pour_sous_liste_autorisation
   AND `T0`.`chx_acces_autorisation` NOT IN :acces_pas_dans
   AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation) 
ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
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
WHERE `chi_id_autorisation` = :c_chi_id_autorisation ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('1144','autorisations','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_autorisation`),:chi_id_autorisation))
)  ','DELETE FROM b1.tbl_autorisations
WHERE `chi_id_autorisation` = :chi_id_autorisation ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('1145','menus','liste_ecran','sélectionner(
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
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation),
         egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu),
         comme(champ(`T0`,`cht_libelle_menu`),:T0_cht_libelle_menu),
         comme(champ(`T0`,`chp_titre_menu`),:T0_chp_titre_menu),
         egal(champ(`T0`,`chx_autorisation_menu`),:T0_chx_autorisation_menu),
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         pas_dans(champ(`T1`,`chx_acces_autorisation`),:acces_pas_dans)
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
   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation
   AND `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
   AND `T1`.`chx_acces_autorisation` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
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
WHERE `chi_id_menu` = :c_chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('1149','menus','delete','supprimer(
   base_de_reference(),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ','DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
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
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus'),
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
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
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
   AND chx_utilisateur_tache = chi_id_utilisateur) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
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
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
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
   AND `che_priorite_tache` >= 1) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
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
   AND `che_priorite_tache` < 99) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_acces'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus'),
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
         comme(champ(`T0`,`cht_rev_parametre`),:T0_cht_rev_parametre)
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
   AND `T0`.`cht_rev_parametre` LIKE :T0_cht_rev_parametre) 
ORDER BY `T0`.`chi_id_parametre` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres'),
('1182',NULL,'select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_parametre`),
      champ(`T0`,`chp_cle_parametre`),
      champ(`T0`,`chp_nom_parametre`),
      champ(`T0`,`cht_commentaire_parametre`),
      champ(`T0`,`cht_rev_parametre`),
      champ(`T0`,`cht_ordre_parametre`),
      champ(`T0`,`che_pour_admin_parametre`)
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
`T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
 FROM b1.tbl_parametres T0
WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres'),
('1184','','update','modifier(
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
   )
)  ','UPDATE b1.tbl_parametres SET 
   `chp_cle_parametre` = :n_chp_cle_parametre , 
   `chp_nom_parametre` = :n_chp_nom_parametre , 
   `che_pour_admin_parametre` = :n_che_pour_admin_parametre , 
   `cht_rev_parametre` = :n_cht_rev_parametre , 
   `cht_commentaire_parametre` = :n_cht_commentaire_parametre , 
   `chd__dtc_parametre` = :n_chd__dtc_parametre , 
   `chd__dtm_parametre` = :n_chd__dtm_parametre , 
   `che__nur_parametre` = :n_che__nur_parametre',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres'),
('1185','','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_parametres,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_parametre`),:chi_id_parametre))
)  ','DELETE FROM b1.tbl_parametres
WHERE `chi_id_parametre` = :chi_id_parametre ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_parametres'),
('1186','','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_grandeur`),
      champ(`T0`,`chx_parametre_grandeur`),
      champ(`T0`,`chp_cle_grandeur`),
      champ(`T0`,`cht_rev_grandeur`),
      champ(`T0`,`che_actif_grandeur`),
      champ(`T1`,`chp_cle_parametre`),
      champ(`T1`,`chp_nom_parametre`),
      champ(`T1`,`cht_rev_parametre`),
      champ(`T1`,`cht_ordre_parametre`)
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
`T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre`
 FROM b1.tbl_grandeurs T0
 LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur

WHERE `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
('1188','','update','modifier(
   valeurs(affecte(champ(`chp_cle_grandeur`),:n_chp_cle_grandeur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:c_chi_id_grandeur))
)  ','UPDATE b1.tbl_grandeurs SET 
   `chp_cle_grandeur` = :n_chp_cle_grandeur
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
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
WHERE `chi_id_parametre` = :c_chi_id_parametre ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_parametres'),
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
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
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
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
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
WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
('1205','','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_grandeurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_grandeur`),:chi_id_grandeur))
)  ','DELETE FROM b1.tbl_grandeurs
WHERE `chi_id_grandeur` = :chi_id_grandeur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_grandeurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_grandeurs'),
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
`T4`.`chp_nom_metier` , `T0`.`chx_utilisateur_acteur` , `T0`.`chx_statut_acteur` , `T5`.`chp_cle_grandeur`
 FROM b2.tbl_acteurs T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur

 LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces

 LEFT JOIN b1.tbl_grandeurs T5 ON T5.chi_id_grandeur = T0.chx_statut_acteur

WHERE (`T0`.`chp_nom_acteur` LIKE :T0_chp_nom_acteur
   AND `T0`.`chp_prenom_acteur` LIKE :T0_chp_prenom_acteur
   AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
   AND `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
   AND `T0`.`chx_statut_acteur` = :T0_chx_statut_acteur) 
ORDER BY `T0`.`chx_utilisateur_acteur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
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
WHERE `chx_utilisateur_acteur` = :c_chx_utilisateur_acteur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
('2005',NULL,'delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,base(b2)))
      )
   ),
   conditions(egal(champ(`chx_utilisateur_acteur`),:chx_utilisateur_acteur))
)  ','DELETE FROM b2.tbl_acteurs
WHERE `chx_utilisateur_acteur` = :chx_utilisateur_acteur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('2015','sources','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:chi_id_source))
)  ','DELETE FROM b1.tbl_sources
WHERE `chi_id_source` = :chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
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
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
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
WHERE `chi_id_tache` = :c_chi_id_tache ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches'),
('2025','tâches','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_tache`),:chi_id_tache))
)  ','DELETE FROM b1.tbl_taches
WHERE `chi_id_tache` = :chi_id_tache ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_taches');
/*================================================================================ FIN BLOC TABLE tbl_requetes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (1) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  che_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ,  chx_actif_tache ) VALUES
('1','1','les tâches des utilisateurs','5','2026-06-06 11:39:42.307','2026-02-09 07:38:23.887','0','00_00_00');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 0 (3986) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('13422','sql','2025','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13423','sql','2025','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('13424','sql','2025','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('13425','sql','2025','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('13426','sql','2025','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('13427','sql','2025','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('13428','sql','2025','6','tbl_taches','c','5','0','81','90','5','0','1','0','80','7',''),
('13429','sql','2025','7','base','f','5','0','92','95','5','1','2','1','96','14',''),
('13430','sql','2025','8','b1','c','6','0','97','98','7','0','1','0','96','14',''),
('13431','sql','2025','9','conditions','f','1','0','120','129','1','1','2','3','130','14',''),
('13432','sql','2025','10','egal','f','2','0','131','134','9','2','1','2','135','14',''),
('13433','sql','2025','11','champ','f','3','0','136','140','10','1','1','1','141','13',''),
('13434','sql','2025','12','chi_id_tache','c','4','2','143','154','11','0','1','0','141','14',''),
('13435','sql','2025','13',':chi_id_tache','c','3','0','158','170','10','0','2','0','141','14',''),
('13436','sql','2024','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13437','sql','2024','1','modifier','f','0','0','0','7','0','3','1','6','8','33',''),
('13438','sql','2024','2','valeurs','f','1','0','13','19','1','4','1','3','20','19',''),
('13439','sql','2024','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('13440','sql','2024','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('13441','sql','2024','5','chp_texte_tache','c','4','2','36','50','4','0','1','0','34','33',''),
('13442','sql','2024','6',':n_chp_texte_tache','c','3','0','54','71','3','0','2','0','34','33',''),
('13443','sql','2024','7','affecte','f','2','0','74','80','2','2','2','2','81','11',''),
('13444','sql','2024','8','champ','f','3','0','82','86','7','1','1','1','87','10',''),
('13445','sql','2024','9','che_priorite_tache','c','4','2','89','106','8','0','1','0','87','33',''),
('13446','sql','2024','10',':n_che_priorite_tache','c','3','0','110','130','7','0','2','0','87','33',''),
('13447','sql','2024','11','affecte','f','2','0','133','139','2','2','3','2','140','15',''),
('13448','sql','2024','12','champ','f','3','0','141','145','11','1','1','1','146','14',''),
('13449','sql','2024','13','chd__dtm_tache','c','4','2','148','161','12','0','1','0','146','33',''),
('13450','sql','2024','14',':n_chd__dtm_tache','c','3','0','165','181','11','0','2','0','146','33',''),
('13451','sql','2024','15','affecte','f','2','0','184','190','2','2','4','2','191','33',''),
('13452','sql','2024','16','champ','f','3','0','192','196','15','1','1','1','197','18',''),
('13453','sql','2024','17','chx_utilisateur_tache','c','4','2','199','219','16','0','1','0','197','33',''),
('13454','sql','2024','18',':n_chx_utilisateur_tache','c','3','0','223','246','15','0','2','0','197','33',''),
('13455','sql','2024','19','provenance','f','1','0','254','263','1','1','2','5','264','28',''),
('13456','sql','2024','20','table_reference','f','2','0','272','286','19','1','1','4','287','33',''),
('13457','sql','2024','21','source','f','3','0','298','303','20','1','1','3','304','33',''),
('13458','sql','2024','22','nom_de_la_table','f','4','0','305','319','21','3','1','2','320','33',''),
('13459','sql','2024','23','tbl_taches','c','5','0','321','330','22','0','1','0','320','24',''),
('13460','sql','2024','24','alias','f','5','0','332','336','22','1','2','1','337','26',''),
('13461','sql','2024','25','T0','c','6','0','338','339','24','0','1','0','337','33',''),
('13462','sql','2024','26','base','f','5','0','342','345','22','1','3','1','346','33',''),
('13463','sql','2024','27','b1','c','6','0','347','348','26','0','1','0','346','33',''),
('13464','sql','2024','28','conditions','f','1','0','370','379','1','1','3','3','380','33',''),
('13465','sql','2024','29','egal','f','2','0','381','384','28','2','1','2','385','33',''),
('13466','sql','2024','30','champ','f','3','0','386','390','29','1','1','1','391','32',''),
('13467','sql','2024','31','chi_id_tache','c','4','2','393','404','30','0','1','0','391','33',''),
('13468','sql','2024','32',':c_chi_id_tache','c','3','0','408','422','29','0','2','0','391','33',''),
('13469','sql','2023','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13470','sql','2023','1','insérer','f','0','0','0','6','0','2','1','6','7','30',''),
('13471','sql','2023','2','valeurs','f','1','0','12','18','1','5','1','3','19','23',''),
('13472','sql','2023','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('13473','sql','2023','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('13474','sql','2023','5','chx_utilisateur_tache','c','4','2','42','62','4','0','1','0','40','30',''),
('13475','sql','2023','6',':chx_utilisateur_tache','c','3','0','66','87','3','0','2','0','40','30',''),
('13476','sql','2023','7','affecte','f','2','0','97','103','2','2','2','2','104','11',''),
('13477','sql','2023','8','champ','f','3','0','105','109','7','1','1','1','110','10',''),
('13478','sql','2023','9','chp_texte_tache','c','4','2','112','126','8','0','1','0','110','30',''),
('13479','sql','2023','10',':chp_texte_tache','c','3','0','130','145','7','0','2','0','110','30',''),
('13480','sql','2023','11','affecte','f','2','0','155','161','2','2','3','2','162','15',''),
('13481','sql','2023','12','champ','f','3','0','163','167','11','1','1','1','168','14',''),
('13482','sql','2023','13','che_priorite_tache','c','4','2','170','187','12','0','1','0','168','30',''),
('13483','sql','2023','14',':che_priorite_tache','c','3','0','191','209','11','0','2','0','168','30',''),
('13484','sql','2023','15','affecte','f','2','0','219','225','2','2','4','2','226','19',''),
('13485','sql','2023','16','champ','f','3','0','227','231','15','1','1','1','232','18',''),
('13486','sql','2023','17','chd__dtm_tache','c','4','2','234','247','16','0','1','0','232','30',''),
('13487','sql','2023','18',':chd__dtm_tache','c','3','0','251','265','15','0','2','0','232','30',''),
('13488','sql','2023','19','affecte','f','2','0','275','281','2','2','5','2','282','30',''),
('13489','sql','2023','20','champ','f','3','0','283','287','19','1','1','1','288','22',''),
('13490','sql','2023','21','chd__dtc_tache','c','4','2','290','303','20','0','1','0','288','30',''),
('13491','sql','2023','22',':chd__dtc_tache','c','3','0','307','321','19','0','2','0','288','30',''),
('13492','sql','2023','23','provenance','f','1','0','333','342','1','1','2','5','343','30',''),
('13493','sql','2023','24','table_reference','f','2','0','351','365','23','1','1','4','366','30',''),
('13494','sql','2023','25','source','f','3','0','377','382','24','1','1','3','383','30',''),
('13495','sql','2023','26','nom_de_la_table','f','4','0','384','398','25','2','1','2','399','30',''),
('13496','sql','2023','27','tbl_taches','c','5','0','400','409','26','0','1','0','399','28',''),
('13497','sql','2023','28','base','f','5','0','411','414','26','1','2','1','415','30',''),
('13498','sql','2023','29','b1','c','6','0','416','417','28','0','1','0','415','30',''),
('13499','sql','2022','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13500','sql','2022','1','sélectionner','f','0','0','0','11','0','3','1','6','12','49',''),
('13501','sql','2022','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('13502','sql','2022','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('13503','sql','2022','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('13504','sql','2022','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','49',''),
('13505','sql','2022','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('13506','sql','2022','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('13507','sql','2022','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','49',''),
('13508','sql','2022','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('13509','sql','2022','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('13510','sql','2022','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','49',''),
('13511','sql','2022','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('13512','sql','2022','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('13513','sql','2022','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','49',''),
('13514','sql','2022','15','champ','f','2','0','186','190','2','2','5','1','191','49',''),
('13515','sql','2022','16','T1','c','3','2','193','194','15','0','1','0','191','17',''),
('13516','sql','2022','17','chp_nom_de_connexion_utilisateur','c','3','2','198','229','15','0','2','0','191','49',''),
('13517','sql','2022','18','provenance','f','1','0','242','251','1','2','2','5','252','43',''),
('13518','sql','2022','19','table_reference','f','2','0','260','274','18','1','1','4','275','27',''),
('13519','sql','2022','20','source','f','3','0','286','291','19','1','1','3','292','49',''),
('13520','sql','2022','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','49',''),
('13521','sql','2022','22','tbl_taches','c','5','0','309','318','21','0','1','0','308','23',''),
('13522','sql','2022','23','alias','f','5','0','320','324','21','1','2','1','325','25',''),
('13523','sql','2022','24','T0','c','6','0','326','327','23','0','1','0','325','49',''),
('13524','sql','2022','25','base','f','5','0','330','333','21','1','3','1','334','49',''),
('13525','sql','2022','26','b1','c','6','0','335','336','25','0','1','0','334','49',''),
('13526','sql','2022','27','jointure_gauche','f','2','0','356','370','18','2','2','4','371','49',''),
('13527','sql','2022','28','source','f','3','0','382','387','27','1','1','3','388','35',''),
('13528','sql','2022','29','nom_de_la_table','f','4','0','389','403','28','3','1','2','404','49',''),
('13529','sql','2022','30','tbl_utilisateurs','c','5','0','405','420','29','0','1','0','404','31',''),
('13530','sql','2022','31','alias','f','5','0','422','426','29','1','2','1','427','33',''),
('13531','sql','2022','32','T1','c','6','0','428','429','31','0','1','0','427','49',''),
('13532','sql','2022','33','base','f','5','0','432','435','29','1','3','1','436','49',''),
('13533','sql','2022','34','b1','c','6','0','437','438','33','0','1','0','436','49',''),
('13534','sql','2022','35','contrainte','f','3','0','453','462','27','1','2','3','463','49',''),
('13535','sql','2022','36','egal','f','4','0','464','467','35','2','1','2','468','49',''),
('13536','sql','2022','37','champ','f','5','0','469','473','36','2','1','1','474','40',''),
('13537','sql','2022','38','T1','c','6','0','475','476','37','0','1','0','474','39',''),
('13538','sql','2022','39','chi_id_utilisateur','c','6','0','478','495','37','0','2','0','474','49',''),
('13539','sql','2022','40','champ','f','5','0','498','502','36','2','2','1','503','49',''),
('13540','sql','2022','41','T0','c','6','0','504','505','40','0','1','0','503','42',''),
('13541','sql','2022','42','chx_utilisateur_tache','c','6','0','507','527','40','0','2','0','503','49',''),
('13542','sql','2022','43','conditions','f','1','0','549','558','1','1','3','3','559','49',''),
('13543','sql','2022','44','egal','f','2','0','560','563','43','2','1','2','564','49',''),
('13544','sql','2022','45','champ','f','3','0','565','569','44','2','1','1','570','48',''),
('13545','sql','2022','46','T0','c','4','2','572','573','45','0','1','0','570','47',''),
('13546','sql','2022','47','chi_id_tache','c','4','2','577','588','45','0','2','0','570','49',''),
('13547','sql','2022','48',':T0_chi_id_tache','c','3','0','592','607','44','0','2','0','570','49',''),
('13548','sql','2021','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13549','sql','2021','1','sélectionner','f','0','0','0','11','0','4','1','6','12','96',''),
('13550','sql','2021','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('13551','sql','2021','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('13552','sql','2021','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('13553','sql','2021','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','96',''),
('13554','sql','2021','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('13555','sql','2021','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('13556','sql','2021','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','96',''),
('13557','sql','2021','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('13558','sql','2021','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('13559','sql','2021','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','96',''),
('13560','sql','2021','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('13561','sql','2021','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('13562','sql','2021','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','96',''),
('13563','sql','2021','15','champ','f','2','0','186','190','2','2','5','1','191','18',''),
('13564','sql','2021','16','T0','c','3','2','193','194','15','0','1','0','191','17',''),
('13565','sql','2021','17','chd__dtm_tache','c','3','2','198','211','15','0','2','0','191','96',''),
('13566','sql','2021','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('13567','sql','2021','19','T0','c','3','2','229','230','18','0','1','0','227','20',''),
('13568','sql','2021','20','chd__dtc_tache','c','3','2','234','247','18','0','2','0','227','96',''),
('13569','sql','2021','21','champ','f','2','0','258','262','2','2','7','1','263','24',''),
('13570','sql','2021','22','T0','c','3','2','265','266','21','0','1','0','263','23',''),
('13571','sql','2021','23','che__nur_tache','c','3','2','270','283','21','0','2','0','263','96',''),
('13572','sql','2021','24','champ','f','2','0','294','298','2','2','8','1','299','96',''),
('13573','sql','2021','25','T1','c','3','2','301','302','24','0','1','0','299','26',''),
('13574','sql','2021','26','chp_nom_de_connexion_utilisateur','c','3','2','306','337','24','0','2','0','299','96',''),
('13575','sql','2021','27','provenance','f','1','0','350','359','1','2','2','5','360','52',''),
('13576','sql','2021','28','table_reference','f','2','0','368','382','27','1','1','4','383','36',''),
('13577','sql','2021','29','source','f','3','0','394','399','28','1','1','3','400','96',''),
('13578','sql','2021','30','nom_de_la_table','f','4','0','401','415','29','3','1','2','416','96',''),
('13579','sql','2021','31','tbl_taches','c','5','0','417','426','30','0','1','0','416','32',''),
('13580','sql','2021','32','alias','f','5','0','428','432','30','1','2','1','433','34',''),
('13581','sql','2021','33','T0','c','6','0','434','435','32','0','1','0','433','96',''),
('13582','sql','2021','34','base','f','5','0','438','441','30','1','3','1','442','96',''),
('13583','sql','2021','35','b1','c','6','0','443','444','34','0','1','0','442','96',''),
('13584','sql','2021','36','jointure_gauche','f','2','0','464','478','27','2','2','4','479','96',''),
('13585','sql','2021','37','source','f','3','0','490','495','36','1','1','3','496','44',''),
('13586','sql','2021','38','nom_de_la_table','f','4','0','497','511','37','3','1','2','512','96',''),
('13587','sql','2021','39','tbl_utilisateurs','c','5','0','513','528','38','0','1','0','512','40',''),
('13588','sql','2021','40','alias','f','5','0','530','534','38','1','2','1','535','42',''),
('13589','sql','2021','41','T1','c','6','0','536','537','40','0','1','0','535','96',''),
('13590','sql','2021','42','base','f','5','0','540','543','38','1','3','1','544','96',''),
('13591','sql','2021','43','b1','c','6','0','545','546','42','0','1','0','544','96',''),
('13592','sql','2021','44','contrainte','f','3','0','561','570','36','1','2','3','571','96',''),
('13593','sql','2021','45','egal','f','4','0','572','575','44','2','1','2','576','96',''),
('13594','sql','2021','46','champ','f','5','0','577','581','45','2','1','1','582','49',''),
('13595','sql','2021','47','T1','c','6','0','583','584','46','0','1','0','582','48',''),
('13596','sql','2021','48','chi_id_utilisateur','c','6','0','586','603','46','0','2','0','582','96',''),
('13597','sql','2021','49','champ','f','5','0','606','610','45','2','2','1','611','96',''),
('13598','sql','2021','50','T0','c','6','0','612','613','49','0','1','0','611','51',''),
('13599','sql','2021','51','chx_utilisateur_tache','c','6','0','615','635','49','0','2','0','611','96',''),
('13600','sql','2021','52','conditions','f','1','0','657','666','1','1','3','4','667','84',''),
('13601','sql','2021','53','et','f','2','0','675','676','52','6','1','3','677','96',''),
('13602','sql','2021','54','egal','f','3','0','688','691','53','2','1','2','692','59',''),
('13603','sql','2021','55','champ','f','4','0','693','697','54','2','1','1','698','58',''),
('13604','sql','2021','56','T0','c','5','2','700','701','55','0','1','0','698','57',''),
('13605','sql','2021','57','chi_id_tache','c','5','2','705','716','55','0','2','0','698','96',''),
('13606','sql','2021','58',':T0_chi_id_tache','c','4','0','720','735','54','0','2','0','698','96',''),
('13607','sql','2021','59','egal','f','3','0','748','751','53','2','2','2','752','64',''),
('13608','sql','2021','60','champ','f','4','0','753','757','59','2','1','1','758','63',''),
('13609','sql','2021','61','T0','c','5','2','760','761','60','0','1','0','758','62',''),
('13610','sql','2021','62','chx_utilisateur_tache','c','5','2','765','785','60','0','2','0','758','96',''),
('13611','sql','2021','63',':T0_chx_utilisateur_tache','c','4','0','789','813','59','0','2','0','758','96',''),
('13612','sql','2021','64','comme','f','3','0','826','830','53','2','3','2','831','69',''),
('13613','sql','2021','65','champ','f','4','0','832','836','64','2','1','1','837','68',''),
('13614','sql','2021','66','T0','c','5','2','839','840','65','0','1','0','837','67',''),
('13615','sql','2021','67','chp_texte_tache','c','5','2','844','858','65','0','2','0','837','96',''),
('13616','sql','2021','68',':T0_chp_texte_tache','c','4','0','862','880','64','0','2','0','837','96',''),
('13617','sql','2021','69','egal','f','3','0','893','896','53','2','4','2','897','74',''),
('13618','sql','2021','70','champ','f','4','0','898','902','69','2','1','1','903','73',''),
('13619','sql','2021','71','T0','c','5','2','905','906','70','0','1','0','903','72',''),
('13620','sql','2021','72','che_priorite_tache','c','5','2','910','927','70','0','2','0','903','96',''),
('13621','sql','2021','73',':T0_che_priorite_tache','c','4','0','931','952','69','0','2','0','903','96',''),
('13622','sql','2021','74','inf','f','3','0','965','967','53','2','5','2','968','79',''),
('13623','sql','2021','75','champ','f','4','0','969','973','74','2','1','1','974','78',''),
('13624','sql','2021','76','T0','c','5','2','976','977','75','0','1','0','974','77',''),
('13625','sql','2021','77','che_priorite_tache','c','5','2','981','998','75','0','2','0','974','96',''),
('13626','sql','2021','78',':T0_che_priorite_tache2','c','4','0','1002','1024','74','0','2','0','974','96',''),
('13627','sql','2021','79','comme','f','3','0','1037','1041','53','2','6','2','1042','96',''),
('13628','sql','2021','80','champ','f','4','0','1043','1047','79','2','1','1','1048','83',''),
('13629','sql','2021','81','T1','c','5','2','1050','1051','80','0','1','0','1048','82',''),
('13630','sql','2021','82','chp_nom_de_connexion_utilisateur','c','5','2','1055','1086','80','0','2','0','1048','96',''),
('13631','sql','2021','83',':T1_chp_nom_de_connexion_utilisateur','c','4','0','1090','1125','79','0','2','0','1048','96',''),
('13632','sql','2021','84','complements','f','1','0','1145','1155','1','2','4','4','1156','96',''),
('13633','sql','2021','85','trier_par','f','2','0','1164','1172','84','1','1','3','1173','91',''),
('13634','sql','2021','86','','f','3','0','1164','1172','85','2','1','2','1174','96',''),
('13635','sql','2021','87','champ','f','4','0','1175','1179','86','2','1','1','1180','90',''),
('13636','sql','2021','88','T0','c','5','2','1182','1183','87','0','1','0','1180','89',''),
('13637','sql','2021','89','che_priorite_tache','c','5','2','1187','1204','87','0','2','0','1180','96',''),
('13638','sql','2021','90','croissant','f','4','0','1208','1216','86','0','2','0','1217','96',''),
('13639','sql','2021','91','limité_à','f','2','0','1229','1236','84','2','2','2','1237','96',''),
('13640','sql','2021','92','quantité','f','3','0','1238','1245','91','1','1','1','1246','94',''),
('13641','sql','2021','93',':quantitee','c','4','0','1247','1256','92','0','1','0','1246','96',''),
('13642','sql','2021','94','début','f','3','0','1259','1263','91','1','2','1','1264','96',''),
('13643','sql','2021','95',':debut','c','4','0','1265','1270','94','0','1','0','1264','96',''),
('13644','sql','2015','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13645','sql','2015','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('13646','sql','2015','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('13647','sql','2015','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('13648','sql','2015','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('13649','sql','2015','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('13650','sql','2015','6','tbl_sources','c','5','0','81','91','5','0','1','0','80','7',''),
('13651','sql','2015','7','base','f','5','0','93','96','5','1','2','1','97','14',''),
('13652','sql','2015','8','b1','c','6','0','98','99','7','0','1','0','97','14',''),
('13653','sql','2015','9','conditions','f','1','0','121','130','1','1','2','3','131','14',''),
('13654','sql','2015','10','egal','f','2','0','132','135','9','2','1','2','136','14',''),
('13655','sql','2015','11','champ','f','3','0','137','141','10','1','1','1','142','13',''),
('13656','sql','2015','12','chi_id_source','c','4','2','144','156','11','0','1','0','142','14',''),
('13657','sql','2015','13',':chi_id_source','c','3','0','160','173','10','0','2','0','142','14',''),
('13658','sql','2012','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13659','sql','2012','1','sélectionner','f','0','0','0','11','0','3','1','6','12','33',''),
('13660','sql','2012','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('13661','sql','2012','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('13662','sql','2012','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('13663','sql','2012','5','chi_id_source','c','3','2','44','56','3','0','2','0','37','33',''),
('13664','sql','2012','6','champ','f','2','0','67','71','2','2','2','1','72','9',''),
('13665','sql','2012','7','T0','c','3','2','74','75','6','0','1','0','72','8',''),
('13666','sql','2012','8','chp_nom_source','c','3','2','79','92','6','0','2','0','72','33',''),
('13667','sql','2012','9','champ','f','2','0','103','107','2','2','3','1','108','12',''),
('13668','sql','2012','10','T0','c','3','2','110','111','9','0','1','0','108','11',''),
('13669','sql','2012','11','cht_commentaire_source','c','3','2','115','136','9','0','2','0','108','33',''),
('13670','sql','2012','12','champ','f','2','0','147','151','2','2','4','1','152','15',''),
('13671','sql','2012','13','T0','c','3','2','154','155','12','0','1','0','152','14',''),
('13672','sql','2012','14','che_autorisation_globale_source','c','3','2','159','189','12','0','2','0','152','33',''),
('13673','sql','2012','15','champ','f','2','0','200','204','2','2','5','1','205','33',''),
('13674','sql','2012','16','T0','c','3','2','207','208','15','0','1','0','205','17',''),
('13675','sql','2012','17','che_pour_util_source','c','3','2','212','231','15','0','2','0','205','33',''),
('13676','sql','2012','18','provenance','f','1','0','244','253','1','1','2','5','254','27',''),
('13677','sql','2012','19','table_reference','f','2','0','262','276','18','1','1','4','277','33',''),
('13678','sql','2012','20','source','f','3','0','288','293','19','1','1','3','294','33',''),
('13679','sql','2012','21','nom_de_la_table','f','4','0','295','309','20','3','1','2','310','33',''),
('13680','sql','2012','22','tbl_sources','c','5','0','311','321','21','0','1','0','310','23',''),
('13681','sql','2012','23','alias','f','5','0','323','327','21','1','2','1','328','25',''),
('13682','sql','2012','24','T0','c','6','0','329','330','23','0','1','0','328','33',''),
('13683','sql','2012','25','base','f','5','0','333','336','21','1','3','1','337','33',''),
('13684','sql','2012','26','b1','c','6','0','338','339','25','0','1','0','337','33',''),
('13685','sql','2012','27','conditions','f','1','0','361','370','1','1','3','3','371','33',''),
('13686','sql','2012','28','egal','f','2','0','372','375','27','2','1','2','376','33',''),
('13687','sql','2012','29','champ','f','3','0','377','381','28','2','1','1','382','32',''),
('13688','sql','2012','30','T0','c','4','2','384','385','29','0','1','0','382','31',''),
('13689','sql','2012','31','chi_id_source','c','4','2','389','401','29','0','2','0','382','33',''),
('13690','sql','2012','32',':T0_chi_id_source','c','3','0','405','421','28','0','2','0','382','33',''),
('13691','sql','2011','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13692','sql','2011','1','sélectionner','f','0','0','0','11','0','4','1','6','12','77',''),
('13693','sql','2011','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('13694','sql','2011','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('13695','sql','2011','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('13696','sql','2011','5','chi_id_source','c','3','2','44','56','3','0','2','0','37','77',''),
('13697','sql','2011','6','champ','f','2','0','67','71','2','2','2','1','72','9',''),
('13698','sql','2011','7','T0','c','3','2','74','75','6','0','1','0','72','8',''),
('13699','sql','2011','8','chp_nom_source','c','3','2','79','92','6','0','2','0','72','77',''),
('13700','sql','2011','9','champ','f','2','0','103','107','2','2','3','1','108','12',''),
('13701','sql','2011','10','T0','c','3','2','110','111','9','0','1','0','108','11',''),
('13702','sql','2011','11','che_binaire_source','c','3','2','115','132','9','0','2','0','108','77',''),
('13703','sql','2011','12','champ','f','2','0','143','147','2','2','4','1','148','15',''),
('13704','sql','2011','13','T0','c','3','2','150','151','12','0','1','0','148','14',''),
('13705','sql','2011','14','cht_commentaire_source','c','3','2','155','176','12','0','2','0','148','77',''),
('13706','sql','2011','15','champ','f','2','0','187','191','2','2','5','1','192','77',''),
('13707','sql','2011','16','T0','c','3','2','194','195','15','0','1','0','192','17',''),
('13708','sql','2011','17','che_autorisation_globale_source','c','3','2','199','229','15','0','2','0','192','77',''),
('13709','sql','2011','18','provenance','f','1','0','242','251','1','1','2','5','252','27',''),
('13710','sql','2011','19','table_reference','f','2','0','260','274','18','1','1','4','275','77',''),
('13711','sql','2011','20','source','f','3','0','286','291','19','1','1','3','292','77',''),
('13712','sql','2011','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','77',''),
('13713','sql','2011','22','tbl_sources','c','5','0','309','319','21','0','1','0','308','23',''),
('13714','sql','2011','23','alias','f','5','0','321','325','21','1','2','1','326','25',''),
('13715','sql','2011','24','T0','c','6','0','327','328','23','0','1','0','326','77',''),
('13716','sql','2011','25','base','f','5','0','331','334','21','1','3','1','335','77',''),
('13717','sql','2011','26','b1','c','6','0','336','337','25','0','1','0','335','77',''),
('13718','sql','2011','27','conditions','f','1','0','359','368','1','1','3','4','369','65',''),
('13719','sql','2011','28','et','f','2','0','377','378','27','7','1','3','379','77',''),
('13720','sql','2011','29','comme','f','3','0','390','394','28','2','1','2','395','34',''),
('13721','sql','2011','30','champ','f','4','0','396','400','29','2','1','1','401','33',''),
('13722','sql','2011','31','T0','c','5','2','403','404','30','0','1','0','401','32',''),
('13723','sql','2011','32','chp_nom_source','c','5','2','408','421','30','0','2','0','401','77',''),
('13724','sql','2011','33',':T0_chp_nom_source','c','4','0','425','442','29','0','2','0','401','77',''),
('13725','sql','2011','34','egal','f','3','0','455','458','28','2','2','2','459','39',''),
('13726','sql','2011','35','champ','f','4','0','460','464','34','2','1','1','465','38',''),
('13727','sql','2011','36','T0','c','5','2','467','468','35','0','1','0','465','37',''),
('13728','sql','2011','37','chi_id_source','c','5','2','472','484','35','0','2','0','465','77',''),
('13729','sql','2011','38',':T0_chi_id_source','c','4','0','488','504','34','0','2','0','465','77',''),
('13730','sql','2011','39','sup','f','3','0','517','519','28','2','3','2','520','44',''),
('13731','sql','2011','40','champ','f','4','0','521','525','39','2','1','1','526','43',''),
('13732','sql','2011','41','T0','c','5','2','528','529','40','0','1','0','526','42',''),
('13733','sql','2011','42','chi_id_source','c','5','2','533','545','40','0','2','0','526','77',''),
('13734','sql','2011','43',':T0_chi_id_source2','c','4','0','549','566','39','0','2','0','526','77',''),
('13735','sql','2011','44','infegal','f','3','0','579','585','28','2','4','2','586','49',''),
('13736','sql','2011','45','champ','f','4','0','587','591','44','2','1','1','592','48',''),
('13737','sql','2011','46','T0','c','5','2','594','595','45','0','1','0','592','47',''),
('13738','sql','2011','47','chi_id_source','c','5','2','599','611','45','0','2','0','592','77',''),
('13739','sql','2011','48',':T0_chi_id_source3','c','4','0','615','632','44','0','2','0','592','77',''),
('13740','sql','2011','49','egal','f','3','0','645','648','28','2','5','2','649','54',''),
('13741','sql','2011','50','champ','f','4','0','650','654','49','2','1','1','655','53',''),
('13742','sql','2011','51','T0','c','5','2','657','658','50','0','1','0','655','52',''),
('13743','sql','2011','52','che_binaire_source','c','5','2','662','679','50','0','2','0','655','77',''),
('13744','sql','2011','53',':T0_che_binaire_source','c','4','0','683','704','49','0','2','0','655','77',''),
('13745','sql','2011','54','egal','f','3','0','717','720','28','2','6','2','721','59',''),
('13746','sql','2011','55','champ','f','4','0','722','726','54','2','1','1','727','58',''),
('13747','sql','2011','56','T0','c','5','2','729','730','55','0','1','0','727','57',''),
('13748','sql','2011','57','che_autorisation_globale_source','c','5','2','734','764','55','0','2','0','727','77',''),
('13749','sql','2011','58',':T0_che_autorisation_globale_source','c','4','0','768','802','54','0','2','0','727','77',''),
('13750','sql','2011','59','dans','f','3','0','815','818','28','2','7','2','819','77',''),
('13751','sql','2011','60','champ','f','4','0','820','824','59','2','1','1','825','63',''),
('13752','sql','2011','61','T0','c','5','2','827','828','60','0','1','0','825','62',''),
('13753','sql','2011','62','che_pour_util_source','c','5','2','832','851','60','0','2','0','825','77',''),
('13754','sql','2011','63','','f','4','0','832','851','59','1','2','1','855','77',''),
('13755','sql','2011','64',':T0_che_pour_util_source','c','5','0','856','879','63','0','1','0','855','77',''),
('13756','sql','2011','65','complements','f','1','0','900','910','1','2','4','4','911','77',''),
('13757','sql','2011','66','trier_par','f','2','0','919','927','65','1','1','3','928','72',''),
('13758','sql','2011','67','','f','3','0','919','927','66','2','1','2','929','77',''),
('13759','sql','2011','68','champ','f','4','0','930','934','67','2','1','1','935','71',''),
('13760','sql','2011','69','T0','c','5','2','937','938','68','0','1','0','935','70',''),
('13761','sql','2011','70','chi_id_source','c','5','2','942','954','68','0','2','0','935','77',''),
('13762','sql','2011','71','décroissant','f','4','0','958','968','67','0','2','0','969','77',''),
('13763','sql','2011','72','limité_à','f','2','0','981','988','65','2','2','2','989','77',''),
('13764','sql','2011','73','quantité','f','3','0','990','997','72','1','1','1','998','75',''),
('13765','sql','2011','74',':quantitee','c','4','0','999','1008','73','0','1','0','998','77',''),
('13766','sql','2011','75','début','f','3','0','1011','1015','72','1','2','1','1016','77',''),
('13767','sql','2011','76',':debut','c','4','0','1017','1022','75','0','1','0','1016','77',''),
('13768','sql','2005','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13769','sql','2005','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('13770','sql','2005','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('13771','sql','2005','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('13772','sql','2005','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('13773','sql','2005','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('13774','sql','2005','6','tbl_acteurs','c','5','0','81','91','5','0','1','0','80','7',''),
('13775','sql','2005','7','base','f','5','0','93','96','5','1','2','1','97','14',''),
('13776','sql','2005','8','b2','c','6','0','98','99','7','0','1','0','97','14',''),
('13777','sql','2005','9','conditions','f','1','0','121','130','1','1','2','3','131','14',''),
('13778','sql','2005','10','egal','f','2','0','132','135','9','2','1','2','136','14',''),
('13779','sql','2005','11','champ','f','3','0','137','141','10','1','1','1','142','13',''),
('13780','sql','2005','12','chx_utilisateur_acteur','c','4','2','144','165','11','0','1','0','142','14',''),
('13781','sql','2005','13',':chx_utilisateur_acteur','c','3','0','169','191','10','0','2','0','142','14',''),
('13782','sql','2004','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('13783','sql','2004','1','modifier','f','0','0','0','7','0','3','1','6','8','29',''),
('13784','sql','2004','2','valeurs','f','1','0','13','19','1','3','1','3','20','15',''),
('13785','sql','2004','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('13786','sql','2004','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('13787','sql','2004','5','chp_nom_acteur','c','4','2','36','49','4','0','1','0','34','29',''),
('13788','sql','2004','6',':n_chp_nom_acteur','c','3','0','53','69','3','0','2','0','34','29',''),
('13789','sql','2004','7','affecte','f','2','0','72','78','2','2','2','2','79','11',''),
('13790','sql','2004','8','champ','f','3','0','80','84','7','1','1','1','85','10',''),
('13791','sql','2004','9','chp_prenom_acteur','c','4','2','87','103','8','0','1','0','85','29',''),
('13792','sql','2004','10',':n_chp_prenom_acteur','c','3','0','107','126','7','0','2','0','85','29',''),
('13793','sql','2004','11','affecte','f','2','0','129','135','2','2','3','2','136','29',''),
('13794','sql','2004','12','champ','f','3','0','137','141','11','1','1','1','142','14',''),
('13795','sql','2004','13','chx_statut_acteur','c','4','2','144','160','12','0','1','0','142','29',''),
('13796','sql','2004','14',':n_chx_statut_acteur','c','3','0','164','183','11','0','2','0','142','29',''),
('13797','sql','2004','15','provenance','f','1','0','191','200','1','1','2','5','201','24',''),
('13798','sql','2004','16','table_reference','f','2','0','209','223','15','1','1','4','224','29',''),
('13799','sql','2004','17','source','f','3','0','235','240','16','1','1','3','241','29',''),
('13800','sql','2004','18','nom_de_la_table','f','4','0','242','256','17','3','1','2','257','29',''),
('13801','sql','2004','19','tbl_acteurs','c','5','0','258','268','18','0','1','0','257','20',''),
('13802','sql','2004','20','alias','f','5','0','270','274','18','1','2','1','275','22',''),
('13803','sql','2004','21','T0','c','6','0','276','277','20','0','1','0','275','29',''),
('13804','sql','2004','22','base','f','5','0','280','283','18','1','3','1','284','29',''),
('13805','sql','2004','23','b2','c','6','0','285','286','22','0','1','0','284','29',''),
('13806','sql','2004','24','conditions','f','1','0','308','317','1','1','3','3','318','29',''),
('13807','sql','2004','25','egal','f','2','0','319','322','24','2','1','2','323','29',''),
('13808','sql','2004','26','champ','f','3','0','324','328','25','1','1','1','329','28',''),
('13809','sql','2004','27','chx_utilisateur_acteur','c','4','2','331','352','26','0','1','0','329','29',''),
('13810','sql','2004','28',':c_chx_utilisateur_acteur','c','3','0','356','380','25','0','2','0','329','29',''),
('13811','sql','2003','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('13812','sql','2003','1','#','f','0','0','0','0','0','0','1','0','1','2','meta(inclure_le_prefixe_de_la_base_devant_la_table(1))'),
('13813','sql','2003','2','insérer','f','0','0','59','65','0','2','2','6','66','27',''),
('13814','sql','2003','3','valeurs','f','1','0','71','77','2','4','1','3','78','20',''),
('13815','sql','2003','4','affecte','f','2','0','79','85','3','2','1','2','86','8',''),
('13816','sql','2003','5','champ','f','3','0','87','91','4','1','1','1','92','7',''),
('13817','sql','2003','6','chx_utilisateur_acteur','c','4','2','94','115','5','0','1','0','92','27',''),
('13818','sql','2003','7',':chx_utilisateur_acteur','c','3','0','119','141','4','0','2','0','92','27',''),
('13819','sql','2003','8','affecte','f','2','0','144','150','3','2','2','2','151','12',''),
('13820','sql','2003','9','champ','f','3','0','152','156','8','1','1','1','157','11',''),
('13821','sql','2003','10','chp_nom_acteur','c','4','2','159','172','9','0','1','0','157','27',''),
('13822','sql','2003','11',':chp_nom_acteur','c','3','0','176','190','8','0','2','0','157','27',''),
('13823','sql','2003','12','affecte','f','2','0','193','199','3','2','3','2','200','16',''),
('13824','sql','2003','13','champ','f','3','0','201','205','12','1','1','1','206','15',''),
('13825','sql','2003','14','chp_prenom_acteur','c','4','2','208','224','13','0','1','0','206','27',''),
('13826','sql','2003','15',':chp_prenom_acteur','c','3','0','228','245','12','0','2','0','206','27',''),
('13827','sql','2003','16','affecte','f','2','0','248','254','3','2','4','2','255','27',''),
('13828','sql','2003','17','champ','f','3','0','256','260','16','1','1','1','261','19',''),
('13829','sql','2003','18','chx_statut_acteur','c','4','2','263','279','17','0','1','0','261','27',''),
('13830','sql','2003','19',':chx_statut_acteur','c','3','0','283','300','16','0','2','0','261','27',''),
('13831','sql','2003','20','provenance','f','1','0','308','317','2','1','2','5','318','27',''),
('13832','sql','2003','21','table_reference','f','2','0','326','340','20','1','1','4','341','27',''),
('13833','sql','2003','22','source','f','3','0','352','357','21','1','1','3','358','27',''),
('13834','sql','2003','23','nom_de_la_table','f','4','0','359','373','22','2','1','2','374','27',''),
('13835','sql','2003','24','tbl_acteurs','c','5','0','375','385','23','0','1','0','374','25',''),
('13836','sql','2003','25','base','f','5','0','387','390','23','1','2','1','391','27',''),
('13837','sql','2003','26','b2','c','6','0','392','393','25','0','1','0','391','27',''),
('13838','sql','2002','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('13839','sql','2002','1','#','f','0','0','0','0','0','0','1','0','1','2','meta(inclure_le_prefixe_de_la_base_devant_la_table(1))'),
('13840','sql','2002','2','sélectionner','f','0','0','59','70','0','3','2','6','71','141',''),
('13841','sql','2002','3','valeurs','f','1','0','76','82','2','14','1','2','83','46',''),
('13842','sql','2002','4','champ','f','2','0','91','95','3','2','1','1','96','7',''),
('13843','sql','2002','5','T0','c','3','2','98','99','4','0','1','0','96','6',''),
('13844','sql','2002','6','chx_utilisateur_acteur','c','3','2','103','124','4','0','2','0','96','141',''),
('13845','sql','2002','7','champ','f','2','0','135','139','3','2','2','1','140','10',''),
('13846','sql','2002','8','T0','c','3','2','142','143','7','0','1','0','140','9',''),
('13847','sql','2002','9','chp_nom_acteur','c','3','2','147','160','7','0','2','0','140','141',''),
('13848','sql','2002','10','champ','f','2','0','171','175','3','2','3','1','176','13',''),
('13849','sql','2002','11','T0','c','3','2','178','179','10','0','1','0','176','12',''),
('13850','sql','2002','12','chp_prenom_acteur','c','3','2','183','199','10','0','2','0','176','141',''),
('13851','sql','2002','13','champ','f','2','0','210','214','3','2','4','1','215','16',''),
('13852','sql','2002','14','T1','c','3','2','217','218','13','0','1','0','215','15',''),
('13853','sql','2002','15','chi_id_utilisateur','c','3','2','222','239','13','0','2','0','215','141',''),
('13854','sql','2002','16','champ','f','2','0','250','254','3','2','5','1','255','19',''),
('13855','sql','2002','17','T1','c','3','2','257','258','16','0','1','0','255','18',''),
('13856','sql','2002','18','chp_nom_de_connexion_utilisateur','c','3','2','262','293','16','0','2','0','255','141',''),
('13857','sql','2002','19','champ','f','2','0','304','308','3','2','6','1','309','22',''),
('13858','sql','2002','20','T1','c','3','2','311','312','19','0','1','0','309','21',''),
('13859','sql','2002','21','chx_acces_utilisateur','c','3','2','316','336','19','0','2','0','309','141',''),
('13860','sql','2002','22','champ','f','2','0','347','351','3','2','7','1','352','25',''),
('13861','sql','2002','23','T1','c','3','2','354','355','22','0','1','0','352','24',''),
('13862','sql','2002','24','che_actif_utilisateur','c','3','2','359','379','22','0','2','0','352','141',''),
('13863','sql','2002','25','champ','f','2','0','390','394','3','2','8','1','395','28',''),
('13864','sql','2002','26','T2','c','3','2','397','398','25','0','1','0','395','27',''),
('13865','sql','2002','27','chp_nom_acces','c','3','2','402','414','25','0','2','0','395','141',''),
('13866','sql','2002','28','champ','f','2','0','425','429','3','2','9','1','430','31',''),
('13867','sql','2002','29','T2','c','3','2','432','433','28','0','1','0','430','30',''),
('13868','sql','2002','30','chx_groupe_acces','c','3','2','437','452','28','0','2','0','430','141',''),
('13869','sql','2002','31','champ','f','2','0','463','467','3','2','10','1','468','34',''),
('13870','sql','2002','32','T2','c','3','2','470','471','31','0','1','0','468','33',''),
('13871','sql','2002','33','chx_metier_acces','c','3','2','475','490','31','0','2','0','468','141',''),
('13872','sql','2002','34','champ','f','2','0','501','505','3','2','11','1','506','37',''),
('13873','sql','2002','35','T3','c','3','2','508','509','34','0','1','0','506','36',''),
('13874','sql','2002','36','chp_nom_groupe','c','3','2','513','526','34','0','2','0','506','141',''),
('13875','sql','2002','37','champ','f','2','0','537','541','3','2','12','1','542','40',''),
('13876','sql','2002','38','T4','c','3','2','544','545','37','0','1','0','542','39',''),
('13877','sql','2002','39','chp_nom_metier','c','3','2','549','562','37','0','2','0','542','141',''),
('13878','sql','2002','40','champ','f','2','0','573','577','3','2','13','1','578','43',''),
('13879','sql','2002','41','T0','c','3','2','580','581','40','0','1','0','578','42',''),
('13880','sql','2002','42','chx_statut_acteur','c','3','2','585','601','40','0','2','0','578','141',''),
('13881','sql','2002','43','champ','f','2','0','612','616','3','2','14','1','617','141',''),
('13882','sql','2002','44','T5','c','3','2','619','620','43','0','1','0','617','45',''),
('13883','sql','2002','45','chp_cle_grandeur','c','3','2','624','639','43','0','2','0','617','141',''),
('13884','sql','2002','46','provenance','f','1','0','652','661','2','6','2','5','662','135',''),
('13885','sql','2002','47','table_reference','f','2','0','670','684','46','1','1','4','685','55',''),
('13886','sql','2002','48','source','f','3','0','696','701','47','1','1','3','702','141',''),
('13887','sql','2002','49','nom_de_la_table','f','4','0','703','717','48','3','1','2','718','141',''),
('13888','sql','2002','50','tbl_acteurs','c','5','0','719','729','49','0','1','0','718','51',''),
('13889','sql','2002','51','alias','f','5','0','731','735','49','1','2','1','736','53',''),
('13890','sql','2002','52','T0','c','6','0','737','738','51','0','1','0','736','141',''),
('13891','sql','2002','53','base','f','5','0','741','744','49','1','3','1','745','141',''),
('13892','sql','2002','54','b2','c','6','0','746','747','53','0','1','0','745','141',''),
('13893','sql','2002','55','jointure_gauche','f','2','0','767','781','46','2','2','4','782','71',''),
('13894','sql','2002','56','source','f','3','0','793','798','55','1','1','3','799','63',''),
('13895','sql','2002','57','nom_de_la_table','f','4','0','800','814','56','3','1','2','815','141',''),
('13896','sql','2002','58','tbl_utilisateurs','c','5','0','816','831','57','0','1','0','815','59',''),
('13897','sql','2002','59','alias','f','5','0','833','837','57','1','2','1','838','61',''),
('13898','sql','2002','60','T1','c','6','0','839','840','59','0','1','0','838','141',''),
('13899','sql','2002','61','base','f','5','0','843','846','57','1','3','1','847','141',''),
('13900','sql','2002','62','b1','c','6','0','848','849','61','0','1','0','847','141',''),
('13901','sql','2002','63','contrainte','f','3','0','864','873','55','1','2','3','874','141',''),
('13902','sql','2002','64','egal','f','4','0','875','878','63','2','1','2','879','141',''),
('13903','sql','2002','65','champ','f','5','0','880','884','64','2','1','1','885','68',''),
('13904','sql','2002','66','T1','c','6','0','886','887','65','0','1','0','885','67',''),
('13905','sql','2002','67','chi_id_utilisateur','c','6','0','889','906','65','0','2','0','885','141',''),
('13906','sql','2002','68','champ','f','5','0','909','913','64','2','2','1','914','141',''),
('13907','sql','2002','69','T0','c','6','0','915','916','68','0','1','0','914','70',''),
('13908','sql','2002','70','chx_utilisateur_acteur','c','6','0','918','939','68','0','2','0','914','141',''),
('13909','sql','2002','71','jointure_gauche','f','2','0','959','973','46','2','3','4','974','87',''),
('13910','sql','2002','72','source','f','3','0','985','990','71','1','1','3','991','79',''),
('13911','sql','2002','73','nom_de_la_table','f','4','0','992','1006','72','3','1','2','1007','141',''),
('13912','sql','2002','74','tbl_acces','c','5','0','1008','1016','73','0','1','0','1007','75',''),
('13913','sql','2002','75','alias','f','5','0','1018','1022','73','1','2','1','1023','77',''),
('13914','sql','2002','76','T2','c','6','0','1024','1025','75','0','1','0','1023','141',''),
('13915','sql','2002','77','base','f','5','0','1028','1031','73','1','3','1','1032','141',''),
('13916','sql','2002','78','b1','c','6','0','1033','1034','77','0','1','0','1032','141',''),
('13917','sql','2002','79','contrainte','f','3','0','1049','1058','71','1','2','3','1059','141',''),
('13918','sql','2002','80','egal','f','4','0','1060','1063','79','2','1','2','1064','141',''),
('13919','sql','2002','81','champ','f','5','0','1065','1069','80','2','1','1','1070','84',''),
('13920','sql','2002','82','T2','c','6','0','1071','1072','81','0','1','0','1070','83',''),
('13921','sql','2002','83','chi_id_acces','c','6','0','1074','1085','81','0','2','0','1070','141',''),
('13922','sql','2002','84','champ','f','5','0','1088','1092','80','2','2','1','1093','141',''),
('13923','sql','2002','85','T1','c','6','0','1094','1095','84','0','1','0','1093','86',''),
('13924','sql','2002','86','chx_acces_utilisateur','c','6','0','1097','1117','84','0','2','0','1093','141',''),
('13925','sql','2002','87','jointure_gauche','f','2','0','1137','1151','46','2','4','4','1152','103',''),
('13926','sql','2002','88','source','f','3','0','1163','1168','87','1','1','3','1169','95',''),
('13927','sql','2002','89','nom_de_la_table','f','4','0','1170','1184','88','3','1','2','1185','141',''),
('13928','sql','2002','90','tbl_groupes','c','5','0','1186','1196','89','0','1','0','1185','91',''),
('13929','sql','2002','91','alias','f','5','0','1198','1202','89','1','2','1','1203','93',''),
('13930','sql','2002','92','T3','c','6','0','1204','1205','91','0','1','0','1203','141',''),
('13931','sql','2002','93','base','f','5','0','1208','1211','89','1','3','1','1212','141',''),
('13932','sql','2002','94','b1','c','6','0','1213','1214','93','0','1','0','1212','141',''),
('13933','sql','2002','95','contrainte','f','3','0','1229','1238','87','1','2','3','1239','141',''),
('13934','sql','2002','96','egal','f','4','0','1240','1243','95','2','1','2','1244','141',''),
('13935','sql','2002','97','champ','f','5','0','1245','1249','96','2','1','1','1250','100',''),
('13936','sql','2002','98','T3','c','6','0','1251','1252','97','0','1','0','1250','99',''),
('13937','sql','2002','99','chi_id_groupe','c','6','0','1254','1266','97','0','2','0','1250','141',''),
('13938','sql','2002','100','champ','f','5','0','1269','1273','96','2','2','1','1274','141',''),
('13939','sql','2002','101','T2','c','6','0','1275','1276','100','0','1','0','1274','102',''),
('13940','sql','2002','102','chx_groupe_acces','c','6','0','1278','1293','100','0','2','0','1274','141',''),
('13941','sql','2002','103','jointure_gauche','f','2','0','1313','1327','46','2','5','4','1328','119',''),
('13942','sql','2002','104','source','f','3','0','1339','1344','103','1','1','3','1345','111',''),
('13943','sql','2002','105','nom_de_la_table','f','4','0','1346','1360','104','3','1','2','1361','141',''),
('13944','sql','2002','106','tbl_metiers','c','5','0','1362','1372','105','0','1','0','1361','107',''),
('13945','sql','2002','107','alias','f','5','0','1374','1378','105','1','2','1','1379','109',''),
('13946','sql','2002','108','T4','c','6','0','1380','1381','107','0','1','0','1379','141',''),
('13947','sql','2002','109','base','f','5','0','1384','1387','105','1','3','1','1388','141',''),
('13948','sql','2002','110','b1','c','6','0','1389','1390','109','0','1','0','1388','141',''),
('13949','sql','2002','111','contrainte','f','3','0','1405','1414','103','1','2','3','1415','141',''),
('13950','sql','2002','112','egal','f','4','0','1416','1419','111','2','1','2','1420','141',''),
('13951','sql','2002','113','champ','f','5','0','1421','1425','112','2','1','1','1426','116',''),
('13952','sql','2002','114','T4','c','6','0','1427','1428','113','0','1','0','1426','115',''),
('13953','sql','2002','115','chi_id_metier','c','6','0','1430','1442','113','0','2','0','1426','141',''),
('13954','sql','2002','116','champ','f','5','0','1445','1449','112','2','2','1','1450','141',''),
('13955','sql','2002','117','T2','c','6','0','1451','1452','116','0','1','0','1450','118',''),
('13956','sql','2002','118','chx_metier_acces','c','6','0','1454','1469','116','0','2','0','1450','141',''),
('13957','sql','2002','119','jointure_gauche','f','2','0','1489','1503','46','2','6','4','1504','141',''),
('13958','sql','2002','120','source','f','3','0','1515','1520','119','1','1','3','1521','127',''),
('13959','sql','2002','121','nom_de_la_table','f','4','0','1522','1536','120','3','1','2','1537','141',''),
('13960','sql','2002','122','tbl_grandeurs','c','5','0','1538','1550','121','0','1','0','1537','123',''),
('13961','sql','2002','123','alias','f','5','0','1552','1556','121','1','2','1','1557','125',''),
('13962','sql','2002','124','T5','c','6','0','1558','1559','123','0','1','0','1557','141',''),
('13963','sql','2002','125','base','f','5','0','1562','1565','121','1','3','1','1566','141',''),
('13964','sql','2002','126','b1','c','6','0','1567','1568','125','0','1','0','1566','141',''),
('13965','sql','2002','127','contrainte','f','3','0','1583','1592','119','1','2','3','1593','141',''),
('13966','sql','2002','128','egal','f','4','0','1594','1597','127','2','1','2','1598','141',''),
('13967','sql','2002','129','champ','f','5','0','1599','1603','128','2','1','1','1604','132',''),
('13968','sql','2002','130','T5','c','6','0','1605','1606','129','0','1','0','1604','131',''),
('13969','sql','2002','131','chi_id_grandeur','c','6','0','1608','1622','129','0','2','0','1604','141',''),
('13970','sql','2002','132','champ','f','5','0','1625','1629','128','2','2','1','1630','141',''),
('13971','sql','2002','133','T0','c','6','0','1631','1632','132','0','1','0','1630','134',''),
('13972','sql','2002','134','chx_statut_acteur','c','6','0','1634','1650','132','0','2','0','1630','141',''),
('13973','sql','2002','135','conditions','f','1','0','1672','1681','2','1','3','3','1682','141',''),
('13974','sql','2002','136','egal','f','2','0','1683','1686','135','2','1','2','1687','141',''),
('13975','sql','2002','137','champ','f','3','0','1688','1692','136','2','1','1','1693','140',''),
('13976','sql','2002','138','T0','c','4','2','1695','1696','137','0','1','0','1693','139',''),
('13977','sql','2002','139','chx_utilisateur_acteur','c','4','2','1700','1721','137','0','2','0','1693','141',''),
('13978','sql','2002','140',':T0_chx_utilisateur_acteur','c','3','0','1725','1750','136','0','2','0','1693','141',''),
('13979','sql','2001','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('13980','sql','2001','1','#','f','0','0','0','0','0','0','1','0','1','2','meta(inclure_le_prefixe_de_la_base_devant_la_table(1))'),
('13981','sql','2001','2','sélectionner','f','0','0','59','70','0','4','2','6','71','174',''),
('13982','sql','2001','3','valeurs','f','1','0','76','82','2','14','1','2','83','46',''),
('13983','sql','2001','4','champ','f','2','0','91','95','3','2','1','1','96','7',''),
('13984','sql','2001','5','T0','c','3','2','98','99','4','0','1','0','96','6',''),
('13985','sql','2001','6','chp_nom_acteur','c','3','2','103','116','4','0','2','0','96','174',''),
('13986','sql','2001','7','champ','f','2','0','127','131','3','2','2','1','132','10',''),
('13987','sql','2001','8','T0','c','3','2','134','135','7','0','1','0','132','9',''),
('13988','sql','2001','9','chp_prenom_acteur','c','3','2','139','155','7','0','2','0','132','174',''),
('13989','sql','2001','10','champ','f','2','0','166','170','3','2','3','1','171','13',''),
('13990','sql','2001','11','T0','c','3','2','173','174','10','0','1','0','171','12',''),
('13991','sql','2001','12','chx_utilisateur_acteur','c','3','2','178','199','10','0','2','0','171','174',''),
('13992','sql','2001','13','champ','f','2','0','210','214','3','2','4','1','215','16',''),
('13993','sql','2001','14','T1','c','3','2','217','218','13','0','1','0','215','15',''),
('13994','sql','2001','15','chp_nom_de_connexion_utilisateur','c','3','2','222','253','13','0','2','0','215','174',''),
('13995','sql','2001','16','champ','f','2','0','264','268','3','2','5','1','269','19',''),
('13996','sql','2001','17','T2','c','3','2','271','272','16','0','1','0','269','18',''),
('13997','sql','2001','18','chi_id_acces','c','3','2','276','287','16','0','2','0','269','174',''),
('13998','sql','2001','19','champ','f','2','0','298','302','3','2','6','1','303','22',''),
('13999','sql','2001','20','T1','c','3','2','305','306','19','0','1','0','303','21',''),
('14000','sql','2001','21','chx_acces_utilisateur','c','3','2','310','330','19','0','2','0','303','174',''),
('14001','sql','2001','22','champ','f','2','0','341','345','3','2','7','1','346','25',''),
('14002','sql','2001','23','T2','c','3','2','348','349','22','0','1','0','346','24',''),
('14003','sql','2001','24','chp_nom_acces','c','3','2','353','365','22','0','2','0','346','174',''),
('14004','sql','2001','25','champ','f','2','0','376','380','3','2','8','1','381','28',''),
('14005','sql','2001','26','T2','c','3','2','383','384','25','0','1','0','381','27',''),
('14006','sql','2001','27','chx_groupe_acces','c','3','2','388','403','25','0','2','0','381','174',''),
('14007','sql','2001','28','champ','f','2','0','414','418','3','2','9','1','419','31',''),
('14008','sql','2001','29','T2','c','3','2','421','422','28','0','1','0','419','30',''),
('14009','sql','2001','30','chx_metier_acces','c','3','2','426','441','28','0','2','0','419','174',''),
('14010','sql','2001','31','champ','f','2','0','452','456','3','2','10','1','457','34',''),
('14011','sql','2001','32','T3','c','3','2','459','460','31','0','1','0','457','33',''),
('14012','sql','2001','33','chp_nom_groupe','c','3','2','464','477','31','0','2','0','457','174',''),
('14013','sql','2001','34','champ','f','2','0','488','492','3','2','11','1','493','37',''),
('14014','sql','2001','35','T4','c','3','2','495','496','34','0','1','0','493','36',''),
('14015','sql','2001','36','chp_nom_metier','c','3','2','500','513','34','0','2','0','493','174',''),
('14016','sql','2001','37','champ','f','2','0','524','528','3','2','12','1','529','40',''),
('14017','sql','2001','38','T0','c','3','2','531','532','37','0','1','0','529','39',''),
('14018','sql','2001','39','chx_utilisateur_acteur','c','3','2','536','557','37','0','2','0','529','174',''),
('14019','sql','2001','40','champ','f','2','0','568','572','3','2','13','1','573','43',''),
('14020','sql','2001','41','T0','c','3','2','575','576','40','0','1','0','573','42',''),
('14021','sql','2001','42','chx_statut_acteur','c','3','2','580','596','40','0','2','0','573','174',''),
('14022','sql','2001','43','champ','f','2','0','607','611','3','2','14','1','612','174',''),
('14023','sql','2001','44','T5','c','3','2','614','615','43','0','1','0','612','45',''),
('14024','sql','2001','45','chp_cle_grandeur','c','3','2','619','634','43','0','2','0','612','174',''),
('14025','sql','2001','46','provenance','f','1','0','647','656','2','6','2','5','657','135',''),
('14026','sql','2001','47','table_reference','f','2','0','665','679','46','1','1','4','680','55',''),
('14027','sql','2001','48','source','f','3','0','691','696','47','1','1','3','697','174',''),
('14028','sql','2001','49','nom_de_la_table','f','4','0','698','712','48','3','1','2','713','174',''),
('14029','sql','2001','50','tbl_acteurs','c','5','0','714','724','49','0','1','0','713','51',''),
('14030','sql','2001','51','alias','f','5','0','726','730','49','1','2','1','731','53',''),
('14031','sql','2001','52','T0','c','6','0','732','733','51','0','1','0','731','174',''),
('14032','sql','2001','53','base','f','5','0','736','739','49','1','3','1','740','174',''),
('14033','sql','2001','54','b2','c','6','0','741','742','53','0','1','0','740','174',''),
('14034','sql','2001','55','jointure_gauche','f','2','0','762','776','46','2','2','4','777','71',''),
('14035','sql','2001','56','source','f','3','0','788','793','55','1','1','3','794','63',''),
('14036','sql','2001','57','nom_de_la_table','f','4','0','795','809','56','3','1','2','810','174',''),
('14037','sql','2001','58','tbl_utilisateurs','c','5','0','811','826','57','0','1','0','810','59',''),
('14038','sql','2001','59','alias','f','5','0','828','832','57','1','2','1','833','61',''),
('14039','sql','2001','60','T1','c','6','0','834','835','59','0','1','0','833','174',''),
('14040','sql','2001','61','base','f','5','0','838','841','57','1','3','1','842','174',''),
('14041','sql','2001','62','b1','c','6','0','843','844','61','0','1','0','842','174',''),
('14042','sql','2001','63','contrainte','f','3','0','859','868','55','1','2','3','869','174',''),
('14043','sql','2001','64','egal','f','4','0','870','873','63','2','1','2','874','174',''),
('14044','sql','2001','65','champ','f','5','0','875','879','64','2','1','1','880','68',''),
('14045','sql','2001','66','T1','c','6','0','881','882','65','0','1','0','880','67',''),
('14046','sql','2001','67','chi_id_utilisateur','c','6','0','884','901','65','0','2','0','880','174',''),
('14047','sql','2001','68','champ','f','5','0','904','908','64','2','2','1','909','174',''),
('14048','sql','2001','69','T0','c','6','0','910','911','68','0','1','0','909','70',''),
('14049','sql','2001','70','chx_utilisateur_acteur','c','6','0','913','934','68','0','2','0','909','174',''),
('14050','sql','2001','71','jointure_gauche','f','2','0','954','968','46','2','3','4','969','87',''),
('14051','sql','2001','72','source','f','3','0','980','985','71','1','1','3','986','79',''),
('14052','sql','2001','73','nom_de_la_table','f','4','0','987','1001','72','3','1','2','1002','174',''),
('14053','sql','2001','74','tbl_acces','c','5','0','1003','1011','73','0','1','0','1002','75',''),
('14054','sql','2001','75','alias','f','5','0','1013','1017','73','1','2','1','1018','77',''),
('14055','sql','2001','76','T2','c','6','0','1019','1020','75','0','1','0','1018','174',''),
('14056','sql','2001','77','base','f','5','0','1023','1026','73','1','3','1','1027','174',''),
('14057','sql','2001','78','b1','c','6','0','1028','1029','77','0','1','0','1027','174',''),
('14058','sql','2001','79','contrainte','f','3','0','1044','1053','71','1','2','3','1054','174',''),
('14059','sql','2001','80','egal','f','4','0','1055','1058','79','2','1','2','1059','174',''),
('14060','sql','2001','81','champ','f','5','0','1060','1064','80','2','1','1','1065','84',''),
('14061','sql','2001','82','T2','c','6','0','1066','1067','81','0','1','0','1065','83',''),
('14062','sql','2001','83','chi_id_acces','c','6','0','1069','1080','81','0','2','0','1065','174',''),
('14063','sql','2001','84','champ','f','5','0','1083','1087','80','2','2','1','1088','174',''),
('14064','sql','2001','85','T1','c','6','0','1089','1090','84','0','1','0','1088','86',''),
('14065','sql','2001','86','chx_acces_utilisateur','c','6','0','1092','1112','84','0','2','0','1088','174',''),
('14066','sql','2001','87','jointure_gauche','f','2','0','1132','1146','46','2','4','4','1147','103',''),
('14067','sql','2001','88','source','f','3','0','1158','1163','87','1','1','3','1164','95',''),
('14068','sql','2001','89','nom_de_la_table','f','4','0','1165','1179','88','3','1','2','1180','174',''),
('14069','sql','2001','90','tbl_groupes','c','5','0','1181','1191','89','0','1','0','1180','91',''),
('14070','sql','2001','91','alias','f','5','0','1193','1197','89','1','2','1','1198','93',''),
('14071','sql','2001','92','T3','c','6','0','1199','1200','91','0','1','0','1198','174',''),
('14072','sql','2001','93','base','f','5','0','1203','1206','89','1','3','1','1207','174',''),
('14073','sql','2001','94','b1','c','6','0','1208','1209','93','0','1','0','1207','174',''),
('14074','sql','2001','95','contrainte','f','3','0','1224','1233','87','1','2','3','1234','174',''),
('14075','sql','2001','96','egal','f','4','0','1235','1238','95','2','1','2','1239','174',''),
('14076','sql','2001','97','champ','f','5','0','1240','1244','96','2','1','1','1245','100',''),
('14077','sql','2001','98','T3','c','6','0','1246','1247','97','0','1','0','1245','99',''),
('14078','sql','2001','99','chi_id_groupe','c','6','0','1249','1261','97','0','2','0','1245','174',''),
('14079','sql','2001','100','champ','f','5','0','1264','1268','96','2','2','1','1269','174',''),
('14080','sql','2001','101','T2','c','6','0','1270','1271','100','0','1','0','1269','102',''),
('14081','sql','2001','102','chx_groupe_acces','c','6','0','1273','1288','100','0','2','0','1269','174',''),
('14082','sql','2001','103','jointure_gauche','f','2','0','1308','1322','46','2','5','4','1323','119',''),
('14083','sql','2001','104','source','f','3','0','1334','1339','103','1','1','3','1340','111',''),
('14084','sql','2001','105','nom_de_la_table','f','4','0','1341','1355','104','3','1','2','1356','174',''),
('14085','sql','2001','106','tbl_metiers','c','5','0','1357','1367','105','0','1','0','1356','107',''),
('14086','sql','2001','107','alias','f','5','0','1369','1373','105','1','2','1','1374','109',''),
('14087','sql','2001','108','T4','c','6','0','1375','1376','107','0','1','0','1374','174',''),
('14088','sql','2001','109','base','f','5','0','1379','1382','105','1','3','1','1383','174',''),
('14089','sql','2001','110','b1','c','6','0','1384','1385','109','0','1','0','1383','174',''),
('14090','sql','2001','111','contrainte','f','3','0','1400','1409','103','1','2','3','1410','174',''),
('14091','sql','2001','112','egal','f','4','0','1411','1414','111','2','1','2','1415','174',''),
('14092','sql','2001','113','champ','f','5','0','1416','1420','112','2','1','1','1421','116',''),
('14093','sql','2001','114','T4','c','6','0','1422','1423','113','0','1','0','1421','115',''),
('14094','sql','2001','115','chi_id_metier','c','6','0','1425','1437','113','0','2','0','1421','174',''),
('14095','sql','2001','116','champ','f','5','0','1440','1444','112','2','2','1','1445','174',''),
('14096','sql','2001','117','T2','c','6','0','1446','1447','116','0','1','0','1445','118',''),
('14097','sql','2001','118','chx_metier_acces','c','6','0','1449','1464','116','0','2','0','1445','174',''),
('14098','sql','2001','119','jointure_gauche','f','2','0','1484','1498','46','2','6','4','1499','174',''),
('14099','sql','2001','120','source','f','3','0','1510','1515','119','1','1','3','1516','127',''),
('14100','sql','2001','121','nom_de_la_table','f','4','0','1517','1531','120','3','1','2','1532','174',''),
('14101','sql','2001','122','tbl_grandeurs','c','5','0','1533','1545','121','0','1','0','1532','123',''),
('14102','sql','2001','123','alias','f','5','0','1547','1551','121','1','2','1','1552','125',''),
('14103','sql','2001','124','T5','c','6','0','1553','1554','123','0','1','0','1552','174',''),
('14104','sql','2001','125','base','f','5','0','1557','1560','121','1','3','1','1561','174',''),
('14105','sql','2001','126','b1','c','6','0','1562','1563','125','0','1','0','1561','174',''),
('14106','sql','2001','127','contrainte','f','3','0','1578','1587','119','1','2','3','1588','174',''),
('14107','sql','2001','128','egal','f','4','0','1589','1592','127','2','1','2','1593','174',''),
('14108','sql','2001','129','champ','f','5','0','1594','1598','128','2','1','1','1599','132',''),
('14109','sql','2001','130','T5','c','6','0','1600','1601','129','0','1','0','1599','131',''),
('14110','sql','2001','131','chi_id_grandeur','c','6','0','1603','1617','129','0','2','0','1599','174',''),
('14111','sql','2001','132','champ','f','5','0','1620','1624','128','2','2','1','1625','174',''),
('14112','sql','2001','133','T0','c','6','0','1626','1627','132','0','1','0','1625','134',''),
('14113','sql','2001','134','chx_statut_acteur','c','6','0','1629','1645','132','0','2','0','1625','174',''),
('14114','sql','2001','135','conditions','f','1','0','1667','1676','2','1','3','4','1677','162',''),
('14115','sql','2001','136','et','f','2','0','1685','1686','135','5','1','3','1687','174',''),
('14116','sql','2001','137','comme','f','3','0','1698','1702','136','2','1','2','1703','142',''),
('14117','sql','2001','138','champ','f','4','0','1704','1708','137','2','1','1','1709','141',''),
('14118','sql','2001','139','T0','c','5','2','1711','1712','138','0','1','0','1709','140',''),
('14119','sql','2001','140','chp_nom_acteur','c','5','2','1716','1729','138','0','2','0','1709','174',''),
('14120','sql','2001','141',':T0_chp_nom_acteur','c','4','0','1733','1750','137','0','2','0','1709','174',''),
('14121','sql','2001','142','comme','f','3','0','1763','1767','136','2','2','2','1768','147',''),
('14122','sql','2001','143','champ','f','4','0','1769','1773','142','2','1','1','1774','146',''),
('14123','sql','2001','144','T0','c','5','2','1776','1777','143','0','1','0','1774','145',''),
('14124','sql','2001','145','chp_prenom_acteur','c','5','2','1781','1797','143','0','2','0','1774','174',''),
('14125','sql','2001','146',':T0_chp_prenom_acteur','c','4','0','1801','1821','142','0','2','0','1774','174',''),
('14126','sql','2001','147','comme','f','3','0','1834','1838','136','2','3','2','1839','152',''),
('14127','sql','2001','148','champ','f','4','0','1840','1844','147','2','1','1','1845','151',''),
('14128','sql','2001','149','T1','c','5','2','1847','1848','148','0','1','0','1845','150',''),
('14129','sql','2001','150','chp_nom_de_connexion_utilisateur','c','5','2','1852','1883','148','0','2','0','1845','174',''),
('14130','sql','2001','151',':T1_chp_nom_de_connexion_utilisateur','c','4','0','1887','1922','147','0','2','0','1845','174',''),
('14131','sql','2001','152','egal','f','3','0','1935','1938','136','2','4','2','1939','157',''),
('14132','sql','2001','153','champ','f','4','0','1940','1944','152','2','1','1','1945','156',''),
('14133','sql','2001','154','T0','c','5','2','1947','1948','153','0','1','0','1945','155',''),
('14134','sql','2001','155','chx_utilisateur_acteur','c','5','2','1952','1973','153','0','2','0','1945','174',''),
('14135','sql','2001','156',':T0_chx_utilisateur_acteur','c','4','0','1977','2002','152','0','2','0','1945','174',''),
('14136','sql','2001','157','egal','f','3','0','2015','2018','136','2','5','2','2019','174',''),
('14137','sql','2001','158','champ','f','4','0','2020','2024','157','2','1','1','2025','161',''),
('14138','sql','2001','159','T0','c','5','2','2027','2028','158','0','1','0','2025','160',''),
('14139','sql','2001','160','chx_statut_acteur','c','5','2','2032','2048','158','0','2','0','2025','174',''),
('14140','sql','2001','161',':T0_chx_statut_acteur','c','4','0','2052','2072','157','0','2','0','2025','174',''),
('14141','sql','2001','162','complements','f','1','0','2092','2102','2','2','4','4','2103','174',''),
('14142','sql','2001','163','trier_par','f','2','0','2111','2119','162','1','1','3','2120','169',''),
('14143','sql','2001','164','','f','3','0','2111','2119','163','2','1','2','2121','174',''),
('14144','sql','2001','165','champ','f','4','0','2122','2126','164','2','1','1','2127','168',''),
('14145','sql','2001','166','T0','c','5','2','2129','2130','165','0','1','0','2127','167',''),
('14146','sql','2001','167','chx_utilisateur_acteur','c','5','2','2134','2155','165','0','2','0','2127','174',''),
('14147','sql','2001','168','décroissant','f','4','0','2159','2169','164','0','2','0','2170','174',''),
('14148','sql','2001','169','limité_à','f','2','0','2182','2189','162','2','2','2','2190','174',''),
('14149','sql','2001','170','quantité','f','3','0','2191','2198','169','1','1','1','2199','172',''),
('14150','sql','2001','171',':quantitee','c','4','0','2200','2209','170','0','1','0','2199','174',''),
('14151','sql','2001','172','début','f','3','0','2212','2216','169','1','2','1','2217','174',''),
('14152','sql','2001','173',':debut','c','4','0','2218','2223','172','0','1','0','2217','174',''),
('14153','sql','1212','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14154','sql','1212','1','sélectionner','f','0','0','0','11','0','4','1','6','12','56',''),
('14155','sql','1212','2','valeurs','f','1','0','17','23','1','3','1','2','24','12',''),
('14156','sql','1212','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('14157','sql','1212','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('14158','sql','1212','5','chi_id_grandeur','c','3','2','37','51','3','0','2','0','30','56',''),
('14159','sql','1212','6','champ','f','2','0','55','59','2','2','2','1','60','9',''),
('14160','sql','1212','7','T0','c','3','2','62','63','6','0','1','0','60','8',''),
('14161','sql','1212','8','chp_cle_grandeur','c','3','2','67','82','6','0','2','0','60','56',''),
('14162','sql','1212','9','champ','f','2','0','86','90','2','2','3','1','91','56',''),
('14163','sql','1212','10','T0','c','3','2','93','94','9','0','1','0','91','11',''),
('14164','sql','1212','11','cht_rev_grandeur','c','3','2','98','113','9','0','2','0','91','56',''),
('14165','sql','1212','12','provenance','f','1','0','122','131','1','1','2','5','132','21',''),
('14166','sql','1212','13','table_reference','f','2','0','140','154','12','1','1','4','155','56',''),
('14167','sql','1212','14','source','f','3','0','166','171','13','1','1','3','172','56',''),
('14168','sql','1212','15','nom_de_la_table','f','4','0','173','187','14','3','1','2','188','56',''),
('14169','sql','1212','16','tbl_grandeurs','c','5','0','189','201','15','0','1','0','188','17',''),
('14170','sql','1212','17','alias','f','5','0','203','207','15','1','2','1','208','19',''),
('14171','sql','1212','18','T0','c','6','0','209','210','17','0','1','0','208','56',''),
('14172','sql','1212','19','base','f','5','0','213','216','15','1','3','1','217','56',''),
('14173','sql','1212','20','b1','c','6','0','218','219','19','0','1','0','217','56',''),
('14174','sql','1212','21','conditions','f','1','0','241','250','1','1','3','4','251','48',''),
('14175','sql','1212','22','et','f','2','0','259','260','21','5','1','3','261','56',''),
('14176','sql','1212','23','comme','f','3','0','272','276','22','2','1','2','277','28',''),
('14177','sql','1212','24','champ','f','4','0','278','282','23','2','1','1','283','27',''),
('14178','sql','1212','25','T0','c','5','2','285','286','24','0','1','0','283','26',''),
('14179','sql','1212','26','chp_cle_grandeur','c','5','2','290','305','24','0','2','0','283','56',''),
('14180','sql','1212','27',':T0_chp_cle_grandeur','c','4','0','309','328','23','0','2','0','283','56',''),
('14181','sql','1212','28','egal','f','3','0','341','344','22','2','2','2','345','33',''),
('14182','sql','1212','29','champ','f','4','0','346','350','28','2','1','1','351','32',''),
('14183','sql','1212','30','T0','c','5','2','353','354','29','0','1','0','351','31',''),
('14184','sql','1212','31','chi_id_grandeur','c','5','2','358','372','29','0','2','0','351','56',''),
('14185','sql','1212','32',':T0_chi_id_grandeur','c','4','0','376','394','28','0','2','0','351','56',''),
('14186','sql','1212','33','comme','f','3','0','407','411','22','2','3','2','412','38',''),
('14187','sql','1212','34','champ','f','4','0','413','417','33','2','1','1','418','37',''),
('14188','sql','1212','35','T0','c','5','2','420','421','34','0','1','0','418','36',''),
('14189','sql','1212','36','cht_rev_grandeur','c','5','2','425','440','34','0','2','0','418','56',''),
('14190','sql','1212','37',':T0_cht_rev_grandeur','c','4','0','444','463','33','0','2','0','418','56',''),
('14191','sql','1212','38','egal','f','3','0','476','479','22','2','4','2','480','43',''),
('14192','sql','1212','39','champ','f','4','0','481','485','38','2','1','1','486','42',''),
('14193','sql','1212','40','T0','c','5','2','488','489','39','0','1','0','486','41',''),
('14194','sql','1212','41','chx_parametre_grandeur','c','5','2','493','514','39','0','2','0','486','56',''),
('14195','sql','1212','42',':T0_chx_parametre_grandeur','c','4','0','518','543','38','0','2','0','486','56',''),
('14196','sql','1212','43','egal','f','3','0','556','559','22','2','5','2','560','56',''),
('14197','sql','1212','44','champ','f','4','0','561','565','43','2','1','1','566','47',''),
('14198','sql','1212','45','T0','c','5','2','568','569','44','0','1','0','566','46',''),
('14199','sql','1212','46','che_actif_grandeur','c','5','2','573','590','44','0','2','0','566','56',''),
('14200','sql','1212','47','1','c','4','0','594','594','43','0','2','0','566','56',''),
('14201','sql','1212','48','complements','f','1','0','614','624','1','2','4','3','625','56',''),
('14202','sql','1212','49','trier_par','f','2','0','626','634','48','1','1','1','635','51',''),
('14203','sql','1212','50',':liste_des_tris','c','3','0','636','650','49','0','1','0','635','56',''),
('14204','sql','1212','51','limité_à','f','2','0','653','660','48','2','2','2','661','56',''),
('14205','sql','1212','52','quantité','f','3','0','662','669','51','1','1','1','670','54',''),
('14206','sql','1212','53',':quantitee','c','4','0','671','680','52','0','1','0','670','56',''),
('14207','sql','1212','54','début','f','3','0','683','687','51','1','2','1','688','56',''),
('14208','sql','1212','55',':debut','c','4','0','689','694','54','0','1','0','688','56',''),
('14209','sql','1211','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14210','sql','1211','1','sélectionner','f','0','0','0','11','0','4','1','6','12','36',''),
('14211','sql','1211','2','valeurs','f','1','0','17','23','1','3','1','2','24','12',''),
('14212','sql','1211','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('14213','sql','1211','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('14214','sql','1211','5','chi_id_grandeur','c','3','2','37','51','3','0','2','0','30','36',''),
('14215','sql','1211','6','champ','f','2','0','55','59','2','2','2','1','60','9',''),
('14216','sql','1211','7','T0','c','3','2','62','63','6','0','1','0','60','8',''),
('14217','sql','1211','8','chp_cle_grandeur','c','3','2','67','82','6','0','2','0','60','36',''),
('14218','sql','1211','9','champ','f','2','0','86','90','2','2','3','1','91','36',''),
('14219','sql','1211','10','T0','c','3','2','93','94','9','0','1','0','91','11',''),
('14220','sql','1211','11','cht_rev_grandeur','c','3','2','98','113','9','0','2','0','91','36',''),
('14221','sql','1211','12','provenance','f','1','0','122','131','1','1','2','5','132','21',''),
('14222','sql','1211','13','table_reference','f','2','0','140','154','12','1','1','4','155','36',''),
('14223','sql','1211','14','source','f','3','0','166','171','13','1','1','3','172','36',''),
('14224','sql','1211','15','nom_de_la_table','f','4','0','173','187','14','3','1','2','188','36',''),
('14225','sql','1211','16','tbl_grandeurs','c','5','0','189','201','15','0','1','0','188','17',''),
('14226','sql','1211','17','alias','f','5','0','203','207','15','1','2','1','208','19',''),
('14227','sql','1211','18','T0','c','6','0','209','210','17','0','1','0','208','36',''),
('14228','sql','1211','19','base','f','5','0','213','216','15','1','3','1','217','36',''),
('14229','sql','1211','20','b1','c','6','0','218','219','19','0','1','0','217','36',''),
('14230','sql','1211','21','conditions','f','1','0','241','250','1','1','3','4','251','33',''),
('14231','sql','1211','22','et','f','2','0','259','260','21','2','1','3','261','36',''),
('14232','sql','1211','23','egal','f','3','0','262','265','22','2','1','2','266','28',''),
('14233','sql','1211','24','champ','f','4','0','267','271','23','2','1','1','272','27',''),
('14234','sql','1211','25','T0','c','5','2','274','275','24','0','1','0','272','26',''),
('14235','sql','1211','26','che_actif_grandeur','c','5','2','279','296','24','0','2','0','272','36',''),
('14236','sql','1211','27','1','c','4','0','300','300','23','0','2','0','272','36',''),
('14237','sql','1211','28','egal','f','3','0','303','306','22','2','2','2','307','36',''),
('14238','sql','1211','29','champ','f','4','0','308','312','28','2','1','1','313','32',''),
('14239','sql','1211','30','T0','c','5','2','315','316','29','0','1','0','313','31',''),
('14240','sql','1211','31','chx_parametre_grandeur','c','5','2','320','341','29','0','2','0','313','36',''),
('14241','sql','1211','32',':T0_chx_parametre_grandeur','c','4','0','345','370','28','0','2','0','313','36',''),
('14242','sql','1211','33','complements','f','1','0','383','393','1','1','4','2','394','36',''),
('14243','sql','1211','34','trier_par','f','2','0','395','403','33','1','1','1','404','36',''),
('14244','sql','1211','35',':liste_des_tris','c','3','0','405','419','34','0','1','0','404','36',''),
('14245','sql','1210','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14246','sql','1210','1','sélectionner','f','0','0','0','11','0','4','1','6','12','76',''),
('14247','sql','1210','2','valeurs','f','1','0','17','23','1','3','1','2','24','12',''),
('14248','sql','1210','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('14249','sql','1210','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('14250','sql','1210','5','chi_id_grandeur','c','3','2','37','51','3','0','2','0','30','76',''),
('14251','sql','1210','6','champ','f','2','0','55','59','2','2','2','1','60','9',''),
('14252','sql','1210','7','T0','c','3','2','62','63','6','0','1','0','60','8',''),
('14253','sql','1210','8','chp_cle_grandeur','c','3','2','67','82','6','0','2','0','60','76',''),
('14254','sql','1210','9','champ','f','2','0','86','90','2','2','3','1','91','76',''),
('14255','sql','1210','10','T0','c','3','2','93','94','9','0','1','0','91','11',''),
('14256','sql','1210','11','cht_rev_grandeur','c','3','2','98','113','9','0','2','0','91','76',''),
('14257','sql','1210','12','provenance','f','1','0','122','131','1','2','2','5','132','37',''),
('14258','sql','1210','13','table_reference','f','2','0','140','154','12','1','1','4','155','21',''),
('14259','sql','1210','14','source','f','3','0','166','171','13','1','1','3','172','76',''),
('14260','sql','1210','15','nom_de_la_table','f','4','0','173','187','14','3','1','2','188','76',''),
('14261','sql','1210','16','tbl_grandeurs','c','5','0','189','201','15','0','1','0','188','17',''),
('14262','sql','1210','17','alias','f','5','0','203','207','15','1','2','1','208','19',''),
('14263','sql','1210','18','T0','c','6','0','209','210','17','0','1','0','208','76',''),
('14264','sql','1210','19','base','f','5','0','213','216','15','1','3','1','217','76',''),
('14265','sql','1210','20','b1','c','6','0','218','219','19','0','1','0','217','76',''),
('14266','sql','1210','21','jointure_gauche','f','2','0','239','253','12','2','2','4','254','76',''),
('14267','sql','1210','22','source','f','3','0','265','270','21','1','1','3','271','29',''),
('14268','sql','1210','23','nom_de_la_table','f','4','0','272','286','22','3','1','2','287','76',''),
('14269','sql','1210','24','tbl_parametres','c','5','0','288','301','23','0','1','0','287','25',''),
('14270','sql','1210','25','alias','f','5','0','303','307','23','1','2','1','308','27',''),
('14271','sql','1210','26','T1','c','6','0','309','310','25','0','1','0','308','76',''),
('14272','sql','1210','27','base','f','5','0','313','316','23','1','3','1','317','76',''),
('14273','sql','1210','28','b1','c','6','0','318','319','27','0','1','0','317','76',''),
('14274','sql','1210','29','contrainte','f','3','0','334','343','21','1','2','3','344','76',''),
('14275','sql','1210','30','egal','f','4','0','345','348','29','2','1','2','349','76',''),
('14276','sql','1210','31','champ','f','5','0','350','354','30','2','1','1','355','34',''),
('14277','sql','1210','32','T1','c','6','0','356','357','31','0','1','0','355','33',''),
('14278','sql','1210','33','chi_id_parametre','c','6','0','359','374','31','0','2','0','355','76',''),
('14279','sql','1210','34','champ','f','5','0','377','381','30','2','2','1','382','76',''),
('14280','sql','1210','35','T0','c','6','0','383','384','34','0','1','0','382','36',''),
('14281','sql','1210','36','chx_parametre_grandeur','c','6','0','386','407','34','0','2','0','382','76',''),
('14282','sql','1210','37','conditions','f','1','0','429','438','1','1','3','4','439','64',''),
('14283','sql','1210','38','et','f','2','0','447','448','37','5','1','3','449','76',''),
('14284','sql','1210','39','egal','f','3','0','460','463','38','2','1','2','464','44',''),
('14285','sql','1210','40','champ','f','4','0','465','469','39','2','1','1','470','43',''),
('14286','sql','1210','41','T0','c','5','2','472','473','40','0','1','0','470','42',''),
('14287','sql','1210','42','chx_parametre_grandeur','c','5','2','477','498','40','0','2','0','470','76',''),
('14288','sql','1210','43','2','c','4','0','502','502','39','0','2','0','470','76',''),
('14289','sql','1210','44','comme','f','3','0','515','519','38','2','2','2','520','49',''),
('14290','sql','1210','45','champ','f','4','0','521','525','44','2','1','1','526','48',''),
('14291','sql','1210','46','T0','c','5','2','528','529','45','0','1','0','526','47',''),
('14292','sql','1210','47','chp_cle_grandeur','c','5','2','533','548','45','0','2','0','526','76',''),
('14293','sql','1210','48',':T0_chp_cle_grandeur','c','4','0','552','571','44','0','2','0','526','76',''),
('14294','sql','1210','49','egal','f','3','0','584','587','38','2','3','2','588','54',''),
('14295','sql','1210','50','champ','f','4','0','589','593','49','2','1','1','594','53',''),
('14296','sql','1210','51','T0','c','5','2','596','597','50','0','1','0','594','52',''),
('14297','sql','1210','52','chi_id_grandeur','c','5','2','601','615','50','0','2','0','594','76',''),
('14298','sql','1210','53',':T0_chi_id_grandeur','c','4','0','619','637','49','0','2','0','594','76',''),
('14299','sql','1210','54','comme','f','3','0','650','654','38','2','4','2','655','59',''),
('14300','sql','1210','55','champ','f','4','0','656','660','54','2','1','1','661','58',''),
('14301','sql','1210','56','T0','c','5','2','663','664','55','0','1','0','661','57',''),
('14302','sql','1210','57','cht_rev_grandeur','c','5','2','668','683','55','0','2','0','661','76',''),
('14303','sql','1210','58',':T0_cht_rev_grandeur','c','4','0','687','706','54','0','2','0','661','76',''),
('14304','sql','1210','59','egal','f','3','0','719','722','38','2','5','2','723','76',''),
('14305','sql','1210','60','champ','f','4','0','724','728','59','2','1','1','729','63',''),
('14306','sql','1210','61','T0','c','5','2','731','732','60','0','1','0','729','62',''),
('14307','sql','1210','62','che_actif_grandeur','c','5','2','736','753','60','0','2','0','729','76',''),
('14308','sql','1210','63','1','c','4','0','757','757','59','0','2','0','729','76',''),
('14309','sql','1210','64','complements','f','1','0','777','787','1','2','4','4','788','76',''),
('14310','sql','1210','65','trier_par','f','2','0','796','804','64','1','1','3','805','71',''),
('14311','sql','1210','66','','f','3','0','796','804','65','2','1','2','806','76',''),
('14312','sql','1210','67','champ','f','4','0','807','811','66','2','1','1','812','70',''),
('14313','sql','1210','68','T0','c','5','2','814','815','67','0','1','0','812','69',''),
('14314','sql','1210','69','chi_id_grandeur','c','5','2','819','833','67','0','2','0','812','76',''),
('14315','sql','1210','70','décroissant','f','4','0','837','847','66','0','2','0','848','76',''),
('14316','sql','1210','71','limité_à','f','2','0','860','867','64','2','2','2','868','76',''),
('14317','sql','1210','72','quantité','f','3','0','869','876','71','1','1','1','877','74',''),
('14318','sql','1210','73',':quantitee','c','4','0','878','887','72','0','1','0','877','76',''),
('14319','sql','1210','74','début','f','3','0','890','894','71','1','2','1','895','76',''),
('14320','sql','1210','75',':debut','c','4','0','896','901','74','0','1','0','895','76',''),
('14321','sql','1205','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14322','sql','1205','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('14323','sql','1205','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('14324','sql','1205','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('14325','sql','1205','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('14326','sql','1205','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('14327','sql','1205','6','tbl_grandeurs','c','5','0','81','93','5','0','1','0','80','7',''),
('14328','sql','1205','7','base','f','5','0','95','98','5','1','2','1','99','14',''),
('14329','sql','1205','8','b1','c','6','0','100','101','7','0','1','0','99','14',''),
('14330','sql','1205','9','conditions','f','1','0','123','132','1','1','2','3','133','14',''),
('14331','sql','1205','10','egal','f','2','0','134','137','9','2','1','2','138','14',''),
('14332','sql','1205','11','champ','f','3','0','139','143','10','1','1','1','144','13',''),
('14333','sql','1205','12','chi_id_grandeur','c','4','2','146','160','11','0','1','0','144','14',''),
('14334','sql','1205','13',':chi_id_grandeur','c','3','0','164','179','10','0','2','0','144','14',''),
('14335','sql','1204','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14336','sql','1204','1','modifier','f','0','0','0','7','0','3','1','6','8','45',''),
('14337','sql','1204','2','valeurs','f','1','0','13','19','1','7','1','3','20','31',''),
('14338','sql','1204','3','affecte','f','2','0','28','34','2','2','1','2','35','7',''),
('14339','sql','1204','4','champ','f','3','0','36','40','3','1','1','1','41','6',''),
('14340','sql','1204','5','chx_parametre_grandeur','c','4','2','43','64','4','0','1','0','41','45',''),
('14341','sql','1204','6',':n_chx_parametre_grandeur','c','3','0','68','92','3','0','2','0','41','45',''),
('14342','sql','1204','7','affecte','f','2','0','102','108','2','2','2','2','109','11',''),
('14343','sql','1204','8','champ','f','3','0','110','114','7','1','1','1','115','10',''),
('14344','sql','1204','9','chp_cle_grandeur','c','4','2','117','132','8','0','1','0','115','45',''),
('14345','sql','1204','10',':n_chp_cle_grandeur','c','3','0','136','154','7','0','2','0','115','45',''),
('14346','sql','1204','11','affecte','f','2','0','164','170','2','2','3','2','171','15',''),
('14347','sql','1204','12','champ','f','3','0','172','176','11','1','1','1','177','14',''),
('14348','sql','1204','13','cht_rev_grandeur','c','4','2','179','194','12','0','1','0','177','45',''),
('14349','sql','1204','14',':n_cht_rev_grandeur','c','3','0','198','216','11','0','2','0','177','45',''),
('14350','sql','1204','15','affecte','f','2','0','226','232','2','2','4','2','233','19',''),
('14351','sql','1204','16','champ','f','3','0','234','238','15','1','1','1','239','18',''),
('14352','sql','1204','17','che_actif_grandeur','c','4','2','241','258','16','0','1','0','239','45',''),
('14353','sql','1204','18',':n_che_actif_grandeur','c','3','0','262','282','15','0','2','0','239','45',''),
('14354','sql','1204','19','affecte','f','2','0','292','298','2','2','5','2','299','23',''),
('14355','sql','1204','20','champ','f','3','0','300','304','19','1','1','1','305','22',''),
('14356','sql','1204','21','chd__dtc_grandeur','c','4','2','307','323','20','0','1','0','305','45',''),
('14357','sql','1204','22',':n_chd__dtc_grandeur','c','3','0','327','346','19','0','2','0','305','45',''),
('14358','sql','1204','23','affecte','f','2','0','356','362','2','2','6','2','363','27',''),
('14359','sql','1204','24','champ','f','3','0','364','368','23','1','1','1','369','26',''),
('14360','sql','1204','25','chd__dtm_grandeur','c','4','2','371','387','24','0','1','0','369','45',''),
('14361','sql','1204','26',':n_chd__dtm_grandeur','c','3','0','391','410','23','0','2','0','369','45',''),
('14362','sql','1204','27','affecte','f','2','0','420','426','2','2','7','2','427','45',''),
('14363','sql','1204','28','champ','f','3','0','428','432','27','1','1','1','433','30',''),
('14364','sql','1204','29','che__nur_grandeur','c','4','2','435','451','28','0','1','0','433','45',''),
('14365','sql','1204','30',':n_che__nur_grandeur','c','3','0','455','474','27','0','2','0','433','45',''),
('14366','sql','1204','31','provenance','f','1','0','486','495','1','1','2','5','496','40',''),
('14367','sql','1204','32','table_reference','f','2','0','504','518','31','1','1','4','519','45',''),
('14368','sql','1204','33','source','f','3','0','530','535','32','1','1','3','536','45',''),
('14369','sql','1204','34','nom_de_la_table','f','4','0','537','551','33','3','1','2','552','45',''),
('14370','sql','1204','35','tbl_grandeurs','c','5','0','553','565','34','0','1','0','552','36',''),
('14371','sql','1204','36','alias','f','5','0','567','571','34','1','2','1','572','38',''),
('14372','sql','1204','37','T0','c','6','0','573','574','36','0','1','0','572','45',''),
('14373','sql','1204','38','base','f','5','0','577','580','34','1','3','1','581','45',''),
('14374','sql','1204','39','b1','c','6','0','582','583','38','0','1','0','581','45',''),
('14375','sql','1204','40','conditions','f','1','0','605','614','1','1','3','3','615','45',''),
('14376','sql','1204','41','egal','f','2','0','616','619','40','2','1','2','620','45',''),
('14377','sql','1204','42','champ','f','3','0','621','625','41','1','1','1','626','44',''),
('14378','sql','1204','43','chi_id_grandeur','c','4','2','628','642','42','0','1','0','626','45',''),
('14379','sql','1204','44',':c_chi_id_grandeur','c','3','0','646','663','41','0','2','0','626','45',''),
('14380','sql','1203','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14381','sql','1203','1','insérer','f','0','0','0','6','0','2','1','6','7','38',''),
('14382','sql','1203','2','valeurs','f','1','0','12','18','1','7','1','3','19','31',''),
('14383','sql','1203','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('14384','sql','1203','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('14385','sql','1203','5','chx_parametre_grandeur','c','4','2','42','63','4','0','1','0','40','38',''),
('14386','sql','1203','6',':chx_parametre_grandeur','c','3','0','67','89','3','0','2','0','40','38',''),
('14387','sql','1203','7','affecte','f','2','0','99','105','2','2','2','2','106','11',''),
('14388','sql','1203','8','champ','f','3','0','107','111','7','1','1','1','112','10',''),
('14389','sql','1203','9','chp_cle_grandeur','c','4','2','114','129','8','0','1','0','112','38',''),
('14390','sql','1203','10',':chp_cle_grandeur','c','3','0','133','149','7','0','2','0','112','38',''),
('14391','sql','1203','11','affecte','f','2','0','159','165','2','2','3','2','166','15',''),
('14392','sql','1203','12','champ','f','3','0','167','171','11','1','1','1','172','14',''),
('14393','sql','1203','13','cht_rev_grandeur','c','4','2','174','189','12','0','1','0','172','38',''),
('14394','sql','1203','14',':cht_rev_grandeur','c','3','0','193','209','11','0','2','0','172','38',''),
('14395','sql','1203','15','affecte','f','2','0','219','225','2','2','4','2','226','19',''),
('14396','sql','1203','16','champ','f','3','0','227','231','15','1','1','1','232','18',''),
('14397','sql','1203','17','che_actif_grandeur','c','4','2','234','251','16','0','1','0','232','38',''),
('14398','sql','1203','18',':che_actif_grandeur','c','3','0','255','273','15','0','2','0','232','38',''),
('14399','sql','1203','19','affecte','f','2','0','283','289','2','2','5','2','290','23',''),
('14400','sql','1203','20','champ','f','3','0','291','295','19','1','1','1','296','22',''),
('14401','sql','1203','21','chd__dtc_grandeur','c','4','2','298','314','20','0','1','0','296','38',''),
('14402','sql','1203','22',':chd__dtc_grandeur','c','3','0','318','335','19','0','2','0','296','38',''),
('14403','sql','1203','23','affecte','f','2','0','345','351','2','2','6','2','352','27',''),
('14404','sql','1203','24','champ','f','3','0','353','357','23','1','1','1','358','26',''),
('14405','sql','1203','25','chd__dtm_grandeur','c','4','2','360','376','24','0','1','0','358','38',''),
('14406','sql','1203','26',':chd__dtm_grandeur','c','3','0','380','397','23','0','2','0','358','38',''),
('14407','sql','1203','27','affecte','f','2','0','407','413','2','2','7','2','414','38',''),
('14408','sql','1203','28','champ','f','3','0','415','419','27','1','1','1','420','30',''),
('14409','sql','1203','29','che__nur_grandeur','c','4','2','422','438','28','0','1','0','420','38',''),
('14410','sql','1203','30',':che__nur_grandeur','c','3','0','442','459','27','0','2','0','420','38',''),
('14411','sql','1203','31','provenance','f','1','0','471','480','1','1','2','5','481','38',''),
('14412','sql','1203','32','table_reference','f','2','0','489','503','31','1','1','4','504','38',''),
('14413','sql','1203','33','source','f','3','0','515','520','32','1','1','3','521','38',''),
('14414','sql','1203','34','nom_de_la_table','f','4','0','522','536','33','2','1','2','537','38',''),
('14415','sql','1203','35','tbl_grandeurs','c','5','0','538','550','34','0','1','0','537','36',''),
('14416','sql','1203','36','base','f','5','0','552','555','34','1','2','1','556','38',''),
('14417','sql','1203','37','b1','c','6','0','557','558','36','0','1','0','556','38',''),
('14418','sql','1202','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14419','sql','1202','1','sélectionner','f','0','0','0','11','0','3','1','6','12','64',''),
('14420','sql','1202','2','valeurs','f','1','0','17','23','1','10','1','2','24','33',''),
('14421','sql','1202','3','champ','f','2','0','32','36','2','2','1','1','37','6','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 0 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 1000 (3986) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('14422','sql','1202','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('14423','sql','1202','5','chi_id_grandeur','c','3','2','44','58','3','0','2','0','37','64',''),
('14424','sql','1202','6','champ','f','2','0','69','73','2','2','2','1','74','9',''),
('14425','sql','1202','7','T0','c','3','2','76','77','6','0','1','0','74','8',''),
('14426','sql','1202','8','chx_parametre_grandeur','c','3','2','81','102','6','0','2','0','74','64',''),
('14427','sql','1202','9','champ','f','2','0','113','117','2','2','3','1','118','12',''),
('14428','sql','1202','10','T0','c','3','2','120','121','9','0','1','0','118','11',''),
('14429','sql','1202','11','chp_cle_grandeur','c','3','2','125','140','9','0','2','0','118','64',''),
('14430','sql','1202','12','champ','f','2','0','151','155','2','2','4','1','156','15',''),
('14431','sql','1202','13','T0','c','3','2','158','159','12','0','1','0','156','14',''),
('14432','sql','1202','14','cht_rev_grandeur','c','3','2','163','178','12','0','2','0','156','64',''),
('14433','sql','1202','15','champ','f','2','0','189','193','2','2','5','1','194','18',''),
('14434','sql','1202','16','T0','c','3','2','196','197','15','0','1','0','194','17',''),
('14435','sql','1202','17','che_actif_grandeur','c','3','2','201','218','15','0','2','0','194','64',''),
('14436','sql','1202','18','champ','f','2','0','229','233','2','2','6','1','234','21',''),
('14437','sql','1202','19','T1','c','3','2','236','237','18','0','1','0','234','20',''),
('14438','sql','1202','20','chp_cle_parametre','c','3','2','241','257','18','0','2','0','234','64',''),
('14439','sql','1202','21','champ','f','2','0','268','272','2','2','7','1','273','24',''),
('14440','sql','1202','22','T1','c','3','2','275','276','21','0','1','0','273','23',''),
('14441','sql','1202','23','chp_nom_parametre','c','3','2','280','296','21','0','2','0','273','64',''),
('14442','sql','1202','24','champ','f','2','0','307','311','2','2','8','1','312','27',''),
('14443','sql','1202','25','T1','c','3','2','314','315','24','0','1','0','312','26',''),
('14444','sql','1202','26','cht_rev_parametre','c','3','2','319','335','24','0','2','0','312','64',''),
('14445','sql','1202','27','champ','f','2','0','346','350','2','2','9','1','351','30',''),
('14446','sql','1202','28','T1','c','3','2','353','354','27','0','1','0','351','29',''),
('14447','sql','1202','29','cht_ordre_parametre','c','3','2','358','376','27','0','2','0','351','64',''),
('14448','sql','1202','30','champ','f','2','0','387','391','2','2','10','1','392','64',''),
('14449','sql','1202','31','T1','c','3','2','394','395','30','0','1','0','392','32',''),
('14450','sql','1202','32','che_pour_admin_parametre','c','3','2','399','422','30','0','2','0','392','64',''),
('14451','sql','1202','33','provenance','f','1','0','435','444','1','2','2','5','445','58',''),
('14452','sql','1202','34','table_reference','f','2','0','453','467','33','1','1','4','468','42',''),
('14453','sql','1202','35','source','f','3','0','479','484','34','1','1','3','485','64',''),
('14454','sql','1202','36','nom_de_la_table','f','4','0','486','500','35','3','1','2','501','64',''),
('14455','sql','1202','37','tbl_grandeurs','c','5','0','502','514','36','0','1','0','501','38',''),
('14456','sql','1202','38','alias','f','5','0','516','520','36','1','2','1','521','40',''),
('14457','sql','1202','39','T0','c','6','0','522','523','38','0','1','0','521','64',''),
('14458','sql','1202','40','base','f','5','0','526','529','36','1','3','1','530','64',''),
('14459','sql','1202','41','b1','c','6','0','531','532','40','0','1','0','530','64',''),
('14460','sql','1202','42','jointure_gauche','f','2','0','552','566','33','2','2','4','567','64',''),
('14461','sql','1202','43','source','f','3','0','578','583','42','1','1','3','584','50',''),
('14462','sql','1202','44','nom_de_la_table','f','4','0','585','599','43','3','1','2','600','64',''),
('14463','sql','1202','45','tbl_parametres','c','5','0','601','614','44','0','1','0','600','46',''),
('14464','sql','1202','46','alias','f','5','0','616','620','44','1','2','1','621','48',''),
('14465','sql','1202','47','T1','c','6','0','622','623','46','0','1','0','621','64',''),
('14466','sql','1202','48','base','f','5','0','626','629','44','1','3','1','630','64',''),
('14467','sql','1202','49','b1','c','6','0','631','632','48','0','1','0','630','64',''),
('14468','sql','1202','50','contrainte','f','3','0','647','656','42','1','2','3','657','64',''),
('14469','sql','1202','51','egal','f','4','0','658','661','50','2','1','2','662','64',''),
('14470','sql','1202','52','champ','f','5','0','663','667','51','2','1','1','668','55',''),
('14471','sql','1202','53','T1','c','6','0','669','670','52','0','1','0','668','54',''),
('14472','sql','1202','54','chi_id_parametre','c','6','0','672','687','52','0','2','0','668','64',''),
('14473','sql','1202','55','champ','f','5','0','690','694','51','2','2','1','695','64',''),
('14474','sql','1202','56','T0','c','6','0','696','697','55','0','1','0','695','57',''),
('14475','sql','1202','57','chx_parametre_grandeur','c','6','0','699','720','55','0','2','0','695','64',''),
('14476','sql','1202','58','conditions','f','1','0','742','751','1','1','3','3','752','64',''),
('14477','sql','1202','59','egal','f','2','0','753','756','58','2','1','2','757','64',''),
('14478','sql','1202','60','champ','f','3','0','758','762','59','2','1','1','763','63',''),
('14479','sql','1202','61','T0','c','4','2','765','766','60','0','1','0','763','62',''),
('14480','sql','1202','62','chi_id_grandeur','c','4','2','770','784','60','0','2','0','763','64',''),
('14481','sql','1202','63',':T0_chi_id_grandeur','c','3','0','788','806','59','0','2','0','763','64',''),
('14482','sql','1201','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14483','sql','1201','1','sélectionner','f','0','0','0','11','0','4','1','6','12','97',''),
('14484','sql','1201','2','valeurs','f','1','0','17','23','1','10','1','2','24','33',''),
('14485','sql','1201','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('14486','sql','1201','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('14487','sql','1201','5','chi_id_grandeur','c','3','2','44','58','3','0','2','0','37','97',''),
('14488','sql','1201','6','champ','f','2','0','69','73','2','2','2','1','74','9',''),
('14489','sql','1201','7','T0','c','3','2','76','77','6','0','1','0','74','8',''),
('14490','sql','1201','8','chp_cle_grandeur','c','3','2','81','96','6','0','2','0','74','97',''),
('14491','sql','1201','9','champ','f','2','0','107','111','2','2','3','1','112','12',''),
('14492','sql','1201','10','T0','c','3','2','114','115','9','0','1','0','112','11',''),
('14493','sql','1201','11','cht_rev_grandeur','c','3','2','119','134','9','0','2','0','112','97',''),
('14494','sql','1201','12','champ','f','2','0','145','149','2','2','4','1','150','15',''),
('14495','sql','1201','13','T0','c','3','2','152','153','12','0','1','0','150','14',''),
('14496','sql','1201','14','chx_parametre_grandeur','c','3','2','157','178','12','0','2','0','150','97',''),
('14497','sql','1201','15','champ','f','2','0','189','193','2','2','5','1','194','18',''),
('14498','sql','1201','16','T0','c','3','2','196','197','15','0','1','0','194','17',''),
('14499','sql','1201','17','che_actif_grandeur','c','3','2','201','218','15','0','2','0','194','97',''),
('14500','sql','1201','18','champ','f','2','0','229','233','2','2','6','1','234','21',''),
('14501','sql','1201','19','T1','c','3','2','236','237','18','0','1','0','234','20',''),
('14502','sql','1201','20','chp_cle_parametre','c','3','2','241','257','18','0','2','0','234','97',''),
('14503','sql','1201','21','champ','f','2','0','268','272','2','2','7','1','273','24',''),
('14504','sql','1201','22','T1','c','3','2','275','276','21','0','1','0','273','23',''),
('14505','sql','1201','23','chp_nom_parametre','c','3','2','280','296','21','0','2','0','273','97',''),
('14506','sql','1201','24','champ','f','2','0','307','311','2','2','8','1','312','27',''),
('14507','sql','1201','25','T1','c','3','2','314','315','24','0','1','0','312','26',''),
('14508','sql','1201','26','cht_rev_parametre','c','3','2','319','335','24','0','2','0','312','97',''),
('14509','sql','1201','27','champ','f','2','0','346','350','2','2','9','1','351','30',''),
('14510','sql','1201','28','T1','c','3','2','353','354','27','0','1','0','351','29',''),
('14511','sql','1201','29','cht_ordre_parametre','c','3','2','358','376','27','0','2','0','351','97',''),
('14512','sql','1201','30','champ','f','2','0','387','391','2','2','10','1','392','97',''),
('14513','sql','1201','31','T1','c','3','2','394','395','30','0','1','0','392','32',''),
('14514','sql','1201','32','che_pour_admin_parametre','c','3','2','399','422','30','0','2','0','392','97',''),
('14515','sql','1201','33','provenance','f','1','0','435','444','1','2','2','5','445','58',''),
('14516','sql','1201','34','table_reference','f','2','0','453','467','33','1','1','4','468','42',''),
('14517','sql','1201','35','source','f','3','0','479','484','34','1','1','3','485','97',''),
('14518','sql','1201','36','nom_de_la_table','f','4','0','486','500','35','3','1','2','501','97',''),
('14519','sql','1201','37','tbl_grandeurs','c','5','0','502','514','36','0','1','0','501','38',''),
('14520','sql','1201','38','alias','f','5','0','516','520','36','1','2','1','521','40',''),
('14521','sql','1201','39','T0','c','6','0','522','523','38','0','1','0','521','97',''),
('14522','sql','1201','40','base','f','5','0','526','529','36','1','3','1','530','97',''),
('14523','sql','1201','41','b1','c','6','0','531','532','40','0','1','0','530','97',''),
('14524','sql','1201','42','jointure_gauche','f','2','0','552','566','33','2','2','4','567','97',''),
('14525','sql','1201','43','source','f','3','0','578','583','42','1','1','3','584','50',''),
('14526','sql','1201','44','nom_de_la_table','f','4','0','585','599','43','3','1','2','600','97',''),
('14527','sql','1201','45','tbl_parametres','c','5','0','601','614','44','0','1','0','600','46',''),
('14528','sql','1201','46','alias','f','5','0','616','620','44','1','2','1','621','48',''),
('14529','sql','1201','47','T1','c','6','0','622','623','46','0','1','0','621','97',''),
('14530','sql','1201','48','base','f','5','0','626','629','44','1','3','1','630','97',''),
('14531','sql','1201','49','b1','c','6','0','631','632','48','0','1','0','630','97',''),
('14532','sql','1201','50','contrainte','f','3','0','647','656','42','1','2','3','657','97',''),
('14533','sql','1201','51','egal','f','4','0','658','661','50','2','1','2','662','97',''),
('14534','sql','1201','52','champ','f','5','0','663','667','51','2','1','1','668','55',''),
('14535','sql','1201','53','T1','c','6','0','669','670','52','0','1','0','668','54',''),
('14536','sql','1201','54','chi_id_parametre','c','6','0','672','687','52','0','2','0','668','97',''),
('14537','sql','1201','55','champ','f','5','0','690','694','51','2','2','1','695','97',''),
('14538','sql','1201','56','T0','c','6','0','696','697','55','0','1','0','695','57',''),
('14539','sql','1201','57','chx_parametre_grandeur','c','6','0','699','720','55','0','2','0','695','97',''),
('14540','sql','1201','58','conditions','f','1','0','742','751','1','1','3','4','752','85',''),
('14541','sql','1201','59','et','f','2','0','760','761','58','5','1','3','762','97',''),
('14542','sql','1201','60','egal','f','3','0','773','776','59','2','1','2','777','65',''),
('14543','sql','1201','61','champ','f','4','0','778','782','60','2','1','1','783','64',''),
('14544','sql','1201','62','T0','c','5','2','785','786','61','0','1','0','783','63',''),
('14545','sql','1201','63','chx_parametre_grandeur','c','5','2','790','811','61','0','2','0','783','97',''),
('14546','sql','1201','64',':T0_chx_parametre_grandeur','c','4','0','815','840','60','0','2','0','783','97',''),
('14547','sql','1201','65','comme','f','3','0','853','857','59','2','2','2','858','70',''),
('14548','sql','1201','66','champ','f','4','0','859','863','65','2','1','1','864','69',''),
('14549','sql','1201','67','T0','c','5','2','866','867','66','0','1','0','864','68',''),
('14550','sql','1201','68','chp_cle_grandeur','c','5','2','871','886','66','0','2','0','864','97',''),
('14551','sql','1201','69',':T0_chp_cle_grandeur','c','4','0','890','909','65','0','2','0','864','97',''),
('14552','sql','1201','70','egal','f','3','0','922','925','59','2','3','2','926','75',''),
('14553','sql','1201','71','champ','f','4','0','927','931','70','2','1','1','932','74',''),
('14554','sql','1201','72','T0','c','5','2','934','935','71','0','1','0','932','73',''),
('14555','sql','1201','73','chi_id_grandeur','c','5','2','939','953','71','0','2','0','932','97',''),
('14556','sql','1201','74',':T0_chi_id_grandeur','c','4','0','957','975','70','0','2','0','932','97',''),
('14557','sql','1201','75','comme','f','3','0','988','992','59','2','4','2','993','80',''),
('14558','sql','1201','76','champ','f','4','0','994','998','75','2','1','1','999','79',''),
('14559','sql','1201','77','T0','c','5','2','1001','1002','76','0','1','0','999','78',''),
('14560','sql','1201','78','cht_rev_grandeur','c','5','2','1006','1021','76','0','2','0','999','97',''),
('14561','sql','1201','79',':T0_cht_rev_grandeur','c','4','0','1025','1044','75','0','2','0','999','97',''),
('14562','sql','1201','80','egal','f','3','0','1057','1060','59','2','5','2','1061','97',''),
('14563','sql','1201','81','champ','f','4','0','1062','1066','80','2','1','1','1067','84',''),
('14564','sql','1201','82','T0','c','5','2','1069','1070','81','0','1','0','1067','83',''),
('14565','sql','1201','83','che_actif_grandeur','c','5','2','1074','1091','81','0','2','0','1067','97',''),
('14566','sql','1201','84',':T0_che_actif_grandeur','c','4','0','1095','1116','80','0','2','0','1067','97',''),
('14567','sql','1201','85','complements','f','1','0','1136','1146','1','2','4','4','1147','97',''),
('14568','sql','1201','86','trier_par','f','2','0','1155','1163','85','1','1','3','1164','92',''),
('14569','sql','1201','87','','f','3','0','1155','1163','86','2','1','2','1165','97',''),
('14570','sql','1201','88','champ','f','4','0','1166','1170','87','2','1','1','1171','91',''),
('14571','sql','1201','89','T0','c','5','2','1173','1174','88','0','1','0','1171','90',''),
('14572','sql','1201','90','chi_id_grandeur','c','5','2','1178','1192','88','0','2','0','1171','97',''),
('14573','sql','1201','91','décroissant','f','4','0','1196','1206','87','0','2','0','1207','97',''),
('14574','sql','1201','92','limité_à','f','2','0','1219','1226','85','2','2','2','1227','97',''),
('14575','sql','1201','93','quantité','f','3','0','1228','1235','92','1','1','1','1236','95',''),
('14576','sql','1201','94',':quantitee','c','4','0','1237','1246','93','0','1','0','1236','97',''),
('14577','sql','1201','95','début','f','3','0','1249','1253','92','1','2','1','1254','97',''),
('14578','sql','1201','96',':debut','c','4','0','1255','1260','95','0','1','0','1254','97',''),
('14579','sql','1192','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14580','sql','1192','1','modifier','f','0','0','0','7','0','3','1','6','8','21',''),
('14581','sql','1192','2','valeurs','f','1','0','13','19','1','1','1','3','20','7',''),
('14582','sql','1192','3','affecte','f','2','0','21','27','2','2','1','2','28','21',''),
('14583','sql','1192','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('14584','sql','1192','5','cht_rev_grandeur','c','4','2','36','51','4','0','1','0','34','21',''),
('14585','sql','1192','6',':n_cht_rev_grandeur','c','3','0','55','73','3','0','2','0','34','21',''),
('14586','sql','1192','7','provenance','f','1','0','81','90','1','1','2','5','91','16',''),
('14587','sql','1192','8','table_reference','f','2','0','99','113','7','1','1','4','114','21',''),
('14588','sql','1192','9','source','f','3','0','125','130','8','1','1','3','131','21',''),
('14589','sql','1192','10','nom_de_la_table','f','4','0','132','146','9','3','1','2','147','21',''),
('14590','sql','1192','11','tbl_grandeurs','c','5','0','148','160','10','0','1','0','147','12',''),
('14591','sql','1192','12','alias','f','5','0','162','166','10','1','2','1','167','14',''),
('14592','sql','1192','13','T0','c','6','0','168','169','12','0','1','0','167','21',''),
('14593','sql','1192','14','base','f','5','0','172','175','10','1','3','1','176','21',''),
('14594','sql','1192','15','b1','c','6','0','177','178','14','0','1','0','176','21',''),
('14595','sql','1192','16','conditions','f','1','0','200','209','1','1','3','3','210','21',''),
('14596','sql','1192','17','egal','f','2','0','211','214','16','2','1','2','215','21',''),
('14597','sql','1192','18','champ','f','3','0','216','220','17','1','1','1','221','20',''),
('14598','sql','1192','19','chi_id_grandeur','c','4','2','223','237','18','0','1','0','221','21',''),
('14599','sql','1192','20',':c_chi_id_grandeur','c','3','0','241','258','17','0','2','0','221','21',''),
('14600','sql','1191','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14601','sql','1191','1','sélectionner','f','0','0','0','11','0','3','1','6','12','33',''),
('14602','sql','1191','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('14603','sql','1191','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('14604','sql','1191','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('14605','sql','1191','5','chi_id_grandeur','c','3','2','44','58','3','0','2','0','37','33',''),
('14606','sql','1191','6','champ','f','2','0','69','73','2','2','2','1','74','9',''),
('14607','sql','1191','7','T0','c','3','2','76','77','6','0','1','0','74','8',''),
('14608','sql','1191','8','chx_parametre_grandeur','c','3','2','81','102','6','0','2','0','74','33',''),
('14609','sql','1191','9','champ','f','2','0','113','117','2','2','3','1','118','12',''),
('14610','sql','1191','10','T0','c','3','2','120','121','9','0','1','0','118','11',''),
('14611','sql','1191','11','chp_cle_grandeur','c','3','2','125','140','9','0','2','0','118','33',''),
('14612','sql','1191','12','champ','f','2','0','151','155','2','2','4','1','156','15',''),
('14613','sql','1191','13','T0','c','3','2','158','159','12','0','1','0','156','14',''),
('14614','sql','1191','14','cht_rev_grandeur','c','3','2','163','178','12','0','2','0','156','33',''),
('14615','sql','1191','15','champ','f','2','0','189','193','2','2','5','1','194','33',''),
('14616','sql','1191','16','T0','c','3','2','196','197','15','0','1','0','194','17',''),
('14617','sql','1191','17','che_actif_grandeur','c','3','2','201','218','15','0','2','0','194','33',''),
('14618','sql','1191','18','provenance','f','1','0','231','240','1','1','2','5','241','27',''),
('14619','sql','1191','19','table_reference','f','2','0','249','263','18','1','1','4','264','33',''),
('14620','sql','1191','20','source','f','3','0','275','280','19','1','1','3','281','33',''),
('14621','sql','1191','21','nom_de_la_table','f','4','0','282','296','20','3','1','2','297','33',''),
('14622','sql','1191','22','tbl_grandeurs','c','5','0','298','310','21','0','1','0','297','23',''),
('14623','sql','1191','23','alias','f','5','0','312','316','21','1','2','1','317','25',''),
('14624','sql','1191','24','T0','c','6','0','318','319','23','0','1','0','317','33',''),
('14625','sql','1191','25','base','f','5','0','322','325','21','1','3','1','326','33',''),
('14626','sql','1191','26','b1','c','6','0','327','328','25','0','1','0','326','33',''),
('14627','sql','1191','27','conditions','f','1','0','350','359','1','1','3','3','360','33',''),
('14628','sql','1191','28','egal','f','2','0','361','364','27','2','1','2','365','33',''),
('14629','sql','1191','29','champ','f','3','0','366','370','28','2','1','1','371','32',''),
('14630','sql','1191','30','T0','c','4','2','373','374','29','0','1','0','371','31',''),
('14631','sql','1191','31','chi_id_grandeur','c','4','2','378','392','29','0','2','0','371','33',''),
('14632','sql','1191','32',':T0_chi_id_grandeur','c','3','0','396','414','28','0','2','0','371','33',''),
('14633','sql','1190','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14634','sql','1190','1','modifier','f','0','0','0','7','0','3','1','6','8','21',''),
('14635','sql','1190','2','valeurs','f','1','0','13','19','1','1','1','3','20','7',''),
('14636','sql','1190','3','affecte','f','2','0','21','27','2','2','1','2','28','21',''),
('14637','sql','1190','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('14638','sql','1190','5','che_actif_grandeur','c','4','2','36','53','4','0','1','0','34','21',''),
('14639','sql','1190','6',':n_che_actif_grandeur','c','3','0','57','77','3','0','2','0','34','21',''),
('14640','sql','1190','7','provenance','f','1','0','85','94','1','1','2','5','95','16',''),
('14641','sql','1190','8','table_reference','f','2','0','103','117','7','1','1','4','118','21',''),
('14642','sql','1190','9','source','f','3','0','129','134','8','1','1','3','135','21',''),
('14643','sql','1190','10','nom_de_la_table','f','4','0','136','150','9','3','1','2','151','21',''),
('14644','sql','1190','11','tbl_grandeurs','c','5','0','152','164','10','0','1','0','151','12',''),
('14645','sql','1190','12','alias','f','5','0','166','170','10','1','2','1','171','14',''),
('14646','sql','1190','13','T0','c','6','0','172','173','12','0','1','0','171','21',''),
('14647','sql','1190','14','base','f','5','0','176','179','10','1','3','1','180','21',''),
('14648','sql','1190','15','b1','c','6','0','181','182','14','0','1','0','180','21',''),
('14649','sql','1190','16','conditions','f','1','0','204','213','1','1','3','3','214','21',''),
('14650','sql','1190','17','egal','f','2','0','215','218','16','2','1','2','219','21',''),
('14651','sql','1190','18','champ','f','3','0','220','224','17','1','1','1','225','20',''),
('14652','sql','1190','19','chi_id_grandeur','c','4','2','227','241','18','0','1','0','225','21',''),
('14653','sql','1190','20',':c_chi_id_grandeur','c','3','0','245','262','17','0','2','0','225','21',''),
('14654','sql','1189','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14655','sql','1189','1','modifier','f','0','0','0','7','0','3','1','6','8','21',''),
('14656','sql','1189','2','valeurs','f','1','0','13','19','1','1','1','3','20','7',''),
('14657','sql','1189','3','affecte','f','2','0','21','27','2','2','1','2','28','21',''),
('14658','sql','1189','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('14659','sql','1189','5','cht_ordre_parametre','c','4','2','36','54','4','0','1','0','34','21',''),
('14660','sql','1189','6',':n_cht_ordre_parametre','c','3','0','58','79','3','0','2','0','34','21',''),
('14661','sql','1189','7','provenance','f','1','0','87','96','1','1','2','5','97','16',''),
('14662','sql','1189','8','table_reference','f','2','0','105','119','7','1','1','4','120','21',''),
('14663','sql','1189','9','source','f','3','0','131','136','8','1','1','3','137','21',''),
('14664','sql','1189','10','nom_de_la_table','f','4','0','138','152','9','3','1','2','153','21',''),
('14665','sql','1189','11','tbl_parametres','c','5','0','154','167','10','0','1','0','153','12',''),
('14666','sql','1189','12','alias','f','5','0','169','173','10','1','2','1','174','14',''),
('14667','sql','1189','13','T0','c','6','0','175','176','12','0','1','0','174','21',''),
('14668','sql','1189','14','base','f','5','0','179','182','10','1','3','1','183','21',''),
('14669','sql','1189','15','b1','c','6','0','184','185','14','0','1','0','183','21',''),
('14670','sql','1189','16','conditions','f','1','0','207','216','1','1','3','3','217','21',''),
('14671','sql','1189','17','egal','f','2','0','218','221','16','2','1','2','222','21',''),
('14672','sql','1189','18','champ','f','3','0','223','227','17','1','1','1','228','20',''),
('14673','sql','1189','19','chi_id_parametre','c','4','2','230','245','18','0','1','0','228','21',''),
('14674','sql','1189','20',':c_chi_id_parametre','c','3','0','249','267','17','0','2','0','228','21',''),
('14675','sql','1188','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14676','sql','1188','1','modifier','f','0','0','0','7','0','3','1','6','8','21',''),
('14677','sql','1188','2','valeurs','f','1','0','13','19','1','1','1','3','20','7',''),
('14678','sql','1188','3','affecte','f','2','0','21','27','2','2','1','2','28','21',''),
('14679','sql','1188','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('14680','sql','1188','5','chp_cle_grandeur','c','4','2','36','51','4','0','1','0','34','21',''),
('14681','sql','1188','6',':n_chp_cle_grandeur','c','3','0','55','73','3','0','2','0','34','21',''),
('14682','sql','1188','7','provenance','f','1','0','81','90','1','1','2','5','91','16',''),
('14683','sql','1188','8','table_reference','f','2','0','99','113','7','1','1','4','114','21',''),
('14684','sql','1188','9','source','f','3','0','125','130','8','1','1','3','131','21',''),
('14685','sql','1188','10','nom_de_la_table','f','4','0','132','146','9','3','1','2','147','21',''),
('14686','sql','1188','11','tbl_grandeurs','c','5','0','148','160','10','0','1','0','147','12',''),
('14687','sql','1188','12','alias','f','5','0','162','166','10','1','2','1','167','14',''),
('14688','sql','1188','13','T0','c','6','0','168','169','12','0','1','0','167','21',''),
('14689','sql','1188','14','base','f','5','0','172','175','10','1','3','1','176','21',''),
('14690','sql','1188','15','b1','c','6','0','177','178','14','0','1','0','176','21',''),
('14691','sql','1188','16','conditions','f','1','0','200','209','1','1','3','3','210','21',''),
('14692','sql','1188','17','egal','f','2','0','211','214','16','2','1','2','215','21',''),
('14693','sql','1188','18','champ','f','3','0','216','220','17','1','1','1','221','20',''),
('14694','sql','1188','19','chi_id_grandeur','c','4','2','223','237','18','0','1','0','221','21',''),
('14695','sql','1188','20',':c_chi_id_grandeur','c','3','0','241','258','17','0','2','0','221','21',''),
('14696','sql','1187','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14697','sql','1187','1','insérer','f','0','0','0','6','0','2','1','6','7','38',''),
('14698','sql','1187','2','valeurs','f','1','0','12','18','1','7','1','3','19','31',''),
('14699','sql','1187','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('14700','sql','1187','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('14701','sql','1187','5','chx_parametre_grandeur','c','4','2','42','63','4','0','1','0','40','38',''),
('14702','sql','1187','6',':chx_parametre_grandeur','c','3','0','67','89','3','0','2','0','40','38',''),
('14703','sql','1187','7','affecte','f','2','0','99','105','2','2','2','2','106','11',''),
('14704','sql','1187','8','champ','f','3','0','107','111','7','1','1','1','112','10',''),
('14705','sql','1187','9','chp_cle_grandeur','c','4','2','114','129','8','0','1','0','112','38',''),
('14706','sql','1187','10',':chp_cle_grandeur','c','3','0','133','149','7','0','2','0','112','38',''),
('14707','sql','1187','11','affecte','f','2','0','159','165','2','2','3','2','166','15',''),
('14708','sql','1187','12','champ','f','3','0','167','171','11','1','1','1','172','14',''),
('14709','sql','1187','13','cht_rev_grandeur','c','4','2','174','189','12','0','1','0','172','38',''),
('14710','sql','1187','14',':cht_rev_grandeur','c','3','0','193','209','11','0','2','0','172','38',''),
('14711','sql','1187','15','affecte','f','2','0','219','225','2','2','4','2','226','19',''),
('14712','sql','1187','16','champ','f','3','0','227','231','15','1','1','1','232','18',''),
('14713','sql','1187','17','che_actif_grandeur','c','4','2','234','251','16','0','1','0','232','38',''),
('14714','sql','1187','18',':che_actif_grandeur','c','3','0','255','273','15','0','2','0','232','38',''),
('14715','sql','1187','19','affecte','f','2','0','283','289','2','2','5','2','290','23',''),
('14716','sql','1187','20','champ','f','3','0','291','295','19','1','1','1','296','22',''),
('14717','sql','1187','21','chd__dtc_grandeur','c','4','2','298','314','20','0','1','0','296','38',''),
('14718','sql','1187','22',':chd__dtc_grandeur','c','3','0','318','335','19','0','2','0','296','38',''),
('14719','sql','1187','23','affecte','f','2','0','345','351','2','2','6','2','352','27',''),
('14720','sql','1187','24','champ','f','3','0','353','357','23','1','1','1','358','26',''),
('14721','sql','1187','25','chd__dtm_grandeur','c','4','2','360','376','24','0','1','0','358','38',''),
('14722','sql','1187','26',':chd__dtm_grandeur','c','3','0','380','397','23','0','2','0','358','38',''),
('14723','sql','1187','27','affecte','f','2','0','407','413','2','2','7','2','414','38',''),
('14724','sql','1187','28','champ','f','3','0','415','419','27','1','1','1','420','30',''),
('14725','sql','1187','29','che__nur_grandeur','c','4','2','422','438','28','0','1','0','420','38',''),
('14726','sql','1187','30',':che__nur_grandeur','c','3','0','442','459','27','0','2','0','420','38',''),
('14727','sql','1187','31','provenance','f','1','0','471','480','1','1','2','5','481','38',''),
('14728','sql','1187','32','table_reference','f','2','0','489','503','31','1','1','4','504','38',''),
('14729','sql','1187','33','source','f','3','0','515','520','32','1','1','3','521','38',''),
('14730','sql','1187','34','nom_de_la_table','f','4','0','522','536','33','2','1','2','537','38',''),
('14731','sql','1187','35','tbl_grandeurs','c','5','0','538','550','34','0','1','0','537','36',''),
('14732','sql','1187','36','base','f','5','0','552','555','34','1','2','1','556','38',''),
('14733','sql','1187','37','b1','c','6','0','557','558','36','0','1','0','556','38',''),
('14734','sql','1186','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14735','sql','1186','1','sélectionner','f','0','0','0','11','0','3','1','6','12','61',''),
('14736','sql','1186','2','valeurs','f','1','0','17','23','1','9','1','2','24','30',''),
('14737','sql','1186','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('14738','sql','1186','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('14739','sql','1186','5','chi_id_grandeur','c','3','2','44','58','3','0','2','0','37','61',''),
('14740','sql','1186','6','champ','f','2','0','69','73','2','2','2','1','74','9',''),
('14741','sql','1186','7','T0','c','3','2','76','77','6','0','1','0','74','8',''),
('14742','sql','1186','8','chx_parametre_grandeur','c','3','2','81','102','6','0','2','0','74','61',''),
('14743','sql','1186','9','champ','f','2','0','113','117','2','2','3','1','118','12',''),
('14744','sql','1186','10','T0','c','3','2','120','121','9','0','1','0','118','11',''),
('14745','sql','1186','11','chp_cle_grandeur','c','3','2','125','140','9','0','2','0','118','61',''),
('14746','sql','1186','12','champ','f','2','0','151','155','2','2','4','1','156','15',''),
('14747','sql','1186','13','T0','c','3','2','158','159','12','0','1','0','156','14',''),
('14748','sql','1186','14','cht_rev_grandeur','c','3','2','163','178','12','0','2','0','156','61',''),
('14749','sql','1186','15','champ','f','2','0','189','193','2','2','5','1','194','18',''),
('14750','sql','1186','16','T0','c','3','2','196','197','15','0','1','0','194','17',''),
('14751','sql','1186','17','che_actif_grandeur','c','3','2','201','218','15','0','2','0','194','61',''),
('14752','sql','1186','18','champ','f','2','0','229','233','2','2','6','1','234','21',''),
('14753','sql','1186','19','T1','c','3','2','236','237','18','0','1','0','234','20',''),
('14754','sql','1186','20','chp_cle_parametre','c','3','2','241','257','18','0','2','0','234','61',''),
('14755','sql','1186','21','champ','f','2','0','268','272','2','2','7','1','273','24',''),
('14756','sql','1186','22','T1','c','3','2','275','276','21','0','1','0','273','23',''),
('14757','sql','1186','23','chp_nom_parametre','c','3','2','280','296','21','0','2','0','273','61',''),
('14758','sql','1186','24','champ','f','2','0','307','311','2','2','8','1','312','27',''),
('14759','sql','1186','25','T1','c','3','2','314','315','24','0','1','0','312','26',''),
('14760','sql','1186','26','cht_rev_parametre','c','3','2','319','335','24','0','2','0','312','61',''),
('14761','sql','1186','27','champ','f','2','0','346','350','2','2','9','1','351','61',''),
('14762','sql','1186','28','T1','c','3','2','353','354','27','0','1','0','351','29',''),
('14763','sql','1186','29','cht_ordre_parametre','c','3','2','358','376','27','0','2','0','351','61',''),
('14764','sql','1186','30','provenance','f','1','0','389','398','1','2','2','5','399','55',''),
('14765','sql','1186','31','table_reference','f','2','0','407','421','30','1','1','4','422','39',''),
('14766','sql','1186','32','source','f','3','0','433','438','31','1','1','3','439','61',''),
('14767','sql','1186','33','nom_de_la_table','f','4','0','440','454','32','3','1','2','455','61',''),
('14768','sql','1186','34','tbl_grandeurs','c','5','0','456','468','33','0','1','0','455','35',''),
('14769','sql','1186','35','alias','f','5','0','470','474','33','1','2','1','475','37',''),
('14770','sql','1186','36','T0','c','6','0','476','477','35','0','1','0','475','61',''),
('14771','sql','1186','37','base','f','5','0','480','483','33','1','3','1','484','61',''),
('14772','sql','1186','38','b1','c','6','0','485','486','37','0','1','0','484','61',''),
('14773','sql','1186','39','jointure_gauche','f','2','0','506','520','30','2','2','4','521','61',''),
('14774','sql','1186','40','source','f','3','0','532','537','39','1','1','3','538','47',''),
('14775','sql','1186','41','nom_de_la_table','f','4','0','539','553','40','3','1','2','554','61',''),
('14776','sql','1186','42','tbl_parametres','c','5','0','555','568','41','0','1','0','554','43',''),
('14777','sql','1186','43','alias','f','5','0','570','574','41','1','2','1','575','45',''),
('14778','sql','1186','44','T1','c','6','0','576','577','43','0','1','0','575','61',''),
('14779','sql','1186','45','base','f','5','0','580','583','41','1','3','1','584','61',''),
('14780','sql','1186','46','b1','c','6','0','585','586','45','0','1','0','584','61',''),
('14781','sql','1186','47','contrainte','f','3','0','601','610','39','1','2','3','611','61',''),
('14782','sql','1186','48','egal','f','4','0','612','615','47','2','1','2','616','61',''),
('14783','sql','1186','49','champ','f','5','0','617','621','48','2','1','1','622','52',''),
('14784','sql','1186','50','T1','c','6','0','623','624','49','0','1','0','622','51',''),
('14785','sql','1186','51','chi_id_parametre','c','6','0','626','641','49','0','2','0','622','61',''),
('14786','sql','1186','52','champ','f','5','0','644','648','48','2','2','1','649','61',''),
('14787','sql','1186','53','T0','c','6','0','650','651','52','0','1','0','649','54',''),
('14788','sql','1186','54','chx_parametre_grandeur','c','6','0','653','674','52','0','2','0','649','61',''),
('14789','sql','1186','55','conditions','f','1','0','696','705','1','1','3','3','706','61',''),
('14790','sql','1186','56','egal','f','2','0','707','710','55','2','1','2','711','61',''),
('14791','sql','1186','57','champ','f','3','0','712','716','56','2','1','1','717','60',''),
('14792','sql','1186','58','T0','c','4','2','719','720','57','0','1','0','717','59',''),
('14793','sql','1186','59','chx_parametre_grandeur','c','4','2','724','745','57','0','2','0','717','61',''),
('14794','sql','1186','60',':T0_chx_parametre_grandeur','c','3','0','749','774','56','0','2','0','717','61',''),
('14795','sql','1185','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14796','sql','1185','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('14797','sql','1185','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('14798','sql','1185','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('14799','sql','1185','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('14800','sql','1185','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('14801','sql','1185','6','tbl_parametres','c','5','0','81','94','5','0','1','0','80','7',''),
('14802','sql','1185','7','base','f','5','0','96','99','5','1','2','1','100','14',''),
('14803','sql','1185','8','b1','c','6','0','101','102','7','0','1','0','100','14',''),
('14804','sql','1185','9','conditions','f','1','0','124','133','1','1','2','3','134','14',''),
('14805','sql','1185','10','egal','f','2','0','135','138','9','2','1','2','139','14',''),
('14806','sql','1185','11','champ','f','3','0','140','144','10','1','1','1','145','13',''),
('14807','sql','1185','12','chi_id_parametre','c','4','2','147','162','11','0','1','0','145','14',''),
('14808','sql','1185','13',':chi_id_parametre','c','3','0','166','182','10','0','2','0','145','14',''),
('14809','sql','1184','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14810','sql','1184','1','modifier','f','0','0','0','7','0','2','1','6','8','44',''),
('14811','sql','1184','2','valeurs','f','1','0','13','19','1','8','1','3','20','35',''),
('14812','sql','1184','3','affecte','f','2','0','28','34','2','2','1','2','35','7',''),
('14813','sql','1184','4','champ','f','3','0','36','40','3','1','1','1','41','6',''),
('14814','sql','1184','5','chp_cle_parametre','c','4','2','43','59','4','0','1','0','41','44',''),
('14815','sql','1184','6',':n_chp_cle_parametre','c','3','0','63','82','3','0','2','0','41','44',''),
('14816','sql','1184','7','affecte','f','2','0','92','98','2','2','2','2','99','11',''),
('14817','sql','1184','8','champ','f','3','0','100','104','7','1','1','1','105','10',''),
('14818','sql','1184','9','chp_nom_parametre','c','4','2','107','123','8','0','1','0','105','44',''),
('14819','sql','1184','10',':n_chp_nom_parametre','c','3','0','127','146','7','0','2','0','105','44',''),
('14820','sql','1184','11','affecte','f','2','0','156','162','2','2','3','2','163','15',''),
('14821','sql','1184','12','champ','f','3','0','164','168','11','1','1','1','169','14',''),
('14822','sql','1184','13','che_pour_admin_parametre','c','4','2','171','194','12','0','1','0','169','44',''),
('14823','sql','1184','14',':n_che_pour_admin_parametre','c','3','0','198','224','11','0','2','0','169','44',''),
('14824','sql','1184','15','affecte','f','2','0','234','240','2','2','4','2','241','19',''),
('14825','sql','1184','16','champ','f','3','0','242','246','15','1','1','1','247','18',''),
('14826','sql','1184','17','cht_rev_parametre','c','4','2','249','265','16','0','1','0','247','44',''),
('14827','sql','1184','18',':n_cht_rev_parametre','c','3','0','269','288','15','0','2','0','247','44',''),
('14828','sql','1184','19','affecte','f','2','0','298','304','2','2','5','2','305','23',''),
('14829','sql','1184','20','champ','f','3','0','306','310','19','1','1','1','311','22',''),
('14830','sql','1184','21','cht_commentaire_parametre','c','4','2','313','337','20','0','1','0','311','44',''),
('14831','sql','1184','22',':n_cht_commentaire_parametre','c','3','0','341','368','19','0','2','0','311','44',''),
('14832','sql','1184','23','affecte','f','2','0','378','384','2','2','6','2','385','27',''),
('14833','sql','1184','24','champ','f','3','0','386','390','23','1','1','1','391','26',''),
('14834','sql','1184','25','chd__dtc_parametre','c','4','2','393','410','24','0','1','0','391','44',''),
('14835','sql','1184','26',':n_chd__dtc_parametre','c','3','0','414','434','23','0','2','0','391','44',''),
('14836','sql','1184','27','affecte','f','2','0','444','450','2','2','7','2','451','31',''),
('14837','sql','1184','28','champ','f','3','0','452','456','27','1','1','1','457','30',''),
('14838','sql','1184','29','chd__dtm_parametre','c','4','2','459','476','28','0','1','0','457','44',''),
('14839','sql','1184','30',':n_chd__dtm_parametre','c','3','0','480','500','27','0','2','0','457','44',''),
('14840','sql','1184','31','affecte','f','2','0','510','516','2','2','8','2','517','44',''),
('14841','sql','1184','32','champ','f','3','0','518','522','31','1','1','1','523','34',''),
('14842','sql','1184','33','che__nur_parametre','c','4','2','525','542','32','0','1','0','523','44',''),
('14843','sql','1184','34',':n_che__nur_parametre','c','3','0','546','566','31','0','2','0','523','44',''),
('14844','sql','1184','35','provenance','f','1','0','578','587','1','1','2','5','588','44',''),
('14845','sql','1184','36','table_reference','f','2','0','596','610','35','1','1','4','611','44',''),
('14846','sql','1184','37','source','f','3','0','622','627','36','1','1','3','628','44',''),
('14847','sql','1184','38','nom_de_la_table','f','4','0','629','643','37','3','1','2','644','44',''),
('14848','sql','1184','39','tbl_parametres','c','5','0','645','658','38','0','1','0','644','40',''),
('14849','sql','1184','40','alias','f','5','0','660','664','38','1','2','1','665','42',''),
('14850','sql','1184','41','T0','c','6','0','666','667','40','0','1','0','665','44',''),
('14851','sql','1184','42','base','f','5','0','670','673','38','1','3','1','674','44',''),
('14852','sql','1184','43','b1','c','6','0','675','676','42','0','1','0','674','44',''),
('14853','sql','1183','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14854','sql','1183','1','insérer','f','0','0','0','6','0','2','1','6','7','38',''),
('14855','sql','1183','2','valeurs','f','1','0','12','18','1','7','1','3','19','31',''),
('14856','sql','1183','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('14857','sql','1183','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('14858','sql','1183','5','chp_cle_parametre','c','4','2','42','58','4','0','1','0','40','38',''),
('14859','sql','1183','6',':chp_cle_parametre','c','3','0','62','79','3','0','2','0','40','38',''),
('14860','sql','1183','7','affecte','f','2','0','89','95','2','2','2','2','96','11',''),
('14861','sql','1183','8','champ','f','3','0','97','101','7','1','1','1','102','10',''),
('14862','sql','1183','9','chp_nom_parametre','c','4','2','104','120','8','0','1','0','102','38',''),
('14863','sql','1183','10',':chp_nom_parametre','c','3','0','124','141','7','0','2','0','102','38',''),
('14864','sql','1183','11','affecte','f','2','0','151','157','2','2','3','2','158','15',''),
('14865','sql','1183','12','champ','f','3','0','159','163','11','1','1','1','164','14',''),
('14866','sql','1183','13','che_pour_admin_parametre','c','4','2','166','189','12','0','1','0','164','38',''),
('14867','sql','1183','14',':che_pour_admin_parametre','c','3','0','193','217','11','0','2','0','164','38',''),
('14868','sql','1183','15','affecte','f','2','0','227','233','2','2','4','2','234','19',''),
('14869','sql','1183','16','champ','f','3','0','235','239','15','1','1','1','240','18',''),
('14870','sql','1183','17','cht_commentaire_parametre','c','4','2','242','266','16','0','1','0','240','38',''),
('14871','sql','1183','18',':cht_commentaire_parametre','c','3','0','270','295','15','0','2','0','240','38',''),
('14872','sql','1183','19','affecte','f','2','0','305','311','2','2','5','2','312','23',''),
('14873','sql','1183','20','champ','f','3','0','313','317','19','1','1','1','318','22',''),
('14874','sql','1183','21','chd__dtc_parametre','c','4','2','320','337','20','0','1','0','318','38',''),
('14875','sql','1183','22',':chd__dtc_parametre','c','3','0','341','359','19','0','2','0','318','38',''),
('14876','sql','1183','23','affecte','f','2','0','369','375','2','2','6','2','376','27',''),
('14877','sql','1183','24','champ','f','3','0','377','381','23','1','1','1','382','26',''),
('14878','sql','1183','25','chd__dtm_parametre','c','4','2','384','401','24','0','1','0','382','38',''),
('14879','sql','1183','26',':chd__dtm_parametre','c','3','0','405','423','23','0','2','0','382','38',''),
('14880','sql','1183','27','affecte','f','2','0','433','439','2','2','7','2','440','38',''),
('14881','sql','1183','28','champ','f','3','0','441','445','27','1','1','1','446','30',''),
('14882','sql','1183','29','che__nur_parametre','c','4','2','448','465','28','0','1','0','446','38',''),
('14883','sql','1183','30',':che__nur_parametre','c','3','0','469','487','27','0','2','0','446','38',''),
('14884','sql','1183','31','provenance','f','1','0','499','508','1','1','2','5','509','38',''),
('14885','sql','1183','32','table_reference','f','2','0','517','531','31','1','1','4','532','38',''),
('14886','sql','1183','33','source','f','3','0','543','548','32','1','1','3','549','38',''),
('14887','sql','1183','34','nom_de_la_table','f','4','0','550','564','33','2','1','2','565','38',''),
('14888','sql','1183','35','tbl_parametres','c','5','0','566','579','34','0','1','0','565','36',''),
('14889','sql','1183','36','base','f','5','0','581','584','34','1','2','1','585','38',''),
('14890','sql','1183','37','b1','c','6','0','586','587','36','0','1','0','585','38',''),
('14891','sql','1182','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14892','sql','1182','1','sélectionner','f','0','0','0','11','0','4','1','6','12','45',''),
('14893','sql','1182','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('14894','sql','1182','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('14895','sql','1182','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('14896','sql','1182','5','chi_id_parametre','c','3','2','44','59','3','0','2','0','37','45',''),
('14897','sql','1182','6','champ','f','2','0','70','74','2','2','2','1','75','9',''),
('14898','sql','1182','7','T0','c','3','2','77','78','6','0','1','0','75','8',''),
('14899','sql','1182','8','chp_cle_parametre','c','3','2','82','98','6','0','2','0','75','45',''),
('14900','sql','1182','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('14901','sql','1182','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('14902','sql','1182','11','chp_nom_parametre','c','3','2','121','137','9','0','2','0','114','45',''),
('14903','sql','1182','12','champ','f','2','0','148','152','2','2','4','1','153','15',''),
('14904','sql','1182','13','T0','c','3','2','155','156','12','0','1','0','153','14',''),
('14905','sql','1182','14','cht_commentaire_parametre','c','3','2','160','184','12','0','2','0','153','45',''),
('14906','sql','1182','15','champ','f','2','0','195','199','2','2','5','1','200','18',''),
('14907','sql','1182','16','T0','c','3','2','202','203','15','0','1','0','200','17',''),
('14908','sql','1182','17','cht_rev_parametre','c','3','2','207','223','15','0','2','0','200','45',''),
('14909','sql','1182','18','champ','f','2','0','234','238','2','2','6','1','239','21',''),
('14910','sql','1182','19','T0','c','3','2','241','242','18','0','1','0','239','20',''),
('14911','sql','1182','20','cht_ordre_parametre','c','3','2','246','264','18','0','2','0','239','45',''),
('14912','sql','1182','21','champ','f','2','0','275','279','2','2','7','1','280','45',''),
('14913','sql','1182','22','T0','c','3','2','282','283','21','0','1','0','280','23',''),
('14914','sql','1182','23','che_pour_admin_parametre','c','3','2','287','310','21','0','2','0','280','45',''),
('14915','sql','1182','24','provenance','f','1','0','323','332','1','1','2','5','333','33',''),
('14916','sql','1182','25','table_reference','f','2','0','341','355','24','1','1','4','356','45',''),
('14917','sql','1182','26','source','f','3','0','367','372','25','1','1','3','373','45',''),
('14918','sql','1182','27','nom_de_la_table','f','4','0','374','388','26','3','1','2','389','45',''),
('14919','sql','1182','28','tbl_parametres','c','5','0','390','403','27','0','1','0','389','29',''),
('14920','sql','1182','29','alias','f','5','0','405','409','27','1','2','1','410','31',''),
('14921','sql','1182','30','T0','c','6','0','411','412','29','0','1','0','410','45',''),
('14922','sql','1182','31','base','f','5','0','415','418','27','1','3','1','419','45',''),
('14923','sql','1182','32','b1','c','6','0','420','421','31','0','1','0','419','45',''),
('14924','sql','1182','33','conditions','f','1','0','443','452','1','1','3','3','453','39',''),
('14925','sql','1182','34','egal','f','2','0','454','457','33','2','1','2','458','45',''),
('14926','sql','1182','35','champ','f','3','0','459','463','34','2','1','1','464','38',''),
('14927','sql','1182','36','T0','c','4','2','466','467','35','0','1','0','464','37',''),
('14928','sql','1182','37','chi_id_parametre','c','4','2','471','486','35','0','2','0','464','45',''),
('14929','sql','1182','38',':T0_chi_id_parametre','c','3','0','490','509','34','0','2','0','464','45',''),
('14930','sql','1182','39','complements','f','1','0','517','527','1','1','4','3','528','45',''),
('14931','sql','1182','40','egal','f','2','0','529','532','39','2','1','2','533','45',''),
('14932','sql','1182','41','champ','f','3','0','534','538','40','2','1','1','539','44',''),
('14933','sql','1182','42','T0','c','4','2','541','542','41','0','1','0','539','43',''),
('14934','sql','1182','43','chi_id_parametre','c','4','2','546','561','41','0','2','0','539','45',''),
('14935','sql','1182','44',':T0_chi_id_parametre','c','3','0','565','584','40','0','2','0','539','45',''),
('14936','sql','1181','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('14937','sql','1181','1','sélectionner','f','0','0','0','11','0','4','1','6','12','72',''),
('14938','sql','1181','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('14939','sql','1181','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('14940','sql','1181','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('14941','sql','1181','5','chi_id_parametre','c','3','2','44','59','3','0','2','0','37','72',''),
('14942','sql','1181','6','champ','f','2','0','70','74','2','2','2','1','75','9',''),
('14943','sql','1181','7','T0','c','3','2','77','78','6','0','1','0','75','8',''),
('14944','sql','1181','8','chp_cle_parametre','c','3','2','82','98','6','0','2','0','75','72',''),
('14945','sql','1181','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('14946','sql','1181','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('14947','sql','1181','11','chp_nom_parametre','c','3','2','121','137','9','0','2','0','114','72',''),
('14948','sql','1181','12','champ','f','2','0','148','152','2','2','4','1','153','15',''),
('14949','sql','1181','13','T0','c','3','2','155','156','12','0','1','0','153','14',''),
('14950','sql','1181','14','che_pour_admin_parametre','c','3','2','160','183','12','0','2','0','153','72',''),
('14951','sql','1181','15','champ','f','2','0','194','198','2','2','5','1','199','18',''),
('14952','sql','1181','16','T0','c','3','2','201','202','15','0','1','0','199','17',''),
('14953','sql','1181','17','cht_commentaire_parametre','c','3','2','206','230','15','0','2','0','199','72',''),
('14954','sql','1181','18','champ','f','2','0','241','245','2','2','6','1','246','21',''),
('14955','sql','1181','19','T0','c','3','2','248','249','18','0','1','0','246','20',''),
('14956','sql','1181','20','cht_rev_parametre','c','3','2','253','269','18','0','2','0','246','72',''),
('14957','sql','1181','21','champ','f','2','0','280','284','2','2','7','1','285','72',''),
('14958','sql','1181','22','T0','c','3','2','287','288','21','0','1','0','285','23',''),
('14959','sql','1181','23','cht_ordre_parametre','c','3','2','292','310','21','0','2','0','285','72',''),
('14960','sql','1181','24','provenance','f','1','0','323','332','1','1','2','5','333','33',''),
('14961','sql','1181','25','table_reference','f','2','0','341','355','24','1','1','4','356','72',''),
('14962','sql','1181','26','source','f','3','0','367','372','25','1','1','3','373','72',''),
('14963','sql','1181','27','nom_de_la_table','f','4','0','374','388','26','3','1','2','389','72',''),
('14964','sql','1181','28','tbl_parametres','c','5','0','390','403','27','0','1','0','389','29',''),
('14965','sql','1181','29','alias','f','5','0','405','409','27','1','2','1','410','31',''),
('14966','sql','1181','30','T0','c','6','0','411','412','29','0','1','0','410','72',''),
('14967','sql','1181','31','base','f','5','0','415','418','27','1','3','1','419','72',''),
('14968','sql','1181','32','b1','c','6','0','420','421','31','0','1','0','419','72',''),
('14969','sql','1181','33','conditions','f','1','0','443','452','1','1','3','4','453','60',''),
('14970','sql','1181','34','et','f','2','0','461','462','33','5','1','3','463','72',''),
('14971','sql','1181','35','comme','f','3','0','474','478','34','2','1','2','479','40',''),
('14972','sql','1181','36','champ','f','4','0','480','484','35','2','1','1','485','39',''),
('14973','sql','1181','37','T0','c','5','2','487','488','36','0','1','0','485','38',''),
('14974','sql','1181','38','chp_cle_parametre','c','5','2','492','508','36','0','2','0','485','72',''),
('14975','sql','1181','39',':T0_chp_cle_parametre','c','4','0','512','532','35','0','2','0','485','72',''),
('14976','sql','1181','40','egal','f','3','0','545','548','34','2','2','2','549','45',''),
('14977','sql','1181','41','champ','f','4','0','550','554','40','2','1','1','555','44',''),
('14978','sql','1181','42','T0','c','5','2','557','558','41','0','1','0','555','43',''),
('14979','sql','1181','43','chi_id_parametre','c','5','2','562','577','41','0','2','0','555','72',''),
('14980','sql','1181','44',':T0_chi_id_parametre','c','4','0','581','600','40','0','2','0','555','72',''),
('14981','sql','1181','45','comme','f','3','0','613','617','34','2','3','2','618','50',''),
('14982','sql','1181','46','champ','f','4','0','619','623','45','2','1','1','624','49',''),
('14983','sql','1181','47','T0','c','5','2','626','627','46','0','1','0','624','48',''),
('14984','sql','1181','48','chp_nom_parametre','c','5','2','631','647','46','0','2','0','624','72',''),
('14985','sql','1181','49',':T0_chp_nom_parametre','c','4','0','651','671','45','0','2','0','624','72',''),
('14986','sql','1181','50','egal','f','3','0','684','687','34','2','4','2','688','55',''),
('14987','sql','1181','51','champ','f','4','0','689','693','50','2','1','1','694','54',''),
('14988','sql','1181','52','T0','c','5','2','696','697','51','0','1','0','694','53',''),
('14989','sql','1181','53','che_pour_admin_parametre','c','5','2','701','724','51','0','2','0','694','72',''),
('14990','sql','1181','54',':T0_che_pour_admin_parametre','c','4','0','728','755','50','0','2','0','694','72',''),
('14991','sql','1181','55','comme','f','3','0','768','772','34','2','5','2','773','72',''),
('14992','sql','1181','56','champ','f','4','0','774','778','55','2','1','1','779','59',''),
('14993','sql','1181','57','T0','c','5','2','781','782','56','0','1','0','779','58',''),
('14994','sql','1181','58','cht_rev_parametre','c','5','2','786','802','56','0','2','0','779','72',''),
('14995','sql','1181','59',':T0_cht_rev_parametre','c','4','0','806','826','55','0','2','0','779','72',''),
('14996','sql','1181','60','complements','f','1','0','846','856','1','2','4','4','857','72',''),
('14997','sql','1181','61','trier_par','f','2','0','865','873','60','1','1','3','874','67',''),
('14998','sql','1181','62','','f','3','0','865','873','61','2','1','2','875','72',''),
('14999','sql','1181','63','champ','f','4','0','876','880','62','2','1','1','881','66',''),
('15000','sql','1181','64','T0','c','5','2','883','884','63','0','1','0','881','65',''),
('15001','sql','1181','65','chi_id_parametre','c','5','2','888','903','63','0','2','0','881','72',''),
('15002','sql','1181','66','décroissant','f','4','0','907','917','62','0','2','0','918','72',''),
('15003','sql','1181','67','limité_à','f','2','0','930','937','60','2','2','2','938','72',''),
('15004','sql','1181','68','quantité','f','3','0','939','946','67','1','1','1','947','70',''),
('15005','sql','1181','69',':quantitee','c','4','0','948','957','68','0','1','0','947','72',''),
('15006','sql','1181','70','début','f','3','0','960','964','67','1','2','1','965','72',''),
('15007','sql','1181','71',':debut','c','4','0','966','971','70','0','1','0','965','72',''),
('15008','sql','1164','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15009','sql','1164','1','sélectionner','f','0','0','0','11','0','3','1','6','12','90',''),
('15010','sql','1164','2','valeurs','f','1','0','17','23','1','13','1','2','24','42',''),
('15011','sql','1164','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15012','sql','1164','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('15013','sql','1164','5','cht_libelle_menu','c','3','2','44','59','3','0','2','0','37','90',''),
('15014','sql','1164','6','champ','f','2','0','70','74','2','2','2','1','75','9',''),
('15015','sql','1164','7','T0','c','3','2','77','78','6','0','1','0','75','8',''),
('15016','sql','1164','8','chp_titre_menu','c','3','2','82','95','6','0','2','0','75','90',''),
('15017','sql','1164','9','champ','f','2','0','106','110','2','2','3','1','111','12',''),
('15018','sql','1164','10','T0','c','3','2','113','114','9','0','1','0','111','11',''),
('15019','sql','1164','11','chp_methode_menu','c','3','2','118','133','9','0','2','0','111','90',''),
('15020','sql','1164','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('15021','sql','1164','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('15022','sql','1164','14','chi_id_menu','c','3','2','156','166','12','0','2','0','149','90',''),
('15023','sql','1164','15','champ','f','2','0','177','181','2','2','5','1','182','18',''),
('15024','sql','1164','16','T0','c','3','2','184','185','15','0','1','0','182','17',''),
('15025','sql','1164','17','cht_initialisation_menu','c','3','2','189','211','15','0','2','0','182','90',''),
('15026','sql','1164','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('15027','sql','1164','19','T1','c','3','2','229','230','18','0','1','0','227','20',''),
('15028','sql','1164','20','chx_source_autorisation','c','3','2','234','256','18','0','2','0','227','90',''),
('15029','sql','1164','21','champ','f','2','0','267','271','2','2','7','1','272','24',''),
('15030','sql','1164','22','T2','c','3','2','274','275','21','0','1','0','272','23',''),
('15031','sql','1164','23','chp_nom_source','c','3','2','279','292','21','0','2','0','272','90',''),
('15032','sql','1164','24','champ','f','2','0','303','307','2','2','8','1','308','27',''),
('15033','sql','1164','25','T0','c','3','2','310','311','24','0','1','0','308','26',''),
('15034','sql','1164','26','cht_condition_menu','c','3','2','315','332','24','0','2','0','308','90',''),
('15035','sql','1164','27','champ','f','2','0','343','347','2','2','9','1','348','30',''),
('15036','sql','1164','28','T0','c','3','2','350','351','27','0','1','0','348','29',''),
('15037','sql','1164','29','cht_condition_js_menu','c','3','2','355','375','27','0','2','0','348','90',''),
('15038','sql','1164','30','champ','f','2','0','386','390','2','2','10','1','391','33',''),
('15039','sql','1164','31','T0','c','3','2','393','394','30','0','1','0','391','32',''),
('15040','sql','1164','32','chx_autorisation_menu','c','3','2','398','418','30','0','2','0','391','90',''),
('15041','sql','1164','33','champ','f','2','0','429','433','2','2','11','1','434','36',''),
('15042','sql','1164','34','T2','c','3','2','436','437','33','0','1','0','434','35',''),
('15043','sql','1164','35','cht_condition_js_source','c','3','2','441','463','33','0','2','0','434','90',''),
('15044','sql','1164','36','champ','f','2','0','474','478','2','2','12','1','479','39',''),
('15045','sql','1164','37','T2','c','3','2','481','482','36','0','1','0','479','38',''),
('15046','sql','1164','38','cht_notification_ko_source','c','3','2','486','511','36','0','2','0','479','90',''),
('15047','sql','1164','39','champ','f','2','0','522','526','2','2','13','1','527','90',''),
('15048','sql','1164','40','T0','c','3','2','529','530','39','0','1','0','527','41',''),
('15049','sql','1164','41','cht_condition_js_menu','c','3','2','534','554','39','0','2','0','527','90',''),
('15050','sql','1164','42','provenance','f','1','0','567','576','1','3','2','5','577','83',''),
('15051','sql','1164','43','table_reference','f','2','0','585','599','42','1','1','4','600','51',''),
('15052','sql','1164','44','source','f','3','0','611','616','43','1','1','3','617','90',''),
('15053','sql','1164','45','nom_de_la_table','f','4','0','618','632','44','3','1','2','633','90',''),
('15054','sql','1164','46','tbl_menus','c','5','0','634','642','45','0','1','0','633','47',''),
('15055','sql','1164','47','alias','f','5','0','644','648','45','1','2','1','649','49',''),
('15056','sql','1164','48','T0','c','6','0','650','651','47','0','1','0','649','90',''),
('15057','sql','1164','49','base','f','5','0','654','657','45','1','3','1','658','90',''),
('15058','sql','1164','50','b1','c','6','0','659','660','49','0','1','0','658','90',''),
('15059','sql','1164','51','jointure_gauche','f','2','0','680','694','42','2','2','4','695','67',''),
('15060','sql','1164','52','source','f','3','0','706','711','51','1','1','3','712','59',''),
('15061','sql','1164','53','nom_de_la_table','f','4','0','713','727','52','3','1','2','728','90',''),
('15062','sql','1164','54','tbl_autorisations','c','5','0','729','745','53','0','1','0','728','55',''),
('15063','sql','1164','55','alias','f','5','0','747','751','53','1','2','1','752','57',''),
('15064','sql','1164','56','T1','c','6','0','753','754','55','0','1','0','752','90',''),
('15065','sql','1164','57','base','f','5','0','757','760','53','1','3','1','761','90',''),
('15066','sql','1164','58','b1','c','6','0','762','763','57','0','1','0','761','90',''),
('15067','sql','1164','59','contrainte','f','3','0','778','787','51','1','2','3','788','90',''),
('15068','sql','1164','60','egal','f','4','0','789','792','59','2','1','2','793','90',''),
('15069','sql','1164','61','champ','f','5','0','794','798','60','2','1','1','799','64',''),
('15070','sql','1164','62','T1','c','6','0','800','801','61','0','1','0','799','63',''),
('15071','sql','1164','63','chi_id_autorisation','c','6','0','803','821','61','0','2','0','799','90',''),
('15072','sql','1164','64','champ','f','5','0','824','828','60','2','2','1','829','90',''),
('15073','sql','1164','65','T0','c','6','0','830','831','64','0','1','0','829','66',''),
('15074','sql','1164','66','chx_autorisation_menu','c','6','0','833','853','64','0','2','0','829','90',''),
('15075','sql','1164','67','jointure_gauche','f','2','0','873','887','42','2','3','4','888','90',''),
('15076','sql','1164','68','source','f','3','0','899','904','67','1','1','3','905','75',''),
('15077','sql','1164','69','nom_de_la_table','f','4','0','906','920','68','3','1','2','921','90',''),
('15078','sql','1164','70','tbl_sources','c','5','0','922','932','69','0','1','0','921','71',''),
('15079','sql','1164','71','alias','f','5','0','934','938','69','1','2','1','939','73',''),
('15080','sql','1164','72','T2','c','6','0','940','941','71','0','1','0','939','90',''),
('15081','sql','1164','73','base','f','5','0','944','947','69','1','3','1','948','90',''),
('15082','sql','1164','74','b1','c','6','0','949','950','73','0','1','0','948','90',''),
('15083','sql','1164','75','contrainte','f','3','0','965','974','67','1','2','3','975','90',''),
('15084','sql','1164','76','egal','f','4','0','976','979','75','2','1','2','980','90',''),
('15085','sql','1164','77','champ','f','5','0','981','985','76','2','1','1','986','80',''),
('15086','sql','1164','78','T2','c','6','0','987','988','77','0','1','0','986','79',''),
('15087','sql','1164','79','chi_id_source','c','6','0','990','1002','77','0','2','0','986','90',''),
('15088','sql','1164','80','champ','f','5','0','1005','1009','76','2','2','1','1010','90',''),
('15089','sql','1164','81','T1','c','6','0','1011','1012','80','0','1','0','1010','82',''),
('15090','sql','1164','82','chx_source_autorisation','c','6','0','1014','1036','80','0','2','0','1010','90',''),
('15091','sql','1164','83','conditions','f','1','0','1058','1067','1','1','3','4','1068','90',''),
('15092','sql','1164','84','et','f','2','0','1076','1077','83','1','1','3','1078','90',''),
('15093','sql','1164','85','egal','f','3','0','1079','1082','84','2','1','2','1083','90',''),
('15094','sql','1164','86','champ','f','4','0','1084','1088','85','2','1','1','1089','89',''),
('15095','sql','1164','87','T1','c','5','2','1091','1092','86','0','1','0','1089','88',''),
('15096','sql','1164','88','chx_acces_autorisation','c','5','2','1096','1117','86','0','2','0','1089','90',''),
('15097','sql','1164','89','0','c','4','0','1121','1121','85','0','2','0','1089','90',''),
('15098','sql','1162','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15099','sql','1162','1','sélectionner','f','0','0','0','11','0','3','1','6','12','21',''),
('15100','sql','1162','2','valeurs','f','1','0','17','23','1','1','1','2','24','6',''),
('15101','sql','1162','3','champ','f','2','0','25','29','2','2','1','1','30','21',''),
('15102','sql','1162','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('15103','sql','1162','5','chi_id_acces','c','3','2','37','48','3','0','2','0','30','21',''),
('15104','sql','1162','6','provenance','f','1','0','57','66','1','1','2','5','67','15',''),
('15105','sql','1162','7','table_reference','f','2','0','75','89','6','1','1','4','90','21',''),
('15106','sql','1162','8','source','f','3','0','101','106','7','1','1','3','107','21',''),
('15107','sql','1162','9','nom_de_la_table','f','4','0','108','122','8','3','1','2','123','21',''),
('15108','sql','1162','10','tbl_acces','c','5','0','124','132','9','0','1','0','123','11',''),
('15109','sql','1162','11','alias','f','5','0','134','138','9','1','2','1','139','13',''),
('15110','sql','1162','12','T0','c','6','0','140','141','11','0','1','0','139','21',''),
('15111','sql','1162','13','base','f','5','0','144','147','9','1','3','1','148','21',''),
('15112','sql','1162','14','b1','c','6','0','149','150','13','0','1','0','148','21',''),
('15113','sql','1162','15','conditions','f','1','0','172','181','1','1','3','3','182','21',''),
('15114','sql','1162','16','supegal','f','2','0','183','189','15','2','1','2','190','21',''),
('15115','sql','1162','17','champ','f','3','0','191','195','16','2','1','1','196','20',''),
('15116','sql','1162','18','T0','c','4','2','198','199','17','0','1','0','196','19',''),
('15117','sql','1162','19','chi_id_acces','c','4','2','203','214','17','0','2','0','196','21',''),
('15118','sql','1162','20','1','c','3','0','218','218','16','0','2','0','196','21',''),
('15119','sql','1159','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15120','sql','1159','1','modifier','f','0','0','0','7','0','3','1','6','8','33',''),
('15121','sql','1159','2','valeurs','f','1','0','13','19','1','1','1','3','20','9',''),
('15122','sql','1159','3','affecte','f','2','0','21','27','2','2','1','2','28','33',''),
('15123','sql','1159','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('15124','sql','1159','5','che_priorite_tache','c','4','2','36','53','4','0','1','0','34','33',''),
('15125','sql','1159','6','plus','f','3','0','57','60','3','2','2','1','61','33',''),
('15126','sql','1159','7','che_priorite_tache','c','4','0','62','79','6','0','1','0','61','8',''),
('15127','sql','1159','8','1','c','4','0','81','81','6','0','2','0','61','33',''),
('15128','sql','1159','9','provenance','f','1','0','90','99','1','1','2','5','100','18',''),
('15129','sql','1159','10','table_reference','f','2','0','108','122','9','1','1','4','123','33',''),
('15130','sql','1159','11','source','f','3','0','134','139','10','1','1','3','140','33',''),
('15131','sql','1159','12','nom_de_la_table','f','4','0','141','155','11','3','1','2','156','33',''),
('15132','sql','1159','13','tbl_taches','c','5','0','157','166','12','0','1','0','156','14',''),
('15133','sql','1159','14','alias','f','5','0','168','172','12','1','2','1','173','16',''),
('15134','sql','1159','15','T0','c','6','0','174','175','14','0','1','0','173','33',''),
('15135','sql','1159','16','base','f','5','0','178','181','12','1','3','1','182','33',''),
('15136','sql','1159','17','b1','c','6','0','183','184','16','0','1','0','182','33',''),
('15137','sql','1159','18','conditions','f','1','0','206','215','1','1','3','4','216','33',''),
('15138','sql','1159','19','et','f','2','0','224','225','18','3','1','3','226','33',''),
('15139','sql','1159','20','egal','f','3','0','227','230','19','2','1','2','231','24',''),
('15140','sql','1159','21','champ','f','4','0','232','236','20','1','1','1','237','23',''),
('15141','sql','1159','22','chi_id_tache','c','5','2','239','250','21','0','1','0','237','33',''),
('15142','sql','1159','23',':c_chi_id_tache','c','4','0','254','268','20','0','2','0','237','33',''),
('15143','sql','1159','24','egal','f','3','0','271','274','19','2','2','2','275','29',''),
('15144','sql','1159','25','champ','f','4','0','276','280','24','1','1','1','281','27',''),
('15145','sql','1159','26','chx_utilisateur_tache','c','5','2','283','303','25','0','1','0','281','33',''),
('15146','sql','1159','27','session','f','4','0','307','313','24','1','2','1','314','33',''),
('15147','sql','1159','28','chi_id_utilisateur','c','5','0','315','332','27','0','1','0','314','33',''),
('15148','sql','1159','29','inf','f','3','0','336','338','19','2','3','2','339','33',''),
('15149','sql','1159','30','champ','f','4','0','340','344','29','1','1','1','345','32',''),
('15150','sql','1159','31','che_priorite_tache','c','5','2','347','364','30','0','1','0','345','33',''),
('15151','sql','1159','32','99','c','4','0','368','369','29','0','2','0','345','33',''),
('15152','sql','1158','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15153','sql','1158','1','modifier','f','0','0','0','7','0','3','1','6','8','32',''),
('15154','sql','1158','2','valeurs','f','1','0','13','19','1','1','1','3','20','9',''),
('15155','sql','1158','3','affecte','f','2','0','21','27','2','2','1','2','28','32',''),
('15156','sql','1158','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('15157','sql','1158','5','che_priorite_tache','c','4','2','36','53','4','0','1','0','34','32',''),
('15158','sql','1158','6','moins','f','3','0','57','61','3','2','2','1','62','32',''),
('15159','sql','1158','7','che_priorite_tache','c','4','0','63','80','6','0','1','0','62','8',''),
('15160','sql','1158','8','1','c','4','0','82','82','6','0','2','0','62','32',''),
('15161','sql','1158','9','provenance','f','1','0','91','100','1','1','2','5','101','18',''),
('15162','sql','1158','10','table_reference','f','2','0','109','123','9','1','1','4','124','32',''),
('15163','sql','1158','11','source','f','3','0','135','140','10','1','1','3','141','32',''),
('15164','sql','1158','12','nom_de_la_table','f','4','0','142','156','11','3','1','2','157','32',''),
('15165','sql','1158','13','tbl_taches','c','5','0','158','167','12','0','1','0','157','14',''),
('15166','sql','1158','14','alias','f','5','0','169','173','12','1','2','1','174','16',''),
('15167','sql','1158','15','T0','c','6','0','175','176','14','0','1','0','174','32',''),
('15168','sql','1158','16','base','f','5','0','179','182','12','1','3','1','183','32',''),
('15169','sql','1158','17','b1','c','6','0','184','185','16','0','1','0','183','32',''),
('15170','sql','1158','18','conditions','f','1','0','207','216','1','1','3','4','217','32',''),
('15171','sql','1158','19','et','f','2','0','225','226','18','3','1','3','227','32',''),
('15172','sql','1158','20','egal','f','3','0','228','231','19','2','1','2','232','24',''),
('15173','sql','1158','21','champ','f','4','0','233','237','20','1','1','1','238','23',''),
('15174','sql','1158','22','chi_id_tache','c','5','2','240','251','21','0','1','0','238','32',''),
('15175','sql','1158','23',':c_chi_id_tache','c','4','0','255','269','20','0','2','0','238','32',''),
('15176','sql','1158','24','egal','f','3','0','272','275','19','2','2','2','276','28',''),
('15177','sql','1158','25','champ','f','4','0','277','281','24','1','1','1','282','27',''),
('15178','sql','1158','26','chx_utilisateur_tache','c','5','2','284','304','25','0','1','0','282','32',''),
('15179','sql','1158','27',':c_chx_utilisateur_tache','c','4','0','308','331','24','0','2','0','282','32',''),
('15180','sql','1158','28','supegal','f','3','0','334','340','19','2','3','2','341','32',''),
('15181','sql','1158','29','champ','f','4','0','342','346','28','1','1','1','347','31',''),
('15182','sql','1158','30','che_priorite_tache','c','5','2','349','366','29','0','1','0','347','32',''),
('15183','sql','1158','31','1','c','4','0','370','370','28','0','2','0','347','32',''),
('15184','sql','1157','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15185','sql','1157','1','modifier','f','0','0','0','7','0','3','1','6','8','30',''),
('15186','sql','1157','2','valeurs','f','1','0','13','19','1','2','1','3','20','11',''),
('15187','sql','1157','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('15188','sql','1157','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('15189','sql','1157','5','che_priorite_tache','c','4','2','36','53','4','0','1','0','34','30',''),
('15190','sql','1157','6',':n_che_priorite_tache','c','3','0','57','77','3','0','2','0','34','30',''),
('15191','sql','1157','7','affecte','f','2','0','80','86','2','2','2','2','87','30',''),
('15192','sql','1157','8','champ','f','3','0','88','92','7','1','1','1','93','10',''),
('15193','sql','1157','9','chd__dtm_tache','c','4','2','95','108','8','0','1','0','93','30',''),
('15194','sql','1157','10',':n_chd__dtm_tache','c','3','0','112','128','7','0','2','0','93','30',''),
('15195','sql','1157','11','provenance','f','1','0','136','145','1','1','2','5','146','20',''),
('15196','sql','1157','12','table_reference','f','2','0','154','168','11','1','1','4','169','30',''),
('15197','sql','1157','13','source','f','3','0','180','185','12','1','1','3','186','30',''),
('15198','sql','1157','14','nom_de_la_table','f','4','0','187','201','13','3','1','2','202','30',''),
('15199','sql','1157','15','tbl_taches','c','5','0','203','212','14','0','1','0','202','16',''),
('15200','sql','1157','16','alias','f','5','0','214','218','14','1','2','1','219','18',''),
('15201','sql','1157','17','T0','c','6','0','220','221','16','0','1','0','219','30',''),
('15202','sql','1157','18','base','f','5','0','224','227','14','1','3','1','228','30',''),
('15203','sql','1157','19','b1','c','6','0','229','230','18','0','1','0','228','30',''),
('15204','sql','1157','20','conditions','f','1','0','252','261','1','1','3','4','262','30',''),
('15205','sql','1157','21','et','f','2','0','270','271','20','2','1','3','272','30',''),
('15206','sql','1157','22','egal','f','3','0','273','276','21','2','1','2','277','26',''),
('15207','sql','1157','23','champ','f','4','0','278','282','22','1','1','1','283','25',''),
('15208','sql','1157','24','chi_id_tache','c','5','2','285','296','23','0','1','0','283','30',''),
('15209','sql','1157','25',':c_chi_id_tache','c','4','0','300','314','22','0','2','0','283','30',''),
('15210','sql','1157','26','egal','f','3','0','317','320','21','2','2','2','321','30',''),
('15211','sql','1157','27','champ','f','4','0','322','326','26','1','1','1','327','29',''),
('15212','sql','1157','28','chx_utilisateur_tache','c','5','2','329','349','27','0','1','0','327','30',''),
('15213','sql','1157','29',':c_chx_utilisateur_tache','c','4','0','353','376','26','0','2','0','327','30',''),
('15214','sql','1156','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15215','sql','1156','1','modifier','f','0','0','0','7','0','3','1','6','8','27',''),
('15216','sql','1156','2','valeurs','f','1','0','13','19','1','1','1','3','20','7',''),
('15217','sql','1156','3','affecte','f','2','0','21','27','2','2','1','2','28','27',''),
('15218','sql','1156','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('15219','sql','1156','5','che_priorite_tache','c','4','0','35','52','4','0','1','0','34','27',''),
('15220','sql','1156','6',':n_che_priorite_tache','c','3','0','55','75','3','0','2','0','34','27',''),
('15221','sql','1156','7','provenance','f','1','0','83','92','1','1','2','5','93','16',''),
('15222','sql','1156','8','table_reference','f','2','0','101','115','7','1','1','4','116','27',''),
('15223','sql','1156','9','source','f','3','0','127','132','8','1','1','3','133','27',''),
('15224','sql','1156','10','nom_de_la_table','f','4','0','134','148','9','3','1','2','149','27',''),
('15225','sql','1156','11','tbl_taches','c','5','0','150','159','10','0','1','0','149','12',''),
('15226','sql','1156','12','alias','f','5','0','161','165','10','1','2','1','166','14',''),
('15227','sql','1156','13','T0','c','6','0','167','168','12','0','1','0','166','27',''),
('15228','sql','1156','14','base','f','5','0','171','174','10','1','3','1','175','27',''),
('15229','sql','1156','15','b1','c','6','0','176','177','14','0','1','0','175','27',''),
('15230','sql','1156','16','conditions','f','1','0','199','208','1','1','3','4','209','27',''),
('15231','sql','1156','17','et','f','2','0','217','218','16','2','1','3','219','27',''),
('15232','sql','1156','18','egal','f','3','0','220','223','17','2','1','2','224','22',''),
('15233','sql','1156','19','champ','f','4','0','225','229','18','1','1','1','230','21',''),
('15234','sql','1156','20','chi_id_tache','c','5','0','231','242','19','0','1','0','230','27',''),
('15235','sql','1156','21',':c_chi_id_tache','c','4','0','245','259','18','0','2','0','230','27',''),
('15236','sql','1156','22','egal','f','3','0','262','265','17','2','2','2','266','27',''),
('15237','sql','1156','23','champ','f','4','0','267','271','22','1','1','1','272','25',''),
('15238','sql','1156','24','chx_utilisateur_tache','c','5','0','273','293','23','0','1','0','272','27',''),
('15239','sql','1156','25','session','f','4','0','296','302','22','1','2','1','303','27',''),
('15240','sql','1156','26','chi_id_utilisateur','c','5','0','304','321','25','0','1','0','303','27',''),
('15241','sql','1155','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15242','sql','1155','1','sélectionner','f','0','0','0','11','0','4','1','6','12','63',''),
('15243','sql','1155','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('15244','sql','1155','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15245','sql','1155','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('15246','sql','1155','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','63',''),
('15247','sql','1155','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('15248','sql','1155','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('15249','sql','1155','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','63',''),
('15250','sql','1155','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('15251','sql','1155','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('15252','sql','1155','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','63',''),
('15253','sql','1155','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('15254','sql','1155','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('15255','sql','1155','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','63',''),
('15256','sql','1155','15','champ','f','2','0','186','190','2','2','5','1','191','63',''),
('15257','sql','1155','16','T1','c','3','2','193','194','15','0','1','0','191','17',''),
('15258','sql','1155','17','chp_nom_de_connexion_utilisateur','c','3','2','198','229','15','0','2','0','191','63',''),
('15259','sql','1155','18','provenance','f','1','0','242','251','1','2','2','5','252','43',''),
('15260','sql','1155','19','table_reference','f','2','0','260','274','18','1','1','4','275','27',''),
('15261','sql','1155','20','source','f','3','0','286','291','19','1','1','3','292','63',''),
('15262','sql','1155','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','63',''),
('15263','sql','1155','22','tbl_taches','c','5','0','309','318','21','0','1','0','308','23',''),
('15264','sql','1155','23','alias','f','5','0','320','324','21','1','2','1','325','25',''),
('15265','sql','1155','24','T0','c','6','0','326','327','23','0','1','0','325','63',''),
('15266','sql','1155','25','base','f','5','0','330','333','21','1','3','1','334','63',''),
('15267','sql','1155','26','b1','c','6','0','335','336','25','0','1','0','334','63',''),
('15268','sql','1155','27','jointure_gauche','f','2','0','356','370','18','2','2','4','371','63',''),
('15269','sql','1155','28','source','f','3','0','382','387','27','1','1','3','388','35',''),
('15270','sql','1155','29','nom_de_la_table','f','4','0','389','403','28','3','1','2','404','63',''),
('15271','sql','1155','30','tbl_utilisateurs','c','5','0','405','420','29','0','1','0','404','31',''),
('15272','sql','1155','31','alias','f','5','0','422','426','29','1','2','1','427','33',''),
('15273','sql','1155','32','T1','c','6','0','428','429','31','0','1','0','427','63',''),
('15274','sql','1155','33','base','f','5','0','432','435','29','1','3','1','436','63',''),
('15275','sql','1155','34','b1','c','6','0','437','438','33','0','1','0','436','63',''),
('15276','sql','1155','35','contrainte','f','3','0','453','462','27','1','2','3','463','63',''),
('15277','sql','1155','36','egal','f','4','0','464','467','35','2','1','2','468','63',''),
('15278','sql','1155','37','champ','f','5','0','469','473','36','2','1','1','474','40',''),
('15279','sql','1155','38','T1','c','6','0','475','476','37','0','1','0','474','39',''),
('15280','sql','1155','39','chi_id_utilisateur','c','6','0','478','495','37','0','2','0','474','63',''),
('15281','sql','1155','40','champ','f','5','0','498','502','36','2','2','1','503','63',''),
('15282','sql','1155','41','T0','c','6','0','504','505','40','0','1','0','503','42',''),
('15283','sql','1155','42','chx_utilisateur_tache','c','6','0','507','527','40','0','2','0','503','63',''),
('15284','sql','1155','43','conditions','f','1','0','549','558','1','1','3','4','559','56',''),
('15285','sql','1155','44','et','f','2','0','567','568','43','2','1','3','569','63',''),
('15286','sql','1155','45','egal','f','3','0','570','573','44','2','1','2','574','51',''),
('15287','sql','1155','46','champ','f','4','0','575','579','45','2','1','1','580','49',''),
('15288','sql','1155','47','T0','c','5','2','582','583','46','0','1','0','580','48',''),
('15289','sql','1155','48','chx_utilisateur_tache','c','5','2','587','607','46','0','2','0','580','63',''),
('15290','sql','1155','49','session','f','4','0','611','617','45','1','2','1','618','63',''),
('15291','sql','1155','50','chi_id_utilisateur','c','5','0','619','636','49','0','1','0','618','63',''),
('15292','sql','1155','51','inf','f','3','0','640','642','44','2','2','2','643','63',''),
('15293','sql','1155','52','champ','f','4','0','644','648','51','2','1','1','649','55',''),
('15294','sql','1155','53','T0','c','5','2','651','652','52','0','1','0','649','54',''),
('15295','sql','1155','54','che_priorite_tache','c','5','2','656','673','52','0','2','0','649','63',''),
('15296','sql','1155','55',':T0_che_priorite_tache','c','4','0','677','698','51','0','2','0','649','63',''),
('15297','sql','1155','56','complements','f','1','0','711','721','1','1','4','4','722','63',''),
('15298','sql','1155','57','trier_par','f','2','0','730','738','56','1','1','3','739','63',''),
('15299','sql','1155','58','','f','3','0','730','738','57','2','1','2','740','63',''),
('15300','sql','1155','59','champ','f','4','0','741','745','58','2','1','1','746','62',''),
('15301','sql','1155','60','T0','c','5','2','748','749','59','0','1','0','746','61',''),
('15302','sql','1155','61','che_priorite_tache','c','5','2','753','770','59','0','2','0','746','63',''),
('15303','sql','1155','62','croissant','f','4','0','774','782','58','0','2','0','783','63',''),
('15304','sql','1154','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15305','sql','1154','1','modifier','f','0','0','0','7','0','4','1','6','8','21',''),
('15306','sql','1154','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('15307','sql','1154','3','1','c','2','0','31','31','2','0','1','0','30','21',''),
('15308','sql','1154','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('15309','sql','1154','5','affecte','f','2','0','46','52','4','2','1','2','53','21',''),
('15310','sql','1154','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('15311','sql','1154','7','cht_parametres_acces','c','4','2','61','80','6','0','1','0','59','21',''),
('15312','sql','1154','8',':n_cht_parametres_acces','c','3','0','84','106','5','0','2','0','59','21',''),
('15313','sql','1154','9','provenance','f','1','0','114','123','1','1','3','5','124','16',''),
('15314','sql','1154','10','table_reference','f','2','0','132','146','9','1','1','4','147','21',''),
('15315','sql','1154','11','source','f','3','0','158','163','10','1','1','3','164','21',''),
('15316','sql','1154','12','nom_de_la_table','f','4','0','165','179','11','2','1','2','180','21',''),
('15317','sql','1154','13','tbl_acces','c','5','0','181','189','12','0','1','0','180','14',''),
('15318','sql','1154','14','base','f','5','0','191','194','12','1','2','1','195','21',''),
('15319','sql','1154','15','b1','c','6','0','196','197','14','0','1','0','195','21',''),
('15320','sql','1154','16','conditions','f','1','0','219','228','1','1','4','3','229','21',''),
('15321','sql','1154','17','egal','f','2','0','230','233','16','2','1','2','234','21',''),
('15322','sql','1154','18','champ','f','3','0','235','239','17','1','1','1','240','20',''),
('15323','sql','1154','19','chi_id_acces','c','4','2','242','253','18','0','1','0','240','21',''),
('15324','sql','1154','20',':c_chi_id_acces','c','3','0','257','271','17','0','2','0','240','21',''),
('15325','sql','1153','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15326','sql','1153','1','sélectionner','f','0','0','0','11','0','3','1','6','12','100',''),
('15327','sql','1153','2','valeurs','f','1','0','17','23','1','11','1','2','24','36',''),
('15328','sql','1153','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15329','sql','1153','4','T1','c','3','2','39','40','3','0','1','0','37','5',''),
('15330','sql','1153','5','chx_source_autorisation','c','3','2','44','66','3','0','2','0','37','100',''),
('15331','sql','1153','6','champ','f','2','0','77','81','2','2','2','1','82','9',''),
('15332','sql','1153','7','T0','c','3','2','84','85','6','0','1','0','82','8',''),
('15333','sql','1153','8','chp_titre_menu','c','3','2','89','102','6','0','2','0','82','100',''),
('15334','sql','1153','9','champ','f','2','0','113','117','2','2','3','1','118','12',''),
('15335','sql','1153','10','T0','c','3','2','120','121','9','0','1','0','118','11',''),
('15336','sql','1153','11','chp_methode_menu','c','3','2','125','140','9','0','2','0','118','100',''),
('15337','sql','1153','12','champ','f','2','0','151','155','2','2','4','1','156','15',''),
('15338','sql','1153','13','T3','c','3','2','158','159','12','0','1','0','156','14',''),
('15339','sql','1153','14','chp_nom_source','c','3','2','163','176','12','0','2','0','156','100',''),
('15340','sql','1153','15','champ','f','2','0','187','191','2','2','5','1','192','18',''),
('15341','sql','1153','16','T0','c','3','2','194','195','15','0','1','0','192','17',''),
('15342','sql','1153','17','cht_libelle_menu','c','3','2','199','214','15','0','2','0','192','100',''),
('15343','sql','1153','18','champ','f','2','0','225','229','2','2','6','1','230','21',''),
('15344','sql','1153','19','T0','c','3','2','232','233','18','0','1','0','230','20',''),
('15345','sql','1153','20','cht_initialisation_menu','c','3','2','237','259','18','0','2','0','230','100',''),
('15346','sql','1153','21','champ','f','2','0','270','274','2','2','7','1','275','24',''),
('15347','sql','1153','22','T0','c','3','2','277','278','21','0','1','0','275','23',''),
('15348','sql','1153','23','chi_id_menu','c','3','2','282','292','21','0','2','0','275','100',''),
('15349','sql','1153','24','champ','f','2','0','303','307','2','2','8','1','308','27',''),
('15350','sql','1153','25','T0','c','3','2','310','311','24','0','1','0','308','26',''),
('15351','sql','1153','26','cht_condition_menu','c','3','2','315','332','24','0','2','0','308','100',''),
('15352','sql','1153','27','champ','f','2','0','343','347','2','2','9','1','348','30',''),
('15353','sql','1153','28','T0','c','3','2','350','351','27','0','1','0','348','29',''),
('15354','sql','1153','29','cht_condition_js_menu','c','3','2','355','375','27','0','2','0','348','100',''),
('15355','sql','1153','30','champ','f','2','0','386','390','2','2','10','1','391','33',''),
('15356','sql','1153','31','T0','c','3','2','393','394','30','0','1','0','391','32',''),
('15357','sql','1153','32','chx_autorisation_menu','c','3','2','398','418','30','0','2','0','391','100',''),
('15358','sql','1153','33','champ','f','2','0','429','433','2','2','11','1','434','100',''),
('15359','sql','1153','34','T3','c','3','2','436','437','33','0','1','0','434','35',''),
('15360','sql','1153','35','cht_condition_js_source','c','3','2','441','463','33','0','2','0','434','100',''),
('15361','sql','1153','36','provenance','f','1','0','476','485','1','4','2','5','486','85',''),
('15362','sql','1153','37','table_reference','f','2','0','494','508','36','1','1','4','509','45',''),
('15363','sql','1153','38','source','f','3','0','520','525','37','1','1','3','526','100',''),
('15364','sql','1153','39','nom_de_la_table','f','4','0','527','541','38','3','1','2','542','100',''),
('15365','sql','1153','40','tbl_menus','c','5','0','543','551','39','0','1','0','542','41',''),
('15366','sql','1153','41','alias','f','5','0','553','557','39','1','2','1','558','43',''),
('15367','sql','1153','42','T0','c','6','0','559','560','41','0','1','0','558','100',''),
('15368','sql','1153','43','base','f','5','0','563','566','39','1','3','1','567','100',''),
('15369','sql','1153','44','b1','c','6','0','568','569','43','0','1','0','567','100',''),
('15370','sql','1153','45','jointure_croisée','f','2','0','589','604','36','1','2','4','605','53',''),
('15371','sql','1153','46','source','f','3','0','616','621','45','1','1','3','622','100',''),
('15372','sql','1153','47','nom_de_la_table','f','4','0','623','637','46','3','1','2','638','100',''),
('15373','sql','1153','48','tbl_autorisations','c','5','0','639','655','47','0','1','0','638','49',''),
('15374','sql','1153','49','alias','f','5','0','657','661','47','1','2','1','662','51',''),
('15375','sql','1153','50','T1','c','6','0','663','664','49','0','1','0','662','100',''),
('15376','sql','1153','51','base','f','5','0','667','670','47','1','3','1','671','100',''),
('15377','sql','1153','52','b1','c','6','0','672','673','51','0','1','0','671','100',''),
('15378','sql','1153','53','jointure_gauche','f','2','0','693','707','36','2','3','4','708','69',''),
('15379','sql','1153','54','source','f','3','0','719','724','53','1','1','3','725','61',''),
('15380','sql','1153','55','nom_de_la_table','f','4','0','726','740','54','3','1','2','741','100',''),
('15381','sql','1153','56','tbl_acces','c','5','0','742','750','55','0','1','0','741','57',''),
('15382','sql','1153','57','alias','f','5','0','752','756','55','1','2','1','757','59',''),
('15383','sql','1153','58','T2','c','6','0','758','759','57','0','1','0','757','100',''),
('15384','sql','1153','59','base','f','5','0','762','765','55','1','3','1','766','100',''),
('15385','sql','1153','60','b1','c','6','0','767','768','59','0','1','0','766','100',''),
('15386','sql','1153','61','contrainte','f','3','0','783','792','53','1','2','3','793','100',''),
('15387','sql','1153','62','egal','f','4','0','794','797','61','2','1','2','798','100',''),
('15388','sql','1153','63','champ','f','5','0','799','803','62','2','1','1','804','66',''),
('15389','sql','1153','64','T2','c','6','0','805','806','63','0','1','0','804','65',''),
('15390','sql','1153','65','chi_id_acces','c','6','0','808','819','63','0','2','0','804','100',''),
('15391','sql','1153','66','champ','f','5','0','822','826','62','2','2','1','827','100',''),
('15392','sql','1153','67','T1','c','6','0','828','829','66','0','1','0','827','68',''),
('15393','sql','1153','68','chx_acces_autorisation','c','6','0','831','852','66','0','2','0','827','100',''),
('15394','sql','1153','69','jointure_gauche','f','2','0','872','886','36','2','4','4','887','100',''),
('15395','sql','1153','70','source','f','3','0','898','903','69','1','1','3','904','77',''),
('15396','sql','1153','71','nom_de_la_table','f','4','0','905','919','70','3','1','2','920','100',''),
('15397','sql','1153','72','tbl_sources','c','5','0','921','931','71','0','1','0','920','73',''),
('15398','sql','1153','73','alias','f','5','0','933','937','71','1','2','1','938','75',''),
('15399','sql','1153','74','T3','c','6','0','939','940','73','0','1','0','938','100',''),
('15400','sql','1153','75','base','f','5','0','943','946','71','1','3','1','947','100',''),
('15401','sql','1153','76','b1','c','6','0','948','949','75','0','1','0','947','100',''),
('15402','sql','1153','77','contrainte','f','3','0','964','973','69','1','2','3','974','100',''),
('15403','sql','1153','78','egal','f','4','0','975','978','77','2','1','2','979','100',''),
('15404','sql','1153','79','champ','f','5','0','980','984','78','2','1','1','985','82',''),
('15405','sql','1153','80','T3','c','6','0','986','987','79','0','1','0','985','81',''),
('15406','sql','1153','81','chi_id_source','c','6','0','989','1001','79','0','2','0','985','100',''),
('15407','sql','1153','82','champ','f','5','0','1004','1008','78','2','2','1','1009','100',''),
('15408','sql','1153','83','T1','c','6','0','1010','1011','82','0','1','0','1009','84',''),
('15409','sql','1153','84','chx_source_autorisation','c','6','0','1013','1035','82','0','2','0','1009','100',''),
('15410','sql','1153','85','conditions','f','1','0','1057','1066','1','1','3','4','1067','100',''),
('15411','sql','1153','86','et','f','2','0','1075','1076','85','3','1','3','1077','100',''),
('15412','sql','1153','87','#','f','3','0','1088','1088','86','0','1','0','1089','88',''),
('15413','sql','1153','88','egal','f','3','0','1102','1105','86','2','2','2','1106','93',''),
('15414','sql','1153','89','champ','f','4','0','1107','1111','88','2','1','1','1112','92',''),
('15415','sql','1153','90','T2','c','5','2','1114','1115','89','0','1','0','1112','91',''),
('15416','sql','1153','91','chi_id_acces','c','5','2','1119','1130','89','0','2','0','1112','100',''),
('15417','sql','1153','92',':T2_chi_id_acces','c','4','0','1134','1149','88','0','2','0','1112','100',''),
('15418','sql','1153','93','egal','f','3','0','1162','1165','86','2','3','2','1166','100',''),
('15419','sql','1153','94','champ','f','4','0','1167','1171','93','2','1','1','1172','97',''),
('15420','sql','1153','95','T1','c','5','0','1173','1174','94','0','1','0','1172','96',''),
('15421','sql','1153','96','chi_id_autorisation','c','5','0','1176','1194','94','0','2','0','1172','100','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 1000 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 2000 (3986) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('15422','sql','1153','97','champ','f','4','0','1197','1201','93','2','2','1','1202','100',''),
('15423','sql','1153','98','T0','c','5','0','1203','1204','97','0','1','0','1202','99',''),
('15424','sql','1153','99','chx_autorisation_menu','c','5','0','1206','1226','97','0','2','0','1202','100',''),
('15425','sql','1152','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15426','sql','1152','1','sélectionner','f','0','0','0','11','0','4','1','6','12','65',''),
('15427','sql','1152','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('15428','sql','1152','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15429','sql','1152','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('15430','sql','1152','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','65',''),
('15431','sql','1152','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('15432','sql','1152','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('15433','sql','1152','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','65',''),
('15434','sql','1152','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('15435','sql','1152','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('15436','sql','1152','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','65',''),
('15437','sql','1152','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('15438','sql','1152','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('15439','sql','1152','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','65',''),
('15440','sql','1152','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('15441','sql','1152','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('15442','sql','1152','17','chp_nom_source','c','3','2','228','241','15','0','2','0','221','65',''),
('15443','sql','1152','18','champ','f','2','0','252','256','2','2','6','1','257','21',''),
('15444','sql','1152','19','T1','c','3','2','259','260','18','0','1','0','257','20',''),
('15445','sql','1152','20','cht_condition_rev_source','c','3','2','264','287','18','0','2','0','257','65',''),
('15446','sql','1152','21','champ','f','2','0','298','302','2','2','7','1','303','24',''),
('15447','sql','1152','22','T1','c','3','2','305','306','21','0','1','0','303','23',''),
('15448','sql','1152','23','cht_condition_js_source','c','3','2','310','332','21','0','2','0','303','65',''),
('15449','sql','1152','24','champ','f','2','0','343','347','2','2','8','1','348','65',''),
('15450','sql','1152','25','T1','c','3','2','350','351','24','0','1','0','348','26',''),
('15451','sql','1152','26','cht_notification_ko_source','c','3','2','355','380','24','0','2','0','348','65',''),
('15452','sql','1152','27','provenance','f','1','0','393','402','1','2','2','5','403','52',''),
('15453','sql','1152','28','table_reference','f','2','0','411','425','27','1','1','4','426','36',''),
('15454','sql','1152','29','source','f','3','0','437','442','28','1','1','3','443','65',''),
('15455','sql','1152','30','nom_de_la_table','f','4','0','444','458','29','3','1','2','459','65',''),
('15456','sql','1152','31','tbl_autorisations','c','5','0','460','476','30','0','1','0','459','32',''),
('15457','sql','1152','32','alias','f','5','0','478','482','30','1','2','1','483','34',''),
('15458','sql','1152','33','T0','c','6','0','484','485','32','0','1','0','483','65',''),
('15459','sql','1152','34','base','f','5','0','488','491','30','1','3','1','492','65',''),
('15460','sql','1152','35','b1','c','6','0','493','494','34','0','1','0','492','65',''),
('15461','sql','1152','36','jointure_gauche','f','2','0','514','528','27','2','2','4','529','65',''),
('15462','sql','1152','37','source','f','3','0','540','545','36','1','1','3','546','44',''),
('15463','sql','1152','38','nom_de_la_table','f','4','0','547','561','37','3','1','2','562','65',''),
('15464','sql','1152','39','tbl_sources','c','5','0','563','573','38','0','1','0','562','40',''),
('15465','sql','1152','40','alias','f','5','0','575','579','38','1','2','1','580','42',''),
('15466','sql','1152','41','T1','c','6','0','581','582','40','0','1','0','580','65',''),
('15467','sql','1152','42','base','f','5','0','585','588','38','1','3','1','589','65',''),
('15468','sql','1152','43','b1','c','6','0','590','591','42','0','1','0','589','65',''),
('15469','sql','1152','44','contrainte','f','3','0','606','615','36','1','2','3','616','65',''),
('15470','sql','1152','45','egal','f','4','0','617','620','44','2','1','2','621','65',''),
('15471','sql','1152','46','champ','f','5','0','622','626','45','2','1','1','627','49',''),
('15472','sql','1152','47','T1','c','6','0','628','629','46','0','1','0','627','48',''),
('15473','sql','1152','48','chi_id_source','c','6','0','631','643','46','0','2','0','627','65',''),
('15474','sql','1152','49','champ','f','5','0','646','650','45','2','2','1','651','65',''),
('15475','sql','1152','50','T0','c','6','0','652','653','49','0','1','0','651','51',''),
('15476','sql','1152','51','chx_source_autorisation','c','6','0','655','677','49','0','2','0','651','65',''),
('15477','sql','1152','52','conditions','f','1','0','699','708','1','1','3','3','709','58',''),
('15478','sql','1152','53','supegal','f','2','0','710','716','52','2','1','2','717','65',''),
('15479','sql','1152','54','champ','f','3','0','718','722','53','2','1','1','723','57',''),
('15480','sql','1152','55','T0','c','4','2','725','726','54','0','1','0','723','56',''),
('15481','sql','1152','56','chx_acces_autorisation','c','4','2','730','751','54','0','2','0','723','65',''),
('15482','sql','1152','57','1','c','3','0','755','755','53','0','2','0','723','65',''),
('15483','sql','1152','58','complements','f','1','0','763','773','1','1','4','4','774','65',''),
('15484','sql','1152','59','trier_par','f','2','0','782','790','58','1','1','3','791','65',''),
('15485','sql','1152','60','','f','3','0','782','790','59','2','1','2','792','65',''),
('15486','sql','1152','61','champ','f','4','0','793','797','60','2','1','1','798','64',''),
('15487','sql','1152','62','T0','c','5','2','800','801','61','0','1','0','798','63',''),
('15488','sql','1152','63','chx_acces_autorisation','c','5','2','805','826','61','0','2','0','798','65',''),
('15489','sql','1152','64','croissant','f','4','0','830','838','60','0','2','0','839','65',''),
('15490','sql','1151','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15491','sql','1151','1','sélectionner','f','0','0','0','11','0','4','1','6','12','23',''),
('15492','sql','1151','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('15493','sql','1151','3','1','c','2','0','35','35','2','0','1','0','34','23',''),
('15494','sql','1151','4','valeurs','f','1','0','42','48','1','1','2','2','49','8',''),
('15495','sql','1151','5','champ','f','2','0','50','54','4','2','1','1','55','23',''),
('15496','sql','1151','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('15497','sql','1151','7','chp_nom_source','c','3','2','62','75','5','0','2','0','55','23',''),
('15498','sql','1151','8','provenance','f','1','0','84','93','1','1','3','5','94','17',''),
('15499','sql','1151','9','table_reference','f','2','0','102','116','8','1','1','4','117','23',''),
('15500','sql','1151','10','source','f','3','0','128','133','9','1','1','3','134','23',''),
('15501','sql','1151','11','nom_de_la_table','f','4','0','135','149','10','3','1','2','150','23',''),
('15502','sql','1151','12','tbl_sources','c','5','0','151','161','11','0','1','0','150','13',''),
('15503','sql','1151','13','alias','f','5','0','163','167','11','1','2','1','168','15',''),
('15504','sql','1151','14','T0','c','6','0','169','170','13','0','1','0','168','23',''),
('15505','sql','1151','15','base','f','5','0','173','176','11','1','3','1','177','23',''),
('15506','sql','1151','16','b1','c','6','0','178','179','15','0','1','0','177','23',''),
('15507','sql','1151','17','conditions','f','1','0','201','210','1','1','4','3','211','23',''),
('15508','sql','1151','18','egal','f','2','0','212','215','17','2','1','2','216','23',''),
('15509','sql','1151','19','champ','f','3','0','217','221','18','2','1','1','222','22',''),
('15510','sql','1151','20','T0','c','4','2','224','225','19','0','1','0','222','21',''),
('15511','sql','1151','21','che_autorisation_globale_source','c','4','2','229','259','19','0','2','0','222','23',''),
('15512','sql','1151','22','1','c','3','0','263','263','18','0','2','0','222','23',''),
('15513','sql','1150','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15514','sql','1150','1','modifier','f','0','0','0','7','0','4','1','6','8','21',''),
('15515','sql','1150','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('15516','sql','1150','3','1','c','2','0','31','31','2','0','1','0','30','21',''),
('15517','sql','1150','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('15518','sql','1150','5','affecte','f','2','0','46','52','4','2','1','2','53','21',''),
('15519','sql','1150','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('15520','sql','1150','7','chp_mot_de_passe_utilisateur','c','4','2','61','88','6','0','1','0','59','21',''),
('15521','sql','1150','8',':n_chp_mot_de_passe_utilisateur','c','3','0','92','122','5','0','2','0','59','21',''),
('15522','sql','1150','9','provenance','f','1','0','130','139','1','1','3','5','140','16',''),
('15523','sql','1150','10','table_reference','f','2','0','148','162','9','1','1','4','163','21',''),
('15524','sql','1150','11','source','f','3','0','174','179','10','1','1','3','180','21',''),
('15525','sql','1150','12','nom_de_la_table','f','4','0','181','195','11','2','1','2','196','21',''),
('15526','sql','1150','13','tbl_utilisateurs','c','5','0','197','212','12','0','1','0','196','14',''),
('15527','sql','1150','14','base','f','5','0','214','217','12','1','2','1','218','21',''),
('15528','sql','1150','15','b1','c','6','0','219','220','14','0','1','0','218','21',''),
('15529','sql','1150','16','conditions','f','1','0','242','251','1','1','4','3','252','21',''),
('15530','sql','1150','17','egal','f','2','0','253','256','16','2','1','2','257','21',''),
('15531','sql','1150','18','champ','f','3','0','258','262','17','1','1','1','263','20',''),
('15532','sql','1150','19','chi_id_utilisateur','c','4','2','265','282','18','0','1','0','263','21',''),
('15533','sql','1150','20',':c_chi_id_utilisateur','c','3','0','286','306','17','0','2','0','263','21',''),
('15534','sql','1149','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15535','sql','1149','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('15536','sql','1149','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('15537','sql','1149','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('15538','sql','1149','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('15539','sql','1149','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('15540','sql','1149','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('15541','sql','1149','7','tbl_menus','c','5','0','105','113','6','0','1','0','104','8',''),
('15542','sql','1149','8','base','f','5','0','115','118','6','1','2','1','119','15',''),
('15543','sql','1149','9','b1','c','6','0','120','121','8','0','1','0','119','15',''),
('15544','sql','1149','10','conditions','f','1','0','143','152','1','1','3','3','153','15',''),
('15545','sql','1149','11','egal','f','2','0','154','157','10','2','1','2','158','15',''),
('15546','sql','1149','12','champ','f','3','0','159','163','11','1','1','1','164','14',''),
('15547','sql','1149','13','chi_id_menu','c','4','2','166','176','12','0','1','0','164','15',''),
('15548','sql','1149','14',':chi_id_menu','c','3','0','180','191','11','0','2','0','164','15',''),
('15549','sql','1148','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15550','sql','1148','1','modifier','f','0','0','0','7','0','3','1','6','8','45',''),
('15551','sql','1148','2','valeurs','f','1','0','13','19','1','7','1','3','20','31',''),
('15552','sql','1148','3','affecte','f','2','0','28','34','2','2','1','2','35','7',''),
('15553','sql','1148','4','champ','f','3','0','36','40','3','1','1','1','41','6',''),
('15554','sql','1148','5','cht_libelle_menu','c','4','2','43','58','4','0','1','0','41','45',''),
('15555','sql','1148','6',':n_cht_libelle_menu','c','3','0','62','80','3','0','2','0','41','45',''),
('15556','sql','1148','7','affecte','f','2','0','90','96','2','2','2','2','97','11',''),
('15557','sql','1148','8','champ','f','3','0','98','102','7','1','1','1','103','10',''),
('15558','sql','1148','9','chp_titre_menu','c','4','2','105','118','8','0','1','0','103','45',''),
('15559','sql','1148','10',':n_chp_titre_menu','c','3','0','122','138','7','0','2','0','103','45',''),
('15560','sql','1148','11','affecte','f','2','0','148','154','2','2','3','2','155','15',''),
('15561','sql','1148','12','champ','f','3','0','156','160','11','1','1','1','161','14',''),
('15562','sql','1148','13','chx_autorisation_menu','c','4','2','163','183','12','0','1','0','161','45',''),
('15563','sql','1148','14',':n_chx_autorisation_menu','c','3','0','187','210','11','0','2','0','161','45',''),
('15564','sql','1148','15','affecte','f','2','0','220','226','2','2','4','2','227','19',''),
('15565','sql','1148','16','champ','f','3','0','228','232','15','1','1','1','233','18',''),
('15566','sql','1148','17','chp_methode_menu','c','4','2','235','250','16','0','1','0','233','45',''),
('15567','sql','1148','18',':n_chp_methode_menu','c','3','0','254','272','15','0','2','0','233','45',''),
('15568','sql','1148','19','affecte','f','2','0','282','288','2','2','5','2','289','23',''),
('15569','sql','1148','20','champ','f','3','0','290','294','19','1','1','1','295','22',''),
('15570','sql','1148','21','cht_condition_menu','c','4','2','297','314','20','0','1','0','295','45',''),
('15571','sql','1148','22',':n_cht_condition_menu','c','3','0','318','338','19','0','2','0','295','45',''),
('15572','sql','1148','23','affecte','f','2','0','348','354','2','2','6','2','355','27',''),
('15573','sql','1148','24','champ','f','3','0','356','360','23','1','1','1','361','26',''),
('15574','sql','1148','25','cht_condition_js_menu','c','4','2','363','383','24','0','1','0','361','45',''),
('15575','sql','1148','26',':n_cht_condition_js_menu','c','3','0','387','410','23','0','2','0','361','45',''),
('15576','sql','1148','27','affecte','f','2','0','420','426','2','2','7','2','427','45',''),
('15577','sql','1148','28','champ','f','3','0','428','432','27','1','1','1','433','30',''),
('15578','sql','1148','29','cht_initialisation_menu','c','4','2','435','457','28','0','1','0','433','45',''),
('15579','sql','1148','30',':n_cht_initialisation_menu','c','3','0','461','486','27','0','2','0','433','45',''),
('15580','sql','1148','31','provenance','f','1','0','498','507','1','1','2','5','508','40',''),
('15581','sql','1148','32','table_reference','f','2','0','516','530','31','1','1','4','531','45',''),
('15582','sql','1148','33','source','f','3','0','542','547','32','1','1','3','548','45',''),
('15583','sql','1148','34','nom_de_la_table','f','4','0','549','563','33','3','1','2','564','45',''),
('15584','sql','1148','35','tbl_menus','c','5','0','565','573','34','0','1','0','564','36',''),
('15585','sql','1148','36','alias','f','5','0','575','579','34','1','2','1','580','38',''),
('15586','sql','1148','37','T0','c','6','0','581','582','36','0','1','0','580','45',''),
('15587','sql','1148','38','base','f','5','0','585','588','34','1','3','1','589','45',''),
('15588','sql','1148','39','b1','c','6','0','590','591','38','0','1','0','589','45',''),
('15589','sql','1148','40','conditions','f','1','0','613','622','1','1','3','3','623','45',''),
('15590','sql','1148','41','egal','f','2','0','624','627','40','2','1','2','628','45',''),
('15591','sql','1148','42','champ','f','3','0','629','633','41','1','1','1','634','44',''),
('15592','sql','1148','43','chi_id_menu','c','4','2','636','646','42','0','1','0','634','45',''),
('15593','sql','1148','44',':c_chi_id_menu','c','3','0','650','663','41','0','2','0','634','45',''),
('15594','sql','1147','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15595','sql','1147','1','insérer','f','0','0','0','6','0','2','1','6','7','38',''),
('15596','sql','1147','2','valeurs','f','1','0','12','18','1','7','1','3','19','31',''),
('15597','sql','1147','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('15598','sql','1147','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('15599','sql','1147','5','chp_titre_menu','c','4','2','42','55','4','0','1','0','40','38',''),
('15600','sql','1147','6',':chp_titre_menu','c','3','0','59','73','3','0','2','0','40','38',''),
('15601','sql','1147','7','affecte','f','2','0','83','89','2','2','2','2','90','11',''),
('15602','sql','1147','8','champ','f','3','0','91','95','7','1','1','1','96','10',''),
('15603','sql','1147','9','chx_autorisation_menu','c','4','2','98','118','8','0','1','0','96','38',''),
('15604','sql','1147','10',':chx_autorisation_menu','c','3','0','122','143','7','0','2','0','96','38',''),
('15605','sql','1147','11','affecte','f','2','0','153','159','2','2','3','2','160','15',''),
('15606','sql','1147','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('15607','sql','1147','13','chp_methode_menu','c','4','2','168','183','12','0','1','0','166','38',''),
('15608','sql','1147','14',':chp_methode_menu','c','3','0','187','203','11','0','2','0','166','38',''),
('15609','sql','1147','15','affecte','f','2','0','213','219','2','2','4','2','220','19',''),
('15610','sql','1147','16','champ','f','3','0','221','225','15','1','1','1','226','18',''),
('15611','sql','1147','17','cht_libelle_menu','c','4','2','228','243','16','0','1','0','226','38',''),
('15612','sql','1147','18',':cht_libelle_menu','c','3','0','247','263','15','0','2','0','226','38',''),
('15613','sql','1147','19','affecte','f','2','0','273','279','2','2','5','2','280','23',''),
('15614','sql','1147','20','champ','f','3','0','281','285','19','1','1','1','286','22',''),
('15615','sql','1147','21','cht_condition_menu','c','4','2','288','305','20','0','1','0','286','38',''),
('15616','sql','1147','22',':cht_condition_menu','c','3','0','309','327','19','0','2','0','286','38',''),
('15617','sql','1147','23','affecte','f','2','0','337','343','2','2','6','2','344','27',''),
('15618','sql','1147','24','champ','f','3','0','345','349','23','1','1','1','350','26',''),
('15619','sql','1147','25','cht_condition_js_menu','c','4','2','352','372','24','0','1','0','350','38',''),
('15620','sql','1147','26',':cht_condition_js_menu','c','3','0','376','397','23','0','2','0','350','38',''),
('15621','sql','1147','27','affecte','f','2','0','407','413','2','2','7','2','414','38',''),
('15622','sql','1147','28','champ','f','3','0','415','419','27','1','1','1','420','30',''),
('15623','sql','1147','29','cht_initialisation_menu','c','4','2','422','444','28','0','1','0','420','38',''),
('15624','sql','1147','30',':cht_initialisation_menu','c','3','0','448','471','27','0','2','0','420','38',''),
('15625','sql','1147','31','provenance','f','1','0','483','492','1','1','2','5','493','38',''),
('15626','sql','1147','32','table_reference','f','2','0','501','515','31','1','1','4','516','38',''),
('15627','sql','1147','33','source','f','3','0','527','532','32','1','1','3','533','38',''),
('15628','sql','1147','34','nom_de_la_table','f','4','0','534','548','33','2','1','2','549','38',''),
('15629','sql','1147','35','tbl_menus','c','5','0','550','558','34','0','1','0','549','36',''),
('15630','sql','1147','36','base','f','5','0','560','563','34','1','2','1','564','38',''),
('15631','sql','1147','37','b1','c','6','0','565','566','36','0','1','0','564','38',''),
('15632','sql','1146','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15633','sql','1146','1','sélectionner','f','0','0','0','11','0','3','1','6','12','105',''),
('15634','sql','1146','2','valeurs','f','1','0','17','23','1','13','1','2','24','42',''),
('15635','sql','1146','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15636','sql','1146','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('15637','sql','1146','5','chi_id_menu','c','3','2','44','54','3','0','2','0','37','105',''),
('15638','sql','1146','6','champ','f','2','0','65','69','2','2','2','1','70','9',''),
('15639','sql','1146','7','T0','c','3','2','72','73','6','0','1','0','70','8',''),
('15640','sql','1146','8','chp_titre_menu','c','3','2','77','90','6','0','2','0','70','105',''),
('15641','sql','1146','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('15642','sql','1146','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('15643','sql','1146','11','chx_autorisation_menu','c','3','2','113','133','9','0','2','0','106','105',''),
('15644','sql','1146','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('15645','sql','1146','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('15646','sql','1146','14','chp_methode_menu','c','3','2','156','171','12','0','2','0','149','105',''),
('15647','sql','1146','15','champ','f','2','0','182','186','2','2','5','1','187','18',''),
('15648','sql','1146','16','T0','c','3','2','189','190','15','0','1','0','187','17',''),
('15649','sql','1146','17','cht_libelle_menu','c','3','2','194','209','15','0','2','0','187','105',''),
('15650','sql','1146','18','champ','f','2','0','220','224','2','2','6','1','225','21',''),
('15651','sql','1146','19','T0','c','3','2','227','228','18','0','1','0','225','20',''),
('15652','sql','1146','20','cht_initialisation_menu','c','3','2','232','254','18','0','2','0','225','105',''),
('15653','sql','1146','21','champ','f','2','0','265','269','2','2','7','1','270','24',''),
('15654','sql','1146','22','T0','c','3','2','272','273','21','0','1','0','270','23',''),
('15655','sql','1146','23','cht_condition_menu','c','3','2','277','294','21','0','2','0','270','105',''),
('15656','sql','1146','24','champ','f','2','0','305','309','2','2','8','1','310','27',''),
('15657','sql','1146','25','T1','c','3','2','312','313','24','0','1','0','310','26',''),
('15658','sql','1146','26','chx_acces_autorisation','c','3','2','317','338','24','0','2','0','310','105',''),
('15659','sql','1146','27','champ','f','2','0','349','353','2','2','9','1','354','30',''),
('15660','sql','1146','28','T1','c','3','2','356','357','27','0','1','0','354','29',''),
('15661','sql','1146','29','chx_source_autorisation','c','3','2','361','383','27','0','2','0','354','105',''),
('15662','sql','1146','30','champ','f','2','0','394','398','2','2','10','1','399','33',''),
('15663','sql','1146','31','T2','c','3','2','401','402','30','0','1','0','399','32',''),
('15664','sql','1146','32','chp_nom_acces','c','3','2','406','418','30','0','2','0','399','105',''),
('15665','sql','1146','33','champ','f','2','0','429','433','2','2','11','1','434','36',''),
('15666','sql','1146','34','T3','c','3','2','436','437','33','0','1','0','434','35',''),
('15667','sql','1146','35','chp_nom_source','c','3','2','441','454','33','0','2','0','434','105',''),
('15668','sql','1146','36','champ','f','2','0','465','469','2','2','12','1','470','39',''),
('15669','sql','1146','37','T3','c','3','2','472','473','36','0','1','0','470','38',''),
('15670','sql','1146','38','che_binaire_source','c','3','2','477','494','36','0','2','0','470','105',''),
('15671','sql','1146','39','champ','f','2','0','505','509','2','2','13','1','510','105',''),
('15672','sql','1146','40','T0','c','3','2','512','513','39','0','1','0','510','41',''),
('15673','sql','1146','41','cht_condition_js_menu','c','3','2','517','537','39','0','2','0','510','105',''),
('15674','sql','1146','42','provenance','f','1','0','551','560','1','4','2','5','561','99',''),
('15675','sql','1146','43','table_reference','f','2','0','569','583','42','1','1','4','584','51',''),
('15676','sql','1146','44','source','f','3','0','595','600','43','1','1','3','601','105',''),
('15677','sql','1146','45','nom_de_la_table','f','4','0','602','616','44','3','1','2','617','105',''),
('15678','sql','1146','46','tbl_menus','c','5','0','618','626','45','0','1','0','617','47',''),
('15679','sql','1146','47','alias','f','5','0','628','632','45','1','2','1','633','49',''),
('15680','sql','1146','48','T0','c','6','0','634','635','47','0','1','0','633','105',''),
('15681','sql','1146','49','base','f','5','0','638','641','45','1','3','1','642','105',''),
('15682','sql','1146','50','b1','c','6','0','643','644','49','0','1','0','642','105',''),
('15683','sql','1146','51','jointure_gauche','f','2','0','664','678','42','2','2','4','679','67',''),
('15684','sql','1146','52','source','f','3','0','690','695','51','1','1','3','696','59',''),
('15685','sql','1146','53','nom_de_la_table','f','4','0','697','711','52','3','1','2','712','105',''),
('15686','sql','1146','54','tbl_autorisations','c','5','0','713','729','53','0','1','0','712','55',''),
('15687','sql','1146','55','alias','f','5','0','731','735','53','1','2','1','736','57',''),
('15688','sql','1146','56','T1','c','6','0','737','738','55','0','1','0','736','105',''),
('15689','sql','1146','57','base','f','5','0','741','744','53','1','3','1','745','105',''),
('15690','sql','1146','58','b1','c','6','0','746','747','57','0','1','0','745','105',''),
('15691','sql','1146','59','contrainte','f','3','0','762','771','51','1','2','3','772','105',''),
('15692','sql','1146','60','egal','f','4','0','773','776','59','2','1','2','777','105',''),
('15693','sql','1146','61','champ','f','5','0','778','782','60','2','1','1','783','64',''),
('15694','sql','1146','62','T1','c','6','0','784','785','61','0','1','0','783','63',''),
('15695','sql','1146','63','chi_id_autorisation','c','6','0','787','805','61','0','2','0','783','105',''),
('15696','sql','1146','64','champ','f','5','0','808','812','60','2','2','1','813','105',''),
('15697','sql','1146','65','T0','c','6','0','814','815','64','0','1','0','813','66',''),
('15698','sql','1146','66','chx_autorisation_menu','c','6','0','817','837','64','0','2','0','813','105',''),
('15699','sql','1146','67','jointure_gauche','f','2','0','857','871','42','2','3','4','872','83',''),
('15700','sql','1146','68','source','f','3','0','883','888','67','1','1','3','889','75',''),
('15701','sql','1146','69','nom_de_la_table','f','4','0','890','904','68','3','1','2','905','105',''),
('15702','sql','1146','70','tbl_acces','c','5','0','906','914','69','0','1','0','905','71',''),
('15703','sql','1146','71','alias','f','5','0','916','920','69','1','2','1','921','73',''),
('15704','sql','1146','72','T2','c','6','0','922','923','71','0','1','0','921','105',''),
('15705','sql','1146','73','base','f','5','0','926','929','69','1','3','1','930','105',''),
('15706','sql','1146','74','b1','c','6','0','931','932','73','0','1','0','930','105',''),
('15707','sql','1146','75','contrainte','f','3','0','947','956','67','1','2','3','957','105',''),
('15708','sql','1146','76','egal','f','4','0','958','961','75','2','1','2','962','105',''),
('15709','sql','1146','77','champ','f','5','0','963','967','76','2','1','1','968','80',''),
('15710','sql','1146','78','T2','c','6','0','969','970','77','0','1','0','968','79',''),
('15711','sql','1146','79','chi_id_acces','c','6','0','972','983','77','0','2','0','968','105',''),
('15712','sql','1146','80','champ','f','5','0','986','990','76','2','2','1','991','105',''),
('15713','sql','1146','81','T1','c','6','0','992','993','80','0','1','0','991','82',''),
('15714','sql','1146','82','chx_acces_autorisation','c','6','0','995','1016','80','0','2','0','991','105',''),
('15715','sql','1146','83','jointure_gauche','f','2','0','1036','1050','42','2','4','4','1051','105',''),
('15716','sql','1146','84','source','f','3','0','1062','1067','83','1','1','3','1068','91',''),
('15717','sql','1146','85','nom_de_la_table','f','4','0','1069','1083','84','3','1','2','1084','105',''),
('15718','sql','1146','86','tbl_sources','c','5','0','1085','1095','85','0','1','0','1084','87',''),
('15719','sql','1146','87','alias','f','5','0','1097','1101','85','1','2','1','1102','89',''),
('15720','sql','1146','88','T3','c','6','0','1103','1104','87','0','1','0','1102','105',''),
('15721','sql','1146','89','base','f','5','0','1107','1110','85','1','3','1','1111','105',''),
('15722','sql','1146','90','b1','c','6','0','1112','1113','89','0','1','0','1111','105',''),
('15723','sql','1146','91','contrainte','f','3','0','1128','1137','83','1','2','3','1138','105',''),
('15724','sql','1146','92','egal','f','4','0','1139','1142','91','2','1','2','1143','105',''),
('15725','sql','1146','93','champ','f','5','0','1144','1148','92','2','1','1','1149','96',''),
('15726','sql','1146','94','T3','c','6','0','1150','1151','93','0','1','0','1149','95',''),
('15727','sql','1146','95','chi_id_source','c','6','0','1153','1165','93','0','2','0','1149','105',''),
('15728','sql','1146','96','champ','f','5','0','1168','1172','92','2','2','1','1173','105',''),
('15729','sql','1146','97','T1','c','6','0','1174','1175','96','0','1','0','1173','98',''),
('15730','sql','1146','98','chx_source_autorisation','c','6','0','1177','1199','96','0','2','0','1173','105',''),
('15731','sql','1146','99','conditions','f','1','0','1221','1230','1','1','3','3','1231','105',''),
('15732','sql','1146','100','egal','f','2','0','1232','1235','99','2','1','2','1236','105',''),
('15733','sql','1146','101','champ','f','3','0','1237','1241','100','2','1','1','1242','104',''),
('15734','sql','1146','102','T0','c','4','2','1244','1245','101','0','1','0','1242','103',''),
('15735','sql','1146','103','chi_id_menu','c','4','2','1249','1259','101','0','2','0','1242','105',''),
('15736','sql','1146','104',':T0_chi_id_menu','c','3','0','1263','1277','100','0','2','0','1242','105',''),
('15737','sql','1145','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15738','sql','1145','1','sélectionner','f','0','0','0','11','0','4','1','6','12','144',''),
('15739','sql','1145','2','valeurs','f','1','0','17','23','1','10','1','2','24','33',''),
('15740','sql','1145','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15741','sql','1145','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('15742','sql','1145','5','chi_id_menu','c','3','2','44','54','3','0','2','0','37','144',''),
('15743','sql','1145','6','champ','f','2','0','65','69','2','2','2','1','70','9',''),
('15744','sql','1145','7','T0','c','3','2','72','73','6','0','1','0','70','8',''),
('15745','sql','1145','8','chp_titre_menu','c','3','2','77','90','6','0','2','0','70','144',''),
('15746','sql','1145','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('15747','sql','1145','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('15748','sql','1145','11','chx_autorisation_menu','c','3','2','113','133','9','0','2','0','106','144',''),
('15749','sql','1145','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('15750','sql','1145','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('15751','sql','1145','14','chp_methode_menu','c','3','2','156','171','12','0','2','0','149','144',''),
('15752','sql','1145','15','champ','f','2','0','182','186','2','2','5','1','187','18',''),
('15753','sql','1145','16','T0','c','3','2','189','190','15','0','1','0','187','17',''),
('15754','sql','1145','17','cht_libelle_menu','c','3','2','194','209','15','0','2','0','187','144',''),
('15755','sql','1145','18','champ','f','2','0','220','224','2','2','6','1','225','21',''),
('15756','sql','1145','19','T0','c','3','2','227','228','18','0','1','0','225','20',''),
('15757','sql','1145','20','cht_condition_menu','c','3','2','232','249','18','0','2','0','225','144',''),
('15758','sql','1145','21','champ','f','2','0','260','264','2','2','7','1','265','24',''),
('15759','sql','1145','22','T1','c','3','2','267','268','21','0','1','0','265','23',''),
('15760','sql','1145','23','chx_acces_autorisation','c','3','2','272','293','21','0','2','0','265','144',''),
('15761','sql','1145','24','champ','f','2','0','304','308','2','2','8','1','309','27',''),
('15762','sql','1145','25','T1','c','3','2','311','312','24','0','1','0','309','26',''),
('15763','sql','1145','26','chx_source_autorisation','c','3','2','316','338','24','0','2','0','309','144',''),
('15764','sql','1145','27','champ','f','2','0','349','353','2','2','9','1','354','30',''),
('15765','sql','1145','28','T2','c','3','2','356','357','27','0','1','0','354','29',''),
('15766','sql','1145','29','chp_nom_acces','c','3','2','361','373','27','0','2','0','354','144',''),
('15767','sql','1145','30','champ','f','2','0','384','388','2','2','10','1','389','144',''),
('15768','sql','1145','31','T3','c','3','2','391','392','30','0','1','0','389','32',''),
('15769','sql','1145','32','chp_nom_source','c','3','2','396','409','30','0','2','0','389','144',''),
('15770','sql','1145','33','provenance','f','1','0','422','431','1','4','2','5','432','90',''),
('15771','sql','1145','34','table_reference','f','2','0','440','454','33','1','1','4','455','42',''),
('15772','sql','1145','35','source','f','3','0','466','471','34','1','1','3','472','144',''),
('15773','sql','1145','36','nom_de_la_table','f','4','0','473','487','35','3','1','2','488','144',''),
('15774','sql','1145','37','tbl_menus','c','5','0','489','497','36','0','1','0','488','38',''),
('15775','sql','1145','38','alias','f','5','0','499','503','36','1','2','1','504','40',''),
('15776','sql','1145','39','T0','c','6','0','505','506','38','0','1','0','504','144',''),
('15777','sql','1145','40','base','f','5','0','509','512','36','1','3','1','513','144',''),
('15778','sql','1145','41','b1','c','6','0','514','515','40','0','1','0','513','144',''),
('15779','sql','1145','42','jointure_gauche','f','2','0','535','549','33','2','2','4','550','58',''),
('15780','sql','1145','43','source','f','3','0','561','566','42','1','1','3','567','50',''),
('15781','sql','1145','44','nom_de_la_table','f','4','0','568','582','43','3','1','2','583','144',''),
('15782','sql','1145','45','tbl_autorisations','c','5','0','584','600','44','0','1','0','583','46',''),
('15783','sql','1145','46','alias','f','5','0','602','606','44','1','2','1','607','48',''),
('15784','sql','1145','47','T1','c','6','0','608','609','46','0','1','0','607','144',''),
('15785','sql','1145','48','base','f','5','0','612','615','44','1','3','1','616','144',''),
('15786','sql','1145','49','b1','c','6','0','617','618','48','0','1','0','616','144',''),
('15787','sql','1145','50','contrainte','f','3','0','633','642','42','1','2','3','643','144',''),
('15788','sql','1145','51','egal','f','4','0','644','647','50','2','1','2','648','144',''),
('15789','sql','1145','52','champ','f','5','0','649','653','51','2','1','1','654','55',''),
('15790','sql','1145','53','T1','c','6','0','655','656','52','0','1','0','654','54',''),
('15791','sql','1145','54','chi_id_autorisation','c','6','0','658','676','52','0','2','0','654','144',''),
('15792','sql','1145','55','champ','f','5','0','679','683','51','2','2','1','684','144',''),
('15793','sql','1145','56','T0','c','6','0','685','686','55','0','1','0','684','57',''),
('15794','sql','1145','57','chx_autorisation_menu','c','6','0','688','708','55','0','2','0','684','144',''),
('15795','sql','1145','58','jointure_gauche','f','2','0','728','742','33','2','3','4','743','74',''),
('15796','sql','1145','59','source','f','3','0','754','759','58','1','1','3','760','66',''),
('15797','sql','1145','60','nom_de_la_table','f','4','0','761','775','59','3','1','2','776','144',''),
('15798','sql','1145','61','tbl_acces','c','5','0','777','785','60','0','1','0','776','62',''),
('15799','sql','1145','62','alias','f','5','0','787','791','60','1','2','1','792','64',''),
('15800','sql','1145','63','T2','c','6','0','793','794','62','0','1','0','792','144',''),
('15801','sql','1145','64','base','f','5','0','797','800','60','1','3','1','801','144',''),
('15802','sql','1145','65','b1','c','6','0','802','803','64','0','1','0','801','144',''),
('15803','sql','1145','66','contrainte','f','3','0','818','827','58','1','2','3','828','144',''),
('15804','sql','1145','67','egal','f','4','0','829','832','66','2','1','2','833','144',''),
('15805','sql','1145','68','champ','f','5','0','834','838','67','2','1','1','839','71',''),
('15806','sql','1145','69','T2','c','6','0','840','841','68','0','1','0','839','70',''),
('15807','sql','1145','70','chi_id_acces','c','6','0','843','854','68','0','2','0','839','144',''),
('15808','sql','1145','71','champ','f','5','0','857','861','67','2','2','1','862','144',''),
('15809','sql','1145','72','T1','c','6','0','863','864','71','0','1','0','862','73',''),
('15810','sql','1145','73','chx_acces_autorisation','c','6','0','866','887','71','0','2','0','862','144',''),
('15811','sql','1145','74','jointure_gauche','f','2','0','907','921','33','2','4','4','922','144',''),
('15812','sql','1145','75','source','f','3','0','933','938','74','1','1','3','939','82',''),
('15813','sql','1145','76','nom_de_la_table','f','4','0','940','954','75','3','1','2','955','144',''),
('15814','sql','1145','77','tbl_sources','c','5','0','956','966','76','0','1','0','955','78',''),
('15815','sql','1145','78','alias','f','5','0','968','972','76','1','2','1','973','80',''),
('15816','sql','1145','79','T3','c','6','0','974','975','78','0','1','0','973','144',''),
('15817','sql','1145','80','base','f','5','0','978','981','76','1','3','1','982','144',''),
('15818','sql','1145','81','b1','c','6','0','983','984','80','0','1','0','982','144',''),
('15819','sql','1145','82','contrainte','f','3','0','999','1008','74','1','2','3','1009','144',''),
('15820','sql','1145','83','egal','f','4','0','1010','1013','82','2','1','2','1014','144',''),
('15821','sql','1145','84','champ','f','5','0','1015','1019','83','2','1','1','1020','87',''),
('15822','sql','1145','85','T3','c','6','0','1021','1022','84','0','1','0','1020','86',''),
('15823','sql','1145','86','chi_id_source','c','6','0','1024','1036','84','0','2','0','1020','144',''),
('15824','sql','1145','87','champ','f','5','0','1039','1043','83','2','2','1','1044','144',''),
('15825','sql','1145','88','T1','c','6','0','1045','1046','87','0','1','0','1044','89',''),
('15826','sql','1145','89','chx_source_autorisation','c','6','0','1048','1070','87','0','2','0','1044','144',''),
('15827','sql','1145','90','conditions','f','1','0','1092','1101','1','1','3','4','1102','132',''),
('15828','sql','1145','91','et','f','2','0','1110','1111','90','8','1','3','1112','144',''),
('15829','sql','1145','92','comme','f','3','0','1123','1127','91','2','1','2','1128','97',''),
('15830','sql','1145','93','champ','f','4','0','1129','1133','92','2','1','1','1134','96',''),
('15831','sql','1145','94','T3','c','5','2','1136','1137','93','0','1','0','1134','95',''),
('15832','sql','1145','95','chp_nom_source','c','5','2','1141','1154','93','0','2','0','1134','144',''),
('15833','sql','1145','96',':T3_chp_nom_source','c','4','0','1158','1175','92','0','2','0','1134','144',''),
('15834','sql','1145','97','egal','f','3','0','1188','1191','91','2','2','2','1192','102',''),
('15835','sql','1145','98','champ','f','4','0','1193','1197','97','2','1','1','1198','101',''),
('15836','sql','1145','99','T1','c','5','2','1200','1201','98','0','1','0','1198','100',''),
('15837','sql','1145','100','chx_acces_autorisation','c','5','2','1205','1226','98','0','2','0','1198','144',''),
('15838','sql','1145','101',':T1_chx_acces_autorisation','c','4','0','1230','1255','97','0','2','0','1198','144',''),
('15839','sql','1145','102','egal','f','3','0','1268','1271','91','2','3','2','1272','107',''),
('15840','sql','1145','103','champ','f','4','0','1273','1277','102','2','1','1','1278','106',''),
('15841','sql','1145','104','T0','c','5','2','1280','1281','103','0','1','0','1278','105',''),
('15842','sql','1145','105','chi_id_menu','c','5','2','1285','1295','103','0','2','0','1278','144',''),
('15843','sql','1145','106',':T0_chi_id_menu','c','4','0','1299','1313','102','0','2','0','1278','144',''),
('15844','sql','1145','107','comme','f','3','0','1326','1330','91','2','4','2','1331','112',''),
('15845','sql','1145','108','champ','f','4','0','1332','1336','107','2','1','1','1337','111',''),
('15846','sql','1145','109','T0','c','5','2','1339','1340','108','0','1','0','1337','110',''),
('15847','sql','1145','110','cht_libelle_menu','c','5','2','1344','1359','108','0','2','0','1337','144',''),
('15848','sql','1145','111',':T0_cht_libelle_menu','c','4','0','1363','1382','107','0','2','0','1337','144',''),
('15849','sql','1145','112','comme','f','3','0','1395','1399','91','2','5','2','1400','117',''),
('15850','sql','1145','113','champ','f','4','0','1401','1405','112','2','1','1','1406','116',''),
('15851','sql','1145','114','T0','c','5','2','1408','1409','113','0','1','0','1406','115',''),
('15852','sql','1145','115','chp_titre_menu','c','5','2','1413','1426','113','0','2','0','1406','144',''),
('15853','sql','1145','116',':T0_chp_titre_menu','c','4','0','1430','1447','112','0','2','0','1406','144',''),
('15854','sql','1145','117','egal','f','3','0','1460','1463','91','2','6','2','1464','122',''),
('15855','sql','1145','118','champ','f','4','0','1465','1469','117','2','1','1','1470','121',''),
('15856','sql','1145','119','T0','c','5','2','1472','1473','118','0','1','0','1470','120',''),
('15857','sql','1145','120','chx_autorisation_menu','c','5','2','1477','1497','118','0','2','0','1470','144',''),
('15858','sql','1145','121',':T0_chx_autorisation_menu','c','4','0','1501','1525','117','0','2','0','1470','144',''),
('15859','sql','1145','122','comme','f','3','0','1538','1542','91','2','7','2','1543','127',''),
('15860','sql','1145','123','champ','f','4','0','1544','1548','122','2','1','1','1549','126',''),
('15861','sql','1145','124','T0','c','5','2','1551','1552','123','0','1','0','1549','125',''),
('15862','sql','1145','125','chp_methode_menu','c','5','2','1556','1571','123','0','2','0','1549','144',''),
('15863','sql','1145','126',':T0_chp_methode_menu','c','4','0','1575','1594','122','0','2','0','1549','144',''),
('15864','sql','1145','127','pas_dans','f','3','0','1607','1614','91','2','8','2','1615','144',''),
('15865','sql','1145','128','champ','f','4','0','1616','1620','127','2','1','1','1621','131',''),
('15866','sql','1145','129','T1','c','5','2','1623','1624','128','0','1','0','1621','130',''),
('15867','sql','1145','130','chx_acces_autorisation','c','5','2','1628','1649','128','0','2','0','1621','144',''),
('15868','sql','1145','131',':acces_pas_dans','c','4','0','1653','1667','127','0','2','0','1621','144',''),
('15869','sql','1145','132','complements','f','1','0','1687','1697','1','2','4','4','1698','144',''),
('15870','sql','1145','133','trier_par','f','2','0','1706','1714','132','1','1','3','1715','139',''),
('15871','sql','1145','134','','f','3','0','1706','1714','133','2','1','2','1716','144',''),
('15872','sql','1145','135','champ','f','4','0','1717','1721','134','2','1','1','1722','138',''),
('15873','sql','1145','136','T0','c','5','2','1724','1725','135','0','1','0','1722','137',''),
('15874','sql','1145','137','chi_id_menu','c','5','2','1729','1739','135','0','2','0','1722','144',''),
('15875','sql','1145','138','décroissant','f','4','0','1743','1753','134','0','2','0','1754','144',''),
('15876','sql','1145','139','limité_à','f','2','0','1766','1773','132','2','2','2','1774','144',''),
('15877','sql','1145','140','quantité','f','3','0','1775','1782','139','1','1','1','1783','142',''),
('15878','sql','1145','141',':quantitee','c','4','0','1784','1793','140','0','1','0','1783','144',''),
('15879','sql','1145','142','début','f','3','0','1796','1800','139','1','2','1','1801','144',''),
('15880','sql','1145','143',':debut','c','4','0','1802','1807','142','0','1','0','1801','144',''),
('15881','sql','1144','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15882','sql','1144','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('15883','sql','1144','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('15884','sql','1144','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('15885','sql','1144','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('15886','sql','1144','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('15887','sql','1144','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('15888','sql','1144','7','tbl_autorisations','c','5','0','105','121','6','0','1','0','104','8',''),
('15889','sql','1144','8','base','f','5','0','123','126','6','1','2','1','127','15',''),
('15890','sql','1144','9','b1','c','6','0','128','129','8','0','1','0','127','15',''),
('15891','sql','1144','10','conditions','f','1','0','151','160','1','1','3','3','161','15',''),
('15892','sql','1144','11','egal','f','2','0','162','165','10','2','1','2','166','15',''),
('15893','sql','1144','12','champ','f','3','0','167','171','11','1','1','1','172','14',''),
('15894','sql','1144','13','chi_id_autorisation','c','4','2','174','192','12','0','1','0','172','15',''),
('15895','sql','1144','14',':chi_id_autorisation','c','3','0','196','215','11','0','2','0','172','15',''),
('15896','sql','1143','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15897','sql','1143','1','modifier','f','0','0','0','7','0','3','1','6','8','29',''),
('15898','sql','1143','2','valeurs','f','1','0','13','19','1','3','1','3','20','15',''),
('15899','sql','1143','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('15900','sql','1143','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('15901','sql','1143','5','chx_acces_autorisation','c','4','2','36','57','4','0','1','0','34','29',''),
('15902','sql','1143','6',':n_chx_acces_autorisation','c','3','0','61','85','3','0','2','0','34','29',''),
('15903','sql','1143','7','affecte','f','2','0','88','94','2','2','2','2','95','11',''),
('15904','sql','1143','8','champ','f','3','0','96','100','7','1','1','1','101','10',''),
('15905','sql','1143','9','chx_source_autorisation','c','4','2','103','125','8','0','1','0','101','29',''),
('15906','sql','1143','10',':n_chx_source_autorisation','c','3','0','129','154','7','0','2','0','101','29',''),
('15907','sql','1143','11','affecte','f','2','0','157','163','2','2','3','2','164','29',''),
('15908','sql','1143','12','champ','f','3','0','165','169','11','1','1','1','170','14',''),
('15909','sql','1143','13','che_pour_sous_liste_autorisation','c','4','2','172','203','12','0','1','0','170','29',''),
('15910','sql','1143','14',':n_che_pour_sous_liste_autorisation','c','3','0','207','241','11','0','2','0','170','29',''),
('15911','sql','1143','15','provenance','f','1','0','249','258','1','1','2','5','259','24',''),
('15912','sql','1143','16','table_reference','f','2','0','267','281','15','1','1','4','282','29',''),
('15913','sql','1143','17','source','f','3','0','293','298','16','1','1','3','299','29',''),
('15914','sql','1143','18','nom_de_la_table','f','4','0','300','314','17','3','1','2','315','29',''),
('15915','sql','1143','19','tbl_autorisations','c','5','0','316','332','18','0','1','0','315','20',''),
('15916','sql','1143','20','alias','f','5','0','334','338','18','1','2','1','339','22',''),
('15917','sql','1143','21','T0','c','6','0','340','341','20','0','1','0','339','29',''),
('15918','sql','1143','22','base','f','5','0','344','347','18','1','3','1','348','29',''),
('15919','sql','1143','23','b1','c','6','0','349','350','22','0','1','0','348','29',''),
('15920','sql','1143','24','conditions','f','1','0','372','381','1','1','3','3','382','29',''),
('15921','sql','1143','25','egal','f','2','0','383','386','24','2','1','2','387','29',''),
('15922','sql','1143','26','champ','f','3','0','388','392','25','1','1','1','393','28',''),
('15923','sql','1143','27','chi_id_autorisation','c','4','2','395','413','26','0','1','0','393','29',''),
('15924','sql','1143','28',':c_chi_id_autorisation','c','3','0','417','438','25','0','2','0','393','29',''),
('15925','sql','1142','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15926','sql','1142','1','insérer','f','0','0','0','6','0','2','1','6','7','22',''),
('15927','sql','1142','2','valeurs','f','1','0','12','18','1','3','1','3','19','15',''),
('15928','sql','1142','3','affecte','f','2','0','20','26','2','2','1','2','27','7',''),
('15929','sql','1142','4','champ','f','3','0','28','32','3','1','1','1','33','6',''),
('15930','sql','1142','5','chx_acces_autorisation','c','4','2','35','56','4','0','1','0','33','22',''),
('15931','sql','1142','6',':chx_acces_autorisation','c','3','0','60','82','3','0','2','0','33','22',''),
('15932','sql','1142','7','affecte','f','2','0','85','91','2','2','2','2','92','11',''),
('15933','sql','1142','8','champ','f','3','0','93','97','7','1','1','1','98','10',''),
('15934','sql','1142','9','chx_source_autorisation','c','4','2','100','122','8','0','1','0','98','22',''),
('15935','sql','1142','10',':chx_source_autorisation','c','3','0','126','149','7','0','2','0','98','22',''),
('15936','sql','1142','11','affecte','f','2','0','152','158','2','2','3','2','159','22',''),
('15937','sql','1142','12','champ','f','3','0','160','164','11','1','1','1','165','14',''),
('15938','sql','1142','13','che_pour_sous_liste_autorisation','c','4','2','167','198','12','0','1','0','165','22',''),
('15939','sql','1142','14',':che_pour_sous_liste_autorisation','c','3','0','202','234','11','0','2','0','165','22',''),
('15940','sql','1142','15','provenance','f','1','0','242','251','1','1','2','5','252','22',''),
('15941','sql','1142','16','table_reference','f','2','0','260','274','15','1','1','4','275','22',''),
('15942','sql','1142','17','source','f','3','0','286','291','16','1','1','3','292','22',''),
('15943','sql','1142','18','nom_de_la_table','f','4','0','293','307','17','2','1','2','308','22',''),
('15944','sql','1142','19','tbl_autorisations','c','5','0','309','325','18','0','1','0','308','20',''),
('15945','sql','1142','20','base','f','5','0','327','330','18','1','2','1','331','22',''),
('15946','sql','1142','21','b1','c','6','0','332','333','20','0','1','0','331','22',''),
('15947','sql','1141','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('15948','sql','1141','1','sélectionner','f','0','0','0','11','0','3','1','6','12','74',''),
('15949','sql','1141','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('15950','sql','1141','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('15951','sql','1141','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('15952','sql','1141','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','74',''),
('15953','sql','1141','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('15954','sql','1141','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('15955','sql','1141','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','74',''),
('15956','sql','1141','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('15957','sql','1141','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('15958','sql','1141','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','74',''),
('15959','sql','1141','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('15960','sql','1141','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('15961','sql','1141','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','74',''),
('15962','sql','1141','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('15963','sql','1141','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('15964','sql','1141','17','chp_nom_acces','c','3','2','228','240','15','0','2','0','221','74',''),
('15965','sql','1141','18','champ','f','2','0','251','255','2','2','6','1','256','21',''),
('15966','sql','1141','19','T2','c','3','2','258','259','18','0','1','0','256','20',''),
('15967','sql','1141','20','chp_nom_source','c','3','2','263','276','18','0','2','0','256','74',''),
('15968','sql','1141','21','champ','f','2','0','287','291','2','2','7','1','292','24',''),
('15969','sql','1141','22','T2','c','3','2','294','295','21','0','1','0','292','23',''),
('15970','sql','1141','23','che_binaire_source','c','3','2','299','316','21','0','2','0','292','74',''),
('15971','sql','1141','24','champ','f','2','0','327','331','2','2','8','1','332','74',''),
('15972','sql','1141','25','T2','c','3','2','334','335','24','0','1','0','332','26',''),
('15973','sql','1141','26','chx_dossier_id_source','c','3','2','339','359','24','0','2','0','332','74',''),
('15974','sql','1141','27','provenance','f','1','0','372','381','1','3','2','5','382','68',''),
('15975','sql','1141','28','table_reference','f','2','0','390','404','27','1','1','4','405','36',''),
('15976','sql','1141','29','source','f','3','0','416','421','28','1','1','3','422','74',''),
('15977','sql','1141','30','nom_de_la_table','f','4','0','423','437','29','3','1','2','438','74',''),
('15978','sql','1141','31','tbl_autorisations','c','5','0','439','455','30','0','1','0','438','32',''),
('15979','sql','1141','32','alias','f','5','0','457','461','30','1','2','1','462','34',''),
('15980','sql','1141','33','T0','c','6','0','463','464','32','0','1','0','462','74',''),
('15981','sql','1141','34','base','f','5','0','467','470','30','1','3','1','471','74',''),
('15982','sql','1141','35','b1','c','6','0','472','473','34','0','1','0','471','74',''),
('15983','sql','1141','36','jointure_gauche','f','2','0','493','507','27','2','2','4','508','52',''),
('15984','sql','1141','37','source','f','3','0','519','524','36','1','1','3','525','44',''),
('15985','sql','1141','38','nom_de_la_table','f','4','0','526','540','37','3','1','2','541','74',''),
('15986','sql','1141','39','tbl_acces','c','5','0','542','550','38','0','1','0','541','40',''),
('15987','sql','1141','40','alias','f','5','0','552','556','38','1','2','1','557','42',''),
('15988','sql','1141','41','T1','c','6','0','558','559','40','0','1','0','557','74',''),
('15989','sql','1141','42','base','f','5','0','562','565','38','1','3','1','566','74',''),
('15990','sql','1141','43','b1','c','6','0','567','568','42','0','1','0','566','74',''),
('15991','sql','1141','44','contrainte','f','3','0','583','592','36','1','2','3','593','74',''),
('15992','sql','1141','45','egal','f','4','0','594','597','44','2','1','2','598','74',''),
('15993','sql','1141','46','champ','f','5','0','599','603','45','2','1','1','604','49',''),
('15994','sql','1141','47','T1','c','6','0','605','606','46','0','1','0','604','48',''),
('15995','sql','1141','48','chi_id_acces','c','6','0','608','619','46','0','2','0','604','74',''),
('15996','sql','1141','49','champ','f','5','0','622','626','45','2','2','1','627','74',''),
('15997','sql','1141','50','T0','c','6','0','628','629','49','0','1','0','627','51',''),
('15998','sql','1141','51','chx_acces_autorisation','c','6','0','631','652','49','0','2','0','627','74',''),
('15999','sql','1141','52','jointure_gauche','f','2','0','672','686','27','2','3','4','687','74',''),
('16000','sql','1141','53','source','f','3','0','698','703','52','1','1','3','704','60',''),
('16001','sql','1141','54','nom_de_la_table','f','4','0','705','719','53','3','1','2','720','74',''),
('16002','sql','1141','55','tbl_sources','c','5','0','721','731','54','0','1','0','720','56',''),
('16003','sql','1141','56','alias','f','5','0','733','737','54','1','2','1','738','58',''),
('16004','sql','1141','57','T2','c','6','0','739','740','56','0','1','0','738','74',''),
('16005','sql','1141','58','base','f','5','0','743','746','54','1','3','1','747','74',''),
('16006','sql','1141','59','b1','c','6','0','748','749','58','0','1','0','747','74',''),
('16007','sql','1141','60','contrainte','f','3','0','764','773','52','1','2','3','774','74',''),
('16008','sql','1141','61','egal','f','4','0','775','778','60','2','1','2','779','74',''),
('16009','sql','1141','62','champ','f','5','0','780','784','61','2','1','1','785','65',''),
('16010','sql','1141','63','T2','c','6','0','786','787','62','0','1','0','785','64',''),
('16011','sql','1141','64','chi_id_source','c','6','0','789','801','62','0','2','0','785','74',''),
('16012','sql','1141','65','champ','f','5','0','804','808','61','2','2','1','809','74',''),
('16013','sql','1141','66','T0','c','6','0','810','811','65','0','1','0','809','67',''),
('16014','sql','1141','67','chx_source_autorisation','c','6','0','813','835','65','0','2','0','809','74',''),
('16015','sql','1141','68','conditions','f','1','0','857','866','1','1','3','3','867','74',''),
('16016','sql','1141','69','egal','f','2','0','868','871','68','2','1','2','872','74',''),
('16017','sql','1141','70','champ','f','3','0','873','877','69','2','1','1','878','73',''),
('16018','sql','1141','71','T0','c','4','2','880','881','70','0','1','0','878','72',''),
('16019','sql','1141','72','chi_id_autorisation','c','4','2','885','903','70','0','2','0','878','74',''),
('16020','sql','1141','73',':T0_chi_id_autorisation','c','3','0','907','929','69','0','2','0','878','74',''),
('16021','sql','1140','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16022','sql','1140','1','sélectionner','f','0','0','0','11','0','4','1','6','12','126',''),
('16023','sql','1140','2','valeurs','f','1','0','17','23','1','6','1','2','24','21',''),
('16024','sql','1140','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('16025','sql','1140','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('16026','sql','1140','5','chx_acces_autorisation','c','3','2','44','65','3','0','2','0','37','126',''),
('16027','sql','1140','6','champ','f','2','0','76','80','2','2','2','1','81','9',''),
('16028','sql','1140','7','T0','c','3','2','83','84','6','0','1','0','81','8',''),
('16029','sql','1140','8','chx_source_autorisation','c','3','2','88','110','6','0','2','0','81','126',''),
('16030','sql','1140','9','champ','f','2','0','121','125','2','2','3','1','126','12',''),
('16031','sql','1140','10','T0','c','3','2','128','129','9','0','1','0','126','11',''),
('16032','sql','1140','11','che_pour_sous_liste_autorisation','c','3','2','133','164','9','0','2','0','126','126',''),
('16033','sql','1140','12','champ','f','2','0','175','179','2','2','4','1','180','15',''),
('16034','sql','1140','13','T1','c','3','2','182','183','12','0','1','0','180','14',''),
('16035','sql','1140','14','chp_nom_acces','c','3','2','187','199','12','0','2','0','180','126',''),
('16036','sql','1140','15','champ','f','2','0','210','214','2','2','5','1','215','18',''),
('16037','sql','1140','16','T2','c','3','2','217','218','15','0','1','0','215','17',''),
('16038','sql','1140','17','chp_nom_source','c','3','2','222','235','15','0','2','0','215','126',''),
('16039','sql','1140','18','champ','f','2','0','246','250','2','2','6','1','251','126',''),
('16040','sql','1140','19','T0','c','3','2','253','254','18','0','1','0','251','20',''),
('16041','sql','1140','20','chi_id_autorisation','c','3','2','258','276','18','0','2','0','251','126',''),
('16042','sql','1140','21','provenance','f','1','0','289','298','1','3','2','5','299','62',''),
('16043','sql','1140','22','table_reference','f','2','0','307','321','21','1','1','4','322','30',''),
('16044','sql','1140','23','source','f','3','0','333','338','22','1','1','3','339','126',''),
('16045','sql','1140','24','nom_de_la_table','f','4','0','340','354','23','3','1','2','355','126',''),
('16046','sql','1140','25','tbl_autorisations','c','5','0','356','372','24','0','1','0','355','26',''),
('16047','sql','1140','26','alias','f','5','0','374','378','24','1','2','1','379','28',''),
('16048','sql','1140','27','T0','c','6','0','380','381','26','0','1','0','379','126',''),
('16049','sql','1140','28','base','f','5','0','384','387','24','1','3','1','388','126',''),
('16050','sql','1140','29','b1','c','6','0','389','390','28','0','1','0','388','126',''),
('16051','sql','1140','30','jointure_gauche','f','2','0','410','424','21','2','2','4','425','46',''),
('16052','sql','1140','31','source','f','3','0','436','441','30','1','1','3','442','38',''),
('16053','sql','1140','32','nom_de_la_table','f','4','0','443','457','31','3','1','2','458','126',''),
('16054','sql','1140','33','tbl_acces','c','5','0','459','467','32','0','1','0','458','34',''),
('16055','sql','1140','34','alias','f','5','0','469','473','32','1','2','1','474','36',''),
('16056','sql','1140','35','T1','c','6','0','475','476','34','0','1','0','474','126',''),
('16057','sql','1140','36','base','f','5','0','479','482','32','1','3','1','483','126',''),
('16058','sql','1140','37','b1','c','6','0','484','485','36','0','1','0','483','126',''),
('16059','sql','1140','38','contrainte','f','3','0','500','509','30','1','2','3','510','126',''),
('16060','sql','1140','39','egal','f','4','0','511','514','38','2','1','2','515','126',''),
('16061','sql','1140','40','champ','f','5','0','516','520','39','2','1','1','521','43',''),
('16062','sql','1140','41','T1','c','6','0','522','523','40','0','1','0','521','42',''),
('16063','sql','1140','42','chi_id_acces','c','6','0','525','536','40','0','2','0','521','126',''),
('16064','sql','1140','43','champ','f','5','0','539','543','39','2','2','1','544','126',''),
('16065','sql','1140','44','T0','c','6','0','545','546','43','0','1','0','544','45',''),
('16066','sql','1140','45','chx_acces_autorisation','c','6','0','548','569','43','0','2','0','544','126',''),
('16067','sql','1140','46','jointure_gauche','f','2','0','589','603','21','2','3','4','604','126',''),
('16068','sql','1140','47','source','f','3','0','615','620','46','1','1','3','621','54',''),
('16069','sql','1140','48','nom_de_la_table','f','4','0','622','636','47','3','1','2','637','126',''),
('16070','sql','1140','49','tbl_sources','c','5','0','638','648','48','0','1','0','637','50',''),
('16071','sql','1140','50','alias','f','5','0','650','654','48','1','2','1','655','52',''),
('16072','sql','1140','51','T2','c','6','0','656','657','50','0','1','0','655','126',''),
('16073','sql','1140','52','base','f','5','0','660','663','48','1','3','1','664','126',''),
('16074','sql','1140','53','b1','c','6','0','665','666','52','0','1','0','664','126',''),
('16075','sql','1140','54','contrainte','f','3','0','681','690','46','1','2','3','691','126',''),
('16076','sql','1140','55','egal','f','4','0','692','695','54','2','1','2','696','126',''),
('16077','sql','1140','56','champ','f','5','0','697','701','55','2','1','1','702','59',''),
('16078','sql','1140','57','T2','c','6','0','703','704','56','0','1','0','702','58',''),
('16079','sql','1140','58','chi_id_source','c','6','0','706','718','56','0','2','0','702','126',''),
('16080','sql','1140','59','champ','f','5','0','721','725','55','2','2','1','726','126',''),
('16081','sql','1140','60','T0','c','6','0','727','728','59','0','1','0','726','61',''),
('16082','sql','1140','61','chx_source_autorisation','c','6','0','730','752','59','0','2','0','726','126',''),
('16083','sql','1140','62','conditions','f','1','0','774','783','1','1','3','4','784','99',''),
('16084','sql','1140','63','et','f','2','0','792','793','62','7','1','3','794','126',''),
('16085','sql','1140','64','comme','f','3','0','805','809','63','2','1','2','810','69',''),
('16086','sql','1140','65','champ','f','4','0','811','815','64','2','1','1','816','68',''),
('16087','sql','1140','66','T2','c','5','2','818','819','65','0','1','0','816','67',''),
('16088','sql','1140','67','chp_nom_source','c','5','2','823','836','65','0','2','0','816','126',''),
('16089','sql','1140','68',':T2_chp_nom_source','c','4','0','840','857','64','0','2','0','816','126',''),
('16090','sql','1140','69','egal','f','3','0','870','873','63','2','2','2','874','74',''),
('16091','sql','1140','70','champ','f','4','0','875','879','69','2','1','1','880','73',''),
('16092','sql','1140','71','T0','c','5','2','882','883','70','0','1','0','880','72',''),
('16093','sql','1140','72','chx_acces_autorisation','c','5','2','887','908','70','0','2','0','880','126',''),
('16094','sql','1140','73',':T0_chx_acces_autorisation','c','4','0','912','937','69','0','2','0','880','126',''),
('16095','sql','1140','74','egal','f','3','0','950','953','63','2','3','2','954','79',''),
('16096','sql','1140','75','champ','f','4','0','955','959','74','2','1','1','960','78',''),
('16097','sql','1140','76','T0','c','5','2','962','963','75','0','1','0','960','77',''),
('16098','sql','1140','77','chx_source_autorisation','c','5','2','967','989','75','0','2','0','960','126',''),
('16099','sql','1140','78',':T0_chx_source_autorisation','c','4','0','993','1019','74','0','2','0','960','126',''),
('16100','sql','1140','79','comme','f','3','0','1032','1036','63','2','4','2','1037','84',''),
('16101','sql','1140','80','champ','f','4','0','1038','1042','79','2','1','1','1043','83',''),
('16102','sql','1140','81','T1','c','5','2','1045','1046','80','0','1','0','1043','82',''),
('16103','sql','1140','82','chp_nom_acces','c','5','2','1050','1062','80','0','2','0','1043','126',''),
('16104','sql','1140','83',':T1_chp_nom_acces','c','4','0','1066','1082','79','0','2','0','1043','126',''),
('16105','sql','1140','84','egal','f','3','0','1095','1098','63','2','5','2','1099','89',''),
('16106','sql','1140','85','champ','f','4','0','1100','1104','84','2','1','1','1105','88',''),
('16107','sql','1140','86','T0','c','5','2','1107','1108','85','0','1','0','1105','87',''),
('16108','sql','1140','87','che_pour_sous_liste_autorisation','c','5','2','1112','1143','85','0','2','0','1105','126',''),
('16109','sql','1140','88',':T0_che_pour_sous_liste_autorisation','c','4','0','1147','1182','84','0','2','0','1105','126',''),
('16110','sql','1140','89','pas_dans','f','3','0','1195','1202','63','2','6','2','1203','94',''),
('16111','sql','1140','90','champ','f','4','0','1204','1208','89','2','1','1','1209','93',''),
('16112','sql','1140','91','T0','c','5','2','1211','1212','90','0','1','0','1209','92',''),
('16113','sql','1140','92','chx_acces_autorisation','c','5','2','1216','1237','90','0','2','0','1209','126',''),
('16114','sql','1140','93',':acces_pas_dans','c','4','0','1241','1255','89','0','2','0','1209','126',''),
('16115','sql','1140','94','egal','f','3','0','1268','1271','63','2','7','2','1272','126',''),
('16116','sql','1140','95','champ','f','4','0','1273','1277','94','2','1','1','1278','98',''),
('16117','sql','1140','96','T0','c','5','2','1280','1281','95','0','1','0','1278','97',''),
('16118','sql','1140','97','chi_id_autorisation','c','5','2','1285','1303','95','0','2','0','1278','126',''),
('16119','sql','1140','98',':T0_chi_id_autorisation','c','4','0','1307','1329','94','0','2','0','1278','126',''),
('16120','sql','1140','99','complements','f','1','0','1349','1359','1','2','4','4','1360','126',''),
('16121','sql','1140','100','trier_par','f','2','0','1368','1376','99','4','1','3','1377','121',''),
('16122','sql','1140','101','','f','3','0','1368','1376','100','2','1','2','1378','106',''),
('16123','sql','1140','102','champ','f','4','0','1379','1383','101','2','1','1','1384','105',''),
('16124','sql','1140','103','T0','c','5','2','1386','1387','102','0','1','0','1384','104',''),
('16125','sql','1140','104','chx_acces_autorisation','c','5','2','1391','1412','102','0','2','0','1384','126',''),
('16126','sql','1140','105','décroissant','f','4','0','1416','1426','101','0','2','0','1427','126',''),
('16127','sql','1140','106','','f','3','0','1416','1426','100','2','2','2','1431','111',''),
('16128','sql','1140','107','champ','f','4','0','1432','1436','106','2','1','1','1437','110',''),
('16129','sql','1140','108','T2','c','5','2','1439','1440','107','0','1','0','1437','109',''),
('16130','sql','1140','109','chp_nom_source','c','5','2','1444','1457','107','0','2','0','1437','126',''),
('16131','sql','1140','110','croissant','f','4','0','1461','1469','106','0','2','0','1470','126',''),
('16132','sql','1140','111','','f','3','0','1461','1469','100','2','3','2','1474','116',''),
('16133','sql','1140','112','champ','f','4','0','1475','1479','111','2','1','1','1480','115',''),
('16134','sql','1140','113','T0','c','5','2','1482','1483','112','0','1','0','1480','114',''),
('16135','sql','1140','114','chi_id_autorisation','c','5','2','1487','1505','112','0','2','0','1480','126',''),
('16136','sql','1140','115','décroissant','f','4','0','1509','1519','111','0','2','0','1520','126',''),
('16137','sql','1140','116','','f','3','0','1509','1519','100','2','4','2','1524','126',''),
('16138','sql','1140','117','champ','f','4','0','1525','1529','116','2','1','1','1530','120',''),
('16139','sql','1140','118','T2','c','5','2','1532','1533','117','0','1','0','1530','119',''),
('16140','sql','1140','119','chp_nom_source','c','5','2','1537','1550','117','0','2','0','1530','126',''),
('16141','sql','1140','120','croissant','f','4','0','1554','1562','116','0','2','0','1563','126',''),
('16142','sql','1140','121','limité_à','f','2','0','1575','1582','99','2','2','2','1583','126',''),
('16143','sql','1140','122','quantité','f','3','0','1584','1591','121','1','1','1','1592','124',''),
('16144','sql','1140','123',':quantitee','c','4','0','1593','1602','122','0','1','0','1592','126',''),
('16145','sql','1140','124','début','f','3','0','1605','1609','121','1','2','1','1610','126',''),
('16146','sql','1140','125',':debut','c','4','0','1611','1616','124','0','1','0','1610','126',''),
('16147','sql','1139','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16148','sql','1139','1','supprimer','f','0','0','0','8','0','3','1','6','9','16',''),
('16149','sql','1139','2','base_de_reference','f','1','0','14','30','1','1','1','1','31','4',''),
('16150','sql','1139','3','1','c','2','0','32','32','2','0','1','0','31','16',''),
('16151','sql','1139','4','provenance','f','1','0','39','48','1','1','2','5','49','11',''),
('16152','sql','1139','5','table_reference','f','2','0','57','71','4','1','1','4','72','16',''),
('16153','sql','1139','6','source','f','3','0','83','88','5','1','1','3','89','16',''),
('16154','sql','1139','7','nom_de_la_table','f','4','0','90','104','6','2','1','2','105','16',''),
('16155','sql','1139','8','tbl_acces','c','5','0','106','114','7','0','1','0','105','9',''),
('16156','sql','1139','9','base','f','5','0','116','119','7','1','2','1','120','16',''),
('16157','sql','1139','10','b1','c','6','0','121','122','9','0','1','0','120','16',''),
('16158','sql','1139','11','conditions','f','1','0','144','153','1','1','3','3','154','16',''),
('16159','sql','1139','12','egal','f','2','0','155','158','11','2','1','2','159','16',''),
('16160','sql','1139','13','champ','f','3','0','160','164','12','1','1','1','165','15',''),
('16161','sql','1139','14','chi_id_acces','c','4','2','167','178','13','0','1','0','165','16',''),
('16162','sql','1139','15',':chi_id_acces','c','3','0','182','194','12','0','2','0','165','16',''),
('16163','sql','1138','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16164','sql','1138','1','modifier','f','0','0','0','7','0','3','1','6','8','33',''),
('16165','sql','1138','2','valeurs','f','1','0','13','19','1','4','1','3','20','19',''),
('16166','sql','1138','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('16167','sql','1138','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('16168','sql','1138','5','chp_nom_acces','c','4','2','36','48','4','0','1','0','34','33',''),
('16169','sql','1138','6',':n_chp_nom_acces','c','3','0','52','67','3','0','2','0','34','33',''),
('16170','sql','1138','7','affecte','f','2','0','70','76','2','2','2','2','77','11',''),
('16171','sql','1138','8','champ','f','3','0','78','82','7','1','1','1','83','10',''),
('16172','sql','1138','9','che_actif_acces','c','4','2','85','99','8','0','1','0','83','33',''),
('16173','sql','1138','10',':n_che_actif_acces','c','3','0','103','120','7','0','2','0','83','33',''),
('16174','sql','1138','11','affecte','f','2','0','123','129','2','2','3','2','130','15',''),
('16175','sql','1138','12','champ','f','3','0','131','135','11','1','1','1','136','14',''),
('16176','sql','1138','13','chx_groupe_acces','c','4','2','138','153','12','0','1','0','136','33',''),
('16177','sql','1138','14',':n_chx_groupe_acces','c','3','0','157','175','11','0','2','0','136','33',''),
('16178','sql','1138','15','affecte','f','2','0','178','184','2','2','4','2','185','33',''),
('16179','sql','1138','16','champ','f','3','0','186','190','15','1','1','1','191','18',''),
('16180','sql','1138','17','chx_metier_acces','c','4','2','193','208','16','0','1','0','191','33',''),
('16181','sql','1138','18',':n_chx_metier_acces','c','3','0','212','230','15','0','2','0','191','33',''),
('16182','sql','1138','19','provenance','f','1','0','238','247','1','1','2','5','248','28',''),
('16183','sql','1138','20','table_reference','f','2','0','256','270','19','1','1','4','271','33',''),
('16184','sql','1138','21','source','f','3','0','282','287','20','1','1','3','288','33',''),
('16185','sql','1138','22','nom_de_la_table','f','4','0','289','303','21','3','1','2','304','33',''),
('16186','sql','1138','23','tbl_acces','c','5','0','305','313','22','0','1','0','304','24',''),
('16187','sql','1138','24','alias','f','5','0','315','319','22','1','2','1','320','26',''),
('16188','sql','1138','25','T0','c','6','0','321','322','24','0','1','0','320','33',''),
('16189','sql','1138','26','base','f','5','0','325','328','22','1','3','1','329','33',''),
('16190','sql','1138','27','b1','c','6','0','330','331','26','0','1','0','329','33',''),
('16191','sql','1138','28','conditions','f','1','0','353','362','1','1','3','3','363','33',''),
('16192','sql','1138','29','egal','f','2','0','364','367','28','2','1','2','368','33',''),
('16193','sql','1138','30','champ','f','3','0','369','373','29','1','1','1','374','32',''),
('16194','sql','1138','31','chi_id_acces','c','4','2','376','387','30','0','1','0','374','33',''),
('16195','sql','1138','32',':c_chi_id_acces','c','3','0','391','405','29','0','2','0','374','33',''),
('16196','sql','1137','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16197','sql','1137','1','insérer','f','0','0','0','6','0','3','1','6','7','23',''),
('16198','sql','1137','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('16199','sql','1137','3','valeurs','f','1','0','36','42','1','3','2','3','43','16',''),
('16200','sql','1137','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('16201','sql','1137','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('16202','sql','1137','6','chp_nom_acces','c','4','2','59','71','5','0','1','0','57','23',''),
('16203','sql','1137','7',':chp_nom_acces','c','3','0','75','88','4','0','2','0','57','23',''),
('16204','sql','1137','8','affecte','f','2','0','91','97','3','2','2','2','98','12',''),
('16205','sql','1137','9','champ','f','3','0','99','103','8','1','1','1','104','11',''),
('16206','sql','1137','10','chx_groupe_acces','c','4','2','106','121','9','0','1','0','104','23',''),
('16207','sql','1137','11',':chx_groupe_acces','c','3','0','125','141','8','0','2','0','104','23',''),
('16208','sql','1137','12','affecte','f','2','0','144','150','3','2','3','2','151','23',''),
('16209','sql','1137','13','champ','f','3','0','152','156','12','1','1','1','157','15',''),
('16210','sql','1137','14','chx_metier_acces','c','4','2','159','174','13','0','1','0','157','23',''),
('16211','sql','1137','15',':chx_metier_acces','c','3','0','178','194','12','0','2','0','157','23',''),
('16212','sql','1137','16','provenance','f','1','0','202','211','1','1','3','5','212','23',''),
('16213','sql','1137','17','table_reference','f','2','0','220','234','16','1','1','4','235','23',''),
('16214','sql','1137','18','source','f','3','0','246','251','17','1','1','3','252','23',''),
('16215','sql','1137','19','nom_de_la_table','f','4','0','253','267','18','2','1','2','268','23',''),
('16216','sql','1137','20','tbl_acces','c','5','0','269','277','19','0','1','0','268','21',''),
('16217','sql','1137','21','base','f','5','0','279','282','19','1','2','1','283','23',''),
('16218','sql','1137','22','b1','c','6','0','284','285','21','0','1','0','283','23',''),
('16219','sql','1136','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16220','sql','1136','1','sélectionner','f','0','0','0','11','0','3','1','6','12','74',''),
('16221','sql','1136','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('16222','sql','1136','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('16223','sql','1136','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('16224','sql','1136','5','chi_id_acces','c','3','2','44','55','3','0','2','0','37','74',''),
('16225','sql','1136','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('16226','sql','1136','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('16227','sql','1136','8','chp_nom_acces','c','3','2','78','90','6','0','2','0','71','74',''),
('16228','sql','1136','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('16229','sql','1136','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('16230','sql','1136','11','chx_groupe_acces','c','3','2','113','128','9','0','2','0','106','74',''),
('16231','sql','1136','12','champ','f','2','0','139','143','2','2','4','1','144','15',''),
('16232','sql','1136','13','T0','c','3','2','146','147','12','0','1','0','144','14',''),
('16233','sql','1136','14','chx_metier_acces','c','3','2','151','166','12','0','2','0','144','74',''),
('16234','sql','1136','15','champ','f','2','0','177','181','2','2','5','1','182','18',''),
('16235','sql','1136','16','T0','c','3','2','184','185','15','0','1','0','182','17',''),
('16236','sql','1136','17','cht_parametres_acces','c','3','2','189','208','15','0','2','0','182','74',''),
('16237','sql','1136','18','champ','f','2','0','219','223','2','2','6','1','224','21',''),
('16238','sql','1136','19','T1','c','3','2','226','227','18','0','1','0','224','20',''),
('16239','sql','1136','20','chp_nom_groupe','c','3','2','231','244','18','0','2','0','224','74',''),
('16240','sql','1136','21','champ','f','2','0','255','259','2','2','7','1','260','24',''),
('16241','sql','1136','22','T2','c','3','2','262','263','21','0','1','0','260','23',''),
('16242','sql','1136','23','chp_nom_metier','c','3','2','267','280','21','0','2','0','260','74',''),
('16243','sql','1136','24','champ','f','2','0','291','295','2','2','8','1','296','74',''),
('16244','sql','1136','25','T0','c','3','2','298','299','24','0','1','0','296','26',''),
('16245','sql','1136','26','che_actif_acces','c','3','2','303','317','24','0','2','0','296','74',''),
('16246','sql','1136','27','provenance','f','1','0','330','339','1','3','2','5','340','68',''),
('16247','sql','1136','28','table_reference','f','2','0','348','362','27','1','1','4','363','36',''),
('16248','sql','1136','29','source','f','3','0','374','379','28','1','1','3','380','74',''),
('16249','sql','1136','30','nom_de_la_table','f','4','0','381','395','29','3','1','2','396','74',''),
('16250','sql','1136','31','tbl_acces','c','5','0','397','405','30','0','1','0','396','32',''),
('16251','sql','1136','32','alias','f','5','0','407','411','30','1','2','1','412','34',''),
('16252','sql','1136','33','T0','c','6','0','413','414','32','0','1','0','412','74',''),
('16253','sql','1136','34','base','f','5','0','417','420','30','1','3','1','421','74',''),
('16254','sql','1136','35','b1','c','6','0','422','423','34','0','1','0','421','74',''),
('16255','sql','1136','36','jointure_gauche','f','2','0','443','457','27','2','2','4','458','52',''),
('16256','sql','1136','37','source','f','3','0','469','474','36','1','1','3','475','44',''),
('16257','sql','1136','38','nom_de_la_table','f','4','0','476','490','37','3','1','2','491','74',''),
('16258','sql','1136','39','tbl_groupes','c','5','0','492','502','38','0','1','0','491','40',''),
('16259','sql','1136','40','alias','f','5','0','504','508','38','1','2','1','509','42',''),
('16260','sql','1136','41','T1','c','6','0','510','511','40','0','1','0','509','74',''),
('16261','sql','1136','42','base','f','5','0','514','517','38','1','3','1','518','74',''),
('16262','sql','1136','43','b1','c','6','0','519','520','42','0','1','0','518','74',''),
('16263','sql','1136','44','contrainte','f','3','0','535','544','36','1','2','3','545','74',''),
('16264','sql','1136','45','egal','f','4','0','546','549','44','2','1','2','550','74',''),
('16265','sql','1136','46','champ','f','5','0','551','555','45','2','1','1','556','49',''),
('16266','sql','1136','47','T1','c','6','0','557','558','46','0','1','0','556','48',''),
('16267','sql','1136','48','chi_id_groupe','c','6','0','560','572','46','0','2','0','556','74',''),
('16268','sql','1136','49','champ','f','5','0','575','579','45','2','2','1','580','74',''),
('16269','sql','1136','50','T0','c','6','0','581','582','49','0','1','0','580','51',''),
('16270','sql','1136','51','chx_groupe_acces','c','6','0','584','599','49','0','2','0','580','74',''),
('16271','sql','1136','52','jointure_gauche','f','2','0','619','633','27','2','3','4','634','74',''),
('16272','sql','1136','53','source','f','3','0','645','650','52','1','1','3','651','60',''),
('16273','sql','1136','54','nom_de_la_table','f','4','0','652','666','53','3','1','2','667','74',''),
('16274','sql','1136','55','tbl_metiers','c','5','0','668','678','54','0','1','0','667','56',''),
('16275','sql','1136','56','alias','f','5','0','680','684','54','1','2','1','685','58',''),
('16276','sql','1136','57','T2','c','6','0','686','687','56','0','1','0','685','74',''),
('16277','sql','1136','58','base','f','5','0','690','693','54','1','3','1','694','74',''),
('16278','sql','1136','59','b1','c','6','0','695','696','58','0','1','0','694','74',''),
('16279','sql','1136','60','contrainte','f','3','0','711','720','52','1','2','3','721','74',''),
('16280','sql','1136','61','egal','f','4','0','722','725','60','2','1','2','726','74',''),
('16281','sql','1136','62','champ','f','5','0','727','731','61','2','1','1','732','65',''),
('16282','sql','1136','63','T2','c','6','0','733','734','62','0','1','0','732','64',''),
('16283','sql','1136','64','chi_id_metier','c','6','0','736','748','62','0','2','0','732','74',''),
('16284','sql','1136','65','champ','f','5','0','751','755','61','2','2','1','756','74',''),
('16285','sql','1136','66','T0','c','6','0','757','758','65','0','1','0','756','67',''),
('16286','sql','1136','67','chx_metier_acces','c','6','0','760','775','65','0','2','0','756','74',''),
('16287','sql','1136','68','conditions','f','1','0','797','806','1','1','3','3','807','74',''),
('16288','sql','1136','69','egal','f','2','0','808','811','68','2','1','2','812','74',''),
('16289','sql','1136','70','champ','f','3','0','813','817','69','2','1','1','818','73',''),
('16290','sql','1136','71','T0','c','4','2','820','821','70','0','1','0','818','72',''),
('16291','sql','1136','72','chi_id_acces','c','4','2','825','836','70','0','2','0','818','74',''),
('16292','sql','1136','73',':T0_chi_id_acces','c','3','0','840','855','69','0','2','0','818','74',''),
('16293','sql','1135','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16294','sql','1135','1','sélectionner','f','0','0','0','11','0','4','1','6','12','119',''),
('16295','sql','1135','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('16296','sql','1135','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('16297','sql','1135','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('16298','sql','1135','5','chi_id_acces','c','3','2','44','55','3','0','2','0','37','119',''),
('16299','sql','1135','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('16300','sql','1135','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('16301','sql','1135','8','chp_nom_acces','c','3','2','78','90','6','0','2','0','71','119',''),
('16302','sql','1135','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('16303','sql','1135','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('16304','sql','1135','11','che_actif_acces','c','3','2','113','127','9','0','2','0','106','119',''),
('16305','sql','1135','12','champ','f','2','0','138','142','2','2','4','1','143','15',''),
('16306','sql','1135','13','T0','c','3','2','145','146','12','0','1','0','143','14',''),
('16307','sql','1135','14','chx_groupe_acces','c','3','2','150','165','12','0','2','0','143','119',''),
('16308','sql','1135','15','champ','f','2','0','176','180','2','2','5','1','181','18',''),
('16309','sql','1135','16','T0','c','3','2','183','184','15','0','1','0','181','17',''),
('16310','sql','1135','17','chx_metier_acces','c','3','2','188','203','15','0','2','0','181','119',''),
('16311','sql','1135','18','champ','f','2','0','214','218','2','2','6','1','219','21',''),
('16312','sql','1135','19','T1','c','3','2','221','222','18','0','1','0','219','20',''),
('16313','sql','1135','20','chp_nom_groupe','c','3','2','226','239','18','0','2','0','219','119',''),
('16314','sql','1135','21','champ','f','2','0','250','254','2','2','7','1','255','119',''),
('16315','sql','1135','22','T2','c','3','2','257','258','21','0','1','0','255','23',''),
('16316','sql','1135','23','chp_nom_metier','c','3','2','262','275','21','0','2','0','255','119',''),
('16317','sql','1135','24','provenance','f','1','0','288','297','1','3','2','5','298','65',''),
('16318','sql','1135','25','table_reference','f','2','0','306','320','24','1','1','4','321','33',''),
('16319','sql','1135','26','source','f','3','0','332','337','25','1','1','3','338','119',''),
('16320','sql','1135','27','nom_de_la_table','f','4','0','339','353','26','3','1','2','354','119',''),
('16321','sql','1135','28','tbl_acces','c','5','0','355','363','27','0','1','0','354','29',''),
('16322','sql','1135','29','alias','f','5','0','365','369','27','1','2','1','370','31',''),
('16323','sql','1135','30','T0','c','6','0','371','372','29','0','1','0','370','119',''),
('16324','sql','1135','31','base','f','5','0','375','378','27','1','3','1','379','119',''),
('16325','sql','1135','32','b1','c','6','0','380','381','31','0','1','0','379','119',''),
('16326','sql','1135','33','jointure_gauche','f','2','0','401','415','24','2','2','4','416','49',''),
('16327','sql','1135','34','source','f','3','0','427','432','33','1','1','3','433','41',''),
('16328','sql','1135','35','nom_de_la_table','f','4','0','434','448','34','3','1','2','449','119',''),
('16329','sql','1135','36','tbl_groupes','c','5','0','450','460','35','0','1','0','449','37',''),
('16330','sql','1135','37','alias','f','5','0','462','466','35','1','2','1','467','39',''),
('16331','sql','1135','38','T1','c','6','0','468','469','37','0','1','0','467','119',''),
('16332','sql','1135','39','base','f','5','0','472','475','35','1','3','1','476','119',''),
('16333','sql','1135','40','b1','c','6','0','477','478','39','0','1','0','476','119',''),
('16334','sql','1135','41','contrainte','f','3','0','493','502','33','1','2','3','503','119',''),
('16335','sql','1135','42','egal','f','4','0','504','507','41','2','1','2','508','119',''),
('16336','sql','1135','43','champ','f','5','0','509','513','42','2','1','1','514','46',''),
('16337','sql','1135','44','T1','c','6','0','515','516','43','0','1','0','514','45',''),
('16338','sql','1135','45','chi_id_groupe','c','6','0','518','530','43','0','2','0','514','119',''),
('16339','sql','1135','46','champ','f','5','0','533','537','42','2','2','1','538','119',''),
('16340','sql','1135','47','T0','c','6','0','539','540','46','0','1','0','538','48',''),
('16341','sql','1135','48','chx_groupe_acces','c','6','0','542','557','46','0','2','0','538','119',''),
('16342','sql','1135','49','jointure_gauche','f','2','0','577','591','24','2','3','4','592','119',''),
('16343','sql','1135','50','source','f','3','0','603','608','49','1','1','3','609','57',''),
('16344','sql','1135','51','nom_de_la_table','f','4','0','610','624','50','3','1','2','625','119',''),
('16345','sql','1135','52','tbl_metiers','c','5','0','626','636','51','0','1','0','625','53',''),
('16346','sql','1135','53','alias','f','5','0','638','642','51','1','2','1','643','55',''),
('16347','sql','1135','54','T2','c','6','0','644','645','53','0','1','0','643','119',''),
('16348','sql','1135','55','base','f','5','0','648','651','51','1','3','1','652','119',''),
('16349','sql','1135','56','b1','c','6','0','653','654','55','0','1','0','652','119',''),
('16350','sql','1135','57','contrainte','f','3','0','669','678','49','1','2','3','679','119',''),
('16351','sql','1135','58','egal','f','4','0','680','683','57','2','1','2','684','119',''),
('16352','sql','1135','59','champ','f','5','0','685','689','58','2','1','1','690','62',''),
('16353','sql','1135','60','T2','c','6','0','691','692','59','0','1','0','690','61',''),
('16354','sql','1135','61','chi_id_metier','c','6','0','694','706','59','0','2','0','690','119',''),
('16355','sql','1135','62','champ','f','5','0','709','713','58','2','2','1','714','119',''),
('16356','sql','1135','63','T0','c','6','0','715','716','62','0','1','0','714','64',''),
('16357','sql','1135','64','chx_metier_acces','c','6','0','718','733','62','0','2','0','714','119',''),
('16358','sql','1135','65','conditions','f','1','0','755','764','1','1','3','4','765','107',''),
('16359','sql','1135','66','et','f','2','0','773','774','65','8','1','3','775','119',''),
('16360','sql','1135','67','egal','f','3','0','786','789','66','2','1','2','790','72',''),
('16361','sql','1135','68','champ','f','4','0','791','795','67','2','1','1','796','71',''),
('16362','sql','1135','69','T0','c','5','2','798','799','68','0','1','0','796','70',''),
('16363','sql','1135','70','chi_id_acces','c','5','2','803','814','68','0','2','0','796','119',''),
('16364','sql','1135','71',':T0_chi_id_acces','c','4','0','818','833','67','0','2','0','796','119',''),
('16365','sql','1135','72','comme','f','3','0','846','850','66','2','2','2','851','77',''),
('16366','sql','1135','73','champ','f','4','0','852','856','72','2','1','1','857','76',''),
('16367','sql','1135','74','T0','c','5','2','859','860','73','0','1','0','857','75',''),
('16368','sql','1135','75','chp_nom_acces','c','5','2','864','876','73','0','2','0','857','119',''),
('16369','sql','1135','76',':T0_chp_nom_acces','c','4','0','880','896','72','0','2','0','857','119',''),
('16370','sql','1135','77','egal','f','3','0','909','912','66','2','3','2','913','82',''),
('16371','sql','1135','78','champ','f','4','0','914','918','77','2','1','1','919','81',''),
('16372','sql','1135','79','T0','c','5','2','921','922','78','0','1','0','919','80',''),
('16373','sql','1135','80','che_actif_acces','c','5','2','926','940','78','0','2','0','919','119',''),
('16374','sql','1135','81',':T0_che_actif_acces','c','4','0','944','962','77','0','2','0','919','119',''),
('16375','sql','1135','82','egal','f','3','0','975','978','66','2','4','2','979','87',''),
('16376','sql','1135','83','champ','f','4','0','980','984','82','2','1','1','985','86',''),
('16377','sql','1135','84','T0','c','5','2','987','988','83','0','1','0','985','85',''),
('16378','sql','1135','85','chx_groupe_acces','c','5','2','992','1007','83','0','2','0','985','119',''),
('16379','sql','1135','86',':T0_chx_groupe_acces','c','4','0','1011','1030','82','0','2','0','985','119',''),
('16380','sql','1135','87','comme','f','3','0','1043','1047','66','2','5','2','1048','92',''),
('16381','sql','1135','88','champ','f','4','0','1049','1053','87','2','1','1','1054','91',''),
('16382','sql','1135','89','T1','c','5','2','1056','1057','88','0','1','0','1054','90',''),
('16383','sql','1135','90','chp_nom_groupe','c','5','2','1061','1074','88','0','2','0','1054','119',''),
('16384','sql','1135','91',':T1_chp_nom_groupe','c','4','0','1078','1095','87','0','2','0','1054','119',''),
('16385','sql','1135','92','egal','f','3','0','1108','1111','66','2','6','2','1112','97',''),
('16386','sql','1135','93','champ','f','4','0','1113','1117','92','2','1','1','1118','96',''),
('16387','sql','1135','94','T0','c','5','2','1120','1121','93','0','1','0','1118','95',''),
('16388','sql','1135','95','chx_metier_acces','c','5','2','1125','1140','93','0','2','0','1118','119',''),
('16389','sql','1135','96',':T0_chx_metier_acces','c','4','0','1144','1163','92','0','2','0','1118','119',''),
('16390','sql','1135','97','comme','f','3','0','1176','1180','66','2','7','2','1181','102',''),
('16391','sql','1135','98','champ','f','4','0','1182','1186','97','2','1','1','1187','101',''),
('16392','sql','1135','99','T2','c','5','2','1189','1190','98','0','1','0','1187','100',''),
('16393','sql','1135','100','chp_nom_metier','c','5','2','1194','1207','98','0','2','0','1187','119',''),
('16394','sql','1135','101',':T2_chp_nom_metier','c','4','0','1211','1228','97','0','2','0','1187','119',''),
('16395','sql','1135','102','pas_dans','f','3','0','1241','1248','66','2','8','2','1249','119',''),
('16396','sql','1135','103','champ','f','4','0','1250','1254','102','2','1','1','1255','106',''),
('16397','sql','1135','104','T0','c','5','2','1257','1258','103','0','1','0','1255','105',''),
('16398','sql','1135','105','chi_id_acces','c','5','2','1262','1273','103','0','2','0','1255','119',''),
('16399','sql','1135','106',':acces_pas_dans','c','4','0','1277','1291','102','0','2','0','1255','119',''),
('16400','sql','1135','107','complements','f','1','0','1311','1321','1','2','4','4','1322','119',''),
('16401','sql','1135','108','trier_par','f','2','0','1330','1338','107','1','1','3','1339','114',''),
('16402','sql','1135','109','','f','3','0','1330','1338','108','2','1','2','1340','119',''),
('16403','sql','1135','110','champ','f','4','0','1341','1345','109','2','1','1','1346','113',''),
('16404','sql','1135','111','T0','c','5','2','1348','1349','110','0','1','0','1346','112',''),
('16405','sql','1135','112','chi_id_acces','c','5','2','1353','1364','110','0','2','0','1346','119',''),
('16406','sql','1135','113','décroissant','f','4','0','1368','1378','109','0','2','0','1379','119',''),
('16407','sql','1135','114','limité_à','f','2','0','1391','1398','107','2','2','2','1399','119',''),
('16408','sql','1135','115','quantité','f','3','0','1400','1407','114','1','1','1','1408','117',''),
('16409','sql','1135','116',':quantitee','c','4','0','1409','1418','115','0','1','0','1408','119',''),
('16410','sql','1135','117','début','f','3','0','1421','1425','114','1','2','1','1426','119',''),
('16411','sql','1135','118',':debut','c','4','0','1427','1432','117','0','1','0','1426','119',''),
('16412','sql','1134','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16413','sql','1134','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('16414','sql','1134','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('16415','sql','1134','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('16416','sql','1134','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('16417','sql','1134','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('16418','sql','1134','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('16419','sql','1134','7','tbl_groupes','c','5','0','105','115','6','0','1','0','104','8',''),
('16420','sql','1134','8','base','f','5','0','117','120','6','1','2','1','121','15',''),
('16421','sql','1134','9','b1','c','6','0','122','123','8','0','1','0','121','15','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 2000 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 3000 (3986) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('16422','sql','1134','10','conditions','f','1','0','145','154','1','1','3','3','155','15',''),
('16423','sql','1134','11','egal','f','2','0','156','159','10','2','1','2','160','15',''),
('16424','sql','1134','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('16425','sql','1134','13','chi_id_groupe','c','4','2','168','180','12','0','1','0','166','15',''),
('16426','sql','1134','14',':chi_id_groupe','c','3','0','184','197','11','0','2','0','166','15',''),
('16427','sql','1133','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16428','sql','1133','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('16429','sql','1133','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('16430','sql','1133','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('16431','sql','1133','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('16432','sql','1133','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('16433','sql','1133','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('16434','sql','1133','7','chp_nom_groupe','c','4','2','61','74','6','0','1','0','59','25',''),
('16435','sql','1133','8',':n_chp_nom_groupe','c','3','0','78','94','5','0','2','0','59','25',''),
('16436','sql','1133','9','affecte','f','2','0','97','103','4','2','2','2','104','25',''),
('16437','sql','1133','10','champ','f','3','0','105','109','9','1','1','1','110','12',''),
('16438','sql','1133','11','chx_parent_groupe','c','4','2','112','128','10','0','1','0','110','25',''),
('16439','sql','1133','12',':n_chx_parent_groupe','c','3','0','132','151','9','0','2','0','110','25',''),
('16440','sql','1133','13','provenance','f','1','0','159','168','1','1','3','5','169','20',''),
('16441','sql','1133','14','table_reference','f','2','0','177','191','13','1','1','4','192','25',''),
('16442','sql','1133','15','source','f','3','0','203','208','14','1','1','3','209','25',''),
('16443','sql','1133','16','nom_de_la_table','f','4','0','210','224','15','2','1','2','225','25',''),
('16444','sql','1133','17','tbl_groupes','c','5','0','226','236','16','0','1','0','225','18',''),
('16445','sql','1133','18','base','f','5','0','238','241','16','1','2','1','242','25',''),
('16446','sql','1133','19','b1','c','6','0','243','244','18','0','1','0','242','25',''),
('16447','sql','1133','20','conditions','f','1','0','266','275','1','1','4','3','276','25',''),
('16448','sql','1133','21','egal','f','2','0','277','280','20','2','1','2','281','25',''),
('16449','sql','1133','22','champ','f','3','0','282','286','21','1','1','1','287','24',''),
('16450','sql','1133','23','chi_id_groupe','c','4','2','289','301','22','0','1','0','287','25',''),
('16451','sql','1133','24',':c_chi_id_groupe','c','3','0','305','320','21','0','2','0','287','25',''),
('16452','sql','1132','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16453','sql','1132','1','insérer','f','0','0','0','6','0','3','1','6','7','19',''),
('16454','sql','1132','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('16455','sql','1132','3','valeurs','f','1','0','36','42','1','2','2','3','43','12',''),
('16456','sql','1132','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('16457','sql','1132','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('16458','sql','1132','6','chp_nom_groupe','c','4','2','59','72','5','0','1','0','57','19',''),
('16459','sql','1132','7',':chp_nom_groupe','c','3','0','76','90','4','0','2','0','57','19',''),
('16460','sql','1132','8','affecte','f','2','0','93','99','3','2','2','2','100','19',''),
('16461','sql','1132','9','champ','f','3','0','101','105','8','1','1','1','106','11',''),
('16462','sql','1132','10','chx_parent_groupe','c','4','2','108','124','9','0','1','0','106','19',''),
('16463','sql','1132','11',':chx_parent_groupe','c','3','0','128','145','8','0','2','0','106','19',''),
('16464','sql','1132','12','provenance','f','1','0','153','162','1','1','3','5','163','19',''),
('16465','sql','1132','13','table_reference','f','2','0','171','185','12','1','1','4','186','19',''),
('16466','sql','1132','14','source','f','3','0','197','202','13','1','1','3','203','19',''),
('16467','sql','1132','15','nom_de_la_table','f','4','0','204','218','14','2','1','2','219','19',''),
('16468','sql','1132','16','tbl_groupes','c','5','0','220','230','15','0','1','0','219','17',''),
('16469','sql','1132','17','base','f','5','0','232','235','15','1','2','1','236','19',''),
('16470','sql','1132','18','b1','c','6','0','237','238','17','0','1','0','236','19',''),
('16471','sql','1131','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16472','sql','1131','1','sélectionner','f','0','0','0','11','0','4','1','6','12','48',''),
('16473','sql','1131','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('16474','sql','1131','3','1','c','2','0','35','35','2','0','1','0','34','48',''),
('16475','sql','1131','4','valeurs','f','1','0','42','48','1','4','2','2','49','17',''),
('16476','sql','1131','5','champ','f','2','0','50','54','4','2','1','1','55','8',''),
('16477','sql','1131','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('16478','sql','1131','7','chi_id_groupe','c','3','2','62','74','5','0','2','0','55','48',''),
('16479','sql','1131','8','champ','f','2','0','78','82','4','2','2','1','83','11',''),
('16480','sql','1131','9','T0','c','3','2','85','86','8','0','1','0','83','10',''),
('16481','sql','1131','10','chp_nom_groupe','c','3','2','90','103','8','0','2','0','83','48',''),
('16482','sql','1131','11','champ','f','2','0','107','111','4','2','3','1','112','14',''),
('16483','sql','1131','12','T0','c','3','2','114','115','11','0','1','0','112','13',''),
('16484','sql','1131','13','chx_parent_groupe','c','3','2','119','135','11','0','2','0','112','48',''),
('16485','sql','1131','14','champ','f','2','0','139','143','4','2','4','1','144','48',''),
('16486','sql','1131','15','T1','c','3','2','146','147','14','0','1','0','144','16',''),
('16487','sql','1131','16','chp_nom_groupe','c','3','2','151','164','14','0','2','0','144','48',''),
('16488','sql','1131','17','provenance','f','1','0','173','182','1','2','3','5','183','42',''),
('16489','sql','1131','18','table_reference','f','2','0','191','205','17','1','1','4','206','26',''),
('16490','sql','1131','19','source','f','3','0','217','222','18','1','1','3','223','48',''),
('16491','sql','1131','20','nom_de_la_table','f','4','0','224','238','19','3','1','2','239','48',''),
('16492','sql','1131','21','tbl_groupes','c','5','0','240','250','20','0','1','0','239','22',''),
('16493','sql','1131','22','alias','f','5','0','252','256','20','1','2','1','257','24',''),
('16494','sql','1131','23','T0','c','6','0','258','259','22','0','1','0','257','48',''),
('16495','sql','1131','24','base','f','5','0','262','265','20','1','3','1','266','48',''),
('16496','sql','1131','25','b1','c','6','0','267','268','24','0','1','0','266','48',''),
('16497','sql','1131','26','jointure_gauche','f','2','0','288','302','17','2','2','4','303','48',''),
('16498','sql','1131','27','source','f','3','0','314','319','26','1','1','3','320','34',''),
('16499','sql','1131','28','nom_de_la_table','f','4','0','321','335','27','3','1','2','336','48',''),
('16500','sql','1131','29','tbl_groupes','c','5','0','337','347','28','0','1','0','336','30',''),
('16501','sql','1131','30','alias','f','5','0','349','353','28','1','2','1','354','32',''),
('16502','sql','1131','31','T1','c','6','0','355','356','30','0','1','0','354','48',''),
('16503','sql','1131','32','base','f','5','0','359','362','28','1','3','1','363','48',''),
('16504','sql','1131','33','b1','c','6','0','364','365','32','0','1','0','363','48',''),
('16505','sql','1131','34','contrainte','f','3','0','380','389','26','1','2','3','390','48',''),
('16506','sql','1131','35','egal','f','4','0','391','394','34','2','1','2','395','48',''),
('16507','sql','1131','36','champ','f','5','0','396','400','35','2','1','1','401','39',''),
('16508','sql','1131','37','T1','c','6','0','402','403','36','0','1','0','401','38',''),
('16509','sql','1131','38','chi_id_groupe','c','6','0','405','417','36','0','2','0','401','48',''),
('16510','sql','1131','39','champ','f','5','0','420','424','35','2','2','1','425','48',''),
('16511','sql','1131','40','T0','c','6','0','426','427','39','0','1','0','425','41',''),
('16512','sql','1131','41','chx_parent_groupe','c','6','0','429','445','39','0','2','0','425','48',''),
('16513','sql','1131','42','conditions','f','1','0','467','476','1','1','4','3','477','48',''),
('16514','sql','1131','43','egal','f','2','0','478','481','42','2','1','2','482','48',''),
('16515','sql','1131','44','champ','f','3','0','483','487','43','2','1','1','488','47',''),
('16516','sql','1131','45','T0','c','4','2','490','491','44','0','1','0','488','46',''),
('16517','sql','1131','46','chi_id_groupe','c','4','2','495','507','44','0','2','0','488','48',''),
('16518','sql','1131','47',':T0_chi_id_groupe','c','3','0','511','527','43','0','2','0','488','48',''),
('16519','sql','1130','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16520','sql','1130','1','sélectionner','f','0','0','0','11','0','4','1','6','12','79',''),
('16521','sql','1130','2','valeurs','f','1','0','17','23','1','4','1','2','24','15',''),
('16522','sql','1130','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('16523','sql','1130','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('16524','sql','1130','5','chi_id_groupe','c','3','2','37','49','3','0','2','0','30','79',''),
('16525','sql','1130','6','champ','f','2','0','53','57','2','2','2','1','58','9',''),
('16526','sql','1130','7','T0','c','3','2','60','61','6','0','1','0','58','8',''),
('16527','sql','1130','8','chp_nom_groupe','c','3','2','65','78','6','0','2','0','58','79',''),
('16528','sql','1130','9','champ','f','2','0','82','86','2','2','3','1','87','12',''),
('16529','sql','1130','10','T0','c','3','2','89','90','9','0','1','0','87','11',''),
('16530','sql','1130','11','chx_parent_groupe','c','3','2','94','110','9','0','2','0','87','79',''),
('16531','sql','1130','12','champ','f','2','0','114','118','2','2','4','1','119','79',''),
('16532','sql','1130','13','T1','c','3','2','121','122','12','0','1','0','119','14',''),
('16533','sql','1130','14','chp_nom_groupe','c','3','2','126','139','12','0','2','0','119','79',''),
('16534','sql','1130','15','provenance','f','1','0','148','157','1','2','2','5','158','40',''),
('16535','sql','1130','16','table_reference','f','2','0','166','180','15','1','1','4','181','24',''),
('16536','sql','1130','17','source','f','3','0','192','197','16','1','1','3','198','79',''),
('16537','sql','1130','18','nom_de_la_table','f','4','0','199','213','17','3','1','2','214','79',''),
('16538','sql','1130','19','tbl_groupes','c','5','0','215','225','18','0','1','0','214','20',''),
('16539','sql','1130','20','alias','f','5','0','227','231','18','1','2','1','232','22',''),
('16540','sql','1130','21','T0','c','6','0','233','234','20','0','1','0','232','79',''),
('16541','sql','1130','22','base','f','5','0','237','240','18','1','3','1','241','79',''),
('16542','sql','1130','23','b1','c','6','0','242','243','22','0','1','0','241','79',''),
('16543','sql','1130','24','jointure_gauche','f','2','0','263','277','15','2','2','4','278','79',''),
('16544','sql','1130','25','source','f','3','0','289','294','24','1','1','3','295','32',''),
('16545','sql','1130','26','nom_de_la_table','f','4','0','296','310','25','3','1','2','311','79',''),
('16546','sql','1130','27','tbl_groupes','c','5','0','312','322','26','0','1','0','311','28',''),
('16547','sql','1130','28','alias','f','5','0','324','328','26','1','2','1','329','30',''),
('16548','sql','1130','29','T1','c','6','0','330','331','28','0','1','0','329','79',''),
('16549','sql','1130','30','base','f','5','0','334','337','26','1','3','1','338','79',''),
('16550','sql','1130','31','b1','c','6','0','339','340','30','0','1','0','338','79',''),
('16551','sql','1130','32','contrainte','f','3','0','355','364','24','1','2','3','365','79',''),
('16552','sql','1130','33','egal','f','4','0','366','369','32','2','1','2','370','79',''),
('16553','sql','1130','34','champ','f','5','0','371','375','33','2','1','1','376','37',''),
('16554','sql','1130','35','T1','c','6','0','377','378','34','0','1','0','376','36',''),
('16555','sql','1130','36','chi_id_groupe','c','6','0','380','392','34','0','2','0','376','79',''),
('16556','sql','1130','37','champ','f','5','0','395','399','33','2','2','1','400','79',''),
('16557','sql','1130','38','T0','c','6','0','401','402','37','0','1','0','400','39',''),
('16558','sql','1130','39','chx_parent_groupe','c','6','0','404','420','37','0','2','0','400','79',''),
('16559','sql','1130','40','conditions','f','1','0','442','451','1','1','3','4','452','67',''),
('16560','sql','1130','41','et','f','2','0','460','461','40','5','1','3','462','79',''),
('16561','sql','1130','42','egal','f','3','0','473','476','41','2','1','2','477','47',''),
('16562','sql','1130','43','champ','f','4','0','478','482','42','2','1','1','483','46',''),
('16563','sql','1130','44','T0','c','5','2','485','486','43','0','1','0','483','45',''),
('16564','sql','1130','45','chi_id_groupe','c','5','2','490','502','43','0','2','0','483','79',''),
('16565','sql','1130','46',':T0_chi_id_groupe','c','4','0','506','522','42','0','2','0','483','79',''),
('16566','sql','1130','47','comme','f','3','0','535','539','41','2','2','2','540','52',''),
('16567','sql','1130','48','champ','f','4','0','541','545','47','2','1','1','546','51',''),
('16568','sql','1130','49','T0','c','5','2','548','549','48','0','1','0','546','50',''),
('16569','sql','1130','50','chp_nom_groupe','c','5','2','553','566','48','0','2','0','546','79',''),
('16570','sql','1130','51',':T0_chp_nom_groupe','c','4','0','570','587','47','0','2','0','546','79',''),
('16571','sql','1130','52','egal','f','3','0','600','603','41','2','3','2','604','57',''),
('16572','sql','1130','53','champ','f','4','0','605','609','52','2','1','1','610','56',''),
('16573','sql','1130','54','T0','c','5','2','612','613','53','0','1','0','610','55',''),
('16574','sql','1130','55','chx_parent_groupe','c','5','2','617','633','53','0','2','0','610','79',''),
('16575','sql','1130','56',':T0_chx_parent_groupe','c','4','0','637','657','52','0','2','0','610','79',''),
('16576','sql','1130','57','comme','f','3','0','670','674','41','2','4','2','675','62',''),
('16577','sql','1130','58','champ','f','4','0','676','680','57','2','1','1','681','61',''),
('16578','sql','1130','59','T1','c','5','2','683','684','58','0','1','0','681','60',''),
('16579','sql','1130','60','chp_nom_groupe','c','5','2','688','701','58','0','2','0','681','79',''),
('16580','sql','1130','61',':T1_chp_nom_groupe','c','4','0','705','722','57','0','2','0','681','79',''),
('16581','sql','1130','62','supegal','f','3','0','735','741','41','2','5','2','742','79',''),
('16582','sql','1130','63','champ','f','4','0','743','747','62','2','1','1','748','66',''),
('16583','sql','1130','64','T0','c','5','2','750','751','63','0','1','0','748','65',''),
('16584','sql','1130','65','chi_id_groupe','c','5','2','755','767','63','0','2','0','748','79',''),
('16585','sql','1130','66',':groupe_mini','c','4','0','771','782','62','0','2','0','748','79',''),
('16586','sql','1130','67','complements','f','1','0','802','812','1','2','4','4','813','79',''),
('16587','sql','1130','68','trier_par','f','2','0','821','829','67','1','1','3','830','74',''),
('16588','sql','1130','69','','f','3','0','821','829','68','2','1','2','831','79',''),
('16589','sql','1130','70','champ','f','4','0','832','836','69','2','1','1','837','73',''),
('16590','sql','1130','71','T0','c','5','2','839','840','70','0','1','0','837','72',''),
('16591','sql','1130','72','chi_id_groupe','c','5','2','844','856','70','0','2','0','837','79',''),
('16592','sql','1130','73','décroissant','f','4','0','860','870','69','0','2','0','871','79',''),
('16593','sql','1130','74','limité_à','f','2','0','883','890','67','2','2','2','891','79',''),
('16594','sql','1130','75','quantité','f','3','0','892','899','74','1','1','1','900','77',''),
('16595','sql','1130','76',':quantitee','c','4','0','901','910','75','0','1','0','900','79',''),
('16596','sql','1130','77','début','f','3','0','913','917','74','1','2','1','918','79',''),
('16597','sql','1130','78',':debut','c','4','0','919','924','77','0','1','0','918','79',''),
('16598','sql','1129','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16599','sql','1129','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('16600','sql','1129','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('16601','sql','1129','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('16602','sql','1129','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('16603','sql','1129','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('16604','sql','1129','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('16605','sql','1129','7','tbl_metiers','c','5','0','105','115','6','0','1','0','104','8',''),
('16606','sql','1129','8','base','f','5','0','117','120','6','1','2','1','121','15',''),
('16607','sql','1129','9','b1','c','6','0','122','123','8','0','1','0','121','15',''),
('16608','sql','1129','10','conditions','f','1','0','145','154','1','1','3','3','155','15',''),
('16609','sql','1129','11','egal','f','2','0','156','159','10','2','1','2','160','15',''),
('16610','sql','1129','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('16611','sql','1129','13','chi_id_metier','c','4','2','168','180','12','0','1','0','166','15',''),
('16612','sql','1129','14',':chi_id_metier','c','3','0','184','197','11','0','2','0','166','15',''),
('16613','sql','1127','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16614','sql','1127','1','modifier','f','0','0','0','7','0','3','1','6','8','23',''),
('16615','sql','1127','2','valeurs','f','1','0','14','20','1','2','1','3','21','11',''),
('16616','sql','1127','3','affecte','f','2','0','22','28','2','2','1','2','29','7',''),
('16617','sql','1127','4','champ','f','3','0','30','34','3','1','1','1','35','6',''),
('16618','sql','1127','5','chp_nom_metier','c','4','2','37','50','4','0','1','0','35','23',''),
('16619','sql','1127','6',':n_chp_nom_metier','c','3','0','54','70','3','0','2','0','35','23',''),
('16620','sql','1127','7','affecte','f','2','0','73','79','2','2','2','2','80','23',''),
('16621','sql','1127','8','champ','f','3','0','81','85','7','1','1','1','86','10',''),
('16622','sql','1127','9','chx_parent_metier','c','4','2','88','104','8','0','1','0','86','23',''),
('16623','sql','1127','10',':n_chx_parent_metier','c','3','0','108','127','7','0','2','0','86','23',''),
('16624','sql','1127','11','provenance','f','1','0','135','144','1','1','2','5','145','18',''),
('16625','sql','1127','12','table_reference','f','2','0','153','167','11','1','1','4','168','23',''),
('16626','sql','1127','13','source','f','3','0','179','184','12','1','1','3','185','23',''),
('16627','sql','1127','14','nom_de_la_table','f','4','0','186','200','13','2','1','2','201','23',''),
('16628','sql','1127','15','tbl_metiers','c','5','0','202','212','14','0','1','0','201','16',''),
('16629','sql','1127','16','base','f','5','0','214','217','14','1','2','1','218','23',''),
('16630','sql','1127','17','b1','c','6','0','219','220','16','0','1','0','218','23',''),
('16631','sql','1127','18','conditions','f','1','0','242','251','1','1','3','3','252','23',''),
('16632','sql','1127','19','egal','f','2','0','253','256','18','2','1','2','257','23',''),
('16633','sql','1127','20','champ','f','3','0','258','262','19','1','1','1','263','22',''),
('16634','sql','1127','21','chi_id_metier','c','4','2','265','277','20','0','1','0','263','23',''),
('16635','sql','1127','22',':c_chi_id_metier','c','3','0','281','296','19','0','2','0','263','23',''),
('16636','sql','1126','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16637','sql','1126','1','insérer','f','0','0','0','6','0','3','1','6','7','19',''),
('16638','sql','1126','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('16639','sql','1126','3','valeurs','f','1','0','36','42','1','2','2','3','43','12',''),
('16640','sql','1126','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('16641','sql','1126','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('16642','sql','1126','6','chp_nom_metier','c','4','2','59','72','5','0','1','0','57','19',''),
('16643','sql','1126','7',':chp_nom_metier','c','3','0','76','90','4','0','2','0','57','19',''),
('16644','sql','1126','8','affecte','f','2','0','93','99','3','2','2','2','100','19',''),
('16645','sql','1126','9','champ','f','3','0','101','105','8','1','1','1','106','11',''),
('16646','sql','1126','10','chx_parent_metier','c','4','2','108','124','9','0','1','0','106','19',''),
('16647','sql','1126','11',':chx_parent_metier','c','3','0','128','145','8','0','2','0','106','19',''),
('16648','sql','1126','12','provenance','f','1','0','153','162','1','1','3','5','163','19',''),
('16649','sql','1126','13','table_reference','f','2','0','171','185','12','1','1','4','186','19',''),
('16650','sql','1126','14','source','f','3','0','197','202','13','1','1','3','203','19',''),
('16651','sql','1126','15','nom_de_la_table','f','4','0','204','218','14','2','1','2','219','19',''),
('16652','sql','1126','16','tbl_metiers','c','5','0','220','230','15','0','1','0','219','17',''),
('16653','sql','1126','17','base','f','5','0','232','235','15','1','2','1','236','19',''),
('16654','sql','1126','18','b1','c','6','0','237','238','17','0','1','0','236','19',''),
('16655','sql','1125','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16656','sql','1125','1','sélectionner','f','0','0','0','11','0','4','1','6','12','48',''),
('16657','sql','1125','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('16658','sql','1125','3','1','c','2','0','35','35','2','0','1','0','34','48',''),
('16659','sql','1125','4','valeurs','f','1','0','42','48','1','4','2','2','49','17',''),
('16660','sql','1125','5','champ','f','2','0','50','54','4','2','1','1','55','8',''),
('16661','sql','1125','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('16662','sql','1125','7','chi_id_metier','c','3','2','62','74','5','0','2','0','55','48',''),
('16663','sql','1125','8','champ','f','2','0','78','82','4','2','2','1','83','11',''),
('16664','sql','1125','9','T0','c','3','2','85','86','8','0','1','0','83','10',''),
('16665','sql','1125','10','chp_nom_metier','c','3','2','90','103','8','0','2','0','83','48',''),
('16666','sql','1125','11','champ','f','2','0','107','111','4','2','3','1','112','14',''),
('16667','sql','1125','12','T1','c','3','2','114','115','11','0','1','0','112','13',''),
('16668','sql','1125','13','chp_nom_metier','c','3','2','119','132','11','0','2','0','112','48',''),
('16669','sql','1125','14','champ','f','2','0','136','140','4','2','4','1','141','48',''),
('16670','sql','1125','15','T0','c','3','2','143','144','14','0','1','0','141','16',''),
('16671','sql','1125','16','chx_parent_metier','c','3','2','148','164','14','0','2','0','141','48',''),
('16672','sql','1125','17','provenance','f','1','0','173','182','1','2','3','5','183','42',''),
('16673','sql','1125','18','table_reference','f','2','0','191','205','17','1','1','4','206','26',''),
('16674','sql','1125','19','source','f','3','0','217','222','18','1','1','3','223','48',''),
('16675','sql','1125','20','nom_de_la_table','f','4','0','224','238','19','3','1','2','239','48',''),
('16676','sql','1125','21','tbl_metiers','c','5','0','240','250','20','0','1','0','239','22',''),
('16677','sql','1125','22','alias','f','5','0','252','256','20','1','2','1','257','24',''),
('16678','sql','1125','23','T0','c','6','0','258','259','22','0','1','0','257','48',''),
('16679','sql','1125','24','base','f','5','0','262','265','20','1','3','1','266','48',''),
('16680','sql','1125','25','b1','c','6','0','267','268','24','0','1','0','266','48',''),
('16681','sql','1125','26','jointure_gauche','f','2','0','288','302','17','2','2','4','303','48',''),
('16682','sql','1125','27','source','f','3','0','314','319','26','1','1','3','320','34',''),
('16683','sql','1125','28','nom_de_la_table','f','4','0','321','335','27','3','1','2','336','48',''),
('16684','sql','1125','29','tbl_metiers','c','5','0','337','347','28','0','1','0','336','30',''),
('16685','sql','1125','30','alias','f','5','0','349','353','28','1','2','1','354','32',''),
('16686','sql','1125','31','T1','c','6','0','355','356','30','0','1','0','354','48',''),
('16687','sql','1125','32','base','f','5','0','359','362','28','1','3','1','363','48',''),
('16688','sql','1125','33','b1','c','6','0','364','365','32','0','1','0','363','48',''),
('16689','sql','1125','34','contrainte','f','3','0','380','389','26','1','2','3','390','48',''),
('16690','sql','1125','35','egal','f','4','0','391','394','34','2','1','2','395','48',''),
('16691','sql','1125','36','champ','f','5','0','396','400','35','2','1','1','401','39',''),
('16692','sql','1125','37','T1','c','6','0','402','403','36','0','1','0','401','38',''),
('16693','sql','1125','38','chi_id_metier','c','6','0','405','417','36','0','2','0','401','48',''),
('16694','sql','1125','39','champ','f','5','0','420','424','35','2','2','1','425','48',''),
('16695','sql','1125','40','T0','c','6','0','426','427','39','0','1','0','425','41',''),
('16696','sql','1125','41','chx_parent_metier','c','6','0','429','445','39','0','2','0','425','48',''),
('16697','sql','1125','42','conditions','f','1','0','467','476','1','1','4','3','477','48',''),
('16698','sql','1125','43','egal','f','2','0','478','481','42','2','1','2','482','48',''),
('16699','sql','1125','44','champ','f','3','0','483','487','43','2','1','1','488','47',''),
('16700','sql','1125','45','T0','c','4','2','490','491','44','0','1','0','488','46',''),
('16701','sql','1125','46','chi_id_metier','c','4','2','495','507','44','0','2','0','488','48',''),
('16702','sql','1125','47',':T0_chi_id_metier','c','3','0','511','527','43','0','2','0','488','48',''),
('16703','sql','1124','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16704','sql','1124','1','sélectionner','f','0','0','0','11','0','4','1','6','12','80',''),
('16705','sql','1124','2','valeurs','f','1','0','17','23','1','4','1','2','24','15',''),
('16706','sql','1124','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('16707','sql','1124','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('16708','sql','1124','5','chi_id_metier','c','3','2','37','49','3','0','2','0','30','80',''),
('16709','sql','1124','6','champ','f','2','0','53','57','2','2','2','1','58','9',''),
('16710','sql','1124','7','T0','c','3','2','60','61','6','0','1','0','58','8',''),
('16711','sql','1124','8','chp_nom_metier','c','3','2','65','78','6','0','2','0','58','80',''),
('16712','sql','1124','9','champ','f','2','0','82','86','2','2','3','1','87','12',''),
('16713','sql','1124','10','T0','c','3','2','89','90','9','0','1','0','87','11',''),
('16714','sql','1124','11','chx_parent_metier','c','3','2','94','110','9','0','2','0','87','80',''),
('16715','sql','1124','12','champ','f','2','0','114','118','2','2','4','1','119','80',''),
('16716','sql','1124','13','T1','c','3','2','121','122','12','0','1','0','119','14',''),
('16717','sql','1124','14','chp_nom_metier','c','3','2','126','139','12','0','2','0','119','80',''),
('16718','sql','1124','15','provenance','f','1','0','148','157','1','2','2','5','158','40',''),
('16719','sql','1124','16','table_reference','f','2','0','166','180','15','1','1','4','181','24',''),
('16720','sql','1124','17','source','f','3','0','192','197','16','1','1','3','198','80',''),
('16721','sql','1124','18','nom_de_la_table','f','4','0','199','213','17','3','1','2','214','80',''),
('16722','sql','1124','19','tbl_metiers','c','5','0','215','225','18','0','1','0','214','20',''),
('16723','sql','1124','20','alias','f','5','0','227','231','18','1','2','1','232','22',''),
('16724','sql','1124','21','T0','c','6','0','233','234','20','0','1','0','232','80',''),
('16725','sql','1124','22','base','f','5','0','237','240','18','1','3','1','241','80',''),
('16726','sql','1124','23','b1','c','6','0','242','243','22','0','1','0','241','80',''),
('16727','sql','1124','24','jointure_gauche','f','2','0','263','277','15','2','2','4','278','80',''),
('16728','sql','1124','25','source','f','3','0','289','294','24','1','1','3','295','32',''),
('16729','sql','1124','26','nom_de_la_table','f','4','0','296','310','25','3','1','2','311','80',''),
('16730','sql','1124','27','tbl_metiers','c','5','0','312','322','26','0','1','0','311','28',''),
('16731','sql','1124','28','alias','f','5','0','324','328','26','1','2','1','329','30',''),
('16732','sql','1124','29','T1','c','6','0','330','331','28','0','1','0','329','80',''),
('16733','sql','1124','30','base','f','5','0','334','337','26','1','3','1','338','80',''),
('16734','sql','1124','31','b1','c','6','0','339','340','30','0','1','0','338','80',''),
('16735','sql','1124','32','contrainte','f','3','0','355','364','24','1','2','3','365','80',''),
('16736','sql','1124','33','egal','f','4','0','366','369','32','2','1','2','370','80',''),
('16737','sql','1124','34','champ','f','5','0','371','375','33','2','1','1','376','37',''),
('16738','sql','1124','35','T1','c','6','0','377','378','34','0','1','0','376','36',''),
('16739','sql','1124','36','chi_id_metier','c','6','0','380','392','34','0','2','0','376','80',''),
('16740','sql','1124','37','champ','f','5','0','395','399','33','2','2','1','400','80',''),
('16741','sql','1124','38','T0','c','6','0','401','402','37','0','1','0','400','39',''),
('16742','sql','1124','39','chx_parent_metier','c','6','0','404','420','37','0','2','0','400','80',''),
('16743','sql','1124','40','conditions','f','1','0','442','451','1','1','3','4','452','68',''),
('16744','sql','1124','41','et','f','2','0','460','461','40','6','1','3','462','80',''),
('16745','sql','1124','42','#','f','3','0','473','473','41','0','1','0','474','43',''),
('16746','sql','1124','43','egal','f','3','0','487','490','41','2','2','2','491','48',''),
('16747','sql','1124','44','champ','f','4','0','492','496','43','2','1','1','497','47',''),
('16748','sql','1124','45','T0','c','5','2','499','500','44','0','1','0','497','46',''),
('16749','sql','1124','46','chi_id_metier','c','5','2','504','516','44','0','2','0','497','80',''),
('16750','sql','1124','47',':T0_chi_id_metier','c','4','0','520','536','43','0','2','0','497','80',''),
('16751','sql','1124','48','comme','f','3','0','549','553','41','2','3','2','554','53',''),
('16752','sql','1124','49','champ','f','4','0','555','559','48','2','1','1','560','52',''),
('16753','sql','1124','50','T0','c','5','2','562','563','49','0','1','0','560','51',''),
('16754','sql','1124','51','chp_nom_metier','c','5','2','567','580','49','0','2','0','560','80',''),
('16755','sql','1124','52',':T0_chp_nom_metier','c','4','0','584','601','48','0','2','0','560','80',''),
('16756','sql','1124','53','egal','f','3','0','614','617','41','2','4','2','618','58',''),
('16757','sql','1124','54','champ','f','4','0','619','623','53','2','1','1','624','57',''),
('16758','sql','1124','55','T0','c','5','2','626','627','54','0','1','0','624','56',''),
('16759','sql','1124','56','chx_parent_metier','c','5','2','631','647','54','0','2','0','624','80',''),
('16760','sql','1124','57',':T0_chx_parent_metier','c','4','0','651','671','53','0','2','0','624','80',''),
('16761','sql','1124','58','comme','f','3','0','684','688','41','2','5','2','689','63',''),
('16762','sql','1124','59','champ','f','4','0','690','694','58','2','1','1','695','62',''),
('16763','sql','1124','60','T1','c','5','2','697','698','59','0','1','0','695','61',''),
('16764','sql','1124','61','chp_nom_metier','c','5','2','702','715','59','0','2','0','695','80',''),
('16765','sql','1124','62',':T1_chp_nom_metier','c','4','0','719','736','58','0','2','0','695','80',''),
('16766','sql','1124','63','supegal','f','3','0','749','755','41','2','6','2','756','80',''),
('16767','sql','1124','64','champ','f','4','0','757','761','63','2','1','1','762','67',''),
('16768','sql','1124','65','T0','c','5','2','764','765','64','0','1','0','762','66',''),
('16769','sql','1124','66','chi_id_metier','c','5','2','769','781','64','0','2','0','762','80',''),
('16770','sql','1124','67',':metier_mini','c','4','0','785','796','63','0','2','0','762','80',''),
('16771','sql','1124','68','complements','f','1','0','816','826','1','2','4','4','827','80',''),
('16772','sql','1124','69','trier_par','f','2','0','835','843','68','1','1','3','844','75',''),
('16773','sql','1124','70','','f','3','0','835','843','69','2','1','2','845','80',''),
('16774','sql','1124','71','champ','f','4','0','846','850','70','2','1','1','851','74',''),
('16775','sql','1124','72','T0','c','5','2','853','854','71','0','1','0','851','73',''),
('16776','sql','1124','73','chi_id_metier','c','5','2','858','870','71','0','2','0','851','80',''),
('16777','sql','1124','74','décroissant','f','4','0','874','884','70','0','2','0','885','80',''),
('16778','sql','1124','75','limité_à','f','2','0','897','904','68','2','2','2','905','80',''),
('16779','sql','1124','76','quantité','f','3','0','906','913','75','1','1','1','914','78',''),
('16780','sql','1124','77',':quantitee','c','4','0','915','924','76','0','1','0','914','80',''),
('16781','sql','1124','78','début','f','3','0','927','931','75','1','2','1','932','80',''),
('16782','sql','1124','79',':debut','c','4','0','933','938','78','0','1','0','932','80',''),
('16783','sql','1123','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16784','sql','1123','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('16785','sql','1123','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('16786','sql','1123','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('16787','sql','1123','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('16788','sql','1123','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('16789','sql','1123','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('16790','sql','1123','7','tbl_utilisateurs','c','5','0','105','120','6','0','1','0','104','8',''),
('16791','sql','1123','8','base','f','5','0','122','125','6','1','2','1','126','15',''),
('16792','sql','1123','9','b1','c','6','0','127','128','8','0','1','0','126','15',''),
('16793','sql','1123','10','conditions','f','1','0','150','159','1','1','3','3','160','15',''),
('16794','sql','1123','11','egal','f','2','0','161','164','10','2','1','2','165','15',''),
('16795','sql','1123','12','champ','f','3','0','166','170','11','1','1','1','171','14',''),
('16796','sql','1123','13','chi_id_utilisateur','c','4','2','173','190','12','0','1','0','171','15',''),
('16797','sql','1123','14',':chi_id_utilisateur','c','3','0','194','212','11','0','2','0','171','15',''),
('16798','sql','1122','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16799','sql','1122','1','modifier','f','0','0','0','7','0','4','1','6','8','30',''),
('16800','sql','1122','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('16801','sql','1122','3','1','c','2','0','31','31','2','0','1','0','30','30',''),
('16802','sql','1122','4','valeurs','f','1','0','38','44','1','4','2','3','45','18',''),
('16803','sql','1122','5','#','f','2','0','53','53','4','0','1','0','54','6',''),
('16804','sql','1122','6','affecte','f','2','0','64','70','4','2','2','2','71','10',''),
('16805','sql','1122','7','champ','f','3','0','72','76','6','1','1','1','77','9',''),
('16806','sql','1122','8','chp_nom_de_connexion_utilisateur','c','4','2','79','110','7','0','1','0','77','30',''),
('16807','sql','1122','9',':n_chp_nom_de_connexion_utilisateur','c','3','0','114','148','6','0','2','0','77','30',''),
('16808','sql','1122','10','affecte','f','2','0','158','164','4','2','3','2','165','14',''),
('16809','sql','1122','11','champ','f','3','0','166','170','10','1','1','1','171','13',''),
('16810','sql','1122','12','chx_acces_utilisateur','c','4','2','173','193','11','0','1','0','171','30',''),
('16811','sql','1122','13',':n_chx_acces_utilisateur','c','3','0','197','220','10','0','2','0','171','30',''),
('16812','sql','1122','14','affecte','f','2','0','230','236','4','2','4','2','237','30',''),
('16813','sql','1122','15','champ','f','3','0','238','242','14','1','1','1','243','17',''),
('16814','sql','1122','16','che_actif_utilisateur','c','4','2','245','265','15','0','1','0','243','30',''),
('16815','sql','1122','17',':n_che_actif_utilisateur','c','3','0','269','292','14','0','2','0','243','30',''),
('16816','sql','1122','18','provenance','f','1','0','304','313','1','1','3','5','314','25',''),
('16817','sql','1122','19','table_reference','f','2','0','322','336','18','1','1','4','337','30',''),
('16818','sql','1122','20','source','f','3','0','348','353','19','1','1','3','354','30',''),
('16819','sql','1122','21','nom_de_la_table','f','4','0','355','369','20','2','1','2','370','30',''),
('16820','sql','1122','22','tbl_utilisateurs','c','5','0','371','386','21','0','1','0','370','23',''),
('16821','sql','1122','23','base','f','5','0','388','391','21','1','2','1','392','30',''),
('16822','sql','1122','24','b1','c','6','0','393','394','23','0','1','0','392','30',''),
('16823','sql','1122','25','conditions','f','1','0','416','425','1','1','4','3','426','30',''),
('16824','sql','1122','26','egal','f','2','0','427','430','25','2','1','2','431','30',''),
('16825','sql','1122','27','champ','f','3','0','432','436','26','1','1','1','437','29',''),
('16826','sql','1122','28','chi_id_utilisateur','c','4','2','439','456','27','0','1','0','437','30',''),
('16827','sql','1122','29',':c_chi_id_utilisateur','c','3','0','460','480','26','0','2','0','437','30',''),
('16828','sql','1121','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16829','sql','1121','1','sélectionner','f','0','0','0','11','0','4','1','6','12','69',''),
('16830','sql','1121','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('16831','sql','1121','3','1','c','2','0','35','35','2','0','1','0','34','69',''),
('16832','sql','1121','4','valeurs','f','1','0','42','48','1','11','2','2','49','38',''),
('16833','sql','1121','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('16834','sql','1121','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('16835','sql','1121','7','chi_id_utilisateur','c','3','2','69','86','5','0','2','0','62','69',''),
('16836','sql','1121','8','champ','f','2','0','97','101','4','2','2','1','102','11',''),
('16837','sql','1121','9','T0','c','3','2','104','105','8','0','1','0','102','10',''),
('16838','sql','1121','10','chp_nom_de_connexion_utilisateur','c','3','2','109','140','8','0','2','0','102','69',''),
('16839','sql','1121','11','champ','f','2','0','151','155','4','2','3','1','156','14',''),
('16840','sql','1121','12','T0','c','3','2','158','159','11','0','1','0','156','13',''),
('16841','sql','1121','13','chp_mot_de_passe_utilisateur','c','3','2','163','190','11','0','2','0','156','69',''),
('16842','sql','1121','14','champ','f','2','0','201','205','4','2','4','1','206','17',''),
('16843','sql','1121','15','T0','c','3','2','208','209','14','0','1','0','206','16',''),
('16844','sql','1121','16','chp_parametres_utilisateur','c','3','2','213','238','14','0','2','0','206','69',''),
('16845','sql','1121','17','champ','f','2','0','249','253','4','2','5','1','254','20',''),
('16846','sql','1121','18','T0','c','3','2','256','257','17','0','1','0','254','19',''),
('16847','sql','1121','19','chi_compteur1_utilisateur','c','3','2','261','285','17','0','2','0','254','69',''),
('16848','sql','1121','20','champ','f','2','0','296','300','4','2','6','1','301','23',''),
('16849','sql','1121','21','T0','c','3','2','303','304','20','0','1','0','301','22',''),
('16850','sql','1121','22','che__nur_utilisateur','c','3','2','308','327','20','0','2','0','301','69',''),
('16851','sql','1121','23','champ','f','2','0','338','342','4','2','7','1','343','26',''),
('16852','sql','1121','24','T0','c','3','2','345','346','23','0','1','0','343','25',''),
('16853','sql','1121','25','chd__dtm_utilisateur','c','3','2','350','369','23','0','2','0','343','69',''),
('16854','sql','1121','26','champ','f','2','0','380','384','4','2','8','1','385','29',''),
('16855','sql','1121','27','T0','c','3','2','387','388','26','0','1','0','385','28',''),
('16856','sql','1121','28','chd__dtc_utilisateur','c','3','2','392','411','26','0','2','0','385','69',''),
('16857','sql','1121','29','champ','f','2','0','422','426','4','2','9','1','427','32',''),
('16858','sql','1121','30','T0','c','3','2','429','430','29','0','1','0','427','31',''),
('16859','sql','1121','31','chx_acces_utilisateur','c','3','2','434','454','29','0','2','0','427','69',''),
('16860','sql','1121','32','champ','f','2','0','465','469','4','2','10','1','470','35',''),
('16861','sql','1121','33','T1','c','3','2','472','473','32','0','1','0','470','34',''),
('16862','sql','1121','34','chp_nom_acces','c','3','2','477','489','32','0','2','0','470','69',''),
('16863','sql','1121','35','champ','f','2','0','500','504','4','2','11','1','505','69',''),
('16864','sql','1121','36','T0','c','3','2','507','508','35','0','1','0','505','37',''),
('16865','sql','1121','37','che_actif_utilisateur','c','3','2','512','532','35','0','2','0','505','69',''),
('16866','sql','1121','38','provenance','f','1','0','545','554','1','2','3','5','555','63',''),
('16867','sql','1121','39','table_reference','f','2','0','563','577','38','1','1','4','578','47',''),
('16868','sql','1121','40','source','f','3','0','589','594','39','1','1','3','595','69',''),
('16869','sql','1121','41','nom_de_la_table','f','4','0','596','610','40','3','1','2','611','69',''),
('16870','sql','1121','42','tbl_utilisateurs','c','5','0','612','627','41','0','1','0','611','43',''),
('16871','sql','1121','43','alias','f','5','0','629','633','41','1','2','1','634','45',''),
('16872','sql','1121','44','T0','c','6','0','635','636','43','0','1','0','634','69',''),
('16873','sql','1121','45','base','f','5','0','639','642','41','1','3','1','643','69',''),
('16874','sql','1121','46','b1','c','6','0','644','645','45','0','1','0','643','69',''),
('16875','sql','1121','47','jointure_gauche','f','2','0','665','679','38','2','2','4','680','69',''),
('16876','sql','1121','48','source','f','3','0','691','696','47','1','1','3','697','55',''),
('16877','sql','1121','49','nom_de_la_table','f','4','0','698','712','48','3','1','2','713','69',''),
('16878','sql','1121','50','tbl_acces','c','5','0','714','722','49','0','1','0','713','51',''),
('16879','sql','1121','51','alias','f','5','0','724','728','49','1','2','1','729','53',''),
('16880','sql','1121','52','T1','c','6','0','730','731','51','0','1','0','729','69',''),
('16881','sql','1121','53','base','f','5','0','734','737','49','1','3','1','738','69',''),
('16882','sql','1121','54','b1','c','6','0','739','740','53','0','1','0','738','69',''),
('16883','sql','1121','55','contrainte','f','3','0','755','764','47','1','2','3','765','69',''),
('16884','sql','1121','56','egal','f','4','0','766','769','55','2','1','2','770','69',''),
('16885','sql','1121','57','champ','f','5','0','771','775','56','2','1','1','776','60',''),
('16886','sql','1121','58','T1','c','6','0','777','778','57','0','1','0','776','59',''),
('16887','sql','1121','59','chi_id_acces','c','6','0','780','791','57','0','2','0','776','69',''),
('16888','sql','1121','60','champ','f','5','0','794','798','56','2','2','1','799','69',''),
('16889','sql','1121','61','T0','c','6','0','800','801','60','0','1','0','799','62',''),
('16890','sql','1121','62','chx_acces_utilisateur','c','6','0','803','823','60','0','2','0','799','69',''),
('16891','sql','1121','63','conditions','f','1','0','845','854','1','1','4','3','855','69',''),
('16892','sql','1121','64','egal','f','2','0','856','859','63','2','1','2','860','69',''),
('16893','sql','1121','65','champ','f','3','0','861','865','64','2','1','1','866','68',''),
('16894','sql','1121','66','T0','c','4','2','868','869','65','0','1','0','866','67',''),
('16895','sql','1121','67','chi_id_utilisateur','c','4','2','873','890','65','0','2','0','866','69',''),
('16896','sql','1121','68',':T0_chi_id_utilisateur','c','3','0','894','915','64','0','2','0','866','69',''),
('16897','sql','1120','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16898','sql','1120','1','insérer','f','0','0','0','6','0','3','1','6','7','24',''),
('16899','sql','1120','2','base_de_reference','f','1','0','12','28','1','1','1','1','29','4',''),
('16900','sql','1120','3','1','c','2','0','30','30','2','0','1','0','29','24',''),
('16901','sql','1120','4','valeurs','f','1','0','37','43','1','3','2','3','44','17',''),
('16902','sql','1120','5','affecte','f','2','0','45','51','4','2','1','2','52','9',''),
('16903','sql','1120','6','champ','f','3','0','53','57','5','1','1','1','58','8',''),
('16904','sql','1120','7','chp_nom_de_connexion_utilisateur','c','4','2','60','91','6','0','1','0','58','24',''),
('16905','sql','1120','8',':chp_nom_de_connexion_utilisateur','c','3','0','95','127','5','0','2','0','58','24',''),
('16906','sql','1120','9','affecte','f','2','0','130','136','4','2','2','2','137','13',''),
('16907','sql','1120','10','champ','f','3','0','138','142','9','1','1','1','143','12',''),
('16908','sql','1120','11','chx_acces_utilisateur','c','4','2','145','165','10','0','1','0','143','24',''),
('16909','sql','1120','12',':chx_acces_utilisateur','c','3','0','169','190','9','0','2','0','143','24',''),
('16910','sql','1120','13','affecte','f','2','0','193','199','4','2','3','2','200','24',''),
('16911','sql','1120','14','champ','f','3','0','201','205','13','1','1','1','206','16',''),
('16912','sql','1120','15','che_actif_utilisateur','c','4','2','208','228','14','0','1','0','206','24',''),
('16913','sql','1120','16',':che_actif_utilisateur','c','3','0','232','253','13','0','2','0','206','24',''),
('16914','sql','1120','17','provenance','f','1','0','261','270','1','1','3','5','271','24',''),
('16915','sql','1120','18','table_reference','f','2','0','279','293','17','1','1','4','294','24',''),
('16916','sql','1120','19','source','f','3','0','305','310','18','1','1','3','311','24',''),
('16917','sql','1120','20','nom_de_la_table','f','4','0','312','326','19','2','1','2','327','24',''),
('16918','sql','1120','21','tbl_utilisateurs','c','5','0','328','343','20','0','1','0','327','22',''),
('16919','sql','1120','22','base','f','5','0','345','348','20','1','2','1','349','24',''),
('16920','sql','1120','23','b1','c','6','0','350','351','22','0','1','0','349','24',''),
('16921','sql','1119','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('16922','sql','1119','1','sélectionner','f','0','0','0','11','0','4','1','6','12','106',''),
('16923','sql','1119','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('16924','sql','1119','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('16925','sql','1119','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('16926','sql','1119','5','chi_id_utilisateur','c','3','2','44','61','3','0','2','0','37','106',''),
('16927','sql','1119','6','champ','f','2','0','72','76','2','2','2','1','77','9',''),
('16928','sql','1119','7','T0','c','3','2','79','80','6','0','1','0','77','8',''),
('16929','sql','1119','8','chp_nom_de_connexion_utilisateur','c','3','2','84','115','6','0','2','0','77','106',''),
('16930','sql','1119','9','champ','f','2','0','126','130','2','2','3','1','131','12',''),
('16931','sql','1119','10','T0','c','3','2','133','134','9','0','1','0','131','11',''),
('16932','sql','1119','11','chp_mot_de_passe_utilisateur','c','3','2','138','165','9','0','2','0','131','106',''),
('16933','sql','1119','12','champ','f','2','0','176','180','2','2','4','1','181','15',''),
('16934','sql','1119','13','T0','c','3','2','183','184','12','0','1','0','181','14',''),
('16935','sql','1119','14','chi_compteur1_utilisateur','c','3','2','188','212','12','0','2','0','181','106',''),
('16936','sql','1119','15','champ','f','2','0','223','227','2','2','5','1','228','18',''),
('16937','sql','1119','16','T0','c','3','2','230','231','15','0','1','0','228','17',''),
('16938','sql','1119','17','chx_acces_utilisateur','c','3','2','235','255','15','0','2','0','228','106',''),
('16939','sql','1119','18','champ','f','2','0','266','270','2','2','6','1','271','21',''),
('16940','sql','1119','19','T1','c','3','2','273','274','18','0','1','0','271','20',''),
('16941','sql','1119','20','chp_nom_acces','c','3','2','278','290','18','0','2','0','271','106',''),
('16942','sql','1119','21','champ','f','2','0','301','305','2','2','7','1','306','24',''),
('16943','sql','1119','22','T0','c','3','2','308','309','21','0','1','0','306','23',''),
('16944','sql','1119','23','che_actif_utilisateur','c','3','2','313','333','21','0','2','0','306','106',''),
('16945','sql','1119','24','champ','f','2','0','344','348','2','2','8','1','349','106',''),
('16946','sql','1119','25','T1','c','3','2','351','352','24','0','1','0','349','26',''),
('16947','sql','1119','26','che_actif_acces','c','3','2','356','370','24','0','2','0','349','106',''),
('16948','sql','1119','27','provenance','f','1','0','383','392','1','2','2','5','393','52',''),
('16949','sql','1119','28','table_reference','f','2','0','401','415','27','1','1','4','416','36',''),
('16950','sql','1119','29','source','f','3','0','427','432','28','1','1','3','433','106',''),
('16951','sql','1119','30','nom_de_la_table','f','4','0','434','448','29','3','1','2','449','106',''),
('16952','sql','1119','31','tbl_utilisateurs','c','5','0','450','465','30','0','1','0','449','32',''),
('16953','sql','1119','32','alias','f','5','0','467','471','30','1','2','1','472','34',''),
('16954','sql','1119','33','T0','c','6','0','473','474','32','0','1','0','472','106',''),
('16955','sql','1119','34','base','f','5','0','477','480','30','1','3','1','481','106',''),
('16956','sql','1119','35','b1','c','6','0','482','483','34','0','1','0','481','106',''),
('16957','sql','1119','36','jointure_gauche','f','2','0','503','517','27','2','2','4','518','106',''),
('16958','sql','1119','37','source','f','3','0','529','534','36','1','1','3','535','44',''),
('16959','sql','1119','38','nom_de_la_table','f','4','0','536','550','37','3','1','2','551','106',''),
('16960','sql','1119','39','tbl_acces','c','5','0','552','560','38','0','1','0','551','40',''),
('16961','sql','1119','40','alias','f','5','0','562','566','38','1','2','1','567','42',''),
('16962','sql','1119','41','T1','c','6','0','568','569','40','0','1','0','567','106',''),
('16963','sql','1119','42','base','f','5','0','572','575','38','1','3','1','576','106',''),
('16964','sql','1119','43','b1','c','6','0','577','578','42','0','1','0','576','106',''),
('16965','sql','1119','44','contrainte','f','3','0','593','602','36','1','2','3','603','106',''),
('16966','sql','1119','45','egal','f','4','0','604','607','44','2','1','2','608','106',''),
('16967','sql','1119','46','champ','f','5','0','609','613','45','2','1','1','614','49',''),
('16968','sql','1119','47','T1','c','6','0','615','616','46','0','1','0','614','48',''),
('16969','sql','1119','48','chi_id_acces','c','6','0','618','629','46','0','2','0','614','106',''),
('16970','sql','1119','49','champ','f','5','0','632','636','45','2','2','1','637','106',''),
('16971','sql','1119','50','T0','c','6','0','638','639','49','0','1','0','637','51',''),
('16972','sql','1119','51','chx_acces_utilisateur','c','6','0','641','661','49','0','2','0','637','106',''),
('16973','sql','1119','52','conditions','f','1','0','683','692','1','1','3','4','693','94',''),
('16974','sql','1119','53','et','f','2','0','701','702','52','8','1','3','703','106',''),
('16975','sql','1119','54','egal','f','3','0','714','717','53','2','1','2','718','59',''),
('16976','sql','1119','55','champ','f','4','0','719','723','54','2','1','1','724','58',''),
('16977','sql','1119','56','T0','c','5','2','726','727','55','0','1','0','724','57',''),
('16978','sql','1119','57','chi_id_utilisateur','c','5','2','731','748','55','0','2','0','724','106',''),
('16979','sql','1119','58',':T0_chi_id_utilisateur','c','4','0','752','773','54','0','2','0','724','106',''),
('16980','sql','1119','59','comme','f','3','0','786','790','53','2','2','2','791','64',''),
('16981','sql','1119','60','champ','f','4','0','792','796','59','2','1','1','797','63',''),
('16982','sql','1119','61','T0','c','5','2','799','800','60','0','1','0','797','62',''),
('16983','sql','1119','62','chp_nom_de_connexion_utilisateur','c','5','2','804','835','60','0','2','0','797','106',''),
('16984','sql','1119','63',':T0_chp_nom_de_connexion_utilisateur','c','4','0','839','874','59','0','2','0','797','106',''),
('16985','sql','1119','64','egal','f','3','0','887','890','53','2','3','2','891','69',''),
('16986','sql','1119','65','champ','f','4','0','892','896','64','2','1','1','897','68',''),
('16987','sql','1119','66','T0','c','5','2','899','900','65','0','1','0','897','67',''),
('16988','sql','1119','67','che_actif_utilisateur','c','5','2','904','924','65','0','2','0','897','106',''),
('16989','sql','1119','68',':T0_che_actif_utilisateur','c','4','0','928','952','64','0','2','0','897','106',''),
('16990','sql','1119','69','egal','f','3','0','965','968','53','2','4','2','969','74',''),
('16991','sql','1119','70','champ','f','4','0','970','974','69','2','1','1','975','73',''),
('16992','sql','1119','71','T0','c','5','2','977','978','70','0','1','0','975','72',''),
('16993','sql','1119','72','chx_acces_utilisateur','c','5','2','982','1002','70','0','2','0','975','106',''),
('16994','sql','1119','73',':T0_chx_acces_utilisateur','c','4','0','1006','1030','69','0','2','0','975','106',''),
('16995','sql','1119','74','comme','f','3','0','1043','1047','53','2','5','2','1048','79',''),
('16996','sql','1119','75','champ','f','4','0','1049','1053','74','2','1','1','1054','78',''),
('16997','sql','1119','76','T1','c','5','2','1056','1057','75','0','1','0','1054','77',''),
('16998','sql','1119','77','chp_nom_acces','c','5','2','1061','1073','75','0','2','0','1054','106',''),
('16999','sql','1119','78',':T1_chp_nom_acces','c','4','0','1077','1093','74','0','2','0','1054','106',''),
('17000','sql','1119','79','egal','f','3','0','1106','1109','53','2','6','2','1110','84',''),
('17001','sql','1119','80','champ','f','4','0','1111','1115','79','2','1','1','1116','83',''),
('17002','sql','1119','81','T1','c','5','2','1118','1119','80','0','1','0','1116','82',''),
('17003','sql','1119','82','che_actif_acces','c','5','2','1123','1137','80','0','2','0','1116','106',''),
('17004','sql','1119','83',':T1_che_actif_acces','c','4','0','1141','1159','79','0','2','0','1116','106',''),
('17005','sql','1119','84','supegal','f','3','0','1172','1178','53','2','7','2','1179','89',''),
('17006','sql','1119','85','champ','f','4','0','1180','1184','84','2','1','1','1185','88',''),
('17007','sql','1119','86','T0','c','5','2','1187','1188','85','0','1','0','1185','87',''),
('17008','sql','1119','87','chi_compteur1_utilisateur','c','5','2','1192','1216','85','0','2','0','1185','106',''),
('17009','sql','1119','88',':T0_chi_compteur1_utilisateur','c','4','0','1220','1248','84','0','2','0','1185','106',''),
('17010','sql','1119','89','pas_dans','f','3','0','1261','1268','53','2','8','2','1269','106',''),
('17011','sql','1119','90','champ','f','4','0','1270','1274','89','2','1','1','1275','93',''),
('17012','sql','1119','91','T0','c','5','2','1277','1278','90','0','1','0','1275','92',''),
('17013','sql','1119','92','chx_acces_utilisateur','c','5','2','1282','1302','90','0','2','0','1275','106',''),
('17014','sql','1119','93',':acces_pas_dans','c','4','0','1306','1320','89','0','2','0','1275','106',''),
('17015','sql','1119','94','complements','f','1','0','1340','1350','1','2','4','4','1351','106',''),
('17016','sql','1119','95','trier_par','f','2','0','1359','1367','94','1','1','3','1368','101',''),
('17017','sql','1119','96','','f','3','0','1359','1367','95','2','1','2','1369','106',''),
('17018','sql','1119','97','champ','f','4','0','1370','1374','96','2','1','1','1375','100',''),
('17019','sql','1119','98','T0','c','5','2','1377','1378','97','0','1','0','1375','99',''),
('17020','sql','1119','99','chi_id_utilisateur','c','5','2','1382','1399','97','0','2','0','1375','106',''),
('17021','sql','1119','100','décroissant','f','4','0','1403','1413','96','0','2','0','1414','106',''),
('17022','sql','1119','101','limité_à','f','2','0','1426','1433','94','2','2','2','1434','106',''),
('17023','sql','1119','102','quantité','f','3','0','1435','1442','101','1','1','1','1443','104',''),
('17024','sql','1119','103',':quantitee','c','4','0','1444','1453','102','0','1','0','1443','106',''),
('17025','sql','1119','104','début','f','3','0','1456','1460','101','1','2','1','1461','106',''),
('17026','sql','1119','105',':debut','c','4','0','1462','1467','104','0','1','0','1461','106',''),
('17027','sql','1114','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17028','sql','1114','1','supprimer','f','0','0','0','8','0','2','1','6','9','20',''),
('17029','sql','1114','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('17030','sql','1114','3','table_reference','f','2','0','32','46','2','1','1','4','47','20',''),
('17031','sql','1114','4','source','f','3','0','58','63','3','1','1','3','64','20',''),
('17032','sql','1114','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','20',''),
('17033','sql','1114','6','tbl_taches','c','5','0','81','90','5','0','1','0','80','7',''),
('17034','sql','1114','7','base','f','5','0','92','95','5','1','2','1','96','20',''),
('17035','sql','1114','8','b1','c','6','0','97','98','7','0','1','0','96','20',''),
('17036','sql','1114','9','conditions','f','1','0','120','129','1','1','2','4','130','20',''),
('17037','sql','1114','10','et','f','2','0','138','139','9','2','1','3','140','20',''),
('17038','sql','1114','11','egal','f','3','0','141','144','10','2','1','2','145','15',''),
('17039','sql','1114','12','champ','f','4','0','146','150','11','1','1','1','151','14',''),
('17040','sql','1114','13','chi_id_tache','c','5','2','153','164','12','0','1','0','151','20',''),
('17041','sql','1114','14',':chi_id_tache','c','4','0','168','180','11','0','2','0','151','20',''),
('17042','sql','1114','15','egal','f','3','0','183','186','10','2','2','2','187','20',''),
('17043','sql','1114','16','champ','f','4','0','188','192','15','1','1','1','193','18',''),
('17044','sql','1114','17','chx_utilisateur_tache','c','5','2','195','215','16','0','1','0','193','20',''),
('17045','sql','1114','18','session','f','4','0','219','225','15','1','2','1','226','20',''),
('17046','sql','1114','19','chi_id_utilisateur','c','5','0','227','244','18','0','1','0','226','20',''),
('17047','sql','1113','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17048','sql','1113','1','modifier','f','0','0','0','7','0','3','1','6','8','35',''),
('17049','sql','1113','2','valeurs','f','1','0','13','19','1','3','1','3','20','15',''),
('17050','sql','1113','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('17051','sql','1113','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('17052','sql','1113','5','chp_texte_tache','c','4','2','36','50','4','0','1','0','34','35',''),
('17053','sql','1113','6',':n_chp_texte_tache','c','3','0','54','71','3','0','2','0','34','35',''),
('17054','sql','1113','7','affecte','f','2','0','74','80','2','2','2','2','81','11',''),
('17055','sql','1113','8','champ','f','3','0','82','86','7','1','1','1','87','10',''),
('17056','sql','1113','9','che_priorite_tache','c','4','2','89','106','8','0','1','0','87','35',''),
('17057','sql','1113','10',':n_che_priorite_tache','c','3','0','110','130','7','0','2','0','87','35',''),
('17058','sql','1113','11','affecte','f','2','0','133','139','2','2','3','2','140','35',''),
('17059','sql','1113','12','champ','f','3','0','141','145','11','1','1','1','146','14',''),
('17060','sql','1113','13','chd__dtm_tache','c','4','2','148','161','12','0','1','0','146','35',''),
('17061','sql','1113','14',':n_chd__dtm_tache','c','3','0','165','181','11','0','2','0','146','35',''),
('17062','sql','1113','15','provenance','f','1','0','189','198','1','1','2','5','199','24',''),
('17063','sql','1113','16','table_reference','f','2','0','207','221','15','1','1','4','222','35',''),
('17064','sql','1113','17','source','f','3','0','233','238','16','1','1','3','239','35',''),
('17065','sql','1113','18','nom_de_la_table','f','4','0','240','254','17','3','1','2','255','35',''),
('17066','sql','1113','19','tbl_taches','c','5','0','256','265','18','0','1','0','255','20',''),
('17067','sql','1113','20','alias','f','5','0','267','271','18','1','2','1','272','22',''),
('17068','sql','1113','21','T0','c','6','0','273','274','20','0','1','0','272','35',''),
('17069','sql','1113','22','base','f','5','0','277','280','18','1','3','1','281','35',''),
('17070','sql','1113','23','b1','c','6','0','282','283','22','0','1','0','281','35',''),
('17071','sql','1113','24','conditions','f','1','0','305','314','1','1','3','4','315','35',''),
('17072','sql','1113','25','et','f','2','0','323','324','24','2','1','3','325','35',''),
('17073','sql','1113','26','egal','f','3','0','326','329','25','2','1','2','330','30',''),
('17074','sql','1113','27','champ','f','4','0','331','335','26','1','1','1','336','29',''),
('17075','sql','1113','28','chi_id_tache','c','5','2','338','349','27','0','1','0','336','35',''),
('17076','sql','1113','29',':c_chi_id_tache','c','4','0','353','367','26','0','2','0','336','35',''),
('17077','sql','1113','30','egal','f','3','0','370','373','25','2','2','2','374','35',''),
('17078','sql','1113','31','champ','f','4','0','375','379','30','1','1','1','380','33',''),
('17079','sql','1113','32','chx_utilisateur_tache','c','5','2','382','402','31','0','1','0','380','35',''),
('17080','sql','1113','33','session','f','4','0','406','412','30','1','2','1','413','35',''),
('17081','sql','1113','34','chi_id_utilisateur','c','5','0','414','431','33','0','1','0','413','35',''),
('17082','sql','1112','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17083','sql','1112','1','sélectionner','f','0','0','0','11','0','3','1','6','12','56',''),
('17084','sql','1112','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('17085','sql','1112','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('17086','sql','1112','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('17087','sql','1112','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','56',''),
('17088','sql','1112','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('17089','sql','1112','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('17090','sql','1112','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','56',''),
('17091','sql','1112','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('17092','sql','1112','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('17093','sql','1112','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','56',''),
('17094','sql','1112','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('17095','sql','1112','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('17096','sql','1112','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','56',''),
('17097','sql','1112','15','champ','f','2','0','186','190','2','2','5','1','191','56',''),
('17098','sql','1112','16','T1','c','3','2','193','194','15','0','1','0','191','17',''),
('17099','sql','1112','17','chp_nom_de_connexion_utilisateur','c','3','2','198','229','15','0','2','0','191','56',''),
('17100','sql','1112','18','provenance','f','1','0','242','251','1','2','2','5','252','43',''),
('17101','sql','1112','19','table_reference','f','2','0','260','274','18','1','1','4','275','27',''),
('17102','sql','1112','20','source','f','3','0','286','291','19','1','1','3','292','56',''),
('17103','sql','1112','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','56',''),
('17104','sql','1112','22','tbl_taches','c','5','0','309','318','21','0','1','0','308','23',''),
('17105','sql','1112','23','alias','f','5','0','320','324','21','1','2','1','325','25',''),
('17106','sql','1112','24','T0','c','6','0','326','327','23','0','1','0','325','56',''),
('17107','sql','1112','25','base','f','5','0','330','333','21','1','3','1','334','56',''),
('17108','sql','1112','26','b1','c','6','0','335','336','25','0','1','0','334','56',''),
('17109','sql','1112','27','jointure_gauche','f','2','0','356','370','18','2','2','4','371','56',''),
('17110','sql','1112','28','source','f','3','0','382','387','27','1','1','3','388','35',''),
('17111','sql','1112','29','nom_de_la_table','f','4','0','389','403','28','3','1','2','404','56',''),
('17112','sql','1112','30','tbl_utilisateurs','c','5','0','405','420','29','0','1','0','404','31',''),
('17113','sql','1112','31','alias','f','5','0','422','426','29','1','2','1','427','33',''),
('17114','sql','1112','32','T1','c','6','0','428','429','31','0','1','0','427','56',''),
('17115','sql','1112','33','base','f','5','0','432','435','29','1','3','1','436','56',''),
('17116','sql','1112','34','b1','c','6','0','437','438','33','0','1','0','436','56',''),
('17117','sql','1112','35','contrainte','f','3','0','453','462','27','1','2','3','463','56',''),
('17118','sql','1112','36','egal','f','4','0','464','467','35','2','1','2','468','56',''),
('17119','sql','1112','37','champ','f','5','0','469','473','36','2','1','1','474','40',''),
('17120','sql','1112','38','T1','c','6','0','475','476','37','0','1','0','474','39',''),
('17121','sql','1112','39','chi_id_utilisateur','c','6','0','478','495','37','0','2','0','474','56',''),
('17122','sql','1112','40','champ','f','5','0','498','502','36','2','2','1','503','56',''),
('17123','sql','1112','41','T0','c','6','0','504','505','40','0','1','0','503','42',''),
('17124','sql','1112','42','chx_utilisateur_tache','c','6','0','507','527','40','0','2','0','503','56',''),
('17125','sql','1112','43','conditions','f','1','0','549','558','1','1','3','4','559','56',''),
('17126','sql','1112','44','et','f','2','0','567','568','43','2','1','3','569','56',''),
('17127','sql','1112','45','egal','f','3','0','570','573','44','2','1','2','574','50',''),
('17128','sql','1112','46','champ','f','4','0','575','579','45','2','1','1','580','49',''),
('17129','sql','1112','47','T0','c','5','2','582','583','46','0','1','0','580','48',''),
('17130','sql','1112','48','chi_id_tache','c','5','2','587','598','46','0','2','0','580','56',''),
('17131','sql','1112','49',':T0_chi_id_tache','c','4','0','602','617','45','0','2','0','580','56',''),
('17132','sql','1112','50','egal','f','3','0','620','623','44','2','2','2','624','56',''),
('17133','sql','1112','51','champ','f','4','0','625','629','50','2','1','1','630','54',''),
('17134','sql','1112','52','T0','c','5','2','632','633','51','0','1','0','630','53',''),
('17135','sql','1112','53','chx_utilisateur_tache','c','5','2','637','657','51','0','2','0','630','56',''),
('17136','sql','1112','54','session','f','4','0','661','667','50','1','2','1','668','56',''),
('17137','sql','1112','55','chi_id_utilisateur','c','5','0','669','686','54','0','1','0','668','56',''),
('17138','sql','1111','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17139','sql','1111','1','insérer','f','0','0','0','6','0','2','1','6','7','31',''),
('17140','sql','1111','2','valeurs','f','1','0','12','18','1','5','1','3','19','24',''),
('17141','sql','1111','3','affecte','f','2','0','27','33','2','2','1','2','34','8',''),
('17142','sql','1111','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('17143','sql','1111','5','chx_utilisateur_tache','c','4','2','42','62','4','0','1','0','40','31',''),
('17144','sql','1111','6','session','f','3','0','66','72','3','1','2','1','73','31',''),
('17145','sql','1111','7','chi_id_utilisateur','c','4','0','74','91','6','0','1','0','73','31',''),
('17146','sql','1111','8','affecte','f','2','0','102','108','2','2','2','2','109','12',''),
('17147','sql','1111','9','champ','f','3','0','110','114','8','1','1','1','115','11',''),
('17148','sql','1111','10','chp_texte_tache','c','4','2','117','131','9','0','1','0','115','31',''),
('17149','sql','1111','11',':chp_texte_tache','c','3','0','135','150','8','0','2','0','115','31',''),
('17150','sql','1111','12','affecte','f','2','0','160','166','2','2','3','2','167','16',''),
('17151','sql','1111','13','champ','f','3','0','168','172','12','1','1','1','173','15',''),
('17152','sql','1111','14','che_priorite_tache','c','4','2','175','192','13','0','1','0','173','31',''),
('17153','sql','1111','15',':che_priorite_tache','c','3','0','196','214','12','0','2','0','173','31',''),
('17154','sql','1111','16','affecte','f','2','0','224','230','2','2','4','2','231','20',''),
('17155','sql','1111','17','champ','f','3','0','232','236','16','1','1','1','237','19',''),
('17156','sql','1111','18','chd__dtm_tache','c','4','2','239','252','17','0','1','0','237','31',''),
('17157','sql','1111','19',':chd__dtm_tache','c','3','0','256','270','16','0','2','0','237','31',''),
('17158','sql','1111','20','affecte','f','2','0','280','286','2','2','5','2','287','31',''),
('17159','sql','1111','21','champ','f','3','0','288','292','20','1','1','1','293','23',''),
('17160','sql','1111','22','chd__dtc_tache','c','4','2','295','308','21','0','1','0','293','31',''),
('17161','sql','1111','23',':chd__dtc_tache','c','3','0','312','326','20','0','2','0','293','31',''),
('17162','sql','1111','24','provenance','f','1','0','338','347','1','1','2','5','348','31',''),
('17163','sql','1111','25','table_reference','f','2','0','356','370','24','1','1','4','371','31',''),
('17164','sql','1111','26','source','f','3','0','382','387','25','1','1','3','388','31',''),
('17165','sql','1111','27','nom_de_la_table','f','4','0','389','403','26','2','1','2','404','31',''),
('17166','sql','1111','28','tbl_taches','c','5','0','405','414','27','0','1','0','404','29',''),
('17167','sql','1111','29','base','f','5','0','416','419','27','1','2','1','420','31',''),
('17168','sql','1111','30','b1','c','6','0','421','422','29','0','1','0','420','31',''),
('17169','sql','1110','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17170','sql','1110','1','sélectionner','f','0','0','0','11','0','4','1','6','12','73',''),
('17171','sql','1110','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('17172','sql','1110','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('17173','sql','1110','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('17174','sql','1110','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','73',''),
('17175','sql','1110','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('17176','sql','1110','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('17177','sql','1110','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','73',''),
('17178','sql','1110','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('17179','sql','1110','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('17180','sql','1110','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','73',''),
('17181','sql','1110','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('17182','sql','1110','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('17183','sql','1110','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','73',''),
('17184','sql','1110','15','champ','f','2','0','186','190','2','2','5','1','191','18',''),
('17185','sql','1110','16','T0','c','3','2','193','194','15','0','1','0','191','17',''),
('17186','sql','1110','17','chd__dtm_tache','c','3','2','198','211','15','0','2','0','191','73',''),
('17187','sql','1110','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('17188','sql','1110','19','T0','c','3','2','229','230','18','0','1','0','227','20',''),
('17189','sql','1110','20','chd__dtc_tache','c','3','2','234','247','18','0','2','0','227','73',''),
('17190','sql','1110','21','champ','f','2','0','258','262','2','2','7','1','263','73',''),
('17191','sql','1110','22','T0','c','3','2','265','266','21','0','1','0','263','23',''),
('17192','sql','1110','23','che__nur_tache','c','3','2','270','283','21','0','2','0','263','73',''),
('17193','sql','1110','24','provenance','f','1','0','296','305','1','1','2','5','306','33',''),
('17194','sql','1110','25','table_reference','f','2','0','314','328','24','1','1','4','329','73',''),
('17195','sql','1110','26','source','f','3','0','340','345','25','1','1','3','346','73',''),
('17196','sql','1110','27','nom_de_la_table','f','4','0','347','361','26','3','1','2','362','73',''),
('17197','sql','1110','28','tbl_taches','c','5','0','363','372','27','0','1','0','362','29',''),
('17198','sql','1110','29','alias','f','5','0','374','378','27','1','2','1','379','31',''),
('17199','sql','1110','30','T0','c','6','0','380','381','29','0','1','0','379','73',''),
('17200','sql','1110','31','base','f','5','0','384','387','27','1','3','1','388','73',''),
('17201','sql','1110','32','b1','c','6','0','389','390','31','0','1','0','388','73',''),
('17202','sql','1110','33','conditions','f','1','0','412','421','1','1','3','4','422','61',''),
('17203','sql','1110','34','et','f','2','0','430','431','33','5','1','3','432','73',''),
('17204','sql','1110','35','comme','f','3','0','443','447','34','2','1','2','448','40',''),
('17205','sql','1110','36','champ','f','4','0','449','453','35','2','1','1','454','39',''),
('17206','sql','1110','37','T0','c','5','2','456','457','36','0','1','0','454','38',''),
('17207','sql','1110','38','chp_texte_tache','c','5','2','461','475','36','0','2','0','454','73',''),
('17208','sql','1110','39',':T0_chp_texte_tache','c','4','0','479','497','35','0','2','0','454','73',''),
('17209','sql','1110','40','inf','f','3','0','510','512','34','2','2','2','513','45',''),
('17210','sql','1110','41','champ','f','4','0','514','518','40','2','1','1','519','44',''),
('17211','sql','1110','42','T0','c','5','2','521','522','41','0','1','0','519','43',''),
('17212','sql','1110','43','che_priorite_tache','c','5','2','526','543','41','0','2','0','519','73',''),
('17213','sql','1110','44',':T0_che_priorite_tache2','c','4','0','547','569','40','0','2','0','519','73',''),
('17214','sql','1110','45','egal','f','3','0','582','585','34','2','3','2','586','50',''),
('17215','sql','1110','46','champ','f','4','0','587','591','45','2','1','1','592','49',''),
('17216','sql','1110','47','T0','c','5','2','594','595','46','0','1','0','592','48',''),
('17217','sql','1110','48','che_priorite_tache','c','5','2','599','616','46','0','2','0','592','73',''),
('17218','sql','1110','49',':T0_che_priorite_tache','c','4','0','620','641','45','0','2','0','592','73',''),
('17219','sql','1110','50','egal','f','3','0','654','657','34','2','4','2','658','55',''),
('17220','sql','1110','51','champ','f','4','0','659','663','50','2','1','1','664','54',''),
('17221','sql','1110','52','T0','c','5','2','666','667','51','0','1','0','664','53',''),
('17222','sql','1110','53','chi_id_tache','c','5','2','671','682','51','0','2','0','664','73',''),
('17223','sql','1110','54',':T0_chi_id_tache','c','4','0','686','701','50','0','2','0','664','73',''),
('17224','sql','1110','55','egal','f','3','0','714','717','34','2','5','2','718','73',''),
('17225','sql','1110','56','champ','f','4','0','719','723','55','2','1','1','724','59',''),
('17226','sql','1110','57','T0','c','5','2','726','727','56','0','1','0','724','58',''),
('17227','sql','1110','58','chx_utilisateur_tache','c','5','2','731','751','56','0','2','0','724','73',''),
('17228','sql','1110','59','session','f','4','0','755','761','55','1','2','1','762','73',''),
('17229','sql','1110','60','chi_id_utilisateur','c','5','0','763','780','59','0','1','0','762','73',''),
('17230','sql','1110','61','complements','f','1','0','801','811','1','2','4','4','812','73',''),
('17231','sql','1110','62','trier_par','f','2','0','820','828','61','1','1','3','829','68',''),
('17232','sql','1110','63','','f','3','0','820','828','62','2','1','2','830','73',''),
('17233','sql','1110','64','champ','f','4','0','831','835','63','2','1','1','836','67',''),
('17234','sql','1110','65','T0','c','5','2','838','839','64','0','1','0','836','66',''),
('17235','sql','1110','66','che_priorite_tache','c','5','2','843','860','64','0','2','0','836','73',''),
('17236','sql','1110','67','croissant','f','4','0','864','872','63','0','2','0','873','73',''),
('17237','sql','1110','68','limité_à','f','2','0','885','892','61','2','2','2','893','73',''),
('17238','sql','1110','69','quantité','f','3','0','894','901','68','1','1','1','902','71',''),
('17239','sql','1110','70',':quantitee','c','4','0','903','912','69','0','1','0','902','73',''),
('17240','sql','1110','71','début','f','3','0','915','919','68','1','2','1','920','73',''),
('17241','sql','1110','72',':debut','c','4','0','921','926','71','0','1','0','920','73',''),
('17242','sql','1109','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17243','sql','1109','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('17244','sql','1109','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('17245','sql','1109','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('17246','sql','1109','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('17247','sql','1109','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('17248','sql','1109','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('17249','sql','1109','7','chp_nom_de_connexion_utilisateur','c','4','2','61','92','6','0','1','0','59','25',''),
('17250','sql','1109','8',':n_chp_nom_de_connexion_utilisateur','c','3','0','96','130','5','0','2','0','59','25',''),
('17251','sql','1109','9','affecte','f','2','0','133','139','4','2','2','2','140','25',''),
('17252','sql','1109','10','champ','f','3','0','141','145','9','1','1','1','146','12',''),
('17253','sql','1109','11','chp_mot_de_passe_utilisateur','c','4','2','148','175','10','0','1','0','146','25',''),
('17254','sql','1109','12',':n_chp_mot_de_passe_utilisateur','c','3','0','179','209','9','0','2','0','146','25',''),
('17255','sql','1109','13','provenance','f','1','0','217','226','1','1','3','5','227','20',''),
('17256','sql','1109','14','table_reference','f','2','0','235','249','13','1','1','4','250','25',''),
('17257','sql','1109','15','source','f','3','0','261','266','14','1','1','3','267','25',''),
('17258','sql','1109','16','nom_de_la_table','f','4','0','268','282','15','2','1','2','283','25',''),
('17259','sql','1109','17','tbl_utilisateurs','c','5','0','284','299','16','0','1','0','283','18',''),
('17260','sql','1109','18','base','f','5','0','301','304','16','1','2','1','305','25',''),
('17261','sql','1109','19','b1','c','6','0','306','307','18','0','1','0','305','25',''),
('17262','sql','1109','20','conditions','f','1','0','329','338','1','1','4','3','339','25',''),
('17263','sql','1109','21','egal','f','2','0','340','343','20','2','1','2','344','25',''),
('17264','sql','1109','22','champ','f','3','0','345','349','21','1','1','1','350','24',''),
('17265','sql','1109','23','chi_id_utilisateur','c','4','2','352','369','22','0','1','0','350','25',''),
('17266','sql','1109','24',':c_chi_id_utilisateur','c','3','0','373','393','21','0','2','0','350','25',''),
('17267','sql','1108','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17268','sql','1108','1','sélectionner','f','0','0','0','11','0','4','1','6','12','57',''),
('17269','sql','1108','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('17270','sql','1108','3','1','c','2','0','35','35','2','0','1','0','34','57',''),
('17271','sql','1108','4','valeurs','f','1','0','42','48','1','7','2','2','49','26',''),
('17272','sql','1108','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('17273','sql','1108','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('17274','sql','1108','7','chi_id_utilisateur','c','3','2','69','86','5','0','2','0','62','57',''),
('17275','sql','1108','8','champ','f','2','0','97','101','4','2','2','1','102','11',''),
('17276','sql','1108','9','T0','c','3','2','104','105','8','0','1','0','102','10',''),
('17277','sql','1108','10','chp_nom_de_connexion_utilisateur','c','3','2','109','140','8','0','2','0','102','57',''),
('17278','sql','1108','11','champ','f','2','0','151','155','4','2','3','1','156','14',''),
('17279','sql','1108','12','T0','c','3','2','158','159','11','0','1','0','156','13',''),
('17280','sql','1108','13','chp_mot_de_passe_utilisateur','c','3','2','163','190','11','0','2','0','156','57',''),
('17281','sql','1108','14','champ','f','2','0','201','205','4','2','4','1','206','17',''),
('17282','sql','1108','15','T0','c','3','2','208','209','14','0','1','0','206','16',''),
('17283','sql','1108','16','chp_parametres_utilisateur','c','3','2','213','238','14','0','2','0','206','57',''),
('17284','sql','1108','17','champ','f','2','0','249','253','4','2','5','1','254','20',''),
('17285','sql','1108','18','T0','c','3','2','256','257','17','0','1','0','254','19',''),
('17286','sql','1108','19','chi_compteur1_utilisateur','c','3','2','261','285','17','0','2','0','254','57',''),
('17287','sql','1108','20','champ','f','2','0','296','300','4','2','6','1','301','23',''),
('17288','sql','1108','21','T0','c','3','2','303','304','20','0','1','0','301','22',''),
('17289','sql','1108','22','chx_acces_utilisateur','c','3','2','308','328','20','0','2','0','301','57',''),
('17290','sql','1108','23','champ','f','2','0','339','343','4','2','7','1','344','57',''),
('17291','sql','1108','24','T1','c','3','2','346','347','23','0','1','0','344','25',''),
('17292','sql','1108','25','chp_nom_acces','c','3','2','351','363','23','0','2','0','344','57',''),
('17293','sql','1108','26','provenance','f','1','0','376','385','1','2','3','5','386','51',''),
('17294','sql','1108','27','table_reference','f','2','0','394','408','26','1','1','4','409','35',''),
('17295','sql','1108','28','source','f','3','0','420','425','27','1','1','3','426','57',''),
('17296','sql','1108','29','nom_de_la_table','f','4','0','427','441','28','3','1','2','442','57',''),
('17297','sql','1108','30','tbl_utilisateurs','c','5','0','443','458','29','0','1','0','442','31',''),
('17298','sql','1108','31','alias','f','5','0','460','464','29','1','2','1','465','33',''),
('17299','sql','1108','32','T0','c','6','0','466','467','31','0','1','0','465','57',''),
('17300','sql','1108','33','base','f','5','0','470','473','29','1','3','1','474','57',''),
('17301','sql','1108','34','b1','c','6','0','475','476','33','0','1','0','474','57',''),
('17302','sql','1108','35','jointure_gauche','f','2','0','496','510','26','2','2','4','511','57',''),
('17303','sql','1108','36','source','f','3','0','522','527','35','1','1','3','528','43',''),
('17304','sql','1108','37','nom_de_la_table','f','4','0','529','543','36','3','1','2','544','57',''),
('17305','sql','1108','38','tbl_acces','c','5','0','545','553','37','0','1','0','544','39',''),
('17306','sql','1108','39','alias','f','5','0','555','559','37','1','2','1','560','41',''),
('17307','sql','1108','40','T1','c','6','0','561','562','39','0','1','0','560','57',''),
('17308','sql','1108','41','base','f','5','0','565','568','37','1','3','1','569','57',''),
('17309','sql','1108','42','b1','c','6','0','570','571','41','0','1','0','569','57',''),
('17310','sql','1108','43','contrainte','f','3','0','586','595','35','1','2','3','596','57',''),
('17311','sql','1108','44','egal','f','4','0','597','600','43','2','1','2','601','57',''),
('17312','sql','1108','45','champ','f','5','0','602','606','44','2','1','1','607','48',''),
('17313','sql','1108','46','T1','c','6','0','608','609','45','0','1','0','607','47',''),
('17314','sql','1108','47','chi_id_acces','c','6','0','611','622','45','0','2','0','607','57',''),
('17315','sql','1108','48','champ','f','5','0','625','629','44','2','2','1','630','57',''),
('17316','sql','1108','49','T0','c','6','0','631','632','48','0','1','0','630','50',''),
('17317','sql','1108','50','chx_acces_utilisateur','c','6','0','634','654','48','0','2','0','630','57',''),
('17318','sql','1108','51','conditions','f','1','0','676','685','1','1','4','3','686','57',''),
('17319','sql','1108','52','egal','f','2','0','687','690','51','2','1','2','691','57',''),
('17320','sql','1108','53','champ','f','3','0','692','696','52','2','1','1','697','56',''),
('17321','sql','1108','54','T0','c','4','2','699','700','53','0','1','0','697','55',''),
('17322','sql','1108','55','chi_id_utilisateur','c','4','2','704','721','53','0','2','0','697','57',''),
('17323','sql','1108','56',':T0_chi_id_utilisateur','c','3','0','725','746','52','0','2','0','697','57',''),
('17324','sql','1107','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17325','sql','1107','1','modifier','f','0','0','0','7','0','4','1','6','8','24',''),
('17326','sql','1107','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('17327','sql','1107','3','1','c','2','0','31','31','2','0','1','0','30','24',''),
('17328','sql','1107','4','valeurs','f','1','0','38','44','1','1','2','4','45','12',''),
('17329','sql','1107','5','affecte','f','2','0','53','59','4','2','1','3','60','24',''),
('17330','sql','1107','6','champ','f','3','0','61','65','5','1','1','1','66','8',''),
('17331','sql','1107','7','chi_compteur1_utilisateur','c','4','2','68','92','6','0','1','0','66','24',''),
('17332','sql','1107','8','plus','f','3','0','96','99','5','2','2','2','100','24',''),
('17333','sql','1107','9','champ','f','4','0','101','105','8','1','1','1','106','11',''),
('17334','sql','1107','10','chi_compteur1_utilisateur','c','5','0','107','131','9','0','1','0','106','24',''),
('17335','sql','1107','11','1','c','4','0','134','134','8','0','2','0','106','24',''),
('17336','sql','1107','12','provenance','f','1','0','147','156','1','1','3','5','157','19',''),
('17337','sql','1107','13','table_reference','f','2','0','165','179','12','1','1','4','180','24',''),
('17338','sql','1107','14','source','f','3','0','191','196','13','1','1','3','197','24',''),
('17339','sql','1107','15','nom_de_la_table','f','4','0','198','212','14','2','1','2','213','24',''),
('17340','sql','1107','16','tbl_utilisateurs','c','5','0','214','229','15','0','1','0','213','17',''),
('17341','sql','1107','17','base','f','5','0','231','234','15','1','2','1','235','24',''),
('17342','sql','1107','18','b1','c','6','0','236','237','17','0','1','0','235','24',''),
('17343','sql','1107','19','conditions','f','1','0','259','268','1','1','4','3','269','24',''),
('17344','sql','1107','20','egal','f','2','0','270','273','19','2','1','2','274','24',''),
('17345','sql','1107','21','champ','f','3','0','275','279','20','1','1','1','280','23',''),
('17346','sql','1107','22','chi_id_utilisateur','c','4','2','282','299','21','0','1','0','280','24',''),
('17347','sql','1107','23',':c_chi_id_utilisateur','c','3','0','303','323','20','0','2','0','280','24',''),
('17348','sql','1101','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('17349','sql','1101','1','sélectionner','f','0','0','0','11','0','4','1','6','12','60',''),
('17350','sql','1101','2','valeurs','f','1','0','17','23','1','3','1','2','24','12',''),
('17351','sql','1101','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('17352','sql','1101','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('17353','sql','1101','5','chp_mot_de_passe_utilisateur','c','3','2','37','64','3','0','2','0','30','60',''),
('17354','sql','1101','6','champ','f','2','0','68','72','2','2','2','1','73','9',''),
('17355','sql','1101','7','T0','c','3','2','75','76','6','0','1','0','73','8',''),
('17356','sql','1101','8','chi_id_utilisateur','c','3','2','80','97','6','0','2','0','73','60',''),
('17357','sql','1101','9','champ','f','2','0','101','105','2','2','3','1','106','60',''),
('17358','sql','1101','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('17359','sql','1101','11','chx_acces_utilisateur','c','3','2','113','133','9','0','2','0','106','60',''),
('17360','sql','1101','12','provenance','f','1','0','142','151','1','2','2','5','152','37',''),
('17361','sql','1101','13','table_reference','f','2','0','160','174','12','1','1','4','175','21',''),
('17362','sql','1101','14','source','f','3','0','186','191','13','1','1','3','192','60',''),
('17363','sql','1101','15','nom_de_la_table','f','4','0','193','207','14','3','1','2','208','60',''),
('17364','sql','1101','16','tbl_utilisateurs','c','5','0','209','224','15','0','1','0','208','17',''),
('17365','sql','1101','17','alias','f','5','0','226','230','15','1','2','1','231','19',''),
('17366','sql','1101','18','T0','c','6','0','232','233','17','0','1','0','231','60',''),
('17367','sql','1101','19','base','f','5','0','236','239','15','1','3','1','240','60',''),
('17368','sql','1101','20','b1','c','6','0','241','242','19','0','1','0','240','60',''),
('17369','sql','1101','21','jointure_gauche','f','2','0','262','276','12','2','2','4','277','60',''),
('17370','sql','1101','22','source','f','3','0','288','293','21','1','1','3','294','29',''),
('17371','sql','1101','23','nom_de_la_table','f','4','0','295','309','22','3','1','2','310','60',''),
('17372','sql','1101','24','tbl_acces','c','5','0','311','319','23','0','1','0','310','25',''),
('17373','sql','1101','25','alias','f','5','0','321','325','23','1','2','1','326','27',''),
('17374','sql','1101','26','T1','c','6','0','327','328','25','0','1','0','326','60',''),
('17375','sql','1101','27','base','f','5','0','331','334','23','1','3','1','335','60',''),
('17376','sql','1101','28','b1','c','6','0','336','337','27','0','1','0','335','60',''),
('17377','sql','1101','29','contrainte','f','3','0','352','361','21','1','2','3','362','60',''),
('17378','sql','1101','30','egal','f','4','0','363','366','29','2','1','2','367','60',''),
('17379','sql','1101','31','champ','f','5','0','368','372','30','2','1','1','373','34',''),
('17380','sql','1101','32','T1','c','6','0','374','375','31','0','1','0','373','33',''),
('17381','sql','1101','33','chi_id_acces','c','6','0','377','388','31','0','2','0','373','60',''),
('17382','sql','1101','34','champ','f','5','0','391','395','30','2','2','1','396','60',''),
('17383','sql','1101','35','T0','c','6','0','397','398','34','0','1','0','396','36',''),
('17384','sql','1101','36','chx_acces_utilisateur','c','6','0','400','420','34','0','2','0','396','60',''),
('17385','sql','1101','37','conditions','f','1','0','442','451','1','1','3','4','452','54',''),
('17386','sql','1101','38','et','f','2','0','460','461','37','3','1','3','462','60',''),
('17387','sql','1101','39','egal','f','3','0','463','466','38','2','1','2','467','44',''),
('17388','sql','1101','40','champ','f','4','0','468','472','39','2','1','1','473','43',''),
('17389','sql','1101','41','T0','c','5','2','475','476','40','0','1','0','473','42',''),
('17390','sql','1101','42','chp_nom_de_connexion_utilisateur','c','5','2','480','511','40','0','2','0','473','60',''),
('17391','sql','1101','43',':T0_chp_nom_de_connexion_utilisateur','c','4','0','515','550','39','0','2','0','473','60',''),
('17392','sql','1101','44','egal','f','3','0','553','556','38','2','2','2','557','49',''),
('17393','sql','1101','45','champ','f','4','0','558','562','44','2','1','1','563','48',''),
('17394','sql','1101','46','T0','c','5','2','565','566','45','0','1','0','563','47',''),
('17395','sql','1101','47','che_actif_utilisateur','c','5','2','570','590','45','0','2','0','563','60',''),
('17396','sql','1101','48','1','c','4','0','594','594','44','0','2','0','563','60',''),
('17397','sql','1101','49','egal','f','3','0','597','600','38','2','3','2','601','60',''),
('17398','sql','1101','50','champ','f','4','0','602','606','49','2','1','1','607','53',''),
('17399','sql','1101','51','T1','c','5','2','609','610','50','0','1','0','607','52',''),
('17400','sql','1101','52','che_actif_acces','c','5','2','614','628','50','0','2','0','607','60',''),
('17401','sql','1101','53','1','c','4','0','632','632','49','0','2','0','607','60',''),
('17402','sql','1101','54','complements','f','1','0','645','655','1','1','4','3','656','60',''),
('17403','sql','1101','55','limité_à','f','2','0','657','664','54','2','1','2','665','60',''),
('17404','sql','1101','56','quantité','f','3','0','666','673','55','1','1','1','674','58',''),
('17405','sql','1101','57','1','c','4','0','675','675','56','0','1','0','674','60',''),
('17406','sql','1101','58','début','f','3','0','678','682','55','1','2','1','683','60',''),
('17407','sql','1101','59','0','c','4','0','684','684','58','0','1','0','683','60','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 3000 */
