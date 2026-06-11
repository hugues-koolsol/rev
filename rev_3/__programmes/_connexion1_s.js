const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
import {hash as crypte_mot , compare} from "https://deno.land/x/bcrypt/mod.ts";
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
/*
  pour la lecture séquentielle du fichier contenant les inserts 
*/
import {TextLineStream} from "jsr:@std/streams/text-line-stream";
/*
  =====================================================================================================================
*/
class _connexion1{
    moi='_connexion1';
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
    async deconnexion1( mat , d ){
        this.__ig1.donnees_retournees[__xac]+='m1(n1(__ig1),f1(maj_contenu1(id(vv_se_deconnecter),type_cible(style),valeur(nom_du_style(display),valeur_de_style(none)))))';
        this.__ig1.donnees_retournees[__xac]+='m1(n1(__ig1),f1(maj_menu()))';
        this.__ig1.donnees_retournees[__xac]+='m1(n1(__ig1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(supprimer_class),valeur(nom_de_la_classe(yy__0)))))';
        this.__ig1.donnees_retournees[__xac]+='m1(n1(__ig1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(ajouter_class),valeur(nom_de_la_classe(yy__1)))))';
        this.__ig1.donnees_retournees['chi_id_acces']=0;
        this.__ig1.donnees_retournees['chi_id_utilisateur']=0;
        this.__ig1.donnees_retournees['chi_id_projet']=0;
        /*
          on met max-age à 0 pour supprimer le cookie
        */
        if(this.__ig1.options_generales.cle_de_session !== ''){
            try{
                Deno.removeSync( './__sessions/' + this.__ig1.options_generales.cle_de_session + '.json' );
            } catch {}
            /* max-age = 0 pour supprimer le cookie */
            let le_cookie=this.__ig1.__ndlcs + '=; HttpOnly; Max-Age=0; SameSite=Strict; Path=/;';
            /* 'cle_de_session_rev_' + this.__ig1.donnees_retournees._CA_ */
            this.__ig1.options_generales["set-cookie"].push( le_cookie );
        }
        this.__ig1.donnees_retournees[__xva]['__liste_des_genres']=[];
        await this.__ig1.obtenir_les_menus();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async initialiser_la_base_a_partir_de_la_sauvegarde( mat , d ){
        const nom_du_fichier_bdd='bdd_1.sqlite';
        const chemin_du_fichier_bdd='./__bases_de_donnees/' + nom_du_fichier_bdd;
        const mot_de_passe_en_clair=this.__ig1.donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_mot_de_passe_utilisateur_en_clair'];
        /*
          si le fichier sqlite n'est pas trouvé, on le recrée à partir d'une sauvegarde
        */
        if(!(await this.__ig1.is_dir( './__bases_de_donnees' ))){
            try{
                await Deno.mkdir( './__bases_de_donnees' , {"mode" : 0o777} );
            }catch(e){
                console.error( 'e=' , e );
            }
        }
        let __db1=null;
        try{
            __db1=await new Database( chemin_du_fichier_bdd , {"create" : true} );
        }catch(e){
            this.__ig1.ma_trace1( e );
        }
        let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=OFF;','PRAGMA journal_mode=WAL;'];
        for(let i in les_pragma_set){
            try{
                let a=await __db1.exec( les_pragma_set[i] );
            }catch(e){
                this.__ig1.ma_trace1( e );
            }
        }
        const contenu_structure=await Deno.readTextFile( "./__fichiers_generes/__sauvegarde_des_bases/" + nom_du_fichier_bdd + ".v2_structure.sql" );
        /* bdd_1.sqlite.v2_structure.sql */
        try{
            await __db1.exec( contenu_structure );
        }catch(e){
            this.__ig1.ma_trace1( e );
        }
        const contenu_index=await Deno.readTextFile( "./__fichiers_generes/__sauvegarde_des_bases/" + nom_du_fichier_bdd + ".v2_index.sql" );
        try{
            await __db1.exec( contenu_index );
        }catch(e){
            this.__ig1.ma_trace1( e );
        }
        /*
          lecture séquentielle du fichier des INSERT
        */
        let file=await Deno.open( "./__fichiers_generes/__sauvegarde_des_bases/" + nom_du_fichier_bdd + ".v2_donnees.sql" );
        /* Convert bytes to string and Split into lines */
        const readable=file.readable.pipeThrough( new TextDecoderStream() ).pipeThrough( new TextLineStream() );
        let dans_bloc=false;
        let texte_bloc='';
        for await (const line of readable){
            if(line.indexOf( 'DEBUT BLOC TABLE' ) >= 0){
                dans_bloc=true;
                continue;
            }
            if(line.indexOf( 'FIN BLOC TABLE' ) >= 0){
                if(texte_bloc !== ''){
                    try{
                        await __db1.exec( texte_bloc );
                    }catch(e){
                        this.__ig1.ma_trace1( e );
                    }
                    /* console.log('ECRIRE BLOC'+texte_bloc.substr(0,100)) */
                }
                dans_bloc=false;
                texte_bloc='';
            }
            if(dans_bloc === true){
                texte_bloc+=line + '\n';
            }
            /* console.log("Line:", line); */
        }
        /* this.__ig1.ma_trace1( 'mot_de_passe_en_clair=' + mot_de_passe_en_clair ); */
        const mot_de_passe_crypte=await crypte_mot( mot_de_passe_en_clair );
        let sql_1='UPDATE tbl_utilisateurs SET chp_mot_de_passe_utilisateur = \'' + mot_de_passe_crypte + '\' WHERE chi_id_utilisateur=1;';
        try{
            await __db1.prepare( sql_1 ).run();
            await __db1.close();
        }catch(e){
            await __db1.close();
            return({"__xst" : __xer ,"__xme" : this.__ig1.__rev1.nl2( e )});
        }
    }
    /*
      =============================================================================================================
    */
    async recherche_utilisateur_dans_la_base( mat , d , __db1 ){
        /* la table des utilisateurs est toujours dans la base 1 */
        const nom_du_fichier_bdd='bdd_1.sqlite';
        const chemin_du_fichier_bdd='./__bases_de_donnees/' + nom_du_fichier_bdd;
        /* this.__ig1.ma_trace1("this.__ig1.donnees_recues",this.__ig1.donnees_recues); */
        const chp_nom_de_connexion_utilisateur=this.__ig1.donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_nom_de_connexion_utilisateur'];
        const mot_de_passe_en_clair=this.__ig1.donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_mot_de_passe_utilisateur_en_clair'];
        try{
            /*
              à la connexion, on n'a pas forcément une base disponible mais on a une sauvegarde
            */
            await Deno.stat( chemin_du_fichier_bdd );
            /* this.__ig1.ma_trace1( "ici" ); */
        }catch(e){}
        /*#        
          // si on veut réilitialiser le mdp de l'utilisateur proncipal :
          // 1°] méthode préférée
          //   pour les devs : on peut décommenter le code ci dessous et remplacer le if[false] par un if[true] 
          //   pour modifier un utilisateur et son mot de passe
               if[false]{
                   // rattrapage du mot de passe utilisateur 1 
                   // return[this.__ig1.bug1[]]; 
                   const mot_de_passe_crypte=await hash[ mot_de_passe_en_clair ];
                   let critere_1109={
                       "n_chp_nom_de_connexion_utilisateur" : chp_nom_de_connexion_utilisateur ,
                       "n_chp_mot_de_passe_utilisateur" : mot_de_passe_crypte ,
                       "c_chi_id_utilisateur" : 1
                   };
                   let tt1109=await this.__ig1.sql_iii[ 1109 , critere_1109 , this.donnees_retournees , __db1 ];
               }
          // 2°] méthode alternative à la méthode plus haut
          //   pour les devs : on peut aussi mettre à jour directement l'utilisateur/mot de passe en exécutant directement dans la bdd
          //   le mot de passe crypté correspond à r.../r... [ vous êtes censé savoit à quoi correspond r... ]
               UPDATE tbl_utilisateurs set 
                chp_nom_de_connexion_utilisateur = 'r...' , 
                chp_mot_de_passe_utilisateur = '$2a$10$ZUwPUmwknnqKX6R4hxSpouG0TagvEgBPo7Q8SydizbMRitXDxk/Fy'
               WHERE chi_id_utilisateur = 1;
        */
        let tt1101=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chi_id_utilisateur` , `T0`.`chx_acces_utilisateur`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE (`T0`.`chp_nom_de_connexion_utilisateur` = :T0_chp_nom_de_connexion_utilisateur
           AND `T0`.`che_actif_utilisateur` = 1
           AND `T1`.`che_actif_acces` = 1)  
        LIMIT 1 OFFSET 0 
        ;
        */
        /*sql_inclure_fin*/ 1101 , {"T0_chp_nom_de_connexion_utilisateur" : chp_nom_de_connexion_utilisateur} , this.donnees_retournees , __db1 );
        if(tt1101.__xst !== __xsu || tt1101[__xva].length !== 1){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'la combinaison du nom d\'utilisateur et du mot de passe est incorrecte ou bien cet utilisateur est inactif'
                });
        }
        const chp_mot_de_passe_utilisateur_en_clair=this.__ig1.donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_mot_de_passe_utilisateur_en_clair'];
        const isValid=await compare( chp_mot_de_passe_utilisateur_en_clair , tt1101[__xva][0]['T0.chp_mot_de_passe_utilisateur'] );
        if(!isValid){
            return({"__xst" : __xer ,"__xme" : 'erreur sur le nom d\'utilisateur ou sur le mot de passe '});
        }
        return({
                "__xst" : __xsu ,
                "chi_id_utilisateur" : tt1101[__xva][0]['T0.chi_id_utilisateur'] ,
                "chp_nom_de_connexion_utilisateur" : chp_nom_de_connexion_utilisateur ,
                "chp_mot_de_passe_utilisateur" : tt1101[__xva][0]['T0.chp_mot_de_passe_utilisateur'] ,
                "chi_id_acces" : tt1101[__xva][0]['T0.chx_acces_utilisateur']
            });
    }
    /*
      =============================================================================================================
    */
    async verifier_connexion1( mat , d ){
        const nom_du_fichier_bdd='';
        const chemin_du_fichier_bdd='./__bases_de_donnees/bdd_1.sqlite';
        try{
            /*
              à la première connexion, on n'a pas forcément une base disponible mais on a une sauvegarde
            */
            await Deno.stat( chemin_du_fichier_bdd );
            /* this.__ig1.ma_trace1( "ici" ); */
        }catch(e){
            await this.initialiser_la_base_a_partir_de_la_sauvegarde( mat , d );
        }
        let __db1=await this.__ig1.ouvrir_bdd( 1 , false , true );
        const user=await this.recherche_utilisateur_dans_la_base( mat , d , __db1 );
        if(user.__xst !== __xsu){
            return user;
        }
        if(this.__ig1.options_generales.cle_de_session !== ''){
            try{
                Deno.removeSync( './__sessions/' + this.__ig1.options_generales.cle_de_session + '.json' );
            } catch {}
        }
        /*
          maj du nombre de connexions
        */
        let criteres_1107={"c_chi_id_utilisateur" : user['chi_id_utilisateur']};
        let tt1107=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_utilisateurs SET 
           `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
        WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 1107 , criteres_1107 , this.donnees_retournees , __db1 );
        /*
          voir aussi :
          https://www.phptutorial.net/php-tutorial/php-csrf/
        */
        let la_cle=this.__ig1.options_generales.cle_de_session;
        /*
          ici expires = session
          pour avoir un cookie avec expires=valeur alors apres HttpOnly, il faut ajouter : Max-Age=86400;
        */
        /* let le_cookie=this.__ig1.__ndlcs + '=' + la_cle + '; Secure; HttpOnly; SameSite=Strict; Path=/;'; // 'cle_de_session_rev_' + this.__ig1.donnees_retournees._CA_ + ' */
        /* this.__ig1.options_generales["set-cookie"].push( le_cookie ); */
        this.__ig1.donnees_retournees['chi_id_utilisateur']=user['chi_id_utilisateur'];
        this.__ig1.donnees_retournees['chi_id_acces']=user['chi_id_acces'];
        if(this.__ig1.donnees_retournees._CA_ === 1){
            this.__ig1.donnees_retournees['chi_id_projet']=0;
        }else{
            this.__ig1.donnees_retournees['chi_id_projet']=this.__ig1.donnees_retournees._CA_;
        }
        this.__ig1.donnees_retournees['chp_nom_de_connexion_utilisateur']=user['chp_nom_de_connexion_utilisateur'];
        const json_content={
            "chi_id_utilisateur" : this.__ig1.donnees_retournees['chi_id_utilisateur'] ,
            "chi_id_acces" : this.__ig1.donnees_retournees['chi_id_acces'] ,
            "chi_id_projet" : this.__ig1.donnees_retournees['chi_id_projet'] ,
            "chp_nom_de_connexion_utilisateur" : this.__ig1.donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_nom_de_connexion_utilisateur'] ,
            "__autorisations_serveur" : {}
        };
        if(!(await this.__ig1.is_dir( './__sessions' ))){
            try{
                await Deno.mkdir( './__sessions' , {"mode" : 0o777} );
            }catch(e){
                console.error( 'e=' , e );
            }
        }
        try{
            Deno.writeTextFile( './__sessions/' + this.__ig1.options_generales.cle_de_session + '.json' , JSON.stringify( json_content ) );
        }catch(e){
            console.error( 'e=' , e );
        }
        await this.__ig1.obtenir_les_menus( mat , d );
        return user;
    }
    /*
      =============================================================================================================
    */
    page_connexion1( mat , d ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{_connexion1 as _connexion1};