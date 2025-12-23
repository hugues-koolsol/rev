import {__rev1} from './__rev1.js';
import {__fnt1} from './__fnt1.js';
import {menu_arbre1} from './menu_arbre1.js';
/*
  ajoute_les_evenements_aux_boutons
  css1
  #traite_message_recupere_du_worker
  #init0
  traite_action1
  affiche_page_d_accueil
  maj_menu
  html_principal
  initialisation_des_zones
  afficher_les_zones
  construire_navigation_pour_liste
  affiche_sous_fenetre1
  quand_click
  envoyer_un_message_au_worker
*/
class __interface1{
    __version='';
    #liste_des_modules_dynamiques={};
    __rev1=null;
    __fnt1=null;
    __worker1=null;
    #boutons_masques_avant_appel=[];
    /*
      localStorage
    */
    stockage_local={};
    cle_lst0='';
    css_dimensions={};
    reference_stockage_local={};
    liste_des_modules_dynamiques=[];
    /*
      gestion des textarea au format rev ou source
    */
    #div_des_positions_du_curseur=null;
    zones_des_editeur=[];
    derniere_zone_editee=null;
    position_dans_la_derniere_zone_editee=0;
    chi_id_utilisateur=0;
    chi_id_acces=0;
    chi_id_projet=0;
    _CA_='';
    #est_sous_fenetre=false;
    #la_sous_fenetre1=null;
    __liste_des_genres={};
    __liste_des_sql={};
    sans_maj_de_hash=false;
    avec_maj_de_hash=__xer;
    maj_hash_init_fait=false;
    maj_hash_fait=false;
    #ecran_tactile='ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    #genre_safari=null;
    #genre_crios=null;
    #timeout_de_dispatition_de_message=null;
    /*
      =============================================================================================================
    */
    constructor(){
        this.__version=__version;
        this.__fnt1=new __fnt1();
        this.__rev1=new __rev1( '__rev1' , this );
        this.__worker=new Worker( "./" + this.__version + "/__worker1.js" , {"type" : 'module'} );
        this.liste_des_modules_dynamiques['__interface1']={"objet1" : this};
        this.liste_des_modules_dynamiques['__rev1']={"objet1" : this.__rev1};
        this.liste_des_modules_dynamiques['__worker1']={"objet1" : this.__worker};
        let action='__xac(m1(n1(\'__interface1\'),f1(init1())))';
        let obj1=this.__rev1.rev_tm( action );
        this.__xac( obj1.__xva , 1 , null );
        this.#genre_safari=this.#le_userAgent( /safari/i ) && !this.#le_userAgent( /chrome/i ) && !this.#le_userAgent( /android/i );
        this.#genre_crios=navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && this.#ecran_tactile && this.#le_userAgent( /crios/i );
        if(this.#ecran_tactile === true && this.#genre_safari === true && this.#genre_crios === false){
            this.#supprimer_le_zoom_sur_safari();
        }
    }
    /*
      =============================================================================================================
    */
    recharger_la_page( mat , d ){
        location.reload();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #traite_message_recupere_du_worker( par ){
        let le_message=par.data;
        if(le_message.hasOwnProperty( '__version' ) && le_message.__version !== this.__version){
            let tt='';
            tt+='<div class="rev_bouton_carre yy__1" title="rechargez la page" data-rev_click="';
            tt+='m1(n1(__interface1),f1(recharger_la_page()))';
            tt+='">';
            tt+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1  19 21" style="transform: scale(0.9);">';
            tt+='<path d="M 12 17 a 8 8 0 1 1 3 -11 l -1 -6 l 1 6 l -6 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:2.5;"></path>';
            tt+='<path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d="M 12 17 a 8 8 0 1 1 3 -11 l -1 -6 l 1 6 l -6 0 " style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:1;"></path>';
            tt+='</svg>';
            tt+='</div>';
            __gi1.ajoute_message( {
                    "__xst" : __xal ,
                    "__xme" : '<h5>La version du programme a changé !</h5><div style="text-align:center;font-size:1.3rem;"> cliquez sur ' + tt + ' pour recharger la page ou bien appuyez sur la touche <b>F5</b>  </div>'
                } );
            __gi1.fermer_la_sous_fenetre();
            __gi1.affiche_les_messages();
            try{
                document.getElementById( 'vv_contenu_principal' ).innerHTML='';
            } catch {}
            this.retablir_les_boutons_masques( null );
            return({"__xst" : __xer});
        }
        this.maj_hash_init_fait=false;
        this.maj_hash_fait=false;
        setTimeout( () => {
                /* console.log('this.maj_hash_fait=',this.maj_hash_fait) */
                /* console.log('this.maj_hash_init_fait=',this.maj_hash_init_fait) */
                this.maj_hash_fait=false;
                this.maj_hash_init_fait=false;} , 500 );
        this.chi_id_acces=le_message.__xva.chi_id_acces;
        this.chi_id_projet=le_message.__xva.chi_id_projet;
        this.chi_id_utilisateur=le_message.__xva.chi_id_utilisateur;
        this.sans_maj_de_hash=false;
        /* pas_de_maj_de_hash */
        this.avec_maj_de_hash=__xer;
        this._CA_=le_message._CA_;
        /* if(this.stockage_local['parametres']['--deverminage']>0){ */
        console.log( le_message );
        /* } */
        let un_message_trouve=false;
        let un_message_d_erreur_trouve=false;
        for(let i in le_message.__xsi){
            if(i === __xer || i === __xal){
                un_message_d_erreur_trouve=true;
            }
            for(let j in le_message.__xsi[i]){
                __gi1.ajoute_message( {"__xst" : i ,"__xme" : le_message.__xsi[i][j]} );
                un_message_trouve=true;
            }
        }
        if(le_message.__xst !== __xsu){
            if(un_message_trouve === false){
                let txt=le_message.hasOwnProperty( '__xme' ) ? ( le_message.__xme + '<br />' ) : ( '' );
                txt+='Erreur coté serveur';
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : txt} );
            }
            __gi1.fermer_la_sous_fenetre();
            __gi1.affiche_les_messages();
            this.retablir_les_boutons_masques( le_message );
            return({"__xst" : __xer});
        }else{
            if(le_message.__xac !== ''){
                let obj1=this.__rev1.rev_tm( le_message.__xac );
                if(obj1.__xst !== __xsu){
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de message reçu du worker' + __gi1.nl2() + obj1.__xme} );
                    __gi1.affiche_les_messages();
                    return({"__xst" : __xer});
                }
                /*
                  ============= appel des actions ==============
                */
                let obj2=this.__xac( obj1.__xva , 0 , le_message );
                /*
                  ============= appel des actions ==============
                */
                if(obj2.__xst !== __xsu){
                    let cumul_message=__xsu;
                    if(obj2.hasOwnProperty( 'cumul_message' ) && obj2.cumul_message === __xer){
                        cumul_message=__xer;
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
                    }
                    this.affiche_les_messages();
                    return({"__xst" : __xer});
                }else{
                    if(this.avec_maj_de_hash === __xsu){
                        debugger;
                        this.maj_hash( obj1.__xva , 0 );
                    }
                }
                this.retablir_les_boutons_masques( le_message.__xva );
            }
        }
        if(un_message_trouve === true){
            this.affiche_les_messages();
            if(un_message_d_erreur_trouve === true){
                return({"__xst" : __xer});
            }else{
                return({"__xst" : __xsu});
            }
        }else{
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    init0( mat , d , données ){
        /*
          on reçoit ceci et il faut chercher maj_hash_init
          pm1(m1(n1(__interface1),f1(init0()))),
          m1(
          n1(__interface1),
          f1(
          maj_hash_init(m1(n1(_fonctions1),f1(lsto())))
          )
          ),
          
        */
        let hash_init='';
        let l01=mat.length;
        let autre_page_trouvee=false;
        for( let i=1 ; i < l01 && autre_page_trouvee === false ; i=mat[i][12] ){
            if(mat[i][1] === 'm1' && mat[i][8] > 0){
                let n1='';
                for( let j=i + 1 ; j < l01 && autre_page_trouvee === false ; j=mat[j][12] ){
                    if(mat[j][1] === 'n1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        n1=mat[j + 1][1];
                        break;
                    }
                }
                if(n1 === '__interface1'){
                    let f1='';
                    for( let j=i + 1 ; j < l01 && autre_page_trouvee === false ; j=mat[j][12] ){
                        if(mat[j][1] === 'f1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'f'){
                            f1=mat[j + 1][1];
                            if(f1 === 'maj_hash_init'){
                                /*
                                  il faut appeler la fonction contenue dans maj_hash_init
                                */
                                /* debugger */
                                let ret1=this.__xac( mat , j + 1 , données );
                                autre_page_trouvee=true;
                                break;
                            }
                        }
                    }
                }
            }
        }
        if(autre_page_trouvee === false){
            this.affiche_page_d_accueil( mat , d );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    __xac( mat , d , données ){
        if(!Array.isArray( mat )){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'oops, on n\'a pas reçu une matrice dans __gi1.__xac() ' + __gi1.nl2()} );
            __gi1.affiche_les_messages();
            return({"__xst" : __xer});
        }
        let comptage_action=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'fo1' && mat[i][8] > 0){
                comptage_action++;
                if(données === null){
                    /*
                      formulaire à envoyer, il doit y avoir un co1 [ nom du conteneur contenant les champs input/texterea...
                    */
                    let co1='';
                    let fo1={};
                    for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                        if(mat[j][1] === 'co1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            co1=mat[j + 1][1];
                            let t1=document.getElementById( co1 );
                            if(t1 === null){
                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : ' l\'id ' + co1 + ' n\'a pas été trouvé dans la page' + __gi1.nl2()} );
                                __gi1.affiche_les_messages();
                                return({"__xst" : __xer});
                            }
                            fo1[co1]={};
                            let lst=t1.getElementsByTagName( '*' );
                            for( let k=0 ; k < lst.length ; k++ ){
                                if(lst[k].value !== null && lst[k].id){
                                    if(lst[k].type && lst[k].type.toLowerCase() === 'checkbox'){
                                        fo1[co1][lst[k].id]=lst[k].checked;
                                    }else{
                                        fo1[co1][lst[k].id]=lst[k].value;
                                    }
                                }
                            }
                        }
                    }
                    if(co1 === ''){
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'il manque le nom du formulaire co1(xxx) ' + __gi1.nl2()} );
                        __gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                    for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                        if(mat[j][1] === 'pm1' && mat[j][2] === 'f'){
                            /*
                              après un formulaire on peut faire un post-message ...
                            */
                            let re_source=this.__rev1.matrice_vers_source_rev1( mat , j , false , j + 1 );
                            if(re_source.__xst !== __xsu){
                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de convertion de matrice en source ' + __gi1.nl2()} );
                                this.affiche_les_messages();
                                return({"__xst" : __xer});
                                /* source=re_source.__xva; */
                            }
                            this.__worker.postMessage( {
                                    "__xac" : 'pm1(' + re_source.__xva + ')' ,
                                    "__xva" : {"__parametres" : this.stockage_local['parametres'] ,"__fo1" : fo1 ,"__co1" : co1}
                                } );
                        }else if(mat[j][1] === 'm1' && mat[j][2] === 'f'){
                            /*
                              ... ou bien appeler un module, par exemple pour la vérification du formulaire avant envoie
                            */
                            let re_source=this.__rev1.matrice_vers_source_rev1( mat , j , false , j + 1 );
                            let cmd1='m1(' + re_source.__xva + ')';
                            this.executer1( cmd1 , {"__fo1" : fo1 ,"__co1" : co1} );
                        }else if(mat[j][1] === 'co1' && mat[j][2] === 'f'){
                        }else{
                            debugger;
                        }
                    }
                }else{
                    /*
                      afr
                    */
                    debugger;
                }
            }else if(mat[i][1] === 'pm1' && mat[i][8] > 0){
                comptage_action++;
                /*
                  postMessage
                */
                if(données === null){
                    let re_source=this.__rev1.matrice_vers_source_rev1( mat , i , false , i + 1 );
                    if(re_source.__xst !== __xsu){
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de convertion de matrice en source ' + __gi1.nl2()} );
                        this.affiche_les_messages();
                        return({"__xst" : __xer});
                        /* source=re_source.__xva; */
                    }
                    this.__worker.postMessage( {"__xac" : 'pm1(' + re_source.__xva + ')' ,"__xva" : {"__parametres" : this.stockage_local['parametres']}} );
                }else{
                    if(i > 1 && données.__xva.hasOwnProperty( 'redirection' ) && données.__xva.redirection !== ''){
                        this.__worker.postMessage( {"__xac" : données.__xva.redirection ,"__xva" : {"__parametres" : this.stockage_local['parametres']}} );
                    }else{
                        this.__xac( mat , i , données );
                    }
                }
            }else if(mat[i][1] === 'm1' && mat[i][8] > 0){
                comptage_action++;
                let n1='';
                let indice=-1;
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === 'n1' && mat[j][8] === 1){
                        n1=mat[j + 1][1];
                    }else if(mat[j][1] === 'f1' && mat[j][2] === 'f'){
                        indice=j;
                    }
                }
                if(n1 !== '' && indice > 0){
                    let ret1=this.m1( n1 , mat , indice , données );
                }else{
                    debugger;
                    let re_source=this.__rev1.matrice_vers_source_rev1( mat , 0 , true , 1 );
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : '<b>n1 vide ou f1 non trouvé dans :</b><br /><pre>' + re_source.__xva + '</pre> <br />' + __gi1.nl2()} );
                    this.affiche_les_messages();
                    return({"__xst" : __xer});
                }
            }else if(mat[i][1] === 'confirmer1' && mat[i][8] > 0){
                comptage_action++;
                if(window.confirm( 'certain ?' )){
                    this.__xac( mat , i , données );
                }else{
                    this.retablir_les_boutons_masques( données );
                }
            }else{
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : '<b>l\'action "' + mat[i][1] + '" n\'est pas prévue</b> ' + __gi1.nl2()} );
            }
        }
        if(comptage_action === 0){
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async m1( m1 , mat , d , __xva=null ){
        let l01=mat.length;
        let dejà_importe=[];
        let f1='';
        let indice=0;
        for( let k=d + 1 ; k < l01 ; k=mat[k][12] ){
            if(mat[k][2] === 'f'){
                /* fonctions=mat[k + 1][1]; */
                indice=k;
                break;
            }
        }
        if(indice > 0){
            if(!this.liste_des_modules_dynamiques.hasOwnProperty( m1 )){
                /*
                  si le module n'a pas encore été chargé
                */
                let module=null;
                let nom_de_classe=m1;
                let nom_a_importer='' + m1 + '.js';
                dejà_importe.push( nom_a_importer );
                try{
                    module=await import( './' + nom_a_importer );
                    this.liste_des_modules_dynamiques[m1]={"objet1" : null};
                }catch(e){
                    console.error( e );
                    if(e.message.indexOf( 'Failed to fetch dynamically imported module' ) >= 0){
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Appuyez sur F5 pour recharger la page'} );
                    }
                    let re_source=this.__rev1.matrice_vers_source_rev1( mat , d , true , d + 1 );
                    __gi1.ajoute_message( {
                            "__xst" : __xer ,
                            "__xme" : 'erreur import du module <br><pre>' + re_source.__xva + '</pre><br />"' + nom_de_classe + '" ' + __gi1.nl2( e )
                        } );
                    __gi1.affiche_les_messages();
                    return({"__xst" : __xer});
                }
                /* ancienne position */
                /* this.liste_des_modules_dynamiques[m1]={"objet1" : null}; */
                if(this.liste_des_modules_dynamiques[m1].objet1 === null){
                    try{
                        __gi1.liste_des_modules_dynamiques[m1].objet1=new module[nom_de_classe]( mat , indice );
                    }catch(e){
                        debugger;
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur new "' + nom_de_classe + '" ' + __gi1.nl2( e )} );
                        __gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                }
                for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
                    let obj=null;
                    try{
                        obj=__gi1.liste_des_modules_dynamiques[m1].objet1[mat[i][1]]( mat , i , __xva );
                    }catch(e){
                        this.retablir_les_boutons_masques( __xva );
                        __gi1.ajoute_message( {
                                "__xst" : __xer ,
                                "__xme" : 'Impossible d\'appeler la fonction "' + mat[i][1] + '" du module "' + m1 + '" <br />Existe-t-elle ? est-elle publique ? <br />' + __gi1.nl2( e )
                            } );
                        __gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                    if(obj){
                        if(obj.hasOwnProperty( '__xst' ) && obj.__xst !== __xsu){
                            this.retablir_les_boutons_masques( __xva );
                            __gi1.ajoute_message( {
                                    "__xst" : __xer ,
                                    "__xme" : 'Impossible d\'appeler la fonction "' + mat[i][1] + '" du module "' + m1 + '" <br />Existe-t-elle ? est-elle publique ? <br />' + __gi1.nl2()
                                } );
                            __gi1.affiche_les_messages();
                            return({"__xst" : __xer});
                        }else{
                            /* console.error('%c AFR CAS NON TRAITE m1(n1('+m1+'),f1('+mat[i][1]+'))','background:red;color:yellow;'); */
                        }
                    }else{
                        /* console.error('%c AFR CAS NON TRAITE m1(n1('+m1+'),f1('+mat[i][1]+'))','background:red;color:yellow;'); */
                    }
                }
                this.retablir_les_boutons_masques( __xva );
            }else{
                /* déjà chargé */
                for( let i=indice ; i < l01 ; i=mat[i][12] ){
                    try{
                        if( typeof this.liste_des_modules_dynamiques[m1].objet1[mat[i][1]] === 'function'){
                            let obj3=this.liste_des_modules_dynamiques[m1].objet1[mat[i][1]]( mat , i , __xva );
                            if(obj3 && obj3.then &&  typeof obj3.then === 'function'){
                                /*
                                  si le module vient d'etre chargé, c'est une promesse
                                */
                            }else if(obj3 === undefined){
                                __gi1.ajoute_message( {
                                         /*  */
                                        "__xst" : __xal ,
                                        "__xme" : 'la fonction ' + m1 + '.' + mat[i][1] + '() ne retourne rien'
                                    } );
                            }else if(obj3.__xst !== __xsu){
                                let cumul_message=__xsu;
                                if(obj3.hasOwnProperty( 'cumul_message' ) && obj3.cumul_message === __xer){
                                    cumul_message=__xer;
                                }else{
                                    if(obj3.hasOwnProperty( '__xme' )){
                                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : obj3.__xme} );
                                    }else{
                                        debugger;
                                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
                                    }
                                }
                                this.affiche_les_messages();
                                this.retablir_les_boutons_masques( __xva );
                                return({"__xst" : __xer ,"cumul_message" : cumul_message});
                            }
                        }else{
                            if( typeof this.liste_des_modules_dynamiques[m1].objet1['f1'] === 'function'){
                                try{
                                    let obj3=this.liste_des_modules_dynamiques[m1].objet1.f1( mat , i , __xva );
                                    if(obj3.then &&  typeof obj3.then === 'function'){
                                        /*
                                          si le module vient d'etre chargé, c'est une promesse
                                        */
                                    }else if(obj3.__xst !== __xsu){
                                        let cumul_message=__xsu;
                                        if(obj3.hasOwnProperty( 'cumul_message' ) && obj3.cumul_message === __xer){
                                            cumul_message=__xer;
                                        }else{
                                            if(obj3.hasOwnProperty( '__xme' )){
                                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : obj3.__xme} );
                                            }else{
                                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
                                            }
                                        }
                                        this.affiche_les_messages();
                                        this.retablir_les_boutons_masques( __xva );
                                        return({"__xst" : __xer ,"cumul_message" : cumul_message});
                                    }
                                }catch(e2){
                                    this.retablir_les_boutons_masques( __xva );
                                    let t1='';
                                    t1+=' erreur lors de l\'appel au js ' + m1 + '[' + mat[i][1] + ']<br />';
                                    t1+=this.nl2( e2 ) + '<br />';
                                    t1+='la méthode "' + mat[i][1] + '" existe-t-elle ? est-elle publique ? retourne-t-elle __xst:__xsu';
                                    this.ajoute_message( {"__xst" : __xer ,"__xme" : t1} );
                                    this.affiche_les_messages();
                                    return({"__xst" : __xer});
                                }
                            }else{
                                this.retablir_les_boutons_masques( __xva );
                                let t1='';
                                t1+=' erreur lors de l\'appel au js ' + m1 + '[' + mat[i][1] + ']<br />';
                                t1+='<br />';
                                t1+='la méthode "' + mat[i][1] + '" existe-t-elle ? est-elle publique ? retourne-t-elle __xst:__xsu';
                                this.ajoute_message( {"__xst" : __xer ,"__xme" : t1} );
                                this.affiche_les_messages();
                                return({"__xst" : __xer});
                            }
                        }
                    }catch(e1){
                        this.retablir_les_boutons_masques( __xva );
                        let t1='';
                        t1+=' erreur lors de l\'appel au js ' + m1 + '[' + mat[i][1] + ']<br />';
                        t1+=this.nl2( e1 ) + '<br />';
                        t1+='la méthode "' + mat[i][1] + '" existe-t-elle ? est-elle publique ? retourne-t-elle __xst:__xsu';
                        this.ajoute_message( {"__xst" : __xer ,"__xme" : t1} );
                        this.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                }
                this.retablir_les_boutons_masques( __xva );
            }
        }
    }
    /*
      =============================================================================================================
    */
    init1( mat , d , __xva ){
        this.reference_stockage_local={
             /* les valeurs des paramètres modifiables par les utilisateurs #init_css  #stockage_local.modif_util */
            "aspect" : {
                "--t_police" : {
                    "min" : 12 ,
                    "max" : 22 ,
                    "valeur" : 16 ,
                    "dimension" : 'px' ,
                    "valeurs" : [
                        12,
                        14,
                        16,
                        18,
                        20,
                        22
                    ] ,
                    "step" : 2 ,
                    "defaut" : 16 ,
                    "libelle0" : 'taille de la police' ,
                    "nom_du_style" : 'fontSize'
                } ,
                "--t_padding" : {
                    "min" : 0 ,
                    "max" : 6 ,
                    "valeur" : 2 ,
                    "dimension" : 'px' ,
                    "valeurs" : [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ] ,
                    "step" : 1 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des espaces intérieurs' ,
                    "nom_du_style" : 'padding'
                } ,
                "--t_border" : {
                    "min" : 0 ,
                    "max" : 4 ,
                    "valeur" : 1 ,
                    "dimension" : 'px' ,
                    "valeurs" : [0,1,2,3,4] ,
                    "step" : 1 ,
                    "defaut" : 1 ,
                    "libelle0" : 'taille des bordures' ,
                    "nom_du_style" : 'borderWidth'
                } ,
                "--t_input_border" : {
                    "min" : 0 ,
                    "max" : 4 ,
                    "valeur" : 2 ,
                    "dimension" : 'px' ,
                    "valeurs" : [0,1,2,3,4] ,
                    "step" : 1 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des bordures des zones de saisie' ,
                    "nom_du_style" : 'borderWidth'
                } ,
                "--t_marge_gd" : {
                    "min" : 0 ,
                    "max" : 6 ,
                    "valeur" : 0 ,
                    "dimension" : 'px' ,
                    "valeurs" : [0,2,4,6] ,
                    "step" : 2 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des marges gauche/droites' ,
                    "nom_du_style" : 'marginLeft'
                } ,
                "--t_marge_hb" : {
                    "min" : 0 ,
                    "max" : 6 ,
                    "valeur" : 0 ,
                    "dimension" : 'px' ,
                    "valeurs" : [0,2,4,6] ,
                    "step" : 2 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des marges haut/bas' ,
                    "nom_du_style" : 'marginTop'
                } ,
                "--t_rayon_b" : {
                    "min" : 0 ,
                    "max" : 6 ,
                    "valeur" : 0 ,
                    "dimension" : 'px' ,
                    "valeurs" : [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ] ,
                    "step" : 1 ,
                    "defaut" : 2 ,
                    "libelle0" : 'taille des rayons des boutons' ,
                    "nom_du_style" : 'borderRadius'
                } ,
                "--t_fenetre" : {
                    "min" : 800 ,
                    "max" : 1400 ,
                    "valeur" : 800 ,
                    "dimension" : 'px' ,
                    "valeurs" : [800,1000,1200,1400] ,
                    "step" : 200 ,
                    "defaut" : 800 ,
                    "libelle0" : 'taille de la fenêtre' ,
                    "nom_du_style" : ''
                } ,
                "--c_profile_de_couleur1" : {
                    "min" : 0 ,
                    "max" : 1 ,
                    "valeur" : 1 ,
                    "dimension" : '' ,
                    "valeurs" : [0,1] ,
                    "step" : 1 ,
                    "defaut" : 1 ,
                    "libelle0" : 'profile de couleur' ,
                    "nom_du_style" : ''
                } ,
                "--c_couleur1" : {
                    "min" : 0 ,
                    "max" : 360 ,
                    "valeur" : 0 ,
                    "dimension" : 'deg' ,
                    "valeurs" : [
                        /* tbel */
                        0,10,20,30,40,50,60,70,80,90                ,100,110,120,130,140,150,160,170,180,190
                        ,200,210,220,230,240,250,260,270,280,290                ,300,310,320,330,340,350,360] ,
                    "step" : 10 ,
                    "defaut" : 210 ,
                    "libelle0" : 'couleur principale' ,
                    "nom_du_style" : '' ,
                    "style_interface" : 'min-width: calc(min(60vw, 500px));'
                }
            } ,
            "parametres" : {
                "--bidon" : {
                    "min" : 0 ,
                    "max" : 100 ,
                    "valeur" : 0 ,
                    "dimension" : '' ,
                    "valeurs" : [0,1] ,
                    "step" : 20 ,
                    "defaut" : 0 ,
                    "libelle0" : 'afficher les données bidon' ,
                    "nom_du_style" : ''
                } ,
                "--deverminage" : {
                    "min" : 0 ,
                    "max" : 2 ,
                    "valeur" : 0 ,
                    "dimension" : '' ,
                    "valeurs" : [0,1,2] ,
                    "step" : 1 ,
                    "defaut" : 0 ,
                    "libelle0" : 'niveau de déverminage' ,
                    "nom_du_style" : ''
                }
            } ,
            "zones_sauvegardées" : {}
        };
        /*
          initialisation du lsto qui conditionne le css
        */
        this.stockage_local['aspect']={};
        this.stockage_local['parametres']={};
        this.stockage_local['zones_sauvegardées']={};
        for(let i in this.reference_stockage_local.aspect){
            this.stockage_local['aspect'][i]={"valeur" : this.reference_stockage_local.aspect[i].valeur ,"dimension" : this.reference_stockage_local.aspect[i].dimension};
        }
        for(let i in this.reference_stockage_local.parametres){
            this.stockage_local['parametres'][i]={"valeur" : this.reference_stockage_local.parametres[i].valeur ,"dimension" : this.reference_stockage_local.parametres[i].dimension};
        }
        let href=window.location.href;
        let hash=window.location.hash;
        this.cle_lst0=href.replace( hash , '' );
        this.cle_lst0=this.cle_lst0.substr( this.cle_lst0.indexOf( '/' ) );
        this.cle_lst0=this.cle_lst0.replace( '//' + window.location.host + '/' , window.location.host + '/' ).replace( /\//g , '_' );
        let lsto=localStorage.getItem( this.cle_lst0 );
        if(lsto !== null){
            let jlsto=JSON.parse( lsto );
            for(let i in jlsto.aspect){
                if(this.stockage_local['aspect'].hasOwnProperty( i )){
                    if(jlsto['aspect'][i].hasOwnProperty( 'valeur' ) && jlsto['aspect'][i].hasOwnProperty( 'dimension' )){
                        this.stockage_local['aspect'][i]=jlsto.aspect[i];
                    }
                }
            }
            for(let i in jlsto.parametres){
                if(this.stockage_local['parametres'].hasOwnProperty( i )){
                    if(jlsto['parametres'][i].hasOwnProperty( 'valeur' ) && jlsto['parametres'][i].hasOwnProperty( 'dimension' )){
                        this.stockage_local['parametres'][i]=jlsto.parametres[i];
                    }
                }
            }
            for(let i in jlsto['zones_sauvegardées']){
                this.stockage_local['zones_sauvegardées'][i]=jlsto['zones_sauvegardées'][i];
            }
        }else{
            /* nouvel accès */
        }
        localStorage.setItem( this.cle_lst0 , JSON.stringify( this.stockage_local ) );
        try{
            if(window.parent[0] === undefined){
            }else{
                this.#est_sous_fenetre=true;
            }
        }catch(e){
            debugger;
        }
        /*
          initialisation des css
        */
        let objcss1=this.css1();
        let t=this.html_principal();
        document.body.innerHTML=t;
        /* document.getElementById( 'vv_nav_centre' ).addEventListener( 'wheel' , this.roulette_sur_menu , false ); */
        try{
            if(window.parent[0] === undefined){
            }else{
                this.#est_sous_fenetre=true;
            }
        }catch(e){
            debugger;
        }
        this.#la_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        this.#la_sous_fenetre1.addEventListener( 'click' , function( e ){
                var dim=e.target.getBoundingClientRect();
                if(e.clientX < dim.left || e.clientX > dim.right || e.clientY < dim.top || e.clientY > dim.bottom){
                    try{
                        if( typeof e.target['close'] === 'function'){
                            e.target.close();
                        }
                    } catch {}
                }
            } );
        this.#div_des_positions_du_curseur=document.createElement( 'div' );
        this.#div_des_positions_du_curseur.id='div_des_positions_du_curseur';
        this.#div_des_positions_du_curseur.setAttribute( 'style' , 'position:absolute;top:60px;left:0px;background:white;display:inline-block;min-height:12px!important;line-height:12px;' );
        this.#div_des_positions_du_curseur.innerHTML='';
        document.getElementsByTagName( 'body' )[0].appendChild( this.#div_des_positions_du_curseur );
        /*
          initialisation du worker
        */
        this.__worker.onerror=function( e ){
            debugger;
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur dans le source du worker<br />' + __gi1.nl2( e )} );
            __gi1.affiche_les_messages();
            return({"__xst" : __xer});
        };
        this.__worker.onmessage=function( le_message_recu_du_worker ){
            let obj1=this.#traite_message_recupere_du_worker( le_message_recu_du_worker );
            if(obj1.__xst !== __xsu){
                /* __gi1.ajoute_message({__xst : __xer, __xme : 'Erreur dans le source du worker<br />'+__gi1.nl2() }); */
                __gi1.affiche_les_messages();
                return({"__xst" : __xer});
            }
            let obj2=this.#apres_traite_message_recupere_du_worker( le_message_recu_du_worker );
        }.bind( this );
        this.__worker.postMessage( {
                "__xac" : 'pm1(m1(n1(__interface1),f1(init0())))' ,
                 /* m1(n1(__interface1),f1(affiche_page_d_accueil())) */
                "__xva" : {
                    "__href" : decodeURIComponent( window.location.href ) ,
                    "__hash" : decodeURIComponent( window.location.hash ) ,
                    "__parametres" : this.stockage_local['parametres']
                }
            } );
        return({"__xst" : __xsu ,"__xac" : '' ,"__xva" : __xva});
    }
    /*
      =============================================================================================================
    */
    #apres_traite_message_recupere_du_worker( le_message_recu_du_worker ){
        if(le_message_recu_du_worker.data.hasOwnProperty( '__xac' ) && le_message_recu_du_worker.data.__xac !== ''){
            let obj1=__gi1.__rev1.rev_tm( le_message_recu_du_worker.data.__xac );
            if(obj1.__xst === __xsu){
                /* console.log('#apres_traite_message_recupere_du_worker le_message_recu_du_worker=',obj1.__xva); */
                let tableau=[];
                let mat=obj1.__xva;
                let l01=mat.length;
                for( let i=1 ; i < l01 ; i++ ){
                    if(mat[i][1] === 'm1' && mat[i][2] === 'f'){
                        let n1='';
                        let f1='';
                        for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                            if(mat[j][1] === 'n1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                                n1=mat[j + 1][1];
                            }else if(mat[j][1] === 'f1' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'f'){
                                f1=mat[j + 1][1];
                            }
                        }
                        if(n1 !== '' && f1 !== ''){
                            tableau.push( {"module" : n1 ,"fonction" : f1} );
                        }
                    }
                }
                try{
                    let lst=document.getElementById( 'vv_nav' ).querySelectorAll( "div,option" );
                    let trouve=-1;
                    for( let i=0 ; i < lst.length && trouve === -1 ; i++ ){
                        if(lst[i]['hasAttribute']( 'data-rev_click' ) || lst[i]['hasAttribute']( 'data-action_option' )){
                            for( let j=0 ; j < tableau.length && trouve === -1 ; j++ ){
                                if(lst[i].getAttribute( 'data-rev_click' ) && lst[i].getAttribute( 'data-rev_click' ).indexOf( tableau[j].module ) >= 0){
                                    if(!(tableau[j].module === '__interface1' || tableau[j].module === '_fonctions1')){
                                        trouve=i;
                                    }
                                }else if(lst[i].getAttribute( 'data-action_option' )
                                       && lst[i].getAttribute( 'data-action_option' ).indexOf( tableau[j].module ) >= 0
                                ){
                                    if(!(tableau[j].module === '__interface1' || tableau[j].module === '_fonctions1')){
                                        trouve=i;
                                    }
                                }
                            }
                        }
                    }
                    if(trouve >= 0){
                        for( let i=0 ; i < lst.length ; i++ ){
                            if(i === trouve){
                                if(lst[i]['hasAttribute']( 'data-rev_click' )){
                                    lst[i].classList.add( 'rev_bouton_actif' );
                                }else if(lst[i]['hasAttribute']( 'data-action_option' )){
                                    lst[i].parentNode.classList.add( 'rev_bouton_actif' );
                                }
                            }else{
                                if(lst[i]['hasAttribute']( 'data-rev_click' ) || lst[i]['hasAttribute']( 'data-action_option' )){
                                    if(lst[i].id === 'menu_2'){
                                        /* debugger; */
                                    }
                                    lst[i].classList.remove( 'rev_bouton_actif' );
                                }
                            }
                        }
                        return({"__xst" : __xsu});
                    }
                }catch(e){
                    debugger;
                }
            }
        }
    }
    /*#
      =============================================================================================================
    */
    redirection1( rev , données=null ){
        let obj1=this.__rev1.rev_tm( rev );
        if(obj1.__xst !== __xsu){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
            this.affiche_les_messages();
            return({"__xst" : __xer});
        }
        this.__xac( obj1.__xva , 0 , données );
        return({"__xst" : __xsu});
    }
    /*#
      =============================================================================================================
    */
    executer1( rev , données=null ){
        let obj1=this.__rev1.rev_tm( rev );
        if(obj1.__xst !== __xsu){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
            this.affiche_les_messages();
            return({"__xst" : __xer});
        }
        this.__xac( obj1.__xva , 0 , données );
        return({"__xst" : __xsu});
    }
    /*#
      =============================================================================================================
      let obj={
         "__xac" : 'pm1(m1(n1('+this.moi+'),f1(xxx())))' ,
         "__xva" : {
             "__fo1" : __fo1 ,
             "__co1" : this.fonction_liste
         }
      }
      __gi1.envoyer_un_message_au_worker(obj);
    */
    envoyer_un_message_au_worker( obj ){
        obj['__parametres']=this.stockage_local['parametres'];
        this.__worker.postMessage( obj );
    }
    /*
      =============================================================================================================
    */
    masquer_ou_afficher( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }
        }
        if(zone_source !== ''){
            let t1=document.getElementById( zone_source );
            if(t1){
                if(t1.style.display === 'none'){
                    t1.style.display='';
                }else{
                    t1.style.display='none';
                }
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    activer_menu( id ){
        /* utilisé pour les boutons home/paramètres/connexion */
        let lst=document.getElementById( 'vv_nav' ).querySelectorAll( "[data-id_menu]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].tagName.toLowerCase() === 'select'){
                if(lst[i].getAttribute( 'data-id_menu' ) === id){
                    lst[i].classList.add( 'rev_bouton_actif' );
                }else{
                    lst[i].selectedIndex=0;
                    lst[i].classList.remove( 'rev_bouton_actif' );
                }
            }else{
                if(lst[i].getAttribute( 'data-id_menu' ) === id){
                    lst[i].classList.add( 'rev_bouton_actif' );
                }else{
                    lst[i].classList.remove( 'rev_bouton_actif' );
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    retablir_les_boutons_masques( __xva=null ){
        while(this.#boutons_masques_avant_appel.length > 0){
            let elt=this.#boutons_masques_avant_appel.shift();
            elt.classList.remove( 'yy_invisible' );
            if(elt.hasAttribute( 'data-id_menu' )){
                let id=elt.getAttribute( 'data-id_menu' );
                let lst=document.getElementById( 'vv_nav' ).querySelectorAll( "[data-id_menu]" );
                for( let i=0 ; i < lst.length ; i++ ){
                    let aa=lst[i].getAttribute( 'data-id_menu' );
                    if(aa == id){
                        lst[i].classList.add( 'rev_bouton_actif' );
                        /* console.log('on ajoute rev_bouton_actif ','background:yellow;', lst[i] , '__xva=\n' , __xva ,'\n\n\n') */
                    }else{
                        lst[i].classList.remove( 'rev_bouton_actif' );
                    }
                    if(lst[i].tagName.toLowerCase() === 'select'){
                        lst[i].selectedIndex=0;
                    }
                }
            }
            if(elt.hasAttribute( 'data-indicateur_graphique' ) && elt.indicateur_graphique !== ''){
                /*
                */
                let arg={"idtemp" : elt.getAttribute( 'data-indicateur_graphique' )};
                let lst=document.querySelectorAll( '[data-indicateur_graphique="' + arg.idtemp + '"]' );
                if(lst.length > 0){
                    lst[0].classList.add( 'yy__OK' );
                    setTimeout( function( arg ){
                            let lst=document.querySelectorAll( '[data-indicateur_graphique="' + arg.idtemp + '"]' );
                            if(lst.length > 0){
                                /* console.log( 'indicateur on encore' , lst ); */
                                lst[0].classList.add( 'yy__OK' );
                                let arg1={"idtemp" : arg.idtemp};
                                setTimeout( () => {
                                        /* console.log( 'indicateur off' ); */
                                        let lst=document.querySelectorAll( '[data-indicateur_graphique="' + arg.idtemp + '"]' );
                                        if(lst.length > 0){
                                            lst[0].classList.remove( 'yy__OK' );
                                        }} , 250 , arg1 );
                            }
                        } , 50 , arg );
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    masquer_la_zone_message(){
        document.getElementById( 'vv_messages' ).style.visibility='hidden';
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    agrandir_la_zone_message(){
        if(document.getElementById( 'vv_messages' ).style.maxHeight !== '70vh'){
            document.getElementById( 'vv_messages' ).style.maxHeight='70vh';
        }else{
            document.getElementById( 'vv_messages' ).style.maxHeight='20vh';
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_les_messages( mat ){
        document.getElementById( 'vv_messages' ).innerHTML='';
        document.getElementById( 'vv_messages' ).style.visibility='hidden';
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #faire_disparaitre_les_messages_OK( e ){
        /* console.log( '#faire_disparaitre_les_messages_OK' ); */
        let au_moins_un_a_garder=false;
        this.#timeout_de_dispatition_de_message=null;
        let rac=document.getElementById( 'vv_messages' );
        let lst=rac.getElementsByTagName( 'div' );
        let a_supprimer=[];
        /* console.log(lst); */
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].parentNode === rac){
                if(lst[i].id && lst[i].id === 'vv_supprimer_les_messages'){
                }else{
                    if(lst[i].className && (lst[i].className.indexOf( 'yy__1' ) >= 0 || lst[i].className.indexOf( 'yy__3' ) >= 0)){
                        a_supprimer.push( i );
                    }else{
                        au_moins_un_a_garder=true;
                    }
                }
            }
        }
        if(au_moins_un_a_garder === false){
            this.supprimer_les_messages( null );
        }else{
            for( let i=a_supprimer.length - 1 ; i >= 0 ; i-- ){
                lst[a_supprimer[i]].remove();
            }
        }
    }
    /*
      =============================================================================================================
    */
    affiche_les_messages(){
        let lst=document.getElementById( 'vv_messages' ).getElementsByTagName( 'div' );
        for( let i=lst.length - 1 ; i >= 0 ; i-- ){
            if(lst[i].id === "vv_supprimer_les_messages"){
                lst[i].remove();
                break;
            }
        }
        if(document.getElementById( 'vv_messages' ).innerHTML === ''){
            let vv_supprimer_les_messages=document.createElement( 'div' );
            vv_supprimer_les_messages.setAttribute( 'id' , "vv_supprimer_les_messages" );
            vv_supprimer_les_messages.setAttribute( 'class' , "yy__1" );
            vv_supprimer_les_messages.style.position='sticky';
            vv_supprimer_les_messages.innerHTML='Rien à dire';
            vv_supprimer_les_messages.style.top='0';
            document.getElementById( 'vv_messages' ).insertBefore( vv_supprimer_les_messages , document.getElementById( 'vv_messages' ).firstChild );
        }else{
            let vv_supprimer_les_messages=document.createElement( 'div' );
            vv_supprimer_les_messages.setAttribute( 'id' , "vv_supprimer_les_messages" );
            vv_supprimer_les_messages.setAttribute( 'class' , "yy__1" );
            vv_supprimer_les_messages.style.position='sticky';
            vv_supprimer_les_messages.style.top='0';
            let t='';
            let le_svg_masquer='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 0.6077  70 65.3923"><g fill="none" fill-rule="evenodd"><path fill="#FF0000" d=" M 17 39 C 11 39 5 43 4 49 C 1 48 -2 48 -5 49 C -6 43 -11 39 -18 39 C -25 39 -31 45 -31 52 C -31 60 -25 66 -18 66 C -11 66 -5 60 -4 53 C -3 53 0 51 4 53 C 4 60 10 66 17 66 C 25 66 31 60 31 52 C 31 45 25 39 17 39 Z M -18 43 C -12 43 -8 47 -8 52 C -8 58 -12 62 -18 62 C -23 62 -27 58 -27 52 C -27 47 -23 43 -18 43 Z M 17 43 C 23 43 27 47 27 52 C 27 58 23 62 17 62 C 12 62 8 58 8 52 C 8 47 12 43 17 43 Z M 35 31 H -35 V 35 H 35 V 31 Z M 13 3 C 12 1 12 0 9 1 L 0 4 L 0 4 L -9 1 C -11 0 -12 1 -13 3 L -22 27 H 23  L 13 3 Z"></path></g></svg>';
            t+='<div class="rev_bouton yy__2 " data-rev_click="m1(n1(__interface1),f1(supprimer_les_messages()))">Supprimer les messages</div>';
            t+='<div style="min-width:2.5em;" class="rev_bouton yy__1" data-rev_click="m1(n1(__interface1),f1(agrandir_la_zone_message()))" title="agrandir/retrécir la zone messages">' + this.les_svg.agrandir + this.les_svg.retrecir + '</div>';
            t+='<div class="rev_b_svg yy__3" style="transform: translate(0, 3px);" data-rev_click="m1(n1(__interface1),f1(masquer_la_zone_message()))" title="masquer la zone messages">' + le_svg_masquer + '</div>';
            vv_supprimer_les_messages.innerHTML=t;
            document.getElementById( 'vv_messages' ).insertBefore( vv_supprimer_les_messages , document.getElementById( 'vv_messages' ).firstChild );
            this.ajoute_les_evenements_aux_boutons();
        }
        try{
            let a1=document.getElementById( 'vv_messages' ).innerHTML;
            document.getElementById( 'vv_messages' ).style.visibility='visible';
            this.ajoute_les_evenements_aux_boutons();
        }catch(e2){}
        if(this.#timeout_de_dispatition_de_message === null){
            this.#timeout_de_dispatition_de_message=setTimeout( this.#faire_disparaitre_les_messages_OK.bind( this ) , 1000 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ajoute_message( obj ){
        /* ancien empiler_erreur */
        let message='';
        if(obj.hasOwnProperty( '__xme' )){
            message=obj.__xme;
        }
        try{
            let t='';
            let a1=document.getElementById( 'vv_messages' );
            if(obj.hasOwnProperty( 'lig_col' )){
                t+='<div';
                t+=' class="rev_bouton yy__' + obj.__xst + '"';
                t+=' data-rev_click="';
                t+='m1(n1(__fnt1),f1(placer_le_curseur_en_lig_col1(';
                t+=' zone_source(' + (obj.zone_edition === undefined ? ( __gi1.zone_d_edition_en_cours ) : ( obj.zone_edition )) + '),';
                t+=' ligne(' + obj.lig_col[0] + '),';
                t+=' colonne(' + obj.lig_col[1] + '),';
                t+=')))';
                t+='" ';
                t+=' title="aller à la ligne" ';
                t+='>lig_col[' + obj.lig_col[0] + ',' + obj.lig_col[1] + ']</div>';
                t='<div class="yy__' + obj.__xst + '">' + t + message + '</div>';
            }else{
                t='<div class="yy__' + obj.__xst + '">' + message + '</div>';
            }
            if(a1.innerHTML === ''){
                a1.innerHTML=t;
                this.ajoute_les_evenements_aux_boutons();
            }else{
                let temp=document.createElement( 'div' );
                temp.setAttribute( 'class' , "yy__'+obj.__xst+'" );
                temp.innerHTML=t;
                document.getElementById( 'vv_messages' ).insertBefore( temp , document.getElementById( 'vv_messages' ).firstChild );
                this.ajoute_les_evenements_aux_boutons();
            }
        }catch(e2){
            let a1=document.body.innerHTML;
            document.body.innerHTML=a1 + '<div style="color:red;">Erreur ' + message + '</div>' + a1;
        }
        let cumul_message=__xsu;
        if(obj.hasOwnProperty( 'cumul_message' ) && obj.cumul_message === __xer){
            cumul_message=__xer;
        }
        return({"__xst" : obj.__xst ,"cumul_message" : cumul_message});
    }
    /*
      =============================================================================================================
    */
    affiche_ou_masque_les_messages( mat , d ){
        if(document.getElementById( 'vv_messages' ).style.visibility === 'hidden'){
            this.affiche_les_messages();
            document.getElementById( 'vv_messages' ).style.visibility='visible';
        }else{
            document.getElementById( 'vv_messages' ).style.visibility='hidden';
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_title_htm1( t ){
        try{
            t=t.replace( /liste des/ , '⬱' );
            document.getElementById( 'vv_titre1' ).innerText=t;
        } catch {}
    }
    /*
      =============================================================================================================
    */
    maj_contenu_principal( t ){
        document.getElementById( 'vv_contenu_principal' ).innerHTML=t;
        __gi1.ajoute_les_evenements_aux_boutons();
        window.scrollTo( {"top" : 0 ,"left" : 0 ,"behavior" : "smooth"} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_menu( mat , d , le_message ){
        let t='';
        if(le_message && le_message.hasOwnProperty( '__xva' ) && le_message.__xva.hasOwnProperty( '$les_menu1' )){
            if( typeof le_message.__xva.$les_menu1 === 'object'){
                t+='Les menus ne sont pas définis 1';
            }else if( typeof le_message.__xva.$les_menu1 === 'string'){
                t+=le_message.__xva.$les_menu1;
            }else{
                t+='Les menus ne sont pas définis 2';
            }
        }
        if(le_message.__xva.chi_id_utilisateur !== 0){
            document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__1' );
            document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__0' );
        }else{
            document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__0' );
            document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__1' );
        }
        /* document.getElementById( 'vv_nav_centre_defilement' ).innerHTML=t; */
        document.getElementById( 'vv_nav_centre' ).innerHTML=t;
        this.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_contenu( mat , d , le_message_du_serveur ){
        let l01=mat.length;
        let id='';
        let type_cible='';
        let xva='';
        let valeur_de_champ='';
        let valeur_de_style='';
        let nom_du_style='';
        let dimension='';
        let valeur_constante='';
        let nom_de_la_classe='';
        for( let k=d + 1 ; k < l01 ; k=mat[k][12] ){
            if(mat[k][1] === 'maj_hash' && mat[k][2] === 'f'){
                debugger;
                this.avec_maj_de_hash=__xsu;
            }else if(mat[k][1] === 'id' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                id=mat[k + 1][1];
            }else if(mat[k][1] === 'type_cible' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                type_cible=mat[k + 1][1];
            }else if(mat[k][1] === 'valeur' && mat[k][2] === 'f'){
                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                    if(mat[l][1] === '__xva' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        xva=mat[l + 1][1];
                    }else if(mat[l][1] === 'valeur_de_champ' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        valeur_de_champ=mat[l + 1][1];
                    }else if(mat[l][1] === 'valeur_de_style' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        valeur_de_style=mat[l + 1][1];
                    }else if(mat[l][1] === 'nom_du_style' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        nom_du_style=mat[l + 1][1];
                    }else if(mat[l][1] === 'nom_de_la_classe' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        nom_de_la_classe=mat[l + 1][1];
                    }else if(mat[l][1] === 'dimension' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        dimension=mat[l + 1][1];
                    }else if(mat[l][1] === 'valeur_constante' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                        valeur_constante=mat[l + 1][1];
                    }
                }
            }
        }
        if(this.avec_maj_de_hash === __xsu){
        }else if(id !== '' && type_cible === 'inner_html' && xva !== '' && le_message_du_serveur !== null){
            try{
                document.getElementById( id ).innerHTML=le_message_du_serveur.__xva[xva];
                this.ajoute_les_evenements_aux_boutons();
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else if(id !== '' && type_cible === 'inner_html' && valeur_de_champ !== ''){
            try{
                document.getElementById( id ).innerHTML=document.getElementById( valeur_de_champ ).value;
                this.ajoute_les_evenements_aux_boutons();
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else if(id !== '' && type_cible === 'libelle_html'){
            try{
                document.getElementById( id ).innerHTML=valeur_constante;
                this.ajoute_les_evenements_aux_boutons();
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else if(id !== '' && type_cible === 'valeur_constante'){
            try{
                document.getElementById( id ).value=valeur_constante;
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else if(id !== '' && type_cible === 'style' && valeur_de_champ !== ''){
            try{
                document.getElementById( id ).style[nom_du_style]=document.getElementById( valeur_de_champ ).value + dimension;
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else if(id !== '' && type_cible === 'style' && valeur_de_style !== ''){
            try{
                document.getElementById( id ).style[nom_du_style]=valeur_de_style;
            }catch(e){
                console.log( '%cla zone ' + id + ' n\'a pa élé trouvée' , 'background:yellow;' );
                /*
                  __gi1.ajoute_message({ __xst : __xer, __xme : 'Erreur de mise à jour du contenu ' + __gi1.nl2(e)});
                  this.affiche_les_messages();
                  return {__xst:__xer};
                */
            }
        }else if(id !== '' && type_cible === 'supprimer_class' && nom_de_la_classe !== '' && le_message_du_serveur !== null){
            try{
                document.getElementById( id ).classList.remove( nom_de_la_classe );
                if(id === 'vv_bouton_connexion'){
                    try{
                        document.getElementById( id ).title='';
                    } catch {}
                }
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else if(id !== '' && type_cible === 'ajouter_class' && nom_de_la_classe !== '' && le_message_du_serveur !== null){
            try{
                document.getElementById( id ).classList.add( nom_de_la_classe );
                if(id === 'vv_bouton_connexion' && le_message_du_serveur){
                    try{
                        let tt=le_message_du_serveur.__xva.chp_nom_de_connexion_utilisateur;
                        if(le_message_du_serveur.__xva.chi_id_projet > 0){
                            tt+=' ' + le_message_du_serveur.__xva.chi_id_projet;
                        }
                        document.getElementById( id ).title=tt;
                    } catch {}
                }
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de mise à jour du contenu ' + __gi1.nl2( e )} );
                this.affiche_les_messages();
                return({"__xst" : __xer});
            }
        }else{
            console.log( 'Aucune action pour la matrice\n' , 'background:yellow;color:yellow;' , mat );
            /*
              debugger
              __gi1.ajoute_message({ __xst : __xer, __xme : 'Erreur de mise à jour du contenu ' + __gi1.nl2()});
              this.affiche_les_messages();
              return {__xst:__xer};
            */
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_hash_init( mat , d ){
        /* console.log('%cdans maj_hash_init','color:yellow;background:red;' ); */
        let o=__gi1.__rev1.matrice_vers_source_rev1( mat , d , false , d + 1 );
        if(o.__xst === __xsu){
            /* debugger */
            window.location.hash='#' + o.__xva;
        }else{
            window.location.hash='#';
        }
        this.maj_hash_init_fait=true;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_hash( mat , d ){
        let tmp=this.__rev1.matrice_vers_source_rev1( mat , 0 , true , 1 );
        /* console.log('dans maj_hash' + ' ' + tmp.__xva + ' this.maj_hash_init_fait=',this.maj_hash_init_fait ) */
        this.maj_hash_fait=true;
        if(this.maj_hash_init_fait === true){
            this.maj_hash_init_fait=false;
            return({"__xst" : __xsu});
        }
        let l01=mat.length;
        let les_elements_a_supprimer=[];
        /*
          on repère les pm1() pour ne garder que le premier
        */
        let nombre_de_pm=0;
        let i_du_dernier_pm=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'pm1' && mat[i][2] === 'f'){
                nombre_de_pm++;
                i_du_dernier_pm=i;
            }
        }
        if(nombre_de_pm > 1){
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'pm1' && mat[i][2] === 'f'){
                    if(i < i_du_dernier_pm){
                        les_elements_a_supprimer.push( i );
                    }
                }
            }
        }
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'm1' && mat[i][2] === 'f'){
                let indice=0;
                let n1='';
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if('n1' === mat[j][1] && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        n1=mat[j + 1][1];
                    }else if('f1' === mat[j][1] && mat[j][2] === 'f' && indice === 0){
                        indice=j;
                    }
                }
                if(indice > 0 && n1 !== ''){
                    if(n1 === '__interface1'){
                        if(mat[indice][8] > 0
                               && (mat[indice + 1][1] === 'maj_contenu'
                                   || mat[indice + 1][1] === 'maj_hash_init'
                                   || mat[indice + 1][1] === 'maj_menu'
                                   || mat[indice + 1][1] === 'fermer_la_sous_fenetre')
                        ){
                            les_elements_a_supprimer.push( i );
                        }else{
                            console.log( n1 );
                        }
                    }else if(n1 === '_fonctions1'){
                        if(mat[indice][8] > 0 && (mat[indice + 1][1] === 'maj_liste_des_genres' || mat[indice + 1][1] === 'maj_liste_des_sql')){
                            les_elements_a_supprimer.push( i );
                        }
                    }
                }
            }else if(mat[i][1] === 'pm1' && mat[i][2] === 'f'){
            }else{
                console.log( mat[i][1] );
            }
        }
        if(l01 > 0 && mat[d][1] === 'maj_hash' && mat[d][2] === 'f' && mat[d][8] === 0){
            les_elements_a_supprimer.push( d );
        }
        les_elements_a_supprimer.sort( ( a , b ) => {
                return(a - b);} );
        let mat2=JSON.parse( JSON.stringify( mat ) );
        for( let i=les_elements_a_supprimer.length - 1 ; i >= 0 ; i-- ){
            this.__rev1.supprimer_un_element_de_la_matrice( mat2 , les_elements_a_supprimer[i] , 0 );
        }
        let obj1=this.__rev1.matrice_vers_source_rev1( mat2 , 0 , false , 1 );
        if(obj1.__xst !== __xsu){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
            return({"__xst" : __xer});
        }
        let hash=obj1.__xva;
        window.location.hash='#' + hash;
        return({"__xst" : __xsu});
        console.log( '%cpas de maj hash=' , 'background:red;color:yellow;' , hash );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    change_option_de_select( mat , d ){
        let l01=mat.length;
        let nom_du_select='';
        let fonction='';
        for( let k=d + 1 ; k < l01 ; k=mat[k][12] ){
            if(mat[k][1] === 'nom_du_select' && mat[k][2] === 'f' && mat[k][8] === 1 && mat[k + 1][2] === 'c'){
                nom_du_select=mat[k + 1][1];
            }
        }
        if(nom_du_select !== ''){
            let le_select=document.getElementById( nom_du_select );
            let element_selectionne=null;
            try{
                element_selectionne=le_select.options[le_select.selectedIndex];
            }catch(e){
                debugger;
            }
            if(element_selectionne.getAttribute( 'data-action_option' )
                   && element_selectionne.getAttribute( 'data-action_option' ) !== ''
            ){
                let rev=element_selectionne.getAttribute( 'data-action_option' );
                let obj1=this.__rev1.rev_tm( rev );
                if(obj1.__xst !== __xsu){
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
                    this.affiche_les_messages();
                    return({"__xst" : __xer});
                }
                le_select.classList.add( 'yy_invisible' );
                this.#boutons_masques_avant_appel.push( le_select );
                /* let obj2=this.traite_action1(obj1.__xva,null); */
                this.__xac( obj1.__xva , 0 , null );
                /*
                  if(obj2.__xst!==__xsu){
                  __gi1.ajoute_message({ __xst : __xer, __xme : __gi1.nl2()});
                  this.affiche_les_messages();
                  return {__xst:__xer};
                  
                  }
                */
            }else{
                /* rien à faire pour l'instant raf */
                /*#
                  __gi1.ajoute_message({ __xst : __xer, __xme : __gi1.nl2()});
                  this.affiche_les_messages();
                  return {__xst:__xer};
                */
            }
            if(le_select.getAttribute( 'data-id_menu' )){
                let rev='id(' + le_select.getAttribute( 'data-id_menu' ) + ')';
                let obj1=this.__rev1.rev_tcm( rev );
                if(obj1.__xst !== __xsu){
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.nl2()} );
                    this.affiche_les_messages();
                    return({"__xst" : __xer});
                }
                let mat=obj1.__xva;
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    quand_click( e ){
        try{
            e.stopPropagation();
        } catch {}
        let elt=e.target;
        let action_rev=elt.getAttribute( 'data-rev_click' );
        do{
            if(action_rev === null){
                elt=elt.parentNode;
                action_rev=elt.getAttribute( 'data-rev_click' );
            }
        }while(action_rev === null);
        if(action_rev === null || action_rev === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'l\'action_rev n\'est pas définie ' + __gi1.nl2()} );
            this.affiche_les_messages();
            return({"__xst" : __xer});
        }
        let source=action_rev + '';
        let obj1=this.__rev1.rev_tcm( source );
        if(obj1.__xst !== __xsu){
            __gi1.ajoute_message( {
                    "__xst" : __xer ,
                    "__xme" : 'erreur de convertion de source en matrice sur le click <br /><br /><b>' + source + '</b><br /><br />' + __gi1.nl2() + '<br />' + obj1.__xme
                } );
            this.affiche_les_messages();
            __gi1.fermer_la_sous_fenetre();
            return({"__xst" : __xer});
        }
        elt.classList.add( 'yy_invisible' );
        this.#boutons_masques_avant_appel.push( elt );
        let mat=obj1.__xva;
        let obj=this.__xac( mat , 0 , null );
        if(obj.__xst === __xer){
            __gi1.ajoute_message( {
                    "__xst" : __xer ,
                    "__xme" : 'le source de quand_clic :<br /><b>' + source + '</b><br /> ne provoque pas d\'action fo1() , pm1() ou m1()' + __gi1.nl2()
                } );
            this.affiche_les_messages();
            this.retablir_les_boutons_masques();
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #action_change_ou_entree( e , action ){
        let mat=null;
        let obj1=this.__rev1.rev_tcm( action );
        if(obj1.__xst !== __xsu){
            __gi1.ajoute_message( {
                    "__xst" : __xer ,
                    "__xme" : 'Dans #action_change_ou_entree<br />action="<b>' + this.fi1( action ) + '</b>",erreur de convertion de source en matrice ' + __gi1.nl2() + '<br />' + obj1.__xme
                } );
            this.affiche_les_messages();
            return({"__xst" : __xer});
        }
        mat=obj1.__xva;
        let obj=this.__xac( mat , 0 , null );
        if(obj.__xst === __xer){
            __gi1.ajoute_message( {
                    "__xst" : __xer ,
                    "__xme" : 'le source de #action_change_ou_entree :"<b>' + source + '</b>" ne provoque pas d\'action fo1() , pm1() ou m1()' + __gi1.nl2()
                } );
            this.affiche_les_messages();
            this.retablir_les_boutons_masques();
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #quand_change_ou_entree( e ){
        e.stopPropagation();
        let elt=e.target;
        let action=elt.getAttribute( 'data-rev_change_ou_entree' );
        do{
            if(action === null){
                elt=elt.parentNode;
                action=elt.getAttribute( 'data-rev_change_ou_entree' );
            }
        }while(action === null);
        if(action !== null){
            /* console.log( 'action=' , action ,e ); */
            elt.classList.add( 'yy_invisible' );
            this.#boutons_masques_avant_appel.push( elt );
            this.#action_change_ou_entree( e , action );
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
        let action=elt.getAttribute( 'data-rev_change' );
        do{
            if(action === null){
                elt=elt.parentNode;
                action=elt.getAttribute( 'data-rev_change' );
            }
        }while(action === null);
        if(action !== null && action !== ''){
            this.#action_change_ou_entree( e , action );
        }else{
            return({"__xst" : __xer});
        }
        return false;
    }
    /*
      =============================================================================================================
    */
    #blur_sur_editeur1( e ){
        try{
            this.#div_des_positions_du_curseur.innerHTML='';
        } catch {}
    }
    /*
      =============================================================================================================
    */
    #mouse_up_sur_editeur1( e ){
        let trouve=false;
        for( let i=0 ; i < this.zones_des_editeur.length ; i++ ){
            if(this.zones_des_editeur[i].id === e.target.id){
                trouve=i;
                break;
            }
        }
        var zoneSource=document.getElementById( e.target.id );
        if(trouve === false){
            this.zones_des_editeur.push( {"id" : e.target.id ,"position" : zoneSource.selectionStart} );
        }else{
            this.zones_des_editeur[trouve].position=zoneSource.selectionStart;
        }
        /* console.log( this.zones_des_editeur ); */
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
                        /* 1833 à vérifier */
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
    quand_keyup( e ){
        if(e.keyCode === 13){
            this.quand_click( e );
        }
    }
    /*
      =============================================================================================================
    */
    ajoute_les_evenements_aux_boutons(){
        let lst=document.querySelectorAll( "[data-rev_menu]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event' )){
                lst[i].setAttribute( "data-rev_event" , "1" );
                this.traite_menu( lst[i] );
            }
        }
        /* les zones cliquables */
        lst=document.querySelectorAll( "[data-rev_click]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event_click' )){
                lst[i].addEventListener( "click" , this.quand_click.bind( this ) );
                if(lst[i].nodeName.toLowerCase() === 'input' || lst[i].nodeName.toLowerCase() === 'textarea'){
                    lst[i].addEventListener( "touchend" , this.quand_click.bind( this ) );
                }else{
                    lst[i].addEventListener( "keyup" , this.quand_keyup.bind( this ) );
                }
                lst[i].setAttribute( "data-rev_event_click" , "1" );
                lst[i].setAttribute( "tabindex" , 0 );
            }
        }
        /* les "inputs" par exemple pour les sliders cliquables */
        lst=document.querySelectorAll( "[data-rev_change_ou_entree]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event_change_ou_entree' )){
                lst[i].addEventListener( "click" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].addEventListener( "input" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].addEventListener( "touchend" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].addEventListener( "keyup" , this.#quand_change_ou_entree.bind( this ) );
                lst[i].setAttribute( "data-rev_event_change_ou_entree" , "1" );
            }
        }
        lst=document.querySelectorAll( "[data-rev_change]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event_change' )){
                lst[i].addEventListener( "change" , this.quand_change.bind( this ) );
                lst[i].setAttribute( "data-rev_event_change" , "1" );
            }
        }
        lst=document.querySelectorAll( "[data-editeur1]" );
        for( let i=0 ; i < lst.length ; i++ ){
            if(!lst[i].getAttribute( 'data-rev_event' )){
                /* lst[i].addEventListener( 'keydown' , this.#keydown_sur_editeur1.bind( this ) ); */
                /* blur=lost focus */
                lst[i].addEventListener( 'blur' , this.#blur_sur_editeur1.bind( this ) );
                lst[i].addEventListener( 'mouseup' , this.#mouse_up_sur_editeur1.bind( this ) );
                lst[i].addEventListener( 'keyup' , this.#analyse_key_up_editeur1.bind( this ) );
                lst[i].setAttribute( "data-rev_event" , "1" );
            }
        }
    }
    /*
      =============================================================================================================
      pour data-rev_menu
    */
    traite_menu( elt ){
        let options1={
            "hauteur_max_en_vh" : 80 ,
            "disposition_verticale" : 0 ,
            "border_zone_principale" : '0px yellow inset' ,
            "border_element_racine" : '0px blue outset' ,
            "border_element_sous_menu" : '0px var(--c_coul_fond4) solid' ,
            "border_bloc_sous_menu" : '1px solid var(--c_coul_fond4)' ,
             /* var(--c_coul_fond4) ' , */
            "background_color" : 'var(--c_coul_fond1)' ,
             /* lightgrey */
            "class_du_bouton_replier" : 'rev_bouton'
        };
        var menu1=new menu_arbre1( elt.id , options1 );
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
    */
    choisir_dans_sous_fenetre1( mat , d ){
        let l01=mat.length;
        let $nom_champ_dans_parent1='';
        let $nom_libelle_dans_parent1='';
        let $libelle_si_vide1='';
        let id1='';
        let libelle1='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === '$nom_champ_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                $nom_champ_dans_parent1=mat[i + 1][1];
            }else if(mat[i][1] === '$nom_libelle_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                $nom_libelle_dans_parent1=mat[i + 1][1];
            }else if(mat[i][1] === '$libelle_si_vide1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                $libelle_si_vide1=mat[i + 1][1];
            }else if(mat[i][1] === 'id1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id1=mat[i + 1][1];
            }else if(mat[i][1] === 'libelle1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                libelle1=mat[i + 1][1];
            }
        }
        window.parent.document.getElementById( $nom_champ_dans_parent1 ).value=id1;
        window.parent.document.getElementById( $nom_libelle_dans_parent1 ).innerHTML=libelle1;
        window.parent.__gi1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    fermer_la_sous_fenetre( mat , d ){
        this.#la_sous_fenetre1.close();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    affiche_sous_fenetre1( mat , d ){
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'pm1' && mat[i][2] === 'f' && mat[i][8] > 0){
                let obj=this.__rev1.matrice_vers_source_rev1( mat , i , false , i + 1 );
                let l_url='pm1(' + obj.__xva + ')';
                let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                this.#la_sous_fenetre1.innerHTML='';
                /*  */
                let iframe=document.createElement( 'iframe' );
                iframe.classList.add( 'vv_iframe_sous_fenetre1' );
                let loc=window.document.location;
                iframe.src=(loc.origin + loc.pathname) + "#" + l_url;
                this.#la_sous_fenetre1.appendChild( iframe );
                /*  */
                this.#la_sous_fenetre1.showModal();
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    construire_navigation_pour_liste( $__debut , $__nbMax , $__nbEnregs , $__num_page ){
        let $txtPar='';
        let p=document.getElementById( 'vv_ecran_liste_bouton_precedents' );
        if($__num_page > 0){
            p.setAttribute( 'data-numero_page' , $__num_page - 1 );
            p.classList.remove( 'yy_suivant_precedent_inactif' );
            p.classList.add( 'yy_suivant_precedent_actif' );
        }else{
            p.setAttribute( 'data-numero_page' , '-1' );
            p.classList.add( 'yy_suivant_precedent_inactif' );
            p.classList.remove( 'yy_suivant_precedent_actif' );
        }
        let s=document.getElementById( 'vv_ecran_liste_bouton_suivants' );
        if($__debut + $__nbMax < $__nbEnregs){
            s.classList.remove( 'yy_suivant_precedent_inactif' );
            s.classList.add( 'yy_suivant_precedent_actif' );
            s.setAttribute( 'data-numero_page' , $__num_page + 1 );
        }else{
            s.classList.remove( 'yy_suivant_precedent_actif' );
            s.classList.add( 'yy_suivant_precedent_inactif' );
            s.setAttribute( 'data-numero_page' , '-1' );
        }
        let t='';
        t+='page ';
        t+='<div style="display:inline-block;min-width:2em;text-align:right;">' + ($__num_page + 1) + '</div>';
        t+='/';
        t+='<div style="display:inline-block;min-width:2em;text-align:left;">' + Math.ceil( $__nbEnregs / $__nbMax ) + '</div>';
        t+=' (';
        t+='<div style="display:inline-block;min-width:3em;text-align:left;">' + $__nbEnregs + '</div>';
        t+=' enregistrements )';
        let z=document.getElementById( 'vv_ecran_liste_zone_pages' );
        z.innerHTML=t;
    }
    /*
      =============================================================================================================
    */
    vv_ecran_liste_zones_navigation1( le_message_du_serveur , vv_ecran_liste_boutons_avant , fonction_liste ){
        let o1='';
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.__formulaire1 !== null){
            document.getElementById( 'vv_ecran_liste_boutons_avant' ).innerHTML=vv_ecran_liste_boutons_avant;
            this.construire_navigation_pour_liste( /*  */ le_message_du_serveur.__xva.$__debut , le_message_du_serveur.__xva.$__nbMax , le_message_du_serveur.__xva[fonction_liste].nombre , le_message_du_serveur.__xva.$__num_page );
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    fi2( s ){
        if(s === null){
            return '';
        }
        let t=s + '';
        return(t.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ));
    }
    /*
      =============================================================================================================
    */
    fi0( s ){
        let t=s + '';
        return(t.replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' ));
    }
    /*
      =============================================================================================================
    */
    fi1( s ){
        let t=s + '';
        return(this.fi0( t.replace( /\\\'/ , '\'' ).replace( /\\\\/ , '\\' ) ));
    }
    /*
      =============================================================================================================
    */
    afficher_les_zones( nz ){
        let tab=['vv_ecran_liste','vv_ecran_creation','vv_ecran_suppression','vv_ecran_modification'];
        for( let i=0 ; i < tab.length ; i++ ){
            /* les éléments qui commencent par */
            let lst=document.querySelectorAll( '[id^="' + tab[i] + '"]' );
            if(tab[i] === nz){
                for( let j=0 ; j < lst.length ; j++ ){
                    try{
                        lst[j].style.display='';
                    }catch(e){
                        debugger;
                    }
                }
            }else{
                for( let j=0 ; j < lst.length ; j++ ){
                    try{
                        if(lst[j].id.indexOf( 'boutons' ) < 0){
                            lst[j].innerHTML='';
                        }
                        lst[j].style.display='none';
                    }catch(e){
                        debugger;
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    la_liste_est_vide(){
        let o1='';
        o1+='<table border="1">';
        o1+='<tr>';
        o1+='<th class="yy__0" style="font-size:1.3rem;">la liste est vide</th>';
        o1+='</tr>';
        o1+='</table>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    initialisation_des_zones( nom_module ){
        let o1='';
        let tt1='';
        o1+='<div>';
        o1+=' <h1 id="vv_titre_de_la_page"></h1>';
        o1+=' <div id="vv_retour_a_la_liste1" title="retour à la liste" ';
        o1+='  style="visibility:visible;transform:translateY(-22px);opacity:0.7;" ';
        o1+='  data-rev_click="m1(n1(' + nom_module + '),f1(liste_du_menu0()))"';
        o1+='  class="rev_bouton"';
        o1+='>=&gt; ⬱</div></div>';
        /* liste */
        o1+='<div id="vv_ecran_liste_zone_filtre" style="display:none;"></div>';
        o1+='<div id="vv_ecran_liste_zones_navigation1"  class="yy_navigation_liste"  style="display:none;">';
        o1+='  <div id="vv_ecran_liste_boutons_avant" style="display:none;"></div>';
        o1+='  <div id="vv_ecran_liste_bouton_precedents"  class="rev_bouton yy_suivant_precedent_inactif" data-rev_click="';
        o1+='m1(n1(' + nom_module + '),f1(aller_a_la_page(vv_ecran_liste_bouton_precedents)))';
        o1+='"';
        o1+='    data-numero_page="-1" style="display:none;">&laquo;</div>';
        o1+='  <div id="vv_ecran_liste_bouton_suivants" class="rev_bouton yy_suivant_precedent_inactif"  data-rev_click="';
        o1+='m1(n1(' + nom_module + '),f1(aller_a_la_page(vv_ecran_liste_bouton_suivants)))';
        o1+='"';
        o1+='    data-numero_page="-1" style="display:none;">&raquo;</div>';
        o1+='  <div id="vv_ecran_liste_zone_pages" style="display:none;"></div>';
        o1+='</div>';
        o1+='<div id="vv_ecran_liste_zone_contenu" style="display:none;"></div>';
        o1+='<div id="vv_ecran_liste_zone_complement" style="display:none;"></div>';
        /*
          création
        */
        o1+='<div id="vv_ecran_creation_zone_contenu" style="display:none;"></div>';
        o1+='<div id="vv_ecran_creation_zone_boutons"  style="display:none;">';
        tt1='fo1(co1(vv_ecran_creation_zone_contenu),m1(n1(' + nom_module + '),f1(verifier_creer1())))';
        o1+=' <div id="vv_ajouter_un_element_'+nom_module+'" class="rev_bouton yy__3" data-rev_click="'+tt1+'">ajouter</div>';
        tt1='fo1(co1(vv_ecran_creation_zone_contenu),m1(n1(' + nom_module + '),f1(verifier_creer1(retour_a_la_liste()))))';
        o1+=' <div  id="vv_ajouter_un_element_et_retour_a_la_ligne_'+nom_module+'" class="rev_bouton yy__3" data-rev_click="'+tt1+'">ajouter et revenir à la liste</div>';
        o1+='</div>';
        /*
          suppression
        */
        o1+='<div id="vv_ecran_suppression_zone_contenu" style="display:none;"></div>';
        o1+='<div id="vv_ecran_suppression_zone_boutons" style="display:none;">';
        o1+='  <div class="rev_bouton yy__2" data-rev_click="fo1(co1(vv_ecran_suppression_zone_contenu),pm1(m1(n1(' + nom_module + '),f1(supprimer1()))))" title="">je confirme la suppression</div>';
        o1+='</div>';
        /*
          modification
        */
        o1+='<div id="vv_ecran_modification_zone_contenu" style="display:none;"></div>';
        o1+='<div id="vv_ecran_modification_zone_boutons" style="display:none;">';
        o1+='  <div class="rev_bouton yy__3" data-indicateur_graphique="bouton_modification_zone" ';
        o1+='   data-rev_click="fo1(co1(vv_ecran_modification_zone_contenu),m1(n1(' + nom_module + '),f1(verifier_modifier1())))" ';
        o1+='   title="">modifier';
        o1+='  </div>    ';
        o1+='  <div class="rev_bouton yy__3" ';
        o1+='   data-rev_click="fo1(co1(vv_ecran_modification_zone_contenu),m1(n1(' + nom_module + '),f1(verifier_modifier1(retour_a_la_liste()))))" ';
        o1+='   title="">Modifier et retour à la liste';
        o1+='  </div>';
        o1+='</div>';
        o1+='<div id="vv_ecran_modification_zone_complement" style="display:none;"></div>';
        __gi1.maj_contenu_principal( o1 );
    }
    /*
      =============================================================================================================
    */
    affiche_page_d_accueil( mat , d , le_message_du_serveur ){
        let l01=mat.length;
        let t='';
        /* t+='<input type="text" style="margin:10px;"/>'; */
        t+='<h1>Accueil</h1>';
        t+='<div style="display:flex;">\r\n';
        for( let i=0 ; i < this.stockage_local['parametres']['--bidon'].valeur ; i++ ){
            t+='this.stockage_local[\'parametres\'][\'--bidon\'].valeur ' + i + '<br />';
        }
        t+='</div>\r\n';
        /* t+='<input type="text" />'; */
        __gi1.maj_contenu_principal( t );
        this.activer_menu( '-1' );
        this.maj_hash( mat , 0 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    defilement_bas( mat , d ){
        const décal=parseInt( 0.85 * (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) , 10 );
        window.scrollTo( {"top" : window.scrollY + décal ,"left" : 0 ,"behavior" : "smooth"} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    defilement_haut( mat , d ){
        const décal=parseInt( 0.85 * (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) , 10 );
        window.scrollTo( {"top" : window.scrollY - décal ,"left" : 0 ,"behavior" : "smooth"} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_haut( mat , d ){
        window.scrollTo( {"top" : 0 ,"left" : 0 ,"behavior" : "smooth"} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    html_principal(){
        let t='';
        t+='<div id="vv_haut_de_page" style="' + (this.#est_sous_fenetre === true ? ( 'display:none;' ) : ( '' )) + '" role="navigation">';
        t+='    <div id="vv_nav">';
        t+='                    <div id="vv_nav_gauche">';
        t+='                        <div data-id_menu="-1" class="rev_bouton_carre" data-rev_click="m1(n1(__interface1),f1(affiche_page_d_accueil()))" title="page d\'accueil">' + this.les_svg.maison + '</div>';
        t+='                        <div id="vv_bouton_messages" class="rev_bouton_carre" data-rev_click="m1(n1(__interface1),f1(affiche_ou_masque_les_messages()))" title="affiche ou masque les messages">' + this.les_svg.message + '</div>';
        t+='                    </div>';
        t+='                    <div id="vv_nav_centre">';
        t+='                      <div id="vv_nav_centre_defilement" class="vv_nav_centre_defilement"></div>';
        t+='                    </div>';
        t+='                    <div id="vv_nav_droite">';
        t+='                        <div data-id_menu="-2" class="rev_bouton_carre" id="vv_bouton_aide" data-rev_click="m1(n1(_fonctions1),f1(lsto()))" title="aide et paramètres">' + this.les_svg.parametres_et_aide + '</div>';
        t+='                        <div data-id_menu="-3" class="rev_bouton_carre yy__1" id="vv_bouton_connexion" data-rev_click="pm1(m1(n1(_connexion1),f1(page_connexion1())))" title="vers la page de connexion">' + this.les_svg.cle + '</div>';
        t+='                    </div>';
        t+='                </div>';
        t+='    </div>';
        t+='<div id="vv_messages" style="visibility:hidden;"></div>';
        t+='<div id="vv_contenu_principal" role="main"></div>';
        t+='<div id="vv_pied_de_page">';
        t+='      <div data-id_menu="-1" class="rev_bouton_carre" style="" data-rev_click="m1(n1(__interface1),f1(defilement_bas()))">' + this.les_svg.deliler_vers_le_bas + '</div>';
        t+='      <div data-id_menu="-1" class="rev_bouton_carre" style="" data-rev_click="m1(n1(__interface1),f1(defilement_haut()))">' + this.les_svg.defiler_vers_le_haut + '</div>';
        t+='      <div data-id_menu="-1" class="rev_bouton_carre" style="" data-rev_click="m1(n1(__interface1),f1(page_haut()))">' + this.les_svg.haut_de_page + '</div>';
        t+='</div>';
        t+='<dialog id="vv_sous_fenetre1"></dialog>';
        return t;
    }
    /*
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
    /*
      =============================================================================================================
      code trouvé sur le ternet qui permet de supprimer le double click => zoom
      https://stackoverflow.com/a/42162450/3717718
      =============================================================================================================
    */
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
      https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
    */
    hslToHex( h , s , l ){
        l/=100;
        const a=(s * Math.min( l , 1 - l )) / 100;
        const f=( n ) => {
            const k=(n + h / 30)% 12;
            const color=l - a * Math.max( Math.min( k - 3 , 9 - k , 1 ) , -1 );
            return(Math.round( 255 * color ).toString( 16 ).padStart( 2 , '0' ));
            /* convert to Hex and prefix "0" if needed */
        };
        return("#" + f( 0 ) + "" + f( 8 ) + "" + f( 4 ) + "");
    }
    /*
      =============================================================================================================
    */
    css1(){
        let val_police=parseInt( this.stockage_local.aspect['--t_police']['valeur'] , 10 );
        let val_padding=parseInt( this.stockage_local.aspect['--t_padding']['valeur'] , 10 );
        let val_padding_de_input=4;
        /* let val_padding_de_input=2*val_padding; */
        let val_border=parseInt( this.stockage_local.aspect['--t_border']['valeur'] , 10 );
        let t_input_border=parseInt( this.stockage_local.aspect['--t_input_border']['valeur'] , 10 );
        let val_marge_gd=parseInt( this.stockage_local.aspect['--t_marge_gd']['valeur'] , 10 );
        let val_marge_hb=parseInt( this.stockage_local.aspect['--t_marge_hb']['valeur'] , 10 );
        let t_rayon_b=parseInt( this.stockage_local.aspect['--t_rayon_b']['valeur'] , 10 );
        let val_fenetre=parseInt( this.stockage_local.aspect['--t_fenetre']['valeur'] , 10 );
        let val_couleur1=parseInt( this.stockage_local.aspect['--c_couleur1']['valeur'] , 10 );
        let profile_de_couleur1=parseInt( this.stockage_local.aspect['--c_profile_de_couleur1']['valeur'] , 10 );
        let couleur0hex=null;
        /* input , textarea */
        let couleur1hex=null;
        /* fond-clair clair ( haut de page ) */
        let couleur2hex=null;
        /* fond-clair foncé ( bas de page ) */
        let couleur3hex=null;
        /* fond-clair foncé ( bas de page ) */
        let couleur7hex=null;
        /* fond-foncé clair ( haut de bouton ) */
        let couleur4hex=null;
        /* fond-foncé foncé ( bas de bouton ) */
        let couleur5hex=null;
        /* fond-foncé plus clair ( menu sélectionné ) */
        let couleur6hex=null;
        /* couleur font */
        if(profile_de_couleur1 > 0){
            /* 0 le plus clair input , textarea */
            couleur0hex='#f7f7f7';
            /* 1 fond-clair clair ( haut de page ) , couleur police de caractère clair ( dans boutons ) */
            couleur1hex='#eceff1';
            /* 2 fond-clair foncé ( bas de page ) */
            couleur2hex='#dbdee0';
            /* 7 fond-clair foncé foncé ( bas de page ) */
            couleur7hex='#dbdee0';
            /* 3 fond-foncé clair ( haut de bouton ) */
            couleur3hex='#b0bec5';
            /* 4 fond-foncé foncé ( bas de bouton ) */
            couleur4hex='#607d8b';
            /* 5 fond-foncé plus clair ( menu sélectionné ) */
            couleur5hex='#909090';
            /* 6 couleur police de catactère foncée */
            couleur6hex='#384a52';
        }else{
            couleur0hex=this.hslToHex( val_couleur1 , 100 , 98 );
            couleur1hex=this.hslToHex( val_couleur1 , 100 , 97 );
            couleur2hex=this.hslToHex( val_couleur1 , 100 , 94 );
            couleur7hex=this.hslToHex( val_couleur1 , 100 , 92 );
            couleur3hex=this.hslToHex( val_couleur1 , 100 , 30 );
            couleur4hex=this.hslToHex( val_couleur1 , 100 , 15 );
            couleur5hex=this.hslToHex( val_couleur1 , 100 , 40 );
            couleur6hex=this.hslToHex( val_couleur1 , 100 , 10 );
        }
        let police_moins_2=val_police - 2;
        let line_height=parseInt( val_police * 1.1 * 100 , 10 ) / 100;
        let hauteur_ligne_btn_svg=val_police - 2;
        let hauteur_ligne=val_police + 2;
        let hauteur_lgn_avec_padding=hauteur_ligne + 2 * val_padding;
        let hauteur_lgn_avec_pad_et_bordure=hauteur_lgn_avec_padding + 2 * val_border;
        let hauteur_lgn_avec_pad_et_bord_et_marge=hauteur_lgn_avec_pad_et_bordure + 2 * val_marge_hb;
        let hauteur_lgn_avec_pad_et_bord_et_marg_et_scrol=hauteur_lgn_avec_pad_et_bord_et_marge + 10;
        let xtt='\nhauteur_lgn_avec_padding=' + hauteur_lgn_avec_padding + ' (val_padding=' + val_padding + ')';
        xtt+='\nhauteur_lgn_avec_pad_et_bordure=' + hauteur_lgn_avec_pad_et_bordure + ' (val_border=' + val_border + ')';
        xtt+='\nhauteur_lgn_avec_pad_et_bord_et_marge=' + hauteur_lgn_avec_pad_et_bord_et_marge + ' (val_marge_hb=' + val_marge_hb + ')';
        /* console.log( '%chauteur_ligne=' + hauteur_ligne , 'background:yellow;color:red;' , xtt ); */
        let h_barre=hauteur_lgn_avec_pad_et_bord_et_marg_et_scrol;
        /* console.log( '%ch_barre=' + h_barre , 'background:yellow;color:red;' ); */
        let hauteur_ligne_paragraphe=hauteur_ligne;
        let hauteur_mini_bouton=hauteur_ligne + 2 * val_padding;
        let hauteur_mini_b_svg=hauteur_ligne + 2 * val_border;
        let taille_bouton_carre=h_barre - 2 * val_marge_hb;
        let espace_1_boutons_carres=1 * taille_bouton_carre;
        let espace_2_boutons_carres=2 * taille_bouton_carre;
        let hauteur_max_textarea='80vh';
        this.css_dimensions={
             /*  */
            "h_barre" : h_barre ,
            "t_padding" : val_padding ,
            "hauteur_max_textarea" : 80 ,
            "t_border" : val_border ,
            "t_police" : val_police ,
            "t_boutons_carres" : taille_bouton_carre ,
            "t_padding_de_input" : val_padding_de_input
        };
        let t='';
        t+='*,*::before,*::after{box-sizing:border-box;}';
        t+='html{min-height:100%;overscroll-behavior: none;}';
        t+='body{';
        t+=' --t_police:' + val_police + 'px;';
        t+=' --t_fenetre:' + val_fenetre + 'px;';
        t+=' --t_padding:' + val_padding + 'px;';
        t+=' --t_border:' + val_border + 'px;';
        t+=' --t_input_border:' + t_input_border + 'px;';
        t+=' --t_marge_gd_plus:' + val_marge_gd + 'px;';
        t+=' --t_marge_gd_moins:-' + val_marge_gd + 'px;';
        t+=' --t_marge_hb_plus:' + val_marge_hb + 'px;';
        t+=' --t_marge_hb_moins:-' + val_marge_hb + ';';
        t+=' --c_couleur1:' + val_couleur1 + 'deg;';
        t+=' --c_coul_fond1:' + couleur1hex + ';';
        /* fond-clair clair ( haut de page ) */
        t+=' --c_coul_fond2:' + couleur2hex + ';';
        /* fond-clair foncé ( bas de page ) */
        t+=' --c_coul_fond3:' + couleur3hex + ';';
        /* fond-foncé clair ( haut de bouton ) */
        t+=' --c_coul_fond4:' + couleur4hex + ';';
        /* fond-foncé foncé ( bas de bouton ) */
        t+=' --c_coul_fond5:' + couleur5hex + ';';
        /* fond-foncé plus clair ( menu sélectionné ) */
        t+=' --t_padding_de_input:' + val_padding_de_input + 'px;';
        t+=' --h_ligne_bouton:' + hauteur_ligne + 'px;';
        t+=' --h_ligne_bouton_moins:-' + hauteur_ligne + 'px;';
        t+=' --h_ligne_paragraphe:' + hauteur_ligne_paragraphe + 'px;';
        t+=' --h_mini_but:' + hauteur_mini_bouton + 'px;';
        t+=' --h_barre:' + h_barre + 'px;';
        t+=' --h_bloupe:' + ((h_barre + hauteur_ligne) - 2 * val_marge_hb - 2 * val_border - 2 * val_padding_de_input - 1) + 'px;';
        t+=' --t_boutons_carres:' + taille_bouton_carre + 'px;';
        t+=' --t_1boutons_carres:' + espace_1_boutons_carres + 'px;';
        t+=' --t_2boutons_carres:' + espace_2_boutons_carres + 'px;';
        t+=' --t_hauteur_input1:' + (val_police + 2 * val_padding_de_input + 2 * val_border) + 'px;';
        t+='   color:' + couleur6hex + ';';
        t+='   font-family:verdana;';
        t+='   font-size:' + val_police + 'px;';
        t+='   line-height:' + line_height + 'px;';
        t+='   max-width:var(--t_fenetre);';
        t+='   margin:0 auto;';
        t+='   overflow-y: scroll;';
        /* B0BEC5;'; */
        t+=' --c_coul_1:rgba(236,239,241,1);';
        /* #eceff1 */
        t+=' --c_coul_2:rgba(219,222,224,1);';
        /* #dbdee0 */
        t+=' --c_coul_3:rgba(176,190,197,1);';
        /* #b0bec5 */
        t+=' --c_coul_4:rgba( 96,125,139,1);';
        /* #607D8B */
        t+=' --c_coul_5:rgba( 96,125,139,1);';
        /* #95adb9  est entre #B0BEC5 et #607D8B */
        /* #B0BEC5, #607D8B */
        /* t+='   background: linear-gradient(to bottom, var(--c_coul_1) 0%, var(--c_coul_2) 100%);'; */
        /* t+='   background-color: var(--c_coul_fond1);'; */
        t+='   background: linear-gradient(to bottom, var(--c_coul_fond1) 0%, var(--c_coul_fond2) 100%);';
        t+='}';
        t+='html,textarea,div,pre{';
        t+='   scrollbar-width:thin;';
        t+='   scrollbar-color: ' + couleur3hex + ' ' + couleur1hex + ' ;';
        t+='   max-width:var(--t_fenetre);';
        t+='}';
        t+='.rev_bouton_carre{';
        t+='    min-width:var(--t_boutons_carres);';
        t+='    max-width:var(--t_boutons_carres);';
        t+='    /* si on ne met pas ce "display:inline-block;" ci-dessous alors les boutons svg ne s\'affichent pas sur ipad et les vieux navigateurs */';
        t+='    display:inline-block;';
        t+='    margin-top:' + val_marge_hb + 'px;';
        t+='    margin-bottom:' + val_marge_hb + 'px;';
        t+='    border:var(--t_border) ' + couleur0hex + ' outset;';
        t+='    cursor:pointer;';
        t+='}';
        t+='.yy_bouton_loupe{';
        t+='    min-width:var(--t_boutons_carres);';
        t+='    max-width:var(--t_boutons_carres);';
        t+='    /* si on ne met pas ce "display:inline-block;" ci-dessous alors les boutons svg ne s\'affichent pas sur ipad et les vieux navigateurs */';
        t+='    display:inline-block;';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='}';
        t+='#vv_haut_de_page{';
        t+='   margin:0 auto;';
        t+='   height:var(--h_barre);';
        t+='   position:absolute;';
        t+='   top:0;';
        t+='   z-index:1;';
        t+='}';
        t+='#vv_messages{';
        t+='   position: fixed;';
        t+='   top: var(--h_barre);';
        t+='   min-height: var(--h_barre);';
        t+='   max-height: 20vh;';
        t+='   width: var(--t_fenetre);';
        t+='   background-color: blue;';
        t+='   overflow-y: scroll;';
        t+='   z-index: 1;';
        t+='}';
        t+='#vv_contenu_principal{';
        t+='   margin: 0 auto;';
        t+='   min-height: 100vh;';
        t+='   padding-top: ' + (h_barre + val_police / 2) + 'px;';
        t+='   padding-bottom: var(--h_barre);';
        t+='   background:linear-gradient(to bottom, var(--c_coul_fond1) 0%, var(--c_coul_fond2) 100%);';
        /* var[--c_coul_1] 0%, var[--c_coul_2] 100%];'; */
        t+='   max-width:var(--t_fenetre);';
        t+='}';
        t+='#vv_pied_de_page{';
        t+='   margin: 0 auto;';
        t+='   display:flex;';
        t+='   position:fixed;';
        t+='   bottom:0;';
        t+='   width:100%;';
        t+='   z-index:1000;';
        /* t+='   background:var(--c_coul_1);'; */
        t+='   background-image:linear-gradient(to bottom, var(--c_coul_fond3), var(--c_coul_fond4));';
        /* var[--c_coul_3] 0%, var[--c_coul_4] 100%];'; */
        t+='   justify-content:space-evenly;';
        t+='   height:var(--h_barre);';
        t+='   max-width:var(--t_fenetre);';
        t+='   overflow:hidden;';
        t+='}';
        /*
        */
        /*
          t+='.yy__xer,.yy__0{';
          t+='   background:red;';
          t+='   color:yellow;';
          t+='}';
          t+='.yy__xsu,.yy_1{';
          t+='   background:lime;';
          t+='   color:yellow;';
          t+='}';
        */
        t+='#vv_nav{';
        t+='   display:flex;';
        t+='   position:fixed;';
        t+='   top:0;';
        t+='   width:100%;';
        t+='   background-image:linear-gradient(to bottom, var(--c_coul_fond3), var(--c_coul_fond4));';
        t+='   box-shadow:0px 2px 5px var(--c_coul_3);';
        t+='   justify-content:space-around;';
        t+='   height:var(--h_barre);';
        t+='   max-width:calc( min( var(--t_fenetre) , 100vw));';
        /* t+='   z-index:1000;'; */
        /* t+='   background:var(--c_coul_1);'; */
        /* t+='   overflow:hidden;'; */
        /* var[--c_coul_3], var[--c_coul_4]];'; */
        t+='}';
        t+='#vv_nav_gauche{';
        t+='   display:flex;';
        t+='   min-width:var(--t_2boutons_carres);';
        t+='   max-width:var(--t_2boutons_carres);';
        t+='   overflow:hidden;';
        t+='}';
        t+='#vv_nav_centre{';
        t+='   flex-grow: 1;';
        t+='   justify-items: center;';
        t+='   display: flex;';
        t+='   overflow-x: scroll;';
        t+='   scrollbar-color: ' + couleur3hex + ' ' + couleur4hex + ';';
        t+='}';
        /*  */
        t+='#vv_nav_centre_defilement{';
        t+='   display:flex;';
        t+='   flex-grow:1;';
        t+='   justify-content:space-around;';
        /* fit content permet de ne pas avoir d'erreur sur la largeur de défilement sur certains appareils */
        t+='   width: fit-content;';
        t+='   overflow-x: visible;';
        t+='}';
        t+='#vv_nav_centre_defilement div{';
        t+='   min-width: fit-content;';
        t+='}';
        t+='#vv_nav_centre_defilement div>svg{';
        t+='   min-width: var(--h_ligne_bouton);';
        t+='}';
        t+='';
        /*  */
        t+='.vv_nav_centre_defilement{';
        t+='   display:flex;';
        t+='   flex-grow:1;';
        t+='   justify-content:space-around;';
        /* fit content permet de ne pas avoir d'erreur sur la largeur de défilement sur certains appareils */
        t+='   width: fit-content;';
        t+='   overflow-x: visible;';
        t+='}';
        t+='.vv_nav_centre_defilement div{';
        /* t+='   min-width: fit-content;'; */
        t+='   min-width: max-content;';
        t+='}';
        t+='.vv_nav_centre_defilement div>svg{';
        t+='   min-width: var(--h_ligne_bouton);';
        t+='}';
        /*  */
        t+='#vv_nav_droite{';
        t+='   display:flex;';
        t+='   min-width:var(--t_2boutons_carres);';
        t+='   max-width:var(--t_2boutons_carres);';
        t+='   justify-content:flex-end;';
        t+='   overflow:hidden;';
        t+='}';
        t+='.rev_bouton{';
        t+='    display: inline-flex;';
        t+='    align-items: center;';
        t+='    justify-content: center;';
        t+='    align-items: center;';
        t+='    background-image: linear-gradient(to bottom, var(--c_coul_fond3) 0% , var(--c_coul_fond4) 100%);';
        t+='    border-radius: ' + t_rayon_b + 'px;';
        t+='    border-width: var(--t_border);';
        t+='    border-color: ' + couleur7hex + ';';
        /* #DAE2E5;'; */
        t+='    border-style: outset;';
        t+='    color: var(--c_coul_fond1);';
        t+='    font-size:var(--t_police);';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='    max-width: var(--t_fenetre);';
        t+='    min-width: fit-content;';
        t+='    min-height: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    max-height: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    padding-top:' + val_padding + 'px;';
        t+='    padding-bottom:' + (val_padding + 2) + 'px;';
        t+='    padding-left:' + val_padding + 'px;';
        t+='    padding-right:' + val_padding + 'px;';
        t+='    inline-size: max-content;';
        t+='    line-height: ' + line_height + 'px;';
        t+='    cursor: pointer;';
        t+='    outline: none;';
        t+='    touch-action: manipulation;';
        t+='    overflow-x: hidden;';
        t+='    overflow-y: hidden;';
        t+='    text-decoration: none;';
        t+='    text-align: center;';
        t+='    user-select: none;';
        t+='    width: 1.5em;';
        t+='    white-space: nowrap;';
        /* max-content */
        t+='}';
        t+='.rev_b_svg{';
        t+='    display: inline-block;';
        t+='    align-items: center;';
        t+='    background-image: linear-gradient(to bottom, var(--c_coul_fond3) 0% , var(--c_coul_fond4) 100%);';
        t+='    border-radius: ' + t_rayon_b + 'px;';
        t+='    border-width: var(--t_border);';
        t+='    border-color: ' + couleur7hex + '; ';
        /* #DAE2E5;'; */
        t+='    border-style: outset;';
        t+='    color: var(--c_coul_fond1);';
        t+='    font-size:var(--t_police);';
        t+='    justify-content: center;';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='    max-width: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    min-width: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    min-height: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    max-height: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    padding: var(--t_padding);';
        t+='    inline-size: max-content;';
        t+='    line-height: ' + hauteur_lgn_avec_padding + 'px;';
        t+='    cursor: pointer;';
        t+='    outline: none;';
        t+='    touch-action: manipulation;';
        t+='    overflow-x: hidden;';
        t+='    overflow-y: hidden;';
        t+='    text-decoration: none;';
        t+='    text-align: center;';
        t+='    user-select: none;';
        /*
          t+='    justify-content: center;';
          t+='    line-height: ' + hauteur_lgn_avec_padding + 'px;';
          t+='    width: ' + hauteur_ligne + 'px;';
          t+='    height: ' + hauteur_ligne + 'px;';
        */
        /* height: 18px; */
        t+='}';
        t+='.rev_b_svg>svg{';
        t+='   transform : translate(0px, 0px);';
        /* -'+val_padding*0.8+'px];'; */
        /* t+='   height : '+val_police+'px;'; */
        t+='}';
        /*
          pour les boutons qui contiennent quelques caractères  
        */
        t+='.rev_b_ctxt{';
        /* t+='   max-height : fit-content;'; */
        /* t+='   max-height : fit-content;'; */
        t+='}';
        /*
          essai 1 : pour le menu du haut sur ipad
        */
        t+='#vv_nav_centre .rev_bouton{';
        t+='   width: fit-content;';
        t+='}';
        /*
          lors de la conception d'un menu
        */
        t+='.rev_svg_dans_menu0{';
        t+='   max-height: ' + hauteur_mini_bouton + 'px;';
        t+='   min-height: ' + hauteur_mini_bouton + 'px;';
        t+='   background: rgba(0,0,0,0.2);';
        t+='}';
        /*
          lors de l'utilisation d'un menu
        */
        t+='.rev_svg_dans_menu1{';
        /* pourquoi -1 ? PARCEQUEEEE ! */
        t+='   max-height: ' + (val_police - 1) + 'px;';
        t+='}';
        t+='.rev_bouton:hover{box-shadow:0px 0px 5px red;}';
        /* t+='.rev_bouton:active,.rev_bouton_actif{border-width:var(--t_border);-border-color:#DAE2E5;border-style:inset;background: #909090;}'; */
        t+='.rev_bouton:active,.rev_bouton_actif{';
        t+=' border-width:var(--t_border);';
        t+=' border-color:#DAE2E5;';
        t+=' border-style:inset;';
        t+=' background: var(--c_coul_fond5);';
        t+='}';
        t+='.rev_bouton:focus{box-shadow:0px 0px 8px red;outline: none;}';
        /*
          t+='.yy_bouton_loupe{';
          t+='    height: var(--h_bloupe);';
          t+='    margin-top:var(--h_ligne_bouton_moins);';
          t+='    font-size:1.3rem;';
          t+='}';
        */
        t+='/*0 : erreur rouge */';
        t+='.yy__0,.yy__xer{color:#FFFF33;background:linear-gradient(to bottom, #FF3030, #C01010);padding:var(--t_padding);max-width: 100vw;}';
        t+='.yy__0_inactif{border-style: solid;background: #FF3030;opacity: 0.5;}';
        t+='/*1 : succes vert */';
        t+='.yy__1,.yy__xsu{color:#556B2F;background:linear-gradient(to bottom, #7FFF00, #5DBB00);padding:var(--t_padding);max-width: 100vw;}';
        t+='.yy__1_inactif{border-style: solid;background: #7FFF00;opacity: 0.5;}';
        t+='/*2 : alarme orange*/';
        t+='.yy__2,.yy__xal{color:#000000;background:linear-gradient(to bottom, #FFBB00, #B77700);padding:var(--t_padding);max-width: 100vw;}';
        t+='.yy__2_inactif{border-style: solid;background: #FFBB00;opacity: 0.5;}';
        t+='/*3 : info bleu*/';
        t+='.yy__3,.yy__xif{color:var(--c_coul_1);background:linear-gradient(to bottom, #2196FF, #0070AA);padding:var(--t_padding);max-width: 100vw;}';
        t+='.yy__3_inactif{border-style: solid;background: #2196FF;opacity: 0.5;}';
        t+='/*4 : déverminage rose*/';
        t+='.yy__4,.yy__xdv{color:#FFFFFF;background:linear-gradient(to bottom, #ff3a9e, #5a0d34);padding:var(--t_padding);max-width: 100vw;}';
        t+='.yy__4_inactif{border-style: solid;background: #ff3a9e;opacity: 0.5;}';
        t+='.yy_invisible{visibility:hidden;}';
        t+='.yy_element_actif_donc_masque{visibility:hidden;}';
        t+='.yy__OK{color:#7FFF00;background:linear-gradient(to bottom, #7FFF00, #5DBB00);box-shadow:0px 0px 15px lime;}';
        t+='h1,h2,h3,h4,h5,h6{text-shadow:#ccc 1px 1px 1px;text-align:center;color:red;margin:0 auto;}';
        t+='h1{font-size:1.6em;margin-bottom:0.6em;}';
        t+='h2{font-size:1.5em;margin-bottom:0.5em;}';
        t+='h3{font-size:1.4em;margin-bottom:0.4em;}';
        t+='h4{font-size:1.3em;margin-bottom:0.3em;}';
        t+='h5{font-size:1.2em;margin-bottom:0.2em;}';
        t+='h6{font-size:1.1em;margin-bottom:0.1em;}';
        t+='table{margin-left:auto;margin-right:auto;}';
        t+='table tr:hover{box-shadow: inset 0px 0px 5px 4px  var(--c_coul_3);}';
        t+='input[type="password"],input[type="text"],input[type="number"]{';
        t+='    min-width: var(--t_boutons_carres);';
        t+='    display:inline-block;';
        t+='    border-radius: ' + val_padding_de_input + 'px;';
        t+='    border-width: var(--t_input_border);';
        t+='    border-color: #DAE2E5;';
        t+='    border-style: inset;';
        t+='    background-color: ' + couleur0hex + ';';
        t+='    padding:var(--t_padding_de_input);';
        t+='    font-size:var(--t_police);';
        t+='    font-family:verdana;';
        t+='    line-height: var(--h_ligne_bouton);';
        t+='    max-width:calc(min(60%,80vw));';
        t+='}';
        t+='input:focus,textarea:focus,select:focus{';
        t+='    outline: none;';
        t+='    border-color: var(--c_coul_fond4);';
        t+='}';
        t+='select{';
        t+='  background: linear-gradient(to bottom, var(--c_coul_fond3) 0% , var(--c_coul_fond4) 100% );';
        t+='  color: var(--c_coul_fond1);';
        t+='  font-size:var(--t_police);';
        t+='}';
        t+='option{';
        t+='  background: var(--c_coul_fond3);';
        t+='  color: var(--c_coul_fond1);';
        t+='  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);';
        t+='}';
        t+='.yy_conteneur_txtara{';
        t+='    min-width: calc(min(100vw,100%));';
        t+='    max-width: 100vw;';
        t+='}';
        t+='.yy_conteneur_txtara>div{';
        t+='    display:flex;';
        t+='    flex-wrap:balance;';
        t+='}';
        t+='textarea{';
        t+='    min-width: calc(100% - ' + taille_bouton_carre + 'px);;';
        t+='    max-width: 80vw;';
        t+='    font-size:var(--t_police);';
        t+='    border-radius: 5px;';
        t+='    border-width: var(--t_input_border);';
        t+='    border-color: #DAE2E5;';
        t+='    border-style: inset;';
        t+='    background-color: ' + couleur0hex + ';';
        t+='    padding: var(--t_padding_de_input);';
        t+='    overflow: scroll;';
        t+='    white-space: pre;';
        t+='    /*hauteur_max_textarea*/';
        t+='    max-height: ' + hauteur_max_textarea + ';';
        t+='    min-height: 5vh;';
        t+='    overscroll-behavior: none;';
        t+='    color:' + couleur6hex + ';';
        t+='}';
        t+='a:focus{';
        t+='    box-shadow:0px 0px 8px red;';
        t+='    outline: none;';
        t+='}';
        t+='pre{';
        t+='    overflow-x:scroll;';
        t+='}';
        /*
          Avec ça, le jaune ne se met pas à jour si modification du contenu du champ via js
          t+='.yy_filtre_liste1 input:not([value=""]){background:yellow;}';
        */
        t+='.yy_filtre_liste1{display:flex;flex-wrap:wrap;justify-content:space-evenly;}';
        t+='.yy_filtre_liste1>div{';
        t+='   display:flex;';
        t+='   flex-direction:column;';
        t+='   flex-wrap:wrap;';
        t+='   margin-right:' + val_marge_gd + 'px;';
        t+='}';
        t+='.yy_filtre_liste1>div>div{';
        t+='   display:flex;';
        t+='}';
        t+='.yy_filtre_liste1 label{padding:3px;}';
        t+='.yy_edition_champ1{';
        t+='    display: flex;';
        t+='    flex-direction: row;';
        t+='    flex-wrap: wrap;';
        t+='    align-items: stretch;';
        t+='    justify-content: flex-start;';
        t+='    margin-bottom: 8px;';
        t+='}';
        t+='.yy_edition_libelle1 {';
        t+='    border-bottom: var(--t_border) ' + couleur3hex + ' solid;';
        t+='    border-left: var(--t_border) ' + couleur3hex + ' solid;';
        t+='    border-top: var(--t_border) ' + couleur3hex + ' solid;';
        t+='    border-right: 0px ' + couleur3hex + ' solid;';
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
        t+='      border-right:1px ' + couleur3hex + ' solid;';
        t+='      min-height:30px;';
        t+='   }';
        t+='}';
        t+='.yy_edition_valeur1 {';
        t+='    border : var(--t_border) ' + couleur3hex + ' solid;';
        t+='    flex-grow : 1;';
        t+='    flex-shrink : 0;';
        t+='    flex-basis : 200px;';
        t+='    padding : ' + val_padding + 'px;';
        t+='    display : flex;';
        t+='    flex-direction : row;';
        t+='    max-width : 100%;';
        t+='}';
        t+='.yy_btn_en_ligne1{';
        t+='    display : inline-flex;';
        t+='    transform : translate(0px,' + val_padding + 'px);';
        t+='}';
        t+='.yy_navigation_liste {';
        t+='    display: flex;';
        t+='    flex-wrap: wrap;';
        t+='    justify-content: space-evenly;';
        t+='    align-items: baseline;';
        t+='}';
        t+='#vv_ecran_liste_boutons_avant{';
        t+='   display:inline-flex;';
        t+='}';
        t+='.yy_suivant_precedent_actif{';
        t+='    min-width: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    text-align: center;';
        t+='    border-width: var(--t_border);';
        t+='    border-style: outset;';
        t+='    border-color: #E0E0F0;';
        t+='    padding: var(--t_padding);';
        t+='    margin: var(--t_marge_hb_plus) var(--t_marge_gd_plus);';
        t+='    touch-action: none;';
        t+='    user-select: none;';
        t+='    line-height: var(--h_ligne_bouton);';
        t+='    color: var(--c_coul_fond1);';
        t+='    background-image: linear-gradient(to bottom, var(--c_coul_fond3) 0% , var(--c_coul_fond4) 100%);';
        t+='}';
        t+='.yy_suivant_precedent_inactif{';
        t+='    min-width: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
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
        t+='    background: aliceblue;';
        t+='}';
        t+='div#vv_ecran_liste_boutons_avant>div{';
        t+='  margin-left: var(--t_marge_gd_plus);';
        t+='}';
        t+='.vv_iframe_sous_fenetre1{';
        t+='    width: 100%;';
        t+='    min-height: 75vh;';
        t+='    border: 0;';
        t+='}';
        /*  */
        t+='#vv_sous_fenetre1 {';
        t+='    min-width: 70vw;';
        t+='    max-width: calc(min(90vw,' + val_fenetre + 'px));';
        t+='    min-height: 85vh;';
        t+='    border: var(--t_border) var(--c_coul_4) solid;';
        t+='    border-radius: 9px;';
        t+='    box-shadow: #000 0px 0px 5px;';
        t+='    background: linear-gradient(to bottom, var(--c_coul_1) 0%, var(--c_coul_2) 100%);';
        t+='    opacity: 0.85;';
        t+='    overscroll-behavior-y: none;';
        t+='}';
        t+='dialog::backdrop {';
        t+='    background-color: rgba(0, 0, 0, 0.5);';
        t+='}';
        t+='.yy_ouinon {';
        t+='    appearance: none; ';
        t+='    width: ' + (hauteur_ligne * 2) + 'px;';
        t+='    height: ' + hauteur_ligne + 'px;';
        t+='    cursor: pointer;';
        t+='    overflow: hidden;';
        t+='    border-radius: 5px;';
        t+='    border: 1px inset white;';
        t+='    background: red;';
        t+='    transform: translate(0px, 0px);';
        t+='}';
        t+='.yy_conteneur_table{';
        t+='    min-width: 98%;';
        t+='    max-width: 98%;';
        t+='    margin-right: 1%;';
        t+='    margin-left: 1%;';
        t+='    overflow-x: scroll;';
        t+='    border-right: 1px red solid;';
        t+='}';
        if(navigator.userAgent.toLowerCase().indexOf( 'firefox' ) >= 0){
            t+='.yy_ouinon::-moz-range-thumb {';
            t+='    height: ' + hauteur_ligne + '18px;';
            t+='    width: ' + hauteur_ligne + 'px;';
        }else{
            t+='.yy_ouinon::-webkit-slider-thumb {';
            t+='    height: ' + hauteur_ligne + 'px;';
            t+='    width: ' + hauteur_ligne + 'px;';
        }
        t+='    appearance: none; ';
        t+='    background-color: var(--c_coul_4);';
        t+='    border-radius: 3px;';
        t+='    border: 2px outset white;';
        t+='    box-shadow: -30rem 0 0 30rem #12ed12;';
        t+='}';
        t+='.yy_w100{';
        t+='    width:100%;';
        t+='}';
        t+='.yy_jcl{';
        t+='    justify-content:left;';
        t+='}';
        t+='div[data-libelle_noeud_menu1] {\r\n';
        t+='    color: ' + couleur6hex + ';\r\n';
        t+='    display: flex;\r\n';
        t+='    background: var(--c_coul_fond4);\r\n';
        t+='    color: var(--c_coul_fond1);\r\n';
        t+='    margin-top: var(--t_marge_hb_plus);\r\n';
        t+='    border-top:  var(--t_border) var(--c_coul_4) solid;\r\n';
        t+='    border-bottom:  var(--t_border) var(--c_coul_4) solid;\r\n';
        t+='    min-height: ' + hauteur_lgn_avec_pad_et_bordure + 'px;';
        t+='    line-height: ' + val_police + 'px;';
        t+='    padding-top:' + val_padding + 'px;';
        t+='    padding-bottom:' + (val_padding + 2) + 'px;';
        t+='    padding-left:' + val_padding + 'px;';
        t+='    padding-right:' + val_padding + 'px;';
        t+='}\r\n';
        t+='div[data-libelle_noeud_menu1="0"] {\r\n';
        t+='    align-items: center;\r\n';
        t+='}\r\n';
        t+='.yy_col_act_td1{';
        t+='   display:inline-flex;';
        /* t+='   text-wrap-mode:nowrap;'; */
        t+='   padding:' + val_padding + 'px;';
        t+='}\r\n';
        t+='.yy_conteneur_table>table{';
        t+='    border: 1px ' + couleur5hex + ' solid;';
        t+='    border-collapse: collapse;';
        t+='}';
        /*  */
        /*
          t+=' --t_padding:' + val_padding + 'px;';
          t+=' --t_border:' + val_border + 'px;';
        */
        /* console.log('val_padding=' + val_padding + ' val_border=' + val_border ); */
        /*
          let aa=-val_padding; //-2-2*val_padding;
          
          t+='.rev_bouton>svg{'
          t+='margin-top:'+aa+'px;'
          t+='transform:translate(0,'+val_padding+'px);'
          t+='}';
        */
        /*
          2 -> -6   -6 + 0
          4 -> -10  -6 - 4
          6 -> -14  -6 - 8
        */
        /* let mart=-2-2*val_padding; //-2-2*val_padding; */
        /*
          2 -> 3
          4 -> 5
          6 -> 7
        */
        /*
          let trv=1+val_padding; //-2-2*val_padding;
          t+='.rev_bouton>svg.yy_svg_el{'
          t+='margin-top:'+mart+'px;'
          t+='transform:translate(0,'+trv+'px);'
          t+='}';
          
        */
        document.getElementById( 'vv_style' ).innerText=t;
        return({"__xst" : __xsu});
        /* , __xme : 'Erreur lors de l\'initialisation du css'+this.nl2[]}] */
    }
    /*
      =============================================================================================================
    */
    async charger_script_dynamique( chemin_du_script ){
        let lst=document.getElementById( 'vv_head' ).getElementsByTagName( 'script' );
        let trouvé=false;
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].src && lst[i].src.indexOf( chemin_du_script ) >= 0){
                trouvé=true;
                break;
            }
        }
        if(trouvé === false){
            let elt=document.createElement( 'script' );
            elt.setAttribute( 'type' , "text/javascript" );
            elt.setAttribute( 'src' , chemin_du_script );
            document.getElementById( 'vv_head' ).appendChild( elt );
        }
    }
    /*
      =============================================================================================================
    */
    liste_du_menu000( mat , d , that ){
        that.fonction_liste='liste1';
        let aa=sessionStorage.getItem( __gi1.cle_lst0 + '_' + that.moi + '_' + that.fonction_liste );
        if(aa !== null){
            let jso=JSON.parse( aa );
            for(let i in that.tableau_des_filtres[that.fonction_liste]){
                that.$filtres[that.fonction_liste][i]=jso[i]??that.tableau_des_filtres[that.fonction_liste][i].défaut;
            }
        }
        if(mat !== null && mat[d][8] > 0){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === '*' && mat[i][2] === 'f'){
                    for(let j in that.$filtres[that.fonction_liste]){
                        that.$filtres[that.fonction_liste][j]='';
                    }
                }
            }
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === '*' && mat[i][2] === 'f'){
                }else if(mat[i][2] === 'f'
                       && that.$filtres[that.fonction_liste].hasOwnProperty( mat[i][1] )
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                ){
                    that.$filtres[that.fonction_liste][mat[i][1]]=mat[i + 1][1];
                }
            }
        }
        let __fo1={};
        __fo1[that.fonction_liste]=that.$filtres[that.fonction_liste];
        __gi1.__worker.postMessage( {
                "__xac" : 'pm1(m1(n1(' + that.moi + '),f1(' + that.fonction_liste + '())))' ,
                "__xva" : {"__parametres" : __gi1.stockage_local['parametres'] ,"__fo1" : __fo1 ,"__co1" : that.fonction_liste}
            } );
    }
    /*
      =============================================================================================================
    */
    est_num( mot ){
        if( typeof mot !== 'string'){
            return false;
        }
        var le_test=!isNaN( mot ) && !isNaN( parseFloat( mot ) );
        return le_test;
    }
    /*
      =============================================================================================================
    */
    nl2( e_originale ){
        var e=null;
        if(e_originale !== undefined){
            e=e_originale;
        }else{
            e=new Error();
        }
        if(!e.stack){
            try{
                /* IE ?? */
                throw e;
            }catch(e){
                if(!e.stack){
                    /* IE < 10 ? */
                    if(e.message){
                        let message=e.message;
                        if(e.lineno){
                            message+=' ^G ' + e.lineno;
                        }
                        if(e.filename){
                            message+=' ' + e.filename;
                        }
                        return message;
                    }else{
                        return 0;
                    }
                }
            }
        }
        var nom_fonction='';
        /* Un grand merci à https://rgx.tools/ */
        if(e_originale !== undefined){
            var stack=e.stack.toString().split( /\r\n|\n/ );
            /* We want our caller's frame. It's index into |stack| depends on the */
            /* browser and browser version, so we need to search for the second frame: */
            var modele_champ_erreur=/:(\d+):(?:\d+)[^\d]*$/;
            var modele_champ_erreur2=/:(\d+):(\d+).*$/;
            var continuer=50;
            do{
                var ligne_erreur=stack.shift();
                try{
                    if(ligne_erreur.indexOf( ' at ' ) >= 0){
                        if(modele_champ_erreur2.exec( ligne_erreur ) !== null){
                            continuer=-1;
                        }
                    }
                }catch(e3){
                    continuer=-2;
                }
                continuer--;
            }while(continuer > 0 && stack.length > 0);
            if(continuer === -2){
                /* at nom_fonction (http://localhost/a/b/c/js/fichier.js:25:15) */
                /* var texte_erreur=stack.shift(); */
                var texte_erreur=ligne_erreur;
                var nom_fichier=texte_erreur.match( /\/([^\/:]+):/ )[1];
                nom_fonction='';
                if(texte_erreur.match( / at ([^\.]+) \(/ ) === null){
                    if(texte_erreur.match( / at ([^]+) \(/ ) === null){
                        if(texte_erreur.match( /([^]+)\/([^]+)/ )[2] !== null){
                            nom_fonction='erreur javascript ' + texte_erreur.match( /([^]+)\/([^]+)/ )[2];
                        }
                    }else{
                        nom_fonction=texte_erreur.match( / at ([^]+) \(/ )[1];
                    }
                }else{
                    nom_fonction=texte_erreur.match( / at ([^\.]+) \(/ )[1];
                }
                var libelle_erreur='';
                try{
                    libelle_erreur='<br />' + e.stack.toString().split( /\r\n|\n/ )[0];
                } catch {}
                var numero_de_ligne=modele_champ_erreur.exec( texte_erreur )[1];
                return((libelle_erreur == '' ? ( '' ) : ( '<b>' + libelle_erreur + '</b><br />' )) + '^G ' + numero_de_ligne + ' ' + nom_fichier + ' ' + nom_fonction + ' ');
            }else{
                /* console.error( e_originale ); */
                return('Voir la console pour le numéro de ligne <br /> ' + e.stack.toString());
            }
        }else{
            var stack=e.stack.toString().split( /\r\n|\n/ );
            /* We want our caller's frame. It's index into |stack| depends on the */
            /* browser and browser version, so we need to search for the second frame: */
            var modele_champ_erreur=/:(\d+):(?:\d+)[^\d]*$/;
            do{
                var ligne_erreur=stack.shift();
            }while(!modele_champ_erreur.exec( ligne_erreur ) && stack.length);
            /* at nom_fonction (http://localhost/a/b/c/js/fichier.js:25:15) */
            var texte_erreur=stack.shift();
            var nom_fichier=texte_erreur.match( /\/([^\/:]+):/ )[1];
            if(texte_erreur.match( / at ([^\.]+) \(/ ) === null){
                if(texte_erreur.match( / at ([^]+) \(/ ) === null){
                    /*
                      dans firefox, il n'y a pas de " at ":
                      #traite_inline@http://www.exemple.fr/toto.js:290:31
                    */
                    if(texte_erreur.match( /([^]+)@/ )){
                        nom_fonction=texte_erreur.match( /([^]+)@/ )[1];
                    }
                }else{
                    nom_fonction=texte_erreur.match( / at ([^]+) \(/ )[1];
                }
            }else{
                nom_fonction=texte_erreur.match( / at ([^\.]+) \(/ )[1];
            }
            var numero_de_ligne=modele_champ_erreur.exec( texte_erreur )[1];
            return('^G ' + nom_fichier + ' ' + nom_fonction + ' ' + numero_de_ligne + ' ');
        }
    }
    /*
      =============================================================================================================
    */
    lien_parent( module1 , champ_fils , id_span_libelle ){
        let o1='';
        o1+='<div class="rev_b_svg yy__1" data-rev_click="m1(n1(__interface1),f1(affiche_sous_fenetre1(';
        o1+=' pm1(m1(n1(' + module1 + '),f1(sous_liste1(';
        o1+='  $nom_champ_dans_parent1(' + champ_fils + ')';
        o1+='  $nom_libelle_dans_parent1(' + id_span_libelle + ')';
        o1+=' ))))';
        o1+=')))" title="selectionner" >' + this.les_svg.dossier + '</div>';
        /* 📁 */
        o1+='<div class="rev_b_svg yy__2" data-rev_click="m1(n1(__interface1),f1(';
        o1+=' maj_contenu(type_cible(valeur_constante),id(' + champ_fils + '),valeur(valeur_constante(\'\')))';
        o1+=' maj_contenu(type_cible(libelle_html),id(' + id_span_libelle + '),valeur(valeur_constante(\'*indéfini\')))';
        o1+='))" title="annuler" >' + this.les_svg.ensemble_vide + '</div>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    les_svg={
        "poubelle" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><g transform="translate(0 5)   "><path d=" m -40 -35 c 0 -15 80 -15 80 0 c 0 15 -80 15 -80 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:lime;stroke-width:4;"></path><path d=" M -9 -33 C -9 -47 9 -46 9 -33 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:5;"></path><path d=" m -40 -35 c 0 15 80 15 80 0 l 0 11 c 0 3 -5 5 -8 6 l 0 46 c 0 12 -64 12 -64 0 l 0 -46 c -3 -1 -8 -3 -8 -6 l 0 -11 " stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:lime;stroke-width:4;"></path><path d="M -32 -18 C -18 -12 18 -12 32 -18 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:4;"></path><path d="M -20 -14 L -20 35 " stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d="M 0 -13 L 0 36 " stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d="M 20 -14 L 20 35 " stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path></g></svg>' ,
        "dupliquer" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><g transform="   "><path d="M -15 -40 L -40 -40 L -40 20 L 20 20 L 20 -40 L -15 -40 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="   " style="stroke:black;fill:white;stroke-width:6;"></path><path d="M 5 -20 L -20 -20 L -20 40 L 40 40 L 40 -20 L 5 -20 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:6;"></path></g></svg>' ,
        "agrandir" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><path d=" M -19 -30 L 7 -26 C 10 -25 12 -23 14 -21  L 40 31 L 12 44 L 3 27 C 1 29 -2 27 -6 22 L -32 25 C -40 25 -44 12 -33 12 L -15 9 L -6 8 c 10 -3 12 -16 -3 -21 L -38 -21 C -46 -23 -45 -34 -36 -33 L -19 -30" stroke="rgb(0, 0, 0)" stroke-width="8" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:gold;stroke-width:6;"></path></svg>' ,
        "retrecir" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d="M -20 -32 L 11 -32 C 13 -32 17 -30 18 -26 L 46 31 L 17 46 L 7 26 C 5 28 1 26 -1 24 L -25 7 L -32 7 C -46 7 -46 -8 -37 -7 L -20 -8 L -7 0 A 6 5 8 1 0 -2 -16 L -18 -16 L -37 -7 C -44 -5 -50 -16 -43 -20 L -20 -32 " stroke="rgb(0, 0, 0)" stroke-width="8" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:gold;stroke-width:5;"></path><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect></svg>' ,
        "scotcher" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  100 100"><g transform=""><path d=" M 0 0 C 36 0 65 0 100 0 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.1;fill-opacity:0.5;"></path><path stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 68 63 C 97 66 97 82 92 89  C 86 96 48 98 36 87 C 25 77 51 79 74 83 C 67 76 72 74 62 69" style="stroke:fuchsia;fill:gold;stroke-width:5;fill-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 3 28 C 10 20 20 10 27 3 C 30 10 42 26 65 47 C 67 49 66 52 64 54 C 66 56 68 58 70 60 C 68 63 63 67 60 70 C 58 68 57 67 55 65 C 53 67 49 65 47 64 C 25 39 11 30 3 28 " style="stroke:rgb(0, 0, 0);fill:fuchsia;stroke-width:4;"></path></g></svg>' ,
        "copier_la_selection" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  100 100"><g transform="   "></g><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path><g transform="translate(2 -2)   "><path d=" M 18 15 C 24 15 31 15 38 15 C 38 4 58 4 59 15  C 65 15 72 15 79 15 C 82 15 84 18 84 21 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 21 C 13 18 15 15 18 15" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:6;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="23" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line></g></svg>' ,
        "copier_tout" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  100 100"><g transform="   "></g><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path><g transform="translate(2 -2)   "><path d=" M 18 15 C 24 15 31 15 38 15 C 38 4 58 4 59 15  C 65 15 72 15 79 15 C 82 15 84 18 84 21 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 21 C 13 18 15 15 18 15" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:6;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="48" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="78" width="48" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:6;"></line></g></svg>' ,
        "ensemble_vide" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d="M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:gold;stroke-width:0.1;fill-opacity:0.3;"></path><g transform="translate(0 2)   "><circle cx="0" cy="0" r="40" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:10;"></circle><path d=" M -40 40 l 80 -80 " stroke="rgb(0, 0, 0)" stroke-width="10" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="   "></path></g></svg>' ,
        "dossier" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d="M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;fill-opacity:0.3;"></path><g transform="translate(0 2)   "></g><path d=" M -42 -18 L -42 36 L 25 36 L 41 -7  L 26 -7 L 26 -18 L -42 -18" stroke="rgb(0, 0, 0)" stroke-width="10" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:gold;stroke-width:6;"></path><path stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="square" d=" M -38 -15 C -38 -22 -35 -24 -32 -24 L -21 -24 C -19 -24 -16 -22 -16 -15 " style="stroke:rgb(0, 0, 0);fill:red;stroke-width:1;"></path><path d=" M -39 33 L 23 33 L 37 -4  L -24 -4 L -39 33" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:khaki;stroke-width:0.1;"></path><path d=" M 28 -7 H -23 l -17 40 " stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:6;"></path></svg>' ,
        "editer" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><path d=" M -40 40 L -34 14 L -15 35  L -40 40 M -28 8 L 10 -30 L 30 -10 L -9 29 L -28 8 M 15 -35 L 20 -40 C 25 -45 45 -25 40 -20 L 35 -15 L 15 -35" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:gold;stroke-width:6;"></path></svg>' ,
        "disquette" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform="translate(-50 -50)   "><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d=" M 8 8 L 78 8 L 93 23  L 93 92 L 8 92 L 8 8" style="stroke:rgb(0, 0, 0);fill:gray;stroke-width:6;fill-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 20 13 L 20 16 " style="stroke:#424242;fill:dimgray;stroke-width:7;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 34 13 L 34 33 l 38 0 l 0 -20 l -38 0 " style="stroke:gainsboro;fill:gainsboro;stroke-width:5;stroke-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 22 44 L 22 87 l 56 0 l 0 -43 l -56 0 " style="stroke:gainsboro;fill:gainsboro;stroke-width:5;stroke-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 65 17L 65 29" style="stroke:#424242;fill:dimgray;stroke-width:8;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 86 85L 86 85" style="stroke:lightgrey;fill:lightgrey;stroke-width:5;stroke-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 24 85L 76 85" style="stroke:red;fill:lightgrey;stroke-width:9;stroke-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 29 50 L 72 50 " style="stroke:#424242;fill:dimgray;stroke-width:6;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 29 61 L 72 61 " style="stroke:#424242;fill:dimgray;stroke-width:6;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d="M 29 72 L 72 72 " style="stroke:#424242;fill:dimgray;stroke-width:6;"></path></g><path d=" M -50 -50 L 50 -50 l 0 100 l -100 0 l 0 -100 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>' ,
        "bdd" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d=" M -50 -50 L 50 -50 l 0 100 l -100 0 l 0 -100 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.1;fill-opacity:0.5;"></path><rect x="-45" y="-43" width="33" height="53" stroke="rgb(0, 0, 0)" stroke-width="9" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:6;"></rect><path d=" M -38 -33 l 19 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:6;"></path><path d=" M -38 -21 l 19 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d=" M -38 -9 l 19 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d=" M -38 3 C -38 3 -17 3 -19 3 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><rect x="9" y="-27" width="36" height="68" stroke="rgb(0, 0, 0)" stroke-width="9" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:yellow;stroke-width:6;"></rect><path d=" M 16 -17  l 22 0" stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:6;"></path><path d=" M 16 -5 l 22 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d=" M -12 -33 C 0 -33 -4 -5 8 -5 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:darkred;fill:white;stroke-width:6;"></path><path d="M 16 7 l 22 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d="M 16 19 l 22 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d="M 16 31 l 22 0 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path></svg>' ,
        "croix_carre" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><path d=" M -47 47 L 47 -47 M -47 -47 L 47 47 m -94 -94 l 94 0 l 0 94 l -94 0 l 0 -94 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:6;"></path></svg>' ,
        "cle" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform=""><path d=" M -7 7 A 24 25 48 1 1 7 -7 L 39 24 L 39 39 L 23 39 L 23 31 L 15 31 L 15 23 L 7 23 L 7 15 L 1 15 L -7 7 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:gold;stroke-width:4;"></path><circle cx="-21" cy="-21" r="6" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" style="stroke:red;fill:black;stroke-width:4;"></circle></g><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect></svg>' ,
        "maison" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform="translate(0 -0.125)   "><path d=" M -47 -3 L -1 -49 L 45 -3 V 5 H 39 V 48 H -41 V 5 H -47 V -3" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.01;"></path><path d="M -29 45 H -41 c 0 -4 2 -8 4 -4 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:lawngreen;fill:transparent;stroke-width:7;"></path><rect x="-23" y="-7" width="14" height="14" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:1;"></rect><rect x="5" y="-7" width="14" height="14" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:1;"></rect><rect x="5" y="21" width="14" height="14" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:1;"></rect><rect x="-23" y="16" width="14" height="32" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:red;stroke-width:1;"></rect><path d=" M -41 -1 l 40 -40 l 40 40" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:12;"></path><path d="M 1 46 H 41 c 0 -4 -2 -8 -4 -4 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:lawngreen;fill:transparent;stroke-width:6;"></path></g><rect x="-50.2" y="-50.1" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect></svg>' ,
        "message" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform=""><path stroke="rgb(0, 0, 0)" stroke-linejoin="miter" stroke-linecap="square" d=" M -35 -32 H 34 C 38 -32 41 -30 41 -26 V 14 C 41 18 38 21 34 21 H -14 L -30 38 V 21 H -35 C -39 21 -41 18 -41 14 V -26 C -41 -30 -39 -32 -35 -32" style="stroke:red;fill:white;stroke-width:3;"></path><circle cx="19" cy="-5" r="4" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" style="stroke:red;fill:red;stroke-width:3;"></circle><circle cx="0" cy="-5" r="4" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" style="stroke:red;fill:red;stroke-width:3;"></circle><circle cx="-19" cy="-5" r="4" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" style="stroke:red;fill:red;stroke-width:3;"></circle></g><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round"></rect></svg>' ,
        "parametres_et_aide" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g transform=""><path d=" M 45.5 0.5 C 42.6809 1.342 36.3994 3.1903 36.3994 3.1903 C 36.3994 3.1903 35.5974 8.5108 35.5974 8.5108 C 35.5974 8.5108 43.5008 13.764 43.5008 13.764 C 43.5008 13.764 41.0437 20.0248 41.0437 20.0248 C 41.0437 20.0248 31.6769 18.5 31.6769 18.5 C 31.6769 18.5 28.646 22.9456 28.646 22.9456 C 28.646 22.9456 33.4873 31.1078 33.4873 31.1078 C 33.4873 31.1078 28.5571 35.6824 28.5571 35.6824 C 28.5571 35.6824 20.7795 30.2446 20.7795 30.2446 C 20.7795 30.2446 16.1199 32.9349 16.1199 32.9349 L 15.2929 23.152 A 27.0834 27.1852 0 1 0 -10.8375 24.9759 L -10.1106 34.9005 C -11.2293 34.4537 -15.1198 32.9349 -15.1198 32.9349 C -15.1198 32.9349 -22 39.4712 -22 39.4712 C -22 39.4712 -27.557 35.6824 -27.557 35.6824 C -27.557 35.6824 -23.9862 26.8899 -23.9862 26.8899 C -23.9862 26.8899 -27.6459 22.9456 -27.6459 22.9456 C -27.6459 22.9456 -36.6808 25.8494 -36.6808 25.8494 C -36.6808 25.8494 -40.0436 20.0248 -40.0436 20.0248 C -40.0436 20.0248 -33.0114 13.6523 -33.0114 13.6523 C -33.0114 13.6523 -34.5974 8.5108 -34.5974 8.5108 C -34.5974 8.5108 -43.9973 7.2069 -43.9973 7.2069 C -43.9973 7.2069 -44.5 0.5 -44.5 0.5 C -44.5 0.5 -35.3994 -2.1903 -35.3994 -2.1903 C -35.3994 -2.1903 -34.5974 -7.5107 -34.5974 -7.5107 C -34.5974 -7.5107 -42.5007 -12.7639 -42.5007 -12.7639 C -42.5007 -12.7639 -40.0436 -19.0248 -40.0436 -19.0248 C -40.0436 -19.0248 -30.6769 -17.5 -30.6769 -17.5 C -30.6769 -17.5 -27.6459 -21.9456 -27.6459 -21.9456 C -27.6459 -21.9456 -32.4873 -30.1078 -32.4873 -30.1078 C -32.4873 -30.1078 -27.557 -34.6824 -27.557 -34.6824 C -27.557 -34.6824 -19.7795 -29.2446 -19.7795 -29.2446 C -19.7795 -29.2446 -15.1198 -31.9348 -15.1198 -31.9348 C -15.1198 -31.9348 -15.9403 -41.3893 -15.9403 -41.3893 C -15.9403 -41.3893 -9.5134 -43.3718 -9.5134 -43.3718 C -9.5134 -43.3718 -4.8655 -35.0979 -4.8655 -35.0979 C -4.8655 -35.0979 0.5 -35.5 0.5 -35.5 C 0.5 -35.5 3.8629 -44.3742 3.8629 -44.3742 C 3.8629 -44.3742 10.5135 -43.3718 10.5135 -43.3718 C 10.5135 -43.3718 11.1112 -33.9006 11.1112 -33.9006 C 11.1112 -33.9006 16.1199 -31.9348 16.1199 -31.9348 C 16.1199 -31.9348 23 -38.4712 23 -38.4712 C 23 -38.4712 28.5571 -34.6824 28.5571 -34.6824 C 28.5571 -34.6824 24.9862 -25.8898 24.9862 -25.8898 C 24.9862 -25.8898 28.646 -21.9456 28.646 -21.9456 C 28.646 -21.9456 37.6808 -24.8494 37.6808 -24.8494 C 37.6808 -24.8494 41.0437 -19.0248 41.0437 -19.0248 C 41.0437 -19.0248 34.0115 -12.6522 34.0115 -12.6522 C 34.0115 -12.6522 35.5974 -7.5107 35.5974 -7.5107 C 35.5974 -7.5107 44.9974 -6.2069 44.9974 -6.2069 C 44.9974 -6.2069 45.3492 -3.9389 45.5 0.4999 l -9.0735 2.6884" style="stroke-width:3;stroke:aqua;fill:blue;" transform="rotate(4.3643 0 0 )"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M -8.2065 1.78 H -20.6661 C -20.6611 -13.8722 -12.4045 -20.1366 0.8363 -20.1187 C 17.2228 -20.1399 21.3684 -9.7224 21.2567 1.728 C 21.0604 8.2125 16.5963 14.445 9.547 21.5076 C 5.4469 24.9578 5.6242 27.9612 5.6242 29.6487 H -4.6514 C -4.733 29.0432 -4.5537 23.2473 -3.1277 21.0394 C 0.0788 16.0362 8.7954 6.9633 8.8118 1.7364 C 9.1206 -5.6137 6.1839 -9.2975 0.4172 -9.0496 C -5.5121 -9.0383 -8.5234 -5.4297 -8.2728 1.6668 M -5.0464 35.2605 H 5.9006 L 4.1682 43.8533 H -2.6161 Z" style="stroke:forestgreen;fill:lime;stroke-width:3;"></path></g><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round"></rect></svg>' ,
        "deliler_vers_le_bas" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><g style="stroke-width:6" transform="   "></g><path d=" m 0 -47 h 24 v 8 h -19 v 13 h 19 v 8 h -19 v 13 h 19 v 8 h -19 v 11 h 35 l -40 34 l -40 -34 h 35 v -11 h -20 v -8 h 20 v -13 h -21 v -8 h 21 v -13 h -21 v -8 h 26 m 0 81 l 12 -10 h -25 l 13 10 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:aqua;stroke-width:3;"></path></svg>' ,
        "defiler_vers_le_haut" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><g style="stroke-width:6" transform="rotate(-180 0 0 )"><path d=" m 0 -47 h 24 v 8 h -19 v 13 h 19 v 8 h -19 v 13 h 19 v 8 h -19 v 11 h 35 l -40 34 l -40 -34 h 35 v -11 h -20 v -8 h 20 v -13 h -21 v -8 h 21 v -13 h -21 v -8 h 26 m 0 81 l 12 -10 h -25 l 13 10 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:aqua;stroke-width:3;"></path></g></svg>' ,
        "haut_de_page" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><g style="stroke-width:6" transform=""><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 0 -47 L 32 -47 L 32 -39 L 6 -39 L 30 -16 L 24 -10 L 5 -29 L 5 47 L -5 47 L -4 -29 L -24 -10 L -30 -17  L -6 -39 L -32 -39 L -32 -47 H 0" style="stroke:black;fill:aqua;stroke-width:3;"></path></g></svg>' ,
        "nouveau_document" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></rect><path d=" M 0 -35 C 5 -35 15 -35 25 -35 C 25 -20 25 20 25 35 C 15 35 -17 34 -25 35 C -25 25 -25 -5 -25 -10  L 0 -35 L 0 -10 L -25 -10 M 0 -2 L 0 26 M 14 12 L -15 12" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:white;stroke-width:8;"></path></svg>' ,
        "reordonner" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><path d="M 0 -46 L 0 -36 C 0 -14 25 12 25 -17 C 25 -46 0 -19 0 4 L 0 17 L 20 17 L 0 46 L -20 17 L 0 17 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:white;fill:black;stroke-width:6;"></path><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round"></rect></svg>' ,
        "renuméroter" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round"></rect><path d="M -45 -40 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M -45 -20 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M -45 0 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M -45 20 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M -45 40 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d=" m -19 0 c 11 0 4 -18 23 -20 l 0 12 l 15 -12  l -15 -12 l 0 12" stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M 26 -40 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M 26 -20 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M 26 0 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M 26 20 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d="M 26 40 l 18 0 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:8;"></path><path d=" M -19 -40 C -13 -40 -11 -36 -10 -26 C -9 -15 -9 -3 -9 7 C -9 11 -9 20 4 20 L 4 33 L 19 20 L 4 6 L 4 20 " stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:8;"></path></svg>',
        "loupe" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><rect x="-50" y="-50" width="100" height="100" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;stroke-opacity:0.5;opacity:0.5;"></rect><g><circle cx="14" cy="-14" r="29.25" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" transform="" style="stroke:red;fill:transparent;stroke-width:6;"></circle><path d=" M -4 8 C -10 6 -15 6 -18 9 C -23 14 -30 24 -37 32  A 8 8 0 1 0 -25 44 C -19 38 -10 28 -4 22 C -1 18 -1 14 -4 8" stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:6;"></path><circle cx="14" cy="-14" r="27" stroke="rgb(0, 0, 0)" stroke-width="6" fill="transparent" style="stroke:rgb(0, 0, 0);fill:#4FC3F7;stroke-width:0.01;"></circle><path d=" M -3 7  C 12 -12 12 -12 31 -35 A 4 4 0 1 1 -3 7" stroke="rgb(0, 0, 0)" stroke-width="0.01" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:lightskyblue;stroke-width:0.01;"></path></g></svg>'
    };
}
__gi1=new __interface1();