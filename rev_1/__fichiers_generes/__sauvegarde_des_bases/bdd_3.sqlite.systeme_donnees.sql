

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
('1','dev_dev','1','1','{
  "le_json_du_menu": [
    {
      "id_interne": 1,
      "id_interne_parent": 0,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "<svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg>",
      "attributs": {
        "data-chi_id_source": "88",
        "data-chp_nom_source": "x_ecran_coordonnees1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "8",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "mes coordonnées",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "10",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 2,
      "id_interne_parent": 0,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "mes tâches",
      "attributs": {
        "data-chi_id_source": "1011",
        "data-chp_nom_source": "taches1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "1",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "tâches",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "1",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 3,
      "id_interne_parent": 0,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "les tâches",
      "attributs": {
        "data-chi_id_source": "991",
        "data-chp_nom_source": "taches2_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "10",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "les tâches",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "11",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 4,
      "id_interne_parent": 0,
      "replie": 0,
      "contient_des_enfants": 7,
      "contenu": "organisation",
      "attributs": {
        "data-liste_des_menus": "1"
      },
      "separateur": 0
    },
    {
      "id_interne": 5,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "groupes",
      "attributs": {
        "data-chi_id_source": "94",
        "data-chp_nom_source": "groupes1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "9",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "groupes",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "9",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 6,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "métier",
      "attributs": {
        "data-chi_id_source": "96",
        "data-chp_nom_source": "metiers1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "5",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "métier",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "5",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 7,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "accès",
      "attributs": {
        "data-chi_id_source": "99",
        "data-chp_nom_source": "acces1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "7",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "accès",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "7",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 8,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "utilisateurs",
      "attributs": {
        "data-chi_id_source": "101",
        "data-chp_nom_source": "utilisateurs1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "3",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "utilisateurs",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "3",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 9,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "sources",
      "attributs": {
        "data-chi_id_source": 1014,
        "data-chp_nom_source": "sources2_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": 2,
        "data-cht_initialisation_menu": null,
        "data-chp_titre_menu": "sources",
        "data-cht_condition_js_menu": null,
        "data-cht_condition_menu": null,
        "data-chx_autorisation_menu": "2",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 10,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "autorisations",
      "attributs": {
        "data-chi_id_source": "105",
        "data-chp_nom_source": "autorisations1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "4",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "autorisations",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "4",
        "data-separateur": "0"
      },
      "separateur": 0
    },
    {
      "id_interne": 11,
      "id_interne_parent": 4,
      "replie": 0,
      "contient_des_enfants": 0,
      "contenu": "menus",
      "attributs": {
        "data-chi_id_source": "107",
        "data-chp_nom_source": "menus1_c.js",
        "data-chp_methode_menu": "entree_module",
        "data-chi_id_menu": "6",
        "data-cht_initialisation_menu": "null",
        "data-chp_titre_menu": "menus",
        "data-cht_condition_js_menu": "null",
        "data-cht_condition_menu": "null",
        "data-chx_autorisation_menu": "6",
        "data-separateur": "0"
      },
      "separateur": 0
    }
  ],
  "le_html_ul_li_du_menu": "<li data-chi_id_source=\"88\" data-chp_nom_source=\"x_ecran_coordonnees1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"8\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"mes coordonnées\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"10\" data-separateur=\"0\"><svg class=\"rev_svg_dans_menu1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-50 -50  100 100\"><g style=\"stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;\" transform=\"   \"><circle cx=\"0\" cy=\"-10\" r=\"34\"></circle><path d=\" M -43 46 C -30 20 30 20 43 46 \"></path><circle cx=\"-10\" cy=\"-15\" r=\"5\"></circle><circle cx=\"10\" cy=\"-15\" r=\"5\"></circle><path d=\" M -10 0 C -15 10 15 10 10 0\"></path><path d=\" M 0 -10 V 0\"></path><path d=\" M -15 -15 H -30\"></path><path d=\" M 15 -15 H 30\"></path><path d=\" M -5 -15 c 0 -5 10 -5 10 0\"></path></g><path d=\" M -50 -50 h 100 v 100 h -100 v -100 \" stroke=\"rgb(0, 0, 0)\" stroke-width=\"0\" fill=\"transparent\" stroke-linejoin=\"round\" stroke-linecap=\"round\" transform=\"\" style=\"stroke:black;fill:transparent;stroke-width:0.1;\"></path></svg></li><li data-chi_id_source=\"1011\" data-chp_nom_source=\"taches1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"1\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"1\" data-separateur=\"0\">mes tâches</li><li data-chi_id_source=\"991\" data-chp_nom_source=\"taches2_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"10\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"les tâches\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"11\" data-separateur=\"0\">les tâches</li><li data-liste_des_menus=\"1\">organisation<ul><li data-chi_id_source=\"94\" data-chp_nom_source=\"groupes1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"9\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"groupes\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"9\" data-separateur=\"0\">groupes</li><li data-chi_id_source=\"96\" data-chp_nom_source=\"metiers1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"5\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"métier\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"5\" data-separateur=\"0\">métier</li><li data-chi_id_source=\"99\" data-chp_nom_source=\"acces1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"7\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"accès\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"7\" data-separateur=\"0\">accès</li><li data-chi_id_source=\"101\" data-chp_nom_source=\"utilisateurs1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"3\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"utilisateurs\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"3\" data-separateur=\"0\">utilisateurs</li><li data-chi_id_source=\"103\" data-chp_nom_source=\"sources1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"2\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"sources\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"2\" data-separateur=\"0\">sources</li><li data-chi_id_source=\"105\" data-chp_nom_source=\"autorisations1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"4\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"autorisations\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"4\" data-separateur=\"0\">autorisations</li><li data-chi_id_source=\"107\" data-chp_nom_source=\"menus1_c.js\" data-chp_methode_menu=\"entree_module\" data-chi_id_menu=\"6\" data-cht_initialisation_menu=\"null\" data-chp_titre_menu=\"menus\" data-cht_condition_js_menu=\"null\" data-cht_condition_menu=\"null\" data-chx_autorisation_menu=\"6\" data-separateur=\"0\">menus</li></ul></li>    "
}','1'),
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

/*================================================================================ DEBUT BLOC TABLE tbl_sources offset 0 (42) */
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
('1018','__televersement1_c.js',NULL,NULL,'0','2',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0',NULL,NULL,NULL,'0','fichier');
/*================================================================================ FIN BLOC TABLE tbl_sources offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_autorisations offset 0 (41) */
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
('48','1017','2','0');
/*================================================================================ FIN BLOC TABLE tbl_autorisations offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_menus offset 0 (20) */
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
('20','acteurs','utilisateurs','47','entree_module',NULL,NULL,NULL);
/*================================================================================ FIN BLOC TABLE tbl_menus offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_utilisateurs offset 0 (1) */
INSERT INTO tbl_utilisateurs (  chi_id_utilisateur ,  chp_nom_de_connexion_utilisateur ,  chp_mot_de_passe_utilisateur ,  chp_parametres_utilisateur ,  chi_compteur1_utilisateur ,  chx_acces_utilisateur ,  chd__dtm_utilisateur ,  chd__dtc_utilisateur ,  che__nur_utilisateur ,  che_actif_utilisateur ) VALUES
('1','',NULL,NULL,'0','1','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0','0');
/*================================================================================ FIN BLOC TABLE tbl_utilisateurs offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_taches offset 0 (1) */
INSERT INTO tbl_taches (  chi_id_tache ,  chx_utilisateur_tache ,  chp_texte_tache ,  che_priorite_tache ,  chd__dtm_tache ,  chd__dtc_tache ,  che__nur_tache ,  chd_une_heure_tache ) VALUES
('1','1','les tâches des utilisateurs','5','2026-06-06 11:39:42.307','2026-02-09 07:38:23.887','0','00_00_00');
/*================================================================================ FIN BLOC TABLE tbl_taches offset 0 */


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
   transform_base_sur_svg(translate(8.5,7.5))
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
            nom_bref_du_champ(''nom de connexion''),
            abrege_du_champ(''nom de connexion de l\''utilisateur''),
            entete_distant_du_champ(''nom de connexion utilisateur''),
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
            nom_bref_du_champ(''id''),
            abrege_du_champ(''id de l\''acteur''),
            entete_distant_du_champ(''id acteur''),
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
            nom_bref_du_champ(''nom acteur''),
            abrege_du_champ(''nom de l\''acteur''),
            entete_distant_du_champ(''nom acteur acteur''),
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
      )
   )
)','sqlite',NULL,'2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','0');
/*================================================================================ FIN BLOC TABLE tbl_bdds offset 0 */


/*========================================================================================================================*/

/*================================================================================ DEBUT BLOC TABLE tbl_requetes offset 0 (64) */
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
      champ(`T0`,`chx_utilisateur_acteur`)
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
         comme(champ(`T2`,`chp_nom_acces`),:T2_chp_nom_acces),
         egal(champ(`T2`,`chx_groupe_acces`),:T2_chx_groupe_acces),
         egal(champ(`T2`,`chx_metier_acces`),:T2_chx_metier_acces),
         egal(champ(`T2`,`che_actif_acces`),:T2_che_actif_acces),
         egal(champ(`T3`,`chi_id_groupe`),:T3_chi_id_groupe),
         comme(champ(`T3`,`chp_nom_groupe`),:T3_chp_nom_groupe),
         comme(champ(`T4`,`chp_nom_metier`),:T4_chp_nom_metier),
         egal(champ(`T0`,`chx_utilisateur_acteur`),:T0_chx_utilisateur_acteur)
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
`T4`.`chp_nom_metier` , `T0`.`chx_utilisateur_acteur`
 FROM b2.tbl_acteurs T0
 LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur

 LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur

 LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces

 LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces

WHERE (`T0`.`chp_nom_acteur` LIKE :T0_chp_nom_acteur
   AND `T0`.`chp_prenom_acteur` LIKE :T0_chp_prenom_acteur
   AND `T1`.`chp_nom_de_connexion_utilisateur` LIKE :T1_chp_nom_de_connexion_utilisateur
   AND `T2`.`chp_nom_acces` LIKE :T2_chp_nom_acces
   AND `T2`.`chx_groupe_acces` = :T2_chx_groupe_acces
   AND `T2`.`chx_metier_acces` = :T2_chx_metier_acces
   AND `T2`.`che_actif_acces` = :T2_che_actif_acces
   AND `T3`.`chi_id_groupe` = :T3_chi_id_groupe
   AND `T3`.`chp_nom_groupe` LIKE :T3_chp_nom_groupe
   AND `T4`.`chp_nom_metier` LIKE :T4_chp_nom_metier
   AND `T0`.`chx_utilisateur_acteur` = :T0_chx_utilisateur_acteur) 
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
      champ(`T4`,`chp_nom_metier`)
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
   conditions(egal(champ(`T0`,`chx_utilisateur_acteur`),:T0_chx_utilisateur_acteur))
)  ','/*meta(inclure_le_prefixe_de_la_base_devant_la_table(1))*/
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
;',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
('2003',NULL,'insert','#(meta(inclure_le_prefixe_de_la_base_devant_la_table(1))),
insérer(
   valeurs(affecte(champ(`chx_utilisateur_acteur`),:chx_utilisateur_acteur),affecte(champ(`chp_nom_acteur`),:chp_nom_acteur),affecte(champ(`chp_prenom_acteur`),:chp_prenom_acteur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,base(b2)))
      )
   )
)  ','/*meta(inclure_le_prefixe_de_la_base_devant_la_table(1))*/

INSERT INTO b2.`tbl_acteurs`(
    `chx_utilisateur_acteur` , 
    `chp_nom_acteur` , 
    `chp_prenom_acteur`
) VALUES (
    :chx_utilisateur_acteur , 
    :chp_nom_acteur , 
    :chp_prenom_acteur
);',NULL,'0','2000-01-01 00:00:00.000','2000-01-01 00:00:00.000','1','tbl_acteurs'),
('2004',NULL,'update','modifier(
   valeurs(affecte(champ(`chp_nom_acteur`),:n_chp_nom_acteur),affecte(champ(`chp_prenom_acteur`),:n_chp_prenom_acteur)),
   provenance(
      table_reference(
         source(nom_de_la_table(tbl_acteurs,alias(T0),base(b2)))
      )
   ),
   conditions(egal(champ(`chx_utilisateur_acteur`),:c_chx_utilisateur_acteur))
)  ','UPDATE b2.tbl_acteurs SET 
   `chp_nom_acteur` = :n_chp_nom_acteur , 
   `chp_prenom_acteur` = :n_chp_prenom_acteur
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

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 0 (3109) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('3673','sql','2024','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3674','sql','2024','1','modifier','f','0','0','0','7','0','3','1','6','8','33',''),
('3675','sql','2024','2','valeurs','f','1','0','13','19','1','4','1','3','20','19',''),
('3676','sql','2024','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('3677','sql','2024','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('3678','sql','2024','5','chp_texte_tache','c','4','2','36','50','4','0','1','0','34','33',''),
('3679','sql','2024','6',':n_chp_texte_tache','c','3','0','54','71','3','0','2','0','34','33',''),
('3680','sql','2024','7','affecte','f','2','0','74','80','2','2','2','2','81','11',''),
('3681','sql','2024','8','champ','f','3','0','82','86','7','1','1','1','87','10',''),
('3682','sql','2024','9','che_priorite_tache','c','4','2','89','106','8','0','1','0','87','33',''),
('3683','sql','2024','10',':n_che_priorite_tache','c','3','0','110','130','7','0','2','0','87','33',''),
('3684','sql','2024','11','affecte','f','2','0','133','139','2','2','3','2','140','15',''),
('3685','sql','2024','12','champ','f','3','0','141','145','11','1','1','1','146','14',''),
('3686','sql','2024','13','chd__dtm_tache','c','4','2','148','161','12','0','1','0','146','33',''),
('3687','sql','2024','14',':n_chd__dtm_tache','c','3','0','165','181','11','0','2','0','146','33',''),
('3688','sql','2024','15','affecte','f','2','0','184','190','2','2','4','2','191','33',''),
('3689','sql','2024','16','champ','f','3','0','192','196','15','1','1','1','197','18',''),
('3690','sql','2024','17','chx_utilisateur_tache','c','4','2','199','219','16','0','1','0','197','33',''),
('3691','sql','2024','18',':n_chx_utilisateur_tache','c','3','0','223','246','15','0','2','0','197','33',''),
('3692','sql','2024','19','provenance','f','1','0','254','263','1','1','2','5','264','28',''),
('3693','sql','2024','20','table_reference','f','2','0','272','286','19','1','1','4','287','33',''),
('3694','sql','2024','21','source','f','3','0','298','303','20','1','1','3','304','33',''),
('3695','sql','2024','22','nom_de_la_table','f','4','0','305','319','21','3','1','2','320','33',''),
('3696','sql','2024','23','tbl_taches','c','5','0','321','330','22','0','1','0','320','24',''),
('3697','sql','2024','24','alias','f','5','0','332','336','22','1','2','1','337','26',''),
('3698','sql','2024','25','T0','c','6','0','338','339','24','0','1','0','337','33',''),
('3699','sql','2024','26','base','f','5','0','342','345','22','1','3','1','346','33',''),
('3700','sql','2024','27','b1','c','6','0','347','348','26','0','1','0','346','33',''),
('3701','sql','2024','28','conditions','f','1','0','370','379','1','1','3','3','380','33',''),
('3702','sql','2024','29','egal','f','2','0','381','384','28','2','1','2','385','33',''),
('3703','sql','2024','30','champ','f','3','0','386','390','29','1','1','1','391','32',''),
('3704','sql','2024','31','chi_id_tache','c','4','2','393','404','30','0','1','0','391','33',''),
('3705','sql','2024','32',':c_chi_id_tache','c','3','0','408','422','29','0','2','0','391','33',''),
('3706','sql','2023','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3707','sql','2023','1','insérer','f','0','0','0','6','0','2','1','6','7','30',''),
('3708','sql','2023','2','valeurs','f','1','0','12','18','1','5','1','3','19','23',''),
('3709','sql','2023','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('3710','sql','2023','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('3711','sql','2023','5','chx_utilisateur_tache','c','4','2','42','62','4','0','1','0','40','30',''),
('3712','sql','2023','6',':chx_utilisateur_tache','c','3','0','66','87','3','0','2','0','40','30',''),
('3713','sql','2023','7','affecte','f','2','0','97','103','2','2','2','2','104','11',''),
('3714','sql','2023','8','champ','f','3','0','105','109','7','1','1','1','110','10',''),
('3715','sql','2023','9','chp_texte_tache','c','4','2','112','126','8','0','1','0','110','30',''),
('3716','sql','2023','10',':chp_texte_tache','c','3','0','130','145','7','0','2','0','110','30',''),
('3717','sql','2023','11','affecte','f','2','0','155','161','2','2','3','2','162','15',''),
('3718','sql','2023','12','champ','f','3','0','163','167','11','1','1','1','168','14',''),
('3719','sql','2023','13','che_priorite_tache','c','4','2','170','187','12','0','1','0','168','30',''),
('3720','sql','2023','14',':che_priorite_tache','c','3','0','191','209','11','0','2','0','168','30',''),
('3721','sql','2023','15','affecte','f','2','0','219','225','2','2','4','2','226','19',''),
('3722','sql','2023','16','champ','f','3','0','227','231','15','1','1','1','232','18',''),
('3723','sql','2023','17','chd__dtm_tache','c','4','2','234','247','16','0','1','0','232','30',''),
('3724','sql','2023','18',':chd__dtm_tache','c','3','0','251','265','15','0','2','0','232','30',''),
('3725','sql','2023','19','affecte','f','2','0','275','281','2','2','5','2','282','30',''),
('3726','sql','2023','20','champ','f','3','0','283','287','19','1','1','1','288','22',''),
('3727','sql','2023','21','chd__dtc_tache','c','4','2','290','303','20','0','1','0','288','30',''),
('3728','sql','2023','22',':chd__dtc_tache','c','3','0','307','321','19','0','2','0','288','30',''),
('3729','sql','2023','23','provenance','f','1','0','333','342','1','1','2','5','343','30',''),
('3730','sql','2023','24','table_reference','f','2','0','351','365','23','1','1','4','366','30',''),
('3731','sql','2023','25','source','f','3','0','377','382','24','1','1','3','383','30',''),
('3732','sql','2023','26','nom_de_la_table','f','4','0','384','398','25','2','1','2','399','30',''),
('3733','sql','2023','27','tbl_taches','c','5','0','400','409','26','0','1','0','399','28',''),
('3734','sql','2023','28','base','f','5','0','411','414','26','1','2','1','415','30',''),
('3735','sql','2023','29','b1','c','6','0','416','417','28','0','1','0','415','30',''),
('3736','sql','2022','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3737','sql','2022','1','sélectionner','f','0','0','0','11','0','3','1','6','12','49',''),
('3738','sql','2022','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('3739','sql','2022','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('3740','sql','2022','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('3741','sql','2022','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','49',''),
('3742','sql','2022','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('3743','sql','2022','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('3744','sql','2022','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','49',''),
('3745','sql','2022','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('3746','sql','2022','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('3747','sql','2022','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','49',''),
('3748','sql','2022','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('3749','sql','2022','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('3750','sql','2022','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','49',''),
('3751','sql','2022','15','champ','f','2','0','186','190','2','2','5','1','191','49',''),
('3752','sql','2022','16','T1','c','3','2','193','194','15','0','1','0','191','17',''),
('3753','sql','2022','17','chp_nom_de_connexion_utilisateur','c','3','2','198','229','15','0','2','0','191','49',''),
('3754','sql','2022','18','provenance','f','1','0','242','251','1','2','2','5','252','43',''),
('3755','sql','2022','19','table_reference','f','2','0','260','274','18','1','1','4','275','27',''),
('3756','sql','2022','20','source','f','3','0','286','291','19','1','1','3','292','49',''),
('3757','sql','2022','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','49',''),
('3758','sql','2022','22','tbl_taches','c','5','0','309','318','21','0','1','0','308','23',''),
('3759','sql','2022','23','alias','f','5','0','320','324','21','1','2','1','325','25',''),
('3760','sql','2022','24','T0','c','6','0','326','327','23','0','1','0','325','49',''),
('3761','sql','2022','25','base','f','5','0','330','333','21','1','3','1','334','49',''),
('3762','sql','2022','26','b1','c','6','0','335','336','25','0','1','0','334','49',''),
('3763','sql','2022','27','jointure_gauche','f','2','0','356','370','18','2','2','4','371','49',''),
('3764','sql','2022','28','source','f','3','0','382','387','27','1','1','3','388','35',''),
('3765','sql','2022','29','nom_de_la_table','f','4','0','389','403','28','3','1','2','404','49',''),
('3766','sql','2022','30','tbl_utilisateurs','c','5','0','405','420','29','0','1','0','404','31',''),
('3767','sql','2022','31','alias','f','5','0','422','426','29','1','2','1','427','33',''),
('3768','sql','2022','32','T1','c','6','0','428','429','31','0','1','0','427','49',''),
('3769','sql','2022','33','base','f','5','0','432','435','29','1','3','1','436','49',''),
('3770','sql','2022','34','b1','c','6','0','437','438','33','0','1','0','436','49',''),
('3771','sql','2022','35','contrainte','f','3','0','453','462','27','1','2','3','463','49',''),
('3772','sql','2022','36','egal','f','4','0','464','467','35','2','1','2','468','49',''),
('3773','sql','2022','37','champ','f','5','0','469','473','36','2','1','1','474','40',''),
('3774','sql','2022','38','T1','c','6','0','475','476','37','0','1','0','474','39',''),
('3775','sql','2022','39','chi_id_utilisateur','c','6','0','478','495','37','0','2','0','474','49',''),
('3776','sql','2022','40','champ','f','5','0','498','502','36','2','2','1','503','49',''),
('3777','sql','2022','41','T0','c','6','0','504','505','40','0','1','0','503','42',''),
('3778','sql','2022','42','chx_utilisateur_tache','c','6','0','507','527','40','0','2','0','503','49',''),
('3779','sql','2022','43','conditions','f','1','0','549','558','1','1','3','3','559','49',''),
('3780','sql','2022','44','egal','f','2','0','560','563','43','2','1','2','564','49',''),
('3781','sql','2022','45','champ','f','3','0','565','569','44','2','1','1','570','48',''),
('3782','sql','2022','46','T0','c','4','2','572','573','45','0','1','0','570','47',''),
('3783','sql','2022','47','chi_id_tache','c','4','2','577','588','45','0','2','0','570','49',''),
('3784','sql','2022','48',':T0_chi_id_tache','c','3','0','592','607','44','0','2','0','570','49',''),
('3785','sql','2021','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3786','sql','2021','1','sélectionner','f','0','0','0','11','0','4','1','6','12','96',''),
('3787','sql','2021','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('3788','sql','2021','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('3789','sql','2021','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('3790','sql','2021','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','96',''),
('3791','sql','2021','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('3792','sql','2021','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('3793','sql','2021','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','96',''),
('3794','sql','2021','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('3795','sql','2021','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('3796','sql','2021','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','96',''),
('3797','sql','2021','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('3798','sql','2021','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('3799','sql','2021','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','96',''),
('3800','sql','2021','15','champ','f','2','0','186','190','2','2','5','1','191','18',''),
('3801','sql','2021','16','T0','c','3','2','193','194','15','0','1','0','191','17',''),
('3802','sql','2021','17','chd__dtm_tache','c','3','2','198','211','15','0','2','0','191','96',''),
('3803','sql','2021','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('3804','sql','2021','19','T0','c','3','2','229','230','18','0','1','0','227','20',''),
('3805','sql','2021','20','chd__dtc_tache','c','3','2','234','247','18','0','2','0','227','96',''),
('3806','sql','2021','21','champ','f','2','0','258','262','2','2','7','1','263','24',''),
('3807','sql','2021','22','T0','c','3','2','265','266','21','0','1','0','263','23',''),
('3808','sql','2021','23','che__nur_tache','c','3','2','270','283','21','0','2','0','263','96',''),
('3809','sql','2021','24','champ','f','2','0','294','298','2','2','8','1','299','96',''),
('3810','sql','2021','25','T1','c','3','2','301','302','24','0','1','0','299','26',''),
('3811','sql','2021','26','chp_nom_de_connexion_utilisateur','c','3','2','306','337','24','0','2','0','299','96',''),
('3812','sql','2021','27','provenance','f','1','0','350','359','1','2','2','5','360','52',''),
('3813','sql','2021','28','table_reference','f','2','0','368','382','27','1','1','4','383','36',''),
('3814','sql','2021','29','source','f','3','0','394','399','28','1','1','3','400','96',''),
('3815','sql','2021','30','nom_de_la_table','f','4','0','401','415','29','3','1','2','416','96',''),
('3816','sql','2021','31','tbl_taches','c','5','0','417','426','30','0','1','0','416','32',''),
('3817','sql','2021','32','alias','f','5','0','428','432','30','1','2','1','433','34',''),
('3818','sql','2021','33','T0','c','6','0','434','435','32','0','1','0','433','96',''),
('3819','sql','2021','34','base','f','5','0','438','441','30','1','3','1','442','96',''),
('3820','sql','2021','35','b1','c','6','0','443','444','34','0','1','0','442','96',''),
('3821','sql','2021','36','jointure_gauche','f','2','0','464','478','27','2','2','4','479','96',''),
('3822','sql','2021','37','source','f','3','0','490','495','36','1','1','3','496','44',''),
('3823','sql','2021','38','nom_de_la_table','f','4','0','497','511','37','3','1','2','512','96',''),
('3824','sql','2021','39','tbl_utilisateurs','c','5','0','513','528','38','0','1','0','512','40',''),
('3825','sql','2021','40','alias','f','5','0','530','534','38','1','2','1','535','42',''),
('3826','sql','2021','41','T1','c','6','0','536','537','40','0','1','0','535','96',''),
('3827','sql','2021','42','base','f','5','0','540','543','38','1','3','1','544','96',''),
('3828','sql','2021','43','b1','c','6','0','545','546','42','0','1','0','544','96',''),
('3829','sql','2021','44','contrainte','f','3','0','561','570','36','1','2','3','571','96',''),
('3830','sql','2021','45','egal','f','4','0','572','575','44','2','1','2','576','96',''),
('3831','sql','2021','46','champ','f','5','0','577','581','45','2','1','1','582','49',''),
('3832','sql','2021','47','T1','c','6','0','583','584','46','0','1','0','582','48',''),
('3833','sql','2021','48','chi_id_utilisateur','c','6','0','586','603','46','0','2','0','582','96',''),
('3834','sql','2021','49','champ','f','5','0','606','610','45','2','2','1','611','96',''),
('3835','sql','2021','50','T0','c','6','0','612','613','49','0','1','0','611','51',''),
('3836','sql','2021','51','chx_utilisateur_tache','c','6','0','615','635','49','0','2','0','611','96',''),
('3837','sql','2021','52','conditions','f','1','0','657','666','1','1','3','4','667','84',''),
('3838','sql','2021','53','et','f','2','0','675','676','52','6','1','3','677','96',''),
('3839','sql','2021','54','egal','f','3','0','688','691','53','2','1','2','692','59',''),
('3840','sql','2021','55','champ','f','4','0','693','697','54','2','1','1','698','58',''),
('3841','sql','2021','56','T0','c','5','2','700','701','55','0','1','0','698','57',''),
('3842','sql','2021','57','chi_id_tache','c','5','2','705','716','55','0','2','0','698','96',''),
('3843','sql','2021','58',':T0_chi_id_tache','c','4','0','720','735','54','0','2','0','698','96',''),
('3844','sql','2021','59','egal','f','3','0','748','751','53','2','2','2','752','64',''),
('3845','sql','2021','60','champ','f','4','0','753','757','59','2','1','1','758','63',''),
('3846','sql','2021','61','T0','c','5','2','760','761','60','0','1','0','758','62',''),
('3847','sql','2021','62','chx_utilisateur_tache','c','5','2','765','785','60','0','2','0','758','96',''),
('3848','sql','2021','63',':T0_chx_utilisateur_tache','c','4','0','789','813','59','0','2','0','758','96',''),
('3849','sql','2021','64','comme','f','3','0','826','830','53','2','3','2','831','69',''),
('3850','sql','2021','65','champ','f','4','0','832','836','64','2','1','1','837','68',''),
('3851','sql','2021','66','T0','c','5','2','839','840','65','0','1','0','837','67',''),
('3852','sql','2021','67','chp_texte_tache','c','5','2','844','858','65','0','2','0','837','96',''),
('3853','sql','2021','68',':T0_chp_texte_tache','c','4','0','862','880','64','0','2','0','837','96',''),
('3854','sql','2021','69','egal','f','3','0','893','896','53','2','4','2','897','74',''),
('3855','sql','2021','70','champ','f','4','0','898','902','69','2','1','1','903','73',''),
('3856','sql','2021','71','T0','c','5','2','905','906','70','0','1','0','903','72',''),
('3857','sql','2021','72','che_priorite_tache','c','5','2','910','927','70','0','2','0','903','96',''),
('3858','sql','2021','73',':T0_che_priorite_tache','c','4','0','931','952','69','0','2','0','903','96',''),
('3859','sql','2021','74','inf','f','3','0','965','967','53','2','5','2','968','79',''),
('3860','sql','2021','75','champ','f','4','0','969','973','74','2','1','1','974','78',''),
('3861','sql','2021','76','T0','c','5','2','976','977','75','0','1','0','974','77',''),
('3862','sql','2021','77','che_priorite_tache','c','5','2','981','998','75','0','2','0','974','96',''),
('3863','sql','2021','78',':T0_che_priorite_tache2','c','4','0','1002','1024','74','0','2','0','974','96',''),
('3864','sql','2021','79','comme','f','3','0','1037','1041','53','2','6','2','1042','96',''),
('3865','sql','2021','80','champ','f','4','0','1043','1047','79','2','1','1','1048','83',''),
('3866','sql','2021','81','T1','c','5','2','1050','1051','80','0','1','0','1048','82',''),
('3867','sql','2021','82','chp_nom_de_connexion_utilisateur','c','5','2','1055','1086','80','0','2','0','1048','96',''),
('3868','sql','2021','83',':T1_chp_nom_de_connexion_utilisateur','c','4','0','1090','1125','79','0','2','0','1048','96',''),
('3869','sql','2021','84','complements','f','1','0','1145','1155','1','2','4','4','1156','96',''),
('3870','sql','2021','85','trier_par','f','2','0','1164','1172','84','1','1','3','1173','91',''),
('3871','sql','2021','86','','f','3','0','1164','1172','85','2','1','2','1174','96',''),
('3872','sql','2021','87','champ','f','4','0','1175','1179','86','2','1','1','1180','90',''),
('3873','sql','2021','88','T0','c','5','2','1182','1183','87','0','1','0','1180','89',''),
('3874','sql','2021','89','che_priorite_tache','c','5','2','1187','1204','87','0','2','0','1180','96',''),
('3875','sql','2021','90','croissant','f','4','0','1208','1216','86','0','2','0','1217','96',''),
('3876','sql','2021','91','limité_à','f','2','0','1229','1236','84','2','2','2','1237','96',''),
('3877','sql','2021','92','quantité','f','3','0','1238','1245','91','1','1','1','1246','94',''),
('3878','sql','2021','93',':quantitee','c','4','0','1247','1256','92','0','1','0','1246','96',''),
('3879','sql','2021','94','début','f','3','0','1259','1263','91','1','2','1','1264','96',''),
('3880','sql','2021','95',':debut','c','4','0','1265','1270','94','0','1','0','1264','96',''),
('3881','sql','2015','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3882','sql','2015','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('3883','sql','2015','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('3884','sql','2015','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('3885','sql','2015','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('3886','sql','2015','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('3887','sql','2015','6','tbl_sources','c','5','0','81','91','5','0','1','0','80','7',''),
('3888','sql','2015','7','base','f','5','0','93','96','5','1','2','1','97','14',''),
('3889','sql','2015','8','b1','c','6','0','98','99','7','0','1','0','97','14',''),
('3890','sql','2015','9','conditions','f','1','0','121','130','1','1','2','3','131','14',''),
('3891','sql','2015','10','egal','f','2','0','132','135','9','2','1','2','136','14',''),
('3892','sql','2015','11','champ','f','3','0','137','141','10','1','1','1','142','13',''),
('3893','sql','2015','12','chi_id_source','c','4','2','144','156','11','0','1','0','142','14',''),
('3894','sql','2015','13',':chi_id_source','c','3','0','160','173','10','0','2','0','142','14',''),
('3895','sql','2012','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3896','sql','2012','1','sélectionner','f','0','0','0','11','0','3','1','6','12','33',''),
('3897','sql','2012','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('3898','sql','2012','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('3899','sql','2012','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('3900','sql','2012','5','chi_id_source','c','3','2','44','56','3','0','2','0','37','33',''),
('3901','sql','2012','6','champ','f','2','0','67','71','2','2','2','1','72','9',''),
('3902','sql','2012','7','T0','c','3','2','74','75','6','0','1','0','72','8',''),
('3903','sql','2012','8','chp_nom_source','c','3','2','79','92','6','0','2','0','72','33',''),
('3904','sql','2012','9','champ','f','2','0','103','107','2','2','3','1','108','12',''),
('3905','sql','2012','10','T0','c','3','2','110','111','9','0','1','0','108','11',''),
('3906','sql','2012','11','cht_commentaire_source','c','3','2','115','136','9','0','2','0','108','33',''),
('3907','sql','2012','12','champ','f','2','0','147','151','2','2','4','1','152','15',''),
('3908','sql','2012','13','T0','c','3','2','154','155','12','0','1','0','152','14',''),
('3909','sql','2012','14','che_autorisation_globale_source','c','3','2','159','189','12','0','2','0','152','33',''),
('3910','sql','2012','15','champ','f','2','0','200','204','2','2','5','1','205','33',''),
('3911','sql','2012','16','T0','c','3','2','207','208','15','0','1','0','205','17',''),
('3912','sql','2012','17','che_pour_util_source','c','3','2','212','231','15','0','2','0','205','33',''),
('3913','sql','2012','18','provenance','f','1','0','244','253','1','1','2','5','254','27',''),
('3914','sql','2012','19','table_reference','f','2','0','262','276','18','1','1','4','277','33',''),
('3915','sql','2012','20','source','f','3','0','288','293','19','1','1','3','294','33',''),
('3916','sql','2012','21','nom_de_la_table','f','4','0','295','309','20','3','1','2','310','33',''),
('3917','sql','2012','22','tbl_sources','c','5','0','311','321','21','0','1','0','310','23',''),
('3918','sql','2012','23','alias','f','5','0','323','327','21','1','2','1','328','25',''),
('3919','sql','2012','24','T0','c','6','0','329','330','23','0','1','0','328','33',''),
('3920','sql','2012','25','base','f','5','0','333','336','21','1','3','1','337','33',''),
('3921','sql','2012','26','b1','c','6','0','338','339','25','0','1','0','337','33',''),
('3922','sql','2012','27','conditions','f','1','0','361','370','1','1','3','3','371','33',''),
('3923','sql','2012','28','egal','f','2','0','372','375','27','2','1','2','376','33',''),
('3924','sql','2012','29','champ','f','3','0','377','381','28','2','1','1','382','32',''),
('3925','sql','2012','30','T0','c','4','2','384','385','29','0','1','0','382','31',''),
('3926','sql','2012','31','chi_id_source','c','4','2','389','401','29','0','2','0','382','33',''),
('3927','sql','2012','32',':T0_chi_id_source','c','3','0','405','421','28','0','2','0','382','33',''),
('3928','sql','2011','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('3929','sql','2011','1','sélectionner','f','0','0','0','11','0','4','1','6','12','77',''),
('3930','sql','2011','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('3931','sql','2011','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('3932','sql','2011','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('3933','sql','2011','5','chi_id_source','c','3','2','44','56','3','0','2','0','37','77',''),
('3934','sql','2011','6','champ','f','2','0','67','71','2','2','2','1','72','9',''),
('3935','sql','2011','7','T0','c','3','2','74','75','6','0','1','0','72','8',''),
('3936','sql','2011','8','chp_nom_source','c','3','2','79','92','6','0','2','0','72','77',''),
('3937','sql','2011','9','champ','f','2','0','103','107','2','2','3','1','108','12',''),
('3938','sql','2011','10','T0','c','3','2','110','111','9','0','1','0','108','11',''),
('3939','sql','2011','11','che_binaire_source','c','3','2','115','132','9','0','2','0','108','77',''),
('3940','sql','2011','12','champ','f','2','0','143','147','2','2','4','1','148','15',''),
('3941','sql','2011','13','T0','c','3','2','150','151','12','0','1','0','148','14',''),
('3942','sql','2011','14','cht_commentaire_source','c','3','2','155','176','12','0','2','0','148','77',''),
('3943','sql','2011','15','champ','f','2','0','187','191','2','2','5','1','192','77',''),
('3944','sql','2011','16','T0','c','3','2','194','195','15','0','1','0','192','17',''),
('3945','sql','2011','17','che_autorisation_globale_source','c','3','2','199','229','15','0','2','0','192','77',''),
('3946','sql','2011','18','provenance','f','1','0','242','251','1','1','2','5','252','27',''),
('3947','sql','2011','19','table_reference','f','2','0','260','274','18','1','1','4','275','77',''),
('3948','sql','2011','20','source','f','3','0','286','291','19','1','1','3','292','77',''),
('3949','sql','2011','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','77',''),
('3950','sql','2011','22','tbl_sources','c','5','0','309','319','21','0','1','0','308','23',''),
('3951','sql','2011','23','alias','f','5','0','321','325','21','1','2','1','326','25',''),
('3952','sql','2011','24','T0','c','6','0','327','328','23','0','1','0','326','77',''),
('3953','sql','2011','25','base','f','5','0','331','334','21','1','3','1','335','77',''),
('3954','sql','2011','26','b1','c','6','0','336','337','25','0','1','0','335','77',''),
('3955','sql','2011','27','conditions','f','1','0','359','368','1','1','3','4','369','65',''),
('3956','sql','2011','28','et','f','2','0','377','378','27','7','1','3','379','77',''),
('3957','sql','2011','29','comme','f','3','0','390','394','28','2','1','2','395','34',''),
('3958','sql','2011','30','champ','f','4','0','396','400','29','2','1','1','401','33',''),
('3959','sql','2011','31','T0','c','5','2','403','404','30','0','1','0','401','32',''),
('3960','sql','2011','32','chp_nom_source','c','5','2','408','421','30','0','2','0','401','77',''),
('3961','sql','2011','33',':T0_chp_nom_source','c','4','0','425','442','29','0','2','0','401','77',''),
('3962','sql','2011','34','egal','f','3','0','455','458','28','2','2','2','459','39',''),
('3963','sql','2011','35','champ','f','4','0','460','464','34','2','1','1','465','38',''),
('3964','sql','2011','36','T0','c','5','2','467','468','35','0','1','0','465','37',''),
('3965','sql','2011','37','chi_id_source','c','5','2','472','484','35','0','2','0','465','77',''),
('3966','sql','2011','38',':T0_chi_id_source','c','4','0','488','504','34','0','2','0','465','77',''),
('3967','sql','2011','39','sup','f','3','0','517','519','28','2','3','2','520','44',''),
('3968','sql','2011','40','champ','f','4','0','521','525','39','2','1','1','526','43',''),
('3969','sql','2011','41','T0','c','5','2','528','529','40','0','1','0','526','42',''),
('3970','sql','2011','42','chi_id_source','c','5','2','533','545','40','0','2','0','526','77',''),
('3971','sql','2011','43',':T0_chi_id_source2','c','4','0','549','566','39','0','2','0','526','77',''),
('3972','sql','2011','44','infegal','f','3','0','579','585','28','2','4','2','586','49',''),
('3973','sql','2011','45','champ','f','4','0','587','591','44','2','1','1','592','48',''),
('3974','sql','2011','46','T0','c','5','2','594','595','45','0','1','0','592','47',''),
('3975','sql','2011','47','chi_id_source','c','5','2','599','611','45','0','2','0','592','77',''),
('3976','sql','2011','48',':T0_chi_id_source3','c','4','0','615','632','44','0','2','0','592','77',''),
('3977','sql','2011','49','egal','f','3','0','645','648','28','2','5','2','649','54',''),
('3978','sql','2011','50','champ','f','4','0','650','654','49','2','1','1','655','53',''),
('3979','sql','2011','51','T0','c','5','2','657','658','50','0','1','0','655','52',''),
('3980','sql','2011','52','che_binaire_source','c','5','2','662','679','50','0','2','0','655','77',''),
('3981','sql','2011','53',':T0_che_binaire_source','c','4','0','683','704','49','0','2','0','655','77',''),
('3982','sql','2011','54','egal','f','3','0','717','720','28','2','6','2','721','59',''),
('3983','sql','2011','55','champ','f','4','0','722','726','54','2','1','1','727','58',''),
('3984','sql','2011','56','T0','c','5','2','729','730','55','0','1','0','727','57',''),
('3985','sql','2011','57','che_autorisation_globale_source','c','5','2','734','764','55','0','2','0','727','77',''),
('3986','sql','2011','58',':T0_che_autorisation_globale_source','c','4','0','768','802','54','0','2','0','727','77',''),
('3987','sql','2011','59','dans','f','3','0','815','818','28','2','7','2','819','77',''),
('3988','sql','2011','60','champ','f','4','0','820','824','59','2','1','1','825','63',''),
('3989','sql','2011','61','T0','c','5','2','827','828','60','0','1','0','825','62',''),
('3990','sql','2011','62','che_pour_util_source','c','5','2','832','851','60','0','2','0','825','77',''),
('3991','sql','2011','63','','f','4','0','832','851','59','1','2','1','855','77',''),
('3992','sql','2011','64',':T0_che_pour_util_source','c','5','0','856','879','63','0','1','0','855','77',''),
('3993','sql','2011','65','complements','f','1','0','900','910','1','2','4','4','911','77',''),
('3994','sql','2011','66','trier_par','f','2','0','919','927','65','1','1','3','928','72',''),
('3995','sql','2011','67','','f','3','0','919','927','66','2','1','2','929','77',''),
('3996','sql','2011','68','champ','f','4','0','930','934','67','2','1','1','935','71',''),
('3997','sql','2011','69','T0','c','5','2','937','938','68','0','1','0','935','70',''),
('3998','sql','2011','70','chi_id_source','c','5','2','942','954','68','0','2','0','935','77',''),
('3999','sql','2011','71','décroissant','f','4','0','958','968','67','0','2','0','969','77',''),
('4000','sql','2011','72','limité_à','f','2','0','981','988','65','2','2','2','989','77',''),
('4001','sql','2011','73','quantité','f','3','0','990','997','72','1','1','1','998','75',''),
('4002','sql','2011','74',':quantitee','c','4','0','999','1008','73','0','1','0','998','77',''),
('4003','sql','2011','75','début','f','3','0','1011','1015','72','1','2','1','1016','77',''),
('4004','sql','2011','76',':debut','c','4','0','1017','1022','75','0','1','0','1016','77',''),
('4005','sql','2005','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4006','sql','2005','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('4007','sql','2005','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('4008','sql','2005','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('4009','sql','2005','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('4010','sql','2005','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('4011','sql','2005','6','tbl_acteurs','c','5','0','81','91','5','0','1','0','80','7',''),
('4012','sql','2005','7','base','f','5','0','93','96','5','1','2','1','97','14',''),
('4013','sql','2005','8','b2','c','6','0','98','99','7','0','1','0','97','14',''),
('4014','sql','2005','9','conditions','f','1','0','121','130','1','1','2','3','131','14',''),
('4015','sql','2005','10','egal','f','2','0','132','135','9','2','1','2','136','14',''),
('4016','sql','2005','11','champ','f','3','0','137','141','10','1','1','1','142','13',''),
('4017','sql','2005','12','chx_utilisateur_acteur','c','4','2','144','165','11','0','1','0','142','14',''),
('4018','sql','2005','13',':chx_utilisateur_acteur','c','3','0','169','191','10','0','2','0','142','14',''),
('4019','sql','2004','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4020','sql','2004','1','modifier','f','0','0','0','7','0','3','1','6','8','25',''),
('4021','sql','2004','2','valeurs','f','1','0','13','19','1','2','1','3','20','11',''),
('4022','sql','2004','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('4023','sql','2004','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('4024','sql','2004','5','chp_nom_acteur','c','4','2','36','49','4','0','1','0','34','25',''),
('4025','sql','2004','6',':n_chp_nom_acteur','c','3','0','53','69','3','0','2','0','34','25',''),
('4026','sql','2004','7','affecte','f','2','0','72','78','2','2','2','2','79','25',''),
('4027','sql','2004','8','champ','f','3','0','80','84','7','1','1','1','85','10',''),
('4028','sql','2004','9','chp_prenom_acteur','c','4','2','87','103','8','0','1','0','85','25',''),
('4029','sql','2004','10',':n_chp_prenom_acteur','c','3','0','107','126','7','0','2','0','85','25',''),
('4030','sql','2004','11','provenance','f','1','0','134','143','1','1','2','5','144','20',''),
('4031','sql','2004','12','table_reference','f','2','0','152','166','11','1','1','4','167','25',''),
('4032','sql','2004','13','source','f','3','0','178','183','12','1','1','3','184','25',''),
('4033','sql','2004','14','nom_de_la_table','f','4','0','185','199','13','3','1','2','200','25',''),
('4034','sql','2004','15','tbl_acteurs','c','5','0','201','211','14','0','1','0','200','16',''),
('4035','sql','2004','16','alias','f','5','0','213','217','14','1','2','1','218','18',''),
('4036','sql','2004','17','T0','c','6','0','219','220','16','0','1','0','218','25',''),
('4037','sql','2004','18','base','f','5','0','223','226','14','1','3','1','227','25',''),
('4038','sql','2004','19','b2','c','6','0','228','229','18','0','1','0','227','25',''),
('4039','sql','2004','20','conditions','f','1','0','251','260','1','1','3','3','261','25',''),
('4040','sql','2004','21','egal','f','2','0','262','265','20','2','1','2','266','25',''),
('4041','sql','2004','22','champ','f','3','0','267','271','21','1','1','1','272','24',''),
('4042','sql','2004','23','chx_utilisateur_acteur','c','4','2','274','295','22','0','1','0','272','25',''),
('4043','sql','2004','24',':c_chx_utilisateur_acteur','c','3','0','299','323','21','0','2','0','272','25',''),
('4044','sql','2003','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('4045','sql','2003','1','#','f','0','0','0','0','0','0','1','0','1','2','meta(inclure_le_prefixe_de_la_base_devant_la_table(1))'),
('4046','sql','2003','2','insérer','f','0','0','59','65','0','2','2','6','66','23',''),
('4047','sql','2003','3','valeurs','f','1','0','71','77','2','3','1','3','78','16',''),
('4048','sql','2003','4','affecte','f','2','0','79','85','3','2','1','2','86','8',''),
('4049','sql','2003','5','champ','f','3','0','87','91','4','1','1','1','92','7',''),
('4050','sql','2003','6','chx_utilisateur_acteur','c','4','2','94','115','5','0','1','0','92','23',''),
('4051','sql','2003','7',':chx_utilisateur_acteur','c','3','0','119','141','4','0','2','0','92','23',''),
('4052','sql','2003','8','affecte','f','2','0','144','150','3','2','2','2','151','12',''),
('4053','sql','2003','9','champ','f','3','0','152','156','8','1','1','1','157','11',''),
('4054','sql','2003','10','chp_nom_acteur','c','4','2','159','172','9','0','1','0','157','23',''),
('4055','sql','2003','11',':chp_nom_acteur','c','3','0','176','190','8','0','2','0','157','23',''),
('4056','sql','2003','12','affecte','f','2','0','193','199','3','2','3','2','200','23',''),
('4057','sql','2003','13','champ','f','3','0','201','205','12','1','1','1','206','15',''),
('4058','sql','2003','14','chp_prenom_acteur','c','4','2','208','224','13','0','1','0','206','23',''),
('4059','sql','2003','15',':chp_prenom_acteur','c','3','0','228','245','12','0','2','0','206','23',''),
('4060','sql','2003','16','provenance','f','1','0','253','262','2','1','2','5','263','23',''),
('4061','sql','2003','17','table_reference','f','2','0','271','285','16','1','1','4','286','23',''),
('4062','sql','2003','18','source','f','3','0','297','302','17','1','1','3','303','23',''),
('4063','sql','2003','19','nom_de_la_table','f','4','0','304','318','18','2','1','2','319','23',''),
('4064','sql','2003','20','tbl_acteurs','c','5','0','320','330','19','0','1','0','319','21',''),
('4065','sql','2003','21','base','f','5','0','332','335','19','1','2','1','336','23',''),
('4066','sql','2003','22','b2','c','6','0','337','338','21','0','1','0','336','23',''),
('4067','sql','2002','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('4068','sql','2002','1','#','f','0','0','0','0','0','0','1','0','1','2','meta(inclure_le_prefixe_de_la_base_devant_la_table(1))'),
('4069','sql','2002','2','sélectionner','f','0','0','59','70','0','3','2','6','71','119',''),
('4070','sql','2002','3','valeurs','f','1','0','76','82','2','12','1','2','83','40',''),
('4071','sql','2002','4','champ','f','2','0','91','95','3','2','1','1','96','7',''),
('4072','sql','2002','5','T0','c','3','2','98','99','4','0','1','0','96','6',''),
('4073','sql','2002','6','chx_utilisateur_acteur','c','3','2','103','124','4','0','2','0','96','119',''),
('4074','sql','2002','7','champ','f','2','0','135','139','3','2','2','1','140','10',''),
('4075','sql','2002','8','T0','c','3','2','142','143','7','0','1','0','140','9',''),
('4076','sql','2002','9','chp_nom_acteur','c','3','2','147','160','7','0','2','0','140','119',''),
('4077','sql','2002','10','champ','f','2','0','171','175','3','2','3','1','176','13',''),
('4078','sql','2002','11','T0','c','3','2','178','179','10','0','1','0','176','12',''),
('4079','sql','2002','12','chp_prenom_acteur','c','3','2','183','199','10','0','2','0','176','119',''),
('4080','sql','2002','13','champ','f','2','0','210','214','3','2','4','1','215','16',''),
('4081','sql','2002','14','T1','c','3','2','217','218','13','0','1','0','215','15',''),
('4082','sql','2002','15','chi_id_utilisateur','c','3','2','222','239','13','0','2','0','215','119',''),
('4083','sql','2002','16','champ','f','2','0','250','254','3','2','5','1','255','19',''),
('4084','sql','2002','17','T1','c','3','2','257','258','16','0','1','0','255','18',''),
('4085','sql','2002','18','chp_nom_de_connexion_utilisateur','c','3','2','262','293','16','0','2','0','255','119',''),
('4086','sql','2002','19','champ','f','2','0','304','308','3','2','6','1','309','22',''),
('4087','sql','2002','20','T1','c','3','2','311','312','19','0','1','0','309','21',''),
('4088','sql','2002','21','chx_acces_utilisateur','c','3','2','316','336','19','0','2','0','309','119',''),
('4089','sql','2002','22','champ','f','2','0','347','351','3','2','7','1','352','25',''),
('4090','sql','2002','23','T1','c','3','2','354','355','22','0','1','0','352','24',''),
('4091','sql','2002','24','che_actif_utilisateur','c','3','2','359','379','22','0','2','0','352','119',''),
('4092','sql','2002','25','champ','f','2','0','390','394','3','2','8','1','395','28',''),
('4093','sql','2002','26','T2','c','3','2','397','398','25','0','1','0','395','27',''),
('4094','sql','2002','27','chp_nom_acces','c','3','2','402','414','25','0','2','0','395','119',''),
('4095','sql','2002','28','champ','f','2','0','425','429','3','2','9','1','430','31',''),
('4096','sql','2002','29','T2','c','3','2','432','433','28','0','1','0','430','30',''),
('4097','sql','2002','30','chx_groupe_acces','c','3','2','437','452','28','0','2','0','430','119',''),
('4098','sql','2002','31','champ','f','2','0','463','467','3','2','10','1','468','34',''),
('4099','sql','2002','32','T2','c','3','2','470','471','31','0','1','0','468','33',''),
('4100','sql','2002','33','chx_metier_acces','c','3','2','475','490','31','0','2','0','468','119',''),
('4101','sql','2002','34','champ','f','2','0','501','505','3','2','11','1','506','37',''),
('4102','sql','2002','35','T3','c','3','2','508','509','34','0','1','0','506','36',''),
('4103','sql','2002','36','chp_nom_groupe','c','3','2','513','526','34','0','2','0','506','119',''),
('4104','sql','2002','37','champ','f','2','0','537','541','3','2','12','1','542','119',''),
('4105','sql','2002','38','T4','c','3','2','544','545','37','0','1','0','542','39',''),
('4106','sql','2002','39','chp_nom_metier','c','3','2','549','562','37','0','2','0','542','119',''),
('4107','sql','2002','40','provenance','f','1','0','575','584','2','5','2','5','585','113',''),
('4108','sql','2002','41','table_reference','f','2','0','593','607','40','1','1','4','608','49',''),
('4109','sql','2002','42','source','f','3','0','619','624','41','1','1','3','625','119',''),
('4110','sql','2002','43','nom_de_la_table','f','4','0','626','640','42','3','1','2','641','119',''),
('4111','sql','2002','44','tbl_acteurs','c','5','0','642','652','43','0','1','0','641','45',''),
('4112','sql','2002','45','alias','f','5','0','654','658','43','1','2','1','659','47',''),
('4113','sql','2002','46','T0','c','6','0','660','661','45','0','1','0','659','119',''),
('4114','sql','2002','47','base','f','5','0','664','667','43','1','3','1','668','119',''),
('4115','sql','2002','48','b2','c','6','0','669','670','47','0','1','0','668','119',''),
('4116','sql','2002','49','jointure_gauche','f','2','0','690','704','40','2','2','4','705','65',''),
('4117','sql','2002','50','source','f','3','0','716','721','49','1','1','3','722','57',''),
('4118','sql','2002','51','nom_de_la_table','f','4','0','723','737','50','3','1','2','738','119',''),
('4119','sql','2002','52','tbl_utilisateurs','c','5','0','739','754','51','0','1','0','738','53',''),
('4120','sql','2002','53','alias','f','5','0','756','760','51','1','2','1','761','55',''),
('4121','sql','2002','54','T1','c','6','0','762','763','53','0','1','0','761','119',''),
('4122','sql','2002','55','base','f','5','0','766','769','51','1','3','1','770','119',''),
('4123','sql','2002','56','b1','c','6','0','771','772','55','0','1','0','770','119',''),
('4124','sql','2002','57','contrainte','f','3','0','787','796','49','1','2','3','797','119',''),
('4125','sql','2002','58','egal','f','4','0','798','801','57','2','1','2','802','119',''),
('4126','sql','2002','59','champ','f','5','0','803','807','58','2','1','1','808','62',''),
('4127','sql','2002','60','T1','c','6','0','809','810','59','0','1','0','808','61',''),
('4128','sql','2002','61','chi_id_utilisateur','c','6','0','812','829','59','0','2','0','808','119',''),
('4129','sql','2002','62','champ','f','5','0','832','836','58','2','2','1','837','119',''),
('4130','sql','2002','63','T0','c','6','0','838','839','62','0','1','0','837','64',''),
('4131','sql','2002','64','chx_utilisateur_acteur','c','6','0','841','862','62','0','2','0','837','119',''),
('4132','sql','2002','65','jointure_gauche','f','2','0','882','896','40','2','3','4','897','81',''),
('4133','sql','2002','66','source','f','3','0','908','913','65','1','1','3','914','73',''),
('4134','sql','2002','67','nom_de_la_table','f','4','0','915','929','66','3','1','2','930','119',''),
('4135','sql','2002','68','tbl_acces','c','5','0','931','939','67','0','1','0','930','69',''),
('4136','sql','2002','69','alias','f','5','0','941','945','67','1','2','1','946','71',''),
('4137','sql','2002','70','T2','c','6','0','947','948','69','0','1','0','946','119',''),
('4138','sql','2002','71','base','f','5','0','951','954','67','1','3','1','955','119',''),
('4139','sql','2002','72','b1','c','6','0','956','957','71','0','1','0','955','119',''),
('4140','sql','2002','73','contrainte','f','3','0','972','981','65','1','2','3','982','119',''),
('4141','sql','2002','74','egal','f','4','0','983','986','73','2','1','2','987','119',''),
('4142','sql','2002','75','champ','f','5','0','988','992','74','2','1','1','993','78',''),
('4143','sql','2002','76','T2','c','6','0','994','995','75','0','1','0','993','77',''),
('4144','sql','2002','77','chi_id_acces','c','6','0','997','1008','75','0','2','0','993','119',''),
('4145','sql','2002','78','champ','f','5','0','1011','1015','74','2','2','1','1016','119',''),
('4146','sql','2002','79','T1','c','6','0','1017','1018','78','0','1','0','1016','80',''),
('4147','sql','2002','80','chx_acces_utilisateur','c','6','0','1020','1040','78','0','2','0','1016','119',''),
('4148','sql','2002','81','jointure_gauche','f','2','0','1060','1074','40','2','4','4','1075','97',''),
('4149','sql','2002','82','source','f','3','0','1086','1091','81','1','1','3','1092','89',''),
('4150','sql','2002','83','nom_de_la_table','f','4','0','1093','1107','82','3','1','2','1108','119',''),
('4151','sql','2002','84','tbl_groupes','c','5','0','1109','1119','83','0','1','0','1108','85',''),
('4152','sql','2002','85','alias','f','5','0','1121','1125','83','1','2','1','1126','87',''),
('4153','sql','2002','86','T3','c','6','0','1127','1128','85','0','1','0','1126','119',''),
('4154','sql','2002','87','base','f','5','0','1131','1134','83','1','3','1','1135','119',''),
('4155','sql','2002','88','b1','c','6','0','1136','1137','87','0','1','0','1135','119',''),
('4156','sql','2002','89','contrainte','f','3','0','1152','1161','81','1','2','3','1162','119',''),
('4157','sql','2002','90','egal','f','4','0','1163','1166','89','2','1','2','1167','119',''),
('4158','sql','2002','91','champ','f','5','0','1168','1172','90','2','1','1','1173','94',''),
('4159','sql','2002','92','T3','c','6','0','1174','1175','91','0','1','0','1173','93',''),
('4160','sql','2002','93','chi_id_groupe','c','6','0','1177','1189','91','0','2','0','1173','119',''),
('4161','sql','2002','94','champ','f','5','0','1192','1196','90','2','2','1','1197','119',''),
('4162','sql','2002','95','T2','c','6','0','1198','1199','94','0','1','0','1197','96',''),
('4163','sql','2002','96','chx_groupe_acces','c','6','0','1201','1216','94','0','2','0','1197','119',''),
('4164','sql','2002','97','jointure_gauche','f','2','0','1236','1250','40','2','5','4','1251','119',''),
('4165','sql','2002','98','source','f','3','0','1262','1267','97','1','1','3','1268','105',''),
('4166','sql','2002','99','nom_de_la_table','f','4','0','1269','1283','98','3','1','2','1284','119',''),
('4167','sql','2002','100','tbl_metiers','c','5','0','1285','1295','99','0','1','0','1284','101',''),
('4168','sql','2002','101','alias','f','5','0','1297','1301','99','1','2','1','1302','103',''),
('4169','sql','2002','102','T4','c','6','0','1303','1304','101','0','1','0','1302','119',''),
('4170','sql','2002','103','base','f','5','0','1307','1310','99','1','3','1','1311','119',''),
('4171','sql','2002','104','b1','c','6','0','1312','1313','103','0','1','0','1311','119',''),
('4172','sql','2002','105','contrainte','f','3','0','1328','1337','97','1','2','3','1338','119',''),
('4173','sql','2002','106','egal','f','4','0','1339','1342','105','2','1','2','1343','119',''),
('4174','sql','2002','107','champ','f','5','0','1344','1348','106','2','1','1','1349','110',''),
('4175','sql','2002','108','T4','c','6','0','1350','1351','107','0','1','0','1349','109',''),
('4176','sql','2002','109','chi_id_metier','c','6','0','1353','1365','107','0','2','0','1349','119',''),
('4177','sql','2002','110','champ','f','5','0','1368','1372','106','2','2','1','1373','119',''),
('4178','sql','2002','111','T2','c','6','0','1374','1375','110','0','1','0','1373','112',''),
('4179','sql','2002','112','chx_metier_acces','c','6','0','1377','1392','110','0','2','0','1373','119',''),
('4180','sql','2002','113','conditions','f','1','0','1414','1423','2','1','3','3','1424','119',''),
('4181','sql','2002','114','egal','f','2','0','1425','1428','113','2','1','2','1429','119',''),
('4182','sql','2002','115','champ','f','3','0','1430','1434','114','2','1','1','1435','118',''),
('4183','sql','2002','116','T0','c','4','2','1437','1438','115','0','1','0','1435','117',''),
('4184','sql','2002','117','chx_utilisateur_acteur','c','4','2','1442','1463','115','0','2','0','1435','119',''),
('4185','sql','2002','118',':T0_chx_utilisateur_acteur','c','3','0','1467','1492','114','0','2','0','1435','119',''),
('4186','sql','2001','0','','i','-1','0','0','0','0','2','0','0','0','0',''),
('4187','sql','2001','1','#','f','0','0','0','0','0','0','1','0','1','2','meta(inclure_le_prefixe_de_la_base_devant_la_table(1))'),
('4188','sql','2001','2','sélectionner','f','0','0','59','70','0','4','2','6','71','182',''),
('4189','sql','2001','3','valeurs','f','1','0','76','82','2','12','1','2','83','40',''),
('4190','sql','2001','4','champ','f','2','0','91','95','3','2','1','1','96','7',''),
('4191','sql','2001','5','T0','c','3','2','98','99','4','0','1','0','96','6',''),
('4192','sql','2001','6','chp_nom_acteur','c','3','2','103','116','4','0','2','0','96','182',''),
('4193','sql','2001','7','champ','f','2','0','127','131','3','2','2','1','132','10',''),
('4194','sql','2001','8','T0','c','3','2','134','135','7','0','1','0','132','9',''),
('4195','sql','2001','9','chp_prenom_acteur','c','3','2','139','155','7','0','2','0','132','182',''),
('4196','sql','2001','10','champ','f','2','0','166','170','3','2','3','1','171','13',''),
('4197','sql','2001','11','T0','c','3','2','173','174','10','0','1','0','171','12',''),
('4198','sql','2001','12','chx_utilisateur_acteur','c','3','2','178','199','10','0','2','0','171','182',''),
('4199','sql','2001','13','champ','f','2','0','210','214','3','2','4','1','215','16',''),
('4200','sql','2001','14','T1','c','3','2','217','218','13','0','1','0','215','15',''),
('4201','sql','2001','15','chp_nom_de_connexion_utilisateur','c','3','2','222','253','13','0','2','0','215','182',''),
('4202','sql','2001','16','champ','f','2','0','264','268','3','2','5','1','269','19',''),
('4203','sql','2001','17','T2','c','3','2','271','272','16','0','1','0','269','18',''),
('4204','sql','2001','18','chi_id_acces','c','3','2','276','287','16','0','2','0','269','182',''),
('4205','sql','2001','19','champ','f','2','0','298','302','3','2','6','1','303','22',''),
('4206','sql','2001','20','T1','c','3','2','305','306','19','0','1','0','303','21',''),
('4207','sql','2001','21','chx_acces_utilisateur','c','3','2','310','330','19','0','2','0','303','182',''),
('4208','sql','2001','22','champ','f','2','0','341','345','3','2','7','1','346','25',''),
('4209','sql','2001','23','T2','c','3','2','348','349','22','0','1','0','346','24',''),
('4210','sql','2001','24','chp_nom_acces','c','3','2','353','365','22','0','2','0','346','182',''),
('4211','sql','2001','25','champ','f','2','0','376','380','3','2','8','1','381','28',''),
('4212','sql','2001','26','T2','c','3','2','383','384','25','0','1','0','381','27',''),
('4213','sql','2001','27','chx_groupe_acces','c','3','2','388','403','25','0','2','0','381','182',''),
('4214','sql','2001','28','champ','f','2','0','414','418','3','2','9','1','419','31',''),
('4215','sql','2001','29','T2','c','3','2','421','422','28','0','1','0','419','30',''),
('4216','sql','2001','30','chx_metier_acces','c','3','2','426','441','28','0','2','0','419','182',''),
('4217','sql','2001','31','champ','f','2','0','452','456','3','2','10','1','457','34',''),
('4218','sql','2001','32','T3','c','3','2','459','460','31','0','1','0','457','33',''),
('4219','sql','2001','33','chp_nom_groupe','c','3','2','464','477','31','0','2','0','457','182',''),
('4220','sql','2001','34','champ','f','2','0','488','492','3','2','11','1','493','37',''),
('4221','sql','2001','35','T4','c','3','2','495','496','34','0','1','0','493','36',''),
('4222','sql','2001','36','chp_nom_metier','c','3','2','500','513','34','0','2','0','493','182',''),
('4223','sql','2001','37','champ','f','2','0','524','528','3','2','12','1','529','182',''),
('4224','sql','2001','38','T0','c','3','2','531','532','37','0','1','0','529','39',''),
('4225','sql','2001','39','chx_utilisateur_acteur','c','3','2','536','557','37','0','2','0','529','182',''),
('4226','sql','2001','40','provenance','f','1','0','570','579','2','5','2','5','580','113',''),
('4227','sql','2001','41','table_reference','f','2','0','588','602','40','1','1','4','603','49',''),
('4228','sql','2001','42','source','f','3','0','614','619','41','1','1','3','620','182',''),
('4229','sql','2001','43','nom_de_la_table','f','4','0','621','635','42','3','1','2','636','182',''),
('4230','sql','2001','44','tbl_acteurs','c','5','0','637','647','43','0','1','0','636','45',''),
('4231','sql','2001','45','alias','f','5','0','649','653','43','1','2','1','654','47',''),
('4232','sql','2001','46','T0','c','6','0','655','656','45','0','1','0','654','182',''),
('4233','sql','2001','47','base','f','5','0','659','662','43','1','3','1','663','182',''),
('4234','sql','2001','48','b2','c','6','0','664','665','47','0','1','0','663','182',''),
('4235','sql','2001','49','jointure_gauche','f','2','0','685','699','40','2','2','4','700','65',''),
('4236','sql','2001','50','source','f','3','0','711','716','49','1','1','3','717','57',''),
('4237','sql','2001','51','nom_de_la_table','f','4','0','718','732','50','3','1','2','733','182',''),
('4238','sql','2001','52','tbl_utilisateurs','c','5','0','734','749','51','0','1','0','733','53',''),
('4239','sql','2001','53','alias','f','5','0','751','755','51','1','2','1','756','55',''),
('4240','sql','2001','54','T1','c','6','0','757','758','53','0','1','0','756','182',''),
('4241','sql','2001','55','base','f','5','0','761','764','51','1','3','1','765','182',''),
('4242','sql','2001','56','b1','c','6','0','766','767','55','0','1','0','765','182',''),
('4243','sql','2001','57','contrainte','f','3','0','782','791','49','1','2','3','792','182',''),
('4244','sql','2001','58','egal','f','4','0','793','796','57','2','1','2','797','182',''),
('4245','sql','2001','59','champ','f','5','0','798','802','58','2','1','1','803','62',''),
('4246','sql','2001','60','T1','c','6','0','804','805','59','0','1','0','803','61',''),
('4247','sql','2001','61','chi_id_utilisateur','c','6','0','807','824','59','0','2','0','803','182',''),
('4248','sql','2001','62','champ','f','5','0','827','831','58','2','2','1','832','182',''),
('4249','sql','2001','63','T0','c','6','0','833','834','62','0','1','0','832','64',''),
('4250','sql','2001','64','chx_utilisateur_acteur','c','6','0','836','857','62','0','2','0','832','182',''),
('4251','sql','2001','65','jointure_gauche','f','2','0','877','891','40','2','3','4','892','81',''),
('4252','sql','2001','66','source','f','3','0','903','908','65','1','1','3','909','73',''),
('4253','sql','2001','67','nom_de_la_table','f','4','0','910','924','66','3','1','2','925','182',''),
('4254','sql','2001','68','tbl_acces','c','5','0','926','934','67','0','1','0','925','69',''),
('4255','sql','2001','69','alias','f','5','0','936','940','67','1','2','1','941','71',''),
('4256','sql','2001','70','T2','c','6','0','942','943','69','0','1','0','941','182',''),
('4257','sql','2001','71','base','f','5','0','946','949','67','1','3','1','950','182',''),
('4258','sql','2001','72','b1','c','6','0','951','952','71','0','1','0','950','182',''),
('4259','sql','2001','73','contrainte','f','3','0','967','976','65','1','2','3','977','182',''),
('4260','sql','2001','74','egal','f','4','0','978','981','73','2','1','2','982','182',''),
('4261','sql','2001','75','champ','f','5','0','983','987','74','2','1','1','988','78',''),
('4262','sql','2001','76','T2','c','6','0','989','990','75','0','1','0','988','77',''),
('4263','sql','2001','77','chi_id_acces','c','6','0','992','1003','75','0','2','0','988','182',''),
('4264','sql','2001','78','champ','f','5','0','1006','1010','74','2','2','1','1011','182',''),
('4265','sql','2001','79','T1','c','6','0','1012','1013','78','0','1','0','1011','80',''),
('4266','sql','2001','80','chx_acces_utilisateur','c','6','0','1015','1035','78','0','2','0','1011','182',''),
('4267','sql','2001','81','jointure_gauche','f','2','0','1055','1069','40','2','4','4','1070','97',''),
('4268','sql','2001','82','source','f','3','0','1081','1086','81','1','1','3','1087','89',''),
('4269','sql','2001','83','nom_de_la_table','f','4','0','1088','1102','82','3','1','2','1103','182',''),
('4270','sql','2001','84','tbl_groupes','c','5','0','1104','1114','83','0','1','0','1103','85',''),
('4271','sql','2001','85','alias','f','5','0','1116','1120','83','1','2','1','1121','87',''),
('4272','sql','2001','86','T3','c','6','0','1122','1123','85','0','1','0','1121','182',''),
('4273','sql','2001','87','base','f','5','0','1126','1129','83','1','3','1','1130','182',''),
('4274','sql','2001','88','b1','c','6','0','1131','1132','87','0','1','0','1130','182',''),
('4275','sql','2001','89','contrainte','f','3','0','1147','1156','81','1','2','3','1157','182',''),
('4276','sql','2001','90','egal','f','4','0','1158','1161','89','2','1','2','1162','182',''),
('4277','sql','2001','91','champ','f','5','0','1163','1167','90','2','1','1','1168','94',''),
('4278','sql','2001','92','T3','c','6','0','1169','1170','91','0','1','0','1168','93',''),
('4279','sql','2001','93','chi_id_groupe','c','6','0','1172','1184','91','0','2','0','1168','182',''),
('4280','sql','2001','94','champ','f','5','0','1187','1191','90','2','2','1','1192','182',''),
('4281','sql','2001','95','T2','c','6','0','1193','1194','94','0','1','0','1192','96',''),
('4282','sql','2001','96','chx_groupe_acces','c','6','0','1196','1211','94','0','2','0','1192','182',''),
('4283','sql','2001','97','jointure_gauche','f','2','0','1231','1245','40','2','5','4','1246','182',''),
('4284','sql','2001','98','source','f','3','0','1257','1262','97','1','1','3','1263','105',''),
('4285','sql','2001','99','nom_de_la_table','f','4','0','1264','1278','98','3','1','2','1279','182',''),
('4286','sql','2001','100','tbl_metiers','c','5','0','1280','1290','99','0','1','0','1279','101',''),
('4287','sql','2001','101','alias','f','5','0','1292','1296','99','1','2','1','1297','103',''),
('4288','sql','2001','102','T4','c','6','0','1298','1299','101','0','1','0','1297','182',''),
('4289','sql','2001','103','base','f','5','0','1302','1305','99','1','3','1','1306','182',''),
('4290','sql','2001','104','b1','c','6','0','1307','1308','103','0','1','0','1306','182',''),
('4291','sql','2001','105','contrainte','f','3','0','1323','1332','97','1','2','3','1333','182',''),
('4292','sql','2001','106','egal','f','4','0','1334','1337','105','2','1','2','1338','182',''),
('4293','sql','2001','107','champ','f','5','0','1339','1343','106','2','1','1','1344','110',''),
('4294','sql','2001','108','T4','c','6','0','1345','1346','107','0','1','0','1344','109',''),
('4295','sql','2001','109','chi_id_metier','c','6','0','1348','1360','107','0','2','0','1344','182',''),
('4296','sql','2001','110','champ','f','5','0','1363','1367','106','2','2','1','1368','182',''),
('4297','sql','2001','111','T2','c','6','0','1369','1370','110','0','1','0','1368','112',''),
('4298','sql','2001','112','chx_metier_acces','c','6','0','1372','1387','110','0','2','0','1368','182',''),
('4299','sql','2001','113','conditions','f','1','0','1409','1418','2','1','3','4','1419','170',''),
('4300','sql','2001','114','et','f','2','0','1427','1428','113','11','1','3','1429','182',''),
('4301','sql','2001','115','comme','f','3','0','1440','1444','114','2','1','2','1445','120',''),
('4302','sql','2001','116','champ','f','4','0','1446','1450','115','2','1','1','1451','119',''),
('4303','sql','2001','117','T0','c','5','2','1453','1454','116','0','1','0','1451','118',''),
('4304','sql','2001','118','chp_nom_acteur','c','5','2','1458','1471','116','0','2','0','1451','182',''),
('4305','sql','2001','119',':T0_chp_nom_acteur','c','4','0','1475','1492','115','0','2','0','1451','182',''),
('4306','sql','2001','120','comme','f','3','0','1505','1509','114','2','2','2','1510','125',''),
('4307','sql','2001','121','champ','f','4','0','1511','1515','120','2','1','1','1516','124',''),
('4308','sql','2001','122','T0','c','5','2','1518','1519','121','0','1','0','1516','123',''),
('4309','sql','2001','123','chp_prenom_acteur','c','5','2','1523','1539','121','0','2','0','1516','182',''),
('4310','sql','2001','124',':T0_chp_prenom_acteur','c','4','0','1543','1563','120','0','2','0','1516','182',''),
('4311','sql','2001','125','comme','f','3','0','1576','1580','114','2','3','2','1581','130',''),
('4312','sql','2001','126','champ','f','4','0','1582','1586','125','2','1','1','1587','129',''),
('4313','sql','2001','127','T1','c','5','2','1589','1590','126','0','1','0','1587','128',''),
('4314','sql','2001','128','chp_nom_de_connexion_utilisateur','c','5','2','1594','1625','126','0','2','0','1587','182',''),
('4315','sql','2001','129',':T1_chp_nom_de_connexion_utilisateur','c','4','0','1629','1664','125','0','2','0','1587','182',''),
('4316','sql','2001','130','comme','f','3','0','1677','1681','114','2','4','2','1682','135',''),
('4317','sql','2001','131','champ','f','4','0','1683','1687','130','2','1','1','1688','134',''),
('4318','sql','2001','132','T2','c','5','2','1690','1691','131','0','1','0','1688','133',''),
('4319','sql','2001','133','chp_nom_acces','c','5','2','1695','1707','131','0','2','0','1688','182',''),
('4320','sql','2001','134',':T2_chp_nom_acces','c','4','0','1711','1727','130','0','2','0','1688','182',''),
('4321','sql','2001','135','egal','f','3','0','1740','1743','114','2','5','2','1744','140',''),
('4322','sql','2001','136','champ','f','4','0','1745','1749','135','2','1','1','1750','139',''),
('4323','sql','2001','137','T2','c','5','2','1752','1753','136','0','1','0','1750','138',''),
('4324','sql','2001','138','chx_groupe_acces','c','5','2','1757','1772','136','0','2','0','1750','182',''),
('4325','sql','2001','139',':T2_chx_groupe_acces','c','4','0','1776','1795','135','0','2','0','1750','182',''),
('4326','sql','2001','140','egal','f','3','0','1808','1811','114','2','6','2','1812','145',''),
('4327','sql','2001','141','champ','f','4','0','1813','1817','140','2','1','1','1818','144',''),
('4328','sql','2001','142','T2','c','5','2','1820','1821','141','0','1','0','1818','143',''),
('4329','sql','2001','143','chx_metier_acces','c','5','2','1825','1840','141','0','2','0','1818','182',''),
('4330','sql','2001','144',':T2_chx_metier_acces','c','4','0','1844','1863','140','0','2','0','1818','182',''),
('4331','sql','2001','145','egal','f','3','0','1876','1879','114','2','7','2','1880','150',''),
('4332','sql','2001','146','champ','f','4','0','1881','1885','145','2','1','1','1886','149',''),
('4333','sql','2001','147','T2','c','5','2','1888','1889','146','0','1','0','1886','148',''),
('4334','sql','2001','148','che_actif_acces','c','5','2','1893','1907','146','0','2','0','1886','182',''),
('4335','sql','2001','149',':T2_che_actif_acces','c','4','0','1911','1929','145','0','2','0','1886','182',''),
('4336','sql','2001','150','egal','f','3','0','1942','1945','114','2','8','2','1946','155',''),
('4337','sql','2001','151','champ','f','4','0','1947','1951','150','2','1','1','1952','154',''),
('4338','sql','2001','152','T3','c','5','2','1954','1955','151','0','1','0','1952','153',''),
('4339','sql','2001','153','chi_id_groupe','c','5','2','1959','1971','151','0','2','0','1952','182',''),
('4340','sql','2001','154',':T3_chi_id_groupe','c','4','0','1975','1991','150','0','2','0','1952','182',''),
('4341','sql','2001','155','comme','f','3','0','2004','2008','114','2','9','2','2009','160',''),
('4342','sql','2001','156','champ','f','4','0','2010','2014','155','2','1','1','2015','159',''),
('4343','sql','2001','157','T3','c','5','2','2017','2018','156','0','1','0','2015','158',''),
('4344','sql','2001','158','chp_nom_groupe','c','5','2','2022','2035','156','0','2','0','2015','182',''),
('4345','sql','2001','159',':T3_chp_nom_groupe','c','4','0','2039','2056','155','0','2','0','2015','182',''),
('4346','sql','2001','160','comme','f','3','0','2069','2073','114','2','10','2','2074','165',''),
('4347','sql','2001','161','champ','f','4','0','2075','2079','160','2','1','1','2080','164',''),
('4348','sql','2001','162','T4','c','5','2','2082','2083','161','0','1','0','2080','163',''),
('4349','sql','2001','163','chp_nom_metier','c','5','2','2087','2100','161','0','2','0','2080','182',''),
('4350','sql','2001','164',':T4_chp_nom_metier','c','4','0','2104','2121','160','0','2','0','2080','182',''),
('4351','sql','2001','165','egal','f','3','0','2134','2137','114','2','11','2','2138','182',''),
('4352','sql','2001','166','champ','f','4','0','2139','2143','165','2','1','1','2144','169',''),
('4353','sql','2001','167','T0','c','5','2','2146','2147','166','0','1','0','2144','168',''),
('4354','sql','2001','168','chx_utilisateur_acteur','c','5','2','2151','2172','166','0','2','0','2144','182',''),
('4355','sql','2001','169',':T0_chx_utilisateur_acteur','c','4','0','2176','2201','165','0','2','0','2144','182',''),
('4356','sql','2001','170','complements','f','1','0','2221','2231','2','2','4','4','2232','182',''),
('4357','sql','2001','171','trier_par','f','2','0','2240','2248','170','1','1','3','2249','177',''),
('4358','sql','2001','172','','f','3','0','2240','2248','171','2','1','2','2250','182',''),
('4359','sql','2001','173','champ','f','4','0','2251','2255','172','2','1','1','2256','176',''),
('4360','sql','2001','174','T0','c','5','2','2258','2259','173','0','1','0','2256','175',''),
('4361','sql','2001','175','chx_utilisateur_acteur','c','5','2','2263','2284','173','0','2','0','2256','182',''),
('4362','sql','2001','176','décroissant','f','4','0','2288','2298','172','0','2','0','2299','182',''),
('4363','sql','2001','177','limité_à','f','2','0','2311','2318','170','2','2','2','2319','182',''),
('4364','sql','2001','178','quantité','f','3','0','2320','2327','177','1','1','1','2328','180',''),
('4365','sql','2001','179',':quantitee','c','4','0','2329','2338','178','0','1','0','2328','182',''),
('4366','sql','2001','180','début','f','3','0','2341','2345','177','1','2','1','2346','182',''),
('4367','sql','2001','181',':debut','c','4','0','2347','2352','180','0','1','0','2346','182',''),
('4368','sql','1164','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4369','sql','1164','1','sélectionner','f','0','0','0','11','0','3','1','6','12','90',''),
('4370','sql','1164','2','valeurs','f','1','0','17','23','1','13','1','2','24','42',''),
('4371','sql','1164','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('4372','sql','1164','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('4373','sql','1164','5','cht_libelle_menu','c','3','2','44','59','3','0','2','0','37','90',''),
('4374','sql','1164','6','champ','f','2','0','70','74','2','2','2','1','75','9',''),
('4375','sql','1164','7','T0','c','3','2','77','78','6','0','1','0','75','8',''),
('4376','sql','1164','8','chp_titre_menu','c','3','2','82','95','6','0','2','0','75','90',''),
('4377','sql','1164','9','champ','f','2','0','106','110','2','2','3','1','111','12',''),
('4378','sql','1164','10','T0','c','3','2','113','114','9','0','1','0','111','11',''),
('4379','sql','1164','11','chp_methode_menu','c','3','2','118','133','9','0','2','0','111','90',''),
('4380','sql','1164','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('4381','sql','1164','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('4382','sql','1164','14','chi_id_menu','c','3','2','156','166','12','0','2','0','149','90',''),
('4383','sql','1164','15','champ','f','2','0','177','181','2','2','5','1','182','18',''),
('4384','sql','1164','16','T0','c','3','2','184','185','15','0','1','0','182','17',''),
('4385','sql','1164','17','cht_initialisation_menu','c','3','2','189','211','15','0','2','0','182','90',''),
('4386','sql','1164','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('4387','sql','1164','19','T1','c','3','2','229','230','18','0','1','0','227','20',''),
('4388','sql','1164','20','chx_source_autorisation','c','3','2','234','256','18','0','2','0','227','90',''),
('4389','sql','1164','21','champ','f','2','0','267','271','2','2','7','1','272','24',''),
('4390','sql','1164','22','T2','c','3','2','274','275','21','0','1','0','272','23',''),
('4391','sql','1164','23','chp_nom_source','c','3','2','279','292','21','0','2','0','272','90',''),
('4392','sql','1164','24','champ','f','2','0','303','307','2','2','8','1','308','27',''),
('4393','sql','1164','25','T0','c','3','2','310','311','24','0','1','0','308','26',''),
('4394','sql','1164','26','cht_condition_menu','c','3','2','315','332','24','0','2','0','308','90',''),
('4395','sql','1164','27','champ','f','2','0','343','347','2','2','9','1','348','30',''),
('4396','sql','1164','28','T0','c','3','2','350','351','27','0','1','0','348','29',''),
('4397','sql','1164','29','cht_condition_js_menu','c','3','2','355','375','27','0','2','0','348','90',''),
('4398','sql','1164','30','champ','f','2','0','386','390','2','2','10','1','391','33',''),
('4399','sql','1164','31','T0','c','3','2','393','394','30','0','1','0','391','32',''),
('4400','sql','1164','32','chx_autorisation_menu','c','3','2','398','418','30','0','2','0','391','90',''),
('4401','sql','1164','33','champ','f','2','0','429','433','2','2','11','1','434','36',''),
('4402','sql','1164','34','T2','c','3','2','436','437','33','0','1','0','434','35',''),
('4403','sql','1164','35','cht_condition_js_source','c','3','2','441','463','33','0','2','0','434','90',''),
('4404','sql','1164','36','champ','f','2','0','474','478','2','2','12','1','479','39',''),
('4405','sql','1164','37','T2','c','3','2','481','482','36','0','1','0','479','38',''),
('4406','sql','1164','38','cht_notification_ko_source','c','3','2','486','511','36','0','2','0','479','90',''),
('4407','sql','1164','39','champ','f','2','0','522','526','2','2','13','1','527','90',''),
('4408','sql','1164','40','T0','c','3','2','529','530','39','0','1','0','527','41',''),
('4409','sql','1164','41','cht_condition_js_menu','c','3','2','534','554','39','0','2','0','527','90',''),
('4410','sql','1164','42','provenance','f','1','0','567','576','1','3','2','5','577','83',''),
('4411','sql','1164','43','table_reference','f','2','0','585','599','42','1','1','4','600','51',''),
('4412','sql','1164','44','source','f','3','0','611','616','43','1','1','3','617','90',''),
('4413','sql','1164','45','nom_de_la_table','f','4','0','618','632','44','3','1','2','633','90',''),
('4414','sql','1164','46','tbl_menus','c','5','0','634','642','45','0','1','0','633','47',''),
('4415','sql','1164','47','alias','f','5','0','644','648','45','1','2','1','649','49',''),
('4416','sql','1164','48','T0','c','6','0','650','651','47','0','1','0','649','90',''),
('4417','sql','1164','49','base','f','5','0','654','657','45','1','3','1','658','90',''),
('4418','sql','1164','50','b1','c','6','0','659','660','49','0','1','0','658','90',''),
('4419','sql','1164','51','jointure_gauche','f','2','0','680','694','42','2','2','4','695','67',''),
('4420','sql','1164','52','source','f','3','0','706','711','51','1','1','3','712','59',''),
('4421','sql','1164','53','nom_de_la_table','f','4','0','713','727','52','3','1','2','728','90',''),
('4422','sql','1164','54','tbl_autorisations','c','5','0','729','745','53','0','1','0','728','55',''),
('4423','sql','1164','55','alias','f','5','0','747','751','53','1','2','1','752','57',''),
('4424','sql','1164','56','T1','c','6','0','753','754','55','0','1','0','752','90',''),
('4425','sql','1164','57','base','f','5','0','757','760','53','1','3','1','761','90',''),
('4426','sql','1164','58','b1','c','6','0','762','763','57','0','1','0','761','90',''),
('4427','sql','1164','59','contrainte','f','3','0','778','787','51','1','2','3','788','90',''),
('4428','sql','1164','60','egal','f','4','0','789','792','59','2','1','2','793','90',''),
('4429','sql','1164','61','champ','f','5','0','794','798','60','2','1','1','799','64',''),
('4430','sql','1164','62','T1','c','6','0','800','801','61','0','1','0','799','63',''),
('4431','sql','1164','63','chi_id_autorisation','c','6','0','803','821','61','0','2','0','799','90',''),
('4432','sql','1164','64','champ','f','5','0','824','828','60','2','2','1','829','90',''),
('4433','sql','1164','65','T0','c','6','0','830','831','64','0','1','0','829','66',''),
('4434','sql','1164','66','chx_autorisation_menu','c','6','0','833','853','64','0','2','0','829','90',''),
('4435','sql','1164','67','jointure_gauche','f','2','0','873','887','42','2','3','4','888','90',''),
('4436','sql','1164','68','source','f','3','0','899','904','67','1','1','3','905','75',''),
('4437','sql','1164','69','nom_de_la_table','f','4','0','906','920','68','3','1','2','921','90',''),
('4438','sql','1164','70','tbl_sources','c','5','0','922','932','69','0','1','0','921','71',''),
('4439','sql','1164','71','alias','f','5','0','934','938','69','1','2','1','939','73',''),
('4440','sql','1164','72','T2','c','6','0','940','941','71','0','1','0','939','90',''),
('4441','sql','1164','73','base','f','5','0','944','947','69','1','3','1','948','90',''),
('4442','sql','1164','74','b1','c','6','0','949','950','73','0','1','0','948','90',''),
('4443','sql','1164','75','contrainte','f','3','0','965','974','67','1','2','3','975','90',''),
('4444','sql','1164','76','egal','f','4','0','976','979','75','2','1','2','980','90',''),
('4445','sql','1164','77','champ','f','5','0','981','985','76','2','1','1','986','80',''),
('4446','sql','1164','78','T2','c','6','0','987','988','77','0','1','0','986','79',''),
('4447','sql','1164','79','chi_id_source','c','6','0','990','1002','77','0','2','0','986','90',''),
('4448','sql','1164','80','champ','f','5','0','1005','1009','76','2','2','1','1010','90',''),
('4449','sql','1164','81','T1','c','6','0','1011','1012','80','0','1','0','1010','82',''),
('4450','sql','1164','82','chx_source_autorisation','c','6','0','1014','1036','80','0','2','0','1010','90',''),
('4451','sql','1164','83','conditions','f','1','0','1058','1067','1','1','3','4','1068','90',''),
('4452','sql','1164','84','et','f','2','0','1076','1077','83','1','1','3','1078','90',''),
('4453','sql','1164','85','egal','f','3','0','1079','1082','84','2','1','2','1083','90',''),
('4454','sql','1164','86','champ','f','4','0','1084','1088','85','2','1','1','1089','89',''),
('4455','sql','1164','87','T1','c','5','2','1091','1092','86','0','1','0','1089','88',''),
('4456','sql','1164','88','chx_acces_autorisation','c','5','2','1096','1117','86','0','2','0','1089','90',''),
('4457','sql','1164','89','0','c','4','0','1121','1121','85','0','2','0','1089','90',''),
('4458','sql','1162','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4459','sql','1162','1','sélectionner','f','0','0','0','11','0','3','1','6','12','21',''),
('4460','sql','1162','2','valeurs','f','1','0','17','23','1','1','1','2','24','6',''),
('4461','sql','1162','3','champ','f','2','0','25','29','2','2','1','1','30','21',''),
('4462','sql','1162','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('4463','sql','1162','5','chi_id_acces','c','3','2','37','48','3','0','2','0','30','21',''),
('4464','sql','1162','6','provenance','f','1','0','57','66','1','1','2','5','67','15',''),
('4465','sql','1162','7','table_reference','f','2','0','75','89','6','1','1','4','90','21',''),
('4466','sql','1162','8','source','f','3','0','101','106','7','1','1','3','107','21',''),
('4467','sql','1162','9','nom_de_la_table','f','4','0','108','122','8','3','1','2','123','21',''),
('4468','sql','1162','10','tbl_acces','c','5','0','124','132','9','0','1','0','123','11',''),
('4469','sql','1162','11','alias','f','5','0','134','138','9','1','2','1','139','13',''),
('4470','sql','1162','12','T0','c','6','0','140','141','11','0','1','0','139','21',''),
('4471','sql','1162','13','base','f','5','0','144','147','9','1','3','1','148','21',''),
('4472','sql','1162','14','b1','c','6','0','149','150','13','0','1','0','148','21',''),
('4473','sql','1162','15','conditions','f','1','0','172','181','1','1','3','3','182','21',''),
('4474','sql','1162','16','supegal','f','2','0','183','189','15','2','1','2','190','21',''),
('4475','sql','1162','17','champ','f','3','0','191','195','16','2','1','1','196','20',''),
('4476','sql','1162','18','T0','c','4','2','198','199','17','0','1','0','196','19',''),
('4477','sql','1162','19','chi_id_acces','c','4','2','203','214','17','0','2','0','196','21',''),
('4478','sql','1162','20','1','c','3','0','218','218','16','0','2','0','196','21',''),
('4479','sql','1159','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4480','sql','1159','1','modifier','f','0','0','0','7','0','3','1','6','8','33',''),
('4481','sql','1159','2','valeurs','f','1','0','13','19','1','1','1','3','20','9',''),
('4482','sql','1159','3','affecte','f','2','0','21','27','2','2','1','2','28','33',''),
('4483','sql','1159','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('4484','sql','1159','5','che_priorite_tache','c','4','2','36','53','4','0','1','0','34','33',''),
('4485','sql','1159','6','plus','f','3','0','57','60','3','2','2','1','61','33',''),
('4486','sql','1159','7','che_priorite_tache','c','4','0','62','79','6','0','1','0','61','8',''),
('4487','sql','1159','8','1','c','4','0','81','81','6','0','2','0','61','33',''),
('4488','sql','1159','9','provenance','f','1','0','90','99','1','1','2','5','100','18',''),
('4489','sql','1159','10','table_reference','f','2','0','108','122','9','1','1','4','123','33',''),
('4490','sql','1159','11','source','f','3','0','134','139','10','1','1','3','140','33',''),
('4491','sql','1159','12','nom_de_la_table','f','4','0','141','155','11','3','1','2','156','33',''),
('4492','sql','1159','13','tbl_taches','c','5','0','157','166','12','0','1','0','156','14',''),
('4493','sql','1159','14','alias','f','5','0','168','172','12','1','2','1','173','16',''),
('4494','sql','1159','15','T0','c','6','0','174','175','14','0','1','0','173','33',''),
('4495','sql','1159','16','base','f','5','0','178','181','12','1','3','1','182','33',''),
('4496','sql','1159','17','b1','c','6','0','183','184','16','0','1','0','182','33',''),
('4497','sql','1159','18','conditions','f','1','0','206','215','1','1','3','4','216','33',''),
('4498','sql','1159','19','et','f','2','0','224','225','18','3','1','3','226','33',''),
('4499','sql','1159','20','egal','f','3','0','227','230','19','2','1','2','231','24',''),
('4500','sql','1159','21','champ','f','4','0','232','236','20','1','1','1','237','23',''),
('4501','sql','1159','22','chi_id_tache','c','5','2','239','250','21','0','1','0','237','33',''),
('4502','sql','1159','23',':c_chi_id_tache','c','4','0','254','268','20','0','2','0','237','33',''),
('4503','sql','1159','24','egal','f','3','0','271','274','19','2','2','2','275','29',''),
('4504','sql','1159','25','champ','f','4','0','276','280','24','1','1','1','281','27',''),
('4505','sql','1159','26','chx_utilisateur_tache','c','5','2','283','303','25','0','1','0','281','33',''),
('4506','sql','1159','27','session','f','4','0','307','313','24','1','2','1','314','33',''),
('4507','sql','1159','28','chi_id_utilisateur','c','5','0','315','332','27','0','1','0','314','33',''),
('4508','sql','1159','29','inf','f','3','0','336','338','19','2','3','2','339','33',''),
('4509','sql','1159','30','champ','f','4','0','340','344','29','1','1','1','345','32',''),
('4510','sql','1159','31','che_priorite_tache','c','5','2','347','364','30','0','1','0','345','33',''),
('4511','sql','1159','32','99','c','4','0','368','369','29','0','2','0','345','33',''),
('4512','sql','1158','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4513','sql','1158','1','modifier','f','0','0','0','7','0','3','1','6','8','32',''),
('4514','sql','1158','2','valeurs','f','1','0','13','19','1','1','1','3','20','9',''),
('4515','sql','1158','3','affecte','f','2','0','21','27','2','2','1','2','28','32',''),
('4516','sql','1158','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('4517','sql','1158','5','che_priorite_tache','c','4','2','36','53','4','0','1','0','34','32',''),
('4518','sql','1158','6','moins','f','3','0','57','61','3','2','2','1','62','32',''),
('4519','sql','1158','7','che_priorite_tache','c','4','0','63','80','6','0','1','0','62','8',''),
('4520','sql','1158','8','1','c','4','0','82','82','6','0','2','0','62','32',''),
('4521','sql','1158','9','provenance','f','1','0','91','100','1','1','2','5','101','18',''),
('4522','sql','1158','10','table_reference','f','2','0','109','123','9','1','1','4','124','32',''),
('4523','sql','1158','11','source','f','3','0','135','140','10','1','1','3','141','32',''),
('4524','sql','1158','12','nom_de_la_table','f','4','0','142','156','11','3','1','2','157','32',''),
('4525','sql','1158','13','tbl_taches','c','5','0','158','167','12','0','1','0','157','14',''),
('4526','sql','1158','14','alias','f','5','0','169','173','12','1','2','1','174','16',''),
('4527','sql','1158','15','T0','c','6','0','175','176','14','0','1','0','174','32',''),
('4528','sql','1158','16','base','f','5','0','179','182','12','1','3','1','183','32',''),
('4529','sql','1158','17','b1','c','6','0','184','185','16','0','1','0','183','32',''),
('4530','sql','1158','18','conditions','f','1','0','207','216','1','1','3','4','217','32',''),
('4531','sql','1158','19','et','f','2','0','225','226','18','3','1','3','227','32',''),
('4532','sql','1158','20','egal','f','3','0','228','231','19','2','1','2','232','24',''),
('4533','sql','1158','21','champ','f','4','0','233','237','20','1','1','1','238','23',''),
('4534','sql','1158','22','chi_id_tache','c','5','2','240','251','21','0','1','0','238','32',''),
('4535','sql','1158','23',':c_chi_id_tache','c','4','0','255','269','20','0','2','0','238','32',''),
('4536','sql','1158','24','egal','f','3','0','272','275','19','2','2','2','276','28',''),
('4537','sql','1158','25','champ','f','4','0','277','281','24','1','1','1','282','27',''),
('4538','sql','1158','26','chx_utilisateur_tache','c','5','2','284','304','25','0','1','0','282','32',''),
('4539','sql','1158','27',':c_chx_utilisateur_tache','c','4','0','308','331','24','0','2','0','282','32',''),
('4540','sql','1158','28','supegal','f','3','0','334','340','19','2','3','2','341','32',''),
('4541','sql','1158','29','champ','f','4','0','342','346','28','1','1','1','347','31',''),
('4542','sql','1158','30','che_priorite_tache','c','5','2','349','366','29','0','1','0','347','32',''),
('4543','sql','1158','31','1','c','4','0','370','370','28','0','2','0','347','32',''),
('4544','sql','1157','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4545','sql','1157','1','modifier','f','0','0','0','7','0','3','1','6','8','30',''),
('4546','sql','1157','2','valeurs','f','1','0','13','19','1','2','1','3','20','11',''),
('4547','sql','1157','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('4548','sql','1157','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('4549','sql','1157','5','che_priorite_tache','c','4','2','36','53','4','0','1','0','34','30',''),
('4550','sql','1157','6',':n_che_priorite_tache','c','3','0','57','77','3','0','2','0','34','30',''),
('4551','sql','1157','7','affecte','f','2','0','80','86','2','2','2','2','87','30',''),
('4552','sql','1157','8','champ','f','3','0','88','92','7','1','1','1','93','10',''),
('4553','sql','1157','9','chd__dtm_tache','c','4','2','95','108','8','0','1','0','93','30',''),
('4554','sql','1157','10',':n_chd__dtm_tache','c','3','0','112','128','7','0','2','0','93','30',''),
('4555','sql','1157','11','provenance','f','1','0','136','145','1','1','2','5','146','20',''),
('4556','sql','1157','12','table_reference','f','2','0','154','168','11','1','1','4','169','30',''),
('4557','sql','1157','13','source','f','3','0','180','185','12','1','1','3','186','30',''),
('4558','sql','1157','14','nom_de_la_table','f','4','0','187','201','13','3','1','2','202','30',''),
('4559','sql','1157','15','tbl_taches','c','5','0','203','212','14','0','1','0','202','16',''),
('4560','sql','1157','16','alias','f','5','0','214','218','14','1','2','1','219','18',''),
('4561','sql','1157','17','T0','c','6','0','220','221','16','0','1','0','219','30',''),
('4562','sql','1157','18','base','f','5','0','224','227','14','1','3','1','228','30',''),
('4563','sql','1157','19','b1','c','6','0','229','230','18','0','1','0','228','30',''),
('4564','sql','1157','20','conditions','f','1','0','252','261','1','1','3','4','262','30',''),
('4565','sql','1157','21','et','f','2','0','270','271','20','2','1','3','272','30',''),
('4566','sql','1157','22','egal','f','3','0','273','276','21','2','1','2','277','26',''),
('4567','sql','1157','23','champ','f','4','0','278','282','22','1','1','1','283','25',''),
('4568','sql','1157','24','chi_id_tache','c','5','2','285','296','23','0','1','0','283','30',''),
('4569','sql','1157','25',':c_chi_id_tache','c','4','0','300','314','22','0','2','0','283','30',''),
('4570','sql','1157','26','egal','f','3','0','317','320','21','2','2','2','321','30',''),
('4571','sql','1157','27','champ','f','4','0','322','326','26','1','1','1','327','29',''),
('4572','sql','1157','28','chx_utilisateur_tache','c','5','2','329','349','27','0','1','0','327','30',''),
('4573','sql','1157','29',':c_chx_utilisateur_tache','c','4','0','353','376','26','0','2','0','327','30',''),
('4574','sql','1156','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4575','sql','1156','1','modifier','f','0','0','0','7','0','3','1','6','8','27',''),
('4576','sql','1156','2','valeurs','f','1','0','13','19','1','1','1','3','20','7',''),
('4577','sql','1156','3','affecte','f','2','0','21','27','2','2','1','2','28','27',''),
('4578','sql','1156','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('4579','sql','1156','5','che_priorite_tache','c','4','0','35','52','4','0','1','0','34','27',''),
('4580','sql','1156','6',':n_che_priorite_tache','c','3','0','55','75','3','0','2','0','34','27',''),
('4581','sql','1156','7','provenance','f','1','0','83','92','1','1','2','5','93','16',''),
('4582','sql','1156','8','table_reference','f','2','0','101','115','7','1','1','4','116','27',''),
('4583','sql','1156','9','source','f','3','0','127','132','8','1','1','3','133','27',''),
('4584','sql','1156','10','nom_de_la_table','f','4','0','134','148','9','3','1','2','149','27',''),
('4585','sql','1156','11','tbl_taches','c','5','0','150','159','10','0','1','0','149','12',''),
('4586','sql','1156','12','alias','f','5','0','161','165','10','1','2','1','166','14',''),
('4587','sql','1156','13','T0','c','6','0','167','168','12','0','1','0','166','27',''),
('4588','sql','1156','14','base','f','5','0','171','174','10','1','3','1','175','27',''),
('4589','sql','1156','15','b1','c','6','0','176','177','14','0','1','0','175','27',''),
('4590','sql','1156','16','conditions','f','1','0','199','208','1','1','3','4','209','27',''),
('4591','sql','1156','17','et','f','2','0','217','218','16','2','1','3','219','27',''),
('4592','sql','1156','18','egal','f','3','0','220','223','17','2','1','2','224','22',''),
('4593','sql','1156','19','champ','f','4','0','225','229','18','1','1','1','230','21',''),
('4594','sql','1156','20','chi_id_tache','c','5','0','231','242','19','0','1','0','230','27',''),
('4595','sql','1156','21',':c_chi_id_tache','c','4','0','245','259','18','0','2','0','230','27',''),
('4596','sql','1156','22','egal','f','3','0','262','265','17','2','2','2','266','27',''),
('4597','sql','1156','23','champ','f','4','0','267','271','22','1','1','1','272','25',''),
('4598','sql','1156','24','chx_utilisateur_tache','c','5','0','273','293','23','0','1','0','272','27',''),
('4599','sql','1156','25','session','f','4','0','296','302','22','1','2','1','303','27',''),
('4600','sql','1156','26','chi_id_utilisateur','c','5','0','304','321','25','0','1','0','303','27',''),
('4601','sql','1155','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4602','sql','1155','1','sélectionner','f','0','0','0','11','0','4','1','6','12','63',''),
('4603','sql','1155','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('4604','sql','1155','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('4605','sql','1155','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('4606','sql','1155','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','63',''),
('4607','sql','1155','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('4608','sql','1155','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('4609','sql','1155','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','63',''),
('4610','sql','1155','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('4611','sql','1155','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('4612','sql','1155','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','63',''),
('4613','sql','1155','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('4614','sql','1155','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('4615','sql','1155','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','63',''),
('4616','sql','1155','15','champ','f','2','0','186','190','2','2','5','1','191','63',''),
('4617','sql','1155','16','T1','c','3','2','193','194','15','0','1','0','191','17',''),
('4618','sql','1155','17','chp_nom_de_connexion_utilisateur','c','3','2','198','229','15','0','2','0','191','63',''),
('4619','sql','1155','18','provenance','f','1','0','242','251','1','2','2','5','252','43',''),
('4620','sql','1155','19','table_reference','f','2','0','260','274','18','1','1','4','275','27',''),
('4621','sql','1155','20','source','f','3','0','286','291','19','1','1','3','292','63',''),
('4622','sql','1155','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','63',''),
('4623','sql','1155','22','tbl_taches','c','5','0','309','318','21','0','1','0','308','23',''),
('4624','sql','1155','23','alias','f','5','0','320','324','21','1','2','1','325','25',''),
('4625','sql','1155','24','T0','c','6','0','326','327','23','0','1','0','325','63',''),
('4626','sql','1155','25','base','f','5','0','330','333','21','1','3','1','334','63',''),
('4627','sql','1155','26','b1','c','6','0','335','336','25','0','1','0','334','63',''),
('4628','sql','1155','27','jointure_gauche','f','2','0','356','370','18','2','2','4','371','63',''),
('4629','sql','1155','28','source','f','3','0','382','387','27','1','1','3','388','35',''),
('4630','sql','1155','29','nom_de_la_table','f','4','0','389','403','28','3','1','2','404','63',''),
('4631','sql','1155','30','tbl_utilisateurs','c','5','0','405','420','29','0','1','0','404','31',''),
('4632','sql','1155','31','alias','f','5','0','422','426','29','1','2','1','427','33',''),
('4633','sql','1155','32','T1','c','6','0','428','429','31','0','1','0','427','63',''),
('4634','sql','1155','33','base','f','5','0','432','435','29','1','3','1','436','63',''),
('4635','sql','1155','34','b1','c','6','0','437','438','33','0','1','0','436','63',''),
('4636','sql','1155','35','contrainte','f','3','0','453','462','27','1','2','3','463','63',''),
('4637','sql','1155','36','egal','f','4','0','464','467','35','2','1','2','468','63',''),
('4638','sql','1155','37','champ','f','5','0','469','473','36','2','1','1','474','40',''),
('4639','sql','1155','38','T1','c','6','0','475','476','37','0','1','0','474','39',''),
('4640','sql','1155','39','chi_id_utilisateur','c','6','0','478','495','37','0','2','0','474','63',''),
('4641','sql','1155','40','champ','f','5','0','498','502','36','2','2','1','503','63',''),
('4642','sql','1155','41','T0','c','6','0','504','505','40','0','1','0','503','42',''),
('4643','sql','1155','42','chx_utilisateur_tache','c','6','0','507','527','40','0','2','0','503','63',''),
('4644','sql','1155','43','conditions','f','1','0','549','558','1','1','3','4','559','56',''),
('4645','sql','1155','44','et','f','2','0','567','568','43','2','1','3','569','63',''),
('4646','sql','1155','45','egal','f','3','0','570','573','44','2','1','2','574','51',''),
('4647','sql','1155','46','champ','f','4','0','575','579','45','2','1','1','580','49',''),
('4648','sql','1155','47','T0','c','5','2','582','583','46','0','1','0','580','48',''),
('4649','sql','1155','48','chx_utilisateur_tache','c','5','2','587','607','46','0','2','0','580','63',''),
('4650','sql','1155','49','session','f','4','0','611','617','45','1','2','1','618','63',''),
('4651','sql','1155','50','chi_id_utilisateur','c','5','0','619','636','49','0','1','0','618','63',''),
('4652','sql','1155','51','inf','f','3','0','640','642','44','2','2','2','643','63',''),
('4653','sql','1155','52','champ','f','4','0','644','648','51','2','1','1','649','55',''),
('4654','sql','1155','53','T0','c','5','2','651','652','52','0','1','0','649','54',''),
('4655','sql','1155','54','che_priorite_tache','c','5','2','656','673','52','0','2','0','649','63',''),
('4656','sql','1155','55',':T0_che_priorite_tache','c','4','0','677','698','51','0','2','0','649','63',''),
('4657','sql','1155','56','complements','f','1','0','711','721','1','1','4','4','722','63',''),
('4658','sql','1155','57','trier_par','f','2','0','730','738','56','1','1','3','739','63',''),
('4659','sql','1155','58','','f','3','0','730','738','57','2','1','2','740','63',''),
('4660','sql','1155','59','champ','f','4','0','741','745','58','2','1','1','746','62',''),
('4661','sql','1155','60','T0','c','5','2','748','749','59','0','1','0','746','61',''),
('4662','sql','1155','61','che_priorite_tache','c','5','2','753','770','59','0','2','0','746','63',''),
('4663','sql','1155','62','croissant','f','4','0','774','782','58','0','2','0','783','63',''),
('4664','sql','1154','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4665','sql','1154','1','modifier','f','0','0','0','7','0','4','1','6','8','21',''),
('4666','sql','1154','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('4667','sql','1154','3','1','c','2','0','31','31','2','0','1','0','30','21',''),
('4668','sql','1154','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('4669','sql','1154','5','affecte','f','2','0','46','52','4','2','1','2','53','21',''),
('4670','sql','1154','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('4671','sql','1154','7','cht_parametres_acces','c','4','2','61','80','6','0','1','0','59','21',''),
('4672','sql','1154','8',':n_cht_parametres_acces','c','3','0','84','106','5','0','2','0','59','21','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 0 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 1000 (3109) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('4673','sql','1154','9','provenance','f','1','0','114','123','1','1','3','5','124','16',''),
('4674','sql','1154','10','table_reference','f','2','0','132','146','9','1','1','4','147','21',''),
('4675','sql','1154','11','source','f','3','0','158','163','10','1','1','3','164','21',''),
('4676','sql','1154','12','nom_de_la_table','f','4','0','165','179','11','2','1','2','180','21',''),
('4677','sql','1154','13','tbl_acces','c','5','0','181','189','12','0','1','0','180','14',''),
('4678','sql','1154','14','base','f','5','0','191','194','12','1','2','1','195','21',''),
('4679','sql','1154','15','b1','c','6','0','196','197','14','0','1','0','195','21',''),
('4680','sql','1154','16','conditions','f','1','0','219','228','1','1','4','3','229','21',''),
('4681','sql','1154','17','egal','f','2','0','230','233','16','2','1','2','234','21',''),
('4682','sql','1154','18','champ','f','3','0','235','239','17','1','1','1','240','20',''),
('4683','sql','1154','19','chi_id_acces','c','4','2','242','253','18','0','1','0','240','21',''),
('4684','sql','1154','20',':c_chi_id_acces','c','3','0','257','271','17','0','2','0','240','21',''),
('4685','sql','1153','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4686','sql','1153','1','sélectionner','f','0','0','0','11','0','3','1','6','12','100',''),
('4687','sql','1153','2','valeurs','f','1','0','17','23','1','11','1','2','24','36',''),
('4688','sql','1153','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('4689','sql','1153','4','T1','c','3','2','39','40','3','0','1','0','37','5',''),
('4690','sql','1153','5','chx_source_autorisation','c','3','2','44','66','3','0','2','0','37','100',''),
('4691','sql','1153','6','champ','f','2','0','77','81','2','2','2','1','82','9',''),
('4692','sql','1153','7','T0','c','3','2','84','85','6','0','1','0','82','8',''),
('4693','sql','1153','8','chp_titre_menu','c','3','2','89','102','6','0','2','0','82','100',''),
('4694','sql','1153','9','champ','f','2','0','113','117','2','2','3','1','118','12',''),
('4695','sql','1153','10','T0','c','3','2','120','121','9','0','1','0','118','11',''),
('4696','sql','1153','11','chp_methode_menu','c','3','2','125','140','9','0','2','0','118','100',''),
('4697','sql','1153','12','champ','f','2','0','151','155','2','2','4','1','156','15',''),
('4698','sql','1153','13','T3','c','3','2','158','159','12','0','1','0','156','14',''),
('4699','sql','1153','14','chp_nom_source','c','3','2','163','176','12','0','2','0','156','100',''),
('4700','sql','1153','15','champ','f','2','0','187','191','2','2','5','1','192','18',''),
('4701','sql','1153','16','T0','c','3','2','194','195','15','0','1','0','192','17',''),
('4702','sql','1153','17','cht_libelle_menu','c','3','2','199','214','15','0','2','0','192','100',''),
('4703','sql','1153','18','champ','f','2','0','225','229','2','2','6','1','230','21',''),
('4704','sql','1153','19','T0','c','3','2','232','233','18','0','1','0','230','20',''),
('4705','sql','1153','20','cht_initialisation_menu','c','3','2','237','259','18','0','2','0','230','100',''),
('4706','sql','1153','21','champ','f','2','0','270','274','2','2','7','1','275','24',''),
('4707','sql','1153','22','T0','c','3','2','277','278','21','0','1','0','275','23',''),
('4708','sql','1153','23','chi_id_menu','c','3','2','282','292','21','0','2','0','275','100',''),
('4709','sql','1153','24','champ','f','2','0','303','307','2','2','8','1','308','27',''),
('4710','sql','1153','25','T0','c','3','2','310','311','24','0','1','0','308','26',''),
('4711','sql','1153','26','cht_condition_menu','c','3','2','315','332','24','0','2','0','308','100',''),
('4712','sql','1153','27','champ','f','2','0','343','347','2','2','9','1','348','30',''),
('4713','sql','1153','28','T0','c','3','2','350','351','27','0','1','0','348','29',''),
('4714','sql','1153','29','cht_condition_js_menu','c','3','2','355','375','27','0','2','0','348','100',''),
('4715','sql','1153','30','champ','f','2','0','386','390','2','2','10','1','391','33',''),
('4716','sql','1153','31','T0','c','3','2','393','394','30','0','1','0','391','32',''),
('4717','sql','1153','32','chx_autorisation_menu','c','3','2','398','418','30','0','2','0','391','100',''),
('4718','sql','1153','33','champ','f','2','0','429','433','2','2','11','1','434','100',''),
('4719','sql','1153','34','T3','c','3','2','436','437','33','0','1','0','434','35',''),
('4720','sql','1153','35','cht_condition_js_source','c','3','2','441','463','33','0','2','0','434','100',''),
('4721','sql','1153','36','provenance','f','1','0','476','485','1','4','2','5','486','85',''),
('4722','sql','1153','37','table_reference','f','2','0','494','508','36','1','1','4','509','45',''),
('4723','sql','1153','38','source','f','3','0','520','525','37','1','1','3','526','100',''),
('4724','sql','1153','39','nom_de_la_table','f','4','0','527','541','38','3','1','2','542','100',''),
('4725','sql','1153','40','tbl_menus','c','5','0','543','551','39','0','1','0','542','41',''),
('4726','sql','1153','41','alias','f','5','0','553','557','39','1','2','1','558','43',''),
('4727','sql','1153','42','T0','c','6','0','559','560','41','0','1','0','558','100',''),
('4728','sql','1153','43','base','f','5','0','563','566','39','1','3','1','567','100',''),
('4729','sql','1153','44','b1','c','6','0','568','569','43','0','1','0','567','100',''),
('4730','sql','1153','45','jointure_croisée','f','2','0','589','604','36','1','2','4','605','53',''),
('4731','sql','1153','46','source','f','3','0','616','621','45','1','1','3','622','100',''),
('4732','sql','1153','47','nom_de_la_table','f','4','0','623','637','46','3','1','2','638','100',''),
('4733','sql','1153','48','tbl_autorisations','c','5','0','639','655','47','0','1','0','638','49',''),
('4734','sql','1153','49','alias','f','5','0','657','661','47','1','2','1','662','51',''),
('4735','sql','1153','50','T1','c','6','0','663','664','49','0','1','0','662','100',''),
('4736','sql','1153','51','base','f','5','0','667','670','47','1','3','1','671','100',''),
('4737','sql','1153','52','b1','c','6','0','672','673','51','0','1','0','671','100',''),
('4738','sql','1153','53','jointure_gauche','f','2','0','693','707','36','2','3','4','708','69',''),
('4739','sql','1153','54','source','f','3','0','719','724','53','1','1','3','725','61',''),
('4740','sql','1153','55','nom_de_la_table','f','4','0','726','740','54','3','1','2','741','100',''),
('4741','sql','1153','56','tbl_acces','c','5','0','742','750','55','0','1','0','741','57',''),
('4742','sql','1153','57','alias','f','5','0','752','756','55','1','2','1','757','59',''),
('4743','sql','1153','58','T2','c','6','0','758','759','57','0','1','0','757','100',''),
('4744','sql','1153','59','base','f','5','0','762','765','55','1','3','1','766','100',''),
('4745','sql','1153','60','b1','c','6','0','767','768','59','0','1','0','766','100',''),
('4746','sql','1153','61','contrainte','f','3','0','783','792','53','1','2','3','793','100',''),
('4747','sql','1153','62','egal','f','4','0','794','797','61','2','1','2','798','100',''),
('4748','sql','1153','63','champ','f','5','0','799','803','62','2','1','1','804','66',''),
('4749','sql','1153','64','T2','c','6','0','805','806','63','0','1','0','804','65',''),
('4750','sql','1153','65','chi_id_acces','c','6','0','808','819','63','0','2','0','804','100',''),
('4751','sql','1153','66','champ','f','5','0','822','826','62','2','2','1','827','100',''),
('4752','sql','1153','67','T1','c','6','0','828','829','66','0','1','0','827','68',''),
('4753','sql','1153','68','chx_acces_autorisation','c','6','0','831','852','66','0','2','0','827','100',''),
('4754','sql','1153','69','jointure_gauche','f','2','0','872','886','36','2','4','4','887','100',''),
('4755','sql','1153','70','source','f','3','0','898','903','69','1','1','3','904','77',''),
('4756','sql','1153','71','nom_de_la_table','f','4','0','905','919','70','3','1','2','920','100',''),
('4757','sql','1153','72','tbl_sources','c','5','0','921','931','71','0','1','0','920','73',''),
('4758','sql','1153','73','alias','f','5','0','933','937','71','1','2','1','938','75',''),
('4759','sql','1153','74','T3','c','6','0','939','940','73','0','1','0','938','100',''),
('4760','sql','1153','75','base','f','5','0','943','946','71','1','3','1','947','100',''),
('4761','sql','1153','76','b1','c','6','0','948','949','75','0','1','0','947','100',''),
('4762','sql','1153','77','contrainte','f','3','0','964','973','69','1','2','3','974','100',''),
('4763','sql','1153','78','egal','f','4','0','975','978','77','2','1','2','979','100',''),
('4764','sql','1153','79','champ','f','5','0','980','984','78','2','1','1','985','82',''),
('4765','sql','1153','80','T3','c','6','0','986','987','79','0','1','0','985','81',''),
('4766','sql','1153','81','chi_id_source','c','6','0','989','1001','79','0','2','0','985','100',''),
('4767','sql','1153','82','champ','f','5','0','1004','1008','78','2','2','1','1009','100',''),
('4768','sql','1153','83','T1','c','6','0','1010','1011','82','0','1','0','1009','84',''),
('4769','sql','1153','84','chx_source_autorisation','c','6','0','1013','1035','82','0','2','0','1009','100',''),
('4770','sql','1153','85','conditions','f','1','0','1057','1066','1','1','3','4','1067','100',''),
('4771','sql','1153','86','et','f','2','0','1075','1076','85','3','1','3','1077','100',''),
('4772','sql','1153','87','#','f','3','0','1088','1088','86','0','1','0','1089','88',''),
('4773','sql','1153','88','egal','f','3','0','1102','1105','86','2','2','2','1106','93',''),
('4774','sql','1153','89','champ','f','4','0','1107','1111','88','2','1','1','1112','92',''),
('4775','sql','1153','90','T2','c','5','2','1114','1115','89','0','1','0','1112','91',''),
('4776','sql','1153','91','chi_id_acces','c','5','2','1119','1130','89','0','2','0','1112','100',''),
('4777','sql','1153','92',':T2_chi_id_acces','c','4','0','1134','1149','88','0','2','0','1112','100',''),
('4778','sql','1153','93','egal','f','3','0','1162','1165','86','2','3','2','1166','100',''),
('4779','sql','1153','94','champ','f','4','0','1167','1171','93','2','1','1','1172','97',''),
('4780','sql','1153','95','T1','c','5','0','1173','1174','94','0','1','0','1172','96',''),
('4781','sql','1153','96','chi_id_autorisation','c','5','0','1176','1194','94','0','2','0','1172','100',''),
('4782','sql','1153','97','champ','f','4','0','1197','1201','93','2','2','1','1202','100',''),
('4783','sql','1153','98','T0','c','5','0','1203','1204','97','0','1','0','1202','99',''),
('4784','sql','1153','99','chx_autorisation_menu','c','5','0','1206','1226','97','0','2','0','1202','100',''),
('4785','sql','1152','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4786','sql','1152','1','sélectionner','f','0','0','0','11','0','4','1','6','12','65',''),
('4787','sql','1152','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('4788','sql','1152','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('4789','sql','1152','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('4790','sql','1152','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','65',''),
('4791','sql','1152','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('4792','sql','1152','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('4793','sql','1152','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','65',''),
('4794','sql','1152','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('4795','sql','1152','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('4796','sql','1152','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','65',''),
('4797','sql','1152','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('4798','sql','1152','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('4799','sql','1152','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','65',''),
('4800','sql','1152','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('4801','sql','1152','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('4802','sql','1152','17','chp_nom_source','c','3','2','228','241','15','0','2','0','221','65',''),
('4803','sql','1152','18','champ','f','2','0','252','256','2','2','6','1','257','21',''),
('4804','sql','1152','19','T1','c','3','2','259','260','18','0','1','0','257','20',''),
('4805','sql','1152','20','cht_condition_rev_source','c','3','2','264','287','18','0','2','0','257','65',''),
('4806','sql','1152','21','champ','f','2','0','298','302','2','2','7','1','303','24',''),
('4807','sql','1152','22','T1','c','3','2','305','306','21','0','1','0','303','23',''),
('4808','sql','1152','23','cht_condition_js_source','c','3','2','310','332','21','0','2','0','303','65',''),
('4809','sql','1152','24','champ','f','2','0','343','347','2','2','8','1','348','65',''),
('4810','sql','1152','25','T1','c','3','2','350','351','24','0','1','0','348','26',''),
('4811','sql','1152','26','cht_notification_ko_source','c','3','2','355','380','24','0','2','0','348','65',''),
('4812','sql','1152','27','provenance','f','1','0','393','402','1','2','2','5','403','52',''),
('4813','sql','1152','28','table_reference','f','2','0','411','425','27','1','1','4','426','36',''),
('4814','sql','1152','29','source','f','3','0','437','442','28','1','1','3','443','65',''),
('4815','sql','1152','30','nom_de_la_table','f','4','0','444','458','29','3','1','2','459','65',''),
('4816','sql','1152','31','tbl_autorisations','c','5','0','460','476','30','0','1','0','459','32',''),
('4817','sql','1152','32','alias','f','5','0','478','482','30','1','2','1','483','34',''),
('4818','sql','1152','33','T0','c','6','0','484','485','32','0','1','0','483','65',''),
('4819','sql','1152','34','base','f','5','0','488','491','30','1','3','1','492','65',''),
('4820','sql','1152','35','b1','c','6','0','493','494','34','0','1','0','492','65',''),
('4821','sql','1152','36','jointure_gauche','f','2','0','514','528','27','2','2','4','529','65',''),
('4822','sql','1152','37','source','f','3','0','540','545','36','1','1','3','546','44',''),
('4823','sql','1152','38','nom_de_la_table','f','4','0','547','561','37','3','1','2','562','65',''),
('4824','sql','1152','39','tbl_sources','c','5','0','563','573','38','0','1','0','562','40',''),
('4825','sql','1152','40','alias','f','5','0','575','579','38','1','2','1','580','42',''),
('4826','sql','1152','41','T1','c','6','0','581','582','40','0','1','0','580','65',''),
('4827','sql','1152','42','base','f','5','0','585','588','38','1','3','1','589','65',''),
('4828','sql','1152','43','b1','c','6','0','590','591','42','0','1','0','589','65',''),
('4829','sql','1152','44','contrainte','f','3','0','606','615','36','1','2','3','616','65',''),
('4830','sql','1152','45','egal','f','4','0','617','620','44','2','1','2','621','65',''),
('4831','sql','1152','46','champ','f','5','0','622','626','45','2','1','1','627','49',''),
('4832','sql','1152','47','T1','c','6','0','628','629','46','0','1','0','627','48',''),
('4833','sql','1152','48','chi_id_source','c','6','0','631','643','46','0','2','0','627','65',''),
('4834','sql','1152','49','champ','f','5','0','646','650','45','2','2','1','651','65',''),
('4835','sql','1152','50','T0','c','6','0','652','653','49','0','1','0','651','51',''),
('4836','sql','1152','51','chx_source_autorisation','c','6','0','655','677','49','0','2','0','651','65',''),
('4837','sql','1152','52','conditions','f','1','0','699','708','1','1','3','3','709','58',''),
('4838','sql','1152','53','supegal','f','2','0','710','716','52','2','1','2','717','65',''),
('4839','sql','1152','54','champ','f','3','0','718','722','53','2','1','1','723','57',''),
('4840','sql','1152','55','T0','c','4','2','725','726','54','0','1','0','723','56',''),
('4841','sql','1152','56','chx_acces_autorisation','c','4','2','730','751','54','0','2','0','723','65',''),
('4842','sql','1152','57','1','c','3','0','755','755','53','0','2','0','723','65',''),
('4843','sql','1152','58','complements','f','1','0','763','773','1','1','4','4','774','65',''),
('4844','sql','1152','59','trier_par','f','2','0','782','790','58','1','1','3','791','65',''),
('4845','sql','1152','60','','f','3','0','782','790','59','2','1','2','792','65',''),
('4846','sql','1152','61','champ','f','4','0','793','797','60','2','1','1','798','64',''),
('4847','sql','1152','62','T0','c','5','2','800','801','61','0','1','0','798','63',''),
('4848','sql','1152','63','chx_acces_autorisation','c','5','2','805','826','61','0','2','0','798','65',''),
('4849','sql','1152','64','croissant','f','4','0','830','838','60','0','2','0','839','65',''),
('4850','sql','1151','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4851','sql','1151','1','sélectionner','f','0','0','0','11','0','4','1','6','12','23',''),
('4852','sql','1151','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('4853','sql','1151','3','1','c','2','0','35','35','2','0','1','0','34','23',''),
('4854','sql','1151','4','valeurs','f','1','0','42','48','1','1','2','2','49','8',''),
('4855','sql','1151','5','champ','f','2','0','50','54','4','2','1','1','55','23',''),
('4856','sql','1151','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('4857','sql','1151','7','chp_nom_source','c','3','2','62','75','5','0','2','0','55','23',''),
('4858','sql','1151','8','provenance','f','1','0','84','93','1','1','3','5','94','17',''),
('4859','sql','1151','9','table_reference','f','2','0','102','116','8','1','1','4','117','23',''),
('4860','sql','1151','10','source','f','3','0','128','133','9','1','1','3','134','23',''),
('4861','sql','1151','11','nom_de_la_table','f','4','0','135','149','10','3','1','2','150','23',''),
('4862','sql','1151','12','tbl_sources','c','5','0','151','161','11','0','1','0','150','13',''),
('4863','sql','1151','13','alias','f','5','0','163','167','11','1','2','1','168','15',''),
('4864','sql','1151','14','T0','c','6','0','169','170','13','0','1','0','168','23',''),
('4865','sql','1151','15','base','f','5','0','173','176','11','1','3','1','177','23',''),
('4866','sql','1151','16','b1','c','6','0','178','179','15','0','1','0','177','23',''),
('4867','sql','1151','17','conditions','f','1','0','201','210','1','1','4','3','211','23',''),
('4868','sql','1151','18','egal','f','2','0','212','215','17','2','1','2','216','23',''),
('4869','sql','1151','19','champ','f','3','0','217','221','18','2','1','1','222','22',''),
('4870','sql','1151','20','T0','c','4','2','224','225','19','0','1','0','222','21',''),
('4871','sql','1151','21','che_autorisation_globale_source','c','4','2','229','259','19','0','2','0','222','23',''),
('4872','sql','1151','22','1','c','3','0','263','263','18','0','2','0','222','23',''),
('4873','sql','1150','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4874','sql','1150','1','modifier','f','0','0','0','7','0','4','1','6','8','21',''),
('4875','sql','1150','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('4876','sql','1150','3','1','c','2','0','31','31','2','0','1','0','30','21',''),
('4877','sql','1150','4','valeurs','f','1','0','38','44','1','1','2','3','45','9',''),
('4878','sql','1150','5','affecte','f','2','0','46','52','4','2','1','2','53','21',''),
('4879','sql','1150','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('4880','sql','1150','7','chp_mot_de_passe_utilisateur','c','4','2','61','88','6','0','1','0','59','21',''),
('4881','sql','1150','8',':n_chp_mot_de_passe_utilisateur','c','3','0','92','122','5','0','2','0','59','21',''),
('4882','sql','1150','9','provenance','f','1','0','130','139','1','1','3','5','140','16',''),
('4883','sql','1150','10','table_reference','f','2','0','148','162','9','1','1','4','163','21',''),
('4884','sql','1150','11','source','f','3','0','174','179','10','1','1','3','180','21',''),
('4885','sql','1150','12','nom_de_la_table','f','4','0','181','195','11','2','1','2','196','21',''),
('4886','sql','1150','13','tbl_utilisateurs','c','5','0','197','212','12','0','1','0','196','14',''),
('4887','sql','1150','14','base','f','5','0','214','217','12','1','2','1','218','21',''),
('4888','sql','1150','15','b1','c','6','0','219','220','14','0','1','0','218','21',''),
('4889','sql','1150','16','conditions','f','1','0','242','251','1','1','4','3','252','21',''),
('4890','sql','1150','17','egal','f','2','0','253','256','16','2','1','2','257','21',''),
('4891','sql','1150','18','champ','f','3','0','258','262','17','1','1','1','263','20',''),
('4892','sql','1150','19','chi_id_utilisateur','c','4','2','265','282','18','0','1','0','263','21',''),
('4893','sql','1150','20',':c_chi_id_utilisateur','c','3','0','286','306','17','0','2','0','263','21',''),
('4894','sql','1149','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4895','sql','1149','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('4896','sql','1149','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('4897','sql','1149','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('4898','sql','1149','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('4899','sql','1149','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('4900','sql','1149','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('4901','sql','1149','7','tbl_menus','c','5','0','105','113','6','0','1','0','104','8',''),
('4902','sql','1149','8','base','f','5','0','115','118','6','1','2','1','119','15',''),
('4903','sql','1149','9','b1','c','6','0','120','121','8','0','1','0','119','15',''),
('4904','sql','1149','10','conditions','f','1','0','143','152','1','1','3','3','153','15',''),
('4905','sql','1149','11','egal','f','2','0','154','157','10','2','1','2','158','15',''),
('4906','sql','1149','12','champ','f','3','0','159','163','11','1','1','1','164','14',''),
('4907','sql','1149','13','chi_id_menu','c','4','2','166','176','12','0','1','0','164','15',''),
('4908','sql','1149','14',':chi_id_menu','c','3','0','180','191','11','0','2','0','164','15',''),
('4909','sql','1148','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4910','sql','1148','1','modifier','f','0','0','0','7','0','3','1','6','8','45',''),
('4911','sql','1148','2','valeurs','f','1','0','13','19','1','7','1','3','20','31',''),
('4912','sql','1148','3','affecte','f','2','0','28','34','2','2','1','2','35','7',''),
('4913','sql','1148','4','champ','f','3','0','36','40','3','1','1','1','41','6',''),
('4914','sql','1148','5','cht_libelle_menu','c','4','2','43','58','4','0','1','0','41','45',''),
('4915','sql','1148','6',':n_cht_libelle_menu','c','3','0','62','80','3','0','2','0','41','45',''),
('4916','sql','1148','7','affecte','f','2','0','90','96','2','2','2','2','97','11',''),
('4917','sql','1148','8','champ','f','3','0','98','102','7','1','1','1','103','10',''),
('4918','sql','1148','9','chp_titre_menu','c','4','2','105','118','8','0','1','0','103','45',''),
('4919','sql','1148','10',':n_chp_titre_menu','c','3','0','122','138','7','0','2','0','103','45',''),
('4920','sql','1148','11','affecte','f','2','0','148','154','2','2','3','2','155','15',''),
('4921','sql','1148','12','champ','f','3','0','156','160','11','1','1','1','161','14',''),
('4922','sql','1148','13','chx_autorisation_menu','c','4','2','163','183','12','0','1','0','161','45',''),
('4923','sql','1148','14',':n_chx_autorisation_menu','c','3','0','187','210','11','0','2','0','161','45',''),
('4924','sql','1148','15','affecte','f','2','0','220','226','2','2','4','2','227','19',''),
('4925','sql','1148','16','champ','f','3','0','228','232','15','1','1','1','233','18',''),
('4926','sql','1148','17','chp_methode_menu','c','4','2','235','250','16','0','1','0','233','45',''),
('4927','sql','1148','18',':n_chp_methode_menu','c','3','0','254','272','15','0','2','0','233','45',''),
('4928','sql','1148','19','affecte','f','2','0','282','288','2','2','5','2','289','23',''),
('4929','sql','1148','20','champ','f','3','0','290','294','19','1','1','1','295','22',''),
('4930','sql','1148','21','cht_condition_menu','c','4','2','297','314','20','0','1','0','295','45',''),
('4931','sql','1148','22',':n_cht_condition_menu','c','3','0','318','338','19','0','2','0','295','45',''),
('4932','sql','1148','23','affecte','f','2','0','348','354','2','2','6','2','355','27',''),
('4933','sql','1148','24','champ','f','3','0','356','360','23','1','1','1','361','26',''),
('4934','sql','1148','25','cht_condition_js_menu','c','4','2','363','383','24','0','1','0','361','45',''),
('4935','sql','1148','26',':n_cht_condition_js_menu','c','3','0','387','410','23','0','2','0','361','45',''),
('4936','sql','1148','27','affecte','f','2','0','420','426','2','2','7','2','427','45',''),
('4937','sql','1148','28','champ','f','3','0','428','432','27','1','1','1','433','30',''),
('4938','sql','1148','29','cht_initialisation_menu','c','4','2','435','457','28','0','1','0','433','45',''),
('4939','sql','1148','30',':n_cht_initialisation_menu','c','3','0','461','486','27','0','2','0','433','45',''),
('4940','sql','1148','31','provenance','f','1','0','498','507','1','1','2','5','508','40',''),
('4941','sql','1148','32','table_reference','f','2','0','516','530','31','1','1','4','531','45',''),
('4942','sql','1148','33','source','f','3','0','542','547','32','1','1','3','548','45',''),
('4943','sql','1148','34','nom_de_la_table','f','4','0','549','563','33','3','1','2','564','45',''),
('4944','sql','1148','35','tbl_menus','c','5','0','565','573','34','0','1','0','564','36',''),
('4945','sql','1148','36','alias','f','5','0','575','579','34','1','2','1','580','38',''),
('4946','sql','1148','37','T0','c','6','0','581','582','36','0','1','0','580','45',''),
('4947','sql','1148','38','base','f','5','0','585','588','34','1','3','1','589','45',''),
('4948','sql','1148','39','b1','c','6','0','590','591','38','0','1','0','589','45',''),
('4949','sql','1148','40','conditions','f','1','0','613','622','1','1','3','3','623','45',''),
('4950','sql','1148','41','egal','f','2','0','624','627','40','2','1','2','628','45',''),
('4951','sql','1148','42','champ','f','3','0','629','633','41','1','1','1','634','44',''),
('4952','sql','1148','43','chi_id_menu','c','4','2','636','646','42','0','1','0','634','45',''),
('4953','sql','1148','44',':c_chi_id_menu','c','3','0','650','663','41','0','2','0','634','45',''),
('4954','sql','1147','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4955','sql','1147','1','insérer','f','0','0','0','6','0','2','1','6','7','38',''),
('4956','sql','1147','2','valeurs','f','1','0','12','18','1','7','1','3','19','31',''),
('4957','sql','1147','3','affecte','f','2','0','27','33','2','2','1','2','34','7',''),
('4958','sql','1147','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('4959','sql','1147','5','chp_titre_menu','c','4','2','42','55','4','0','1','0','40','38',''),
('4960','sql','1147','6',':chp_titre_menu','c','3','0','59','73','3','0','2','0','40','38',''),
('4961','sql','1147','7','affecte','f','2','0','83','89','2','2','2','2','90','11',''),
('4962','sql','1147','8','champ','f','3','0','91','95','7','1','1','1','96','10',''),
('4963','sql','1147','9','chx_autorisation_menu','c','4','2','98','118','8','0','1','0','96','38',''),
('4964','sql','1147','10',':chx_autorisation_menu','c','3','0','122','143','7','0','2','0','96','38',''),
('4965','sql','1147','11','affecte','f','2','0','153','159','2','2','3','2','160','15',''),
('4966','sql','1147','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('4967','sql','1147','13','chp_methode_menu','c','4','2','168','183','12','0','1','0','166','38',''),
('4968','sql','1147','14',':chp_methode_menu','c','3','0','187','203','11','0','2','0','166','38',''),
('4969','sql','1147','15','affecte','f','2','0','213','219','2','2','4','2','220','19',''),
('4970','sql','1147','16','champ','f','3','0','221','225','15','1','1','1','226','18',''),
('4971','sql','1147','17','cht_libelle_menu','c','4','2','228','243','16','0','1','0','226','38',''),
('4972','sql','1147','18',':cht_libelle_menu','c','3','0','247','263','15','0','2','0','226','38',''),
('4973','sql','1147','19','affecte','f','2','0','273','279','2','2','5','2','280','23',''),
('4974','sql','1147','20','champ','f','3','0','281','285','19','1','1','1','286','22',''),
('4975','sql','1147','21','cht_condition_menu','c','4','2','288','305','20','0','1','0','286','38',''),
('4976','sql','1147','22',':cht_condition_menu','c','3','0','309','327','19','0','2','0','286','38',''),
('4977','sql','1147','23','affecte','f','2','0','337','343','2','2','6','2','344','27',''),
('4978','sql','1147','24','champ','f','3','0','345','349','23','1','1','1','350','26',''),
('4979','sql','1147','25','cht_condition_js_menu','c','4','2','352','372','24','0','1','0','350','38',''),
('4980','sql','1147','26',':cht_condition_js_menu','c','3','0','376','397','23','0','2','0','350','38',''),
('4981','sql','1147','27','affecte','f','2','0','407','413','2','2','7','2','414','38',''),
('4982','sql','1147','28','champ','f','3','0','415','419','27','1','1','1','420','30',''),
('4983','sql','1147','29','cht_initialisation_menu','c','4','2','422','444','28','0','1','0','420','38',''),
('4984','sql','1147','30',':cht_initialisation_menu','c','3','0','448','471','27','0','2','0','420','38',''),
('4985','sql','1147','31','provenance','f','1','0','483','492','1','1','2','5','493','38',''),
('4986','sql','1147','32','table_reference','f','2','0','501','515','31','1','1','4','516','38',''),
('4987','sql','1147','33','source','f','3','0','527','532','32','1','1','3','533','38',''),
('4988','sql','1147','34','nom_de_la_table','f','4','0','534','548','33','2','1','2','549','38',''),
('4989','sql','1147','35','tbl_menus','c','5','0','550','558','34','0','1','0','549','36',''),
('4990','sql','1147','36','base','f','5','0','560','563','34','1','2','1','564','38',''),
('4991','sql','1147','37','b1','c','6','0','565','566','36','0','1','0','564','38',''),
('4992','sql','1146','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('4993','sql','1146','1','sélectionner','f','0','0','0','11','0','3','1','6','12','105',''),
('4994','sql','1146','2','valeurs','f','1','0','17','23','1','13','1','2','24','42',''),
('4995','sql','1146','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('4996','sql','1146','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('4997','sql','1146','5','chi_id_menu','c','3','2','44','54','3','0','2','0','37','105',''),
('4998','sql','1146','6','champ','f','2','0','65','69','2','2','2','1','70','9',''),
('4999','sql','1146','7','T0','c','3','2','72','73','6','0','1','0','70','8',''),
('5000','sql','1146','8','chp_titre_menu','c','3','2','77','90','6','0','2','0','70','105',''),
('5001','sql','1146','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('5002','sql','1146','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('5003','sql','1146','11','chx_autorisation_menu','c','3','2','113','133','9','0','2','0','106','105',''),
('5004','sql','1146','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('5005','sql','1146','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('5006','sql','1146','14','chp_methode_menu','c','3','2','156','171','12','0','2','0','149','105',''),
('5007','sql','1146','15','champ','f','2','0','182','186','2','2','5','1','187','18',''),
('5008','sql','1146','16','T0','c','3','2','189','190','15','0','1','0','187','17',''),
('5009','sql','1146','17','cht_libelle_menu','c','3','2','194','209','15','0','2','0','187','105',''),
('5010','sql','1146','18','champ','f','2','0','220','224','2','2','6','1','225','21',''),
('5011','sql','1146','19','T0','c','3','2','227','228','18','0','1','0','225','20',''),
('5012','sql','1146','20','cht_initialisation_menu','c','3','2','232','254','18','0','2','0','225','105',''),
('5013','sql','1146','21','champ','f','2','0','265','269','2','2','7','1','270','24',''),
('5014','sql','1146','22','T0','c','3','2','272','273','21','0','1','0','270','23',''),
('5015','sql','1146','23','cht_condition_menu','c','3','2','277','294','21','0','2','0','270','105',''),
('5016','sql','1146','24','champ','f','2','0','305','309','2','2','8','1','310','27',''),
('5017','sql','1146','25','T1','c','3','2','312','313','24','0','1','0','310','26',''),
('5018','sql','1146','26','chx_acces_autorisation','c','3','2','317','338','24','0','2','0','310','105',''),
('5019','sql','1146','27','champ','f','2','0','349','353','2','2','9','1','354','30',''),
('5020','sql','1146','28','T1','c','3','2','356','357','27','0','1','0','354','29',''),
('5021','sql','1146','29','chx_source_autorisation','c','3','2','361','383','27','0','2','0','354','105',''),
('5022','sql','1146','30','champ','f','2','0','394','398','2','2','10','1','399','33',''),
('5023','sql','1146','31','T2','c','3','2','401','402','30','0','1','0','399','32',''),
('5024','sql','1146','32','chp_nom_acces','c','3','2','406','418','30','0','2','0','399','105',''),
('5025','sql','1146','33','champ','f','2','0','429','433','2','2','11','1','434','36',''),
('5026','sql','1146','34','T3','c','3','2','436','437','33','0','1','0','434','35',''),
('5027','sql','1146','35','chp_nom_source','c','3','2','441','454','33','0','2','0','434','105',''),
('5028','sql','1146','36','champ','f','2','0','465','469','2','2','12','1','470','39',''),
('5029','sql','1146','37','T3','c','3','2','472','473','36','0','1','0','470','38',''),
('5030','sql','1146','38','che_binaire_source','c','3','2','477','494','36','0','2','0','470','105',''),
('5031','sql','1146','39','champ','f','2','0','505','509','2','2','13','1','510','105',''),
('5032','sql','1146','40','T0','c','3','2','512','513','39','0','1','0','510','41',''),
('5033','sql','1146','41','cht_condition_js_menu','c','3','2','517','537','39','0','2','0','510','105',''),
('5034','sql','1146','42','provenance','f','1','0','551','560','1','4','2','5','561','99',''),
('5035','sql','1146','43','table_reference','f','2','0','569','583','42','1','1','4','584','51',''),
('5036','sql','1146','44','source','f','3','0','595','600','43','1','1','3','601','105',''),
('5037','sql','1146','45','nom_de_la_table','f','4','0','602','616','44','3','1','2','617','105',''),
('5038','sql','1146','46','tbl_menus','c','5','0','618','626','45','0','1','0','617','47',''),
('5039','sql','1146','47','alias','f','5','0','628','632','45','1','2','1','633','49',''),
('5040','sql','1146','48','T0','c','6','0','634','635','47','0','1','0','633','105',''),
('5041','sql','1146','49','base','f','5','0','638','641','45','1','3','1','642','105',''),
('5042','sql','1146','50','b1','c','6','0','643','644','49','0','1','0','642','105',''),
('5043','sql','1146','51','jointure_gauche','f','2','0','664','678','42','2','2','4','679','67',''),
('5044','sql','1146','52','source','f','3','0','690','695','51','1','1','3','696','59',''),
('5045','sql','1146','53','nom_de_la_table','f','4','0','697','711','52','3','1','2','712','105',''),
('5046','sql','1146','54','tbl_autorisations','c','5','0','713','729','53','0','1','0','712','55',''),
('5047','sql','1146','55','alias','f','5','0','731','735','53','1','2','1','736','57',''),
('5048','sql','1146','56','T1','c','6','0','737','738','55','0','1','0','736','105',''),
('5049','sql','1146','57','base','f','5','0','741','744','53','1','3','1','745','105',''),
('5050','sql','1146','58','b1','c','6','0','746','747','57','0','1','0','745','105',''),
('5051','sql','1146','59','contrainte','f','3','0','762','771','51','1','2','3','772','105',''),
('5052','sql','1146','60','egal','f','4','0','773','776','59','2','1','2','777','105',''),
('5053','sql','1146','61','champ','f','5','0','778','782','60','2','1','1','783','64',''),
('5054','sql','1146','62','T1','c','6','0','784','785','61','0','1','0','783','63',''),
('5055','sql','1146','63','chi_id_autorisation','c','6','0','787','805','61','0','2','0','783','105',''),
('5056','sql','1146','64','champ','f','5','0','808','812','60','2','2','1','813','105',''),
('5057','sql','1146','65','T0','c','6','0','814','815','64','0','1','0','813','66',''),
('5058','sql','1146','66','chx_autorisation_menu','c','6','0','817','837','64','0','2','0','813','105',''),
('5059','sql','1146','67','jointure_gauche','f','2','0','857','871','42','2','3','4','872','83',''),
('5060','sql','1146','68','source','f','3','0','883','888','67','1','1','3','889','75',''),
('5061','sql','1146','69','nom_de_la_table','f','4','0','890','904','68','3','1','2','905','105',''),
('5062','sql','1146','70','tbl_acces','c','5','0','906','914','69','0','1','0','905','71',''),
('5063','sql','1146','71','alias','f','5','0','916','920','69','1','2','1','921','73',''),
('5064','sql','1146','72','T2','c','6','0','922','923','71','0','1','0','921','105',''),
('5065','sql','1146','73','base','f','5','0','926','929','69','1','3','1','930','105',''),
('5066','sql','1146','74','b1','c','6','0','931','932','73','0','1','0','930','105',''),
('5067','sql','1146','75','contrainte','f','3','0','947','956','67','1','2','3','957','105',''),
('5068','sql','1146','76','egal','f','4','0','958','961','75','2','1','2','962','105',''),
('5069','sql','1146','77','champ','f','5','0','963','967','76','2','1','1','968','80',''),
('5070','sql','1146','78','T2','c','6','0','969','970','77','0','1','0','968','79',''),
('5071','sql','1146','79','chi_id_acces','c','6','0','972','983','77','0','2','0','968','105',''),
('5072','sql','1146','80','champ','f','5','0','986','990','76','2','2','1','991','105',''),
('5073','sql','1146','81','T1','c','6','0','992','993','80','0','1','0','991','82',''),
('5074','sql','1146','82','chx_acces_autorisation','c','6','0','995','1016','80','0','2','0','991','105',''),
('5075','sql','1146','83','jointure_gauche','f','2','0','1036','1050','42','2','4','4','1051','105',''),
('5076','sql','1146','84','source','f','3','0','1062','1067','83','1','1','3','1068','91',''),
('5077','sql','1146','85','nom_de_la_table','f','4','0','1069','1083','84','3','1','2','1084','105',''),
('5078','sql','1146','86','tbl_sources','c','5','0','1085','1095','85','0','1','0','1084','87',''),
('5079','sql','1146','87','alias','f','5','0','1097','1101','85','1','2','1','1102','89',''),
('5080','sql','1146','88','T3','c','6','0','1103','1104','87','0','1','0','1102','105',''),
('5081','sql','1146','89','base','f','5','0','1107','1110','85','1','3','1','1111','105',''),
('5082','sql','1146','90','b1','c','6','0','1112','1113','89','0','1','0','1111','105',''),
('5083','sql','1146','91','contrainte','f','3','0','1128','1137','83','1','2','3','1138','105',''),
('5084','sql','1146','92','egal','f','4','0','1139','1142','91','2','1','2','1143','105',''),
('5085','sql','1146','93','champ','f','5','0','1144','1148','92','2','1','1','1149','96',''),
('5086','sql','1146','94','T3','c','6','0','1150','1151','93','0','1','0','1149','95',''),
('5087','sql','1146','95','chi_id_source','c','6','0','1153','1165','93','0','2','0','1149','105',''),
('5088','sql','1146','96','champ','f','5','0','1168','1172','92','2','2','1','1173','105',''),
('5089','sql','1146','97','T1','c','6','0','1174','1175','96','0','1','0','1173','98',''),
('5090','sql','1146','98','chx_source_autorisation','c','6','0','1177','1199','96','0','2','0','1173','105',''),
('5091','sql','1146','99','conditions','f','1','0','1221','1230','1','1','3','3','1231','105',''),
('5092','sql','1146','100','egal','f','2','0','1232','1235','99','2','1','2','1236','105',''),
('5093','sql','1146','101','champ','f','3','0','1237','1241','100','2','1','1','1242','104',''),
('5094','sql','1146','102','T0','c','4','2','1244','1245','101','0','1','0','1242','103',''),
('5095','sql','1146','103','chi_id_menu','c','4','2','1249','1259','101','0','2','0','1242','105',''),
('5096','sql','1146','104',':T0_chi_id_menu','c','3','0','1263','1277','100','0','2','0','1242','105',''),
('5097','sql','1145','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5098','sql','1145','1','sélectionner','f','0','0','0','11','0','4','1','6','12','144',''),
('5099','sql','1145','2','valeurs','f','1','0','17','23','1','10','1','2','24','33',''),
('5100','sql','1145','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('5101','sql','1145','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('5102','sql','1145','5','chi_id_menu','c','3','2','44','54','3','0','2','0','37','144',''),
('5103','sql','1145','6','champ','f','2','0','65','69','2','2','2','1','70','9',''),
('5104','sql','1145','7','T0','c','3','2','72','73','6','0','1','0','70','8',''),
('5105','sql','1145','8','chp_titre_menu','c','3','2','77','90','6','0','2','0','70','144',''),
('5106','sql','1145','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('5107','sql','1145','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('5108','sql','1145','11','chx_autorisation_menu','c','3','2','113','133','9','0','2','0','106','144',''),
('5109','sql','1145','12','champ','f','2','0','144','148','2','2','4','1','149','15',''),
('5110','sql','1145','13','T0','c','3','2','151','152','12','0','1','0','149','14',''),
('5111','sql','1145','14','chp_methode_menu','c','3','2','156','171','12','0','2','0','149','144',''),
('5112','sql','1145','15','champ','f','2','0','182','186','2','2','5','1','187','18',''),
('5113','sql','1145','16','T0','c','3','2','189','190','15','0','1','0','187','17',''),
('5114','sql','1145','17','cht_libelle_menu','c','3','2','194','209','15','0','2','0','187','144',''),
('5115','sql','1145','18','champ','f','2','0','220','224','2','2','6','1','225','21',''),
('5116','sql','1145','19','T0','c','3','2','227','228','18','0','1','0','225','20',''),
('5117','sql','1145','20','cht_condition_menu','c','3','2','232','249','18','0','2','0','225','144',''),
('5118','sql','1145','21','champ','f','2','0','260','264','2','2','7','1','265','24',''),
('5119','sql','1145','22','T1','c','3','2','267','268','21','0','1','0','265','23',''),
('5120','sql','1145','23','chx_acces_autorisation','c','3','2','272','293','21','0','2','0','265','144',''),
('5121','sql','1145','24','champ','f','2','0','304','308','2','2','8','1','309','27',''),
('5122','sql','1145','25','T1','c','3','2','311','312','24','0','1','0','309','26',''),
('5123','sql','1145','26','chx_source_autorisation','c','3','2','316','338','24','0','2','0','309','144',''),
('5124','sql','1145','27','champ','f','2','0','349','353','2','2','9','1','354','30',''),
('5125','sql','1145','28','T2','c','3','2','356','357','27','0','1','0','354','29',''),
('5126','sql','1145','29','chp_nom_acces','c','3','2','361','373','27','0','2','0','354','144',''),
('5127','sql','1145','30','champ','f','2','0','384','388','2','2','10','1','389','144',''),
('5128','sql','1145','31','T3','c','3','2','391','392','30','0','1','0','389','32',''),
('5129','sql','1145','32','chp_nom_source','c','3','2','396','409','30','0','2','0','389','144',''),
('5130','sql','1145','33','provenance','f','1','0','422','431','1','4','2','5','432','90',''),
('5131','sql','1145','34','table_reference','f','2','0','440','454','33','1','1','4','455','42',''),
('5132','sql','1145','35','source','f','3','0','466','471','34','1','1','3','472','144',''),
('5133','sql','1145','36','nom_de_la_table','f','4','0','473','487','35','3','1','2','488','144',''),
('5134','sql','1145','37','tbl_menus','c','5','0','489','497','36','0','1','0','488','38',''),
('5135','sql','1145','38','alias','f','5','0','499','503','36','1','2','1','504','40',''),
('5136','sql','1145','39','T0','c','6','0','505','506','38','0','1','0','504','144',''),
('5137','sql','1145','40','base','f','5','0','509','512','36','1','3','1','513','144',''),
('5138','sql','1145','41','b1','c','6','0','514','515','40','0','1','0','513','144',''),
('5139','sql','1145','42','jointure_gauche','f','2','0','535','549','33','2','2','4','550','58',''),
('5140','sql','1145','43','source','f','3','0','561','566','42','1','1','3','567','50',''),
('5141','sql','1145','44','nom_de_la_table','f','4','0','568','582','43','3','1','2','583','144',''),
('5142','sql','1145','45','tbl_autorisations','c','5','0','584','600','44','0','1','0','583','46',''),
('5143','sql','1145','46','alias','f','5','0','602','606','44','1','2','1','607','48',''),
('5144','sql','1145','47','T1','c','6','0','608','609','46','0','1','0','607','144',''),
('5145','sql','1145','48','base','f','5','0','612','615','44','1','3','1','616','144',''),
('5146','sql','1145','49','b1','c','6','0','617','618','48','0','1','0','616','144',''),
('5147','sql','1145','50','contrainte','f','3','0','633','642','42','1','2','3','643','144',''),
('5148','sql','1145','51','egal','f','4','0','644','647','50','2','1','2','648','144',''),
('5149','sql','1145','52','champ','f','5','0','649','653','51','2','1','1','654','55',''),
('5150','sql','1145','53','T1','c','6','0','655','656','52','0','1','0','654','54',''),
('5151','sql','1145','54','chi_id_autorisation','c','6','0','658','676','52','0','2','0','654','144',''),
('5152','sql','1145','55','champ','f','5','0','679','683','51','2','2','1','684','144',''),
('5153','sql','1145','56','T0','c','6','0','685','686','55','0','1','0','684','57',''),
('5154','sql','1145','57','chx_autorisation_menu','c','6','0','688','708','55','0','2','0','684','144',''),
('5155','sql','1145','58','jointure_gauche','f','2','0','728','742','33','2','3','4','743','74',''),
('5156','sql','1145','59','source','f','3','0','754','759','58','1','1','3','760','66',''),
('5157','sql','1145','60','nom_de_la_table','f','4','0','761','775','59','3','1','2','776','144',''),
('5158','sql','1145','61','tbl_acces','c','5','0','777','785','60','0','1','0','776','62',''),
('5159','sql','1145','62','alias','f','5','0','787','791','60','1','2','1','792','64',''),
('5160','sql','1145','63','T2','c','6','0','793','794','62','0','1','0','792','144',''),
('5161','sql','1145','64','base','f','5','0','797','800','60','1','3','1','801','144',''),
('5162','sql','1145','65','b1','c','6','0','802','803','64','0','1','0','801','144',''),
('5163','sql','1145','66','contrainte','f','3','0','818','827','58','1','2','3','828','144',''),
('5164','sql','1145','67','egal','f','4','0','829','832','66','2','1','2','833','144',''),
('5165','sql','1145','68','champ','f','5','0','834','838','67','2','1','1','839','71',''),
('5166','sql','1145','69','T2','c','6','0','840','841','68','0','1','0','839','70',''),
('5167','sql','1145','70','chi_id_acces','c','6','0','843','854','68','0','2','0','839','144',''),
('5168','sql','1145','71','champ','f','5','0','857','861','67','2','2','1','862','144',''),
('5169','sql','1145','72','T1','c','6','0','863','864','71','0','1','0','862','73',''),
('5170','sql','1145','73','chx_acces_autorisation','c','6','0','866','887','71','0','2','0','862','144',''),
('5171','sql','1145','74','jointure_gauche','f','2','0','907','921','33','2','4','4','922','144',''),
('5172','sql','1145','75','source','f','3','0','933','938','74','1','1','3','939','82',''),
('5173','sql','1145','76','nom_de_la_table','f','4','0','940','954','75','3','1','2','955','144',''),
('5174','sql','1145','77','tbl_sources','c','5','0','956','966','76','0','1','0','955','78',''),
('5175','sql','1145','78','alias','f','5','0','968','972','76','1','2','1','973','80',''),
('5176','sql','1145','79','T3','c','6','0','974','975','78','0','1','0','973','144',''),
('5177','sql','1145','80','base','f','5','0','978','981','76','1','3','1','982','144',''),
('5178','sql','1145','81','b1','c','6','0','983','984','80','0','1','0','982','144',''),
('5179','sql','1145','82','contrainte','f','3','0','999','1008','74','1','2','3','1009','144',''),
('5180','sql','1145','83','egal','f','4','0','1010','1013','82','2','1','2','1014','144',''),
('5181','sql','1145','84','champ','f','5','0','1015','1019','83','2','1','1','1020','87',''),
('5182','sql','1145','85','T3','c','6','0','1021','1022','84','0','1','0','1020','86',''),
('5183','sql','1145','86','chi_id_source','c','6','0','1024','1036','84','0','2','0','1020','144',''),
('5184','sql','1145','87','champ','f','5','0','1039','1043','83','2','2','1','1044','144',''),
('5185','sql','1145','88','T1','c','6','0','1045','1046','87','0','1','0','1044','89',''),
('5186','sql','1145','89','chx_source_autorisation','c','6','0','1048','1070','87','0','2','0','1044','144',''),
('5187','sql','1145','90','conditions','f','1','0','1092','1101','1','1','3','4','1102','132',''),
('5188','sql','1145','91','et','f','2','0','1110','1111','90','8','1','3','1112','144',''),
('5189','sql','1145','92','comme','f','3','0','1123','1127','91','2','1','2','1128','97',''),
('5190','sql','1145','93','champ','f','4','0','1129','1133','92','2','1','1','1134','96',''),
('5191','sql','1145','94','T3','c','5','2','1136','1137','93','0','1','0','1134','95',''),
('5192','sql','1145','95','chp_nom_source','c','5','2','1141','1154','93','0','2','0','1134','144',''),
('5193','sql','1145','96',':T3_chp_nom_source','c','4','0','1158','1175','92','0','2','0','1134','144',''),
('5194','sql','1145','97','egal','f','3','0','1188','1191','91','2','2','2','1192','102',''),
('5195','sql','1145','98','champ','f','4','0','1193','1197','97','2','1','1','1198','101',''),
('5196','sql','1145','99','T1','c','5','2','1200','1201','98','0','1','0','1198','100',''),
('5197','sql','1145','100','chx_acces_autorisation','c','5','2','1205','1226','98','0','2','0','1198','144',''),
('5198','sql','1145','101',':T1_chx_acces_autorisation','c','4','0','1230','1255','97','0','2','0','1198','144',''),
('5199','sql','1145','102','egal','f','3','0','1268','1271','91','2','3','2','1272','107',''),
('5200','sql','1145','103','champ','f','4','0','1273','1277','102','2','1','1','1278','106',''),
('5201','sql','1145','104','T0','c','5','2','1280','1281','103','0','1','0','1278','105',''),
('5202','sql','1145','105','chi_id_menu','c','5','2','1285','1295','103','0','2','0','1278','144',''),
('5203','sql','1145','106',':T0_chi_id_menu','c','4','0','1299','1313','102','0','2','0','1278','144',''),
('5204','sql','1145','107','comme','f','3','0','1326','1330','91','2','4','2','1331','112',''),
('5205','sql','1145','108','champ','f','4','0','1332','1336','107','2','1','1','1337','111',''),
('5206','sql','1145','109','T0','c','5','2','1339','1340','108','0','1','0','1337','110',''),
('5207','sql','1145','110','cht_libelle_menu','c','5','2','1344','1359','108','0','2','0','1337','144',''),
('5208','sql','1145','111',':T0_cht_libelle_menu','c','4','0','1363','1382','107','0','2','0','1337','144',''),
('5209','sql','1145','112','comme','f','3','0','1395','1399','91','2','5','2','1400','117',''),
('5210','sql','1145','113','champ','f','4','0','1401','1405','112','2','1','1','1406','116',''),
('5211','sql','1145','114','T0','c','5','2','1408','1409','113','0','1','0','1406','115',''),
('5212','sql','1145','115','chp_titre_menu','c','5','2','1413','1426','113','0','2','0','1406','144',''),
('5213','sql','1145','116',':T0_chp_titre_menu','c','4','0','1430','1447','112','0','2','0','1406','144',''),
('5214','sql','1145','117','egal','f','3','0','1460','1463','91','2','6','2','1464','122',''),
('5215','sql','1145','118','champ','f','4','0','1465','1469','117','2','1','1','1470','121',''),
('5216','sql','1145','119','T0','c','5','2','1472','1473','118','0','1','0','1470','120',''),
('5217','sql','1145','120','chx_autorisation_menu','c','5','2','1477','1497','118','0','2','0','1470','144',''),
('5218','sql','1145','121',':T0_chx_autorisation_menu','c','4','0','1501','1525','117','0','2','0','1470','144',''),
('5219','sql','1145','122','comme','f','3','0','1538','1542','91','2','7','2','1543','127',''),
('5220','sql','1145','123','champ','f','4','0','1544','1548','122','2','1','1','1549','126',''),
('5221','sql','1145','124','T0','c','5','2','1551','1552','123','0','1','0','1549','125',''),
('5222','sql','1145','125','chp_methode_menu','c','5','2','1556','1571','123','0','2','0','1549','144',''),
('5223','sql','1145','126',':T0_chp_methode_menu','c','4','0','1575','1594','122','0','2','0','1549','144',''),
('5224','sql','1145','127','pas_dans','f','3','0','1607','1614','91','2','8','2','1615','144',''),
('5225','sql','1145','128','champ','f','4','0','1616','1620','127','2','1','1','1621','131',''),
('5226','sql','1145','129','T1','c','5','2','1623','1624','128','0','1','0','1621','130',''),
('5227','sql','1145','130','chx_acces_autorisation','c','5','2','1628','1649','128','0','2','0','1621','144',''),
('5228','sql','1145','131',':acces_pas_dans','c','4','0','1653','1667','127','0','2','0','1621','144',''),
('5229','sql','1145','132','complements','f','1','0','1687','1697','1','2','4','4','1698','144',''),
('5230','sql','1145','133','trier_par','f','2','0','1706','1714','132','1','1','3','1715','139',''),
('5231','sql','1145','134','','f','3','0','1706','1714','133','2','1','2','1716','144',''),
('5232','sql','1145','135','champ','f','4','0','1717','1721','134','2','1','1','1722','138',''),
('5233','sql','1145','136','T0','c','5','2','1724','1725','135','0','1','0','1722','137',''),
('5234','sql','1145','137','chi_id_menu','c','5','2','1729','1739','135','0','2','0','1722','144',''),
('5235','sql','1145','138','décroissant','f','4','0','1743','1753','134','0','2','0','1754','144',''),
('5236','sql','1145','139','limité_à','f','2','0','1766','1773','132','2','2','2','1774','144',''),
('5237','sql','1145','140','quantité','f','3','0','1775','1782','139','1','1','1','1783','142',''),
('5238','sql','1145','141',':quantitee','c','4','0','1784','1793','140','0','1','0','1783','144',''),
('5239','sql','1145','142','début','f','3','0','1796','1800','139','1','2','1','1801','144',''),
('5240','sql','1145','143',':debut','c','4','0','1802','1807','142','0','1','0','1801','144',''),
('5241','sql','1144','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5242','sql','1144','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('5243','sql','1144','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('5244','sql','1144','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('5245','sql','1144','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('5246','sql','1144','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('5247','sql','1144','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('5248','sql','1144','7','tbl_autorisations','c','5','0','105','121','6','0','1','0','104','8',''),
('5249','sql','1144','8','base','f','5','0','123','126','6','1','2','1','127','15',''),
('5250','sql','1144','9','b1','c','6','0','128','129','8','0','1','0','127','15',''),
('5251','sql','1144','10','conditions','f','1','0','151','160','1','1','3','3','161','15',''),
('5252','sql','1144','11','egal','f','2','0','162','165','10','2','1','2','166','15',''),
('5253','sql','1144','12','champ','f','3','0','167','171','11','1','1','1','172','14',''),
('5254','sql','1144','13','chi_id_autorisation','c','4','2','174','192','12','0','1','0','172','15',''),
('5255','sql','1144','14',':chi_id_autorisation','c','3','0','196','215','11','0','2','0','172','15',''),
('5256','sql','1143','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5257','sql','1143','1','modifier','f','0','0','0','7','0','3','1','6','8','29',''),
('5258','sql','1143','2','valeurs','f','1','0','13','19','1','3','1','3','20','15',''),
('5259','sql','1143','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('5260','sql','1143','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('5261','sql','1143','5','chx_acces_autorisation','c','4','2','36','57','4','0','1','0','34','29',''),
('5262','sql','1143','6',':n_chx_acces_autorisation','c','3','0','61','85','3','0','2','0','34','29',''),
('5263','sql','1143','7','affecte','f','2','0','88','94','2','2','2','2','95','11',''),
('5264','sql','1143','8','champ','f','3','0','96','100','7','1','1','1','101','10',''),
('5265','sql','1143','9','chx_source_autorisation','c','4','2','103','125','8','0','1','0','101','29',''),
('5266','sql','1143','10',':n_chx_source_autorisation','c','3','0','129','154','7','0','2','0','101','29',''),
('5267','sql','1143','11','affecte','f','2','0','157','163','2','2','3','2','164','29',''),
('5268','sql','1143','12','champ','f','3','0','165','169','11','1','1','1','170','14',''),
('5269','sql','1143','13','che_pour_sous_liste_autorisation','c','4','2','172','203','12','0','1','0','170','29',''),
('5270','sql','1143','14',':n_che_pour_sous_liste_autorisation','c','3','0','207','241','11','0','2','0','170','29',''),
('5271','sql','1143','15','provenance','f','1','0','249','258','1','1','2','5','259','24',''),
('5272','sql','1143','16','table_reference','f','2','0','267','281','15','1','1','4','282','29',''),
('5273','sql','1143','17','source','f','3','0','293','298','16','1','1','3','299','29',''),
('5274','sql','1143','18','nom_de_la_table','f','4','0','300','314','17','3','1','2','315','29',''),
('5275','sql','1143','19','tbl_autorisations','c','5','0','316','332','18','0','1','0','315','20',''),
('5276','sql','1143','20','alias','f','5','0','334','338','18','1','2','1','339','22',''),
('5277','sql','1143','21','T0','c','6','0','340','341','20','0','1','0','339','29',''),
('5278','sql','1143','22','base','f','5','0','344','347','18','1','3','1','348','29',''),
('5279','sql','1143','23','b1','c','6','0','349','350','22','0','1','0','348','29',''),
('5280','sql','1143','24','conditions','f','1','0','372','381','1','1','3','3','382','29',''),
('5281','sql','1143','25','egal','f','2','0','383','386','24','2','1','2','387','29',''),
('5282','sql','1143','26','champ','f','3','0','388','392','25','1','1','1','393','28',''),
('5283','sql','1143','27','chi_id_autorisation','c','4','2','395','413','26','0','1','0','393','29',''),
('5284','sql','1143','28',':c_chi_id_autorisation','c','3','0','417','438','25','0','2','0','393','29',''),
('5285','sql','1142','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5286','sql','1142','1','insérer','f','0','0','0','6','0','2','1','6','7','22',''),
('5287','sql','1142','2','valeurs','f','1','0','12','18','1','3','1','3','19','15',''),
('5288','sql','1142','3','affecte','f','2','0','20','26','2','2','1','2','27','7',''),
('5289','sql','1142','4','champ','f','3','0','28','32','3','1','1','1','33','6',''),
('5290','sql','1142','5','chx_acces_autorisation','c','4','2','35','56','4','0','1','0','33','22',''),
('5291','sql','1142','6',':chx_acces_autorisation','c','3','0','60','82','3','0','2','0','33','22',''),
('5292','sql','1142','7','affecte','f','2','0','85','91','2','2','2','2','92','11',''),
('5293','sql','1142','8','champ','f','3','0','93','97','7','1','1','1','98','10',''),
('5294','sql','1142','9','chx_source_autorisation','c','4','2','100','122','8','0','1','0','98','22',''),
('5295','sql','1142','10',':chx_source_autorisation','c','3','0','126','149','7','0','2','0','98','22',''),
('5296','sql','1142','11','affecte','f','2','0','152','158','2','2','3','2','159','22',''),
('5297','sql','1142','12','champ','f','3','0','160','164','11','1','1','1','165','14',''),
('5298','sql','1142','13','che_pour_sous_liste_autorisation','c','4','2','167','198','12','0','1','0','165','22',''),
('5299','sql','1142','14',':che_pour_sous_liste_autorisation','c','3','0','202','234','11','0','2','0','165','22',''),
('5300','sql','1142','15','provenance','f','1','0','242','251','1','1','2','5','252','22',''),
('5301','sql','1142','16','table_reference','f','2','0','260','274','15','1','1','4','275','22',''),
('5302','sql','1142','17','source','f','3','0','286','291','16','1','1','3','292','22',''),
('5303','sql','1142','18','nom_de_la_table','f','4','0','293','307','17','2','1','2','308','22',''),
('5304','sql','1142','19','tbl_autorisations','c','5','0','309','325','18','0','1','0','308','20',''),
('5305','sql','1142','20','base','f','5','0','327','330','18','1','2','1','331','22',''),
('5306','sql','1142','21','b1','c','6','0','332','333','20','0','1','0','331','22',''),
('5307','sql','1141','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5308','sql','1141','1','sélectionner','f','0','0','0','11','0','3','1','6','12','74',''),
('5309','sql','1141','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('5310','sql','1141','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('5311','sql','1141','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('5312','sql','1141','5','chi_id_autorisation','c','3','2','44','62','3','0','2','0','37','74',''),
('5313','sql','1141','6','champ','f','2','0','73','77','2','2','2','1','78','9',''),
('5314','sql','1141','7','T0','c','3','2','80','81','6','0','1','0','78','8',''),
('5315','sql','1141','8','chx_acces_autorisation','c','3','2','85','106','6','0','2','0','78','74',''),
('5316','sql','1141','9','champ','f','2','0','117','121','2','2','3','1','122','12',''),
('5317','sql','1141','10','T0','c','3','2','124','125','9','0','1','0','122','11',''),
('5318','sql','1141','11','chx_source_autorisation','c','3','2','129','151','9','0','2','0','122','74',''),
('5319','sql','1141','12','champ','f','2','0','162','166','2','2','4','1','167','15',''),
('5320','sql','1141','13','T0','c','3','2','169','170','12','0','1','0','167','14',''),
('5321','sql','1141','14','che_pour_sous_liste_autorisation','c','3','2','174','205','12','0','2','0','167','74',''),
('5322','sql','1141','15','champ','f','2','0','216','220','2','2','5','1','221','18',''),
('5323','sql','1141','16','T1','c','3','2','223','224','15','0','1','0','221','17',''),
('5324','sql','1141','17','chp_nom_acces','c','3','2','228','240','15','0','2','0','221','74',''),
('5325','sql','1141','18','champ','f','2','0','251','255','2','2','6','1','256','21',''),
('5326','sql','1141','19','T2','c','3','2','258','259','18','0','1','0','256','20',''),
('5327','sql','1141','20','chp_nom_source','c','3','2','263','276','18','0','2','0','256','74',''),
('5328','sql','1141','21','champ','f','2','0','287','291','2','2','7','1','292','24',''),
('5329','sql','1141','22','T2','c','3','2','294','295','21','0','1','0','292','23',''),
('5330','sql','1141','23','che_binaire_source','c','3','2','299','316','21','0','2','0','292','74',''),
('5331','sql','1141','24','champ','f','2','0','327','331','2','2','8','1','332','74',''),
('5332','sql','1141','25','T2','c','3','2','334','335','24','0','1','0','332','26',''),
('5333','sql','1141','26','chx_dossier_id_source','c','3','2','339','359','24','0','2','0','332','74',''),
('5334','sql','1141','27','provenance','f','1','0','372','381','1','3','2','5','382','68',''),
('5335','sql','1141','28','table_reference','f','2','0','390','404','27','1','1','4','405','36',''),
('5336','sql','1141','29','source','f','3','0','416','421','28','1','1','3','422','74',''),
('5337','sql','1141','30','nom_de_la_table','f','4','0','423','437','29','3','1','2','438','74',''),
('5338','sql','1141','31','tbl_autorisations','c','5','0','439','455','30','0','1','0','438','32',''),
('5339','sql','1141','32','alias','f','5','0','457','461','30','1','2','1','462','34',''),
('5340','sql','1141','33','T0','c','6','0','463','464','32','0','1','0','462','74',''),
('5341','sql','1141','34','base','f','5','0','467','470','30','1','3','1','471','74',''),
('5342','sql','1141','35','b1','c','6','0','472','473','34','0','1','0','471','74',''),
('5343','sql','1141','36','jointure_gauche','f','2','0','493','507','27','2','2','4','508','52',''),
('5344','sql','1141','37','source','f','3','0','519','524','36','1','1','3','525','44',''),
('5345','sql','1141','38','nom_de_la_table','f','4','0','526','540','37','3','1','2','541','74',''),
('5346','sql','1141','39','tbl_acces','c','5','0','542','550','38','0','1','0','541','40',''),
('5347','sql','1141','40','alias','f','5','0','552','556','38','1','2','1','557','42',''),
('5348','sql','1141','41','T1','c','6','0','558','559','40','0','1','0','557','74',''),
('5349','sql','1141','42','base','f','5','0','562','565','38','1','3','1','566','74',''),
('5350','sql','1141','43','b1','c','6','0','567','568','42','0','1','0','566','74',''),
('5351','sql','1141','44','contrainte','f','3','0','583','592','36','1','2','3','593','74',''),
('5352','sql','1141','45','egal','f','4','0','594','597','44','2','1','2','598','74',''),
('5353','sql','1141','46','champ','f','5','0','599','603','45','2','1','1','604','49',''),
('5354','sql','1141','47','T1','c','6','0','605','606','46','0','1','0','604','48',''),
('5355','sql','1141','48','chi_id_acces','c','6','0','608','619','46','0','2','0','604','74',''),
('5356','sql','1141','49','champ','f','5','0','622','626','45','2','2','1','627','74',''),
('5357','sql','1141','50','T0','c','6','0','628','629','49','0','1','0','627','51',''),
('5358','sql','1141','51','chx_acces_autorisation','c','6','0','631','652','49','0','2','0','627','74',''),
('5359','sql','1141','52','jointure_gauche','f','2','0','672','686','27','2','3','4','687','74',''),
('5360','sql','1141','53','source','f','3','0','698','703','52','1','1','3','704','60',''),
('5361','sql','1141','54','nom_de_la_table','f','4','0','705','719','53','3','1','2','720','74',''),
('5362','sql','1141','55','tbl_sources','c','5','0','721','731','54','0','1','0','720','56',''),
('5363','sql','1141','56','alias','f','5','0','733','737','54','1','2','1','738','58',''),
('5364','sql','1141','57','T2','c','6','0','739','740','56','0','1','0','738','74',''),
('5365','sql','1141','58','base','f','5','0','743','746','54','1','3','1','747','74',''),
('5366','sql','1141','59','b1','c','6','0','748','749','58','0','1','0','747','74',''),
('5367','sql','1141','60','contrainte','f','3','0','764','773','52','1','2','3','774','74',''),
('5368','sql','1141','61','egal','f','4','0','775','778','60','2','1','2','779','74',''),
('5369','sql','1141','62','champ','f','5','0','780','784','61','2','1','1','785','65',''),
('5370','sql','1141','63','T2','c','6','0','786','787','62','0','1','0','785','64',''),
('5371','sql','1141','64','chi_id_source','c','6','0','789','801','62','0','2','0','785','74',''),
('5372','sql','1141','65','champ','f','5','0','804','808','61','2','2','1','809','74',''),
('5373','sql','1141','66','T0','c','6','0','810','811','65','0','1','0','809','67',''),
('5374','sql','1141','67','chx_source_autorisation','c','6','0','813','835','65','0','2','0','809','74',''),
('5375','sql','1141','68','conditions','f','1','0','857','866','1','1','3','3','867','74',''),
('5376','sql','1141','69','egal','f','2','0','868','871','68','2','1','2','872','74',''),
('5377','sql','1141','70','champ','f','3','0','873','877','69','2','1','1','878','73',''),
('5378','sql','1141','71','T0','c','4','2','880','881','70','0','1','0','878','72',''),
('5379','sql','1141','72','chi_id_autorisation','c','4','2','885','903','70','0','2','0','878','74',''),
('5380','sql','1141','73',':T0_chi_id_autorisation','c','3','0','907','929','69','0','2','0','878','74',''),
('5381','sql','1140','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5382','sql','1140','1','sélectionner','f','0','0','0','11','0','4','1','6','12','126',''),
('5383','sql','1140','2','valeurs','f','1','0','17','23','1','6','1','2','24','21',''),
('5384','sql','1140','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('5385','sql','1140','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('5386','sql','1140','5','chx_acces_autorisation','c','3','2','44','65','3','0','2','0','37','126',''),
('5387','sql','1140','6','champ','f','2','0','76','80','2','2','2','1','81','9',''),
('5388','sql','1140','7','T0','c','3','2','83','84','6','0','1','0','81','8',''),
('5389','sql','1140','8','chx_source_autorisation','c','3','2','88','110','6','0','2','0','81','126',''),
('5390','sql','1140','9','champ','f','2','0','121','125','2','2','3','1','126','12',''),
('5391','sql','1140','10','T0','c','3','2','128','129','9','0','1','0','126','11',''),
('5392','sql','1140','11','che_pour_sous_liste_autorisation','c','3','2','133','164','9','0','2','0','126','126',''),
('5393','sql','1140','12','champ','f','2','0','175','179','2','2','4','1','180','15',''),
('5394','sql','1140','13','T1','c','3','2','182','183','12','0','1','0','180','14',''),
('5395','sql','1140','14','chp_nom_acces','c','3','2','187','199','12','0','2','0','180','126',''),
('5396','sql','1140','15','champ','f','2','0','210','214','2','2','5','1','215','18',''),
('5397','sql','1140','16','T2','c','3','2','217','218','15','0','1','0','215','17',''),
('5398','sql','1140','17','chp_nom_source','c','3','2','222','235','15','0','2','0','215','126',''),
('5399','sql','1140','18','champ','f','2','0','246','250','2','2','6','1','251','126',''),
('5400','sql','1140','19','T0','c','3','2','253','254','18','0','1','0','251','20',''),
('5401','sql','1140','20','chi_id_autorisation','c','3','2','258','276','18','0','2','0','251','126',''),
('5402','sql','1140','21','provenance','f','1','0','289','298','1','3','2','5','299','62',''),
('5403','sql','1140','22','table_reference','f','2','0','307','321','21','1','1','4','322','30',''),
('5404','sql','1140','23','source','f','3','0','333','338','22','1','1','3','339','126',''),
('5405','sql','1140','24','nom_de_la_table','f','4','0','340','354','23','3','1','2','355','126',''),
('5406','sql','1140','25','tbl_autorisations','c','5','0','356','372','24','0','1','0','355','26',''),
('5407','sql','1140','26','alias','f','5','0','374','378','24','1','2','1','379','28',''),
('5408','sql','1140','27','T0','c','6','0','380','381','26','0','1','0','379','126',''),
('5409','sql','1140','28','base','f','5','0','384','387','24','1','3','1','388','126',''),
('5410','sql','1140','29','b1','c','6','0','389','390','28','0','1','0','388','126',''),
('5411','sql','1140','30','jointure_gauche','f','2','0','410','424','21','2','2','4','425','46',''),
('5412','sql','1140','31','source','f','3','0','436','441','30','1','1','3','442','38',''),
('5413','sql','1140','32','nom_de_la_table','f','4','0','443','457','31','3','1','2','458','126',''),
('5414','sql','1140','33','tbl_acces','c','5','0','459','467','32','0','1','0','458','34',''),
('5415','sql','1140','34','alias','f','5','0','469','473','32','1','2','1','474','36',''),
('5416','sql','1140','35','T1','c','6','0','475','476','34','0','1','0','474','126',''),
('5417','sql','1140','36','base','f','5','0','479','482','32','1','3','1','483','126',''),
('5418','sql','1140','37','b1','c','6','0','484','485','36','0','1','0','483','126',''),
('5419','sql','1140','38','contrainte','f','3','0','500','509','30','1','2','3','510','126',''),
('5420','sql','1140','39','egal','f','4','0','511','514','38','2','1','2','515','126',''),
('5421','sql','1140','40','champ','f','5','0','516','520','39','2','1','1','521','43',''),
('5422','sql','1140','41','T1','c','6','0','522','523','40','0','1','0','521','42',''),
('5423','sql','1140','42','chi_id_acces','c','6','0','525','536','40','0','2','0','521','126',''),
('5424','sql','1140','43','champ','f','5','0','539','543','39','2','2','1','544','126',''),
('5425','sql','1140','44','T0','c','6','0','545','546','43','0','1','0','544','45',''),
('5426','sql','1140','45','chx_acces_autorisation','c','6','0','548','569','43','0','2','0','544','126',''),
('5427','sql','1140','46','jointure_gauche','f','2','0','589','603','21','2','3','4','604','126',''),
('5428','sql','1140','47','source','f','3','0','615','620','46','1','1','3','621','54',''),
('5429','sql','1140','48','nom_de_la_table','f','4','0','622','636','47','3','1','2','637','126',''),
('5430','sql','1140','49','tbl_sources','c','5','0','638','648','48','0','1','0','637','50',''),
('5431','sql','1140','50','alias','f','5','0','650','654','48','1','2','1','655','52',''),
('5432','sql','1140','51','T2','c','6','0','656','657','50','0','1','0','655','126',''),
('5433','sql','1140','52','base','f','5','0','660','663','48','1','3','1','664','126',''),
('5434','sql','1140','53','b1','c','6','0','665','666','52','0','1','0','664','126',''),
('5435','sql','1140','54','contrainte','f','3','0','681','690','46','1','2','3','691','126',''),
('5436','sql','1140','55','egal','f','4','0','692','695','54','2','1','2','696','126',''),
('5437','sql','1140','56','champ','f','5','0','697','701','55','2','1','1','702','59',''),
('5438','sql','1140','57','T2','c','6','0','703','704','56','0','1','0','702','58',''),
('5439','sql','1140','58','chi_id_source','c','6','0','706','718','56','0','2','0','702','126',''),
('5440','sql','1140','59','champ','f','5','0','721','725','55','2','2','1','726','126',''),
('5441','sql','1140','60','T0','c','6','0','727','728','59','0','1','0','726','61',''),
('5442','sql','1140','61','chx_source_autorisation','c','6','0','730','752','59','0','2','0','726','126',''),
('5443','sql','1140','62','conditions','f','1','0','774','783','1','1','3','4','784','99',''),
('5444','sql','1140','63','et','f','2','0','792','793','62','7','1','3','794','126',''),
('5445','sql','1140','64','comme','f','3','0','805','809','63','2','1','2','810','69',''),
('5446','sql','1140','65','champ','f','4','0','811','815','64','2','1','1','816','68',''),
('5447','sql','1140','66','T2','c','5','2','818','819','65','0','1','0','816','67',''),
('5448','sql','1140','67','chp_nom_source','c','5','2','823','836','65','0','2','0','816','126',''),
('5449','sql','1140','68',':T2_chp_nom_source','c','4','0','840','857','64','0','2','0','816','126',''),
('5450','sql','1140','69','egal','f','3','0','870','873','63','2','2','2','874','74',''),
('5451','sql','1140','70','champ','f','4','0','875','879','69','2','1','1','880','73',''),
('5452','sql','1140','71','T0','c','5','2','882','883','70','0','1','0','880','72',''),
('5453','sql','1140','72','chx_acces_autorisation','c','5','2','887','908','70','0','2','0','880','126',''),
('5454','sql','1140','73',':T0_chx_acces_autorisation','c','4','0','912','937','69','0','2','0','880','126',''),
('5455','sql','1140','74','egal','f','3','0','950','953','63','2','3','2','954','79',''),
('5456','sql','1140','75','champ','f','4','0','955','959','74','2','1','1','960','78',''),
('5457','sql','1140','76','T0','c','5','2','962','963','75','0','1','0','960','77',''),
('5458','sql','1140','77','chx_source_autorisation','c','5','2','967','989','75','0','2','0','960','126',''),
('5459','sql','1140','78',':T0_chx_source_autorisation','c','4','0','993','1019','74','0','2','0','960','126',''),
('5460','sql','1140','79','comme','f','3','0','1032','1036','63','2','4','2','1037','84',''),
('5461','sql','1140','80','champ','f','4','0','1038','1042','79','2','1','1','1043','83',''),
('5462','sql','1140','81','T1','c','5','2','1045','1046','80','0','1','0','1043','82',''),
('5463','sql','1140','82','chp_nom_acces','c','5','2','1050','1062','80','0','2','0','1043','126',''),
('5464','sql','1140','83',':T1_chp_nom_acces','c','4','0','1066','1082','79','0','2','0','1043','126',''),
('5465','sql','1140','84','egal','f','3','0','1095','1098','63','2','5','2','1099','89',''),
('5466','sql','1140','85','champ','f','4','0','1100','1104','84','2','1','1','1105','88',''),
('5467','sql','1140','86','T0','c','5','2','1107','1108','85','0','1','0','1105','87',''),
('5468','sql','1140','87','che_pour_sous_liste_autorisation','c','5','2','1112','1143','85','0','2','0','1105','126',''),
('5469','sql','1140','88',':T0_che_pour_sous_liste_autorisation','c','4','0','1147','1182','84','0','2','0','1105','126',''),
('5470','sql','1140','89','pas_dans','f','3','0','1195','1202','63','2','6','2','1203','94',''),
('5471','sql','1140','90','champ','f','4','0','1204','1208','89','2','1','1','1209','93',''),
('5472','sql','1140','91','T0','c','5','2','1211','1212','90','0','1','0','1209','92',''),
('5473','sql','1140','92','chx_acces_autorisation','c','5','2','1216','1237','90','0','2','0','1209','126',''),
('5474','sql','1140','93',':acces_pas_dans','c','4','0','1241','1255','89','0','2','0','1209','126',''),
('5475','sql','1140','94','egal','f','3','0','1268','1271','63','2','7','2','1272','126',''),
('5476','sql','1140','95','champ','f','4','0','1273','1277','94','2','1','1','1278','98',''),
('5477','sql','1140','96','T0','c','5','2','1280','1281','95','0','1','0','1278','97',''),
('5478','sql','1140','97','chi_id_autorisation','c','5','2','1285','1303','95','0','2','0','1278','126',''),
('5479','sql','1140','98',':T0_chi_id_autorisation','c','4','0','1307','1329','94','0','2','0','1278','126',''),
('5480','sql','1140','99','complements','f','1','0','1349','1359','1','2','4','4','1360','126',''),
('5481','sql','1140','100','trier_par','f','2','0','1368','1376','99','4','1','3','1377','121',''),
('5482','sql','1140','101','','f','3','0','1368','1376','100','2','1','2','1378','106',''),
('5483','sql','1140','102','champ','f','4','0','1379','1383','101','2','1','1','1384','105',''),
('5484','sql','1140','103','T0','c','5','2','1386','1387','102','0','1','0','1384','104',''),
('5485','sql','1140','104','chx_acces_autorisation','c','5','2','1391','1412','102','0','2','0','1384','126',''),
('5486','sql','1140','105','décroissant','f','4','0','1416','1426','101','0','2','0','1427','126',''),
('5487','sql','1140','106','','f','3','0','1416','1426','100','2','2','2','1431','111',''),
('5488','sql','1140','107','champ','f','4','0','1432','1436','106','2','1','1','1437','110',''),
('5489','sql','1140','108','T2','c','5','2','1439','1440','107','0','1','0','1437','109',''),
('5490','sql','1140','109','chp_nom_source','c','5','2','1444','1457','107','0','2','0','1437','126',''),
('5491','sql','1140','110','croissant','f','4','0','1461','1469','106','0','2','0','1470','126',''),
('5492','sql','1140','111','','f','3','0','1461','1469','100','2','3','2','1474','116',''),
('5493','sql','1140','112','champ','f','4','0','1475','1479','111','2','1','1','1480','115',''),
('5494','sql','1140','113','T0','c','5','2','1482','1483','112','0','1','0','1480','114',''),
('5495','sql','1140','114','chi_id_autorisation','c','5','2','1487','1505','112','0','2','0','1480','126',''),
('5496','sql','1140','115','décroissant','f','4','0','1509','1519','111','0','2','0','1520','126',''),
('5497','sql','1140','116','','f','3','0','1509','1519','100','2','4','2','1524','126',''),
('5498','sql','1140','117','champ','f','4','0','1525','1529','116','2','1','1','1530','120',''),
('5499','sql','1140','118','T2','c','5','2','1532','1533','117','0','1','0','1530','119',''),
('5500','sql','1140','119','chp_nom_source','c','5','2','1537','1550','117','0','2','0','1530','126',''),
('5501','sql','1140','120','croissant','f','4','0','1554','1562','116','0','2','0','1563','126',''),
('5502','sql','1140','121','limité_à','f','2','0','1575','1582','99','2','2','2','1583','126',''),
('5503','sql','1140','122','quantité','f','3','0','1584','1591','121','1','1','1','1592','124',''),
('5504','sql','1140','123',':quantitee','c','4','0','1593','1602','122','0','1','0','1592','126',''),
('5505','sql','1140','124','début','f','3','0','1605','1609','121','1','2','1','1610','126',''),
('5506','sql','1140','125',':debut','c','4','0','1611','1616','124','0','1','0','1610','126',''),
('5507','sql','1139','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5508','sql','1139','1','supprimer','f','0','0','0','8','0','3','1','6','9','16',''),
('5509','sql','1139','2','base_de_reference','f','1','0','14','30','1','1','1','1','31','4',''),
('5510','sql','1139','3','1','c','2','0','32','32','2','0','1','0','31','16',''),
('5511','sql','1139','4','provenance','f','1','0','39','48','1','1','2','5','49','11',''),
('5512','sql','1139','5','table_reference','f','2','0','57','71','4','1','1','4','72','16',''),
('5513','sql','1139','6','source','f','3','0','83','88','5','1','1','3','89','16',''),
('5514','sql','1139','7','nom_de_la_table','f','4','0','90','104','6','2','1','2','105','16',''),
('5515','sql','1139','8','tbl_acces','c','5','0','106','114','7','0','1','0','105','9',''),
('5516','sql','1139','9','base','f','5','0','116','119','7','1','2','1','120','16',''),
('5517','sql','1139','10','b1','c','6','0','121','122','9','0','1','0','120','16',''),
('5518','sql','1139','11','conditions','f','1','0','144','153','1','1','3','3','154','16',''),
('5519','sql','1139','12','egal','f','2','0','155','158','11','2','1','2','159','16',''),
('5520','sql','1139','13','champ','f','3','0','160','164','12','1','1','1','165','15',''),
('5521','sql','1139','14','chi_id_acces','c','4','2','167','178','13','0','1','0','165','16',''),
('5522','sql','1139','15',':chi_id_acces','c','3','0','182','194','12','0','2','0','165','16',''),
('5523','sql','1138','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5524','sql','1138','1','modifier','f','0','0','0','7','0','3','1','6','8','33',''),
('5525','sql','1138','2','valeurs','f','1','0','13','19','1','4','1','3','20','19',''),
('5526','sql','1138','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('5527','sql','1138','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('5528','sql','1138','5','chp_nom_acces','c','4','2','36','48','4','0','1','0','34','33',''),
('5529','sql','1138','6',':n_chp_nom_acces','c','3','0','52','67','3','0','2','0','34','33',''),
('5530','sql','1138','7','affecte','f','2','0','70','76','2','2','2','2','77','11',''),
('5531','sql','1138','8','champ','f','3','0','78','82','7','1','1','1','83','10',''),
('5532','sql','1138','9','che_actif_acces','c','4','2','85','99','8','0','1','0','83','33',''),
('5533','sql','1138','10',':n_che_actif_acces','c','3','0','103','120','7','0','2','0','83','33',''),
('5534','sql','1138','11','affecte','f','2','0','123','129','2','2','3','2','130','15',''),
('5535','sql','1138','12','champ','f','3','0','131','135','11','1','1','1','136','14',''),
('5536','sql','1138','13','chx_groupe_acces','c','4','2','138','153','12','0','1','0','136','33',''),
('5537','sql','1138','14',':n_chx_groupe_acces','c','3','0','157','175','11','0','2','0','136','33',''),
('5538','sql','1138','15','affecte','f','2','0','178','184','2','2','4','2','185','33',''),
('5539','sql','1138','16','champ','f','3','0','186','190','15','1','1','1','191','18',''),
('5540','sql','1138','17','chx_metier_acces','c','4','2','193','208','16','0','1','0','191','33',''),
('5541','sql','1138','18',':n_chx_metier_acces','c','3','0','212','230','15','0','2','0','191','33',''),
('5542','sql','1138','19','provenance','f','1','0','238','247','1','1','2','5','248','28',''),
('5543','sql','1138','20','table_reference','f','2','0','256','270','19','1','1','4','271','33',''),
('5544','sql','1138','21','source','f','3','0','282','287','20','1','1','3','288','33',''),
('5545','sql','1138','22','nom_de_la_table','f','4','0','289','303','21','3','1','2','304','33',''),
('5546','sql','1138','23','tbl_acces','c','5','0','305','313','22','0','1','0','304','24',''),
('5547','sql','1138','24','alias','f','5','0','315','319','22','1','2','1','320','26',''),
('5548','sql','1138','25','T0','c','6','0','321','322','24','0','1','0','320','33',''),
('5549','sql','1138','26','base','f','5','0','325','328','22','1','3','1','329','33',''),
('5550','sql','1138','27','b1','c','6','0','330','331','26','0','1','0','329','33',''),
('5551','sql','1138','28','conditions','f','1','0','353','362','1','1','3','3','363','33',''),
('5552','sql','1138','29','egal','f','2','0','364','367','28','2','1','2','368','33',''),
('5553','sql','1138','30','champ','f','3','0','369','373','29','1','1','1','374','32',''),
('5554','sql','1138','31','chi_id_acces','c','4','2','376','387','30','0','1','0','374','33',''),
('5555','sql','1138','32',':c_chi_id_acces','c','3','0','391','405','29','0','2','0','374','33',''),
('5556','sql','1137','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5557','sql','1137','1','insérer','f','0','0','0','6','0','3','1','6','7','23',''),
('5558','sql','1137','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('5559','sql','1137','3','valeurs','f','1','0','36','42','1','3','2','3','43','16',''),
('5560','sql','1137','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('5561','sql','1137','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('5562','sql','1137','6','chp_nom_acces','c','4','2','59','71','5','0','1','0','57','23',''),
('5563','sql','1137','7',':chp_nom_acces','c','3','0','75','88','4','0','2','0','57','23',''),
('5564','sql','1137','8','affecte','f','2','0','91','97','3','2','2','2','98','12',''),
('5565','sql','1137','9','champ','f','3','0','99','103','8','1','1','1','104','11',''),
('5566','sql','1137','10','chx_groupe_acces','c','4','2','106','121','9','0','1','0','104','23',''),
('5567','sql','1137','11',':chx_groupe_acces','c','3','0','125','141','8','0','2','0','104','23',''),
('5568','sql','1137','12','affecte','f','2','0','144','150','3','2','3','2','151','23',''),
('5569','sql','1137','13','champ','f','3','0','152','156','12','1','1','1','157','15',''),
('5570','sql','1137','14','chx_metier_acces','c','4','2','159','174','13','0','1','0','157','23',''),
('5571','sql','1137','15',':chx_metier_acces','c','3','0','178','194','12','0','2','0','157','23',''),
('5572','sql','1137','16','provenance','f','1','0','202','211','1','1','3','5','212','23',''),
('5573','sql','1137','17','table_reference','f','2','0','220','234','16','1','1','4','235','23',''),
('5574','sql','1137','18','source','f','3','0','246','251','17','1','1','3','252','23',''),
('5575','sql','1137','19','nom_de_la_table','f','4','0','253','267','18','2','1','2','268','23',''),
('5576','sql','1137','20','tbl_acces','c','5','0','269','277','19','0','1','0','268','21',''),
('5577','sql','1137','21','base','f','5','0','279','282','19','1','2','1','283','23',''),
('5578','sql','1137','22','b1','c','6','0','284','285','21','0','1','0','283','23',''),
('5579','sql','1136','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5580','sql','1136','1','sélectionner','f','0','0','0','11','0','3','1','6','12','74',''),
('5581','sql','1136','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('5582','sql','1136','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('5583','sql','1136','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('5584','sql','1136','5','chi_id_acces','c','3','2','44','55','3','0','2','0','37','74',''),
('5585','sql','1136','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('5586','sql','1136','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('5587','sql','1136','8','chp_nom_acces','c','3','2','78','90','6','0','2','0','71','74',''),
('5588','sql','1136','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('5589','sql','1136','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('5590','sql','1136','11','chx_groupe_acces','c','3','2','113','128','9','0','2','0','106','74',''),
('5591','sql','1136','12','champ','f','2','0','139','143','2','2','4','1','144','15',''),
('5592','sql','1136','13','T0','c','3','2','146','147','12','0','1','0','144','14',''),
('5593','sql','1136','14','chx_metier_acces','c','3','2','151','166','12','0','2','0','144','74',''),
('5594','sql','1136','15','champ','f','2','0','177','181','2','2','5','1','182','18',''),
('5595','sql','1136','16','T0','c','3','2','184','185','15','0','1','0','182','17',''),
('5596','sql','1136','17','cht_parametres_acces','c','3','2','189','208','15','0','2','0','182','74',''),
('5597','sql','1136','18','champ','f','2','0','219','223','2','2','6','1','224','21',''),
('5598','sql','1136','19','T1','c','3','2','226','227','18','0','1','0','224','20',''),
('5599','sql','1136','20','chp_nom_groupe','c','3','2','231','244','18','0','2','0','224','74',''),
('5600','sql','1136','21','champ','f','2','0','255','259','2','2','7','1','260','24',''),
('5601','sql','1136','22','T2','c','3','2','262','263','21','0','1','0','260','23',''),
('5602','sql','1136','23','chp_nom_metier','c','3','2','267','280','21','0','2','0','260','74',''),
('5603','sql','1136','24','champ','f','2','0','291','295','2','2','8','1','296','74',''),
('5604','sql','1136','25','T0','c','3','2','298','299','24','0','1','0','296','26',''),
('5605','sql','1136','26','che_actif_acces','c','3','2','303','317','24','0','2','0','296','74',''),
('5606','sql','1136','27','provenance','f','1','0','330','339','1','3','2','5','340','68',''),
('5607','sql','1136','28','table_reference','f','2','0','348','362','27','1','1','4','363','36',''),
('5608','sql','1136','29','source','f','3','0','374','379','28','1','1','3','380','74',''),
('5609','sql','1136','30','nom_de_la_table','f','4','0','381','395','29','3','1','2','396','74',''),
('5610','sql','1136','31','tbl_acces','c','5','0','397','405','30','0','1','0','396','32',''),
('5611','sql','1136','32','alias','f','5','0','407','411','30','1','2','1','412','34',''),
('5612','sql','1136','33','T0','c','6','0','413','414','32','0','1','0','412','74',''),
('5613','sql','1136','34','base','f','5','0','417','420','30','1','3','1','421','74',''),
('5614','sql','1136','35','b1','c','6','0','422','423','34','0','1','0','421','74',''),
('5615','sql','1136','36','jointure_gauche','f','2','0','443','457','27','2','2','4','458','52',''),
('5616','sql','1136','37','source','f','3','0','469','474','36','1','1','3','475','44',''),
('5617','sql','1136','38','nom_de_la_table','f','4','0','476','490','37','3','1','2','491','74',''),
('5618','sql','1136','39','tbl_groupes','c','5','0','492','502','38','0','1','0','491','40',''),
('5619','sql','1136','40','alias','f','5','0','504','508','38','1','2','1','509','42',''),
('5620','sql','1136','41','T1','c','6','0','510','511','40','0','1','0','509','74',''),
('5621','sql','1136','42','base','f','5','0','514','517','38','1','3','1','518','74',''),
('5622','sql','1136','43','b1','c','6','0','519','520','42','0','1','0','518','74',''),
('5623','sql','1136','44','contrainte','f','3','0','535','544','36','1','2','3','545','74',''),
('5624','sql','1136','45','egal','f','4','0','546','549','44','2','1','2','550','74',''),
('5625','sql','1136','46','champ','f','5','0','551','555','45','2','1','1','556','49',''),
('5626','sql','1136','47','T1','c','6','0','557','558','46','0','1','0','556','48',''),
('5627','sql','1136','48','chi_id_groupe','c','6','0','560','572','46','0','2','0','556','74',''),
('5628','sql','1136','49','champ','f','5','0','575','579','45','2','2','1','580','74',''),
('5629','sql','1136','50','T0','c','6','0','581','582','49','0','1','0','580','51',''),
('5630','sql','1136','51','chx_groupe_acces','c','6','0','584','599','49','0','2','0','580','74',''),
('5631','sql','1136','52','jointure_gauche','f','2','0','619','633','27','2','3','4','634','74',''),
('5632','sql','1136','53','source','f','3','0','645','650','52','1','1','3','651','60',''),
('5633','sql','1136','54','nom_de_la_table','f','4','0','652','666','53','3','1','2','667','74',''),
('5634','sql','1136','55','tbl_metiers','c','5','0','668','678','54','0','1','0','667','56',''),
('5635','sql','1136','56','alias','f','5','0','680','684','54','1','2','1','685','58',''),
('5636','sql','1136','57','T2','c','6','0','686','687','56','0','1','0','685','74',''),
('5637','sql','1136','58','base','f','5','0','690','693','54','1','3','1','694','74',''),
('5638','sql','1136','59','b1','c','6','0','695','696','58','0','1','0','694','74',''),
('5639','sql','1136','60','contrainte','f','3','0','711','720','52','1','2','3','721','74',''),
('5640','sql','1136','61','egal','f','4','0','722','725','60','2','1','2','726','74',''),
('5641','sql','1136','62','champ','f','5','0','727','731','61','2','1','1','732','65',''),
('5642','sql','1136','63','T2','c','6','0','733','734','62','0','1','0','732','64',''),
('5643','sql','1136','64','chi_id_metier','c','6','0','736','748','62','0','2','0','732','74',''),
('5644','sql','1136','65','champ','f','5','0','751','755','61','2','2','1','756','74',''),
('5645','sql','1136','66','T0','c','6','0','757','758','65','0','1','0','756','67',''),
('5646','sql','1136','67','chx_metier_acces','c','6','0','760','775','65','0','2','0','756','74',''),
('5647','sql','1136','68','conditions','f','1','0','797','806','1','1','3','3','807','74',''),
('5648','sql','1136','69','egal','f','2','0','808','811','68','2','1','2','812','74',''),
('5649','sql','1136','70','champ','f','3','0','813','817','69','2','1','1','818','73',''),
('5650','sql','1136','71','T0','c','4','2','820','821','70','0','1','0','818','72',''),
('5651','sql','1136','72','chi_id_acces','c','4','2','825','836','70','0','2','0','818','74',''),
('5652','sql','1136','73',':T0_chi_id_acces','c','3','0','840','855','69','0','2','0','818','74',''),
('5653','sql','1135','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5654','sql','1135','1','sélectionner','f','0','0','0','11','0','4','1','6','12','119',''),
('5655','sql','1135','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('5656','sql','1135','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('5657','sql','1135','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('5658','sql','1135','5','chi_id_acces','c','3','2','44','55','3','0','2','0','37','119',''),
('5659','sql','1135','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('5660','sql','1135','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('5661','sql','1135','8','chp_nom_acces','c','3','2','78','90','6','0','2','0','71','119',''),
('5662','sql','1135','9','champ','f','2','0','101','105','2','2','3','1','106','12',''),
('5663','sql','1135','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('5664','sql','1135','11','che_actif_acces','c','3','2','113','127','9','0','2','0','106','119',''),
('5665','sql','1135','12','champ','f','2','0','138','142','2','2','4','1','143','15',''),
('5666','sql','1135','13','T0','c','3','2','145','146','12','0','1','0','143','14',''),
('5667','sql','1135','14','chx_groupe_acces','c','3','2','150','165','12','0','2','0','143','119',''),
('5668','sql','1135','15','champ','f','2','0','176','180','2','2','5','1','181','18',''),
('5669','sql','1135','16','T0','c','3','2','183','184','15','0','1','0','181','17',''),
('5670','sql','1135','17','chx_metier_acces','c','3','2','188','203','15','0','2','0','181','119',''),
('5671','sql','1135','18','champ','f','2','0','214','218','2','2','6','1','219','21',''),
('5672','sql','1135','19','T1','c','3','2','221','222','18','0','1','0','219','20','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 1000 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 2000 (3109) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('5673','sql','1135','20','chp_nom_groupe','c','3','2','226','239','18','0','2','0','219','119',''),
('5674','sql','1135','21','champ','f','2','0','250','254','2','2','7','1','255','119',''),
('5675','sql','1135','22','T2','c','3','2','257','258','21','0','1','0','255','23',''),
('5676','sql','1135','23','chp_nom_metier','c','3','2','262','275','21','0','2','0','255','119',''),
('5677','sql','1135','24','provenance','f','1','0','288','297','1','3','2','5','298','65',''),
('5678','sql','1135','25','table_reference','f','2','0','306','320','24','1','1','4','321','33',''),
('5679','sql','1135','26','source','f','3','0','332','337','25','1','1','3','338','119',''),
('5680','sql','1135','27','nom_de_la_table','f','4','0','339','353','26','3','1','2','354','119',''),
('5681','sql','1135','28','tbl_acces','c','5','0','355','363','27','0','1','0','354','29',''),
('5682','sql','1135','29','alias','f','5','0','365','369','27','1','2','1','370','31',''),
('5683','sql','1135','30','T0','c','6','0','371','372','29','0','1','0','370','119',''),
('5684','sql','1135','31','base','f','5','0','375','378','27','1','3','1','379','119',''),
('5685','sql','1135','32','b1','c','6','0','380','381','31','0','1','0','379','119',''),
('5686','sql','1135','33','jointure_gauche','f','2','0','401','415','24','2','2','4','416','49',''),
('5687','sql','1135','34','source','f','3','0','427','432','33','1','1','3','433','41',''),
('5688','sql','1135','35','nom_de_la_table','f','4','0','434','448','34','3','1','2','449','119',''),
('5689','sql','1135','36','tbl_groupes','c','5','0','450','460','35','0','1','0','449','37',''),
('5690','sql','1135','37','alias','f','5','0','462','466','35','1','2','1','467','39',''),
('5691','sql','1135','38','T1','c','6','0','468','469','37','0','1','0','467','119',''),
('5692','sql','1135','39','base','f','5','0','472','475','35','1','3','1','476','119',''),
('5693','sql','1135','40','b1','c','6','0','477','478','39','0','1','0','476','119',''),
('5694','sql','1135','41','contrainte','f','3','0','493','502','33','1','2','3','503','119',''),
('5695','sql','1135','42','egal','f','4','0','504','507','41','2','1','2','508','119',''),
('5696','sql','1135','43','champ','f','5','0','509','513','42','2','1','1','514','46',''),
('5697','sql','1135','44','T1','c','6','0','515','516','43','0','1','0','514','45',''),
('5698','sql','1135','45','chi_id_groupe','c','6','0','518','530','43','0','2','0','514','119',''),
('5699','sql','1135','46','champ','f','5','0','533','537','42','2','2','1','538','119',''),
('5700','sql','1135','47','T0','c','6','0','539','540','46','0','1','0','538','48',''),
('5701','sql','1135','48','chx_groupe_acces','c','6','0','542','557','46','0','2','0','538','119',''),
('5702','sql','1135','49','jointure_gauche','f','2','0','577','591','24','2','3','4','592','119',''),
('5703','sql','1135','50','source','f','3','0','603','608','49','1','1','3','609','57',''),
('5704','sql','1135','51','nom_de_la_table','f','4','0','610','624','50','3','1','2','625','119',''),
('5705','sql','1135','52','tbl_metiers','c','5','0','626','636','51','0','1','0','625','53',''),
('5706','sql','1135','53','alias','f','5','0','638','642','51','1','2','1','643','55',''),
('5707','sql','1135','54','T2','c','6','0','644','645','53','0','1','0','643','119',''),
('5708','sql','1135','55','base','f','5','0','648','651','51','1','3','1','652','119',''),
('5709','sql','1135','56','b1','c','6','0','653','654','55','0','1','0','652','119',''),
('5710','sql','1135','57','contrainte','f','3','0','669','678','49','1','2','3','679','119',''),
('5711','sql','1135','58','egal','f','4','0','680','683','57','2','1','2','684','119',''),
('5712','sql','1135','59','champ','f','5','0','685','689','58','2','1','1','690','62',''),
('5713','sql','1135','60','T2','c','6','0','691','692','59','0','1','0','690','61',''),
('5714','sql','1135','61','chi_id_metier','c','6','0','694','706','59','0','2','0','690','119',''),
('5715','sql','1135','62','champ','f','5','0','709','713','58','2','2','1','714','119',''),
('5716','sql','1135','63','T0','c','6','0','715','716','62','0','1','0','714','64',''),
('5717','sql','1135','64','chx_metier_acces','c','6','0','718','733','62','0','2','0','714','119',''),
('5718','sql','1135','65','conditions','f','1','0','755','764','1','1','3','4','765','107',''),
('5719','sql','1135','66','et','f','2','0','773','774','65','8','1','3','775','119',''),
('5720','sql','1135','67','egal','f','3','0','786','789','66','2','1','2','790','72',''),
('5721','sql','1135','68','champ','f','4','0','791','795','67','2','1','1','796','71',''),
('5722','sql','1135','69','T0','c','5','2','798','799','68','0','1','0','796','70',''),
('5723','sql','1135','70','chi_id_acces','c','5','2','803','814','68','0','2','0','796','119',''),
('5724','sql','1135','71',':T0_chi_id_acces','c','4','0','818','833','67','0','2','0','796','119',''),
('5725','sql','1135','72','comme','f','3','0','846','850','66','2','2','2','851','77',''),
('5726','sql','1135','73','champ','f','4','0','852','856','72','2','1','1','857','76',''),
('5727','sql','1135','74','T0','c','5','2','859','860','73','0','1','0','857','75',''),
('5728','sql','1135','75','chp_nom_acces','c','5','2','864','876','73','0','2','0','857','119',''),
('5729','sql','1135','76',':T0_chp_nom_acces','c','4','0','880','896','72','0','2','0','857','119',''),
('5730','sql','1135','77','egal','f','3','0','909','912','66','2','3','2','913','82',''),
('5731','sql','1135','78','champ','f','4','0','914','918','77','2','1','1','919','81',''),
('5732','sql','1135','79','T0','c','5','2','921','922','78','0','1','0','919','80',''),
('5733','sql','1135','80','che_actif_acces','c','5','2','926','940','78','0','2','0','919','119',''),
('5734','sql','1135','81',':T0_che_actif_acces','c','4','0','944','962','77','0','2','0','919','119',''),
('5735','sql','1135','82','egal','f','3','0','975','978','66','2','4','2','979','87',''),
('5736','sql','1135','83','champ','f','4','0','980','984','82','2','1','1','985','86',''),
('5737','sql','1135','84','T0','c','5','2','987','988','83','0','1','0','985','85',''),
('5738','sql','1135','85','chx_groupe_acces','c','5','2','992','1007','83','0','2','0','985','119',''),
('5739','sql','1135','86',':T0_chx_groupe_acces','c','4','0','1011','1030','82','0','2','0','985','119',''),
('5740','sql','1135','87','comme','f','3','0','1043','1047','66','2','5','2','1048','92',''),
('5741','sql','1135','88','champ','f','4','0','1049','1053','87','2','1','1','1054','91',''),
('5742','sql','1135','89','T1','c','5','2','1056','1057','88','0','1','0','1054','90',''),
('5743','sql','1135','90','chp_nom_groupe','c','5','2','1061','1074','88','0','2','0','1054','119',''),
('5744','sql','1135','91',':T1_chp_nom_groupe','c','4','0','1078','1095','87','0','2','0','1054','119',''),
('5745','sql','1135','92','egal','f','3','0','1108','1111','66','2','6','2','1112','97',''),
('5746','sql','1135','93','champ','f','4','0','1113','1117','92','2','1','1','1118','96',''),
('5747','sql','1135','94','T0','c','5','2','1120','1121','93','0','1','0','1118','95',''),
('5748','sql','1135','95','chx_metier_acces','c','5','2','1125','1140','93','0','2','0','1118','119',''),
('5749','sql','1135','96',':T0_chx_metier_acces','c','4','0','1144','1163','92','0','2','0','1118','119',''),
('5750','sql','1135','97','comme','f','3','0','1176','1180','66','2','7','2','1181','102',''),
('5751','sql','1135','98','champ','f','4','0','1182','1186','97','2','1','1','1187','101',''),
('5752','sql','1135','99','T2','c','5','2','1189','1190','98','0','1','0','1187','100',''),
('5753','sql','1135','100','chp_nom_metier','c','5','2','1194','1207','98','0','2','0','1187','119',''),
('5754','sql','1135','101',':T2_chp_nom_metier','c','4','0','1211','1228','97','0','2','0','1187','119',''),
('5755','sql','1135','102','pas_dans','f','3','0','1241','1248','66','2','8','2','1249','119',''),
('5756','sql','1135','103','champ','f','4','0','1250','1254','102','2','1','1','1255','106',''),
('5757','sql','1135','104','T0','c','5','2','1257','1258','103','0','1','0','1255','105',''),
('5758','sql','1135','105','chi_id_acces','c','5','2','1262','1273','103','0','2','0','1255','119',''),
('5759','sql','1135','106',':acces_pas_dans','c','4','0','1277','1291','102','0','2','0','1255','119',''),
('5760','sql','1135','107','complements','f','1','0','1311','1321','1','2','4','4','1322','119',''),
('5761','sql','1135','108','trier_par','f','2','0','1330','1338','107','1','1','3','1339','114',''),
('5762','sql','1135','109','','f','3','0','1330','1338','108','2','1','2','1340','119',''),
('5763','sql','1135','110','champ','f','4','0','1341','1345','109','2','1','1','1346','113',''),
('5764','sql','1135','111','T0','c','5','2','1348','1349','110','0','1','0','1346','112',''),
('5765','sql','1135','112','chi_id_acces','c','5','2','1353','1364','110','0','2','0','1346','119',''),
('5766','sql','1135','113','décroissant','f','4','0','1368','1378','109','0','2','0','1379','119',''),
('5767','sql','1135','114','limité_à','f','2','0','1391','1398','107','2','2','2','1399','119',''),
('5768','sql','1135','115','quantité','f','3','0','1400','1407','114','1','1','1','1408','117',''),
('5769','sql','1135','116',':quantitee','c','4','0','1409','1418','115','0','1','0','1408','119',''),
('5770','sql','1135','117','début','f','3','0','1421','1425','114','1','2','1','1426','119',''),
('5771','sql','1135','118',':debut','c','4','0','1427','1432','117','0','1','0','1426','119',''),
('5772','sql','1134','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5773','sql','1134','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('5774','sql','1134','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('5775','sql','1134','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('5776','sql','1134','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('5777','sql','1134','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('5778','sql','1134','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('5779','sql','1134','7','tbl_groupes','c','5','0','105','115','6','0','1','0','104','8',''),
('5780','sql','1134','8','base','f','5','0','117','120','6','1','2','1','121','15',''),
('5781','sql','1134','9','b1','c','6','0','122','123','8','0','1','0','121','15',''),
('5782','sql','1134','10','conditions','f','1','0','145','154','1','1','3','3','155','15',''),
('5783','sql','1134','11','egal','f','2','0','156','159','10','2','1','2','160','15',''),
('5784','sql','1134','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('5785','sql','1134','13','chi_id_groupe','c','4','2','168','180','12','0','1','0','166','15',''),
('5786','sql','1134','14',':chi_id_groupe','c','3','0','184','197','11','0','2','0','166','15',''),
('5787','sql','1133','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5788','sql','1133','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('5789','sql','1133','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('5790','sql','1133','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('5791','sql','1133','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('5792','sql','1133','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('5793','sql','1133','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('5794','sql','1133','7','chp_nom_groupe','c','4','2','61','74','6','0','1','0','59','25',''),
('5795','sql','1133','8',':n_chp_nom_groupe','c','3','0','78','94','5','0','2','0','59','25',''),
('5796','sql','1133','9','affecte','f','2','0','97','103','4','2','2','2','104','25',''),
('5797','sql','1133','10','champ','f','3','0','105','109','9','1','1','1','110','12',''),
('5798','sql','1133','11','chx_parent_groupe','c','4','2','112','128','10','0','1','0','110','25',''),
('5799','sql','1133','12',':n_chx_parent_groupe','c','3','0','132','151','9','0','2','0','110','25',''),
('5800','sql','1133','13','provenance','f','1','0','159','168','1','1','3','5','169','20',''),
('5801','sql','1133','14','table_reference','f','2','0','177','191','13','1','1','4','192','25',''),
('5802','sql','1133','15','source','f','3','0','203','208','14','1','1','3','209','25',''),
('5803','sql','1133','16','nom_de_la_table','f','4','0','210','224','15','2','1','2','225','25',''),
('5804','sql','1133','17','tbl_groupes','c','5','0','226','236','16','0','1','0','225','18',''),
('5805','sql','1133','18','base','f','5','0','238','241','16','1','2','1','242','25',''),
('5806','sql','1133','19','b1','c','6','0','243','244','18','0','1','0','242','25',''),
('5807','sql','1133','20','conditions','f','1','0','266','275','1','1','4','3','276','25',''),
('5808','sql','1133','21','egal','f','2','0','277','280','20','2','1','2','281','25',''),
('5809','sql','1133','22','champ','f','3','0','282','286','21','1','1','1','287','24',''),
('5810','sql','1133','23','chi_id_groupe','c','4','2','289','301','22','0','1','0','287','25',''),
('5811','sql','1133','24',':c_chi_id_groupe','c','3','0','305','320','21','0','2','0','287','25',''),
('5812','sql','1132','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5813','sql','1132','1','insérer','f','0','0','0','6','0','3','1','6','7','19',''),
('5814','sql','1132','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('5815','sql','1132','3','valeurs','f','1','0','36','42','1','2','2','3','43','12',''),
('5816','sql','1132','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('5817','sql','1132','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('5818','sql','1132','6','chp_nom_groupe','c','4','2','59','72','5','0','1','0','57','19',''),
('5819','sql','1132','7',':chp_nom_groupe','c','3','0','76','90','4','0','2','0','57','19',''),
('5820','sql','1132','8','affecte','f','2','0','93','99','3','2','2','2','100','19',''),
('5821','sql','1132','9','champ','f','3','0','101','105','8','1','1','1','106','11',''),
('5822','sql','1132','10','chx_parent_groupe','c','4','2','108','124','9','0','1','0','106','19',''),
('5823','sql','1132','11',':chx_parent_groupe','c','3','0','128','145','8','0','2','0','106','19',''),
('5824','sql','1132','12','provenance','f','1','0','153','162','1','1','3','5','163','19',''),
('5825','sql','1132','13','table_reference','f','2','0','171','185','12','1','1','4','186','19',''),
('5826','sql','1132','14','source','f','3','0','197','202','13','1','1','3','203','19',''),
('5827','sql','1132','15','nom_de_la_table','f','4','0','204','218','14','2','1','2','219','19',''),
('5828','sql','1132','16','tbl_groupes','c','5','0','220','230','15','0','1','0','219','17',''),
('5829','sql','1132','17','base','f','5','0','232','235','15','1','2','1','236','19',''),
('5830','sql','1132','18','b1','c','6','0','237','238','17','0','1','0','236','19',''),
('5831','sql','1131','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5832','sql','1131','1','sélectionner','f','0','0','0','11','0','4','1','6','12','48',''),
('5833','sql','1131','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('5834','sql','1131','3','1','c','2','0','35','35','2','0','1','0','34','48',''),
('5835','sql','1131','4','valeurs','f','1','0','42','48','1','4','2','2','49','17',''),
('5836','sql','1131','5','champ','f','2','0','50','54','4','2','1','1','55','8',''),
('5837','sql','1131','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('5838','sql','1131','7','chi_id_groupe','c','3','2','62','74','5','0','2','0','55','48',''),
('5839','sql','1131','8','champ','f','2','0','78','82','4','2','2','1','83','11',''),
('5840','sql','1131','9','T0','c','3','2','85','86','8','0','1','0','83','10',''),
('5841','sql','1131','10','chp_nom_groupe','c','3','2','90','103','8','0','2','0','83','48',''),
('5842','sql','1131','11','champ','f','2','0','107','111','4','2','3','1','112','14',''),
('5843','sql','1131','12','T0','c','3','2','114','115','11','0','1','0','112','13',''),
('5844','sql','1131','13','chx_parent_groupe','c','3','2','119','135','11','0','2','0','112','48',''),
('5845','sql','1131','14','champ','f','2','0','139','143','4','2','4','1','144','48',''),
('5846','sql','1131','15','T1','c','3','2','146','147','14','0','1','0','144','16',''),
('5847','sql','1131','16','chp_nom_groupe','c','3','2','151','164','14','0','2','0','144','48',''),
('5848','sql','1131','17','provenance','f','1','0','173','182','1','2','3','5','183','42',''),
('5849','sql','1131','18','table_reference','f','2','0','191','205','17','1','1','4','206','26',''),
('5850','sql','1131','19','source','f','3','0','217','222','18','1','1','3','223','48',''),
('5851','sql','1131','20','nom_de_la_table','f','4','0','224','238','19','3','1','2','239','48',''),
('5852','sql','1131','21','tbl_groupes','c','5','0','240','250','20','0','1','0','239','22',''),
('5853','sql','1131','22','alias','f','5','0','252','256','20','1','2','1','257','24',''),
('5854','sql','1131','23','T0','c','6','0','258','259','22','0','1','0','257','48',''),
('5855','sql','1131','24','base','f','5','0','262','265','20','1','3','1','266','48',''),
('5856','sql','1131','25','b1','c','6','0','267','268','24','0','1','0','266','48',''),
('5857','sql','1131','26','jointure_gauche','f','2','0','288','302','17','2','2','4','303','48',''),
('5858','sql','1131','27','source','f','3','0','314','319','26','1','1','3','320','34',''),
('5859','sql','1131','28','nom_de_la_table','f','4','0','321','335','27','3','1','2','336','48',''),
('5860','sql','1131','29','tbl_groupes','c','5','0','337','347','28','0','1','0','336','30',''),
('5861','sql','1131','30','alias','f','5','0','349','353','28','1','2','1','354','32',''),
('5862','sql','1131','31','T1','c','6','0','355','356','30','0','1','0','354','48',''),
('5863','sql','1131','32','base','f','5','0','359','362','28','1','3','1','363','48',''),
('5864','sql','1131','33','b1','c','6','0','364','365','32','0','1','0','363','48',''),
('5865','sql','1131','34','contrainte','f','3','0','380','389','26','1','2','3','390','48',''),
('5866','sql','1131','35','egal','f','4','0','391','394','34','2','1','2','395','48',''),
('5867','sql','1131','36','champ','f','5','0','396','400','35','2','1','1','401','39',''),
('5868','sql','1131','37','T1','c','6','0','402','403','36','0','1','0','401','38',''),
('5869','sql','1131','38','chi_id_groupe','c','6','0','405','417','36','0','2','0','401','48',''),
('5870','sql','1131','39','champ','f','5','0','420','424','35','2','2','1','425','48',''),
('5871','sql','1131','40','T0','c','6','0','426','427','39','0','1','0','425','41',''),
('5872','sql','1131','41','chx_parent_groupe','c','6','0','429','445','39','0','2','0','425','48',''),
('5873','sql','1131','42','conditions','f','1','0','467','476','1','1','4','3','477','48',''),
('5874','sql','1131','43','egal','f','2','0','478','481','42','2','1','2','482','48',''),
('5875','sql','1131','44','champ','f','3','0','483','487','43','2','1','1','488','47',''),
('5876','sql','1131','45','T0','c','4','2','490','491','44','0','1','0','488','46',''),
('5877','sql','1131','46','chi_id_groupe','c','4','2','495','507','44','0','2','0','488','48',''),
('5878','sql','1131','47',':T0_chi_id_groupe','c','3','0','511','527','43','0','2','0','488','48',''),
('5879','sql','1130','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5880','sql','1130','1','sélectionner','f','0','0','0','11','0','4','1','6','12','79',''),
('5881','sql','1130','2','valeurs','f','1','0','17','23','1','4','1','2','24','15',''),
('5882','sql','1130','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('5883','sql','1130','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('5884','sql','1130','5','chi_id_groupe','c','3','2','37','49','3','0','2','0','30','79',''),
('5885','sql','1130','6','champ','f','2','0','53','57','2','2','2','1','58','9',''),
('5886','sql','1130','7','T0','c','3','2','60','61','6','0','1','0','58','8',''),
('5887','sql','1130','8','chp_nom_groupe','c','3','2','65','78','6','0','2','0','58','79',''),
('5888','sql','1130','9','champ','f','2','0','82','86','2','2','3','1','87','12',''),
('5889','sql','1130','10','T0','c','3','2','89','90','9','0','1','0','87','11',''),
('5890','sql','1130','11','chx_parent_groupe','c','3','2','94','110','9','0','2','0','87','79',''),
('5891','sql','1130','12','champ','f','2','0','114','118','2','2','4','1','119','79',''),
('5892','sql','1130','13','T1','c','3','2','121','122','12','0','1','0','119','14',''),
('5893','sql','1130','14','chp_nom_groupe','c','3','2','126','139','12','0','2','0','119','79',''),
('5894','sql','1130','15','provenance','f','1','0','148','157','1','2','2','5','158','40',''),
('5895','sql','1130','16','table_reference','f','2','0','166','180','15','1','1','4','181','24',''),
('5896','sql','1130','17','source','f','3','0','192','197','16','1','1','3','198','79',''),
('5897','sql','1130','18','nom_de_la_table','f','4','0','199','213','17','3','1','2','214','79',''),
('5898','sql','1130','19','tbl_groupes','c','5','0','215','225','18','0','1','0','214','20',''),
('5899','sql','1130','20','alias','f','5','0','227','231','18','1','2','1','232','22',''),
('5900','sql','1130','21','T0','c','6','0','233','234','20','0','1','0','232','79',''),
('5901','sql','1130','22','base','f','5','0','237','240','18','1','3','1','241','79',''),
('5902','sql','1130','23','b1','c','6','0','242','243','22','0','1','0','241','79',''),
('5903','sql','1130','24','jointure_gauche','f','2','0','263','277','15','2','2','4','278','79',''),
('5904','sql','1130','25','source','f','3','0','289','294','24','1','1','3','295','32',''),
('5905','sql','1130','26','nom_de_la_table','f','4','0','296','310','25','3','1','2','311','79',''),
('5906','sql','1130','27','tbl_groupes','c','5','0','312','322','26','0','1','0','311','28',''),
('5907','sql','1130','28','alias','f','5','0','324','328','26','1','2','1','329','30',''),
('5908','sql','1130','29','T1','c','6','0','330','331','28','0','1','0','329','79',''),
('5909','sql','1130','30','base','f','5','0','334','337','26','1','3','1','338','79',''),
('5910','sql','1130','31','b1','c','6','0','339','340','30','0','1','0','338','79',''),
('5911','sql','1130','32','contrainte','f','3','0','355','364','24','1','2','3','365','79',''),
('5912','sql','1130','33','egal','f','4','0','366','369','32','2','1','2','370','79',''),
('5913','sql','1130','34','champ','f','5','0','371','375','33','2','1','1','376','37',''),
('5914','sql','1130','35','T1','c','6','0','377','378','34','0','1','0','376','36',''),
('5915','sql','1130','36','chi_id_groupe','c','6','0','380','392','34','0','2','0','376','79',''),
('5916','sql','1130','37','champ','f','5','0','395','399','33','2','2','1','400','79',''),
('5917','sql','1130','38','T0','c','6','0','401','402','37','0','1','0','400','39',''),
('5918','sql','1130','39','chx_parent_groupe','c','6','0','404','420','37','0','2','0','400','79',''),
('5919','sql','1130','40','conditions','f','1','0','442','451','1','1','3','4','452','67',''),
('5920','sql','1130','41','et','f','2','0','460','461','40','5','1','3','462','79',''),
('5921','sql','1130','42','egal','f','3','0','473','476','41','2','1','2','477','47',''),
('5922','sql','1130','43','champ','f','4','0','478','482','42','2','1','1','483','46',''),
('5923','sql','1130','44','T0','c','5','2','485','486','43','0','1','0','483','45',''),
('5924','sql','1130','45','chi_id_groupe','c','5','2','490','502','43','0','2','0','483','79',''),
('5925','sql','1130','46',':T0_chi_id_groupe','c','4','0','506','522','42','0','2','0','483','79',''),
('5926','sql','1130','47','comme','f','3','0','535','539','41','2','2','2','540','52',''),
('5927','sql','1130','48','champ','f','4','0','541','545','47','2','1','1','546','51',''),
('5928','sql','1130','49','T0','c','5','2','548','549','48','0','1','0','546','50',''),
('5929','sql','1130','50','chp_nom_groupe','c','5','2','553','566','48','0','2','0','546','79',''),
('5930','sql','1130','51',':T0_chp_nom_groupe','c','4','0','570','587','47','0','2','0','546','79',''),
('5931','sql','1130','52','egal','f','3','0','600','603','41','2','3','2','604','57',''),
('5932','sql','1130','53','champ','f','4','0','605','609','52','2','1','1','610','56',''),
('5933','sql','1130','54','T0','c','5','2','612','613','53','0','1','0','610','55',''),
('5934','sql','1130','55','chx_parent_groupe','c','5','2','617','633','53','0','2','0','610','79',''),
('5935','sql','1130','56',':T0_chx_parent_groupe','c','4','0','637','657','52','0','2','0','610','79',''),
('5936','sql','1130','57','comme','f','3','0','670','674','41','2','4','2','675','62',''),
('5937','sql','1130','58','champ','f','4','0','676','680','57','2','1','1','681','61',''),
('5938','sql','1130','59','T1','c','5','2','683','684','58','0','1','0','681','60',''),
('5939','sql','1130','60','chp_nom_groupe','c','5','2','688','701','58','0','2','0','681','79',''),
('5940','sql','1130','61',':T1_chp_nom_groupe','c','4','0','705','722','57','0','2','0','681','79',''),
('5941','sql','1130','62','supegal','f','3','0','735','741','41','2','5','2','742','79',''),
('5942','sql','1130','63','champ','f','4','0','743','747','62','2','1','1','748','66',''),
('5943','sql','1130','64','T0','c','5','2','750','751','63','0','1','0','748','65',''),
('5944','sql','1130','65','chi_id_groupe','c','5','2','755','767','63','0','2','0','748','79',''),
('5945','sql','1130','66',':groupe_mini','c','4','0','771','782','62','0','2','0','748','79',''),
('5946','sql','1130','67','complements','f','1','0','802','812','1','2','4','4','813','79',''),
('5947','sql','1130','68','trier_par','f','2','0','821','829','67','1','1','3','830','74',''),
('5948','sql','1130','69','','f','3','0','821','829','68','2','1','2','831','79',''),
('5949','sql','1130','70','champ','f','4','0','832','836','69','2','1','1','837','73',''),
('5950','sql','1130','71','T0','c','5','2','839','840','70','0','1','0','837','72',''),
('5951','sql','1130','72','chi_id_groupe','c','5','2','844','856','70','0','2','0','837','79',''),
('5952','sql','1130','73','décroissant','f','4','0','860','870','69','0','2','0','871','79',''),
('5953','sql','1130','74','limité_à','f','2','0','883','890','67','2','2','2','891','79',''),
('5954','sql','1130','75','quantité','f','3','0','892','899','74','1','1','1','900','77',''),
('5955','sql','1130','76',':quantitee','c','4','0','901','910','75','0','1','0','900','79',''),
('5956','sql','1130','77','début','f','3','0','913','917','74','1','2','1','918','79',''),
('5957','sql','1130','78',':debut','c','4','0','919','924','77','0','1','0','918','79',''),
('5958','sql','1129','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5959','sql','1129','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('5960','sql','1129','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('5961','sql','1129','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('5962','sql','1129','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('5963','sql','1129','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('5964','sql','1129','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('5965','sql','1129','7','tbl_metiers','c','5','0','105','115','6','0','1','0','104','8',''),
('5966','sql','1129','8','base','f','5','0','117','120','6','1','2','1','121','15',''),
('5967','sql','1129','9','b1','c','6','0','122','123','8','0','1','0','121','15',''),
('5968','sql','1129','10','conditions','f','1','0','145','154','1','1','3','3','155','15',''),
('5969','sql','1129','11','egal','f','2','0','156','159','10','2','1','2','160','15',''),
('5970','sql','1129','12','champ','f','3','0','161','165','11','1','1','1','166','14',''),
('5971','sql','1129','13','chi_id_metier','c','4','2','168','180','12','0','1','0','166','15',''),
('5972','sql','1129','14',':chi_id_metier','c','3','0','184','197','11','0','2','0','166','15',''),
('5973','sql','1127','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5974','sql','1127','1','modifier','f','0','0','0','7','0','3','1','6','8','23',''),
('5975','sql','1127','2','valeurs','f','1','0','14','20','1','2','1','3','21','11',''),
('5976','sql','1127','3','affecte','f','2','0','22','28','2','2','1','2','29','7',''),
('5977','sql','1127','4','champ','f','3','0','30','34','3','1','1','1','35','6',''),
('5978','sql','1127','5','chp_nom_metier','c','4','2','37','50','4','0','1','0','35','23',''),
('5979','sql','1127','6',':n_chp_nom_metier','c','3','0','54','70','3','0','2','0','35','23',''),
('5980','sql','1127','7','affecte','f','2','0','73','79','2','2','2','2','80','23',''),
('5981','sql','1127','8','champ','f','3','0','81','85','7','1','1','1','86','10',''),
('5982','sql','1127','9','chx_parent_metier','c','4','2','88','104','8','0','1','0','86','23',''),
('5983','sql','1127','10',':n_chx_parent_metier','c','3','0','108','127','7','0','2','0','86','23',''),
('5984','sql','1127','11','provenance','f','1','0','135','144','1','1','2','5','145','18',''),
('5985','sql','1127','12','table_reference','f','2','0','153','167','11','1','1','4','168','23',''),
('5986','sql','1127','13','source','f','3','0','179','184','12','1','1','3','185','23',''),
('5987','sql','1127','14','nom_de_la_table','f','4','0','186','200','13','2','1','2','201','23',''),
('5988','sql','1127','15','tbl_metiers','c','5','0','202','212','14','0','1','0','201','16',''),
('5989','sql','1127','16','base','f','5','0','214','217','14','1','2','1','218','23',''),
('5990','sql','1127','17','b1','c','6','0','219','220','16','0','1','0','218','23',''),
('5991','sql','1127','18','conditions','f','1','0','242','251','1','1','3','3','252','23',''),
('5992','sql','1127','19','egal','f','2','0','253','256','18','2','1','2','257','23',''),
('5993','sql','1127','20','champ','f','3','0','258','262','19','1','1','1','263','22',''),
('5994','sql','1127','21','chi_id_metier','c','4','2','265','277','20','0','1','0','263','23',''),
('5995','sql','1127','22',':c_chi_id_metier','c','3','0','281','296','19','0','2','0','263','23',''),
('5996','sql','1126','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('5997','sql','1126','1','insérer','f','0','0','0','6','0','3','1','6','7','19',''),
('5998','sql','1126','2','base_de_reference','f','1','0','12','28','1','0','1','0','29','3',''),
('5999','sql','1126','3','valeurs','f','1','0','36','42','1','2','2','3','43','12',''),
('6000','sql','1126','4','affecte','f','2','0','44','50','3','2','1','2','51','8',''),
('6001','sql','1126','5','champ','f','3','0','52','56','4','1','1','1','57','7',''),
('6002','sql','1126','6','chp_nom_metier','c','4','2','59','72','5','0','1','0','57','19',''),
('6003','sql','1126','7',':chp_nom_metier','c','3','0','76','90','4','0','2','0','57','19',''),
('6004','sql','1126','8','affecte','f','2','0','93','99','3','2','2','2','100','19',''),
('6005','sql','1126','9','champ','f','3','0','101','105','8','1','1','1','106','11',''),
('6006','sql','1126','10','chx_parent_metier','c','4','2','108','124','9','0','1','0','106','19',''),
('6007','sql','1126','11',':chx_parent_metier','c','3','0','128','145','8','0','2','0','106','19',''),
('6008','sql','1126','12','provenance','f','1','0','153','162','1','1','3','5','163','19',''),
('6009','sql','1126','13','table_reference','f','2','0','171','185','12','1','1','4','186','19',''),
('6010','sql','1126','14','source','f','3','0','197','202','13','1','1','3','203','19',''),
('6011','sql','1126','15','nom_de_la_table','f','4','0','204','218','14','2','1','2','219','19',''),
('6012','sql','1126','16','tbl_metiers','c','5','0','220','230','15','0','1','0','219','17',''),
('6013','sql','1126','17','base','f','5','0','232','235','15','1','2','1','236','19',''),
('6014','sql','1126','18','b1','c','6','0','237','238','17','0','1','0','236','19',''),
('6015','sql','1125','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6016','sql','1125','1','sélectionner','f','0','0','0','11','0','4','1','6','12','48',''),
('6017','sql','1125','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('6018','sql','1125','3','1','c','2','0','35','35','2','0','1','0','34','48',''),
('6019','sql','1125','4','valeurs','f','1','0','42','48','1','4','2','2','49','17',''),
('6020','sql','1125','5','champ','f','2','0','50','54','4','2','1','1','55','8',''),
('6021','sql','1125','6','T0','c','3','2','57','58','5','0','1','0','55','7',''),
('6022','sql','1125','7','chi_id_metier','c','3','2','62','74','5','0','2','0','55','48',''),
('6023','sql','1125','8','champ','f','2','0','78','82','4','2','2','1','83','11',''),
('6024','sql','1125','9','T0','c','3','2','85','86','8','0','1','0','83','10',''),
('6025','sql','1125','10','chp_nom_metier','c','3','2','90','103','8','0','2','0','83','48',''),
('6026','sql','1125','11','champ','f','2','0','107','111','4','2','3','1','112','14',''),
('6027','sql','1125','12','T1','c','3','2','114','115','11','0','1','0','112','13',''),
('6028','sql','1125','13','chp_nom_metier','c','3','2','119','132','11','0','2','0','112','48',''),
('6029','sql','1125','14','champ','f','2','0','136','140','4','2','4','1','141','48',''),
('6030','sql','1125','15','T0','c','3','2','143','144','14','0','1','0','141','16',''),
('6031','sql','1125','16','chx_parent_metier','c','3','2','148','164','14','0','2','0','141','48',''),
('6032','sql','1125','17','provenance','f','1','0','173','182','1','2','3','5','183','42',''),
('6033','sql','1125','18','table_reference','f','2','0','191','205','17','1','1','4','206','26',''),
('6034','sql','1125','19','source','f','3','0','217','222','18','1','1','3','223','48',''),
('6035','sql','1125','20','nom_de_la_table','f','4','0','224','238','19','3','1','2','239','48',''),
('6036','sql','1125','21','tbl_metiers','c','5','0','240','250','20','0','1','0','239','22',''),
('6037','sql','1125','22','alias','f','5','0','252','256','20','1','2','1','257','24',''),
('6038','sql','1125','23','T0','c','6','0','258','259','22','0','1','0','257','48',''),
('6039','sql','1125','24','base','f','5','0','262','265','20','1','3','1','266','48',''),
('6040','sql','1125','25','b1','c','6','0','267','268','24','0','1','0','266','48',''),
('6041','sql','1125','26','jointure_gauche','f','2','0','288','302','17','2','2','4','303','48',''),
('6042','sql','1125','27','source','f','3','0','314','319','26','1','1','3','320','34',''),
('6043','sql','1125','28','nom_de_la_table','f','4','0','321','335','27','3','1','2','336','48',''),
('6044','sql','1125','29','tbl_metiers','c','5','0','337','347','28','0','1','0','336','30',''),
('6045','sql','1125','30','alias','f','5','0','349','353','28','1','2','1','354','32',''),
('6046','sql','1125','31','T1','c','6','0','355','356','30','0','1','0','354','48',''),
('6047','sql','1125','32','base','f','5','0','359','362','28','1','3','1','363','48',''),
('6048','sql','1125','33','b1','c','6','0','364','365','32','0','1','0','363','48',''),
('6049','sql','1125','34','contrainte','f','3','0','380','389','26','1','2','3','390','48',''),
('6050','sql','1125','35','egal','f','4','0','391','394','34','2','1','2','395','48',''),
('6051','sql','1125','36','champ','f','5','0','396','400','35','2','1','1','401','39',''),
('6052','sql','1125','37','T1','c','6','0','402','403','36','0','1','0','401','38',''),
('6053','sql','1125','38','chi_id_metier','c','6','0','405','417','36','0','2','0','401','48',''),
('6054','sql','1125','39','champ','f','5','0','420','424','35','2','2','1','425','48',''),
('6055','sql','1125','40','T0','c','6','0','426','427','39','0','1','0','425','41',''),
('6056','sql','1125','41','chx_parent_metier','c','6','0','429','445','39','0','2','0','425','48',''),
('6057','sql','1125','42','conditions','f','1','0','467','476','1','1','4','3','477','48',''),
('6058','sql','1125','43','egal','f','2','0','478','481','42','2','1','2','482','48',''),
('6059','sql','1125','44','champ','f','3','0','483','487','43','2','1','1','488','47',''),
('6060','sql','1125','45','T0','c','4','2','490','491','44','0','1','0','488','46',''),
('6061','sql','1125','46','chi_id_metier','c','4','2','495','507','44','0','2','0','488','48',''),
('6062','sql','1125','47',':T0_chi_id_metier','c','3','0','511','527','43','0','2','0','488','48',''),
('6063','sql','1124','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6064','sql','1124','1','sélectionner','f','0','0','0','11','0','4','1','6','12','80',''),
('6065','sql','1124','2','valeurs','f','1','0','17','23','1','4','1','2','24','15',''),
('6066','sql','1124','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('6067','sql','1124','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('6068','sql','1124','5','chi_id_metier','c','3','2','37','49','3','0','2','0','30','80',''),
('6069','sql','1124','6','champ','f','2','0','53','57','2','2','2','1','58','9',''),
('6070','sql','1124','7','T0','c','3','2','60','61','6','0','1','0','58','8',''),
('6071','sql','1124','8','chp_nom_metier','c','3','2','65','78','6','0','2','0','58','80',''),
('6072','sql','1124','9','champ','f','2','0','82','86','2','2','3','1','87','12',''),
('6073','sql','1124','10','T0','c','3','2','89','90','9','0','1','0','87','11',''),
('6074','sql','1124','11','chx_parent_metier','c','3','2','94','110','9','0','2','0','87','80',''),
('6075','sql','1124','12','champ','f','2','0','114','118','2','2','4','1','119','80',''),
('6076','sql','1124','13','T1','c','3','2','121','122','12','0','1','0','119','14',''),
('6077','sql','1124','14','chp_nom_metier','c','3','2','126','139','12','0','2','0','119','80',''),
('6078','sql','1124','15','provenance','f','1','0','148','157','1','2','2','5','158','40',''),
('6079','sql','1124','16','table_reference','f','2','0','166','180','15','1','1','4','181','24',''),
('6080','sql','1124','17','source','f','3','0','192','197','16','1','1','3','198','80',''),
('6081','sql','1124','18','nom_de_la_table','f','4','0','199','213','17','3','1','2','214','80',''),
('6082','sql','1124','19','tbl_metiers','c','5','0','215','225','18','0','1','0','214','20',''),
('6083','sql','1124','20','alias','f','5','0','227','231','18','1','2','1','232','22',''),
('6084','sql','1124','21','T0','c','6','0','233','234','20','0','1','0','232','80',''),
('6085','sql','1124','22','base','f','5','0','237','240','18','1','3','1','241','80',''),
('6086','sql','1124','23','b1','c','6','0','242','243','22','0','1','0','241','80',''),
('6087','sql','1124','24','jointure_gauche','f','2','0','263','277','15','2','2','4','278','80',''),
('6088','sql','1124','25','source','f','3','0','289','294','24','1','1','3','295','32',''),
('6089','sql','1124','26','nom_de_la_table','f','4','0','296','310','25','3','1','2','311','80',''),
('6090','sql','1124','27','tbl_metiers','c','5','0','312','322','26','0','1','0','311','28',''),
('6091','sql','1124','28','alias','f','5','0','324','328','26','1','2','1','329','30',''),
('6092','sql','1124','29','T1','c','6','0','330','331','28','0','1','0','329','80',''),
('6093','sql','1124','30','base','f','5','0','334','337','26','1','3','1','338','80',''),
('6094','sql','1124','31','b1','c','6','0','339','340','30','0','1','0','338','80',''),
('6095','sql','1124','32','contrainte','f','3','0','355','364','24','1','2','3','365','80',''),
('6096','sql','1124','33','egal','f','4','0','366','369','32','2','1','2','370','80',''),
('6097','sql','1124','34','champ','f','5','0','371','375','33','2','1','1','376','37',''),
('6098','sql','1124','35','T1','c','6','0','377','378','34','0','1','0','376','36',''),
('6099','sql','1124','36','chi_id_metier','c','6','0','380','392','34','0','2','0','376','80',''),
('6100','sql','1124','37','champ','f','5','0','395','399','33','2','2','1','400','80',''),
('6101','sql','1124','38','T0','c','6','0','401','402','37','0','1','0','400','39',''),
('6102','sql','1124','39','chx_parent_metier','c','6','0','404','420','37','0','2','0','400','80',''),
('6103','sql','1124','40','conditions','f','1','0','442','451','1','1','3','4','452','68',''),
('6104','sql','1124','41','et','f','2','0','460','461','40','6','1','3','462','80',''),
('6105','sql','1124','42','#','f','3','0','473','473','41','0','1','0','474','43',''),
('6106','sql','1124','43','egal','f','3','0','487','490','41','2','2','2','491','48',''),
('6107','sql','1124','44','champ','f','4','0','492','496','43','2','1','1','497','47',''),
('6108','sql','1124','45','T0','c','5','2','499','500','44','0','1','0','497','46',''),
('6109','sql','1124','46','chi_id_metier','c','5','2','504','516','44','0','2','0','497','80',''),
('6110','sql','1124','47',':T0_chi_id_metier','c','4','0','520','536','43','0','2','0','497','80',''),
('6111','sql','1124','48','comme','f','3','0','549','553','41','2','3','2','554','53',''),
('6112','sql','1124','49','champ','f','4','0','555','559','48','2','1','1','560','52',''),
('6113','sql','1124','50','T0','c','5','2','562','563','49','0','1','0','560','51',''),
('6114','sql','1124','51','chp_nom_metier','c','5','2','567','580','49','0','2','0','560','80',''),
('6115','sql','1124','52',':T0_chp_nom_metier','c','4','0','584','601','48','0','2','0','560','80',''),
('6116','sql','1124','53','egal','f','3','0','614','617','41','2','4','2','618','58',''),
('6117','sql','1124','54','champ','f','4','0','619','623','53','2','1','1','624','57',''),
('6118','sql','1124','55','T0','c','5','2','626','627','54','0','1','0','624','56',''),
('6119','sql','1124','56','chx_parent_metier','c','5','2','631','647','54','0','2','0','624','80',''),
('6120','sql','1124','57',':T0_chx_parent_metier','c','4','0','651','671','53','0','2','0','624','80',''),
('6121','sql','1124','58','comme','f','3','0','684','688','41','2','5','2','689','63',''),
('6122','sql','1124','59','champ','f','4','0','690','694','58','2','1','1','695','62',''),
('6123','sql','1124','60','T1','c','5','2','697','698','59','0','1','0','695','61',''),
('6124','sql','1124','61','chp_nom_metier','c','5','2','702','715','59','0','2','0','695','80',''),
('6125','sql','1124','62',':T1_chp_nom_metier','c','4','0','719','736','58','0','2','0','695','80',''),
('6126','sql','1124','63','supegal','f','3','0','749','755','41','2','6','2','756','80',''),
('6127','sql','1124','64','champ','f','4','0','757','761','63','2','1','1','762','67',''),
('6128','sql','1124','65','T0','c','5','2','764','765','64','0','1','0','762','66',''),
('6129','sql','1124','66','chi_id_metier','c','5','2','769','781','64','0','2','0','762','80',''),
('6130','sql','1124','67',':metier_mini','c','4','0','785','796','63','0','2','0','762','80',''),
('6131','sql','1124','68','complements','f','1','0','816','826','1','2','4','4','827','80',''),
('6132','sql','1124','69','trier_par','f','2','0','835','843','68','1','1','3','844','75',''),
('6133','sql','1124','70','','f','3','0','835','843','69','2','1','2','845','80',''),
('6134','sql','1124','71','champ','f','4','0','846','850','70','2','1','1','851','74',''),
('6135','sql','1124','72','T0','c','5','2','853','854','71','0','1','0','851','73',''),
('6136','sql','1124','73','chi_id_metier','c','5','2','858','870','71','0','2','0','851','80',''),
('6137','sql','1124','74','décroissant','f','4','0','874','884','70','0','2','0','885','80',''),
('6138','sql','1124','75','limité_à','f','2','0','897','904','68','2','2','2','905','80',''),
('6139','sql','1124','76','quantité','f','3','0','906','913','75','1','1','1','914','78',''),
('6140','sql','1124','77',':quantitee','c','4','0','915','924','76','0','1','0','914','80',''),
('6141','sql','1124','78','début','f','3','0','927','931','75','1','2','1','932','80',''),
('6142','sql','1124','79',':debut','c','4','0','933','938','78','0','1','0','932','80',''),
('6143','sql','1123','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6144','sql','1123','1','supprimer','f','0','0','0','8','0','3','1','6','9','15',''),
('6145','sql','1123','2','base_de_reference','f','1','0','14','30','1','0','1','0','31','3',''),
('6146','sql','1123','3','provenance','f','1','0','38','47','1','1','2','5','48','10',''),
('6147','sql','1123','4','table_reference','f','2','0','56','70','3','1','1','4','71','15',''),
('6148','sql','1123','5','source','f','3','0','82','87','4','1','1','3','88','15',''),
('6149','sql','1123','6','nom_de_la_table','f','4','0','89','103','5','2','1','2','104','15',''),
('6150','sql','1123','7','tbl_utilisateurs','c','5','0','105','120','6','0','1','0','104','8',''),
('6151','sql','1123','8','base','f','5','0','122','125','6','1','2','1','126','15',''),
('6152','sql','1123','9','b1','c','6','0','127','128','8','0','1','0','126','15',''),
('6153','sql','1123','10','conditions','f','1','0','150','159','1','1','3','3','160','15',''),
('6154','sql','1123','11','egal','f','2','0','161','164','10','2','1','2','165','15',''),
('6155','sql','1123','12','champ','f','3','0','166','170','11','1','1','1','171','14',''),
('6156','sql','1123','13','chi_id_utilisateur','c','4','2','173','190','12','0','1','0','171','15',''),
('6157','sql','1123','14',':chi_id_utilisateur','c','3','0','194','212','11','0','2','0','171','15',''),
('6158','sql','1122','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6159','sql','1122','1','modifier','f','0','0','0','7','0','4','1','6','8','30',''),
('6160','sql','1122','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('6161','sql','1122','3','1','c','2','0','31','31','2','0','1','0','30','30',''),
('6162','sql','1122','4','valeurs','f','1','0','38','44','1','4','2','3','45','18',''),
('6163','sql','1122','5','#','f','2','0','53','53','4','0','1','0','54','6',''),
('6164','sql','1122','6','affecte','f','2','0','64','70','4','2','2','2','71','10',''),
('6165','sql','1122','7','champ','f','3','0','72','76','6','1','1','1','77','9',''),
('6166','sql','1122','8','chp_nom_de_connexion_utilisateur','c','4','2','79','110','7','0','1','0','77','30',''),
('6167','sql','1122','9',':n_chp_nom_de_connexion_utilisateur','c','3','0','114','148','6','0','2','0','77','30',''),
('6168','sql','1122','10','affecte','f','2','0','158','164','4','2','3','2','165','14',''),
('6169','sql','1122','11','champ','f','3','0','166','170','10','1','1','1','171','13',''),
('6170','sql','1122','12','chx_acces_utilisateur','c','4','2','173','193','11','0','1','0','171','30',''),
('6171','sql','1122','13',':n_chx_acces_utilisateur','c','3','0','197','220','10','0','2','0','171','30',''),
('6172','sql','1122','14','affecte','f','2','0','230','236','4','2','4','2','237','30',''),
('6173','sql','1122','15','champ','f','3','0','238','242','14','1','1','1','243','17',''),
('6174','sql','1122','16','che_actif_utilisateur','c','4','2','245','265','15','0','1','0','243','30',''),
('6175','sql','1122','17',':n_che_actif_utilisateur','c','3','0','269','292','14','0','2','0','243','30',''),
('6176','sql','1122','18','provenance','f','1','0','304','313','1','1','3','5','314','25',''),
('6177','sql','1122','19','table_reference','f','2','0','322','336','18','1','1','4','337','30',''),
('6178','sql','1122','20','source','f','3','0','348','353','19','1','1','3','354','30',''),
('6179','sql','1122','21','nom_de_la_table','f','4','0','355','369','20','2','1','2','370','30',''),
('6180','sql','1122','22','tbl_utilisateurs','c','5','0','371','386','21','0','1','0','370','23',''),
('6181','sql','1122','23','base','f','5','0','388','391','21','1','2','1','392','30',''),
('6182','sql','1122','24','b1','c','6','0','393','394','23','0','1','0','392','30',''),
('6183','sql','1122','25','conditions','f','1','0','416','425','1','1','4','3','426','30',''),
('6184','sql','1122','26','egal','f','2','0','427','430','25','2','1','2','431','30',''),
('6185','sql','1122','27','champ','f','3','0','432','436','26','1','1','1','437','29',''),
('6186','sql','1122','28','chi_id_utilisateur','c','4','2','439','456','27','0','1','0','437','30',''),
('6187','sql','1122','29',':c_chi_id_utilisateur','c','3','0','460','480','26','0','2','0','437','30',''),
('6188','sql','1121','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6189','sql','1121','1','sélectionner','f','0','0','0','11','0','4','1','6','12','69',''),
('6190','sql','1121','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('6191','sql','1121','3','1','c','2','0','35','35','2','0','1','0','34','69',''),
('6192','sql','1121','4','valeurs','f','1','0','42','48','1','11','2','2','49','38',''),
('6193','sql','1121','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('6194','sql','1121','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('6195','sql','1121','7','chi_id_utilisateur','c','3','2','69','86','5','0','2','0','62','69',''),
('6196','sql','1121','8','champ','f','2','0','97','101','4','2','2','1','102','11',''),
('6197','sql','1121','9','T0','c','3','2','104','105','8','0','1','0','102','10',''),
('6198','sql','1121','10','chp_nom_de_connexion_utilisateur','c','3','2','109','140','8','0','2','0','102','69',''),
('6199','sql','1121','11','champ','f','2','0','151','155','4','2','3','1','156','14',''),
('6200','sql','1121','12','T0','c','3','2','158','159','11','0','1','0','156','13',''),
('6201','sql','1121','13','chp_mot_de_passe_utilisateur','c','3','2','163','190','11','0','2','0','156','69',''),
('6202','sql','1121','14','champ','f','2','0','201','205','4','2','4','1','206','17',''),
('6203','sql','1121','15','T0','c','3','2','208','209','14','0','1','0','206','16',''),
('6204','sql','1121','16','chp_parametres_utilisateur','c','3','2','213','238','14','0','2','0','206','69',''),
('6205','sql','1121','17','champ','f','2','0','249','253','4','2','5','1','254','20',''),
('6206','sql','1121','18','T0','c','3','2','256','257','17','0','1','0','254','19',''),
('6207','sql','1121','19','chi_compteur1_utilisateur','c','3','2','261','285','17','0','2','0','254','69',''),
('6208','sql','1121','20','champ','f','2','0','296','300','4','2','6','1','301','23',''),
('6209','sql','1121','21','T0','c','3','2','303','304','20','0','1','0','301','22',''),
('6210','sql','1121','22','che__nur_utilisateur','c','3','2','308','327','20','0','2','0','301','69',''),
('6211','sql','1121','23','champ','f','2','0','338','342','4','2','7','1','343','26',''),
('6212','sql','1121','24','T0','c','3','2','345','346','23','0','1','0','343','25',''),
('6213','sql','1121','25','chd__dtm_utilisateur','c','3','2','350','369','23','0','2','0','343','69',''),
('6214','sql','1121','26','champ','f','2','0','380','384','4','2','8','1','385','29',''),
('6215','sql','1121','27','T0','c','3','2','387','388','26','0','1','0','385','28',''),
('6216','sql','1121','28','chd__dtc_utilisateur','c','3','2','392','411','26','0','2','0','385','69',''),
('6217','sql','1121','29','champ','f','2','0','422','426','4','2','9','1','427','32',''),
('6218','sql','1121','30','T0','c','3','2','429','430','29','0','1','0','427','31',''),
('6219','sql','1121','31','chx_acces_utilisateur','c','3','2','434','454','29','0','2','0','427','69',''),
('6220','sql','1121','32','champ','f','2','0','465','469','4','2','10','1','470','35',''),
('6221','sql','1121','33','T1','c','3','2','472','473','32','0','1','0','470','34',''),
('6222','sql','1121','34','chp_nom_acces','c','3','2','477','489','32','0','2','0','470','69',''),
('6223','sql','1121','35','champ','f','2','0','500','504','4','2','11','1','505','69',''),
('6224','sql','1121','36','T0','c','3','2','507','508','35','0','1','0','505','37',''),
('6225','sql','1121','37','che_actif_utilisateur','c','3','2','512','532','35','0','2','0','505','69',''),
('6226','sql','1121','38','provenance','f','1','0','545','554','1','2','3','5','555','63',''),
('6227','sql','1121','39','table_reference','f','2','0','563','577','38','1','1','4','578','47',''),
('6228','sql','1121','40','source','f','3','0','589','594','39','1','1','3','595','69',''),
('6229','sql','1121','41','nom_de_la_table','f','4','0','596','610','40','3','1','2','611','69',''),
('6230','sql','1121','42','tbl_utilisateurs','c','5','0','612','627','41','0','1','0','611','43',''),
('6231','sql','1121','43','alias','f','5','0','629','633','41','1','2','1','634','45',''),
('6232','sql','1121','44','T0','c','6','0','635','636','43','0','1','0','634','69',''),
('6233','sql','1121','45','base','f','5','0','639','642','41','1','3','1','643','69',''),
('6234','sql','1121','46','b1','c','6','0','644','645','45','0','1','0','643','69',''),
('6235','sql','1121','47','jointure_gauche','f','2','0','665','679','38','2','2','4','680','69',''),
('6236','sql','1121','48','source','f','3','0','691','696','47','1','1','3','697','55',''),
('6237','sql','1121','49','nom_de_la_table','f','4','0','698','712','48','3','1','2','713','69',''),
('6238','sql','1121','50','tbl_acces','c','5','0','714','722','49','0','1','0','713','51',''),
('6239','sql','1121','51','alias','f','5','0','724','728','49','1','2','1','729','53',''),
('6240','sql','1121','52','T1','c','6','0','730','731','51','0','1','0','729','69',''),
('6241','sql','1121','53','base','f','5','0','734','737','49','1','3','1','738','69',''),
('6242','sql','1121','54','b1','c','6','0','739','740','53','0','1','0','738','69',''),
('6243','sql','1121','55','contrainte','f','3','0','755','764','47','1','2','3','765','69',''),
('6244','sql','1121','56','egal','f','4','0','766','769','55','2','1','2','770','69',''),
('6245','sql','1121','57','champ','f','5','0','771','775','56','2','1','1','776','60',''),
('6246','sql','1121','58','T1','c','6','0','777','778','57','0','1','0','776','59',''),
('6247','sql','1121','59','chi_id_acces','c','6','0','780','791','57','0','2','0','776','69',''),
('6248','sql','1121','60','champ','f','5','0','794','798','56','2','2','1','799','69',''),
('6249','sql','1121','61','T0','c','6','0','800','801','60','0','1','0','799','62',''),
('6250','sql','1121','62','chx_acces_utilisateur','c','6','0','803','823','60','0','2','0','799','69',''),
('6251','sql','1121','63','conditions','f','1','0','845','854','1','1','4','3','855','69',''),
('6252','sql','1121','64','egal','f','2','0','856','859','63','2','1','2','860','69',''),
('6253','sql','1121','65','champ','f','3','0','861','865','64','2','1','1','866','68',''),
('6254','sql','1121','66','T0','c','4','2','868','869','65','0','1','0','866','67',''),
('6255','sql','1121','67','chi_id_utilisateur','c','4','2','873','890','65','0','2','0','866','69',''),
('6256','sql','1121','68',':T0_chi_id_utilisateur','c','3','0','894','915','64','0','2','0','866','69',''),
('6257','sql','1120','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6258','sql','1120','1','insérer','f','0','0','0','6','0','3','1','6','7','24',''),
('6259','sql','1120','2','base_de_reference','f','1','0','12','28','1','1','1','1','29','4',''),
('6260','sql','1120','3','1','c','2','0','30','30','2','0','1','0','29','24',''),
('6261','sql','1120','4','valeurs','f','1','0','37','43','1','3','2','3','44','17',''),
('6262','sql','1120','5','affecte','f','2','0','45','51','4','2','1','2','52','9',''),
('6263','sql','1120','6','champ','f','3','0','53','57','5','1','1','1','58','8',''),
('6264','sql','1120','7','chp_nom_de_connexion_utilisateur','c','4','2','60','91','6','0','1','0','58','24',''),
('6265','sql','1120','8',':chp_nom_de_connexion_utilisateur','c','3','0','95','127','5','0','2','0','58','24',''),
('6266','sql','1120','9','affecte','f','2','0','130','136','4','2','2','2','137','13',''),
('6267','sql','1120','10','champ','f','3','0','138','142','9','1','1','1','143','12',''),
('6268','sql','1120','11','chx_acces_utilisateur','c','4','2','145','165','10','0','1','0','143','24',''),
('6269','sql','1120','12',':chx_acces_utilisateur','c','3','0','169','190','9','0','2','0','143','24',''),
('6270','sql','1120','13','affecte','f','2','0','193','199','4','2','3','2','200','24',''),
('6271','sql','1120','14','champ','f','3','0','201','205','13','1','1','1','206','16',''),
('6272','sql','1120','15','che_actif_utilisateur','c','4','2','208','228','14','0','1','0','206','24',''),
('6273','sql','1120','16',':che_actif_utilisateur','c','3','0','232','253','13','0','2','0','206','24',''),
('6274','sql','1120','17','provenance','f','1','0','261','270','1','1','3','5','271','24',''),
('6275','sql','1120','18','table_reference','f','2','0','279','293','17','1','1','4','294','24',''),
('6276','sql','1120','19','source','f','3','0','305','310','18','1','1','3','311','24',''),
('6277','sql','1120','20','nom_de_la_table','f','4','0','312','326','19','2','1','2','327','24',''),
('6278','sql','1120','21','tbl_utilisateurs','c','5','0','328','343','20','0','1','0','327','22',''),
('6279','sql','1120','22','base','f','5','0','345','348','20','1','2','1','349','24',''),
('6280','sql','1120','23','b1','c','6','0','350','351','22','0','1','0','349','24',''),
('6281','sql','1119','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6282','sql','1119','1','sélectionner','f','0','0','0','11','0','4','1','6','12','106',''),
('6283','sql','1119','2','valeurs','f','1','0','17','23','1','8','1','2','24','27',''),
('6284','sql','1119','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('6285','sql','1119','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('6286','sql','1119','5','chi_id_utilisateur','c','3','2','44','61','3','0','2','0','37','106',''),
('6287','sql','1119','6','champ','f','2','0','72','76','2','2','2','1','77','9',''),
('6288','sql','1119','7','T0','c','3','2','79','80','6','0','1','0','77','8',''),
('6289','sql','1119','8','chp_nom_de_connexion_utilisateur','c','3','2','84','115','6','0','2','0','77','106',''),
('6290','sql','1119','9','champ','f','2','0','126','130','2','2','3','1','131','12',''),
('6291','sql','1119','10','T0','c','3','2','133','134','9','0','1','0','131','11',''),
('6292','sql','1119','11','chp_mot_de_passe_utilisateur','c','3','2','138','165','9','0','2','0','131','106',''),
('6293','sql','1119','12','champ','f','2','0','176','180','2','2','4','1','181','15',''),
('6294','sql','1119','13','T0','c','3','2','183','184','12','0','1','0','181','14',''),
('6295','sql','1119','14','chi_compteur1_utilisateur','c','3','2','188','212','12','0','2','0','181','106',''),
('6296','sql','1119','15','champ','f','2','0','223','227','2','2','5','1','228','18',''),
('6297','sql','1119','16','T0','c','3','2','230','231','15','0','1','0','228','17',''),
('6298','sql','1119','17','chx_acces_utilisateur','c','3','2','235','255','15','0','2','0','228','106',''),
('6299','sql','1119','18','champ','f','2','0','266','270','2','2','6','1','271','21',''),
('6300','sql','1119','19','T1','c','3','2','273','274','18','0','1','0','271','20',''),
('6301','sql','1119','20','chp_nom_acces','c','3','2','278','290','18','0','2','0','271','106',''),
('6302','sql','1119','21','champ','f','2','0','301','305','2','2','7','1','306','24',''),
('6303','sql','1119','22','T0','c','3','2','308','309','21','0','1','0','306','23',''),
('6304','sql','1119','23','che_actif_utilisateur','c','3','2','313','333','21','0','2','0','306','106',''),
('6305','sql','1119','24','champ','f','2','0','344','348','2','2','8','1','349','106',''),
('6306','sql','1119','25','T1','c','3','2','351','352','24','0','1','0','349','26',''),
('6307','sql','1119','26','che_actif_acces','c','3','2','356','370','24','0','2','0','349','106',''),
('6308','sql','1119','27','provenance','f','1','0','383','392','1','2','2','5','393','52',''),
('6309','sql','1119','28','table_reference','f','2','0','401','415','27','1','1','4','416','36',''),
('6310','sql','1119','29','source','f','3','0','427','432','28','1','1','3','433','106',''),
('6311','sql','1119','30','nom_de_la_table','f','4','0','434','448','29','3','1','2','449','106',''),
('6312','sql','1119','31','tbl_utilisateurs','c','5','0','450','465','30','0','1','0','449','32',''),
('6313','sql','1119','32','alias','f','5','0','467','471','30','1','2','1','472','34',''),
('6314','sql','1119','33','T0','c','6','0','473','474','32','0','1','0','472','106',''),
('6315','sql','1119','34','base','f','5','0','477','480','30','1','3','1','481','106',''),
('6316','sql','1119','35','b1','c','6','0','482','483','34','0','1','0','481','106',''),
('6317','sql','1119','36','jointure_gauche','f','2','0','503','517','27','2','2','4','518','106',''),
('6318','sql','1119','37','source','f','3','0','529','534','36','1','1','3','535','44',''),
('6319','sql','1119','38','nom_de_la_table','f','4','0','536','550','37','3','1','2','551','106',''),
('6320','sql','1119','39','tbl_acces','c','5','0','552','560','38','0','1','0','551','40',''),
('6321','sql','1119','40','alias','f','5','0','562','566','38','1','2','1','567','42',''),
('6322','sql','1119','41','T1','c','6','0','568','569','40','0','1','0','567','106',''),
('6323','sql','1119','42','base','f','5','0','572','575','38','1','3','1','576','106',''),
('6324','sql','1119','43','b1','c','6','0','577','578','42','0','1','0','576','106',''),
('6325','sql','1119','44','contrainte','f','3','0','593','602','36','1','2','3','603','106',''),
('6326','sql','1119','45','egal','f','4','0','604','607','44','2','1','2','608','106',''),
('6327','sql','1119','46','champ','f','5','0','609','613','45','2','1','1','614','49',''),
('6328','sql','1119','47','T1','c','6','0','615','616','46','0','1','0','614','48',''),
('6329','sql','1119','48','chi_id_acces','c','6','0','618','629','46','0','2','0','614','106',''),
('6330','sql','1119','49','champ','f','5','0','632','636','45','2','2','1','637','106',''),
('6331','sql','1119','50','T0','c','6','0','638','639','49','0','1','0','637','51',''),
('6332','sql','1119','51','chx_acces_utilisateur','c','6','0','641','661','49','0','2','0','637','106',''),
('6333','sql','1119','52','conditions','f','1','0','683','692','1','1','3','4','693','94',''),
('6334','sql','1119','53','et','f','2','0','701','702','52','8','1','3','703','106',''),
('6335','sql','1119','54','egal','f','3','0','714','717','53','2','1','2','718','59',''),
('6336','sql','1119','55','champ','f','4','0','719','723','54','2','1','1','724','58',''),
('6337','sql','1119','56','T0','c','5','2','726','727','55','0','1','0','724','57',''),
('6338','sql','1119','57','chi_id_utilisateur','c','5','2','731','748','55','0','2','0','724','106',''),
('6339','sql','1119','58',':T0_chi_id_utilisateur','c','4','0','752','773','54','0','2','0','724','106',''),
('6340','sql','1119','59','comme','f','3','0','786','790','53','2','2','2','791','64',''),
('6341','sql','1119','60','champ','f','4','0','792','796','59','2','1','1','797','63',''),
('6342','sql','1119','61','T0','c','5','2','799','800','60','0','1','0','797','62',''),
('6343','sql','1119','62','chp_nom_de_connexion_utilisateur','c','5','2','804','835','60','0','2','0','797','106',''),
('6344','sql','1119','63',':T0_chp_nom_de_connexion_utilisateur','c','4','0','839','874','59','0','2','0','797','106',''),
('6345','sql','1119','64','egal','f','3','0','887','890','53','2','3','2','891','69',''),
('6346','sql','1119','65','champ','f','4','0','892','896','64','2','1','1','897','68',''),
('6347','sql','1119','66','T0','c','5','2','899','900','65','0','1','0','897','67',''),
('6348','sql','1119','67','che_actif_utilisateur','c','5','2','904','924','65','0','2','0','897','106',''),
('6349','sql','1119','68',':T0_che_actif_utilisateur','c','4','0','928','952','64','0','2','0','897','106',''),
('6350','sql','1119','69','egal','f','3','0','965','968','53','2','4','2','969','74',''),
('6351','sql','1119','70','champ','f','4','0','970','974','69','2','1','1','975','73',''),
('6352','sql','1119','71','T0','c','5','2','977','978','70','0','1','0','975','72',''),
('6353','sql','1119','72','chx_acces_utilisateur','c','5','2','982','1002','70','0','2','0','975','106',''),
('6354','sql','1119','73',':T0_chx_acces_utilisateur','c','4','0','1006','1030','69','0','2','0','975','106',''),
('6355','sql','1119','74','comme','f','3','0','1043','1047','53','2','5','2','1048','79',''),
('6356','sql','1119','75','champ','f','4','0','1049','1053','74','2','1','1','1054','78',''),
('6357','sql','1119','76','T1','c','5','2','1056','1057','75','0','1','0','1054','77',''),
('6358','sql','1119','77','chp_nom_acces','c','5','2','1061','1073','75','0','2','0','1054','106',''),
('6359','sql','1119','78',':T1_chp_nom_acces','c','4','0','1077','1093','74','0','2','0','1054','106',''),
('6360','sql','1119','79','egal','f','3','0','1106','1109','53','2','6','2','1110','84',''),
('6361','sql','1119','80','champ','f','4','0','1111','1115','79','2','1','1','1116','83',''),
('6362','sql','1119','81','T1','c','5','2','1118','1119','80','0','1','0','1116','82',''),
('6363','sql','1119','82','che_actif_acces','c','5','2','1123','1137','80','0','2','0','1116','106',''),
('6364','sql','1119','83',':T1_che_actif_acces','c','4','0','1141','1159','79','0','2','0','1116','106',''),
('6365','sql','1119','84','supegal','f','3','0','1172','1178','53','2','7','2','1179','89',''),
('6366','sql','1119','85','champ','f','4','0','1180','1184','84','2','1','1','1185','88',''),
('6367','sql','1119','86','T0','c','5','2','1187','1188','85','0','1','0','1185','87',''),
('6368','sql','1119','87','chi_compteur1_utilisateur','c','5','2','1192','1216','85','0','2','0','1185','106',''),
('6369','sql','1119','88',':T0_chi_compteur1_utilisateur','c','4','0','1220','1248','84','0','2','0','1185','106',''),
('6370','sql','1119','89','pas_dans','f','3','0','1261','1268','53','2','8','2','1269','106',''),
('6371','sql','1119','90','champ','f','4','0','1270','1274','89','2','1','1','1275','93',''),
('6372','sql','1119','91','T0','c','5','2','1277','1278','90','0','1','0','1275','92',''),
('6373','sql','1119','92','chx_acces_utilisateur','c','5','2','1282','1302','90','0','2','0','1275','106',''),
('6374','sql','1119','93',':acces_pas_dans','c','4','0','1306','1320','89','0','2','0','1275','106',''),
('6375','sql','1119','94','complements','f','1','0','1340','1350','1','2','4','4','1351','106',''),
('6376','sql','1119','95','trier_par','f','2','0','1359','1367','94','1','1','3','1368','101',''),
('6377','sql','1119','96','','f','3','0','1359','1367','95','2','1','2','1369','106',''),
('6378','sql','1119','97','champ','f','4','0','1370','1374','96','2','1','1','1375','100',''),
('6379','sql','1119','98','T0','c','5','2','1377','1378','97','0','1','0','1375','99',''),
('6380','sql','1119','99','chi_id_utilisateur','c','5','2','1382','1399','97','0','2','0','1375','106',''),
('6381','sql','1119','100','décroissant','f','4','0','1403','1413','96','0','2','0','1414','106',''),
('6382','sql','1119','101','limité_à','f','2','0','1426','1433','94','2','2','2','1434','106',''),
('6383','sql','1119','102','quantité','f','3','0','1435','1442','101','1','1','1','1443','104',''),
('6384','sql','1119','103',':quantitee','c','4','0','1444','1453','102','0','1','0','1443','106',''),
('6385','sql','1119','104','début','f','3','0','1456','1460','101','1','2','1','1461','106',''),
('6386','sql','1119','105',':debut','c','4','0','1462','1467','104','0','1','0','1461','106',''),
('6387','sql','1114','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6388','sql','1114','1','supprimer','f','0','0','0','8','0','2','1','6','9','20',''),
('6389','sql','1114','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('6390','sql','1114','3','table_reference','f','2','0','32','46','2','1','1','4','47','20',''),
('6391','sql','1114','4','source','f','3','0','58','63','3','1','1','3','64','20',''),
('6392','sql','1114','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','20',''),
('6393','sql','1114','6','tbl_taches','c','5','0','81','90','5','0','1','0','80','7',''),
('6394','sql','1114','7','base','f','5','0','92','95','5','1','2','1','96','20',''),
('6395','sql','1114','8','b1','c','6','0','97','98','7','0','1','0','96','20',''),
('6396','sql','1114','9','conditions','f','1','0','120','129','1','1','2','4','130','20',''),
('6397','sql','1114','10','et','f','2','0','138','139','9','2','1','3','140','20',''),
('6398','sql','1114','11','egal','f','3','0','141','144','10','2','1','2','145','15',''),
('6399','sql','1114','12','champ','f','4','0','146','150','11','1','1','1','151','14',''),
('6400','sql','1114','13','chi_id_tache','c','5','2','153','164','12','0','1','0','151','20',''),
('6401','sql','1114','14',':chi_id_tache','c','4','0','168','180','11','0','2','0','151','20',''),
('6402','sql','1114','15','egal','f','3','0','183','186','10','2','2','2','187','20',''),
('6403','sql','1114','16','champ','f','4','0','188','192','15','1','1','1','193','18',''),
('6404','sql','1114','17','chx_utilisateur_tache','c','5','2','195','215','16','0','1','0','193','20',''),
('6405','sql','1114','18','session','f','4','0','219','225','15','1','2','1','226','20',''),
('6406','sql','1114','19','chi_id_utilisateur','c','5','0','227','244','18','0','1','0','226','20',''),
('6407','sql','1113','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6408','sql','1113','1','modifier','f','0','0','0','7','0','3','1','6','8','35',''),
('6409','sql','1113','2','valeurs','f','1','0','13','19','1','3','1','3','20','15',''),
('6410','sql','1113','3','affecte','f','2','0','21','27','2','2','1','2','28','7',''),
('6411','sql','1113','4','champ','f','3','0','29','33','3','1','1','1','34','6',''),
('6412','sql','1113','5','chp_texte_tache','c','4','2','36','50','4','0','1','0','34','35',''),
('6413','sql','1113','6',':n_chp_texte_tache','c','3','0','54','71','3','0','2','0','34','35',''),
('6414','sql','1113','7','affecte','f','2','0','74','80','2','2','2','2','81','11',''),
('6415','sql','1113','8','champ','f','3','0','82','86','7','1','1','1','87','10',''),
('6416','sql','1113','9','che_priorite_tache','c','4','2','89','106','8','0','1','0','87','35',''),
('6417','sql','1113','10',':n_che_priorite_tache','c','3','0','110','130','7','0','2','0','87','35',''),
('6418','sql','1113','11','affecte','f','2','0','133','139','2','2','3','2','140','35',''),
('6419','sql','1113','12','champ','f','3','0','141','145','11','1','1','1','146','14',''),
('6420','sql','1113','13','chd__dtm_tache','c','4','2','148','161','12','0','1','0','146','35',''),
('6421','sql','1113','14',':n_chd__dtm_tache','c','3','0','165','181','11','0','2','0','146','35',''),
('6422','sql','1113','15','provenance','f','1','0','189','198','1','1','2','5','199','24',''),
('6423','sql','1113','16','table_reference','f','2','0','207','221','15','1','1','4','222','35',''),
('6424','sql','1113','17','source','f','3','0','233','238','16','1','1','3','239','35',''),
('6425','sql','1113','18','nom_de_la_table','f','4','0','240','254','17','3','1','2','255','35',''),
('6426','sql','1113','19','tbl_taches','c','5','0','256','265','18','0','1','0','255','20',''),
('6427','sql','1113','20','alias','f','5','0','267','271','18','1','2','1','272','22',''),
('6428','sql','1113','21','T0','c','6','0','273','274','20','0','1','0','272','35',''),
('6429','sql','1113','22','base','f','5','0','277','280','18','1','3','1','281','35',''),
('6430','sql','1113','23','b1','c','6','0','282','283','22','0','1','0','281','35',''),
('6431','sql','1113','24','conditions','f','1','0','305','314','1','1','3','4','315','35',''),
('6432','sql','1113','25','et','f','2','0','323','324','24','2','1','3','325','35',''),
('6433','sql','1113','26','egal','f','3','0','326','329','25','2','1','2','330','30',''),
('6434','sql','1113','27','champ','f','4','0','331','335','26','1','1','1','336','29',''),
('6435','sql','1113','28','chi_id_tache','c','5','2','338','349','27','0','1','0','336','35',''),
('6436','sql','1113','29',':c_chi_id_tache','c','4','0','353','367','26','0','2','0','336','35',''),
('6437','sql','1113','30','egal','f','3','0','370','373','25','2','2','2','374','35',''),
('6438','sql','1113','31','champ','f','4','0','375','379','30','1','1','1','380','33',''),
('6439','sql','1113','32','chx_utilisateur_tache','c','5','2','382','402','31','0','1','0','380','35',''),
('6440','sql','1113','33','session','f','4','0','406','412','30','1','2','1','413','35',''),
('6441','sql','1113','34','chi_id_utilisateur','c','5','0','414','431','33','0','1','0','413','35',''),
('6442','sql','1112','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6443','sql','1112','1','sélectionner','f','0','0','0','11','0','3','1','6','12','56',''),
('6444','sql','1112','2','valeurs','f','1','0','17','23','1','5','1','2','24','18',''),
('6445','sql','1112','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('6446','sql','1112','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('6447','sql','1112','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','56',''),
('6448','sql','1112','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('6449','sql','1112','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('6450','sql','1112','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','56',''),
('6451','sql','1112','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('6452','sql','1112','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('6453','sql','1112','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','56',''),
('6454','sql','1112','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('6455','sql','1112','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('6456','sql','1112','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','56',''),
('6457','sql','1112','15','champ','f','2','0','186','190','2','2','5','1','191','56',''),
('6458','sql','1112','16','T1','c','3','2','193','194','15','0','1','0','191','17',''),
('6459','sql','1112','17','chp_nom_de_connexion_utilisateur','c','3','2','198','229','15','0','2','0','191','56',''),
('6460','sql','1112','18','provenance','f','1','0','242','251','1','2','2','5','252','43',''),
('6461','sql','1112','19','table_reference','f','2','0','260','274','18','1','1','4','275','27',''),
('6462','sql','1112','20','source','f','3','0','286','291','19','1','1','3','292','56',''),
('6463','sql','1112','21','nom_de_la_table','f','4','0','293','307','20','3','1','2','308','56',''),
('6464','sql','1112','22','tbl_taches','c','5','0','309','318','21','0','1','0','308','23',''),
('6465','sql','1112','23','alias','f','5','0','320','324','21','1','2','1','325','25',''),
('6466','sql','1112','24','T0','c','6','0','326','327','23','0','1','0','325','56',''),
('6467','sql','1112','25','base','f','5','0','330','333','21','1','3','1','334','56',''),
('6468','sql','1112','26','b1','c','6','0','335','336','25','0','1','0','334','56',''),
('6469','sql','1112','27','jointure_gauche','f','2','0','356','370','18','2','2','4','371','56',''),
('6470','sql','1112','28','source','f','3','0','382','387','27','1','1','3','388','35',''),
('6471','sql','1112','29','nom_de_la_table','f','4','0','389','403','28','3','1','2','404','56',''),
('6472','sql','1112','30','tbl_utilisateurs','c','5','0','405','420','29','0','1','0','404','31',''),
('6473','sql','1112','31','alias','f','5','0','422','426','29','1','2','1','427','33',''),
('6474','sql','1112','32','T1','c','6','0','428','429','31','0','1','0','427','56',''),
('6475','sql','1112','33','base','f','5','0','432','435','29','1','3','1','436','56',''),
('6476','sql','1112','34','b1','c','6','0','437','438','33','0','1','0','436','56',''),
('6477','sql','1112','35','contrainte','f','3','0','453','462','27','1','2','3','463','56',''),
('6478','sql','1112','36','egal','f','4','0','464','467','35','2','1','2','468','56',''),
('6479','sql','1112','37','champ','f','5','0','469','473','36','2','1','1','474','40',''),
('6480','sql','1112','38','T1','c','6','0','475','476','37','0','1','0','474','39',''),
('6481','sql','1112','39','chi_id_utilisateur','c','6','0','478','495','37','0','2','0','474','56',''),
('6482','sql','1112','40','champ','f','5','0','498','502','36','2','2','1','503','56',''),
('6483','sql','1112','41','T0','c','6','0','504','505','40','0','1','0','503','42',''),
('6484','sql','1112','42','chx_utilisateur_tache','c','6','0','507','527','40','0','2','0','503','56',''),
('6485','sql','1112','43','conditions','f','1','0','549','558','1','1','3','4','559','56',''),
('6486','sql','1112','44','et','f','2','0','567','568','43','2','1','3','569','56',''),
('6487','sql','1112','45','egal','f','3','0','570','573','44','2','1','2','574','50',''),
('6488','sql','1112','46','champ','f','4','0','575','579','45','2','1','1','580','49',''),
('6489','sql','1112','47','T0','c','5','2','582','583','46','0','1','0','580','48',''),
('6490','sql','1112','48','chi_id_tache','c','5','2','587','598','46','0','2','0','580','56',''),
('6491','sql','1112','49',':T0_chi_id_tache','c','4','0','602','617','45','0','2','0','580','56',''),
('6492','sql','1112','50','egal','f','3','0','620','623','44','2','2','2','624','56',''),
('6493','sql','1112','51','champ','f','4','0','625','629','50','2','1','1','630','54',''),
('6494','sql','1112','52','T0','c','5','2','632','633','51','0','1','0','630','53',''),
('6495','sql','1112','53','chx_utilisateur_tache','c','5','2','637','657','51','0','2','0','630','56',''),
('6496','sql','1112','54','session','f','4','0','661','667','50','1','2','1','668','56',''),
('6497','sql','1112','55','chi_id_utilisateur','c','5','0','669','686','54','0','1','0','668','56',''),
('6498','sql','1111','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6499','sql','1111','1','insérer','f','0','0','0','6','0','2','1','6','7','31',''),
('6500','sql','1111','2','valeurs','f','1','0','12','18','1','5','1','3','19','24',''),
('6501','sql','1111','3','affecte','f','2','0','27','33','2','2','1','2','34','8',''),
('6502','sql','1111','4','champ','f','3','0','35','39','3','1','1','1','40','6',''),
('6503','sql','1111','5','chx_utilisateur_tache','c','4','2','42','62','4','0','1','0','40','31',''),
('6504','sql','1111','6','session','f','3','0','66','72','3','1','2','1','73','31',''),
('6505','sql','1111','7','chi_id_utilisateur','c','4','0','74','91','6','0','1','0','73','31',''),
('6506','sql','1111','8','affecte','f','2','0','102','108','2','2','2','2','109','12',''),
('6507','sql','1111','9','champ','f','3','0','110','114','8','1','1','1','115','11',''),
('6508','sql','1111','10','chp_texte_tache','c','4','2','117','131','9','0','1','0','115','31',''),
('6509','sql','1111','11',':chp_texte_tache','c','3','0','135','150','8','0','2','0','115','31',''),
('6510','sql','1111','12','affecte','f','2','0','160','166','2','2','3','2','167','16',''),
('6511','sql','1111','13','champ','f','3','0','168','172','12','1','1','1','173','15',''),
('6512','sql','1111','14','che_priorite_tache','c','4','2','175','192','13','0','1','0','173','31',''),
('6513','sql','1111','15',':che_priorite_tache','c','3','0','196','214','12','0','2','0','173','31',''),
('6514','sql','1111','16','affecte','f','2','0','224','230','2','2','4','2','231','20',''),
('6515','sql','1111','17','champ','f','3','0','232','236','16','1','1','1','237','19',''),
('6516','sql','1111','18','chd__dtm_tache','c','4','2','239','252','17','0','1','0','237','31',''),
('6517','sql','1111','19',':chd__dtm_tache','c','3','0','256','270','16','0','2','0','237','31',''),
('6518','sql','1111','20','affecte','f','2','0','280','286','2','2','5','2','287','31',''),
('6519','sql','1111','21','champ','f','3','0','288','292','20','1','1','1','293','23',''),
('6520','sql','1111','22','chd__dtc_tache','c','4','2','295','308','21','0','1','0','293','31',''),
('6521','sql','1111','23',':chd__dtc_tache','c','3','0','312','326','20','0','2','0','293','31',''),
('6522','sql','1111','24','provenance','f','1','0','338','347','1','1','2','5','348','31',''),
('6523','sql','1111','25','table_reference','f','2','0','356','370','24','1','1','4','371','31',''),
('6524','sql','1111','26','source','f','3','0','382','387','25','1','1','3','388','31',''),
('6525','sql','1111','27','nom_de_la_table','f','4','0','389','403','26','2','1','2','404','31',''),
('6526','sql','1111','28','tbl_taches','c','5','0','405','414','27','0','1','0','404','29',''),
('6527','sql','1111','29','base','f','5','0','416','419','27','1','2','1','420','31',''),
('6528','sql','1111','30','b1','c','6','0','421','422','29','0','1','0','420','31',''),
('6529','sql','1110','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6530','sql','1110','1','sélectionner','f','0','0','0','11','0','4','1','6','12','73',''),
('6531','sql','1110','2','valeurs','f','1','0','17','23','1','7','1','2','24','24',''),
('6532','sql','1110','3','champ','f','2','0','32','36','2','2','1','1','37','6',''),
('6533','sql','1110','4','T0','c','3','2','39','40','3','0','1','0','37','5',''),
('6534','sql','1110','5','chi_id_tache','c','3','2','44','55','3','0','2','0','37','73',''),
('6535','sql','1110','6','champ','f','2','0','66','70','2','2','2','1','71','9',''),
('6536','sql','1110','7','T0','c','3','2','73','74','6','0','1','0','71','8',''),
('6537','sql','1110','8','chx_utilisateur_tache','c','3','2','78','98','6','0','2','0','71','73',''),
('6538','sql','1110','9','champ','f','2','0','109','113','2','2','3','1','114','12',''),
('6539','sql','1110','10','T0','c','3','2','116','117','9','0','1','0','114','11',''),
('6540','sql','1110','11','chp_texte_tache','c','3','2','121','135','9','0','2','0','114','73',''),
('6541','sql','1110','12','champ','f','2','0','146','150','2','2','4','1','151','15',''),
('6542','sql','1110','13','T0','c','3','2','153','154','12','0','1','0','151','14',''),
('6543','sql','1110','14','che_priorite_tache','c','3','2','158','175','12','0','2','0','151','73',''),
('6544','sql','1110','15','champ','f','2','0','186','190','2','2','5','1','191','18',''),
('6545','sql','1110','16','T0','c','3','2','193','194','15','0','1','0','191','17',''),
('6546','sql','1110','17','chd__dtm_tache','c','3','2','198','211','15','0','2','0','191','73',''),
('6547','sql','1110','18','champ','f','2','0','222','226','2','2','6','1','227','21',''),
('6548','sql','1110','19','T0','c','3','2','229','230','18','0','1','0','227','20',''),
('6549','sql','1110','20','chd__dtc_tache','c','3','2','234','247','18','0','2','0','227','73',''),
('6550','sql','1110','21','champ','f','2','0','258','262','2','2','7','1','263','73',''),
('6551','sql','1110','22','T0','c','3','2','265','266','21','0','1','0','263','23',''),
('6552','sql','1110','23','che__nur_tache','c','3','2','270','283','21','0','2','0','263','73',''),
('6553','sql','1110','24','provenance','f','1','0','296','305','1','1','2','5','306','33',''),
('6554','sql','1110','25','table_reference','f','2','0','314','328','24','1','1','4','329','73',''),
('6555','sql','1110','26','source','f','3','0','340','345','25','1','1','3','346','73',''),
('6556','sql','1110','27','nom_de_la_table','f','4','0','347','361','26','3','1','2','362','73',''),
('6557','sql','1110','28','tbl_taches','c','5','0','363','372','27','0','1','0','362','29',''),
('6558','sql','1110','29','alias','f','5','0','374','378','27','1','2','1','379','31',''),
('6559','sql','1110','30','T0','c','6','0','380','381','29','0','1','0','379','73',''),
('6560','sql','1110','31','base','f','5','0','384','387','27','1','3','1','388','73',''),
('6561','sql','1110','32','b1','c','6','0','389','390','31','0','1','0','388','73',''),
('6562','sql','1110','33','conditions','f','1','0','412','421','1','1','3','4','422','61',''),
('6563','sql','1110','34','et','f','2','0','430','431','33','5','1','3','432','73',''),
('6564','sql','1110','35','comme','f','3','0','443','447','34','2','1','2','448','40',''),
('6565','sql','1110','36','champ','f','4','0','449','453','35','2','1','1','454','39',''),
('6566','sql','1110','37','T0','c','5','2','456','457','36','0','1','0','454','38',''),
('6567','sql','1110','38','chp_texte_tache','c','5','2','461','475','36','0','2','0','454','73',''),
('6568','sql','1110','39',':T0_chp_texte_tache','c','4','0','479','497','35','0','2','0','454','73',''),
('6569','sql','1110','40','inf','f','3','0','510','512','34','2','2','2','513','45',''),
('6570','sql','1110','41','champ','f','4','0','514','518','40','2','1','1','519','44',''),
('6571','sql','1110','42','T0','c','5','2','521','522','41','0','1','0','519','43',''),
('6572','sql','1110','43','che_priorite_tache','c','5','2','526','543','41','0','2','0','519','73',''),
('6573','sql','1110','44',':T0_che_priorite_tache2','c','4','0','547','569','40','0','2','0','519','73',''),
('6574','sql','1110','45','egal','f','3','0','582','585','34','2','3','2','586','50',''),
('6575','sql','1110','46','champ','f','4','0','587','591','45','2','1','1','592','49',''),
('6576','sql','1110','47','T0','c','5','2','594','595','46','0','1','0','592','48',''),
('6577','sql','1110','48','che_priorite_tache','c','5','2','599','616','46','0','2','0','592','73',''),
('6578','sql','1110','49',':T0_che_priorite_tache','c','4','0','620','641','45','0','2','0','592','73',''),
('6579','sql','1110','50','egal','f','3','0','654','657','34','2','4','2','658','55',''),
('6580','sql','1110','51','champ','f','4','0','659','663','50','2','1','1','664','54',''),
('6581','sql','1110','52','T0','c','5','2','666','667','51','0','1','0','664','53',''),
('6582','sql','1110','53','chi_id_tache','c','5','2','671','682','51','0','2','0','664','73',''),
('6583','sql','1110','54',':T0_chi_id_tache','c','4','0','686','701','50','0','2','0','664','73',''),
('6584','sql','1110','55','egal','f','3','0','714','717','34','2','5','2','718','73',''),
('6585','sql','1110','56','champ','f','4','0','719','723','55','2','1','1','724','59',''),
('6586','sql','1110','57','T0','c','5','2','726','727','56','0','1','0','724','58',''),
('6587','sql','1110','58','chx_utilisateur_tache','c','5','2','731','751','56','0','2','0','724','73',''),
('6588','sql','1110','59','session','f','4','0','755','761','55','1','2','1','762','73',''),
('6589','sql','1110','60','chi_id_utilisateur','c','5','0','763','780','59','0','1','0','762','73',''),
('6590','sql','1110','61','complements','f','1','0','801','811','1','2','4','4','812','73',''),
('6591','sql','1110','62','trier_par','f','2','0','820','828','61','1','1','3','829','68',''),
('6592','sql','1110','63','','f','3','0','820','828','62','2','1','2','830','73',''),
('6593','sql','1110','64','champ','f','4','0','831','835','63','2','1','1','836','67',''),
('6594','sql','1110','65','T0','c','5','2','838','839','64','0','1','0','836','66',''),
('6595','sql','1110','66','che_priorite_tache','c','5','2','843','860','64','0','2','0','836','73',''),
('6596','sql','1110','67','croissant','f','4','0','864','872','63','0','2','0','873','73',''),
('6597','sql','1110','68','limité_à','f','2','0','885','892','61','2','2','2','893','73',''),
('6598','sql','1110','69','quantité','f','3','0','894','901','68','1','1','1','902','71',''),
('6599','sql','1110','70',':quantitee','c','4','0','903','912','69','0','1','0','902','73',''),
('6600','sql','1110','71','début','f','3','0','915','919','68','1','2','1','920','73',''),
('6601','sql','1110','72',':debut','c','4','0','921','926','71','0','1','0','920','73',''),
('6602','sql','1109','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6603','sql','1109','1','modifier','f','0','0','0','7','0','4','1','6','8','25',''),
('6604','sql','1109','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('6605','sql','1109','3','1','c','2','0','31','31','2','0','1','0','30','25',''),
('6606','sql','1109','4','valeurs','f','1','0','38','44','1','2','2','3','45','13',''),
('6607','sql','1109','5','affecte','f','2','0','46','52','4','2','1','2','53','9',''),
('6608','sql','1109','6','champ','f','3','0','54','58','5','1','1','1','59','8',''),
('6609','sql','1109','7','chp_nom_de_connexion_utilisateur','c','4','2','61','92','6','0','1','0','59','25',''),
('6610','sql','1109','8',':n_chp_nom_de_connexion_utilisateur','c','3','0','96','130','5','0','2','0','59','25',''),
('6611','sql','1109','9','affecte','f','2','0','133','139','4','2','2','2','140','25',''),
('6612','sql','1109','10','champ','f','3','0','141','145','9','1','1','1','146','12',''),
('6613','sql','1109','11','chp_mot_de_passe_utilisateur','c','4','2','148','175','10','0','1','0','146','25',''),
('6614','sql','1109','12',':n_chp_mot_de_passe_utilisateur','c','3','0','179','209','9','0','2','0','146','25',''),
('6615','sql','1109','13','provenance','f','1','0','217','226','1','1','3','5','227','20',''),
('6616','sql','1109','14','table_reference','f','2','0','235','249','13','1','1','4','250','25',''),
('6617','sql','1109','15','source','f','3','0','261','266','14','1','1','3','267','25',''),
('6618','sql','1109','16','nom_de_la_table','f','4','0','268','282','15','2','1','2','283','25',''),
('6619','sql','1109','17','tbl_utilisateurs','c','5','0','284','299','16','0','1','0','283','18',''),
('6620','sql','1109','18','base','f','5','0','301','304','16','1','2','1','305','25',''),
('6621','sql','1109','19','b1','c','6','0','306','307','18','0','1','0','305','25',''),
('6622','sql','1109','20','conditions','f','1','0','329','338','1','1','4','3','339','25',''),
('6623','sql','1109','21','egal','f','2','0','340','343','20','2','1','2','344','25',''),
('6624','sql','1109','22','champ','f','3','0','345','349','21','1','1','1','350','24',''),
('6625','sql','1109','23','chi_id_utilisateur','c','4','2','352','369','22','0','1','0','350','25',''),
('6626','sql','1109','24',':c_chi_id_utilisateur','c','3','0','373','393','21','0','2','0','350','25',''),
('6627','sql','1108','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6628','sql','1108','1','sélectionner','f','0','0','0','11','0','4','1','6','12','57',''),
('6629','sql','1108','2','base_de_reference','f','1','0','17','33','1','1','1','1','34','4',''),
('6630','sql','1108','3','1','c','2','0','35','35','2','0','1','0','34','57',''),
('6631','sql','1108','4','valeurs','f','1','0','42','48','1','7','2','2','49','26',''),
('6632','sql','1108','5','champ','f','2','0','57','61','4','2','1','1','62','8',''),
('6633','sql','1108','6','T0','c','3','2','64','65','5','0','1','0','62','7',''),
('6634','sql','1108','7','chi_id_utilisateur','c','3','2','69','86','5','0','2','0','62','57',''),
('6635','sql','1108','8','champ','f','2','0','97','101','4','2','2','1','102','11',''),
('6636','sql','1108','9','T0','c','3','2','104','105','8','0','1','0','102','10',''),
('6637','sql','1108','10','chp_nom_de_connexion_utilisateur','c','3','2','109','140','8','0','2','0','102','57',''),
('6638','sql','1108','11','champ','f','2','0','151','155','4','2','3','1','156','14',''),
('6639','sql','1108','12','T0','c','3','2','158','159','11','0','1','0','156','13',''),
('6640','sql','1108','13','chp_mot_de_passe_utilisateur','c','3','2','163','190','11','0','2','0','156','57',''),
('6641','sql','1108','14','champ','f','2','0','201','205','4','2','4','1','206','17',''),
('6642','sql','1108','15','T0','c','3','2','208','209','14','0','1','0','206','16',''),
('6643','sql','1108','16','chp_parametres_utilisateur','c','3','2','213','238','14','0','2','0','206','57',''),
('6644','sql','1108','17','champ','f','2','0','249','253','4','2','5','1','254','20',''),
('6645','sql','1108','18','T0','c','3','2','256','257','17','0','1','0','254','19',''),
('6646','sql','1108','19','chi_compteur1_utilisateur','c','3','2','261','285','17','0','2','0','254','57',''),
('6647','sql','1108','20','champ','f','2','0','296','300','4','2','6','1','301','23',''),
('6648','sql','1108','21','T0','c','3','2','303','304','20','0','1','0','301','22',''),
('6649','sql','1108','22','chx_acces_utilisateur','c','3','2','308','328','20','0','2','0','301','57',''),
('6650','sql','1108','23','champ','f','2','0','339','343','4','2','7','1','344','57',''),
('6651','sql','1108','24','T1','c','3','2','346','347','23','0','1','0','344','25',''),
('6652','sql','1108','25','chp_nom_acces','c','3','2','351','363','23','0','2','0','344','57',''),
('6653','sql','1108','26','provenance','f','1','0','376','385','1','2','3','5','386','51',''),
('6654','sql','1108','27','table_reference','f','2','0','394','408','26','1','1','4','409','35',''),
('6655','sql','1108','28','source','f','3','0','420','425','27','1','1','3','426','57',''),
('6656','sql','1108','29','nom_de_la_table','f','4','0','427','441','28','3','1','2','442','57',''),
('6657','sql','1108','30','tbl_utilisateurs','c','5','0','443','458','29','0','1','0','442','31',''),
('6658','sql','1108','31','alias','f','5','0','460','464','29','1','2','1','465','33',''),
('6659','sql','1108','32','T0','c','6','0','466','467','31','0','1','0','465','57',''),
('6660','sql','1108','33','base','f','5','0','470','473','29','1','3','1','474','57',''),
('6661','sql','1108','34','b1','c','6','0','475','476','33','0','1','0','474','57',''),
('6662','sql','1108','35','jointure_gauche','f','2','0','496','510','26','2','2','4','511','57',''),
('6663','sql','1108','36','source','f','3','0','522','527','35','1','1','3','528','43',''),
('6664','sql','1108','37','nom_de_la_table','f','4','0','529','543','36','3','1','2','544','57',''),
('6665','sql','1108','38','tbl_acces','c','5','0','545','553','37','0','1','0','544','39',''),
('6666','sql','1108','39','alias','f','5','0','555','559','37','1','2','1','560','41',''),
('6667','sql','1108','40','T1','c','6','0','561','562','39','0','1','0','560','57',''),
('6668','sql','1108','41','base','f','5','0','565','568','37','1','3','1','569','57',''),
('6669','sql','1108','42','b1','c','6','0','570','571','41','0','1','0','569','57',''),
('6670','sql','1108','43','contrainte','f','3','0','586','595','35','1','2','3','596','57',''),
('6671','sql','1108','44','egal','f','4','0','597','600','43','2','1','2','601','57',''),
('6672','sql','1108','45','champ','f','5','0','602','606','44','2','1','1','607','48','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 2000 */

/*================================================================================ DEBUT BLOC TABLE tbl_revs offset 3000 (3109) */
INSERT INTO tbl_revs (  chi_id_rev ,  chp_provenance_rev ,  chx_source_rev ,  chp_id_rev ,  chp_valeur_rev ,  chp_type_rev ,  chp_niveau_rev ,  chp_quotee_rev ,  chp_pos_premier_rev ,  chp_pos_dernier_rev ,  chp_parent_rev ,  chp_nbr_enfants_rev ,  chp_num_enfant_rev ,  chp_profondeur_rev ,  chp_pos_ouver_parenthese_rev ,  chp_enfant_suivant_rev ,  chp_commentaire_rev ) VALUES
('6673','sql','1108','46','T1','c','6','0','608','609','45','0','1','0','607','47',''),
('6674','sql','1108','47','chi_id_acces','c','6','0','611','622','45','0','2','0','607','57',''),
('6675','sql','1108','48','champ','f','5','0','625','629','44','2','2','1','630','57',''),
('6676','sql','1108','49','T0','c','6','0','631','632','48','0','1','0','630','50',''),
('6677','sql','1108','50','chx_acces_utilisateur','c','6','0','634','654','48','0','2','0','630','57',''),
('6678','sql','1108','51','conditions','f','1','0','676','685','1','1','4','3','686','57',''),
('6679','sql','1108','52','egal','f','2','0','687','690','51','2','1','2','691','57',''),
('6680','sql','1108','53','champ','f','3','0','692','696','52','2','1','1','697','56',''),
('6681','sql','1108','54','T0','c','4','2','699','700','53','0','1','0','697','55',''),
('6682','sql','1108','55','chi_id_utilisateur','c','4','2','704','721','53','0','2','0','697','57',''),
('6683','sql','1108','56',':T0_chi_id_utilisateur','c','3','0','725','746','52','0','2','0','697','57',''),
('6684','sql','1107','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6685','sql','1107','1','modifier','f','0','0','0','7','0','4','1','6','8','24',''),
('6686','sql','1107','2','base_de_reference','f','1','0','13','29','1','1','1','1','30','4',''),
('6687','sql','1107','3','1','c','2','0','31','31','2','0','1','0','30','24',''),
('6688','sql','1107','4','valeurs','f','1','0','38','44','1','1','2','4','45','12',''),
('6689','sql','1107','5','affecte','f','2','0','53','59','4','2','1','3','60','24',''),
('6690','sql','1107','6','champ','f','3','0','61','65','5','1','1','1','66','8',''),
('6691','sql','1107','7','chi_compteur1_utilisateur','c','4','2','68','92','6','0','1','0','66','24',''),
('6692','sql','1107','8','plus','f','3','0','96','99','5','2','2','2','100','24',''),
('6693','sql','1107','9','champ','f','4','0','101','105','8','1','1','1','106','11',''),
('6694','sql','1107','10','chi_compteur1_utilisateur','c','5','0','107','131','9','0','1','0','106','24',''),
('6695','sql','1107','11','1','c','4','0','134','134','8','0','2','0','106','24',''),
('6696','sql','1107','12','provenance','f','1','0','147','156','1','1','3','5','157','19',''),
('6697','sql','1107','13','table_reference','f','2','0','165','179','12','1','1','4','180','24',''),
('6698','sql','1107','14','source','f','3','0','191','196','13','1','1','3','197','24',''),
('6699','sql','1107','15','nom_de_la_table','f','4','0','198','212','14','2','1','2','213','24',''),
('6700','sql','1107','16','tbl_utilisateurs','c','5','0','214','229','15','0','1','0','213','17',''),
('6701','sql','1107','17','base','f','5','0','231','234','15','1','2','1','235','24',''),
('6702','sql','1107','18','b1','c','6','0','236','237','17','0','1','0','235','24',''),
('6703','sql','1107','19','conditions','f','1','0','259','268','1','1','4','3','269','24',''),
('6704','sql','1107','20','egal','f','2','0','270','273','19','2','1','2','274','24',''),
('6705','sql','1107','21','champ','f','3','0','275','279','20','1','1','1','280','23',''),
('6706','sql','1107','22','chi_id_utilisateur','c','4','2','282','299','21','0','1','0','280','24',''),
('6707','sql','1107','23',':c_chi_id_utilisateur','c','3','0','303','323','20','0','2','0','280','24',''),
('6708','sql','1101','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6709','sql','1101','1','sélectionner','f','0','0','0','11','0','4','1','6','12','60',''),
('6710','sql','1101','2','valeurs','f','1','0','17','23','1','3','1','2','24','12',''),
('6711','sql','1101','3','champ','f','2','0','25','29','2','2','1','1','30','6',''),
('6712','sql','1101','4','T0','c','3','2','32','33','3','0','1','0','30','5',''),
('6713','sql','1101','5','chp_mot_de_passe_utilisateur','c','3','2','37','64','3','0','2','0','30','60',''),
('6714','sql','1101','6','champ','f','2','0','68','72','2','2','2','1','73','9',''),
('6715','sql','1101','7','T0','c','3','2','75','76','6','0','1','0','73','8',''),
('6716','sql','1101','8','chi_id_utilisateur','c','3','2','80','97','6','0','2','0','73','60',''),
('6717','sql','1101','9','champ','f','2','0','101','105','2','2','3','1','106','60',''),
('6718','sql','1101','10','T0','c','3','2','108','109','9','0','1','0','106','11',''),
('6719','sql','1101','11','chx_acces_utilisateur','c','3','2','113','133','9','0','2','0','106','60',''),
('6720','sql','1101','12','provenance','f','1','0','142','151','1','2','2','5','152','37',''),
('6721','sql','1101','13','table_reference','f','2','0','160','174','12','1','1','4','175','21',''),
('6722','sql','1101','14','source','f','3','0','186','191','13','1','1','3','192','60',''),
('6723','sql','1101','15','nom_de_la_table','f','4','0','193','207','14','3','1','2','208','60',''),
('6724','sql','1101','16','tbl_utilisateurs','c','5','0','209','224','15','0','1','0','208','17',''),
('6725','sql','1101','17','alias','f','5','0','226','230','15','1','2','1','231','19',''),
('6726','sql','1101','18','T0','c','6','0','232','233','17','0','1','0','231','60',''),
('6727','sql','1101','19','base','f','5','0','236','239','15','1','3','1','240','60',''),
('6728','sql','1101','20','b1','c','6','0','241','242','19','0','1','0','240','60',''),
('6729','sql','1101','21','jointure_gauche','f','2','0','262','276','12','2','2','4','277','60',''),
('6730','sql','1101','22','source','f','3','0','288','293','21','1','1','3','294','29',''),
('6731','sql','1101','23','nom_de_la_table','f','4','0','295','309','22','3','1','2','310','60',''),
('6732','sql','1101','24','tbl_acces','c','5','0','311','319','23','0','1','0','310','25',''),
('6733','sql','1101','25','alias','f','5','0','321','325','23','1','2','1','326','27',''),
('6734','sql','1101','26','T1','c','6','0','327','328','25','0','1','0','326','60',''),
('6735','sql','1101','27','base','f','5','0','331','334','23','1','3','1','335','60',''),
('6736','sql','1101','28','b1','c','6','0','336','337','27','0','1','0','335','60',''),
('6737','sql','1101','29','contrainte','f','3','0','352','361','21','1','2','3','362','60',''),
('6738','sql','1101','30','egal','f','4','0','363','366','29','2','1','2','367','60',''),
('6739','sql','1101','31','champ','f','5','0','368','372','30','2','1','1','373','34',''),
('6740','sql','1101','32','T1','c','6','0','374','375','31','0','1','0','373','33',''),
('6741','sql','1101','33','chi_id_acces','c','6','0','377','388','31','0','2','0','373','60',''),
('6742','sql','1101','34','champ','f','5','0','391','395','30','2','2','1','396','60',''),
('6743','sql','1101','35','T0','c','6','0','397','398','34','0','1','0','396','36',''),
('6744','sql','1101','36','chx_acces_utilisateur','c','6','0','400','420','34','0','2','0','396','60',''),
('6745','sql','1101','37','conditions','f','1','0','442','451','1','1','3','4','452','54',''),
('6746','sql','1101','38','et','f','2','0','460','461','37','3','1','3','462','60',''),
('6747','sql','1101','39','egal','f','3','0','463','466','38','2','1','2','467','44',''),
('6748','sql','1101','40','champ','f','4','0','468','472','39','2','1','1','473','43',''),
('6749','sql','1101','41','T0','c','5','2','475','476','40','0','1','0','473','42',''),
('6750','sql','1101','42','chp_nom_de_connexion_utilisateur','c','5','2','480','511','40','0','2','0','473','60',''),
('6751','sql','1101','43',':T0_chp_nom_de_connexion_utilisateur','c','4','0','515','550','39','0','2','0','473','60',''),
('6752','sql','1101','44','egal','f','3','0','553','556','38','2','2','2','557','49',''),
('6753','sql','1101','45','champ','f','4','0','558','562','44','2','1','1','563','48',''),
('6754','sql','1101','46','T0','c','5','2','565','566','45','0','1','0','563','47',''),
('6755','sql','1101','47','che_actif_utilisateur','c','5','2','570','590','45','0','2','0','563','60',''),
('6756','sql','1101','48','1','c','4','0','594','594','44','0','2','0','563','60',''),
('6757','sql','1101','49','egal','f','3','0','597','600','38','2','3','2','601','60',''),
('6758','sql','1101','50','champ','f','4','0','602','606','49','2','1','1','607','53',''),
('6759','sql','1101','51','T1','c','5','2','609','610','50','0','1','0','607','52',''),
('6760','sql','1101','52','che_actif_acces','c','5','2','614','628','50','0','2','0','607','60',''),
('6761','sql','1101','53','1','c','4','0','632','632','49','0','2','0','607','60',''),
('6762','sql','1101','54','complements','f','1','0','645','655','1','1','4','3','656','60',''),
('6763','sql','1101','55','limité_à','f','2','0','657','664','54','2','1','2','665','60',''),
('6764','sql','1101','56','quantité','f','3','0','666','673','55','1','1','1','674','58',''),
('6765','sql','1101','57','1','c','4','0','675','675','56','0','1','0','674','60',''),
('6766','sql','1101','58','début','f','3','0','678','682','55','1','2','1','683','60',''),
('6767','sql','1101','59','0','c','4','0','684','684','58','0','1','0','683','60',''),
('6768','sql','2025','0','','i','-1','0','0','0','0','1','0','0','0','0',''),
('6769','sql','2025','1','supprimer','f','0','0','0','8','0','2','1','6','9','14',''),
('6770','sql','2025','2','provenance','f','1','0','14','23','1','1','1','5','24','9',''),
('6771','sql','2025','3','table_reference','f','2','0','32','46','2','1','1','4','47','14',''),
('6772','sql','2025','4','source','f','3','0','58','63','3','1','1','3','64','14',''),
('6773','sql','2025','5','nom_de_la_table','f','4','0','65','79','4','2','1','2','80','14',''),
('6774','sql','2025','6','tbl_taches','c','5','0','81','90','5','0','1','0','80','7',''),
('6775','sql','2025','7','base','f','5','0','92','95','5','1','2','1','96','14',''),
('6776','sql','2025','8','b1','c','6','0','97','98','7','0','1','0','96','14',''),
('6777','sql','2025','9','conditions','f','1','0','120','129','1','1','2','3','130','14',''),
('6778','sql','2025','10','egal','f','2','0','131','134','9','2','1','2','135','14',''),
('6779','sql','2025','11','champ','f','3','0','136','140','10','1','1','1','141','13',''),
('6780','sql','2025','12','chi_id_tache','c','4','2','143','154','11','0','1','0','141','14',''),
('6781','sql','2025','13',':chi_id_tache','c','3','0','158','170','10','0','2','0','141','14','');
/*================================================================================ FIN BLOC TABLE tbl_revs offset 3000 */
