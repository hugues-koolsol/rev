CREATE UNIQUE INDEX idx_0 ON `tbl_zzzs` 
        /* meta(nom_de_l_index(idx_3),genre_meta(index_de_table),message('')) */
         ( `chi_id_zzz` ) ;

CREATE UNIQUE INDEX idx_1 ON `tbl_yyys` 
        /* meta(nom_de_l_index(idx_1),genre_meta(index_de_table),message('')) */
         ( `chi_id_yyy` ) ;

CREATE INDEX idx_2 ON `tbl_yyys` 
        /* meta(nom_de_l_index(idx_2),genre_meta(index_de_table),message('')) */
         ( `chi_toto_yyy` ) ;

CREATE UNIQUE INDEX idx_tttt ON `tbl_zzz3s` 
        /* meta(nom_de_l_index(idx_t),genre_meta(index_de_table),message('tagada')) */
         ( `cht_xxxx_zzz2` , `chx_xxxx_zzz2` ) ;

