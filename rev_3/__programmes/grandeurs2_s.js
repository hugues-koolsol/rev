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
    async selection_des_valeurs( chi_id_parametre , T0_che_actif_grandeur ){
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_cible_ou_base_un );
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
        let liste_des_tris='';
        let tab=tt1182.__xva[0]['T0_cht_ordre_parametre'].split( ',' );
        if(tab.length === 0){
            return({"__xst" : __xer ,"__xme" : 'pas de tri trouvé [1182 ' + this.__ig1.nl2() + ']'});
        }
        for(let i in tab){
            liste_des_tris+='    WHEN ' + tab[i] + ' THEN ' + i + '\r\n';
        }
        let criteres_1225={"T0_chx_parametre_grandeur" : chi_id_parametre ,"T0_che_actif_grandeur" : '0,1'};
        criteres_1225['liste_des_tris']='CASE `T0`.`chi_id_grandeur`\r\n' + liste_des_tris + '    ELSE 999999\r\n    END';
        let tt1225=await this.__ig1.sql_iij(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_grandeur` , `T0`.`chp_cle_grandeur` , `T0`.`cht_rev_grandeur` , `T0`.`chc_couleur_texte_grandeur` , `T0`.`chc_couleur_fond_grandeur`
         FROM b1.tbl_grandeurs T0
        WHERE (   `T0`.`che_actif_grandeur` IN (:T0_che_actif_grandeur)
           AND `T0`.`chx_parametre_grandeur` = :T0_chx_parametre_grandeur) 
        ORDER BY  :liste_des_tris
        ;
        */
        /*sql_inclure_fin*/ 1225 , criteres_1225 , __db1 );
        return({"__xst" : tt1225.__xst ,"les_elements" : tt1225.__xva ,"chi_id_basedd" : 1});
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_grandeurs_pour_sous_liste2( mat , d ){
        /*
          utilisé pour sélectionner une valeur éventuellement inactive dans un écran de sous_liste2
        */
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
        /*
          T0_che_actif_grandeur='0,1'
        */
        let les_valeurs=await this.selection_des_valeurs( chi_id_parametre , '0,1' );
        if(les_valeurs.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1225 ' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.__xva['liste_des_grandeurs']=les_valeurs.les_elements;
        this.__ig1.donnees_retournees.__xva['chi_id_basedd']=les_valeurs.chi_id_basedd;
        this.__ig1.donnees_retournees.__xva['chi_id_parametre']=chi_id_parametre;
        this.__ig1.donnees_retournees.__xva['id_zone']=id_zone;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async obtenir_les_grandeurs_pour_filtre_liste2( mat , d ){
        let id_zone='';
        let origine_de_l_appel_liste='';
        let chi_id_parametre=0;
        let champ_texte_associé='';
        let champ_libelle_associé='';
        let cle_session='';
        let __sous_titre_a_afficher='';
        /* this.__ig1.ma_trace1("mat=",mat); */
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'origine_de_l_appel_liste' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                origine_de_l_appel_liste=mat[i + 1][1];
            }else if(mat[i][1] === 'champ_texte_associé' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_texte_associé=mat[i + 1][1];
            }else if(mat[i][1] === 'champ_libelle_associé' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_libelle_associé=mat[i + 1][1];
            }else if(mat[i][1] === 'cle_session' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                cle_session=mat[i + 1][1];
            }else if(mat[i][1] === '__sous_titre_a_afficher' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                __sous_titre_a_afficher=mat[i + 1][1];
            }
        }
        if(!(chi_id_parametre > 0 && id_zone !== '')){
            return({"__xst" : __xer ,"__xme" : ' [' + this.__ig1.nl2() + ']'});
        }
        /*
          T0_che_actif_grandeur='0,1'
        */
        let les_valeurs=await this.selection_des_valeurs( chi_id_parametre , '0,1' );
        if(les_valeurs.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1225 ' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.__xva['liste_des_grandeurs']=les_valeurs.les_elements;
        this.__ig1.donnees_retournees.__xva['chi_id_basedd']=les_valeurs.chi_id_basedd;
        this.__ig1.donnees_retournees.__xva['chi_id_parametre']=chi_id_parametre;
        this.__ig1.donnees_retournees.__xva['id_zone']=id_zone;
        this.__ig1.donnees_retournees.__xva['origine_de_l_appel_liste']=origine_de_l_appel_liste;
        this.__ig1.donnees_retournees.__xva['champ_texte_associé']=champ_texte_associé;
        this.__ig1.donnees_retournees.__xva['champ_libelle_associé']=champ_libelle_associé;
        this.__ig1.donnees_retournees.__xva['cle_session']=cle_session;
        this.__ig1.donnees_retournees.__xva['__sous_titre_a_afficher']=__sous_titre_a_afficher;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        /*
          utilisé pour sélectionner une valeur active dans un écran de création ou de modification
        */
        let chi_id_parametre=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_parametre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === '__num_page' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                __num_page=parseInt( mat[i + 1][1] , 10 );
            }
        }
        /*
          attention, ici on ne prend que les actifs T0_che_actif_grandeur = '1'
        */
        let les_valeurs=await this.selection_des_valeurs( chi_id_parametre , '0,1' );
        if(les_valeurs.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [1225 ' + this.__ig1.nl2() + ']'});
        }
        this.__ig1.donnees_retournees.__xva['sous_liste2']=les_valeurs.les_elements;
        this.__ig1.donnees_retournees.__xva['chi_id_basedd']=les_valeurs.chi_id_basedd;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='grandeurs2';
    __ig1=null;
    __variables_module={};
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