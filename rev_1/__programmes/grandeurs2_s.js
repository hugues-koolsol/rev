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
class grandeurs2{
    /*
      =============================================================================================================
    */
    async obtenir_les_grandeurs_pour_filtre_liste2( mat , d ){
        let id_zone='';
        let chi_id_parametre=0;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }
        }
        if(!(chi_id_parametre > 0 && id_zone !== '')){
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        this.__ig1.ma_trace1( "criteres_select_1182=" , criteres_select_1182 );
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
        let liste_des_tris='';
        let tab=tt1182.__xva[0]['T0.cht_ordre_parametre'].split( ',' );
        if(tab.length === 0){
            return({"__xst" : __xer ,"__xme" : 'pas de tri trouvé [1182 ' + this.__ig1.nl2() + ']'});
        }
        for(let i in tab){
            liste_des_tris+='    WHEN ' + tab[i] + ' THEN ' + i + '\r\n';
        }
        let criteres_1211={"T0_chx_parametre_grandeur" : chi_id_parametre};
        criteres_1211['liste_des_tris']='CASE `T0`.`chi_id_grandeur`\r\n' + liste_des_tris + '    ELSE 999999\r\n    END';
        this.__ig1.ma_trace1( "criteres_1211=" , criteres_1211 );
        let tt1211=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur`
         FROM b1.tbl_grandeurs T0
        WHERE (`T0`.`che_actif_grandeur` = 1
           AND `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur) 
        ORDER BY  :liste_des_tris
        ;
        */
        /*sql_inclure_fin*/ 1211 , criteres_1211 , this.__ig1.donnees_retournees , __db1 );
        if(tt1211.__xst !== __xsu){
            this.__ig1.ma_trace1( "tt1211" , tt1211 );
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1211 ' + this.__ig1.nl2() + ']'});
        }
        /* this.__ig1.ma_trace1("this.__ig1.donnees_retournees.__xac",this.__ig1.donnees_retournees.__xac); */
        this.__ig1.ma_trace1( "tt1211.__xva=" , tt1211.__xva );
        this.__ig1.donnees_retournees.__xva['liste_des_grandeurs']=tt1211.__xva;
        this.__ig1.donnees_retournees.__xva['chi_id_parametre']=chi_id_parametre;
        this.__ig1.donnees_retournees.__xva['id_zone']=id_zone;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const __nbMax=40;
        let __num_page=0;
        let criteres_1212={};
        criteres_1212['quantitee']=__nbMax;
        let chi_id_parametre=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === '__num_page' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                __num_page=parseInt( mat[i + 1][1] , 10 );
            }
        }
        criteres_1212['T0_chx_parametre_grandeur']=chi_id_parametre;
        criteres_1212['__num_page']=__num_page;
        let criteres_select_1182={"T0_chi_id_parametre" : chi_id_parametre};
        this.__ig1.ma_trace1( "criteres_select_1182=" , criteres_select_1182 );
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
            this.__ig1.ma_trace1( "mat" , mat );
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1182 ' + this.__ig1.nl2() + ']'});
        }
        let liste_des_tris='';
        let tab=tt1182.__xva[0]['T0.cht_ordre_parametre'].split( ',' );
        if(tab.length === 0){
            return({"__xst" : __xer ,"__xme" : 'pas de tri trouvé [1182 ' + this.__ig1.nl2() + ']'});
        }
        for(let i in tab){
            liste_des_tris+='    WHEN ' + tab[i] + ' THEN ' + i + '\r\n';
        }
        criteres_1212['liste_des_tris']='CASE chi_id_grandeur\r\n' + liste_des_tris + '    ELSE 999999\r\n    END';
        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 1212 , criteres_1212 , __nbMax , __db1 );
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
    moi='grandeurs2';
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
export{grandeurs2 as grandeurs2};