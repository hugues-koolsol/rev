const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
/*
  =====================================================================================================================
*/
class parametres1{
    /*
      =========================== fragment ========================================================================
    */
    async produire_les_json_des_paramètres( mat , d , chi_id_bdd ){
        /*
          appel asynchrone
        */
        /* console.log("dans produire_les_json_des_paramètres chi_id_bdd="+chi_id_bdd); */
        /* let __db1=await this.__ig1.ouvrir_bdd( chi_id_bdd ); */
        let chemin_bdd_1='./__bases_de_donnees/bdd_' + chi_id_bdd + '.sqlite';
        let __db1=null;
        try{
            __db1=new Database( chemin_bdd_1 , {"create" : false} );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        let chemin_fichier__liste_des_grandeurs='./__fichiers_generes/__json_des_grandeurs_de_la_base_' + chi_id_bdd + '_.json';
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
            this.__ig1.ma_trace1( "ici" , tt1224 );
            __db1.close();
            return({"__xst" : __xer ,"__xme" : tt1224.__xme});
        }
        let chx_parametre_grandeur=0;
        let __liste_des_grandeurs={};
        let liste_des_complements={};
        for(let i in tt1224.__xva){
            if(tt1224.__xva[i].T0_chx_parametre_grandeur !== chx_parametre_grandeur){
                chx_parametre_grandeur=tt1224.__xva[i].T0_chx_parametre_grandeur;
                liste_des_complements={};
                if(tt1224.__xva[i].T1_cht_rev_parametre !== '#()'){
                    let le_rev_texte=tt1224.__xva[i].T1_cht_rev_parametre;
                    /* this.__ig1.ma_trace1("tt1224.__xva[i].T1_cht_rev_parametre="+le_rev_texte); */
                    let obj1=this.__ig1.__rev1.t2m( le_rev_texte );
                    if(obj1.__xst !== __xsu){
                        return({"__xst" : __xer ,"__xme" : "erreur de conversion de paramètre \"" + le_rev_texte + '"'});
                    }
                    let mat1=obj1.__xva;
                    const l01=mat1.length;
                    for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][1] === 'champs_des_parametres' && mat1[j][2] === 'f'){
                            for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                if(mat1[k][1] === '#' && mat1[k][2] === 'f'){
                                }else if(mat1[k][2] === 'f'){
                                    let nom_du_complement=mat1[k][1];
                                    let genre_du_parametre=0;
                                    let libelle='';
                                    for( let l=k + 1 ; l < l01 ; l=mat1[l][12] ){
                                        if(mat1[l][1] === 'genre_du_parametre' && mat1[l][2] === 'f' && mat1[l][8] === 1 && mat1[l + 1][2] === 'c'){
                                            genre_du_parametre=parseInt( mat1[l + 1][1] , 10 );
                                        }else if(mat1[l][1] === '#' && mat1[l][2] === 'f'){
                                            libelle=mat1[l][13];
                                        }
                                    }
                                    liste_des_complements[nom_du_complement]={"genre_du_parametre" : genre_du_parametre ,"libelle" : libelle};
                                }
                            }
                        }
                    }
                    /* this.__ig1.ma_trace1("liste_des_complements=",liste_des_complements); */
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
            if(tt1224.__xva[i].T0_cht_rev_grandeur !== '0'){
                /* console.log("dans produire_les_json_des_paramètres tt1224.__xva[i].T0_cht_rev_grandeur",__liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur],tt1224.__xva[i].T0_cht_rev_grandeur); */
                let objt=this.__ig1.__rev1.t2m( tt1224.__xva[i].T0_cht_rev_grandeur );
                if(objt.__xst === __xsu){
                    const l01=objt.__xva.length;
                    for( let j=1 ; j < l01 ; j=objt.__xva[j][12] ){
                        if(objt.__xva[j][2] === 'f' && objt.__xva[j][8] === 1 && objt.__xva[j + 1][2] === 'c'){
                            if(liste_des_complements.hasOwnProperty( objt.__xva[j][1] )){
                                /* this.__ig1.ma_trace1("liste_des_complements=",liste_des_complements); */
                                __liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]['__liste_des_parametres'].push( {
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
                /* console.log("dans produire_les_json_des_paramètres  tt1224.__xva[i].T0_cht_rev_grandeur",__liste_des_grandeurs[tt1224.__xva[i].T0_chi_id_grandeur]); */
            }
        }
        let contenu_fichier__json_des_parametres_de_la_base='' + JSON.stringify( __liste_des_grandeurs , null , 2 );
        try{
            await this.__ig1.file_put_contents( chemin_fichier__liste_des_grandeurs , contenu_fichier__json_des_parametres_de_la_base );
        }catch{
            __db1.close();
            return({"__xst" : __xer ,"__xme" : 'erreur d\'écriture du fichier json des genres [' + this.__ig1.nl2( e ) + ']'});
        }
        /* this.__ig1.ma_trace1("this.__ig1.options_generales.les_clients_du_ws=",this.__ig1.options_generales.les_clients_du_ws); */
        for( let i=0 ; i < this.__ig1.options_generales.les_clients_du_ws.length ; i++ ){
            let le_colis={
                "__xst" : __xsu ,
                "__xsi" : {0 : ['maj __liste_des_grandeurs par une autre session'] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
                "__xva" : {} ,
                "__xac" : '' ,
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
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur <= 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        if(chi_id_grandeur === 20000){
            return({"__xst" : __xer ,"__xme" : 'on ne peut pas supprimer la grandeur 20001'});
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
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['vv_nouveau_numero_de_grandeur'] && this.__ig1.est_num( form['vv_nouveau_numero_de_grandeur'] )){
            chi_id_grandeur_nouvelle=parseInt( form['vv_nouveau_numero_de_grandeur'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ' le nouveau numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        if(chi_id_grandeur_nouvelle <= 20001){
            return({"__xst" : __xer ,"__xme" : 'on ne peut pas donner à une grandeur une valeur inférieure à 20 001'});
        }
        if(form['vv_ancien_numero_de_grandeur'] && this.__ig1.est_num( form['vv_ancien_numero_de_grandeur'] )){
            chi_id_grandeur_ancienne=parseInt( form['vv_ancien_numero_de_grandeur'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : 'l\'ancien numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        if(chi_id_grandeur_ancienne === 20000){
            return({"__xst" : __xer ,"__xme" : 'on ne peut pas renuméroter la grandeur 20 000'});
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
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'Erreur de sélection de la grandeur nouvelle [' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt1202_2.__xme});
        }
        if(tt1202_2[__xva].length >= 1){
            /*
              c'est une erreur si la grandeur existe déjà en base.
            */
            return({"__xst" : __xer ,"__xme" : 'la grandeur portant le numéro ' + chi_id_grandeur_nouvelle + ' existe déjà [' + this.__ig1.nl2()});
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
        /* this.__ig1.ma_trace1("",this.__ig1.donnees_recues.__xva); */
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
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("tt1182.__xva[0]=" , tt1182.__xva[0]); */
        let liste_des_champs_a_pourvoir=[];
        let cht_rev_parametre=tt1182.__xva[0]['T0_cht_rev_parametre'];
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
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1191 ' + this.__ig1.nl2() + ']'});
        }
        let nom_de_la_propriete='';
        for(let i in form){
            if(i.substr( 0 , 21 ) === '__le_nom_de_la_valeur'){
                nom_de_la_propriete=form[i];
                break;
            }
        }
        if(form.hasOwnProperty( nom_de_la_propriete + '_' + chi_id_grandeur )
               && form[nom_de_la_propriete + '_' + chi_id_grandeur] !== ''
        ){
            let nouvelle_valeur=form[nom_de_la_propriete + '_' + chi_id_grandeur];
            /* this.__ig1.ma_trace1("nouvelle_valeur="+nouvelle_valeur); */
            let nouveau_rev_de_la_grandeur='';
            if(tt1191.__xva[0]['T0_cht_rev_grandeur'] === '0'){
                /* l'ancien paramètre n'avait pas de valeur */
                if(nouvelle_valeur !== ''){
                    if(this.__ig1.est_num( nouvelle_valeur )){
                        nouveau_rev_de_la_grandeur=nom_de_la_propriete + '(' + nouvelle_valeur + ')';
                    }else{
                        nouveau_rev_de_la_grandeur=nom_de_la_propriete + '(\'' + nouvelle_valeur.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                    }
                }
            }else{
                let liste_des_indices_a_supprimer=[];
                let obj_ancien_rev=this.__ig1.__rev1.t2m( tt1191.__xva[0]['T0_cht_rev_grandeur'] );
                if(obj_ancien_rev.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'erreur de conversion de ' + tt1191.__xva[0]['T0_cht_rev_grandeur'] + ' [ ' + this.__ig1.nl2() + ']'});
                }
                let mat2=obj_ancien_rev.__xva;
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
                    }else{
                        if(!liste_des_champs_a_pourvoir.includes( mat2[i][1] )){
                            /* on a supprimé ce champ */
                            liste_des_indices_a_supprimer.push( i );
                        }
                    }
                }
                let mat3=null;
                /* console.log( "liste_des_indices_a_supprimer=" , liste_des_indices_a_supprimer ); */
                if(liste_des_indices_a_supprimer.length > 0){
                    /*
                      il faut enlever de la matrice les champs complémentaires supprimés 
                      en commençant par la fin
                    */
                    for( let i=liste_des_indices_a_supprimer.length - 1 ; i >= 0 ; i-- ){
                        mat3=this.__ig1.__rev1.supprimer_un_element_de_la_matrice( mat2 , liste_des_indices_a_supprimer[i] , 0 );
                    }
                    /* console.log( "mat3=" , mat3 ); */
                }else{
                    mat3=mat2;
                }
                let obj_nouveau_rev=this.__ig1.__rev1.m2t( mat3 , 0 );
                if(obj_nouveau_rev.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'erreur de conversion de ' + tt1191.__xva[0]['T0_cht_rev_grandeur'] + ' [ ' + this.__ig1.nl2() + ']'});
                }
                nouveau_rev_de_la_grandeur=obj_nouveau_rev.__xva;
            }
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
            if(nouveau_rev_de_la_grandeur === ''){
                nouveau_rev_de_la_grandeur='0';
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
            return({"__xst" : __xer ,"__xme" : 'seul l\'utilisateur principal peut vérouiller ou dévérouiller une grandeur ' + this.__ig1.nl2() + ']'});
        }
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
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("form=",form); */
        if(form.hasOwnProperty( 'che_verouillee_grandeur_' + chi_id_grandeur )
               && form['chp_cle_grandeur_' + chi_id_grandeur] !== ''
        ){
            let criteres_1215={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_che_verouillee_grandeur" : parseInt( form['che_verouillee_grandeur_' + chi_id_grandeur] , 10 )
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
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        if(form.hasOwnProperty( 'che_actif_grandeur_' + chi_id_grandeur ) && form['chp_cle_grandeur_' + chi_id_grandeur] !== ''){
            let criteres_1190={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_che_actif_grandeur" : parseInt( form['che_actif_grandeur_' + chi_id_grandeur] , 10 )
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
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        let chc_couleur_texte_grandeur=null;
        if(form.hasOwnProperty( 'chc_couleur_texte_grandeur_' + chi_id_grandeur )){
            chc_couleur_texte_grandeur=form['chc_couleur_texte_grandeur_' + chi_id_grandeur];
        }
        let chc_couleur_fond_grandeur=null;
        if(form.hasOwnProperty( 'chc_couleur_fond_grandeur_' + chi_id_grandeur )){
            chc_couleur_fond_grandeur=form['chc_couleur_fond_grandeur_' + chi_id_grandeur];
        }
        if(chc_couleur_fond_grandeur === null
               || chc_couleur_texte_grandeur === null
               || chc_couleur_fond_grandeur === ''
               || chc_couleur_texte_grandeur === ''
        ){
            chc_couleur_fond_grandeur=null;
            chc_couleur_texte_grandeur=null;
        }
        /* this.__ig1.ma_trace1("form=",form); */
        if(form.hasOwnProperty( 'chp_cle_grandeur_' + chi_id_grandeur ) && form['chp_cle_grandeur_' + chi_id_grandeur] !== ''){
            let criteres_1188={
                 /*  */
                "c_chi_id_grandeur" : chi_id_grandeur ,
                "n_chp_cle_grandeur" : form['chp_cle_grandeur_' + chi_id_grandeur] ,
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
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
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
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        let obj_mat2=this.__ig1.__rev1.t2m( tt1182.__xva[0]['T0_cht_rev_parametre'] );
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
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1188.__xme});
        }
        /*
          une fois qu'on a ajouté une grandeur pour ce paramètre,
          il faut aller modifier le rev de tri des paramètres
        */
        let le_rev_ordre=tt1182.__xva[0]['T0_cht_ordre_parametre'];
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
        let tt1189=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_parametres SET 
           `cht_ordre_parametre` = :n_cht_ordre_parametre
        WHERE `chi_id_parametre` = :c_chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1189 , criteres_1189 , __db1 );
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
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , fo1 , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , fo1 , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , fo1 , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , fo1 , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , fo1 , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , nouvel_id , fo1 , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =========================== fragment ========================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        let criteres_select_1186={"T0_chx_parametre_grandeur" : __xva_avant['T0_chi_id_parametre']};
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
        /* this.__ig1.ma_trace1("tt1186=" , tt1186 ); */
        if(tt1186.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'erreur [1186 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("tt1186.__xva[0]=" , tt1186.__xva ); */
        this.__ig1.donnees_retournees.__xva['parametres_actuels']=tt1186.__xva;
        return({"__xst" : __xsu ,"" : tt1186.__xva});
    }
    /*
      =============================================================================================================
    */
    async recup_chi_id_parametre( criteres_select_1182 , __db1 ){
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
        return tt1182;
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues.__xva.__co1;
        let fo1=this.__ig1.donnees_recues.__xva.__fo1[nom_formulaire];
        /*  */
        let __les_convertions=[
            /*  */
            {"nc" : "id1" ,"nz" : 'chi_id_parametre' ,"m" : 'une erreur système est survenue sur le champ "identifiant"'},
            {"nc" : "entier1" ,"nz" : 'che_pour_admin_parametre' ,"vpd" : 0 ,"lib" : 'pour admin'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return __obj_convertions;
        }
        /* conversion des données numériques verifier_modifier fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_cle_parametre" ,"lib" : 'clé' ,"ldc" : '64.2'},
            {"nt" : 'non_vide1' ,"nz" : "chp_nom_parametre" ,"lib" : 'nom' ,"ldc" : '64.2'},
            {"nt" : 'zero_un1' ,"nz" : "che_pour_admin_parametre" ,"lib" : 'pour admin'}
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return __obj_tests;
        }
        if(fo1.cht_rev_parametre !== null && fo1.cht_rev_parametre !== ''){
            let obj1=this.__ig1.__rev1.rev_tm( fo1.cht_rev_parametre );
            if(obj1.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le contenu de "rev" n\'est pas dans un format rev valide'});
            }
        }
        let retour_a_la_liste=false;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : fo1.chi_id_parametre};
        let tt1182=await this.recup_chi_id_parametre( criteres_select_1182 , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , fo1 , tt1182.__xva[0] , __db1 );
        if(__aetavm.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});
        }
        let criteres_1184={
             /*  */
            "c_chi_id_parametre" : fo1.chi_id_parametre ,
            "n_chp_cle_parametre" : fo1.chp_cle_parametre ,
            "n_chp_nom_parametre" : fo1.chp_nom_parametre ,
            "n_che_pour_admin_parametre" : fo1.che_pour_admin_parametre ,
            "n_cht_rev_parametre" : fo1.cht_rev_parametre === '' ? ( null ) : ( fo1.cht_rev_parametre ) ,
            "n_cht_commentaire_parametre" : fo1.cht_commentaire_parametre === '' ? ( null ) : ( fo1.cht_commentaire_parametre )
        };
        /* =========================== mise à jour effective ======================== */
        let tt1184=await this.__ig1.sql_iij(
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
        WHERE `chi_id_parametre` = :c_chi_id_parametre ;
        */
        /*sql_inclure_fin*/ 1184 , criteres_1184 , __db1 );
        if(tt1184.__xst !== __xsu || tt1184.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            if(tt1182.__xva[0].T0_che__nur_parametre !== parseInt( fo1.che__nur_parametre , 10 )){
                return({"__xst" : __xer ,"__xme" : '__nur_ko1_'});
            }
            return({"__xst" : __xer ,"__xme" : tt1184.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , fo1 , tt1182.__xva[0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        this.__ig1.donnees_retournees.__xva['__nouveau_nur']=parseInt( fo1.che__nur_parametre , 10 ) + 1;
        if(retour_a_la_liste === true){
            if(fo1.__mat_liste_si_ok){
                let mat1=JSON.parse( fo1.__mat_liste_si_ok );
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt1182_bis=await this.recup_chi_id_parametre( criteres_select_1182 , __db1 );
        this.__ig1.donnees_retournees.__xva['page_modification1']=tt1182_bis;
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
        let tt1182=await this.recup_chi_id_parametre( {"T0_chi_id_parametre" : chi_id_parametre} , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : modification impossible [1182 ' + this.__ig1.nl2() + ']'});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt1182.__xva[0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees.__xva['page_modification1']=tt1182;
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
                if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt1182=await this.recup_chi_id_parametre( {"T0_chi_id_parametre" : chi_id_parametre} , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : duplication impossible [1182 ' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.__xva['page_duplication1']=tt1182;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_voir1( mat , d ){
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_parametre === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let critere_1182={"T0_chi_id_parametre" : chi_id_parametre};
        let tt1182=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_parametre` , `T0`.`chp_cle_parametre` , `T0`.`chp_nom_parametre` , `T0`.`cht_commentaire_parametre` , `T0`.`cht_rev_parametre` , 
        `T0`.`cht_ordre_parametre` , `T0`.`che_pour_admin_parametre` , `T0`.`che__nur_parametre`
         FROM b1.tbl_parametres T0
        WHERE `T0`.`chi_id_parametre` = :T0_chi_id_parametre
        ;
        */
        /*sql_inclure_fin*/ 1182 , critere_1182 , __db1 );
        this.__ig1.donnees_retournees.__xva['page_voir1']=tt1182;
        let __aetapv=await this.actions_et_tests_apres_page_voir( mat , d , tt1182.__xva[0] , __db1 );
        if(__aetapv.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __aetapv.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues.__xva['__co1'];
        let fo1=this.__ig1.donnees_recues.__xva['__fo1'][nom_formulaire];
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt1182=await this.recup_chi_id_parametre( {"T0_chi_id_parametre" : fo1.chi_id_parametre} , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : suppression impossible [1182 ' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , fo1 , tt1182.__xva[0] , __db1 );
        if(tas.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tas.__xme});
        }
        let criteres_1185={
             /*  */
            "chi_id_parametre" : fo1.chi_id_parametre
        };
        let tt1185=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_parametres
        WHERE `chi_id_parametre` = :chi_id_parametre
        */
        /*sql_inclure_fin*/ 1185 , criteres_1185 , __db1 );
        /*  */
        if(tt1185.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt1185.__xme});
        }
        let __aavc=await this.actions_apres_supprimer( mat , d , fo1 , tt1182.__xva[0] , __db1 );
        if(__aavc.__xst === __xer){
            return({"__xst" : __xer ,"__xme" : __aavc.__xme});
        }
        /*  */
        if(fo1.__mat_liste_si_ok !== ''){
            let mat1=JSON.parse( fo1.__mat_liste_si_ok );
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
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_parametre === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt1182=await this.recup_chi_id_parametre( {"T0_chi_id_parametre" : chi_id_parametre} , __db1 );
        if(tt1182.__xst !== __xsu || tt1182.__xva.length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : suppression impossible [1182 ' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.__xva['page_confirmation_supprimer1']=tt1182;
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
        let nom_formulaire=this.__ig1.donnees_recues.__xva['__co1'];
        let fo1=this.__ig1.donnees_recues.__xva['__fo1'][nom_formulaire];
        /* convertion des données verifier_creer début */
        let __les_convertions=[
            /*  */
            {"nc" : "entier1" ,"nz" : 'che_pour_admin_parametre' ,"vpd" : 0 ,"lib" : 'pour admin'}
        ];
        let __obj_convertions=this.__ig1.__fnt1.convertir_les_zonnes_saisies( __les_convertions , fo1 );
        if(__obj_convertions.__xst !== __xsu){
            return({"__xst" : __xsu});
        }
        /* convertion des données verifier_creer fin */
        let __les_tests=[
            /*  */
            {"nt" : 'non_vide1' ,"nz" : "chp_cle_parametre" ,"lib" : 'clé' ,"ldc" : '64.2'},
            {"nt" : 'non_vide1' ,"nz" : "chp_nom_parametre" ,"lib" : 'nom' ,"ldc" : '64.2'},
            {"nt" : 'parmis1' ,"nz" : "che_pour_admin_parametre" ,"lib" : 'pour admin' ,"p" : [0,1]}
        ];
        let __obj_tests=this.__ig1.__fnt1.tester_les_zonnes_saisies( __les_tests , fo1 );
        if(__obj_tests.__xst !== __xsu){
            return __obj_tests;
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let __tac=await this.tests_avant_creer( mat , d , fo1 , __db1 );
        if(__tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tac.__xme});
        }
        let criteres_1183={
            "donnees" : [{
                        "chp_cle_parametre" : fo1.chp_cle_parametre ,
                        "chp_nom_parametre" : fo1.chp_nom_parametre ,
                        "che_pour_admin_parametre" : fo1.che_pour_admin_parametre ,
                        "cht_commentaire_parametre" : fo1.cht_commentaire_parametre === '' ? ( null ) : ( fo1.cht_commentaire_parametre )
                    }]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt1183=await this.__ig1.sql_iij(
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
        /*sql_inclure_fin*/ 1183 , criteres_1183 , __db1 );
        if(tt1183.__xst !== __xsu || tt1183['changements'] !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt1183.__xme + ' l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
        let __aapc=await this.action_apres_creer( mat , d , tt1183['nouvel_id'] , fo1 , __db1 );
        if(__aapc.__xst === __xer){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __aapc.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true && fo1.__mat_liste_si_ok !== ''){
            let mat1=JSON.parse( fo1.__mat_liste_si_ok );
            await this.filtre1( mat1 , 1 , __db1 );
        }else{
            await this.page_modification1( mat , d , tt1183['nouvel_id'] , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d , __db1=null ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        /* on peut initialiser une valeur ici, par exemple : */
        /* this.__ig1.donnees_retournees.__xva['xxxxx']='xxxxx'; */
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
        if(formulaire.hasOwnProperty( '__ordre_de_tri_de_la_liste1' ) && formulaire.__ordre_de_tri_de_la_liste1 !== ''){
            formulaire.__ordre_de_tri_de_la_liste1=formulaire.__ordre_de_tri_de_la_liste1.replace( /&quot;/g , '"' );
        }
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
        let tt1181=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
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
        ;
        */
        /*sql_inclure_fin*/ 1181 , criteres_1181 , __db1 );
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
            tt1181=await this.__ig1.sql_iij(
            /*sql_inclure_deb*/ /*#
            SELECT 
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
            ;
            */
            /*sql_inclure_fin*/ 1181 , criteres_1181 , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__champs_sortie_pour_tri1']={"`T0`.`chi_id_parametre`" : "DESC"};
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees.__xva['__debut']=__debut;
        this.__ig1.donnees_retournees.__xva['__num_page']=__num_page;
        this.__ig1.donnees_retournees.__xac='pm1(m1(n1(' + this.moi + '),f1(liste1(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees.__xac+='))))';
        this.__ig1.donnees_retournees.__xva['liste1']=tt1181;
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