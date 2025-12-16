/*
  gère un menu
  #dessine_l_arbre
  construit_html_de_arbre
*/
class menu_arbre1{
    #racine_html=null;
    arbre=[];
    #id_div='';
    #id_original='';
    cle_aleatoire='';
    #options={
        "disposition_verticale" : 0 ,
        "hauteur_max_en_vh" : 80 ,
        "largeur_max" : 'calc(100% - 10px)' ,
        "fonction_appelee_apres_action" : null ,
         /* entre 5 et 30 */
        "decallage_entre_niveaux_en_px" : 15 ,
        "border_zone_principale" : '2px yellow outset' ,
         /* entre 10 et 30 */
        "border_element_racine" : '0px blue solid' ,
        "border_element_sous_menu" : '1px green solid' ,
        "border_bloc_sous_menu" : '1px hotpink solid' ,
        "background_color" : 'lightgrey' ,
        "class_du_bouton_replier" : '' ,
         /*
          fixed    : les sous menus en haut de page ne doivent pas défiler vers le haut ou le bas de page,
          absolute : les sous menus dans une page doivent défiler,
         */
        "position_des_sous_menu" : 'fixed'
    };
    #ref_div_contenant_les_boutons=null;
    #ref_div_contenant_la_zone_scrollable=null;
    /*
      =============================================================================================================
    */
    constructor( par_id_de_l_element , options ){
        if(document.getElementById( par_id_de_l_element ) === null){
            console.error( 'menu_arbre1 id="' + par_id_de_l_element + '" non trouvé :-/' );
            return;
        }
        let lst1=document.querySelectorAll( '[data-id_original_pour_menu="' + par_id_de_l_element + '"]' );
        if(lst1.length > 0){
            console.error( 'menu_arbre1 id="' + par_id_de_l_element + '" déjà défini :-/' );
            return;
        }
        this.#racine_html=document.getElementById( par_id_de_l_element );
        if(this.#racine_html.tagName.toUpperCase() !== 'UL'){
            console.error( 'menu_arbre1 la racine doit être un <ul>' );
            return;
        }
        if( typeof options !== 'object'){
            console.error( 'menu_arbre1 les options doivent être représentées sous forme d\'objet' );
            return;
        }
        this.#traite_options( options );
        /*
          
        */
        this.#id_original=par_id_de_l_element;
        this.arbre=[];
        this.construire_arbre_a_partir_de_ul_li( this.#racine_html , 0 );
        /* console.log( JSON.stringify( this.arbre ).replace( /\},\{/g , '},\n{' ) ); */
        /*
          on cache l'arbre original
        */
        this.#racine_html.style.display='none';
        /*
          et on construit un nouvel élément racine ( nextElementSibling )
        */
        this.cle_aleatoire=this.makeid( 20 );
        this.#id_div=par_id_de_l_element + '_' + this.cle_aleatoire;
        let t='';
        /* menu_001_WxqWd9iI5eAt99DMbmlF */
        let la_classe_racine='';
        if(this.#racine_html.className && this.#racine_html.className !== ''){
            la_classe_racine=' class="' + this.#racine_html.className + '" ';
        }
        /*
          la racine du menu
        */
        t+='<div id="' + this.#id_div + '" ' + la_classe_racine + ' data-id_original_pour_menu="' + par_id_de_l_element + '"  date-repere="racine"></div>';
        /*
          et on insert ce nouvel élément
        */
        this.#racine_html.insertAdjacentHTML( 'afterend' , t );
        this.#dessine_l_arbre( true );
        /*
          suppression du contenu de ul
        */
        this.#racine_html.innerHTML='';
        this.#ref_div_contenant_les_boutons=document.getElementById( this.#id_div );
        this.#ref_div_contenant_la_zone_scrollable=this.#ref_div_contenant_les_boutons.parentNode;
        /*
          si on fait défiler le menu, on ferme les sous menus ouverts
        */
        this.#ref_div_contenant_la_zone_scrollable.addEventListener( 'scroll' , this.#defilement_menu_listener );
        /*
          si on utilise la roulette sur un menu horizontal, on fait défiler
        */
        this.#ref_div_contenant_la_zone_scrollable.addEventListener( 'wheel' , this.#roulette_sur_menu_listener , false );
        /* debugger */
        /* document.getElementById( 'vv_nav_centre' ).addEventListener( 'wheel' , this.roulette_sur_menu , false ); */
    }
    #roulette_sur_menu_listener=this.#roulette_sur_menu.bind( this );
    #defilement_menu_listener=this.#defilement_menu.bind( this );
    #click_sur_ecran_listener=this.#click_sur_ecran.bind( this );
    /*
      =============================================================================================================
    */
    #fermer_le_menu( ref ){
        /* console.log( '#fermer_le_menu' ); */
        ref.style.display='none';
        /* let lst4=document.getElementById( this.#id_div ).querySelectorAll( '[data-bouton_plusmoins_de="' + ref.getAttribute( 'data-enfants_de' ) + '"]' ); */
        let lst4=document.querySelectorAll( '[data-bouton_plusmoins_de="' + ref.getAttribute( 'data-enfants_de' ) + '"]' );
        if(lst4.length > 0){
            try{
                lst4[0].innerHTML='+';
            } catch {}
        }
        document.removeEventListener( 'mousedown' , this.#click_sur_ecran_listener , false );
    }
    /*
      =============================================================================================================
    */
    #click_sur_ecran( event ){
        /*
          y-a-t-il un menu ouvert
        */
        /* let lst1=this.#ref_div_contenant_les_boutons.querySelectorAll( '[data-niveau="0"]' ); */
        let lst1=document.querySelectorAll( '[data-niveau="0"]' );
        /* console.log(lst1); */
        let le_menu=null;
        for( let i=0 ; i < lst1.length ; i++ ){
            if(lst1[i].style.display !== 'none'){
                let gb1=lst1[i].getBoundingClientRect();
                if(event.clientX < gb1.left || event.clientX > gb1.right || event.clientY > gb1.bottom || event.clientY < gb1.top){
                    if(event.target.getAttribute( 'data-replie' ) !== lst1[i].getAttribute( 'data-enfants_de' )){
                        le_menu=lst1[i];
                        break;
                    }
                }
            }
        }
        if(le_menu !== null){
            this.#fermer_le_menu( le_menu );
        }
    }
    /*
      =============================================================================================================
    */
    #roulette_sur_menu( event ){
        event.preventDefault();
        let elem=event.target;
        let continuer=50;
        while(continuer > 0){
            if(elem.nodeName === 'DIV'){
                if(this.#ref_div_contenant_la_zone_scrollable === elem){
                    continuer=-2;
                    break;
                }
            }else if(elem.nodeName === 'BODY'){
                continuer=-1;
                elem=null;
                break;
            }
            elem=elem.parentNode;
        }
        if(continuer === -2 && elem !== null){
            let scrollDelta=parseInt( this.#ref_div_contenant_la_zone_scrollable.getBoundingClientRect().width / 4 , 10 );
            this.#ref_div_contenant_la_zone_scrollable;
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
    #defilement_menu( e ){
        let aa=document.getElementById( 'les_enfants_du_menu_' + this.cle_aleatoire );
        let lst3=aa.getElementsByTagName( 'div' );
        for( let i=0 ; i < lst3.length ; i++ ){
            let niveau=lst3[i].getAttribute( 'data-niveau' );
            if(niveau === '0'){
                this.#fermer_le_menu( lst3[i] );
            }
        }
    }
    /*
      =============================================================================================================
      many thanks to https://bobbyhadz.com/blog/javascript-remove-event-listener-not-working
      =============================================================================================================
    */
    #souris_bas_plus_moins_listener=this.#souris_bas_plus_moins.bind( this );
    #souris_haut_listener=this.#souris_haut.bind( this );
    #doigt_haut_listener=this.#doigt_haut.bind( this );
    #doigt_bas_listener=this.#doigt_bas.bind( this );
    #souris_bas_branche_listener=this.#souris_bas_branche.bind( this );
    #souris_haut_branche_listener=this.#souris_haut_branche.bind( this );
    /* #souris_bouge_listener=this.#souris_bouge.bind( this ); */
    /* #doigt_bouge_listener=this.#doigt_bouge.bind( this ); */
    /*
      =============================================================================================================
    */
    #souris_haut_branche( e ){
        let cible=null;
        if(e.target.getAttribute( 'data-rev_click' )){
            cible=e.target;
        }else if(e.target.getAttribute( 'data-bouton_plusmoins_de' )){
        }else if(e.target.getAttribute( 'data-replie' )){
        }else if(e.target.getAttribute( 'data-num_conteneur_parent' )){
        }else if(e.target.getAttribute( 'data-libelle_noeud_menu1' )){
        }else{
            /*
              si par exemple on a un svg,on descend dans l'arborescence pour trouver une cible qui a un rev_click
            */
            let pare=e.target.parentNode;
            let continuer=50;
            while(continuer >= 0){
                if(pare.getAttribute( 'data-rev_click' )){
                    continuer=-1;
                    cible=pare;
                }else{
                    pare=pare.parentNode;
                }
            }
        }
        if(cible && cible.getAttribute( 'data-rev_click' )){
            if(cible.parentElement.getAttribute( 'data-num_conteneur_parent' )){
                /* console.log( 'cible.parentElement=' , cible.parentElement ); */
                let num_conteneur_parent=cible.parentElement.getAttribute( 'data-num_conteneur_parent' );
                /*
                  fermeture des autres menus
                */
                let lst3=document.getElementById( 'les_enfants_du_menu_' + this.cle_aleatoire ).getElementsByTagName( 'div' );
                for( let i=0 ; i < lst3.length ; i++ ){
                    let niveau=lst3[i].getAttribute( 'data-niveau' );
                    if(niveau === '0'){
                        if(lst3[i].getAttribute( 'data-enfants_de' ) === num_conteneur_parent){
                            this.#fermer_le_menu( lst3[i] );
                            break;
                        }
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #souris_bas_branche( e ){
        /* console.log('dans #souris_bas_branche' , e.target); */
    }
    /*
      =============================================================================================================
    */
    #doigt_bas( e ){
        window.addEventListener( 'touchend' , this.#doigt_haut_listener , false );
        /* window.addEventListener( 'touchmove' , this.#doigt_bouge_listener , false ); */
        document.getElementById( this.#id_div ).style.overflowY='hidden';
        e.stopPropagation();
        e.preventDefault();
        this.#souris_ou_doigt_bas( e.touches[0] );
    }
    /*
      =============================================================================================================
    */
    #doigt_haut( e ){
        window.removeEventListener( 'touchend' , this.#doigt_haut_listener , false );
        /* window.removeEventListener( 'touchmove' , this.#doigt_bouge_listener , false ); */
        /* console.log(e.changedTouches[0]) */
        try{
            document.getElementById( this.#id_div ).style.overflowY='scroll';
        } catch {}
        e.stopPropagation();
        this.#souris_ou_doigt_haut( e.changedTouches[0] );
    }
    /*
      =============================================================================================================
    */
    #souris_bas_plus_moins( e ){
        window.addEventListener( 'mouseup' , this.#souris_haut_listener , false );
        /* window.addEventListener( 'mousemove' , this.#souris_bouge_listener , false ); */
        this.#souris_ou_doigt_bas( e );
    }
    /*
      =============================================================================================================
    */
    #souris_haut( e ){
        window.removeEventListener( 'mouseup' , this.#souris_haut_listener , false );
        /* window.removeEventListener( 'mousemove' , this.#souris_bouge_listener , false ); */
        this.#souris_ou_doigt_haut( e );
    }
    /*
      =============================================================================================================
    */
    #souris_ou_doigt_haut( e ){
        /* rien ici */
    }
    /*
      =============================================================================================================
    */
    #souris_ou_doigt_bas( e ){
        var tar=e.target;
        let txt_log='';
        /* let tt=document.getElementById( this.#id_div ).getBoundingClientRect(); */
        if(tar.tagName.toLowerCase() === 'div' && tar.getAttribute( "data-replie" )){
            /*
              on a cliqué sur un bouton +/-
            */
            let id_interne=parseInt( tar.getAttribute( "data-replie" ) , 10 );
            let lst1=document.getElementById( 'les_enfants_du_menu_' + this.cle_aleatoire ).querySelectorAll( '[data-enfants_de="' + id_interne + '"]' );
            /*
              =============================================================================================
              ici, action sur +/- pour plier ou déplier un menu
              =============================================================================================
            */
            if(lst1[0].style.display === 'none'){
                lst1[0].style.display='flex';
                let aa=e.target.parentNode.getBoundingClientRect();
                let bod=document.body.getBoundingClientRect();
                if(lst1[0].getAttribute( 'data-niveau' ) === '0'){
                    lst1[0].style.top=(aa.y + aa.height) + 'px';
                    /* lst1[0].style.left=(aa.x - bod.x) + 'px'; */
                    lst1[0].style.left=aa.x + 'px';
                }
                tar.innerHTML='-';
                let num_conteneur_parent=e.target.getAttribute( 'data-num_conteneur_parent' );
                /* let lst2=document.getElementById( this.#id_div ).querySelectorAll( '[data-enfants_de="' + num_conteneur_parent + '"]' ); */
                let lst2=document.querySelectorAll( '[data-enfants_de="' + num_conteneur_parent + '"]' );
                lst2[0].style.width='';
                /*
                  déplacement du sous menu à gauche ou à droite si il dépasse de l'écran
                */
                let bb=lst2[0].getBoundingClientRect();
                if(bb.right > document.documentElement.clientWidth){
                    let a=parseInt( lst2[0].style.left );
                    a=a - (bb.right - document.documentElement.clientWidth) - 5;
                    lst2[0].style.left=a + 'px';
                }else if(bb.left <= 0){
                    if(aa.left > 5){
                        lst2[0].style.left=aa.left + 'px';
                    }else{
                        let a=parseInt( lst2[0].style.left );
                        lst2[0].style.left=((a - bb.left) + 5) + 'px';
                    }
                }
                /*
                  fermeture des autres menus
                */
                let autre_menu_ferme=false;
                let lst3=document.getElementById( 'les_enfants_du_menu_' + this.cle_aleatoire ).getElementsByTagName( 'div' );
                for( let i=0 ; i < lst3.length ; i++ ){
                    let niveau=lst3[i].getAttribute( 'data-niveau' );
                    if(niveau === '0'){
                        if(lst3[i].getAttribute( 'data-enfants_de' ) !== num_conteneur_parent){
                            if(lst3[i].style.display !== 'none'){
                                lst3[i].style.display='none';
                                /* let lst4=document.getElementById( this.#id_div ).querySelectorAll( '[data-bouton_plusmoins_de="' + lst3[i].getAttribute( 'data-enfants_de' ) + '"]' ); */
                                let lst4=document.querySelectorAll( '[data-bouton_plusmoins_de="' + lst3[i].getAttribute( 'data-enfants_de' ) + '"]' );
                                lst4[0].innerHTML='+';
                                autre_menu_ferme=true;
                            }
                        }
                    }
                }
                let le_sous_menu=lst2[0].getBoundingClientRect();
                let la_boite_parente_du_sous_menu=document.getElementById( 'dedans_' + num_conteneur_parent + '_' + this.cle_aleatoire ).getBoundingClientRect();
                if(la_boite_parente_du_sous_menu.width > le_sous_menu.width){
                    lst2[0].style.width=la_boite_parente_du_sous_menu.width + 'px';
                }
                if(lst1[0].getAttribute( 'data-niveau' ) === '0' && autre_menu_ferme === false){
                    /*
                      si on clique en dehors d'un menu ouvert il faut le fermer
                    */
                    document.addEventListener( 'mousedown' , this.#click_sur_ecran_listener , false );
                    /* console.log('on ouvre un menu' , lst1[0]); */
                }
            }else{
                console.log( 'ici' , lst1[0] );
                if(lst1[0].getAttribute( 'data-niveau' ) === '0'){
                    this.#fermer_le_menu( lst1[0] );
                    return;
                }else{
                    lst1[0].style.display='none';
                }
                tar.innerHTML='+';
                let num_conteneur_parent=e.target.getAttribute( 'data-num_conteneur_parent' );
                /* let lst2=document.getElementById( this.#id_div ).querySelectorAll( '[data-enfants_de="' + num_conteneur_parent + '"]' ); */
                let lst2=document.querySelectorAll( '[data-enfants_de="' + num_conteneur_parent + '"]' );
                /*
                  déplacement du sous menu à gauche ou à droite si il dépasse de l'écran
                */
                let le_sous_menu=lst2[0].getBoundingClientRect();
                let la_boite_parente_du_sous_menu=document.getElementById( 'dedans_' + num_conteneur_parent + '_' + this.cle_aleatoire ).getBoundingClientRect();
                if(la_boite_parente_du_sous_menu.right > le_sous_menu.right){
                    let valeur_courante=parseInt( lst2[0].style.left );
                    let nouvelle_valeur=valeur_courante + (la_boite_parente_du_sous_menu.right - le_sous_menu.right);
                    if(la_boite_parente_du_sous_menu.width > le_sous_menu.width){
                        nouvelle_valeur=nouvelle_valeur - (la_boite_parente_du_sous_menu.width - le_sous_menu.width);
                    }
                    lst2[0].style.left=nouvelle_valeur + 'px';
                }
                if(la_boite_parente_du_sous_menu.width > le_sous_menu.width){
                    lst2[0].style.width=la_boite_parente_du_sous_menu.width + 'px';
                }
            }
            for( let i=0 ; i < this.arbre.length ; i++ ){
                if(this.arbre[i].id_interne === id_interne){
                    if(tar.innerHTML === '+'){
                        this.arbre[i].replie=1;
                    }else{
                        this.arbre[i].replie=0;
                    }
                    break;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #reconstruit_ul_li( id_parent ){
        let t='';
        for( let i=0 ; i < this.arbre.length ; i++ ){
            if(this.arbre[i].id_interne_parent === id_parent){
                let attributs='';
                for(let j in this.arbre[i].attributs){
                    attributs+=j + '="' + this.arbre[i].attributs[j] + '"';
                }
                t+='<li' + (attributs !== '' ? ( ' ' + attributs ) : ( '' )) + '>' + this.arbre[i].contenu;
                if(this.arbre[i].contient_des_enfants > 0){
                    t+='<ul>';
                    t+=this.#reconstruit_ul_li( this.arbre[i].id_interne );
                    t+='</ul>';
                }
                t+='</li>';
            }
        }
        if(id_parent === 0){
            document.getElementById( this.#id_original ).innerHTML=t;
        }else{
            return t;
        }
    }
    /*
      =============================================================================================================
    */
    #dessine_l_arbre( init=false ){
        let le_html='';
        this.#calcul_des_enfants( 0 );
        let le_html_resultat=this.construit_html_de_arbre( 0 );
        if(init === false){
            this.#reconstruit_ul_li( 0 );
        }
    }
    /*
      =============================================================================================================
    */
    construit_html_de_arbre( id_interne_parent , niveau=0 , num_conteneur_parent=0 ){
        let le_html='';
        let le_sous_html='';
        let premier=true;
        let t='';
        let racine_contient_des_enfants=false;
        if(id_interne_parent === 0){
            /*
              =============================================================================================
              d'abord, la racine ...
              on met les titres des menus les uns après les autres en ajoutant éventuellement un bouton "+/-"
              =============================================================================================
            */
            for( let i=0 ; i < this.arbre.length ; i++ ){
                if(this.arbre[i].id_interne_parent === 0){
                    t='';
                    t+='<div';
                    t+=' id="dedans_' + this.arbre[i].id_interne + '_' + this.cle_aleatoire + '"';
                    t+=' data-position_pour_tri="dedans" ';
                    t+=' style="';
                    t+='   min-height:var(--h_mini_but);';
                    t+='   border:' + this.#options.border_element_racine + ';';
                    t+='   display:flex;';
                    t+='   flex-direction:row;';
                    t+='   justify-content:space-between;';
                    t+='   overflow-y:hidden;';
                    t+=' "';
                    t+=' data-attributs_originaux="' + JSON.stringify( this.arbre[i].attributs ).replace( /&/g , '&amp;' ).replace( /"/g , '&quot;' ).replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '"';
                    t+=' data-contenu_original="' + this.arbre[i].contenu.replace( /&/g , '&amp;' ).replace( /"/g , '&quot;' ).replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '"';
                    t+=' data-repere="racine"';
                    t+='>\n';
                    t+=' '.repeat( 4 ) + '<div style="text-align:left;display:flex;flex-grow:1;align-items:flex-start;" data-id_interne="' + this.arbre[i].id_interne + '" >\n';
                    /*
                      le contenu 
                    */
                    t+=(' '.repeat( 4 ) + this.arbre[i].contenu) + '\n';
                    if(this.arbre[i].contient_des_enfants > 0){
                        /*
                          le bouton +/- 
                        */
                        racine_contient_des_enfants=true;
                        let style_bloc_replie='display:none;';
                        let libelle_replie='-';
                        if(this.arbre[i].replie === 1 && this.arbre[i].contient_des_enfants >= 1){
                            libelle_replie='+';
                        }else{
                            style_bloc_replie='';
                        }
                        let style_replie='';
                        if(this.arbre[i].contient_des_enfants === 0){
                            style_replie='visibility:hidden;';
                        }
                        /*
                          bouton +/- au niveau de la racine
                        */
                        t+=' '.repeat( 4 ) + '<div data-replie="' + this.arbre[i].id_interne + '" ';
                        t+=' data-bouton_plusmoins_de="' + this.arbre[i].id_interne + '" ';
                        t+=' data-num_conteneur_parent="' + this.arbre[i].id_interne + '" ';
                        t+=' class="' + this.#options.class_du_bouton_replier + '"';
                        t+=' style="float:right;' + style_replie + 'min-width:2em;text-align:center;margin-left:1px;">';
                        t+=libelle_replie;
                        t+='</div>\n';
                    }
                    t+=' '.repeat( 4 ) + '</div>\n';
                    t+='</div>\n';
                    le_html+=t;
                }
            }
            /*
              =============================================================================================
              ... ensuite les enfants, cachés pour l'instant
              =============================================================================================
            */
            if(racine_contient_des_enfants === true){
                let aa=document.createElement( 'div' );
                aa.id='les_enfants_du_menu_' + this.cle_aleatoire;
                let tt='';
                for( let i=0 ; i < this.arbre.length ; i++ ){
                    if(this.arbre[i].id_interne_parent === 0){
                        if(this.arbre[i].contient_des_enfants > 0){
                            tt+='\n<!-- enfants de ' + this.arbre[i].id_interne + ' -->\n';
                            tt+='<div ';
                            tt+=' data-niveau="' + niveau + '" ';
                            tt+=' data-enfants_de="' + this.arbre[i].id_interne + '" ';
                            tt+=' style="';
                            tt+='  flex-direction:column;';
                            tt+='  position:' + this.#options.position_des_sous_menu + ';';
                            tt+='  top : 0;';
                            tt+='  left : 0;';
                            tt+='  border:' + this.#options.border_bloc_sous_menu + ';';
                            tt+='  margin-left:0px;';
                            tt+='  display:none;';
                            tt+='  z-index:2;';
                            tt+='  overflow-y:scroll;';
                            tt+='  max-height:60vh;';
                            tt+='  overscroll-behavior:none;';
                            tt+='  background:' + this.#options.background_color + ';">\n';
                            le_sous_html=this.construit_html_de_arbre( this.arbre[i].id_interne , niveau + 1 , this.arbre[i].id_interne );
                            tt+=le_sous_html;
                            tt+='</div>\n';
                        }
                    }
                }
                aa.innerHTML=tt;
                document.body.appendChild( aa );
                /*
                  t='\n\n<!-- les enfants  -->\n\n\n';
                  t+='<div id="les_enfants_du_menu_' + this.cle_aleatoire + '">';
                  for( let i=0 ; i < this.arbre.length ; i++ ){
                  if(this.arbre[i].id_interne_parent === 0){
                  if(this.arbre[i].contient_des_enfants > 0){
                  t+='\n<!-- enfants de ' + this.arbre[i].id_interne + ' -->\n';
                  t+='<div ';
                  t+=' data-niveau="' + niveau + '" ';
                  t+=' data-enfants_de="' + this.arbre[i].id_interne + '" ';
                  t+=' style="';
                  t+='  flex-direction:column;';
                  t+='  position:absolute;';
                  t+='  top : 0;';
                  t+='  left : 0;';
                  t+='  border:' + this.#options.border_bloc_sous_menu + ';';
                  t+='  margin-left:0px;';
                  t+='  display:none;';
                  t+='  background:' + this.#options.background_color + ';">\n';
                  le_sous_html=this.construit_html_de_arbre( this.arbre[i].id_interne , niveau + 1 , this.arbre[i].id_interne );
                  t+=le_sous_html;
                  t+='</div>\n';
                  }
                  }
                  }
                  t+='</div>';
                  le_html+=t;
                */
            }
            /*
              =============================================================================================
              màj du HTML
              =============================================================================================
            */
            /* console.log( 'le_html=\n' , le_html ); */
            document.getElementById( this.#id_div ).innerHTML=le_html;
            /*
              =============================================================================================
              ajout des évènements sur les boutons plier et déplier
              =============================================================================================
            */
            /* let lst2=document.getElementById( this.#id_div ).querySelectorAll( '[data-replie]' ); */
            let lst2=document.querySelectorAll( '[data-replie]' );
            for( let i=0 ; i < lst2.length ; i++ ){
                lst2[i].addEventListener( 'mousedown' , this.#souris_bas_plus_moins_listener , false );
            }
            /* let lst3=document.getElementById( this.#id_div ).querySelectorAll( '[data-position_pour_tri="dedans"]' ); */
            let lst3=document.querySelectorAll( '[data-position_pour_tri="dedans"]' );
            for( let i=0 ; i < lst3.length ; i++ ){
                /* lst3[i].addEventListener( 'mousedown' , this.#souris_bas_branche_listener , false ); */
                lst3[i].addEventListener( 'mouseup' , this.#souris_haut_branche_listener , false );
            }
        }else{
            for( let i=0 ; i < this.arbre.length ; i++ ){
                if(this.arbre[i].id_interne_parent === id_interne_parent){
                    /*
                      le bloc début
                    */
                    t='';
                    t+=' '.repeat( 4 * (niveau + 1) ) + '<div';
                    t+=' id="dedans_' + this.arbre[i].id_interne + '_' + this.cle_aleatoire + '"';
                    t+=' data-position_pour_tri="dedans" ';
                    t+=' style="';
                    t+='   min-height:var(--h_mini_but);';
                    t+='   border:' + this.#options.border_element_sous_menu + ';';
                    t+='   display:flex;';
                    /* flex */
                    t+='   flex-direction:row;';
                    t+='   justify-content:space-between;';
                    t+='   xxx-visibility:hidden;';
                    t+='   position:relative;';
                    t+='   top:0;';
                    t+='   z-index:' + niveau + ';';
                    t+=' "';
                    t+=' data-attributs_originaux="' + JSON.stringify( this.arbre[i].attributs ).replace( /&/g , '&amp;' ).replace( /"/g , '&quot;' ).replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '"';
                    t+=' data-contenu_original="' + this.arbre[i].contenu.replace( /&/g , '&amp;' ).replace( /"/g , '&quot;' ).replace( /</g , '&lt;' ).replace( />/g , '&gt;' ) + '"';
                    t+='>\n';
                    t+=' '.repeat( 4 * (niveau + 2) ) + '<div style="text-align:left;flex-grow:1;"  data-id_interne="' + this.arbre[i].id_interne + '" data-num_conteneur_parent="' + num_conteneur_parent + '" >\n';
                    t+=(' '.repeat( 4 * (niveau + 2) ) + this.arbre[i].contenu) + '\n';
                    t+=' '.repeat( 4 * (niveau + 2) ) + '</div>\n';
                    le_html+=t;
                    le_html+='';
                    let style_bloc_replie='display:none;';
                    let libelle_replie='-';
                    if(this.arbre[i].replie === 1 && this.arbre[i].contient_des_enfants > 1){
                        libelle_replie='+';
                    }else{
                        style_bloc_replie='';
                    }
                    let style_replie='';
                    if(this.arbre[i].contient_des_enfants === 0){
                        style_replie='visibility:hidden;';
                    }
                    if(this.arbre[i].contient_des_enfants !== 0){
                        /*
                          bouton +/- au niveau des sous menus
                        */
                        le_html+=' '.repeat( 4 * (niveau + 2) ) + '<div ';
                        le_html+=' data-replie="' + this.arbre[i].id_interne + '" ';
                        le_html+=' class="' + this.#options.class_du_bouton_replier + '" ';
                        le_html+=' data-num_conteneur_parent="' + num_conteneur_parent + '" ';
                        le_html+=' style="float:right;' + style_replie + 'min-width:2em;text-align:center;">';
                        le_html+=libelle_replie;
                        le_html+='</div>\n';
                    }
                    le_html+=' '.repeat( 4 * (niveau + 1) ) + '</div>\n';
                    /*
                      le bloc fin çi-dessus
                    */
                    /*  */
                    le_sous_html=this.construit_html_de_arbre( this.arbre[i].id_interne , niveau + 1 , num_conteneur_parent );
                    if(le_sous_html === ''){
                    }else{
                        /*  */
                        le_html+=' '.repeat( 4 * (niveau + 2) ) + '<div ';
                        le_html+=' data-niveau="' + niveau + '" ';
                        le_html+=' data-enfants_de="' + this.arbre[i].id_interne + '" ';
                        le_html+=' style="flex-direction:column;position:relative;top:0;border:' + this.#options.border_bloc_sous_menu + ';left:0;margin-left:' + this.#options.decallage_entre_niveaux_en_px + 'px;' + style_bloc_replie + '">\n';
                        le_html+=le_sous_html;
                        le_html+=' '.repeat( 4 * (niveau + 2) ) + '</div>\n';
                    }
                    /*  */
                }
            }
            return le_html;
        }
        return;
        debugger;
        /* return le_html; */
    }
    /*
      =============================================================================================================
    */
    makeid( length ){
        var result='';
        var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength=characters.length;
        for( var i=0 ; i < length ; i++ ){
            result+=characters.charAt( Math.floor( Math.random() * charactersLength ) );
        }
        return result;
    }
    /*
      =============================================================================================================
    */
    #calcul_des_enfants( id_parent ){
        let nb=0;
        if(id_parent === 0){
            for( let i=0 ; i < this.arbre.length ; i++ ){
                this.arbre[i].contient_des_enfants=0;
            }
        }
        for( let i=0 ; i < this.arbre.length ; i++ ){
            if(this.arbre[i].id_interne_parent === id_parent){
                this.#calcul_des_enfants( this.arbre[i].id_interne );
                nb++;
            }
        }
        if(id_parent > 0 && nb > 0){
            for( let i=0 ; i < this.arbre.length ; i++ ){
                if(this.arbre[i].id_interne === id_parent){
                    this.arbre[i].contient_des_enfants=nb;
                    break;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    construire_arbre_a_partir_de_ul_li( racine , id_interne_parent ){
        let lst=racine.childNodes;
        for( let i=0 ; i < lst.length ; i++ ){
            let elem=lst[i];
            if(elem.nodeName.toUpperCase() === 'LI' || elem.nodeName.toUpperCase() === 'UL'){
                if(elem.nodeName.toUpperCase() === 'LI'){
                    let id_interne=this.arbre.length + 1;
                    let les_attributs={};
                    for(let a in elem.attributes){
                        if( typeof elem.attributes[a] === 'object'){
                            les_attributs[elem.attributes[a].name]=elem.attributes[a].value;
                        }
                    }
                    this.arbre.push( {
                            "id_interne" : id_interne ,
                            "id_interne_parent" : id_interne_parent ,
                            "replie" : 1 ,
                            "contient_des_enfants" : 0 ,
                             /* "nodeName" : elem.nodeName , */
                            "contenu" : '' ,
                            "attributs" : les_attributs
                        } );
                    this.construire_arbre_a_partir_de_ul_li( elem , id_interne );
                }else if(elem.nodeName.toUpperCase() === 'UL'){
                    let replie=0;
                    for(let a in elem.attributes){
                        if( typeof elem.attributes[a] === 'object'){
                            if(elem.attributes[a].name === 'data-replie'){
                                this.arbre[this.arbre.length - 1].replie=1;
                                break;
                            }
                        }
                    }
                    this.construire_arbre_a_partir_de_ul_li( elem , id_interne_parent );
                }
            }else{
                if(elem.data){
                    let contenu='';
                    try{
                        if(this.arbre.length > 0){
                            contenu=this.arbre[this.arbre.length - 1].contenu + elem.data.trim();
                        }
                    }catch(e){
                        debugger;
                    }
                    if(contenu !== ''){
                        /* console.log('contenu='+contenu); */
                        this.arbre[this.arbre.length - 1].contenu=contenu;
                    }
                }else{
                    let contenu=elem.outerHTML;
                    /* console.log('contenu='+contenu); */
                    this.arbre[this.arbre.length - 1].contenu=this.arbre[this.arbre.length - 1].contenu + contenu;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #traite_options( options ){
        if(options.hasOwnProperty( 'hauteur_max_en_vh' )){
            if(options.hauteur_max_en_vh <= 80 && options.hauteur_max_en_vh >= 20){
                this.#options.hauteur_max_en_vh=options.hauteur_max_en_vh;
            }
        }
        if(options.hasOwnProperty( 'decallage_entre_niveaux_en_px' )){
            if(options.decallage_entre_niveaux_en_px <= 30 && options.decallage_entre_niveaux_en_px >= 5){
                this.#options.decallage_entre_niveaux_en_px=options.decallage_entre_niveaux_en_px;
            }
        }
        if(options.hasOwnProperty( 'largeur_max' )){
            this.#options.largeur_max=options.largeur_max;
        }
        if(options.hasOwnProperty( 'triable' )){
            if(options.triable === false){
                this.#options.triable=options.triable;
            }
        }
        if(options.hasOwnProperty( 'fonction_appelee_apres_action' ) && options.fonction_appelee_apres_action !== null){
            if( typeof options.fonction_appelee_apres_action === 'function'){
                this.#options.fonction_appelee_apres_action=options.fonction_appelee_apres_action;
            }
        }
        if(options.hasOwnProperty( 'disposition_verticale' )){
            if(options.disposition_verticale === 1){
                this.#options.disposition_verticale=1;
            }
        }
        if(options.hasOwnProperty( 'border_zone_principale' )){
            this.#options.border_zone_principale=options.border_zone_principale;
        }
        if(options.hasOwnProperty( 'border_element_racine' )){
            this.#options.border_element_racine=options.border_element_racine;
        }
        if(options.hasOwnProperty( 'border_element_sous_menu' )){
            this.#options.border_element_sous_menu=options.border_element_sous_menu;
        }
        if(options.hasOwnProperty( 'border_bloc_sous_menu' )){
            this.#options.border_bloc_sous_menu=options.border_bloc_sous_menu;
        }
        if(options.hasOwnProperty( 'background_color' )){
            this.#options.background_color=options.background_color;
        }
        if(options.hasOwnProperty( 'class_du_bouton_replier' )){
            this.#options.class_du_bouton_replier=options.class_du_bouton_replier;
        }
        if(options.hasOwnProperty( 'position_des_sous_menu' )){
            this.#options.position_des_sous_menu=options.position_des_sous_menu;
        }
    }
}
export{menu_arbre1 as menu_arbre1};