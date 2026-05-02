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
/*
  Interface Globale coté client
*/
class __televersement1{
    moi='__televersement1';
    __ig1=null;
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
      Pour les tests, je le mets à 10e1
    */
    #taille_du_morceau_pour_televersement=10e6;
    /*
      entre chaque envoi on attend 20 ms
      pour mes tests, je mets 200
      mettre une valeur plus basse a peu d'intérêt
    */
    #duree_d_attente_televersement=20;
    #televersement_en_cours=false;
    #parametres_televersement='';
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    televerser4(){
        /*
          exemple pris de :        
          https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript 
        */
        if(this.#les_morceaux_a_televerser.length > 0){
            let tt=this.#les_morceaux_a_televerser.splice( 0 , 1 );
            tt=tt[0];
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
                        "x-parametres_televersement" : this.#parametres_televersement
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
                                let tt=this.__ig1.__rev1.rev_tm( val );
                                if(tt.__xst === __xsu){
                                    let l01=tt.__xva.length;
                                    let message='';
                                    for( let i=1 ; i < l01 ; i=tt.__xva[i][12] ){
                                        if(tt.__xva[i][1] === 'erreur_dans_serveur' && tt.__xva[i][2] === 'f'){
                                            for( let j=i + 1 ; j < l01 ; j=tt.__xva[j][12] ){
                                                if(tt.__xva[j][1] === 'message' && tt.__xva[j][2] === 'f' && tt.__xva[j][8] === 1 && tt.__xva[j + 1][2] === 'c'){
                                                    message=tt.__xva[j + 1][1];
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
                                setTimeout( this.televerser4.bind( this ) , this.#duree_d_attente_televersement );
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
            this.#televersement_en_cours=false;
            /* a_la_fin_du_televersement(pm1(m1(n1(dossiers1),f1(page_modification1(chi_id_dossier(8)))))) */
            let obj1=this.__ig1.__rev1.rev_tm( this.#parametres_televersement );
            if(obj1.__xst === __xsu){
                let l01=obj1.__xva.length;
                for( let i=1 ; i < l01 ; i=obj1.__xva[i][12] ){
                    if(obj1.__xva[i][1] === 'a_la_fin_du_televersement' && obj1.__xva[i][2] === 'f'){
                        this.__ig1.__xac( obj1.__xva , i , null , null );
                        return({"__xst" : __xsu});
                    }
                }
            }
            this.__ig1.fermer_la_sous_fenetre();
            this.__ig1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'téléversement terminé'} );
            this.__ig1.affiche_les_messages();
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
                        setTimeout( this.televerser4.bind( this ) , this.#duree_d_attente_televersement );
                    }
                    try{
                        document.getElementById( 'vv_message_televersement_th' ).innerHTML='Téléversement en cours...';
                    } catch {}
                }
            }.bind( this , les_fichiers.files[numero_fichier].name , les_fichiers.files[numero_fichier].cle_du_fichier , numero_fichier , les_fichiers.files.length );
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
        let l01=mat.length;
        let id=null;
        let id_du_bouton=null;
        let la_zone_des_fichiers;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'id' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id=mat[i + 1][1];
            }else if(mat[i][1] === 'id_du_bouton' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_du_bouton=mat[i + 1][1];
            }else if(mat[i][1] === 'la_zone_des_fichiers' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                la_zone_des_fichiers=mat[i + 1][1];
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
                    t+='<table style="width:100%" border="1">';
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
                    }
                    t+='<tr>';
                    t+='<td style="width:100%;">';
                    if(cumul_taille > this.#poids_max_televersement){
                        t+='<span style="background:red;">' + cumul_taille.toLocaleString( 'fr-FR' , {"minimumFractionDigits" : 0} ) + 'o</span> &gt; ' + this.#poids_max_televersement + 'o';
                        t+='<br />';
                        t+='la taille totale est supérieur à la taille limite de téléchargement';
                        t+='<br />';
                        t+='mettez moins de fichiers';
                    }else{
                        t+='<span id="vv_total_a_televerser" data-entier="' + cumul_taille + '">' + cumul_taille.toLocaleString( 'fr-FR' , {"minimumFractionDigits" : 0} ) + '</span> octets au total à téléverser';
                    }
                    t+='</td>';
                    t+='</tr>';
                    c.innerHTML=t;
                    c.style.display='block';
                    if(cumul_taille > this.#poids_max_televersement){
                    }else{
                        a.style.visibility='visible';
                    }
                    return({"__xst" : __xsu});
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    page_téléverser4( mat , d ){
        let l01=mat.length;
        let chi_id_dossier=0;
        let chp_nom_dossier='';
        this.#parametres_televersement=null;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'parametres_televersement'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 1
            ){
                /* les parametres_televersement doivent être sous une forme de chaine de caractères encadrés par des apostrophes */
                this.#parametres_televersement=mat[i + 1][1];
            }
        }
        if(this.#parametres_televersement !== null){
            let o1='';
            o1+='<h1>téléverser des fichiers</h1>';
            o1+='<br />';
            o1+='<div id="vv_telecharger4">';
            o1+='    <form method="post" id="vv_id_televersement4">';
            o1+='        <label id="vv_bouton_pour_selectionner" for="vv_input_fichier_a_telecharger4" style="border: 1px solid #ccc;display: inline-block;padding: 6px 12px;">';
            o1+='          cliquez ici pour sélectionner les fichiers';
            o1+='        </label>';
            o1+='        <input type="file" multiple id="vv_input_fichier_a_telecharger4" style="display:none;" ';
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
                    this.action_bouton_envoyer_televersement4();} );
            return({"__xst" : __xsu});
        }
        this.__ig1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'des paramètres doivent être indiqués dans le contenu de cet appel '} );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
}
export{__televersement1 as __televersement1};