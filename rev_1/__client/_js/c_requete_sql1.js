/*
  #transformer_requete_en_fonction_php
  traiter_donnees_bases_rev
*/
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const CRLF='\r\n';
import {c_rev_vers_sql1} from './c_rev_vers_sql1.js';
var globale_requete_en_cours={};
class c_requete_sql1{
    #nom_de_la_variable='';
    #obj_init={};
    /*
      structure principale de ce programme
    */
    #obj_webs={
        "type_de_requete" : 'select' ,
        "bases" : [] ,
        "ordre_des_tables" : [] ,
        "nom_zone_cible" : 'champs_sortie' ,
        "indice_table_pour_jointure_gauche" : 0 ,
        "gauche_0_droite_1" : 0 ,
        "champs_sortie" : [] ,
        "conditions" : [] ,
        "complements" : [] ,
        "tableau_des_bases_tables_champs" : {} ,
        "tester_les_dependances_dans_le_php" : 0 ,
        "sur_base_de_reference" : 0
    };
    #div_de_travail=null;
    #deb_selection_dans_formule=0;
    #globale_id_requete=0;
    #globale_rev_requete='';
    #globale_type_requete='';
    #globale_commentaire_requete='';
    #globale_debut_url='za_ajax.php';
    __m_rev_vers_sql1=null;
    /*
      =============================================================================================================
      =============================================================================================================
      function constructor
    */
    constructor( par ){
        /* nom_de_la_variable , nom_de_la_div_de_travail , charger_la_base=true ]{ */
        this.__m_rev_vers_sql1=new c_rev_vers_sql1( '__m_rev_vers_sql1' , __gi1.__m_rev1 );
        /*
          if(charger_la_base !== false){
          }
        */
    }
    /*
      =============================================================================================================
      utilisé dans l'éditeur
    */
    init0( par ){
        this.#div_de_travail=document.getElementById( par.div_de_travail );
        this.#globale_id_requete=parseInt( par.chi_id_requete , 10 );
        this.nouvelle( 'apres_chargement_des_bases' );
    }
    /*
      =============================================================================================================
      utilisé dans la compilation en ligne
    */
    init1( par ){
        this.#globale_id_requete=parseInt( par.contenu_bdd_requete['T0.chi_id_requete'] , 10 );
        /*
          {
          "1": {
          "chi_id_basedd": 1,
          "chp_rev_travail_basedd": "",
          "matrice": [],
          "tables": {},
          "selectionne": false
          }
          }
          
        */
        for(let indice_de_la_base in par.bases_du_projet){
            if(par.bases_du_projet[indice_de_la_base]['T0.chp_rev_travail_basedd'] === null){
                debugger;
                par.bases_du_projet[indice_de_la_base]['matrice']=[];
            }else{
                var obj1=__gi1.__m_rev1.rev_tm( par.bases_du_projet[indice_de_la_base]['T0.chp_rev_travail_basedd'] );
                if(obj1.__xst !== __xsu){
                    return;
                }
                par.bases_du_projet[indice_de_la_base]['matrice']=obj1.__xva;
            }
        }
        let init={
            "type_de_requete" : par.contenu_bdd_requete['T0.chp_type_requete'] ,
            "bases" : par.bases_du_projet ,
            "ordre_des_tables" : [] ,
            "nom_zone_cible" : "champs_sortie" ,
            "indice_table_pour_jointure_gauche" : 0 ,
            "gauche_0_droite_1" : 0 ,
            "champs_sortie" : [] ,
            "conditions" : [] ,
            "complements" : [] ,
            "tableau_des_bases_tables_champs" : {} ,
            "chi_id_requete_initiale" : parseInt( par.contenu_bdd_requete['T0.chi_id_requete'] , 10 ) ,
            "cht_rev_requete_initiale" : par.contenu_bdd_requete['T0.cht_rev_requete'] ,
            "chp_type_requete_initiale" : par.contenu_bdd_requete['T0.chp_type_requete'] ,
            "cht_commentaire_requete_initiale" : "" ,
            "ne_pas_mettre_en_stockage_local" : __xsu
        };
        globale_requete_en_cours={};
        let obj={
            "chi_id_requete_initiale" : parseInt( par.contenu_bdd_requete['T0.chi_id_requete'] , 10 ) ,
            "donnees_des_bases_du_projet" : par.bases_du_projet ,
            "cht_rev_requete_initiale" : par.contenu_bdd_requete['T0.cht_rev_requete'] ,
            "chp_type_requete_initiale" : par.contenu_bdd_requete['T0.chp_type_requete'] ,
            "cht_commentaire_requete_initiale" : null
        };
        this.traiter_donnees_bases_rev( obj , par.bases_du_projet );
        init.bases=JSON.parse( JSON.stringify( this.#obj_init.bases ) );
        this.#obj_webs.tester_les_dependances_dans_le_php=0;
        this.#obj_webs.sur_base_de_reference=0;
        this.apres_chargement_des_bases( init );
        var obj1=this.transform_source_rev_vers_sql( par.contenu_bdd_requete['T0.cht_rev_requete'] , parseInt( par.contenu_bdd_requete['T0.chi_id_requete'] , 10 ) );
        if(obj1.__xst === __xsu){
            return({
                    "__xst" : __xsu ,
                    "__xva" : {"cht_sql_requete" : obj1.source_sql ,"cht_php_requete" : obj1.source_php ,"cht_matrice_requete" : obj1.matrice_requete}
                });
        }else{
            debugger;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function enrichir_ tableau_des_bases_tables_champs
    */
    #enrichir_tableau_des_bases_tables_champs( init ){
        /* that */
        
        this.#obj_webs.tableau_des_bases_tables_champs={};
        let nom_de_la_table='';
        var indice_de_la_base={};
        for(indice_de_la_base in init.bases){
            this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base]={};
            var tab2=init.bases[indice_de_la_base].matrice;
            var l02=tab2.length;
            for( let j=1 ; j < l02 ; j=tab2[j][12] ){
                if(tab2[j][2] === 'f' && tab2[j][1] === 'créer_table'){
                    nom_de_la_table='';
                    for( let k=j + 1 ; k < l02 ; k=tab2[k][12] ){
                        if(tab2[k][2] === 'f' && tab2[k][1] === 'nom_de_la_table' && tab2[k][8] === 1 && tab2[k + 1][2] === 'c'){
                            nom_de_la_table=tab2[k + 1][1];
                            break;
                        }
                    }
                    if(nom_de_la_table !== ''){
                        this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]={"champs" : {}};
                        for( let l=j + 1 ; l < l02 ; l=tab2[l][12] ){
                            if(tab2[l][1] === 'fields' || tab2[l][1] === 'champs'){
                                for( let m=l + 1 ; m < l02 ; m=tab2[m][12] ){
                                    if(tab2[m][1] === 'field' || tab2[m][1] === 'champ'){
                                        var nom_du_champ='';
                                        for( let n=m + 1 ; n < l02 ; n=tab2[n][12] ){
                                            if(tab2[n][1] === 'nom_du_champ'){
                                                nom_du_champ=tab2[n + 1][1];
                                                this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]['champs'][nom_du_champ]={};
                                            }
                                        }
                                        if(nom_du_champ !== ''){
                                            for( let n=m + 1 ; n < l02 ; n=tab2[n][12] ){
                                                if(tab2[n][1] === 'type'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]['champs'][nom_du_champ]['type_du_champ']=tab2[n + 1][1];
                                                }
                                                if(tab2[n][1] === 'primary_key'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]['champs'][nom_du_champ]['primary_key']=true;
                                                }
                                                if(tab2[n][1] === 'non_nulle'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]['champs'][nom_du_champ]['non_nulle']=true;
                                                }
                                                if(tab2[n][1] === 'espece_du_champ'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]['champs'][nom_du_champ]['espece_du_champ']=tab2[n + 1][1];;
                                                    this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]['champs'][nom_du_champ]['type_du_champ']=tab2[n + 1][1];
                                                }
                                            }
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
        return;
    }
    /*
      =============================================================================================================
      =============================================================================================================
      lors d'une initialisation à partir d'une requête initiale, 
      il faut vérifier que le rev de la requete contient bien les références des tables et des champs
      contenus dans init.bases[n].matrices
      puis mettre les valeurs dans les champs de #obj_webs
    */
    convertir_rev_pour_construction( init ){
        this.#obj_webs.type_de_requete=this.#globale_type_requete;
        this.#obj_webs.bases=init.bases;
        /*
          console.log( 'this.#obj_webs.tableau_des_bases_tables_champs=' , this.#obj_webs.tableau_des_bases_tables_champs );
        */
        var obj1=__gi1.__m_rev1.rev_tm( this.#globale_rev_requete );
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
        for( var i=1 ; i < l01 ; i++ ){
            if(tab[i][2] === 'f' && 'base_de_reference' === tab[i][1]){
                for( let j=i + 1 ; j < l01 ; j=tab[j][12] ){
                    if(tab[j][2] === 'c'){
                        this.#obj_webs['bases'][tab[j][1]].selectionne=true;
                        break;
                    }else if(tab[j][2] === 'f' && tab[j][1] === '#'){
                    }else{
                        /* console.log( 'afr' ); */
                    }
                }
            }
        }
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
        this.#obj_webs['ordre_des_tables']=[];
        var i=0;
        for( var i=0 ; i < l01 ; i++ ){
            if(tab[i][3] === 0 && tab[i][1] === '#' && tab[i][2] === 'f' && tab[i][13].indexOf( 'meta(' ) >= 0){
                /* cette requête a un commentaire que contient un meta , on essaie de le convertir */
                var obj2=__gi1.__m_rev1.rev_tm( tab[i][13] );
                if(obj2.__xst !== __xsu){
                    continue;
                }
                for( let j=1 ; j < obj2.__xva.length ; j=obj2.__xva[j][12] ){
                    if(obj2.__xva[j][1] === 'meta' && obj2.__xva[j][2] === 'f'){
                        for( let k=j + 1 ; k < obj2.__xva.length ; k=obj2.__xva[k][12] ){
                            if(obj2.__xva[k][1] === 'tester_les_dependances_dans_le_php'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.tester_les_dependances_dans_le_php=1;
                                }
                            }else if(obj2.__xva[k][1] === 'sur_base_de_reference'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.sur_base_de_reference=1;
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
                        }
                        var k=j;
                        for( k=j ; k < l01 && tab[k][3] > tab[i + 1][3] ; k++ ){
                            if(tab[k][2] === 'f' && "base" === tab[k][1]){
                                if(tab[k + 1][2] === 'c'){
                                    indice_de_la_base=tab[k + 1][1];
                                    indice_de_la_base=indice_de_la_base.replace( /b/g , '' );
                                    this.#obj_webs['bases'][indice_de_la_base].selectionne=true;
                                }
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
                if(init.bases.hasOwnProperty( indice_de_la_base )){
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
                        var tab_jointure_gauche=[];
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
        this.#obj_webs['champs_sortie']=[];
        this.#obj_webs['conditions']=[];
        this.#obj_webs['complements']=[];
        for( var i=1 ; i < l01 ; i++ ){
            if(tab[i][2] === 'f' && 'valeurs' === tab[i][1] && tab[i][3] === 1){
                var j=i + 1;
                for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j=tab[j][12] ){
                    /*
                      dans les valeurs, il peut y avoir des 
                      - champs,
                      - formules
                      -constantes 
                    */
                    if(tab[j][2] === 'c'){
                        this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'constante' ,"constante" : tab[j]} );
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
                            var k=0;
                            for( k=0 ; k < nom_des_table_pouvant_contenir_le_champ.length && trouve === false ; k++ ){
                                var tab2=init.bases[nom_des_table_pouvant_contenir_le_champ[k].id_bdd].matrice;
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
                                this.#obj_webs['champs_sortie'].push( {
                                        "type_d_element" : 'champ' ,
                                        "id_bdd" : trouve.id_bdd ,
                                        "nom_de_la_table" : nom_de_la_table ,
                                        "nom_du_champ" : nom_du_champ ,
                                        "indice_table" : trouve.indice_table ,
                                        "alias_du_champ" : alias_du_champ
                                    } );
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
                                            var obj=__gi1.__m_rev1.matrice_vers_source_rev1( tab , j , false , j + 1 );
                                            if(obj.__xst === __xsu){
                                                if(formule_update !== ''){
                                                    formule_update+=',';
                                                }
                                                formule_update+='affecte(' + obj.__xva + ')';
                                            }else{
                                                __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ' il faut un affecte pour une requete update '} );
                                            }
                                        }else{
                                            __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ' il faut un affecte pour une requete update '} );
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
                                    var obj=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[j][7] , true , j );
                                    if(obj.__xst === __xsu){
                                        this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                                    }
                                }
                            }else{
                                /*
                                  c'est une formule
                                */
                                var obj=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[j][7] , true , j );
                                if(obj.__xst === __xsu){
                                    this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                                }
                            }
                        }else{
                            if(tab[j][1] === 'alias_champ'){
                            }else{
                                var obj=__gi1.__m_rev1.matrice_vers_source_rev1( tab , j , true , j + 1 );
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
                    var obj=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[i + 1][7] , true , i + 1 );
                    if(obj.__xst === __xsu){
                        this.#obj_webs['conditions'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                    }
                }
            }else if(tab[i][2] === 'f' && 'complements' === tab[i][1]){
                if(tab[i][8] > 0){
                    var obj=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[i + 1][7] , true , i + 1 );
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
      =============================================================================================================
    */
    apres_chargement_des_bases( init ){
        if( typeof globale_requete_en_cours === 'undefined'){
            /*
              ne rien faire
            */
        }else if( typeof globale_requete_en_cours === 'object'){

            if(init.cht_rev_requete_initiale !== ''){
                this.#globale_id_requete=init.chi_id_requete_initiale;
                this.#globale_rev_requete=init.cht_rev_requete_initiale;
                this.#globale_type_requete=init.chp_type_requete_initiale;
                this.#globale_commentaire_requete=init.cht_commentaire_requete_initiale === null ? ( '' ) : ( init.cht_commentaire_requete_initiale );
                this.#enrichir_tableau_des_bases_tables_champs( init );
                this.convertir_rev_pour_construction( init );
                if(init.hasOwnProperty( 'ne_pas_mettre_en_stockage_local' ) && init.ne_pas_mettre_en_stockage_local === __xsu){
                }else{
                    this.#mettre_en_stokage_local_et_afficher();
                }
            }else{

                this.#enrichir_tableau_des_bases_tables_champs( init );
                var sauvegarde=localStorage.getItem( __X_CLE_APPLICATION + '_derniere_requete' );
                if(sauvegarde !== null){
                    sauvegarde=JSON.parse( sauvegarde );
                    /*
                      vérifier que init et sauvegarde correspondent
                    */
                    var correspondance=true;
                    var i={};
                    for(i in init.bases){
                        if(!sauvegarde.bases.hasOwnProperty( i )){
                            correspondance=false;
                        }
                    }
                    if(correspondance === true){
                        var i={};
                        for(i in sauvegarde.bases){
                            if(!init.bases.hasOwnProperty( i )){
                                correspondance=false;
                            }
                        }
                    }
                    if(correspondance === true){
                        var i={};
                        for(i in init.bases){
                            var j={};
                            for(j in init.bases[i].tables){
                                if(!sauvegarde.bases[i].tables.hasOwnProperty( j )){
                                    correspondance=false;
                                }
                            }
                            var j={};
                            for(j in sauvegarde.bases[i].tables){
                                if(!init.bases[i].tables.hasOwnProperty( j )){
                                    correspondance=false;
                                }
                            }
                        }
                    }
                    if(correspondance === true){
                        /*
                          this.#obj_init['bases']
                          init.bases[i].tables
                        */
                        let avant=JSON.stringify( this.#obj_init['bases'] );
                        this.#obj_webs=JSON.parse( JSON.stringify( sauvegarde ) );
                        this.#obj_webs.bases=JSON.parse( avant );
                    }else{
                        this.#obj_webs=JSON.parse( JSON.stringify( init ) );
                    }
                }else{
                    this.#obj_webs=JSON.parse( JSON.stringify( init ) );
                }
                this.#mettre_en_stokage_local_et_afficher();
            }
        }
    }
    /*
      =============================================================================================================
      =============================================================================================================
    */
    get nom_de_la_variable(){
        return this.#nom_de_la_variable;
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function mettre_en_stokage_local_et_afficher
    */
    #mettre_en_stokage_local_et_afficher(){
        localStorage.setItem( __X_CLE_APPLICATION + '_derniere_requete' , JSON.stringify( this.#obj_webs ) );
        this.#afficher_les_donnees();
    }
    /*
      =============================================================================================================
      =============================================================================================================
      matricée
    */
    selectionner_ou_deselectionner_cette_base( mat ){
        let chi_id_basedd=0;
        /* id_bdd ]{ */
        for( let i=0 ; i < mat.length ; i++ ){
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
      matricée
    */
    selectionner_ou_deselectionner_cette_table( mat ){
        let id_bdd=0;
        let nom_de_la_table='';
        let selectionner=0;
        let indice_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'selectionner' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                selectionner=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'indice_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(selectionner === 0){
            if(this.#obj_webs['ordre_des_tables'].length > 0){
                /*
                  retirer le champ de champs_sortie
                */
                var liste_des_champ_a_retirer=[];
                var k=0;
                for( k=0 ; k < this.#obj_webs['champs_sortie'].length ; k++ ){
                    if(this.#obj_webs['champs_sortie'][k].id_bdd === id_bdd
                           && this.#obj_webs['champs_sortie'][k].nom_de_la_table === nom_de_la_table
                           && indice_table === this.#obj_webs['champs_sortie'][k].indice_table
                    ){
                        liste_des_champ_a_retirer.push( k );
                    }
                }
                for( k=liste_des_champ_a_retirer.length - 1 ; k >= 0 ; k-- ){
                    this.#obj_webs['champs_sortie'].splice( liste_des_champ_a_retirer[k] , 1 );
                }
                /*
                  retirer le champ de conditions
                */
                liste_des_champ_a_retirer=[];
                var k=0;
                for( k=0 ; k < this.#obj_webs['conditions'].length ; k++ ){
                    if(this.#obj_webs['conditions'][k].id_bdd === id_bdd
                           && this.#obj_webs['conditions'][k].nom_de_la_table === nom_de_la_table
                           && indice_table === this.#obj_webs['conditions'][k].indice_table
                    ){
                        liste_des_champ_a_retirer.push( k );
                    }
                }
                for( k=liste_des_champ_a_retirer.length - 1 ; k >= 0 ; k-- ){
                    this.#obj_webs['conditions'].splice( liste_des_champ_a_retirer[k] , 1 );
                }
                this.#obj_webs['ordre_des_tables'].splice( indice_table , 1 );
                /*
                  si on supprime l'indice_table, il faut renumeroter les champs
                */
                var k=0;
                for( k=0 ; k < this.#obj_webs['champs_sortie'].length ; k++ ){
                    if(this.#obj_webs['champs_sortie'][k].indice_table >= indice_table){
                        this.#obj_webs['champs_sortie'][k].indice_table-=1;
                    }
                }
                var k=0;
                for( k=0 ; k < this.#obj_webs['conditions'].length ; k++ ){
                    if(this.#obj_webs['conditions'][k].indice_table >= indice_table){
                        this.#obj_webs['conditions'][k].indice_table-=1;
                    }
                }
            }
        }else{
            this.#obj_webs['ordre_des_tables'].push( {
                    "id_bdd" : id_bdd ,
                    "nom_de_la_table" : nom_de_la_table ,
                    "indice_table" : 0 ,
                    "jointure" : 'jointure_croisée' ,
                    "champs_jointure_gauche" : {"champ_table_fille" : null ,"champ_table_mere" : null}
                } );
        }
        if(this.#obj_webs['ordre_des_tables'].length > 0){
            var i=0;
            for( i=0 ; i < this.#obj_webs['ordre_des_tables'].length ; i++ ){
                this.#obj_webs['ordre_des_tables'][i].indice_table=i;
                if(i === 0){
                    this.#obj_webs['ordre_des_tables'][i].jointure='table_reference';
                }else{
                    if(this.#obj_webs['ordre_des_tables'][i].jointure === 'table_reference'){
                        this.#obj_webs['ordre_des_tables'][i].jointure='';
                    }
                }
            }
        }
        this.#enrichir_tableau_des_bases_tables_champs( this.#obj_webs );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
      cmd+='interface1.module1(';
      cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
      cmd+=' methode3(selectionner_champs_destination1),';
      cmd+=' parametre3( ';
      cmd+='  indice_table('+i+')';
      cmd+='  nom_zone(type_de_jointure)';
      cmd+='  gauche_0_droite_1(1)';
      cmd+='  id(\'champs_selectionnes_1_'+i+'\')';
      cmd+='  champs_selectionnes(champs_jointure_gauche)';
      cmd+=' )';
      cmd+=')'
    */
    selectionner_champs_destination1( mat ){
        /* champs_selectionnes , indice_table , gauche_0_droite_1 ]{ */
        let champs_selectionnes='';
        let indice_table=-1;
        let gauche_0_droite_1='';
        for( let i=0 ; i < mat.length ; i++ ){
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
      =============================================================================================================
      cmd+=' parametre3( ';
      cmd+='  nom_zone(champs_selectionnes_1)';
      cmd+='  id(\'champs_selectionnes_1_'+i+'\')';
      cmd+='  champs_selectionnes(champs_jointure_gauche)';
      cmd+=' )';
      
    */
    selectionner_champs_destination2( mat ){
        let champs_selectionnes='';
        for( let i=0 ; i < mat.length ; i++ ){
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
    maj_sur_base_de_reference( mat ){
        this.#obj_webs.sur_base_de_reference=document.getElementById( 'vv_sur_base_de_reference' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_tester_les_dependances_dans_le_php( mat ){
        this.#obj_webs.tester_les_dependances_dans_le_php=document.getElementById( 'vv_tester_les_dependances' ).checked ? ( 1 ) : ( 0 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    maj_type_de_requete( mat ){
        this.#obj_webs.type_de_requete=document.getElementById( 'type_de_requete' ).value;
        if(this.#obj_webs.type_de_requete === 'insert'){
            this.#obj_webs.nom_zone_cible='champs_sortie';
        }
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
      =============================================================================================================
      matricée
    */
    selectionner_ce_champ( mat ){
        let nom_du_champ='';
        let nom_de_la_table='';
        let id_bdd=0;
        let indice_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'indice_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var nom_zone_cible='champs_sortie';
        if(this.#obj_webs.type_de_requete !== 'insert'){
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
        this.#obj_webs[nom_zone_cible].push( {"id_bdd" : id_bdd ,"nom_de_la_table" : nom_de_la_table ,"nom_du_champ" : nom_du_champ ,"indice_table" : indice_table ,"type_d_element" : 'champ'} );
        this.#obj_webs.nom_zone_cible=nom_zone_cible;
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function retirer_ce_champ_de_complements
    */
    retirer_ce_champ_de_complements( ind ){
        if(confirm( 'Certain ?' )){
            this.#obj_webs.complements.splice( ind , 1 );
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function retirer_ce_champ_de_where
    */
    retirer_ce_champ_de_where( mat ){
        if(confirm( 'Certain ?' )){
            this.#obj_webs.conditions=[];
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    retirer_ce_champ_de_sortie( mat ){
        if(!confirm( 'Certain ?' )){
            return;
        }
        let ind=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'ind' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                ind=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#obj_webs.champs_sortie.splice( ind , 1 );
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
      
      var cmd='';
      cmd+='interface1.module1(';
      cmd+=' chemin_module1('_js/c_requete_sql1.js'),';
      cmd+=' methode3(changer_la_jointure),';
      cmd+=' parametre3( ';
      cmd+='  nom_zone(type_de_requete)';
      cmd+=' )';
      cmd+=')'
      t+='<select id="type_de_jointure" data-hug_change="'+cmd+'" >'; // onchange="javascript:' + this.#nom_de_la_variable + '.changer_la_jointure(' + i + ',this)"
      t+='<option ' + (this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_croisée' ? ( ' selected="true" ' ) : ( '' )) + ' value="jointure_croisée" >jointure croisée</option>';
      t+='<option ' + (this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_gauche' ? ( ' selected="true" ' ) : ( '' )) + ' value="jointure_gauche"  >jointure gauche</option>';
      t+='</select>';
      t+='</td>';
      =============================================================================================================
    */
    changer_la_jointure( mat ){
        /* ind , element_html ]{ */
        let nom_zone='';
        let ind=-1;
        for( let i=0 ; i < mat.length ; i++ ){
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
      matricée
    */
    ajouter_ce_champ_dans_la_formule( mat ){
        let nom_du_champ='';
        let nom_de_la_table='';
        let id_bdd=0;
        let indice_table=0;
        let destination='';
        for( let i=0 ; i < mat.length ; i++ ){
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
                        zone_formule.value=avant + 'egal(champ(`' + nom_du_champ + '`) , :c_' + nom_du_champ + ')' + apres;
                    }else{
                        zone_formule.value=zone_formule.value + 'egal(champ(`' + nom_du_champ + '`) , :n_' + nom_du_champ + '))';
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
                zone_formule.value=zone_formule.value + 'champ(`' + nom_du_champ + '`),';
            }else{
                zone_formule.value=zone_formule.value + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),';
            }
        }else{
            var debut=zone_formule.value.substr( 0 , this.#deb_selection_dans_formule );
            var fin=zone_formule.value.substr( this.#deb_selection_dans_formule );
            if(this.#obj_webs.type_de_requete === 'update'){
                zone_formule.value=debut + 'affecte( champ( `' + nom_du_champ + '`) , :n_' + nom_du_champ + '),' + fin;
            }else if(this.#obj_webs.type_de_requete === 'insert'){
                zone_formule.value=debut + 'champ( `' + nom_du_champ + '`),' + fin;
            }else{
                zone_formule.value=debut + 'champ(`T' + indice_table + '` , `' + nom_du_champ + '`),' + fin;
            }
        }
        zone_formule.focus();
    }
    /*
      =============================================================================================================
      =============================================================================================================
      matricée
    */
    ajouter_cette_formule_dans_la_formule( mat ){
        let formule='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'formule' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                formule=mat[i + 1][1];
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
      =============================================================================================================
      function ajouter_la_formule
    */
    ajouter_la_formule( mat ){
        let destination='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        var zone_formule=document.getElementById( 'zone_formule' );
        var rev_de_la_formule=zone_formule.value;
        var obj=__gi1.__m_rev1.rev_tcm( rev_de_la_formule );
        if(obj.__xst === __xsu){
            if(!this.#obj_webs[destination]){
                this.#obj_webs[destination]=[];
            }
            this.#obj_webs[destination].push( {"type_d_element" : 'formule' ,"formule" : rev_de_la_formule} );
            __gi1.fermer_fenetre1();
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    ajouter_une_formule( mat ){
        let destination='';
        for( let i=0 ; i < mat.length ; i++ ){
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
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(ajouter_ce_champ_dans_la_formule),';
                    cmd+=' parametre3(';
                    cmd+='  nom_du_champ(' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '),';
                    cmd+='  nom_de_la_table(' + elem.nom_de_la_table + '),';
                    cmd+='  id_bdd(' + elem.id_bdd + '),';
                    cmd+='  indice_table(' + i + '),';
                    cmd+='  destination(' + destination + '),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton" data-hug_click="' + cmd + '">+T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>';
                    tabchamps.push( {
                            "indice_table" : this.#obj_webs['ordre_des_tables'][i].indice_table ,
                            "nom_du_champ" : this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ ,
                            "non_nulle" : this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].non_nulle,
                            "espece_du_champ" : this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].espece_du_champ,
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
            tab_ex.push( ' gerer_champ_date_creation( champ( `xxx` ) , format(23) )' );
            tab_ex.push( ' gerer_champ_date_modification( champ( `xxx` ) , format(23) )' );
            tab_ex.push( ' gerer_champ_numero_de_revision( champ( `xxx` ) )' );
        }
        for( let i=0 ; i < tab_ex.length ; i++ ){
            /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_cette_formule_dans_la_formule(&quot;' + tab_ex[i].replace( /"/g , '&#34;' ) + '&quot;)">' + tab_ex[i] + '</a>'; */
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(ajouter_cette_formule_dans_la_formule),';
            cmd+=' parametre3(';
            cmd+='  formule(\'' + tab_ex[i].replace( /"/g , '&#34;' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            cmd+=' )';
            cmd+=')';
            t+='<div class="hug_bouton" data-hug_click="' + cmd + '">' + tab_ex[i] + '</div>';
        }
        var contenu='';
        if("requete_manuelle" === this.#obj_webs.type_de_requete){
        }else if(("liste_ecran" === this.#obj_webs.type_de_requete
                   || "select" === this.#obj_webs.type_de_requete)
               && tabchamps.length > 0
        ){
            if("conditions" === destination){
                var i={};
                debugger
                for(i in tabchamps){ // type_du_champ
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
        /* t+='<a href="javascript:__gi1.formatter_le_source_rev(&quot;zone_formule&quot;);" title="formatter le source rev">(😊)</a>'; */
        t+='<div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(zone_formule)))" title="formater le source rev" >(😊)</div>';
        /* t+='<a href="javascript:__gi1.ajouter_un_commentaire_vide_et_reformater(&quot;zone_formule&quot;);" title="ajouter un commentaire et formatter">#()(😊)</a>'; */
        t+='<div class="yy_conteneur_txtara"><textarea id="zone_formule" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false">' + __gi1.__m_rev1.entitees_html( contenu ) + '</textarea></div>';
        /* t+='<br /><a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_la_formule(&quot;' + destination + '&quot;)">ajouter la formule</a>'; */
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(ajouter_la_formule),';
        cmd+=' parametre3(';
        cmd+='  destination(' + destination + '),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton" data-hug_click="' + cmd + '">ajouter la formule</div>';
        /*
          
          document.getElementById( '__contenu_modale' ).innerHTML=t;
          __gi1.global_modale2.showModal();
          document.getElementById( 'zone_formule' ).addEventListener( 'click' , this.clic_sur_textarea_formule.bind( this ) );
          document.getElementById( 'zone_formule' ).addEventListener( 'keyup' , this.clic_sur_textarea_formule.bind( this ) );
          
        */
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function clic_sur_textarea_formule
    */
    clic_sur_textarea_formule( evt ){
        this.#deb_selection_dans_formule=evt.target.selectionStart;
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function modifier_la_formule_de_destination
    */
    modifier_la_formule_de_destination( mat ){
        /* ind , destination ]{ */
        let destination='';
        for( let i=0 ; i < mat.length ; i++ ){
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
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(ajouter_ce_champ_dans_la_formule),';
                    cmd+=' parametre3(';
                    cmd+='  nom_du_champ(' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '),';
                    cmd+='  nom_de_la_table(' + elem.nom_de_la_table + '),';
                    cmd+='  id_bdd(' + elem.id_bdd + '),';
                    cmd+='  indice_table(' + this.#obj_webs['ordre_des_tables'][i].indice_table + '),';
                    cmd+='  destination(' + destination + '),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton" data-hug_click="' + cmd + '">+T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>';
                }
            }
        }
        var tab_ex=['tous_les_champs()','plus(champ(xxx) , 2)','concat(\'=>\',champ(xxx),\'<=\')','compter(tous_les_champs())','xxx'];
        if(destination === 'complements'){
            tab_ex.push( 'trier_par((champ(xxx),décroissant()),(champ(xxx),croissant()))' );
            tab_ex.push( ',limité_à(quantité(:quantitee),début(:debut))' );
            tab_ex.push( ' gerer_champ_date_creation( champ( `xxx` ) , format(23) )' );
            tab_ex.push( ' gerer_champ_date_modification( champ( `xxx` ) , format(23) )' );
            tab_ex.push( ' gerer_champ_numero_de_revision( champ( `xxx` ) )' );
        }
        var i=0;
        for( i=0 ; i < tab_ex.length ; i++ ){
            /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_cette_formule_dans_la_formule(&quot;' + tab_ex[i].replace( /"/g , '&#34;' ) + '&quot;)">' + tab_ex[i] + '</a>'; */
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(ajouter_cette_formule_dans_la_formule),';
            cmd+=' parametre3(';
            cmd+='  formule(\'' + tab_ex[i].replace( /"/g , '&#34;' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            cmd+=' )';
            cmd+=')';
            t+='<div class="hug_bouton" data-hug_click="' + cmd + '">' + tab_ex[i] + '</div>';
        }
        /* t+='<a href="javascript:__gi1.formatter_le_source_rev(&quot;zone_formule&quot;);" title="formatter le source rev">(😊)</a>'; */
        t+='<div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(zone_formule)))" title="formater le source rev" >(😊)</div>';
        t+='<div class="hug_bouton" data-hug_click="c_fonctions_js1(insérer_un_commentaire1(zone_source(zone_formule)))" title="insérer un commentaire" >#(😎)</div>';
        /* t+='<a href="javascript:__gi1.ajouter_un_commentaire_vide_et_reformater(&quot;zone_formule&quot;);" title="ajouter un commentaire et formatter">#()(😊)</a>'; */
        t+='<div>egal,diff,comme,sup,supegal,inf,infegal,dans,est,n_est_pas,pas_comme,equivalent,pas_equivalent</div>';
        t+='<div class="yy_conteneur_txtara"><textarea id="zone_formule" data-editeur1="rev" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if((this.#obj_webs.type_de_requete === 'select'
                   || this.#obj_webs.type_de_requete === 'liste_ecran'
                   || this.#obj_webs.type_de_requete === 'update'
                   || this.#obj_webs.type_de_requete === 'insert')
               && destination === 'champs_sortie'
        ){
            var contenu='';
            var i=0;
            for( i=0 ; i < this.#obj_webs.champs_sortie.length ; i++ ){
                if(contenu !== ''){
                    contenu+=',';
                }
                if(this.#obj_webs.champs_sortie[i].type_d_element === 'champ'){
                    if(this.#obj_webs.type_de_requete === 'insert'){
                        /* contenu+='affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '` , :'+this.#obj_webs.champs_sortie[i].nom_du_champ+'))'; */
                        contenu+='champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                    }else if(this.#obj_webs.type_de_requete === 'update'){
                        contenu+='champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                    }else{
                        contenu+='champ(`T' + this.#obj_webs.champs_sortie[i].indice_table + '` , `' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                    }
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'constante'){
                    contenu+=__gi1.__m_rev1.ma_constante( this.#obj_webs.champs_sortie[i].constante );
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    contenu+=this.#obj_webs.champs_sortie[i].formule;
                }
            }
            t+=contenu.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }else{
            if(this.#obj_webs[destination].hasOwnProperty( '0' ) && this.#obj_webs[destination]['0'].hasOwnProperty( 'formule' )){
                t+=this.#obj_webs[destination][0].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
            }
        }
        t+='</textarea></div>';
        t+='<br />';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(enregistrer_la_formule_de_destination),';
        cmd+=' parametre3(';
        cmd+='  destination(' + destination + '),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton" data-hug_click="' + cmd + '">modifier la formule</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function enregistrer_la_formule_de_destination
    */
    enregistrer_la_formule_de_destination( mat ){
        let destination='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        var zone_formule=document.getElementById( 'zone_formule' );
        var rev_de_la_formule=zone_formule.value;
        var obj=__gi1.__m_rev1.rev_tcm( rev_de_la_formule );
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
            __gi1.fermer_fenetre1();
            this.#mettre_en_stokage_local_et_afficher();
        }
    }
    /*
      =============================================================================================================
    */
    raz_champs_destination1( mat ){
        if(!confirm( 'Certain ?' )){
            return;
        }
        let destination='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'destination' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                destination=mat[i + 1][1];
            }
        }
        this.#obj_webs[destination]=[];
        __gi1.fermer_fenetre1();
        this.#mettre_en_stokage_local_et_afficher();
    }
    /*
      =============================================================================================================
    */
    #afficher_les_donnees(){
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
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(maj_type_de_requete),';
        cmd+=' parametre3(';
        cmd+='  nom_zone(type_de_requete),';
        cmd+=' )';
        cmd+=')';
        t+='<select id="type_de_requete" data-hug_change="' + cmd + '">';
        /* onchange="' + this.#nom_de_la_variable + '.maj_type_de_requete()">'; */
        t+='<option value="liste_ecran"     ' + (this.#obj_webs.type_de_requete === 'liste_ecran' ? ( ' selected="true"' ) : ( '' )) + '>liste_ecran</option>';
        t+='<option value="select"           ' + (this.#obj_webs.type_de_requete === 'select' ? ( ' selected="true"' ) : ( '' )) + '>select</option>';
        t+='<option value="update"           ' + (this.#obj_webs.type_de_requete === 'update' ? ( ' selected="true"' ) : ( '' )) + '>update</option>';
        t+='<option value="insert"           ' + (this.#obj_webs.type_de_requete === 'insert' ? ( ' selected="true"' ) : ( '' )) + '>insert</option>';
        t+='<option value="delete"           ' + (this.#obj_webs.type_de_requete === 'delete' ? ( ' selected="true"' ) : ( '' )) + '>delete</option>';
        t+='<option value="requete_manuelle" ' + (this.#obj_webs.type_de_requete === 'requete_manuelle' ? ( ' selected="true"' ) : ( '' )) + '>requete_manuelle</option>';
        t+='</select>';
        t+='<br />';
        t+='meta : ';
        t+='<br />';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+='  chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+='  methode3(maj_tester_les_dependances_dans_le_php),';
        cmd+='  parametre3(';
        cmd+='    nom_zone(vv_tester_les_dependances),';
        cmd+='  )';
        cmd+=')';
        t+=' tester_les_dependances pour la suppression dans le php';
        t+='<input  id="vv_tester_les_dependances" type="checkbox" data-hug_click="' + cmd + '" ' + (this.#obj_webs.tester_les_dependances_dans_le_php === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+='  chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+='  methode3(maj_sur_base_de_reference),';
        cmd+='  parametre3(';
        cmd+='    nom_zone(vv_sur_base_de_reference),';
        cmd+='  )';
        cmd+=')';
        t+=' sur_base_de_reference';
        t+='<input  id="vv_sur_base_de_reference" type="checkbox" data-hug_click="' + cmd + '" ' + (this.#obj_webs.sur_base_de_reference === 1 ? ( ' checked="true" ' ) : ( '' )) + ' />';
        t+='</div>';
        t+='<table>';
        var la_class_de_la_base='';
        var la_classe_de_la_table='';
        var ind={};
        for(ind in this.#obj_webs['bases']){
            t+='<tr>';
            t+='<td>';
            la_class_de_la_base='';
            if(this.#obj_webs['bases'][ind].selectionne === true){
                la_class_de_la_base='yy__x_signaux_1';
            }
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(selectionner_ou_deselectionner_cette_base),';
            cmd+=' parametre3(';
            cmd+='  chi_id_basedd(' + this.#obj_webs['bases'][ind]['chi_id_basedd'] + '),';
            cmd+=' )';
            cmd+=')';
            t+='<div class="hug_bouton ' + la_class_de_la_base + '" data-hug_click="' + cmd + '">bdd_' + this.#obj_webs['bases'][ind]['chi_id_basedd'] + '</div>';
            t+='</td>';
            if(la_class_de_la_base !== ''){
                t+='<td>';
                var nom_de_la_table={};
                for(nom_de_la_table in this.#obj_webs['bases'][ind]['tables']){
                    la_classe_de_la_table='';
                    if(this.#obj_webs['bases'][ind]['tables'][nom_de_la_table].active === true){
                        la_classe_de_la_table='yy__x_signaux_3';
                    }
                    /* id_bdd , nom_de_la_table , selectionner , indice_table */
                    /* t+='<a class="' + la_classe_de_la_table + '" href="javascript:' + this.#nom_de_la_variable + '.selectionner_ou_deselectionner_cette_table(' + ind + ',&quot;' + nom_de_la_table + '&quot;,1,0)">' + nom_de_la_table + '</a>'; */
                    var cmd='';
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(selectionner_ou_deselectionner_cette_table),';
                    cmd+=' parametre3(';
                    cmd+='  id_bdd(' + ind + '),';
                    cmd+='  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                    cmd+='  selectionner(1),';
                    cmd+='  indice_table(0),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton ' + la_classe_de_la_table + '" data-hug_click="' + cmd + '">' + nom_de_la_table + '</div>';
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
                la_class='yyinfo';
            }
        }
        t+='<hr />';
        if(this.#obj_webs['ordre_des_tables'].length > 0){
            t+='<table id="ordre_des_tables" style="max-width:100%;">';
            var i=0;
            for( i=0 ; i < this.#obj_webs['ordre_des_tables'].length ; i++ ){
                var elem=this.#obj_webs['ordre_des_tables'][i];
                t+='<tr>';
                t+='<td>';
                t+=elem.id_bdd + ' ' + elem.nom_de_la_table + ' T' + this.#obj_webs['ordre_des_tables'][i].indice_table;
                /* t+='<a class="yydanger" href="javascript:' + this.#nom_de_la_variable + '.selectionner_ou_deselectionner_cette_table(' + elem.id_bdd + ',&quot;' + elem.nom_de_la_table + '&quot;,0,' + i + ')">-</a>'; */
                var cmd='';
                cmd+='interface1.module1(';
                cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                cmd+=' methode3(selectionner_ou_deselectionner_cette_table),';
                cmd+=' parametre3(';
                cmd+='  id_bdd(' + elem.id_bdd + '),';
                cmd+='  nom_de_la_table(' + elem.nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                cmd+='  selectionner(0),';
                cmd+='  indice_table(' + i + '),';
                cmd+=' )';
                cmd+=')';
                t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '" title="retirer">-</div>';
                t+='</td>';
                t+='<td>';
                if(i > 0){
                    t+='<td>';
                    var cmd='';
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(changer_la_jointure),';
                    cmd+=' parametre3( ';
                    cmd+='  ind(' + i + ')';
                    cmd+='  nom_zone(type_de_jointure)';
                    cmd+=' )';
                    cmd+=')';
                    t+='<select id="type_de_jointure" data-hug_change="' + cmd + '" >';
                    /* onchange="javascript:' + this.#nom_de_la_variable + '.changer_la_jointure(' + i + ',this)" */
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
                    var cmd='';
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(selectionner_ce_champ),';
                    cmd+=' parametre3(';
                    cmd+='  nom_du_champ(' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                    cmd+='  nom_de_la_table(' + elem.nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
                    cmd+='  id_bdd(' + elem.id_bdd + '),';
                    cmd+='  indice_table(' + i + '),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton" data-hug_click="' + cmd + '">T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ + '</div>';
                }
                t+='</td>';
                if(this.#obj_webs['ordre_des_tables'][i].jointure === 'jointure_gauche'){
                    t+='<td>';
                    t+='ON:';
                    var cmd='';
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(selectionner_champs_destination1),';
                    cmd+=' parametre3( ';
                    cmd+='  indice_table(' + i + ')';
                    cmd+='  nom_zone(type_de_jointure)';
                    cmd+='  gauche_0_droite_1(0)';
                    cmd+='  id(\'champs_selectionnes_0_' + i + '\')';
                    cmd+='  champs_selectionnes(champs_jointure_gauche)';
                    cmd+=' )';
                    cmd+=')';
                    t+='<input type="radio" name="champs_selectionnes" ';
                    t+=' data-hug_click="' + cmd + '" ';
                    /* onclick="javascript:' + this.#nom_de_la_variable + '.selectionner_champs_destination1(&quot;champs_jointure_gauche&quot;,' + i + ',0)" '; */
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
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(selectionner_champs_destination1),';
                    cmd+=' parametre3( ';
                    cmd+='  indice_table(' + i + ')';
                    cmd+='  nom_zone(type_de_jointure)';
                    cmd+='  gauche_0_droite_1(1)';
                    cmd+='  id(\'champs_selectionnes_1_' + i + '\')';
                    cmd+='  champs_selectionnes(champs_jointure_gauche)';
                    cmd+=' )';
                    cmd+=')';
                    t+='<input type="radio" name="champs_selectionnes" ';
                    t+=' data-hug_click="' + cmd + '" ';
                    /* onclick="javascript:' + this.#nom_de_la_variable + '.selectionner_champs_destination1(&quot;champs_jointure_gauche&quot;,' + i + ',1)" '; */
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
        t+='champs sortie';
        var chacked='';
        if(this.#obj_webs.type_de_requete === 'insert'){
            chacked=' checked="true" ';
        }
        if(this.#obj_webs.nom_zone_cible === 'champs_sortie'){
            chacked=' checked="true" ';
        }
        /* champs_selectionnes , indice_table , gauche_0_droite_1 */
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(selectionner_champs_destination2),';
        cmd+=' parametre3( ';
        cmd+='  champs_selectionnes(champs_sortie)';
        cmd+=' )';
        cmd+=')';
        /* onclick="javascript:' + this.#nom_de_la_variable + '.selectionner_champs_destination2(&quot;champs_sortie&quot;)" */
        t+='<input type="radio" data-hug_click="' + cmd + '"  name="champs_selectionnes" id="champs_selectionnes_1" value="champs_sortie" ' + chacked + '/>';
        if(this.#obj_webs.champs_sortie.length === 0){
            /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_une_formule(&quot;champs_sortie&quot;)">+f()</a>'; */
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(ajouter_une_formule),';
            cmd+=' parametre3(';
            cmd+='  destination(champs_sortie),';
            cmd+=' )';
            cmd+=')';
            t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">+f()</div>';
        }else{
            /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.modifier_la_formule_de_destination(' + i + ',&quot;champs_sortie&quot;)">✎</a>'; */
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(modifier_la_formule_de_destination),';
            cmd+=' parametre3(';
            cmd+='  destination(champs_sortie),';
            cmd+=' )';
            cmd+=')';
            t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">✎</div>';
        }
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(raz_champs_destination1),';
        cmd+=' parametre3(';
        cmd+='  destination(champs_sortie),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '">x</div>';
        t+='</div>';
        /*
          *
        */
        t+='<div id="champs_en_sortie"  style="max-width:100%;">';
        var contenu='';
        var i=0;
        for( i=0 ; i < this.#obj_webs.champs_sortie.length ; i++ ){
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(retirer_ce_champ_de_sortie),';
            cmd+=' parametre3(';
            cmd+='  ind(' + i + '),';
            cmd+=' )';
            cmd+=')';
            /* t+='<div class="hug_bouton" data-hug_click="'+cmd+'">T' + this.#obj_webs['ordre_des_tables'][i].indice_table + '.' + this.#obj_webs['bases'][elem.id_bdd]['tables'][elem.nom_de_la_table]['champs'][id_du_champ].nom_du_champ+'</div>'; */
            if(this.#obj_webs.type_de_requete !== 'select' || this.#obj_webs.type_de_requete !== 'liste_ecran'){
                /* cas insert update */
                /* debugger; */
                var libelle='';
                if(this.#obj_webs.champs_sortie[i].type_d_element === 'champ'){
                    libelle+='champ(`T' + this.#obj_webs.champs_sortie[i].indice_table + '` , `' + this.#obj_webs.champs_sortie[i].nom_du_champ + '`)';
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'constante'){
                    libelle+=__gi1.__m_rev1.ma_constante( this.#obj_webs.champs_sortie[i].constante );
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    libelle+=this.#obj_webs.champs_sortie[i].formule;
                }
                t+='<div class="hug_bouton" data-hug_click="' + cmd + '">' + libelle + '</div>';
            }else{
                if(this.#obj_webs.champs_sortie[i].type_d_element === 'champ'){
                    if(this.#obj_webs.type_de_requete === 'update'){
                        /* contenu+='<a href="javascript:' + this.#nom_de_la_variable + '.retirer_ce_champ_de_sortie[' + i + ']">affecte[champ[`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '` , :n_' + this.#obj_webs.champs_sortie[i].nom_du_champ + ']</a>'; */
                        t+='<div class="hug_bouton" data-hug_click="' + cmd + '">affecte(champ(`' + this.#obj_webs.champs_sortie[i].nom_du_champ + '` , :n_' + this.#obj_webs.champs_sortie[i].nom_du_champ + ')</div>';
                    }else{
                        /* contenu+='<a href="javascript:' + this.#nom_de_la_variable + '.retirer_ce_champ_de_sortie(' + i + ')">T' + this.#obj_webs.champs_sortie[i].indice_table + '.' + this.#obj_webs.champs_sortie[i].nom_du_champ + '</a>'; */
                        t+='<div class="hug_bouton" data-hug_click="' + cmd + '">T' + this.#obj_webs.champs_sortie[i].indice_table + '.' + this.#obj_webs.champs_sortie[i].nom_du_champ + '</div>';
                    }
                }else if(this.#obj_webs.champs_sortie[i].type_d_element === 'formule'){
                    /* contenu+='<a href="javascript:' + this.#nom_de_la_variable + '.retirer_ce_champ_de_sortie(' + i + ')">' + this.#obj_webs.champs_sortie[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ) + '</a>'; */
                    t+='<div class="hug_bouton" data-hug_click="' + cmd + '">' + this.#obj_webs.champs_sortie[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ) + '</div>';
                }
            }
        }
        /*
          debugger
          if(this.#obj_webs.type_de_requete !== 'select' || this.#obj_webs.type_de_requete !== 'liste_ecran'){
          //t+='<a href="javascript:' + this.#nom_de_la_variable + '.retirer_ce_champ_de_sortie(' + i + ')" style="max-width:90%;text-align:left;">' + contenu + '</a>';
          
          
          
          t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.modifier_la_formule_de_destination(' + i + ',&quot;champs_sortie&quot;)">✎</a>';
          }else{
          t+=contenu;
          }
        */
        t+='</div>';
        t+='<div>';
        t+='champs conditions ( WHERE )';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(raz_champs_destination1),';
        cmd+=' parametre3(';
        cmd+='  destination(conditions),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '">x</div>';
        if(this.#obj_webs.type_de_requete !== 'insert'){
            t+='<div>';
            if(this.#obj_webs.conditions){
                var i=0;
                if(this.#obj_webs.conditions.length === 0){
                    var cmd='';
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(ajouter_une_formule),';
                    cmd+=' parametre3(';
                    cmd+='  destination(conditions),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">+f()</div>';
                }else{
                    var cmd='';
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(modifier_la_formule_de_destination),';
                    cmd+=' parametre3(';
                    cmd+='  destination(conditions),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">✎</div>';
                    for( i=0 ; i < this.#obj_webs.conditions.length ; i++ ){
                        var cmd='';
                        cmd+='interface1.module1(';
                        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                        cmd+=' methode3(retirer_ce_champ_de_where),';
                        cmd+=' parametre3(';
                        cmd+='  destination(conditions),';
                        cmd+=' )';
                        cmd+=')';
                        t+='<div class="hug_bouton" data-hug_click="' + cmd + '">' + this.#obj_webs.conditions[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ) + '</div>';
                    }
                }
            }else{
                var cmd='';
                cmd+='interface1.module1(';
                cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                cmd+=' methode3(ajouter_une_formule),';
                cmd+=' parametre3(';
                cmd+='  destination(conditions),';
                cmd+=' )';
                cmd+=')';
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">+f()</div>';
            }
            t+='</div>';
        }
        t+='</div>';
        t+='<div>';
        t+='les complements';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(raz_champs_destination1),';
        cmd+=' parametre3(';
        cmd+='  destination(complements),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '">x</div>';
        t+='</div>';
        if(this.#obj_webs.complements){
            if(this.#obj_webs.complements.length > 0){
                var cmd='';
                cmd+='interface1.module1(';
                cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                cmd+=' methode3(modifier_la_formule_de_destination),';
                cmd+=' parametre3(';
                cmd+='  destination(complements),';
                cmd+=' )';
                cmd+=')';
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">✎</div>';
                var i=0;
                for( i=0 ; i < this.#obj_webs.complements.length ; i++ ){
                    cmd+='interface1.module1(';
                    cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                    cmd+=' methode3(retirer_ce_champ_de_complements),';
                    cmd+=' parametre3(';
                    cmd+='  destination(complements),';
                    cmd+=' )';
                    cmd+=')';
                    t+='<div class="hug_bouton" data-hug_click="' + cmd + '">' + this.#obj_webs.complements[i].formule.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ) + '</div>';
                    /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.modifier_la_formule_de_destination(' + i + ',&quot;complements&quot;)">✎</a>'; */
                }
            }else{
                /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_une_formule(&quot;complements&quot;)">+f()</a>'; */
                var cmd='';
                cmd+='interface1.module1(';
                cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
                cmd+=' methode3(ajouter_une_formule),';
                cmd+=' parametre3(';
                cmd+='  destination(complements),';
                cmd+=' )';
                cmd+=')';
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">+f()</div>';
            }
        }else{
        }
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
                    valeurs+=CRLF + '      ' + __gi1.__m_rev1.ma_constante( elem.constante );
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
          var tableau1=__gi1.__m_rev1.txt_en_tableau(rev_texte);
          var matriceFonction=functionToArray2(tableau1.__xva,true,false,'');
        */
        var matriceFonction=__gi1.__m_rev1.rev_tm( rev_texte );
        if(matriceFonction.__xst === __xsu){
            var obj2=__gi1.__m_rev1.matrice_vers_source_rev1( matriceFonction.__xva , 0 , true , 1 );
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
        if(this.#obj_webs.type_de_requete === 'delete' && this.#obj_webs.tester_les_dependances_dans_le_php === 1){
            rev_texte='#(meta(tester_les_dependances_dans_le_php(1))),\n' + rev_texte;
        }
        if(this.#obj_webs.sur_base_de_reference === 1){
            rev_texte='#(meta(sur_base_de_reference(1))),\n' + rev_texte;
        }
        t+='<div style="margin-top:10px;">';
        t+='  <b>rev : </b>';
        t+='  <div class="hug_bouton" data-hug_click="c_fonctions_js1(formater_le_rev1(zone_source(vv_zone_rev_01)))" title="formater le source rev" >(😊)</div>';
        t+='  <div class="hug_bouton" data-hug_click="c_fonctions_js1(insérer_un_commentaire1(zone_source(vv_zone_rev_01)))" title="insérer un commentaire" >#(😎)</div>';
        t+='  <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(vv_zone_rev_01)))" title="agrandir la zone" >🖐</div>';
        t+='  <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(vv_zone_rev_01)))" title="retrecir la zone">👊</div>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <textarea ';
        t+='    class="txtar1" ';
        t+='    data-editeur1="rev" id="vv_zone_rev_01" rows="20" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(this.#obj_webs.type_de_requete === 'requete_manuelle'){
            t+='' + this.#globale_rev_requete.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '';
        }else{
            t+='' + rev_texte.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '';
        }
        t+='  </textarea></div>';
        t+='<div>';
        t+='    <label style="width:90%;display:inline-block" for="cht_commentaire_requete">commentaire : ';
        t+='        <input style="width:50%" type="text" id="cht_commentaire_requete" value="' + this.#globale_commentaire_requete.replace( /&/g , '&amp;' ).replace( '<' , '&lt;' ).replace( '>' , '&gt;' ).replace( '"' , '&quot;' ) + '"/>';
        t+='    </label>';
        t+='</div>';
        t+='<div style="margin-top:10px;">';
        t+='    <b>SQL : </b>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(transform_textarea_rev_vers_sql),';
        cmd+=' parametre3(';
        cmd+='  txtarea_source(vv_zone_rev_01),';
        cmd+='  txtarea_dest(txtar2),';
        cmd+='  id_requete(' + this.#globale_id_requete + '),';
        cmd+='  effacer_la_pile_des_messages(1),';
        cmd+=' )';
        cmd+=')';
        t+='    <div class="hug_bouton yy__x_signaux_1" data-hug_click="' + cmd + '" title="convertir rev en SQL">R2S</div>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
        cmd+=' methode3(bouton_ajouter_le_rev_en_base),';
        cmd+=' parametre3(';
        cmd+='  chi_id_requete(' + this.#globale_id_requete + '),';
        cmd+=' )';
        cmd+=')';
        t+='    <div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '" title="convertir rev en SQL">ajouter en base</div>';
        if(this.#globale_id_requete > 0){
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+=' methode3(bouton_modifier_le_rev_en_base),';
            cmd+=' parametre3(';
            cmd+='  id_requete(' + this.#globale_id_requete + '),';
            cmd+=' )';
            cmd+=')';
            t+='    <div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">modifier en base(' + this.#globale_id_requete + ')</div>';
            var cmd='';
            cmd+='interface1.module1(';
            cmd+='   chemin_module1(\'_js/c_requete_sql1.js\'),';
            cmd+='   methode3(bouton_modifier_le_rev_en_base),';
            cmd+='   parametre3(';
            cmd+='       id_requete(' + this.#globale_id_requete + '),';
            cmd+='       retour_a_la_liste(1),';
            cmd+='   )';
            cmd+=')';
            t+='    <div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">modifier en base(' + this.#globale_id_requete + ') et retour à la liste</div>';
            document.getElementById( 'init' ).value=this.#globale_rev_requete.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
        }
        t+='    <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(txtar2)))" title="agrandir la zone" >🖐</div>';
        t+='    <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(txtar2)))" title="retrecir la zone">👊</div>';
        t+='</div>';
        /*
          console.log( ' this.#obj_webs=' , this.#obj_webs );
        */
        this.#div_de_travail.innerHTML=t;
        __gi1.ajoute_les_evenements_aux_boutons();
    }
    /*
      =============================================================================================================
      matricée
    */
    bouton_modifier_le_rev_en_base( mat ){
        let id_requete=0;
        let retour_a_la_liste=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_requete=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                retour_a_la_liste=1;
            }
        }
        __gi1.supprimer_les_messages();
        var obj1=__gi1.__m_rev1.rev_tm( document.getElementById( 'vv_zone_rev_01' ).value );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let obj={
                    "__x_action" : 'c_requetes1.modifier_la_requete_en_base()' ,
                    "__xva" : {
                        "rev" : document.getElementById( 'vv_zone_rev_01' ).value ,
                        "sql" : document.getElementById( 'txtar2' ).value ,
                        "php" : document.getElementById( 'txtar3' ).value ,
                        "type" : this.#obj_webs.type_de_requete ,
                        "cht_matrice_requete" : obj1.__xva ,
                        "cht_commentaire_requete" : document.getElementById( 'cht_commentaire_requete' ).value ,
                        "chi_id_requete" : id_requete ,
                        "retour_a_la_liste" : retour_a_la_liste
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return;
            }
        }
        return;
    }
    /*
      =============================================================================================================
      =============================================================================================================
      matricée
    */
    bouton_ajouter_le_rev_en_base( mat ){
        let chi_id_requete=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }
        }
        __gi1.supprimer_les_messages();
        /*
          var tableau1=__gi1.__m_rev1.txt_en_tableau(document.getElementById('vv_zone_rev_01').value);
          var obj1=functionToArray2(tableau1.__xva,false,true,'');
        */
        var obj1=__gi1.__m_rev1.rev_tm( document.getElementById( 'vv_zone_rev_01' ).value );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let obj={
                    "__x_action" : 'c_requetes1.enregistrer_la_requete_en_base()' ,
                    "__xva" : {
                        "rev" : document.getElementById( 'vv_zone_rev_01' ).value ,
                        "sql" : document.getElementById( 'txtar2' ).value ,
                        "php" : document.getElementById( 'txtar3' ).value ,
                        "type" : this.#obj_webs.type_de_requete ,
                        "cht_matrice_requete" : obj1.__xva ,
                        "cht_commentaire_requete" : document.getElementById( 'cht_commentaire_requete' ).value ,
                        "chi_id_requete" : chi_id_requete
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return;
            }else{
                debugger;
            }
        }else{
            debugger;
        }
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function traiter_chaine_sql_pour_php
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
      =============================================================================================================
      function obtenir_le_tableau_des_conditions
    */
    #obtenir_le_tableau_des_conditions( formule , obj3 ){
        var tableau_des_conditions=[];
        /*
          var tableau1=__gi1.__m_rev1.txt_en_tableau(formule);
          var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
        */
        var matriceFonction=__gi1.__m_rev1.rev_tm( formule );
        var tab=matriceFonction.__xva;
        var l01=tab.length;
        var options={
            "au_format_php" : true ,
            "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
            "pour_where" : true ,
            "type_de_champ_pour_where" : '' ,
            "nom_du_champ_pour_where" : ''
        };
        var i=1;
        for( i=1 ; i < l01 ; i++ ){
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
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.__xva ,
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
                                        "type" : options.type_de_champ_pour_where ,
                                        "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                    } );
                            }else{
                                tableau_des_conditions.push( {
                                        "type_condition" : 'variable' ,
                                        "valeur" : obj.__xva ,
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
            try{
                text_rev=document.getElementById( 'vv_zone_rev_01' ).value;
            }catch(e){
                let mat1=obj3.matriceFonction;
                let obj1=__gi1.__m_rev1.matrice_vers_source_rev1( mat1 , 0 , true , 1 );
                if(obj1.__xst === __xsu){
                    text_rev=obj1.__xva;
                }else{
                    return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
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
                if(__gi1.__m_rev1.est_num( obj3.id_base_principale )){
                    id_numerique_base_principale=parseInt( obj3.id_base_principale , 10 );
                    obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale;
                }else{
                    obj3.id_base_principale='';
                }
            }
        }
        if(this.#obj_webs.sur_base_de_reference === 1){
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
            if(obj3.id_base_principale === ''){
                nouvelle_chaine=nouvelle_chaine.replace( /`'\.\$GLOBALS\[__BDD\]\[BDD_NUMERO_\]\[PREFIXE_BDD\]\.'`\./g , '' );
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
                    t+='        $stmt0=$db->prepare($sql0);' + CRLF;
                }else{
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
            t+='    $sql0=\'' + CRLF;
            t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
            t+='    \';' + CRLF;
            t+='    // echo __FILE__ . \' \' . __LINE__ . \' $sql0=<pre>\' . $sql0 . \'</pre>\' ; exit(0);' + CRLF;
            if(this.#obj_webs.tester_les_dependances_dans_le_php === 1){
                let nom_du_champ_cle='';
                for(let id_champcle in this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs){
                    let elem=this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs[id_champcle];
                    if(elem.primary_key === 1){
                        nom_du_champ_cle=elem.nom_du_champ;
                    }
                }
                if(nom_du_champ_cle !== ''){
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
                    t+='        $donnees_retournees[__x_signaux][__xer][]=\' erreur lors de la suppression, il existe des dépendances sql_' + id_requete_en_base + '() [\' . __LINE__ . \']\';' + CRLF;
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
            t+='        return array(/**/' + CRLF;
            t+='            __xst => __xer , ' + CRLF;
            t+='            \'sql0\' => $sql0 , ' + CRLF;
            t+='            \'texte_requete\' => \'la suppression dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\' ,' + CRLF;
            t+='            \'exception\' => $e , ' + CRLF;
            t+='            \'id_bdd\' => ' + obj3.id_base_principale + ',' + CRLF;
            t+='            \'bdd\' => $GLOBALS[__BDD][' + obj3.id_base_principale + '] ,' + CRLF;
            t+='        );' + CRLF;
            t+='    }' + CRLF;
        }else if(type_de_requete === 'insert'){
            let champ_date_modification='';
            let format_date_modification=0;
            let champ_date_creation='';
            let format_date_creation=0;
            for( let i=1 ; i < obj3.matriceFonction.length ; i=obj3.matriceFonction[i][12] ){
                if(obj3.matriceFonction[i][1] === 'insérer' && obj3.matriceFonction[i][2] === 'f'){
                    for( let j=i + 1 ; j < obj3.matriceFonction.length ; j=obj3.matriceFonction[j][12] ){
                        if(obj3.matriceFonction[j][1] === 'complements' && obj3.matriceFonction[j][2] === 'f'){
                            for( let k=j + 1 ; k < obj3.matriceFonction.length ; k=obj3.matriceFonction[k][12] ){
                                if(obj3.matriceFonction[k][1] === 'gerer_champ_date_modification' && obj3.matriceFonction[k][2] === 'f'){
                                    for( let l=k + 1 ; l < obj3.matriceFonction.length ; l=obj3.matriceFonction[l][12] ){
                                        if(obj3.matriceFonction[l][1] === 'champ' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            champ_date_modification=obj3.matriceFonction[l + 1][1];
                                        }else if(obj3.matriceFonction[l][1] === 'format' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            format_date_modification=parseInt( obj3.matriceFonction[l + 1][1] , 10 );
                                        }
                                    }
                                }else if(obj3.matriceFonction[k][1] === 'gerer_champ_date_creation' && obj3.matriceFonction[k][2] === 'f'){
                                    for( let l=k + 1 ; l < obj3.matriceFonction.length ; l=obj3.matriceFonction[l][12] ){
                                        if(obj3.matriceFonction[l][1] === 'champ' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            champ_date_creation=obj3.matriceFonction[l + 1][1];
                                        }else if(obj3.matriceFonction[l][1] === 'format' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            format_date_creation=parseInt( obj3.matriceFonction[l + 1][1] , 10 );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
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
                tableau_des_insert.push( '        $liste_des_valeurs.=PHP_EOL.\'      ' + obj3.tableau_des_valeurs_pour_insert[i] + '\'' );
            }
            if(champ_date_modification !== '' && format_date_modification === 23){
                tableau_des_insert.push( '        $liste_des_valeurs.=PHP_EOL.\'      \'.sq1($GLOBALS[__date_ms]).\'\'' );
            }
            if(champ_date_creation !== '' && format_date_creation === 23){
                tableau_des_insert.push( '        $liste_des_valeurs.=PHP_EOL.\'      \'.sq1($GLOBALS[__date_ms]).\'\'' );
            }
            t+=tableau_des_insert.join( '.\',\';' + CRLF );
            if(tableau_des_insert.length > 0){
                t+=';';
            }else{
                return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + 'pas de valeur pour insert'} ));
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
                      var tableau1=__gi1.__m_rev1.txt_en_tableau(formule);
                      var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                    */
                    var matriceFonction=__gi1.__m_rev1.rev_tm( formule );
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
                                                    return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + 'fonction dans update conditions "' + tab[l][1] + '"'} ));
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
                            // type_du_champ // espece_du_champ
                            tableau_des_champs_en_sortie.push( {
                                    "non_du_champ_en_bdd" : nom_du_champ ,
                                    "valeur_du_champ" : valeur_du_champ ,
                                    "encadrement_variable" : encadrement_variable ,
                                    "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                                    "type_de_champ" : type_de_champ
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
                     /*afr pourquoi ???? */
                     debugger
                    }
                    tableau_des_champs_en_sortie.push( {
                            "non_du_champ_en_bdd" : nom_du_champ ,
                            "valeur_du_champ" : '\'.sq0($par[\'n_' + nom_du_champ + '\']).\'' ,
                            "encadrement_variable" : encadrement_variable ,
                            "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                            "type_de_champ" : 'variable'
                        } );
                }
            }
            if(tableau_des_champs_en_sortie.length === 0){
                return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ' il manque les champs en sortie '} ));
            }
            var liste_des_champs_pour_update3='';
            for( var i=0 ; i < tableau_des_champs_en_sortie.length ; i++ ){
                var la_sortie=tableau_des_champs_en_sortie[i];
                if(la_sortie.type_de_champ === 'constante'){
                    liste_des_champs_pour_update3+='    $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\';' + CRLF;
                }else{
                    liste_des_champs_pour_update3+='    if($par[\'n_' + la_sortie.non_du_champ_en_bdd + '\']===\'\' || is_null($par[\'n_' + la_sortie.non_du_champ_en_bdd + '\']) ){' + CRLF;
                    liste_des_champs_pour_update3+='        $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = NULL\';' + CRLF;
                    liste_des_champs_pour_update3+='    }else{' + CRLF;
                    liste_des_champs_pour_update3+='        $tableau_champs[]=\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\';' + CRLF;
                    liste_des_champs_pour_update3+='    }' + CRLF;
                }
            }
            for( let i=1 ; i < obj3.matriceFonction.length ; i=obj3.matriceFonction[i][12] ){
                if(obj3.matriceFonction[i][1] === 'modifier' && obj3.matriceFonction[i][2] === 'f'){
                    for( let j=i + 1 ; j < obj3.matriceFonction.length ; j=obj3.matriceFonction[j][12] ){
                        if(obj3.matriceFonction[j][1] === 'complements' && obj3.matriceFonction[j][2] === 'f'){
                            for( let k=j + 1 ; k < obj3.matriceFonction.length ; k=obj3.matriceFonction[k][12] ){
                                if(obj3.matriceFonction[k][1] === 'gerer_champ_date_modification' && obj3.matriceFonction[k][2] === 'f'){
                                    let champ='';
                                    let format='';
                                    for( let l=k + 1 ; l < obj3.matriceFonction.length ; l=obj3.matriceFonction[l][12] ){
                                        if(obj3.matriceFonction[l][1] === 'champ' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            champ=obj3.matriceFonction[l + 1][1];
                                        }else if(obj3.matriceFonction[l][1] === 'format' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            format=parseInt( obj3.matriceFonction[l + 1][1] , 10 );
                                        }
                                    }
                                    if(champ !== '' && format === 23){
                                        liste_des_champs_pour_update3+=CRLF + '    $tableau_champs[]=\'`' + champ + '` = \\\'\'.$GLOBALS[__date_ms].\'\\\'\';';
                                    }else{
                                        return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ' erreur complements gerer_champ_date_modification '} ));
                                    }
                                }else if(obj3.matriceFonction[k][1] === 'gerer_champ_numero_de_revision' && obj3.matriceFonction[k][2] === 'f'){
                                    let champ='';
                                    let format='';
                                    for( let l=k + 1 ; l < obj3.matriceFonction.length ; l=obj3.matriceFonction[l][12] ){
                                        if(obj3.matriceFonction[l][1] === 'champ' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            champ=obj3.matriceFonction[l + 1][1];
                                        }else if(obj3.matriceFonction[l][1] === 'format' && obj3.matriceFonction[l][2] === 'f' && obj3.matriceFonction[l][8] === 1){
                                            format=parseInt( obj3.matriceFonction[l + 1][1] , 10 );
                                        }
                                    }
                                    if(champ !== ''){
                                        liste_des_champs_pour_update3+=CRLF + '    $tableau_champs[]=\'`' + champ + '` = `' + champ + '`+1  \';';
                                    }else{
                                        return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ' erreur complements gerer_champ_numero_de_revision '} ));
                                    }
                                }
                            }
                        }
                    }
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
                var tableau2=__gi1.__m_rev1.txt_en_tableau( formule );
                var matriceFonction=__gi1.__m_rev1.tb_vers_matrice( tableau2.__xva , true , false , '' );
                var les_conditions=this.__m_rev_vers_sql1.c_tab_vers_sql( matriceFonction.__xva , {"au_format_php" : true} );
                if(les_conditions.__xst === __xsu){
                    t+='    $where0=\' WHERE ' + les_conditions.__xva + '\'.PHP_EOL;' + CRLF;
                }else{
                    return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ' conversion en php '} ));
                }
                /* tableau_des_conditions=this.#obtenir_le_tableau_des_conditions( this.#obj_webs.conditions[0].formule , obj3 ); */
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
            t+='        $donnees_retournees[__x_signaux][__xif][]=\'info <b>sql_' + id_requete_en_base + '</b>\';' + CRLF;
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
                  var tableau1=__gi1.__m_rev1.txt_en_tableau(formule);
                  var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                */
                var matriceFonction=__gi1.__m_rev1.rev_tm( formule );
                var tab=matriceFonction.__xva;
                var l01=tab.length;
                var options={
                    "au_format_php" : true ,
                    "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
                    "pour_where" : true ,
                    "type_de_champ_pour_where" : '' ,
                    "nom_du_champ_pour_where" : ''
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
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                                        } );
                                                }else{
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'variable' ,
                                                            "valeur" : obj.__xva ,
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
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.__xva ,
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
            }
            var i=0;
            for( i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='    $where0.=\' AND ' + elem.valeur + '\'.PHP_EOL;' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    t+='    if((' + elem.condition + ' !== \'\')){' + CRLF;
                    if((elem.type.toLowerCase() === 'integer' || elem.type.toLowerCase() === 'int') && elem.operation === 'egal'){
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
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      =============================================================================================================
    */
    transform_source_rev_vers_sql( source_rev , id_requete ){
        /*
          var tableau1=__gi1.__m_rev1.txt_en_tableau(source_rev);
          var obj1=functionToArray2(tableau1.__xva,false,true,'');
        */
        var obj1=__gi1.__m_rev1.rev_tm( source_rev );
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
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {"au_format_php" : true ,"sur_base_de_reference" : this.#obj_webs.sur_base_de_reference} );
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
                        return({"__xst" : __xsu ,"source_sql" : obj2.__xva ,"source_php" : obj4.__xva ,"matrice_requete" : matrice_requete});
                    }else{
                        return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"__xme" : __gi1.__m_rev1.nl2() + 'conversion en php '} ));
                    }
                }else{
                    return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"message" : __gi1.__m_rev1.nl2() + 'conversion en sql '} ));
                }
            }else{
                return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + 'conversion en sql '} ));
            }
        }else{
            return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + ''} ));
        }
    }
    /*
      =============================================================================================================
      =============================================================================================================
      matricée
    */
    transform_textarea_rev_vers_sql( mat ){
        let txtarea_source='';
        let txtarea_dest='';
        let id_requete=0;
        let effacer_la_pile_des_messages=0;
        for( let i=0 ; i < mat.length ; i++ ){
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
        if( typeof globale_requete_en_cours === 'undefined'){
            /*
              ne rien faire
            */
        }else if( typeof globale_requete_en_cours === 'object'){
            if(effacer_la_pile_des_messages === 1){
                __gi1.supprimer_les_messages();
            }
            __gi1.masquer_les_messages( '' );
            var obj1=this.transform_source_rev_vers_sql( document.getElementById( txtarea_source ).value , id_requete );
            if(obj1.__xst === __xsu){
                document.getElementById( txtarea_dest ).value=obj1.source_sql;
                document.getElementById( 'txtar3' ).value=obj1.source_php;
            }else{
                if(obj1.hasOwnProperty( 'source_sql' )){
                    document.getElementById( txtarea_dest ).value=obj1.source_sql;
                }
            }
            __gi1.remplis_les_messages_et_affiche( '' );
        }
    }
    /*
      =============================================================================================================
    */
    traiter_donnees_bases_rev( par , bases_du_projet=null ){ 
        this.#obj_init['chi_id_requete_initiale']=par['chi_id_requete_initiale'];
        this.#obj_init['cht_rev_requete_initiale']=par['cht_rev_requete_initiale'];
        this.#obj_init['chp_type_requete_initiale']=par['chp_type_requete_initiale'];
        this.#obj_init['cht_commentaire_requete_initiale']=par['cht_commentaire_requete_initiale'];
        this.#obj_init['bases']={};
        var i={};
        for(i in par['donnees_des_bases_du_projet']){
            /* donnees.__xva]{ */
            if(par['donnees_des_bases_du_projet'][i]['T0.chp_rev_travail_basedd'] === null){
                this.#obj_init['bases'][par['donnees_des_bases_du_projet'][i]['T0.chi_id_basedd']]={
                    "chi_id_basedd" : par['donnees_des_bases_du_projet'][i]['T0.chi_id_basedd'] ,
                    "chp_rev_travail_basedd" : '' ,
                    "matrice" : [] ,
                    "tables" : {} ,
                    "selectionne" : false
                };
            }else{
                if(bases_du_projet === null){
                    var obj2=__gi1.__m_rev1.rev_tm( par['donnees_des_bases_du_projet'][i]['T0.chp_rev_travail_basedd'] );
                    if(obj2.__xst === __xsu){
                        this.#obj_init['bases'][par['donnees_des_bases_du_projet'][i]['T0.chi_id_basedd']]={
                            "chi_id_basedd" : par['donnees_des_bases_du_projet'][i]['T0.chi_id_basedd'] ,
                            "chp_rev_travail_basedd" : par['donnees_des_bases_du_projet'][i]['T0.chp_rev_travail_basedd'] ,
                            "matrice" : obj2.__xva ,
                            "tables" : {} ,
                            "selectionne" : false
                        };
                    }
                }else{
                    this.#obj_init['bases'][par['donnees_des_bases_du_projet'][i]['T0.chi_id_basedd']]={
                        "chi_id_basedd" : par['donnees_des_bases_du_projet'][i]['T0.chi_id_basedd'] ,
                        "chp_rev_travail_basedd" : par['donnees_des_bases_du_projet'][i]['T0.chp_rev_travail_basedd'] ,
                        "matrice" : bases_du_projet[i].matrice ,
                        "tables" : {} ,
                        "selectionne" : false
                    };
                }
            }
        }
        for(let ind in this.#obj_init['bases']){
            var tab=this.#obj_init['bases'][ind]['matrice'];
            var l01=tab.length;
            for( let i=1 ; i < l01 ; i=tab[i][12] ){
                if(tab[i][1] === 'créer_table' && tab[i][2] === 'f'){
                    var nom_de_la_table='';
                    var la_classe_de_la_table='';
                    for( let j=i + 1 ; j < l01 ; j=tab[j][12] ){
                        if("nom_de_la_table" === tab[j][1] && tab[j][2] === 'f'){
                            nom_de_la_table=tab[j + 1][1];
                            this.#obj_init['bases'][ind]['tables'][nom_de_la_table]={"active" : false ,"champs" : []};
                            break;
                        }
                    }
                    for( let j=i + 1 ; j < l01 ; j=tab[j][12] ){
                        if("champs" === tab[j][1] && tab[j][2] === 'f'){
                            for( let k=j + 1 ; k < l01 ; k=tab[k][12] ){
                                if(tab[k][1] === 'champ' && tab[k][2] === 'f'){
                                    var le_champ={
                                        "nom_du_champ" : '' ,
                                        "non_nulle" : 0 ,
                                        "type" : '' ,
                                        "actif" : false ,
                                        "primary_key" : 0,
                                        "espece_du_champ" : '' ,
                                        "a_une_valeur_par_defaut" : 0 ,
                                        "la_valeur_par_defaut_est_caractere" : 0,
                                        "valeur_par_defaut" : '',
                                        "typologie" : '' ,
                                        
                                    };
                                    for( let l=k + 1 ; l < l01 ; l=tab[l][12] ){
                                        if(tab[l][1] === 'nom_du_champ' && tab[l][2] === 'f'){
                                            le_champ.nom_du_champ=tab[l + 1][1];
                                        }else if(tab[l][1] === 'type' && tab[l][2] === 'f'){
                                            le_champ.type=tab[l + 1][1];
                                        }else if(tab[l][1] === 'non_nulle' && tab[l][2] === 'f'){
                                            le_champ.non_nulle=parseInt( tab[l + 1][1] , 10 );
                                        }else if(tab[l][1] === 'primary_key' && tab[l][2] === 'f'){
                                            le_champ.primary_key=parseInt( tab[l + 1][1] , 10 );
                                        }else if(tab[l][1] === 'espece_du_champ' && tab[l][2] === 'f'){
                                            le_champ.espece_du_champ=tab[l + 1][1];
                                        }else if(tab[l][1] === 'a_une_valeur_par_defaut' && tab[l][2] === 'f'){
                                            le_champ.a_une_valeur_par_defaut=parseInt(tab[l + 1][1],10);
                                        }else if(tab[l][1] === 'la_valeur_par_defaut_est_caractere' && tab[l][2] === 'f'){
                                            le_champ.la_valeur_par_defaut_est_caractere=parseInt(tab[l + 1][1],10);
                                        }else if(tab[l][1] === 'valeur_par_defaut' && tab[l][2] === 'f'){
                                            le_champ.valeur_par_defaut=tab[l + 1][1];
                                        }else if(tab[l][1] === 'valeur_par_defaut' && tab[l][2] === 'f'){
                                            le_champ.valeur_par_defaut=tab[l + 1][1];
                                        }else if(tab[l][1] === 'meta' && tab[l][2] === 'f'){
                                            for( let m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                                if(tab[m][1] === 'typologie' && tab[m][2] === 'f'){
                                                    le_champ.typologie=tab[m + 1][1];
                                                }
                                            }
                                         
                                        }
                                    }
                                    this.#obj_init['bases'][ind]['tables'][nom_de_la_table]['champs'].push( le_champ );
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    traiter_donnees_bases( par ){
        /* console.log( par ); */
        this.traiter_donnees_bases_rev( par );
        if(par.fonction_appelee_apres_chargement !== ''){
            this[par.fonction_appelee_apres_chargement]( this.#obj_init , this );
            var cmd='';
            cmd+='  txtarea_source(vv_zone_rev_01),';
            cmd+='  txtarea_dest(txtar2),';
            cmd+='  id_requete(' + this.#globale_id_requete + '),';
            cmd+='  effacer_la_pile_des_messages(0),';
            let mat=__gi1.__m_rev1.rev_tcm( cmd );
            this.transform_textarea_rev_vers_sql( mat.__xva );
            __gi1.remplis_les_messages_et_affiche( '' );
        }else{
            this.#obj_webs=JSON.parse( JSON.stringify( this.#obj_init ) );
            this.#mettre_en_stokage_local_et_afficher();
            /* document.location='zz_requetes_a1.php'; */
        }
    }
    /*
      =============================================================================================================
      =============================================================================================================
      function nouvelle
    */
    nouvelle( fonction_appelee_apres_chargement ){
        this.#obj_init={
            "type_de_requete" : 'select' ,
            "bases" : {} ,
            "ordre_des_tables" : [] ,
            "nom_zone_cible" : 'champs_sortie' ,
            "indice_table_pour_jointure_gauche" : 0 ,
            "gauche_0_droite_1" : 0 ,
            "champs_sortie" : [] ,
            "conditions" : [] ,
            "complements" : [] ,
            "tableau_des_bases_tables_champs" : {}
        };
        let obj={
            "__x_action" : 'c_requetes1.recuperer_les_bases_du_projet_en_cours()' ,
            "__xva" : {"fonction_appelee_apres_chargement" : fonction_appelee_apres_chargement ,"id_requete" : parseInt( this.#globale_id_requete , 10 )}
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
}
export{c_requete_sql1 as c_requete_sql1};