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
    moi='__televersement2';
    #les_morceaux_televerses=[];
    #le_colis={}
    
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
    #taille_du_morceau_pour_televersement=10e6; //10e6;
    /*
      entre chaque envoi de paquet on attend 20 ms
      pour mes tests, je mets 200
      mettre une valeur plus basse a peu d'intérêt
    */
    #duree_d_attente_televersement=20;
    #televersement_en_cours=false;
    #parametres_televersement='';
    
    
    /*
      ====================
    */
    constructor(mat , d , __ig1 ){
        this.__ig1=__ig1;
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
            //console.log(tt);
            this.#les_morceaux_televerses.push({
                "nombre_de_morceaux" : tt.__xva.nombre_de_morceaux ,
                "numero_morceau_de_fichier" : tt.__xva.numero_morceau_de_fichier ,
                "nom_du_fichier" : tt.__xva.nom_du_fichier ,
                "nom_original" : tt.__xva.nom_original ,
                "poids_du_fichier" : tt.__xva.poids_du_fichier ,
            });
            try{
                const response=fetch( 'http://' + this.__ig1.__le_serveur + ':' + this.__ig1.__le_port + '/' , {
                    "method" : 'POST' ,
                    "headers" : {
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
                        "x-parametres_televersement" : this.#parametres_televersement ,
                        "x-date_de_reference_televersement" : tt.__xva.date_de_reference_televersement
                    } ,
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
                                                if(temporaire1.__xva[j][1] === 'message' && temporaire1.__xva[j][2] === 'f' && temporaire1.__xva[j][8] === 1 && temporaire1.__xva[j + 1][2] === 'c'){
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
                                                    this.#les_morceaux_televerses[this.#les_morceaux_televerses.length-1]['repertoire_fichier1']=repertoire_fichier1;
                                                }else if(tt.__xva[j][1] === 'nom_fichier_sur_disque1' && tt.__xva[j][2] === 'f' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === 'c'){
                                                    nom_fichier_sur_disque1=tt.__xva[j + 1][1];
                                                    this.#les_morceaux_televerses[this.#les_morceaux_televerses.length-1]['nom_fichier_sur_disque1']=nom_fichier_sur_disque1;
                                                }
                                            }
                                        }
                                    }
                                    if(nombre_de_morceaux > 0 && numero_morceau_de_fichier > 0 && nom_du_fichier !== ''){
                                        let pourcent=parseInt( (10 * 100 * numero_morceau_de_fichier) / nombre_de_morceaux , 10 ) / 10;
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
                                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur non traitée<br />' + val + '<br />' + this.__ig1.nl2()} );
                                this.__ig1.affiche_les_messages();
                                return;
                            }
                    } );
            } ).catch( ( e ) => {
                    console.log( e.stack );
                    this.#televersement_en_cours=false;
                    this.__ig1.fermer_la_sous_fenetre();
                    this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur non traitée<br />' + e.stack + '<br />' + this.__ig1.nl2()} );
                    this.__ig1.affiche_les_messages();
                    return;
            } );
            }catch(err){
                console.log( err.stack );
                this.#televersement_en_cours=false;
                this.__ig1.fermer_la_sous_fenetre();
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur non traitée ' + err.stack + '<br />' + this.__ig1.nl2()} );
                this.__ig1.affiche_les_messages();
                return;
            }
        }else{
            console.log("this.#les_morceaux_televerses=" , this.#les_morceaux_televerses );
            let les_fichiers_reellement_televerses=[]
            for(let i in this.#les_morceaux_televerses){
                if(this.#les_morceaux_televerses[i].nombre_de_morceaux === this.#les_morceaux_televerses[i].numero_morceau_de_fichier){
                    les_fichiers_reellement_televerses.push(this.#les_morceaux_televerses[i])
                }
            }
            this.#le_colis.__xva['les_fichiers_reellement_televerses']=les_fichiers_reellement_televerses;
//            console.log('les_fichiers_reellement_televerses=' , les_fichiers_reellement_televerses );
            this.#televersement_en_cours=false;
            this.__ig1.envoyer_un_colis_au_worker( this.#le_colis );            
            this.__ig1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'téléversement terminé'} );
            this.__ig1.affiche_les_messages();
        }
    }    
    /*
      ====================
    */
    contient_fichiers_a_televerser2( nom_du_conteneur_des_champs , le_colis ){
        this.#le_colis=le_colis;
        this.#les_morceaux_a_televerser=[];
        this.#les_morceaux_televerses=[];
        let aa=new Date()
        let date_de_reference_televersement=aa.getFullYear() + '/' + ( aa.getMonth() + 1 < 10 ? '0' + ( aa.getMonth() + 1 )  : (aa.getMonth() + 1) ) +  '/' + ( aa.getDate() < 10 ? ('0' + (aa.getDate())) : aa.getDate() );
     
        let contient_des_fichiers_a_televerser=false;
        let lst_fichiers_a_televerser=document.getElementById(nom_du_conteneur_des_champs).getElementsByTagName('input');
        for(let i=0;i<lst_fichiers_a_televerser.length;i++){
            if(lst_fichiers_a_televerser[i].type && lst_fichiers_a_televerser[i].type === 'file'){
                let les_fichiers=lst_fichiers_a_televerser[i];
                if(les_fichiers.files.length>0){
                    contient_des_fichiers_a_televerser=true;
                    for( let numero_fichier=0 ; numero_fichier < les_fichiers.files.length ; numero_fichier++ ){
                        const reader=new FileReader();
                        reader.readAsArrayBuffer( les_fichiers.files[numero_fichier] );
                        reader.onload=function( {} ){
                            let nom_original=arguments[0];
                            let nom_du_fichier=arguments[1];
                            let numero_fichier=arguments[2];
                            let nombre_de_fichiers=arguments[3];
                            let numero_argument_donnees=4;
                            let poids_du_fichier=arguments[numero_argument_donnees].target.result.byteLength;
                            
                            document.getElementById( nom_du_fichier + '_1' ).innerText='préparation du morceau ';
                            if(arguments[numero_argument_donnees].target.result.byteLength > this.#taille_du_morceau_pour_televersement){
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
                                        "date_de_reference_televersement" : date_de_reference_televersement ,
                                        "_CA_" : this.__ig1._CA_ ,
                                        "chi_id_utilisateur" : this.__ig1.chi_id_utilisateur ,
                                        "chi_id_acces" : this.__ig1.chi_id_acces ,
                                        "chi_id_projet" : this.__ig1.chi_id_projet ,
                                        "__deverminage" : this.__ig1.__deverminage
                                    };
                                    this.#les_morceaux_a_televerser.push( {
                                             ///
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
                                   "date_de_reference_televersement" : date_de_reference_televersement ,
                                    "_CA_" : this.__ig1._CA_ ,
                                    "chi_id_utilisateur" : this.__ig1.chi_id_utilisateur ,
                                    "chi_id_acces" : this.__ig1.chi_id_acces ,
                                    "chi_id_projet" : this.__ig1.chi_id_projet ,
                                    "__deverminage" : this.__ig1.__deverminage
                                };
                                this.#les_morceaux_a_televerser.push( {
                                         //
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
                            
                        }.bind( this , les_fichiers.files[numero_fichier].name , les_fichiers.files[numero_fichier].cle_du_fichier , numero_fichier , les_fichiers.files.length );                    
                        
                        
                    }
                }
            }
        }
        if(contient_des_fichiers_a_televerser===true){
            return({__xst : __xsu})
        }else{
            return({__xst : __xer})
        }
    }
}
export{__televersement2 as __televersement2};