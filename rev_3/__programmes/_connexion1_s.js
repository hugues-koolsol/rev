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
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
    deconnexion1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        donnees_retournees[__xac]+='m1(n1(__gi1),f1(maj_contenu1(id(vv_se_deconnecter),type_cible(style),valeur(nom_du_style(display),valeur_de_style(none)))))';
        donnees_retournees[__xac]+='m1(n1(__gi1),f1(maj_menu()))';
        donnees_retournees[__xac]+='m1(n1(__gi1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(supprimer_class),valeur(nom_de_la_classe(yy__0)))))';
        donnees_retournees[__xac]+='m1(n1(__gi1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(ajouter_class),valeur(nom_de_la_classe(yy__1)))))';
        donnees_retournees['chi_id_acces']=0;
        donnees_retournees['chi_id_utilisateur']=0;
        donnees_retournees['chi_id_projet']=0;
        /*
          on met max-age à 0 pour supprimer le cookie
        */
        if(options_generales.cle_de_session !== ''
               && options_generales.cle_de_session.substr( 0 , 4 + String( donnees_retournees._CA_ ).length ) === 'rev_' + donnees_retournees._CA_
        ){
            try{
                Deno.removeSync( './__sessions/' + options_generales.cle_de_session + '.json' );
            } catch {}
            /* max-age = 0 pour supprimer le cookie */
            let le_cookie='cle_de_session_rev_' + donnees_retournees._CA_ + '=; HttpOnly; Max-Age=0; SameSite=Strict; Path=/;';
            options_generales["set-cookie"].push( le_cookie );
        }
        donnees_retournees[__xva]['__liste_des_genres']=[];
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recherche_utilisateur_dans_la_base( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* la table des utilisateurs est toujours dans la base 1 */
        const nom_du_fichier_bdd='bdd_1.sqlite';
        const chemin_du_fichier_bdd='./__bases_de_donnees/' + nom_du_fichier_bdd;
        const chp_nom_de_connexion_utilisateur=donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_nom_de_connexion_utilisateur'];
        const mot_de_passe_en_clair=donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_mot_de_passe_utilisateur_en_clair'];
        try{
            /*
              à la connexion, on n'a pas forcément une base disponible mais on a une sauvegarde
            */
            await Deno.stat( chemin_du_fichier_bdd );
        }catch(e){
            /*
              si le fichier sqlite n'est pas trouvé, on le recrée à partir d'une sauvegarde
            */
            if(!(await this.__gi1.is_dir( './__bases_de_donnees' ))){
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
                this.__gi1.ma_trace1( e );
            }
            let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=OFF;','PRAGMA journal_mode=WAL;'];
            for(let i in les_pragma_set){
                try{
                    let a=await __db1.exec( les_pragma_set[i] );
                }catch(e){
                    this.__gi1.ma_trace1( e );
                }
            }
            const contenu_structure=await Deno.readTextFile( "./__fichiers_generes/" + nom_du_fichier_bdd + ".v2_structure.sql" );
            /* bdd_1.sqlite.v2_structure.sql */
            try{
                await __db1.exec( contenu_structure );
            }catch(e){
                this.__gi1.ma_trace1( e );
            }
            const contenu_index=await Deno.readTextFile( "./__fichiers_generes/" + nom_du_fichier_bdd + ".v2_index.sql" );
            try{
                await __db1.exec( contenu_index );
            }catch(e){
                this.__gi1.ma_trace1( e );
            }
            /*
              lecture séquentielle du fichier des INSERT
            */
            let file=await Deno.open( "./__fichiers_generes/" + nom_du_fichier_bdd + ".v2_donnees.sql" );
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
                            this.__gi1.ma_trace1( e );
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
            /* this.__gi1.ma_trace1( 'mot_de_passe_en_clair=' + mot_de_passe_en_clair ); */
            const mot_de_passe_crypte=await crypte_mot( mot_de_passe_en_clair );
            let sql_1='UPDATE tbl_utilisateurs SET chp_mot_de_passe_utilisateur = \'' + mot_de_passe_crypte + '\' WHERE chi_id_utilisateur=1;';
            try{
                await __db1.prepare( sql_1 ).run();
                await __db1.close();
            }catch(e){
                return({"__xst" : __xer});
            }
        }
        /*
          l'id du projet en cours n'est pas encore fixé.
        */
        options_generales.chemin_des_bdd='./__bases_de_donnees/';
        /* const __db1=await this.__gi1.ouvrir_bdd( 1 , options_generales ); */
        /* const __db1=await this.__gi1.ouvrir_bdd( 1 , donnees_retournees , options_generales ); */
        let __db1=null;
        let chemin_complet_bdd=options_generales.chemin_des_bdd + 'bdd_1.sqlite';
        /* this.ma_trace1('chemin_complet_bdd=',chemin_complet_bdd); */
        try{
            __db1=new Database( chemin_complet_bdd , {"create" : false} );
            let les_pragma_set=['PRAGMA encoding = "UTF-8";','PRAGMA foreign_keys=ON;','PRAGMA journal_mode=WAL;','attach database "' + chemin_complet_bdd + '" as b1'];
            for(let i in les_pragma_set){
                let a=await __db1.exec( les_pragma_set[i] );
            }
            options_generales.bdd_ouvertes[1]={"base" : __db1 ,"ouverte" : true};
        }catch(e){
            console.log( e.stack );
            throw new Error( 'erreur sur ' + chemin_complet_bdd );
        }
        /*#        
          // pour les devs : on peut décommenter le code ci dessous et remplacer le if(false) par un if(true) pour modifier un mot de passe en "dur"
          if(false){
              // rattrapage du mot de passe utilisateur 1 
              // return(this.__gi1.bug1()); 
              const mot_de_passe_crypte=await hash( mot_de_passe_en_clair );
              let critere_109={
                  "n_chp_nom_de_connexion_utilisateur" : chp_nom_de_connexion_utilisateur ,
                  "n_chp_mot_de_passe_utilisateur" : mot_de_passe_crypte ,
                  "c_chi_id_utilisateur" : 1
              };
              let tt109=await this.__gi1.sql_iii( 109 , critere_109 , donnees_retournees , __db1 );
          }
        */
        let tt101=await this.__gi1.sql_iii(
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
        /*sql_inclure_fin*/ 101 , {"T0_chp_nom_de_connexion_utilisateur" : chp_nom_de_connexion_utilisateur} , donnees_retournees , __db1 );
        if(tt101[__xst] !== __xsu || tt101[__xva].length !== 1){
            this.__gi1.__xsi[__xdv].push( 'erreur [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        return({
                "__xst" : __xsu ,
                "chi_id_utilisateur" : tt101[__xva][0]['T0.chi_id_utilisateur'] ,
                "chp_nom_de_connexion_utilisateur" : chp_nom_de_connexion_utilisateur ,
                "chp_mot_de_passe_utilisateur" : tt101[__xva][0]['T0.chp_mot_de_passe_utilisateur'] ,
                "chi_id_acces" : tt101[__xva][0]['T0.chx_acces_utilisateur'] ,
                "__db1" : __db1
            });
    }
    /*
      =============================================================================================================
    */
    async verifier_connexion1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /* this.__gi1.ma_trace1('donnees_recues=',donnees_recues); */
        const user=await this.recherche_utilisateur_dans_la_base( mat , d , donnees_recues , donnees_retournees , options_generales );
        if(!user || user.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( 'la combinaison du nom d\'utilisateur et du mot de passe est incorrecte ou bien cet utilisateur est inactif' );
            return({"__xst" : __xer});
        }
        const chp_mot_de_passe_utilisateur_en_clair=donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_mot_de_passe_utilisateur_en_clair'];
        const isValid=await compare( chp_mot_de_passe_utilisateur_en_clair , user.chp_mot_de_passe_utilisateur );
        if(!isValid){
            this.__gi1.__xsi[__xer].push( 'erreur sur le nom d\'utilisateur ou sur le mot de passe ' + this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(options_generales.cle_de_session !== ''){
            try{
                Deno.removeSync( './__sessions/' + options_generales.cle_de_session + '.json' );
            } catch {}
        }
        /*
          maj du nombre de connexions
        */
        let criteres_107={"c_chi_id_utilisateur" : user['chi_id_utilisateur']};
        let tt107=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_utilisateurs SET 
           `chi_compteur1_utilisateur` = (chi_compteur1_utilisateur+1)
        WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 107 , criteres_107 , donnees_retournees , user['__db1'] );
        /*
          voir aussi :
          https://www.phptutorial.net/php-tutorial/php-csrf/
        */
        let la_cle='rev_' + donnees_retournees._CA_ + '_' + (await this.__gi1.cle_aleatoire());
        /*
          ici expires = session
          pour avoir un cookie avec expires=valeur alors apres HttpOnly, il faut ajouter : Max-Age=86400;
        */
        let le_cookie='cle_de_session_rev_' + donnees_retournees._CA_ + '=' + la_cle + '; Secure; HttpOnly; SameSite=Strict; Path=/;';
        options_generales["set-cookie"].push( le_cookie );
        donnees_retournees['chi_id_utilisateur']=user['chi_id_utilisateur'];
        donnees_retournees['chi_id_acces']=user['chi_id_acces'];
        donnees_retournees['chi_id_projet']=0;
        donnees_retournees['chp_nom_de_connexion_utilisateur']=user['chp_nom_de_connexion_utilisateur'];
        const json_content={
            "chi_id_utilisateur" : donnees_retournees['chi_id_utilisateur'] ,
            "chi_id_acces" : donnees_retournees['chi_id_acces'] ,
            "chi_id_projet" : donnees_retournees['chi_id_projet'] ,
            "chp_nom_de_connexion_utilisateur" : donnees_recues.__xva['__fo1']['vv_formulaire_de_connexion']['chp_nom_de_connexion_utilisateur']
        };
        if(!(await this.__gi1.is_dir( './__sessions' ))){
            try{
                await Deno.mkdir( './__sessions' , {"mode" : 0o777} );
            }catch(e){
                console.error( 'e=' , e );
            }
        }
        try{
            Deno.writeTextFile( './__sessions/' + la_cle + '.json' , JSON.stringify( json_content ) );
        }catch(e){
            console.error( 'e=' , e );
        }
        await this.__gi1.obtenir_les_menus( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_connexion1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{_connexion1 as _connexion1};