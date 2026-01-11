/*
  #transformer_requete_en_fonction_js
  #transformer_requete_en_fonction_php
  transform_source_rev_vers_sql
  traiter_donnees_bases_rev
  convertir_rev_pour_construction
*/
import {z_rev_vers_sql1} from './z_rev_vers_sql1.js';
const CRLF='\r\n';
class c_concevoir_une_requete1{
    moi='c_concevoir_une_requete1';
    #nom_de_la_variable='';
    #obj_init={};
    /*
      structure principale de ce programme
    */
    #obj_webs_init={
        "type_de_requete" : 'select' ,
        "bases" : {} ,
        "ordre_des_tables" : [] ,
        "nom_zone_cible" : 'champs_sortie' ,
        "indice_table_pour_jointure_gauche" : 0 ,
        "gauche_0_droite_1" : 0 ,
        "champs_sortie" : [] ,
        "conditions" : [] ,
        "complements" : [] ,
        "tableau_des_bases_tables_champs" : {} ,
        "ne_pas_tester_les_dependances_de_suppression" : 0 ,
        "sur_base_principale" : 0 ,
        "ne_pas_traiter_la_maj_ts_modification" : 0 ,
        "ne_pas_traiter_la_maj_ts_creation" : 0 ,
        "ne_pas_traiter_le_numero_de_revision" : 0
    };
    #obj_webs={};
    #div_de_travail=null;
    #deb_selection_dans_formule=0;
    #globale_id_requete=0;
    #globale_rev_requete='';
    #globale_type_requete='';
    #globale_commentaire_requete='';
    #globale_chp_table_reference_requete='';
    #che_est_souche_requete='0';
    #globale_debut_url='za_ajax.php';
    __m_rev_vers_sql1=null;
    /*
      =============================================================================================================
    */
    enregistrer_la_requete_en_base( mat , d ){
        __gi1.redirection1( 'm1(n1(c_requetes1),f1(liste_du_menu0()))' , null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    bouton_ajouter_le_rev_en_base( mat , d ){
        let chi_id_requete=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        __gi1.supprimer_les_messages();
        var obj1=__gi1.__rev1.rev_tm( document.getElementById( 'vv_zone_rev_01' ).value );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let obj={
                    "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(enregistrer_la_requete_en_base())))' ,
                    "__xva" : {
                        "rev" : document.getElementById( 'vv_zone_rev_01' ).value ,
                        "sql" : document.getElementById( 'txtar2' ).value ,
                        "php" : document.getElementById( 'php_de_la_requete' ).value ,
                        "js" : document.getElementById( 'js1_de_la_requete' ).value ,
                        "type" : this.#obj_webs.type_de_requete ,
                        "cht_matrice_requete" : obj1.__xva ,
                        "cht_commentaire_requete" : document.getElementById( 'cht_commentaire_requete' ).value ,
                        "chi_id_requete" : chi_id_requete ,
                        "che_est_souche_requete" : document.getElementById( 'che_est_souche_requete' ).value ,
                        "chp_table_reference_requete" : document.getElementById( 'chp_table_reference_requete' ).value
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
            }else{
                debugger;
                return({"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()});
            }
        }else{
            debugger;
            return({"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    retirer_ce_champ_de_complements( mat , d ){
        if(confirm( 'Certain ?' )){
            this.#obj_webs.complements.splice( ind , 1 );
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
    */
    retirer_ce_champ_de_where( mat , d ){
        if(confirm( 'Certain ?' )){
            this.#obj_webs.conditions=[];
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
    */
    selectionner_champs_destination2( mat , d ){
        let champs_selectionnes='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'champs_selectionnes' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champs_selectionnes=mat[i + 1][1];
            }
        }
        this.#obj_webs.nom_zone_cible=champs_selectionnes;
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    selectionner_ou_deselectionner_cette_base( mat , d ){
        let chi_id_basedd=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var i={};
        for(i in this.#obj_webs['bases']){
            if(chi_id_basedd === this.#obj_webs['bases'][i]['chi_id_basedd']){
                if(this.#obj_webs['bases'][i].selectionne === true){
                    this.#obj_webs['bases'][i].selectionne=false;
                    var liste_des_tables_a_retirer=[];
                    var k=0;
                    for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                        if(this.#obj_webs['ordre_des_tables'][k].id_bdd === chi_id_basedd){
                            liste_des_tables_a_retirer.push( k );
                        }
                    }
                    var k=liste_des_tables_a_retirer.length - 1;
                    for( k=liste_des_tables_a_retirer.length - 1 ; k >= 0 ; k-- ){
                        this.#obj_webs['ordre_des_tables'].splice( liste_des_tables_a_retirer[k] , 1 );
                    }
                }else{
                    this.#obj_webs['bases'][i].selectionne=true;
                }
                break;
            }
        }
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_sur_base_principale( mat , d ){
        this.#obj_webs.sur_base_principale=document.getElementById( 'vv_sur_base_principale' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_ne_pas_traiter_la_maj_ts_creation( mat , d ){
        this.#obj_webs.ne_pas_traiter_la_maj_ts_creation=document.getElementById( 'vv_ne_pas_traiter_la_maj_ts_creation' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_ne_pas_traiter_le_numero_de_revision( mat , d ){
        this.#obj_webs.ne_pas_traiter_le_numero_de_revision=document.getElementById( 'vv_ne_pas_traiter_le_numero_de_revision' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_ne_pas_traiter_la_maj_ts_modification( mat , d ){
        this.#obj_webs.ne_pas_traiter_la_maj_ts_modification=document.getElementById( 'vv_ne_pas_traiter_la_maj_ts_modification' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_ne_pas_tester_les_dependances_de_suppression( mat , d ){
        this.#obj_webs.ne_pas_tester_les_dependances_de_suppression=document.getElementById( 'vv_ne_pas_tester_les_dependances_de_suppression' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    changer_la_jointure( mat , d ){
        /* ind , element_html ]{ */
        let nom_zone='';
        let ind=-1;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'ind' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                ind=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#obj_webs['ordre_des_tables'][ind].jointure=document.getElementById( nom_zone ).value;
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    selectionner_champs_destination1( mat , d ){
        /* champs_selectionnes , indice_table , gauche_0_droite_1 ]{ */
        let champs_selectionnes='';
        let indice_table=-1;
        let gauche_0_droite_1='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'gauche_0_droite_1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                gauche_0_droite_1=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'champs_selectionnes' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champs_selectionnes=mat[i + 1][1];
            }else if(mat[i][1] === 'indice_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(champs_selectionnes === 'champs_jointure_gauche'){
            this.#obj_webs.nom_zone_cible=champs_selectionnes;
            this.#obj_webs.indice_table_pour_jointure_gauche=indice_table;
            this.#obj_webs.gauche_0_droite_1=gauche_0_droite_1;
        }else{
            this.#obj_webs.nom_zone_cible=champs_selectionnes;
        }
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_type_de_requete( mat , d ){
        this.#obj_webs.type_de_requete=document.getElementById( 'type_de_requete' ).value;
        if(this.#obj_webs.type_de_requete === 'insert'){
            this.#obj_webs.nom_zone_cible='champs_sortie';
        }
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    retirer_ce_champ_de_sortie( mat , d ){
        if(!confirm( 'Certain ?' )){
            return;
        }
        let ind=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'ind' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                ind=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#obj_webs.champs_sortie.splice( ind , 1 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    selectionner_ce_champ( mat , d ){
        let nom_du_champ='';
        let nom_de_la_table='';
        let id_bdd=0;
        let indice_table=0;
        let Tn='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'Tn' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                Tn=mat[i + 1][1];
            }else if(mat[i][1] === 'indice_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var nom_zone_cible='champs_sortie';
        if(this.#obj_webs.type_de_requete === 'update'){
            if(this.#obj_webs[nom_zone_cible].length === 0){
                this.#obj_webs[nom_zone_cible].push( {"type_d_element" : 'formule' ,"formule" : 'affecte(champ(`' + nom_du_champ + '`), :n_' + nom_du_champ + ')'} );
            }else{
                if(this.#obj_webs[nom_zone_cible].length === 1 && this.#obj_webs[nom_zone_cible][0].type_d_element === 'formule'){
                    this.#obj_webs[nom_zone_cible][0].formule+='affecte(champ(`' + nom_du_champ + '`), :n_' + nom_du_champ + ')';
                }else{
                    debugger;
                }
            }
        }else{
            if(this.#obj_webs.type_de_requete !== 'insert'){
                /* select , delete , liste_ecran */
                if(this.#obj_webs.nom_zone_cible === "champs_jointure_gauche"){
                    if(this.#obj_webs.gauche_0_droite_1 === 0){
                        this.#obj_webs.ordre_des_tables[this.#obj_webs.indice_table_pour_jointure_gauche].champs_jointure_gauche.champ_table_mere={"nom_du_champ" : nom_du_champ ,"nom_de_la_table" : nom_de_la_table ,"id_bdd" : id_bdd ,"indice_table" : indice_table};
                    }else{
                        this.#obj_webs.ordre_des_tables[this.#obj_webs.indice_table_pour_jointure_gauche].champs_jointure_gauche.champ_table_fille={"nom_du_champ" : nom_du_champ ,"nom_de_la_table" : nom_de_la_table ,"id_bdd" : id_bdd ,"indice_table" : indice_table};
                    }
                    this.#mettre_en_stokage_local_et_afficher();
                    return;
                }else{
                    var lst=document.getElementsByName( 'champs_selectionnes' );
                    var i=0;
                    for( i=0 ; i < lst.length ; i++ ){
                        if(lst[i].checked === true){
                            nom_zone_cible=lst[i].value;
                            break;
                        }
                    }
                }
            }else{
                nom_zone_cible='champs_sortie';
            }
            this.#obj_webs[nom_zone_cible].push( {
                     /*  */
                    "alias_du_champ" : '' ,
                    "Tn" : '' ,
                    "id_bdd" : id_bdd ,
                    "nom_de_la_table" : nom_de_la_table ,
                    "nom_du_champ" : nom_du_champ ,
                    "indice_table" : indice_table ,
                    "type_d_element" : 'champ' ,
                    "formule" : 'champ'
                } );
        }
        this.#obj_webs.nom_zone_cible=nom_zone_cible;
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    selectionner_ou_deselectionner_cette_table( mat , d ){
        let id_bdd=0;
        let nom_de_la_table='';
        let selectionner=0;
        let indice_table=0;
        let alias_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'alias_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                alias_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'selectionner' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                selectionner=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'indice_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(selectionner === 0){
            /* on DE-sélectionne */
            let prefix_du_champ='';
            let liste_indice_formule=[];
            /*
              retirer les champs complements
            */
            for( let k=this.#obj_webs['complements'].length - 1 ; k >= 0 ; k-- ){
                if(this.#obj_webs['complements'][k].type_d_element === 'formule'){
                    liste_indice_formule=[];
                    let formule=this.#obj_webs['complements'][k].formule;
                    var matriceFonction=__gi1.__rev1.rev_tm( formule );
                    var mat=matriceFonction.__xva;
                    var l01=mat.length;
                    for( let i=1 ; i < l01 ; i++ ){
                        if(mat[i][1] === 'champ' && mat[i][2] === 'f'){
                            if(mat[i][8] === 2){
                                prefix_du_champ=mat[i + 1][1];
                                let nom_du_champ=mat[i + 2][1];
                                if(nom_du_champ !== '' && alias_de_la_table === prefix_du_champ){
                                    let indice_parent=mat[i][7];
                                    if(!liste_indice_formule.includes( indice_parent )){
                                        liste_indice_formule.push( indice_parent );
                                    }
                                }
                            }else{
                                debugger;
                            }
                        }
                    }
                    if(liste_indice_formule.length > 0){
                        for( let j=liste_indice_formule.length - 1 ; j >= 0 ; j-- ){
                            __gi1.__rev1.supprimer_un_element_de_la_matrice( mat , liste_indice_formule[j] , 0 );
                        }
                        if(mat.length === 2){
                            this.#obj_webs['complements']=[];
                        }else{
                            let text_rev='';
                            let obj1=__gi1.__rev1.matrice_vers_source_rev1( mat , 0 , true , 1 );
                            if(obj1.__xst === __xsu){
                                this.#obj_webs['complements'][k].formule=obj1.__xva;
                            }else{
                                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                            }
                        }
                    }else{
                        debugger;
                    }
                }else{
                    if(this.#obj_webs['complements'][k].Tn === alias_de_la_table){
                        this.#obj_webs['complements'].splice( k , 1 );
                    }
                }
            }
            /*
              retirer les champs sortie
            */
            for( let k=this.#obj_webs['champs_sortie'].length - 1 ; k >= 0 ; k-- ){
                if(this.#obj_webs['champs_sortie'][k].type_d_element === 'formule'){
                    debugger;
                }else{
                    if(this.#obj_webs['champs_sortie'][k].Tn === alias_de_la_table){
                        this.#obj_webs['champs_sortie'].splice( k , 1 );
                    }
                }
            }
            for( let k=this.#obj_webs['conditions'].length - 1 ; k >= 0 ; k-- ){
                if(this.#obj_webs['conditions'][k].type_d_element === 'formule'){
                    liste_indice_formule=[];
                    let formule=this.#obj_webs['conditions'][k].formule;
                    var matriceFonction=__gi1.__rev1.rev_tm( formule );
                    var mat=matriceFonction.__xva;
                    var l01=mat.length;
                    for( let i=1 ; i < l01 ; i++ ){
                        if(mat[i][1] === 'champ' && mat[i][2] === 'f'){
                            if(mat[i][8] === 2){
                                prefix_du_champ=mat[i + 1][1];
                                let nom_du_champ=mat[i + 2][1];
                                if(nom_du_champ !== '' && alias_de_la_table === prefix_du_champ){
                                    let indice_parent=mat[i][7];
                                    if(!liste_indice_formule.includes( indice_parent )){
                                        liste_indice_formule.push( indice_parent );
                                    }
                                }
                            }else{
                                debugger;
                            }
                        }
                    }
                    if(liste_indice_formule.length > 0){
                        for( let j=liste_indice_formule.length - 1 ; j >= 0 ; j-- ){
                            __gi1.__rev1.supprimer_un_element_de_la_matrice( mat , liste_indice_formule[j] , 0 );
                        }
                        if(mat.length === 2){
                            this.#obj_webs['conditions']=[];
                        }else{
                            let text_rev='';
                            let obj1=__gi1.__rev1.matrice_vers_source_rev1( mat , 0 , true , 1 );
                            if(obj1.__xst === __xsu){
                                this.#obj_webs['conditions'][k].formule=obj1.__xva;
                            }else{
                                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                            }
                        }
                    }else{
                        debugger;
                    }
                }else{
                    debugger;
                    if(this.#obj_webs['conditions'][k].id_bdd === id_bdd
                           && this.#obj_webs['conditions'][k].nom_de_la_table === nom_de_la_table
                           && indice_table === this.#obj_webs['conditions'][k].indice_table
                    ){
                        liste_des_champ_a_retirer.push( k );
                    }
                }
            }
            for( let j=this.#obj_webs['ordre_des_tables'].length - 1 ; j >= 0 ; j-- ){
                if(this.#obj_webs['ordre_des_tables'][j].alias_de_la_table === alias_de_la_table){
                    this.#obj_webs['ordre_des_tables'].splice( j , 1 );
                    break;
                }
            }
            if(this.#obj_webs['ordre_des_tables'].length === 0){
                for(let j in this.#obj_webs['bases'][id_bdd]['tables']){
                    if(j === nom_de_la_table){
                        this.#obj_webs['bases'][id_bdd]['tables'][j].active=false;
                    }
                }
            }else{
                debugger;
            }
        }else{
            /* on sélectionne */
            let nom_jointure='table_reference';
            if(this.#obj_webs['ordre_des_tables'].length > 0){
                nom_jointure='jointure_croisée';
            }
            this.#obj_webs['ordre_des_tables'].push( {
                    "id_bdd" : id_bdd ,
                    "nom_de_la_table" : nom_de_la_table ,
                    "indice_table" : this.#obj_webs['ordre_des_tables'].length ,
                    "alias_de_la_table" : 'T' + this.#obj_webs['ordre_des_tables'].length ,
                    "jointure" : nom_jointure ,
                    "champs_jointure_gauche" : {"champ_table_fille" : null ,"champ_table_mere" : null}
                } );
        }
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    ajouter_la_formule( mat , d ){
        let destination='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        var zone_formule=document.getElementById( 'zone_formule' );
        var rev_de_la_formule=zone_formule.value;
        var obj=__gi1.__rev1.rev_tcm( rev_de_la_formule );
        if(obj.__xst === __xsu){
            if(!this.#obj_webs[destination]){
                this.#obj_webs[destination]=[];
            }
            this.#obj_webs[destination].push( {"type_d_element" : 'formule' ,"formule" : rev_de_la_formule} );
            __gi1.fermer_la_sous_fenetre();
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
    */
    ajouter_une_formule( mat , d ){
        let destination='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        this.#deb_selection_dans_formule=-1;
        var t='';
        var tabchamps=[];
        t+='<h1>ajouter une formule</h1>';
        if(this.#obj_webs['ordre_des_tables'].length > 0){
            for( let i=0 ; i < this.#obj_webs['ordre_des_tables'].length ; i++ ){
                var elem=this.#obj_webs['ordre_des_tables'][i];
                var id_du_champ={};
                for(id_du_champ in this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs']){
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(ajouter_ce_champ_dans_la_formule(';
                    cmd+='  nom_du_champ(' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '),';
                    cmd+='  nom_de_la_table(' + elem.nom_de_la_table + '),';
                    cmd+='  id_bdd(' + elem.id_bdd + '),';
                    cmd+='  indice_table(' + i + '),';
                    cmd+='  destination(' + destination + '),';
                    cmd+=')))';
                    t+='<div class="rev_bouton" data-rev_click="' + cmd + '">+T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>';
                    tabchamps.push( {
                            "indice_table" : this.#obj_webs['ordre_des_tables'][i].indice_table ,
                            "nom_du_champ" : this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ ,
                            "non_nulle" : this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].non_nulle ,
                            "espece_du_champ" : this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].espece_du_champ
                        } );
                }
            }
        }
        var tab_ex=[
            'tous_les_champs()',
            'plus(champ(xxx) , 2)',
            'concat(\'=>\',champ(xxx),\'<=\')',
            'compter(tous_les_champs())',
            'ignorer()',
            '5'
        ];
        if(destination === 'complements'){
            tab_ex.push( 'trier_par((champ(xxx),décroissant()),(champ(xxx),croissant()))' );
            tab_ex.push( ',limité_à(quantité(:quantitee),début(:debut))' );
        }
        for( let i=0 ; i < tab_ex.length ; i++ ){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(ajouter_cette_formule_dans_la_formule(';
            cmd+='  formule(\'' + tab_ex[i].replace( /"/g , '&#34;' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            cmd+=')))';
            t+='<div class="rev_bouton" data-rev_click="' + cmd + '">' + tab_ex[i] + '</div>';
        }
        var contenu='';
        if("requete_manuelle" === this.#obj_webs.type_de_requete){
        }else if(("liste_ecran" === this.#obj_webs.type_de_requete
                   || "select" === this.#obj_webs.type_de_requete)
               && tabchamps.length > 0
        ){
            if("conditions" === destination){
                var i={};
                for(i in tabchamps){
                    /* type_du_champ */
                    if(tabchamps[i].espece_du_champ.substr( 0 , 3 ).toLowerCase() === 'int'
                           || tabchamps[i].espece_du_champ.substr( 0 , 5 ).toLowerCase() === 'float'
                           || tabchamps[i].espece_du_champ.substr( 0 , 6 ).toLowerCase() === 'double'
                           || tabchamps[i].espece_du_champ.substr( 0 , 7 ).toLowerCase() === 'decimal'
                    ){
                        contenu+=CRLF + ' egal(champ(`T' + tabchamps[i].indice_table + '` , `' + tabchamps[i].nom_du_champ + '`), :T' + tabchamps[i].indice_table + '_' + tabchamps[i].nom_du_champ + '),';
                    }else{
                        contenu+=CRLF + ' comme(champ(`T' + tabchamps[i].indice_table + '` , `' + tabchamps[i].nom_du_champ + '`), :T' + tabchamps[i].indice_table + '_' + tabchamps[i].nom_du_champ + '),';
                    }
                }
                contenu='et(' + contenu + CRLF + ')';
            }else if("complements" === destination){
                contenu+='trier_par(' + CRLF + '(champ(`T' + tabchamps[0].indice_table + '` , `' + tabchamps[0].nom_du_champ + '`),décroissant()),' + CRLF + '),' + CRLF + 'limité_à(quantité(:quantitee),début(:debut))';
            }
        }else if("insert" === this.#obj_webs.type_de_requete){
            if("champs_sortie" === destination && tabchamps.length > 0){
                var i={};
                for(i in tabchamps){
                    contenu+=CRLF + ' affecte(champ(`' + tabchamps[i].nom_du_champ + '`), :' + tabchamps[i].nom_du_champ + '),';
                }
            }
        }else if("update" === this.#obj_webs.type_de_requete && tabchamps.length > 0){
            if("champs_sortie" === destination){
                var i={};
                for(i in tabchamps){
                    contenu+=CRLF + ' affecte(champ(`' + tabchamps[i].nom_du_champ + '`), :n_' + tabchamps[i].nom_du_champ + '),';
                }
            }else if("conditions" === destination){
                var nombre=0;
                var i={};
                for(i in tabchamps){
                    contenu+=CRLF + ' egal(champ(`' + tabchamps[i].nom_du_champ + '`), :c_' + tabchamps[i].nom_du_champ + '),';
                    nombre++;
                }
                if(nombre > 1){
                    contenu='et(' + contenu + CRLF + ')';
                }
            }
        }else if("delete" === this.#obj_webs.type_de_requete && tabchamps.length > 0){
            if("conditions" === destination){
                var nombre=0;
                var i={};
                for(i in tabchamps){
                    contenu+=CRLF + ' egal(champ(`' + tabchamps[i].nom_du_champ + '`), :' + tabchamps[i].nom_du_champ + '),';
                    nombre++;
                }
                if(nombre > 1){
                    contenu='et(' + contenu + CRLF + ')';
                }
            }
        }
        t+='<div class="rev_bouton" data-rev_click="m1(n1(__fnt1),f1(formater_le_rev_de_textarea1(zone_source(zone_formule))))" title="formater le source rev" >(😊)</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='<textarea data-editeur1="rev" id="zone_formule" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.fi2( contenu ) + '</textarea>';
        t+='</div>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(ajouter_la_formule(';
        cmd+='  destination(' + destination + '),';
        cmd+=')))';
        t+='<div class="rev_bouton" data-rev_click="' + cmd + '">ajouter la formule</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
    */
    raz_champs_tous( mat , d ){
        if(!confirm( 'Certain ?' )){
            return;
        }
        this.#obj_webs['complements']=[];
        this.#obj_webs['champs_sortie']=[];
        this.#obj_webs['conditions']=[];
        __gi1.fermer_la_sous_fenetre();
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    raz_champs_destination1( mat , d ){
        if(!confirm( 'Certain ?' )){
            return;
        }
        let destination='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        this.#obj_webs[destination]=[];
        __gi1.fermer_la_sous_fenetre();
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    #mettre_en_stokage_local_et_afficher(){
        this.afficher_les_donnees();
    }
    /*
      =============================================================================================================
    */
    enregistrer_la_formule_de_destination( mat , d ){
        let destination='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        var zone_formule=document.getElementById( 'zone_formule' );
        var rev_de_la_formule=zone_formule.value;
        var obj=__gi1.__rev1.rev_tcm( rev_de_la_formule );
        if(obj.__xst === __xsu){
            if((this.#obj_webs.type_de_requete === 'select'
                       || this.#obj_webs.type_de_requete === 'liste_ecran')
                   && destination === 'champs_sortie'
            ){
                this.#obj_webs.champs_sortie=[{"type_d_element" : 'formule' ,"formule" : rev_de_la_formule}];
            }else{
                if(!this.#obj_webs[destination]){
                    this.#obj_webs[destination]=[];
                }
                this.#obj_webs[destination]=[{"type_d_element" : 'formule' ,"formule" : rev_de_la_formule}];
            }
            __gi1.fermer_la_sous_fenetre();
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
    */
    ajouter_cette_formule_dans_la_formule( mat , d ){
        let formule='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'formule' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                formule=mat[i + 1][1].replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' );
            }
        }
        var zone_formule=document.getElementById( 'zone_formule' );
        if(this.#deb_selection_dans_formule === -1){
            zone_formule.value=(zone_formule.value + formule) + ',';
        }else{
            var debut=zone_formule.value.substr( 0 , this.#deb_selection_dans_formule );
            var fin=zone_formule.value.substr( this.#deb_selection_dans_formule );
            zone_formule.value=(debut + formule) + ',' + fin;
        }
        zone_formule.focus();
    }
    /*
      =============================================================================================================
    */
    ajouter_ce_champ_dans_la_formule( mat , d ){
        let nom_du_champ='';
        let nom_de_la_table='';
        let id_bdd=0;
        let indice_table=0;
        let destination='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }else if(mat[i][1] === 'indice_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var zone_formule=document.getElementById( 'zone_formule' );
        if(this.#deb_selection_dans_formule === -1){
            if(this.#obj_webs.type_de_requete === 'delete'){
                if(destination === 'conditions'){
                    if(__gi1.derniere_zone_editee && __gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , __gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( __gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`' + nom_du_champ + '`) , :' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`' + nom_du_champ + '`) , :' + nom_du_champ + '))';
                    }
                }
            }else if(this.#obj_webs.type_de_requete === 'update'){
                if(destination === 'conditions'){
                    if(__gi1.derniere_zone_editee && __gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , __gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( __gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`' + nom_du_champ + '`) , :c_' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`' + nom_du_champ + '`) , :c_' + nom_du_champ + ')';
                    }
                }else{
                    zone_formule.value=zone_formule.value + 'affecte(champ(`' + nom_du_champ + '`) , :n_' + nom_du_champ + ')';
                }
            }else if(this.#obj_webs.type_de_requete === 'insert'){
                zone_formule.value=zone_formule.value + 'affecte(champ(`' + nom_du_champ + '`) , :' + nom_du_champ + '),';
            }else if(this.#obj_webs.type_de_requete === 'liste_ecran'){
                if(destination === 'conditions'){
                    if(__gi1.derniere_zone_editee && __gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , __gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( __gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`T' + indice_table + '` , `' + nom_du_champ + '`) , :T' + indice_table + '_' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`T' + indice_table + '` , `' + nom_du_champ + '`) , :T' + indice_table + '_' + nom_du_champ + ')';
                    }
                }else{
                    zone_formule.value=zone_formule.value + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),';
                }
            }else if(this.#obj_webs.type_de_requete === 'select'){
                if(destination === 'conditions'){
                    if(__gi1.derniere_zone_editee && __gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , __gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( __gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`T' + indice_table + '` , `' + nom_du_champ + '`) , :T' + indice_table + '_' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`T' + indice_table + '` , `' + nom_du_champ + '`) , :T' + indice_table + '_' + nom_du_champ + ')';
                    }
                }else{
                    zone_formule.value=zone_formule.value + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),';
                }
            }else{
                zone_formule.value=zone_formule.value + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),';
            }
        }else{
            var debut=zone_formule.value.substr( 0 , this.#deb_selection_dans_formule );
            var fin=zone_formule.value.substr( this.#deb_selection_dans_formule );
            if(this.#obj_webs.type_de_requete === 'update'){
                zone_formule.value=debut + 'affecte( champ( `' + nom_du_champ + '`) , :n_' + nom_du_champ + '),' + fin;
            }else if(this.#obj_webs.type_de_requete === 'insert'){
                zone_formule.value=debut + 'affecte(champ( `' + nom_du_champ + '`) , :' + nom_du_champ + '),' + fin;
            }else{
                zone_formule.value=debut + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),' + fin;
            }
        }
        zone_formule.focus();
    }
    /*
      =============================================================================================================
    */
    modifier_la_formule_de_destination( mat , d ){
        /* ind , destination ]{ */
        let destination='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        this.#deb_selection_dans_formule=-1;
        var t='';
        t+='<h1>modifier une formule</h1>';
        if(this.#obj_webs['ordre_des_tables'].length > 0){
            var i=0;
            for( i=0 ; i < this.#obj_webs['ordre_des_tables'].length ; i++ ){
                var elem=this.#obj_webs['ordre_des_tables'][i];
                var id_du_champ={};
                for(id_du_champ in this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs']){
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(ajouter_ce_champ_dans_la_formule(';
                    cmd+='  nom_du_champ(' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '),';
                    cmd+='  nom_de_la_table(' + elem.nom_de_la_table + '),';
                    cmd+='  id_bdd(' + elem.id_bdd + '),';
                    cmd+='  indice_table(' + this.#obj_webs['ordre_des_tables'][i].indice_table + '),';
                    cmd+='  destination(' + destination + '),';
                    cmd+=')))';
                    t+='<div class="rev_bouton"';
                    t+=' data-rev_click="' + cmd + '">+T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>';
                }
            }
        }
        var tab_ex=['tous_les_champs()','plus(champ(xxx) , 2)','concat(\'=>\',champ(xxx),\'<=\')','compter(tous_les_champs())','xxx'];
        if(destination === 'complements'){
            tab_ex.push( 'trier_par((champ(xxx),décroissant()),(champ(xxx),croissant()))' );
            tab_ex.push( ',limité_à(quantité(:quantitee),début(:debut))' );
        }
        var i=0;
        for( i=0 ; i < tab_ex.length ; i++ ){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(ajouter_cette_formule_dans_la_formule(';
            cmd+='  formule(\'' + tab_ex[i].replace( /"/g , '&#34;' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            cmd+=')))';
            t+='<div class="rev_bouton" data-rev_click="' + cmd + '">' + tab_ex[i] + '</div>';
        }
        t+='<div class="rev_bouton" data-rev_click="m1(n1(__fnt1),f1(formater_le_rev_de_textarea1(zone_source(zone_formule))))" title="formater le source rev" >(😊)</div>';
        t+='<div class="rev_bouton" data-rev_click="m1(n1(__fnt1),f1(insérer_un_commentaire_rev1(zone_source(zone_formule))))" title="insérer un commentaire" >#(😎)</div>';
        t+='<div>egal,diff,comme,sup,supegal,inf,infegal,dans,est,n_est_pas,pas_comme,equivalent,pas_equivalent</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='<textarea id="zone_formule" data-editeur1="rev" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if((this.#obj_webs.type_de_requete === 'select'
                   || this.#obj_webs.type_de_requete === 'liste_ecran'
                   || this.#obj_webs.type_de_requete === 'update'
                   || this.#obj_webs.type_de_requete === 'insert')
               && destination === 'champs_sortie'
        ){
            var contenu='';
            for( let i=0 ; i < this.#obj_webs.champs_sortie.length ; i++ ){
                if(contenu !== ''){
                    contenu+=',';
                }
                if(this.#obj_webs.champs_sortie[i].type_d_element === 'champ'){
                    if(this.#obj_webs.type_de_requete === 'insert'){
                        /* contenu+='affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '` , :'+this.#obj_webs.champs_sortie[i].nom_du_champ+'))'; */
                        contenu+='affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`) , :' + this.#obj_webs.champs_sortie[i].nom_du_champ + ')';
                    }else if(this.#obj_webs.type_de_requete === 'update'){
                        contenu+='champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                    }else{
                        contenu+='champ(`T' + this.#obj_webs.champs_sortie[i].indice_table + '` , `' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                    }
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'constante'){
                    contenu+=__gi1.__rev1.ma_constante( this.#obj_webs.champs_sortie[i].constante );
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    contenu+=this.#obj_webs.champs_sortie[i].formule;
                }
            }
            contenu=contenu.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
            var matriceFonction=__gi1.__rev1.rev_tm( contenu );
            if(matriceFonction.__xst === __xsu){
                let obj1=__gi1.__rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
                if(obj1.__xst === __xsu){
                    t+=obj1.__xva;
                }else{
                    t+=contenu;
                }
            }else{
                t+=contenu;
            }
        }else{
            if(this.#obj_webs[destination].hasOwnProperty( '0' ) && this.#obj_webs[destination]['0'].hasOwnProperty( 'formule' )){
                let contenu=this.#obj_webs[destination][0].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
                var matriceFonction=__gi1.__rev1.rev_tm( contenu );
                if(matriceFonction.__xst === __xsu){
                    let obj1=__gi1.__rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
                    if(obj1.__xst === __xsu){
                        t+=obj1.__xva;
                    }else{
                        t+=contenu;
                    }
                }else{
                    t+=contenu;
                }
            }
        }
        t+='</textarea></div>';
        t+='<br />';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(enregistrer_la_formule_de_destination(';
        cmd+='  destination(' + destination + '),';
        cmd+=')))';
        t+='<div class="rev_bouton" data-rev_click="' + cmd + '">modifier la formule</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
    */
    #obtenir_le_tableau_des_conditions( formule , obj3 ){
        var tableau_des_conditions=[];
        /*
          var tableau1=__gi1.__rev1.txt_en_tableau(formule);
          var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
        */
        var matriceFonction=__gi1.__rev1.rev_tm( formule );
        var tab=matriceFonction.__xva;
        var l01=tab.length;
        var options={
            "au_format_php" : true ,
            "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
            "pour_where" : true ,
            "type_de_champ_pour_where" : '' ,
            "nom_du_champ_pour_where" : '' ,
            "recuperer_nom_du_champ" : true
        };
        for( let i=1 ; i < l01 ; i++ ){
            if(tab[i][7] === 0){
                if(tab[i][1] === '#' && tab[i][2] === 'f'){
                }else{
                    if((tab[i][1] === 'et' || tab[i][1] === 'ou') && tab[i][2] === 'f'){
                        for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                            if(tab[j][2] === 'f'
                                   && (tab[j][1] === 'ou'
                                       || tab[j][1] === 'et'
                                       || tab[j][1] === 'egal'
                                       || tab[j][1] === 'diff'
                                       || tab[j][1] === 'comme'
                                       || tab[j][1] === 'pas_comme'
                                       || tab[j][1] === 'equivalent'
                                       || tab[j][1] === 'pas_equivalent'
                                       || tab[j][1] === 'sup'
                                       || tab[j][1] === 'supegal'
                                       || tab[j][1] === 'inf'
                                       || tab[j][1] === 'infegal'
                                       || tab[j][1] === 'est'
                                       || tab[j][1] === 'n_est_pas'
                                       || tab[j][1] === 'dans')
                            ){
                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , j , 0 , options );
                                if(obj.__xst === __xsu){
                                    var parametre=obj.__xva.match( /\$par\[(.*)\]/ );
                                    if(parametre === null){
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'constante' ,
                                                "valeur" : obj.__xva ,
                                                "valeur_js" : obj.t_js ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.__xva ,
                                                "valeur_js" : obj.t_js ,
                                                "condition" : parametre[0] ,
                                                "operation" : tab[j][1] ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                            } );
                                    }
                                }else{
                                    debugger;
                                }
                            }else if(tab[j][2] === 'f' && tab[j][1] === '#'){
                            }else{
                                debugger;
                            }
                        }
                    }else if(tab[i][2] === 'f'
                           && (tab[i][1] === 'egal'
                               || tab[i][1] === 'diff'
                               || tab[i][1] === 'comme'
                               || tab[i][1] === 'pas_comme'
                               || tab[i][1] === 'equivalent'
                               || tab[i][1] === 'pas_equivalent'
                               || tab[i][1] === 'sup'
                               || tab[i][1] === 'supegal'
                               || tab[i][1] === 'inf'
                               || tab[i][1] === 'infegal'
                               || tab[i][1] === 'est'
                               || tab[i][1] === 'n_est_pas'
                               || tab[i][1] === 'dans')
                    ){
                        var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , i , 0 , options );
                        if(obj.__xst === __xsu){
                            var parametre=obj.__xva.match( /\$par\[(.*)\]/ );
                            if(parametre === null){
                                tableau_des_conditions.push( {
                                        "type_condition" : 'constante' ,
                                        "valeur" : obj.__xva ,
                                        "valeur_js" : obj.t_js ,
                                        "type" : options.type_de_champ_pour_where ,
                                        "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                    } );
                            }else{
                                tableau_des_conditions.push( {
                                        "type_condition" : 'variable' ,
                                        "valeur" : obj.__xva ,
                                        "valeur_js" : obj.t_js ,
                                        "condition" : parametre[0] ,
                                        "operation" : tab[i][1] ,
                                        "type" : options.type_de_champ_pour_where ,
                                        "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                    } );
                            }
                        }else{
                            debugger;
                        }
                    }else{
                        debugger;
                    }
                }
            }
        }
        return tableau_des_conditions;
    }
    /*
      =============================================================================================================
    */
    #traiter_chaine_sql_pour_php( chaine ){
        var i=0;
        var nouvelle_chaine='';
        var c='';
        var l01=chaine.length;
        for( i=0 ; i < l01 ; i++ ){
            c=chaine.substr( i , 1 );
            if(c === '\''){
                if(i > 0 && chaine.substr( i - 1 , 1 ) === '.'){
                    nouvelle_chaine+=c;
                }else if(i < l01 - 1 && chaine.substr( i + 1 , 1 ) === '.'){
                    nouvelle_chaine+=c;
                }else if(i > 0 && chaine.substr( i - 1 , 1 ) === '['){
                    nouvelle_chaine+=c;
                }else if(i < l01 - 1 && chaine.substr( i + 1 , 1 ) === ']'){
                    nouvelle_chaine+=c;
                }else{
                    nouvelle_chaine+='\\\'';
                }
            }else{
                nouvelle_chaine+=c;
            }
        }
        return nouvelle_chaine;
    }
    /*
      =============================================================================================================
    */
    #transformer_requete_en_fonction_js( type_de_requete , obj3 , id_requete_en_base , matrice_requete ){
        let t='';
        t+='class sql_' + id_requete_en_base + '{\r\n';
        t+='    /*\r\n';
        t+='      =============================================================================================================\r\n';
        t+='    */\r\n';
        t+='    async sql(par,donnees_retournees){\r\n';
        t+='\r\n';
        
        if(__gi1.le_niveau_de_deverminage > 0){
            console.log( 'obj3=' , obj3 );
        }
        var i=0;
        var c='';
        var nouvelle_chaine='';
        var manuelle_sans_base_de_reference=false;
        if(type_de_requete === 'requete_manuelle'){
            var text_rev='';
            if(document.getElementById( 'vv_zone_rev_01' ) !== null){
                text_rev=document.getElementById( 'vv_zone_rev_01' ).value;
            }else{
                let mat1=obj3.matriceFonction;
                let obj1=__gi1.__rev1.matrice_vers_source_rev1( mat1 , 0 , true , 1 );
                if(obj1.__xst === __xsu){
                    text_rev=obj1.__xva;
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                }
            }
            if(text_rev.indexOf( 'base_de_reference()' ) >= 0 || text_rev.indexOf( 'base_de_reference(' ) < 0){
                manuelle_sans_base_de_reference=true;
            }
        }else{
        }
        let id_numerique_base_principale=0;


        if(obj3.id_base_principale === 0){
            /*
              si c'est une requete de type "SELECT 1;", on prend la première référence de base disponible
            */
            var n={};
            for(n in this.#obj_webs.bases){
                obj3.id_base_principale='BDD_NUMERO_' + n;
                id_numerique_base_principale=parseInt( n , 10 );
                break;
            }
        }else{
            if(obj3.id_base_principale === 'BASE_REFERENCE'){
                id_numerique_base_principale=1;
            }else if(obj3.id_base_principale.substr( 0 , 11 ) === 'BDD_NUMERO_'){
                id_numerique_base_principale=parseInt( obj3.id_base_principale.substr( 11 ) , 10 );
            }else if(obj3.id_base_principale.substr( 0 , 1 ) === 'b'){
                id_numerique_base_principale=parseInt( obj3.id_base_principale.substr( 1 ) , 10 );
                obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale.substr( 1 );
            }else{
                if(__gi1.est_num( obj3.id_base_principale )){
                    id_numerique_base_principale=parseInt( obj3.id_base_principale , 10 );
                    obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale;
                }else{
                    obj3.id_base_principale='';
                }
            }
        }
        if(this.#obj_webs.sur_base_principale === 1){
            obj3.id_base_principale='BASE_REFERENCE';
        }

        if(type_de_requete === 'requete_manuelle'){
            /*  */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.__xva );
            nouvelle_chaine=nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' );
            const regex=/:\w+/g;
            const matches=nouvelle_chaine.match( regex );
            /* console.log(matches); // Output: [':t', ':a'] */
            if(matches !== null){
                let rgx={};
                for( let n=0 ; n < matches.length ; n++ ){
                    rgx=new RegExp( matches[n] , 'g' );
                    nouvelle_chaine=nouvelle_chaine.replace( rgx , '\' . $par[\'' + matches[n].substr( 1 ) + '\'] . \'' );
                }
            }
            /* if(obj3.id_base_principale === '' || nouvelle_chaine.substr(0,6)==='UPDATE' || nouvelle_chaine.substr(0,6)==='INSERT' || nouvelle_chaine.substr(0,6)==='SELECT'){ */
            if(manuelle_sans_base_de_reference === true){
                nouvelle_chaine=nouvelle_chaine.replace( /`'\.\$GLOBALS\[__BDD\]\[BDD_NUMERO_\]\[PREFIXE_BDD\]\.'`\./g , '' );
                nouvelle_chaine=nouvelle_chaine.replace( /`'\.\$GLOBALS\[__BDD]\[BDD_NUMERO_1]\[PREFIXE_BDD]\.'`\./g , '' );
            }
            let c_est_un_select=false;
            for( let ind=1 ; ind < matrice_requete.length ; ind=matrice_requete[ind][12] ){
                if(matrice_requete[ind][2] === 'f' && matrice_requete[ind][1] === 'sélectionner'){
                    c_est_un_select=true;
                    break;
                }
            }
            t+='    $sql0=\'' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='    \';' + CRLF;
            t+='    // echo __FILE__ . \' \' . __LINE__ . \' $sql0 = <pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            if(c_est_un_select === true){
                t+='    try{' + CRLF;
                if(manuelle_sans_base_de_reference === true){
                    t+='        $db->enableExceptions(true);' + CRLF;
                    t+='        $stmt0=$db->prepare($sql0);' + CRLF;
                }else{
                    t+='        $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->enableExceptions(true);' + CRLF;
                    t+='        $stmt0=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->prepare($sql0);' + CRLF;
                }
                t+='        $res0=$stmt0->execute();' + CRLF;
                t+='        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){' + CRLF;
                t+='            $donnees0[]=$tab0;' + CRLF;
                t+='        }' + CRLF;
                t+='        return array(' + CRLF;
                t+='           __xst  => __xsu  ,' + CRLF;
                t+='           __xva  => $donnees0   ,' + CRLF;
                t+='           \'sql0\'    => $sql0          ,' + CRLF;
                t+='        );' + CRLF;
                t+='    }catch(Exception $e){' + CRLF;
                t+='        return array(' + CRLF;
                t+='            __xst => __xer ,' + CRLF;
                t+='            \'sql0\' => $sql0 ,' + CRLF;
                t+='            \'texte_requete\' => \'la selection sur les éléments\' ,' + CRLF;
                t+='            \'exception\' => $e,' + CRLF;
                if(manuelle_sans_base_de_reference === false){
                    t+='            \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
                }
                t+='        );' + CRLF;
                t+='    }' + CRLF;
            }else{
                t+='    try{' + CRLF;
                if(manuelle_sans_base_de_reference === true){
                    t+='        $ret=$db->exec($sql0);' + CRLF;
                }else{
                    t+='        $ret=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->exec($sql0);' + CRLF;
                }
                t+='        return(array( __xst => __xsu ));' + CRLF;
                t+='    }catch(Exception $e){' + CRLF;
                t+='        return(' + CRLF;
                t+='            array( ' + CRLF;
                t+='                __xst => __xer, ' + CRLF;
                t+='                \'exception\' => $e , ' + CRLF;
                t+='                \'sql0\'    => $sql0 ,' + CRLF;
                if(manuelle_sans_base_de_reference === true){
                    t+='                \'code_erreur\' => $db->lastErrorCode() ,' + CRLF;
                    t+='                __xme => \'erreur sql_' + id_requete_en_base + '()\'.\' \'.$db->lastErrorMsg(),' + CRLF;
                    t+='            )' + CRLF;
                    t+='        );' + CRLF;
                }else{
                    t+='                \'code_erreur\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->lastErrorCode() ,' + CRLF;
                    t+='                __xme => \'erreur sql_' + id_requete_en_base + '()\'.\' \'.$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->lastErrorMsg(),' + CRLF;
                    t+='                \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
                    t+='            )' + CRLF;
                    t+='        );' + CRLF;
                }
                t+='    }' + CRLF;
            }
            /*
              
            */
        }else if(type_de_requete === 'delete'){
            
            var nom_de_la_table=obj3.liste_des_tables_pour_select_php;
            /* this.#obj_webs['ordre_des_tables'][0]['nom_de_la_table']; // */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.t_js );
            t+='    const sql0=`' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='    `;' + CRLF;
            t+='    /* this.__gi1.ma_trace1(\'sql_\' , sql0 ); */' + CRLF;
            if(this.#obj_webs.ne_pas_tester_les_dependances_de_suppression === 0){
                let nom_du_champ_cle='';
                for(let id_champcle in this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs){
                    let elem=this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs[id_champcle];
                    if(elem.primary_key === 1 || elem.primary_key === true){
                        nom_du_champ_cle=elem.nom_du_champ;
                    }
                }
                if(nom_du_champ_cle !== ''){
                    if(nouvelle_chaine.indexOf( nom_du_champ_cle ) < 0){
                        __gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'cette requete supprimer ne peut pas tester les dépendances sur le champ "' + nom_du_champ_cle + '"'} );
                        __gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                    t+='    this.__gi1.ma_trace1(\'dependances à faire\' );' + CRLF;
                    t+='/*' + CRLF;
                    t+='    $dep=$that->sql_dependances2(' + CRLF;
                    t+='      array(' + CRLF;
                    t+='          \'table_parente\'     => \'' + nom_de_la_table + '\',' + CRLF;
                    t+='          \'champ_parent\'      => \'' + nom_du_champ_cle + '\',' + CRLF;
                    t+='          \'id_enregistrement\' => $par[\'' + nom_du_champ_cle + '\'],' + CRLF;
                    t+='          \'id_bdd\'   => ' + obj3.id_base_principale + ',' + CRLF;
                    t+='       ),' + CRLF;
                    t+='       $donnees_retournees' + CRLF;
                    t+='    );' + CRLF;
                    t+='    if($dep>0){' + CRLF;
                    t+='        $donnees_retournees[__xsi][__xer][]=\' erreur lors de la suppression, il existe des dépendances sql_' + id_requete_en_base + '() [\' . __LINE__ . \']\';' + CRLF;
                    t+='        return array(' + CRLF;
                    t+='            __xst => __xer,' + CRLF;
                    t+='            \'sql0\' => $sql0,' + CRLF;
                    t+='            \'texte_requete\' => \'la suppression dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\',' + CRLF;
                    t+='            \'exception\' => null,' + CRLF;
                    t+='            \'id_bdd\' => ' + obj3.id_base_principale + ',' + CRLF;
                    t+='            \'code_erreur\' => 19' + CRLF;
                    t+='        );' + CRLF;
                    t+='    }' + CRLF;
                    t+='*/' + CRLF;
                }
            }
            
            t+='        try{\r\n';
            t+='            const res=await this.__db1.exec(sql0);\r\n';
            t+='            /* this.__gi1.ma_trace1(\'res=\',res) */;\r\n';
            t+='            return {\r\n';
            t+='                __xst  : 1,\r\n';
            t+='                __xva  : {},\r\n';
            t+='                \'sql0\'    : sql0,\r\n';
            t+='                \'changements\' : res\r\n';
            t+='            };\r\n';
            t+='        }catch(e){\r\n';
            t+='            let __xme=(e.stack.indexOf(\'FOREIGN KEY\')>=0?\'cet enregistrement possède des dépendants<br />\':\'autre erreur DELETE\') + \' [\' + this.__gi1.nl2() + \']\';\r\n';
            t+='            donnees_retournees[\'__xsi\'][\'__xer\'].push(__xme);\r\n';
            t+='            /* this.__gi1.ma_trace1(\'e=\',e); */\r\n';
            t+='            return {\r\n';
            t+='                __xst  : 0,\r\n';
            t+='                __xva  : {},\r\n';
            t+='                __xme  : __xme,\r\n';
            t+='                \'sql0\'    : sql0,\r\n';
            t+='            };\r\n';
            t+='        }\r\n';
            t+='\r\n';
            t+='    }' + CRLF;
        }else if(type_de_requete === 'insert'){
            var nom_de_la_table=obj3.liste_des_tables_pour_select_php;
            /* this.#obj_webs['ordre_des_tables'][0]['nom_de_la_table']; */

            nouvelle_chaine=obj3.debut_sql_pour_insert_js; // this.#traiter_chaine_sql_pour_php( obj3.debut_sql_pour_insert_js );
            t+='        let sql0=`' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='        `;' + CRLF;
            t+='        let liste_des_valeurs=\'\';' + CRLF;
            t+='        try{' + CRLF;
            t+='            for(let i=0;i < par.donnees.length;i++){' + CRLF;
            t+='                if(liste_des_valeurs != \'\'){' + CRLF;
            t+='                    liste_des_valeurs+=\',\';' + CRLF;
            t+='                }' + CRLF;
            t+='                liste_des_valeurs+=\'(\';' + CRLF;
            let tableau_des_insert=[];
            for( i=0 ; i < obj3.tableau_des_valeurs_pour_insert_js.length ; i++ ){
                if(!this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'].hasOwnProperty( obj3.tableau_des_valeurs_pour_insert_js[i][1] )
                ){
                    return(__gi1.ajoute_message( {
                            "__xst" : __xer ,
                            "__xme" : 'Le champ "' + obj3.tableau_des_valeurs_pour_insert_js[i][1] + '" n\'existe pas dans la base ' + __gi1.__rev1.nl2()
                        } ));
                }
                /* console.log(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]]); */
                if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]].genre_objet_du_champ
                       && (this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]].genre_objet_du_champ.che_est_tsc_genre === 1
                           || this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]].genre_objet_du_champ.che_est_tsm_genre === 1)
                       && this.#obj_webs.ne_pas_traiter_la_maj_ts_creation === 0
                ){
                    tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      \'+this.__gi1.__fnt1.sq1(donnees_retournees.date_heure_serveur)+\'\'' );
                }else if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]].genre_objet_du_champ
                       && this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]].genre_objet_du_champ.che_est_nur_genre === 1
                ){
                    tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      \'+this.__gi1.__fnt1.sq1(\'0\')+\'\'' );
                }else{
                    tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      ' + obj3.tableau_des_valeurs_pour_insert_js[i][0] + '\'' );
                }
            }
            t+=tableau_des_insert.join( '+\',\';' + CRLF );
            if(tableau_des_insert.length > 0){
                t+=';';
            }else{
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'pas de valeur pour insert'} ));
            }
            t+=CRLF;
            t+='                liste_des_valeurs+=\')\';' + CRLF;
            t+='            }' + CRLF;
            t+='            sql0+=liste_des_valeurs;' + CRLF;
            t+='            /* this.__gi1.ma_trace1(\'sql_' + id_requete_en_base + '=\',sql0); */\r\n';
            t+='            let res=await this.__db1.exec(sql0);\r\n';
            t+='            /* this.__gi1.ma_trace1(\'res=\',res); */\r\n';
            t+='            const sql1=\'SELECT last_insert_rowid() as nouvel_id; \';\r\n';
            t+='            let statement1=await this.__db1.prepare( sql1 );\r\n';
            t+='            let lignes = await statement1.values();\r\n';
            t+='            await statement1.finalize();\r\n';
            t+='            let nouvel_id=0;\r\n';
            t+='            for(let numero_de_ligne in lignes){\r\n';
            t+='                nouvel_id=lignes[numero_de_ligne][0];\r\n';
            t+='            }\r\n';
            t+='\r\n';            
            t+='            return {\r\n';
            t+='                __xst  : 1,\r\n';
            t+='                __xva  : {},\r\n';
            t+='                \'sql0\'    : sql0,\r\n';
            t+='                \'changements\' : res,\r\n';
            t+='                \'nouvel_id\' : nouvel_id\r\n';
            t+='            };\r\n';
            t+='        }catch(e){\r\n';
            t+='            donnees_retournees[\'__xsi\'][\'__xer\'].push(this.__gi1.nl2());\r\n';
            t+='            let __xme=e.stack.indexOf(\'UNIQUE constraint\')>=0?\'cet élément existe déjà dans la base<br />\':\'\';\r\n';
            t+='            /* this.__gi1.ma_trace1(\'e=\',e); */\r\n';
            t+='            return {\r\n';
            t+='                __xst  : 0,\r\n';
            t+='                __xme  : __xme,\r\n';
            t+='                __xva  : {},\r\n';
            t+='                \'sql0\'    : sql0,\r\n';
            t+='            };\r\n';
            t+='        }\r\n';
            t+='\r\n';
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'update'){
            /*
              =============================================================================================
            */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.__xva );
            var nom_de_la_table=obj3.liste_des_tables_pour_select_php;
            /* ''; */
            var champs_bdd={};

            if(this.#obj_webs['ordre_des_tables'].length === 0){
            }else{
                champs_bdd=this.#obj_webs['tableau_des_bases_tables_champs'][id_numerique_base_principale][nom_de_la_table].champs;
            }
            t+='        let sql0=\'UPDATE `' + nom_de_la_table + '` SET \\r\\n\';' + CRLF;
            t+='        let tableau_champs=[];' + CRLF;
            var lng_max=0;
            var champ_sortie=0;
            for( champ_sortie=0 ; champ_sortie < this.#obj_webs['champs_sortie'].length ; champ_sortie++ ){
                if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'champ'){
                    var nom_du_champ=this.#obj_webs['champs_sortie'][champ_sortie].nom_du_champ;
                    if(nom_du_champ.length > lng_max){
                        lng_max=nom_du_champ.length;
                    }
                }
            }
            lng_max+=1;
            var numero_de_champ=0;
            var tableau_des_champs_en_sortie=[];
            var champ_sortie=0;
            for( champ_sortie=0 ; champ_sortie < this.#obj_webs['champs_sortie'].length ; champ_sortie++ ){
                if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'formule'){
                    var formule=this.#obj_webs['champs_sortie'][champ_sortie].formule;
                    /*
                      var tableau1=__gi1.__rev1.txt_en_tableau(formule);
                      var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                    */
                    var matriceFonction=__gi1.__rev1.rev_tm( formule );
                    var tab=matriceFonction.__xva;
                    var l01=tab.length;
                    var nom_du_champ='';
                    var valeur_du_champ='';
                    var type_de_champ='constante';
                    var options={"au_format_php" : true ,"tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees};
                    for( var l=1 ; l < l01 ; l++ ){
                        if(tab[l][7] === 0){
                            if(tab[l][1] === '#' && tab[l][2] === 'f'){
                                /*
                                  un commentaire => on passe au suivant
                                */
                                continue;
                            }
                            if(tab[l][1] === 'champ' && tab[l][2] === 'f'){
                                nom_du_champ=tab[l + 1][1];
                            }
                            if(tab[l][1] === 'affecte'){
                                var m=l + 1;
                                for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                    if(tab[m][7] === tab[l][0]){
                                        if(tab[m][2] === 'f' && tab[m][1] === 'champ'){
                                            nom_du_champ=tab[m + 1][1];
                                        }else{
                                            if(tab[m][2] === 'f'){
                                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , m , 0 , options );
                                                if(obj.__xst === __xsu){
                                                    valeur_du_champ=obj.__xva;
                                                }else{
                                                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'fonction dans update conditions "' + tab[l][1] + '"'} ));
                                                }
                                            }else{
                                                if(tab[m][1].toLowerCase() === 'null' && tab[m][4] === 0){
                                                    valeur_du_champ='NULL';
                                                }else{
                                                    if(tab[m][1].substr( 0 , 1 ) === ':'){
                                                        valeur_du_champ='\'+this.__gi1.__fnt1.sq0(par[\'' + tab[m][1].substr( 1 ) + '\'])+\'';
                                                        type_de_champ='variable';
                                                    }else{
                                                        valeur_du_champ='\'' + tab[m][1].replace( /\'/g , "''" ) + '\'';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            var champ_de_la_base=champs_bdd[nom_du_champ];
                            var lng=lng_max - nom_du_champ.length;
                            var rpt=' ';
                            /* .repeat( lng ); */
                            var encadrement_variable='\\\'';
                            if(champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'int' ) >= 0
                                   || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'float' ) >= 0
                                   || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'decimal' ) >= 0
                            ){
                                encadrement_variable='';
                            }
                            /* type_du_champ // espece_du_champ */
                            let ind=-1;
                            for(let tt in this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs){
                                if(this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[tt].nom_du_champ === nom_du_champ){
                                    ind=tt;
                                    break;
                                }
                            }
                            tableau_des_champs_en_sortie.push( {
                                    "non_du_champ_en_bdd" : nom_du_champ ,
                                    "valeur_du_champ" : valeur_du_champ ,
                                    "encadrement_variable" : encadrement_variable ,
                                    "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                                    "type_de_champ" : type_de_champ ,
                                    "champ_en_bdd" : this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[ind]
                                } );
                        }
                    }
                }else if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'champ'){
                    var nom_du_champ=this.#obj_webs['champs_sortie'][champ_sortie].nom_du_champ;
                    var champ_de_la_base=champs_bdd[nom_du_champ];
                    var lng=lng_max - nom_du_champ.length;
                    var rpt=' '.repeat( lng );
                    var encadrement_variable='\\\'';
                    try{
                        if(champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'int' ) >= 0
                               || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'float' ) >= 0
                               || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'decimal' ) >= 0
                        ){
                            encadrement_variable='';
                        }
                    }catch(e){
                        /* afr pourquoi ???? */
                        debugger;
                    }
                    let ind=-1;
                    for(let tt in this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs){
                        if(this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[tt].nom_du_champ === nom_du_champ){
                            ind=tt;
                            break;
                        }
                    }
                    tableau_des_champs_en_sortie.push( {
                            "non_du_champ_en_bdd" : nom_du_champ ,
                            "valeur_du_champ" : '\'.sq0($par[\'n_' + nom_du_champ + '\']).\'' ,
                            "encadrement_variable" : encadrement_variable ,
                            "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                            "type_de_champ" : 'variable' ,
                            "champ_en_bdd" : this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[ind]
                        } );
                }
            }
            if(tableau_des_champs_en_sortie.length === 0){
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' il manque les champs en sortie '} ));
            }
            var liste_des_champs_pour_update3='';
            for( var i=0 ; i < tableau_des_champs_en_sortie.length ; i++ ){
                var la_sortie=tableau_des_champs_en_sortie[i];
                if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ
                       && this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_nur_genre === 1
                       && this.#obj_webs.ne_pas_traiter_le_numero_de_revision === 0
                ){
                    liste_des_champs_pour_update3+='    $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.non_du_champ_en_bdd + ' + 1 \';' + CRLF;
                }else if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ
                       && (this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_tsc_genre === 1
                           || this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_tsm_genre === 1)
                       && this.#obj_webs.ne_pas_traiter_la_maj_ts_modification === 0
                ){
                    liste_des_champs_pour_update3+='        tableau_champs.push(\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = \\\'\'+donnees_retournees.date_heure_serveur+\'\\\' \');' + CRLF;
                }else if(la_sortie.type_de_champ === 'constante'){
                    liste_des_champs_pour_update3+='        tableau_champs.push(\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\');' + CRLF;
                }else{
                    liste_des_champs_pour_update3+='        if(par[\'n_' + la_sortie.non_du_champ_en_bdd + '\']===\'\' || par[\'n_' + la_sortie.non_du_champ_en_bdd + '\'] === null ){' + CRLF;
                    liste_des_champs_pour_update3+='            tableau_champs.push(\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = NULL\');' + CRLF;
                    liste_des_champs_pour_update3+='        }else{' + CRLF;
                    liste_des_champs_pour_update3+='            tableau_champs.push(\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\');' + CRLF;
                    liste_des_champs_pour_update3+='        }' + CRLF;
                }
            }
            t+=CRLF + liste_des_champs_pour_update3 + CRLF;
            t+='        if(tableau_champs.length===0){' + CRLF;
            t+='            return {/**/' + CRLF;
            t+='                "__xst" : 0 ,' + CRLF;
            t+='                "__xme" : \'aucun champ à mettre à jour\' ,' + CRLF;
