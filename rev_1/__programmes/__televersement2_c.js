"use strict";
/* CLIENT */
const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
class __televersement2{
    /*#
      exemple d'appel à inclure , rechercher xxxxxxxx pour voir ce qu'il y a à changer
      
      
      o1+='  <div class="yy_edition_champ1">';
      o1+='    <div class="yy_edition_libelle1">';
      o1+='      <span>fichiers attachés</span>';
      o1+='    </div>';
      o1+='    <div class="yy_edition_valeur1">';
      o1+='      <div class="rev_bouton yy__1" data-rev_click="';
      o1+='m1(n1(__televersement2),f1(afficher_la_sous_fenetre_televersement1('
      o1+='  traitement_final(';
      o1+='    pm1(';
      o1+='      m1(';
      o1+='        n1(__televersement2),';
      o1+='        f1(';
      o1+='          enregistrer_televersement_standard1(';
      o1+='            chi_id_basedd(3),';
      o1+='            nom_de_la_table_referente(\'tbl_xxxxxxxx_le_nom_de_la_table_xxxxxxxx\'),'; // exemple : tbl_dessins
      o1+='            id_element(' + enreg['T0.xxxxxxxx_le_nom_du_champ_cle_du_champ_xxxxxxxxxxx'] + '),';  // exemple : chi_id_dessin
      o1+='            nom_champ_cle(xxxxxxxx_le_nom_du_champ_cle_du_champ_xxxxxxxxxxx)'; // exemple : chi_id_dessin
      o1+='            recharger_la_page_courante(1)';
      o1+='          )';
      o1+='        )';
      o1+='      )';
      o1+='    )';
      o1+='  )'
      o1+='  plusieurs_fichiers_possibles(5)'
      o1+=')))';
      o1+='" >téléverser un fichier attaché</div>';
      o1+='    </div>';
      o1+='  </div>';
    */
    moi='__televersement2';
    #les_morceaux_televerses=[];
    #le_colis={};
    /*
      un fichier est découpé en morceaux
      chaque morceau contient la caractéristique du fichier concerné
      car il peut y avoir plusieurs fichiers à télécharger
      #les_morceaux_a_televerser contient tous les morceaux
    */
    #les_morceaux_a_televerser=[];
    /*
      en réalité 802 736 280  : c'est le plus gros fichier que j'ai essayé de télécharger
      ici on met 900 000 000
    */
    #poids_max_televersement=900e6;
    /*
      cette taille de 10 000 000 octets ( 10 millions ) est
      un bon compromis entre la vitesse de téléchargement et la capacité
      du navigateur
      Pour les tests, je le mets à 10e3 ( 10 ko )
    */
    #taille_du_morceau_pour_televersement=10e6;
    /* 10e6; */
    /*
      entre chaque envoi de paquet on attend 20 ms
      pour mes tests, je mets 200
      mettre une valeur plus basse a peu d'intérêt
    */
    #duree_d_attente_televersement=20;
    #televersement_en_cours=false;
    #parametres_televersement='';
    date_de_reference_televersement='';
    plusieurs_fichiers_possibles=1;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    enregistrer_televersement_standard1( mat , d ){
        let recharger_la_page_courante=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'recharger_la_page_courante' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                recharger_la_page_courante=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(recharger_la_page_courante === 1){
            debugger
            this.__ig1.executer1( location.hash.substr( 1 ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    tableau_html_des_televersements( mat , d , le_tableau ){
        let o1='';
        if(le_tableau.length === 0){
            o1+='<h5 class="yy__2">aucun fichier attaché</h5>';
        }else{
            o1+='<table id="tableau_html_des_televersements">';
            o1+='<tr>';
            o1+='<th>action</th>';
            o1+='<th>id</th>';
            o1+='<th>origine</th>';
            o1+='<th>commentaires</th>';
            o1+='</tr>';
            for(let i in le_tableau){
                let elem=le_tableau[i];
                /*#
                  {
                   "T0.chi_id_televersement":65,
                   "T0.chp_nom_du_dossier_televersement":"/__fichiers_binaires/televersements/2026/08/04/",
                   "T0.chp_nom_fichier_sur_disque_televersement":"0_jpg_51cef009_7187_4ff7_9009_085b8143f41f.jpg",
                   "T0.chp_nom_original_televersement":"0.jpg",
                   "T0.cht_comm_glob_televersement":"test global",
                   "T0.chp_comm_fichier_televersement":"ski poudreuse"}
                */
                o1+='<tr>';
                /*  */
                o1+='<td>';
                o1+='<div class="rev_b_svg yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_televersement(' + elem['T0.chi_id_televersement'] + ')))))">' + this.__ig1.les_svg.poubelle + '</div>';
                o1+='</td>';
                /*  */
                o1+='<td>' + elem['T0.chi_id_televersement'] + '</td>';
                /*  */
                o1+='<td>' + this.__ig1.fi2( elem['T0.chp_nom_original_televersement'] ) + '</td>';
                o1+='<td>';
                o1+=this.__ig1.fi2( elem['T0.chp_comm_fichier_televersement'] );
                if(elem['T0.cht_comm_glob_televersement'] !== null && elem['T0.cht_comm_glob_televersement'] !== ''){
                    o1+='<hr />';
                    o1+=this.__ig1.fi2( elem['T0.cht_comm_glob_televersement'] );
                }
                o1+='</td>';
                o1+='</tr>';
            }
            o1+='</table>';
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    televerser2(){
        /*
          exemple pris de :        
          https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript 
        */
        if(this.#les_morceaux_a_televerser.length > 0){
            let tt=this.#les_morceaux_a_televerser.splice( 0 , 1 );
            tt=tt[0];
            /* console.log(tt); */
            this.#les_morceaux_televerses.push( {
                    "nombre_de_morceaux" : tt.__xva.nombre_de_morceaux ,
                    "numero_morceau_de_fichier" : tt.__xva.numero_morceau_de_fichier ,
                    "nom_du_fichier" : tt.__xva.nom_du_fichier ,
                    "nom_original" : tt.__xva.nom_original ,
                    "poids_du_fichier" : tt.__xva.poids_du_fichier ,
                    "type_mime_detecte_par_navigateur" : tt.__xva.type_mime_detecte_par_navigateur
                } );
            try{
                let header_post={
                    "Content-Type" : 'application/octet-stream' ,
                    "x-nom_original" : encodeURIComponent( tt.__xva.nom_original ) ,
                    "x-nom_du_fichier" : encodeURIComponent( tt.__xva.nom_du_fichier ) ,
                    "x-_CA_" : encodeURIComponent( tt.__xva._CA_ ) ,
                    "x-chi_id_utilisateur" : encodeURIComponent( tt.__xva.chi_id_utilisateur ) ,
                    "x-chi_id_acces" : encodeURIComponent( tt.__xva.chi_id_acces ) ,
                    "x-chi_id_projet" : encodeURIComponent( tt.__xva.chi_id_projet ) ,
                    "x-numero_morceau_de_fichier" : encodeURIComponent( tt.__xva.numero_morceau_de_fichier ) ,
                    "x-nombre_de_morceaux" : encodeURIComponent( tt.__xva.nombre_de_morceaux ) ,
                    "x-__deverminage" : encodeURIComponent( tt.__xva.__deverminage ) ,
                    "x-date_de_reference_televersement" : this.date_de_reference_televersement ,
                    "x-type_mime_detecte_par_navigateur" : encodeURIComponent( tt.__xva.type_mime_detecte_par_navigateur )
                };
                const response=fetch( 'http://' + this.__ig1.__le_serveur + ':' + this.__ig1.__le_port + '/' , {
                    "method" : 'POST' ,
                    "headers" : header_post ,
                     /*
                      on envoie des données binaires brutes
                     */
                    "body" : tt.__xva.fichier_binaire
                } ).then( ( response ) => {
                    tt=null;
                    const reader=response.body.getReader();
                    /*
                      When no more data needs to be consumed, close the stream
                      Enqueue the next data chunk into our target stream
                    */
                    return(new ReadableStream( {
                             start( controller ){
                                return(pump());
                                function pump(){
                                    return(reader.read().then( ( { done  , value } ) => {
                                            if(done){
                                                controller.close();
                                                return;
                                            }
                                            controller.enqueue( value );
                                            return(pump());
                                    } ));
                                }
                            } 
                        
                        } ));
            } ).then( ( stream ) => {
                    return(new Response( stream ));
            } ).then( ( response ) => {
                    return(response.blob());
            } ).then( ( blob ) => {
                    (blob.text()).then( ( val ) => {
                            if(val.substr( 0 , 19 ) === 'erreur_dans_serveur'){
                                console.error( 'val=' , val );
                                let temporaire1=this.__ig1.__rev1.rev_tm( val );
                                if(temporaire1.__xst === __xsu){
                                    let l01=temporaire1.__xva.length;
                                    let message='';
                                    for( let i=1 ; i < l01 ; i=temporaire1.__xva[i][12] ){
                                        if(temporaire1.__xva[i][1] === 'erreur_dans_serveur' && temporaire1.__xva[i][2] === 'f'){
                                            for( let j=i + 1 ; j < l01 ; j=temporaire1.__xva[j][12] ){
                                                if(temporaire1.__xva[j][1] === 'message'
                                                       && temporaire1.__xva[j][2] === 'f'
                                                       && temporaire1.__xva[j][8] === 1
                                                       && temporaire1.__xva[j + 1][2] === 'c'
                                                ){
                                                    message=temporaire1.__xva[j + 1][1];
                                                }
                                            }
                                        }
                                    }
                                    this.#televersement_en_cours=false;
                                    this.__ig1.fermer_la_sous_fenetre();
                                    if(message !== ''){
                                        this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : message} );
                                    }else{
                                        this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'il y a eu une erreur lors du téléversement'} );
                                    }
                                    this.__ig1.affiche_les_messages();
                                }
                                return;
                            }else if(val.substr( 0 , 15 ) === 'ok_dans_serveur'){
                                let tt=this.__ig1.__rev1.rev_tm( val );
                                if(tt.__xst === __xsu){
                                    let l01=tt.__xva.length;
                                    let nom_du_fichier='';
                                    let numero_morceau_de_fichier=0;
                                    let nombre_de_morceaux=0;
                                    let repertoire_fichier1='';
                                    let nom_fichier_sur_disque1='';
                                    for( let i=1 ; i < l01 ; i=tt.__xva[i][12] ){
                                        if(tt.__xva[i][1] === 'ok_dans_serveur' && tt.__xva[i][2] === 'f'){
                                            for( let j=i + 1 ; j < l01 ; j=tt.__xva[j][12] ){
                                                if(tt.__xva[j][1] === 'nom_du_fichier' && tt.__xva[j][2] === 'f' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === 'c'){
                                                    nom_du_fichier=tt.__xva[j + 1][1];
                                                }else if(tt.__xva[j][1] === 'numero_morceau_de_fichier'
                                                       && tt.__xva[j][2] === 'f'
                                                       && tt.__xva[j][8] === 1
                                                       && tt.__xva[j + 1][2] === 'c'
                                                ){
                                                    numero_morceau_de_fichier=parseInt( tt.__xva[j + 1][1] , 10 );
                                                }else if(tt.__xva[j][1] === 'nombre_de_morceaux' && tt.__xva[j][2] === 'f' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === 'c'){
                                                    nombre_de_morceaux=parseInt( tt.__xva[j + 1][1] , 10 );
                                                }else if(tt.__xva[j][1] === 'repertoire_fichier1' && tt.__xva[j][2] === 'f' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === 'c'){
                                                    repertoire_fichier1=tt.__xva[j + 1][1];
                                                    this.#les_morceaux_televerses[this.#les_morceaux_televerses.length - 1]['repertoire_fichier1']=repertoire_fichier1;
                                                }else if(tt.__xva[j][1] === 'nom_fichier_sur_disque1'
                                                       && tt.__xva[j][2] === 'f'
                                                       && tt.__xva[j][8] === 1
                                                       && tt.__xva[j + 1][2] === 'c'
                                                ){
                                                    nom_fichier_sur_disque1=tt.__xva[j + 1][1];
                                                    this.#les_morceaux_televerses[this.#les_morceaux_televerses.length - 1]['nom_fichier_sur_disque1']=nom_fichier_sur_disque1;
                                                }
                                            }
                                        }
                                    }
                                    if(nombre_de_morceaux > 0 && numero_morceau_de_fichier > 0 && nom_du_fichier !== ''){
                                        let pourcent=parseInt( (10 * 100 * numero_morceau_de_fichier) / nombre_de_morceaux , 10 ) / 10;
                                        if(pourcent === 100){
                                            console.log( "%c pourcent=" + pourcent , 'background:lightgreen;' );
                                        }else{
                                            /* console.log("%c pourcent="+pourcent , 'background:lightblue;'); */
                                        }
                                        try{
                                            document.getElementById( nom_du_fichier + '_1' ).innerText=pourcent + ' %';
                                            document.getElementById( nom_du_fichier + '_1' ).style.backgroundColor='lime';
                                            if(pourcent <= 10){
                                                document.getElementById( nom_du_fichier + '_1' ).style.width='10%';
                                            }else{
                                                document.getElementById( nom_du_fichier + '_1' ).style.width=pourcent + '%';
                                            }
                                        } catch {}
                                    }
                                }
                                setTimeout( this.televerser2.bind( this ) , this.#duree_d_attente_televersement );
                            }else{
                                this.#televersement_en_cours=false;
                                this.__ig1.fermer_la_sous_fenetre();
                                this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'erreur non traitée<br />' + val + '<br />' + this.__ig1.nl2()} );
                                return;
                            }
                    } );
            } ).catch( ( e ) => {
                    console.log( e.stack );
                    this.#televersement_en_cours=false;
                    this.__ig1.fermer_la_sous_fenetre();
                    this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'erreur non traitée<br />' + e.stack + '<br />' + this.__ig1.nl2()} );
                    return;
            } );
            }catch(err){
                console.log( err.stack );
                this.#televersement_en_cours=false;
                this.__ig1.fermer_la_sous_fenetre();
                this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'erreur non traitée ' + err.stack + '<br />' + this.__ig1.nl2()} );
                return;
            }
        }else{
            this.#televersement_en_cours=false;
            /* à la fin de tous les téléchargements */
            /* console.log( "this.#les_morceaux_televerses=" , this.#les_morceaux_televerses ); */
            let les_fichiers_reellement_televerses=[];
            for(let i in this.#les_morceaux_televerses){
                if(this.#les_morceaux_televerses[i].nombre_de_morceaux === this.#les_morceaux_televerses[i].numero_morceau_de_fichier){
                    les_fichiers_reellement_televerses.push( {
                            "nom_du_fichier" : this.#les_morceaux_televerses[i].nom_du_fichier ,
                            "nom_fichier_sur_disque1" : this.#les_morceaux_televerses[i].nom_fichier_sur_disque1 ,
                            "nom_original" : this.#les_morceaux_televerses[i].nom_original ,
                            "poids_du_fichier" : this.#les_morceaux_televerses[i].poids_du_fichier ,
                            "repertoire_fichier1" : this.#les_morceaux_televerses[i].repertoire_fichier1 ,
                            "type_mime_detecte_par_navigateur" : this.#les_morceaux_televerses[i].type_mime_detecte_par_navigateur ,
                            "vv_commentaire_global_sur_le_televersement" : document.getElementById( 'vv_commentaire_global_sur_le_televersement' ).value ,
                            "commentaire_fichier_" : document.getElementById( 'commentaire_fichier_' + this.#les_morceaux_televerses[i].nom_du_fichier + '_1' ).value
                        } );
                }
            }
            this.#les_morceaux_televerses=[];
            console.log( 'les_fichiers_reellement_televerses=' , les_fichiers_reellement_televerses );
            console.log( 'parametres_televersement' , this.#parametres_televersement );
            /* if(this.#parametres_televersement.indexOf('enregistrer_reference_fichier__televerse_standard1')>=0) */
            let obj2=this.__ig1.__rev1.t2m( this.#parametres_televersement );
            if(obj2.__xst !== __xsu){
                this.__ig1.affiche_les_messages( {"__xst" : __xsu ,"__xme" : 'téléversement terminé'} );
            }else{
                /*#
                  traitement_final(
                     pm1(
                        n1(__ig1),
                        f1(enregistrer_reference_fichier__televerse_standard1(nom_de_la_table_referente('tbl_dessins'),id_element(819),nom_champ_cle(chi_id_dessin)))
                     )
                  ),plusieurs_fichiers_possibles(5)
                */
                let mat3=obj2.__xva;
                let l03=mat3.length;
                let traitement_final='';
                for( let i=1 ; i < l03 ; i=mat3[i][12] ){
                    if(mat3[i][1] === 'traitement_final' && mat3[i][8] > 0){
                        let obj4=this.__ig1.__rev1.m2t( mat3 , i );
                        if(obj4.__xst === __xsu){
                            traitement_final=obj4.__xva;
                        }
                        break;
                    }
                }
                if(traitement_final !== ''){
                    let le_colis={"__xac" : traitement_final ,"__xva" : {"les_fichiers_televerses" : les_fichiers_reellement_televerses}};
                    this.__ig1.envoyer_un_colis_au_worker( le_colis );
                }else{
                    this.__ig1.affiche_les_messages( {"__xst" : __xsu ,"__xme" : 'téléversement terminé'} );
                }
                this.__ig1.fermer_la_sous_fenetre();
                return({"__xst" : __xsu});
            }
        }
    }
    /*
      =============================================================================================================
    */
    initialisation_boucle_sur_televersement4(){
        let les_fichiers=document.getElementById( 'vv_input_fichier_a_telecharger4' );
        for( let numero_fichier=0 ; numero_fichier < les_fichiers.files.length ; numero_fichier++ ){
            const reader=new FileReader();
            reader.readAsArrayBuffer( les_fichiers.files[numero_fichier] );
            reader.onload=function( {} ){
                let nom_original=arguments[0];
                let nom_du_fichier=arguments[1];
                let type_mime_detecte_par_navigateur=arguments[2];
                let numero_fichier=arguments[3];
                let nombre_de_fichiers=arguments[4];
                let numero_argument_donnees=5;
                let poids_du_fichier=arguments[numero_argument_donnees].target.result.byteLength;
                this.__ig1.ma_trace1( "arguments[numero_argument_donnees]" , arguments[numero_argument_donnees].target );
                document.getElementById( nom_du_fichier + '_1' ).innerText='préparation du morceau ';
                if(arguments[numero_argument_donnees].target.result.byteLength > this.#taille_du_morceau_pour_televersement){
                    /* console.log(arguments[numero_argument_donnees]); */
                    let tt=arguments[numero_argument_donnees].target.result;
                    let nombre_de_morceaux=parseInt( tt.byteLength / this.#taille_du_morceau_pour_televersement , 10 ) + (tt.byteLength% this.#taille_du_morceau_pour_televersement === 0 ? ( 0 ) : ( 1 ));
                    let numero_morceau_de_fichier=1;
                    let poids_cumule=0;
                    let position=0;
                    while(position < tt.byteLength){
                        let aa=tt.slice( position , position + this.#taille_du_morceau_pour_televersement );
                        poids_cumule+=aa.byteLength;
                        let fichier_binaire=aa;
                        let xva={
                             /*  */
                            "fichier_binaire" : fichier_binaire ,
                            "nom_zone" : arguments[0] ,
                            "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                            "nombre_de_morceaux" : nombre_de_morceaux ,
                            "nom_du_fichier" : nom_du_fichier ,
                            "poids_du_fichier" : poids_du_fichier ,
                            "poids_max_par_paquet" : this.#taille_du_morceau_pour_televersement ,
                            "nom_original" : nom_original ,
                            "poids_cumule" : poids_cumule ,
                            "poids_envoye" : aa.byteLength ,
                            "type_mime_detecte_par_navigateur" : type_mime_detecte_par_navigateur ,
                            "_CA_" : this.__ig1._CA_ ,
                            "chi_id_utilisateur" : this.__ig1.chi_id_utilisateur ,
                            "chi_id_acces" : this.__ig1.chi_id_acces ,
                            "chi_id_projet" : this.__ig1.chi_id_projet ,
                            "__deverminage" : this.__ig1.__deverminage
                        };
                        this.#les_morceaux_a_televerser.push( {
                                 /*  */
                                "__xva" : xva ,
                                "position" : 0 ,
                                "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                                "__xac" : 'pm1(n1(afr),f1(afr()))'
                            } );
                        numero_morceau_de_fichier++;
                        position+=this.#taille_du_morceau_pour_televersement;
                    }
                }else{
                    let nombre_de_morceaux=1;
                    let numero_morceau_de_fichier=1;
                    let fichier_binaire=arguments[numero_argument_donnees].target.result;
                    let poids_envoye=arguments[numero_argument_donnees].target.result.byteLength;
                    let xva={
                         /*  */
                        "fichier_binaire" : fichier_binaire ,
                        "nom_zone" : arguments[0] ,
                        "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                        "nombre_de_morceaux" : nombre_de_morceaux ,
                        "nom_du_fichier" : nom_du_fichier ,
                        "poids_du_fichier" : poids_du_fichier ,
                        "poids_max_par_paquet" : this.#taille_du_morceau_pour_televersement ,
                        "nom_original" : nom_original ,
                        "poids_envoye" : poids_envoye ,
                        "poids_cumule" : poids_envoye ,
                        "type_mime_detecte_par_navigateur" : type_mime_detecte_par_navigateur ,
                        "_CA_" : this.__ig1._CA_ ,
                        "chi_id_utilisateur" : this.__ig1.chi_id_utilisateur ,
                        "chi_id_acces" : this.__ig1.chi_id_acces ,
                        "chi_id_projet" : this.__ig1.chi_id_projet ,
                        "__deverminage" : this.__ig1.__deverminage
                    };
                    this.#les_morceaux_a_televerser.push( {
                             /*  */
                            "__xva" : xva ,
                            "position" : 0 ,
                            "numero_morceau_de_fichier" : numero_morceau_de_fichier ,
                            "nombre_de_morceaux" : nombre_de_morceaux ,
                            "__xac" : 'pm1(n1(afr),f1(afr()))'
                        } );
                }
                if(numero_fichier === nombre_de_fichiers - 1){
                    if(this.#televersement_en_cours === false){
                        this.#televersement_en_cours=true;
                        setTimeout( this.televerser2.bind( this ) , this.#duree_d_attente_televersement );
                    }
                    try{
                        document.getElementById( 'vv_message_televersement_th' ).innerHTML='Téléversement en cours...';
                    } catch {}
                }
            }.bind( this , les_fichiers.files[numero_fichier].name , les_fichiers.files[numero_fichier].cle_du_fichier , les_fichiers.files[numero_fichier].type , numero_fichier , les_fichiers.files.length );
        }
    }
    /*
      =============================================================================================================
    */
    action_bouton_envoyer_televersement4( e ){
        setTimeout( this.initialisation_boucle_sur_televersement4.bind( this ) , 50 );
    }
    /*
      =============================================================================================================
    */
    fichiers_ajoutés_pour_téléversement4( mat , d , e ){
        let aa=new Date();
        this.date_de_reference_televersement=aa.getFullYear() + '/' + (aa.getMonth() + 1 < 10 ? ( '0' + (aa.getMonth() + 1) ) : ( aa.getMonth() + 1 )) + '/' + (aa.getDate() < 10 ? ( '0' + aa.getDate() ) : ( aa.getDate() ));
        let l01=mat.length;
        let id=null;
        let id_du_bouton=null;
        let la_zone_des_fichiers=0;
        let dans_un_formulaire=false;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'id' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id=mat[i + 1][1];
            }else if(mat[i][1] === 'id_du_bouton' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_du_bouton=mat[i + 1][1];
            }else if(mat[i][1] === 'la_zone_des_fichiers' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                la_zone_des_fichiers=mat[i + 1][1];
            }else if(mat[i][1] === 'dans_un_formulaire' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                dans_un_formulaire=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_du_bouton !== null && id !== null && la_zone_des_fichiers !== null){
            let a=null;
            try{
                a=document.getElementById( id_du_bouton );
            } catch {}
            let b=null;
            try{
                b=document.getElementById( id );
            } catch {}
            let c=null;
            try{
                c=document.getElementById( la_zone_des_fichiers );
            } catch {}
            if(a !== null && b !== null && c !== null){
                document.getElementById( 'vv_bouton_pour_selectionner' ).style.visibility='hidden';
                if(b.files.length > 0){
                    let cumul_taille=0;
                    let t='';
                    t+='<table style="width:100%;border:1px var(--c_coul_fond5) solid;border-collapse: collapse;">';
                    t+='<tr>';
                    t+='<th style="width:100%;" id="vv_message_televersement_th">';
                    t+='veuillez cliquer sur le bouton';
                    t+='</tr>';
                    t+='<tr>';
                    t+='<td style="width:100%;">';
                    t+='<div id="vv_message_televersement" style="height:' + (this.__ig1.css_dimensions.t_police + 2) + 'px;width:0%;text-align:right;"></div>';
                    t+='</td>';
                    t+='</th>';
                    t+='</tr>';
                    for( let i=0 ; i < b.files.length ; i++ ){
                        /* console.log('b.files[i]=' , b.files[i].type ) */
                        b.files[i]['cle_du_fichier']=self.crypto.randomUUID();
                        t+='<tr>';
                        t+='<td style="width:100%;" id="' + b.files[i]['cle_du_fichier'] + '_0">';
                        cumul_taille+=b.files[i].size;
                        t+='[' + b.files[i].type + ']  (' + b.files[i].size + ') ' + b.files[i].name + '';
                        t+='</td>';
                        t+='</tr>';
                        t+='<tr>';
                        t+='<td style="width:100%;">';
                        t+='<div id="' + b.files[i]['cle_du_fichier'] + '_1" style="height:10px;width:100%;"></div>';
                        t+='</td>';
                        t+='</tr>';
                        t+='<tr>';
                        t+='<td style="width:100%;">';
                        t+='<input id="commentaire_fichier_' + b.files[i]['cle_du_fichier'] + '_1" placeholder="commentaire éventuel sur le fichier ' + b.files[i].name.replace( /"/g , '&quot;' ) + '" style="height: var(--t_hauteur_input1);width:100%;" /></div>';
                        t+='</td>';
                        t+='</tr>';
                    }
                    t+='<tr>';
                    t+='<td style="width:100%;">';
                    if(cumul_taille > this.#poids_max_televersement || b.files.length > this.plusieurs_fichiers_possibles){
                        if(cumul_taille > this.#poids_max_televersement){
                            t+='<span style="background:red;">' + cumul_taille.toLocaleString( 'fr-FR' , {"minimumFractionDigits" : 0} ) + 'o</span> &gt; ' + this.#poids_max_televersement + 'o';
                            t+='<br />';
                            t+='la taille totale est supérieur à la taille limite de téléchargement';
                            t+='<br />';
                            t+='mettez moins de fichiers';
                        }else{
                            t+='<span style="background:red;">vous êtes limité à ' + this.plusieurs_fichiers_possibles + ' fichiers</span>';
                            t+='mettez moins de fichiers';
                        }
                    }else{
                        t+='<span id="vv_total_a_televerser" data-entier="' + cumul_taille + '">' + cumul_taille.toLocaleString( 'fr-FR' , {"minimumFractionDigits" : 0} ) + '</span> octets au total à téléverser';
                    }
                    t+='</td>';
                    t+='</tr>';
                    c.innerHTML=t;
                    c.style.display='block';
                    if(cumul_taille > this.#poids_max_televersement || b.files.length > this.plusieurs_fichiers_possibles){
                    }else{
                        a.style.visibility='visible';
                    }
                    return({"__xst" : __xsu});
                }
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    afficher_la_sous_fenetre_televersement1( mat , d ){
        this.plusieurs_fichiers_possibles=1;
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'plusieurs_fichiers_possibles' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.plusieurs_fichiers_possibles=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let chi_id_dossier=0;
        let chp_nom_dossier='';
        let nom_de_la_table='';
        let id_element=0;
        let nom_champ_cle='';
        let obj2=this.__ig1.__rev1.m2t( mat , d );
        if(obj2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        this.#les_morceaux_televerses=[];
        this.#parametres_televersement=obj2.__xva;
        let o1='';
        if(this.plusieurs_fichiers_possibles > 1){
            o1+='<h1>téléverser des fichiers ( ' + this.plusieurs_fichiers_possibles + ' max )</h1>';
        }else{
            o1+='<h1>téléverser un fichier</h1>';
        }
        o1+='<br />';
        o1+='<div id="vv_telecharger4">';
        o1+='    <label for="vv_commentaire_global_sur_le_televersement">';
        o1+='       entrez ici un commentaire éventuel';
        o1+='       <textarea rows="5" cols="50" id="vv_commentaire_global_sur_le_televersement"></textarea>';
        o1+='    </label>';
        o1+='    <form method="post" id="vv_id_televersement4">';
        o1+='        <label id="vv_bouton_pour_selectionner" for="vv_input_fichier_a_telecharger4" style="border: 1px solid #ccc;display: inline-block;padding: 6px 12px;">';
        o1+='          cliquez ici pour sélectionner les fichiers';
        o1+='        </label>';
        o1+='        <input type="file" ' + (this.plusieurs_fichiers_possibles > 1 ? ( 'multiple' ) : ( '' )) + ' id="vv_input_fichier_a_telecharger4" style="display:none;" ';
        o1+=' data-rev_change="m1(n1(' + this.moi + '),f1(fichiers_ajoutés_pour_téléversement4(';
        o1+='id(vv_input_fichier_a_telecharger4),';
        o1+='id_du_bouton(vv_bouton_téléverser4),';
        o1+='la_zone_des_fichiers(vv_la_liste_des_fichiers4))))" />';
        o1+='        <button type="submit" style="visibility:hidden;" class="rev_bouton" id="vv_bouton_téléverser4">téléverser4</button>';
        o1+='    </form>';
        o1+='    <br />';
        o1+='    <div id="vv_la_liste_des_fichiers4" style="display:none;"></div>';
        o1+='</div>';
        this.__ig1.affiche_sous_fenetre1( o1 );
        let aa=document.getElementById( 'vv_id_televersement4' );
        aa.addEventListener( "submit" , ( event ) => {
                event.preventDefault();
                this.action_bouton_envoyer_televersement4();
        } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      au retour de la suppression
    */
    supprimer1(){
        this.__ig1.fermer_la_sous_fenetre();
        this.__ig1.executer1( location.hash.substr( 1 ) );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_colis1=null ){
        if(!le_colis1.__xva.hasOwnProperty( 'page_confirmation_supprimer1' )){
            return(this.__ig1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_colis1.__xva.page_confirmation_supprimer1.__xva[0];
        if(enreg['T0.chi_id_televersement'] === undefined){
            return({"__xst" : __xer ,"__xme" : "Attention, le champ T0.chi_id_televersement n'est pas en sortie dans la requête select "});
        }
        /* this.__ig1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_televersement'] , this.moi , 'chi_id_televersement' ); */
        let o1='';
        o1+='  <h1>suprimer un fichier téléversé</h1>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="chi_id_televersement"  value="' + this.__ig1.fi2( enreg['T0.chi_id_televersement'] ) + '" />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chi_id_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>ref bdd</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="che_bdd_televersement"  value="' + this.__ig1.fi2( enreg['T0.che_bdd_televersement'] ) + '" />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'che_bdd_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom de la table</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_table_televersement"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_table_televersement'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_table_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>id element</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="che_id_element_televersement"  value="' + this.__ig1.fi2( enreg['T0.che_id_element_televersement'] ) + '" />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'che_id_element_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>utilisateur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <input type="hidden" value="';
        o1+=enreg['T0.chx_utilisateur_televersement'];
        o1+='"  id="chx_utilisateur_televersement" />';
        o1+='        <span>';
        o1+='(' + enreg['T0.chx_utilisateur_televersement'] + ') ';
        o1+='</span>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>champ cle</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_champ_cle_televersement"  size="64"   maxlength="64"  value="' + this.__ig1.fi2( enreg['T0.chp_champ_cle_televersement'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_champ_cle_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom original</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_original_televersement"   maxlength="255"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_original_televersement'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_original_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>poids</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled type="number" size="32" maxlength="32" id="che_poids_televersement"  value="' + this.__ig1.fi2( enreg['T0.che_poids_televersement'] ) + '" />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'che_poids_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom fichier sur disque</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_fichier_sur_disque_televersement"   maxlength="255"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_fichier_sur_disque_televersement'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_fichier_sur_disque_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>nom du dossier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_nom_du_dossier_televersement"   maxlength="255"  value="' + this.__ig1.fi2( enreg['T0.chp_nom_du_dossier_televersement'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_nom_du_dossier_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire global</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__ig1.__fnt1.boutons_suppression1( 'cht_comm_glob_televersement' );
        o1+='</div>\r\n';
        o1+='            <textarea disabled id="cht_comm_glob_televersement" rows="2"  cols="50" >' + this.__ig1.fi2( enreg['T0.cht_comm_glob_televersement'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire fichier</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_comm_fichier_televersement"   maxlength="255"  value="' + this.__ig1.fi2( enreg['T0.chp_comm_fichier_televersement'] ) + '"   />';
        o1+=this.__ig1.__fnt1.boutons_suppression2( 'chp_comm_fichier_televersement' );
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_televersement" value="' + enreg['T0.chi_id_televersement'] + '" />';
        /*
          =====================================================================================================
        */
        o1+='<div class="rev_bouton yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(supprimer1(chi_id_televersement(' + enreg['T0.chi_id_televersement'] + ')))))" title="">je confirme la suppression</div>';
        this.__ig1.affiche_sous_fenetre1( o1 );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        /*
          let cmd='';
          cmd+='liste1(';
          for(let i in this.tableau_des_filtres['liste1']){
          if(this.filtres['liste1'][i] !== ''){
          cmd+=i + '(\'' + this.__ig1.fi2( this.filtres['liste1'][i] ) + '\')';
          }
          }
          cmd+=')';
          let obj2=this.__ig1.__rev1.rev_tm( cmd );
          let jso=JSON.stringify( obj2.__xva );
          o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__ig1.fi2( jso ) + '" />';
          document.getElementById( 'vv_ecran_suppression_zone_contenu' ).innerHTML=o1;
          this.__ig1.maj_title_htm1( 'suppression ' + this.DUN_DUNE_ELEMENT_GERE );
          if(this.__ig1.stockage_local['parametres']['__deverminage']['valeur'] > 0){
          this.__ig1.maj_hash( mat , 0 );
          }
        */
        return({"__xst" : __xsu});
    }
}
export{__televersement2 as __televersement2};