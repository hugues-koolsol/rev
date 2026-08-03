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
                    "poids_du_fichier" : tt.__xva.poids_du_fichier,
                    "type_mime_detecte_par_navigateur" : tt.__xva.type_mime_detecte_par_navigateur,
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
                        "x-type_mime_detecte_par_navigateur" : encodeURIComponent( tt.__xva.type_mime_detecte_par_navigateur ) ,
                    }
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
                                            console.log("%c pourcent="+pourcent , 'background:lightgreen;');
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
                                this.__ig1.affiche_les_messages({"__xst" : __xer ,"__xme" : 'erreur non traitée<br />' + val + '<br />' + this.__ig1.nl2()});
                                return;
                            }
                    } );
            } ).catch( ( e ) => {
                    console.log( e.stack );
                    this.#televersement_en_cours=false;
                    this.__ig1.fermer_la_sous_fenetre();
                    this.__ig1.affiche_les_messages({"__xst" : __xer ,"__xme" : 'erreur non traitée<br />' + e.stack + '<br />' + this.__ig1.nl2()});
                    return;
            } );
            }catch(err){
                console.log( err.stack );
                this.#televersement_en_cours=false;
                this.__ig1.fermer_la_sous_fenetre();
                this.__ig1.affiche_les_messages({"__xst" : __xer ,"__xme" : 'erreur non traitée ' + err.stack + '<br />' + this.__ig1.nl2()});
                return;
            }
        }else{
            this.#televersement_en_cours=false;
            /* à la fin de tous les téléchargements */
            /* console.log( "this.#les_morceaux_televerses=" , this.#les_morceaux_televerses ); */
            let les_fichiers_reellement_televerses=[];
            for(let i in this.#les_morceaux_televerses){
                if(this.#les_morceaux_televerses[i].nombre_de_morceaux === this.#les_morceaux_televerses[i].numero_morceau_de_fichier){
                    les_fichiers_reellement_televerses.push({ 
                        nom_du_fichier : this.#les_morceaux_televerses[i].nom_du_fichier ,
                        nom_fichier_sur_disque1 : this.#les_morceaux_televerses[i].nom_fichier_sur_disque1 ,
                        nom_original : this.#les_morceaux_televerses[i].nom_original ,
                        poids_du_fichier : this.#les_morceaux_televerses[i].poids_du_fichier ,
                        repertoire_fichier1 : this.#les_morceaux_televerses[i].repertoire_fichier1 ,
                        type_mime_detecte_par_navigateur : this.#les_morceaux_televerses[i].type_mime_detecte_par_navigateur ,
                        vv_commentaire_global_sur_le_televersement : document.getElementById('vv_commentaire_global_sur_le_televersement').value ,
                        commentaire_fichier_ : document.getElementById('commentaire_fichier_'+this.#les_morceaux_televerses[i].nom_du_fichier+'_1').value ,
                        
                    });
                }
            }
            this.#les_morceaux_televerses=[];
            console.log('les_fichiers_reellement_televerses=' , les_fichiers_reellement_televerses );
            console.log('parametres_televersement', this.#parametres_televersement)
//            if(this.#parametres_televersement.indexOf('enregistrer_reference_fichier__televerse_standard1')>=0)
            let obj2=this.__ig1.__rev1.t2m(this.#parametres_televersement);
            if(obj2.__xst !== __xsu){
                this.__ig1.affiche_les_messages({"__xst" : __xsu ,"__xme" : 'téléversement terminé'});
                
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
                    if(mat3[i][1] === 'traitement_final' && mat3[i][8] > 0 ){
                        let obj4=this.__ig1.__rev1.m2t(mat3,i)
                        if(obj4.__xst === __xsu ){
                            traitement_final=obj4.__xva;
                        }
                        break;
                    }
                }
                if(traitement_final !== ''){
                    let le_colis={
                        __xac : traitement_final,
                        __xva : {les_fichiers_televerses : les_fichiers_reellement_televerses}
                    }
                    this.__ig1.envoyer_un_colis_au_worker( le_colis );
                }else{
                    this.__ig1.affiche_les_messages({"__xst" : __xsu ,"__xme" : 'téléversement terminé'});
                }
                this.__ig1.fermer_la_sous_fenetre();
                return({__xst : __xsu })
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
                this.__ig1.ma_trace1("arguments[numero_argument_donnees]" , arguments[numero_argument_donnees].target );
                document.getElementById( nom_du_fichier + '_1' ).innerText='préparation du morceau ';
                if(arguments[numero_argument_donnees].target.result.byteLength > this.#taille_du_morceau_pour_televersement){
//                    console.log(arguments[numero_argument_donnees]);
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
                            "__deverminage" : this.__ig1.__deverminage ,
                            
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
        let aa=new Date()
        this.date_de_reference_televersement=aa.getFullYear() + '/' + ( aa.getMonth() + 1 < 10 ? '0' + ( aa.getMonth() + 1 )  : (aa.getMonth() + 1) ) +  '/' + ( aa.getDate() < 10 ? ('0' + (aa.getDate())) : aa.getDate() );
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
                        t+='<input id="commentaire_fichier_' + b.files[i]['cle_du_fichier'] + '_1" placeholder="commentaire éventuel sur le fichier '+ b.files[i].name.replace(/"/g,'&quot;') +'" style="height: var(--t_hauteur_input1);width:100%;" /></div>';
                        t+='</td>';
                        t+='</tr>';
                    }
                    t+='<tr>';
                    t+='<td style="width:100%;">';
                    if(cumul_taille > this.#poids_max_televersement || b.files.length > this.plusieurs_fichiers_possibles ){
                        if(cumul_taille > this.#poids_max_televersement){
                            t+='<span style="background:red;">' + cumul_taille.toLocaleString( 'fr-FR' , {"minimumFractionDigits" : 0} ) + 'o</span> &gt; ' + this.#poids_max_televersement + 'o';
                            t+='<br />';
                            t+='la taille totale est supérieur à la taille limite de téléchargement';
                            t+='<br />';
                            t+='mettez moins de fichiers';
                        }else{
                            t+='<span style="background:red;">vous êtes limité à ' + this.plusieurs_fichiers_possibles+ ' fichiers</span>';
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
            if(mat[i][1] === 'plusieurs_fichiers_possibles' && mat[i][2] === 'f'  && mat[i][8] === 1  && mat[i+1][2] === 'c'){
                this.plusieurs_fichiers_possibles=parseInt( mat[i+1][1] , 10);
            }
        }
        let chi_id_dossier=0;
        let chp_nom_dossier='';
        let nom_de_la_table='';
        let id_element=0;
        let nom_champ_cle='';
        let obj2=this.__ig1.__rev1.m2t(mat,d);
        if(obj2.__xst !== __xsu){
          return({__xst : __xer , __xme : this.__ig1.nl2() })
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
        o1+='        <input type="file" ' + ( this.plusieurs_fichiers_possibles>1 ? 'multiple' : '') + ' id="vv_input_fichier_a_telecharger4" style="display:none;" ';
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
}
export{__televersement2 as __televersement2};