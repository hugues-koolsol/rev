import {_developpement1} from '/f0?n0=_developpement1_c.js';
import {w_rev_vers_js1} from './f0?n0=w_rev_vers_js1_.js';
/*
  enrichir_objet_base
*/
class x_ecran_generer_programmes1{
    /*
      ref_select=146
      ref_insert=147
      ref_delete=149
      ref_update=148
      ref_liste_ecran=145
    */
    moi='x_ecran_generer_programmes1';
    #liste_des_types_de_requetes={
         /*  */
        "liste_ecran" : false ,
        "select" : false ,
        "insert" : false ,
        "update" : false ,
        "delete" : false
    };
    #chp_rev_travail_basedd=null;
    #nom_de_la_table=null;
    #nom_ref=null;
    /* u tilisateurs */
    /* #chemin_module1=null; */
    #nom_de_la_classe_générée1=null;
    #nom_de_la_classe_générée2=null;
    /* c_u tilisateurs1 */
    #mat=null;
    #obj_bdd={};
    #obj_table={};
    #liste_de_tables_liste_ecran=[];
    #les_bases={};
    #_developpement1=null;
    __ig1=null;
    chi_id_projet=0;
    #dependances={};
    #rev_fragment_mat=null;
    #objet_conversion_rev_vers_js=null;
    #liste_des_liens_dejà_definis={};
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        this.__ig1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1_c.js' );
        /* this.#chemin_module1=obj_init.chemin_module1; */
        /* debugger; */
        /* console.log( 'ici' ); */
        this.#_developpement1=new _developpement1( [] , 0 , this.__ig1 );
        this.#objet_conversion_rev_vers_js=new w_rev_vers_js1( '#objet_conversion_rev_vers_js' , this.__ig1 );
    }
    /*
      =============================================================================================================
    */
    recupere_elements_pour_générer_les_programmes1_clic( mat , d ){
        let obj_clic={
            "ne_pas_prendre_les_valeurs_en_session" : document.getElementById( 'ne_pas_prendre_les_valeurs_en_session' ).checked ? ( 1 ) : ( 0 ) ,
            "pour_sous_liste_uniquement" : document.getElementById( 'pour_sous_liste_uniquement' ).checked ? ( 1 ) : ( 0 ) ,
            "ref_select" : document.getElementById( 'reference_requete_select' ).value === '' ?
              ( 
                0
              ) : ( 
                parseInt( document.getElementById( 'reference_requete_select' ).value , 10 )
              ) ,
            "ref_insert" : document.getElementById( 'reference_requete_insert' ).value === '' ?
              ( 
                0
              ) : ( 
                parseInt( document.getElementById( 'reference_requete_insert' ).value , 10 )
              ) ,
            "ref_update" : document.getElementById( 'reference_requete_update' ).value === '' ?
              ( 
                0
              ) : ( 
                parseInt( document.getElementById( 'reference_requete_update' ).value , 10 )
              ) ,
            "ref_delete" : document.getElementById( 'reference_requete_delete' ).value === '' ?
              ( 
                0
              ) : ( 
                parseInt( document.getElementById( 'reference_requete_delete' ).value , 10 )
              )
        };
        return(this.recupere_elements_pour_générer_les_programmes( [] , 0 , null , obj_clic ));
    }
    /*
      =============================================================================================================
    */
    recupere_elements_pour_générer_les_programmes( mat , d , le_colis=null , obj_clic={} ){
        if(le_colis === null){
            this.#rev_fragment_mat=null;
            let chi_id_basedd_de_reference=parseInt( document.getElementById( 'vv_les_bases' ).value , 10 );
            let table_de_reference=document.getElementById( 'vv_les_tables' ).value;
            let indice_de_la_classe=document.getElementById( 'vv_indice_de_la_classe' ).value;
            let obj={
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recupere_elements_pour_générer_les_programmes())))' ,
                "__xva" : {
                     /*  */
                    "chi_id_basedd_de_reference" : chi_id_basedd_de_reference ,
                    "table_de_reference" : table_de_reference ,
                    "indice_de_la_classe" : indice_de_la_classe ,
                    "obj_clic" : obj_clic
                }
            };
            this.__ig1.envoyer_un_colis_au_worker( obj );
            return({"__xst" : __xsu});
        }else{
            if(le_colis.__xva.rev_fragment !== null){
                for(let j in le_colis.__xva.rev_fragment){
                    let objs=this.__ig1.__rev1.rev_tm( le_colis.__xva.rev_fragment[j] );
                    if(objs.__xst !== __xsu){
                        return({"__xst" : __xer ,"__xme" : 'erreur de convertion du fragment serveur'});
                    }
                    if(this.#rev_fragment_mat === null){
                        this.#rev_fragment_mat={};
                    }
                    this.#rev_fragment_mat[j]=objs.__xva;
                }
            }
            if(le_colis.__xva.le_source_n_existe_pas === false){
                if(le_colis.__xva.tab_ref !== null){
                    for(let i in le_colis.__xva.tab_ref){
                        if(i.substr( 0 , 4 ) === 'ref_'){
                            let nom_de_zone_select=i.replace( /ref_/ , 'reference_requete_' );
                            let nom_de_zone_requete=i.replace( /ref_/ , 'libelle_de_la_requete_' );
                            if(le_colis.__xva.tab_ref[i] > 0){
                                document.getElementById( nom_de_zone_select ).value=le_colis.__xva.tab_ref[i];
                                document.getElementById( nom_de_zone_requete ).innerHTML=this.__ig1.__liste_des_sql[le_colis.__xva.tab_ref[i]].cht_sql_requete;
                            }else{
                                document.getElementById( nom_de_zone_select ).value='';
                                document.getElementById( nom_de_zone_requete ).innerHTML='';
                            }
                        }else if(i === 'ne_pas_prendre_les_valeurs_en_session'){
                            if(le_colis.__xva.tab_ref[i] === 0){
                                document.getElementById( 'ne_pas_prendre_les_valeurs_en_session' ).checked=false;
                            }else{
                                document.getElementById( 'ne_pas_prendre_les_valeurs_en_session' ).checked=true;
                            }
                        }else if(i === 'pour_sous_liste_uniquement'){
                            if(le_colis.__xva.tab_ref[i] === 0){
                                document.getElementById( 'pour_sous_liste_uniquement' ).checked=false;
                            }else{
                                document.getElementById( 'pour_sous_liste_uniquement' ).checked=true;
                            }
                        }
                    }
                }
                this.#liste_des_liens_dejà_definis={};
                if(le_colis.__xva.tab_liens_parents.length > 0){
                    /*
                      lien_parent2( 'affectations_aux_missions2' , 'fld_id_affectation_prestation' , 'fld_id_affectation_prestation_libelle' , this.moi )
                    */
                    /* console.log(le_colis.__xva.tab_liens_parents , zone_references_liens_externes); */
                    let liens_trouves=false;
                    let obj1=this.__ig1.__rev1.rev_tm( le_colis.__xva.tab_liens_parents.join( ',' ) );
                    /* zone_references_liens_externes */
                    if(obj1.__xst === __xsu){
                        let mat1=obj1.__xva;
                        let l01=mat1.length;
                        for( let i=1 ; i < l01 ; i=mat1[i][12] ){
                            if(mat1[i][1] === 'lien_parent2'
                                   && mat1[i][2] === 'f'
                                   && mat1[i][8] >= 2
                                   && mat1[i + 1][2] === 'c'
                                   && mat1[i + 2][2] === 'c'
                            ){
                                this.#liste_des_liens_dejà_definis[mat1[i + 2][1]]=mat1[i + 1][1];
                                liens_trouves=true;
                            }
                        }
                    }
                    if(liens_trouves === true){
                        let o2='<table border="1">';
                        for(let i in this.#liste_des_liens_dejà_definis){
                            o2+='<tr>';
                            o2+='<td>';
                            o2+=i;
                            o2+='</td>';
                            o2+='<td>';
                            o2+=this.#liste_des_liens_dejà_definis[i];
                            o2+='</td>';
                            o2+='</tr>';
                        }
                        o2+='</table>';
                        document.getElementById( 'zone_references_liens_externes' ).innerHTML=o2;
                    }
                    /* tab_liens_parents , zone_references_liens_externes */
                    console.log( 'this.#liste_des_liens_dejà_definis=' , this.#liste_des_liens_dejà_definis );
                }
            }
            return(this.générer_les_programmes());
        }
    }
    /*
      =============================================================================================================
    */
    générer_les_programmes( mat , d ){
        let src_client2='';
        let src_serveur_js2='';
        let chi_id_basedd_de_reference=parseInt( document.getElementById( 'vv_les_bases' ).value , 10 );
        let table_de_reference=document.getElementById( 'vv_les_tables' ).value;
        /*
          généralement, ne_pas_prendre_les_valeurs_en_session est décoché ( false )
          cad que les champs de la table qui sont marqués en session ( utilisateur , projet , acces )
          sont pris à partir de ceux de session
        */
        let ne_pas_prendre_les_valeurs_en_session=document.getElementById( 'ne_pas_prendre_les_valeurs_en_session' ).checked ? ( 1 ) : ( 0 );
        let pour_sous_liste_uniquement=document.getElementById( 'pour_sous_liste_uniquement' ).checked ? ( 1 ) : ( 0 );
        console.log( '%c référence : base=' + chi_id_basedd_de_reference + ' , table=' + table_de_reference , 'background:lightblue;' );
        /*
          si des_champs_sont_references_dans_une_autre_table === true
          ça veut dire qu'il faut prévoir une sous liste qui 
          sera utilisée dans d'autres écrans
        */
        let des_champs_sont_references_dans_une_autre_table=false;
        for(let i in this.#dependances){
            let ref_base=parseInt( i , 10 );
            for(let j in this.#dependances[i]){
                if(ref_base === chi_id_basedd_de_reference && this.#dependances[i][j].table_mere === table_de_reference){
                    des_champs_sont_references_dans_une_autre_table=true;
                    break;
                }
            }
        }
        let des_champs_dependent_d_une_autre_table=false;
        for(let i in this.#dependances){
            let ref_base=parseInt( i , 10 );
            for(let j in this.#dependances[i]){
                if(this.#dependances[i][j].base_fille === chi_id_basedd_de_reference
                       && this.#dependances[i][j].table_fille === table_de_reference
                ){
                    des_champs_dependent_d_une_autre_table=true;
                    break;
                }
            }
        }
        let def_table=this.#obj_bdd[this.#nom_de_la_table];
        let indice_de_la_classe=document.getElementById( 'vv_indice_de_la_classe' ).value;
        if(this.#nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
            this.#nom_ref=this.#nom_de_la_table.substr( 4 );
            this.#nom_de_la_classe_générée1='c_' + this.#nom_ref + indice_de_la_classe;
            this.#nom_de_la_classe_générée2=this.#nom_ref + indice_de_la_classe;
        }else{
            this.#nom_ref=this.#nom_de_la_table;
            this.#nom_de_la_classe_générée1='c_' + this.#nom_ref + indice_de_la_classe;
            this.#nom_de_la_classe_générée2=this.#nom_ref + indice_de_la_classe;
        }
        let champ_primaire='';
        for(let i in this.#obj_table.champs){
            if(this.#obj_table.champs[i].genre_objet_du_champ.che_est_incrément_genre === 1
                   || this.#obj_table.champs[i].genre_objet_du_champ.che_est_primaire_genre === 1
                   || this.#obj_table.champs[i].primary_key === true
            ){
                champ_primaire=i;
                break;
            }
        }
        if(champ_primaire === ''){
            return({"__xst" : __xer ,"__xme" : 'le champ primaire est absent de cette table<br /> [' + this.__ig1.nl2() + ']'});
        }
        let ref_select=document.getElementById( 'reference_requete_select' ).value;
        let ref_insert=document.getElementById( 'reference_requete_insert' ).value;
        let ref_delete=document.getElementById( 'reference_requete_delete' ).value;
        let ref_update=document.getElementById( 'reference_requete_update' ).value;
        let ref_liste_ecran=document.getElementById( 'reference_requete_liste_ecran' ).value;
        let champ_est_libelle_lien=null;
        let liste_des_champs_insert=[];
        if(ref_insert !== ''){
            let objet_requete_insert=this.__ig1.__liste_des_sql[ref_insert];
            let matrice_insert=this.__ig1.__rev1.rev_tm( objet_requete_insert.cht_rev_requete );
            if(matrice_insert.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
            }
            let mati=matrice_insert.__xva;
            for( let i=1 ; i < mati.length ; i=mati[i][12] ){
                if(mati[i][1] === 'insérer' && mati[i][2] === 'f'){
                    for( let j=i + 1 ; j < mati.length ; j=mati[j][12] ){
                        if(mati[j][1] === 'valeurs' && mati[j][2] === 'f'){
                            for( let k=j + 1 ; k < mati.length ; k=mati[k][12] ){
                                if(mati[k][1] === 'affecte' && mati[k][2] === 'f'){
                                    for( let l=k + 1 ; l < mati.length ; l=mati[l][12] ){
                                        if(mati[l][1] === 'champ' && mati[l][2] === 'f' && mati[l][8] === 1 && mati[l + 1][2] === 'c'){
                                            liste_des_champs_insert.push( {"nom_du_champ" : mati[l + 1][1]} );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for(let i in liste_des_champs_insert){
                let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_insert[i].nom_du_champ];
                liste_des_champs_insert[i].champ_dans_la_base=champ_dans_la_base;
                /*#
                  if(champ_dans_la_base.nom_du_champ === 'fld_id_commercial_client'){
                      //debugger 
                  }
                */
                if(champ_est_libelle_lien === null){
                    if(champ_dans_la_base.meta.hasOwnProperty( 'est_libelle_lien' ) && champ_dans_la_base.meta.est_libelle_lien === '1'){
                        champ_est_libelle_lien=liste_des_champs_insert[i];
                    }
                }
            }
        }
        let mats=null;
        let liste_des_champs_condition_select=[];
        let liste_des_champs_select=[];
        if(ref_select !== ''){
            let objet_requete_select=this.__ig1.__liste_des_sql[ref_select];
            let matrice_select=this.__ig1.__rev1.rev_tm( objet_requete_select.cht_rev_requete );
            if(matrice_select.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
            }
            mats=matrice_select.__xva;
            for( let i=1 ; i < mats.length ; i=mats[i][12] ){
                if(mats[i][1] === 'sélectionner' && mats[i][2] === 'f'){
                    for( let j=i + 1 ; j < mats.length ; j=mats[j][12] ){
                        if(mats[j][1] === 'valeurs' && mats[j][2] === 'f'){
                            for( let k=j + 1 ; k < mats.length ; k=mats[k][12] ){
                                if(mats[k][1] === 'champ' && mats[k][2] === 'f'){
                                    if(mats[k][8] === 2){
                                        if(mats[k + 1][1] === 'T0'){
                                            liste_des_champs_select.push( {
                                                    "prefixe_du_champ" : mats[k + 1][1] ,
                                                    "nom_du_champ" : mats[k + 2][1] ,
                                                    "alias_table_mere" : '' ,
                                                    "table_mere" : this.#obj_table.champs[mats[k + 2][1]].table_mere??'' ,
                                                    "champ_pere" : this.#obj_table.champs[mats[k + 2][1]].champ_pere??''
                                                } );
                                        }else{
                                            liste_des_champs_select.push( {"prefixe_du_champ" : mats[k + 1][1] ,"nom_du_champ" : mats[k + 2][1] ,"alias_table_mere" : '' ,"table_mere" : '' ,"champ_pere" : ''} );
                                        }
                                    }else{
                                        debugger;
                                    }
                                }
                            }
                        }else if(mats[j][1] === 'conditions' && mats[j][2] === 'f'){
                            for( let k=j + 1 ; k < mats.length ; k++ ){
                                if(mats[k][1] === 'champ' && mats[k][2] === 'f'){
                                    if(mats[k][8] === 1 && mats[k + 1][2] === 'c'){
                                        liste_des_champs_condition_select.push( {"nom_du_champ" : mats[k + 1][1] ,"champ_dans_la_base" : null} );
                                    }else if(mats[k][8] === 2 && mats[k + 1][2] === 'c'){
                                        liste_des_champs_condition_select.push( {"nom_du_champ" : mats[k + 2][1] ,"champ_dans_la_base" : null} );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for(let i in liste_des_champs_condition_select){
            let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_select[i].nom_du_champ];
            liste_des_champs_condition_select[i].champ_dans_la_base=champ_dans_la_base;
        }
        let liste_des_champs_condition_delete=[];
        let liste_des_champs_delete=[];
        let matd=null;
        if(ref_delete !== ''){
            let objet_requete_delete=this.__ig1.__liste_des_sql[ref_delete];
            let matrice_delete=this.__ig1.__rev1.rev_tm( objet_requete_delete.cht_rev_requete );
            if(matrice_delete.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
            }
            matd=matrice_delete.__xva;
            for( let i=1 ; i < matd.length ; i=matd[i][12] ){
                if(matd[i][1] === 'supprimer' && matd[i][2] === 'f'){
                    for( let j=i + 1 ; j < matd.length ; j=matd[j][12] ){
                        if(matd[j][1] === 'conditions' && matd[j][2] === 'f'){
                            for( let k=j + 1 ; k < matd.length ; k++ ){
                                if(matd[k][1] === 'champ' && matd[k][2] === 'f' && matd[k][8] === 1 && matd[k + 1][2] === 'c'){
                                    liste_des_champs_condition_delete.push( {"nom_du_champ" : matd[k + 1][1] ,"champ_dans_la_base" : null} );
                                }
                            }
                        }
                    }
                }
            }
        }
        for(let i in liste_des_champs_condition_delete){
            let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_delete[i].nom_du_champ];
            liste_des_champs_condition_delete[i].champ_dans_la_base=champ_dans_la_base;
        }
        let liste_des_champs_update=[];
        let liste_des_champs_condition_update=[];
        let liste_des_champs_visualisation_update=[];
        let matu=null;
        if(ref_update !== ''){
            let objet_requete_update=this.__ig1.__liste_des_sql[ref_update];
            let matrice_update=this.__ig1.__rev1.rev_tm( objet_requete_update.cht_rev_requete );
            if(matrice_update.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
            }
            let matu=matrice_update.__xva;
            let lngumat=matu.length;
            for( let i=1 ; i < lngumat ; i=matu[i][12] ){
                if(matu[i][1] === 'modifier' && matu[i][2] === 'f'){
                    for( let j=i + 1 ; j < lngumat ; j=matu[j][12] ){
                        if(matu[j][1] === 'valeurs' && matu[j][2] === 'f'){
                            for( let k=j + 1 ; k < lngumat ; k=matu[k][12] ){
                                if(matu[k][1] === 'affecte' && matu[k][2] === 'f'){
                                    for( let l=k + 1 ; l < lngumat ; l=matu[l][12] ){
                                        if(matu[l][1] === 'champ' && matu[l][2] === 'f' && matu[l][8] === 1 && matu[l + 1][2] === 'c'){
                                            let nom_du_champ=matu[l + 1][1];
                                            let on_affecte_une_constante='';
                                            if(matu[k][8] === 2 && matu[matu[l][12]][2] === 'c' && matu[matu[l][12]][1].substr( 0 , 1 ) !== ':'){
                                                if(matu[matu[l][12]][4] === 0){
                                                    on_affecte_une_constante=matu[matu[l][12]][1];
                                                }else if(matu[matu[l][12]][4] === 1){
                                                    on_affecte_une_constante='\'' + matu[matu[l][12]][1] + '\'';
                                                }else{
                                                    debugger;
                                                }
                                            }
                                            let champ_session=false;
                                            let nom_champ_session='';
                                            if(this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'table_mere' )
                                                   && this.#obj_table.champs[nom_du_champ].table_mere !== ''
                                            ){
                                                if(this.#obj_bdd[this.#obj_table.champs[nom_du_champ].table_mere].champs[this.#obj_table.champs[nom_du_champ].champ_pere].meta.hasOwnProperty( 'est_en_session' )
                                                       && this.#obj_bdd[this.#obj_table.champs[nom_du_champ].table_mere].champs[this.#obj_table.champs[nom_du_champ].champ_pere].meta.est_en_session === '1'
                                                ){
                                                    champ_session=true;
                                                    nom_champ_session=this.#obj_table.champs[nom_du_champ].champ_pere;
                                                }
                                            }
                                            this.#obj_table.champs[nom_du_champ]['champ_session']=champ_session;
                                            liste_des_champs_update.push( {
                                                    "nom_du_champ" : nom_du_champ ,
                                                    "alias_table_mere" : '' ,
                                                    "table_mere" : this.#obj_table.champs[matu[l + 1][1]].table_mere??'' ,
                                                    "champ_pere" : this.#obj_table.champs[matu[l + 1][1]].champ_pere??'' ,
                                                    "nom_champ_session" : nom_champ_session ,
                                                    "on_affecte_une_constante" : on_affecte_une_constante
                                                } );
                                        }
                                    }
                                }
                            }
                        }else if(matu[j][1] === 'conditions' && matu[j][2] === 'f'){
                            for( let k=j + 1 ; k < lngumat ; k++ ){
                                if(matu[k][1] === 'champ' && matu[k][2] === 'f' && matu[k + 1][2] === 'c'){
                                    if(matu[k][8] === 1){
                                        let nom_du_champ=matu[k + 1][1];
                                        let champ_session=false;
                                        let nom_champ_session='';
                                        if(this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'table_mere' )
                                               && this.#obj_table.champs[nom_du_champ].table_mere !== ''
                                        ){
                                            if(this.#obj_bdd[this.#obj_table.champs[nom_du_champ].table_mere].champs[this.#obj_table.champs[nom_du_champ].champ_pere].meta.hasOwnProperty( 'est_en_session' )
                                                   && this.#obj_bdd[this.#obj_table.champs[nom_du_champ].table_mere].champs[this.#obj_table.champs[nom_du_champ].champ_pere].meta.est_en_session === '1'
                                            ){
                                                champ_session=true;
                                                nom_champ_session=this.#obj_table.champs[nom_du_champ].champ_pere;
                                            }
                                        }
                                        liste_des_champs_condition_update.push( {"nom_du_champ" : nom_du_champ ,"champ_dans_la_base" : null ,"champ_session" : champ_session ,"nom_champ_session" : nom_champ_session} );
                                    }else{
                                        this.__ig1.ajoute_message( {"__xst" : __xal ,"__xme" : 'la requete update contient une référence à un préfix de table ' + this.__ig1.__rev1.nl2()} );
                                        this.__ig1.affiche_les_messages();
                                    }
                                }
                            }
                        }else if(matu[j][1] === 'champs_visualisation' && matu[j][2] === 'f'){
                            let lngumat=matu.length;
                            for( let k=j + 1 ; k < lngumat ; k=matu[k][12] ){
                                if(matu[k][1] === 'champ' && matu[k][2] === 'f' && matu[k][8] === 2 && matu[k + 1][2] === 'c'){
                                    let trouve=false;
                                    for(let l in liste_des_champs_select){
                                        if(liste_des_champs_select[l].prefixe_du_champ === matu[k + 1][1]
                                               && liste_des_champs_select[l].nom_du_champ === matu[k + 2][1]
                                        ){
                                            /* si le champ est dans le select, on l'intègre */
                                            let nom_du_champ=matu[k + 2][1];
                                            let prefixe_du_champ=matu[k + 1][1];
                                            let chi_id_basedd=0;
                                            let nom_de_la_table='';
                                            for( let m=i + 1 ; m < lngumat && chi_id_basedd === 0 ; m=matu[m][12] ){
                                                if(matu[m][1] === 'provenance' && matu[m][2] === 'f'){
                                                    for( let n=m + 1 ; n < lngumat && chi_id_basedd === 0 ; n=matu[n][12] ){
                                                        if((matu[n][1] === 'table_reference'
                                                                   || matu[n][1] === 'jointure_croisée'
                                                                   || matu[n][1] === 'jointure_gauche')
                                                               && matu[n][2] === 'f'
                                                        ){
                                                            for( let o=n + 1 ; o < lngumat ; o=matu[o][12] ){
                                                                if(matu[o][1] === 'source' && matu[o][2] === 'f'){
                                                                    for( let p=o + 1 ; p < lngumat && chi_id_basedd === 0 ; p=matu[p][12] ){
                                                                        if(matu[p][1] === 'nom_de_la_table' && matu[p][2] === 'f'){
                                                                            /* && matu[p][8]===1 && matu[p+1][2]==='c' && matu[p+1][1]===prefixe_du_champ */
                                                                            for( let q=p + 1 ; q < lngumat && chi_id_basedd === 0 ; q=matu[q][12] ){
                                                                                if(matu[q][1] === 'alias'
                                                                                       && matu[q][2] === 'f'
                                                                                       && matu[q][8] === 1
                                                                                       && matu[q + 1][2] === 'c'
                                                                                       && matu[q + 1][1] === prefixe_du_champ
                                                                                ){
                                                                                    for( let r=p + 1 ; r < lngumat && chi_id_basedd === 0 ; r=matu[r][12] ){
                                                                                        if(matu[r][1] === 'base' && matu[r][2] === 'f' && matu[r][8] === 1 && matu[r + 1][2] === 'c'){
                                                                                            chi_id_basedd=parseInt( matu[r + 1][1].replace( /b/ , '' ) , 10 );
                                                                                            nom_de_la_table=matu[p + 1][1];
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
                                            if(chi_id_basedd > 0){
                                                let champ_dans_la_base={"chi_id_basedd" : chi_id_basedd ,"nom_de_la_table" : nom_de_la_table ,"nom_bref_du_champ" : '' ,"abrege_du_champ" : '' ,"genre" : ''};
                                                let matb=this.#les_bases[chi_id_basedd].matrice;
                                                /*
                                                  créer_table[
                                                  nom_de_la_table['clients'],
                                                  champs[
                                                  champ[
                                                  nom_du_champ['chi_id_client'],
                                                  espece_du_champ[INTEGER],
                                                  primary_key[1],
                                                  non_nulle[1],
                                                  meta[
                                                  genre_meta[champ],
                                                  nom_du_champ['chi_id_client'],
                                                  nom_bref_du_champ['id'],
                                                  abrege_du_champ['id'],
                                                  typologie[chi],
                                                  genre[2]
                                                  
                                                */
                                                let lngbmat=matb.length;
                                                for( let l=1 ; l < lngbmat && !trouve ; l=matb[l][12] ){
                                                    if(matb[l][1] === 'créer_table' && matb[l][2] === 'f'){
                                                        for( let m=l + 1 ; m < lngbmat && !trouve ; m=matb[m][12] ){
                                                            if(matb[m][1] === 'nom_de_la_table' && matb[m][2] === 'f' && matb[m + 1][1] === nom_de_la_table){
                                                                for( let o=l + 1 ; o < lngbmat && !trouve ; o=matb[o][12] ){
                                                                    if(matb[o][1] === 'champs' && matb[o][2] === 'f'){
                                                                        for( let p=o + 1 ; p < lngbmat && !trouve ; p=matb[p][12] ){
                                                                            if(matb[p][1] === 'champ' && matb[p][2] === 'f'){
                                                                                for( let q=p + 1 ; q < lngbmat && !trouve ; q=matb[q][12] ){
                                                                                    if(matb[q][1] === 'nom_du_champ' && matb[q][2] === 'f' && matb[q + 1][1] === nom_du_champ){
                                                                                        for( let r=p + 1 ; r < lngbmat && !trouve ; r=matb[r][12] ){
                                                                                            if(matb[r][1] === 'meta' && matb[r][2] === 'f'){
                                                                                                for( let s=r + 1 ; s < lngbmat ; s=matb[s][12] ){
                                                                                                    if(matb[s][1] === 'nom_bref_du_champ' && matb[s][2] === 'f'){
                                                                                                        champ_dans_la_base.nom_bref_du_champ=matb[s + 1][1];
                                                                                                    }else if(matb[s][1] === 'abrege_du_champ' && matb[s][2] === 'f'){
                                                                                                        champ_dans_la_base.abrege_du_champ=matb[s + 1][1];
                                                                                                    }else if(matb[s][1] === 'genre' && matb[s][2] === 'f'){
                                                                                                        champ_dans_la_base.genre=matb[s + 1][1];
                                                                                                    }
                                                                                                }
                                                                                                liste_des_champs_visualisation_update.push( {"prefixe_du_champ" : matu[k + 1][1] ,"nom_du_champ" : matu[k + 2][1] ,"champ_dans_la_base" : champ_dans_la_base} );
                                                                                                trouve=true;
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
                                                /* console.log( chi_id_basedd + ' ' + nom_de_la_table + ' ' + matu[k+2][1] ) */
                                                break;
                                            }
                                        }
                                    }
                                    if(trouve === false){
                                        console.log( '%c le champ visualisation ' + matu[k + 1][1] + '.' + matu[k + 2][1] + 'non trouvé dans la requete select ' , 'color:red;' );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for(let i in liste_des_champs_visualisation_update){
            let prefixe_du_champ=liste_des_champs_visualisation_update[i].prefixe_du_champ;
            let nom_du_champ=liste_des_champs_visualisation_update[i].nom_du_champ;
        }
        /* pour chaque champ de liste_des_champs_visualisation_update, il faut aller chercher le champ de la base */
        let update_contient_nur='';
        for(let i in liste_des_champs_condition_update){
            let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_update[i].nom_du_champ];
            if(champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1){
                update_contient_nur=liste_des_champs_condition_update[i].nom_du_champ;
            }
            liste_des_champs_condition_update[i].champ_dans_la_base=champ_dans_la_base;
        }
        let les_jointures=[];
        if(mats !== null){
            let l01s=mats.length;
            for( let i=1 ; i < l01s ; i=mats[i][12] ){
                if(mats[i][2] === 'f' && 'sélectionner' === mats[i][1]){
                    for( var j=i + 1 ; j < l01s ; j=mats[j][12] ){
                        if(mats[j][1] === 'provenance' && mats[j][2] === 'f'){
                            for( var k=j + 1 ; k < l01s ; k=mats[k][12] ){
                                if(mats[k][2] === 'f'){
                                    let aa_provenance=mats[k][1];
                                    let nom_de_la_table='';
                                    let alias_de_la_table='';
                                    let chi_id_bdd=0;
                                    let alias1='';
                                    let champ1='';
                                    let alias2='';
                                    let champ2='';
                                    for( var l=k + 1 ; l < l01s ; l=mats[l][12] ){
                                        if(mats[l][1] === 'source' && mats[l][2] === 'f'){
                                            for( var m=l + 1 ; m < l01s ; m=mats[m][12] ){
                                                if(mats[m][1] === 'nom_de_la_table' && mats[m][2] === 'f'){
                                                    for( var n=m + 1 ; n < l01s ; n=mats[n][12] ){
                                                        if(mats[n][1] === 'alias' && mats[n][2] === 'f' && mats[n][8] === 1 && mats[n + 1][2] === 'c'){
                                                            alias_de_la_table=mats[n + 1][1];
                                                        }else if(mats[n][1] === 'base' && mats[n][2] === 'f' && mats[n][8] === 1 && mats[n + 1][2] === 'c'){
                                                            try{
                                                                chi_id_bdd=parseInt( mats[n + 1][1].replace( /b/ , '' ) );
                                                            } catch {}
                                                        }
                                                    }
                                                    for( var n=m + 1 ; n < l01s ; n=mats[n][12] ){
                                                        if(mats[n][2] === 'c'){
                                                            nom_de_la_table=mats[n][1];
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    for( var l=k + 1 ; l < l01s ; l=mats[l][12] ){
                                        if(mats[l][1] === 'contrainte' && mats[l][2] === 'f'){
                                            for( var m=l + 1 ; m < l01s ; m=mats[m][12] ){
                                                if(mats[m][1] === 'egal' && mats[m][2] === 'f'){
                                                    /* contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_parent_groupe))) */
                                                    for( var n=m + 1 ; n < l01s ; n=mats[n][12] ){
                                                        if(mats[n][1] === 'champ' && mats[n][2] === 'f' && mats[n][8] === 2 && mats[n + 1][2] === 'c'){
                                                            if(alias1 === ''){
                                                                alias1=mats[n + 1][1];
                                                                champ1=mats[n + 2][1];
                                                            }else{
                                                                alias2=mats[n + 1][1];
                                                                champ2=mats[n + 2][1];
                                                            }
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
                                    les_jointures.push( {
                                             /*  */
                                            "aa_provenance" : aa_provenance ,
                                            "chi_id_bdd" : chi_id_bdd ,
                                            "alias_de_la_table" : alias_de_la_table ,
                                            "nom_de_la_table" : nom_de_la_table ,
                                            "alias1" : alias1 ,
                                            "champ1" : champ1 ,
                                            "alias2" : alias2 ,
                                            "champ2" : champ2 ,
                                            "libelles_lien" : champ2
                                        } );
                                }
                            }
                        }
                    }
                }
            }
        }
        for( let i=0 ; i < les_jointures.length ; i++ ){
            let el=les_jointures[i];
            if(el.alias1 === el.alias_de_la_table){
                let libelle_lien=[];
                if(!this.#obj_bdd.hasOwnProperty( el.nom_de_la_table )){
                    /*
                      à voir pour les liens externes
                    */
                }else{
                    for(j in this.#obj_bdd[el.nom_de_la_table]['champs']){
                        if(this.#obj_bdd[el.nom_de_la_table]['champs'][j].meta.est_libelle_lien === 1
                               || this.#obj_bdd[el.nom_de_la_table]['champs'][j].meta.est_libelle_lien === '1'
                        ){
                            libelle_lien.push( j );
                        }
                    }
                    les_jointures[i].libelles_lien=libelle_lien;
                }
            }
        }
        for(let ind_update in liste_des_champs_update){
            let nom_du_champ=liste_des_champs_update[ind_update].nom_du_champ;
            /* ce champ fait-il référence à un champ amont qui est dans le ref_select */
            if(this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'table_mere' )
                   && this.#obj_table.champs[nom_du_champ].table_mere !== ''
            ){
                let table_mere=this.#obj_table.champs[nom_du_champ].table_mere;
                /*
                  on va chercher l'alias de la table mere dans la requete select
                */
                let l01s=mats.length;
                for( let j=1 ; j < l01s ; j++ ){
                    if(mats[j][1] === 'provenance' && mats[j][2] === 'f'){
                        for( let k=j + 1 ; k < l01s ; k++ ){
                            if('nom_de_la_table' === mats[k][1] && mats[k][2] === 'f'){
                                for( let l=k + 1 ; l < l01s ; l=mats[l][12] ){
                                    if(mats[l][1] === table_mere){
                                        for( let m=k + 1 ; m < l01s ; m=mats[m][12] ){
                                            if(mats[m][1] === 'alias' && mats[m][2] === 'f' && mats[m][8] === 1 && mats[m + 1][2] === 'c'){
                                                this.#obj_table.champs[nom_du_champ]['alias']=mats[m + 1][1];
                                                liste_des_champs_update[ind_update].alias_table_mere=mats[m + 1][1];
                                                break;
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
        let liste_de_tables_liste_ecran={};
        let liste_des_champs_liste_ecran=[];
        let liste_des_champs_condition_liste_ecran={};
        let table_reference_est_table_virtuelle=[];
        if(ref_liste_ecran !== ''){
            let objet_requete_liste_ecran=this.__ig1.__liste_des_sql[ref_liste_ecran];
            let matrice_liste_ecran=this.__ig1.__rev1.rev_tm( objet_requete_liste_ecran.cht_rev_requete );
            if(matrice_liste_ecran.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
            }
            let matle=matrice_liste_ecran.__xva;
            let le01=matle.length;
            for( let i=1 ; i < le01 ; i=matle[i][12] ){
                if(matle[i][1] === 'sélectionner' && matle[i][2] === 'f'){
                    for( let j=i + 1 ; j < le01 ; j=matle[j][12] ){
                        if(matle[j][1] === 'provenance' && matle[j][2] === 'f'){
                            for( let k=j + 1 ; k < le01 ; k=matle[k][12] ){
                                if((matle[k][1] === 'table_reference' || matle[k][1] === 'jointure_gauche') && matle[k][2] === 'f'){
                                    let nom_de_la_table='';
                                    let base='';
                                    let base_numerique=0;
                                    let alias='';
                                    let champ_contrainte1='';
                                    let alias_contrainte1='';
                                    let champ_contrainte2='';
                                    let alias_contrainte2='';
                                    for( let l=k + 1 ; l < le01 ; l=matle[l][12] ){
                                        if(matle[l][1] === 'source' && matle[l][2] === 'f'){
                                            for( let m=l + 1 ; m < le01 ; m=matle[m][12] ){
                                                if(matle[m][1] === 'nom_de_la_table' && matle[m][2] === 'f'){
                                                    for( let n=m + 1 ; n < le01 ; n=matle[n][12] ){
                                                        if(matle[n][2] === 'f' && matle[n][8] === 1){
                                                            if(matle[n][1] === 'alias'){
                                                                alias=matle[n + 1][1];
                                                            }else if(matle[n][1] === 'base'){
                                                                base=matle[n + 1][1];
                                                                base_numerique=parseInt( matle[n + 1][1].replace( /b/g , '' ) , 10 );
                                                            }
                                                        }else{
                                                            nom_de_la_table=matle[n][1];
                                                        }
                                                    }
                                                    if(matle[k][1] === 'table_reference'){
                                                        /*
                                                          
                                                        */
                                                        if(this.#obj_bdd[nom_de_la_table].meta.hasOwnProperty( 'est_table_virtuelle' )
                                                               && parseInt( this.#obj_bdd[nom_de_la_table].meta.est_table_virtuelle , 10 ) === 1
                                                        ){
                                                            table_reference_est_table_virtuelle=[
                                                                /* xxxx_fts , xxxx */
                                                                nom_de_la_table,
                                                                nom_de_la_table.substr( 0 , nom_de_la_table.length - 4 )
                                                            ];
                                                        }
                                                    }
                                                }
                                            }
                                        }else if(matle[l][1] === 'contrainte' && matle[l][2] === 'f'){
                                            for( let m=l + 1 ; m < le01 ; m=matle[m][12] ){
                                                if(matle[m][1] === 'egal' && matle[m][2] === 'f'){
                                                    for( let n=m + 1 ; n < le01 ; n=matle[n][12] ){
                                                        if(matle[n][1] === 'champ' && matle[n][2] === 'f' && matle[n][8] === 2){
                                                            if(champ_contrainte1 === ''){
                                                                alias_contrainte1=matle[n + 1][1];
                                                                champ_contrainte1=matle[n + 2][1];
                                                            }else{
                                                                alias_contrainte2=matle[n + 1][1];
                                                                champ_contrainte2=matle[n + 2][1];
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    liste_de_tables_liste_ecran[alias]={
                                         /*  */
                                        "alias" : alias ,
                                        "base" : base ,
                                        "base_numerique" : base_numerique ,
                                        "nom_de_la_table" : nom_de_la_table ,
                                        "champ_contrainte1" : champ_contrainte1 ,
                                        "alias_contrainte1" : alias_contrainte1 ,
                                        "champ_contrainte2" : champ_contrainte2 ,
                                        "alias_contrainte2" : alias_contrainte2
                                    };
                                }
                            }
                        }
                    }
                }
            }
            for( let i=1 ; i < le01 ; i=matle[i][12] ){
                if(matle[i][1] === 'sélectionner' && matle[i][2] === 'f'){
                    for( let j=i + 1 ; j < le01 ; j=matle[j][12] ){
                        if(matle[j][1] === 'valeurs' && matle[j][2] === 'f'){
                            for( let k=j + 1 ; k < le01 ; k=matle[k][12] ){
                                if(matle[k][1] === 'champ' && matle[k][2] === 'f' && matle[k][8] === 2){
                                    liste_des_champs_liste_ecran.push( {"nom_du_champ" : matle[k + 2][1] ,"préfixe_du_champ" : matle[k + 1][1] ,"champ_dans_la_base" : null} );
                                }
                            }
                        }
                    }
                }
            }
            for( let i=1 ; i < le01 ; i=matle[i][12] ){
                if(matle[i][1] === 'sélectionner' && matle[i][2] === 'f'){
                    for( let j=i + 1 ; j < le01 ; j=matle[j][12] ){
                        if(matle[j][1] === 'conditions' && matle[j][2] === 'f'){
                            for( let k=j + 1 ; k < le01 && matle[k][3] > matle[j][3] ; k++ ){
                                if(matle[k][1] === 'champ' && matle[k][2] === 'f' && matle[k][8] === 2){
                                    if(matle[matle[k][7]][1] === 'comme'
                                           || matle[matle[k][7]][1] === 'egal'
                                           || matle[matle[k][7]][1] === 'inf'
                                           || matle[matle[k][7]][1] === 'sup'
                                           || matle[matle[k][7]][1] === 'infegal'
                                           || matle[matle[k][7]][1] === 'supegal'
                                           || matle[matle[k][7]][1] === 'pas_dans'
                                           || matle[matle[k][7]][1] === 'dans'
                                    ){
                                        let cle='';
                                        let libelle_selection='';
                                        if(matle[matle[k][7]][1] === 'comme' || matle[matle[k][7]][1] === 'egal'){
                                            libelle_selection='';
                                        }else if(matle[matle[k][7]][1] === 'inf'){
                                            libelle_selection=' &lt;';
                                        }else if(matle[matle[k][7]][1] === 'sup'){
                                            libelle_selection=' &gt;';
                                        }else if(matle[matle[k][7]][1] === 'infegal'){
                                            libelle_selection=' &lt;=';
                                        }else if(matle[matle[k][7]][1] === 'supegal'){
                                            libelle_selection=' &gt;=';
                                        }else if(matle[matle[k][7]][1] === 'pas_dans'){
                                            libelle_selection=' NOT IN';
                                        }else if(matle[matle[k][7]][1] === 'dans'){
                                            libelle_selection=' IN';
                                        }else{
                                            console.log( 'il manque le traitement du libelle ' + matle[matle[k][7]][1] + ' ' + this.__ig1.nl2() + '' , 'color:red;background-color:yellow;' );
                                            /* matle[matle[k][7]][1] */
                                            debugger;
                                        }
                                        if(matle[k][9] === 1){
                                            /*
                                              premier enfant, on va voir si le deuxième enfant est une variable
                                              qui commence par un ":" :T0_xxxx 
                                            */
                                            for( let l=matle[matle[k][7]][0] + 1 ; l < le01 ; l=matle[l][12] ){
                                                if(matle[l][2] === 'c' && matle[l][9] === 2){
                                                    if(matle[l][1].substr( 0 , 1 ) === ':'){
                                                        cle=matle[l][1].substr( 1 );
                                                    }
                                                }
                                            }
                                        }else{
                                            console.error( '%c \nattention \n' , 'background:red;color:yellow;' );
                                            debugger;
                                        }
                                        if(cle !== ''){
                                            /* let cle=matle[k + 1][1] + '_' + matle[k + 2][1]; */
                                            liste_des_champs_condition_liste_ecran[cle]={
                                                 /*  */
                                                "nom_du_champ" : matle[k + 2][1] ,
                                                "préfixe_du_champ" : matle[k + 1][1] ,
                                                "champ_dans_la_base" : null ,
                                                "libelle_selection" : libelle_selection ,
                                                "champ_est_en_session" : false
                                            };
                                        }
                                    }else{
                                        console.error( '%c \nattention condition "' + matle[matle[k][7]][1] + '" non prise en compte\n' , 'background:red;color:yellow;' );
                                        debugger;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for(let i in liste_des_champs_condition_liste_ecran){
                if(liste_des_champs_condition_liste_ecran[i].préfixe_du_champ === 'T0'){
                    let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_liste_ecran[i].nom_du_champ];
                    liste_des_champs_condition_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                }else{
                    let nt=liste_de_tables_liste_ecran[liste_des_champs_condition_liste_ecran[i].préfixe_du_champ].nom_de_la_table;
                    let aa=this.#obj_bdd[nt];
                    if(aa === undefined){
                        liste_des_champs_condition_liste_ecran[i]['nom_table_externe']=nt;
                        liste_des_champs_condition_liste_ecran[i]['nom_champ_externe']=liste_des_champs_condition_liste_ecran[i].nom_du_champ;
                        /*
                          le champ fait référence à une table dans une autre base
                          exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                          que le champ commercial fait référence la table "utilisateur"
                        */
                    }else{
                        let champ_dans_la_base=aa['champs'][liste_des_champs_condition_liste_ecran[i].nom_du_champ];
                        liste_des_champs_condition_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                    }
                }
            }
            /*
              recherche du champ est_libelle_lien
            */
            for(let i in liste_des_champs_liste_ecran){
                if(liste_des_champs_liste_ecran[i].préfixe_du_champ === 'T0'){
                    /* champ T0 */
                    let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_liste_ecran[i].nom_du_champ];
                    liste_des_champs_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                    if(champ_est_libelle_lien === null){
                        if(champ_dans_la_base.meta.hasOwnProperty( 'est_libelle_lien' ) && champ_dans_la_base.meta.est_libelle_lien === '1'){
                            champ_est_libelle_lien=liste_des_champs_liste_ecran[i];
                        }
                    }
                }else{
                    /* champ Tn */
                    let nt=liste_de_tables_liste_ecran[liste_des_champs_liste_ecran[i].préfixe_du_champ].nom_de_la_table;
                    let aa=this.#obj_bdd[nt];
                    if(aa === undefined){
                        /*
                          le champ fait référence à une table dans une autre base
                          exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                          que le champ commercial fait référence la table "utilisateur"
                        */
                    }else{
                        let champ_dans_la_base=aa['champs'][liste_des_champs_liste_ecran[i].nom_du_champ];
                        liste_des_champs_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                    }
                }
            }
        }
        let alias_a_ignorer=[];
        for(let i in liste_des_champs_condition_liste_ecran){
            liste_des_champs_condition_liste_ecran[i]['dans_filtre']=false;
            let el=liste_des_champs_condition_liste_ecran[i];
            if(el.champ_dans_la_base === null){
                /*
                  le champ fait référence à une table dans une autre base
                  exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                  que le champ commercial fait référence la table "utilisateur"
                */
            }else if(el.champ_dans_la_base.hasOwnProperty( 'table_mere' ) && el.champ_dans_la_base.table_mere !== ''){
                if(this.#obj_bdd[el.champ_dans_la_base.table_mere].champs[el.champ_dans_la_base.champ_pere].meta.hasOwnProperty( 'est_en_session' )
                       && this.#obj_bdd[el.champ_dans_la_base.table_mere].champs[el.champ_dans_la_base.champ_pere].meta.est_en_session === '1'
                ){
                    liste_des_champs_condition_liste_ecran[i]['champ_pere_est_en_session']=true;
                    for(let j in liste_de_tables_liste_ecran){
                        if(liste_de_tables_liste_ecran[j].champ_contrainte2 === el.nom_du_champ
                                   && liste_de_tables_liste_ecran[j].alias_contrainte2 === el.préfixe_du_champ
                               || liste_de_tables_liste_ecran[j].champ_contrainte1 === el.nom_du_champ
                                   && liste_de_tables_liste_ecran[j].alias_contrainte1 === el.préfixe_du_champ
                        ){
                            alias_a_ignorer.push( liste_de_tables_liste_ecran[j].alias );
                        }
                    }
                }
            }
        }
        src_serveur_js2+='const __xer=/* code erreur */0;\r\n';
        src_serveur_js2+='const __xsu=/* code succès */1;\r\n';
        src_serveur_js2+='const __xal=/* code alarme */2;\r\n';
        src_serveur_js2+='const __xif=/* code information */3;\r\n';
        src_serveur_js2+='const __xdv=/* code déverminage */4;\r\n';
        src_serveur_js2+='const __xst=/* statut */\'__xst\';\r\n';
        src_serveur_js2+='const __xva=/* valeurs */\'__xva\';\r\n';
        src_serveur_js2+='const __xsi=/* signaux */\'__xsi\';\r\n';
        src_serveur_js2+='const __xac=/* actions */\'__xac\';\r\n';
        src_serveur_js2+='/*\r\n';
        src_serveur_js2+='  =====================================================================================================================\r\n';
        src_serveur_js2+='*/\r\n';
        src_serveur_js2+='class ' + this.#nom_de_la_classe_générée2 + '{\r\n';
        /*
        */
        let nom_du_source_serveur=this.#nom_de_la_classe_générée2 + '_s.js';
        let nom_du_source_client=this.#nom_de_la_classe_générée2 + '_c.js';
        let liste_des_methodes_serveur_normalisees=[
            'actions_et_tests_apres_page_modifications',
            'tests_et_actions_apres_modifier',
            'actions_et_tests_avant_modifier',
            'test_avant_supprimer',
            'actions_apres_supprimer',
            'tests_avant_creer',
            'action_apres_creer'
        ];
        let tableau_des_fragments_client=[];
        let tableau_des_fragments_serveur=[];
        if(this.#rev_fragment_mat !== null){
            let tabtemp=[nom_du_source_serveur,nom_du_source_client];
            for(let nom_source in tabtemp){
                if(this.#rev_fragment_mat.hasOwnProperty( tabtemp[nom_source] )){
                    /*
                      definition_de_classe[
                      nom_classe[missions1],
                      contenu[
                      #[
                      =============================================================================
                      ],
                      méthode[
                      definition[
                      nom[actions_et_tests_avant_modifier],
                    */
                    let mat_frag1=this.#rev_fragment_mat[tabtemp[nom_source]];
                    let lng01=mat_frag1.length;
                    for( let i=1 ; i < lng01 ; i=mat_frag1[i][12] ){
                        if(mat_frag1[i][1] === 'definition_de_classe' && mat_frag1[i][2] === 'f'){
                            for( let j=i + 1 ; j < lng01 ; j=mat_frag1[j][12] ){
                                if(mat_frag1[j][1] === 'contenu' && mat_frag1[j][2] === 'f'){
                                    for( let k=j + 1 ; k < lng01 ; k=mat_frag1[k][12] ){
                                        if(mat_frag1[k][1] === 'méthode' && mat_frag1[k][2] === 'f'){
                                            let position_methode_serveur=k;
                                            let position_contenu_methode_serveur='';
                                            let nom_methode_serveur='';
                                            for( let l=k + 1 ; l < lng01 ; l=mat_frag1[l][12] ){
                                                if(mat_frag1[l][1] === 'definition' && mat_frag1[l][2] === 'f'){
                                                    for( let m=l + 1 ; m < lng01 ; m=mat_frag1[m][12] ){
                                                        if(mat_frag1[m][1] === 'nom' && mat_frag1[m][2] === 'f' && mat_frag1[m][8] === 1 && mat_frag1[m + 1][2] === 'c'){
                                                            nom_methode_serveur=mat_frag1[m + 1][1];
                                                        }
                                                    }
                                                }else if(mat_frag1[l][1] === 'contenu' && mat_frag1[l][2] === 'f'){
                                                    for( let m=l + 1 ; m < lng01 ; m=mat_frag1[m][12] ){
                                                        if(mat_frag1[m][1] === 'nom' && mat_frag1[m][2] === 'f' && mat_frag1[m][8] === 1 && mat_frag1[m + 1][2] === 'c'){
                                                            position_contenu_methode_serveur=m + 1;
                                                        }
                                                    }
                                                }
                                            }
                                            if(nom_methode_serveur !== ''){
                                                let src_js='';
                                                let obj_src_rev_txt=this.__ig1.__rev1.matrice_vers_source_rev1( mat_frag1 , k , true , k + 1 );
                                                if(obj_src_rev_txt.__xst === __xsu){
                                                    let src_rev='#(\r\n';
                                                    src_rev+='  =========================== ';
                                                    src_rev+='fragment';
                                                    src_rev+=' ========================================================================\r\n';
                                                    src_rev+='),méthode(' + obj_src_rev_txt.__xva + ')';
                                                    let obj1=this.#objet_conversion_rev_vers_js.c_rev_vers_js( src_rev , {} );
                                                    if(obj1.__xst === __xsu){
                                                        src_js='\n    ' + obj1.__xva.replace( /\n/g , '\n    ' );
                                                    }
                                                }
                                                if(tabtemp[nom_source] === nom_du_source_serveur){
                                                    tableau_des_fragments_serveur.push( {
                                                             /*  */
                                                            "nom_methode_serveur" : nom_methode_serveur ,
                                                            "position_methode_serveur" : position_methode_serveur ,
                                                            "position_contenu_methode_serveur" : position_contenu_methode_serveur ,
                                                            "src_js" : src_js
                                                        } );
                                                }else if(tabtemp[nom_source] === nom_du_source_client){
                                                    tableau_des_fragments_client.push( {
                                                             /*  */
                                                            "nom_methode_client" : nom_methode_serveur ,
                                                            "position_methode_client" : position_methode_serveur ,
                                                            "position_contenu_methode_client" : position_contenu_methode_serveur ,
                                                            "src_js" : src_js
                                                        } );
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
        let fragment_trouve=-1;
        /*
        */
        if(ref_update !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async actions_et_tests_apres_page_modifications(mat , d , __xva_avant , __db1){\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            /*
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async tests_et_actions_apres_modifier(mat , d , form , __xva_avant , __db1){\r\n';
            src_serveur_js2+='        return{__xst:__xsu};\r\n';
            src_serveur_js2+='    }\r\n';
            /*
            */
            fragment_trouve=-1;
            for( let i=0 ; i < tableau_des_fragments_serveur.length ; i++ ){
                if(tableau_des_fragments_serveur[i].nom_methode_serveur === 'actions_et_tests_avant_modifier'){
                    fragment_trouve=i;
                    break;
                }
            }
            if(fragment_trouve >= 0){
                src_serveur_js2+=tableau_des_fragments_serveur[fragment_trouve].src_js;
            }else{
                src_serveur_js2+='    /*\r\n';
                src_serveur_js2+='      =============================================================================================================\r\n';
                src_serveur_js2+='    */\r\n';
                src_serveur_js2+='    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){\r\n';
                src_serveur_js2+='        return{__xst:__xsu};\r\n';
                src_serveur_js2+='    }\r\n';
            }
        }
        /*
        */
        if(ref_delete !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){\r\n';
            src_serveur_js2+='        return{__xst:__xsu};\r\n';
            src_serveur_js2+='    }\r\n';
            /*
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async actions_apres_supprimer( mat , d , form , __xva_avant , __db1 ){\r\n';
            src_serveur_js2+='        return{__xst:__xsu};\r\n';
            src_serveur_js2+='    }\r\n';
        }
        /*
        */
        if(ref_insert !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async tests_avant_creer( mat , d , form , __db1 ){\r\n';
            src_serveur_js2+='        return{__xst:__xsu};\r\n';
            src_serveur_js2+='    }\r\n';
            /*
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async action_apres_creer( mat , d , nouvel_id , form , __db1 ){\r\n';
            src_serveur_js2+='        return{__xst:__xsu};\r\n';
            src_serveur_js2+='    }\r\n';
        }
        /*
        */
        src_client2+='class ' + this.#nom_de_la_classe_générée2 + '{\n';
        src_client2+='    /*\n';
        src_client2+='      ref_liste_ecran=' + ref_liste_ecran + ';\n';
        src_client2+='      ref_select=' + ref_select + ';\n';
        src_client2+='      ref_insert=' + ref_insert + ';\n';
        src_client2+='      ref_update=' + ref_update + ';\n';
        src_client2+='      ref_delete=' + ref_delete + ';\n';
        src_client2+='      ne_pas_prendre_les_valeurs_en_session=' + ne_pas_prendre_les_valeurs_en_session + ';\n';
        src_client2+='      pour_sous_liste_uniquement=' + pour_sous_liste_uniquement + ';\n';
        src_client2+='    */\n';
        src_client2+='    moi=\'' + this.#nom_de_la_classe_générée2 + '\';\r\n';
        src_client2+='    DUN_DUNE_ELEMENT_GERE = \'' + def_table.meta.distinction_pour_isad + '\';\r\n';
        src_client2+='    LISTE_DES_ELEMENTS_GERES = \'' + def_table.meta.distinction_pour_liste + '\';\r\n';
        src_client2+='    __ig1=null;\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      filtres liste\r\n';
        src_client2+='    */\r\n';
        src_client2+='\r\n';
        src_client2+='    tableau_des_filtres={\r\n';
        src_client2+='        \'liste1\':{\r\n';
        src_client2+='          __num_page:{type_filtre:\'entier\',défaut:0,masqué:true,nom:\'__num_page\',taille:8},\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            let el=liste_des_champs_condition_liste_ecran[i];
            let taille=champ_primaire === el.nom_du_champ && el.préfixe_du_champ === 'T0' ? ( 12 ) : ( 8 );
            try{
                if(el.préfixe_du_champ === 'T0'
                       && (this.#obj_table.champs[el.nom_du_champ].champ_pere_est_en_session1 === true
                           || this.#obj_table.champs[el.nom_du_champ].champ_est_en_session1 === true)
                ){
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        src_client2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }else{
                        src_client2+='/*            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},*/\r\n';
                    }
                }else{
                    if(el.préfixe_du_champ === 'T0'){
                        let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                        liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                        liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                        src_client2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }else{
                        let nom_de_la_table_mere=liste_de_tables_liste_ecran[i.substr( 0 , i.indexOf( '_' ) )].nom_de_la_table;
                        if(el.champ_dans_la_base === null){
                            if(el.nom_du_champ === 'chp_nom_de_connexion_utilisateur' && el.préfixe_du_champ !== 'T0'){
                                /*
                                  dans un filtre, on peut avoir besoin d'un champ nom_de_connexion_utilisateur 
                                  par exemple : fdl_id_prestataire_missaffect
                                */
                                src_client2+='            "' + el.préfixe_du_champ + '_chp_nom_de_connexion_utilisateur" : {"type_filtre" :\'VARCHAR\',défaut:\'\',masqué:false,nom:\'nom\',taille:8},\r\n';
                                /* "T1_chp_nom_de_connexion_utilisateur" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom prestataire' ,"taille" : 8} , */
                            }
                            /*
                              le champ fait référence à une table dans une autre base
                              exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                              que le champ commercial fait référence la table "utilisateur"
                            */
                        }else{
                            let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                            nom+=' ' + this.#obj_bdd[nom_de_la_table_mere].meta.permet_la_gestion_de;
                            let nom_complet=nom + el.libelle_selection;
                            if(el.champ_dans_la_base.meta.nom_bref_libelle_lien){
                                nom_complet=el.champ_dans_la_base.meta.nom_bref_libelle_lien;
                            }
                            if(el.champ_dans_la_base.espece_du_champ.indexOf( 'INT' ) >= 0){
                                nom_complet='id ' + nom_complet;
                            }
                            liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                            liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom_complet;
                            src_client2+='            "' + i + '" : {';
                            src_client2+='"type_filtre" : \'' + el.champ_dans_la_base.espece_du_champ + '\' ,';
                            src_client2+='"défaut" : \'\' ,';
                            src_client2+='"masqué" : false ,';
                            src_client2+='"nom" : \'' + nom_complet + '\' ,';
                            src_client2+='"taille" : ' + taille + '';
                            src_client2+='},\r\n';
                        }
                    }
                }
            }catch(e){
                debugger;
            }
        }
        src_client2+='\r\n';
        src_client2+='        },\r\n';
        if(des_champs_sont_references_dans_une_autre_table === true){
            src_client2+='        \'sous_liste2\':{\r\n';
            src_client2+='          __num_page:{type_filtre:\'entier\',défaut:0,masqué:true,nom:\'__num_page\',taille:8},\r\n';
            for(let i in liste_des_champs_condition_liste_ecran){
                let el=liste_des_champs_condition_liste_ecran[i];
                let taille=champ_primaire === el.nom_du_champ && el.préfixe_du_champ === 'T0' ? ( 12 ) : ( 8 );
                if(el.préfixe_du_champ === 'T0'
                       && (this.#obj_table.champs[el.nom_du_champ].champ_pere_est_en_session1 === true
                           || this.#obj_table.champs[el.nom_du_champ].champ_est_en_session1 === true)
                ){
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        src_client2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }else{
                        src_client2+='/*            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '}, */\r\n';
                    }
                    /* debugger */
                }else{
                    if(el.préfixe_du_champ === 'T0'){
                        let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                        liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                        liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                        src_client2+='          ' + i + ' : {type_filtre:\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }else{
                        if(el.champ_dans_la_base === null){
                            /*
                              le champ fait référence à une table dans une autre base
                              exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                              que le champ commercial fait référence la table "utilisateur"
                            */
                        }else{
                            let nom_de_la_table_mere=liste_de_tables_liste_ecran[i.substr( 0 , i.indexOf( '_' ) )].nom_de_la_table;
                            let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                            nom+=' ' + this.#obj_bdd[nom_de_la_table_mere].meta.permet_la_gestion_de;
                            liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                            liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                            src_client2+='          ' + i + ' : {type_filtre:\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                        }
                    }
                }
            }
            src_client2+='        }\r\n';
        }
        src_client2+='\r\n';
        src_client2+='    }\r\n';
        src_client2+='    fonction_liste=\'liste1\';\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='    filtres={};\r\n';
        src_client2+='    vv_ecran_liste_boutons_avant=\'\';\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    f1( mat , d , le_colis1=null ){\r\n';
        src_client2+='        switch(mat[d][1]){\r\n';
        src_client2+='         case \'xxxxx\':\r\n';
        src_client2+='             /*';
        src_client2+='             this.__ig1.fermer_la_sous_fenetre();\r\n';
        src_client2+='             this.entree_module( null );\r\n';
        src_client2+='             */';
        src_client2+='             break;\r\n';
        src_client2+='         default:\r\n';
        src_client2+='            return({"__xst" : __xer ,"__xme" : \'dans l\\\'interface client "\' + mat[d][1] + \'" n\\\'est pas traitée ou bien comporte une erreur\'});\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    constructor( mat , d , __ig1 ){\r\n';
        src_client2+='        this.__ig1=__ig1;\r\n';
        src_client2+='        for(let i in this.tableau_des_filtres){\r\n';
        src_client2+='            this.filtres[i]={};\r\n';
        src_client2+='            for(let j in this.tableau_des_filtres[i]){\r\n';
        src_client2+='              this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        if(this.fonction_liste===\'liste1\'){\r\n';
        src_client2+='            let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + \'_\' + this.moi+\'_\'+this.fonction_liste );\r\n';
        src_client2+='            if(aa !== null){\r\n';
        src_client2+='                let jso=JSON.parse( aa );\r\n';
        src_client2+='                for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
        src_client2+='                  this.filtres[this.fonction_liste][i]=jso[i]??this.tableau_des_filtres[this.fonction_liste][i].défaut;;\r\n';
        src_client2+='                }\r\n';
        src_client2+='            }\r\n';
        src_client2+='\r\n';
        if(ref_insert === ''){
            src_client2+='            /*\r\n';
        }
        src_client2+='            this.vv_ecran_liste_boutons_avant+=';
        src_client2+='\'<div class="rev_bouton yy__xif" data-rev_click="m1(n1(\'+this.moi+\'),f1(page_creer1()))" title="création\'+this.DUN_DUNE_ELEMENT_GERE +\'" >\' + this.__ig1.les_svg.nouveau_document+\'</div>\';\r\n';
        if(ref_insert === ''){
            src_client2+='            */\r\n';
        }
        src_client2+='        }\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        if(ref_update !== '' && ref_select !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    modifier1(mat , d , le_colis1=null){\r\n';
            src_client2+='        return({__xst:__xsu});\r\n';
            src_client2+='    }\r\n';
        }
        if(ref_update !== '' && ref_select !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    verifier_modifier1(mat , d , données){\r\n';
            src_client2+='        let retour_a_la_liste=\'\';\r\n';
            src_client2+='        let l01=mat.length;\r\n';
            src_client2+='        for(let i=d+1;i<l01;i=mat[i][12]){\r\n';
            src_client2+='            if(mat[i][1]===\'retour_a_la_liste\' && mat[i][2]===\'f\' ){\r\n';
            src_client2+='                retour_a_la_liste=\'retour_a_la_liste()\';\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='\r\n';
            src_client2+='        let co1=données.__co1;\r\n';
            src_client2+='        let fo1=données.__fo1[co1];\r\n';
            var liste_des_conversions_modification=[];
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                /* liste_des_champs_insert */
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                       && ne_pas_prendre_les_valeurs_en_session === 0
                ){
                    src_client2+='    /*\r\n';
                    src_client2+='      =====================================================================================================\r\n';
                    src_client2+='      pas de test pour le champ ' + obj_champ.nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur )\r\n';
                    src_client2+='    */\r\n';
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                           && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null
                           && ne_pas_prendre_les_valeurs_en_session === 0
                ){
                }else{
                    liste_des_conversions_modification.push( obj_champ );
                    /* if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1 || obj_champ.hasOwnProperty('non_nulle') && obj_champ.non_nulle===true ){ */
                    if(obj_champ.non_nulle === true){
                        src_client2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                        src_client2+='            this.__ig1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseignée\'  });\r\n';
                        src_client2+='            this.__ig1.affiche_les_messages();\r\n';
                        src_client2+='            this.__ig1.retablir_les_boutons_masques();\r\n';
                        src_client2+='            try{\r\n';
                        src_client2+='                document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                        src_client2+='            }catch{}\r\n';
                        src_client2+='            return({__xst:__xsu})\r\n';
                        src_client2+='        }\r\n';
                    }
                    if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                        src_client2+='        if(fo1[\'' + nom_du_champ + '\']!==null && fo1[\'' + nom_du_champ + '\']!==\'\'){\r\n';
                        src_client2+='            let obj1=this.__ig1.__rev1.rev_tm(fo1[\'' + nom_du_champ + '\']);\r\n';
                        src_client2+='            if(obj1.__xst!==__xsu){\r\n';
                        src_client2+='                this.__ig1.ajoute_message({ __xst : __xer, __xme : \'le contenu de "' + obj_champ.meta.abrege_du_champ + '" n\\\'est pas dans un format rev valide\'  });\r\n';
                        src_client2+='                this.__ig1.affiche_les_messages();\r\n';
                        src_client2+='                this.__ig1.retablir_les_boutons_masques();\r\n';
                        src_client2+='                try{\r\n';
                        src_client2+='                    document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                        src_client2+='                }catch{}\r\n';
                        src_client2+='                return({__xst:__xsu})\r\n';
                        src_client2+='            }\r\n';
                        src_client2+='        }\r\n';
                        src_client2+='\r\n';
                    }
                    if(obj_champ.genre_objet_du_champ.che_est_parmis_genre === 1){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre.indexOf( '\'' ) >= 0){
                            src_client2+='        console.log(\'%c IL MANQUE UN TEST POUR LE CHAMP ' + nom_du_champ + '\',\'color:red;background:lightblue;\')\r\n';
                        }else{
                            src_client2+='        if(fo1[\'' + nom_du_champ + '\'] !== \'\'){\r\n';
                            src_client2+='            let tab_est_parmis_' + i + '=\'' + obj_champ.genre_objet_du_champ.cht_parmis_genre.replace( /\'/g , '\\\'' ) + '\'.split(\',\');\r\n';
                            src_client2+='            if(!tab_est_parmis_' + i + '.includes(fo1[\'' + nom_du_champ + '\'])){\r\n';
                            src_client2+='                this.__ig1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être correctement renseignée (utilisez les boutons)\'  });\r\n';
                            src_client2+='                this.__ig1.affiche_les_messages();\r\n';
                            src_client2+='                this.__ig1.retablir_les_boutons_masques();\r\n';
                            src_client2+='                try{\r\n';
                            src_client2+='                  document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                            src_client2+='                }catch{}\r\n';
                            src_client2+='                return({__xst:__xsu})\r\n';
                            src_client2+='            }\r\n';
                            src_client2+='        }\r\n';
                        }
                    }
                    if(obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                        var obj1=this.__ig1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                        if(obj1.__xst !== __xsu){
                            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                        }
                        let mat1=obj1.__xva;
                        let l01=mat1.length;
                        for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                            if(mat1[j][2] === 'f'){
                                src_client2+='\n';
                                src_client2+='        let __test_' + i + '_' + j + '=this.__ig1.__fnts_c_et_s.' + mat1[j][1] + '(';
                                /* 0,99,fo1[\'chp_texte_tache\'],\'priorite\'];\r\n'; */
                                if(mat1[j][8] === 0){
                                }else{
                                    for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                        if(mat1[k][2] === 'c'){
                                            if(mat1[k][4] === 0){
                                                src_client2+=mat1[k][1] + ',';
                                            }else if(mat1[k][4] === 1){
                                                /* entre quotes */
                                                src_client2+='\'' + mat1[k][1] + '\',';
                                            }else{
                                                /* afr */
                                                debugger;
                                                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                                            }
                                        }else{
                                            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                                        }
                                    }
                                }
                                src_client2+='fo1[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.nom_bref_du_champ + '\');\r\n';
                                src_client2+='        if(__test_' + i + '_' + j + '.__xst!==__xsu){\r\n';
                                src_client2+='            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_' + i + '_' + j + '.__xme} );\r\n';
                                src_client2+='            this.__ig1.affiche_les_messages();\r\n';
                                src_client2+='            this.__ig1.retablir_les_boutons_masques();\r\n';
                                src_client2+='            try{\r\n';
                                src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                                src_client2+='            }catch{}\r\n';
                                src_client2+='            return({__xst:__xsu})\r\n';
                                src_client2+='        }\r\n';
                                src_client2+='\r\n';
                            }else{
                                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                            }
                        }
                    }
                }
            }
            if(liste_des_conversions_modification.length > 0){
                src_client2+='        /* conversion des données numériques verifier_modifier début */\r\n';
                src_client2+='        fo1[\'' + champ_primaire + '\']=fo1[\'' + champ_primaire + '\']===\'\'?null:parseInt(fo1[\'' + champ_primaire + '\'],10);\r\n';
                for( let i=0 ; i < liste_des_conversions_modification.length ; i++ ){
                    let c_est_un_champ_numerique=false;
                    if(liste_des_conversions_modification[i].espece_du_champ === 'INTEGER'){
                        c_est_un_champ_numerique=true;
                        src_client2+='        fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_client2+='fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']===\'\'?null:parseInt(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'],10);\r\n';
                    }else if(liste_des_conversions_modification[i].espece_du_champ === 'FLOAT'
                           || liste_des_conversions_modification[i].espece_du_champ === 'DECIMAL'
                    ){
                        c_est_un_champ_numerique=true;
                        src_client2+='        fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_client2+='fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']===\'\'?null:parseFloat(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']);\r\n';
                    }
                    if(c_est_un_champ_numerique === true){
                        src_client2+='        if(isNaN(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'])){\r\n';
                        src_client2+='            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : \'la valeur pour "' + liste_des_conversions_modification[i].meta.nom_bref_du_champ + '" doit être numérique\'} );\r\n';
                        src_client2+='            this.__ig1.affiche_les_messages();\r\n';
                        src_client2+='            this.__ig1.retablir_les_boutons_masques();\r\n';
                        src_client2+='            try{\r\n';
                        src_client2+='                document.getElementById( \'' + liste_des_conversions_modification[i].nom_du_champ + '\' ).focus();\r\n';
                        src_client2+='            } catch {}\r\n';
                        src_client2+='            return({"__xst" : __xsu});\r\n';
                        src_client2+='        }\r\n';
                    }
                }
                src_client2+='        /* conversion des données numériques verifier_modifier fin */\r\n';
            }
            src_client2+='        /*\r\n';
            src_client2+='          tout a été vérifié\r\n';
            src_client2+='        */\r\n';
            src_client2+='        let __fo1={};\r\n';
            src_client2+='        __fo1[co1]=fo1;\r\n';
            src_client2+='\r\n';
            src_client2+='        this.__ig1.envoyer_un_colis_au_worker( {/**/\r\n';
            src_client2+='            "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(modifier1(\'+retour_a_la_liste+\'))))\',\r\n';
            src_client2+='            "__xva" : { "__fo1" : __fo1 , "__co1" : co1 }\r\n';
            src_client2+='\r\n';
            src_client2+='        } );\r\n';
            src_client2+='        return({__xst:__xsu})\r\n';
            src_client2+='\r\n';
            src_client2+='\r\n';
            src_client2+='    }\r\n';
        }
        if(ref_update !== '' && ref_select !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async modifier1( mat , d ){\r\n';
            src_serveur_js2+='        let nom_formulaire=this.__ig1.donnees_recues[__xva][\'__co1\'];\r\n';
            src_serveur_js2+='        let form=this.__ig1.donnees_recues[__xva][\'__fo1\'][nom_formulaire];\r\n';
            src_serveur_js2+='         /**/\r\n';
            if(liste_des_conversions_modification.length > 0){
                src_serveur_js2+='        /*\r\n';
                src_serveur_js2+='          conversion des données numériques début\r\n';
                src_serveur_js2+='          =====================================================================================================\r\n';
                src_serveur_js2+='        */\r\n';
                src_serveur_js2+='        form[\'' + champ_primaire + '\']=form[\'' + champ_primaire + '\']===null?null:parseInt(form[\'' + champ_primaire + '\'],10);\r\n';
                for( let i=0 ; i < liste_des_conversions_modification.length ; i++ ){
                    if(liste_des_conversions_modification[i].espece_du_champ === 'INTEGER'){
                        src_serveur_js2+='        form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'] === null ? null:parseInt(form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'] , 10 );\r\n';
                        src_serveur_js2+='        if(isNaN(form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'])){\r\n';
                        src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : \'la valeur pour "' + liste_des_conversions_modification[i].meta.nom_bref_du_champ + '" doit être numérique\'});\r\n';
                        src_serveur_js2+='        }\r\n';
                    }else if(liste_des_conversions_modification[i].espece_du_champ === 'FLOAT'
                           || liste_des_conversions_modification[i].espece_du_champ === 'DECIMAL'
                    ){
                        src_serveur_js2+='        form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'] === null ?null:parseFloat(form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']);\r\n';
                        src_serveur_js2+='        if(isNaN(form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'])){\r\n';
                        src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : \'la valeur pour "' + liste_des_conversions_modification[i].meta.nom_bref_du_champ + '" doit être numérique\'});\r\n';
                        src_serveur_js2+='        }\r\n';
                    }
                }
                src_serveur_js2+='        /*\r\n';
                src_serveur_js2+='          =====================================================================================================\r\n';
                src_serveur_js2+='          conversion des données numériques fin\r\n';
                src_serveur_js2+='        */\r\n';
            }
            src_serveur_js2+='        let retour_a_la_liste=false;\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'retour_a_la_liste\' && mat[i][2] === \'f\'){\r\n';
            src_serveur_js2+='                retour_a_la_liste=true;\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='        let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        /* sélection du champ à modifier */\r\n';
            src_serveur_js2+='        let criteres_select_' + ref_select + '={\r\n';
            src_serveur_js2+='            "T0_' + champ_primaire + '" : form[\'' + champ_primaire + '\'],\n';
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_pere_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='            "T0_' + liste_des_champs_condition_select[i].nom_du_champ + '" : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='            "T0_' + liste_des_champs_condition_select[i].nom_du_champ + '" : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__ig1.sql_iii( ' + ref_select + ' , criteres_select_' + ref_select + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_select + '.__xst !== __xsu || tt' + ref_select + '.__xva.length !== 1){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : \'enregistrement non trouvé : aucune modification effectuée [' + ref_select + ' \' + this.__ig1.nl2() + \']\'});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        await __db1.exec(\'BEGIN TRANSACTION;\');\r\n';
            src_serveur_js2+='        let __aetavm=await this.actions_et_tests_avant_modifier( mat , d , form , tt' + ref_select + '[__xva][0] , __db1 );\r\n';
            src_serveur_js2+='        if(__aetavm.__xst !== __xsu){\r\n';
            src_serveur_js2+='            await __db1.exec(\'ROLLBACK;\');\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : __aetavm.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let criteres_' + ref_update + '={\r\n';
            src_serveur_js2+='                /**/\r\n';
            for( let i=0 ; i < liste_des_champs_condition_update.length ; i++ ){
                if(champ_primaire === liste_des_champs_condition_update[i].nom_du_champ){
                    src_serveur_js2+='                    \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : form[\'' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }else if(liste_des_champs_condition_update[i].champ_session === true){
                    /* nom_en_session1 */
                    src_serveur_js2+='                    \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_update[i].nom_champ_session + ',\n';
                }else if(liste_des_champs_condition_update[i].champ_dans_la_base.champ_est_en_session1 === true){
                    /* nom_en_session1 */
                    src_serveur_js2+='                    \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_update[i].champ_dans_la_base.nom_en_session1 + ',\n';
                }else if(liste_des_champs_condition_update[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1){
                    src_serveur_js2+='                    \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : form[\'' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }else{
                    src_serveur_js2+='                    \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : tt' + ref_select + '[__xva][0][\'T0.' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }
            }
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                    /*
                      this.#les_bases
                    */
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                ){
                    src_serveur_js2+='                \'n_' + nom_du_champ + '\' : this.__ig1.donnees_retournees.chi_id_utilisateur ,\n';
                }else if(obj_champ.champ_session === true){
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        if(obj_champ.non_nulle === false){
                            src_serveur_js2+='                \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\']===\'\'? ( null ) : ( form[\'' + nom_du_champ + '\'] ) ,\n';
                        }else{
                            src_serveur_js2+='                \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'] ,\n';
                        }
                    }else{
                        src_serveur_js2+='                \'n_' + nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_update[i].nom_champ_session + ',\r\n';
                    }
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                ){
                }else{
                    if(liste_des_champs_update[i].on_affecte_une_constante !== ''){
                        src_serveur_js2+='                \'n_' + nom_du_champ + '\' : ' + liste_des_champs_update[i].on_affecte_une_constante + ' ,\n';
                    }else{
                        if(obj_champ.non_nulle === false){
                            src_serveur_js2+='                \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\']===\'\'? ( null ) : ( form[\'' + nom_du_champ + '\'] ) ,\n';
                        }else{
                            src_serveur_js2+='                \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'] ,\n';
                        }
                    }
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        /* =========================== mise à jour effective ======================== */\r\n';
            src_serveur_js2+='        let tt' + ref_update + '=await this.__ig1.sql_iii( ' + ref_update + ' , criteres_' + ref_update + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_update + '.__xst !== __xsu  || tt' + ref_update + '.changements !== 1){\r\n';
            src_serveur_js2+='            await __db1.exec(\'ROLLBACK;\');\r\n';
            src_serveur_js2+='            return({"__xst" : __xer , "__xme" : tt' + ref_update + '.__xme  });\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let __taam=await this.tests_et_actions_apres_modifier(mat , d , form , tt' + ref_select + '[__xva][0] , __db1);\r\n';
            src_serveur_js2+='        if(__taam.__xst !== __xsu ){\r\n';
            src_serveur_js2+='            await __db1.exec(\'ROLLBACK;\');\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : __taam.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        await __db1.exec(\'COMMIT;\');\r\n';
            src_serveur_js2+='        if(retour_a_la_liste === true){\r\n';
            src_serveur_js2+='            if(form[\'__mat_liste_si_ok\']){\r\n';
            src_serveur_js2+='                let mat1=JSON.parse( form[\'__mat_liste_si_ok\'] );\r\n';
            src_serveur_js2+='                let d=1;\r\n';
            src_serveur_js2+='                await this.filtre1( mat1 , 1 , __db1 );\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='            return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let tt' + ref_select + '_bis=await this.__ig1.sql_iii( ' + ref_select + ' , criteres_select_' + ref_select + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'page_modification1\']=tt' + ref_select + '_bis;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
        }
        if(ref_select !== '' && ref_update !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_modification1( mat , d , ' + champ_primaire + '=null , __db1=null ){\r\n';
            src_serveur_js2+='        if(' + champ_primaire + ' === null){\r\n';
            src_serveur_js2+='            let l01=mat.length;\r\n';
            src_serveur_js2+='            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='                if(mat[i][1] === \'' + champ_primaire + '\'\r\n';
            src_serveur_js2+='                       && mat[i][2] === \'f\'\r\n';
            src_serveur_js2+='                       && mat[i][8] === 1\r\n';
            src_serveur_js2+='                       && mat[i + 1][2] === \'c\'\r\n';
            src_serveur_js2+='                       && mat[i + 1][4] === 0\r\n';
            src_serveur_js2+='                ){\r\n';
            src_serveur_js2+='                    ' + champ_primaire + '=parseInt( mat[i + 1][1] , 10 );\r\n';
            src_serveur_js2+='                }\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }else{\r\n';
            src_serveur_js2+='            this.__ig1.donnees_retournees[__xac]=\'pm1(m1(n1(\' + this.moi + \'),f1(page_modification1(' + champ_primaire + '(\' + ' + champ_primaire + ' + \')))))\';\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(' + champ_primaire + ' === null){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : \'[\' + this.__ig1.nl2() + \']\'});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(__db1 === null){\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__ig1.sql_iii( ' + ref_select + ' , {"T0_' + champ_primaire + '" : ' + champ_primaire + '} , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_select + '.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tt' + ref_select + '.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let aetam=await this.actions_et_tests_apres_page_modifications(mat , d , tt' + ref_select + '[__xva][0] , __db1);\r\n';
            src_serveur_js2+='        if(aetam.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : aetam.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'page_modification1\']=tt' + ref_select + ';\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
        }
        if(ref_select !== '' && ref_update !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    page_modification1( mat , d , le_colis1=null ){\r\n';
            src_client2+='        if(!le_colis1.__xva.hasOwnProperty( \'page_modification1\' )){\r\n';
            src_client2+='            return( this.__ig1.affiche_les_messages({"__xst" : __xer ,"__xme" : \'cet élément n\\\'a pas été trouvé\'}) );\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let enreg=le_colis1.__xva.page_modification1.__xva[0];\r\n';
            src_client2+='        this.__ig1.afficher_le_titre_des_zones( \'vv_ecran_modification\' , \'entree_module\' , this.DUN_DUNE_ELEMENT_GERE , enreg[\'T0.' + champ_primaire + '\'] , this.moi , \'' + champ_primaire + '\' );\r\n';
            src_client2+='        let o1=\'\';\r\n';
            for( let i=0 ; i < liste_des_champs_visualisation_update.length ; i++ ){
                src_client2+='        /*\r\n';
                src_client2+='          =====================================================================================================\r\n';
                src_client2+='        */\r\n';
                src_client2+='        o1+=\'  <div class="yy_edition_champ1">\';\r\n';
                src_client2+='        o1+=\'    <div class="yy_edition_libelle1">\';\r\n';
                src_client2+='        o1+=\'      <span>' + liste_des_champs_visualisation_update[i].champ_dans_la_base.abrege_du_champ + '</span>\';\r\n';
                src_client2+='        o1+=\'    </div>\';\r\n';
                src_client2+='        o1+=\'    <div class="yy_edition_valeur1">\';\r\n';
                src_client2+='        if(enreg[\'' + liste_des_champs_visualisation_update[i].prefixe_du_champ + '.' + liste_des_champs_visualisation_update[i].nom_du_champ + '\'] === undefined){\r\n';
                src_client2+='            o1+=\'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\';\r\n';
                src_client2+='        }\r\n';
                src_client2+='        o1+=\'        <span>\';\r\n';
                src_client2+='        o1+=enreg[\'' + liste_des_champs_visualisation_update[i].prefixe_du_champ + '.' + liste_des_champs_visualisation_update[i].nom_du_champ + '\'];\r\n';
                src_client2+='        o1+=\'        </span>\';\r\n';
                src_client2+='        o1+=\'    </div>\';\r\n';
                src_client2+='        o1+=\'  </div>\';\r\n';
            }
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                    /*
                      this.#les_bases
                    */
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                ){
                    let afficher=false;
                    if(obj_champ.hasOwnProperty( 'nom_en_session1' ) && obj_champ.nom_en_session1 === 'chi_id_utilisateur'){
                        afficher=false;
                    }
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        afficher=true;
                    }
                    if(afficher === true){
                        src_client2+='        /*\r\n';
                        src_client2+='          =====================================================================================================\r\n';
                        src_client2+='        */\r\n';
                        src_client2+='        o1+=\'  <div class="yy_edition_champ1">\';\r\n';
                        src_client2+='        o1+=\'    <div class="yy_edition_libelle1">\';\r\n';
                        src_client2+='        o1+=\'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\';\r\n';
                        src_client2+='        o1+=\'    </div>\';\r\n';
                        src_client2+='        o1+=\'    <div class="yy_edition_valeur1">\';\r\n';
                        src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\'] === undefined){\r\n';
                        src_client2+='            o1+=\'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\';\r\n';
                        src_client2+='        }\r\n';
                        src_client2+='        o1+=\'        <input type="hidden" value="\';\r\n';
                        src_client2+='        o1+=enreg[\'T0.' + obj_champ.nom_du_champ + '\'];\r\n';
                        src_client2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\';\r\n';
                        src_client2+='        o1+=\'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                        src_client2+='        o1+=\'(\' + enreg[\'T0.' + obj_champ.nom_du_champ + '\'] + \') \';\r\n';
                        for( let j=0 ; j < les_jointures.length ; j++ ){
                            if(les_jointures[j].aa_provenance === 'jointure_gauche' && les_jointures[j].champ2 === obj_champ.nom_du_champ){
                                src_client2+='        o1+=this.__ig1.fi2( enreg[\'' + les_jointures[j].alias1 + '.chp_nom_de_connexion_utilisateur\'] ) + \' \';\r\n';
                            }
                        }
                        src_client2+='        o1+=this.__ig1.lien_parent2( \'utilisateurs1\' , \'' + obj_champ.nom_du_champ + '\' , \'' + obj_champ.nom_du_champ + '_libelle\' , this.moi );\r\n';
                        src_client2+='        o1+=\'    </div>\';\r\n';
                        src_client2+='        o1+=\'  </div>\';\r\n';
                    }else{
                        src_client2+='        /*\r\n';
                        src_client2+='          =====================================================================================================\r\n';
                        src_client2+='          pas d\'édition pour le champ ' + obj_champ.nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur )\r\n';
                        src_client2+='        */\r\n';
                    }
                }else if(obj_champ.hasOwnProperty( 'table_mere' )
                       && obj_champ.hasOwnProperty( 'champ_pere' )
                       && obj_champ.table_mere !== ''
                       && obj_champ.champ_pere !== ''
                ){
                    let afficher=true;
                    if(this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_pere_est_en_session' )
                           && this.#obj_table.champs[nom_du_champ].champ_pere_est_en_session === true
                    ){
                        afficher=false;
                    }
                    if(obj_champ.hasOwnProperty( 'nom_en_session1' ) && obj_champ.nom_en_session1 === 'chi_id_utilisateur'){
                        afficher=false;
                    }
                    if(afficher === true){
                        src_client2+='        /*\r\n';
                        src_client2+='          =====================================================================================\r\n';
                        src_client2+='        */\r\n';
                        src_client2+='\r\n';
                        src_client2+='        o1+=\'  <div class="yy_edition_champ1">\' ;\r\n';
                        src_client2+='        o1+=\'    <div class="yy_edition_libelle1">\' ;\r\n';
                        src_client2+='        o1+=\'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                        src_client2+='        o1+=\'    </div>\' ;\r\n';
                        src_client2+='        o1+=\'    <div class="yy_edition_valeur1">\' ;\r\n';
                        src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                        src_client2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                        src_client2+='        }\r\n';
                        src_client2+='        o1+=\'        <input type="hidden" value="\' + enreg[\'T0.' + obj_champ.nom_du_champ + '\'] + \'" id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                        src_client2+='        o1+=\'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                        src_client2+='        o1+=\'(\'+enreg[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                        let indice_jointure=0;
                        let un_champ_libelle_trouve=false;
                        for( let j=0 ; j < les_jointures.length ; j++ ){
                            if(les_jointures[j].alias2 === 'T0'
                                   && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                                   && obj_champ.nom_du_champ === les_jointures[j].champ2
                            ){
                                indice_jointure=j;
                                src_client2+='\r\n';
                                for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                    src_client2+='        o1 +=  this.__ig1.fi2(enreg[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                                    un_champ_libelle_trouve=true;
                                }
                            }else if(les_jointures[j].alias1 === 'T0'
                                   && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                                   && obj_champ.nom_du_champ === les_jointures[j].champ1
                            ){
                                indice_jointure=j;
                                for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                    src_client2+='        o1 +=  this.__ig1.fi2(enreg[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                                    un_champ_libelle_trouve=true;
                                }
                            }
                        }
                        if(un_champ_libelle_trouve === false){
                            if(obj_champ.hasOwnProperty( 'champ_pere' ) && obj_champ.champ_pere !== ''){
                                /* il faut aller chercher les libelles parents */
                                let les_champs_de_la_table_mere=this.#obj_bdd[obj_champ.table_mere].champs;
                                let trouve=null;
                                for(let j in les_champs_de_la_table_mere){
                                    if(les_champs_de_la_table_mere[j].meta.hasOwnProperty( 'est_libelle_lien' )
                                           && les_champs_de_la_table_mere[j].meta.est_libelle_lien === 1
                                    ){
                                        trouve=j;
                                        break;
                                    }
                                }
                                if(trouve !== null){
                                    /*
                                      on a trouvé un champ lien direct dans la table mère qui joue le role de libellé
                                      il faut aller férifier que la requete select possède ce lien
                                    */
                                    for(let j in liste_des_champs_select){
                                        if(liste_des_champs_select[j].nom_du_champ === trouve && liste_des_champs_select[j].prefixe_du_champ !== 'T0'){
                                            src_client2+='        o1+=\'       / <span>\' + this.__ig1.fi2(enreg[\'' + liste_des_champs_select[j].prefixe_du_champ + '.' + trouve + '\'])+\'</span>\' ;\r\n';
                                        }
                                    }
                                }else{
                                    /*
                                      pas de champ lien direct trouvé, on essaie de remonter aux n-y
                                    */
                                    for(let j in les_champs_de_la_table_mere){
                                        if(les_champs_de_la_table_mere[j].hasOwnProperty( 'champ_pere' ) && les_champs_de_la_table_mere[j].champ_pere !== ''){
                                            let les_champs_de_la_table_mere_de_la_table_mere=this.#obj_bdd[les_champs_de_la_table_mere[j].table_mere].champs;
                                            let trouve2=null;
                                            for(let k in les_champs_de_la_table_mere_de_la_table_mere){
                                                if(les_champs_de_la_table_mere_de_la_table_mere[k].meta.hasOwnProperty( 'est_libelle_lien' )
                                                       && les_champs_de_la_table_mere_de_la_table_mere[k].meta.est_libelle_lien === 1
                                                ){
                                                    trouve2=k;
                                                    break;
                                                }
                                            }
                                            if(trouve2 !== null){
                                                for(let k in liste_des_champs_select){
                                                    if(liste_des_champs_select[k].nom_du_champ === trouve2 && liste_des_champs_select[k].prefixe_du_champ !== 'T0'){
                                                        src_client2+='        o1+=\'       / <span>\' + this.__ig1.fi2(enreg[\'' + liste_des_champs_select[k].prefixe_du_champ + '.' + trouve2 + '\'])+\'</span>\' ;\r\n';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        /*  */
                        let nom_table_mere=this.#obj_bdd[this.#nom_de_la_table].champs[obj_champ.nom_du_champ].table_mere;
                        var nom_de_la_classe_lien='/* AFR */';
                        if(nom_table_mere.substr( 0 , 4 ) === 'tbl_'){
                            nom_de_la_classe_lien=nom_table_mere.substr( 4 );
                        }else{
                            nom_de_la_classe_lien=nom_table_mere;
                        }
                        /*
                          if(les_jointures[indice_jointure].nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                          nom_de_la_classe_lien='' + les_jointures[indice_jointure].nom_de_la_table.substr( 4 ) + '1';
                          console.log( '%c lien vers "' + nom_de_la_classe_lien + '" ' , 'background:lightgreen; color:black;' );
                          }else{
                          console.log( '%c attention, la table parente ne commence pas par "tbl_" pour le champ ""' , 'background:red; color:yellow;' );
                          }
                        */
                        src_client2+='        o1+=\'</span>\';\r\n';
                        if(this.#liste_des_liens_dejà_definis.hasOwnProperty( obj_champ.nom_du_champ )){
                            src_client2+='        o1+=this.__ig1.lien_parent2( \'' + this.#liste_des_liens_dejà_definis[obj_champ.nom_du_champ] + '\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\' , this.moi );\r\n';
                        }else{
                            src_client2+='        o1+=this.__ig1.lien_parent2( \'' + nom_de_la_classe_lien + '1\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\' , this.moi );\r\n';
                        }
                        src_client2+='        o1+= \'    </div>\' ;\r\n';
                        src_client2+='        o1+= \'  </div>\' ;\r\n';
                        src_client2+='\r\n';
                    }
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1){
                }else if(obj_champ.genre_objet_du_champ.che_est_nur_genre === 1){
                    /* mettre le nur */
                    src_client2+='        o1 += \'     <input ';
                    src_client2+=' type="hidden" id="' + obj_champ.nom_du_champ + '"  ';
                    src_client2+=' value="';
                    src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                    src_client2+='" ';
                    src_client2+='/>\' ;\r\n';
                }else{
                    src_client2+='        /*\n';
                    src_client2+='          =====================================================================================\n';
                    src_client2+='        */\n';
                    src_client2+='        o1+=\'  <div class="yy_edition_champ1">\' ;\r\n';
                    src_client2+='        o1+=\'    <div class="yy_edition_libelle1">\' ;\r\n';
                    src_client2+='        o1+=\'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    src_client2+='        o1+=\'    </div>\' ;\r\n';
                    src_client2+='        o1+=\'    <div class="yy_edition_valeur1">\' ;\r\n';
                    src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    src_client2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    src_client2+='        }\r\n';
                    if(obj_champ.genre_objet_du_champ.chi_id_genre === 22){
                        /*
                          si c'est une date aaaa_mm_jj
                        */
                        src_client2+='        o1+=\'      <input id="' + obj_champ.nom_du_champ + '" type="text" size="10" maxlength="10" value="\' + this.__ig1.fi2( enreg[\'T0.' + obj_champ.nom_du_champ + '\'] ) + \'" />\';\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_date1( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        /*  */
                    }else if(obj_champ.genre_objet_du_champ.chi_id_genre === 23){
                        /*
                          si c'est une heure hh_mm_ss
                        */
                        src_client2+='        o1+=\'      <input id="' + obj_champ.nom_du_champ + '" type="text" size="10" maxlength="10" value="\' + this.__ig1.fi2( enreg[\'T0.' + obj_champ.nom_du_champ + '\'] ) + \'" />\';\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_heure1( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        /*  */
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                            size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        }
                        src_client2+='';
                        src_client2+='';
                        src_client2+='        o1+= \'      <input ';
                        src_client2+=' type="text" style="height: var(--t_hauteur_input1);" id="' + obj_champ.nom_du_champ + '" ' + size + ' ';
                        src_client2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" ';
                        src_client2+=' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                        src_client2+='        o1 +=this.__ig1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        src_client2+='\r\n';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                            src_client2+='        o1 += \'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                            for(let opt in tab){
                                src_client2+='';
                                src_client2+='        o1 += \'          <div class="rev_bouton" data-rev_click="';
                                src_client2+='m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                src_client2+='">' + tab[opt] + '</div>\';\r\n';
                            }
                            src_client2+='        o1 += \'      </div>\';\r\n';
                        }
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                        src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                        let format_source='';
                        if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                            src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                            src_client2+='        o1+=this.__ig1.__fnt1.boutons_rev3(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                            format_source=' data-editeur1="rev" ';
                        }else if(obj_champ.cht_particularités_genre.source_non_rev === 1){
                            src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                            src_client2+='        o1+=this.__ig1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                            format_source=' data-editeur1="source_editeur1" ';
                        }else{
                            src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                            src_client2+='        o1+=this.__ig1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                        }
                        src_client2+='\r\n';
                        src_client2+='        var sty=\'\';\r\n';
                        src_client2+='        if( enreg[\'T0.cht_initialisation_menu\']===null){\r\n';
                        src_client2+='            sty=\' style="height:5vh;" \';\r\n';
                        src_client2+='        }\r\n';
                        src_client2+='        o1+=\'            <textarea ' + format_source + ' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" \'+sty+\' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\r\n';
                        src_client2+='        o1+=this.__ig1.fi2( enreg[\'T0.' + obj_champ.nom_du_champ + '\'] );\r\n';
                        src_client2+='        o1+=\'</textarea>\';\r\n';
                        src_client2+='\r\n';
                        src_client2+='            o1 += \'        </div>\' ;\r\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'
                           || obj_champ.genre_objet_du_champ.chp_espece_genre === 'FLOAT'
                    ){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            /* champ entier standard */
                            src_client2+='        o1 += \'      ';
                            src_client2+='<input value="';
                            src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            src_client2+='" ';
                            src_client2+='type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                            src_client2+='autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                                src_client2+='        o1 += \'        ';
                                src_client2+='<input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" ';
                                src_client2+='value="';
                                src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                                src_client2+='" >\'; ;\r\n';
                            }else{
                                /*
                                  un champ entier qui comporte des valeurs discrètes
                                */
                                src_client2+='        o1 += \'        ';
                                src_client2+='<input style="height: var(--t_hauteur_input1);" type="text" disabled id="' + obj_champ.nom_du_champ + '" ';
                                src_client2+='value="';
                                src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                                src_client2+='" >\'; ;\r\n';
                                let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                                src_client2+='        o1 += \'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                                for(let opt in tab){
                                    src_client2+='';
                                    src_client2+='        o1 += \'          <div class="rev_bouton" data-rev_click="';
                                    src_client2+='m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                    src_client2+='">' + tab[opt] + '</div>\';\r\n';
                                }
                                src_client2+='        o1 += \'      </div>\';\r\n';
                            }
                        }
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'DECIMAL'){
                        src_client2+='        o1 += \'      ';
                        src_client2+='<input value="';
                        src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                        src_client2+='" ';
                        src_client2+='type="number" size="21" maxlength="21" id="' + obj_champ.nom_du_champ + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        if(obj_champ.meta.hasOwnProperty( 'suggestion_du_champ' ) && obj_champ.meta.suggestion_du_champ !== ''){
                            src_client2+='        o1+=\'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                            let obj_mat_rev=this.__ig1.__rev1.rev_tcm( obj_champ.meta.suggestion_du_champ );
                            if(obj_mat_rev.__xst !== __xsu){
                                return({"__xst" : __xer ,"__xme" : 'Erreur de convertion de suggestion_du_champ pour le champ "' + obj_champ.nom_du_champ + '" '});
                            }
                            for( let isuggestion_du_champ=1 ; isuggestion_du_champ < obj_mat_rev.__xva.length ; isuggestion_du_champ=obj_mat_rev.__xva[isuggestion_du_champ][12] ){
                                src_client2+='        o1+=\'          <div';
                                src_client2+=' class="rev_bouton"';
                                src_client2+=' data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(';
                                if(this.__ig1.est_num( obj_mat_rev.__xva[isuggestion_du_champ][1] )){
                                    src_client2+=obj_mat_rev.__xva[isuggestion_du_champ][1];
                                }else{
                                    src_client2+='\'' + obj_mat_rev.__xva[isuggestion_du_champ][1].replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'';
                                }
                                src_client2+=')))))">';
                                src_client2+=obj_mat_rev.__xva[isuggestion_du_champ][1];
                                src_client2+='</div>\';\r\n';
                            }
                            src_client2+='        o1+=\'      </div>\';\r\n';
                        }
                    }else{
                        /*
                          AFR
                        */
                        debugger;
                    }
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'  </div>\' ;\r\n';
                }
            }
            src_client2+='            /*\r\n';
            src_client2+='              =============================================================================================\r\n';
            src_client2+='            */\r\n';
            src_client2+='            o1+=\'      <input type="hidden" id="' + champ_primaire + '" value="\'+enreg[\'T0.' + champ_primaire + '\']+\'">\';\r\n';
            src_client2+='            /*\r\n';
            src_client2+='              =============================================================================================\r\n';
            src_client2+='            */\r\n';
            src_client2+='        let cmd=\'\';\r\n';
            src_client2+='        cmd+=\'liste1(\';\r\n';
            src_client2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
            src_client2+='          if(this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
            src_client2+='            cmd+=i+\'(\\\'\'+this.__ig1.fi2(this.filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
            src_client2+='          }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        cmd+=\')\';\r\n';
            src_client2+='        let obj2=this.__ig1.__rev1.rev_tm(cmd);\r\n';
            src_client2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
            src_client2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" value="\'+this.__ig1.fi2(jso)+\'" />\';\r\n';
            src_client2+='        document.getElementById( \'vv_ecran_modification_zone_contenu\' ).innerHTML=o1;\r\n';
            src_client2+='        this.__ig1.maj_hash(mat,0);\r\n';
            src_client2+='        this.__ig1.maj_title_htm1(\'modification \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
            src_client2+='        this.__ig1.ajoute_les_evenements_aux_boutons();\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
        }
        /*
          
          
          
        */
        if(ref_delete !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    page_confirmation_supprimer1(mat , d , le_colis1=null){\r\n';
            src_client2+='        if( !le_colis1.__xva.hasOwnProperty( \'page_confirmation_supprimer1\' )){\r\n';
            src_client2+='            return( this.__ig1.affiche_les_messages({"__xst" : __xer ,"__xme" : \'cet élément n\\\'a pas été trouvé\'}) );\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let enreg=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];\r\n';
            src_client2+='        this.__ig1.afficher_le_titre_des_zones( \'vv_ecran_suppression\' , \'entree_module\' , this.DUN_DUNE_ELEMENT_GERE , enreg[\'T0.' + champ_primaire + '\'] , this.moi , \'' + champ_primaire + '\' );\r\n';
            src_client2+='        let o1=\'\';\r\n';
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                    /*
                      this.#les_bases
                    */
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                       && ne_pas_prendre_les_valeurs_en_session === 0
                ){
                    src_client2+='        /*\r\n';
                    src_client2+='          =====================================================================================================\r\n';
                    src_client2+='          pas d\'édition pour le champ ' + obj_champ.nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur )\r\n';
                    src_client2+='        */\r\n';
                }else if(obj_champ.hasOwnProperty( 'table_mere' )
                       && obj_champ.hasOwnProperty( 'champ_pere' )
                       && obj_champ.table_mere !== ''
                       && obj_champ.champ_pere !== ''
                       && ne_pas_prendre_les_valeurs_en_session === 1
                ){
                    src_client2+='        /*\r\n';
                    src_client2+='          =====================================================================================\r\n';
                    src_client2+='        */\r\n';
                    src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                    src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                    src_client2+='        o1 += \'        <input type="hidden" value="\' ;\r\n';
                    src_client2+='        o1+=enreg[\'T0.' + obj_champ.nom_du_champ + '\'] ;\r\n';
                    src_client2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                    src_client2+='        o1 += \'        <span>\';\r\n';
                    src_client2+='        o1 +=  \'(\'+enreg[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                    for( let j=0 ; j < les_jointures.length ; j++ ){
                        if(les_jointures[j].alias2 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                               && obj_champ.nom_du_champ === les_jointures[j].champ2
                        ){
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                src_client2+='        o1 +=  this.__ig1.fi2(enreg[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }else if(les_jointures[j].alias1 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                               && obj_champ.nom_du_champ === les_jointures[j].champ1
                        ){
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                src_client2+='        o1 +=  this.__ig1.fi2(enreg[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }
                    }
                    src_client2+='        o1 += \'</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'  </div>\' ;\r\n';
                    src_client2+='\r\n';
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                ){
                }else{
                    src_client2+='        /*\n';
                    src_client2+='          =====================================================================================\n';
                    src_client2+='        */\n';
                    src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                    src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                    if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                            size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        }
                        src_client2+='';
                        src_client2+='        o1 += \'      <input disabled ';
                        src_client2+=' type="text" id="' + obj_champ.nom_du_champ + '" ' + size + ' ';
                        src_client2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" ';
                        src_client2+='  />\' ;\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                        src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                        src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression1( \'chp_texte_tache\' );\r\n';
                        src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                        src_client2+='        o1 += \'            <textarea disabled ';
                        src_client2+='id="' + obj_champ.nom_du_champ + '" rows="2"  cols="50" >';
                        src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                        src_client2+='</textarea>\' ;\r\n';
                        src_client2+='            o1 += \'        </div>\' ;\r\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                        if(obj_champ.hasOwnProperty( 'champ_pere' ) && obj_champ.champ_pere !== ''){
                            /*
                              le champ référence
                            */
                            src_client2+='        o1+=\'        <span id="' + obj_champ.nom_du_champ + '" >(\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\')</span>\' ;\r\n';
                            /*
                              le champ référence
                            */
                            /* il faut aller chercher les libelles parents */
                            let les_champs_de_la_table_mere=this.#obj_bdd[obj_champ.table_mere].champs;
                            let trouve=null;
                            for(let j in les_champs_de_la_table_mere){
                                if(les_champs_de_la_table_mere[j].meta.hasOwnProperty( 'est_libelle_lien' )
                                       && les_champs_de_la_table_mere[j].meta.est_libelle_lien === 1
                                ){
                                    trouve=j;
                                    break;
                                }
                            }
                            if(trouve !== null){
                                /*
                                  on a trouvé un champ lien direct dans la table mère qui joue le role de libellé
                                  il faut aller férifier que la requete select possède ce lien
                                */
                                for(let j in liste_des_champs_select){
                                    if(liste_des_champs_select[j].nom_du_champ === trouve && liste_des_champs_select[j].prefixe_du_champ !== 'T0'){
                                        src_client2+='        o1+=\'       / <span>\' + this.__ig1.fi2(enreg[\'' + liste_des_champs_select[j].prefixe_du_champ + '.' + trouve + '\'])+\'</span>\' ;\r\n';
                                    }
                                }
                            }else{
                                /*
                                  pas de champ lien direct trouvé, on essaie de remonter aux n-y
                                */
                                for(let j in les_champs_de_la_table_mere){
                                    if(les_champs_de_la_table_mere[j].hasOwnProperty( 'champ_pere' ) && les_champs_de_la_table_mere[j].champ_pere !== ''){
                                        let les_champs_de_la_table_mere_de_la_table_mere=this.#obj_bdd[les_champs_de_la_table_mere[j].table_mere].champs;
                                        let trouve2=null;
                                        for(let k in les_champs_de_la_table_mere_de_la_table_mere){
                                            if(les_champs_de_la_table_mere_de_la_table_mere[k].meta.hasOwnProperty( 'est_libelle_lien' )
                                                   && les_champs_de_la_table_mere_de_la_table_mere[k].meta.est_libelle_lien === 1
                                            ){
                                                trouve2=k;
                                                break;
                                            }
                                        }
                                        if(trouve2 !== null){
                                            for(let k in liste_des_champs_select){
                                                if(liste_des_champs_select[k].nom_du_champ === trouve2 && liste_des_champs_select[k].prefixe_du_champ !== 'T0'){
                                                    src_client2+='        o1+=\'       / <span>\' + this.__ig1.fi2(enreg[\'' + liste_des_champs_select[k].prefixe_du_champ + '.' + trouve2 + '\'])+\'</span>\' ;\r\n';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }else{
                            src_client2+='        o1+=\'      ';
                            src_client2+='<input disabled type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                            src_client2+=' value="';
                            src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                            src_client2+='" />\' ;\r\n';
                            src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        }
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'FLOAT'){
                        src_client2+='        o1 += \'      ';
                        src_client2+='<input disabled type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" />\' ;\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'DECIMAL'){
                        src_client2+='        o1 += \'      ';
                        src_client2+='<input disabled type="number" size="31" maxlength="31" id="' + obj_champ.nom_du_champ + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" />\' ;\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    }else{
                        /*
                          AFR
                        */
                        debugger;
                    }
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'  </div>\' ;\r\n';
                }
            }
            src_client2+='        /*\n';
            src_client2+='          =====================================================================================\n';
            src_client2+='        */\n';
            src_client2+='        o1+=\'      <input type="hidden" id="' + champ_primaire + '" value="\'+enreg[\'T0.' + champ_primaire + '\']+\'" />\';\r\n';
            src_client2+='        /*\n';
            src_client2+='          =====================================================================================\n';
            src_client2+='        */\n';
            src_client2+='        let cmd=\'\';\r\n';
            src_client2+='        cmd+=\'liste1(\';\r\n';
            src_client2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
            src_client2+='          if(this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
            src_client2+='            cmd+=i+\'(\\\'\'+this.__ig1.fi2(this.filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
            src_client2+='          }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        cmd+=\')\';\r\n';
            src_client2+='        let obj2=this.__ig1.__rev1.rev_tm(cmd);\r\n';
            src_client2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
            src_client2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" value="\'+this.__ig1.fi2(jso)+\'" />\';\r\n';
            src_client2+='        document.getElementById( \'vv_ecran_suppression_zone_contenu\' ).innerHTML=o1;\r\n';
            src_client2+='        this.__ig1.maj_title_htm1(\'suppression \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
            src_client2+='        if(this.__ig1.stockage_local[\'parametres\'][\'__deverminage\'][\'valeur\']>0){\r\n';
            src_client2+='            this.__ig1.maj_hash(mat,0);\r\n';
            src_client2+='        }\r\n';
            src_client2+='        this.__ig1.ajoute_les_evenements_aux_boutons();\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='\r\n';
            src_client2+='    }\r\n';
            src_client2+='\r\n';
        }
        /*
          
          
          
        */
        if(ref_select !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    page_voir1(mat , d , le_colis1=null){\r\n';
            src_client2+='        if( !le_colis1.__xva.hasOwnProperty( \'page_voir1\' )){\r\n';
            src_client2+='            return( this.__ig1.affiche_les_messages({"__xst" : __xer ,"__xme" : \'cet élément n\\\'a pas été trouvé\'}) );\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let enreg=le_colis1.__xva.page_voir1.__xva[0];\r\n';
            src_client2+='        this.__ig1.afficher_le_titre_des_zones( \'vv_ecran_visualisation\' , \'entree_module\' , this.DUN_DUNE_ELEMENT_GERE , enreg[\'T0.' + champ_primaire + '\'] , this.moi , \'' + champ_primaire + '\' );\r\n';
            src_client2+='        let o1=\'\';\r\n';
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                    /*
                      this.#les_bases
                    */
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                ){
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        src_client2+='        /*\r\n';
                        src_client2+='          =====================================================================================================\r\n';
                        src_client2+='        */\r\n';
                        src_client2+='        o1+=\'  <div class="yy_edition_champ1">\';\r\n';
                        src_client2+='        o1+=\'    <div class="yy_edition_libelle1">\';\r\n';
                        src_client2+='        o1+=\'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\';\r\n';
                        src_client2+='        o1+=\'    </div>\';\r\n';
                        src_client2+='        o1+=\'    <div class="yy_edition_valeur1">\';\r\n';
                        src_client2+='        o1+=\'        <input type="hidden" value="\';\r\n';
                        src_client2+='        o1+=enreg[\'T0.' + obj_champ.nom_du_champ + '\'];\r\n';
                        src_client2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\';\r\n';
                        src_client2+='        o1+=\'        <span>\';\r\n';
                        src_client2+='        o1+=\'(\' + enreg[\'T0.' + obj_champ.nom_du_champ + '\'] + \') \';\r\n';
                        for( let j=0 ; j < les_jointures.length ; j++ ){
                            if(les_jointures[j].aa_provenance === 'jointure_gauche'
                                   && 'chi_id_utilisateur' === les_jointures[j].champ1
                                   && les_jointures[j].alias_de_la_table !== 'T0'
                            ){
                                src_client2+='        o1+=this.__ig1.fi2( enreg[\'' + les_jointures[j].alias_de_la_table + '.chp_nom_de_connexion_utilisateur\'] );\r\n';
                            }
                        }
                        src_client2+='        o1+=\'</span>\';\r\n';
                        src_client2+='        o1+=\'    </div>\';\r\n';
                        src_client2+='        o1+=\'  </div>\';\r\n';
                        src_client2+='\r\n';
                    }else{
                        src_client2+='        /*\r\n';
                        src_client2+='          =====================================================================================================\r\n';
                        src_client2+='          pas d\'édition pour le champ ' + obj_champ.nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur )\r\n';
                        src_client2+='        */\r\n';
                    }
                }else if(obj_champ.hasOwnProperty( 'table_mere' )
                       && obj_champ.hasOwnProperty( 'champ_pere' )
                       && obj_champ.table_mere !== ''
                       && obj_champ.champ_pere !== ''
                ){
                    src_client2+='        /*\r\n';
                    src_client2+='          =====================================================================================\r\n';
                    src_client2+='        */\r\n';
                    src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                    src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                    src_client2+='        o1 += \'        <input type="hidden" value="\' ;\r\n';
                    src_client2+='        o1+=enreg[\'T0.' + obj_champ.nom_du_champ + '\'] ;\r\n';
                    src_client2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                    src_client2+='        o1 += \'        <span>\';\r\n';
                    src_client2+='        o1 +=  \'(\'+enreg[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                    for( let j=0 ; j < les_jointures.length ; j++ ){
                        if(les_jointures[j].alias2 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                               && obj_champ.nom_du_champ === les_jointures[j].champ2
                        ){
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                src_client2+='        o1 +=  this.__ig1.fi2(enreg[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }else if(les_jointures[j].alias1 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                               && obj_champ.nom_du_champ === les_jointures[j].champ1
                        ){
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                src_client2+='        o1 +=  this.__ig1.fi2(enreg[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }
                    }
                    src_client2+='        o1 += \'</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'  </div>\' ;\r\n';
                    src_client2+='\r\n';
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                ){
                }else{
                    src_client2+='        /*\n';
                    src_client2+='          =====================================================================================\n';
                    src_client2+='        */\n';
                    src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                    src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                    if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                            size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        }
                        src_client2+='';
                        src_client2+='        o1 += \'      <input ';
                        src_client2+=' type="text" id="' + obj_champ.nom_du_champ + '" ' + size + ' ';
                        src_client2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" ';
                        src_client2+='  />\' ;\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                        src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                        src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression1( \'chp_texte_tache\' );\r\n';
                        src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                        src_client2+='        o1 += \'            <textarea ';
                        src_client2+='id="' + obj_champ.nom_du_champ + '" rows="2"  cols="50" >';
                        src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                        src_client2+='</textarea>\' ;\r\n';
                        src_client2+='            o1 += \'        </div>\' ;\r\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'
                           || obj_champ.genre_objet_du_champ.chp_espece_genre === 'FLOAT'
                    ){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            /* champ entier standard */
                            src_client2+='        o1 += \'      ';
                            src_client2+='<input type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                            src_client2+=' value="';
                            src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                            src_client2+='" />\' ;\r\n';
                            src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                                src_client2+='';
                                src_client2+='        o1 += \'        ';
                                src_client2+='<input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" ';
                                src_client2+='value="';
                                src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                                src_client2+='" >\'; ;\r\n';
                            }else{
                                /*
                                  un champ entier qui comporte des valeurs discrètes
                                */
                                src_client2+='';
                                src_client2+='        o1 += \'        ';
                                src_client2+='<input type="text" id="' + obj_champ.nom_du_champ + '" value="';
                                src_client2+='\' + this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                                src_client2+='" >\'; ;\r\n';
                                src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                            }
                        }
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'DECIMAL'){
                        src_client2+='        o1 += \'      ';
                        src_client2+='<input type="number" size="21" maxlength="21" id="' + obj_champ.nom_du_champ + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__ig1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" />\' ;\r\n';
                        src_client2+='        o1+=this.__ig1.__fnt1.boutons_suppression2( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    }else{
                        /*
                          AFR
                        */
                        debugger;
                    }
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'  </div>\' ;\r\n';
                }
            }
            src_client2+='        /*\n';
            src_client2+='          =====================================================================================\n';
            src_client2+='        */\n';
            src_client2+='        document.getElementById( \'vv_ecran_visualisation_zone_contenu\' ).innerHTML=o1;\r\n';
            src_client2+='        this.__ig1.maj_title_htm1(\'visualisation \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
            src_client2+='        this.__ig1.maj_hash(mat,0);\r\n';
            src_client2+='        this.__ig1.ajoute_les_evenements_aux_boutons();\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='\r\n';
            src_client2+='    }\r\n';
            src_client2+='\r\n';
        }
        /*
          
        */
        if(ref_insert !== '' && ref_select !== ''){
            /*
              
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='      recherche dans la base de données l\'enregistrement à dupliquer.\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_duplication1( mat , d ,' + champ_primaire + '=null){\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        if(' + champ_primaire + '===null){\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            let l01=mat.length;\r\n';
            src_serveur_js2+='            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='                if(mat[i][1] === \'' + champ_primaire + '\'\r\n';
            src_serveur_js2+='                       && mat[i][2] === \'f\'\r\n';
            src_serveur_js2+='                       && mat[i][8] === 1\r\n';
            src_serveur_js2+='                       && mat[i + 1][2] === \'c\'\r\n';
            src_serveur_js2+='                       && mat[i + 1][4] === 0\r\n';
            src_serveur_js2+='                ){\r\n';
            src_serveur_js2+='                    ' + champ_primaire + '=parseInt( mat[i + 1][1] , 10 );\r\n';
            src_serveur_js2+='                }\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        let criteres_' + ref_select + '={\r\n';
            src_serveur_js2+='             /*  */\r\n';
            src_serveur_js2+='            "T0_' + champ_primaire + '" : ' + champ_primaire + '\r\n';
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__ig1.sql_iii( ' + ref_select + ' , criteres_' + ref_select + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_select + '.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tt' + ref_select + '.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'page_duplication1\']=tt' + ref_select + ';\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
        }
        if(ref_select !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_voir1( mat , d ){\r\n';
            src_serveur_js2+='        let ' + champ_primaire + '=0;\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'' + champ_primaire + '\'\r\n';
            src_serveur_js2+='                   && mat[i][2] === \'f\'\r\n';
            src_serveur_js2+='                   && mat[i][8] === 1\r\n';
            src_serveur_js2+='                   && mat[i + 1][2] === \'c\'\r\n';
            src_serveur_js2+='                   && mat[i + 1][4] === 0\r\n';
            src_serveur_js2+='            ){\r\n';
            src_serveur_js2+='                ' + champ_primaire + '=parseInt( mat[i + 1][1] , 10 );\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(' + champ_primaire + ' === 0){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});\r\n';
            src_serveur_js2+='        }\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        let critere_' + ref_select + '={\r\n';
            src_serveur_js2+='                \'T0_' + champ_primaire + '\' : ' + champ_primaire + ',\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_pere_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__ig1.sql_iii( ' + ref_select + ' , critere_' + ref_select + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'page_voir1\']=tt' + ref_select + ';\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
        }
        if(ref_delete !== '' && ref_select !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async supprimer1( mat , d ){\r\n';
            src_serveur_js2+='        let nom_formulaire=this.__ig1.donnees_recues[__xva][\'__co1\'];\r\n';
            src_serveur_js2+='        let form=this.__ig1.donnees_recues[__xva][\'__fo1\'][nom_formulaire];\r\n';
            if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' ) && this.#obj_table.meta.fonctions_spéciales1 !== ''){
                let obj1=this.__ig1.__rev1.rev_tm( this.#obj_table.meta.fonctions_spéciales1 );
                if(obj1.__xst === __xsu){
                    for( let i=1 ; i < obj1.__xva.length ; i=obj1.__xva[i][12] ){
                        if(obj1.__xva[i][1] === 'ne_pas_supprimer_id_un'
                               && obj1.__xva[i][2] === 'f'
                               && obj1.__xva[i][8] === 1
                               && obj1.__xva[i + 1][2] === 'c'
                               && this.__ig1.est_num( obj1.__xva[i + 1][1] )
                        ){
                            src_serveur_js2+='        /* fonctions_spéciales1(ne_pas_supprimer_id_un(' + obj1.__xva[i + 1][1] + ')) */\r\n';
                            src_serveur_js2+='        if(form[\'' + champ_primaire + '\']<=' + obj1.__xva[i + 1][1] + '){\r\n';
                            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : \'il n\\\'est pas possible de supprimer cet élément [\' + this.__ig1.nl2() + \']\'});\r\n';
                            src_serveur_js2+='        }\r\n';
                        }
                    }
                }
            }
            src_serveur_js2+='        /**/\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        let criteres_' + ref_select + '={/**/\r\n';
            src_serveur_js2+='                \'T0_' + champ_primaire + '\' : form[\'' + champ_primaire + '\'],\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_pere_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__ig1.sql_iii( ' + ref_select + ' , criteres_' + ref_select + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_select + '.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tt' + ref_select + '.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        let tas=await this.test_avant_supprimer( mat , d , form , tt' + ref_select + '[__xva][0] , __db1 );\r\n';
            src_serveur_js2+='        if(tas.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tas.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let criteres_' + ref_delete + '={/**/\r\n';
            src_serveur_js2+='                \'' + champ_primaire + '\' : form[\'' + champ_primaire + '\'],\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_delete){
                if(liste_des_champs_condition_delete[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_delete[i].nom_du_champ )
                ){
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        src_serveur_js2+='                \'' + liste_des_champs_condition_delete[i].nom_du_champ + '\' : form[\'' + liste_des_champs_condition_delete[i].nom_du_champ + '\'] ,\r\n';
                    }else{
                        src_serveur_js2+='                \'' + liste_des_champs_condition_delete[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_delete[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    }
                    deja_pris.push( liste_des_champs_condition_delete[i].nom_du_champ );
                }else if(liste_des_champs_condition_delete[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_delete[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'' + liste_des_champs_condition_delete[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_delete[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_delete[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt' + ref_delete + '=await this.__ig1.sql_iii( ' + ref_delete + ' , criteres_' + ref_delete + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        if(tt' + ref_delete + '.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tt' + ref_delete + '.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let aac=await this.actions_apres_supprimer( mat , d , form , tt' + ref_select + '[__xva][0] , __db1 );\r\n';
            src_serveur_js2+='        if(aac.__xst === __xer){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : aac.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        if(form[\'__mat_liste_si_ok\'] !== \'\'){\r\n';
            src_serveur_js2+='            let mat1=JSON.parse( form[\'__mat_liste_si_ok\'] );\r\n';
            src_serveur_js2+='            await this.filtre1( mat1 , 1 , __db1 );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            /*
              
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_confirmation_supprimer1( mat , d ){\r\n';
            src_serveur_js2+='        let ' + champ_primaire + '=0;\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'' + champ_primaire + '\'\r\n';
            src_serveur_js2+='                   && mat[i][2] === \'f\'\r\n';
            src_serveur_js2+='                   && mat[i][8] === 1\r\n';
            src_serveur_js2+='                   && mat[i + 1][2] === \'c\'\r\n';
            src_serveur_js2+='                   && mat[i + 1][4] === 0\r\n';
            src_serveur_js2+='            ){\r\n';
            src_serveur_js2+='                ' + champ_primaire + '=parseInt( mat[i + 1][1] , 10 );\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(' + champ_primaire + ' === 0){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});\r\n';
            src_serveur_js2+='        }\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        let critere_' + ref_select + '={\r\n';
            src_serveur_js2+='                \'T0_' + champ_primaire + '\' : ' + champ_primaire + ',\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_pere_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].hasOwnProperty( 'champ_dans_la_base' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base !== undefined
                       && liste_des_champs_condition_select[i].champ_dans_la_base.hasOwnProperty( 'champ_est_en_session1' )
                       && liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__ig1.sql_iii( ' + ref_select + ' , critere_' + ref_select + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'page_confirmation_supprimer1\']=tt' + ref_select + ';\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
            /*
            */
        }
        /*
          
          
        */
        if(ref_insert !== '' && ref_select !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    page_duplication1( mat , d , le_colis1 ){\r\n';
            src_client2+='        this.page_creer1( mat , d , le_colis1.__xva.page_duplication1.__xva[0]);\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
        }
        if(ref_insert !== '' && ref_select !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    verifier_creer1(mat , d , données){\r\n';
            src_client2+='        let retour_a_la_liste=\'\';\r\n';
            src_client2+='        let l01=mat.length;\r\n';
            src_client2+='        for(let i=d+1;i<l01;i=mat[i][12]){\r\n';
            src_client2+='            if(mat[i][1]===\'retour_a_la_liste\' && mat[i][2]===\'f\' ){\r\n';
            src_client2+='                retour_a_la_liste=\'retour_a_la_liste()\';\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='\r\n';
            src_client2+='        let co1=données.__co1;\r\n';
            src_client2+='        let fo1=données.__fo1[co1];\r\n';
            var liste_des_conversions=[];
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                ){
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        src_client2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                        src_client2+='            this.__ig1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseignée\'  });\r\n';
                        src_client2+='            this.__ig1.affiche_les_messages();\r\n';
                        src_client2+='            this.__ig1.retablir_les_boutons_masques();\r\n';
                        src_client2+='            try{\r\n';
                        src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                        src_client2+='            }catch{}\r\n';
                        src_client2+='            return({__xst:__xsu})\r\n';
                        src_client2+='        }\r\n';
                        liste_des_conversions.push( obj_champ );
                    }else{
                        src_client2+='    /*\r\n';
                        src_client2+='      =====================================================================================================\r\n';
                        src_client2+='      pas de test pour le champ ' + obj_champ.nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur )\r\n';
                        src_client2+='    */\r\n';
                    }
                }else if(obj_champ.genre_objet_du_champ
                       && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                           || obj_champ.hasOwnProperty( 'champ_pere_est_en_session1' )
                               && obj_champ.champ_pere_est_en_session1 === true
                           || obj_champ.hasOwnProperty( 'champ_est_en_session1' )
                               && obj_champ.champ_est_en_session1 === true
                           || obj_champ.genre_objet_du_champ.che_est_session_genre === 1)
                ){
                    /*
                      pas de test pour ces cas
                    */
                }else{
                    liste_des_conversions.push( obj_champ );
                    if(obj_champ.genre_objet_du_champ){
                        if(obj_champ.non_nulle === true){
                            src_client2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                            src_client2+='            this.__ig1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseignée\'  });\r\n';
                            src_client2+='            this.__ig1.affiche_les_messages();\r\n';
                            src_client2+='            this.__ig1.retablir_les_boutons_masques();\r\n';
                            src_client2+='            try{\r\n';
                            src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                            src_client2+='            }catch{}\r\n';
                            src_client2+='            return({__xst:__xsu})\r\n';
                            src_client2+='        }\r\n';
                        }
                        if(obj_champ.genre_objet_du_champ.che_est_parmis_genre === 1){
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre.indexOf( '\'' ) >= 0){
                                src_client2+='        console.log(\'%c IL MANQUE UN TEST POUR LE CHAMP ' + nom_du_champ + '\',\'color:red;background:lightblue;\')\r\n';
                            }else{
                                src_client2+='        if(fo1[\'' + nom_du_champ + '\'] !== \'\'){\r\n';
                                src_client2+='            let tab_est_parmis_' + i + '=\'' + obj_champ.genre_objet_du_champ.cht_parmis_genre.replace( /\'/g , '\\\'' ) + '\'.split(\',\');\r\n';
                                src_client2+='            if(!tab_est_parmis_' + i + '.includes(fo1[\'' + nom_du_champ + '\'])){\r\n';
                                src_client2+='                this.__ig1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être correctement renseignée (utilisez les boutons)\'  });\r\n';
                                src_client2+='                this.__ig1.affiche_les_messages();\r\n';
                                src_client2+='                this.__ig1.retablir_les_boutons_masques();\r\n';
                                src_client2+='                try{\r\n';
                                src_client2+='                  document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                                src_client2+='                }catch{}\r\n';
                                src_client2+='                return({__xst:__xsu})\r\n';
                                src_client2+='            }\r\n';
                                src_client2+='        }\r\n';
                            }
                        }
                    }
                    if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                        var obj1=this.__ig1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                        if(obj1.__xst !== __xsu){
                            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                        }
                        let mat1=obj1.__xva;
                        let l01=mat1.length;
                        for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                            if(mat1[j][2] === 'f'){
                                src_client2+='\n';
                                src_client2+='        var __test_' + i + '_' + j + '=this.__ig1.__fnts_c_et_s.' + mat1[j][1] + '(';
                                /* 0,99,fo1[\'chp_texte_tache\'],\'priorite\'];\r\n'; */
                                if(mat1[j][8] === 0){
                                }else{
                                    for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                        if(mat1[k][2] === 'c'){
                                            if(mat1[k][4] === 0){
                                                src_client2+=mat1[k][1] + ',';
                                            }else if(mat1[k][4] === 1){
                                                src_client2+='\'' + mat1[k][1].replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\',';
                                            }else{
                                                /* afr */
                                                debugger;
                                                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                                            }
                                        }else{
                                            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                                        }
                                    }
                                }
                                src_client2+='fo1[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.nom_bref_du_champ + '\');\r\n';
                                src_client2+='        if(__test_' + i + '_' + j + '.__xst!==__xsu){\r\n';
                                src_client2+='            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : __test_' + i + '_' + j + '.__xme} );\r\n';
                                src_client2+='            this.__ig1.affiche_les_messages();\r\n';
                                src_client2+='            this.__ig1.retablir_les_boutons_masques();\r\n';
                                src_client2+='            try{\r\n';
                                src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                                src_client2+='            }catch{}\r\n';
                                src_client2+='            return({__xst:__xsu})\r\n';
                                src_client2+='        }\r\n';
                                src_client2+='\r\n';
                            }else{
                                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                            }
                        }
                    }
                }
            }
            if(liste_des_conversions.length > 0){
                src_client2+='        /* conversion des données numériques verifier_creer début */\r\n';
                for( let i=0 ; i < liste_des_conversions.length ; i++ ){
                    let reference_externe_base='';
                    let reference_externe_table='';
                    let reference_externe_champ='';
                    if(liste_des_conversions[i].meta.hasOwnProperty( 'reference_externe_base' )){
                        reference_externe_base=parseInt( liste_des_conversions[i].meta.reference_externe_base , 10 );
                        reference_externe_table=liste_des_conversions[i].meta.reference_externe_table;
                        reference_externe_champ=liste_des_conversions[i].meta.reference_externe_champ;
                        /*
                          this.#les_bases
                        */
                    }
                    if(reference_externe_base === 1
                           && reference_externe_table === 'tbl_utilisateurs'
                           && reference_externe_champ === 'chi_id_utilisateur'
                           && ne_pas_prendre_les_valeurs_en_session === 0
                    ){
                        src_client2+='        /* pas de convertion pour le champ ' + liste_des_conversions[i].nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur ) */';
                    }else{
                        if(liste_des_conversions[i].espece_du_champ === 'INTEGER'){
                            src_client2+='        fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']=fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:parseInt(fo1[\'' + liste_des_conversions[i].nom_du_champ + '\'],10);\r\n';
                        }else if(liste_des_conversions[i].espece_du_champ === 'FLOAT' || liste_des_conversions[i].espece_du_champ === 'DECIMAL'){
                            src_client2+='        fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']=fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:parseFloat(fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']);\r\n';
                        }
                    }
                }
                src_client2+='        /* conversion des données numériques verifier_creer fin */\r\n';
            }
            src_client2+='        /*\r\n';
            src_client2+='          tout a été vérifié\r\n';
            src_client2+='        */\r\n';
            src_client2+='        let __fo1={};\r\n';
            src_client2+='        __fo1[co1]=fo1;\r\n';
            src_client2+='\r\n';
            src_client2+='        this.__ig1.envoyer_un_colis_au_worker( {/**/\r\n';
            src_client2+='            "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(creer1(\'+retour_a_la_liste+\'))))\',\r\n';
            src_client2+='            "__xva" : { "__fo1" : __fo1 , "__co1" : co1 }\r\n';
            src_client2+='\r\n';
            src_client2+='        } );\r\n';
            src_client2+='        return({__xst:__xsu})\r\n';
            src_client2+='\r\n';
            src_client2+='\r\n';
            src_client2+='    }\r\n';
            src_client2+='\r\n';
        }
        /*
          
          
        */
        if(ref_select !== '' && ref_insert !== ''){
            /*
              js serveur
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async creer1( mat , d ){\r\n';
            src_serveur_js2+='        let retour_a_la_liste=false;\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'retour_a_la_liste\' && mat[i][2] === \'f\'){\r\n';
            src_serveur_js2+='                retour_a_la_liste=true;\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let nom_formulaire=this.__ig1.donnees_recues[__xva][\'__co1\'];\r\n';
            src_serveur_js2+='        let form=this.__ig1.donnees_recues[__xva][\'__fo1\'][nom_formulaire];\r\n';
            src_serveur_js2+='\r\n';
            if(liste_des_conversions.length > 0){
                src_serveur_js2+='        /* conversion des données numériques début */\r\n';
                for( let i=0 ; i < liste_des_conversions.length ; i++ ){
                    let nom_du_champ=liste_des_conversions[i].nom_du_champ;
                    let obj_champ=this.#obj_table.champs[nom_du_champ];
                    let reference_externe_base='';
                    let reference_externe_table='';
                    let reference_externe_champ='';
                    if(liste_des_conversions[i].meta.hasOwnProperty( 'reference_externe_base' )){
                        reference_externe_base=parseInt( liste_des_conversions[i].meta.reference_externe_base , 10 );
                        reference_externe_table=liste_des_conversions[i].meta.reference_externe_table;
                        reference_externe_champ=liste_des_conversions[i].meta.reference_externe_champ;
                        /*
                          this.#les_bases
                        */
                    }
                    let valeur_par_defaut='null';
                    if(reference_externe_base === 1
                           && reference_externe_table === 'tbl_utilisateurs'
                           && reference_externe_champ === 'chi_id_utilisateur'
                    ){
                        if(ne_pas_prendre_les_valeurs_en_session === 1){
                            src_serveur_js2+='        form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                            src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\'] === null || ';
                            src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\' || ';
                            src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\']=== undefined ';
                            src_serveur_js2+='? ( ' + valeur_par_defaut + ' ):parseInt(form[\'' + liste_des_conversions[i].nom_du_champ + '\'],10);\r\n';
                        }else{
                            /*
                              pas de convertion pour ce champ
                            */
                            src_serveur_js2+='        /* pas de convertion pour le champ ' + liste_des_conversions[i].nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur ) */';
                        }
                    }else if(liste_des_conversions[i].espece_du_champ === 'INTEGER'){
                        /*
                          
                          à faire, utiliser obj_champ.non_nulle===true à la place de che_est_obligatoire_genre === 1
                          
                        */
                        if(liste_des_conversions[i].genre_objet_du_champ.che_est_obligatoire_genre === 1){
                            if(liste_des_conversions[i].a_une_valeur_par_defaut === 1){
                                if(liste_des_conversions[i].la_valeur_par_defaut_est_caractere === 1){
                                    valeur_par_defaut='\'' + liste_des_conversions[i].valeur_par_defaut.replace( /\'/g , '\\\'' ) + '\'';
                                }else{
                                    valeur_par_defaut=liste_des_conversions[i].valeur_par_defaut;
                                }
                            }
                        }
                        src_serveur_js2+='        form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\'] === null || form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\' || form[\'' + liste_des_conversions[i].nom_du_champ + '\']=== undefined ? ( ' + valeur_par_defaut + ' ):parseInt(form[\'' + liste_des_conversions[i].nom_du_champ + '\'],10);\r\n';
                    }else if(liste_des_conversions[i].espece_du_champ === 'FLOAT'){
                        src_serveur_js2+='        form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\'] === null || form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\' || form[\'' + liste_des_conversions[i].nom_du_champ + '\']=== undefined ? ( ' + valeur_par_defaut + ' ):parseFloat(form[\'' + liste_des_conversions[i].nom_du_champ + '\']);\r\n';
                    }
                }
                src_serveur_js2+='        /* conversion des données numériques fin */\r\n';
            }
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        let __tac=await this.tests_avant_creer(mat , d , form,__db1);\r\n';
            src_serveur_js2+='        if(__tac.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : __tac.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let criteres_' + ref_insert + '={\r\n';
            src_serveur_js2+='            donnees :[{\r\n';
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(nom_du_champ === 'fld_id_commercial_client'){
                }
                let reference_externe_base='';
                let reference_externe_table='';
                let reference_externe_champ='';
                if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                    reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                    reference_externe_table=obj_champ.meta.reference_externe_table;
                    reference_externe_champ=obj_champ.meta.reference_externe_champ;
                    /*
                      this.#les_bases
                    */
                }
                if(reference_externe_base === 1
                       && reference_externe_table === 'tbl_utilisateurs'
                       && reference_externe_champ === 'chi_id_utilisateur'
                ){
                    if(ne_pas_prendre_les_valeurs_en_session === 1){
                        if(obj_champ.non_nulle === false){
                            src_serveur_js2+='                    \'' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'] === \'\' ? ( null ) : ( form[\'' + nom_du_champ + '\'] ),\n';
                        }else{
                            src_serveur_js2+='                    \'' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'],\n';
                        }
                    }else{
                        src_serveur_js2+='                    \'' + nom_du_champ + '\' : this.__ig1.donnees_retournees.chi_id_utilisateur ,\n';
                    }
                }else if(obj_champ.genre_objet_du_champ
                       && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                }else if(liste_des_champs_insert[i].champ_dans_la_base.meta.est_en_session === '1'){
                    if(liste_des_champs_insert[i].champ_dans_la_base.meta.nom_en_session !== ''){
                        if(ne_pas_prendre_les_valeurs_en_session === 1){
                            src_serveur_js2+='                    \'' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'] ,\n';
                        }else{
                            src_serveur_js2+='                    \'' + nom_du_champ + '\' : this.__ig1.donnees_retournees.' + liste_des_champs_insert[i].champ_dans_la_base.meta.nom_en_session + ' ,\n';
                        }
                    }else{
                        debugger;
                    }
                }else if(ne_pas_prendre_les_valeurs_en_session === 0 && obj_champ.champ_pere_est_en_session1 === true){
                    src_serveur_js2+='                    \'' + nom_du_champ + '\' : this.__ig1.donnees_retournees.' + obj_champ.champ_pere + ',\n';
                }else if(ne_pas_prendre_les_valeurs_en_session === 0
                       && (obj_champ.champ_session === true
                           || obj_champ.champ_pere_est_en_session1 === true)
                ){
                    src_serveur_js2+='                    \'' + nom_du_champ + '\' : this.__ig1.donnees_retournees.' + obj_champ.champ_pere + ',\n';
                }else{
                    if(obj_champ.non_nulle === false){
                        src_serveur_js2+='                    \'' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'] === \'\' ? ( null ) : ( form[\'' + nom_du_champ + '\'] ),\n';
                    }else{
                        src_serveur_js2+='                    \'' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'],\n';
                    }
                }
            }
            src_serveur_js2+='            }]\r\n';
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        await __db1.exec(\'BEGIN TRANSACTION;\');\r\n';
            src_serveur_js2+='        let tt' + ref_insert + '=await this.__ig1.sql_iii( ' + ref_insert + ' , criteres_' + ref_insert + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_insert + '.__xst !== __xsu || tt' + ref_insert + '[\'changements\'] !== 1){\r\n';
            src_serveur_js2+='            await __db1.exec( \'ROLLBACK;\' );\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tt' + ref_insert + '.__xme + \' l\\\'insertion a échoué [\' + this.__ig1.nl2() + \']\'});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let aac=await this.action_apres_creer( mat , d , tt' + ref_insert + '[\'nouvel_id\'] , form , __db1 );\r\n';
            src_serveur_js2+='        if(aac.__xst === __xer){\r\n';
            src_serveur_js2+='            await __db1.exec( \'ROLLBACK;\' );\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : \'les actions après créer ont échouées [\' + this.__ig1.nl2() + \']\'});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        await __db1.exec(\'COMMIT;\');\r\n';
            src_serveur_js2+='        if(retour_a_la_liste===true && form[\'__mat_liste_si_ok\'] !== \'\'){\r\n';
            src_serveur_js2+='            let mat1=JSON.parse( form[\'__mat_liste_si_ok\'] );\r\n';
            src_serveur_js2+='            await this.filtre1( mat1 , 1 , __db1 );\r\n';
            src_serveur_js2+='        }else{\r\n';
            src_serveur_js2+='            await this.page_modification1( mat , d , tt' + ref_insert + '[\'nouvel_id\'] , __db1 );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='    }\r\n';
        }
        if(ref_select !== '' && ref_insert !== ''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_creer1( mat , d ){\r\n';
            src_serveur_js2+='        /*#\r\n';
            src_serveur_js2+='          page optionnelle si on veut vérifier quelque chose avant de créer un projet\r\n';
            src_serveur_js2+='          dans ce cas, dans le lien de la page, il faudra remplacer :\r\n';
            src_serveur_js2+='               m1(n1(\'+this.moi+\'),f1(page_creer1()))\r\n';
            src_serveur_js2+='          par :\r\n';
            src_serveur_js2+='          pm1( m1(n1(\'+this.moi+\'),f1(page_creer1())) )\r\n';
            src_serveur_js2+='        */\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'nouveau_numero_projet\']=nouveau_numero_projet;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
        }
        if(ref_liste_ecran !== '' && pour_sous_liste_uniquement === 0){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async filtre1( mat , d , __db1=null ){\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        let option_de_13=\'\';\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'de_13\' && mat[i][2] === \'f\' && mat[i][8] === 1 && mat[i+1][2] === \'c\'){\r\n';
            src_serveur_js2+='                option_de_13=\'de_13(\' + mat[i+1][1] + \')\';\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        const __nbMax=40;\r\n';
            src_serveur_js2+='        let __num_page=0;\r\n';
            src_serveur_js2+='        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        if(!formulaire.hasOwnProperty( \'__num_page\' ) || !this.__ig1.est_num( formulaire.__num_page )){\r\n';
            src_serveur_js2+='            __num_page=0;\r\n';
            src_serveur_js2+='        }else{\r\n';
            src_serveur_js2+='            __num_page=parseInt( formulaire.__num_page , 10 );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let __debut=__num_page * __nbMax;\r\n';
            src_serveur_js2+='        let criteres_' + ref_liste_ecran + '={\r\n';
            src_serveur_js2+='             /*  */\r\n';
            src_serveur_js2+='            "quantitee" : __nbMax ,\r\n';
            src_serveur_js2+='            "debut" : __debut\r\n';
            src_serveur_js2+='        };\r\n';
            if(table_reference_est_table_virtuelle.length === 2){
                src_serveur_js2+='        let les_match=\'\';\r\n';
                for(let i in liste_des_champs_condition_liste_ecran){
                    let elem=liste_des_champs_condition_liste_ecran[i];
                    src_serveur_js2+='        if(';
                    src_serveur_js2+='formulaire[\'' + elem.préfixe_du_champ + '_\' + \'' + elem.nom_du_champ + '\'] ';
                    src_serveur_js2+='&& formulaire[\'' + elem.préfixe_du_champ + '_\' + \'' + elem.nom_du_champ + '\']!== \'\' ';
                    src_serveur_js2+='&& formulaire[\'' + elem.préfixe_du_champ + '_\' + \'' + elem.nom_du_champ + '\']!== null';
                    src_serveur_js2+='){\r\n';
                    src_serveur_js2+='            les_match+=\' {' + elem.nom_du_champ + '}:\'+formulaire[\'' + elem.préfixe_du_champ + '_\' + \'' + elem.nom_du_champ + '\'].replace( /\\-/g ,\' \' ).replace( /\\\'/g ,\' \' )+\'*\'\r\n';
                    src_serveur_js2+='        }\r\n';
                }
                src_serveur_js2+='        if(les_match !==\'\'){\r\n';
                src_serveur_js2+='            criteres_' + ref_liste_ecran + '[\'les_match\']=les_match;\r\n';
                src_serveur_js2+='        }\r\n';
            }else{
                src_serveur_js2+='        for(let i in formulaire){\r\n';
                src_serveur_js2+='            if(i !== \'__num_page\'){\r\n';
                src_serveur_js2+='                criteres_' + ref_liste_ecran + '[i]=formulaire[i];\r\n';
                src_serveur_js2+='            }\r\n';
                src_serveur_js2+='        }\r\n';
                src_serveur_js2+='        if(this.__ig1.donnees_recues.__xva.hasOwnProperty(\'__complements_sous_liste\')){\r\n';
                src_serveur_js2+='            for( let i in this.__ig1.donnees_recues.__xva.__complements_sous_liste){\r\n';
                src_serveur_js2+='                criteres_181[i]=this.__ig1.donnees_recues.__xva.__complements_sous_liste[i];\r\n';
                src_serveur_js2+='            }\r\n';
                src_serveur_js2+='        }\r\n';
                let champs_en_session='';
                let liste_des_champs='';
                if(ne_pas_prendre_les_valeurs_en_session === 0){
                    /*
                      ici, il faut prendre les champs en session
                    */
                    for(let i in liste_des_champs_condition_liste_ecran){
                        /* console.log( liste_des_champs_condition_liste_ecran[i] ); */
                        if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base === null){
                            /*
                              le champ fait référence à une table dans une autre base
                              exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                              que le champ commercial fait référence la table "utilisateur"
                            */
                        }else{
                            if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.champ_est_en_session1 === true){
                                /*
                                  par exemple, ici on traite le programme gérant les tâches et chaque tâche est rattachée à un utilisateur.
                                */
                                champs_en_session+='            criteres_' + ref_liste_ecran + '[\'' + liste_des_champs_condition_liste_ecran[i].préfixe_du_champ + '_' + liste_des_champs_condition_liste_ecran[i].nom_du_champ + '\']=this.__ig1.donnees_retournees.' + liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.nom_en_session1 + ';\r\n';
                                liste_des_champs+=',donnees_retournees.' + liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.nom_en_session1;
                            }else if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.champ_pere_est_en_session1 === true){
                                champs_en_session+='            criteres_' + ref_liste_ecran + '[\'' + liste_des_champs_condition_liste_ecran[i].préfixe_du_champ + '_' + liste_des_champs_condition_liste_ecran[i].nom_du_champ + '\']=this.__ig1.donnees_retournees.' + liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.nom_du_champ_session1 + ';\r\n';
                                liste_des_champs+=',donnees_retournees.' + liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.nom_du_champ_session1;
                            }
                        }
                    }
                }
                if(champs_en_session !== ''){
                    src_serveur_js2+='            /* debut ==== on force le(s) champ(s) en session =============================== */\r\n';
                    src_serveur_js2+=champs_en_session;
                    src_serveur_js2+='            /* fin ====== on force le(s) champ(s) en session =============================== */\r\n';
                    this.__ig1.ajoute_message( {
                            "__xst" : __xal ,
                            "__xme" : 'Attention il y a des valeurs en session, <br />c\'est peut être normal ( par exemple tâches de l\'utilisateur courant ) mais c\'est à vérifier<br />liste = ' + liste_des_champs.substr( 1 ) + '<br />' + this.__ig1.__rev1.nl2()
                        } );
                    this.__ig1.affiche_les_messages();
                }
            }
            src_serveur_js2+='        if(__db1===null){\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='            __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let tt' + ref_liste_ecran + '=await this.__ig1.sql_iii( ' + ref_liste_ecran + ' , criteres_' + ref_liste_ecran + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt' + ref_liste_ecran + '.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer ,"__xme" : tt' + ref_liste_ecran + '.__xme});\r\n';
            src_serveur_js2+='        }\r\n';
            if(table_reference_est_table_virtuelle.length === 2){
                /* pas dans le cas des tables virtuelles */
            }else{
                src_serveur_js2+='        if(tt' + ref_liste_ecran + '.__xst === __xsu && tt' + ref_liste_ecran + '.__xva.length === 0 && __debut > 0){\r\n';
                src_serveur_js2+='            /*\r\n';
                src_serveur_js2+='              si la liste est vide et que la page en cours est > 0 alors on essaie à partir de la page 0\r\n';
                src_serveur_js2+='            */\r\n';
                src_serveur_js2+='            __debut=0;\r\n';
                src_serveur_js2+='            __num_page=0;\r\n';
                src_serveur_js2+='            criteres_' + ref_liste_ecran + '[\'debut\']=__debut;\r\n';
                src_serveur_js2+='            tt' + ref_liste_ecran + '=await this.__ig1.sql_iii( ' + ref_liste_ecran + ' , criteres_' + ref_liste_ecran + ' , this.__ig1.donnees_retournees , __db1 );\r\n';
                src_serveur_js2+='        }\r\n';
            }
            src_serveur_js2+='        this.__ig1.donnees_retournees.__xva[\'__nbMax\']=__nbMax;\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'__debut\']=__debut;\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][\'__num_page\']=__num_page;\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xac]=\'pm1(m1(n1(\' + this.moi + \'),f1(\' + this.fonction_liste + \'(\' + option_de_13;\r\n';
            src_serveur_js2+='        for(let i in formulaire){\r\n';
            src_serveur_js2+='            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xac]+=\'))))\';\r\n';
            src_serveur_js2+='        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt' + ref_liste_ecran + ';\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
        }
        if(des_champs_sont_references_dans_une_autre_table === true){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async sous_liste2( mat , d ){\r\n';
            src_serveur_js2+='        const __nbMax=40;\r\n';
            src_serveur_js2+='        let criteres_' + ref_liste_ecran + '={}\r\n';
            src_serveur_js2+='        criteres_' + ref_liste_ecran + '[\'quantitee\']=__nbMax;\r\n';
            src_serveur_js2+='        /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */\r\n';
            if(this.chi_id_projet <= 2){
                src_serveur_js2+='        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );\r\n';
            }else{
                src_serveur_js2+='        let __db1=await this.__ig1.ouvrir_bdd( ' + parseInt( document.getElementById( 'vv_les_bases' ).value , 10 ) + ' );\r\n';
            }
            src_serveur_js2+='        let liste2=await this.__ig1.generique_sous_liste2(mat , d , ' + ref_liste_ecran + ' , criteres_' + ref_liste_ecran + ' , __nbMax , __db1);\r\n';
            src_serveur_js2+='        if(liste2.__xst === __xsu){\r\n';
            src_serveur_js2+='            /* faire éventuellement faire quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */\r\n';
            src_serveur_js2+='            /* voir par exemple dossiers1_s.js */\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        return(liste2);\r\n';
            src_serveur_js2+='    }\r\n';
        }
        /*
        */
        if(ref_select !== '' && ref_insert !== ''){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    page_creer1( mat , d , dupliquer=null){\r\n';
            src_client2+='        this.__ig1.afficher_le_titre_des_zones( \'vv_ecran_creation\' , \'entree_module\' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi , \'' + champ_primaire + '\' );\r\n';
            src_client2+='        let o1=\'\';\r\n';
            src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
            src_client2+='        if(a === null){\r\n';
            src_client2+='            this.__ig1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
            src_client2+='        }\r\n';
            src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
            src_client2+='        if(a.innerHTML === \'création \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
            src_client2+='        }else{\r\n';
            src_client2+='            a.innerHTML=\'création \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
            src_client2+='            this.__ig1.afficher_les_zones( \'vv_ecran_creation\' );\r\n';
            src_client2+='        }\r\n';
            if(ref_insert !== ''){
                for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                    let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                    let obj_champ=this.#obj_table.champs[nom_du_champ];
                    let reference_externe_base='';
                    let reference_externe_table='';
                    let reference_externe_champ='';
                    if(obj_champ.meta.hasOwnProperty( 'reference_externe_base' )){
                        reference_externe_base=parseInt( obj_champ.meta.reference_externe_base , 10 );
                        reference_externe_table=obj_champ.meta.reference_externe_table;
                        reference_externe_champ=obj_champ.meta.reference_externe_champ;
                        /*
                          this.#les_bases
                        */
                    }
                    if(reference_externe_base === 1
                           && reference_externe_table === 'tbl_utilisateurs'
                           && reference_externe_champ === 'chi_id_utilisateur'
                    ){
                        if(ne_pas_prendre_les_valeurs_en_session === 1){
                            /*
                              on force les dépendances pour produire le méthode sous_liste2 plus bas
                            */
                            des_champs_dependent_d_une_autre_table=true;
                            /* exemple : fdl_id_prestataire_missaffect */
                            src_client2+='        /*\r\n';
                            src_client2+='          =====================================================================================================\r\n';
                            src_client2+='        */\r\n';
                            src_client2+='        o1+=\'  <div class="yy_edition_champ1">\';\r\n';
                            src_client2+='        o1+=\'    <div class="yy_edition_libelle1">\';\r\n';
                            src_client2+='        o1+=\'      <span>' + obj_champ.meta.nom_bref_du_champ + '</span>\';\r\n';
                            src_client2+='        o1+=\'    </div>\';\r\n';
                            src_client2+='        o1+=\'    <div class="yy_edition_valeur1">\';\r\n';
                            src_client2+='        o1+=\'        <input \';\r\n';
                            src_client2+='        o1+=\' id="' + nom_du_champ + '" \';\r\n';
                            src_client2+='        o1+=\' type="hidden" \';\r\n';
                            src_client2+='        o1+=\' value="\';\r\n';
                            src_client2+='        if(dupliquer && dupliquer.hasOwnProperty( \'T0.' + nom_du_champ + '\' )){\r\n';
                            src_client2+='            o1+=this.__ig1.fi2( dupliquer[\'T0.' + nom_du_champ + '\'] );\r\n';
                            src_client2+='        }else{\r\n';
                            src_client2+='            o1+=\'\';\r\n';
                            src_client2+='        }\r\n';
                            src_client2+='        o1+=\'"\';\r\n';
                            src_client2+='        o1+=\' />\';\r\n';
                            src_client2+='        o1+=\'        <span id="' + nom_du_champ + '_libelle">\';\r\n';
                            src_client2+='        if(dupliquer && dupliquer.hasOwnProperty( \'T0.' + nom_du_champ + '\' )){\r\n';
                            src_client2+='            if(dupliquer[\'T0.' + nom_du_champ + '\'] === null){\r\n';
                            src_client2+='                o1+=\'*indéfini\';\r\n';
                            src_client2+='            }else{\r\n';
                            src_client2+='                o1+=\'(\' + dupliquer[\'T0.' + nom_du_champ + '\'] + \') \';\r\n';
                            src_client2+='                o1+=this.__ig1.fi2( dupliquer[\'T1.chp_nom_de_connexion_utilisateur\'] );\r\n';
                            src_client2+='            }\r\n';
                            src_client2+='        }else{\r\n';
                            src_client2+='            o1+=\'*indéfini\';\r\n';
                            src_client2+='        }\r\n';
                            src_client2+='        o1+=\'</span>\';\r\n';
                            src_client2+='        /*\r\n';
                            src_client2+='          ;\r\n';
                            src_client2+='        */\r\n';
                            src_client2+='        o1+=this.__ig1.lien_parent2( \'utilisateurs1\' , \'' + nom_du_champ + '\' , \'' + nom_du_champ + '_libelle\' , this.moi );\r\n';
                            src_client2+='        /*  */\r\n';
                            src_client2+='        o1+=\'    </div>\';\r\n';
                            src_client2+='        o1+=\'  </div>\';\r\n';
                            src_client2+='\r\n';
                        }else{
                            src_client2+='    /*\r\n';
                            src_client2+='      =====================================================================================================\r\n';
                            src_client2+='      pas d\'édition pour le champ ' + obj_champ.nom_du_champ + ' lié à (1 , tbl_utilisateurs , chi_id_utilisateur )\r\n';
                            src_client2+='    */\r\n';
                        }
                    }else if(obj_champ.hasOwnProperty( 'table_mere' )
                           && obj_champ.hasOwnProperty( 'champ_pere' )
                           && obj_champ.table_mere !== ''
                           && obj_champ.champ_pere !== ''
                    ){
                        if(ne_pas_prendre_les_valeurs_en_session === 0
                               && (this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_est_en_session1' )
                                       && this.#obj_table.champs[nom_du_champ]['champ_est_en_session1'] === true
                                   || this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_pere_est_en_session1' )
                                       && this.#obj_table.champs[nom_du_champ]['champ_pere_est_en_session1'] === true)
                        ){
                            /*
                              rien ici
                            */
                        }else{
                            src_client2+='    /*\r\n';
                            src_client2+='      =====================================================================================================\r\n';
                            src_client2+='    */\r\n';
                            src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                            src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                            src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                            src_client2+='        o1 += \'    </div>\' ;\r\n';
                            src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                            src_client2+='        o1 += \'        <input id="' + obj_champ.nom_du_champ + '" type="hidden" value="\' ;\r\n';
                            src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                            src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'])  ;\r\n';
                            src_client2+='        }else{\r\n';
                            if(this.#obj_table.champs[obj_champ.nom_du_champ].a_une_valeur_par_defaut === 1){
                                if(this.#obj_table.champs[obj_champ.nom_du_champ].la_valeur_par_defaut_est_caractere === 1){
                                    src_client2+='          o1+=\'' + this.__ig1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                                }else{
                                    if(this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut.toLowerCase() === 'null'){
                                        src_client2+='          o1+=\'\';\r\n';
                                    }else{
                                        src_client2+='          o1+=\'' + this.__ig1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                                    }
                                }
                            }else{
                                src_client2+='          o1+=\'\';\r\n';
                            }
                            src_client2+='        }\r\n';
                            src_client2+='        o1+=\'" />\';\r\n';
                            src_client2+='        o1 += \'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                            src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                            src_client2+='            if(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'] === null){\r\n';
                            src_client2+='                o1 += \'*indéfini\' ;\r\n';
                            src_client2+='            }else{\r\n';
                            src_client2+='                o1 +=  \'(\'+dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                            if('fld_id_affectation_prestation' === obj_champ.nom_du_champ){
                                debugger;
                            }
                            let indice_jointure=0;
                            for( let j=0 ; j < les_jointures.length ; j++ ){
                                if(les_jointures[j].alias2 === 'T0'
                                       && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                                       && obj_champ.nom_du_champ === les_jointures[j].champ2
                                ){
                                    for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                        indice_jointure=j;
                                        src_client2+='                o1+=\' / <span>\' + this.__ig1.fi2(dupliquer[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) + \'</span>\';\r\n';
                                    }
                                }else if(les_jointures[j].alias1 === 'T0'
                                       && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                                       && obj_champ.nom_du_champ === les_jointures[j].champ1
                                ){
                                    for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                        indice_jointure=j;
                                        src_client2+='                o1+=\' / <span> / \' + this.__ig1.fi2(dupliquer[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) + \'</span>\';\r\n';
                                    }
                                }
                            }
                            if(indice_jointure === 0){
                                /*  */
                                if(obj_champ.hasOwnProperty( 'champ_pere' ) && obj_champ.champ_pere !== ''){
                                    /* il faut aller chercher les libelles parents */
                                    let les_champs_de_la_table_mere=this.#obj_bdd[obj_champ.table_mere].champs;
                                    let trouve=null;
                                    for(let j in les_champs_de_la_table_mere){
                                        if(les_champs_de_la_table_mere[j].meta.hasOwnProperty( 'est_libelle_lien' )
                                               && les_champs_de_la_table_mere[j].meta.est_libelle_lien === 1
                                        ){
                                            trouve=j;
                                            break;
                                        }
                                    }
                                    if(trouve !== null){
                                        /*
                                          on a trouvé un champ lien direct dans la table mère qui joue le role de libellé
                                          il faut aller férifier que la requete select possède ce lien
                                        */
                                        for(let j in liste_des_champs_select){
                                            if(liste_des_champs_select[j].nom_du_champ === trouve && liste_des_champs_select[j].prefixe_du_champ !== 'T0'){
                                                src_client2+='        o1+=\'       / <span>\' + this.__ig1.fi2(dupliquer[\'' + liste_des_champs_select[j].prefixe_du_champ + '.' + trouve + '\'])+\'</span>\' ;\r\n';
                                            }
                                        }
                                    }else{
                                        /*
                                          pas de champ lien direct trouvé, on essaie de remonter aux n-y
                                        */
                                        for(let j in les_champs_de_la_table_mere){
                                            if(les_champs_de_la_table_mere[j].hasOwnProperty( 'champ_pere' ) && les_champs_de_la_table_mere[j].champ_pere !== ''){
                                                let les_champs_de_la_table_mere_de_la_table_mere=this.#obj_bdd[les_champs_de_la_table_mere[j].table_mere].champs;
                                                let trouve2=null;
                                                for(let k in les_champs_de_la_table_mere_de_la_table_mere){
                                                    if(les_champs_de_la_table_mere_de_la_table_mere[k].meta.hasOwnProperty( 'est_libelle_lien' )
                                                           && les_champs_de_la_table_mere_de_la_table_mere[k].meta.est_libelle_lien === 1
                                                    ){
                                                        trouve2=k;
                                                        break;
                                                    }
                                                }
                                                if(trouve2 !== null){
                                                    for(let k in liste_des_champs_select){
                                                        if(liste_des_champs_select[k].nom_du_champ === trouve2 && liste_des_champs_select[k].prefixe_du_champ !== 'T0'){
                                                            src_client2+='        o1+=\'       / <span>\' + this.__ig1.fi2(dupliquer[\'' + liste_des_champs_select[k].prefixe_du_champ + '.' + trouve2 + '\'])+\'</span>\' ;\r\n';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            /*  */
                            src_client2+='            }\r\n';
                            src_client2+='        }else{\r\n';
                            if(this.#obj_table.champs[obj_champ.nom_du_champ].hasOwnProperty( 'valeur_par_defaut' )){
                                src_client2+='          o1+=\'' + this.__ig1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                            }else{
                                src_client2+='          o1+=\'*indéfini\';\r\n';
                            }
                            src_client2+='        }\r\n';
                            src_client2+='        o1+=\'        </span>\' ;\r\n';
                            src_client2+='        /*\r\n';
                            src_client2+='        */\r\n';
                            var nom_de_la_classe_lien='';
                            let nom_table_mere=this.#obj_bdd[this.#nom_de_la_table].champs[obj_champ.nom_du_champ].table_mere;
                            var nom_de_la_classe_lien='/* AFR */';
                            if(nom_table_mere.substr( 0 , 4 ) === 'tbl_'){
                                nom_de_la_classe_lien=nom_table_mere.substr( 4 );
                            }else{
                                nom_de_la_classe_lien=nom_table_mere;
                            }
                            src_client2+='                o1+=\'    <div class="yy_edition_valeur1">\';\r\n';
                            /*  */
                            if(this.#liste_des_liens_dejà_definis.hasOwnProperty( obj_champ.nom_du_champ )){
                                src_client2+='                o1+=\'        <span>\';\r\n';
                                src_client2+='                o1+=this.__ig1.lien_parent2( \'' + this.#liste_des_liens_dejà_definis[obj_champ.nom_du_champ] + '\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\' , this.moi );\r\n';
                                src_client2+='                o1+=\'</span>\';\r\n';
                            }else{
                                src_client2+='                o1+=\'        <span>\';\r\n';
                                src_client2+='                o1+=this.__ig1.lien_parent2( \'' + nom_de_la_classe_lien + '1\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\' , this.moi );\r\n';
                                src_client2+='                o1+=\'</span>\';\r\n';
                            }
                            src_client2+='                o1+=\'    </div>\';\r\n';
                            src_client2+='        /**/\r\n';
                            src_client2+='        o1 += \'    </div>\' ;\r\n';
                            src_client2+='        o1 += \'  </div>\' ;\r\n';
                        }
                    }else if(obj_champ.genre_objet_du_champ
                           && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                               || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                               || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                               || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                                   && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null)
                    ){
                    }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_nur_genre === 1){
                    }else{
                        src_client2+='        /*\n';
                        src_client2+='          =====================================================================================================\n';
                        src_client2+='        */\n';
                        src_client2+='        o1 += \'  <div class="yy_edition_champ1">\';\r\n';
                        src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\';\r\n';
                        src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\';\r\n';
                        src_client2+='        o1 += \'    </div>\';\r\n';
                        src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\';\r\n';
                        if('chp_nom_en_session_genre' === obj_champ.nom_du_champ){
                            /* debugger; */
                        }
                        if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                            if(obj_champ.genre_objet_du_champ.chi_id_genre === 22){
                                /*
                                  si c'est une date aaaa_mm_jj
                                */
                                src_client2+='        o1+=\'      <input id="' + obj_champ.nom_du_champ + '" type="text" size="10" maxlength="10" value="\';\r\n';
                                src_client2+='        if(dupliquer && dupliquer.hasOwnProperty( \'T0.' + obj_champ.nom_du_champ + '\' )){\r\n';
                                src_client2+='            o1+=this.__ig1.fi2( dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'] );\r\n';
                                src_client2+='        }else{\r\n';
                                src_client2+='            o1+=\'\';\r\n';
                                src_client2+='        }\r\n';
                                src_client2+='        o1+=\'" />\';\r\n';
                                src_client2+='        o1+=this.__ig1.__fnt1.boutons_date1( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                            }else if(obj_champ.genre_objet_du_champ.chi_id_genre === 23){
                                /*
                                  si c'est une heure hh_mm_ss
                                */
                                src_client2+='        o1+=\'      <input id="' + obj_champ.nom_du_champ + '" type="text" size="8" maxlength="8" value="\';\r\n';
                                src_client2+='        if(dupliquer && dupliquer.hasOwnProperty( \'T0.' + obj_champ.nom_du_champ + '\' )){\r\n';
                                src_client2+='            o1+=this.__ig1.fi2( dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'] );\r\n';
                                src_client2+='        }else{\r\n';
                                src_client2+='            o1+=\'\';\r\n';
                                src_client2+='        }\r\n';
                                src_client2+='        o1+=\'" />\';\r\n';
                                src_client2+='        o1+=this.__ig1.__fnt1.boutons_heure1( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                            }else{
                                let size='';
                                if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 48){
                                    size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                                }else{
                                    size=' size="48" ';
                                }
                                src_client2+='        o1 += \'      <input ';
                                if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                                    src_client2+=' disabled ';
                                }
                                src_client2+=' type="text" ' + size + ' ';
                                src_client2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                                src_client2+=' id="' + obj_champ.nom_du_champ + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ';
                                src_client2+=' value="\';\r\n';
                                src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                src_client2+='        }else{\n';
                                if(obj_champ.non_nulle === false){
                                    src_client2+='            o1 += \'\';\r\n';
                                }else{
                                    src_client2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                          ( 
                                            ''
                                          ) : ( 
                                            obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                          )) + '\';\r\n';
                                }
                                src_client2+='        }\n';
                                src_client2+='        o1 += \'" />\';\r\n';
                                src_client2+='        o1 += \'    <div>\';\r\n';
                                src_client2+='        o1 +=this.__ig1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                                if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                                    let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                                    src_client2+='        o1 += \'      <br />\';\r\n';
                                    for(let opt in tab){
                                        src_client2+='';
                                        src_client2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                        src_client2+='m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                        src_client2+='">' + tab[opt] + '</div>\';\r\n';
                                    }
                                }
                                src_client2+='        o1 += \'    </div>\';\r\n';
                            }
                        }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                            src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\';\r\n';
                            let format_source='';
                            if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                                src_client2+='        o1+=\'            <div>\\r\\n\';\r\n';
                                src_client2+='        o1+=\'              \'+this.__ig1.__fnt1.boutons_rev3(\'' + obj_champ.nom_du_champ + '\');\r\n';
                                src_client2+='        o1+=\'            </div>\\r\\n\';\r\n';
                                format_source=' data-editeur1="rev" ';
                            }else if(obj_champ.cht_particularités_genre.source_non_rev === 1){
                                src_client2+='        o1+=\'            <div>\\r\\n\';\r\n';
                                src_client2+='        o1+=\'              \'+this.__ig1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                                src_client2+='        o1+=\'            </div>\\r\\n\';\r\n';
                                format_source=' data-editeur1="source_editeur1" ';
                            }else{
                                src_client2+='        o1+=\'            <div>\\r\\n\';\r\n';
                                src_client2+='        o1+=\'              \'+this.__ig1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                                src_client2+='        o1+=\'            </div>\\r\\n\';\r\n';
                            }
                            src_client2+='        o1 += \'            <textarea ' + format_source + ' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\r\n';
                            src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                            src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                            src_client2+='        }else{\n';
                            if(obj_champ.non_nulle === false){
                                src_client2+='            o1 += \'\';\r\n';
                            }else{
                                src_client2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                      ( 
                                        ''
                                      ) : ( 
                                        obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                      )) + '\';\r\n';
                            }
                            src_client2+='        }\n';
                            src_client2+='        o1 += \'</textarea>\';\r\n';
                            src_client2+='        o1 += \'        </div>\';\r\n';
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                                let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                                src_client2+='        o1 += \'      <br />\';\r\n';
                                for(let opt in tab){
                                    src_client2+='';
                                    src_client2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                    src_client2+='m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                    src_client2+='">' + tab[opt] + '</div>\';\r\n';
                                }
                                debugger;
                            }
                        }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null || obj_champ.genre_objet_du_champ.cht_parmis_genre === ''){
                                src_client2+='        o1 += \'      <input type="number" ';
                                if(obj_champ.hasOwnProperty( 'longueur_du_champ' ) && obj_champ.longueur_du_champ > 0 && obj_champ.longueur_du_champ <= 18){
                                    /* 18 caractères max */
                                    src_client2+=' size="' + obj_champ.longueur_du_champ + '" maxlength="' + obj_champ.longueur_du_champ + '" max="' + '9'.repeat( obj_champ.longueur_du_champ ) + '" style="width:' + (obj_champ.longueur_du_champ + 2) + 'em;"';
                                }else{
                                    src_client2+=' size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999" ';
                                }
                                src_client2+=' id="' + obj_champ.nom_du_champ + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="\';\r\n';
                                src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                src_client2+='        }else{\n';
                                /* champ entier standard */
                                if(obj_champ.non_nulle === false){
                                    src_client2+='            o1 += \'\';\r\n';
                                }else{
                                    src_client2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                          ( 
                                            ''
                                          ) : ( 
                                            obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                          )) + '\';\r\n';
                                }
                                src_client2+='        }\n';
                                src_client2+='        o1 += \'"/>\';\r\n';
                            }else{
                                if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                                    src_client2+='        o1 += \'        <input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" value="\';\r\n';
                                    src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                    src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                    src_client2+='        }else{\n';
                                    src_client2+='            o1 += \'0\';\r\n';
                                    src_client2+='        }\n';
                                    src_client2+='        o1 += \'" />\';\r\n';
                                }else{
                                    /*
                                      un champ entier qui comporte des valeurs discrètes
                                    */
                                    src_client2+='        o1 += \'        <input type="text" id="' + obj_champ.nom_du_champ + '"  value="\';\r\n';
                                    src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                    src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                    src_client2+='        }else{\n';
                                    src_client2+='            o1 += \'0\';\r\n';
                                    src_client2+='        }\n';
                                    src_client2+='        o1 += \'" >\';\r\n';
                                    let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                                    src_client2+='        o1 += \'      <br />\';\r\n';
                                    for(let opt in tab){
                                        src_client2+='';
                                        src_client2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                        src_client2+='m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                        src_client2+='">' + tab[opt] + '</div>\';\r\n';
                                    }
                                }
                            }
                        }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'DECIMAL'){
                            src_client2+='        o1 += \'      <input type="number" size="21" maxlength="21" ';
                            src_client2+=' id="' + obj_champ.nom_du_champ + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="\';\r\n';
                            src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                            src_client2+='            o1+=this.__ig1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                            src_client2+='        }else{\n';
                            /* champ entier standard */
                            if(obj_champ.non_nulle === false){
                                src_client2+='            o1 += \'\';\r\n';
                            }else{
                                src_client2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                      ( 
                                        ''
                                      ) : ( 
                                        obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                      )) + '\';\r\n';
                            }
                            src_client2+='        }\n';
                            src_client2+='        o1 += \'"/>\';\r\n';
                            if(obj_champ.meta.hasOwnProperty( 'suggestion_du_champ' ) && obj_champ.meta.suggestion_du_champ !== ''){
                                src_client2+='        o1+=\'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                                let obj_mat_rev=this.__ig1.__rev1.rev_tcm( obj_champ.meta.suggestion_du_champ );
                                if(obj_mat_rev.__xst !== __xsu){
                                    return({"__xst" : __xer ,"__xme" : 'Erreur de convertion de suggestion_du_champ pour le champ "' + obj_champ.nom_du_champ + '" '});
                                }
                                for( let isuggestion_du_champ=1 ; isuggestion_du_champ < obj_mat_rev.__xva.length ; isuggestion_du_champ=obj_mat_rev.__xva[isuggestion_du_champ][12] ){
                                    src_client2+='        o1+=\'          <div';
                                    src_client2+=' class="rev_bouton"';
                                    src_client2+=' data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(';
                                    if(this.__ig1.est_num( obj_mat_rev.__xva[isuggestion_du_champ][1] )){
                                        src_client2+=obj_mat_rev.__xva[isuggestion_du_champ][1];
                                    }else{
                                        src_client2+='\'' + obj_mat_rev.__xva[isuggestion_du_champ][1].replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'';
                                    }
                                    src_client2+=')))))">';
                                    src_client2+=obj_mat_rev.__xva[isuggestion_du_champ][1];
                                    src_client2+='</div>\';\r\n';
                                }
                                src_client2+='        o1+=\'      </div>\';\r\n';
                            }
                        }else{
                            /*
                              afr
                            */
                            debugger;
                        }
                        src_client2+='        o1 += \'    </div>\';\r\n';
                        src_client2+='        o1 += \'  </div>\';\r\n';
                    }
                }
            }
            src_client2+='        /*\r\n';
            src_client2+='          =====================================================================================================\r\n';
            src_client2+='        */\r\n';
            src_client2+='        let cmd=\'\';\r\n';
            src_client2+='        cmd+=\'liste1(\';\r\n';
            src_client2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
            src_client2+='          if(this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
            src_client2+='            cmd+=i+\'(\\\'\'+this.__ig1.fi2(this.filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
            src_client2+='          }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        cmd+=\')\';\r\n';
            src_client2+='        let obj2=this.__ig1.__rev1.rev_tm(cmd);\r\n';
            src_client2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
            src_client2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" value="\'+this.__ig1.fi2(jso)+\'" />\';\r\n';
            src_client2+='\r\n';
            src_client2+='        document.getElementById( \'vv_ecran_creation_zone_contenu\' ).innerHTML=o1;\r\n';
            src_client2+='        this.__ig1.maj_hash(mat,0);\r\n';
            src_client2+='        this.__ig1.maj_title_htm1(\'création \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
            src_client2+='        this.__ig1.ajoute_les_evenements_aux_boutons();\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
        }
        /*
          
          
          
        */
        if(pour_sous_liste_uniquement === 0){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    filtre1( mat , d , le_colis1=null ){\r\n';
            src_client2+='        let a=document.getElementById( \'vv_ecran_liste_zone_contenu\' );\r\n';
            src_client2+='        if(a === null){\r\n';
            src_client2+='            return(this[this.fonction_liste]( mat , d , le_colis1 ));\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let tt=this.zones_liste1( le_colis1 );\r\n';
            src_client2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=tt.o1;\r\n';
            src_client2+='        this.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant );\r\n';
            src_client2+='        this.__ig1.ajoute_les_evenements_aux_boutons();\r\n';
            src_client2+='        let lst=document.getElementById( \'vv_filtre1\' ).querySelectorAll( "input" );\r\n';
            src_client2+='        this.filtres={};\r\n';
            src_client2+='        for( let i=0 ; i < lst.length ; i++ ){\r\n';
            src_client2+='            if(lst[i].id){\r\n';
            src_client2+='                this.filtres[lst[i].id]=lst[i].value;\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let aa=sessionStorage.getItem( this.__ig1.cle_lst0 + \'_\' + this.moi );\r\n';
            src_client2+='        if(aa === null){\r\n';
            src_client2+='            sessionStorage.setItem( this.__ig1.cle_lst0 + \'_\' +this.moi , JSON.stringify( {"filtres" : this.filtres} ) );\r\n';
            src_client2+='        }else{\r\n';
            src_client2+='            let jso=JSON.parse( aa );\r\n';
            src_client2+='            jso[\'filtres\']=this.filtres;\r\n';
            src_client2+='            sessionStorage.setItem( this.__ig1.cle_lst0 + \'_\' +this.moi , JSON.stringify( jso ) );\r\n';
            src_client2+='        }\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
        }
        if(pour_sous_liste_uniquement === 0){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    zones_filtres1( mat , d , le_colis1 ){\r\n';
            src_client2+='        let l01=mat.length;\r\n';
            src_client2+='        let de_13=\'\';\r\n';
            src_client2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_client2+='            if(\'de_13\' === mat[i][1] && mat[i][2] === \'f\' && mat[i][8] === 1 && mat[i+1][2] === \'c\' ){\r\n';
            src_client2+='                de_13=mat[i+1][1];\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        for( let nom_champ_filtre in this.tableau_des_filtres[this.fonction_liste] ){\r\n';
            src_client2+='            let trouvé=false;\r\n';
            src_client2+='            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_client2+='                if(nom_champ_filtre===mat[i][1] && mat[i][2]===\'f\' &&  mat[i][8]===1 &&  mat[i+1][2]===\'c\'){\r\n';
            src_client2+='                    this.filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1].replace( /\\\\\'/g , \'\\\'\' ).replace( /\\\\\\\\/g , \'\\\\\' );\r\n';
            src_client2+='                    trouvé=true;\r\n';
            src_client2+='                    break\r\n';
            src_client2+='                }\r\n';
            src_client2+='            }\r\n';
            src_client2+='            if(trouvé===false){\r\n';
            src_client2+='                this.filtres[this.fonction_liste][nom_champ_filtre]=\'\';\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let cle_session=this.__ig1.cle_lst0 + \'_\' + this.moi +\'_\'+this.fonction_liste;\r\n';
            src_client2+='        sessionStorage.setItem( cle_session , JSON.stringify( this.filtres[this.fonction_liste] ) );\r\n';
            src_client2+='        if(le_colis1.__xva.hasOwnProperty( \'__fo1\' )\r\n';
            src_client2+='               && le_colis1.__xva.__fo1 !== null\r\n';
            src_client2+='               && le_colis1.__xva.__fo1.hasOwnProperty( \'origine\' )\r\n';
            src_client2+='               && le_colis1.__xva.__fo1.origine === \'aller_a_la_page\'\r\n';
            src_client2+='        ){\r\n';
            src_client2+='            document.getElementById( \'__num_page\' ).value=__num_page;\r\n';
            src_client2+='            return;\r\n';
            src_client2+='        }\r\n';
            src_client2+='        if(document.getElementById( \'vv_ecran_liste_zone_filtre\' ).innerHTML===\'\'){\r\n';
            src_client2+='            let o1=\'\';\r\n';
            src_client2+='            let nom_zone_non_vide=\'\';\r\n';
            src_client2+='            o1+=\'<div class="yy_filtre_liste1" id="\'+this.fonction_liste+\'">\';\r\n';
            src_client2+='            for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
            src_client2+='                if(this.tableau_des_filtres[this.fonction_liste][i].masqué===false){\r\n';
            src_client2+='                   o1+=\'    <div>\';\r\n';
            src_client2+='                   o1+=\'        <div><span>\'+this.tableau_des_filtres[this.fonction_liste][i].nom+\'</span></div>\';\r\n';
            src_client2+='                   let bck=\'background:yellow;\';\r\n';
            src_client2+='                   if(this.filtres[this.fonction_liste][i]===\'\'){\r\n';
            src_client2+='                       bck=\'\';\r\n';
            src_client2+='                   }else{\r\n';
            src_client2+='                       if(nom_zone_non_vide===\'\'){\r\n';
            src_client2+='                           nom_zone_non_vide=i;\r\n';
            src_client2+='                       }\r\n';
            src_client2+='                   }\r\n';
            src_client2+='                       o1+=\'        <div>\\r\\n\';\r\n';
            src_client2+='                       o1+=\'          <input type="text" id="\' + i + \'" aria-autocomplete="list" \';\r\n';
            src_client2+='                       o1+=\'           value="\' + this.__ig1.fi1( this.filtres[this.fonction_liste][i] ) + \'" \';\r\n';
            src_client2+='                       o1+=\'           size="\'+this.tableau_des_filtres[this.fonction_liste][i].taille+\'" \';\r\n';
            src_client2+='                       o1+=\'           maxlength="64" \';\r\n';
            src_client2+='                       o1+=\'           autocapitalize="off" \';\r\n';
            src_client2+='                       o1+=\'           style="\' + bck + \'" />\';\r\n';
            src_client2+='                       if(this.filtres[this.fonction_liste][i] && this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
            src_client2+='                           o1+=\'<div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(\'+i+\'))))">x</div>\';\r\n';
            src_client2+='                       }\r\n';
            src_client2+='                       o1+=\'        </div>\\r\\n\';\r\n';
            src_client2+='                   o1+=\'    </div>\\r\\n\';\r\n';
            src_client2+='                }\r\n';
            src_client2+='            }\r\n';
            src_client2+='\r\n';
            src_client2+='            o1+=\'   <div>\';\r\n';
            src_client2+='            o1+=\'     <div>\';\r\n';
            src_client2+='            o1+=\'       <span>&nbsp;</span>\';\r\n';
            src_client2+='            o1+=\'     </div>\';\r\n';
            src_client2+='            o1+=\'     <div>\';\r\n';
            src_client2+='            o1+=\'        <div class="rev_bouton yy_bouton_loupe" data-rev_click="\';\r\n';
            if(table_reference_est_table_virtuelle.length === 2){
                src_client2+='            o1+=\'fo1(sur_table_virtuelle(),co1(\'+this.fonction_liste+\'),pm1(m1(n1(\'+this.moi+\'),f1(\'+this.fonction_liste+\'(__num_page(0))))))\';\r\n';
            }else{
                src_client2+='            o1+=\'fo1(co1(\'+this.fonction_liste+\'),pm1(m1(n1(\'+this.moi+\'),f1(\'+this.fonction_liste+\'(__num_page(0))))))\';\r\n';
            }
            src_client2+='            o1+=\'"\';\r\n';
            src_client2+='            o1+=\'        >🔎</div>\';\r\n';
            src_client2+='            o1+=\'     </div>\';\r\n';
            src_client2+='            for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
            src_client2+='             if(this.tableau_des_filtres[this.fonction_liste][i].masqué===true){\r\n';
            src_client2+='              o1+=\'     <input type="hidden" id="\'+i+\'" value="\' + this.filtres[this.fonction_liste][i] + \'" />\';\r\n';
            src_client2+='             }\r\n';
            src_client2+='            }\r\n';
            src_client2+='            o1+=\'   </div>\';\r\n';
            src_client2+='            o1+=\'</div>\';\r\n';
            src_client2+='            document.getElementById( \'vv_ecran_liste_zone_filtre\' ).innerHTML=o1;\r\n';
            src_client2+='            if(nom_zone_non_vide!==\'\'){\r\n';
            src_client2+='                document.getElementById(nom_zone_non_vide).select();\r\n';
            src_client2+='            }\r\n';
            src_client2+='            let lst=document.getElementById(\'vv_ecran_liste_zone_filtre\').querySelectorAll( \'input\' );\r\n';
            src_client2+='            for(let i=0;i<lst.length;i++){\r\n';
            src_client2+='                lst[i].addEventListener(\'keyup\',(e)=>{\r\n';
            src_client2+='                 if(e.keyCode===13){\r\n';
            if(table_reference_est_table_virtuelle.length === 2){
                src_client2+='                  this.aller_a_la_page( null , null , \'__num_page\' , 0 , true , e.target.id )\r\n';
            }else{
                src_client2+='                  this.aller_a_la_page( null , null , \'__num_page\' , 0 , false , e.target.id )\r\n';
            }
            src_client2+='                 }\r\n';
            src_client2+='\r\n';
            src_client2+='                })\r\n';
            src_client2+='            }\r\n';
            src_client2+='\r\n';
            src_client2+='        }else{\r\n';
            src_client2+='\r\n';
            src_client2+='            for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
            src_client2+='                document.getElementById(i).value=this.filtres[this.fonction_liste][i];\r\n';
            src_client2+='                if(this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
            src_client2+='                    document.getElementById(i).style.background=\'yellow\';\r\n';
            src_client2+='                }else{\r\n';
            src_client2+='                    document.getElementById(i).style.background=\'\';\r\n';
            src_client2+='              }\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        if(de_13===\'\'){\r\n';
            src_client2+='            this.__ig1.delai_selectionner_champ_filtre();\r\n';
            src_client2+='        }else{\r\n';
            src_client2+='            try{\r\n';
            src_client2+='                document.getElementById(de_13).select();\r\n';
            src_client2+='            }catch{}\r\n';
            src_client2+='        }\r\n';
            src_client2+='    }\r\n';
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    aller_a_la_page( mat , d , ref_zone=null , num_page=null , est_table_virtuelle=false , de_13=\'\' ){\r\n';
            src_client2+='        return this.__ig1.aller_a_la_page( mat , d , this.moi , this.fonction_liste , this.filtres , ref_zone , num_page , est_table_virtuelle, de_13 );\r\n';
            src_client2+='    }\r\n';
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    supprimer1(mat , d , le_colis1 ){\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    creer1(mat , d , le_colis1 ){\r\n';
            src_client2+='        /* redirection vers modification */\r\n';
            src_client2+='        if(le_colis1 && le_colis1.__xva.hasOwnProperty(\'page_modification1\')){\r\n';
            src_client2+='            this.page_modification1(mat,d,le_colis1);\r\n';
            src_client2+='        }\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    liste1( mat , d , le_colis1=null ){\r\n';
            src_client2+='        if(le_colis1==null || !le_colis1.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
            src_client2+='            if(le_colis1.__xva.hasOwnProperty(\'__nbEnregs\')){\r\n';
            src_client2+='            }else{\r\n';
            src_client2+='                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : \'il manque les données pour la liste de \' + this.moi} );\r\n';
            src_client2+='                this.__ig1.affiche_les_messages();\r\n';
            src_client2+='                return({"__xst" : __xsu});\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        let o1=\'\';\r\n';
            src_client2+='        let initialisation_fait=false;\r\n';
            src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
            src_client2+='        if(a===null){\r\n';
            src_client2+='            this.__ig1.initialisation_des_zones( this.moi , \'' + champ_primaire + '\' );\r\n';
            src_client2+='            initialisation_fait=true;\r\n';
            src_client2+='        }\r\n';
            src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
            src_client2+='        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){\r\n';
            src_client2+='        }else{\r\n';
            src_client2+='            if(initialisation_fait===false){\r\n';
            src_client2+='               this.__ig1.initialisation_des_zones( this.moi , \'' + champ_primaire + '\' );\r\n';
            src_client2+='               a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
            src_client2+='            }\r\n';
            src_client2+='            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;\r\n';
            src_client2+='            this.__ig1.afficher_les_zones( \'vv_ecran_liste\' );\r\n';
            src_client2+='        }\r\n';
            src_client2+='        this.zones_filtres1( mat , d , le_colis1  );\r\n';
            if(table_reference_est_table_virtuelle.length === 2){
                src_client2+='        if(le_colis1.__xva.hasOwnProperty( \'__nbEnregs\' )\r\n';
                src_client2+='               && !le_colis1.__xva.hasOwnProperty( this.fonction_liste )\r\n';
                src_client2+='        ){\r\n';
                src_client2+='            document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.__ig1.la_liste_est_vide( le_colis1.__xva.__nbEnregs );\r\n';
                src_client2+='        }else{\r\n';
                src_client2+='            this.__ig1.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant , this.fonction_liste );\r\n';
                src_client2+='            document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.zones_liste1( le_colis1 );\r\n';
                src_client2+='        }\r\n';
            }else{
                src_client2+='        this.__ig1.vv_ecran_liste_zones_navigation1( le_colis1 , this.vv_ecran_liste_boutons_avant , this.fonction_liste );\r\n';
                src_client2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.zones_liste1( le_colis1 );\r\n';
            }
            src_client2+='        this.__ig1.ajoute_les_evenements_aux_boutons();\r\n';
            src_client2+='        this.__ig1.maj_hash(mat,0);\r\n';
            src_client2+='        this.__ig1.maj_title_htm1(this.LISTE_DES_ELEMENTS_GERES);\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='\r\n';
            src_client2+='    }\r\n';
            /*
            */
        }
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    entree_module( mat , d ){\r\n';
        src_client2+='        this.__ig1.recupere_liste_initiale(mat , d , this);\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        /*
        */
        if(des_champs_dependent_d_une_autre_table === true){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='      ===================== utilisé pour afficher une sous liste dans une page modifier ou creer ==================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    sous_liste2( mat , d , le_colis1 ){\r\n';
            src_client2+='        return( this.__ig1.generique_sous_liste2( mat , d , le_colis1 , this.moi ));\r\n';
            src_client2+='    }\r\n';
        }
        /*
        */
        if(des_champs_sont_references_dans_une_autre_table === true){
            src_client2+='    /*\r\n';
            src_client2+='      =============================================================================================================\r\n';
            src_client2+='    */\r\n';
            src_client2+='    zones_sous_liste2( mat , d , le_colis1 ){\r\n';
            src_client2+='        let o1=\'\';\r\n';
            src_client2+='        let obj2=this.__ig1.construire_les_zones_filtres2( mat , d , le_colis1 , this );\r\n';
            src_client2+='        o1+=obj2.html2;\r\n';
            src_client2+='        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty(\'sous_liste2\')){\r\n';
            src_client2+='            let lst=\'\';\r\n';
            src_client2+='            for(let i in le_colis1.__xva[\'sous_liste2\'].__xva){\r\n';
            src_client2+='                let elem=le_colis1.__xva[\'sous_liste2\'].__xva[i];\r\n';
            src_client2+='                lst+=\'<tr>\';\r\n';
            src_client2+='                lst+=\'<td style="text-wrap-mode: nowrap;">\';\r\n';
            src_client2+='                let parametres=\'\';\r\n';
            src_client2+='                parametres += \'m1(n1(__ig1),f1(choisir_dans_sous_fenetre2(\';\r\n';
            src_client2+='                parametres += \' nom_champ_dans_parent2(\' + obj2.nom_champ_dans_parent2 + \')\';\r\n';
            src_client2+='                parametres += \' nom_libelle_dans_parent2(\' + obj2.nom_libelle_dans_parent2 + \')\';\r\n';
            src_client2+='                parametres += \' id2(\' + elem[\'T0.' + champ_primaire + '\'] + \')\';\r\n';
            src_client2+='                let libelle2=\'\';\r\n';
            /* libelle1 */
            src_client2+='                libelle2+=\'(\';\r\n';
            src_client2+='                libelle2+=elem[\'T0.' + champ_primaire + '\'];\r\n';
            src_client2+='                libelle2+=\') \';\r\n';
            src_client2+='                libelle2+=\' \';\r\n';
            /*
              liste des champs est_libelle_lien de la table
            */
            let libelle_trouve=false;
            for(let i in this.#obj_table.champs){
                if(this.#obj_table.champs[i].meta.est_libelle_lien === 1){
                    src_client2+='                libelle2+=elem[\'T0.' + i + '\']?\' , \'+elem[\'T0.' + i + '\']:\'\';\r\n';
                    libelle_trouve=true;
                }
            }
            if(libelle_trouve === false){
                let les_champs_de_la_table_mere=this.#obj_bdd[this.#nom_de_la_table].champs;
                let trouve=null;
                for(let j in les_champs_de_la_table_mere){
                    if(les_champs_de_la_table_mere[j].meta.hasOwnProperty( 'est_libelle_lien' )
                           && les_champs_de_la_table_mere[j].meta.est_libelle_lien === 1
                    ){
                        trouve=j;
                        break;
                    }
                }
                if(trouve !== null){
                    /*
                      on a trouvé un champ lien direct dans la table mère qui joue le role de libellé
                      il faut aller férifier que la requete select possède ce lien
                    */
                    for(let j in liste_des_champs_liste_ecran){
                        if(liste_des_champs_liste_ecran[j].nom_du_champ === trouve && liste_des_champs_liste_ecran[j].prefixe_du_champ !== 'T0'){
                            src_client2+='        libelle2+=\'       / \' + this.__ig1.fi2(elem[\'' + liste_des_champs_liste_ecran[j].prefixe_du_champ + '.' + trouve + '\']) ;\r\n';
                        }
                    }
                }else{
                    /*
                      pas de champ lien direct trouvé, on essaie de remonter aux n-y
                    */
                    for(let j in les_champs_de_la_table_mere){
                        if(les_champs_de_la_table_mere[j].hasOwnProperty( 'champ_pere' ) && les_champs_de_la_table_mere[j].champ_pere !== ''){
                            let les_champs_de_la_table_mere_de_la_table_mere=this.#obj_bdd[les_champs_de_la_table_mere[j].table_mere].champs;
                            for(let k in les_champs_de_la_table_mere_de_la_table_mere){
                                if(les_champs_de_la_table_mere_de_la_table_mere[k].meta.hasOwnProperty( 'est_libelle_lien' )
                                       && les_champs_de_la_table_mere_de_la_table_mere[k].meta.est_libelle_lien === 1
                                ){
                                    for(let l in liste_des_champs_liste_ecran){
                                        if(liste_des_champs_liste_ecran[l].nom_du_champ === k && liste_des_champs_liste_ecran[l].préfixe_du_champ !== 'T0'){
                                            src_client2+='        libelle2+=\'       / \' + this.__ig1.fi2(elem[\'' + liste_des_champs_liste_ecran[l].préfixe_du_champ + '.' + k + '\']) ;\r\n';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /*
            */
            src_client2+='                parametres+=\' libelle2(\\\'\' + this.__ig1.fi1( libelle2 ).replace(/\\\\/g,\'\\\\\\\\\').replace(/\\\'/g,\'\\\\\\\'\') + \'\\\')\';\r\n';
            src_client2+='                parametres+= \')))\';\r\n';
            src_client2+='                lst += \'  <div class="rev_bouton yy__2" data-rev_click="\' + parametres + \'">=&gt;</div>\';\r\n';
            src_client2+='                lst+=\'</td>\';\r\n';
            /*
              il peut y avoir plusieurs critères de sélection d'un champ ( exemple priorite = et priorite < )
              dans ce cas, il faut ne mettre en sortie le champ qu'une seule fois
            */
            var tab_champs_sortie=[];
            for(let i in liste_des_champs_liste_ecran){
                let el=liste_des_champs_liste_ecran[i];
                let cle=el.préfixe_du_champ + '.' + el.nom_du_champ;
                if(tab_champs_sortie.includes( cle )){
                }else{
                    if(el.champ_dans_la_base === null){
                        if(el.nom_du_champ === 'chp_nom_de_connexion_utilisateur' && el.préfixe_du_champ !== 'T0'){
                            /*
                              dans un filtre, on peut avoir besoin d'un champ nom_de_connexion_utilisateur 
                              par exemple : fdl_id_prestataire_missaffect
                            */
                            src_client2+='            /' + '*\n';
                            src_client2+='            *' + '/\n';
                            src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                            src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                            src_client2+='                lst+=this.__ig1.fi2( elem[\'' + cle + '\']);\r\n';
                            src_client2+='            }\r\n';
                            src_client2+='            lst += \'</td>\';\r\n';
                            /* "T1_chp_nom_de_connexion_utilisateur" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom prestataire' ,"taille" : 8} , */
                        }
                        /*
                          le champ fait référence à une table dans une autre base
                          exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                          que le champ commercial fait référence la table "utilisateur"
                        */
                    }else{
                        if(el.champ_dans_la_base.genre_objet_du_champ
                               && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                                   || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                                   || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                        ){
                            continue;
                        }
                        tab_champs_sortie.push( cle );
                        src_client2+='';
                        src_client2+='            /' + '*\n';
                        src_client2+='            *' + '/\n';
                        if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                            src_client2+='            lst += \'<td style="max-width:360px;overflow:hidden;">\';\r\n';
                            src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                            src_client2+='                lst+=this.__ig1.fi2( elem[\'' + cle + '\'].substr(0,200));\r\n';
                            src_client2+='            }\r\n';
                        }else if(el.champ_dans_la_base.espece_du_champ === 'VARCHAR'){
                            src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                            src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                            src_client2+='                lst+=this.__ig1.fi2( elem[\'' + cle + '\']);\r\n';
                            src_client2+='            }\r\n';
                        }else{
                            if(liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_parmis_genre === '0,1'
                                   && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_valeur_init_genre === '0'
                                   && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.chp_espece_genre === 'INTEGER'
                            ){
                                src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                                src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                src_client2+='                    if(elem[\'' + cle + '\']===0){\r\n';
                                src_client2+='                        lst+=\'<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">\'+this.__ig1.les_svg.rond_rouge1+\'</div>\';\r\n';
                                src_client2+='                    }else{\r\n';
                                src_client2+='                        lst+=\'<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">\'+this.__ig1.les_svg.rond_vert1+\'</div>\';\r\n';
                                src_client2+='                    }\r\n';
                                src_client2+='\r\n';
                                src_client2+='            }\r\n';
                            }else{
                                src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                                src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                src_client2+='                lst+=elem[\'' + cle + '\'];\r\n';
                                src_client2+='            }\r\n';
                            }
                        }
                        src_client2+='            lst += \'</td>\';\r\n';
                    }
                }
            }
            src_client2+='                lst+=\'</tr>\';\r\n';
            src_client2+='            }\r\n';
            src_client2+='            if(lst !== \'\'){\r\n';
            src_client2+='                o1+=\'<div class="yy_conteneur_table">\';\r\n';
            src_client2+='                o1+=\'<table border="1">\';\r\n';
            src_client2+='                o1+=\'<tr>\';\r\n';
            src_client2+='                o1+=\'<th>action</th>\';\r\n';
            tab_champs_sortie=[];
            for(let i in liste_des_champs_liste_ecran){
                let el=liste_des_champs_liste_ecran[i];
                let cle=liste_des_champs_liste_ecran[i].préfixe_du_champ + '.' + liste_des_champs_liste_ecran[i].nom_du_champ;
                if(tab_champs_sortie.includes( cle )){
                }else{
                    if(el.champ_dans_la_base === null){
                        /*
                          le champ fait référence à une table dans une autre base
                          exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                          que le champ commercial fait référence la table "utilisateur"
                        */
                        if(el.nom_du_champ === 'chp_nom_de_connexion_utilisateur' && el.préfixe_du_champ !== 'T0'){
                            src_client2+='                o1+=/* chp_nom_de_connexion_utilisateur */\'<th>nom</th>\';\r\n';
                        }
                    }else{
                        if(el.champ_dans_la_base.genre_objet_du_champ
                               && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                                   || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                                   || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                        ){
                            continue;
                        }
                        tab_champs_sortie.push( cle );
                        src_client2+='                o1+=/* ' + liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_du_champ + ' */\'<th';
                        if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                            src_client2+=' style="max-width:360px;"';
                        }
                        src_client2+='>' + liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_bref_du_champ + '</th>\';\r\n';
                    }
                }
            }
            src_client2+='                o1+=\'</tr>\';\r\n';
            src_client2+='                o1+=lst;\r\n';
            src_client2+='                o1+=\'</table>\';\r\n';
            src_client2+='                o1+=\'</div>\';\r\n';
            src_client2+='            }else{\r\n';
            src_client2+='                o1+=this.__ig1.la_liste_est_vide();\r\n';
            src_client2+='\r\n';
            src_client2+='            }\r\n';
            src_client2+='        }\r\n';
            src_client2+='        this.__ig1.initialisation_filtre_sous_fenetre2(\'sous_liste2\' , o1 , this.DUN_DUNE_ELEMENT_GERE);\r\n';
            src_client2+='        return({"__xst" : __xsu});\r\n';
            src_client2+='    }\r\n';
        }
        fragment_trouve=-1;
        for( let i=0 ; i < tableau_des_fragments_client.length ; i++ ){
            if(tableau_des_fragments_client[i].nom_methode_client === 'zones_liste1'){
                fragment_trouve=i;
                break;
            }
        }
        if(fragment_trouve >= 0){
            src_client2+=tableau_des_fragments_client[fragment_trouve].src_js;
        }else{
            if(pour_sous_liste_uniquement === 0){
                src_client2+='    /*\r\n';
                src_client2+='      =============================================================================================================\r\n';
                src_client2+='    */\r\n';
                src_client2+='    zones_liste1( le_colis1 ){\r\n';
                src_client2+='        let o1=\'\';\r\n';
                src_client2+='        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
                src_client2+='            let lst=\'\';\r\n';
                src_client2+='            for(let i in le_colis1.__xva[this.fonction_liste].__xva){\r\n';
                src_client2+='                let elem=le_colis1.__xva[this.fonction_liste].__xva[i];\r\n';
                src_client2+='                lst+=\'<tr>\';\r\n';
                src_client2+='                lst+=\'<td>\';\r\n';
                src_client2+='                lst+=\'<div style="display:inline-flex;">\';\r\n';
                src_client2+='';
                src_client2+='\r\n';
                if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' ) && this.#obj_table.meta.fonctions_spéciales1 !== ''){
                    let obj1=this.__ig1.__rev1.rev_tm( this.#obj_table.meta.fonctions_spéciales1 );
                    let fonction_npsiu_trouvee=false;
                    if(obj1.__xst === __xsu){
                        for( let i=1 ; i < obj1.__xva.length ; i=obj1.__xva[i][12] ){
                            if(obj1.__xva[i][1] === 'ne_pas_supprimer_id_un'
                                   && obj1.__xva[i][2] === 'f'
                                   && obj1.__xva[i][8] === 1
                                   && obj1.__xva[i + 1][2] === 'c'
                                   && this.__ig1.est_num( obj1.__xva[i + 1][1] )
                            ){
                                fonction_npsiu_trouvee=true;
                                src_client2+='                /* fonctions_spéciales1(ne_pas_supprimer_id_un(' + obj1.__xva[i + 1][1] + ')) */\r\n';
                                src_client2+='                if(elem[\'T0.' + champ_primaire + '\']<=' + obj1.__xva[i + 1][1] + '){\r\n';
                                src_client2+='                    lst+=\'<div class="rev_b_svg yy__2 yy__2_inactif">\'+this.__ig1.les_svg.poubelle+\'</div>\';\r\n';
                                src_client2+='                }else{\r\n';
                                src_client2+='                    lst+=\'<div class="rev_b_svg yy__2" data-rev_click="\';\r\n';
                                src_client2+='                    lst+=\'pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))\';\r\n';
                                src_client2+='                    lst+=\'">\'+this.__ig1.les_svg.poubelle+\'</div>\';\r\n';
                                src_client2+='                }\r\n';
                            }
                        }
                        if(fonction_npsiu_trouvee === false){
                            if(ref_delete === ''){
                                src_client2+='                /*\r\n';
                            }
                            src_client2+='                lst+=\'<div class="rev_b_svg yy__2" data-rev_click="';
                            src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                            src_client2+='">\'+this.__ig1.les_svg.poubelle+\'</div>\';\r\n';
                            if(ref_delete === ''){
                                src_client2+='                */\r\n';
                            }
                        }
                    }
                }else{
                    if(ref_delete === ''){
                        src_client2+='                /*\r\n';
                    }
                    src_client2+='                lst+=\'<div class="rev_b_svg yy__2" data-rev_click="';
                    src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                    src_client2+='">\'+this.__ig1.les_svg.poubelle+\'</div>\';\r\n';
                    if(ref_delete === ''){
                        src_client2+='                */\r\n';
                    }
                }
                if(ref_select === ''){
                    src_client2+='                /*\r\n';
                }
                src_client2+='                lst+=\'<div class="rev_b_svg yy__2" data-rev_click="';
                src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_voir1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                src_client2+='">\'+this.__ig1.les_svg.voir+\'</div>\';\r\n';
                if(ref_select === ''){
                    src_client2+='                */\r\n';
                }
                if(ref_select === '' || ref_update === ''){
                    src_client2+='                /*\r\n';
                }
                src_client2+='                lst+=\'<div class="rev_b_svg yy__3" data-rev_click="';
                src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_modification1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                src_client2+='">\'+this.__ig1.les_svg.editer+\'</div>\';\r\n';
                src_client2+='\r\n';
                if(ref_select === '' || ref_update === ''){
                    src_client2+='                */\r\n';
                }
                /*
                  =====================================================================================
                */
                if(ref_select === '' || ref_insert === ''){
                    src_client2+='                /*\r\n';
                }
                src_client2+='                lst+=\'<div class="rev_b_svg yy__4" data-rev_click="';
                src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_duplication1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                src_client2+='">\'+this.__ig1.les_svg.dupliquer+\'</div>\';\r\n';
                src_client2+='\r\n';
                if(ref_select === '' || ref_insert === ''){
                    src_client2+='                */\r\n';
                }
                src_client2+='                lst+=\'</div>\';\r\n';
                src_client2+='                lst+=\'</td>\';\r\n';
                /*
                  il peut y avoir plusieurs critères de sélection d'un champ ( exemple priorite = et priorite < )
                  dans ce cas, il faut ne mettre en sortie le champ qu'une seule fois
                */
                var tab_champs_sortie=[];
                for(let i in liste_des_champs_liste_ecran){
                    let el=liste_des_champs_liste_ecran[i];
                    let cle=el.préfixe_du_champ + '.' + el.nom_du_champ;
                    if(tab_champs_sortie.includes( cle )){
                    }else{
                        if(el.champ_dans_la_base === null){
                            if(el.nom_du_champ === 'chp_nom_de_connexion_utilisateur' && el.préfixe_du_champ !== 'T0'){
                                /*
                                  dans un filtre, on peut avoir besoin d'un champ nom_de_connexion_utilisateur 
                                  par exemple : fdl_id_prestataire_missaffect
                                */
                                src_client2+='            /' + '*\n';
                                src_client2+='            *' + '/\n';
                                src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                                src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                src_client2+='                lst+=this.__ig1.fi2( elem[\'' + cle + '\']);\r\n';
                                src_client2+='            }\r\n';
                                src_client2+='            lst += \'</td>\';\r\n';
                                /* "T1_chp_nom_de_connexion_utilisateur" : {"type_filtre" : 'VARCHAR' ,"défaut" : '' ,"masqué" : false ,"nom" : 'nom prestataire' ,"taille" : 8} , */
                            }
                            /*
                              le champ fait référence à une table dans une autre base
                              exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                              que le champ commercial fait référence la table "utilisateur"
                            */
                        }else{
                            if(el.champ_dans_la_base.genre_objet_du_champ
                                   && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                                       || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                                       || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                            ){
                                continue;
                            }
                            tab_champs_sortie.push( cle );
                            src_client2+='';
                            src_client2+='            /' + '*\n';
                            src_client2+='            *' + '/\n';
                            if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                                src_client2+='            lst += \'<td style="max-width:360px;overflow:hidden;">\';\r\n';
                                src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                src_client2+='                lst+=this.__ig1.fi2( elem[\'' + cle + '\'].substr(0,200));\r\n';
                                src_client2+='            }\r\n';
                            }else if(el.champ_dans_la_base.espece_du_champ === 'VARCHAR'){
                                src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                                src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                src_client2+='                lst+=this.__ig1.fi2( elem[\'' + cle + '\']);\r\n';
                                src_client2+='            }\r\n';
                            }else{
                                if(liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_parmis_genre === '0,1'
                                       && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_valeur_init_genre === '0'
                                       && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.chp_espece_genre === 'INTEGER'
                                ){
                                    src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                                    src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                    src_client2+='                    if(elem[\'' + cle + '\']===0){\r\n';
                                    src_client2+='                        lst+=\'<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">\'+this.__ig1.les_svg.rond_rouge1+\'</div>\';\r\n';
                                    src_client2+='                    }else{\r\n';
                                    src_client2+='                        lst+=\'<div style="height:var(--t_police);width:var(--t_police);margin:0 auto;">\'+this.__ig1.les_svg.rond_vert1+\'</div>\';\r\n';
                                    src_client2+='                    }\r\n';
                                    src_client2+='\r\n';
                                    src_client2+='            }\r\n';
                                }else{
                                    src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                                    src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                                    src_client2+='                lst+=elem[\'' + cle + '\'];\r\n';
                                    src_client2+='            }\r\n';
                                }
                            }
                            src_client2+='            lst += \'</td>\';\r\n';
                        }
                    }
                }
                src_client2+='                lst+=\'</tr>\';\r\n';
                src_client2+='            }\r\n';
                src_client2+='            if(lst !== \'\'){\r\n';
                src_client2+='                o1+=\'<div class="yy_conteneur_table">\';\r\n';
                src_client2+='                o1+=\'<table border="1">\';\r\n';
                src_client2+='                o1+=\'<tr>\';\r\n';
                src_client2+='                o1+=\'<th>action</th>\';\r\n';
                tab_champs_sortie=[];
                for(let i in liste_des_champs_liste_ecran){
                    let el=liste_des_champs_liste_ecran[i];
                    let cle=liste_des_champs_liste_ecran[i].préfixe_du_champ + '.' + liste_des_champs_liste_ecran[i].nom_du_champ;
                    if(tab_champs_sortie.includes( cle )){
                    }else{
                        if(el.champ_dans_la_base === null){
                            /*
                              le champ fait référence à une table dans une autre base
                              exemple T1_chp_nom_de_connexion_utilisateur alors qu'on est sur la table client et
                              que le champ commercial fait référence la table "utilisateur"
                            */
                            if(el.nom_du_champ === 'chp_nom_de_connexion_utilisateur' && el.préfixe_du_champ !== 'T0'){
                                src_client2+='                o1+=/* chp_nom_de_connexion_utilisateur */\'<th>nom</th>\';\r\n';
                            }
                        }else{
                            if(el.champ_dans_la_base.genre_objet_du_champ
                                   && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                                       || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                                       || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                            ){
                                continue;
                            }
                            tab_champs_sortie.push( cle );
                            src_client2+='                o1+=/* ' + liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_du_champ + ' */\'<th';
                            if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                                src_client2+=' style="max-width:360px;"';
                            }
                            src_client2+='>' + liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_bref_du_champ + '</th>\';\r\n';
                        }
                    }
                }
                src_client2+='                o1+=\'</tr>\';\r\n';
                src_client2+='                o1+=lst;\r\n';
                src_client2+='                o1+=\'</table>\';\r\n';
                src_client2+='                o1+=\'</div>\';\r\n';
                src_client2+='            }else{\r\n';
                src_client2+='                o1+=this.__ig1.la_liste_est_vide();\r\n';
                src_client2+='\r\n';
                src_client2+='            }\r\n';
                src_client2+='        }\r\n';
                src_client2+='        return(o1);\r\n';
                src_client2+='    }\r\n';
                src_client2+='\r\n';
                /*
                  
                  
                  
                */
            }
        }
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='}\n';
        src_client2+='export{' + this.#nom_de_la_classe_générée2 + ' as ' + this.#nom_de_la_classe_générée2 + '};\r\n';
        /*
          
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async liste1( mat , d ){\r\n';
        src_serveur_js2+='        this.fonction_liste=\'liste1\';\r\n';
        src_serveur_js2+='        await this.filtre1( mat , d );\r\n';
        src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
        src_serveur_js2+='    }\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    moi=\'' + this.#nom_de_la_classe_générée2 + '\';\r\n';
        src_serveur_js2+='    __ig1=null;\r\n';
        src_serveur_js2+='    fonction_liste=\'liste1\';\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    constructor( __ig1 ){\r\n';
        src_serveur_js2+='        this.__ig1=__ig1;\r\n';
        src_serveur_js2+='    }\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='}\r\n';
        src_serveur_js2+='export{' + this.#nom_de_la_classe_générée2 + ' as ' + this.#nom_de_la_classe_générée2 + '};\r\n';
        /* JS_client2  src_client2 */
        let tempo_js_client_2=this.#_developpement1.normaliser_javascript( src_client2 );
        if(tempo_js_client_2.__xst === __xsu){
            document.getElementById( 'JS_client2' ).value=tempo_js_client_2.rev_vers_js.__xva;
        }else{
            this.__ig1.ajoute_message( {"__xst" : __xal ,"__xme" : 'Erreur dans le javascript CLIENT généré' + this.__ig1.__rev1.nl2()} );
            document.getElementById( 'JS_client2' ).value=src_client2;
            this.__ig1.affiche_les_messages();
        }
        let cc=this.#_developpement1.normaliser_javascript( src_serveur_js2 );
        if(cc.__xst === __xsu){
            /* document.getElementById( 'serveur_js2' ).value=src_serveur_js2; */
            document.getElementById( 'serveur_js2' ).value=cc.rev_vers_js.__xva;
        }else{
            this.__ig1.ajoute_message( {"__xst" : __xal ,"__xme" : 'Erreur dans le javascript SERVEUR généré' + this.__ig1.__rev1.nl2()} );
            document.getElementById( 'serveur_js2' ).value=src_serveur_js2;
            this.__ig1.affiche_les_messages();
        }
        /*
          let bb=this.#_developpement1.normaliser_javascript( o2 );
          if(bb.__xst === __xsu){
          document.getElementById( 'js_bdd1' ).value=bb.rev_vers_js.__xva;
          }else{
          this.__ig1.ajoute_message( {"__xst" : __xif ,"__xme" : 'Erreur dans le javascript généré' + this.__ig1.__rev1.nl2()} );
          document.getElementById( 'js_bdd1' ).value=o2;
          this.__ig1.affiche_les_messages();
          }
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    pre_selectionner( p ){
        for(let type_requete in this.#liste_des_types_de_requetes){
            this.#liste_des_types_de_requetes[type_requete]=false;
            let lst=document.getElementById( 'reference_requete_' + type_requete ).getElementsByTagName( 'option' );
            if(lst.length >= 2){
                this.#liste_des_types_de_requetes[type_requete]=true;
                let chi_id_requete=parseInt( lst[lst.length - 1].value , 10 );
                document.getElementById( 'reference_requete_' + type_requete ).value=chi_id_requete;
                document.getElementById( 'libelle_de_la_requete_' + type_requete ).innerHTML='' + this.__ig1.__liste_des_sql[chi_id_requete].cht_sql_requete + '';
                document.getElementById( 'bouton_aller_a_la_requete_' + type_requete ).style.visibility='visible';
                document.getElementById( 'bouton_aller_a_la_requete_' + type_requete ).setAttribute( 'data-chi_id_requete' , chi_id_requete );
            }else{
                document.getElementById( 'bouton_aller_a_la_requete_' + type_requete ).style.visibility='hidden';
                document.getElementById( 'bouton_aller_a_la_requete_' + type_requete ).setAttribute( 'data-chi_id_requete' , '' );
            }
        }
        if(this.#liste_des_types_de_requetes.liste_ecran === true){
            document.getElementById( 'gererer_le_js_bdd1' ).style.visibility='visible';
            this.#rev_fragment_mat=null;
            let obj=this.recupere_elements_pour_générer_les_programmes( null );
            if(obj.__xst === __xsu){
            }else{
                this.__ig1.affiche_les_messages();
            }
        }else{
            document.getElementById( 'gererer_le_js_bdd1' ).style.visibility='hidden';
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    aller_a_la_requete( mat , d ){
        let l01=mat.length;
        let zone='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if((mat[i][1] === 'liste_ecran'
                       || mat[i][1] === 'select'
                       || mat[i][1] === 'insert'
                       || mat[i][1] === 'update'
                       || mat[i][1] === 'delete')
                   && mat[i][2] == 'c'
            ){
                zone=mat[i][1];
            }
        }
        if(zone !== ''){
            let chi_id_requete=parseInt( document.getElementById( 'bouton_aller_a_la_requete_' + zone ).getAttribute( 'data-chi_id_requete' ) , 10 );
            let tm1='m1(n1(x_ecran_concevoir_une_requete1),f1(page_requete1(chi_id_requete(' + chi_id_requete + '))))';
            let omat1=this.__ig1.__rev1.rev_tm( tm1 );
            this.__ig1.__xac( omat1.__xva , 0 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_requete( mat , d ){
        let zone_select='';
        let zone_pre='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_pre' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_pre=mat[i + 1][1];
            }
        }
        if(zone_select !== '' && zone_pre !== ''){
            if(document.getElementById( zone_select ).value === ''){
                document.getElementById( zone_pre ).innerHTML='';
                document.getElementById( 'bouton_aller_a_la_requete_' + zone_select.substr( 18 ) ).style.visibility='hidden';
                document.getElementById( 'bouton_aller_a_la_requete_' + zone_select.substr( 18 ) ).setAttribute( 'data-chi_id_requete' , '' );
            }else{
                document.getElementById( zone_pre ).innerHTML='' + this.__ig1.__liste_des_sql[document.getElementById( zone_select ).value].cht_sql_requete + '';
                document.getElementById( 'bouton_aller_a_la_requete_' + zone_select.substr( 18 ) ).style.visibility='visible';
                document.getElementById( 'bouton_aller_a_la_requete_' + zone_select.substr( 18 ) ).setAttribute( 'data-chi_id_requete' , document.getElementById( zone_select ).value );
            }
        }
        let tous_remplis=true;
        for(let type_requete in this.#liste_des_types_de_requetes){
            this.#liste_des_types_de_requetes[type_requete]=false;
            if(document.getElementById( 'reference_requete_' + type_requete ).value === ''){
                tous_remplis=false;
            }else{
                this.#liste_des_types_de_requetes[type_requete]=true;
            }
        }
        if(this.#liste_des_types_de_requetes.liste_ecran === true){
            document.getElementById( 'gererer_le_js_bdd1' ).style.visibility='visible';
        }else{
            document.getElementById( 'gererer_le_js_bdd1' ).style.visibility='hidden';
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    enrichir_objet_base( mat2 , chi_id_basedd ){
        let l02=mat2.length;
        let nom_de_la_table='';
        this.#obj_bdd={};
        this.#obj_table={};
        this.#dependances={};
        for( let j=1 ; j < l02 ; j=mat2[j][12] ){
            if(mat2[j][2] === 'f' && mat2[j][1] === 'créer_table'){
                nom_de_la_table='';
                for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                    if(mat2[k][2] === 'f' && mat2[k][1] === 'nom_de_la_table' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                        nom_de_la_table=mat2[k + 1][1];
                        this.#obj_bdd[nom_de_la_table]={"champs" : {} ,"ordre_des_champs" : [] ,"meta" : {}};
                    }
                }
                if(nom_de_la_table !== ''){
                    for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                        if(mat2[k][2] === 'f' && mat2[k][1] === 'meta'){
                            for( let l=k + 1 ; l < l02 ; l=mat2[l][12] ){
                                if(mat2[l][2] === 'f' && mat2[l][8] === 1 && mat2[l + 1][2] === 'c'){
                                    this.#obj_bdd[nom_de_la_table].meta[mat2[l][1]]=mat2[l + 1][1];
                                }
                            }
                        }
                    }
                    for( let l=j + 1 ; l < l02 ; l=mat2[l][12] ){
                        if(mat2[l][1] === 'champs'){
                            for( let m=l + 1 ; m < l02 ; m=mat2[m][12] ){
                                if(mat2[m][1] === 'champ'){
                                    var nom_du_champ='';
                                    for( let n=m + 1 ; n < l02 ; n=mat2[n][12] ){
                                        if(mat2[n][1] === 'nom_du_champ'){
                                            nom_du_champ=mat2[n + 1][1];
                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]={"nom_du_champ" : nom_du_champ ,"meta" : {}};
                                        }
                                    }
                                    if(nom_du_champ !== ''){
                                        this.#obj_bdd[nom_de_la_table].ordre_des_champs.push( nom_du_champ );
                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['non_nulle']=false;
                                        for( let n=m + 1 ; n < l02 ; n=mat2[n][12] ){
                                            if(mat2[n][1] === 'type'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['type_du_champ']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'primary_key'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['primary_key']=true;
                                            }else if(mat2[n][1] === 'non_nulle'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['non_nulle']=true;
                                            }else if(mat2[n][1] === 'espece_du_champ'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['espece_du_champ']=mat2[n + 1][1];
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['type_du_champ']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'references' && mat2[n][8] === 2){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['table_mere']=mat2[n + 1][1];
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['champ_pere']=mat2[n + 2][1];
                                                if(!this.#dependances.hasOwnProperty( chi_id_basedd )){
                                                    this.#dependances[chi_id_basedd]=[];
                                                }
                                                this.#dependances[chi_id_basedd].push( {
                                                         /*  */
                                                        "base_mere" : chi_id_basedd ,
                                                        "table_mere" : mat2[n + 1][1] ,
                                                        "champ_pere" : mat2[n + 2][1] ,
                                                        "base_fille" : chi_id_basedd ,
                                                        "table_fille" : nom_de_la_table ,
                                                        "champ_fils" : nom_du_champ
                                                    } );
                                            }else if(mat2[n][1] === 'longueur_du_champ' && mat2[n][8] === 1 && mat2[n + 1][2] === 'c'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['longueur_du_champ']=parseInt( mat2[n + 1][1] , 10 );
                                            }else if(mat2[n][1] === 'a_une_valeur_par_defaut' && mat2[n][8] === 1 && mat2[n + 1][2] === 'c'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['a_une_valeur_par_defaut']=parseInt( mat2[n + 1][1] , 10 );
                                            }else if(mat2[n][1] === 'valeur_par_defaut' && mat2[n][8] === 1 && mat2[n + 1][2] === 'c'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['valeur_par_defaut']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'la_valeur_par_defaut_est_caractere' && mat2[n][8] === 1 && mat2[n + 1][2] === 'c'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['la_valeur_par_defaut_est_caractere']=parseInt( mat2[n + 1][1] , 10 );
                                            }else if(mat2[n][1] === 'nom_du_champ' && mat2[n][8] === 1 && mat2[n + 1][2] === 'c'){
                                                /*
                                                  déjà fait
                                                */
                                            }else if(mat2[n][1] === 'meta' && mat2[n][2] === 'f'){
                                                for( let o=n + 1 ; o < l02 ; o=mat2[o][12] ){
                                                    if(mat2[o][1] === 'genre' && mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o + 1][2] === 'c'){
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_numerique_du_champ']=mat2[o + 1][1];
                                                        let cht_particularités_genre={"source_au_format_rev" : 0 ,"source_non_rev" : 0};
                                                        /*
                                                          if(nom_du_champ==='cht_particularités_genre'){
                                                          debugger
                                                          }
                                                        */
                                                        let aa=null;
                                                        try{
                                                            aa=this.__ig1.__liste_des_genres[mat2[o + 1][1]].cht_particularités_genre;
                                                        }catch(e){
                                                            /* debugger */
                                                        }
                                                        if(aa !== null && aa !== ''){
                                                            var obj1=this.__ig1.__rev1.rev_tm( this.__ig1.__liste_des_genres[mat2[o + 1][1]].cht_particularités_genre );
                                                            for( let o=1 ; o < obj1.__xva.length ; o=obj1.__xva[o][12] ){
                                                                if(obj1.__xva[o][2] === 'f' && obj1.__xva[o][8] === 1 && obj1.__xva[o + 1][2] === 'c'){
                                                                    cht_particularités_genre[obj1.__xva[o][1]]=this.__ig1.est_num( obj1.__xva[o + 1][1] ) ? ( parseInt( obj1.__xva[o + 1][1] ) ) : ( obj1.__xva[o + 1][1] );
                                                                }
                                                            }
                                                        }
                                                        /*#
                                                          if(nom_du_champ==='fld_id_prestation'){
                                                              debugger
                                                          }
                                                        */
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['cht_particularités_genre']=cht_particularités_genre;
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_objet_du_champ']=this.__ig1.__liste_des_genres[mat2[o + 1][1]];
                                                        /*
                                                          debugger
                                                          this.__ig1.__liste_des_genres
                                                        */
                                                        /* console.log('mat2[o][1]='+nom_du_champ+ ' : ' +mat2[o+1][1]); */
                                                    }else if(mat2[o][1] === 'reference_externe' && mat2[o][2] === 'f' && mat2[o][8] === 3){
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1] + '_base']=mat2[o + 1][1];
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1] + '_table']=mat2[o + 2][1];
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1] + '_champ']=mat2[o + 3][1];
                                                    }else if(mat2[o][1] === 'typologie' && mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o + 1][2] === 'c'){
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta['typologie']=mat2[o + 1][1];
                                                    }else if(mat2[o][1] === 'est_libelle_lien' && mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o + 1][2] === 'c'){
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta['est_libelle_lien']=parseInt( mat2[o + 1][1] , 10 );
                                                    }else{
                                                        if(mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o + 1][2] === 'c'){
                                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1]]=mat2[o + 1][1];
                                                        }else{
                                                            console.log( '%c meta "' + mat2[o][1] + '" non pris en compte pour le champ "' + nom_de_la_table + '/' + nom_du_champ + '"' , 'background:yellow;color:red;' );
                                                        }
                                                    }
                                                }
                                            }else{
                                                console.log( 'tab2[n][1]=' + mat2[n][1] );
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
        /*
          apres avoir parcouru la base, on peut repérer les champs en session et les champs pères en session
        */
        for(let i in this.#obj_bdd){
            for(let j in this.#obj_bdd[i].champs){
                if(this.#obj_bdd[i].champs[j].hasOwnProperty( 'table_mere' ) && this.#obj_bdd[i].champs[j]['table_mere'] !== ''){
                    let el=null;
                    try{
                        el=this.#obj_bdd[this.#obj_bdd[i].champs[j]['table_mere']].champs[this.#obj_bdd[i].champs[j]['champ_pere']];
                    }catch(e){
                        /* debugger */
                    }
                    if(el && el.meta.hasOwnProperty( 'est_en_session' ) && el.meta.est_en_session === '1'){
                        this.#obj_bdd[i].champs[j]['champ_pere_est_en_session1']=true;
                        this.#obj_bdd[i].champs[j]['nom_du_champ_session1']=this.#obj_bdd[i].champs[j]['champ_pere'];
                        /* debugger */
                    }
                }
                if(this.#obj_bdd[i].champs[j].meta.hasOwnProperty( 'est_en_session' )
                       && this.#obj_bdd[i].champs[j].meta.est_en_session === '1'
                ){
                    this.#obj_bdd[i].champs[j]['champ_est_en_session1']=true;
                    if(this.#obj_bdd[i].champs[j].meta.hasOwnProperty( 'nom_en_session' )
                           && this.#obj_bdd[i].champs[j].meta.nom_en_session !== ''
                    ){
                        this.#obj_bdd[i].champs[j]['nom_en_session1']=this.#obj_bdd[i].champs[j].meta.nom_en_session;
                    }else{
                        this.#obj_bdd[i].champs[j]['nom_en_session1']=j;
                    }
                }
            }
        }
        console.log( 'this.#obj_bdd=' , this.#obj_bdd );
        console.log( 'this.#dependances=' , this.#dependances );
    }
    /*
      =============================================================================================================
    */
    agrandir_la_zone_req( mat , d ){
        let l01=mat.length;
        let zone='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                zone=mat[i + 1][1];
                document.getElementById( mat[i + 1][1] ).style.maxHeight='';
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    retrecir_la_zone_req( mat , d ){
        let l01=mat.length;
        let zone='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                zone=mat[i + 1][1];
                document.getElementById( mat[i + 1][1] ).style.maxHeight='5em';
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    integrer_un_source_genere_dans_la_table_source( mat , d ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    bouton_integrer_ce_source_genere_dans_la_table_source( mat , d ){
        let cible_source='';
        let l01=mat.length;
        let zone='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'cible_source' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                cible_source=mat[i + 1][1];
            }
        }
        let nom_du_source=this.#nom_de_la_classe_générée2 + cible_source;
        if(confirm( 'intégrer ' + nom_du_source )){
            let cht_genere_source='';
            if(cible_source === '_c.js'){
                cht_genere_source=document.getElementById( 'JS_client2' ).value;
            }else if(cible_source === '_s.js'){
                cht_genere_source=document.getElementById( 'serveur_js2' ).value;
            }
            let obj={
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(integrer_un_source_genere_dans_la_table_source())))' ,
                "__xva" : {
                     /*  */
                    "cht_genere_source" : cht_genere_source ,
                    "nom_du_source" : nom_du_source
                }
            };
            this.__ig1.envoyer_un_colis_au_worker( obj );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    charger_base1( chi_id_basedd , nom_de_la_table , indice_de_la_classe ){
        this.#mat=this.#les_bases[chi_id_basedd];
        this.enrichir_objet_base( this.#mat.matrice , chi_id_basedd );
        this.#nom_de_la_table=nom_de_la_table;
        this.#obj_table=this.#obj_bdd[this.#nom_de_la_table];
        let o1='';
        o1+='<div class="yy_conteneur_txtara">';
        o1+='<table border="1">';
        for(let type_requete in this.#liste_des_types_de_requetes){
            o1+='<tr>';
            o1+='<td>';
            /* style="width:30%;" */
            var cmd='m1(n1(' + this.moi + '),f1(selectionner_une_requete(zone_select(reference_requete_' + type_requete + '),zone_pre(libelle_de_la_requete_' + type_requete + '))))';
            o1+=type_requete + ' : <br />';
            o1+='<select id="reference_requete_' + type_requete + '" data-rev_change="' + cmd + '">';
            o1+='<option value="">indéfini</option>';
            for(let i in this.__ig1.__liste_des_sql){
                if(type_requete === 'select' || type_requete === 'liste_ecran'){
                    if(this.__ig1.__liste_des_sql[i].cht_sql_requete === null){
                        this.__ig1.ajoute_message( {"__xst" : __xif ,"__xme" : 'La requête ' + i + ' a un champ sql vide' + this.__ig1.__rev1.nl2()} );
                        this.__ig1.affiche_les_messages();
                    }else{
                        if(this.__ig1.__liste_des_sql[i].cht_sql_requete.indexOf( this.#nom_de_la_table + ' T0' ) >= 0
                               && this.__ig1.__liste_des_sql[i].chp_type_requete === type_requete
                               && this.__ig1.__liste_des_sql[i].che_est_souche_requete === 1
                               && this.__ig1.__liste_des_sql[i].chp_table_reference_requete === this.#nom_de_la_table
                        ){
                            o1+='<option value="' + i + '">' + i + '</option>';
                        }else{
                            let nom_temporaire=this.#nom_de_la_table + '_fts';
                            if(this.__ig1.__liste_des_sql[i].cht_sql_requete.indexOf( nom_temporaire + ' T0' ) >= 0
                                   && this.__ig1.__liste_des_sql[i].chp_type_requete === type_requete
                                   && this.__ig1.__liste_des_sql[i].che_est_souche_requete === 1
                            ){
                                o1+='<option value="' + i + '">' + i + '</option>';
                            }
                        }
                    }
                }else{
                    if(this.__ig1.__liste_des_sql[i].cht_sql_requete === null){
                        this.__ig1.ajoute_message( {"__xst" : __xif ,"__xme" : 'La requête ' + i + ' a un champ sql vide' + this.__ig1.__rev1.nl2()} );
                        this.__ig1.affiche_les_messages();
                    }else{
                        if(this.__ig1.__liste_des_sql[i].cht_sql_requete.indexOf( this.#nom_de_la_table ) >= 0
                               && this.__ig1.__liste_des_sql[i].chp_type_requete === type_requete
                               && this.__ig1.__liste_des_sql[i].che_est_souche_requete === 1
                               && this.__ig1.__liste_des_sql[i].chp_table_reference_requete === this.#nom_de_la_table
                        ){
                            o1+='<option value="' + i + '">' + i + '</option>';
                        }
                    }
                }
            }
            o1+='</select>';
            o1+=' <div style="display:flex;">';
            o1+=' <div class="rev_bouton" data-rev_click="m1(n1(' + this.moi + ')f1(agrandir_la_zone_req(zone(libelle_de_la_requete_' + type_requete + '))))" title="agrandir la zone">' + this.__ig1.les_svg.agrandir + '</div>';
            o1+=' <div class="rev_bouton" data-rev_click="m1(n1(' + this.moi + ')f1(retrecir_la_zone_req(zone(libelle_de_la_requete_' + type_requete + '))))" title="retrecir la zone">' + this.__ig1.les_svg.retrecir + '</div>';
            o1+=' <div data-rev_click="m1(n1(' + this.moi + '),f1(aller_a_la_requete(' + type_requete + ')))" data-chi_id_requete="" id="bouton_aller_a_la_requete_' + type_requete + '" style="visibility:hidden;display:inline-block;" class="rev_bouton yy__4">SQL</div>';
            o1+=' </div>';
            o1+='';
            o1+='</td>';
            o1+='<td>';
            /* style="width:70%;" */
            o1+='<pre id="libelle_de_la_requete_' + type_requete + '" style="max-height:5em;max-width:80vw;"></pre>';
            o1+='</td>';
            o1+='</tr>';
        }
        o1+='</table>';
        o1+='</div>';
        o1+=', ne pas prendre les valeurs en session : ';
        o1+='<input id="ne_pas_prendre_les_valeurs_en_session" type="checkbox" />';
        o1+=', pour sous liste uniquement : ';
        o1+='<input id="pour_sous_liste_uniquement" type="checkbox" />';
        let cmd1='m1(n1(' + this.moi + '),f1(recupere_elements_pour_générer_les_programmes1_clic()))';
        o1+='<div id="gererer_le_js_bdd1" data-rev_click="' + cmd1 + '" style="visibility:hidden;" class="rev_bouton yy__1">générer les programmes</div>';
        /*
        */
        o1+='<div class="yy_conteneur_txtara">';
        o1+='   <div>';
        o1+='      JS client 2:';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'JS_client2' );
        /*  */
        o1+='      <div class="rev_bouton yy__0"';
        o1+=' data-rev_click="m1(n1(' + this.moi + '),f1(bouton_integrer_ce_source_genere_dans_la_table_source(cible_source(\'_c.js\'))))';
        o1+='">integrer dans tbl_source</div>';
        /*  */
        o1+='   </div>';
        o1+='   <textarea id="JS_client2" rows="15" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        /*
        */
        o1+='<div class="yy_conteneur_txtara">';
        o1+=' <div>';
        o1+='  JS serveur 2 : ';
        o1+=this.__ig1.__fnt1.boutons_edition1( 'serveur_js2' );
        /*  */
        o1+='      <div class="rev_bouton yy__0"';
        o1+=' data-rev_click="m1(n1(' + this.moi + '),f1(bouton_integrer_ce_source_genere_dans_la_table_source(cible_source(\'_s.js\'))))';
        o1+='">integrer dans tbl_source</div>';
        o1+=' </div>';
        o1+=' <textarea id="serveur_js2" rows="15" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        let contenu_generer_le_programme=document.getElementById( 'contenu_generer_le_programme' );
        contenu_generer_le_programme.innerHTML=o1;
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        setTimeout( () => {
                this.pre_selectionner( this );} , 250 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_un_indice_classe( mat , d ){
        document.getElementById( 'contenu_generer_le_programme' ).innerHTML='';
        let zone_select='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                zone_select=mat[i + 1][1];
            }
        }
        if(zone_select !== ''){
            let chi_id_basedd=parseInt( document.getElementById( 'vv_les_bases' ).value );
            let nom_de_la_table=document.getElementById( 'vv_les_tables' ).value;
            if(nom_de_la_table !== ''){
                let indice_de_la_classe=document.getElementById( 'vv_indice_de_la_classe' ).value;
                if(indice_de_la_classe !== ''){
                    let le_hash='';
                    le_hash+='m1(n1(x_ecran_generer_programmes1),f1(entree_module(';
                    le_hash+=' chi_id_basedd(' + chi_id_basedd + '),';
                    le_hash+=' nom_de_la_table(\'' + this.__ig1.fi1( nom_de_la_table ) + '\')';
                    le_hash+=' indice_de_la_classe(' + this.__ig1.fi1( indice_de_la_classe ) + ')';
                    le_hash+=')))';
                    window.location.hash=le_hash;
                    this.charger_base1( chi_id_basedd , nom_de_la_table , parseInt( indice_de_la_classe , 10 ) );
                }else{
                    window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '),nom_de_la_table(\'' + this.__ig1.fi1( nom_de_la_table ) + '\'))))';
                }
            }else{
                window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '))))';
            }
        }else{
            window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '))))';
            this.__ig1.ajoute_les_evenements_aux_boutons( null );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_table( mat , d ){
        document.getElementById( 'contenu_generer_le_programme' ).innerHTML='';
        let zone_select='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                zone_select=mat[i + 1][1];
            }
        }
        if(zone_select !== ''){
            let chi_id_basedd=parseInt( document.getElementById( 'vv_les_bases' ).value );
            let nom_de_la_table=document.getElementById( 'vv_les_tables' ).value;
            if(nom_de_la_table !== ''){
                window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '),nom_de_la_table(\'' + this.__ig1.fi1( nom_de_la_table ) + '\'))))';
                let o1='';
                o1+='<option id="option_indice_de_la_classe_0" value="">indice</option>';
                for( let i=1 ; i < 10 ; i++ ){
                    o1+='<option id="option_indice_de_la_classe_' + i + '" value="' + i + '">' + i + '</option>';
                }
                document.getElementById( 'vv_indice_de_la_classe' ).innerHTML=o1;
                this.__ig1.ajoute_les_evenements_aux_boutons( null );
            }else{
                document.getElementById( 'vv_indice_de_la_classe' ).innerHTML='';
                window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '))))';
                this.__ig1.ajoute_les_evenements_aux_boutons( null );
            }
        }else{
            document.getElementById( 'vv_indice_de_la_classe' ).innerHTML='';
            window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '))))';
            this.__ig1.ajoute_les_evenements_aux_boutons( null );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_base( mat , d ){
        /* debugger */
        document.getElementById( 'contenu_generer_le_programme' ).innerHTML='';
        let zone_select='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                zone_select=mat[i + 1][1];
            }
        }
        let o1='';
        o1+='<option  value="" selected>sélectionnez une table </option>';
        if(zone_select !== ''){
            let chi_id_basedd=parseInt( document.getElementById( zone_select ).value );
            if(chi_id_basedd > 0){
                window.location.hash='m1(n1(x_ecran_generer_programmes1),f1(entree_module(chi_id_basedd(' + chi_id_basedd + '))))';
                for(let j in this.#les_bases[chi_id_basedd].tables){
                    o1+='<option id="option_table_' + this.#les_bases[chi_id_basedd].tables[j] + '" value="' + this.#les_bases[chi_id_basedd].tables[j] + '" >' + this.#les_bases[chi_id_basedd].tables[j] + '</option>';
                }
            }
        }
        document.getElementById( 'vv_les_tables' ).innerHTML=o1;
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    recuperer_zone_travail_pour_les_bases2( mat , d , le_colis1=null ){
        let chi_id_basedd=0;
        let nom_de_la_table='';
        let indice_de_la_classe=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'indice_de_la_classe' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                indice_de_la_classe=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#les_bases={};
        let o1='';
        o1+='base : ';
        o1+='<select id="vv_les_bases" data-rev_change="m1(n1(' + this.moi + '),f1(selectionner_une_base(zone_select(vv_les_bases))))">';
        o1+='<option  value="0" ' + (0 === chi_id_basedd ? ( ' selected ' ) : ( '' )) + '>base</option>';
        this.chi_id_projet=le_colis1.chi_id_projet;
        for(let i in le_colis1.__xva.les_bases_du_projet){
            if(le_colis1.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] === null){
            }else{
                o1+='<option ';
                o1+=' value="' + le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] + '" ';
                o1+=' id="option_base_"';
                o1+=le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'];
                o1+='"';
                if(le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] === chi_id_basedd){
                    o1+=' selected ';
                }
                o1+='>' + le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] + '</option>';
                this.#les_bases[le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']]={"matrice" : null ,"tables" : []};
                var obj1=this.__ig1.__rev1.rev_tm( le_colis1.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] );
                if(obj1.__xst === __xsu){
                    this.#les_bases[le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']].matrice=obj1.__xva;
                    let mat2=obj1.__xva;
                    let l02=mat2.length;
                    for( let j=1 ; j < l02 ; j=mat2[j][12] ){
                        if(mat2[j][1] === 'créer_table'){
                            for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                                if(mat2[k][1] === 'nom_de_la_table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                    this.#les_bases[le_colis1.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']].tables.push( mat2[k + 1][1] );
                                }
                            }
                        }
                    }
                }else{
                    this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__ig1.__rev1.nl2()} );
                    /* this.__ig1.remplis_les_messages_et_affiche( '' ); */
                    return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
                }
            }
        }
        o1+='</select>';
        o1+=' , table : ';
        o1+=' <select id="vv_les_tables" data-rev_change="m1(n1(' + this.moi + '),f1(selectionner_une_table(zone_select(vv_les_tables))))">';
        o1+='<option  value="" ' + ('' === nom_de_la_table ? ( ' selected ' ) : ( '' )) + '>table</option>';
        if(chi_id_basedd > 0){
            for(let j in this.#les_bases[chi_id_basedd].tables){
                o1+='<option ';
                o1+=' id="option_table_"';
                o1+=this.#les_bases[chi_id_basedd].tables[j];
                o1+='"';
                if(nom_de_la_table === this.#les_bases[chi_id_basedd].tables[j]){
                    o1+=' selected ';
                }
                o1+='>' + this.#les_bases[chi_id_basedd].tables[j] + '</option>';
            }
        }
        o1+='</select>';
        o1+=' , indice : ';
        o1+=' <select id="vv_indice_de_la_classe" data-rev_change="m1(n1(' + this.moi + '),f1(selectionner_un_indice_classe(zone_select(indice_de_la_classe))))">';
        o1+='<option  value="" ' + ('' === indice_de_la_classe ? ( ' selected ' ) : ( '' )) + '>indice</option>';
        if(indice_de_la_classe !== 0){
            for( let j=1 ; j < 10 ; j++ ){
                o1+='<option ';
                o1+=' id="option_indice_de_la_classe_"' + j + '"';
                if(indice_de_la_classe === j){
                    o1+=' selected ';
                }
                o1+='>' + j + '</option>';
            }
        }
        o1+='</select>';
        document.getElementById( 'zone_selection' ).innerHTML=o1;
        if(chi_id_basedd > 0 && nom_de_la_table !== '' && indice_de_la_classe > 0){
            this.charger_base1( chi_id_basedd , nom_de_la_table , indice_de_la_classe );
        }else{
            this.__ig1.ajoute_les_evenements_aux_boutons( null );
        }
        setTimeout( () => {
                let indice_option_base_courante=document.getElementById( 'vv_les_bases' ).value;
                if(indice_option_base_courante === '0'){
                    console.log( 'ici' );
                    let lst=document.getElementById( 'vv_les_bases' ).getElementsByTagName( 'option' );
                    if(lst.length === 2){
                        document.getElementById( 'vv_les_bases' ).value=lst[1].value;
                        let tt='m1(n1(' + this.moi + '),f1(selectionner_une_base(zone_select(vv_les_bases))))';
                        let mato1=this.__ig1.__rev1.rev_tcm( tt );
                        this.selectionner_une_base( mato1.__xva , 5 );
                    }
                    console.log( 'lst=' , lst );
                }
                /*  */} , 50 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let l01=mat.length;
        let nom_de_la_table='';
        let chi_id_basedd=0;
        let indice_de_la_classe=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_de_la_table' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'chi_id_basedd' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'indice_de_la_classe' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                indice_de_la_classe=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let $o1='';
        $o1+='<h1>générer les programmes </h1>';
        /* sur ' + nom_de_la_table + '(' + chi_id_basedd + ') */
        $o1+='<div id="zone_selection"></div>';
        $o1+='<div id="zone_references_liens_externes"></div>';
        $o1+='<div id="contenu_generer_le_programme"></div>';
        this.__ig1.maj_contenu_principal( $o1 );
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(recuperer_zone_travail_pour_les_bases2(';
        cmd+=' chi_id_basedd(' + chi_id_basedd + '),';
        cmd+=' indice_de_la_classe(' + indice_de_la_classe + '),';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' nom_du_module2(' + this.moi + '),';
        cmd+='))))';
        let obj={"__xac" : cmd};
        this.__ig1.envoyer_un_colis_au_worker( obj );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'générer les programmes' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{x_ecran_generer_programmes1 as x_ecran_generer_programmes1};