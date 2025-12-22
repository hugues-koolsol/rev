import {_developpement1} from './_developpement1.js';
/*
  enrichir_objet_base
*/
class ecran_generer_souches{
    moi='ecran_generer_souches';
    #mat=null;
    #obj_bdd={};
    #obj_table={};
    #liste_de_tables_liste_ecran=[];
    #arbre={};
    #_developpement1=null;
    #chemin_module1=null;
    #nom_de_la_table=null;
    #a_construire={"select" : null ,"insert" : null ,"liste_ecran" : null ,"delete" : null ,"update" : null};
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
    charger_les_requetes_souches( mat , d , le_message_du_serveur=null ){
        if(le_message_du_serveur && le_message_du_serveur.__xst === __xsu){
            for(let req in le_message_du_serveur.__xva.requetes){
                let elt=le_message_du_serveur.__xva.requetes[req];
                /*  */
                this.#a_construire[elt['T0.chp_type_requete']]={"id" : parseInt( elt['T0.chi_id_requete'] , 10 ) ,"type" : elt['T0.chp_type_requete']};
            }
        }
        let o1='';
        o1+='<table border="1">';
        o1+='<tr>';
        o1+='<th>id</th>';
        o1+='<th>type</th>';
        o1+='</tr>';
        for(let i in this.#a_construire){
            if(this.#a_construire[i] === null){
                o1+='<tr>';
                /*  */
                o1+='<td>';
                o1+='';
                o1+='</td>';
                /*  */
                o1+='<td>';
                o1+=i;
                o1+='</td>';
                /*  */
                o1+='</tr>';
            }
        }
        /*
          
        */
        for(let i in this.#a_construire){
            if(this.#a_construire[i] !== null){
                o1+='<tr>';
                /*  */
                o1+='<td class="yy__1">';
                o1+=this.#a_construire[i].id;
                o1+='</td>';
                /*  */
                o1+='<td class="yy__1">';
                o1+=this.#a_construire[i].type;
                o1+='</td>';
                /*  */
                o1+='</tr>';
            }
        }
        o1+='</table>';
        document.getElementById( 'les_requetes' ).innerHTML=o1;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    charger_les_requetes_existantes( p ){
        let chi_id_basedd=parseInt( document.getElementById( 'vv_les_bases' ).value , 10 );
        let nom_de_la_table=document.getElementById( 'vv_les_tables' ).value;
        if(chi_id_basedd > 0 && nom_de_la_table && nom_de_la_table !== ''){
            let cmd='';
            cmd+='pm1(m1(n1(' + this.moi + '),f1(charger_les_requetes_souches(';
            cmd+=' chi_id_basedd(' + chi_id_basedd + '),';
            cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
            cmd+=' nom_du_module2(' + this.moi + '),';
            cmd+='))))';
            let obj={"__xac" : cmd};
            __gi1.envoyer_un_message_au_worker( obj );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    charger_base1( chi_id_basedd , nom_de_la_table , le_message_du_serveur=null ){
        let o1='';
        this.#mat=this.#arbre[chi_id_basedd];
        this.enrichir_objet_base( this.#mat.matrice );
        this.#nom_de_la_table=nom_de_la_table;
        this.#obj_table=this.#obj_bdd[this.#nom_de_la_table];
        let vis='style="visibility:hidden;"';
        if(nom_de_la_table !== '' && chi_id_basedd > 0){
            vis='style="visibility:;"';
        }
        o1+='<div id="gererer_le_js_bdd1" data-rev_click="m1(n1(' + this.moi + '),f1(charger_les_requetes_existantes()))" ' + vis + ' class="rev_bouton yy__1">générer les requêtes souches</div>';
        o1+='<div id="les_requetes"></div>';
        let contenu_generer_le_php=document.getElementById( 'contenu_generer_le_php' );
        contenu_generer_le_php.innerHTML=o1;
        __gi1.ajoute_les_evenements_aux_boutons( null );
        setTimeout( () => {
                this.charger_les_requetes_existantes();} , 50 );
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
                window.location.hash='m1(n1(ecran_generer_souches),f1(page_generer_les_souches1(chi_id_basedd(' + chi_id_basedd + '),nom_de_la_table(\'' + __gi1.fi1( nom_de_la_table ) + '\'))))';
                this.charger_base1( chi_id_basedd , nom_de_la_table );
            }else{
                window.location.hash='m1(n1(ecran_generer_souches),f1(page_generer_les_souches1(chi_id_basedd(' + chi_id_basedd + '))))';
            }
        }else{
            window.location.hash='m1(n1(ecran_generer_souches),f1(page_generer_les_souches1(chi_id_basedd(' + chi_id_basedd + '))))';
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
                window.location.hash='m1(n1(ecran_generer_souches),f1(page_generer_les_souches1(chi_id_basedd(' + chi_id_basedd + '))))';
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
    page_generer_les_souches1( mat , d ){
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
        $o1+='<h1>générer les requêtes souches</h1>';
        $o1+='<div id="zone_selection"></div>';
        $o1+='<div id="contenu_generer_le_php"></div>';
        /* sur ' + nom_de_la_table + '(' + chi_id_basedd + ') */
        __gi1.maj_contenu_principal( $o1 );
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(recuperer_zone_travail_pour_les_bases2(';
        cmd+=' chi_id_basedd(' + chi_id_basedd + '),';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' nom_du_module2(' + this.moi + '),';
        /* cmd+=' fonction_a_appeler(charger_base1)'; */
        cmd+='))))';
        let obj={"__xac" : cmd};
        __gi1.envoyer_un_message_au_worker( obj );
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'générer les requêtes souches' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{ecran_generer_souches as ecran_generer_souches};