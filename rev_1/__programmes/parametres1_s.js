const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
/*
  =====================================================================================================================
*/
class parametres1{
    /*
      =============================================================================================================
    */
    async enregistrer_l_ordre_des_grandeurs2( mat , d ){
        /* this.__ig1.ma_trace1("",this.__ig1.donnees_recues.__xva); */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1189={
             /*  */
            "c_chi_id_parametre" : this.__ig1.donnees_recues.__xva.chi_id_parametre_en_cours_de_trie ,
            "n_cht_ordre_parametre" : this.__ig1.donnees_recues.__xva.nouvel_ordre
        };
        /* =========================== mise à jour effective ======================== */
        let tt1189=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_parametres SET 
           `cht_ordre_parametre` = :n_cht_ordre_parametre
        WHERE `chi_id_parametre` = :c_chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1189 , criteres_1189 , this.__ig1.donnees_retournees , __db1 );
        if(tt1189.__xst !== __xsu || tt1189.changements !== 1){
            return({"__xst" : __xer ,"__xme" : tt1189.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier_la_valeur_de2( mat , d ){
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("tt1182.__xva[0]=" , tt1182.__xva[0]); */
        let liste_des_champs_a_pourvoir=[];
        let cht_rev_parametre=tt1182.__xva[0]['T0.cht_rev_parametre'];
        /* this.__ig1.ma_trace1("cht_rev_parametre="+cht_rev_parametre); */
        if(cht_rev_parametre !== '' && cht_rev_parametre !== null){
            let obj_mat2=this.__ig1.__rev1.t2m( cht_rev_parametre );
            if(obj_mat2.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'erreur de conversion de ' + cht_rev_parametre + ' [' + this.__ig1.nl2() + ']'});
            }
            let mat2=obj_mat2.__xva;
            let l02=mat2.length;
            for( let i=1 ; i < l02 ; i=mat2[i][12] ){
                if(mat2[i][1] === 'champs_des_parametres' && mat2[i][2] === 'f'){
                    for( let j=i + 1 ; j < l02 ; j=mat2[j][12] ){
                        if(mat2[j][2] === 'f'){
                            liste_des_champs_a_pourvoir.push( mat2[j][1] );
                        }
                    }
                }
            }
        }
        /* this.__ig1.ma_trace1("liste_des_champs_a_pourvoir=" , liste_des_champs_a_pourvoir); */
        let criteres_select_1191={"T0_chi_id_grandeur" : chi_id_grandeur};
        let tt1191=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur`
         FROM b1.tbl_grandeurs T0
        WHERE `T0`.`chi_id_grandeur` = :T0_chi_id_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1191 , criteres_select_1191 , this.__ig1.donnees_retournees , __db1 );
        if(tt1191.__xst !== __xsu || tt1191.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1191 ' + this.__ig1.nl2() + ']'});
        }
        let nom_de_la_propriete='';
        for(let i in form){
            if(i.substr( 0 , 21 ) === '__le_nom_de_la_valeur'){
                nom_de_la_propriete=form[i];
                break;
            }
        }
        /* this.__ig1.ma_trace1("nom_de_la_propriete="+nom_de_la_propriete); *_/ */
        this.__ig1.ma_trace1( "ici" );
        if(form.hasOwnProperty( nom_de_la_propriete + '_' + chi_id_grandeur )){
            this.__ig1.ma_trace1( "ici" );
            let nouvelle_valeur=form[nom_de_la_propriete + '_' + chi_id_grandeur];
            /* this.__ig1.ma_trace1("nouvelle_valeur="+nouvelle_valeur); */
            let nouveau_rev_de_la_grandeur='';
            if(tt1191.__xva[0]['T0.cht_rev_grandeur'] === '0'){
                this.__ig1.ma_trace1( "ici" );
                /* l'ancien paramètre n'avait pas de valeur */
                if(nouvelle_valeur !== ''){
                    if(this.__ig1.est_num( nouvelle_valeur )){
                        nouveau_rev_de_la_grandeur=nom_de_la_propriete + '(' + nouvelle_valeur + ')';
                    }else{
                        nouveau_rev_de_la_grandeur=nom_de_la_propriete + '(\'' + nouvelle_valeur.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                    }
                }
                /* this.__ig1.ma_trace1("nouveau_rev_de_la_grandeur=",nouveau_rev_de_la_grandeur); */
            }else{
                this.__ig1.ma_trace1( "ici" );
                /* this.__ig1.ma_trace1("tt1191.__xva[0]['T0.cht_rev_grandeur']=",tt1191.__xva[0]['T0.cht_rev_grandeur']); */
                let obj_ancien_rev=this.__ig1.__rev1.t2m( tt1191.__xva[0]['T0.cht_rev_grandeur'] );
                if(obj_ancien_rev.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'erreur de conversion de ' + tt1191.__xva[0]['T0.cht_rev_grandeur'] + ' [ ' + this.__ig1.nl2() + ']'});
                }
                let mat2=obj_ancien_rev.__xva;
                /* this.__ig1.ma_trace1("mat2=",mat2); */
                let l02=mat2.length;
                for( let i=1 ; i < l02 ; i=mat2[i][12] ){
                    if(mat2[i][1] === nom_de_la_propriete && mat2[i][2] === 'f' && mat2[i][8] === 1 && mat2[i + 1][2] === 'c'){
                        if(this.__ig1.est_num( nouvelle_valeur )){
                            mat2[i + 1][1]=nouvelle_valeur;
                            mat2[i + 1][4]=0;
                        }else{
                            mat2[i + 1][1]=nouvelle_valeur.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' );
                            mat2[i + 1][4]=1;
                        }
                    }
                }
                let obj_nouveau_rev=this.__ig1.__rev1.m2t( mat2 , 0 );
                if(obj_nouveau_rev.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'erreur de conversion de ' + tt1191.__xva[0]['T0.cht_rev_grandeur'] + ' [ ' + this.__ig1.nl2() + ']'});
                }
                nouveau_rev_de_la_grandeur=obj_nouveau_rev.__xva;
                /* this.__ig1.ma_trace1("nouveau_rev_de_la_grandeur=",nouveau_rev_de_la_grandeur); */
            }
            /* this.__ig1.ma_trace1("nouveau_rev_de_la_grandeur=",nouveau_rev_de_la_grandeur); */
            /* this.__ig1.ma_trace1("nouveau_rev_de_la_grandeur=" + nouveau_rev_de_la_grandeur + ' , nom_de_la_propriete=' + nom_de_la_propriete); */
            for( let i=0 ; i < liste_des_champs_a_pourvoir.length ; i++ ){
                if(nouveau_rev_de_la_grandeur.indexOf( liste_des_champs_a_pourvoir[i] + '(' ) < 0){
                    /* on a mis un nouveau champ qui n'est pas encore renseigné */
                    /* this.__ig1.ma_trace1("pas trouve liste_des_champs_a_pourvoir[i]" , liste_des_champs_a_pourvoir[i]); */
                    if(liste_des_champs_a_pourvoir[i] === nom_de_la_propriete){
                        /* this.__ig1.ma_trace1("ajouter " + nom_de_la_propriete , nouvelle_valeur ); */
                        if(nouvelle_valeur !== ''){
                            if(this.__ig1.est_num( nouvelle_valeur )){
                                nouveau_rev_de_la_grandeur+=nom_de_la_propriete + '(' + nouvelle_valeur + ')';
                            }else{
                                nouveau_rev_de_la_grandeur+=nom_de_la_propriete + '(\'' + nouvelle_valeur.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                            }
                        }
                    }
                }
            }
            /* this.__ig1.ma_trace1("nouveau_rev_de_la_grandeur=",nouveau_rev_de_la_grandeur); */
            /* return({"__xst" : __xer ,"__xme" : this.__ig1.nl2() }); */
            /* this.__ig1.ma_trace1("liste_des_champs_a_pourvoir",liste_des_champs_a_pourvoir , nouveau_rev_de_la_grandeur ); */
            if(nouveau_rev_de_la_grandeur === ''){
                nouveau_rev_de_la_grandeur='0';
            }
            let criteres_1192={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_cht_rev_grandeur" : nouveau_rev_de_la_grandeur
            };
            /* =========================== mise à jour effective ======================== */
            let tt1192=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `cht_rev_grandeur` = :n_cht_rev_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1192 , criteres_1192 , this.__ig1.donnees_retournees , __db1 );
            if(tt1192.__xst !== __xsu || tt1192.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1192.__xme});
            }
            return({"__xst" : __xsu});
        }
        /* && form[nom_de_la_propriete + '_' + chi_id_grandeur] !== '' */
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async modifier_actif_de2( mat , d ){
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        let decallage_vertical=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'decallage_vertical' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                decallage_vertical=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("form=",form); */
        if(form.hasOwnProperty( 'che_actif_grandeur_' + chi_id_grandeur ) && form['chp_cle_grandeur_' + chi_id_grandeur] !== ''){
            let criteres_1190={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_che_actif_grandeur" : form['che_actif_grandeur_' + chi_id_grandeur]
            };
            /* =========================== mise à jour effective ======================== */
            let tt1190=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `che_actif_grandeur` = :n_che_actif_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1190 , criteres_1190 , this.__ig1.donnees_retournees , __db1 );
            if(tt1190.__xst !== __xsu || tt1190.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1190.__xme});
            }
            return({"__xst" : __xsu ,"__xva" : {"decallage_vertical" : decallage_vertical}});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async modifier_la_cle_de2( mat , d ){
        let chi_id_parametre=0;
        let chi_id_grandeur=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("form=",form); */
        if(form.hasOwnProperty( 'chp_cle_grandeur_' + chi_id_grandeur ) && form['chp_cle_grandeur_' + chi_id_grandeur] !== ''){
            let criteres_1188={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_chp_cle_grandeur" : form['chp_cle_grandeur_' + chi_id_grandeur]
            };
            /* =========================== mise à jour effective ======================== */
            let tt1188=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_grandeurs SET 
               `chp_cle_grandeur` = :n_chp_cle_grandeur
            WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
            */
            /*sql_inclure_fin*/ 1188 , criteres_1188 , this.__ig1.donnees_retournees , __db1 );
            if(tt1188.__xst !== __xsu || tt1188.changements !== 1){
                return({"__xst" : __xer ,"__xme" : tt1188.__xme});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async enregister_nouveau_parametre1( mat , d ){
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        let obj_mat2=this.__ig1.__rev1.t2m( tt1182.__xva[0]['T0.cht_rev_parametre'] );
        if(obj_mat2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : "erreur de conversion de rev"});
        }
        let mat2=obj_mat2.__xva;
        let l02=mat2.length;
        let le_tableau_parametre=[];
        for( let i=1 ; i < l02 ; i=mat2[i][12] ){
            if(mat2[i][1] === 'champs_des_parametres' && mat2[i][2] === 'f'){
                for( let j=i + 1 ; j < l02 ; j=mat2[j][12] ){
                    let nom_du_parametre='';
                    let genre_du_parametre=0;
                    let commentaire_du_parametre='';
                    if(mat2[j][2] === 'f'){
                        nom_du_parametre=mat2[j][1];
                        for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                            if(mat2[k][1] === 'genre_du_parametre' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                genre_du_parametre=parseInt( mat2[k + 1][1] , 10 );
                            }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
                                commentaire_du_parametre=mat2[k][13];
                                /*  */
                            }
                        }
                    }
                    le_tableau_parametre.push( {"nom_du_parametre" : nom_du_parametre ,"genre_du_parametre" : genre_du_parametre ,"commentaire_du_parametre" : commentaire_du_parametre} );
                }
            }
        }
        let chemin_fichier__liste_des_genres='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__fichiers_generes/__liste_des_genres.json';
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chemin_fichier__liste_des_genres='../rev_2/__fichiers_generes/__liste_des_genres.json';
        }
        if(!(await this.__ig1.is_file( chemin_fichier__liste_des_genres ))){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        this.__ig1.ma_trace1( "chemin_fichier__liste_des_genres" , chemin_fichier__liste_des_genres );
        let contenu_texte__liste_des_genres='';
        try{
            contenu_texte__liste_des_genres=await this.__ig1.file_get_contents( chemin_fichier__liste_des_genres );
        }catch(e){
            this.__ig1.ma_trace1( "e=" , e.stack );
        }
        let contenu_json__liste_des_genres=JSON.parse( contenu_texte__liste_des_genres );
        /* this.__ig1.ma_trace1("le_tableau_parametre=",le_tableau_parametre); */
        /* this.__ig1.ma_trace1("form=",form); */
        let cht_rev_grandeur='';
        let le_genre_est_numerique=false;
        for(let i in le_tableau_parametre){
            this.__ig1.ma_trace1( "le_tableau_parametre[i]=" , le_tableau_parametre[i] );
            let genre_du_parametre=le_tableau_parametre[i].genre_du_parametre;
            let nom_du_parametre=le_tableau_parametre[i].nom_du_parametre;
            if(form.hasOwnProperty( nom_du_parametre ) && form[nom_du_parametre] !== ''){
                let valeur=form[nom_du_parametre];
                if(!contenu_json__liste_des_genres.hasOwnProperty( genre_du_parametre )){
                    return({"__xst" : __xer ,"__xme" : "genre non trouvé " + this.__ig1.nl2()});
                }
                let le_genre=contenu_json__liste_des_genres[genre_du_parametre];
                let chp_espece_genre=le_genre.chp_espece_genre.toUpperCase();
                if(chp_espece_genre.indexOf( 'INT' ) >= 0
                       || chp_espece_genre.indexOf( 'DECIMAL' ) >= 0
                       || chp_espece_genre.indexOf( 'FLOAT' ) >= 0
                ){
                    cht_rev_grandeur+=nom_du_parametre + '(' + valeur + ')';
                }else{
                    cht_rev_grandeur+=nom_du_parametre + '(\'' + valeur.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                }
                /* this.__ig1.ma_trace1("le_genre=" , le_genre ); */
            }
        }
        if(cht_rev_grandeur === ''){
            cht_rev_grandeur='0';
        }
        this.__ig1.ma_trace1( "le_tableau_parametre=" , le_tableau_parametre );
        if(!(form.hasOwnProperty( 'che_actif_grandeur' ) && this.__ig1.est_num( form['che_actif_grandeur'] ))){
            return({"__xst" : __xer ,"__xme" : 'che_actif_grandeur est absent ou non numérique [' + this.__ig1.nl2() + ']'});
        }
        if(!(form.hasOwnProperty( 'chp_cle_grandeur' ) && form['chp_cle_grandeur'] !== '')){
            return({"__xst" : __xer ,"__xme" : 'chp_cle_grandeur est absent ou vide [' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        /*
          on insert avec un rev null et on ira le modifier plus bas
        */
        let criteres_1187={
            "donnees" : [{
                        "chx_parametre_grandeur" : chi_id_parametre ,
                        "chp_cle_grandeur" : form['chp_cle_grandeur'] ,
                        "cht_rev_grandeur" : cht_rev_grandeur ,
                        "che_actif_grandeur" : 0
                    }]
        };
        let tt1187=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 1187 , criteres_1187 , this.__ig1.donnees_retournees , __db1 );
        if(tt1187.__xst !== __xsu || tt1187['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1187.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let chi_id_grandeur=tt1187['nouvel_id'];
        let che_actif_grandeur=0;
        let chp_cle_grandeur=form['chp_cle_grandeur'];
        /*
          on réécrit le rev au bon format
        */
        che_actif_grandeur=0;
        /* let cht_rev_grandeur=''; */
        let criteres_1188={
             /*  */
            "c_chi_id_grandeur" : chi_id_grandeur ,
            "n_chp_cle_grandeur" : chp_cle_grandeur ,
            "n_cht_rev_grandeur" : cht_rev_grandeur ,
            "n_che_actif_grandeur" : che_actif_grandeur
        };
        let tt1188=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_grandeurs SET 
           `chp_cle_grandeur` = :n_chp_cle_grandeur
        WHERE `chi_id_grandeur` = :c_chi_id_grandeur ;
        */
        /*sql_inclure_fin*/ 1188 , criteres_1188 , this.__ig1.donnees_retournees , __db1 );
        if(tt1188.__xst !== __xsu || tt1188.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1188.__xme});
        }
        /*
          une fois qu'on a ajouté une grandeur pour ce paramètre,
          il faut aller modifier le rev de tri des paramètres
        */
        let le_rev_ordre=tt1182.__xva[0]['T0.cht_ordre_parametre'];
        if(le_rev_ordre === null){
            le_rev_ordre=String( chi_id_grandeur );
        }else{
            le_rev_ordre=chi_id_grandeur + ',' + le_rev_ordre;
        }
        let criteres_1189={
             /*  */
            "c_chi_id_parametre" : chi_id_parametre ,
            "n_cht_ordre_parametre" : le_rev_ordre
        };
        /* =========================== mise à jour effective ======================== */
        let tt1189=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_parametres SET 
           `cht_ordre_parametre` = :n_cht_ordre_parametre
        WHERE `chi_id_parametre` = :c_chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1189 , criteres_1189 , this.__ig1.donnees_retournees , __db1 );
        if(tt1189.__xst !== __xsu || tt1189.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1189.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        /*
          SELECT 
          `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
          `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `
          
        */
        let criteres_select_1186={"T0_chx_parametre_grandeur" : __xva_avant['T0.chi_id_parametre']};
        let tt1186=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chx_parametre_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`che_actif_grandeur` , 
        `T1`.`chp_cle_parametre` , `T1`.`chp_nom_parametre` , `T1`.`cht_rev_parametre` , `T1`.`cht_ordre_parametre`
         FROM b1.tbl_grandeurs T0
         LEFT JOIN b1.tbl_parametres T1 ON T1.chi_id_parametre = T0.chx_parametre_grandeur
        
        WHERE `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur
        ;
        */
        /*sql_inclure_fin*/ 1186 , criteres_select_1186 , this.__ig1.donnees_retournees , __db1 );
        /* this.__ig1.ma_trace1("tt1186=" , tt1186 ); */
        if(tt1186.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'erreur [1186 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("tt1186.__xva[0]=" , tt1186.__xva ); */
        this.__ig1.donnees_retournees[__xva]['parametres_actuels']=tt1186.__xva;
        return({"__xst" : __xsu ,"" : tt1186.__xva});
    }
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
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /*
          conversion des données numériques update serveur début
          =====================================================================================================
        */
        form['chi_id_parametre']=form['chi_id_parametre'] === null ? ( null ) : ( parseInt( form['chi_id_parametre'] , 10 ) );
        if(isNaN( form['chi_id_parametre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "chi_id_parametre" doit être numérique'});
        }
        form['che_pour_admin_parametre']=form['che_pour_admin_parametre'] === null ? ( null ) : ( parseInt( form['che_pour_admin_parametre'] , 10 ) );
        if(isNaN( form['che_pour_admin_parametre'] )){
            return({"__xst" : __xer ,"__xme" : 'la valeur pour "pour admin" doit être numérique'});
        }
        /*
          =====================================================================================================
          conversion des données numériques update serveur fin
        */
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_1182={"T0_chi_id_parametre" : form['chi_id_parametre']};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt1182[__xva][0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1184={
             /*  */
            "c_chi_id_parametre" : form['chi_id_parametre'] ,
            "n_chp_cle_parametre" : form['chp_cle_parametre'] ,
            "n_chp_nom_parametre" : form['chp_nom_parametre'] ,
            "n_che_pour_admin_parametre" : form['che_pour_admin_parametre'] ,
            "n_cht_rev_parametre" : form['cht_rev_parametre'] === '' ? ( null ) : ( form['cht_rev_parametre'] ) ,
            "n_cht_commentaire_parametre" : form['cht_commentaire_parametre'] === '' ? ( null ) : ( form['cht_commentaire_parametre'] )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1184=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_parametres SET 
           `chp_cle_parametre` = :n_chp_cle_parametre , 
           `chp_nom_parametre` = :n_chp_nom_parametre , 
           `che_pour_admin_parametre` = :n_che_pour_admin_parametre , 
           `cht_rev_parametre` = :n_cht_rev_parametre , 
           `cht_commentaire_parametre` = :n_cht_commentaire_parametre , 
           `chd__dtc_parametre` = :n_chd__dtc_parametre , 
           `chd__dtm_parametre` = :n_chd__dtm_parametre , 
           `che__nur_parametre` = :n_che__nur_parametre
        */
        /*sql_inclure_fin*/ 1184 , criteres_1184 , this.__ig1.donnees_retournees , __db1 );
        if(tt1184.__xst !== __xsu || tt1184.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1184.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt1182[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        this.__ig1.donnees_retournees[__xva]['__nouveau_nur']=parseInt( form['che__nur_parametre'] , 10 ) + 1;
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1182_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_select_1182 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1182_bis;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_parametre=null , __db1=null ){
        if(chi_id_parametre === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_parametre(' + chi_id_parametre + ')))))';
        }
        if(chi_id_parametre === null){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , {"T0_chi_id_parametre" : chi_id_parametre} , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1182.__xme});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1182[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt1182;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , chi_id_parametre=null ){
        if(chi_id_parametre === null){
            const l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_parametre'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1182={
             /*  */
            "T0_chi_id_parametre" : chi_id_parametre
        };
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1182.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_duplication1']=tt1182;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_parametre=0;
        let decallage_vertical=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'decallage_vertical' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                decallage_vertical=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_parametre === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , critere_1182 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_voir1']=tt1182;
        this.__ig1.donnees_retournees[__xva]['decallage_vertical']=decallage_vertical;
        let __aetapv=await this.actions_et_tests_apres_page_voir( mat , d , tt1182[__xva][0] , __db1 );
        if(__aetapv.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __aetapv.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
        if(form['chi_id_parametre'] <= 2){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_1182={
             /*  */
            "T0_chi_id_parametre" : form['chi_id_parametre']
        };
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , criteres_1182 , this.__ig1.donnees_retournees , __db1 );
        if(tt1182.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1182.__xme});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , form , tt1182[__xva][0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1185={
             /*  */
            "chi_id_parametre" : form['chi_id_parametre']
        };
        let tt1185=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_parametres
        WHERE `chi_id_parametre` = :chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1185 , criteres_1185 , this.__ig1.donnees_retournees , __db1 );
        /*  */
        if(tt1185.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1185.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , form , tt1182[__xva][0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_parametre === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , critere_1182 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt1182;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques insert serveur début */
        form['che_pour_admin_parametre']=form['che_pour_admin_parametre'] === null || form['che_pour_admin_parametre'] === '' || form['che_pour_admin_parametre'] === undefined ? ( 0 ) : ( parseInt( form['che_pour_admin_parametre'] , 10 ) );
        /* conversion des données numériques insert serveur fin */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1183={
            "donnees" : [{
                        "chp_cle_parametre" : form['chp_cle_parametre'] ,
                        "chp_nom_parametre" : form['chp_nom_parametre'] ,
                        "che_pour_admin_parametre" : form['che_pour_admin_parametre'] ,
                        "cht_commentaire_parametre" : form['cht_commentaire_parametre'] === '' ? ( null ) : ( form['cht_commentaire_parametre'] ) ,
                        "cht_ordre_parametre" : form['cht_ordre_parametre'] === '' ? ( null ) : ( form['cht_ordre_parametre'] )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1183=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_parametres`(
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
        );
        */
        /*sql_inclure_fin*/ 1183 , criteres_1183 , this.__ig1.donnees_retournees , __db1 );
        if(tt1183.__xst !== __xsu || tt1183['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1183.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1183['nouvel_id'] , form , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1183['nouvel_id'] , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        this.__ig1.donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        const l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        const formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , 'liste1' );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres_1181={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres_1181[i]=formulaire[i];
            }
        }
        if(this.__ig1.donnees_recues.__xva.hasOwnProperty( '__complements_sous_liste' )){
            for(let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){
                criteres_1181[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt1181=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
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
        ;
        */
        /*sql_inclure_fin*/ 1181 , criteres_1181 , this.__ig1.donnees_retournees , __db1 );
        if(tt1181.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1181.__xme});
        }
        if(tt1181.__xst === __xsu && tt1181.__xva.length === 0 && __debut > 0){
            /*
              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0
            */
            __debut=0;
            __num_page=0;
            criteres_1181['debut']=__debut;
            tt1181=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
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
            ;
            */
            /*sql_inclure_fin*/ 1181 , criteres_1181 , this.__ig1.donnees_retournees , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva]['liste1']=tt1181;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const __nbMax=40;
        let criteres_1181={};
        criteres_1181['quantitee']=__nbMax;
        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 1181 , criteres_1181 , __nbMax , __db1 );
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
    moi='parametres1';
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
export{parametres1 as parametres1};