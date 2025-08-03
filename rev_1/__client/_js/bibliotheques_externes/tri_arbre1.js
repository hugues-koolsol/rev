"use strict";
class tri_arbre1{
    #racine_html=null;
    #arbre=[];
    #id_div='';
    #style_des_separateurs='min-height:10px;border:1px red solid;';
    #element_bouge=null;
    #position_scroll_dans_la_zone_de_tri=0;
    
    #tableau_des_positions=[];
    #id_cible_selectionne='';
    #position_initiale_de_la_zone_de_tri={};
    #position_max=0;
    #timeout_quand_trop_bas=null;
    #timeout_quand_trop_haut=null;
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
        this.#arbre=[];
        let id_interne_parent=0;
        this.construire_arbre_a_partir_de_ul_li( this.#racine_html , id_interne_parent );
//        console.log( JSON.stringify( this.#arbre ).replace( /\},\{/g , '},\n{' ) );
        this.#racine_html.style.display='none';
        this.#id_div=this.makeid(20)
        this.#racine_html.insertAdjacentHTML( 'afterend' , '<div id="'+this.#id_div+'" style="user-select:none;height:30vh;overflow-y:scroll;max-width:calc(100% - 50px)"></div>' );
        window.addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
        window.addEventListener( 'mouseup' , this.#souris_haut.bind( this ) , false );
        window.addEventListener( 'mousemove' , this.#souris_bouge.bind( this ) , false );
        
        this.dessine_l_arbre();
        
        
    }
    /*
      =============================================================================================================
    */
    #souris_haut( e ){
        /*console.log(e);*/
        if(this.#element_bouge===null){
         return;
        }
        if(this.#id_cible_selectionne!==''){
            let id_source=this.#element_bouge.getAttribute('data-poignee_pour_tri');
            console.log( 'mettre element '+id_source+ ' ' + this.#id_cible_selectionne  );
        }
        this.#element_bouge=null;
        for(let i=0;i<this.#tableau_des_positions.length;i++){
          document.getElementById(this.#tableau_des_positions[i].id).style.background='';
        }
        this.#position_initiale_de_la_zone_de_tri={};
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_bas(){
        clearTimeout(this.#timeout_quand_trop_bas);
        
        //console.log('faire_defiler_quand_trop_bas');
        let a=parseInt(document.getElementById(this.#id_div).scrollTop,10);
        document.getElementById(this.#id_div).scrollTo({"top" : a+30 ,"left" : 0 ,"behavior" : "smooth"});//scrollTo(0,a+20);
        this.#position_scroll_dans_la_zone_de_tri=document.getElementById(this.#id_div).scrollTop;
        //console.log('a=',a,this.#position_max);
        this.#timeout_quand_trop_bas=setTimeout(()=>{this.faire_defiler_quand_trop_bas()},50);
    }
    /*
      =============================================================================================================
    */
    faire_defiler_quand_trop_haut(){
        clearTimeout(this.#timeout_quand_trop_haut);
        
        //console.log('faire_defiler_quand_trop_haut');
        let a=parseInt(document.getElementById(this.#id_div).scrollTop,10);
        document.getElementById(this.#id_div).scrollTo({"top" : a-30 ,"left" : 0 ,"behavior" : "smooth"});//scrollTo(0,a+20);
        this.#position_scroll_dans_la_zone_de_tri=document.getElementById(this.#id_div).scrollTop;
        //console.log('a=',a,this.#position_max);
        this.#timeout_quand_trop_haut=setTimeout(()=>{this.faire_defiler_quand_trop_haut()},50);
        
    }
    /*
      =============================================================================================================
    */
    #souris_bouge( e ){
        if(this.#element_bouge!==null){
            this.#id_cible_selectionne='';
            let x1=e.pageY-this.#position_scroll_dans_la_zone_de_tri;
            let y1=this.#position_initiale_de_la_zone_de_tri.bottom-30-this.#position_scroll_dans_la_zone_de_tri;
            //console.log( x , y , x>y );
            if(x1>=y1){
               console.log('trop bas');
               this.#timeout_quand_trop_bas=setTimeout(()=>{this.faire_defiler_quand_trop_bas()},0);
               return
            }else{
                try{
                    clearTimeout(this.#timeout_quand_trop_bas);
                }catch{}
            }
            
            let x2=e.pageY;
            let y2=this.#position_initiale_de_la_zone_de_tri.top+30;
            //console.log( x , y , x>y );
            if(x2<=y2){
               console.log('trop haut');
               this.#timeout_quand_trop_haut=setTimeout(()=>{this.faire_defiler_quand_trop_haut()},0);
//               return
            }else{
                try{
                    clearTimeout(this.#timeout_quand_trop_haut);
                }catch{}
            }
            
            for(let i=0;i<this.#tableau_des_positions.length;i++){
             
             if(e.pageY+this.#position_scroll_dans_la_zone_de_tri>=this.#tableau_des_positions[i].top && e.pageY+this.#position_scroll_dans_la_zone_de_tri<=this.#tableau_des_positions[i].bottom){
              
              document.getElementById(this.#tableau_des_positions[i].id).style.background='lightgrey';
              //console.log(e.pageY , this.#position_initiale_de_la_zone_de_tri );
              if(e.pageY-this.#position_scroll_dans_la_zone_de_tri<this.#position_initiale_de_la_zone_de_tri.bottom){
                  //console.log('ici')
                  this.#id_cible_selectionne=this.#tableau_des_positions[i].id;
              }else if(e.pageY>this.#position_initiale_de_la_zone_de_tri.top){
                  this.#id_cible_selectionne=this.#tableau_des_positions[i].id;
              }
              
             }else{
              document.getElementById(this.#tableau_des_positions[i].id).style.background='';
             }
            }
            
        }
    }
    /*
      =============================================================================================================
    */
    #souris_bas( e ){
        var tar=e.target;
        if(tar.tagName.toLowerCase() === 'div' && tar.getAttribute("data-poignee_pour_tri")){
            this.#element_bouge=tar;
            this.#position_scroll_dans_la_zone_de_tri=document.getElementById(this.#id_div).scrollTop;
            console.log(this.#position_scroll_dans_la_zone_de_tri);
            let pos=document.getElementById(this.#id_div).getBoundingClientRect();
            this.#position_initiale_de_la_zone_de_tri={top:pos.top,bottom:pos.bottom}
            console.log(this.#position_initiale_de_la_zone_de_tri);
        }
     
    }
    /*
      =============================================================================================================
    */
    dessine_l_arbre(){
        let le_html='';
        let le_html_resultat=this.construit_html_de_arbre(0);
        
        document.getElementById(this.#id_div).innerHTML=le_html_resultat;
        
        let lst1=document.getElementById( this.#id_div ).querySelectorAll( '[data-position_pour_tri]' );
        this.#tableau_des_positions=[];
        for(let i=0;i<lst1.length;i++){
            let pos=lst1[i].getBoundingClientRect();
            //console.log(pos);
            this.#tableau_des_positions.push({top:pos.top,bottom:pos.bottom,id:lst1[i].id})
            this.#position_max=pos.bottom;
        }
        this.#element_bouge=null;
        console.log(this.#position_max , '\n' ,this.#tableau_des_positions);

        
        
        
    }
    /*
      =============================================================================================================
    */
    construit_html_de_arbre(id_interne_parent,niveau=0){
     
     let le_html='';
     let le_sous_html='';
     let premier=true;
     
     for(let i=0;i<this.#arbre.length;i++){
      if(this.#arbre[i].id_interne_parent===id_interne_parent){
       if(premier===true){
         le_html+='<div id="avant_'+this.#arbre[i].id_interne+'" data-position_pour_tri="avant" style="'+this.#style_des_separateurs+'"></div>';
         premier=false;
       }
       /**/
       le_html+='<div  id="dedans_'+this.#arbre[i].id_interne+'" data-position_pour_tri="dedans" style="min-height:30px;border:1px blue solid;display:flex;flex-direction:row;justify-content:sapce-between;">'

          le_html+='<div style="text-align:left;flex-grow:1;">'
          le_html+=this.#arbre[i].contenu;
          le_html+='</div>';
          le_html+='<div data-poignee_pour_tri="'+this.#arbre[i].id_interne+'" style="float:right;border:1px green solid;min-width:1em;text-align:center;cursor:ns-resize;">↕</div>';
       
       le_html+='</div>';
       /**/
       le_sous_html=this.construit_html_de_arbre(this.#arbre[i].id_interne,niveau+1);
       /**/
       le_html+='<div style="border:0px pink solid;margin-left:5px;">';
       le_html+=le_sous_html;
       le_html+='</div>';
       /**/
       le_html+='<div  id="apres_'+this.#arbre[i].id_interne+'" data-position_pour_tri="apres" style="'+this.#style_des_separateurs+'"></div>';
      }
     }
     
     return le_html;
    }
    

    /*
      =============================================================================================================
    */
    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
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
                     if(typeof elem.attributes[a]==='object'){
                       les_attributs[elem.attributes[a].name]=elem.attributes[a].value;
                     }
                    }
                    this.#arbre.push( {"id_interne" : id_interne ,"id_interne_parent" : id_interne_parent ,"nodeName" : elem.nodeName ,"contenu" : '',attributs:les_attributs} );
                    this.construire_arbre_a_partir_de_ul_li( elem , id_interne );
                }else if(elem.nodeName.toUpperCase() === 'UL'){
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