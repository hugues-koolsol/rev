"use strict";
/* var __gi1=null; */
/* les constantes erreur et succes */
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __x_action='__x_action';
const __xva='__xva';
const CRLF="\r\n";
const MON_LF='¶' + 'LF' + '¶';
const MON_CR='¶' + 'CR' + '¶';
const MON_CRLF='¶' + 'CR¶' + '¶' + 'LF¶';
const REGEX_LF=new RegExp( MON_LF , 'g' );
const REGEX_CR=new RegExp( MON_CR , 'g' );
const REGEX_CRLF=new RegExp( MON_CRLF , 'g' );
import {c_rev1} from './c_rev1.js';
/*
  import {c_rev1} from './c_rev1.js';
  import {c_fonctions_js1} from './c_fonctions_js1.js';
*/
/*
  =====================================================================================================================
  classe centrale de gestion de l'interface
  =====================================================================================================================
*/
class _c_interface1{
    /* une seule instance à priori */
    #nom_de_la_variable1=null;
    #url_de_base=null;
    /* objet des fonctions de traitement des revs */
    __m_rev1=null;
    fonctions_js1=null;
    /* les appels réseau doivent passer par les workers */
    __m_worker=null;
    #le_worker_fonctionne=false;
    #page_en_cours='';
    /*  */
    #le_body_builder=document.getElementById( 'vv_body' );
    #le_web_socket_actif=__xer;
    #debut_timer0=performance.now();
    #debut_timer1=performance.now();
    /* les piles des messages */
    les_messages={"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []};
    /* les messages affichés sont limités à ce nomble */
    #nombre_max_de_messages_affiches=20;
    /* l'element sur lequel on a clique qui a déclenché un appel réseau */
    #element_appel_reseau=[];
    /* le contenu du cookie en json */
    le_biscuit=null;
    le_niveau_de_deverminage=0;
    #utiliser_les_sockets=0;
    #stockage_local=null;
    #reference_stockage_local=null;
    /* contient les valeurs de quelques variables css ( hauteur et largeur ) qui peuvent être utiles dans l'interface */
    css_dimensions={};
    /* id menu */
    #id_menu='';
    #ecran_tactile='ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    #safari_mobile=navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) && navigator.userAgent.match( /AppleWebKit/ );
    #taille_de_l_ecran_initial_en_px=[window.innerWidth,window.innerHeight];
    #genre_safari=null;
    #ipad_ou_iphn=null;
    #genre_crios=null;
    /* data-editeur1 */
    #zones_d_editions=[];
    zone_d_edition_en_cours='';
    #div_des_positions_du_curseur=null;
    derniere_zone_editee=null;
    position_dans_la_derniere_zone_editee=0;
    matrice_sous_fenetre1=null;
    liste_des_modules_dynamiques={};
    #la_sous_fenetre1=null;
    __js_des_sql={};
    /*
      =============================================================================================================
    */
    constructor( par_nom_de_la_variable ){
        /* console.log( 'dans constructeur #safari_mobile=',this.#safari_mobile ); */
        this.#nom_de_la_variable1=par_nom_de_la_variable;
        this.#initialise_stockage_local();
        this.#traite_les_cookies();
        this.#css1();
        this.__m_rev1=new c_rev1( '__m_rev1' , this );
        this.#genre_safari=this.#le_userAgent( /safari/i ) && !this.#le_userAgent( /chrome/i ) && !this.#le_userAgent( /android/i );
        this.#ipad_ou_iphn=this.#genre_safari && navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
        this.#genre_crios=navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && this.#ecran_tactile && this.#le_userAgent( /crios/i );
        /* this.__m_worker=new c_rev1( '__m_worker1' ); */
        this.__m_worker=new Worker( "./_js/c_worker1.js" , {"type" : 'module'} );
        this.__m_worker.onmessage=function( le_message_recu_du_worker ){
            var endMicro=performance.now();
            var temps=parseInt( (endMicro - this.#debut_timer1) * 1000 , 10 ) / 1000;
            if(this.le_niveau_de_deverminage >= 2){
                console.log( 'temps  réception message du worker : ' , temps );
            }
            /* console.log( "dans le script principal, le_message_recu_du_worker" , le_message_recu_du_worker ); */
            this.#traite_message_recupere_du_worker( le_message_recu_du_worker );
        }.bind( this );
        /* attention, il FAUT encadrer les propriétés href et "cookie" envoyé evec des "" */
        this.__m_worker.postMessage( {
                "__x_action" : 'initialisation_du_worker()' ,
                "__xva" : {
                    "href" : decodeURIComponent( window.location.href ) ,
                    "le_niveau_de_deverminage" : this.le_niveau_de_deverminage ,
                    "utiliser_les_sockets" : this.#utiliser_les_sockets
                }
            } );
        this.__m_worker.postMessage( {
                "__x_action" : 'recuperation_de_la_premiere_page()' ,
                "__xva" : {"href" : decodeURIComponent( window.location.href ) ,"le_niveau_de_deverminage" : this.le_niveau_de_deverminage}
            } );
        if(this.#ecran_tactile === true && this.#genre_safari === true && this.#genre_crios === false){
            this.#supprimer_le_zoom_sur_safari();
        }
    }
    /*
      =============================================================================================================
    */
    #traite_message_recupere_du_worker( le_message_recu_du_worker ){
        /* debugger */
        if(this.le_niveau_de_deverminage >= 2){
            console.log( 'le_message_recu_du_worker=' , le_message_recu_du_worker.data );
        }
        this.retablir_les_elements_masques( le_message_recu_du_worker );
        if(le_message_recu_du_worker.data.__xst === __xsu){
            if(le_message_recu_du_worker.data.__x_action === 'le_worker_est_démarré()'){
                /* console.log( 'le worker fonctionne' ); */
                this.#le_worker_fonctionne=true;
            }else{
                this.#traite_reponse( le_message_recu_du_worker.data );
                /* console.log( le_message_recu_du_worker.data ); */
            }
        }else{
            if(le_message_recu_du_worker.data.__x_signaux){
                if(le_message_recu_du_worker.data.hasOwnProperty( '__xva' ) && le_message_recu_du_worker.data.__xva.hasOwnProperty( 'maj' )){
                    let mat=this.__m_rev1.rev_tcm( le_message_recu_du_worker.data.__xva.maj );
                    if(mat.__xst === __xsu){
                        let obj=this.#traite_maj_du_html( mat.__xva , le_message_recu_du_worker.data );
                    }
                }
                this.remplis_les_messages_et_affiche( le_message_recu_du_worker.data.__x_signaux );
            }
        }
    }
    /*
      =============================================================================================================
    */
    #traite_action_retour_generale( reponse , mat_action ){
        let maj_interface2=null;
        if(this.le_niveau_de_deverminage >= 1){
            console.log( '%c #traite_action_retour_generale,' , 'background:#ff5252;color:yellow' , ' reponse=' , reponse );
        }
        if(reponse.hasOwnProperty( '__xva' ) && reponse.__xva.hasOwnProperty( 'php_des_sql' )){
            this.__js_des_sql=reponse.__xva.php_des_sql;
        }
        if(reponse.hasOwnProperty( '__x_page' ) && reponse.__x_page !== ''){
            this.masquer_les_messages();
            if(true || reponse.__x_action.indexOf( 'formulaire1(' ) < 0){
                /* si on a chargé une page alors on met à jour l'url */
                let url=window.document.location.href;
                if(url.indexOf( '#' ) > 0){
                    url=url.substr( 0 , url.indexOf( '#' ) );
                }
                window.document.location=url + '#' + reponse.__x_action;
            }
            /*
              =============================================================================================
              chargement d'une page 
              =============================================================================================
            */
            this.#page_en_cours=reponse.__x_action;
            document.getElementById( 'vv_main' ).innerHTML=reponse.__x_page;
            this.ajoute_les_evenements_aux_boutons( this.#page_en_cours );
            window.scrollTo( 0 , 0 );
            /*
              dans le cas d'une page, on va essayer de trouver une zone input/textarea
              ou à défaut, un lien 
            */
            this.#focus_ainsi_que_capture_clic_formulaire();
            if(reponse.__X_VERSION && reponse.__X_VERSION !== ''){
                if(reponse.__X_VERSION !== __X_VERSION){
                    let url=window.document.location.href;
                    let pos1=url.indexOf( '#' );
                    let part1='';
                    let part2='';
                    if(pos1 > 0){
                        part1=url.substr( 0 , pos1 );
                        part2=url.substr( pos1 );
                    }else{
                        part1=url;
                    }
                    let pos2=part1.indexOf( '?' );
                    if(pos2 > 0){
                        part1=part1.substr( 0 , pos2 );
                    }
                    url=part1 + '?dt=' + reponse.__X_VERSION + '' + part2;
                    this.les_messages.__xer.push( ' attention il y a eu une mise à jour <a class="hug_bouton yy__x_signaux_2" href="' + url + '">Rechargez la page</a>' );
                }
            }
        }
        this.#ajouter_les_boutons_menu( 'nouvelle_page' , reponse );
        if(reponse.hasOwnProperty( '__xva' )){
            if(reponse.__xva.hasOwnProperty( 'maj' )){
                if(this.le_niveau_de_deverminage >= 2){
                    console.log( 'reponse avec maj=' , reponse );
                }
                let mat=this.__m_rev1.rev_tcm( reponse.__xva.maj );
                if(mat.__xst === __xsu){
                    let obj=this.#traite_maj_du_html( mat.__xva , reponse );
                }
            }
        }
        switch (mat_action[1][1]){
            case 'le_websocket_est_arrêté' :
                /* si le ws ne fonctionne pas à la première connexion, on n'affiche pas le message */
                var endMicro=performance.now();
                var temps=parseInt( (endMicro - this.#debut_timer0) * 1000 , 10 ) / 1000;
                if(temps > 3000){
                    this.remplis_les_messages_et_affiche( {"__xal" : {0 : '⚠ La connexion socket ne fonctionne pas<br />ce n\'est pas très grave'}} );
                }
                try{
                    document.getElementById( 'vv_etat_chausette' ).style.display='none';
                    document.getElementById( 'vv_etat_chausette' ).classList.add( 'yy_invisible' );
                }catch(e){}
                break;
                
            case 'obtenir_le_cookie_de_session_php' :
                try{
                    let les_cookies=document.cookie.split( ';' );
                    for( let i=0 ; i < les_cookies.length ; i++ ){
                        let le_cookie=les_cookies[i].split( '=' );
                        if(le_cookie[0].trim() === 'PHPSESSID'){
                            let obj={
                                "__x_action" : "socket1.retourner_la_valeur_du_cookie_de_session(fichier_session(" + le_cookie[1] + "),deverminage(" + this.le_niveau_de_deverminage + "),__X_CLE_APPLICATION(" + __X_CLE_APPLICATION + "))"
                            };
                            this.#envoie_requete_au_serveur( obj );
                        }
                    }
                }catch(e){
                    debugger;
                }
                break;
                
            case 'c_fonctions_js1' :
                try{
                    this.fonctions_js1[mat_action[2][1]]( reponse );
                }catch(e){
                    this.les_messages.__xer.push( this.__m_rev1.nl2( e ) + ' erreur sur l\'appel de la fonction ' + mat_action[2][1] + ' de fonctions_js1' );
                    this.remplis_les_messages_et_affiche( null );
                    return;
                }
                
        }
        if(reponse.__xso === __xer){
            try{
                document.getElementById( 'vv_etat_chausette' ).style.display='';
                document.getElementById( 'vv_etat_chausette' ).classList.remove( 'yy_invisible' );
            } catch {}
        }else{
            try{
                document.getElementById( 'vv_etat_chausette' ).style.display='none';
                document.getElementById( 'vv_etat_chausette' ).classList.add( 'yy_invisible' );
            } catch {}
        }
        maj_interface2=this.traite_maj_interface2( reponse );
        if(maj_interface2 && maj_interface2.__xva !== ''){
            let aa='maj_interface1(' + maj_interface2.__xva + ')';
            let mat1=this.__m_rev1.rev_tcm( aa );
            if(mat1.__xst === __xsu){
                this.#traite_maj_du_html( mat1.__xva , reponse );
            }
        }
    }
    /*
      =============================================================================================================
    */
    retablir_les_elements_masques( le_message_recu_du_worker ){
        /* on réaffiche le bouton qu'on a fait disparaitre */
        if(le_message_recu_du_worker
               && le_message_recu_du_worker.data.hasOwnProperty( '__xva' )
               && le_message_recu_du_worker.data.__xva.hasOwnProperty( 'ne_pas_retablir_les_elements_masques' )
               && le_message_recu_du_worker.data.__xva.ne_pas_retablir_les_elements_masques === __xsu
        ){
            return;
        }
        let elt=null;
        if(this.#element_appel_reseau.length !== 0){
            try{
                function retablir_les_boutons_caches( that ){
                    if(that.#element_appel_reseau && that.#element_appel_reseau.length > 0){
                        elt=that.#element_appel_reseau.shift();
                        try{
                            elt.classList.remove( 'yy_invisible' );
                            if(elt.style && elt.style.display === 'none'){
                                elt.style.display='';
                            }
                            if(elt.getAttribute( 'data-hug_click' )){
                                if(!that.#ecran_tactile){
                                    elt.focus();
                                }
                            }
                        } catch {}
                    }
                }
                retablir_les_boutons_caches( this );
                if(le_message_recu_du_worker && le_message_recu_du_worker.data.__x_page !== ''){
                    /* si on change de page, il existe peut être des éléments du menu à réafficher */
                    while(this.#element_appel_reseau.length !== 0){
                        retablir_les_boutons_caches( this );
                    }
                }
            }catch(e){
                console.error( e );
            }
        }
    }
    /*
      =============================================================================================================
    */
    #ajouter_les_boutons_menu( contexte , reponse ){
        if(reponse.__xbo && reponse.__xbo !== ''){
            if(contexte === 'nouvelle_page' || contexte === 'recuperation_de_la_premiere_page()'){
                /* console.log( contexte , menus ); */
                let tt='';
                for(let i in reponse.__xbo){
                    tt+=reponse.__xbo[i];
                }
                if(contexte === 'recuperation_de_la_premiere_page()'){
                    try{
                        document.getElementById( 'vv_nav_centre_defilement' ).innerHTML=tt;
                    }catch{
                        /*
                          dans le cas d'une sous fenetre, la navigation n'existe
                        */
                    }
                }else{
                    if(tt === '' && document.getElementById( 'vv_nav_centre_defilement' ).innerHTML !== ''){
                        /* on se déconnecte */
                        document.getElementById( 'vv_nav_centre_defilement' ).innerHTML='';
                    }else{
                        this.#maj_innerHTML( 'vv_nav_centre_defilement' , tt );
                    }
                }
            }else{
                this.#maj_innerHTML( 'vv_nav_centre_defilement' , '' );
            }
        }
        let menus=document.getElementById( 'vv_nav' );
        if(menus !== null){
            /* lors du premier chargement on doit allumer le bouton */
            if(reponse.hasOwnProperty( '__xva' )
                   && reponse.__xva.hasOwnProperty( 'maj' )
                   && reponse.__xva.maj.indexOf( 'allumer_menu' ) >= 0
            ){
                let mat_maj=this.__m_rev1.rev_tcm( decodeURIComponent( reponse.__xva.maj ) );
                if(mat_maj.__xst === __xsu){
                    for( let i=0 ; i < mat_maj.__xva.length ; i++ ){
                        if(mat_maj.__xva[i][1] === 'allumer_menu'
                               && mat_maj.__xva[i][2] === 'f'
                               && mat_maj.__xva[i][8] === 1
                               && mat_maj.__xva[i + 1][2] === 'c'
                        ){
                            this.#id_menu='' + mat_maj.__xva[i + 1][1];
                            break;
                        }
                    }
                }
            }
            /*
              dans le cas d'une sous fenetre, la navigation n'existe
            */
            let lst=document.getElementById( 'vv_nav' ).querySelectorAll( "[data-id_menu]" );
            for( let i=0 ; i < lst.length ; i++ ){
                if(this.#id_menu !== '' && lst[i].getAttribute( 'data-id_menu' ) === this.#id_menu){
                    lst[i].classList.add( 'hug_bouton_actif' );
                }else{
                    lst[i].classList.remove( 'hug_bouton_actif' );
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #traite_les_cookies(){
        /* si on ne s'est jamais connecté alors document.cookie est == "" */
        let les_cookies=document.cookie.split( ';' );
        for( let i=0 ; i < les_cookies.length ; i++ ){
            let le_cookie=les_cookies[i].split( '=' );
            if(le_cookie[0].trim() === __X_CLE_APPLICATION){
                let le_json_texte=decodeURIComponent( le_cookie[1] );
                try{
                    /* console.log(le_json_texte); */
                    this.le_biscuit=null;
                    this.le_biscuit=JSON.parse( le_json_texte );
                    try{
                        if(this.le_niveau_de_deverminage !== 0 && this.le_biscuit.aspect.déverminage === 0){
                            /* si on éteint le déverminage, on le dit dans la console */
                            console.log( '%cLe déverminage est éteint' , 'background:orange;' );
                        }
                        if(this.le_niveau_de_deverminage !== this.le_biscuit.aspect.déverminage){
                            /* si on change le niveau de déverminage, on le fait aussi dans le worker */
                            if(this.#le_worker_fonctionne === true){
                                this.__m_worker.postMessage( {"__x_action" : 'maj_deverminage(' + this.le_biscuit.aspect.déverminage + ')'} );
                            }
                        }
                        this.le_niveau_de_deverminage=this.le_biscuit.aspect.déverminage;
                        if(this.le_niveau_de_deverminage > 0){
                            console.log( '%cLe déverminage est allumé au niveau ' + this.le_niveau_de_deverminage + '' , 'background:orange;' );
                        }
                        if(this.#utiliser_les_sockets !== this.le_biscuit.aspect.utiliser_les_sockets){
                            /* si on change le niveau de déverminage, on le fait aussi dans le worker */
                            if(this.#le_worker_fonctionne === true){
                                this.__m_worker.postMessage( {"__x_action" : 'maj_utiliser_les_sockets(' + this.le_biscuit.aspect.utiliser_les_sockets + ')'} );
                            }
                        }
                        this.#utiliser_les_sockets=this.le_biscuit.aspect.utiliser_les_sockets;
                    } catch {}
                    break;
                }catch(e){
                    console.error( e );
                    break;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #traite_maj_du_html( mat , reponse ){
        let recharger_la_page=false;
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'maj_interface1'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    /*
                      modification
                    */
                    if(mat[j][1] === 'modifier'){
                        let id='';
                        let fonction='';
                        let valeur=null;
                        let composant_du_style=null;
                        let dimension=null;
                        let composante=null;
                        let avec=null;
                        let contenu=null;
                        let valeur_xva=null;
                        let classNameSet=null;
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === 'id' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                id=mat[k + 1][1];
                            }else if(mat[k][1] === 'valeur_xva' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                valeur_xva=mat[k + 1][1];
                                fonction='valeur_xva';
                            }else if(mat[k][1] === 'composante' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                composante=mat[k + 1][1];
                            }else if(mat[k][1] === 'avec' && mat[k][2] === 'f'){
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][1] === "valeur_de_localstorage" && mat[l][2] === 'f'){
                                        valeur=this.#stockage_local;
                                        for( let m=l + 1 ; m < l01 ; m=mat[m][12] ){
                                            try{
                                                valeur=valeur[mat[m][1]];
                                            } catch {}
                                        }
                                        break;
                                    }
                                }
                            }else if(mat[k][1] === 'innerHTML'){
                                fonction=mat[k][1];
                                if(mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                    valeur=mat[k + 1][1];
                                }else if(mat[k][8] === 1 && mat[k + 1][2] === 'f'){
                                    /* debugger */
                                    if('valeur_de_champ' === mat[k + 1][1] && mat[k + 1][8] === 1 && mat[k + 2][2] === 'c'){
                                        try{
                                            valeur=document.getElementById( mat[k + 2][1] ).value;
                                        } catch {}
                                    }
                                }
                            }else if(mat[k][1] === 'classNameSet' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                fonction=mat[k][1];
                                classNameSet=mat[k + 1][1];
                            }else if(mat[k][1] === 'style'){
                                fonction=mat[k][1];
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][2] === 'f'
                                           && ('margin' === mat[l][1]
                                               || 'marginLeft' === mat[l][1]
                                               || 'marginRight' === mat[l][1]
                                               || 'marginTop' === mat[l][1]
                                               || 'marginBottom' === mat[l][1]
                                               || 'borderWidth' === mat[l][1]
                                               || 'padding' === mat[l][1]
                                               || 'fontSize' === mat[l][1])
                                    ){
                                        composant_du_style=mat[l][1];
                                        for( let m=l + 1 ; m < l01 ; m=mat[m][12] ){
                                            if('valeur_de_champ' === mat[m][1] && mat[m][8] === 1 && mat[m + 1][2] === 'c'){
                                                try{
                                                    valeur=document.getElementById( mat[m + 1][1] ).value;
                                                } catch {}
                                            }else if('dimension' === mat[m][1] && mat[m][8] === 1 && mat[m + 1][2] === 'c'){
                                                dimension=mat[m + 1][1];
                                            }else if('dimension' === mat[m][1] && mat[m][8] === 0){
                                                dimension='';
                                            }
                                        }
                                    }
                                }
                            }else if(mat[k][1] === 'contenu'){
                                fonction=mat[k][1];
                                contenu=mat[k + 1][1].replace( REGEX_CRLF , '\r\n' ).replace( REGEX_LF , '\n' ).replace( REGEX_CR , '\r' ).replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' );
                            }else if(mat[k][1] === 'value'){
                                fonction=mat[k][1];
                                if(mat[k][8] === 1 && mat[k + 1][2] === 'c' && mat[k + 1][1] === ''){
                                    valeur='';
                                }else if(mat[k][8] === 0){
                                    valeur='';
                                }else{
                                    let tt=this.__m_rev1.matrice_vers_source_rev1( mat , k , false , k + 1 );
                                    if(tt.__xst === __xsu){
                                        valeur=tt.__xva;
                                    }else{
                                        debugger;
                                    }
                                }
                            }
                        }
                        if(id !== '' && fonction === 'contenu' && contenu !== null){
                            try{
                                document.getElementById( id ).value=contenu;
                            }catch(e){
                                this.les_messages.__xer.push( ' attention la zone ayant pour id : "' + id + '" n\'est pas définie' );
                            }
                        }else if(id !== '' && fonction === 'classNameSet' && classNameSet !== null){
                            try{
                                document.getElementById( id ).className=classNameSet;
                            }catch(e){
                                this.les_messages.__xer.push( ' attention la zone ayant pour id : "' + id + '" n\'est pas définie' );
                            }
                        }else if(id !== '' && fonction === 'style' && composant_du_style !== null && valeur !== null){
                            try{
                                document.getElementById( id ).style[composant_du_style]=valeur + (dimension === null ? ( '' ) : ( dimension ));
                            }catch(e){}
                        }else if(id !== '' && fonction === 'value' && valeur !== null){
                            try{
                                document.getElementById( id ).value=valeur;
                            }catch(e){
                                debugger;
                                /* utile pour le déverminage */
                                /* console.log(e); */
                            }
                        }else if(id !== '' && fonction === 'valeur_xva' && valeur_xva !== null){
                            try{
                                document.getElementById( id ).value=reponse.__xva[valeur_xva];
                            }catch(e){
                                debugger;
                                /* utile pour le déverminage */
                                /* console.log(e); */
                            }
                        }else if(id !== '' && composante !== null && !(valeur === null || valeur === undefined)){
                            try{
                                document.getElementById( id )[composante]=valeur;
                            } catch {}
                        }else if(id !== '' && fonction === 'innerHTML' && valeur !== null){
                            try{
                                this.#maj_innerHTML( id , valeur );
                            }catch(e){
                                /* utile pour le déverminage */
                                /* console.log(e); */
                            }
                        }
                    }else if(mat[j][1] === 'desactiver'){
                        let id='';
                        let fonction='';
                        let valeur=5000;
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === 'id'){
                                id=mat[k + 1][1];
                            }else if(mat[k][1] === 'pendant'){
                                fonction=mat[k][1];
                                valeur=parseInt( mat[k + 1][1] , 10 );
                            }
                        }
                        if(id !== ''){
                            try{
                                document.getElementById( id ).style.visibility='hidden';
                                if(valeur <= 0 || valeur > 10000){
                                    valeur=5000;
                                }
                                setTimeout( () => {
                                        try{
                                            document.getElementById( id ).style.visibility='visible';
                                        } catch {}} , valeur );
                            }catch(e){
                                /* utile pour le déverminage */
                                /* console.log(e); */
                            }
                        }
                    }else if(mat[j][1] === 'charger_module1'){
                        let chemin_module1='';
                        let initialisation1={};
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === 'chemin_module1' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                                chemin_module1=mat[k + 1][1];
                                initialisation1['chemin_module1']=mat[k + 1][1];
                            }else if(mat[k][1] === 'initialisation1' && mat[k][2] === 'f'){
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][1] === '' && mat[l][2] === 'f' && mat[l][8] === 2){
                                        initialisation1[mat[l + 1][1]]=mat[l + 2][1];
                                    }
                                }
                            }
                        }
                        if(chemin_module1 !== ''){
                            if(!this.liste_des_modules_dynamiques.hasOwnProperty( chemin_module1 )){
                                this.liste_des_modules_dynamiques[chemin_module1]={"objet1" : null};
                                let tt1=document.createElement( 'script' );
                                tt1.setAttribute( 'type' , "module" );
                                tt1.setAttribute( 'src' , chemin_module1 );
                                tt1.setAttribute( 'data-initialisation1' , JSON.stringify( initialisation1 ) );
                                /* tt1.setAttribute( 'data-chemin_module1' , JSON.stringify(chemin_module1)); */
                                tt1.setAttribute( 'onload' , "__gi1.apres_module_charge1(this)" );
                                document.getElementsByTagName( 'head' )[0].appendChild( tt1 );
                            }else{
                                /* déjà chargé */
                                /* debugger */
                                __gi1.liste_des_modules_dynamiques[chemin_module1].objet1[initialisation1.methode_initiale]( initialisation1 );
                            }
                        }else{
                            console.error( 'chemin_module1 non trouvé' );
                        }
                    }else{
                        this[mat[j][1]]( mat );
                    }
                }
            }else if('methode_module_dynamique1' === mat[i][1]){
                let nom_du_module2='';
                let methode2='';
                let valeurs2='';
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === 'nom_du_module2' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        nom_du_module2=mat[j + 1][1];
                    }else if(mat[j][1] === 'methode2' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        methode2=mat[j + 1][1];
                    }else if(mat[j][1] === 'valeurs2' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        valeurs2=mat[j + 1][1];
                    }
                }
                if(methode2 !== '' && nom_du_module2 !== ''){
                    /* console.log(reponse) */
                    /* debugger */
                    if(valeurs2 === ''){
                        this.liste_des_modules_dynamiques[nom_du_module2].objet1[methode2]( reponse.__xva , this );
                    }else{
                        this.liste_des_modules_dynamiques[nom_du_module2].objet1[methode2]( reponse.__xva[valeurs2] , this );
                    }
                }else{
                    debugger;
                }
            }else if(mat[i][1] === 'cookies'){
                this.#traite_les_cookies();
            }else if(mat[i][1] === 'recharger_la_page'){
                recharger_la_page=true;
            }else if(mat[i][1] === 'gerer_les_parametres_de_l_interface'){
                setTimeout( () => {
                        this.#gerer_les_parametres_de_l_interface();} , 20 );
                recharger_la_page=true;
            }
        }
        return({"__xst" : __xsu ,"__xva" : {"recharger_la_page" : recharger_la_page}});
    }
    /*
      =============================================================================================================
    */
    async apres_module_charge1( e ){
        /* let chemin_module1=e.getAttribute('data-chemin_module1'); */
        let txt_init=e.getAttribute( 'data-initialisation1' );
        let obj_init=JSON.parse( txt_init );
        /*
          console.log( 'obj_init=' , obj_init );
        */
        let that=this;
        let module=await import( './' + obj_init.module_js1 );
        __gi1.liste_des_modules_dynamiques[obj_init.chemin_module1].objet1=new module[obj_init.nom_module1]( obj_init );
        __gi1.liste_des_modules_dynamiques[obj_init.chemin_module1].objet1[obj_init.methode_initiale]( obj_init );
    }
    /*
      =============================================================================================================
      appel d'une fonction d'un module dynamique
      =============================================================================================================
    */
    module1( mat ){
        let chemin_module1='';
        let methode3='';
        let parametre3='';
        let l01=mat.length;
        /* __gi1.liste_des_modules_dynamiques[obj_init.chemin_module1].objet1[obj_init.methode_initiale](obj_init); */
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === "interface1.module1" && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === "chemin_module1" && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        chemin_module1=mat[j + 1][1];
                    }else if(mat[j][1] === "methode3" && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        methode3=mat[j + 1][1];
                    }else if(mat[j][1] === "parametre3" && mat[j][2] === 'f'){
                        if(mat[j][8] === 0){
                            parametre3='';
                        }
                        let obj=this.__m_rev1.matrice_vers_source_rev1( mat , j , false , j + 1 );
                        if(obj.__xst === __xsu){
                            parametre3=obj.__xva;
                        }else{
                            debugger;
                            return;
                        }
                    }
                }
            }
        }
        if(chemin_module1 !== '' && methode3 !== ''){
            let mat=[];
            if(parametre3 !== ''){
                let obj=this.__m_rev1.rev_tm( parametre3 );
                if(obj.__xst === __xsu){
                    mat=obj.__xva;
                }else{
                    debugger;
                    return;
                }
            }
            __gi1.liste_des_modules_dynamiques[chemin_module1].objet1[methode3]( mat );
        }
    }
    /*
      =============================================================================================================
    */
    #focus_ainsi_que_capture_clic_formulaire(){
        let lst=document.getElementById( 'vv_main' ).getElementsByTagName( '*' );
        let auto_focus_trouve=false;
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'autofocus' )){
                if(!this.#ecran_tactile){
                    lst[i].focus();
                    lst[i]['select']();
                }
                auto_focus_trouve=true;
                break;
            }
        }
        if(auto_focus_trouve === false){
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].tagName === 'INPUT' || lst[i].tagName === 'TEXTAREA'){
                    if(!(lst[i].type && lst[i].type.toLowerCase() === 'hidden')){
                        if(!this.#ecran_tactile){
                            lst[i].focus();
                            lst[i]['select']();
                        }
                        break;
                    }
                }else if(lst[i].tagName === 'A'){
                    if(!this.#ecran_tactile){
                        lst[i].focus();
                    }
                    break;
                }else if(lst[i].getAttribute( 'data-hug_click' )){
                    if(!this.#ecran_tactile){
                        lst[i].focus();
                    }
                    break;
                }
            }
        }
        /* on ajoute une capture de la touche entrée ( code=13 ) pour tous les input text */
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'data-hug_click' ) && lst[i].getAttribute( 'data-hug_click' ).indexOf( 'formulaire1' ) >= 0){
                let mat=this.__m_rev1.rev_tcm( lst[i].getAttribute( 'data-hug_click' ) );
                if(mat.__xst === __xsu){
                    let l01=mat.__xva.length;
                    for( let i=1 ; i < l01 ; i++ ){
                        if(mat.__xva[i][2] === 'f'
                               && mat.__xva[i][1].indexOf( 'formulaire1' )
                               && mat.__xva[i][8] === 1
                               && mat.__xva[i + 1][2] === 'c'
                        ){
                            let id_formulaire=mat.__xva[i + 1][1];
                            if(id_formulaire !== ''){
                                let ls=document.getElementById( id_formulaire );
                                if(ls !== null){
                                    ls=ls.getElementsByTagName( "input" );
                                    for( let j=0 ; j < ls.length ; j++ ){
                                        ls[j].setAttribute( 'data-formulaire_parent' , id_formulaire );
                                        ls[j].addEventListener( 'keyup' , this.#quand_clavier_sur_input_formulaire.bind( this ) );
                                    }
                                }
                            }
                        }
                    }
                }
                /* on associe uniquement au premier bouton */
                break;
            }
        }
    }
    /*
      =============================================================================================================
    */
    traite_maj_interface2( reponse ){
        let maj_interface2='';
        if(reponse.__x_action.indexOf( 'maj_interface2' ) >= 0){
            let mat1=this.__m_rev1.rev_tcm( decodeURIComponent( reponse.__x_action ) );
            if(mat1.__xst === __xsu){
                let mat=mat1.__xva;
                for( let i=1 ; i < mat.length ; i=mat[i][12] ){
                    if(mat[i][1] === 'maj_interface2' && mat[i][2] === 'f'){
                        let maji2=this.__m_rev1.matrice_vers_source_rev1( mat , i , false , i + 1 );
                        if(maji2.__xst === __xsu){
                            maj_interface2=maji2.__xva;
                        }
                        /*
                          let mat2=this.__m_rev1.supprimer_un_element_de_la_matrice( mat , i , 0 , [] );
                          let obj=this.__m_rev1.matrice_vers_source_rev1( mat2 , 0 , false, 1 );
                          if(obj.__xst === __xsu){
                          reponse.__x_action=obj.__xva;
                          }
                          break;
                        */
                    }
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : maj_interface2});
    }
    /*
      =============================================================================================================
    */
    #traite_reponse( reponse ){
        let exception_premiere_page=false;
        if(this.le_niveau_de_deverminage >= 2){
            console.log( '%cdans #traite_reponse,' , 'background:#ff5252;' , ' reponse=' , reponse );
        }
        /*  */
        this.#le_body_builder.style.touchAction='manipulation';
        let obj=null;
        let mat_action=this.__m_rev1.rev_tcm( decodeURIComponent( reponse.__x_action ) );
        if(mat_action.__xst === __xsu){
        }else{
            debugger;
        }
        if(mat_action.__xva[1][1] === 'recuperation_de_la_premiere_page' && mat_action.__xva[1][2] === 'f'){
            /*
              =============================================================================================
              chargement de la première page , c'est une exception
              =============================================================================================
            */
            exception_premiere_page=true;
            this.#le_body_builder.innerHTML=reponse.__x_page;
            this.#ajouter_les_boutons_menu( 'recuperation_de_la_premiere_page()' , reponse );
            this.ajoute_les_evenements_aux_boutons( reponse.__xva.redirection , null );
            /* la page est chargée ici conc on met son contenu à vide */
            reponse.__x_page='';
            this.masquer_les_messages();
            /* document.getElementById( 'vv_les_messages' ).style.visibility='hidden'; */
            this.#traite_les_cookies( reponse );
            let position_interne='';
            this.#page_en_cours=decodeURIComponent( reponse.__xva.redirection );
            let mat=this.__m_rev1.rev_tcm( decodeURIComponent( reponse.__xva.redirection ) );
            if(mat.__xst === __xsu){
                this.#page_en_cours=mat.__xva[1][1] + '()';
                if(mat.__xva[1][8] >= 1){
                    for( let j=2 ; j < mat.__xva.length ; j++ ){
                        /* #c_accueil1.recupere_la_page_d_accueil(aller_a_la_position_interne(#vv_body)) */
                        if(mat.__xva[j][1] === 'aller_a_la_position_interne'
                               && mat.__xva[j][2] === 'f'
                               && mat.__xva[j][8] === 1
                               && mat.__xva[j + 1][2] === 'c'
                               && mat.__xva[j + 1][1].substr( 0 , 1 ) === '#'
                        ){
                            position_interne=mat.__xva[j + 1][1];
                            break;
                        }
                    }
                }
            }
            this.#focus_ainsi_que_capture_clic_formulaire();
            if(position_interne !== ''){
                /* console.log(position_interne); */
                setTimeout( () => {
                        this.#aller_a_la_position_interne( position_interne );} , 125 );
            }
            if(reponse.__xva.redirection){
                reponse.__x_action=decodeURIComponent( reponse.__xva.redirection );
                mat_action=this.__m_rev1.rev_tcm( reponse.__x_action );
                if(mat_action.__xst === __xsu){
                }else{
                    debugger;
                }
            }
            import( "./c_fonctions_js1.js" ).then( ( module ) => {
                    __gi1.fonctions_js1=new module.c_fonctions_js1( __gi1 );
                } ).catch( ( err ) => {
                    console.error( 'err=' , err );
                } );
            this.#div_des_positions_du_curseur=document.createElement( 'div' );
            this.#div_des_positions_du_curseur.id='div_des_positions_du_curseur';
            this.#div_des_positions_du_curseur.setAttribute( 'style' , 'position:absolute;top:60px;left:0px;background:white;display:inline-block;min-height:12px!important;line-height:12px;' );
            this.#div_des_positions_du_curseur.innerHTML='';
            document.getElementsByTagName( 'body' )[0].appendChild( this.#div_des_positions_du_curseur );
            try{
                /* la roulette sur le menu haut le fait défiler */
                document.getElementById( 'vv_nav_centre' ).addEventListener( 'wheel' , this.roulette_sur_menu , false );
                /* quand on clique à l'extérieur de la sous fenêtre, elle se ferme */
                this.#la_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                this.#la_sous_fenetre1.addEventListener( 'click' , function( e ){
                        var dim=e.target.getBoundingClientRect();
                        if(e.clientX < dim.left || e.clientX > dim.right || e.clientY < dim.top || e.clientY > dim.bottom){
                            try{
                                e.target.close();
                            } catch {}
                        }
                    } );
            }catch{
                /*
                  dans le cas d'une sous fenetre, la navigation n'existe pas
                */
            }
        }
        try{
            this.#div_des_positions_du_curseur.innerHTML='';
        } catch {}
        this.#traite_action_retour_generale( reponse , mat_action.__xva );
        if(document.getElementById( 'vv_main' ) === null){
            if("le_websocket_est_démarré()" === reponse.__x_action || "socket1.recuperer_l_etat()" === reponse.__x_action){
                return;
            }
            /* ce cas peut arriver si on a une erreur à dans recuperation_de_la_premiere_page */
            let tt='<h1>OOPS</h1>';
            tt+='<div style="text-align:center;">';
            tt+='<p style="text-align:center;">il y a eu un problème</p>';
            tt+='<a class="yy__x_signaux_1" href=".">Cliquez ici pour réessayer</a>';
            tt+='</div>';
            this.#maj_innerHTML( 'vv_body' , tt );
        }else{
            if(reponse.__x_signaux){
                this.remplis_les_messages_et_affiche( reponse.__x_signaux );
            }
        }
        try{
            if(reponse.hasOwnProperty( '__x_authentifie' )){
                switch (reponse.__x_authentifie){
                    case __xsu :
                        document.getElementById( 'vv_bouton_connexion' ).title='quitter ( se déconnecter )';
                        document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__x_signaux_1' );
                        document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__x_signaux_0' );
                        document.getElementById( 'vv_bouton_connexion' ).setAttribute( "data-hug_click" , 'c_connexion1.se_deconnecter()' );
                        break;
                        
                    default:
                        document.getElementById( 'vv_bouton_connexion' ).title='vers la page de connexion';
                        document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__x_signaux_1' );
                        document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__x_signaux_0' );
                        document.getElementById( 'vv_bouton_connexion' ).setAttribute( "data-hug_click" , 'c_connexion1.recupere_la_page_de_connexion()' );
                        
                }
            }
        }catch(e){}
        if(reponse.hasOwnProperty( '__xso' )){
            /* etat du socket */
            if(reponse.__xso === __xsu){
                this.#le_web_socket_actif=__xsu;
            }else{
                this.#le_web_socket_actif=__xer;
            }
            this.#masquer_ou_afficher_les_div_websocket();
        }
        if(obj && obj.__xva.recharger_la_page === true){
            debugger;
            /* afr dans quel cas utilise-t-on ceci ? */
            let url=window.document.location.href;
            if(url.indexOf( '#' ) > 0){
                url=url.substr( url.indexOf( '#' ) + 1 );
                if(url.substr( 0 , 9 ) === 'c_pages1.'){
                    let recharger={"__x_action" : url};
                    this.#envoie_requete_au_serveur( recharger );
                    return;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    roulette_sur_menu( event ){
        event.preventDefault();
        let elem=event.target;
        let continuer=true;
        while(continuer){
            if(elem.nodeName === 'DIV'){
                if(elem.id && elem.id === 'vv_nav_centre'){
                    continuer=false;
                    break;
                }
            }else if(elem.nodeName === 'BODY'){
                continuer=false;
                elem=null;
                break;
            }
            elem=elem.parentNode;
        }
        if(elem !== null){
            let scrollDelta=parseInt( document.getElementById( 'vv_nav_centre' ).getBoundingClientRect().width / 4 , 10 );
            /* 60; */
            var current=parseInt( elem.scrollLeft , 10 );
            let valeur=current;
            if(event.deltaY > 0){
                valeur+=scrollDelta;
            }else{
                valeur-=scrollDelta;
            }
            elem.scrollTo( {"top" : 0 ,"left" : valeur ,"behavior" : "smooth"} );
        }
        return false;
    }
    /*
      =============================================================================================================
      les divs dont le contenu dépend de l'établissement du ws cad class contient 
      "affichage_display_none_conditionne_par_socket" doit être masquée si 
      le ws n'est pas activé
    */
    #masquer_ou_afficher_les_div_websocket(){
        try{
            let a=document.getElementById( 'vv_etat_chausette' );
            if(a){
                if(this.#le_web_socket_actif === __xsu){
                    a.classList.remove( 'yy__x_signaux_0' );
                    a.classList.add( 'yy__x_signaux_1' );
                    a.style.display='none';
                }else{
                    a.classList.remove( 'yy__x_signaux_1' );
                    a.classList.add( 'yy__x_signaux_0' );
                    a.style.display='';
                }
            }
        }catch(e){
            /*
              debugger
            */
        }
        try{
            let lst=document.getElementsByClassName( "affichage_display_none_conditionne_par_socket" );
            if(lst){
                for( let i=0 ; i < lst.length ; i++ ){
                    if(this.#le_web_socket_actif === __xer && lst[i].style.display !== 'none'){
                        lst[i].style.display='none';
                    }else if(this.#le_web_socket_actif === __xsu && lst[i].style.display !== ''){
                        lst[i].style.display='';
                    }
                }
            }
        }catch(e){
            /*
              debugger
            */
        }
        this.ajoute_les_evenements_aux_boutons( this.#page_en_cours );
    }
    /*
      =============================================================================================================
      // inspiré de https://erikmartinjordan.com/get-caret-position-textarea-pixels
    */
    getCaretPos( la_textarea , numero_de_ligne ){
        /* Getting the textarea element */
        /* let textarea = document.getElementById('textarea'); */
        /* Adjusting textarea to prevent scrolling */
        /* textarea.style.height = `${e.target.scrollHeight}px` */
        /* la_textarea.style.height = `${la_textarea.scrollHeight}px`; */
        let le_texte=la_textarea.value.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
        /* Appending element to the DOM after textarea */
        let le_bounding=la_textarea.getBoundingClientRect();
        let le_top=le_bounding.top + this.css_dimensions.t_padding_de_input + this.css_dimensions.t_border;
        let le_left=parseInt( le_bounding.left + this.css_dimensions.t_padding_de_input + this.css_dimensions.t_border , 10 );
        let le_height=parseInt( le_bounding.height , 10 );
        /* la_textarea.scrollTo(0,0); // ; */
        /*
          la_textarea.insertAdjacentHTML('afterend', '<span style="white-space: pre;font-family:monospace;overflow-x:scroll;background:lightblue;opacity:0.5;position:absolute;left:'+le_left+'px;top:'+le_top+'px;" id="dummy">'+le_texte+'</span>');
          debugger
        */
        la_textarea.insertAdjacentHTML( 'afterend' , '<span style="white-space: pre;font-family:monospace;overflow-x:scroll;background:lightblue;opacity:0.5;" id="dummy">' + le_texte + '</span>' );
        /* Getting position info of the rectangles inside dummy element */
        let rectangles=document.getElementById( 'dummy' ).getClientRects();
        let numero_bloc=Math.min( rectangles.length - 1 , numero_de_ligne );
        /* debugger */
        let decallage_y=0;
        if(rectangles.length >= numero_bloc){
            /* console.log( rectangles[numero_bloc].y ); */
            /* console.log( rectangles[0].y ); */
            /* decallage_y=parseInt(rectangles[numero_bloc].y-rectangles[0].y-rectangles[0].height,10); */
            /*
              à la fin de la formule çi dessous il y a un "-numero_bloc' comme si yl y avait in pixem en trop par ligne
            */
            decallage_y=parseInt( rectangles[numero_bloc].y - rectangles[0].y - rectangles[0].height - 2 * this.css_dimensions.t_border - 2 * this.css_dimensions.t_padding_de_input - numero_bloc , 10 );
            /* rectangles[62].top-rectangles[0].top-rectangles[0].height-2*this.css_dimensions.t_border-2*this.css_dimensions.t_padding_de_input */
        }else{
            decallage_y=999999999;
        }
        document.getElementById( 'dummy' ).remove();
        if(decallage_y <= le_height / 2){
            decallage_y=0;
        }else{
            decallage_y=decallage_y - le_height / 2;
        }
        /* la_textarea.scrollTo(0,0); */
        /* console.log( 'decallage_y=' , decallage_y ); */
        function decal( par ){
            /* console.log(par) */
            par.la_textarea.scrollTo( 0 , par.decallage_y );
            par.la_textarea.focus();
        }
        setTimeout( decal , 20 , {"la_textarea" : la_textarea ,"decallage_y" : decallage_y ,"numero_bloc" : numero_bloc} );
        /*
          
          let last = rectangles[rectangles.length - 1];
          
          // Getting position info of the textarea
          let text = la_textarea.getBoundingClientRect();
          
          // Setting coordinates
          let x = last.x + last.width;
          let y = text.y + text.height - last.height;
          
          // Removing dummy
          //dummy.remove();
          
          // Returning variables
          return [x, y];
        */
    }
    /*
      =============================================================================================================
    */
    placer_le_curseur_en_lig1( mat ){
        let l01=mat.length;
        let ligne=null;
        let zone=null;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if('interface1.placer_le_curseur_en_lig1' === mat[i][1] && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if('ligne' === mat[j][1] && mat[i][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        ligne=parseInt( mat[j + 1][1] , 10 );
                    }
                    if('zone' === mat[j][1]
                           && mat[i][2] === 'f'
                           && mat[j][8] === 1
                           && mat[j + 1][2] === 'c'
                           && mat[j + 1][1] !== ''
                    ){
                        zone=mat[j + 1][1];
                    }
                }
            }
        }
        if(ligne && zone){
            try{
                this.masquer_les_messages();
                let aa=document.getElementById( zone );
                let tt=aa.value.split( '\n' );
                let pos_deb=0;
                if(ligne - 2 > tt.length - 1){
                    pos_deb=999999999;
                }else{
                    for( let i=ligne - 2 ; i >= 0 ; i-- ){
                        pos_deb+=tt[i].length + 1;
                    }
                }
                aa.focus();
                aa.selectionStart=pos_deb;
                aa.selectionEnd=pos_deb + 1;
                let toto=this.getCaretPos( aa , ligne );
                /* console.log('toto=',toto); */
            }catch(e){
                console.error( e );
            }
        }
    }
    /*
      =============================================================================================================
    */
    placer_le_curseur_en_plage1( mat ){
        let l01=mat.length;
        let debut=null;
        let fin=null;
        let zone=null;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if('interface1.placer_le_curseur_en_plage1' === mat[i][1] && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if('debut' === mat[j][1] && mat[i][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        debut=parseInt( mat[j + 1][1] , 10 );
                    }
                    if('fin' === mat[j][1] && mat[i][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        fin=parseInt( mat[j + 1][1] , 10 );
                    }
                    if('zone' === mat[j][1]
                           && mat[i][2] === 'f'
                           && mat[j][8] === 1
                           && mat[j + 1][2] === 'c'
                           && mat[j + 1][1] !== ''
                    ){
                        zone=mat[j + 1][1];
                    }
                }
            }
        }
        if(debut !== null && fin && zone){
            try{
                this.masquer_les_messages();
                let aa=document.getElementById( zone );
                aa.focus();
                aa.selectionStart=debut;
                aa.selectionEnd=fin;
                let vrai_numero_de_ligne=0;
                try{
                    let tt=aa.value.substr( 0 , debut ).split( '\n' );
                    vrai_numero_de_ligne=tt.length;
                    console.log( 'vrai_numero_de_ligne=' , vrai_numero_de_ligne );
                } catch {}
                let toto=this.getCaretPos( aa , vrai_numero_de_ligne );
            }catch(e){
                console.error( e );
            }
        }
    }
    /*
      =============================================================================================================
    */
    placer_le_curseur_en_lig_col1( mat ){
        let l01=mat.length;
        let ligne=null;
        let colonne=null;
        let zone=null;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if('interface1.placer_le_curseur_en_lig_col1' === mat[i][1] && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if('ligne' === mat[j][1] && mat[i][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        ligne=parseInt( mat[j + 1][1] , 10 );
                    }
                    if('colonne' === mat[j][1] && mat[i][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        colonne=parseInt( mat[j + 1][1] , 10 );
                    }
                    if('zone' === mat[j][1]
                           && mat[i][2] === 'f'
                           && mat[j][8] === 1
                           && mat[j + 1][2] === 'c'
                           && mat[j + 1][1] !== ''
                    ){
                        zone=mat[j + 1][1];
                    }
                }
            }
        }
        if(ligne !== null && colonne && zone){
            try{
                this.masquer_les_messages();
                let aa=document.getElementById( zone );
                let tt=aa.value.split( '\n' );
                let pos_deb=0;
                for( let i=ligne - 2 ; i >= 0 ; i-- ){
                    pos_deb+=tt[i].length + 1;
                }
                aa.focus();
                aa.selectionStart=pos_deb;
                aa.selectionEnd=pos_deb + colonne;
                let toto=this.getCaretPos( aa , ligne );
                /* console.log('toto=',toto); */
            }catch(e){
                console.error( e );
            }
        }
    }
    /*
      =============================================================================================================
    */
    remplis_les_messages_et_affiche( xsi ){
        let liste_des_messages='';
        let classe_du_message_d_erreur='';
        let classe_du_message_d_info='';
        if(xsi){
            for(let i in xsi){
                for(let j in xsi[i]){
                    liste_des_messages+='<div class="yy__x_signaux_' + i + ' yy_opaque_90">' + xsi[i][j] + '</div>';
                    if((i === "0" || i === "2" || i === "__xer" || i === "__xal") && classe_du_message_d_erreur === ''){
                        classe_du_message_d_erreur="yy__x_signaux_" + i;
                    }else{
                        classe_du_message_d_info="yy__x_signaux_" + i;
                    }
                }
            }
        }
        let tab_erreur=[this.les_messages,this.__m_rev1.globale_messages];
        for(let zzz in tab_erreur){
            let la_pile_des_messages=tab_erreur[zzz];
            for(let i in la_pile_des_messages){
                for(let j in la_pile_des_messages[i]){
                    if( typeof la_pile_des_messages[i][j] === 'object'){
                        if(la_pile_des_messages[i][j].hasOwnProperty( '__xme' )){
                            let tt='';
                            tt+='<div class="yy__x_signaux_' + i + ' yy_opaque_90">';
                            let zone_edition=this.zone_d_edition_en_cours !== '' ?
                              ( 
                                this.zone_d_edition_en_cours
                              ) : ( 
                                la_pile_des_messages[i][j].hasOwnProperty( 'zone_edition' ) && la_pile_des_messages[i][j].zone_edition !== '' ? ( la_pile_des_messages[i][j].zone_edition ) : ( null )
                              );
                            if(la_pile_des_messages[i][j].hasOwnProperty( 'plage' )
                                   && la_pile_des_messages[i][j].plage !== null
                                   && zone_edition !== null
                            ){
                                tt+='<div class="hug_bouton yy__x_signaux_' + i + '" ';
                                tt+=' data-hug_click="interface1.placer_le_curseur_en_plage1(debut(' + la_pile_des_messages[i][j].plage[0] + '),fin(' + la_pile_des_messages[i][j].plage[1] + '),zone(\'' + zone_edition + '\'))">';
                                tt+='>';
                                tt+=' plage ' + la_pile_des_messages[i][j].plage[0] + ':' + la_pile_des_messages[i][j].plage[1] + '';
                                tt+='</div>';
                            }
                            if(la_pile_des_messages[i][j].hasOwnProperty( 'lig_col' )
                                   && la_pile_des_messages[i][j].lig_col !== null
                                   && zone_edition !== null
                            ){
                                tt+='<div class="hug_bouton yy__x_signaux_' + i + '" ';
                                tt+=' data-hug_click="interface1.placer_le_curseur_en_lig_col1(ligne(' + la_pile_des_messages[i][j].lig_col[0] + '),colonne(' + la_pile_des_messages[i][j].lig_col[1] + '),zone(\'' + zone_edition + '\'))">';
                                tt+=' l-&gt;c ' + la_pile_des_messages[i][j].lig_col[0] + ':' + la_pile_des_messages[i][j].lig_col[1] + '';
                                tt+='</div>';
                            }
                            if(la_pile_des_messages[i][j].hasOwnProperty( 'ligne' )
                                   && la_pile_des_messages[i][j].ligne !== null
                                   && zone_edition !== null
                            ){
                                tt+='<div class="hug_bouton yy__x_signaux_' + i + '" ';
                                tt+=' data-hug_click="interface1.placer_le_curseur_en_lig1(ligne(' + la_pile_des_messages[i][j].ligne + '),zone(\'' + zone_edition + '\'))">';
                                tt+=' lig ' + la_pile_des_messages[i][j].ligne;
                                tt+='</div>';
                            }
                            tt+=la_pile_des_messages[i][j].__xme;
                            tt+='</div>';
                            liste_des_messages+=tt;
                        }
                    }else{
                        liste_des_messages+='<div class="yy__x_signaux_' + i + ' yy_opaque_90">' + la_pile_des_messages[i][j] + '</div>';
                    }
                    if((i === "0" || i === "2" || i === "__xer" || i === "__xal") && classe_du_message_d_erreur === ''){
                        classe_du_message_d_erreur="yy__x_signaux_" + i;
                    }
                }
            }
            la_pile_des_messages={"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []};
        }
        this.les_messages={"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []};
        this.__m_rev1.globale_messages={"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []};
        this.zone_d_edition_en_cours='';
        if(liste_des_messages !== ''){
            if(document.getElementById( 'vv_les_messages' ) === null){
                /* en cas d'erreur à la première connexion, */
                let tt='<h1>Aïe</h1>';
                tt+='<div style="text-align:center;">';
                tt+='<p style="text-align:center;">il y a eu un problème</p>';
                tt+='<a class="yy__x_signaux_1" href=".">Cliquez ici pour réessayer</a>';
                tt+='<div>' + liste_des_messages.replace( /</ , '&lt;' ).replace( />/ , '&gt;' ) + '</div>';
                tt+='</div>';
                this.#maj_innerHTML( 'vv_body' , tt );
            }else{
                let les_messages_anciens=document.getElementById( 'vv_les_messages' );
                var elements_dans_les_messages=document.querySelectorAll( "#vv_les_messages > *" );
                let l01=elements_dans_les_messages.length;
                if(l01 > this.#nombre_max_de_messages_affiches){
                    /* on supprime le dernier message s'il y en a trop */
                    elements_dans_les_messages[l01 - 1]['remove']();
                }
                let condenu_des_messages_anciens=les_messages_anciens.innerHTML;
                let tt='<div id="yy_supprimer_les_lessages" class="yy__x_signaux_neutre yy_opaque_90"><span class="hug_bouton yy__x_signaux_1" style="visibility:hidden;" data-hug_click="interface1.supprimer_les_messages()">supprimer les messages</span></div>';
                if(condenu_des_messages_anciens.indexOf( 'id="yy_supprimer_les_lessages"' ) >= 0){
                    document.getElementById( "yy_supprimer_les_lessages" ).remove();
                    condenu_des_messages_anciens=les_messages_anciens.innerHTML;
                }
                liste_des_messages=tt + liste_des_messages;
                liste_des_messages+=condenu_des_messages_anciens;
                this.#maj_innerHTML( 'vv_les_messages' , liste_des_messages );
                document.getElementById( 'vv_les_messages' ).style.visibility='visible';
                document.getElementById( 'vv_les_messages' ).scrollTo( {"top" : 0 ,"left" : 0 ,"behavior" : "smooth"} );
            }
            document.getElementById( 'vv_supprimer_les_messages_3' ).style.visibility='visible';
        }
        if(classe_du_message_d_erreur !== ''){
            try{
                document.getElementById( 'vv_bouton_messages' ).classList.add( classe_du_message_d_erreur );
                document.getElementById( 'vv_bouton_messages' ).classList.add( 'bouge_element' );
                setTimeout( function(){
                        document.getElementById( 'vv_bouton_messages' ).classList.remove( classe_du_message_d_erreur );
                        document.getElementById( 'vv_bouton_messages' ).classList.remove( 'bouge_element' );
                    } , 1000 );
            } catch {}
        }else{
            if(classe_du_message_d_info !== ''){
                setTimeout( function(){
                        /* après une seconde, on supprime les messages d'information */
                        let la_zone_messages=document.getElementById( 'vv_les_messages' );
                        let liste_des_messages_anciens=la_zone_messages.getElementsByTagName( 'div' );
                        let ids_a_supprimer=[];
                        for( let i=0 ; i < liste_des_messages_anciens.length ; i++ ){
                            if(liste_des_messages_anciens[i].id && liste_des_messages_anciens[i].id === 'yy_supprimer_les_lessages'){
                            }else{
                                if(liste_des_messages_anciens[i].classList.value.indexOf( 'yy__x_signaux_1' ) >= 0
                                       || liste_des_messages_anciens[i].classList.value.indexOf( 'yy__x_signaux_3' ) >= 0
                                       || liste_des_messages_anciens[i].classList.value.indexOf( 'yy__x_signaux___xsu' ) >= 0
                                       || liste_des_messages_anciens[i].classList.value.indexOf( 'yy__x_signaux___xif' ) >= 0
                                ){
                                    ids_a_supprimer.push( i );
                                }
                            }
                        }
                        for( let i=ids_a_supprimer.length - 1 ; i >= 0 ; i-- ){
                            la_zone_messages.removeChild( liste_des_messages_anciens[ids_a_supprimer[i]] );
                        }
                        if(liste_des_messages_anciens.length === 1
                               && liste_des_messages_anciens[0].id
                               && liste_des_messages_anciens[0].id === 'yy_supprimer_les_lessages'
                        ){
                            liste_des_messages_anciens[0].parentNode.removeChild( liste_des_messages_anciens[0] );
                            try{
                                document.getElementById( 'vv_bouton_messages' ).classList.remove( 'hug_bouton_actif' );
                            }catch{
                                /* dans le cas d'ine sous fenetre */
                            }
                        }
                        if(la_zone_messages.innerHTML === ''){
                            try{
                                document.getElementById( 'vv_supprimer_les_messages_3' ).style.visibility='hidden';
                            } catch {}
                        }
                    } , 1500 );
            }
        }
    }
    /*
      =============================================================================================================
    */
    supprimer_les_messages( par ){
        document.getElementById( 'vv_les_messages' ).style.visibility='hidden';
        document.getElementById( 'vv_les_messages' ).innerHTML='';
        this.les_messages={"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []};
        this.__m_rev1.globale_messages={"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []};
        document.getElementById( 'vv_supprimer_les_messages_3' ).style.visibility='hidden';
        try{
            document.getElementById( 'vv_bouton_messages' ).classList.remove( 'hug_bouton_actif' );
        } catch {}
    }
    /*
      =============================================================================================================
    */
    ajoute_un_au_compteur_socket( mat ){
        if(this.#le_web_socket_actif === __xsu){
            let obj={"__x_action" : "socket1.ajoute_un_au_compteur_socket()"};
            this.#envoie_requete_au_serveur( obj );
        }
    }
    /*
      =============================================================================================================
      l'envoie normal se fait via le worker
    */
    #envoie_requete_au_serveur( obj ){
        let mat=this.__m_rev1.rev_tcm( obj.__x_action );
        if(mat.__xst === __xer){
            this.les_messages.__xer.push( this.__m_rev1.nl2() + 'il y a une erreur' );
            this.remplis_les_messages_et_affiche( null );
            return;
        }
        let l01=mat.__xva.length;
        for( let i=1 ; i < l01 ; i++ ){
            if(mat.__xva[i][1] === 'maj_interface1' && mat.__xva[i][2] === 'f'){
                /*
                  par exemple, dans le cas ou on vide un champ avant d'envoyer les données 
                */
                this.#traite_maj_du_html( mat.__xva , null );
                /*
                  puis on supprime le partie de maj de l'interface de la fonction
                */
                this.__m_rev1.supprimer_un_element_de_la_matrice( mat.__xva , i , 0 , [] );
                l01=mat.__xva.length;
                let obj1=this.__m_rev1.matrice_vers_source_rev1( mat.__xva , 0 , false , 1 );
                if(obj1.__xst === __xsu){
                    obj.__x_action=obj1.__xva;
                }else{
                    this.les_messages.__xer.push( this.__m_rev1.nl2() + 'il y a une erreur' );
                    this.remplis_les_messages_et_affiche( null );
                    return;
                }
                break;
            }
        }
        /*
          on traite la fonction
        */
        for( let i=1 ; i < l01 ; i++ ){
            if(mat.__xva[i][1].indexOf( 'formulaire1' ) > 0){
                obj[__xva]={};
                let conteneur1='';
                for( let j=i + 1 ; j < l01 ; j=mat.__xva[i][12] ){
                    if(mat.__xva[j][8] === 1 && mat.__xva[j][2] === 'f' && mat.__xva[j][1] === 'conteneur1'){
                        if(mat.__xva[j + 1][2] === 'c'){
                            conteneur1=mat.__xva[j + 1][1];
                        }
                    }
                }
                if(conteneur1 !== ''){
                    try{
                        let conteneur=document.getElementById( conteneur1 );
                        let elts=conteneur.getElementsByTagName( '*' );
                        for( let j=0 ; j < elts.length ; j++ ){
                            if(elts[j].value !== null && elts[j].id){
                                obj[__xva][elts[j].id]=elts[j].value;
                            }
                        }
                    }catch(e){
                        this.les_messages.__xer.push( this.__m_rev1.nl2( e ) + ' l\'id du conteneur"' + mat.__xva[i + 1][1] + '" n\' pas été trouvé' );
                        this.remplis_les_messages_et_affiche( null );
                        return;
                    }
                }else{
                    /*
                      Ok, pas de conteneur, les données sont dans la requete
                      exemple : "c_taches1.formulaire1( action1(modifier_en_bdd1) , chi_id_tache(2) )"
                    */
                    /*
                      this.les_messages.__xer.push( this.__m_rev1.nl2() + 'conteneur1 n\a pas été trouvé !' );
                      this.remplis_les_messages_et_affiche( null );
                      return;
                    */
                }
            }else{
                switch (mat.__xva[i][1]){
                    case 'c_worker1.connecter_la_chausette' :
                        try{
                            document.getElementById( 'vv_etat_chausette' ).style.display='none';
                            document.getElementById( 'vv_etat_chausette' ).classList.add( 'yy_invisible' );
                        } catch {}
                        break;
                        
                    case 'recuperation_de_la_premiere_page' :
                        let url=window.document.location.href;
                        if(obj.__x_action === 'recuperation_de_la_premiere_page()'){
                            obj['url_courante']=url;
                        }else{
                            if(url.indexOf( '#' ) > 0){
                                url=url.substr( 0 , url.indexOf( '#' ) );
                            }
                            window.document.location=url + '#' + obj.__x_action;
                        }
                        break;
                        
                    case 'c_fonctions_js1' :
                        this.fonctions_js1.traiter_fonction_js1( mat.__xva );
                        this.retablir_les_elements_masques( null );
                        return;
                        
                }
            }
        }
        try{
            document.getElementById( 'vv_les_messages' ).style.visibility='hidden';
        } catch {}
        this.#le_body_builder.style.touchAction='none';
        if(this.#le_worker_fonctionne === true){
            /*
              =============================================================================================
              le cas normal est celui çi, c'est le worker qui fait l'appel ajax 
              =============================================================================================
            */
            this.#debut_timer1=performance.now();
            if(this.le_niveau_de_deverminage >= 1){
                console.log( '%c #envoie_requete_au_serveur postMessage' , 'background:red;color:yellow;' , obj );
            }
            this.__m_worker.postMessage( obj );
        }else{
            this.les_messages.__xer.push( this.__m_rev1.nl2() + ' problème de worker' );
            this.remplis_les_messages_et_affiche( null );
        }
    }
    /*
      =============================================================================================================
    */
    envoyer_un_message_au_worker( obj ){
        if(this.le_niveau_de_deverminage >= 1){
            console.log( '%c envoyer_un_message_au_worker' , 'background:red;color:yellow;' , obj );
        }
        this.__m_worker.postMessage( obj );
    }
    /*
      =============================================================================================================
    */
    #blur_sur_editeur1( e ){
        this.#div_des_positions_du_curseur.innerHTML='';
    }
    /*
      =============================================================================================================
    */
    #mouse_up_sur_editeur1( e ){
        var zoneSource=document.getElementById( e.target.id );
        this.#div_des_positions_du_curseur.innerHTML=zoneSource.selectionStart;
        this.derniere_zone_editee=zoneSource;
        this.position_dans_la_derniere_zone_editee=zoneSource.selectionStart;
        var ttt=zoneSource.getBoundingClientRect();
        this.#div_des_positions_du_curseur.style.top=((parseInt( ttt.bottom , 10 ) + document.documentElement.scrollTop) - 12) + 'px';
        this.#div_des_positions_du_curseur.style.left=(parseInt( ttt.left , 10 ) + document.documentElement.scrollLeft) + 'px';
        /* this.#div_des_positions_du_curseur.style.left=document.documentElement.scrollLeft + 'px'; */
        return false;
    }
    /*
      =============================================================================================================
      #keydown_sur_editeur1( e ){
      //        this.#global_tableau_des_textareas[e.target.id].mon_decallage_haut=e.target.scrollTop;
      }
    */
    /*
      =============================================================================================================
    */
    #analyse_key_up_editeur1( e ){
        var i=0;
        var j=0;
        var c='';
        var a_inserer='';
        var tabtext=[];
        /* var elem=this.#global_tableau_des_textareas[e.target.id]; */
        var zoneSource=document.getElementById( e.target.id );
        this.#div_des_positions_du_curseur.innerHTML=zoneSource.selectionStart;
        this.derniere_zone_editee=zoneSource;
        this.position_dans_la_derniere_zone_editee=zoneSource.selectionStart;
        var ttt=zoneSource.getBoundingClientRect();
        var type_editeur=zoneSource.getAttribute( 'data-editeur1' );
        this.#div_des_positions_du_curseur.style.top=((parseInt( ttt.bottom , 10 ) + document.documentElement.scrollTop) - 10) + 'px';
        this.#div_des_positions_du_curseur.style.left=(parseInt( ttt.left , 10 ) + document.documentElement.scrollLeft) + 'px';
        if(e.keyCode === 36){
            /* touche home : on décale le scroll au début et toute la page aussi */
            zoneSource.scrollTo( {"left" : 0} );
            window.scrollTo( {"left" : 0} );
        }else if(e.keyCode == 13){
            /* retour chariot */
            var scroll_initial=zoneSource.scrollTop;
            var startPos=zoneSource.selectionStart;
            var endPos=zoneSource.selectionEnd;
            var contenu=new String( zoneSource.value );
            if(startPos > 2){
                var ligne_precedente='';
                for( i=startPos - 2 ; i >= 0 ; i-- ){
                    c=contenu.substr( i , 1 );
                    if(c === '\n' || c === '\r'){
                        break;
                    }
                    ligne_precedente=c + ligne_precedente;
                }
                j=0;
                for( i=0 ; i < ligne_precedente.length ; i++ ){
                    j=i;
                    if(ligne_precedente.substr( i , 1 ) !== ' '){
                        break;
                    }
                    if(i === ligne_precedente.length - 1){
                        j++;
                    }
                }
                if(type_editeur === 'rev'){
                    if(contenu.substr( startPos - 2 , 1 ) === '('){
                        /* 1833 hugues à vérifier */
                        a_inserer=' '.repeat( j + 3 );
                        /* NBESPACESREV */
                        __gi1.position_dans_la_derniere_zone_editee+=j + 3;
                    }else{
                        a_inserer=' '.repeat( j );
                        __gi1.position_dans_la_derniere_zone_editee+=j;
                    }
                }else{
                    if(contenu.substr( startPos - 2 , 1 ) === '{'){
                        a_inserer=' '.repeat( j + 4 );
                        /* NBESPACESSOURCEPRODUIT */
                    }else{
                        a_inserer=' '.repeat( j );
                    }
                }
                var nouveau_contenu=contenu.substring( 0 , startPos ) + a_inserer + contenu.substring( endPos );
                /* un point virgule est-il en trop ? */
                zoneSource.value=nouveau_contenu;
                zoneSource.selectionStart=startPos + a_inserer.length;
                zoneSource.selectionEnd=startPos + a_inserer.length;
            }
        }else if(e.keyCode == 86 && e.ctrlKey == true){
            /*
              pour une raison que je ne comprends pas, 
              Google Chrome fait bouger le scroll vertical d'une textarea
              quand on sélectionne une ligne y compris le retour à la ligne de fin
              et qu'on la copie sur elle même ... dans certains cas
              
            */
            /*
              if(zoneSource.scrollTop !== this.#global_tableau_des_textareas[e.target.id].mon_decallage_haut){
              zoneSource.scrollTop=this.#global_tableau_des_textareas[e.target.id].mon_decallage_haut;
              }
            */
        }
    }
    /*
      =============================================================================================================
    */
    message_alerte1( mat ){
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'interface1.message_alerte1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                window.alert( this.__m_rev1.nl2() + mat[i + 1][1] );
            }
        }
    }
    /*
      =============================================================================================================
    */
    ajoute_les_evenements_aux_boutons( page ){
        /* console.log('ajoute_les_evenements_aux_boutons'); */
        /* les zones cliquables */
        let lst=document.querySelectorAll( "[data-hug_click]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event' )){
                lst[i].addEventListener( "click" , this.quand_click.bind( this ) );
                lst[i].addEventListener( "keyup" , this.quand_keyup.bind( this ) );
                lst[i].setAttribute( "data-rev_event" , "1" );
            }
        }
        lst=document.querySelectorAll( "[data-hug_change]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event' )){
                lst[i].addEventListener( "change" , this.quand_change.bind( this ) );
                lst[i].setAttribute( "data-rev_event" , "1" );
            }
        }
        /* les "inputs" par exemple pour les sliders cliquables */
        lst=document.querySelectorAll( "[data-hug_change_ou_entree]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event' )){
                lst[i].addEventListener( "click" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].addEventListener( "input" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].addEventListener( "touchend" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].addEventListener( "keyup" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].setAttribute( "data-rev_event" , "1" );
            }
        }
        /* liens internes */
        lst=document.querySelectorAll( 'a[href]' );
        let premier=true;
        for( let i=0 ; i < lst.length ; i++ ){
            /* console.log(lst[i].href) */
            if(!lst[i].getAttribute( 'data-rev_event' )){
                /*
                  les liens lst[i].href.animVal dans les svg sont bizarres
                */
                if(!lst[i].href.animVal
                       && (lst[i].href.indexOf( '/#' ) >= 0
                           || lst[i].href.indexOf( '/?dt=' ) >= 0
                               && lst[i].href.indexOf( '#' ) >= 0)
                ){
                    if(premier === true){
                        premier=false;
                    }
                    lst[i].addEventListener( "click" , this.#click_sur_lien_hash.bind( this ) );
                    lst[i].setAttribute( "data-rev_event" , "1" );
                    if(page !== null && page !== ''){
                        let lien_interne='';
                        let b=page.substr( 0 , page.length - 1 );
                        b=b.replace( /(aller_a_la_position_interne\s*\(.*?\))/g , '' );
                        let c=lst[i].href.substr( lst[i].href.indexOf( '/#' ) + 1 );
                        if(lst[i].href.indexOf( '/?dt=' )){
                            c=lst[i].href.substr( lst[i].href.indexOf( '#' ) );
                        }
                        if(b.endsWith( '(' )){
                            lien_interne='#' + b + 'aller_a_la_position_interne(' + c + '))';
                        }else{
                            lien_interne='#' + b + ',aller_a_la_position_interne(' + c + '))';
                        }
                        lst[i].setAttribute( "href" , lien_interne );
                    }
                }
            }
        }
        lst=document.querySelectorAll( "[data-editeur1]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event' )){
                /* lst[i].addEventListener( 'keydown' , this.#keydown_sur_editeur1.bind( this ) ); */
                lst[i].addEventListener( 'blur' , this.#blur_sur_editeur1.bind( this ) );
                lst[i].addEventListener( 'mouseup' , this.#mouse_up_sur_editeur1.bind( this ) );
                lst[i].addEventListener( 'keyup' , this.#analyse_key_up_editeur1.bind( this ) );
                lst[i].setAttribute( "data-rev_event" , "1" );
            }
        }
        /* On met l'attribut data-rev_event */
        let elems=document.body.getElementsByTagName( "*" );
        for( let i=0 ; i < elems.length ; i++ ){
            if(elems[i].getAttribute( 'data-rev_event' )){
                elems[i].setAttribute( "tabindex" , 0 );
            }else if(elems[i].tagName === 'INPUT'){
                elems[i].setAttribute( "tabindex" , 0 );
            }
        }
    }
    /*
      =============================================================================================================
      on reçoit #toto
    */
    #aller_a_la_position_interne( position_interne ){
        var elt=document.getElementById( position_interne.substr( 1 ) );
        if(elt){
            var pos=elt.getBoundingClientRect();
            let element=document.scrollingElement;
            let start=element && element.scrollTop || window.pageYOffset;
            this.masquer_les_messages();
            let position=0;
            if(start < 0){
                /* on va vers le haut */
                position=(start + pos.top) - pos.height - this.css_dimensions['h_barre'] - this.css_dimensions['t_padding'];
            }else{
                /* on va vers le bas */
                position=(start + pos.top) - (this.css_dimensions['h_barre'] + this.css_dimensions['t_padding']);
            }
            /* console.log('position=' , position ); */
            this.#faire_defiler_la_page( position );
        }
    }
    /*
      =============================================================================================================
    */
    #click_sur_lien_hash( e ){
        let a=e.srcElement.href;
        if(a.indexOf( '#' ) > 0){
            var le_rev=a.substr( a.indexOf( '#' ) + 1 );
            let mat=this.__m_rev1.rev_tcm( le_rev );
            if(mat.__xst !== __xsu){
                return;
            }
            for( let i=1 ; i < mat.__xva.length ; i++ ){
                if(mat.__xva[i][1] === 'aller_a_la_position_interne'
                       && mat.__xva[i][2] === 'f'
                       && mat.__xva[i][8] === 1
                       && mat.__xva[i + 1][2] === 'c'
                       && mat.__xva[i + 1][1].substr( 0 , 1 ) === '#'
                ){
                    let position_interne=mat.__xva[i + 1][1];
                    this.#aller_a_la_position_interne( position_interne );
                    break;
                }
            }
        }
        return false;
    }
    /*
      =============================================================================================================
      on reçoit par exemple : cookies.enregistrer(champ(id(\'taille_de_la_police\'),valeur(value))) 
      et il faut remplacer value par document.getElementById('taille_de_la_police').value
    */
    #formatter_la_requete( mat ){
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][1] === 'champ'){
                        let id='';
                        let type='';
                        let valeur='';
                        let indice=0;
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][2] === 'f' && mat[k][1] === 'id' && mat[k][8] === 1){
                                id=mat[k + 1][1];
                            }else if(mat[k][2] === 'f' && mat[k][1] === 'valeur' && mat[k][8] === 1){
                                type=mat[k + 1][1];
                                indice=k + 1;
                            }
                        }
                        if(type === 'value' && id !== '' && document.getElementById( id )){
                            mat[indice][1]=document.getElementById( id ).value;
                        }else{
                            return({"__xst" : __xer ,"__xme" : 'erreur'});
                        }
                    }
                }
            }
        }
        let chaine_requete=this.__m_rev1.matrice_vers_source_rev1( /*  */ mat ,  /* parentId */ 0 ,  /* retourLigne */ false ,  /* debut */ 1 );
        return chaine_requete;
    }
    /*
      =============================================================================================================
    */
    #action_change_ou_entree( e , action ){
        /* console.log( '\n\ne=' , e , '\naction=' , action , '\n' ); */
        /*
          
          'cookies.enregistrer(champ(id(\'taille_de_la_police\'),valeur(value)))' :
          
        */
        let mat=null;
        mat=this.__m_rev1.rev_tcm( action );
        if(e.type === 'click' || e.type === 'touchend' || e.type === 'keyup' && e.keyCode == 13){
            if(mat.__xst !== __xsu){
                return;
            }
            let obj=this.#formatter_la_requete( mat.__xva );
            if(obj.__xst === __xsu){
                if(action.substr( 0 , 16 ) === 'fonction_locale('){
                    this.#fonction_locale( mat.__xva , e );
                }else{
                    this.#envoie_requete_au_serveur( {"__x_action" : obj.__xva} );
                }
            }else{
                debugger;
                return;
            }
            return;
        }
        let l01=mat.__xva.length;
        /* console.log( action+ ' ' ,mat) */
        let contient_des_maj=false;
        for( let i=1 ; i < l01 ; i=mat.__xva[i][12] ){
            if(mat.__xva[i][2] === 'f' && mat.__xva[i][1] === 'maj_interface1'){
                contient_des_maj=true;
                break;
            }
        }
        if(contient_des_maj === true){
            this.#traite_maj_du_html( mat.__xva , null );
        }
        return false;
    }
    /*
      =============================================================================================================
    */
    #maj_innerHTML( nom_dans_attribut_id , valeur ){
        let a=document.getElementById( nom_dans_attribut_id );
        let _types_input=[
            /* tbel */
            "button","checkbox","color","date","datetime-local","email","file","hidden","image","month"                ,"number","password","radio","range","reset","search","submit","tel","text","time"
            ,"url","week"];
        if(a === null){
            if(this.le_niveau_de_deverminage >= 1){
                console.log( 'déverminage : il n\'y a pas d\'élément HTML ayant cet id : "' + nom_dans_attribut_id + '"' );
            }
            return;
        }
        if(a.tagName === 'INPUT' || a.tagName === 'TEXTAREA'){
            console.error( 'on ne doit pas mettre à jour le innerHTML d\'un type ' + a.tagName + ' pour "' + nom_dans_attribut_id + '"' );
            return;
        }
        document.getElementById( nom_dans_attribut_id ).innerHTML=valeur;
        this.ajoute_les_evenements_aux_boutons( this.#page_en_cours );
    }
    /*
      =============================================================================================================
    */
    #quand_change_ou_entree( e ){
        e.stopPropagation();
        let elt=e.target;
        let action=elt.getAttribute( 'data-hug_change_ou_entree' );
        do{
            if(action === null){
                elt=elt.parentNode;
                action=elt.getAttribute( 'data-hug_change_ou_entree' );
            }
        }while(action === null);
        if(action !== null){
            /* console.log( 'action=' , action ); */
            this.#action_change_ou_entree( e , action );
        }
    }
    /*
      =============================================================================================================
    */
    #affiche_les_messages(){
        if(document.getElementById( 'vv_les_messages' ).innerHTML === ''){
            this.#maj_innerHTML( 'vv_les_messages' , '<div class="yy__x_signaux_1">Rien à dire, tout va bien 🙂.</div>' );
        }
        document.getElementById( 'vv_les_messages' ).style.visibility='visible';
    }
    /*
      =============================================================================================================
    */
    masquer_les_messages(){
        document.getElementById( 'vv_les_messages' ).style.visibility='hidden';
        document.getElementById( 'vv_supprimer_les_messages_3' ).style.visibility='hidden';
    }
    /*
      =============================================================================================================
    */
    affiche_ou_masque_les_messages(){
        if(document.getElementById( 'vv_les_messages' ).innerHTML === ''){
            this.#maj_innerHTML( 'vv_les_messages' , '<div class="yy__x_signaux_1">Rien à dire, tout va bien 🙂.</div>' );
        }
        if(document.getElementById( 'vv_les_messages' ).style.visibility === 'hidden'){
            document.getElementById( 'vv_les_messages' ).style.visibility='visible';
            document.getElementById( 'vv_bouton_messages' ).classList.add( 'hug_bouton_actif' );
            document.getElementById( 'vv_supprimer_les_messages_3' ).style.visibility='visible';
        }else{
            document.getElementById( 'vv_les_messages' ).style.visibility='hidden';
            document.getElementById( 'vv_bouton_messages' ).classList.remove( 'hug_bouton_actif' );
            document.getElementById( 'vv_supprimer_les_messages_3' ).style.visibility='hidden';
        }
    }
    /*
      =============================================================================================================
    */
    quand_keyup( e ){
        if(e.keyCode === 13){
            this.quand_click( e );
        }
    }
    /*
      =============================================================================================================
    */
    #faire_defiler_la_page( vers_position_Y ){
        window.scroll( {"top" : vers_position_Y ,"left" : 0 ,"behavior" : 'smooth'} );
    }
    /*
      =============================================================================================================
    */
    #ma_constante1( elt ){
        let t='';
        if(elt[4] === 1){
            t=elt[1].replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' );
        }else{
            this.les_messages.__xer.push( this.__m_rev1.nl2() + 'il y a une erreur, type="' + elt[4] + '"' );
        }
        return t;
    }
    /*
      =============================================================================================================
      creer_un_message(type(0),valeur('raaaah!'))
    */
    creer_un_message( mat ){
        let type='';
        let valeur='valeur non trouvée';
        let l01=mat.length;
        for( let i=2 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'valeur'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'c'){
                        valeur=this.#ma_constante1( mat[j] );
                    }
                }
            }else if(mat[i][1] === 'type'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'c'){
                        type=mat[j][1];
                        switch (type){
                            case '__xer' : type='__xer';
                                break;
                            case '__xsu' : type='__xsu';
                                break;
                            case '__xal' : type='__xal';
                                break;
                            case '__xif' : type='__xif';
                                break;
                            case '__xdv' : type='__xdv';
                                break;
                            case '0' : type='__xer';
                                break;
                            case '1' : type='__xsu';
                                break;
                            case '2' : type='__xal';
                                break;
                            case '3' : type='__xif';
                                break;
                            case '4' : type='__xdv';
                                break;
                        }
                    }
                }
            }
        }
        if(type !== ''){
            this.les_messages[type].push( valeur );
            this.remplis_les_messages_et_affiche( null );
        }else{
            this.les_messages.__xer.push( this.__m_rev1.nl2() + 'il y a une erreur, type="' + type + '"' );
            this.remplis_les_messages_et_affiche( null );
        }
    }
    /*
      =============================================================================================================
    */
    haut_de_page(){
        this.#faire_defiler_la_page( 0 );
    }
    /*
      =============================================================================================================
    */
    vider_champ1( mat1 ){
        let nom_champ_dans_parent1=null;
        let nom_libelle_dans_parent1=null;
        let libelle_si_vide1='';
        let l01=mat1.length;
        for( let i=1 ; i < l01 ; i=mat1[i][12] ){
            if("interface1.vider_champ1" === mat1[i][1] && mat1[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                    if(mat1[j][1] !== '' && mat1[j][2] === 'f'){
                        for( let k=j + 1 ; k < l01 ; k=mat1[k][12] ){
                            if(mat1[k][1] === 'nom_champ_dans_parent1' && mat1[k][2] === 'f' && mat1[k][8] === 1 && mat1[k + 1][2] === 'c'){
                                nom_champ_dans_parent1=mat1[k + 1][1];
                            }
                            if(mat1[k][1] === 'nom_libelle_dans_parent1' && mat1[k][2] === 'f' && mat1[k][8] === 1 && mat1[k + 1][2] === 'c'){
                                nom_libelle_dans_parent1=mat1[k + 1][1];
                            }
                            if(mat1[k][1] === 'libelle_si_vide1' && mat1[k][2] === 'f' && mat1[k][8] === 1 && mat1[k + 1][2] === 'c'){
                                libelle_si_vide1=mat1[k + 1][1];
                            }
                        }
                    }
                }
            }
        }
        if(nom_champ_dans_parent1 !== null){
            try{
                document.getElementById( nom_champ_dans_parent1 ).value='';
            } catch {}
        }
        if(nom_libelle_dans_parent1 !== null){
            try{
                document.getElementById( nom_libelle_dans_parent1 ).innerHTML=libelle_si_vide1;
            } catch {}
        }
    }
    /*
      =============================================================================================================
    */
    choisir_dans_sous_fenetre1( mat ){
        let nom_champ_dans_parent1=null;
        let nom_libelle_dans_parent1=null;
        let mat1=null;
        let hash_courante=decodeURIComponent( document.location.hash.substr( 1 ) );
        let obj=this.__m_rev1.rev_tcm( hash_courante );
        if(obj.__xst === __xsu){
            /* c_dossiers1.page_dossiers_sous_liste1( sans_menus1() , nom_champ_dans_parent1(chx_parent_dossier) , champs_texte_a_rapatrier1() ) */
            mat1=obj.__xva;
            let l01=mat1.length;
            for( let i=1 ; i < l01 ; i=mat1[i][12] ){
                if(mat1[i][1] !== '' && mat1[i][2] === 'f'){
                    for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][1] === 'nom_champ_dans_parent1' && mat1[j][2] === 'f' && mat1[j][8] === 1 && mat1[j + 1][2] === 'c'){
                            nom_champ_dans_parent1=mat1[j + 1][1];
                        }
                        if(mat1[j][1] === 'nom_libelle_dans_parent1' && mat1[j][2] === 'f' && mat1[j][8] === 1 && mat1[j + 1][2] === 'c'){
                            nom_libelle_dans_parent1=mat1[j + 1][1];
                        }
                    }
                }
            }
        }
        if(nom_champ_dans_parent1 === null){
            let l01=mat.length;
            for( let i=1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] !== '' && mat[i][2] === 'f'){
                    for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                        if(mat[j][1] === 'nom_champ_dans_parent1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            nom_champ_dans_parent1=mat[j + 1][1];
                        }
                        if(mat[j][1] === 'nom_libelle_dans_parent1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            nom_libelle_dans_parent1=mat[j + 1][1];
                        }
                    }
                }
            }
        }
        if(nom_champ_dans_parent1 !== null){
            let id1=null;
            let libelle1='';
            for( let i=1 ; i < mat.length ; i=mat[i][12] ){
                if(mat[i][1] === 'interface1.choisir_dans_sous_fenetre1' && mat[i][2] === 'f'){
                    for( let j=i + 1 ; j < mat.length ; j=mat[j][12] ){
                        if(mat[j][1] === 'id1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            id1=parseInt( mat[j + 1][1] , 10 );
                        }
                        if(mat[j][1] === 'libelle1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            libelle1=mat[j + 1][1];
                        }
                    }
                }
            }
            if(id1 !== null && id1 !== 0){
                window.parent.document.getElementById( nom_champ_dans_parent1 ).value=id1;
            }
            if(nom_libelle_dans_parent1 !== null){
                window.parent.document.getElementById( nom_libelle_dans_parent1 ).innerHTML=libelle1;
            }
        }
        let vv_sous_fenetre1=window.parent.document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML='';
        vv_sous_fenetre1.close();
        return;
    }
    /*
      =============================================================================================================
    */
    fermer_fenetre1( mat ){
        this.#la_sous_fenetre1.innerHTML='';
        this.#la_sous_fenetre1.close();
        return;
    }
    /*
      =============================================================================================================
    */
    fermer_sous_fenetre1( mat ){
        let vv_sous_fenetre1=window.parent.document.getElementById( 'vv_sous_fenetre1' );
        let l01=mat.length;
        let envoyer_a_serveur='';
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'maj_interface1' && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === 'fermer_sous_fenetre1' && mat[j][2] === 'f' && mat[j][8] > 0){
                        let obj=this.__m_rev1.matrice_vers_source_rev1( mat , j , false , j + 1 );
                        if(obj.__xst === __xsu){
                            envoyer_a_serveur=obj.__xva.trim();
                        }
                        break;
                    }
                }
            }
        }
        if(envoyer_a_serveur !== ''){
            window.parent.__gi1.__m_worker.postMessage( {"__x_action" : envoyer_a_serveur} );
        }
        vv_sous_fenetre1.innerHTML='';
        vv_sous_fenetre1.close();
        return;
    }
    /*
      =============================================================================================================
    */
    affiche_sous_fenetre1( mat ){
        let l_url=null;
        for( let i=1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'interface1.affiche_sous_fenetre1' && mat[i][2] === 'f'){
                let obj=this.__m_rev1.matrice_vers_source_rev1( mat , i , false , i + 1 );
                if(obj.__xst === __xsu){
                    l_url=obj.__xva.trim();
                }
                break;
            }
        }
        if(l_url !== null){
            let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
            this.#la_sous_fenetre1.innerHTML='';
            /*  */
            let fermer=document.createElement( 'div' );
            fermer.classList.add( 'hug_bouton' );
            fermer.classList.add( 'yy__x_signaux_0' );
            fermer.setAttribute( 'data-hug_click' , "interface1.fermer_sous_fenetre1()" );
            fermer.innerHTML='X';
            this.#la_sous_fenetre1.appendChild( fermer );
            let iframe=document.createElement( 'iframe' );
            iframe.classList.add( 'vv_iframe_sous_fenetre1' );
            let loc=window.document.location;
            iframe.src=(loc.origin + loc.pathname) + "#" + l_url;
            /* c_dossiers1.page_dossiers_sous_liste1(sans_menus1())" */
            this.#la_sous_fenetre1.appendChild( iframe );
            /*  */
            this.#la_sous_fenetre1.showModal();
            this.ajoute_les_evenements_aux_boutons( null );
        }
    }
    /*
      =============================================================================================================
    */
    #action_interface1( mat ){
        if(mat.length >= 2){
            /* on retire le "interface1." */
            let nomf=mat[1][1].substr( 11 );
            try{
                __gi1[nomf]( mat );
                this.retablir_les_elements_masques( null );
                return;
            }catch(e){
                console.log( 'e=' , e );
                this.les_messages.__xer.push( this.__m_rev1.nl2( e ) + 'la fonction interface "' + nomf + '" n\'a pas pu être appelée ( est-elle publique ? )<br />' );
                this.remplis_les_messages_et_affiche( null );
            }
        }else{
            this.les_messages.__xer.push( this.__m_rev1.nl2() + 'mat.length=' + mat.length );
            this.remplis_les_messages_et_affiche( null );
        }
    }
    /*
      =============================================================================================================
    */
    #quand_clavier_sur_input_formulaire( e ){
        if(e.keyCode === 13){
            if(e.target.getAttribute( 'data-formulaire_parent' )){
                let le_div_formulaire=document.getElementById( e.target.getAttribute( 'data-formulaire_parent' ) );
                let lst=le_div_formulaire.getElementsByTagName( '*' );
                for( let i=0 ; i < lst.length ; i++ ){
                    if(lst[i].getAttribute( 'data-hug_click' )
                           && lst[i].getAttribute( 'data-hug_click' ) !== ''
                           && lst[i].className.indexOf( 'yy_bouton_loupe' ) >= 0
                    ){
                        let evt={"target" : lst[i]};
                        this.quand_click( evt );
                        break;
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    quand_change( e ){
        try{
            e.stopPropagation();
        } catch {}
        let elt=e.target;
        let action=elt.getAttribute( 'data-hug_change' );
        do{
            if(action === null){
                elt=elt.parentNode;
                action=elt.getAttribute( 'data-hug_change' );
            }
        }while(action === null);
        if(elt.getAttribute( 'data-id_menu' ) && elt.getAttribute( 'data-id_menu' ) !== ''){
            this.#id_menu=elt.getAttribute( 'data-id_menu' );
        }
        if(action !== null && action !== ''){
            let source=action + '';
            let mat=this.__m_rev1.rev_tcm( source );
            if(mat.__xst === __xsu){
                let re_source=this.__m_rev1.matrice_vers_source_rev1( mat.__xva , 0 , false , 1 );
                if(re_source.__xst === __xsu){
                    /* source=re_source.__xva; */
                }else{
                    this.les_messages.__xer.push( 'Erreur dans le rev "' + source + '"' );
                    this.les_messages.__xer.push( mat.__xme );
                    this.remplis_les_messages_et_affiche( null );
                    return false;
                }
            }else{
                this.les_messages.__xer.push( 'Erreur dans le rev "' + source + '"' );
                this.les_messages.__xer.push( mat.__xme );
                this.remplis_les_messages_et_affiche( null );
                return false;
            }
            if(action.substr( 0 , 11 ) === 'interface1.'){
                elt.classList.add( 'yy_invisible' );
                this.#element_appel_reseau.push( elt );
                this.#action_interface1( mat.__xva );
                return false;
            }
            /* console.log('action=' , action ); */
            /* debugger */
            elt.classList.add( 'yy_invisible' );
            this.#element_appel_reseau.push( elt );
            /*
              on supprime le double click pour zoomer ou le pinch
            */
            this.#envoie_requete_au_serveur( {"__x_action" : source} );
        }
        return false;
    }
    /*
      =============================================================================================================
    */
    quand_click( e ){
        try{
            e.stopPropagation();
        } catch {}
        let elt=e.target;
        let action=elt.getAttribute( 'data-hug_click' );
        do{
            if(action === null){
                elt=elt.parentNode;
                action=elt.getAttribute( 'data-hug_click' );
            }
        }while(action === null);
        if(elt.getAttribute( 'data-id_menu' ) && elt.getAttribute( 'data-id_menu' ) !== ''){
            this.#id_menu=elt.getAttribute( 'data-id_menu' );
        }
        if(action !== null && action !== ''){
            let source=action + '';
            let mat=this.__m_rev1.rev_tcm( source );
            if(mat.__xst === __xsu){
                let re_source=this.__m_rev1.matrice_vers_source_rev1( mat.__xva , 0 , false , 1 );
                if(re_source.__xst === __xsu){
                    /* source=re_source.__xva; */
                }else{
                    this.les_messages.__xer.push( 'Erreur dans le rev "' + source + '"' );
                    this.les_messages.__xer.push( mat.__xme );
                    this.remplis_les_messages_et_affiche( null );
                    return false;
                }
            }else{
                this.les_messages.__xer.push( 'Erreur dans le rev "' + source + '"' );
                this.les_messages.__xer.push( mat.__xme );
                this.remplis_les_messages_et_affiche( null );
                return false;
            }
            if(action.substr( 0 , 11 ) === 'interface1.'){
                elt.classList.add( 'yy_invisible' );
                this.#element_appel_reseau.push( elt );
                this.#action_interface1( mat.__xva );
                return false;
            }
            /* console.log('action=' , action ); */
            /* debugger */
            elt.classList.add( 'yy_invisible' );
            this.#element_appel_reseau.push( elt );
            /*
              on supprime le double click pour zoomer ou le pinch
            */
            this.#envoie_requete_au_serveur( {"__x_action" : source} );
        }
        return false;
    }
    /*
      =============================================================================================================
    */
    #gerer_les_parametres_de_l_interface(){
        if(this.#stockage_local === null){
            this.#initialiser_stockage_local();
        }
        let t='';
        let locas_sto_txt=localStorage.getItem( __X_CLE_APPLICATION + '_sl0' );
        let locas_sto=null;
        if(locas_sto_txt){
            try{
                locas_sto=JSON.parse( locas_sto_txt );
                for(let i in this.#stockage_local.modif_util){
                    this.#stockage_local.modif_util[i].val=locas_sto.modif_util[i].val;
                    this.#stockage_local.modif_util[i].defaut=locas_sto.modif_util[i].val;
                }
            } catch {}
        }
        for(let i in this.#stockage_local.modif_util){
            let elt=this.#stockage_local.modif_util[i];
            t+='<div style="border:1px red solid;margin:10px;padding:10px;">';
            t+='    <span>' + elt['libelle0'] + '</span>';
            t+='   <input type="range" id="' + i + '" ';
            t+='      min="' + this.#reference_stockage_local.modif_util[i].valeurs[0] + '" ';
            t+='      max="' + this.#reference_stockage_local.modif_util[i].valeurs[this.#reference_stockage_local.modif_util[i].valeurs.length - 1] + '" ';
            t+='      step="' + this.#reference_stockage_local.modif_util[i].step + '" ';
            t+='      value="' + elt.val + '" ';
            t+='      data-hug_change_ou_entree="';
            t+='fonction_locale(modifier_un_parametre_css1(\'' + i + '\'))';
            t+=',maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),innerHTML(valeur_de_champ(' + i + '))))';
            if(i === '--t_police'){
                t+=',maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(fontSize(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='" />';
                t+='    ' + elt['libelle1'] + ' : <span id="' + i + '_' + elt['libelle1'] + '">' + elt.defaut + '</span>' + elt['dim'] + ',';
                t+='    ' + elt['libelle2'] + ' : <span id="' + i + '_' + elt['libelle2'] + '">' + elt.defaut + '</span>' + elt['dim'] + '';
            }else if('--t_padding' === i){
                t+='maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(padding(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='" />';
                t+='    ' + elt['libelle1'] + ' : <span id="' + i + '_' + elt['libelle1'] + '" style="display:inline-block;border:var(--t_border) red solid;padding:var(--t_padding);">' + elt.defaut + '</span>' + elt['dim'] + ',';
                t+='    ' + elt['libelle2'] + ' : <span id="' + i + '_' + elt['libelle2'] + '" style="display:inline-block;border:var(--t_border) red solid;padding:var(--t_padding);">' + elt.defaut + '</span>' + elt['dim'] + '';
            }else if('--t_marge_gd' === i){
                t+='maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(marginLeft(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(marginRight(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='" />';
                t+='' + elt['libelle1'] + ' : |<span id="' + i + '_' + elt['libelle1'] + '" style="display:inline-block;border:var(--t_border) red solid;margin-left:var(--t_marge_gd_plus);margin-right:var(--t_marge_gd_plus);">' + elt.defaut + '</span>' + elt['dim'] + ',';
                t+='' + elt['libelle2'] + ' : <span id="' + i + '_' + elt['libelle2'] + '" style="display:inline-block;border:var(--t_border) red solid;margin:var(--t_marge_hb_plus) var(--t_marge_gd_plus);">' + elt.defaut + '</span>' + elt['dim'] + '';
            }else if('--t_marge_hb' === i){
                t+='maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(marginTop(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(marginBottom(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='" />';
                t+='' + elt['libelle1'] + ' : <span id="' + i + '_' + elt['libelle1'] + '" style="display:inline-block;border:var(--t_border) red solid;margin-top:var(--t_marge_hb_plus);">' + elt.defaut + '</span>' + elt['dim'] + ',';
                t+='' + elt['libelle2'] + ' : <span id="' + i + '_' + elt['libelle2'] + '" style="display:inline-block;border:var(--t_border) red solid;margin-top:var(--t_marge_hb_plus);">' + elt.defaut + '</span>' + elt['dim'] + '';
            }else if('--t_border' === i){
                t+='maj_interface1(modifier(id(' + i + '_' + elt['libelle1'] + '),style(borderWidth(valeur_de_champ(' + i + '),dimension(' + elt['dim'] + ')))))';
                t+='" />';
                t+='' + elt['libelle1'] + ' : <span id="' + i + '_' + elt['libelle1'] + '" style="display:inline-block;border:var(--t_border) red solid;margin:var(--t_marge_hb_plus) var(--t_marge_gd_plus);">' + elt.defaut + '</span>' + elt['dim'] + ',';
                t+='' + elt['libelle2'] + ' : <span id="' + i + '_' + elt['libelle2'] + '" style="display:inline-block;border:var(--t_border) red solid;margin:var(--t_marge_hb_plus) var(--t_marge_gd_plus);">' + elt.defaut + '</span>' + elt['dim'] + '';
            }else{
                t+='" />';
                t+='    ' + elt['libelle1'] + ' : <span id="' + i + '_' + elt['libelle1'] + '">' + elt.defaut + '</span>' + elt['dim'] + ',';
                t+='    ' + elt['libelle2'] + ' : <span id="' + i + '_' + elt['libelle2'] + '">' + elt.defaut + '</span>' + elt['dim'] + '';
            }
            t+='</div>';
        }
        try{
            document.getElementById( 'vv_gerer_les_parametres_de_l_interface' ).innerHTML=t;
            this.ajoute_les_evenements_aux_boutons( null );
        }catch(e){
            console.error( e );
        }
        t='ecran tactile = <b>' + JSON.stringify( this.#ecran_tactile ) + '</b>';
        t+='<br />';
        t+='safari mobile = <b>' + JSON.stringify( this.#safari_mobile ) + '</b>';
        t+='<br />';
        t+='taille de l\'écran initial en px = <b>' + JSON.stringify( this.#taille_de_l_ecran_initial_en_px ) + '</b>';
        t+='<br />';
        t+='taille de l\'écran actuel px = <b>' + JSON.stringify( [window.innerWidth,window.innerHeight] ) + '</b>';
        t+='<br />';
        t+='genre safari = <b>' + JSON.stringify( this.#genre_safari ) + '</b>';
        t+='<br />';
        t+='ipad ou iphn = <b>' + JSON.stringify( this.#ipad_ou_iphn ) + '</b>';
        t+='<br />';
        t+='#genre crios = <b>' + JSON.stringify( this.#genre_crios ) + '</b>';
        t+='<br />';
        t+='navigator.userAgent = <b>' + JSON.stringify( navigator.userAgent ) + '</b>';
        try{
            document.getElementById( 'vv_parametres_nagigateur' ).innerHTML=t;
        }catch(e){
            console.error( e );
        }
    }
    /*
      =============================================================================================================
      code trouvé sur le ternet qui permet de supprimer le double click => zoom
      https://stackoverflow.com/a/42162450/3717718
      =============================================================================================================
    */
    #supprimer_le_zoom_sur_safari(){
        /* Tags of interest: Only process certain interactive elements */
        /* Add event listeners for touch and mouse events */
        document.addEventListener( 'touchend' , this.#preventHover.bind( this ) , true );
        document.addEventListener( 'mouseover' , this.#preventHover.bind( this ) , true );
        document.addEventListener( 'mousemove' , this.#preventHover.bind( this ) , true );
        document.addEventListener( 'click' , this.#preventHover.bind( this ) , true );
    }
    /* function preventHover */
    #preventHover( e ){
        function shouldPrevent( target ){
            var tagName=target.tagName.toLowerCase();
            var datasetBind=target.dataset.bind;
            var preventFilter=datasetBind && datasetBind.indexOf( 'click' ) > -1 || (tagName == 'a' || tagName == 'button');
            return preventFilter;
        }
        var eventSelector={
            "touchend" : function( _ , target ){
                /* Reset any flags on touchend */
                target.dataset._clicked_='';
                target.dataset._mousemove_='0';
                target.dataset._timeOutId_='';
            } ,
            "mouseover" : function( e ){
                e.preventDefault();
                /* Prevent default hover behavior */
            } ,
            "mousemove" : function( e , target ){
                e.preventDefault();
                /* Prevent default hover behavior */
                var _mousemoves=+(target.dataset._mousemove_ || '0');
                _mousemoves=_mousemoves + 1;
                /* console.log('mousemoves: ' + _mousemoves); */
                target.dataset._mousemove_=_mousemoves;
                /* Trigger click event after enough movement */
                if(_mousemoves > 1 && !target.dataset._timeOutId_){
                    var id=setTimeout( function(){
                        /* console.log('double mousemove click fired'); */
                        target.click();
                        /* Simulate a click after mouse move */
                    } , 80 );
                    /* Adjust delay to fine-tune the click event timing */
                    target.dataset._timeOutId_=id;
                }
            } ,
            "click" : function( e , target ){
                /* Prevent double click */
                if(target.dataset._clicked_){
                    /* This check prevents interference with valid tracking */
                    /* and programmatic click events. */
                    if(e.isTrusted){
                        /* console.log('prevented doubleclick'); */
                        e.preventDefault();
                    }
                    return;
                }
                /* Prevent timeout click */
                if(target.dataset._timeOutId_){
                    /* console.log('cleared timeout'); */
                    clearTimeout( +target.dataset._timeOutId_ );
                }
                /* Mark element as clicked */
                target.dataset._clicked_='true';
            }
        };
        var target=e.target;
        /* Skip elements that don't have click handlers or necessary attributes */
        if(!(target && target.click && target.tagName && target.dataset)){
            return;
        }
        if(!shouldPrevent( target )){
            return;
        }
        var type=e.type;
        /* console.log(type, target); */
        eventSelector[type] && eventSelector[type]( e , target );
    }
    /*
      =============================================================================================================
    */
    #le_userAgent( regx_a_trouver ){
        if( typeof window !== 'undefined' && window.navigator){
            return(!!navigator.userAgent.match( regx_a_trouver ));
        }
    }
    /*
      =============================================================================================================
    */
    fonction_temporaire( p ){
        console.log( 'fonction_temporaire , p=' , p );
    }
    /*
      =============================================================================================================
    */
    #fonction_locale( mat , evt ){
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i++ ){
            if(mat[i][2] === 'f'){
                if( typeof this[mat[i][1]] === 'function'){
                    this[mat[i][1]]( mat , evt );
                }
            }
        }
        /*
          =====================================================================================================
        */
    }
    #initialise_stockage_local(){
        this.#reference_stockage_local={
             /* les valeurs des paramètres modifiables par les utilisateurs #init_css  #stockage_local.modif_util */
            "modif_util" : {
                "--t_police" : {
                    "val" : 16 ,
                    "dim" : 'px' ,
                    "valeurs" : [12,14,16,18,20] ,
                    "step" : 2 ,
                    "defaut" : 16 ,
                    "libelle0" : 'taille de la police' ,
                    "libelle1" : 'nouvelle' ,
                    "libelle2" : 'actuelle'
                } ,
                "--t_padding" : {
                    "val" : 2 ,
                    "dim" : 'px' ,
                    "valeurs" : [2,4,6] ,
                    "step" : 2 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des espaces intérieurs' ,
                    "libelle1" : 'nouvelle' ,
                    "libelle2" : 'actuelle'
                } ,
                "--t_border" : {
                    "val" : 1 ,
                    "dim" : 'px' ,
                    "valeurs" : [1,2,3,4] ,
                    "step" : 1 ,
                    "defaut" : 1 ,
                    "libelle0" : 'taille des bordures' ,
                    "libelle1" : 'nouvelle' ,
                    "libelle2" : 'actuelle'
                } ,
                "--t_marge_gd" : {
                    "val" : 0 ,
                    "dim" : 'px' ,
                    "valeurs" : [0,2,4,6] ,
                    "step" : 2 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des marges gauche/droites' ,
                    "libelle1" : 'nouvelle' ,
                    "libelle2" : 'actuelle'
                } ,
                "--t_marge_hb" : {
                    "val" : 0 ,
                    "dim" : 'px' ,
                    "valeurs" : [0,2,4,6] ,
                    "step" : 2 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des marges haut/bas' ,
                    "libelle1" : 'nouvelle' ,
                    "libelle2" : 'actuelle'
                } ,
                "--t_fenetre" : {
                    "val" : 800 ,
                    "dim" : 'px' ,
                    "valeurs" : [800,1000,1200,1400] ,
                    "step" : 200 ,
                    "defaut" : 800 ,
                    "libelle0" : 'taille de la fenêtre' ,
                    "libelle1" : 'nouvelle' ,
                    "libelle2" : 'actuelle'
                }
            } ,
            "zones_sauvegardées" : {}
        };
        let locas_sto_txt=localStorage.getItem( __X_CLE_APPLICATION + '_sl0' );
        let locas_sto=null;
        if(locas_sto_txt){
            try{
                locas_sto=JSON.parse( locas_sto_txt );
                this.#stockage_local=locas_sto;
            }catch{
                this.#initialiser_stockage_local();
                localStorage.setItem( __X_CLE_APPLICATION + '_sl0' , JSON.stringify( this.#stockage_local ) );
            }
        }else{
            this.#initialiser_stockage_local();
            localStorage.setItem( __X_CLE_APPLICATION + '_sl0' , JSON.stringify( this.#stockage_local ) );
        }
    }
    /*
      =============================================================================================================
    */
    #initialiser_stockage_local(){
        this.#stockage_local=this.#reference_stockage_local;
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(this.#stockage_local === null){
            this.#initialiser_stockage_local();
        }
        if(this.#stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            this.#stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        }else{
            this.#stockage_local['zones_sauvegardées']={};
            this.#stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        }
        localStorage.setItem( __X_CLE_APPLICATION + '_sl0' , JSON.stringify( this.#stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    #css1(){
        if(this.#stockage_local === null){
            this.#initialiser_stockage_local();
        }
        let locas_sto_txt=localStorage.getItem( __X_CLE_APPLICATION + '_sl0' );
        let locas_sto=null;
        if(locas_sto_txt){
            try{
                locas_sto=JSON.parse( locas_sto_txt );
                /* console.log(locas_sto); */
                for(let i in this.#stockage_local.modif_util){
                    if(this.#stockage_local.modif_util[i].val !== locas_sto.modif_util[i].val){
                        this.#stockage_local.modif_util[i].val=locas_sto.modif_util[i].val;
                    }
                }
            } catch {}
        }else{
            if(this.#ecran_tactile === true){
                /*
                  si c'est la première fois qu'on se connecte et qu'on est sur un écran tactile
                  la taille de la police de caractère est égale à 20
                */
                this.#stockage_local.modif_util['--t_police']['val']=20;
            }
        }
        let vv_style=document.getElementById( 'vv_style' );
        let t='';
        let val_padding_de_input=4;
        let val_police=parseInt( this.#stockage_local.modif_util['--t_police']['val'] , 10 );
        let val_padding=parseInt( this.#stockage_local.modif_util['--t_padding']['val'] , 10 );
        let val_border=parseInt( this.#stockage_local.modif_util['--t_border']['val'] , 10 );
        let val_marge_gd=parseInt( this.#stockage_local.modif_util['--t_marge_gd']['val'] , 10 );
        let val_marge_hb=parseInt( this.#stockage_local.modif_util['--t_marge_hb']['val'] , 10 );
        /*
          pointer-events: none;
          supprimer le double click pour zoomer sur les appareils mobiles
          avec le none, on ne peut plus scroller
          * {
          touch-action: manipulation;
          touch-action: none; 
          }
          $txt2.='   text-size-adjust: 100%;'.PHP_EOL;
          pour les textarea     overscroll-behavior: none;
          // supprime le double click sur un bouton masqué
          user-select: none;
          
          
        */
        /* t+=':root{}' */
        t+='*,*::before,*::after{box-sizing:border-box;}';
        t+='html{background:linear-gradient(to bottom, #ECEFF1 0%, #DBDEE0 100%);min-height:100%;}';
        t+='body{';
        t+='--t_police:' + this.#stockage_local.modif_util['--t_police']['val'] + this.#stockage_local.modif_util['--t_police']['dim'] + ';';
        t+='--t_fenetre:' + this.#stockage_local.modif_util['--t_fenetre']['val'] + this.#stockage_local.modif_util['--t_fenetre']['dim'] + ';';
        t+='--t_padding:' + this.#stockage_local.modif_util['--t_padding']['val'] + this.#stockage_local.modif_util['--t_padding']['dim'] + ';';
        t+='--t_border:' + this.#stockage_local.modif_util['--t_border']['val'] + this.#stockage_local.modif_util['--t_border']['dim'] + ';';
        t+='--t_marge_gd_plus:' + this.#stockage_local.modif_util['--t_marge_gd']['val'] + this.#stockage_local.modif_util['--t_marge_gd']['dim'] + ';';
        t+='--t_marge_gd_moins:-' + this.#stockage_local.modif_util['--t_marge_gd']['val'] + this.#stockage_local.modif_util['--t_marge_gd']['dim'] + ';';
        t+='--t_marge_hb_plus:' + this.#stockage_local.modif_util['--t_marge_hb']['val'] + this.#stockage_local.modif_util['--t_marge_hb']['dim'] + ';';
        t+='--t_marge_hb_moins:-' + this.#stockage_local.modif_util['--t_marge_hb']['val'] + this.#stockage_local.modif_util['--t_marge_hb']['dim'] + ';';
        t+='--t_padding_de_input:' + val_padding_de_input + 'px;';
        let hauteur_ligne=val_police + val_padding;
        t+='--h_ligne_bouton:' + hauteur_ligne + 'px;';
        t+='--h_ligne_bouton_moins:-' + hauteur_ligne + 'px;';
        let hauteur_ligne_paragraphe=hauteur_ligne + 3 * val_padding;
        t+='--h_ligne_paragraphe:' + hauteur_ligne_paragraphe + 'px;';
        let hauteur_mini_bouton=hauteur_ligne + 2 * val_padding + 2 * val_border;
        t+='--h_mini_but:' + hauteur_mini_bouton + 'px;';
        let h_barre=parseInt( hauteur_mini_bouton + 2 * val_marge_hb + 11 , 10 );
        t+='--h_barre:' + h_barre + 'px;';
        t+='--h_bloupe:' + ((h_barre + hauteur_ligne) - 2 * val_marge_hb - 2 * val_border - 2 * val_padding_de_input - 1) + 'px;';
        let taille_bouton_carre=h_barre - 2 * val_marge_hb;
        t+='--t_boutons_carres:' + taille_bouton_carre + 'px;';
        let espace_1_boutons_carres=1 * (taille_bouton_carre + 2 * val_marge_gd);
        t+='--t_1boutons_carres:' + espace_1_boutons_carres + 'px;';
        let espace_2_boutons_carres=2 * (taille_bouton_carre + 2 * val_marge_gd);
        t+='--t_2boutons_carres:' + espace_2_boutons_carres + 'px;';
        let hauteur_max_textarea='80vh';
        this.css_dimensions={
             /*  */
            "h_barre" : h_barre ,
            "t_padding" : parseInt( this.#stockage_local.modif_util['--t_padding']['val'] , 10 ) ,
            "hauteur_max_textarea" : hauteur_max_textarea ,
            "t_border" : parseInt( this.#stockage_local.modif_util['--t_border']['val'] , 10 ) ,
            "t_police" : parseInt( this.#stockage_local.modif_util['--t_police']['val'] , 10 ) ,
            "t_boutons_carres" : taille_bouton_carre ,
            "t_padding_de_input" : val_padding_de_input
        };
        t+='font-size:var(--t_police);';
        t+='max-width:var(--t_fenetre);';
        t+='border:0;';
        t+='color:#263238;';
        t+='font-family:verdana;';
        t+='font-size:var(--t_police);';
        t+='margin:0 auto;';
        t+='max-width:var(--t_fenetre);';
        t+='overflow-y:scroll;';
        t+='/*espace pour bas de page*/';
        t+='padding-bottom:var(--h_barre);';
        t+='padding-left:0;';
        t+='padding-right:0;';
        t+='padding-top:var(--h_barre);';
        t+='}';
        t+='';
        t+='h1{text-shadow:#ccc 1px 1px 1px;text-align:center;color:red;}';
        t+='';
        t+='input[type="password"],input[type="text"]{';
        t+='    min-width: var(--t_boutons_carres);';
        t+='    display:inline-block;';
        t+='    border-radius: 5px;';
        t+='    border-width: 2px;';
        t+='    border-color: #DAE2E5;';
        t+='    border-style: inset;';
        t+='    background-color: #dddddd;';
        t+='    padding:var(--t_padding_de_input);';
        t+='    font-size:var(--t_police);';
        t+='    line-height: var(--h_ligne_bouton);';
        /*
          t+='    max-width:20em;';
        */
        t+='}';
        t+='h3{text-align:center;}';
        t+='input[type="password"]:focus,input[type="text"]:focus,textarea:focus{';
        t+='    outline: none;';
        t+='    background:#f0f0f0;';
        t+='    border-color: #dd6655;';
        t+='}';
        t+='a:focus{';
        t+='    box-shadow:0px 0px 8px red;';
        t+='    outline: none;';
        t+='}';
        t+='';
        t+='';
        t+='#vv_nav{';
        t+='   display:flex;';
        t+='   position:fixed;';
        t+='   top:0;';
        t+='   width:100%;';
        t+='   z-index:1000;';
        t+='   background:#ECEFF1;';
        t+='   background-image:linear-gradient(to bottom, #B0BEC5, #607D8B);';
        t+='   box-shadow:0px 2px 5px #B0BEC5;';
        t+='   justify-content:space-around;';
        t+='   height:var(--h_barre);';
        t+='   max-width:var(--t_fenetre);';
        t+='}';
        t+='#vv_nav_gauche{';
        t+='   display:flex;';
        t+='   min-width:var(--t_2boutons_carres);';
        t+='   max-width:var(--t_2boutons_carres);';
        t+='}';
        t+='#vv_nav_centre{';
        t+='   flex-grow: 1;';
        t+='   overflow-x: scroll;';
        t+='   justify-items: center;';
        t+='   display: flex;';
        t+='}';
        t+='#vv_nav_centre_defilement{';
        t+='   display:flex;';
        t+='   flex-grow:1;';
        t+='   justify-content:space-around;';
        /* fit content permet de ne pas avoir d'erreur sur la largeur de défilement sur certains appareils */
        t+='   width: fit-content;';
        t+='}';
        t+='#vv_nav_centre_defilement div{';
        t+='   min-width: fit-content;';
        t+='}';
        t+='#vv_nav_centre_defilement div>svg{';
        t+='   min-width: var(--h_ligne_bouton);';
        t+='}';
        t+='';
        t+='#vv_nav_droite{';
        t+='   display:flex;';
        t+='   min-width:var(--t_2boutons_carres);';
        t+='   max-width:var(--t_2boutons_carres);';
        t+='   justify-content:flex-end';
        t+='}';
        t+='#vv_les_messages{';
        t+='   position:fixed;';
        t+='   /*à priori sous le menu [ voir padding top du body plus bas ]  mais pourra être déplacé si le html crée un menu fixe en haut*/';
        t+='   top:var(--h_barre);';
        t+='   width:100%;';
        t+='   max-height:200px;';
        t+='   max-height:200px;';
        t+='   overflow-y:scroll;';
        t+='   box-shadow:0px 2px 5px #B0BEC5;';
        t+='   visibility:hidden;';
        t+='   max-width:var(--t_fenetre);';
        t+='   z-index:100;';
        t+='   overscroll-behavior: none;';
        t+='}';
        t+='#vv_les_messages>div{overflow-wrap: break-word;}';
        t+='';
        t+='#vv_bas_de_page{';
        t+='   display:flex;';
        t+='   position:fixed;';
        t+='   bottom:0;';
        t+='   width:100%;';
        t+='   z-index:1000;';
        t+='   background:#ECEFF1;';
        t+='   background-image:linear-gradient(to bottom, #B0BEC5, #607D8B);';
        t+='   justify-content:space-evenly;';
        t+='   height:var(--h_barre);';
        t+='   max-width:var(--t_fenetre);';
        t+='}';
        t+='';
        t+='';
        t+='';
        t+='html,textarea,div,pre{';
        t+='   scrollbar-width:thin;';
        t+='   scrollbar-color:#B0BEC5 #607D8B;';
        t+='   max-width:var(--t_fenetre);';
        t+='}';
        t+='p{text-align:justify;line-height:var(--h_ligne_paragraphe);}';
        t+='#vv_main{';
        t+='   width:auto;';
        t+='   margin:0 auto;';
        t+='}';
        t+='input[type="text"]{';
        t+='    font-size:var(--t_police);';
        t+='    line-height: var(--h_ligne_bouton);';
        t+='}';
        t+='.hug_bouton{';
        t+='    align-items: center;';
        t+='    background-image: linear-gradient(to bottom, #B0BEC5, #607D8B);';
        t+='    border-radius: 5px;';
        t+='    border-width: var(--t_border);';
        t+='    border-color: #DAE2E5;';
        t+='    border-style: outset;';
        t+='    color: #FFFFFF;';
        t+='    display: inline-flex;';
        t+='    font-size:var(--t_police);';
        t+='    justify-content: center;';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='    max-width: var(--t_fenetre);';
        t+='    min-width: var(--h_ligne_paragraphe);';
        t+='    min-height: var(--h_mini_but);';
        t+='    padding: var(--t_padding);';
        t+='    inline-size: max-content;';
        t+='    line-height: var(--h_ligne_bouton);';
        t+='    cursor: pointer;';
        t+='    outline: none;';
        t+='    touch-action: manipulation;';
        t+='    overflow-x: hidden;';
        t+='    overflow-y: hidden;';
        t+='    text-decoration: none;';
        t+='    text-align: center;';
        t+='    user-select: none;';
        t+='}';
        t+='.hug_bouton_inactif{';
        t+='    border-style: solid;';
        t+='    border-color: #B0BEC5;';
        t+='    background-image: linear-gradient(to bottom, #B0BEC5, #B0BEC5);';
        t+='    cursor: default;';
        t+='    border-radius: 5px;';
        t+='    border-width: var(--t_border);';
        t+='    color: #FFFFFF;';
        t+='    display: inline-flex;';
        t+='    font-size:var(--t_police);';
        t+='    justify-content: center;';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='    max-width: var(--t_fenetre);';
        t+='    min-width: var(--h_ligne_paragraphe);';
        t+='    min-height: var(--h_mini_but);';
        t+='    padding: var(--t_padding);';
        t+='    inline-size: max-content;';
        t+='    line-height: var(--h_ligne_bouton);';
        t+='    outline: none;';
        t+='    touch-action: manipulation;';
        t+='    overflow-x: hidden;';
        t+='    overflow-y: hidden;';
        t+='    text-decoration: none;';
        t+='    text-align: center;';
        t+='    user-select: none;';
        t+='}';
        t+='.hug_bouton:hover{box-shadow:0px 0px 5px red;}';
        t+='.hug_bouton:active,.hug_bouton_actif{border-width:var(--t_border);-border-color:#DAE2E5;border-style:inset;background: #909090;}';
        t+='.hug_bouton:focus{box-shadow:0px 0px 8px red;outline: none;}';
        t+='.hug_bouton_carre{';
        t+='    min-width:var(--t_boutons_carres);';
        t+='    max-width:var(--t_boutons_carres);';
        t+='    /* si on ne met pas ce "display:inline-block;" ci-dessous alors les boutons svg ne s\'affichent pas sur ipad et les vieux navigateurs */';
        t+='    display:inline-block;';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='}';
        t+='#nav .hug_bouton_carre{';
        t+='    overflow: hidden;';
        t+='}';
        t+='.yy_suivant_precedent_inactif{';
        t+='    display: inline-block;';
        t+='    min-width: var(--h_ligne_paragraphe);';
        t+='    text-align: center;';
        t+='    border-width: var(--t_border);';
        t+='    border-style: solid;';
        t+='    border-color: #E0E0F0;';
        t+='    padding: var(--t_padding);';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='    touch-action: none;';
        t+='    user-select: none;';
        t+='    line-height: var(--h_ligne_bouton);';
        t+='    color: #999999;';
        t+='}';
        t+='.yy_table_liste1 {';
        t+='    border-radius: 5px;';
        t+='    border: var(--t_border) #DAE2E5 outset;';
        t+='    margin: 0 auto;';
        t+='    min-width: 85%;';
        t+='    /* border-collapse: collapse; */';
        t+='    border-spacing: 1px 0px;';
        t+='}';
        t+='.yy_table_liste1>thead>tr {';
        t+='    background-color: #B0BEC5;';
        t+='    color: #263238;';
        t+='}';
        t+='.yy_table_liste1>tbody>tr:nth-child(2n) {';
        t+='    background-color: #CFD8DC;';
        t+='}';
        t+='.yy_table_liste1 thead th {';
        t+='    padding: 8px 3px;';
        t+='}';
        t+='.yy_navigation_liste {';
        t+='    display: flex;';
        t+='    flex-wrap: wrap;';
        t+='    justify-content: space-evenly;';
        t+='    align-items: baseline;';
        t+='}';
        t+='';
        t+='';
        t+='';
        t+='.groupe_de_boites{';
        t+='   display:flex;flex-wrap:wrap;justify-content:space-around; ';
        t+='}';
        t+='.groupe_de_boites>*{';
        t+=' margin:10px 1px  0px 1px;';
        t+='}';
        t+='/* boite 100x100 en ligne*/';
        t+='.boite_100_100_el{';
        t+=' display:inline-block;';
        t+=' height:100px;';
        t+=' width:100px;';
        t+=' overflow:hidden;';
        t+='}';
        t+='/* neutre */';
        t+='.yy__x_signaux_neutre{color:#FFFFFF;background-image: linear-gradient(to bottom, #B0BEC5, #607D8B);min-height: var(--h_mini_but);padding:var(--t_padding);}';
        t+='/*0 : erreur rouge */';
        t+='.yy__x_signaux_0,.yy__x_signaux___xer{color:#FFFF33;background:linear-gradient(to bottom, #FF3030, #C01010);min-height: var(--h_mini_but);padding:var(--t_padding);}';
        t+='/*1 : succes vert */';
        t+='.yy__x_signaux_1,.yy__x_signaux___xsu{color:#556B2F;background:linear-gradient(to bottom, #7FFF00, #5DBB00);min-height: var(--h_mini_but);padding:var(--t_padding);}';
        t+='/*2 : alarme orange*/';
        t+='.yy__x_signaux_2,.yy__x_signaux___xal{color:#000000;background:linear-gradient(to bottom, #FFBB00, #B77700);min-height: var(--h_mini_but);padding:var(--t_padding);}';
        t+='/*3 : info bleu*/';
        t+='.yy__x_signaux_3,.yy__x_signaux___xif{color:#ECEFF1;background:linear-gradient(to bottom, #2196FF, #0070AA);min-height: var(--h_mini_but);padding:var(--t_padding);}';
        t+='/*4 : déverminage rose*/';
        t+='.yy__x_signaux_4,.yy__x_signaux___xdv{color:#FFFFFF;background:linear-gradient(to bottom, #ff3a9e, #5a0d34);min-height: var(--h_mini_but);padding:var(--t_padding);}';
        t+='.yy_opaque_90{opacity:0.90;overflow-x: overlay;}';
        t+='.yy_invisible{visibility:hidden;}';
        t+='.bouge_element { animation: anim_bouge_element 0.20s; animation-iteration-count: 4;}';
        t+='@keyframes anim_bouge_element { 0% { transform: translateY(0)    } 25% { transform: translateY(15px) } 50% { transform: translateY(-15px)} 75% { transform: translateY(15px) } 100% { transform: translateY(0)  }}';
        t+='pre{text-align:left;font-family:monospace;}';
        t+='.yy_div_contenant_table,pre{overflow-x:scroll;}';
        t+='table{margin-left:auto;margin-right:auto;}';
        t+='.yy_filtre_liste1 input:not([value=""]){background:yellow;}';
        t+='.yy_filtre_liste1{display:flex;flex-wrap:wrap;justify-content:space-evenly;}';
        t+='.yy_filtre_liste1>div{';
        t+='   display:flex;';
        t+='   flex-direction:column;';
        t+='   flex-wrap:wrap;';
        t+='   margin-right:5px;';
        t+='}';
        t+='.yy_filtre_liste1 label{padding:3px;}';
        t+='.yy_bouton_loupe{';
        t+='    height: var(--h_bloupe);';
        t+='    margin-top:var(--h_ligne_bouton_moins);';
        t+='    font-size:1.3rem;';
        t+='}';
        t+='.yy_edition_champ1{';
        t+='    display: flex;';
        t+='    flex-direction: row;';
        t+='    flex-wrap: wrap;';
        t+='    align-items: stretch;';
        t+='    justify-content: flex-start;';
        t+='    margin-bottom: 8px;';
        t+='}';
        t+='.yy_edition_libelle1 {';
        t+='    border-bottom: var(--t_border) #DAE2E5 solid;';
        t+='    border-left: var(--t_border) #DAE2E5 solid;';
        t+='    border-top: var(--t_border) #DAE2E5 solid;';
        t+='    border-right: 0px #DAE2E5 solid;';
        t+='    flex-grow: 0;';
        t+='    flex-shrink: 0;';
        t+='    flex-basis: 150px;';
        t+='    max-width: 150px;';
        t+='    text-align: center;';
        t+='    font-weight: bold;';
        t+='    display: flex;';
        t+='    flex-direction: column;';
        t+='    align-items: stretch;';
        t+='}';
        t+='@media all and (max-width: 550px){';
        t+='   /*passe au dessus du champ à remplir quand l\'écran inférieur ou égal à 550px*/';
        t+='   .yy_edition_libelle1{';
        t+='      flex-grow:1;';
        t+='      flex-shrink:1;';
        t+='      flex-basis:100%;';
        t+='      max-width:100%;';
        t+='      border-bottom-style:none;';
        t+='      margin-top:8px;';
        t+='      border-right:1px #DAE2E5 solid;';
        t+='      min-height:30px;';
        t+='   }';
        t+='}';
        t+='.yy_edition_valeur1 {';
        t+='    border: var(--t_border) #DAE2E5 solid;';
        t+='    flex-grow: 1;';
        t+='    flex-shrink: 0;';
        t+='    flex-basis: 200px;';
        t+='    padding: 3px;';
        t+='    flex-direction: column;';
        t+='}';
        t+='.yy_conteneur_txtara{';
        t+='    min-width: calc(100% - var(--t_boutons_carres));';
        /*  */
        t+='    max-width: calc(100% - var(--t_boutons_carres));';
        /*  */
        t+='}';
        t+='textarea{';
        t+='    min-width: 100%;';
        t+='    max-width: 100%;';
        t+='    font-size:var(--t_police);';
        t+='    border-radius: 5px;';
        t+='    border-width: var(--t_border);';
        t+='    border-color: #DAE2E5;';
        t+='    border-style: inset;';
        t+='    background-color: #dddddd;';
        t+='    padding: var(--t_padding_de_input);';
        t+='    overflow: scroll;';
        t+='    white-space: pre;';
        t+='    /*hauteur_max_textarea*/';
        t+='    max-height: ' + hauteur_max_textarea + ';';
        t+='    min-height: 10vh;';
        t+='    overscroll-behavior: none;';
        t+='}';
        t+='.yytableauMatrice1{font-size:0.8rem;border-collapse:collapse;}';
        t+='.yytableauMatrice1 td,.yytableauMatrice1 th{border:1px red solid;}';
        t+='.yytableauMatrice1 td.yy_col_val{white-space: pre-wrap;vertical-align: baseline;max-width: 200px;overflow-wrap: break-word;}';
        t+='.yy_tableau_catacteres{font-size:0.8rem;}';
        t+='.yy_tableau_catacteres>tr>td,.yy_tableau_catacteres>tbody>tr>td{min-width:1.1rem;text-align:center;}';
        t+='.yy_td2{font-size:0.5rem;border:none;}';
        t+='.yy_td4{';
        t+='   font-size:0.5rem;';
        t+='   border:none;';
        t+='   color:red;';
        t+='   background:yellow;';
        t+='   font-weight:bold;';
        t+='}';
        t+='';
        t+='input[type="range"] {';
        t+='    appearance: none;';
        t+='    cursor: pointer;';
        t+='    color: #dddddd;';
        t+='    padding: initial;';
        t+='    border: 2px #DAE2E5 inset;';
        t+='    margin: 2px;';
        t+='}';
        t+='';
        t+='.yy_ouinon {';
        t+='    appearance: none; ';
        t+='    width: 44px;';
        t+='    height: 24px;';
        t+='    cursor: pointer;';
        t+='    overflow: hidden;';
        t+='    border-radius: 5px;';
        t+='    border: 2px inset white;';
        t+='    background: red;';
        t+='    transform: translate(0px, 6px);';
        t+='}';
        if(navigator.userAgent.toLowerCase().indexOf( 'firefox' ) >= 0){
            t+='.yy_ouinon::-moz-range-thumb {';
            t+='    height: 18px;';
            t+='    width: 18px;';
        }else{
            t+='.yy_ouinon::-webkit-slider-thumb {';
            t+='    height: 22px;';
            t+='    width: 22px;';
        }
        t+='    appearance: none; ';
        t+='    background-color: #607D8B;';
        t+='    border-radius: 3px;';
        t+='    border: 2px outset white;';
        t+='    box-shadow: -30rem 0 0 30rem #12ed12;';
        t+='}';
        /*  */
        t+='#vv_sous_fenetre1 {';
        t+='    min-width: 80vw;';
        t+='    max-width: 90vw;';
        t+='    min-height: 80vh;';
        t+='    border: var(--t_border) #607D8B solid;';
        t+='    border-radius: 9px;';
        t+='    box-shadow: #000 0px 0px 5px;';
        t+='    background: linear-gradient(to bottom, #ECEFF1 0%, #DBDEE0 100%);';
        t+='    opacity: 0.85;';
        t+='}';
        t+='.vv_iframe_sous_fenetre1{';
        t+='    width: 100%;';
        t+='    min-height: 75vh;';
        t+='    border: 0;';
        t+='}';
        /*  */
        t+='dialog::backdrop {';
        t+='    background-color: rgba(0, 0, 0, 0.5);';
        t+='}';
        /*
          =====================================================================================================
          c'est ici qu'on met à jour le css
          =====================================================================================================
        */
        vv_style.innerText=t;
        localStorage.setItem( __X_CLE_APPLICATION + '_sl0' , JSON.stringify( this.#stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    modifier_un_parametre_css1( mat , evt ){
        if(this.#stockage_local === null){
            this.#initialiser_stockage_local();
        }
        let nom_du_parametre='';
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i++ ){
            if(mat[i][2] === 'f' && 'modifier_un_parametre_css1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_parametre=mat[i + 1][1];
            }
        }
        if(nom_du_parametre !== '' && this.#stockage_local.modif_util.hasOwnProperty( nom_du_parametre )){
            /* console.log(mat); */
            /* console.log(evt.target.value); */
            let elt=this.#stockage_local.modif_util[nom_du_parametre];
            this.#stockage_local.modif_util[nom_du_parametre].val=evt.target.value;
            document.getElementById( nom_du_parametre + '_' + elt.libelle1 ).innerHTML=evt.target.value;
            document.getElementById( nom_du_parametre + '_' + elt.libelle2 ).innerHTML=evt.target.value;
        }
        localStorage.setItem( __X_CLE_APPLICATION + '_sl0' , JSON.stringify( this.#stockage_local ) );
        this.#css1();
    }
}
__gi1=new _c_interface1( '__gi1' );
/* export {c_rev1 as c_rev1}; */