//            t+='                "id_bdd" : ' + obj3.id_base_principale + ' ,' + CRLF;
            t+='                "sql0" : sql0 , ' + CRLF;
            t+='                "texte_requete" : \'la modification dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='            };' + CRLF;
            t+='        }' + CRLF;
            t+='        sql0+=tableau_champs.join(\',\'+\'\\r\\n\'+\'    \')+\'\\r\\n\';' + CRLF;
            t+='        let where0=\'\';' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='        /* ATTENTION : pas de condition */' + CRLF;
                t+='        where0+=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                t+='        where0+=\' WHERE 1=1 \\r\\n\';' + CRLF;
                var formule=this.#obj_webs.conditions[0].formule;
                tableau_des_conditions=this.#obtenir_le_tableau_des_conditions( this.#obj_webs.conditions[0].formule , obj3 );
            }
            var i=0;
            for( i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='        where0+=` AND ' + elem.valeur_js + '`+\'\\r\\n\';' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    if((elem.type.toLowerCase() === 'integer'
                               || elem.type.toLowerCase() === 'int')
                           && (elem.operation === 'egal'
                               || elem.operation === 'dans')
                    ){
                        t+='        where0+=\'\\r\\n\'+this.__gi1.__fnt1.construction_where_sql_sur_id1(\'' + elem.nom_du_champ_pour_where + '\',' + elem.condition + ');' + CRLF;
                    }else{
                        t+='        where0+=` AND ' + elem.valeur_js + '`+\'\\r\\n\';' + CRLF;
                    }
                }
            }
            t+='        sql0+=where0;' + CRLF;
            t+='        try{' + CRLF;
            t+='            /* this.__gi1.ma_trace1(\' sql_' + id_requete_en_base + '= \' + sql0 ); */' + CRLF;
            t+='            let res=await this.__db1.exec(sql0);' + CRLF;
            t+='            return({ "__xst" : 1, \'changements\' : res});' + CRLF;
            t+='        }catch(e){' + CRLF;
            t+='            let __xme=e.stack.indexOf(\'UNIQUE constraint\')>=0?\'cet élément existe déjà dans la base<br />\':\'\';\r\n';
            t+='            return {/**/' + CRLF;
            t+='                __xst : 0 , ' + CRLF;
            t+='                "sql0" : sql0 , ' + CRLF;
            t+='                "texte_requete" : \'la modification dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='                "exception" : e , ' + CRLF;
            t+='                "__xme" : __xme , ' + CRLF;
            t+='            };' + CRLF;
            t+='        }' + CRLF;
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'select'){
            /*
              =============================================================================================
            */
            var champs0='';
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                if(champs0 !== ''){
                    champs0+=' , ';
                }
                if(i% 5 === 0){
                    champs0+=CRLF + '      ';
                }
                if(obj3.tableau_des_champs_pour_select_php[i].type === 'champ'){
                    champs0+='`' + obj3.tableau_des_champs_pour_select_php[i].alias + '`.`' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '`';
                    if(obj3.tableau_des_champs_pour_select_php[i].hasOwnProperty( 'alias_champ' )
                           && obj3.tableau_des_champs_pour_select_php[i].alias_champ !== ''
                    ){
                        champs0+=' as `' + obj3.tableau_des_champs_pour_select_php[i].alias_champ + '`';
                    }
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'formule'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].formule;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'constante'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'variable'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }
            }
            t+='    const champs0=`' + champs0.replace(/\`/g,'\\`') + CRLF + '    `;' + CRLF;
            t+='    let sql0=\'SELECT \'+champs0;' + CRLF;
            t+='    const from0=`' + CRLF;
            t+=obj3.liste_des_tables_pour_select_js;
            t+='    `;' + CRLF;
            t+='    sql0+=from0;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='    /* ATTENTION : pas de condition dans cette liste */' + CRLF;
                t+='    const where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                var formule='conditions(' + this.#obj_webs.conditions[0].formule + ')';
                var tableau2=__gi1.__rev1.txt_en_tableau( formule );
                var matriceFonction=__gi1.__rev1.tb_vers_matrice( tableau2.__xva , true , false , '' );
                var les_conditions=this.__m_rev_vers_sql1.c_tab_vers_sql( matriceFonction.__xva , {"au_format_php" : true} );

                if(les_conditions.__xst === __xsu){
                    t+='    const where0=` WHERE ' + les_conditions.t_js + '`;' + CRLF;
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' conversion en php '} ));
                }
            }
            t+='    sql0+=where0;' + CRLF;
            if(this.#obj_webs.complements.length === 0){
            }else{
                if(obj3.liste_des_tris !== ''){
                    t+='    const order0=`' + obj3.liste_des_tris.replace(/`/g,'\\`') + '`;' + CRLF;
                }else{
                    t+='    const order0=\'\';' + CRLF;
                }
                t+='    sql0+=order0;' + CRLF;
                if(obj3.liste_des_limites !== ''){
                    t+='    const plage0=`' + obj3.liste_des_limites + '`;' + CRLF;
                }else{
                    t+='    const plage0=\'\';' + CRLF;
                }
                t+='    sql0+=plage0;' + CRLF;
            }
            
            t+='        /* this.__gi1.ma_trace1(\'sql_'+id_requete_en_base+' sql0=\',sql0); */\r\n';
            t+='\r\n';
            t+='        let lignes = [];\r\n';
            t+='        try{\r\n';
            t+='            let statement=await this.__db1.prepare( sql0 );\r\n';
            t+='            lignes = await statement.values();\r\n';
            t+='            await statement.finalize();\r\n';
            t+='        }catch(e){\r\n';
            t+='            donnees_retournees[\'__xst\']=0;\r\n';
            t+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'erreur sql_'+id_requete_en_base+'=\'+sql0+\' [\' + this.__gi1.nl2(e) + \']\' );\r\n';
            t+='            return {__xst  : 0};\r\n';
            t+='        }\r\n';
            t+='\r\n';
            t+='        let donnees0 = [];\r\n';
            t+='        for(let col of lignes){\r\n';
            t+='            donnees0.push({\r\n';
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                if(obj3.tableau_des_champs_pour_select_php[i].type === 'champ'){
                    t+='                \'' + obj3.tableau_des_champs_pour_select_php[i].alias + '.' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '\' : col[' + i + '],' + CRLF;
                }else{
                    t+='                \'' + i + '\' => col[' + i + '],' + CRLF;
                }
            }
            t+='            });\r\n';
            t+='        }\r\n';
            t+='        return {\r\n';
            t+='            __xst  : 1,\r\n';
            t+='            __xva  : donnees0,\r\n';
            t+='            \'sql0\'    : sql0,\r\n';
            t+='            \'where0\'  : where0,\r\n';
            t+='        };\r\n';
            t+='\r\n';
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'liste_ecran'){
            /*
              =============================================================================================
              console.log( this.#obj_webs );
            */
            var champs0='';
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                if(champs0 !== ''){
                    champs0+=' , ';
                }
                if(i% 5 === 0){
                    champs0+=CRLF + '      ';
                }
                if(obj3.tableau_des_champs_pour_select_php[i].type === 'champ'){
                    champs0+='`' + obj3.tableau_des_champs_pour_select_php[i].alias + '`.`' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '`';
                    if(obj3.tableau_des_champs_pour_select_php[i].hasOwnProperty( 'alias_champ' )
                           && obj3.tableau_des_champs_pour_select_php[i].alias_champ !== ''
                    ){
                        champs0+=' as `' + obj3.tableau_des_champs_pour_select_php[i].alias_champ + '`';
                    }
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'formule'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].formule;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'constante'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'variable'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }
            }
            t+='        let donnees0=[];\r\n';
            t+='        let __nbEnregs=0;\r\n';
            t+='        let where0=\'\';\r\n';
            t+='        let sql0=\'\';\r\n';
            t+='        let champs0=\'\';\r\n';
            t+='        let from0=\'\';\r\n';
            t+='\r\n';
            t+='    champs0=`' + champs0.replace(/\`/g,'\\`') + CRLF + '    `;' + CRLF;
            t+='    sql0=\'SELECT \'+champs0;' + CRLF;
            t+='    from0=`' + CRLF;
//            debugger
            t+=obj3.liste_des_tables_pour_select_js; //.replace(/`/g,'\\`');
            t+='    `;' + CRLF;
            t+='    sql0+=from0;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='    /* ATTENTION : pas de condition dans cette liste */' + CRLF;
                t+='    where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                t+='    where0=\' WHERE 1=1 \';' + CRLF;
                var formule=this.#obj_webs.conditions[0].formule;
                /*
                  var tableau1=__gi1.__rev1.txt_en_tableau(formule);
                  var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                */
                var matriceFonction=__gi1.__rev1.rev_tm( formule );
                var tab=matriceFonction.__xva;
                var l01=tab.length;
                var options={
                    "au_format_php" : true ,
                    "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
                    "pour_where" : true ,
                    "type_de_champ_pour_where" : '' ,
                    "nom_du_champ_pour_where" : '' ,
                    "espece_du_champ_pour_where" : ''
                };
                for( var i=1 ; i < l01 ; i++ ){
                    if(tab[i][7] === 0){
                        if(tab[i][1] === '#' && tab[i][2] === 'f'){
                        }else{
                            if(tab[i][1] === 'et' && tab[i][2] === 'f'){
                                var j=i + 1;
                                for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                                    if(tab[j][7] === i){
                                        if(tab[j][2] === 'f'
                                               && (tab[j][1] === 'egal'
                                                   || tab[j][1] === 'diff'
                                                   || tab[j][1] === 'comme'
                                                   || tab[j][1] === 'pas_comme'
                                                   || tab[j][1] === 'equivalent'
                                                   || tab[j][1] === 'pas_equivalent'
                                                   || tab[j][1] === 'sup'
                                                   || tab[j][1] === 'supegal'
                                                   || tab[j][1] === 'inf'
                                                   || tab[j][1] === 'infegal'
                                                   || tab[j][1] === 'dans'
                                                   || tab[j][1] === 'est'
                                                   || tab[j][1] === 'n_est_pas')
                                        ){
                                            var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , j , 0 , options );
                                            if(obj.__xst === __xsu){
                                                var parametre=obj.t_js.match( /\par\[(.*)\]/ );
                                                if(parametre === null){
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'constante' ,
                                                            "valeur" : obj.t_js ,
                                                            "type" : options.type_de_champ_pour_where ,
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                            "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                                        } );
                                                }else{
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'variable' ,
                                                            "valeur" : obj.t_js ,
                                                            "condition" : parametre[0] ,
                                                            "operation" : tab[j][1] ,
                                                            "type" : options.type_de_champ_pour_where ,
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                            "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                                        } );
                                                }
                                            }else{
                                                debugger;
                                            }
                                        }else if(tab[j][2] === 'f' && tab[j][1] === '#'){
                                        }else{
                                            debugger;
                                        }
                                    }
                                }
                            }else if(tab[i][2] === 'f'
                                   && (tab[i][1] === 'egal'
                                       || tab[i][1] === 'diff'
                                       || tab[i][1] === 'comme'
                                       || tab[i][1] === 'pas_comme'
                                       || tab[i][1] === 'equivalent'
                                       || tab[i][1] === 'pas_equivalent'
                                       || tab[i][1] === 'sup'
                                       || tab[i][1] === 'supegal'
                                       || tab[i][1] === 'inf'
                                       || tab[i][1] === 'infegal'
                                       || tab[i][1] === 'dans'
                                       || tab[i][1] === 'est'
                                       || tab[i][1] === 'n_est_pas')
                            ){
                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , i , 0 , options );
                                if(obj.__xst === __xsu){
                                    var parametre=obj.__xva.match( /\par\[(.*)\]/ );
                                    if(parametre === null){
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'constante' ,
                                                "valeur" : obj.t_js ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.t_js ,
                                                "condition" : parametre[0] ,
                                                "operation" : tab[i][1] ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                            } );
                                    }
                                }else{
                                    debugger;
                                }
                            }else{
                                debugger;
                            }
                        }
                    }
                }
            }
            for( var i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='    where0+=` AND ' + elem.valeur + '`;' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    t+='    if(par.hasOwnProperty('+(elem.condition.replace(/\par/,'').replace(/\[/,'').replace(/]/,''))+') && par['+(elem.condition.replace(/\par/,'').replace(/\[/,'').replace(/]/,''))+'] !==  \'\'){' + CRLF;
                    if((elem.espece_du_champ_pour_where.toLowerCase() === 'integer'
                               || elem.espece_du_champ_pour_where.toLowerCase() === 'int')
                           && elem.operation === 'egal'
                    ){
                        t+='        where0+=\'\\r\\n\'+this.__gi1.__fnt1.construction_where_sql_sur_id1(\'' + elem.nom_du_champ_pour_where + '\', par['+(elem.condition.replace(/\par/,'').replace(/\[/,'').replace(/]/,''))+'] );' + CRLF;
                    }else{
                        t+='        where0+=` AND ' + elem.valeur + '`+\'\\r\\n\';' + CRLF; // PHP_EOL
                    }
                    t+='    }' + CRLF;
                }
            }
            t+='    sql0+=where0;' + CRLF;
            if(this.#obj_webs.complements.length === 0){
                t+='    /* ATTENTION : pas de complements ( order by , limit dans cette liste */' + CRLF;
                t+='    const order0=\'\';' + CRLF;
                t+='    const plage0=\'\';' + CRLF;
            }else{
                if(obj3.liste_des_tris !== ''){
                    t+='    const order0=`' + obj3.liste_des_tris.replace(/\`/g,'\\`') + '`;' + CRLF;
                }else{
                    t+='    /* ATTENTION : pas de tri */' + CRLF;
                    t+='    const order0=\'\';' + CRLF;
                }
                t+='    sql0+=order0;' + CRLF;
                if(obj3.liste_des_limites !== ''){
                    t+='    const plage0=`' + obj3.liste_des_limites_js + '`;' + CRLF;
                }else{
                    t+='    /* ATTENTION : pas de limites */' + CRLF;
                    t+='    const plage0=\'\';' + CRLF;
                }
                t+='    sql0+=plage0;' + CRLF;
            }
            t+='        /* this.__gi1.ma_trace1(\'sql_'+id_requete_en_base+' sql0=\',sql0); */\r\n';
            t+='        let lignes=[];\r\n';
            t+='        try{\r\n';
            t+='            let statement=await this.__db1.prepare( sql0 );\r\n';
            t+='            lignes = await statement.values();\r\n';
            t+='            await statement.finalize();\r\n';
            t+='        }catch(e){\r\n';
            t+='            donnees_retournees[\'__xst\']=0;\r\n';
            t+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'erreur sql '+id_requete_en_base+' \'+sql0+\' [\' + this.__gi1.nl2(e) + \']\' );\r\n';
            t+='            return {__xst  : 0};\r\n';
            t+='        }\r\n';
            t+='\r\n';
            t+='\r\n';
            t+='        for(let numero_de_ligne in lignes){\r\n';
            t+='            donnees0.push({\r\n';
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                t+='                \'' + obj3.tableau_des_champs_pour_select_php[i].alias + '.' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '\' : lignes[numero_de_ligne][' + i + '],\r\n';
            }
            t+='            });\r\n';
            t+='        }\r\n';
            t+='\r\n';
            t+='        const sql1=\'SELECT COUNT(*) as __nbEnregs \'+from0+where0;\r\n';
            t+='        let statement1=await this.__db1.prepare( sql1 );\r\n';
            t+='        lignes = await statement1.values();\r\n';
            t+='        await statement1.finalize();\r\n';
            t+='        for(let numero_de_ligne in lignes){\r\n';
            t+='            __nbEnregs=lignes[numero_de_ligne][0];\r\n';
            t+='        }\r\n';
            t+='\r\n';            
            t+='\r\n';
            t+='\r\n';
            t+='        return {\r\n';
            t+='            __xst  : 1,\r\n';
            t+='            __xva  : donnees0,\r\n';
            t+='            \'nombre\'  : __nbEnregs,\r\n';
            t+='            \'sql0\'    : sql0,\r\n';
            t+='            \'where0\'  : where0,\r\n';
            t+='        };\r\n';
            t+='\r\n';
            t+='    }' + CRLF;
        }
        t+='    /*\r\n';
        t+='      =============================================================================================================\r\n';
        t+='    */\r\n';
        t+='    moi=\'sql_' + id_requete_en_base + '\';\r\n';
        t+='    __gi1=null;\r\n';
        t+='    __db1=null;\r\n';
        t+='    /*\r\n';
        t+='      =============================================================================================================\r\n';
        t+='    */\r\n';
        t+='    constructor(__gi1,__db1){\r\n';
        t+='        this.__gi1=__gi1;\r\n';
        t+='        this.__db1=__db1;\r\n';
        t+='    }\r\n';
        t+='}' + CRLF;
        t+='export{sql_'+id_requete_en_base+' as sql_'+id_requete_en_base+'};' + CRLF;
        
        return({"__xst" : __xsu ,"__xva" : t ,"chp_table_reference_requete" : this.#globale_chp_table_reference_requete});
    }
    /*
      =============================================================================================================
    */
    #transformer_requete_en_fonction_php( type_de_requete , obj3 , id_requete_en_base , matrice_requete ){
        if(__gi1.le_niveau_de_deverminage > 0){
            console.log( 'obj3=' , obj3 );
        }
        var t='';
        var i=0;
        var c='';
        var nouvelle_chaine='';
        var manuelle_sans_base_de_reference=false;
        if(type_de_requete === 'requete_manuelle'){
            var text_rev='';
            if(document.getElementById( 'vv_zone_rev_01' ) !== null){
                text_rev=document.getElementById( 'vv_zone_rev_01' ).value;
            }else{
                let mat1=obj3.matriceFonction;
                let obj1=__gi1.__rev1.matrice_vers_source_rev1( mat1 , 0 , true , 1 );
                if(obj1.__xst === __xsu){
                    text_rev=obj1.__xva;
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                }
            }
            if(text_rev.indexOf( 'base_de_reference()' ) >= 0 || text_rev.indexOf( 'base_de_reference(' ) < 0){
                manuelle_sans_base_de_reference=true;
                t+='function sql_' + id_requete_en_base + '($par,&$donnees_retournees,$that,$db){' + CRLF;
            }else{
                t+='function sql_' + id_requete_en_base + '($par,&$donnees_retournees,$that){' + CRLF;
            }
        }else{
            t+='function sql_' + id_requete_en_base + '($par,&$donnees_retournees,$that){' + CRLF;
        }
        let id_numerique_base_principale=0;
        if(obj3.id_base_principale === 0){
            /*
              si c'est une requete de type "SELECT 1;", on prend la première référence de base disponible
            */
            var n={};
            for(n in this.#obj_webs.bases){
                obj3.id_base_principale='BDD_NUMERO_' + n;
                id_numerique_base_principale=parseInt( n , 10 );
                break;
            }
        }else{
            if(obj3.id_base_principale.substr( 0 , 1 ) === 'b'){
                id_numerique_base_principale=parseInt( obj3.id_base_principale.substr( 1 ) , 10 );
                obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale.substr( 1 );
            }else{
                if(__gi1.est_num( obj3.id_base_principale )){
                    id_numerique_base_principale=parseInt( obj3.id_base_principale , 10 );
                    obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale;
                }else{
                    obj3.id_base_principale='';
                }
            }
        }
        if(this.#obj_webs.sur_base_principale === 1){
            obj3.id_base_principale='BASE_REFERENCE';
        }
        /* t+='    $id_bdd='+obj3.id_base_principale+';'+CRLF; */
        if(type_de_requete === 'requete_manuelle'){
            /*  */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.__xva );
            nouvelle_chaine=nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' );
            const regex=/:\w+/g;
            const matches=nouvelle_chaine.match( regex );
            /* console.log(matches); // Output: [':t', ':a'] */
            if(matches !== null){
                let rgx={};
                for( let n=0 ; n < matches.length ; n++ ){
                    rgx=new RegExp( matches[n] , 'g' );
                    nouvelle_chaine=nouvelle_chaine.replace( rgx , '\' . $par[\'' + matches[n].substr( 1 ) + '\'] . \'' );
                }
            }
            /* if(obj3.id_base_principale === '' || nouvelle_chaine.substr(0,6)==='UPDATE' || nouvelle_chaine.substr(0,6)==='INSERT' || nouvelle_chaine.substr(0,6)==='SELECT'){ */
            if(manuelle_sans_base_de_reference === true){
                nouvelle_chaine=nouvelle_chaine.replace( /`'\.\$GLOBALS\[__BDD\]\[BDD_NUMERO_\]\[PREFIXE_BDD\]\.'`\./g , '' );
                nouvelle_chaine=nouvelle_chaine.replace( /`'\.\$GLOBALS\[__BDD]\[BDD_NUMERO_1]\[PREFIXE_BDD]\.'`\./g , '' );
            }
            let c_est_un_select=false;
            for( let ind=1 ; ind < matrice_requete.length ; ind=matrice_requete[ind][12] ){
                if(matrice_requete[ind][2] === 'f' && matrice_requete[ind][1] === 'sélectionner'){
                    c_est_un_select=true;
                    break;
                }
            }
            t+='    $sql0=\'' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='    \';' + CRLF;
            t+='    // echo __FILE__ . \' \' . __LINE__ . \' $sql0 = <pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            if(c_est_un_select === true){
                t+='    try{' + CRLF;
                if(manuelle_sans_base_de_reference === true){
                    t+='        $db->enableExceptions(true);' + CRLF;
                    t+='        $stmt0=$db->prepare($sql0);' + CRLF;
                }else{
                    t+='        $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->enableExceptions(true);' + CRLF;
                    t+='        $stmt0=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->prepare($sql0);' + CRLF;
                }
                t+='        $res0=$stmt0->execute();' + CRLF;
                t+='        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){' + CRLF;
                t+='            $donnees0[]=$tab0;' + CRLF;
                t+='        }' + CRLF;
                t+='        return array(' + CRLF;
                t+='           __xst  => __xsu  ,' + CRLF;
                t+='           __xva  => $donnees0   ,' + CRLF;
                t+='           \'sql0\'    => $sql0          ,' + CRLF;
                t+='        );' + CRLF;
                t+='    }catch(Exception $e){' + CRLF;
                t+='        return array(' + CRLF;
                t+='            __xst => __xer ,' + CRLF;
                t+='            \'sql0\' => $sql0 ,' + CRLF;
                t+='            \'texte_requete\' => \'la selection sur les éléments\' ,' + CRLF;
                t+='            \'exception\' => $e,' + CRLF;
                if(manuelle_sans_base_de_reference === false){
                    t+='            \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
                }
                t+='        );' + CRLF;
                t+='    }' + CRLF;
            }else{
                t+='    try{' + CRLF;
                if(manuelle_sans_base_de_reference === true){
                    t+='        $ret=$db->exec($sql0);' + CRLF;
                }else{
                    t+='        $ret=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->exec($sql0);' + CRLF;
                }
                t+='        return(array( __xst => __xsu ));' + CRLF;
                t+='    }catch(Exception $e){' + CRLF;
                t+='        return(' + CRLF;
                t+='            array( ' + CRLF;
                t+='                __xst => __xer, ' + CRLF;
                t+='                \'exception\' => $e , ' + CRLF;
                t+='                \'sql0\'    => $sql0 ,' + CRLF;
                if(manuelle_sans_base_de_reference === true){
                    t+='                \'code_erreur\' => $db->lastErrorCode() ,' + CRLF;
                    t+='                __xme => \'erreur sql_' + id_requete_en_base + '()\'.\' \'.$db->lastErrorMsg(),' + CRLF;
                    t+='            )' + CRLF;
                    t+='        );' + CRLF;
                }else{
                    t+='                \'code_erreur\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->lastErrorCode() ,' + CRLF;
                    t+='                __xme => \'erreur sql_' + id_requete_en_base + '()\'.\' \'.$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->lastErrorMsg(),' + CRLF;
                    t+='                \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
                    t+='            )' + CRLF;
                    t+='        );' + CRLF;
                }
                t+='    }' + CRLF;
            }
            /*
              
            */
        }else if(type_de_requete === 'delete'){
            var nom_de_la_table=obj3.liste_des_tables_pour_select_php;
            /* this.#obj_webs['ordre_des_tables'][0]['nom_de_la_table']; // */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.__xva );
            if(obj3.id_base_principale === 'BASE_REFERENCE'){
                let a_remplacer='[BDD_NUMERO_' + id_numerique_base_principale + ']';
                nouvelle_chaine=nouvelle_chaine.replace( a_remplacer , '[BASE_REFERENCE]' );
            }
            t+='    $sql0=\'' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='    \';' + CRLF;
            t+='    // echo __FILE__ . \' \' . __LINE__ . \' $sql0=<pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            if(this.#obj_webs.ne_pas_tester_les_dependances_de_suppression === 0){
                let nom_du_champ_cle='';
                for(let id_champcle in this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs){
                    let elem=this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs[id_champcle];
                    if(elem.primary_key === 1 || elem.primary_key === true){
                        nom_du_champ_cle=elem.nom_du_champ;
                    }
                }
                if(nom_du_champ_cle !== ''){
                    if(nouvelle_chaine.indexOf( nom_du_champ_cle ) < 0){
                        __gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'cette requete supprimer ne peut pas tester les dépendances sur le champ "' + nom_du_champ_cle + '"'} );
                        __gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                    t+='    $dep=$that->sql_dependances2(' + CRLF;
                    t+='      array(' + CRLF;
                    t+='          \'table_parente\'     => \'' + nom_de_la_table + '\',' + CRLF;
                    t+='          \'champ_parent\'      => \'' + nom_du_champ_cle + '\',' + CRLF;
                    t+='          \'id_enregistrement\' => $par[\'' + nom_du_champ_cle + '\'],' + CRLF;
                    t+='          \'id_bdd\'   => ' + obj3.id_base_principale + ',' + CRLF;
                    t+='       ),' + CRLF;
                    t+='       $donnees_retournees' + CRLF;
                    t+='    );' + CRLF;
                    t+='    if($dep>0){' + CRLF;
                    t+='        $donnees_retournees[__xsi][__xer][]=\' erreur lors de la suppression, il existe des dépendances sql_' + id_requete_en_base + '() [\' . __LINE__ . \']\';' + CRLF;
                    t+='        return array(' + CRLF;
                    t+='            __xst => __xer,' + CRLF;
                    t+='            \'sql0\' => $sql0,' + CRLF;
                    t+='            \'texte_requete\' => \'la suppression dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\',' + CRLF;
                    t+='            \'exception\' => null,' + CRLF;
                    t+='            \'id_bdd\' => ' + obj3.id_base_principale + ',' + CRLF;
                    t+='            \'code_erreur\' => 19' + CRLF;
                    t+='        );' + CRLF;
                    t+='    }' + CRLF;
                }
            }
            t+='    try{' + CRLF;
            t+='        $ret=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->exec($sql0);' + CRLF;
            t+='        return(array( __xst => __xsu, \'changements\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->changes()));' + CRLF;
            t+='    }catch(Exception $e){' + CRLF;
            t+='\r\n';
            t+='        $le_message=\'Erreur lors de la suppression\';\r\n';
            t+='        if($e->getCode()===19){\r\n';
            t+='            $le_message=\'il existe des enregistrements dépendants\';\r\n';
            t+='        }\r\n';
            t+='\r\n';
            t+='        return array(/**/' + CRLF;
            t+='            __xst => __xer , ' + CRLF;
            t+='            __xme => $le_message , ' + CRLF;
            t+='            \'sql0\' => $sql0 , ' + CRLF;
            t+='            \'texte_requete\' => \'la suppression dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='            \'exception\' => $e , ' + CRLF;
            t+='            \'id_bdd\' => ' + obj3.id_base_principale + ',' + CRLF;
            t+='            \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
            t+='        );' + CRLF;
            t+='    }' + CRLF;
        }else if(type_de_requete === 'insert'){
            var nom_de_la_table=obj3.liste_des_tables_pour_select_php;
            /* this.#obj_webs['ordre_des_tables'][0]['nom_de_la_table']; */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.debut_sql_pour_insert );
            t+='    $sql0=\'' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='    \';' + CRLF;
            t+='    $liste_des_valeurs=\'\';' + CRLF;
            t+='    for($i=0;($i < count($par));$i++){' + CRLF;
            t+='        if($liste_des_valeurs != \'\'){' + CRLF;
            t+='            $liste_des_valeurs.=\',\';' + CRLF;
            t+='        }' + CRLF;
            t+='        $liste_des_valeurs.=\'(\';' + CRLF;
            let tableau_des_insert=[];
            for( i=0 ; i < obj3.tableau_des_valeurs_pour_insert.length ; i++ ){
                if(obj3.tableau_des_valeurs_pour_insert[i][0].indexOf( 'che_est_nur_genre' ) >= 0){
                }
                if(!this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'].hasOwnProperty( obj3.tableau_des_valeurs_pour_insert[i][1] )
                ){
                    return(__gi1.ajoute_message( {
                            "__xst" : __xer ,
                            "__xme" : 'Le champ "' + obj3.tableau_des_valeurs_pour_insert[i][1] + '" n\'existe pas dans la base ' + __gi1.__rev1.nl2()
                        } ));
                }
                /* console.log(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert[i][1]]); */
                if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert[i][1]].genre_objet_du_champ
                       && (this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert[i][1]].genre_objet_du_champ.che_est_tsc_genre === 1
                           || this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert[i][1]].genre_objet_du_champ.che_est_tsm_genre === 1)
                       && this.#obj_webs.ne_pas_traiter_la_maj_ts_creation === 0
                ){
                    tableau_des_insert.push( '        $liste_des_valeurs.=PHP_EOL.\'      \'.sq1($GLOBALS[__date_ms]).\'\'' );
                }else if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert[i][1]].genre_objet_du_champ
                       && this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert[i][1]].genre_objet_du_champ.che_est_nur_genre === 1
                ){
                    tableau_des_insert.push( '        $liste_des_valeurs.=PHP_EOL.\'      \'.sq1(\'0\').\'\'' );
                }else{
                    tableau_des_insert.push( '        $liste_des_valeurs.=PHP_EOL.\'      ' + obj3.tableau_des_valeurs_pour_insert[i][0] + '\'' );
                }
            }
            t+=tableau_des_insert.join( '.\',\';' + CRLF );
            if(tableau_des_insert.length > 0){
                t+=';';
            }else{
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'pas de valeur pour insert'} ));
            }
            t+=CRLF;
            t+='        $liste_des_valeurs.=\')\';' + CRLF;
            t+='    }' + CRLF;
            t+='    $sql0.=$liste_des_valeurs;' + CRLF;
            t+='    // echo __FILE__ . \' \' . __LINE__ . \' $sql0 = <pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            t+='    try{' + CRLF;
            t+='        $ret=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->exec($sql0);' + CRLF;
            t+='        return(array( ' + CRLF;
            t+='            __xst      => __xsu,' + CRLF;
            t+='            \'changements\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->changes(),' + CRLF;
            t+='            \'nouvel_id\'   => $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->lastInsertRowID(),' + CRLF;
            t+='        ));' + CRLF;
            t+='    }catch(Exception $e){' + CRLF;
            t+='        return array(/**/' + CRLF;
            t+='            __xst => __xer , ' + CRLF;
            t+='            \'sql0\' => $sql0 , ' + CRLF;
            t+='            \'texte_requete\' => \'l\\\'insertion dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='            \'exception\' => $e , ' + CRLF;
            t+='            \'id_bdd\' => ' + obj3.id_base_principale + ',' + CRLF;
            t+='            \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
            t+='        );' + CRLF;
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'update'){
            /*
              =============================================================================================
            */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_php( obj3.__xva );
            var nom_de_la_table=obj3.liste_des_tables_pour_select_php;
            /* ''; */
            var champs_bdd={};
            if(this.#obj_webs['ordre_des_tables'].length === 0){
            }else{
                champs_bdd=this.#obj_webs['tableau_des_bases_tables_champs'][id_numerique_base_principale][nom_de_la_table].champs;
            }
            t+='    $sql0=\'UPDATE `\'.$GLOBALS[__BDD][' + obj3.id_base_principale + '][PREFIXE_BDD].\'`.`' + nom_de_la_table + '` SET \'.PHP_EOL;' + CRLF;
            t+='    $tableau_champs=array();' + CRLF;
            var lng_max=0;
            var champ_sortie=0;
            for( champ_sortie=0 ; champ_sortie < this.#obj_webs['champs_sortie'].length ; champ_sortie++ ){
                if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'champ'){
                    var nom_du_champ=this.#obj_webs['champs_sortie'][champ_sortie].nom_du_champ;
                    if(nom_du_champ.length > lng_max){
                        lng_max=nom_du_champ.length;
                    }
                }
            }
            lng_max+=1;
            var numero_de_champ=0;
            var tableau_des_champs_en_sortie=[];
            var champ_sortie=0;
            for( champ_sortie=0 ; champ_sortie < this.#obj_webs['champs_sortie'].length ; champ_sortie++ ){
                if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'formule'){
                    var formule=this.#obj_webs['champs_sortie'][champ_sortie].formule;
                    /*
                      var tableau1=__gi1.__rev1.txt_en_tableau(formule);
                      var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                    */
                    var matriceFonction=__gi1.__rev1.rev_tm( formule );
                    var tab=matriceFonction.__xva;
                    var l01=tab.length;
                    var nom_du_champ='';
                    var valeur_du_champ='';
                    var type_de_champ='constante';
                    var options={"au_format_php" : true ,"tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees};
                    for( var l=1 ; l < l01 ; l++ ){
                        if(tab[l][7] === 0){
                            if(tab[l][1] === '#' && tab[l][2] === 'f'){
                                /*
                                  un commentaire => on passe au suivant
                                */
                                continue;
                            }
                            if(tab[l][1] === 'champ' && tab[l][2] === 'f'){
                                nom_du_champ=tab[l + 1][1];
                            }
                            if(tab[l][1] === 'affecte'){
                                var m=l + 1;
                                for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                    if(tab[m][7] === tab[l][0]){
                                        if(tab[m][2] === 'f' && tab[m][1] === 'champ'){
                                            nom_du_champ=tab[m + 1][1];
                                        }else{
                                            if(tab[m][2] === 'f'){
                                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , m , 0 , options );
                                                if(obj.__xst === __xsu){
                                                    valeur_du_champ=obj.__xva;
                                                }else{
                                                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'fonction dans update conditions "' + tab[l][1] + '"'} ));
                                                }
                                            }else{
                                                if(tab[m][1].toLowerCase() === 'null' && tab[m][4] === 0){
                                                    valeur_du_champ='NULL';
                                                }else{
                                                    if(tab[m][1].substr( 0 , 1 ) === ':'){
                                                        valeur_du_champ='\'.sq0($par[\'' + tab[m][1].substr( 1 ) + '\']).\'';
                                                        type_de_champ='variable';
                                                    }else{
                                                        valeur_du_champ='\'' + tab[m][1].replace( /\'/g , "''" ) + '\'';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            var champ_de_la_base=champs_bdd[nom_du_champ];
                            var lng=lng_max - nom_du_champ.length;
                            var rpt=' ';
                            /* .repeat( lng ); */
                            var encadrement_variable='\\\'';
                            if(champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'int' ) >= 0
                                   || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'float' ) >= 0
                                   || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'decimal' ) >= 0
                            ){
                                encadrement_variable='';
                            }
                            /* type_du_champ // espece_du_champ */
                            let ind=-1;
                            for(let tt in this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs){
                                if(this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[tt].nom_du_champ === nom_du_champ){
                                    ind=tt;
                                    break;
                                }
                            }
                            tableau_des_champs_en_sortie.push( {
                                    "non_du_champ_en_bdd" : nom_du_champ ,
                                    "valeur_du_champ" : valeur_du_champ ,
                                    "encadrement_variable" : encadrement_variable ,
                                    "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                                    "type_de_champ" : type_de_champ ,
                                    "champ_en_bdd" : this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[ind]
                                } );
                        }
                    }
                }else if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'champ'){
                    var nom_du_champ=this.#obj_webs['champs_sortie'][champ_sortie].nom_du_champ;
                    var champ_de_la_base=champs_bdd[nom_du_champ];
                    var lng=lng_max - nom_du_champ.length;
                    var rpt=' '.repeat( lng );
                    var encadrement_variable='\\\'';
                    try{
                        if(champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'int' ) >= 0
                               || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'float' ) >= 0
                               || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'decimal' ) >= 0
                        ){
                            encadrement_variable='';
                        }
                    }catch(e){
                        /* afr pourquoi ???? */
                        debugger;
                    }
                    let ind=-1;
                    for(let tt in this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs){
                        if(this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[tt].nom_du_champ === nom_du_champ){
                            ind=tt;
                            break;
                        }
                    }
                    tableau_des_champs_en_sortie.push( {
                            "non_du_champ_en_bdd" : nom_du_champ ,
                            "valeur_du_champ" : '\'.sq0($par[\'n_' + nom_du_champ + '\']).\'' ,
                            "encadrement_variable" : encadrement_variable ,
                            "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                            "type_de_champ" : 'variable' ,
                            "champ_en_bdd" : this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[ind]
                        } );
                }
            }
            if(tableau_des_champs_en_sortie.length === 0){
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' il manque les champs en sortie '} ));
            }
            var liste_des_champs_pour_update3='';
            for( var i=0 ; i < tableau_des_champs_en_sortie.length ; i++ ){
                var la_sortie=tableau_des_champs_en_sortie[i];
                if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ
                       && this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_nur_genre === 1
                       && this.#obj_webs.ne_pas_traiter_le_numero_de_revision === 0
                ){
                    liste_des_champs_pour_update3+='    $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.non_du_champ_en_bdd + ' + 1 \';' + CRLF;
                }else if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ
                       && (this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_tsc_genre === 1
                           || this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_tsm_genre === 1)
                       && this.#obj_webs.ne_pas_traiter_la_maj_ts_modification === 0
                ){
                    liste_des_champs_pour_update3+='    $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = \\\'\'.$GLOBALS[__date_ms].\'\\\' \';' + CRLF;
                }else if(la_sortie.type_de_champ === 'constante'){
                    liste_des_champs_pour_update3+='    $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\';' + CRLF;
                }else{
                    liste_des_champs_pour_update3+='    if($par[\'n_' + la_sortie.non_du_champ_en_bdd + '\']===\'\' || is_null($par[\'n_' + la_sortie.non_du_champ_en_bdd + '\']) ){' + CRLF;
                    liste_des_champs_pour_update3+='        $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = NULL\';' + CRLF;
                    liste_des_champs_pour_update3+='    }else{' + CRLF;
                    liste_des_champs_pour_update3+='        $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\';' + CRLF;
                    liste_des_champs_pour_update3+='    }' + CRLF;
                }
            }
            t+=CRLF + liste_des_champs_pour_update3 + CRLF;
            t+='    if(count($tableau_champs)===0){' + CRLF;
            t+='        return array(/**/' + CRLF;
            t+='            __xst => __xer ,' + CRLF;
            t+='            __xme => \'aucun champ à mettre à jour\' ,' + CRLF;
            t+='            \'id_bdd\' => ' + obj3.id_base_principale + ' ,' + CRLF;
            t+='            \'sql0\' => $sql0 , ' + CRLF;
            t+='            \'texte_requete\' => \'la modification dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='            \'exception\' => null , ' + CRLF;
            t+='        );' + CRLF;
            t+='    }' + CRLF;
            t+='    $sql0.=implode(\',\'.PHP_EOL.\'    \',$tableau_champs).PHP_EOL;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='    /* ATTENTION : pas de condition */' + CRLF;
                t+='    $where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                t+='    $where0=\' WHERE 1=1 \'.PHP_EOL;' + CRLF;
                var formule=this.#obj_webs.conditions[0].formule;
                tableau_des_conditions=this.#obtenir_le_tableau_des_conditions( this.#obj_webs.conditions[0].formule , obj3 );
            }
            var i=0;
            for( i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='    $where0.=\' AND ' + elem.valeur.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'.PHP_EOL;' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    if((elem.type.toLowerCase() === 'integer'
                               || elem.type.toLowerCase() === 'int')
                           && (elem.operation === 'egal'
                               || elem.operation === 'dans')
                    ){
                        t+='    $where0.=CRLF.construction_where_sql_sur_id1(\'' + elem.nom_du_champ_pour_where + '\',' + elem.condition + ');' + CRLF;
                    }else{
                        t+='    $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
                    }
                }
            }
            t+='    $sql0.=$where0;' + CRLF;
            t+='    // echo __FILE__ . \' \' . __LINE__ . \' $sql0= <pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            /* ' + id_requete_en_base + ' */
            t+='    try{' + CRLF;
            t+='        $ret=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->exec($sql0);' + CRLF;
            t+='        return(array( __xst => __xsu, \'changements\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->changes()));' + CRLF;
            t+='    }catch(Exception $e){' + CRLF;
            t+='        return array(/**/' + CRLF;
            t+='            __xst => __xer , ' + CRLF;
            t+='            \'sql0\' => $sql0 , ' + CRLF;
            t+='            \'texte_requete\' => \'la modification dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='            \'exception\' => $e , ' + CRLF;
            t+='            \'id_bdd\' => ' + obj3.id_base_principale + ',' + CRLF;
            t+='            \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
            t+='        );' + CRLF;
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'select'){
            /*
              =============================================================================================
            */
            var champs0='';
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                if(champs0 !== ''){
                    champs0+=' , ';
                }
                if(i% 5 === 0){
                    champs0+=CRLF + '      ';
                }
                if(obj3.tableau_des_champs_pour_select_php[i].type === 'champ'){
                    champs0+='`' + obj3.tableau_des_champs_pour_select_php[i].alias + '`.`' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '`';
                    if(obj3.tableau_des_champs_pour_select_php[i].hasOwnProperty( 'alias_champ' )
                           && obj3.tableau_des_champs_pour_select_php[i].alias_champ !== ''
                    ){
                        champs0+=' as `' + obj3.tableau_des_champs_pour_select_php[i].alias_champ + '`';
                    }
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'formule'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].formule;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'constante'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'variable'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }
            }
            t+='    $champs0=\'' + champs0 + CRLF + '    \';' + CRLF;
            t+='    $sql0=\'SELECT \'.$champs0;' + CRLF;
            t+='    $from0=\'' + CRLF;
            t+=obj3.liste_des_tables_pour_select_php;
            t+='    \';' + CRLF;
            t+='    $sql0.=$from0;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='    /* ATTENTION : pas de condition dans cette liste */' + CRLF;
                t+='    $where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                var formule='conditions(' + this.#obj_webs.conditions[0].formule + ')';
                var tableau2=__gi1.__rev1.txt_en_tableau( formule );
                var matriceFonction=__gi1.__rev1.tb_vers_matrice( tableau2.__xva , true , false , '' );
                var les_conditions=this.__m_rev_vers_sql1.c_tab_vers_sql( matriceFonction.__xva , {"au_format_php" : true} );
                if(les_conditions.__xst === __xsu){
                    t+='    $where0=\' WHERE ' + les_conditions.__xva + '\'.PHP_EOL;' + CRLF;
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' conversion en php '} ));
                }
            }
            /*
              for( var i=0 ; i < tableau_des_conditions.length ; i++ ){
              debugger
              var elem=tableau_des_conditions[i];
              if(elem.type_condition === 'constante'){
              t+='    $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
              }else if(elem.type_condition === 'variable'){
              if((elem.type.toLowerCase() === 'integer' || elem.type.toLowerCase() === 'int') && elem.operation === 'egal'){
              t+='    $where0.=PHP_EOL.construction_where_sql_sur_id1(\'' + elem.nom_du_champ_pour_where + '\',' + elem.condition + ');' + CRLF;
              }else{
              if(elem.operation === 'dans'){
              t+='    $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
              }else{
              t+='    $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
              }
              }
              }
              }
            */
            t+='    $sql0.=$where0;' + CRLF;
            if(this.#obj_webs.complements.length === 0){
            }else{
                if(obj3.liste_des_tris !== ''){
                    t+='    $order0=\'' + obj3.liste_des_tris + '\';' + CRLF;
                }else{
                    t+='    $order0=\'\';' + CRLF;
                }
                t+='    $sql0.=$order0;' + CRLF;
                if(obj3.liste_des_limites !== ''){
                    t+='    $plage0=\'' + obj3.liste_des_limites + '\';' + CRLF;
                }else{
                    t+='    /* ATTENTION : pas de limites */' + CRLF;
                    t+='    $plage0=\'\';' + CRLF;
                }
                t+='    $sql0.=$plage0;' + CRLF;
            }
            t+='    $donnees0=array();' + CRLF;
            t+='    //echo __FILE__ . \' \' . __LINE__ . \' $sql0 = <pre>\' .  $sql0  . \'</pre>\' ; exit(0);' + CRLF;
            t+='' + CRLF;
            t+='' + CRLF;
            t+='    try{' + CRLF;
            t+='        $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->enableExceptions(true);' + CRLF;
            t+='        $stmt0=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->prepare($sql0);' + CRLF;
            t+='        $res0=$stmt0->execute();' + CRLF;
            t+='        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){' + CRLF;
            t+='            $donnees0[]=array(' + CRLF;
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                if(obj3.tableau_des_champs_pour_select_php[i].type === 'champ'){
                    t+='                \'' + obj3.tableau_des_champs_pour_select_php[i].alias + '.' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '\' => $tab0[' + i + '],' + CRLF;
                }else{
                    t+='                \'' + i + '\' => $tab0[' + i + '],' + CRLF;
                }
            }
            t+='            );' + CRLF;
            t+='        }' + CRLF;
            t+='        return array(' + CRLF;
            t+='           __xst  => __xsu  ,' + CRLF;
            t+='           __xva  => $donnees0   ,' + CRLF;
            t+='           \'sql0\'    => $sql0          ,' + CRLF;
            t+='           \'where0\'  => $where0     ,' + CRLF;
            t+='        );' + CRLF;
            t+='    }catch(Exception $e){' + CRLF;
            if(obj3.hasOwnProperty( 'tableau_des_tables_utilisees' ) && obj3.tableau_des_tables_utilisees.hasOwnProperty( '0' )){
                t+='        return array(' + CRLF;
                t+='           __xst => __xer ,' + CRLF;
                t+='           \'sql0\' => $sql0 , ' + CRLF;
                t+='           \'texte_requete\' => \'la selection sur les ' + obj3.tableau_des_tables_utilisees[0].table.replace( /tbl_/ , '' ) + '\' , ' + CRLF;
                t+='           \'exception\' => $e ,' + CRLF;
                t+='            \'id_bdd\' => ' + obj3.id_base_principale + CRLF;
                t+='         );' + CRLF;
            }else{
                t+='        return array(' + CRLF;
                t+='           __xst => __xer ,' + CRLF;
                t+='            \'sql0\' => $sql0 ,' + CRLF;
                t+='            \'texte_requete\' => \'la selection sur la requête ' + id_requete_en_base + '\' ,' + CRLF;
                t+='            \'exception\' => $e ,' + CRLF;
                t+='            \'id_bdd\' => ' + obj3.id_base_principale + CRLF;
                t+='        );' + CRLF;
            }
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'liste_ecran'){
            /*
              =============================================================================================
              console.log( this.#obj_webs );
            */
            var champs0='';
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                if(champs0 !== ''){
                    champs0+=' , ';
                }
                if(i% 5 === 0){
                    champs0+=CRLF + '      ';
                }
                if(obj3.tableau_des_champs_pour_select_php[i].type === 'champ'){
                    champs0+='`' + obj3.tableau_des_champs_pour_select_php[i].alias + '`.`' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '`';
                    if(obj3.tableau_des_champs_pour_select_php[i].hasOwnProperty( 'alias_champ' )
                           && obj3.tableau_des_champs_pour_select_php[i].alias_champ !== ''
                    ){
                        champs0+=' as `' + obj3.tableau_des_champs_pour_select_php[i].alias_champ + '`';
                    }
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'formule'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].formule;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'constante'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }else if(obj3.tableau_des_champs_pour_select_php[i].type === 'variable'){
                    champs0+=obj3.tableau_des_champs_pour_select_php[i].valeur;
                }
            }
            t+='    if($GLOBALS[DEVER_SRV]>=2){' + CRLF;
            t+='        $donnees_retournees[__xsi][__xif][]=\'info <b>sql_' + id_requete_en_base + '</b>\';' + CRLF;
            t+='    }' + CRLF;
            t+='    $champs0=\'' + champs0 + CRLF + '    \';' + CRLF;
            t+='    $sql0=\'SELECT \'.$champs0;' + CRLF;
            t+='    $from0=\'' + CRLF;
            t+=obj3.liste_des_tables_pour_select_php;
            t+='    \';' + CRLF;
            t+='    $sql0.=$from0;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='    /* ATTENTION : pas de condition dans cette liste */' + CRLF;
                t+='    $where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                t+='    $where0=\' WHERE 1=1 \'.PHP_EOL;' + CRLF;
                var formule=this.#obj_webs.conditions[0].formule;
                /*
                  var tableau1=__gi1.__rev1.txt_en_tableau(formule);
                  var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                */
                var matriceFonction=__gi1.__rev1.rev_tm( formule );
                var tab=matriceFonction.__xva;
                var l01=tab.length;
                var options={
                    "au_format_php" : true ,
                    "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
                    "pour_where" : true ,
                    "type_de_champ_pour_where" : '' ,
                    "nom_du_champ_pour_where" : '' ,
                    "espece_du_champ_pour_where" : ''
                };
                for( var i=1 ; i < l01 ; i++ ){
                    if(tab[i][7] === 0){
                        if(tab[i][1] === '#' && tab[i][2] === 'f'){
                        }else{
                            if(tab[i][1] === 'et' && tab[i][2] === 'f'){
                                var j=i + 1;
                                for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                                    if(tab[j][7] === i){
                                        if(tab[j][2] === 'f'
                                               && (tab[j][1] === 'egal'
                                                   || tab[j][1] === 'diff'
                                                   || tab[j][1] === 'comme'
                                                   || tab[j][1] === 'pas_comme'
                                                   || tab[j][1] === 'equivalent'
                                                   || tab[j][1] === 'pas_equivalent'
                                                   || tab[j][1] === 'sup'
                                                   || tab[j][1] === 'supegal'
                                                   || tab[j][1] === 'inf'
                                                   || tab[j][1] === 'infegal'
                                                   || tab[j][1] === 'dans'
                                                   || tab[j][1] === 'est'
                                                   || tab[j][1] === 'n_est_pas')
                                        ){
                                            var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , j , 0 , options );
                                            if(obj.__xst === __xsu){
                                                var parametre=obj.__xva.match( /\$par\[(.*)\]/ );
                                                if(parametre === null){
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'constante' ,
                                                            "valeur" : obj.__xva ,
                                                            "type" : options.type_de_champ_pour_where ,
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                            "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                                        } );
                                                }else{
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'variable' ,
                                                            "valeur" : obj.__xva ,
                                                            "condition" : parametre[0] ,
                                                            "operation" : tab[j][1] ,
                                                            "type" : options.type_de_champ_pour_where ,
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                            "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                                        } );
                                                }
                                            }else{
                                                debugger;
                                            }
                                        }else if(tab[j][2] === 'f' && tab[j][1] === '#'){
                                        }else{
                                            debugger;
                                        }
                                    }
                                }
                            }else if(tab[i][2] === 'f'
                                   && (tab[i][1] === 'egal'
                                       || tab[i][1] === 'diff'
                                       || tab[i][1] === 'comme'
                                       || tab[i][1] === 'pas_comme'
                                       || tab[i][1] === 'equivalent'
                                       || tab[i][1] === 'pas_equivalent'
                                       || tab[i][1] === 'sup'
                                       || tab[i][1] === 'supegal'
                                       || tab[i][1] === 'inf'
                                       || tab[i][1] === 'infegal'
                                       || tab[i][1] === 'dans'
                                       || tab[i][1] === 'est'
                                       || tab[i][1] === 'n_est_pas')
                            ){
                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , i , 0 , options );
                                if(obj.__xst === __xsu){
                                    var parametre=obj.__xva.match( /\$par\[(.*)\]/ );
                                    if(parametre === null){
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'constante' ,
                                                "valeur" : obj.__xva ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.__xva ,
                                                "condition" : parametre[0] ,
                                                "operation" : tab[i][1] ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                            } );
                                    }
                                }else{
                                    debugger;
                                }
                            }else{
                                debugger;
                            }
                        }
                    }
                }
            }
            for( var i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='    $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    t+='    if(( isset(' + elem.condition + ') && ' + elem.condition + ' !== \'\')){' + CRLF;
                    if((elem.espece_du_champ_pour_where.toLowerCase() === 'integer'
                               || elem.espece_du_champ_pour_where.toLowerCase() === 'int')
                           && elem.operation === 'egal'
                    ){
                        t+='        $where0.=PHP_EOL.construction_where_sql_sur_id1(\'' + elem.nom_du_champ_pour_where + '\',' + elem.condition + ');' + CRLF;
                    }else{
                        t+='        $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
                    }
                    t+='    }' + CRLF;
                }
            }
            t+='    $sql0.=$where0;' + CRLF;
            if(this.#obj_webs.complements.length === 0){
                t+='    /* ATTENTION : pas de complements ( order by , limit dans cette liste */' + CRLF;
                t+='    $order0=\'\';' + CRLF;
                t+='    $plage0=\'\';' + CRLF;
            }else{
                if(obj3.liste_des_tris !== ''){
                    t+='    $order0=\'' + obj3.liste_des_tris + '\';' + CRLF;
                }else{
                    t+='    /* ATTENTION : pas de tri */' + CRLF;
                    t+='    $order0=\'\';' + CRLF;
                }
                t+='    $sql0.=$order0;' + CRLF;
                if(obj3.liste_des_limites !== ''){
                    t+='    $plage0=\'' + obj3.liste_des_limites + '\';' + CRLF;
                }else{
                    t+='    /* ATTENTION : pas de limites */' + CRLF;
                    t+='    $plage0=\'\';' + CRLF;
                }
                t+='    $sql0.=$plage0;' + CRLF;
            }
            t+='    $donnees0=array();' + CRLF;
            t+='    //echo __FILE__ . \' \' . __LINE__ . \' $sql0 = <pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            t+='    try{' + CRLF;
            t+='        $GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->enableExceptions(true);' + CRLF;
            t+='        $stmt0=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->prepare($sql0);' + CRLF;
            t+='        $res0=$stmt0->execute();' + CRLF;
            t+='        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){' + CRLF;
            t+='            $donnees0[]=array(' + CRLF;
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_php.length ; i++ ){
                t+='                \'' + obj3.tableau_des_champs_pour_select_php[i].alias + '.' + obj3.tableau_des_champs_pour_select_php[i].nom_du_champ + '\' => $tab0[' + i + '],' + CRLF;
            }
            t+='            );' + CRLF;
            t+='        }' + CRLF;
            t+='        $stmt0->close();' + CRLF;
            /*  */
            t+='        $sql1=\'SELECT COUNT(*) \'.$from0.$where0;' + CRLF;
            t+='        $__nbEnregs=$GLOBALS[__BDD][' + obj3.id_base_principale + '][LIEN_BDD]->querySingle($sql1);' + CRLF;
            /*  */
            t+='        return array(' + CRLF;
            t+='           __xst  => __xsu       ,' + CRLF;
            t+='           __xva  => $donnees0   ,' + CRLF;
            t+='           \'nombre\'  => $__nbEnregs ,' + CRLF;
            t+='           \'sql0\'    => $sql0          ,' + CRLF;
            t+='           \'where0\'  => $where0     ,' + CRLF;
            t+='        );' + CRLF;
            t+='    }catch(Exception $e){' + CRLF;
            if(obj3.hasOwnProperty( 'tableau_des_tables_utilisees' ) && obj3.tableau_des_tables_utilisees.hasOwnProperty( '0' )){
                t+='        return array(' + CRLF;
                t+='                __xst => __xer , ' + CRLF;
                t+='                \'sql0\' => $sql0 ,' + CRLF;
                t+='                \'texte_requete\' => \'la liste sur les ' + obj3.tableau_des_tables_utilisees[0].table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
                t+='                \'exception\' => $e ,' + CRLF;
                t+='                \'id_bdd\' => ' + obj3.id_base_principale + ' ' + CRLF;
                t+='            );' + CRLF;
            }else{
                t+='        return array(' + CRLF;
                t+='                __xst => __xer , ' + CRLF;
                t+='                \'sql0\' => $sql0 , ' + CRLF;
                t+='                \'texte_requete\' => \'la liste sur la requête ' + id_requete_en_base + '\' , ' + CRLF;
                t+='                \'exception\' => $e , ' + CRLF;
                t+='                \'id_bdd\' => ' + obj3.id_base_principale + ' ' + CRLF;
                t+='            );' + CRLF;
            }
            t+='    }' + CRLF;
        }
        t+='}' + CRLF;
        try{
            let zone=document.getElementById( 'cht_commentaire_requete' );
            if(zone){
                let cht_commentaire_requete=zone.value;
                if(cht_commentaire_requete === ''){
                    if(nom_de_la_table && nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                        document.getElementById( 'cht_commentaire_requete' ).value=nom_de_la_table.substr( 4 );
                    }else if(obj3.tableau_des_tables_utilisees.length >= 1 && obj3.tableau_des_tables_utilisees[0].table.substr( 0 , 4 ) === 'tbl_'){
                        document.getElementById( 'cht_commentaire_requete' ).value=obj3.tableau_des_tables_utilisees[0].table.substr( 4 );
                    }
                }
            }
        } catch {}
        return({"__xst" : __xsu ,"__xva" : t ,"chp_table_reference_requete" : this.#globale_chp_table_reference_requete});
    }
    /*
      =============================================================================================================
      =============================================================================================================
    */
    transform_source_rev_vers_sql( source_rev , id_requete ){
        /*
          var tableau1=__gi1.__rev1.txt_en_tableau(source_rev);
          var obj1=functionToArray2(tableau1.__xva,false,true,'');
        */
        var obj1=__gi1.__rev1.rev_tm( source_rev );
        if(obj1.__xst === __xsu){
            let matrice_requete=obj1.__xva;
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                obj2.__xva=obj2.__xva.replace( /\/\* ==========DEBUT DEFINITION=========== \*\//g , '' );
                if(obj2.__xva.indexOf( 'WHERE ' ) >= 0){
                    var str1=obj2.__xva.substr( 0 , obj2.__xva.indexOf( 'WHERE ' ) );
                    var str2=obj2.__xva.substr( obj2.__xva.indexOf( 'WHERE ' ) );
                    str2=str2.replace( / AND/g , CRLF + '   AND' );
                    if(str2.indexOf( 'ORDER BY ' ) >= 0){
                        str2=str2.replace( /ORDER BY /g , CRLF + 'ORDER BY' );
                    }
                    if(str2.indexOf( 'LIMIT ' ) >= 0){
                        str2=str2.replace( /LIMIT /g , CRLF + 'LIMIT ' );
                    }
                    obj2.__xva=str1 + str2;
                }
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {"au_format_php" : true ,"sur_base_principale" : this.#obj_webs.sur_base_principale} );
                if(obj3.__xst === __xsu){
                    var i=0;
                    for( i=0 ; i < obj3.tableau_des_tables_utilisees.length ; i++ ){
                        var base={};
                        for(base in this.#obj_webs.bases){
                            if(base === obj3.tableau_des_tables_utilisees[i].base){
                                var table={};
                                for(table in this.#obj_webs.bases[base].tables){
                                    if(table === obj3.tableau_des_tables_utilisees[i].table){
                                        obj3.tableau_des_tables_utilisees[i].champs=this.#obj_webs.bases[base].tables[table].champs;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    var obj4=this.#transformer_requete_en_fonction_php( this.#obj_webs.type_de_requete , obj3 , id_requete , obj1.__xva );
                    if(obj4.__xst === __xsu){
                        var obj5=this.#transformer_requete_en_fonction_js( this.#obj_webs.type_de_requete , obj3 , id_requete , obj1.__xva );
                        if(obj5.__xst === __xsu){
                            return({
                                    "__xst" : __xsu ,
                                    "source_sql" : obj2.__xva ,
                                    "source_php" : obj4.__xva ,
                                    "source_js" : obj5.__xva ,
                                    "matrice_requete" : matrice_requete ,
                                    "chp_table_reference_requete" : obj4.chp_table_reference_requete
                                });
                        }else{
                            return(__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"__xme" : __gi1.__rev1.nl2() + 'conversion en php '} ));
                        }
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"__xme" : __gi1.__rev1.nl2() + 'conversion en php '} ));
                    }
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"message" : __gi1.__rev1.nl2() + 'conversion en sql '} ));
                }
            }else{
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'conversion en sql '} ));
            }
        }else{
            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ''} ));
        }
    }
    /*
      =============================================================================================================
    */
    transform_textarea_rev_vers_sql( mat , d ){
        let txtarea_source='';
        let txtarea_dest='';
        let id_requete=0;
        let effacer_la_pile_des_messages=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_requete=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'txtarea_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                txtarea_source=mat[i + 1][1];
            }else if(mat[i][1] === 'txtarea_dest' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                txtarea_dest=mat[i + 1][1];
            }else if(mat[i][1] === 'effacer_la_pile_des_messages' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                effacer_la_pile_des_messages=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(effacer_la_pile_des_messages === 1){
            __gi1.supprimer_les_messages();
        }
        __gi1.masquer_la_zone_message( '' );
        var obj1=this.transform_source_rev_vers_sql( document.getElementById( txtarea_source ).value , id_requete );
        if(obj1.__xst === __xsu){
            document.getElementById( txtarea_dest ).value=obj1.source_sql;
            document.getElementById( 'php_de_la_requete' ).value=obj1.source_php;
            document.getElementById( 'js1_de_la_requete' ).value=obj1.source_js;
        }else{
            if(obj1.hasOwnProperty( 'source_sql' )){
                document.getElementById( txtarea_dest ).value=obj1.source_sql;
            }
            __gi1.affiche_les_messages();
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    afficher_les_donnees(){
        if(this.#div_de_travail === null){
            return;
        }
        var rev_initial=document.getElementById( 'vv_zone_rev_01' );
        this.#div_de_travail.innerHTML='';
        var t='';
        var champs_affiches=false;
        t+='<div>';
        t+='type de requête : ';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(maj_type_de_requete(';
        cmd+='  nom_zone(type_de_requete),';
        cmd+=')))';
        t+='<select id="type_de_requete" data-rev_change="' + cmd + '">';
        t+='<option value="liste_ecran"     ' + (this.#obj_webs.type_de_requete === 'liste_ecran' ? ( ' selected="true"' ) : ( '' )) + '>liste_ecran</option>';
        t+='<option value="select"           ' + (this.#obj_webs.type_de_requete === 'select' ? ( ' selected="true"' ) : ( '' )) + '>select</option>';
        t+='<option value="update"           ' + (this.#obj_webs.type_de_requete === 'update' ? ( ' selected="true"' ) : ( '' )) + '>update</option>';
        t+='<option value="insert"           ' + (this.#obj_webs.type_de_requete === 'insert' ? ( ' selected="true"' ) : ( '' )) + '>insert</option>';
        t+='<option value="delete"           ' + (this.#obj_webs.type_de_requete === 'delete' ? ( ' selected="true"' ) : ( '' )) + '>delete</option>';
        t+='<option value="requete_manuelle" ' + (this.#obj_webs.type_de_requete === 'requete_manuelle' ? ( ' selected="true"' ) : ( '' )) + '>requete_manuelle</option>';
        t+='</select>';
        t+='<br />';
        if(this.#obj_webs.type_de_requete === 'delete'){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(maj_ne_pas_tester_les_dependances_de_suppression(';
            cmd+=' nom_zone(vv_ne_pas_tester_les_dependances_de_suppression),';
            cmd+=')))';
            t+=' ne_pas_tester_les_dependances_de_suppression';
            t+='<input  id="vv_ne_pas_tester_les_dependances_de_suppression" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.ne_pas_tester_les_dependances_de_suppression === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        }else{
            t+='<input style="display:none;" id="vv_tester_les_dependances" type="checkbox" checked="false" />';
            t+='<input style="display:none;" id="vv_ne_pas_tester_les_dependances_de_suppression" type="checkbox" checked="false" />';
        }
        if(this.#obj_webs.type_de_requete === 'update'){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(maj_ne_pas_traiter_la_maj_ts_modification(';
            cmd+=' nom_zone(vv_ne_pas_traiter_la_maj_ts_modification),';
            cmd+=')))';
            t+=' ne_pas_traiter_la_maj_ts_modification';
            t+='<input  id="vv_ne_pas_traiter_la_maj_ts_modification" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.ne_pas_traiter_la_maj_ts_modification === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(maj_ne_pas_traiter_le_numero_de_revision(';
            cmd+=' nom_zone(vv_ne_pas_traiter_le_numero_de_revision),';
            cmd+=')))';
            t+=' ne_pas_traiter_le_numero_de_revision';
            t+='<input  id="vv_ne_pas_traiter_le_numero_de_revision" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.ne_pas_traiter_le_numero_de_revision === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        }else{
            t+='<input style="display:none;" id="vv_ne_pas_traiter_la_maj_ts_modification" type="checkbox" checked="false" />';
            t+='<input style="display:none;" id="vv_ne_pas_traiter_le_numero_de_revision" type="checkbox" checked="false" />';
        }
        if(this.#obj_webs.type_de_requete === 'insert'){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(maj_ne_pas_traiter_la_maj_ts_creation(';
            cmd+=' nom_zone(vv_ne_pas_traiter_la_maj_ts_creation),';
            cmd+=')))';
            t+=' ne_pas_traiter_la_maj_ts_creation';
            t+='<input  id="vv_ne_pas_traiter_la_maj_ts_creation" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.ne_pas_traiter_la_maj_ts_creation === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        }else{
            t+='<input style="display:none;" id="vv_ne_pas_traiter_la_maj_ts_creation" type="checkbox" checked="false" />';
        }
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(maj_sur_base_principale(';
        cmd+=' nom_zone(vv_sur_base_principale),';
        cmd+=')))';
        if(__gi1.chi_id_projet === 1){
            t+=' sur_base_principale';
            t+='<input  id="vv_sur_base_principale" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.sur_base_principale === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        }else{
            t+='<input style="display:none;" id="vv_sur_base_principale" type="checkbox" checked="false" />';
        }
        t+='</div>';
        t+='<table border="1">';
        var la_class_de_la_base='';
        var la_classe_de_la_table='';
        var ind={};
        for(ind in this.#obj_webs['bases']){
            t+='<tr>';
            t+='<td>';
            la_class_de_la_base='';
            if(this.#obj_webs['bases'][ind].selectionne === true){
                la_class_de_la_base='yy__1';
            }
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(selectionner_ou_deselectionner_cette_base(';
            cmd+=' chi_id_basedd(' + this.#obj_webs['bases'][ind].chi_id_basedd + ')';
            cmd+=')))';
            t+='<div class="rev_bouton ' + la_class_de_la_base + '" data-rev_click="' + cmd + '">bdd_' + this.#obj_webs['bases'][ind].chi_id_basedd + '</div>';
            t+='</td>';
            if(la_class_de_la_base !== ''){
                t+='<td>';
                var nom_de_la_table={};
                for(nom_de_la_table in this.#obj_webs['bases'][ind]['tables']){
                    la_classe_de_la_table='';
                    if(this.#obj_webs['bases'][ind]['tables'][nom_de_la_table].active === true){
                        la_classe_de_la_table='yy__3';
                    }
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(selectionner_ou_deselectionner_cette_table(';
                    cmd+='  id_bdd(' + ind + '),';
                    cmd+='  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                    cmd+='  selectionner(1),';
                    cmd+='  indice_table(' + ind + '),';
                    cmd+=')))';
                    t+='<div class="rev_bouton ' + la_classe_de_la_table + '" data-rev_click="' + cmd + '">' + nom_de_la_table + '</div>';
                }
                t+='</td>';
            }
            t+='</tr>';
        }
        t+='</table>';
        var ind={};
        for(ind in this.#obj_webs['bases']){
            var la_class='';
            if(this.#obj_webs['bases'][ind].selectionne === true){
                /* selectionner_ou_deselectionner_cette_table */
                la_class='yyinfo';
            }
        }
        t+='<hr />';
        if(this.#obj_webs['ordre_des_tables'].length > 0){
            t+='<table border="1" id="ordre_des_tables" style="max-width:100%;">';
            var i=0;
            for( i=0 ; i < this.#obj_webs['ordre_des_tables'].length ; i++ ){
                var elem=this.#obj_webs['ordre_des_tables'][i];
                t+='<tr>';
                t+='<td>';
                t+=elem.id_bdd + ' ' + elem.nom_de_la_table + ' T' + this.#obj_webs['ordre_des_tables'][i].indice_table;
                var cmd='';
                cmd+='m1(n1(' + this.moi + '),f1(selectionner_ou_deselectionner_cette_table(';
                cmd+=' id_bdd(' + elem.id_bdd + '),';
                cmd+=' nom_de_la_table(' + elem.nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                cmd+=' selectionner(0),';
                cmd+=' indice_table(' + elem.id_bdd + '),';
                cmd+=' alias_de_la_table(' + elem.alias_de_la_table + '),';
                cmd+=')))';
                t+='<div class="rev_bouton yy__0" data-rev_click="' + cmd + '" title="retirer">-</div>';
                t+='</td>';
                /* t+='<td> aa'; */
                if(i > 0){
                    t+='<td>';
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(changer_la_jointure(';
                    cmd+=' ind(' + i + ')';
                    cmd+=' nom_zone(type_de_jointure)';
                    cmd+=')))';
                    t+='<select id="type_de_jointure" data-rev_change="' + cmd + '" >';
                    t+='<option ' + (this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_croisée' ? ( ' selected="true" ' ) : ( '' )) + ' value="jointure_croisée" >jointure croisée</option>';
                    t+='<option ' + (this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_gauche' ? ( ' selected="true" ' ) : ( '' )) + ' value="jointure_gauche"  >jointure gauche</option>';
                    t+='</select>';
                    t+='</td>';
                }else{
                    t+='<td>table_reference</td>';
                }
                t+='<td>';
                var id_du_champ={};
                for(id_du_champ in this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs']){
                    let Tn='';
                    if(this.#globale_type_requete === 'insert'
                           || this.#globale_type_requete === 'update'
                           || this.#globale_type_requete === 'delete'
                    ){
                    }else{
                        Tn='T' + this.#obj_webs['ordre_des_tables'][i].indice_table;
                    }
                    /* for(id_du_champ in  this.#obj_webs.tableau_des_bases_tables_champs[elem.id_bdd][elem.nom_de_la_table]['champs']){ */
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(selectionner_ce_champ(';
                    cmd+='  nom_du_champ(';
                    cmd+=this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' );
                    cmd+='),';
                    cmd+='  nom_de_la_table(' + elem.nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                    cmd+='  id_bdd(' + elem.id_bdd + '),';
                    cmd+='  indice_table(' + i + '),';
                    cmd+='  Tn(' + Tn + '),';
                    cmd+=')))';
                    t+='<div class="rev_bouton" data-rev_click="' + cmd + '">T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>';
                }
                t+='</td>';
                if(this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_gauche'){
                    t+='<td>';
                    t+='ON:';
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(selectionner_champs_destination1(';
                    cmd+=' indice_table(' + i + ')';
                    cmd+=' nom_zone(type_de_jointure)';
                    cmd+=' gauche_0_droite_1(0)';
                    cmd+=' id(\'champs_selectionnes_0_' + i + '\')';
                    cmd+=' champs_selectionnes(champs_jointure_gauche)';
                    cmd+=')))';
                    t+='<input type="radio" name="champs_selectionnes" ';
                    t+=' data-rev_click="' + cmd + '" ';
                    t+=' id="champs_selectionnes_0_' + i + '" ';
                    var chacked='';
                    if(this.#obj_webs.nom_zone_cible === 'champs_jointure_gauche'
                           && this.#obj_webs.indice_table_pour_jointure_gauche === i
                           && this.#obj_webs.gauche_0_droite_1 === 0
                    ){
                        chacked=' checked="true" ';
                    }
                    t+=' value="champs_sortie" ' + chacked + '/>';
                    if(this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche
                           && this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.hasOwnProperty( 'champ_table_mere' )
                           && this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.champ_table_mere !== null
                    ){
                        t+='( T' + this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.champ_table_mere.indice_table + ' , ' + this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.champ_table_mere.nom_du_champ + ')';
                    }
                    t+=' &nbsp; = &nbsp; ';
                    var chacked='';
                    if(this.#obj_webs.nom_zone_cible === 'champs_jointure_gauche'
                           && this.#obj_webs.indice_table_pour_jointure_gauche === i
                           && this.#obj_webs.gauche_0_droite_1 === 1
                    ){
                        chacked=' checked="true" ';
                    }
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(selectionner_champs_destination1(';
                    cmd+=' indice_table(' + i + ')';
                    cmd+=' nom_zone(type_de_jointure)';
                    cmd+=' gauche_0_droite_1(1)';
                    cmd+=' id(\'champs_selectionnes_1_' + i + '\')';
                    cmd+=' champs_selectionnes(champs_jointure_gauche)';
                    cmd+=')))';
                    t+='<input type="radio" name="champs_selectionnes" ';
                    t+=' data-rev_click="' + cmd + '" ';
                    t+=' id="champs_selectionnes_1_' + i + '" ';
                    t+=' value="champs_sortie"  ' + chacked + '/>';
                    if(this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche
                           && this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.hasOwnProperty( 'champ_table_fille' )
                           && this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.champ_table_fille !== null
                    ){
                        t+='( T' + this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.champ_table_fille.indice_table + ' , ' + this.#obj_webs.ordre_des_tables[i].champs_jointure_gauche.champ_table_fille.nom_du_champ + ')';
                    }
                    t+='</td>';
                }
                t+='</tr>';
            }
            t+='</table>';
        }
        /*
          *
        */
        t+='<div>';
        t+='champs sortie : ';
        var chacked='';
        if(this.#obj_webs.type_de_requete === 'insert'){
            chacked=' checked="true" ';
        }
        if(this.#obj_webs.nom_zone_cible === 'champs_sortie'){
            chacked=' checked="true" ';
        }
        /* champs_selectionnes , indice_table , gauche_0_droite_1 */
        var cmd='';
        cmd+='m1(n1(' + this.moi + ')f1(selectionner_champs_destination2(';
        cmd+=' champs_selectionnes(champs_sortie)';
        cmd+=')))';
        t+='<input type="radio" data-rev_click="' + cmd + '"  name="champs_selectionnes" id="champs_selectionnes_1" value="champs_sortie" ' + chacked + '/>';
        if(this.#obj_webs.champs_sortie.length === 0){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(ajouter_une_formule(';
            cmd+='  destination(champs_sortie),';
            cmd+=')))';
            t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '">+f()</div>';
        }else{
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(modifier_la_formule_de_destination(';
            cmd+=' destination(champs_sortie)';
            cmd+=')))';
            t+='<div class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + __gi1.les_svg.editer + '</div>';
        }
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(champs_sortie))))';
        t+='<div class="rev_b_svg yy__0" data-rev_click="' + cmd + '">' + __gi1.les_svg.poubelle + '</div>';
        t+='</div>';
        /*
          *
        */
        t+='<div id="champs_en_sortie"  style="max-width:90%;overflow-inline:auto;">';
        var contenu='';

        for( let i=0 ; i < this.#obj_webs.champs_sortie.length ; i++ ){
            t+="\r\n"+'<div class="rev_bouton" style="max-width:100%;text-align:left;" ';
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(retirer_ce_champ_de_sortie(';
            cmd+='  ind(' + i + '),';
            cmd+=')))';
            if(this.#obj_webs.type_de_requete !== 'select' || this.#obj_webs.type_de_requete !== 'liste_ecran'){
                /* cas insert update */
                /* debugger; */
                let libelle='';
                if(this.#obj_webs.champs_sortie[i].type_d_element === 'champ'){
                    if(this.#obj_webs.type_de_requete === 'insert'){
                        libelle='affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`),:' + this.#obj_webs.champs_sortie[i].nom_du_champ + ')';
                    }else{
                        libelle='champ(`T' + this.#obj_webs.champs_sortie[i].indice_table + '` , `' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                    }
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'constante'){
                    libelle=__gi1.__rev1.ma_constante( this.#obj_webs.champs_sortie[i].constante );
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    libelle=this.#obj_webs.champs_sortie[i].formule;
                }
                t+='data-rev_click="' + cmd + '">' + libelle;
            }else{
                if(this.#obj_webs.champs_sortie[i].type_d_element === 'champ'){
                    if(this.#obj_webs.type_de_requete === 'update'){
                        t+='data-rev_click="' + cmd + '">affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '` , :n_' + this.#obj_webs.champs_sortie[i].nom_du_champ + ')';
                    }else if(this.#obj_webs.type_de_requete === 'update'){
                        t+='data-rev_click="' + cmd + '">affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '` , :' + this.#obj_webs.champs_sortie[i].nom_du_champ + ')';
                    }else{
                        t+='data-rev_click="' + cmd + '">T' + this.#obj_webs.champs_sortie[i].indice_table + '.' + this.#obj_webs.champs_sortie[i].nom_du_champ;
                    }
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    t+='data-rev_click="' + cmd + '">' + this.#obj_webs.champs_sortie[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
                }
            }
            t+='</div>'+"\r\n";
        }
        t+='</div>';
        /*
          les champs conditions
        */
        t+='<div>';
        t+='champs conditions ( WHERE )';
        if(this.#obj_webs.type_de_requete !== 'insert'){
            if(this.#obj_webs.conditions){
                var i=0;
                if(this.#obj_webs.conditions.length === 0){
                    t+='<div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(ajouter_une_formule(destination(conditions))))">+f()</div>';
                }else{
                    var cmd='m1(n1(' + this.moi + '),f1(modifier_la_formule_de_destination(destination(conditions))))';
                    t+='<div  class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + __gi1.les_svg.editer + '</div>';
                }
            }else{
                t+='<div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(ajouter_une_formule(destination(conditions))))">+f()</div>';
            }
        }
        t+='<div class="rev_b_svg yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(conditions))))">' + __gi1.les_svg.poubelle + '</div>';
        if(this.#obj_webs.type_de_requete !== 'insert'){
            /* t+='<div>'; */
            if(this.#obj_webs.conditions){
                if(this.#obj_webs.conditions.length > 0){
                    t+='<div>';
                    for( let i=0 ; i < this.#obj_webs.conditions.length ; i++ ){
                        var cmd='m1(n1(' + this.moi + '),f1(retirer_ce_champ_de_where(destination(conditions))))';
                        t+='<div class="rev_bouton" ';
                        t+=' id="retirer_ce_champ_de_where"';
                        t+=' style="max-width:90%;overflow-wrap:anywhere;max-height:fit-content;"';
                        t+=' data-rev_click="';
                        t+='' + cmd + '';
                        t+=' ">' + this.#obj_webs.conditions[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ) + '</div>';
                    }
                    t+='</div>';
                }
            }
        }
        t+='</div>';
        /*
          les champs compléments
        */
        t+='<div>';
        t+='les complements';
        if(this.#obj_webs.complements){
            if(this.#obj_webs.complements.length > 0){
                var cmd='m1(n1(' + this.moi + '),f1(modifier_la_formule_de_destination(destination(complements))))';
                t+='<div class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + __gi1.les_svg.editer + '</div>';
            }else{
                var cmd='m1(n1(' + this.moi + '),f1(ajouter_une_formule(destination(complements))))';
                t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '">+f()</div>';
            }
        }
        t+='<div class="rev_b_svg yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(complements))))">' + __gi1.les_svg.poubelle + '</div>';
        if(this.#obj_webs.complements){
            if(this.#obj_webs.complements.length > 0){
                for( let i=0 ; i < this.#obj_webs.complements.length ; i++ ){
                    cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(retirer_ce_champ_de_complements(';
                    cmd+=' destination(complements),';
                    cmd+=')))';
                    t+='<div ';
                    t+=' class="rev_bouton" ';
                    t+=' style="max-height:fit-content;"';
                    t+=' data-rev_click="' + cmd + '"';
                    t+='>' + this.#obj_webs.complements[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ) + '</div>';
                }
            }
        }
        t+='</div>';
        var rev_texte='';
        var valeurs='';
        var provenance='';
        var conditions='';
        var complements='';
        var numero_champ=0;
        if(this.#obj_webs['champs_sortie'].length > 0){
            var i=0;
            for( i=0 ; i < this.#obj_webs['champs_sortie'].length ; i++ ){
                var elem=this.#obj_webs['champs_sortie'][i];
                if(valeurs !== ''){
                    valeurs+=',';
                }
                if(elem.type_d_element === 'champ'){
                    if(this.#obj_webs.type_de_requete === 'update'){
                        valeurs+=CRLF + '      ' + 'affecte( champ( `' + elem.nom_du_champ + '`) , :n_' + elem.nom_du_champ + ')';
                        numero_champ++;
                    }else if(this.#obj_webs.type_de_requete === 'insert'){
                        valeurs+=CRLF + '      ' + 'affecte( champ( `' + elem.nom_du_champ + '`) , :' + elem.nom_du_champ + ')';
                        numero_champ++;
                    }else{
                        valeurs+=CRLF + '      ' + 'champ(`T' + elem.indice_table + '` , `' + elem.nom_du_champ + '` ' + (elem.alias_du_champ && elem.alias_du_champ !== '' ? ( ' , alias_champ(`' + elem.alias_du_champ + '`)' ) : ( '' )) + ' )';
                    }
                }else if(elem.type_d_element === 'constante'){
                    valeurs+=CRLF + '      ' + __gi1.__rev1.ma_constante( elem.constante );
                }else if(elem.type_d_element === 'formule'){
                    valeurs+=CRLF + '      ' + elem.formule;
                }
            }
        }
        if(this.#obj_webs['ordre_des_tables'].length > 0){
            var i=0;
            for( i=0 ; i < this.#obj_webs['ordre_des_tables'].length ; i++ ){
                var elem=this.#obj_webs['ordre_des_tables'][i];
                if(provenance !== ''){
                    provenance+=',';
                }
                provenance+=CRLF + '      ' + elem.jointure + '(';
                provenance+=CRLF + '         ' + 'source(';
                provenance+='nom_de_la_table(';
                if(this.#obj_webs.type_de_requete === 'update'
                       || this.#obj_webs.type_de_requete === 'insert'
                       || this.#obj_webs.type_de_requete === 'delete'
                ){
                    provenance+=elem.nom_de_la_table + ',base(b' + elem.id_bdd + ')';
                }else{
                    provenance+=elem.nom_de_la_table + ',alias(T' + elem.indice_table + '),base(b' + elem.id_bdd + ')';
                }
                provenance+=')';
                provenance+=')';
                if(elem.jointure === 'jointure_gauche'){
                    provenance+=',';
                    provenance+=CRLF + '         contrainte(';
                    provenance+=CRLF + '            egal(';
                    provenance+='  champ(';
                    if(elem.champs_jointure_gauche.hasOwnProperty( 'champ_table_mere' )
                           && elem.champs_jointure_gauche.champ_table_mere !== null
                    ){
                        provenance+='   T' + elem.champs_jointure_gauche.champ_table_mere.indice_table + ' , ' + elem.champs_jointure_gauche.champ_table_mere.nom_du_champ;
                    }
                    provenance+='  ),';
                    provenance+='  champ(';
                    if(elem.champs_jointure_gauche.hasOwnProperty( 'champ_table_fille' )
                           && elem.champs_jointure_gauche.champ_table_fille !== null
                    ){
                        provenance+='   T' + elem.champs_jointure_gauche.champ_table_fille.indice_table + ' , ' + elem.champs_jointure_gauche.champ_table_fille.nom_du_champ;
                    }
                    provenance+='  )';
                    provenance+=' )';
                    provenance+=CRLF + '         )';
                }
                provenance+=CRLF + ')';
            }
        }
        if(this.#obj_webs['conditions'] && this.#obj_webs['conditions'].length > 0){
            var i=0;
            for( i=0 ; i < this.#obj_webs['conditions'].length ; i++ ){
                var elem=this.#obj_webs['conditions'][i];
                if(conditions !== ''){
                    conditions+=',';
                }
                if(elem.type_d_element === 'champ'){
                    conditions+=CRLF + '      ' + 'champ(T' + elem.indice_table + '.' + elem.nom_du_champ + ')';
                }else if(elem.type_d_element === 'formule'){
                    conditions+=CRLF + '      ' + elem.formule;
                }
            }
            conditions='conditions(' + conditions + ')';
        }
        if(this.#obj_webs['complements'] && this.#obj_webs['complements'].length > 0){
            var i=0;
            for( i=0 ; i < this.#obj_webs['complements'].length ; i++ ){
                var elem=this.#obj_webs['complements'][i];
                if(complements !== ''){
                    complements+=',';
                }
                if(elem.type_d_element === 'champ'){
                    complements+=CRLF + '   ' + 'champ(T' + elem.indice_table + '.' + elem.nom_du_champ + ')';
                }else if(elem.type_d_element === 'formule'){
                    complements+=CRLF + '   ' + elem.formule;
                }
            }
        }
        if(this.#obj_webs.type_de_requete === 'requete_manuelle'){
            rev_texte+='manuelle(';
        }else if(this.#obj_webs.type_de_requete === 'select' || this.#obj_webs.type_de_requete === 'liste_ecran'){
            rev_texte+='sélectionner(';
        }else if(this.#obj_webs.type_de_requete === 'insert'){
            rev_texte+='insérer(';
        }else if(this.#obj_webs.type_de_requete === 'update'){
            rev_texte+='modifier(';
        }else if(this.#obj_webs.type_de_requete === 'delete'){
            rev_texte+='supprimer(';
        }
        rev_texte+='base_de_reference(';
        var i={};
        for(i in this.#obj_webs['bases']){
            var liste_des_bases='';
            if(this.#obj_webs['bases'][i].selectionne === true){
                if(liste_des_bases !== ''){
                    liste_des_bases+=',';
                }
                liste_des_bases+=i;
            }
            rev_texte+=liste_des_bases;
        }
        rev_texte+=')';
        if(this.#obj_webs.type_de_requete !== 'delete'){
            rev_texte+=CRLF + '   ' + 'valeurs(' + valeurs + CRLF + '   )';
        }
        if(provenance !== ''){
            rev_texte+=CRLF + '   ' + 'provenance(' + provenance;
            rev_texte+=CRLF + '   )';
        }
        if(conditions !== ''){
            rev_texte+=CRLF + '   ' + conditions;
        }
        if(complements !== ''){
            rev_texte+=CRLF + '   ,complements(' + complements + ')';
        }
        rev_texte+=CRLF + ')';
        /*
          var tableau1=__gi1.__rev1.txt_en_tableau(rev_texte);
          var matriceFonction=functionToArray2(tableau1.__xva,true,false,'');
        */
        var matriceFonction=__gi1.__rev1.rev_tm( rev_texte );
        if(matriceFonction.__xst === __xsu){
            var obj2=__gi1.__rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
            if(obj2.__xst === __xsu){
                rev_texte=obj2.__xva;
            }
        }
        var requete_manuelle_avec_base=0;
        if(this.#obj_webs.type_de_requete === 'requete_manuelle'){
            if(rev_initial === null){
                if(this.#globale_rev_requete === ''){
                    rev_texte='requete_manuelle(' + CRLF;
                    rev_texte+='   base_de_reference(';
                    var i={};
                    for(i in this.#obj_webs['bases']){
                        var liste_des_bases='';
                        if(this.#obj_webs['bases'][i].selectionne === true){
                            if(requete_manuelle_avec_base === 0){
                                requete_manuelle_avec_base=i;
                            }
                            if(liste_des_bases !== ''){
                                liste_des_bases+=',';
                            }
                            liste_des_bases+=i;
                        }
                        rev_texte+=liste_des_bases;
                    }
                    rev_texte+=')' + CRLF;
                    rev_texte+=')' + CRLF;
                }else{
                    if(this.#globale_rev_requete !== ''){
                        rev_texte=this.#globale_rev_requete;
                        if(rev_texte.indexOf( 'base_de_reference()' ) >= 0){
                            requete_manuelle_avec_base=0;
                        }else{
                            if(rev_texte.indexOf( 'base_de_reference(' ) >= 0){
                                requete_manuelle_avec_base=1;
                            }
                        }
                    }else{
                    }
                }
            }else{
                if(rev_initial.value === ''){
                    rev_texte='requete_manuelle(' + CRLF;
                    rev_texte+='   base_de_reference(';
                    var i={};
                    for(i in this.#obj_webs['bases']){
                        var liste_des_bases='';
                        if(this.#obj_webs['bases'][i].selectionne === true){
                            if(requete_manuelle_avec_base === 0){
                                requete_manuelle_avec_base=i;
                            }
                            if(liste_des_bases !== ''){
                                liste_des_bases+=',';
                            }
                            liste_des_bases+=i;
                        }
                        rev_texte+=liste_des_bases;
                    }
                    rev_texte+=')' + CRLF;
                    rev_texte+=')' + CRLF;
                }else{
                    if(rev_initial.value.indexOf( 'base_de_reference()' ) >= 0){
                        rev_texte='requete_manuelle(' + CRLF;
                        rev_texte+='   base_de_reference(';
                        var i={};
                        for(i in this.#obj_webs['bases']){
                            var liste_des_bases='';
                            if(this.#obj_webs['bases'][i].selectionne === true){
                                if(requete_manuelle_avec_base === 0){
                                    requete_manuelle_avec_base=i;
                                }
                                if(liste_des_bases !== ''){
                                    liste_des_bases+=',';
                                }
                                liste_des_bases+=i;
                            }
                            rev_texte+=liste_des_bases;
                        }
                        rev_texte+=')' + CRLF;
                        rev_texte+=')' + CRLF;
                    }else{
                        /* une requete manuelle peut ne pas avoir de base de référence */
                    }
                }
            }
            if(rev_initial !== null){
                rev_texte=rev_initial.value;
            }
            if(requete_manuelle_avec_base > 0){
                var regex=/base_de_reference\(\d+\)/g;
                rev_texte=rev_texte.replace( regex , '' );
                var regex=/base_de_reference\(\)/g;
                rev_texte=rev_texte.replace( regex , '' );
                rev_texte=rev_texte.replace( 'requete_manuelle(' , 'requete_manuelle(base_de_reference(' + requete_manuelle_avec_base + ')' );
            }else{
                var regex=/base_de_reference\(\d+\)/g;
                rev_texte=rev_texte.replace( regex , '' );
                var regex=/base_de_reference\(\)/g;
                rev_texte=rev_texte.replace( regex , '' );
                rev_texte=rev_texte.replace( 'requete_manuelle(' , 'requete_manuelle(base_de_reference()' );
            }
        }
        let liste_des_meta='';
        if(this.#obj_webs.type_de_requete === 'delete' && this.#obj_webs.ne_pas_tester_les_dependances_de_suppression === 1){
            liste_des_meta+='ne_pas_tester_les_dependances_de_suppression(1)';
        }
        if((this.#obj_webs.type_de_requete === 'update'
                   || this.#obj_webs.type_de_requete === 'insert')
               && this.#obj_webs.ne_pas_traiter_la_maj_ts_modification === 1
        ){
            liste_des_meta+='ne_pas_traiter_la_maj_ts_modification(1)';
        }
        if((this.#obj_webs.type_de_requete === 'update'
                   || this.#obj_webs.type_de_requete === 'insert')
               && this.#obj_webs.ne_pas_traiter_la_maj_ts_creation === 1
        ){
            liste_des_meta+='ne_pas_traiter_la_maj_ts_creation(1)';
        }
        if(this.#obj_webs.type_de_requete === 'update' && this.#obj_webs.ne_pas_traiter_le_numero_de_revision === 1){
            liste_des_meta+='ne_pas_traiter_le_numero_de_revision(1)';
        }
        if(this.#obj_webs.sur_base_principale === 1){
            liste_des_meta+='sur_base_principale(1)';
        }
        if(liste_des_meta !== ''){
            rev_texte='#(meta(' + liste_des_meta + ')),\n' + rev_texte;
        }
        t+='<div class="yy_conteneur_txtara" style="margin-top:15px;">';
        t+='  <div>';
        t+='    <b>rev : </b>';
        t+=__gi1.__fnt1.boutons_rev3( 'vv_zone_rev_01' );
        t+='    <div class="rev_bouton yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(raz_champs_tous()))" title="raz des champs sortie , condition et compléments">RAZ</div>';
        t+='  </div>';
        t+='  <textarea ';
        t+='    class="txtar1" ';
        t+='    data-editeur1="rev" id="vv_zone_rev_01" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(this.#obj_webs.type_de_requete === 'requete_manuelle'){
            t+='' + this.#globale_rev_requete.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '';
        }else{
            t+='' + rev_texte.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '';
        }
        t+='  </textarea></div>';
        /*
          =====================================================================================================
        */
        t+='<div> commentaire : ';
        t+='    <input style="width:50%" type="text" id="cht_commentaire_requete" value="' + this.#globale_commentaire_requete.replace( /&/g , '&amp;' ).replace( '<' , '&lt;' ).replace( '>' , '&gt;' ).replace( '"' , '&quot;' ) + '"/>';
        t+='    , souche : <input type="range" id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="' + this.#che_est_souche_requete + '" >';
        t+='    <br />';
        t+='    table de référence : ';
        t+='    <input style="width:50%" type="text" id="chp_table_reference_requete" value="' + this.#globale_chp_table_reference_requete.replace( /&/g , '&amp;' ).replace( '<' , '&lt;' ).replace( '>' , '&gt;' ).replace( '"' , '&quot;' ) + '"/>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+=' <div>';
        t+='    <b>SQL : </b>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(transform_textarea_rev_vers_sql(';
        cmd+=' txtarea_source(vv_zone_rev_01),';
        cmd+=' txtarea_dest(txtar2),';
        cmd+=' id_requete(' + this.#globale_id_requete + '),';
        cmd+=' effacer_la_pile_des_messages(1),';
        cmd+=')))';
        t+='    <div class="rev_bouton yy__1" data-rev_click="' + cmd + '" title="convertir rev en SQL">R2S</div>';
        if(this.#globale_id_requete > 0){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(bouton_modifier_le_rev_en_base(id_requete(' + this.#globale_id_requete + '),retour_a_la_liste(1))))';
            t+='    <div class="rev_bouton yy__3" data-rev_click="' + cmd + '">modifier en base(' + this.#globale_id_requete + ') et retour à la liste</div>';
            document.getElementById( 'init' ).value=this.#globale_rev_requete.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
        }
        var cmd='m1(n1(' + this.moi + '),f1(bouton_ajouter_le_rev_en_base(chi_id_requete(' + this.#globale_id_requete + '))))';
        t+='    <div class="rev_bouton yy__3" data-rev_click="' + cmd + '" title="ajouter en base">ajouter en base</div>';
        t+=__gi1.__fnt1.boutons_edition1( 'txtar2' );
        t+=' </div>';
        t+=' <textarea class="txtar1" id="txtar2" rows="5" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        t+='</div>';
        /*
          =====================================================================================================
        */
        t+='<div style="margin-top:10px;" class="yy_conteneur_txtara">';
        t+='    <div>';
        t+='        <b>js : </b>';
        t+='        ' + __gi1.__fnt1.boutons_edition1( 'js1_de_la_requete' );
        t+='    </div>';
        t+='    <textarea class="txtar1" id="js1_de_la_requete" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        t+='</div>';
        /*
          =====================================================================================================
        */
        t+='<div style="margin-top:10px;" class="yy_conteneur_txtara">';
        t+='    <div>';
        t+='        <b>php : </b>';
        t+='        ' + __gi1.__fnt1.boutons_edition1( 'php_de_la_requete' );
        t+='    </div>';
        t+='    <textarea class="txtar1" id="php_de_la_requete" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        t+='</div>';
        /*
          console.log( ' this.#obj_webs=' , this.#obj_webs );
        */
        this.#div_de_travail.innerHTML=t;
        __gi1.ajoute_les_evenements_aux_boutons();
    }
    /*
      =============================================================================================================
    */
    modifier_la_requete_en_base( mat , d ){
        let retour_a_la_liste=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === "retour_a_la_liste" && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                retour_a_la_liste=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(retour_a_la_liste === 1){
            __gi1.redirection1( 'm1(n1(c_requetes1),f1(liste_du_menu0()))' , null );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    bouton_modifier_le_rev_en_base( mat , d ){
        let id_requete=0;
        if(document.getElementById( 'php_de_la_requete' ).value === ''){
            if(!confirm( 'avec zone php vide ?' )){
                return({"__xst" : __xsu});
            }
        }
        let retour_a_la_liste=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_requete=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                retour_a_la_liste=1;
            }
        }
        __gi1.supprimer_les_messages();
        var obj1=__gi1.__rev1.rev_tm( document.getElementById( 'vv_zone_rev_01' ).value );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let obj={
                    "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier_la_requete_en_base(retour_a_la_liste(' + retour_a_la_liste + ')))))' ,
                    "__xva" : {
                        "rev" : document.getElementById( 'vv_zone_rev_01' ).value ,
                        "sql" : document.getElementById( 'txtar2' ).value ,
                        "php" : document.getElementById( 'php_de_la_requete' ).value ,
                        "js" : document.getElementById( 'js1_de_la_requete' ).value ,
                        "type" : this.#obj_webs.type_de_requete ,
                        "cht_matrice_requete" : obj1.__xva ,
                        "cht_commentaire_requete" : document.getElementById( 'cht_commentaire_requete' ).value ,
                        "che_est_souche_requete" : document.getElementById( 'che_est_souche_requete' ).value ,
                        "chp_table_reference_requete" : document.getElementById( 'chp_table_reference_requete' ).value ,
                        "chi_id_requete" : id_requete ,
                        "retour_a_la_liste" : retour_a_la_liste
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      =============================================================================================================
      lors d'une initialisation à partir d'une requête initiale,
      il faut vérifier que le rev de la requete contient bien les références des tables et des champs
      contenus dans init.bases[n].matrices
      puis mettre les valeurs dans les champs de #obj_webs
    */
    convertir_rev_pour_construction( bases ){

        this.#obj_webs.type_de_requete=this.#globale_type_requete;
        /* this.#obj_webs.bases=bases; */
        /*
          console.log( 'this.#obj_webs.tableau_des_bases_tables_champs=' , this.#obj_webs.tableau_des_bases_tables_champs );
        */
        var obj1=__gi1.__rev1.rev_tm( this.#globale_rev_requete );
        if(obj1.__xst !== __xsu){
            return;
        }
        var tab=obj1.__xva;
        var l01=tab.length;
        var indice_table=0;
        var jointure='';
        var nom_de_la_table='';
        var id_bdd=0;
        /*
          etape 1 références des tables
        */
        this.#obj_webs['ordre_des_tables']=[];
        for( var i=1 ; i < l01 ; i=tab[i][12] ){
            if(tab[i][2] === 'f'){
                /* sélectionner, supprimer , insérer, modifier ... */
                for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                    if(tab[j][1] === 'provenance' && tab[j][2] === 'f'){
                        for( var k=j + 1 ; k < l01 ; k=tab[k][12] ){
                            if(tab[k][2] === 'f'){
                                /* jointure_gauche , table_reference */
                                var tab_jointure_gauche=[];
                                var champs_jointure_gauche={};
                                let nom_de_la_table='';
                                let id_bdd=0;
                                let alias=0;
                                let base=0;
                                let ordre_de_table={
                                    "id_bdd" : 0 ,
                                    "nom_de_la_table" : "" ,
                                    "alias_de_la_table" : "" ,
                                    "indice_table" : this.#obj_webs['ordre_des_tables'].length ,
                                    "jointure" : "" ,
                                    "champs_jointure_gauche" : {"champ_table_mere" : {} ,"champ_table_fille" : {}}
                                };
                                ordre_de_table.jointure=tab[k][1];
                                for( var l=k + 1 ; l < l01 ; l=tab[l][12] ){
                                    if(tab[l][1] === 'source' && tab[l][2] === 'f'){
                                        for( var m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                            if(tab[m][1] === 'nom_de_la_table' && tab[m][2] === 'f'){
                                                for( var n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                                    if(tab[n][1] === 'alias' && tab[n][2] === 'f' && tab[n][8] === 1 && tab[n + 1][2] === 'c'){
                                                        ordre_de_table.alias_de_la_table=tab[n + 1][1];
                                                    }else if(tab[n][1] === 'base' && tab[n][2] === 'f' && tab[n][8] === 1 && tab[n + 1][2] === 'c'){
                                                        try{
                                                            let base=parseInt( tab[n + 1][1].replace( /b/ , '' ) );
                                                            for(let ind in this.#obj_webs['bases']){
                                                                if(this.#obj_webs['bases'][ind].chi_id_basedd === base){
                                                                    this.#obj_webs['bases'][ind].selectionne=true;
                                                                    ordre_de_table.id_bdd=ind;
                                                                    break;
                                                                }
                                                            }
                                                        } catch {}
                                                    }else if(tab[n][2] === 'c'){
                                                        ordre_de_table.nom_de_la_table=tab[n][1];
                                                        /* console.log( tab[n][1] ); */
                                                    }
                                                }
                                            }
                                        }
                                    }else if(tab[l][1] === 'contrainte' && tab[l][2] === 'f'){
                                        for( var m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                            if(tab[m][1] === 'egal' && tab[m][2] === 'f'){
                                                /* contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_parent_groupe))) */
                                                for( var n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                                    if(tab[n][1] === 'champ' && tab[n][2] === 'f' && tab[n][8] === 2 && tab[n + 1][2] === 'c'){
                                                        var nom_du_champ='';
                                                        var alias_de_la_table_pour_le_champ='';
                                                        /*
                                                          champ(`T0` , `chi_id_test`)
                                                        */
                                                        for( let o=n + 1 ; o < l01 ; o=tab[o][12] ){
                                                            if(tab[o][2] === 'c'){
                                                                if(alias_de_la_table_pour_le_champ === ''){
                                                                    alias_de_la_table_pour_le_champ=tab[o][1];
                                                                }else{
                                                                    nom_du_champ=tab[o][1];
                                                                }
                                                            }
                                                        }
                                                        tab_jointure_gauche.push( {"alias_de_la_table_pour_le_champ" : alias_de_la_table_pour_le_champ ,"nom_du_champ" : nom_du_champ} );
                                                    }else{
                                                        debugger;
                                                    }
                                                }
                                            }else{
                                                debugger;
                                            }
                                        }
                                    }
                                }
                                if(ordre_de_table.nom_de_la_table !== '' && ordre_de_table.id_bdd !== 0){
                                    /* this.#obj_webs['bases'][ind] */
                                    this.#obj_webs['bases'][ordre_de_table.id_bdd].tables[ordre_de_table.nom_de_la_table].active=true;
                                    this.#obj_webs['ordre_des_tables'].push( ordre_de_table );
                                }
                                if(tab_jointure_gauche.length === 2){
                                    for( let indj=0 ; indj < tab_jointure_gauche.length ; indj++ ){
                                        for( let indtbl=0 ; indtbl < this.#obj_webs['ordre_des_tables'].length ; indtbl++ ){
                                            if(tab_jointure_gauche[indj].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][indtbl].alias_de_la_table
                                                   && ordre_de_table.alias_de_la_table === this.#obj_webs['ordre_des_tables'][indtbl].alias_de_la_table
                                                   && this.#obj_webs['ordre_des_tables'][indtbl].jointure === 'jointure_gauche'
                                            ){
                                                ordre_de_table.champs_jointure_gauche['champ_table_mere']={
                                                    "nom_du_champ" : tab_jointure_gauche[indj].nom_du_champ ,
                                                    "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][indtbl].nom_de_la_table ,
                                                    "id_bdd" : this.#obj_webs['ordre_des_tables'][indtbl].id_bdd ,
                                                    "indice_table" : this.#obj_webs['ordre_des_tables'][indtbl].indice_table
                                                };
                                            }else if(tab_jointure_gauche[indj].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][indtbl].alias_de_la_table
                                            ){
                                                ordre_de_table.champs_jointure_gauche['champ_table_fille']={
                                                    "nom_du_champ" : tab_jointure_gauche[indj].nom_du_champ ,
                                                    "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][indtbl].nom_de_la_table ,
                                                    "id_bdd" : this.#obj_webs['ordre_des_tables'][indtbl].id_bdd ,
                                                    "indice_table" : this.#obj_webs['ordre_des_tables'][indtbl].indice_table
                                                };
                                            }
                                        }
                                    }
                                    this.#obj_webs['ordre_des_tables'][this.#obj_webs['ordre_des_tables'].length - 1].champs_jointure_gauche=ordre_de_table.champs_jointure_gauche;
                                    tab_jointure_gauche=[];
                                }
                            }
                        }
                    }
                }
            }
        }
        this.#obj_webs['champs_sortie']=[];
        for( var i=1 ; i < l01 ; i=tab[i][12] ){
            if(tab[i][2] === 'f'){
                /* sélectionner, supprimer , insérer, modifier ... */
                for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                    if(tab[j][1] === 'valeurs' && tab[j][2] === 'f'){
                        for( var k=j + 1 ; k < l01 ; k=tab[k][12] ){
                            if(tab[k][2] === 'f'){
                                /* champ , formule */
                                /* console.log( tab[k][1] ); */
                                let le_champ_sortie={
                                    "type_d_element" : '' ,
                                     /* formule, champ */
                                    "Tn" : '' ,
                                    "nom_du_champ" : '' ,
                                     /* nom_du_champ , */
                                    "id_bdd" : 0 ,
                                     /* trouve.id_bdd */
                                    "nom_de_la_table" : '' ,
                                     /* nom_de_la_table , */
                                    "indice_table" : '' ,
                                     /* trouve.indice_table , */
                                    "alias_du_champ" : '' ,
                                     /* alias_du_champ, */
                                    "formule" : '' ,
                                     /* obj.__xva */
                                    };
                                if(tab[k][1] === 'champ'){
                                    if(tab[k][8] === 2){
                                        /*#
                                          valeurs(champ(`T0`,`chi_id_groupe`),champ(`T0`,`chp_nom_groupe`)),
                                          [
                                            {
                                              "type_d_element": "champ",
                                              "id_bdd": "1",
                                              "nom_de_la_table": "tbl_groupes",
                                              "nom_du_champ": "chi_id_groupe",
                                              "indice_table": 0,
                                              "alias_du_champ": ""
                                            },
                                            
                                            {
                                              "type_d_element": "champ",
                                              "id_bdd": "1",
                                              "nom_de_la_table": "tbl_groupes",
                                              "nom_du_champ": "chp_nom_groupe",
                                              "indice_table": 0,
                                              "alias_du_champ": ""
                                            }
                                          ]                                       
                                        */
                                        le_champ_sortie.type_d_element='champ';
                                        le_champ_sortie.Tn=tab[k + 1][1];
                                        le_champ_sortie.nom_du_champ=tab[k + 2][1];
                                        for(let tbl in this.#obj_webs['ordre_des_tables']){
                                            if(this.#obj_webs['ordre_des_tables'][tbl].alias_de_la_table === le_champ_sortie.Tn){
                                                le_champ_sortie.id_bdd=parseInt( this.#obj_webs['ordre_des_tables'][tbl].id_bdd );
                                                le_champ_sortie.nom_de_la_table=this.#obj_webs['ordre_des_tables'][tbl].nom_de_la_table;
                                                le_champ_sortie.indice_table=parseInt( tbl );
                                                this.#obj_webs['champs_sortie'].push( le_champ_sortie );
                                                break;
                                            }
                                        }
                                    }else{
                                        debugger;
                                    }
                                }else if(tab[k][1] === 'compter'){
                                }else if(tab[k][1] === 'affecte'){
                                }else if(tab[k][1] === '#'){
                                }else{
                                    debugger;
                                }
                            }
                        }
                    }
                }
            }
        }
        this.#obj_webs['conditions']=[];
        this.#obj_webs['complements']=[];
        /*
          
          this.#obj_webs['ordre_des_tables']=[];
          [
          {
          "id_bdd": "1",
          "nom_de_la_table": "tbl_groupes",
          "alias_de_la_table": "T0",
          "indice_table": 0,
          "jointure": "table_reference",
          "champs_jointure_gauche": {}
          }
          ]
        */
        /*#
          sélectionner(
             base_de_reference(1),
             valeurs( champ( `T0` , `chp_mot_de_passe_utilisateur` )),
             provenance(
                table_reference(
                   source( nom_de_la_table( tbl_utilisateurs , alias(T0) , base(b1) ))
                )
             ),
             conditions( egal( champ( `T0` , `chp_nom_de_connexion_utilisateur` ) , :T0_chp_nom_de_connexion_utilisateur )),
             complements( limité_à( quantité(1) , début(0) ))
          )
        */
        this.#obj_webs.ne_pas_tester_les_dependances_de_suppression=0;
        this.#obj_webs.ne_pas_traiter_la_maj_ts_modification=0;
        this.#obj_webs.sur_base_principale=0;
        this.#obj_webs.ne_pas_traiter_la_maj_ts_creation=0;
        this.#obj_webs.ne_pas_traiter_le_numero_de_revision=0;
        var i=0;
        for( var i=0 ; i < l01 ; i++ ){
            if(tab[i][3] === 0 && tab[i][1] === '#' && tab[i][2] === 'f' && tab[i][13].indexOf( 'meta(' ) >= 0){
                /* cette requête a un commentaire que contient un meta , on essaie de le convertir */
                var obj2=__gi1.__rev1.rev_tm( tab[i][13] );
                if(obj2.__xst !== __xsu){
                    continue;
                }
                for( let j=1 ; j < obj2.__xva.length ; j=obj2.__xva[j][12] ){
                    if(obj2.__xva[j][1] === 'meta' && obj2.__xva[j][2] === 'f'){
                        for( let k=j + 1 ; k < obj2.__xva.length ; k=obj2.__xva[k][12] ){
                            if(obj2.__xva[k][1] === 'ne_pas_tester_les_dependances_de_suppression'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_tester_les_dependances_de_suppression=1;
                                }
                            }else if(obj2.__xva[k][1] === 'sur_base_principale'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.sur_base_principale=1;
                                }
                            }else if(obj2.__xva[k][1] === 'ne_pas_traiter_la_maj_ts_modification'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_traiter_la_maj_ts_modification=1;
                                }
                            }else if(obj2.__xva[k][1] === 'ne_pas_traiter_la_maj_ts_creation'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_traiter_la_maj_ts_creation=1;
                                }
                            }else if(obj2.__xva[k][1] === 'ne_pas_traiter_le_numero_de_revision'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_traiter_le_numero_de_revision=1;
                                }
                            }
                        }
                    }
                }
            }
            nom_de_la_table='';
            var alias_de_la_table='';
            var indice_de_la_base='0';
            if(tab[i][2] === 'f'
                   && ('table_reference' === tab[i][1]
                       || 'jointure_croisée' === tab[i][1]
                       || 'jointure_gauche' === tab[i][1])
            ){
                jointure=tab[i][1];
                var j=i + 1;
                for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                    if(tab[j][2] === 'f' && "nom_de_la_table" === tab[j][1]){
                        if(tab[j + 1][2] === 'c'){
                            nom_de_la_table=tab[j + 1][1];
                            if('table_reference' === tab[i][1]){
                                this.#globale_chp_table_reference_requete=nom_de_la_table;
                            }
                        }
                        var k=j;
                        for( k=j ; k < l01 && tab[k][3] > tab[i + 1][3] ; k++ ){
                            if(tab[k][2] === 'f' && "alias" === tab[k][1]){
                                if(tab[k + 1][2] === 'c'){
                                    alias_de_la_table=tab[k + 1][1];
                                }
                            }
                        }
                    }
                }
            }
            if(nom_de_la_table !== '' && indice_de_la_base !== '0'){
                if(bases.hasOwnProperty( indice_de_la_base )){
                    /*
                      il faut chercher dans la matrice le 'créer_table[nom_de_la_table[' de la table
                    */
                    var trouve=false;
                    if(this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base]
                           && this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]
                    ){
                        trouve=true;
                    }
                    if(trouve === true){
                        /*
                          on peut remplir ordre_des_tables
                        */
                        var champs_jointure_gauche={};
                        if('jointure_gauche' === tab[i][1]){
                            var j=i + 1;
                            for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                                if(tab[j][1] === 'contrainte' && tab[j][2] === 'f'){
                                    var k=j + 1;
                                    for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                        if(tab[k][1] === 'egal' && tab[j][2] === 'f'){
                                            var l=k + 1;
                                            for( l=k + 1 ; l < l01 && tab[l][3] > tab[k][3] ; l++ ){
                                                if(tab[l][1] === 'champ' && tab[l][2] === 'f'){
                                                    var nom_du_champ='';
                                                    var alias_de_la_table_pour_le_champ='';
                                                    /*
                                                      champ(`T0` , `chi_id_test`)
                                                    */
                                                    if(tab[l][8] === 2){
                                                        var m=l + 1;
                                                        for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                                            if(tab[m][2] === 'c'){
                                                                if(alias_de_la_table_pour_le_champ === ''){
                                                                    alias_de_la_table_pour_le_champ=tab[m][1];
                                                                }else{
                                                                    nom_du_champ=tab[m][1];
                                                                }
                                                            }
                                                        }
                                                    }else if(tab[l][8] === 1){
                                                        var m=l + 1;
                                                        for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                                            if(tab[m][2] === 'c'){
                                                                nom_du_champ=tab[m][1];
                                                            }
                                                        }
                                                    }
                                                    tab_jointure_gauche.push( {"alias_de_la_table_pour_le_champ" : alias_de_la_table_pour_le_champ ,"nom_du_champ" : nom_du_champ} );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        this.#obj_webs['ordre_des_tables'].push( {
                                "id_bdd" : indice_de_la_base ,
                                "nom_de_la_table" : nom_de_la_table ,
                                "alias_de_la_table" : alias_de_la_table ,
                                "indice_table" : indice_table ,
                                "jointure" : jointure ,
                                "champs_jointure_gauche" : champs_jointure_gauche
                            } );
                        if(tab_jointure_gauche.length === 2){
                            var j=0;
                            for( j=0 ; j < tab_jointure_gauche.length ; j++ ){
                                var k=0;
                                for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                                    if(tab_jointure_gauche[j].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table
                                           && alias_de_la_table === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table
                                           && this.#obj_webs['ordre_des_tables'][k].jointure === 'jointure_gauche'
                                    ){
                                        champs_jointure_gauche['champ_table_mere']={
                                            "nom_du_champ" : tab_jointure_gauche[j].nom_du_champ ,
                                            "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                            "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                            "indice_table" : this.#obj_webs['ordre_des_tables'][k].indice_table
                                        };
                                    }else if(tab_jointure_gauche[j].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table){
                                        champs_jointure_gauche['champ_table_fille']={
                                            "nom_du_champ" : tab_jointure_gauche[j].nom_du_champ ,
                                            "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                            "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                            "indice_table" : this.#obj_webs['ordre_des_tables'][k].indice_table
                                        };
                                    }
                                }
                            }
                            this.#obj_webs['ordre_des_tables'][this.#obj_webs['ordre_des_tables'].length - 1].champs_jointure_gauche=champs_jointure_gauche;
                        }
                        tab_jointure_gauche=[];
                        indice_table++;
                    }
                }
            }
        }
        /*
          pour un update, insert,delete, il n'y a qu'une table
        */
        if(this.#obj_webs.type_de_requete === 'update'
               || this.#obj_webs.type_de_requete === 'insert'
               || this.#obj_webs.type_de_requete === 'delete'
        ){
            if(this.#obj_webs['ordre_des_tables'].length === 1){
                nom_de_la_table=this.#obj_webs['ordre_des_tables'][0].nom_de_la_table;
                id_bdd=this.#obj_webs['ordre_des_tables'][0].id_bdd;
            }
        }
        /*
          etape 2 références des champs pour champs_sortie chercher "valeurs"
        */

        var nom_du_champ='';
        var alias_du_champ='';
        var formule_update='';
        for( let i=1 ; i < l01 ; i++ ){
            if(tab[i][2] === 'f' && 'valeurs' === tab[i][1] && tab[i][3] === 1){
                for( let j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j=tab[j][12] ){
                    /*
                      dans les valeurs, il peut y avoir des
                      - champs,
                      - formules
                      -constantes
                    */
                    if(tab[j][2] === 'c'){
                        this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'constante' ,"constante" : tab[j]} );
                    }else if(tab[j][2] === 'f' && "#" === tab[j][1]){
                    }else if(tab[j][2] === 'f' && "champ" === tab[j][1]){
                        nom_du_champ='';
                        var alias_de_la_table_pour_le_champ='';
                        /*
                          champ(`T0` , `chi_id_test`)
                        */
                        if(tab[j][8] === 2){
                            var k=j + 1;
                            for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                if(tab[k][2] === 'c'){
                                    if(alias_de_la_table_pour_le_champ === ''){
                                        alias_de_la_table_pour_le_champ=tab[k][1];
                                    }else{
                                        nom_du_champ=tab[k][1];
                                    }
                                }
                            }
                        }else if(tab[j][8] === 1){
                            var k=j + 1;
                            for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                if(tab[k][2] === 'c'){
                                    nom_du_champ=tab[k][1];
                                }
                            }
                        }else if(tab[j][8] === 3){
                            var k=j + 1;
                            for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                if(tab[k][2] === 'c'){
                                    if(alias_de_la_table_pour_le_champ === ''){
                                        alias_de_la_table_pour_le_champ=tab[k][1];
                                    }else{
                                        nom_du_champ=tab[k][1];
                                    }
                                }else if(tab[k][2] === 'f' && tab[k][1] === 'alias_champ'){
                                    alias_du_champ=tab[k + 1][1];
                                    break;
                                }
                            }
                        }
                        if(nom_du_champ !== ''){
                            /*
                              il faut vérifier que ce champ appartient bien à une table référencée
                              à la fois dans la base et dans la requête
                            */
                            var dans_requete_et_base=false;
                            var nom_des_table_pouvant_contenir_le_champ=[];
                            if(alias_de_la_table_pour_le_champ !== ''){
                                var k=0;
                                for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                                    if(alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table){
                                        nom_des_table_pouvant_contenir_le_champ.push( {
                                                "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                                "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                                "indice_table" : k
                                            } );
                                    }
                                }
                            }
                            if(nom_des_table_pouvant_contenir_le_champ.length === 0){
                                /*
                                  si on a pas trouvé on var chercher le champ dans toutes les tables référencées plus haut
                                */
                                var k=0;
                                for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                                    nom_des_table_pouvant_contenir_le_champ.push( {
                                            "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                            "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                            "indice_table" : k
                                        } );
                                }
                            }
                            var trouve=false;
                            for( let k=0 ; k < nom_des_table_pouvant_contenir_le_champ.length && trouve === false ; k++ ){
                                /* var tab2=bases[nom_des_table_pouvant_contenir_le_champ[k].id_bdd].matrice; */
                                var tab2=this.#obj_webs.bases[nom_des_table_pouvant_contenir_le_champ[k].id_bdd].matrice;
                                var l02=tab2.length;
                                var l=0;
                                for( l=0 ; l < l02 && trouve === false ; l++ ){
                                    if(tab2[l][1] === 'créer_table' && tab2[l][2] === 'f' && tab2[l][3] === 0){
                                        var m=l + 1;
                                        for( m=l + 1 ; m < l02 && trouve === false ; m=tab2[m][12] ){
                                            if(tab2[m][1] === 'nom_de_la_table'
                                                   && tab2[m + 1][2] === 'c'
                                                   && tab2[m + 1][1] === nom_des_table_pouvant_contenir_le_champ[k].nom_de_la_table
                                            ){
                                                trouve=nom_des_table_pouvant_contenir_le_champ[k];
                                                nom_de_la_table=tab2[m + 1][1];
                                            }
                                        }
                                    }
                                }
                            }
                            if(trouve !== false && tab[j][7] === i){
                                /*
                                  si c'est une référence de champ directe sous le 'valeurs'
                                  alors c'est un champ en sortie,
                                  sinon il est dans une formule
                                */
                                let déjà_pris_en_compte=false;
                                for(let i in this.#obj_webs['champs_sortie']){
                                    if(this.#obj_webs['champs_sortie'][i].nom_du_champ === nom_du_champ
                                           && this.#obj_webs['champs_sortie'][i].Tn === alias_de_la_table_pour_le_champ
                                    ){
                                        déjà_pris_en_compte=true;
                                        break;
                                    }
                                }
                                if(déjà_pris_en_compte === false){
                                    console.log( '%c ====================A ETUDIER ========================' , 'background:yellow;color:red;' );
                                    this.#obj_webs['champs_sortie'].push( {
                                            "type_d_element" : 'champ' ,
                                            "id_bdd" : trouve.id_bdd ,
                                            "nom_de_la_table" : nom_de_la_table ,
                                            "nom_du_champ" : nom_du_champ ,
                                            "indice_table" : trouve.indice_table ,
                                            "alias_du_champ" : alias_du_champ ,
                                            "Tn" : alias_de_la_table_pour_le_champ ,
                                            "formule" : ''
                                        } );
                                }else{
                                    /* console.log( '%c BIEEEENNNN ' , 'background:yellow;color:red;' ); */
                                }
                            }
                        }
                    }else if(tab[j][2] === 'f' && "champ" !== tab[j][1]){
                        /*
                          c'est probablement une formule
                        */
                        if(this.#obj_webs.type_de_requete === 'update' || this.#obj_webs.type_de_requete === 'insert'){
                            /* si on a un update, et un affecte */
                            if(tab[j][1] === 'affecte' && tab[j][2] === 'f'){
                                /*
                                  si le premier paramètre de affecte est un champ et le deuxième est une variable,
                                  alors c'est un champ en sortie
                                */
                                var indice_du_champ=-1;
                                var indice_de_la_variable=-1;
                                var k=j + 1;
                                for( k=j + 1 ; k < l01 ; k=tab[k][12] ){
                                    if(tab[k][1] === 'champ' && tab[k][2] === 'f'){
                                        indice_du_champ=k;
                                        nom_du_champ=tab[k + 1][1];
                                    }else if(tab[k][1].substr( 0 , 1 ) === ':' && tab[k][2] === 'c'){
                                        indice_de_la_variable=k;
                                    }
                                }
                                if(indice_de_la_variable > 0 && indice_du_champ > 0){
                                    /*
                                      c'est un champ
                                    */
                                    if(this.#obj_webs.type_de_requete === 'update'){
                                        if(tab[j][1] === 'affecte' && tab[j][2] === 'f'){
                                            var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , j , false , j + 1 );
                                            if(obj.__xst === __xsu){
                                                if(formule_update !== ''){
                                                    formule_update+=',';
                                                }
                                                formule_update+='affecte(' + obj.__xva + ')';
                                            }else{
                                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' il faut un affecte pour une requete update '} );
                                            }
                                        }else{
                                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' il faut un affecte pour une requete update '} );
                                        }
                                    }else{
                                        this.#obj_webs['champs_sortie'].push( {
                                                "type_d_element" : 'champ' ,
                                                "id_bdd" : id_bdd ,
                                                "nom_de_la_table" : nom_de_la_table ,
                                                "nom_du_champ" : nom_du_champ ,
                                                "indice_table" : 0 ,
                                                "alias_du_champ" : alias_du_champ
                                            } );
                                    }
                                }else{
                                    /*
                                      c'est une formule
                                    */
                                    if(tab[j][1]==='affecte'){
                                        var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , j , true , j+1 );
                                        if(obj.__xst === __xsu){
                                            this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : 'affecte('+obj.__xva+')'} );
                                        }
                                    }else{
                                        var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[j][7] , true , j );
                                        if(obj.__xst === __xsu){
                                            this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                                        }
                                    }
                                }
                            }else{
                                /*
                                  c'est une formule
                                */
                                var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[j][7] , true , j );
                                if(obj.__xst === __xsu){
                                    this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                                }
                            }
                        }else{
                            if(tab[j][1] === 'alias_champ'){
                            }else{
                                var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , j , true , j + 1 );
                                if(obj.__xst === __xsu){
                                    this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : tab[j][1] + '(' + obj.__xva + ')'} );
                                }
                            }
                        }
                    }else{
                        debugger;
                    }
                }
            }else if(tab[i][2] === 'f' && 'conditions' === tab[i][1]){
                if(tab[i][8] > 0){
                    var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[i + 1][7] , true , i + 1 );
                    if(obj.__xst === __xsu){
                        this.#obj_webs['conditions'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                    }
                }
            }else if(tab[i][2] === 'f' && 'complements' === tab[i][1]){
                if(tab[i][8] > 0){
                    var obj=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[i + 1][7] , true , i + 1 );
                    if(obj.__xst === __xsu){
                        this.#obj_webs['complements'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                    }
                }
            }
        }
        if(this.#obj_webs.type_de_requete === 'update'){
            if(this.#obj_webs['champs_sortie'].length === 0 && formule_update !== ''){
                /* debugger */
                this.#obj_webs['champs_sortie']=[{"type_d_element" : 'formule' ,"formule" : formule_update}];
            }
        }
    }
    /*
      =============================================================================================================
    */
    traiter_donnees_bases_rev( bases ){
        /*
          this.#obj_init['chi_id_requete_initiale']=par['chi_id_requete_initiale'];
          this.#obj_init['cht_rev_requete_initiale']=par['cht_rev_requete_initiale'];
          this.#obj_init['chp_type_requete_initiale']=par['chp_type_requete_initiale'];
          this.#obj_init['cht_commentaire_requete_initiale']=par['cht_commentaire_requete_initiale'];
          this.#obj_init['che_est_souche_requete']=par['che_est_souche_requete'];
        */
        this.#obj_webs['bases']={};
        for(let i in bases){
            /* donnees.__xva]{ */
            if(bases[i]['T0.chp_rev_travail_basedd'] === null){
                this.#obj_webs['bases'][bases[i]['T0.chi_id_basedd']]={"chi_id_basedd" : bases[i]['T0.chi_id_basedd'] ,"chp_rev_travail_basedd" : '' ,"matrice" : [] ,"tables" : {} ,"selectionne" : false};
            }else{
                this.#obj_webs['bases'][bases[i]['T0.chi_id_basedd']]={
                    "chi_id_basedd" : bases[i]['T0.chi_id_basedd'] ,
                    "chp_rev_travail_basedd" : bases[i]['T0.chp_rev_travail_basedd'] ,
                    "matrice" : bases[i].matrice ,
                    "tables" : {} ,
                    "selectionne" : false
                };
            }
        }
        for(let ind in this.#obj_webs['bases']){
            this.#obj_webs.tableau_des_bases_tables_champs[ind]={};
            var tab=this.#obj_webs['bases'][ind]['matrice'];
            var l01=tab.length;
            for( let i=1 ; i < l01 ; i=tab[i][12] ){
                if(tab[i][1] === 'créer_table' && tab[i][2] === 'f'){
                    var nom_de_la_table='';
                    var la_classe_de_la_table='';
                    for( let j=i + 1 ; j < l01 ; j=tab[j][12] ){
                        if("nom_de_la_table" === tab[j][1] && tab[j][2] === 'f'){
                            nom_de_la_table=tab[j + 1][1];
                            this.#obj_webs['bases'][ind]['tables'][nom_de_la_table]={"active" : false ,"champs" : []};
                            break;
                        }
                    }
                    if(nom_de_la_table !== ''){
                        /* this.#obj_webs['bases'][indice_de_la_base]['tables'][nom_de_la_table]={champs:[]} */
                        /* debugger */
                        this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]={"champs" : {}};
                        this.#obj_webs['bases'][ind]['tables'][nom_de_la_table].champs=[];
                        for( let l=i + 1 ; l < l01 ; l=tab[l][12] ){
                            if(tab[l][1] === 'fields' || tab[l][1] === 'champs'){
                                for( let m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                    if(tab[m][1] === 'field' || tab[m][1] === 'champ'){
                                        var nom_du_champ='';
                                        for( let n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                            if(tab[n][1] === 'nom_du_champ'){
                                                nom_du_champ=tab[n + 1][1];
                                                this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]={"nom_du_champ" : nom_du_champ};
                                            }
                                        }
                                        if(nom_du_champ !== ''){
                                            for( let n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                                if(tab[n][1] === 'type'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['type_du_champ']=tab[n + 1][1];
                                                }else if(tab[n][1] === 'primary_key'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['primary_key']=true;
                                                }else if(tab[n][1] === 'non_nulle'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['non_nulle']=true;
                                                }else if(tab[n][1] === 'espece_du_champ'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['espece_du_champ']=tab[n + 1][1];
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['type_du_champ']=tab[n + 1][1];
                                                }else if(tab[n][1] === 'meta' && tab[n][2] === 'f'){
                                                    for( let o=n + 1 ; o < l01 ; o=tab[o][12] ){
                                                        if(tab[o][1] === 'genre' && tab[o][2] === 'f' && tab[o][8] === 1 && tab[o + 1][2] === 'c'){
                                                            this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['genre_numerique_du_champ']=tab[o + 1][1];
                                                            this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['genre_objet_du_champ']=__gi1.__liste_des_genres[tab[o + 1][1]];
                                                            /*
                                                              debugger
                                                              __gi1.__liste_des_genres
                                                            */
                                                            /* console.log('tab[o][1]='+nom_du_champ+ ' : ' +tab[o+1][1]); */
                                                        }
                                                    }
                                                }else{
                                                    /* console.log('tab[n][1]='+tab[n][1]); */
                                                }
                                            }
                                        }
                                        if(nom_du_champ !== ''){
                                            /* debugger */
                                            this.#obj_webs['bases'][ind]['tables'][nom_de_la_table]['champs'].push( this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ] );
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        debugger;
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur=null ){
        this.#obj_webs=this.#obj_webs_init;
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] );
            }
        }
        this.#div_de_travail=document.getElementById( 'div_de_travail' );
        this.#globale_id_requete=chi_id_requete;
        let bases=le_message_du_serveur.__xva.les_bases_du_projet;
        for(let indice_de_la_base in bases){
            var obj1=__gi1.__rev1.rev_tm( bases[indice_de_la_base]['T0.chp_rev_travail_basedd'] );
            if(obj1.__xst !== __xsu){
                return;
            }
            bases[indice_de_la_base]['matrice']=obj1.__xva;
            bases[indice_de_la_base]['selectionne']=false;
        }
        this.traiter_donnees_bases_rev( bases );
        /* this.#enrichir_tableau_des_bases_tables_champs( bases ); */
        if(chi_id_requete > 0){
            this.#globale_id_requete=le_message_du_serveur.__xva.requete['T0.chi_id_requete'];
            this.#globale_rev_requete=le_message_du_serveur.__xva.requete['T0.cht_rev_requete'];
            this.#globale_type_requete=le_message_du_serveur.__xva.requete['T0.chp_type_requete'];
            this.#globale_commentaire_requete=le_message_du_serveur.__xva.requete['T0.cht_commentaire_requete']??'';
            this.#globale_chp_table_reference_requete=le_message_du_serveur.__xva.requete['T0.chp_table_reference_requete']??'';
            this.#che_est_souche_requete=le_message_du_serveur.__xva.requete['T0.che_est_souche_requete'];
            this.convertir_rev_pour_construction( bases );
        }
    }
    /*
      =============================================================================================================
    */
    compiler_en_ligne( mat , d , le_message_du_serveur=null ){
        this.traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur );
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] );
            }
        }
        let obj1=this.transform_source_rev_vers_sql( le_message_du_serveur.__xva.requete['T0.cht_rev_requete'] , chi_id_requete );
        return obj1;
    }
    /*
      =============================================================================================================
    */
    charger_la_requete( mat , d , le_message_du_serveur=null ){
        this.traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur );
        this.afficher_les_donnees();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_requete1( mat , d , le_message_du_serveur=null ){
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] );
            }
        }
        let $o1='';
        $o1+='<h1>concevoir une requete';
        $o1+=' <div class="rev_bouton" style="font-weight:normal;" data-rev_click="m1(n1(c_requetes1),f1(liste_du_menu0()))" title="revenir à la liste" >⬱</div>';
        $o1+='</h1>';
        $o1+='<div id="vv_requetes_creer1"></div>';
        $o1+='<div id="div_de_travail" style="max-width:100%;">Veuillez patienter</div>';
        /*  */
        $o1+='<div>';
        $o1+='    <b>rev initial</b>';
        $o1+='</div>';
        $o1+='<div class="yy_conteneur_txtara">';
        $o1+='    <textarea class="txtar1" id="init" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        $o1+='</div>';
        $o1+='';
        __gi1.maj_contenu_principal( $o1 );
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'concevoir un sql' );
        let obj={"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(charger_la_requete(chi_id_requete(' + chi_id_requete + ')))))'};
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , __xva , e1=null ){
        switch (mat[d][1]){
            case 'xxxxx' : break;
            default:
                if(e1 && e1.hasOwnProperty( 'stack' )){
                    __gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : e1.stack} );
                }
                __gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'la fonction "' + mat[d][1] + '" n\'est pas traitée ou contient une erreur'} );
                __gi1.affiche_les_messages();
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d ){
        this.__m_rev_vers_sql1=new z_rev_vers_sql1( '__m_rev_vers_sql1' , __gi1.__rev1 );
        /*
          let l01=mat.length;
          for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
          if(mat[i][1] === 'fonctions' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
          // fonction=mat[i+1][1] 
          }
          }
        */
    }
}
export{c_concevoir_une_requete1 as c_concevoir_une_requete1};