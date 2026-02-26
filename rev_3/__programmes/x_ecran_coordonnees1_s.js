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
class x_ecran_coordonnees1{
    /*
      =============================================================================================================
    */
    /*
      =============================================================================================================
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let form=donnees_recues[__xva]['__fo1'][donnees_recues[__xva]['__co1']];
        if(form['chp_mot_de_passe_utilisateur'] !== form['chp_mot_de_passe_utilisateur2']){
            this.__gi1.__xsi[__xer].push( 'les deux mots de passe ne correspondent pas [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['chp_mot_de_passe_utilisateur'].length < 7){
            this.__gi1.__xsi[__xer].push( 'le mot de passe doit comporter au moins 7 caractères [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['chp_nom_de_connexion_utilisateur'].length < 5){
            this.__gi1.__xsi[__xer].push( 'le nom de connexion doit comporter au moins 5 caractères [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['chp_nom_de_connexion_utilisateur'].indexOf( ' ' ) >= 0 || form['chp_mot_de_passe_utilisateur'].indexOf( ' ' ) >= 0){
            this.__gi1.__xsi[__xer].push( 'le mot de passe et le nom de connexion ne doivent pas contenit d\'espaces [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          La base de données est la base principale numéro un.
        */
        let __db1=await this.__gi1.ouvrir_bdd( 1 , donnees_retournees , options_generales );
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
        /*sql_inclure_fin*/ 101 , {"T0_chp_nom_de_connexion_utilisateur" : form['chp_nom_de_connexion_utilisateur_ancien']} , donnees_retournees , __db1 );
        if(tt101[__xst] !== __xsu || tt101[__xva].length !== 1){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        const isValid=await compare( form['chp_mot_de_passe_utilisateur3'] , tt101[__xva][0]['T0.chp_mot_de_passe_utilisateur'] );
        if(isValid !== true){
            this.__gi1.__xsi[__xer].push( 'l\'ancien mot de passe que vous avez indiqué n\'est pas le bon ' + this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        const mot_de_passe_crypte=await crypte_mot( form['chp_mot_de_passe_utilisateur'] );
        let critere_109={
            "n_chp_nom_de_connexion_utilisateur" : form['chp_nom_de_connexion_utilisateur'] ,
            "n_chp_mot_de_passe_utilisateur" : mot_de_passe_crypte ,
            "c_chi_id_utilisateur" : donnees_retournees.chi_id_utilisateur
        };
        /* return(this.__gi1.bug1(donnees_retournees,'critere_109=',critere_109)); */
        let tt109=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_utilisateurs SET 
           `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
           `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
        WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 109 , critere_109 , donnees_retournees , __db1 );
        if(tt109[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recupérer_mes_coordonnées( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*
          La base de données est la base principale numéro un.
        */
        let __db1=await this.__gi1.ouvrir_bdd( 1 , donnees_retournees , options_generales );
        let tt108=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 108 , {"T0_chi_id_utilisateur" : donnees_retournees.chi_id_utilisateur} , donnees_retournees , __db1 );
        if(tt108[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]=tt108;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='x_ecran_coordonnees1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
}
export{x_ecran_coordonnees1 as x_ecran_coordonnees1};