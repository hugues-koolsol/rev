

/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_projets offset 0 (1) */
INSERT INTO tbl_projets (  chi_id_projet ,  chp_nom_projet ,  cht_commentaire_projet ,  che__nur_projet ,  chd__dtm_projet ,  chd__dtc_projet ) VALUES
('3','ref 3','projet de référence N°3','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');
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
('1','dev_dev','1','1','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"8\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"10\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"1\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"1\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"les tâches\",\"attributs\":{\"data-chi_id_source\":\"991\",\"data-chp_nom_source\":\"taches2_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"les tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"11\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":7,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"9\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"5\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"7\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"3\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"103\",\"data-chp_nom_source\":\"sources1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"sources\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"2\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"4\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":11,\"id_interne_parent\":4,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"6\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"1\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"991\" data-chp_nom_source=\"taches2_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"les tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"11\" data-separateur=\"0\">les tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"9\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"7\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"3\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"103\" data-chp_nom_source=\"sources1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"2\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">menus</li></ul></li>    "}','1'),
('2','admin_admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"13\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":6,\"contenu\":\"admin\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"13\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"25\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"27\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"29\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"16\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"31\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"33\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"36\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"13\" data-separateur=\"0\">mes tâches</li><li data-liste_des_menus=\"1\">admin<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"13\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"25\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"27\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"29\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"16\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"31\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"33\" data-separateur=\"0\">menus</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"36\" data-separateur=\"0\">utilisateurs</li></ul></li>    "}','1');
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

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (39) */
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
('103','sources1_c.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('104','sources1_s.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
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
('991','taches2_c.js',NULL,NULL,'0','2','tâches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('992','taches2_s.js',NULL,NULL,'0','2','taches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1000','x_ecran_a_propos1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'1','fichier'),
('1011','taches1_c.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('1012','taches1_s.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'1','fichier'),
('1013','__navigation1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (39) */
INSERT INTO tbl_autorisations (  chi_id_autorisation ,  chx_source_autorisation ,  chx_acces_autorisation ,  che_pour_sous_liste_autorisation ) VALUES
('1','1011','1','0'),
('2','103','1','0'),
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
('37','104','1','0'),
('38','1000','0','0'),
('39','103','2','1'),
('41','95','2','0'),
('42','104','2','1');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (19) */
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
('12','mes tâches','tâches','13','entree_module',NULL,NULL,NULL),
('13','groupes','groupes','25','entree_module',NULL,NULL,NULL),
('14','métier','métier','27','entree_module',NULL,NULL,NULL),
('15','accès','accès','29','entree_module',NULL,NULL,NULL),
('16','autorisations','autorisations','31','entree_module',NULL,NULL,NULL),
('17','à propos','à propos','38','entree_module',NULL,NULL,NULL),
('18','menus','menus','33','entree_module',NULL,NULL,NULL),
('19','utilisateurs','utilisateurs','36','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (1) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','',NULL,NULL,'0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (1) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  chp_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ,  chd_une_heure_tache ) VALUES
('1','1','les tâches des utilisateurs','0','2026-02-09 07:38:23.887','2026-02-09 07:38:23.887','0','00_00_00');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_genres offset 0 (26) */
INSERT INTO tbl_genres (  chi_id_genre ,  chp_nom_genre ,  che_ordre_genre ,  chp_prefixe_genre ,  chp_espece_genre ,  che_longueur_genre ,  che_est_primaire_genre ,  che_est_incrément_genre ,  che_est_obligatoire_genre ,  che_a_init_genre ,  che_init_est_mot_genre ,  cht_valeur_init_genre ,  che_est_parmis_genre ,  cht_parmis_genre ,  cht_fonctions_genre ,  che_est_nur_genre ,  che_est_tsm_genre ,  che_est_tsc_genre ,  chd__dtc_genre ,  chd__dtm_genre ,  che__nur_genre ,  che_est_session_genre ,  chp_nom_en_session_genre ,  che_est_positif_genre ,  cht_particularités_genre ) VALUES
('1','***indéfini***','25','cht','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('2','id primaire non nulle','1','chi','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2025-09-25 16:55:08.841','18','0',NULL,'1',NULL),
('3','varchar 64 NON NULLE','2','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('4','lien NON NULL','5','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('5','zero_un non nulle à 0','17','che','INTEGER',NULL,'0','0','1','1','0','0','1','0,1',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('6','texte NULL','12','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('7','entier NULL','9','che','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('8','lien NULL','6','chx','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('9','entier NON NULL','7','che','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('10','entier NON NULL à zéro','8','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('11','texte NON NULL','11','cht','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('12','varchar 64 NULL','3','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('13','mot de passe','20','chp','VARCHAR','256','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('14','dt23 création','18','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('15','nur','22','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('16','dt23 modification','19','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('17','varchar 255 NON NULLE','4','chp','VARCHAR','255','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,'0',NULL),
('18','id utilisateur','23','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-06 14:10:54.357','2025-10-04 07:03:24.668','8','1','chi_id_utilisateur','0',NULL),
('19','nom technique','21','cht','VARCHAR','128','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_technique1()','0','0','0','2025-11-19 12:07:33.326','2025-11-19 12:07:33.326','0','0',NULL,'0',NULL),
('21','durée_du_travail','10','chn','FLOAT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-02-15 13:48:23.907','2026-02-15 14:10:08.496','1','0',NULL,'0',NULL),
('22','dt10 aaaa_mm_jj','15','chd','VARCHAR','10','0','0','0','1','0','NULL','0',NULL,'date_nulle_ou_comprise_entre(''1000_01_01'',''9999_12_31'')','0','0','0','2026-03-16 12:16:06.262','2026-03-16 12:16:06.262','0','0',NULL,'0',NULL),
('23','tp8 hh_mm_ss','16','chd','VARCHAR','8','0','0','1','1','1','00_00_00','0',NULL,'heure_nulle_ou_comprise_entre(''00_00_00'',''23_59_59'')','0','0','0','2026-03-17 15:45:36.973','2026-03-17 15:45:36.973','0','0',NULL,'0',NULL),
('97','texte NULL source_non_rev','14','cht','TEXT','','0','0','0','1','0','NULL','0','','','0','0','0','2025-10-21 10:14:55.512','2025-10-21 10:14:55.512','0','0','','0','source_non_rev(1)'),
('98','texte NULL source_au_format_rev','13','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2025-10-20 17:48:22.207','2025-10-21 09:41:32.943','5','0',NULL,'0','source_au_format_rev(1)'),
('99','priorité','24','che','INTEGER','2','0','0','1','1','0','0','0',NULL,'test_entier_compris_entre(0,99)','0','0','0','2025-09-06 09:19:20.196','2026-05-07 09:26:44.793','1','0',NULL,'0',NULL),
('109','id projet','26','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-01-17 12:12:01.759','2026-01-17 12:12:01.759','0','1','chi_id_projet','0',NULL);
/*================================================================================ FIN BLOC TABLE tbl_genres offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_bdds offset 0 (1) */
INSERT INTO tbl_bdds (  chi_id_basedd ,  chp_rev_travail_basedd ,  chp_fournisseur_basedd ,  chp_commentaire_basedd ,  chd__dtm_basedd ,  chd__dtc_basedd ,  che__nur_basedd ) VALUES
('1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''''),
   collate(''''),
   transform_base_sur_svg(translate(9.5,40.5))
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
      transform_base_sur_svg(translate(5,27))
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
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''groupe'')
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
      transform_base_sur_svg(translate(6,154))
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
            typologie(cht),
            genre(19),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''metier'')
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
      transform_base_sur_svg(translate(198,119))
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
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''acces'')
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
            genre(4)
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
      transform_base_sur_svg(translate(411,119))
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
            genre(2)
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
            genre(4)
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
            refe_enfant_droite(1),
            refe_parent_gauche(1)
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
      transform_base_sur_svg(translate(701,81))
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
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''menu'')
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
            typologie(chp),
            genre(3)
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
            abrege_du_champ(''condition''),
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
      transform_base_sur_svg(translate(702,248))
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
            typologie(),
            genre(19),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''source'')
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
            typologie(),
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
            typologie(),
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
            typologie(chd),
            genre(16),
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
            abrege_du_champ(''autorisation globale''),
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
      transform_base_sur_svg(translate(392,269))
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
            abrege_du_champ(''nom de connexion de l\''utilisateur''),
            typologie(cht),
            genre(3),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''utilisateur'')
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
            genre(13)
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
            typologie(chd),
            genre(16),
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
      transform_base_sur_svg(translate(687,570))
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
            typologie(chx),
            genre(18),
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
            est_libelle_lien(1),
            nom_bref_libelle_lien(''tache'')
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
            abrege_du_champ(''priorite de la tâche''),
            typologie(chi),
            genre(99)
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
)','sqlite',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');
/*================================================================================ FIN BLOC TABLE tbl_bdds offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_requetes offset 0 (58) */
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
         egal(champ(`T0`,`che_autorisation_globale_source`),:T0_che_autorisation_globale_source),
         dans(champ(`T0`,`che_pour_util_source`),(:T0_che_pour_util_source))
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
   AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
   AND `T0`.`che_pour_util_source` IN (:T0_che_pour_util_source)) 
ORDER BY `T0`.`chi_id_source` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('116','sources','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`che_contient_version_source`),
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
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`che_contient_version_source` , `T0`.`che_autorisation_globale_source` , 
`T0`.`che_pour_util_source`
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
         egal(champ(`T1`,`che_actif_acces`),:T1_che_actif_acces),
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
   AND `T0`.`chi_compteur1_utilisateur` >= :T0_chi_compteur1_utilisateur
   AND `T0`.`chx_acces_utilisateur` = :T0_chx_acces_utilisateur
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T1`.`che_actif_acces` = :T1_che_actif_acces
   AND `T0`.`chx_acces_utilisateur` NOT IN :acces_pas_dans) 
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
      et(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier),supegal(champ(`T0`,`chi_id_metier`),:metier_mini))
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
   AND `T0`.`chp_nom_metier` LIKE :T0_chp_nom_metier
   AND `T0`.`chi_id_metier` >= :metier_mini) 
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
      champ(`T0`,`chx_acces_autorisation`),
      champ(`T0`,`chx_source_autorisation`),
      champ(`T0`,`che_pour_sous_liste_autorisation`),
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
         comme(champ(`T1`,`chp_nom_acces`),:T1_chp_nom_acces),
         egal(champ(`T0`,`che_pour_sous_liste_autorisation`),:T0_che_pour_sous_liste_autorisation),
         pas_dans(champ(`T0`,`chx_acces_autorisation`),:acces_pas_dans)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_acces_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_autorisation`),décroissant()),(champ(`T2`,`chp_nom_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T0`.`chx_acces_autorisation` , `T0`.`chx_source_autorisation` , `T0`.`che_pour_sous_liste_autorisation` , `T1`.`chp_nom_acces` , 
`T2`.`chp_nom_source` , `T2`.`chx_dossier_id_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_autorisation

 LEFT JOIN b1.tbl_sources T2 ON T2.chi_id_source = T0.chx_source_autorisation

WHERE (`T2`.`chp_nom_source` LIKE :T2_chp_nom_source
   AND `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
   AND `T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T0`.`chx_source_autorisation` = :T0_chx_source_autorisation
   AND `T1`.`chp_nom_acces` LIKE :T1_chp_nom_acces
   AND `T0`.`che_pour_sous_liste_autorisation` = :T0_che_pour_sous_liste_autorisation
   AND `T0`.`chx_acces_autorisation` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chx_acces_autorisation` DESC, `T2`.`chp_nom_source` ASC, `T0`.`chi_id_autorisation` DESC, `T2`.`chp_nom_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_autorisations'),
('141','autorisations','select','sélectionner(
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
('142','autorisations','insert','insérer(
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
('143','autorisations','update','modifier(
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
         comme(champ(`T0`,`chp_methode_menu`),:T0_chp_methode_menu),
         egal(champ(`T1`,`chx_acces_autorisation`),:T1_chx_acces_autorisation),
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
   AND `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` = :T0_chx_autorisation_menu
   AND `T0`.`chp_methode_menu` LIKE :T0_chp_methode_menu
   AND `T1`.`chx_acces_autorisation` = :T1_chx_acces_autorisation
   AND `T1`.`chx_acces_autorisation` NOT IN :acces_pas_dans) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('146','menus','select','sélectionner(
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
('147','menus','insert','insérer(
   valeurs(
      affecte(champ(`chp_titre_menu`),:chp_titre_menu),
      affecte(champ(`chx_autorisation_menu`),:chx_autorisation_menu),
      affecte(champ(`chp_methode_menu`),:chp_methode_menu),
      affecte(champ(`cht_libelle_menu`),:cht_libelle_menu),
      affecte(champ(`cht_condition_menu`),:cht_condition_menu),
      affecte(champ(`cht_initialisation_menu`),:cht_initialisation_menu),
      affecte(champ(`cht_condition_js_menu`),:cht_condition_js_menu)
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
    `cht_initialisation_menu` , 
    `cht_condition_js_menu`
) VALUES (
    :chp_titre_menu , 
    :chx_autorisation_menu , 
    :chp_methode_menu , 
    :cht_libelle_menu , 
    :cht_condition_menu , 
    :cht_initialisation_menu , 
    :cht_condition_js_menu
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
('153','menus','select','sélectionner(
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
('163',NULL,'select','sélectionner(
   valeurs(champ(`T0`,`chi_id_autorisation`),champ(`T1`,`chp_nom_source`)),
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
      et(egal(champ(`T0`,`chx_acces_autorisation`),:T0_chx_acces_autorisation),dans(champ(`T1`,`chp_nom_source`),(:T1_chp_nom_source)))
   )
)  ','SELECT 
`T0`.`chi_id_autorisation` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE (`T0`.`chx_acces_autorisation` = :T0_chx_acces_autorisation
   AND `T1`.`chp_nom_source` IN (:T1_chp_nom_source))
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations'),
('164',NULL,'select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus');
/*================================================================================ FIN BLOC TABLE tbl_requetes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_travaux offset 0 (116) */
INSERT INTO tbl_travaux (  chi_id_travail ,  chp_resume_travail ,  cht_rev_travail ,  chx_utilisateur_travail ,  cht_utilisateur_travail ,  chd_dtc_travail ,  chp_etat_travail ,  chx_projet_travail ,  cht_log_travail ,  chn_duree_travail ) VALUES
('1','compilation  delete sql_123 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(123)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(65.081)','65.081'),
('2','compilation  update sql_122 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(122)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(84.393)','84.393'),
('3','compilation  select sql_121 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(121)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(74.019)','74.019'),
('4','compilation  insert sql_120 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(120)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(64.23)','64.23'),
('5','compilation  liste_ecran sql_119 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(119)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(76.449)','76.449'),
('6','compilation  delete sql_118 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(118)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(64.22)','64.22'),
('7','compilation  insert sql_117 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(117)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(58.75)','58.75'),
('8','compilation  select sql_116 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(116)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(71.884)','71.884'),
('9','compilation  liste_ecran sql_115 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(115)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(70.795)','70.795'),
('10','compilation  delete sql_114 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(114)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(57.909)','57.909'),
('11','compilation  update sql_113 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(113)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(61.128)','61.128'),
('12','compilation  select sql_112 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(112)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(66.293)','66.293'),
('13','compilation  insert sql_111 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(111)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(60.135)','60.135'),
('14','compilation  liste_ecran sql_110 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(110)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(70.82)','70.82'),
('15','compilation  update sql_109 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(109)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(65.788)','65.788'),
('16','compilation  select sql_108 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(108)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(76.998)','76.998'),
('17','compilation  update sql_107 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(107)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(58.019)','58.019'),
('18','compilation  select sql_101 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(101)))))','1','poipoip','2026-05-13 07:29:12.965','ok_termine','3','statut(OK),executer_job_cron(81.968)','81.968'),
('19','compilation  select sql_164 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(164)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(73.212)','73.212'),
('20','compilation  select sql_163 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(163)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(66.848)','66.848'),
('21','compilation  select sql_162 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(162)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.166)','58.166'),
('22','compilation  update sql_161 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(161)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(65.475)','65.475'),
('23','compilation  select sql_160 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(160)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.066)','58.066'),
('24','compilation  update sql_159 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(159)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.092)','58.092'),
('25','compilation  update sql_158 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(158)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(73.12)','73.12'),
('26','compilation  update sql_157 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(157)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.096)','58.096'),
('27','compilation  update sql_156 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(156)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.109)','58.109'),
('28','compilation  select sql_155 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(155)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(84.581)','84.581'),
('29','compilation  update sql_154 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(154)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(60.012)','60.012'),
('30','compilation  select sql_153 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(153)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(75.633)','75.633'),
('31','compilation  select sql_152 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(152)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(61.999)','61.999'),
('32','compilation  select sql_151 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(151)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(60.956)','60.956'),
('33','compilation  update sql_150 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(150)))))','1','poipoip','2026-05-13 07:29:15.798','en_cours','3','{
  "0": [],
  "1": [],
  "2": [],
  "3": [],
  "4": []
}','0'),
('34','compilation  delete sql_149 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(149)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(95.749)','95.749'),
('35','compilation  update sql_148 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(148)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(78.1)','78.1'),
('36','compilation  insert sql_147 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(147)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(80.835)','80.835'),
('37','compilation  select sql_146 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(146)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(78.404)','78.404'),
('38','compilation  liste_ecran sql_145 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(145)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(67.228)','67.228'),
('39','compilation  delete sql_144 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(144)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(69.556)','69.556'),
('40','compilation  update sql_143 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(143)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(57.131)','57.131'),
('41','compilation  insert sql_142 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(142)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(68.858)','68.858'),
('42','compilation  select sql_141 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(141)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(95.552)','95.552'),
('43','compilation  liste_ecran sql_140 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(140)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(73.562)','73.562'),
('44','compilation  delete sql_139 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(139)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(67.893)','67.893'),
('45','compilation  update sql_138 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(138)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(60.962)','60.962'),
('46','compilation  insert sql_137 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(137)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(61.496)','61.496'),
('47','compilation  select sql_136 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(136)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(73.741)','73.741'),
('48','compilation  liste_ecran sql_135 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(135)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(74.286)','74.286'),
('49','compilation  delete sql_134 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(134)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.668)','58.668'),
('50','compilation  update sql_133 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(133)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(58.3)','58.3'),
('51','compilation  insert sql_132 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(132)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(64.165)','64.165'),
('52','compilation  select sql_131 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(131)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(64.42)','64.42'),
('53','compilation  liste_ecran sql_130 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(130)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(75.74)','75.74'),
('54','compilation  delete sql_129 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(129)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(74.08)','74.08'),
('55','compilation  update sql_127 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(127)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(61.781)','61.781'),
('56','compilation  insert sql_126 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(126)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(60.227)','60.227'),
('57','compilation  select sql_125 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(125)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(74.059)','74.059'),
('58','compilation  liste_ecran sql_124 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(124)))))','1','poipoip','2026-05-13 07:29:15.798','ok_termine','3','statut(OK),executer_job_cron(73.553)','73.553'),
('59','compilation  select sql_164 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(164)))))','1','dev','2026-05-21 08:20:38.850','en_cours','3','{
  "0": [],
  "1": [],
  "2": [],
  "3": [],
  "4": []
}','0'),
('60','compilation  select sql_163 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(163)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('61','compilation  select sql_162 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(162)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('62','compilation  update sql_161 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(161)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('63','compilation  select sql_160 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(160)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('64','compilation  update sql_159 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(159)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('65','compilation  update sql_158 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(158)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('66','compilation  update sql_157 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(157)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('67','compilation  update sql_156 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(156)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('68','compilation  select sql_155 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(155)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('69','compilation  update sql_154 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(154)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('70','compilation  select sql_153 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(153)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('71','compilation  select sql_152 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(152)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('72','compilation  select sql_151 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(151)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('73','compilation  update sql_150 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(150)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('74','compilation  delete sql_149 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(149)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('75','compilation  update sql_148 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(148)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('76','compilation  insert sql_147 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(147)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('77','compilation  select sql_146 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(146)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('78','compilation  liste_ecran sql_145 tbl_menus','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(145)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('79','compilation  delete sql_144 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(144)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('80','compilation  update sql_143 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(143)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('81','compilation  insert sql_142 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(142)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('82','compilation  select sql_141 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(141)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('83','compilation  liste_ecran sql_140 tbl_autorisations','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(140)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('84','compilation  delete sql_139 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(139)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('85','compilation  update sql_138 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(138)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('86','compilation  insert sql_137 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(137)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('87','compilation  select sql_136 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(136)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('88','compilation  liste_ecran sql_135 tbl_acces','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(135)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('89','compilation  delete sql_134 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(134)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('90','compilation  update sql_133 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(133)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('91','compilation  insert sql_132 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(132)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('92','compilation  select sql_131 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(131)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('93','compilation  liste_ecran sql_130 tbl_groupes','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(130)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('94','compilation  delete sql_129 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(129)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('95','compilation  update sql_127 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(127)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('96','compilation  insert sql_126 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(126)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('97','compilation  select sql_125 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(125)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('98','compilation  liste_ecran sql_124 tbl_metiers','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(124)))))','1','dev','2026-05-21 08:20:38.850','en_file_d_attente','3',NULL,'0'),
('99','compilation  delete sql_123 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(123)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('100','compilation  update sql_122 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(122)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('101','compilation  select sql_121 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(121)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('102','compilation  insert sql_120 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(120)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('103','compilation  liste_ecran sql_119 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(119)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('104','compilation  delete sql_118 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(118)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('105','compilation  insert sql_117 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(117)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('106','compilation  select sql_116 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(116)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('107','compilation  liste_ecran sql_115 tbl_sources','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(115)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('108','compilation  delete sql_114 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(114)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('109','compilation  update sql_113 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(113)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('110','compilation  select sql_112 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(112)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('111','compilation  insert sql_111 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(111)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('112','compilation  liste_ecran sql_110 tbl_taches','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(110)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('113','compilation  update sql_109 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(109)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('114','compilation  select sql_108 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(108)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('115','compilation  update sql_107 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(107)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0'),
('116','compilation  select sql_101 tbl_utilisateurs','pm1(m1(n1(requetes1),f1(compiler_requete_par_id(chi_id_requete(101)))))','1','dev','2026-05-21 08:20:41.126','en_file_d_attente','3',NULL,'0');
/*================================================================================ FIN BLOC TABLE tbl_travaux offset 0 */
