

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
('2','admin_admin','2','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"88\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"12\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"mes tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"tâches\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"13\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":6,\"contenu\":\"admin\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"94\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"13\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"groupes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"25\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métier\",\"attributs\":{\"data-chi_id_source\":\"96\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"métier\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"27\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"99\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"accès\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"29\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"105\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"16\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"autorisations\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"31\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"107\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"menus\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"33\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":3,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"101\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"utilisateurs\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"36\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"12\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"13\" data-separateur=\"0\">mes tâches</li><li data-liste_des_menus=\"1\">admin<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"13\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"25\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"27\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"29\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"16\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"31\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"33\" data-separateur=\"0\">menus</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"36\" data-separateur=\"0\">utilisateurs</li></ul></li>"}','1');
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
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ,  che_autorisation_globale_source ,  cht_condition_rev_source ,  cht_condition_js_source ,  cht_notification_ko_source ) VALUES
('77','__serveur.js',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('78','__serveur.ps1',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('79','_connexion1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL),
('80','_connexion1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL),
('83','__ig1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL),
('84','__ig1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL),
('85','__rev1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('86','__worker1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('88','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2','mes coordonnées','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('89','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2','mes coordonnées','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('94','groupes1_c.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('95','groupes1_s.js',NULL,NULL,'0','2','les groupes','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('96','metiers1_c.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('97','metiers1_s.js',NULL,NULL,'0','2','les métiers','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('98','acces1_s.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('99','acces1_c.js',NULL,NULL,'0','2','les accès','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('100','_tri_arbre1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('101','utilisateurs1_c.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('102','utilisateurs1_s.js',NULL,NULL,'0','2','les utilisteurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('103','sources1_c.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('104','sources1_s.js',NULL,NULL,'0','2','les sources','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('105','autorisations1_c.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('106','autorisations1_s.js',NULL,NULL,'0','2','les autorisations','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('107','menus1_c.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('108','menus1_s.js',NULL,NULL,'0','2','les menus','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('109','w_ast_js_vers_rev1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('110','acorn1_c.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('111','__zip1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('112','__serveur_not_watch.ps1',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('113','__fnt1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('114','__fnt1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('115','__fnts_c_et_s_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('116','w_rev_vers_js1_.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('991','taches2_c.js',NULL,NULL,'0','2','tâches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('992','taches2_s.js',NULL,NULL,'0','2','taches de tous les utilisateurs','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('1000','x_ecran_a_propos1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL),
('1011','taches1_c.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('1012','taches1_s.js',NULL,NULL,'0','2','mes tâches','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL),
('1013','__navigation1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL);
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
   transform_base_sur_svg(translate(6.5,22.5))
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
            est_libelle_lien(1)
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
            est_libelle_lien(1)
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
            est_libelle_lien(1)
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
      transform_base_sur_svg(translate(677,100))
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
            est_libelle_lien(1)
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
      transform_base_sur_svg(translate(679,261))
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
            est_libelle_lien(1)
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
      transform_base_sur_svg(translate(691,526))
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

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 0 (2722) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('7784','sql','123','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('7785','sql','123','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('7786','sql','123','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('7787','sql','123','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('7788','sql','123','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('7789','sql','123','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('7790','sql','123','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('7791','sql','123','7','tbl_utilisateurs','c','5','0','105','120','6','0','1','0','104','8',''),
('7792','sql','123','8','base','f','5','0','122','125','6','1','2','1','126','15',''),
('7793','sql','123','9','b1','c','6','0','127','128','8','0','1','0','126','15',''),
('7794','sql','123','10','conditions','f','1','0','150','159','1','1','3','3','160','15',''),
('7795','sql','123','11','egal','f','2','0','161','164','10','2','1','2','165','15',''),
('7796','sql','123','12','champ','f','3','0','166','170','11','1','1','1','171','14',''),
('7797','sql','123','13','chi_id_utilisateur','c','4','2','173','190','12','0','1','0','171','15',''),
('7798','sql','123','14',':chi_id_utilisateur','c','3','0','194','212','11','0','2','0','171','15',''),
('7799','sql','122','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('7800','sql','122','1','modifier','f','0','0','0','7','0','4','1','6','8','30',''),
('7801','sql','122','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('7802','sql','122','3','1','c','2','0','31','31','2','0','1','0','30','30',''),
('7803','sql','122','4','valeurs','f','1','0','38','44','1','4','2','3','45','18',''),
('7804','sql','122','5','#','f','2','0','53','53','4','0','1','0','54','6',''),
('7805','sql','122','6','affecte','f','2','0','64','70','4','2','2','2','71','10',''),
('7806','sql','122','7','champ','f','3','0','72','76','6','1','1','1','77','9',''),
('7807','sql','122','8','chp_nom_de_connexion_utilisateur','c','4','2','79','110','7','0','1','0','77','30',''),
('7808','sql','122','9',':n_chp_nom_de_connexion_utilisateur','c','3','0','114','148','6','0','2','0','77','30',''),
('7809','sql','122','10','affecte','f','2','0','158','164','4','2','3','2','165','14',''),
('7810','sql','122','11','champ','f','3','0','166','170','10','1','1','1','171','13',''),
('7811','sql','122','12','chx_acces_utilisateur','c','4','2','173','193','11','0','1','0','171','30',''),
('7812','sql','122','13',':n_chx_acces_utilisateur','c','3','0','197','220','10','0','2','0','171','30',''),
('7813','sql','122','14','affecte','f','2','0','230','236','4','2','4','2','237','30',''),
('7814','sql','122','15','champ','f','3','0','238','242','14','1','1','1','243','17',''),
('7815','sql','122','16','che_actif_utilisateur','c','4','2','245','265','15','0','1','0','243','30',''),
('7816','sql','122','17',':n_che_actif_utilisateur','c','3','0','269','292','14','0','2','0','243','30',''),
('7817','sql','122','18','provenance','f','1','0','304','313','1','1','3','5','314','25',''),
('7818','sql','122','19','table_reference','f','2','0','322','336','18','1','1','4','337','30',''),
('7819','sql','122','20','source','f','3','0','348','353','19','1','1','3','354','30',''),
('7820','sql','122','21','nom_de_la_table','f','4','0','355','369','20','2','1','2','370','30',''),
('7821','sql','122','22','tbl_utilisateurs','c','5','0','371','386','21','0','1','0','370','23',''),
('7822','sql','122','23','base','f','5','0','388','391','21','1','2','1','392','30',''),
('7823','sql','122','24','b1','c','6','0','393','394','23','0','1','0','392','30',''),
('7824','sql','122','25','conditions','f','1','0','416','425','1','1','4','3','426','30',''),
('7825','sql','122','26','egal','f','2','0','427','430','25','2','1','2','431','30',''),
('7826','sql','122','27','champ','f','3','0','432','436','26','1','1','1','437','29',''),
('7827','sql','122','28','chi_id_utilisateur','c','4','2','439','456','27','0','1','0','437','30',''),
('7828','sql','122','29',':c_chi_id_utilisateur','c','3','0','460','480','26','0','2','0','437','30',''),
('7829','sql','121','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('7830','sql','121','1','sélectionner','f','0','0','0','11','0','4','1','6','12','69',''),
('7831','sql','121','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('7832','sql','121','3','1','c','2','0','35','35','2','0','1','0','34','69',''),
('7833','sql','121','4','valeurs','f','1','0','42','48','1','11','2','2','49','38',''),
('7834','sql','121','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('7835','sql','121','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('7836','sql','121','7','chi_id_utilisateur','c','3','2','69','86','5','0','2','0','62','69',''),
('7837','sql','121','8','champ','f','2','0','97','101','4','2','2','1','102','11',''),
('7838','sql','121','9','T0','c','3','2','104','105','8','0','1','0','102','10',''),
('7839','sql','121','10','chp_nom_de_connexion_utilisateur','c','3','2','109','140','8','0','2','0','102','69',''),
('7840','sql','121','11','champ','f','2','0','151','155','4','2','3','1','156','14',''),
('7841','sql','121','12','T0','c','3','2','158','159','11','0','1','0','156','13',''),
('7842','sql','121','13','chp_mot_de_passe_utilisateur','c','3','2','163','190','11','0','2','0','156','69',''),
('7843','sql','121','14','champ','f','2','0','201','205','4','2','4','1','206','17',''),
('7844','sql','121','15','T0','c','3','2','208','209','14','0','1','0','206','16',''),
('7845','sql','121','16','chp_parametres_utilisateur','c','3','2','213','238','14','0','2','0','206','69',''),
('7846','sql','121','17','champ','f','2','0','249','253','4','2','5','1','254','20',''),
('7847','sql','121','18','T0','c','3','2','256','257','17','0','1','0','254','19',''),
('7848','sql','121','19','chi_compteur1_utilisateur','c','3','2','261','285','17','0','2','0','254','69',''),
('7849','sql','121','20','champ','f','2','0','296','300','4','2','6','1','301','23',''),
('7850','sql','121','21','T0','c','3','2','303','304','20','0','1','0','301','22',''),
('7851','sql','121','22','che__nur_utilisateur','c','3','2','308','327','20','0','2','0','301','69',''),
('7852','sql','121','23','champ','f','2','0','338','342','4','2','7','1','343','26',''),
('7853','sql','121','24','T0','c','3','2','345','346','23','0','1','0','343','25',''),
('7854','sql','121','25','chd__dtm_utilisateur','c','3','2','350','369','23','0','2','0','343','69',''),
('7855','sql','121','26','champ','f','2','0','380','384','4','2','8','1','385','29',''),
('7856','sql','121','27','T0','c','3','2','387','388','26','0','1','0','385','28',''),
('7857','sql','121','28','chd__dtc_utilisateur','c','3','2','392','411','26','0','2','0','385','69',''),
('7858','sql','121','29','champ','f','2','0','422','426','4','2','9','1','427','32',''),
('7859','sql','121','30','T0','c','3','2','429','430','29','0','1','0','427','31',''),
('7860','sql','121','31','chx_acces_utilisateur','c','3','2','434','454','29','0','2','0','427','69',''),
('7861','sql','121','32','champ','f','2','0','465','469','4','2','10','1','470','35',''),
('7862','sql','121','33','T1','c','3','2','472','473','32','0','1','0','470','34',''),
('7863','sql','121','34','chp_nom_acces','c','3','2','477','489','32','0','2','0','470','69',''),
('7864','sql','121','35','champ','f','2','0','500','504','4','2','11','1','505','69',''),
('7865','sql','121','36','T0','c','3','2','507','508','35','0','1','0','505','37',''),
('7866','sql','121','37','che_actif_utilisateur','c','3','2','512','532','35','0','2','0','505','69',''),
('7867','sql','121','38','provenance','f','1','0','545','554','1','2','3','5','555','63',''),
('7868','sql','121','39','table_reference','f','2','0','563','577','38','1','1','4','578','47',''),
('7869','sql','121','40','source','f','3','0','589','594','39','1','1','3','595','69',''),
('7870','sql','121','41','nom_de_la_table','f','4','0','596','610','40','3','1','2','611','69',''),
('7871','sql','121','42','tbl_utilisateurs','c','5','0','612','627','41','0','1','0','611','43',''),
('7872','sql','121','43','alias','f','5','0','629','633','41','1','2','1','634','45',''),
('7873','sql','121','44','T0','c','6','0','635','636','43','0','1','0','634','69',''),
('7874','sql','121','45','base','f','5','0','639','642','41','1','3','1','643','69',''),
('7875','sql','121','46','b1','c','6','0','644','645','45','0','1','0','643','69',''),
('7876','sql','121','47','jointure_gauche','f','2','0','665','679','38','2','2','4','680','69',''),
('7877','sql','121','48','source','f','3','0','691','696','47','1','1','3','697','55',''),
('7878','sql','121','49','nom_de_la_table','f','4','0','698','712','48','3','1','2','713','69',''),
('7879','sql','121','50','tbl_acces','c','5','0','714','722','49','0','1','0','713','51',''),
('7880','sql','121','51','alias','f','5','0','724','728','49','1','2','1','729','53',''),
('7881','sql','121','52','T1','c','6','0','730','731','51','0','1','0','729','69',''),
('7882','sql','121','53','base','f','5','0','734','737','49','1','3','1','738','69',''),
('7883','sql','121','54','b1','c','6','0','739','740','53','0','1','0','738','69',''),
('7884','sql','121','55','contrainte','f','3','0','755','764','47','1','2','3','765','69',''),
('7885','sql','121','56','egal','f','4','0','766','769','55','2','1','2','770','69',''),
('7886','sql','121','57','champ','f','5','0','771','775','56','2','1','1','776','60',''),
('7887','sql','121','58','T1','c','6','0','777','778','57','0','1','0','776','59',''),
('7888','sql','121','59','chi_id_acces','c','6','0','780','791','57','0','2','0','776','69',''),
('7889','sql','121','60','champ','f','5','0','794','798','56','2','2','1','799','69',''),
('7890','sql','121','61','T0','c','6','0','800','801','60','0','1','0','799','62',''),
('7891','sql','121','62','chx_acces_utilisateur','c','6','0','803','823','60','0','2','0','799','69',''),
('7892','sql','121','63','conditions','f','1','0','845','854','1','1','4','3','855','69',''),
('7893','sql','121','64','egal','f','2','0','856','859','63','2','1','2','860','69',''),
('7894','sql','121','65','champ','f','3','0','861','865','64','2','1','1','866','68',''),
('7895','sql','121','66','T0','c','4','2','868','869','65','0','1','0','866','67',''),
('7896','sql','121','67','chi_id_utilisateur','c','4','2','873','890','65','0','2','0','866','69',''),
('7897','sql','121','68',':T0_chi_id_utilisateur','c','3','0','894','915','64','0','2','0','866','69',''),
('7898','sql','120','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('7899','sql','120','1','insérer','f','0','0','0','6','0','3','1','6','7','24',''),
('7900','sql','120','2','base_de_reference','f','1','0','12','28','1','1','1','1','29','4',''),
('7901','sql','120','3','1','c','2','0','30','30','2','0','1','0','29','24',''),
('7902','sql','120','4','valeurs','f','1','0','37','43','1','3','2','3','44','17',''),
('7903','sql','120','5','affecte','f','2','0','45','51','4','2','1','2','52','9',''),
('7904','sql','120','6','champ','f','3','0','53','57','5','1','1','1','58','8',''),
('7905','sql','120','7','chp_nom_de_connexion_utilisateur','c','4','2','60','91','6','0','1','0','58','24',''),
('7906','sql','120','8',':chp_nom_de_connexion_utilisateur','c','3','0','95','127','5','0','2','0','58','24',''),
('7907','sql','120','9','affecte','f','2','0','130','136','4','2','2','2','137','13',''),
('7908','sql','120','10','champ','f','3','0','138','142','9','1','1','1','143','12',''),
('7909','sql','120','11','chx_acces_utilisateur','c','4','2','145','165','10','0','1','0','143','24',''),
('7910','sql','120','12',':chx_acces_utilisateur','c','3','0','169','190','9','0','2','0','143','24',''),
('7911','sql','120','13','affecte','f','2','0','193','199','4','2','3','2','200','24',''),
('7912','sql','120','14','champ','f','3','0','201','205','13','1','1','1','206','16',''),
('7913','sql','120','15','che_actif_utilisateur','c','4','2','208','228','14','0','1','0','206','24',''),
('7914','sql','120','16',':che_actif_utilisateur','c','3','0','232','253','13','0','2','0','206','24',''),
('7915','sql','120','17','provenance','f','1','0','261','270','1','1','3','5','271','24',''),
('7916','sql','120','18','table_reference','f','2','0','279','293','17','1','1','4','294','24',''),
('7917','sql','120','19','source','f','3','0','305','310','18','1','1','3','311','24',''),
('7918','sql','120','20','nom_de_la_table','f','4','0','312','326','19','2','1','2','327','24',''),
('7919','sql','120','21','tbl_utilisateurs','c','5','0','328','343','20','0','1','0','327','22',''),
('7920','sql','120','22','base','f','5','0','345','348','20','1','2','1','349','24',''),
('7921','sql','120','23','b1','c','6','0','350','351','22','0','1','0','349','24',''),
('7922','sql','119','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('7923','sql','119','1','sélectionner','f','0','0','0','11','0','4','1','6','12','106',''),
('7924','sql','119','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('7925','sql','119','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('7926','sql','119','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('7927','sql','119','5','chi_id_utilisateur','c','3','2','44','61','3','0','2','0','37','106',''),
('7928','sql','119','6','champ','f','2','0','72','76','2','2','2','1','77','9',''),
('7929','sql','119','7','T0','c','3','2','79','80','6','0','1','0','77','8',''),
('7930','sql','119','8','chp_nom_de_connexion_utilisateur','c','3','2','84','115','6','0','2','0','77','106',''),
('7931','sql','119','9','champ','f','2','0','126','130','2','2','3','1','131','12',''),
('7932','sql','119','10','T0','c','3','2','133','134','9','0','1','0','131','11',''),
('7933','sql','119','11','chp_mot_de_passe_utilisateur','c','3','2','138','165','9','0','2','0','131','106',''),
('7934','sql','119','12','champ','f','2','0','176','180','2','2','4','1','181','15',''),
('7935','sql','119','13','T0','c','3','2','183','184','12','0','1','0','181','14',''),
('7936','sql','119','14','chi_compteur1_utilisateur','c','3','2','188','212','12','0','2','0','181','106',''),
('7937','sql','119','15','champ','f','2','0','223','227','2','2','5','1','228','18',''),
('7938','sql','119','16','T0','c','3','2','230','231','15','0','1','0','228','17',''),
('7939','sql','119','17','chx_acces_utilisateur','c','3','2','235','255','15','0','2','0','228','106',''),
('7940','sql','119','18','champ','f','2','0','266','270','2','2','6','1','271','21',''),
('7941','sql','119','19','T1','c','3','2','273','274','18','0','1','0','271','20',''),
('7942','sql','119','20','chp_nom_acces','c','3','2','278','290','18','0','2','0','271','106',''),
('7943','sql','119','21','champ','f','2','0','301','305','2','2','7','1','306','24',''),
('7944','sql','119','22','T0','c','3','2','308','309','21','0','1','0','306','23',''),
('7945','sql','119','23','che_actif_utilisateur','c','3','2','313','333','21','0','2','0','306','106',''),
('7946','sql','119','24','champ','f','2','0','344','348','2','2','8','1','349','106',''),
('7947','sql','119','25','T1','c','3','2','351','352','24','0','1','0','349','26',''),
('7948','sql','119','26','che_actif_acces','c','3','2','356','370','24','0','2','0','349','106',''),
('7949','sql','119','27','provenance','f','1','0','383','392','1','2','2','5','393','52',''),
('7950','sql','119','28','table_reference','f','2','0','401','415','27','1','1','4','416','36',''),
('7951','sql','119','29','source','f','3','0','427','432','28','1','1','3','433','106',''),
('7952','sql','119','30','nom_de_la_table','f','4','0','434','448','29','3','1','2','449','106',''),
('7953','sql','119','31','tbl_utilisateurs','c','5','0','450','465','30','0','1','0','449','32',''),
('7954','sql','119','32','alias','f','5','0','467','471','30','1','2','1','472','34',''),
('7955','sql','119','33','T0','c','6','0','473','474','32','0','1','0','472','106',''),
('7956','sql','119','34','base','f','5','0','477','480','30','1','3','1','481','106',''),
('7957','sql','119','35','b1','c','6','0','482','483','34','0','1','0','481','106',''),
('7958','sql','119','36','jointure_gauche','f','2','0','503','517','27','2','2','4','518','106',''),
('7959','sql','119','37','source','f','3','0','529','534','36','1','1','3','535','44',''),
('7960','sql','119','38','nom_de_la_table','f','4','0','536','550','37','3','1','2','551','106',''),
('7961','sql','119','39','tbl_acces','c','5','0','552','560','38','0','1','0','551','40',''),
('7962','sql','119','40','alias','f','5','0','562','566','38','1','2','1','567','42',''),
('7963','sql','119','41','T1','c','6','0','568','569','40','0','1','0','567','106',''),
('7964','sql','119','42','base','f','5','0','572','575','38','1','3','1','576','106',''),
('7965','sql','119','43','b1','c','6','0','577','578','42','0','1','0','576','106',''),
('7966','sql','119','44','contrainte','f','3','0','593','602','36','1','2','3','603','106',''),
('7967','sql','119','45','egal','f','4','0','604','607','44','2','1','2','608','106',''),
('7968','sql','119','46','champ','f','5','0','609','613','45','2','1','1','614','49',''),
('7969','sql','119','47','T1','c','6','0','615','616','46','0','1','0','614','48',''),
('7970','sql','119','48','chi_id_acces','c','6','0','618','629','46','0','2','0','614','106',''),
('7971','sql','119','49','champ','f','5','0','632','636','45','2','2','1','637','106',''),
('7972','sql','119','50','T0','c','6','0','638','639','49','0','1','0','637','51',''),
('7973','sql','119','51','chx_acces_utilisateur','c','6','0','641','661','49','0','2','0','637','106',''),
('7974','sql','119','52','conditions','f','1','0','683','692','1','1','3','4','693','94',''),
('7975','sql','119','53','et','f','2','0','701','702','52','8','1','3','703','106',''),
('7976','sql','119','54','egal','f','3','0','714','717','53','2','1','2','718','59',''),
('7977','sql','119','55','champ','f','4','0','719','723','54','2','1','1','724','58',''),
('7978','sql','119','56','T0','c','5','2','726','727','55','0','1','0','724','57',''),
('7979','sql','119','57','chi_id_utilisateur','c','5','2','731','748','55','0','2','0','724','106',''),
('7980','sql','119','58',':T0_chi_id_utilisateur','c','4','0','752','773','54','0','2','0','724','106',''),
('7981','sql','119','59','comme','f','3','0','786','790','53','2','2','2','791','64',''),
('7982','sql','119','60','champ','f','4','0','792','796','59','2','1','1','797','63',''),
('7983','sql','119','61','T0','c','5','2','799','800','60','0','1','0','797','62',''),
('7984','sql','119','62','chp_nom_de_connexion_utilisateur','c','5','2','804','835','60','0','2','0','797','106',''),
('7985','sql','119','63',':T0_chp_nom_de_connexion_utilisateur','c','4','0','839','874','59','0','2','0','797','106',''),
('7986','sql','119','64','egal','f','3','0','887','890','53','2','3','2','891','69',''),
('7987','sql','119','65','champ','f','4','0','892','896','64','2','1','1','897','68',''),
('7988','sql','119','66','T0','c','5','2','899','900','65','0','1','0','897','67',''),
('7989','sql','119','67','che_actif_utilisateur','c','5','2','904','924','65','0','2','0','897','106',''),
('7990','sql','119','68',':T0_che_actif_utilisateur','c','4','0','928','952','64','0','2','0','897','106',''),
('7991','sql','119','69','supegal','f','3','0','965','971','53','2','4','2','972','74',''),
('7992','sql','119','70','champ','f','4','0','973','977','69','2','1','1','978','73',''),
('7993','sql','119','71','T0','c','5','2','980','981','70','0','1','0','978','72',''),
('7994','sql','119','72','chi_compteur1_utilisateur','c','5','2','985','1009','70','0','2','0','978','106',''),
('7995','sql','119','73',':T0_chi_compteur1_utilisateur','c','4','0','1013','1041','69','0','2','0','978','106',''),
('7996','sql','119','74','egal','f','3','0','1054','1057','53','2','5','2','1058','79',''),
('7997','sql','119','75','champ','f','4','0','1059','1063','74','2','1','1','1064','78',''),
('7998','sql','119','76','T0','c','5','2','1066','1067','75','0','1','0','1064','77',''),
('7999','sql','119','77','chx_acces_utilisateur','c','5','2','1071','1091','75','0','2','0','1064','106',''),
('8000','sql','119','78',':T0_chx_acces_utilisateur','c','4','0','1095','1119','74','0','2','0','1064','106',''),
('8001','sql','119','79','comme','f','3','0','1132','1136','53','2','6','2','1137','84',''),
('8002','sql','119','80','champ','f','4','0','1138','1142','79','2','1','1','1143','83',''),
('8003','sql','119','81','T1','c','5','2','1145','1146','80','0','1','0','1143','82',''),
('8004','sql','119','82','chp_nom_acces','c','5','2','1150','1162','80','0','2','0','1143','106',''),
('8005','sql','119','83',':T1_chp_nom_acces','c','4','0','1166','1182','79','0','2','0','1143','106',''),
('8006','sql','119','84','egal','f','3','0','1195','1198','53','2','7','2','1199','89',''),
('8007','sql','119','85','champ','f','4','0','1200','1204','84','2','1','1','1205','88',''),
('8008','sql','119','86','T1','c','5','2','1207','1208','85','0','1','0','1205','87',''),
('8009','sql','119','87','che_actif_acces','c','5','2','1212','1226','85','0','2','0','1205','106',''),
('8010','sql','119','88',':T1_che_actif_acces','c','4','0','1230','1248','84','0','2','0','1205','106',''),
('8011','sql','119','89','pas_dans','f','3','0','1261','1268','53','2','8','2','1269','106',''),
('8012','sql','119','90','champ','f','4','0','1270','1274','89','2','1','1','1275','93',''),
('8013','sql','119','91','T0','c','5','2','1277','1278','90','0','1','0','1275','92',''),
('8014','sql','119','92','chx_acces_utilisateur','c','5','2','1282','1302','90','0','2','0','1275','106',''),
('8015','sql','119','93',':acces_pas_dans','c','4','0','1306','1320','89','0','2','0','1275','106',''),
('8016','sql','119','94','complements','f','1','0','1340','1350','1','2','4','4','1351','106',''),
('8017','sql','119','95','trier_par','f','2','0','1359','1367','94','1','1','3','1368','101',''),
('8018','sql','119','96','','f','3','0','1359','1367','95','2','1','2','1369','106',''),
('8019','sql','119','97','champ','f','4','0','1370','1374','96','2','1','1','1375','100',''),
('8020','sql','119','98','T0','c','5','2','1377','1378','97','0','1','0','1375','99',''),
('8021','sql','119','99','chi_id_utilisateur','c','5','2','1382','1399','97','0','2','0','1375','106',''),
('8022','sql','119','100','décroissant','f','4','0','1403','1413','96','0','2','0','1414','106',''),
('8023','sql','119','101','limité_à','f','2','0','1426','1433','94','2','2','2','1434','106',''),
('8024','sql','119','102','quantité','f','3','0','1435','1442','101','1','1','1','1443','104',''),
('8025','sql','119','103',':quantitee','c','4','0','1444','1453','102','0','1','0','1443','106',''),
('8026','sql','119','104','début','f','3','0','1456','1460','101','1','2','1','1461','106',''),
('8027','sql','119','105',':debut','c','4','0','1462','1467','104','0','1','0','1461','106',''),
('8028','sql','118','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8029','sql','118','1','supprimer','f','0','0','0','8','0','3','1','6','9','16',''),
('8030','sql','118','2','base_de_reference','f','1','0','14','30','1','1','1','1','31','4',''),
('8031','sql','118','3','1','c','2','0','32','32','2','0','1','0','31','16',''),
('8032','sql','118','4','provenance','f','1','0','39','48','1','1','2','5','49','11',''),
('8033','sql','118','5','table_reference','f','2','0','57','71','4','1','1','4','72','16',''),
('8034','sql','118','6','source','f','3','0','83','88','5','1','1','3','89','16',''),
('8035','sql','118','7','nom_de_la_table','f','4','0','90','104','6','2','1','2','105','16',''),
('8036','sql','118','8','tbl_sources','c','5','0','106','116','7','0','1','0','105','9',''),
('8037','sql','118','9','base','f','5','0','118','121','7','1','2','1','122','16',''),
('8038','sql','118','10','b1','c','6','0','123','124','9','0','1','0','122','16',''),
('8039','sql','118','11','conditions','f','1','0','146','155','1','1','3','3','156','16',''),
('8040','sql','118','12','egal','f','2','0','157','160','11','2','1','2','161','16',''),
('8041','sql','118','13','champ','f','3','0','162','166','12','1','1','1','167','15',''),
('8042','sql','118','14','chi_id_source','c','4','2','169','181','13','0','1','0','167','16',''),
('8043','sql','118','15',':chi_id_source','c','3','0','185','198','12','0','2','0','167','16',''),
('8044','sql','117','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8045','sql','117','1','insérer','f','0','0','0','6','0','3','1','6','7','31',''),
('8046','sql','117','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('8047','sql','117','3','valeurs','f','1','0','36','42','1','5','2','3','43','24',''),
('8048','sql','117','4','affecte','f','2','0','51','57','3','2','1','2','58','8',''),
('8049','sql','117','5','champ','f','3','0','59','63','4','1','1','1','64','7',''),
('8050','sql','117','6','chp_nom_source','c','4','2','66','79','5','0','1','0','64','31',''),
('8051','sql','117','7',':chp_nom_source','c','3','0','83','97','4','0','2','0','64','31',''),
('8052','sql','117','8','affecte','f','2','0','107','113','3','2','2','2','114','12',''),
('8053','sql','117','9','champ','f','3','0','115','119','8','1','1','1','120','11',''),
('8054','sql','117','10','che_binaire_source','c','4','2','122','139','9','0','1','0','120','31',''),
('8055','sql','117','11',':che_binaire_source','c','3','0','143','161','8','0','2','0','120','31',''),
('8056','sql','117','12','affecte','f','2','0','171','177','3','2','3','2','178','16',''),
('8057','sql','117','13','champ','f','3','0','179','183','12','1','1','1','184','15',''),
('8058','sql','117','14','cht_commentaire_source','c','4','2','186','207','13','0','1','0','184','31',''),
('8059','sql','117','15',':cht_commentaire_source','c','3','0','211','233','12','0','2','0','184','31',''),
('8060','sql','117','16','affecte','f','2','0','243','249','3','2','4','2','250','20',''),
('8061','sql','117','17','champ','f','3','0','251','255','16','1','1','1','256','19',''),
('8062','sql','117','18','che_contient_version_source','c','4','2','258','284','17','0','1','0','256','31',''),
('8063','sql','117','19',':che_contient_version_source','c','3','0','288','315','16','0','2','0','256','31',''),
('8064','sql','117','20','affecte','f','2','0','325','331','3','2','5','2','332','31',''),
('8065','sql','117','21','champ','f','3','0','333','337','20','1','1','1','338','23',''),
('8066','sql','117','22','che_autorisation_globale_source','c','4','2','340','370','21','0','1','0','338','31',''),
('8067','sql','117','23',':che_autorisation_globale_source','c','3','0','374','405','20','0','2','0','338','31',''),
('8068','sql','117','24','provenance','f','1','0','417','426','1','1','3','5','427','31',''),
('8069','sql','117','25','table_reference','f','2','0','435','449','24','1','1','4','450','31',''),
('8070','sql','117','26','source','f','3','0','461','466','25','1','1','3','467','31',''),
('8071','sql','117','27','nom_de_la_table','f','4','0','468','482','26','2','1','2','483','31',''),
('8072','sql','117','28','tbl_sources','c','5','0','484','494','27','0','1','0','483','29',''),
('8073','sql','117','29','base','f','5','0','496','499','27','1','2','1','500','31',''),
('8074','sql','117','30','b1','c','6','0','501','502','29','0','1','0','500','31',''),
('8075','sql','116','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8076','sql','116','1','sélectionner','f','0','0','0','11','0','4','1','6','12','35',''),
('8077','sql','116','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8078','sql','116','3','1','c','2','0','35','35','2','0','1','0','34','35',''),
('8079','sql','116','4','valeurs','f','1','0','42','48','1','5','2','2','49','20',''),
('8080','sql','116','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8081','sql','116','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8082','sql','116','7','chi_id_source','c','3','2','69','81','5','0','2','0','62','35',''),
('8083','sql','116','8','champ','f','2','0','92','96','4','2','2','1','97','11',''),
('8084','sql','116','9','T0','c','3','2','99','100','8','0','1','0','97','10',''),
('8085','sql','116','10','chp_nom_source','c','3','2','104','117','8','0','2','0','97','35',''),
('8086','sql','116','11','champ','f','2','0','128','132','4','2','3','1','133','14',''),
('8087','sql','116','12','T0','c','3','2','135','136','11','0','1','0','133','13',''),
('8088','sql','116','13','cht_commentaire_source','c','3','2','140','161','11','0','2','0','133','35',''),
('8089','sql','116','14','champ','f','2','0','172','176','4','2','4','1','177','17',''),
('8090','sql','116','15','T0','c','3','2','179','180','14','0','1','0','177','16',''),
('8091','sql','116','16','che_contient_version_source','c','3','2','184','210','14','0','2','0','177','35',''),
('8092','sql','116','17','champ','f','2','0','221','225','4','2','5','1','226','35',''),
('8093','sql','116','18','T0','c','3','2','228','229','17','0','1','0','226','19',''),
('8094','sql','116','19','che_autorisation_globale_source','c','3','2','233','263','17','0','2','0','226','35',''),
('8095','sql','116','20','provenance','f','1','0','276','285','1','1','3','5','286','29',''),
('8096','sql','116','21','table_reference','f','2','0','294','308','20','1','1','4','309','35',''),
('8097','sql','116','22','source','f','3','0','320','325','21','1','1','3','326','35',''),
('8098','sql','116','23','nom_de_la_table','f','4','0','327','341','22','3','1','2','342','35',''),
('8099','sql','116','24','tbl_sources','c','5','0','343','353','23','0','1','0','342','25',''),
('8100','sql','116','25','alias','f','5','0','355','359','23','1','2','1','360','27',''),
('8101','sql','116','26','T0','c','6','0','361','362','25','0','1','0','360','35',''),
('8102','sql','116','27','base','f','5','0','365','368','23','1','3','1','369','35',''),
('8103','sql','116','28','b1','c','6','0','370','371','27','0','1','0','369','35',''),
('8104','sql','116','29','conditions','f','1','0','393','402','1','1','4','3','403','35',''),
('8105','sql','116','30','egal','f','2','0','404','407','29','2','1','2','408','35',''),
('8106','sql','116','31','champ','f','3','0','409','413','30','2','1','1','414','34',''),
('8107','sql','116','32','T0','c','4','2','416','417','31','0','1','0','414','33',''),
('8108','sql','116','33','chi_id_source','c','4','2','421','433','31','0','2','0','414','35',''),
('8109','sql','116','34',':T0_chi_id_source','c','3','0','437','453','30','0','2','0','414','35',''),
('8110','sql','115','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8111','sql','115','1','sélectionner','f','0','0','0','11','0','5','1','6','12','89',''),
('8112','sql','115','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8113','sql','115','3','1','c','2','0','35','35','2','0','1','0','34','89',''),
('8114','sql','115','4','valeurs','f','1','0','42','48','1','7','2','2','49','26',''),
('8115','sql','115','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8116','sql','115','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8117','sql','115','7','chi_id_source','c','3','2','69','81','5','0','2','0','62','89',''),
('8118','sql','115','8','champ','f','2','0','92','96','4','2','2','1','97','11',''),
('8119','sql','115','9','T0','c','3','2','99','100','8','0','1','0','97','10',''),
('8120','sql','115','10','chp_nom_source','c','3','2','104','117','8','0','2','0','97','89',''),
('8121','sql','115','11','champ','f','2','0','128','132','4','2','3','1','133','14',''),
('8122','sql','115','12','T0','c','3','2','135','136','11','0','1','0','133','13',''),
('8123','sql','115','13','che_binaire_source','c','3','2','140','157','11','0','2','0','133','89',''),
('8124','sql','115','14','champ','f','2','0','168','172','4','2','4','1','173','17',''),
('8125','sql','115','15','T0','c','3','2','175','176','14','0','1','0','173','16',''),
('8126','sql','115','16','cht_commentaire_source','c','3','2','180','201','14','0','2','0','173','89',''),
('8127','sql','115','17','champ','f','2','0','212','216','4','2','5','1','217','20',''),
('8128','sql','115','18','T0','c','3','2','219','220','17','0','1','0','217','19',''),
('8129','sql','115','19','che_contient_version_source','c','3','2','224','250','17','0','2','0','217','89',''),
('8130','sql','115','20','champ','f','2','0','261','265','4','2','6','1','266','23',''),
('8131','sql','115','21','T0','c','3','2','268','269','20','0','1','0','266','22',''),
('8132','sql','115','22','che_autorisation_globale_source','c','3','2','273','303','20','0','2','0','266','89',''),
('8133','sql','115','23','champ','f','2','0','314','318','4','2','7','1','319','89',''),
('8134','sql','115','24','T0','c','3','2','321','322','23','0','1','0','319','25',''),
('8135','sql','115','25','chx_dossier_id_source','c','3','2','326','346','23','0','2','0','319','89',''),
('8136','sql','115','26','provenance','f','1','0','359','368','1','1','3','5','369','35',''),
('8137','sql','115','27','table_reference','f','2','0','377','391','26','1','1','4','392','89',''),
('8138','sql','115','28','source','f','3','0','403','408','27','1','1','3','409','89',''),
('8139','sql','115','29','nom_de_la_table','f','4','0','410','424','28','3','1','2','425','89',''),
('8140','sql','115','30','tbl_sources','c','5','0','426','436','29','0','1','0','425','31',''),
('8141','sql','115','31','alias','f','5','0','438','442','29','1','2','1','443','33',''),
('8142','sql','115','32','T0','c','6','0','444','445','31','0','1','0','443','89',''),
('8143','sql','115','33','base','f','5','0','448','451','29','1','3','1','452','89',''),
('8144','sql','115','34','b1','c','6','0','453','454','33','0','1','0','452','89',''),
('8145','sql','115','35','conditions','f','1','0','476','485','1','1','4','4','486','77',''),
('8146','sql','115','36','et','f','2','0','494','495','35','8','1','3','496','89',''),
('8147','sql','115','37','comme','f','3','0','507','511','36','2','1','2','512','42',''),
('8148','sql','115','38','champ','f','4','0','513','517','37','2','1','1','518','41',''),
('8149','sql','115','39','T0','c','5','2','520','521','38','0','1','0','518','40',''),
('8150','sql','115','40','chp_nom_source','c','5','2','525','538','38','0','2','0','518','89',''),
('8151','sql','115','41',':T0_chp_nom_source','c','4','0','542','559','37','0','2','0','518','89',''),
('8152','sql','115','42','egal','f','3','0','572','575','36','2','2','2','576','47',''),
('8153','sql','115','43','champ','f','4','0','577','581','42','2','1','1','582','46',''),
('8154','sql','115','44','T0','c','5','2','584','585','43','0','1','0','582','45',''),
('8155','sql','115','45','chi_id_source','c','5','2','589','601','43','0','2','0','582','89',''),
('8156','sql','115','46',':T0_chi_id_source','c','4','0','605','621','42','0','2','0','582','89',''),
('8157','sql','115','47','sup','f','3','0','634','636','36','2','3','2','637','52',''),
('8158','sql','115','48','champ','f','4','0','638','642','47','2','1','1','643','51',''),
('8159','sql','115','49','T0','c','5','2','645','646','48','0','1','0','643','50',''),
('8160','sql','115','50','chi_id_source','c','5','2','650','662','48','0','2','0','643','89',''),
('8161','sql','115','51',':T0_chi_id_source2','c','4','0','666','683','47','0','2','0','643','89',''),
('8162','sql','115','52','infegal','f','3','0','696','702','36','2','4','2','703','57',''),
('8163','sql','115','53','champ','f','4','0','704','708','52','2','1','1','709','56',''),
('8164','sql','115','54','T0','c','5','2','711','712','53','0','1','0','709','55',''),
('8165','sql','115','55','chi_id_source','c','5','2','716','728','53','0','2','0','709','89',''),
('8166','sql','115','56',':T0_chi_id_source3','c','4','0','732','749','52','0','2','0','709','89',''),
('8167','sql','115','57','egal','f','3','0','762','765','36','2','5','2','766','62',''),
('8168','sql','115','58','champ','f','4','0','767','771','57','2','1','1','772','61',''),
('8169','sql','115','59','T0','c','5','2','774','775','58','0','1','0','772','60',''),
('8170','sql','115','60','che_binaire_source','c','5','2','779','796','58','0','2','0','772','89',''),
('8171','sql','115','61',':T0_che_binaire_source','c','4','0','800','821','57','0','2','0','772','89',''),
('8172','sql','115','62','egal','f','3','0','834','837','36','2','6','2','838','67',''),
('8173','sql','115','63','champ','f','4','0','839','843','62','2','1','1','844','66',''),
('8174','sql','115','64','T0','c','5','2','846','847','63','0','1','0','844','65',''),
('8175','sql','115','65','chx_dossier_id_source','c','5','2','851','871','63','0','2','0','844','89',''),
('8176','sql','115','66',':T0_chx_dossier_id_source','c','4','0','875','899','62','0','2','0','844','89',''),
('8177','sql','115','67','egal','f','3','0','912','915','36','2','7','2','916','72',''),
('8178','sql','115','68','champ','f','4','0','917','921','67','2','1','1','922','71',''),
('8179','sql','115','69','T0','c','5','2','924','925','68','0','1','0','922','70',''),
('8180','sql','115','70','che_contient_version_source','c','5','2','929','955','68','0','2','0','922','89',''),
('8181','sql','115','71',':T0_che_contient_version_source','c','4','0','959','989','67','0','2','0','922','89',''),
('8182','sql','115','72','egal','f','3','0','1002','1005','36','2','8','2','1006','89',''),
('8183','sql','115','73','champ','f','4','0','1007','1011','72','2','1','1','1012','76',''),
('8184','sql','115','74','T0','c','5','2','1014','1015','73','0','1','0','1012','75',''),
('8185','sql','115','75','che_autorisation_globale_source','c','5','2','1019','1049','73','0','2','0','1012','89',''),
('8186','sql','115','76',':T0_che_autorisation_globale_source','c','4','0','1053','1087','72','0','2','0','1012','89',''),
('8187','sql','115','77','complements','f','1','0','1107','1117','1','2','5','4','1118','89',''),
('8188','sql','115','78','trier_par','f','2','0','1126','1134','77','1','1','3','1135','84',''),
('8189','sql','115','79','','f','3','0','1126','1134','78','2','1','2','1136','89',''),
('8190','sql','115','80','champ','f','4','0','1137','1141','79','2','1','1','1142','83',''),
('8191','sql','115','81','T0','c','5','2','1144','1145','80','0','1','0','1142','82',''),
('8192','sql','115','82','chi_id_source','c','5','2','1149','1161','80','0','2','0','1142','89',''),
('8193','sql','115','83','décroissant','f','4','0','1165','1175','79','0','2','0','1176','89',''),
('8194','sql','115','84','limité_à','f','2','0','1188','1195','77','2','2','2','1196','89',''),
('8195','sql','115','85','quantité','f','3','0','1197','1204','84','1','1','1','1205','87',''),
('8196','sql','115','86',':quantitee','c','4','0','1206','1215','85','0','1','0','1205','89',''),
('8197','sql','115','87','début','f','3','0','1218','1222','84','1','2','1','1223','89',''),
('8198','sql','115','88',':debut','c','4','0','1224','1229','87','0','1','0','1223','89',''),
('8199','sql','114','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8200','sql','114','1','supprimer','f','0','0','0','8','0','3','1','6','9','21',''),
('8201','sql','114','2','base_de_reference','f','1','0','14','30','1','1','1','1','31','4',''),
('8202','sql','114','3','1','c','2','0','32','32','2','0','1','0','31','21',''),
('8203','sql','114','4','provenance','f','1','0','39','48','1','1','2','5','49','11',''),
('8204','sql','114','5','table_reference','f','2','0','57','71','4','1','1','4','72','21',''),
('8205','sql','114','6','source','f','3','0','83','88','5','1','1','3','89','21',''),
('8206','sql','114','7','nom_de_la_table','f','4','0','90','104','6','2','1','2','105','21',''),
('8207','sql','114','8','tbl_taches','c','5','0','106','115','7','0','1','0','105','9',''),
('8208','sql','114','9','base','f','5','0','117','120','7','1','2','1','121','21',''),
('8209','sql','114','10','b1','c','6','0','122','123','9','0','1','0','121','21',''),
('8210','sql','114','11','conditions','f','1','0','145','154','1','1','3','4','155','21',''),
('8211','sql','114','12','et','f','2','0','163','164','11','2','1','3','165','21',''),
('8212','sql','114','13','egal','f','3','0','166','169','12','2','1','2','170','17',''),
('8213','sql','114','14','champ','f','4','0','171','175','13','1','1','1','176','16',''),
('8214','sql','114','15','chi_id_tache','c','5','2','178','189','14','0','1','0','176','21',''),
('8215','sql','114','16',':chi_id_tache','c','4','0','193','205','13','0','2','0','176','21',''),
('8216','sql','114','17','egal','f','3','0','208','211','12','2','2','2','212','21',''),
('8217','sql','114','18','champ','f','4','0','213','217','17','1','1','1','218','20',''),
('8218','sql','114','19','chx_utilisateur_tache','c','5','2','220','240','18','0','1','0','218','21',''),
('8219','sql','114','20',':chx_utilisateur_tache','c','4','0','244','265','17','0','2','0','218','21',''),
('8220','sql','113','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8221','sql','113','1','modifier','f','0','0','0','7','0','4','1','6','8','34',''),
('8222','sql','113','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8223','sql','113','3','1','c','2','0','31','31','2','0','1','0','30','34',''),
('8224','sql','113','4','valeurs','f','1','0','38','44','1','3','2','3','45','17',''),
('8225','sql','113','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('8226','sql','113','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('8227','sql','113','7','chp_texte_tache','c','4','2','61','75','6','0','1','0','59','34',''),
('8228','sql','113','8',':n_chp_texte_tache','c','3','0','79','96','5','0','2','0','59','34',''),
('8229','sql','113','9','affecte','f','2','0','99','105','4','2','2','2','106','13',''),
('8230','sql','113','10','champ','f','3','0','107','111','9','1','1','1','112','12',''),
('8231','sql','113','11','chp_priorite_tache','c','4','2','114','131','10','0','1','0','112','34',''),
('8232','sql','113','12',':n_chp_priorite_tache','c','3','0','135','155','9','0','2','0','112','34',''),
('8233','sql','113','13','affecte','f','2','0','158','164','4','2','3','2','165','34',''),
('8234','sql','113','14','champ','f','3','0','166','170','13','1','1','1','171','16',''),
('8235','sql','113','15','chd__dtm_tache','c','4','2','173','186','14','0','1','0','171','34',''),
('8236','sql','113','16',':n_chd__dtm_tache','c','3','0','190','206','13','0','2','0','171','34',''),
('8237','sql','113','17','provenance','f','1','0','214','223','1','1','3','5','224','24',''),
('8238','sql','113','18','table_reference','f','2','0','232','246','17','1','1','4','247','34',''),
('8239','sql','113','19','source','f','3','0','258','263','18','1','1','3','264','34',''),
('8240','sql','113','20','nom_de_la_table','f','4','0','265','279','19','2','1','2','280','34',''),
('8241','sql','113','21','tbl_taches','c','5','0','281','290','20','0','1','0','280','22',''),
('8242','sql','113','22','base','f','5','0','292','295','20','1','2','1','296','34',''),
('8243','sql','113','23','b1','c','6','0','297','298','22','0','1','0','296','34',''),
('8244','sql','113','24','conditions','f','1','0','320','329','1','1','4','4','330','34',''),
('8245','sql','113','25','et','f','2','0','338','339','24','2','1','3','340','34',''),
('8246','sql','113','26','egal','f','3','0','341','344','25','2','1','2','345','30',''),
('8247','sql','113','27','champ','f','4','0','346','350','26','1','1','1','351','29',''),
('8248','sql','113','28','chi_id_tache','c','5','2','353','364','27','0','1','0','351','34',''),
('8249','sql','113','29',':c_chi_id_tache','c','4','0','368','382','26','0','2','0','351','34',''),
('8250','sql','113','30','egal','f','3','0','385','388','25','2','2','2','389','34',''),
('8251','sql','113','31','champ','f','4','0','390','394','30','1','1','1','395','33',''),
('8252','sql','113','32','chx_utilisateur_tache','c','5','2','397','417','31','0','1','0','395','34',''),
('8253','sql','113','33',':c_chx_utilisateur_tache','c','4','0','421','444','30','0','2','0','395','34',''),
('8254','sql','112','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8255','sql','112','1','sélectionner','f','0','0','0','11','0','4','1','6','12','57',''),
('8256','sql','112','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8257','sql','112','3','1','c','2','0','35','35','2','0','1','0','34','57',''),
('8258','sql','112','4','valeurs','f','1','0','42','48','1','5','2','2','49','20',''),
('8259','sql','112','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8260','sql','112','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8261','sql','112','7','chi_id_tache','c','3','2','69','80','5','0','2','0','62','57',''),
('8262','sql','112','8','champ','f','2','0','91','95','4','2','2','1','96','11',''),
('8263','sql','112','9','T0','c','3','2','98','99','8','0','1','0','96','10',''),
('8264','sql','112','10','chx_utilisateur_tache','c','3','2','103','123','8','0','2','0','96','57',''),
('8265','sql','112','11','champ','f','2','0','134','138','4','2','3','1','139','14',''),
('8266','sql','112','12','T0','c','3','2','141','142','11','0','1','0','139','13',''),
('8267','sql','112','13','chp_texte_tache','c','3','2','146','160','11','0','2','0','139','57',''),
('8268','sql','112','14','champ','f','2','0','171','175','4','2','4','1','176','17',''),
('8269','sql','112','15','T0','c','3','2','178','179','14','0','1','0','176','16',''),
('8270','sql','112','16','chp_priorite_tache','c','3','2','183','200','14','0','2','0','176','57',''),
('8271','sql','112','17','champ','f','2','0','211','215','4','2','5','1','216','57',''),
('8272','sql','112','18','T1','c','3','2','218','219','17','0','1','0','216','19',''),
('8273','sql','112','19','chp_nom_de_connexion_utilisateur','c','3','2','223','254','17','0','2','0','216','57',''),
('8274','sql','112','20','provenance','f','1','0','267','276','1','2','3','5','277','45',''),
('8275','sql','112','21','table_reference','f','2','0','285','299','20','1','1','4','300','29',''),
('8276','sql','112','22','source','f','3','0','311','316','21','1','1','3','317','57',''),
('8277','sql','112','23','nom_de_la_table','f','4','0','318','332','22','3','1','2','333','57',''),
('8278','sql','112','24','tbl_taches','c','5','0','334','343','23','0','1','0','333','25',''),
('8279','sql','112','25','alias','f','5','0','345','349','23','1','2','1','350','27',''),
('8280','sql','112','26','T0','c','6','0','351','352','25','0','1','0','350','57',''),
('8281','sql','112','27','base','f','5','0','355','358','23','1','3','1','359','57',''),
('8282','sql','112','28','b1','c','6','0','360','361','27','0','1','0','359','57',''),
('8283','sql','112','29','jointure_gauche','f','2','0','381','395','20','2','2','4','396','57',''),
('8284','sql','112','30','source','f','3','0','407','412','29','1','1','3','413','37',''),
('8285','sql','112','31','nom_de_la_table','f','4','0','414','428','30','3','1','2','429','57',''),
('8286','sql','112','32','tbl_utilisateurs','c','5','0','430','445','31','0','1','0','429','33',''),
('8287','sql','112','33','alias','f','5','0','447','451','31','1','2','1','452','35',''),
('8288','sql','112','34','T1','c','6','0','453','454','33','0','1','0','452','57',''),
('8289','sql','112','35','base','f','5','0','457','460','31','1','3','1','461','57',''),
('8290','sql','112','36','b1','c','6','0','462','463','35','0','1','0','461','57',''),
('8291','sql','112','37','contrainte','f','3','0','478','487','29','1','2','3','488','57',''),
('8292','sql','112','38','egal','f','4','0','489','492','37','2','1','2','493','57',''),
('8293','sql','112','39','champ','f','5','0','494','498','38','2','1','1','499','42',''),
('8294','sql','112','40','T1','c','6','0','500','501','39','0','1','0','499','41',''),
('8295','sql','112','41','chi_id_utilisateur','c','6','0','503','520','39','0','2','0','499','57',''),
('8296','sql','112','42','champ','f','5','0','523','527','38','2','2','1','528','57',''),
('8297','sql','112','43','T0','c','6','0','529','530','42','0','1','0','528','44',''),
('8298','sql','112','44','chx_utilisateur_tache','c','6','0','532','552','42','0','2','0','528','57',''),
('8299','sql','112','45','conditions','f','1','0','574','583','1','1','4','4','584','57',''),
('8300','sql','112','46','et','f','2','0','592','593','45','2','1','3','594','57',''),
('8301','sql','112','47','egal','f','3','0','595','598','46','2','1','2','599','52',''),
('8302','sql','112','48','champ','f','4','0','600','604','47','2','1','1','605','51',''),
('8303','sql','112','49','T0','c','5','2','607','608','48','0','1','0','605','50',''),
('8304','sql','112','50','chi_id_tache','c','5','2','612','623','48','0','2','0','605','57',''),
('8305','sql','112','51',':T0_chi_id_tache','c','4','0','627','642','47','0','2','0','605','57',''),
('8306','sql','112','52','egal','f','3','0','645','648','46','2','2','2','649','57',''),
('8307','sql','112','53','champ','f','4','0','650','654','52','2','1','1','655','56',''),
('8308','sql','112','54','T0','c','5','2','657','658','53','0','1','0','655','55',''),
('8309','sql','112','55','chx_utilisateur_tache','c','5','2','662','682','53','0','2','0','655','57',''),
('8310','sql','112','56',':T0_chx_utilisateur_tache','c','4','0','686','710','52','0','2','0','655','57',''),
('8311','sql','111','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8312','sql','111','1','insérer','f','0','0','0','6','0','3','1','6','7','32',''),
('8313','sql','111','2','base_de_reference','f','1','0','12','28','1','1','1','1','29','4',''),
('8314','sql','111','3','1','c','2','0','30','30','2','0','1','0','29','32',''),
('8315','sql','111','4','valeurs','f','1','0','37','43','1','5','2','3','44','25',''),
('8316','sql','111','5','affecte','f','2','0','52','58','4','2','1','2','59','9',''),
('8317','sql','111','6','champ','f','3','0','60','64','5','1','1','1','65','8',''),
('8318','sql','111','7','chx_utilisateur_tache','c','4','2','67','87','6','0','1','0','65','32',''),
('8319','sql','111','8',':chx_utilisateur_tache','c','3','0','91','112','5','0','2','0','65','32',''),
('8320','sql','111','9','affecte','f','2','0','122','128','4','2','2','2','129','13',''),
('8321','sql','111','10','champ','f','3','0','130','134','9','1','1','1','135','12',''),
('8322','sql','111','11','chp_texte_tache','c','4','2','137','151','10','0','1','0','135','32',''),
('8323','sql','111','12',':chp_texte_tache','c','3','0','155','170','9','0','2','0','135','32',''),
('8324','sql','111','13','affecte','f','2','0','180','186','4','2','3','2','187','17',''),
('8325','sql','111','14','champ','f','3','0','188','192','13','1','1','1','193','16',''),
('8326','sql','111','15','chp_priorite_tache','c','4','2','195','212','14','0','1','0','193','32',''),
('8327','sql','111','16',':chp_priorite_tache','c','3','0','216','234','13','0','2','0','193','32',''),
('8328','sql','111','17','affecte','f','2','0','244','250','4','2','4','2','251','21',''),
('8329','sql','111','18','champ','f','3','0','252','256','17','1','1','1','257','20',''),
('8330','sql','111','19','chd__dtm_tache','c','4','2','259','272','18','0','1','0','257','32',''),
('8331','sql','111','20',':chd__dtm_tache','c','3','0','276','290','17','0','2','0','257','32',''),
('8332','sql','111','21','affecte','f','2','0','300','306','4','2','5','2','307','32',''),
('8333','sql','111','22','champ','f','3','0','308','312','21','1','1','1','313','24',''),
('8334','sql','111','23','chd__dtc_tache','c','4','2','315','328','22','0','1','0','313','32',''),
('8335','sql','111','24',':chd__dtc_tache','c','3','0','332','346','21','0','2','0','313','32',''),
('8336','sql','111','25','provenance','f','1','0','358','367','1','1','3','5','368','32',''),
('8337','sql','111','26','table_reference','f','2','0','376','390','25','1','1','4','391','32',''),
('8338','sql','111','27','source','f','3','0','402','407','26','1','1','3','408','32',''),
('8339','sql','111','28','nom_de_la_table','f','4','0','409','423','27','2','1','2','424','32',''),
('8340','sql','111','29','tbl_taches','c','5','0','425','434','28','0','1','0','424','30',''),
('8341','sql','111','30','base','f','5','0','436','439','28','1','2','1','440','32',''),
('8342','sql','111','31','b1','c','6','0','441','442','30','0','1','0','440','32',''),
('8343','sql','110','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8344','sql','110','1','sélectionner','f','0','0','0','11','0','5','1','6','12','94',''),
('8345','sql','110','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8346','sql','110','3','1','c','2','0','35','35','2','0','1','0','34','94',''),
('8347','sql','110','4','valeurs','f','1','0','42','48','1','8','2','2','49','29',''),
('8348','sql','110','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8349','sql','110','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8350','sql','110','7','chi_id_tache','c','3','2','69','80','5','0','2','0','62','94',''),
('8351','sql','110','8','champ','f','2','0','91','95','4','2','2','1','96','11',''),
('8352','sql','110','9','T0','c','3','2','98','99','8','0','1','0','96','10',''),
('8353','sql','110','10','chx_utilisateur_tache','c','3','2','103','123','8','0','2','0','96','94',''),
('8354','sql','110','11','champ','f','2','0','134','138','4','2','3','1','139','14',''),
('8355','sql','110','12','T0','c','3','2','141','142','11','0','1','0','139','13',''),
('8356','sql','110','13','chp_texte_tache','c','3','2','146','160','11','0','2','0','139','94',''),
('8357','sql','110','14','champ','f','2','0','171','175','4','2','4','1','176','17',''),
('8358','sql','110','15','T0','c','3','2','178','179','14','0','1','0','176','16',''),
('8359','sql','110','16','chp_priorite_tache','c','3','2','183','200','14','0','2','0','176','94',''),
('8360','sql','110','17','champ','f','2','0','211','215','4','2','5','1','216','20',''),
('8361','sql','110','18','T0','c','3','2','218','219','17','0','1','0','216','19',''),
('8362','sql','110','19','chd__dtm_tache','c','3','2','223','236','17','0','2','0','216','94',''),
('8363','sql','110','20','champ','f','2','0','247','251','4','2','6','1','252','23',''),
('8364','sql','110','21','T0','c','3','2','254','255','20','0','1','0','252','22',''),
('8365','sql','110','22','chd__dtc_tache','c','3','2','259','272','20','0','2','0','252','94',''),
('8366','sql','110','23','champ','f','2','0','283','287','4','2','7','1','288','26',''),
('8367','sql','110','24','T0','c','3','2','290','291','23','0','1','0','288','25',''),
('8368','sql','110','25','che__nur_tache','c','3','2','295','308','23','0','2','0','288','94',''),
('8369','sql','110','26','champ','f','2','0','319','323','4','2','8','1','324','94',''),
('8370','sql','110','27','T1','c','3','2','326','327','26','0','1','0','324','28',''),
('8371','sql','110','28','chp_nom_de_connexion_utilisateur','c','3','2','331','362','26','0','2','0','324','94',''),
('8372','sql','110','29','provenance','f','1','0','375','384','1','2','3','5','385','54',''),
('8373','sql','110','30','table_reference','f','2','0','393','407','29','1','1','4','408','38',''),
('8374','sql','110','31','source','f','3','0','419','424','30','1','1','3','425','94',''),
('8375','sql','110','32','nom_de_la_table','f','4','0','426','440','31','3','1','2','441','94',''),
('8376','sql','110','33','tbl_taches','c','5','0','442','451','32','0','1','0','441','34',''),
('8377','sql','110','34','alias','f','5','0','453','457','32','1','2','1','458','36',''),
('8378','sql','110','35','T0','c','6','0','459','460','34','0','1','0','458','94',''),
('8379','sql','110','36','base','f','5','0','463','466','32','1','3','1','467','94',''),
('8380','sql','110','37','b1','c','6','0','468','469','36','0','1','0','467','94',''),
('8381','sql','110','38','jointure_gauche','f','2','0','489','503','29','2','2','4','504','94',''),
('8382','sql','110','39','source','f','3','0','515','520','38','1','1','3','521','46',''),
('8383','sql','110','40','nom_de_la_table','f','4','0','522','536','39','3','1','2','537','94',''),
('8384','sql','110','41','tbl_utilisateurs','c','5','0','538','553','40','0','1','0','537','42',''),
('8385','sql','110','42','alias','f','5','0','555','559','40','1','2','1','560','44',''),
('8386','sql','110','43','T1','c','6','0','561','562','42','0','1','0','560','94',''),
('8387','sql','110','44','base','f','5','0','565','568','40','1','3','1','569','94',''),
('8388','sql','110','45','b1','c','6','0','570','571','44','0','1','0','569','94',''),
('8389','sql','110','46','contrainte','f','3','0','586','595','38','1','2','3','596','94',''),
('8390','sql','110','47','egal','f','4','0','597','600','46','2','1','2','601','94',''),
('8391','sql','110','48','champ','f','5','0','602','606','47','2','1','1','607','51',''),
('8392','sql','110','49','T1','c','6','0','608','609','48','0','1','0','607','50',''),
('8393','sql','110','50','chi_id_utilisateur','c','6','0','611','628','48','0','2','0','607','94',''),
('8394','sql','110','51','champ','f','5','0','631','635','47','2','2','1','636','94',''),
('8395','sql','110','52','T0','c','6','0','637','638','51','0','1','0','636','53',''),
('8396','sql','110','53','chx_utilisateur_tache','c','6','0','640','660','51','0','2','0','636','94',''),
('8397','sql','110','54','conditions','f','1','0','682','691','1','1','4','4','692','82',''),
('8398','sql','110','55','et','f','2','0','700','701','54','6','1','3','702','94',''),
('8399','sql','110','56','#','f','3','0','713','713','55','0','1','0','714','57',''),
('8400','sql','110','57','egal','f','3','0','727','730','55','2','2','2','731','62',''),
('8401','sql','110','58','champ','f','4','0','732','736','57','2','1','1','737','61',''),
('8402','sql','110','59','T0','c','5','2','739','740','58','0','1','0','737','60',''),
('8403','sql','110','60','chi_id_tache','c','5','2','744','755','58','0','2','0','737','94',''),
('8404','sql','110','61',':T0_chi_id_tache','c','4','0','759','774','57','0','2','0','737','94',''),
('8405','sql','110','62','egal','f','3','0','787','790','55','2','3','2','791','67',''),
('8406','sql','110','63','champ','f','4','0','792','796','62','2','1','1','797','66',''),
('8407','sql','110','64','T0','c','5','2','799','800','63','0','1','0','797','65',''),
('8408','sql','110','65','chx_utilisateur_tache','c','5','2','804','824','63','0','2','0','797','94',''),
('8409','sql','110','66',':T0_chx_utilisateur_tache','c','4','0','828','852','62','0','2','0','797','94',''),
('8410','sql','110','67','comme','f','3','0','865','869','55','2','4','2','870','72',''),
('8411','sql','110','68','champ','f','4','0','871','875','67','2','1','1','876','71',''),
('8412','sql','110','69','T0','c','5','2','878','879','68','0','1','0','876','70',''),
('8413','sql','110','70','chp_texte_tache','c','5','2','883','897','68','0','2','0','876','94',''),
('8414','sql','110','71',':T0_chp_texte_tache','c','4','0','901','919','67','0','2','0','876','94',''),
('8415','sql','110','72','egal','f','3','0','932','935','55','2','5','2','936','77',''),
('8416','sql','110','73','champ','f','4','0','937','941','72','2','1','1','942','76',''),
('8417','sql','110','74','T0','c','5','2','944','945','73','0','1','0','942','75',''),
('8418','sql','110','75','chp_priorite_tache','c','5','2','949','966','73','0','2','0','942','94',''),
('8419','sql','110','76',':T0_chp_priorite_tache','c','4','0','970','991','72','0','2','0','942','94',''),
('8420','sql','110','77','inf','f','3','0','1004','1006','55','2','6','2','1007','94',''),
('8421','sql','110','78','champ','f','4','0','1008','1012','77','2','1','1','1013','81',''),
('8422','sql','110','79','T0','c','5','2','1015','1016','78','0','1','0','1013','80',''),
('8423','sql','110','80','chp_priorite_tache','c','5','2','1020','1037','78','0','2','0','1013','94',''),
('8424','sql','110','81',':T0_chp_priorite_tache2','c','4','0','1041','1063','77','0','2','0','1013','94',''),
('8425','sql','110','82','complements','f','1','0','1083','1093','1','2','5','4','1094','94',''),
('8426','sql','110','83','trier_par','f','2','0','1102','1110','82','1','1','3','1111','89',''),
('8427','sql','110','84','','f','3','0','1102','1110','83','2','1','2','1112','94',''),
('8428','sql','110','85','champ','f','4','0','1113','1117','84','2','1','1','1118','88',''),
('8429','sql','110','86','T0','c','5','2','1120','1121','85','0','1','0','1118','87',''),
('8430','sql','110','87','chp_priorite_tache','c','5','2','1125','1142','85','0','2','0','1118','94',''),
('8431','sql','110','88','croissant','f','4','0','1146','1154','84','0','2','0','1155','94',''),
('8432','sql','110','89','limité_à','f','2','0','1167','1174','82','2','2','2','1175','94',''),
('8433','sql','110','90','quantité','f','3','0','1176','1183','89','1','1','1','1184','92',''),
('8434','sql','110','91',':quantitee','c','4','0','1185','1194','90','0','1','0','1184','94',''),
('8435','sql','110','92','début','f','3','0','1197','1201','89','1','2','1','1202','94',''),
('8436','sql','110','93',':debut','c','4','0','1203','1208','92','0','1','0','1202','94',''),
('8437','sql','109','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8438','sql','109','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('8439','sql','109','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8440','sql','109','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('8441','sql','109','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('8442','sql','109','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('8443','sql','109','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('8444','sql','109','7','chp_nom_de_connexion_utilisateur','c','4','2','61','92','6','0','1','0','59','25',''),
('8445','sql','109','8',':n_chp_nom_de_connexion_utilisateur','c','3','0','96','130','5','0','2','0','59','25',''),
('8446','sql','109','9','affecte','f','2','0','133','139','4','2','2','2','140','25',''),
('8447','sql','109','10','champ','f','3','0','141','145','9','1','1','1','146','12',''),
('8448','sql','109','11','chp_mot_de_passe_utilisateur','c','4','2','148','175','10','0','1','0','146','25',''),
('8449','sql','109','12',':n_chp_mot_de_passe_utilisateur','c','3','0','179','209','9','0','2','0','146','25',''),
('8450','sql','109','13','provenance','f','1','0','217','226','1','1','3','5','227','20',''),
('8451','sql','109','14','table_reference','f','2','0','235','249','13','1','1','4','250','25',''),
('8452','sql','109','15','source','f','3','0','261','266','14','1','1','3','267','25',''),
('8453','sql','109','16','nom_de_la_table','f','4','0','268','282','15','2','1','2','283','25',''),
('8454','sql','109','17','tbl_utilisateurs','c','5','0','284','299','16','0','1','0','283','18',''),
('8455','sql','109','18','base','f','5','0','301','304','16','1','2','1','305','25',''),
('8456','sql','109','19','b1','c','6','0','306','307','18','0','1','0','305','25',''),
('8457','sql','109','20','conditions','f','1','0','329','338','1','1','4','3','339','25',''),
('8458','sql','109','21','egal','f','2','0','340','343','20','2','1','2','344','25',''),
('8459','sql','109','22','champ','f','3','0','345','349','21','1','1','1','350','24',''),
('8460','sql','109','23','chi_id_utilisateur','c','4','2','352','369','22','0','1','0','350','25',''),
('8461','sql','109','24',':c_chi_id_utilisateur','c','3','0','373','393','21','0','2','0','350','25',''),
('8462','sql','108','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8463','sql','108','1','sélectionner','f','0','0','0','11','0','4','1','6','12','57',''),
('8464','sql','108','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8465','sql','108','3','1','c','2','0','35','35','2','0','1','0','34','57',''),
('8466','sql','108','4','valeurs','f','1','0','42','48','1','7','2','2','49','26',''),
('8467','sql','108','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8468','sql','108','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8469','sql','108','7','chi_id_utilisateur','c','3','2','69','86','5','0','2','0','62','57',''),
('8470','sql','108','8','champ','f','2','0','97','101','4','2','2','1','102','11',''),
('8471','sql','108','9','T0','c','3','2','104','105','8','0','1','0','102','10',''),
('8472','sql','108','10','chp_nom_de_connexion_utilisateur','c','3','2','109','140','8','0','2','0','102','57',''),
('8473','sql','108','11','champ','f','2','0','151','155','4','2','3','1','156','14',''),
('8474','sql','108','12','T0','c','3','2','158','159','11','0','1','0','156','13',''),
('8475','sql','108','13','chp_mot_de_passe_utilisateur','c','3','2','163','190','11','0','2','0','156','57',''),
('8476','sql','108','14','champ','f','2','0','201','205','4','2','4','1','206','17',''),
('8477','sql','108','15','T0','c','3','2','208','209','14','0','1','0','206','16',''),
('8478','sql','108','16','chp_parametres_utilisateur','c','3','2','213','238','14','0','2','0','206','57',''),
('8479','sql','108','17','champ','f','2','0','249','253','4','2','5','1','254','20',''),
('8480','sql','108','18','T0','c','3','2','256','257','17','0','1','0','254','19',''),
('8481','sql','108','19','chi_compteur1_utilisateur','c','3','2','261','285','17','0','2','0','254','57',''),
('8482','sql','108','20','champ','f','2','0','296','300','4','2','6','1','301','23',''),
('8483','sql','108','21','T0','c','3','2','303','304','20','0','1','0','301','22',''),
('8484','sql','108','22','chx_acces_utilisateur','c','3','2','308','328','20','0','2','0','301','57',''),
('8485','sql','108','23','champ','f','2','0','339','343','4','2','7','1','344','57',''),
('8486','sql','108','24','T1','c','3','2','346','347','23','0','1','0','344','25',''),
('8487','sql','108','25','chp_nom_acces','c','3','2','351','363','23','0','2','0','344','57',''),
('8488','sql','108','26','provenance','f','1','0','376','385','1','2','3','5','386','51',''),
('8489','sql','108','27','table_reference','f','2','0','394','408','26','1','1','4','409','35',''),
('8490','sql','108','28','source','f','3','0','420','425','27','1','1','3','426','57',''),
('8491','sql','108','29','nom_de_la_table','f','4','0','427','441','28','3','1','2','442','57',''),
('8492','sql','108','30','tbl_utilisateurs','c','5','0','443','458','29','0','1','0','442','31',''),
('8493','sql','108','31','alias','f','5','0','460','464','29','1','2','1','465','33',''),
('8494','sql','108','32','T0','c','6','0','466','467','31','0','1','0','465','57',''),
('8495','sql','108','33','base','f','5','0','470','473','29','1','3','1','474','57',''),
('8496','sql','108','34','b1','c','6','0','475','476','33','0','1','0','474','57',''),
('8497','sql','108','35','jointure_gauche','f','2','0','496','510','26','2','2','4','511','57',''),
('8498','sql','108','36','source','f','3','0','522','527','35','1','1','3','528','43',''),
('8499','sql','108','37','nom_de_la_table','f','4','0','529','543','36','3','1','2','544','57',''),
('8500','sql','108','38','tbl_acces','c','5','0','545','553','37','0','1','0','544','39',''),
('8501','sql','108','39','alias','f','5','0','555','559','37','1','2','1','560','41',''),
('8502','sql','108','40','T1','c','6','0','561','562','39','0','1','0','560','57',''),
('8503','sql','108','41','base','f','5','0','565','568','37','1','3','1','569','57',''),
('8504','sql','108','42','b1','c','6','0','570','571','41','0','1','0','569','57',''),
('8505','sql','108','43','contrainte','f','3','0','586','595','35','1','2','3','596','57',''),
('8506','sql','108','44','egal','f','4','0','597','600','43','2','1','2','601','57',''),
('8507','sql','108','45','champ','f','5','0','602','606','44','2','1','1','607','48',''),
('8508','sql','108','46','T1','c','6','0','608','609','45','0','1','0','607','47',''),
('8509','sql','108','47','chi_id_acces','c','6','0','611','622','45','0','2','0','607','57',''),
('8510','sql','108','48','champ','f','5','0','625','629','44','2','2','1','630','57',''),
('8511','sql','108','49','T0','c','6','0','631','632','48','0','1','0','630','50',''),
('8512','sql','108','50','chx_acces_utilisateur','c','6','0','634','654','48','0','2','0','630','57',''),
('8513','sql','108','51','conditions','f','1','0','676','685','1','1','4','3','686','57',''),
('8514','sql','108','52','egal','f','2','0','687','690','51','2','1','2','691','57',''),
('8515','sql','108','53','champ','f','3','0','692','696','52','2','1','1','697','56',''),
('8516','sql','108','54','T0','c','4','2','699','700','53','0','1','0','697','55',''),
('8517','sql','108','55','chi_id_utilisateur','c','4','2','704','721','53','0','2','0','697','57',''),
('8518','sql','108','56',':T0_chi_id_utilisateur','c','3','0','725','746','52','0','2','0','697','57',''),
('8519','sql','107','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8520','sql','107','1','modifier','f','0','0','0','7','0','4','1','6','8','24',''),
('8521','sql','107','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8522','sql','107','3','1','c','2','0','31','31','2','0','1','0','30','24',''),
('8523','sql','107','4','valeurs','f','1','0','38','44','1','1','2','4','45','12',''),
('8524','sql','107','5','affecte','f','2','0','53','59','4','2','1','3','60','24',''),
('8525','sql','107','6','champ','f','3','0','61','65','5','1','1','1','66','8',''),
('8526','sql','107','7','chi_compteur1_utilisateur','c','4','2','68','92','6','0','1','0','66','24',''),
('8527','sql','107','8','plus','f','3','0','96','99','5','2','2','2','100','24',''),
('8528','sql','107','9','champ','f','4','0','101','105','8','1','1','1','106','11',''),
('8529','sql','107','10','chi_compteur1_utilisateur','c','5','0','107','131','9','0','1','0','106','24',''),
('8530','sql','107','11','1','c','4','0','134','134','8','0','2','0','106','24',''),
('8531','sql','107','12','provenance','f','1','0','147','156','1','1','3','5','157','19',''),
('8532','sql','107','13','table_reference','f','2','0','165','179','12','1','1','4','180','24',''),
('8533','sql','107','14','source','f','3','0','191','196','13','1','1','3','197','24',''),
('8534','sql','107','15','nom_de_la_table','f','4','0','198','212','14','2','1','2','213','24',''),
('8535','sql','107','16','tbl_utilisateurs','c','5','0','214','229','15','0','1','0','213','17',''),
('8536','sql','107','17','base','f','5','0','231','234','15','1','2','1','235','24',''),
('8537','sql','107','18','b1','c','6','0','236','237','17','0','1','0','235','24',''),
('8538','sql','107','19','conditions','f','1','0','259','268','1','1','4','3','269','24',''),
('8539','sql','107','20','egal','f','2','0','270','273','19','2','1','2','274','24',''),
('8540','sql','107','21','champ','f','3','0','275','279','20','1','1','1','280','23',''),
('8541','sql','107','22','chi_id_utilisateur','c','4','2','282','299','21','0','1','0','280','24',''),
('8542','sql','107','23',':c_chi_id_utilisateur','c','3','0','303','323','20','0','2','0','280','24',''),
('8543','sql','101','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8544','sql','101','1','sélectionner','f','0','0','0','11','0','4','1','6','12','60',''),
('8545','sql','101','2','valeurs','f','1','0','17','23','1','3','1','2','24','12',''),
('8546','sql','101','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('8547','sql','101','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('8548','sql','101','5','chp_mot_de_passe_utilisateur','c','3','2','37','64','3','0','2','0','30','60',''),
('8549','sql','101','6','champ','f','2','0','68','72','2','2','2','1','73','9',''),
('8550','sql','101','7','T0','c','3','2','75','76','6','0','1','0','73','8',''),
('8551','sql','101','8','chi_id_utilisateur','c','3','2','80','97','6','0','2','0','73','60',''),
('8552','sql','101','9','champ','f','2','0','101','105','2','2','3','1','106','60',''),
('8553','sql','101','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('8554','sql','101','11','chx_acces_utilisateur','c','3','2','113','133','9','0','2','0','106','60',''),
('8555','sql','101','12','provenance','f','1','0','142','151','1','2','2','5','152','37',''),
('8556','sql','101','13','table_reference','f','2','0','160','174','12','1','1','4','175','21',''),
('8557','sql','101','14','source','f','3','0','186','191','13','1','1','3','192','60',''),
('8558','sql','101','15','nom_de_la_table','f','4','0','193','207','14','3','1','2','208','60',''),
('8559','sql','101','16','tbl_utilisateurs','c','5','0','209','224','15','0','1','0','208','17',''),
('8560','sql','101','17','alias','f','5','0','226','230','15','1','2','1','231','19',''),
('8561','sql','101','18','T0','c','6','0','232','233','17','0','1','0','231','60',''),
('8562','sql','101','19','base','f','5','0','236','239','15','1','3','1','240','60',''),
('8563','sql','101','20','b1','c','6','0','241','242','19','0','1','0','240','60',''),
('8564','sql','101','21','jointure_gauche','f','2','0','262','276','12','2','2','4','277','60',''),
('8565','sql','101','22','source','f','3','0','288','293','21','1','1','3','294','29',''),
('8566','sql','101','23','nom_de_la_table','f','4','0','295','309','22','3','1','2','310','60',''),
('8567','sql','101','24','tbl_acces','c','5','0','311','319','23','0','1','0','310','25',''),
('8568','sql','101','25','alias','f','5','0','321','325','23','1','2','1','326','27',''),
('8569','sql','101','26','T1','c','6','0','327','328','25','0','1','0','326','60',''),
('8570','sql','101','27','base','f','5','0','331','334','23','1','3','1','335','60',''),
('8571','sql','101','28','b1','c','6','0','336','337','27','0','1','0','335','60',''),
('8572','sql','101','29','contrainte','f','3','0','352','361','21','1','2','3','362','60',''),
('8573','sql','101','30','egal','f','4','0','363','366','29','2','1','2','367','60',''),
('8574','sql','101','31','champ','f','5','0','368','372','30','2','1','1','373','34',''),
('8575','sql','101','32','T1','c','6','0','374','375','31','0','1','0','373','33',''),
('8576','sql','101','33','chi_id_acces','c','6','0','377','388','31','0','2','0','373','60',''),
('8577','sql','101','34','champ','f','5','0','391','395','30','2','2','1','396','60',''),
('8578','sql','101','35','T0','c','6','0','397','398','34','0','1','0','396','36',''),
('8579','sql','101','36','chx_acces_utilisateur','c','6','0','400','420','34','0','2','0','396','60',''),
('8580','sql','101','37','conditions','f','1','0','442','451','1','1','3','4','452','54',''),
('8581','sql','101','38','et','f','2','0','460','461','37','3','1','3','462','60',''),
('8582','sql','101','39','egal','f','3','0','463','466','38','2','1','2','467','44',''),
('8583','sql','101','40','champ','f','4','0','468','472','39','2','1','1','473','43',''),
('8584','sql','101','41','T0','c','5','2','475','476','40','0','1','0','473','42',''),
('8585','sql','101','42','chp_nom_de_connexion_utilisateur','c','5','2','480','511','40','0','2','0','473','60',''),
('8586','sql','101','43',':T0_chp_nom_de_connexion_utilisateur','c','4','0','515','550','39','0','2','0','473','60',''),
('8587','sql','101','44','egal','f','3','0','553','556','38','2','2','2','557','49',''),
('8588','sql','101','45','champ','f','4','0','558','562','44','2','1','1','563','48',''),
('8589','sql','101','46','T0','c','5','2','565','566','45','0','1','0','563','47',''),
('8590','sql','101','47','che_actif_utilisateur','c','5','2','570','590','45','0','2','0','563','60',''),
('8591','sql','101','48','1','c','4','0','594','594','44','0','2','0','563','60',''),
('8592','sql','101','49','egal','f','3','0','597','600','38','2','3','2','601','60',''),
('8593','sql','101','50','champ','f','4','0','602','606','49','2','1','1','607','53',''),
('8594','sql','101','51','T1','c','5','2','609','610','50','0','1','0','607','52',''),
('8595','sql','101','52','che_actif_acces','c','5','2','614','628','50','0','2','0','607','60',''),
('8596','sql','101','53','1','c','4','0','632','632','49','0','2','0','607','60',''),
('8597','sql','101','54','complements','f','1','0','645','655','1','1','4','3','656','60',''),
('8598','sql','101','55','limité_à','f','2','0','657','664','54','2','1','2','665','60',''),
('8599','sql','101','56','quantité','f','3','0','666','673','55','1','1','1','674','58',''),
('8600','sql','101','57','1','c','4','0','675','675','56','0','1','0','674','60',''),
('8601','sql','101','58','début','f','3','0','678','682','55','1','2','1','683','60',''),
('8602','sql','101','59','0','c','4','0','684','684','58','0','1','0','683','60',''),
('8603','sql','164','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8604','sql','164','1','sélectionner','f','0','0','0','11','0','3','1','6','12','90',''),
('8605','sql','164','2','valeurs','f','1','0','17','23','1','13','1','2','24','42',''),
('8606','sql','164','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('8607','sql','164','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('8608','sql','164','5','cht_libelle_menu','c','3','2','44','59','3','0','2','0','37','90',''),
('8609','sql','164','6','champ','f','2','0','70','74','2','2','2','1','75','9',''),
('8610','sql','164','7','T0','c','3','2','77','78','6','0','1','0','75','8',''),
('8611','sql','164','8','chp_titre_menu','c','3','2','82','95','6','0','2','0','75','90',''),
('8612','sql','164','9','champ','f','2','0','106','110','2','2','3','1','111','12',''),
('8613','sql','164','10','T0','c','3','2','113','114','9','0','1','0','111','11',''),
('8614','sql','164','11','chp_methode_menu','c','3','2','118','133','9','0','2','0','111','90',''),
('8615','sql','164','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('8616','sql','164','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('8617','sql','164','14','chi_id_menu','c','3','2','156','166','12','0','2','0','149','90',''),
('8618','sql','164','15','champ','f','2','0','177','181','2','2','5','1','182','18',''),
('8619','sql','164','16','T0','c','3','2','184','185','15','0','1','0','182','17',''),
('8620','sql','164','17','cht_initialisation_menu','c','3','2','189','211','15','0','2','0','182','90',''),
('8621','sql','164','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('8622','sql','164','19','T1','c','3','2','229','230','18','0','1','0','227','20',''),
('8623','sql','164','20','chx_source_autorisation','c','3','2','234','256','18','0','2','0','227','90',''),
('8624','sql','164','21','champ','f','2','0','267','271','2','2','7','1','272','24',''),
('8625','sql','164','22','T2','c','3','2','274','275','21','0','1','0','272','23',''),
('8626','sql','164','23','chp_nom_source','c','3','2','279','292','21','0','2','0','272','90',''),
('8627','sql','164','24','champ','f','2','0','303','307','2','2','8','1','308','27',''),
('8628','sql','164','25','T0','c','3','2','310','311','24','0','1','0','308','26',''),
('8629','sql','164','26','cht_condition_menu','c','3','2','315','332','24','0','2','0','308','90',''),
('8630','sql','164','27','champ','f','2','0','343','347','2','2','9','1','348','30',''),
('8631','sql','164','28','T0','c','3','2','350','351','27','0','1','0','348','29',''),
('8632','sql','164','29','cht_condition_js_menu','c','3','2','355','375','27','0','2','0','348','90',''),
('8633','sql','164','30','champ','f','2','0','386','390','2','2','10','1','391','33',''),
('8634','sql','164','31','T0','c','3','2','393','394','30','0','1','0','391','32',''),
('8635','sql','164','32','chx_autorisation_menu','c','3','2','398','418','30','0','2','0','391','90',''),
('8636','sql','164','33','champ','f','2','0','429','433','2','2','11','1','434','36',''),
('8637','sql','164','34','T2','c','3','2','436','437','33','0','1','0','434','35',''),
('8638','sql','164','35','cht_condition_js_source','c','3','2','441','463','33','0','2','0','434','90',''),
('8639','sql','164','36','champ','f','2','0','474','478','2','2','12','1','479','39',''),
('8640','sql','164','37','T2','c','3','2','481','482','36','0','1','0','479','38',''),
('8641','sql','164','38','cht_notification_ko_source','c','3','2','486','511','36','0','2','0','479','90',''),
('8642','sql','164','39','champ','f','2','0','522','526','2','2','13','1','527','90',''),
('8643','sql','164','40','T0','c','3','2','529','530','39','0','1','0','527','41',''),
('8644','sql','164','41','cht_condition_js_menu','c','3','2','534','554','39','0','2','0','527','90',''),
('8645','sql','164','42','provenance','f','1','0','567','576','1','3','2','5','577','83',''),
('8646','sql','164','43','table_reference','f','2','0','585','599','42','1','1','4','600','51',''),
('8647','sql','164','44','source','f','3','0','611','616','43','1','1','3','617','90',''),
('8648','sql','164','45','nom_de_la_table','f','4','0','618','632','44','3','1','2','633','90',''),
('8649','sql','164','46','tbl_menus','c','5','0','634','642','45','0','1','0','633','47',''),
('8650','sql','164','47','alias','f','5','0','644','648','45','1','2','1','649','49',''),
('8651','sql','164','48','T0','c','6','0','650','651','47','0','1','0','649','90',''),
('8652','sql','164','49','base','f','5','0','654','657','45','1','3','1','658','90',''),
('8653','sql','164','50','b1','c','6','0','659','660','49','0','1','0','658','90',''),
('8654','sql','164','51','jointure_gauche','f','2','0','680','694','42','2','2','4','695','67',''),
('8655','sql','164','52','source','f','3','0','706','711','51','1','1','3','712','59',''),
('8656','sql','164','53','nom_de_la_table','f','4','0','713','727','52','3','1','2','728','90',''),
('8657','sql','164','54','tbl_autorisations','c','5','0','729','745','53','0','1','0','728','55',''),
('8658','sql','164','55','alias','f','5','0','747','751','53','1','2','1','752','57',''),
('8659','sql','164','56','T1','c','6','0','753','754','55','0','1','0','752','90',''),
('8660','sql','164','57','base','f','5','0','757','760','53','1','3','1','761','90',''),
('8661','sql','164','58','b1','c','6','0','762','763','57','0','1','0','761','90',''),
('8662','sql','164','59','contrainte','f','3','0','778','787','51','1','2','3','788','90',''),
('8663','sql','164','60','egal','f','4','0','789','792','59','2','1','2','793','90',''),
('8664','sql','164','61','champ','f','5','0','794','798','60','2','1','1','799','64',''),
('8665','sql','164','62','T1','c','6','0','800','801','61','0','1','0','799','63',''),
('8666','sql','164','63','chi_id_autorisation','c','6','0','803','821','61','0','2','0','799','90',''),
('8667','sql','164','64','champ','f','5','0','824','828','60','2','2','1','829','90',''),
('8668','sql','164','65','T0','c','6','0','830','831','64','0','1','0','829','66',''),
('8669','sql','164','66','chx_autorisation_menu','c','6','0','833','853','64','0','2','0','829','90',''),
('8670','sql','164','67','jointure_gauche','f','2','0','873','887','42','2','3','4','888','90',''),
('8671','sql','164','68','source','f','3','0','899','904','67','1','1','3','905','75',''),
('8672','sql','164','69','nom_de_la_table','f','4','0','906','920','68','3','1','2','921','90',''),
('8673','sql','164','70','tbl_sources','c','5','0','922','932','69','0','1','0','921','71',''),
('8674','sql','164','71','alias','f','5','0','934','938','69','1','2','1','939','73',''),
('8675','sql','164','72','T2','c','6','0','940','941','71','0','1','0','939','90',''),
('8676','sql','164','73','base','f','5','0','944','947','69','1','3','1','948','90',''),
('8677','sql','164','74','b1','c','6','0','949','950','73','0','1','0','948','90',''),
('8678','sql','164','75','contrainte','f','3','0','965','974','67','1','2','3','975','90',''),
('8679','sql','164','76','egal','f','4','0','976','979','75','2','1','2','980','90',''),
('8680','sql','164','77','champ','f','5','0','981','985','76','2','1','1','986','80',''),
('8681','sql','164','78','T2','c','6','0','987','988','77','0','1','0','986','79',''),
('8682','sql','164','79','chi_id_source','c','6','0','990','1002','77','0','2','0','986','90',''),
('8683','sql','164','80','champ','f','5','0','1005','1009','76','2','2','1','1010','90',''),
('8684','sql','164','81','T1','c','6','0','1011','1012','80','0','1','0','1010','82',''),
('8685','sql','164','82','chx_source_autorisation','c','6','0','1014','1036','80','0','2','0','1010','90',''),
('8686','sql','164','83','conditions','f','1','0','1058','1067','1','1','3','4','1068','90',''),
('8687','sql','164','84','et','f','2','0','1076','1077','83','1','1','3','1078','90',''),
('8688','sql','164','85','egal','f','3','0','1079','1082','84','2','1','2','1083','90',''),
('8689','sql','164','86','champ','f','4','0','1084','1088','85','2','1','1','1089','89',''),
('8690','sql','164','87','T1','c','5','2','1091','1092','86','0','1','0','1089','88',''),
('8691','sql','164','88','chx_acces_autorisation','c','5','2','1096','1117','86','0','2','0','1089','90',''),
('8692','sql','164','89','0','c','4','0','1121','1121','85','0','2','0','1089','90',''),
('8693','sql','163','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8694','sql','163','1','sélectionner','f','0','0','0','11','0','3','1','6','12','47',''),
('8695','sql','163','2','valeurs','f','1','0','17','23','1','2','1','2','24','9',''),
('8696','sql','163','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('8697','sql','163','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('8698','sql','163','5','chi_id_autorisation','c','3','2','37','55','3','0','2','0','30','47',''),
('8699','sql','163','6','champ','f','2','0','59','63','2','2','2','1','64','47',''),
('8700','sql','163','7','T1','c','3','2','66','67','6','0','1','0','64','8',''),
('8701','sql','163','8','chp_nom_source','c','3','2','71','84','6','0','2','0','64','47',''),
('8702','sql','163','9','provenance','f','1','0','93','102','1','2','2','5','103','34',''),
('8703','sql','163','10','table_reference','f','2','0','111','125','9','1','1','4','126','18',''),
('8704','sql','163','11','source','f','3','0','137','142','10','1','1','3','143','47',''),
('8705','sql','163','12','nom_de_la_table','f','4','0','144','158','11','3','1','2','159','47',''),
('8706','sql','163','13','tbl_autorisations','c','5','0','160','176','12','0','1','0','159','14',''),
('8707','sql','163','14','alias','f','5','0','178','182','12','1','2','1','183','16',''),
('8708','sql','163','15','T0','c','6','0','184','185','14','0','1','0','183','47',''),
('8709','sql','163','16','base','f','5','0','188','191','12','1','3','1','192','47',''),
('8710','sql','163','17','b1','c','6','0','193','194','16','0','1','0','192','47',''),
('8711','sql','163','18','jointure_gauche','f','2','0','214','228','9','2','2','4','229','47',''),
('8712','sql','163','19','source','f','3','0','240','245','18','1','1','3','246','26',''),
('8713','sql','163','20','nom_de_la_table','f','4','0','247','261','19','3','1','2','262','47',''),
('8714','sql','163','21','tbl_sources','c','5','0','263','273','20','0','1','0','262','22',''),
('8715','sql','163','22','alias','f','5','0','275','279','20','1','2','1','280','24',''),
('8716','sql','163','23','T1','c','6','0','281','282','22','0','1','0','280','47',''),
('8717','sql','163','24','base','f','5','0','285','288','20','1','3','1','289','47',''),
('8718','sql','163','25','b1','c','6','0','290','291','24','0','1','0','289','47',''),
('8719','sql','163','26','contrainte','f','3','0','306','315','18','1','2','3','316','47',''),
('8720','sql','163','27','egal','f','4','0','317','320','26','2','1','2','321','47',''),
('8721','sql','163','28','champ','f','5','0','322','326','27','2','1','1','327','31',''),
('8722','sql','163','29','T1','c','6','0','328','329','28','0','1','0','327','30',''),
('8723','sql','163','30','chi_id_source','c','6','0','331','343','28','0','2','0','327','47',''),
('8724','sql','163','31','champ','f','5','0','346','350','27','2','2','1','351','47',''),
('8725','sql','163','32','T0','c','6','0','352','353','31','0','1','0','351','33',''),
('8726','sql','163','33','chx_source_autorisation','c','6','0','355','377','31','0','2','0','351','47',''),
('8727','sql','163','34','conditions','f','1','0','399','408','1','1','3','4','409','47',''),
('8728','sql','163','35','et','f','2','0','417','418','34','2','1','3','419','47',''),
('8729','sql','163','36','egal','f','3','0','420','423','35','2','1','2','424','41',''),
('8730','sql','163','37','champ','f','4','0','425','429','36','2','1','1','430','40',''),
('8731','sql','163','38','T0','c','5','2','432','433','37','0','1','0','430','39',''),
('8732','sql','163','39','chx_acces_autorisation','c','5','2','437','458','37','0','2','0','430','47',''),
('8733','sql','163','40',':T0_chx_acces_autorisation','c','4','0','462','487','36','0','2','0','430','47',''),
('8734','sql','163','41','dans','f','3','0','490','493','35','2','2','2','494','47',''),
('8735','sql','163','42','champ','f','4','0','495','499','41','2','1','1','500','45',''),
('8736','sql','163','43','T1','c','5','2','502','503','42','0','1','0','500','44',''),
('8737','sql','163','44','chp_nom_source','c','5','2','507','520','42','0','2','0','500','47',''),
('8738','sql','163','45','','f','4','0','507','520','41','1','2','1','524','47',''),
('8739','sql','163','46',':T1_chp_nom_source','c','5','0','525','542','45','0','1','0','524','47',''),
('8740','sql','162','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8741','sql','162','1','sélectionner','f','0','0','0','11','0','3','1','6','12','21',''),
('8742','sql','162','2','valeurs','f','1','0','17','23','1','1','1','2','24','6',''),
('8743','sql','162','3','champ','f','2','0','25','29','2','2','1','1','30','21',''),
('8744','sql','162','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('8745','sql','162','5','chi_id_acces','c','3','2','37','48','3','0','2','0','30','21',''),
('8746','sql','162','6','provenance','f','1','0','57','66','1','1','2','5','67','15',''),
('8747','sql','162','7','table_reference','f','2','0','75','89','6','1','1','4','90','21',''),
('8748','sql','162','8','source','f','3','0','101','106','7','1','1','3','107','21',''),
('8749','sql','162','9','nom_de_la_table','f','4','0','108','122','8','3','1','2','123','21',''),
('8750','sql','162','10','tbl_acces','c','5','0','124','132','9','0','1','0','123','11',''),
('8751','sql','162','11','alias','f','5','0','134','138','9','1','2','1','139','13',''),
('8752','sql','162','12','T0','c','6','0','140','141','11','0','1','0','139','21',''),
('8753','sql','162','13','base','f','5','0','144','147','9','1','3','1','148','21',''),
('8754','sql','162','14','b1','c','6','0','149','150','13','0','1','0','148','21',''),
('8755','sql','162','15','conditions','f','1','0','172','181','1','1','3','3','182','21',''),
('8756','sql','162','16','supegal','f','2','0','183','189','15','2','1','2','190','21',''),
('8757','sql','162','17','champ','f','3','0','191','195','16','2','1','1','196','20',''),
('8758','sql','162','18','T0','c','4','2','198','199','17','0','1','0','196','19',''),
('8759','sql','162','19','chi_id_acces','c','4','2','203','214','17','0','2','0','196','21',''),
('8760','sql','162','20','1','c','3','0','218','218','16','0','2','0','196','21',''),
('8761','sql','161','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8762','sql','161','1','modifier','f','0','0','0','7','0','4','1','6','8','33',''),
('8763','sql','161','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8764','sql','161','3','1','c','2','0','31','31','2','0','1','0','30','33',''),
('8765','sql','161','4','valeurs','f','1','0','38','44','1','4','2','3','45','21',''),
('8766','sql','161','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('8767','sql','161','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('8768','sql','161','7','chp_texte_tache','c','4','2','61','75','6','0','1','0','59','33',''),
('8769','sql','161','8',':n_chp_texte_tache','c','3','0','79','96','5','0','2','0','59','33',''),
('8770','sql','161','9','affecte','f','2','0','99','105','4','2','2','2','106','13',''),
('8771','sql','161','10','champ','f','3','0','107','111','9','1','1','1','112','12',''),
('8772','sql','161','11','chp_priorite_tache','c','4','2','114','131','10','0','1','0','112','33',''),
('8773','sql','161','12',':n_chp_priorite_tache','c','3','0','135','155','9','0','2','0','112','33',''),
('8774','sql','161','13','affecte','f','2','0','158','164','4','2','3','2','165','17',''),
('8775','sql','161','14','champ','f','3','0','166','170','13','1','1','1','171','16',''),
('8776','sql','161','15','chd__dtm_tache','c','4','2','173','186','14','0','1','0','171','33',''),
('8777','sql','161','16',':n_chd__dtm_tache','c','3','0','190','206','13','0','2','0','171','33',''),
('8778','sql','161','17','affecte','f','2','0','209','215','4','2','4','2','216','33',''),
('8779','sql','161','18','champ','f','3','0','217','221','17','1','1','1','222','20',''),
('8780','sql','161','19','chx_utilisateur_tache','c','4','2','224','244','18','0','1','0','222','33',''),
('8781','sql','161','20',':n_chx_utilisateur_tache','c','3','0','248','271','17','0','2','0','222','33',''),
('8782','sql','161','21','provenance','f','1','0','279','288','1','1','3','5','289','28',''),
('8783','sql','161','22','table_reference','f','2','0','297','311','21','1','1','4','312','33','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 0 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 1000 (2722) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('8784','sql','161','23','source','f','3','0','323','328','22','1','1','3','329','33',''),
('8785','sql','161','24','nom_de_la_table','f','4','0','330','344','23','2','1','2','345','33',''),
('8786','sql','161','25','tbl_taches','c','5','0','346','355','24','0','1','0','345','26',''),
('8787','sql','161','26','base','f','5','0','357','360','24','1','2','1','361','33',''),
('8788','sql','161','27','b1','c','6','0','362','363','26','0','1','0','361','33',''),
('8789','sql','161','28','conditions','f','1','0','385','394','1','1','4','3','395','33',''),
('8790','sql','161','29','egal','f','2','0','396','399','28','2','1','2','400','33',''),
('8791','sql','161','30','champ','f','3','0','401','405','29','1','1','1','406','32',''),
('8792','sql','161','31','chi_id_tache','c','4','2','408','419','30','0','1','0','406','33',''),
('8793','sql','161','32',':c_chi_id_tache','c','3','0','423','437','29','0','2','0','406','33',''),
('8794','sql','160','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8795','sql','160','1','sélectionner','f','0','0','0','11','0','4','1','6','12','51',''),
('8796','sql','160','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8797','sql','160','3','1','c','2','0','35','35','2','0','1','0','34','51',''),
('8798','sql','160','4','valeurs','f','1','0','42','48','1','5','2','2','49','20',''),
('8799','sql','160','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8800','sql','160','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8801','sql','160','7','chi_id_tache','c','3','2','69','80','5','0','2','0','62','51',''),
('8802','sql','160','8','champ','f','2','0','91','95','4','2','2','1','96','11',''),
('8803','sql','160','9','T0','c','3','2','98','99','8','0','1','0','96','10',''),
('8804','sql','160','10','chx_utilisateur_tache','c','3','2','103','123','8','0','2','0','96','51',''),
('8805','sql','160','11','champ','f','2','0','134','138','4','2','3','1','139','14',''),
('8806','sql','160','12','T0','c','3','2','141','142','11','0','1','0','139','13',''),
('8807','sql','160','13','chp_texte_tache','c','3','2','146','160','11','0','2','0','139','51',''),
('8808','sql','160','14','champ','f','2','0','171','175','4','2','4','1','176','17',''),
('8809','sql','160','15','T0','c','3','2','178','179','14','0','1','0','176','16',''),
('8810','sql','160','16','chp_priorite_tache','c','3','2','183','200','14','0','2','0','176','51',''),
('8811','sql','160','17','champ','f','2','0','211','215','4','2','5','1','216','51',''),
('8812','sql','160','18','T1','c','3','2','218','219','17','0','1','0','216','19',''),
('8813','sql','160','19','chp_nom_de_connexion_utilisateur','c','3','2','223','254','17','0','2','0','216','51',''),
('8814','sql','160','20','provenance','f','1','0','267','276','1','2','3','5','277','45',''),
('8815','sql','160','21','table_reference','f','2','0','285','299','20','1','1','4','300','29',''),
('8816','sql','160','22','source','f','3','0','311','316','21','1','1','3','317','51',''),
('8817','sql','160','23','nom_de_la_table','f','4','0','318','332','22','3','1','2','333','51',''),
('8818','sql','160','24','tbl_taches','c','5','0','334','343','23','0','1','0','333','25',''),
('8819','sql','160','25','alias','f','5','0','345','349','23','1','2','1','350','27',''),
('8820','sql','160','26','T0','c','6','0','351','352','25','0','1','0','350','51',''),
('8821','sql','160','27','base','f','5','0','355','358','23','1','3','1','359','51',''),
('8822','sql','160','28','b1','c','6','0','360','361','27','0','1','0','359','51',''),
('8823','sql','160','29','jointure_gauche','f','2','0','381','395','20','2','2','4','396','51',''),
('8824','sql','160','30','source','f','3','0','407','412','29','1','1','3','413','37',''),
('8825','sql','160','31','nom_de_la_table','f','4','0','414','428','30','3','1','2','429','51',''),
('8826','sql','160','32','tbl_utilisateurs','c','5','0','430','445','31','0','1','0','429','33',''),
('8827','sql','160','33','alias','f','5','0','447','451','31','1','2','1','452','35',''),
('8828','sql','160','34','T1','c','6','0','453','454','33','0','1','0','452','51',''),
('8829','sql','160','35','base','f','5','0','457','460','31','1','3','1','461','51',''),
('8830','sql','160','36','b1','c','6','0','462','463','35','0','1','0','461','51',''),
('8831','sql','160','37','contrainte','f','3','0','478','487','29','1','2','3','488','51',''),
('8832','sql','160','38','egal','f','4','0','489','492','37','2','1','2','493','51',''),
('8833','sql','160','39','champ','f','5','0','494','498','38','2','1','1','499','42',''),
('8834','sql','160','40','T1','c','6','0','500','501','39','0','1','0','499','41',''),
('8835','sql','160','41','chi_id_utilisateur','c','6','0','503','520','39','0','2','0','499','51',''),
('8836','sql','160','42','champ','f','5','0','523','527','38','2','2','1','528','51',''),
('8837','sql','160','43','T0','c','6','0','529','530','42','0','1','0','528','44',''),
('8838','sql','160','44','chx_utilisateur_tache','c','6','0','532','552','42','0','2','0','528','51',''),
('8839','sql','160','45','conditions','f','1','0','574','583','1','1','4','3','584','51',''),
('8840','sql','160','46','egal','f','2','0','585','588','45','2','1','2','589','51',''),
('8841','sql','160','47','champ','f','3','0','590','594','46','2','1','1','595','50',''),
('8842','sql','160','48','T0','c','4','2','597','598','47','0','1','0','595','49',''),
('8843','sql','160','49','chi_id_tache','c','4','2','602','613','47','0','2','0','595','51',''),
('8844','sql','160','50',':T0_chi_id_tache','c','3','0','617','632','46','0','2','0','595','51',''),
('8845','sql','159','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8846','sql','159','1','modifier','f','0','0','0','7','0','4','1','6','8','33',''),
('8847','sql','159','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8848','sql','159','3','1','c','2','0','31','31','2','0','1','0','30','33',''),
('8849','sql','159','4','valeurs','f','1','0','38','44','1','1','2','3','45','11',''),
('8850','sql','159','5','affecte','f','2','0','46','52','4','2','1','2','53','33',''),
('8851','sql','159','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('8852','sql','159','7','chp_priorite_tache','c','4','2','61','78','6','0','1','0','59','33',''),
('8853','sql','159','8','plus','f','3','0','82','85','5','2','2','1','86','33',''),
('8854','sql','159','9','chp_priorite_tache','c','4','0','87','104','8','0','1','0','86','10',''),
('8855','sql','159','10','1','c','4','0','106','106','8','0','2','0','86','33',''),
('8856','sql','159','11','provenance','f','1','0','115','124','1','1','3','5','125','18',''),
('8857','sql','159','12','table_reference','f','2','0','133','147','11','1','1','4','148','33',''),
('8858','sql','159','13','source','f','3','0','159','164','12','1','1','3','165','33',''),
('8859','sql','159','14','nom_de_la_table','f','4','0','166','180','13','2','1','2','181','33',''),
('8860','sql','159','15','tbl_taches','c','5','0','182','191','14','0','1','0','181','16',''),
('8861','sql','159','16','base','f','5','0','193','196','14','1','2','1','197','33',''),
('8862','sql','159','17','b1','c','6','0','198','199','16','0','1','0','197','33',''),
('8863','sql','159','18','conditions','f','1','0','221','230','1','1','4','4','231','33',''),
('8864','sql','159','19','et','f','2','0','239','240','18','4','1','3','241','33',''),
('8865','sql','159','20','#','f','3','0','252','252','19','0','1','0','253','21',''),
('8866','sql','159','21','egal','f','3','0','266','269','19','2','2','2','270','25',''),
('8867','sql','159','22','champ','f','4','0','271','275','21','1','1','1','276','24',''),
('8868','sql','159','23','chi_id_tache','c','5','2','278','289','22','0','1','0','276','33',''),
('8869','sql','159','24',':c_chi_id_tache','c','4','0','293','307','21','0','2','0','276','33',''),
('8870','sql','159','25','egal','f','3','0','320','323','19','2','3','2','324','29',''),
('8871','sql','159','26','champ','f','4','0','325','329','25','1','1','1','330','28',''),
('8872','sql','159','27','chx_utilisateur_tache','c','5','2','332','352','26','0','1','0','330','33',''),
('8873','sql','159','28',':c_chx_utilisateur_tache','c','4','0','356','379','25','0','2','0','330','33',''),
('8874','sql','159','29','inf','f','3','0','392','394','19','2','4','2','395','33',''),
('8875','sql','159','30','champ','f','4','0','396','400','29','1','1','1','401','32',''),
('8876','sql','159','31','chp_priorite_tache','c','5','2','403','420','30','0','1','0','401','33',''),
('8877','sql','159','32','99','c','4','0','424','425','29','0','2','0','401','33',''),
('8878','sql','158','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8879','sql','158','1','modifier','f','0','0','0','7','0','4','1','6','8','33',''),
('8880','sql','158','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8881','sql','158','3','1','c','2','0','31','31','2','0','1','0','30','33',''),
('8882','sql','158','4','valeurs','f','1','0','38','44','1','1','2','3','45','11',''),
('8883','sql','158','5','affecte','f','2','0','46','52','4','2','1','2','53','33',''),
('8884','sql','158','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('8885','sql','158','7','chp_priorite_tache','c','4','2','61','78','6','0','1','0','59','33',''),
('8886','sql','158','8','moins','f','3','0','82','86','5','2','2','1','87','33',''),
('8887','sql','158','9','chp_priorite_tache','c','4','0','88','105','8','0','1','0','87','10',''),
('8888','sql','158','10','1','c','4','0','107','107','8','0','2','0','87','33',''),
('8889','sql','158','11','provenance','f','1','0','116','125','1','1','3','5','126','18',''),
('8890','sql','158','12','table_reference','f','2','0','134','148','11','1','1','4','149','33',''),
('8891','sql','158','13','source','f','3','0','160','165','12','1','1','3','166','33',''),
('8892','sql','158','14','nom_de_la_table','f','4','0','167','181','13','2','1','2','182','33',''),
('8893','sql','158','15','tbl_taches','c','5','0','183','192','14','0','1','0','182','16',''),
('8894','sql','158','16','base','f','5','0','194','197','14','1','2','1','198','33',''),
('8895','sql','158','17','b1','c','6','0','199','200','16','0','1','0','198','33',''),
('8896','sql','158','18','conditions','f','1','0','222','231','1','1','4','4','232','33',''),
('8897','sql','158','19','et','f','2','0','240','241','18','4','1','3','242','33',''),
('8898','sql','158','20','#','f','3','0','253','253','19','0','1','0','254','21',''),
('8899','sql','158','21','egal','f','3','0','267','270','19','2','2','2','271','25',''),
('8900','sql','158','22','champ','f','4','0','272','276','21','1','1','1','277','24',''),
('8901','sql','158','23','chi_id_tache','c','5','2','279','290','22','0','1','0','277','33',''),
('8902','sql','158','24',':c_chi_id_tache','c','4','0','294','308','21','0','2','0','277','33',''),
('8903','sql','158','25','egal','f','3','0','321','324','19','2','3','2','325','29',''),
('8904','sql','158','26','champ','f','4','0','326','330','25','1','1','1','331','28',''),
('8905','sql','158','27','chx_utilisateur_tache','c','5','2','333','353','26','0','1','0','331','33',''),
('8906','sql','158','28',':c_chx_utilisateur_tache','c','4','0','357','380','25','0','2','0','331','33',''),
('8907','sql','158','29','supegal','f','3','0','393','399','19','2','4','2','400','33',''),
('8908','sql','158','30','champ','f','4','0','401','405','29','1','1','1','406','32',''),
('8909','sql','158','31','chp_priorite_tache','c','5','2','408','425','30','0','1','0','406','33',''),
('8910','sql','158','32','1','c','4','0','429','429','29','0','2','0','406','33',''),
('8911','sql','157','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('8912','sql','157','1','#','f','0','0','0','0','0','0','1','0','1','2',''),
('8913','sql','157','2','modifier','f','0','0','5','12','0','4','2','6','13','33',''),
('8914','sql','157','3','base_de_reference','f','1','0','18','34','2','1','1','1','35','5',''),
('8915','sql','157','4','1','c','2','0','36','36','3','0','1','0','35','33',''),
('8916','sql','157','5','valeurs','f','1','0','43','49','2','3','2','3','50','15',''),
('8917','sql','157','6','#','f','2','0','58','58','5','0','1','0','59','7',''),
('8918','sql','157','7','affecte','f','2','0','69','75','5','2','2','2','76','11',''),
('8919','sql','157','8','champ','f','3','0','77','81','7','1','1','1','82','10',''),
('8920','sql','157','9','chp_priorite_tache','c','4','2','84','101','8','0','1','0','82','33',''),
('8921','sql','157','10',':n_chp_priorite_tache','c','3','0','105','125','7','0','2','0','82','33',''),
('8922','sql','157','11','affecte','f','2','0','135','141','5','2','3','2','142','33',''),
('8923','sql','157','12','champ','f','3','0','143','147','11','1','1','1','148','14',''),
('8924','sql','157','13','chd__dtm_tache','c','4','2','150','163','12','0','1','0','148','33',''),
('8925','sql','157','14',':n_chd__dtm_tache','c','3','0','167','183','11','0','2','0','148','33',''),
('8926','sql','157','15','provenance','f','1','0','195','204','2','1','3','5','205','22',''),
('8927','sql','157','16','table_reference','f','2','0','213','227','15','1','1','4','228','33',''),
('8928','sql','157','17','source','f','3','0','239','244','16','1','1','3','245','33',''),
('8929','sql','157','18','nom_de_la_table','f','4','0','246','260','17','2','1','2','261','33',''),
('8930','sql','157','19','tbl_taches','c','5','0','262','271','18','0','1','0','261','20',''),
('8931','sql','157','20','base','f','5','0','273','276','18','1','2','1','277','33',''),
('8932','sql','157','21','b1','c','6','0','278','279','20','0','1','0','277','33',''),
('8933','sql','157','22','conditions','f','1','0','301','310','2','1','4','4','311','33',''),
('8934','sql','157','23','et','f','2','0','319','320','22','3','1','3','321','33',''),
('8935','sql','157','24','#','f','3','0','332','332','23','0','1','0','333','25',''),
('8936','sql','157','25','egal','f','3','0','346','349','23','2','2','2','350','29',''),
('8937','sql','157','26','champ','f','4','0','351','355','25','1','1','1','356','28',''),
('8938','sql','157','27','chi_id_tache','c','5','2','358','369','26','0','1','0','356','33',''),
('8939','sql','157','28',':c_chi_id_tache','c','4','0','373','387','25','0','2','0','356','33',''),
('8940','sql','157','29','egal','f','3','0','400','403','23','2','3','2','404','33',''),
('8941','sql','157','30','champ','f','4','0','405','409','29','1','1','1','410','32',''),
('8942','sql','157','31','chx_utilisateur_tache','c','5','2','412','432','30','0','1','0','410','33',''),
('8943','sql','157','32',':c_chx_utilisateur_tache','c','4','0','436','459','29','0','2','0','410','33',''),
('8944','sql','156','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8945','sql','156','1','modifier','f','0','0','0','7','0','4','1','6','8','26',''),
('8946','sql','156','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('8947','sql','156','3','1','c','2','0','31','31','2','0','1','0','30','26',''),
('8948','sql','156','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('8949','sql','156','5','affecte','f','2','0','46','52','4','2','1','2','53','26',''),
('8950','sql','156','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('8951','sql','156','7','chp_priorite_tache','c','4','0','60','77','6','0','1','0','59','26',''),
('8952','sql','156','8',':n_chp_priorite_tache','c','3','0','80','100','5','0','2','0','59','26',''),
('8953','sql','156','9','provenance','f','1','0','108','117','1','1','3','5','118','16',''),
('8954','sql','156','10','table_reference','f','2','0','126','140','9','1','1','4','141','26',''),
('8955','sql','156','11','source','f','3','0','152','157','10','1','1','3','158','26',''),
('8956','sql','156','12','nom_de_la_table','f','4','0','159','173','11','2','1','2','174','26',''),
('8957','sql','156','13','tbl_taches','c','5','0','175','184','12','0','1','0','174','14',''),
('8958','sql','156','14','base','f','5','0','186','189','12','1','2','1','190','26',''),
('8959','sql','156','15','b1','c','6','0','191','192','14','0','1','0','190','26',''),
('8960','sql','156','16','conditions','f','1','0','214','223','1','1','4','4','224','26',''),
('8961','sql','156','17','et','f','2','0','232','233','16','2','1','3','234','26',''),
('8962','sql','156','18','egal','f','3','0','235','238','17','2','1','2','239','22',''),
('8963','sql','156','19','champ','f','4','0','240','244','18','1','1','1','245','21',''),
('8964','sql','156','20','chi_id_tache','c','5','0','246','257','19','0','1','0','245','26',''),
('8965','sql','156','21',':c_chi_id_tache','c','4','0','260','274','18','0','2','0','245','26',''),
('8966','sql','156','22','egal','f','3','0','277','280','17','2','2','2','281','26',''),
('8967','sql','156','23','champ','f','4','0','282','286','22','1','1','1','287','25',''),
('8968','sql','156','24','chx_utilisateur_tache','c','5','0','288','308','23','0','1','0','287','26',''),
('8969','sql','156','25',':c_chx_utilisateur_tache','c','4','0','311','334','22','0','2','0','287','26',''),
('8970','sql','155','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('8971','sql','155','1','sélectionner','f','0','0','0','11','0','5','1','6','12','65',''),
('8972','sql','155','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('8973','sql','155','3','1','c','2','0','35','35','2','0','1','0','34','65',''),
('8974','sql','155','4','valeurs','f','1','0','42','48','1','5','2','2','49','20',''),
('8975','sql','155','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('8976','sql','155','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('8977','sql','155','7','chi_id_tache','c','3','2','69','80','5','0','2','0','62','65',''),
('8978','sql','155','8','champ','f','2','0','91','95','4','2','2','1','96','11',''),
('8979','sql','155','9','T0','c','3','2','98','99','8','0','1','0','96','10',''),
('8980','sql','155','10','chx_utilisateur_tache','c','3','2','103','123','8','0','2','0','96','65',''),
('8981','sql','155','11','champ','f','2','0','134','138','4','2','3','1','139','14',''),
('8982','sql','155','12','T0','c','3','2','141','142','11','0','1','0','139','13',''),
('8983','sql','155','13','chp_texte_tache','c','3','2','146','160','11','0','2','0','139','65',''),
('8984','sql','155','14','champ','f','2','0','171','175','4','2','4','1','176','17',''),
('8985','sql','155','15','T0','c','3','2','178','179','14','0','1','0','176','16',''),
('8986','sql','155','16','chp_priorite_tache','c','3','2','183','200','14','0','2','0','176','65',''),
('8987','sql','155','17','champ','f','2','0','211','215','4','2','5','1','216','65',''),
('8988','sql','155','18','T1','c','3','2','218','219','17','0','1','0','216','19',''),
('8989','sql','155','19','chp_nom_de_connexion_utilisateur','c','3','2','223','254','17','0','2','0','216','65',''),
('8990','sql','155','20','provenance','f','1','0','267','276','1','2','3','5','277','45',''),
('8991','sql','155','21','table_reference','f','2','0','285','299','20','1','1','4','300','29',''),
('8992','sql','155','22','source','f','3','0','311','316','21','1','1','3','317','65',''),
('8993','sql','155','23','nom_de_la_table','f','4','0','318','332','22','3','1','2','333','65',''),
('8994','sql','155','24','tbl_taches','c','5','0','334','343','23','0','1','0','333','25',''),
('8995','sql','155','25','alias','f','5','0','345','349','23','1','2','1','350','27',''),
('8996','sql','155','26','T0','c','6','0','351','352','25','0','1','0','350','65',''),
('8997','sql','155','27','base','f','5','0','355','358','23','1','3','1','359','65',''),
('8998','sql','155','28','b1','c','6','0','360','361','27','0','1','0','359','65',''),
('8999','sql','155','29','jointure_gauche','f','2','0','381','395','20','2','2','4','396','65',''),
('9000','sql','155','30','source','f','3','0','407','412','29','1','1','3','413','37',''),
('9001','sql','155','31','nom_de_la_table','f','4','0','414','428','30','3','1','2','429','65',''),
('9002','sql','155','32','tbl_utilisateurs','c','5','0','430','445','31','0','1','0','429','33',''),
('9003','sql','155','33','alias','f','5','0','447','451','31','1','2','1','452','35',''),
('9004','sql','155','34','T1','c','6','0','453','454','33','0','1','0','452','65',''),
('9005','sql','155','35','base','f','5','0','457','460','31','1','3','1','461','65',''),
('9006','sql','155','36','b1','c','6','0','462','463','35','0','1','0','461','65',''),
('9007','sql','155','37','contrainte','f','3','0','478','487','29','1','2','3','488','65',''),
('9008','sql','155','38','egal','f','4','0','489','492','37','2','1','2','493','65',''),
('9009','sql','155','39','champ','f','5','0','494','498','38','2','1','1','499','42',''),
('9010','sql','155','40','T1','c','6','0','500','501','39','0','1','0','499','41',''),
('9011','sql','155','41','chi_id_utilisateur','c','6','0','503','520','39','0','2','0','499','65',''),
('9012','sql','155','42','champ','f','5','0','523','527','38','2','2','1','528','65',''),
('9013','sql','155','43','T0','c','6','0','529','530','42','0','1','0','528','44',''),
('9014','sql','155','44','chx_utilisateur_tache','c','6','0','532','552','42','0','2','0','528','65',''),
('9015','sql','155','45','conditions','f','1','0','574','583','1','1','4','4','584','58',''),
('9016','sql','155','46','et','f','2','0','592','593','45','3','1','3','594','65',''),
('9017','sql','155','47','#','f','3','0','605','605','46','0','1','0','606','48',''),
('9018','sql','155','48','egal','f','3','0','619','622','46','2','2','2','623','53',''),
('9019','sql','155','49','champ','f','4','0','624','628','48','2','1','1','629','52',''),
('9020','sql','155','50','T0','c','5','2','631','632','49','0','1','0','629','51',''),
('9021','sql','155','51','chx_utilisateur_tache','c','5','2','636','656','49','0','2','0','629','65',''),
('9022','sql','155','52',':T0_chx_utilisateur_tache','c','4','0','660','684','48','0','2','0','629','65',''),
('9023','sql','155','53','inf','f','3','0','697','699','46','2','3','2','700','65',''),
('9024','sql','155','54','champ','f','4','0','701','705','53','2','1','1','706','57',''),
('9025','sql','155','55','T0','c','5','2','708','709','54','0','1','0','706','56',''),
('9026','sql','155','56','chp_priorite_tache','c','5','2','713','730','54','0','2','0','706','65',''),
('9027','sql','155','57',':T0_chp_priorite_tache','c','4','0','734','755','53','0','2','0','706','65',''),
('9028','sql','155','58','complements','f','1','0','775','785','1','1','5','4','786','65',''),
('9029','sql','155','59','trier_par','f','2','0','794','802','58','1','1','3','803','65',''),
('9030','sql','155','60','','f','3','0','794','802','59','2','1','2','804','65',''),
('9031','sql','155','61','champ','f','4','0','805','809','60','2','1','1','810','64',''),
('9032','sql','155','62','T0','c','5','2','812','813','61','0','1','0','810','63',''),
('9033','sql','155','63','chp_priorite_tache','c','5','2','817','834','61','0','2','0','810','65',''),
('9034','sql','155','64','croissant','f','4','0','838','846','60','0','2','0','847','65',''),
('9035','sql','154','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9036','sql','154','1','modifier','f','0','0','0','7','0','4','1','6','8','21',''),
('9037','sql','154','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('9038','sql','154','3','1','c','2','0','31','31','2','0','1','0','30','21',''),
('9039','sql','154','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('9040','sql','154','5','affecte','f','2','0','46','52','4','2','1','2','53','21',''),
('9041','sql','154','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('9042','sql','154','7','cht_parametres_acces','c','4','2','61','80','6','0','1','0','59','21',''),
('9043','sql','154','8',':n_cht_parametres_acces','c','3','0','84','106','5','0','2','0','59','21',''),
('9044','sql','154','9','provenance','f','1','0','114','123','1','1','3','5','124','16',''),
('9045','sql','154','10','table_reference','f','2','0','132','146','9','1','1','4','147','21',''),
('9046','sql','154','11','source','f','3','0','158','163','10','1','1','3','164','21',''),
('9047','sql','154','12','nom_de_la_table','f','4','0','165','179','11','2','1','2','180','21',''),
('9048','sql','154','13','tbl_acces','c','5','0','181','189','12','0','1','0','180','14',''),
('9049','sql','154','14','base','f','5','0','191','194','12','1','2','1','195','21',''),
('9050','sql','154','15','b1','c','6','0','196','197','14','0','1','0','195','21',''),
('9051','sql','154','16','conditions','f','1','0','219','228','1','1','4','3','229','21',''),
('9052','sql','154','17','egal','f','2','0','230','233','16','2','1','2','234','21',''),
('9053','sql','154','18','champ','f','3','0','235','239','17','1','1','1','240','20',''),
('9054','sql','154','19','chi_id_acces','c','4','2','242','253','18','0','1','0','240','21',''),
('9055','sql','154','20',':c_chi_id_acces','c','3','0','257','271','17','0','2','0','240','21',''),
('9056','sql','153','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9057','sql','153','1','sélectionner','f','0','0','0','11','0','3','1','6','12','100',''),
('9058','sql','153','2','valeurs','f','1','0','17','23','1','11','1','2','24','36',''),
('9059','sql','153','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9060','sql','153','4','T1','c','3','2','39','40','3','0','1','0','37','5',''),
('9061','sql','153','5','chx_source_autorisation','c','3','2','44','66','3','0','2','0','37','100',''),
('9062','sql','153','6','champ','f','2','0','77','81','2','2','2','1','82','9',''),
('9063','sql','153','7','T0','c','3','2','84','85','6','0','1','0','82','8',''),
('9064','sql','153','8','chp_titre_menu','c','3','2','89','102','6','0','2','0','82','100',''),
('9065','sql','153','9','champ','f','2','0','113','117','2','2','3','1','118','12',''),
('9066','sql','153','10','T0','c','3','2','120','121','9','0','1','0','118','11',''),
('9067','sql','153','11','chp_methode_menu','c','3','2','125','140','9','0','2','0','118','100',''),
('9068','sql','153','12','champ','f','2','0','151','155','2','2','4','1','156','15',''),
('9069','sql','153','13','T3','c','3','2','158','159','12','0','1','0','156','14',''),
('9070','sql','153','14','chp_nom_source','c','3','2','163','176','12','0','2','0','156','100',''),
('9071','sql','153','15','champ','f','2','0','187','191','2','2','5','1','192','18',''),
('9072','sql','153','16','T0','c','3','2','194','195','15','0','1','0','192','17',''),
('9073','sql','153','17','cht_libelle_menu','c','3','2','199','214','15','0','2','0','192','100',''),
('9074','sql','153','18','champ','f','2','0','225','229','2','2','6','1','230','21',''),
('9075','sql','153','19','T0','c','3','2','232','233','18','0','1','0','230','20',''),
('9076','sql','153','20','cht_initialisation_menu','c','3','2','237','259','18','0','2','0','230','100',''),
('9077','sql','153','21','champ','f','2','0','270','274','2','2','7','1','275','24',''),
('9078','sql','153','22','T0','c','3','2','277','278','21','0','1','0','275','23',''),
('9079','sql','153','23','chi_id_menu','c','3','2','282','292','21','0','2','0','275','100',''),
('9080','sql','153','24','champ','f','2','0','303','307','2','2','8','1','308','27',''),
('9081','sql','153','25','T0','c','3','2','310','311','24','0','1','0','308','26',''),
('9082','sql','153','26','cht_condition_menu','c','3','2','315','332','24','0','2','0','308','100',''),
('9083','sql','153','27','champ','f','2','0','343','347','2','2','9','1','348','30',''),
('9084','sql','153','28','T0','c','3','2','350','351','27','0','1','0','348','29',''),
('9085','sql','153','29','cht_condition_js_menu','c','3','2','355','375','27','0','2','0','348','100',''),
('9086','sql','153','30','champ','f','2','0','386','390','2','2','10','1','391','33',''),
('9087','sql','153','31','T0','c','3','2','393','394','30','0','1','0','391','32',''),
('9088','sql','153','32','chx_autorisation_menu','c','3','2','398','418','30','0','2','0','391','100',''),
('9089','sql','153','33','champ','f','2','0','429','433','2','2','11','1','434','100',''),
('9090','sql','153','34','T3','c','3','2','436','437','33','0','1','0','434','35',''),
('9091','sql','153','35','cht_condition_js_source','c','3','2','441','463','33','0','2','0','434','100',''),
('9092','sql','153','36','provenance','f','1','0','476','485','1','4','2','5','486','85',''),
('9093','sql','153','37','table_reference','f','2','0','494','508','36','1','1','4','509','45',''),
('9094','sql','153','38','source','f','3','0','520','525','37','1','1','3','526','100',''),
('9095','sql','153','39','nom_de_la_table','f','4','0','527','541','38','3','1','2','542','100',''),
('9096','sql','153','40','tbl_menus','c','5','0','543','551','39','0','1','0','542','41',''),
('9097','sql','153','41','alias','f','5','0','553','557','39','1','2','1','558','43',''),
('9098','sql','153','42','T0','c','6','0','559','560','41','0','1','0','558','100',''),
('9099','sql','153','43','base','f','5','0','563','566','39','1','3','1','567','100',''),
('9100','sql','153','44','b1','c','6','0','568','569','43','0','1','0','567','100',''),
('9101','sql','153','45','jointure_croisée','f','2','0','589','604','36','1','2','4','605','53',''),
('9102','sql','153','46','source','f','3','0','616','621','45','1','1','3','622','100',''),
('9103','sql','153','47','nom_de_la_table','f','4','0','623','637','46','3','1','2','638','100',''),
('9104','sql','153','48','tbl_autorisations','c','5','0','639','655','47','0','1','0','638','49',''),
('9105','sql','153','49','alias','f','5','0','657','661','47','1','2','1','662','51',''),
('9106','sql','153','50','T1','c','6','0','663','664','49','0','1','0','662','100',''),
('9107','sql','153','51','base','f','5','0','667','670','47','1','3','1','671','100',''),
('9108','sql','153','52','b1','c','6','0','672','673','51','0','1','0','671','100',''),
('9109','sql','153','53','jointure_gauche','f','2','0','693','707','36','2','3','4','708','69',''),
('9110','sql','153','54','source','f','3','0','719','724','53','1','1','3','725','61',''),
('9111','sql','153','55','nom_de_la_table','f','4','0','726','740','54','3','1','2','741','100',''),
('9112','sql','153','56','tbl_acces','c','5','0','742','750','55','0','1','0','741','57',''),
('9113','sql','153','57','alias','f','5','0','752','756','55','1','2','1','757','59',''),
('9114','sql','153','58','T2','c','6','0','758','759','57','0','1','0','757','100',''),
('9115','sql','153','59','base','f','5','0','762','765','55','1','3','1','766','100',''),
('9116','sql','153','60','b1','c','6','0','767','768','59','0','1','0','766','100',''),
('9117','sql','153','61','contrainte','f','3','0','783','792','53','1','2','3','793','100',''),
('9118','sql','153','62','egal','f','4','0','794','797','61','2','1','2','798','100',''),
('9119','sql','153','63','champ','f','5','0','799','803','62','2','1','1','804','66',''),
('9120','sql','153','64','T2','c','6','0','805','806','63','0','1','0','804','65',''),
('9121','sql','153','65','chi_id_acces','c','6','0','808','819','63','0','2','0','804','100',''),
('9122','sql','153','66','champ','f','5','0','822','826','62','2','2','1','827','100',''),
('9123','sql','153','67','T1','c','6','0','828','829','66','0','1','0','827','68',''),
('9124','sql','153','68','chx_acces_autorisation','c','6','0','831','852','66','0','2','0','827','100',''),
('9125','sql','153','69','jointure_gauche','f','2','0','872','886','36','2','4','4','887','100',''),
('9126','sql','153','70','source','f','3','0','898','903','69','1','1','3','904','77',''),
('9127','sql','153','71','nom_de_la_table','f','4','0','905','919','70','3','1','2','920','100',''),
('9128','sql','153','72','tbl_sources','c','5','0','921','931','71','0','1','0','920','73',''),
('9129','sql','153','73','alias','f','5','0','933','937','71','1','2','1','938','75',''),
('9130','sql','153','74','T3','c','6','0','939','940','73','0','1','0','938','100',''),
('9131','sql','153','75','base','f','5','0','943','946','71','1','3','1','947','100',''),
('9132','sql','153','76','b1','c','6','0','948','949','75','0','1','0','947','100',''),
('9133','sql','153','77','contrainte','f','3','0','964','973','69','1','2','3','974','100',''),
('9134','sql','153','78','egal','f','4','0','975','978','77','2','1','2','979','100',''),
('9135','sql','153','79','champ','f','5','0','980','984','78','2','1','1','985','82',''),
('9136','sql','153','80','T3','c','6','0','986','987','79','0','1','0','985','81',''),
('9137','sql','153','81','chi_id_source','c','6','0','989','1001','79','0','2','0','985','100',''),
('9138','sql','153','82','champ','f','5','0','1004','1008','78','2','2','1','1009','100',''),
('9139','sql','153','83','T1','c','6','0','1010','1011','82','0','1','0','1009','84',''),
('9140','sql','153','84','chx_source_autorisation','c','6','0','1013','1035','82','0','2','0','1009','100',''),
('9141','sql','153','85','conditions','f','1','0','1057','1066','1','1','3','4','1067','100',''),
('9142','sql','153','86','et','f','2','0','1075','1076','85','3','1','3','1077','100',''),
('9143','sql','153','87','#','f','3','0','1088','1088','86','0','1','0','1089','88',''),
('9144','sql','153','88','egal','f','3','0','1102','1105','86','2','2','2','1106','93',''),
('9145','sql','153','89','champ','f','4','0','1107','1111','88','2','1','1','1112','92',''),
('9146','sql','153','90','T2','c','5','2','1114','1115','89','0','1','0','1112','91',''),
('9147','sql','153','91','chi_id_acces','c','5','2','1119','1130','89','0','2','0','1112','100',''),
('9148','sql','153','92',':T2_chi_id_acces','c','4','0','1134','1149','88','0','2','0','1112','100',''),
('9149','sql','153','93','egal','f','3','0','1162','1165','86','2','3','2','1166','100',''),
('9150','sql','153','94','champ','f','4','0','1167','1171','93','2','1','1','1172','97',''),
('9151','sql','153','95','T1','c','5','0','1173','1174','94','0','1','0','1172','96',''),
('9152','sql','153','96','chi_id_autorisation','c','5','0','1176','1194','94','0','2','0','1172','100',''),
('9153','sql','153','97','champ','f','4','0','1197','1201','93','2','2','1','1202','100',''),
('9154','sql','153','98','T0','c','5','0','1203','1204','97','0','1','0','1202','99',''),
('9155','sql','153','99','chx_autorisation_menu','c','5','0','1206','1226','97','0','2','0','1202','100',''),
('9156','sql','152','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9157','sql','152','1','sélectionner','f','0','0','0','11','0','4','1','6','12','65',''),
('9158','sql','152','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('9159','sql','152','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9160','sql','152','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('9161','sql','152','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','65',''),
('9162','sql','152','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('9163','sql','152','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('9164','sql','152','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','65',''),
('9165','sql','152','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('9166','sql','152','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('9167','sql','152','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','65',''),
('9168','sql','152','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('9169','sql','152','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('9170','sql','152','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','65',''),
('9171','sql','152','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('9172','sql','152','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('9173','sql','152','17','chp_nom_source','c','3','2','228','241','15','0','2','0','221','65',''),
('9174','sql','152','18','champ','f','2','0','252','256','2','2','6','1','257','21',''),
('9175','sql','152','19','T1','c','3','2','259','260','18','0','1','0','257','20',''),
('9176','sql','152','20','cht_condition_rev_source','c','3','2','264','287','18','0','2','0','257','65',''),
('9177','sql','152','21','champ','f','2','0','298','302','2','2','7','1','303','24',''),
('9178','sql','152','22','T1','c','3','2','305','306','21','0','1','0','303','23',''),
('9179','sql','152','23','cht_condition_js_source','c','3','2','310','332','21','0','2','0','303','65',''),
('9180','sql','152','24','champ','f','2','0','343','347','2','2','8','1','348','65',''),
('9181','sql','152','25','T1','c','3','2','350','351','24','0','1','0','348','26',''),
('9182','sql','152','26','cht_notification_ko_source','c','3','2','355','380','24','0','2','0','348','65',''),
('9183','sql','152','27','provenance','f','1','0','393','402','1','2','2','5','403','52',''),
('9184','sql','152','28','table_reference','f','2','0','411','425','27','1','1','4','426','36',''),
('9185','sql','152','29','source','f','3','0','437','442','28','1','1','3','443','65',''),
('9186','sql','152','30','nom_de_la_table','f','4','0','444','458','29','3','1','2','459','65',''),
('9187','sql','152','31','tbl_autorisations','c','5','0','460','476','30','0','1','0','459','32',''),
('9188','sql','152','32','alias','f','5','0','478','482','30','1','2','1','483','34',''),
('9189','sql','152','33','T0','c','6','0','484','485','32','0','1','0','483','65',''),
('9190','sql','152','34','base','f','5','0','488','491','30','1','3','1','492','65',''),
('9191','sql','152','35','b1','c','6','0','493','494','34','0','1','0','492','65',''),
('9192','sql','152','36','jointure_gauche','f','2','0','514','528','27','2','2','4','529','65',''),
('9193','sql','152','37','source','f','3','0','540','545','36','1','1','3','546','44',''),
('9194','sql','152','38','nom_de_la_table','f','4','0','547','561','37','3','1','2','562','65',''),
('9195','sql','152','39','tbl_sources','c','5','0','563','573','38','0','1','0','562','40',''),
('9196','sql','152','40','alias','f','5','0','575','579','38','1','2','1','580','42',''),
('9197','sql','152','41','T1','c','6','0','581','582','40','0','1','0','580','65',''),
('9198','sql','152','42','base','f','5','0','585','588','38','1','3','1','589','65',''),
('9199','sql','152','43','b1','c','6','0','590','591','42','0','1','0','589','65',''),
('9200','sql','152','44','contrainte','f','3','0','606','615','36','1','2','3','616','65',''),
('9201','sql','152','45','egal','f','4','0','617','620','44','2','1','2','621','65',''),
('9202','sql','152','46','champ','f','5','0','622','626','45','2','1','1','627','49',''),
('9203','sql','152','47','T1','c','6','0','628','629','46','0','1','0','627','48',''),
('9204','sql','152','48','chi_id_source','c','6','0','631','643','46','0','2','0','627','65',''),
('9205','sql','152','49','champ','f','5','0','646','650','45','2','2','1','651','65',''),
('9206','sql','152','50','T0','c','6','0','652','653','49','0','1','0','651','51',''),
('9207','sql','152','51','chx_source_autorisation','c','6','0','655','677','49','0','2','0','651','65',''),
('9208','sql','152','52','conditions','f','1','0','699','708','1','1','3','3','709','58',''),
('9209','sql','152','53','supegal','f','2','0','710','716','52','2','1','2','717','65',''),
('9210','sql','152','54','champ','f','3','0','718','722','53','2','1','1','723','57',''),
('9211','sql','152','55','T0','c','4','2','725','726','54','0','1','0','723','56',''),
('9212','sql','152','56','chx_acces_autorisation','c','4','2','730','751','54','0','2','0','723','65',''),
('9213','sql','152','57','1','c','3','0','755','755','53','0','2','0','723','65',''),
('9214','sql','152','58','complements','f','1','0','763','773','1','1','4','4','774','65',''),
('9215','sql','152','59','trier_par','f','2','0','782','790','58','1','1','3','791','65',''),
('9216','sql','152','60','','f','3','0','782','790','59','2','1','2','792','65',''),
('9217','sql','152','61','champ','f','4','0','793','797','60','2','1','1','798','64',''),
('9218','sql','152','62','T0','c','5','2','800','801','61','0','1','0','798','63',''),
('9219','sql','152','63','chx_acces_autorisation','c','5','2','805','826','61','0','2','0','798','65',''),
('9220','sql','152','64','croissant','f','4','0','830','838','60','0','2','0','839','65',''),
('9221','sql','151','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9222','sql','151','1','sélectionner','f','0','0','0','11','0','4','1','6','12','23',''),
('9223','sql','151','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('9224','sql','151','3','1','c','2','0','35','35','2','0','1','0','34','23',''),
('9225','sql','151','4','valeurs','f','1','0','42','48','1','1','2','2','49','8',''),
('9226','sql','151','5','champ','f','2','0','50','54','4','2','1','1','55','23',''),
('9227','sql','151','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('9228','sql','151','7','chp_nom_source','c','3','2','62','75','5','0','2','0','55','23',''),
('9229','sql','151','8','provenance','f','1','0','84','93','1','1','3','5','94','17',''),
('9230','sql','151','9','table_reference','f','2','0','102','116','8','1','1','4','117','23',''),
('9231','sql','151','10','source','f','3','0','128','133','9','1','1','3','134','23',''),
('9232','sql','151','11','nom_de_la_table','f','4','0','135','149','10','3','1','2','150','23',''),
('9233','sql','151','12','tbl_sources','c','5','0','151','161','11','0','1','0','150','13',''),
('9234','sql','151','13','alias','f','5','0','163','167','11','1','2','1','168','15',''),
('9235','sql','151','14','T0','c','6','0','169','170','13','0','1','0','168','23',''),
('9236','sql','151','15','base','f','5','0','173','176','11','1','3','1','177','23',''),
('9237','sql','151','16','b1','c','6','0','178','179','15','0','1','0','177','23',''),
('9238','sql','151','17','conditions','f','1','0','201','210','1','1','4','3','211','23',''),
('9239','sql','151','18','egal','f','2','0','212','215','17','2','1','2','216','23',''),
('9240','sql','151','19','champ','f','3','0','217','221','18','2','1','1','222','22',''),
('9241','sql','151','20','T0','c','4','2','224','225','19','0','1','0','222','21',''),
('9242','sql','151','21','che_autorisation_globale_source','c','4','2','229','259','19','0','2','0','222','23',''),
('9243','sql','151','22','1','c','3','0','263','263','18','0','2','0','222','23',''),
('9244','sql','150','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9245','sql','150','1','modifier','f','0','0','0','7','0','4','1','6','8','21',''),
('9246','sql','150','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('9247','sql','150','3','1','c','2','0','31','31','2','0','1','0','30','21',''),
('9248','sql','150','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('9249','sql','150','5','affecte','f','2','0','46','52','4','2','1','2','53','21',''),
('9250','sql','150','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('9251','sql','150','7','chp_mot_de_passe_utilisateur','c','4','2','61','88','6','0','1','0','59','21',''),
('9252','sql','150','8',':n_chp_mot_de_passe_utilisateur','c','3','0','92','122','5','0','2','0','59','21',''),
('9253','sql','150','9','provenance','f','1','0','130','139','1','1','3','5','140','16',''),
('9254','sql','150','10','table_reference','f','2','0','148','162','9','1','1','4','163','21',''),
('9255','sql','150','11','source','f','3','0','174','179','10','1','1','3','180','21',''),
('9256','sql','150','12','nom_de_la_table','f','4','0','181','195','11','2','1','2','196','21',''),
('9257','sql','150','13','tbl_utilisateurs','c','5','0','197','212','12','0','1','0','196','14',''),
('9258','sql','150','14','base','f','5','0','214','217','12','1','2','1','218','21',''),
('9259','sql','150','15','b1','c','6','0','219','220','14','0','1','0','218','21',''),
('9260','sql','150','16','conditions','f','1','0','242','251','1','1','4','3','252','21',''),
('9261','sql','150','17','egal','f','2','0','253','256','16','2','1','2','257','21',''),
('9262','sql','150','18','champ','f','3','0','258','262','17','1','1','1','263','20',''),
('9263','sql','150','19','chi_id_utilisateur','c','4','2','265','282','18','0','1','0','263','21',''),
('9264','sql','150','20',':c_chi_id_utilisateur','c','3','0','286','306','17','0','2','0','263','21',''),
('9265','sql','149','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9266','sql','149','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('9267','sql','149','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('9268','sql','149','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('9269','sql','149','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('9270','sql','149','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('9271','sql','149','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('9272','sql','149','7','tbl_menus','c','5','0','105','113','6','0','1','0','104','8',''),
('9273','sql','149','8','base','f','5','0','115','118','6','1','2','1','119','15',''),
('9274','sql','149','9','b1','c','6','0','120','121','8','0','1','0','119','15',''),
('9275','sql','149','10','conditions','f','1','0','143','152','1','1','3','3','153','15',''),
('9276','sql','149','11','egal','f','2','0','154','157','10','2','1','2','158','15',''),
('9277','sql','149','12','champ','f','3','0','159','163','11','1','1','1','164','14',''),
('9278','sql','149','13','chi_id_menu','c','4','2','166','176','12','0','1','0','164','15',''),
('9279','sql','149','14',':chi_id_menu','c','3','0','180','191','11','0','2','0','164','15',''),
('9280','sql','148','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9281','sql','148','1','modifier','f','0','0','0','7','0','4','1','6','8','45',''),
('9282','sql','148','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('9283','sql','148','3','1','c','2','0','31','31','2','0','1','0','30','45',''),
('9284','sql','148','4','valeurs','f','1','0','38','44','1','7','2','3','45','33',''),
('9285','sql','148','5','affecte','f','2','0','53','59','4','2','1','2','60','9',''),
('9286','sql','148','6','champ','f','3','0','61','65','5','1','1','1','66','8',''),
('9287','sql','148','7','cht_libelle_menu','c','4','2','68','83','6','0','1','0','66','45',''),
('9288','sql','148','8',':n_cht_libelle_menu','c','3','0','87','105','5','0','2','0','66','45',''),
('9289','sql','148','9','affecte','f','2','0','115','121','4','2','2','2','122','13',''),
('9290','sql','148','10','champ','f','3','0','123','127','9','1','1','1','128','12',''),
('9291','sql','148','11','chp_titre_menu','c','4','2','130','143','10','0','1','0','128','45',''),
('9292','sql','148','12',':n_chp_titre_menu','c','3','0','147','163','9','0','2','0','128','45',''),
('9293','sql','148','13','affecte','f','2','0','173','179','4','2','3','2','180','17',''),
('9294','sql','148','14','champ','f','3','0','181','185','13','1','1','1','186','16',''),
('9295','sql','148','15','chx_autorisation_menu','c','4','2','188','208','14','0','1','0','186','45',''),
('9296','sql','148','16',':n_chx_autorisation_menu','c','3','0','212','235','13','0','2','0','186','45',''),
('9297','sql','148','17','affecte','f','2','0','245','251','4','2','4','2','252','21',''),
('9298','sql','148','18','champ','f','3','0','253','257','17','1','1','1','258','20',''),
('9299','sql','148','19','chp_methode_menu','c','4','2','260','275','18','0','1','0','258','45',''),
('9300','sql','148','20',':n_chp_methode_menu','c','3','0','279','297','17','0','2','0','258','45',''),
('9301','sql','148','21','affecte','f','2','0','307','313','4','2','5','2','314','25',''),
('9302','sql','148','22','champ','f','3','0','315','319','21','1','1','1','320','24',''),
('9303','sql','148','23','cht_condition_menu','c','4','2','322','339','22','0','1','0','320','45',''),
('9304','sql','148','24',':n_cht_condition_menu','c','3','0','343','363','21','0','2','0','320','45',''),
('9305','sql','148','25','affecte','f','2','0','373','379','4','2','6','2','380','29',''),
('9306','sql','148','26','champ','f','3','0','381','385','25','1','1','1','386','28',''),
('9307','sql','148','27','cht_initialisation_menu','c','4','2','388','410','26','0','1','0','386','45',''),
('9308','sql','148','28',':n_cht_initialisation_menu','c','3','0','414','439','25','0','2','0','386','45',''),
('9309','sql','148','29','affecte','f','2','0','449','455','4','2','7','2','456','45',''),
('9310','sql','148','30','champ','f','3','0','457','461','29','1','1','1','462','32',''),
('9311','sql','148','31','cht_condition_js_menu','c','4','2','464','484','30','0','1','0','462','45',''),
('9312','sql','148','32',':n_cht_condition_js_menu','c','3','0','488','511','29','0','2','0','462','45',''),
('9313','sql','148','33','provenance','f','1','0','523','532','1','1','3','5','533','40',''),
('9314','sql','148','34','table_reference','f','2','0','541','555','33','1','1','4','556','45',''),
('9315','sql','148','35','source','f','3','0','567','572','34','1','1','3','573','45',''),
('9316','sql','148','36','nom_de_la_table','f','4','0','574','588','35','2','1','2','589','45',''),
('9317','sql','148','37','tbl_menus','c','5','0','590','598','36','0','1','0','589','38',''),
('9318','sql','148','38','base','f','5','0','600','603','36','1','2','1','604','45',''),
('9319','sql','148','39','b1','c','6','0','605','606','38','0','1','0','604','45',''),
('9320','sql','148','40','conditions','f','1','0','628','637','1','1','4','3','638','45',''),
('9321','sql','148','41','egal','f','2','0','639','642','40','2','1','2','643','45',''),
('9322','sql','148','42','champ','f','3','0','644','648','41','1','1','1','649','44',''),
('9323','sql','148','43','chi_id_menu','c','4','2','651','661','42','0','1','0','649','45',''),
('9324','sql','148','44',':c_chi_id_menu','c','3','0','665','678','41','0','2','0','649','45',''),
('9325','sql','147','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9326','sql','147','1','insérer','f','0','0','0','6','0','2','1','6','7','38',''),
('9327','sql','147','2','valeurs','f','1','0','12','18','1','7','1','3','19','31',''),
('9328','sql','147','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('9329','sql','147','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('9330','sql','147','5','chp_titre_menu','c','4','2','42','55','4','0','1','0','40','38',''),
('9331','sql','147','6',':chp_titre_menu','c','3','0','59','73','3','0','2','0','40','38',''),
('9332','sql','147','7','affecte','f','2','0','83','89','2','2','2','2','90','11',''),
('9333','sql','147','8','champ','f','3','0','91','95','7','1','1','1','96','10',''),
('9334','sql','147','9','chx_autorisation_menu','c','4','2','98','118','8','0','1','0','96','38',''),
('9335','sql','147','10',':chx_autorisation_menu','c','3','0','122','143','7','0','2','0','96','38',''),
('9336','sql','147','11','affecte','f','2','0','153','159','2','2','3','2','160','15',''),
('9337','sql','147','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('9338','sql','147','13','chp_methode_menu','c','4','2','168','183','12','0','1','0','166','38',''),
('9339','sql','147','14',':chp_methode_menu','c','3','0','187','203','11','0','2','0','166','38',''),
('9340','sql','147','15','affecte','f','2','0','213','219','2','2','4','2','220','19',''),
('9341','sql','147','16','champ','f','3','0','221','225','15','1','1','1','226','18',''),
('9342','sql','147','17','cht_libelle_menu','c','4','2','228','243','16','0','1','0','226','38',''),
('9343','sql','147','18',':cht_libelle_menu','c','3','0','247','263','15','0','2','0','226','38',''),
('9344','sql','147','19','affecte','f','2','0','273','279','2','2','5','2','280','23',''),
('9345','sql','147','20','champ','f','3','0','281','285','19','1','1','1','286','22',''),
('9346','sql','147','21','cht_condition_menu','c','4','2','288','305','20','0','1','0','286','38',''),
('9347','sql','147','22',':cht_condition_menu','c','3','0','309','327','19','0','2','0','286','38',''),
('9348','sql','147','23','affecte','f','2','0','337','343','2','2','6','2','344','27',''),
('9349','sql','147','24','champ','f','3','0','345','349','23','1','1','1','350','26',''),
('9350','sql','147','25','cht_initialisation_menu','c','4','2','352','374','24','0','1','0','350','38',''),
('9351','sql','147','26',':cht_initialisation_menu','c','3','0','378','401','23','0','2','0','350','38',''),
('9352','sql','147','27','affecte','f','2','0','411','417','2','2','7','2','418','38',''),
('9353','sql','147','28','champ','f','3','0','419','423','27','1','1','1','424','30',''),
('9354','sql','147','29','cht_condition_js_menu','c','4','2','426','446','28','0','1','0','424','38',''),
('9355','sql','147','30',':cht_condition_js_menu','c','3','0','450','471','27','0','2','0','424','38',''),
('9356','sql','147','31','provenance','f','1','0','483','492','1','1','2','5','493','38',''),
('9357','sql','147','32','table_reference','f','2','0','501','515','31','1','1','4','516','38',''),
('9358','sql','147','33','source','f','3','0','527','532','32','1','1','3','533','38',''),
('9359','sql','147','34','nom_de_la_table','f','4','0','534','548','33','2','1','2','549','38',''),
('9360','sql','147','35','tbl_menus','c','5','0','550','558','34','0','1','0','549','36',''),
('9361','sql','147','36','base','f','5','0','560','563','34','1','2','1','564','38',''),
('9362','sql','147','37','b1','c','6','0','565','566','36','0','1','0','564','38',''),
('9363','sql','146','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9364','sql','146','1','sélectionner','f','0','0','0','11','0','3','1','6','12','105',''),
('9365','sql','146','2','valeurs','f','1','0','17','23','1','13','1','2','24','42',''),
('9366','sql','146','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9367','sql','146','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('9368','sql','146','5','chi_id_menu','c','3','2','44','54','3','0','2','0','37','105',''),
('9369','sql','146','6','champ','f','2','0','65','69','2','2','2','1','70','9',''),
('9370','sql','146','7','T0','c','3','2','72','73','6','0','1','0','70','8',''),
('9371','sql','146','8','chp_titre_menu','c','3','2','77','90','6','0','2','0','70','105',''),
('9372','sql','146','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('9373','sql','146','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('9374','sql','146','11','chx_autorisation_menu','c','3','2','113','133','9','0','2','0','106','105',''),
('9375','sql','146','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('9376','sql','146','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('9377','sql','146','14','chp_methode_menu','c','3','2','156','171','12','0','2','0','149','105',''),
('9378','sql','146','15','champ','f','2','0','182','186','2','2','5','1','187','18',''),
('9379','sql','146','16','T0','c','3','2','189','190','15','0','1','0','187','17',''),
('9380','sql','146','17','cht_libelle_menu','c','3','2','194','209','15','0','2','0','187','105',''),
('9381','sql','146','18','champ','f','2','0','220','224','2','2','6','1','225','21',''),
('9382','sql','146','19','T0','c','3','2','227','228','18','0','1','0','225','20',''),
('9383','sql','146','20','cht_initialisation_menu','c','3','2','232','254','18','0','2','0','225','105',''),
('9384','sql','146','21','champ','f','2','0','265','269','2','2','7','1','270','24',''),
('9385','sql','146','22','T0','c','3','2','272','273','21','0','1','0','270','23',''),
('9386','sql','146','23','cht_condition_menu','c','3','2','277','294','21','0','2','0','270','105',''),
('9387','sql','146','24','champ','f','2','0','305','309','2','2','8','1','310','27',''),
('9388','sql','146','25','T1','c','3','2','312','313','24','0','1','0','310','26',''),
('9389','sql','146','26','chx_acces_autorisation','c','3','2','317','338','24','0','2','0','310','105',''),
('9390','sql','146','27','champ','f','2','0','349','353','2','2','9','1','354','30',''),
('9391','sql','146','28','T1','c','3','2','356','357','27','0','1','0','354','29',''),
('9392','sql','146','29','chx_source_autorisation','c','3','2','361','383','27','0','2','0','354','105',''),
('9393','sql','146','30','champ','f','2','0','394','398','2','2','10','1','399','33',''),
('9394','sql','146','31','T2','c','3','2','401','402','30','0','1','0','399','32',''),
('9395','sql','146','32','chp_nom_acces','c','3','2','406','418','30','0','2','0','399','105',''),
('9396','sql','146','33','champ','f','2','0','429','433','2','2','11','1','434','36',''),
('9397','sql','146','34','T3','c','3','2','436','437','33','0','1','0','434','35',''),
('9398','sql','146','35','chp_nom_source','c','3','2','441','454','33','0','2','0','434','105',''),
('9399','sql','146','36','champ','f','2','0','465','469','2','2','12','1','470','39',''),
('9400','sql','146','37','T3','c','3','2','472','473','36','0','1','0','470','38',''),
('9401','sql','146','38','che_binaire_source','c','3','2','477','494','36','0','2','0','470','105',''),
('9402','sql','146','39','champ','f','2','0','505','509','2','2','13','1','510','105',''),
('9403','sql','146','40','T0','c','3','2','512','513','39','0','1','0','510','41',''),
('9404','sql','146','41','cht_condition_js_menu','c','3','2','517','537','39','0','2','0','510','105',''),
('9405','sql','146','42','provenance','f','1','0','551','560','1','4','2','5','561','99',''),
('9406','sql','146','43','table_reference','f','2','0','569','583','42','1','1','4','584','51',''),
('9407','sql','146','44','source','f','3','0','595','600','43','1','1','3','601','105',''),
('9408','sql','146','45','nom_de_la_table','f','4','0','602','616','44','3','1','2','617','105',''),
('9409','sql','146','46','tbl_menus','c','5','0','618','626','45','0','1','0','617','47',''),
('9410','sql','146','47','alias','f','5','0','628','632','45','1','2','1','633','49',''),
('9411','sql','146','48','T0','c','6','0','634','635','47','0','1','0','633','105',''),
('9412','sql','146','49','base','f','5','0','638','641','45','1','3','1','642','105',''),
('9413','sql','146','50','b1','c','6','0','643','644','49','0','1','0','642','105',''),
('9414','sql','146','51','jointure_gauche','f','2','0','664','678','42','2','2','4','679','67',''),
('9415','sql','146','52','source','f','3','0','690','695','51','1','1','3','696','59',''),
('9416','sql','146','53','nom_de_la_table','f','4','0','697','711','52','3','1','2','712','105',''),
('9417','sql','146','54','tbl_autorisations','c','5','0','713','729','53','0','1','0','712','55',''),
('9418','sql','146','55','alias','f','5','0','731','735','53','1','2','1','736','57',''),
('9419','sql','146','56','T1','c','6','0','737','738','55','0','1','0','736','105',''),
('9420','sql','146','57','base','f','5','0','741','744','53','1','3','1','745','105',''),
('9421','sql','146','58','b1','c','6','0','746','747','57','0','1','0','745','105',''),
('9422','sql','146','59','contrainte','f','3','0','762','771','51','1','2','3','772','105',''),
('9423','sql','146','60','egal','f','4','0','773','776','59','2','1','2','777','105',''),
('9424','sql','146','61','champ','f','5','0','778','782','60','2','1','1','783','64',''),
('9425','sql','146','62','T1','c','6','0','784','785','61','0','1','0','783','63',''),
('9426','sql','146','63','chi_id_autorisation','c','6','0','787','805','61','0','2','0','783','105',''),
('9427','sql','146','64','champ','f','5','0','808','812','60','2','2','1','813','105',''),
('9428','sql','146','65','T0','c','6','0','814','815','64','0','1','0','813','66',''),
('9429','sql','146','66','chx_autorisation_menu','c','6','0','817','837','64','0','2','0','813','105',''),
('9430','sql','146','67','jointure_gauche','f','2','0','857','871','42','2','3','4','872','83',''),
('9431','sql','146','68','source','f','3','0','883','888','67','1','1','3','889','75',''),
('9432','sql','146','69','nom_de_la_table','f','4','0','890','904','68','3','1','2','905','105',''),
('9433','sql','146','70','tbl_acces','c','5','0','906','914','69','0','1','0','905','71',''),
('9434','sql','146','71','alias','f','5','0','916','920','69','1','2','1','921','73',''),
('9435','sql','146','72','T2','c','6','0','922','923','71','0','1','0','921','105',''),
('9436','sql','146','73','base','f','5','0','926','929','69','1','3','1','930','105',''),
('9437','sql','146','74','b1','c','6','0','931','932','73','0','1','0','930','105',''),
('9438','sql','146','75','contrainte','f','3','0','947','956','67','1','2','3','957','105',''),
('9439','sql','146','76','egal','f','4','0','958','961','75','2','1','2','962','105',''),
('9440','sql','146','77','champ','f','5','0','963','967','76','2','1','1','968','80',''),
('9441','sql','146','78','T2','c','6','0','969','970','77','0','1','0','968','79',''),
('9442','sql','146','79','chi_id_acces','c','6','0','972','983','77','0','2','0','968','105',''),
('9443','sql','146','80','champ','f','5','0','986','990','76','2','2','1','991','105',''),
('9444','sql','146','81','T1','c','6','0','992','993','80','0','1','0','991','82',''),
('9445','sql','146','82','chx_acces_autorisation','c','6','0','995','1016','80','0','2','0','991','105',''),
('9446','sql','146','83','jointure_gauche','f','2','0','1036','1050','42','2','4','4','1051','105',''),
('9447','sql','146','84','source','f','3','0','1062','1067','83','1','1','3','1068','91',''),
('9448','sql','146','85','nom_de_la_table','f','4','0','1069','1083','84','3','1','2','1084','105',''),
('9449','sql','146','86','tbl_sources','c','5','0','1085','1095','85','0','1','0','1084','87',''),
('9450','sql','146','87','alias','f','5','0','1097','1101','85','1','2','1','1102','89',''),
('9451','sql','146','88','T3','c','6','0','1103','1104','87','0','1','0','1102','105',''),
('9452','sql','146','89','base','f','5','0','1107','1110','85','1','3','1','1111','105',''),
('9453','sql','146','90','b1','c','6','0','1112','1113','89','0','1','0','1111','105',''),
('9454','sql','146','91','contrainte','f','3','0','1128','1137','83','1','2','3','1138','105',''),
('9455','sql','146','92','egal','f','4','0','1139','1142','91','2','1','2','1143','105',''),
('9456','sql','146','93','champ','f','5','0','1144','1148','92','2','1','1','1149','96',''),
('9457','sql','146','94','T3','c','6','0','1150','1151','93','0','1','0','1149','95',''),
('9458','sql','146','95','chi_id_source','c','6','0','1153','1165','93','0','2','0','1149','105',''),
('9459','sql','146','96','champ','f','5','0','1168','1172','92','2','2','1','1173','105',''),
('9460','sql','146','97','T1','c','6','0','1174','1175','96','0','1','0','1173','98',''),
('9461','sql','146','98','chx_source_autorisation','c','6','0','1177','1199','96','0','2','0','1173','105',''),
('9462','sql','146','99','conditions','f','1','0','1221','1230','1','1','3','3','1231','105',''),
('9463','sql','146','100','egal','f','2','0','1232','1235','99','2','1','2','1236','105',''),
('9464','sql','146','101','champ','f','3','0','1237','1241','100','2','1','1','1242','104',''),
('9465','sql','146','102','T0','c','4','2','1244','1245','101','0','1','0','1242','103',''),
('9466','sql','146','103','chi_id_menu','c','4','2','1249','1259','101','0','2','0','1242','105',''),
('9467','sql','146','104',':T0_chi_id_menu','c','3','0','1263','1277','100','0','2','0','1242','105',''),
('9468','sql','145','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9469','sql','145','1','sélectionner','f','0','0','0','11','0','4','1','6','12','144',''),
('9470','sql','145','2','valeurs','f','1','0','17','23','1','10','1','2','24','33',''),
('9471','sql','145','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9472','sql','145','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('9473','sql','145','5','chi_id_menu','c','3','2','44','54','3','0','2','0','37','144',''),
('9474','sql','145','6','champ','f','2','0','65','69','2','2','2','1','70','9',''),
('9475','sql','145','7','T0','c','3','2','72','73','6','0','1','0','70','8',''),
('9476','sql','145','8','chp_titre_menu','c','3','2','77','90','6','0','2','0','70','144',''),
('9477','sql','145','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('9478','sql','145','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('9479','sql','145','11','chx_autorisation_menu','c','3','2','113','133','9','0','2','0','106','144',''),
('9480','sql','145','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('9481','sql','145','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('9482','sql','145','14','chp_methode_menu','c','3','2','156','171','12','0','2','0','149','144',''),
('9483','sql','145','15','champ','f','2','0','182','186','2','2','5','1','187','18',''),
('9484','sql','145','16','T0','c','3','2','189','190','15','0','1','0','187','17',''),
('9485','sql','145','17','cht_libelle_menu','c','3','2','194','209','15','0','2','0','187','144',''),
('9486','sql','145','18','champ','f','2','0','220','224','2','2','6','1','225','21',''),
('9487','sql','145','19','T0','c','3','2','227','228','18','0','1','0','225','20',''),
('9488','sql','145','20','cht_condition_menu','c','3','2','232','249','18','0','2','0','225','144',''),
('9489','sql','145','21','champ','f','2','0','260','264','2','2','7','1','265','24',''),
('9490','sql','145','22','T1','c','3','2','267','268','21','0','1','0','265','23',''),
('9491','sql','145','23','chx_acces_autorisation','c','3','2','272','293','21','0','2','0','265','144',''),
('9492','sql','145','24','champ','f','2','0','304','308','2','2','8','1','309','27',''),
('9493','sql','145','25','T1','c','3','2','311','312','24','0','1','0','309','26',''),
('9494','sql','145','26','chx_source_autorisation','c','3','2','316','338','24','0','2','0','309','144',''),
('9495','sql','145','27','champ','f','2','0','349','353','2','2','9','1','354','30',''),
('9496','sql','145','28','T2','c','3','2','356','357','27','0','1','0','354','29',''),
('9497','sql','145','29','chp_nom_acces','c','3','2','361','373','27','0','2','0','354','144',''),
('9498','sql','145','30','champ','f','2','0','384','388','2','2','10','1','389','144',''),
('9499','sql','145','31','T3','c','3','2','391','392','30','0','1','0','389','32',''),
('9500','sql','145','32','chp_nom_source','c','3','2','396','409','30','0','2','0','389','144',''),
('9501','sql','145','33','provenance','f','1','0','422','431','1','4','2','5','432','90',''),
('9502','sql','145','34','table_reference','f','2','0','440','454','33','1','1','4','455','42',''),
('9503','sql','145','35','source','f','3','0','466','471','34','1','1','3','472','144',''),
('9504','sql','145','36','nom_de_la_table','f','4','0','473','487','35','3','1','2','488','144',''),
('9505','sql','145','37','tbl_menus','c','5','0','489','497','36','0','1','0','488','38',''),
('9506','sql','145','38','alias','f','5','0','499','503','36','1','2','1','504','40',''),
('9507','sql','145','39','T0','c','6','0','505','506','38','0','1','0','504','144',''),
('9508','sql','145','40','base','f','5','0','509','512','36','1','3','1','513','144',''),
('9509','sql','145','41','b1','c','6','0','514','515','40','0','1','0','513','144',''),
('9510','sql','145','42','jointure_gauche','f','2','0','535','549','33','2','2','4','550','58',''),
('9511','sql','145','43','source','f','3','0','561','566','42','1','1','3','567','50',''),
('9512','sql','145','44','nom_de_la_table','f','4','0','568','582','43','3','1','2','583','144',''),
('9513','sql','145','45','tbl_autorisations','c','5','0','584','600','44','0','1','0','583','46',''),
('9514','sql','145','46','alias','f','5','0','602','606','44','1','2','1','607','48',''),
('9515','sql','145','47','T1','c','6','0','608','609','46','0','1','0','607','144',''),
('9516','sql','145','48','base','f','5','0','612','615','44','1','3','1','616','144',''),
('9517','sql','145','49','b1','c','6','0','617','618','48','0','1','0','616','144',''),
('9518','sql','145','50','contrainte','f','3','0','633','642','42','1','2','3','643','144',''),
('9519','sql','145','51','egal','f','4','0','644','647','50','2','1','2','648','144',''),
('9520','sql','145','52','champ','f','5','0','649','653','51','2','1','1','654','55',''),
('9521','sql','145','53','T1','c','6','0','655','656','52','0','1','0','654','54',''),
('9522','sql','145','54','chi_id_autorisation','c','6','0','658','676','52','0','2','0','654','144',''),
('9523','sql','145','55','champ','f','5','0','679','683','51','2','2','1','684','144',''),
('9524','sql','145','56','T0','c','6','0','685','686','55','0','1','0','684','57',''),
('9525','sql','145','57','chx_autorisation_menu','c','6','0','688','708','55','0','2','0','684','144',''),
('9526','sql','145','58','jointure_gauche','f','2','0','728','742','33','2','3','4','743','74',''),
('9527','sql','145','59','source','f','3','0','754','759','58','1','1','3','760','66',''),
('9528','sql','145','60','nom_de_la_table','f','4','0','761','775','59','3','1','2','776','144',''),
('9529','sql','145','61','tbl_acces','c','5','0','777','785','60','0','1','0','776','62',''),
('9530','sql','145','62','alias','f','5','0','787','791','60','1','2','1','792','64',''),
('9531','sql','145','63','T2','c','6','0','793','794','62','0','1','0','792','144',''),
('9532','sql','145','64','base','f','5','0','797','800','60','1','3','1','801','144',''),
('9533','sql','145','65','b1','c','6','0','802','803','64','0','1','0','801','144',''),
('9534','sql','145','66','contrainte','f','3','0','818','827','58','1','2','3','828','144',''),
('9535','sql','145','67','egal','f','4','0','829','832','66','2','1','2','833','144',''),
('9536','sql','145','68','champ','f','5','0','834','838','67','2','1','1','839','71',''),
('9537','sql','145','69','T2','c','6','0','840','841','68','0','1','0','839','70',''),
('9538','sql','145','70','chi_id_acces','c','6','0','843','854','68','0','2','0','839','144',''),
('9539','sql','145','71','champ','f','5','0','857','861','67','2','2','1','862','144',''),
('9540','sql','145','72','T1','c','6','0','863','864','71','0','1','0','862','73',''),
('9541','sql','145','73','chx_acces_autorisation','c','6','0','866','887','71','0','2','0','862','144',''),
('9542','sql','145','74','jointure_gauche','f','2','0','907','921','33','2','4','4','922','144',''),
('9543','sql','145','75','source','f','3','0','933','938','74','1','1','3','939','82',''),
('9544','sql','145','76','nom_de_la_table','f','4','0','940','954','75','3','1','2','955','144',''),
('9545','sql','145','77','tbl_sources','c','5','0','956','966','76','0','1','0','955','78',''),
('9546','sql','145','78','alias','f','5','0','968','972','76','1','2','1','973','80',''),
('9547','sql','145','79','T3','c','6','0','974','975','78','0','1','0','973','144',''),
('9548','sql','145','80','base','f','5','0','978','981','76','1','3','1','982','144',''),
('9549','sql','145','81','b1','c','6','0','983','984','80','0','1','0','982','144',''),
('9550','sql','145','82','contrainte','f','3','0','999','1008','74','1','2','3','1009','144',''),
('9551','sql','145','83','egal','f','4','0','1010','1013','82','2','1','2','1014','144',''),
('9552','sql','145','84','champ','f','5','0','1015','1019','83','2','1','1','1020','87',''),
('9553','sql','145','85','T3','c','6','0','1021','1022','84','0','1','0','1020','86',''),
('9554','sql','145','86','chi_id_source','c','6','0','1024','1036','84','0','2','0','1020','144',''),
('9555','sql','145','87','champ','f','5','0','1039','1043','83','2','2','1','1044','144',''),
('9556','sql','145','88','T1','c','6','0','1045','1046','87','0','1','0','1044','89',''),
('9557','sql','145','89','chx_source_autorisation','c','6','0','1048','1070','87','0','2','0','1044','144',''),
('9558','sql','145','90','conditions','f','1','0','1092','1101','1','1','3','4','1102','132',''),
('9559','sql','145','91','et','f','2','0','1110','1111','90','8','1','3','1112','144',''),
('9560','sql','145','92','comme','f','3','0','1123','1127','91','2','1','2','1128','97',''),
('9561','sql','145','93','champ','f','4','0','1129','1133','92','2','1','1','1134','96',''),
('9562','sql','145','94','T3','c','5','2','1136','1137','93','0','1','0','1134','95',''),
('9563','sql','145','95','chp_nom_source','c','5','2','1141','1154','93','0','2','0','1134','144',''),
('9564','sql','145','96',':T3_chp_nom_source','c','4','0','1158','1175','92','0','2','0','1134','144',''),
('9565','sql','145','97','egal','f','3','0','1188','1191','91','2','2','2','1192','102',''),
('9566','sql','145','98','champ','f','4','0','1193','1197','97','2','1','1','1198','101',''),
('9567','sql','145','99','T0','c','5','2','1200','1201','98','0','1','0','1198','100',''),
('9568','sql','145','100','chi_id_menu','c','5','2','1205','1215','98','0','2','0','1198','144',''),
('9569','sql','145','101',':T0_chi_id_menu','c','4','0','1219','1233','97','0','2','0','1198','144',''),
('9570','sql','145','102','comme','f','3','0','1246','1250','91','2','3','2','1251','107',''),
('9571','sql','145','103','champ','f','4','0','1252','1256','102','2','1','1','1257','106',''),
('9572','sql','145','104','T0','c','5','2','1259','1260','103','0','1','0','1257','105',''),
('9573','sql','145','105','cht_libelle_menu','c','5','2','1264','1279','103','0','2','0','1257','144',''),
('9574','sql','145','106',':T0_cht_libelle_menu','c','4','0','1283','1302','102','0','2','0','1257','144',''),
('9575','sql','145','107','comme','f','3','0','1315','1319','91','2','4','2','1320','112',''),
('9576','sql','145','108','champ','f','4','0','1321','1325','107','2','1','1','1326','111',''),
('9577','sql','145','109','T0','c','5','2','1328','1329','108','0','1','0','1326','110',''),
('9578','sql','145','110','chp_titre_menu','c','5','2','1333','1346','108','0','2','0','1326','144',''),
('9579','sql','145','111',':T0_chp_titre_menu','c','4','0','1350','1367','107','0','2','0','1326','144',''),
('9580','sql','145','112','egal','f','3','0','1380','1383','91','2','5','2','1384','117',''),
('9581','sql','145','113','champ','f','4','0','1385','1389','112','2','1','1','1390','116',''),
('9582','sql','145','114','T0','c','5','2','1392','1393','113','0','1','0','1390','115',''),
('9583','sql','145','115','chx_autorisation_menu','c','5','2','1397','1417','113','0','2','0','1390','144',''),
('9584','sql','145','116',':T0_chx_autorisation_menu','c','4','0','1421','1445','112','0','2','0','1390','144',''),
('9585','sql','145','117','comme','f','3','0','1458','1462','91','2','6','2','1463','122',''),
('9586','sql','145','118','champ','f','4','0','1464','1468','117','2','1','1','1469','121',''),
('9587','sql','145','119','T0','c','5','2','1471','1472','118','0','1','0','1469','120',''),
('9588','sql','145','120','chp_methode_menu','c','5','2','1476','1491','118','0','2','0','1469','144',''),
('9589','sql','145','121',':T0_chp_methode_menu','c','4','0','1495','1514','117','0','2','0','1469','144',''),
('9590','sql','145','122','egal','f','3','0','1527','1530','91','2','7','2','1531','127',''),
('9591','sql','145','123','champ','f','4','0','1532','1536','122','2','1','1','1537','126',''),
('9592','sql','145','124','T1','c','5','2','1539','1540','123','0','1','0','1537','125',''),
('9593','sql','145','125','chx_acces_autorisation','c','5','2','1544','1565','123','0','2','0','1537','144',''),
('9594','sql','145','126',':T1_chx_acces_autorisation','c','4','0','1569','1594','122','0','2','0','1537','144',''),
('9595','sql','145','127','pas_dans','f','3','0','1607','1614','91','2','8','2','1615','144',''),
('9596','sql','145','128','champ','f','4','0','1616','1620','127','2','1','1','1621','131',''),
('9597','sql','145','129','T1','c','5','2','1623','1624','128','0','1','0','1621','130',''),
('9598','sql','145','130','chx_acces_autorisation','c','5','2','1628','1649','128','0','2','0','1621','144',''),
('9599','sql','145','131',':acces_pas_dans','c','4','0','1653','1667','127','0','2','0','1621','144',''),
('9600','sql','145','132','complements','f','1','0','1687','1697','1','2','4','4','1698','144',''),
('9601','sql','145','133','trier_par','f','2','0','1706','1714','132','1','1','3','1715','139',''),
('9602','sql','145','134','','f','3','0','1706','1714','133','2','1','2','1716','144',''),
('9603','sql','145','135','champ','f','4','0','1717','1721','134','2','1','1','1722','138',''),
('9604','sql','145','136','T0','c','5','2','1724','1725','135','0','1','0','1722','137',''),
('9605','sql','145','137','chi_id_menu','c','5','2','1729','1739','135','0','2','0','1722','144',''),
('9606','sql','145','138','décroissant','f','4','0','1743','1753','134','0','2','0','1754','144',''),
('9607','sql','145','139','limité_à','f','2','0','1766','1773','132','2','2','2','1774','144',''),
('9608','sql','145','140','quantité','f','3','0','1775','1782','139','1','1','1','1783','142',''),
('9609','sql','145','141',':quantitee','c','4','0','1784','1793','140','0','1','0','1783','144',''),
('9610','sql','145','142','début','f','3','0','1796','1800','139','1','2','1','1801','144',''),
('9611','sql','145','143',':debut','c','4','0','1802','1807','142','0','1','0','1801','144',''),
('9612','sql','144','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9613','sql','144','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('9614','sql','144','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('9615','sql','144','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('9616','sql','144','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('9617','sql','144','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('9618','sql','144','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('9619','sql','144','7','tbl_autorisations','c','5','0','105','121','6','0','1','0','104','8',''),
('9620','sql','144','8','base','f','5','0','123','126','6','1','2','1','127','15',''),
('9621','sql','144','9','b1','c','6','0','128','129','8','0','1','0','127','15',''),
('9622','sql','144','10','conditions','f','1','0','151','160','1','1','3','3','161','15',''),
('9623','sql','144','11','egal','f','2','0','162','165','10','2','1','2','166','15',''),
('9624','sql','144','12','champ','f','3','0','167','171','11','1','1','1','172','14',''),
('9625','sql','144','13','chi_id_autorisation','c','4','2','174','192','12','0','1','0','172','15',''),
('9626','sql','144','14',':chi_id_autorisation','c','3','0','196','215','11','0','2','0','172','15',''),
('9627','sql','143','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9628','sql','143','1','modifier','f','0','0','0','7','0','3','1','6','8','29',''),
('9629','sql','143','2','valeurs','f','1','0','13','19','1','3','1','3','20','15',''),
('9630','sql','143','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('9631','sql','143','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('9632','sql','143','5','chx_acces_autorisation','c','4','2','36','57','4','0','1','0','34','29',''),
('9633','sql','143','6',':n_chx_acces_autorisation','c','3','0','61','85','3','0','2','0','34','29',''),
('9634','sql','143','7','affecte','f','2','0','88','94','2','2','2','2','95','11',''),
('9635','sql','143','8','champ','f','3','0','96','100','7','1','1','1','101','10',''),
('9636','sql','143','9','chx_source_autorisation','c','4','2','103','125','8','0','1','0','101','29',''),
('9637','sql','143','10',':n_chx_source_autorisation','c','3','0','129','154','7','0','2','0','101','29',''),
('9638','sql','143','11','affecte','f','2','0','157','163','2','2','3','2','164','29',''),
('9639','sql','143','12','champ','f','3','0','165','169','11','1','1','1','170','14',''),
('9640','sql','143','13','che_pour_sous_liste_autorisation','c','4','2','172','203','12','0','1','0','170','29',''),
('9641','sql','143','14',':n_che_pour_sous_liste_autorisation','c','3','0','207','241','11','0','2','0','170','29',''),
('9642','sql','143','15','provenance','f','1','0','249','258','1','1','2','5','259','24',''),
('9643','sql','143','16','table_reference','f','2','0','267','281','15','1','1','4','282','29',''),
('9644','sql','143','17','source','f','3','0','293','298','16','1','1','3','299','29',''),
('9645','sql','143','18','nom_de_la_table','f','4','0','300','314','17','3','1','2','315','29',''),
('9646','sql','143','19','tbl_autorisations','c','5','0','316','332','18','0','1','0','315','20',''),
('9647','sql','143','20','alias','f','5','0','334','338','18','1','2','1','339','22',''),
('9648','sql','143','21','T0','c','6','0','340','341','20','0','1','0','339','29',''),
('9649','sql','143','22','base','f','5','0','344','347','18','1','3','1','348','29',''),
('9650','sql','143','23','b1','c','6','0','349','350','22','0','1','0','348','29',''),
('9651','sql','143','24','conditions','f','1','0','372','381','1','1','3','3','382','29',''),
('9652','sql','143','25','egal','f','2','0','383','386','24','2','1','2','387','29',''),
('9653','sql','143','26','champ','f','3','0','388','392','25','1','1','1','393','28',''),
('9654','sql','143','27','chi_id_autorisation','c','4','2','395','413','26','0','1','0','393','29',''),
('9655','sql','143','28',':c_chi_id_autorisation','c','3','0','417','438','25','0','2','0','393','29',''),
('9656','sql','142','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9657','sql','142','1','insérer','f','0','0','0','6','0','2','1','6','7','22',''),
('9658','sql','142','2','valeurs','f','1','0','12','18','1','3','1','3','19','15',''),
('9659','sql','142','3','affecte','f','2','0','20','26','2','2','1','2','27','7',''),
('9660','sql','142','4','champ','f','3','0','28','32','3','1','1','1','33','6',''),
('9661','sql','142','5','chx_acces_autorisation','c','4','2','35','56','4','0','1','0','33','22',''),
('9662','sql','142','6',':chx_acces_autorisation','c','3','0','60','82','3','0','2','0','33','22',''),
('9663','sql','142','7','affecte','f','2','0','85','91','2','2','2','2','92','11',''),
('9664','sql','142','8','champ','f','3','0','93','97','7','1','1','1','98','10',''),
('9665','sql','142','9','chx_source_autorisation','c','4','2','100','122','8','0','1','0','98','22',''),
('9666','sql','142','10',':chx_source_autorisation','c','3','0','126','149','7','0','2','0','98','22',''),
('9667','sql','142','11','affecte','f','2','0','152','158','2','2','3','2','159','22',''),
('9668','sql','142','12','champ','f','3','0','160','164','11','1','1','1','165','14',''),
('9669','sql','142','13','che_pour_sous_liste_autorisation','c','4','2','167','198','12','0','1','0','165','22',''),
('9670','sql','142','14',':che_pour_sous_liste_autorisation','c','3','0','202','234','11','0','2','0','165','22',''),
('9671','sql','142','15','provenance','f','1','0','242','251','1','1','2','5','252','22',''),
('9672','sql','142','16','table_reference','f','2','0','260','274','15','1','1','4','275','22',''),
('9673','sql','142','17','source','f','3','0','286','291','16','1','1','3','292','22',''),
('9674','sql','142','18','nom_de_la_table','f','4','0','293','307','17','2','1','2','308','22',''),
('9675','sql','142','19','tbl_autorisations','c','5','0','309','325','18','0','1','0','308','20',''),
('9676','sql','142','20','base','f','5','0','327','330','18','1','2','1','331','22',''),
('9677','sql','142','21','b1','c','6','0','332','333','20','0','1','0','331','22',''),
('9678','sql','141','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9679','sql','141','1','sélectionner','f','0','0','0','11','0','3','1','6','12','74',''),
('9680','sql','141','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('9681','sql','141','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9682','sql','141','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('9683','sql','141','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','74',''),
('9684','sql','141','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('9685','sql','141','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('9686','sql','141','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','74',''),
('9687','sql','141','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('9688','sql','141','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('9689','sql','141','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','74',''),
('9690','sql','141','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('9691','sql','141','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('9692','sql','141','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','74',''),
('9693','sql','141','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('9694','sql','141','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('9695','sql','141','17','chp_nom_acces','c','3','2','228','240','15','0','2','0','221','74',''),
('9696','sql','141','18','champ','f','2','0','251','255','2','2','6','1','256','21',''),
('9697','sql','141','19','T2','c','3','2','258','259','18','0','1','0','256','20',''),
('9698','sql','141','20','chp_nom_source','c','3','2','263','276','18','0','2','0','256','74',''),
('9699','sql','141','21','champ','f','2','0','287','291','2','2','7','1','292','24',''),
('9700','sql','141','22','T2','c','3','2','294','295','21','0','1','0','292','23',''),
('9701','sql','141','23','che_binaire_source','c','3','2','299','316','21','0','2','0','292','74',''),
('9702','sql','141','24','champ','f','2','0','327','331','2','2','8','1','332','74',''),
('9703','sql','141','25','T2','c','3','2','334','335','24','0','1','0','332','26',''),
('9704','sql','141','26','chx_dossier_id_source','c','3','2','339','359','24','0','2','0','332','74',''),
('9705','sql','141','27','provenance','f','1','0','372','381','1','3','2','5','382','68',''),
('9706','sql','141','28','table_reference','f','2','0','390','404','27','1','1','4','405','36',''),
('9707','sql','141','29','source','f','3','0','416','421','28','1','1','3','422','74',''),
('9708','sql','141','30','nom_de_la_table','f','4','0','423','437','29','3','1','2','438','74',''),
('9709','sql','141','31','tbl_autorisations','c','5','0','439','455','30','0','1','0','438','32',''),
('9710','sql','141','32','alias','f','5','0','457','461','30','1','2','1','462','34',''),
('9711','sql','141','33','T0','c','6','0','463','464','32','0','1','0','462','74',''),
('9712','sql','141','34','base','f','5','0','467','470','30','1','3','1','471','74',''),
('9713','sql','141','35','b1','c','6','0','472','473','34','0','1','0','471','74',''),
('9714','sql','141','36','jointure_gauche','f','2','0','493','507','27','2','2','4','508','52',''),
('9715','sql','141','37','source','f','3','0','519','524','36','1','1','3','525','44',''),
('9716','sql','141','38','nom_de_la_table','f','4','0','526','540','37','3','1','2','541','74',''),
('9717','sql','141','39','tbl_acces','c','5','0','542','550','38','0','1','0','541','40',''),
('9718','sql','141','40','alias','f','5','0','552','556','38','1','2','1','557','42',''),
('9719','sql','141','41','T1','c','6','0','558','559','40','0','1','0','557','74',''),
('9720','sql','141','42','base','f','5','0','562','565','38','1','3','1','566','74',''),
('9721','sql','141','43','b1','c','6','0','567','568','42','0','1','0','566','74',''),
('9722','sql','141','44','contrainte','f','3','0','583','592','36','1','2','3','593','74',''),
('9723','sql','141','45','egal','f','4','0','594','597','44','2','1','2','598','74',''),
('9724','sql','141','46','champ','f','5','0','599','603','45','2','1','1','604','49',''),
('9725','sql','141','47','T1','c','6','0','605','606','46','0','1','0','604','48',''),
('9726','sql','141','48','chi_id_acces','c','6','0','608','619','46','0','2','0','604','74',''),
('9727','sql','141','49','champ','f','5','0','622','626','45','2','2','1','627','74',''),
('9728','sql','141','50','T0','c','6','0','628','629','49','0','1','0','627','51',''),
('9729','sql','141','51','chx_acces_autorisation','c','6','0','631','652','49','0','2','0','627','74',''),
('9730','sql','141','52','jointure_gauche','f','2','0','672','686','27','2','3','4','687','74',''),
('9731','sql','141','53','source','f','3','0','698','703','52','1','1','3','704','60',''),
('9732','sql','141','54','nom_de_la_table','f','4','0','705','719','53','3','1','2','720','74',''),
('9733','sql','141','55','tbl_sources','c','5','0','721','731','54','0','1','0','720','56',''),
('9734','sql','141','56','alias','f','5','0','733','737','54','1','2','1','738','58',''),
('9735','sql','141','57','T2','c','6','0','739','740','56','0','1','0','738','74',''),
('9736','sql','141','58','base','f','5','0','743','746','54','1','3','1','747','74',''),
('9737','sql','141','59','b1','c','6','0','748','749','58','0','1','0','747','74',''),
('9738','sql','141','60','contrainte','f','3','0','764','773','52','1','2','3','774','74',''),
('9739','sql','141','61','egal','f','4','0','775','778','60','2','1','2','779','74',''),
('9740','sql','141','62','champ','f','5','0','780','784','61','2','1','1','785','65',''),
('9741','sql','141','63','T2','c','6','0','786','787','62','0','1','0','785','64',''),
('9742','sql','141','64','chi_id_source','c','6','0','789','801','62','0','2','0','785','74',''),
('9743','sql','141','65','champ','f','5','0','804','808','61','2','2','1','809','74',''),
('9744','sql','141','66','T0','c','6','0','810','811','65','0','1','0','809','67',''),
('9745','sql','141','67','chx_source_autorisation','c','6','0','813','835','65','0','2','0','809','74',''),
('9746','sql','141','68','conditions','f','1','0','857','866','1','1','3','3','867','74',''),
('9747','sql','141','69','egal','f','2','0','868','871','68','2','1','2','872','74',''),
('9748','sql','141','70','champ','f','3','0','873','877','69','2','1','1','878','73',''),
('9749','sql','141','71','T0','c','4','2','880','881','70','0','1','0','878','72',''),
('9750','sql','141','72','chi_id_autorisation','c','4','2','885','903','70','0','2','0','878','74',''),
('9751','sql','141','73',':T0_chi_id_autorisation','c','3','0','907','929','69','0','2','0','878','74',''),
('9752','sql','140','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9753','sql','140','1','sélectionner','f','0','0','0','11','0','4','1','6','12','129',''),
('9754','sql','140','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('9755','sql','140','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9756','sql','140','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('9757','sql','140','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','129',''),
('9758','sql','140','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('9759','sql','140','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('9760','sql','140','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','129',''),
('9761','sql','140','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('9762','sql','140','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('9763','sql','140','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','129',''),
('9764','sql','140','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('9765','sql','140','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('9766','sql','140','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','129',''),
('9767','sql','140','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('9768','sql','140','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('9769','sql','140','17','chp_nom_acces','c','3','2','228','240','15','0','2','0','221','129',''),
('9770','sql','140','18','champ','f','2','0','251','255','2','2','6','1','256','21',''),
('9771','sql','140','19','T2','c','3','2','258','259','18','0','1','0','256','20',''),
('9772','sql','140','20','chp_nom_source','c','3','2','263','276','18','0','2','0','256','129',''),
('9773','sql','140','21','champ','f','2','0','287','291','2','2','7','1','292','129',''),
('9774','sql','140','22','T2','c','3','2','294','295','21','0','1','0','292','23',''),
('9775','sql','140','23','chx_dossier_id_source','c','3','2','299','319','21','0','2','0','292','129',''),
('9776','sql','140','24','provenance','f','1','0','332','341','1','3','2','5','342','65',''),
('9777','sql','140','25','table_reference','f','2','0','350','364','24','1','1','4','365','33',''),
('9778','sql','140','26','source','f','3','0','376','381','25','1','1','3','382','129',''),
('9779','sql','140','27','nom_de_la_table','f','4','0','383','397','26','3','1','2','398','129',''),
('9780','sql','140','28','tbl_autorisations','c','5','0','399','415','27','0','1','0','398','29',''),
('9781','sql','140','29','alias','f','5','0','417','421','27','1','2','1','422','31',''),
('9782','sql','140','30','T0','c','6','0','423','424','29','0','1','0','422','129',''),
('9783','sql','140','31','base','f','5','0','427','430','27','1','3','1','431','129','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 1000 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 2000 (2722) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('9784','sql','140','32','b1','c','6','0','432','433','31','0','1','0','431','129',''),
('9785','sql','140','33','jointure_gauche','f','2','0','453','467','24','2','2','4','468','49',''),
('9786','sql','140','34','source','f','3','0','479','484','33','1','1','3','485','41',''),
('9787','sql','140','35','nom_de_la_table','f','4','0','486','500','34','3','1','2','501','129',''),
('9788','sql','140','36','tbl_acces','c','5','0','502','510','35','0','1','0','501','37',''),
('9789','sql','140','37','alias','f','5','0','512','516','35','1','2','1','517','39',''),
('9790','sql','140','38','T1','c','6','0','518','519','37','0','1','0','517','129',''),
('9791','sql','140','39','base','f','5','0','522','525','35','1','3','1','526','129',''),
('9792','sql','140','40','b1','c','6','0','527','528','39','0','1','0','526','129',''),
('9793','sql','140','41','contrainte','f','3','0','543','552','33','1','2','3','553','129',''),
('9794','sql','140','42','egal','f','4','0','554','557','41','2','1','2','558','129',''),
('9795','sql','140','43','champ','f','5','0','559','563','42','2','1','1','564','46',''),
('9796','sql','140','44','T1','c','6','0','565','566','43','0','1','0','564','45',''),
('9797','sql','140','45','chi_id_acces','c','6','0','568','579','43','0','2','0','564','129',''),
('9798','sql','140','46','champ','f','5','0','582','586','42','2','2','1','587','129',''),
('9799','sql','140','47','T0','c','6','0','588','589','46','0','1','0','587','48',''),
('9800','sql','140','48','chx_acces_autorisation','c','6','0','591','612','46','0','2','0','587','129',''),
('9801','sql','140','49','jointure_gauche','f','2','0','632','646','24','2','3','4','647','129',''),
('9802','sql','140','50','source','f','3','0','658','663','49','1','1','3','664','57',''),
('9803','sql','140','51','nom_de_la_table','f','4','0','665','679','50','3','1','2','680','129',''),
('9804','sql','140','52','tbl_sources','c','5','0','681','691','51','0','1','0','680','53',''),
('9805','sql','140','53','alias','f','5','0','693','697','51','1','2','1','698','55',''),
('9806','sql','140','54','T2','c','6','0','699','700','53','0','1','0','698','129',''),
('9807','sql','140','55','base','f','5','0','703','706','51','1','3','1','707','129',''),
('9808','sql','140','56','b1','c','6','0','708','709','55','0','1','0','707','129',''),
('9809','sql','140','57','contrainte','f','3','0','724','733','49','1','2','3','734','129',''),
('9810','sql','140','58','egal','f','4','0','735','738','57','2','1','2','739','129',''),
('9811','sql','140','59','champ','f','5','0','740','744','58','2','1','1','745','62',''),
('9812','sql','140','60','T2','c','6','0','746','747','59','0','1','0','745','61',''),
('9813','sql','140','61','chi_id_source','c','6','0','749','761','59','0','2','0','745','129',''),
('9814','sql','140','62','champ','f','5','0','764','768','58','2','2','1','769','129',''),
('9815','sql','140','63','T0','c','6','0','770','771','62','0','1','0','769','64',''),
('9816','sql','140','64','chx_source_autorisation','c','6','0','773','795','62','0','2','0','769','129',''),
('9817','sql','140','65','conditions','f','1','0','817','826','1','1','3','4','827','102',''),
('9818','sql','140','66','et','f','2','0','835','836','65','7','1','3','837','129',''),
('9819','sql','140','67','comme','f','3','0','848','852','66','2','1','2','853','72',''),
('9820','sql','140','68','champ','f','4','0','854','858','67','2','1','1','859','71',''),
('9821','sql','140','69','T2','c','5','2','861','862','68','0','1','0','859','70',''),
('9822','sql','140','70','chp_nom_source','c','5','2','866','879','68','0','2','0','859','129',''),
('9823','sql','140','71',':T2_chp_nom_source','c','4','0','883','900','67','0','2','0','859','129',''),
('9824','sql','140','72','egal','f','3','0','913','916','66','2','2','2','917','77',''),
('9825','sql','140','73','champ','f','4','0','918','922','72','2','1','1','923','76',''),
('9826','sql','140','74','T0','c','5','2','925','926','73','0','1','0','923','75',''),
('9827','sql','140','75','chi_id_autorisation','c','5','2','930','948','73','0','2','0','923','129',''),
('9828','sql','140','76',':T0_chi_id_autorisation','c','4','0','952','974','72','0','2','0','923','129',''),
('9829','sql','140','77','egal','f','3','0','987','990','66','2','3','2','991','82',''),
('9830','sql','140','78','champ','f','4','0','992','996','77','2','1','1','997','81',''),
('9831','sql','140','79','T0','c','5','2','999','1000','78','0','1','0','997','80',''),
('9832','sql','140','80','chx_acces_autorisation','c','5','2','1004','1025','78','0','2','0','997','129',''),
('9833','sql','140','81',':T0_chx_acces_autorisation','c','4','0','1029','1054','77','0','2','0','997','129',''),
('9834','sql','140','82','egal','f','3','0','1067','1070','66','2','4','2','1071','87',''),
('9835','sql','140','83','champ','f','4','0','1072','1076','82','2','1','1','1077','86',''),
('9836','sql','140','84','T0','c','5','2','1079','1080','83','0','1','0','1077','85',''),
('9837','sql','140','85','chx_source_autorisation','c','5','2','1084','1106','83','0','2','0','1077','129',''),
('9838','sql','140','86',':T0_chx_source_autorisation','c','4','0','1110','1136','82','0','2','0','1077','129',''),
('9839','sql','140','87','comme','f','3','0','1149','1153','66','2','5','2','1154','92',''),
('9840','sql','140','88','champ','f','4','0','1155','1159','87','2','1','1','1160','91',''),
('9841','sql','140','89','T1','c','5','2','1162','1163','88','0','1','0','1160','90',''),
('9842','sql','140','90','chp_nom_acces','c','5','2','1167','1179','88','0','2','0','1160','129',''),
('9843','sql','140','91',':T1_chp_nom_acces','c','4','0','1183','1199','87','0','2','0','1160','129',''),
('9844','sql','140','92','egal','f','3','0','1212','1215','66','2','6','2','1216','97',''),
('9845','sql','140','93','champ','f','4','0','1217','1221','92','2','1','1','1222','96',''),
('9846','sql','140','94','T0','c','5','2','1224','1225','93','0','1','0','1222','95',''),
('9847','sql','140','95','che_pour_sous_liste_autorisation','c','5','2','1229','1260','93','0','2','0','1222','129',''),
('9848','sql','140','96',':T0_che_pour_sous_liste_autorisation','c','4','0','1264','1299','92','0','2','0','1222','129',''),
('9849','sql','140','97','pas_dans','f','3','0','1312','1319','66','2','7','2','1320','129',''),
('9850','sql','140','98','champ','f','4','0','1321','1325','97','2','1','1','1326','101',''),
('9851','sql','140','99','T0','c','5','2','1328','1329','98','0','1','0','1326','100',''),
('9852','sql','140','100','chx_acces_autorisation','c','5','2','1333','1354','98','0','2','0','1326','129',''),
('9853','sql','140','101',':acces_pas_dans','c','4','0','1358','1372','97','0','2','0','1326','129',''),
('9854','sql','140','102','complements','f','1','0','1392','1402','1','2','4','4','1403','129',''),
('9855','sql','140','103','trier_par','f','2','0','1411','1419','102','4','1','3','1420','124',''),
('9856','sql','140','104','','f','3','0','1411','1419','103','2','1','2','1421','109',''),
('9857','sql','140','105','champ','f','4','0','1422','1426','104','2','1','1','1427','108',''),
('9858','sql','140','106','T0','c','5','2','1429','1430','105','0','1','0','1427','107',''),
('9859','sql','140','107','chx_acces_autorisation','c','5','2','1434','1455','105','0','2','0','1427','129',''),
('9860','sql','140','108','décroissant','f','4','0','1459','1469','104','0','2','0','1470','129',''),
('9861','sql','140','109','','f','3','0','1459','1469','103','2','2','2','1474','114',''),
('9862','sql','140','110','champ','f','4','0','1475','1479','109','2','1','1','1480','113',''),
('9863','sql','140','111','T2','c','5','2','1482','1483','110','0','1','0','1480','112',''),
('9864','sql','140','112','chp_nom_source','c','5','2','1487','1500','110','0','2','0','1480','129',''),
('9865','sql','140','113','croissant','f','4','0','1504','1512','109','0','2','0','1513','129',''),
('9866','sql','140','114','','f','3','0','1504','1512','103','2','3','2','1517','119',''),
('9867','sql','140','115','champ','f','4','0','1518','1522','114','2','1','1','1523','118',''),
('9868','sql','140','116','T0','c','5','2','1525','1526','115','0','1','0','1523','117',''),
('9869','sql','140','117','chi_id_autorisation','c','5','2','1530','1548','115','0','2','0','1523','129',''),
('9870','sql','140','118','décroissant','f','4','0','1552','1562','114','0','2','0','1563','129',''),
('9871','sql','140','119','','f','3','0','1552','1562','103','2','4','2','1567','129',''),
('9872','sql','140','120','champ','f','4','0','1568','1572','119','2','1','1','1573','123',''),
('9873','sql','140','121','T2','c','5','2','1575','1576','120','0','1','0','1573','122',''),
('9874','sql','140','122','chp_nom_source','c','5','2','1580','1593','120','0','2','0','1573','129',''),
('9875','sql','140','123','croissant','f','4','0','1597','1605','119','0','2','0','1606','129',''),
('9876','sql','140','124','limité_à','f','2','0','1618','1625','102','2','2','2','1626','129',''),
('9877','sql','140','125','quantité','f','3','0','1627','1634','124','1','1','1','1635','127',''),
('9878','sql','140','126',':quantitee','c','4','0','1636','1645','125','0','1','0','1635','129',''),
('9879','sql','140','127','début','f','3','0','1648','1652','124','1','2','1','1653','129',''),
('9880','sql','140','128',':debut','c','4','0','1654','1659','127','0','1','0','1653','129',''),
('9881','sql','139','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9882','sql','139','1','supprimer','f','0','0','0','8','0','3','1','6','9','16',''),
('9883','sql','139','2','base_de_reference','f','1','0','14','30','1','1','1','1','31','4',''),
('9884','sql','139','3','1','c','2','0','32','32','2','0','1','0','31','16',''),
('9885','sql','139','4','provenance','f','1','0','39','48','1','1','2','5','49','11',''),
('9886','sql','139','5','table_reference','f','2','0','57','71','4','1','1','4','72','16',''),
('9887','sql','139','6','source','f','3','0','83','88','5','1','1','3','89','16',''),
('9888','sql','139','7','nom_de_la_table','f','4','0','90','104','6','2','1','2','105','16',''),
('9889','sql','139','8','tbl_acces','c','5','0','106','114','7','0','1','0','105','9',''),
('9890','sql','139','9','base','f','5','0','116','119','7','1','2','1','120','16',''),
('9891','sql','139','10','b1','c','6','0','121','122','9','0','1','0','120','16',''),
('9892','sql','139','11','conditions','f','1','0','144','153','1','1','3','3','154','16',''),
('9893','sql','139','12','egal','f','2','0','155','158','11','2','1','2','159','16',''),
('9894','sql','139','13','champ','f','3','0','160','164','12','1','1','1','165','15',''),
('9895','sql','139','14','chi_id_acces','c','4','2','167','178','13','0','1','0','165','16',''),
('9896','sql','139','15',':chi_id_acces','c','3','0','182','194','12','0','2','0','165','16',''),
('9897','sql','138','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9898','sql','138','1','modifier','f','0','0','0','7','0','3','1','6','8','31',''),
('9899','sql','138','2','valeurs','f','1','0','13','19','1','4','1','3','20','19',''),
('9900','sql','138','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('9901','sql','138','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('9902','sql','138','5','chp_nom_acces','c','4','2','36','48','4','0','1','0','34','31',''),
('9903','sql','138','6',':n_chp_nom_acces','c','3','0','52','67','3','0','2','0','34','31',''),
('9904','sql','138','7','affecte','f','2','0','70','76','2','2','2','2','77','11',''),
('9905','sql','138','8','champ','f','3','0','78','82','7','1','1','1','83','10',''),
('9906','sql','138','9','chx_groupe_acces','c','4','2','85','100','8','0','1','0','83','31',''),
('9907','sql','138','10',':n_chx_groupe_acces','c','3','0','104','122','7','0','2','0','83','31',''),
('9908','sql','138','11','affecte','f','2','0','125','131','2','2','3','2','132','15',''),
('9909','sql','138','12','champ','f','3','0','133','137','11','1','1','1','138','14',''),
('9910','sql','138','13','chx_metier_acces','c','4','2','140','155','12','0','1','0','138','31',''),
('9911','sql','138','14',':n_chx_metier_acces','c','3','0','159','177','11','0','2','0','138','31',''),
('9912','sql','138','15','affecte','f','2','0','180','186','2','2','4','2','187','31',''),
('9913','sql','138','16','champ','f','3','0','188','192','15','1','1','1','193','18',''),
('9914','sql','138','17','che_actif_acces','c','4','2','195','209','16','0','1','0','193','31',''),
('9915','sql','138','18',':n_che_actif_acces','c','3','0','213','230','15','0','2','0','193','31',''),
('9916','sql','138','19','provenance','f','1','0','238','247','1','1','2','5','248','26',''),
('9917','sql','138','20','table_reference','f','2','0','256','270','19','1','1','4','271','31',''),
('9918','sql','138','21','source','f','3','0','282','287','20','1','1','3','288','31',''),
('9919','sql','138','22','nom_de_la_table','f','4','0','289','303','21','2','1','2','304','31',''),
('9920','sql','138','23','tbl_acces','c','5','0','305','313','22','0','1','0','304','24',''),
('9921','sql','138','24','base','f','5','0','315','318','22','1','2','1','319','31',''),
('9922','sql','138','25','b1','c','6','0','320','321','24','0','1','0','319','31',''),
('9923','sql','138','26','conditions','f','1','0','343','352','1','1','3','3','353','31',''),
('9924','sql','138','27','egal','f','2','0','354','357','26','2','1','2','358','31',''),
('9925','sql','138','28','champ','f','3','0','359','363','27','1','1','1','364','30',''),
('9926','sql','138','29','chi_id_acces','c','4','2','366','377','28','0','1','0','364','31',''),
('9927','sql','138','30',':c_chi_id_acces','c','3','0','381','395','27','0','2','0','364','31',''),
('9928','sql','137','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9929','sql','137','1','insérer','f','0','0','0','6','0','3','1','6','7','23',''),
('9930','sql','137','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('9931','sql','137','3','valeurs','f','1','0','36','42','1','3','2','3','43','16',''),
('9932','sql','137','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('9933','sql','137','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('9934','sql','137','6','chp_nom_acces','c','4','2','59','71','5','0','1','0','57','23',''),
('9935','sql','137','7',':chp_nom_acces','c','3','0','75','88','4','0','2','0','57','23',''),
('9936','sql','137','8','affecte','f','2','0','91','97','3','2','2','2','98','12',''),
('9937','sql','137','9','champ','f','3','0','99','103','8','1','1','1','104','11',''),
('9938','sql','137','10','chx_groupe_acces','c','4','2','106','121','9','0','1','0','104','23',''),
('9939','sql','137','11',':chx_groupe_acces','c','3','0','125','141','8','0','2','0','104','23',''),
('9940','sql','137','12','affecte','f','2','0','144','150','3','2','3','2','151','23',''),
('9941','sql','137','13','champ','f','3','0','152','156','12','1','1','1','157','15',''),
('9942','sql','137','14','chx_metier_acces','c','4','2','159','174','13','0','1','0','157','23',''),
('9943','sql','137','15',':chx_metier_acces','c','3','0','178','194','12','0','2','0','157','23',''),
('9944','sql','137','16','provenance','f','1','0','202','211','1','1','3','5','212','23',''),
('9945','sql','137','17','table_reference','f','2','0','220','234','16','1','1','4','235','23',''),
('9946','sql','137','18','source','f','3','0','246','251','17','1','1','3','252','23',''),
('9947','sql','137','19','nom_de_la_table','f','4','0','253','267','18','2','1','2','268','23',''),
('9948','sql','137','20','tbl_acces','c','5','0','269','277','19','0','1','0','268','21',''),
('9949','sql','137','21','base','f','5','0','279','282','19','1','2','1','283','23',''),
('9950','sql','137','22','b1','c','6','0','284','285','21','0','1','0','283','23',''),
('9951','sql','136','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('9952','sql','136','1','sélectionner','f','0','0','0','11','0','3','1','6','12','74',''),
('9953','sql','136','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('9954','sql','136','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('9955','sql','136','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('9956','sql','136','5','chi_id_acces','c','3','2','44','55','3','0','2','0','37','74',''),
('9957','sql','136','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('9958','sql','136','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('9959','sql','136','8','chp_nom_acces','c','3','2','78','90','6','0','2','0','71','74',''),
('9960','sql','136','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('9961','sql','136','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('9962','sql','136','11','chx_groupe_acces','c','3','2','113','128','9','0','2','0','106','74',''),
('9963','sql','136','12','champ','f','2','0','139','143','2','2','4','1','144','15',''),
('9964','sql','136','13','T0','c','3','2','146','147','12','0','1','0','144','14',''),
('9965','sql','136','14','chx_metier_acces','c','3','2','151','166','12','0','2','0','144','74',''),
('9966','sql','136','15','champ','f','2','0','177','181','2','2','5','1','182','18',''),
('9967','sql','136','16','T0','c','3','2','184','185','15','0','1','0','182','17',''),
('9968','sql','136','17','cht_parametres_acces','c','3','2','189','208','15','0','2','0','182','74',''),
('9969','sql','136','18','champ','f','2','0','219','223','2','2','6','1','224','21',''),
('9970','sql','136','19','T1','c','3','2','226','227','18','0','1','0','224','20',''),
('9971','sql','136','20','chp_nom_groupe','c','3','2','231','244','18','0','2','0','224','74',''),
('9972','sql','136','21','champ','f','2','0','255','259','2','2','7','1','260','24',''),
('9973','sql','136','22','T2','c','3','2','262','263','21','0','1','0','260','23',''),
('9974','sql','136','23','chp_nom_metier','c','3','2','267','280','21','0','2','0','260','74',''),
('9975','sql','136','24','champ','f','2','0','291','295','2','2','8','1','296','74',''),
('9976','sql','136','25','T0','c','3','2','298','299','24','0','1','0','296','26',''),
('9977','sql','136','26','che_actif_acces','c','3','2','303','317','24','0','2','0','296','74',''),
('9978','sql','136','27','provenance','f','1','0','330','339','1','3','2','5','340','68',''),
('9979','sql','136','28','table_reference','f','2','0','348','362','27','1','1','4','363','36',''),
('9980','sql','136','29','source','f','3','0','374','379','28','1','1','3','380','74',''),
('9981','sql','136','30','nom_de_la_table','f','4','0','381','395','29','3','1','2','396','74',''),
('9982','sql','136','31','tbl_acces','c','5','0','397','405','30','0','1','0','396','32',''),
('9983','sql','136','32','alias','f','5','0','407','411','30','1','2','1','412','34',''),
('9984','sql','136','33','T0','c','6','0','413','414','32','0','1','0','412','74',''),
('9985','sql','136','34','base','f','5','0','417','420','30','1','3','1','421','74',''),
('9986','sql','136','35','b1','c','6','0','422','423','34','0','1','0','421','74',''),
('9987','sql','136','36','jointure_gauche','f','2','0','443','457','27','2','2','4','458','52',''),
('9988','sql','136','37','source','f','3','0','469','474','36','1','1','3','475','44',''),
('9989','sql','136','38','nom_de_la_table','f','4','0','476','490','37','3','1','2','491','74',''),
('9990','sql','136','39','tbl_groupes','c','5','0','492','502','38','0','1','0','491','40',''),
('9991','sql','136','40','alias','f','5','0','504','508','38','1','2','1','509','42',''),
('9992','sql','136','41','T1','c','6','0','510','511','40','0','1','0','509','74',''),
('9993','sql','136','42','base','f','5','0','514','517','38','1','3','1','518','74',''),
('9994','sql','136','43','b1','c','6','0','519','520','42','0','1','0','518','74',''),
('9995','sql','136','44','contrainte','f','3','0','535','544','36','1','2','3','545','74',''),
('9996','sql','136','45','egal','f','4','0','546','549','44','2','1','2','550','74',''),
('9997','sql','136','46','champ','f','5','0','551','555','45','2','1','1','556','49',''),
('9998','sql','136','47','T1','c','6','0','557','558','46','0','1','0','556','48',''),
('9999','sql','136','48','chi_id_groupe','c','6','0','560','572','46','0','2','0','556','74',''),
('10000','sql','136','49','champ','f','5','0','575','579','45','2','2','1','580','74',''),
('10001','sql','136','50','T0','c','6','0','581','582','49','0','1','0','580','51',''),
('10002','sql','136','51','chx_groupe_acces','c','6','0','584','599','49','0','2','0','580','74',''),
('10003','sql','136','52','jointure_gauche','f','2','0','619','633','27','2','3','4','634','74',''),
('10004','sql','136','53','source','f','3','0','645','650','52','1','1','3','651','60',''),
('10005','sql','136','54','nom_de_la_table','f','4','0','652','666','53','3','1','2','667','74',''),
('10006','sql','136','55','tbl_metiers','c','5','0','668','678','54','0','1','0','667','56',''),
('10007','sql','136','56','alias','f','5','0','680','684','54','1','2','1','685','58',''),
('10008','sql','136','57','T2','c','6','0','686','687','56','0','1','0','685','74',''),
('10009','sql','136','58','base','f','5','0','690','693','54','1','3','1','694','74',''),
('10010','sql','136','59','b1','c','6','0','695','696','58','0','1','0','694','74',''),
('10011','sql','136','60','contrainte','f','3','0','711','720','52','1','2','3','721','74',''),
('10012','sql','136','61','egal','f','4','0','722','725','60','2','1','2','726','74',''),
('10013','sql','136','62','champ','f','5','0','727','731','61','2','1','1','732','65',''),
('10014','sql','136','63','T2','c','6','0','733','734','62','0','1','0','732','64',''),
('10015','sql','136','64','chi_id_metier','c','6','0','736','748','62','0','2','0','732','74',''),
('10016','sql','136','65','champ','f','5','0','751','755','61','2','2','1','756','74',''),
('10017','sql','136','66','T0','c','6','0','757','758','65','0','1','0','756','67',''),
('10018','sql','136','67','chx_metier_acces','c','6','0','760','775','65','0','2','0','756','74',''),
('10019','sql','136','68','conditions','f','1','0','797','806','1','1','3','3','807','74',''),
('10020','sql','136','69','egal','f','2','0','808','811','68','2','1','2','812','74',''),
('10021','sql','136','70','champ','f','3','0','813','817','69','2','1','1','818','73',''),
('10022','sql','136','71','T0','c','4','2','820','821','70','0','1','0','818','72',''),
('10023','sql','136','72','chi_id_acces','c','4','2','825','836','70','0','2','0','818','74',''),
('10024','sql','136','73',':T0_chi_id_acces','c','3','0','840','855','69','0','2','0','818','74',''),
('10025','sql','135','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10026','sql','135','1','sélectionner','f','0','0','0','11','0','4','1','6','12','119',''),
('10027','sql','135','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('10028','sql','135','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('10029','sql','135','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('10030','sql','135','5','chi_id_acces','c','3','2','44','55','3','0','2','0','37','119',''),
('10031','sql','135','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('10032','sql','135','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('10033','sql','135','8','chp_nom_acces','c','3','2','78','90','6','0','2','0','71','119',''),
('10034','sql','135','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('10035','sql','135','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('10036','sql','135','11','che_actif_acces','c','3','2','113','127','9','0','2','0','106','119',''),
('10037','sql','135','12','champ','f','2','0','138','142','2','2','4','1','143','15',''),
('10038','sql','135','13','T0','c','3','2','145','146','12','0','1','0','143','14',''),
('10039','sql','135','14','chx_groupe_acces','c','3','2','150','165','12','0','2','0','143','119',''),
('10040','sql','135','15','champ','f','2','0','176','180','2','2','5','1','181','18',''),
('10041','sql','135','16','T0','c','3','2','183','184','15','0','1','0','181','17',''),
('10042','sql','135','17','chx_metier_acces','c','3','2','188','203','15','0','2','0','181','119',''),
('10043','sql','135','18','champ','f','2','0','214','218','2','2','6','1','219','21',''),
('10044','sql','135','19','T1','c','3','2','221','222','18','0','1','0','219','20',''),
('10045','sql','135','20','chp_nom_groupe','c','3','2','226','239','18','0','2','0','219','119',''),
('10046','sql','135','21','champ','f','2','0','250','254','2','2','7','1','255','119',''),
('10047','sql','135','22','T2','c','3','2','257','258','21','0','1','0','255','23',''),
('10048','sql','135','23','chp_nom_metier','c','3','2','262','275','21','0','2','0','255','119',''),
('10049','sql','135','24','provenance','f','1','0','288','297','1','3','2','5','298','65',''),
('10050','sql','135','25','table_reference','f','2','0','306','320','24','1','1','4','321','33',''),
('10051','sql','135','26','source','f','3','0','332','337','25','1','1','3','338','119',''),
('10052','sql','135','27','nom_de_la_table','f','4','0','339','353','26','3','1','2','354','119',''),
('10053','sql','135','28','tbl_acces','c','5','0','355','363','27','0','1','0','354','29',''),
('10054','sql','135','29','alias','f','5','0','365','369','27','1','2','1','370','31',''),
('10055','sql','135','30','T0','c','6','0','371','372','29','0','1','0','370','119',''),
('10056','sql','135','31','base','f','5','0','375','378','27','1','3','1','379','119',''),
('10057','sql','135','32','b1','c','6','0','380','381','31','0','1','0','379','119',''),
('10058','sql','135','33','jointure_gauche','f','2','0','401','415','24','2','2','4','416','49',''),
('10059','sql','135','34','source','f','3','0','427','432','33','1','1','3','433','41',''),
('10060','sql','135','35','nom_de_la_table','f','4','0','434','448','34','3','1','2','449','119',''),
('10061','sql','135','36','tbl_groupes','c','5','0','450','460','35','0','1','0','449','37',''),
('10062','sql','135','37','alias','f','5','0','462','466','35','1','2','1','467','39',''),
('10063','sql','135','38','T1','c','6','0','468','469','37','0','1','0','467','119',''),
('10064','sql','135','39','base','f','5','0','472','475','35','1','3','1','476','119',''),
('10065','sql','135','40','b1','c','6','0','477','478','39','0','1','0','476','119',''),
('10066','sql','135','41','contrainte','f','3','0','493','502','33','1','2','3','503','119',''),
('10067','sql','135','42','egal','f','4','0','504','507','41','2','1','2','508','119',''),
('10068','sql','135','43','champ','f','5','0','509','513','42','2','1','1','514','46',''),
('10069','sql','135','44','T1','c','6','0','515','516','43','0','1','0','514','45',''),
('10070','sql','135','45','chi_id_groupe','c','6','0','518','530','43','0','2','0','514','119',''),
('10071','sql','135','46','champ','f','5','0','533','537','42','2','2','1','538','119',''),
('10072','sql','135','47','T0','c','6','0','539','540','46','0','1','0','538','48',''),
('10073','sql','135','48','chx_groupe_acces','c','6','0','542','557','46','0','2','0','538','119',''),
('10074','sql','135','49','jointure_gauche','f','2','0','577','591','24','2','3','4','592','119',''),
('10075','sql','135','50','source','f','3','0','603','608','49','1','1','3','609','57',''),
('10076','sql','135','51','nom_de_la_table','f','4','0','610','624','50','3','1','2','625','119',''),
('10077','sql','135','52','tbl_metiers','c','5','0','626','636','51','0','1','0','625','53',''),
('10078','sql','135','53','alias','f','5','0','638','642','51','1','2','1','643','55',''),
('10079','sql','135','54','T2','c','6','0','644','645','53','0','1','0','643','119',''),
('10080','sql','135','55','base','f','5','0','648','651','51','1','3','1','652','119',''),
('10081','sql','135','56','b1','c','6','0','653','654','55','0','1','0','652','119',''),
('10082','sql','135','57','contrainte','f','3','0','669','678','49','1','2','3','679','119',''),
('10083','sql','135','58','egal','f','4','0','680','683','57','2','1','2','684','119',''),
('10084','sql','135','59','champ','f','5','0','685','689','58','2','1','1','690','62',''),
('10085','sql','135','60','T2','c','6','0','691','692','59','0','1','0','690','61',''),
('10086','sql','135','61','chi_id_metier','c','6','0','694','706','59','0','2','0','690','119',''),
('10087','sql','135','62','champ','f','5','0','709','713','58','2','2','1','714','119',''),
('10088','sql','135','63','T0','c','6','0','715','716','62','0','1','0','714','64',''),
('10089','sql','135','64','chx_metier_acces','c','6','0','718','733','62','0','2','0','714','119',''),
('10090','sql','135','65','conditions','f','1','0','755','764','1','1','3','4','765','107',''),
('10091','sql','135','66','et','f','2','0','773','774','65','8','1','3','775','119',''),
('10092','sql','135','67','egal','f','3','0','786','789','66','2','1','2','790','72',''),
('10093','sql','135','68','champ','f','4','0','791','795','67','2','1','1','796','71',''),
('10094','sql','135','69','T0','c','5','2','798','799','68','0','1','0','796','70',''),
('10095','sql','135','70','chi_id_acces','c','5','2','803','814','68','0','2','0','796','119',''),
('10096','sql','135','71',':T0_chi_id_acces','c','4','0','818','833','67','0','2','0','796','119',''),
('10097','sql','135','72','comme','f','3','0','846','850','66','2','2','2','851','77',''),
('10098','sql','135','73','champ','f','4','0','852','856','72','2','1','1','857','76',''),
('10099','sql','135','74','T0','c','5','2','859','860','73','0','1','0','857','75',''),
('10100','sql','135','75','chp_nom_acces','c','5','2','864','876','73','0','2','0','857','119',''),
('10101','sql','135','76',':T0_chp_nom_acces','c','4','0','880','896','72','0','2','0','857','119',''),
('10102','sql','135','77','egal','f','3','0','909','912','66','2','3','2','913','82',''),
('10103','sql','135','78','champ','f','4','0','914','918','77','2','1','1','919','81',''),
('10104','sql','135','79','T0','c','5','2','921','922','78','0','1','0','919','80',''),
('10105','sql','135','80','che_actif_acces','c','5','2','926','940','78','0','2','0','919','119',''),
('10106','sql','135','81',':T0_che_actif_acces','c','4','0','944','962','77','0','2','0','919','119',''),
('10107','sql','135','82','egal','f','3','0','975','978','66','2','4','2','979','87',''),
('10108','sql','135','83','champ','f','4','0','980','984','82','2','1','1','985','86',''),
('10109','sql','135','84','T0','c','5','2','987','988','83','0','1','0','985','85',''),
('10110','sql','135','85','chx_groupe_acces','c','5','2','992','1007','83','0','2','0','985','119',''),
('10111','sql','135','86',':T0_chx_groupe_acces','c','4','0','1011','1030','82','0','2','0','985','119',''),
('10112','sql','135','87','comme','f','3','0','1043','1047','66','2','5','2','1048','92',''),
('10113','sql','135','88','champ','f','4','0','1049','1053','87','2','1','1','1054','91',''),
('10114','sql','135','89','T1','c','5','2','1056','1057','88','0','1','0','1054','90',''),
('10115','sql','135','90','chp_nom_groupe','c','5','2','1061','1074','88','0','2','0','1054','119',''),
('10116','sql','135','91',':T1_chp_nom_groupe','c','4','0','1078','1095','87','0','2','0','1054','119',''),
('10117','sql','135','92','egal','f','3','0','1108','1111','66','2','6','2','1112','97',''),
('10118','sql','135','93','champ','f','4','0','1113','1117','92','2','1','1','1118','96',''),
('10119','sql','135','94','T0','c','5','2','1120','1121','93','0','1','0','1118','95',''),
('10120','sql','135','95','chx_metier_acces','c','5','2','1125','1140','93','0','2','0','1118','119',''),
('10121','sql','135','96',':T0_chx_metier_acces','c','4','0','1144','1163','92','0','2','0','1118','119',''),
('10122','sql','135','97','comme','f','3','0','1176','1180','66','2','7','2','1181','102',''),
('10123','sql','135','98','champ','f','4','0','1182','1186','97','2','1','1','1187','101',''),
('10124','sql','135','99','T2','c','5','2','1189','1190','98','0','1','0','1187','100',''),
('10125','sql','135','100','chp_nom_metier','c','5','2','1194','1207','98','0','2','0','1187','119',''),
('10126','sql','135','101',':T2_chp_nom_metier','c','4','0','1211','1228','97','0','2','0','1187','119',''),
('10127','sql','135','102','pas_dans','f','3','0','1241','1248','66','2','8','2','1249','119',''),
('10128','sql','135','103','champ','f','4','0','1250','1254','102','2','1','1','1255','106',''),
('10129','sql','135','104','T0','c','5','2','1257','1258','103','0','1','0','1255','105',''),
('10130','sql','135','105','chi_id_acces','c','5','2','1262','1273','103','0','2','0','1255','119',''),
('10131','sql','135','106',':acces_pas_dans','c','4','0','1277','1291','102','0','2','0','1255','119',''),
('10132','sql','135','107','complements','f','1','0','1311','1321','1','2','4','4','1322','119',''),
('10133','sql','135','108','trier_par','f','2','0','1330','1338','107','1','1','3','1339','114',''),
('10134','sql','135','109','','f','3','0','1330','1338','108','2','1','2','1340','119',''),
('10135','sql','135','110','champ','f','4','0','1341','1345','109','2','1','1','1346','113',''),
('10136','sql','135','111','T0','c','5','2','1348','1349','110','0','1','0','1346','112',''),
('10137','sql','135','112','chi_id_acces','c','5','2','1353','1364','110','0','2','0','1346','119',''),
('10138','sql','135','113','décroissant','f','4','0','1368','1378','109','0','2','0','1379','119',''),
('10139','sql','135','114','limité_à','f','2','0','1391','1398','107','2','2','2','1399','119',''),
('10140','sql','135','115','quantité','f','3','0','1400','1407','114','1','1','1','1408','117',''),
('10141','sql','135','116',':quantitee','c','4','0','1409','1418','115','0','1','0','1408','119',''),
('10142','sql','135','117','début','f','3','0','1421','1425','114','1','2','1','1426','119',''),
('10143','sql','135','118',':debut','c','4','0','1427','1432','117','0','1','0','1426','119',''),
('10144','sql','134','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10145','sql','134','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('10146','sql','134','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('10147','sql','134','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('10148','sql','134','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('10149','sql','134','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('10150','sql','134','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('10151','sql','134','7','tbl_groupes','c','5','0','105','115','6','0','1','0','104','8',''),
('10152','sql','134','8','base','f','5','0','117','120','6','1','2','1','121','15',''),
('10153','sql','134','9','b1','c','6','0','122','123','8','0','1','0','121','15',''),
('10154','sql','134','10','conditions','f','1','0','145','154','1','1','3','3','155','15',''),
('10155','sql','134','11','egal','f','2','0','156','159','10','2','1','2','160','15',''),
('10156','sql','134','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('10157','sql','134','13','chi_id_groupe','c','4','2','168','180','12','0','1','0','166','15',''),
('10158','sql','134','14',':chi_id_groupe','c','3','0','184','197','11','0','2','0','166','15',''),
('10159','sql','133','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10160','sql','133','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('10161','sql','133','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('10162','sql','133','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('10163','sql','133','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('10164','sql','133','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('10165','sql','133','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('10166','sql','133','7','chp_nom_groupe','c','4','2','61','74','6','0','1','0','59','25',''),
('10167','sql','133','8',':n_chp_nom_groupe','c','3','0','78','94','5','0','2','0','59','25',''),
('10168','sql','133','9','affecte','f','2','0','97','103','4','2','2','2','104','25',''),
('10169','sql','133','10','champ','f','3','0','105','109','9','1','1','1','110','12',''),
('10170','sql','133','11','chx_parent_groupe','c','4','2','112','128','10','0','1','0','110','25',''),
('10171','sql','133','12',':n_chx_parent_groupe','c','3','0','132','151','9','0','2','0','110','25',''),
('10172','sql','133','13','provenance','f','1','0','159','168','1','1','3','5','169','20',''),
('10173','sql','133','14','table_reference','f','2','0','177','191','13','1','1','4','192','25',''),
('10174','sql','133','15','source','f','3','0','203','208','14','1','1','3','209','25',''),
('10175','sql','133','16','nom_de_la_table','f','4','0','210','224','15','2','1','2','225','25',''),
('10176','sql','133','17','tbl_groupes','c','5','0','226','236','16','0','1','0','225','18',''),
('10177','sql','133','18','base','f','5','0','238','241','16','1','2','1','242','25',''),
('10178','sql','133','19','b1','c','6','0','243','244','18','0','1','0','242','25',''),
('10179','sql','133','20','conditions','f','1','0','266','275','1','1','4','3','276','25',''),
('10180','sql','133','21','egal','f','2','0','277','280','20','2','1','2','281','25',''),
('10181','sql','133','22','champ','f','3','0','282','286','21','1','1','1','287','24',''),
('10182','sql','133','23','chi_id_groupe','c','4','2','289','301','22','0','1','0','287','25',''),
('10183','sql','133','24',':c_chi_id_groupe','c','3','0','305','320','21','0','2','0','287','25',''),
('10184','sql','132','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10185','sql','132','1','insérer','f','0','0','0','6','0','3','1','6','7','19',''),
('10186','sql','132','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('10187','sql','132','3','valeurs','f','1','0','36','42','1','2','2','3','43','12',''),
('10188','sql','132','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('10189','sql','132','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('10190','sql','132','6','chp_nom_groupe','c','4','2','59','72','5','0','1','0','57','19',''),
('10191','sql','132','7',':chp_nom_groupe','c','3','0','76','90','4','0','2','0','57','19',''),
('10192','sql','132','8','affecte','f','2','0','93','99','3','2','2','2','100','19',''),
('10193','sql','132','9','champ','f','3','0','101','105','8','1','1','1','106','11',''),
('10194','sql','132','10','chx_parent_groupe','c','4','2','108','124','9','0','1','0','106','19',''),
('10195','sql','132','11',':chx_parent_groupe','c','3','0','128','145','8','0','2','0','106','19',''),
('10196','sql','132','12','provenance','f','1','0','153','162','1','1','3','5','163','19',''),
('10197','sql','132','13','table_reference','f','2','0','171','185','12','1','1','4','186','19',''),
('10198','sql','132','14','source','f','3','0','197','202','13','1','1','3','203','19',''),
('10199','sql','132','15','nom_de_la_table','f','4','0','204','218','14','2','1','2','219','19',''),
('10200','sql','132','16','tbl_groupes','c','5','0','220','230','15','0','1','0','219','17',''),
('10201','sql','132','17','base','f','5','0','232','235','15','1','2','1','236','19',''),
('10202','sql','132','18','b1','c','6','0','237','238','17','0','1','0','236','19',''),
('10203','sql','131','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10204','sql','131','1','sélectionner','f','0','0','0','11','0','4','1','6','12','48',''),
('10205','sql','131','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('10206','sql','131','3','1','c','2','0','35','35','2','0','1','0','34','48',''),
('10207','sql','131','4','valeurs','f','1','0','42','48','1','4','2','2','49','17',''),
('10208','sql','131','5','champ','f','2','0','50','54','4','2','1','1','55','8',''),
('10209','sql','131','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('10210','sql','131','7','chi_id_groupe','c','3','2','62','74','5','0','2','0','55','48',''),
('10211','sql','131','8','champ','f','2','0','78','82','4','2','2','1','83','11',''),
('10212','sql','131','9','T0','c','3','2','85','86','8','0','1','0','83','10',''),
('10213','sql','131','10','chp_nom_groupe','c','3','2','90','103','8','0','2','0','83','48',''),
('10214','sql','131','11','champ','f','2','0','107','111','4','2','3','1','112','14',''),
('10215','sql','131','12','T0','c','3','2','114','115','11','0','1','0','112','13',''),
('10216','sql','131','13','chx_parent_groupe','c','3','2','119','135','11','0','2','0','112','48',''),
('10217','sql','131','14','champ','f','2','0','139','143','4','2','4','1','144','48',''),
('10218','sql','131','15','T1','c','3','2','146','147','14','0','1','0','144','16',''),
('10219','sql','131','16','chp_nom_groupe','c','3','2','151','164','14','0','2','0','144','48',''),
('10220','sql','131','17','provenance','f','1','0','173','182','1','2','3','5','183','42',''),
('10221','sql','131','18','table_reference','f','2','0','191','205','17','1','1','4','206','26',''),
('10222','sql','131','19','source','f','3','0','217','222','18','1','1','3','223','48',''),
('10223','sql','131','20','nom_de_la_table','f','4','0','224','238','19','3','1','2','239','48',''),
('10224','sql','131','21','tbl_groupes','c','5','0','240','250','20','0','1','0','239','22',''),
('10225','sql','131','22','alias','f','5','0','252','256','20','1','2','1','257','24',''),
('10226','sql','131','23','T0','c','6','0','258','259','22','0','1','0','257','48',''),
('10227','sql','131','24','base','f','5','0','262','265','20','1','3','1','266','48',''),
('10228','sql','131','25','b1','c','6','0','267','268','24','0','1','0','266','48',''),
('10229','sql','131','26','jointure_gauche','f','2','0','288','302','17','2','2','4','303','48',''),
('10230','sql','131','27','source','f','3','0','314','319','26','1','1','3','320','34',''),
('10231','sql','131','28','nom_de_la_table','f','4','0','321','335','27','3','1','2','336','48',''),
('10232','sql','131','29','tbl_groupes','c','5','0','337','347','28','0','1','0','336','30',''),
('10233','sql','131','30','alias','f','5','0','349','353','28','1','2','1','354','32',''),
('10234','sql','131','31','T1','c','6','0','355','356','30','0','1','0','354','48',''),
('10235','sql','131','32','base','f','5','0','359','362','28','1','3','1','363','48',''),
('10236','sql','131','33','b1','c','6','0','364','365','32','0','1','0','363','48',''),
('10237','sql','131','34','contrainte','f','3','0','380','389','26','1','2','3','390','48',''),
('10238','sql','131','35','egal','f','4','0','391','394','34','2','1','2','395','48',''),
('10239','sql','131','36','champ','f','5','0','396','400','35','2','1','1','401','39',''),
('10240','sql','131','37','T1','c','6','0','402','403','36','0','1','0','401','38',''),
('10241','sql','131','38','chi_id_groupe','c','6','0','405','417','36','0','2','0','401','48',''),
('10242','sql','131','39','champ','f','5','0','420','424','35','2','2','1','425','48',''),
('10243','sql','131','40','T0','c','6','0','426','427','39','0','1','0','425','41',''),
('10244','sql','131','41','chx_parent_groupe','c','6','0','429','445','39','0','2','0','425','48',''),
('10245','sql','131','42','conditions','f','1','0','467','476','1','1','4','3','477','48',''),
('10246','sql','131','43','egal','f','2','0','478','481','42','2','1','2','482','48',''),
('10247','sql','131','44','champ','f','3','0','483','487','43','2','1','1','488','47',''),
('10248','sql','131','45','T0','c','4','2','490','491','44','0','1','0','488','46',''),
('10249','sql','131','46','chi_id_groupe','c','4','2','495','507','44','0','2','0','488','48',''),
('10250','sql','131','47',':T0_chi_id_groupe','c','3','0','511','527','43','0','2','0','488','48',''),
('10251','sql','130','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10252','sql','130','1','sélectionner','f','0','0','0','11','0','4','1','6','12','79',''),
('10253','sql','130','2','valeurs','f','1','0','17','23','1','4','1','2','24','15',''),
('10254','sql','130','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('10255','sql','130','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('10256','sql','130','5','chi_id_groupe','c','3','2','37','49','3','0','2','0','30','79',''),
('10257','sql','130','6','champ','f','2','0','53','57','2','2','2','1','58','9',''),
('10258','sql','130','7','T0','c','3','2','60','61','6','0','1','0','58','8',''),
('10259','sql','130','8','chp_nom_groupe','c','3','2','65','78','6','0','2','0','58','79',''),
('10260','sql','130','9','champ','f','2','0','82','86','2','2','3','1','87','12',''),
('10261','sql','130','10','T0','c','3','2','89','90','9','0','1','0','87','11',''),
('10262','sql','130','11','chx_parent_groupe','c','3','2','94','110','9','0','2','0','87','79',''),
('10263','sql','130','12','champ','f','2','0','114','118','2','2','4','1','119','79',''),
('10264','sql','130','13','T1','c','3','2','121','122','12','0','1','0','119','14',''),
('10265','sql','130','14','chp_nom_groupe','c','3','2','126','139','12','0','2','0','119','79',''),
('10266','sql','130','15','provenance','f','1','0','148','157','1','2','2','5','158','40',''),
('10267','sql','130','16','table_reference','f','2','0','166','180','15','1','1','4','181','24',''),
('10268','sql','130','17','source','f','3','0','192','197','16','1','1','3','198','79',''),
('10269','sql','130','18','nom_de_la_table','f','4','0','199','213','17','3','1','2','214','79',''),
('10270','sql','130','19','tbl_groupes','c','5','0','215','225','18','0','1','0','214','20',''),
('10271','sql','130','20','alias','f','5','0','227','231','18','1','2','1','232','22',''),
('10272','sql','130','21','T0','c','6','0','233','234','20','0','1','0','232','79',''),
('10273','sql','130','22','base','f','5','0','237','240','18','1','3','1','241','79',''),
('10274','sql','130','23','b1','c','6','0','242','243','22','0','1','0','241','79',''),
('10275','sql','130','24','jointure_gauche','f','2','0','263','277','15','2','2','4','278','79',''),
('10276','sql','130','25','source','f','3','0','289','294','24','1','1','3','295','32',''),
('10277','sql','130','26','nom_de_la_table','f','4','0','296','310','25','3','1','2','311','79',''),
('10278','sql','130','27','tbl_groupes','c','5','0','312','322','26','0','1','0','311','28',''),
('10279','sql','130','28','alias','f','5','0','324','328','26','1','2','1','329','30',''),
('10280','sql','130','29','T1','c','6','0','330','331','28','0','1','0','329','79',''),
('10281','sql','130','30','base','f','5','0','334','337','26','1','3','1','338','79',''),
('10282','sql','130','31','b1','c','6','0','339','340','30','0','1','0','338','79',''),
('10283','sql','130','32','contrainte','f','3','0','355','364','24','1','2','3','365','79',''),
('10284','sql','130','33','egal','f','4','0','366','369','32','2','1','2','370','79',''),
('10285','sql','130','34','champ','f','5','0','371','375','33','2','1','1','376','37',''),
('10286','sql','130','35','T1','c','6','0','377','378','34','0','1','0','376','36',''),
('10287','sql','130','36','chi_id_groupe','c','6','0','380','392','34','0','2','0','376','79',''),
('10288','sql','130','37','champ','f','5','0','395','399','33','2','2','1','400','79',''),
('10289','sql','130','38','T0','c','6','0','401','402','37','0','1','0','400','39',''),
('10290','sql','130','39','chx_parent_groupe','c','6','0','404','420','37','0','2','0','400','79',''),
('10291','sql','130','40','conditions','f','1','0','442','451','1','1','3','4','452','67',''),
('10292','sql','130','41','et','f','2','0','460','461','40','5','1','3','462','79',''),
('10293','sql','130','42','egal','f','3','0','473','476','41','2','1','2','477','47',''),
('10294','sql','130','43','champ','f','4','0','478','482','42','2','1','1','483','46',''),
('10295','sql','130','44','T0','c','5','2','485','486','43','0','1','0','483','45',''),
('10296','sql','130','45','chi_id_groupe','c','5','2','490','502','43','0','2','0','483','79',''),
('10297','sql','130','46',':T0_chi_id_groupe','c','4','0','506','522','42','0','2','0','483','79',''),
('10298','sql','130','47','comme','f','3','0','535','539','41','2','2','2','540','52',''),
('10299','sql','130','48','champ','f','4','0','541','545','47','2','1','1','546','51',''),
('10300','sql','130','49','T0','c','5','2','548','549','48','0','1','0','546','50',''),
('10301','sql','130','50','chp_nom_groupe','c','5','2','553','566','48','0','2','0','546','79',''),
('10302','sql','130','51',':T0_chp_nom_groupe','c','4','0','570','587','47','0','2','0','546','79',''),
('10303','sql','130','52','egal','f','3','0','600','603','41','2','3','2','604','57',''),
('10304','sql','130','53','champ','f','4','0','605','609','52','2','1','1','610','56',''),
('10305','sql','130','54','T0','c','5','2','612','613','53','0','1','0','610','55',''),
('10306','sql','130','55','chx_parent_groupe','c','5','2','617','633','53','0','2','0','610','79',''),
('10307','sql','130','56',':T0_chx_parent_groupe','c','4','0','637','657','52','0','2','0','610','79',''),
('10308','sql','130','57','comme','f','3','0','670','674','41','2','4','2','675','62',''),
('10309','sql','130','58','champ','f','4','0','676','680','57','2','1','1','681','61',''),
('10310','sql','130','59','T1','c','5','2','683','684','58','0','1','0','681','60',''),
('10311','sql','130','60','chp_nom_groupe','c','5','2','688','701','58','0','2','0','681','79',''),
('10312','sql','130','61',':T1_chp_nom_groupe','c','4','0','705','722','57','0','2','0','681','79',''),
('10313','sql','130','62','supegal','f','3','0','735','741','41','2','5','2','742','79',''),
('10314','sql','130','63','champ','f','4','0','743','747','62','2','1','1','748','66',''),
('10315','sql','130','64','T0','c','5','2','750','751','63','0','1','0','748','65',''),
('10316','sql','130','65','chi_id_groupe','c','5','2','755','767','63','0','2','0','748','79',''),
('10317','sql','130','66',':groupe_mini','c','4','0','771','782','62','0','2','0','748','79',''),
('10318','sql','130','67','complements','f','1','0','802','812','1','2','4','4','813','79',''),
('10319','sql','130','68','trier_par','f','2','0','821','829','67','1','1','3','830','74',''),
('10320','sql','130','69','','f','3','0','821','829','68','2','1','2','831','79',''),
('10321','sql','130','70','champ','f','4','0','832','836','69','2','1','1','837','73',''),
('10322','sql','130','71','T0','c','5','2','839','840','70','0','1','0','837','72',''),
('10323','sql','130','72','chi_id_groupe','c','5','2','844','856','70','0','2','0','837','79',''),
('10324','sql','130','73','décroissant','f','4','0','860','870','69','0','2','0','871','79',''),
('10325','sql','130','74','limité_à','f','2','0','883','890','67','2','2','2','891','79',''),
('10326','sql','130','75','quantité','f','3','0','892','899','74','1','1','1','900','77',''),
('10327','sql','130','76',':quantitee','c','4','0','901','910','75','0','1','0','900','79',''),
('10328','sql','130','77','début','f','3','0','913','917','74','1','2','1','918','79',''),
('10329','sql','130','78',':debut','c','4','0','919','924','77','0','1','0','918','79',''),
('10330','sql','129','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10331','sql','129','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('10332','sql','129','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('10333','sql','129','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('10334','sql','129','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('10335','sql','129','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('10336','sql','129','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('10337','sql','129','7','tbl_metiers','c','5','0','105','115','6','0','1','0','104','8',''),
('10338','sql','129','8','base','f','5','0','117','120','6','1','2','1','121','15',''),
('10339','sql','129','9','b1','c','6','0','122','123','8','0','1','0','121','15',''),
('10340','sql','129','10','conditions','f','1','0','145','154','1','1','3','3','155','15',''),
('10341','sql','129','11','egal','f','2','0','156','159','10','2','1','2','160','15',''),
('10342','sql','129','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('10343','sql','129','13','chi_id_metier','c','4','2','168','180','12','0','1','0','166','15',''),
('10344','sql','129','14',':chi_id_metier','c','3','0','184','197','11','0','2','0','166','15',''),
('10345','sql','127','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10346','sql','127','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('10347','sql','127','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('10348','sql','127','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('10349','sql','127','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('10350','sql','127','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('10351','sql','127','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('10352','sql','127','7','chp_nom_metier','c','4','2','61','74','6','0','1','0','59','25',''),
('10353','sql','127','8',':n_chp_nom_metier','c','3','0','78','94','5','0','2','0','59','25',''),
('10354','sql','127','9','affecte','f','2','0','97','103','4','2','2','2','104','25',''),
('10355','sql','127','10','champ','f','3','0','105','109','9','1','1','1','110','12',''),
('10356','sql','127','11','chx_parent_metier','c','4','2','112','128','10','0','1','0','110','25',''),
('10357','sql','127','12',':n_chx_parent_metier','c','3','0','132','151','9','0','2','0','110','25',''),
('10358','sql','127','13','provenance','f','1','0','159','168','1','1','3','5','169','20',''),
('10359','sql','127','14','table_reference','f','2','0','177','191','13','1','1','4','192','25',''),
('10360','sql','127','15','source','f','3','0','203','208','14','1','1','3','209','25',''),
('10361','sql','127','16','nom_de_la_table','f','4','0','210','224','15','2','1','2','225','25',''),
('10362','sql','127','17','tbl_metiers','c','5','0','226','236','16','0','1','0','225','18',''),
('10363','sql','127','18','base','f','5','0','238','241','16','1','2','1','242','25',''),
('10364','sql','127','19','b1','c','6','0','243','244','18','0','1','0','242','25',''),
('10365','sql','127','20','conditions','f','1','0','266','275','1','1','4','3','276','25',''),
('10366','sql','127','21','egal','f','2','0','277','280','20','2','1','2','281','25',''),
('10367','sql','127','22','champ','f','3','0','282','286','21','1','1','1','287','24',''),
('10368','sql','127','23','chi_id_metier','c','4','2','289','301','22','0','1','0','287','25',''),
('10369','sql','127','24',':c_chi_id_metier','c','3','0','305','320','21','0','2','0','287','25',''),
('10370','sql','126','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10371','sql','126','1','insérer','f','0','0','0','6','0','3','1','6','7','19',''),
('10372','sql','126','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('10373','sql','126','3','valeurs','f','1','0','36','42','1','2','2','3','43','12',''),
('10374','sql','126','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('10375','sql','126','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('10376','sql','126','6','chp_nom_metier','c','4','2','59','72','5','0','1','0','57','19',''),
('10377','sql','126','7',':chp_nom_metier','c','3','0','76','90','4','0','2','0','57','19',''),
('10378','sql','126','8','affecte','f','2','0','93','99','3','2','2','2','100','19',''),
('10379','sql','126','9','champ','f','3','0','101','105','8','1','1','1','106','11',''),
('10380','sql','126','10','chx_parent_metier','c','4','2','108','124','9','0','1','0','106','19',''),
('10381','sql','126','11',':chx_parent_metier','c','3','0','128','145','8','0','2','0','106','19',''),
('10382','sql','126','12','provenance','f','1','0','153','162','1','1','3','5','163','19',''),
('10383','sql','126','13','table_reference','f','2','0','171','185','12','1','1','4','186','19',''),
('10384','sql','126','14','source','f','3','0','197','202','13','1','1','3','203','19',''),
('10385','sql','126','15','nom_de_la_table','f','4','0','204','218','14','2','1','2','219','19',''),
('10386','sql','126','16','tbl_metiers','c','5','0','220','230','15','0','1','0','219','17',''),
('10387','sql','126','17','base','f','5','0','232','235','15','1','2','1','236','19',''),
('10388','sql','126','18','b1','c','6','0','237','238','17','0','1','0','236','19',''),
('10389','sql','125','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10390','sql','125','1','sélectionner','f','0','0','0','11','0','4','1','6','12','48',''),
('10391','sql','125','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('10392','sql','125','3','1','c','2','0','35','35','2','0','1','0','34','48',''),
('10393','sql','125','4','valeurs','f','1','0','42','48','1','4','2','2','49','17',''),
('10394','sql','125','5','champ','f','2','0','50','54','4','2','1','1','55','8',''),
('10395','sql','125','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('10396','sql','125','7','chi_id_metier','c','3','2','62','74','5','0','2','0','55','48',''),
('10397','sql','125','8','champ','f','2','0','78','82','4','2','2','1','83','11',''),
('10398','sql','125','9','T0','c','3','2','85','86','8','0','1','0','83','10',''),
('10399','sql','125','10','chp_nom_metier','c','3','2','90','103','8','0','2','0','83','48',''),
('10400','sql','125','11','champ','f','2','0','107','111','4','2','3','1','112','14',''),
('10401','sql','125','12','T1','c','3','2','114','115','11','0','1','0','112','13',''),
('10402','sql','125','13','chp_nom_metier','c','3','2','119','132','11','0','2','0','112','48',''),
('10403','sql','125','14','champ','f','2','0','136','140','4','2','4','1','141','48',''),
('10404','sql','125','15','T0','c','3','2','143','144','14','0','1','0','141','16',''),
('10405','sql','125','16','chx_parent_metier','c','3','2','148','164','14','0','2','0','141','48',''),
('10406','sql','125','17','provenance','f','1','0','173','182','1','2','3','5','183','42',''),
('10407','sql','125','18','table_reference','f','2','0','191','205','17','1','1','4','206','26',''),
('10408','sql','125','19','source','f','3','0','217','222','18','1','1','3','223','48',''),
('10409','sql','125','20','nom_de_la_table','f','4','0','224','238','19','3','1','2','239','48',''),
('10410','sql','125','21','tbl_metiers','c','5','0','240','250','20','0','1','0','239','22',''),
('10411','sql','125','22','alias','f','5','0','252','256','20','1','2','1','257','24',''),
('10412','sql','125','23','T0','c','6','0','258','259','22','0','1','0','257','48',''),
('10413','sql','125','24','base','f','5','0','262','265','20','1','3','1','266','48',''),
('10414','sql','125','25','b1','c','6','0','267','268','24','0','1','0','266','48',''),
('10415','sql','125','26','jointure_gauche','f','2','0','288','302','17','2','2','4','303','48',''),
('10416','sql','125','27','source','f','3','0','314','319','26','1','1','3','320','34',''),
('10417','sql','125','28','nom_de_la_table','f','4','0','321','335','27','3','1','2','336','48',''),
('10418','sql','125','29','tbl_metiers','c','5','0','337','347','28','0','1','0','336','30',''),
('10419','sql','125','30','alias','f','5','0','349','353','28','1','2','1','354','32',''),
('10420','sql','125','31','T1','c','6','0','355','356','30','0','1','0','354','48',''),
('10421','sql','125','32','base','f','5','0','359','362','28','1','3','1','363','48',''),
('10422','sql','125','33','b1','c','6','0','364','365','32','0','1','0','363','48',''),
('10423','sql','125','34','contrainte','f','3','0','380','389','26','1','2','3','390','48',''),
('10424','sql','125','35','egal','f','4','0','391','394','34','2','1','2','395','48',''),
('10425','sql','125','36','champ','f','5','0','396','400','35','2','1','1','401','39',''),
('10426','sql','125','37','T1','c','6','0','402','403','36','0','1','0','401','38',''),
('10427','sql','125','38','chi_id_metier','c','6','0','405','417','36','0','2','0','401','48',''),
('10428','sql','125','39','champ','f','5','0','420','424','35','2','2','1','425','48',''),
('10429','sql','125','40','T0','c','6','0','426','427','39','0','1','0','425','41',''),
('10430','sql','125','41','chx_parent_metier','c','6','0','429','445','39','0','2','0','425','48',''),
('10431','sql','125','42','conditions','f','1','0','467','476','1','1','4','3','477','48',''),
('10432','sql','125','43','egal','f','2','0','478','481','42','2','1','2','482','48',''),
('10433','sql','125','44','champ','f','3','0','483','487','43','2','1','1','488','47',''),
('10434','sql','125','45','T0','c','4','2','490','491','44','0','1','0','488','46',''),
('10435','sql','125','46','chi_id_metier','c','4','2','495','507','44','0','2','0','488','48',''),
('10436','sql','125','47',':T0_chi_id_metier','c','3','0','511','527','43','0','2','0','488','48',''),
('10437','sql','124','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('10438','sql','124','1','sélectionner','f','0','0','0','11','0','4','1','6','12','69',''),
('10439','sql','124','2','valeurs','f','1','0','17','23','1','4','1','2','24','15',''),
('10440','sql','124','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('10441','sql','124','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('10442','sql','124','5','chi_id_metier','c','3','2','37','49','3','0','2','0','30','69',''),
('10443','sql','124','6','champ','f','2','0','53','57','2','2','2','1','58','9',''),
('10444','sql','124','7','T0','c','3','2','60','61','6','0','1','0','58','8',''),
('10445','sql','124','8','chp_nom_metier','c','3','2','65','78','6','0','2','0','58','69',''),
('10446','sql','124','9','champ','f','2','0','82','86','2','2','3','1','87','12',''),
('10447','sql','124','10','T1','c','3','2','89','90','9','0','1','0','87','11',''),
('10448','sql','124','11','chp_nom_metier','c','3','2','94','107','9','0','2','0','87','69',''),
('10449','sql','124','12','champ','f','2','0','111','115','2','2','4','1','116','69',''),
('10450','sql','124','13','T0','c','3','2','118','119','12','0','1','0','116','14',''),
('10451','sql','124','14','chx_parent_metier','c','3','2','123','139','12','0','2','0','116','69',''),
('10452','sql','124','15','provenance','f','1','0','148','157','1','2','2','5','158','40',''),
('10453','sql','124','16','table_reference','f','2','0','166','180','15','1','1','4','181','24',''),
('10454','sql','124','17','source','f','3','0','192','197','16','1','1','3','198','69',''),
('10455','sql','124','18','nom_de_la_table','f','4','0','199','213','17','3','1','2','214','69',''),
('10456','sql','124','19','tbl_metiers','c','5','0','215','225','18','0','1','0','214','20',''),
('10457','sql','124','20','alias','f','5','0','227','231','18','1','2','1','232','22',''),
('10458','sql','124','21','T0','c','6','0','233','234','20','0','1','0','232','69',''),
('10459','sql','124','22','base','f','5','0','237','240','18','1','3','1','241','69',''),
('10460','sql','124','23','b1','c','6','0','242','243','22','0','1','0','241','69',''),
('10461','sql','124','24','jointure_gauche','f','2','0','263','277','15','2','2','4','278','69',''),
('10462','sql','124','25','source','f','3','0','289','294','24','1','1','3','295','32',''),
('10463','sql','124','26','nom_de_la_table','f','4','0','296','310','25','3','1','2','311','69',''),
('10464','sql','124','27','tbl_metiers','c','5','0','312','322','26','0','1','0','311','28',''),
('10465','sql','124','28','alias','f','5','0','324','328','26','1','2','1','329','30',''),
('10466','sql','124','29','T1','c','6','0','330','331','28','0','1','0','329','69',''),
('10467','sql','124','30','base','f','5','0','334','337','26','1','3','1','338','69',''),
('10468','sql','124','31','b1','c','6','0','339','340','30','0','1','0','338','69',''),
('10469','sql','124','32','contrainte','f','3','0','355','364','24','1','2','3','365','69',''),
('10470','sql','124','33','egal','f','4','0','366','369','32','2','1','2','370','69',''),
('10471','sql','124','34','champ','f','5','0','371','375','33','2','1','1','376','37',''),
('10472','sql','124','35','T1','c','6','0','377','378','34','0','1','0','376','36',''),
('10473','sql','124','36','chi_id_metier','c','6','0','380','392','34','0','2','0','376','69',''),
('10474','sql','124','37','champ','f','5','0','395','399','33','2','2','1','400','69',''),
('10475','sql','124','38','T0','c','6','0','401','402','37','0','1','0','400','39',''),
('10476','sql','124','39','chx_parent_metier','c','6','0','404','420','37','0','2','0','400','69',''),
('10477','sql','124','40','conditions','f','1','0','442','451','1','1','3','4','452','57',''),
('10478','sql','124','41','et','f','2','0','460','461','40','3','1','3','462','69',''),
('10479','sql','124','42','egal','f','3','0','463','466','41','2','1','2','467','47',''),
('10480','sql','124','43','champ','f','4','0','468','472','42','2','1','1','473','46',''),
('10481','sql','124','44','T0','c','5','2','475','476','43','0','1','0','473','45',''),
('10482','sql','124','45','chi_id_metier','c','5','2','480','492','43','0','2','0','473','69',''),
('10483','sql','124','46',':T0_chi_id_metier','c','4','0','496','512','42','0','2','0','473','69',''),
('10484','sql','124','47','comme','f','3','0','515','519','41','2','2','2','520','52',''),
('10485','sql','124','48','champ','f','4','0','521','525','47','2','1','1','526','51',''),
('10486','sql','124','49','T0','c','5','2','528','529','48','0','1','0','526','50',''),
('10487','sql','124','50','chp_nom_metier','c','5','2','533','546','48','0','2','0','526','69',''),
('10488','sql','124','51',':T0_chp_nom_metier','c','4','0','550','567','47','0','2','0','526','69',''),
('10489','sql','124','52','supegal','f','3','0','570','576','41','2','3','2','577','69',''),
('10490','sql','124','53','champ','f','4','0','578','582','52','2','1','1','583','56',''),
('10491','sql','124','54','T0','c','5','2','585','586','53','0','1','0','583','55',''),
('10492','sql','124','55','chi_id_metier','c','5','2','590','602','53','0','2','0','583','69',''),
('10493','sql','124','56',':metier_mini','c','4','0','606','617','52','0','2','0','583','69',''),
('10494','sql','124','57','complements','f','1','0','630','640','1','2','4','4','641','69',''),
('10495','sql','124','58','trier_par','f','2','0','649','657','57','1','1','3','658','64',''),
('10496','sql','124','59','','f','3','0','649','657','58','2','1','2','659','69',''),
('10497','sql','124','60','champ','f','4','0','660','664','59','2','1','1','665','63',''),
('10498','sql','124','61','T0','c','5','2','667','668','60','0','1','0','665','62',''),
('10499','sql','124','62','chi_id_metier','c','5','2','672','684','60','0','2','0','665','69',''),
('10500','sql','124','63','décroissant','f','4','0','688','698','59','0','2','0','699','69',''),
('10501','sql','124','64','limité_à','f','2','0','711','718','57','2','2','2','719','69',''),
('10502','sql','124','65','quantité','f','3','0','720','727','64','1','1','1','728','67',''),
('10503','sql','124','66',':quantitee','c','4','0','729','738','65','0','1','0','728','69',''),
('10504','sql','124','67','début','f','3','0','741','745','64','1','2','1','746','69',''),
('10505','sql','124','68',':debut','c','4','0','747','752','67','0','1','0','746','69','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 2000 */
