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
    __deverminage=0;
    /*
      =============================================================================================================
    */
    constructor( nom_de_la_variable ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__rev1=new __rev1( null );
        /*
          console.log( 'constructor de __worker' );
        */
    }
    /*
      =============================================================================================================
    */
    async action_quand_message_recu_du_js_principal( le_message ){
        this.__deverminage=this.__deverminage=le_message.data.__xva.__parametres.__deverminage.valeur;
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
        if(obj.__xac === 'pm1(m1(n1(__gi1),f1(init0())))'){
            /* console.log( '%cDANS __worker' , 'color:red;background:yellow;' ); */
            /* mat.length===2 && mat[1][1]==='__gi1.init0' */
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
        if(this.__deverminage === 2){
            console.log( 'dans worker on envoie obj=' , obj );
        }
        const csrfToken=le_message.data.__xva.csrfToken;
        obj.csrfToken=csrfToken;
        /* console.log( 'csrfToken=' , csrfToken ); */
        const method="POST";
        const options={ method  ,"headers" : {"X-CSRF-Token" : csrfToken || ""} ,"credentials" : "include"};
        if(method !== "GET" && obj !== undefined){
            options.headers["Content-Type"]="application/json";
            options.body=JSON.stringify( obj );
        }
        /* console.log( 'options=' , options ); */
        let res=null;
        try{
            res=await fetch( this.#url_du_site , options );
        }catch(e0){
            postMessage( {"__xac" : 'action(affiche_erreur())' ,"__xst" : __xer ,"__xva" : {} ,"__xsi" : {0 : ['Le serveur est arrété']}} );
            return;
        }
        /* console.log( 'res=' , res ); */
        const text=await res.text();
        let json;
        try{
            json=JSON.parse( text );
            if(this.__deverminage === 2){
                console.log( 'au retour dans le worker, json=' , json );
            }
            if(json.__xst === __xer){
                let trouve=false;
                for(let i in json.__xsi['0']){
                    trouve=true;
                }
                for(let i in json.__xsi['2']){
                    trouve=true;
                }
                for(let i in json.__xsi['4']){
                    trouve=true;
                }
                if(trouve === false){
                    json.__xsi[__xer]={0 : 'Le message reçu du serveur est en erreur'};
                }
            }
            postMessage( json );
        }catch{
            json=text;
            postMessage( {"__xac" : 'action(affiche_erreur())' ,"__xst" : __xer ,"__xme" : text ,"__xva" : {}} );
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