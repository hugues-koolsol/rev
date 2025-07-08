"use strict";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
let ce_worker=null;
import {c_rev1} from "../_js/c_rev1.js";
/*
  =====================================================================================================================
  __m_worker1
*/
class c_worker{
    #nom_de_la_variable='';
    #url_du_site='../';
    #la_chausette_web=null;
    #adresse_du_websocket='';
    #le_ws_est_actif=__xer;
    #port_webso='9998';
    #debut_timer0=performance.now();
    #debut_timer1=performance.now();
    le_niveau_de_deverminage=0;
    /* objet des fonctions de traitement des revs */
    __m_rev1=null;
    #objet_envoye_au_serveur=null;
    #utiliser_les_sockets=0;
    /* this.__mrev1=new c_rev1( "__mrev1" ); */
    /*
      =============================================================================================================
      function constructor 
      =============================================================================================================
    */
    constructor( nom_de_la_variable ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__m_rev1=new c_rev1( '__m_rev1' );
        /* console.log('worker démarré avec nom_de_la_variable='+this.#nom_de_la_variable) */
        this.#envoyer_un_message_au_js_principal( {"__xst" : __xsu ,"__x_action" : 'le_worker_est_démarré()'} );
        (async () => {
                /* on importe un module pour les effets de bord */
                await import( "./c_fonctions_js1.js" );
                /* console.log('ici'); */
            })();
    }
    /*
      =============================================================================================================
    */
    #ws_fermeture( evenement_ws ){
        this.#le_ws_est_actif=__xer;
        if(this.le_niveau_de_deverminage >= 2){
            console.log( "%c#ws_fermeture" , 'background:lightblue;' , JSON.stringify( evenement_ws ) );
        }
        this.#envoyer_un_message_au_js_principal( {
                "__xst" : __xsu ,
                "__x_action" : 'le_websocket_est_arrêté()' ,
                "__xva" : {"maj" : "maj_interface1(desactiver(id(vv_etat_chausette),pendant(5000)))"}
            } );
    }
    /*
      =============================================================================================================
    */
    #ws_onmessage( evenement_ws ){
        console.log( "%c 37 #ws_onmessage" , 'background:lightblue;' , JSON.stringify( evenement_ws ) );
    }
    /*
      =============================================================================================================
    */
    #ws_ouverture( evenement_ws ){
        if(this.le_niveau_de_deverminage >= 2){
            console.log( "%c#ws_ouverturedata" , 'background:lightblue;' , JSON.stringify( evenement_ws ) );
        }
        if(evenement_ws.hasOwnProperty( 'isTrusted' ) && evenement_ws.isTrusted === true){
            this.#le_ws_est_actif=__xsu;
            setTimeout( () => {
                    this.#envoyer_message_a_la_chausette( {"__x_action" : 'socket1.recuperer_l_etat()'} );} , 50 );
            if(this.le_niveau_de_deverminage >= 2){
                console.log( "%c this.#le_ws_est_actif=__xsu;" , 'background:lightblue;' );
            }
        }
    }
    /*
      =============================================================================================================
    */
    #ws_erreur( evenement_ws ){
        if(evenement_ws.target.readyState === 3){
            if(this.le_niveau_de_deverminage >= 2){
                console.log( "%c#ws_erreur la connexion est fermée" , 'background:lightblue;' , JSON.stringify( evenement_ws ) );
            }
        }else{
            console.log( "%c#ws_erreur autre erreur" , 'background:lightblue;' , JSON.stringify( evenement_ws ) );
        }
    }
    /*
      =============================================================================================================
    */
    #initialise_websocket(){
        /*
          console.log( 'this.#url_du_site=' , this.#url_du_site ); 
        */
        if(this.#url_du_site.indexOf( 'http://localhost/' ) !== 0 || this.#utiliser_les_sockets === 0){
            /*
              pour l'instant on ne se connecte qu'avec localhost
            */
            return;
        }
        /*
          if(this.#la_chausette_web !== null){
          console.log( 'this.#la_chausette_web est null' );
          return;
          }
        */
        if(this.#url_du_site.indexOf( '/' ) > 0){
            let url_sans_protocole=this.#url_du_site.substr( this.#url_du_site.indexOf( '/' ) + 2 );
            if(url_sans_protocole.indexOf( '/' ) > 0){
                this.#adresse_du_websocket='ws:' + url_sans_protocole.substr( 0 , url_sans_protocole.indexOf( '/' ) ) + ':' + this.#port_webso + '/essai_de_websocket_sur_www.example.com';
                if(this.le_niveau_de_deverminage >= 2){
                    console.log( 'this.#adresse_du_websocket=' + this.#adresse_du_websocket );
                }
                /*
                  ws:localhost:9998
                */
                try{
                    /* on doit passer par une promesse pour capturer le message d'erreur éventuel */
                    new Promise( ( resolve , reject ) => {
                            this.#la_chausette_web=new WebSocket( this.#adresse_du_websocket );
                            this.#la_chausette_web.onerror=this.#ws_erreur.bind( this );
                            this.#la_chausette_web.onopen=this.#ws_ouverture.bind( this );
                            this.#la_chausette_web.onclose=this.#ws_fermeture.bind( this );
                            this.#la_chausette_web.addEventListener( 'message' , ( { data } ) => {
                                    this.#message_reçu_du_websocket( data );} );} ).catch( function( err ){
                            console.log( "Catch handler sees: " , err );
                        } );
                }catch(e){
                    console.error( 'erreur de connexion ' , e );
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #envoyer_message_a_la_chausette( message_json ){
        if(this.le_niveau_de_deverminage >= 2){
            console.log( '%c=========== on envoie un message au socket' , 'background:navy;color:white;' );
            console.log( message_json );
        }
        this.#debut_timer1=performance.now();
        this.#la_chausette_web.send( JSON.stringify( message_json ) );
    }
    /*
      =============================================================================================================
    */
    #traite_fonction_recue_du_js_principal( le_json_reçu_du_js_principale ){
        if(this.le_niveau_de_deverminage >= 2){
            console.log( 'dans #traite_fonction_recue_du_js_principal, le_json_reçu_du_js_principale' , 'background:red;' , le_json_reçu_du_js_principale );
        }
        let obj=this.__m_rev1.rev_tcm( le_json_reçu_du_js_principale.__x_action );
        if(obj.__xst === __xsu && obj.__xva.length > 1){
            let l01=obj.__xva.length;
            if(this.le_niveau_de_deverminage >= 1){
                console.log( 'traitement de la matrice avec fonction ' , obj.__xva[1][1] );
            }
            for( let j=1 ; j < l01 ; j=obj.__xva[j][12] ){
                if(obj.__xva[j][1] === 'le_worker_est_démarré' && obj.__xva[j][2] === 'f'){
                    /*
                      Pourquoi reçoit-on ce message ????
                    */
                }else if(obj.__xva[j][1] === 'initialisation_du_worker' && obj.__xva[j][2] === 'f'){
                    /*
                      =============================================================================
                    */
                    this.le_niveau_de_deverminage=le_json_reçu_du_js_principale.__xva.le_niveau_de_deverminage;
                    let url=le_json_reçu_du_js_principale.__xva.href;
                    if(url.indexOf( '#' ) > 0){
                        url=url.substr( 0 , url.indexOf( '#' ) );
                    }
                    this.#url_du_site=url.substr( 0 , url.lastIndexOf( '/' ) + 1 );
                    if(le_json_reçu_du_js_principale.__xva.utiliser_les_sockets === 1){
                        this.#utiliser_les_sockets=1;
                        this.#initialise_websocket();
                    }
                    /*
                      =============================================================================
                    */
                }else if(obj.__xva[j][1] === 'maj_deverminage' && obj.__xva[j][2] === 'f' && obj.__xva[j][8] === 1){
                    /*
                      =============================================================================
                    */
                    if(obj.__xva[j + 1][1] >= 0 && obj.__xva[j + 1][1] <= 2){
                        this.le_niveau_de_deverminage=obj.__xva[j + 1][1];
                        let str='%cDans le worker , déverminage changé=' + this.le_niveau_de_deverminage;
                        console.log( str , 'background:orange;' );
                        if(this.#le_ws_est_actif === __xsu){
                            this.#envoyer_message_a_la_chausette( {"__x_action" : 'maj_deverminage(' + this.le_niveau_de_deverminage + ')'} );
                        }
                        break;
                    }
                    /*
                      =============================================================================
                    */
                }else if(obj.__xva[j][1] === 'maj_utiliser_les_sockets' && obj.__xva[j][2] === 'f' && obj.__xva[j][8] === 1){
                    /*
                      =============================================================================
                    */
                    if(obj.__xva[j + 1][1] >= 0 && obj.__xva[j + 1][1] <= 2){
                        this.#utiliser_les_sockets=obj.__xva[j + 1][1];
                        break;
                    }
                    /*
                      =============================================================================
                    */
                }else if(obj.__xva[j][1].substr( 0 , 8 ) === 'socket1.' && obj.__xva[j][2] === 'f'){
                    /*
                      =============================================================================
                    */
                    if(this.le_niveau_de_deverminage >= 1){
                        console.log( 'dans #traite_fonction_recue_du_js_principal' , le_json_reçu_du_js_principale );
                    }
                    if(this.#le_ws_est_actif === __xsu){
                        if(this.le_niveau_de_deverminage >= 2){
                            console.log( '😊 on peut passer par le ws ' , this.#la_chausette_web );
                        }
                        /* console.log('aEnvoyer=',aEnvoyer, typeof aEnvoyer); */
                        this.#envoyer_message_a_la_chausette( {"__x_action" : le_json_reçu_du_js_principale.__x_action} );
                    }
                    /*
                      =============================================================================
                    */
                }
            }
        }else{
            debugger;
        }
    }
    /*
      =============================================================================================================
    */
    action_quand_message_recu_du_js_principal( le_message ){
        if(this.le_niveau_de_deverminage >= 2){
            console.log( '%cdans action_quand_message_recu_du_js_principal, le_message' , 'background:green;color:white;' , le_message.data );
        }
        let mat=null;
        let obj1=this.__m_rev1.rev_tcm( le_message.data.__x_action );
        if(obj1.__xst === __xsu){
            mat=obj1.__xva;
        }else{
            debugger;
        }
        /* debugger */
        let maj_utiliser_les_sockets=false;
        let initialisation_du_worker=false;
        let le_worker_est_démarré=false;
        let maj_deverminage=false;
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'initialisation_du_worker' && mat[i][2] === 'f'){
                initialisation_du_worker=true;
            }else if(mat[i][1] === 'le_worker_est_démarré' && mat[i][2] === 'f'){
                le_worker_est_démarré=true;
            }else if(mat[i][1] === 'maj_deverminage' && mat[i][2] === 'f'){
                maj_deverminage=true;
            }else if(mat[i][1] === 'maj_utiliser_les_sockets' && mat[i][2] === 'f'){
                maj_utiliser_les_sockets=true;
            }
        }
        if(initialisation_du_worker === true
               || le_worker_est_démarré === true
               || maj_deverminage === true
               || maj_utiliser_les_sockets === true
        ){
            this.#traite_fonction_recue_du_js_principal( le_message.data );
        }else if(le_message.data.__x_action.substr( 0 , 10 ) === 'c_worker1.'){
            if('c_worker1.connecter_la_chausette()' === le_message.data.__x_action){
                if(this.#le_ws_est_actif !== __xsu){
                    this.#initialise_websocket();
                }
            }
        }else if(le_message.data.__x_action.substr( 0 , 8 ) === 'socket1.'){
            this.#traite_fonction_recue_du_js_principal( le_message.data );
        }else{
            this.#envoie_requete_au_serveur( le_message.data );
        }
    }
    /*
      =============================================================================================================
    */
    #envoyer_un_message_au_js_principal( le_message ){
        le_message['__xso']=this.#le_ws_est_actif;
        if(this.le_niveau_de_deverminage > 0){
            console.log( '%c message envoyé au js_principal ' , 'background:green;color:white;' , le_message );
        }
        postMessage( le_message );
        if(le_message.hasOwnProperty( '__x_action' )
               && le_message.__x_action.indexOf( 'c_connexion1.formulaire1(conteneur1(vv_formulaire_de_connexion))' ) >= 0
               && le_message.__x_authentifie === __xsu
        ){
            let le_message_cookie={"__xst" : 1 ,"__x_action" : "obtenir_le_cookie_de_session_php()"};
            postMessage( le_message_cookie );
        }
    }
    /*
      =============================================================================================================
    */
    #traite_reponse_http( reponse ){
        if(reponse.__x_action === "c_connexion1.se_deconnecter()" && this.#le_ws_est_actif === __xsu && reponse.__xst === __xsu){
            this.#envoyer_message_a_la_chausette( {"__x_action" : reponse.__x_action} );
        }
        this.#envoyer_un_message_au_js_principal( reponse );
    }
    /*
      =============================================================================================================
    */
    #message_reçu_du_websocket( data ){
        let message_reçu_du_websocket=null;
        var endMicro=performance.now();
        var temps=parseInt( (endMicro - this.#debut_timer1) * 1000 , 10 ) / 1000;
        if(this.le_niveau_de_deverminage >= 2){
            console.log( 'temps passé dans ws  : ' , temps );
        }
        try{
            message_reçu_du_websocket=JSON.parse( data );
        }catch(e){
            this.#envoyer_un_message_au_js_principal( {"__xst" : __xer ,"__x_action" : '' ,"__xva" : payload.__xva} );
        }
        if(this.le_niveau_de_deverminage >= 1){
            console.log( "%c message reçu du socket " , 'background:navy;color:white;' , message_reçu_du_websocket );
        }
        if(message_reçu_du_websocket.__xst === __xsu
               && message_reçu_du_websocket.__x_action === 'etablissement_de_la_connexion_au_socket1()'
        ){
            this.#envoyer_un_message_au_js_principal( message_reçu_du_websocket );
            message_reçu_du_websocket.__x_signaux.__xif.push( JSON.stringify( message_reçu_du_websocket.__x_etat_client ) );
            if(message_reçu_du_websocket.__x_etat_client.session_php === ''){
                this.#envoyer_un_message_au_js_principal( {"__xst" : __xsu ,"__x_action" : 'obtenir_le_cookie_de_session_php()'} );
            }
        }else{
            this.#envoyer_un_message_au_js_principal( message_reçu_du_websocket );
        }
    }
    /*
      =============================================================================================================
    */
    #envoie_requete_au_serveur( obj ){
        this.#objet_envoye_au_serveur=obj;
        if(this.#le_ws_est_actif === __xsu){
            if(this.le_niveau_de_deverminage >= 2){
                console.log( '😊 on peut passer par le ws ' , this.#la_chausette_web );
            }
            /* this.#envoyer_message_a_la_chausette({"__x_action":"echo()","__xva":{"contenu":"hello"}}); */
        }else{
            if(obj.hasOwnProperty( '__x_action' ) && obj.__x_action === 'recuperation_de_la_premiere_page()'){
                /* si on est en train de récupérer la première page, on ne tente pas d'initialiser de socket */
            }else{
                if(this.le_niveau_de_deverminage >= 2){
                    console.log( '%c:-/ on ne peut pas passer par le ws ' , 'background:lightblue;' );
                }
            }
        }
        let that=this;
        let r=new XMLHttpRequest();
        r.open( "POST" , this.#url_du_site + "__app.php?__obj" , true );
        r.onreadystatechange=function(){
            if(r.readyState != 4 || r.status != 200){
                return;
            }
            try{
                let reponse=JSON.parse( r.responseText );
                if(that.le_niveau_de_deverminage >= 2){
                    console.log( '%c retour appel ajax reponse=' , 'background:lightgreen;' , reponse );
                }
                if(reponse.__xst === __xer){
                    let trouve=false;
                    for(let i in reponse.__x_signaux[__xer]){
                        trouve=true;
                    }
                    for(let i in reponse.__x_signaux[__xal]){
                        trouve=true;
                    }
                    if(trouve === false){
                        if(that.le_niveau_de_deverminage >= 1){
                            reponse.__x_signaux[__xer]={0 : 'Le message reçu du serveur est en erreur pour l\'action ' + reponse.__x_action};
                        }else{
                            reponse.__x_signaux[__xer]={0 : 'Le message reçu du serveur est en erreur '};
                        }
                    }
                }
                that.#traite_reponse_http( reponse );
            }catch(e){
                /* console.error( 'e=' , r.responseText ); */
                let texte=r.responseText.replace( /background\-color\: #cc0000;/g , '' );
                texte=texte.replace( /bgcolor='#f57900'/g , '' );
                texte=texte.replace( /color: #fce94f;/g , '' );
                texte=texte.replace( /\( ! \)/g , '' );
                texte=texte.replace( /<font size='1'>/g , '<div class="yy__x_signaux_0">' );
                texte=texte.replace( /<\/font>/g , '' );
                texte=texte.replace( /border='1'/g , '' );
                /* console.error( 'texte=' , texte ); */
                let reponse_erreur={"__xst" : __xer ,"__x_signaux" : {"__xer" : [texte]} ,"__xva" : that.#objet_envoye_au_serveur};
                that.#envoyer_un_message_au_js_principal( reponse_erreur );
                return;
            }
        };
        if(this.le_niveau_de_deverminage >= 2){
            console.log( '%c appel ajax objet envoye au serveur : obj=' , 'background:lightgreen;' , obj );
        }
        function transferFailed( evt ){
            let reponse={"__xst" : __xer ,"__x_signaux" : {"__xer" : {0 : 'Une erreur est survenue lors du l\'appel ajax.'}}};
            /* debugger */
            that.#traite_reponse_http( reponse );
        }
        r.addEventListener( "error" , transferFailed );
        r.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded;charset=utf-8" );
        /* console.log( '#envoie_requete_au_serveur' , obj ); */
        try{
            r.send( '__obj=' + encodeURIComponent( JSON.stringify( obj ) ) );
        }catch(e){
            debugger;
        }
    }
}
ce_worker=new c_worker( 'ce_worker' );
onmessage=function( message_recu ){
    ce_worker.action_quand_message_recu_du_js_principal( message_recu );
};
onerror=function( e ){
    console.error( 'erreur dans le worker e=' , e );
};