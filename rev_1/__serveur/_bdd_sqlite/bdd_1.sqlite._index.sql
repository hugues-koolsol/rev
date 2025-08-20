CREATE UNIQUE INDEX idx_ligne_rev ON `tbl_revs` 
        /* meta(nom_de_l_index(idx_ligne_rev),genre_meta(index_de_table),message('')) */
         ( `chx_projet_rev` , `chp_provenance_rev` , `chx_source_rev` , `chp_id_rev` ) ;

CREATE UNIQUE INDEX idx_projet_et_nom_dossiers ON `tbl_dossiers` 
        /* meta(nom_de_l_index(idx_projet_et_nom_dossiers),genre_meta(index_de_table),message('Ce dossier existe déjà')) */
         ( `chx_projet_dossier` , `chp_nom_dossier` , `chx_parent_dossier` ) ;

CREATE UNIQUE INDEX idx_nom_groupe ON `tbl_groupes` 
        /* meta(nom_de_l_index(idx_nom_groupe),genre_meta(index_de_table),message('ce nom de groupe existe')) */
         ( `chp_nom_groupe` ) ;

CREATE UNIQUE INDEX idx_nom_metier ON `tbl_metiers` 
        /* meta(nom_de_l_index(idx_nom_metier),genre_meta(index_de_table),message('')) */
         ( `chp_nom_metier` ) ;

CREATE UNIQUE INDEX idx_acces_grp_metier ON `tbl_acces` 
        /* meta(nom_de_l_index(idx_acces_grp_metier),genre_meta(index_de_table),message('')) */
         ( `chx_groupe_acces` , `chx_metier_acces` ) ;

CREATE UNIQUE INDEX idx_unique1 ON `tbl_autorisations` 
        /* meta(nom_de_l_index(idx_unique1),genre_meta(index_de_table),message('')) */
         ( `chx_acces_autorisation` , `chx_source_autorisation` ) ;

CREATE UNIQUE INDEX idx_nom_unique_projets ON `tbl_projets` 
        /* meta(nom_de_l_index(idx_nom_unique_projets),genre_meta(index_de_table),message('ce projet existe déjà')) */
         ( `chp_nom_projet` ) ;

CREATE UNIQUE INDEX idx_texte_unique_taches ON `tbl_taches` 
        /* meta(nom_de_l_index(idx_texte_unique_taches),genre_meta(index_de_table),message('Cete tache existe déjà')) */
         ( `chp_texte_tache` ) ;

CREATE UNIQUE INDEX idx_nom_unique_utilisateurs ON `tbl_utilisateurs` 
        /* meta(nom_de_l_index(idx_nom_unique_utilisateurs),genre_meta(index_de_table),message('Ce nom d\'utilisateur existe déjà')) */
         ( `chp_nom_de_connexion_utilisateur` ) ;

CREATE UNIQUE INDEX idx_source ON `tbl_sources` 
        /* meta(nom_de_l_index(idx_source),genre_meta(index_de_table),message('')) */
         ( `chx_dossier_id_source` , `chp_nom_source` ) ;

