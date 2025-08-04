"use strict";
class tri_arbre1{
    #racine_html=null;
    #arbre=[];
    #id_div='';
    #style_des_separateurs='min-height:10px;max-height:10px;border:1px red solid;font-size:0.7em;';
    #element_bouge=null;
    #position_scroll_dans_la_zone_de_tri=0;
    #tableau_des_positions_relatives=[];
    #id_cible_selectionne=0;
    #position_absolue_de_la_zone_de_tri={"top" : 0 ,"bottom" : 0};
    #hauteur_de_la_zone_de_tri=0;
    #decallage_max_de_la_zone_de_tri=0;
    #position_max=0;
    #decallage_vertical_page=0;
    #timeout_quand_trop_bas=null;
    #timeout_quand_trop_haut=null;
    #id_interne_du_bloc_a_deplacer='';
    #noeud_a_deplacer=null;
    
    #options={
        "hauteur_max_en_vh" : 80 ,
        "largeur_max" : 'calc(100% - 50px)' ,
        "afficher_le_bouton_supprimer" : false ,
        "fonction_appelee_apres_action" : null ,
        "arborescent" : true,
        "class_du_bouton_deplacer" : '',
    };
    /*
      =============================================================================================================
    */
    constructor( par_id_de_l_element , options ){
        if(document.getElementById( par_id_de_l_element ) === null){
            console.error( 'tri_arbre1 id="' + par_id_de_l_element + '" non trouvé :-/' );
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
        if(options.hasOwnProperty( 'largeur_max' )){
            this.#options.largeur_max=options.largeur_max;
        }
        
        if(options.hasOwnProperty( 'afficher_le_bouton_supprimer' )){
            if(options.afficher_le_bouton_supprimer === true){
                this.#options.afficher_le_bouton_supprimer=options.afficher_le_bouton_supprimer;
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
        
        
        
        this.#arbre=[];
        let id_interne_parent=0;
        this.construire_arbre_a_partir_de_ul_li( this.#racine_html , id_interne_parent );
        /* console.log( JSON.stringify( this.#arbre ).replace( /\},\{/g , '},\n{' ) ); */
        this.#racine_html.style.display='none';
        this.#id_div=par_id_de_l_element + '_' + this.makeid( 20 );
        this.#racine_html.insertAdjacentHTML( 'afterend' , '<div id="' + this.#id_div + '" style="border:0px yellow solid;user-select:none;max-height:' + this.#options.hauteur_max_en_vh + 'vh;overflow-y:scroll;max-width:' + this.#options.largeur_max + '"></div>' );
        window.addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
        window.addEventListener( 'mouseup' , this.#souris_haut.bind( this ) , false );
        window.addEventListener( 'mousemove' , this.#souris_bouge.bind( this ) , false );
        this.#dessine_l_arbre();
    }
    /*
      =============================================================================================================
      pour vérifier qu'on ne met pas une branche dans une sous branche
    */
    #verifie_id_cible_enfant_de( id_cible , id_a_deplacer ){
        if(id_cible === id_a_deplacer){
            return true;
        }
        let trouve=false;
        for( let i=0 ; i < this.#arbre.length && trouve === false ; i++ ){
            if(this.#arbre[i].id_interne === id_a_deplacer){
                for( let j=0 ; j < this.#arbre.length && trouve === false ; j++ ){
                    if(this.#arbre[j].id_interne_parent === id_a_deplacer){
                        if(this.#arbre[j].id_interne === id_cible){
                            trouve=true;
                        }else{
                            trouve=this.#verifie_id_cible_enfant_de( id_cible , this.#arbre[j].id_interne );
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
                console.log( deplacement );
                /* dedans 2 */
                let id_cible=parseInt( deplacement[1] , 10 );
                let type_deplacement=deplacement[0];
                /*
                  vérifie qu'on ne met pas une branche dans une sous branche
                */
                if(this.#verifie_id_cible_enfant_de( id_cible , id_interne_du_bloc_a_deplacer ) === true){
                    /* si c'est le cas, on ne fait rien */
                }else{
                    let tabi=null;
                    for( let i=0 ; i < this.#arbre.length ; i++ ){
                        if(id_interne_du_bloc_a_deplacer === this.#arbre[i].id_interne){
                            tabi=this.#arbre.splice( i , 1 );
                            break;
                        }
                    }
                    for( let i=0 ; i < this.#arbre.length ; i++ ){
                        if(id_cible === this.#arbre[i].id_interne){
                            if(type_deplacement === 'apres'){
                                tabi[0].id_interne_parent=this.#arbre[i].id_interne_parent;
                                this.#arbre.splice( i + 1 , 0 , tabi[0] );
                            }else if(type_deplacement === 'avant'){
                                tabi[0].id_interne_parent=this.#arbre[i].id_interne_parent;
                                this.#arbre.splice( i , 0 , tabi[0] );
                            }else if(type_deplacement === 'dedans'){
                                tabi[0].id_interne_parent=this.#arbre[i].id_interne;
                                this.#arbre.splice( i + 1 , 0 , tabi[0] );
                            }
                            break;
                        }
                    }
                    this.#dessine_l_arbre();
                    if(this.#options.fonction_appelee_apres_action !== null){
                        this.#options.fonction_appelee_apres_action( this.#arbre );
                    }
                }
            }
        }
        this.#element_bouge=null;
        for( let i=0 ; i < this.#tableau_des_positions_relatives.length ; i++ ){
            document.getElementById( this.#tableau_des_positions_relatives[i].id ).style.background='';
        }
        this.#position_absolue_de_la_zone_de_tri={"top" : 0 ,"bottom" : 0};
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_bas(){
        clearTimeout( this.#timeout_quand_trop_bas );
        /* console.log('faire_defiler_quand_trop_bas'); */
        let a=parseInt( document.getElementById( this.#id_div ).scrollTop , 10 );
        document.getElementById( this.#id_div ).scrollTo( {"top" : a + 60 ,"left" : 0 ,"behavior" : "smooth"} );
        /* scrollTo(0,a+20); */
        this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
        /* console.log( this.#position_scroll_dans_la_zone_de_tri ); */
        /* console.log('a=',a,this.#position_max); */
        this.#timeout_quand_trop_bas=setTimeout( () => {
            this.faire_defiler_quand_trop_bas();} , 50 );
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_haut(){
        clearTimeout( this.#timeout_quand_trop_haut );
        /* console.log('faire_defiler_quand_trop_haut'); */
        let a=parseInt( document.getElementById( this.#id_div ).scrollTop , 10 );
        document.getElementById( this.#id_div ).scrollTo( {"top" : a - 60 ,"left" : 0 ,"behavior" : "smooth"} );
        /* scrollTo(0,a+20); */
        this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
        /* console.log('a=',a,this.#position_max); */
        this.#timeout_quand_trop_haut=setTimeout( () => {
            this.faire_defiler_quand_trop_haut();} , 50 );
    }
    /*
      =============================================================================================================
    */
    #souris_bouge( e ){
        let position_absolue_de_la_souris_en_y=e.pageY;
        if(this.#element_bouge !== null){
            /* console.log(position_absolue_de_la_souris_en_y , this.#position_absolue_de_la_zone_de_tri.top ); */
            this.#id_cible_selectionne=0;
            if(position_absolue_de_la_souris_en_y <= this.#position_absolue_de_la_zone_de_tri.top){
                /* console.log('=========== trop haut ============='); */
                if(this.#position_scroll_dans_la_zone_de_tri === 0){
                }else{
                    this.#timeout_quand_trop_haut=setTimeout( () => {
                        this.faire_defiler_quand_trop_haut();} , 0 );
                    return;
                }
            }else{
                try{
                    clearTimeout( this.#timeout_quand_trop_haut );
                } catch {}
            }
            if(position_absolue_de_la_souris_en_y >= this.#position_absolue_de_la_zone_de_tri.bottom){
                /* console.log('=========== trop bas ============='); */
                if(this.#position_scroll_dans_la_zone_de_tri > this.#decallage_max_de_la_zone_de_tri){
                }else{
                    this.#timeout_quand_trop_bas=setTimeout( () => {
                        this.faire_defiler_quand_trop_bas();} , 0 );
                    return;
                }
            }else{
                try{
                    clearTimeout( this.#timeout_quand_trop_bas );
                } catch {}
            }
            for( let i=0 ; i < this.#tableau_des_positions_relatives.length ; i++ ){
                if(position_absolue_de_la_souris_en_y + this.#position_scroll_dans_la_zone_de_tri >= this.#position_absolue_de_la_zone_de_tri.top + this.#tableau_des_positions_relatives[i].top
                       && position_absolue_de_la_souris_en_y + this.#position_scroll_dans_la_zone_de_tri < this.#position_absolue_de_la_zone_de_tri.top + this.#tableau_des_positions_relatives[i].bottom
                ){
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
        var tar=e.target;
        if(tar.tagName.toLowerCase() === 'div' && tar.getAttribute( "data-poignee_pour_tri" )){
            /*
              on déplace un bloc
            */
            this.#element_bouge=tar;
            this.#position_scroll_dans_la_zone_de_tri=document.getElementById( this.#id_div ).scrollTop;
            /* console.log( this.#position_scroll_dans_la_zone_de_tri ); */
            this.#decallage_vertical_page=parseInt( document.documentElement.scrollTop , 10 );
            let pos=document.getElementById( this.#id_div ).getBoundingClientRect();
            this.#position_absolue_de_la_zone_de_tri={
                 /*  */
                "top" : parseInt( pos.top + this.#decallage_vertical_page , 10 ) ,
                "bottom" : parseInt( pos.bottom + this.#decallage_vertical_page , 10 )
            };
            this.#hauteur_de_la_zone_de_tri=this.#position_absolue_de_la_zone_de_tri.bottom - this.#position_absolue_de_la_zone_de_tri.top;
            this.#decallage_max_de_la_zone_de_tri=this.#tableau_des_positions_relatives[this.#tableau_des_positions_relatives.length - 1].bottom - this.#hauteur_de_la_zone_de_tri;
            /* console.log( this.#hauteur_de_la_zone_de_tri , this.#tableau_des_positions_relatives[this.#tableau_des_positions_relatives.length - 1].bottom ); */
            /* console.log(this.#position_absolue_de_la_zone_de_tri); */
            this.#id_interne_du_bloc_a_deplacer=tar.getAttribute( "data-poignee_pour_tri" );
            /* console.log('this.#id_interne_du_bloc_a_deplacer='+this.#id_interne_du_bloc_a_deplacer); */
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-id_interne="' + this.#id_interne_du_bloc_a_deplacer + '"]' );
            /* console.log(lst1[0]); */
            this.#noeud_a_deplacer=lst1[0];
            this.#noeud_a_deplacer.style.boxShadow='inset 0px 0px 16px #444';
        }else if(tar.tagName.toLowerCase() === 'div' && tar.getAttribute( "data-replie" )){
            console.log( tar.getAttribute( "data-replie" ) );
            let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-enfants_de="' + tar.getAttribute( "data-replie" ) + '"]' );
            if(lst1[0].style.display === 'none'){
                lst1[0].style.display='';
                tar.innerHTML='-';
            }else{
                lst1[0].style.display='none';
                tar.innerHTML='+';
            }
            this.#calcul_des_positions_relatives();
        }
    }
    /*
      =============================================================================================================
    */
    #calcul_des_positions_relatives(){
        let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-position_pour_tri]' );
        this.#tableau_des_positions_relatives=[];
        if(lst1.length > 0){
            let top_premier=lst1[0].getBoundingClientRect();
            top_premier=top_premier.top;
            for( let i=0 ; i < lst1.length ; i++ ){
                let pos=lst1[i].getBoundingClientRect();
                /* console.log(pos); */
                this.#tableau_des_positions_relatives.push( {"top" : parseInt( pos.top - top_premier , 10 ) ,"bottom" : parseInt( pos.bottom - top_premier , 10 ) ,"id" : lst1[i].id} );
                this.#position_max=pos.bottom;
            }
        }
        this.#element_bouge=null;
        /* console.log(this.#position_max , '\n' ,this.#tableau_des_positions_relatives); */
    }
    /*
      =============================================================================================================
    */
    #dessine_l_arbre(){
        let le_html='';
        this.#calcul_des_enfants( 0 );
        let le_html_resultat=this.construit_html_de_arbre( 0 );
        document.getElementById( this.#id_div ).innerHTML=le_html_resultat;
        this.#calcul_des_positions_relatives();
    }
    /*
      =============================================================================================================
    */
    construit_html_de_arbre( id_interne_parent , niveau=0 ){
        let le_html='';
        let le_sous_html='';
        let premier=true;
        for( let i=0 ; i < this.#arbre.length ; i++ ){
            if(this.#arbre[i].id_interne_parent === id_interne_parent){
                if(premier === true){
                    le_html+='<div id="avant_' + this.#arbre[i].id_interne + '" data-position_pour_tri="avant" style="' + this.#style_des_separateurs + '"></div>';
                    premier=false;
                }
                let replie='';
                if(this.#arbre[i].replie === 1 && this.#arbre[i].contient_des_enfants > 1){
                    replie='display:none;';
                }
                /*  */
                le_html+='<div  id="dedans_' + this.#arbre[i].id_interne + '" data-position_pour_tri="dedans" style="min-height:30px;border:1px blue solid;display:flex;flex-direction:row;justify-content:sapce-between;">';
                le_html+='<div style="text-align:left;flex-grow:1;" data-id_interne="' + this.#arbre[i].id_interne + '">';
                le_html+=this.#arbre[i].contenu;
                le_html+='</div>';
                if(this.#options.afficher_le_bouton_supprimer === true){
                    if(this.#arbre[i].contient_des_enfants > 0){
                        le_html+='<div data-supprime="' + this.#arbre[i].id_interne + '" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>';
                    }else{
                        le_html+='<div data-supprime="' + this.#arbre[i].id_interne + '" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">X</div>';
                    }
                }
                if(replie === ''){
                    if(this.#arbre[i].contient_des_enfants === 0){
                        le_html+='<div data-replie="' + this.#arbre[i].id_interne + '" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>';
                    }else{
                        le_html+='<div data-replie="' + this.#arbre[i].id_interne + '" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">-</div>';
                    }
                }else{
                    if(this.#arbre[i].contient_des_enfants === 0){
                        le_html+='<div data-replie="' + this.#arbre[i].id_interne + '" style="float:right;border:1px white solid;min-width:1em;text-align:center;"></div>';
                    }else{
                        le_html+='<div data-replie="' + this.#arbre[i].id_interne + '" style="float:right;border:1px hotpink solid;min-width:1em;text-align:center;">+</div>';
                    }
                }
                le_html+='<div data-poignee_pour_tri="' + this.#arbre[i].id_interne + '" style="float:right;" class="'+this.#options.class_du_bouton_deplacer+'">↕</div>';
                le_html+='</div>';
                /*  */
                le_sous_html=this.construit_html_de_arbre( this.#arbre[i].id_interne , niveau + 1 );
                /*  */
                le_html+='<div data-enfants_de="' + this.#arbre[i].id_interne + '" style="border:0px pink solid;margin-left:5px;' + replie + '">';
                le_html+=le_sous_html;
                le_html+='</div>';
                /*  */
                le_html+='<div  id="apres_' + this.#arbre[i].id_interne + '" data-position_pour_tri="apres" style="' + this.#style_des_separateurs + '"></div>';
            }
        }
        return le_html;
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
            for( let i=0 ; i < this.#arbre.length ; i++ ){
                this.#arbre[i].contient_des_enfants=0;
            }
        }
        for( let i=0 ; i < this.#arbre.length ; i++ ){
            if(this.#arbre[i].id_interne_parent === id_parent){
                this.#calcul_des_enfants( this.#arbre[i].id_interne );
                nb++;
            }
        }
        if(id_parent > 0 && nb > 0){
            for( let i=0 ; i < this.#arbre.length ; i++ ){
                if(this.#arbre[i].id_interne === id_parent){
                    this.#arbre[i].contient_des_enfants=nb;
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
                    let id_interne=this.#arbre.length + 1;
                    let les_attributs={};
                    for(let a in elem.attributes){
                        if( typeof elem.attributes[a] === 'object'){
                            les_attributs[elem.attributes[a].name]=elem.attributes[a].value;
                        }
                    }
                    if(this.#options.arborescent === false){
                        id_interne_parent=0;
                    }
                    this.#arbre.push( {
                            "id_interne" : id_interne ,
                            "id_interne_parent" : id_interne_parent ,
                            "replie" : 0 ,
                            "contient_des_enfants" : 0 ,
                            "nodeName" : elem.nodeName ,
                            "contenu" : '' ,
                            "attributs" : les_attributs
                        } );
                    this.construire_arbre_a_partir_de_ul_li( elem , id_interne );
                }else if(elem.nodeName.toUpperCase() === 'UL'){
                    let replie=0;
                    for(let a in elem.attributes){
                        if( typeof elem.attributes[a] === 'object'){
                            if(elem.attributes[a].name === 'data-replie'){
                                this.#arbre[this.#arbre.length - 1].replie=1;
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
                        this.#arbre[this.#arbre.length - 1].contenu=contenu;
                    }
                }else{
                    let contenu=elem.outerHTML;
                    /* console.log('contenu='+contenu); */
                    this.#arbre[this.#arbre.length - 1].contenu=contenu;
                }
            }
        }
    }
}