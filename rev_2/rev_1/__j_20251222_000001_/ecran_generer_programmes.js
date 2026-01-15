import {_developpement1} from './_developpement1.js';
/*
  enrichir_objet_base
*/
class ecran_generer_programmes{
    /*
      ref_select=146
      ref_insert=147
      ref_delete=149
      ref_update=148
      ref_liste_ecran=145
    */
    moi='ecran_generer_programmes';
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
    #chemin_module1=null;
    #nom_de_la_classe_générée1=null;
    #nom_de_la_classe_générée2=null;
    /* c_u tilisateurs1 */
    #mat=null;
    #obj_bdd={};
    #obj_table={};
    #liste_de_tables_liste_ecran=[];
    #arbre={};
    #_developpement1=null;
    /*
      =============================================================================================================
    */
    constructor( obj_init ){
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/acorn.js' );
        __gi1.charger_script_dynamique( __gi1.__version + '/bibliotheques_externes/php_parser.js' );
        this.#chemin_module1=obj_init.chemin_module1;
        /* debugger; */
        /* console.log( 'ici' ); */
        this.#_developpement1=new _developpement1( this.#_developpement1 , __gi1.__rev1 );
    }
    /*
      =============================================================================================================
    */
    générer_les_programmes( mat , d ){
        let src_client2='';
        let src_serveur_js2='';
        let o2='';
        let src_hph='';
        let ne_pas_prendre_les_valeurs_en_session=document.getElementById( 'ne_pas_prendre_les_valeurs_en_session' ).checked;
        let def_table=this.#obj_bdd[this.#nom_de_la_table];
        let incice_de_la_classe=document.getElementById( 'incice_de_la_classe' ).value;
        if(this.#nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
            this.#nom_ref=this.#nom_de_la_table.substr( 4 );
            this.#nom_de_la_classe_générée1='c_' + this.#nom_ref + incice_de_la_classe;
            this.#nom_de_la_classe_générée2=this.#nom_ref + incice_de_la_classe;
        }else{
            this.#nom_ref=this.#nom_de_la_table;
            this.#nom_de_la_classe_générée1='c_' + this.#nom_ref + incice_de_la_classe;
            this.#nom_de_la_classe_générée2=this.#nom_ref + incice_de_la_classe;
        }
        let champ_primaire='';
        for(let i in this.#obj_table.champs){
            if(this.#obj_table.champs[i].genre_objet_du_champ.che_est_incrément_genre === 1
                   || this.#obj_table.champs[i].genre_objet_du_champ.che_est_primaire_genre === 1
            ){
                champ_primaire=i;
                break;
            }
        }
        if(champ_primaire === ''){
            debugger;
            return({"__xst" : __xer});
        }
        let ref_select=document.getElementById( 'reference_requete_select' ).value;
        let ref_insert=document.getElementById( 'reference_requete_insert' ).value;
        let ref_delete=document.getElementById( 'reference_requete_delete' ).value;
        let ref_update=document.getElementById( 'reference_requete_update' ).value;
        let ref_liste_ecran=document.getElementById( 'reference_requete_liste_ecran' ).value;
        let champ_est_libelle_lien=null;
        let liste_des_champs_insert=[];
        if(ref_insert !== ''){
            let objet_requete_insert=__gi1.__liste_des_sql[ref_insert];
            let matrice_insert=__gi1.__rev1.rev_tm( objet_requete_insert.cht_rev_requete );
            if(matrice_insert.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer});
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
                if(champ_dans_la_base.nom_du_champ === 'chp_nom_genre'){
                    /* debugger */
                }
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
            let objet_requete_select=__gi1.__liste_des_sql[ref_select];
            let matrice_select=__gi1.__rev1.rev_tm( objet_requete_select.cht_rev_requete );
            if(matrice_select.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer});
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
            let objet_requete_delete=__gi1.__liste_des_sql[ref_delete];
            let matrice_delete=__gi1.__rev1.rev_tm( objet_requete_delete.cht_rev_requete );
            if(matrice_delete.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer});
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
        if(ref_update !== ''){
            let objet_requete_update=__gi1.__liste_des_sql[ref_update];
            let matrice_update=__gi1.__rev1.rev_tm( objet_requete_update.cht_rev_requete );
            if(matrice_update.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer});
            }
            let matu=matrice_update.__xva;
            for( let i=1 ; i < matu.length ; i=matu[i][12] ){
                if(matu[i][1] === 'modifier' && matu[i][2] === 'f'){
                    for( let j=i + 1 ; j < matu.length ; j=matu[j][12] ){
                        if(matu[j][1] === 'valeurs' && matu[j][2] === 'f'){
                            for( let k=j + 1 ; k < matu.length ; k=matu[k][12] ){
                                if(matu[k][1] === 'affecte' && matu[k][2] === 'f'){
                                    for( let l=k + 1 ; l < matu.length ; l=matu[l][12] ){
                                        if(matu[l][1] === 'champ' && matu[l][2] === 'f' && matu[l][8] === 1 && matu[l + 1][2] === 'c'){
                                            let nom_du_champ=matu[l + 1][1];
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
                                                    "nom_champ_session" : nom_champ_session
                                                } );
                                        }
                                    }
                                }
                            }
                        }else if(matu[j][1] === 'conditions' && matu[j][2] === 'f'){
                            for( let k=j + 1 ; k < matu.length ; k++ ){
                                if(matu[k][1] === 'champ' && matu[k][2] === 'f' && matu[k][8] === 1 && matu[k + 1][2] === 'c'){
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
                                }
                            }
                        }
                    }
                }
            }
        }
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
                for(j in this.#obj_bdd[el.nom_de_la_table]['champs']){
                    if(this.#obj_bdd[el.nom_de_la_table]['champs'][j].meta.est_libelle_lien === '1'){
                        libelle_lien.push( j );
                    }
                }
                les_jointures[i].libelles_lien=libelle_lien;
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
        if(ref_liste_ecran !== ''){
            let objet_requete_liste_ecran=__gi1.__liste_des_sql[ref_liste_ecran];
            let matrice_liste_ecran=__gi1.__rev1.rev_tm( objet_requete_liste_ecran.cht_rev_requete );
            if(matrice_liste_ecran.__xst !== __xsu){
                debugger;
                return({"__xst" : __xer});
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
                                                            }
                                                        }else{
                                                            nom_de_la_table=matle[n][1];
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
                                        }else{
                                            /* AFR matle[matle[k][7]][1] */
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
                                            console.error( '%c \nattention AFR\n' , 'background:red;color:yellow;' );
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
                /* hugues */
                if(liste_des_champs_condition_liste_ecran[i].préfixe_du_champ === 'T0'){
                    let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_liste_ecran[i].nom_du_champ];
                    liste_des_champs_condition_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                }else{
                    let nt=liste_de_tables_liste_ecran[liste_des_champs_condition_liste_ecran[i].préfixe_du_champ].nom_de_la_table;
                    let aa=this.#obj_bdd[nt];
                    let champ_dans_la_base=aa['champs'][liste_des_champs_condition_liste_ecran[i].nom_du_champ];
                    liste_des_champs_condition_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
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
                    let champ_dans_la_base=aa['champs'][liste_des_champs_liste_ecran[i].nom_du_champ];
                    liste_des_champs_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                }
            }
        }
        
        let alias_a_ignorer=[];
        for(let i in liste_des_champs_condition_liste_ecran){
            liste_des_champs_condition_liste_ecran[i]['dans_filtre']=false;
            let el=liste_des_champs_condition_liste_ecran[i];
            if(el.champ_dans_la_base.hasOwnProperty( 'table_mere' ) && el.champ_dans_la_base.table_mere !== ''){
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
        
        
        src_serveur_js2+='/* erreur */\r\n';
        src_serveur_js2+='const __xer=0;\r\n';
        src_serveur_js2+='/* succès */\r\n';
        src_serveur_js2+='const __xsu=1;\r\n';
        src_serveur_js2+='/* alarme */\r\n';
        src_serveur_js2+='const __xal=2;\r\n';
        src_serveur_js2+='/* information */\r\n';
        src_serveur_js2+='const __xif=3;\r\n';
        src_serveur_js2+='/* déverminage */\r\n';
        src_serveur_js2+='const __xdv=4;\r\n';
        src_serveur_js2+='/*\r\n';
        src_serveur_js2+='  =====================================================================================================================\r\n';
        src_serveur_js2+='*/\r\n';
        src_serveur_js2+='class ' + this.#nom_de_la_classe_générée2 + '{\r\n';
        src_serveur_js2+='\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='\r\n';
        
        
        src_hph+='<?php\n';
        src_hph+='class ' + this.#nom_de_la_classe_générée1 + '{\n';
        src_hph+='    private $sql0=null;\r\n';
        src_hph+='    private $moi=\'' + this.#nom_de_la_classe_générée1 + '\';\r\n';
        src_hph+='    private $fonction_liste=\'liste1\';\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
        src_hph+='\r\n';
        src_hph+='        if(!isset($_SESSION[_CA_]) || $_SESSION[_CA_][\'chi_id_utilisateur\'] === 0){\r\n';
        src_hph+='\r\n';
        src_hph+='            echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export(__LINE__,true) . \'</pre>\' ;\r\n';
        src_hph+='            exit(0);\r\n';
        src_hph+='\r\n';
        src_hph+='        }\r\n';
        src_hph+='\r\n';
        src_hph+='        require_once(__RACINE_PGMS__ . \'c__sql0.php\');\r\n';
        src_hph+='        $this->sql0=new c__sql0( $donnees_retournees , $mat , $donnees_recues );\r\n';
        src_hph+='        $donnees_retournees[__xst]=__xsu;\r\n';
        src_hph+='    }\r\n';
        src_hph+='\r\n';
        src_hph+='\r\n';
        src_hph+='\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){\r\n';
        src_hph+='        /* $donnees_retournees[__xsi][__xdv][]=\'AFR ajouter ou pas des "actions_apres_modifier" [\' . __LINE__ . \']\'; */\r\n';
        src_hph+='        /* return(array(__xst=>__xer)); */\r\n';
        src_hph+='        return(array(__xst=>__xsu));\r\n';
        src_hph+='    }\r\n';
        /*
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async actions_et_tests_apres_page_modifications(mat , d , donnees_recues , donnees_retournees , options_generales , __xva , __db1){\r\n';
        src_serveur_js2+='        /*#\r\n';
        src_serveur_js2+='          let obj=await this.faire_un_traitement( __xva[\'T0.'+champ_primaire+'\'] ,  donnees_retournees , options_generales , __db1 );\r\n';
        src_serveur_js2+='          if(obj[\'__xst\'] === __xsu){\r\n';
        src_serveur_js2+='              return({"__xst" : __xsu});\r\n';
        src_serveur_js2+='          }else{\r\n';
        src_serveur_js2+='              return({"__xst" : __xer});\r\n';
        src_serveur_js2+='          }\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
        src_serveur_js2+='\r\n';
        src_serveur_js2+='    }\r\n';
        src_serveur_js2+='\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async tests_et_actions_apres_modifier(mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva , __db1){\r\n';
        src_serveur_js2+='        /*\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xsi\'][\'__xer\'].push( \'AFR [\' + this.__gi1.nl2() + \']\' );\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xst\']=__xer;\r\n';
        src_serveur_js2+='          return({"__xst" : __xer});\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
        src_serveur_js2+='        return{__xst:__xsu};\r\n';
        src_serveur_js2+='    }\r\n';
        /*
        */
        src_hph+='\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){\r\n';
        src_hph+='        /* $donnees_retournees[__xsi][__xdv][]=\'AFR ajouter ou pas des "actions_et_tests_avant_modifier" [\' . __LINE__ . \']\'; */\r\n';
        src_hph+='        /* return(array(__xst=>__xer)); */\r\n';
        src_hph+='        return(array(__xst=>__xsu));\r\n';
        src_hph+='    }\r\n';
        src_hph+='\r\n';
        /*
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva , __db1 ){\r\n';
        src_serveur_js2+='        /*\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xsi\'][\'__xer\'].push( \'AFR [\' + this.__gi1.nl2() + \']\' );\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xst\']=__xer;\r\n';
        src_serveur_js2+='          return({"__xst" : __xer});\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
        src_serveur_js2+='        return{__xst:__xsu};\r\n';
        src_serveur_js2+='    }\r\n';
        /*
        */
        src_hph+='\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function test_avant_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){\r\n';
        src_hph+='\r\n';
        src_hph+='        /*\r\n';
        src_hph+='          =====================================================================================================\r\n';
        src_hph+='          par exemple, avant le suppression d\'un dossier, on vérifie qu\'il est vide\r\n';
        src_hph+='        */\r\n';
        src_hph+='        /* $donnees_retournees[__xsi][__xdv][]=\'AFR ajouter ou pas des "test_avant_supprimer" [\' . __LINE__ . \']\'; */\r\n';
        src_hph+='        /* return(array(__xst=>__xer)); */\r\n';
        src_hph+='        return(array(__xst=>__xsu));\r\n';
        src_hph+='    }\r\n';
        src_hph+='\r\n';
        /*
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva , __db1 ){\r\n';
        src_serveur_js2+='        /*\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xsi\'][\'__xer\'].push( \'AFR [\' + this.__gi1.nl2() + \']\' );\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xst\']=__xer;\r\n';
        src_serveur_js2+='          return({"__xst" : __xer});\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
        src_serveur_js2+='        return{__xst:__xsu};\r\n';
        src_serveur_js2+='    }\r\n';
        /*
        */
        src_hph+='\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){\r\n';
        src_hph+='        /* $donnees_retournees[__xsi][__xdv][]=\'AFR ajouter ou pas des "actions_apres_supprimer" [\' . __LINE__ . \']\'; */\r\n';
        src_hph+='        /* return(array(__xst=>__xer)); */\r\n';
        src_hph+='        return(array(__xst=>__xsu));\r\n';
        src_hph+='    }\r\n';
        src_hph+='\r\n';
        /*
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva , __db1 ){\r\n';
        src_serveur_js2+='        /*\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xsi\'][\'__xer\'].push( \'AFR [\' + this.__gi1.nl2() + \']\' );\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xst\']=__xer;\r\n';
        src_serveur_js2+='          return({"__xst" : __xer});\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
        src_serveur_js2+='        return{__xst:__xsu};\r\n';
        src_serveur_js2+='    }\r\n';
        /*
        */
        src_hph+='\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){\r\n';
        src_hph+='\r\n';
        src_hph+='        /* $donnees_retournees[__xsi][__xdv][]=\'AFR ajouter ou pas des "tests_avant_creer" [\' . __LINE__ . \']\'; */\r\n';
        src_hph+='        /* return array(__xst => __xer); */\r\n';
        src_hph+='        return array(__xst => __xsu);\r\n';
        src_hph+='    }\r\n';
        src_hph+='\r\n';
        /*
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){\r\n';
        src_serveur_js2+='        /*\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xsi\'][\'__xer\'].push( \'AFR [\' + this.__gi1.nl2() + \']\' );\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xst\']=__xer;\r\n';
        src_serveur_js2+='          return({"__xst" : __xer});\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
        src_serveur_js2+='        return{__xst:__xsu};\r\n';
        src_serveur_js2+='    }\r\n';
        /*
        */
        src_hph+='\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id,&$form){\r\n';
        src_hph+='        /*\r\n';
        src_hph+='          =====================================================================================================\r\n';
        src_hph+='        */\r\n';
        src_hph+='        /* afr avec $nouvel_id */\r\n';
        src_hph+='        /*\r\n';
        src_hph+='          =====================================================================================================\r\n';
        src_hph+='        */\r\n';
        src_hph+='    }\r\n';
        /*
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){\r\n';
        src_serveur_js2+='        /*\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xsi\'][\'__xer\'].push( \'AFR [\' + this.__gi1.nl2() + \']\' );\r\n';
        src_serveur_js2+='          donnees_retournees[\'__xst\']=__xer;\r\n';
        src_serveur_js2+='          return({"__xst" : __xer});\r\n';
        src_serveur_js2+='        */\r\n';
        src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
        src_serveur_js2+='        return{__xst:__xsu};\r\n';
        src_serveur_js2+='    }\r\n';
        /*
        */
        src_client2+='class ' + this.#nom_de_la_classe_générée2 + '{\n';
        src_client2+='    /*\n';
        src_client2+='      ref_select=' + ref_select + '\n';
        src_client2+='      ref_insert=' + ref_insert + '\n';
        src_client2+='      ref_delete=' + ref_delete + '\n';
        src_client2+='      ref_update=' + ref_update + '\n';
        src_client2+='      ref_liste_ecran=' + ref_liste_ecran + '\n';
        src_client2+='    */\n';
        src_client2+='    moi=\'' + this.#nom_de_la_classe_générée2 + '\';\r\n';
        src_client2+='    DUN_DUNE_ELEMENT_GERE = \'' + def_table.meta.distinction_pour_isad + '\';\r\n';
        src_client2+='    LISTE_DES_ELEMENTS_GERES = \'' + def_table.meta.distinction_pour_liste + '\';\r\n';
        src_client2+='    __gi1=null;\r\n';
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
                           || this.#obj_table.champs[el.nom_du_champ].champ_est_en_session1 === true
                               && !this.#obj_table.champs.hasOwnProperty( el.nom_du_champ ))
                ){
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    if(ne_pas_prendre_les_valeurs_en_session === true){
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
                        let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                        nom+=' ' + this.#obj_bdd[nom_de_la_table_mere].meta.permet_la_gestion_de;
                        liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                        liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                        src_client2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }
                }
            }catch(e){
                debugger;
            }
        }
        src_client2+='\r\n';
        src_client2+='        },\r\n';
        src_client2+='        \'sous_liste1\':{\r\n';
        src_client2+='          __num_page:{type_filtre:\'entier\',défaut:0,masqué:true,nom:\'__num_page\',taille:8},\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            let el=liste_des_champs_condition_liste_ecran[i];
            let taille=champ_primaire === el.nom_du_champ && el.préfixe_du_champ === 'T0' ? ( 12 ) : ( 8 );
            if(el.préfixe_du_champ === 'T0'
                   && (this.#obj_table.champs[el.nom_du_champ].champ_pere_est_en_session1 === true
                       || this.#obj_table.champs[el.nom_du_champ].champ_est_en_session1 === true)
            ){
                let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                if(ne_pas_prendre_les_valeurs_en_session === true){
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
                    let nom_de_la_table_mere=liste_de_tables_liste_ecran[i.substr( 0 , i.indexOf( '_' ) )].nom_de_la_table;
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    nom+=' ' + this.#obj_bdd[nom_de_la_table_mere].meta.permet_la_gestion_de;
                    liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                    liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                    src_client2+='          ' + i + ' : {type_filtre:\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                }
            }
        }
        src_client2+='        }\r\n';
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
        src_client2+='    f1(mat,d,le_message_du_serveur=null){\r\n';
        src_client2+='        switch(mat[d][1]){\r\n';
        src_client2+='         case \'xxxxx\':\r\n';
        src_client2+='             break;\r\n';
        src_client2+='         default:\r\n';
        src_client2+='            this.__gi1.ajoute_message({ __xst : __xdv, __xme : \'la fonction "\' + mat[d][1] + \'" n\\\'est pas traitée ou bien comporte une erreur\'  });\r\n';
        src_client2+='            return({"__xst" : __xer});\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    constructor( mat , d , __gi1 ){\r\n';
        src_client2+='        this.__gi1=__gi1;\r\n';
        src_client2+='        for(let i=d+1;i<mat.length;i=mat[i][12]){\r\n';
        src_client2+='            if(mat[i][1]===\'nom_champ_dans_parent1\' && mat[i][2]===\'f\' && mat[i][8]===1 && mat[i+1][2]===\'c\'){\r\n';
        src_client2+='                this.nom_champ_dans_parent1=mat[i+1][1];\r\n';
        src_client2+='            }else if(mat[i][1]===\'nom_libelle_dans_parent1\' && mat[i][2]===\'f\' && mat[i][8]===1 && mat[i+1][2]===\'c\'){\r\n';
        src_client2+='                this.nom_libelle_dans_parent1=mat[i+1][1];\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        for(let i in this.tableau_des_filtres){\r\n';
        src_client2+='            this.filtres[i]={};\r\n';
        src_client2+='            for(let j in this.tableau_des_filtres[i]){\r\n';
        src_client2+='              this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        if(this.fonction_liste===\'liste1\'){\r\n';
        src_client2+='            let aa=sessionStorage.getItem( this.__gi1.cle_lst0 + \'_\' + this.moi+\'_\'+this.fonction_liste );\r\n';
        src_client2+='            if(aa !== null){\r\n';
        src_client2+='                let jso=JSON.parse( aa );\r\n';
        src_client2+='\r\n';
        src_client2+='                for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
        src_client2+='                  this.filtres[this.fonction_liste][i]=jso[i]??this.tableau_des_filtres[this.fonction_liste][i].défaut;;\r\n';
        src_client2+='                }\r\n';
        src_client2+='            }\r\n';
        src_client2+='\r\n';
        if(ref_insert === ''){
            src_client2+='            /*\r\n';
        }
        src_client2+='            this.vv_ecran_liste_boutons_avant+=';
        src_client2+='\'<div class="rev_bouton yy__xif" data-rev_click="m1(n1(\'+this.moi+\'),f1(page_creer1()))" title="création\'+this.DUN_DUNE_ELEMENT_GERE +\'" >\' + this.__gi1.les_svg.nouveau_document+\'</div>\';\r\n';
        if(ref_insert === ''){
            src_client2+='            */\r\n';
        }
        src_client2+='        }\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    modifier1(mat , d , le_message_du_serveur=null){\r\n';
        src_client2+='        return({__xst:__xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
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
            if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                       && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null
                   || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
            ){
            }else{
                liste_des_conversions_modification.push( obj_champ );
                if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                    src_client2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                    src_client2+='            this.__gi1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné\'  });\r\n';
                    src_client2+='            this.__gi1.affiche_les_messages();\r\n';
                    src_client2+='            this.__gi1.retablir_les_boutons_masques();\r\n';
                    src_client2+='            try{\r\n';
                    src_client2+='                document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                    src_client2+='            }catch{}\r\n';
                    src_client2+='            return({__xst:__xsu})\r\n';
                    src_client2+='        }\r\n';
                }
                if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                    src_client2+='        if(fo1[\'' + nom_du_champ + '\']!==null && fo1[\'' + nom_du_champ + '\']!==\'\'){\r\n';
                    src_client2+='            let obj1=this.__gi1.__rev1.rev_tm(fo1[\'' + nom_du_champ + '\']);\r\n';
                    src_client2+='            if(obj1.__xst!==__xsu){\r\n';
                    src_client2+='                this.__gi1.ajoute_message({ __xst : __xer, __xme : \'le contenu de "' + obj_champ.meta.abrege_du_champ + '" n\\\'est pas dans un format rev valide\'  });\r\n';
                    src_client2+='                this.__gi1.affiche_les_messages();\r\n';
                    src_client2+='                this.__gi1.retablir_les_boutons_masques();\r\n';
                    src_client2+='                try{\r\n';
                    src_client2+='                    document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                    src_client2+='                }catch{}\r\n';
                    src_client2+='                return({__xst:__xsu})\r\n';
                    src_client2+='            }\r\n';
                    src_client2+='        }\r\n';
                    src_client2+='\r\n';
                }
                if(obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                    var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                    if(obj1.__xst !== __xsu){
                        return({"__xst" : __xer});
                    }
                    let mat1=obj1.__xva;
                    let l01=mat1.length;
                    for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][2] === 'f'){
                            src_client2+='\n';
                            src_client2+='        var __test=this.__gi1.__fnt1.' + mat1[j][1] + '(';
                            /* 0,99,fo1[\'chp_texte_tache\'],\'priorite\'];\r\n'; */
                            if(mat1[j][8] === 0){
                            }else{
                                for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                    if(mat1[k][2] === 'c'){
                                        if(mat1[k][4] === 0){
                                            src_client2+=mat1[k][1] + ',';
                                        }else{
                                            /* afr */
                                            debugger;
                                            return({"__xst" : __xer});
                                        }
                                    }else{
                                        return({"__xst" : __xer});
                                    }
                                }
                            }
                            src_client2+='fo1[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.nom_bref_du_champ + '\');\r\n';
                            src_client2+='        if(__test.__xst!==__xsu){\r\n';
                            src_client2+='            this.__gi1.affiche_les_messages();\r\n';
                            src_client2+='            this.__gi1.retablir_les_boutons_masques();\r\n';
                            src_client2+='            try{\r\n';
                            src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                            src_client2+='            }catch{}\r\n';
                            src_client2+='            return({__xst:__xsu})\r\n';
                            src_client2+='        }\r\n';
                            src_client2+='\r\n';
                        }else{
                            return({"__xst" : __xer});
                        }
                    }
                }
            }
        }
        if(liste_des_conversions_modification.length > 0){
            src_client2+='        /* conversion des données numériques début */\r\n';
            src_client2+='        fo1[\'' + champ_primaire + '\']=fo1[\'' + champ_primaire + '\']===\'\'?null:parseInt(fo1[\'' + champ_primaire + '\'],10);\r\n';
            for( let i=0 ; i < liste_des_conversions_modification.length ; i++ ){
                if(liste_des_conversions_modification[i].espece_du_champ === 'INTEGER'){
                    src_client2+='        fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                    src_client2+='fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']===\'\'?null:parseInt(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'],10);\r\n';
                }else if(liste_des_conversions_modification[i].espece_du_champ === 'FLOAT'){
                    src_client2+='        fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                    src_client2+='fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']===\'\'?null:parseFloat(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']);\r\n';
                }
            }
            src_client2+='        /* conversion des données numériques fin */\r\n';
        }
        src_client2+='        /*\r\n';
        src_client2+='          tout a été vérifié\r\n';
        src_client2+='        */\r\n';
        src_client2+='        let __fo1={};\r\n';
        src_client2+='        __fo1[co1]=fo1;\r\n';
        src_client2+='\r\n';
        src_client2+='        this.__gi1.envoyer_un_message_au_worker( {/**/\r\n';
        src_client2+='            "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(modifier1(\'+retour_a_la_liste+\'))))\',\r\n';
        src_client2+='            "__xva" : { "__fo1" : __fo1 , "__co1" : co1 }\r\n';
        src_client2+='\r\n';
        src_client2+='        } );\r\n';
        src_client2+='        return({__xst:__xsu})\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';        
        
        
        
        o2+='class ' + this.#nom_de_la_classe_générée1 + '{\n';
        o2+='    /*\n';
        o2+='      ref_select=' + ref_select + '\n';
        o2+='      ref_insert=' + ref_insert + '\n';
        o2+='      ref_delete=' + ref_delete + '\n';
        o2+='      ref_update=' + ref_update + '\n';
        o2+='      ref_liste_ecran=' + ref_liste_ecran + '\n';
        o2+='    */\n';
        o2+='    moi=\'' + this.#nom_de_la_classe_générée1 + '\';\r\n';
        o2+='    DUN_DUNE_ELEMENT_GERE = \'' + def_table.meta.distinction_pour_isad + '\';\r\n';
        o2+='    LISTE_DES_ELEMENTS_GERES = \'' + def_table.meta.distinction_pour_liste + '\';\r\n';
        o2+='    /*\r\n';
        o2+='      filtres liste\r\n';
        o2+='    */\r\n';
        o2+='\r\n';
        o2+='    tableau_des_filtres={\r\n';
        o2+='        \'liste1\':{\r\n';
        o2+='          $__num_page:{type_filtre:\'entier\',défaut:0,masqué:true,nom:\'$__num_page\',taille:8},\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            let el=liste_des_champs_condition_liste_ecran[i];
            let taille=champ_primaire === el.nom_du_champ && el.préfixe_du_champ === 'T0' ? ( 12 ) : ( 8 );
            try{
                if(el.préfixe_du_champ === 'T0'
                       && (this.#obj_table.champs[el.nom_du_champ].champ_pere_est_en_session1 === true
                           || this.#obj_table.champs[el.nom_du_champ].champ_est_en_session1 === true
                               && !this.#obj_table.champs.hasOwnProperty( el.nom_du_champ ))
                ){
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    if(ne_pas_prendre_les_valeurs_en_session === true){
                        o2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }else{
                        o2+='/*            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},*/\r\n';
                    }
                }else{
                    if(el.préfixe_du_champ === 'T0'){
                        let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                        liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                        liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                        o2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }else{
                        let nom_de_la_table_mere=liste_de_tables_liste_ecran[i.substr( 0 , i.indexOf( '_' ) )].nom_de_la_table;
                        let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                        nom+=' ' + this.#obj_bdd[nom_de_la_table_mere].meta.permet_la_gestion_de;
                        liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                        liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                        o2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                    }
                }
            }catch(e){
                debugger;
            }
        }
        o2+='\r\n';
        o2+='        },\r\n';
        o2+='        \'sous_liste1\':{\r\n';
        o2+='          $__num_page:{type_filtre:\'entier\',défaut:0,masqué:true,nom:\'$__num_page\',taille:8},\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            let el=liste_des_champs_condition_liste_ecran[i];
            let taille=champ_primaire === el.nom_du_champ && el.préfixe_du_champ === 'T0' ? ( 12 ) : ( 8 );
            if(el.préfixe_du_champ === 'T0'
                   && (this.#obj_table.champs[el.nom_du_champ].champ_pere_est_en_session1 === true
                       || this.#obj_table.champs[el.nom_du_champ].champ_est_en_session1 === true)
            ){
                let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                if(ne_pas_prendre_les_valeurs_en_session === true){
                    o2+='            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                }else{
                    o2+='/*            "' + i + '" : {"type_filtre" :\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '}, */\r\n';
                }
                /* debugger */
            }else{
                if(el.préfixe_du_champ === 'T0'){
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                    liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                    o2+='          ' + i + ' : {type_filtre:\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                }else{
                    let nom_de_la_table_mere=liste_de_tables_liste_ecran[i.substr( 0 , i.indexOf( '_' ) )].nom_de_la_table;
                    let nom=el.champ_dans_la_base.meta.nom_bref_du_champ;
                    nom+=' ' + this.#obj_bdd[nom_de_la_table_mere].meta.permet_la_gestion_de;
                    liste_des_champs_condition_liste_ecran[i]['dans_filtre']=true;
                    liste_des_champs_condition_liste_ecran[i]['nom_filtre']=nom;
                    o2+='          ' + i + ' : {type_filtre:\'' + el.champ_dans_la_base.espece_du_champ + '\',défaut:\'\',masqué:false,nom:\'' + nom + el.libelle_selection + '\',taille:' + taille + '},\r\n';
                }
            }
        }
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='    }\r\n';
        o2+='    fonction_liste=\'liste1\';\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='    $filtres={};\r\n';
        o2+='    vv_ecran_liste_boutons_avant=\'\';\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    f1(mat,d,le_message_du_serveur=null){\r\n';
        o2+='        switch(mat[d][1]){\r\n';
        o2+='         case \'xxxxx\':\r\n';
        o2+='             break;\r\n';
        o2+='         default:\r\n';
        o2+='            __gi1.ajoute_message({ __xst : __xdv, __xme : \'la fonction "\' + mat[d][1] + \'" n\\\'est pas traitée ou bien comporte une erreur\'  });\r\n';
        o2+='            return({"__xst" : __xer});\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    constructor( mat , d ){\r\n';
        o2+='\r\n';
        o2+='        for(let i=d+1;i<mat.length;i=mat[i][12]){\r\n';
        o2+='            if(mat[i][1]===\'$nom_champ_dans_parent1\' && mat[i][2]===\'f\' && mat[i][8]===1 && mat[i+1][2]===\'c\'){\r\n';
        o2+='                this.$nom_champ_dans_parent1=mat[i+1][1];\r\n';
        o2+='            }else if(mat[i][1]===\'$nom_libelle_dans_parent1\' && mat[i][2]===\'f\' && mat[i][8]===1 && mat[i+1][2]===\'c\'){\r\n';
        o2+='                this.$nom_libelle_dans_parent1=mat[i+1][1];\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        for(let i in this.tableau_des_filtres){\r\n';
        o2+='            this.$filtres[i]={};\r\n';
        o2+='            for(let j in this.tableau_des_filtres[i]){\r\n';
        o2+='              this.$filtres[i][j]=this.tableau_des_filtres[i][j].défaut;\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        if(this.fonction_liste===\'liste1\'){\r\n';
        o2+='            let aa=sessionStorage.getItem( __gi1.cle_lst0 + \'_\' + this.moi+\'_\'+this.fonction_liste );\r\n';
        o2+='            if(aa !== null){\r\n';
        o2+='                let jso=JSON.parse( aa );\r\n';
        o2+='\r\n';
        o2+='                for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='                  this.$filtres[this.fonction_liste][i]=jso[i]??this.tableau_des_filtres[this.fonction_liste][i].défaut;;\r\n';
        o2+='                }\r\n';
        o2+='            }\r\n';
        o2+='\r\n';
        if(ref_insert === ''){
            o2+='            /*\r\n';
        }
        o2+='            this.vv_ecran_liste_boutons_avant+=';
        o2+='\'<div class="rev_bouton yy__xif" data-rev_click="m1(n1(\'+this.moi+\'),f1(page_creer1()))" title="création\'+this.DUN_DUNE_ELEMENT_GERE +\'" >\'+__gi1.les_svg.nouveau_document+\'</div>\';\r\n';
        if(ref_insert === ''){
            o2+='            */\r\n';
        }
        o2+='        }\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    modifier1(mat , d , le_message_du_serveur=null){\r\n';
        o2+='        return({__xst:__xsu});\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    verifier_modifier1(mat , d , données){\r\n';
        o2+='        let retour_a_la_liste=\'\';\r\n';
        o2+='        let l01=mat.length;\r\n';
        o2+='        for(let i=d+1;i<l01;i=mat[i][12]){\r\n';
        o2+='            if(mat[i][1]===\'retour_a_la_liste\' && mat[i][2]===\'f\' ){\r\n';
        o2+='                retour_a_la_liste=\'retour_a_la_liste()\';\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        let co1=données.__co1;\r\n';
        o2+='        let fo1=données.__fo1[co1];\r\n';
        var liste_des_conversions_modification=[];
        for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            /* liste_des_champs_insert */
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                       && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null
                   || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
            ){
            }else{
                liste_des_conversions_modification.push( obj_champ );
                if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                    o2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                    o2+='            __gi1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné\'  });\r\n';
                    o2+='            __gi1.affiche_les_messages();\r\n';
                    o2+='            __gi1.retablir_les_boutons_masques();\r\n';
                    o2+='            try{\r\n';
                    o2+='                document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                    o2+='            }catch{}\r\n';
                    o2+='            return({__xst:__xsu})\r\n';
                    o2+='        }\r\n';
                }
                if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                    o2+='        if(fo1[\'' + nom_du_champ + '\']!==null && fo1[\'' + nom_du_champ + '\']!==\'\'){\r\n';
                    o2+='            let obj1=__gi1.__rev1.rev_tm(fo1[\'' + nom_du_champ + '\']);\r\n';
                    o2+='            if(obj1.__xst!==__xsu){\r\n';
                    o2+='                __gi1.ajoute_message({ __xst : __xer, __xme : \'le contenu de "' + obj_champ.meta.abrege_du_champ + '" n\\\'est pas dans un format rev valide\'  });\r\n';
                    o2+='                __gi1.affiche_les_messages();\r\n';
                    o2+='                __gi1.retablir_les_boutons_masques();\r\n';
                    o2+='                try{\r\n';
                    o2+='                    document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                    o2+='                }catch{}\r\n';
                    o2+='                return({__xst:__xsu})\r\n';
                    o2+='            }\r\n';
                    o2+='        }\r\n';
                    o2+='\r\n';
                }
                if(obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                    var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                    if(obj1.__xst !== __xsu){
                        return({"__xst" : __xer});
                    }
                    let mat1=obj1.__xva;
                    let l01=mat1.length;
                    for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][2] === 'f'){
                            o2+='\n';
                            o2+='        var __test=__gi1.__fnt1.' + mat1[j][1] + '(';
                            /* 0,99,fo1[\'chp_texte_tache\'],\'priorite\'];\r\n'; */
                            if(mat1[j][8] === 0){
                            }else{
                                for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                    if(mat1[k][2] === 'c'){
                                        if(mat1[k][4] === 0){
                                            o2+=mat1[k][1] + ',';
                                        }else{
                                            /* afr */
                                            debugger;
                                            return({"__xst" : __xer});
                                        }
                                    }else{
                                        return({"__xst" : __xer});
                                    }
                                }
                            }
                            o2+='fo1[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.nom_bref_du_champ + '\');\r\n';
                            o2+='        if(__test.__xst!==__xsu){\r\n';
                            o2+='            __gi1.affiche_les_messages();\r\n';
                            o2+='            __gi1.retablir_les_boutons_masques();\r\n';
                            o2+='            try{\r\n';
                            o2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                            o2+='            }catch{}\r\n';
                            o2+='            return({__xst:__xsu})\r\n';
                            o2+='        }\r\n';
                            o2+='\r\n';
                        }else{
                            return({"__xst" : __xer});
                        }
                    }
                }
            }
        }
        if(liste_des_conversions_modification.length > 0){
            o2+='        /* conversion des données numériques début */\r\n';
            o2+='        fo1[\'' + champ_primaire + '\']=fo1[\'' + champ_primaire + '\']===\'\'?null:parseInt(fo1[\'' + champ_primaire + '\'],10);\r\n';
            for( let i=0 ; i < liste_des_conversions_modification.length ; i++ ){
                if(liste_des_conversions_modification[i].espece_du_champ === 'INTEGER'){
                    o2+='        fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                    o2+='fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']===\'\'?null:parseInt(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'],10);\r\n';
                }else if(liste_des_conversions_modification[i].espece_du_champ === 'FLOAT'){
                    o2+='        fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                    o2+='fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']===\'\'?null:parseFloat(fo1[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']);\r\n';
                }
            }
            o2+='        /* conversion des données numériques fin */\r\n';
        }
        o2+='        /*\r\n';
        o2+='          tout a été vérifié\r\n';
        o2+='        */\r\n';
        o2+='        let __fo1={};\r\n';
        o2+='        __fo1[co1]=fo1;\r\n';
        o2+='\r\n';
        o2+='        __gi1.__worker.postMessage( {\r\n';
        o2+='            "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(modifier1(\'+retour_a_la_liste+\'))))\',\r\n';
        o2+='            "__xva" : {\r\n';
        o2+='              "__parametres" : __gi1.stockage_local[\'parametres\']  ,\r\n';
        o2+='              "__fo1" : __fo1 ,\r\n';
        o2+='              "__co1" : co1 ,\r\n';
        o2+='            }\r\n';
        o2+='\r\n';
        o2+='        } );\r\n';
        o2+='        return({__xst:__xsu})\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        
        if(ref_update !== '' && ref_select!==''){
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
            src_serveur_js2+='        let nom_formulaire=donnees_recues[\'__xva\'][\'__co1\'];\r\n';
            src_serveur_js2+='        let form=donnees_recues[\'__xva\'][\'__fo1\'][nom_formulaire];\r\n';
            src_serveur_js2+='         /**/\r\n';
            if(liste_des_conversions_modification.length > 0){
                src_serveur_js2+='        /* conversion des données numériques début */\r\n';
                src_serveur_js2+='        form[\'' + champ_primaire + '\']=form[\'' + champ_primaire + '\']===null?null:parseInt(form[\'' + champ_primaire + '\'],10);\r\n';
                for( let i=0 ; i < liste_des_conversions_modification.length ; i++ ){
                    if(liste_des_conversions_modification[i].espece_du_champ === 'INTEGER'){
                        src_serveur_js2+='        form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'] === null ? null:parseInt(form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'] , 10 );\r\n';
                    }else if(liste_des_conversions_modification[i].espece_du_champ === 'FLOAT'){
                        src_serveur_js2+='        form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'] === null ?null:parseFloat(form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']);\r\n';
                    }
                }
                src_serveur_js2+='        /* conversion des données numériques fin */\r\n';
            }
            
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                           && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null
                ){
                }else{
                    if(obj_champ.genre_objet_du_champ.che_est_session_genre === 1 || obj_champ.champ_session === true){
                    }else{
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                            src_serveur_js2+='        if(form[\'' + nom_du_champ + '\'] === null || form[\'' + nom_du_champ + '\']===\'\'){\n';
                            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push(\'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné [\' + this.__gi1.nl2() + \']\');\r\n';
                            src_serveur_js2+='            return{__xst:__xer};\r\n';
                            src_serveur_js2+='        }\n';
                        }
                    }
                    if(obj_champ.genre_objet_du_champ.che_est_session_genre === 1){
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                            var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                            if(obj1.__xst !== __xsu){
                                return({"__xst" : __xer});
                            }
                            let mat1=obj1.__xva;
                            let l01=mat1.length;
                            for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                                if(mat1[j][2] === 'f'){
                                    src_serveur_js2+='\n';
                                    src_serveur_js2+='        let __test_'+i+'_'+j+'=this.__gi1.__fnt1.' + mat1[j][1] + '(';
                                    if(mat1[j][8] === 0){
                                    }else{
                                        for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                            if(mat1[k][2] === 'c'){
                                                if(mat1[k][4] === 0){
                                                    src_serveur_js2+=mat1[k][1] + ',';
                                                }else{
                                                    /* afr */
                                                    debugger;
                                                    return({"__xst" : __xer});
                                                }
                                            }else{
                                                return({"__xst" : __xer});
                                            }
                                        }
                                    }
                                    src_serveur_js2+='form[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.abrege_du_champ + '\');\r\n';
                                    src_serveur_js2+='        if( __test_'+i+'_'+j+'[\'__xst\'] !== __xsu ){\n';
                                    src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push(\'erreur sur le contenu de "' + obj_champ.meta.abrege_du_champ + '" [\' + this.__gi1.nl2() + \']\');\r\n';
                                    src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
                                    src_serveur_js2+='            return{__xst:__xer};\r\n';
                                    src_serveur_js2+='        }\n\n';
                                }else{
                                    return({"__xst" : __xer});
                                }
                            }
                        }
                    }
                }
            }            
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let retour_a_la_liste=false;\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'retour_a_la_liste\' && mat[i][2] === \'f\'){\r\n';
            src_serveur_js2+='                retour_a_la_liste=true;\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        /* sélection du champ à modifier */\r\n';
            src_serveur_js2+='        let criteres_select_' + ref_select + '={\r\n';
            src_serveur_js2+='            "T0_' + champ_primaire + '" : form[\'' + champ_primaire + '\'],\n';
            
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='            "T0_' + liste_des_champs_condition_select[i].nom_du_champ + '" : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='            "T0_' + liste_des_champs_condition_select[i].nom_du_champ + '" : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let tt' + ref_select + '=await this.__gi1.sql_iii( ' + ref_select + ' , criteres_select_' + ref_select + ' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        if(tt' + ref_select + '[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'enregistrement non trouvé : aucune modification effectuée [\' + this.__gi1.nl2() );\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(tt' + ref_select + '[\'__xst\'] === __xsu && tt' + ref_select + '[\'__xva\'].length === 1){\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees  , options_generales, form , tt' + ref_select + '[\'__xva\'][0] , __db1 );\r\n';
            src_serveur_js2+='            if(__actions_et_tests_avant_modifier[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='                return({"__xst" : __xer});\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            let donnees_sql={\r\n';
            
            for( let i=0 ; i < liste_des_champs_condition_update.length ; i++ ){
                if(champ_primaire === liste_des_champs_condition_update[i].nom_du_champ){
                    src_serveur_js2+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : form[\'' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }else if(liste_des_champs_condition_update[i].champ_session === true){
                    /* nom_en_session1 */
                    src_serveur_js2+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_update[i].nom_champ_session + ',\n';
                }else if(liste_des_champs_condition_update[i].champ_dans_la_base.champ_est_en_session1 === true){
                    /* nom_en_session1 */
                    src_serveur_js2+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_update[i].champ_dans_la_base.nom_en_session1 + ',\n';
                }else if(liste_des_champs_condition_update[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1){
                    src_serveur_js2+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : form[\'' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }else{
                    src_serveur_js2+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' : tt' + ref_select + '[\'__xva\'][0][\'T0.' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }
            }
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.champ_session === true){
                    if(ne_pas_prendre_les_valeurs_en_session === true){
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                            src_serveur_js2+='                    \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\']===\'\'? ( null ) : ( form[\'' + nom_du_champ + '\'] ) ,\n';
                        }else{
                            src_serveur_js2+='                    \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'],\n';
                        }
                    }else{
                        src_serveur_js2+='                    \'n_' + nom_du_champ + '\' => donnees_retournees.' + liste_des_champs_update[i].nom_champ_session + ',\r\n';
                    }
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                ){
                }else{
                    if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                        src_serveur_js2+='                    \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\']===\'\'? ( null ) : ( form[\'' + nom_du_champ + '\'] ) ,\n';
                    }else{
                        src_serveur_js2+='                    \'n_' + nom_du_champ + '\' : form[\'' + nom_du_champ + '\'],\n';
                    }
                }
            }
/*            
            src_serveur_js2+='                "n_chp_nom_dossier" : form[\'chp_nom_dossier\'] ,\r\n';
            src_serveur_js2+='                "n_chx_parent_dossier" : form[\'chx_parent_dossier\'] ,\r\n';
            src_serveur_js2+='                "n_che_contient_genere_dossier" : form[\'che_contient_genere_dossier\'] ,\r\n';
            src_serveur_js2+='                "n_che_pour_les_js_dossier" : form[\'che_pour_les_js_dossier\']\r\n';
*/            
            src_serveur_js2+='            };\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            await __db1.exec(\'BEGIN TRANSACTION;\');\r\n';
            src_serveur_js2+='            let tt' + ref_update + '=await this.__gi1.sql_iii( ' + ref_update + ' , donnees_sql , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            if(tt' + ref_update + '[\'__xst\'] !== __xsu ){\r\n';
            src_serveur_js2+='                if(tt' + ref_update + '[\'__xme\']!==\'\'){\r\n';
            src_serveur_js2+='                    donnees_retournees[\'__xsi\'][\'__xer\'].push( tt' + ref_update + '[\'__xme\']+\' [\' + this.__gi1.nl2() );\r\n';
            src_serveur_js2+='                }else{\r\n';
            src_serveur_js2+='                    donnees_retournees[\'__xsi\'][\'__xer\'].push( \'erreur de modification [\' + this.__gi1.nl2() );\r\n';
            src_serveur_js2+='                }\r\n';
            src_serveur_js2+='                donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='                return({"__xst" : __xer});\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            let __taam=await this.tests_et_actions_apres_modifier(mat , d , donnees_recues , donnees_retournees , options_generales , form , tt' + ref_select + '[\'__xva\'][0] , __db1);\r\n';
            src_serveur_js2+='            if(__taam[\'__xst\'] !== __xsu ){\r\n';
            src_serveur_js2+='                await __db1.exec(\'ROLLBACK;\');\r\n';
            src_serveur_js2+='                donnees_retournees[\'__xsi\'][\'__xer\'].push( \'erreur après modification [\' + this.__gi1.nl2() );\r\n';
            src_serveur_js2+='                donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='                return({"__xst" : __xer});\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='            await __db1.exec(\'COMMIT;\');\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            if(retour_a_la_liste === true){\r\n';
            src_serveur_js2+='                if(form[\'__mat_liste_si_ok\']){\r\n';
            src_serveur_js2+='                    let mat1=JSON.parse( form[\'__mat_liste_si_ok\'] );\r\n';
            src_serveur_js2+='                    let d=1;\r\n';
            src_serveur_js2+='                    await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales  );\r\n';
            src_serveur_js2+='                }\r\n';
            src_serveur_js2+='                return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='            let tt' + ref_select + '_bis=await this.__gi1.sql_iii( ' + ref_select + ' , criteres_select_' + ref_select + ' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xva\'][\'page_modification1\']=tt'+ref_select+'_bis;\r\n';
            src_serveur_js2+='        }else{\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xva\'][\'page_modification1\']=tt'+ref_select+';\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='    }\r\n';
        }
        
        if(ref_update !== '' && ref_select!=='' ){
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
            src_hph+='\r\n';
            src_hph+='        $nom_formulaire=$donnees_recues[__xva][\'__co1\'];\r\n';
            src_hph+='        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];\r\n';
            if(liste_des_conversions_modification.length > 0){
                src_hph+='        /* conversion des données numériques début */\r\n';
                src_hph+='        $form[\'' + champ_primaire + '\']=is_null($form[\'' + champ_primaire + '\'])?null:(int)$form[\'' + champ_primaire + '\'];\r\n';
                for( let i=0 ; i < liste_des_conversions_modification.length ; i++ ){
                    if(liste_des_conversions_modification[i].espece_du_champ === 'INTEGER'){
                        src_hph+='        $form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_hph+='is_null($form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'])?null:(int)$form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'];\r\n';
                    }else if(liste_des_conversions_modification[i].espece_du_champ === 'FLOAT'){
                        src_hph+='        $form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\']=';
                        src_hph+='is_null($form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'])?null:(float)$form[\'' + liste_des_conversions_modification[i].nom_du_champ + '\'];\r\n';
                    }
                }
                src_hph+='        /* conversion des données numériques fin */\r\n';
            }
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                           && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null
                ){
                }else{
                    if(obj_champ.genre_objet_du_champ.che_est_session_genre === 1 || obj_champ.champ_session === true){
                    }else{
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                            src_hph+='        if(is_null($form[\'' + nom_du_champ + '\']) || $form[\'' + nom_du_champ + '\']===\'\'){\n';
                            src_hph+='            $donnees_retournees[__xsi][__xer][]=\'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné [\' . __LINE__ . \']\';\r\n';
                            src_hph+='            return;\r\n';
                            src_hph+='        }\n';
                        }
                    }
                    if(obj_champ.genre_objet_du_champ.che_est_session_genre === 1){
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                            var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                            if(obj1.__xst !== __xsu){
                                return({"__xst" : __xer});
                            }
                            let mat1=obj1.__xva;
                            let l01=mat1.length;
                            for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                                if(mat1[j][2] === 'f'){
                                    src_hph+='\n';
                                    src_hph+='        $__test=$GLOBALS[\'__fnt1\']->' + mat1[j][1] + '(';
                                    if(mat1[j][8] === 0){
                                    }else{
                                        for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                            if(mat1[k][2] === 'c'){
                                                if(mat1[k][4] === 0){
                                                    src_hph+=mat1[k][1] + ',';
                                                }else{
                                                    /* afr */
                                                    debugger;
                                                    return({"__xst" : __xer});
                                                }
                                            }else{
                                                return({"__xst" : __xer});
                                            }
                                        }
                                    }
                                    src_hph+='$form[\'' + nom_du_champ + '\'],$donnees_retournees);\r\n';
                                    src_hph+='        if($__test[__xst]!==__xsu){\n';
                                    src_hph+='            $donnees_retournees[__xsi][__xer][]=\'erreur sur le contenu de "' + obj_champ.meta.abrege_du_champ + '" [\' . __LINE__ . \']\';\r\n';
                                    src_hph+='            $donnees_retournees[__xst]=__xer;\r\n';
                                    src_hph+='            return;\r\n';
                                    src_hph+='        }\n\n';
                                }else{
                                    return({"__xst" : __xer});
                                }
                            }
                        }
                    }
                }
            }
            src_hph+='\r\n';
            src_hph+='        $retour_a_la_liste=false;\r\n';
            src_hph+='        $l01=count($mat);\r\n';
            src_hph+='        for($i=$d+1;$i<$l01;$i=$mat[$i][12]){\r\n';
            src_hph+='         if($mat[$i][1]===\'retour_a_la_liste\' && $mat[$i][2]===\'f\'){\r\n';
            src_hph+='          $retour_a_la_liste=true;\r\n';
            src_hph+='         }\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='        $tt' + ref_select + '=$this->sql0->sql_iii(\n';
            src_hph+='             /*sql_' + ref_select + '()*/ ' + ref_select + ',\n';
            src_hph+='            array(/**/\n';
            src_hph+='                \'T0_' + champ_primaire + '\' => $form[\'' + champ_primaire + '\'],\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_hph+='            ),\n';
            src_hph+='            $donnees_retournees\n';
            src_hph+='        );\r\n';
            src_hph+='        \n';
            src_hph+='        if($tt' + ref_select + '[__xst] !== __xsu){\n';
            src_hph+='\n';
            src_hph+='\n';
            src_hph+='            $donnees_retournees[__xsi][__xal][]=__LINE__ . \' aucune modification effectuée\';\r\n';
            src_hph+='            return;\r\n';
            src_hph+='        }\n';
            src_hph+='\r\n';
            src_hph+='        if($tt' + ref_select + '[__xst] === __xsu && count($tt' + ref_select + '[__xva])===1){\r\n';
            src_hph+='\r\n';
            src_hph+='            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt' + ref_select + '[__xva][0]);\r\n';
            src_hph+='            if($__actions_et_tests_avant_modifier[__xst]!==__xsu){\r\n';
            src_hph+='                return;\r\n';
            src_hph+='            }\r\n';
            src_hph+='\r\n';
            src_hph+='            $tt' + ref_update + '=$this->sql0->sql_iii(\n';
            src_hph+='                 /*sql_' + ref_update + '()*/ ' + ref_update + ',\n';
            src_hph+='                array(/**/\n';
            for( let i=0 ; i < liste_des_champs_condition_update.length ; i++ ){
                if(champ_primaire === liste_des_champs_condition_update[i].nom_du_champ){
                    src_hph+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' => $form[\'' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }else if(liste_des_champs_condition_update[i].champ_session === true){
                    /* nom_en_session1 */
                    src_hph+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_update[i].nom_champ_session + '\'],\n';
                }else if(liste_des_champs_condition_update[i].champ_dans_la_base.champ_est_en_session1 === true){
                    /* nom_en_session1 */
                    src_hph+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_update[i].champ_dans_la_base.nom_en_session1 + '\'],\n';
                }else if(liste_des_champs_condition_update[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1){
                    src_hph+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' => $form[\'' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }else{
                    src_hph+='                        \'c_' + liste_des_champs_condition_update[i].nom_du_champ + '\' => $tt' + ref_select + '[__xva][0][\'T0.' + liste_des_champs_condition_update[i].nom_du_champ + '\'],\n';
                }
            }
            for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.champ_session === true){
                    if(ne_pas_prendre_les_valeurs_en_session === true){
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                            src_hph+='                    \'n_' + nom_du_champ + '\' => $form[\'' + nom_du_champ + '\']===\'\'?NULL:$form[\'' + nom_du_champ + '\'],\n';
                        }else{
                            src_hph+='                    \'n_' + nom_du_champ + '\' => $form[\'' + nom_du_champ + '\'],\n';
                        }
                    }else{
                        src_hph+='                    \'n_' + nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_update[i].nom_champ_session + '\'],\r\n';
                    }
                    /*
                      }else if(liste_des_champs_update[i].champ_dans_la_base.champ_est_en_session1===true){
                      debugger
                      src_hph+='                    \'n_' + nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_update[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    */
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                       || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                ){
                }else{
                    if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                        src_hph+='                    \'n_' + nom_du_champ + '\' => $form[\'' + nom_du_champ + '\']===\'\'?NULL:$form[\'' + nom_du_champ + '\'],\n';
                    }else{
                        src_hph+='                    \'n_' + nom_du_champ + '\' => $form[\'' + nom_du_champ + '\'],\n';
                    }
                }
            }
            src_hph+='                ),\n';
            src_hph+='                $donnees_retournees\n';
            src_hph+='            );\r\n';
            src_hph+='\r\n';
            src_hph+='            if($tt' + ref_update + '[__xst]!==__xsu){\r\n';
            src_hph+='                return;\r\n';
            src_hph+='            }\r\n';
            src_hph+='\r\n';
            src_hph+='            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt' + ref_select + '[__xva][0]);\r\n';
            src_hph+='\r\n';
            src_hph+='            if($retour_a_la_liste===true){\r\n';
            src_hph+='\r\n';
            src_hph+='                if(isset($form[\'__mat_liste_si_ok\'])){\r\n';
            src_hph+='                  $mat1=json_decode($form[\'__mat_liste_si_ok\'],true);\r\n';
            src_hph+='                  $d=1;\r\n';
            src_hph+='                  $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);\r\n';
            src_hph+='                }\r\n';
            src_hph+='                return;\r\n';
            src_hph+='            }\r\n';
            src_hph+='\r\n';
            src_hph+='            $tt' + ref_select + '=$this->sql0->sql_iii(\r\n';
            src_hph+='                 /*sql_' + ref_select + '()*/ ' + ref_select + ',\r\n';
            src_hph+='                array(/**/\r\n';
            src_hph+='                    \'T0_' + champ_primaire + '\' => $form[\'' + champ_primaire + '\'],\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_hph+='                ),\r\n';
            src_hph+='                $donnees_retournees\r\n';
            src_hph+='            );\r\n';
            src_hph+='            \r\n';
            src_hph+='            $donnees_retournees[__xva][\'page_modification1\']=$tt' + ref_select + ';\r\n';
            src_hph+='\r\n';
            src_hph+='        }else{\r\n';
            src_hph+='            $donnees_retournees[__xva][\'page_modification1\']=$tt' + ref_select + ';\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='        $donnees_retournees[__xst]=__xsu;\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
            src_hph+='\r\n';
        }
        if(ref_select !== '' && ref_insert !==''){
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$' + champ_primaire + '=null){\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = \'.$d.\' <pre>\' . var_export( $donnees_recues , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        if(is_null($' + champ_primaire + ')){\r\n';
            src_hph+='            $l01=count($mat);\r\n';
            src_hph+='            for($i=$d+1;$i<$l01;$i=$mat[$i][12]){\r\n';
            src_hph+='             if($mat[$i][1]===\'' + champ_primaire + '\' && $mat[$i][2]===\'f\' && $mat[$i][8]===1 && $mat[$i+1][2]===\'c\' && $mat[$i+1][4]===0){\r\n';
            src_hph+='              $' + champ_primaire + '=(int)$mat[$i+1][1];\r\n';
            src_hph+='             }\r\n';
            src_hph+='            }\r\n';
            src_hph+='        }\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $' + champ_primaire + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='        $tt' + ref_select + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_select + '()*/ ' + ref_select + ',\r\n';
            src_hph+='            array(/**/\r\n';
            src_hph+='                \'T0_' + champ_primaire + '\' => $' + champ_primaire + ',\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_hph+='            ),\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='        \r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $tt' + ref_select + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $donnees_retournees[__xva][\'page_duplication1\']=$tt' + ref_select + ';\r\n';
            src_hph+='//        $donnees_retournees[__xac]=\'pm1(m1(n1(\'.$this->moi.\'),f1(page_duplication1(' + champ_primaire + '(\'.$' + champ_primaire + '.\')))))\';\r\n';
            src_hph+='        $donnees_retournees[__xst]=__xsu;\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
            src_hph+='\r\n';
        }
        if(ref_select !== '' && ref_update !=='' ){
            
            
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , ' + champ_primaire + '=null ){\r\n';
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
            src_serveur_js2+='            donnees_retournees[\'__xac\']=\'pm1(m1(n1(\' + this.moi + \'),f1(page_modification1(' + champ_primaire + '(\' + ' + champ_primaire + ' + \')))))\';\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        let tt'+ref_select+'=await this.__gi1.sql_iii( '+ref_select+' , {"T0_' + champ_primaire + '" : ' + champ_primaire + '} , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt'+ref_select+'[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let aetam=await this.actions_et_tests_apres_page_modifications(mat , d , donnees_recues , donnees_retournees , options_generales , tt'+ref_select+'[\'__xva\'][0] , __db1);\r\n';
            src_serveur_js2+='        if(aetam[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xva\'][\'page_modification1\']=tt'+ref_select+';\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
            
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$' + champ_primaire + '=null){\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = \'.$d.\' <pre>\' . var_export( $donnees_recues , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        if(is_null($' + champ_primaire + ')){\r\n';
            src_hph+='            $l01=count($mat);\r\n';
            src_hph+='            for($i=$d+1;$i<$l01;$i=$mat[$i][12]){\r\n';
            src_hph+='             if($mat[$i][1]===\'' + champ_primaire + '\' && $mat[$i][2]===\'f\' && $mat[$i][8]===1 && $mat[$i+1][2]===\'c\' && $mat[$i+1][4]===0){\r\n';
            src_hph+='              $' + champ_primaire + '=(int)$mat[$i+1][1];\r\n';
            src_hph+='             }\r\n';
            src_hph+='            }\r\n';
            src_hph+='        }else{\r\n';
            src_hph+='\r\n';
            src_hph+='            $donnees_retournees[__xac]=\'pm1(m1(n1(\' . $this->moi . \'),f1(page_modification1(' + champ_primaire + '(\'.$' + champ_primaire + '.\')))))\';\r\n';
            src_hph+='\r\n';
            src_hph+='        }\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $' + champ_primaire + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='        $tt' + ref_select + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_select + '()*/ ' + ref_select + ',\r\n';
            src_hph+='            array(/**/\r\n';
            src_hph+='                \'T0_' + champ_primaire + '\' => $' + champ_primaire + ',\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_hph+='            ),\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='        \r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $tt' + ref_select + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $donnees_retournees[__xva][\'page_modification1\']=$tt' + ref_select + ';\r\n';
            src_hph+='        $donnees_retournees[__xst]=__xsu;\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
            src_hph+='\r\n';
        }
        
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    page_modification1( mat , d , le_message_du_serveur=null ){\r\n';
        src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='        if(a===null){\r\n';
        src_client2+='            this.__gi1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
        src_client2+='        }\r\n';
        src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='\r\n';
        src_client2+='        if(a.innerHTML === \'modification \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
        src_client2+='        }else{\r\n';
        src_client2+='            a.innerHTML=\'modification \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
        src_client2+='            this.__gi1.afficher_les_zones( \'vv_ecran_modification\' );\r\n';
        src_client2+='        }\r\n';
        src_client2+='        let o1=\'\';\r\n';
        src_client2+='        if(!le_message_du_serveur.__xva.hasOwnProperty(\'page_modification1\')){\r\n';
        src_client2+='            return({__xst:__xer});\r\n';
        src_client2+='        }\r\n';
        src_client2+='        let enreg=le_message_du_serveur.__xva.page_modification1.__xva[0];\r\n';
        for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.hasOwnProperty( 'table_mere' )
                   && obj_champ.hasOwnProperty( 'champ_pere' )
                   && obj_champ.table_mere !== ''
                   && obj_champ.champ_pere !== ''
            ){
                if(this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_pere_est_en_session' )
                       && this.#obj_table.champs[nom_du_champ].champ_pere_est_en_session === true
                ){
                }else{
                    src_client2+='        /*\r\n';
                    src_client2+='          =====================================================================================\r\n';
                    src_client2+='        */\r\n';
                    src_client2+='\r\n';
                    src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                    src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    src_client2+='        o1 += \'    </div>\' ;\r\n';
                    src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                    src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    src_client2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    src_client2+='        }\r\n';
                    src_client2+='        o1 += \'        <input type="hidden" value="\' ;\r\n';
                    src_client2+='        o1+=enreg[\'T0.' + obj_champ.nom_du_champ + '\'] ;\r\n';
                    src_client2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                    src_client2+='        o1 += \'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                    src_client2+='        o1 +=  \'(\'+enreg[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                    let indice_jointure=0;
                    for( let j=0 ; j < les_jointures.length ; j++ ){
                        if(les_jointures[j].alias2 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                               && obj_champ.nom_du_champ === les_jointures[j].champ2
                        ){
                            indice_jointure=j;
                            src_client2+='\r\n';
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                src_client2+='        o1 +=  this.__gi1.fi2(enreg[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }else if(les_jointures[j].alias1 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                               && obj_champ.nom_du_champ === les_jointures[j].champ1
                        ){
                            indice_jointure=j;
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                src_client2+='        o1 +=  this.__gi1.fi2(enreg[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }
                    }
                    src_client2+='        o1+=\'</span>\' ;\r\n';
                    /*  */
                    var nom_de_la_classe_lien='';
                    if(les_jointures[indice_jointure].nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                        nom_de_la_classe_lien='' + les_jointures[indice_jointure].nom_de_la_table.substr( 4 ) + '1';
                        console.log( '%c lien vers "' + nom_de_la_classe_lien + '" ' , 'background:lightgreen; color:black;' );
                    }else{
                        console.log( '%c attention, la table parente ne commence pas par "tbl_" pour le champ ""' , 'background:red; color:yellow;' );
                    }
                    src_client2+='        o1+=this.__gi1.lien_parent(\'' + nom_de_la_classe_lien + '\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\');\r\n';
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
                src_client2+='\'+this.__gi1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                src_client2+='" ';
                src_client2+='/>\' ;\r\n';
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
                    src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    src_client2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    src_client2+='        }\r\n';
                    src_client2+='';
                    src_client2+='        o1 += \'      <input ';
                    src_client2+=' type="text" style="height: var(--t_hauteur_input1);" id="' + obj_champ.nom_du_champ + '" ' + size + ' ';
                    src_client2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                    src_client2+=' value="';
                    src_client2+='\'+this.__gi1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                    src_client2+='" ';
                    src_client2+=' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                    src_client2+='        o1 +=this.__gi1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    src_client2+='\r\n';
                    if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                        let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                        src_client2+='        o1 += \'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                        for(let opt in tab){
                            src_client2+='';
                            src_client2+='        o1 += \'          <div class="rev_bouton" data-rev_click="';
                            src_client2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                            src_client2+='">' + tab[opt] + '</div>\';\r\n';
                        }
                        src_client2+='        o1 += \'      </div>\';\r\n';
                    }
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                    src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    src_client2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    src_client2+='        }\r\n';
                    src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                    let format_source='';
                    if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                        src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                        src_client2+='        o1+=this.__gi1.__fnt1.boutons_rev3(\'' + obj_champ.nom_du_champ + '\');\r\n';
                        src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                        format_source=' data-editeur1="rev" ';
                    }else if(obj_champ.cht_particularités_genre.source_non_rev === 1){
                        src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                        src_client2+='        o1+=this.__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                        src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                        format_source=' data-editeur1="source_editeur1" ';
                    }else{
                        src_client2+='        o1+=\'<div>\\r\\n\';\r\n';
                        src_client2+='        o1+=this.__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                        src_client2+='        o1+=\'</div>\\r\\n\';\r\n';
                    }
                    src_client2+='\r\n';
                    src_client2+='        var sty=\'\';\r\n';
                    src_client2+='        if( enreg[\'T0.cht_initialisation_menu\']===null){\r\n';
                    src_client2+='            sty=\' style="height:5vh;" \';\r\n';
                    src_client2+='        }\r\n';
                    src_client2+='        o1+=\'            <textarea ' + format_source + ' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" \'+sty+\' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\r\n';
                    src_client2+='        o1+=this.__gi1.fi2( enreg[\'T0.' + obj_champ.nom_du_champ + '\'] );\r\n';
                    src_client2+='        o1+=\'</textarea>\';\r\n';
                    src_client2+='\r\n';
                    src_client2+='            o1 += \'        </div>\' ;\r\n';
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                    src_client2+='        if(enreg[\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    src_client2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    src_client2+='        }\r\n';
                    if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                        /* champ entier standard */
                        src_client2+='        o1 += \'      ';
                        src_client2+='<input value="';
                        src_client2+='\' + this.__gi1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                        src_client2+='" ';
                        src_client2+='type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                        src_client2+='autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                            src_client2+='        o1 += \'        ';
                            src_client2+='<input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" ';
                            src_client2+='value="';
                            src_client2+='\' + this.__gi1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            src_client2+='" >\'; ;\r\n';
                        }else{
                            /*
                              un champ entier qui comporte des valeurs discrètes
                            */
                            src_client2+='        o1 += \'        ';
                            src_client2+='<input style="height: var(--t_hauteur_input1);" type="text" disabled id="' + obj_champ.nom_du_champ + '" ';
                            src_client2+='value="';
                            src_client2+='\' + this.__gi1.fi2(enreg[\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            src_client2+='" >\'; ;\r\n';
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                            src_client2+='        o1 += \'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                            for(let opt in tab){
                                src_client2+='';
                                src_client2+='        o1 += \'          <div class="rev_bouton" data-rev_click="';
                                src_client2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                src_client2+='">' + tab[opt] + '</div>\';\r\n';
                            }
                            src_client2+='        o1 += \'      </div>\';\r\n';
                        }
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
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='        let cmd=\'\';\r\n';
        src_client2+='        cmd+=\'liste1(\';\r\n';
        src_client2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
        src_client2+='          if(this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
        src_client2+='            cmd+=i+\'(\\\'\'+this.__gi1.fi2(this.filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
        src_client2+='          }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        cmd+=\')\';\r\n';
        src_client2+='        let obj2=this.__gi1.__rev1.rev_tm(cmd);\r\n';
        src_client2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
        src_client2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" size="128" value="\'+this.__gi1.fi2(jso)+\'" />\';\r\n';
        src_client2+='\r\n';
        src_client2+='        document.getElementById( \'vv_ecran_modification_zone_contenu\' ).innerHTML=o1;\r\n';
        src_client2+='        this.__gi1.maj_hash(mat,0);\r\n';
        src_client2+='        this.__gi1.maj_title_htm1(\'modification \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
        src_client2+='        this.__gi1.ajoute_les_evenements_aux_boutons();\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        
        
        
        
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    page_modification1( mat , d , le_message_du_serveur=null ){\r\n';
        o2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='        if(a===null){\r\n';
        o2+='            __gi1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
        o2+='        }\r\n';
        o2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='\r\n';
        o2+='        if(a.innerHTML === \'modification \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
        o2+='        }else{\r\n';
        o2+='            a.innerHTML=\'modification \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
        o2+='            __gi1.afficher_les_zones( \'vv_ecran_modification\' );\r\n';
        o2+='        }\r\n';
        o2+='        let o1=\'\';\r\n';
        for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.hasOwnProperty( 'table_mere' )
                   && obj_champ.hasOwnProperty( 'champ_pere' )
                   && obj_champ.table_mere !== ''
                   && obj_champ.champ_pere !== ''
            ){
                if(this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_pere_est_en_session' )
                       && this.#obj_table.champs[nom_du_champ].champ_pere_est_en_session === true
                ){
                }else{
                    o2+='        /*\r\n';
                    o2+='          =====================================================================================\r\n';
                    o2+='        */\r\n';
                    o2+='\r\n';
                    o2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                    o2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                    o2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                    o2+='        o1 += \'    </div>\' ;\r\n';
                    o2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                    o2+='        if(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    o2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    o2+='        }\r\n';
                    o2+='        o1 += \'        <input type="hidden" value="\' ;\r\n';
                    o2+='        o1+=le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'] ;\r\n';
                    o2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                    o2+='        o1 += \'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                    o2+='        o1 +=  \'(\'+le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                    let indice_jointure=0;
                    for( let j=0 ; j < les_jointures.length ; j++ ){
                        if(les_jointures[j].alias2 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                               && obj_champ.nom_du_champ === les_jointures[j].champ2
                        ){
                            indice_jointure=j;
                            o2+='\r\n';
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                o2+='        o1 +=  __gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }else if(les_jointures[j].alias1 === 'T0'
                               && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                               && obj_champ.nom_du_champ === les_jointures[j].champ1
                        ){
                            indice_jointure=j;
                            for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                o2+='        o1 +=  __gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                            }
                        }
                    }
                    o2+='        o1+=\'</span>\' ;\r\n';
                    /*  */
                    var nom_de_la_classe_lien='';
                    if(les_jointures[indice_jointure].nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                        nom_de_la_classe_lien='c_' + les_jointures[indice_jointure].nom_de_la_table.substr( 4 ) + '1';
                        console.log( '%c lien vers "' + nom_de_la_classe_lien + '" ' , 'background:lightgreen; color:black;' );
                    }else{
                        console.log( '%c attention, la table parente ne commence pas par "tbl_" pour le champ ""' , 'background:red; color:yellow;' );
                    }
                    o2+='        o1+=__gi1.lien_parent(\'' + nom_de_la_classe_lien + '\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\');\r\n';
                    o2+='        o1+= \'    </div>\' ;\r\n';
                    o2+='        o1+= \'  </div>\' ;\r\n';
                    o2+='\r\n';
                }
            }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1){
            }else if(obj_champ.genre_objet_du_champ.che_est_nur_genre === 1){
                /* mettre le nur */
                o2+='        o1 += \'     <input ';
                o2+=' type="hidden" id="' + obj_champ.nom_du_champ + '"  ';
                o2+=' value="';
                o2+='\'+__gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                o2+='" ';
                o2+='/>\' ;\r\n';
            }else{
                o2+='        /*\n';
                o2+='          =====================================================================================\n';
                o2+='        */\n';
                o2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                o2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                o2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                o2+='        o1 += \'    </div>\' ;\r\n';
                o2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                    let size='';
                    if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                        size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                    }
                    o2+='';
                    o2+='        if(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    o2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    o2+='        }\r\n';
                    o2+='';
                    o2+='        o1 += \'      <input ';
                    o2+=' type="text" style="height: var(--t_hauteur_input1);" id="' + obj_champ.nom_du_champ + '" ' + size + ' ';
                    o2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                    o2+=' value="';
                    o2+='\'+__gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                    o2+='" ';
                    o2+=' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                    o2+='        o1 +=__gi1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                    o2+='\r\n';
                    if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                        let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                        o2+='        o1 += \'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                        for(let opt in tab){
                            o2+='';
                            o2+='        o1 += \'          <div class="rev_bouton" data-rev_click="';
                            o2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                            o2+='">' + tab[opt] + '</div>\';\r\n';
                        }
                        o2+='        o1 += \'      </div>\';\r\n';
                    }
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                    o2+='        if(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    o2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    o2+='        }\r\n';
                    o2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                    let format_source='';
                    if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                        o2+='        o1+=\'<div>\\r\\n\';\r\n';
                        o2+='        o1+=__gi1.__fnt1.boutons_rev3(\'' + obj_champ.nom_du_champ + '\');\r\n';
                        o2+='        o1+=\'</div>\\r\\n\';\r\n';
                        format_source=' data-editeur1="rev" ';
                    }else if(obj_champ.cht_particularités_genre.source_non_rev === 1){
                        o2+='        o1+=\'<div>\\r\\n\';\r\n';
                        o2+='        o1+=__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                        o2+='        o1+=\'</div>\\r\\n\';\r\n';
                        format_source=' data-editeur1="source_editeur1" ';
                    }else{
                        o2+='        o1+=\'<div>\\r\\n\';\r\n';
                        o2+='        o1+=__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                        o2+='        o1+=\'</div>\\r\\n\';\r\n';
                    }
                    o2+='\r\n';
                    o2+='        var sty=\'\';\r\n';
                    o2+='        if( le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.cht_initialisation_menu\']===null){\r\n';
                    o2+='            sty=\' style="height:5vh;" \';\r\n';
                    o2+='        }\r\n';
                    o2+='        o1+=\'            <textarea ' + format_source + ' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" \'+sty+\' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\r\n';
                    o2+='        o1+=__gi1.fi2( le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'] );\r\n';
                    o2+='        o1+=\'</textarea>\';\r\n';
                    o2+='\r\n';
                    /*
                      o2+='        o1 += \'            <textarea ' + format_source;
                      o2+=' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
                      o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                      o2+='</textarea>\' ;\r\n';
                    */
                    o2+='            o1 += \'        </div>\' ;\r\n';
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                    o2+='        if(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']===undefined){\r\n';
                    o2+='            o1 += \'        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\\\'est pas inclus dans le SELECT</div>\'; ;\r\n';
                    o2+='        }\r\n';
                    if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                        /* champ entier standard */
                        o2+='        o1 += \'      ';
                        o2+='<input value="';
                        o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                        o2+='" ';
                        o2+='type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                        o2+='autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' ;\r\n';
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                            o2+='        o1 += \'        ';
                            o2+='<input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" ';
                            o2+='value="';
                            o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            o2+='" >\'; ;\r\n';
                        }else{
                            /*
                              un champ entier qui comporte des valeurs discrètes
                            */
                            o2+='        o1 += \'        ';
                            o2+='<input style="height: var(--t_hauteur_input1);" type="text" disabled id="' + obj_champ.nom_du_champ + '" ';
                            o2+='value="';
                            o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            o2+='" >\'; ;\r\n';
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                            o2+='        o1 += \'      <div style="display : inline-flex;flex-wrap : balance;">\';\r\n';
                            for(let opt in tab){
                                o2+='';
                                o2+='        o1 += \'          <div class="rev_bouton" data-rev_click="';
                                o2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                o2+='">' + tab[opt] + '</div>\';\r\n';
                            }
                            o2+='        o1 += \'      </div>\';\r\n';
                        }
                    }
                }else{
                    /*
                      AFR
                    */
                    debugger;
                }
                o2+='        o1 += \'    </div>\' ;\r\n';
                o2+='        o1 += \'  </div>\' ;\r\n';
            }
        }
        o2+='            /*\r\n';
        o2+='              =============================================================================================\r\n';
        o2+='            */\r\n';
        o2+='            o1+=\'      <input type="hidden" id="' + champ_primaire + '" value="\'+le_message_du_serveur.__xva.page_modification1.__xva[0][\'T0.' + champ_primaire + '\']+\'">\';\r\n';
        o2+='            /*\r\n';
        o2+='              =============================================================================================\r\n';
        o2+='            */\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='        let cmd=\'\';\r\n';
        o2+='        cmd+=\'liste1(\';\r\n';
        o2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='          if(this.$filtres[this.fonction_liste][i]!==\'\'){\r\n';
        o2+='            cmd+=i+\'(\\\'\'+__gi1.fi2(this.$filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
        o2+='          }\r\n';
        o2+='        }\r\n';
        o2+='        cmd+=\')\';\r\n';
        o2+='        let obj2=__gi1.__rev1.rev_tm(cmd);\r\n';
        o2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
        o2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" size="128" value="\'+__gi1.fi2(jso)+\'" />\';\r\n';
        o2+='\r\n';
        o2+='        document.getElementById( \'vv_ecran_modification_zone_contenu\' ).innerHTML=o1;\r\n';
        o2+='        __gi1.maj_hash(mat,0);\r\n';
        o2+='        __gi1.maj_title_htm1(\'modification \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
        o2+='        __gi1.ajoute_les_evenements_aux_boutons();\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        
        /*
        
        
        
        */
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    page_confirmation_supprimer1(mat , d , le_message_du_serveur=null){\r\n';
        src_client2+='\r\n';
        src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='        if(a===null){\r\n';
        src_client2+='            this.__gi1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
        src_client2+='        }\r\n';
        src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='\r\n';
        src_client2+='        if(a.innerHTML === \'suppression \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
        src_client2+='        }else{\r\n';
        src_client2+='            a.innerHTML=\'suppression \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
        src_client2+='            this.__gi1.afficher_les_zones( \'vv_ecran_suppression\' );\r\n';
        src_client2+='        }\r\n';
        src_client2+='        let o1=\'\';\r\n';
        for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.hasOwnProperty( 'table_mere' )
                   && obj_champ.hasOwnProperty( 'champ_pere' )
                   && obj_champ.table_mere !== ''
                   && obj_champ.champ_pere !== ''
            ){
                src_client2+='        /*\r\n';
                src_client2+='          =====================================================================================\r\n';
                src_client2+='        */\r\n';
                src_client2+='\r\n';
                src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                src_client2+='        o1 += \'    </div>\' ;\r\n';
                src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                src_client2+='        o1 += \'        <input type="hidden" value="\' ;\r\n';
                src_client2+='        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'] ;\r\n';
                src_client2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                src_client2+='        o1 += \'        <span>\';\r\n';
                src_client2+='        o1 +=  \'(\'+le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                for( let j=0 ; j < les_jointures.length ; j++ ){
                    if(les_jointures[j].alias2 === 'T0'
                           && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                           && obj_champ.nom_du_champ === les_jointures[j].champ2
                    ){
                        for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                            src_client2+='        o1 +=  this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                        }
                    }else if(les_jointures[j].alias1 === 'T0'
                           && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                           && obj_champ.nom_du_champ === les_jointures[j].champ1
                    ){
                        for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                            src_client2+='        o1 +=  this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
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
                    src_client2+='\'+this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                    src_client2+='" ';
                    src_client2+='  />\' ;\r\n';
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                    src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                    src_client2+='';
                    src_client2+='        o1 += \'            <textarea disabled ';
                    src_client2+='id="' + obj_champ.nom_du_champ + '" rows="2"  cols="50" >';
                    src_client2+='\' + this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                    src_client2+='</textarea>\' ;\r\n';
                    src_client2+='            o1 += \'        </div>\' ;\r\n';
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                    if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                        /* champ entier standard */
                        src_client2+='        o1 += \'      ';
                        src_client2+='<input disabled type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                        src_client2+=' value="';
                        src_client2+='\'+this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        src_client2+='" />\' ;\r\n';
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                            src_client2+='';
                            src_client2+='        o1 += \'        ';
                            src_client2+='<input disabled type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" ';
                            src_client2+='value="';
                            src_client2+='\' + this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            src_client2+='" >\'; ;\r\n';
                        }else{
                            /*
                              un champ entier qui comporte des valeurs discrètes
                            */
                            src_client2+='';
                            src_client2+='        o1 += \'        ';
                            src_client2+='<input disabled type="text" id="' + obj_champ.nom_du_champ + '" value="';
                            src_client2+='\' + this.__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            src_client2+='" >\'; ;\r\n';
                        }
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
        src_client2+='        /*\n';
        src_client2+='          =====================================================================================\n';
        src_client2+='        */\n';
        src_client2+='        o1+=\'      <input type="hidden" id="' + champ_primaire + '" value="\'+le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + champ_primaire + '\']+\'" />\';\r\n';
        src_client2+='        /*\n';
        src_client2+='          =====================================================================================\n';
        src_client2+='        */\n';
        src_client2+='        let cmd=\'\';\r\n';
        src_client2+='        cmd+=\'liste1(\';\r\n';
        src_client2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
        src_client2+='          if(this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
        src_client2+='            cmd+=i+\'(\\\'\'+this.__gi1.fi2(this.filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
        src_client2+='          }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        cmd+=\')\';\r\n';
        src_client2+='        let obj2=this.__gi1.__rev1.rev_tm(cmd);\r\n';
        src_client2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
        src_client2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" size="128" value="\'+this.__gi1.fi2(jso)+\'" />\';\r\n';
        src_client2+='        document.getElementById( \'vv_ecran_suppression_zone_contenu\' ).innerHTML=o1;\r\n';
        src_client2+='        this.__gi1.maj_title_htm1(\'suppression \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
        src_client2+='        if(this.__gi1.stockage_local[\'parametres\'][\'__deverminage\'][\'valeur\']>0){\r\n';
        src_client2+='            this.__gi1.maj_hash(mat,0);\r\n';
        src_client2+='        }\r\n';
        src_client2+='        this.__gi1.ajoute_les_evenements_aux_boutons();\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';        
        
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    page_confirmation_supprimer1(mat , d , le_message_du_serveur=null){\r\n';
        o2+='\r\n';
        o2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='        if(a===null){\r\n';
        o2+='            __gi1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
        o2+='        }\r\n';
        o2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='\r\n';
        o2+='        if(a.innerHTML === \'suppression \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
        o2+='        }else{\r\n';
        o2+='            a.innerHTML=\'suppression \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
        o2+='            __gi1.afficher_les_zones( \'vv_ecran_suppression\' );\r\n';
        o2+='        }\r\n';
        o2+='        let o1=\'\';\r\n';
        for( let i=0 ; i < liste_des_champs_update.length ; i++ ){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.hasOwnProperty( 'table_mere' )
                   && obj_champ.hasOwnProperty( 'champ_pere' )
                   && obj_champ.table_mere !== ''
                   && obj_champ.champ_pere !== ''
            ){
                o2+='        /*\r\n';
                o2+='          =====================================================================================\r\n';
                o2+='        */\r\n';
                o2+='\r\n';
                o2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                o2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                o2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                o2+='        o1 += \'    </div>\' ;\r\n';
                o2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                o2+='        o1 += \'        <input type="hidden" value="\' ;\r\n';
                o2+='        o1+=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'] ;\r\n';
                o2+='        o1+=\'"  id="' + obj_champ.nom_du_champ + '" />\' ;\r\n';
                o2+='        o1 += \'        <span>\';\r\n';
                o2+='        o1 +=  \'(\'+le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                for( let j=0 ; j < les_jointures.length ; j++ ){
                    if(les_jointures[j].alias2 === 'T0'
                           && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                           && obj_champ.nom_du_champ === les_jointures[j].champ2
                    ){
                        for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                            o2+='        o1 +=  __gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                        }
                    }else if(les_jointures[j].alias1 === 'T0'
                           && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                           && obj_champ.nom_du_champ === les_jointures[j].champ1
                    ){
                        for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                            o2+='        o1 +=  __gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']) ;\r\n';
                        }
                    }
                }
                o2+='        o1 += \'</span>\' ;\r\n';
                o2+='        o1 += \'    </div>\' ;\r\n';
                o2+='        o1 += \'  </div>\' ;\r\n';
                o2+='\r\n';
            }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                   || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
            ){
            }else{
                o2+='        /*\n';
                o2+='          =====================================================================================\n';
                o2+='        */\n';
                o2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                o2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                o2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                o2+='        o1 += \'    </div>\' ;\r\n';
                o2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                    let size='';
                    if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                        size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                    }
                    o2+='';
                    o2+='        o1 += \'      <input disabled ';
                    o2+=' type="text" id="' + obj_champ.nom_du_champ + '" ' + size + ' ';
                    o2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                    o2+=' value="';
                    o2+='\'+__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                    o2+='" ';
                    o2+='  />\' ;\r\n';
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                    o2+='        o1 += \'        <div class="yy_conteneur_txtara">\' ;\r\n';
                    o2+='';
                    o2+='        o1 += \'            <textarea disabled ';
                    o2+='id="' + obj_champ.nom_du_champ + '" rows="2"  cols="50" >';
                    o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                    o2+='</textarea>\' ;\r\n';
                    o2+='            o1 += \'        </div>\' ;\r\n';
                }else if(obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                    if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                        /* champ entier standard */
                        o2+='        o1 += \'      ';
                        o2+='<input disabled type="number" size="32" maxlength="32" id="' + obj_champ.nom_du_champ + '" ';
                        o2+=' value="';
                        o2+='\'+__gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\'])+\'';
                        o2+='" />\' ;\r\n';
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                            o2+='';
                            o2+='        o1 += \'        ';
                            o2+='<input disabled type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" ';
                            o2+='value="';
                            o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            o2+='" >\'; ;\r\n';
                        }else{
                            /*
                              un champ entier qui comporte des valeurs discrètes
                            */
                            o2+='';
                            o2+='        o1 += \'        ';
                            o2+='<input disabled type="text" id="' + obj_champ.nom_du_champ + '" value="';
                            o2+='\' + __gi1.fi2(le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + obj_champ.nom_du_champ + '\']) + \'';
                            o2+='" >\'; ;\r\n';
                        }
                    }
                }else{
                    /*
                      AFR
                    */
                    debugger;
                }
                o2+='        o1 += \'    </div>\' ;\r\n';
                o2+='        o1 += \'  </div>\' ;\r\n';
            }
        }
        o2+='        /*\n';
        o2+='          =====================================================================================\n';
        o2+='        */\n';
        o2+='        o1+=\'      <input type="hidden" id="' + champ_primaire + '" value="\'+le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0][\'T0.' + champ_primaire + '\']+\'" />\';\r\n';
        o2+='        /*\n';
        o2+='          =====================================================================================\n';
        o2+='        */\n';
        o2+='        let cmd=\'\';\r\n';
        o2+='        cmd+=\'liste1(\';\r\n';
        o2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='          if(this.$filtres[this.fonction_liste][i]!==\'\'){\r\n';
        o2+='            cmd+=i+\'(\\\'\'+__gi1.fi2(this.$filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
        o2+='          }\r\n';
        o2+='        }\r\n';
        o2+='        cmd+=\')\';\r\n';
        o2+='        let obj2=__gi1.__rev1.rev_tm(cmd);\r\n';
        o2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
        o2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" size="128" value="\'+__gi1.fi2(jso)+\'" />\';\r\n';
        o2+='        document.getElementById( \'vv_ecran_suppression_zone_contenu\' ).innerHTML=o1;\r\n';
        o2+='        __gi1.maj_title_htm1(\'suppression \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
        o2+='        if(__gi1.stockage_local[\'parametres\'][\'--deverminage\'][\'valeur\']>0){\r\n';
        o2+='            __gi1.maj_hash(mat,0);\r\n';
        o2+='        }\r\n';
        o2+='        __gi1.ajoute_les_evenements_aux_boutons();\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        
        /*
        
        */
        
        
        if(ref_delete !== '' && ref_select!=='' ){
         
         
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
            src_serveur_js2+='        let nom_formulaire=donnees_recues[\'__xva\'][\'__co1\'];\r\n';
            src_serveur_js2+='        let form=donnees_recues[\'__xva\'][\'__fo1\'][nom_formulaire];\r\n';
            
            if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' ) && this.#obj_table.meta.fonctions_spéciales1!==''){
                let obj1=__gi1.__rev1.rev_tm( this.#obj_table.meta.fonctions_spéciales1 );
                if(obj1.__xst===__xsu){
                    for(let i=1;i<obj1.__xva.length;i=obj1.__xva[i][12]){
                        if(obj1.__xva[i][1]==='ne_pas_supprimer_id_un' && obj1.__xva[i][2]==='f' && obj1.__xva[i][8]===1 && obj1.__xva[i+1][2]==='c' && __gi1.est_num(obj1.__xva[i+1][1])){
                            src_serveur_js2+='        /* fonctions_spéciales1(ne_pas_supprimer_id_un('+obj1.__xva[i+1][1]+')) */\r\n';
                            src_serveur_js2+='        if(form[\'' + champ_primaire + '\']<='+obj1.__xva[i+1][1]+'){\r\n';
                            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'il n\\\'est pas possible de supprimer cet élément [\' + this.__gi1.nl2() + \']\' );\r\n';
                            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
                            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
                            src_serveur_js2+='        }\r\n';
                        }
                    }
                }
            }
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        let __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        let criteres_'+ref_select+'={/**/\r\n';
            src_serveur_js2+='                \'T0_' + champ_primaire + '\' : form[\'' + champ_primaire + '\'],\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt'+ref_select+'=await this.__gi1.sql_iii( '+ref_select+' , criteres_'+ref_select+' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt'+ref_select+'[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'[\' + this.__gi1.nl2() + \']\' );\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt'+ref_select+'[\'__xva\'][0] , __db1 );\r\n';
            src_serveur_js2+='        if(tas[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let criteres_'+ref_delete+'={/**/\r\n';
            src_serveur_js2+='                \'' + champ_primaire + '\' : form[\'' + champ_primaire + '\'],\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'' + liste_des_champs_condition_select[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'' + liste_des_champs_condition_select[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt'+ref_delete+'=await this.__gi1.sql_iii( '+ref_delete+' , criteres_'+ref_delete+' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        /**/\r\n';
            src_serveur_js2+='        if(tt'+ref_delete+'[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'erreur lors de le suppression [\' + this.__gi1.nl2() + \']\' );\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt'+ref_select+'[\'__xva\'][0] , __db1 );\r\n';
            src_serveur_js2+='        if(aac[\'__xst\'] === __xer){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( \'les actions après créer ont échouées [\' + this.__gi1.nl2() + \']\' );\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        /**/\r\n';            
            src_serveur_js2+='        if(form[\'__mat_liste_si_ok\'] !== \'\'){\r\n';
            src_serveur_js2+='            let mat1=JSON.parse( form[\'__mat_liste_si_ok\'] );\r\n';
            src_serveur_js2+='            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            /*
            
            */
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
            src_hph+='        //echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $donnees_recues , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='        $nom_formulaire=$donnees_recues[__xva][\'__co1\'];\r\n';
            src_hph+='        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];\r\n';
            src_hph+='\r\n';
            if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' )
                   && this.#obj_table.meta.fonctions_spéciales1.indexOf( 'ne_pas_supprimer_id_un(1)' ) >= 0
            ){
            }
            if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' ) && this.#obj_table.meta.fonctions_spéciales1!==''){
                let obj1=__gi1.__rev1.rev_tm( this.#obj_table.meta.fonctions_spéciales1 );
                if(obj1.__xst===__xsu){
                    for(let i=1;i<obj1.__xva.length;i=obj1.__xva[i][12]){
                        if(obj1.__xva[i][1]==='ne_pas_supprimer_id_un' && obj1.__xva[i][2]==='f' && obj1.__xva[i][8]===1 && obj1.__xva[i+1][2]==='c' && __gi1.est_num(obj1.__xva[i+1][1])){
                            src_hph+='        /* fonctions_spéciales1(ne_pas_supprimer_id_un('+obj1.__xva[i+1][1]+')) */\r\n';
                            src_hph+='        if($form[\'' + champ_primaire + '\']<='+obj1.__xva[i+1][1]+'){\r\n';
                            src_hph+='            $donnees_retournees[__xsi][__xer][]=__METHOD__ . \' [\' . __LINE__ . \']\';\r\n';
                            src_hph+='            return;\r\n';
                            src_hph+='        }\r\n';
                        }
                    }
                }
            }
            
            
            
            src_hph+='        $tt' + ref_select + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_select + '()*/ ' + ref_select + ',\r\n';
            src_hph+='            array(/**/\r\n';
            src_hph+='                \'T0_' + champ_primaire + '\' => $form[\'' + champ_primaire + '\'],\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_hph+='            ),\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='        if($tt' + ref_select + '[__xst]!==__xsu){\r\n';
            src_hph+='            $donnees_retournees[__xsi][__xer][]=__METHOD__ . \' [\' . __LINE__ . \']\';\r\n';
            src_hph+='            return;\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt' + ref_select + '[__xva][0]);\r\n';
            src_hph+='        if($__tests_avant_supprimer[__xst]!==__xsu){\r\n';
            src_hph+='            return;\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='        $tt' + ref_delete + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_delete + '()*/ ' + ref_delete + ',\r\n';
            src_hph+='            array(/**/\r\n';
            src_hph+='                \'' + champ_primaire + '\' => $tt' + ref_select + '[__xva][0][\'T0.' + champ_primaire + '\'],\r\n';
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_delete){
                if(liste_des_champs_condition_delete[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_delete[i].nom_du_champ )
                ){
                    src_hph+='                \'' + liste_des_champs_condition_delete[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_delete[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_delete[i].nom_du_champ );
                }else if(liste_des_champs_condition_delete[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_delete[i].nom_du_champ )
                ){
                    src_hph+='                \'' + liste_des_champs_condition_delete[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_delete[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_delete[i].nom_du_champ );
                }
            }
            src_hph+='            ),\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='\r\n';
            src_hph+='        if($tt' + ref_delete + '[__xst]!==__xsu){\r\n';
            src_hph+='            return;\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt' + ref_select + '[__xva][0]);\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='        if(isset($form[\'__mat_liste_si_ok\'])){\r\n';
            src_hph+='          $mat1=json_decode($form[\'__mat_liste_si_ok\'],true);\r\n';
            src_hph+='          $d=1;\r\n';
            src_hph+='          $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
            src_hph+='\r\n';
            /*
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
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
            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( this.__gi1.nl2() );\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        let critere_'+ref_select+'={\r\n';
            src_serveur_js2+='                \'T0_' + champ_primaire + '\' : ' + champ_primaire + ',\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_serveur_js2+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + ',\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        let tt'+ref_select+'=await this.__gi1.sql_iii( '+ref_select+' , critere_'+ref_select+' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xva\'][\'page_confirmation_supprimer1\']=tt'+ref_select+';\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
            /*
            */
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function page_confirmation_supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $donnees_recues , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $' + champ_primaire + '=0;\r\n';
            src_hph+='        $l01=count($mat);\r\n';
            src_hph+='        for($i=$d+1;$i<$l01;$i=$mat[$i][12]){\r\n';
            src_hph+='         if($mat[$i][1]===\'' + champ_primaire + '\' && $mat[$i][2]===\'f\' && $mat[$i][8]===1 && $mat[$i+1][2]===\'c\' && $mat[$i+1][4]===0){\r\n';
            src_hph+='          $' + champ_primaire + '=(int)$mat[$i+1][1];\r\n';
            src_hph+='         }\r\n';
            src_hph+='        }\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $' + champ_primaire + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='        $tt' + ref_select + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_select + '()*/ ' + ref_select + ',\r\n';
            src_hph+='            array(/**/\r\n';
            src_hph+='                \'T0_' + champ_primaire + '\' => $' + champ_primaire + ',\r\n';
            /* compléments sélectionner */
            var deja_pris=[champ_primaire];
            for(let i in liste_des_champs_condition_select){
                if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_pere_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_du_champ_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }else if(liste_des_champs_condition_select[i].champ_dans_la_base.champ_est_en_session1 === true
                       && !deja_pris.includes( liste_des_champs_condition_select[i].nom_du_champ )
                ){
                    src_hph+='                \'T0_' + liste_des_champs_condition_select[i].nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_condition_select[i].champ_dans_la_base.nom_en_session1 + '\'],\r\n';
                    deja_pris.push( liste_des_champs_condition_select[i].nom_du_champ );
                }
            }
            src_hph+='            ),\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $tt' + ref_select + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $donnees_retournees[__xva][\'page_confirmation_supprimer1\']=$tt' + ref_select + ';\r\n';
            src_hph+='        $donnees_retournees[__xst]=__xsu;\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
        }
        /*
        
        
        */
        
        
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    page_duplication1(mat,d,le_message_du_serveur){\r\n';
        src_client2+='        this.page_creer1( mat , d , le_message_du_serveur.__xva.page_duplication1.__xva[0]);\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
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
            if(obj_champ.genre_objet_du_champ
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
                if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                    src_client2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                    src_client2+='            this.__gi1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné\'  });\r\n';
                    src_client2+='            this.__gi1.affiche_les_messages();\r\n';
                    src_client2+='            this.__gi1.retablir_les_boutons_masques();\r\n';
                    src_client2+='            try{\r\n';
                    src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                    src_client2+='            }catch{}\r\n';
                    src_client2+='            return({__xst:__xsu})\r\n';
                    src_client2+='        }\r\n';
                }
                if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                    var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                    if(obj1.__xst !== __xsu){
                        return({"__xst" : __xer});
                    }
                    let mat1=obj1.__xva;
                    let l01=mat1.length;
                    for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][2] === 'f'){
                            src_client2+='\n';
                            src_client2+='        var __test=this.__gi1.__fnt1.' + mat1[j][1] + '(';
                            /* 0,99,fo1[\'chp_texte_tache\'],\'priorite\'];\r\n'; */
                            if(mat1[j][8] === 0){
                            }else{
                                for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                    if(mat1[k][2] === 'c'){
                                        if(mat1[k][4] === 0){
                                            src_client2+=mat1[k][1] + ',';
                                        }else{
                                            /* afr */
                                            debugger;
                                            return({"__xst" : __xer});
                                        }
                                    }else{
                                        return({"__xst" : __xer});
                                    }
                                }
                            }
                            src_client2+='fo1[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.nom_bref_du_champ + '\');\r\n';
                            src_client2+='        if(__test.__xst!==__xsu){\r\n';
                            src_client2+='            this.__gi1.affiche_les_messages();\r\n';
                            src_client2+='            this.__gi1.retablir_les_boutons_masques();\r\n';
                            src_client2+='            try{\r\n';
                            src_client2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                            src_client2+='            }catch{}\r\n';
                            src_client2+='            return({__xst:__xsu})\r\n';
                            src_client2+='        }\r\n';
                            src_client2+='\r\n';
                        }else{
                            return({"__xst" : __xer});
                        }
                    }
                }
            }
        }
        if(liste_des_conversions.length > 0){
            src_client2+='        /* conversion des données numériques début */\r\n';
            for( let i=0 ; i < liste_des_conversions.length ; i++ ){
                if(liste_des_conversions[i].espece_du_champ === 'INTEGER'){
                    src_client2+='        fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']=fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:parseInt(fo1[\'' + liste_des_conversions[i].nom_du_champ + '\'],10);\r\n';
                }else if(liste_des_conversions[i].espece_du_champ === 'FLOAT'){
                    src_client2+='        fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']=fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:parseFloat(fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']);\r\n';
                }
            }
            src_client2+='        /* conversion des données numériques fin */\r\n';
        }
        src_client2+='        /*\r\n';
        src_client2+='          tout a été vérifié\r\n';
        src_client2+='        */\r\n';
        src_client2+='        let __fo1={};\r\n';
        src_client2+='        __fo1[co1]=fo1;\r\n';
        src_client2+='\r\n';
        src_client2+='        this.__gi1.envoyer_un_message_au_worker( {/**/\r\n';
        src_client2+='            "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(creer1(\'+retour_a_la_liste+\'))))\',\r\n';
        src_client2+='            "__xva" : { "__fo1" : __fo1 , "__co1" : co1 }\r\n';
        src_client2+='\r\n';
        src_client2+='        } );\r\n';
        src_client2+='        return({__xst:__xsu})\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        
        
        
        /*
        
        
        */
        
        
        
        
        
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    page_duplication1(mat,d,le_message_du_serveur){\r\n';
        o2+='        this.page_creer1( mat , d , le_message_du_serveur.__xva.page_duplication1.__xva[0]);\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    verifier_creer1(mat , d , données){\r\n';
        o2+='        let retour_a_la_liste=\'\';\r\n';
        o2+='        let l01=mat.length;\r\n';
        o2+='        for(let i=d+1;i<l01;i=mat[i][12]){\r\n';
        o2+='            if(mat[i][1]===\'retour_a_la_liste\' && mat[i][2]===\'f\' ){\r\n';
        o2+='                retour_a_la_liste=\'retour_a_la_liste()\';\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        let co1=données.__co1;\r\n';
        o2+='        let fo1=données.__fo1[co1];\r\n';
        var liste_des_conversions=[];
        for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
            let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.genre_objet_du_champ
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
                if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                    o2+='        if(fo1[\'' + nom_du_champ + '\']===\'\'){\r\n';
                    o2+='            __gi1.ajoute_message({ __xst : __xer, __xme : \'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné\'  });\r\n';
                    o2+='            __gi1.affiche_les_messages();\r\n';
                    o2+='            __gi1.retablir_les_boutons_masques();\r\n';
                    o2+='            try{\r\n';
                    o2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                    o2+='            }catch{}\r\n';
                    o2+='            return({__xst:__xsu})\r\n';
                    o2+='        }\r\n';
                }
                if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                    var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                    if(obj1.__xst !== __xsu){
                        return({"__xst" : __xer});
                    }
                    let mat1=obj1.__xva;
                    let l01=mat1.length;
                    for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][2] === 'f'){
                            o2+='\n';
                            o2+='        var __test=__gi1.__fnt1.' + mat1[j][1] + '(';
                            /* 0,99,fo1[\'chp_texte_tache\'],\'priorite\'];\r\n'; */
                            if(mat1[j][8] === 0){
                            }else{
                                for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                    if(mat1[k][2] === 'c'){
                                        if(mat1[k][4] === 0){
                                            o2+=mat1[k][1] + ',';
                                        }else{
                                            /* afr */
                                            debugger;
                                            return({"__xst" : __xer});
                                        }
                                    }else{
                                        return({"__xst" : __xer});
                                    }
                                }
                            }
                            o2+='fo1[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.nom_bref_du_champ + '\');\r\n';
                            o2+='        if(__test.__xst!==__xsu){\r\n';
                            o2+='            __gi1.affiche_les_messages();\r\n';
                            o2+='            __gi1.retablir_les_boutons_masques();\r\n';
                            o2+='            try{\r\n';
                            o2+='              document.getElementById(\'' + nom_du_champ + '\').focus();\r\n';
                            o2+='            }catch{}\r\n';
                            o2+='            return({__xst:__xsu})\r\n';
                            o2+='        }\r\n';
                            o2+='\r\n';
                        }else{
                            return({"__xst" : __xer});
                        }
                    }
                }
            }
        }
        if(liste_des_conversions.length > 0){
            o2+='        /* conversion des données numériques début */\r\n';
            for( let i=0 ; i < liste_des_conversions.length ; i++ ){
                if(liste_des_conversions[i].espece_du_champ === 'INTEGER'){
                    o2+='        fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']=fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:parseInt(fo1[\'' + liste_des_conversions[i].nom_du_champ + '\'],10);\r\n';
                }else if(liste_des_conversions[i].espece_du_champ === 'FLOAT'){
                    o2+='        fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']=fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:parseFloat(fo1[\'' + liste_des_conversions[i].nom_du_champ + '\']);\r\n';
                }
            }
            o2+='        /* conversion des données numériques fin */\r\n';
        }
        o2+='        /*\r\n';
        o2+='          tout a été vérifié\r\n';
        o2+='        */\r\n';
        o2+='        let __fo1={};\r\n';
        o2+='        __fo1[co1]=fo1;\r\n';
        o2+='\r\n';
        o2+='        __gi1.__worker.postMessage( {\r\n';
        o2+='            "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(creer1(\'+retour_a_la_liste+\'))))\',\r\n';
        o2+='            "__xva" : {\r\n';
        o2+='              "__parametres" : __gi1.stockage_local[\'parametres\']  ,\r\n';
        o2+='              "__fo1" : __fo1 ,\r\n';
        o2+='              "__co1" : co1 ,\r\n';
        o2+='            }\r\n';
        o2+='\r\n';
        o2+='        } );\r\n';
        o2+='        return({__xst:__xsu})\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        if(ref_select !== '' && ref_insert !== ''){
         
            /*
              js serveur
            */
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
            src_serveur_js2+='        let retour_a_la_liste=false;\r\n';
            src_serveur_js2+='        let l01=mat.length;\r\n';
            src_serveur_js2+='        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
            src_serveur_js2+='            if(mat[i][1] === \'retour_a_la_liste\' && mat[i][2] === \'f\'){\r\n';
            src_serveur_js2+='                retour_a_la_liste=true;\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        let nom_formulaire=donnees_recues[\'__xva\'][\'__co1\'];\r\n';
            src_serveur_js2+='        let form=donnees_recues[\'__xva\'][\'__fo1\'][nom_formulaire];\r\n';
            src_serveur_js2+='\r\n';


            if(liste_des_conversions.length > 0){
                src_serveur_js2+='        /* conversion des données numériques début */\r\n';
                for( let i=0 ; i < liste_des_conversions.length ; i++ ){
                    let valeur_par_defaut='null';
                    
                    
                    if(liste_des_conversions[i].espece_du_champ === 'INTEGER'){

                        if(liste_des_conversions[i].genre_objet_du_champ.che_est_obligatoire_genre===1){
                            if(liste_des_conversions[i].a_une_valeur_par_defaut===1){
                                if(liste_des_conversions[i].la_valeur_par_defaut_est_caractere===1){
                                    valeur_par_defaut='\''+liste_des_conversions[i].valeur_par_defaut.replace(/\'/g,'\\\'')+'\'';
                                }else{
                                    valeur_par_defaut=liste_des_conversions[i].valeur_par_defaut;
                                }
                            }
                        }
                        src_serveur_js2+='        form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\'] === null || form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\' || form[\'' + liste_des_conversions[i].nom_du_champ + '\']=== undefined ? ( '+valeur_par_defaut+' ):parseInt(form[\'' + liste_des_conversions[i].nom_du_champ + '\'],10);\r\n';
                    }else if(liste_des_conversions[i].espece_du_champ === 'FLOAT'){
                        src_serveur_js2+='        form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                        src_serveur_js2+='form[\'' + liste_des_conversions[i].nom_du_champ + '\'] === null || form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\' || form[\'' + liste_des_conversions[i].nom_du_champ + '\']=== undefined ? ( '+valeur_par_defaut+' ):parseFloat(form[\'' + liste_des_conversions[i].nom_du_champ + '\']);\r\n';
                    }
                }
                src_serveur_js2+='        /* conversion des données numériques fin */\r\n';
            }
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ
                       && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                               && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null)
                ){
                }else{
                    if(obj_champ.genre_objet_du_champ
                               && obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                           || obj_champ.champ_session === true
                    ){
                    }else{
                        if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                            src_serveur_js2+='        if(form[\'' + nom_du_champ + '\'] === null || form[\'' + nom_du_champ + '\']===\'\'){\n';
                            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push(\'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné [\' + this.__gi1.nl2() + \']\');\r\n';
                            src_serveur_js2+='            return{__xst:__xer};\r\n';
                            src_serveur_js2+='        }\n';
                        }
                    }
                    if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_session_genre === 1){
                    }else{
                        if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                            var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                            if(obj1.__xst !== __xsu){
                                return({"__xst" : __xer});
                            }
                            let mat1=obj1.__xva;
                            let l01=mat1.length;
                            for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                                if(mat1[j][2] === 'f'){
                                    src_serveur_js2+='\n';
                                    src_serveur_js2+='        let __test=this.__gi1.__fnt1.' + mat1[j][1] + '(';
                                    if(mat1[j][8] === 0){
                                    }else{
                                        for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                            if(mat1[k][2] === 'c'){
                                                if(mat1[k][4] === 0){
                                                    src_serveur_js2+=mat1[k][1] + ',';
                                                }else{
                                                    /* afr */
                                                    debugger;
                                                    return({"__xst" : __xer});
                                                }
                                            }else{
                                                return({"__xst" : __xer});
                                            }
                                        }
                                    }
                                    src_serveur_js2+='form[\'' + nom_du_champ + '\'],\'' + obj_champ.meta.abrege_du_champ + '\');\r\n';
                                    src_serveur_js2+='        if(__test[\'__xst\']!==__xsu){\n';
                                    src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push(\'erreur sur le contenu de  "' + obj_champ.meta.abrege_du_champ + '" [\' + this.__gi1.nl2() + \']\');\r\n';
                                    src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
                                    src_serveur_js2+='            return{__xst:__xer};\r\n';
                                    src_serveur_js2+='        }\n\n';
                                }else{
                                    return({"__xst" : __xer});
                                }
                            }
                        }
                    }
                }
            }
            src_serveur_js2+='        let __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        let __tac=await this.tests_avant_creer(mat , d , donnees_recues , donnees_retournees , options_generales,form,__db1);\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        if(__tac[\'__xst\'] !== __xsu){\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let donnees_sql={\r\n';
            src_serveur_js2+='            donnees :[{\r\n';
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ
                       && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                }else if(liste_des_champs_insert[i].champ_dans_la_base.meta.est_en_session === '1'){
                    if(liste_des_champs_insert[i].champ_dans_la_base.meta.nom_en_session !== ''){
                        src_serveur_js2+='                    \'' + nom_du_champ + '\' : donnees_retournees.' + liste_des_champs_insert[i].champ_dans_la_base.meta.nom_en_session + ',\n';
                    }else{
                        debugger;
                    }
                }else if(ne_pas_prendre_les_valeurs_en_session === false && obj_champ.champ_pere_est_en_session1 === true){
                    src_serveur_js2+='                    \'' + nom_du_champ + '\' : donnees_retournees.' + obj_champ.champ_pere + ',\n';
                }else if(ne_pas_prendre_les_valeurs_en_session === false
                       && (obj_champ.champ_session === true
                           || obj_champ.champ_pere_est_en_session1 === true)
                ){
                    debugger;
                    src_serveur_js2+='                    \'' + nom_du_champ + '\' : donnees_retournees.' + obj_champ.champ_pere + ',\n';
                }else{
                    if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
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
            src_serveur_js2+='        let tt'+ref_insert+'=await this.__gi1.sql_iii( '+ref_insert+' , donnees_sql , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt'+ref_insert+'[\'__xst\'] === __xsu){\r\n';
            src_serveur_js2+='            if(tt'+ref_insert+'[\'changements\'] === 0){\r\n';
            src_serveur_js2+='                donnees_retournees[\'__xsi\'][\'__xer\'].push( \'l\\\'insertion a échoué [\' + this.__gi1.nl2() + \']\' );\r\n';
            src_serveur_js2+='                return({"__xst" : __xer});\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='            let aac=this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt'+ref_insert+'[\'nouvel_id\'] , form , __db1 );\r\n';
            src_serveur_js2+='            if(aac[\'__xst\'] === __xer){\r\n';
            src_serveur_js2+='                await __db1.exec( \'ROLLBACK;\' );\r\n';
            src_serveur_js2+='                donnees_retournees[\'__xsi\'][\'__xer\'].push( \'les actions après créer ont échouées [\' + this.__gi1.nl2() + \']\' );\r\n';
            src_serveur_js2+='                return({"__xst" : __xer});\r\n';
            src_serveur_js2+='            }\r\n';
            
            src_serveur_js2+='            await __db1.exec(\'COMMIT;\');\r\n';
            src_serveur_js2+='            if(form[\'__mat_liste_si_ok\'] !== \'\'){\r\n';
            src_serveur_js2+='                let mat1=JSON.parse( form[\'__mat_liste_si_ok\'] );\r\n';
            src_serveur_js2+='                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xsu;\r\n';
            src_serveur_js2+='            return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='        }else{\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xsi\'][\'__xer\'].push( tt'+ref_insert+'[\'__xme\']+\'\\nl\\\'insertion a échoué [\' + this.__gi1.nl2() + \']\' );\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xst\']=__xer;\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='    }\r\n';
            
            
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async page_creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
            src_serveur_js2+='        /*\r\n';
            src_serveur_js2+='          page optionnelle si on veut vérifier quelque chose avant de créer un projet\r\n';
            src_serveur_js2+='          dans ce cas, dans le lien de la page, il faudra remplacer :\r\n';
            src_serveur_js2+='          m1(n1(\'+this.moi+\'),f1(page_creer1()))\r\n';
            src_serveur_js2+='          par :\r\n';
            src_serveur_js2+='          pm1(m1(n1(\'+this.moi+\'),f1(page_creer1())))\r\n';
            src_serveur_js2+='        */\r\n';
            src_serveur_js2+='        let __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xva\'][\'nouveau_numero_projet\']=nouveau_numero_projet;\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
            
            
            
            /*
              php
            */
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function creer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
            src_hph+='\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . $d . var_export( $donnees_recues , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $retour_a_la_liste=false;\r\n';
            src_hph+='        $l01=count($mat);\r\n';
            src_hph+='        for($i=$d+1;$i<$l01;$i=$mat[$i][12]){\r\n';
            src_hph+='         if($mat[$i][1]===\'retour_a_la_liste\' && $mat[$i][2]===\'f\'){\r\n';
            src_hph+='          $retour_a_la_liste=true;\r\n';
            src_hph+='         }\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='        $nom_formulaire=$donnees_recues[__xva][\'__co1\'];\r\n';
            src_hph+='        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];\r\n';
            src_hph+='\r\n';
            if(liste_des_conversions.length > 0){
                src_hph+='        /* conversion des données numériques début */\r\n';
                for( let i=0 ; i < liste_des_conversions.length ; i++ ){
                    if(liste_des_conversions[i].espece_du_champ === 'INTEGER'){
                        src_hph+='        $form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                        src_hph+='is_null($form[\'' + liste_des_conversions[i].nom_du_champ + '\']) || $form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:(int)$form[\'' + liste_des_conversions[i].nom_du_champ + '\'];\r\n';
                    }else if(liste_des_conversions[i].espece_du_champ === 'FLOAT'){
                        src_hph+='        $form[\'' + liste_des_conversions[i].nom_du_champ + '\']=';
                        src_hph+='is_null($form[\'' + liste_des_conversions[i].nom_du_champ + '\']) || $form[\'' + liste_des_conversions[i].nom_du_champ + '\']===\'\'?null:(float)$form[\'' + liste_des_conversions[i].nom_du_champ + '\'];\r\n';
                    }
                }
                src_hph+='        /* conversion des données numériques fin */\r\n';
            }
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ
                       && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                               && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null)
                ){
                }else{
                    if(obj_champ.genre_objet_du_champ
                               && obj_champ.genre_objet_du_champ.che_est_session_genre === 1
                           || obj_champ.champ_session === true
                    ){
                    }else{
                        if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 1){
                            src_hph+='        if(is_null($form[\'' + nom_du_champ + '\']) || $form[\'' + nom_du_champ + '\']===\'\'){\n';
                            src_hph+='            $donnees_retournees[__xsi][__xer][]=\'la valeur pour "' + obj_champ.meta.abrege_du_champ + '" doit être renseigné [\' . __LINE__ . \']\';\r\n';
                            src_hph+='            return;\r\n';
                            src_hph+='        }\n';
                        }
                    }
                    if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_session_genre === 1){
                    }else{
                        if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.cht_fonctions_genre !== null){
                            var obj1=__gi1.__rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                            if(obj1.__xst !== __xsu){
                                return({"__xst" : __xer});
                            }
                            let mat1=obj1.__xva;
                            let l01=mat1.length;
                            for( let j=1 ; j < l01 ; j=mat1[j][12] ){
                                if(mat1[j][2] === 'f'){
                                    src_hph+='\n';
                                    src_hph+='        $__test=$GLOBALS[\'__fnt1\']->' + mat1[j][1] + '(';
                                    if(mat1[j][8] === 0){
                                    }else{
                                        for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                                            if(mat1[k][2] === 'c'){
                                                if(mat1[k][4] === 0){
                                                    src_hph+=mat1[k][1] + ',';
                                                }else{
                                                    /* afr */
                                                    debugger;
                                                    return({"__xst" : __xer});
                                                }
                                            }else{
                                                return({"__xst" : __xer});
                                            }
                                        }
                                    }
                                    src_hph+='$form[\'' + nom_du_champ + '\'],$donnees_retournees);\r\n';
                                    src_hph+='        if($__test[__xst]!==__xsu){\n';
                                    src_hph+='            $donnees_retournees[__xsi][__xer][]=\'erreur sur le contenu de  "' + obj_champ.meta.abrege_du_champ + '" [\' . __LINE__ . \']\';\r\n';
                                    src_hph+='            $donnees_retournees[__xst]=__xer;\r\n';
                                    src_hph+='            return;\r\n';
                                    src_hph+='        }\n\n';
                                }else{
                                    return({"__xst" : __xer});
                                }
                            }
                        }
                    }
                }
            }
            src_hph+='        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);\r\n';
            src_hph+='        if($__tests_avant_creer[__xst]!==__xsu){\r\n';
            src_hph+='            return;\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $retour_a_la_liste , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='        $donnees_sql=array( array(/**/\n';
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ
                       && (obj_champ.genre_objet_du_champ.che_est_tsm_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || obj_champ.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                }else if(liste_des_champs_insert[i].champ_dans_la_base.meta.est_en_session === '1'){
                    if(liste_des_champs_insert[i].champ_dans_la_base.meta.nom_en_session !== ''){
                        src_hph+='                    \'' + nom_du_champ + '\' => $_SESSION[_CA_][\'' + liste_des_champs_insert[i].champ_dans_la_base.meta.nom_en_session + '\'],\n';
                    }else{
                        debugger;
                    }
                }else if(ne_pas_prendre_les_valeurs_en_session === false && obj_champ.champ_pere_est_en_session1 === true){
                    src_hph+='                    \'' + nom_du_champ + '\' => $_SESSION[_CA_][\'' + obj_champ.champ_pere + '\'],\n';
                }else if(ne_pas_prendre_les_valeurs_en_session === false
                       && (obj_champ.champ_session === true
                           || obj_champ.champ_pere_est_en_session1 === true)
                ){
                    debugger;
                    src_hph+='                    \'' + nom_du_champ + '\' => $_SESSION[_CA_][\'' + obj_champ.champ_pere + '\'],\n';
                }else{
                    if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                        src_hph+='                    \'' + nom_du_champ + '\' => $form[\'' + nom_du_champ + '\']===\'\'?NULL:$form[\'' + nom_du_champ + '\'],\n';
                    }else{
                        src_hph+='                    \'' + nom_du_champ + '\' => $form[\'' + nom_du_champ + '\'],\n';
                    }
                }
            }
            src_hph+='        ));\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' $donnees_sql = <pre>\' . var_export( $donnees_sql , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $tt' + ref_insert + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_insert + '()*/ ' + ref_insert + ',\r\n';
            src_hph+='            $donnees_sql,\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='        if( $tt' + ref_insert + '[__xst]===__xsu && $tt' + ref_insert + '[\'changements\']===1 ){\r\n';
            src_hph+='\r\n';
            src_hph+='            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt' + ref_insert + '[\'nouvel_id\'],$form);\r\n';
            src_hph+='\r\n';
            src_hph+='            if($retour_a_la_liste===false  ){\r\n';
            src_hph+='\r\n';
            src_hph+='              $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt' + ref_insert + '[\'nouvel_id\']);\r\n';
            src_hph+='              return;\r\n';
            src_hph+='            }\r\n';
            src_hph+='            if(isset($form[\'__mat_liste_si_ok\'])){\r\n';
            src_hph+='\r\n';
            src_hph+='              $mat1=json_decode($form[\'__mat_liste_si_ok\'],true);\r\n';
            src_hph+='//              echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $mat1 , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='              $d=1;\r\n';
            src_hph+='              $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);\r\n';
            src_hph+='            }\r\n';
            src_hph+='\r\n';
            src_hph+='        }\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
        }
        if(ref_liste_ecran !== ''){
         
            
            src_serveur_js2+='    /*\r\n';
            src_serveur_js2+='      =============================================================================================================\r\n';
            src_serveur_js2+='    */\r\n';
            src_serveur_js2+='    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){\r\n';
            src_serveur_js2+='        const __nbMax=40;\r\n';
            src_serveur_js2+='        let __num_page=0;\r\n';
            src_serveur_js2+='        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        if(!formulaire.hasOwnProperty( \'__num_page\' ) || !this.__gi1.est_num( formulaire.__num_page )){\r\n';
            src_serveur_js2+='            __num_page=0;\r\n';
            src_serveur_js2+='        }else{\r\n';
            src_serveur_js2+='            __num_page=parseInt( formulaire.__num_page , 10 );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let __debut=__num_page * __nbMax;\r\n';
            src_serveur_js2+='        let criteres'+ref_liste_ecran+'={\r\n';
            src_serveur_js2+='             /*  */\r\n';
            src_serveur_js2+='            "quantitee" : __nbMax ,\r\n';
            src_serveur_js2+='            "debut" : __debut\r\n';
            src_serveur_js2+='        };\r\n';
            src_serveur_js2+='        for(let i in formulaire){\r\n';
            src_serveur_js2+='            if(i !== \'__num_page\'){\r\n';
            src_serveur_js2+='                criteres'+ref_liste_ecran+'[i]=formulaire[i];\r\n';
            src_serveur_js2+='            }\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(__db1===null){\r\n';
            src_serveur_js2+='            __db1=await this.__gi1.ouvrir_bdd( donnees_retournees.chi_id_projet , options_generales );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='\r\n';
            src_serveur_js2+='        let tt'+ref_liste_ecran+'=await this.__gi1.sql_iii( '+ref_liste_ecran+' , criteres'+ref_liste_ecran+' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        if(tt'+ref_liste_ecran+'.__xst !== __xsu){\r\n';
            src_serveur_js2+='            return({"__xst" : __xer});\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        if(tt'+ref_liste_ecran+'[\'__xst\'] === __xsu && tt'+ref_liste_ecran+'[\'__xva\'].length === 0 && __debut > 0){\r\n';
            src_serveur_js2+='            __debut=0;\r\n';
            src_serveur_js2+='            __num_page=0;\r\n';
            src_serveur_js2+='            criteres'+ref_liste_ecran+'[\'debut\']=__debut;\r\n';
            src_serveur_js2+='            let tt'+ref_liste_ecran+'=await this.__gi1.sql_iii( '+ref_liste_ecran+' , criteres'+ref_liste_ecran+' , donnees_retournees , __db1 );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        donnees_retournees.__xva[\'__nbMax\']=__nbMax;\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xva\'][\'__debut\']=__debut;\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xva\'][\'__num_page\']=__num_page;\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xac\']=\'pm1(m1(n1(\' + this.moi + \'),f1(\' + this.fonction_liste + \'(\';\r\n';
            src_serveur_js2+='        for(let i in formulaire){\r\n';
            src_serveur_js2+='            donnees_retournees[\'__xac\']+=this.__gi1.__fnt1.critere_liste( formulaire , i );\r\n';
            src_serveur_js2+='        }\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xac\']+=\'))))\';\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xva\'][this.fonction_liste]=tt'+ref_liste_ecran+';\r\n';
            src_serveur_js2+='        donnees_retournees[\'__xst\']=__xsu;\r\n';
            src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
            src_serveur_js2+='    }\r\n';
            src_serveur_js2+='\r\n';
            
            /*
              serveur php
            */
            src_hph+='    /*\r\n';
            src_hph+='      =============================================================================================================\r\n';
            src_hph+='    */\r\n';
            src_hph+='    function filtre1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
            src_hph+='        $__nbMax=40;\r\n';
            src_hph+='\r\n';
            src_hph+='        $form=$GLOBALS[\'__fnt1\']->debut_filtre1($mat,$d,$donnees_retournees,$donnees_recues,$this->fonction_liste);\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='        if(!isset($form[\'$__num_page\'])){\r\n';
            src_hph+='          $__num_page=0;\r\n';
            src_hph+='        }else{\r\n';
            src_hph+='          $__num_page=(int)($form[\'$__num_page\']);\r\n';
            src_hph+='        }\r\n';
            src_hph+='        $__debut=$__num_page * $__nbMax;\r\n';
            src_hph+='\r\n';
            src_hph+='        $criteres' + ref_liste_ecran + '=array(\r\n';
            src_hph+='            /**/\r\n';
            src_hph+='            \'quantitee\' => $__nbMax,\r\n';
            src_hph+='            \'debut\' => $__debut\r\n';
            src_hph+='        );\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $form , true ) . \'</pre>\' ; exit(0);\r\n';
            for(let i in liste_des_champs_condition_liste_ecran){
                if(liste_des_champs_condition_liste_ecran[i].hasOwnProperty( 'champ_pere_est_en_session' )
                       && liste_des_champs_condition_liste_ecran[i].champ_pere_est_en_session === true
                ){
                    /*
                      exemple : les tâches de l'utilisateur
                      $criteres112['T0_chx_utilisateur_tache']=$_SESSION[_CA_]['chi_id_utilisateur'];
                      mais si on croise la table têche avec la table utilisateurs dans cette requête, ce sera réécrit dans la boucle plus bas
                    */
                    src_hph+='        /*\r\n';
                    src_hph+='          ajout de la valeur en session\r\n';
                    src_hph+='        */\r\n';
                    if(ne_pas_prendre_les_valeurs_en_session === true){
                        src_hph+='        /*\r\n';
                    }
                    src_hph+='        $criteres' + ref_liste_ecran + '[\'' + liste_des_champs_condition_liste_ecran[i].préfixe_du_champ + '_' + liste_des_champs_condition_liste_ecran[i].nom_du_champ + '\']=';
                    src_hph+='$_SESSION[_CA_][\'' + liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.nom_du_champ_session1 + '\'];\r\n';
                    if(ne_pas_prendre_les_valeurs_en_session === true){
                        src_hph+='        */\r\n';
                    }
                }
            }
            src_hph+='        foreach($form as $k1=> $v1){\r\n';
            src_hph+='         if($k1!==\'$__num_page\'){\r\n';
            src_hph+='          $criteres' + ref_liste_ecran + '[$k1]=$form[$k1];\r\n';
            src_hph+='         }\r\n';
            src_hph+='        }\r\n';
            src_hph+='        //echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $criteres' + ref_liste_ecran + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            /* $criteres112['T0_chx_utilisateur_tache']=$_SESSION[_CA_]['chi_id_utilisateur']; */
            src_hph+='\r\n';
            src_hph+='        $tt' + ref_liste_ecran + '=$this->sql0->sql_iii(\r\n';
            src_hph+='             /*sql_' + ref_liste_ecran + '()*/ ' + ref_liste_ecran + ',\r\n';
            src_hph+='            $criteres' + ref_liste_ecran + ',\r\n';
            src_hph+='            $donnees_retournees\r\n';
            src_hph+='        );\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $tt' + ref_liste_ecran + '[__xst]===__xsu && count($tt' + ref_liste_ecran + '[__xva])===0 && $__debut>0 , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        if($tt' + ref_liste_ecran + '[__xst]===__xsu && count($tt' + ref_liste_ecran + '[__xva])===0 && $__debut>0 ){\r\n';
            src_hph+='            $__debut=0;\r\n';
            src_hph+='            $__num_page=0;\r\n';
            src_hph+='            $criteres' + ref_liste_ecran + '[\'debut\']=$__debut;\r\n';
            src_hph+='            $tt' + ref_liste_ecran + '=$this->sql0->sql_iii(\r\n';
            src_hph+='                 /*sql_' + ref_liste_ecran + '()*/ ' + ref_liste_ecran + ',\r\n';
            src_hph+='                $criteres' + ref_liste_ecran + ',\r\n';
            src_hph+='                $donnees_retournees\r\n';
            src_hph+='            );\r\n';
            src_hph+='//            echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $tt' + ref_liste_ecran + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        }\r\n';
            src_hph+='        //echo __FILE__ . \' \' . __LINE__ . \' $tt' + ref_liste_ecran + ' = <pre>\' . var_export( $tt' + ref_liste_ecran + ' , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='\r\n';
            src_hph+='        $donnees_retournees[__xva][\'$__nbMax\']=$__nbMax;\r\n';
            src_hph+='        $donnees_retournees[__xva][\'$__debut\']=$__debut;\r\n';
            src_hph+='        $donnees_retournees[__xva][\'$__num_page\']=$__num_page;\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $donnees_retournees[__xac] , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='//\r\n';
            src_hph+='        $donnees_retournees[__xac]=\'\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\'pm1(\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\' m1(\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\'  n1(\'.__CLASS__.\')\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\'  f1(\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\'   \'.$this->fonction_liste.\'(\';\r\n';
            src_hph+='        foreach($form as $k1=>$v1){\r\n';
            src_hph+='            $donnees_retournees[__xac].=critere_liste($form,$k1);\r\n';
            src_hph+='        }\r\n';
            src_hph+='        $donnees_retournees[__xac].=\'   )\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\'  )\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\' )\';\r\n';
            src_hph+='        $donnees_retournees[__xac].=\')\';\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . $donnees_retournees[__xac]  . \'</pre>\' ; exit(0);\r\n';
            src_hph+='\r\n';
            src_hph+='//        echo __FILE__ . \' \' . __LINE__ . \' __LINE__ = <pre>\' . var_export( $this->fonction_liste , true ) . \'</pre>\' ; exit(0);\r\n';
            src_hph+='        $donnees_retournees[__xva][$this->fonction_liste]=$tt' + ref_liste_ecran + ';\r\n';
            src_hph+='        $donnees_retournees[__xst]=__xsu;\r\n';
            src_hph+='\r\n';
            src_hph+='    }\r\n';
        }
        
        /*
        
        
        
        */
        
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    page_creer1( mat , d , dupliquer=null){\r\n';
        src_client2+='\r\n';
        src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='        if(a===null){\r\n';
        src_client2+='            this.__gi1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
        src_client2+='        }\r\n';
        src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='\r\n';
        src_client2+='        if(a.innerHTML === \'création \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
        src_client2+='        }else{\r\n';
        src_client2+='            a.innerHTML=\'création \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
        src_client2+='            this.__gi1.afficher_les_zones( \'vv_ecran_creation\' );\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        let o1=\'\';\r\n';
        if(ref_insert !== ''){
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.hasOwnProperty( 'table_mere' )
                       && obj_champ.hasOwnProperty( 'champ_pere' )
                       && obj_champ.table_mere !== ''
                       && obj_champ.champ_pere !== ''
                ){
                    if(ne_pas_prendre_les_valeurs_en_session === false
                           && (this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_est_en_session1' )
                                   && this.#obj_table.champs[nom_du_champ]['champ_est_en_session1'] === true
                               || this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_pere_est_en_session1' )
                                   && this.#obj_table.champs[nom_du_champ]['champ_pere_est_en_session1'] === true)
                    ){
                        /*
                          on ne met pas 
                        */
                    }else{
                        src_client2+='    /*\r\n';
                        src_client2+='\r\n';
                        src_client2+='    */\r\n';
                        src_client2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                        src_client2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                        src_client2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                        src_client2+='        o1 += \'    </div>\' ;\r\n';
                        src_client2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                        src_client2+='        o1 += \'        <input \';\r\n';
                        src_client2+='        o1 += \' id="' + obj_champ.nom_du_champ + '" \' ;\r\n';
                        src_client2+='        o1 += \' type="hidden" \';\r\n';
                        src_client2+='        o1 += \' value="\' ;\r\n';
                        src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        src_client2+='            o1+=this.__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'])  ;\r\n';
                        src_client2+='        }else{\r\n';
                        if(this.#obj_table.champs[obj_champ.nom_du_champ].a_une_valeur_par_defaut === 1){
                            if(this.#obj_table.champs[obj_champ.nom_du_champ].la_valeur_par_defaut_est_caractere === 1){
                                src_client2+='          o1+=\'' + this.__gi1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                            }else{
                                if(this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut.toLowerCase() === 'null'){
                                    src_client2+='          o1+=\'\';\r\n';
                                }else{
                                    src_client2+='          o1+=\'' + this.__gi1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                                }
                            }
                        }else{
                            src_client2+='          o1+=\'\';\r\n';
                        }
                        src_client2+='        }\r\n';
                        src_client2+='        o1+=\'"\';\r\n';
                        src_client2+='        o1+=\' />\';\r\n';
                        src_client2+='\r\n';
                        src_client2+='        o1 += \'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                        src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        src_client2+='            if(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'] === null){\r\n';
                        src_client2+='                o1 += \'*indéfini\' ;\r\n';
                        src_client2+='            }else{\r\n';
                        src_client2+='                o1 +=  \'(\'+dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                        let indice_jointure=0;
                        for( let j=0 ; j < les_jointures.length ; j++ ){
                            if(les_jointures[j].alias2 === 'T0'
                                   && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                                   && obj_champ.nom_du_champ === les_jointures[j].champ2
                            ){
                                indice_jointure=j;
                                for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                    src_client2+='                o1 +=  this.__gi1.fi2(';
                                    src_client2+='dupliquer[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']';
                                    src_client2+=');\r\n';
                                }
                            }else if(les_jointures[j].alias1 === 'T0'
                                   && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                                   && obj_champ.nom_du_champ === les_jointures[j].champ1
                            ){
                                indice_jointure=j;
                                for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                    src_client2+='                o1 +=  this.__gi1.fi2(';
                                    src_client2+='dupliquer[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']';
                                    src_client2+=');\r\n';
                                }
                            }
                        }
                        src_client2+='            }\r\n';
                        src_client2+='        }else{\r\n';
                        if(this.#obj_table.champs[obj_champ.nom_du_champ].hasOwnProperty( 'valeur_par_defaut' )){
                            src_client2+='          o1+=\'' + this.__gi1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                        }else{
                            src_client2+='          o1+=\'*indéfini\';\r\n';
                        }
                        src_client2+='        }\r\n';
                        src_client2+='        o1 += \'</span>\' ;\r\n';
                        src_client2+='        /*;\r\n';
                        src_client2+='        */;\r\n';
                        var nom_de_la_classe_lien='';
                        if(les_jointures[indice_jointure].nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                            nom_de_la_classe_lien='' + les_jointures[indice_jointure].nom_de_la_table.substr( 4 ) + '1';
                            console.log( '%c lien vers "' + nom_de_la_classe_lien + '" ' , 'background:lightgreen; color:black;' );
                        }else{
                            console.log( '%c attention, la table parente ne commence pas par "tbl_" pour le champ ""' , 'background:red; color:yellow;' );
                        }
                        src_client2+='        o1+=this.__gi1.lien_parent(\'' + nom_de_la_classe_lien + '\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\');\r\n';
                        src_client2+='        /**/;\r\n';
                        src_client2+='\r\n';
                        src_client2+='\r\n';
                        src_client2+='\r\n';
                        src_client2+='        o1 += \'    </div>\' ;\r\n';
                        src_client2+='        o1 += \'  </div>\' ;\r\n';
                        src_client2+='\r\n';
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
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                            size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
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
                        src_client2+='            o1+=this.__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                        src_client2+='        }else{\n';
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
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
                        src_client2+='        o1 +=this.__gi1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        src_client2+='        o1 += \'    </div>\';\r\n';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                            src_client2+='        o1 += \'      <br />\';\r\n';
                            for(let opt in tab){
                                src_client2+='';
                                src_client2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                src_client2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                src_client2+='">' + tab[opt] + '</div>\';\r\n';
                            }
                        }
                    }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                        src_client2+='        o1 += \'        <div class="yy_conteneur_txtara">\';\r\n';
                        let format_source='';
                        if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                            src_client2+='        o1+=\'            <div>\\r\\n\';\r\n';
                            src_client2+='        o1+=\'              \'+this.__gi1.__fnt1.boutons_rev3(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            src_client2+='        o1+=\'            </div>\\r\\n\';\r\n';
                            format_source=' data-editeur1="rev" ';
                        }else if(obj_champ.cht_particularités_genre.source_non_rev === 1){
                            src_client2+='        o1+=\'            <div>\\r\\n\';\r\n';
                            src_client2+='        o1+=\'              \'+this.__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            src_client2+='        o1+=\'            </div>\\r\\n\';\r\n';
                            format_source=' data-editeur1="source_editeur1" ';
                        }else{
                            src_client2+='        o1+=\'            <div>\\r\\n\';\r\n';
                            src_client2+='        o1+=\'              \'+this.__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            src_client2+='        o1+=\'            </div>\\r\\n\';\r\n';
                        }
                        src_client2+='        o1 += \'            <textarea ' + format_source + ' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\r\n';
                        src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        src_client2+='            o1+=this.__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                        src_client2+='        }else{\n';
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
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
                                src_client2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
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
                            src_client2+='            o1+=this.__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                            src_client2+='        }else{\n';
                            /* champ entier standard */
                            if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
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
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                                debugger;
                            }
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                                src_client2+='        o1 += \'        <input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" value="\';\r\n';
                                src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                src_client2+='            o1+=this.__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                src_client2+='        }else{\n';
                                src_client2+='            o1 += \'0\';\r\n';
                                src_client2+='        }\n';
                                src_client2+='        o1 += \'" >\';\r\n';
                            }else{
                                /*
                                  un champ entier qui comporte des valeurs discrètes
                                */
                                src_client2+='        o1 += \'        <input type="text" id="' + obj_champ.nom_du_champ + '"  value="\';\r\n';
                                src_client2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                src_client2+='            o1+=this.__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                src_client2+='        }else{\n';
                                src_client2+='            o1 += \'0\';\r\n';
                                src_client2+='        }\n';
                                src_client2+='        o1 += \'" >\';\r\n';
                                let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                                src_client2+='        o1 += \'      <br />\';\r\n';
                                for(let opt in tab){
                                    src_client2+='';
                                    src_client2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                    src_client2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                    src_client2+='">' + tab[opt] + '</div>\';\r\n';
                                }
                            }
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
        src_client2+='            cmd+=i+\'(\\\'\'+this.__gi1.fi2(this.filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
        src_client2+='          }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        cmd+=\')\';\r\n';
        src_client2+='        let obj2=this.__gi1.__rev1.rev_tm(cmd);\r\n';
        src_client2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
        src_client2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" size="128" value="\'+this.__gi1.fi2(jso)+\'" />\';\r\n';
        src_client2+='\r\n';
        src_client2+='        document.getElementById( \'vv_ecran_creation_zone_contenu\' ).innerHTML=o1;\r\n';
        src_client2+='        this.__gi1.maj_hash(mat,0);\r\n';
        src_client2+='        this.__gi1.maj_title_htm1(\'création \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
        src_client2+='        this.__gi1.ajoute_les_evenements_aux_boutons();\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        
        
        
        /*
        
        
        
        */
        
        
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    page_creer1( mat , d , dupliquer=null){\r\n';
        o2+='\r\n';
        o2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='        if(a===null){\r\n';
        o2+='            __gi1.initialisation_des_zones(\'\'+this.moi+\'\');\r\n';
        o2+='        }\r\n';
        o2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='\r\n';
        o2+='        if(a.innerHTML === \'création \'+this.DUN_DUNE_ELEMENT_GERE){\r\n';
        o2+='        }else{\r\n';
        o2+='            a.innerHTML=\'création \'+this.DUN_DUNE_ELEMENT_GERE;\r\n';
        o2+='            __gi1.afficher_les_zones( \'vv_ecran_creation\' );\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        let o1=\'\';\r\n';
        if(ref_insert !== ''){
            for( let i=0 ; i < liste_des_champs_insert.length ; i++ ){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.hasOwnProperty( 'table_mere' )
                       && obj_champ.hasOwnProperty( 'champ_pere' )
                       && obj_champ.table_mere !== ''
                       && obj_champ.champ_pere !== ''
                ){
                    if(ne_pas_prendre_les_valeurs_en_session === false
                           && (this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_est_en_session1' )
                                   && this.#obj_table.champs[nom_du_champ]['champ_est_en_session1'] === true
                               || this.#obj_table.champs[nom_du_champ].hasOwnProperty( 'champ_pere_est_en_session1' )
                                   && this.#obj_table.champs[nom_du_champ]['champ_pere_est_en_session1'] === true)
                    ){
                        /*
                          on ne met pas 
                        */
                    }else{
                        o2+='    /*\r\n';
                        o2+='\r\n';
                        o2+='    */\r\n';
                        o2+='        o1 += \'  <div class="yy_edition_champ1">\' ;\r\n';
                        o2+='        o1 += \'    <div class="yy_edition_libelle1">\' ;\r\n';
                        o2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\' ;\r\n';
                        o2+='        o1 += \'    </div>\' ;\r\n';
                        o2+='        o1 += \'    <div class="yy_edition_valeur1">\' ;\r\n';
                        o2+='        o1 += \'        <input \';\r\n';
                        o2+='        o1 += \' id="' + obj_champ.nom_du_champ + '" \' ;\r\n';
                        o2+='        o1 += \' type="hidden" \';\r\n';
                        o2+='        o1 += \' value="\' ;\r\n';
                        o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        o2+='            o1+=__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'])  ;\r\n';
                        o2+='        }else{\r\n';
                        if(this.#obj_table.champs[obj_champ.nom_du_champ].a_une_valeur_par_defaut === 1){
                            if(this.#obj_table.champs[obj_champ.nom_du_champ].la_valeur_par_defaut_est_caractere === 1){
                                o2+='          o1+=\'' + __gi1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                            }else{
                                if(this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut.toLowerCase() === 'null'){
                                    o2+='          o1+=\'\';\r\n';
                                }else{
                                    o2+='          o1+=\'' + __gi1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                                }
                            }
                        }else{
                            o2+='          o1+=\'\';\r\n';
                        }
                        o2+='        }\r\n';
                        o2+='        o1+=\'"\';\r\n';
                        o2+='        o1+=\' />\';\r\n';
                        o2+='\r\n';
                        o2+='        o1 += \'        <span id="' + obj_champ.nom_du_champ + '_libelle">\';\r\n';
                        o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        o2+='            if(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\'] === null){\r\n';
                        o2+='                o1 += \'*indéfini\' ;\r\n';
                        o2+='            }else{\r\n';
                        o2+='                o1 +=  \'(\'+dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']+\') \' ;\r\n';
                        let indice_jointure=0;
                        for( let j=0 ; j < les_jointures.length ; j++ ){
                            if(les_jointures[j].alias2 === 'T0'
                                   && les_jointures[j].alias_de_la_table === les_jointures[j].alias1
                                   && obj_champ.nom_du_champ === les_jointures[j].champ2
                            ){
                                indice_jointure=j;
                                for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                    o2+='                o1 +=  __gi1.fi2(';
                                    o2+='dupliquer[\'' + les_jointures[j].alias1 + '.' + les_jointures[j].libelles_lien[k] + '\']';
                                    o2+=');\r\n';
                                }
                            }else if(les_jointures[j].alias1 === 'T0'
                                   && les_jointures[j].alias_de_la_table === les_jointures[j].alias2
                                   && obj_champ.nom_du_champ === les_jointures[j].champ1
                            ){
                                indice_jointure=j;
                                for( let k=0 ; k < les_jointures[j].libelles_lien.length ; k++ ){
                                    o2+='                o1 +=  __gi1.fi2(';
                                    o2+='dupliquer[\'' + les_jointures[j].alias2 + '.' + les_jointures[j].libelles_lien[k] + '\']';
                                    o2+=');\r\n';
                                }
                            }
                        }
                        o2+='            }\r\n';
                        o2+='        }else{\r\n';
                        if(this.#obj_table.champs[obj_champ.nom_du_champ].hasOwnProperty( 'valeur_par_defaut' )){
                            o2+='          o1+=\'' + __gi1.fi1( this.#obj_table.champs[obj_champ.nom_du_champ].valeur_par_defaut ) + '\';\r\n';
                        }else{
                            o2+='          o1+=\'*indéfini\';\r\n';
                        }
                        o2+='        }\r\n';
                        o2+='        o1 += \'</span>\' ;\r\n';
                        o2+='        /*;\r\n';
                        o2+='        */;\r\n';
                        var nom_de_la_classe_lien='';
                        if(les_jointures[indice_jointure].nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                            nom_de_la_classe_lien='c_' + les_jointures[indice_jointure].nom_de_la_table.substr( 4 ) + '1';
                            console.log( '%c lien vers "' + nom_de_la_classe_lien + '" ' , 'background:lightgreen; color:black;' );
                        }else{
                            console.log( '%c attention, la table parente ne commence pas par "tbl_" pour le champ ""' , 'background:red; color:yellow;' );
                        }
                        o2+='        o1+=__gi1.lien_parent(\'' + nom_de_la_classe_lien + '\',\'' + obj_champ.nom_du_champ + '\',\'' + obj_champ.nom_du_champ + '_libelle\');\r\n';
                        o2+='        /**/;\r\n';
                        o2+='\r\n';
                        o2+='\r\n';
                        o2+='\r\n';
                        o2+='        o1 += \'    </div>\' ;\r\n';
                        o2+='        o1 += \'  </div>\' ;\r\n';
                        o2+='\r\n';
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
                    o2+='        /*\n';
                    o2+='          =====================================================================================================\n';
                    o2+='        */\n';
                    o2+='        o1 += \'  <div class="yy_edition_champ1">\';\r\n';
                    o2+='        o1 += \'    <div class="yy_edition_libelle1">\';\r\n';
                    o2+='        o1 += \'      <span>' + obj_champ.meta.abrege_du_champ + '</span>\';\r\n';
                    o2+='        o1 += \'    </div>\';\r\n';
                    o2+='        o1 += \'    <div class="yy_edition_valeur1">\';\r\n';
                    if('chp_nom_en_session_genre' === obj_champ.nom_du_champ){
                        /* debugger; */
                    }
                    if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre <= 64){
                            size=' size="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        }
                        o2+='        o1 += \'      <input ';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            o2+=' disabled ';
                        }
                        o2+=' type="text" ' + size + ' ';
                        o2+=' maxlength="' + obj_champ.genre_objet_du_champ.che_longueur_genre + '" ';
                        o2+=' id="' + obj_champ.nom_du_champ + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ';
                        o2+=' value="\';\r\n';
                        o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        o2+='            o1+=__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                        o2+='        }else{\n';
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                            o2+='            o1 += \'\';\r\n';
                        }else{
                            o2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                  ( 
                                    ''
                                  ) : ( 
                                    obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                  )) + '\';\r\n';
                        }
                        o2+='        }\n';
                        o2+='        o1 += \'" />\';\r\n';
                        o2+='        o1 += \'    <div>\';\r\n';
                        o2+='        o1 +=__gi1.__fnt1.boutons_edition_text( \'' + obj_champ.nom_du_champ + '\' );\r\n';
                        o2+='        o1 += \'    </div>\';\r\n';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                            o2+='        o1 += \'      <br />\';\r\n';
                            for(let opt in tab){
                                o2+='';
                                o2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                o2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                o2+='">' + tab[opt] + '</div>\';\r\n';
                            }
                        }
                    }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'TEXT'){
                        o2+='        o1 += \'        <div class="yy_conteneur_txtara">\';\r\n';
                        let format_source='';
                        if(obj_champ.cht_particularités_genre.source_au_format_rev === 1){
                            o2+='        o1+=\'            <div>\\r\\n\';\r\n';
                            o2+='        o1+=\'              \'+__gi1.__fnt1.boutons_rev3(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            o2+='        o1+=\'            </div>\\r\\n\';\r\n';
                            format_source=' data-editeur1="rev" ';
                        }else if(obj_champ.cht_particularités_genre.source_non_rev === 1){
                            o2+='        o1+=\'            <div>\\r\\n\';\r\n';
                            o2+='        o1+=\'              \'+__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            o2+='        o1+=\'            </div>\\r\\n\';\r\n';
                            format_source=' data-editeur1="source_editeur1" ';
                        }else{
                            o2+='        o1+=\'            <div>\\r\\n\';\r\n';
                            o2+='        o1+=\'              \'+__gi1.__fnt1.boutons_edition1(\'' + obj_champ.nom_du_champ + '\');\r\n';
                            o2+='        o1+=\'            </div>\\r\\n\';\r\n';
                        }
                        o2+='        o1 += \'            <textarea ' + format_source + ' id="' + obj_champ.nom_du_champ + '" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\r\n';
                        o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                        o2+='            o1+=__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                        o2+='        }else{\n';
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                            o2+='            o1 += \'\';\r\n';
                        }else{
                            o2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                  ( 
                                    ''
                                  ) : ( 
                                    obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                  )) + '\';\r\n';
                        }
                        o2+='        }\n';
                        o2+='        o1 += \'</textarea>\';\r\n';
                        o2+='        o1 += \'        </div>\';\r\n';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                            o2+='        o1 += \'      <br />\';\r\n';
                            for(let opt in tab){
                                o2+='';
                                o2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                o2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                o2+='">' + tab[opt] + '</div>\';\r\n';
                            }
                            debugger;
                        }
                    }else if(obj_champ.genre_objet_du_champ && obj_champ.genre_objet_du_champ.chp_espece_genre === 'INTEGER'){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre === null || obj_champ.genre_objet_du_champ.cht_parmis_genre === ''){
                            o2+='        o1 += \'      <input type="number" ';
                            if(obj_champ.hasOwnProperty( 'longueur_du_champ' ) && obj_champ.longueur_du_champ > 0 && obj_champ.longueur_du_champ <= 18){
                                /* 18 caractères max */
                                o2+=' size="' + obj_champ.longueur_du_champ + '" maxlength="' + obj_champ.longueur_du_champ + '" max="' + '9'.repeat( obj_champ.longueur_du_champ ) + '" style="width:' + (obj_champ.longueur_du_champ + 2) + 'em;"';
                            }else{
                                o2+=' size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999" ';
                            }
                            o2+=' id="' + obj_champ.nom_du_champ + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="\';\r\n';
                            o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                            o2+='            o1+=__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                            o2+='        }else{\n';
                            /* champ entier standard */
                            if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre === 0){
                                o2+='            o1 += \'\';\r\n';
                            }else{
                                o2+='            o1 += \'' + (obj_champ.genre_objet_du_champ.cht_valeur_init_genre === null ?
                                      ( 
                                        ''
                                      ) : ( 
                                        obj_champ.genre_objet_du_champ.cht_valeur_init_genre
                                      )) + '\';\r\n';
                            }
                            o2+='        }\n';
                            o2+='        o1 += \'"/>\';\r\n';
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre !== null && obj_champ.genre_objet_du_champ.cht_parmis_genre !== ''){
                                debugger;
                            }
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre === '0,1'){
                                o2+='        o1 += \'        <input type="range" id="' + obj_champ.nom_du_champ + '" class="yy_ouinon" min="0" max="1" step="1" value="\';\r\n';
                                o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                o2+='            o1+=__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                o2+='        }else{\n';
                                o2+='            o1 += \'0\';\r\n';
                                o2+='        }\n';
                                o2+='        o1 += \'" >\';\r\n';
                            }else{
                                /*
                                  un champ entier qui comporte des valeurs discrètes
                                */
                                o2+='        o1 += \'        <input type="text" id="' + obj_champ.nom_du_champ + '"  value="\';\r\n';
                                o2+='        if(dupliquer && dupliquer.hasOwnProperty(\'T0.' + obj_champ.nom_du_champ + '\')){\r\n';
                                o2+='            o1+=__gi1.fi2(dupliquer[\'T0.' + obj_champ.nom_du_champ + '\']);\r\n';
                                o2+='        }else{\n';
                                o2+='            o1 += \'0\';\r\n';
                                o2+='        }\n';
                                o2+='        o1 += \'" >\';\r\n';
                                let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split( ',' );
                                o2+='        o1 += \'      <br />\';\r\n';
                                for(let opt in tab){
                                    o2+='';
                                    o2+='        o1 += \'      <div class="rev_bouton" data-rev_click="';
                                    o2+='m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(' + obj_champ.nom_du_champ + '),valeur(valeur_constante(' + tab[opt] + ')))))';
                                    o2+='">' + tab[opt] + '</div>\';\r\n';
                                }
                            }
                        }
                    }else{
                        /*
                          afr
                        */
                        debugger;
                    }
                    o2+='        o1 += \'    </div>\';\r\n';
                    o2+='        o1 += \'  </div>\';\r\n';
                }
            }
        }
        /*
        
        
        
        
        */
        o2+='        /*\r\n';
        o2+='          =====================================================================================================\r\n';
        o2+='        */\r\n';
        o2+='        let cmd=\'\';\r\n';
        o2+='        cmd+=\'liste1(\';\r\n';
        o2+='        for(let i in  this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='          if(this.$filtres[this.fonction_liste][i]!==\'\'){\r\n';
        o2+='            cmd+=i+\'(\\\'\'+__gi1.fi2(this.$filtres[this.fonction_liste][i])+\'\\\')\';\r\n';
        o2+='          }\r\n';
        o2+='        }\r\n';
        o2+='        cmd+=\')\';\r\n';
        o2+='        let obj2=__gi1.__rev1.rev_tm(cmd);\r\n';
        o2+='        let jso=JSON.stringify(obj2.__xva);\r\n';
        o2+='        o1+=\'      <input type="hidden" id="__mat_liste_si_ok" size="128" value="\'+__gi1.fi2(jso)+\'" />\';\r\n';
        o2+='\r\n';
        o2+='        document.getElementById( \'vv_ecran_creation_zone_contenu\' ).innerHTML=o1;\r\n';
        o2+='        __gi1.maj_hash(mat,0);\r\n';
        o2+='        __gi1.maj_title_htm1(\'création \'+this.DUN_DUNE_ELEMENT_GERE);\r\n';
        o2+='        __gi1.ajoute_les_evenements_aux_boutons();\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        
        /*
        
        
        
        */
        
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    filtre1( mat , d , le_message_du_serveur=null ){\r\n';
        src_client2+='        let a=document.getElementById( \'vv_ecran_liste_zone_contenu\' );\r\n';
        src_client2+='        if(a === null){\r\n';
        src_client2+='            return(this[this.fonction_liste]( mat , d , le_message_du_serveur ));\r\n';
        src_client2+='        }\r\n';
        src_client2+='        let tt=this.zones_liste1( le_message_du_serveur );\r\n';
        src_client2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=tt.o1;\r\n';
        src_client2+='        this.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant );\r\n';
        src_client2+='        this.__gi1.ajoute_les_evenements_aux_boutons();\r\n';
        src_client2+='        let lst=document.getElementById( \'vv_filtre1\' ).querySelectorAll( "input" );\r\n';
        src_client2+='        this.filtres={};\r\n';
        src_client2+='        for( let i=0 ; i < lst.length ; i++ ){\r\n';
        src_client2+='            if(lst[i].id){\r\n';
        src_client2+='                this.filtres[lst[i].id]=lst[i].value;\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        let aa=sessionStorage.getItem( this.__gi1.cle_lst0 + \'_\' + this.moi );\r\n';
        src_client2+='        if(aa === null){\r\n';
        src_client2+='            sessionStorage.setItem( this.__gi1.cle_lst0 + \'_\' +this.moi , JSON.stringify( {"filtres" : this.filtres} ) );\r\n';
        src_client2+='        }else{\r\n';
        src_client2+='            let jso=JSON.parse( aa );\r\n';
        src_client2+='            jso[\'filtres\']=this.filtres;\r\n';
        src_client2+='            sessionStorage.setItem( this.__gi1.cle_lst0 + \'_\' +this.moi , JSON.stringify( jso ) );\r\n';
        src_client2+='        }\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    zones_filtres1( mat , d , le_message_du_serveur ){\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='        let l01=mat.length;\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='        for( let nom_champ_filtre in this.tableau_des_filtres[this.fonction_liste] ){\r\n';
        src_client2+='            let trouvé=false;\r\n';
        src_client2+='            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
        src_client2+='                if(nom_champ_filtre===mat[i][1] && mat[i][2]===\'f\' &&  mat[i][8]===1 &&  mat[i+1][2]===\'c\'){\r\n';
        src_client2+='                    this.filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1];\r\n';
        src_client2+='                    trouvé=true;\r\n';
        src_client2+='                    break\r\n';
        src_client2+='                }\r\n';
        src_client2+='            }\r\n';
        src_client2+='            if(trouvé===false){\r\n';
        src_client2+='                this.filtres[this.fonction_liste][nom_champ_filtre]=\'\';\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        let cle_session=this.__gi1.cle_lst0 + \'_\' + this.moi +\'_\'+this.fonction_liste;\r\n';
        src_client2+='        sessionStorage.setItem( cle_session , JSON.stringify( this.filtres[this.fonction_liste] ) );\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='        if(le_message_du_serveur.__xva.hasOwnProperty( \'__fo1\' )\r\n';
        src_client2+='               && le_message_du_serveur.__xva.__fo1 !== null\r\n';
        src_client2+='               && le_message_du_serveur.__xva.__fo1.hasOwnProperty( \'origine\' )\r\n';
        src_client2+='               && le_message_du_serveur.__xva.__fo1.origine === \'aller_a_la_page\'\r\n';
        src_client2+='        ){\r\n';
        src_client2+='            document.getElementById( \'__num_page\' ).value=__num_page;\r\n';
        src_client2+='            return;\r\n';
        src_client2+='        }\r\n';
        src_client2+='        if(document.getElementById( \'vv_ecran_liste_zone_filtre\' ).innerHTML===\'\'){\r\n';
        src_client2+='            let o1=\'\';\r\n';
        src_client2+='            let nom_zone_non_vide=\'\';\r\n';
        src_client2+='            o1+=\'<div class="yy_filtre_liste1" id="\'+this.fonction_liste+\'">\';\r\n';
        src_client2+='\r\n';
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
        src_client2+='                       o1+=\'          <input \';\r\n';
        src_client2+='                       o1+=\'           type="text" id="\' + i + \'" \';\r\n';
        src_client2+='                       o1+=\'           value="\' + this.__gi1.fi1( this.filtres[this.fonction_liste][i] ) + \'" \';\r\n';
        src_client2+='                       o1+=\'           size="\'+this.tableau_des_filtres[this.fonction_liste][i].taille+\'" \';\r\n';
        src_client2+='                       o1+=\'           maxlength="64" \';\r\n';
        src_client2+='                       o1+=\'           autocapitalize="off" \';\r\n';
        src_client2+='                       o1+=\'           style="\' + bck + \'" />\';\r\n';
        src_client2+='                       if(this.filtres[this.fonction_liste][i] && this.filtres[this.fonction_liste][i]!==\'\'){\r\n';
        src_client2+='                           o1+=\'            <div class="rev_bouton yy__4" data-rev_click="\';\r\n';
        src_client2+='                           o1+=\'m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(\'+i+\'),valeur(valeur_constante()))))\';\r\n';
        src_client2+='                           o1+=\'">x</div>\';\r\n';
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
        src_client2+='            o1+=\'fo1(co1(\'+this.fonction_liste+\'),pm1(m1(n1(\'+this.moi+\'),f1(\'+this.fonction_liste+\'(__num_page(0))))))\';\r\n';
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
        src_client2+='                  this.aller_a_la_page(null,null,\'__num_page\',0)\r\n';
        src_client2+='                  console.log(e,this)\r\n';
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
        src_client2+='        setTimeout(()=>{\r\n';
        src_client2+='            let premier=null;\r\n';
        src_client2+='            let non_vide=null;\r\n';
        src_client2+='            let lst=document.getElementById(\'vv_ecran_liste_zone_filtre\').querySelectorAll( \'input\' );\r\n';
        src_client2+='            for(let i=0;i<lst.length;i++){\r\n';
        src_client2+='                if(i===0){\r\n';
        src_client2+='                    premier=lst[i];\r\n';
        src_client2+='                }\r\n';
        src_client2+='                if(lst[i].value && lst.value!==\'\' && non_vide===null){\r\n';
        src_client2+='                    non_vide=lst[i];\r\n';
        src_client2+='                }\r\n';
        src_client2+='            }\r\n';
        src_client2+='            if(non_vide!==null){\r\n';
        src_client2+='             non_vide.select();\r\n';
        src_client2+='            }else{\r\n';
        src_client2+='             if(premier!==null){\r\n';
        src_client2+='              premier.select();\r\n';
        src_client2+='             }\r\n';
        src_client2+='            }\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='        },100);\r\n';
        src_client2+='    }\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    supprimer1(mat , d , le_message_du_serveur ){\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    creer1(mat , d , le_message_du_serveur ){\r\n';
        src_client2+='\r\n';
        src_client2+='        /* redirection vers modification */\r\n';
        src_client2+='        if(le_message_du_serveur && le_message_du_serveur.__xva.hasOwnProperty(\'page_modification1\')){\r\n';
        src_client2+='            this.page_modification1(mat,d,le_message_du_serveur);\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    aller_a_la_page( mat , d , ref_zone=null , num_page=null){\r\n';
        src_client2+='        return this.__gi1.aller_a_la_page( mat , d , this.moi , this.fonction_liste , this.filtres , ref_zone , num_page );\r\n';
        src_client2+='    }\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    sous_liste1( mat , d , le_message_du_serveur=null ){\r\n';
        src_client2+='\r\n';
        src_client2+='        this.fonction_liste=\'sous_liste1\';\r\n';
        src_client2+='\r\n';
        src_client2+='        if(le_message_du_serveur==null || !le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        src_client2+='            /* F5 */\r\n';
        src_client2+='            debugger;\r\n';
        src_client2+='            //this.#init1(null,\'liste1\');\r\n';
        src_client2+='            return({"__xst" : __xsu});\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        let o1=\'\';\r\n';
        src_client2+='        let initialisation_fait=false;\r\n';
        src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='        if(a===null){\r\n';
        src_client2+='            this.__gi1.initialisation_des_zones(this.moi);\r\n';
        src_client2+='            initialisation_fait=true;\r\n';
        src_client2+='        }\r\n';
        src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='\r\n';
        src_client2+='        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){\r\n';
        src_client2+='        }else{\r\n';
        src_client2+='            if(initialisation_fait===false){\r\n';
        src_client2+='               this.__gi1.initialisation_des_zones(this.moi);\r\n';
        src_client2+='               a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='            }\r\n';
        src_client2+='            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;\r\n';
        src_client2+='            this.__gi1.afficher_les_zones( \'vv_ecran_liste\' );\r\n';
        src_client2+='        }\r\n';
        src_client2+='        this.zones_filtres1( mat , d , le_message_du_serveur  );\r\n';
        src_client2+='        this.__gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , \'\' , this.fonction_liste );\r\n';
        src_client2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.zones_sous_liste1( le_message_du_serveur );\r\n';
        src_client2+='        this.__gi1.ajoute_les_evenements_aux_boutons();\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='\r\n';
        src_client2+='    }\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    liste1( mat , d , le_message_du_serveur=null ){\r\n';
        src_client2+='\r\n';
        src_client2+='        if(le_message_du_serveur==null || !le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        src_client2+='            /* F5 */\r\n';
        src_client2+='            debugger;\r\n';
        src_client2+='            //this.#init1(null,\'liste1\');\r\n';
        src_client2+='            return({"__xst" : __xsu});\r\n';
        src_client2+='        }\r\n';
        src_client2+='\r\n';
        src_client2+='        let o1=\'\';\r\n';
        src_client2+='        let initialisation_fait=false;\r\n';
        src_client2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='        if(a===null){\r\n';
        src_client2+='            this.__gi1.initialisation_des_zones(this.moi);\r\n';
        src_client2+='            initialisation_fait=true;\r\n';
        src_client2+='        }\r\n';
        src_client2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='\r\n';
        src_client2+='        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){\r\n';
        src_client2+='        }else{\r\n';
        src_client2+='            if(initialisation_fait===false){\r\n';
        src_client2+='               this.__gi1.initialisation_des_zones(this.moi);\r\n';
        src_client2+='               a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        src_client2+='            }\r\n';
        src_client2+='            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;\r\n';
        src_client2+='            this.__gi1.afficher_les_zones( \'vv_ecran_liste\' );\r\n';
        src_client2+='        }\r\n';
        src_client2+='        this.zones_filtres1( mat , d , le_message_du_serveur  );\r\n';
        src_client2+='        this.__gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant , this.fonction_liste );\r\n';
        src_client2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.zones_liste1( le_message_du_serveur );\r\n';
        src_client2+='        this.__gi1.ajoute_les_evenements_aux_boutons();\r\n';
        src_client2+='        this.__gi1.maj_hash(mat,0);\r\n';
        src_client2+='        this.__gi1.maj_title_htm1(this.LISTE_DES_ELEMENTS_GERES);\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='\r\n';
        src_client2+='    }\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    liste_du_menu0( mat , d ){\r\n';
        src_client2+='        this.__gi1.liste_du_menu000(mat , d , this);\r\n';
        src_client2+='        return({"__xst" : __xsu});\r\n';
        src_client2+='    }\r\n';
        
        /*
        
        
        
        */
        
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    filtre1( mat , d , le_message_du_serveur=null ){\r\n';
        o2+='        let a=document.getElementById( \'vv_ecran_liste_zone_contenu\' );\r\n';
        o2+='        if(a === null){\r\n';
        o2+='            return(this[this.fonction_liste]( mat , d , le_message_du_serveur ));\r\n';
        o2+='        }\r\n';
        o2+='        let tt=this.zones_liste1( le_message_du_serveur );\r\n';
        o2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=tt.o1;\r\n';
        o2+='        this.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant );\r\n';
        o2+='        __gi1.ajoute_les_evenements_aux_boutons();\r\n';
        o2+='        let lst=document.getElementById( \'vv_filtre1\' ).querySelectorAll( "input" );\r\n';
        o2+='        this.$filtres={};\r\n';
        o2+='        for( let i=0 ; i < lst.length ; i++ ){\r\n';
        o2+='            if(lst[i].id){\r\n';
        o2+='                this.$filtres[lst[i].id]=lst[i].value;\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        let aa=sessionStorage.getItem( __gi1.cle_lst0 + \'_\' + this.moi );\r\n';
        o2+='        if(aa === null){\r\n';
        o2+='            sessionStorage.setItem( __gi1.cle_lst0 + \'_\' +this.moi , JSON.stringify( {"$filtres" : this.$filtres} ) );\r\n';
        o2+='        }else{\r\n';
        o2+='            let jso=JSON.parse( aa );\r\n';
        o2+='            jso[\'$filtres\']=this.$filtres;\r\n';
        o2+='            sessionStorage.setItem( __gi1.cle_lst0 + \'_\' +this.moi , JSON.stringify( jso ) );\r\n';
        o2+='        }\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    zones_filtres1( mat , d , le_message_du_serveur ){\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='        let l01=mat.length;\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='        for( let nom_champ_filtre in this.tableau_des_filtres[this.fonction_liste] ){\r\n';
        o2+='            let trouvé=false;\r\n';
        o2+='            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
        o2+='                if(nom_champ_filtre===mat[i][1] && mat[i][2]===\'f\' &&  mat[i][8]===1 &&  mat[i+1][2]===\'c\'){\r\n';
        o2+='                    this.$filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1];\r\n';
        o2+='                    trouvé=true;\r\n';
        o2+='                    break\r\n';
        o2+='                }\r\n';
        o2+='            }\r\n';
        o2+='            if(trouvé===false){\r\n';
        o2+='                this.$filtres[this.fonction_liste][nom_champ_filtre]=\'\';\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        let cle_session=__gi1.cle_lst0 + \'_\' + this.moi +\'_\'+this.fonction_liste;\r\n';
        o2+='        sessionStorage.setItem( cle_session , JSON.stringify( this.$filtres[this.fonction_liste] ) );\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='        if(le_message_du_serveur.__xva.hasOwnProperty( \'__fo1\' )\r\n';
        o2+='               && le_message_du_serveur.__xva.__fo1 !== null\r\n';
        o2+='               && le_message_du_serveur.__xva.__fo1.hasOwnProperty( \'origine\' )\r\n';
        o2+='               && le_message_du_serveur.__xva.__fo1.origine === \'aller_a_la_page\'\r\n';
        o2+='        ){\r\n';
        o2+='            document.getElementById( \'$__num_page\' ).value=$__num_page;\r\n';
        o2+='            return;\r\n';
        o2+='        }\r\n';
        o2+='        if(document.getElementById( \'vv_ecran_liste_zone_filtre\' ).innerHTML===\'\'){\r\n';
        o2+='            let o1=\'\';\r\n';
        o2+='            let nom_zone_non_vide=\'\';\r\n';
        o2+='            o1+=\'<div class="yy_filtre_liste1" id="\'+this.fonction_liste+\'">\';\r\n';
        o2+='\r\n';
        o2+='            for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='                if(this.tableau_des_filtres[this.fonction_liste][i].masqué===false){\r\n';
        o2+='                   o1+=\'    <div>\';\r\n';
        o2+='                   o1+=\'        <div><span>\'+this.tableau_des_filtres[this.fonction_liste][i].nom+\'</span></div>\';\r\n';
        o2+='                   let bck=\'background:yellow;\';\r\n';
        o2+='                   if(this.$filtres[this.fonction_liste][i]===\'\'){\r\n';
        o2+='                       bck=\'\';\r\n';
        o2+='                   }else{\r\n';
        o2+='                       if(nom_zone_non_vide===\'\'){\r\n';
        o2+='                           nom_zone_non_vide=i;\r\n';
        o2+='                       }\r\n';
        o2+='                   }\r\n';
        o2+='                       o1+=\'        <div>\\r\\n\';\r\n';
        o2+='                       o1+=\'          <input \';\r\n';
        o2+='                       o1+=\'           type="text" id="\' + i + \'" \';\r\n';
        o2+='                       o1+=\'           value="\' + __gi1.fi1( this.$filtres[this.fonction_liste][i] ) + \'" \';\r\n';
        o2+='                       o1+=\'           size="\'+this.tableau_des_filtres[this.fonction_liste][i].taille+\'" \';\r\n';
        o2+='                       o1+=\'           maxlength="64" \';\r\n';
        o2+='                       o1+=\'           autocapitalize="off" \';\r\n';
        o2+='                       o1+=\'           style="\' + bck + \'" />\';\r\n';
        o2+='                       if(this.$filtres[this.fonction_liste][i] && this.$filtres[this.fonction_liste][i]!==\'\'){\r\n';
        o2+='                           o1+=\'            <div class="rev_bouton yy__4" data-rev_click="\';\r\n';
        o2+='                           o1+=\'m1(n1(__interface1),f1(maj_contenu(type_cible(valeur_constante),id(\'+i+\'),valeur(valeur_constante()))))\';\r\n';
        o2+='                           o1+=\'">x</div>\';\r\n';
        o2+='                       }\r\n';
        o2+='                       o1+=\'        </div>\\r\\n\';\r\n';
        o2+='                   o1+=\'    </div>\\r\\n\';\r\n';
        o2+='                }\r\n';
        o2+='            }\r\n';
        o2+='\r\n';
        o2+='            o1+=\'   <div>\';\r\n';
        o2+='            o1+=\'     <div>\';\r\n';
        o2+='            o1+=\'       <span>&nbsp;</span>\';\r\n';
        o2+='            o1+=\'     </div>\';\r\n';
        o2+='            o1+=\'     <div>\';\r\n';
        o2+='            o1+=\'        <div class="rev_bouton yy_bouton_loupe" data-rev_click="\';\r\n';
        o2+='            o1+=\'fo1(co1(\'+this.fonction_liste+\'),pm1(m1(n1(\'+this.moi+\'),f1(\'+this.fonction_liste+\'($__num_page(0))))))\';\r\n';
        o2+='            o1+=\'"\';\r\n';
        o2+='            o1+=\'        >🔎</div>\';\r\n';
        o2+='            o1+=\'     </div>\';\r\n';
        o2+='            for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='             if(this.tableau_des_filtres[this.fonction_liste][i].masqué===true){\r\n';
        o2+='              o1+=\'     <input type="hidden" id="\'+i+\'" value="\' + this.$filtres[this.fonction_liste][i] + \'" />\';\r\n';
        o2+='             }\r\n';
        o2+='            }\r\n';
        o2+='            o1+=\'   </div>\';\r\n';
        o2+='            o1+=\'</div>\';\r\n';
        o2+='            document.getElementById( \'vv_ecran_liste_zone_filtre\' ).innerHTML=o1;\r\n';
        o2+='            if(nom_zone_non_vide!==\'\'){\r\n';
        o2+='                document.getElementById(nom_zone_non_vide).select();\r\n';
        o2+='            }\r\n';
        o2+='            let lst=document.getElementById(\'vv_ecran_liste_zone_filtre\').querySelectorAll( \'input\' );\r\n';
        o2+='            for(let i=0;i<lst.length;i++){\r\n';
        o2+='                lst[i].addEventListener(\'keyup\',(e)=>{\r\n';
        o2+='                 if(e.keyCode===13){\r\n';
        o2+='                  this.aller_a_la_page(null,null,\'$__num_page\',0)\r\n';
        o2+='                  console.log(e,this)\r\n';
        o2+='                 }\r\n';
        o2+='\r\n';
        o2+='                })\r\n';
        o2+='            }\r\n';
        o2+='\r\n';
        o2+='        }else{\r\n';
        o2+='\r\n';
        o2+='            for(let i in this.tableau_des_filtres[this.fonction_liste]){\r\n';
        o2+='                document.getElementById(i).value=this.$filtres[this.fonction_liste][i];\r\n';
        o2+='                if(this.$filtres[this.fonction_liste][i]!==\'\'){\r\n';
        o2+='                    document.getElementById(i).style.background=\'yellow\';\r\n';
        o2+='                }else{\r\n';
        o2+='                    document.getElementById(i).style.background=\'\';\r\n';
        o2+='              }\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        setTimeout(()=>{\r\n';
        o2+='            let premier=null;\r\n';
        o2+='            let non_vide=null;\r\n';
        o2+='            let lst=document.getElementById(\'vv_ecran_liste_zone_filtre\').querySelectorAll( \'input\' );\r\n';
        o2+='            for(let i=0;i<lst.length;i++){\r\n';
        o2+='                if(i===0){\r\n';
        o2+='                    premier=lst[i];\r\n';
        o2+='                }\r\n';
        o2+='                if(lst[i].value && lst.value!==\'\' && non_vide===null){\r\n';
        o2+='                    non_vide=lst[i];\r\n';
        o2+='                }\r\n';
        o2+='            }\r\n';
        o2+='            if(non_vide!==null){\r\n';
        o2+='             non_vide.select();\r\n';
        o2+='            }else{\r\n';
        o2+='             if(premier!==null){\r\n';
        o2+='              premier.select();\r\n';
        o2+='             }\r\n';
        o2+='            }\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='        },100);\r\n';
        o2+='    }\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    supprimer1(mat , d , le_message_du_serveur ){\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    creer1(mat , d , le_message_du_serveur ){\r\n';
        o2+='\r\n';
        o2+='        /* redirection vers modification */\r\n';
        o2+='        if(le_message_du_serveur && le_message_du_serveur.__xva.hasOwnProperty(\'page_modification1\')){\r\n';
        o2+='            this.page_modification1(mat,d,le_message_du_serveur);\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    aller_a_la_page( mat , d , ref_zone=null , $num_page=null){\r\n';
        o2+='        let nom_de_zone=\'\';\r\n';
        o2+='        if(ref_zone!==null){\r\n';
        o2+='            nom_de_zone=ref_zone;\r\n';
        o2+='        }else{\r\n';
        o2+='            let l01=mat.length;\r\n';
        o2+='            let $__num_page=-1;\r\n';
        o2+='            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){\r\n';
        o2+='                if(mat[i][2] === \'c\'){\r\n';
        o2+='                    nom_de_zone=mat[i][1];\r\n';
        o2+='                }\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        if(nom_de_zone !== \'\'){\r\n';
        o2+='            let $__num_page=-1;\r\n';
        o2+='            if(ref_zone!==null){\r\n';
        o2+='                if(isNaN($num_page)){\r\n';
        o2+='                    try{\r\n';
        o2+='                        $__num_page=parseInt( document.getElementById( ref_zone ).value , 10 );\r\n';
        o2+='                    }catch{\r\n';
        o2+='                        $__num_page=0;\r\n';
        o2+='                    }\r\n';
        o2+='                }else{\r\n';
        o2+='                    $__num_page=$num_page;\r\n';
        o2+='                }\r\n';
        o2+='            }else{\r\n';
        o2+='                $__num_page=parseInt( document.getElementById( nom_de_zone ).getAttribute( \'data-numero_page\' ) , 10 );\r\n';
        o2+='            }\r\n';
        o2+='            if($__num_page >= 0){\r\n';
        o2+='\r\n';
        o2+='                document.getElementById( \'$__num_page\' ).value=$__num_page;\r\n';
        o2+='                let lst=document.getElementById( this.fonction_liste ).querySelectorAll( "input" );\r\n';
        o2+='                this.$filtres[this.fonction_liste]={};\r\n';
        o2+='                for( let i=0 ; i < lst.length ; i++ ){\r\n';
        o2+='                    if(lst[i].id){\r\n';
        o2+='                        this.$filtres[this.fonction_liste][lst[i].id]=lst[i].value;\r\n';
        o2+='                    }\r\n';
        o2+='                }\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='                let __fo1={};\r\n';
        o2+='                __fo1[this.fonction_liste]=this.$filtres[this.fonction_liste];\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='                __gi1.__worker.postMessage( {\r\n';
        o2+='                        "__xac" : \'pm1(m1(n1(\'+this.moi+\'),f1(\'+this.fonction_liste+\'())))\' ,\r\n';
        o2+='                        "__xva" : {\r\n';
        o2+='                            "__parametres" : __gi1.stockage_local[\'parametres\'] ,\r\n';
        o2+='                            "__fo1" : __fo1 ,\r\n';
        o2+='                            "__co1" : this.fonction_liste\r\n';
        o2+='                        }\r\n';
        o2+='                    } );\r\n';
        o2+='            }else{\r\n';
        o2+='                if(ref_zone==null){\r\n';
        o2+='                   setTimeout( ( a ) => {\r\n';
        o2+='                           (document.getElementById( a.nom_de_zone ).classList).remove( \'yy_invisible\' );} , 100 , {"nom_de_zone" : nom_de_zone} );\r\n';
        o2+='                }\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    sous_liste1( mat , d , le_message_du_serveur=null ){\r\n';
        o2+='\r\n';
        o2+='        this.fonction_liste=\'sous_liste1\';\r\n';
        o2+='\r\n';
        o2+='        if(le_message_du_serveur==null || !le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        o2+='            /* F5 */\r\n';
        o2+='            debugger;\r\n';
        o2+='            //this.#init1(null,\'liste1\');\r\n';
        o2+='            return({"__xst" : __xsu});\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        let o1=\'\';\r\n';
        o2+='        let initialisation_fait=false;\r\n';
        o2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='        if(a===null){\r\n';
        o2+='            __gi1.initialisation_des_zones(this.moi);\r\n';
        o2+='            initialisation_fait=true;\r\n';
        o2+='        }\r\n';
        o2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='\r\n';
        o2+='        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){\r\n';
        o2+='        }else{\r\n';
        o2+='            if(initialisation_fait===false){\r\n';
        o2+='               __gi1.initialisation_des_zones(this.moi);\r\n';
        o2+='               a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='            }\r\n';
        o2+='            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;\r\n';
        o2+='            __gi1.afficher_les_zones( \'vv_ecran_liste\' );\r\n';
        o2+='        }\r\n';
        o2+='        this.zones_filtres1( mat , d , le_message_du_serveur  );\r\n';
        o2+='        __gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , \'\' , this.fonction_liste );\r\n';
        o2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.zones_sous_liste1( le_message_du_serveur );\r\n';
        o2+='        __gi1.ajoute_les_evenements_aux_boutons();\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='\r\n';
        o2+='    }\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    liste1( mat , d , le_message_du_serveur=null ){\r\n';
        o2+='\r\n';
        o2+='        if(le_message_du_serveur==null || !le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        o2+='            /* F5 */\r\n';
        o2+='            debugger;\r\n';
        o2+='            //this.#init1(null,\'liste1\');\r\n';
        o2+='            return({"__xst" : __xsu});\r\n';
        o2+='        }\r\n';
        o2+='\r\n';
        o2+='        let o1=\'\';\r\n';
        o2+='        let initialisation_fait=false;\r\n';
        o2+='        let a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='        if(a===null){\r\n';
        o2+='            __gi1.initialisation_des_zones(this.moi);\r\n';
        o2+='            initialisation_fait=true;\r\n';
        o2+='        }\r\n';
        o2+='        a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='\r\n';
        o2+='        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){\r\n';
        o2+='        }else{\r\n';
        o2+='            if(initialisation_fait===false){\r\n';
        o2+='               __gi1.initialisation_des_zones(this.moi);\r\n';
        o2+='               a=document.getElementById( \'vv_titre_de_la_page\' );\r\n';
        o2+='            }\r\n';
        o2+='            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;\r\n';
        o2+='            __gi1.afficher_les_zones( \'vv_ecran_liste\' );\r\n';
        o2+='        }\r\n';
        o2+='        this.zones_filtres1( mat , d , le_message_du_serveur  );\r\n';
        o2+='        __gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant , this.fonction_liste );\r\n';
        o2+='        document.getElementById( \'vv_ecran_liste_zone_contenu\' ).innerHTML=this.zones_liste1( le_message_du_serveur );\r\n';
        o2+='        __gi1.ajoute_les_evenements_aux_boutons();\r\n';
        o2+='        __gi1.maj_hash(mat,0);\r\n';
        o2+='        __gi1.maj_title_htm1(this.LISTE_DES_ELEMENTS_GERES);\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='\r\n';
        o2+='    }\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    liste_du_menu0( mat , d ){\r\n';
        o2+='        __gi1.liste_du_menu000(mat , d , this);\r\n';
        o2+='        return({"__xst" : __xsu});\r\n';
        o2+='    }\r\n';
        
        
        /*
        
        
        */
        
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    zones_sous_liste1( le_message_du_serveur ){\r\n';
        src_client2+='        let o1=\'\';\r\n';
        src_client2+='        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        src_client2+='            let lst=\'\';\r\n';
        src_client2+='            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){\r\n';
        src_client2+='                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];\r\n';
        src_client2+='                lst+=\'<tr>\';\r\n';
        src_client2+='                lst+=\'<td style="text-wrap-mode: nowrap;">\';\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='                let parametres=\'\';\r\n';
        src_client2+='                parametres += \'m1(n1(__interface1),f1(choisir_dans_sous_fenetre1(\';\r\n';
        src_client2+='                parametres += \' nom_champ_dans_parent1(\' + this.nom_champ_dans_parent1 + \')\';\r\n';
        src_client2+='                parametres += \' nom_libelle_dans_parent1(\' + this.nom_libelle_dans_parent1 + \')\';\r\n';
        src_client2+='                parametres += \' id1(\' + elem[\'T0.' + champ_primaire + '\'] + \')\';\r\n';
        src_client2+='\r\n';
        /* debugger */
        src_client2+='\r\n';
        src_client2+='                let libelle1=\'\';\r\n';
        src_client2+='                libelle1+=\'(\'+elem[\'T0.' + champ_primaire + '\']+\') \';\r\n';
        /*
          liste des champs est_libelle_lien de la table
        */
        for(let i in this.#obj_table.champs){
            if(this.#obj_table.champs[i].meta.est_libelle_lien === '1'){
                /* src_client2+='                    libelle1+=elem[\'T0.'+i+'\'];\r\n'; */
                src_client2+='                libelle1+=elem[\'T0.' + i + '\']?\' , \'+elem[\'T0.' + i + '\']:\'\';\r\n';
            }
        }
        /*
        */
        src_client2+='                parametres += \' libelle1(\\\'\' + this.__gi1.fi1(libelle1) + \'\\\')\';\r\n';
        src_client2+='\r\n';
        src_client2+='\r\n';
        src_client2+='                parametres += \')))\';\r\n';
        src_client2+='                lst += \'  <div class="rev_bouton yy__2" data-rev_click="\' + parametres + \'">=&gt;</div>\';\r\n';
        src_client2+='\r\n';
        src_client2+='                lst+=\'</td>\';\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            /* liste_des_champs_liste_ecran */
            if(liste_des_champs_condition_liste_ecran[i]['dans_filtre'] === true){
                let el=liste_des_champs_condition_liste_ecran[i];
                let champ_pere_est_en_session=false;
                if(el.champ_dans_la_base.hasOwnProperty( 'table_mere' ) && el.champ_dans_la_base.table_mere !== ''){
                    if(this.#obj_bdd[el.champ_dans_la_base.table_mere].champs[el.champ_dans_la_base.champ_pere].meta.hasOwnProperty( 'est_en_session' )
                           && this.#obj_bdd[el.champ_dans_la_base.table_mere].champs[el.champ_dans_la_base.champ_pere].meta.est_en_session === '1'
                    ){
                        champ_pere_est_en_session=true;
                    }
                }
                if(el.champ_dans_la_base.genre_objet_du_champ
                           && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre
                                   && el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                               || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre
                                   && el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                               || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                       || champ_pere_est_en_session === true
                ){
                }else{
                    src_client2+='';
                    src_client2+='            /*\n';
                    src_client2+='            */\n';
                    src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                    /* src_client2+='            lst += \'\' . v0[\'' + liste_des_champs_liste_ecran[i].préfixe_du_champ + '.' + liste_des_champs_liste_ecran[i].nom_du_champ + '\'] . \'\';\r\n'; */
                    if(el.champ_dans_la_base.espece_du_champ === 'TEXT' || el.champ_dans_la_base.espece_du_champ === 'VARCHAR'){
                        src_client2+='            if(elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\']!==null){\r\n';
                        src_client2+='                lst+=elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\']';
                        src_client2+='.substr( 0 , 100 ).replace( />/g , \'&gt;\' ).replace( /</g , \'&lt;\' );\r\n';
                        src_client2+='            }\r\n';
                    }else{
                        src_client2+='            if(elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\']!==null){\r\n';
                        src_client2+='                lst+=elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\'];\r\n';
                        src_client2+='            }\r\n';
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
        for(let i in liste_des_champs_condition_liste_ecran){
            if(liste_des_champs_condition_liste_ecran[i]['dans_filtre'] === true){
                if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ
                       && (liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                           || liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                           || liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                }else{
                    src_client2+='                o1+=\'<th>' + liste_des_champs_condition_liste_ecran[i].nom_filtre + '</th>\';\r\n';
                }
            }
        }
        src_client2+='                o1+=\'</tr>\';\r\n';
        src_client2+='                o1+=lst;\r\n';
        src_client2+='                o1+=\'</table>\';\r\n';
        src_client2+='                o1+=\'</div>\';\r\n';
        src_client2+='            }else{\r\n';
        src_client2+='                o1+=this.__gi1.la_liste_est_vide();\r\n';
        src_client2+='\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        return(o1);\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='    zones_liste1( le_message_du_serveur ){\r\n';
        src_client2+='        let o1=\'\';\r\n';
        src_client2+='        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        src_client2+='            let lst=\'\';\r\n';
        src_client2+='            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){\r\n';
        src_client2+='                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];\r\n';
        src_client2+='                lst+=\'<tr>\';\r\n';
        src_client2+='                lst+=\'<td>\';\r\n';
        src_client2+='                lst+=\'<div style="display:inline-flex;">\';\r\n';
        src_client2+='';
        src_client2+='\r\n';
        
        
        if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' ) && this.#obj_table.meta.fonctions_spéciales1!==''){
            let obj1=this.__gi1.__rev1.rev_tm( this.#obj_table.meta.fonctions_spéciales1 );
            let fonction_npsiu_trouvee=false;
            if(obj1.__xst===__xsu){
                for(let i=1;i<obj1.__xva.length;i=obj1.__xva[i][12]){
                    if(obj1.__xva[i][1]==='ne_pas_supprimer_id_un' && obj1.__xva[i][2]==='f' && obj1.__xva[i][8]===1 && obj1.__xva[i+1][2]==='c' && this.__gi1.est_num(obj1.__xva[i+1][1])){
                        fonction_npsiu_trouvee=true;
                        src_client2+='                /* fonctions_spéciales1(ne_pas_supprimer_id_un('+obj1.__xva[i+1][1]+')) */\r\n';
                        src_client2+='                if(elem[\'T0.' + champ_primaire + '\']<='+obj1.__xva[i+1][1]+'){\r\n';
                        src_client2+='                    lst+=\'<div class="rev_b_svg yy__2 yy__2_inactif">\'+this.__gi1.les_svg.poubelle+\'</div>\';\r\n';
                        src_client2+='                }else{\r\n';
                        src_client2+='                    lst+=\'<div class="rev_b_svg yy__2" data-rev_click="\';\r\n';
                        src_client2+='                    lst+=\'pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))\';\r\n';
                        src_client2+='                    lst+=\'">\'+this.__gi1.les_svg.poubelle+\'</div>\';\r\n';
                        src_client2+='                }\r\n';
                    }
                }
                if(fonction_npsiu_trouvee===false){
                    if(ref_delete === ''){
                        src_client2+='                /*\r\n';
                    }
                    src_client2+='                lst+=\'<div class="rev_b_svg yy__2" data-rev_click="';
                    src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                    src_client2+='">\'+this.__gi1.les_svg.poubelle+\'</div>\';\r\n';
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
            src_client2+='">\'+this.__gi1.les_svg.poubelle+\'</div>\';\r\n';
            if(ref_delete === ''){
                src_client2+='                */\r\n';
            }
        }
        src_client2+='                lst+=\'<div class="rev_b_svg yy__3" data-rev_click="';
        src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_modification1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
        src_client2+='">\'+this.__gi1.les_svg.editer+\'</div>\';\r\n';
        src_client2+='\r\n';
        if(ref_select === '' || ref_update === ''){
            src_client2+='                */\r\n';
        }
        /*
          =====================================================================================================
        */
        if(ref_select === '' || ref_insert === ''){
            src_client2+='                /*\r\n';
        }
        src_client2+='                lst+=\'<div class="rev_b_svg yy__4" data-rev_click="';
        src_client2+='pm1(m1(n1(\'+this.moi+\'),f1(page_duplication1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
        src_client2+='">\'+this.__gi1.les_svg.dupliquer+\'</div>\';\r\n';
        src_client2+='\r\n';
        if(ref_select === '' || ref_insert === ''){
            src_client2+='                */\r\n';
        }
        src_client2+='                lst+=\'</tdiv>\';\r\n';
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
                    src_client2+='                lst+=this.__gi1.fi2( elem[\'' + cle + '\'].substr(0,200));\r\n';
                    src_client2+='            }\r\n';
                }else if(el.champ_dans_la_base.espece_du_champ === 'VARCHAR'){
                    src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                    src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                    src_client2+='                lst+=this.__gi1.fi2( elem[\'' + cle + '\']);\r\n';
                    src_client2+='            }\r\n';
                }else{
                    if(liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_parmis_genre === '0,1'
                           && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_valeur_init_genre === '0'
                           && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.chp_espece_genre === 'INTEGER'
                    ){
                        src_client2+='            lst += \'<td style="text-align:center;">\';\r\n';
                        src_client2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                        src_client2+='                lst+=\'<input type="range" disabled id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="\'+elem[\'' + cle + '\']+\'">\';\r\n';
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
                if(el.champ_dans_la_base.genre_objet_du_champ
                       && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                           || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                           || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                    continue;
                }
                tab_champs_sortie.push( cle );
                if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                    src_client2+='                o1+=\'<th style="max-width:360px;">';
                }else{
                    src_client2+='                o1+=\'<th>';
                }
                src_client2+='' + liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_bref_du_champ + '</th>\';\r\n';
            }
        }
        src_client2+='                o1+=\'</tr>\';\r\n';
        src_client2+='                o1+=lst;\r\n';
        src_client2+='                o1+=\'</table>\';\r\n';
        src_client2+='                o1+=\'</div>\';\r\n';
        src_client2+='            }else{\r\n';
        src_client2+='                o1+=this.__gi1.la_liste_est_vide();\r\n';
        src_client2+='\r\n';
        src_client2+='            }\r\n';
        src_client2+='        }\r\n';
        src_client2+='        return(o1);\r\n';
        src_client2+='    }\r\n';
        src_client2+='\r\n';
        
        /*
        
        
        
        */
        
        
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    zones_sous_liste1( le_message_du_serveur ){\r\n';
        o2+='        let o1=\'\';\r\n';
        o2+='        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        o2+='            let lst=\'\';\r\n';
        o2+='            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){\r\n';
        o2+='                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];\r\n';
        o2+='                lst+=\'<tr>\';\r\n';
        o2+='                lst+=\'<td style="text-wrap-mode: nowrap;">\';\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='                let $parametres=\'\';\r\n';
        o2+='                $parametres += \'m1(n1(__interface1),f1(choisir_dans_sous_fenetre1(\';\r\n';
        o2+='                $parametres += \' $nom_champ_dans_parent1(\' + this.$nom_champ_dans_parent1 + \')\';\r\n';
        o2+='                $parametres += \' $nom_libelle_dans_parent1(\' + this.$nom_libelle_dans_parent1 + \')\';\r\n';
        o2+='                $parametres += \' id1(\' + elem[\'T0.' + champ_primaire + '\'] + \')\';\r\n';
        o2+='\r\n';
        /* debugger */
        o2+='\r\n';
        o2+='                let libelle1=\'\';\r\n';
        o2+='                libelle1+=\'(\'+elem[\'T0.' + champ_primaire + '\']+\') \';\r\n';
        /*
          liste des champs est_libelle_lien de la table
        */
        for(let i in this.#obj_table.champs){
            if(this.#obj_table.champs[i].meta.est_libelle_lien === '1'){
                /* o2+='                    libelle1+=elem[\'T0.'+i+'\'];\r\n'; */
                o2+='                libelle1+=elem[\'T0.' + i + '\']?\' , \'+elem[\'T0.' + i + '\']:\'\';\r\n';
            }
        }
        /*
        */
        o2+='                $parametres += \' libelle1(\\\'\' + __gi1.fi1(libelle1) + \'\\\')\';\r\n';
        o2+='\r\n';
        o2+='\r\n';
        o2+='                $parametres += \')))\';\r\n';
        o2+='                lst += \'  <div class="rev_bouton yy__2" data-rev_click="\' + $parametres + \'">=&gt;</div>\';\r\n';
        o2+='\r\n';
        o2+='                lst+=\'</td>\';\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            /* liste_des_champs_liste_ecran */
            if(liste_des_champs_condition_liste_ecran[i]['dans_filtre'] === true){
                let el=liste_des_champs_condition_liste_ecran[i];
                let champ_pere_est_en_session=false;
                if(el.champ_dans_la_base.hasOwnProperty( 'table_mere' ) && el.champ_dans_la_base.table_mere !== ''){
                    if(this.#obj_bdd[el.champ_dans_la_base.table_mere].champs[el.champ_dans_la_base.champ_pere].meta.hasOwnProperty( 'est_en_session' )
                           && this.#obj_bdd[el.champ_dans_la_base.table_mere].champs[el.champ_dans_la_base.champ_pere].meta.est_en_session === '1'
                    ){
                        champ_pere_est_en_session=true;
                    }
                }
                if(el.champ_dans_la_base.genre_objet_du_champ
                           && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre
                                   && el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                               || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre
                                   && el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                               || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                       || champ_pere_est_en_session === true
                ){
                }else{
                    o2+='';
                    o2+='            /*\n';
                    o2+='            */\n';
                    o2+='            lst += \'<td style="text-align:center;">\';\r\n';
                    /* o2+='            lst += \'\' . $v0[\'' + liste_des_champs_liste_ecran[i].préfixe_du_champ + '.' + liste_des_champs_liste_ecran[i].nom_du_champ + '\'] . \'\';\r\n'; */
                    if(el.champ_dans_la_base.espece_du_champ === 'TEXT' || el.champ_dans_la_base.espece_du_champ === 'VARCHAR'){
                        o2+='            if(elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\']!==null){\r\n';
                        o2+='                lst+=elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\']';
                        o2+='.substr( 0 , 100 ).replace( />/g , \'&gt;\' ).replace( /</g , \'&lt;\' );\r\n';
                        o2+='            }\r\n';
                    }else{
                        o2+='            if(elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\']!==null){\r\n';
                        o2+='                lst+=elem[\'' + el.préfixe_du_champ + '.' + el.nom_du_champ + '\'];\r\n';
                        o2+='            }\r\n';
                    }
                    o2+='            lst += \'</td>\';\r\n';
                }
            }
        }
        o2+='                lst+=\'</tr>\';\r\n';
        o2+='            }\r\n';
        o2+='            if(lst !== \'\'){\r\n';
        o2+='                o1+=\'<div class="yy_conteneur_table">\';\r\n';
        o2+='                o1+=\'<table border="1">\';\r\n';
        o2+='                o1+=\'<tr>\';\r\n';
        o2+='                o1+=\'<th>action</th>\';\r\n';
        for(let i in liste_des_champs_condition_liste_ecran){
            if(liste_des_champs_condition_liste_ecran[i]['dans_filtre'] === true){
                if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ
                       && (liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                           || liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                           || liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                }else{
                    o2+='                o1+=\'<th>' + liste_des_champs_condition_liste_ecran[i].nom_filtre + '</th>\';\r\n';
                }
            }
        }
        o2+='                o1+=\'</tr>\';\r\n';
        o2+='                o1+=lst;\r\n';
        o2+='                o1+=\'</table>\';\r\n';
        o2+='                o1+=\'</div>\';\r\n';
        o2+='            }else{\r\n';
        o2+='                o1+=__gi1.la_liste_est_vide();\r\n';
        o2+='\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        return(o1);\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='    zones_liste1( le_message_du_serveur ){\r\n';
        o2+='        let o1=\'\';\r\n';
        o2+='        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty(this.fonction_liste)){\r\n';
        o2+='            let lst=\'\';\r\n';
        o2+='            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){\r\n';
        o2+='                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];\r\n';
        o2+='                lst+=\'<tr>\';\r\n';
        o2+='                lst+=\'<td>\';\r\n';
        o2+='                lst+=\'<div style="display:inline-flex;">\';\r\n';
        o2+='';
        o2+='\r\n';
        
        
        if(this.#obj_table.meta.hasOwnProperty( 'fonctions_spéciales1' ) && this.#obj_table.meta.fonctions_spéciales1!==''){
            let obj1=__gi1.__rev1.rev_tm( this.#obj_table.meta.fonctions_spéciales1 );
            let fonction_npsiu_trouvee=false;
            if(obj1.__xst===__xsu){
                for(let i=1;i<obj1.__xva.length;i=obj1.__xva[i][12]){
                    if(obj1.__xva[i][1]==='ne_pas_supprimer_id_un' && obj1.__xva[i][2]==='f' && obj1.__xva[i][8]===1 && obj1.__xva[i+1][2]==='c' && __gi1.est_num(obj1.__xva[i+1][1])){
                        fonction_npsiu_trouvee=true;
                        o2+='                /* fonctions_spéciales1(ne_pas_supprimer_id_un('+obj1.__xva[i+1][1]+')) */\r\n';
                        o2+='                if(elem[\'T0.' + champ_primaire + '\']<='+obj1.__xva[i+1][1]+'){\r\n';
                        o2+='                    lst+=\'<div class="rev_b_svg yy__2 yy__2_inactif">\'+__gi1.les_svg.poubelle+\'</div>\';\r\n';
                        o2+='                }else{\r\n';
                        o2+='                    lst+=\'<div class="rev_b_svg yy__2" data-rev_click="\';\r\n';
                        o2+='                    lst+=\'pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))\';\r\n';
                        o2+='                    lst+=\'">\'+__gi1.les_svg.poubelle+\'</div>\';\r\n';
                        o2+='                }\r\n';
                    }
                }
                if(fonction_npsiu_trouvee===false){
                    if(ref_delete === ''){
                        o2+='                /*\r\n';
                    }
                    o2+='                lst+=\'<div class="rev_b_svg yy__2" data-rev_click="';
                    o2+='pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
                    o2+='">\'+__gi1.les_svg.poubelle+\'</div>\';\r\n';
                    if(ref_delete === ''){
                        o2+='                */\r\n';
                    }
                }
            }
        }else{
            if(ref_delete === ''){
                o2+='                /*\r\n';
            }
            o2+='                lst+=\'<div class="rev_b_svg yy__2" data-rev_click="';
            o2+='pm1(m1(n1(\'+this.moi+\'),f1(page_confirmation_supprimer1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
            o2+='">\'+__gi1.les_svg.poubelle+\'</div>\';\r\n';
            if(ref_delete === ''){
                o2+='                */\r\n';
            }
        }
        o2+='                lst+=\'<div class="rev_b_svg yy__3" data-rev_click="';
        o2+='pm1(m1(n1(\'+this.moi+\'),f1(page_modification1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
        o2+='">\'+__gi1.les_svg.editer+\'</div>\';\r\n';
        o2+='\r\n';
        if(ref_select === '' || ref_update === ''){
            o2+='                */\r\n';
        }
        /*
          =====================================================================================================
        */
        if(ref_select === '' || ref_insert === ''){
            o2+='                /*\r\n';
        }
        o2+='                lst+=\'<div class="rev_b_svg yy__4" data-rev_click="';
        o2+='pm1(m1(n1(\'+this.moi+\'),f1(page_duplication1(' + champ_primaire + '(\'+elem[\'T0.' + champ_primaire + '\']+\')))))';
        o2+='">\'+__gi1.les_svg.dupliquer+\'</div>\';\r\n';
        o2+='\r\n';
        if(ref_select === '' || ref_insert === ''){
            o2+='                */\r\n';
        }
        o2+='                lst+=\'</tdiv>\';\r\n';
        o2+='                lst+=\'</td>\';\r\n';
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
                if(el.champ_dans_la_base.genre_objet_du_champ
                       && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                           || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                           || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                    continue;
                }
                tab_champs_sortie.push( cle );
                o2+='';
                o2+='            /' + '*\n';
                o2+='            *' + '/\n';
                if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                    o2+='            lst += \'<td style="max-width:360px;overflow:hidden;">\';\r\n';
                    o2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                    o2+='                lst+=__gi1.fi2( elem[\'' + cle + '\'].substr(0,200));\r\n';
                    o2+='            }\r\n';
                }else if(el.champ_dans_la_base.espece_du_champ === 'VARCHAR'){
                    o2+='            lst += \'<td style="text-align:center;">\';\r\n';
                    o2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                    o2+='                lst+=__gi1.fi2( elem[\'' + cle + '\']);\r\n';
                    o2+='            }\r\n';
                }else{
                    if(liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_parmis_genre === '0,1'
                           && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.cht_valeur_init_genre === '0'
                           && liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.chp_espece_genre === 'INTEGER'
                    ){
                        o2+='            lst += \'<td style="text-align:center;">\';\r\n';
                        o2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                        o2+='                lst+=\'<input type="range" disabled id="che_est_souche_requete" class="yy_ouinon" min="0" max="1" step="1" value="\'+elem[\'' + cle + '\']+\'">\';\r\n';
                        o2+='            }\r\n';
                    }else{
                        o2+='            lst += \'<td style="text-align:center;">\';\r\n';
                        o2+='            if(elem[\'' + cle + '\']!==null){\r\n';
                        o2+='                lst+=elem[\'' + cle + '\'];\r\n';
                        o2+='            }\r\n';
                    }
                }
                o2+='            lst += \'</td>\';\r\n';
            }
        }
        o2+='                lst+=\'</tr>\';\r\n';
        o2+='            }\r\n';
        o2+='            if(lst !== \'\'){\r\n';
        o2+='                o1+=\'<div class="yy_conteneur_table">\';\r\n';
        o2+='                o1+=\'<table border="1">\';\r\n';
        o2+='                o1+=\'<tr>\';\r\n';
        o2+='                o1+=\'<th>action</th>\';\r\n';
        tab_champs_sortie=[];
        for(let i in liste_des_champs_liste_ecran){
            let el=liste_des_champs_liste_ecran[i];
            let cle=liste_des_champs_liste_ecran[i].préfixe_du_champ + '.' + liste_des_champs_liste_ecran[i].nom_du_champ;
            if(tab_champs_sortie.includes( cle )){
            }else{
                if(el.champ_dans_la_base.genre_objet_du_champ
                       && (el.champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre === 1
                           || el.champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre === 1
                           || el.champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1)
                ){
                    continue;
                }
                tab_champs_sortie.push( cle );
                if(el.champ_dans_la_base.espece_du_champ === 'TEXT'){
                    o2+='                o1+=\'<th style="max-width:360px;">';
                }else{
                    o2+='                o1+=\'<th>';
                }
                o2+='' + liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_bref_du_champ + '</th>\';\r\n';
            }
        }
        o2+='                o1+=\'</tr>\';\r\n';
        o2+='                o1+=lst;\r\n';
        o2+='                o1+=\'</table>\';\r\n';
        o2+='                o1+=\'</div>\';\r\n';
        o2+='            }else{\r\n';
        o2+='                o1+=__gi1.la_liste_est_vide();\r\n';
        o2+='\r\n';
        o2+='            }\r\n';
        o2+='        }\r\n';
        o2+='        return(o1);\r\n';
        o2+='    }\r\n';
        o2+='\r\n';
        o2+='    /*\r\n';
        o2+='      =============================================================================================================\r\n';
        o2+='    */\r\n';
        o2+='\r\n';
        o2+='}\r\n';
        o2+='export{' + this.#nom_de_la_classe_générée1 + ' as ' + this.#nom_de_la_classe_générée1 + '};\r\n';
        
        
        src_client2+='    /*\r\n';
        src_client2+='      =============================================================================================================\r\n';
        src_client2+='    */\r\n';
        src_client2+='}\n';
        src_client2+='export{' + this.#nom_de_la_classe_générée2 + ' as ' + this.#nom_de_la_classe_générée2 + '};\r\n';

        
        
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function sous_liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
        src_hph+='        $this->fonction_liste=\'sous_liste1\';\r\n';
        src_hph+='        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);\r\n';
        src_hph+='        return;\r\n';
        src_hph+='    }\r\n';
        src_hph+='    /*\r\n';
        src_hph+='      =============================================================================================================\r\n';
        src_hph+='    */\r\n';
        src_hph+='    function liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){\r\n';
        src_hph+='        $this->fonction_liste=\'liste1\';\r\n';
        src_hph+='        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);\r\n';
        src_hph+='        return;\r\n';
        src_hph+='    }\r\n';
        src_hph+='\r\n';
        src_hph+='}';
        /*
        
        */
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
        src_serveur_js2+='        this.fonction_liste=\'liste1\';\r\n';
        src_serveur_js2+='        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );\r\n';
        src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
        src_serveur_js2+='    }\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    async sous_liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){\r\n';
        src_serveur_js2+='        this.fonction_liste=\'sous_liste1\';\r\n';
        src_serveur_js2+='        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );\r\n';
        src_serveur_js2+='        return({"__xst" : __xsu});\r\n';
        src_serveur_js2+='    }\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    moi=\'' + this.#nom_de_la_classe_générée2 + '\';\r\n';
        src_serveur_js2+='    __gi1=null;\r\n';
        src_serveur_js2+='    fonction_liste=\'liste1\';\r\n';
        src_serveur_js2+='    /*\r\n';
        src_serveur_js2+='      =============================================================================================================\r\n';
        src_serveur_js2+='    */\r\n';
        src_serveur_js2+='    constructor( __gi1 ){\r\n';
        src_serveur_js2+='        this.__gi1=__gi1;\r\n';
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
            __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : 'Erreur dans le javascript généré' + __gi1.__rev1.nl2()} );
            document.getElementById( 'JS_client2' ).value=src_client2;
            __gi1.affiche_les_messages();
        }
        
        
        let aa=this.#_developpement1.normaliser_php( src_hph );
        if(aa.__xst === __xsu){
            document.getElementById( 'php_bdd1' ).value=aa.rev_vers_php.__xva;
        }else{
            __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : 'Erreur dans le php généré' + __gi1.__rev1.nl2()} );
            document.getElementById( 'php_bdd1' ).value=src_hph;
            __gi1.affiche_les_messages();
        }
        let bb=this.#_developpement1.normaliser_javascript( o2 );
        if(bb.__xst === __xsu){
            /* document.getElementById( 'js_bdd1' ).value=o2; */
            document.getElementById( 'js_bdd1' ).value=bb.rev_vers_js.__xva;
        }else{
            __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : 'Erreur dans le javascript généré' + __gi1.__rev1.nl2()} );
            document.getElementById( 'js_bdd1' ).value=o2;
            __gi1.affiche_les_messages();
        }
        let cc=this.#_developpement1.normaliser_javascript( src_serveur_js2 );
        if(cc.__xst === __xsu){
            /* document.getElementById( 'serveur_js2' ).value=src_serveur_js2; */
            document.getElementById( 'serveur_js2' ).value=cc.rev_vers_js.__xva;
        }else{
            __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : 'Erreur dans le javascript généré' + __gi1.__rev1.nl2()} );
            document.getElementById( 'serveur_js2' ).value=src_serveur_js2;
            __gi1.affiche_les_messages();
        }
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
                let id_requete=parseInt( lst[lst.length - 1].value , 10 );
                document.getElementById( 'reference_requete_' + type_requete ).value=id_requete;
                document.getElementById( 'libelle_de_la_requete_' + type_requete ).innerHTML='' + __gi1.__liste_des_sql[id_requete].cht_sql_requete + '';
            }
        }
        if(this.#liste_des_types_de_requetes.liste_ecran === true){
            document.getElementById( 'gererer_le_js_bdd1' ).style.visibility='visible';
            let obj=this.générer_les_programmes( null );
            if(obj.__xst === __xsu){
            }else{
                __gi1.affiche_les_messages();
            }
        }else{
            document.getElementById( 'gererer_le_js_bdd1' ).style.visibility='hidden';
        }
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
            }else{
                document.getElementById( zone_pre ).innerHTML='' + __gi1.__liste_des_sql[document.getElementById( zone_select ).value].cht_sql_requete + '';
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
    enrichir_objet_base( mat2 ){
        let l02=mat2.length;
        let nom_de_la_table='';
        this.#obj_bdd={};
        this.#obj_table={};
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
                                                            aa=__gi1.__liste_des_genres[mat2[o + 1][1]].cht_particularités_genre;
                                                        }catch(e){
                                                            /* debugger */
                                                        }
                                                        if(aa !== null && aa !== ''){
                                                            var obj1=__gi1.__rev1.rev_tm( __gi1.__liste_des_genres[mat2[o + 1][1]].cht_particularités_genre );
                                                            for( let o=1 ; o < obj1.__xva.length ; o=obj1.__xva[o][12] ){
                                                                if(obj1.__xva[o][2] === 'f' && obj1.__xva[o][8] === 1 && obj1.__xva[o + 1][2] === 'c'){
                                                                    cht_particularités_genre[obj1.__xva[o][1]]=__gi1.est_num( obj1.__xva[o + 1][1] ) ? ( parseInt( obj1.__xva[o + 1][1] ) ) : ( obj1.__xva[o + 1][1] );
                                                                }
                                                            }
                                                        }
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['cht_particularités_genre']=cht_particularités_genre;
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_objet_du_champ']=__gi1.__liste_des_genres[mat2[o + 1][1]];
                                                        /*
                                                          debugger
                                                          __gi1.__liste_des_genres
                                                        */
                                                        /* console.log('mat2[o][1]='+nom_du_champ+ ' : ' +mat2[o+1][1]); */
                                                    }else{
                                                        if(mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o + 1][2] === 'c'){
                                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1]]=mat2[o + 1][1];
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
        console.log( 'this.#obj_bdd' , this.#obj_bdd );
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
    charger_base1( chi_id_basedd , nom_de_la_table ){
        /* mat , d  ]{ */
        /*
          let chi_id_basedd='';
          let nom_de_la_table='';
          let l01=mat.length;
          for(let i=d+1;i<l01;i=mat[i][12]){
          if(mat[i][1] === 'chi_id_basedd' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
          chi_id_basedd=parseInt(mat[i + 1][1]);
          }else if(mat[i][1] === 'nom_de_la_table' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
          nom_de_la_table=mat[i + 1][1];
          }
          }
        */
        this.#mat=this.#arbre[chi_id_basedd];
        this.enrichir_objet_base( this.#mat.matrice );
        this.#nom_de_la_table=nom_de_la_table;
        this.#obj_table=this.#obj_bdd[this.#nom_de_la_table];
        let o1='';
        o1+='<div class="yy_conteneur_txtara">';
        o1+='<table border="1">';
        for(let type_requete in this.#liste_des_types_de_requetes){
            o1+='<tr>';
            o1+='<td>';
            /* style="width:30%;" */
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(selectionner_une_requete(';
            cmd+=' zone_select(reference_requete_' + type_requete + ')';
            cmd+=' zone_pre(libelle_de_la_requete_' + type_requete + ')';
            cmd+=')))';
            o1+=type_requete + ' : <br />';
            o1+='<select id="reference_requete_' + type_requete + '" data-rev_change="' + cmd + '">';
            o1+='<option value="">indéfini</option>';
            for(let i in __gi1.__liste_des_sql){
                if(type_requete === 'select' || type_requete === 'liste_ecran'){
                    if(__gi1.__liste_des_sql[i].cht_sql_requete === null){
                        __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : 'La requête ' + i + ' a un champ sql vide' + __gi1.__rev1.nl2()} );
                        __gi1.affiche_les_messages();
                    }else{
                        if(__gi1.__liste_des_sql[i].cht_sql_requete.indexOf( this.#nom_de_la_table + ' T0' ) >= 0
                               && __gi1.__liste_des_sql[i].chp_type_requete === type_requete
                               && __gi1.__liste_des_sql[i].che_est_souche_requete === 1
                        ){
                            o1+='<option value="' + i + '">' + i + '</option>';
                        }
                    }
                }else{
                    if(__gi1.__liste_des_sql[i].cht_sql_requete === null){
                        __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : 'La requête ' + i + ' a un champ sql vide' + __gi1.__rev1.nl2()} );
                        __gi1.affiche_les_messages();
                    }else{
                        if(__gi1.__liste_des_sql[i].cht_sql_requete.indexOf( this.#nom_de_la_table ) >= 0
                               && __gi1.__liste_des_sql[i].chp_type_requete === type_requete
                               && __gi1.__liste_des_sql[i].che_est_souche_requete === 1
                        ){
                            o1+='<option value="' + i + '">' + i + '</option>';
                        }
                    }
                }
            }
            o1+='</select><br />';
            o1+=' <div class="rev_bouton" data-rev_click="';
            o1+='m1(n1(' + this.moi + ')f1(agrandir_la_zone_req(zone(libelle_de_la_requete_' + type_requete + '))))';
            o1+='" title="agrandir la zone">🖐</div>';
            o1+=' <div class="rev_bouton" data-rev_click="';
            o1+='m1(n1(' + this.moi + ')f1(retrecir_la_zone_req(zone(libelle_de_la_requete_' + type_requete + '))))';
            o1+='" title="retrecir la zone">👊</div>';
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
        o1+='N° de classe : <select id="incice_de_la_classe">';
        o1+='<option value="1" selected>1</option>';
        o1+='<option value="2" >2</option>';
        o1+='<option value="3" >3</option>';
        o1+='<option value="4" >4</option>';
        o1+='<option value="5" >5</option>';
        o1+='<option value="6" >6</option>';
        o1+='<option value="7" >7</option>';
        o1+='<option value="8" >8</option>';
        o1+='<option value="9" >9</option>';
        o1+='</select>';
        o1+=', ne pas prendre les valeurs en session : ';
        o1+='<input id="ne_pas_prendre_les_valeurs_en_session" type="checkbox" />';
        o1+='<div id="gererer_le_js_bdd1" data-rev_click="m1(n1(' + this.moi + '),f1(générer_les_programmes()))" style="visibility:hidden;" class="rev_bouton yy__1">générer les programmes</div>';
        /*
        */
        o1+='<div class="yy_conteneur_txtara">';
        o1+=' <div>';
        o1+='  JS client 2:';
        o1+=__gi1.__fnt1.boutons_edition1( 'JS_client2' );
        o1+=' </div>';
        o1+=' <textarea id="JS_client2" rows="10" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        /*
        */
        o1+='<div class="yy_conteneur_txtara">';
        o1+=' <div>';
        o1+='  JS serveur 2 : ';
        o1+=__gi1.__fnt1.boutons_edition1( 'serveur_js2' );
        o1+=' </div>';
        o1+=' <textarea id="serveur_js2" rows="10" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        /*
        */
        o1+='<div class="yy_conteneur_txtara">';
        o1+=' <div>';
        o1+='  JS client 1:';
        o1+=__gi1.__fnt1.boutons_edition1( 'js_bdd1' );
        o1+=' </div>';
        o1+=' <textarea id="js_bdd1" rows="10" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        /*
        */
        o1+='<div class="yy_conteneur_txtara">';
        o1+=' <div>';
        o1+='  PHP serveur 1:';
        o1+=__gi1.__fnt1.boutons_edition1( 'php_bdd1' );
        o1+=' </div>';
        o1+=' <textarea id="php_bdd1" rows="10" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>';
        let contenu_generer_le_php=document.getElementById( 'contenu_generer_le_php' );
        contenu_generer_le_php.innerHTML=o1;
        __gi1.ajoute_les_evenements_aux_boutons( null );
        setTimeout( () => {
                this.pre_selectionner();} , 50 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_table( mat , d ){
        document.getElementById( 'contenu_generer_le_php' ).innerHTML='';
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
                window.location.hash='m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1(chi_id_basedd(' + chi_id_basedd + '),nom_de_la_table(\'' + __gi1.fi1( nom_de_la_table ) + '\'))))';
                this.charger_base1( chi_id_basedd , nom_de_la_table );
            }else{
                window.location.hash='m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1(chi_id_basedd(' + chi_id_basedd + '))))';
            }
        }else{
            window.location.hash='m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1(chi_id_basedd(' + chi_id_basedd + '))))';
            __gi1.ajoute_les_evenements_aux_boutons( null );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_base( mat , d ){
        document.getElementById( 'contenu_generer_le_php' ).innerHTML='';
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
                window.location.hash='m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1(chi_id_basedd(' + chi_id_basedd + '))))';
                for(let j in this.#arbre[chi_id_basedd].tables){
                    o1+='<option ';
                    o1+=' id="option_table_"';
                    o1+=this.#arbre[chi_id_basedd].tables[j];
                    o1+='"';
                    o1+='>' + this.#arbre[chi_id_basedd].tables[j] + '</option>';
                }
            }
        }
        document.getElementById( 'vv_les_tables' ).innerHTML=o1;
        __gi1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    recuperer_zone_travail_pour_les_bases2( mat , d , le_message_du_serveur=null ){
        let chi_id_basedd=0;
        let nom_de_la_table='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        this.#arbre={};
        let o1='';
        o1+='bases : ';
        o1+='<select';
        o1+=' id="vv_les_bases" ';
        o1+=' data-rev_change="';
        o1+='m1(n1(' + this.moi + '),f1(selectionner_une_base(zone_select(vv_les_bases))))';
        o1+='">';
        o1+='<option  value="0" ' + (0 === chi_id_basedd ? ( ' selected ' ) : ( '' )) + '>sélectionnez une base </option>';
        for(let i in le_message_du_serveur.__xva.les_bases_du_projet){
            if(le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] === null){
            }else{
                o1+='<option ';
                o1+=' value="' + le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] + '" ';
                o1+=' id="option_base_"';
                o1+=le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'];
                o1+='"';
                if(le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] === chi_id_basedd){
                    o1+=' selected ';
                }
                o1+='>' + le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] + '</option>';
                this.#arbre[le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']]={"matrice" : null ,"tables" : []};
                var obj1=__gi1.__rev1.rev_tm( le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] );
                if(obj1.__xst === __xsu){
                    this.#arbre[le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']].matrice=obj1.__xva;
                    let mat2=obj1.__xva;
                    let l02=mat2.length;
                    for( let j=1 ; j < l02 ; j=mat2[j][12] ){
                        if(mat2[j][1] === 'créer_table'){
                            for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                                if(mat2[k][1] === 'nom_de_la_table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                    this.#arbre[le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']].tables.push( mat2[k + 1][1] );
                                }
                            }
                        }
                    }
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                    /* __gi1.remplis_les_messages_et_affiche( '' ); */
                    return({"__xst" : __xer});
                }
            }
        }
        o1+='</select>';
        o1+=' , tables : ';
        o1+=' <select id="vv_les_tables" ';
        o1+=' data-rev_change="';
        o1+='m1(n1(' + this.moi + '),f1(selectionner_une_table(zone_select(vv_les_tables))))';
        o1+='">';
        o1+='<option  value="" ' + ('' === nom_de_la_table ? ( ' selected ' ) : ( '' )) + '>sélectionnez une table </option>';
        if(chi_id_basedd > 0){
            for(let j in this.#arbre[chi_id_basedd].tables){
                o1+='<option ';
                o1+=' id="option_table_"';
                o1+=this.#arbre[chi_id_basedd].tables[j];
                o1+='"';
                if(nom_de_la_table === this.#arbre[chi_id_basedd].tables[j]){
                    o1+=' selected ';
                }
                o1+='>' + this.#arbre[chi_id_basedd].tables[j] + '</option>';
            }
        }
        o1+='</select>';
        document.getElementById( 'zone_selection' ).innerHTML=o1;
        if(chi_id_basedd > 0 && nom_de_la_table !== ''){
            this.charger_base1( chi_id_basedd , nom_de_la_table );
        }else{
            __gi1.ajoute_les_evenements_aux_boutons( null );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_generer_le_programme1( mat , d ){
        let l01=mat.length;
        let nom_de_la_table='';
        let chi_id_basedd=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_de_la_table' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'chi_id_basedd' && mat[i][8] == 1 && mat[i][2] == 'f' && mat[i + 1][2] == 'c'){
                chi_id_basedd=mat[i + 1][1];
            }
        }
        let $o1='';
        $o1+='<h1>générer les programmes </h1>';
        /* sur ' + nom_de_la_table + '(' + chi_id_basedd + ') */
        $o1+='<div id="zone_selection"></div>';
        $o1+='<div id="contenu_generer_le_php"></div>';
        __gi1.maj_contenu_principal( $o1 );
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(recuperer_zone_travail_pour_les_bases2(';
        cmd+=' chi_id_basedd(' + chi_id_basedd + '),';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' nom_du_module2(' + this.moi + '),';
        cmd+='))))';
        let obj={"__xac" : cmd};
        __gi1.envoyer_un_message_au_worker( obj );
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'générer les programmes' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{ecran_generer_programmes as ecran_generer_programmes};