"use strict";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
let ce__worker1=null;
const __version='__j_20251222_000001_';
import {__rev1} from "../__j_20251222_000001_/__rev1.js";
/*
  =====================================================================================================================
  __m__worker11
*/
class __worker1{
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
    __rev1=null;
    #objet_envoye_au_serveur=null;
    #utiliser_les_sockets=0;
    /*
      =============================================================================================================
      function constructor 
      =============================================================================================================
    */
    constructor( nom_de_la_variable ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__rev1=new __rev1( '__rev1' );
        /* console.log('OK dans worker'); */
        /* a=1; // erreur volontaire provoquée */
    }
    /*
      =============================================================================================================
    */
    #traite_reponse_http( reponse ){
        let obj={"__xst" : reponse.__xst ,"__xac" : '' ,"__xme" : '' ,"__xva" : {} ,"__xsi" : {}};
        if(reponse.hasOwnProperty( '__xva' )){
            obj['__xva']=reponse.__xva;
        }
        if(reponse.hasOwnProperty( '__xme' )){
            obj['__xme']=reponse.__xme;
        }
        if(reponse.hasOwnProperty( '__xac' )){
            obj['__xac']=reponse.__xac;
        }
        if(reponse.hasOwnProperty( '__xsi' )){
            obj['__xsi']=reponse.__xsi;
        }
        postMessage( obj );
    }
    /*
      =============================================================================================================
    */
    #envoie_requete_au_serveur( obj ){
        let page_destination='__client_app.php';
        let that=this;
        let r=new XMLHttpRequest();
        r.open( "POST" , (this.#url_du_site + page_destination) + "?__obj" , true );
        r.onreadystatechange=function(){
            if(r.readyState != 4 || r.status != 200){
                if(r.status === 404 && r.readyState === 2){
                    postMessage( {"__xst" : __xer ,"__xme" : 'page ' + page_destination + ' non trouvée'} );
                }
                if(r.status >= 500 && r.readyState === 2){
                    postMessage( {"__xst" : __xer ,"__xme" : 'erreur ' + r.status + ', voir les logs réseau '} );
                }
                return;
            }
            try{
                let reponse=JSON.parse( r.responseText );
                if(reponse.__xst === __xer){
                    let trouve=false;
                    for(let i in reponse.__xsi[__xer]){
                        trouve=true;
                    }
                    for(let i in reponse.__xsi[__xal]){
                        trouve=true;
                    }
                    if(trouve === false){
                        reponse.__xsi[__xer]={0 : 'Le message reçu du serveur est en erreur'};
                    }
                }
                postMessage( reponse );
                /* that.#traite_reponse_http( reponse ); */
            }catch(e){
                /* console.error( 'e=' , r.responseText ); */
                let texte=r.responseText.replace( /background\-color\: #cc0000;/g , '' );
                texte=texte.replace( /bgcolor='#f57900'/g , '' );
                texte=texte.replace( /color: #fce94f;/g , '' );
                texte=texte.replace( /\( ! \)/g , '' );
                texte=texte.replace( /<font size='1'>/g , '<div class="yy__0">' );
                texte=texte.replace( /<\/font>/g , '' );
                texte=texte.replace( /border='1'/g , '' );
                texte=texte.replace( /class='xdebug-error xe-warning'/g , '' );
                texte=texte.replace( /font-size: x-large;/g , '' );
                texte=texte.replace( /#e9b96e/g , '' );
                texte=texte.replace( /#eeeeec/g , '' );
                texte=texte.replace( /#00bb00/g , '' );
                /* console.error( 'texte=' , texte ); */
                /* postMessage( {"__xst" : __xer ,"__xsi" : {"__xer" : [texte]} ,"__xva" : that.#objet_envoye_au_serveur} ); */
                postMessage( {"__xac" : 'action(affiche_erreur())' ,"__xst" : __xer ,"__xme" : texte ,"__xva" : {}} );
                return;
            }
        };
        function transferFailed( evt ){
            debugger;
            let reponse={"__xst" : __xer ,"__xsi" : {"__xer" : {0 : 'Une erreur est survenue lors du l\'appel ajax.'}}};
            /* debugger */
            that.#traite_reponse_http( reponse );
        }
        r.addEventListener( "error" , transferFailed );
        r.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded;charset=utf-8" );
        /*
          let obj={
          mat : mat   ,
          __xac : data.__xac ,
          __xva : data.__xva ,
          mat_hash : mat_hash ,
          };
        */
        try{
            r.send( '__obj=' + encodeURIComponent( JSON.stringify( obj ) ) );
        }catch(e){
            debugger;
        }
    }
    /*
      =============================================================================================================
    */
    action_quand_message_recu_du_js_principal( le_message ){
        /*
          "__xmo" : '__interface1' ,
          "__xac" : 'init0()' ,
          "__xva" : {
          "__href" : decodeURIComponent( window.location.href ) ,
          "__hash" : decodeURIComponent( window.location.hash ) ,
          "__parametres" : this.stockage_local['parametres'] ,
          }
          
        */
        let obj=le_message.data;
        let mat=null;
        let mat_hash=[];
        if(!le_message.data.hasOwnProperty( '__xac' )){
            let prop_trouvees='';
            for(let i in le_message.data){
                prop_trouvees+=i + ',';
            }
            postMessage( {
                    "__xst" : __xer ,
                    "__xme" : '<b>Le serveur ne peut être appelé</b><br />Il manque la propriété "__xac"<br /> les propriétés trouvées sont ' + prop_trouvees + '' ,
                    "__xva" : le_message.data
                } );
            return;
        }
        let obj1=this.__rev1.rev_tcm( le_message.data.__xac );
        if(obj1.__xst === __xsu){
            mat=obj1.__xva;
        }else{
            postMessage( {"__xst" : __xer ,"__xme" : obj1.__xme ,"__xva" : le_message.data} );
        }
        obj['mat']=mat;
        /* debugger */
        if(obj.__xac === 'pm1(m1(n1(__interface1),f1(init0())))'){
            /* mat.length===2 && mat[1][1]==='__interface1.init0' */
            let url=le_message.data.__xva.__href;
            if(url.indexOf( '#' ) > 0){
                url=url.substr( 0 , url.indexOf( '#' ) );
            }
            this.#url_du_site=url.substr( 0 , url.lastIndexOf( '/' ) + 1 );
            let hash=le_message.data.__xva.__hash;
            if(hash.indexOf( '#' ) >= 0){
                hash=hash.substr( 1 );
            }
            if(hash !== ''){
                let obj2=this.__rev1.rev_tcm( hash );
                if(obj2.__xst === __xsu){
                    mat_hash=obj2.__xva;
                }
            }
        }
        obj['mat_hash']=mat_hash;
        console.log( 'dans worker on envoie obj=' , obj );
        this.#envoie_requete_au_serveur( obj );
        return;
        /*
          let mat=null;
          let mat_hash=[];
          let obj1=this.__rev1.rev_tcm( le_message.data.__xac );
          if(obj1.__xst === __xsu){
          mat=obj1.__xva;
          }else{
          postMessage( {__xst:__xer , __xme : obj1.__xme , __xva : le_message.data } );         
          }
          let l01=mat.length;
          // action(init0()),provenance(__interface1.#init0())
          for(let i=1;i<l01;i=mat[i][12]){
          if(mat[i][1]==='__interface1.init0' && mat[i][2]==='f' && mat[i][8]===0 ){ 
          // c'est l'initialisation , le href existe 
          
          let url=le_message.data.__xva.__href;
          if(url.indexOf( '#' ) > 0){
          url=url.substr( 0 , url.indexOf( '#' ) );
          }
          this.#url_du_site=url.substr( 0 , url.lastIndexOf( '/' ) + 1 );
          
          let hash=le_message.data.__xva.__hash;
          if(hash.indexOf( '#' ) >= 0){
          hash=hash.substr( 1 );
          }
          if(hash!==''){
          
          let obj2=this.__rev1.rev_tcm( hash );
          if(obj2.__xst === __xsu){
          mat_hash=obj2.__xva;
          }
          }
          }
          }
          let obj=this.#envoie_requete_au_serveur( mat , le_message.data , le_message.data.__xac , mat_hash);
        */
    }
    /*
      =============================================================================================================
    */
}
ce__worker1=new __worker1( 'ce__worker1' );
onmessage=function( message_recu ){
    ce__worker1.action_quand_message_recu_du_js_principal( message_recu );
};
onerror=function( e ){
    console.error( 'erreur dans le worker e=' , e );
};