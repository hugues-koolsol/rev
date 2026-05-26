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
    async modifier1( mat , d ){
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][this.__ig1.donnees_recues[__xva]['__co1']];
        if(form['chp_mot_de_passe_utilisateur'] !== form['chp_mot_de_passe_utilisateur2']){
            return({"__xst" : __xer ,"__xme" : 'les deux mots de passe ne correspondent pas [' + this.__ig1.nl2() + ']'});
        }
        if(form['chp_mot_de_passe_utilisateur'].length < 7){
            return({"__xst" : __xer ,"__xme" : 'le mot de passe doit comporter au moins 7 caractères [' + this.__ig1.nl2() + ']'});
        }
        if(form['chp_nom_de_connexion_utilisateur'].length < 5){
            return({"__xst" : __xer ,"__xme" : 'le nom de connexion doit comporter au moins 5 caractères [' + this.__ig1.nl2() + ']'});
        }
        if(form['chp_nom_de_connexion_utilisateur'].indexOf( ' ' ) >= 0 || form['chp_mot_de_passe_utilisateur'].indexOf( ' ' ) >= 0){
            return({"__xst" : __xer ,"__xme" : 'le mot de passe et le nom de connexion ne doivent pas contenit d\'espaces [' + this.__ig1.nl2() + ']'});
        }
        /*
          La base de données est la base principale numéro un.
        */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let tt101=await this.__ig1.sql_iii(
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
        /*sql_inclure_fin*/ 101 , {"T0_chp_nom_de_connexion_utilisateur" : form['chp_nom_de_connexion_utilisateur_ancien']} , this.__ig1.donnees_retournees , __db1 );
        if(tt101[__xst] !== __xsu || tt101[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : tt101.__xme});
        }
        const isValid=await compare( form['chp_mot_de_passe_utilisateur3'] , tt101[__xva][0]['T0.chp_mot_de_passe_utilisateur'] );
        if(isValid !== true){
            return({"__xst" : __xer ,"__xme" : 'l\'ancien mot de passe que vous avez indiqué n\'est pas le bon ' + this.__ig1.nl2()});
        }
        const mot_de_passe_crypte=await crypte_mot( form['chp_mot_de_passe_utilisateur'] );
        let critere_109={
            "n_chp_nom_de_connexion_utilisateur" : form['chp_nom_de_connexion_utilisateur'] ,
            "n_chp_mot_de_passe_utilisateur" : mot_de_passe_crypte ,
            "c_chi_id_utilisateur" : this.__ig1.donnees_retournees.chi_id_utilisateur
        };
        /* return(this.__ig1.bug1(this.__ig1.donnees_retournees,'critere_109=',critere_109)); */
        let tt109=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_utilisateurs SET 
           `chp_nom_de_connexion_utilisateur` = :n_chp_nom_de_connexion_utilisateur , 
           `chp_mot_de_passe_utilisateur` = :n_chp_mot_de_passe_utilisateur
        WHERE `chi_id_utilisateur` = :c_chi_id_utilisateur ;
        */
        /*sql_inclure_fin*/ 109 , critere_109 , this.__ig1.donnees_retournees , __db1 );
        if(tt109[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt109.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async recupérer_mes_coordonnées( mat , d ){
        /*
          La base de données est la base principale numéro un.
        */
        let __db1=await this.__ig1.ouvrir_bdd( 1 );
        let tt108=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_utilisateur` , `T0`.`chp_nom_de_connexion_utilisateur` , `T0`.`chp_mot_de_passe_utilisateur` , `T0`.`chp_parametres_utilisateur` , `T0`.`chi_compteur1_utilisateur` , 
        `T0`.`chx_acces_utilisateur` , `T1`.`chp_nom_acces`
         FROM b1.tbl_utilisateurs T0
         LEFT JOIN b1.tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
        
        WHERE `T0`.`chi_id_utilisateur` = :T0_chi_id_utilisateur
        ;
        */
        /*sql_inclure_fin*/ 108 , {"T0_chi_id_utilisateur" : this.__ig1.donnees_retournees.chi_id_utilisateur} , this.__ig1.donnees_retournees , __db1 );
        if(tt108[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt108.__xme});
        }
        this.__ig1.donnees_retournees[__xva]=tt108;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='x_ecran_coordonnees1';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
}
export{x_ecran_coordonnees1 as x_ecran_coordonnees1};