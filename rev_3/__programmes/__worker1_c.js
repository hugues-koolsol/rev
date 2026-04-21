"use strict";
let ce__worker1=null;
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xac='__xac';
const __xva='__xva';
const __xst='__xst';
const __xsi='__xsi';
import {__rev1} from './f0?n0=__rev1_.js';
/*
  =====================================================================================================================
  __m__worker11
*/
class __worker1{
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
    __deverminage=0;
    ma_connexion_socket=null;
    /*
      =============================================================================================================
    */
    constructor(){
        this.__rev1=new __rev1( null );
        /*
          console.log( 'constructor de __worker' );
        */
    }
    /*
      =============================================================================================================
    */
    async action_quand_message_recu_du_js_principal( le_message ){
        this.__deverminage=le_message.data.__xva.__parametres.__deverminage.valeur;
        if(this.__deverminage === 2){
            console.log( 'le_message.data=' , le_message.data );
        }
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
                    "__xme" : '<b>Le serveur ne peut être appelé.</b><br />Il manque la propriété "__xac"<br /> les propriétés trouvées sont ' + prop_trouvees + '' ,
                    "__xva" : le_message.data
                } );
            return;
        }
        let obj1=this.__rev1.rev_tcm( le_message.data.__xac );
        if(obj1.__xst === __xsu){
            mat=obj1.__xva;
        }else{
            postMessage( {"__xst" : __xer ,"__xme" : obj1.__xme ,"__xva" : le_message.data} );
            return;
        }
        obj['mat']=mat;
        /* console.log('%cDANS __worker','color:red;background:yellow;','cmat=',mat,'obj.__xac=',obj.__xac); */
        let initialisation=false;
        if(obj.__xac === 'pm1(m1(n1(__ig1),f1(retablir_la_connexion_au_ws())))'){
            initialisation=true;
            try{
                this.ma_connexion_socket=new WebSocket( "ws://" + obj.__xva.__le_serveur + ":" + obj.__xva.__le_port );
            }catch(e){
                let le_json={"__xst" : __xer ,"__xme" : e.stack};
                postMessage( json );
            }
            this.ma_connexion_socket.addEventListener( "open" , () => {
                    this.ma_connexion_socket.send( JSON.stringify( obj ) );} );
            this.ma_connexion_socket.addEventListener( "close" , () => {
                    this.ma_connexion_socket=null;
                    let le_json_ferme={
                        "__xst" : __xsu ,
                        "__xac" : 'm1(n1(__ig1),f1(connexion_au_websocket_fermee()))' ,
                        "__xva" : {"chi_id_acces" : 0 ,"chi_id_projet" : 0 ,"chi_id_utilisateur" : 0}
                    };
                    postMessage( le_json_ferme );} );
            this.ma_connexion_socket.addEventListener( "message" , ( evenement ) => {
                    let le_json=null;
                    try{
                        if(this.__deverminage >= 2){
                            console.log( 'serveur ->worker1 ' , evenement.data.substr( 0 , 500 ) );
                        }
                        le_json=JSON.parse( evenement.data );
                        postMessage( le_json );
                    }catch(e){
                        console.log( '%ce=' + e.stack , 'background:yellow;' );
                        let le_retour_ko={"__xst" : __xer ,"__xme" : e.stack};
                        postMessage( le_retour_ko );
                    }} );
        }else if(obj.__xac === 'pm1(m1(n1(__ig1),f1(init0())))'){
            initialisation=true;
            try{
                this.ma_connexion_socket=new WebSocket( "ws://" + obj.__xva.__le_serveur + ":" + obj.__xva.__le_port );
            }catch(e){
                let le_json={"__xst" : __xer ,"__xme" : e.stack};
                postMessage( json );
            }
            this.ma_connexion_socket.addEventListener( "open" , () => {
                    this.ma_connexion_socket.send( JSON.stringify( obj ) );} );
            this.ma_connexion_socket.addEventListener( "close" , () => {
                    this.ma_connexion_socket=null;
                    let le_json_ferme={
                        "__xst" : __xsu ,
                        "__xac" : 'm1(n1(__ig1),f1(connexion_au_websocket_fermee()))' ,
                        "__xva" : {"chi_id_acces" : 0 ,"chi_id_projet" : 0 ,"chi_id_utilisateur" : 0}
                    };
                    postMessage( le_json_ferme );} );
            this.ma_connexion_socket.addEventListener( "message" , ( evenement ) => {
                    let le_json=null;
                    try{
                        if(this.__deverminage >= 2){
                            console.log( 'serveur ->worker0 ' , evenement.data.substr( 0 , 500 ) );
                        }
                        le_json=JSON.parse( evenement.data );
                        postMessage( le_json );
                    }catch(e){
                        console.log( '%ce=' + e.stack , 'background:yellow;' );
                        let le_retour_ko={"__xst" : __xer ,"__xme" : e.stack};
                        postMessage( le_retour_ko );
                    }} );
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
        if(initialisation === false){
            if(this.__deverminage === 2){
                console.log( 'dans worker on envoie obj=' , obj );
            }
            this.ma_connexion_socket.send( JSON.stringify( obj ) );
        }
        return;
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