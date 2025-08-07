"use strict";
class tri_arbre1{
    #racine_html=null;
    arbre=[];
    #id_div='';
    #style_des_separateurs='min-height:10px;max-height:10px;border:1px red solid;font-size:0.7em;';
    #element_bouge=null;
    #position_scroll_dans_la_zone_de_tri=0;
    #tableau_des_positions_relatives=[];
    #id_cible_selectionne=0;
    #position_absolue_de_la_zone_de_tri=0;
    #hauteur_de_la_zone_de_tri=0;
    #decallage_max_de_la_zone_de_tri=0;
    #position_max=0;
    #position_min=0;
    #position_min_init=0;
    #delta=0;
    #decallage_vertical_page=0;
    #timeout_quand_trop_bas=null;
    #timeout_quand_trop_haut=null;
    #id_interne_du_bloc_a_deplacer='';
    #noeud_a_deplacer=null;
    cle_aleatoire='';
    #top_declenchement=0;
    #bottom_declenchement=0;
    #bottom_dernier=0;
    #hauteur_zone_tri=0;
    #zone_reference_top=null;
    #position_zone_reference_top=0;
    #position_zone_reference_top_init=0;
    #souris_appuyee=false;
    #top_zone_dynamique=0;
    
    #options={
        "triable" : true,
        "hauteur_max_en_vh" : 80 ,
        "largeur_max" : 'calc(100% - 50px)' ,
        "largeur_min" : '150px' ,
        "afficher_le_bouton_supprimer" : false ,
        "fonction_appelee_apres_action" : null ,
        "arborescent" : true,
        "class_du_bouton_deplacer" : '',
        "decallage_entre_niveaux_en_px" : 10,
        "boutons_du_menu" : [],
        "class_du_bouton_menu" : '',
    };
    /*
      =============================================================================================================
    */
    constructor( par_id_de_l_element , options ){
        if(document.getElementById( par_id_de_l_element ) === null){
            console.error( 'tri_arbre1 id="' + par_id_de_l_element + '" non trouvé :-/' );
            return;
        }
        let lst1=document.querySelectorAll( '[data-id_original_pour_tri="' + par_id_de_l_element + '"]' );
        if(lst1.length>0){
            console.error( 'tri_arbre1 id="' + par_id_de_l_element + '" déjà défini :-/' );
            return;
        }

        this.#racine_html=document.getElementById( par_id_de_l_element );
        if(this.#racine_html.tagName.toUpperCase() !== 'UL'){
            console.error( 'tri_arbre1 la racine doit être un <ul>' );
            return;
        }
        if( typeof options !== 'object'){
            console.error( 'tri_arbre1 les options doivent être représentées sous forme d\'objet' );
            return;
        }
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
        
        if(options.hasOwnProperty( 'largeur_min' )){
            this.#options.largeur_min=options.largeur_min;
        }
        
        if(options.hasOwnProperty( 'afficher_le_bouton_supprimer' )){
            if(options.afficher_le_bouton_supprimer === true){
                this.#options.afficher_le_bouton_supprimer=options.afficher_le_bouton_supprimer;
            }
        }
        if(options.hasOwnProperty( 'boutons_du_menu' )){
            if(Array.isArray(options.boutons_du_menu) === true){
                this.#options.boutons_du_menu=options.boutons_du_menu;
            }
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
        if(options.hasOwnProperty( 'arborescent' )){
            if(options.arborescent === false){
                this.#options.arborescent=options.arborescent;
            }
        }
        if(options.hasOwnProperty( 'class_du_bouton_deplacer' )){
            this.#options.class_du_bouton_deplacer=options.class_du_bouton_deplacer;
        }
        if(options.hasOwnProperty( 'class_du_bouton_menu' )){
            this.#options.class_du_bouton_menu=options.class_du_bouton_menu;
        }
        
        
        
        
        this.arbre=[];
        let id_interne_parent=0;
        this.construire_arbre_a_partir_de_ul_li( this.#racine_html , id_interne_parent );
        /* console.log( JSON.stringify( this.arbre ).replace( /\},\{/g , '},\n{' ) ); */
        this.#racine_html.style.display='none';
        this.cle_aleatoire=this.makeid( 20 );
        this.#id_div=par_id_de_l_element + '_' + this.cle_aleatoire ;
        let t='';
        t+='<div ';
        t+=' id="' + this.#id_div + '"';
        t+=' data-id_original_pour_tri="'+par_id_de_l_element+'"';
        t+=' style="';
        t+='  border:0px yellow solid;';
        t+='  user-select:none;max-height:' + this.#options.hauteur_max_en_vh + 'vh;';
        t+='  overflow-y:scroll;';
        t+='  max-width:' + this.#options.largeur_max + ';';
        t+='  min-width:' + this.#options.largeur_min + ';';
        t+=' "';
        t+='></div>';
        this.#racine_html.insertAdjacentHTML( 'afterend' , t );
        this.reference_zone_triable=document.getElementById(this.#id_div);
//        debugger;
        // this.reference_zone_triable.addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
        // this.reference_zone_triable.addEventListener( 'touchstart' , this.#doigt_bas.bind( this ) , false );
        
/*        window.addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
*/        
        this.#dessine_l_arbre();
    }
    /*
      =============================================================================================================
    */
    action_externe_sur_arbre(action,arbre){
     switch(action){
      case 'ajoute_branche' :
        console.log(action , JSON.stringify(arbre));
        this.arbre=arbre;
        this.#dessine_l_arbre();
        break;
     }
    }
    /*
      =============================================================================================================
      pour vérifier qu'on ne met pas une branche dans une sous branche
    */
    /*
      =============================================================================================================
      pour vérifier qu'on ne met pas une branche dans une sous branche
    */
    #verifie_id_cible_enfant_de( id_cible , id_a_deplacer ){
        if(id_cible === id_a_deplacer){
            return true;
        }
        let trouve=false;
        for( let i=0 ; i < this.arbre.length && trouve === false ; i++ ){
            if(this.arbre[i].id_interne === id_a_deplacer){
                for( let j=0 ; j < this.arbre.length && trouve === false ; j++ ){
                    if(this.arbre[j].id_interne_parent === id_a_deplacer){
                        if(this.arbre[j].id_interne === id_cible){
                            trouve=true;
                        }else{
                            trouve=this.#verifie_id_cible_enfant_de( id_cible , this.arbre[j].id_interne );
                        }
                    }
                }
            }
        }
        return trouve;
    }
    /*
      =============================================================================================================
    */
    #souris_haut( e ){
        console.log('ici');
        this.#souris_appuyee=false;
        window.removeEventListener( 'mouseup' , this.#souris_haut.bind( this ) , false );
        window.removeEventListener( 'mousemove' , this.#souris_bouge.bind( this ) , false );
        
        window.removeEventListener( 'touchend' , this.#doigt_haut.bind( this ) , false );
        window.removeEventListener( 'touchmove' , this.#doigt_bouge.bind( this ) , false );
        
        if(e.target.getAttribute('data-poignee_pour_tri') || e.target.getAttribute('data-position_pour_tri')){
            try{
                clearTimeout( this.#timeout_quand_trop_haut );
            } catch {}
            try{
                clearTimeout( this.#timeout_quand_trop_bas );
            } catch {}
            if(this.#element_bouge !== null){
                try{
                    this.#noeud_a_deplacer.style.boxShadow='';
                } catch {}
                let id_interne_du_bloc_a_deplacer=parseInt( this.#id_interne_du_bloc_a_deplacer , 10 );
                this.#id_interne_du_bloc_a_deplacer='';
                this.#noeud_a_deplacer=null;
                /* console.log('this.#id_cible_selectionne="'+this.#id_cible_selectionne+'"') */
                if(this.#id_cible_selectionne !== 0){
                    /* console.log( 'mettre element '+id_interne_du_bloc_a_deplacer+ ' ' + this.#id_cible_selectionne  ); */
                    let deplacement=this.#id_cible_selectionne.split( '_' );
                    /* console.log( deplacement );*/
                    /* dedans 2 */
                    let id_cible=parseInt( deplacement[1] , 10 );
                    let type_deplacement=deplacement[0];
                    if(this.#options.arborescent===false && type_deplacement==='dedans'){
                        type_deplacement='avant';
                    }
                    /*
                      vérifie qu'on ne met pas une branche dans une sous branche
                    */
                    if(this.#verifie_id_cible_enfant_de( id_cible , id_interne_du_bloc_a_deplacer ) === true){
                        /* si c'est le cas, on ne fait rien */
                    }else{
                        let tabi=null;
                        for( let i=0 ; i < this.arbre.length ; i++ ){
                            if(id_interne_du_bloc_a_deplacer === this.arbre[i].id_interne){
                                tabi=this.arbre.splice( i , 1 );
                                break;
                            }
                        }
                        for( let i=0 ; i < this.arbre.length ; i++ ){
                            if(id_cible === this.arbre[i].id_interne){
                                if(type_deplacement === 'apres'){
                                    tabi[0].id_interne_parent=this.arbre[i].id_interne_parent;
                                    this.arbre.splice( i + 1 , 0 , tabi[0] );
                                }else if(type_deplacement === 'avant'){
                                    tabi[0].id_interne_parent=this.arbre[i].id_interne_parent;
                                    this.arbre.splice( i , 0 , tabi[0] );
                                }else if(type_deplacement === 'dedans'){
                                    tabi[0].id_interne_parent=this.arbre[i].id_interne;
                                    this.arbre.splice( i + 1 , 0 , tabi[0] );
                                }
                                break;
                            }
                        }
                        this.#dessine_l_arbre();
                        if(this.#options.fonction_appelee_apres_action !== null){
                            this.#options.fonction_appelee_apres_action( this.arbre , this.#id_div );
                        }
                    }
                }
                this.#element_bouge=null;
                this.#position_absolue_de_la_zone_de_tri=0;
            }
        }else{
         /*
           console.log(e.target);
         */
        }
        this.#top_zone_dynamique=0;
        
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_bas(){
        if(this.#souris_appuyee===false){
          return;
        }
        clearTimeout( this.#timeout_quand_trop_bas );
        /* console.log('faire_defiler_quand_trop_bas'); */
        let a=parseInt( document.getElementById( this.#id_div ).scrollTop , 10 );
        document.getElementById( this.#id_div ).scrollTo( {"top" : a + 30 ,"left" : 0 , "behavior" : "smooth" } ); // ,
        /* scrollTo(0,a+20); */
        this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
        this.#top_zone_dynamique=document.getElementById( this.#id_div ).scrollTop;
        let tt=this.#zone_reference_top.getBoundingClientRect();
        this.#position_zone_reference_top=parseInt(tt.top,10)+document.documentElement.scrollTop;

        tt=this.#zone_reference_top.getBoundingClientRect();
        this.#position_min=parseInt(tt.top,10)+document.documentElement.scrollTop;
        this.#delta=this.#position_min-this.#position_min_init;
        
        /* console.log( this.#position_scroll_dans_la_zone_de_tri ); */
        this.#timeout_quand_trop_bas=setTimeout( () => {
            this.faire_defiler_quand_trop_bas();} , 50 );
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_haut(){
        if(this.#souris_appuyee===false){
          return;
        }
        clearTimeout( this.#timeout_quand_trop_haut );
        /* console.log('faire_defiler_quand_trop_haut'); */
        let a=parseInt( document.getElementById( this.#id_div ).scrollTop , 10 );
        document.getElementById( this.#id_div ).scrollTo( {"top" : a - 30 ,"left" : 0 ,"behavior" : "smooth"} );
        /* scrollTo(0,a+20); */
        this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
        this.#top_zone_dynamique=document.getElementById( this.#id_div ).scrollTop;
        
        let tt=this.#zone_reference_top.getBoundingClientRect();
        this.#position_zone_reference_top=parseInt(tt.top,10)+document.documentElement.scrollTop;
        
        tt=this.#zone_reference_top.getBoundingClientRect();
        this.#position_min=parseInt(tt.top,10)+document.documentElement.scrollTop;

        this.#delta=this.#position_min-this.#position_min_init;
        
        
        this.#timeout_quand_trop_haut=setTimeout( () => {
            this.faire_defiler_quand_trop_haut();} , 50 );
    }
    /*
      =============================================================================================================
    */
    #souris_bouge( e ){
//        console.log('aaaaaaaaaaae.pageY=',e.pageY,'document.documentElement.scrollTop',document.documentElement.scrollTop , this.#top_declenchement , this.#bottom_declenchement );
        document.getElementById('toto').innerHTML=e.pageY;
        if(this.#souris_appuyee===false){
          return;
        }
        if(this.#element_bouge !== null){
            let position_absolue_de_la_souris_en_y=e.pageY;
            //console.log('position_absolue_de_la_souris_en_y',position_absolue_de_la_souris_en_y);
            this.#id_cible_selectionne=0;
            //console.log(position_absolue_de_la_souris_en_y , this.#position_absolue_de_la_zone_de_tri);
            //if(position_absolue_de_la_souris_en_y - document.getElementById( this.#id_div ).scrollTop <= this.#position_absolue_de_la_zone_de_tri){
            if(position_absolue_de_la_souris_en_y < this.#top_declenchement){
                //console.log('=========== trop haut ============='); 
                if(this.#position_scroll_dans_la_zone_de_tri === 0){
                }else{
                    this.#timeout_quand_trop_haut=setTimeout( () => {
                        this.faire_defiler_quand_trop_haut();} , 50 );
                    return;
                }
            }else{
                try{
                    clearTimeout( this.#timeout_quand_trop_haut );
                } catch {}
            }
            if(position_absolue_de_la_souris_en_y > this.#bottom_declenchement){
                //console.log('=========== trop bas =============');
                if(this.#position_scroll_dans_la_zone_de_tri > this.#decallage_max_de_la_zone_de_tri){
                }else{
                    this.#timeout_quand_trop_bas=setTimeout( () => {
                        this.faire_defiler_quand_trop_bas();} , 20 );
                    return;
                }
            }else{
                try{
                    clearTimeout( this.#timeout_quand_trop_bas );
                } catch {}
            }
            /*max = 690*/
            //let position_relative_dans_zone=position_absolue_de_la_souris_en_y-this.#top_declenchement+this.#position_scroll_dans_la_zone_de_tri;
            console.log('this.#top_declenchement='+this.#top_declenchement);
            let position_relative_dans_zone=position_absolue_de_la_souris_en_y-this.#position_absolue_de_la_zone_de_tri;
            
            
            let xxx='pos absolue='+position_absolue_de_la_souris_en_y;
            xxx+='\n this.#delta='+this.#delta;
            xxx+='\n this.#position_absolue_de_la_zone_de_tri='+this.#position_absolue_de_la_zone_de_tri;
            xxx+='\n this.#position_scroll_dans_la_zone_de_tri='+this.#position_scroll_dans_la_zone_de_tri;
            xxx+='\n this.#position_min='+this.#position_min;
            xxx+='\n this.#position_min_init='+this.#position_min_init;
            xxx+='\n this.#position_zone_reference_top='+this.#position_zone_reference_top;
            xxx+='\n top_declen='+this.#top_declenchement;
            xxx+='\n document.documentElement.scrollTop='+document.documentElement.scrollTop;
            xxx+='\n this.#top_zone_dynamique='+this.#top_zone_dynamique;
            xxx+='\n this.#id_div.scrollHeight='+document.getElementById(this.#id_div).scrollHeight;
            xxx+='\n\n ====> prdz='+position_relative_dans_zone;
            console.log(xxx);
            
//            console.log(this.#position_absolue_de_la_zone_de_tri);
//            console.log(this.#tableau_des_positions_relatives);
            for( let i=0 ; false && i < this.#tableau_des_positions_relatives.length ; i++ ){
                /*
                if(position_absolue_de_la_souris_en_y + this.#position_scroll_dans_la_zone_de_tri >= this.#position_absolue_de_la_zone_de_tri + this.#tableau_des_positions_relatives[i].top
                       && position_absolue_de_la_souris_en_y + this.#position_scroll_dans_la_zone_de_tri < this.#position_absolue_de_la_zone_de_tri + this.#tableau_des_positions_relatives[i].bottom
                ){
                */
                if(position_relative_dans_zone  >=  this.#tableau_des_positions_relatives[i].top
                       && position_relative_dans_zone <=  this.#tableau_des_positions_relatives[i].bottom
                ){
                    console.log('dedans prdz='+position_relative_dans_zone)
                    this.#id_cible_selectionne=this.#tableau_des_positions_relatives[i].id;
                    /* console.log('dans ' + i + ' ' + this.#tableau_des_positions_relatives[i].id ); */
                    document.getElementById( this.#tableau_des_positions_relatives[i].id ).style.background='lightgrey';
                }else{
                        document.getElementById( this.#tableau_des_positions_relatives[i].id ).style.background='';
                    
                }
            }

        }
    }
    /*
      =============================================================================================================
    */
    #souris_bas( e ){
        this.#souris_appuyee=true;
        var tar=e.target;
        
        
        let txt_log='';
        let tt=document.getElementById( this.#id_div ).getBoundingClientRect()
        this.#top_declenchement=document.documentElement.scrollTop+parseInt(tt.top,10);
        //console.log('souris bas top_declenchement='+this.#top_declenchement)
        
        this.#bottom_declenchement=document.documentElement.scrollTop+parseInt(tt.bottom,10);
        
        console.log('%c\n\nDans souris_bas declenchement=' + this.#top_declenchement + ' ' + this.#bottom_declenchement , 'background:yellow;' )
        
        
        if(tar.tagName.toLowerCase() === 'div' && tar.getAttribute( "data-poignee_pour_tri" )){
            window.addEventListener( 'mouseup' , this.#souris_haut.bind( this ) , false );
            window.addEventListener( 'mousemove' , this.#souris_bouge.bind( this ) , false );
         
            window.addEventListener( 'touchend' , this.#doigt_haut.bind( this ) , false );
            window.addEventListener( 'touchmove' , this.#doigt_bouge.bind( this ) , false );
            
            tt=this.#zone_reference_top.getBoundingClientRect();
            this.#position_zone_reference_top=parseInt(tt.top,10)+document.documentElement.scrollTop;
            console.log('#zone_reference_top.top='+(this.#position_zone_reference_top)+' sc='+document.documentElement.scrollTop);
         
            tt=this.#zone_reference_top.getBoundingClientRect();
            this.#position_min=parseInt(tt.top,10)+document.documentElement.scrollTop;
            this.#position_min_init=this.#position_min;
            console.log('this.#position_min_init='+this.#position_min_init);
            
         
            /*
              on déplace un bloc
            */
            this.#element_bouge=tar;
            this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
            console.log( 'this.#position_scroll_dans_la_zone_de_tri='+this.#position_scroll_dans_la_zone_de_tri );
            this.#decallage_vertical_page=parseInt( document.documentElement.scrollTop , 10 );
            let pos=document.getElementById( this.#id_div ).getBoundingClientRect();
            
            tt=this.#zone_reference_top.getBoundingClientRect();
            
            this.#position_absolue_de_la_zone_de_tri=tt.top+document.documentElement.scrollTop;
            
            console.log(this.#top_declenchement , this.#position_absolue_de_la_zone_de_tri)
            this.#hauteur_de_la_zone_de_tri=pos.height;
            this.#decallage_max_de_la_zone_de_tri=this.#tableau_des_positions_relatives[this.#tableau_des_positions_relatives.length - 1].bottom - this.#hauteur_de_la_zone_de_tri;
            /* console.log( this.#hauteur_de_la_zone_de_tri , this.#tableau_des_positions_relatives[this.#tableau_des_positions_relatives.length - 1].bottom ); */
            /* console.log(this.#position_absolue_de_la_zone_de_tri); */
            this.#id_interne_du_bloc_a_deplacer=tar.getAttribute( "data-poignee_pour_tri" );
            /* console.log('this.#id_interne_du_bloc_a_deplacer='+this.#id_interne_du_bloc_a_deplacer); */
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-id_interne="' + this.#id_interne_du_bloc_a_deplacer + '"]' );
            if(lst1.length>0){
                this.#noeud_a_deplacer=lst1[0];
                try{
                    this.#noeud_a_deplacer.style.boxShadow='inset 0px 0px 16px #444';
                }catch(e){
                 debugger
                }
            }
        }else if(tar.tagName.toLowerCase() === 'div' && tar.getAttribute( "data-replie" )){
            let id_interne=parseInt(tar.getAttribute( "data-replie" ) , 10);
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-enfants_de="' + id_interne + '"]' );
            if(lst1[0].style.display === 'none'){
                lst1[0].style.display='';
                tar.innerHTML='-';
            }else{
                lst1[0].style.display='none';
                tar.innerHTML='+';
            }
            for(let i=0;i<this.arbre.length;i++){
             if(this.arbre[i].id_interne===id_interne){
              if(tar.innerHTML==='+'){
               this.arbre[i].replie=1;
              }else{
               this.arbre[i].replie=0;
              }
              break;
             }
            }
            
            this.calcul_des_positions_relatives();
        }else{
            this.calcul_des_positions_relatives();
        }
    }
    /*
      =============================================================================================================
    */
    #doigt_bas( e ){
//        document.documentElement.style.overflowY='hidden';
        document.body.style.overflowY='hidden';
        let lst1=document.querySelectorAll( 'dialog' );
        for(let i=0;i<lst1.length;i++){
            lst1[i].style.overflowY='hidden';
        }
        document.getElementById( this.#id_div ).style.overflowY='hidden';
        e.stopPropagation();
        this.#souris_bas( e.touches[0] );
    }
    /*
      =============================================================================================================
    */
    #doigt_bouge( e ){
        e.stopPropagation();
        this.#souris_bouge( e.touches[0]  );
    }
    /*
      =============================================================================================================
    */
    #doigt_haut( e ){
        /* console.log(e.changedTouches[0]) */
        document.body.style.overflowY='scroll';
        let lst1=document.querySelectorAll( 'dialog' );
        for(let i=0;i<lst1.length;i++){
            lst1[i].style.overflowY='scroll';
        }
        try{
            document.getElementById( this.#id_div ).style.overflowY='scroll';
        }catch{}
        e.stopPropagation();
        this.#souris_haut( e.changedTouches[0]  );
    }    
    /*
      =============================================================================================================
    */
    calcul_des_positions_relatives(){
        let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-position_pour_tri]' );
        this.#tableau_des_positions_relatives=[];
        if(lst1.length > 0){
            let txt_log='';
            this.#zone_reference_top=lst1[0];
            let tt=this.#zone_reference_top.getBoundingClientRect();
            let min=parseInt(tt.top,10); // this.#position_min

            for( let i=0 ; i < lst1.length ; i++ ){
                let pos=lst1[i].getBoundingClientRect();
//                console.log(pos.top); 
                this.#tableau_des_positions_relatives.push( {"top" : parseInt( pos.top - min , 10 ) ,"bottom" : parseInt( pos.bottom - min , 10 ) ,"id" : lst1[i].id} );
                this.#position_max=parseInt( pos.bottom - min , 10 );
                txt_log+='  ,   '+i+':'+parseInt( pos.top - min , 10 )+' <-> ' + parseInt( pos.bottom - min , 10 )+'('+pos.top+')';
                
            }
            //this.#position_min=min;
            //this.#position_min_init=this.#position_min;
            console.log('txt_log='+txt_log)
            
        }
        this.#element_bouge=null;
        console.log( '\ninit min max='+this.#position_min_init+' '+this.#position_min+' , 0->'+this.#position_max); 
    }
    /*
      =============================================================================================================
    */
    #dessine_l_arbre(){
        let le_html='';
        this.#calcul_des_enfants( 0 );
        let le_html_resultat=this.construit_html_de_arbre( 0 );
    }
    /*
      =============================================================================================================
    */
    construit_html_de_arbre( id_interne_parent , niveau=0 ){
        let le_html='';
        let le_sous_html='';
        let premier=true;
        let t='';
        for( let i=0 ; i < this.arbre.length ; i++ ){
            if(this.arbre[i].id_interne_parent === id_interne_parent){
                if(this.#options.boutons_du_menu.length>0 && i===0){
                        le_html+='<div id="menu_' + this.arbre[i].id_interne + '_'+ this.cle_aleatoire + '">';
                        for(let i=0;i<this.#options.boutons_du_menu.length;i++){
                         le_html+='<div id="menu_' + this.arbre[i].id_interne + '_'+ this.cle_aleatoire + '_'+i+'"';
                         le_html+=' class="'+this.#options.class_du_bouton_menu+'"';
                         le_html+=' style="display:inline-block;"';
                         le_html+='>'+this.#options.boutons_du_menu[i].libelle+'</div>';
                        }
                        le_html+='</div>';
                }
                if(premier === true){
                    if(this.#options.arborescent===false && i!==0){
                    }else{
                        le_html+='<div id="avant_' + this.arbre[i].id_interne + '_'+ this.cle_aleatoire + '" data-position_pour_tri="avant" style="' + this.#style_des_separateurs + '"></div>';
                    }
                    premier=false;
                }
                let replie='';
                if(this.arbre[i].replie === 1 && this.arbre[i].contient_des_enfants > 1){
                    replie='display:none;';
                }
                /*
                  le bloc début
                */
                t='';
                t+='<div';
                t+=' id="dedans_' + this.arbre[i].id_interne + '_'+ this.cle_aleatoire + '"';
                t+=' data-position_pour_tri="dedans" ';
                t+=' style="';
                t+='   min-height:30px;';
                t+='   border:1px blue solid;';
                t+='   display:flex;';
                t+='   flex-direction:row;';
                t+='   justify-content:space-between;';
                t+=' "';
                t+=' data-attributs_originaux="'+JSON.stringify(this.arbre[i].attributs).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'"';
                t+=' data-contenu_original="'+this.arbre[i].contenu.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'"';
                t+='>';
                t+='  <div';
                t+='    style="text-align:left;flex-grow:1;" ';
                t+='    data-id_interne="' + this.arbre[i].id_interne + '"';
                t+='  >'
                t+=this.arbre[i].contenu;
                t+='  </div>'
                le_html+=t;
                le_html+='';
                if(this.#options.afficher_le_bouton_supprimer === true){
                    if(this.arbre[i].contient_des_enfants > 0){
                        le_html+='<div data-supprime="' + this.arbre[i].id_interne + '" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>';
                    }else{
                        le_html+='<div data-supprime="' + this.arbre[i].id_interne + '" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">X</div>';
                    }
                }
                if(this.#options.arborescent===false){
                    /*
                      pas de boutons +/- pour une liste simple
                    */
                }else{
                    if(replie === ''){
                        if(this.arbre[i].contient_des_enfants === 0){
                            le_html+='<div data-replie="' + this.arbre[i].id_interne + '" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>';
                        }else{
                            le_html+='<div data-replie="' + this.arbre[i].id_interne + '" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">-</div>';
                        }
                    }else{
                        if(this.arbre[i].contient_des_enfants === 0){
                            le_html+='<div data-replie="' + this.arbre[i].id_interne + '" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>';
                        }else{
                            le_html+='<div data-replie="' + this.arbre[i].id_interne + '" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">+</div>';
                        }
                    }
                }
                if(this.#options.triable===false){
                    le_html+='<div data-poignee_pour_tri="' + this.arbre[i].id_interne + '" style="float:right;visibility:hidden;" class="'+this.#options.class_du_bouton_deplacer+'">↕</div>';
                }else{
                    le_html+='<div data-poignee_pour_tri="' + this.arbre[i].id_interne + '" style="float:right;" class="'+this.#options.class_du_bouton_deplacer+'">↕</div>';
                }
                le_html+='</div>';
                /*
                  le bloc fin çi-dessus
                */
                
                /*  */
                le_sous_html=this.construit_html_de_arbre( this.arbre[i].id_interne , niveau + 1 );
                /*  */
                le_html+='<div data-enfants_de="' + this.arbre[i].id_interne + '" style="border:0px pink solid;margin-left:'+this.#options.decallage_entre_niveaux_en_px+'px;' + replie + '">';
                le_html+=le_sous_html;
                le_html+='</div>';
                /*  */
                le_html+='<div  id="apres_' + this.arbre[i].id_interne + '_'+ this.cle_aleatoire + '" data-position_pour_tri="apres" style="' + this.#style_des_separateurs + '"></div>';
            }
        }
        if(id_interne_parent===0){
            document.getElementById( this.#id_div ).innerHTML=le_html;
            this.calcul_des_positions_relatives();
            
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-poignee_pour_tri]' );
            for(let i=0;i<lst1.length;i++){
             lst1[i].addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
             lst1[i].addEventListener( 'touchstart' , this.#doigt_bas.bind( this ) , false );
            }
            
            let lst2=document.getElementById( this.#id_div ).querySelectorAll( '[data-replie]' );
            for(let i=0;i<lst2.length;i++){
             lst2[i].addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
            }
            
            if(this.#options.boutons_du_menu.length>0){
                for(let i=0;i<this.#options.boutons_du_menu.length;i++){
                    let id='menu_' + this.arbre[i].id_interne + '_'+ this.cle_aleatoire + '_'+i;
                    //document.getElementById(id).addEventListener( 'mousedown' , this.#options.boutons_du_menu[i].fonction.bind( this ) , false );
                    document.getElementById(id).addEventListener( 'mousedown' , (e)=>{
                     this.#options.boutons_du_menu[i].fonction(e,this);
                    }, false );
                }
            }
            
            
        }else{
            return le_html;
        }

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
                    if(this.#options.arborescent === false){
                        id_interne_parent=0;
                    }
                    this.arbre.push( {
                            "id_interne" : id_interne ,
                            "id_interne_parent" : id_interne_parent ,
                            "replie" : 0 ,
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
                    let contenu=elem.data.trim();
                    if(contenu !== ''){
                        /* console.log('contenu='+contenu); */
                        this.arbre[this.arbre.length - 1].contenu=contenu;
                    }
                }else{
                    let contenu=elem.outerHTML;
                    /* console.log('contenu='+contenu); */
                    this.arbre[this.arbre.length - 1].contenu=contenu;
                }
            }
        }
    }
}