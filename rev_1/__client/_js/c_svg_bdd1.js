/*
  voir #dessiner_le_svg
  ancien module_svg_bdd.js ,  classe=module_svg_bdd
*/
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
import {c_rev_vers_sql1} from './c_rev_vers_sql1.js';
class c_svg_bdd1{
    /*
      permet d'utiliser le nom de la variable dans des href="nom_de_la_variable.methode()"  
    */
    #nom_de_la_variable='';
    /*
      référence de l'élément html "div" contenant le svg
    */
    #div_svg=null;
    /*
      référence de l'élément html "svg"
    */
    #svg_dessin=null;
    /*
      taille de la bordure des boites
    */
    #taille_bordure=0;
    #id_text_area_contenant_les_id_des_bases='';
    /*
      sert pour le zoom
    */
    #_dssvg={"zoom1" : 1 ,"viewBoxInit" : [] ,"parametres" : {"rayonReference" : 16}};
    #id_svg_de_la_base_en_cours=0;
    #id_bdd_de_la_base_en_cours=0;
    /* arbre des bases : #arbre{id_de_la_base:{arbre_svg:{id:id,id_parent:id_parent,type_element:type_element,proprietes:{x:y}}}} */
    #arbre={};
    #rayonPoint=this.#_dssvg.parametres.rayonReference / this.#_dssvg.zoom1;
    #strkWiTexteSousPoignees=this.#rayonPoint / 20;
    #fontSiTexteSousPoignees=this.#rayonPoint;
    #hauteur_du_svg=0;
    #largeur_du_svg=0;
    #souris_element_a_deplacer='';
    #souris_init_objet={"x" : 0 ,"y" : 0 ,"elem_bouge" : null ,"param_bouge" : {}};
    #svg_tableaux_des_references_amont_aval={};
    #svg_souris_delta_x=0;
    #svg_souris_delta_y=0;
    #propriete_pour_deplacement_x='pageX';
    #propriete_pour_deplacement_y='pageY';
    #debut_de_click=0;
    #position_min_gauche_de_reference=999999;
    #hauteur_de_boite=20;
    #hauteur_de_boite_affichage=30;
    #liste_des_meta_base=[
        'nom_long_de_la_base',
        'nom_court_de_la_base',
        'nom_bref_de_la_base',
        'environnement_de_la_base',
        'default_charset',
        'collate'
    ];
    #liste_des_meta_table=['nom_long_de_la_table','nom_court_de_la_table','nom_bref_de_la_table','default_charset','collate'];
    #chemin_module1='';
    __m_rev_vers_sql1=null;
    /*
      =============================================================================================================
      function constructor
    */
    constructor( obj_init ){
        this.#chemin_module1=obj_init.chemin_module1;
        /* console.log( 'ici' ); */
        let sortable=document.createElement( 'script' );
        sortable.setAttribute( 'type' , "text/javascript" );
        sortable.setAttribute( 'src' , "_js/bibliotheques_externes/Sortable.js" );
        document.getElementsByTagName( 'head' )[0].appendChild( sortable );
    }
    /*
      =============================================================================================================
    */
    init0( obj_init ){
        this.__m_rev_vers_sql1=new c_rev_vers_sql1( '__m_rev_vers_sql1' , __gi1.__m_rev1 );
        /* nom_de_la_variable , nom_de_la_div_contenant_le_svg , taille_bordure , id_text_area_contenant_les_id_des_bases ]{ */
        let nom_de_la_div_contenant_le_svg=obj_init.hasOwnProperty( 'nom_de_la_div_contenant_le_svg' ) ? ( obj_init.nom_de_la_div_contenant_le_svg ) : ( null );
        let taille_bordure=__gi1.css_dimensions.t_border;
        let id_text_area_contenant_les_id_des_bases=obj_init.hasOwnProperty( 'id_text_area_contenant_les_id_des_bases' ) ? ( obj_init.id_text_area_contenant_les_id_des_bases ) : ( null );
        /* this.#hauteur_de_boite=__gi1.css_dimensions.t_police + 2 * __gi1.css_dimensions.t_padding + 2 * this.#taille_bordure; */
        /* this.#hauteur_de_boite_affichage=this.#hauteur_de_boite + 3 * this.#taille_bordure; */
        /* this.#nom_de_la_variable=nom_de_la_variable; */
        /*
          si on utilise ce module en dehors d'un dessin svg par exemple pour comparer des tableaux des tables/champs
          la div svg est nulle
        */
        var le_test=null;
        if(nom_de_la_div_contenant_le_svg !== null){
            try{
                var le_test=document.getElementById( nom_de_la_div_contenant_le_svg );
            }catch(e){}
        }
        if(le_test === null){
            nom_de_la_div_contenant_le_svg=null;
        }
        if(nom_de_la_div_contenant_le_svg !== null && le_test !== null){
            __gi1.supprimer_les_messages();
            /* supprimer_les_messages */
            this.#div_svg=document.getElementById( nom_de_la_div_contenant_le_svg );
            this.#taille_bordure=taille_bordure;
            this.#id_text_area_contenant_les_id_des_bases=id_text_area_contenant_les_id_des_bases;
            this.#div_svg.style.maxWidth='calc(100% - var(--t_boutons_carres))';
            this.#div_svg.style.width='calc(100% - var(--t_boutons_carres))';
            this.#div_svg.style.maxHeight='70vh';
            this.#div_svg.style.height='70vh';
            var e=this.#div_svg.getElementsByTagName( 'svg' );
            var i=0;
            for( i=0 ; i < e.length ; i++ ){
                this.#svg_dessin=e[i];
                break;
            }
            var taillereelle=this.#div_svg.getBoundingClientRect();
            var hauteur_de_la_div=taillereelle.height;
            var largeur_de_la_div=taillereelle.width;
            this.#div_svg.style.height=hauteur_de_la_div + 'px';
            this.#div_svg.style.width=largeur_de_la_div + 'px';
            /*
              
              le viewbox du svg est la taille de la div -2*bordure
            */
            this.#hauteur_du_svg=hauteur_de_la_div - 2 * this.#taille_bordure;
            this.#largeur_du_svg=largeur_de_la_div - 2 * this.#taille_bordure;
            this.#hauteur_de_boite=__gi1.css_dimensions.t_police + 2 * __gi1.css_dimensions.t_padding + 2 * this.#taille_bordure;
            this.#hauteur_de_boite_affichage=this.#hauteur_de_boite + 1 * this.#taille_bordure;
            this.#svg_dessin.setAttribute( 'viewBox' , '0 0 ' + this.#largeur_du_svg + ' ' + this.#hauteur_du_svg );
            this.#svg_dessin.style.width=this.#largeur_du_svg + 'px';
            this.#svg_dessin.style.height=this.#hauteur_du_svg + 'px';
            this.#_dssvg.viewBoxInit=[0,0,this.#largeur_du_svg,this.#hauteur_du_svg];
            this.#div_svg.addEventListener( 'wheel' , this.zoom_avec_roulette.bind( this ) , false );
            window.addEventListener( 'mousedown' , this.#souris_bas.bind( this ) , false );
            window.addEventListener( 'mouseup' , this.#souris_haut.bind( this ) , false );
            window.addEventListener( 'mousemove' , this.#souris_bouge.bind( this ) , false );
            this.#svg_dessin.addEventListener( 'touchstart' , this.#doigt_bas.bind( this ) , false );
            window.addEventListener( 'touchend' , this.#doigt_haut.bind( this ) , false );
            window.addEventListener( 'touchmove' , this.#doigt_bouge.bind( this ) , false );
        }
        this.#charger_les_bases_initiales_en_asynchrone();
    }
    /*
      =============================================================================================================
      function #message_succes_et_fermer_modale
    */
    #message_succes_modale( donnees ){
        document.getElementById( '__message_modale' ).innerHTML='<div class="yysucces">OK</div>';
        setTimeout( function(){
                document.getElementById( '__message_modale' ).innerHTML='';
            } , 1000 );
    }
    /*
      =============================================================================================================
      function #message_succes_et_fermer_modale
    */
    #message_succes_et_fermer_modale( donnees ){
        document.getElementById( '__message_modale' ).innerHTML='<div class="yysucces">OK</div>';
        setTimeout( function(){
                document.getElementById( '__message_modale' ).innerHTML='';
                __gi1.fermer_fenetre1();
            } , 500 );
    }
    /*
      =============================================================================================================
      function #message_erreur_modale
    */
    #message_erreur_modale( donnees ){
        var t='';
        t+='<div class="yy__x_signaux_0">KO</div>';
        if(donnees.messages){
            for(var i in donnees.messages){
                t+='<div class="yy__x_signaux_0">' + donnees.messages[i] + '</div>';
            }
        }
        document.getElementById( '__message_modale' ).innerHTML=t;
    }
    /*
      =============================================================================================================
      function svg_ajuster_la_largeur_des_boites_de_la_table
    */
    #svg_ajuster_la_largeur_des_boites_de_la_table( tableau ){
        var id_svg_conteneur_table=tableau[0];
        var id_bdd=tableau[1];
        try{
            var id_svg_de_la_base_en_cours=this.#svg_dessin.getElementById( id_svg_conteneur_table ).getAttribute( 'id_svg_de_la_base_en_cours' );
        }catch(e){
            debugger;
        }
        var liste_des_paths=this.#svg_dessin.getElementById( id_svg_de_la_base_en_cours ).getElementsByTagName( 'path' );
        var hauteur_de_la_table=0;
        var largeur_max=0;
        var groupe_table=this.#svg_dessin.getElementById( id_svg_conteneur_table );
        try{
            var lst=groupe_table.getElementsByTagName( 'text' );
        }catch(e){
            debugger;
        }
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            var bb=lst[i].getBBox();
            if(largeur_max < bb.width){
                largeur_max=Math.ceil( bb.width );
            }
            hauteur_de_la_table+=this.#hauteur_de_boite_affichage;
        }
        largeur_max+=2 * this.#taille_bordure;
        if(largeur_max < 40){
            largeur_max=40;
        }
        var position_haut=this.#taille_bordure;
        var lst=this.#svg_dessin.getElementById( id_svg_conteneur_table ).getElementsByTagName( '*' );
        /* nom de la table */
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'conteneur_de_nom_de_table'){
                    lst[i].decallage_x=this.#taille_bordure;
                    lst[i].decallage_y=position_haut;
                    lst[i].setAttribute( 'transform' , 'translate(' + this.#taille_bordure + ',' + position_haut + ')' );
                    position_haut+=this.#hauteur_de_boite_affichage;
                }else if(lst[i].getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'){
                    lst[i].setAttribute( 'width' , largeur_max );
                }
            }
        }
        /* champs */
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'conteneur_de_champ'){
                    var nom_du_champ=lst[i].getAttribute( 'nom_du_champ' );
                    lst[i].setAttribute( 'decallage_x' , this.#taille_bordure );
                    lst[i].setAttribute( 'decallage_y' , position_haut );
                    lst[i].setAttribute( 'transform' , 'translate(' + this.#taille_bordure + ',' + position_haut + ')' );
                    var j=0;
                    for( j=0 ; j < liste_des_paths.length ; j++ ){
                        if(liste_des_paths[j].getAttribute( 'type_element' )
                               && liste_des_paths[j].getAttribute( 'type_element' ) === 'reference_croisée'
                        ){
                            /*
                              
                              
                            */
                            if(parseInt( liste_des_paths[j].getAttribute( 'id_svg_parent_table' ) , 10 ) === id_svg_conteneur_table
                                   && liste_des_paths[j].getAttribute( 'id_svg_parent_champ' ) === lst[i].getAttribute( 'id' )
                            ){
                                /*
                                  
                                  si ce champ a des enfants, il faut mettre à jour les liens qui pointent sur ce champ
                                */
                                var ancien_chemin=liste_des_paths[j].getAttribute( 'd' );
                                var tab_chemin=ancien_chemin.split( ' ' );
                                tab_chemin[6]=parseInt( parseInt( groupe_table.getAttribute( 'decallage_x' ) , 10 ) + this.#taille_bordure + largeur_max + 30 , 10 );
                                tab_chemin[7]=parseInt( parseInt( groupe_table.getAttribute( 'decallage_y' ) , 10 ) + position_haut + this.#hauteur_de_boite_affichage / 2 , 10 );
                                tab_chemin[8]=parseInt( parseInt( groupe_table.getAttribute( 'decallage_x' ) , 10 ) + this.#taille_bordure + largeur_max , 10 );
                                tab_chemin[9]=parseInt( parseInt( groupe_table.getAttribute( 'decallage_y' ) , 10 ) + position_haut + this.#hauteur_de_boite_affichage / 2 , 10 );
                                var nouveau_chemin=tab_chemin.join( ' ' );
                                liste_des_paths[j].setAttribute( 'd' , nouveau_chemin );
                                this.#arbre[id_bdd].arbre_svg[liste_des_paths[j].id].proprietes.d=nouveau_chemin;
                                var k={};
                                for(k in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
                                    if(this.#svg_tableaux_des_references_amont_aval[id_bdd][k]
                                           && this.#svg_tableaux_des_references_amont_aval[id_bdd][k].id_svg_parent_table === id_svg_conteneur_table
                                           && parseInt( lst[i].getAttribute( 'id' ) , 10 ) === this.#svg_tableaux_des_references_amont_aval[id_bdd][k].id_svg_parent_champ
                                    ){
                                        /*
                                          
                                          mise à jour de p222222
                                        */
                                        this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p2[0]=parseInt( tab_chemin[8] , 10 );
                                        this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p2[1]=parseInt( tab_chemin[9] , 10 );
                                    }
                                }
                            }else if(parseInt( liste_des_paths[j].getAttribute( 'id_svg_enfant_table' ) , 10 ) === id_svg_conteneur_table
                                   && liste_des_paths[j].getAttribute( 'id_svg_enfant_champ' ) === lst[i].getAttribute( 'id' )
                            ){
                                /*
                                  
                                  ce champ a un parent, il faut mettre à jour le lien
                                */
                                var ancien_chemin=liste_des_paths[j].getAttribute( 'd' );
                                var tab_chemin=ancien_chemin.split( ' ' );
                                tab_chemin[1]=parseInt( groupe_table.getAttribute( 'decallage_x' ) , 10 );
                                tab_chemin[2]=parseInt( parseInt( groupe_table.getAttribute( 'decallage_y' ) , 10 ) + position_haut + this.#hauteur_de_boite_affichage / 2 , 10 );
                                tab_chemin[4]=parseInt( groupe_table.getAttribute( 'decallage_x' ) , 10 ) - 30;
                                tab_chemin[5]=parseInt( parseInt( groupe_table.getAttribute( 'decallage_y' ) , 10 ) + position_haut + this.#hauteur_de_boite_affichage / 2 , 10 );
                                var nouveau_chemin=tab_chemin.join( ' ' );
                                liste_des_paths[j].setAttribute( 'd' , nouveau_chemin );
                                this.#arbre[id_bdd].arbre_svg[liste_des_paths[j].id].proprietes.d=nouveau_chemin;
                                var k={};
                                for(k in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
                                    if(k === 2){
                                        console.log( this.#svg_tableaux_des_references_amont_aval[id_bdd][k] );
                                    }
                                    if(this.#svg_tableaux_des_references_amont_aval[id_bdd][k]
                                           && this.#svg_tableaux_des_references_amont_aval[id_bdd][k].id_svg_enfant_table === id_svg_conteneur_table
                                           && this.#svg_tableaux_des_references_amont_aval[id_bdd][k].id_svg_enfant_champ === parseInt( lst[i].getAttribute( 'id' ) , 10 )
                                    ){
                                        /*
                                          
                                          mise à jour de p1111
                                        */
                                        this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p1[0]=parseInt( tab_chemin[1] , 10 );
                                        this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p1[1]=parseInt( tab_chemin[2] , 10 );
                                    }
                                }
                            }
                        }
                    }
                    if(lst[i].style.display === 'inline'){
                        position_haut+=this.#hauteur_de_boite_affichage;
                    }else{
                    }
                }else if(lst[i].getAttribute( 'type_element' ) === 'rectangle_de_champ'){
                    lst[i].setAttribute( 'width' , largeur_max );
                }
            }
        }
        /* indexes */
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'conteneur_d_index'){
                    lst[i].setAttribute( 'decallage_x' , this.#taille_bordure );
                    lst[i].setAttribute( 'decallage_y' , position_haut );
                    lst[i].setAttribute( 'transform' , 'translate(' + this.#taille_bordure + ',' + position_haut + ')' );
                    position_haut+=this.#hauteur_de_boite_affichage;
                }else if(lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'){
                    lst[i].setAttribute( 'width' , largeur_max );
                }
            }
        }
        /* rectangle de table */
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'rectangle_de_table'){
                    lst[i].setAttribute( 'width' , largeur_max + 2 * this.#taille_bordure );
                    lst[i].setAttribute( 'height' , position_haut );
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    modale_ajouter_une_table(){
        document.getElementById( '__contenu_modale' ).innerHTML=t;
        __gi1.global_modale2.showModal();
    }
    /*
      =============================================================================================================
    */
    apres_renommer_une_table1( obj ){
        /*
          maj+='  methode2(apres_renommer_une_table1),';
          maj+='  valeurs2(';
          maj+='    id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
          maj+='    id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
          maj+='    id_svg_du_texte(' + id_svg_du_texte + ')';
          maj+='    id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
          maj+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
          maj+='    ancien_nom(\'' + ancien_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
          maj+='    nouveau_nom(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
          maj+='  )';
        */
        let mat=null;
        var obj1=__gi1.__m_rev1.rev_tm( obj.maj );
        if(obj1.__xst === __xsu){
            mat=obj1.__xva;
        }else{
        }
        if(mat === null){
            debugger;
            return;
        }
        /* id_svg_du_texte , id_svg_conteneur_table ]{ */
        let id_svg_conteneur_table=0;
        let id_svg_du_texte=0;
        let nom_de_la_table='';
        let id_bdd_de_la_base=0;
        let ancien_nom='';
        let nouveau_nom='';
        let id_svg_rectangle_de_la_table=0;
        for( let j=1 ; j < mat.length ; j=mat[j][12] ){
            if(mat[j][1] === 'methode_module_dynamique1' && mat[j][2] === 'f'){
                for( let k=j + 1 ; k < mat.length ; k=mat[k][12] ){
                    if(mat[k][1] === 'valeurs2' && mat[k][2] === 'f'){
                        for( let i=k + 1 ; i < mat.length ; i=mat[i][12] ){
                            if(mat[i][1] === 'id_svg_du_texte' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_svg_du_texte=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'id_bdd_de_la_base' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                nom_de_la_table=mat[i + 1][1];
                            }else if(mat[i][1] === 'nouveau_nom' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                nouveau_nom=mat[i + 1][1];
                            }else if(mat[i][1] === 'ancien_nom' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                ancien_nom=mat[i + 1][1];
                            }
                        }
                    }
                }
            }
        }
        this.#renommer_table_sur_svg( id_svg_du_texte , id_svg_conteneur_table , id_svg_rectangle_de_la_table , nouveau_nom , ancien_nom );
    }
    /*
      =============================================================================================================
    */
    changer_le_nom_de_table_en_base_et_sur_le_svg( mat ){
        let id_svg_du_texte='';
        let id_svg_conteneur_table='';
        let id_svg_rectangle_de_la_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_du_texte' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_du_texte=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var nouveau_nom=document.getElementById( 'nouveau_nom' ).value;
        var nom_de_la_table=document.getElementById( 'ancien_nom' ).value;
        id_svg_conteneur_table=parseInt( id_svg_conteneur_table , 10 );
        if(nouveau_nom !== nom_de_la_table){
         
            let trouve=false;
            var lst=document.getElementById(this.#id_svg_de_la_base_en_cours).getElementsByTagName('rect');
            for(let i=0;i<lst.length;i++){
                if(lst[i].getAttribute('type_element') && 'rectangle_de_table'===lst[i].getAttribute('type_element') ){
                    if( parseInt( lst[i].id , 10)!== id_svg_rectangle_de_la_table ){
                        if(lst[i].getAttribute('nom_de_la_table')===nouveau_nom){
                            trouve=true;
                            break
                        }
                    }
                }
            }

            if(trouve===false){
            
            
                
                let source_sql='ALTER TABLE ' + nom_de_la_table + ' RENAME  TO ' + nouveau_nom + '';
                var maj='';
                maj+='maj_interface1(fermer_fenetre1())';
                maj+='methode_module_dynamique1(';
                maj+='  nom_du_module2("_js/c_svg_bdd1.js"),';
                maj+='  methode2(apres_renommer_une_table1),';
                maj+='  valeurs2(';
                maj+='    id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
                maj+='    id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
                maj+='    id_svg_du_texte(' + id_svg_du_texte + ')';
                maj+='    id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
                maj+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='    ancien_nom(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='    nouveau_nom(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='  )';
                maj+=')';
                let obj={
                     /*  */
                    "__x_action" : 'c_bases1.executer_sql3(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '))' ,
                    "__xva" : {
                         /*  */
                        "source_sql" : source_sql ,
                        "operation_table" : 'renommer_une_table' ,
                        "maj" : maj
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return;
            }
        }
    }
    /*
      =============================================================================================================
    */
    #renommer_table_sur_svg( id_svg_du_texte , id_svg_conteneur_table , id_svg_rectangle_de_la_table , nouveau_nom , ancien_nom ){
        id_svg_conteneur_table=parseInt( id_svg_conteneur_table , 10 );
        
        if(nouveau_nom !== ancien_nom){
            /* changement du visuel */
            id_svg_du_texte=parseInt( id_svg_du_texte , 10 );
            var element_svg=document.getElementById( id_svg_du_texte );
            var j=0;
            for( j=0 ; j < element_svg.childNodes.length ; j++ ){
                if(element_svg.childNodes[j].nodeName.toLowerCase() === '#text'){
                    element_svg.childNodes[j].data=nouveau_nom;
                    /* mise à jour de l'arbre */
                    let t='';
                    t+='<tspan ' + ' data-utilite="deplacer_la_table" style="cursor:move;" ';
                    t+=' id_svg_conteneur_table="' + id_svg_conteneur_table + '" ';
                    t+=' id_bdd_de_la_base_en_cours="' + this.#id_bdd_de_la_base_en_cours + '" ';
                    t+=' id_svg_de_la_base_en_cours="' + this.#id_svg_de_la_base_en_cours + '">🟥</tspan>';
                    t+='<tspan  style="cursor:pointer;"';
                    t+=' data-hug_click="interface1.module1(methode3(modale_gerer_la_table),parametre3(id_svg_conteneur_table(' + id_svg_conteneur_table + ')),chemin_module1(\'' + this.#chemin_module1 + '\'))"';
                    t+='>🟦</tspan>' + '' + nouveau_nom + '';
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_du_texte].contenu=t;
                    break;
                }
            }
            let nouveau_meta=this.#corrige_meta_table( document.getElementById( id_svg_rectangle_de_la_table ).getAttribute( 'meta_rev_de_la_table' ) , {"nom_de_la_table" : nouveau_nom ,"table" : nouveau_nom} );
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_la_table].proprietes.meta_rev_de_la_table=nouveau_meta.texte;
            /* document.getElementById(id_svg_rectangle_de_la_table).setAttribute( 'meta_rev_de_la_table' , nouveau_meta.texte ) */
            /*
              changement des champs nom_de_la_table pour les éléments dans la base courante
            */
            var lst=document.getElementById( this.#id_svg_de_la_base_en_cours ).getElementsByTagName( '*' );
            var i=0;
            for( i=0 ; i < lst.length ; i++ ){
                if(lst[i].getAttribute( 'nom_de_la_table' ) && lst[i].getAttribute( 'nom_de_la_table' ) === ancien_nom){
                    lst[i].setAttribute( 'nom_de_la_table' , nouveau_nom );
                    if(this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes
                           && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_de_la_table
                    ){
                        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_de_la_table=nouveau_nom;
                    }
                }
                if(lst[i].getAttribute( 'nom_de_la_table_pour_l_index' )
                       && lst[i].getAttribute( 'nom_de_la_table_pour_l_index' ) === ancien_nom
                ){
                    lst[i].setAttribute( 'nom_de_la_table_pour_l_index' , nouveau_nom );
                    if(this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes
                           && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_de_la_table_pour_l_index
                    ){
                        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_de_la_table_pour_l_index=nouveau_nom;
                    }
                    if(lst[i].getAttribute( 'donnees_rev_de_l_index' )){
                        /*
                          on change les champs meta donnees_rev_de_l_index
                        */
                        let rev_texte=lst[i].getAttribute( 'donnees_rev_de_l_index' );
                        var obj1=__gi1.__m_rev1.rev_tm( rev_texte );
                        if(obj1.__xst === __xsu){
                            let mat2=obj1.__xva;
                            for( let k=1 ; k < mat2.length ; k++ ){
                                if(mat2[k][1] === 'nom_de_la_table_pour_l_index' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                    mat2[k + 1][1]=nouveau_nom;
                                }
                            }
                            var obj2=__gi1.__m_rev1.matrice_vers_source_rev1( mat2 , 0 , false , 1 );
                            if(obj2.__xst === __xsu){
                                lst[i].setAttribute( 'donnees_rev_de_l_index' , obj2.__xva );
                            }
                        }
                    }
                }
                if(lst[i].getAttribute( 'donnees_rev_du_champ' )
                       && lst[i].getAttribute( 'donnees_rev_du_champ' ).indexOf( ancien_nom ) >= 0
                ){
                    var a_remplacer=new RegExp( ancien_nom , 'g' );
                    lst[i].setAttribute( 'donnees_rev_du_champ' , lst[i].getAttribute( 'donnees_rev_du_champ' ).replace( a_remplacer , nouveau_nom ) );
                }
            }
            var i=0;
            for( i=0 ; i < this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours].length ; i++ ){
                var elem=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i];
                if(elem.nom_parent_table === ancien_nom){
                    /*
                      les champs enfants dépendant de ce nom de table
                    */
                    this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].nom_parent_table=nouveau_nom;
                    /*  */
                    let id_svg_enfant_champ=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].id_svg_enfant_champ;
                    let id_svg_rectangle_du_champ_enfant=id_svg_enfant_champ + 1;
                    /*  */
                    let id_svg_parent_champ=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].id_svg_parent_champ;
                    let id_svg_rectangle_du_champ_parent=id_svg_parent_champ + 1;
                    /* let reference_actuelle=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ_enfant].proprietes.references; */
                    /*  */
                    let nom_du_champ_parent=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ_parent].proprietes.nom_du_champ;
                    let nouvelle_reference=nouveau_nom + ',' + nom_du_champ_parent;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ_enfant].proprietes.references=nouvelle_reference;
                    /*
                      {
                      "id_bdd_de_la_base_en_cours":"1",
                      "id_svg_de_la_base_en_cours":0,
                      "id_svg_parent_table":169,
                      "id_svg_parent_champ":174,
                      "id_svg_enfant_table":169,
                      "id_svg_enfant_champ":180,
                      "nom_enfant_table":"tbl_y",
                      "nom_enfant_champ":"chx_parent_y",
                      "nom_parent_table":"tbl_y",
                      "nom_parent_champ":"chi_id_y",
                      "id_du_path":183,
                      "p1":[628,134],
                      "p2":[747,96]
                      }                    
                    */
                }
                /*
                  if(elem.nom_enfant_table === ancien_nom){
                  this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].nom_enfant_table=nouveau_nom;
                  debugger
                  }
                */
            }
            this.#svg_ajuster_largeur_de_table( id_svg_conteneur_table );
            __gi1.fermer_fenetre1();
            this.#dessiner_le_svg();
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    changer_le_nom_de_table_sur_le_svg( mat ){
        let id_svg_du_texte='';
        let id_svg_conteneur_table='';
        let id_svg_rectangle_de_la_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_du_texte' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_du_texte=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var nouveau_nom=document.getElementById( 'nouveau_nom' ).value;
        var ancien_nom=document.getElementById( 'ancien_nom' ).value;
        if(nouveau_nom!==ancien_nom){
         
            let trouve=false;
            var lst=document.getElementById(this.#id_svg_de_la_base_en_cours).getElementsByTagName('rect');
            for(let i=0;i<lst.length;i++){
                if(lst[i].getAttribute('type_element') && 'rectangle_de_table'===lst[i].getAttribute('type_element') ){
                    if( parseInt( lst[i].id , 10)!== id_svg_rectangle_de_la_table ){
                        if(lst[i].getAttribute('nom_de_la_table')===nouveau_nom){
                            trouve=true;
                            break
                        }
                    }
                }
            }
            if(trouve===false){
                this.#renommer_table_sur_svg( id_svg_du_texte , id_svg_conteneur_table , id_svg_rectangle_de_la_table , nouveau_nom , ancien_nom );
            }
        }
    }
    /*
      =============================================================================================================
      function recuperer_prochain_id_svg
    */
    #recuperer_prochain_id_svg(){
        var i=0;
        var j=0;
        var max_id=-1;
        var lst=this.#svg_dessin.getElementsByTagName( '*' );
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].id && __gi1.__m_rev1.est_num( lst[i].id )){
                j=parseInt( lst[i].id , 10 );
                if(j > max_id){
                    max_id=j;
                }
            }
        }
        max_id++;
        return max_id;
    }
    /*
      
      =============================================================================================================
      
    */
    ajouter_une_table_provenant_de_modale( mat ){
        /* nom_de_la_nouvelle_table */
        let id_de_la_zone='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_de_la_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_de_la_zone=mat[i + 1][1];
            }
        }
        var nom_de_la_table=document.getElementById( id_de_la_zone ).value;
        
        
        let trouve=false;
        var lst=document.getElementById(this.#id_svg_de_la_base_en_cours).getElementsByTagName('rect');
        for(let i=0;i<lst.length;i++){
            if(lst[i].getAttribute('type_element') && 'rectangle_de_table'===lst[i].getAttribute('type_element') ){
                if(lst[i].getAttribute('nom_de_la_table')===nom_de_la_table){
                    trouve=true;
                    break
                }
            }
        }

        if(trouve===false){
            var j=0;
            var i=0;
            var indice_courant=this.#recuperer_prochain_id_svg();
            var id_svg_conteneur_table=indice_courant;
            var meta_table='';
            meta_table+='meta(';
            meta_table+='nom_de_la_table( \'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='table( \'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='genre_meta(table_de_base),';
            meta_table+='nom_long_de_la_table( \'A faire  ' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='nom_court_de_la_table( \'A faire ' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='nom_bref_de_la_table( \'A faire ' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='transform_table_sur_svg( translate( 20 , 20 ))';
            meta_table+=')';
            var a=this.#ajouter_table_a_svg( nom_de_la_table , indice_courant , [20,20] , meta_table );
            var id_svg_conteneur_table=a.id_svg_conteneur_table;
            indice_courant+=2;
            var a=this.#ajouter_nom_de_table_au_svg( nom_de_la_table , indice_courant , id_svg_conteneur_table , 0 );
            __gi1.fermer_fenetre1();
            this.#dessiner_le_svg();
        }
        
        
    }
    /*
      
      =============================================================================================================
      function ajouter_un_champ_de_modale
    */
    ajouter_un_champ_de_modale( mat ){
        /* id_svg_conteneur_table , nom_de_la_table ]{ */
        let id_svg_conteneur_table=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var nom_du_champ=document.getElementById( 'nom_du_champ' ).value;
        var typologie=document.getElementById( 'typologie' ).value;
        var chp_type_champ=document.getElementById( 'chp_type_champ' ).value;
        var primary_key=document.getElementById( 'primary_key' ).checked ? ( 1 ) : ( 0 );
        var non_nulle=document.getElementById( 'non_nulle' ).checked ? ( 1 ) : ( 0 );
        var auto_increment=document.getElementById( 'auto_increment' ).checked ? ( 1 ) : ( 0 );
        var a_une_valeur_par_defaut=document.getElementById( 'a_une_valeur_par_defaut' ).checked ? ( 1 ) : ( 0 );
        var la_valeur_par_defaut_est_caractere=document.getElementById( 'la_valeur_par_defaut_est_caractere' ).checked;
        var valeur_par_defaut=document.getElementById( 'valeur_par_defaut' ).value;
        var references='';
        if(document.getElementById( 'table_mère' ).value.trim() !== ''
               && document.getElementById( 'champ_père' ).value.trim() !== ''
        ){
            references=document.getElementById( 'table_mère' ).value + ',' + document.getElementById( 'champ_père' ).value;
        }
        var afficher_champ_dans_svg=document.getElementById( 'afficher_champ_dans_svg' ).checked ? ( 1 ) : ( 0 );
        var champ_date_modification=document.getElementById( 'champ_date_modification' ).checked ? ( 1 ) : ( 0 );
        var champ_date_creation=document.getElementById( 'champ_date_creation' ).checked ? ( 1 ) : ( 0 );
        var champ_numero_de_revision=document.getElementById( 'champ_numero_de_revision' ).checked ? ( 1 ) : ( 0 );
        var j=0;
        var i=0;
        
        let trouve=false;
        var lst=document.getElementById(id_svg_conteneur_table).getElementsByTagName('text');
        for(let i=0;i<lst.length;i++){
            if(lst[i].getAttribute('type_element') && 'texte_de_champ'===lst[i].getAttribute('type_element') ){
                if(lst[i].getAttribute('nom_du_champ')===nom_du_champ){
                    trouve=true;
                    break
                }
            }
        }

        if(trouve===true){
         return;
        }
        
        
        
        
        document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='';
        if(chp_type_champ === '' || typologie === '' || nom_du_champ === ''){
            document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='Vous devez choisir un type de champ et une typologie et renseigner le nom du champ';
            return;
        }
        if(document.getElementById( 'table_mère' ).value !== '' || document.getElementById( 'champ_père' ).value !== ''){
            if(document.getElementById( 'table_mère' ).value === '' || document.getElementById( 'champ_père' ).value === ''){
                document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='erreur sur la table ou le champ parent';
                return;
            }
            /*
              la référence croisée existe-t-elle dans le svg
            */
            trouve=false;
            var elems2=document.getElementById( this.#id_svg_de_la_base_en_cours ).getElementsByTagName( 'rect' );
            for( var j=0 ; j < elems2.length && trouve === false ; j++ ){
                if(elems2[j].getAttribute( 'type_element' )
                       && elems2[j].getAttribute( 'type_element' ) === "rectangle_de_champ"
                       && elems2[j].getAttribute( 'nom_de_la_table' )
                       && elems2[j].getAttribute( 'nom_de_la_table' ) === document.getElementById( 'table_mère' ).value
                       && elems2[j].getAttribute( 'nom_du_champ' )
                       && elems2[j].getAttribute( 'nom_du_champ' ) === document.getElementById( 'champ_père' ).value
                ){
                    trouve=true;
                    break;
                }
            }
            if(trouve === false){
                document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='table mère ou champ père non trouvé';
                return;
            }
        }
        var indice_courant=this.#recuperer_prochain_id_svg();
        var rev='';
        rev+='meta(';
        rev+='    genre_meta(champ)';
        rev+='    champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    typologie(' + typologie + ')';
        rev+='    nom_long_du_champ(\'' + document.getElementById( 'meta_ajouter__nom_long_du_champ' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    nom_court_du_champ(\'' + document.getElementById( 'meta_ajouter__nom_court_du_champ' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    nom_bref_du_champ(\'' + document.getElementById( 'meta_ajouter__nom_bref_du_champ' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    afficher_champ_dans_svg(' + afficher_champ_dans_svg + ')';
        rev+='    champ_date_modification(' + champ_date_modification + ')';
        rev+='    champ_date_creation(' + champ_date_creation + ')';
        rev+='    champ_numero_de_revision(' + champ_numero_de_revision + ')';
        rev+=')';

        /*
          a_une_valeur_par_defaut,
          valeur_par_defaut,
          la_valeur_par_defaut_est_caractere,
          
          nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , id_bdd_de_la_base , donnees_rev_du_champ , type , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut,
          valeur_par_defaut,
          la_valeur_par_defaut_est_caractere
          
        */
        var a=this.#ajouter_champ_a_arbre( nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , this.#id_bdd_de_la_base_en_cours , rev , chp_type_champ , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut , valeur_par_defaut , la_valeur_par_defaut_est_caractere );
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      
      =============================================================================================================
      function changer_le_nom_d_index_de_modale
    */
    changer_le_nom_d_index_de_modale( mat ){
        let id_svg_text=0;
        let id_svg_conteneur_table=0;
        let id_svg_rectangle_de_l_index=0;
        let id_svg_conteneur_d_index=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_text' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_text=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_d_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_d_index=parseInt( mat[i + 1][1] , 10 );
            }
        }
        
        
        
        var nouveau_nom=document.getElementById( 'nouveau_nom' ).value;
        var ancien_nom=document.getElementById( 'ancien_nom' ).value;
        
                
        

        if(nouveau_nom !== ancien_nom){
         
            let trouve=false;
            var lst=document.getElementById(id_svg_conteneur_table).getElementsByTagName('rect');
            for(let i=0;i<lst.length;i++){
                if(lst[i].getAttribute('type_element') && 'rectangle_d_index'===lst[i].getAttribute('type_element') ){
                    if( parseInt( lst[i].id , 10)!== id_svg_rectangle_de_l_index ){
                        if(lst[i].getAttribute('nom_de_l_index')===nouveau_nom){
                            trouve=true;
                            break
                        }
                    }
                }
            }
            if(trouve===false){
                
                
             
             
                /* changement du visuel */
                var id_zone_element_svg=parseInt( id_svg_text , 10 );
                var element_svg=document.getElementById( id_zone_element_svg );
                var j=0;
                for( j=0 ; j < element_svg.childNodes.length ; j++ ){
                    if(element_svg.childNodes[j].nodeName.toLowerCase() === '#text'){
                        element_svg.childNodes[j].data=nouveau_nom;
                        /* mise à jour de l'arbre */
                        /*
                          carré vert 
                        */
                        let t='';
                        t+='<tspan ';
                        t+=' style="cursor:pointer;" ';
                        let f='';
                        f+='interface1.module1(';
                        f+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                        f+=' methode3(modale_modifier_l_index),';
                        f+=' parametre3(';
                        f+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
                        f+='  nom_de_l_index(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                        f+='  id_svg_conteneur_d_index(' + id_svg_conteneur_d_index + ')';
                        f+=' )';
                        f+=')';
                        t+=' data-hug_click="' + f + '" >🟩</tspan>' + nouveau_nom;
                        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_zone_element_svg].contenu=t;
                        break;
                    }
                }
                var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( '*' );
                var i=0;
                for( i=0 ; i < lst.length ; i++ ){
                    if('rectangle_d_index' === lst[i].getAttribute( 'type_element' )
                           && parseInt( lst[i].id , 10 ) === id_svg_rectangle_de_l_index
                    ){
                        lst[i].setAttribute( 'nom_de_l_index' , nouveau_nom );
                        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_de_l_index=nouveau_nom;
                    }
                }
                this.#svg_ajuster_largeur_de_table( id_svg_conteneur_table );
                __gi1.fermer_fenetre1();
                this.#dessiner_le_svg();
            }
        }
    }
    /*
      =============================================================================================================
      matricée
      On a changé le nom du champ dans le fichier de la bdd, 
      on le change maintenant sur ce schema
    */
    apres_renommer_un_champs1( obj ){
        /*
          maj_interface1(
          fermer_fenetre1()
          )
          methode_module_dynamique1(  
          nom_du_module2("_js/c_svg_bdd1.js"),  
          methode2(apres_renommer_un_champs1),  
          valeurs2(    
          id_bdd_de_la_base(1)    
          id_svg_conteneur_table(193)    
          id_svg_text(228)    
          id_svg_champ_en_cours(226)    
          nom_de_la_table('tbl_requetes')  
          )
          )
        */
        let mat=null;
        var obj1=__gi1.__m_rev1.rev_tm( obj.maj );
        if(obj1.__xst === __xsu){
            mat=obj1.__xva;
        }else{
        }
        if(mat === null){
            return;
        }
        /* id_svg_text , id_svg_conteneur_table ]{ */
        let id_svg_conteneur_table=0;
        let id_svg_text=0;
        let id_svg_champ_en_cours=0;
        let nom_de_la_table='';
        let ancien_nom='';
        let nouveau_nom='';
        for( let j=1 ; j < mat.length ; j=mat[j][12] ){
            if(mat[j][1] === 'methode_module_dynamique1' && mat[j][2] === 'f'){
                for( let k=j + 1 ; k < mat.length ; k=mat[k][12] ){
                    if(mat[k][1] === 'valeurs2' && mat[k][2] === 'f'){
                        for( let i=k + 1 ; i < mat.length ; i=mat[i][12] ){
                            if(mat[i][1] === 'id_svg_text' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_svg_text=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
                            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                nom_de_la_table=mat[i + 1][1];
                            }else if(mat[i][1] === 'nouveau_nom' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                nouveau_nom=mat[i + 1][1];
                            }else if(mat[i][1] === 'ancien_nom' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                                ancien_nom=mat[i + 1][1];
                            }
                        }
                    }
                }
            }
        }
        this.#changer_le_nom_de_champ_sur_le_svg( id_svg_conteneur_table , id_svg_text , id_svg_champ_en_cours , nouveau_nom , ancien_nom );
    }
    /*
      =============================================================================================================
      Change en bdd et sur le svg
    */
    changer_le_nom_de_champ_de_modale( mat ){
        /* id_svg_text , id_svg_conteneur_table ]{ */
        let id_svg_conteneur_table=0;
        let id_svg_text=0;
        let id_svg_champ_en_cours=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_text' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_text=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var nouveau_nom=document.getElementById( 'nouveau_nom' ).value;
        var ancien_nom=document.getElementById( 'ancien_nom' ).value;
        if(nouveau_nom !== ancien_nom){
         
         
            let trouve=false;
            var lst=document.getElementById(id_svg_conteneur_table).getElementsByTagName('text');
            for(let i=0;i<lst.length;i++){
                if(lst[i].getAttribute('type_element') && 'texte_de_champ'===lst[i].getAttribute('type_element') ){
                    if( parseInt( lst[i].id , 10)!== id_svg_text ){
                        if(lst[i].getAttribute('nom_du_champ')===nouveau_nom){
                            trouve=true;
                            break
                        }
                    }
                }
            }

            if(trouve===false){
             
             
                /*  */
                let source_sql='ALTER TABLE ' + nom_de_la_table + ' RENAME COLUMN ' + ancien_nom + ' TO ' + nouveau_nom + '';
                var maj='';
                maj+='maj_interface1(fermer_fenetre1())';
                maj+='methode_module_dynamique1(';
                maj+='  nom_du_module2("_js/c_svg_bdd1.js"),';
                maj+='  methode2(apres_renommer_un_champs1),';
                maj+='  valeurs2(';
                maj+='    id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
                maj+='    id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
                maj+='    id_svg_text(' + id_svg_text + ')';
                maj+='    id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
                maj+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='    ancien_nom(\'' + ancien_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='    nouveau_nom(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                maj+='  )';
                maj+=')';
                let obj={
                     /*  */
                    "__x_action" : 'c_bases1.executer_sql3(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '))' ,
                    "__xva" : {
                         /*  */
                        "source_sql" : source_sql ,
                        "operation_table" : 'renommer_un_champs' ,
                        "maj" : maj
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return;
            }
        }
        /* changement du visuel */
    }
    /*
      =============================================================================================================
    */
    #changer_le_nom_de_champ_sur_le_svg( id_svg_conteneur_table , id_svg_text , id_svg_champ_en_cours , nouveau_nom , ancien_nom ){
        var id_zone_element_svg=parseInt( id_svg_text , 10 );
        var element_svg=document.getElementById( id_zone_element_svg );
        var j=0;
        for( j=0 ; j < element_svg.childNodes.length ; j++ ){
            if(element_svg.childNodes[j].nodeName.toLowerCase() === '#text'){
                element_svg.childNodes[j].data=nouveau_nom;
                /* mise à jour de l'arbre */
                let f='';
                f+='interface1.module1(';
                f+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                f+=' methode3(modale_modifier_le_champ),';
                f+=' parametre3(';
                f+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
                f+='  id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
                /* conteneur_de_champ */
                f+='  nom_du_champ(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                f+=' )';
                f+=')';
                let contenu='';
                contenu+='<tspan ';
                contenu+=' style="cursor:pointer;" ';
                contenu+=' data-hug_click="' + f + '">🟨</tspan>' + nouveau_nom;
                this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_zone_element_svg].contenu=contenu;
                break;
            }
        }
        let id_svg_rectangle_du_champ=id_svg_champ_en_cours + 1;
        let rectangle=document.getElementById( id_svg_rectangle_du_champ );
        let variation={"champ" : nouveau_nom ,"nom_du_champ" : nouveau_nom};
        let obj_donnees_rev_du_champ=this.#corrige_meta_champ( rectangle.getAttribute( 'donnees_rev_du_champ' ) , variation , nouveau_nom );
        rectangle.setAttribute( 'donnees_rev_du_champ' , obj_donnees_rev_du_champ.texte );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ].proprietes.donnees_rev_du_champ=obj_donnees_rev_du_champ.texte;
        /*
          changement des champs nom_du_champ pour les éléments dans la base courante
        */
        var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( '*' );
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'nom_du_champ' ) && lst[i].getAttribute( 'nom_du_champ' ) === ancien_nom){
                lst[i].setAttribute( 'nom_du_champ' , nouveau_nom );
                if(this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes
                       && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_du_champ
                ){
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.nom_du_champ=nouveau_nom;
                }
            }
            if(lst[i].getAttribute( 'type_element' ) && 'rectangle_d_index' === lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'champs' ) && lst[i].getAttribute( 'champs' ).indexOf( '\'' + ancien_nom + '\'' ) >= 0){
                    let tt=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.champs;
                    let rgx=new RegExp( '\'' + ancien_nom + '\'' , "g" );
                    tt=tt.replace( rgx , '\'' + nouveau_nom + '\'' );
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.champs=tt;
                }
            }
        }
        for( var i=0 ; i < this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours].length ; i++ ){
            var elem=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i];
            if(elem.nom_parent_champ === ancien_nom){
                this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].nom_parent_champ=nouveau_nom;
                /*
                  on réaffecte les enfants dépendants 
                */
                let id_svg_enfant_champ=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].id_svg_enfant_champ;
                let id_svg_rectangle_enfant_champ=id_svg_enfant_champ + 1;
                let id_svg_enfant_table=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][i].id_svg_enfant_table;
                let id_svg_rectangle_enfant_table=id_svg_enfant_table + 1;
                /*  */
                let nom_de_la_table_enfant=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_enfant_table].proprietes.nom_de_la_table;
                let nouvelle_reference=nom_de_la_table_enfant + ',' + nouveau_nom;
                this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_enfant_champ].proprietes.references=nouvelle_reference;
            }
        }
        this.#svg_ajuster_largeur_de_table( id_svg_conteneur_table );
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      Change sur le svg uniquement
    */
    changer_le_nom_de_champ_de_modale_sur_le_schema( mat ){
        /* id_svg_text , id_svg_conteneur_table ]{ */
        let id_svg_conteneur_table=0;
        let id_svg_text=0;
        let id_svg_champ_en_cours=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_text' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_text=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var nouveau_nom=document.getElementById( 'nouveau_nom' ).value;
        var ancien_nom=document.getElementById( 'ancien_nom' ).value;
        if(nouveau_nom !== ancien_nom){
         
         
            let trouve=false;
            var lst=document.getElementById(id_svg_conteneur_table).getElementsByTagName('text');
            for(let i=0;i<lst.length;i++){
                if(lst[i].getAttribute('type_element') && 'texte_de_champ'===lst[i].getAttribute('type_element') ){
                    if( parseInt( lst[i].id , 10)!== id_svg_text ){
                        if(lst[i].getAttribute('nom_du_champ')===nouveau_nom){
                            trouve=true;
                            break
                        }
                    }
                }
            }

            if(trouve===false){
                this.#changer_le_nom_de_champ_sur_le_svg( id_svg_conteneur_table , id_svg_text , id_svg_champ_en_cours , nouveau_nom , ancien_nom );
            }
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    modifier_un_index_de_modale( mat ){
        /* ]{ */
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        id_svg_rectangle_de_l_index=parseInt( id_svg_rectangle_de_l_index , 10 );

        if(document.getElementById( 'liste_des_champs_de_l_index' ).value.trim()===''){
         return;
        }
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_l_index].proprietes['champs']=document.getElementById( 'liste_des_champs_de_l_index' ).value;
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_l_index].proprietes['unique']=document.getElementById( 'unique' ).checked ? ( 1 ) : ( 0 );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_l_index].proprietes['donnees_rev_de_l_index']='meta( genre_meta(index_de_table) , message( \'' + document.getElementById( 'meta_modifier__message' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\' ))';
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      matricée
    */
    supprimer_un_index_dans_rev_de_modale( mat ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }

        var id_de_l_index=parseInt( document.getElementById( id_svg_rectangle_de_l_index ).parentNode.id , 10 );
        this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , id_de_l_index );
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      function supprimer_un_index_dans_base_de_modale
    */
    supprimer_un_index_dans_base_de_modale( mat ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var source_sql='DROP INDEX ' + nom_de_l_index;
        let obj={
             /*  */
            "__x_action" : 'c_bases1.operation_table_dans_base(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '))' ,
            "__xva" : {
                 /*  */
                "source_sql" : source_sql ,
                "operation_table" : 'supprimer_l_index'
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
    /*
      =============================================================================================================
      matricée
    */
    ajouter_un_index_dans_base_de_modale( mat ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        let rev_texte=this.#creer_definition_index_en_rev( document.getElementById( id_svg_rectangle_de_l_index ) );
        var obj1=__gi1.__m_rev1.rev_tm( rev_texte );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                var source_sql=obj2.__xva;
                let obj={
                     /*  */
                    "__x_action" : 'c_bases1.operation_table_dans_base(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '))' ,
                    "__xva" : {
                         /*  */
                        "source_sql" : source_sql ,
                        "operation_table" : 'ajouter_l_index'
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return;
            }
        }
    }
    /*
      =============================================================================================================
    */
    ajouter_en_bdd_le_champ_de_modale( mat ){
        let id_svg_text=0;
        let id_svg_conteneur_table=0;
        let nom_du_champ='';
        let id_svg_rectangle_du_champ=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_text' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_text=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_du_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var definition_du_champ='';
        var a=document.getElementById( id_svg_rectangle_du_champ );
        if(a.getAttribute( 'type_element' ) && a.getAttribute( 'type_element' ) === 'rectangle_de_champ'){
            /* definition_du_champ+='sql(champ(' + a.getAttribute( 'donnees_rev_du_champ' ) + '))'; */
            definition_du_champ='sql(' + this.creer_definition_de_champ_a_partir_de_svg_rectangle( id_svg_rectangle_du_champ ) + ')';
            var obj1=__gi1.__m_rev1.rev_tm( definition_du_champ );
            if(obj1.__xst === __xsu){
                var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    var source_sql='ALTER TABLE `' + nom_de_la_table + '` ADD COLUMN ' + obj2.__xva + ';';
                    let maj='maj_interface1(fermer_fenetre1())';
                    let obj={
                         /*  */
                        "__x_action" : 'c_bases1.executer_sql3(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '))' ,
                        "__xva" : {
                             /*  */
                            "source_sql" : source_sql ,
                            "operation_table" : 'ajouter_un_champ' ,
                            "maj" : maj
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                }else{
                    debugger;
                }
            }else{
                debugger;
            }
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    supprimer_le_champ_de_modale( mat ){
        /* id_svg_text , id_svg_conteneur_table , nom_du_champ , id_svg_rectangle_du_champ ]{ */
        let id_svg_text=0;
        let id_svg_conteneur_table=0;
        let nom_du_champ='';
        let id_svg_rectangle_du_champ=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_text' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_text=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_rectangle_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_du_champ=parseInt( mat[i + 1][1] , 10 );
            }
        }
        /*
          ' methode3(supprimer_le_champ_de_modale),'+
          ' parametre3('+
          '  id_element_texte_du_nom_de_champ_svg(' + id_element_texte_du_nom_de_champ_svg + '),'+
          '  id_svg_conteneur_table(\''+id_svg_conteneur_table+'\')'+
          '  nom_du_champ(\''+nom_du_champ.replace(/\\/g,'\\\\').replace(/\'/g,'\\\'')+'\')'+
          '  id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + '),'+
          ' )'+
        */
        id_svg_rectangle_du_champ=parseInt( id_svg_rectangle_du_champ , 10 );
        var elt_parent=document.getElementById( id_svg_text ).parentNode;
        var id_parent=parseInt( elt_parent.id , 10 );
        var nom_de_la_table=elt_parent.getAttribute( 'nom_de_la_table' );
        this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , id_parent );
        /*
          Il faut supprimer les indexes 
        */
        var i={};
        for(i in this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg){
            var elt=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i];
            if(elt === null){
                continue;
            }
            if(elt.proprietes
                   && elt.proprietes.type_element === 'rectangle_d_index'
                   && elt.proprietes.nom_de_la_table_pour_l_index === nom_de_la_table
                   && elt.proprietes.donnees_rev_de_l_index
                   && elt.proprietes.donnees_rev_de_l_index.indexOf( nom_du_champ ) >= 0
            ){
                /*
                  
                  il faut supprimer le champ de cet index puis supprimer l'index s'il n'y a plus de champ
                */
                var obj=__gi1.__m_rev1.rev_tm( elt.proprietes.donnees_rev_de_l_index );
                if(obj.__xst === __xsu){
                    var j=0;
                    for( j=0 ; j < obj.__xva.length ; j++ ){
                        if(obj.__xva[j][1] === 'champs' && obj.__xva[j][3] === 0 && obj.__xva[j][2] === 'f'){
                            var k=j + 1;
                            for( k=j + 1 ; k < obj.__xva.length ; k++ ){
                                if(obj.__xva[k][1] === nom_du_champ && obj.__xva[k][2] === 'c'){
                                    /*
                                      
                                      ce champ est dans l'index, si c'est le seul champ, on supprime l'index,
                                      sinon on le retire du champ
                                    */
                                    if(obj.__xva[obj.__xva[k][7]][8] === 1){
                                        /*
                                          
                                          c'est le seul champ de l'index, on supprime l'index
                                        */
                                        this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , elt.id_parent );
                                    }else{
                                        var nouvelle_matrice=__gi1.__m_rev1.supprimer_un_element_de_la_matrice( obj.__xva , k , 0 );
                                        var obj=__gi1.__m_rev1.matrice_vers_source_rev1( nouvelle_matrice , 0 , false , 1 );
                                        if(obj.__xst === __xsu){
                                            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes.donnees_rev_de_l_index=obj.__xva;
                                        }else{
                                            debugger;
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    debugger;
                    return;
                }
            }
        }
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      matricée
    */
    modifier_un_champ_de_modale( mat ){
        /* id_svg_rectangle_du_champ , nom_du_champ , nom_de_la_table ]{ */
        let id_svg_rectangle_du_champ=0;
        let nom_du_champ='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_du_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        id_svg_rectangle_du_champ=parseInt( id_svg_rectangle_du_champ , 10 );
        let a=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ];
        let table_mere=document.getElementById( 'table_mère' ).value.trim();
        let champ_pere=document.getElementById( 'champ_père' ).value.trim();
        let reference_amont_ou_aval=false;
        if(table_mere !== ''){
            reference_amont_ou_aval=true;
            if(document.getElementById( 'champ_père' ).value !== ''){
                /* t+=',references(' + document.getElementById( 'table_mère' ).value + ',' + document.getElementById( 'champ_père' ).value + ')'; */
                var reference_amont_aval=-1;
                var id_du_path=-1;
                var j={};
                for(j in this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours]){
                    if(this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j]
                           && this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].id_svg_enfant_champ === id_svg_rectangle_du_champ - 1
                    ){
                        reference_amont_aval=j;
                        id_du_path=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].id_du_path;
                        break;
                    }
                }
                /* recherche des liens croisés */
                var id_svg_parent_champ=0;
                var id_svg_enfant_table=0;
                var id_svg_parent_table=0;
                var max_id_svg=-1;
                var lst2=this.#svg_dessin.getElementsByTagName( '*' );
                for( j=0 ; j < lst2.length ; j++ ){
                    if(lst2[j].id && __gi1.__m_rev1.est_num( lst2[j].id )){
                        var k=parseInt( lst2[j].id , 10 );
                        if(k > max_id_svg){
                            max_id_svg=k;
                        }
                    }
                    if(lst2[j].getAttribute( 'type_element' )
                           && lst2[j].getAttribute( 'type_element' ) === 'rectangle_de_champ'
                           && lst2[j].getAttribute( 'id_svg_de_la_base_en_cours' ) == this.#id_svg_de_la_base_en_cours
                    ){
                        if(lst2[j].getAttribute( 'nom_du_champ' ) === document.getElementById( 'champ_père' ).value
                               && lst2[j].getAttribute( 'nom_de_la_table' ) === document.getElementById( 'table_mère' ).value
                        ){
                            id_svg_parent_champ=parseInt( lst2[j].id , 10 ) - 1;
                        }
                    }
                    if(lst2[j].getAttribute( 'type_element' )
                           && lst2[j].getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'
                           && lst2[j].getAttribute( 'id_svg_de_la_base_en_cours' ) == this.#id_svg_de_la_base_en_cours
                    ){
                        if(lst2[j].getAttribute( 'nom_de_la_table' ) === nom_de_la_table){
                            id_svg_enfant_table=parseInt( lst2[j].getAttribute( 'id_svg_conteneur_table' ) , 10 );
                        }
                    }
                    if(lst2[j].getAttribute( 'type_element' )
                           && lst2[j].getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'
                           && lst2[j].getAttribute( 'id_svg_de_la_base_en_cours' ) == this.#id_svg_de_la_base_en_cours
                    ){
                        if(lst2[j].getAttribute( 'nom_de_la_table' ) === document.getElementById( 'table_mère' ).value){
                            id_svg_parent_table=parseInt( lst2[j].getAttribute( 'id_svg_conteneur_table' ) , 10 );
                        }
                    }
                }
                max_id_svg++;
                if(id_svg_parent_champ === 0 || id_svg_parent_table === 0 || id_svg_enfant_table === 0){
                    alert( 'Veuillez vérifier les champs table mère / champ père' );
                    return;
                }
                debugger;
                let nn=document.getElementById( 'non_nulle' ).checked ? ( '1' ) : ( '0' );
                let couleur='stroke:coral;stroke-opacity:0.6';
                if(nn === true){
                    couleur='stroke:brown;stroke-opacity:0.6';
                }
                if(reference_amont_aval === -1){
                    a.proprietes.references=table_mere + ',' + champ_pere;
                    max_id_svg=id_du_path;
                }else{
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path].proprietes['id_svg_parent_champ']=id_svg_parent_champ;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path].proprietes['id_svg_parent_table']=id_svg_parent_table;
                    a.proprietes.references=table_mere + ',' + champ_pere;
                }
                this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[max_id_svg]={
                    "type" : 'path' ,
                    "id" : max_id_svg ,
                    "id_parent" : this.#id_svg_de_la_base_en_cours ,
                    "proprietes" : {
                        "id" : max_id_svg ,
                        "d" : 'M 0 0 C 10 10 20 20 30 30' ,
                        "type_element" : 'reference_croisée' ,
                        "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                        "id_svg_parent_table" : id_svg_parent_table ,
                        "id_svg_parent_champ" : id_svg_parent_champ ,
                        "id_svg_enfant_table" : id_svg_enfant_table ,
                        "id_svg_enfant_champ" : id_svg_rectangle_du_champ - 1 ,
                        "style" : '' + couleur + ';stroke-width:' + (this.#taille_bordure * 3) + ';fill:transparent;stroke-linejoin:round;stroke-linecap:round;'
                    }
                };
            }
        }else{
            /* on a peut être supprimé un lien */
            var j={};
            for(j in this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours]){
                if(this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j] !== null
                       && this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].id_svg_enfant_champ === id_svg_rectangle_du_champ - 1
                ){
                    var id_du_path=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].id_du_path;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path]=null;
                    this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j]=null;
                    a.proprietes.references='';
                    debugger;
                    break;
                }
            }
        }
        a.proprietes.type=document.getElementById( 'type_du_champ' ).value;
        a.proprietes.primary_key=document.getElementById( 'primary_key' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.non_nulle=document.getElementById( 'non_nulle' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.auto_increment=document.getElementById( 'auto_increment' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.a_une_valeur_par_defaut=document.getElementById( 'a_une_valeur_par_defaut' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.la_valeur_par_defaut_est_caractere=document.getElementById( 'la_valeur_par_defaut_est_caractere' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.valeur_par_defaut=document.getElementById( 'valeur_par_defaut' ).value;
        a.proprietes.champ_date_modification=document.getElementById( 'champ_date_modification' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.champ_date_creation=document.getElementById( 'champ_date_creation' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.champ_numero_de_revision=document.getElementById( 'champ_numero_de_revision' ).checked ? ( '1' ) : ( '0' );
        var afficher_champ_dans_svg=document.getElementById( 'afficher_champ_dans_svg' ).checked ? ( 1 ) : ( 0 );
        if(afficher_champ_dans_svg === '0'){
            if(a.proprietes.primary_key === '1' || a.proprietes.auto_increment === '1' || reference_amont_ou_aval === true){
                afficher_champ_dans_svg=1;
            }
        }
        let obj={
            "afficher_champ_dans_svg" : afficher_champ_dans_svg ,
            "champ_date_modification" : a.proprietes.champ_date_modification ,
            "champ_date_creation" : a.proprietes.champ_date_creation ,
            "champ_numero_de_revision" : a.proprietes.champ_numero_de_revision ,
            "nom_bref_du_champ" : document.getElementById( 'meta_modifier__nom_bref_du_champ' ).value ,
            "nom_court_du_champ" : document.getElementById( 'meta_modifier__nom_court_du_champ' ).value ,
            "nom_long_du_champ" : document.getElementById( 'meta_modifier__nom_long_du_champ' ).value ,
            "typologie" : document.getElementById( 'meta_modifier__typologie' ).value
        };
        let obj_donnees_rev_du_champ=this.#corrige_meta_champ( document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'donnees_rev_du_champ' ) , obj , nom_du_champ );
        if(afficher_champ_dans_svg === 1){
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ - 1].proprietes.style='display:inline;';
        }else{
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ - 1].proprietes.style='display:none;';
        }
        a.proprietes.donnees_rev_du_champ=obj_donnees_rev_du_champ.texte;
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      
      =============================================================================================================
      function modale_modifier_l_index
    */
    modale_modifier_l_index( mat ){
        /* ]{ */
        let nom_de_l_index='';
        let id_svg_conteneur_table=0;
        let id_svg_conteneur_d_index=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_d_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_d_index=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let conteneur_d_index=document.getElementById( id_svg_conteneur_d_index );
        var id_element_svg=0;
        var id_svg_de_la_base_en_cours=0;
        var nom_de_la_table='';
        var i=0;
        var j=0;
        var k=0;
        var l=0;
        /* on ne peut pas chercher un tagname #text */
        var lst=conteneur_d_index.getElementsByTagName( 'text' );
        var i=0;
        for( i=0 ; i < lst.length && id_element_svg === 0 ; i++ ){
            if(lst[i].nodeName.toLowerCase() === 'text' && 'texte_d_index' === lst[i].getAttribute( 'type_element' )){
                var j=0;
                for( j=0 ; j < lst[i].childNodes.length ; j++ ){
                    if(lst[i].childNodes[j].nodeName.toLowerCase() === '#text'){
                        id_element_svg=parseInt( lst[i].id , 0 );
                        id_svg_de_la_base_en_cours=parseInt( lst[i].getAttribute( 'id_svg_de_la_base_en_cours' ) , 0 );
                        nom_de_la_table=lst[i].getAttribute( 'nom_de_la_table_pour_l_index' );
                        break;
                    }
                }
            }
        }
        if(id_element_svg === 0){
            return;
        }
        var liste_des_champs_de_l_index='';
        var unique=false;
        let message='';
        var id_svg_rectangle_de_l_index=0;
        var lst=conteneur_d_index.getElementsByTagName( 'rect' );
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].nodeName.toLowerCase() === 'rect' && 'rectangle_d_index' === lst[i].getAttribute( 'type_element' )){
                id_svg_rectangle_de_l_index=lst[i].getAttribute( 'id' );
                liste_des_champs_de_l_index=document.getElementById( id_svg_rectangle_de_l_index ).getAttribute( 'champs' );
                unique=document.getElementById( id_svg_rectangle_de_l_index ).getAttribute( 'unique' );
                if(lst[i].getAttribute( 'donnees_rev_de_l_index' ) && lst[i].getAttribute( 'donnees_rev_de_l_index' ) !== ''){
                    var obj_matrice_de_l_index=__gi1.__m_rev1.rev_tm( lst[i].getAttribute( 'donnees_rev_de_l_index' ) );
                    if(obj_matrice_de_l_index.__xst === __xsu){
                        for( k=1 ; k < obj_matrice_de_l_index.__xva.length ; k=obj_matrice_de_l_index.__xva[k][12] ){
                            if(obj_matrice_de_l_index.__xva[k][2] === 'f'){
                                if(obj_matrice_de_l_index.__xva[k][1] === 'meta'){
                                    for( l=k + 1 ; l < obj_matrice_de_l_index.__xva.length ; l=obj_matrice_de_l_index.__xva[l][12] ){
                                        if(obj_matrice_de_l_index.__xva[l][1] === 'message' && obj_matrice_de_l_index.__xva[l][2] === 'f'){
                                            if(obj_matrice_de_l_index.__xva[l][8] == 1){
                                                message=obj_matrice_de_l_index.__xva[l + 1][1].replace( /\\'/ , '\'' ).replace( /\\\\/ , '\\' );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        var t='<h1>modifier un index</h1>';
        t+='<hr />';
        t+='<h2>dans le dessin</h2>';
        t+='<h3>changer le nom de l\'index</h3>';
        t+='<input autocapitalize="off" id="nouveau_nom" type="text" value="' + nom_de_l_index + '" />';
        t+='<input id="ancien_nom" type="hidden" value="' + nom_de_l_index + '" />';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(changer_le_nom_d_index_de_modale),' + ' parametre3(' + '  id_svg_text(' + id_element_svg + '),' + '  id_svg_conteneur_table(' + id_svg_conteneur_table + ')' + '  id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + ')' + '  id_svg_conteneur_d_index(' + id_svg_conteneur_d_index + ')' + ' )' + ')" >changer</div>';
        t+='<hr />';
        /*
          champs de l'index
        */
        t+='<h3>changer les champs</h3>';
        t+='<br />liste des champ  : <input type="text" id="liste_des_champs_de_l_index" disabled style="width:100%;" disabled value="' + liste_des_champs_de_l_index + '" />';
        t+='<br />';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(raz_liste_des_champs_de_l_index),' + ' parametre3(' + '  nom_du_champ(\'liste_des_champs_de_l_index\'),' + ' )' + ')" >raz</div>';
        var liste_des_champs=[];
        var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'text' );
        for( i=0 ; i < lst.length ; i++ ){
            if('texte_de_champ' === lst[i].getAttribute( 'type_element' )){
                var j=0;
                for( j=0 ; j < lst[i].childNodes.length ; j++ ){
                    if(lst[i].childNodes[j].nodeName.toLowerCase() === '#text'){
                        liste_des_champs.push( lst[i].childNodes[j].data );
                    }
                }
            }
        }
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(ajouter_un_champ_a_l_index_dans_modale),' + ' parametre3(' + '  nom_du_champ(\'' + liste_des_champs[i] + '\'),' + ' )' + ')" >' + liste_des_champs[i] + '</div>';
        }
        /*
          unique
        */
        t+='<br />';
        t+='<br />unique  : <input type="checkbox" id="unique" ' + (unique === '1' ? ( 'checked' ) : ( '' )) + ' />';
        /*
          message
        */
        t+='<br />message : <br> <input autocapitalize="off" type="text" id="meta_modifier__message" value="' + message.replace( /"/g , '&quot;' ) + '" style="width:100%;" />';
        t+='<br />';
        /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.modifier_un_index_de_modale(' + id_svg_rectangle_de_l_index + ',&quot;' + nom_de_l_index + '&quot;,&quot;' + nom_de_la_table + '&quot;)">modifier</a>'; */
        t+='<br />';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(modifier_un_index_de_modale),' + ' parametre3(' + '  id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),' + '  nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),' + '  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),' + ' )' + ')" >modifier</div>';
        t+='<hr />';
        t+='<h3>supprimer l\'index</h3>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(supprimer_un_index_dans_rev_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        cmd+='  nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+='  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '" >supprimer</div>';
        t+='<hr />';
        t+='<h2>dans la base physique</h2>';
        t+='<h3>ajouter l\'index</h3>';
        /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_un_index_dans_base_de_modale(' + id_svg_rectangle_de_l_index + ',&quot;' + nom_de_l_index + '&quot;,&quot;' + nom_de_la_table + '&quot;)">ajouter</a>'; */
        cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(ajouter_un_index_dans_base_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        cmd+='  nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+='  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + cmd + '" >ajouter</div>';
        t+='<h3>supprimer l\'index</h3>';
        /* t+='<a class="yy__x_signaux_0" href="javascript:' + this.#nom_de_la_variable + '.supprimer_un_index_dans_base_de_modale(' + id_svg_rectangle_de_l_index + ',&quot;' + nom_de_l_index + '&quot;,&quot;' + nom_de_la_table + '&quot;)">supprimer</a>'; */
        cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(supprimer_un_index_dans_base_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        cmd+='  nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+='  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '" >supprimer</div>';
        /*
          document.getElementById( '__contenu_modale' ).innerHTML=t;
          __gi1.global_modale2.showModal();
        */
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
    */
    supprimer_en_bdd_le_champ_de_modale( mat ){
        let id_element_texte_du_nom_de_champ_svg=0;
        let id_svg_conteneur_table=0;
        let id_svg_rectangle_du_champ=0;
        let nom_du_champ='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_element_texte_du_nom_de_champ_svg' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_element_texte_du_nom_de_champ_svg=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_du_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        let obj={
             /*  */
            "__x_action" : 'c_bases1.supprimer_un_champ_de_la_table1(id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + '))' ,
            "__xva" : {
                 /*  */
                "nom_de_la_table" : nom_de_la_table ,
                "nom_du_champ" : nom_du_champ
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
    /*
      =============================================================================================================
      function modale_modifier_le_champ
    */
    modale_modifier_le_champ( mat ){
        /* conteneur_de_champ */
        let id_svg_conteneur_table=0;
        let id_svg_champ_en_cours=0;
        let nom_du_champ='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        let conteneur_de_champ=document.getElementById( id_svg_champ_en_cours );
        var id_element_texte_du_nom_de_champ_svg=0;
        var nom_de_la_table='';
        var i=0;
        var j=0;
        var k=0;
        var l=0;
        /* on ne peut pas chercher un tagname #text */
        var lst=conteneur_de_champ.getElementsByTagName( 'text' );
        var i=0;
        for( i=0 ; i < lst.length && id_element_texte_du_nom_de_champ_svg === 0 ; i++ ){
            if(lst[i].nodeName.toLowerCase() === 'text' && 'texte_de_champ' === lst[i].getAttribute( 'type_element' )){
                var j=0;
                for( j=0 ; j < lst[i].childNodes.length ; j++ ){
                    if(lst[i].childNodes[j].nodeName.toLowerCase() === '#text'){
                        id_element_texte_du_nom_de_champ_svg=parseInt( lst[i].id , 0 );
                        nom_de_la_table=lst[i].getAttribute( 'nom_de_la_table' );
                        break;
                    }
                }
            }
        }
        if(id_element_texte_du_nom_de_champ_svg === 0){
            return;
        }
        var t='';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="interface1.fermer_sous_fenetre1()" >X</div>';
        t+='<h1>modification du champ</h1>';
        t+='<div class="" id="zone_message_modifier_un_champ"></div>';
        t+='<hr />';
        t+='<h2>dans ce dessin</h2>';
        t+='<hr />';
        /*
          =====================================================================================================
          conteneur_de_champ
        */
        t+='<h3>changer le nom de champ</h3>';
        t+='<input id="nouveau_nom" type="text" value="' + nom_du_champ + '" autocapitalize="off" />';
        t+='<input id="ancien_nom" type="hidden" value="' + nom_du_champ + '" autocapitalize="off" />';
        let f='';
        f+='interface1.module1(';
        f+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        f+=' methode3(changer_le_nom_de_champ_de_modale),';
        f+=' parametre3(';
        f+='  id_svg_text(' + id_element_texte_du_nom_de_champ_svg + '),';
        f+='  id_svg_champ_en_cours(' + id_svg_champ_en_cours + '),';
        f+='  id_svg_conteneur_table(\'' + id_svg_conteneur_table + '\')';
        f+='  nom_de_la_table(\'' + nom_de_la_table + '\')';
        f+=' )';
        f+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + f + '" >changer en base et sur le schema</div>';
        f='';
        f+='interface1.module1(';
        f+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        f+=' methode3(changer_le_nom_de_champ_de_modale_sur_le_schema),';
        f+=' parametre3(';
        f+='  id_svg_text(' + id_element_texte_du_nom_de_champ_svg + '),';
        f+='  id_svg_champ_en_cours(' + id_svg_champ_en_cours + '),';
        f+='  id_svg_conteneur_table(\'' + id_svg_conteneur_table + '\')';
        f+='  nom_de_la_table(\'' + nom_de_la_table + '\')';
        f+=' )';
        f+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + f + '" >changer sur le schema uniquement</div>';
        t+='<hr />';
        /*
          =====================================================================================================
        */
        var id_svg_rectangle_du_champ=0;
        var lst=conteneur_de_champ.getElementsByTagName( 'rect' );
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].nodeName.toLowerCase() === 'rect' && 'rectangle_de_champ' === lst[i].getAttribute( 'type_element' )){
                id_svg_rectangle_du_champ=lst[i].getAttribute( 'id' );
                break;
            }
        }
        var type_du_champ=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'type' );
        var primary_key=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'primary_key' ) === '1';
        var auto_increment=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'auto_increment' ) === '1';
        var non_nulle=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'non_nulle' ) === '1';
        var a_une_valeur_par_defaut=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'a_une_valeur_par_defaut' ) === '1';
        var la_valeur_par_defaut_est_caractere=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'la_valeur_par_defaut_est_caractere' ) === '1';
        var valeur_par_defaut=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'valeur_par_defaut' );
        var table_mere=references='';
        var champ_pere=references='';
        var references=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'references' );
        if(references !== null && references !== ''){
            references=references.split( ',' );
            table_mere=references[0];
            champ_pere=references[1];
        }
        var donnees_rev_du_champ=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'donnees_rev_du_champ' );
        let obj_donnees_rev_du_champ=this.#corrige_meta_champ( donnees_rev_du_champ , {} , nom_du_champ );
        let typologie=obj_donnees_rev_du_champ.typologie;
        let nom_bref_du_champ=obj_donnees_rev_du_champ.nom_bref_du_champ;
        let nom_court_du_champ=obj_donnees_rev_du_champ.nom_court_du_champ;
        let nom_long_du_champ=obj_donnees_rev_du_champ.nom_long_du_champ;
        let afficher_champ_dans_svg=obj_donnees_rev_du_champ.afficher_champ_dans_svg;
        let champ_date_modification=obj_donnees_rev_du_champ.champ_date_modification;
        let champ_date_creation=obj_donnees_rev_du_champ.champ_date_creation;
        let champ_numero_de_revision=obj_donnees_rev_du_champ.champ_numero_de_revision;
        t+='<h2>changer les éléments du champ</h2>';
        t+='<br />type  : <input id="type_du_champ" type="text" value="' + type_du_champ + '" autocapitalize="off" />';
        t+='<br />table mère : <input id="table_mère" type="text" value="' + table_mere + '" autocapitalize="off" />';
        t+='<br />champ père : <input id="champ_père" type="text" value="' + champ_pere + '" autocapitalize="off" />';
        t+='<br />clé primary_key  : <input type="checkbox" id="primary_key" ' + (primary_key === true ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />non nulle  : <input type="checkbox" id="non_nulle" ' + (non_nulle === true ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />auto increment  : <input type="checkbox" id="auto_increment" ' + (auto_increment === true ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />a une valeur par défaut <input id="a_une_valeur_par_defaut" type="checkbox"  ' + (a_une_valeur_par_defaut ? ( 'checked="true"' ) : ( '' )) + '/>';
        t+=' , type caractère <input id="la_valeur_par_defaut_est_caractere" type="checkbox" ' + (la_valeur_par_defaut_est_caractere ? ( 'checked="true"' ) : ( '' )) + ' />';
        t+=' , valeur : <input id="valeur_par_defaut" type="text" value="' + valeur_par_defaut.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ) + '" autocapitalize="off" /> ';
        t+='"CURRENT_TIMESTAMP","CURRENT_TIME","CURRENT_DATE"';
        t+='<br /><b>meta</b>';
        t+='<br />typologie : ';
        t+='<select id="meta_modifier__typologie">';
        t+='<option value="chi" ' + (typologie === 'chi' ? ( ' selected' ) : ( '' )) + '>index entier (chi) integer[n]</option>';
        t+='<option value="chx" ' + (typologie === 'chx' ? ( ' selected' ) : ( '' )) + '>référence croisée (chx) integer[n]</option>';
        t+='<option value="che" ' + (typologie === 'che' ? ( ' selected' ) : ( '' )) + '>entier (che) integer[n]</option>';
        t+='<option value="chn" ' + (typologie === 'chn' ? ( ' selected' ) : ( '' )) + '>numérique (chn) float</option>';
        t+='<option value="chu" ' + (typologie === 'chu' ? ( ' selected' ) : ( '' )) + '>choix unique (chu) integer(n)</option>';
        t+='<option value="chm" ' + (typologie === 'chm' ? ( ' selected' ) : ( '' )) + '>choix multiple (chm) text</option>';
        t+='<option value="cht" ' + (typologie === 'cht' ? ( ' selected' ) : ( '' )) + '>texte (cht) text</option>';
        t+='<option value="chp" ' + (typologie === 'chp' ? ( ' selected' ) : ( '' )) + '>phrase (chp) varchar(n)</option>';
        t+='<option value="cho" ' + (typologie === 'cho' ? ( ' selected' ) : ( '' )) + '>mot (cho) character(n)</option>';
        t+='<option value="chd" ' + (typologie === 'chd' ? ( ' selected' ) : ( '' )) + '>date heure (chd) text(23) YYYY-MM-DD HH:MM:SS.SSS</option>';
        t+='<option value="cha" ' + (typologie === 'cha' ? ( ' selected' ) : ( '' )) + '>date character(10)</option>';
        t+='<option value="chh" ' + (typologie === 'chh' ? ( ' selected' ) : ( '' )) + '>heure character(8)</option>';
        t+='<option value="chb" ' + (typologie === 'chb' ? ( ' selected' ) : ( '' )) + '>blob (chb) blob</option>';
        t+='</select>';
        t+='<br />nom_bref_du_champ : ';
        t+='<input type="text" id="meta_modifier__nom_bref_du_champ" value="' + nom_bref_du_champ.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        t+='<br />nom_court_du_champ : ';
        t+='<input type="text" id="meta_modifier__nom_court_du_champ" value="' + nom_court_du_champ.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        t+='<br />nom_long_du_champ : ';
        t+='<input type="text" id="meta_modifier__nom_long_du_champ" value="' + nom_long_du_champ.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        t+='<br />afficher_champ_dans_svg : ';
        t+='<input type="checkbox" id="afficher_champ_dans_svg" ' + (afficher_champ_dans_svg === '1' ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />champ date modification : ';
        t+='<input type="checkbox" id="champ_date_modification" ' + (champ_date_modification === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />champ date création : ';
        t+='<input type="checkbox" id="champ_date_creation" ' + (champ_date_creation === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />champ numero de revision : ';
        t+='<input type="checkbox" id="champ_numero_de_revision" ' + (champ_numero_de_revision === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(modifier_un_champ_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + '),';
        cmd+='  nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '" >modifier</div>';
        /*
          =====================================================================================================
        */
        t+='<hr />';
        t+='<h3>supprimer le champ</h3>';
        t+='<p class="yy__x_signaux_0">Veuillez vérifier que vous avez bien supprimé le champ de la base</p>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(supprimer_le_champ_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_svg_text(' + id_element_texte_du_nom_de_champ_svg + '),';
        cmd+='  id_svg_conteneur_table(\'' + id_svg_conteneur_table + '\')';
        cmd+='  nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+='  id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + '),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '" >supprimer</div>';
        t+='<hr />';
        /*
          =====================================================================================================
          =====================================================================================================
        */
        t+='<h2>dans la base de donnée</h2>';
        /*
          =====================================================================================================
        */
        t+='<hr />';
        t+='<h3>ajouter</h3>';
        /* t+='<a class="yy__x_signaux_0" href="javascript:' + this.#nom_de_la_variable + '.ajouter_en_bdd_le_champ_de_modale(' + id_element_texte_du_nom_de_champ_svg + ',' + id_svg_conteneur_table + ',&quot;' + nom_du_champ + '&quot;,' + id_svg_rectangle_du_champ + ',&quot;' + nom_de_la_table + '&quot;)">ajouter en bdd</a>'; */
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(ajouter_en_bdd_le_champ_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_element_texte_du_nom_de_champ_svg(' + id_element_texte_du_nom_de_champ_svg + '),';
        cmd+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+='  nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+='  id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + ')';
        cmd+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + cmd + '" >ajouter le champ en bdd</div>';
        t+='<span class="yy__x_signaux_0">Ne pas oublier de réécrire la base après un ajout d\'un champ en base de donnée</span>';
        t+='<hr />';
        /*
          =====================================================================================================
        */
        t+='<h3>supprimer</h3>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(supprimer_en_bdd_le_champ_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_element_texte_du_nom_de_champ_svg(' + id_element_texte_du_nom_de_champ_svg + '),';
        cmd+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+='  nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+='  id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + ')';
        cmd+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + cmd + '" >supprimer le champ en bdd</div>';
        t+='<hr />';
        /*
          document.getElementById( '__contenu_modale' ).innerHTML=t;
          __gi1.global_modale2.showModal();
        */
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
      function afficher_resultat_comparaison_base_physique_et_base_virtuelle
    */
    afficher_resultat_comparaison_base_physique_et_base_virtuelle( par ){
        __gi1.fermer_fenetre1();
        var differences_entre_les_tables=false;
        var differences_entre_les_champs=false;
        var differences_entre_les_indexe=false;
        console.log( par );
        var tables={};
        for(var a1 in par['tableau1']){
            tables[a1]={"presente_dans_tableau_1" : true ,"presente_dans_tableau_2" : false};
        }
        for(var a2 in par['tableau2']){
            if(tables.hasOwnProperty( a2 )){
                tables[a2].presente_dans_tableau_2=true;
            }else{
                tables[a2]={"presente_dans_tableau_1" : false ,"presente_dans_tableau_2" : true};
                __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : ' la table ' + a2 + ' est absente du tableau1 '} );
                differences_entre_les_tables=true;
            }
        }
        for(var a0 in tables){
            if(tables[a0].presente_dans_tableau_2 === false){
                __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : ' la table ' + a0 + ' est absente du tableau2'} );
                differences_entre_les_tables=true;
            }
        }
        if(differences_entre_les_tables === true){
            __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : ' des tables ne sont pas les mêmes'} );
        }else{
            __gi1.__m_rev1.empiler_erreur( {"__xst" : __xsu ,"__xme" : ' il y a les mêmes tables dans les deux tableaux'} );
        }
        if(differences_entre_les_tables === false){
            for(var a0 in tables){
                /*
                  les champs sont-t-ils vraiment les mêmes
                */
                for(var i in par['tableau2'][a0].liste_des_champs){
                    if(!par['tableau1'][a0].liste_des_champs.hasOwnProperty( i )){
                        differences_entre_les_champs=true;
                        par['tableau2'][a0].liste_des_champs[i].absent_de_l_autre_tableau=true;
                    }
                }
                for(var i in par['tableau1'][a0].liste_des_champs){
                    if(!par['tableau2'][a0].liste_des_champs.hasOwnProperty( i )){
                        differences_entre_les_champs=true;
                        par['tableau1'][a0].liste_des_champs[i].absent_de_l_autre_tableau=true;
                    }
                }
                for(var i in par['tableau2'][a0].liste_des_indexes){
                    if(!par['tableau1'][a0].liste_des_indexes.hasOwnProperty( i )){
                        differences_entre_les_indexe=true;
                        par['tableau2'][a0].liste_des_indexes[i].absent_de_l_autre_tableau=true;
                    }
                }
                for(var i in par['tableau1'][a0].liste_des_indexes){
                    if(!par['tableau2'][a0].liste_des_indexes.hasOwnProperty( i )){
                        differences_entre_les_indexe=true;
                        par['tableau1'][a0].liste_des_indexes[i].absent_de_l_autre_tableau=true;
                    }
                }
            }
        }
        /*
          analyse des indexes
        */
        var tables_indexes={};
        for(var a0 in tables){
            tables_indexes[a0]={"indexes" : null};
            if(tables[a0].presente_dans_tableau_1 === true && tables[a0].presente_dans_tableau_2 === true){
                var indexes={};
                for(var ind_index in par['tableau1'][a0]['liste_des_indexes']){
                    indexes[ind_index]={
                        "table" : a0 ,
                        "present_dans_tableau_1" : true ,
                        "tableau1" : par['tableau1'][a0]['liste_des_indexes'][ind_index] ,
                        "present_dans_tableau_2" : false ,
                        "tableau2" : null
                    };
                    var champs_de_l_index='';
                    for(var champ_de_l_index in par['tableau1'][a0]['liste_des_indexes'][ind_index]['champs']){
                        champs_de_l_index+=',' + champ_de_l_index;
                    }
                    if(champs_de_l_index !== ''){
                        champs_de_l_index=champs_de_l_index.substr( 1 );
                    }
                    indexes[ind_index]['tableau1'].champs_de_l_index=champs_de_l_index;
                }
                for(var ind_index in par['tableau2'][a0]['liste_des_indexes']){
                    if(indexes.hasOwnProperty( ind_index )){
                        indexes[ind_index].present_dans_tableau_2=true;
                        indexes[ind_index].tableau2=par['tableau2'][a0]['liste_des_indexes'][ind_index];
                        var champs_de_l_index='';
                        for(var champ_de_l_index in par['tableau2'][a0]['liste_des_indexes'][ind_index]['champs']){
                            champs_de_l_index+=',' + champ_de_l_index;
                        }
                        if(champs_de_l_index !== ''){
                            champs_de_l_index=champs_de_l_index.substr( 1 );
                        }
                        indexes[ind_index]['tableau2'].champs_de_l_index=champs_de_l_index;
                        if(indexes[ind_index].tableau2['name'] !== indexes[ind_index].tableau1['name']
                               || indexes[ind_index].tableau2['unique'] !== indexes[ind_index].tableau1['unique']
                               || indexes[ind_index].tableau2['champs_de_l_index'] !== indexes[ind_index].tableau1['champs_de_l_index']
                        ){
                            par['tableau2'][a0]['liste_des_indexes'][ind_index]['different']=true;
                            differences_entre_les_indexe=true;
                        }
                    }else{
                        indexes[ind_index]={
                            "table" : a0 ,
                            "present_dans_tableau_1" : false ,
                            "tableau1" : null ,
                            "present_dans_tableau_2" : true ,
                            "tableau2" : par['tableau2'][a0]['liste_des_indexes'][ind_index]
                        };
                        var champs_de_l_index='';
                        for(var champ_de_l_index in par['tableau2'][a0]['liste_des_indexes'][ind_index]['champs']){
                            champs_de_l_index+=',' + champ_de_l_index;
                        }
                        if(champs_de_l_index !== ''){
                            champs_de_l_index=champs_de_l_index.substr( 1 );
                        }
                        indexes[ind_index]['tableau2'].champs_de_l_index=champs_de_l_index;
                        par['tableau2'][a0]['liste_des_indexes'][ind_index]['different']=true;
                        differences_entre_les_indexe=true;
                    }
                }
                tables_indexes[a0].indexes=JSON.parse( JSON.stringify( indexes ) );
            }
        }
        console.log( 'tables_indexes=' , tables_indexes );
        /*
          analyse des champs des tables
        */
        var tables_champs={};
        for(var a0 in tables){
            tables_champs[a0]={"champs" : null};
            if(tables[a0].presente_dans_tableau_1 === true && tables[a0].presente_dans_tableau_2 === true){
                var champs={};
                for(var ind_champ in par['tableau1'][a0]['liste_des_champs']){
                    champs[ind_champ]={
                        "table" : a0 ,
                        "presente_dans_tableau_1" : true ,
                        "champs1" : par['tableau1'][a0]['liste_des_champs'][ind_champ] ,
                        "presente_dans_tableau_2" : false ,
                        "champs2" : null
                    };
                }
                for(var ind_champ in par['tableau2'][a0]['liste_des_champs']){
                    if(champs.hasOwnProperty( ind_champ )){
                        champs[ind_champ].presente_dans_tableau_2=true;
                        champs[ind_champ].champs2=par['tableau2'][a0]['liste_des_champs'][ind_champ];
                        if(champs[ind_champ].champs2['type'].toLowerCase() !== champs[ind_champ].champs1['type'].toLowerCase()
                               || champs[ind_champ].champs2['dflt_value'] !== champs[ind_champ].champs1['dflt_value']
                               || champs[ind_champ].champs2['auto_increment'] !== champs[ind_champ].champs1['auto_increment']
                               || champs[ind_champ].champs2['notnull'] !== champs[ind_champ].champs1['notnull']
                               || champs[ind_champ].champs2['pk'] !== champs[ind_champ].champs1['pk']
                        ){
                            par['tableau2'][a0]['liste_des_champs'][ind_champ]['different']=true;
                            differences_entre_les_champs=true;
                        }
                    }else{
                        champs[ind_champ]={"table" : a0 ,"presente_dans_tableau_1" : false ,"presente_dans_tableau_2" : true};
                        par['tableau2'][a0]['liste_des_champs'][ind_champ]['different']=true;
                        differences_entre_les_champs=true;
                    }
                }
                if(differences_entre_les_champs === true){
                    for(var champ in champs){
                        if(champs[champ].presente_dans_tableau_1 === true && champs[champ].presente_dans_tableau_2 === true){
                            for(var typechamp in champs[champ]['champs1']){
                                if( typeof champs[champ].champs1[typechamp] === 'object'){
                                }else{
                                    if(champs[champ].champs1[typechamp] === champs[champ].champs2[typechamp]){
                                    }else{
                                        if('cid' === typechamp){
                                        }else if(typechamp === 'auto_increment'){
                                            __gi1.__m_rev1.empiler_erreur( {
                                                    "__xst" : __xer ,
                                                    "__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' , le type ' + typechamp + ' on a une différence mais ce n\'est peut-être pas une erreur ! '
                                                } );
                                        }else{
                                            __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' , le type ' + typechamp + ' on a une différence'} );
                                        }
                                    }
                                }
                            }
                            /*
                              auto_increment: false
                              cid: 0
                              cle_etrangere: {}
                              dflt_value: null
                              name: "chi_id_groupe"
                              notnull: 0
                              pk: 1
                              type: "INTEGER"
                            */
                        }else{
                            if(champs[champ].presente_dans_tableau_1 === true && champs[champ].presente_dans_tableau_2 === false){
                                __gi1.__m_rev1.empiler_erreur( {
                                        "__xst" : __xer ,
                                        "__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' est dans la base physique mais pas dans la base du champ généré '
                                    } );
                            }else{
                                __gi1.__m_rev1.empiler_erreur( {
                                        "__xst" : __xer ,
                                        "__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' est dans la base du champ généré mais pas dans la base physique  '
                                    } );
                            }
                        }
                    }
                }
                tables_champs[a0].champs=JSON.parse( JSON.stringify( champs ) );
            }
        }
        var t='<table>';
        t+='<tr><th>Tables</th><th>dans la base physique</th><th>dans champ genere</th><th>action ou id</th></tr>';
        for(var nom_de_la_table in tables){
            t+='<tr>';
            t+='<td>' + nom_de_la_table + '</td>';
            t+='<td>' + (tables[nom_de_la_table].presente_dans_tableau_1 ? ( '<span class="yy__x_signaux_1">oui</span>' ) : ( 'non' )) + '</td>';
            t+='<td>' + (tables[nom_de_la_table].presente_dans_tableau_2 ? ( '<span class="yy__x_signaux_1">oui</span>' ) : ( 'non' )) + '</td>';
            t+='</tr>';
        }
        t+='</table>';
        t+='<table>';
        t+='<tr>';
        t+='<td colspan="4">';
        t+=differences_entre_les_tables ?
          ( 
            '<div class="yy__x_signaux_0">Il y a une différence entre les tables</div>'
          ) : ( 
            '<div class="yy__x_signaux_1">Pas de différence entre les tables</div>'
          );
        t+=differences_entre_les_champs ?
          ( 
            '<div class="yy__x_signaux_0">Il y a une différence entre les champs</div>'
          ) : ( 
            '<div class="yy__x_signaux_1">Pas de différence entre les champs</div>'
          );
        t+=differences_entre_les_indexe ?
          ( 
            '<div class="yy__x_signaux_0">Il y a une différence entre les indexes</div>'
          ) : ( 
            '<div class="yy__x_signaux_1">Pas de différence entre les indexes</div>'
          );
        t+='</td>';
        t+='</tr>';
        t+='<tr>';
        t+='<tr>';
        t+='<th>Base physique</th>';
        t+='<th>Base du SVG</th>';
        t+='</tr>';
        t+='<tr>';
        var references=['tableau1','tableau2'];
        for(var ref in references){
            t+='<td style="vertical-align: baseline;">';
            t+='<table>';
            for(var nom_de_la_table in par[references[ref]]){
                t+='<tr>';
                t+='<th>' + nom_de_la_table + '</th>';
                t+='<th style="text-align:left;">type</th>';
                t+='<th style="text-align:left;">pk</th>';
                t+='<th style="text-align:left;">nn</th>';
                t+='<th style="text-align:left;max-width:15em;">dft</th>';
                t+='</tr>';
                for(var nom_du_champ in par[references[ref]][nom_de_la_table].liste_des_champs){
                    t+='<tr>';
                    var la_class_quoi='';
                    if(par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].hasOwnProperty( 'different' )
                           && par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].different === true
                    ){
                        la_class_quoi='yy__x_signaux_2';
                    }
                    if(par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].hasOwnProperty( 'absent_de_l_autre_tableau' )
                           && par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].absent_de_l_autre_tableau === true
                    ){
                        la_class_quoi='yy__x_signaux_2';
                    }
                    /*
                      t+='<td class="'+la_class_quoi+'">'+par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].name+'</td>';
                      t+='<td class="'+la_class_quoi+'">'+par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].type+'</td>';
                    */
                    var proprietes_a_tester=['name','type','pk','notnull','dflt_value'];
                    for(var ind_prop in proprietes_a_tester){
                        let le_style=' ';
                        if(proprietes_a_tester[ind_prop] === 'dflt_value'){
                            le_style=' style="max-width:10em;min-width:10em;" ';
                        }
                        /*#
                          if(proprietes_a_tester[ind_prop]==='name' && par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] === 'chp_titre_y' ){
                            debugger
                          }
                        */
                        if(references[ref] === 'tableau1'){
                            if(par['tableau2'][nom_de_la_table].liste_des_champs[nom_du_champ]){
                                if(par['tableau2'][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] !== par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]]
                                ){
                                    t+='<td ' + le_style + ' class="yy__x_signaux_0">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
                                }else{
                                    if(par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] === null
                                           && 'dflt_value' === proprietes_a_tester[ind_prop]
                                    ){
                                        t+='<td ' + le_style + '  class="' + la_class_quoi + '"></td>';
                                    }else{
                                        t+='<td ' + le_style + '  class="' + la_class_quoi + '">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
                                    }
                                }
                            }else{
                                t+='<td ' + le_style + '  class="yy__x_signaux_0">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
                            }
                        }else{
                            t+='<td ' + le_style + '  class="' + la_class_quoi + '">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
                        }
                    }
                    t+='</tr>';
                }
                /*
                  affichage des indexes
                */
                try{
                    if(references[ref] === 'tableau1'){
                        if(tables_indexes.hasOwnProperty( nom_de_la_table )){
                            for(var nom_de_l_index in tables_indexes[nom_de_la_table].indexes){
                                t+='<tr>';
                                if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_1 === false){
                                    t+='<td><b class="yy__x_signaux_0">' + nom_de_l_index + ' absent</b></td>';
                                }else{
                                    t+='<td><b>' + nom_de_l_index + '</b></td>';
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_2 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau2'].unique
                                    ){
                                        t+='<td>unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }else{
                                        t+='<td class="yy__x_signaux_0">unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_2 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].champs_de_l_index === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau2'].champs_de_l_index
                                    ){
                                        t+='<td colspan="5" style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }else{
                                        debugger;
                                        t+='<td colspan="5" class="yy__x_signaux_0"  style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }
                                }
                                t+='</tr>';
                            }
                        }
                    }else if(references[ref] === 'tableau2'){
                        if(tables_indexes.hasOwnProperty( nom_de_la_table )){
                            for(var nom_de_l_index in tables_indexes[nom_de_la_table].indexes){
                                t+='<tr>';
                                t+='<td>';
                                if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_2 === false){
                                    t+='<b class="yy__x_signaux_0">' + nom_de_l_index + ' absent</b>';
                                }else{
                                    t+='<b>' + nom_de_l_index + '</b>';
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_1 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau1'].unique
                                    ){
                                        t+='<td>unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }else{
                                        t+='<td class="yy__x_signaux_0">unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_1 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].champs_de_l_index === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau1'].champs_de_l_index
                                    ){
                                        t+='<td colspan="5" style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }else{
                                        t+='<td colspan="5" class="yy__x_signaux_0" style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }
                                }
                                t+='</td>';
                                t+='</tr>';
                            }
                        }
                    }
                }catch(err){
                    console.error( 'err=' , err );
                    debugger;
                }
            }
            t+='</table>';
            t+='</td>';
        }
        t+='</tr></table>';
        /*
          document.getElementById( '__contenu_modale' ).innerHTML=t;
          __gi1.global_modale2.showModal();
        */
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
      function comparer_la_base_physique_et_la_base_virtuelle
    */
    comparer_la_base_physique_et_la_base_virtuelle( mat ){
        let id_bdd_de_la_base_en_cours=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd_de_la_base_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var obj1=this.#creer_rev_de_la_base_a_partir_de_svg( id_bdd_de_la_base_en_cours );
        if(obj1.__xst === __xsu){
            var obj2=__gi1.__m_rev1.rev_tm( obj1.__xva );
            if(obj2.__xst === __xsu){
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj2.__xva , {} );
                /* debugger */
                if(obj3.__xst === __xsu){
                    let obj={
                         /*  */
                        "__x_action" : 'c_bases1.recuperer_les_tableaux_des_bases(id_bdd_de_la_base_en_cours(' + id_bdd_de_la_base_en_cours + '))' ,
                        "__xva" : {
                             /*  */
                            "source_base_sql" : obj3.__xva ,
                            "id_bdd_de_la_base_en_cours" : id_bdd_de_la_base_en_cours
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                    return;
                }else{
                    debugger;
                }
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        __gi1.fermer_fenetre1();
        __gi1.remplis_les_messages_et_affiche( '' );
    }
    /*
      =============================================================================================================
      ATTACH DATABASE 'db2.sqlite' as 'Y';
      INSERT INTO X.TABLE SELECT * FROM Y.TABLE;
    */
    /*
    */
    creer_la_base_sur_disque_a_partir_du_shema( mat ){
        let id_bdd_de_la_base_en_cours=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd_de_la_base_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#id_bdd_de_la_base_en_cours=parseInt( id_bdd_de_la_base_en_cours , 10 );
        __gi1.supprimer_les_messages();
        let obj=this.#creer_rev_de_la_base_a_partir_de_svg( this.#id_bdd_de_la_base_en_cours );
        if(obj.__xst === __xsu){
            var texte_rev=obj.__xva;
            var obj2=__gi1.__m_rev1.rev_tm( texte_rev );
            if(obj2.__xst === __xsu){
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj2.__xva , {} );
                if(obj3.__xst === __xsu){
                    var source_sql_de_la_base=obj3.__xva;
                }else{
                    __gi1.remplis_les_messages_et_affiche( '' );
                    alert( 'Problème sur reecrire_la_base 1739 ' );
                    return;
                }
            }else{
                __gi1.remplis_les_messages_et_affiche( '' );
                alert( 'Problème sur reecrire_la_base 1739 ' );
                return;
            }
        }else{
            __gi1.remplis_les_messages_et_affiche( '' );
            alert( 'Problème sur reecrire_la_base 1746 ' );
            return;
        }
        obj={
             /*  */
            "__x_action" : 'c_bases1.creer_la_base_sur_disque_a_partir_du_shema(id_bdd_de_la_base(' + id_bdd_de_la_base_en_cours + '))' ,
            "__xva" : {
                 /*  */
                "source_sql_de_la_base" : source_sql_de_la_base ,
                "id_bdd_de_la_base" : id_bdd_de_la_base_en_cours
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
    }
    /*
      =============================================================================================================
      matricée
    */
    copier_le_rev_de_travail_dans_le_rev( mat ){
        let id_bdd_de_la_base_en_cours=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd_de_la_base_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_bdd_de_la_base_en_cours > 0){
            let obj1={
                 /*  */
                "__x_action" : 'c_bases1.copier_le_rev_de_travail_dans_le_rev()' ,
                "__xva" : {
                     /*  */
                    "id_bdd_de_la_base" : id_bdd_de_la_base_en_cours
                }
            };
            __gi1.envoyer_un_message_au_worker( obj1 );
        }
        return;
    }
    /*
      =============================================================================================================
      matricée
    */
    reecrire_la_base_a_partir_du_shema( mat ){
        let id_bdd=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var liste_des_tables=[];
        var liste_des_tables_champs={};
        this.#id_bdd_de_la_base_en_cours=parseInt( id_bdd , 10 );
        __gi1.supprimer_les_messages();
        var obj=this.#creer_rev_de_la_base_a_partir_de_svg( this.#id_bdd_de_la_base_en_cours );
        if(obj.__xst === __xsu){
            var texte_rev=obj.__xva;
            var obj2=__gi1.__m_rev1.rev_tm( texte_rev );
            if(obj2.__xst === __xsu){
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj2.__xva , {} );
                if(obj3.__xst === __xsu){
                    var source_sql_de_la_base=obj3.__xva;
                    var tab=obj2.__xva;
                    var l01=tab.length;
                    for( var i=1 ; i < l01 ; i=tab[i][12] ){
                        if(tab[i][1] === 'créer_table' && tab[i][2] === 'f'){
                            let nom_de_la_table='';
                            for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                                if(tab[j][1] === "nom_de_la_table" && tab[j][2] === 'f'){
                                    if(tab[j][8] === 1 && tab[j + 1][2] === 'c'){
                                        nom_de_la_table=tab[j + 1][1];
                                        liste_des_tables.push( nom_de_la_table );
                                        liste_des_tables_champs[nom_de_la_table]=[];
                                    }else{
                                        __gi1.remplis_les_messages_et_affiche( '' );
                                        alert( 'Problème sur reecrire_la_base 1739 ' );
                                        return;
                                    }
                                }
                            }
                            for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                                if(tab[j][1] === "champs" && tab[j][2] === 'f'){
                                    for( var k=j + 1 ; k < l01 ; k=tab[k][12] ){
                                        if(tab[k][1] === "champ" && tab[k][2] === 'f'){
                                            for( var l=k + 1 ; l < l01 ; l=tab[l][12] ){
                                                if(tab[l][1] === "nom_du_champ" && tab[l][2] === 'f' && tab[l][8] === 1 && tab[l + 1][2] === 'c'){
                                                    liste_des_tables_champs[nom_de_la_table].push( '`' + tab[l + 1][1] + '`' );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    __gi1.remplis_les_messages_et_affiche( '' );
                    alert( 'Problème sur reecrire_la_base 1739 ' );
                    return;
                }
            }else{
                __gi1.remplis_les_messages_et_affiche( '' );
                alert( 'Problème sur reecrire_la_base 1739 ' );
                return;
            }
        }else{
            __gi1.remplis_les_messages_et_affiche( '' );
            alert( 'Problème sur reecrire_la_base 1746 ' );
            return;
        }
        let obj1={
             /*  */
            "__x_action" : 'c_bases1.reecrire_la_base_a_partir_du_shema_sur_disque()' ,
            "__xva" : {
                 /*  */
                "id_bdd_de_la_base" : this.#id_bdd_de_la_base_en_cours ,
                "source_sql_de_la_base" : source_sql_de_la_base ,
                "liste_des_tables" : liste_des_tables ,
                "liste_des_tables_champs" : liste_des_tables_champs
            }
        };
        __gi1.envoyer_un_message_au_worker( obj1 );
        return;
    }
    /*
      =============================================================================================================
      function modale_modifier_la_base
    */
    modale_modifier_la_base( element_g ){
        var t='';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="interface1.fermer_sous_fenetre1()" >X</div>';
        t+='<h1>modification de la base</h1>';
        t+='<hr /><h3>données générales</h3>';
        let obj_meta={"collate" : '' ,"default_charset" : ''};
        var id_svg_rectangle_de_la_base=0;
        var id_bdd_de_la_base=0;
        try{
            var lst=element_g.parentNode.getElementsByTagName( 'rect' );
            id_bdd_de_la_base=parseInt( element_g.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
        }catch(e){
            for( let i=1 ; i < element_g.length ; i++ ){
                if(element_g[i][1] === "id_bdd_de_la_base"
                       && element_g[i][2] === 'f'
                       && element_g[i][8] === 1
                       && element_g[i + 1][2] === 'c'
                ){
                    id_bdd_de_la_base=parseInt( element_g[i + 1][1] , 10 );
                }
            }
            var lst=document.getElementById( "refZnDessin" ).getElementsByTagName( 'rect' );
        }
        for( var i=0 ; i < lst.length ; i++ ){
            if(lst[i].nodeName.toLowerCase() === 'rect'
                   && 'rectangle_de_base' === lst[i].getAttribute( 'type_element' )
                   && parseInt( lst[i].getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 ) === id_bdd_de_la_base
            ){
                id_svg_rectangle_de_la_base=lst[i].getAttribute( 'id' );
                if(lst[i].getAttribute( 'donnees_rev_meta_de_la_base' ) && lst[i].getAttribute( 'donnees_rev_meta_de_la_base' ) !== ''){
                    obj_meta=this.#corrige_meta_base( lst[i].getAttribute( 'donnees_rev_meta_de_la_base' ) , {} );
                }
            }
        }
        t+='<br />default_charset : ' + '<input type="text" id="vv_meta_default_charset" value="' + obj_meta.default_charset.replace( /"/g , '&quot;' ) + '" autocapitalize="off"  /> "utf8mb4"';
        t+='<br />collate : ' + '<input type="text" id="vv_meta_collate" value="' + obj_meta.collate.replace( /"/g , '&quot;' ) + '" autocapitalize="off"  /> "utf8mb4_unicode_ci"';
        t+='<br /><div class="hug_bouton yy__x_signaux_3" data-hug_click="interface1.module1(chemin_module1(\'' + this.#chemin_module1 + '\'),methode3(modifier_la_base_de_modale),parametre3(id_svg_rectangle_de_la_base(' + id_svg_rectangle_de_la_base + ')))">modifier</div>';
        t+='<hr /><h3>Ajouter une table</h3>';
        t+='<input id="vv_nom_de_la_nouvelle_table" type="text" value="tbl_zzzs" autocapitalize="off" />';
        let rev='';
        rev+='interface1.module1(';
        rev+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        rev+=' methode3(ajouter_une_table_provenant_de_modale),';
        rev+=' parametre3(';
        rev+='  id_de_la_zone(\'vv_nom_de_la_nouvelle_table\')';
        rev+=' )';
        rev+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + rev + '">ajouter la table</div>';
        t+='<hr /><h3>comparer la base physique et la base virtuelle</h3>';
        /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.comparer_la_base_physique_et_la_base_virtuelle(' + this.#id_bdd_de_la_base_en_cours + ')">comparer</a>'; */
        rev='';
        rev+='interface1.module1(';
        rev+='    chemin_module1(\'' + this.#chemin_module1 + '\'),';
        rev+='    methode3(comparer_la_base_physique_et_la_base_virtuelle),';
        rev+='    parametre3(';
        rev+='        id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + ')';
        rev+='    )';
        rev+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + rev + '">comparer la base physique et la base virtuelle</div>';
        /*
          =====================================================================================================
        */
        t+='<hr /><h3>réécrire la base physique à partir de ce schéma</h3>';
        t+='<p>il faut que la comparaison soit sans erreur et il faut sauvegarder la base virtuelle</p>';
        rev='';
        rev+='interface1.module1(';
        rev+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        rev+=' methode3(reecrire_la_base_a_partir_du_shema),';
        rev+=' parametre3(';
        rev+='  id_bdd(' + this.#id_bdd_de_la_base_en_cours + ')';
        rev+=' )';
        rev+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + rev + '">réécrire</div>';
        /*
          =====================================================================================================
        */
        t+='<hr /><h3>copier le rev de travail dans le rev</h3>';
        t+='<p>il faut que la comparaison soit sans erreur et il faut sauvegarder la base virtuelle</p>';
        rev='';
        rev+='interface1.module1(';
        rev+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        rev+=' methode3(copier_le_rev_de_travail_dans_le_rev),';
        rev+=' parametre3(';
        rev+='  id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + ')';
        rev+=' )';
        rev+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + rev + '">copier</div>';
        /*
          =====================================================================================================
        */
        t+='<hr /><h3>créer la base physique à partir de ce schéma</h3>';
        /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.creer_la_base_sur_disque_a_partir_du_shema(' + this.#id_bdd_de_la_base_en_cours + ')">créer</a>'; */
        rev='';
        rev+='interface1.module1(';
        rev+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        rev+=' methode3(creer_la_base_sur_disque_a_partir_du_shema),';
        rev+=' parametre3(';
        rev+='  id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + ')';
        rev+=' )';
        rev+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + rev + '">créer</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
      function modifier_une_table_en_bdd
    */
    #modifier_une_table_en_bdd( nom_de_la_table , txt_ordre_original , txt_ordre_modifie , liste_ordre_modifie , mode_supression_de_champ , en_base_et_sur_schema ){
        /*
          cette fonction est utilisée à la fois
          - pour réordonner les champs
          - pour supprimer un champ car même si un "ALTER TABLE t1 DROP COLUMN c1" fonctionne dans sqlite3.exe, il ne fonctionne pas via php !
          Dans ce dernier cas, si en_base_et_sur_schema = __xsu , on supprime aussi sur schema
        */
        var lst=document.getElementsByTagName( 'g' );
        var racine_du_svg=null;
        var id_svg_conteneur_table=0;
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'id_bdd_de_la_base_en_cours' )
                   && parseInt( lst[i].getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 ) === parseInt( this.#id_bdd_de_la_base_en_cours , 10 )
            ){
                racine_du_svg=lst[i];
                break;
            }
        }
        if(racine_du_svg === null){
            return;
        }
        var t0='';
        var tab_des_champs=[];
        var tab_des_index_rev=[];
        var tab_des_index_sql=[];
        lst=racine_du_svg.getElementsByTagName( 'rect' );
        var nom_table_temporaire='___temporaire___';
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) == 'rectangle_de_table'){
                var nom_de_la_table_extraction=lst[i].getAttribute( 'nom_de_la_table' );
                if(nom_de_la_table_extraction === nom_de_la_table){
                    t0=this.#creer_definition_table_en_rev( lst[i] , nom_table_temporaire );
                    debugger;
                    /*
                      id_svg_conteneur_table=parseInt[ lst[i].getAttribute[ 'id_svg_conteneur_table' ] , 10 ];
                      //hugues
                      
                      
                      t0='\ncréer_table[';
                      t0+='\n nom_de_la_table[\'' + nom_table_temporaire + '\'],';
                      t0+='\nmeta[' + lst[i].getAttribute[ 'meta_rev_de_la_table' ] + '\n],';
                      t0+='\n champs[';
                      var lst2=lst[i].parentNode.getElementsByTagName[ 'rect' ];
                      var j=0;
                      for[ j=0 ; j < lst2.length ; j++ ]{
                      if[lst2[j].getAttribute[ 'type_element' ] && lst2[j].getAttribute[ 'type_element' ] == 'rectangle_de_champ']{
                      var nom_du_champ=lst2[j].getAttribute[ 'nom_du_champ' ];
                      tab_des_champs.push[ [nom_du_champ,'champ[' + lst2[j].getAttribute[ 'donnees_rev_du_champ' ] + ']'] ];
                      }
                      }
                    */
                }
            }else if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) == 'rectangle_d_index'){
                if(lst[i].getAttribute( 'nom_de_la_table_pour_l_index' )
                       && lst[i].getAttribute( 'nom_de_la_table_pour_l_index' ) === nom_de_la_table
                ){
                    tab_des_index_rev.push( 'ajouter_index(' + lst[i].getAttribute( 'donnees_rev_de_l_index' ) + ')' );
                }
                /*
                  if[lst[i].getAttribute[ 'donnees_rev_de_l_index' ].indexOf[ 'nom_de_la_table_pour_l_index[\'' + nom_de_la_table ] >= 0]{
                  tab_des_index_rev.push[ 'ajouter_index[' + lst[i].getAttribute[ 'donnees_rev_de_l_index' ] + ']' ];
                  }
                */
            }
        }
        debugger;
        var nouveauTableau=[];
        for( let i=0 ; i < liste_ordre_modifie.length ; i++ ){
            for( let j=0 ; j < tab_des_champs.length ; j++ ){
                if(tab_des_champs[j][0] === liste_ordre_modifie[i]){
                    nouveauTableau.push( tab_des_champs[j][1] );
                }
            }
        }
        var nouveau_rev=(t0 + nouveauTableau.join( ',' )) + '))';
        var chaine_create_table='';
        var obj1=__gi1.__m_rev1.rev_tm( nouveau_rev );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                chaine_create_table=obj2.__xva;
            }else{
                return;
            }
        }else{
            return;
        }
        for( let i=0 ; i < tab_des_index_rev.length ; i++ ){
            var obj1=__gi1.__m_rev1.rev_tm( tab_des_index_rev[i] );
            if(obj1.__xst === __xsu){
                var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    tab_des_index_sql.push( obj2.__xva );
                }else{
                    return;
                }
            }else{
                return;
            }
        }
        return;
    }
    /*
      =============================================================================================================
      function reordonner_les_champs_de_la_table_dans_le_svg
    */
    #reordonner_les_champs_de_la_table_dans_le_svg( id_bdd_de_la_base , nom_de_la_table , ordre_modifie , id_svg_conteneur_table , nouveau_rev ){
        /*
          supprimer récursivement tous les éléments de la table
        */
        this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd_de_la_base , id_svg_conteneur_table );
        var obj1=__gi1.__m_rev1.rev_tm( nouveau_rev );
        if(obj1.__xst === __xsu){
            var indice_courant=this.#recuperer_prochain_id_svg();
            this.#ajouter_table_et_index_a_arbre( obj1.__xva , 1 , indice_courant , id_bdd_de_la_base , nom_de_la_table );
            this.#modifier_les_references_des_liens( id_bdd_de_la_base );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      matricée
    */
    bouton_ordonner_les_champs_sur_svg_uniquement( mat ){
        let nom_de_la_table='';
        let id_svg_rectangle_de_la_table=0;
        let id_svg_conteneur_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var ids_ordre_modifie=[];
        var lst=document.getElementById( 'ordre_modifie' ).getElementsByTagName( 'div' );
        for( let i=0 ; i < lst.length ; i++ ){
            ids_ordre_modifie.push( lst[i].getAttribute( 'data-id_rectangle_champ' ) );
        }
        var chaine_des_index='';
        lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'rect' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'){
                chaine_des_index+=this.#creer_definition_index_en_rev( lst[i] );
            }
        }
        debugger;
        let nouveau_rev=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , null , ids_ordre_modifie );
        this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , id_svg_conteneur_table );
        nouveau_rev+=chaine_des_index;
        var obj1=__gi1.__m_rev1.rev_tm( nouveau_rev );
        if(obj1.__xst === __xsu){
            var indice_courant=this.#recuperer_prochain_id_svg();
            let id_tab_table_en_cours=0;
            for( let i=1 ; i < obj1.__xva.length ; i++ ){
                if(obj1.__xva[i][1] === 'créer_table' && obj1.__xva[i][2] === 'f'){
                    id_tab_table_en_cours=i;
                    break;
                }
            }
            this.#ajouter_table_et_index_a_arbre( obj1.__xva , id_tab_table_en_cours , indice_courant , this.#id_bdd_de_la_base_en_cours , nom_de_la_table );
            this.#modifier_les_references_des_liens( this.#id_bdd_de_la_base_en_cours );
        }
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      matricée
    */
    bouton_ordonner_les_champs_en_base_et_sur_le_svg( mat ){
        let nom_de_la_table='';
        let id_svg_rectangle_de_la_table=0;
        let id_svg_conteneur_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var liste_ordre_modifie=[];
        var txt_ordre_original='';
        var txt_ordre_modifie='';
        var ids_ordre_original=[];
        var ids_ordre_modifie=[];
        var lst=document.getElementById( 'ordre_original' ).getElementsByTagName( 'div' );
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            txt_ordre_original+=',' + lst[i].innerHTML;
            ids_ordre_original.push( lst[i].getAttribute( 'data-id_rectangle_champ' ) );
        }
        var lst=document.getElementById( 'ordre_modifie' ).getElementsByTagName( 'div' );
        for( i=0 ; i < lst.length ; i++ ){
            txt_ordre_modifie+=',' + lst[i].innerHTML;
            liste_ordre_modifie.push( lst[i].innerHTML );
            ids_ordre_modifie.push( lst[i].getAttribute( 'data-id_rectangle_champ' ) );
        }
        if(txt_ordre_modifie === ''){
            return;
        }
        txt_ordre_modifie=txt_ordre_modifie.substr( 1 );
        txt_ordre_original=txt_ordre_original.substr( 1 );
        /*
          création de la table temporaire
        */
        let reference_base='`bdd_' + this.#id_bdd_de_la_base_en_cours + '`.';
        let nom_table_temporaire='`____tempo____`';
        let t0=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , nom_table_temporaire , ids_ordre_modifie );
        let chaine_create_table='';
        var obj1=__gi1.__m_rev1.rev_tm( t0 );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                chaine_create_table=obj2.__xva + '\n';
            }else{
                return;
            }
        }else{
            return;
        }
        /*
          copie des données de la table actuelle vers la table temporaire
        */
        let ttt='';
        ttt+='insérer(';
        ttt+='   nom_de_la_table(' + nom_table_temporaire + '),';
        ttt+='   valeurs(';
        for( let i=0 ; i < liste_ordre_modifie.length ; i++ ){
            ttt+='     champ( `' + liste_ordre_modifie[i] + '` )';
        }
        ttt+='   ),';
        ttt+='   sql(';
        ttt+='      sélectionner(';
        ttt+='         valeurs( ';
        for( let i=0 ; i < liste_ordre_modifie.length ; i++ ){
            ttt+='     champ( `' + liste_ordre_modifie[i] + '` )';
        }
        ttt+='         ),';
        ttt+='         provenance(';
        ttt+='            table_reference(';
        ttt+='              source( nom_de_la_table(`' + nom_de_la_table + '`))';
        ttt+='            )';
        ttt+='         )';
        ttt+='      )';
        ttt+='   )';
        ttt+=')';
        let chaine_copier_donnees='';
        var obj1=__gi1.__m_rev1.rev_tm( ttt );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                chaine_copier_donnees=obj2.__xva + '\n\n';
            }else{
                return;
            }
        }else{
            return;
        }
        let chaine_drop='\n\nDROP TABLE `' + nom_de_la_table + '`;\n';
        let chaine_renommer='\n\nALTER TABLE  ' + nom_table_temporaire + ' RENAME TO `' + nom_de_la_table + '`;\n';
        var chaine_des_index='';
        lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'rect' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'){
                chaine_des_index+=this.#creer_definition_index_en_rev( lst[i] );
            }
        }
        let chaine_creer_index='';
        if(chaine_des_index !== ''){
            var obj1=__gi1.__m_rev1.rev_tm( chaine_des_index );
            if(obj1.__xst === __xsu){
                var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    chaine_creer_index=obj2.__xva + '\n';
                }else{
                    return;
                }
            }else{
                return;
            }
        }
        let les_sql='';
        les_sql+='BEGIN TRANSACTION;\n';
        les_sql+=chaine_create_table;
        les_sql+=chaine_copier_donnees;
        les_sql+=chaine_drop;
        les_sql+=chaine_renommer;
        les_sql+=chaine_creer_index;
        les_sql+='COMMIT;';
        var maj='';
        maj+='maj_interface1(fermer_fenetre1())';
        maj+='methode_module_dynamique1(';
        maj+='  nom_du_module2("_js/c_svg_bdd1.js"),';
        maj+='  methode2(apres_trier_les_champs1),';
        maj+='  valeurs2(';
        maj+='    id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
        maj+='    id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        maj+='    ids_ordre_modifie(' + ids_ordre_modifie.join( ',' ) + ')';
        maj+='    id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
        maj+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        maj+='    chaine_des_index(' + chaine_des_index + ')';
        maj+='  )';
        maj+=')';
        let obj={
             /*  */
            "__x_action" : 'c_bases1.executer_sql3(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '))' ,
            "__xva" : {
                 /*  */
                "source_sql" : les_sql ,
                "operation_table" : 'reordonner_les_champs' ,
                "maj" : maj
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
    }
    /*
      =============================================================================================================
    */
    apres_trier_les_champs1( par ){
        console.log( par );
        let rev0=par['maj'];
        var obj1=__gi1.__m_rev1.rev_tm( rev0 );
        let id_bdd_de_la_base=0;
        let id_svg_conteneur_table=0;
        let ids_ordre_modifie=[];
        let id_svg_rectangle_de_la_table=0;
        let nom_de_la_table='';
        let chaine_des_index='';
        if(obj1.__xst === __xsu){
            let mat=obj1.__xva;
            for( let i=1 ; i < mat.length ; i++ ){
                if(mat[i][1] === 'valeurs2' && mat[i][2] === 'f'){
                    for( let j=i + 1 ; j < mat.length ; j=mat[j][12] ){
                        if(mat[j][1] === 'id_bdd_de_la_base' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            id_bdd_de_la_base=parseInt( mat[j + 1][1] , 10 );
                        }else if(mat[j][1] === 'id_svg_conteneur_table' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            id_svg_conteneur_table=parseInt( mat[j + 1][1] , 10 );
                        }else if(mat[j][1] === 'id_svg_rectangle_de_la_table' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            id_svg_rectangle_de_la_table=parseInt( mat[j + 1][1] , 10 );
                        }else if(mat[j][1] === 'nom_de_la_table' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            nom_de_la_table=mat[j + 1][1];
                        }else if(mat[j][1] === 'chaine_des_index' && mat[j][2] === 'f'){
                            let obj3=__gi1.__m_rev1.matrice_vers_source_rev1( mat , j , true , j + 1 );
                            if(obj3.__xst === __xsu){
                                chaine_des_index=obj3.__xva;
                            }
                        }else if(mat[j][1] === 'ids_ordre_modifie' && mat[j][2] === 'f'){
                            for( let k=j + 1 ; k < mat.length ; k=mat[k][12] ){
                                if(mat[k][2] === 'c'){
                                    ids_ordre_modifie.push( mat[k][1] );
                                }
                            }
                        }
                    }
                }
            }
        }else{
            debugger;
        }
        let nouveau_rev=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , null , ids_ordre_modifie );
        this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd_de_la_base , id_svg_conteneur_table );
        nouveau_rev+=chaine_des_index;
        var obj1=__gi1.__m_rev1.rev_tm( nouveau_rev );
        if(obj1.__xst === __xsu){
            var indice_courant=this.#recuperer_prochain_id_svg();
            let id_tab_table_en_cours=0;
            for( let i=1 ; i < obj1.__xva.length ; i++ ){
                if(obj1.__xva[i][1] === 'créer_table' && obj1.__xva[i][2] === 'f'){
                    id_tab_table_en_cours=i;
                    break;
                }
            }
            this.#ajouter_table_et_index_a_arbre( obj1.__xva , id_tab_table_en_cours , indice_courant , id_bdd_de_la_base , nom_de_la_table );
            this.#modifier_les_references_des_liens( id_bdd_de_la_base );
        }
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      matricée
    */
    ajouter_l_index_dans_modale( mat ){
        let nom_de_la_table='';
        let id_svg_conteneur_table=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var i=0;
        var j=0;
        var liste_des_champs_de_l_index=document.getElementById( 'liste_des_champs_de_l_index' ).value;
        if(liste_des_champs_de_l_index.trim() === ''){
            return;
        }
        var nom_de_l_index=document.getElementById( 'nom_de_l_index' ).value;
        if(nom_de_l_index.trim() === ''){
            return;
        }
        
        let trouve=false;
        var lst=document.getElementById(id_svg_conteneur_table).getElementsByTagName('rect');
        for(let i=0;i<lst.length;i++){
            if(lst[i].getAttribute('type_element') && 'rectangle_d_index'===lst[i].getAttribute('type_element') ){
                if(lst[i].getAttribute('nom_de_l_index')===nom_de_l_index){
                    trouve=true;
                    break
                }
            }
        }

        if(trouve===false){
            
            
            var message_de_l_index=document.getElementById( 'message_de_l_index' ).value;
            var unique=document.getElementById( 'unique' ).checked ? ( 1 ) : ( 0 );
            var max_id=-1;
            var lst=this.#svg_dessin.getElementsByTagName( '*' );
            for( i=0 ; i < lst.length ; i++ ){
                if(lst[i].id && __gi1.__m_rev1.est_num( lst[i].id )){
                    j=parseInt( lst[i].id , 10 );
                    if(j > max_id){
                        max_id=j;
                    }
                }
            }
            max_id++;
            let donnees_rev_de_l_index='meta(#(),genre_meta(index_de_table),message(\'' + message_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'))';
            var a=this.#ajouter_index_a_table( this.#id_bdd_de_la_base_en_cours , max_id , nom_de_l_index , id_svg_conteneur_table , nom_de_la_table , donnees_rev_de_l_index , liste_des_champs_de_l_index , unique );
            __gi1.fermer_fenetre1();
            this.#dessiner_le_svg();
        }
    }
    /*
      
      =============================================================================================================
      matricée
    */
    raz_liste_des_champs_de_l_index(){
        document.getElementById( 'liste_des_champs_de_l_index' ).value='';
    }
    /*
      =============================================================================================================
      matricée
    */
    ajouter_un_champ_a_l_index_dans_modale( mat ){
        var nom_du_champ='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        var contenu_actuel=document.getElementById( 'liste_des_champs_de_l_index' ).value;
        if(contenu_actuel === ''){
            document.getElementById( 'liste_des_champs_de_l_index' ).value='\'' + nom_du_champ.replace( /\\/ , '\\\\' ).replace( /\'/ , '\\\'' ) + '\'';
        }else{
            document.getElementById( 'liste_des_champs_de_l_index' ).value=document.getElementById( 'liste_des_champs_de_l_index' ).value + ',\'' + nom_du_champ.replace( /\\/ , '\\\\' ).replace( /\'/ , '\\\'' ) + '\'';
        }
    }
    /*
      =============================================================================================================
    */
    marquer_ou_demarquer_comme_dt_modification( mat ){
        let id_rectangle_de_champ=0;
        let id_svg_conteneur_table=0;
        let champ_date_modification=0;
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_rectangle_de_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_rectangle_de_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'champ_date_modification' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_date_modification=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let obj=this.#corrige_meta_champ( document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ) , {"champ_date_modification" : champ_date_modification} , null );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ].proprietes.donnees_rev_du_champ=obj.texte;
        let scrlTop=document.getElementById( 'vv_sous_fenetre1' ).scrollTop;
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
        /* id_svg_conteneur_table */
        var obj1=__gi1.__m_rev1.rev_tm( 'id_svg_conteneur_table(' + id_svg_conteneur_table + '),scrollTop(' + scrlTop + ')' );
        if(obj1.__xst === __xsu){
            this.modale_gerer_la_table( obj1.__xva );
        }
    }
    /*
      =============================================================================================================
    */
    marquer_ou_demarquer_comme_revision( mat ){
        let id_rectangle_de_champ=0;
        let id_svg_conteneur_table=0;
        let champ_numero_de_revision=0;
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_rectangle_de_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_rectangle_de_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'champ_numero_de_revision' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_numero_de_revision=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let obj=this.#corrige_meta_champ( document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ) , {"champ_numero_de_revision" : champ_numero_de_revision} , null );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ].proprietes.donnees_rev_du_champ=obj.texte;
        let scrlTop=document.getElementById( 'vv_sous_fenetre1' ).scrollTop;
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
        /* id_svg_conteneur_table */
        var obj1=__gi1.__m_rev1.rev_tm( 'id_svg_conteneur_table(' + id_svg_conteneur_table + '),scrollTop(' + scrlTop + ')' );
        if(obj1.__xst === __xsu){
            this.modale_gerer_la_table( obj1.__xva );
        }
    }
    /*
      =============================================================================================================
    */
    marquer_ou_demarquer_comme_dt_creation( mat ){
        let id_rectangle_de_champ=0;
        let id_svg_conteneur_table=0;
        let champ_date_creation=0;
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_rectangle_de_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_rectangle_de_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'champ_date_creation' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_date_creation=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let obj=this.#corrige_meta_champ( document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ) , {"champ_date_creation" : champ_date_creation} , null );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ].proprietes.donnees_rev_du_champ=obj.texte;
        let scrlTop=document.getElementById( 'vv_sous_fenetre1' ).scrollTop;
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
        /* id_svg_conteneur_table */
        var obj1=__gi1.__m_rev1.rev_tm( 'id_svg_conteneur_table(' + id_svg_conteneur_table + '),scrollTop(' + scrlTop + ')' );
        if(obj1.__xst === __xsu){
            this.modale_gerer_la_table( obj1.__xva );
        }
    }
    /*
      =============================================================================================================
    */
    masquer_ou_afficher_le_champ( mat ){
        let id_rectangle_de_champ=0;
        let id_svg_conteneur_table=0;
        let afficher_champ_dans_svg=0;
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_rectangle_de_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_rectangle_de_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'afficher_champ_dans_svg' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                afficher_champ_dans_svg=parseInt( mat[i + 1][1] , 10 );
            }
        }
        /* donnees_rev_du_champ */
        let obj=this.#corrige_meta_champ( document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ) , {"afficher_champ_dans_svg" : afficher_champ_dans_svg} , null );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ].proprietes.donnees_rev_du_champ=obj.texte;
        if(afficher_champ_dans_svg == 1){
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ - 1].proprietes.style='display:inline;';
        }else{
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ - 1].proprietes.style='display:none;';
        }
        let scrlTop=document.getElementById( 'vv_sous_fenetre1' ).scrollTop;
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
        /* id_svg_conteneur_table */
        var obj1=__gi1.__m_rev1.rev_tm( 'id_svg_conteneur_table(' + id_svg_conteneur_table + '),scrollTop(' + scrlTop + ')' );
        if(obj1.__xst === __xsu){
            this.modale_gerer_la_table( obj1.__xva );
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    remplir_champ_avec_valeur( mat ){
        let id_du_champ='';
        let valeur='';
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'valeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=mat[i + 1][1];
            }
        }
        try{
            document.getElementById( id_du_champ ).value=valeur;
        } catch {}
    }
    /*
      =============================================================================================================
      matricée
    */
    modale_gerer_la_table( mat ){
        /* element_g_conteneur_de_nom_de_table */
        let id_svg_conteneur_table=-1;
        let scrollTop=0;
        for( let i=1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'scrollTop' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                scrollTop=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_svg_conteneur_table < 0){
            debugger;
            return;
        }
        let element_g_conteneur_de_nom_de_table=document.getElementById( id_svg_conteneur_table );
        var nom_de_la_table='';
        var id_svg_du_texte=0;
        var element_g_conteneur_de_table=element_g_conteneur_de_nom_de_table;
        /* .parentNode; */
        /* on ne peut pas chercher un tagname #text */
        var liste_des_champs=[];
        var lst=element_g_conteneur_de_table.getElementsByTagName( 'text' );
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].nodeName.toLowerCase() === 'text' && 'texte_de_nom_de_table' === lst[i].getAttribute( 'type_element' )){
                var j=0;
                for( j=0 ; j < lst[i].childNodes.length ; j++ ){
                    if(lst[i].childNodes[j].nodeName.toLowerCase() === '#text'){
                        nom_de_la_table=lst[i].childNodes[j].data;
                        id_svg_du_texte=lst[i].id;
                    }
                }
            }else if('texte_de_champ' === lst[i].getAttribute( 'type_element' )){
                var j=0;
                for( j=0 ; j < lst[i].childNodes.length ; j++ ){
                    if(lst[i].childNodes[j].nodeName.toLowerCase() === '#text'){
                        liste_des_champs.push( {
                                "nom_du_champ" : lst[i].childNodes[j].data ,
                                "id_rectangle_de_champ" : parseInt( lst[i].childNodes[j].parentNode.parentNode.id , 10 ) + 1
                            } );
                    }
                }
            }
        }
        if(id_svg_du_texte === 0){
            return;
        }
        var t='';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="interface1.fermer_sous_fenetre1()" >X</div>';
        t+='<h1>gestion de la table</h1>';
        t+='<hr />';
        t+='<h2>dans ce dessin</h2>';
        t+='<h3>Supprimer la table </h3>';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(supprimer_la_table_de_modale),' + ' parametre3(' + '  id_svg_conteneur_table(' + id_svg_conteneur_table + '),' + '  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')' + ' )' + ')" >supprimer</div>';
        t+='<hr />';
        t+='<h3>changer le nom de la table</h3>';
        t+='<input id="nouveau_nom" type="text" value="' + nom_de_la_table + '" autocapitalize="off" />';
        t+='<input id="ancien_nom" type="hidden" value="' + nom_de_la_table + '" autocapitalize="off" />';
        let id_svg_rectangle_de_la_table=0;
        var lst=element_g_conteneur_de_table.getElementsByTagName( 'rect' );
        for( i=0 ; i < lst.length ; i++ ){
            if('rectangle_de_table' === lst[i].getAttribute( 'type_element' )){
                id_svg_rectangle_de_la_table=lst[i].id;
                break;
            }
        }
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(changer_le_nom_de_table_en_base_et_sur_le_svg),';
        cmd+=' parametre3(' + '  id_svg_du_texte(' + id_svg_du_texte + '),';
        cmd+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="' + cmd + '" >changer dans la base et sur le svg</div>';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(changer_le_nom_de_table_sur_le_svg),';
        cmd+=' parametre3(' + '  id_svg_du_texte(' + id_svg_du_texte + '),';
        cmd+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + cmd + '" >changer sur le svg</div>';
        t+='<hr />';
        t+='<h3>modifier ses propriétés</h3>';
        let nouveau_meta=this.#corrige_meta_table( document.getElementById( id_svg_rectangle_de_la_table ).getAttribute( 'meta_rev_de_la_table' ) , {} );
        t+='<br />default_charset <input type="text" id="meta_modifier__default_charset" value="' + nouveau_meta.default_charset.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" /> "utf8mb4"';
        t+='<br />collate <input type="text" id="meta_modifier__collate" value="' + nouveau_meta.collate.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" /> "utf8mb4_unicode_ci"';
        t+='<br />nom_long_de_la_table <input type="text" id="meta_modifier__nom_long_de_la_table" value="' + nouveau_meta.nom_long_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        t+='<br />nom_court_de_la_table <input type="text" id="meta_modifier__nom_court_de_la_table" value="' + nouveau_meta.nom_court_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        t+='<br />nom_bref_de_la_table <input type="text" id="meta_modifier__nom_bref_de_la_table" value="' + nouveau_meta.nom_bref_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        t+='<br />';
        /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.modifier_la_table_de_modale(' + id_svg_rectangle_de_la_table + ',&quot;' + nom_de_la_table + '&quot;)">modifier</a>'; */
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(modifier_la_table_de_modale),';
        cmd+=' parametre3(';
        cmd+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + '),';
        cmd+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '\')';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '" >modifier</div>';
        /*
          =====================================================================================================
        */
        t+='<hr />';
        t+='<h3>ajouter un champ</h3>';
        t+='<div class="yy__x_signaux_0" id="zone_message_ajouter_un_champ"></div>';
        t+='typologie : ';
        t+='<select id="typologie">';
        t+='<option value="">choisissez une typologie</option>';
        t+='<option value="chi">index entier (chi) integer[n]</option>';
        t+='<option value="chp">phrase (chp) varchar(n)</option>';
        t+='<option value="chx">référence croisée (chx) integer[n]</option>';
        t+='<option value="che">entier (che) integer[n]</option>';
        t+='<option value="chn">numérique (chn) float</option>';
        t+='<option value="chu">choix unique (chu) integer(n)</option>';
        t+='<option value="chm">choix multiple (chm) text</option>';
        t+='<option value="cht">texte (cht) text</option>';
        t+='<option value="cho">mot (cho) character(n)</option>';
        t+='<option value="chd">date heure (chd) text(23) YYYY-MM-DD HH:MM:SS.SSS</option>';
        t+='<option value="cha">date character(10)</option>';
        t+='<option value="chh">heure character(8)</option>';
        t+='<option value="chb">blob (chb) blob</option>';
        t+='<option value="ch?">inconnue (ch?)</option>';
        t+='</select>';
        t+='<br />';
        t+='nom : ';
        t+='<input id="nom_du_champ" type="text" value="chi_" autocapitalize="off" />';
        t+='<br />type  : <input id="chp_type_champ" type="text" value="" autocapitalize="off" />';
        let t1=['INTEGER','VARCHAR(64)','TEXT'];
        for( let ind=0 ; ind < t1.length ; ind++ ){
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
            cmd+=' methode3(remplir_champ_avec_valeur),';
            cmd+=' parametre3(';
            cmd+='  id_du_champ(chp_type_champ),';
            cmd+='  valeur(\'' + t1[ind] + '\')';
            cmd+=' )';
            cmd+=')';
            t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '" >' + t1[ind] + '</div>';
        }
        t+='<br />table mère pour chx  : <input id="table_mère" type="text" value="" autocapitalize="off" />';
        t+='<br />champ père pour chx  : <input id="champ_père" type="text" value="" autocapitalize="off" />';
        t+='<br />index primary_key <input id="primary_key" type="checkbox" /> ';
        t+='<br />non nulle <input id="non_nulle" type="checkbox" /> ';
        t+='<br />auto increment <input id="auto_increment" type="checkbox" /> ';
        t+='<br />a une valeur par défaut <input id="a_une_valeur_par_defaut" type="checkbox" />';
        t+=' , type caractère <input id="la_valeur_par_defaut_est_caractere" type="checkbox" />';
        t+=' , valeur : <input id="valeur_par_defaut" type="text" value="" autocapitalize="off"  /> ';
        t+='<br />nom long du champ : <input type="text" id="meta_ajouter__nom_long_du_champ" value="A faire ..." autocapitalize="off" />';
        t+='<br />nom court du champ : <input type="text" id="meta_ajouter__nom_court_du_champ" value="A faire ..." autocapitalize="off" />';
        t+='<br />nom bref du champ : <input type="text" id="meta_ajouter__nom_bref_du_champ" value="A faire ..." autocapitalize="off" />';
        t+='<br />afficher_champ_dans_svg : <input id="afficher_champ_dans_svg" type="checkbox" checked />';
        t+='<br />champ_date_modification : <input id="champ_date_modification" type="checkbox" />';
        t+='<br />champ_date_creation : <input id="champ_date_creation" type="checkbox" />';
        t+='<br />champ_numero_de_revision : <input id="champ_numero_de_revision" type="checkbox" />';
        t+='<br />';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(ajouter_un_champ_de_modale),' + ' parametre3(' + '  id_svg_conteneur_table(' + id_svg_conteneur_table + '),' + '  nom_de_la_table(\'' + nom_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '\')' + ' )' + ')" >ajouter</div>';
        t+='<hr />';
        t+='<h3>ajouter un index</h3>';
        t+='nom : <input id="nom_de_l_index" type="text" value="idx_" autocapitalize="off" />';
        t+='<br />';
        t+='liste des champs : <input id="liste_des_champs_de_l_index" type="text" value="" disabled style="width:90%;" autocapitalize="off"/>';
        t+='<br />';
        /* t+='<a class="yyalarme" href="javascript:' + this.#nom_de_la_variable + '.raz_liste_des_champs_de_l_index()">raz</a>'; */
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(raz_liste_des_champs_de_l_index),' + ' parametre3(' + '  nom_du_champ(\'liste_des_champs_de_l_index\'),' + ' )' + ')" >raz</div>';
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
            t+='interface1.module1(';
            t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
            t+=' methode3(ajouter_un_champ_a_l_index_dans_modale),';
            t+=' parametre3(';
            t+='  nom_du_champ(\'' + liste_des_champs[i].nom_du_champ + '\'),';
            t+=' )';
            t+=')" >' + liste_des_champs[i].nom_du_champ + '</div>';
        }
        t+='<br />message de l\'index : <input id="message_de_l_index" type="text" value="" autocapitalize="off" />';
        t+='<br />unique  : <input type="checkbox" id="unique" />';
        t+='<br />';
        /* t+='<a class="yyinfo" href="javascript:' + this.#nom_de_la_variable + '.ajouter_l_index_dans_modale(&quot;' + nom_de_la_table + '&quot;,' + element_g_conteneur_de_nom_de_table.getAttribute( 'id_svg_conteneur_table' ) + ')">ajouter</a>'; */
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(ajouter_l_index_dans_modale),' + ' parametre3(' + '  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),' + '  id_svg_conteneur_table(' + id_svg_conteneur_table + '),' + ' )' + ')" >ajouter cet index</div>';
        /*  */
        t+='<hr />';
        t+='<h2>dans la bdd</h2>';
        t+='<hr />';
        t+='<h3>Créer la table dans la bdd</h3>';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(ajouter_la_table_en_base_de_modale),' + ' parametre3(' + '  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),' + '  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + '),' + ' )' + ')" >ajouter la table dans la base</div>';
        /*  */
        t+='<h3>supprimer la table dans la bdd</h3>';
        t+='<div class="hug_bouton yy__x_signaux_0" data-hug_click="';
        t+='interface1.module1(';
        t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        t+=' methode3(supprimer_la_table_en_base_de_modale),';
        t+=' parametre3(';
        t+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        t+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ' ),';
        t+=' )';
        t+=')" >supprimer la table dans la base</div>';
        /*
          
        */
        t+='<hr />';
        t+='<h3>ordonner les champs dans la bdd</h3>';
        t+='<table><tr>';
        t+='<th>original</th>';
        t+='<th>modifié<br /><span style="color:red;">glisser / déplacer avec la souris</span></th><th>action</th>';
        t+='</tr>';
        t+='<tr><td>';
        t+='<div id="ordre_original">';
        /* nom_du_champ : lst[i].childNodes[j].data , id_rectangle_de_champ : */
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<div ';
            t+=' style="padding:' + __gi1.css_dimensions.t_padding + 'px;border:' + __gi1.css_dimensions.t_border + 'px white solid;"';
            t+=' data-id_rectangle_champ="' + liste_des_champs[i].id_rectangle_de_champ + '"';
            t+='>' + liste_des_champs[i].nom_du_champ;
            t+='</div>';
        }
        t+='</div></td><td style="text-align:center;">';
        t+='<div id="ordre_modifie" style="cursor:n-resize;">';
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<div ';
            t+=' style="padding:' + __gi1.css_dimensions.t_padding + 'px;border:' + __gi1.css_dimensions.t_border + 'px red outset;"';
            t+=' data-id_rectangle_champ="' + liste_des_champs[i].id_rectangle_de_champ + '"';
            t+='>' + liste_des_champs[i].nom_du_champ + '</div>';
        }
        t+='</div></td><td>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(bouton_ordonner_les_champs_en_base_et_sur_le_svg),';
        cmd+=' parametre3(';
        cmd+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ' ),';
        cmd+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ' ),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">ordonner dans la base et ici</div>';
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(bouton_ordonner_les_champs_sur_svg_uniquement),';
        cmd+=' parametre3(';
        cmd+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ' ),';
        cmd+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ' ),';
        cmd+=' )';
        cmd+=')';
        t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="' + cmd + '">ordonner ici uniquement</div>';
        t+='</td></tr></table>';
        /*
          
        */
        t+='<hr />';
        t+='<h3>opérations sur les champs </h3>';
        t+='<table><tr>';
        t+='<th>champs</th>';
        t+='<th>action</th>';
        t+='<th>dt crea</th>';
        t+='<th>dt mod</th>';
        t+='<th  title="numéro de révision">nu rev</th>';
        t+='<th>rev</th>';
        let il_existe_un_champ_date_creation=-1;
        let il_existe_un_champ_date_modification=-1;
        let il_existe_un_champ_numero_de_revision=-1;
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            let tt=document.getElementById( liste_des_champs[i].id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' );
            if(tt.indexOf( 'champ_date_creation(1)' ) >= 0){
                il_existe_un_champ_date_creation=i;
            }
            if(tt.indexOf( 'champ_date_modification(1)' ) >= 0){
                il_existe_un_champ_date_modification=i;
            }
            if(tt.indexOf( 'champ_numero_de_revision(1)' ) >= 0){
                il_existe_un_champ_numero_de_revision=i;
            }
        }
        t+='</tr>';
        /* nom_du_champ : lst[i].childNodes[j].data , id_rectangle_de_champ : */
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<tr><td>';
            t+=liste_des_champs[i].nom_du_champ;
            t+='</td><td>';
            if(document.getElementById( liste_des_champs[i].id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ).indexOf( 'afficher_champ_dans_svg(0)' ) >= 0
            ){
                t+='<div class="hug_bouton yy__x_signaux_1" data-hug_click="';
                t+='interface1.module1(';
                t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                t+=' methode3(masquer_ou_afficher_le_champ),';
                t+=' parametre3(';
                t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                t+='  afficher_champ_dans_svg(1),';
                t+=' )';
                t+=')" >afficher</div>';
            }else{
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                t+='interface1.module1(';
                t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                t+=' methode3(masquer_ou_afficher_le_champ),';
                t+=' parametre3(';
                t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                t+='  afficher_champ_dans_svg(0),';
                t+=' )';
                t+=')" >masquer</div>';
            }
            t+='</td>';
            /*
              
              
            */
            t+='<td>';
            if(il_existe_un_champ_date_creation === i){
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                t+='interface1.module1(';
                t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                t+=' methode3(marquer_ou_demarquer_comme_dt_creation),';
                t+=' parametre3(';
                t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                t+='  champ_date_creation(0),';
                t+=' )';
                t+=')" >retirer dt crea</div>';
            }else{
                if(il_existe_un_champ_date_creation === -1){
                    t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                    t+='interface1.module1(';
                    t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                    t+=' methode3(marquer_ou_demarquer_comme_dt_creation),';
                    t+=' parametre3(';
                    t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                    t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                    t+='  champ_date_creation(1),';
                    t+=' )';
                    t+=')" >ajouter dt crea</div>';
                }
            }
            t+='</td>';
            /*
              
              
            */
            t+='<td>';
            if(il_existe_un_champ_date_modification === i){
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                t+='interface1.module1(';
                t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                t+=' methode3(marquer_ou_demarquer_comme_dt_modification),';
                t+=' parametre3(';
                t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                t+='  champ_date_modification(0),';
                t+=' )';
                t+=')" >retirer dt mod</div>';
            }else{
                if(il_existe_un_champ_date_modification === -1){
                    t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                    t+='interface1.module1(';
                    t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                    t+=' methode3(marquer_ou_demarquer_comme_dt_modification),';
                    t+=' parametre3(';
                    t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                    t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                    t+='  champ_date_modification(1),';
                    t+=' )';
                    t+=')" >ajouter dt mod</div>';
                }
            }
            t+='</td>';
            /*
              
              
            */
            t+='<td>';
            if(il_existe_un_champ_numero_de_revision === i){
                t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                t+='interface1.module1(';
                t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                t+=' methode3(marquer_ou_demarquer_comme_revision),';
                t+=' parametre3(';
                t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                t+='  champ_numero_de_revision(0),';
                t+=' )';
                t+=')" title="numéro de révision" >retirer nur rev</div>';
            }else{
                if(il_existe_un_champ_numero_de_revision === -1){
                    t+='<div class="hug_bouton yy__x_signaux_3" data-hug_click="';
                    t+='interface1.module1(';
                    t+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
                    t+=' methode3(marquer_ou_demarquer_comme_revision),';
                    t+=' parametre3(';
                    t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
                    t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
                    t+='  champ_numero_de_revision(1),';
                    t+=' )';
                    t+=')" title="numéro de révision" >ajouter nur rev</div>';
                }
            }
            t+='</td>';
            t+='<td>';
            t+='';
            /* document.getElementById( liste_des_champs[i].id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ); */
            t+='</td>';
            t+='</tr>';
        }
        /*
          
        */
        t+='<hr />';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        document.getElementById( 'vv_sous_fenetre1' ).scrollTop=scrollTop;
        __gi1.ajoute_les_evenements_aux_boutons( null );
        var tt=new Sortable( ordre_modifie , {"animation" : 150 ,"ghostClass" : 'blue-background-class'} );
    }
    /*
      
      =============================================================================================================
      function svg_ajuster_la_largeur_de_la_base
    */
    #svg_ajuster_la_largeur_de_la_base( id_svg_de_la_base_en_cours ){
        var id_bdd_de_la_base_en_cours=parseInt( document.getElementById( id_svg_de_la_base_en_cours ).getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
        /*
          for( var i in this.#arbre[id_bdd_de_la_base_en_cours].arbre_svg){
          var el=this.#arbre[id_bdd_de_la_base_en_cours].arbre_svg[i];
          if(el.proprietes.type_element==="conteneur_de_table"){
          this.#svg_ajuster_largeur_de_table(el.id);
          
          }
          
          }
        */
        var indiceRectangle=parseInt( id_svg_de_la_base_en_cours , 10 ) + 1;
        var element_rectangle=document.getElementById( indiceRectangle );
        /*
          
          on fait disparaître le rectangle de la base pour obtenir la taille du groupe
        */
        try{
            element_rectangle.style.display='none';
        }catch(e){
            debugger;
        }
        var temp=document.getElementById( id_svg_de_la_base_en_cours ).getBBox();
        var groupe_apres_modifications={"x" : temp.x ,"y" : temp.y ,"width" : temp.width ,"height" : temp.height};
        element_rectangle.setAttribute( 'x' , Math.floor( groupe_apres_modifications.x - 1 * this.#taille_bordure ) );
        element_rectangle.setAttribute( 'y' , Math.floor( groupe_apres_modifications.y - 1 * this.#taille_bordure ) );
        element_rectangle.setAttribute( 'width' , Math.ceil( groupe_apres_modifications.width + 2 * this.#taille_bordure ) );
        var hauteur_du_carre_de_la_base=Math.ceil( groupe_apres_modifications.height + 2 * this.#taille_bordure );
        if(hauteur_du_carre_de_la_base < 2 * this.#hauteur_de_boite){
            hauteur_du_carre_de_la_base=2 * this.#hauteur_de_boite;
        }
        element_rectangle.setAttribute( 'height' , hauteur_du_carre_de_la_base );
        /*
          
          on fait réaparaître le rectangle de la base
        */
        element_rectangle.style.display='';
    }
    /*
      
      =============================================================================================================
      function svg_ajuster_largeur_de_table
    */
    #svg_ajuster_largeur_de_table( indice_svg_table_en_cours ){
        var gparent=document.getElementById( indice_svg_table_en_cours );
        var lst=gparent.getElementsByTagName( 'rect' );
        /* on masque tous les rectangles */
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'rectangle_de_table'
                       || lst[i].getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'
                       || lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'
                       || lst[i].getAttribute( 'type_element' ) === 'rectangle_de_champ'
                ){
                    lst[i].style.display='none';
                }
            }
        }
        /* on les réaffiche tous */
        var temp=gparent.getBBox();
        var largeur=parseInt( temp.width , 10 ) + 1 + this.#taille_bordure;
        if(largeur < 40){
            largeur=40;
        }
        var position_gauche_de_la_table=0;
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'rectangle_de_table'){
                    lst[i].setAttribute( 'width' , largeur + 2 * this.#taille_bordure );
                    position_gauche_de_la_table=parseInt( lst[i].parentElement.getAttribute( 'decallage_x' ) , 10 );
                }else if(lst[i].getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'
                       || lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'
                       || lst[i].getAttribute( 'type_element' ) === 'rectangle_de_champ'
                ){
                    lst[i].setAttribute( 'width' , largeur );
                }
                lst[i].style.display='';
            }
        }
        /*
          
          mise à jour de la position des liens aval
        */
        var lst=this.#svg_dessin.getElementById( this.#id_svg_de_la_base_en_cours ).getElementsByTagName( 'path' );
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'type_element' ) === 'reference_croisée'
                       && lst[i].getAttribute( 'id_svg_parent_table' ) == indice_svg_table_en_cours
                ){
                    var d=lst[i].getAttribute( 'd' );
                    var ancien_chemin=lst[i].getAttribute( 'd' );
                    var tab_chemin=ancien_chemin.split( ' ' );
                    tab_chemin[6]=position_gauche_de_la_table + largeur + 30;
                    tab_chemin[8]=position_gauche_de_la_table + largeur + 2 * this.#taille_bordure;
                    var nouveau_chemin=tab_chemin.join( ' ' );
                    lst[i].setAttribute( 'd' , nouveau_chemin );
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[lst[i].id].proprietes.d=nouveau_chemin;
                }
            }
        }
        var j={};
        for(j in this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours]){
            if(this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j] !== null
                   && indice_svg_table_en_cours === this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].id_svg_parent_table
            ){
                this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].p2[0]=position_gauche_de_la_table + largeur + 2 * this.#taille_bordure;
            }
        }
        this.#svg_ajuster_la_largeur_de_la_base( this.#id_svg_de_la_base_en_cours );
    }
    /*
      
      =============================================================================================================
      function supprimer_recursivement_les_elements_de_l_arbre
    */
    #supprimer_recursivement_les_elements_de_l_arbre( id_bdd , id_parent ){
        var i={};
        for(i in this.#arbre[id_bdd].arbre_svg){
            if(this.#arbre[id_bdd].arbre_svg[i] !== null && this.#arbre[id_bdd].arbre_svg[i].id_parent === id_parent){
                this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd , this.#arbre[id_bdd].arbre_svg[i].id );
            }
        }
        if(this.#arbre[id_bdd].arbre_svg[id_parent].proprietes
               && this.#arbre[id_bdd].arbre_svg[id_parent].proprietes.type_element
               && this.#arbre[id_bdd].arbre_svg[id_parent].proprietes.type_element === "rectangle_de_champ"
               && this.#arbre[id_bdd].arbre_svg[id_parent].proprietes.donnees_rev_du_champ
               && this.#arbre[id_bdd].arbre_svg[id_parent].proprietes.donnees_rev_du_champ.indexOf( 'references(' )
        ){
            /*
              si on supprime un champ qui a des parents, il faut supprimer dens l'arbre le path correspondant
            */
            var id_svg_champ_en_cours=this.#arbre[id_bdd].arbre_svg[id_parent].proprietes.id_svg_champ_en_cours;
            var id_svg_conteneur_table=this.#arbre[id_bdd].arbre_svg[id_parent].proprietes.id_svg_conteneur_table;
            var j={};
            for(j in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
                if(this.#svg_tableaux_des_references_amont_aval[id_bdd][j]
                       && id_svg_conteneur_table === this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_enfant_table
                       && id_svg_champ_en_cours === this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_enfant_champ
                ){
                    var id_du_path=this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_du_path;
                    this.#arbre[id_bdd].arbre_svg[id_du_path]=null;
                    this.#svg_tableaux_des_references_amont_aval[id_bdd][j]=null;
                }
            }
            /*
              si on supprime un champ qui a des enfants, il faut supprimer ses enfants
            */
            var j={};
            for(j in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
                if(this.#svg_tableaux_des_references_amont_aval[id_bdd][j]
                       && id_svg_conteneur_table === this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_parent_table
                       && id_svg_champ_en_cours === this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_parent_champ
                ){
                    this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd , this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_enfant_champ );
                }
            }
        }
        this.#arbre[id_bdd].arbre_svg[id_parent]=null;
    }
    /*
      =============================================================================================================
      matricée
    */
    modifier_la_base_de_modale( mat ){
        let id_svg_rectangle_de_la_base=-1;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_la_base' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_svg_rectangle_de_la_base >= 0){
            let texte_rev=document.getElementById( id_svg_rectangle_de_la_base ).getAttribute( 'donnees_rev_meta_de_la_base' );
            let nouveau_meta=this.#corrige_meta_base( texte_rev , {
                "default_charset" : document.getElementById( 'vv_meta_default_charset' ).value ,
                "collate" : document.getElementById( 'vv_meta_collate' ).value
            } );
            debugger;
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_la_base].proprietes.donnees_rev_meta_de_la_base=nouveau_meta.texte;
            __gi1.fermer_fenetre1();
            this.#dessiner_le_svg();
        }else{
            debugger;
        }
    }
    /*
      =============================================================================================================
    */
    modifier_la_table_de_modale( mat ){
        /* id_svg_rectangle_de_la_table , nom_de_la_table ]{ */
        let id_svg_rectangle_de_la_table='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        let default_charset=document.getElementById( "meta_modifier__default_charset" ).value;
        let collate=document.getElementById( "meta_modifier__collate" ).value;
        let nom_long_de_la_table=document.getElementById( "meta_modifier__nom_long_de_la_table" ).value;
        let nom_court_de_la_table=document.getElementById( "meta_modifier__nom_court_de_la_table" ).value;
        let nom_bref_de_la_table=document.getElementById( "meta_modifier__nom_bref_de_la_table" ).value;
        let nouveau_meta=this.#corrige_meta_table( document.getElementById( id_svg_rectangle_de_la_table ).getAttribute( 'meta_rev_de_la_table' ) , {
            "default_charset" : default_charset ,
            "collate" : collate ,
            "nom_long_de_la_table" : nom_long_de_la_table ,
            "nom_court_de_la_table" : nom_court_de_la_table ,
            "nom_bref_de_la_table" : nom_bref_de_la_table
        } );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_la_table].proprietes.meta_rev_de_la_table=nouveau_meta.texte;
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      le nom_de_table_alternatif est utilisé pour des tables temporaires
    */
    #creer_definition_table_en_rev( element_svg_rectangle_de_table , nom_de_table_alternatif=null , liste_des_ids_des_rectangles_des_champs_nouveau=null ){
        var nom_de_la_table='';
        if(nom_de_table_alternatif !== null){
            nom_de_la_table=nom_de_table_alternatif;
        }else{
            nom_de_la_table=element_svg_rectangle_de_table.getAttribute( 'nom_de_la_table' );
        }
        let nouveau_meta=this.#corrige_meta_table( element_svg_rectangle_de_table.getAttribute( 'meta_rev_de_la_table' ) , {} );
        var definition_de_table='';
        var liste_des_ids_des_rectangles_des_champs=[];
        if(liste_des_ids_des_rectangles_des_champs_nouveau === null){
            var lst2=element_svg_rectangle_de_table.parentNode.getElementsByTagName( 'rect' );
            var j=0;
            for( j=0 ; j < lst2.length ; j++ ){
                if(lst2[j].getAttribute( 'type_element' ) && lst2[j].getAttribute( 'type_element' ) === 'rectangle_de_champ'){
                    liste_des_ids_des_rectangles_des_champs.push( lst2[j].id );
                }
            }
        }else{
            liste_des_ids_des_rectangles_des_champs=liste_des_ids_des_rectangles_des_champs_nouveau;
        }
        /*
          definition_de_table+='\n#(=================================================================)';
        */
        definition_de_table+='\ncréer_table(';
        definition_de_table+='\n nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        definition_de_table+=nouveau_meta.texte;
        if(liste_des_ids_des_rectangles_des_champs.length > 0){
            /* '\nmeta(' + le_meta + '\n),'; */
            definition_de_table+='\n champs(';
            for( j=0 ; j < liste_des_ids_des_rectangles_des_champs.length ; j++ ){
                let tt=this.creer_definition_de_champ_a_partir_de_svg_rectangle( liste_des_ids_des_rectangles_des_champs[j] );
                definition_de_table+='\n' + tt;
            }
            definition_de_table+='\n ),';
        }
        definition_de_table+='\n)';
        return definition_de_table;
    }
    /*
      =============================================================================================================
    */
    creer_definition_de_champ_a_partir_de_svg_rectangle( id_svg_rectangle_de_champ ){
        let tt='';
        let elem=document.getElementById( id_svg_rectangle_de_champ );
        tt+='champ(';
        tt+='    nom_du_champ(\'' + elem.getAttribute( 'nom_du_champ' ) + '\'),';
        tt+='    type(\'' + elem.getAttribute( 'type' ) + '\'),';
        if(elem.getAttribute( 'primary_key' ) === '1'){
            tt+='    primary_key(' + elem.getAttribute( 'primary_key' ) + '),';
        }
        if(elem.getAttribute( 'non_nulle' ) === '1'){
            tt+='    non_nulle(' + elem.getAttribute( 'non_nulle' ) + '),';
        }
        if(elem.getAttribute( 'auto_increment' ) === '1'){
            tt+='    auto_increment(' + elem.getAttribute( 'auto_increment' ) + '),';
        }
        if(elem.getAttribute( 'references' ) !== ''){
            tt+='    references(' + elem.getAttribute( 'references' ) + '),';
        }
        if(elem.getAttribute( 'a_une_valeur_par_defaut' ) !== ''){
            if(elem.getAttribute( 'a_une_valeur_par_defaut' ) === '1'){
                tt+='    a_une_valeur_par_defaut(' + elem.getAttribute( 'a_une_valeur_par_defaut' ) + '),';
                if(elem.getAttribute( 'la_valeur_par_defaut_est_caractere' ) !== ''){
                    tt+='    la_valeur_par_defaut_est_caractere(' + elem.getAttribute( 'la_valeur_par_defaut_est_caractere' ) + '),';
                }
                if(elem.getAttribute( 'valeur_par_defaut' ) !== ''){
                    if(elem.getAttribute( 'la_valeur_par_defaut_est_caractere' ) === '1'){
                        tt+='    valeur_par_defaut(\'' + elem.getAttribute( 'valeur_par_defaut' ) + '\'),';
                    }else{
                        tt+='    valeur_par_defaut(' + elem.getAttribute( 'valeur_par_defaut' ) + '),';
                    }
                }
            }
        }
        tt+=elem.getAttribute( 'donnees_rev_du_champ' );
        tt+=')';
        return tt;
    }
    /*
      =============================================================================================================
    */
    #creer_definition_index_en_rev( element_svg_rectangle_de_l_index ){
        let definition_de_l_index='';
        definition_de_l_index+='\n#(=================================================================)';
        definition_de_l_index+='\najouter_index(';
        definition_de_l_index+='\n #(),';
        /*  */
        let nom_de_la_table_pour_l_index=element_svg_rectangle_de_l_index.getAttribute( 'nom_de_la_table_pour_l_index' );
        definition_de_l_index+='\n nom_de_la_table_pour_l_index(\'' + nom_de_la_table_pour_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        /*  */
        let nom_de_l_index=element_svg_rectangle_de_l_index.getAttribute( 'nom_de_l_index' );
        definition_de_l_index+='\n nom_de_l_index(\'' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        /*  */
        let meta=element_svg_rectangle_de_l_index.getAttribute( 'donnees_rev_de_l_index' );
        definition_de_l_index+='\n ' + meta + '';
        /*  */
        let champs=element_svg_rectangle_de_l_index.getAttribute( 'champs' );
        definition_de_l_index+='\n champs(' + champs + '),';
        /*  */
        let unique=element_svg_rectangle_de_l_index.getAttribute( 'unique' );
        if(unique === '1'){
            definition_de_l_index+='\n unique(),';
        }
        /*  */
        definition_de_l_index+=')';
        /* debugger */
        return definition_de_l_index;
    }
    /*
      =============================================================================================================
      function supprimer_la_table_en_base_de_modale
    */
    supprimer_la_table_en_base_de_modale( mat ){
        let id_svg_rectangle_de_la_table=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var source_sql='DROP table ' + nom_de_la_table;
        let id_bdd_de_la_base=parseInt( document.getElementById( id_svg_rectangle_de_la_table ).parentNode.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
        let obj={
             /*  */
            "__x_action" : 'c_bases1.operation_table_dans_base(id_bdd_de_la_base(' + id_bdd_de_la_base + '))' ,
            "__xva" : {
                 /*  */
                "source_sql" : source_sql ,
                "operation_table" : 'supprimer_une_table'
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
    /*
      =============================================================================================================
      matricée
    */
    ajouter_la_table_en_base_de_modale( mat ){
        let id_svg_rectangle_de_la_table=0;
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var t=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , null , null );
        var obj1=__gi1.__m_rev1.rev_tm( t );
        if(obj1.__xst === __xsu){
            let obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let id_bdd_de_la_base=parseInt( document.getElementById( id_svg_rectangle_de_la_table ).parentNode.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                if(id_bdd_de_la_base > 0){
                    let obj={
                         /*  */
                        "__x_action" : 'c_bases1.operation_table_dans_base(id_bdd_de_la_base(' + id_bdd_de_la_base + '))' ,
                        "__xva" : {
                             /*  */
                            "operation_table" : 'creer_une_table' ,
                            "source_sql" : obj2.__xva
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                    return;
                }else{
                    debugger;
                }
            }else{
                debugger;
            }
        }else{
            debugger;
        }
    }
    /*
      =============================================================================================================
      matricée
    */
    supprimer_la_table_de_modale( mat ){
        if(!confirm( 'certain ?' )){
            return;
        }
        let id_svg_conteneur_table='';
        let nom_de_la_table='';
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        id_svg_conteneur_table=parseInt( id_svg_conteneur_table , 10 );
        /*
          
          suppression des références éventuelles sur cette table
          on recherche toutes les références à cette table
        */
        var liste_des_id_svg_champs=[];
        var i={};
        for(i in this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg){
            if(this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i] !== null
                   && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes
                   && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes.donnees_rev_du_champ
                   && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes.donnees_rev_du_champ.indexOf( 'references' ) >= 0
            ){
                /*
                  
                  On repère tous les champs qui font référence à cette table         
                */
                var obj=__gi1.__m_rev1.rev_tm( this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes.donnees_rev_du_champ );
                if(obj.__xst === __xsu){
                    var j=0;
                    for( j=0 ; j < obj.__xva.length ; j++ ){
                        if(obj.__xva[j][7] === 0 && obj.__xva[j][1] === 'references' && obj.__xva[j][2] === 'f'){
                            if(obj.__xva[j + 1][1] === nom_de_la_table){
                                var id_svg_champ_a_supprimer=this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].id_parent;
                                /* on stock l'id du champ et on supprime le champ de l'arbre */
                                liste_des_id_svg_champs.push( id_svg_champ_a_supprimer );
                                this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , id_svg_champ_a_supprimer );
                            }
                        }
                    }
                }else{
                    return;
                }
            }
        }
        var i=0;
        for( i=0 ; i < liste_des_id_svg_champs.length ; i++ ){
            var j={};
            for(j in this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg){
                if(this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[j] !== null
                       && this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[j].type === 'path'
                       && (this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[j].proprietes.id_svg_enfant_champ === liste_des_id_svg_champs[i]
                           || this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[j].proprietes.id_svg_parent_champ === liste_des_id_svg_champs[i])
                ){
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[j]=null;
                }
            }
        }
        /*
          
          on supprime la table
        */
        this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , id_svg_conteneur_table );
        /*
          
          il faut supprimer les liens de svg_tableaux_des_references_amont_aval
        */
        var i=0;
        for( i=0 ; i < liste_des_id_svg_champs.length ; i++ ){
            var j={};
            for(j in this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours]){
                if(this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j] !== null
                       && liste_des_id_svg_champs[i] === this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j].id_svg_enfant_champ
                ){
                    this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j]=null;
                }
            }
        }
        __gi1.fermer_fenetre1();
        this.#dessiner_le_svg();
        this.#svg_ajuster_la_largeur_de_la_base( this.#id_svg_de_la_base_en_cours );
    }
    /*
      
      =============================================================================================================
      function doigt_bouge
    */
    #doigt_bouge( e ){
        this.#souris_bouge( e.touches[0] );
    }
    /*
      
      =============================================================================================================
      function doigt_haut
    */
    #doigt_haut( e ){
        console.log( 'ici e=' , e.changedTouches );
        this.#souris_haut( e.changedTouches[0] );
    }
    /*
      
      =============================================================================================================
      function doigt_bas
    */
    #doigt_bas( e ){
        console.log( e );
        this.#souris_bas( e.touches[0] );
    }
    /*
      
      =============================================================================================================
      function souris_bouge
    */
    #souris_bouge( e ){
        this.#souris_init_objet.x_final=e[this.#propriete_pour_deplacement_x];
        this.#souris_init_objet.y_final=e[this.#propriete_pour_deplacement_y];
        try{
            /* permer de ne pas sélectionner les textes , ne fonctionne pas sur les mobiles */
            e.preventDefault();
        }catch(er){}
        if(this.#souris_element_a_deplacer === 'svg'){
            var calculx=(this.#souris_init_objet.x - e[this.#propriete_pour_deplacement_x]) * this.#_dssvg.zoom1 + this.#souris_init_objet.param_bouge.x;
            var calculy=(this.#souris_init_objet.y - e[this.#propriete_pour_deplacement_y]) * this.#_dssvg.zoom1 + this.#souris_init_objet.param_bouge.y;
            this.#souris_init_objet.elem_bouge.setAttribute( 'viewBox' , calculx + ',' + calculy + ',' + this.#souris_init_objet.elem_bouge.viewBox.baseVal.width + ',' + this.#souris_init_objet.elem_bouge.viewBox.baseVal.height );
            return;
        }else if(this.#souris_element_a_deplacer === 'base'){
            var calculx=(e[this.#propriete_pour_deplacement_x] - this.#souris_init_objet.x) * this.#_dssvg.zoom1 + this.#souris_init_objet.param_bouge.x;
            var calculy=(e[this.#propriete_pour_deplacement_y] - this.#souris_init_objet.y) * this.#_dssvg.zoom1 + this.#souris_init_objet.param_bouge.y;
            calculx=parseInt( calculx , 10 );
            calculy=parseInt( calculy , 10 );
            if(this.#taille_bordure% 2 !== 0){
                calculx+=0.5;
                calculy+=0.5;
            }
            this.#souris_init_objet.elem_bouge.setAttribute( 'transform' , 'translate(' + calculx + ',' + calculy + ')' );
            this.#souris_init_objet.elem_bouge.setAttribute( 'decallage_x' , calculx );
            this.#souris_init_objet.elem_bouge.setAttribute( 'decallage_y' , calculy );
            /* mise à jour de l'arbre */
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[this.#souris_init_objet.id_svg_conteneur_base].proprietes.transform='translate(' + calculx + ',' + calculy + ')';
            return;
        }else if(this.#souris_element_a_deplacer === 'table'){
            this.#svg_souris_delta_x=(e[this.#propriete_pour_deplacement_x] - this.#souris_init_objet.x) * this.#_dssvg.zoom1;
            this.#svg_souris_delta_y=(e[this.#propriete_pour_deplacement_y] - this.#souris_init_objet.y) * this.#_dssvg.zoom1;
            var calculx=parseInt( this.#svg_souris_delta_x + this.#souris_init_objet.param_bouge.x , 10 );
            var calculy=parseInt( this.#svg_souris_delta_y + this.#souris_init_objet.param_bouge.y , 10 );
            this.#souris_init_objet.elem_bouge.setAttribute( 'transform' , 'translate(' + calculx + ',' + calculy + ')' );
            this.#souris_init_objet.elem_bouge.setAttribute( 'decallage_x' , calculx );
            this.#souris_init_objet.elem_bouge.setAttribute( 'decallage_y' , calculy );
            /* mise à jour de l'arbre */
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[this.#souris_init_objet.id_svg_conteneur_table].proprietes.decallage_x=calculx;
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[this.#souris_init_objet.id_svg_conteneur_table].proprietes.decallage_y=calculy;
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[this.#souris_init_objet.id_svg_conteneur_table].proprietes.transform='translate(' + calculx + ',' + calculy + ')';
            /*
              
              déplacement des liens de la table en cours de mouvement 
            */
            if(this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours]){
                var i=0;
                for( i=0 ; i < this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours].length ; i++ ){
                    var elem=this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours][i];
                    if(elem){
                        if(elem.id_svg_enfant_table === this.#souris_init_objet.id_svg_conteneur_table
                               && elem.id_svg_parent_table === this.#souris_init_objet.id_svg_conteneur_table
                        ){
                            /*
                              lien sur moi même
                            */
                            var ref_elem=document.getElementById( elem.id_du_path );
                            var nouveau_chemin='M ' + (elem.p1[0] + this.#svg_souris_delta_x) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                            nouveau_chemin+=' C ' + ((elem.p1[0] + this.#svg_souris_delta_x) - 30) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                            nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x + 30) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                            nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                            ref_elem.setAttribute( 'd' , nouveau_chemin );
                        }else{
                            if(elem.id_svg_enfant_table === this.#souris_init_objet.id_svg_conteneur_table){
                                var ref_elem=document.getElementById( elem.id_du_path );
                                var nouveau_chemin='M ' + (elem.p1[0] + this.#svg_souris_delta_x) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                                nouveau_chemin+=' C ' + ((elem.p1[0] + this.#svg_souris_delta_x) - 30) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                                nouveau_chemin+=' ' + (elem.p2[0] + 30) + ' ' + elem.p2[1];
                                nouveau_chemin+=' ' + elem.p2[0] + ' ' + elem.p2[1];
                                ref_elem.setAttribute( 'd' , nouveau_chemin );
                            }
                            if(elem.id_svg_parent_table === this.#souris_init_objet.id_svg_conteneur_table){
                                var ref_elem=document.getElementById( elem.id_du_path );
                                var nouveau_chemin='M ' + elem.p1[0] + ' ' + elem.p1[1];
                                nouveau_chemin+=' C ' + (elem.p1[0] - 30) + ' ' + elem.p1[1];
                                nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x + 30) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                                nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                                ref_elem.setAttribute( 'd' , nouveau_chemin );
                            }
                        }
                    }
                }
            }
            return;
        }
    }
    /*
      
      =============================================================================================================
      function maj_meta
    */
    #maj_meta( type_element , id_bdd , id_svg_element , nom_propriete ){
        if(type_element === 'base'){
            var id_svg_rectangle=id_svg_element + 1;
            var texte_rev=document.getElementById( id_svg_rectangle ).getAttribute( nom_propriete );
            var obj1=__gi1.__m_rev1.rev_tm( texte_rev );
            var nouveau_rev='';
            if(obj1.__xst === __xsu){
                var i=0;
                for( i=0 ; i < obj1.__xva.length ; i++ ){
                    if(obj1.__xva[i][3] === 1 && obj1.__xva[i][1] === 'transform_base_sur_svg'){
                        var tab=__gi1.__m_rev1.supprimer_un_element_de_la_matrice( obj1.__xva , i - 1 , 0 );
                        var obj2=__gi1.__m_rev1.matrice_vers_source_rev1( tab , 0 , false , 1 );
                        if(obj2.__xst === __xsu){
                            if(obj2.__xva !== ''){
                                obj2.__xva+=',';
                            }
                            obj2.__xva+='(transform_base_sur_svg , transform(translate(' + document.getElementById( id_svg_element ).getAttribute( 'decallage_x' ) + ',' + document.getElementById( id_svg_element ).getAttribute( 'decallage_y' ) + ')) )';
                            document.getElementById( id_svg_rectangle ).setAttribute( nom_propriete , obj2.__xva );
                        }else{
                            debugger;
                        }
                    }
                }
            }else{
                debugger;
            }
        }else if(type_element === 'table'){
            var id_svg_rectangle=id_svg_element + 1;
            var texte_rev=document.getElementById( id_svg_rectangle ).getAttribute( nom_propriete );
            var obj1=__gi1.__m_rev1.rev_tm( texte_rev );
            var nouveau_rev='';
            if(obj1.__xst === __xsu){
                var i=0;
                for( i=0 ; i < obj1.__xva.length ; i++ ){
                    if(obj1.__xva[i][3] === 1 && obj1.__xva[i][1] === 'transform_table_sur_svg'){
                        var tab=__gi1.__m_rev1.supprimer_un_element_de_la_matrice( obj1.__xva , i - 1 , 0 );
                        var obj2=__gi1.__m_rev1.matrice_vers_source_rev1( tab , 0 , false , 1 );
                        if(obj2.__xst === __xsu){
                            if(obj2.__xva !== ''){
                                obj2.__xva+=',';
                            }
                            obj2.__xva+='(transform_table_sur_svg , transform(translate(' + document.getElementById( id_svg_element ).getAttribute( 'decallage_x' ) + ',' + document.getElementById( id_svg_element ).getAttribute( 'decallage_y' ) + ')) )';
                            document.getElementById( id_svg_rectangle ).setAttribute( nom_propriete , obj2.__xva );
                        }else{
                            debugger;
                        }
                    }
                }
            }else{
                debugger;
            }
        }
    }
    /*
      
      =============================================================================================================
      function souris_haut
    */
    #souris_haut( e ){
        var ecart_de_temps=new Date( Date.now() ).getTime() - this.#debut_de_click;
        if(this.#souris_element_a_deplacer === 'base'){
            if(ecart_de_temps > 200){
                if(ecart_de_temps < 1500
                       && this.#souris_init_objet.x_final === this.#souris_init_objet.x
                       && this.#souris_init_objet.y_final === this.#souris_init_objet.y
                ){
                    /* this.modale_modifier_la_base( e.target.parentNode ); */
                }else{
                    var id_svg_rectangle=this.#id_svg_de_la_base_en_cours + 1;
                    let texte_rev=document.getElementById( id_svg_rectangle ).getAttribute( 'donnees_rev_meta_de_la_base' );
                    let nouveau_meta=this.#corrige_meta_base( texte_rev , {
                        "decallage_x" : document.getElementById( this.#id_svg_de_la_base_en_cours ).getAttribute( 'decallage_x' ) ,
                        "decallage_y" : document.getElementById( this.#id_svg_de_la_base_en_cours ).getAttribute( 'decallage_y' )
                    } );
                    document.getElementById( id_svg_rectangle ).setAttribute( 'donnees_rev_meta_de_la_base' , nouveau_meta.texte );
                }
            }
        }else if(this.#souris_element_a_deplacer === 'table'){
            /* si on a bougé une table, il faut remettre les positions des liens dans les svg_tableaux_des_references_amont_aval */
            if(this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours]
                   && this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours].length > 0
            ){
                var i=0;
                for( i=0 ; i < this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours].length ; i++ ){
                    var elem=this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours][i];
                    if(elem){
                        if(elem.id_svg_enfant_table === this.#souris_init_objet.id_svg_conteneur_table){
                            var ref_elem=document.getElementById( elem.id_du_path );
                            var tab=ref_elem.getAttribute( 'd' ).split( ' ' );
                            this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours][i].p1=[parseInt( tab[1] , 10 ),parseInt( tab[2] , 10 )];
                        }
                        if(elem.id_svg_parent_table === this.#souris_init_objet.id_svg_conteneur_table){
                            var ref_elem=document.getElementById( elem.id_du_path );
                            var tab=ref_elem.getAttribute( 'd' ).split( ' ' );
                            this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours][i].p2=[parseInt( tab[8] , 10 ),parseInt( tab[9] , 10 )];
                        }
                    }
                }
            }
            this.#svg_ajuster_la_largeur_de_la_base( this.#souris_init_objet.id_svg_de_la_base_en_cours );
            var id_svg_rectangle=this.#souris_init_objet.id_svg_conteneur_table + 1;
            let texte_rev=document.getElementById( id_svg_rectangle ).getAttribute( 'meta_rev_de_la_table' );
            let nouveau_meta=this.#corrige_meta_table( texte_rev , {
                "decallage_x" : document.getElementById( this.#souris_init_objet.id_svg_conteneur_table ).getAttribute( 'decallage_x' ) ,
                "decallage_y" : document.getElementById( this.#souris_init_objet.id_svg_conteneur_table ).getAttribute( 'decallage_y' )
            } );
            document.getElementById( id_svg_rectangle ).setAttribute( 'meta_rev_de_la_table' , nouveau_meta.texte );
        }
        /*
          
          maj de this.#id_bdd_de_la_base_en_cours avec id_bdd_de_la_base_en_cours de g
        */
        var element=e.target;
        var nom_tag=element.nodeName.toLowerCase();
        var parent=null;
        if(nom_tag !== 'html'){
            parent=element;
            while(nom_tag !== 'html'){
                if(nom_tag === 'g'){
                    if(element.getAttribute( 'id_bdd_de_la_base_en_cours' )){
                        this.#id_bdd_de_la_base_en_cours=element.getAttribute( 'id_bdd_de_la_base_en_cours' );
                    }
                }
                element=element.parentNode;
                nom_tag=element.nodeName.toLowerCase();
            }
        }
        this.#souris_element_a_deplacer='';
        this.#souris_init_objet.elem_bouge=null;
        this.#souris_init_objet.param_bouge={};
        this.#div_svg.style.userSelect='';
    }
    /*
      
      =============================================================================================================
      function souris_bas
    */
    #souris_bas( e ){
        this.#souris_init_objet={
            "x" : e[this.#propriete_pour_deplacement_x] ,
            "y" : e[this.#propriete_pour_deplacement_y] ,
            "x_final" : e[this.#propriete_pour_deplacement_x] ,
            "y_final" : e[this.#propriete_pour_deplacement_y]
        };
        this.#souris_element_a_deplacer='';
        this.#debut_de_click=new Date( Date.now() ).getTime();
        var tar=e.target;
        /*
          
          que clique-t-on ?
        */
        if(tar.tagName.toLowerCase() === 'svg'){
            /*
              
              si on bouge toute la zone svg, il faut modifier le viewbox 
            */
            this.#souris_init_objet.elem_bouge=tar;
            this.#souris_init_objet.param_bouge={"x" : tar.viewBox.baseVal.x ,"y" : tar.viewBox.baseVal.y};
            this.#souris_element_a_deplacer='svg';
            this.#div_svg.style.userSelect='none';
        }else{
            /* sinon, on recherche l'élément parent de type g pour modifier le translate si c'est une table ou une base */
            if(tar.getAttribute( 'type_element' )){
                if(tar.getAttribute( 'type_element' ) === 'rectangle_de_base'){
                    var valeur_translate=tar.parentNode.getAttribute( 'transform' ).replace( /translate\(/g , '' ).replace( /\)/g , '' ).split( ',' );
                    this.#souris_init_objet.id_svg_conteneur_base=tar.parentNode.id;
                    this.#souris_init_objet.elem_bouge=tar.parentNode;
                    this.#souris_init_objet.param_bouge={"x" : parseFloat( valeur_translate[0] ) ,"y" : parseFloat( valeur_translate[1] )};
                    this.#souris_element_a_deplacer='base';
                    this.#div_svg.style.userSelect='none';
                    this.#id_svg_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 );
                    this.#id_bdd_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                }else if(tar.getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'){
                    this.#id_svg_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 );
                    this.#id_bdd_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                }
                return;
            }else{
                if(tar.tagName.toLowerCase() === 'tspan' && tar.getAttribute( 'id_svg_conteneur_table' )){
                    var par=document.getElementById( tar.getAttribute( 'id_svg_conteneur_table' ) );
                    var valeur_translate=par.getAttribute( 'transform' ).replace( /translate\(/g , '' ).replace( /\)/g , '' ).split( ',' );
                    this.#souris_init_objet.id_svg_conteneur_table=parseInt( tar.getAttribute( 'id_svg_conteneur_table' ) , 10 );
                    this.#souris_init_objet.elem_bouge=par;
                    this.#souris_init_objet.param_bouge={"x" : parseFloat( valeur_translate[0] ) ,"y" : parseFloat( valeur_translate[1] )};
                    this.#souris_init_objet.id_bdd_de_la_base_en_cours=tar.getAttribute( 'id_bdd_de_la_base_en_cours' );
                    this.#souris_init_objet.id_svg_de_la_base_en_cours=tar.getAttribute( 'id_svg_de_la_base_en_cours' );
                    this.#souris_element_a_deplacer='table';
                    this.#div_svg.style.userSelect='none';
                    this.#id_svg_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 );
                    this.#id_bdd_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                    if(isNaN( this.#id_svg_de_la_base_en_cours )){
                        debugger;
                    }
                    return;
                }else{
                    /* on remonte la chaine pour voir si on est dans le svg */
                    var a=e.target;
                    while(a.tagName.toLowerCase() !== 'html'){
                        if(a.tagName.toLowerCase === 'g'
                               && a.getAttribute( 'type_element' )
                               && a.getAttribute( 'type_element' ) === "conteneur_de_base"
                        ){
                            this.#id_svg_de_la_base_en_cours=parseInt( a.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 );
                            this.#id_bdd_de_la_base_en_cours=parseInt( a.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                            if(isNaN( this.#id_svg_de_la_base_en_cours )){
                                debugger;
                            }
                            console.log( 'pas svg de base' );
                            debugger;
                            return;
                        }
                        a=a.parentNode;
                    }
                }
            }
        }
    }
    /*
      
      =============================================================================================================
      affichage de l'arbre svg en récursif
      le tableau tab contient 
      { "type":"g"    , "id":-1  ,  "id_parent":-2  ,  "proprietes": {...} },
      { "type":"rect" , "id": 0  ,  "id_parent":-1  ,  "proprietes": {...} },
      { "type":"g"    , "id": 3  ,  "id_parent":-1  ,  "proprietes": {...} },
      { "type":"rect" , "id": 4  ,  "id_parent": 3  ,  "proprietes": {...} ,"data-type":"table" }   
      
      
      function recursuf_arbre_svg
    */
    #recursuf_arbre_svg( tab , id_parent , commencer_a , avec_index , element_parent , position ){
        var str='';
        var l01=tab.length;
        var temp='';
        var ne_pas_prendre=false;
        var i=commencer_a;
        for( i=commencer_a ; i < l01 ; i++ ){
            if(tab[i] === null){
                continue;
            }
            if(tab[i].id_parent === id_parent){
                var le_typa=tab[i].type;
                if(le_typa === 'g'){
                    if(avec_index === true){
                        if(tab[i].proprietes.type_element === 'conteneur_d_index'){
                            var g=document.createElementNS( "http://www.w3.org/2000/svg" , "g" );
                            var j={};
                            for(j in tab[i].proprietes){
                                g.setAttribute( j , tab[i].proprietes[j] );
                                /*
                                  
                                  if(j==='nom_de_la_table_pour_l_index' && tab[i].proprietes[j] === 'tbl_y'){
                                  debugger
                                  }
                                */
                            }
                            g.setAttribute( 'transform' , 'translate(' + tab[i].proprietes['decallage_x'] + ',' + position + ')' );
                            g.setAttribute( 'translate_y' , position );
                            element_parent.appendChild( g );
                            this.#recursuf_arbre_svg( tab , i , i + 1 , avec_index , g , position );
                        }
                    }else{
                        ne_pas_prendre=false;
                        temp='<g';
                        var j={};
                        let condition_table_1=false;
                        let condition_table_2=false;
                        let condition_champ_1=false;
                        let condition_champ_2=false;
                        for(j in tab[i].proprietes){
                            temp+=' ' + j + '="' + tab[i].proprietes[j] + '"';
                            /*#
                            
                              if(j==='nom_de_la_table' && tab[i].proprietes[j]==="tbl_projets"){
                                condition_table_1=true;
                              }
                              if(j==='type_element' && tab[i].proprietes[j]==="conteneur_de_table"){
                                condition_table_2=true;
                              }
                              if(j==='nom_du_champ' && tab[i].proprietes[j]==="chi__nut_projet"){
                                condition_champ_1=true;
                              }
                            
                              if(j==='type_element' && tab[i].proprietes[j]==="conteneur_de_champ"){
                                condition_champ_2=true;
                              }
                            */
                            if(avec_index === false && j === 'type_element' && tab[i].proprietes[j] === 'conteneur_d_index'){
                                ne_pas_prendre=true;
                            }
                        }
                        /*#
                          if(condition_table_1 && condition_table_2){
                                debugger
                          }
                        */
                        /*
                          if(condition_champ_1 && condition_champ_2){
                          debugger
                          }
                        */
                        if(!ne_pas_prendre){
                            temp+='>';
                            temp+=this.#recursuf_arbre_svg( tab , i , i + 1 , avec_index , position );
                            temp+='</g>';
                            str+=temp;
                        }
                    }
                }else{
                    if(avec_index === true){
                        var e=document.createElementNS( "http://www.w3.org/2000/svg" , le_typa );
                        var j={};
                        for(j in tab[i].proprietes){
                            e.setAttribute( j , tab[i].proprietes[j] );
                        }
                        if(tab[i].hasOwnProperty( 'contenu' )){
                            e.innerHTML=tab[i].contenu;
                        }
                        element_parent.appendChild( e );
                    }else{
                        str+='<' + le_typa;
                        var j={};
                        for(j in tab[i].proprietes){
                            if( typeof tab[i].proprietes[j] === 'string'){
                                str+=' ' + j + '="' + tab[i].proprietes[j].replace( /"/g , '&quot;' ) + '"';
                            }else{
                                str+=' ' + j + '="' + tab[i].proprietes[j] + '"';
                            }
                        }
                        if(tab[i].hasOwnProperty( 'contenu' )){
                            str+='>' + tab[i].contenu + '</' + le_typa + '>';
                        }else{
                            str+=' />';
                        }
                    }
                }
            }
        }
        return str;
    }
    /*
      
      =============================================================================================================
      function dessiner_le_svg
      pour les champs d'indexes <circle cx="-1" cy="10" r="2" stroke="rgb(0, 0, 0)" stroke-width="1" fill="yellowgreen" transform=""></circle>
    */
    #dessiner_le_svg(){
        var str='';
        /*
          pour chaque référence de base
        */
        var tableau_svg=[];
        var i={};
        for(i in this.#arbre){
            var tab=JSON.parse( JSON.stringify( this.#arbre[i].arbre_svg ) );
            /*
              
              il faut trouver le premier élément non null du tableau
              puis on dessine l'arbre sans les index car on a pu
              ajouter des champs après avoir mis les index
              
            */
            var j=0;
            for( j=0 ; j < tab.length ; j++ ){
                if(tab[j] !== null){
                    str+=this.#recursuf_arbre_svg( tab , -1 , j , false );
                    tableau_svg.push( j );
                    break;
                }else{
                    debugger;
                }
            }
        }
        /*
          insertion du svg 
        */
        this.#svg_dessin.innerHTML=str;
        var liste_des_tables_deja_faites=[];
        var i={};
        for(i in this.#arbre){
            var tab=JSON.parse( JSON.stringify( this.#arbre[i].arbre_svg ) );
            /*
              
              insertion des index dans le svg 
            */
            var j=0;
            for( j=0 ; j < tab.length ; j++ ){
                if(tab[j] !== null){
                    if(tab[j].proprietes.type_element && tab[j].proprietes.type_element === 'conteneur_d_index'){
                        var deja_fait=false;
                        for( var nb1=0 ; nb1 < liste_des_tables_deja_faites.length ; nb1++ ){
                            if(liste_des_tables_deja_faites[nb1] === tab[j].id_parent){
                                deja_fait=true;
                                break;
                            }
                        }
                        if(deja_fait === false){
                            var conteneur_de_table=this.#svg_dessin.getElementById( tab[j].id_parent );
                            if(conteneur_de_table !== null){
                                /* on a peut supprimé une table pour la recréer par exemple après un tri de champs */
                                var nombre_elements=conteneur_de_table.childNodes.length;
                                var position=(nombre_elements - 1) * this.#hauteur_de_boite_affichage + this.#taille_bordure;
                                this.#recursuf_arbre_svg( tab , tab[j].id_parent , j , true , conteneur_de_table , position );
                                liste_des_tables_deja_faites.push( tab[j].id_parent );
                            }
                        }
                    }
                }
            }
            /*
              
              ajustement de la largeur et de la hauteur des tables 
            */
            var j=0;
            for( j=0 ; j < tab.length ; j++ ){
                if(tab[j] !== null){
                    if(tab[j].proprietes.type_element && tab[j].proprietes.type_element === 'conteneur_de_table'){
                        this.#svg_ajuster_la_largeur_des_boites_de_la_table( [tab[j].id,tab[j].proprietes.id_bdd_de_la_base_en_cours] );
                    }
                }
            }
        }
        var i={};
        for(i in tableau_svg){
            this.#svg_ajuster_la_largeur_de_la_base( tableau_svg[i] );
        }
        __gi1.ajoute_les_evenements_aux_boutons();
    }
    /*
      
      =============================================================================================================
      function ajuster_largeur_de_boite
    */
    #ajuster_largeur_de_boite( largeur_de_la_boite , texte ){
        var a=document.createElementNS( "http://www.w3.org/2000/svg" , 'text' );
        a.innerHTML=texte;
        a.setAttribute( 'x' , 10 );
        a.setAttribute( 'y' , 20 );
        this.#svg_dessin.appendChild( a );
        var b=a.getBBox();
        if(largeur_de_la_boite < b.width + 2){
            largeur_de_la_boite=parseInt( b.width , 10 ) + 2 * this.#taille_bordure;
        }
        a.remove();
        return largeur_de_la_boite;
    }
    /*
      =============================================================================================================
    */
    #corrige_meta_champ( texte_meta_rev , nouvelles_valeurs={} , nom_du_champ ){
        /*
          
          ( champ , 'chp__dtc_utilisateur'),
          ( a_une_valeur_par_defaut , 1),
          ( la_valeur_par_defaut_est_caractere , 1),
          ( valeur_par_defaut , '2000-01-01 00:00:00'),
          ( nom_long_du_champ , 'à faire chp__dtc_utilisateur'),
          ( nom_court_du_champ , 'à faire chp__dtc_utilisateur'),
          ( nom_bref_du_champ , 'à faire chp__dtc_utilisateur'),
          ( typologie , 'chi')
          ( afficher_champ_dans_svg , 1 )
          
          
        */
        let champ=nom_du_champ;
        let a_une_valeur_par_defaut=0;
        let la_valeur_par_defaut_est_caractere=0;
        let valeur_par_defaut='';
        let nom_long_du_champ='';
        let nom_court_du_champ='';
        let nom_bref_du_champ='';
        let typologie='';
        let afficher_champ_dans_svg=1;
        let champ_date_modification=0;
        let champ_date_creation=0;
        let champ_numero_de_revision=0;
        let obj1=__gi1.__m_rev1.rev_tm( texte_meta_rev );
        if(obj1.__xst === __xsu){
            let mat2=obj1.__xva;
            let l01=mat2.length;
            for( let l=1 ; l < l01 ; l=mat2[l][12] ){
                if(mat2[l][1] === 'meta' && mat2[l][2] === 'f'){
                    for( let k=l + 1 ; k < l01 ; k=mat2[k][12] ){
                        if(mat2[k][1] === 'genre_meta' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === 'champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.champ;
                            }
                            champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_du_champ;
                            }
                            nom_du_champ=mat2[k + 1][1];
                            champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'a_une_valeur_par_defaut' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'a_une_valeur_par_defaut' )){
                                mat2[k + 1][1]=nouvelles_valeurs.a_une_valeur_par_defaut;
                            }
                            a_une_valeur_par_defaut=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'la_valeur_par_defaut_est_caractere' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'la_valeur_par_defaut_est_caractere' )){
                                mat2[k + 1][1]=nouvelles_valeurs.la_valeur_par_defaut_est_caractere;
                            }
                            la_valeur_par_defaut_est_caractere=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'valeur_par_defaut' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'valeur_par_defaut' )){
                                mat2[k + 1][1]=nouvelles_valeurs.valeur_par_defaut;
                            }
                            valeur_par_defaut=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_long_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_long_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_long_du_champ;
                            }
                            nom_long_du_champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_court_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_court_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_court_du_champ;
                            }
                            nom_court_du_champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_bref_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_bref_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_bref_du_champ;
                            }
                            nom_bref_du_champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'afficher_champ_dans_svg' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'afficher_champ_dans_svg' )){
                                mat2[k + 1][1]=nouvelles_valeurs.afficher_champ_dans_svg;
                            }
                            afficher_champ_dans_svg=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'champ_date_modification' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'champ_date_modification' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.champ_date_modification , 10 );
                            }
                            champ_date_modification=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'champ_date_creation' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'champ_date_creation' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.champ_date_creation , 10 );
                            }
                            champ_date_creation=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'champ_numero_de_revision' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'champ_numero_de_revision' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.champ_numero_de_revision , 10 );
                            }
                            champ_numero_de_revision=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'typologie' && mat2[k][2] === 'f'){
                            if(mat2[k][8] === 0){
                                typologie='';
                            }else{
                                if(nouvelles_valeurs.hasOwnProperty( 'typologie' )){
                                    mat2[k + 1][1]=nouvelles_valeurs.typologie;
                                }
                                typologie=mat2[k + 1][1];
                            }
                        }else if(mat2[k][1] === '' && mat2[k][2] === 'f' && mat2[k][8] === 2){
                            if(mat2[k + 1][1] === 'champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'a_une_valeur_par_defaut' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                a_une_valeur_par_defaut=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'la_valeur_par_defaut_est_caractere' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                la_valeur_par_defaut_est_caractere=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'valeur_par_defaut' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                valeur_par_defaut=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_long_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_long_du_champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_court_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_court_du_champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_bref_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_bref_du_champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'afficher_champ_dans_svg' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                afficher_champ_dans_svg=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'champ_date_modification' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                champ_date_modification=parseInt( mat2[k + 2][1] , 10 );
                            }else if(mat2[k + 1][1] === 'champ_date_creation' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                champ_date_creation=parseInt( mat2[k + 2][1] , 10 );
                            }else if(mat2[k + 1][1] === 'champ_numero_de_revision' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                champ_numero_de_revision=parseInt( mat2[k + 2][1] , 10 );
                            }else if(mat2[k + 1][1] === 'typologie' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                typologie=mat2[k + 2][1];
                            }
                        }else{
                            debugger;
                        }
                    }
                }
            }
        }else{
            debugger;
        }
        let o1='';
        if(nom_du_champ === '' && champ !== ''){
            nom_du_champ=champ;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'champ_date_modification' )
               && (nouvelles_valeurs.champ_date_modification === '1'
                   || nouvelles_valeurs.champ_date_modification === 1)
        ){
            champ_date_modification=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'champ_date_creation' )
               && (nouvelles_valeurs.champ_date_creation === '1'
                   || nouvelles_valeurs.champ_date_creation === 1)
        ){
            champ_date_creation=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'champ_numero_de_revision' )
               && (nouvelles_valeurs.champ_numero_de_revision === '1'
                   || nouvelles_valeurs.champ_numero_de_revision === 1)
        ){
            champ_numero_de_revision=1;
        }
        o1+='meta(';
        o1+='    genre_meta(champ),';
        o1+='    nom_du_champ(\'' + nom_du_champ + '\'),';
        o1+='    champ(\'' + champ + '\'),';
        o1+='    nom_long_du_champ(\'' + nom_long_du_champ + '\'),';
        o1+='    nom_court_du_champ(\'' + nom_court_du_champ + '\'),';
        o1+='    nom_bref_du_champ(\'' + nom_bref_du_champ + '\'),';
        o1+='    typologie(' + typologie + '),';
        o1+='    afficher_champ_dans_svg(' + afficher_champ_dans_svg + '),';
        if(champ_date_modification === 1){
            o1+='    champ_date_modification(' + champ_date_modification + '),';
        }
        if(champ_date_creation === 1){
            o1+='    champ_date_creation(' + champ_date_creation + '),';
        }
        if(champ_numero_de_revision === 1){
            o1+='    champ_numero_de_revision(' + champ_numero_de_revision + '),';
        }
        o1+=')';
        let obj2=__gi1.__m_rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__m_rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(obj3.__xst === __xsu){
                o1=obj3.__xva;
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        return({
                 /*  */
                "texte" : o1 ,
                "champ" : champ ,
                "a_une_valeur_par_defaut" : a_une_valeur_par_defaut ,
                "la_valeur_par_defaut_est_caractere" : la_valeur_par_defaut_est_caractere ,
                "valeur_par_defaut" : valeur_par_defaut ,
                "nom_long_du_champ" : nom_long_du_champ ,
                "nom_court_du_champ" : nom_court_du_champ ,
                "nom_bref_du_champ" : nom_bref_du_champ ,
                "typologie" : typologie ,
                "afficher_champ_dans_svg" : afficher_champ_dans_svg ,
                "champ_date_modification" : champ_date_modification ,
                "champ_date_creation" : champ_date_creation ,
                "champ_numero_de_revision" : champ_numero_de_revision
            });
    }
    /*
      =============================================================================================================
    */
    #corrige_meta_index( texte_meta_rev , nouvelles_valeurs={} , nom_de_l_index ){
        /*
          meta(
          #(),
          ( index , 'idx_titre_unique'),
          ( message , 'bla')
          )
        */
        let table='';
        let message='';
        let obj1=__gi1.__m_rev1.rev_tm( texte_meta_rev );
        if(obj1.__xst === __xsu){
            let mat2=obj1.__xva;
            let l01=mat2.length;
            for( let l=1 ; l < l01 ; l=mat2[l][12] ){
                if(mat2[l][1] === 'meta' && mat2[l][2] === 'f'){
                    for( let k=l + 1 ; k < l01 ; k=mat2[k][12] ){
                        if(mat2[k][1] === 'genre_meta' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === 'message' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'message' )){
                                mat2[k + 1][1]=nouvelles_valeurs.message;
                            }
                            message=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_de_l_index' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_de_l_index' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_de_l_index;
                            }
                            nom_de_l_index=mat2[k + 1][1];
                        }else if(mat2[k][1] === '' && mat2[k][2] === 'f' && mat2[k][8] === 2){
                            if(mat2[k + 1][1] === 'message' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                message=mat2[k + 2][1];
                            }
                        }else{
                            debugger;
                        }
                    }
                }
            }
        }else{
            debugger;
        }
        let o1='';
        o1+='meta(';
        o1+=' nom_de_l_index(' + nom_de_l_index + '),';
        o1+=' genre_meta(index_de_table),';
        o1+=' message(\'' + message + '\'),';
        o1+=')';
        let obj2=__gi1.__m_rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__m_rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(obj3.__xst === __xsu){
                o1=obj3.__xva;
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        return({"texte" : o1 ,"message" : message});
    }
    /*
      =============================================================================================================
    */
    #corrige_meta_table( texte_meta_rev , nouvelles_valeurs={} ){
        /*#
          meta(
             ( table , 'tbl_utilisateurs'),
             ( nom_long_de_la_table , 'liste des utilisateurs'),
             ( nom_court_de_la_table , 'un utilisateur'),
             ( nom_bref_de_la_table , 'utilisateurs'),
             ( transform_table_sur_svg , transform( translate( 23 , 326 ) ))
          ),
        
          var obj=__gi1.__m_rev1.matrice_vers_source_rev1( nouvelle_matrice , 0 , false , 1 );
          if(obj.__xst === __xsu){
        */
        let table='';
        let nom_de_la_table='';
        let nom_long_de_la_table='';
        let nom_court_de_la_table='';
        let nom_bref_de_la_table='';
        let default_charset='';
        let collate='';
        let transform_table_sur_svg='';
        let decallage_x=0;
        let decallage_y=0;
        let obj1=__gi1.__m_rev1.rev_tm( texte_meta_rev );
        if(obj1.__xst === __xsu){
            let mat2=obj1.__xva;
            let l01=mat2.length;
            for( let l=1 ; l < l01 ; l=mat2[l][12] ){
                if(mat2[l][1] === 'meta' && mat2[l][2] === 'f'){
                    for( let k=l + 1 ; k < l01 ; k=mat2[k][12] ){
                        if(mat2[k][1] === 'genre_meta' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === 'default_charset' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'default_charset' )){
                                mat2[k + 1][1]=nouvelles_valeurs.default_charset;
                            }
                            default_charset=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'collate' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'collate' )){
                                mat2[k + 1][1]=nouvelles_valeurs.collate;
                            }
                            collate=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'table' )){
                                mat2[k + 1][1]=nouvelles_valeurs.table;
                            }
                            table=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_de_la_table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_de_la_table' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_de_la_table;
                            }
                            nom_de_la_table=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_long_de_la_table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_long_de_la_table' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_long_de_la_table;
                            }
                            nom_long_de_la_table=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_court_de_la_table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_court_de_la_table' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_court_de_la_table;
                            }
                            nom_court_de_la_table=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_bref_de_la_table' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_bref_de_la_table' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_bref_de_la_table;
                            }
                            nom_bref_de_la_table=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'transform_table_sur_svg' && mat2[k][2] === 'f'){
                            for( var j=k + 1 ; j < l01 ; j=mat2[j][12] ){
                                if('translate' === mat2[j][1] && mat2[j][8] === 2){
                                    if(nouvelles_valeurs.hasOwnProperty( 'decallage_x' )){
                                        mat2[j + 1][1]=parseInt( nouvelles_valeurs.decallage_x , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 1][1]+=0.5;
                                        }
                                    }else{
                                        mat2[j + 1][1]=parseInt( mat2[j + 1][1] , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 1][1]+=0.5;
                                        }
                                    }
                                    decallage_x=mat2[j + 1][1];
                                    if(nouvelles_valeurs.hasOwnProperty( 'decallage_y' )){
                                        mat2[j + 2][1]=parseInt( nouvelles_valeurs.decallage_y , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 2][1]+=0.5;
                                        }
                                    }else{
                                        mat2[j + 2][1]=parseInt( mat2[j + 2][1] , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 2][1]+=0.5;
                                        }
                                    }
                                    decallage_y=mat2[j + 2][1];
                                }
                            }
                            var obj=__gi1.__m_rev1.matrice_vers_source_rev1( mat2 , k , false , k + 1 );
                            if(obj.__xst === __xsu){
                                transform_table_sur_svg=obj.__xva;
                            }else{
                                debugger;
                            }
                            /* collate=mat2[k + 1][1]; */
                        }else if(mat2[k][1] === '' && mat2[k][2] === 'f' && mat2[k][8] === 2){
                            if(mat2[k + 1][1] === 'default_charset' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                default_charset=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'collate' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                collate=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'table' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                table=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_long_de_la_table' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_long_de_la_table=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_court_de_la_table' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_court_de_la_table=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_bref_de_la_table' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_bref_de_la_table=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'transform_table_sur_svg' && mat2[k + 1][2] === 'f'){
                                debugger;
                                for( let j=k + 2 ; j < l01 ; j=mat2[j][12] ){
                                    if('transform' === mat2[j][1] && mat2[j][2] === 'f'){
                                        for( var zz=j + 1 ; zz < l01 ; zz=mat2[zz][12] ){
                                            if('translate' === mat2[zz][1] && mat2[zz][8] === 2){
                                                mat2[zz + 1][1]=parseInt( mat2[zz + 1][1] , 10 );
                                                if(this.#taille_bordure% 2 !== 0){
                                                    mat2[zz + 1][1]+=0.5;
                                                }
                                                decallage_x=mat2[zz + 1][1];
                                                mat2[zz + 2][1]=parseInt( mat2[zz + 2][1] , 10 );
                                                if(this.#taille_bordure% 2 !== 0){
                                                    mat2[zz + 2][1]+=0.5;
                                                }
                                                decallage_y=mat2[zz + 2][1];
                                            }
                                        }
                                    }
                                }
                                var obj=__gi1.__m_rev1.matrice_vers_source_rev1( mat2 , k + 2 , false , k + 3 );
                                if(obj.__xst === __xsu){
                                    transform_table_sur_svg=obj.__xva;
                                }else{
                                    debugger;
                                }
                            }
                        }else{
                            debugger;
                        }
                    }
                }
            }
        }else{
            debugger;
        }
        let o1='';
        o1+='meta(';
        if(nom_de_la_table === '' && table !== ''){
            nom_de_la_table=table;
        }
        if(nom_de_la_table !== '' && table === ''){
            table=nom_de_la_table;
        }
        o1+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' table(\'' + table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' genre_meta(table_de_base),';
        if(default_charset !== ''){
            o1+=' default_charset(\'' + default_charset.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        }
        if(collate !== ''){
            o1+=' collate(\'' + collate.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        }
        o1+=' nom_long_de_la_table(\'' + nom_long_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' nom_court_de_la_table(\'' + nom_court_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' nom_bref_de_la_table(\'' + nom_bref_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' transform_table_sur_svg(' + transform_table_sur_svg + '),';
        o1+=')';
        let obj2=__gi1.__m_rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__m_rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(obj3.__xst === __xsu){
                o1=obj3.__xva;
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        return({
                "texte" : o1 ,
                "decallage_x" : decallage_x ,
                "decallage_y" : decallage_y ,
                "collate" : collate ,
                "default_charset" : default_charset ,
                "nom_long_de_la_table" : nom_long_de_la_table ,
                "nom_court_de_la_table" : nom_court_de_la_table ,
                "nom_bref_de_la_table" : nom_bref_de_la_table
            });
    }
    /*
      =============================================================================================================
    */
    #corrige_meta_base( texte_meta_rev , nouvelles_valeurs={} ){
        /*
          meta(
          ( default_charset , 'utf8mb4'),
          ( collate , 'utf8mb4_unicode_ci'),
          ( transform_base_sur_svg , transform( translate( 3.5 , 8.5 ) ))
          ),
          var obj=__gi1.__m_rev1.matrice_vers_source_rev1( nouvelle_matrice , 0 , false , 1 );
          if(obj.__xst === __xsu){
        */
        let default_charset='';
        let collate='';
        let transform_base_sur_svg='';
        let decallage_x=0;
        let decallage_y=0;
        let obj1=__gi1.__m_rev1.rev_tm( texte_meta_rev );
        if(obj1.__xst === __xsu){
            let mat2=obj1.__xva;
            let l01=mat2.length;
            for( let l=1 ; l < l01 ; l=mat2[l][12] ){
                if(mat2[l][1] === 'meta' && mat2[l][2] === 'f'){
                    for( let k=l + 1 ; k < l01 ; k=mat2[k][12] ){
                        if(mat2[k][1] === 'genre_meta' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === 'default_charset' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'default_charset' )){
                                mat2[k + 1][1]=nouvelles_valeurs.default_charset;
                            }
                            default_charset=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'collate' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'collate' )){
                                mat2[k + 1][1]=nouvelles_valeurs.collate;
                            }
                            collate=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'transform_base_sur_svg' && mat2[k][2] === 'f'){
                            for( var j=k + 1 ; j < l01 ; j=mat2[j][12] ){
                                if('translate' === mat2[j][1] && mat2[j][8] === 2){
                                    if(nouvelles_valeurs.hasOwnProperty( 'decallage_x' )){
                                        mat2[j + 1][1]=parseInt( nouvelles_valeurs.decallage_x , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 1][1]+=0.5;
                                        }
                                    }else{
                                        mat2[j + 1][1]=parseInt( mat2[j + 1][1] , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 1][1]+=0.5;
                                        }
                                    }
                                    decallage_x=mat2[j + 1][1];
                                    if(nouvelles_valeurs.hasOwnProperty( 'decallage_y' )){
                                        mat2[j + 2][1]=parseInt( nouvelles_valeurs.decallage_y , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 2][1]+=0.5;
                                        }
                                    }else{
                                        mat2[j + 2][1]=parseInt( mat2[j + 2][1] , 10 );
                                        if(this.#taille_bordure% 2 !== 0){
                                            mat2[j + 2][1]+=0.5;
                                        }
                                    }
                                    decallage_y=mat2[j + 2][1];
                                }
                            }
                            transform_base_sur_svg='translate(' + decallage_x + ',' + decallage_y + ')';
                            /*
                              var obj=__gi1.__m_rev1.matrice_vers_source_rev1( mat2 , k , false , k + 1 );
                              if(obj.__xst === __xsu){
                              transform_base_sur_svg=obj.__xva;
                              }else{
                              debugger;
                              }
                            */
                            /* collate=mat2[k + 1][1]; */
                        }else if(mat2[k][1] === '' && mat2[k][2] === 'f' && mat2[k][8] === 2){
                            if(mat2[k + 1][1] === 'default_charset' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                default_charset=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'collate' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                collate=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'transform_base_sur_svg' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'f'){
                                var obj=__gi1.__m_rev1.matrice_vers_source_rev1( mat2 , k + 2 , false , k + 3 );
                                if(obj.__xst === __xsu){
                                    transform_base_sur_svg=obj.__xva;
                                }else{
                                    debugger;
                                }
                            }
                        }else{
                            debugger;
                        }
                    }
                }
            }
        }else{
            debugger;
        }
        let o1='';
        o1+='meta(';
        o1+=' #(),';
        o1+=' genre_meta(base_de_données),';
        o1+=' default_charset(\'' + default_charset.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' collate(\'' + collate.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        o1+=' transform_base_sur_svg(' + transform_base_sur_svg + '),';
        o1+=')';
        let obj2=__gi1.__m_rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__m_rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(obj3.__xst === __xsu){
                o1=obj3.__xva;
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        return({"texte" : o1 ,"decallage_x" : decallage_x ,"decallage_y" : decallage_y ,"collate" : collate ,"default_charset" : default_charset});
    }
    /*
      =============================================================================================================
      on parcours l'arbre svg pour reconstruire le rev
      function creer_rev_de_la_base_a_partir_de_svg
    */
    #creer_rev_de_la_base_a_partir_de_svg( id_bdd_de_la_base ){
        var t='';
        var lst=document.getElementsByTagName( 'g' );
        var racine_du_svg=null;
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'id_bdd_de_la_base_en_cours' )
                   && parseInt( lst[i].getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 ) === id_bdd_de_la_base
            ){
                racine_du_svg=lst[i];
                break;
            }
        }
        if(racine_du_svg === null){
            return(__gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2() + 'il y a eu un problème lors de la récupération de l\'arbre svg'} ));
        }
        this.#id_svg_de_la_base_en_cours=parseInt( racine_du_svg.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 );
        /*
          
          ce sont les rectangles qui contiennent les informations sur la base
        */
        lst=racine_du_svg.getElementsByTagName( 'rect' );
        var i=0;
        for( i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_de_base'){
                /*#
                */
                let meta_base=this.#corrige_meta_base( lst[i].getAttribute( 'donnees_rev_meta_de_la_base' ) , {} );
                t+=meta_base.texte;
                /*#
                  t+='\n#(';
                  t+='\n  ================';
                  t+='\n  liste des tables';
                  t+='\n  ================';
                  t+='\n),';
                */
            }else if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_de_table'){
                /*#
                  if(lst[i].getAttribute('nom_de_la_table')==='tbl_y'){
                      debugger
                  }
                */
                t+=this.#creer_definition_table_en_rev( lst[i] , null , null );
            }else if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'){
                t+=this.#creer_definition_index_en_rev( lst[i] );
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*#
      =============================================================================================================
      
      
      créer_table[
         nom_de_la_table[ 'tbl_taches'],
         champs[
            champ[
               nom_du_champ[ 'chx_utilisateur_tache'],
               type[ 'integer'],
               non_nulle[1],
               references[ tbl_utilisateurs , chi_id_utilisateur],
            ],      
    */
    #construire_tableau_dependances( mat , id_bdd_de_la_base ){
        let l01=mat.length;
        let objet_dependances={};
        for( var i=1 ; i < l01 ; i=mat[i][12] ){
            if('créer_table' === mat[i][1] && mat[i][2] === 'f'){
                let table_dependante='';
                for( var j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if('nom_de_la_table' === mat[j][1] && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        table_dependante=mat[j + 1][1];
                        break;
                    }
                }
                for( var j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if('champs' === mat[j][1] && mat[j][2] === 'f'){
                        for( var k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if('champ' === mat[k][1] && mat[k][2] === 'f'){
                                let champ_dependant='';
                                let non_nulle='0';
                                for( var l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if('nom_du_champ' === mat[l][1] && mat[l][2] === 'f' && mat[l][8] === 1){
                                        champ_dependant=mat[l + 1][1];
                                    }else if('non_nulle' === mat[l][1] && mat[l][2] === 'f' && mat[l][8] === 1){
                                        non_nulle=mat[l + 1][1];
                                    }
                                }
                                for( var l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if('references' === mat[l][1] && mat[l][2] === 'f'){
                                        let table_parente='';
                                        let champ_parent='';
                                        for( var m=l + 1 ; m < l01 ; m=mat[m][12] ){
                                            if(mat[m][2] === 'c'){
                                                if(table_parente === ''){
                                                    table_parente=mat[m][1];
                                                }else{
                                                    champ_parent=mat[m][1];
                                                }
                                            }
                                        }
                                        if(table_parente !== '' && champ_parent !== ''){
                                            let cle=table_parente + '_' + champ_parent;
                                            if(!objet_dependances.hasOwnProperty( cle )){
                                                objet_dependances[cle]={
                                                    "table_parente" : table_parente ,
                                                    "champ_parent" : champ_parent ,
                                                    "dependances" : [{
                                                                "table_dependante" : table_dependante ,
                                                                "champ_dependant" : champ_dependant ,
                                                                "non_nulle" : non_nulle ,
                                                                "id_bdd_de_la_base_dependante" : id_bdd_de_la_base
                                                            }]
                                                };
                                            }else{
                                                objet_dependances[cle].dependances.push( {
                                                        "table_dependante" : table_dependante ,
                                                        "champ_dependant" : champ_dependant ,
                                                        "non_nulle" : non_nulle ,
                                                        "id_bdd_de_la_base_dependante" : id_bdd_de_la_base
                                                    } );
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : objet_dependances});
        debugger;
    }
    /*
      =============================================================================================================
    */
    sauvegarder_la_base( mat ){
        let id_bdd_de_la_base=0;
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === "id_bdd_de_la_base" && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_bdd_de_la_base === 0){
            debugger;
            return;
        }
        var t='';
        this.#id_bdd_de_la_base_en_cours=parseInt( id_bdd_de_la_base , 10 );
        __gi1.supprimer_les_messages();
        var obj=this.#creer_rev_de_la_base_a_partir_de_svg( this.#id_bdd_de_la_base_en_cours );
        if(obj.__xst === __xsu){
            t=obj.__xva;
            let objrev=__gi1.__m_rev1.rev_tm( obj.__xva );
            if(objrev.__xst === __xsu){
                let obj_tableau_des_dependances=this.#construire_tableau_dependances( objrev.__xva , id_bdd_de_la_base );
                var obj2=__gi1.__m_rev1.matrice_vers_source_rev1( objrev.__xva , 0 , true , 1 );
                if(obj2.__xst === __xsu){
                    obj={
                         /*  */
                        "__x_action" : 'c_bases1.envoyer_le_rev_de_le_base_en_post()' ,
                        "__xva" : {
                             /*  */
                            "id_bdd_de_la_base" : id_bdd_de_la_base ,
                            "source_rev_de_la_base" : obj2.__xva ,
                            "tableau_des_dependances" : obj_tableau_des_dependances.__xva
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                    return;
                }
            }else{
                debugger;
            }
        }else{
            __gi1.remplis_les_messages_et_affiche( '' );
            alert( 'Problème sur la sauvegarde de la base ' );
            return;
        }
    }
    /*
      
      =============================================================================================================
      function ajouter_table_a_svg
    */
    #ajouter_table_a_svg( nom_de_la_table , indice_courant , position_de_la_table , meta_rev_de_la_table ){
        /*
          
          conteneur de la table
        */
        var id_svg_conteneur_table=indice_courant;
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'g' ,
            "id" : indice_courant ,
            "id_parent" : this.#id_svg_de_la_base_en_cours ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'conteneur_de_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table" : nom_de_la_table ,
                "decallage_x" : position_de_la_table[0] ,
                "decallage_y" : position_de_la_table[1] ,
                "transform" : 'translate(' + position_de_la_table[0] + ',' + position_de_la_table[1] + ')'
            }
        };
        indice_courant++;
        /*
          
          rectangle de la table
        */
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "data-type" : 'table' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_conteneur_table ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'rectangle_de_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : 0 ,
                "y" : 0 ,
                "width" : 20 ,
                "height" : 50 ,
                "style" : "stroke:blue;stroke-width:" + this.#taille_bordure + ";fill:yellow;fill-opacity:0.8;" ,
                "meta_rev_de_la_table" : meta_rev_de_la_table
            }
        };
        return({"indice_svg_rectangle" : indice_courant ,"id_svg_conteneur_table" : id_svg_conteneur_table});
    }
    /*
      
      =============================================================================================================
      function ajouter_nom_de_table_au_svg
    */
    #ajouter_nom_de_table_au_svg( nom_de_la_table , indice_courant , id_svg_conteneur_table , largeur_de_la_boite ){
        var id_svg_champ_en_cours=indice_courant;
        var id_svg_rectangle_du_nom_de_la_table=0;
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
             /*  */
            "type" : 'g' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_conteneur_table ,
            "proprietes" : {
                 /*  */
                "id" : indice_courant ,
                "type_element" : 'conteneur_de_nom_de_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "decallage_x" : this.#taille_bordure ,
                "decallage_y" : this.#taille_bordure ,
                "transform" : 'translate(' + this.#taille_bordure + ',' + this.#taille_bordure + ')'
            }
        };
        indice_courant++;
        /*
          
          rectangle du nom de la table
          
        */
        id_svg_rectangle_du_nom_de_la_table=indice_courant;
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : indice_courant - 1 ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'rectangle_de_nom_de_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : 0 ,
                "y" : 0 ,
                "width" : 18 ,
                "height" : this.#hauteur_de_boite ,
                "style" : "stroke:white;stroke-width:" + this.#taille_bordure + ";fill:red;fill-opacity:1;"
            }
        };
        indice_courant++;
        /*
          texte du nom de la table
        */
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : indice_courant - 2 ,
            "contenu" : '<tspan data-utilite="deplacer_la_table" style="cursor:move;" id_svg_conteneur_table="' + id_svg_conteneur_table + '" id_bdd_de_la_base_en_cours="' + this.#id_bdd_de_la_base_en_cours + '" id_svg_de_la_base_en_cours="' + this.#id_svg_de_la_base_en_cours + '">🟥</tspan>' + '<tspan  style="cursor:pointer;font-size:' + __gi1.css_dimensions.t_police + 'px;" data-hug_click="interface1.module1(chemin_module1(\'' + this.#chemin_module1 + '\'),methode3(modale_gerer_la_table),parametre3(id_svg_conteneur_table(' + id_svg_conteneur_table + ')))" >🟦</tspan>' + nom_de_la_table ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'texte_de_nom_de_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : this.#taille_bordure ,
                "y" : this.#hauteur_de_boite - 0.3 * __gi1.css_dimensions.t_police - this.#taille_bordure ,
                "style" : "fill:white;cursor:context-menu;"
            }
        };
        indice_courant++;
        largeur_de_la_boite=this.#ajuster_largeur_de_boite( largeur_de_la_boite , nom_de_la_table + '🟥' );
        return({"largeur_de_la_boite" : largeur_de_la_boite ,"id_svg_rectangle_du_nom_de_la_table" : id_svg_rectangle_du_nom_de_la_table});
    }
    /*
      
      =============================================================================================================
      function ajouter_champ_a_arbre
      
      
      
    */
    #ajouter_champ_a_arbre( nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , id_bdd_de_la_base , donnees_rev_du_champ , type , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut , valeur_par_defaut , la_valeur_par_defaut_est_caractere ){
        var id_svg_parent_table=-1;
        var id_svg_parent_champ=-1;
        var nom_parent_table='';
        var nom_parent_champ='';
        var a_des_references=false;
        var id_svg_champ_en_cours=indice_courant;
        var masqué='display:inline;';
        /*
          création de la boite du champ
          conteneur du nom du champ svg_tableaux_des_references_amont_aval
        */
        if(donnees_rev_du_champ.indexOf( 'afficher_champ_dans_svg(0)' ) >= 0){
            masqué='display:none;';
        }
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'g' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_conteneur_table ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'conteneur_de_champ' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "nom_du_champ" : nom_du_champ ,
                "decallage_x" : this.#taille_bordure ,
                "decallage_y" : 0 ,
                "transform" : 'translate(0,0)' ,
                "style" : masqué
            }
        };
        indice_courant++;
        /*
          rectangle du nom du champ
          type , primary_key , non_nulle , auto_increment , references
        */
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : indice_courant - 1 ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'rectangle_de_champ' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "nom_du_champ" : nom_du_champ ,
                "x" : 0 ,
                "y" : 0 ,
                "width" : 18 ,
                "height" : this.#hauteur_de_boite ,
                "style" : "stroke:gold;stroke-width:" + this.#taille_bordure + ";fill:pink;fill-opacity:0.2;" ,
                "donnees_rev_du_champ" : donnees_rev_du_champ ,
                "type" : type ,
                "primary_key" : primary_key ,
                "non_nulle" : non_nulle ,
                "auto_increment" : auto_increment ,
                "references" : references ,
                "a_une_valeur_par_defaut" : a_une_valeur_par_defaut ,
                "valeur_par_defaut" : valeur_par_defaut ,
                "la_valeur_par_defaut_est_caractere" : la_valeur_par_defaut_est_caractere
            }
        };
        indice_courant++;
        var indice_du_champ=indice_courant - 1;
        var objrev=null;
        var tabrev=[];
        var couleur_nom_de_champ='navy';
        if(primary_key === 1){
            couleur_nom_de_champ='red';
        }
        /*
          texte du nom du champ
        */
        let f='';
        f+='interface1.module1(';
        f+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        f+=' methode3(modale_modifier_le_champ),';
        f+=' parametre3(';
        f+='  id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        f+='  id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
        f+='  nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        f+=' )';
        f+=')';
        let contenu='';
        contenu+='<tspan ';
        contenu+=' style="cursor:pointer;" ';
        contenu+=' data-hug_click="' + f + '">🟨</tspan>' + nom_du_champ;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : indice_courant - 2 ,
             /* carré jaune */
            "contenu" : contenu ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'texte_de_champ' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "nom_du_champ" : nom_du_champ ,
                "x" : this.#taille_bordure ,
                "y" : this.#hauteur_de_boite - 0.3 * __gi1.css_dimensions.t_police - this.#taille_bordure ,
                "style" : "fill:" + couleur_nom_de_champ + ";"
            }
        };
        indice_courant++;
        if(references !== ''){
            var tt=references.split( ',' );
            nom_parent_table=tt[0];
            nom_parent_champ=tt[1];
            for(let i in this.#arbre[id_bdd_de_la_base].arbre_svg){
                if(this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === 'conteneur_de_table'
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_de_la_table === nom_parent_table
                ){
                    id_svg_parent_table=parseInt( i , 0 );
                }
                if(this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === 'conteneur_de_champ'
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_du_champ === nom_parent_champ
                ){
                    id_svg_parent_champ=parseInt( i , 10 );
                    /*
                      le nom du champ vient toujours après le nom de la table
                    */
                    break;
                }
            }
            var p1=[50,50];
            var p2=[0,0];
            this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base].push( {
                    "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                    "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                    "id_svg_parent_table" : id_svg_parent_table ,
                    "id_svg_parent_champ" : id_svg_parent_champ ,
                    "id_svg_enfant_table" : id_svg_conteneur_table ,
                    "id_svg_enfant_champ" : id_svg_champ_en_cours ,
                    "nom_enfant_table" : nom_de_la_table ,
                    "nom_enfant_champ" : nom_du_champ ,
                    "nom_parent_table" : nom_parent_table ,
                    "nom_parent_champ" : nom_parent_champ ,
                    "id_du_path" : indice_courant ,
                    "p1" : p1 ,
                    "p2" : p2
                } );
            /*
              
              <path d=" M -63 -9 C 53 -6 132 71 176 31 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path>
            */
            var d='M ' + parseInt( p1[0] , 10 ) + ' ' + parseInt( p1[1] , 10 ) + ' C ' + parseInt( p1[0] - 30 , 10 ) + ' ' + parseInt( p1[1] , 10 ) + ' ' + parseInt( p2[0] + 30 , 10 ) + ' ' + parseInt( p2[1] , 10 ) + ' ' + parseInt( p2[0] , 10 ) + ' ' + parseInt( p2[1] , 10 );
            var couleur_du_lien='brown';
            if(non_nulle === 0){
                couleur_du_lien='coral';
            }
            /*
              le parent d'un lien appartient à la base et non pas à id_svg_champ_en_cours
            */
            this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
                "type" : 'path' ,
                "id" : indice_courant ,
                "id_parent" : this.#id_svg_de_la_base_en_cours ,
                "proprietes" : {
                    "id" : indice_courant ,
                    "d" : d ,
                    "type_element" : 'reference_croisée' ,
                    "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                    "id_svg_parent_table" : id_svg_parent_table ,
                    "id_svg_parent_champ" : id_svg_parent_champ ,
                    "id_svg_enfant_table" : id_svg_conteneur_table ,
                    "id_svg_enfant_champ" : id_svg_champ_en_cours ,
                    "nom_parent_table" : nom_parent_table ,
                    "nom_parent_champ" : nom_parent_champ ,
                     /*
                      
                      nom_enfant_table           : nom_de_la_table         ,
                      nom_enfant_champ           : nom_du_champ            ,
                      nom_parent_table           : nom_parent_table        ,
                      nom_parent_champ           : nom_parent_champ        ,
                     */
                    "style" : 'stroke:' + couleur_du_lien + ';stroke-width:' + (this.#taille_bordure * 3) + ';fill:transparent;stroke-opacity:0.6;stroke-linejoin:round;stroke-linecap:round;'
                }
            };
            indice_courant++;
        }
        /*
          if(donnees_rev_du_champ !== ''){
          var o=1;
          for( o=1 ; o < tabrev.length ; o++ ){
          if(tabrev[o][7] === 0){
          if('references' === tabrev[o][1] && tabrev[o][8] === 2){
          a_des_references=true;
          var i={};
          for(i in this.#arbre[id_bdd_de_la_base].arbre_svg){
          var elem=this.#arbre[id_bdd_de_la_base].arbre_svg[i];
          if(elem === null){
          continue;
          }
          if(elem.proprietes
          && elem.proprietes.type_element
          && elem.proprietes.type_element === 'conteneur_de_table'
          && elem.proprietes.nom_de_la_table === tabrev[o + 1][1]
          ){
          id_svg_parent_table=parseInt( elem.proprietes.id , 10 );
          }
          if(elem.proprietes.type_element === 'conteneur_de_champ'
          && elem.proprietes.id_svg_conteneur_table === id_svg_parent_table
          && elem.proprietes.nom_du_champ === tabrev[o + 2][1]
          ){
          id_svg_parent_champ=parseInt( elem.proprietes.id , 10 );
          }
          if(id_svg_parent_champ >= 0 && id_svg_parent_table >= 0){
          break;
          }
          }
          }
          }
          }
          }
        */
        if(a_des_references === true){
        }
        return({"indice_du_champ" : indice_du_champ ,"id_svg_champ_en_cours" : id_svg_champ_en_cours ,"indice_courant" : indice_courant});
    }
    /*
      =============================================================================================================
      function ajouter_index_a_table
    */
    #ajouter_index_a_table( id_bdd_de_la_base , indice_courant , nom_de_l_index , id_svg_conteneur_table , nom_de_la_table , donnees_rev_de_l_index , champs , unique ){
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'g' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_conteneur_table ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'conteneur_d_index' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table_pour_l_index" : nom_de_la_table ,
                "decallage_x" : 0 ,
                "decallage_y" : 0 ,
                "transform" : 'translate(0,0)'
            }
        };
        let id_svg_conteneur_d_index=indice_courant;
        indice_courant++;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : indice_courant - 1 ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'rectangle_d_index' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table_pour_l_index" : nom_de_la_table ,
                "nom_de_l_index" : nom_de_l_index ,
                "donnees_rev_de_l_index" : donnees_rev_de_l_index ,
                "champs" : champs ,
                "unique" : unique ,
                "x" : 0 ,
                "y" : 0 ,
                "width" : 18 ,
                "height" : this.#hauteur_de_boite ,
                "style" : "stroke:green;stroke-width:" + this.#taille_bordure + ";fill:green;fill-opacity:0.2;"
            }
        };
        indice_courant++;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : indice_courant - 2 ,
             /*
              "contenu" : 'hello'+nom_de_l_index ,
             */
             /* carré vert */
            "contenu" : '' + '<tspan  style="cursor:pointer;" ' + ' data-hug_click="' + 'interface1.module1(' + ' chemin_module1(\'' + this.#chemin_module1 + '\'),' + ' methode3(modale_modifier_l_index),' + ' parametre3(' + '  id_svg_conteneur_table(' + id_svg_conteneur_table + ')' + '  nom_de_l_index(\'' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')' + '  id_svg_conteneur_d_index(' + id_svg_conteneur_d_index + ')' + ' )' + ')" >🟩</tspan>' + nom_de_l_index ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'texte_d_index' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table_pour_l_index" : nom_de_la_table ,
                "x" : this.#taille_bordure ,
                "y" : this.#hauteur_de_boite - 0.3 * __gi1.css_dimensions.t_police - this.#taille_bordure ,
                "style" : "fill:green;"
            }
        };
        indice_courant++;
        return({"indice_courant" : indice_courant});
    }
    /*
      =============================================================================================================
      function ajouter_table_et_index_a_arbre
    */
    #ajouter_table_et_index_a_arbre( tab , id_tab_table_en_cours , indice_courant , id_bdd_de_la_base , nom_de_la_table_a_utiliser=null ){
        var l01=tab.length;
        var id_svg_champ_en_cours=0;
        var nom_de_la_table='';
        var id_svg_conteneur_table=0;
        var position_gauche_de_la_table=0;
        var position_haut_de_la_table=0;
        var largeur_de_la_boite=1;
        var nom_du_champ='';
        var indice_du_champ=0;
        var i=0;
        var j=0;
        var k=0;
        var l=0;
        var indice_matr=id_tab_table_en_cours;
        /*
          =====================================================================================================
          début rechercher le nom de la table pour créer le conteneur et la boite
          =====================================================================================================
        */
        for( i=id_tab_table_en_cours + 1 ; i < l01 && tab[i][3] > tab[id_tab_table_en_cours][3] ; i++ ){
            if(tab[i][7] === id_tab_table_en_cours){
                if('nom_de_la_table' === tab[i][1]){
                    if(nom_de_la_table_a_utiliser !== null){
                        nom_de_la_table=nom_de_la_table_a_utiliser;
                    }else{
                        nom_de_la_table=tab[i + 1][1];
                    }
                    id_svg_conteneur_table=indice_courant;
                    var position_de_la_table=[0,0];
                    /*
                      
                      =============================================================================
                      recherche des meta
                      =============================================================================
                    */
                    var meta_de_la_table='';
                    var tt=[0,0];
                    for( l=indice_matr + 1 ; l < l01 ; l=tab[l][12] ){
                        if(tab[l][1] === 'meta' && tab[l][2] === 'f'){
                            var objxx=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[l][7] , false , l , 0 , [] , null , true );
                            if(objxx.__xst === __xsu){
                                let obj_meta_de_la_base=this.#corrige_meta_table( objxx.__xva , {"nom_de_la_table" : nom_de_la_table} );
                                meta_de_la_table=obj_meta_de_la_base.texte;
                                tt[0]=obj_meta_de_la_base.decallage_x;
                                tt[1]=obj_meta_de_la_base.decallage_y;
                            }else{
                                debugger;
                            }
                        }
                    }
                    var a=this.#ajouter_table_a_svg( nom_de_la_table , indice_courant , tt , meta_de_la_table );
                    indice_courant+=2;
                    id_svg_conteneur_table=a.id_svg_conteneur_table;
                    position_gauche_de_la_table=parseFloat( tt[0] );
                    position_haut_de_la_table=parseFloat( tt[1] );
                    id_svg_champ_en_cours=indice_courant;
                    var a=this.#ajouter_nom_de_table_au_svg( nom_de_la_table , indice_courant , id_svg_conteneur_table , largeur_de_la_boite );
                    indice_courant+=3;
                    largeur_de_la_boite=a.largeur_de_la_boite;
                }
            }
        }
        /*
          
          =====================================================================================================
          ajout des champs
          =====================================================================================================
          
          on met les champs de la table 
        */
        var k=id_tab_table_en_cours + 1;
        for( k=id_tab_table_en_cours + 1 ; k < l01 ; k=tab[k][12] ){
            if(tab[k][1] === 'champs' && tab[k][2] === 'f'){
                for( l=k + 1 ; l < l01 ; l=tab[l][12] ){
                    if(tab[l][1] === 'champ' && tab[l][2] === 'f'){
                        for( var m=l + 1 ; m < l01 ; m=tab[m][12] ){
                            if(tab[m][1] === 'nom_du_champ'){
                                /* debugger */
                                var donnees_rev_du_champ='meta()';
                                var nom_du_champ='';
                                var type='';
                                var primary_key=0;
                                var non_nulle=0;
                                var auto_increment=0;
                                var references='';
                                var a_une_valeur_par_defaut=0;
                                var la_valeur_par_defaut_est_caractere=0;
                                var valeur_par_defaut='';
                                let valeurs_en_dehors_de_meta=false;
                                let indice_meta=0;
                                for( let n=l + 1 ; n < l01 ; n=tab[n][12] ){
                                    if(tab[n][2] === 'f' && tab[n][1] === 'nom_du_champ' && tab[n][8] === 1){
                                        nom_du_champ=tab[n + 1][1];
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'type' && tab[n][8] === 1){
                                        type=tab[n + 1][1];
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'primary_key'){
                                        primary_key=1;
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'non_nulle'){
                                        non_nulle=1;
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'auto_increment'){
                                        auto_increment=1;
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'references' && tab[n][8] === 2){
                                        references=tab[n + 1][1] + ',' + tab[n + 2][1];
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'a_une_valeur_par_defaut' && tab[n][8] === 1){
                                        a_une_valeur_par_defaut=tab[n + 1][1];
                                        valeurs_en_dehors_de_meta=true;
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'la_valeur_par_defaut_est_caractere' && tab[n][8] === 1){
                                        la_valeur_par_defaut_est_caractere=tab[n + 1][1];
                                        valeurs_en_dehors_de_meta=true;
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'valeur_par_defaut' && tab[n][8] === 1){
                                        valeur_par_defaut=tab[n + 1][1];
                                        valeurs_en_dehors_de_meta=true;
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'meta'){
                                        indice_meta=n;
                                    }
                                }
                                if(indice_meta > 0){
                                    var obj1=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[indice_meta][7] , false , indice_meta , 0 , [] , null , true );
                                    if(obj1.__xst === __xsu){
                                        donnees_rev_du_champ=obj1.__xva;
                                    }else{
                                        __gi1.__m_rev1.empiler_erreur( {"__xst" : __xsu ,"__xme" : '0849 problème sur les données du champ "' + nom_du_champ + '"'} );
                                        __gi1.remplis_les_messages_et_affiche( '' );
                                        return;
                                    }
                                }
                                let obj_donnees_rev_du_champ=this.#corrige_meta_champ( donnees_rev_du_champ , {} , nom_du_champ );
                                donnees_rev_du_champ=obj_donnees_rev_du_champ.texte;
                                if(valeurs_en_dehors_de_meta === false){
                                    a_une_valeur_par_defaut=obj_donnees_rev_du_champ.a_une_valeur_par_defaut;
                                    valeur_par_defaut=obj_donnees_rev_du_champ.valeur_par_defaut;
                                    la_valeur_par_defaut_est_caractere=obj_donnees_rev_du_champ.la_valeur_par_defaut_est_caractere;
                                }
                                /* debugger */
                                /*
                                  on recherche le nom du champ pour créer le conteneur et le cadre
                                */
                                var a=this.#ajouter_champ_a_arbre( nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , id_bdd_de_la_base , donnees_rev_du_champ , type , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut , valeur_par_defaut , la_valeur_par_defaut_est_caractere );
                                id_svg_champ_en_cours=a.id_svg_champ_en_cours;
                                indice_du_champ=a.indice_du_champ;
                                indice_courant=a.indice_courant;
                                break;
                            }
                        }
                    }
                }
            }
        }
        /*
          
          fin du create table
          on a un nom de table : nom_de_la_table
          on recherche les index qui pointent sur la table en cours
        */
        for( i=1 ; i < l01 ; i=tab[i][12] ){
            if(tab[i][1] === 'ajouter_index' && tab[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=tab[j][12] ){
                    if(tab[j][7] === i && tab[j][1] === 'nom_de_la_table_pour_l_index' && tab[j + 1][1] === nom_de_la_table){
                        /*
                          on a trouvé un index qui pointe sur cette table
                          on analyse à partir de i+1
                        */
                        var donnees_rev_de_l_index='';
                        var nom_de_la_table_pour_l_index='';
                        var nom_de_l_index='';
                        var champs='';
                        var unique=0;
                        let indice_meta=0;
                        for( let k=i + 1 ; k < l01 ; k=tab[k][12] ){
                            if('nom_de_l_index' === tab[k][1]){
                                nom_de_l_index=tab[k + 1][1];
                                /*
                                  création de la boite de l'index
                                */
                                /* largeur_de_la_boite=this.#ajuster_largeur_de_boite( largeur_de_la_boite , nom_de_l_index ); */
                                /*
                                  
                                  conteneur du nom de l'index
                                */
                            }else if('nom_de_la_table_pour_l_index' === tab[k][1]){
                                nom_de_la_table_pour_l_index=tab[k + 1][1];
                            }else if('unique' === tab[k][1]){
                                unique=1;
                            }else if('champs' === tab[k][1]){
                                for( let l=k + 1 ; l < l01 ; l=tab[l][12] ){
                                    if(champs !== ''){
                                        champs+=',';
                                    }
                                    champs+='\'' + tab[l][1].replace( /\\/ , '\\\\' ).replace( /\'/ , '\\\'' ) + '\'';
                                }
                            }else if('meta' === tab[k][1]){
                                indice_meta=k;
                            }
                        }
                        if(indice_meta > 0){
                            var obj1=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[indice_meta][7] , false , indice_meta , 0 , [] , null , true );
                            if(obj1.__xst === __xsu){
                                donnees_rev_de_l_index=obj1.__xva;
                                donnees_rev_de_l_index=this.#corrige_meta_index( donnees_rev_de_l_index , {} , nom_de_l_index );
                                donnees_rev_de_l_index=donnees_rev_de_l_index.texte;
                            }else{
                                __gi1.__m_rev1.empiler_erreur( {"__xst" : __xsu ,"__xme" : '0849 problème sur les données de l\'index "' + nom_de_l_index + '"'} );
                                __gi1.remplis_les_messages_et_affiche( '' );
                                return;
                            }
                        }
                        id_svg_champ_en_cours=indice_courant;
                        var a=this.#ajouter_index_a_table( id_bdd_de_la_base , indice_courant , nom_de_l_index , id_svg_conteneur_table , nom_de_la_table , donnees_rev_de_l_index , champs , unique );
                        indice_courant=a.indice_courant;
                        break;
                    }
                }
            }
        }
        return({"__xst" : __xsu ,"indice_courant" : indice_courant ,"id_svg_conteneur_table" : id_svg_conteneur_table});
    }
    /*
      =============================================================================================================
      function modifier_les_references_des_liens
    */
    #modifier_les_references_des_liens( id_bdd_de_la_base ){
        /*
          
          il faut mettre à jour les tableaux pour lesquels id_svg_parent_table et id_svg_parent_champ sont à zéro
          
          this.#svg_tableaux_des_references_amont_aval
          this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={type:'path',
          
          car une table mère peut être déclarée après une table fille
          parent_nom_table:nom_parent_table,
          parent_nom_champ:nom_parent_champ,
          
        */
        var i={};
        for(i in this.#arbre[id_bdd_de_la_base].arbre_svg){
            if(this.#arbre[id_bdd_de_la_base].arbre_svg[i]
                   && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === "reference_croisée"
                   && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.id_svg_parent_champ === -1
            ){
                var j={};
                try{
                    for(j in this.#arbre[id_bdd_de_la_base].arbre_svg){
                        if(this.#arbre[id_bdd_de_la_base].arbre_svg[j]){
                            if(this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.type_element === "rectangle_de_champ"
                                   && this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_de_la_table === this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_parent_table
                                   && this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_du_champ === this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_parent_champ
                            ){
                                this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.id_svg_parent_champ=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.id_svg_champ_en_cours;
                                this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.id_svg_parent_table=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.id_svg_conteneur_table;
                                var k={};
                                for(k in this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base]){
                                    if(this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base][k]){
                                        if(this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base][k].nom_parent_champ === this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_du_champ
                                               && this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base][k].nom_parent_table === this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_de_la_table
                                        ){
                                            this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base][k].id_svg_parent_champ=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.id_svg_champ_en_cours;
                                            this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base][k].id_svg_parent_table=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.id_svg_conteneur_table;
                                        }
                                    }
                                }
                                break;
                            }
                        }
                    }
                }catch(e){
                    debugger;
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    traiter_arbre1( obj ){
        /* console.log( 'dans traiter_arbre_, obj=' , obj ); */
        for(let i in obj){
            this.#arbre[obj[i]['T0.chi_id_basedd']]={
                 /*  */
                "chp_rev_travail_basedd" : obj[i]['T0.chp_rev_travail_basedd'] ,
                "arbre_svg" : []
            };
            if(obj[i]['T0.chp_rev_travail_basedd'] === '' || obj[i]['T0.chp_rev_travail_basedd'] === null){
                __gi1.__m_rev1.empiler_erreur( {"__xst" : __xif ,"__xme" : __gi1.__m_rev1.nl2() + 'le champ chp_rev_travail_basedd est vide'} );
            }
            if(obj[i]['T0.chp_rev_travail_basedd'] === null || obj[i]['T0.chp_rev_travail_basedd'] === ''){
            }else{
                var obj1=__gi1.__m_rev1.rev_tm( obj[i]['T0.chp_rev_travail_basedd'] );
                if(obj1.__xst === __xsu){
                    this.#arbre[obj[i]['T0.chi_id_basedd']]['matrice']=obj1.__xva;
                }else{
                    __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
                    __gi1.remplis_les_messages_et_affiche( '' );
                    return;
                }
            }
        }
        var indice_svg_courant=0;
        var tableau_des_elements=[];
        var decallage_droite_table=10;
        var position_xy_table=[decallage_droite_table,10];
        var id_svg_conteneur_table=0;
        var id_tab_table_en_cours=0;
        var id_tab_champ_en_cours=0;
        var max_x=0;
        var max_y=0;
        var position_max_droite=0;
        var largeur_de_la_table=0;
        var tableau_des_references_croisees=[];
        var id_svg_rectangle_base_en_cours=0;
        var i=0;
        var j=0;
        var k=0;
        var l=0;
        var indice_matr=0;
        /*
          svg_tableaux_des_references_amont_aval  
          =====================================================================================================
          debut de pour chaque base 
          =====================================================================================================
        */
        var id_bdd_de_la_base={};
        for(id_bdd_de_la_base in this.#arbre){
            this.#id_bdd_de_la_base_en_cours=id_bdd_de_la_base;
            this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base]=[];
            this.#id_svg_de_la_base_en_cours=indice_svg_courant;
            this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={
                "type" : 'g' ,
                "id" : this.#id_svg_de_la_base_en_cours ,
                "id_parent" : -1 ,
                "proprietes" : {
                    "type_element" : 'conteneur_de_base' ,
                    "id_bdd_de_la_base_en_cours" : id_bdd_de_la_base ,
                    "id" : indice_svg_courant ,
                    "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                    "transform" : 'translate(0,0)' ,
                    "decallage_x" : 0 ,
                    "decallage_y" : 0
                }
            };
            indice_svg_courant++;
            id_svg_rectangle_base_en_cours=indice_svg_courant;
            this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={
                "type" : 'rect' ,
                "id" : indice_svg_courant ,
                "id_parent" : this.#id_svg_de_la_base_en_cours ,
                "proprietes" : {
                    "type_element" : 'rectangle_de_base' ,
                    "id_bdd_de_la_base_en_cours" : id_bdd_de_la_base ,
                    "id" : indice_svg_courant ,
                    "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                    "x" : 0 ,
                    "y" : 0 ,
                    "width" : 120 ,
                    "height" : 120 ,
                    "style" : "stroke:red;stroke-width:" + this.#taille_bordure + ";fill:yellow;fill-opacity:0.2;"
                }
            };
            indice_svg_courant++;
            var id_conteneur_texte_base=indice_svg_courant;
            this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={
                "type" : 'g' ,
                "id" : indice_svg_courant ,
                "id_parent" : this.#id_svg_de_la_base_en_cours ,
                "proprietes" : {
                    "type_element" : 'conteneur_du_texte_de_la_base' ,
                    "id" : indice_svg_courant ,
                    "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                    "transform" : 'translate(0,0)'
                }
            };
            /* this.#chemin_module1 */
            indice_svg_courant++;
            this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={
                "type" : 'text' ,
                "id" : indice_svg_courant ,
                "id_parent" : indice_svg_courant - 1 ,
                "contenu" : '<tspan data-hug_click="interface1.module1(chemin_module1(\'' + this.#chemin_module1 + '\'),methode3(modale_modifier_la_base),parametre3(id_bdd_de_la_base(' + id_bdd_de_la_base + ')))" style="fill:blue;cursor:pointer;" >base(' + id_bdd_de_la_base + ')</tspan> ' + '<tspan aria-labelledby="sauvegarder ce modèle" data-hug_click="interface1.module1(chemin_module1(\'' + this.#chemin_module1 + '\'),methode3(sauvegarder_la_base),parametre3(id_bdd_de_la_base(' + id_bdd_de_la_base + ')))" style="fill:green;cursor:pointer;" >sauvegarder</tspan> ' ,
                "proprietes" : {
                    "id" : indice_svg_courant ,
                    "type_element" : 'texte_id_bdd_de_la_base' ,
                    "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                    "x" : this.#taille_bordure ,
                    "y" : this.#taille_bordure + __gi1.css_dimensions.t_police ,
                    "style" : "fill:blue;"
                }
            };
            indice_svg_courant++;
            tableau_des_references_croisees=[];
            var tab=[];
            if(this.#arbre[id_bdd_de_la_base].hasOwnProperty( 'matrice' )){
                tab=this.#arbre[id_bdd_de_la_base]['matrice'];
            }
            var l01=tab.length;
            /*
              
              =============================================================================================
              recherche des meta de la base i
              =============================================================================================
            */
            var meta_de_la_base='';
            var decallage_x=0;
            var decallage_y=0;
            for( indice_matr=1 ; indice_matr < l01 ; indice_matr=tab[indice_matr][12] ){
                if(tab[indice_matr][3] === 0 && tab[indice_matr][1] === 'meta' && tab[indice_matr][2] === 'f'){
                    var objxx=__gi1.__m_rev1.matrice_vers_source_rev1( tab , tab[indice_matr][7] , false , indice_matr , 0 , [] , null , true );
                    if(objxx.__xst === __xsu){
                        let obj_meta_de_la_base=this.#corrige_meta_base( objxx.__xva , {} );
                        meta_de_la_base=obj_meta_de_la_base.texte;
                        decallage_x=obj_meta_de_la_base.decallage_x;
                        decallage_y=obj_meta_de_la_base.decallage_y;
                    }else{
                        debugger;
                    }
                }
            }
            this.#arbre[id_bdd_de_la_base].arbre_svg[id_svg_rectangle_base_en_cours].proprietes['donnees_rev_meta_de_la_base']=meta_de_la_base;
            this.#arbre[id_bdd_de_la_base].arbre_svg[this.#id_svg_de_la_base_en_cours].proprietes.decallage_x=decallage_x;
            this.#arbre[id_bdd_de_la_base].arbre_svg[this.#id_svg_de_la_base_en_cours].proprietes.decallage_y=decallage_y;
            this.#arbre[id_bdd_de_la_base].arbre_svg[this.#id_svg_de_la_base_en_cours].proprietes.transform='translate(' + decallage_x + ',' + decallage_y + ')';
            /*
              =============================================================================================
              debut de recherche des créer_table
              =============================================================================================
            */
            position_xy_table=[decallage_droite_table,10];
            for( indice_matr=1 ; indice_matr < l01 ; indice_matr++ ){
                if(tab[indice_matr][7] === 0 && tab[indice_matr][1] === 'créer_table'){
                    id_tab_table_en_cours=indice_matr;
                    var obj=this.#ajouter_table_et_index_a_arbre( tab , id_tab_table_en_cours , indice_svg_courant , id_bdd_de_la_base , null );
                    if(obj.__xst === __xsu){
                        indice_svg_courant=obj.indice_courant;
                        id_svg_conteneur_table=obj.id_svg_conteneur_table;
                    }else{
                        debugger;
                    }
                }
            }
            this.#modifier_les_references_des_liens( id_bdd_de_la_base );
        }
        /*
          
          =====================================================================================================
          fin de pour chaque base
          on peut afficher le svg
          =====================================================================================================
        */
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      function charger_les_bases
    */
    #charger_les_bases_en_asynchrone( les_id_des_bases ){
        let obj={"__x_action" : 'c_bases1.recuperer_zone_travail_pour_les_bases(les_id_des_bases(' + les_id_des_bases + '))'};
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
    /*
      
      =============================================================================================================
      function charger_les_bases_initiales
    */
    #charger_les_bases_initiales_en_asynchrone(){
        this.#arbre={};
        var les_id_des_bases=document.getElementById( this.#id_text_area_contenant_les_id_des_bases ).value;
        var obj1=this.#charger_les_bases_en_asynchrone( les_id_des_bases );
    }
    /*
      
      =============================================================================================================
    */
    zoomMoins(){
        this.zoomPlusMoins( 2 );
    }
    /*
      
      =============================================================================================================
    */
    zoomPlus(){
        this.zoomPlusMoins( 0.5 );
    }
    /*
      
      =============================================================================================================
    */
    zoom_avec_roulette( e ){
        if(e.ctrlKey === true){
            /*
              
              le controle zoom du navigateur ne doit pas zoomer le svg
            */
            return;
        }
        /*
          
          pour éviter de faire un défilement de page 
        */
        e.preventDefault();
        if(e.deltaY > 0){
            this.zoomPlusMoins( 2 );
        }else{
            this.zoomPlusMoins( 0.5 );
        }
    }
    /*
      
      =============================================================================================================
      function zoomPlusMoins
    */
    zoomPlusMoins( n ){
        var vb=this.#svg_dessin.getAttribute( 'viewBox' );
        if(vb != null){
            if(this.#_dssvg.zoom1 == 256 && n == 2){
            }else if(this.#_dssvg.zoom1 == 0.03125 && n == 0.5){
            }else{
                this.#_dssvg.zoom1=this.#_dssvg.zoom1 * n;
                if(n === 2){
                    this.#_dssvg.viewBoxInit[2]*=2;
                    this.#_dssvg.viewBoxInit[3]*=2;
                }else{
                    this.#_dssvg.viewBoxInit[2]/=2;
                    this.#_dssvg.viewBoxInit[3]/=2;
                }
                this.setAttributeViewBox();
                this.#rayonPoint=this.#_dssvg.parametres.rayonReference / this.#_dssvg.zoom1;
                this.#strkWiTexteSousPoignees=this.#rayonPoint / 20;
                this.#fontSiTexteSousPoignees=this.#rayonPoint;
            }
        }
    }
    /* function setAttributeViewBox */
    setAttributeViewBox(){
        this.#svg_dessin.setAttribute( 'viewBox' , this.#_dssvg.viewBoxInit.join( ' ' ) );
        /*
          
          this.#_dssvg.zoom1=0.5 => zoom*2 on voit en grand
        */
        if(this.#_dssvg.zoom1 >= 2){
            /* si tout est affiché en petit, on met un fond roze avec des tailles de carrés de 100 px */
            this.#div_svg.style.background='url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cpath d="M 0 0 l 100 100 l 0 -100 l -100 100 Z" fill="pink" fill-opacity=".30"/%3E%3C/svg%3E\')';
            this.#div_svg.style.backgroundSize=(100 / this.#_dssvg.zoom1) + 'px';
            this.#div_svg.style.backgroundPositionX=((-this.#_dssvg.viewBoxInit[0]) * this.#_dssvg.zoom1) + 'px';
            this.#div_svg.style.backgroundPositionY=((-this.#_dssvg.viewBoxInit[1]) * this.#_dssvg.zoom1) + 'px';
        }else if(true || this.#_dssvg.zoom1 > 0.125){
            /* si tout est affiché en grand, on met un gris roze avec des tailles de carrés de 100 px */
            this.#div_svg.style.background='url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"%3E%3Cpath d="M 0 0 l 10 10 l 0 -10 l -10 10 Z" fill="black" fill-opacity=".04"/%3E%3C/svg%3E\')';
            this.#div_svg.style.backgroundSize=(10 / this.#_dssvg.zoom1) + 'px';
            this.#div_svg.style.backgroundPositionX=((-this.#_dssvg.viewBoxInit[0]) * this.#_dssvg.zoom1) + 'px';
            this.#div_svg.style.backgroundPositionY=((-this.#_dssvg.viewBoxInit[1]) * this.#_dssvg.zoom1) + 'px';
        }
    }
}
export{c_svg_bdd1 as c_svg_bdd1};