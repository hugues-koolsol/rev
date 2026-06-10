

/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_projets offset 0 (4) */
INSERT INTO tbl_projets (  chi_id_projet ,  chp_nom_projet ,  cht_commentaire_projet ,  che__nur_projet ,  chd__dtm_projet ,  chd__dtc_projet ) VALUES
('1','environnement principal 1','C''est ce projet qui permet de créer d''autres projets
','0','2000-01-01 00:00:00','2000-01-01 00:00:00'),
('2','clone','clone','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('3','ref 3','projet de référence N°3','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000'),
('4','mon projet de test','mon projet de test','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000');
/*================================================================================ FIN BLOC TABLE tbl_projets offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_groupes offset 0 (2) */
INSERT INTO tbl_groupes (  chi_id_groupe ,  chp_nom_groupe ,  chx_parent_groupe ) VALUES
('1','dev','1'),
('2','admin','2');
/*================================================================================ FIN BLOC TABLE tbl_groupes offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_metiers offset 0 (2) */
INSERT INTO tbl_metiers (  chi_id_metier ,  chp_nom_metier ,  chx_parent_metier ) VALUES
('1','dev','1'),
('2','admin','1');
/*================================================================================ FIN BLOC TABLE tbl_metiers offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_acces offset 0 (3) */
INSERT INTO tbl_acces (  chi_id_acces ,  chp_nom_acces ,  chx_groupe_acces ,  chx_metier_acces ,  cht_parametres_acces ,  che_actif_acces ) VALUES
('0','anonymes','1','2','{"le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"à propos\",\"attributs\":{\"data-chi_id_source\":\"1000\",\"data-chp_nom_source\":\"x_ecran_a_propos1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"35\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"à propos\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"79\",\"data-separateur\":\"0\"},\"separateur\":0}]","le_html_ul_li_du_menu":"<li data-chi_id_source=\"1000\" data-chp_nom_source=\"x_ecran_a_propos1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"35\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"à propos\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"79\" data-separateur=\"0\">à propos</li>    "}','1'),
('1','dev','1','1','{"le_html_ul_li_du_menu":"<li data-chi_id_source=\"493\" data-chp_nom_source=\"projets1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"24\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des projets\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"52\" data-separateur=\"0\">projets</li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"31\" data-cht_initialisation_menu=\"T0_che_priorite_tache2(99)\" data-chp_titre_menu=\"Liste des tâches\" data-cht_condition_js_menu=\"this.__ig1.donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(this.__ig1.donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"53\" data-separateur=\"0\">tâches</li><li data-chi_id_source=\"489\" data-chp_nom_source=\"dossiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des dossiers et des fichiers\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"25\" data-separateur=\"0\">dossiers</li><li data-chi_id_source=\"525\" data-chp_nom_source=\"sources1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des sources des programmes\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"27\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"544\" data-chp_nom_source=\"genres1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"22\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des genres de données dans la bdd\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"28\" data-separateur=\"0\">genres</li><li data-chi_id_source=\"541\" data-chp_nom_source=\"bdds1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"11\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des bases\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"29\" data-separateur=\"0\">bases</li><li data-chi_id_source=\"547\" data-chp_nom_source=\"requetes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"12\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des requêtes sur les bases\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"30\" data-separateur=\"0\">requêtes</li><li data-chi_id_source=\"574\" data-chp_nom_source=\"revs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"33\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des revs\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"54\" data-separateur=\"0\">revs</li><li data-chi_id_source=\"577\" data-chp_nom_source=\"travaux1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"34\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des travaux\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"55\" data-separateur=\"0\">travaux</li><li data-liste_des_menus=\"1\">admin<ul><li data-chi_id_source=\"567\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"32\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"this.__ig1.donnees_retournees.chi_id_utilisateur &gt; 0;\" data-cht_condition_menu=\"\nsup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)\" data-chx_autorisation_menu=\"46\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-liste_des_menus=\"1\" data-separateur=\"1\">organisation<ul></ul></li><li data-chi_id_source=\"565\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"14\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des groupes\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"31\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"556\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"15\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des métiers\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"32\" data-separateur=\"0\">métiers</li><li data-chi_id_source=\"558\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"25\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des accès\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"33\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"561\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"18\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des autorisations\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"26\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"563\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"19\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des menus\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"34\" data-separateur=\"0\">menus</li><li data-chi_id_source=\"569\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"17\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"liste des utilisateurs\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet === 1 &amp;&amp; donnees_retournees._CA_ == 1;\" data-cht_condition_menu=\"et(egalstricte(donnees_retournees.chi_id_projet,1),egal(donnees_retournees._CA_,1))\" data-chx_autorisation_menu=\"35\" data-separateur=\"0\">utilisateurs</li><li data-liste_des_menus=\"1\" data-separateur=\"1\">outils génération<ul></ul></li><li data-chi_id_source=\"553\" data-chp_nom_source=\"x_ecran_generer_programmes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"26\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"générer des programmes\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"36\" data-separateur=\"0\">générer</li><li data-chi_id_source=\"572\" data-chp_nom_source=\"x_ecran_generer_souches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"30\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"générer les souches\" data-cht_condition_js_menu=\"donnees_retournees.chi_id_projet &gt; 0;\" data-cht_condition_menu=\"sup(donnees_retournees.chi_id_projet,0)\" data-chx_autorisation_menu=\"51\" data-separateur=\"0\">souches</li><li data-liste_des_menus=\"1\" data-separateur=\"1\">outils convertions<ul></ul></li><li data-chi_id_source=\"520\" data-chp_nom_source=\"x_ecran_rev_vers_js1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de javascript \" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"38\" data-separateur=\"0\">js</li><li data-chi_id_source=\"521\" data-chp_nom_source=\"x_ecran_rev_vers_matrice1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de rev vers matrice\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"37\" data-separateur=\"0\">matrice</li><li data-chi_id_source=\"519\" data-chp_nom_source=\"x_ecran_rev_vers_html1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"21\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"html\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"39\" data-separateur=\"0\">html</li><li data-chi_id_source=\"522\" data-chp_nom_source=\"x_ecran_rev_vers_php1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de php\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"40\" data-separateur=\"0\">php</li><li data-chi_id_source=\"523\" data-chp_nom_source=\"x_ecran_rev_vers_sql1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de sql\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"41\" data-separateur=\"0\">sql</li><li data-chi_id_source=\"518\" data-chp_nom_source=\"x_ecran_rev_vers_css1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de css\" data-cht_condition_js_menu=\"this.__ig1.donnees_retournees.chi_id_utilisateur &gt; 0;\" data-cht_condition_menu=\"sup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)\" data-chx_autorisation_menu=\"42\" data-separateur=\"0\">css</li><li data-chi_id_source=\"524\" data-chp_nom_source=\"x_ecran_rev_vers_txt1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de textes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"44\" data-separateur=\"0\">txt</li><li data-chi_id_source=\"571\" data-chp_nom_source=\"x_ecran_source_vers_programme1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"27\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"source vers programme\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"45\" data-separateur=\"0\">src-&gt;pgm</li></ul></li>    ","le_json_du_menu":"[{\"id_interne\":1,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"projets\",\"attributs\":{\"data-chi_id_source\":\"493\",\"data-chp_nom_source\":\"projets1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"24\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des projets\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"52\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":2,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"tâches\",\"attributs\":{\"data-chi_id_source\":\"1011\",\"data-chp_nom_source\":\"taches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"31\",\"data-cht_initialisation_menu\":\"T0_che_priorite_tache2(99)\",\"data-chp_titre_menu\":\"Liste des tâches\",\"data-cht_condition_js_menu\":\"this.__ig1.donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(this.__ig1.donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"53\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":3,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"dossiers\",\"attributs\":{\"data-chi_id_source\":\"489\",\"data-chp_nom_source\":\"dossiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"9\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des dossiers et des fichiers\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"25\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":4,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sources\",\"attributs\":{\"data-chi_id_source\":\"525\",\"data-chp_nom_source\":\"sources1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"10\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des sources des programmes\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"27\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":5,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"genres\",\"attributs\":{\"data-chi_id_source\":\"544\",\"data-chp_nom_source\":\"genres1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"22\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des genres de données dans la bdd\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"28\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":6,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"bases\",\"attributs\":{\"data-chi_id_source\":\"541\",\"data-chp_nom_source\":\"bdds1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"11\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des bases\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"29\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":7,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"requêtes\",\"attributs\":{\"data-chi_id_source\":\"547\",\"data-chp_nom_source\":\"requetes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"12\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des requêtes sur les bases\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"30\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":8,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"revs\",\"attributs\":{\"data-chi_id_source\":\"574\",\"data-chp_nom_source\":\"revs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"33\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des revs\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"54\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":9,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"travaux\",\"attributs\":{\"data-chi_id_source\":\"577\",\"data-chp_nom_source\":\"travaux1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"34\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des travaux\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"55\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":10,\"id_interne_parent\":0,\"replie\":0,\"contient_des_enfants\":20,\"contenu\":\"admin\",\"attributs\":{\"data-liste_des_menus\":\"1\"},\"separateur\":0},{\"id_interne\":11,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"<svg class=\\\"rev_svg_dans_menu1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-50 -50  100 100\\\"><g style=\\\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\\\" transform=\\\"   \\\"><circle cx=\\\"0\\\" cy=\\\"-10\\\" r=\\\"34\\\"></circle><path d=\\\" M -43 46 C -30 20 30 20 43 46 \\\"></path><circle cx=\\\"-10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><circle cx=\\\"10\\\" cy=\\\"-15\\\" r=\\\"5\\\"></circle><path d=\\\" M -10 0 C -15 10 15 10 10 0\\\"></path><path d=\\\" M 0 -10 V 0\\\"></path><path d=\\\" M -15 -15 H -30\\\"></path><path d=\\\" M 15 -15 H 30\\\"></path><path d=\\\" M -5 -15 c 0 -5 10 -5 10 0\\\"></path></g><path d=\\\" M -50 -50 h 100 v 100 h -100 v -100 \\\" stroke=\\\"rgb(0, 0, 0)\\\" stroke-width=\\\"0\\\" fill=\\\"transparent\\\" stroke-linejoin=\\\"round\\\" stroke-linecap=\\\"round\\\" transform=\\\"\\\" style=\\\"stroke:black;fill:transparent;stroke-width:0.1;\\\"></path></svg>\",\"attributs\":{\"data-chi_id_source\":\"567\",\"data-chp_nom_source\":\"x_ecran_coordonnees1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"32\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"mes coordonnées\",\"data-cht_condition_js_menu\":\"this.__ig1.donnees_retournees.chi_id_utilisateur > 0;\",\"data-cht_condition_menu\":\"\\nsup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)\",\"data-chx_autorisation_menu\":\"46\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":12,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"organisation\",\"attributs\":{\"data-liste_des_menus\":\"1\",\"data-separateur\":\"1\"},\"separateur\":1},{\"id_interne\":13,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"groupes\",\"attributs\":{\"data-chi_id_source\":\"565\",\"data-chp_nom_source\":\"groupes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"14\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des groupes\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"31\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":14,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"métiers\",\"attributs\":{\"data-chi_id_source\":\"556\",\"data-chp_nom_source\":\"metiers1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"15\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des métiers\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"32\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":15,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"accès\",\"attributs\":{\"data-chi_id_source\":\"558\",\"data-chp_nom_source\":\"acces1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"25\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des accès\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"33\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":16,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"autorisations\",\"attributs\":{\"data-chi_id_source\":\"561\",\"data-chp_nom_source\":\"autorisations1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"18\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des autorisations\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"26\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":17,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"menus\",\"attributs\":{\"data-chi_id_source\":\"563\",\"data-chp_nom_source\":\"menus1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"19\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des menus\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"34\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":18,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"utilisateurs\",\"attributs\":{\"data-chi_id_source\":\"569\",\"data-chp_nom_source\":\"utilisateurs1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"17\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"liste des utilisateurs\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet === 1 && donnees_retournees._CA_ == 1;\",\"data-cht_condition_menu\":\"et(egalstricte(donnees_retournees.chi_id_projet,1),egal(donnees_retournees._CA_,1))\",\"data-chx_autorisation_menu\":\"35\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":19,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"outils génération\",\"attributs\":{\"data-liste_des_menus\":\"1\",\"data-separateur\":\"1\"},\"separateur\":1},{\"id_interne\":20,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"générer\",\"attributs\":{\"data-chi_id_source\":\"553\",\"data-chp_nom_source\":\"x_ecran_generer_programmes1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"26\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"générer des programmes\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"36\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":21,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"souches\",\"attributs\":{\"data-chi_id_source\":\"572\",\"data-chp_nom_source\":\"x_ecran_generer_souches1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"30\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"générer les souches\",\"data-cht_condition_js_menu\":\"donnees_retournees.chi_id_projet > 0;\",\"data-cht_condition_menu\":\"sup(donnees_retournees.chi_id_projet,0)\",\"data-chx_autorisation_menu\":\"51\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":22,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"outils convertions\",\"attributs\":{\"data-liste_des_menus\":\"1\",\"data-separateur\":\"1\"},\"separateur\":1},{\"id_interne\":23,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"js\",\"attributs\":{\"data-chi_id_source\":\"520\",\"data-chp_nom_source\":\"x_ecran_rev_vers_js1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"3\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"convertion de javascript \",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"38\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":24,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"matrice\",\"attributs\":{\"data-chi_id_source\":\"521\",\"data-chp_nom_source\":\"x_ecran_rev_vers_matrice1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"2\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"convertion de rev vers matrice\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"37\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":25,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"html\",\"attributs\":{\"data-chi_id_source\":\"519\",\"data-chp_nom_source\":\"x_ecran_rev_vers_html1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"21\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"html\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"39\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":26,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"php\",\"attributs\":{\"data-chi_id_source\":\"522\",\"data-chp_nom_source\":\"x_ecran_rev_vers_php1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"4\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"convertion de php\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"40\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":27,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"sql\",\"attributs\":{\"data-chi_id_source\":\"523\",\"data-chp_nom_source\":\"x_ecran_rev_vers_sql1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"5\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"convertion de sql\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"41\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":28,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"css\",\"attributs\":{\"data-chi_id_source\":\"518\",\"data-chp_nom_source\":\"x_ecran_rev_vers_css1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"6\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"convertion de css\",\"data-cht_condition_js_menu\":\"this.__ig1.donnees_retournees.chi_id_utilisateur > 0;\",\"data-cht_condition_menu\":\"sup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)\",\"data-chx_autorisation_menu\":\"42\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":29,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"txt\",\"attributs\":{\"data-chi_id_source\":\"524\",\"data-chp_nom_source\":\"x_ecran_rev_vers_txt1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"7\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"convertion de textes\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"44\",\"data-separateur\":\"0\"},\"separateur\":0},{\"id_interne\":30,\"id_interne_parent\":10,\"replie\":0,\"contient_des_enfants\":0,\"contenu\":\"src->pgm\",\"attributs\":{\"data-chi_id_source\":\"571\",\"data-chp_nom_source\":\"x_ecran_source_vers_programme1_c.js\",\"data-chp_methode_menu\":\"entree_module\",\"data-chi_id_menu\":\"27\",\"data-cht_initialisation_menu\":\"null\",\"data-chp_titre_menu\":\"source vers programme\",\"data-cht_condition_js_menu\":\"null\",\"data-cht_condition_menu\":\"null\",\"data-chx_autorisation_menu\":\"45\",\"data-separateur\":\"0\"},\"separateur\":0}]"}','1'),
('2','admin','2','2','{
  "le_json_du_menu": [
    {
      "id_interne": 1,
      "id_interne_parent": 0,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "<svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg>",
      "attributs": {
        "data-chi_id_source": "567",
        "data-chp_nom_source": "x_ecran_coordonnees1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "29",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "mon profile",
        "data-cht_condition_js_menu": "this.__ig1.donnees_retournees.chi_id_utilisateur > 0;",
        "data-cht_condition_menu": "\nsup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)",
        "data-chx_autorisation_menu": "49",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 2,
      "id_interne_parent": 0,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "js",
      "attributs": {
        "data-chi_id_source": 520,
        "data-chp_nom_source": "x_ecran_rev_vers_js1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": 36,
        "data-cht_initialisation_menu": null,
        "data-chp_titre_menu": "convertion de javascript ",
        "data-cht_condition_js_menu": null,
        "data-cht_condition_menu": null,
        "data-chx_autorisation_menu": "82",
        "data-separateur": "0"
      },
      "separateur": 0
    }
  ],
  "le_html_ul_li_du_menu": "<li data-chi_id_source=\"567\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"29\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mon profile\" data-cht_condition_js_menu=\"this.__ig1.donnees_retournees.chi_id_utilisateur &gt; 0;\" data-cht_condition_menu=\"\nsup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)\" data-chx_autorisation_menu=\"49\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"520\" data-chp_nom_source=\"x_ecran_rev_vers_js1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"36\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"convertion de javascript \" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"82\" data-separateur=\"0\">js</li>    "
}','1');
/*================================================================================ FIN BLOC TABLE tbl_acces offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_dossiers offset 0 (9) */
INSERT INTO tbl_dossiers (  chi_id_dossier ,  chp_nom_dossier ,  chx_parent_dossier ,  che__nur_dossier ,  chd__dtm_dossier ,  chd__dtc_dossier ) VALUES
('1','','1','2000-01-01 00:00:00','2000-01-01 00:00:00','0'),
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

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (89) */
INSERT INTO tbl_sources (  chi_id_source ,  chp_nom_source ,  cht_rev_source ,  cht_genere_source ,  che_binaire_source ,  chx_dossier_id_source ,  cht_commentaire_source ,  chd__dtm_source ,  chd__dtc_source ,  che__nur_source ,  che_autorisation_globale_source ,  cht_condition_rev_source ,  cht_condition_js_source ,  cht_notification_ko_source ,  che_pour_util_source ,  chp_usage_source ) VALUES
('1','__serveur.js',NULL,NULL,'0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('2','__serveur.ps1',NULL,'','0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('3','__serveur_not_watch.ps1',NULL,'','0','1',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('10','__ig1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('11','__ig1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('12','__fnt1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('13','__fnt1_s.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('14','__fnts_c_et_s_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('15','__rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('16','__worker1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('18','_tri_arbre1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('50','__televersement1_c.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('51','__zip1_s.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('52','_developpement1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('489','dossiers1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('490','dossiers1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('493','projets1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','vous devez être connecté','0','fichier'),
('494','projets1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_utilisateur,0)','this.donnees_retournees.chi_id_utilisateur > 0;','vous devez être connecté','0','fichier'),
('498','_connexion1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('499','_connexion1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('506','w_ast_js_vers_rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('507','w_ast_phpparseur_vers_rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('508','w_ast_postcss_vers_rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('509','w_ast_sqliteparseur_vers_rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('511','w_html_vers_rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('512','w_rev_vers_css1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('513','w_rev_vers_html1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('514','w_rev_vers_js1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('515','w_rev_vers_php1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('516','w_rev_vers_sql1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('517','w_rev_vers_txt1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('518','x_ecran_rev_vers_css1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('519','x_ecran_rev_vers_html1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','vous devez être connecté','0','fichier'),
('520','x_ecran_rev_vers_js1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','vous devez être connecté','0','fichier'),
('521','x_ecran_rev_vers_matrice1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('522','x_ecran_rev_vers_php1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('523','x_ecran_rev_vers_sql1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('524','x_ecran_rev_vers_txt1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('525','sources1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('526','sources1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('527','acorn1_c.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('528','php_parser1_c.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('529','postcss1_c.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('530','sqlite_parser1_c.js',NULL,NULL,'0','7',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('541','bdds1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('542','bdds1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('544','genres1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('545','genres1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('547','requetes1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('548','requetes1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('549','v_svg_bdd1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('550','v_svg_bdd1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('551','x_ecran_concevoir_une_requete1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('552','x_ecran_concevoir_une_requete1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('553','x_ecran_generer_programmes1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('554','x_ecran_generer_programmes1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('556','metiers1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('557','metiers1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('558','acces1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('560','acces1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('561','autorisations1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('562','autorisations1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('563','menus1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('564','menus1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('565','groupes1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('566','groupes1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('567','x_ecran_coordonnees1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('568','x_ecran_coordonnees1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_utilisateur,0)','this.donnees_retournees.chi_id_utilisateur > 0;','vous devez être connecté','0','fichier'),
('569','utilisateurs1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','1','fichier'),
('570','utilisateurs1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','1','fichier'),
('571','x_ecran_source_vers_programme1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.chi_id_utilisateur,0)','this.chi_id_utilisateur > 0;','Vous devez être connecté','0','fichier'),
('572','x_ecran_generer_souches1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('573','revs1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('574','revs1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('576','x_ecran_generer_souches1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('577','travaux1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('578','travaux1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('581','_rev_de_sql_vers_js1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('584','1x1_blanc.png',NULL,NULL,'1','8','120 octets = 70h=112d + 8 caracères de la dernière ligne = 120','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('585','1x1_rouge.png',NULL,NULL,'1','8','120 octets','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('586','1x1_blanc.gif',NULL,NULL,'1','8','35 octets','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('587','1x1_blanc_2.png',NULL,NULL,'1','8','90 octets ( 50h = 80d , 80 + 10 caractères de la dernière ligne )','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('588','1x1_blanc.jpg',NULL,NULL,'1','8','631 octets','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('589','test.txt',NULL,NULL,'1','8',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('593','w_ast_sql_parseur_cst_vers_rev1_.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier'),
('1000','x_ecran_a_propos1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1',NULL,NULL,NULL,'0','fichier'),
('1011','taches1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','
sup(this.chi_id_projet,0)','this.chi_id_projet > 0;','Vous devez sélectionner un projet','0','fichier'),
('1012','taches1_s.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0','sup(this.donnees_retournees.chi_id_projet,0)','this.donnees_retournees.chi_id_projet > 0;','veuillez sélectionner un projet','0','fichier'),
('1013','__navigation1_c.js',NULL,'','0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (53) */
INSERT INTO tbl_autorisations (  chi_id_autorisation ,  chx_source_autorisation ,  chx_acces_autorisation ,  che_pour_sous_liste_autorisation ) VALUES
('25','489','1','0'),
('26','561','1','0'),
('27','525','1','0'),
('28','544','1','0'),
('29','541','1','0'),
('30','547','1','0'),
('31','565','1','0'),
('32','556','1','0'),
('33','558','1','0'),
('34','563','1','0'),
('35','569','1','0'),
('36','553','1','0'),
('37','521','1','0'),
('38','520','1','0'),
('39','519','1','0'),
('40','522','1','0'),
('41','523','1','0'),
('42','518','1','0'),
('44','524','1','0'),
('45','571','1','0'),
('46','567','1','0'),
('49','567','2','0'),
('51','572','1','0'),
('52','493','1','0'),
('53','1011','1','0'),
('54','574','1','0'),
('55','577','1','0'),
('56','568','2','0'),
('57','1012','1','0'),
('58','494','1','0'),
('59','490','1','0'),
('60','526','1','0'),
('61','545','1','0'),
('62','542','1','0'),
('63','549','1','0'),
('64','550','1','0'),
('65','548','1','0'),
('66','551','1','0'),
('67','552','1','0'),
('68','573','1','0'),
('69','578','1','0'),
('70','566','1','0'),
('71','557','1','0'),
('72','560','1','0'),
('73','562','1','0'),
('74','564','1','0'),
('75','570','1','0'),
('76','554','1','0'),
('77','576','1','0'),
('78','568','1','0'),
('79','1000','0','0'),
('81','52','1','0'),
('82','520','2','0');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (29) */
INSERT INTO tbl_menus (  chi_id_menu ,  cht_libelle_menu ,  chp_titre_menu ,  chx_autorisation_menu ,  chp_methode_menu ,  cht_initialisation_menu ,  cht_condition_menu ,  cht_condition_js_menu ) VALUES
('2','matrice','convertion de rev vers matrice','37','entree_module',NULL,NULL,NULL),
('3','js','convertion de javascript ','38','entree_module',NULL,NULL,NULL),
('4','php','convertion de php','40','entree_module',NULL,NULL,NULL),
('5','sql','convertion de sql','41','entree_module',NULL,NULL,NULL),
('6','css','convertion de css','42','entree_module',NULL,'sup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)','this.__ig1.donnees_retournees.chi_id_utilisateur > 0;'),
('7','txt','convertion de textes','44','entree_module',NULL,NULL,NULL),
('9','dossiers','liste des dossiers et des fichiers','25','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0'),
('10','sources','liste des sources des programmes','27','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0'),
('11','bases','liste des bases','29','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0'),
('12','requêtes','liste des requêtes sur les bases','30','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0'),
('14','groupes','liste des groupes','31','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0'),
('15','métiers','liste des métiers','32','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('17','utilisateurs','liste des utilisateurs','35','entree_module',NULL,'et(egalstricte(donnees_retournees.chi_id_projet,1),egal(donnees_retournees._CA_,1))','donnees_retournees.chi_id_projet === 1 && donnees_retournees._CA_ == 1;'),
('18','autorisations','liste des autorisations','26','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('19','menus','liste des menus','34','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('21','html','html','39','entree_module',NULL,NULL,NULL),
('22','genres','liste des genres de données dans la bdd','28','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0'),
('24','projets','liste des projets','52','entree_module',NULL,NULL,NULL),
('25','accès','liste des accès','33','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('26','générer','générer des programmes','36','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('27','src->pgm','source vers programme','45','entree_module',NULL,NULL,NULL),
('29','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mon profile','49','entree_module',NULL,'
sup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)','this.__ig1.donnees_retournees.chi_id_utilisateur > 0;'),
('30','souches','générer les souches','51','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('31','tâches','Liste des tâches','53','entree_module','T0_che_priorite_tache2(99)','sup(this.__ig1.donnees_retournees.chi_id_projet,0)','this.__ig1.donnees_retournees.chi_id_projet > 0;'),
('32','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="34"></circle><path d=" M -43 46 C -30 20 30 20 43 46 "></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:0.1;"></path></svg>','mes coordonnées','46','entree_module',NULL,'
sup(this.__ig1.donnees_retournees.chi_id_utilisateur,0)','this.__ig1.donnees_retournees.chi_id_utilisateur > 0;'),
('33','revs','liste des revs','54','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('34','travaux','liste des travaux','55','entree_module',NULL,'sup(donnees_retournees.chi_id_projet,0)','donnees_retournees.chi_id_projet > 0;'),
('35','à propos','à propos','79','entree_module',NULL,NULL,NULL),
('36','js','convertion de javascript ','82','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (2) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','dev','$2a$10$6OI0hUT7qu/cR0UKQeHOKuti3o7NoRz/Z1BgRxBFLcy0Ep6AExc0q',NULL,'1372','1','2000-01-01 00:00:00','2000-01-01 00:00:00','0','1'),
('2','admin','$2a$10$p4/6Nlf4q6gfmqW3dEXWG.Ha2oLdZVmuFK9lHtEiaNc2jnvdWAFQ.',NULL,'16','2','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','1');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (481) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  che_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ,  chd_une_heure_tache ) VALUES
('1','1','capturer les erreurs php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('2','1','traiter le cookie initial quand il est incomplet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('3','1','mettre un # dans l''url pour pouvoir charger la page initiale','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('4','1','cookies.php en objet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('5','1','données bidon en cookie','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('6','1','404','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('7','1','worker','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('8','1','timer / indicateur socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('9','1','id en vv','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('10','1','fichiers et classes en c_','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('11','1','socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('12','1','limiter le nombre de messages sur l''interface','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('13','1','ne pas afficher le premier message ws ko','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('14','1','maj champ deverminage nouveau','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('15','1','recharger la page paramètres','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('16','1','déverminage en cookie','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('17','1','ctrl F5 après avoir cliqué sur un #','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('18','1','désactiver les boutons quand click','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('19','1','changer mes coordonnées','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('20','1','renommer les variables __x_statut ....','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('21','1','bdd todo','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('22','1','mettre le niveau de déverminage dans le php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('23','1','dump de la base en local','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('24','1','essayer de modifier dynamiquement le css','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('25','1','synchroniser session php / webSochet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('26','1','travaux en batch','99','2026-02-21 11:42:55.900','2000-01-01 00:00:00','0','00_00_00'),
('27','1','gérer les versions js css etc','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('28','1','profils de css','99','2025-11-07 11:00:18.094','2000-01-01 00:00:00','0','00_00_00'),
('29','1','interface : astuces','80','2026-05-11 11:00:23.431','2000-01-01 00:00:00','1','00_00_00'),
('30','1','CREATE UNIQUE INDEX texte_unique ON tbl_taches(chp_texte_tache);','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('31','1','sauvegarder la position dans la liste','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('33','1','sur mobile, ne pas faire de focus sur le premier champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('34','1','pas de webSocket sur ks.app','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('35','1','détecter mobile ( touch )','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('36','1','highlight des menus','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('37','1','lors de la première connexion, initialiser les tailles des css en fonction de la taille de l''écran','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('38','1','sur ipad, supprimer les double click pour agrandir

if( ecran_tactile===true && genre_safari===true && genre_crios === false)

//https://stackoverflow.com/a/42162450/3717718','99','2025-10-22 13:22:11.821','2000-01-01 00:00:00','0','00_00_00'),
('40','1','marges gauches et droites','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('41','1','se reconnecter au webso','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('42','1','ajouter le niveau de deboggage dans le websocket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('43','1','déverminage serveur wso','99','2026-05-05 13:19:17.878','2000-01-01 00:00:00','0','00_00_00'),
('44','1','Prévenir le ws quand on se déconnecte','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('45','1','coccinelle déverminage
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform=""><path d=" M -38 42 L -32 38 L -35 28 L -28 20 M -24 -12 L -30 -12 L -35 -1 L -41 -1 M -19 -18 L -30 -24 L -32 -31 M -7 -37 L -13 -43 M 11 -37 L 17 -43 M 23 -18 L 34 -24 L 36 -31 M 28 -12 L 34 -12 L 38 -1 L 44 -1 M 31 22 L 38 28 L 36 38 L 42 42" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path><path d=" M -17 -19 C -18 -46 22 -46 20 -19" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:slategray;stroke-width:1;fill-opacity:1;"></path><path d=" M -17 -20 C -24 -14 -30 -2 -30 7 C -30 22 -20 44 2 44 c 18 0 31 -20 31 -36 C 34 -4 28 -13 20 -20 c 0 1 -16 1 -18 1 C -1 -19 -17 -19 -17 -20" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:red;stroke-width:1;fill-opacity:1;"></path><ellipse cx="-26" cy="4" rx="3" ry="6" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(30 44 25 )" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="43" cy="-54" rx="3" ry="6" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(1 40) rotate(-32 0 0)  " style="stroke:rgb(0, 0, 0);fill:white;stroke-width:1;"></ellipse><ellipse cx="-17" cy="10" rx="6" ry="8" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="20" cy="10" rx="6" ry="8" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="-11" cy="-10" rx="3" ry="3" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;"></ellipse><ellipse cx="14" cy="-10" rx="3" ry="3" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="32" cy="7" rx="4" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="rotate(-40 40 74 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><ellipse cx="-12" cy="75" rx="4" ry="5" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="translate(6 -15 ) rotate(30 57 89 )" style="stroke:rgb(0, 0, 0);fill:black;stroke-width:1;stroke-opacity:1;fill-opacity:1;opacity:1;"></ellipse><path d=" M 1 -18 V 43" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></path></g><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.01;"></rect></svg>','99','2026-05-11 10:58:55.746','2000-01-01 00:00:00','2','00_00_00'),
('46','1','http://localhost/frev/rev_1/__client/?a=1','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('47','1','page rev vers matrice','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('48','1','initialiser la zone rev avec le localstorage','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('49','1','mettre le rendu en js
NON trop compliqué, le garder en php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('50','1','conv js','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('51','1','rev vers js','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('52','1','zone d''édition textarea','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('53','1','cookie socket','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('54','1','optimiser les temps de chargement','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('55','1','traiter les messages d''erreur','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('56','1','placer le curseur dans une textarea','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('57','1','conv html','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('58','1','conv php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('59','1','conv php nikic','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('60','1','traiter les messages d''erreur de php','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('61','1','sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('62','1','css','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('63','1','projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('64','1','bouton retour à la liste','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('65','1','bug lien interne après changement de version','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('66','1','scroll horizontal sur menu haut','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('67','1','bases','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('68','1','autorisations

se connecter à 

http://localhost/frev/rev_1/__client/#c_rev_vers_mat1.page1(),indice_menu(50),maj_interface2(modifier(%20id(vv_txtarea_rev1),composante(value),avec(valeur_de_localstorage(''zones_sauvegard%C3%A9es'',''ls_rev1''))))

sans être connecté

#c_pages1.recupere_la_page_d_accueil()
#c_pages1.recupere_la_page_d_aide()
#c_pages1.recupere_la_page_de_connexion()','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('69','1','dossiers','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('70','1','activer / désactiver le bouton du menu','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('71','1','id parent de dossier avec <dialog>','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('72','1','chemin complet d''un dossier','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('73','1','vérifier qu''un dossier n''a pas d''enfants avant de le supprimer','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('74','1','transmettre les donnes_retournees aux sql 
et mettre un message d''erreur en pile','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('75','1','ne pas enregistrer un dossier sur lui même ou au dessus de lui même','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('76','1','bib php dans un autre répertoire','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('77','1','autocapitalize="off" sur les champs input','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('79','1','remettre le bouton paramètres quand on se déconnecte','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('80','1','table des bugs','20','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('81','1','faire une sauvegarde d''un fichier supprimé','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('82','1','supprimer une projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('83','1','ajouter les champs 
nut numero technique de modification
dtm date technique de modification
dtc date technique de création','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('84','1','renommer un dossier','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('85','1','quand on clique sur 🖐, mettre la zone en haut de l''écran','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('86','1','optimiser les tableaux des matrices et des caractères','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('87','1','gestion des dossiers pour les utilisateurs autres que 1','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('88','1','sortable pour svg','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('89','1','cliquer en dehors du "dialog" pour le fermer','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('90','1','dupliquer une table
non, il suffit de recopier la table du rev','99','2026-04-22 14:29:26.230','2000-01-01 00:00:00','0','00_00_00'),
('91','1','remplacer cible par projet','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('92','1','quand on modifie le nom d''une table
alors modifier aussi le nom_de_la_table_pour_l_index dans l''index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('93','1','corriger auto increment','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('94','1','ajouter le type du meta dans les sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('96','1','reprendre les commentaires meta dans sql','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('97','1','mettre les valeurs
            a_une_valeur_par_defaut(0),
            la_valeur_par_defaut_est_caractere(0),
            valeur_par_defaut( ''''),
dans le champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('98','1','afficher/masquer les champs dans le svg','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('99','1','corriger le bug : après tri des champs, on pert l''index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('100','1','ne pas masquer un champ si c''est une référence, une clé, un auto_increment
ou si le champ appartient à un index','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('101','1','ajouter des tests de validité sur le svg base','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('102','1','sauvegarder une table sans champ','99','2000-01-01 00:00:00','2000-01-01 00:00:00','0','00_00_00'),
('103','1','requetes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('104','1','mettre le dump de la base dans la liste des bases','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('105','1','''prefixe_bdd'' PREFIXE_BDD','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('106','1','positionnement du bouton supprimer les messages','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('107','1','ajouter le bouton "ajouter un commentaire"','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('108','1','améliorer l''éditeur de requêtes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('109','1','renommer le champ dtm_tache de la table requetes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('110','1','changer le rev du champ quand on le renomme','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('111','1','remplacer les sql_nn par des sql_iii(nn,)','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('112','1','fonction pour gérer les dépendances
sql_dependances()','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('113','1','renommer un champ d''index','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('114','1','dans le concepteur de requete, mettre les champs mis à jour pour un update sur plusieurs lignes','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('115','1','mettre en place des dépendances de champ sur des bases externes','99','2026-03-29 11:56:31.090','2000-01-01 00:00:00.000','0','00_00_00'),
('116','1','ajouter le test des dépendances dans les php delete','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('117','1','renommer une table dans le base','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('118','1','sources','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('119','1','modifier les updates','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('120','1','en mode déverminage, afficher le numero de reuqete liste','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('121','1','pourquoi certains fichiers sql sont supprimés','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('122','1','icone supprimer 🗑','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('123','1','rev de texte','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('124','1','recompiler les updates','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('125','1','intégrer la table rev dans la base physique','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('126','1','projet 2','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('127','1','reprendre les meta des sql','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('128','1','compiler les requêtes à partir de la liste','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('129','1','remplacer select_liste par liste_ecran','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('130','1','compiler les sources
html
js
php
sql
css
texte
rev','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('132','1','virer chp_chemin_dossier','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('133','1','flag dossier binaire','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('134','1','begin transaction','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('135','1','ordonner un champ sur le schema uniquement','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('136','1','mettre le rev de travail de la base dans le rev','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('137','1','intégrer sql_parser_cst.js pour pouvoir faire passer :
alter table t DROP column a;

select * from toto;
/*
  alter table tata DROP column tot;
*/','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('138','1','sql_parser_cst

select
create table
create index
insert
update
delete
commit
rollback
begin transaction
','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('139','1','ajouter un source binaire ( ico )','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('141','1','drapeau répertoire contient des sources générés','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('142','1','virer che_binaire_dossier','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('143','1','copier un source dans un autre répertoire','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('144','1','virer chp_type_source','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('145','1','supprimer les éléments inutils du dump de la base','99','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','00_00_00'),
('146','1','sql_29, sql_30

champ_numero_de_revision
gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))

      gerer_champ_date_creation( champ( `chd__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chd__dtm_tache` ) , format(23))


champ_date_modification(`chd__dtm_tache`)
flag champ_date_modification','99','2025-06-13 17:04:41.468','2000-01-01 00:00:00.000','4','00_00_00'),
('147','1','date_default_timezone_set en fonction de l''utilisateur','19','2025-07-29 17:40:19.125','2000-01-01 00:00:00.000','1','00_00_00'),
('148','1','dans projet 2, enregistrer les matrices rev

bases

requetes

sources html sur disque
sources php sur disque
sources js sur disque
sources sql sur disque
sources css sur disque
sources rev sur disque
sources txt sur disque NON','99','2025-06-15 09:10:42.213','2025-06-13 17:05:45.323','10','00_00_00'),
('149','1','socket : .ts en .js','99','2025-06-16 09:01:24.706','2025-06-16 09:01:24.706','0','00_00_00'),
('150','1','renommer les champs chi__num en che__nur','99','2025-06-17 11:45:14.619','2025-06-17 10:08:32.544','3','00_00_00'),
('151','1','lors de la compilation d''un php, 
mettre les sources au format SQL des requetes sql dans le source php','99','2025-06-17 14:11:31.120','2025-06-17 10:40:44.982','1','00_00_00'),
('152','1','décomposer les fichiers session de php pour le wso','99','2025-06-19 18:22:27.003','2025-06-17 11:54:31.823','2','00_00_00'),
('154','1','déterminer le répertoire des requêtes dans le projet','99','2025-06-19 18:21:27.820','2025-06-19 18:21:27.820','0','00_00_00'),
('155','1','quand on crée un nouveau projet, 
il faut créer un clone de la base système dans lequel travailler','99','2025-06-20 10:44:39.371','2025-06-20 10:44:39.371','0','00_00_00'),
('156','1','quand on se déconnecte d''un projet, il faut supprimer les menus bases ...','99','2025-06-20 10:47:23.986','2025-06-20 10:47:23.986','0','00_00_00'),
('157','1','ajouter répertoire des requetes au niveau du projet
et utiliser cette donnée...','99','2025-06-21 16:57:19.818','2025-06-21 13:36:20.422','2','00_00_00'),
('158','1','quand on ajoute un champ fils, dans le dessin svg, le lien ne n''affiche pas correctement','99','2025-06-23 12:39:41.331','2025-06-23 12:39:41.331','0','00_00_00'),
('159','1','supprimer les projets >2 dans le projet 2','99','2025-06-23 16:18:28.927','2025-06-23 16:18:28.927','0','00_00_00'),
('160','1','comparer les sources entre rev1 et 2 et faire un bouton copier','99','2025-06-23 16:41:49.995','2025-06-23 16:41:49.995','0','00_00_00'),
('161','1','dans rev_2 importer un source de rev1','99','2025-06-24 09:36:54.845','2025-06-24 09:36:54.845','0','00_00_00'),
('162','1','voir message conversion dans le php (322727) [1742]','99','2025-06-24 13:49:09.573','2025-06-24 13:49:09.573','0','00_00_00'),
('163','1','moncrlf','99','2025-06-25 10:22:08.728','2025-06-25 10:22:08.728','0','00_00_00'),
('164','1','quand on active un projet, il faut charger les sources sql','99','2025-06-25 11:05:15.874','2025-06-25 11:05:15.874','0','00_00_00'),
('165','1','inporter/exporter les fichiers de rev 1 2','99','2025-06-25 12:06:19.837','2025-06-25 12:06:19.837','0','00_00_00'),
('166','1','rechercher un source dont le nom contient __

select * from tbl_sources where chp_nom_source like ''%\_%'' ESCAPE ''\'';','99','2025-06-25 14:42:17.528','2025-06-25 12:10:16.103','2','00_00_00'),
('167','1','double \ dans le .bat','99','2025-06-25 14:14:55.962','2025-06-25 14:14:55.962','0','00_00_00'),
('168','1','faire un 
comme1(%xxx)
comme2(xxx%)
comme3(xxx)','18','2025-06-26 11:55:00.122','2025-06-26 11:34:12.549','1','00_00_00'),
('170','1','initialiser ecran standard d''une table','99','2026-02-21 11:43:00.445','2025-06-26 15:40:44.916','0','00_00_00'),
('171','1','gérer les menus','99','2025-07-10 16:37:39.788','2025-06-26 17:24:34.522','1','00_00_00'),
('172','1','gérer les utilisateurs et les groupes et les métiers','99','2025-06-27 10:25:45.031','2025-06-27 10:13:04.627','1','00_00_00'),
('173','1','gérer les paramètres ( liste des constantes )
type de champbdd','99','2026-02-21 14:02:59.782','2025-06-27 10:13:20.409','3','00_00_00'),
('174','1','mettre en github
','99','2025-06-27 11:21:35.817','2025-06-27 11:21:35.817','0','00_00_00'),
('175','1','faire un dump de la base du projet 3','99','2025-06-28 12:41:16.455','2025-06-28 12:40:58.038','1','00_00_00'),
('176','1','supprimer les afr','99','2025-06-30 10:17:00.146','2025-06-30 10:17:00.146','0','00_00_00'),
('177','1','créer la base appli dans un autre répertoire que les bases de données','99','2025-07-01 09:20:32.962','2025-07-01 09:20:32.962','0','00_00_00'),
('178','1','ajouter un dictionnaire de données(genre)
permet de spécifier les champs date, date_heure, lien vers parent, id','99','2025-08-10 10:41:29.780','2025-07-02 10:46:53.367','4','00_00_00'),
('179','1','corriger fichier_des_dependances','99','2025-07-02 11:46:09.399','2025-07-02 11:46:09.399','0','00_00_00'),
('180','1','corriger rev_php_des_sql','99','2025-07-03 09:44:55.718','2025-07-03 09:44:55.718','0','00_00_00'),
('181','1','quand on ajoute une tâche et on revient à la liste, réordonner les tâches','99','2025-07-03 09:46:02.668','2025-07-03 09:46:02.668','0','00_00_00'),
('182','1','svg lien ajouter gauche droite','99','2025-07-06 09:27:00.963','2025-07-04 08:22:18.236','1','00_00_00'),
('183','1','lisad :

lister 
insérer 
sélectionner 
altérer/amender 
détruire','99','2025-11-07 11:01:07.145','2025-07-06 13:23:42.485','1','00_00_00'),
('184','1','bug quand on crée un nouvelle requête, le php c''est pas créé sur disque','99','2025-07-07 10:35:44.602','2025-07-07 10:35:44.602','0','00_00_00'),
('185','1','gérer les pages','99','2025-07-07 12:54:11.814','2025-07-07 12:54:11.814','0','00_00_00'),
('186','1','gérer les accès des utilisateurs','99','2025-07-08 15:13:34.065','2025-07-08 15:12:51.611','1','00_00_00'),
('187','1','supprimer chx_groupe_utilisateur chx_metier_utilisateur','99','2025-07-09 09:41:52.450','2025-07-09 09:41:52.450','0','00_00_00'),
('188','1','ajouter NULL si chx = '''' sur les insert et delete','99','2025-07-09 13:55:32.628','2025-07-09 13:54:53.645','1','00_00_00'),
('189','1','Lors de l''insertion dans la table des pages, vérifier l''existance de méthode du source','99','2025-07-09 15:40:56.820','2025-07-09 14:58:59.943','1','00_00_00'),
('190','1','supprimer chp_lien_rev_page','99','2025-07-09 15:22:03.310','2025-07-09 15:22:03.310','0','00_00_00'),
('191','1','rechercher sql_24','99','2025-07-09 15:50:13.424','2025-07-09 15:50:13.424','0','00_00_00'),
('192','1','bouton pop up pour voir le contenu d''une requête à partir de la liste des requêtes ','99','2025-07-09 17:42:12.440','2025-07-09 15:50:33.376','1','00_00_00'),
('193','1','menu outils qui contient les convertisseurs
<select>
    <option>outils</option>
    <option>matrice</option>
    <option>html</option>
    <option>js</option>
    <option>php</option>
    <option>sql</option>
    <option>css</option>
    <option>texte</option>
</select>','99','2025-07-22 14:39:11.892','2025-07-09 16:26:01.691','2','00_00_00'),
('194','1','optimiser le transfert pour la matrice de sql_parser_cst.js	','99','2025-07-09 16:31:23.198','2025-07-09 16:31:23.198','0','00_00_00'),
('195','1','dans svg, ajouter un les boutons pour les bases/tables/champs des tables liées','99','2025-07-09 17:43:23.330','2025-07-09 17:43:23.330','0','00_00_00'),
('197','1','le caractère 🟥 ne passe pas sur ma tablette
faire un carré svg
⬛🔲🗨◻⏹','99','2025-07-21 17:02:50.100','2025-07-10 09:58:19.160','4','00_00_00'),
('198','1','dans les pages, proposer une liste de méthodes quand on choisir un source','99','2025-07-10 10:17:39.087','2025-07-10 10:17:39.087','0','00_00_00'),
('199','1','compiler le prérequis du menu','99','2025-07-14 08:40:32.303','2025-07-12 08:22:58.170','1','00_00_00'),
('200','1','quand on modifie une page, il faut recompiler les menus','99','2025-07-15 13:49:22.638','2025-07-15 13:49:22.638','0','00_00_00'),
('201','1','ajouter les traitements de 
nom_champ_dans_parent1
nom_libelle_dans_parent1
dans les sous listes comme dans c_sources1.php','99','2025-07-15 17:21:51.755','2025-07-15 16:12:27.924','1','00_00_00'),
('202','1','bibliothèque de svg','99','2025-12-15 10:28:22.175','2025-07-16 10:47:25.371','1','00_00_00'),
('203','1','renuméroter les requetes à partir de 101','99','2025-07-17 15:09:37.352','2025-07-17 10:11:14.041','2','00_00_00'),
('204','1','sql_5, suppression de rev, ne dépend de pernonne','99','2025-07-17 12:14:57.332','2025-07-17 12:07:20.343','1','00_00_00'),
('205','1','bug quand on renumérote une requete il y a 2 fois <?php','99','2025-07-18 10:50:06.307','2025-07-18 10:50:06.307','0','00_00_00'),
('206','1','renuméroter un source','99','2026-05-02 17:53:15.258','2025-07-24 12:50:11.622','0','00_00_00'),
('207','1','remplacer php par deno','99','2026-02-20 12:49:10.351','2025-07-27 09:47:14.801','1','00_00_00'),
('208','1','chp_commentaire_projet => chTTTTT_commentaire_projet','99','2025-07-29 11:37:04.000','2025-07-29 11:37:04.000','0','00_00_00'),
('209','1','ajouter un bouton enregistrer dans la modification d''un source','99','2025-07-29 16:48:06.039','2025-07-29 15:44:38.467','1','00_00_00'),
('210','1','travailler la redirection si on n''est pas authentifié','99','2025-07-29 17:52:34.498','2025-07-29 17:52:34.498','0','00_00_00'),
('211','1','ajouter une référence à la pagination dans les listes','99','2025-07-31 11:56:33.898','2025-07-31 09:07:20.616','1','00_00_00'),
('212','1','liens internes en #','99','2025-07-31 13:52:57.967','2025-07-31 13:52:57.967','0','00_00_00'),
('213','1','Gérer les versions
nouvelle version','99','2025-08-01 14:32:15.239','2025-08-01 14:32:15.239','0','00_00_00'),
('214','1','renommer un champ

supprimer un champ
ajouter un champ

quand on renomme un champ de la base 1 de rev_1 il faur renommer les champs de toutes les bases rev_n
Exemple chp_commentaire_projet => cht_commentaire_projet','99','2025-08-02 14:19:05.165','2025-08-01 15:08:43.406','2','00_00_00'),
('216','1','intégrer mon tri','99','2025-08-03 10:03:21.913','2025-08-03 10:03:21.913','0','00_00_00'),
('217','1','bug réordonner champs sur projet 3','99','2025-08-05 14:13:00.676','2025-08-05 14:13:00.676','0','00_00_00'),
('218','1','tri_arbre','99','2025-08-08 11:02:44.128','2025-08-08 11:02:44.128','0','00_00_00'),
('219','1','source_requete

            ''sql0'' => $sql0 ,
            ''bdd'' => $GLOBALS[__BDD][BDD_NUMERO_1],
','99','2025-08-08 15:09:52.677','2025-08-08 12:41:17.737','3','00_00_00'),
('220','1','ajouter un champ espece base et taille_espece','99','2025-08-09 12:38:17.257','2025-08-09 12:33:15.508','2','00_00_00'),
('222','1','tbl_pages
tbl_menus
chx_acces_page sql 188 189 190 191 198 300 303 304

un accès = métier groupe

autorisation = acces source

menu = autorisation methode du source

afr : quand le source a appel le source b, 
il faut une autorisation déléguée sur la méthode appelée','99','2025-08-12 14:42:35.283','2025-08-12 12:44:14.024','7','00_00_00'),
('223','1','interface : pouvoir agrandit la zone de message ( vv_supprimer_les_messages_3 )','99','2025-08-27 08:02:50.904','2025-08-15 14:23:33.195','3','00_00_00'),
('224','1','dans ajouter un formule de requete 
nouvelle requete liste
clic sur condition
il n''y a que de comme','99','2025-08-16 13:28:59.257','2025-08-16 13:28:59.257','0','00_00_00'),
('225','1','dans requete update
sur formule critere
mettre le curseur au bon endroit et écrire le champ correctement','99','2025-08-17 16:44:59.342','2025-08-17 16:44:59.342','0','00_00_00'),
('226','1','dans svg, corriger le déplacement d''une table ','99','2025-08-18 08:00:20.749','2025-08-18 08:00:20.749','0','00_00_00'),
('227','1','renuméroter un genre','99','2025-08-18 11:17:14.312','2025-08-18 11:17:14.312','0','00_00_00'),
('228','1','trier les genres','99','2025-08-18 16:43:49.623','2025-08-18 16:43:49.623','0','00_00_00'),
('229','1','corriger le bouton du menu','99','2025-08-20 15:27:36.476','2025-08-20 15:27:36.476','0','00_00_00'),
('230','1','lien virtuel sur la table tache','99','2025-08-21 09:44:34.241','2025-08-21 09:44:34.241','0','00_00_00'),
('231','1','masquer le menu organisation quand on est sur un projet autre que 1','99','2025-08-22 08:41:02.119','2025-08-21 13:34:35.910','1','00_00_00'),
('233','1','bug liste des taches avec plusieurs id','99','2025-08-22 08:40:37.293','2025-08-22 08:40:37.293','0','00_00_00'),
('234','1','supprimer chx_acces_menu chx_parent_menu','99','2025-08-22 09:28:50.759','2025-08-22 09:28:50.759','0','00_00_00'),
('235','1','popover
https://mdn.github.io/dom-examples/popover-api/
https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes/popover','99','2025-11-11 11:25:13.653','2025-08-23 12:35:31.595','1','00_00_00'),
('236','1','un nom de source ou un nom de dossier ne doit contenir que les caractères a-z,0-9,._','99','2025-08-26 17:01:30.665','2025-08-23 15:09:07.105','0','00_00_00'),
('237','1','virer les compteur de sessions compteur_session_php1','99','2025-08-24 09:10:19.979','2025-08-24 09:07:32.258','1','00_00_00'),
('238','1','virer sortable','99','2025-08-24 09:44:25.590','2025-08-24 09:44:25.590','0','00_00_00'),
('239','1','virer champ_date_creation , champ_date_modification , champ_numero_de_revision , 

virer
      gerer_champ_numero_de_revision( champ( `chi__nur_tache` ))
      gerer_champ_date_creation( champ( `chd__dtc_tache` ) , format(23)),
      gerer_champ_date_modification( champ( `chd__dtm_tache` ) , format(23))

','99','2025-08-26 16:16:12.402','2025-08-26 15:17:41.241','0','00_00_00'),
('240','1','lisad

insertion / ajout
suppression / delete
modification / alteration

distinction_pour_isad
 d''un utilisateur / d''un accès / d''un projet / d''une tâche / d''un cheval

distinction_pour_liste

liste des utilisateurs
liste des chevaux
liste des tâches
liste des projets



suppression 
modification 

de l''utilisateur / de l''accès / du projet / de la tâche / du cheval



suppression/modification de la tâche
suppression du cheval
suppression du projet

','99','2025-11-07 10:59:04.871','2025-08-28 13:30:48.719','0','00_00_00'),
('241','1','virer nom_long_du_champ
nom_court_du_champ
et garder nom_bref_du_champ','99','2025-11-07 13:35:22.305','2025-08-28 17:42:38.976','0','00_00_00'),
('242','1','indicateur requete souche','99','2025-09-03 15:51:11.166','2025-08-31 09:04:03.909','0','00_00_00'),
('243','1','time stamp c (création) ou timestamp a (alteration)

che_est_tsc_genre
che_est_tsm_genre','99','2025-09-03 15:51:07.883','2025-09-01 12:50:05.454','0','00_00_00'),
('244','1','ajouter un nom autorisation construit automatiquement pour déterminer le libelle lien','14','2025-09-04 09:38:08.890','2025-09-04 09:38:08.890','0','00_00_00'),
('246','1','ajouter un meta libelle lien','99','2025-09-04 17:25:45.403','2025-09-04 10:47:55.252','0','00_00_00'),
('247','1','ajouter les tests sur les editions/créations de champs','99','2025-11-07 10:58:08.476','2025-09-04 17:26:41.178','0','00_00_00'),
('248','1','quand on affecte un numero de genre <100, on le copie dans les autres environnements','15','2025-09-06 10:10:02.768','2025-09-05 08:53:48.856','0','00_00_00'),
('249','1','écran création genre

insérer(
   valeurs(
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
      affecte(champ(`chp_espece_genre`),:chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:cht_parmis_genre),
      affecte(champ(`che_est_tsc_genre`),:che_est_tsc_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:che_est_tsm_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   )
)','99','2026-02-14 18:19:27.607','2025-09-05 08:58:06.995','0','00_00_00'),
('250','1','ajouter un indicateur de critere de recherche pour liste_ecran','99','2025-09-05 12:51:01.330','2025-09-05 09:01:53.623','0','00_00_00'),
('251','1','remplacer afficher_champ_dans_svg par masquer_champ_dans_svg','99','2025-09-05 11:24:14.821','2025-09-05 10:24:34.492','0','00_00_00'),
('252','1','dans le svg, gérer est_libelle_lien au niveau de la table','99','2025-09-05 12:10:26.981','2025-09-05 11:53:41.245','0','00_00_00'),
('253','1','ajouter un indicateur de tri pour les requetes souches liste_ecran','99','2025-09-05 14:56:46.160','2025-09-05 12:50:49.009','0','00_00_00'),
('254','1','ajouter sens_tri_liste_ecran ','99','2025-09-05 14:56:52.296','2025-09-05 13:38:23.645','0','00_00_00'),
('255','1','ajouter un genre priorite avec position 99','99','2025-11-07 10:57:44.980','2025-09-05 14:56:01.345','0','00_00_00'),
('256','1','integer -(2^63) == -9223372036854775808 and maximum is 2^63 - 1 == 9223372036854775807
20char

float 1.7976931348623157e+308 and 4.9406564584124654e-324
24 char avec le -

$a= ''-9223372036854775807'' < ''-9223372036854775808'';

9 223 372 036 854 775 807
  999 999 999 999 999 999
1 000 000 000 000 000 000','13','2026-01-30 13:48:07.929','2025-09-05 16:44:43.607','0','00_00_00'),
('257','1','traiter le integer(2) pour priorité','99','2025-09-09 10:22:31.674','2025-09-06 16:13:30.347','0','00_00_00'),
('258','1','est_utilisateur => est_session','99','2025-09-08 07:47:32.581','2025-09-06 17:41:27.816','0','00_00_00'),
('259','1','ajouter positif dans les genres INTEGER','12','2025-09-08 12:46:55.496','2025-09-08 12:46:55.496','0','00_00_00'),
('260','1','gérer "mes tâches" avec valeur de session','99','2025-11-05 07:55:51.279','2025-09-09 13:24:16.968','0','00_00_00'),
('261','1','générer les requêtes souches','80','2025-12-21 10:24:24.144','2025-09-09 16:03:18.381','0','00_00_00'),
('263','1','remplacer __js_des_sql par __liste_des_sql','99','2025-10-04 07:11:13.006','2025-10-01 15:43:10.781','0','00_00_00'),
('264','1','test_fonctions_de_c_fonctions1
test_fonctions_de___fonctions1','99','2025-11-07 10:57:51.842','2025-10-02 17:08:46.737','0','00_00_00'),
('265','1','corriger le svg dans site003','99','2025-10-06 17:19:30.221','2025-10-04 07:11:25.810','0','00_00_00'),
('266','1','virer methode3','99','2025-10-06 17:19:33.523','2025-10-05 09:06:55.633','0','00_00_00'),
('267','1','écran requetes

liste ecran sans souche
sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete),
         comme(champ(`T0`,`chp_type_requete`),:T0_chp_type_requete),
         comme(champ(`T0`,`cht_rev_requete`),:T0_cht_rev_requete),
         infegal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete2),
         comme(champ(`T0`,`cht_commentaire_requete`),:T0_cht_commentaire_requete),
         egal(champ(`T0`,`che_est_souche_requete`),:T0_che_est_souche_requete)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','99','2026-02-15 10:42:15.944','2025-10-06 17:23:00.098','0','00_00_00'),
('268','1','ajouter les liste_du_menu0','99','2025-10-10 08:17:44.911','2025-10-08 18:00:23.823','0','00_00_00'),
('269','1','map(mise au point) requetes jointure_gauche','99','2025-10-10 11:15:59.534','2025-10-10 07:48:27.251','0','00_00_00'),
('270','1','changer 
maj_tester_les_dependances_dans_le_php
en
maj_NE_PAS_tester_les_dependances_dans_le_php','99','2025-10-24 17:57:35.170','2025-10-10 09:14:29.555','0','00_00_00'),
('271','1','virer interface1.module1
__X_CLE_APPLICATION _CA_
__x_signaux __xsi','99','2025-10-24 16:34:56.067','2025-10-10 09:16:17.047','0','00_00_00'),
('272','1','changer
sur _ base_principale
sur _ base_principale','99','2026-02-14 18:17:09.054','2025-10-10 09:20:56.229','0','00_00_00'),
('273','1','groupes, métier, accès vérifier que 
si id=1, parent=1
','99','2025-10-24 16:33:27.323','2025-10-10 14:20:35.430','0','00_00_00'),
('276','1','dossiers 2','99','2025-10-17 11:32:04.357','2025-10-12 11:36:06.622','0','00_00_00'),
('277','1','requete 180 sur les utilisateurs','99','2025-10-23 13:49:36.457','2025-10-17 11:32:22.172','0','00_00_00'),
('278','1','bidouille base
brave Pafr   genre safari true  ipad ou iphone true
safari afr   genre safari true  ipad ou iphone true
chrome afr   genre safari true  ipad ou iphone true


interdire le zoom
crios = false 
safari true
ipad iphone true




bidouille tri
brave pafr
safari afr
chrome afr

','99','2025-10-22 13:22:13.338','2025-10-18 16:20:18.602','0','00_00_00'),
('279','1','env2','99','2025-10-22 08:49:08.159','2025-10-20 08:45:14.029','0','00_00_00'),
('280','1','redirect quand non connecté','99','2025-10-24 13:13:22.119','2025-10-20 13:29:31.147','0','00_00_00'),
('281','1','créer un genre zone source rev 
data-editeur1="rev"

et un genre zone source programme

data-editeur1="source_editeur1"','99','2025-10-21 13:06:47.836','2025-10-20 17:38:00.920','0','00_00_00'),
('282','1','ajouter une zone de particulatités aux genres','99','2025-10-21 10:12:50.729','2025-10-21 07:42:30.023','0','00_00_00'),
('283','1','bouton pg_bas','99','2025-10-21 13:06:22.833','2025-10-21 10:52:47.310','0','00_00_00'),
('284','1','indicateur sur bouton modifier','99','2025-10-21 12:26:11.328','2025-10-21 11:03:13.329','0','00_00_00'),
('285','1','exporter les genres dans les autres envs de dev','99','2025-10-21 17:38:38.597','2025-10-21 13:55:32.503','0','00_00_00'),
('286','1','ne_pas_supprimer_id_un','99','2025-10-23 13:49:54.611','2025-10-22 16:08:24.131','0','00_00_00'),
('287','1','profile de couleur
couleurs de fond
hsb 
h = teinte 0 -> 359
s = saturation 0 très clair -> 100 pleine
b = briance 100

hwb(151 58% 0% / 1);
hue whiteness blackness','99','2025-10-24 12:23:52.173','2025-10-23 15:30:30.466','0','00_00_00'),
('288','1','fin de réception des message, activer le menu','99','2025-10-24 16:28:25.476','2025-10-24 13:13:12.327','0','00_00_00'),
('289','1','renommer __j_20251024_185700_ en __j_20251024_185700_','99','2025-10-26 06:56:23.260','2025-10-24 18:57:51.084','0','00_00_00'),
('290','1','afr 
rev_3 : env de départ d''un nouveau projet

','99','2025-12-15 12:31:00.332','2025-10-26 07:02:39.935','0','00_00_00'),
('291','1','dans une requete delete, 
vérifier que pour tester les dépendances, on a bien une référence au champ chi_id
Exemple 105, 114, 170','99','2025-10-26 08:28:52.573','2025-10-26 07:29:50.078','0','00_00_00'),
('292','1','le bouton loupe doit commencer à zéro','99','2025-10-26 10:01:09.571','2025-10-26 07:31:27.160','0','00_00_00'),
('293','1','copier le contenu d''une zone input , de text area
insérer/remplacer ou insérer/ajouter dans une zone coller','99','2025-10-29 13:16:53.685','2025-10-26 14:14:30.906','0','00_00_00'),
('294','1','dossier des requêtes','99','2025-10-29 13:16:52.154','2025-10-27 07:11:49.851','0','00_00_00'),
('295','1','migrer 
aller_a_la_ligne1
aller_a_la_position1 


dans __fnt1','99','2025-10-30 16:18:43.655','2025-10-29 15:34:51.243','0','00_00_00'),
('296','1','icognito / masked svg pour masquer la zone message','99','2025-10-30 16:45:39.587','2025-10-30 07:48:30.339','0','00_00_00'),
('297','1','les menus en div
https://mdn.github.io/dom-examples/popover-api/
https://mdn.github.io/dom-examples/popover-api/nested-popovers/','99','2025-11-03 13:33:25.706','2025-10-30 16:47:27.831','0','00_00_00'),
('298','1','autorisations coté serveur à faire sur le projet 3','99','2025-11-04 16:35:00.693','2025-10-31 07:30:47.745','0','00_00_00'),
('299','1','masquer les messages


<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 0  70 64.75">
 <g stroke="rgb(0, 0, 0)" style="stroke:red;fill:transparent;stroke-width:1;">
  <path d=" M -23 27 C -20 20 -14 0 -10 0 C -8 0 -3 5 0 5 C 3 5 8 0 10 0 C 15 0 20 20 23 27 C 20 27 -20 27 -23 27 " style="fill:red"></path>
  <path stroke-width="3" d=" M -35 33  C -31 33 31 33 35 33"></path>
  <circle cx="-17" cy="53" r="11.75" style="stroke-width:3;"></circle>
  <circle cx="17" cy="53" r="11.75" style="stroke-width:3;"></circle>
  <path d=" M -5 52 C -2 50 2 50 5 52 style=" stroke-width:3;"=""></path>
 </g>
</svg>
','99','2026-05-11 08:58:14.006','2025-11-02 10:31:29.357','0','00_00_00'),
('300','1','dans le projet 3 "les tâches " voir le lien vers l''utilisateur','99','2025-11-04 16:34:45.472','2025-11-04 10:08:45.737','0','00_00_00'),
('301','1','taille de la sous fenêtre','99','2025-11-04 11:53:47.354','2025-11-04 11:39:50.934','0','00_00_00'),
('302','1','pouvoir changer l''utilisateur courant','11','2025-11-04 11:41:17.193','2025-11-04 11:41:17.193','0','00_00_00'),
('303','1','commentaire
abrégé
éclaircissement
annotation
bavardage
cancan
chronique
commérage
exégèse
explication
guide
histoire
interprétation
livre
médisance
mémento
mémoire
mémorandum
note
notes
observation
paraphrase
potin
propos
racontar
remarque
remarques','80','2025-11-04 14:03:50.063','2025-11-04 14:03:42.309','0','00_00_00'),
('304','1','supprimer les liens vers projet dans la plupart des tables de rev_1','99','2025-11-06 13:44:45.345','2025-11-04 15:40:42.129','0','00_00_00'),
('305','1','virer 
est_critere_recherche_liste_ecran
ordre_tri_liste_ecran
sens_tri_liste_ecran_decroissant','99','2025-11-04 15:56:53.220','2025-11-04 15:42:51.882','0','00_00_00'),
('306','1','menus trop à gauche','99','2025-11-05 17:42:41.448','2025-11-05 07:54:25.634','0','00_00_00'),
('307','1','faire un defilement vers le haut apres avoir mis a jour le contenu principal','99','2025-11-05 09:16:46.340','2025-11-05 07:55:01.770','0','00_00_00'),
('308','1','menu au dessus de svg','99','2025-11-07 08:53:06.718','2025-11-05 07:56:32.290','0','00_00_00'),
('309','1','dans l''env 2, maj de l''ordre des menus','99','2025-11-06 08:44:15.918','2025-11-05 07:59:23.398','0','00_00_00'),
('310','1','mettre un bouton pour effacer le contenu d''un champ filtre','99','2025-11-05 08:30:00.431','2025-11-05 08:01:34.250','0','00_00_00'),
('311','1','passer un paramètre de filtre dans les sous fenêtres','51','2025-11-06 13:53:42.197','2025-11-05 08:20:12.514','0','00_00_00'),
('312','1','générer un programme sans requete update ou insert','99','2025-11-05 16:59:26.462','2025-11-05 08:48:34.349','0','00_00_00'),
('313','1','sélecteur de couleur','50','2025-11-07 08:54:49.333','2025-11-07 08:54:41.769','0','00_00_00'),
('314','1','ajouter au niveau des champs un abrégé','99','2025-11-07 13:35:02.529','2025-11-07 12:06:34.239','0','00_00_00'),
('316','1','renuméroter les requêtes de rev_1 pour qu''elles soient alignées sur rev_4

318,142,380 autorisation insert 

134.177.375 groupes delete
176,133,374 groupes update
174.132.373 groupes insert
131,175     groupes select
173,130     goupes listes

129,187     métier delete
127,186,372 métier update
184,126.371 métier insert
125.185     métier select
124.183.370 métier liste
123.182.369 utilisateur
122.181.368 utilisateur
121,180,367 utilisateur
119,178.365 utilisateur
118.139,364 utilisateur
117,154.363
116.162.362
115,161,361 sources
114,131,360  131 dispo

104 352
105 353
106 354
147 108 note 1°]
110 119 356   119 dispo

111,130,357   130 dispo
112,128,358   128 dispo
113,129,359   129 dispo

1°]
la 108 n''est utilisée nulle part, on l''efface
modifier(
   valeurs(affecte(champ(`chp_parametres_utilisateur`),:n_chp_parametres_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','99','2026-02-14 18:19:44.220','2025-11-09 08:53:39.337','0','00_00_00'),
('317','1','mettre le nom d''utilisateur en sha1 ?
Non, c''est complètement idiot !','99','2025-12-11 12:47:18.804','2025-11-10 08:29:25.743','0','00_00_00'),
('319','1','voir un enregistrement','99','2026-03-11 17:11:00.680','2025-11-11 11:24:58.393','0','00_00_00'),
('320','1','ajouter dans les genres un nom contraint
NON un nom de dossier ou un nom de fichier suffira','99','2025-11-15 07:59:23.017','2025-11-14 08:45:22.829','0','00_00_00'),
('321','1','traiter les boutons svg en ligne','99','2025-11-15 12:40:56.939','2025-11-14 09:23:02.178','0','00_00_00'),
('322','1','bug tri sur mobile','99','2025-11-15 09:03:41.606','2025-11-15 08:00:18.680','0','00_00_00'),
('323','1','dossier des éléments générés','99','2026-02-20 12:49:20.159','2025-11-15 09:35:01.222','0','00_00_00'),
('324','1','imposer une méthode pour un menu','99','2025-11-15 12:40:47.846','2025-11-15 10:11:28.573','0','00_00_00'),
('325','1','modifier le requête 153 dans rev_1','99','2025-11-15 11:41:24.761','2025-11-15 11:39:21.909','0','00_00_00'),
('326','1','aligner les sources rev_1 et rev_4','99','2025-12-10 14:58:29.749','2025-11-15 12:41:49.373','0','00_00_00'),
('327','1','svg poubelle
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><g><path d=" M -28 -43 C -5 -36 11 -45 23 -38  C 23 -20 26 12 26 36 C 23 29 15 30 5 30 C -6 30 -15 32 -21 32 C -22 17 -18 -23 -29 -42" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:darkgreen;fill:lime;stroke-width:6;"></path><circle cx="-18" cy="29" r="10" stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:6;"></circle><circle cx="-29" cy="-43" r="4" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:4;"></circle></g></svg>','99','2026-05-11 08:59:04.453','2025-11-16 14:50:50.178','0','00_00_00'),
('328','1','symbole vider
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d=" M -50 -50 H 50 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path><path d=" M 0 -34 C 5 -34 11 -33 15 -32 L 22 -41 L 33 -41 L 23 -26 C 27 -20 30 -15 30 0 C 30 20 17 34 0 34 C -5 34 -10 33 -14 30 L -22 41  L -33 41 L -23 26 C -26 19 -30 16 -30 0 C -30 -20 -17 -34 0 -34 M -21 0 C -21 9 -20 14 -18 18 C -9 4 0 -9 10 -23 C 7 -25 4 -26 0 -26 C -11 -26 -21 -12 -21 0 M 18 -18 C 6 0 -3 13 -9 23 C -6 25 -4 26 0 26 C 11 26 21 12 21 0 C 21 -9 20 -14 18 -18" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:lime;stroke-width:4;"></path></svg>','99','2026-05-11 09:00:29.162','2025-11-19 14:54:51.617','0','00_00_00'),
('330','1','virer ⎘ 🗑 ✎','99','2025-11-30 08:05:33.590','2025-11-30 07:38:24.928','0','00_00_00'),
('331','1','virer cht_complements_menu','99','2025-12-01 16:38:47.277','2025-12-01 16:16:14.521','0','00_00_00'),
('332','1','ajouter la référence des insert/update/select/liste dans le js généré','99','2025-12-10 14:58:28.227','2025-12-02 08:52:43.777','0','00_00_00'),
('333','1','git','99','2025-12-23 08:29:27.643','2025-12-15 12:31:19.368','0','00_00_00'),
('334','1','ajouter un champ table_reference de requête','99','2025-12-16 15:26:02.509','2025-12-16 12:43:15.811','0','00_00_00'),
('335','1','popup d''exemple d''appel de select en php pour une requête','99','2025-12-19 10:51:52.719','2025-12-16 15:25:58.058','0','00_00_00'),
('336','1','deno cron , batch de compilation 
','99','2026-02-06 08:57:49.554','2025-12-21 11:50:31.552','0','00_00_00'),
('337','1','deno','99','2026-01-30 15:38:20.876','2025-12-21 11:50:48.949','0','00_00_00'),
('338','1','traiter 
          INSERT OR IGNORE INTO \`tbl_projets\`(
','10','2026-01-22 12:50:51.814','2026-01-03 12:38:51.325','0','00_00_00'),
('339','1','sauvegarder la base système du projet 3','99','2026-01-30 07:23:53.863','2026-01-24 17:03:02.699','0','00_00_00'),
('340','1','lors du tri des menus dans rev_2 c''est le fichier dans rev_1/fichiers_generes qui est mis à jour','99','2026-01-28 07:33:27.828','2026-01-24 17:14:47.823','0','00_00_00'),
('341','1','remplacer les [''xxx''] par [xxx]
const __xst=''__xst'';
const __xva=''__xva'';
const __xsi=''__xsi'';
const __xac=''__xac'';
','99','2026-01-25 12:04:43.429','2026-01-25 08:12:07.382','0','00_00_00'),
('342','1','supprimer
166,160,
quand on supprime une requête xxx il faut aussi supprimer le fichier sql_xxx','99','2026-01-25 14:39:51.946','2026-01-25 09:02:53.330','0','00_00_00'),
('343','1','dépendances lors de la suppression','99','2026-01-26 12:43:24.190','2026-01-25 10:48:31.355','0','00_00_00'),
('344','1','inclure le texte du sql dans le source lors de la compilation','99','2026-01-25 14:13:24.849','2026-01-25 12:13:17.134','0','00_00_00'),
('345','1','faire un dump et une reprise de la base en séquentiel','99','2026-01-26 10:32:44.224','2026-01-25 15:58:30.669','0','00_00_00'),
('346','1','mettre en option l''accès aux nom de la base b1 dans les requetes sql','99','2026-01-26 14:31:54.162','2026-01-26 11:43:13.283','0','00_00_00'),
('347','1','dans les projets autres que 1, tester 
les dépendances des requêtes sql dans le code cad
vérifier que les sql_iii() ne contiennent pas une requête à effacer

Exemple pour 110

appelf(
   element(this.__ig1),
   nomf(sql_iii),
   p(110),
   p(criteres110),
   p(donnees_retournees),
   p(__db1)
)','99','2026-03-08 09:16:11.848','2026-01-26 12:44:13.176','0','00_00_00'),
('348','1','redirect quant on n''est pas connecté','99','2026-03-03 10:57:30.919','2026-01-27 09:23:34.608','0','00_00_00'),
('349','1','const readable = /*test*/''a'';','99','2026-01-28 07:30:34.276','2026-01-27 13:57:03.873','0','00_00_00'),
('350','1','autorisations sur les accès serveur','99','2026-02-22 09:09:06.827','2026-01-28 07:33:03.312','0','00_00_00'),
('351','1','performances de l''insert du programme sql_parser_cst1.js dans la table rev
on fait un max de 10 000 inserts à la fois
Tant pis pour les perfs','99','2026-01-28 13:24:25.130','2026-01-28 07:36:15.027','0','00_00_00'),
('352','1','NON
faire un fichier contenant les chemins relatifs du projet','99','2026-02-21 14:02:43.102','2026-01-28 15:31:08.195','0','00_00_00'),
('353','1','ajouter ON UPDATE CASCADE sur tbl_source

REFERENCES departments(department_id) ON UPDATE CASCADE','99','2026-05-02 17:53:10.041','2026-01-28 16:04:48.722','0','00_00_00'),
('354','1','
sur base 2

.headers on
.mode csv
.output ../__fichiers_binaires/missions.csv
select * from missions;
.quit

chi_id_mission,fld_nom_mission,fld_date_debut_mission,fld_date_fin_mission,fld_id_client_mission,fld_description_mission,fld_environnement_technique_mission,fld_nom_bref_mission,fld_id_commercial_mission
1,"Responsable technique",2001-11-01,2005-12-31,11,"Responsable informatique et télécommunications
","W2000 server,
Exchange,
Pershing: macros Excel
macros word pour etudes,
macros word pour flash,
bureautique,
Configuration logicielle et installation des PC,
Bloomberg,
Reuters,
firewall,
téléphonie,
Colt,
France Télécom","Rsp tech",4
8,"Interface Base média",2003-11-20,2003-12-19,19,"Interface Base Media","PHP MySql, sun",BaseMedia,4
9,"Interface Base mobiles",2003-12-22,2003-12-30,19,"Interface de gestion de la base des téléphones mobiles de plurimedia","php MySql",BaseMobiles,4
29,test,,,25,"description 
test 0
test 1 '' ""€"" 
test 2 test",test,test,4



===============================


sur base 1
.headers on
.mode csv
.output ../__fichiers_binaires/rpps.csv
select * from rpps;
.quit

numero_de_ligne,type_d_identifiant_pp,identifiant_pp,identification_nationale_pp,code_civilite_d_exercice,libelle_civilite_d_exercice,code_civilite,libelle_civilite,nom_d_exercice,prenom_d_exercice,code_profession,libelle_profession,code_categorie_professionnelle,libelle_categorie_professionnelle,code_type_savoir_faire,libelle_type_savoir_faire,code_savoir_faire,libelle_savoir_faire,code_mode_exercice,libelle_mode_exercice,numero_siret_site,numero_siren_site,numero_finess_site,numero_finess_etablissement_juridique,identifiant_technique_de_la_structure,raison_sociale_site,enseigne_commerciale_site,complement_destinataire__coord__structure_,complement_point_geographique__coord__structure_,numero_voie__coord__structure_,indice_repetition_voie__coord__structure_,code_type_de_voie__coord__structure_,libelle_type_de_voie__coord__structure_,libelle_voie__coord__structure_,mention_distribution__coord__structure_,bureau_cedex__coord__structure_,code_postal__coord__structure_,code_commune__coord__structure_,libelle_commune__coord__structure_,code_pays__coord__structure_,libelle_pays__coord__structure_,telephone__coord__structure_,telephone_2__coord__structure_,telecopie__coord__structure_,adresse_e_mail__coord__structure_,code_departement__structure_,libelle_departement__structure_,ancien_identifiant_de_la_structure,autorite_d_enregistrement,code_secteur_d_activite,libelle_secteur_d_activite,code_section_tableau_pharmaciens,libelle_section_tableau_pharmaciens,code_role,libelle_role,code_genre_activite,libelle_genre_activite
2,8,10000001494,810000001494,,,MME,Madame,GRANDISSON,JACQUELINE,50,Sage-Femme,C,Civil,,,"",,,"",,,,,"",,,,,,,,,,,,,,,,,,,,,,,,CNOSF//,,,"",,,,,
3,8,10000001866,810000001866,DR,Docteur,M,Monsieur,TELCHID,CHRISTIAN,40,Chirurgien-Dentiste,C,Civil,,,"",,L,"Lib,indép,artis,com",,,,,R10000002521234,"Cabinet du Dr TELCHID",,,,46,,,,"BOULEVARD DELGRES",,"97130 CAPESTERRE BELLE EAU",97130,97107,Capesterre-Belle-Eau,,,,,,,,,410000001866001,ONCD/ONCD/ONCD,SA07,"Cabinet individuel","",,FON-01,"Titulaire de cabinet",GENR01,"Activité standard de soin ou de pharmacien"
4,8,10000002179,810000002179,DR,Docteur,M,Monsieur,PIQUION,HENRI,40,Chirurgien-Dentiste,C,Civil,,,"",,,"",,,,,"",,,,,,,,,,,,,,,,,,,,,,,,ONCD//,,,"",,,,,


===============================

sqlite> .headers on
sqlite> .mode csv
sqlite> .output ../output.csv
sqlite> select * from prestations;
sqlite> .quit

fld_id_prestation,fld_nom_prestation,fld_date_prestation,fld_type_prestation,fld_qte_prestation,fld_id_affectation_prestation,fld_heure_debut_prestation,fld_visa_commercial_prestation,fld_qte_facturee_prestation,fld_cout_prestation,fld_tva_prestation,fld_id_facture_prestation,fld_cntupd_prestation
2,"Pershing + portable bhusson + office 2000 US Gregoire",2002-11-08,HORAIRE,3.5,1,15:00:00,1,1.5,75.0,19.6,2,0
3,"Installation de Reuters Messaging avec py + outlook BH",2002-11-07,HORAIRE,7,1,08:30:00,1,0.5,75.0,19.6,2,0


===============================


.output path/to/your/backup.sql
.dump
exit

.output path/to/employees.sql
.dump employees
quit

.output path/to/structure.sql
.schema
quit

.mode insert
.output path/to/data.sql
SELECT * FROM employees;
','51','2026-03-28 17:54:48.407','2026-01-30 07:21:59.529','0','00_00_00'),
('355','1','utiliser les chemins en "dur" et mettre en "dur" les dossiers principaux dans la màj des dossiers','99','2026-03-03 10:59:10.216','2026-01-30 07:24:11.021','0','00_00_00'),
('356','1','mettre les bases dans le dossier __bases_de_donnees','99','2026-01-30 09:26:42.052','2026-01-30 07:24:43.618','0','00_00_00'),
('357','1','renommer __client1 en __programmes','99','2026-01-30 09:26:40.200','2026-01-30 07:25:12.194','0','00_00_00'),
('358','1','supprimer che_contient_genere_dossier','99','2026-01-30 09:41:43.875','2026-01-30 09:23:56.032','0','00_00_00'),
('359','1','a+=/**/''b'';','99','2026-01-30 15:36:08.199','2026-01-30 09:26:23.689','0','00_00_00'),
('360','1','virer chx_dossier_id_basedd','99','2026-01-30 13:14:00.570','2026-01-30 09:44:51.869','0','00_00_00'),
('361','1','virer les anciens e-c-h-o php','99','2026-01-30 13:55:51.717','2026-01-30 10:08:12.036','0','00_00_00'),
('362','1','mettre les messages dans les __ig1
donnees_retournees[__xsi] donnees_retournees.__xsi
this.__ig1.__xsi

','99','2026-02-03 07:48:39.136','2026-02-02 10:03:14.569','0','00_00_00'),
('363','1','distinguer les messages techniques et les messages utilisateur','99','2026-05-11 11:00:39.700','2026-02-03 07:48:50.531','0','00_00_00'),
('364','1','supprimer tous les jobs terminés','99','2026-02-03 10:16:18.326','2026-02-03 07:49:32.733','0','00_00_00'),
('365','1','pour les projets autres que 1, 
mettre le rev du source en base lors de la compilation cron','99','2026-02-03 12:39:32.101','2026-02-03 10:17:57.068','0','00_00_00'),
('366','1','compiler les requetes','99','2026-02-05 07:40:04.842','2026-02-03 10:56:39.198','0','00_00_00'),
('367','1','voir dans l''utilisation de la requete 398 
pourquoi chd_dtc_travail n''était pas mis dans le programme standart
Reponse : il falait utiliser le genre dtm à la place du genre dtc','99','2026-02-05 14:04:47.761','2026-02-04 16:59:55.238','0','00_00_00'),
('368','1','recherche de 398 dans les tâches','99','2026-02-05 08:23:57.523','2026-02-05 08:11:59.447','0','00_00_00'),
('369','1','compilation de 398 en ligne différent de celle en cron','99','2026-02-05 14:04:35.754','2026-02-05 08:12:38.065','0','00_00_00'),
('370','1','utiliser le nouveau module commun pour génération des js sql','99','2026-02-06 08:57:40.928','2026-02-05 08:22:08.734','0','00_00_00'),
('371','1','compilation de acorn dans rev_2
OK','99','2026-02-05 14:05:52.153','2026-02-05 11:31:01.404','0','00_00_00'),
('372','1','nouveau projet 3','9','2026-02-17 09:12:56.571','2026-02-06 08:58:11.783','0','00_00_00'),
('373','1','renuméroter un dossier','99','2026-02-07 10:15:05.889','2026-02-07 07:52:40.873','0','00_00_00'),
('374','1','changer
        this.__ig1.ouvrir_bdd( donnees_retournees.chi_id_projet
        this.__ig1.ouvrir_bdd( options_generales.base_de_travail
','99','2026-02-07 17:14:06.339','2026-02-07 10:19:42.744','0','00_00_00'),
('375','1','ajouter un drapeau actif aux utilisateurs','99','2026-02-14 10:50:45.983','2026-02-08 09:09:10.418','0','00_00_00'),
('376','1','ajouter le nombre de connexions','99','2026-02-20 15:36:29.279','2026-02-09 11:10:39.046','0','00_00_00'),
('377','1','vérifier le nom de la méthode du menu','99','2026-02-09 14:24:54.067','2026-02-09 12:37:47.959','0','00_00_00'),
('378','1','à voir, ce n''est pas la peine de mettre un lien entre la table des travaux et la table des utilisateurs
supprimer le lien chx_utilisateur_travail et ajouter cht_utilisateur_travail

faire dans la table systeme 3 :
insert into tbl_utilisateurs( chi_id_utilisateur , chx_acces_utilisateur , chp_nom_de_connexion_utilisateur ) values ( 1 , 1 , '''');','99','2026-03-03 10:58:57.172','2026-02-09 14:55:11.957','0','00_00_00'),
('379','1','ajouter un drapeau actif aux accès et tester ce drapeau lors de la connexion','99','2026-02-21 11:35:07.843','2026-02-14 10:50:40.471','0','00_00_00'),
('380','1','dupliquer une tâche','99','2026-02-14 11:27:49.227','2026-02-14 10:51:01.317','0','00_00_00'),
('381','1','retirer des requêtes
meta( sur_ base_ principale(1))
base_ de_ reference(1),','99','2026-02-15 10:18:00.856','2026-02-14 18:05:47.923','0','00_00_00'),
('382','1','supprimer champ cht _php _requete','99','2026-02-15 14:37:53.127','2026-02-15 08:20:02.477','0','00_00_00'),
('383','1','mettre des pauses dans le cron pour le relancer toutes les 3 secondes','99','2026-02-16 08:48:10.428','2026-02-15 08:31:15.645','0','00_00_00'),
('385','1','supprimer les références aux champs php','99','2026-03-03 10:58:51.656','2026-02-15 10:47:51.004','0','00_00_00'),
('386','1','renommer 
liste_du_menu0 
en 
entree_module

pour limiter les méthodes des menus pour admin
vérifier que la méthode appartient bien au module

page_coordonnees => entree_coordonnees
page_generer_le_programme1','99','2026-02-19 11:10:52.412','2026-02-17 09:46:05.564','0','00_00_00'),
('387','1','tri des menus,
bouton ajouter nouveau dossier
bouton editer_dossier
ajouter une entrée séparateur
','99','2026-02-19 17:46:38.799','2026-02-18 12:55:37.603','0','00_00_00'),
('388','1','empécher de mettre une branche sous un séparateur','99','2026-02-20 11:07:41.146','2026-02-20 10:21:39.444','0','00_00_00'),
('389','1','afficher id lors de l''édition','99','2026-02-23 11:55:18.392','2026-02-22 09:13:05.427','0','00_00_00'),
('391','1','gérer la version','99','2026-03-02 14:45:41.907','2026-02-23 11:54:48.687','0','00_00_00'),
('392','1','renommer
chx_dossier_menus_projet
en
chx_dossier_generes_projet

et
chx_dossier_js_projet
en
chx_dossier_programmes_projet','99','2026-02-23 13:50:51.659','2026-02-23 12:06:33.733','0','00_00_00'),
('393','1','extraire vers github','99','2026-02-26 11:05:33.196','2026-02-23 12:08:21.767','0','00_00_00'),
('394','1','websocket','99','2026-05-11 08:59:41.777','2026-02-23 12:18:37.966','0','00_00_00'),
('395','1','bouton back','99','2026-02-26 12:08:02.989','2026-02-23 12:35:55.820','0','00_00_00'),
('396','1','supprimer cht_js_ requete et 376','99','2026-02-26 11:05:28.059','2026-02-24 10:15:34.374','0','00_00_00'),
('398','1','hexdump 1x1.png -C
00000000  89 50 4e 47 0d 0a 1a 0a  00 00 00 0d 49 48 44 52  |.PNG....  ....IHDR|
00000010  00 00 00 01 00 00 00 01  08 02 00 00 00 90 77 53  |........  ......wS|
00000020  de 00 00 00 01 73 52 47  42 00 ae ce 1c e9 00 00  |.....sRG  B.......|
00000030  00 04 67 41 4d 41 00 00  b1 8f 0b fc 61 05 00 00  |..gAMA..  ....a...|
00000040  00 09 70 48 59 73 00 00  0e c3 00 00 0e c3 01 c7  |..pHYs..  ........|
00000050  6f a8 64 00 00 00 0c 49  44 41 54 18 57 63 f8 ff  |o.d....I  DAT.Wc..|
00000060  ff 3f 00 05 fe 02 fe a7  35 81 84 00 00 00 00 49  |.?......  5......I|
00000070  45 4e 44 ae 42 60 82                              |END.B`.           |','99','2026-02-28 08:52:14.641','2026-02-27 12:18:44.029','0','00_00_00'),
('399','1','téléverser un fichier','99','2026-03-01 12:08:30.841','2026-02-28 08:54:06.360','0','00_00_00'),
('400','1','nouveau projet 4','8','2026-03-03 10:39:46.375','2026-03-03 10:39:46.375','0','00_00_00'),
('401','1','virer
chx_dossier_programmes_projet
chx_dossier_requetes_projet
chx_dossier_generes_projet
chx_dossier_bdds_projet
chx_dossier_programmes_projet','99','2026-03-03 15:55:12.617','2026-03-03 11:56:56.210','0','00_00_00'),
('402','1','bug dans compilation de _connexion1_s car 0o777 = 511 dans la requete 358
chp_valeur_rev est de type texte donc il faut utiliser autre chose que sq1()','99','2026-03-06 14:02:49.061','2026-03-05 17:23:57.314','0','00_00_00'),
('403','1','le compilation de _connexion_s ne fonctionne pas sur rev_4 et le batch ne le met pas en erreur','99','2026-03-06 09:29:07.770','2026-03-06 09:03:21.680','0','00_00_00'),
('404','1','supprimer les requetes
102
insérer(
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
)  

103
sélectionner(
   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   )
)  

104
insérer(
   valeurs(affecte(champ(`chi_id_groupe`),:chi_id_groupe),affecte(champ(`chp_nom_groupe`),:chp_nom_groupe),affecte(champ(`chx_parent_groupe`),:chx_parent_groupe)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   )
)  

105
insérer(
   valeurs(affecte(champ(`chi_id_metier`),:chi_id_metier),affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   )
)  
106
insérer(
   valeurs(affecte(champ(`chi_id_acces`),:chi_id_acces),affecte(champ(`chp_nom_acces`),:chp_nom_acces),affecte(champ(`chx_groupe_acces`),:chx_groupe_acces),affecte(champ(`chx_metier_acces`),:chx_metier_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,base(b1)))
      )
   )
)  ','99','2026-03-07 09:53:24.680','2026-03-06 14:18:18.163','0','00_00_00'),
('405','1','ajouter dans l''écran supprimer pour les zones texte les boutons :
copier,agrandir,retrécir
comme sur l''écran tâches','99','2026-03-09 11:34:54.712','2026-03-06 14:25:32.082','0','00_00_00'),
('406','1','lors de la sauvegarde du modèle de la base, sauvegarder aussi la base dans la table rev','99','2026-03-08 09:14:29.435','2026-03-07 10:10:04.018','0','00_00_00'),
('407','1','sql 357
            if(e.stack.indexOf(''API misuse'')>=0){
                console.log(''%c\nATTENTION API MISUSE, un await est il manquant quelquepart ?\n\n''+e.stack,''color:red;background-color:yellow;'')
            }
','99','2026-03-08 09:14:23.624','2026-03-07 12:48:04.740','0','00_00_00'),
('408','1','normaliser les erreurs dans les js sql','99','2026-03-09 10:48:14.629','2026-03-08 09:15:07.899','0','00_00_00'),
('409','1','Lors de la lecture d''un create table sql :

reprendre le libelle du champ

ajouter dans meta
            typologie(cht),
supprimer 
         type(int,1),
         

CREATE TABLE `rpps` (
  `numero_de_ligne` INTEGER,
  `type_d_identifiant_pp` int(1) DEFAULT NULL,
  `identifiant_pp` varchar(13) NOT NULL ,
  `identification_nationale_pp` varchar(14) DEFAULT NULL,
  `code_civilite_d_exercice` varchar(2) DEFAULT NULL ,
  `libelle_civilite_d_exercice` varchar(12) DEFAULT NULL,
  `code_civilite` varchar(5) DEFAULT NULL,
  `libelle_civilite` varchar(14) DEFAULT NULL,
  `nom_d_exercice` varchar(47) DEFAULT NULL ,
  `prenom_d_exercice` varchar(35) DEFAULT NULL ,
  `code_profession` int(2) NOT NULL ,
  `libelle_profession` varchar(41) DEFAULT NULL ,
  `code_categorie_professionnelle` varchar(1) NOT NULL ,
  `libelle_categorie_professionnelle` varchar(11) DEFAULT NULL ,
  `code_type_savoir_faire` varchar(4) DEFAULT NULL,
  `libelle_type_savoir_faire` varchar(25) DEFAULT NULL,
  `code_savoir_faire` varchar(6) NOT NULL,
  `libelle_savoir_faire` varchar(79) DEFAULT NULL,
  `code_mode_exercice` varchar(1) DEFAULT NULL,
  `libelle_mode_exercice` varchar(12) NOT NULL,
  `numero_siret_site` varchar(17) DEFAULT NULL,
  `numero_siren_site` varchar(11) DEFAULT NULL,
  `numero_finess_site` varchar(11) DEFAULT NULL,
  `numero_finess_etablissement_juridique` varchar(11) DEFAULT NULL,
  `identifiant_technique_de_la_structure` varchar(22) NOT NULL,
  `raison_sociale_site` varchar(197) DEFAULT NULL,
  `enseigne_commerciale_site` varchar(60) DEFAULT NULL,
  `complement_destinataire__coord__structure_` varchar(48) DEFAULT NULL,
  `complement_point_geographique__coord__structure_` varchar(48) DEFAULT NULL,
  `numero_voie__coord__structure_` varchar(5) DEFAULT NULL,
  `indice_repetition_voie__coord__structure_` varchar(4) DEFAULT NULL,
  `code_type_de_voie__coord__structure_` varchar(5) DEFAULT NULL,
  `libelle_type_de_voie__coord__structure_` varchar(34) DEFAULT NULL,
  `libelle_voie__coord__structure_` varchar(46) DEFAULT NULL,
  `mention_distribution__coord__structure_` varchar(47) DEFAULT NULL,
  `bureau_cedex__coord__structure_` varchar(46) DEFAULT NULL,
  `code_postal__coord__structure_` varchar(6) DEFAULT NULL,
  `code_commune__coord__structure_` varchar(6) DEFAULT NULL,
  `libelle_commune__coord__structure_` varchar(54) DEFAULT NULL,
  `code_pays__coord__structure_` varchar(6) DEFAULT NULL,
  `libelle_pays__coord__structure_` varchar(10) DEFAULT NULL,
  `telephone__coord__structure_` varchar(22) DEFAULT NULL,
  `telephone_2__coord__structure_` varchar(18) DEFAULT NULL,
  `telecopie__coord__structure_` varchar(18) DEFAULT NULL,
  `adresse_e_mail__coord__structure_` varchar(72) DEFAULT NULL,
  `code_departement__structure_` varchar(1) DEFAULT NULL,
  `libelle_departement__structure_` varchar(1) DEFAULT NULL,
  `ancien_identifiant_de_la_structure` varchar(18) DEFAULT NULL,
  `autorite_d_enregistrement` varchar(25) DEFAULT NULL,
  `code_secteur_d_activite` varchar(5) DEFAULT NULL,
  `libelle_secteur_d_activite` varchar(64) DEFAULT NULL,
  `code_section_tableau_pharmaciens` varchar(2) NOT NULL,
  `libelle_section_tableau_pharmaciens` varchar(255) DEFAULT NULL,
  `code_role` varchar(14) DEFAULT NULL,
  `libelle_role` varchar(255) DEFAULT NULL,
  `code_genre_activite` varchar(14) DEFAULT NULL,
  `libelle_genre_activite` varchar(255) DEFAULT NULL


);','99','2026-03-14 10:07:57.037','2026-03-09 13:57:44.311','0','00_00_00'),
('410','1','dans __fnt1 :
VACUUM
PRAGMA journal_mode = OFF;
PRAGMA wal_checkpoint;
','99','2026-04-14 08:20:55.666','2026-03-10 15:05:21.172','0','00_00_00'),
('411','1','faire une option  insert brut pour les sql 
qui ne liste pas les noms des champs 
et qui prend les valeurs directenemnt dans un tableau 
et non pas d''un objet ( voir fichier rpps )','99','2026-03-11 17:18:45.244','2026-03-11 09:29:58.500','0','00_00_00'),
('412','1','sélecteur de date','99','2026-03-31 17:42:11.818','2026-03-14 10:08:48.066','0','00_00_00'),
('413','1','reprendre ugc
http://localhost/ugc/ugc_www/
http://localhost/mysqlreader/app_bbb_sample/tdo_www/','6','2026-04-01 16:58:20.105','2026-03-14 10:14:12.822','0','00_00_00'),
('414','1','traiter le champ date aaaa_mm_jj Ø','99','2026-03-17 17:37:23.386','2026-03-14 13:41:33.194','0','00_00_00'),
('415','1','traiter le champ heure 8 hh_mm_ss','99','2026-03-17 17:37:27.012','2026-03-14 14:22:42.444','0','00_00_00'),
('416','1','voir l''utilité des requetes manuelles','99','2026-03-19 08:31:26.252','2026-03-19 07:35:21.160','0','00_00_00'),
('417','1','traiter les requêtes multi bases','99','2026-03-26 16:36:19.614','2026-03-19 07:36:12.419','0','00_00_00'),
('419','1','etude sur fulltext

Plus le rank est faible, plus le résultat est bon => voir les premiers = order by rank asc

0.03 secondes 2 enregs
SELECT  rank as rank , s.numero_de_ligne , s.nom_d_exercice , s.prenom_d_exercice  , s.libelle_profession 
FROM rpps_fts s 
WHERE rpps_fts MATCH ( ''{nom_d_exercice}:rosen*  AND {prenom_d_exercice}:chloe* '' ) order by rank asc;


1.01 secondes deux enregs
SELECT  s.numero_de_ligne , s.nom_d_exercice , s.prenom_d_exercice  , s.libelle_profession 
FROM rpps s 
WHERE nom_d_exercice LIKE ''rosen%'' AND  prenom_d_exercice LIKE ''chloe%'' ;





SELECT  rank as rank , r.nom_d_exercice , r.prenom_d_exercice  , r.libelle_profession 
FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne 
WHERE rpps_fts MATCH ( ''{nom_d_exercice}:rosen*  AND {prenom_d_exercice}:chloe* '' ) order by rank asc;


SELECT  rank  FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''{nom_d_exercice}:ros*  AND {prenom_d_exercice}:chloe* '' );


0.06 secondes 28 enregs

SELECT  count(*)  FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''{nom_d_exercice}:ros*  AND {prenom_d_exercice}:chloe* '' );



0.02secondes 1 enreg

SELECT  count(*)  FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''{nom_d_exercice}:de* AND {nom_d_exercice}:foug*  AND {prenom_d_exercice}:marie* '' );


SELECT  
 r.numero_de_ligne , 
 r.libelle_civilite_d_exercice , 
 r.libelle_civilite , 
 r.nom_d_exercice , 
 r.prenom_d_exercice , 
 r.libelle_profession , 
 r.code_postal__coord__structure_ AS CP, 
 r.libelle_savoir_faire , 
 r.libelle_voie__coord__structure_ AS voie 
 FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''de* AND foug*  AND marie* '' ) ;



SELECT  
 r.numero_de_ligne , 
 r.libelle_civilite_d_exercice , 
 r.libelle_civilite , 
 r.nom_d_exercice , 
 r.prenom_d_exercice , 
 r.libelle_profession , 
 r.code_postal__coord__structure_ AS CP, 
 r.libelle_savoir_faire , 
 r.libelle_voie__coord__structure_ AS voie 
 FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''de* AND foug*  AND marie* AND Infir* '' ) LIMIT 2 OFFSET 2;



SELECT  
 r.numero_de_ligne , 
 r.libelle_civilite_d_exercice , 
 r.libelle_civilite , 
 r.nom_d_exercice , 
 r.prenom_d_exercice , 
 r.libelle_profession , 
 r.code_postal__coord__structure_ AS CP, 
 r.libelle_savoir_faire , 
 r.libelle_voie__coord__structure_ AS voie 
 FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''de* AND foug*  AND marie* AND Infir* '' );


0.189403 secondes avec 5 enregs 
SELECT COUNT(*) FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''de* AND foug*  AND marie* AND Infir* '' );



SELECT 
 r.numero_de_ligne , 
 r.libelle_civilite_d_exercice , 
 r.libelle_civilite , 
 r.nom_d_exercice , 
 r.prenom_d_exercice , 
 r.libelle_profession , 
 r.code_postal__coord__structure_ AS CP, 
 r.libelle_savoir_faire , 
 r.libelle_voie__coord__structure_ AS voie 

 FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''de* AND foug*  AND marie* '' );

0.14 s pour 19 enregs

SELECT COUNT(*) FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''"de foug*"  AND marie* '' );


1.03 secondes pour 1 enregistrement
SELECT
          `T0`.`numero_de_ligne` , `T0`.`identifiant_pp` , `T0`.`libelle_civilite_d_exercice` , `T0`.`libelle_civilite` , `T0`.`nom_d_exercice` ,
          `T0`.`prenom_d_exercice` , `T0`.`libelle_profession` , `T0`.`code_postal__coord__structure_` , `T0`.`libelle_savoir_faire` , `T0`.`libelle_voie__coord__structure_` ,
          `T0`.`raison_sociale_site` , `T0`.`complement_destinataire__coord__structure_`

          FROM  rpps T0     WHERE 1=1  AND `T0`.`nom_d_exercice` LIKE ''%de foug%'' ESCAPE ''\''
 AND `T0`.`prenom_d_exercice` LIKE ''%marie%'' ESCAPE ''\''

           ORDER BY  `T0`.`numero_de_ligne` DESC
        LIMIT 40 OFFSET 0
        
        

1.15 secondes pour 5 enregistrements
SELECT
          `T0`.`numero_de_ligne` , `T0`.`identifiant_pp` , `T0`.`libelle_civilite_d_exercice` , `T0`.`libelle_civilite` , `T0`.`nom_d_exercice` ,
          `T0`.`prenom_d_exercice` , `T0`.`libelle_profession` , `T0`.`code_postal__coord__structure_` , `T0`.`libelle_savoir_faire` , `T0`.`libelle_voie__coord__structure_` ,
          `T0`.`raison_sociale_site` , `T0`.`complement_destinataire__coord__structure_`

          FROM  rpps T0     WHERE 1=1  AND `T0`.`nom_d_exercice` LIKE ''%des%'' ESCAPE ''\''
 AND `T0`.`prenom_d_exercice` LIKE ''%anne-soph%'' ESCAPE ''\''
 AND `T0`.`libelle_profession` LIKE ''%phar%'' ESCAPE ''\''

           ORDER BY  `T0`.`numero_de_ligne` DESC
        LIMIT 40 OFFSET 0


0.238 secondes pour 21 enregistraments

SELECT COUNT(*) FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''anne* AND soph* AND pharm* AND des*'' );

SELECT 
 r.numero_de_ligne , 
 r.libelle_civilite_d_exercice , 
 r.libelle_civilite , 
 r.nom_d_exercice , 
 r.prenom_d_exercice , 
 r.libelle_profession , 
 r.code_postal__coord__structure_ AS CP, 
 r.libelle_savoir_faire , 
 r.libelle_voie__coord__structure_ AS voie 

FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''anne* AND sophie* AND Pharm* AND des*'' );

SELECT COUNT(*) FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''anne AND sophie AND Pharm'' );

SELECT COUNT(*) FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne WHERE rpps_fts MATCH ( ''anne-sophie'' );



SELECT COUNT(*) FROM rpps r  INNER JOIN rpps_fts s ON s.numero_de_ligne = r.numero_de_ligne 
WHERE rpps_fts MATCH ( ''anne'' );

CREATE TRIGGER delete_rpps_fts AFTER DELETE ON rpps BEGIN
DELETE FROM rpps_fts 
WHERE
    numero_de_ligne = OLD.numero_de_ligne ;
END;



DROP TRIGGER update_rpps_fts;

CREATE TRIGGER update_rpps_fts AFTER UPDATE ON rpps BEGIN
UPDATE rpps_fts SET  
    libelle_civilite_d_exercice     = NEW.libelle_civilite_d_exercice , 
    libelle_civilite                = NEW.libelle_civilite, 
    nom_d_exercice                  = NEW.nom_d_exercice , 
    prenom_d_exercice               = NEW.prenom_d_exercice , 
    libelle_profession              = NEW.libelle_profession , 
    code_postal__coord__structure_  = NEW.code_postal__coord__structure_ , 
    libelle_savoir_faire            = NEW.libelle_savoir_faire , 
    libelle_voie__coord__structure_ = NEW.libelle_voie__coord__structure_ 
WHERE
    numero_de_ligne = NEW.numero_de_ligne ;
END;


DROP TRIGGER insert_rpps_fts;

CREATE TRIGGER insert_rpps_fts AFTER INSERT ON rpps BEGIN
INSERT INTO rpps_fts ( 
 numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
) VALUES (
 NEW.numero_de_ligne , 
 NEW.libelle_civilite_d_exercice , 
 NEW.libelle_civilite , 
 NEW.nom_d_exercice , 
 NEW.prenom_d_exercice , 
 NEW.libelle_profession , 
 NEW.code_postal__coord__structure_ , 
 NEW.libelle_savoir_faire , 
 NEW.libelle_voie__coord__structure_ 
);
END;

select count(*) FROM rpps;

29 secondes pour 2 227 484


INSERT INTO rpps_fts (
 numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
) SELECT  numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
FROM rpps;

CREATE VIRTUAL TABLE rpps_fts USING fts5 ( 
 numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
);

ENABLE_FTS5

pragma compile_options;

EXPLAIN QUERY PLAN 
SELECT
          numero_de_ligne , identifiant_pp , libelle_civilite_d_exercice , libelle_civilite ,nom_d_exercice
          FROM  rpps  WHERE prenom_d_exercice LIKE ''%anne-so%'' ESCAPE ''\''
                        AND libelle_profession LIKE ''%Pharm%'' ESCAPE ''\''

           ORDER BY  numero_de_ligne DESC LIMIT 40 OFFSET 0;


EXPLAIN QUERY PLAN SELECT
          numero_de_ligne , identifiant_pp , libelle_civilite_d_exercice , libelle_civilite ,nom_d_exercice
          FROM  rpps  WHERE prenom_d_exercice LIKE ''%anne-so%'' ESCAPE ''\''
                        AND libelle_profession LIKE ''%Pharm%'' ESCAPE ''\''

           ORDER BY  numero_de_ligne DESC LIMIT 40 OFFSET 0;




EXPLAIN QUERY PLAN SELECT
          `T0`.`numero_de_ligne` , `T0`.`identifiant_pp` , `T0`.`libelle_civilite_d_exercice` , `T0`.`libelle_civilite` , `T0`.`nom_d_exercice` 
          FROM  rpps T0     WHERE 1=1  AND `T0`.`prenom_d_exercice` LIKE ''%anne-so%'' ESCAPE ''\''
 AND `T0`.`libelle_profession` LIKE ''%Pharm%'' ESCAPE ''\''

           ORDER BY  `T0`.`numero_de_ligne` DESC
        LIMIT 40 OFFSET 0





Run Time: real 0.346542 user 0.046875 sys 0.171875

.timer on 

SELECT
          `T0`.`numero_de_ligne` , `T0`.`identifiant_pp` , `T0`.`libelle_civilite_d_exercice` , `T0`.`libelle_civilite` , `T0`.`nom_d_exercice` 
          FROM  rpps T0     WHERE 1=1  AND `T0`.`prenom_d_exercice` LIKE ''%anne-so%'' ESCAPE ''\''
 AND `T0`.`libelle_profession` LIKE ''%Pharm%'' ESCAPE ''\''

           ORDER BY  `T0`.`numero_de_ligne` DESC
        LIMIT 40 OFFSET 0
        
        
        
SELECT
          `T0`.`numero_de_ligne` , `T0`.`identifiant_pp` , `T0`.`libelle_civilite_d_exercice` , `T0`.`libelle_civilite` , `T0`.`nom_d_exercice` ,
          `T0`.`prenom_d_exercice` , `T0`.`libelle_profession` , `T0`.`code_postal__coord__structure_` , `T0`.`libelle_savoir_faire` , `T0`.`libelle_voie__coord__structure_` ,
          `T0`.`raison_sociale_site` , `T0`.`complement_destinataire__coord__structure_`

          FROM  rpps T0     WHERE 1=1  AND `T0`.`prenom_d_exercice` LIKE ''%anne-so%'' ESCAPE ''\''
 AND `T0`.`libelle_profession` LIKE ''%Pharm%'' ESCAPE ''\''

           ORDER BY  `T0`.`numero_de_ligne` DESC
        LIMIT 40 OFFSET 0        ','99','2026-03-26 16:35:47.562','2026-03-20 12:39:52.718','0','00_00_00'),
('420','1','fulltext search','99','2026-03-26 16:35:57.619','2026-03-20 13:33:16.370','0','00_00_00'),
('421','1','créer une table virtuelle','99','2026-03-26 16:35:56.854','2026-03-20 16:11:03.443','0','00_00_00'),
('422','1','insérer dans la table virtuelle


INSERT INTO rpps_fts (
 numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
) SELECT  numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
FROM rpps;

/*


*/

CREATE TRIGGER delete_rpps_fts AFTER DELETE ON rpps BEGIN
DELETE FROM rpps_fts 
WHERE
    numero_de_ligne = OLD.numero_de_ligne ;
END;



DROP TRIGGER update_rpps_fts;

CREATE TRIGGER update_rpps_fts AFTER UPDATE ON rpps BEGIN
UPDATE rpps_fts SET  
    libelle_civilite_d_exercice     = NEW.libelle_civilite_d_exercice , 
    libelle_civilite                = NEW.libelle_civilite, 
    nom_d_exercice                  = NEW.nom_d_exercice , 
    prenom_d_exercice               = NEW.prenom_d_exercice , 
    libelle_profession              = NEW.libelle_profession , 
    code_postal__coord__structure_  = NEW.code_postal__coord__structure_ , 
    libelle_savoir_faire            = NEW.libelle_savoir_faire , 
    libelle_voie__coord__structure_ = NEW.libelle_voie__coord__structure_ 
WHERE
    numero_de_ligne = NEW.numero_de_ligne ;
END;


DROP TRIGGER insert_rpps_fts;

CREATE TRIGGER insert_rpps_fts AFTER INSERT ON rpps BEGIN
INSERT INTO rpps_fts ( 
 numero_de_ligne , 
 libelle_civilite_d_exercice , 
 libelle_civilite , 
 nom_d_exercice , 
 prenom_d_exercice , 
 libelle_profession , 
 code_postal__coord__structure_ , 
 libelle_savoir_faire , 
 libelle_voie__coord__structure_ 
) VALUES (
 NEW.numero_de_ligne , 
 NEW.libelle_civilite_d_exercice , 
 NEW.libelle_civilite , 
 NEW.nom_d_exercice , 
 NEW.prenom_d_exercice , 
 NEW.libelle_profession , 
 NEW.code_postal__coord__structure_ , 
 NEW.libelle_savoir_faire , 
 NEW.libelle_voie__coord__structure_ 
);
END;

select count(*) FROM rpps;

29 secondes pour 2 227 484


','99','2026-03-22 09:19:51.493','2026-03-21 10:39:43.949','0','00_00_00'),
('423','1','champ à visualiser dans une requête update','99','2026-03-27 12:18:15.902','2026-03-26 16:37:15.572','0','00_00_00'),
('424','1','analyser un index unique

UPDATE prestations SET fld_nom_prestation = CONCAT( fld_nom_prestation , ''[1]'' ) WHERE fld_id_prestation = 3092 ;
UPDATE prestations SET fld_nom_prestation = CONCAT( fld_nom_prestation , ''[1]'' ) WHERE fld_id_prestation = 3084 ;
UPDATE prestations SET fld_nom_prestation = CONCAT( fld_nom_prestation , ''[1]'' ) WHERE fld_id_prestation = 3022 ;
UPDATE prestations SET fld_nom_prestation = CONCAT( fld_nom_prestation , ''[1]'' ) WHERE fld_id_prestation = 1955 ;

update prestations set fld_nom_prestation = ''orbt Offre d''''essai Tonalité phase 3'' where fld_id_prestation = 1955;
update prestations set fld_nom_prestation = ''tsmw'' where fld_id_prestation = 3022;
update prestations set fld_nom_prestation = ''airbus safran et asl : mise en ppr'' where fld_id_prestation = 3084;
update prestations set fld_nom_prestation = ''evrest national : modification des pages salarié'' where fld_id_prestation = 3092;


update prestations set fld_nom_prestation = ''orbt Offre d''''essai Tonalité phase 3 - 1'' where fld_id_prestation = 1955;
update prestations set fld_nom_prestation = ''tsmw - 1'' where fld_id_prestation = 3022;
update prestations set fld_nom_prestation = ''airbus safran et asl : mise en ppr - 1'' where fld_id_prestation = 3084;
update prestations set fld_nom_prestation = ''evrest national : modification des pages salarié - 1'' where fld_id_prestation = 3092;

SELECT T0.fld_id_prestation , T1.fld_id_prestation , T0.fld_nom_prestation , T1.fld_nom_prestation , T0.fld_id_facture_prestation , T1.fld_id_facture_prestation , T0.fld_date_prestation
 FROM prestations T0 , prestations T1 
 WHERE T0.fld_nom_prestation = T1.fld_nom_prestation 
 AND T0.fld_date_prestation = T1.fld_date_prestation 
 AND T0.fld_type_prestation = T1.fld_type_prestation 
 AND T0.fld_id_affectation_prestation = T1.fld_id_affectation_prestation
 AND T0.fld_id_prestation <> T1.fld_id_prestation
 LIMIT 50;




+───────────────────┬───────────────────┬──────────────────────────────────────────────────┬──────────────────────────────────────────────────+
│ fld_id_prestation │ fld_id_prestation │                fld_nom_prestation                │                fld_nom_prestation                │
╞═══════════════════╪═══════════════════╪══════════════════════════════════════════════════╪══════════════════════════════════════════════════╡
│              1955 │              1958 │ orbt Offre d''essai Tonalité phase 3              │ orbt Offre d''essai Tonalité phase 3              │
│              1958 │              1955 │ orbt Offre d''essai Tonalité phase 3              │ orbt Offre d''essai Tonalité phase 3              │
│              3022 │              3024 │ tsmw                                             │ tsmw                                             │
│              3024 │              3022 │ tsmw                                             │ tsmw                                             │
│              3084 │              3085 │ airbus safran et asl : mise en ppr               │ airbus safran et asl : mise en ppr               │
│              3085 │              3084 │ airbus safran et asl : mise en ppr               │ airbus safran et asl : mise en ppr               │
│              3092 │              3093 │ evrest national : modification des pages salarié │ evrest national : modification des pages salarié │
│              3093 │              3092 │ evrest national : modification des pages salarié │ evrest national : modification des pages salarié │
+───────────────────┴───────────────────┴──────────────────────────────────────────────────┴──────────────────────────────────────────────────+

SELECT T0.fld_id_prestation , T1.fld_id_prestation , T0.fld_nom_prestation , T1.fld_nom_prestation 
 FROM prestations T0 , prestations T1 
 WHERE T0.fld_nom_prestation = T1.fld_nom_prestation 
 AND T0.fld_date_prestation = T1.fld_date_prestation 
 AND T0.fld_type_prestation = T1.fld_type_prestation 
 AND T0.fld_id_affectation_prestation = T1.fld_id_affectation_prestation
 AND T0.fld_id_prestation <> T1.fld_id_prestation
 LIMIT 50;','99','2026-03-28 17:36:14.049','2026-03-27 13:22:44.220','0','00_00_00'),
('425','1','types mime mime types 
/*
  .aac;AAC audio;audio/aac
  .abw;AbiWord document;application/x-abiword
  .apng;Animated Portable Network Graphics (APNG) image;image/apng
  .arc;Archive document (multiple files embedded);application/x-freearc
  .avif;AVIF image;image/avif
  .avi;AVI: Audio Video Interleave;video/x-msvideo
  .azw;Amazon Kindle eBook format;application/vnd.amazon.ebook
  .bin;Any kind of binary data;application/octet-stream
  .bmp;Windows OS/2 Bitmap Graphics;image/bmp
  .bz;BZip archive;application/x-bzip
  .bz2;BZip2 archive;application/x-bzip2
  .cda;CD audio;application/x-cdf
  .csh;C-Shell script;application/x-csh
  .css;Cascading Style Sheets (CSS);text/css
  .csv;Comma-separated values (CSV);text/csv
  .doc;Microsoft Word;application/msword
  .docx;Microsoft Word (OpenXML);application/vnd.openxmlformats-officedocument.wordprocessingml.document
  .eot;MS Embedded OpenType fonts;application/vnd.ms-fontobject
  .epub;Electronic publication (EPUB);application/epub+zip
  .gz;GZip Compressed Archive;application/gzip. Note, Windows and macOS upload .gz files with the non-standard MIME type application/x-gzip.
  .gif;Graphics Interchange Format (GIF);image/gif
  .htm, .html;HyperText Markup Language (HTML);text/html
  .ico;Icon format;image/vnd.microsoft.icon
  .ics;iCalendar format;text/calendar
  .jar;Java Archive (JAR);application/java-archive
  .jpeg, .jpg;JPEG images;image/jpeg
  .js;JavaScript;text/javascript (Specifications: HTML and RFC 9239)
  .json;JSON format;application/json
  .jsonld;JSON-LD format;application/ld+json
  .md;Markdown;text/markdown
  .mid, .midi;Musical Instrument Digital Interface (MIDI);audio/midi, audio/x-midi
  .mjs;JavaScript module;text/javascript
  .mp3;MP3 audio;audio/mpeg
  .mp4;MP4 video;video/mp4
  .mpeg;MPEG Video;video/mpeg
  .mpkg;Apple Installer Package;application/vnd.apple.installer+xml
  .odp;OpenDocument presentation document;application/vnd.oasis.opendocument.presentation
  .ods;OpenDocument spreadsheet document;application/vnd.oasis.opendocument.spreadsheet
  .odt;OpenDocument text document;application/vnd.oasis.opendocument.text
  .oga;Ogg audio;audio/ogg
  .ogv;Ogg video;video/ogg
  .ogx;Ogg;application/ogg
  .opus;Opus audio in Ogg container;audio/ogg
  .otf;OpenType font;font/otf
  .png;Portable Network Graphics;image/png
  .pdf;Adobe Portable Document Format (PDF);application/pdf
  .php;Hypertext Preprocessor (Personal Home Page);application/x-httpd-php
  .ppt;Microsoft PowerPoint;application/vnd.ms-powerpoint
  .pptx;Microsoft PowerPoint (OpenXML);application/vnd.openxmlformats-officedocument.presentationml.presentation
  .rar;RAR archive;application/vnd.rar
  .rtf;Rich Text Format (RTF);application/rtf
  .sh;Bourne shell script;application/x-sh
  .svg;Scalable Vector Graphics (SVG);image/svg+xml
  .tar;Tape Archive (TAR);application/x-tar
  .tif, .tiff;Tagged Image File Format (TIFF);image/tiff
  .ts;MPEG transport stream;video/mp2t
  .ttf;TrueType Font;font/ttf
  .txt;Text, (generally ASCII or ISO 8859-n);text/plain
  .vsd;Microsoft Visio;application/vnd.visio
  .wav;Waveform Audio Format;audio/wav
  .weba;WEBM audio;audio/webm
  .webm;WEBM video;video/webm
  .webmanifest;Web application manifest;application/manifest+json
  .webp;WEBP image;image/webp
  .woff;Web Open Font Format (WOFF);font/woff
  .woff2;Web Open Font Format (WOFF);font/woff2
  .xhtml;XHTML;application/xhtml+xml
  .xls;Microsoft Excel;application/vnd.ms-excel
  .xlsx;Microsoft Excel (OpenXML);application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
  .xml;XML;application/xml is recommended as of RFC 7303 (section 4.1), but text/xml is still used sometimes. You can assign a specific MIME type to a file with .xml extension depending on how its contents are meant to be interpreted. For instance, an Atom feed is application/atom+xml, but application/xml serves as a valid default.
  .xul;XUL;application/vnd.mozilla.xul+xml
  .zip;ZIP archive;application/zip. Note, Windows uploads .zip files with the non-standard MIME type application/x-zip-compressed.
  .3gp;3GPP audio/video container;video/3gpp or audio/3gpp if it doesn''t contain video
  .3g2;3GPP2 audio/video container;video/3gpp2 or audio/3gpp2 if it doesn''t contain video
  .7z;7-zip archive;application/x-7z-compressed
*/','99','2026-03-31 11:04:34.792','2026-03-31 11:04:34.792','0','00_00_00'),
('426','1','mettre la table des tâches en table virtuelle','80','2026-03-31 11:05:02.000','2026-03-31 11:05:02.000','0','00_00_00'),
('427','1','utiliser 
this.__ig1.affiche_sous_fenetre1(
à la place de 
vv_sous_fenetre1.innerHTML=','99','2026-03-31 17:41:54.456','2026-03-31 13:59:48.543','0','00_00_00'),
('428','1','sortir la sous_liste de l''iframe

','99','2026-05-18 16:50:55.611','2026-03-31 15:44:02.141','0','00_00_00'),
('429','1','après avoir cliqué sur le bouton pour compiler une requête, revenir à la sélection du filtre','99','2026-04-01 16:02:44.327','2026-03-31 17:41:45.006','0','00_00_00'),
('430','1','mettre la table des taches en virtuelle','7','2026-04-01 10:38:17.287','2026-04-01 10:38:17.287','0','00_00_00'),
('431','1','non dans le code uniquement
ajouter des valeurs préférées ( 0.25 , 0.50 , 0.75 , 1.00 )','99','2026-04-22 14:27:35.731','2026-04-03 08:25:31.277','0','00_00_00'),
('432','1','utiliser indexedDb du navigateur','80','2026-05-11 11:00:06.136','2026-04-04 09:51:44.238','0','00_00_00'),
('433','1','gérer les autorisations pour les listes et les actions','99','2026-04-07 08:51:43.327','2026-04-04 13:06:19.057','0','00_00_00'),
('434','1','longtext sur les champs cht_rev_source et cht_genere_source','99','2026-04-22 14:27:05.391','2026-04-07 08:51:13.688','0','00_00_00'),
('435','1','virer
donnees_retournees.__xst=__xer;

this.__ig1.__xsi et remplacer par donnees_retournees.__xsi


','99','2026-05-11 08:23:46.074','2026-04-10 13:51:41.833','0','00_00_00'),
('436','1','Fait dans requete directe sur une base

effacer le contenu d''une table ( DELETE FROM table )
update tbl_sources set cht_rev_source='''';
update tbl_sources set cht_genere_source='''';

drop table rpps_fts

SELECT tbl_name FROM sqlite_master 
WHERE  
name NOT LIKE ''sqlite_%'' 
AND type == ''table'' 
AND sql LIKE \''%CREATE virtual%\''','99','2026-05-11 08:11:50.117','2026-04-12 17:48:10.740','0','00_00_00'),
('437','1','téléversement de gros fichiers','99','2026-04-20 08:15:39.479','2026-04-13 07:54:17.849','0','00_00_00'),
('438','1','virer che_contient_version_source','99','2026-04-20 10:42:51.871','2026-04-14 08:40:48.064','0','00_00_00'),
('439','1','recherche / remplacer dans les sources','99','2026-04-20 10:43:00.151','2026-04-14 08:50:50.799','0','00_00_00'),
('440','1','naviguer dans les répertoires des sauvegardes','17','2026-04-15 10:55:39.872','2026-04-15 10:55:39.872','0','00_00_00'),
('441','1','externaliser le téléversement et ajouter un paramètre','99','2026-04-20 10:42:47.201','2026-04-20 08:14:52.262','0','00_00_00'),
('442','1','mesurer la vitesse du réseau et adapter la taille des blocs de téléversement en fonction','16','2026-04-20 10:44:40.682','2026-04-20 10:44:40.682','0','00_00_00'),
('443','1','envoyer un message au client lors de la fin d''un batch','99','2026-05-08 09:12:48.980','2026-04-20 12:25:27.031','0','00_00_00'),
('444','1','ajouter un ordre (rang) de la table dans le svg pour la sauvegarde
par exemple, mettre facture en avant dernier devant prestation car les prestations 
sont rattachées aux factures','99','2026-04-22 09:28:49.140','2026-04-20 18:31:14.114','0','00_00_00'),
('445','1','analyser les dumps mysql
chercher plus bas l''original : -- phpMyAdmin SQL Dump 

--
-- Structure de la table `ugc_client`
--

DROP TABLE IF EXISTS `ugc_client`;
CREATE TABLE IF NOT EXISTS `ugc_client` (
  `fld_id_client` bigint NOT NULL,
  `fld_nom_client` char(64) NOT NULL DEFAULT ''Enter something here'',
  `fld_id_commercial_client` bigint DEFAULT NULL,
  `fld_nom_bref_client` char(32) NOT NULL,
  `fld_adresse1_client` char(64) NOT NULL,
  `fld_adresse2_client` char(64) NOT NULL,
  PRIMARY KEY (`fld_id_client`)
) ;



-- --------------------------------------------------------

--
-- Structure de la table `ugc_facture`
--

DROP TABLE IF EXISTS `ugc_facture`;
CREATE TABLE IF NOT EXISTS `ugc_facture` (
  `fld_id_facture` bigint NOT NULL,
  `fld_name_facture` varchar(64) NOT NULL DEFAULT ''Enter something here'',
  `fld_id_client_facture` bigint NOT NULL DEFAULT ''0'',
  `fld_montant_ht_facture` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_montant_ttc_facture` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_montant_tva_facture` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_commentaire_facture` text ,
  `fld_date_emission_facture` date DEFAULT NULL,
  `fld_date_paiement_souhaite_facture` date DEFAULT NULL,
  `fld_date_paiement_reel_facture` date DEFAULT NULL,
  `fld_payee_facture` tinyint NOT NULL DEFAULT ''0'',
  `fld_envoyee_facture` tinyint NOT NULL DEFAULT ''0'',
  PRIMARY KEY (`fld_id_facture`)
) ;

-- --------------------------------------------------------

--
-- Structure de la table `ugc_missiaffec`
--

DROP TABLE IF EXISTS `ugc_missiaffec`;
CREATE TABLE IF NOT EXISTS `ugc_missiaffec` (
  `fdl_id_prestataire_missaffect` bigint NOT NULL DEFAULT ''0'',
  `fdl_id_commercial_missaffect` bigint NOT NULL DEFAULT ''4'',
  `fdl_id_missaffect` bigint NOT NULL,
  `fdl_id_mission_missaffect` bigint NOT NULL DEFAULT ''0'',
  PRIMARY KEY (`fdl_id_missaffect`)
) ;

-- --------------------------------------------------------

--
-- Structure de la table `ugc_mission`
--

DROP TABLE IF EXISTS `ugc_mission`;
CREATE TABLE IF NOT EXISTS `ugc_mission` (
  `fld_id_mission` bigint NOT NULL,
  `fld_nom_mission` varchar(64) NOT NULL DEFAULT ''Enter something here'',
  `fld_date_debut_mission` date DEFAULT NULL,
  `fld_date_fin_mission` date DEFAULT NULL,
  `fld_id_client_mission` bigint NOT NULL DEFAULT ''0'',
  `fld_description_mission` text NOT NULL,
  `fld_environnement_technique_mission` text NOT NULL,
  `fld_nom_bref_mission` varchar(32) NOT NULL,
  `fld_id_commercial_mission` bigint NOT NULL DEFAULT ''0'',
  PRIMARY KEY (`fld_id_mission`)
) ;

-- --------------------------------------------------------

--
-- Structure de la table `ugc_prestation`
--

DROP TABLE IF EXISTS `ugc_prestation`;
CREATE TABLE IF NOT EXISTS `ugc_prestation` (
  `fld_id_prestation` bigint NOT NULL,
  `fld_nom_prestation` char(128) NOT NULL DEFAULT ''Enter something here'' ,
  `fld_date_prestation` date NOT NULL DEFAULT ''1000-01-01'',
  `fld_type_prestation` enum(''JOURNALIERE'',''HORAIRE'',''LOGICIEL'',''MATERIEL'',''AUTRE'') NOT NULL ,
  `fld_qte_prestation` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_id_affectation_prestation` bigint NOT NULL DEFAULT ''0'',
  `fld_heure_debut_prestation` time NOT NULL DEFAULT ''00:00:00'' ,
  `fld_visa_commercial_prestation` tinyint NOT NULL DEFAULT ''0'' ,
  `fld_qte_facturee_prestation` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_cout_prestation` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_tva_prestation` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_id_facture_prestation` bigint DEFAULT NULL,
  `fld_cntupd_prestation` int NOT NULL DEFAULT ''0'',
  PRIMARY KEY (`fld_id_prestation`)
) ;


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mar. 21 avr. 2026 à 14:10
-- Version du serveur : 8.3.0
-- Version de PHP : 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de données : `ugc`
--

-- --------------------------------------------------------

--
-- Structure de la table `ugc_client`
--

DROP TABLE IF EXISTS `ugc_client`;
CREATE TABLE IF NOT EXISTS `ugc_client` (
  `fld_id_client` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fld_nom_client` char(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT ''Enter something here'' COMMENT ''{"showDeleteField":true}'',
  `fld_id_commercial_client` bigint UNSIGNED DEFAULT NULL,
  `fld_nom_bref_client` char(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `fld_adresse1_client` char(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `fld_adresse2_client` char(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`fld_id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `toto`;
CREATE TABLE IF NOT EXISTS `toto` (
  `fld_id_client` bigint UNSIGNED NOT NULL ,
  `fld_nom_client` char(64) NOT NULL DEFAULT ''Enter something here'' ,
  `fld_id_commercial_client` bigint UNSIGNED DEFAULT NULL,
  `fld_nom_bref_client` char(32) NOT NULL,
  `fld_adresse1_client` char(64) NOT NULL,
  `fld_adresse2_client` char(64) NOT NULL,
  PRIMARY KEY (`fld_id_client`)
) ;



-- --------------------------------------------------------

--
-- Structure de la table `ugc_facture`
--

DROP TABLE IF EXISTS `ugc_facture`;
CREATE TABLE IF NOT EXISTS `ugc_facture` (
  `fld_id_facture` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fld_name_facture` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT ''Enter something here'' COMMENT ''{"showDeleteField":true,"tests":{"notVoid":true}}'',
  `fld_id_client_facture` bigint UNSIGNED NOT NULL DEFAULT ''0'',
  `fld_montant_ht_facture` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_montant_ttc_facture` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_montant_tva_facture` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_commentaire_facture` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,
  `fld_date_emission_facture` date DEFAULT NULL,
  `fld_date_paiement_souhaite_facture` date DEFAULT NULL,
  `fld_date_paiement_reel_facture` date DEFAULT NULL,
  `fld_payee_facture` tinyint NOT NULL DEFAULT ''0'' COMMENT ''{"param":"yorno"}'',
  `fld_envoyee_facture` tinyint NOT NULL DEFAULT ''0'' COMMENT ''{"param":"yorno"}'',
  PRIMARY KEY (`fld_id_facture`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ugc_missiaffec`
--

DROP TABLE IF EXISTS `ugc_missiaffec`;
CREATE TABLE IF NOT EXISTS `ugc_missiaffec` (
  `fdl_id_prestataire_missaffect` bigint UNSIGNED NOT NULL DEFAULT ''0'' COMMENT ''{"showDeleteField":true}'',
  `fdl_id_commercial_missaffect` bigint NOT NULL DEFAULT ''4'' COMMENT ''{"showDeleteField":true}'',
  `fdl_id_missaffect` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fdl_id_mission_missaffect` bigint UNSIGNED NOT NULL DEFAULT ''0'' COMMENT ''{"showDeleteField":true}'',
  PRIMARY KEY (`fdl_id_missaffect`),
  UNIQUE KEY `ug_mission_affectation_k0` (`fdl_id_prestataire_missaffect`,`fdl_id_mission_missaffect`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ugc_mission`
--

DROP TABLE IF EXISTS `ugc_mission`;
CREATE TABLE IF NOT EXISTS `ugc_mission` (
  `fld_id_mission` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fld_nom_mission` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT ''Enter something here'' COMMENT ''{"showDeleteField":true}'',
  `fld_date_debut_mission` date DEFAULT NULL,
  `fld_date_fin_mission` date DEFAULT NULL,
  `fld_id_client_mission` bigint UNSIGNED NOT NULL DEFAULT ''0'',
  `fld_description_mission` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `fld_environnement_technique_mission` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `fld_nom_bref_mission` varchar(32) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `fld_id_commercial_mission` bigint UNSIGNED NOT NULL DEFAULT ''0'',
  PRIMARY KEY (`fld_id_mission`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ugc_prestation`
--

DROP TABLE IF EXISTS `ugc_prestation`;
CREATE TABLE IF NOT EXISTS `ugc_prestation` (
  `fld_id_prestation` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `fld_nom_prestation` char(128) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL DEFAULT ''Enter something here'' COMMENT ''{"showDeleteField":true}'',
  `fld_date_prestation` date NOT NULL DEFAULT ''1000-01-01'',
  `fld_type_prestation` enum(''JOURNALIERE'',''HORAIRE'',''LOGICIEL'',''MATERIEL'',''AUTRE'') CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT ''{"param":"type_prestation"}'',
  `fld_qte_prestation` decimal(17,2) UNSIGNED NOT NULL DEFAULT ''0.00'',
  `fld_id_affectation_prestation` bigint UNSIGNED NOT NULL DEFAULT ''0'',
  `fld_heure_debut_prestation` time NOT NULL DEFAULT ''00:00:00'' COMMENT ''{"timeOption":7}'',
  `fld_visa_commercial_prestation` tinyint NOT NULL DEFAULT ''0'' COMMENT ''{"param":"yorno"}'',
  `fld_qte_facturee_prestation` decimal(17,2) UNSIGNED NOT NULL DEFAULT ''0.00'',
  `fld_cout_prestation` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_tva_prestation` decimal(17,2) NOT NULL DEFAULT ''0.00'',
  `fld_id_facture_prestation` bigint UNSIGNED DEFAULT NULL,
  `fld_cntupd_prestation` int NOT NULL DEFAULT ''0'' COMMENT ''{"cntupd":true}'',
  PRIMARY KEY (`fld_id_prestation`),
  KEY `Prestation_O0` (`fld_id_facture_prestation`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;
','99','2026-04-22 14:16:47.457','2026-04-21 16:14:29.683','0','00_00_00'),
('446','1','forcer la fermeture du fichier wal

import sqlite3
import os

db_path = "my_database.db"

# Connect to the database
conn = sqlite3.connect(db_path)

# Do any pending work here...
# Example: conn.execute("INSERT INTO test VALUES (1)")

# Force a checkpoint to merge WAL into the main DB
conn.execute("PRAGMA wal_checkpoint(FULL);")

# Close the connection
conn.close()

# Optional: Ensure no WAL file remains
wal_file = db_path + "-wal"
if os.path.exists(wal_file):
    print("WAL file still exists, removing manually...")
    os.remove(wal_file)
else:
    print("WAL file successfully removed.")

','99','2026-04-21 17:44:53.816','2026-04-21 16:21:02.723','0','00_00_00'),
('447','1','sauv sur github','99','2026-04-21 18:22:38.868','2026-04-21 17:45:31.222','0','00_00_00'),
('448','1','dans les fonctions async filtre1(
retirer le let dans le deuxième appel quand zéro résultats à tt110=await this.__ig1.sql_iii( ','99','2026-05-08 09:12:59.195','2026-04-24 12:35:19.887','0','00_00_00'),
('449','1','ajouter __db1 dans l''appel
                    await this.filtre1( mat1 , 1 , __db1 );
dans async modifier1','99','2026-04-26 17:23:25.484','2026-04-25 09:43:48.742','0','00_00_00'),
('450','1','sauvegarder les dumps sql et les csv dans des répertoires différents','99','2026-04-27 10:34:50.204','2026-04-26 17:49:39.498','0','00_00_00'),
('451','1','supprimer les arbres les_enfants_du_menu quand on charge un menu','99','2026-04-27 18:45:01.636','2026-04-27 10:39:18.392','0','00_00_00'),
('452','1','ajuster les autorisations au niveau du source','99','2026-05-05 07:39:58.759','2026-04-28 11:02:11.564','0','00_00_00'),
('453','1','ajouter un acces 0

pouvoir passer un ordre sql à partir du svg

insert INTO tbl_acces( chi_id_acces , chp_nom_acces , chx_groupe_acces , chx_metier_acces , cht_parametres_acces , che_actif_acces )
VALUES( 0 , ''anonymes'' , 1 , 2 , ''{}'' , 1 );

update tbl_acces SET chp_nom_acces = ''anonymes'' where chi_id_acces = 0;
update tbl_acces SET cht_parametres_acces = ''{}'' where chi_id_acces = 0;
','99','2026-05-08 07:15:58.418','2026-04-29 09:58:51.911','0','00_00_00'),
('454','1','faire le menu de l''acces 0','99','2026-05-05 07:39:15.871','2026-04-29 09:59:19.650','0','00_00_00'),
('455','1','NON pour plus bas

il faut distinguer la condition d''affichage du bouton du menu
et l''autorisation sur la fonction
Par exemple on peut afficher "mon profil" si on est connecté ou pas
===================================================================

supprimer les champs 


- cht_condition_menu
- cht_condition_js_menu

et les remplacer par 

- cht_condition_js_source
- cht_notification_ko_source','99','2026-05-05 07:39:50.918','2026-04-29 10:22:01.067','0','00_00_00'),
('456','1','quend on définit un menu, vérifier qu''on pointe bien vars une autorisation client
par exemple, dans le projet 3, je pointais sur le menu_s à la place du menu_c

#pm1(m1(n1(menus1),f1(page_modification1(chi_id_menu(13)))))','99','2026-04-30 12:23:56.611','2026-04-30 11:45:59.424','0','00_00_00'),
('457','1','créer un __fnt1_c, un __fnt1_s et inclure __fnts_c_et_s_ dans les deux','99','2026-05-03 18:07:38.325','2026-04-30 14:15:01.623','0','00_00_00'),
('458','1','mettre les fonctions de test de champs dans les sql
ajouter dans la requete 111
                if(
                  !par.donnees[i].hasOwnProperty(''chp_priorite_tache'')
                  || par.donnees[i][''chp_priorite_tache''] === null
                  || !this.__ig1.est_num( par.donnees[i][''chp_priorite_tache''] )
                 ){
                    return({"__xst" : __xer , __xme : ''erreur sur le champ priorité 1'' });
                }
                const __test_2_1=this.__ig1.__fnts_c_et_s.test_entier_compris_entre( 0 , 99 , par.donnees[i][''chp_priorite_tache''] , "priorite" );
                if(__test_2_1[__xst] !== __xsu){
                    return(__test_2_1);
                }
','99','2026-05-05 12:40:44.221','2026-05-01 09:15:01.292','0','00_00_00'),
('459','1','renommer 
doit_contenir_n_caracteres 
EN 
test_doit_contenir_n_caracteres

tester_longueur_de_champ_dans_genre 
en 
test_longueur_de_champ_dans_genre','99','2026-05-01 10:45:12.772','2026-05-01 10:00:35.074','0','00_00_00'),
('460','1','ajouter le nom_du_champ_cle dans l''appel des fonctions

sous_liste_generique1 1
initialisation_des_zones 2
afficher_le_titre_des_zones 3

, \'''' + champ_primaire + ''\''','99','2026-05-02 09:15:18.190','2026-05-01 11:57:36.050','0','00_00_00'),
('461','1','ajouter le nom du champ lors de l''appel à sq4
exemple sql 147','99','2026-05-03 18:06:44.563','2026-05-02 09:14:25.782','0','00_00_00'),
('462','1','renuméroter le sql 415 en 164','99','2026-05-03 15:10:31.033','2026-05-02 10:39:21.566','0','00_00_00'),
('463','1','quand on réordonne les champs d''une table, il ne faut pas utiliser les FOREIGN keys','99','2026-05-08 08:31:45.260','2026-05-02 11:29:37.856','0','00_00_00'),
('464','1','virer la page nous contacter et laisser à propos','99','2026-05-03 18:07:16.515','2026-05-02 11:38:42.750','0','00_00_00'),
('465','1','créer une autorisation client et serveur pour sous_liste uniquement
par exemple, on doit pouvoir séléctionner un utilisateur dans une sous liste 
sans avoir le droit de gérer les utilisateurs','99','2026-05-05 13:15:05.120','2026-05-02 17:52:59.445','0','00_00_00'),
('466','1','virer le champ chp_nom_autorisation','99','2026-05-05 07:39:00.859','2026-05-03 13:44:26.784','0','00_00_00'),
('467','1','ajouter les conditions pour les listes des 
groupes/metiers/acces/autorisations....','99','2026-05-06 13:00:37.053','2026-05-03 15:10:06.600','0','00_00_00'),
('468','1','mettre les autorisations utilisateur en session et les raz quand on modifie les autorisations coté interface','99','2026-05-07 16:24:37.799','2026-05-03 17:16:14.869','0','00_00_00'),
('469','1','message après sauvegarde de base','99','2026-05-04 08:27:46.297','2026-05-03 18:13:03.074','0','00_00_00'),
('470','1','requete 145 sur env 3
le source n''est pas bien maj sur disque quand on passe par l''interface de modification du sql','99','2026-05-05 13:14:34.758','2026-05-04 13:35:00.362','0','00_00_00'),
('472','1','ne_pas_modifier(0)
ajouter une règle de gestion au niveau de la table pour gérer
        if(form[''chi_id_acces''] === 0 ){
            this.__ig1.donnees_retournees.__xsi[__xer].push( ''on ne peut pas modifier l\''accès 0 ['' + this.__ig1.nl2() + '']'' );
            return({"__xst" : __xer});
        }
','99','2026-05-06 13:00:15.257','2026-05-05 12:03:44.568','0','00_00_00'),
('473','1','attention, possibilité de modifier acces 0 pour les menus
pour requete souche uniquement

ajouter 
ttXXX.changements !== 1
dans le test après update','99','2026-05-06 12:59:06.964','2026-05-05 18:34:11.591','0','00_00_00'),
('474','1','ajouter des conditions combinées au niveau de la table
par exemple, pour les genres
VARCHAR(NNN)

update
insert
','99','2026-05-07 09:00:11.860','2026-05-06 13:01:23.641','0','00_00_00'),
('475','1','renommer menu_arbre1 en __navigation1','99','2026-05-08 08:23:04.678','2026-05-07 12:26:27.259','0','00_00_00'),
('476','1','corriger le menu sur la page d''accueil','99','2026-05-08 08:23:06.334','2026-05-08 07:19:11.682','0','00_00_00'),
('477','1','remplacer 
le_message_du_serveur
par
le_colis1','99','2026-05-11 10:55:43.378','2026-05-11 08:24:48.265','0','00_00_00'),
('478','1','internationalisation','80','2026-05-11 09:01:45.750','2026-05-11 09:01:45.750','0','00_00_00'),
('479','1','voir l''écran d''un autre utilisateur','80','2026-05-11 09:02:09.826','2026-05-11 09:02:09.826','0','00_00_00'),
('480','1','requete 107 "plus"
159 158','99','2026-05-11 10:55:38.362','2026-05-11 10:20:33.640','0','00_00_00'),
('481','1','dans la sous fenetre, capturer la touche 13 pour relancer la recherche','99','2026-05-13 09:21:28.785','2026-05-13 07:58:02.812','0','00_00_00'),
('482','1','ajouter des fonctions fragment','99','2026-06-03 13:33:55.372','2026-05-14 07:57:48.815','0','00_00_00'),
('483','1','ajouter une table acteur personne humain particulier individu','5','2026-06-03 13:33:23.661','2026-05-14 08:05:31.209','0','00_00_00'),
('484','1','ajouter un libelle pour les liens
exemple : 
Pour le champ fld_nom_client, le est_libelle_lien  est coché
il faut ajouter le_libelle_lien = client
','99','2026-05-14 11:54:40.987','2026-05-14 08:30:06.779','0','00_00_00'),
('485','1','générer un exemple de select (416)
plus tard
        let critere_208={"T0_chx_utilisateur_acteur" : chx_utilisateur_acteur};
        let tt208=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        meta(inclure_le_prefixe_de_la_base_devant_la_table(1))
        SELECT 
        `T0`.`chx_utilisateur_acteur` , `T0`.`chp_nom_acteur` , `T0`.`chp_prenom_acteur` , `T1`.`chi_id_utilisateur` , `T1`.`chp_nom_de_connexion_utilisateur` , 
        `T1`.`chx_acces_utilisateur` , `T1`.`che_actif_utilisateur` , `T2`.`chp_nom_acces` , `T2`.`chx_groupe_acces` , `T2`.`chx_metier_acces` , 
        `T3`.`chp_nom_groupe` , `T4`.`chp_nom_metier`
         FROM b2.tbl_acteurs T0
         LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
        
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
        
         LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
        
        WHERE `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur
        ;
        */
        /*sql_inclure_fin*/ 208 , critere_208 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva][''page_confirmation_supprimer1'']=tt208;

','80','2026-05-18 16:49:03.892','2026-05-15 11:54:30.918','0','00_00_00'),
('486','1','intégrer une fonction
__atavm , missions1_s.js','99','2026-05-18 14:10:12.144','2026-05-15 15:08:32.544','0','00_00_00'),
('487','1','CREATE UNIQUE INDEX idx_source ON `tbl_sources`   
( `chx_dossier_id_source` , `chp_nom_source` , `chp_usage_source` ) ;

CREATE UNIQUE INDEX idx_source ON `tbl_sources`   
( `chx_dossier_id_source` IS NULL , `chp_nom_source` , `chp_usage_source` ) ;
','99','2026-05-16 11:53:13.549','2026-05-15 18:39:15.686','0','00_00_00'),
('488','1','remplacer fonction par fragment dans chp_usage_source','99','2026-05-16 15:17:37.477','2026-05-16 11:53:48.467','0','00_00_00'),
('489','1','touche entrée sur formulaire de connexion','99','2026-05-18 14:08:00.503','2026-05-18 08:34:59.266','0','00_00_00'),
('490','1','mettre les imports sous le format
            import( ''/f0?n0=w_rev_vers_sql1_.js&__version='' + this.__ig1.__version ).then( ( m ) => {
                    this.__m_rev_vers_sql1=new m[''w_rev_vers_sql1'']( ''__m_rev_vers_sql1'' , this.__ig1 );
                } );
voir _rev_de_sql_vers_js
','99','2026-05-30 08:02:41.190','2026-05-18 17:17:39.011','0','00_00_00'),
('491','1','mettre l''écran coordonnées dans les autorisations globales','99','2026-05-30 08:02:33.758','2026-05-22 09:48:03.331','0','00_00_00'),
('492','1','remplacer
[__xst] 
.__xst 

            this.__ig1.donnees_retournees.__xsi[__xer].push( ''['' + this.__ig1.nl2() + '']'' );
            return({"__xst" : __xer});
par
            return({"__xst" : __xer,"__xme" : ''['' + this.__ig1.nl2() + '']'' });

détecter les
this.__ig1.donnees_retournees.__xsi[__xer].push( );

remplacer les 
    return({"__xst" : __xer});
    return({"__xst" : __xer,"__xme" : '' ['' + this.__ig1.nl2() + '']''});

__ig1.__xsi[__xer]

','99','2026-05-30 08:02:18.653','2026-05-22 13:52:36.707','0','00_00_00'),
('493','1','supprimer
this.__ig1.donnees_retournees.__xst=__xer;','99','2026-05-26 15:42:34.477','2026-05-26 11:27:36.216','0','00_00_00'),
('494','1','virer est_utilisateur_autre_que_courant  ????','99','2026-05-30 08:54:31.018','2026-05-30 08:03:03.173','0','00_00_00'),
('495','1','valeurs suggerées ( quantite prestation 0 , 0.25 , 0.5 , 0.75 , 1 )','99','2026-06-03 09:31:44.306','2026-05-30 08:04:08.878','0','00_00_00'),
('496','1','rechercher les factures = null dans la liste des prestations','99','2026-06-03 12:05:52.824','2026-05-31 08:44:48.949','0','00_00_00'),
('497','1','dans la requete 186

   egal(champ(`T1`,`fdl_id_prestataire_missaffect`),session(chi_id_utilisateur))','99','2026-06-03 09:31:31.052','2026-05-31 09:41:48.592','0','00_00_00'),
('498','1','dans rev_3
173 => 500
174 => 501
160 => 500



dans rev_1
115 => 418
116 => 419
117 => 420
118 => 421 ( delete )

','99','2026-06-07 08:16:37.990','2026-06-04 09:53:04.363','0','00_00_00'),
('499','1','            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                try{
                    document.getElementById( i ).value=this.filtres[this.fonction_liste][i];
                    if(this.filtres[this.fonction_liste][i] !== ''''){
                        document.getElementById( i ).style.background=''yellow'';
                    }else{
                        document.getElementById( i ).style.background='''';
                    }
                }catch{}
            }
','99','2026-06-06 14:45:20.516','2026-06-04 18:23:29.554','0','00_00_00'),
('500','1','utiliser session(chi_id_utilisateur) dans les requêtes à la place de l''usine est_en_session','4','2026-06-06 11:32:08.667','2026-06-05 10:41:06.739','0','00_00_00'),
('501','1','modifier
chp_priorite_tache
en
che_priorite_tache','99','2026-06-06 13:33:58.239','2026-06-06 12:32:28.125','0','00_00_00'),
('502','1','virer 
champ_pere_est_en_session1 
champ_est_en_session1','3','2026-06-07 10:54:56.204','2026-06-07 10:54:56.204','0','00_00_00'),
('503','1','insert travaux 398','99','2026-06-08 09:24:54.726','2026-06-07 18:17:44.657','0','00_00_00'),
('504','1','ajuster les autorisations sur la modification d''une prestation','2','2026-06-09 10:18:55.794','2026-06-09 10:18:55.794','0','00_00_00'),
('505','1','virer 
ne_pas_prendre_les_valeurs_en_session
est_en_session()
nom_en_session()
che_est_session_genre
chp_nom_en_session_genre','1','2026-06-10 17:12:58.398','2026-06-10 16:58:33.212','0','00_00_00');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_genres offset 0 (37) */
INSERT INTO tbl_genres (  chi_id_genre ,  chp_nom_genre ,  che_ordre_genre ,  chp_prefixe_genre ,  chp_espece_genre ,  che_longueur_genre ,  che_est_primaire_genre ,  che_est_incrément_genre ,  che_est_obligatoire_genre ,  che_a_init_genre ,  che_init_est_mot_genre ,  cht_valeur_init_genre ,  che_est_parmis_genre ,  cht_parmis_genre ,  cht_fonctions_genre ,  che_est_nur_genre ,  che_est_tsm_genre ,  che_est_tsc_genre ,  chd__dtc_genre ,  chd__dtm_genre ,  che__nur_genre ,  che_est_positif_genre ,  cht_particularités_genre ) VALUES
('1','***indéfini***','37','cht','TEXT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('2','id primaire non nulle','1','chi','INTEGER',NULL,'1','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2026-05-06 11:19:08.460','24','1',NULL),
('3','varchar 64 NON NULLE','2','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('4','lien NON NULL','5','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('5','zero_un non nulle à 0','14','che','INTEGER',NULL,'0','0','1','1','0','0','1','0,1',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('6','texte NULL','11','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('7','entier NULL','9','che','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('8','lien NULL','6','chx','INTEGER',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('9','entier NON NULL','7','che','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('10','entier NON NULL à zéro','8','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('11','texte NON NULL','10','cht','TEXT',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('12','varchar 64 NULL','3','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('13','mot de passe','20','chp','VARCHAR',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2026-05-06 13:03:18.644','1','0',NULL),
('14','dt23 création','17','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('15','nur','21','che','INTEGER',NULL,'0','0','1','1','0','0','0',NULL,NULL,'1','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('16','dt23 modification','18','chd','VARCHAR','23','0','0','1','1','1','2000-01-01 00:00:00.000','0',NULL,NULL,'0','1','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('17','varchar 255 NON NULLE','4','chp','VARCHAR','255','0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('18','id utilisateur','22','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-06 14:10:54.357','2025-10-04 07:03:24.668','8','0',NULL),
('19','nom technique','19','cht','VARCHAR','128','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_technique1()','0','0','0','2025-11-19 11:20:36.052','2025-11-19 11:56:43.547','3','0',NULL),
('20','etat_travail','23','chp','VARCHAR','32','0','0','1','1','1','en_file_d_attente','1','en_file_d_attente,en_pause,en_cours,ok_termine,ko_termine,ok_mais_avertissement',NULL,'0','0','0','2026-01-31 08:32:43.577','2026-02-15 14:23:26.251','1','0',NULL),
('21','durée_du_travail','24','chn','FLOAT',NULL,'0','0','0','0','0',NULL,'0',NULL,NULL,'0','0','0','2026-02-15 13:46:17.081','2026-02-15 14:09:42.056','1','0',NULL),
('22','dt10 aaaa_mm_jj','15','chd','VARCHAR','10','0','0','0','1','0','NULL','0',NULL,'test_date_nulle_ou_comprise_entre(''1000_01_01'',''9999_12_31'')','0','0','0','2026-03-14 13:45:06.111','2026-05-09 08:29:20.729','8','0',NULL),
('23','tp8 hh_mm_ss','16','chd','VARCHAR','8','0','0','1','1','1','00_00_00','0',NULL,'test_heure_nulle_ou_comprise_entre(''00_00_00'',''23_59_59'')','0','0','0','2026-03-14 13:51:05.904','2026-05-09 08:29:48.656','4','0',NULL),
('97','texte NULL source_non_rev','13','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,NULL,'0','0','0','2025-10-21 10:14:55.512','2026-01-17 13:29:10.886','1','0','source_non_rev(1)'),
('98','texte NULL source_au_format_rev','12','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'test_est_au_format_rev()','0','0','0','2025-10-20 17:48:22.207','2026-06-08 10:22:54.010','7','0','source_au_format_rev(1)'),
('99','priorité','25','che','INTEGER','2','0','0','1','1','0','0','0',NULL,'test_entier_compris_entre(0,99)','0','0','0','2025-09-06 09:19:20.196','2026-05-06 11:19:30.599','3','0',NULL),
('101','espèce','27','chp','VARCHAR','64','0','0','1','1','1','TEXT','1','TEXT,VARCHAR,INTEGER,FLOAT,DECIMAL,LONGTEXT',NULL,'0','0','0','2000-01-01 00:00:00.000','2026-04-07 10:18:08.507','1','0',NULL),
('102','préfixe','26','chp','VARCHAR','3','0','0','1','1','1','cht','1','cht,chi,che,chx,chp,chd,chu,chn','test_doit_contenir_n_caracteres(3)','0','0','0','2000-01-01 00:00:00.000','2026-05-01 10:04:28.058','4','0',NULL),
('103','type_requete','28','chp','VARCHAR','64','0','0','1','1','1','liste_ecran','1','liste_ecran,insert,select,update,delete,requete_manuelle',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('104','fournisseur bdd','29','chp','VARCHAR','64','0','0','1','1','1','sqlite','1','sqlite,mysql',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('105','type_rev','30','chp','VARCHAR','1','0','0','1','0','0','i','1','i,c,f',NULL,'0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('106','nom de fichier','32','chp','VARCHAR','64','0','0','1','0','0',NULL,'0',NULL,'test_du_nom_de_fichier1()','0','0','0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL),
('107','fonctions de champ','33','cht','TEXT',NULL,'0','0','0','1','0','NULL','0',NULL,'test_fonctions_de_c_fonctions1()','0','0','0','2000-01-01 00:00:00.000','2025-10-03 18:16:54.710','3','0',NULL),
('108','nom de dossier','31','chp','VARCHAR','64','0','0','0','1','0','NULL','0',NULL,'test_du_nom_de_fichier1()','0','0','0','2000-01-01 00:00:00.000','2026-04-30 16:01:50.901','1','0',NULL),
('109','id projet','34','chx','INTEGER',NULL,'0','0','1','0','0',NULL,'0',NULL,NULL,'0','0','0','2025-09-07 09:46:49.711','2026-01-17 12:57:08.547','3','0',NULL),
('110','longueur de champ','35','chp','VARCHAR','20','0','0','0','1','0','NULL','0',NULL,'test_longueur_de_champ_dans_genre()','0','0','0','2026-03-29 13:29:01.613','2026-05-01 10:31:30.055','6','0',NULL),
('112','usage du source','36','chp','VARCHAR','32','0','0','1','1','1','fichier','1','fichier,fragment',NULL,'0','0','0','2026-05-15 17:38:48.006','2026-05-16 12:06:10.386','3','0',NULL);
/*================================================================================ FIN BLOC TABLE tbl_genres offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_bdds offset 0 (1) */
INSERT INTO tbl_bdds (  chi_id_basedd ,  chp_rev_travail_basedd ,  chp_fournisseur_basedd ,  chp_commentaire_basedd ,  chd__dtm_basedd ,  chd__dtc_basedd ,  che__nur_basedd ) VALUES
('1','meta(
   #(),
   genre_meta(base_de_données),
   default_charset(''utf8mb4''),
   collate(''utf8mb4_unicode_ci''),
   transform_base_sur_svg(translate(2.5,6.5))
),
créer_table(
   nom_de_la_table(''tbl_projets''),
   meta(
      nom_de_la_table(''tbl_projets''),
      table(''tbl_projets''),
      genre_meta(table_de_base),
      rang_de_la_table(0),
      permet_la_gestion_de(''projet''),
      distinction_pour_liste(''liste des projets''),
      distinction_pour_isad(''d\''un projet''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(3)''),
      transform_base_sur_svg(translate(11,344))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_projet''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_projet''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id projet''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''projet'')
         )
      ),
      champ(
         nom_du_champ(''chp_nom_projet''),
         espece_du_champ(TEXT),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_projet''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom du projet''),
            entete_distant_du_champ(''nom projet''),
            typologie(chi),
            genre(11),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''projet'')
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_projet''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_projet''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire sur le projet''),
            entete_distant_du_champ(''commentaire projet''),
            typologie(chi),
            genre(6),
            nom_bref_libelle_lien(''projet'')
         )
      ),
      champ(
         nom_du_champ(''che__nur_projet''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_projet''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            entete_distant_du_champ('' nur projet''),
            typologie(chi),
            genre(10),
            nom_bref_libelle_lien(''projet''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_projet''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_projet''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            entete_distant_du_champ('' dtm projet''),
            typologie(chd),
            genre(16),
            nom_bref_libelle_lien(''projet''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_projet''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_projet''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            entete_distant_du_champ('' dtc projet''),
            typologie(chi),
            genre(14),
            nom_bref_libelle_lien(''projet''),
            masquer_champ_dans_svg(1)
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
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_base_sur_svg(translate(10,33))
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
            genre(2),
            nom_bref_libelle_lien(''groupe'')
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
            entete_distant_du_champ(''parent groupe''),
            typologie(chx),
            genre(8),
            nom_bref_libelle_lien(''groupe'')
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
      transform_base_sur_svg(translate(9,189))
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
            genre(2),
            nom_bref_libelle_lien(''metier'')
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
            entete_distant_du_champ(''parent metier''),
            typologie(chx),
            genre(8),
            nom_bref_libelle_lien(''metier'')
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
      transform_base_sur_svg(translate(238,203))
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
            genre(2),
            nom_bref_libelle_lien(''acces'')
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
            nom_bref_libelle_lien(''acces'')
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
            entete_distant_du_champ(''groupe accès''),
            typologie(chx),
            genre(4),
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
            entete_distant_du_champ(''metier accès''),
            typologie(chx),
            genre(4),
            nom_bref_libelle_lien(''acces'')
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
            genre(11),
            nom_bref_libelle_lien(''acces'')
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
            genre(5),
            nom_bref_libelle_lien(''acces'')
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_dossiers''),
   meta(
      nom_de_la_table(''tbl_dossiers''),
      table(''tbl_dossiers''),
      genre_meta(table_de_base),
      rang_de_la_table(60),
      permet_la_gestion_de(''dossier''),
      distinction_pour_liste(''liste des dossiers''),
      distinction_pour_isad(''d\''un dossier''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(9)''),
      transform_base_sur_svg(translate(232,19))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_dossier''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_dossier''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id dossier''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''dossier'')
         )
      ),
      champ(
         nom_du_champ(''chp_nom_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_dossier''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom du dossier''),
            entete_distant_du_champ(''nom dossier''),
            typologie(chp),
            genre(108),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''dossier'')
         )
      ),
      champ(
         nom_du_champ(''chx_parent_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_dossiers,chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''1''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_parent_dossier''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            entete_distant_du_champ(''parent dossier''),
            typologie(chx),
            genre(4),
            refe_parent_gauche(1),
            nom_bref_libelle_lien(''dossier'')
         )
      ),
      champ(
         nom_du_champ(''che__nur_dossier''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_dossier''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            entete_distant_du_champ('' nur dossier''),
            typologie(chi),
            genre(10),
            nom_bref_libelle_lien(''dossier''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_dossier''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            entete_distant_du_champ('' dtm dossier''),
            typologie(chd),
            genre(16),
            nom_bref_libelle_lien(''dossier''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_dossier''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_dossier''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            entete_distant_du_champ('' dtc dossier''),
            typologie(chi),
            genre(14),
            nom_bref_libelle_lien(''dossier''),
            masquer_champ_dans_svg(1)
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
      rang_de_la_table(70),
      permet_la_gestion_de(''source''),
      distinction_pour_liste(''liste des sources''),
      distinction_pour_isad(''d\''un source''),
      transform_base_sur_svg(translate(555,8))
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
            genre(2),
            nom_bref_libelle_lien(''source'')
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
            abrege_du_champ(''nom du source''),
            entete_distant_du_champ(''nom source''),
            typologie(chi),
            genre(19),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''source'')
         )
      ),
      champ(
         nom_du_champ(''cht_rev_source''),
         espece_du_champ(LONGTEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_source''),
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''rev''),
            entete_distant_du_champ(''rev source''),
            typologie(chi),
            genre(98),
            nom_bref_libelle_lien(''source'')
         )
      ),
      champ(
         nom_du_champ(''cht_genere_source''),
         espece_du_champ(LONGTEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_genere_source''),
            nom_bref_du_champ(''genere''),
            abrege_du_champ(''genere''),
            entete_distant_du_champ(''genere source''),
            typologie(chi),
            genre(97),
            nom_bref_libelle_lien(''source'')
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
            genre(5),
            nom_bref_libelle_lien(''source'')
         )
      ),
      champ(
         nom_du_champ(''chx_dossier_id_source''),
         espece_du_champ(INTEGER),
         references(tbl_dossiers,chi_id_dossier),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_dossier_id_source''),
            nom_bref_du_champ(''dossier id''),
            abrege_du_champ(''dossier id''),
            entete_distant_du_champ(''dossier id source''),
            typologie(chx),
            genre(8),
            nom_bref_libelle_lien(''source'')
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
            genre(6),
            nom_bref_libelle_lien(''source'')
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
            nom_bref_libelle_lien(''source''),
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
            entete_distant_du_champ('' dtc source''),
            typologie(chd),
            genre(14),
            nom_bref_libelle_lien(''source''),
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
            entete_distant_du_champ('' nur source''),
            typologie(chi),
            genre(10),
            nom_bref_libelle_lien(''source''),
            masquer_champ_dans_svg(1)
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
            entete_distant_du_champ(''autorisation globale source''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''source'')
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
            genre(98),
            nom_bref_libelle_lien(''source'')
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
            genre(97),
            nom_bref_libelle_lien(''source'')
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
            genre(6),
            nom_bref_libelle_lien(''source'')
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
            abrege_du_champ(''pour util''),
            entete_distant_du_champ(''pour util source''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''source'')
         )
      ),
      champ(
         nom_du_champ(''chp_usage_source''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(32),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''fichier''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_usage_source''),
            nom_bref_du_champ(''usage''),
            abrege_du_champ(''usage du source''),
            entete_distant_du_champ(''usage source''),
            typologie(chp),
            genre(112),
            nom_bref_libelle_lien(''source'')
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
      rang_de_la_table(75),
      permet_la_gestion_de(''autorisation''),
      distinction_pour_liste(''liste des autorisations''),
      distinction_pour_isad(''d\''une autorisation''),
      transform_base_sur_svg(translate(823,256))
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
            genre(2),
            nom_bref_libelle_lien(''autorisation'')
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
            entete_distant_du_champ(''source autorisation''),
            typologie(chx),
            genre(4),
            nom_bref_libelle_lien(''autorisation'')
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
            entete_distant_du_champ(''acces autorisation''),
            typologie(chx),
            genre(4),
            nom_bref_libelle_lien(''autorisation'')
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
            genre(5),
            nom_bref_libelle_lien(''autorisation'')
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
      rang_de_la_table(78),
      permet_la_gestion_de(''menu''),
      distinction_pour_liste(''liste des menus''),
      distinction_pour_isad(''d\''un menu''),
      transform_base_sur_svg(translate(1101,298))
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
            genre(2),
            nom_bref_libelle_lien(''menu'')
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
            genre(11),
            nom_bref_libelle_lien(''menu'')
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
            entete_distant_du_champ(''autorisation menu''),
            typologie(chx),
            genre(4),
            nom_bref_libelle_lien(''menu'')
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
            nom_bref_libelle_lien(''menu'')
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
            genre(98),
            nom_bref_libelle_lien(''menu'')
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
            genre(98),
            nom_bref_libelle_lien(''menu'')
         )
      ),
      champ(
         nom_du_champ(''cht_condition_js_menu''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_condition_js_menu''),
            nom_bref_du_champ(''condition js''),
            abrege_du_champ(''condition au format js''),
            entete_distant_du_champ(''condition js menu''),
            typologie(cht),
            genre(97),
            nom_bref_libelle_lien(''menu'')
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
      rang_de_la_table(80),
      permet_la_gestion_de(''utilisateur''),
      distinction_pour_liste(''liste des utilisateurs''),
      distinction_pour_isad(''d\''un utilisateur''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(2)''),
      transform_base_sur_svg(translate(490,341))
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
            genre(2),
            nom_bref_libelle_lien(''utilisateur'')
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
            entete_distant_du_champ(''nom de connexion utilisateur''),
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
            abrege_du_champ(''mot de passe de l\''utilisateur''),
            entete_distant_du_champ(''mot de passe utilisateur''),
            typologie(cht),
            genre(13),
            nom_bref_libelle_lien(''utilisateur'')
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
            genre(6),
            nom_bref_libelle_lien(''utilisateur'')
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
            genre(10),
            nom_bref_libelle_lien(''utilisateur'')
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
            genre(4),
            nom_bref_libelle_lien(''utilisateur'')
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
            nom_bref_libelle_lien(''utilisateur''),
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
            entete_distant_du_champ('' dtc utilisateur''),
            typologie(chi),
            genre(14),
            nom_bref_libelle_lien(''utilisateur''),
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
            entete_distant_du_champ('' nur utilisateur''),
            typologie(chi),
            genre(10),
            nom_bref_libelle_lien(''utilisateur''),
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
            genre(5),
            nom_bref_libelle_lien(''utilisateur'')
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
      rang_de_la_table(90),
      permet_la_gestion_de(''tâche''),
      distinction_pour_liste(''liste des tâches''),
      distinction_pour_isad(''d\''une tâche''),
      transform_base_sur_svg(translate(871,413))
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
            genre(2),
            nom_bref_libelle_lien(''tache'')
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
            genre(18),
            nom_bref_libelle_lien(''tache'')
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
            est_libelle_lien(1),
            nom_bref_libelle_lien(''tache'')
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
            nom_bref_libelle_lien(''tache'')
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
            nom_bref_libelle_lien(''tache''),
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
            entete_distant_du_champ('' dtc tâche''),
            typologie(chi),
            genre(14),
            nom_bref_libelle_lien(''tache''),
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
            entete_distant_du_champ('' nur tâche''),
            typologie(che),
            genre(15),
            nom_bref_libelle_lien(''tache''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd_une_heure_tache''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(8),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''00_00_00''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd_une_heure_tache''),
            nom_bref_du_champ(''une heure''),
            abrege_du_champ(''une heure''),
            entete_distant_du_champ(''une heure tâche''),
            typologie(chd),
            genre(23),
            nom_bref_libelle_lien(''tache'')
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_genres''),
   meta(
      nom_de_la_table(''tbl_genres''),
      table(''tbl_genres''),
      genre_meta(table_de_base),
      rang_de_la_table(100),
      permet_la_gestion_de(''genre''),
      distinction_pour_liste(''liste des genres''),
      distinction_pour_isad(''d\''un genre''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      fonctions_coherence1(''
choix(si(condition(et(ou(par.chp_espece_genre,par.che_longueur_genre),egalstricte(appelf(element(par.chp_espece_genre),nomf(toUpperCase),p()),\''VARCHAR\''),egalstricte(par.che_longueur_genre,null))),alors(
      throw(new(appelf(nomf(Error),p(\''une longueur doit être indiquée pour le l\\\''espèce VARCHAR\'')))))))
choix(si(condition(et(ou(par.chp_espece_genre,par.che_longueur_genre),egalstricte(appelf(element(par.chp_espece_genre),nomf(toUpperCase),p()),\''DECIMAL\''),egalstricte(par.che_longueur_genre,null))),alors(
      throw(new(appelf(nomf(Error),p(\''une longueur doit être indiquée pour le l\\\''espèce DECIMAL\'')))))))''),
      transform_base_sur_svg(translate(17,458))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_genre''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_genre''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id genre''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''chp_nom_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nom_genre''),
            nom_bref_du_champ(''nom''),
            abrege_du_champ(''nom du genre''),
            entete_distant_du_champ(''nom genre''),
            typologie(chp),
            genre(3),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_ordre_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_ordre_genre''),
            nom_bref_du_champ(''ordre''),
            abrege_du_champ(''ordre''),
            entete_distant_du_champ(''ordre genre''),
            typologie(che),
            genre(10),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''chp_prefixe_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(3),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''cht''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_prefixe_genre''),
            nom_bref_du_champ(''préfixe''),
            abrege_du_champ(''prefixe''),
            entete_distant_du_champ(''préfixe genre''),
            typologie(chp),
            genre(102),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''chp_espece_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''TEXT''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_espece_genre''),
            nom_bref_du_champ(''espèce''),
            abrege_du_champ(''espece''),
            entete_distant_du_champ(''espèce genre''),
            typologie(chp),
            genre(101),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_longueur_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(20),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_longueur_genre''),
            nom_bref_du_champ(''longueur''),
            abrege_du_champ(''longueur du genre''),
            entete_distant_du_champ(''longueur genre''),
            typologie(chp),
            genre(110),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_primaire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_primaire_genre''),
            nom_bref_du_champ(''est primaire''),
            abrege_du_champ(''est primaire''),
            entete_distant_du_champ(''est primaire genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_incrément_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_incrément_genre''),
            nom_bref_du_champ(''est incrément''),
            abrege_du_champ(''est incrément''),
            entete_distant_du_champ(''est incrément genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_obligatoire_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_obligatoire_genre''),
            nom_bref_du_champ(''est obligatoire''),
            abrege_du_champ(''est obligatoire''),
            entete_distant_du_champ(''est obligatoire genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_a_init_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_a_init_genre''),
            nom_bref_du_champ(''a init''),
            abrege_du_champ(''a init''),
            entete_distant_du_champ(''a init genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_init_est_mot_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_init_est_mot_genre''),
            nom_bref_du_champ(''init est mot''),
            abrege_du_champ(''init est mot''),
            entete_distant_du_champ(''init est mot genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''cht_valeur_init_genre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_valeur_init_genre''),
            nom_bref_du_champ(''valeur init''),
            abrege_du_champ(''valeur init''),
            entete_distant_du_champ(''valeur init genre''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_parmis_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_parmis_genre''),
            nom_bref_du_champ(''est parmis''),
            abrege_du_champ(''est parmis''),
            entete_distant_du_champ(''est parmis genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''cht_parmis_genre''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_parmis_genre''),
            nom_bref_du_champ(''parmis''),
            abrege_du_champ(''parmis''),
            entete_distant_du_champ(''parmis genre''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''cht_fonctions_genre''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_fonctions_genre''),
            nom_bref_du_champ(''fonctions''),
            abrege_du_champ(''fonctions''),
            entete_distant_du_champ(''fonctions genre''),
            typologie(cht),
            genre(107),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_nur_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_nur_genre''),
            nom_bref_du_champ(''est nur''),
            abrege_du_champ(''est nur''),
            entete_distant_du_champ(''est nur genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_tsm_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_tsm_genre''),
            nom_bref_du_champ(''est tsm''),
            abrege_du_champ(''est tsm''),
            entete_distant_du_champ(''est tsm genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''che_est_tsc_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_tsc_genre''),
            nom_bref_du_champ(''est tsc''),
            abrege_du_champ(''est tsc''),
            entete_distant_du_champ(''est tsc genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_genre''),
            nom_bref_du_champ(''dtc''),
            abrege_du_champ('' dtc''),
            entete_distant_du_champ(''dtc genre''),
            typologie(chd),
            genre(14),
            nom_bref_libelle_lien(''genre''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_genre''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_genre''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            entete_distant_du_champ('' dtm genre''),
            typologie(chd),
            genre(16),
            nom_bref_libelle_lien(''genre''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che__nur_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_genre''),
            nom_bref_du_champ(''nur''),
            abrege_du_champ('' nur''),
            entete_distant_du_champ(''nur genre''),
            typologie(che),
            genre(15),
            nom_bref_libelle_lien(''genre''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_est_positif_genre''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_positif_genre''),
            nom_bref_du_champ(''est positif''),
            abrege_du_champ(''est positif''),
            entete_distant_du_champ(''est positif genre''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''genre'')
         )
      ),
      champ(
         nom_du_champ(''cht_particularités_genre''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_particularités_genre''),
            nom_bref_du_champ(''particularités''),
            abrege_du_champ(''particularités''),
            entete_distant_du_champ(''particularités genre''),
            typologie(cht),
            genre(98),
            nom_bref_libelle_lien(''genre'')
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_bdds''),
   meta(
      nom_de_la_table(''tbl_bdds''),
      table(''tbl_bdds''),
      genre_meta(table_de_base),
      rang_de_la_table(110),
      permet_la_gestion_de(''base''),
      distinction_pour_liste(''liste des bases de données''),
      distinction_pour_isad(''d\''une base de donnée''),
      fonctions_spéciales1(''ne_pas_supprimer_id_un(1)''),
      transform_base_sur_svg(translate(833,15))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_basedd''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_basedd''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id base''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''basedd'')
         )
      ),
      champ(
         nom_du_champ(''chp_rev_travail_basedd''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_rev_travail_basedd''),
            nom_bref_du_champ(''rev travail''),
            abrege_du_champ(''rev travail''),
            entete_distant_du_champ(''rev travail base''),
            typologie(cht),
            genre(98),
            nom_bref_libelle_lien(''basedd'')
         )
      ),
      champ(
         nom_du_champ(''chp_fournisseur_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''sqlite''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_fournisseur_basedd''),
            nom_bref_du_champ(''fournisseur''),
            abrege_du_champ(''fournisseur''),
            entete_distant_du_champ(''fournisseur base''),
            typologie(chi),
            genre(104),
            nom_bref_libelle_lien(''basedd'')
         )
      ),
      champ(
         nom_du_champ(''chp_commentaire_basedd''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_commentaire_basedd''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            entete_distant_du_champ(''commentaire base''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''basedd'')
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_basedd''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            entete_distant_du_champ('' dtm base''),
            typologie(chd),
            genre(16),
            nom_bref_libelle_lien(''basedd''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_basedd''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_basedd''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            entete_distant_du_champ('' dtc base''),
            typologie(chi),
            genre(14),
            nom_bref_libelle_lien(''basedd''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che__nur_basedd''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_basedd''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            entete_distant_du_champ('' nur base''),
            typologie(chi),
            genre(10),
            nom_bref_libelle_lien(''basedd''),
            masquer_champ_dans_svg(1)
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_requetes''),
   meta(
      nom_de_la_table(''tbl_requetes''),
      table(''tbl_requetes''),
      genre_meta(table_de_base),
      rang_de_la_table(120),
      permet_la_gestion_de(''requete''),
      distinction_pour_liste(''liste des requetes''),
      distinction_pour_isad(''d\''une requete''),
      transform_base_sur_svg(translate(1052,19))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_requete''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_requete''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id requete''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''cht_commentaire_requete''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_commentaire_requete''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            entete_distant_du_champ(''commentaire requete''),
            typologie(cht),
            genre(6),
            est_libelle_lien(1),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''chp_type_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''liste_ecran''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_type_requete''),
            nom_bref_du_champ(''type''),
            abrege_du_champ(''type de requête''),
            entete_distant_du_champ(''type requete''),
            typologie(chp),
            genre(103),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''cht_rev_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_requete''),
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''format rev de la requête''),
            entete_distant_du_champ(''rev requete''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''cht_sql_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_sql_requete''),
            nom_bref_du_champ(''sql''),
            abrege_du_champ(''format sql de la requête''),
            entete_distant_du_champ(''sql requete''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''cht_matrice_requete''),
         espece_du_champ(TEXT),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_matrice_requete''),
            nom_bref_du_champ(''matrice''),
            abrege_du_champ(''format matriciel de la requête''),
            entete_distant_du_champ(''matrice requete''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''che__nur_requete''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che__nur_requete''),
            nom_bref_du_champ('' nur''),
            abrege_du_champ('' nur''),
            entete_distant_du_champ('' nur requete''),
            typologie(che),
            genre(15),
            nom_bref_libelle_lien(''requete''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtm_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtm_requete''),
            nom_bref_du_champ('' dtm''),
            abrege_du_champ('' dtm''),
            entete_distant_du_champ('' dtm requete''),
            typologie(chd),
            genre(16),
            nom_bref_libelle_lien(''requete''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''chd__dtc_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd__dtc_requete''),
            nom_bref_du_champ('' dtc''),
            abrege_du_champ('' dtc''),
            entete_distant_du_champ('' dtc requete''),
            typologie(chd),
            genre(14),
            nom_bref_libelle_lien(''requete''),
            masquer_champ_dans_svg(1)
         )
      ),
      champ(
         nom_du_champ(''che_est_souche_requete''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''che_est_souche_requete''),
            nom_bref_du_champ(''est souche''),
            abrege_du_champ(''requête souche ?''),
            entete_distant_du_champ(''est souche requete''),
            typologie(che),
            genre(5),
            nom_bref_libelle_lien(''requete'')
         )
      ),
      champ(
         nom_du_champ(''chp_table_reference_requete''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_table_reference_requete''),
            nom_bref_du_champ(''table de reference''),
            abrege_du_champ(''table de référence de la requête''),
            entete_distant_du_champ(''table de reference requete''),
            typologie(chp),
            genre(12),
            nom_bref_libelle_lien(''requete'')
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_travaux''),
   meta(
      nom_de_la_table(''tbl_travaux''),
      table(''tbl_travaux''),
      genre_meta(table_de_base),
      rang_de_la_table(130),
      permet_la_gestion_de(''travail''),
      distinction_pour_liste(''liste des travaux''),
      distinction_pour_isad(''d\''un travail''),
      transform_base_sur_svg(translate(800,543))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_travail''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_travail''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id du travail''),
            entete_distant_du_champ(''id travail''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''chp_resume_travail''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_resume_travail''),
            nom_bref_du_champ(''resumé''),
            abrege_du_champ(''résumé du travail''),
            entete_distant_du_champ(''resumé travail''),
            typologie(chp),
            genre(3),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''cht_rev_travail''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(false),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_rev_travail''),
            nom_bref_du_champ(''rev''),
            abrege_du_champ(''description rev du travail''),
            entete_distant_du_champ(''rev travail''),
            typologie(cht),
            genre(98),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''chx_utilisateur_travail''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         references(tbl_utilisateurs,chi_id_utilisateur),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_utilisateur_travail''),
            nom_bref_du_champ(''utilisateur''),
            abrege_du_champ(''utilisateur du travail''),
            entete_distant_du_champ(''utilisateur travail''),
            typologie(chx),
            genre(4),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''cht_utilisateur_travail''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_utilisateur_travail''),
            nom_bref_du_champ(''nom utilisateur''),
            abrege_du_champ(''nom utilisateur''),
            entete_distant_du_champ(''nom utilisateur travail''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''chd_dtc_travail''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(23),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''2000-01-01 00:00:00.000''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chd_dtc_travail''),
            nom_bref_du_champ(''dt création''),
            abrege_du_champ(''date création''),
            entete_distant_du_champ(''dt création travail''),
            typologie(chd),
            genre(16),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''chp_etat_travail''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(32),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(1),
         valeur_par_defaut(''en_file_d_attente''),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_etat_travail''),
            nom_bref_du_champ(''état''),
            abrege_du_champ(''état du travail''),
            entete_distant_du_champ(''état travail''),
            typologie(chp),
            genre(20),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''chx_projet_travail''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_projet_travail''),
            nom_bref_du_champ(''projet''),
            abrege_du_champ(''référence du projet''),
            entete_distant_du_champ(''projet travail''),
            typologie(chx),
            genre(4),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''cht_log_travail''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''cht_log_travail''),
            nom_bref_du_champ(''log''),
            abrege_du_champ(''contenu du log''),
            entete_distant_du_champ(''log travail''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''travail'')
         )
      ),
      champ(
         nom_du_champ(''chn_duree_travail''),
         espece_du_champ(FLOAT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(0),
         meta(
            genre_meta(champ),
            nom_du_champ(''chn_duree_travail''),
            nom_bref_du_champ(''durée''),
            abrege_du_champ(''durée''),
            entete_distant_du_champ(''durée travail''),
            typologie(chn),
            genre(21),
            nom_bref_libelle_lien(''travail'')
         )
      )
   )
),
créer_table(
   nom_de_la_table(''tbl_revs''),
   meta(
      nom_de_la_table(''tbl_revs''),
      table(''tbl_revs''),
      genre_meta(table_de_base),
      rang_de_la_table(9999),
      permet_la_gestion_de(''rev''),
      distinction_pour_liste(''liste des revs''),
      distinction_pour_isad(''d\''un rev''),
      transform_base_sur_svg(translate(320,528))
   ),
   champs(
      champ(
         nom_du_champ(''chi_id_rev''),
         espece_du_champ(INTEGER),
         primary_key(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chi_id_rev''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id rev''),
            typologie(chi),
            genre(2),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_provenance_rev''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(64),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_provenance_rev''),
            nom_bref_du_champ(''provenance''),
            abrege_du_champ(''provenance''),
            entete_distant_du_champ(''provenance rev''),
            typologie(cho),
            genre(12),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chx_source_rev''),
         espece_du_champ(INTEGER),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chx_source_rev''),
            nom_bref_du_champ(''source''),
            abrege_du_champ(''source''),
            entete_distant_du_champ(''source rev''),
            typologie(chx),
            genre(7),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_id_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_id_rev''),
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id''),
            entete_distant_du_champ(''id rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_valeur_rev''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_valeur_rev''),
            nom_bref_du_champ(''valeur''),
            abrege_du_champ(''valeur''),
            entete_distant_du_champ(''valeur rev''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_type_rev''),
         espece_du_champ(VARCHAR),
         longueur_du_champ(1),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_type_rev''),
            nom_bref_du_champ(''type''),
            abrege_du_champ(''type''),
            entete_distant_du_champ(''type rev''),
            typologie(cho),
            genre(105),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_niveau_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_niveau_rev''),
            nom_bref_du_champ(''niveau''),
            abrege_du_champ(''niveau''),
            entete_distant_du_champ(''niveau rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_quotee_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_quotee_rev''),
            nom_bref_du_champ(''quotee''),
            abrege_du_champ(''quotee''),
            entete_distant_du_champ(''quotee rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_pos_premier_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_premier_rev''),
            nom_bref_du_champ(''pos premier''),
            abrege_du_champ(''pos premier''),
            entete_distant_du_champ(''pos premier rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_pos_dernier_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_dernier_rev''),
            nom_bref_du_champ(''pos dernier''),
            abrege_du_champ(''pos dernier''),
            entete_distant_du_champ(''pos dernier rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_parent_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_parent_rev''),
            nom_bref_du_champ(''parent''),
            abrege_du_champ(''parent''),
            entete_distant_du_champ(''parent rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_nbr_enfants_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_nbr_enfants_rev''),
            nom_bref_du_champ(''nbr enfants''),
            abrege_du_champ(''nbr enfants''),
            entete_distant_du_champ(''nbr enfants rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_num_enfant_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_num_enfant_rev''),
            nom_bref_du_champ(''num enfant''),
            abrege_du_champ(''num enfant''),
            entete_distant_du_champ(''num enfant rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_profondeur_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_profondeur_rev''),
            nom_bref_du_champ(''profondeur''),
            abrege_du_champ(''profondeur''),
            entete_distant_du_champ(''profondeur rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_pos_ouver_parenthese_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_pos_ouver_parenthese_rev''),
            nom_bref_du_champ(''pos ouver parenthese''),
            abrege_du_champ(''pos ouver parenthese''),
            entete_distant_du_champ(''pos ouver parenthese rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_enfant_suivant_rev''),
         espece_du_champ(INTEGER),
         non_nulle(1),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_enfant_suivant_rev''),
            nom_bref_du_champ(''enfant suivant''),
            abrege_du_champ(''enfant suivant''),
            entete_distant_du_champ(''enfant suivant rev''),
            typologie(che),
            genre(9),
            nom_bref_libelle_lien(''rev'')
         )
      ),
      champ(
         nom_du_champ(''chp_commentaire_rev''),
         espece_du_champ(TEXT),
         a_une_valeur_par_defaut(1),
         la_valeur_par_defaut_est_caractere(0),
         valeur_par_defaut(NULL),
         meta(
            genre_meta(champ),
            nom_du_champ(''chp_commentaire_rev''),
            nom_bref_du_champ(''commentaire''),
            abrege_du_champ(''commentaire''),
            entete_distant_du_champ(''commentaire rev''),
            typologie(cht),
            genre(6),
            nom_bref_libelle_lien(''rev'')
         )
      )
   )
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_projets''),
   nom_de_l_index(''idx_nom_unique_projets''),
   meta(nom_de_l_index(idx_nom_unique_projets),genre_meta(index_de_table),message(''ce projet existe déjà'')),
   champs(''chp_nom_projet''),
   unique()
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
   nom_de_la_table_pour_l_index(''tbl_dossiers''),
   nom_de_l_index(''idx_projet_et_nom_dossiers''),
   meta(nom_de_l_index(idx_projet_et_nom_dossiers),genre_meta(index_de_table),message(''Ce dossier existe déjà'')),
   champs(null_est_unique(''chx_parent_dossier''),''chp_nom_dossier''),
   unique()
),
#(=================================================================),
ajouter_index(
   #(),
   nom_de_la_table_pour_l_index(''tbl_sources''),
   nom_de_l_index(''idx_source''),
   meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('''')),
   champs(null_est_unique(''chx_dossier_id_source''),''chp_nom_source'',''chp_usage_source''),
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
   nom_de_la_table_pour_l_index(''tbl_revs''),
   nom_de_l_index(''idx_ligne_rev''),
   meta(nom_de_l_index(idx_ligne_rev),genre_meta(index_de_table),message('''')),
   champs(''chi_id_rev''),
   unique()
)','sqlite',NULL,'2000-01-01 00:00:00','2000-01-01 00:00:00','0');
/*================================================================================ FIN BLOC TABLE tbl_bdds offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_requetes offset 0 (144) */
INSERT INTO tbl_requetes (  chi_id_requete ,  cht_commentaire_requete ,  chp_type_requete ,  cht_rev_requete ,  cht_sql_requete ,  cht_matrice_requete ,  che__nur_requete ,  chd__dtm_requete ,  chd__dtc_requete ,  che_est_souche_requete ,  chp_table_reference_requete ) VALUES
('101','utilisateur par nom_de_connexion','select','sélectionner(
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
   valeurs(affecte(champ(`chi_compteur1_utilisateur`),plus(chi_compteur1_utilisateur,1))),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('108','utilisateurs','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`)
      champ(`T0`,`chp_parametres_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chx_acces_utilisateur`),
      champ(`T1`,`chp_nom_acces`),
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
   conditions(egal(champ(`T0`,`chi_id_utilisateur`),(:T0_chi_id_utilisateur)))
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_utilisateurs'),
('109','utilisateur sur page profile','update','modifier(
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
;',NULL,'2','2025-09-07 10:51:12.709','2000-01-01 00:00:00.000','1','tbl_taches'),
('111','tâches','insert','insérer(
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
);',NULL,'44','2025-09-06 14:41:31.713','2000-01-01 00:00:00.000','1','tbl_taches'),
('112','tâches par id','select','sélectionner(
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
('113','tâches texte et priorité par id','update','modifier(
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
('114','tâches par id','delete','supprimer(
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
('121','utilisateur','select','sélectionner(

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
('122','utilisateur','update','modifier(
   valeurs(affecte(champ(`chp_nom_de_connexion_utilisateur`),:n_chp_nom_de_connexion_utilisateur),affecte(champ(`chx_acces_utilisateur`),:n_chx_acces_utilisateur),affecte(champ(`che_actif_utilisateur`),:n_che_actif_utilisateur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_utilisateurs,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_utilisateur`),:c_chi_id_utilisateur))
)  ','UPDATE b1.tbl_utilisateurs SET 
   `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
   `chx_acces_utilisateur` = :n_chx_acces_utilisateur , 
   `che_actif_utilisateur` = :n_che_actif_utilisateur
WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('123','utilisateur','delete','supprimer(

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

   valeurs(affecte(champ(`chp_nom_metier`),:chp_nom_metier),affecte(champ(`chx_parent_metier`),:chx_parent_metier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_metier`),:T0_chi_id_metier),comme(champ(`T0`,`chp_nom_metier`),:T0_chp_nom_metier))
   )
)  ','INSERT INTO b1.`tbl_metiers`(
    `chp_nom_metier` , 
    `chx_parent_metier`
) VALUES (
    :chp_nom_metier , 
    :chx_parent_metier
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('127','métier','update','modifier(

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

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_metiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_metier`),:chi_id_metier))
)  ','DELETE FROM b1.tbl_metiers
WHERE `chi_id_metier` = :chi_id_metier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_metiers'),
('130','liste des groupes','liste_ecran','sélectionner(
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
)','SELECT 
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
;',NULL,'1','2025-10-07 07:49:40.138','2000-01-01 00:00:00.000','1','tbl_groupes'),
('131','groupes','select','sélectionner(

   valeurs( champ( `T0` , `chi_id_groupe` ) , champ( `T0` , `chp_nom_groupe` ) , champ( `T0` , `chx_parent_groupe` ) , champ( `T1` , `chp_nom_groupe` )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , alias(T0) , base(b1) ))
      ),
      jointure_gauche(
         source( nom_de_la_table( tbl_groupes , alias(T1) , base(b1) )),
         contrainte( egal( champ( T1 , chi_id_groupe ) , champ( T0 , chx_parent_groupe ) ))
      )
   ),
   conditions( egal( champ( `T0` , `chi_id_groupe` ) , :T0_chi_id_groupe ))
)  ','SELECT 
`T0`.`chi_id_groupe` , `T0`.`chp_nom_groupe` , `T0`.`chx_parent_groupe` , `T1`.`chp_nom_groupe`
 FROM b1.tbl_groupes T0
 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_parent_groupe

WHERE `T0`.`chi_id_groupe` = :T0_chi_id_groupe
;',NULL,'1','2025-10-07 12:18:14.401','2000-01-01 00:00:00.000','1','tbl_groupes'),
('132','groupes','insert','insérer(

   valeurs( affecte( champ( `chp_nom_groupe` ) , :chp_nom_groupe ) , affecte( champ( `chx_parent_groupe` ) , :chx_parent_groupe )),
   provenance(
      table_reference(
         source( nom_de_la_table( tbl_groupes , base(b1) ))
      )
   )
)  ','INSERT INTO b1.`tbl_groupes`(
    `chp_nom_groupe` , 
    `chx_parent_groupe`
) VALUES (
    :chp_nom_groupe , 
    :chx_parent_groupe
);',NULL,'1','2025-10-07 12:17:57.926','2000-01-01 00:00:00.000','1','tbl_groupes'),
('133','groupes','update','modifier(

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
WHERE `chi_id_groupe` = :c_chi_id_groupe ;',NULL,'1','2025-10-07 12:18:25.770','2000-01-01 00:00:00.000','1','tbl_groupes'),
('134','groupes','delete','supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_groupes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_groupe`),:chi_id_groupe))
)  ','DELETE FROM b1.tbl_groupes
WHERE `chi_id_groupe` = :chi_id_groupe ;',NULL,'1','2025-10-07 12:18:31.517','2000-01-01 00:00:00.000','1','tbl_groupes'),
('135','accès','liste_ecran','sélectionner(
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
('136','accès','select','sélectionner(
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
('137','accès','insert','insérer(

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
('138','accès','update','modifier(
   valeurs(affecte(champ(`chp_nom_acces`),:n_chp_nom_acces),affecte(champ(`chx_groupe_acces`),:n_chx_groupe_acces),affecte(champ(`chx_metier_acces`),:n_chx_metier_acces),affecte(champ(`che_actif_acces`),:n_che_actif_acces)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acces,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_acces`),:c_chi_id_acces))
)  ','UPDATE b1.tbl_acces SET 
   `chp_nom_acces` = :n_chp_nom_acces , 
   `chx_groupe_acces` = :n_chx_groupe_acces , 
   `chx_metier_acces` = :n_chx_metier_acces , 
   `che_actif_acces` = :n_che_actif_acces
WHERE `chi_id_acces` = :c_chi_id_acces ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acces'),
('139','accès','delete','supprimer(

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
)  ','SELECT 
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
('148','menus','update','modifier(
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
('149','menus','delete','supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_menu`),:chi_id_menu))
)  ','DELETE FROM b1.tbl_menus
WHERE `chi_id_menu` = :chi_id_menu ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_menus'),
('150','utilisateurs','update','modifier(

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
('152',NULL,'select','sélectionner(
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
('153','menus par acces','select','sélectionner(
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
      champ(`T3`,`cht_condition_js_source`),
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
('154','accès paramètres par id','update','modifier(

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
('155','tâches par priorité < xxx','select','sélectionner(
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
('156','tâches par priorité < xxx','update','modifier(
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
('157','tâches','update','modifier(
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
('158','tâches priorité - 1','update','modifier(
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
('159','tâches priorité + 1','update','modifier(
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
('163','','select','sélectionner(
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus'),
('165','tâches priorité par id=','update','modifier(
   valeurs(affecte(champ(`che_priorite_tache`),:n_che_priorite_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`chi_id_tache`),:c_chi_id_tache),
         egal(champ(`chx_utilisateur_tache`),:c_chx_utilisateur_tache)
      )
   )
)  ','UPDATE b1.tbl_taches SET 
   `che_priorite_tache` = :n_che_priorite_tache
WHERE ( /* */ `chi_id_tache` = :c_chi_id_tache
   AND `chx_utilisateur_tache` = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('168','dossier compte sous dossiers','select','sélectionner(

   valeurs(compter(tous_les_champs())),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
)  ','SELECT 
COUNT( * )
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('169','dossiers par parents','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('170','dossier racine d''un projet','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions()
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_dossiers',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('171','bases d''un projet','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions()
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds'),
('305','projets','update','modifier(
   valeurs(affecte(champ(`chp_nom_projet`),:n_chp_nom_projet),affecte(champ(`cht_commentaire_projet`),:n_cht_commentaire_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)  ','UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets'),
('306','dossiers à copier dans un autre environnement','select','sélectionner(
   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`),champ(`T0`,`chx_parent_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   ),
   conditions(pas_equivalent(champ(`T0`,`chp_nom_dossier`),:T0_chp_nom_dossier))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier`
 FROM b1.tbl_dossiers T0
WHERE `T0`.`chp_nom_dossier` NOT LIKE :T0_chp_nom_dossier
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('307','dossiers à copier dans un autre environnement','insert','insérer(

   valeurs(
      affecte(champ(`chi_id_dossier`),:chi_id_dossier),
      affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),
      affecte(champ(`chx_parent_dossier`),:chx_parent_dossier),
      affecte(champ(`chd__dtm_dossier`),:chd__dtm_dossier),
      affecte(champ(`chd__dtc_dossier`),:chd__dtc_dossier)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_dossiers`(
    `chi_id_dossier` , 
    `chp_nom_dossier` , 
    `chx_parent_dossier` , 
    `chd__dtm_dossier` , 
    `chd__dtc_dossier`
) VALUES (
    :chi_id_dossier , 
    :chp_nom_dossier , 
    :chx_parent_dossier , 
    :chd__dtm_dossier , 
    :chd__dtc_dossier
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('308','sources','update','modifier(
   valeurs(
      affecte(champ(`chp_nom_source`),:n_chp_nom_source),
      affecte(champ(`che_binaire_source`),:n_che_binaire_source),
      affecte(champ(`chx_dossier_id_source`),:n_chx_dossier_id_source),
      affecte(champ(`cht_rev_source`),:n_cht_rev_source),
      affecte(champ(`cht_genere_source`),:n_cht_genere_source),
      affecte(champ(`cht_commentaire_source`),:n_cht_commentaire_source),
      affecte(champ(`che_autorisation_globale_source`),:n_che_autorisation_globale_source),
      affecte(champ(`cht_condition_rev_source`),:n_cht_condition_rev_source),
      affecte(champ(`cht_condition_js_source`),:n_cht_condition_js_source),
      affecte(champ(`cht_notification_ko_source`),:n_cht_notification_ko_source),
      affecte(champ(`chp_usage_source`),:n_chp_usage_source),
      affecte(champ(`che_pour_util_source`),:n_che_pour_util_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ','UPDATE b1.tbl_sources SET 
   `chp_nom_source` = :n_chp_nom_source , 
   `che_binaire_source` = :n_che_binaire_source , 
   `chx_dossier_id_source` = :n_chx_dossier_id_source , 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source , 
   `cht_commentaire_source` = :n_cht_commentaire_source , 
   `che_autorisation_globale_source` = :n_che_autorisation_globale_source , 
   `cht_condition_rev_source` = :n_cht_condition_rev_source , 
   `cht_condition_js_source` = :n_cht_condition_js_source , 
   `cht_notification_ko_source` = :n_cht_notification_ko_source , 
   `chp_usage_source` = :n_chp_usage_source , 
   `che_pour_util_source` = :n_che_pour_util_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('310','sources','update','modifier(

   valeurs(affecte(champ(`chi_id_source`),:n_chi_id_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ','UPDATE b1.tbl_sources SET 
   `chi_id_source` = :n_chi_id_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('314','dossiers à copier dans un autre environnement','insert','insérer(

   valeurs(
      affecte(champ(`chi_id_source`),:chi_id_source),
      affecte(champ(`chp_nom_source`),:chp_nom_source),
      affecte(champ(`cht_commentaire_source`),:cht_commentaire_source),
      affecte(champ(`che_binaire_source`),:che_binaire_source),
      affecte(champ(`chd__dtm_source`),:chd__dtm_source),
      affecte(champ(`chd__dtc_source`),:chd__dtc_source),
      affecte(champ(`chx_dossier_id_source`),:chx_dossier_id_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_sources`(
    `chi_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `che_binaire_source` , 
    `chd__dtm_source` , 
    `chd__dtc_source` , 
    `chx_dossier_id_source`
) VALUES (
    :chi_id_source , 
    :chp_nom_source , 
    :cht_commentaire_source , 
    :che_binaire_source , 
    :chd__dtm_source , 
    :chd__dtc_source , 
    :chx_dossier_id_source
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('315','insérer la base principale','insert','insérer(

   valeurs(
      affecte(champ(`chi_id_basedd`),:chi_id_basedd),
      affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),
      affecte(champ(`chp_rev_travail_basedd`),:chp_rev_travail_basedd),
      affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd),
      affecte(champ(`chd__dtm_basedd`),:chd__dtm_basedd),
      affecte(champ(`chd__dtc_basedd`),:chd__dtc_basedd)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_bdds`(
    `chi_id_basedd` , 
    `chp_commentaire_basedd` , 
    `chp_rev_travail_basedd` , 
    `chp_fournisseur_basedd` , 
    `chd__dtm_basedd` , 
    `chd__dtc_basedd`
) VALUES (
    :chi_id_basedd , 
    :chp_commentaire_basedd , 
    :chp_rev_travail_basedd , 
    :chp_fournisseur_basedd , 
    :chd__dtm_basedd , 
    :chd__dtc_basedd
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds'),
('316','projets >2 pour isa de champs ','select','sélectionner(
   valeurs(champ(`T0`,`chi_id_projet`),champ(`T0`,`chp_nom_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(supegal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet))
)  ','SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
 FROM b1.tbl_projets T0
WHERE `T0`.`chi_id_projet` >= :T0_chi_id_projet
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets'),
('326','menus','select','sélectionner(

   valeurs(champ(`T1`,`chx_dossier_id_source`),champ(`T1`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_autorisations,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_source),champ(T0,chx_source_autorisation)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_autorisation`),:T0_chi_id_autorisation))
)  ','SELECT 
`T1`.`chx_dossier_id_source` , `T1`.`chp_nom_source`
 FROM b1.tbl_autorisations T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_autorisation

WHERE `T0`.`chi_id_autorisation` = :T0_chi_id_autorisation
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_autorisations'),
('328','genres','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_genre`),
      champ(`T0`,`chp_nom_genre`),
      champ(`T0`,`che_ordre_genre`),
      champ(`T0`,`chp_prefixe_genre`),
      champ(`T0`,`chp_espece_genre`),
      champ(`T0`,`che_longueur_genre`),
      champ(`T0`,`che_est_primaire_genre`),
      champ(`T0`,`che_est_incrément_genre`),
      champ(`T0`,`che_est_obligatoire_genre`),
      champ(`T0`,`che_a_init_genre`),
      champ(`T0`,`che_init_est_mot_genre`),
      champ(`T0`,`cht_valeur_init_genre`),
      champ(`T0`,`che_est_parmis_genre`),
      champ(`T0`,`cht_parmis_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`),
      champ(`T0`,`che_est_tsm_genre`),
      champ(`T0`,`che_est_tsc_genre`),
      champ(`T0`,`chd__dtc_genre`),
      champ(`T0`,`chd__dtm_genre`),
      champ(`T0`,`che__nur_genre`),
      champ(`T0`,`che_est_positif_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(
      egal(champ(`T0`,`chi_id_genre`),:T0_chi_id_genre),
      comme(champ(`T0`,`chp_nom_genre`),:T0_chp_nom_genre),
      comme(champ(`T0`,`chp_prefixe_genre`),:T0_chp_prefixe_genre),
      comme(champ(`T0`,`chp_espece_genre`),:T0_chp_espece_genre),
      comme(champ(`T0`,`cht_valeur_init_genre`),:T0_cht_valeur_init_genre),
      comme(champ(`T0`,`cht_parmis_genre`),:T0_cht_parmis_genre),
      egal(champ(`T0`,`che_ordre_genre`),:T0_che_ordre_genre)
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_genre`),croissant()),(champ(`T0`,`chi_id_genre`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
`T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
`T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
`T0`.`che__nur_genre` , `T0`.`che_est_positif_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre`T0`.`chp_nom_genre` LIKE :T0_chp_nom_genre`T0`.`chp_prefixe_genre` LIKE :T0_chp_prefixe_genre`T0`.`chp_espece_genre` LIKE :T0_chp_espece_genre`T0`.`cht_valeur_init_genre` LIKE :T0_cht_valeur_init_genre`T0`.`cht_parmis_genre` LIKE :T0_cht_parmis_genre`T0`.`che_ordre_genre` = :T0_che_ordre_genre 
ORDER BY `T0`.`che_ordre_genre` ASC, `T0`.`chi_id_genre` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'7','2025-09-07 08:23:14.064','2000-01-01 00:00:00.000','1','tbl_genres'),
('329','genres','insert','insérer(
   valeurs(
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
      affecte(champ(`che_ordre_genre`),:che_ordre_genre),
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`chp_espece_genre`),:chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:cht_parmis_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:che_est_tsm_genre),
      affecte(champ(`che_est_tsc_genre`),:che_est_tsc_genre),
      affecte(champ(`chd__dtc_genre`),:chd__dtc_genre),
      affecte(champ(`chd__dtm_genre`),:chd__dtm_genre),
      affecte(champ(`che_est_positif_genre`),:che_est_positif_genre),
      affecte(champ(`cht_particularités_genre`),:cht_particularités_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_genres`(
    `chp_nom_genre` , 
    `che_ordre_genre` , 
    `chp_prefixe_genre` , 
    `chp_espece_genre` , 
    `che_longueur_genre` , 
    `che_est_primaire_genre` , 
    `che_est_incrément_genre` , 
    `che_est_obligatoire_genre` , 
    `che_a_init_genre` , 
    `che_init_est_mot_genre` , 
    `cht_valeur_init_genre` , 
    `che_est_parmis_genre` , 
    `cht_parmis_genre` , 
    `cht_fonctions_genre` , 
    `che_est_nur_genre` , 
    `che_est_tsm_genre` , 
    `che_est_tsc_genre` , 
    `chd__dtc_genre` , 
    `chd__dtm_genre` , 
    `che_est_positif_genre` , 
    `cht_particularités_genre`
) VALUES (
    :chp_nom_genre , 
    :che_ordre_genre , 
    :chp_prefixe_genre , 
    :chp_espece_genre , 
    :che_longueur_genre , 
    :che_est_primaire_genre , 
    :che_est_incrément_genre , 
    :che_est_obligatoire_genre , 
    :che_a_init_genre , 
    :che_init_est_mot_genre , 
    :cht_valeur_init_genre , 
    :che_est_parmis_genre , 
    :cht_parmis_genre , 
    :cht_fonctions_genre , 
    :che_est_nur_genre , 
    :che_est_tsm_genre , 
    :che_est_tsc_genre , 
    :chd__dtc_genre , 
    :chd__dtm_genre , 
    :che_est_positif_genre , 
    :cht_particularités_genre
);',NULL,'8','2025-09-07 08:23:40.563','2000-01-01 00:00:00.000','1','tbl_genres'),
('330','genres','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_genre`),
      champ(`T0`,`chp_nom_genre`),
      champ(`T0`,`che_ordre_genre`),
      champ(`T0`,`chp_prefixe_genre`),
      champ(`T0`,`chp_espece_genre`),
      champ(`T0`,`che_longueur_genre`),
      champ(`T0`,`che_est_primaire_genre`),
      champ(`T0`,`che_est_incrément_genre`),
      champ(`T0`,`che_est_obligatoire_genre`),
      champ(`T0`,`che_a_init_genre`),
      champ(`T0`,`che_init_est_mot_genre`),
      champ(`T0`,`cht_valeur_init_genre`),
      champ(`T0`,`che_est_parmis_genre`),
      champ(`T0`,`cht_parmis_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`),
      champ(`T0`,`che_est_tsm_genre`),
      champ(`T0`,`che_est_tsc_genre`),
      champ(`T0`,`chd__dtc_genre`),
      champ(`T0`,`chd__dtm_genre`),
      champ(`T0`,`che__nur_genre`),
      champ(`T0`,`che_est_positif_genre`),
      champ(`T0`,`cht_particularités_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_genre`),:T0_chi_id_genre))
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`che_ordre_genre` , `T0`.`chp_prefixe_genre` , `T0`.`chp_espece_genre` , 
`T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , `T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , 
`T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`cht_fonctions_genre` , 
`T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_tsc_genre` , `T0`.`chd__dtc_genre` , `T0`.`chd__dtm_genre` , 
`T0`.`che__nur_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
 FROM b1.tbl_genres T0
WHERE `T0`.`chi_id_genre` = :T0_chi_id_genre
;',NULL,'3','2025-09-07 08:23:12.681','2000-01-01 00:00:00.000','1','tbl_genres'),
('331','genres','update','modifier(
   valeurs(
      affecte(champ(`chp_nom_genre`),:n_chp_nom_genre),
      affecte(champ(`che_ordre_genre`),:n_che_ordre_genre),
      affecte(champ(`chp_prefixe_genre`),:n_chp_prefixe_genre),
      affecte(champ(`chp_espece_genre`),:n_chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:n_che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:n_che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:n_che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:n_che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:n_che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:n_che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:n_cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:n_che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:n_cht_parmis_genre),
      affecte(champ(`cht_fonctions_genre`),:n_cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:n_che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:n_che_est_tsm_genre),
      affecte(champ(`che_est_tsc_genre`),:n_che_est_tsc_genre),
      affecte(champ(`chd__dtm_genre`),:n_chd__dtm_genre),
      affecte(champ(`che__nur_genre`),:n_che__nur_genre),
      affecte(champ(`che_est_positif_genre`),:n_che_est_positif_genre),
      affecte(champ(`cht_particularités_genre`),:n_cht_particularités_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ','UPDATE b1.tbl_genres SET 
   `chp_nom_genre` = :n_chp_nom_genre , 
   `che_ordre_genre` = :n_che_ordre_genre , 
   `chp_prefixe_genre` = :n_chp_prefixe_genre , 
   `chp_espece_genre` = :n_chp_espece_genre , 
   `che_longueur_genre` = :n_che_longueur_genre , 
   `che_est_primaire_genre` = :n_che_est_primaire_genre , 
   `che_est_incrément_genre` = :n_che_est_incrément_genre , 
   `che_est_obligatoire_genre` = :n_che_est_obligatoire_genre , 
   `che_a_init_genre` = :n_che_a_init_genre , 
   `che_init_est_mot_genre` = :n_che_init_est_mot_genre , 
   `cht_valeur_init_genre` = :n_cht_valeur_init_genre , 
   `che_est_parmis_genre` = :n_che_est_parmis_genre , 
   `cht_parmis_genre` = :n_cht_parmis_genre , 
   `cht_fonctions_genre` = :n_cht_fonctions_genre , 
   `che_est_nur_genre` = :n_che_est_nur_genre , 
   `che_est_tsm_genre` = :n_che_est_tsm_genre , 
   `che_est_tsc_genre` = :n_che_est_tsc_genre , 
   `chd__dtm_genre` = :n_chd__dtm_genre , 
   `che__nur_genre` = :n_che__nur_genre , 
   `che_est_positif_genre` = :n_che_est_positif_genre , 
   `cht_particularités_genre` = :n_cht_particularités_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,'3','2025-09-07 08:23:11.943','2000-01-01 00:00:00.000','1','tbl_genres'),
('332','genres','delete','supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   ),
   conditions(

      egal(champ(`chi_id_genre`),:chi_id_genre)
   )
)','DELETE FROM b1.tbl_genres
WHERE `chi_id_genre` = :chi_id_genre ;',NULL,'3','2025-09-07 08:23:11.023','2000-01-01 00:00:00.000','1','tbl_genres'),
('333','tous les genres','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_genre`),
      champ(`T0`,`chp_nom_genre`),
      champ(`T0`,`chp_espece_genre`),
      champ(`T0`,`che_longueur_genre`),
      champ(`T0`,`che_est_primaire_genre`),
      champ(`T0`,`che_est_incrément_genre`),
      champ(`T0`,`che_est_obligatoire_genre`),
      champ(`T0`,`che_a_init_genre`),
      champ(`T0`,`che_init_est_mot_genre`),
      champ(`T0`,`cht_valeur_init_genre`),
      champ(`T0`,`chp_prefixe_genre`),
      champ(`T0`,`che_est_parmis_genre`),
      champ(`T0`,`cht_parmis_genre`),
      champ(`T0`,`che_ordre_genre`),
      champ(`T0`,`che_est_tsc_genre`),
      champ(`T0`,`cht_fonctions_genre`),
      champ(`T0`,`che_est_nur_genre`),
      champ(`T0`,`che_est_tsm_genre`),
      champ(`T0`,`che_est_positif_genre`),
      champ(`T0`,`cht_particularités_genre`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   complements(
      trier_par((champ(`T0`,`che_ordre_genre`),croissant()),(champ(`T0`,`chp_nom_genre`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_genre` , `T0`.`chp_nom_genre` , `T0`.`chp_espece_genre` , `T0`.`che_longueur_genre` , `T0`.`che_est_primaire_genre` , 
`T0`.`che_est_incrément_genre` , `T0`.`che_est_obligatoire_genre` , `T0`.`che_a_init_genre` , `T0`.`che_init_est_mot_genre` , `T0`.`cht_valeur_init_genre` , 
`T0`.`chp_prefixe_genre` , `T0`.`che_est_parmis_genre` , `T0`.`cht_parmis_genre` , `T0`.`che_ordre_genre` , `T0`.`che_est_tsc_genre` , 
`T0`.`cht_fonctions_genre` , `T0`.`che_est_nur_genre` , `T0`.`che_est_tsm_genre` , `T0`.`che_est_positif_genre` , `T0`.`cht_particularités_genre`
 FROM b1.tbl_genres T0 ORDER BY  `T0`.`che_ordre_genre` ASC, `T0`.`chp_nom_genre` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres'),
('334','genres nouveau numéro','update','modifier(
   valeurs(affecte(champ(`chi_id_genre`),:n_chi_id_genre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ','UPDATE b1.tbl_genres SET 
   `chi_id_genre` = :n_chi_id_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres'),
('335','genres maj ordre','update','modifier(
   valeurs(affecte(champ(`che_ordre_genre`),:n_che_ordre_genre)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_genre`),:c_chi_id_genre))
)  ','UPDATE b1.tbl_genres SET 
   `che_ordre_genre` = :n_che_ordre_genre
WHERE `chi_id_genre` = :c_chi_id_genre ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres'),
('337','menus','liste_ecran','sélectionner(

   valeurs(champ(`T0`,`chi_id_menu`),champ(`T0`,`cht_libelle_menu`),champ(`T0`,`chp_titre_menu`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_menus,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_menu`),:T0_chi_id_menu),
         comme(champ(`T0`,`cht_libelle_menu`),:T0_cht_libelle_menu),
         comme(champ(`T0`,`chp_titre_menu`),:T0_chp_titre_menu),
         est(champ(`T0`,`chx_autorisation_menu`),NULL)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_menu`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_menu` , `T0`.`cht_libelle_menu` , `T0`.`chp_titre_menu`
 FROM b1.tbl_menus T0
WHERE ( /* */ `T0`.`chi_id_menu` = :T0_chi_id_menu
   AND `T0`.`cht_libelle_menu` LIKE :T0_cht_libelle_menu
   AND `T0`.`chp_titre_menu` LIKE :T0_chp_titre_menu
   AND `T0`.`chx_autorisation_menu` IS NULL) 
ORDER BY `T0`.`chi_id_menu` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_menus'),
('338','sources','update','modifier(

   valeurs(affecte(champ(`cht_rev_source`),:n_cht_rev_source),affecte(champ(`cht_genere_source`),:n_cht_genere_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ','UPDATE b1.tbl_sources SET 
   `cht_rev_source` = :n_cht_rev_source , 
   `cht_genere_source` = :n_cht_genere_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('339',NULL,'update','modifier(

   valeurs(affecte(champ(`cht_rev_requete`),:n_cht_rev_requete),affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),affecte(champ(`chd__dtm_requete`),:n_chd__dtm_requete),affecte(champ(`che__nur_requete`),:n_che__nur_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('340',NULL,'update','modifier(

   valeurs(affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),affecte(champ(`chd__dtm_requete`),:n_chd__dtm_requete),affecte(champ(`che__nur_requete`),:n_che__nur_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chd__dtm_requete` = :n_chd__dtm_requete , 
   `che__nur_requete` = :n_che__nur_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('341','sources','select','sélectionner(
   valeurs(champ(`T0`,`chp_nom_source`),champ(`T0`,`chi_id_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source))
)  ','SELECT 
`T0`.`chp_nom_source` , `T0`.`chi_id_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
;','','0','2025-10-06 18:00:46.255','2025-10-06 18:00:46.255','0','tbl_sources'),
('342','bdds','liste_ecran','sélectionner(

   valeurs(
      champ(`T0`,`chi_id_basedd`),
      champ(`T0`,`chp_rev_travail_basedd`),
      champ(`T0`,`chp_fournisseur_basedd`),
      champ(`T0`,`chp_commentaire_basedd`),
      champ(`T0`,`chd__dtm_basedd`),
      champ(`T0`,`chd__dtc_basedd`),
      champ(`T0`,`che__nur_basedd`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_basedd`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chd__dtm_basedd` , 
`T0`.`chd__dtc_basedd` , `T0`.`che__nur_basedd`
 FROM b1.tbl_bdds T0
WHERE ( /* */ `T0`.`chi_id_basedd` = :T0_chi_id_basedd) 
ORDER BY `T0`.`chi_id_basedd` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'3','2025-10-07 07:44:26.292','2025-10-06 18:02:10.251','0','tbl_bdds'),
('343','requêtes','update','modifier(
   valeurs(affecte(champ(`cht_sql_requete`),:n_cht_sql_requete),affecte(champ(`chp_table_reference_requete`),:n_chp_table_reference_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `chp_table_reference_requete` = :n_chp_table_reference_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('344','revs','select','sélectionner(

   valeurs(
      champ(`T0`,`chi_id_rev`),
      champ(`T0`,`chp_provenance_rev`),
      champ(`T0`,`chx_source_rev`),
      champ(`T0`,`chp_id_rev`),
      champ(`T0`,`chp_valeur_rev`),
      champ(`T0`,`chp_type_rev`),
      champ(`T0`,`chp_niveau_rev`),
      champ(`T0`,`chp_quotee_rev`),
      champ(`T0`,`chp_pos_premier_rev`),
      champ(`T0`,`chp_pos_dernier_rev`),
      champ(`T0`,`chp_parent_rev`),
      champ(`T0`,`chp_nbr_enfants_rev`),
      champ(`T0`,`chp_num_enfant_rev`),
      champ(`T0`,`chp_profondeur_rev`),
      champ(`T0`,`chp_pos_ouver_parenthese_rev`),
      champ(`T0`,`chp_enfant_suivant_rev`),
      champ(`T0`,`chp_commentaire_rev`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_rev`),:T0_chi_id_rev)
      )
   )
)  ','SELECT 
`T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
`T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
`T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
`T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev`
 FROM b1.tbl_revs T0
WHERE ( /* */ `T0`.`chi_id_rev` = :T0_chi_id_rev)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_revs'),
('345','genres','insert','insérer(
   valeurs(
      affecte(champ(`chi_id_genre`),:chi_id_genre),
      affecte(champ(`chp_nom_genre`),:chp_nom_genre),
      affecte(champ(`che_ordre_genre`),:che_ordre_genre),
      affecte(champ(`chp_prefixe_genre`),:chp_prefixe_genre),
      affecte(champ(`chp_espece_genre`),:chp_espece_genre),
      affecte(champ(`che_longueur_genre`),:che_longueur_genre),
      affecte(champ(`che_est_primaire_genre`),:che_est_primaire_genre),
      affecte(champ(`che_est_incrément_genre`),:che_est_incrément_genre),
      affecte(champ(`che_est_obligatoire_genre`),:che_est_obligatoire_genre),
      affecte(champ(`che_a_init_genre`),:che_a_init_genre),
      affecte(champ(`che_init_est_mot_genre`),:che_init_est_mot_genre),
      affecte(champ(`cht_valeur_init_genre`),:cht_valeur_init_genre),
      affecte(champ(`che_est_parmis_genre`),:che_est_parmis_genre),
      affecte(champ(`cht_parmis_genre`),:cht_parmis_genre),
      affecte(champ(`cht_fonctions_genre`),:cht_fonctions_genre),
      affecte(champ(`che_est_nur_genre`),:che_est_nur_genre),
      affecte(champ(`che_est_tsm_genre`),:che_est_tsm_genre),
      affecte(champ(`che_est_tsc_genre`),:che_est_tsc_genre),
      affecte(champ(`chd__dtc_genre`),:chd__dtc_genre),
      affecte(champ(`chd__dtm_genre`),:chd__dtm_genre),
      affecte(champ(`che__nur_genre`),:che__nur_genre),
      affecte(champ(`che_est_positif_genre`),:che_est_positif_genre),
      affecte(champ(`cht_particularités_genre`),:cht_particularités_genre)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_genres,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_genres`(
    `chi_id_genre` , 
    `chp_nom_genre` , 
    `che_ordre_genre` , 
    `chp_prefixe_genre` , 
    `chp_espece_genre` , 
    `che_longueur_genre` , 
    `che_est_primaire_genre` , 
    `che_est_incrément_genre` , 
    `che_est_obligatoire_genre` , 
    `che_a_init_genre` , 
    `che_init_est_mot_genre` , 
    `cht_valeur_init_genre` , 
    `che_est_parmis_genre` , 
    `cht_parmis_genre` , 
    `cht_fonctions_genre` , 
    `che_est_nur_genre` , 
    `che_est_tsm_genre` , 
    `che_est_tsc_genre` , 
    `chd__dtc_genre` , 
    `chd__dtm_genre` , 
    `che__nur_genre` , 
    `che_est_positif_genre` , 
    `cht_particularités_genre`
) VALUES (
    :chi_id_genre , 
    :chp_nom_genre , 
    :che_ordre_genre , 
    :chp_prefixe_genre , 
    :chp_espece_genre , 
    :che_longueur_genre , 
    :che_est_primaire_genre , 
    :che_est_incrément_genre , 
    :che_est_obligatoire_genre , 
    :che_a_init_genre , 
    :che_init_est_mot_genre , 
    :cht_valeur_init_genre , 
    :che_est_parmis_genre , 
    :cht_parmis_genre , 
    :cht_fonctions_genre , 
    :che_est_nur_genre , 
    :che_est_tsm_genre , 
    :che_est_tsc_genre , 
    :chd__dtc_genre , 
    :chd__dtm_genre , 
    :che__nur_genre , 
    :che_est_positif_genre , 
    :cht_particularités_genre
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_genres'),
('350','liste des requêtes','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete),
         egal(champ(`T0`,`che_est_souche_requete`),:T0_che_est_souche_requete),
         comme(champ(`T0`,`chp_type_requete`),:T0_chp_type_requete),
         comme(champ(`T0`,`cht_rev_requete`),:T0_cht_rev_requete),
         comme(champ(`T0`,`cht_commentaire_requete`),:T0_cht_commentaire_requete),
         infegal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete2),
         comme(champ(`T0`,`chp_table_reference_requete`),:T0_chp_table_reference_requete)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_commentaire_requete` , `T0`.`cht_matrice_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE ( /* */ `T0`.`chi_id_requete` = :T0_chi_id_requete
   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete
   AND `T0`.`chp_type_requete` LIKE :T0_chp_type_requete
   AND `T0`.`cht_rev_requete` LIKE :T0_cht_rev_requete
   AND `T0`.`cht_commentaire_requete` LIKE :T0_cht_commentaire_requete
   AND `T0`.`chi_id_requete` <= :T0_chi_id_requete2
   AND `T0`.`chp_table_reference_requete` LIKE :T0_chp_table_reference_requete) 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes'),
('351','requetes','update','modifier(
   valeurs(affecte(champ(`chi_id_requete`),:n_chi_id_requete)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `chi_id_requete` = :n_chi_id_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('352','requête par id','delete','supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:chi_id_requete))
)  ','DELETE FROM b1.tbl_requetes
WHERE `chi_id_requete` = :chi_id_requete ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes'),
('353','revs par provenance, source et projet','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chp_provenance_rev`),:chp_provenance_rev),egal(champ(`chx_source_rev`),:chx_source_rev))
   )
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_revs
WHERE (`chp_provenance_rev` = :chp_provenance_rev
   AND `chx_source_rev` = :chx_source_rev) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs'),
('354','requêtes','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_table_reference_requete`),
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete))
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
`T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes'),
('355','requêtes','update','modifier(
   valeurs(
      affecte(champ(`che_est_souche_requete`),:n_che_est_souche_requete),
      affecte(champ(`chp_type_requete`),:n_chp_type_requete),
      affecte(champ(`cht_rev_requete`),:n_cht_rev_requete),
      affecte(champ(`cht_sql_requete`),:n_cht_sql_requete),
      affecte(champ(`cht_commentaire_requete`),:n_cht_commentaire_requete),
      affecte(champ(`chp_table_reference_requete`),:n_chp_table_reference_requete)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_requete`),:c_chi_id_requete))
)  ','UPDATE b1.tbl_requetes SET 
   `che_est_souche_requete` = :n_che_est_souche_requete , 
   `chp_type_requete` = :n_chp_type_requete , 
   `cht_rev_requete` = :n_cht_rev_requete , 
   `cht_sql_requete` = :n_cht_sql_requete , 
   `cht_commentaire_requete` = :n_cht_commentaire_requete , 
   `chp_table_reference_requete` = :n_chp_table_reference_requete
WHERE `chi_id_requete` = :c_chi_id_requete ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes'),
('356','bdds','update','modifier(

   valeurs(affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:c_chi_id_basedd))
)  ','UPDATE b1.tbl_bdds SET 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd
WHERE `chi_id_basedd` = :c_chi_id_basedd ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds'),
('357','bdds','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(dans(champ(`T0`,`chi_id_basedd`),(:T0_chi_id_basedd)))
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
 FROM b1.tbl_bdds T0
WHERE `T0`.`chi_id_basedd` IN (:T0_chi_id_basedd)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds'),
('358','revs','insert','insérer(
   valeurs(
      affecte(champ(`chp_provenance_rev`),:chp_provenance_rev),
      affecte(champ(`chx_source_rev`),:chx_source_rev),
      affecte(champ(`chp_id_rev`),:chp_id_rev),
      affecte(champ(`chp_valeur_rev`),:chp_valeur_rev),
      affecte(champ(`chp_type_rev`),:chp_type_rev),
      affecte(champ(`chp_niveau_rev`),:chp_niveau_rev),
      affecte(champ(`chp_quotee_rev`),:chp_quotee_rev),
      affecte(champ(`chp_pos_premier_rev`),:chp_pos_premier_rev),
      affecte(champ(`chp_pos_dernier_rev`),:chp_pos_dernier_rev),
      affecte(champ(`chp_parent_rev`),:chp_parent_rev),
      affecte(champ(`chp_nbr_enfants_rev`),:chp_nbr_enfants_rev),
      affecte(champ(`chp_num_enfant_rev`),:chp_num_enfant_rev),
      affecte(champ(`chp_profondeur_rev`),:chp_profondeur_rev),
      affecte(champ(`chp_pos_ouver_parenthese_rev`),:chp_pos_ouver_parenthese_rev),
      affecte(champ(`chp_enfant_suivant_rev`),:chp_enfant_suivant_rev),
      affecte(champ(`chp_commentaire_rev`),:chp_commentaire_rev)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_revs`(
    `chp_provenance_rev` , 
    `chx_source_rev` , 
    `chp_id_rev` , 
    `chp_valeur_rev` , 
    `chp_type_rev` , 
    `chp_niveau_rev` , 
    `chp_quotee_rev` , 
    `chp_pos_premier_rev` , 
    `chp_pos_dernier_rev` , 
    `chp_parent_rev` , 
    `chp_nbr_enfants_rev` , 
    `chp_num_enfant_rev` , 
    `chp_profondeur_rev` , 
    `chp_pos_ouver_parenthese_rev` , 
    `chp_enfant_suivant_rev` , 
    `chp_commentaire_rev`
) VALUES (
    :chp_provenance_rev , 
    :chx_source_rev , 
    :chp_id_rev , 
    :chp_valeur_rev , 
    :chp_type_rev , 
    :chp_niveau_rev , 
    :chp_quotee_rev , 
    :chp_pos_premier_rev , 
    :chp_pos_dernier_rev , 
    :chp_parent_rev , 
    :chp_nbr_enfants_rev , 
    :chp_num_enfant_rev , 
    :chp_profondeur_rev , 
    :chp_pos_ouver_parenthese_rev , 
    :chp_enfant_suivant_rev , 
    :chp_commentaire_rev
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_revs'),
('359','revs','liste_ecran','sélectionner(

   valeurs(
      champ(`T0`,`chi_id_rev`),
      champ(`T0`,`chp_provenance_rev`),
      champ(`T0`,`chx_source_rev`),
      champ(`T0`,`chp_id_rev`),
      champ(`T0`,`chp_valeur_rev`),
      champ(`T0`,`chp_type_rev`),
      champ(`T0`,`chp_niveau_rev`),
      champ(`T0`,`chp_quotee_rev`),
      champ(`T0`,`chp_pos_premier_rev`),
      champ(`T0`,`chp_pos_dernier_rev`),
      champ(`T0`,`chp_parent_rev`),
      champ(`T0`,`chp_nbr_enfants_rev`),
      champ(`T0`,`chp_num_enfant_rev`),
      champ(`T0`,`chp_profondeur_rev`),
      champ(`T0`,`chp_pos_ouver_parenthese_rev`),
      champ(`T0`,`chp_enfant_suivant_rev`),
      champ(`T0`,`chp_commentaire_rev`),
      champ(`T1`,`chp_nom_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_sources,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_source),champ(T0,chx_source_rev)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_rev`),:T0_chi_id_rev),
         comme(champ(`T0`,`chp_provenance_rev`),:T0_chp_provenance_rev),
         comme(champ(`T1`,`chp_nom_source`),:T1_chp_nom_source),
         comme(champ(`T0`,`chp_valeur_rev`),:T0_chp_valeur_rev),
         egal(champ(`T0`,`chx_source_rev`),:T0_chx_source_rev)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_rev`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , `T0`.`chp_valeur_rev` , 
`T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , `T0`.`chp_pos_dernier_rev` , 
`T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , `T0`.`chp_pos_ouver_parenthese_rev` , 
`T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
 FROM b1.tbl_revs T0
 LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev

WHERE ( /* */ `T0`.`chi_id_rev` = :T0_chi_id_rev
   AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
   AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
   AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
   AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
ORDER BY `T0`.`chi_id_rev` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_revs'),
('360','revs par projet','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,base(b1)))
      )
   )
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_revs',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs'),
('361',NULL,'liste_ecran','sélectionner(

   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_commentaire_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_basedd`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd`
 FROM b1.tbl_bdds T0
WHERE ( /* */ `T0`.`chi_id_basedd` = :T0_chi_id_basedd) 
ORDER BY `T0`.`chi_id_basedd` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds'),
('362','bdds','update','modifier(

   valeurs(affecte(champ(`chp_commentaire_basedd`),:n_chp_commentaire_basedd),affecte(champ(`chp_rev_travail_basedd`),:n_chp_rev_travail_basedd),affecte(champ(`chp_fournisseur_basedd`),:n_chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:c_chi_id_basedd))
)  ','UPDATE b1.tbl_bdds SET 
   `chp_commentaire_basedd` = :n_chp_commentaire_basedd , 
   `chp_rev_travail_basedd` = :n_chp_rev_travail_basedd , 
   `chp_fournisseur_basedd` = :n_chp_fournisseur_basedd
WHERE `chi_id_basedd` = :c_chi_id_basedd ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds'),
('363','bdds','insert','insérer(

   valeurs(affecte(champ(`chp_commentaire_basedd`),:chp_commentaire_basedd),affecte(champ(`chp_fournisseur_basedd`),:chp_fournisseur_basedd)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_bdds`(
    `chp_commentaire_basedd` , 
    `chp_fournisseur_basedd`
) VALUES (
    :chp_commentaire_basedd , 
    :chp_fournisseur_basedd
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds'),
('364','base par id','delete','supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_basedd`),:chi_id_basedd))
)  ','DELETE FROM b1.tbl_bdds
WHERE `chi_id_basedd` = :chi_id_basedd ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds'),
('365','utilisateurs','liste_ecran','sélectionner(

   valeurs(
      champ(`T0`,`chi_id_utilisateur`),
      champ(`T0`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_mot_de_passe_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
      champ(`T0`,`chi_compteur1_utilisateur`),
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
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_utilisateur`),:T0_chi_id_utilisateur),
         comme(champ(`T0`,`chp_nom_de_connexion_utilisateur`),:T0_chp_nom_de_connexion_utilisateur),
         sup(champ(`T0`,`chi_compteur1_utilisateur`),:T0_chi_compteur1_utilisateur)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_utilisateur`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_compteur1_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
`T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces` , `T0`.`che_actif_utilisateur`
 FROM b1.tbl_utilisateurs T0
 LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur

WHERE ( /* */ `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
   AND `T0`.`chp_nom_de_connexion_utilisateur` LIKE :T0_chp_nom_de_connexion_utilisateur
   AND `T0`.`chi_compteur1_utilisateur` > :T0_chi_compteur1_utilisateur) 
ORDER BY `T0`.`chi_id_utilisateur` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_utilisateurs'),
('369','dossiers','select','sélectionner(

   valeurs(
      #(),
      champ(`T0`,`chi_id_dossier`),
      champ(`T0`,`chx_parent_dossier`),
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      )
   )
)','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chx_parent_dossier`
 FROM b1.tbl_dossiers T0
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('371','base par id','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_commentaire_basedd`),champ(`T0`,`chp_rev_travail_basedd`),champ(`T0`,`chp_fournisseur_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_basedd`),:T0_chi_id_basedd))
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_fournisseur_basedd`
 FROM b1.tbl_bdds T0
WHERE `T0`.`chi_id_basedd` = :T0_chi_id_basedd
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_bdds'),
('372','bdds','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_basedd`),champ(`T0`,`chp_rev_travail_basedd`),champ(`T0`,`chp_commentaire_basedd`),champ(`T0`,`chp_fournisseur_basedd`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_bdds,alias(T0),base(b1)))
      )
   )
)  ','SELECT 
`T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd` , `T0`.`chp_commentaire_basedd` , `T0`.`chp_fournisseur_basedd`
 FROM b1.tbl_bdds T0
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_bdds'),
('373','requetes','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete))
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , 
`T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` = :T0_chi_id_requete
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('374','projets','liste_ecran','sélectionner(
   valeurs(champ(`T0`,`chi_id_projet`),champ(`T0`,`chp_nom_projet`),champ(`T0`,`cht_commentaire_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet),
         comme(champ(`T0`,`chp_nom_projet`),:T0_chp_nom_projet),
         comme(champ(`T0`,`cht_commentaire_projet`),:T0_cht_commentaire_projet)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_projet`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE ( /* */ `T0`.`chi_id_projet` = :T0_chi_id_projet
   AND `T0`.`chp_nom_projet` LIKE :T0_chp_nom_projet
   AND `T0`.`cht_commentaire_projet` LIKE :T0_cht_commentaire_projet) 
ORDER BY `T0`.`chi_id_projet` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets'),
('375','projets','select','sélectionner(
   valeurs(champ(`T0`,`chi_id_projet`),champ(`T0`,`chp_nom_projet`),champ(`T0`,`cht_commentaire_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_projet`),:T0_chi_id_projet))
)  ','SELECT 
`T0`.`chi_id_projet` , `T0`.`chp_nom_projet` , `T0`.`cht_commentaire_projet`
 FROM b1.tbl_projets T0
WHERE `T0`.`chi_id_projet` = :T0_chi_id_projet
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets'),
('377','projets','insert','insérer(
   valeurs(affecte(champ(`chp_nom_projet`),:chp_nom_projet),affecte(champ(`cht_commentaire_projet`),:cht_commentaire_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_projets`(
    `chp_nom_projet` , 
    `cht_commentaire_projet`
) VALUES (
    :chp_nom_projet , 
    :cht_commentaire_projet
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets'),
('378','dossiers','insert','insérer(

   valeurs(
      affecte(champ(`chp_nom_dossier`),:chp_nom_dossier),
      affecte(champ(`chx_parent_dossier`),:chx_parent_dossier),
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   )
)','INSERT INTO b1.`tbl_dossiers`(
    `chp_nom_dossier` , 
    `chx_parent_dossier`
) VALUES (
    :chp_nom_dossier , 
    :chx_parent_dossier
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers'),
('382','projets','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`chi_id_projet`),:chi_id_projet))
   )
)  ','DELETE FROM b1.tbl_projets
WHERE (`chi_id_projet` = :chi_id_projet) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets'),
('383','sources','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_source`),champ(`T0`,`chx_dossier_id_source`),champ(`T0`,`chp_nom_source`),champ(`T0`,`che_binaire_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`T0`,`che_binaire_source`),:T0_che_binaire_source))
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`che_binaire_source`
 FROM b1.tbl_sources T0
WHERE `T0`.`che_binaire_source` = :T0_che_binaire_source
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('384','projets','update','modifier(
   valeurs(affecte(champ(`chp_nom_projet`),:n_chp_nom_projet),affecte(champ(`cht_commentaire_projet`),:n_cht_commentaire_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)  ','UPDATE b1.tbl_projets SET 
   `chp_nom_projet` = :n_chp_nom_projet , 
   `cht_commentaire_projet` = :n_cht_commentaire_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_projets'),
('385','requetes','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(inf(champ(`T0`,`chi_id_requete`),:nb_max)),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),croissant()))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_sql_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`che_est_souche_requete` , 
`T0`.`cht_rev_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` < :nb_max 
ORDER BY `T0`.`chi_id_requete` ASC
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('386','dossiers','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T1`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_parent_dossier)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_dossier`),:T0_chi_id_dossier))
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers'),
('389','liste des dossiers','liste_ecran','sélectionner(

   valeurs(champ(`T0`,`chi_id_dossier`),champ(`T0`,`chp_nom_dossier`),champ(`T0`,`chx_parent_dossier`),champ(`T1`,`chp_nom_dossier`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_parent_dossier)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_dossier`),:T0_chi_id_dossier),comme(champ(`T0`,`chp_nom_dossier`),:T0_chp_nom_dossier),egal(champ(`T0`,`chx_parent_dossier`),:T0_chx_parent_dossier),egal(champ(`T1`,`chp_nom_dossier`),:T1_chp_nom_dossier))
   ),
   complements(
      trier_par((champ(`T0`,`chx_parent_dossier`),croissant()),(champ(`T0`,`chp_nom_dossier`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
 FROM b1.tbl_dossiers T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier

WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
   AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
   AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
   AND `T1`.`chp_nom_dossier` = :T1_chp_nom_dossier) 
ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers'),
('390','requêtes','insert','insérer(
   valeurs(
      affecte(champ(`chp_type_requete`),:chp_type_requete),
      affecte(champ(`cht_rev_requete`),:cht_rev_requete),
      affecte(champ(`cht_sql_requete`),:cht_sql_requete),
      affecte(champ(`cht_commentaire_requete`),:cht_commentaire_requete),
      affecte(champ(`che_est_souche_requete`),:che_est_souche_requete),
      affecte(champ(`chp_table_reference_requete`),:chp_table_reference_requete),
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_requetes`(
    `chp_type_requete` , 
    `cht_rev_requete` , 
    `cht_sql_requete` , 
    `cht_commentaire_requete` , 
    `che_est_souche_requete` , 
    `chp_table_reference_requete`
) VALUES (
    :chp_type_requete , 
    :cht_rev_requete , 
    :cht_sql_requete , 
    :cht_commentaire_requete , 
    :che_est_souche_requete , 
    :chp_table_reference_requete
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_requetes'),
('391','requetes','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`cht_commentaire_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`cht_sql_requete`),
      champ(`T0`,`cht_matrice_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_table_reference_requete`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chp_table_reference_requete`),:T0_chp_table_reference_requete),egal(champ(`T0`,`che_est_souche_requete`),:T0_che_est_souche_requete))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
`T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE (`T0`.`chp_table_reference_requete` = :T0_chp_table_reference_requete
   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('393','projets','select','sélectionner(

   valeurs(champ(`T0`,`chi_id_projet`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,alias(T0),base(b1)))
      )
   ),
   complements(
      trier_par((champ(T0.chi_id_projet),décroissant())),
      limité_à(quantité(1),début(0))
   )
)  ','SELECT 
`T0`.`chi_id_projet`
 FROM b1.tbl_projets T0 ORDER BY  T0.chi_id_projet DESC  LIMIT 1 OFFSET 0 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets'),
('394','taches','update','modifier(
   valeurs(affecte(champ(`chi_id_projet`),:n_chi_id_projet),affecte(champ(`chp_nom_projet`),:n_chp_nom_projet)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_projet`),:c_chi_id_projet))
)  ','UPDATE b1.tbl_projets SET 
   `chi_id_projet` = :n_chi_id_projet , 
   `chp_nom_projet` = :n_chp_nom_projet
WHERE `chi_id_projet` = :c_chi_id_projet ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets'),
('395','tbl_travaux','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_travail`),
      champ(`T0`,`chp_resume_travail`),
      champ(`T0`,`cht_rev_travail`),
      champ(`T0`,`chx_utilisateur_travail`),
      champ(`T0`,`chd_dtc_travail`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_etat_travail`),
      champ(`T0`,`chx_projet_travail`),
      champ(`T0`,`cht_utilisateur_travail`),
      champ(`T0`,`chn_duree_travail`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_travail)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chi_id_travail`),:T0_chi_id_travail),
         comme(champ(`T0`,`chp_resume_travail`),:T0_chp_resume_travail),
         comme(champ(`T0`,`cht_rev_travail`),:T0_cht_rev_travail),
         egal(champ(`T0`,`chx_utilisateur_travail`),:T0_chx_utilisateur_travail),
         comme(champ(`T0`,`chd_dtc_travail`),:T0_chd_dtc_travail),
         comme(champ(`T1`,`chp_nom_de_connexion_utilisateur`),:T1_chp_nom_de_connexion_utilisateur),
         comme(champ(`T0`,`chp_etat_travail`),:T0_chp_etat_travail)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_travail`),décroissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
`T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
 FROM b1.tbl_travaux T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail

WHERE (`T0`.`chi_id_travail` = :T0_chi_id_travail
   AND `T0`.`chp_resume_travail` LIKE :T0_chp_resume_travail
   AND `T0`.`cht_rev_travail` LIKE :T0_cht_rev_travail
   AND `T0`.`chx_utilisateur_travail` = :T0_chx_utilisateur_travail
   AND `T0`.`chd_dtc_travail` LIKE :T0_chd_dtc_travail
   AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
   AND `T0`.`chp_etat_travail` LIKE :T0_chp_etat_travail) 
ORDER BY `T0`.`chi_id_travail` DESC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_travaux'),
('396','tbl_travaux','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_travail`),
      champ(`T0`,`chp_resume_travail`),
      champ(`T0`,`cht_rev_travail`),
      champ(`T0`,`chx_utilisateur_travail`),
      champ(`T0`,`chd_dtc_travail`),
      champ(`T1`,`chp_nom_de_connexion_utilisateur`),
      champ(`T0`,`chp_etat_travail`),
      champ(`T0`,`chx_projet_travail`),
      champ(`T1`,`chx_acces_utilisateur`),
      champ(`T0`,`cht_log_travail`),
      champ(`T0`,`cht_utilisateur_travail`),
      champ(`T0`,`chn_duree_travail`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chx_acces_utilisateur),champ(T0,chx_utilisateur_travail)))
      )
   ),
   conditions(egal(champ(`T0`,`chi_id_travail`),:T0_chi_id_travail))
)  ','SELECT 
`T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
`T1`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur` , `T0`.`cht_log_travail` , 
`T0`.`cht_utilisateur_travail` , `T0`.`chn_duree_travail`
 FROM b1.tbl_travaux T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chx_acces_utilisateur = T0.chx_utilisateur_travail

WHERE `T0`.`chi_id_travail` = :T0_chi_id_travail
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_travaux'),
('397','tbl_travaux','update','modifier(
   valeurs(
      affecte(champ(`chp_resume_travail`),:n_chp_resume_travail),
      affecte(champ(`cht_rev_travail`),:n_cht_rev_travail),
      affecte(champ(`chx_utilisateur_travail`),:n_chx_utilisateur_travail),
      affecte(champ(`cht_utilisateur_travail`),:n_cht_utilisateur_travail),
      affecte(champ(`chp_etat_travail`),:n_chp_etat_travail),
      affecte(champ(`cht_log_travail`),:n_cht_log_travail),
      affecte(champ(`chn_duree_travail`),:n_chn_duree_travail),
      affecte(champ(`chx_projet_travail`),session(chi_id_projet))
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_travail`),:c_chi_id_travail))
)  ','UPDATE b1.tbl_travaux SET 
   `chp_resume_travail` = :n_chp_resume_travail , 
   `cht_rev_travail` = :n_cht_rev_travail , 
   `chx_utilisateur_travail` = :n_chx_utilisateur_travail , 
   `cht_utilisateur_travail` = :n_cht_utilisateur_travail , 
   `chp_etat_travail` = :n_chp_etat_travail , 
   `cht_log_travail` = :n_cht_log_travail , 
   `chn_duree_travail` = :n_chn_duree_travail , 
   `chx_projet_travail` = chi_id_projet
WHERE `chi_id_travail` = :c_chi_id_travail ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_travaux'),
('398','tbl_travaux','insert','insérer(
   valeurs(
      affecte(champ(`chp_resume_travail`),:chp_resume_travail),
      affecte(champ(`cht_rev_travail`),:cht_rev_travail),
      affecte(champ(`chx_utilisateur_travail`),:chx_utilisateur_travail),
      affecte(champ(`chd_dtc_travail`),:chd_dtc_travail),
      affecte(champ(`chp_etat_travail`),:chp_etat_travail),
      affecte(champ(`cht_utilisateur_travail`),:cht_utilisateur_travail),
      affecte(champ(`chx_projet_travail`),session(chi_id_projet))
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chi_id_travail`),:T0_chi_id_travail))
   )
)  ','INSERT INTO b1.`tbl_travaux`(
    `chp_resume_travail` , 
    `cht_rev_travail` , 
    `chx_utilisateur_travail` , 
    `chd_dtc_travail` , 
    `chp_etat_travail` , 
    `cht_utilisateur_travail` , 
    `chx_projet_travail`
) VALUES (
    :chp_resume_travail , 
    :cht_rev_travail , 
    :chx_utilisateur_travail , 
    :chd_dtc_travail , 
    :chp_etat_travail , 
    :cht_utilisateur_travail , 
    chi_id_projet
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_travaux'),
('399','tbl_travaux','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_travail`),:chi_id_travail))
)  ','DELETE FROM b1.tbl_travaux
WHERE `chi_id_travail` = :chi_id_travail ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_travaux'),
('400','tbl_travaux','select','sélectionner(

   valeurs(
      champ(`T0`,`chi_id_travail`),
      champ(`T0`,`chp_resume_travail`),
      champ(`T0`,`cht_rev_travail`),
      champ(`T0`,`chx_utilisateur_travail`),
      champ(`T0`,`chd_dtc_travail`),
      champ(`T0`,`chp_etat_travail`),
      champ(`T0`,`chx_projet_travail`),
      champ(`T1`,`chx_acces_utilisateur`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_travail)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chp_etat_travail`),:T0_chp_etat_travail))
   ),
   complements(
      trier_par((champ(`T0`,`chi_id_travail`),croissant())),
      limité_à(quantité(:quantitee),début(0))
   )
)  ','SELECT 
`T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
`T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur`
 FROM b1.tbl_travaux T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail

WHERE (`T0`.`chp_etat_travail` = :T0_chp_etat_travail) 
ORDER BY `T0`.`chi_id_travail` ASC  
LIMIT :quantitee OFFSET 0 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_travaux'),
('401','tbl_travaux','update','modifier(
   valeurs(affecte(champ(`chp_etat_travail`),:n_chp_etat_travail),affecte(champ(`cht_log_travail`),:n_cht_log_travail),affecte(champ(`chn_duree_travail`),:n_chn_duree_travail)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_travail`),:c_chi_id_travail))
)  ','UPDATE b1.tbl_travaux SET 
   `chp_etat_travail` = :n_chp_etat_travail , 
   `cht_log_travail` = :n_cht_log_travail , 
   `chn_duree_travail` = :n_chn_duree_travail
WHERE `chi_id_travail` = :c_chi_id_travail ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_travaux'),
('402','tbl_sources','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`che_autorisation_globale_source`),
      champ(`T0`,`cht_condition_rev_source`),
      champ(`T0`,`cht_condition_js_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         dans(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         comme(champ(`T0`,`chp_nom_source`),''%.js''),
         egal(champ(`T0`,`che_binaire_source`),0)
      )
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chp_nom_source` , `T0`.`chx_dossier_id_source` , `T0`.`cht_rev_source` , `T0`.`cht_genere_source` , 
`T0`.`che_binaire_source` , `T0`.`cht_commentaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`cht_condition_rev_source` , `T0`.`cht_condition_js_source`
 FROM b1.tbl_sources T0
WHERE ( /* */ `T0`.`chi_id_source` IN :T0_chi_id_source
   AND `T0`.`chp_nom_source` LIKE ''%.js''
   AND `T0`.`che_binaire_source` = 0)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('403','tbl_travaux','delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(

   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,base(b1)))
      )
   )
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_travaux',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_travaux'),
('404',NULL,'delete','#(meta(ne_pas_tester_les_dependances_de_suppression(1))),
supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_travaux,base(b1)))
      )
   ),
   conditions(egal(champ(`chp_etat_travail`),:chp_etat_travail))
)  ','/*meta(ne_pas_tester_les_dependances_de_suppression(1))*/

DELETE FROM b1.tbl_travaux
WHERE `chp_etat_travail` = :chp_etat_travail ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_travaux'),
('405','tbl_requetes','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_requete`),
      champ(`T0`,`chp_type_requete`),
      champ(`T0`,`cht_rev_requete`),
      champ(`T0`,`che_est_souche_requete`),
      champ(`T0`,`chp_table_reference_requete`),
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_requetes,alias(T0),base(b1)))
      )
   ),
   conditions(dans(champ(`T0`,`chi_id_requete`),:T0_chi_id_requete)),
   complements(
      trier_par((champ(`T0`,`chi_id_requete`),décroissant())),
      limité_à(quantité(1000),début(0))
   )
)  ','SELECT 
`T0`.`chi_id_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
 FROM b1.tbl_requetes T0
WHERE `T0`.`chi_id_requete` IN :T0_chi_id_requete 
ORDER BY `T0`.`chi_id_requete` DESC  
LIMIT 1000 OFFSET 0 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_requetes'),
('406',NULL,'update','modifier(

   valeurs(affecte(champ(`chi_id_dossier`),:n_chi_id_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:c_chi_id_dossier))
)  ','UPDATE b1.tbl_dossiers SET 
   `chi_id_dossier` = :n_chi_id_dossier
WHERE `chi_id_dossier` = :c_chi_id_dossier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_dossiers'),
('407','dossiers','update','modifier(

   valeurs(affecte(champ(`chp_nom_dossier`),:n_chp_nom_dossier),affecte(champ(`chx_parent_dossier`),:n_chx_parent_dossier)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:c_chi_id_dossier))
)  ','UPDATE b1.tbl_dossiers SET 
   `chp_nom_dossier` = :n_chp_nom_dossier , 
   `chx_parent_dossier` = :n_chx_parent_dossier
WHERE `chi_id_dossier` = :c_chi_id_dossier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers'),
('408','tâches par priorité < xxx','update','modifier(
   valeurs(affecte(champ(che_priorite_tache),:n_che_priorite_tache)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(chi_id_tache),:c_chi_id_tache),egal(champ(chx_utilisateur_tache),:c_chx_utilisateur_tache))
   )
)  ','UPDATE b1.tbl_taches SET 
   `che_priorite_tache` = :n_che_priorite_tache
WHERE (chi_id_tache = :c_chi_id_tache
   AND chx_utilisateur_tache = :c_chx_utilisateur_tache) ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_taches'),
('409','projets >= id','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_projets,base(b1)))
      )
   ),
   conditions(supegal(champ(`chi_id_projet`),:chi_id_projet))
)  ','DELETE FROM b1.tbl_projets
WHERE `chi_id_projet` >= :chi_id_projet ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_projets'),
('410','dossiers','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_dossiers,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_dossier`),:chi_id_dossier))
)  ','DELETE FROM b1.tbl_dossiers
WHERE `chi_id_dossier` = :chi_id_dossier ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_dossiers'),
('411','tbl_revs','select','sélectionner(
   valeurs(champ(`T0`,`chx_source_rev`),champ(`T0`,`chp_parent_rev`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chp_provenance_rev`),''source''),egal(champ(`T0`,`chp_valeur_rev`),:T0_chp_valeur_rev),egal(champ(`T0`,`chp_type_rev`),''c''))
   )
)  ','SELECT 
`T0`.`chx_source_rev` , `T0`.`chp_parent_rev`
 FROM b1.tbl_revs T0
WHERE (`T0`.`chp_provenance_rev` = ''source''
   AND `T0`.`chp_valeur_rev` = :T0_chp_valeur_rev
   AND `T0`.`chp_type_rev` = ''c'')
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs'),
('412','tbl_revs','select','sélectionner(
   valeurs(champ(`T0`,`chp_parent_rev`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chp_provenance_rev`),''source''),
         egal(champ(`T0`,`chp_valeur_rev`),''p''),
         egal(champ(`T0`,`chp_type_rev`),''f''),
         dans(champ(`T0`,`chx_source_rev`),:T0_chx_source_rev),
         dans(champ(`T0`,`chp_id_rev`),:T0_chp_id_rev)
      )
   )
)  ','SELECT 
`T0`.`chp_parent_rev`
 FROM b1.tbl_revs T0
WHERE (`T0`.`chp_provenance_rev` = ''source''
   AND `T0`.`chp_valeur_rev` = ''p''
   AND `T0`.`chp_type_rev` = ''f''
   AND `T0`.`chx_source_rev` IN :T0_chx_source_rev
   AND `T0`.`chp_id_rev` IN :T0_chp_id_rev)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs'),
('413','tbl_revs','select','sélectionner(
   valeurs(champ(`T0`,`chp_id_rev`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chp_provenance_rev`),''source''),
         egal(champ(`T0`,`chp_valeur_rev`),''nomf''),
         egal(champ(`T0`,`chp_type_rev`),''f''),
         dans(champ(`T0`,`chx_source_rev`),:T0_chx_source_rev),
         dans(champ(`T0`,`chp_parent_rev`),:T0_chp_parent_rev)
      )
   )
)  ','SELECT 
`T0`.`chp_id_rev`
 FROM b1.tbl_revs T0
WHERE (`T0`.`chp_provenance_rev` = ''source''
   AND `T0`.`chp_valeur_rev` = ''nomf''
   AND `T0`.`chp_type_rev` = ''f''
   AND `T0`.`chx_source_rev` IN :T0_chx_source_rev
   AND `T0`.`chp_parent_rev` IN :T0_chp_parent_rev)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs'),
('414','tbl_revs','select','sélectionner(
   valeurs(champ(`T0`,`chp_id_rev`),champ(`T0`,`chx_source_rev`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_revs,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         egal(champ(`T0`,`chp_provenance_rev`),''source''),
         egal(champ(`T0`,`chp_valeur_rev`),''sql_iii''),
         egal(champ(`T0`,`chp_type_rev`),''c''),
         dans(champ(`T0`,`chx_source_rev`),:T0_chx_source_rev),
         dans(champ(`T0`,`chp_parent_rev`),:T0_chp_parent_rev)
      )
   )
)  ','SELECT 
`T0`.`chp_id_rev` , `T0`.`chx_source_rev`
 FROM b1.tbl_revs T0
WHERE (`T0`.`chp_provenance_rev` = ''source''
   AND `T0`.`chp_valeur_rev` = ''sql_iii''
   AND `T0`.`chp_type_rev` = ''c''
   AND `T0`.`chx_source_rev` IN :T0_chx_source_rev
   AND `T0`.`chp_parent_rev` IN :T0_chp_parent_rev)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_revs'),
('415','','update','modifier(
   valeurs(affecte(champ(`chi_id_source`),:n_chi_id_source)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:c_chi_id_source))
)  ','UPDATE b1.tbl_sources SET 
   `chi_id_source` = :n_chi_id_source
WHERE `chi_id_source` = :c_chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('416',NULL,'select','sélectionner(
   valeurs(champ(`T0`,`chi_id_source`),champ(`T0`,`chx_dossier_id_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(egal(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source),n_est_pas(champ(`T0`,`chx_dossier_id_source`),NULL))
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source`
 FROM b1.tbl_sources T0
WHERE (`T0`.`chp_nom_source` = :T0_chp_nom_source
   AND `T0`.`chx_dossier_id_source` IS NOT NULL)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('417',NULL,'select','sélectionner(
   valeurs(champ(`T0`,`cht_rev_source`),champ(`T0`,`cht_genere_source`),champ(`T0`,`chp_nom_source`)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source),
         egal(champ(`T0`,`chp_usage_source`),:T0_chp_usage_source),
         est(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source)
      )
   )
)  ','SELECT 
`T0`.`cht_rev_source` , `T0`.`cht_genere_source` , `T0`.`chp_nom_source`
 FROM b1.tbl_sources T0
WHERE ( /* */ `T0`.`chp_nom_source` = :T0_chp_nom_source
   AND `T0`.`chp_usage_source` = :T0_chp_usage_source
   AND `T0`.`chx_dossier_id_source` IS :T0_chx_dossier_id_source)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','tbl_sources'),
('418','sources','liste_ecran','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`che_autorisation_globale_source`),
      champ(`T0`,`cht_condition_rev_source`),
      champ(`T0`,`cht_condition_js_source`),
      champ(`T0`,`cht_notification_ko_source`),
      champ(`T0`,`chp_usage_source`),
      champ(`T0`,`che_pour_util_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_source)))
      )
   ),
   conditions(
      et(
         #(),
         comme(champ(`T0`,`chp_nom_source`),:T0_chp_nom_source),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source),
         sup(champ(`T0`,`chi_id_source`),:T0_chi_id_source2),
         infegal(champ(`T0`,`chi_id_source`),:T0_chi_id_source3),
         egal(champ(`T0`,`che_binaire_source`),:T0_che_binaire_source),
         egal(champ(`T0`,`chx_dossier_id_source`),:T0_chx_dossier_id_source),
         comme(champ(`T1`,`chp_nom_dossier`),:T1_chp_nom_dossier),
         egal(champ(`T0`,`che_autorisation_globale_source`),:T0_che_autorisation_globale_source),
         egal(champ(`T0`,`che_pour_util_source`),:T0_che_pour_util_source)
      )
   ),
   complements(
      trier_par((champ(`T0`,`chx_dossier_id_source`),croissant()),(champ(`T0`,`chp_nom_source`),croissant()),(champ(`T0`,`chi_id_source`),croissant())),
      limité_à(quantité(:quantitee),début(:debut))
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T1`.`chp_nom_dossier` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T0`.`cht_condition_rev_source` , 
`T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chp_nom_source` LIKE :T0_chp_nom_source
   AND `T0`.`chi_id_source` = :T0_chi_id_source
   AND `T0`.`chi_id_source` > :T0_chi_id_source2
   AND `T0`.`chi_id_source` <= :T0_chi_id_source3
   AND `T0`.`che_binaire_source` = :T0_che_binaire_source
   AND `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
   AND `T1`.`chp_nom_dossier` LIKE :T1_chp_nom_dossier
   AND `T0`.`che_autorisation_globale_source` = :T0_che_autorisation_globale_source
   AND `T0`.`che_pour_util_source` = :T0_che_pour_util_source) 
ORDER BY `T0`.`chx_dossier_id_source` ASC, `T0`.`chp_nom_source` ASC, `T0`.`chi_id_source` ASC  
LIMIT :quantitee OFFSET :debut 
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('419','sources','select','sélectionner(
   valeurs(
      champ(`T0`,`chi_id_source`),
      champ(`T0`,`chx_dossier_id_source`),
      champ(`T0`,`chp_nom_source`),
      champ(`T0`,`cht_commentaire_source`),
      champ(`T0`,`cht_rev_source`),
      champ(`T0`,`cht_genere_source`),
      champ(`T0`,`che_binaire_source`),
      champ(`T0`,`che_autorisation_globale_source`),
      champ(`T1`,`chp_nom_dossier`),
      champ(`T0`,`cht_condition_rev_source`),
      champ(`T0`,`cht_condition_js_source`),
      champ(`T0`,`cht_notification_ko_source`),
      champ(`T0`,`chp_usage_source`),
      champ(`T0`,`che_pour_util_source`)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,alias(T0),base(b1)))
      ),
      jointure_gauche(
         source(nom_de_la_table(tbl_dossiers,alias(T1),base(b1))),
         contrainte(egal(champ(T1,chi_id_dossier),champ(T0,chx_dossier_id_source)))
      )
   ),
   conditions(
      et(
         #(),
         egal(champ(`T0`,`chi_id_source`),:T0_chi_id_source)
      )
   )
)  ','SELECT 
`T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
`T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
`T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
 FROM b1.tbl_sources T0
 LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source

WHERE ( /* */ `T0`.`chi_id_source` = :T0_chi_id_source)
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('420','sources','insert','insérer(
   valeurs(
      affecte(champ(`chx_dossier_id_source`),:chx_dossier_id_source),
      affecte(champ(`chp_nom_source`),:chp_nom_source),
      affecte(champ(`cht_commentaire_source`),:cht_commentaire_source),
      affecte(champ(`cht_rev_source`),:cht_rev_source),
      affecte(champ(`cht_genere_source`),:cht_genere_source),
      affecte(champ(`che_binaire_source`),:che_binaire_source),
      affecte(champ(`chp_usage_source`),:chp_usage_source)
   ),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   )
)  ','INSERT INTO b1.`tbl_sources`(
    `chx_dossier_id_source` , 
    `chp_nom_source` , 
    `cht_commentaire_source` , 
    `cht_rev_source` , 
    `cht_genere_source` , 
    `che_binaire_source` , 
    `chp_usage_source`
) VALUES (
    :chx_dossier_id_source , 
    :chp_nom_source , 
    :cht_commentaire_source , 
    :cht_rev_source , 
    :cht_genere_source , 
    :che_binaire_source , 
    :chp_usage_source
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources'),
('421','sources','delete','supprimer(
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_sources,base(b1)))
      )
   ),
   conditions(egal(champ(`chi_id_source`),:chi_id_source))
)  ','DELETE FROM b1.tbl_sources
WHERE `chi_id_source` = :chi_id_source ;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_sources');
/*================================================================================ FIN BLOC TABLE tbl_requetes offset 0 */
