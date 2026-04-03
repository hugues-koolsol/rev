const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*
  transformer_requete_en_fonction_js1
  transform_source_rev_vers_sql
  traiter_donnees_bases_rev
  convertir_rev_pour_construction
  x_ecran_concevoir_une_requete1_c
  compiler_en_ligne
*/
import {w_rev_vers_sql1} from '/f0?n0=w_rev_vers_sql1_.js';
import {_rev_de_sql_vers_js1} from '/f0?n0=_rev_de_sql_vers_js1_.js';
const CRLF='\r\n';
class x_ecran_concevoir_une_requete1{
    moi='x_ecran_concevoir_une_requete1';
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
        "ne_pas_traiter_la_maj_ts_modification" : 0 ,
        "ne_pas_traiter_la_maj_ts_creation" : 0 ,
        "ne_pas_traiter_le_numero_de_revision" : 0 ,
        "inclure_le_prefixe_de_la_base_devant_la_table" : 0 ,
        "insert_brut" : 0
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
    __m_rev_vers_sql1=null;
    __gi1=null;
    /*
      =============================================================================================================
    */
    enregistrer_la_requete_en_base( mat , d ){
        this.__gi1.redirection1( 'm1(n1(requetes1),f1(entree_module()))' , null );
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
        this.__gi1.supprimer_les_messages();
        var obj1=this.__gi1.__rev1.rev_tm( document.getElementById( 'vv_zone_rev_01' ).value );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let obj={
                    "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(enregistrer_la_requete_en_base())))' ,
                    "__xva" : {
                        "rev" : document.getElementById( 'vv_zone_rev_01' ).value ,
                        "sql" : document.getElementById( 'txtar2' ).value ,
                        "js" : document.getElementById( 'js1_de_la_requete' ).value ,
                        "type" : this.#obj_webs.type_de_requete ,
                        "cht_matrice_requete" : obj1.__xva ,
                        "cht_commentaire_requete" : document.getElementById( 'cht_commentaire_requete' ).value ,
                        "chi_id_requete" : chi_id_requete ,
                        "che_est_souche_requete" : document.getElementById( 'che_est_souche_requete' ).value ,
                        "chp_table_reference_requete" : document.getElementById( 'chp_table_reference_requete' ).value
                    }
                };
                this.__gi1.envoyer_un_message_au_worker( obj );
            }else{
                debugger;
                return({"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()});
            }
        }else{
            debugger;
            return({"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()});
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
    maj_inclure_le_prefixe_de_la_base_devant_la_table( mat , d ){
        this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table=document.getElementById( 'vv_inclure_le_prefixe_de_la_base_devant_la_table' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_insert_brut( mat , d ){
        this.#obj_webs.insert_brut=document.getElementById( 'vv_insert_brut' ).checked ? ( 1 ) : ( 0 );
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
        this._rev_de_sql_vers_js1.changer_la_jointure( ind , document.getElementById( nom_zone ).value );
        this.#mettre_en_stokage_local_et_afficher( 'changer_la_jointure(' + nom_zone + ')' );
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
                    let action_rev=null;
                    if(this.#obj_webs.gauche_0_droite_1 === 0){
                        this.#obj_webs.ordre_des_tables[this.#obj_webs.indice_table_pour_jointure_gauche].champs_jointure_gauche.champ_table_mere={"nom_du_champ" : nom_du_champ ,"nom_de_la_table" : nom_de_la_table ,"id_bdd" : id_bdd ,"indice_table" : indice_table};
                        this.#obj_webs.gauche_0_droite_1=1;
                        this._rev_de_sql_vers_js1.changer_gauche_0_droite_1( 1 );
                    }else{
                        this.#obj_webs.ordre_des_tables[this.#obj_webs.indice_table_pour_jointure_gauche].champs_jointure_gauche.champ_table_fille={"nom_du_champ" : nom_du_champ ,"nom_de_la_table" : nom_de_la_table ,"id_bdd" : id_bdd ,"indice_table" : indice_table};
                        action_rev='selectionner_champ_pere()';
                        this.#obj_webs.nom_zone_cible="champs_sortie";
                        this._rev_de_sql_vers_js1.changer_nom_zone_cible( 'champs_sortie' );
                    }
                    this.#mettre_en_stokage_local_et_afficher( action_rev );
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
                    var matriceFonction=this.__gi1.__rev1.rev_tm( formule );
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
                            this.__gi1.__rev1.supprimer_un_element_de_la_matrice( mat , liste_indice_formule[j] , 0 );
                        }
                        if(mat.length === 2){
                            this.#obj_webs['complements']=[];
                        }else{
                            let text_rev='';
                            let obj1=this.__gi1.__rev1.matrice_vers_source_rev1( mat , 0 , true , 1 );
                            if(obj1.__xst === __xsu){
                                this.#obj_webs['complements'][k].formule=obj1.__xva;
                            }else{
                                return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                            }
                        }
                    }else{
                        /* debugger; */
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
                    var matriceFonction=this.__gi1.__rev1.rev_tm( formule );
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
                            this.__gi1.__rev1.supprimer_un_element_de_la_matrice( mat , liste_indice_formule[j] , 0 );
                        }
                        if(mat.length === 2){
                            this.#obj_webs['conditions']=[];
                        }else{
                            let text_rev='';
                            let obj1=this.__gi1.__rev1.matrice_vers_source_rev1( mat , 0 , true , 1 );
                            if(obj1.__xst === __xsu){
                                this.#obj_webs['conditions'][k].formule=obj1.__xva;
                            }else{
                                return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                            }
                        }
                    }else{
                        /* debugger; */
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
                /* debugger; */
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
        var obj=this.__gi1.__rev1.rev_tcm( rev_de_la_formule );
        if(obj.__xst === __xsu){
            if(!this.#obj_webs[destination]){
                this.#obj_webs[destination]=[];
            }
            this.#obj_webs[destination].push( {"type_d_element" : 'formule' ,"formule" : rev_de_la_formule} );
            this.__gi1.fermer_la_sous_fenetre();
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
        t+='<textarea data-editeur1="rev" id="zone_formule" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false">' + this.__gi1.fi2( contenu ) + '</textarea>';
        t+='</div>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(ajouter_la_formule(';
        cmd+='  destination(' + destination + '),';
        cmd+=')))';
        t+='<div class="rev_bouton" data-rev_click="' + cmd + '">ajouter la formule</div>';
        this.__gi1.affiche_sous_fenetre1( t );
        return({"__xst" : __xsu});
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
        this.__gi1.fermer_la_sous_fenetre();
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
        this.__gi1.fermer_la_sous_fenetre();
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    #mettre_en_stokage_local_et_afficher( action_rev=null ){
        this.afficher_les_donnees( action_rev );
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
        var obj=this.__gi1.__rev1.rev_tcm( rev_de_la_formule );
        if(obj.__xst === __xsu){
            if((this.#obj_webs.type_de_requete === 'select'
                       || this.#obj_webs.type_de_requete === 'liste_ecran')
                   && destination === 'champs_sortie'
            ){
                this.#obj_webs.champs_sortie=[{"type_d_element" : 'formule' ,"formule" : rev_de_la_formule}];
            }else if(this.#obj_webs.type_de_requete === 'update' && destination === 'champs_visualisation'){
                this.#obj_webs.champs_visualisation=[];
                let l01=obj.__xva.length;
                for( let i=1 ; i < l01 ; i=obj.__xva[i][12] ){
                    if(obj.__xva[i][1] === 'champ' && obj.__xva[i][2] === 'f' && obj.__xva[i][8] === 2 && obj.__xva[i + 1][2] === 'c'){
                        this.#obj_webs.champs_visualisation.push( [obj.__xva[i + 1][1],obj.__xva[i + 2][1]] );
                    }
                }
            }else{
                if(!this.#obj_webs[destination]){
                    this.#obj_webs[destination]=[];
                }
                this.#obj_webs[destination]=[{"type_d_element" : 'formule' ,"formule" : rev_de_la_formule}];
            }
            this.__gi1.fermer_la_sous_fenetre();
            this.#mettre_en_stokage_local_et_afficher();
        }
        return({"__xst" : __xsu});
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
        return({"__xst" : __xsu});
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
                    if(this.__gi1.derniere_zone_editee && this.__gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , this.__gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( this.__gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`' + nom_du_champ + '`) , :' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`' + nom_du_champ + '`) , :' + nom_du_champ + '))';
                    }
                }
            }else if(this.#obj_webs.type_de_requete === 'update'){
                if(destination === 'conditions'){
                    if(this.__gi1.derniere_zone_editee && this.__gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , this.__gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( this.__gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`' + nom_du_champ + '`) , :c_' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`' + nom_du_champ + '`) , :c_' + nom_du_champ + ')';
                    }
                }else if(destination === 'champs_visualisation'){
                    zone_formule.value=zone_formule.value + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`)';
                }else{
                    zone_formule.value=zone_formule.value + 'affecte(champ(`' + nom_du_champ + '`) , :n_' + nom_du_champ + ')';
                }
            }else if(this.#obj_webs.type_de_requete === 'insert'){
                zone_formule.value=zone_formule.value + 'affecte(champ(`' + nom_du_champ + '`) , :' + nom_du_champ + '),';
            }else if(this.#obj_webs.type_de_requete === 'liste_ecran'){
                if(destination === 'conditions'){
                    if(this.__gi1.derniere_zone_editee && this.__gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , this.__gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( this.__gi1.position_dans_la_derniere_zone_editee );
                        zone_formule.value=avant + 'egal(champ(`T' + indice_table + '` , `' + nom_du_champ + '`) , :T' + indice_table + '_' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`T' + indice_table + '` , `' + nom_du_champ + '`) , :T' + indice_table + '_' + nom_du_champ + ')';
                    }
                }else{
                    zone_formule.value=zone_formule.value + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),';
                }
            }else if(this.#obj_webs.type_de_requete === 'select'){
                if(destination === 'conditions'){
                    if(this.__gi1.derniere_zone_editee && this.__gi1.derniere_zone_editee.id === 'zone_formule'){
                        let avant=zone_formule.value.substr( 0 , this.__gi1.position_dans_la_derniere_zone_editee );
                        let apres=zone_formule.value.substr( this.__gi1.position_dans_la_derniere_zone_editee );
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
        return({"__xst" : __xsu});
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
                    t+=' data-rev_click="' + cmd + '">+T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>\n';
                }
            }
        }
        var tab_ex=['tous_les_champs()','plus(champ(xxx) , 2)','concat(\'=>\',champ(xxx),\'<=\')','compter(tous_les_champs())','xxx'];
        if(destination === 'complements'){
            tab_ex.push( 'trier_par((champ(xxx),décroissant()),(champ(xxx),croissant()))' );
            tab_ex.push( ',limité_à(quantité(:quantitee),début(:debut))' );
        }
        if(destination === 'champs_visualisation'){
            tab_ex=[];
        }
        for( let i=0 ; i < tab_ex.length ; i++ ){
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
        if(destination === 'champs_visualisation'){
            contenu=document.getElementById( 'vv_les_champs_condition' ).innerHTML;
            t+=contenu.replace( /</g , '&lt' ).replace( />/g , '&gt' );
        }else if((this.#obj_webs.type_de_requete === 'select'
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
                    contenu+=this.__gi1.__rev1.ma_constante( this.#obj_webs.champs_sortie[i].constante );
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    contenu+=this.#obj_webs.champs_sortie[i].formule;
                }
            }
            contenu=contenu.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
            var matriceFonction=this.__gi1.__rev1.rev_tm( contenu );
            if(matriceFonction.__xst === __xsu){
                let obj1=this.__gi1.__rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
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
                var matriceFonction=this.__gi1.__rev1.rev_tm( contenu );
                if(matriceFonction.__xst === __xsu){
                    let obj1=this.__gi1.__rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
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
        this.__gi1.affiche_sous_fenetre1( t );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #transformer_requete_en_fonction_js2( type_de_requete , obj3 , id_requete_en_base , matrice_requete ){
        /* rien ici */
    }
    /*
      =============================================================================================================
    */
    aller_a_generer_le_programme1( mat , d ){
        let nom_de_la_table=document.getElementById( 'chp_table_reference_requete' ).value;
        let chi_id_basedd=0;
        for(let i in this.#obj_webs['bases']){
            if(this.#obj_webs['bases'][i].selectionne === true){
                chi_id_basedd=i;
                break;
            }
        }
        if(nom_de_la_table !== '' && chi_id_basedd > 0){
            let tm1='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '),nom_de_la_table(\'' + nom_de_la_table + '\'))))';
            let omat1=this.__gi1.__rev1.rev_tm( tm1 );
            this.__gi1.__xac( omat1.__xva , 0 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    transform_source_rev_vers_sql( source_rev , id_requete ){
        /*
          var tableau1=this.__gi1.__rev1.txt_en_tableau(source_rev);
          var obj1=functionToArray2(tableau1.__xva,false,true,'');
        */
        var obj1=this.__gi1.__rev1.rev_tm( source_rev );
        if(obj1.__xst !== __xsu){
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ''} ));
        }
        let matrice_requete=obj1.__xva;
        var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
        if(obj2.__xst !== __xsu){
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'conversion en sql '} ));
        }
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
        var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {
             /*  */
            "au_format_programme" : true ,
            "inclure_le_prefixe_de_la_base_devant_la_table" : this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table
        } );
        if(obj3.__xst !== __xsu){
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"message" : this.__gi1.__rev1.nl2() + 'conversion en sql '} ));
        }
        for( let i=0 ; i < obj3.tableau_des_tables_utilisees.length ; i++ ){
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
        let obj5=this._rev_de_sql_vers_js1.transformer_requete_en_fonction_js1( this.#obj_webs.type_de_requete , obj3 , id_requete , obj1.__xva );
        if(obj5.__xst === __xsu){
            return({
                    "__xst" : __xsu ,
                    "source_sql" : obj2.__xva ,
                    "source_js" : obj5.__xva ,
                    "matrice_requete" : matrice_requete ,
                    "chp_table_reference_requete" : obj5.chp_table_reference_requete ,
                    "table_reference" : obj5.table_reference ,
                    "base_reference" : obj5.base_reference
                });
        }else{
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"__xme" : this.__gi1.__rev1.nl2() + 'conversion en js '} ));
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
            this.__gi1.supprimer_les_messages();
        }
        this.__gi1.masquer_la_zone_message( '' );
        var obj1=this.transform_source_rev_vers_sql( document.getElementById( txtarea_source ).value , id_requete );
        if(obj1.__xst === __xsu){
            document.getElementById( txtarea_dest ).value=obj1.source_sql;
            document.getElementById( 'js1_de_la_requete' ).value=obj1.source_js;
            if(document.getElementById( 'chp_table_reference_requete' ).value === ''){
                document.getElementById( 'chp_table_reference_requete' ).value=obj1.table_reference;
            }
        }else{
            if(obj1.hasOwnProperty( 'source_sql' )){
                document.getElementById( txtarea_dest ).value=obj1.source_sql;
            }
            this.__gi1.affiche_les_messages();
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    afficher_les_donnees( action_rev=null ){
        try{
            this.#div_de_travail=document.getElementById( 'div_de_travail' );
        }catch(e){
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
            t+=' ne_pas_tester_les_dependances_de_suppression : ';
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
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(maj_insert_brut(';
            cmd+=' nom_zone(vv_insert_brut),';
            cmd+=')))';
            t+=' insert_brut';
            t+='<input  id="vv_insert_brut" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.insert_brut === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        }else{
            t+='<input style="display:none;" id="vv_ne_pas_traiter_la_maj_ts_creation" type="checkbox" checked="false" />';
            t+='<input style="display:none;" id="vv_insert_brut" type="checkbox" checked="false" />';
        }
        if(this.#obj_webs.type_de_requete === 'insert'
               || this.#obj_webs.type_de_requete === 'select'
               || this.#obj_webs.type_de_requete === 'liste_ecran'
        ){
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(maj_inclure_le_prefixe_de_la_base_devant_la_table(';
            cmd+=' nom_zone(vv_inclure_le_prefixe_de_la_base_devant_la_table),';
            cmd+=')))';
            t+=' inclure_le_prefixe_de_la_base_devant_la_table';
            t+='<input  id="vv_inclure_le_prefixe_de_la_base_devant_la_table" type="checkbox" data-rev_click="' + cmd + '" ' + (this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        }else{
            t+='<input style="display:none;" id="vv_inclure_le_prefixe_de_la_base_devant_la_table" type="checkbox" checked="false" />';
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
        let jointure_gauche_selectionnee=false;
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
                    cmd+='m1(n1(' + this.moi + '),f1(changer_la_jointure(ind(' + i + '),nom_zone(type_de_jointure_' + i + '))))';
                    t+='<select id="type_de_jointure_' + i + '" data-rev_change="' + cmd + '" >';
                    t+='<option ' + (this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_croisée' ? ( ' selected="true" ' ) : ( '' )) + ' value="jointure_croisée" >jointure croisée</option>';
                    t+='<option ';
                    if(this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_gauche'){
                        jointure_gauche_selectionnee=true;
                        t+=' selected="true" ';
                    }
                    t+=' value="jointure_gauche"  >jointure gauche</option>';
                    t+='</select>';
                    if(action_rev !== null){
                        if(action_rev.indexOf( 'changer_la_jointure(type_de_jointure_' + i + ')' ) >= 0){
                            if(this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_gauche'){
                                setTimeout( ( par ) => {
                                        /* radio */
                                        document.getElementById( 'champs_selectionnes_0_' + par.num + '' ).click();} , 100 , {"num" : i} );
                            }
                        }
                    }
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
                           && action_rev !== 'init()'
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
        /* debugger // selectionner_champ_pere action_rev */
        if(this.#obj_webs.type_de_requete === 'insert' || action_rev && action_rev.indexOf( 'selectionner_champ_pere()' ) >= 0){
            chacked=' checked="true" ';
        }
        if(this.#obj_webs.nom_zone_cible === 'champs_sortie'){
            chacked=' checked="true" ';
        }
        /* champs_selectionnes , indice_table , gauche_0_droite_1 */
        var cmd='';
        cmd+='m1(n1(' + this.moi + ')f1(selectionner_champs_destination2(champs_selectionnes(champs_sortie))))';
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
            t+='<div class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + this.__gi1.les_svg.editer + '</div>';
        }
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(champs_sortie))))';
        t+='<div class="rev_b_svg yy__0" data-rev_click="' + cmd + '">' + this.__gi1.les_svg.poubelle + '</div>';
        t+='</div>';
        /*
          *
        */
        t+='<div id="champs_en_sortie"  style="max-width:90%;overflow-inline:auto;">';
        var contenu='';
        for( let i=0 ; i < this.#obj_webs.champs_sortie.length ; i++ ){
            t+="\r\n" + '<div class="rev_bouton" style="max-width:100%;text-align:left;" ';
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
                    libelle=this.__gi1.__rev1.ma_constante( this.#obj_webs.champs_sortie[i].constante );
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
            t+='</div>' + "\r\n";
        }
        t+='</div>';
        t+='champs visualisation ( UPDATE )';
        t+='<div class="rev_b_svg yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(champs_visualisation))))">' + this.__gi1.les_svg.poubelle + '</div>';
        if(this.#obj_webs.type_de_requete === 'update'){
            if(this.#obj_webs.champs_visualisation){
                let tt='';
                for( let i=0 ; i < this.#obj_webs.champs_visualisation.length ; i++ ){
                    tt+='champ(`' + this.#obj_webs.champs_visualisation[i][0] + '` , `' + this.#obj_webs.champs_visualisation[i][1] + '`)';
                }
                if(tt === ''){
                    t+='<div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(ajouter_une_formule(destination(champs_visualisation))))">+f()</div>';
                }else{
                    var cmd='m1(n1(' + this.moi + '),f1(modifier_la_formule_de_destination(destination(champs_visualisation))))';
                    t+='<div  class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + this.__gi1.les_svg.editer + '</div>';
                }
                t+='<div id="vv_les_champs_condition">' + tt + '</div>';
            }
        }else{
            this.#obj_webs.champs_visualisation=[];
        }
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
                    t+='<div  class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + this.__gi1.les_svg.editer + '</div>';
                }
            }else{
                t+='<div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(ajouter_une_formule(destination(conditions))))">+f()</div>';
            }
        }
        t+='<div class="rev_b_svg yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(conditions))))">' + this.__gi1.les_svg.poubelle + '</div>';
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
                t+='<div class="rev_b_svg yy__3" data-rev_click="' + cmd + '">' + this.__gi1.les_svg.editer + '</div>';
            }else{
                var cmd='m1(n1(' + this.moi + '),f1(ajouter_une_formule(destination(complements))))';
                t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '">+f()</div>';
            }
        }
        t+='<div class="rev_b_svg yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(raz_champs_destination1(destination(complements))))">' + this.__gi1.les_svg.poubelle + '</div>';
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
        var champs_visualisation='';
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
                    valeurs+=CRLF + '      ' + this.__gi1.__rev1.ma_constante( elem.constante );
                }else if(elem.type_d_element === 'formule'){
                    valeurs+=CRLF + '      ' + elem.formule;
                }
            }
        }
        if(this.#obj_webs['champs_visualisation'].length > 0){
            for( i=0 ; i < this.#obj_webs['champs_visualisation'].length ; i++ ){
                champs_visualisation+=',champ(`' + this.#obj_webs['champs_visualisation'][i][0] + '` , `' + this.#obj_webs['champs_visualisation'][i][1] + '` )';
            }
            if(champs_visualisation !== ''){
                champs_visualisation=champs_visualisation.substr( 1 );
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
                if(this.#obj_webs.type_de_requete === 'insert' || this.#obj_webs.type_de_requete === 'delete'){
                    provenance+=elem.nom_de_la_table + ',base(b' + elem.id_bdd + ')';
                }else{
                    /* this.#obj_webs.type_de_requete === 'update' */
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
        var i={};
        for(i in this.#obj_webs['bases']){
            var liste_des_bases='';
            if(this.#obj_webs['bases'][i].selectionne === true){
                if(liste_des_bases !== ''){
                    liste_des_bases+=',';
                }
                liste_des_bases+=i;
            }
        }
        if(this.#obj_webs.type_de_requete !== 'delete'){
            rev_texte+=CRLF + '   ' + 'valeurs(' + valeurs + CRLF + '   )';
        }
        if(champs_visualisation !== ''){
            rev_texte+=CRLF + '   ' + 'champs_visualisation(' + champs_visualisation + ')';
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
          var tableau1=this.__gi1.__rev1.txt_en_tableau(rev_texte);
          var matriceFonction=functionToArray2(tableau1.__xva,true,false,'');
        */
        let nom_des_bases=[];
        var matriceFonction=this.__gi1.__rev1.rev_tm( rev_texte );
        if(matriceFonction.__xst === __xsu){
            var obj2=this.__gi1.__rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
            if(obj2.__xst === __xsu){
                rev_texte=obj2.__xva;
                let matrice_requete=matriceFonction.__xva;
                /*
                  les requetes select peuvent être multibase 
                  ( select * from b1.tbl_dans_b1 T0 , b2.tbl_dans_b1 T1 WHERE  T0.id = T1.id )
                  il faut le détecter
                */
                let lmr01=matrice_requete.length;
                for( let i=1 ; i < lmr01 ; i=matrice_requete[i][12] ){
                    if(matrice_requete[i][1] === 'sélectionner' && matrice_requete[i][2] === 'f'){
                        for( let j=i + 1 ; j < lmr01 ; j=matrice_requete[j][12] ){
                            if(matrice_requete[j][1] === 'provenance' && matrice_requete[j][2] === 'f'){
                                for( let k=j + 1 ; k < lmr01 ; k=matrice_requete[k][12] ){
                                    if((matrice_requete[k][1] === 'table_reference'
                                               || matrice_requete[k][1] === 'jointure_gauche'
                                               || matrice_requete[k][1] === 'jointure_croisée')
                                           && matrice_requete[k][2] === 'f'
                                    ){
                                        for( let l=k + 1 ; l < lmr01 ; l=matrice_requete[l][12] ){
                                            if(matrice_requete[l][1] === 'source' && matrice_requete[l][2] === 'f'){
                                                for( let m=l + 1 ; m < lmr01 ; m=matrice_requete[m][12] ){
                                                    if(matrice_requete[m][1] === 'nom_de_la_table' && matrice_requete[m][2] === 'f'){
                                                        for( let n=m + 1 ; n < lmr01 ; n=matrice_requete[n][12] ){
                                                            if(matrice_requete[n][1] === 'base'
                                                                   && matrice_requete[n][2] === 'f'
                                                                   && matrice_requete[n][8] === 1
                                                                   && matrice_requete[n + 1][2] === 'c'
                                                            ){
                                                                let trouvé=false;
                                                                for(let zz in nom_des_bases){
                                                                    if(matrice_requete[n + 1][1] === nom_des_bases[zz]){
                                                                        trouvé=true;
                                                                        break;
                                                                    }
                                                                }
                                                                if(trouvé === false){
                                                                    nom_des_bases.push( matrice_requete[n + 1][1] );
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(this.#obj_webs.type_de_requete === 'requete_manuelle'){
            if(rev_initial === null){
                if(this.#globale_rev_requete === ''){
                    rev_texte='requete_manuelle(' + CRLF;
                    var i={};
                    for(i in this.#obj_webs['bases']){
                        var liste_des_bases='';
                        if(this.#obj_webs['bases'][i].selectionne === true){
                            if(liste_des_bases !== ''){
                                liste_des_bases+=',';
                            }
                            liste_des_bases+=i;
                        }
                    }
                    rev_texte+=')' + CRLF;
                }else{
                    if(this.#globale_rev_requete !== ''){
                        rev_texte=this.#globale_rev_requete;
                    }
                }
            }else{
                if(rev_initial.value === ''){
                    rev_texte='requete_manuelle(' + CRLF;
                    var i={};
                    for(i in this.#obj_webs['bases']){
                        var liste_des_bases='';
                        if(this.#obj_webs['bases'][i].selectionne === true){
                            if(liste_des_bases !== ''){
                                liste_des_bases+=',';
                            }
                            liste_des_bases+=i;
                        }
                    }
                    rev_texte+=')' + CRLF;
                }
            }
            if(rev_initial !== null){
                rev_texte=rev_initial.value;
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
        if(this.#obj_webs.type_de_requete === 'insert' && this.#obj_webs.insert_brut === 1){
            liste_des_meta+='insert_brut(1)';
        }
        if((this.#obj_webs.type_de_requete === 'insert'
                       || this.#obj_webs.type_de_requete === 'select'
                       || this.#obj_webs.type_de_requete === 'liste_ecran')
                   && this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table === 1
               || nom_des_bases.length > 1
        ){
            liste_des_meta+='inclure_le_prefixe_de_la_base_devant_la_table(1)';
        }
        if(this.#obj_webs.type_de_requete === 'update' && this.#obj_webs.ne_pas_traiter_le_numero_de_revision === 1){
            liste_des_meta+='ne_pas_traiter_le_numero_de_revision(1)';
        }
        if(liste_des_meta !== ''){
            rev_texte='#(meta(' + liste_des_meta + ')),\n' + rev_texte;
        }
        t+='<div class="yy_conteneur_txtara" style="margin-top:15px;">';
        t+='  <div>';
        t+='    <b>rev : </b>';
        t+=this.__gi1.__fnt1.boutons_rev3( 'vv_zone_rev_01' );
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
        t+='    <div class="rev_bouton yy__4" id="bouton_aller_a_generer_le_programme1" style="display:inline-block;" data-rev_click="m1(n1(' + this.moi + '),f1(aller_a_generer_le_programme1()))">générer pgm</div>';
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
        t+=this.__gi1.__fnt1.boutons_edition1( 'txtar2' );
        t+=' </div>';
        t+=' <textarea class="txtar1" id="txtar2" rows="5" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        t+='</div>';
        /*
          =====================================================================================================
        */
        t+='<div style="margin-top:10px;" class="yy_conteneur_txtara">';
        t+='    <div>';
        t+='        <b>js : </b>';
        t+='        ' + this.__gi1.__fnt1.boutons_edition1( 'js1_de_la_requete' );
        t+='    </div>';
        t+='    <textarea class="txtar1" id="js1_de_la_requete" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        t+='</div>';
        /*
          =====================================================================================================
        */
        this.#div_de_travail.innerHTML=t;
        this.__gi1.ajoute_les_evenements_aux_boutons();
        if(this.#che_est_souche_requete === 1){
            document.getElementById( 'bouton_aller_a_generer_le_programme1' ).style.visibility='visible';
        }else{
            document.getElementById( 'bouton_aller_a_generer_le_programme1' ).style.visibility='hidden';
        }
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
            this.__gi1.redirection1( 'm1(n1(requetes1),f1(entree_module()))' , null );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    bouton_modifier_le_rev_en_base( mat , d ){
        let id_requete=0;
        if(document.getElementById( 'js1_de_la_requete' ).value === ''){
            if(!confirm( 'avec zone js vide ?' )){
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
        this.__gi1.supprimer_les_messages();
        var obj1=this.__gi1.__rev1.rev_tm( document.getElementById( 'vv_zone_rev_01' ).value );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let obj={
                    "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier_la_requete_en_base(retour_a_la_liste(' + retour_a_la_liste + ')))))' ,
                    "__xva" : {
                        "rev" : document.getElementById( 'vv_zone_rev_01' ).value ,
                        "sql" : document.getElementById( 'txtar2' ).value ,
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
                this.__gi1.envoyer_un_message_au_worker( obj );
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    compiler_en_ligne( mat , d , le_message_du_serveur=null ){
        /*
          this.traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur );
        */
        let obj=this._rev_de_sql_vers_js1.traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur );
        this.#globale_id_requete=obj.__xva.a_retourner.globale_id_requete;
        this.#globale_rev_requete=obj.__xva.a_retourner.globale_rev_requete;
        this.#globale_type_requete=obj.__xva.a_retourner.globale_type_requete;
        this.#globale_commentaire_requete=obj.__xva.a_retourner.globale_commentaire_requete;
        this.#globale_chp_table_reference_requete=obj.__xva.a_retourner.globale_chp_table_reference_requete;
        this.#che_est_souche_requete=obj.__xva.a_retourner.che_est_souche_requete;
        this.#obj_webs=obj.__xva.a_retourner.obj_webs;
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] );
            }
        }
        /*  */
        console.log( '=========================compiler_en_ligne=' , this.#obj_webs );
        let donnees_recues_a_transmettre={
            "__xva" : {
                "les_bases_du_projet" : le_message_du_serveur.__xva.les_bases_du_projet ,
                "chi_id_requete" : chi_id_requete ,
                "requete" : le_message_du_serveur.__xva.requete
            }
        };
        let obj0=this._rev_de_sql_vers_js1.compiler_requete_vers_js1( [] , 0 , donnees_recues_a_transmettre );
        if(obj0.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let obj1=this.transform_source_rev_vers_sql( le_message_du_serveur.__xva.requete['T0.cht_rev_requete'] , chi_id_requete );
        return obj1;
    }
    /*
      =============================================================================================================
    */
    charger_la_requete( mat , d , le_message_du_serveur=null ){
        /*
          this.traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur );
        */
        let obj=this._rev_de_sql_vers_js1.traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur );
        this.#globale_id_requete=obj.__xva.a_retourner.globale_id_requete;
        this.#globale_rev_requete=obj.__xva.a_retourner.globale_rev_requete;
        this.#globale_type_requete=obj.__xva.a_retourner.globale_type_requete;
        this.#globale_commentaire_requete=obj.__xva.a_retourner.globale_commentaire_requete;
        this.#globale_chp_table_reference_requete=obj.__xva.a_retourner.globale_chp_table_reference_requete;
        this.#che_est_souche_requete=obj.__xva.a_retourner.che_est_souche_requete;
        this.#obj_webs=obj.__xva.a_retourner.obj_webs;
        this.afficher_les_donnees( 'init()' );
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
        let o1='';
        o1+='<h1>concevoir une requete';
        o1+=' <div class="rev_bouton" style="font-weight:normal;" data-rev_click="m1(n1(requetes1),f1(liste_du_menu0()))" title="revenir à la liste" >⬱</div>';
        o1+='</h1>';
        o1+='<div id="vv_requetes_creer1"></div>';
        o1+='<div id="div_de_travail" style="max-width:100%;">Veuillez patienter</div>';
        /*  */
        o1+='<div>';
        o1+='    <b>rev initial</b>';
        o1+='</div>';
        o1+='<div class="yy_conteneur_txtara">';
        o1+='    <textarea class="txtar1" id="init" rows="10" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        o1+='';
        this.__gi1.maj_contenu_principal( o1 );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'concevoir un sql' );
        let obj={"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(charger_la_requete(chi_id_requete(' + chi_id_requete + ')))))'};
        this.__gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , __xva_avant , e1=null ){
        switch (mat[d][1]){
            case 'xxxxx' : break;
            default:
                if(e1 && e1.hasOwnProperty( 'stack' )){
                    this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : e1.stack} );
                }
                this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'la fonction "' + mat[d][1] + '" n\'est pas traitée ou contient une erreur'} );
                this.__gi1.affiche_les_messages();
                
        }
        return({"__xst" : __xsu});
    }
    _rev_de_sql_vers_js1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        this.__m_rev_vers_sql1=new w_rev_vers_sql1( '__m_rev_vers_sql1' , this.__gi1 );
        this._rev_de_sql_vers_js1=new _rev_de_sql_vers_js1( this.__gi1 );
    }
    /*
      =============================================================================================================
    */
}
export{x_ecran_concevoir_une_requete1 as x_ecran_concevoir_une_requete1};