CREATE TABLE tbl_zzzs(
/*
 meta(nom_de_la_table('tbl_zzzs'),
   table('tbl_zzzs'),
   genre_meta(table_de_base),permet_la_gestion_de(''),
   distinction_pour_liste('liste des zzzs'),
   distinction_pour_isad('d\'un zzz'),
   transform_table_sur_svg(translate(60.5,68.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_zzz'),
            nom_bref_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_zzz INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chp_nom_yyy'),
            nom_bref_du_champ('nom'),
            typologie(chp),
            genre(3),
            espece_du_champ(VARCHAR),
            longueur_du_champ(64)
            )
            */
             chp_nom_yyy VARCHAR(64) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_moi_zzz'),
            nom_bref_du_champ('moi'),
            typologie(chx),
            genre(8),
            espece_du_champ(INTEGER)
            )
            */
             chx_moi_zzz INTEGER REFERENCES tbl_zzzs(chi_id_zzz)  DEFAULT  NULL
    );

CREATE TABLE tbl_yyys(
/*
 meta(nom_de_la_table('tbl_yyys'),
   table('tbl_yyys'),
   genre_meta(table_de_base),permet_la_gestion_de(''),
   distinction_pour_liste('liste des yyys'),
   distinction_pour_isad('d\'un yyy'),
   transform_table_sur_svg(translate(310.5,217.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id_yyy'),
            nom_bref_du_champ('id'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER)
            )
            */
             chi_id_yyy INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_toto_yyy'),
            nom_bref_du_champ('toto'),
            typologie(chi),
            genre(7),
            espece_du_champ(INTEGER)
            )
            */
             chi_toto_yyy INTEGER DEFAULT  NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_id_zzz_yyyyyyyyy'),
            nom_bref_du_champ('id zzz'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_id_zzz_yyyyyyyyy INTEGER NOT NULL REFERENCES tbl_zzzs(chi_id_zzz) 
    );

CREATE TABLE tbl_zzz3s(
/*
 meta(nom_de_la_table('tbl_zzz3s'),
   table('tbl_zzz3s'),
   genre_meta(table_de_base),permet_la_gestion_de(''),
   distinction_pour_liste('liste des zzz2s'),
   distinction_pour_isad('d\'un zzz22222'),
   transform_table_sur_svg(translate(311.5,45.5))) 
*/
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chi_id1_z2'),
            nom_bref_du_champ('id1'),
            typologie(chi),
            genre(2),
            espece_du_champ(INTEGER),
            ordre_tri_liste_ecran(1),
            sens_tri_liste_ecran_decroissant(1)
            )
            */
             chi_id1_z2 INTEGER PRIMARY KEY NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('cht_xxxx_zzz2'),
            nom_bref_du_champ('xxxx'),
            typologie(chp),
            genre(17),
            espece_du_champ(TEXT),
            ordre_tri_liste_ecran(2)
            )
            */
             cht_xxxx_zzz2 VARCHAR(255) NOT NULL
    ,
    
            /*
            meta(
            genre_meta(champ),
            nom_du_champ('chx_xxxx_zzz2'),
            nom_bref_du_champ('xxxx'),
            typologie(chx),
            genre(4),
            espece_du_champ(INTEGER)
            )
            */
             chx_xxxx_zzz2 INTEGER NOT NULL REFERENCES tbl_zzzs(chi_id_zzz) 
    );

