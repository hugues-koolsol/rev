/*
  =====================================================================================================================
  Pour lancer, passer le ligne de commande suivante dans powershell
  =====================================================================================================================
  clear;deno run --allow-net --allow-read --allow-run --allow-write=../_bdd_sqlite/bdd_1.sqlite server2.js
  =====================================================================================================================
  
  ci dessous les types des statuts rev
*/
/* erreur */
const __xer=0;
/* succès */
const __xsu=1;
/* alerte */
const __xal=2;
/* information */
const __xif=3;
/* déverminage */
const __xdv=4;
/* import de la bibliothèque de traitement des rev */
import {c_rev1} from "../../__client/_js/c_rev1.js";
/* https://stackoverflow.com/questions/14227388/unserialize-php-array-in-javascript */
import {PHPSERIALIZE} from "./PHPSERIALIZE.js";
/* sqlite */
import {DatabaseSync} from "node:sqlite";
/*
  =====================================================================================================================
  classe principale permettant de gérer les clients
  =====================================================================================================================
*/
class c_gestion_des_connexions{
    /*
      port d'écoute du websocket 
    */
    port=9998;
    /*
      tous les clients connectés sont dans ce tableau 
    */
    _liste_des_clients=[];
    /*
      pointeur sur l'objet permettant de traiter le format rev
    */
    __mrev1=null;
    /*
      =============================================================================================================
    */
    constructor(){
        this.__mrev1=new c_rev1( "__mrev1" );
    }
    /*
      =============================================================================================================
    */
    #maj_bdd( client , mat , le_message_retourné , le_message_reçu ){
        if(this.#verifie_utilisateur( client , le_message_retourné , le_message_reçu ) === 0){
            if(this._liste_des_clients[client].deverminage >= 2){
                le_message_retourné.__x_signaux.__xdv.push( this.__mrev1.nl2() + ' le client n\'est pas authentifié' );
            }
            return;
        }
        if(this._liste_des_clients[client].deverminage >= 2){
            le_message_retourné.__x_signaux.__xdv.push( this.__mrev1.nl2() + ' le client est authentifié' );
        }
        let sqlite1=null;
        try{
            /* console.log('Connexion à la bdd') */
            sqlite1=new DatabaseSync( "../_bdd_sqlite/bdd_1.sqlite" );
        }catch(e){
            console.log( 'erreur d\'ouverture de la bdd' );
            le_message_retourné.__x_signaux.__xer.push( 'la connexion à la bdd n\'a pas pu se faire' );
            return;
        }
        try{
            /* console.log('maj client'+this._liste_des_clients[client].chi_id_utilisateur); */
            if(mat[1][1] === "socket1.ajoute_un_au_compteur_socket"){
                /*
                  ici, il faut vérifier que l'utilisateur dans le fichier session php est toujours actif
                */
                sqlite1.prepare( `	UPDATE tbl_utilisateurs 
                   SET chi_compteur_socket1_utilisateur=chi_compteur_socket1_utilisateur+1 
                   WHERE chi_id_utilisateur=?;
                ` ).run( this._liste_des_clients[client].chi_id_utilisateur );
                let req="SELECT chi_compteur_socket1_utilisateur FROM tbl_utilisateurs WHERE chi_id_utilisateur=" + this._liste_des_clients[client].chi_id_utilisateur;
                /* console.log("req=" , req ); */
                const rows=sqlite1.prepare( req ).all();
                /* console.log("valeurs:"); */
                for(const row of rows){
                    this._liste_des_clients[client].compteur_socket1=row.chi_compteur_socket1_utilisateur;
                }
                if(this._liste_des_clients[client].deverminage >= 1){
                    le_message_retourné.__x_signaux.__xsu.push( 'compteur mis à jour' );
                }
                le_message_retourné.__xva={
                    "maj" : "maj_interface1(modifier(id(vv_compteur_socket1),innerHTML(" + this._liste_des_clients[client].compteur_socket1 + ")))"
                };
                le_message_retourné.__xst=__xsu;
            }
        }catch(e){
            le_message_retourné.__x_signaux.__xer.push( 'erreur dans la requête' );
        }
        sqlite1.close();
        sqlite1=null;
    }
    /*
      =============================================================================================================
    */
    async #verifie_utilisateur( client , le_message_retourné , le_message_reçu ){
        /*
          le répertoire contenant les fichiers session
        */
        if(this._liste_des_clients[client].chi_id_utilisateur > 0){
            return this._liste_des_clients[client].chi_id_utilisateur;
        }
        let contenu_du_fichier_session_php='';
        if(this._liste_des_clients[client].session_php === ''){
            console.log( this.__mrev1.nl2() );
            return 0;
        }
        try{
            contenu_du_fichier_session_php=Deno.readTextFileSync( "C:/wamp64/tmp/sess_" + this._liste_des_clients[client].session_php );
        }catch(e){
            console.log( this.__mrev1.nl2() );
            return 0;
        }
        this._liste_des_clients[client].chi_id_utilisateur=0;
        try{
            const command=new Deno.Command( "./bat_pour_lire_fichier_session.bat" , {"args" : ['sess_' + this._liste_des_clients[client].session_php]} );
            /* create subprocess and collect output */
            const { code  , stdout  , stderr }=await command.output();
            const raaah=new TextDecoder().decode( stderr );
            if(raaah === ''){
                /* console.assert(code === 0); */
                let aout=new TextDecoder().decode( stdout );
                let bb=aout.split( '\n' );
                let retour=bb[bb.length - 1];
                if(retour === 'erreur'){
                    console.log( 'bb=' , bb );
                    console.log( this.__mrev1.nl2() );
                    return 0;
                }else{
                    try{
                        /* console.log('retour=' , retour ); */
                        let cc=JSON.parse( retour );
                        let app=this._liste_des_clients[client].__X_CLE_APPLICATION;
                        /* console.log('cc=' , cc); */
                        /* console.log('app=' , app); */
                        if(cc.hasOwnProperty( app ) && cc[app].hasOwnProperty( 'chi_id_utilisateur_initial' )){
                            this._liste_des_clients[client].chi_id_utilisateur=parseInt( cc[app].chi_id_utilisateur_initial , 10 );
                        }else{
                            console.log( this.__mrev1.nl2() );
                            return 0;
                        }
                    }catch(e){
                        console.log( 'e=' , e );
                        console.log( this.__mrev1.nl2() );
                        return 0;
                    }
                }
            }else{
                console.log( this.__mrev1.nl2() );
                return 0;
            }
        }catch(e){
            console.log( this.__mrev1.nl2() );
            console.log( 'e=' , e );
            return 0;
        }
        /*
          console.log('utilisateur=' + this._liste_des_clients[client].chi_id_utilisateur + ' ' + this.__mrev1.nl2());
        */
        if(this._liste_des_clients[client].chi_id_utilisateur === 0){
            le_message_retourné.__x_signaux.__xer.push( this.__mrev1.nl2() + ' ' + 'veuillez vous connecter 001 !!!' );
        }else{
            if(this._liste_des_clients[client].deverminage >= 2){
                le_message_retourné.__x_signaux.__xdv.push( this.__mrev1.nl2() + ' ' + 'le client est authentifié' );
            }
        }
        return this._liste_des_clients[client].chi_id_utilisateur;
    }
    /*
      =============================================================================================================
      racine des traitements fonctionnels
      =============================================================================================================
    */
    #traite_fonction( client , mat , le_message_retourné , le_message_reçu ){
        let l01=mat.length;
        if(l01 > 1){
            if(client !== null){
                if(this._liste_des_clients[client].deverminage >= 1){
                    le_message_retourné.__x_signaux.__xdv.push( this.__mrev1.nl2() + ' ' + mat[1][1] );
                }
                switch (mat[1][1]){
                    case "socket1.recuperer_l_etat" :
                        /*  */
                        le_message_retourné.__xst=__xsu;
                        if(this._liste_des_clients[client].deverminage >= 1){
                            le_message_retourné.__x_signaux.__xdv.push( this.__mrev1.nl2() + ' ' + 'socket1.recuperer_l_etat' );
                        }
                        le_message_retourné.__xva={
                            "maj" : "maj_interface1(modifier(id(vv_compteur_socket1),innerHTML(" + this._liste_des_clients[client].compteur_socket1 + ")))"
                        };
                        return;
                        
                    case "socket1.ajoute_un_au_compteur_socket" :
                        if(this._liste_des_clients[client].chi_id_utilisateur === 0){
                            le_message_retourné.__xst=__xsu;
                            le_message_retourné.__x_signaux.__xer.push( 'Veuillez vous connecter pour utiliser ce compteur' );
                        }else{
                            this.#maj_bdd( client , mat , le_message_retourné , le_message_reçu );
                        }
                        return;
                        
                    case 'socket1.retourner_la_valeur_du_cookie_de_session' :
                        for( let i=2 ; i < l01 ; i+=mat[i][12] ){
                            if(mat[i][1] === '__X_CLE_APPLICATION' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                this._liste_des_clients[client].__X_CLE_APPLICATION=mat[i + 1][1];
                            }
                        }
                        for( let i=2 ; i < l01 ; i+=mat[i][12] ){
                            if(mat[i][1] === 'fichier_session' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                /* console.log(mat[i+1][1]); */
                                this._liste_des_clients[client].session_php=mat[i + 1][1];
                                if(this.#verifie_utilisateur( client , le_message_retourné , le_message_reçu ) !== 0){
                                    /* le_message_retourné.__x_signaux.__xsu.push('Vous pouvez utiliser le compteur des sockets'); */
                                }else{
                                    le_message_retourné.__x_signaux.__xer.push( 'Veuillez vous connecter pour utiliser le compteur socket' );
                                }
                                le_message_retourné.__xst=__xsu;
                            }else if(mat[i][1] === 'deverminage'
                                   && mat[i][2] === 'f'
                                   && mat[i][8] === 1
                                   && mat[i + 1][2] === 'c'
                                   && mat[i + 1][1] >= 0
                                   && mat[i + 1][1] <= 2
                            ){
                                this._liste_des_clients[client].deverminage=mat[2][1];
                            }
                        }
                        return;
                        
                    case 'c_connexion1.se_deconnecter' :
                        /*  */
                        this._liste_des_clients[client].compteur_socket1=0;
                        this._liste_des_clients[client].session_php='';
                        this._liste_des_clients[client].chi_id_utilisateur=0;
                        this._liste_des_clients[client].__X_CLE_APPLICATION='';
                        le_message_retourné.__xst=__xsu;
                        return;
                        
                    case 'maj_deverminage' :
                        if(mat[1][8] === 1 && mat[2][2] === 'c'){
                            if(mat[2][1] >= 0 && mat[2][1] <= 2){
                                this._liste_des_clients[client].deverminage=mat[2][1];
                            }else{
                                le_message_retourné.__x_signaux.__xer.push( 'la valeur ("' + mat[2][1] + '") du déverminage est incorrecte ' );
                            }
                        }else{
                            le_message_retourné.__x_signaux.__xer.push( 'le deverminage n\'a pas pu être mis à jour' );
                        }
                        le_message_retourné.__xst=__xsu;
                        return;
                        
                    default:
                        le_message_retourné.__x_signaux.__xer.push( ' traitement non prévu dans le ws "' + mat[1][1] + '"' );
                        
                }
            }else{
                /* quand on fait un traitement sur tous les clients alors client=null */
                le_message_retourné.__x_signaux.__xer.push( ' pourquoi le client est_il null ?' );
            }
        }
    }
    /*
      =============================================================================================================
    */
    réception_de_message( client , message_texte_json_reçu ){
        let le_message_retourné={
             /* à priori, on a une erreur */
            "__xst" : __xer ,
            "__x_signaux" : {"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []} ,
            "__x_action" : '' ,
            "__xva" : {} ,
            "__x_etat_client" : this._liste_des_clients[client]
        };
        let le_message_reçu=null;
        /* console.log(this.__mrev1.nl2()+ ' '+"message_texte_json_reçu=", message_texte_json_reçu , typeof message_texte_json_reçu); */
        try{
            le_message_reçu=JSON.parse( message_texte_json_reçu );
            le_message_retourné.__x_action=le_message_reçu.__x_action;
        }catch(e){
            this.envoie_message_au_client1( client , {"__xst" : __xer ,"__x_action" : "erreur_dans_socket()" ,"__xva" : message_texte_json_reçu} );
            return;
        }
        /* console.log(this.__mrev1.nl2()+ ' '+"le_message_reçu=", le_message_reçu , typeof le_message_reçu); */
        let matrice=this.__mrev1.rev_tm( le_message_reçu.__x_action );
        if(matrice.__xst === __xsu){
            this.#traite_fonction( client , matrice.__xva , le_message_retourné , le_message_reçu );
            if(le_message_retourné.__xst === __xsu){
            }else{
                console.log( this.__mrev1.nl2() + "traitement fonctionnel en erreur" , matrice );
            }
        }else{
            console.log( this.__mrev1.nl2() + "erreur conversion en matrice =" , matrice );
        }
        this.envoie_message_au_client1( client , le_message_retourné );
    }
    /*
      =============================================================================================================
    */
    envoie_message_au_client1( client , json_obj ){
        client.send( JSON.stringify( json_obj ) );
    }
    /*
      =============================================================================================================
    */
    erreur_de_connexion( client , message ){
        console.log( this.__mrev1.nl2() + " " + "socket message:" , message.data );
        this.envoie_message_au_client1( client , {"__xst" : __xer ,"__x_action" : "echo()" ,"__xva" : message.data} );
    }
    /*
      =============================================================================================================
    */
    fermeture_de_la_connexion( client ){
        /*
          on crée un nouvel enregistrement dans le tableau des clients
        */
        console.log( la_connexion.__mrev1.nl2() + " socket closed" );
        console.log( "la_connexion._liste_des_clients.length=" , la_connexion._liste_des_clients.length );
        delete la_connexion._liste_des_clients[client];
        console.log( "la_connexion._liste_des_clients.length=" , la_connexion._liste_des_clients.length , "\n\n\n" );
    }
    /*
      =============================================================================================================
    */
    etablissement_de_la_connexion_au_socket1( client ){
        /*
          on crée un enregistrement client
        */
        this._liste_des_clients[client]={"compteur_socket1" : 0 ,"session_php" : '' ,"chi_id_utilisateur" : 0 ,"deverminage" : 0 ,"__X_CLE_APPLICATION" : ''};
        let le_message_retourné={
            "__xst" : __xsu ,
            "__x_signaux" : {"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []} ,
            "__x_action" : 'etablissement_de_la_connexion_au_socket1()' ,
            "__x_etat_client" : this._liste_des_clients[client]
        };
        console.log( this.__mrev1.nl2() + " " + "etablissement_de_la_connexion_au_socket1" );
        this.envoie_message_au_client1( client , le_message_retourné );
    }
    /*
      =============================================================================================================
      Lien technique
    */
    nouvelle_connexion( client ){
        /*
          on crée un nouvel enregistrement dans le tableau des clients
        */
        this._liste_des_clients[client]={"compteur_socket1" : 0 ,"session_php" : '' ,"chi_id_utilisateur" : 0 ,"__X_CLE_APPLICATION" : ''};
        console.log( this.__mrev1.nl2() + " " + "nouvelle_connexion , this._liste_des_clients.length=" + this._liste_des_clients.length );
    }
}
/*
  =====================================================================================================================
  fin de la classe principale permettant de gérer les clients
  On peut créer l'objet la_connexion
  =====================================================================================================================
*/
let la_connexion=new c_gestion_des_connexions();
console.log( la_connexion.__mrev1.nl2() + " " + la_connexion.port );
/*
  =====================================================================================================================
  partie technique de gestion du websocket à la sauce DENO
  =====================================================================================================================
*/
/*
  =====================================================================================================================
  Fonction appelée quand un client se connecte 
  =====================================================================================================================
  
*/
async function handleConn( conn ){
    const httpConn=Deno.serveHttp( conn );
    console.log( "0311 conn = " , conn );
    for(const e of httpConn){
        la_connexion.nouvelle_connexion( e );
        /*
          on gère la connexion avec la fonction handle()
        */
        e.respondWith( handle( e ) );
    }
}
/*
  =====================================================================================================================
  Fonction de gestion de la connexion
  =====================================================================================================================
*/
function handle( e ){
    if(e.request.headers.get( "upgrade" ) != "websocket"){
        return(new Response( "not trying to upgrade as websocket" ));
    }
    /* Upgrade the incoming HTTP request to a WebSocket connection */
    const { socket  , response }=Deno.upgradeWebSocket( e.request );
    socket.onopen=() => {
        la_connexion.etablissement_de_la_connexion_au_socket1( socket );
    };
    socket.onmessage=( message ) => {
        la_connexion.réception_de_message( socket , message.data );
    };
    socket.onerror=( erreur ) => {
        console.log( la_connexion.__mrev1.nl2() + "socket errored:" , erreur.message );
    };
    socket.onclose=() => {
        la_connexion.fermeture_de_la_connexion( e );
    };
    return response;
}
const listener=Deno.listen( {"port" : la_connexion.port} );
for(const conn of listener){
    handleConn( conn );
}