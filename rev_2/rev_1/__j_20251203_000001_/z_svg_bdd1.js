/*#  
  voir 
  #dessiner_le_svg
  afficher_resultat_comparaison_base_physique_et_base_virtuelle
  #ajouter_champ_a_arbre
  ancien module_svg_bdd.js ,  classe=module_svg_bdd
  modale_modifier_la_base
  
  nouveau
  t+='m1(n1(' + this.moi + '),f1(modifier_la_base_de_modale(id_svg_rectangle_de_la_base(' + id_svg_rectangle_de_la_base + '))))';  
  
        ancien ================
        obj={
            "__xac" : 'pm1(m1(n1('+this.moi+'),f1(creer_la_base_sur_disque_a_partir_du_shema(id_bdd_de_la_base(' + id_bdd_de_la_base_en_cours + ')))))' ,
            "__xva" : {
                "source_sql_de_la_base" : source_sql_de_la_base ,
                "id_bdd_de_la_base" : id_bdd_de_la_base_en_cours
            }
        };
        
        
        nouveau ================
        obj={
            "__xac" : 'pm1(m1(n1('+this.moi+'),f1(creer_la_base_sur_disque_a_partir_du_shema(id_bdd_de_la_base(' + id_bdd_de_la_base_en_cours + ')))))' ,
            "__xva" : {
                "source_sql_de_la_base" : source_sql_de_la_base ,
                "id_bdd_de_la_base" : id_bdd_de_la_base_en_cours
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
*/
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
import {z_rev_vers_sql1} from './z_rev_vers_sql1.js';
import {tri_arbre1} from './tri_arbre1.js';
class z_svg_bdd1{
    moi='z_svg_bdd1';
    /*
      permet d'utiliser le nom de la variable dans des href="nom_de_la_variable.methode()"  
    */
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
    /*
      sert pour le zoom
    */
    #_dssvg={"zoom1" : 1 ,"viewBoxInit" : [] ,"parametres" : {"rayonReference" : 16}};
    #id_svg_de_la_base_en_cours=0;
    #id_bdd_de_la_base_en_cours=0;
    /* arbre des bases : #arbre{id_de_la_base:{arbre_svg:{id:id,id_parent:id_parent,type_element:type_element,proprietes:{x:y}}}} */
    #arbre={};
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
    #hauteur_de_boite=20;
    #hauteur_de_boite_affichage=30;
    #liste_des_meta_table=[
        /*  */
        {
                "nom_du_meta_table" : 'permet_la_gestion_de' ,
                "exemple" : '"cheval,base ..."' ,
                "zone_html2" : 'text' ,
                "valeur_normale_pour_meta" : null ,
                "valeur_brut_pour_meta" : null ,
                "doit_etre_dans_meta" : true
            },
        {
                "nom_du_meta_table" : 'distinction_pour_liste' ,
                "exemple" : '"liste des ..."' ,
                "zone_html2" : 'text' ,
                "valeur_normale_pour_meta" : null ,
                "valeur_brut_pour_meta" : null ,
                "doit_etre_dans_meta" : true
            },
        {
                "nom_du_meta_table" : 'distinction_pour_isad' ,
                "exemple" : '"d\'un,d\'une ..."' ,
                "zone_html2" : 'text' ,
                "valeur_normale_pour_meta" : null ,
                "valeur_brut_pour_meta" : null ,
                "doit_etre_dans_meta" : true
            },
        {
                "nom_du_meta_table" : 'default_charset' ,
                "exemple" : '"utf8mb4"' ,
                "zone_html2" : 'text' ,
                "valeur_normale_pour_meta" : null ,
                "valeur_brut_pour_meta" : null ,
                "doit_etre_dans_meta" : false
            },
        {
                "nom_du_meta_table" : 'collate' ,
                "exemple" : '"utf8mb4_unicode_ci"' ,
                "zone_html2" : 'text' ,
                "valeur_normale_pour_meta" : null ,
                "valeur_brut_pour_meta" : null ,
                "doit_etre_dans_meta" : false
            },
        {
                "nom_du_meta_table" : 'fonctions_spéciales1' ,
                "exemple" : '"ne_pas_supprimer_id_un(1)"' ,
                "zone_html2" : 'textarea' ,
                "valeur_normale_pour_meta" : null ,
                "valeur_brut_pour_meta" : null ,
                "doit_etre_dans_meta" : false
            }
    ];
    __m_rev_vers_sql1=null;
    #date_derniere_sauvegarde=performance.now();
    /*
      =============================================================================================================
      function constructor
    */
    constructor( obj_init ){
        /* console.log( 'constructor z_svg_bdd1' ); */
        this.__m_rev_vers_sql1=new z_rev_vers_sql1( __gi1.__rev1 );
    }
    /*
      =============================================================================================================
    */
    opérations_sur_valeurs_initiales( mat , d ){
        let id_svg_conteneur_table=0;
        let nom_de_la_table='';
        let operation='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'operation' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                operation=mat[i + 1][1];
            }
        }
        if(nom_de_la_table !== ''){
            let req='';
            let lst=document.getElementById( 'opérations_sur_valeurs_initiales' ).getElementsByTagName( 'input' );
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].value !== ''){
                    let nom_de_champ=lst[i].getAttribute( 'data-nom_de_champ' );
                    req+=', `' + nom_de_champ + '` = \'' + lst[i].value.replace( /\'/g , '\'\'' ) + '\'';
                }
            }
            debugger;
        }
    }
    /*
      =============================================================================================================
    */
    init001( mat , d ){
        console.log( 'init001' );
        let id_du_svg='';
        let nom_de_la_div_contenant_le_svg='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('id_du_svg' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_du_svg=mat[i + 1][1];
            }else if('nom_de_la_div_contenant_le_svg' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_div_contenant_le_svg=mat[i + 1][1];
            }
        }
        this.#div_svg=document.getElementById( nom_de_la_div_contenant_le_svg );
        this.#taille_bordure=__gi1.css_dimensions.t_border;
        this.#div_svg.style.maxWidth='calc(100% - var(--t_boutons_carres))';
        this.#div_svg.style.width='calc(100% - var(--t_boutons_carres))';
        this.#div_svg.style.maxHeight='80vh';
        this.#div_svg.style.height='80vh';
        /* var e=this.#div_svg.getElementsByTagName( 'svg' ); */
        /*
          var i=0;
          for( i=0 ; i < e.length ; i++ ){
          this.#svg_dessin=e[i];
          break;
          }
        */
        this.#svg_dessin=document.getElementById( id_du_svg );
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
        this.#svg_dessin.addEventListener( 'mousedown' , this.#souris_bas_listener , false );
        this.#svg_dessin.addEventListener( 'touchstart' , this.#doigt_bas_listener , false );
        this.#arbre={};
        return({"__xst" : __xsu});
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
                __gi1.fermer_la_sous_fenetre();
            } , 500 );
    }
    /*
      =============================================================================================================
      function #message_erreur_modale
    */
    #message_erreur_modale( donnees ){
        var t='';
        t+='<div class="yy__0">KO</div>';
        if(donnees.messages){
            for(var i in donnees.messages){
                t+='<div class="yy__0">' + donnees.messages[i] + '</div>';
            }
        }
        document.getElementById( '__message_modale' ).innerHTML=t;
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
    apres_renommer_une_table1( mat , d ){
        let id_svg_conteneur_table=0;
        let id_svg_du_texte=0;
        let nom_de_la_table='';
        let id_bdd_de_la_base=0;
        let ancien_nom='';
        let nouveau_nom='';
        let id_svg_rectangle_de_la_table=0;
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
        this.#renommer_table_sur_svg( id_svg_du_texte , id_svg_conteneur_table , id_svg_rectangle_de_la_table , nouveau_nom , ancien_nom );
    }
    /*
      =============================================================================================================
    */
    changer_le_nom_de_table_en_base_et_sur_le_svg( mat , d ){
        let id_svg_du_texte='';
        let id_svg_conteneur_table='';
        let id_svg_rectangle_de_la_table=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            var lst=document.getElementById( this.#id_svg_de_la_base_en_cours ).getElementsByTagName( 'rect' );
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].getAttribute( 'type_element' ) && 'rectangle_de_table' === lst[i].getAttribute( 'type_element' )){
                    if(parseInt( lst[i].id , 10 ) !== id_svg_rectangle_de_la_table){
                        if(lst[i].getAttribute( 'nom_de_la_table' ) === nouveau_nom){
                            trouve=true;
                            break;
                        }
                    }
                }
            }
            if(trouve === false){
                let source_sql='ALTER TABLE ' + nom_de_la_table + ' RENAME  TO ' + nouveau_nom + '';
                let cmd='';
                cmd+='pm1(m1(n1(f1(executer_sql3(';
                cmd+=' id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
                /* ancien maj */
                cmd+=' contexte(apres_renommer_une_table1)';
                /* maj+='   id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')'; */
                cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
                cmd+=' id_svg_du_texte(' + id_svg_du_texte + ')';
                cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
                cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+=' ancien_nom(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+=' nouveau_nom(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+='))))';
                let obj={
                     /*  */
                    "__xac" : cmd ,
                    "__xva" : {
                         /*  */
                        "source_sql" : source_sql ,
                        "operation_table" : 'renommer_une_table'
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
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
                    t+=nouveau_nom;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_du_texte].contenu=t;
                    break;
                }
            }
            let nouveau_meta=this.#corrige_meta_table( document.getElementById( id_svg_rectangle_de_la_table ).getAttribute( 'meta_rev_de_la_table' ) , {"nom_de_la_table" : nouveau_nom ,"table" : nouveau_nom} , ancien_nom );
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
                        var obj1=__gi1.__rev1.rev_tm( rev_texte );
                        if(obj1.__xst === __xsu){
                            let mat2=obj1.__xva;
                            for( let k=1 ; k < mat2.length ; k++ ){
                                if(mat2[k][1] === 'nom_de_la_table_pour_l_index' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                    mat2[k + 1][1]=nouveau_nom;
                                }
                            }
                            var obj2=__gi1.__rev1.matrice_vers_source_rev1( mat2 , 0 , false , 1 );
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
            __gi1.fermer_la_sous_fenetre();
            this.#dessiner_le_svg();
        }
    }
    /*
      =============================================================================================================
    */
    changer_le_nom_de_table_sur_le_svg( mat , d ){
        let id_svg_du_texte='';
        let id_svg_conteneur_table='';
        let id_svg_rectangle_de_la_table=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_du_texte' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_du_texte=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        debugger;
        var nouveau_nom=document.getElementById( 'nouveau_nom' ).value;
        var ancien_nom=document.getElementById( 'ancien_nom' ).value;
        if(nouveau_nom !== ancien_nom){
            let trouve=false;
            var lst=document.getElementById( this.#id_svg_de_la_base_en_cours ).getElementsByTagName( 'rect' );
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].getAttribute( 'type_element' ) && 'rectangle_de_table' === lst[i].getAttribute( 'type_element' )){
                    if(parseInt( lst[i].id , 10 ) !== id_svg_rectangle_de_la_table){
                        if(lst[i].getAttribute( 'nom_de_la_table' ) === nouveau_nom){
                            trouve=true;
                            break;
                        }
                    }
                }
            }
            if(trouve === false){
                this.#renommer_table_sur_svg( id_svg_du_texte , id_svg_conteneur_table , id_svg_rectangle_de_la_table , nouveau_nom , ancien_nom );
            }
        }
        return({"__xst" : __xsu});
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
            if(lst[i].id && __gi1.est_num( lst[i].id )){
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
    ajouter_une_table_provenant_de_modale( mat , d ){
        /* nom_de_la_nouvelle_table */
        let id_de_la_zone='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_de_la_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_de_la_zone=mat[i + 1][1];
            }
        }
        var nom_de_la_table=document.getElementById( id_de_la_zone ).value;
        let trouve=false;
        var lst=document.getElementById( this.#id_svg_de_la_base_en_cours ).getElementsByTagName( 'rect' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && 'rectangle_de_table' === lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'nom_de_la_table' ) === nom_de_la_table){
                    trouve=true;
                    break;
                }
            }
        }
        if(trouve === false){
            var j=0;
            var i=0;
            var indice_courant=this.#recuperer_prochain_id_svg();
            var id_svg_conteneur_table=indice_courant;
            var meta_table='';
            meta_table+='meta(';
            meta_table+='nom_de_la_table( \'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='table( \'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            meta_table+='genre_meta(table_de_base),';
            for(let i in this.#liste_des_meta_table){
                meta_table+=this.#liste_des_meta_table[i].nom_du_meta_table + '(\'' + document.getElementById( 'vv_' + this.#liste_des_meta_table[i].nom_du_meta_table ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            }
            meta_table+='transform_table_sur_svg( translate( 20 , 20 ))';
            meta_table+=')';
            var a=this.#ajouter_table_a_svg( nom_de_la_table , indice_courant , [20,20] , meta_table );
            var id_svg_conteneur_table=a.id_svg_conteneur_table;
            indice_courant+=2;
            var a=this.#ajouter_nom_de_table_au_svg( nom_de_la_table , indice_courant , id_svg_conteneur_table , 0 );
            __gi1.fermer_la_sous_fenetre();
            this.#dessiner_le_svg();
        }
        return({"__xst" : __xsu});
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
        /*
          che_est_primaire_genre
          chp_espece_genre
          che_longueur_genre
          che_est_obligatoire_genre
          che_est_incrément_genre
          che_a_init_genre
          che_init_est_mot_genre
          cht_valeur_init_genre
          chp_prefixe_genre
          
          che_est_nur_genre
          
          che_est_parmis_genre
          che_est_positif_genre
          che_est_session_genre
          che_est_tsc_genre
          che_est_tsm_genre
          
          che_ordre_genre
          chi_id_genre
          chp_nom_en_session_genre
          chp_nom_genre
          
          cht_fonctions_genre
          cht_parmis_genre
          
        */
        var nom_du_champ=document.getElementById( 'vv_nom_du_champ' ).value;
        var typologie=document.getElementById( 'chp_prefixe_genre' ).value;
        var genre=document.getElementById( 'vv_genre1' ).value;
        var espece_du_champ=document.getElementById( 'chp_espece_genre' ).value.toUpperCase();
        var longueur_du_champ=document.getElementById( 'che_longueur_genre' ).value;
        var primary_key=document.getElementById( 'che_est_primaire_genre' ).checked ? ( 1 ) : ( 0 );
        var non_nulle=document.getElementById( 'che_est_obligatoire_genre' ).checked ? ( 1 ) : ( 0 );
        var auto_increment=document.getElementById( 'che_est_incrément_genre' ).checked ? ( 1 ) : ( 0 );
        var a_une_valeur_par_defaut=document.getElementById( 'che_a_init_genre' ).checked ? ( 1 ) : ( 0 );
        var la_valeur_par_defaut_est_caractere=document.getElementById( 'che_init_est_mot_genre' ).checked;
        var valeur_par_defaut=document.getElementById( 'cht_valeur_init_genre' ).value;
        var references='';
        if(document.getElementById( 'table_mère' ).value.trim() !== ''
               && document.getElementById( 'champ_père' ).value.trim() !== ''
        ){
            references=document.getElementById( 'table_mère' ).value + ',' + document.getElementById( 'champ_père' ).value;
        }
        var masquer_champ_dans_svg=document.getElementById( 'masquer_champ_dans_svg' ).checked ? ( 1 ) : ( 0 );
        var est_en_session=document.getElementById( 'est_en_session' ).checked ? ( 1 ) : ( 0 );
        var nom_en_session=document.getElementById( 'nom_en_session' ).value;
        var refe_enfant_droite=document.getElementById( 'refe_enfant_droite' ).checked ? ( 1 ) : ( 0 );
        var refe_parent_gauche=document.getElementById( 'refe_parent_gauche' ).checked ? ( 1 ) : ( 0 );
        var est_libelle_lien=document.getElementById( 'est_libelle_lien' ).checked ? ( 1 ) : ( 0 );
        var j=0;
        var i=0;
        let trouve=false;
        var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'text' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && 'texte_de_champ' === lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'nom_du_champ' ) === nom_du_champ){
                    trouve=true;
                    break;
                }
            }
        }
        if(trouve === true){
            return({"__xst" : __xer});
        }
        document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='';
        if(typologie === '' || nom_du_champ === '' || espece_du_champ === '' || genre === ''){
            document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='Vous devez choisir un type de champ et une typologie et renseigner le nom du champ';
            return({"__xst" : __xer});
        }
        if(document.getElementById( 'table_mère' ).value !== '' || document.getElementById( 'champ_père' ).value !== ''){
            if(document.getElementById( 'table_mère' ).value === '' || document.getElementById( 'champ_père' ).value === ''){
                document.getElementById( 'zone_message_ajouter_un_champ' ).innerHTML='erreur sur la table ou le champ parent';
                return({"__xst" : __xer});
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
                return({"__xst" : __xer});
            }
        }
        var indice_courant=this.#recuperer_prochain_id_svg();
        var rev='';
        rev+='meta(';
        rev+='    genre_meta(champ)';
        /* rev+='    champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')'; */
        rev+='    nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    espece_du_champ(' + espece_du_champ + ')';
        if(longueur_du_champ !== ''){
            rev+='    longueur_du_champ(' + longueur_du_champ + ')';
        }
        rev+='    typologie(' + typologie + ')';
        rev+='    genre(' + genre + ')';
        rev+='    nom_bref_du_champ(\'' + document.getElementById( 'meta_ajouter__nom_bref_du_champ' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    abrege_du_champ(\'' + document.getElementById( 'meta_ajouter__abrege_du_champ' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        rev+='    masquer_champ_dans_svg(' + masquer_champ_dans_svg + ')';
        rev+='    est_en_session(' + est_en_session + ')';
        rev+='    nom_en_session(\'' + nom_en_session + '\')';
        rev+='    refe_enfant_droite(' + refe_enfant_droite + ')';
        rev+='    refe_parent_gauche(' + refe_parent_gauche + ')';
        rev+='    est_libelle_lien(' + est_libelle_lien + ')';
        rev+=')';
        var a=this.#ajouter_champ_a_arbre( nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , this.#id_bdd_de_la_base_en_cours , rev , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut , espece_du_champ , longueur_du_champ , valeur_par_defaut , la_valeur_par_defaut_est_caractere );
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    changer_le_nom_d_index_de_modale( mat , d ){
        let id_svg_text=0;
        let id_svg_conteneur_table=0;
        let id_svg_rectangle_de_l_index=0;
        let id_svg_conteneur_d_index=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'rect' );
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].getAttribute( 'type_element' ) && 'rectangle_d_index' === lst[i].getAttribute( 'type_element' )){
                    if(parseInt( lst[i].id , 10 ) !== id_svg_rectangle_de_l_index){
                        if(lst[i].getAttribute( 'nom_de_l_index' ) === nouveau_nom){
                            trouve=true;
                            break;
                        }
                    }
                }
            }
            if(trouve === false){
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
                        t+='' + nouveau_nom;
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
                __gi1.fermer_la_sous_fenetre();
                this.#dessiner_le_svg();
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      On a changé le nom du champ dans le fichier de la bdd, 
      on le change maintenant sur ce schema
    */
    apres_renommer_un_champs1( mat , d ){
        let id_svg_conteneur_table=0;
        let id_svg_text=0;
        let id_svg_champ_en_cours=0;
        let nom_de_la_table='';
        let ancien_nom='';
        let nouveau_nom='';
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
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
            var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'text' );
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].getAttribute( 'type_element' ) && 'texte_de_champ' === lst[i].getAttribute( 'type_element' )){
                    if(parseInt( lst[i].id , 10 ) !== id_svg_text){
                        if(lst[i].getAttribute( 'nom_du_champ' ) === nouveau_nom){
                            trouve=true;
                            break;
                        }
                    }
                }
            }
            if(trouve === false){
                /*  */
                let source_sql='ALTER TABLE ' + nom_de_la_table + ' RENAME COLUMN ' + ancien_nom + ' TO ' + nouveau_nom + '';
                let cmd='';
                cmd+='pm1(m1(n1(' + this.moi + '),f1(executer_sql3(';
                cmd+=' id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '),';
                cmd+=' contexte(renommer_en_bdd_un_champ)';
                /* anciens maj */
                cmd+='    id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
                cmd+='    id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
                cmd+='    id_svg_text(' + id_svg_text + ')';
                cmd+='    id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
                cmd+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+='    nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+='    ancien_nom(\'' + ancien_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+='    nouveau_nom(\'' + nouveau_nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                cmd+='))))';
                let obj={
                     /*  */
                    "__xac" : cmd ,
                    "__xva" : {
                         /*  */
                        "source_sql" : source_sql ,
                        "operation_table" : 'renommer_un_champs'
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
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
                this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_zone_element_svg].contenu=nouveau_nom;
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
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
    }
    /*
      =============================================================================================================
      Change sur le svg uniquement
    */
    changer_le_nom_de_champ_de_modale_sur_le_schema( mat , d ){
        /* id_svg_text , id_svg_conteneur_table ]{ */
        let id_svg_conteneur_table=0;
        let id_svg_text=0;
        let id_svg_champ_en_cours=0;
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'text' );
            for( let i=0 ; i < lst.length ; i++ ){
                if(lst[i].getAttribute( 'type_element' ) && 'texte_de_champ' === lst[i].getAttribute( 'type_element' )){
                    if(parseInt( lst[i].id , 10 ) !== id_svg_text){
                        if(lst[i].getAttribute( 'nom_du_champ' ) === nouveau_nom){
                            trouve=true;
                            break;
                        }
                    }
                }
            }
            if(trouve === false){
                this.#changer_le_nom_de_champ_sur_le_svg( id_svg_conteneur_table , id_svg_text , id_svg_champ_en_cours , nouveau_nom , ancien_nom );
            }
        }
        __gi1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_un_index_de_modale( mat , d ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index='';
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        id_svg_rectangle_de_l_index=parseInt( id_svg_rectangle_de_l_index , 10 );
        if(document.getElementById( 'liste_des_champs_de_l_index' ).value.trim() === ''){
            return({"__xst" : __xer});
        }
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_l_index].proprietes['champs']=document.getElementById( 'liste_des_champs_de_l_index' ).value;
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_l_index].proprietes['unique']=document.getElementById( 'unique' ).checked ? ( 1 ) : ( 0 );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_l_index].proprietes['donnees_rev_de_l_index']='meta( genre_meta(index_de_table) , message( \'' + document.getElementById( 'meta_modifier__message' ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\' ))';
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_un_index_dans_rev_de_modale( mat , d ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index=0;
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_un_index_dans_base_de_modale( mat , d ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index='';
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(operation_table_dans_base(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')))))' ,
            "__xva" : {
                 /*  */
                "source_sql" : source_sql ,
                "operation_table" : 'supprimer_l_index'
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ajouter_un_index_dans_base_de_modale( mat , d ){
        let id_svg_rectangle_de_l_index=0;
        let nom_de_l_index='';
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_l_index=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_l_index' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_l_index=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        let rev_texte=this.#creer_definition_index_en_rev( document.getElementById( id_svg_rectangle_de_l_index ) );
        var obj1=__gi1.__rev1.rev_tm( rev_texte );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                var source_sql=obj2.__xva;
                let obj={
                     /*  */
                    "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(operation_table_dans_base(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')))))' ,
                    "__xva" : {
                         /*  */
                        "source_sql" : source_sql ,
                        "operation_table" : 'ajouter_l_index'
                    }
                };
                __gi1.envoyer_un_message_au_worker( obj );
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    ajouter_en_bdd_le_champ_de_modale( mat , d ){
        let id_svg_text=0;
        let id_svg_conteneur_table=0;
        let nom_du_champ='';
        let id_svg_rectangle_du_champ=0;
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            var obj1=__gi1.__rev1.rev_tm( definition_du_champ );
            if(obj1.__xst === __xsu){
                var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    var source_sql='ALTER TABLE `' + nom_de_la_table + '` ADD COLUMN ' + obj2.__xva + ';';
                    let obj={
                         /*  */
                        "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(executer_sql3(id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + '),contexte(ajouter_en_bdd_le_champ)))))' ,
                        "__xva" : {
                             /*  */
                            "source_sql" : source_sql ,
                            "operation_table" : 'ajouter_un_champ'
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
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_le_champ_de_modale( mat , d ){
        /* id_svg_text , id_svg_conteneur_table , nom_du_champ , id_svg_rectangle_du_champ ]{ */
        let id_svg_text=0;
        let id_svg_conteneur_table=0;
        let nom_du_champ='';
        let id_svg_rectangle_du_champ=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
                var obj=__gi1.__rev1.rev_tm( elt.proprietes.donnees_rev_de_l_index );
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
                                        var nouvelle_matrice=__gi1.__rev1.supprimer_un_element_de_la_matrice( obj.__xva , k , 0 );
                                        var obj=__gi1.__rev1.matrice_vers_source_rev1( nouvelle_matrice , 0 , false , 1 );
                                        if(obj.__xst === __xsu){
                                            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes.donnees_rev_de_l_index=obj.__xva;
                                        }else{
                                            debugger;
                                            return({"__xst" : __xer});
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    debugger;
                    return({"__xst" : __xer});
                }
            }
        }
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_un_champ_de_modale( mat , d ){
        /* id_svg_rectangle_du_champ , nom_du_champ , nom_de_la_table ]{ */
        let id_svg_rectangle_du_champ=0;
        let nom_du_champ='';
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
        a.proprietes.refe_enfant_droite=document.getElementById( 'refe_enfant_droite' ).checked ? ( 1 ) : ( 0 );
        a.proprietes.refe_parent_gauche=document.getElementById( 'refe_parent_gauche' ).checked ? ( 1 ) : ( 0 );
        a.proprietes.est_libelle_lien=document.getElementById( 'est_libelle_lien' ).checked ? ( 1 ) : ( 0 );
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
                    if(lst2[j].id && __gi1.est_num( lst2[j].id )){
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
                let nn=document.getElementById( 'che_est_obligatoire_genre' ).checked ? ( '1' ) : ( '0' );
                let couleur='stroke:coral;stroke-opacity:0.6';
                if(nn === '1'){
                    couleur='stroke:brown;stroke-opacity:0.6';
                }
                /* hugues */
                if(reference_amont_aval === -1){
                    /*
                      hugues
                      si le champ n'était pas lié il faut ajouter un nouveau lien
                    */
                    max_id_svg++;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[max_id_svg]={
                        "type" : 'g' ,
                        "id" : max_id_svg ,
                        "id_parent" : this.#id_svg_de_la_base_en_cours ,
                        "proprietes" : {
                            "id" : max_id_svg ,
                            "type_element" : 'conteneur_reference_croisée' ,
                            "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                            "id_svg_parent_table" : id_svg_parent_table ,
                            "id_svg_parent_champ" : id_svg_parent_champ ,
                            "id_svg_enfant_table" : id_svg_enfant_table ,
                            "id_svg_enfant_champ" : id_svg_rectangle_du_champ - 1 ,
                            "nom_parent_table" : table_mere ,
                            "nom_parent_champ" : champ_pere ,
                             /*
                              "nom_enfant_table" : table_fille ,
                              "nom_enfant_champ" : champ_fils ,
                             */
                            }
                    };
                    var d='M 0 0 C 10 0 10 20 20 20';
                    max_id_svg++;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[max_id_svg]={
                        "type" : 'path' ,
                        "id" : max_id_svg ,
                        "id_parent" : max_id_svg - 1 ,
                        "proprietes" : {
                            "id" : max_id_svg ,
                            "d" : d ,
                            "type_element" : 'reference_croisée' ,
                            "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                            "id_svg_parent_table" : id_svg_parent_table ,
                            "id_svg_parent_champ" : id_svg_parent_champ ,
                            "id_svg_enfant_table" : id_svg_enfant_table ,
                            "id_svg_enfant_champ" : id_svg_rectangle_du_champ - 1 ,
                            "nom_parent_table" : table_mere ,
                            "nom_parent_champ" : champ_pere ,
                            "style" : '' + couleur + ';stroke-width:' + (this.#taille_bordure * 3) + ';fill:transparent;stroke-opacity:0.6;stroke-linejoin:round;stroke-linecap:round;'
                        }
                    };
                    a.proprietes.references=table_mere + ',' + champ_pere;
                    this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours].push( {
                            "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                            "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                            "id_svg_parent_table" : id_svg_parent_table ,
                            "id_svg_parent_champ" : id_svg_parent_champ ,
                            "id_svg_enfant_table" : id_svg_enfant_table ,
                            "id_svg_enfant_champ" : id_svg_rectangle_du_champ - 1 ,
                            "nom_enfant_table" : nom_de_la_table ,
                            "nom_enfant_champ" : nom_du_champ ,
                            "nom_parent_table" : table_mere ,
                            "nom_parent_champ" : champ_pere ,
                            "id_du_path" : max_id_svg - 1 ,
                            "p1" : [0,0] ,
                            "p2" : [50,50] ,
                            "refe_enfant_droite" : a.proprietes.refe_enfant_droite ,
                            "refe_parent_gauche" : a.proprietes.refe_parent_gauche ,
                            "est_libelle_lien" : a.proprietes.est_libelle_lien
                        } );
                }else{
                    /* si le champ était déjà lié, il faut modifier le lien existant */
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path].proprietes['id_svg_parent_champ']=id_svg_parent_champ;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path].proprietes['id_svg_parent_table']=id_svg_parent_table;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path].proprietes['references']=table_mere + ',' + champ_pere;
                    a.proprietes.references=table_mere + ',' + champ_pere;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path + 1].proprietes['id_svg_parent_champ']=id_svg_parent_champ;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path + 1].proprietes['id_svg_parent_table']=id_svg_parent_table;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path + 1].proprietes['references']=table_mere + ',' + champ_pere;
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path + 1].proprietes['style']=couleur + ';stroke-width:' + (this.#taille_bordure * 3) + ';fill:transparent;stroke-opacity:0.6;stroke-linejoin:round;stroke-linecap:round;';
                    for(let l in this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours]){
                        let elem=this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][l];
                        if(elem.id_svg_enfant_champ === id_svg_rectangle_du_champ - 1
                               && elem.id_svg_enfant_table === id_svg_enfant_table
                               && elem.id_svg_parent_champ === id_svg_parent_champ
                               && elem.id_svg_parent_table === id_svg_parent_table
                        ){
                            this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][l].refe_enfant_droite=a.proprietes.refe_enfant_droite;
                            this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][l].refe_parent_gauche=a.proprietes.refe_parent_gauche;
                        }
                    }
                }
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
                    this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_du_path + 1]=null;
                    this.#svg_tableaux_des_references_amont_aval[this.#id_bdd_de_la_base_en_cours][j]=null;
                    break;
                }
            }
            a.proprietes.references='';
        }
        /*
          document.getElementById( 'espece_du_champ' ).value=data_genre.;
          document.getElementById( 'longueur_du_champ' ).value=data_genre. === null ? ( '' ) : ( data_genre.che_longueur_genre );
          document.getElementById( 'non_nulle' ).checked=data_genre. === 1 ? ( true ) : ( false );
          document.getElementById( 'primary_key' ).checked=data_genre. === 1 ? ( true ) : ( false );
          document.getElementById( 'auto_increment' ).checked=data_genre. === 1 ? ( true ) : ( false );
          document.getElementById( 'a_une_valeur_par_defaut' ).checked=data_genre. === 1 ? ( true ) : ( false );
          document.getElementById( 'la_valeur_par_defaut_est_caractere' ).checked=data_genre.che_init_est_mot_genre === 1 ? ( true ) : ( false );
          document.getElementById( 'valeur_par_defaut' ).value=data_genre.cht_valeur_init_genre === null ? ( '' ) : ( data_genre.cht_valeur_init_genre );
          document.getElementById( 'typologie' ).value=data_genre. === null ? ( '' ) : ( data_genre.chp_prefixe_genre );
        */
        a.proprietes.espece_du_champ=document.getElementById( 'chp_espece_genre' ).value.toUpperCase();
        a.proprietes.longueur_du_champ=document.getElementById( 'che_longueur_genre' ).value;
        a.proprietes.primary_key=document.getElementById( 'che_est_primaire_genre' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.non_nulle=document.getElementById( 'che_est_obligatoire_genre' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.auto_increment=document.getElementById( 'che_est_incrément_genre' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.a_une_valeur_par_defaut=document.getElementById( 'che_a_init_genre' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.la_valeur_par_defaut_est_caractere=document.getElementById( 'che_init_est_mot_genre' ).checked ? ( '1' ) : ( '0' );
        a.proprietes.valeur_par_defaut=document.getElementById( 'cht_valeur_init_genre' ).value;
        var masquer_champ_dans_svg=document.getElementById( 'masquer_champ_dans_svg' ).checked ? ( 1 ) : ( 0 );
        var est_en_session=document.getElementById( 'est_en_session' ).checked ? ( 1 ) : ( 0 );
        var nom_en_session=document.getElementById( 'nom_en_session' ).value;
        if(masquer_champ_dans_svg === '1'){
            if(a.proprietes.primary_key === '1' || a.proprietes.auto_increment === '1' || reference_amont_ou_aval === true){
                masquer_champ_dans_svg=0;
            }
        }
        let obj={
            "masquer_champ_dans_svg" : masquer_champ_dans_svg ,
            "est_en_session" : est_en_session ,
            "nom_en_session" : nom_en_session ,
            "refe_enfant_droite" : a.proprietes.refe_enfant_droite ,
            "refe_parent_gauche" : a.proprietes.refe_parent_gauche ,
            "est_libelle_lien" : a.proprietes.est_libelle_lien ,
            "nom_bref_du_champ" : document.getElementById( 'meta_modifier__nom_bref_du_champ' ).value ,
            "abrege_du_champ" : document.getElementById( 'meta_modifier__abrege_du_champ' ).value ,
             /* meta_modifier__typologie */
            "typologie" : document.getElementById( 'chp_prefixe_genre' ).value ,
             /* meta_modifier__genre */
            "genre" : document.getElementById( 'vv_genre1' ).value
        };
        let obj_donnees_rev_du_champ=this.#corrige_meta_champ( document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'donnees_rev_du_champ' ) , obj , nom_du_champ );
        /* meta_modifier__genre */
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ + 3].contenu=document.getElementById( 'vv_genre1' ).value;
        if(masquer_champ_dans_svg === 1){
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ - 1].proprietes.style='display:none;';
        }else{
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_du_champ - 1].proprietes.style='display:inline;';
        }
        a.proprietes.donnees_rev_du_champ=obj_donnees_rev_du_champ.texte;
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modale_modifier_l_index( mat , d ){
        /* ]{ */
        let nom_de_l_index='';
        let id_svg_conteneur_table=0;
        let id_svg_conteneur_d_index=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            return({"__xst" : __xer});
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
                    var obj_matrice_de_l_index=__gi1.__rev1.rev_tm( lst[i].getAttribute( 'donnees_rev_de_l_index' ) );
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
        t+='<div class="rev_bouton yy__0" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(changer_le_nom_d_index_de_modale(';
        t+=' id_svg_text(' + id_element_svg + '),';
        t+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        t+=' id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + ')';
        t+=' id_svg_conteneur_d_index(' + id_svg_conteneur_d_index + ')';
        t+=')))" >changer</div>';
        t+='<hr />';
        /*
          champs de l'index
        */
        t+='<h3>changer les champs</h3>';
        t+='<br />liste des champ  : <input type="text" id="liste_des_champs_de_l_index" disabled style="width:100%;" disabled value="' + liste_des_champs_de_l_index + '" />';
        t+='<br />';
        t+='<div class="rev_bouton yy__0" data-rev_click="';
        t+='m1(n1(' + this.moi + ')f1(raz_liste_des_champs_de_l_index(';
        t+=' nom_du_champ(\'liste_des_champs_de_l_index\'),';
        t+=')))" >raz</div>';
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
            t+='<div class="rev_bouton yy__3" data-rev_click="';
            t+='m1(n1(' + this.moi + '),f1(ajouter_un_champ_a_l_index_dans_modale(';
            t+=' nom_du_champ(\'' + liste_des_champs[i] + '\')';
            t+=')))" >' + liste_des_champs[i] + '</div>';
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
        t+='<br />';
        t+='<div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(modifier_un_index_de_modale(';
        t+=' id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        t+=' nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        t+=' nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + ')';
        t+=')))">modifier</div>';
        t+='<hr />';
        t+='<h3>supprimer l\'index</h3>';
        t+='<div class="yy__0">Veuillez supprimer l\'index dans la base physique avant d\'utiliser de bouton</div>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(supprimer_un_index_dans_rev_de_modale(';
        cmd+=' id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        cmd+=' nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+='  nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__0" data-rev_click="' + cmd + '" >supprimer</div>';
        t+='<hr />';
        t+='<h2>dans la base physique</h2>';
        t+='<h3>ajouter l\'index</h3>';
        cmd='';
        cmd+='m1(n1(\'' + this.moi + '\'),f1(ajouter_un_index_dans_base_de_modale(';
        cmd+=' id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        cmd+=' nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=' nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + cmd + '" >ajouter</div>';
        t+='<h3>supprimer l\'index</h3>';
        cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(supprimer_un_index_dans_base_de_modale(';
        cmd+=' id_svg_rectangle_de_l_index(' + id_svg_rectangle_de_l_index + '),';
        cmd+=' nom_de_l_index(' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=' nom_de_la_table(' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__0" data-rev_click="' + cmd + '" >supprimer</div>';
        /*
          document.getElementById( '__contenu_modale' ).innerHTML=t;
          __gi1.global_modale2.showModal();
        */
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_en_bdd_le_champ_de_modale( mat , d ){
        let id_element_texte_du_nom_de_champ_svg=0;
        let id_svg_conteneur_table=0;
        let id_svg_rectangle_du_champ=0;
        let nom_du_champ='';
        let nom_de_la_table='';
        let id_bdd_de_la_base_en_cours=0;
        let id_svg_champ_en_cours=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_element_texte_du_nom_de_champ_svg' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_element_texte_du_nom_de_champ_svg=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_rectangle_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_du_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'id_bdd_de_la_base_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let source_sql='ALTER TABLE ' + nom_de_la_table + ' DROP COLUMN ' + nom_du_champ + '';
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(executer_sql3(';
        cmd+=' id_bdd_de_la_base(' + id_bdd_de_la_base_en_cours + '),';
        cmd+=' contexte(supprimer_en_bdd_le_champ)';
        /* apres_supprimer_un_champs1 */
        /* anciens maj */
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+=' id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+='))))';
        debugger;
        let obj={
             /*  */
            "__xac" : cmd ,
            "__xva" : {
                 /*  */
                "source_sql" : source_sql ,
                "operation_table" : 'supprimer_en_bdd_le_champ'
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_le_champ_parent_du_champ( mat , d ){
        let zone_select='';
        let zone_cible='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_cible' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_cible=mat[i + 1][1];
            }
        }
        if(zone_cible !== '' && zone_select !== ''){
            document.getElementById( zone_cible ).value=document.getElementById( zone_select ).value;
        }
    }
    /*
      =============================================================================================================
    */
    lister_les_champs_de_la_table( mat , d ){
        let zone_select='';
        let zone_cible='';
        let zone_liste_des_champs='';
        let zone_champ_parent='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_cible' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_cible=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_liste_des_champs' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_liste_des_champs=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_champ_parent' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_champ_parent=mat[i + 1][1];
            }
        }
        let valeur_champ_parent=document.getElementById( zone_champ_parent ).value;
        if(zone_liste_des_champs !== '' && zone_cible !== '' && zone_select !== ''){
            document.getElementById( zone_cible ).value=document.getElementById( zone_select ).value;
            document.getElementById( zone_liste_des_champs ).innerHTML='';
            document.getElementById( zone_champ_parent ).value='';
            if(document.getElementById( zone_select ).value !== ''){
                let chi_id_base=document.getElementById( zone_select ).options[document.getElementById( zone_select ).selectedIndex].getAttribute( 'data-chi_id_base' );
                let mat1=this.#arbre[chi_id_base].matrice;
                let sel01='';
                let l01=mat1.length;
                for( let i=1 ; i < l01 ; i=mat1[i][12] ){
                    if(mat1[i][1] === 'créer_table'){
                        for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                            if(mat1[j][1] === 'nom_de_la_table' && mat1[j][2] === 'f' && mat1[j][8] === 1 && mat1[j + 1][2] === 'c'){
                                if(mat1[j + 1][1] === document.getElementById( zone_cible ).value){
                                    for( let k=j ; k < l01 ; k=mat1[k][12] ){
                                        if(mat1[k][1] === 'champs' && mat1[k][2] === 'f'){
                                            for( let l=k + 1 ; l < l01 ; l=mat1[l][12] ){
                                                if(mat1[l][1] === 'champ' && mat1[l][2] === 'f'){
                                                    for( let m=l + 1 ; m < l01 ; m=mat1[m][12] ){
                                                        if(mat1[m][1] === 'nom_du_champ' && mat1[m][2] === 'f' && mat1[m][8] === 1 && mat1[m + 1][2] === 'c'){
                                                            sel01+='<option value="' + mat1[m + 1][1] + '" ' + (valeur_champ_parent === mat1[m + 1][1] ? ( ' selected="true" ' ) : ( '' )) + '>' + mat1[m + 1][1] + '</option>';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                if(sel01 !== ''){
                    var cmd='';
                    cmd+='m1(n1(' + this.moi + '),f1(selectionner_le_champ_parent_du_champ(';
                    cmd+=' zone_select(vv_champ_parent),';
                    cmd+=' zone_cible(' + zone_champ_parent + '),';
                    cmd+=')))';
                    document.getElementById( zone_liste_des_champs ).innerHTML='<select id="vv_champ_parent" data-rev_change="' + cmd + '"><option value=""></option>' + sel01 + '</select>';
                    __gi1.ajoute_les_evenements_aux_boutons( null );
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    selectionner_un_genre( mat , d ){
        let zone_select='';
        let contexte_action_champ_modifier=0;
        let nom_de_la_table='';
        let zone_champ_primary_key='';
        let zone_du_nom='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'zone_select' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_du_nom' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_du_nom=mat[i + 1][1];
            }else if(mat[i][1] === 'contexte_action_champ_modifier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                contexte_action_champ_modifier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(zone_select === ''){
            return({"__xst" : __xer});
        }
        let ref_zone_select=document.getElementById( zone_select );
        let ref_option_en_cours=ref_zone_select.options[ref_zone_select.selectedIndex];
        let data_genre=JSON.parse( ref_option_en_cours.getAttribute( 'data-genre' ) );
        for(let i in data_genre){
            if(i === 'chp_prefixe_genre'){
                /* debugger */
            }
            try{
                let aa=document.getElementById( i );
                if(aa !== null
                       && (aa.tagName.toLowerCase() === 'input'
                           || aa.tagName.toLowerCase() === 'select'
                           || aa.tagName.toLowerCase() === 'textarea')
                ){
                    let type_de_input='text';
                    try{
                        type_de_input=aa.type.toLowerCase();
                    } catch {}
                    if(type_de_input === 'checkbox'){
                        aa.checked=data_genre[i];
                    }else{
                        if(data_genre[i] === null){
                            aa.value='';
                        }else{
                            aa.value=data_genre[i];
                        }
                    }
                }
            } catch {}
        }
        /*
          document.getElementById( 'espece_du_champ' ).value=data_genre.chp_espece_genre;
          document.getElementById( 'longueur_du_champ' ).value=data_genre.che_longueur_genre === null ? ( '' ) : ( data_genre.che_longueur_genre );
          document.getElementById( 'non_nulle' ).checked=data_genre.che_est_obligatoire_genre === 1 ? ( true ) : ( false );
          document.getElementById( 'primary_key' ).checked=data_genre.che_est_primaire_genre === 1 ? ( true ) : ( false );
          document.getElementById( 'auto_increment' ).checked=data_genre.che_est_incrément_genre === 1 ? ( true ) : ( false );
          document.getElementById( 'a_une_valeur_par_defaut' ).checked=data_genre.che_a_init_genre === 1 ? ( true ) : ( false );
          document.getElementById( 'la_valeur_par_defaut_est_caractere' ).checked=data_genre.che_init_est_mot_genre === 1 ? ( true ) : ( false );
          document.getElementById( 'valeur_par_defaut' ).value=data_genre.cht_valeur_init_genre === null ? ( '' ) : ( data_genre.cht_valeur_init_genre );
          document.getElementById( 'typologie' ).value=data_genre.chp_prefixe_genre === null ? ( '' ) : ( data_genre.chp_prefixe_genre );
        */
        if(contexte_action_champ_modifier === 0){
            /* création du champ */
            let valeur_du_champ=document.getElementById( zone_du_nom ).value;
            if(valeur_du_champ.length === 0){
                valeur_du_champ=data_genre.chp_prefixe_genre + '_';
            }else if(valeur_du_champ.length === 4){
                valeur_du_champ=data_genre.chp_prefixe_genre + '_';
            }else if(valeur_du_champ.length >= 4){
                if(valeur_du_champ.substr( 0 , 3 ) === data_genre.chp_prefixe_genre){
                }else{
                    valeur_du_champ=data_genre.chp_prefixe_genre + '_' + valeur_du_champ.substr( 4 );
                }
            }else{
            }
            if(valeur_du_champ.length === 4){
                if(nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
                    valeur_du_champ=valeur_du_champ + 'xxxx_' + nom_de_la_table.substr( 4 , nom_de_la_table.length - 5 );
                }
            }
            document.getElementById( zone_du_nom ).value=valeur_du_champ;
            document.getElementById( zone_du_nom ).select();
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_nom_xxx_du_champ( mat , d ){
        let nom_de_la_zone='';
        let nom_du_champ='';
        let meta_champ='';
        let mode='';
        let zone_du_champ='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_de_la_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'meta_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                meta_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'mode' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mode=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_du_champ=mat[i + 1][1];
            }
        }
        if(mode === 'nouveau_champ' && nom_de_la_zone !== ''){
            if(zone_du_champ !== ''){
                nom_du_champ=document.getElementById( zone_du_champ ).value;
                if(meta_champ === 'bref'){
                    let tab=nom_du_champ.split( '_' );
                    if(meta_champ === 'bref'){
                        if(tab.length >= 2){
                            tab.splice( 0 , 1 );
                        }
                        if(tab.length >= 2){
                            tab.splice( tab.length - 1 , 1 );
                        }
                        try{
                            document.getElementById( nom_de_la_zone ).value=tab.join( ' ' );
                        } catch {}
                    }
                }
            }
        }else{
            if(nom_de_la_zone !== '' && nom_du_champ !== ''){
                if(meta_champ === 'bref'){
                    let tab=nom_du_champ.split( '_' );
                    if(meta_champ === 'bref'){
                        if(tab.length >= 2){
                            tab.splice( 0 , 1 );
                        }
                        if(tab.length >= 2){
                            tab.splice( tab.length - 1 , 1 );
                        }
                        try{
                            document.getElementById( nom_de_la_zone ).value=tab.join( ' ' );
                        } catch {}
                    }
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modale_modifier_le_champ( mat , d ){
        /* conteneur_de_champ */
        let id_svg_conteneur_table=0;
        let id_svg_champ_en_cours=0;
        let nom_du_champ='';
        let nom_de_la_table='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_champ_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_champ_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        let conteneur_de_champ=document.getElementById( id_svg_champ_en_cours );
        var id_element_texte_du_nom_de_champ_svg=0;
        /* var nom_de_la_table=''; */
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
            return({"__xst" : __xer});
        }
        var t='';
        t+='<h1>modification d\'un champ de la table ' + nom_de_la_table + '</h1>';
        t+='<div ';
        t+=' class="rev_bouton yy__1" ';
        t+=' data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(modale_gerer_la_table(';
        t+=' id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
        t+=' id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + ')';
        t+=')))';
        t+='">éditer la table</div>';
        t+='<div class="" id="zone_message_modifier_un_champ"></div>';
        t+='<hr />';
        t+='<h2>dans ce schema</h2>';
        t+='<hr />';
        /*
          =====================================================================================================
          conteneur_de_champ
        */
        t+='<h3>changer le nom de champ</h3>';
        t+='<input id="nouveau_nom" type="text" value="' + nom_du_champ + '" autocapitalize="off" />';
        t+='<input id="ancien_nom" type="hidden" value="' + nom_du_champ + '" autocapitalize="off" />';
        let f='';
        f+='m1(n1(' + this.moi + '),f1(changer_le_nom_de_champ_de_modale(';
        f+=' id_svg_text(' + id_element_texte_du_nom_de_champ_svg + '),';
        f+=' id_svg_champ_en_cours(' + id_svg_champ_en_cours + '),';
        f+=' id_svg_conteneur_table(\'' + id_svg_conteneur_table + '\')';
        f+=' nom_de_la_table(\'' + nom_de_la_table + '\')';
        f+=')))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + f + '" >changer en base et sur le schema</div>';
        f='';
        f+='m1(n1(' + this.moi + '),f1(changer_le_nom_de_champ_de_modale_sur_le_schema(';
        f+=' id_svg_text(' + id_element_texte_du_nom_de_champ_svg + '),';
        f+=' id_svg_champ_en_cours(' + id_svg_champ_en_cours + '),';
        f+=' id_svg_conteneur_table(\'' + id_svg_conteneur_table + '\')';
        f+=' nom_de_la_table(\'' + nom_de_la_table + '\')';
        f+=')))';
        t+='<div class="rev_bouton yy__0" data-rev_click="' + f + '" >changer sur le schema uniquement</div>';
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
        var espece_du_champ=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'espece_du_champ' ).toUpperCase();
        var longueur_du_champ=document.getElementById( id_svg_rectangle_du_champ ).getAttribute( 'longueur_du_champ' );
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
        let genre=obj_donnees_rev_du_champ.genre;
        let nom_bref_du_champ=obj_donnees_rev_du_champ.nom_bref_du_champ;
        let abrege_du_champ=obj_donnees_rev_du_champ.abrege_du_champ;
        let masquer_champ_dans_svg=obj_donnees_rev_du_champ.masquer_champ_dans_svg;
        let est_en_session=obj_donnees_rev_du_champ.est_en_session;
        let nom_en_session=obj_donnees_rev_du_champ.nom_en_session;
        let refe_enfant_droite=obj_donnees_rev_du_champ.refe_enfant_droite;
        let refe_parent_gauche=obj_donnees_rev_du_champ.refe_parent_gauche;
        let est_libelle_lien=obj_donnees_rev_du_champ.est_libelle_lien;
        t+='<h2>changer les éléments du champ</h2>';
        /*
          
        */
        t+='<table><tr>';
        t+='<td>';
        t+='<br />genre : ';
        let l_option='';
        let texte__liste_des_genres='';
        let genre_courant='';
        let tableau_des_genres=[];
        for(let i in __gi1.__liste_des_genres){
            /*
              {
              "chp_espece_genre":"TEXT",
              "che_longueur_genre":null,
              "che_est_primaire_genre":0,
              "che_est_obligatoire_genre":0,
              "che_est_incrément_genre":0,
              "che_a_init_genre":0,
              "che_init_est_mot_genre":0,
              "cht_valeur_init_genre":null
              
              "chi_id_genre":1,
              "chp_nom_genre":"indéfini",
              }
            */
            l_option='';
            l_option+='<option';
            if(genre == __gi1.__liste_des_genres[i].chi_id_genre){
                l_option+=' selected="true"';
            }
            l_option+=' value="' + __gi1.__liste_des_genres[i].chi_id_genre + '"';
            l_option+=' data-genre="' + __gi1.fi2( JSON.stringify( __gi1.__liste_des_genres[i] ) ) + '"';
            l_option+='>';
            l_option+=__gi1.__liste_des_genres[i].chp_nom_genre;
            l_option+='</option>';
            tableau_des_genres.push( [__gi1.__liste_des_genres[i].che_ordre_genre,l_option] );
        }
        tableau_des_genres.sort( function( a , b ){
                /* return a[0].localeCompare(b[0]); */
                return(a[0] - b[0]);
            } );
        for( let i=0 ; i < tableau_des_genres.length ; i++ ){
            texte__liste_des_genres+=tableau_des_genres[i][1];
        }
        /*
          meta_modifier__genre
        */
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(selectionner_un_genre(';
        cmd+=' zone_select(vv_genre1),';
        cmd+=' contexte_action_champ_modifier(1),';
        cmd+=')))';
        t+='<select id="vv_genre1" data-rev_change="' + cmd + '">' + texte__liste_des_genres + '</select>';
        /*
          
        */
        t+='<br />espece  : <input id="chp_espece_genre" type="text" value="' + espece_du_champ.toUpperCase() + '" autocapitalize="off" />';
        t+='<br />longueur  : <input id="che_longueur_genre" type="text" value="' + longueur_du_champ + '" autocapitalize="off" />';
        t+='<br />table mère : <input id="table_mère" type="text" value="' + table_mere + '" autocapitalize="off" />';
        let sel='';
        let mat1=this.#arbre[this.#id_bdd_de_la_base_en_cours].matrice;
        l01=mat1.length;
        for( let i=1 ; i < l01 ; i=mat1[i][12] ){
            if(mat1[i][1] === 'créer_table'){
                for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                    if(mat1[j][1] === 'nom_de_la_table' && mat1[j][2] === 'f' && mat1[j][8] === 1 && mat1[j + 1][2] === 'c'){
                        sel+='<option ';
                        sel+=' data-chi_id_base="' + this.#id_bdd_de_la_base_en_cours + '" ';
                        sel+=' value="' + mat1[j + 1][1] + '"';
                        sel+='' + (table_mere === mat1[j + 1][1] ? ( ' selected="true" ' ) : ( '' )) + '';
                        sel+='>';
                        sel+='(' + this.#id_bdd_de_la_base_en_cours + ')' + mat1[j + 1][1] + '';
                        sel+='</option>';
                    }
                }
            }
        }
        if(sel !== ''){
            /* modifier */
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(';
            cmd+=' lister_les_champs_de_la_table(';
            cmd+='  zone_select(vv_table_parente),';
            cmd+='  zone_cible(table_mère),';
            cmd+='  zone_liste_des_champs(vv_liste_des_champs_pere),';
            cmd+='  zone_champ_parent(champ_père),';
            cmd+=' )';
            cmd+='))';
            t+='<select id="vv_table_parente" data-rev_change="' + cmd + '"><option value=""></option>' + sel + '</select>';
        }
        t+='<br />champ père : <input id="champ_père" type="text" value="' + champ_pere + '" autocapitalize="off" />';
        t+='<span id="vv_liste_des_champs_pere"></span>';
        t+='<br />clé primary_key  : <input type="checkbox" id="che_est_primaire_genre" ' + (primary_key === true ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />non nulle  : <input type="checkbox" id="che_est_obligatoire_genre" ' + (non_nulle === true ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />auto increment  : <input type="checkbox" id="che_est_incrément_genre" ' + (auto_increment === true ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />a une valeur par défaut <input id="che_a_init_genre" type="checkbox"  ' + (a_une_valeur_par_defaut ? ( 'checked="true"' ) : ( '' )) + '/>';
        t+=' , type caractère <input id="che_init_est_mot_genre" type="checkbox" ' + (la_valeur_par_defaut_est_caractere ? ( 'checked="true"' ) : ( '' )) + ' />';
        t+=' , valeur : <input id="cht_valeur_init_genre" type="text" value="' + valeur_par_defaut.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ) + '" autocapitalize="off" /> ';
        t+='"CURRENT_TIMESTAMP","CURRENT_TIME","CURRENT_DATE"';
        t+='</td>';
        t+='</tt>';
        t+='</table>';
        t+='<br /><b>meta</b>';
        t+='<br />typologie : ';
        /* meta_modifier__typologie */
        t+='<select id="chp_prefixe_genre" >';
        /* typologie */
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
        /*  */
        t+='<br />nom_bref_du_champ : ';
        t+='<input type="text" id="meta_modifier__nom_bref_du_champ" value="' + nom_bref_du_champ.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(modifier_nom_xxx_du_champ(';
        cmd+=' nom_de_la_zone(meta_modifier__nom_bref_du_champ),';
        cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' meta_champ(bref)';
        cmd+=')))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '" >modifier</div>';
        /*  */
        t+='<br />abrege_du_champ : ';
        t+='<input type="text" id="meta_modifier__abrege_du_champ" value="' + abrege_du_champ.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '" autocapitalize="off" />';
        /*  */
        t+='<br />masquer_champ_dans_svg : ';
        t+='<input type="checkbox" id="masquer_champ_dans_svg" ' + (masquer_champ_dans_svg === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />est_en_session : <input type="checkbox" id="est_en_session" ' + (est_en_session === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />nom_en_session : <input type="text" id="nom_en_session" value="' + nom_en_session + '"/>';
        t+='<br />refe_enfant_droite : <input type="checkbox" id="refe_enfant_droite" ' + (refe_enfant_droite === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />refe_parent_gauche : <input type="checkbox" id="refe_parent_gauche" ' + (refe_parent_gauche === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />est_libelle_lien : <input type="checkbox" id="est_libelle_lien" ' + (est_libelle_lien === 1 ? ( 'checked' ) : ( '' )) + ' />';
        t+='<br />';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(modifier_un_champ_de_modale(';
        cmd+=' id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + '),';
        cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '" >modifier</div>';
        /*
          =====================================================================================================
        */
        t+='<hr />';
        t+='<h3>supprimer le champ</h3>';
        t+='<p class="yy__0">Veuillez vérifier que vous avez bien supprimé le champ de la base</p>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(supprimer_le_champ_de_modale(';
        cmd+=' id_svg_text(' + id_element_texte_du_nom_de_champ_svg + '),';
        cmd+=' id_svg_conteneur_table(\'' + id_svg_conteneur_table + '\')';
        cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + '),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__0" data-rev_click="' + cmd + '" >supprimer</div>';
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
        var cmd='';
        cmd+='m1(n1(\'' + this.moi + '\'),f1(ajouter_en_bdd_le_champ_de_modale(';
        cmd+=' id_element_texte_du_nom_de_champ_svg(' + id_element_texte_du_nom_de_champ_svg + '),';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + ')';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + cmd + '" >ajouter le champ en bdd</div>';
        t+='<span class="yy__0">Ne pas oublier de réécrire la base après un ajout d\'un champ en base de donnée</span>';
        t+='<hr />';
        /*
          =====================================================================================================
        */
        t+='<h3>supprimer</h3>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(supprimer_en_bdd_le_champ_de_modale(';
        cmd+=' id_element_texte_du_nom_de_champ_svg(' + id_element_texte_du_nom_de_champ_svg + '),';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' id_svg_rectangle_du_champ(' + id_svg_rectangle_du_champ + ')';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + ')';
        cmd+=' id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__0" data-rev_click="' + cmd + '" >supprimer le champ en bdd</div>';
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
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      function afficher_resultat_comparaison_base_physique_et_base_virtuelle
    */
    /* afficher_resultat_comparaison_base_physique_et_base_virtuelle( par ){ */
    recuperer_les_tableaux_des_bases( mat , d , le_message_serveur ){
        /* par */
        __gi1.fermer_la_sous_fenetre();
        var differences_entre_les_tables=false;
        var differences_entre_les_champs=false;
        var differences_entre_les_indexe=false;
        /* console.log( par ); */
        let par=le_message_serveur.__xva;
        var tables={};
        for(var a1 in par['tableau1']){
            tables[a1]={"presente_dans_tableau_1" : true ,"presente_dans_tableau_2" : false};
        }
        for(var a2 in par['tableau2']){
            if(tables.hasOwnProperty( a2 )){
                tables[a2].presente_dans_tableau_2=true;
            }else{
                tables[a2]={"presente_dans_tableau_1" : false ,"presente_dans_tableau_2" : true};
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : ' la table ' + a2 + ' est absente de la base physique[tableau1] '} );
                differences_entre_les_tables=true;
            }
        }
        for(var a0 in tables){
            if(tables[a0].presente_dans_tableau_2 === false){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : ' la table ' + a0 + ' est absente du schema svg[tableau2]'} );
                differences_entre_les_tables=true;
            }
        }
        if(differences_entre_les_tables === true){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : ' des tables ne sont pas les mêmes'} );
        }else{
            __gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : ' il y a les mêmes tables dans les deux tableaux'} );
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
        /* console.log( 'tables_indexes=' , tables_indexes ); */
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
                                            __gi1.ajoute_message( {
                                                    "__xst" : __xer ,
                                                    "__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' , le type ' + typechamp + ' on a une différence mais ce n\'est peut-être pas une erreur ! '
                                                } );
                                        }else{
                                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' , le type ' + typechamp + ' on a une différence'} );
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
                                __gi1.ajoute_message( {
                                        "__xst" : __xer ,
                                        "__xme" : ' pour la table ' + a0 + ' , le champ ' + champ + ' est dans la base physique mais pas dans la base du champ généré '
                                    } );
                            }else{
                                __gi1.ajoute_message( {
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
            t+='<td>' + (tables[nom_de_la_table].presente_dans_tableau_1 ? ( '<span class="yy__1">oui</span>' ) : ( 'non' )) + '</td>';
            t+='<td>' + (tables[nom_de_la_table].presente_dans_tableau_2 ? ( '<span class="yy__1">oui</span>' ) : ( 'non' )) + '</td>';
            t+='</tr>';
        }
        t+='</table>';
        t+='<table>';
        t+='<tr>';
        t+='<td colspan="4">';
        t+=differences_entre_les_tables ?
          ( 
            '<div class="yy__0">Il y a une différence entre les tables</div>'
          ) : ( 
            '<div class="yy__1">Pas de différence entre les tables</div>'
          );
        t+=differences_entre_les_champs ?
          ( 
            '<div class="yy__0">Il y a une différence entre les champs</div>'
          ) : ( 
            '<div class="yy__1">Pas de différence entre les champs</div>'
          );
        t+=differences_entre_les_indexe ?
          ( 
            '<div class="yy__0">Il y a une différence entre les indexes</div>'
          ) : ( 
            '<div class="yy__1">Pas de différence entre les indexes</div>'
          );
        t+='<div id="vv_meme_ordre"></div>';
        t+='<div ';
        t+=' data-rev_click="';
        t+='m1(n1(\'' + this.moi + '\'),f1(modale_modifier_la_base(';
        t+=' id_bdd_de_la_base(' + par.id_bdd_de_la_base_en_cours + ')';
        t+=')))';
        t+='"';
        t+=' class="rev_bouton yy__3">base(' + par.id_bdd_de_la_base_en_cours + ')</div>';
        if(differences_entre_les_tables === false
               && differences_entre_les_champs === false
               && differences_entre_les_indexe === false
        ){
            t+='<div class="rev_bouton yy__3"';
            t+=' data-rev_click="';
            t+='m1(n1(' + this.moi + '),f1(reecrire_la_base_a_partir_du_shema(id_bdd(' + par.id_bdd_de_la_base_en_cours + '))))';
            t+='">réécrire</div>';
        }
        t+='</td>';
        t+='</tr>';
        t+='<tr>';
        t+='<tr>';
        t+='<th style="border:1px red solid;">Base physique</th>';
        t+='<th style="border:1px red solid;">Base du SVG</th>';
        t+='</tr>';
        t+='<tr>';
        let tableau_ordre={};
        var references=['tableau1','tableau2'];
        /* 1 : base physique , 2 : svg */
        let physique_ou_svg='';
        let numero=0;
        let difference_d_ordre=false;
        let cle_differente='';
        for(var ref in references){
            numero=0;
            physique_ou_svg='phy : ';
            if(ref === '1'){
                physique_ou_svg='svg : ';
            }
            /* console.log( 'ref=' , ref ); */
            t+='<td style="vertical-align: baseline;">';
            t+='<table>';
            for(var nom_de_la_table in par[references[ref]]){
                numero++;
                if(references[ref] === 'tableau1'){
                    tableau_ordre[nom_de_la_table]=numero;
                }else{
                    if(!(tableau_ordre.hasOwnProperty( nom_de_la_table ) && tableau_ordre[nom_de_la_table] === numero)){
                        if(difference_d_ordre === false){
                            cle_differente=nom_de_la_table;
                        }
                        difference_d_ordre=true;
                    }
                }
                t+='<tr>';
                t+='<th style="color:red;">' + physique_ou_svg + '' + nom_de_la_table + '</th>';
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
                        la_class_quoi='yy__2';
                    }
                    if(par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].hasOwnProperty( 'absent_de_l_autre_tableau' )
                           && par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].absent_de_l_autre_tableau === true
                    ){
                        la_class_quoi='yy__2';
                    }
                    /*
                      t+='<td class="'+la_class_quoi+'">'+par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].name+'</td>';
                      t+='<td class="'+la_class_quoi+'">'+par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ].type+'</td>';
                    */
                    var proprietes_a_tester=['name','type','pk','notnull','dflt_value'];
                    for(var ind_prop in proprietes_a_tester){
                        numero++;
                        if(references[ref] === 'tableau1'){
                            if(proprietes_a_tester[ind_prop] === 'name'){
                                let ccc=nom_de_la_table + '_' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]];
                                tableau_ordre[ccc]=numero;
                            }
                        }else{
                            if(proprietes_a_tester[ind_prop] === 'name'){
                                let ccc=nom_de_la_table + '_' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]];
                                if(!(tableau_ordre.hasOwnProperty( ccc ) && tableau_ordre[ccc] === numero)){
                                    if(difference_d_ordre === false){
                                        cle_differente=ccc;
                                    }
                                    difference_d_ordre=true;
                                }
                            }
                        }
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
                            /* base physique */
                            if(par['tableau2'].hasOwnProperty( nom_de_la_table ) && par['tableau2'][nom_de_la_table].liste_des_champs[nom_du_champ]){
                                if(par['tableau2'][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] !== par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]]
                                ){
                                    t+='<td ' + le_style + ' class="yy__0">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
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
                                t+='<td ' + le_style + '  class="yy__0">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
                            }
                        }else{
                            /* svg */
                            if(proprietes_a_tester[ind_prop] === 'dflt_value'
                                   && par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] === null
                            ){
                                t+='<td ' + le_style + '  class="' + la_class_quoi + '"></td>';
                            }else{
                                t+='<td ' + le_style + '  class="' + la_class_quoi + '">' + par[references[ref]][nom_de_la_table].liste_des_champs[nom_du_champ][proprietes_a_tester[ind_prop]] + '</td>';
                            }
                        }
                    }
                    t+='</tr>';
                }
                /*
                  affichage des indexes
                */
                try{
                    if(references[ref] === 'tableau1'){
                        /* base physique */
                        if(tables_indexes.hasOwnProperty( nom_de_la_table )){
                            for(var nom_de_l_index in tables_indexes[nom_de_la_table].indexes){
                                t+='<tr>';
                                if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_1 === false){
                                    t+='<td><b class="yy__0">' + nom_de_l_index + ' absent</b></td>';
                                }else{
                                    t+='<td><b style="color:green;">' + nom_de_l_index + '</b></td>';
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_2 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau2'].unique
                                    ){
                                        t+='<td>unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }else{
                                        t+='<td class="yy__0">unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_2 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].champs_de_l_index === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau2'].champs_de_l_index
                                    ){
                                        t+='<td colspan="5" style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }else{
                                        debugger;
                                        t+='<td colspan="5" class="yy__0"  style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }
                                }
                                t+='</tr>';
                            }
                        }
                    }else if(references[ref] === 'tableau2'){
                        /* svg */
                        if(tables_indexes.hasOwnProperty( nom_de_la_table )){
                            for(var nom_de_l_index in tables_indexes[nom_de_la_table].indexes){
                                t+='<tr>';
                                t+='<td>';
                                if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_2 === false){
                                    t+='<b class="yy__0">' + nom_de_l_index + ' absent</b>';
                                }else{
                                    t+='<b>' + nom_de_l_index + '</b>';
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_1 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau1'].unique
                                    ){
                                        t+='<td>unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }else{
                                        t+='<td class="yy__0">unique ' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].unique + '</td>';
                                    }
                                    if(tables_indexes[nom_de_la_table].indexes[nom_de_l_index].present_dans_tableau_1 === true
                                           && tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]].champs_de_l_index === tables_indexes[nom_de_la_table].indexes[nom_de_l_index]['tableau1'].champs_de_l_index
                                    ){
                                        t+='<td colspan="5" style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
                                    }else{
                                        t+='<td colspan="5" class="yy__0" style="word-break: break-word;">' + tables_indexes[nom_de_la_table].indexes[nom_de_l_index][references[ref]]['champs_de_l_index'] + '</td>';
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
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        if(differences_entre_les_tables === false
               && differences_entre_les_champs === false
               && differences_entre_les_indexe === false
        ){
            if(difference_d_ordre === true){
                document.getElementById( 'vv_meme_ordre' ).innerHTML='<div class="yy__2">l\'ordre est différent ' + cle_differente + '</div>';
            }else{
                document.getElementById( 'vv_meme_ordre' ).innerHTML='<div class="yy__1">l\'ordre est le même</div>';
            }
        }
        /*  */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    comparer_la_base_physique_et_la_base_virtuelle( mat , d ){
        let er=__xer;
        let id_bdd_de_la_base_en_cours=0;
        for( let i=0 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_bdd_de_la_base_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var obj1=this.#creer_rev_de_la_base_a_partir_de_svg( id_bdd_de_la_base_en_cours );
        if(obj1.__xst === __xsu){
            var obj2=__gi1.__rev1.rev_tm( obj1.__xva );
            if(obj2.__xst === __xsu){
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj2.__xva , {} );
                /* debugger */
                if(obj3.__xst === __xsu){
                    let obj={
                         /*  */
                        "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recuperer_les_tableaux_des_bases(id_bdd_de_la_base_en_cours(' + id_bdd_de_la_base_en_cours + ')))))' ,
                        "__xva" : {
                             /*  */
                            "source_base_sql" : obj3.__xva ,
                            "id_bdd_de_la_base_en_cours" : id_bdd_de_la_base_en_cours
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                    er=__xsu;
                }else{
                    return({"__xst" : __xer});
                }
            }else{
                return({"__xst" : __xer});
            }
        }else{
            return({"__xst" : __xer});
        }
        return({"__xst" : er});
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
            var obj2=__gi1.__rev1.rev_tm( texte_rev );
            if(obj2.__xst === __xsu){
                var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj2.__xva , {} );
                if(obj3.__xst === __xsu){
                    var source_sql_de_la_base=obj3.__xva;
                }else{
                    /* __gi1.remplis_les_messages_et_affiche( '' ); */
                    alert( 'Problème sur reecrire_la_base 1739 ' );
                    return({"__xst" : __xer});
                }
            }else{
                /* __gi1.remplis_les_messages_et_affiche( '' ); */
                alert( 'Problème sur reecrire_la_base 1739 ' );
                return({"__xst" : __xer});
            }
        }else{
            /* __gi1.remplis_les_messages_et_affiche( '' ); */
            alert( 'Problème sur reecrire_la_base 1746 ' );
            return({"__xst" : __xer});
        }
        obj={
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(creer_la_base_sur_disque_a_partir_du_shema(id_bdd_de_la_base(' + id_bdd_de_la_base_en_cours + ')))))' ,
            "__xva" : {
                 /*  */
                "source_sql_de_la_base" : source_sql_de_la_base ,
                "id_bdd_de_la_base" : id_bdd_de_la_base_en_cours
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
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
            var obj2=__gi1.__rev1.rev_tm( texte_rev );
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
                                        /* __gi1.remplis_les_messages_et_affiche( '' ); */
                                        alert( 'Problème sur reecrire_la_base 1739 ' );
                                        return({"__xst" : __xer});
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
                    /* __gi1.remplis_les_messages_et_affiche( '' ); */
                    alert( 'Problème sur reecrire_la_base 1739 ' );
                    return({"__xst" : __xer});
                }
            }else{
                /* __gi1.remplis_les_messages_et_affiche( '' ); */
                alert( 'Problème sur reecrire_la_base 1739 ' );
                return({"__xst" : __xer});
            }
        }else{
            /* __gi1.remplis_les_messages_et_affiche( '' ); */
            alert( 'Problème sur reecrire_la_base 1746 ' );
            return({"__xst" : __xer});
        }
        let obj1={
             /*  */
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(reecrire_la_base_a_partir_du_shema_sur_disque())))' ,
            "__xva" : {
                 /*  */
                "id_bdd_de_la_base" : this.#id_bdd_de_la_base_en_cours ,
                "source_sql_de_la_base" : source_sql_de_la_base ,
                "liste_des_tables" : liste_des_tables ,
                "liste_des_tables_champs" : liste_des_tables_champs
            }
        };
        __gi1.envoyer_un_message_au_worker( obj1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    remplir_les_metas_de_la_table( mat , d ){
        let id_de_la_zone=0;
        let masculin_feminin='d\'une ';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_de_la_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_de_la_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'masculin_feminin' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(parseInt( mat[i + 1][1] , 10 ) === 1){
                    masculin_feminin='d\'un ';
                }
            }
        }
        if(id_de_la_zone !== ''){
            let nom_de_la_table=document.getElementById( id_de_la_zone ).value;
            try{
                document.getElementById( 'vv_distinction_pour_liste' ).value='liste des ' + nom_de_la_table.substr( 4 );
            } catch {}
            try{
                document.getElementById( 'vv_distinction_pour_isad' ).value=masculin_feminin + nom_de_la_table.substr( 4 , nom_de_la_table.length - 5 );
            } catch {}
            try{
                document.getElementById( 'vv_permet_la_gestion_de' ).value=nom_de_la_table.substr( 4 , nom_de_la_table.length - 5 );
            } catch {}
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modale_modifier_la_base( mat , d ){
        /* element_g */
        let id_bdd_de_la_base=0;
        let lmat=mat.length;
        for( let i=d + 1 ; i < lmat ; i=mat[i][12] ){
            if('id_bdd_de_la_base' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#id_bdd_de_la_base_en_cours=id_bdd_de_la_base;
        var t='';
        t+='<h1>modification de la base</h1>';
        t+='<hr /><h3>données générales</h3>';
        let obj_meta={"collate" : '' ,"default_charset" : ''};
        var id_svg_rectangle_de_la_base=0;
        var lst=document.getElementById( "refZnDessin" ).getElementsByTagName( 'rect' );
        for( var i=0 ; i < lst.length ; i++ ){
            if('rectangle_de_base' === lst[i].getAttribute( 'type_element' )
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
        t+='<br /><div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(modifier_la_base_de_modale(id_svg_rectangle_de_la_base(' + id_svg_rectangle_de_la_base + '))))';
        t+='">modifier</div>';
        t+='<hr /><h3>ajouter une table</h3>';
        t+='nom de la table <input id="vv_nom_de_la_nouvelle_table" type="text" value="tbl_zzzs" autocapitalize="off" />';
        t+='<div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(remplir_les_metas_de_la_table(id_de_la_zone(\'vv_nom_de_la_nouvelle_table\'),masculin_feminin(1))))';
        t+='">remplir les champs masculin</div>';
        t+='<div class="rev_bouton yy__4" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(remplir_les_metas_de_la_table(id_de_la_zone(\'vv_nom_de_la_nouvelle_table\'),masculin_feminin(0))))';
        t+='">remplir les champs féminin</div>';
        t+='<br />';
        for(let i in this.#liste_des_meta_table){
            t+=this.#liste_des_meta_table[i].nom_du_meta_table.replace( /_/ , ' ' );
            if(this.#liste_des_meta_table[i].zone_html2 === 'text'){
                t+=' : <input id="vv_' + this.#liste_des_meta_table[i].nom_du_meta_table + '" type="text" value="" autocapitalize="off" />';
            }else if(this.#liste_des_meta_table[i].zone_html2 === 'textarea'){
                t+=' : <textarea id="vv_' + this.#liste_des_meta_table[i].nom_du_meta_table + '" rows="5" cols="50" autocapitalize="off" /></textarea>';
            }else{
                debugger;
            }
            if(this.#liste_des_meta_table[i].hasOwnProperty( 'exemple' )){
                t+=this.#liste_des_meta_table[i].exemple;
            }
            t+='<br />';
        }
        t+='<div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(ajouter_une_table_provenant_de_modale(id_de_la_zone(\'vv_nom_de_la_nouvelle_table\'))))';
        t+='">ajouter la table</div>';
        t+='<hr />';
        /*
          =====================================================================================================
        */
        t+='<h3>comparer la base physique et la base virtuelle</h3>';
        var rev='';
        rev+='m1(';
        rev+=' n1(\'' + this.moi + '\'),';
        rev+=' f1(';
        rev+='  comparer_la_base_physique_et_la_base_virtuelle(';
        rev+='   id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + ')';
        rev+='  )';
        rev+=' )';
        rev+=')';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + rev + '">comparer la base physique et la base virtuelle</div>';
        /*
          =====================================================================================================
        */
        t+='<hr /><h3>réécrire la base physique à partir de ce schéma</h3>';
        t+='<p>il faut que la comparaison soit sans erreur et il faut sauvegarder la base virtuelle</p>';
        rev='';
        rev+='m1(n1(' + this.moi + '),f1(reecrire_la_base_a_partir_du_shema(id_bdd(' + this.#id_bdd_de_la_base_en_cours + '))))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + rev + '">réécrire</div>';
        /*
          =====================================================================================================
        */
        t+='<hr /><h3>créer la base physique à partir de ce schéma</h3>';
        rev='';
        rev+='m1(n1(' + this.moi + '),f1(creer_la_base_sur_disque_a_partir_du_shema(id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + '))))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + rev + '">créer</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
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
            return({"__xst" : __xer});
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
        var obj1=__gi1.__rev1.rev_tm( nouveau_rev );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                chaine_create_table=obj2.__xva;
            }else{
                return({"__xst" : __xer});
            }
        }else{
            return({"__xst" : __xer});
        }
        for( let i=0 ; i < tab_des_index_rev.length ; i++ ){
            var obj1=__gi1.__rev1.rev_tm( tab_des_index_rev[i] );
            if(obj1.__xst === __xsu){
                var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    tab_des_index_sql.push( obj2.__xva );
                }else{
                    return({"__xst" : __xer});
                }
            }else{
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xsu});
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
        var obj1=__gi1.__rev1.rev_tm( nouveau_rev );
        if(obj1.__xst === __xsu){
            var indice_courant=this.#recuperer_prochain_id_svg();
            this.#ajouter_table_et_index_a_arbre( obj1.__xva , 1 , indice_courant , id_bdd_de_la_base , nom_de_la_table );
            this.#modifier_les_references_des_liens( id_bdd_de_la_base );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    bouton_ordonner_les_champs_sur_svg_uniquement( mat , d ){
        let nom_de_la_table='';
        let id_svg_rectangle_de_la_table=0;
        let id_svg_conteneur_table=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var ids_ordre_modifie=[];
        /*
          var lst=document.getElementById( 'ordre_modifie' ).getElementsByTagName( 'div' );
          for( let i=0 ; i < lst.length ; i++ ){
          ids_ordre_modifie.push( lst[i].getAttribute( 'data-id_rectangle_champ' ) );
          }
        */
        var lst1=document.querySelectorAll( '[data-id_original_pour_tri="ordre_modifie"]' );
        for( var i=0 ; i < lst1.length ; i++ ){
            var sub_lst=lst1[i]['querySelectorAll']( '[data-attributs_originaux]' );
            for( var j=0 ; j < sub_lst.length ; j++ ){
                let attributs_originaux=JSON.parse( sub_lst[j].getAttribute( 'data-attributs_originaux' ) );
                ids_ordre_modifie.push( parseInt( attributs_originaux['data-id_rectangle_champ'] , 10 ) );
                /*
                  let contenu_original=sub_lst[j].getAttribute('data-contenu_original');
                  liste_ordre_modifie.push( contenu_original );
                  txt_ordre_modifie+=','+contenu_original;
                */
            }
        }
        var chaine_des_index='';
        var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'rect' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'){
                chaine_des_index+=this.#creer_definition_index_en_rev( lst[i] );
            }
        }
        let nouveau_rev=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , null , ids_ordre_modifie );
        this.#supprimer_recursivement_les_elements_de_l_arbre( this.#id_bdd_de_la_base_en_cours , id_svg_conteneur_table , 'tri_des_champs' );
        nouveau_rev+=chaine_des_index;
        var obj1=__gi1.__rev1.rev_tm( nouveau_rev );
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
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    bouton_ordonner_les_champs_en_base_et_sur_le_svg( mat , d ){
        let nom_de_la_table='';
        let id_svg_rectangle_de_la_table=0;
        let id_svg_conteneur_table=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
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
        /*
          var lst=document.getElementById( 'ordre_original' ).getElementsByTagName( 'div' );
          var i=0;
          for( i=0 ; i < lst.length ; i++ ){
          txt_ordre_original+=',' + lst[i].innerHTML;
          ids_ordre_original.push( lst[i].getAttribute( 'data-id_rectangle_champ' ) );
          }
        */
        var lst1=document.querySelectorAll( '[data-id_original_pour_tri="ordre_original"]' );
        for( var i=0 ; i < lst1.length ; i++ ){
            var sub_lst=lst1[i]['querySelectorAll']( '[data-attributs_originaux]' );
            for( var j=0 ; j < sub_lst.length ; j++ ){
                let attributs_originaux=JSON.parse( sub_lst[j].getAttribute( 'data-attributs_originaux' ) );
                let contenu_original=sub_lst[j].getAttribute( 'data-contenu_original' );
                txt_ordre_original+=',' + contenu_original;
                ids_ordre_original.push( parseInt( attributs_originaux['data-id_rectangle_champ'] , 10 ) );
            }
        }
        /*
          var lst=document.getElementById( 'ordre_modifie' ).getElementsByTagName( 'div' );
          for( i=0 ; i < lst.length ; i++ ){
          txt_ordre_modifie+=',' + lst[i].innerHTML;
          liste_ordre_modifie.push( lst[i].innerHTML );
          ids_ordre_modifie.push( lst[i].getAttribute( 'data-id_rectangle_champ' ) );
          }
        */
        var lst1=document.querySelectorAll( '[data-id_original_pour_tri="ordre_modifie"]' );
        for( var i=0 ; i < lst1.length ; i++ ){
            var sub_lst=lst1[i]['querySelectorAll']( '[data-attributs_originaux]' );
            for( var j=0 ; j < sub_lst.length ; j++ ){
                let attributs_originaux=JSON.parse( sub_lst[j].getAttribute( 'data-attributs_originaux' ) );
                let contenu_original=sub_lst[j].getAttribute( 'data-contenu_original' );
                liste_ordre_modifie.push( contenu_original );
                txt_ordre_modifie+=',' + contenu_original;
                ids_ordre_modifie.push( parseInt( attributs_originaux['data-id_rectangle_champ'] , 10 ) );
            }
        }
        if(txt_ordre_modifie === ''){
            return({"__xst" : __xer});
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
        var obj1=__gi1.__rev1.rev_tm( t0 );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                chaine_create_table=obj2.__xva + '\n';
            }else{
                return({"__xst" : __xer});
            }
        }else{
            return({"__xst" : __xer});
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
        var obj1=__gi1.__rev1.rev_tm( ttt );
        if(obj1.__xst === __xsu){
            var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                chaine_copier_donnees=obj2.__xva + '\n\n';
            }else{
                return({"__xst" : __xer});
            }
        }else{
            return({"__xst" : __xer});
        }
        let chaine_drop='\n\nDROP TABLE `' + nom_de_la_table + '`;\n';
        let chaine_renommer='\n\nALTER TABLE  ' + nom_table_temporaire + ' RENAME TO `' + nom_de_la_table + '`;\n';
        var chaine_des_index='';
        var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'rect' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && lst[i].getAttribute( 'type_element' ) === 'rectangle_d_index'){
                chaine_des_index+=this.#creer_definition_index_en_rev( lst[i] );
            }
        }
        let chaine_creer_index='';
        if(chaine_des_index !== ''){
            var obj1=__gi1.__rev1.rev_tm( chaine_des_index );
            if(obj1.__xst === __xsu){
                var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    chaine_creer_index=obj2.__xva + '\n';
                }else{
                    return({"__xst" : __xer});
                }
            }else{
                return({"__xst" : __xer});
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
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(executer_sql3(';
        cmd+=' contexte(ordonner_les_champs)';
        cmd+=' id_bdd_de_la_base(' + this.#id_bdd_de_la_base_en_cours + ')';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+=' ids_ordre_modifie(' + ids_ordre_modifie.join( ',' ) + ')';
        cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' chaine_des_index(' + chaine_des_index + ')';
        cmd+='))))';
        let obj={
             /*  */
            "__xac" : cmd ,
            "__xva" : {
                 /*  */
                "source_sql" : les_sql ,
                "operation_table" : 'reordonner_les_champs' ,
                 /* "maj" : maj */
                }
        };
        __gi1.envoyer_un_message_au_worker( obj );
    }
    /*
      =============================================================================================================
      retour serveur
    */
    executer_sql3( mat , d , le_message_du_serveur ){
        let contexte='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'contexte' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                contexte=mat[i + 1][1];
            }
        }
        switch (contexte){
            case 'ordonner_les_champs' : this.apres_trier_les_champs1( mat , d );
                break;
            case 'apres_renommer_une_table1' : debugger;
                this.apres_renommer_une_table1( mat , d );
                break;
            case 'renommer_en_bdd_un_champ' : this.apres_renommer_un_champs1( mat , d );
                break;
            case 'ajouter_en_bdd_le_champ' : break;
            case 'supprimer_en_bdd_le_champ' : /* this.apres_supprimer_un_champs1(mat,d); */
                break;
            default: debugger;
        }
        __gi1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    apres_trier_les_champs1( mat , d ){
        let id_bdd_de_la_base=0;
        let id_svg_conteneur_table=0;
        let ids_ordre_modifie=[];
        let id_svg_rectangle_de_la_table=0;
        let nom_de_la_table='';
        let chaine_des_index='';
        let l01=mat.length;
        for( let j=d + 1 ; j < l01 ; j=mat[j][12] ){
            if(mat[j][1] === 'id_bdd_de_la_base' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[j + 1][1] , 10 );
            }else if(mat[j][1] === 'id_svg_conteneur_table' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[j + 1][1] , 10 );
            }else if(mat[j][1] === 'id_svg_rectangle_de_la_table' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[j + 1][1] , 10 );
            }else if(mat[j][1] === 'nom_de_la_table' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                nom_de_la_table=mat[j + 1][1];
            }else if(mat[j][1] === 'chaine_des_index' && mat[j][2] === 'f'){
                if(mat[j][8] === 0){
                    /* il n'y a pas d'index */
                }else{
                    let obj3=__gi1.__rev1.matrice_vers_source_rev1( mat , j , true , j + 1 );
                    if(obj3.__xst === __xsu){
                        chaine_des_index=obj3.__xva;
                    }
                }
            }else if(mat[j][1] === 'ids_ordre_modifie' && mat[j][2] === 'f'){
                for( let k=j + 1 ; k < mat.length ; k=mat[k][12] ){
                    if(mat[k][2] === 'c'){
                        ids_ordre_modifie.push( mat[k][1] );
                    }
                }
            }
        }
        let nouveau_rev=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , null , ids_ordre_modifie );
        this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd_de_la_base , id_svg_conteneur_table , 'tri_des_champs' );
        nouveau_rev+=chaine_des_index;
        var obj1=__gi1.__rev1.rev_tm( nouveau_rev );
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
    */
    ajouter_l_index_dans_modale( mat , d ){
        let nom_de_la_table='';
        let id_svg_conteneur_table=0;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
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
            return({"__xst" : __xer});
        }
        var nom_de_l_index=document.getElementById( 'nom_de_l_index' ).value;
        if(nom_de_l_index.trim() === ''){
            return({"__xst" : __xer});
        }
        let trouve=false;
        var lst=document.getElementById( id_svg_conteneur_table ).getElementsByTagName( 'rect' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'type_element' ) && 'rectangle_d_index' === lst[i].getAttribute( 'type_element' )){
                if(lst[i].getAttribute( 'nom_de_l_index' ) === nom_de_l_index){
                    trouve=true;
                    break;
                }
            }
        }
        if(trouve === false){
            var message_de_l_index=document.getElementById( 'message_de_l_index' ).value;
            var unique=document.getElementById( 'unique' ).checked ? ( 1 ) : ( 0 );
            var max_id=-1;
            var lst=this.#svg_dessin.getElementsByTagName( '*' );
            for( i=0 ; i < lst.length ; i++ ){
                if(lst[i].id && __gi1.est_num( lst[i].id )){
                    j=parseInt( lst[i].id , 10 );
                    if(j > max_id){
                        max_id=j;
                    }
                }
            }
            max_id++;
            let donnees_rev_de_l_index='meta(#(),genre_meta(index_de_table),message(\'' + message_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'))';
            var a=this.#ajouter_index_a_table( this.#id_bdd_de_la_base_en_cours , max_id , nom_de_l_index , id_svg_conteneur_table , nom_de_la_table , donnees_rev_de_l_index , liste_des_champs_de_l_index , unique );
            __gi1.fermer_la_sous_fenetre();
            this.#dessiner_le_svg();
        }
    }
    /*
      
      =============================================================================================================
    */
    raz_liste_des_champs_de_l_index(){
        document.getElementById( 'liste_des_champs_de_l_index' ).value='';
    }
    /*
      =============================================================================================================
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
    basculer_est_libelle_lien( mat , d ){
        let id_rectangle_de_champ=0;
        let id_svg_conteneur_table=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_rectangle_de_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_rectangle_de_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let etat_futur_est_libelle_lien=document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ).indexOf( 'est_libelle_lien(1)' ) >= 0 ? ( 0 ) : ( 1 );
        let obj=this.#corrige_meta_champ( /*  */ document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ) , {"est_libelle_lien" : etat_futur_est_libelle_lien} , null );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ].proprietes.donnees_rev_du_champ=obj.texte;
        let scrlTop=document.getElementById( 'vv_sous_fenetre1' ).scrollTop;
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        /* id_svg_conteneur_table */
        var obj1=__gi1.__rev1.rev_tm( 'id_svg_conteneur_table(' + id_svg_conteneur_table + '),scrollTop(' + scrlTop + ')' );
        if(obj1.__xst === __xsu){
            this.modale_gerer_la_table( obj1.__xva , 0 );
        }
    }
    /*
      =============================================================================================================
    */
    masquer_ou_afficher_le_champ( mat , d ){
        let id_rectangle_de_champ=0;
        let id_svg_conteneur_table=0;
        let masquer_champ_dans_svg=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_rectangle_de_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_rectangle_de_champ=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let etat_futur_champ_masque=document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ).indexOf( 'masquer_champ_dans_svg(1)' ) >= 0 ? ( 0 ) : ( 1 );
        let obj=this.#corrige_meta_champ( /*  */ document.getElementById( id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' ) , {"masquer_champ_dans_svg" : etat_futur_champ_masque} , null );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ].proprietes.donnees_rev_du_champ=obj.texte;
        if(etat_futur_champ_masque === 1){
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ - 1].proprietes.style='display:none;';
        }else{
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_rectangle_de_champ - 1].proprietes.style='display:inline;';
        }
        let scrlTop=document.getElementById( 'vv_sous_fenetre1' ).scrollTop;
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        /* id_svg_conteneur_table */
        var obj1=__gi1.__rev1.rev_tm( 'id_svg_conteneur_table(' + id_svg_conteneur_table + '),scrollTop(' + scrlTop + ')' );
        if(obj1.__xst === __xsu){
            this.modale_gerer_la_table( obj1.__xva , 0 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
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
    */
    maj_typologie( mat , d ){
        console.log( mat );
        let nom_zone='';
        let nom_zone_du_champ='';
        let nom_zone_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'nom_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_zone_du_champ' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone_du_champ=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_zone_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone_de_la_table=mat[i + 1][1];
            }
        }
        if(!(nom_zone !== '' && nom_zone_du_champ !== '')){
            return({"__xst" : __xer ,"__xme" : 'nom_zone="' + nom_zone + '", nom_zone_du_champ="' + nom_zone_du_champ + '"'});
        }
        let nom_de_la_table=document.getElementById( nom_zone_de_la_table ).value;
        if(nom_de_la_table.substr( 0 , 4 ) === 'tbl_'){
            nom_de_la_table=nom_de_la_table.substr( 4 );
            if(nom_de_la_table.substr( nom_de_la_table.length - 1 , 1 ) === 's'){
                nom_de_la_table=nom_de_la_table.substr( 0 , nom_de_la_table.length - 1 );
            }else{
                nom_de_la_table='zzz';
            }
        }else{
            nom_de_la_table='zzz';
        }
        let nom_du_champ_actuel=document.getElementById( nom_zone_du_champ ).value;
        if(nom_du_champ_actuel === 'chi_'){
            let typologie=document.getElementById( nom_zone ).value;
            let a=document.getElementById( nom_zone_du_champ );
            switch (typologie){
                case 'chi' :
                    a.value='chi_id_' + nom_de_la_table;
                    a.focus();
                    a.selectionStart=4;
                    a.selectionEnd=6;
                    break;
                    
                case 'chp' :
                    a.value='chp_nom_' + nom_de_la_table;
                    a.focus();
                    a.selectionStart=4;
                    a.selectionEnd=7;
                    break;
                    
                case 'chx' :
                    a.value='chx_parent_' + nom_de_la_table;
                    a.focus();
                    a.selectionStart=4;
                    a.selectionEnd=10;
                    break;
                    
                default:
                    a.value=typologie + '_yyy_' + nom_de_la_table;
                    a.focus();
                    a.selectionStart=4;
                    a.selectionEnd=7;
                    break;
                    
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modale_gerer_la_table( mat , d ){
        /* element_g_conteneur_de_nom_de_table */
        let id_svg_conteneur_table=-1;
        let id_bdd_de_la_base_en_cours=0;
        let scrollTop=0;
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_conteneur_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_conteneur_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_bdd_de_la_base_en_cours' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base_en_cours=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'scrollTop' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                scrollTop=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_svg_conteneur_table < 0){
            debugger;
            return({"__xst" : __xer});
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
                                "id_rectangle_de_champ" : parseInt( lst[i].childNodes[j].parentNode.parentNode.id , 10 ) + 1 ,
                                "id_svg_champ_en_cours" : parseInt( lst[i].childNodes[j].parentNode.parentNode.id , 10 ) ,
                                "espece_du_champ" : lst[i].getAttribute( 'espece_du_champ' )
                            } );
                    }
                }
            }
        }
        if(id_svg_du_texte === 0){
            return({"__xst" : __xer});
        }
        var t='';
        t+='<h1>gestion de la table</h1>';
        /*  */
        var cmd='';
        cmd+='m1(n1(__interface1),f1(fermer_la_sous_fenetre()))';
        cmd+='m1(n1(ecran_generer_programmes),f1(page_generer_le_programme1(';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+=' chi_id_basedd(' + id_bdd_de_la_base_en_cours + ')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + cmd + '" >générer le php</div>';
        /*  */
        var cmd='';
        cmd+='m1(n1(__interface1),f1(fermer_la_sous_fenetre()))';
        cmd+='m1(n1(ecran_generer_souches),f1(page_generer_les_souches1(';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+=' chi_id_basedd(' + id_bdd_de_la_base_en_cours + '),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + cmd + '" >générer les requêtes souches</div>';
        /*  */
        t+='<hr />';
        t+='<h2>dans ce schema</h2>';
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
        cmd+='m1(n1(' + this.moi + '),f1(changer_le_nom_de_table_en_base_et_sur_le_svg(';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
        cmd+=' id_svg_du_texte(' + id_svg_du_texte + ')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__1" data-rev_click="' + cmd + '" >changer dans la base et sur le svg</div>';
        /*  */
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(changer_le_nom_de_table_sur_le_svg(';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
        cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ')';
        cmd+=' id_svg_du_texte(' + id_svg_du_texte + ')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__0" data-rev_click="' + cmd + '" >changer sur le svg</div>';
        t+='<hr />';
        t+='<h3>modifier ses propriétés</h3>';
        var rev='';
        rev+='m1(n1(' + this.moi + '),f1(remplir_les_metas_de_la_table(id_de_la_zone(\'ancien_nom\'),masculin_feminin(1))))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + rev + '">remplir les champs masculin</div>';
        rev+='m1(n1(' + this.moi + '),f1(remplir_les_metas_de_la_table(id_de_la_zone(\'ancien_nom\'),masculin_feminin(0))))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + rev + '">remplir les champs féminin</div>';
        t+='<br />';
        let nouveau_meta=this.#corrige_meta_table( document.getElementById( id_svg_rectangle_de_la_table ).getAttribute( 'meta_rev_de_la_table' ) , {} , nom_de_la_table );
        for(let i in this.#liste_des_meta_table){
            t+=this.#liste_des_meta_table[i].nom_du_meta_table.replace( /_/ , ' ' );
            if(this.#liste_des_meta_table[i].zone_html2 === 'text'){
                t+=' : <input id="vv_' + this.#liste_des_meta_table[i].nom_du_meta_table + '"';
                t+=' type="text" ';
                if(nouveau_meta.hasOwnProperty( this.#liste_des_meta_table[i].nom_du_meta_table )
                       && nouveau_meta[this.#liste_des_meta_table[i].nom_du_meta_table] !== null
                ){
                    t+=' value="' + nouveau_meta[this.#liste_des_meta_table[i].nom_du_meta_table].replace( /"/g , '&quot;' ) + '" ';
                }else{
                    t+=' value="" ';
                }
                t+=' autocapitalize="off" />';
            }else if(this.#liste_des_meta_table[i].zone_html2 === 'textarea'){
                t+=' : <textarea id="vv_' + this.#liste_des_meta_table[i].nom_du_meta_table + '" autocapitalize="off" rows="5" cols="50">';
                if(nouveau_meta.hasOwnProperty( this.#liste_des_meta_table[i].nom_du_meta_table )){
                    t+=nouveau_meta[this.#liste_des_meta_table[i].nom_du_meta_table].replace( /"/g , '&quot;' ) + '';
                }
                t+='</textarea>';
            }else{
                debugger;
            }
            if(this.#liste_des_meta_table[i].hasOwnProperty( 'exemple' )){
                t+=this.#liste_des_meta_table[i].exemple;
            }
            t+='<br />';
        }
        t+='<br />';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(modifier_la_table_de_modale(';
        cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + '),';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '\')';
        cmd+=')))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '" >modifier</div>';
        /*
          =====================================================================================================
        */
        t+='<hr />';
        t+='<h3>ajouter un champ</h3>';
        t+='<div class="yy__0" id="zone_message_ajouter_un_champ"></div>';
        /*
          =====================================================================================================
          =====================================================================================================
        */
        t+='<table><tr>';
        t+='<td>';
        /*
          =====================================================================================================
        */
        let l_option='';
        let texte__liste_des_genres='';
        let tableau_des_genres=[];
        for(let i in __gi1.__liste_des_genres){
            /*
              {
              "chi_id_genre":1,
              "chp_nom_genre":"indéfini",
              "chp_espece_genre":"TEXT",
              "che_longueur_genre":null,
              "che_est_primaire_genre":0,
              "che_est_incrément_genre":0,
              "che_est_obligatoire_genre":0,
              "che_a_init_genre":0,
              "che_init_est_mot_genre":0,
              "cht_valeur_init_genre":null
              }
            */
            l_option='';
            l_option+='<option';
            if(1 == __gi1.__liste_des_genres[i].chi_id_genre){
                l_option+=' selected="true"';
            }
            l_option+=' value="' + __gi1.__liste_des_genres[i].chi_id_genre + '"';
            l_option+=' data-genre="' + __gi1.fi2( JSON.stringify( __gi1.__liste_des_genres[i] ) ) + '"';
            l_option+='>';
            l_option+=__gi1.__liste_des_genres[i].chp_nom_genre;
            l_option+='</option>';
            tableau_des_genres.push( [__gi1.__liste_des_genres[i].che_ordre_genre,l_option] );
        }
        tableau_des_genres.sort( function( a , b ){
                /* return a[0].localeCompare(b[0]); */
                return(a[0] - b[0]);
            } );
        for( let i=0 ; i < tableau_des_genres.length ; i++ ){
            texte__liste_des_genres+=tableau_des_genres[i][1];
        }
        var cmd='';
        cmd+='m1(';
        cmd+=' n1(' + this.moi + '),';
        cmd+=' f1(';
        cmd+='  selectionner_un_genre(';
        cmd+='   zone_select(vv_genre1),';
        cmd+='   nom_de_la_table(\'' + nom_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '\')';
        cmd+='   zone_du_nom(vv_nom_du_champ)';
        cmd+='  )';
        cmd+=' )';
        cmd+=')';
        t+='genre: <select id="vv_genre1" data-rev_change="' + cmd + '">' + texte__liste_des_genres + '</select>';
        t+='<br /><br />';
        /*
          =====================================================================================================
        */
        /*
          =====================================================================================================
        */
        var cmd='';
        cmd+='m1(';
        cmd+=' n1(' + this.moi + '),';
        cmd+=' f1(';
        cmd+='  maj_typologie(';
        cmd+='   nom_zone(chp_prefixe_genre),';
        cmd+='   nom_zone_du_champ(nom_du_champ),';
        cmd+='   nom_zone_de_la_table(nouveau_nom),';
        cmd+='  )';
        cmd+=' )';
        cmd+=')';
        t+='typologie : ';
        t+='<select id="chp_prefixe_genre" data-rev_change="' + cmd + '">';
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
        t+='<input id="vv_nom_du_champ" type="text" value="" autocapitalize="off" />';
        t+='<br />espece  : <input id="chp_espece_genre" type="text" value="" autocapitalize="off" />';
        t+='<br />longueur  : <input id="che_longueur_genre" type="text" value="" autocapitalize="off" />';
        t+='<br />table mère pour chx  : <input id="table_mère" type="text" value="" autocapitalize="off" />';
        let sel='';
        if(this.#arbre[this.#id_bdd_de_la_base_en_cours].matrice !== undefined){
            let mat1=this.#arbre[this.#id_bdd_de_la_base_en_cours].matrice;
            let l01=mat1.length;
            for( let i=1 ; i < l01 ; i=mat1[i][12] ){
                if(mat1[i][1] === 'créer_table'){
                    for( let j=i + 1 ; j < l01 ; j=mat1[j][12] ){
                        if(mat1[j][1] === 'nom_de_la_table' && mat1[j][2] === 'f' && mat1[j][8] === 1 && mat1[j + 1][2] === 'c'){
                            sel+='<option data-chi_id_base="' + this.#id_bdd_de_la_base_en_cours + '" value="' + mat1[j + 1][1] + '">' + mat1[j + 1][1] + '</option>';
                        }
                    }
                }
            }
        }
        if(sel !== ''){
            /* créer le champ */
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(lister_les_champs_de_la_table(';
            cmd+='  zone_select(vv_table_parente),';
            cmd+='  zone_cible(table_mère),';
            cmd+='  zone_liste_des_champs(vv_liste_des_champs_pere),';
            cmd+='  zone_champ_parent(champ_père),';
            cmd+=')))';
            t+='<select id="vv_table_parente" data-rev_change="' + cmd + '"><option value=""></option>' + sel + '</select>';
        }
        t+='<br />champ père pour chx  : <input id="champ_père" type="text" value="" autocapitalize="off" /><span id="vv_liste_des_champs_pere"></span>';
        t+='<br />index primary_key <input id="che_est_primaire_genre" type="checkbox" /> ';
        t+='<br />non nulle <input id="che_est_obligatoire_genre" type="checkbox" /> ';
        t+='<br />auto increment <input id="che_est_incrément_genre" type="checkbox" /> ';
        t+='<br />a une valeur par défaut <input id="che_a_init_genre" type="checkbox" />';
        t+=' , type caractère <input id="che_init_est_mot_genre" type="checkbox" />';
        t+=' , valeur : <input id="cht_valeur_init_genre" type="text" value="" autocapitalize="off"  /> ';
        /*
          =====================================================================================================
        */
        t+='</td>';
        t+='</tr>';
        t+='</table>';
        /*
          =====================================================================================================
        */
        t+='<br />nom bref du champ : <input type="text" id="meta_ajouter__nom_bref_du_champ" value="A faire ..." autocapitalize="off" />';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(modifier_nom_xxx_du_champ(';
        cmd+=' nom_de_la_zone(meta_ajouter__nom_bref_du_champ),';
        cmd+=' mode(nouveau_champ)';
        cmd+=' zone_du_champ(vv_nom_du_champ)';
        cmd+=' meta_champ(bref)';
        cmd+=')))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '" >modifier</div>';
        /*  */
        t+='<br />abrege_du_champ : <input type="text" id="meta_ajouter__abrege_du_champ" value="A faire ..." autocapitalize="off" />';
        t+='<br />masquer_champ_dans_svg : <input id="masquer_champ_dans_svg" type="checkbox" />';
        t+='<br />est_en_session : <input id="est_en_session" type="checkbox" />';
        t+='<br />nom_en_session : <input id="nom_en_session" type="text" value="" />';
        t+='<br />refe_enfant_droite : <input id="refe_enfant_droite" type="checkbox" />';
        t+='<br />refe_parent_gauche : <input id="refe_parent_gauche" type="checkbox" />';
        t+='<br />est_libelle_lien : <input id="est_libelle_lien" type="checkbox" />';
        t+='<br />';
        var cmd='';
        cmd+='m1(';
        cmd+=' n1(' + this.moi + '),';
        cmd+=' f1(';
        cmd+='  ajouter_un_champ_de_modale(';
        cmd+='   id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
        cmd+='   nom_de_la_table(\'' + nom_de_la_table.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' ).replace( /"/g , '&quot;' ) + '\')';
        cmd+='  )';
        cmd+=' )';
        cmd+=')';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '" >ajouter ce champ à la table du schéma</div>';
        /*
          =====================================================================================================
          =====================================================================================================
        */
        t+='<hr />';
        t+='<h3>ajouter un index</h3>';
        t+='nom : <input id="nom_de_l_index" type="text" value="idx_" autocapitalize="off" />';
        t+='<br />';
        t+='liste des champs : <input id="liste_des_champs_de_l_index" type="text" value="" disabled style="width:90%;" autocapitalize="off"/>';
        t+='<br />';
        t+='<div class="rev_bouton yy__0" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(raz_liste_des_champs_de_l_index(';
        t+=' nom_du_champ(liste_des_champs_de_l_index)';
        t+=')))" >raz</div>';
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<div class="rev_bouton yy__3" data-rev_click="';
            t+='m1(n1(' + this.moi + '),f1(ajouter_un_champ_a_l_index_dans_modale(';
            t+='  nom_du_champ(\'' + liste_des_champs[i].nom_du_champ + '\'),';
            t+=')))" >' + liste_des_champs[i].nom_du_champ + '</div>';
        }
        t+='<br />message de l\'index : <input id="message_de_l_index" type="text" value="" autocapitalize="off" />';
        t+='<br />unique  : <input type="checkbox" id="unique" />';
        t+='<br />';
        t+='<div class="rev_bouton yy__3" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(ajouter_l_index_dans_modale(';
        t+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        t+=' id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
        t+=')))" >ajouter cet index</div>';
        /*  */
        t+='<hr />';
        t+='<hr />';
        t+='<h3>Supprimer la table de ce schema </h3>';
        t+='<div ';
        t+=' class="rev_bouton yy__0" ';
        t+=' data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(';
        t+=' supprimer_la_table_de_modale(';
        t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
        t+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        t+=' )';
        t+='))';
        t+='" >supprimer</div>';
        t+='<hr />';
        /*
          =====================================================================================================
        */
        t+='<h2>dans la bdd</h2>';
        t+='<hr />';
        t+='<h3>Créer la table dans la bdd</h3>';
        t+='<div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(';
        t+=' ajouter_la_table_en_base_de_modale(';
        t+='  nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        t+='  id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + '),';
        t+=' )';
        t+='))';
        t+='" >ajouter la table dans la base</div>';
        /*  */
        t+='<h3>supprimer la table dans la bdd</h3>';
        t+='<div class="rev_bouton yy__0" data-rev_click="';
        t+='m1(';
        t+=' n1(' + this.moi + '),';
        t+=' f1(';
        t+='  supprimer_la_table_en_base_de_modale(';
        t+='   nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        t+='   id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ' ),';
        t+='  )';
        t+=' )';
        t+=')';
        t+='" >supprimer la table dans la base</div>';
        /*
          
        */
        t+='<hr />';
        t+='<h3>ordonner les champs dans la bdd</h3>';
        t+='<table><tr>';
        t+='<th>original</th>';
        t+='<th>modifié<br /><span style="color:red;">glisser / déplacer avec la souris</span></th><th>action</th>';
        t+='</tr>';
        t+='<tr><td>';
        /* nom_du_champ : lst[i].childNodes[j].data , id_rectangle_de_champ : */
        /*#
          t+='<div id="ordre_original">';
          for( i=0 ; i < liste_des_champs.length ; i++ ){
              t+='<div ';
              t+=' style="padding:' + __gi1.css_dimensions.t_padding + 'px;border:' + __gi1.css_dimensions.t_border + 'px white solid;"';
              t+=' data-id_rectangle_champ="' + liste_des_champs[i].id_rectangle_de_champ + '"';
              t+='>' + liste_des_champs[i].nom_du_champ;
              t+='</div>';
          }
          t+='</div>';
        */
        t+='<ul id="ordre_original">';
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<li ';
            t+=' data-id_rectangle_champ="' + liste_des_champs[i].id_rectangle_de_champ + '"';
            t+='>' + liste_des_champs[i].nom_du_champ;
            t+='</li>';
        }
        t+='</ul>';
        t+='</td><td style="text-align:center;">';
        /*
          t+='<div id="ordre_modifie" style="cursor:n-resize;">';
          for( i=0 ; i < liste_des_champs.length ; i++ ){
          t+='<div ';
          t+=' style="padding:' + __gi1.css_dimensions.t_padding + 'px;border:' + __gi1.css_dimensions.t_border + 'px red outset;"';
          t+=' data-id_rectangle_champ="' + liste_des_champs[i].id_rectangle_de_champ + '"';
          t+='>' + liste_des_champs[i].nom_du_champ + '</div>';
          }
          t+='</div>';
        */
        t+='<ul id="ordre_modifie" >';
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<li ';
            t+=' data-id_rectangle_champ="' + liste_des_champs[i].id_rectangle_de_champ + '"';
            t+='>' + liste_des_champs[i].nom_du_champ + '</li>';
        }
        t+='</ul>';
        t+='</td><td>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(bouton_ordonner_les_champs_en_base_et_sur_le_svg(';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ' ),';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ' ),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '">ordonner dans la base et ici</div>';
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(bouton_ordonner_les_champs_sur_svg_uniquement(';
        cmd+=' nom_de_la_table(\'' + nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+=' id_svg_rectangle_de_la_table(' + id_svg_rectangle_de_la_table + ' ),';
        cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ' ),';
        cmd+=')))';
        t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '">ordonner ici uniquement</div>';
        t+='</td></tr></table>';
        /*
          
        */
        t+='<hr />';
        t+='<h3>opérations sur les champs </h3>';
        t+='<table><tr>';
        t+='<th>champs</th>';
        t+='<th>action</th>';
        t+='<th>aff/masq</th>';
        t+='<th title="est libelle lien">lib lien</th>';
        t+='</tr>';
        /* nom_du_champ : lst[i].childNodes[j].data , id_rectangle_de_champ : */
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<tr>';
            t+='<td>';
            t+=liste_des_champs[i].nom_du_champ;
            t+='</td>';
            /*
            */
            t+='<td>';
            var cmd='';
            cmd+='m1(n1(' + this.moi + '),f1(modale_modifier_le_champ(';
            cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')  ';
            cmd+=' id_svg_champ_en_cours(' + liste_des_champs[i].id_svg_champ_en_cours + ')  ';
            cmd+=' nom_du_champ(\'' + liste_des_champs[i].nom_du_champ + '\') ';
            cmd+=' nom_de_la_table(\'' + nom_de_la_table + '\') ';
            cmd+=')))';
            t+='<div class="rev_bouton yy__3" data-rev_click="' + cmd + '" >éditer</div>';
            t+='</td>';
            /*
            */
            let attr=document.getElementById( liste_des_champs[i].id_rectangle_de_champ ).getAttribute( 'donnees_rev_du_champ' );
            /*
              masquer_champ_dans_svg
            */
            t+='<td  style="text-align:center;">';
            var txtl1='masquer';
            var clsl1='yy__3';
            if(attr.indexOf( 'masquer_champ_dans_svg(1)' ) >= 0){
                txtl1='afficher';
                clsl1='yy__1';
            }
            t+='<div class="rev_bouton ' + clsl1 + '" data-rev_click="';
            t+='m1(n1(' + this.moi + '),f1(masquer_ou_afficher_le_champ(';
            t+=' id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
            t+=' id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
            t+=' id_bdd_de_la_base_en_cours(' + id_bdd_de_la_base_en_cours + '),';
            t+=')))';
            t+='" >' + txtl1 + '</div>';
            t+='</td>';
            /*
              est_libelle_lien
            */
            t+='<td style="text-align:center;" title="est libelle lien">';
            var txtl1='non';
            var clsl1='yy__3';
            if(attr.indexOf( 'est_libelle_lien(1)' ) >= 0){
                txtl1='oui';
                clsl1='yy__1';
            }
            t+='<div class="rev_bouton ' + clsl1 + '" data-rev_click="';
            t+='m1(n1(' + this.moi + '),f1(basculer_est_libelle_lien(';
            t+='  id_rectangle_de_champ(' + liste_des_champs[i].id_rectangle_de_champ + '),';
            t+='  id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
            t+='  id_bdd_de_la_base_en_cours(' + id_bdd_de_la_base_en_cours + '),';
            t+=')))" >' + txtl1 + '</div>';
            t+='</td>';
            t+='</tr>';
        }
        t+='</table>';
        /*
          
        */
        t+='<hr />';
        t+='<h3>Opérations sur des valeurs initiales</h3>';
        t+='<table id="opérations_sur_valeurs_initiales"><tr>';
        t+='<th>champs</th>';
        t+='<th>insérer</th>';
        t+='</tr>';
        for( i=0 ; i < liste_des_champs.length ; i++ ){
            t+='<tr>';
            t+='<td>';
            t+=liste_des_champs[i].nom_du_champ;
            t+='</td>';
            t+='<td>';
            t+='<input type="text" data-nom_de_champ="' + liste_des_champs[i].nom_du_champ + '" data-espece_du_champ="' + liste_des_champs[i].espece_du_champ + '" value="" />';
            t+='</td>';
            t+='</tr>';
        }
        t+='<tr>';
        t+='<td>';
        t+='</td>';
        t+='<td>';
        t+='<div><div class="rev_bouton yy__2" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(opérations_sur_valeurs_initiales( ';
        t+=' id_svg_conteneur_table(' + id_svg_conteneur_table + '),';
        t+=' nom_de_la_table(\'' + nom_de_la_table + '\')';
        t+=' operation(insérer)';
        t+=')))" >insérer</div></div>';
        t+='</td>';
        t+='</table>';
        t+='<hr />';
        t+='<hr />';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
        let options1={
            "hauteur_max_en_vh" : 80 ,
             /* entre 20 et 80 */
            "largeur_max" : '400px' ,
             /* 'calc(100% - 50px)', */
            "afficher_le_bouton_supprimer" : false ,
            "fonction_appelee_apres_action" : this.action_sur_tri ,
            "arborescent" : false ,
            "class_du_bouton_deplacer" : 'rev_bouton'
        };
        new tri_arbre1( 'ordre_modifie' , options1 );
        let options2={
            "triable" : false ,
            "hauteur_max_en_vh" : 80 ,
             /* entre 20 et 80 */
            "largeur_max" : '400px' ,
             /* 'calc(100% - 50px)', */
            "afficher_le_bouton_supprimer" : false ,
            "fonction_appelee_apres_action" : this.action_sur_tri ,
            "arborescent" : false ,
            "class_du_bouton_deplacer" : 'rev_bouton'
        };
        new tri_arbre1( 'ordre_original' , options2 );
        if(scrollTop > 0){
            setTimeout( () => {
                    document.getElementById( 'vv_sous_fenetre1' ).scrollTop=scrollTop;} , 5 );
        }
        return({"__xst" : __xsu});
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
    #supprimer_recursivement_les_elements_de_l_arbre( id_bdd , id_parent , contexte ){
        var i={};
        for(i in this.#arbre[id_bdd].arbre_svg){
            if(this.#arbre[id_bdd].arbre_svg[i] !== null && this.#arbre[id_bdd].arbre_svg[i].id_parent === id_parent){
                this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd , this.#arbre[id_bdd].arbre_svg[i].id , contexte );
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
            for(let j in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
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
            for(let j in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
                if(this.#svg_tableaux_des_references_amont_aval[id_bdd][j]
                       && id_svg_conteneur_table === this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_parent_table
                       && id_svg_champ_en_cours === this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_parent_champ
                ){
                    if(contexte === 'tri_des_champs'){
                    }else{
                        this.#supprimer_recursivement_les_elements_de_l_arbre( id_bdd , this.#svg_tableaux_des_references_amont_aval[id_bdd][j].id_svg_enfant_champ , contexte );
                    }
                }
            }
        }
        this.#arbre[id_bdd].arbre_svg[id_parent]=null;
    }
    /*
      =============================================================================================================
    */
    modifier_la_base_de_modale( mat , d ){
        let id_svg_rectangle_de_la_base=-1;
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
            this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_la_base].proprietes.donnees_rev_meta_de_la_base=nouveau_meta.texte;
            __gi1.fermer_la_sous_fenetre();
            this.#dessiner_le_svg();
        }else{
            return({"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()});
            debugger;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    modifier_la_table_de_modale( mat , d ){
        /* id_svg_rectangle_de_la_table , nom_de_la_table ]{ */
        let id_svg_rectangle_de_la_table='';
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        let obj={};
        for(let i in this.#liste_des_meta_table){
            obj[this.#liste_des_meta_table[i].nom_du_meta_table]=document.getElementById( 'vv_' + this.#liste_des_meta_table[i].nom_du_meta_table ).value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' );
        }
        let nouveau_meta=this.#corrige_meta_table( document.getElementById( id_svg_rectangle_de_la_table ).getAttribute( 'meta_rev_de_la_table' ) , obj , nom_de_la_table );
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[id_svg_rectangle_de_la_table].proprietes.meta_rev_de_la_table=nouveau_meta.texte;
        __gi1.fermer_la_sous_fenetre();
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
        let id_svg_conteneur_table=element_svg_rectangle_de_table.getAttribute( 'id_svg_conteneur_table' );
        let decallage_x=parseInt( document.getElementById( id_svg_conteneur_table ).getAttribute( 'decallage_x' ) , 0 );
        let decallage_y=parseInt( document.getElementById( id_svg_conteneur_table ).getAttribute( 'decallage_y' ) , 0 );
        let modification_meta={"decallage_x" : decallage_x ,"decallage_y" : decallage_y};
        let nouveau_meta=this.#corrige_meta_table( element_svg_rectangle_de_table.getAttribute( 'meta_rev_de_la_table' ) , modification_meta , nom_de_la_table );
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
        let nom_du_champ=elem.getAttribute( 'nom_du_champ' );
        tt+='champ(';
        tt+='    nom_du_champ(\'' + elem.getAttribute( 'nom_du_champ' ) + '\'),';
        tt+='    espece_du_champ(' + elem.getAttribute( 'espece_du_champ' ).toUpperCase() + '),';
        if(elem.getAttribute( 'longueur_du_champ' ) !== ''){
            tt+='    longueur_du_champ(' + elem.getAttribute( 'longueur_du_champ' ) + '),';
        }
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
    */
    operation_table_dans_base( mat , d ){
        __gi1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_la_table_en_base_de_modale( mat , d ){
        let id_svg_rectangle_de_la_table=0;
        let nom_de_la_table='';
        for( let i=d ; i < mat.length ; i++ ){
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
            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(operation_table_dans_base(id_bdd_de_la_base(' + id_bdd_de_la_base + ')))))' ,
            "__xva" : {
                 /*  */
                "source_sql" : source_sql ,
                "operation_table" : 'supprimer_une_table'
            }
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ajouter_la_table_en_base_de_modale( mat , d ){
        let id_svg_rectangle_de_la_table=0;
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
            if(mat[i][1] === 'id_svg_rectangle_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_svg_rectangle_de_la_table=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'nom_de_la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_de_la_table=mat[i + 1][1];
            }
        }
        var t=this.#creer_definition_table_en_rev( document.getElementById( id_svg_rectangle_de_la_table ) , null , null );
        var obj1=__gi1.__rev1.rev_tm( t );
        if(obj1.__xst === __xsu){
            let obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                let id_bdd_de_la_base=parseInt( document.getElementById( id_svg_rectangle_de_la_table ).parentNode.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                if(id_bdd_de_la_base > 0){
                    let obj={
                         /*  */
                        "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(operation_table_dans_base(id_bdd_de_la_base(' + id_bdd_de_la_base + ')))))' ,
                        "__xva" : {
                             /*  */
                            "operation_table" : 'creer_une_table' ,
                            "source_sql" : obj2.__xva
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                }else{
                    debugger;
                }
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    supprimer_la_table_de_modale( mat , d ){
        if(!confirm( 'certain ?' )){
            return({"__xst" : __xsu});
        }
        let id_svg_conteneur_table='';
        let nom_de_la_table='';
        for( let i=d + 1 ; i < mat.length ; i++ ){
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
                var obj=__gi1.__rev1.rev_tm( this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[i].proprietes.donnees_rev_du_champ );
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
                    return({"__xst" : __xer});
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
        __gi1.fermer_la_sous_fenetre();
        this.#dessiner_le_svg();
        /* this.#svg_ajuster_la_largeur_de_la_base( this.#id_svg_de_la_base_en_cours ); */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #souris_ou_doigt_bouge( e ){
        this.#souris_init_objet.x_final=e[this.#propriete_pour_deplacement_x];
        this.#souris_init_objet.y_final=e[this.#propriete_pour_deplacement_y];
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
                        var ref_elem=document.getElementById( elem.id_du_path + 1 );
                        if(elem.id_svg_enfant_table === this.#souris_init_objet.id_svg_conteneur_table
                               && elem.id_svg_parent_table === this.#souris_init_objet.id_svg_conteneur_table
                        ){
                            /*
                              lien sur moi même
                            */
                            var nouveau_chemin='M ' + (elem.p1[0] + this.#svg_souris_delta_x) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                            if(elem.refe_enfant_droite === 1){
                                nouveau_chemin+=' C ' + (elem.p1[0] + this.#svg_souris_delta_x + 30) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                            }else{
                                nouveau_chemin+=' C ' + ((elem.p1[0] + this.#svg_souris_delta_x) - 30) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                            }
                            if(elem.refe_parent_gauche === 1){
                                nouveau_chemin+=' ' + ((elem.p2[0] + this.#svg_souris_delta_x) - 30) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                            }else{
                                nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x + 30) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                            }
                            nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                            ref_elem.setAttribute( 'd' , nouveau_chemin );
                        }else{
                            if(elem.id_svg_enfant_table === this.#souris_init_objet.id_svg_conteneur_table){
                                var nouveau_chemin='M ' + (elem.p1[0] + this.#svg_souris_delta_x) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                                if(elem.refe_enfant_droite === 1){
                                    nouveau_chemin+=' C ' + (elem.p1[0] + this.#svg_souris_delta_x + 30) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                                }else{
                                    nouveau_chemin+=' C ' + ((elem.p1[0] + this.#svg_souris_delta_x) - 30) + ' ' + (elem.p1[1] + this.#svg_souris_delta_y);
                                }
                                if(elem.refe_parent_gauche === 1){
                                    nouveau_chemin+=' ' + (elem.p2[0] - 30) + ' ' + elem.p2[1];
                                }else{
                                    nouveau_chemin+=' ' + (elem.p2[0] + 30) + ' ' + elem.p2[1];
                                }
                                nouveau_chemin+=' ' + elem.p2[0] + ' ' + elem.p2[1];
                                ref_elem.setAttribute( 'd' , nouveau_chemin );
                            }else if(elem.id_svg_parent_table === this.#souris_init_objet.id_svg_conteneur_table){
                                var nouveau_chemin='M ' + elem.p1[0] + ' ' + elem.p1[1];
                                if(elem.refe_enfant_droite === 1){
                                    nouveau_chemin+=' C ' + (elem.p1[0] + 30) + ' ' + elem.p1[1];
                                }else{
                                    nouveau_chemin+=' C ' + (elem.p1[0] - 30) + ' ' + elem.p1[1];
                                }
                                if(elem.refe_parent_gauche === 1){
                                    nouveau_chemin+=' ' + ((elem.p2[0] + this.#svg_souris_delta_x) - 30) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                                }else{
                                    nouveau_chemin+=' ' + (elem.p2[0] + this.#svg_souris_delta_x + 30) + ' ' + (elem.p2[1] + this.#svg_souris_delta_y);
                                }
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
            var obj1=__gi1.__rev1.rev_tm( texte_rev );
            var nouveau_rev='';
            if(obj1.__xst === __xsu){
                var i=0;
                for( i=0 ; i < obj1.__xva.length ; i++ ){
                    if(obj1.__xva[i][3] === 1 && obj1.__xva[i][1] === 'transform_base_sur_svg'){
                        var tab=__gi1.__rev1.supprimer_un_element_de_la_matrice( obj1.__xva , i - 1 , 0 );
                        var obj2=__gi1.__rev1.matrice_vers_source_rev1( tab , 0 , false , 1 );
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
            var obj1=__gi1.__rev1.rev_tm( texte_rev );
            var nouveau_rev='';
            if(obj1.__xst === __xsu){
                var i=0;
                for( i=0 ; i < obj1.__xva.length ; i++ ){
                    if(obj1.__xva[i][3] === 1 && obj1.__xva[i][1] === 'transform_table_sur_svg'){
                        var tab=__gi1.__rev1.supprimer_un_element_de_la_matrice( obj1.__xva , i - 1 , 0 );
                        var obj2=__gi1.__rev1.matrice_vers_source_rev1( tab , 0 , false , 1 );
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
      many thanks to https://bobbyhadz.com/blog/javascript-remove-event-listener-not-working
      =============================================================================================================
    */
    #souris_haut_listener=this.#souris_haut.bind( this );
    #souris_bouge_listener=this.#souris_bouge.bind( this );
    #souris_bas_listener=this.#souris_bas.bind( this );
    #doigt_haut_listener=this.#doigt_haut.bind( this );
    #doigt_bouge_listener=this.#doigt_bouge.bind( this );
    #doigt_bas_listener=this.#doigt_bas.bind( this );
    /*
      =============================================================================================================
    */
    #doigt_bouge( e ){
        /* console.log( '#doigt_bouge' , e ); */
        e.stopPropagation();
        this.#souris_ou_doigt_bouge( e.touches[0] );
    }
    /*
      =============================================================================================================
    */
    #souris_bouge( e ){
        /* console.log( '#souris_bouge' , e ); */
        e.stopPropagation();
        this.#souris_ou_doigt_bouge( e );
    }
    /*
      =============================================================================================================
    */
    #doigt_haut( e ){
        /* console.log( '#doigt_haut' , e ); */
        e.stopPropagation();
        window.removeEventListener( 'touchend' , this.#doigt_haut_listener , false );
        window.removeEventListener( 'touchmove' , this.#doigt_bouge_listener , false );
        document.body.style.position='';
        document.body.style.marginLeft='';
        document.getElementById( 'vv_contenu_principal' ).style.width='';
        this.#souris_ou_doigt_haut( e.changedTouches[0] );
    }
    /*
      =============================================================================================================
    */
    #doigt_bas( e ){
        /* console.log( '#doigt_bas' , e ); */
        e.stopPropagation();
        window.addEventListener( 'touchend' , this.#doigt_haut_listener , false );
        window.addEventListener( 'touchmove' , this.#doigt_bouge_listener , false );
        let fait_iech_zipad=document.body.getBoundingClientRect();
        if(window.screen.width < fait_iech_zipad.width){
            document.body.style.position='fixed';
        }else{
            document.body.style.position='fixed';
            document.body.style.marginLeft=fait_iech_zipad.left + 'px';
            document.getElementById( 'vv_contenu_principal' ).style.width=fait_iech_zipad.width + 'px';
        }
        document.body.style.position='fixed';
        this.#souris_ou_doigt_bas( e.touches[0] );
    }
    /*
      =============================================================================================================
    */
    #souris_haut( e ){
        /* console.log( '#souris_haut' , e ); */
        e.stopPropagation();
        window.removeEventListener( 'mouseup' , this.#souris_haut_listener , false );
        window.removeEventListener( 'mousemove' , this.#souris_bouge_listener , false );
        e.stopPropagation();
        this.#souris_ou_doigt_haut( e );
    }
    /*
      =============================================================================================================
    */
    #souris_bas( e ){
        /* console.log( '#souris_bas' , e ); */
        e.stopPropagation();
        window.addEventListener( 'mouseup' , this.#souris_haut_listener , false );
        window.addEventListener( 'mousemove' , this.#souris_bouge_listener , false );
        this.#souris_ou_doigt_bas( e );
    }
    /*
      =============================================================================================================
    */
    #souris_ou_doigt_haut( e ){
        /* console.log(e.target); */
        if(e.target.getAttribute( 'type_element' ) === null){
            return;
        }
        var ecart_de_temps=new Date( Date.now() ).getTime() - this.#debut_de_click;
        if(this.#souris_element_a_deplacer === 'base'){
            if(ecart_de_temps > 200){
                if(ecart_de_temps < 1500
                       && this.#souris_init_objet.x_final === this.#souris_init_objet.x
                       && this.#souris_init_objet.y_final === this.#souris_init_objet.y
                ){
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
                        var ref_elem=document.getElementById( elem.id_du_path + 1 );
                        if(elem.id_svg_enfant_table === this.#souris_init_objet.id_svg_conteneur_table){
                            var tab=ref_elem.getAttribute( 'd' ).split( ' ' );
                            this.#svg_tableaux_des_references_amont_aval[this.#souris_init_objet.id_bdd_de_la_base_en_cours][i].p1=[parseInt( tab[1] , 10 ),parseInt( tab[2] , 10 )];
                        }
                        if(elem.id_svg_parent_table === this.#souris_init_objet.id_svg_conteneur_table){
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
        if('edition_de_table' === e.target.getAttribute( 'type_element' )){
            var cmd='';
            /* cmd+='m1[n1[' + this.moi + '],f1[modale_gerer_la_table['; */
            cmd+=' id_svg_conteneur_table(' + e.target.getAttribute( 'id_svg_conteneur_table' ) + '),';
            cmd+=' id_bdd_de_la_base_en_cours(' + e.target.getAttribute( 'id_bdd_de_la_base_en_cours' ) + ')';
            /* cmd+=']]]'; */
            let obj1=__gi1.__rev1.rev_tm( cmd );
            this.modale_gerer_la_table( obj1.__xva , 0 );
        }else if('selection_du_champ' === e.target.getAttribute( 'type_element' )){
            var cmd='';
            /* cmd+='m1[n1[' + this.moi + '],f1[modale_modifier_le_champ['; */
            cmd+=' id_svg_conteneur_table(' + e.target.getAttribute( 'id_svg_conteneur_table' ) + ')';
            cmd+=' id_svg_champ_en_cours(' + e.target.getAttribute( 'id_svg_champ_en_cours' ) + ')';
            cmd+=' nom_du_champ(\'' + e.target.getAttribute( 'nom_du_champ' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
            cmd+=' nom_de_la_table(\'' + e.target.getAttribute( 'nom_de_la_table' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\') ';
            /* cmd+=']]]'; */
            let obj1=__gi1.__rev1.rev_tm( cmd );
            this.modale_modifier_le_champ( obj1.__xva , 0 );
        }else if('selection_d_index' === e.target.getAttribute( 'type_element' )){
            debugger;
            var cmd='';
            /* cmd+='m1[n1[' + this.moi + '],f1[modale_modifier_l_index['; */
            cmd+=' id_svg_conteneur_table(' + e.target.getAttribute( 'id_svg_conteneur_table' ) + ')';
            cmd+=' nom_de_l_index(\'' + e.target.getAttribute( 'nom_de_l_index' ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
            cmd+=' id_svg_conteneur_d_index(' + e.target.getAttribute( 'id_svg_conteneur_d_index' ) + ')';
            /* cmd+=']]]"'; */
            let obj1=__gi1.__rev1.rev_tm( cmd );
            this.modale_modifier_l_index( obj1.__xva , 0 );
        }else if('edition_de_la_base' === e.target.getAttribute( 'type_element' )){
            console.log( 'edition_de_la_base' , e );
            var cmd='';
            cmd+='   id_bdd_de_la_base(' + e.target.getAttribute( 'id_bdd_de_la_base' ) + ')\n';
            let obj1=__gi1.__rev1.rev_tm( cmd );
            this.modale_modifier_la_base( obj1.__xva , 0 );
        }else if('sauvegarde_de_la_base' === e.target.getAttribute( 'type_element' )){
            /*
              pour une raison qui m'échappe complètement, sur ipad ou bien en émulation mobile sur chrome,
              quand on appuie sur sauvegarde_de_la_base, deux évènenement sont déclenchés : 
              #doigt_haut puis par un #souris_haut
              ce qui fait qu'on fait deux sauvegardes !!!
              C'est le seul endroit où j'ai trouvé ce cas !
              pour contourner ce problème, j'utilise le ts : this.#date_derniere_sauvegarde
              
            */
            if(performance.now() < this.#date_derniere_sauvegarde + 1000){
                return;
            }
            console.log( 'sauvegarde_de_la_base' , e );
            var cmd='';
            cmd+='   id_bdd_de_la_base(' + e.target.getAttribute( 'id_bdd_de_la_base' ) + ')\n';
            let obj1=__gi1.__rev1.rev_tm( cmd );
            this.sauvegarder_la_base( obj1.__xva , 0 );
            this.#date_derniere_sauvegarde=performance.now();
            /* contenu+='<tspan type_element="sauvegarde_de_la_base" id_bdd_de_la_base="' + id_bdd_de_la_base + '"  style="fill:green;cursor:pointer;">sauvegarder</tspan>'; */
        }else if('deplacement_de_table' === e.target.getAttribute( 'type_element' )){
        }else if('rectangle_de_base' === e.target.getAttribute( 'type_element' )){
        }else{
            console.log( e.target.getAttribute( 'type_element' ) );
        }
    }
    /*
      =============================================================================================================
    */
    #souris_ou_doigt_bas( e ){
        /* on remonte la chaine pour voir si on est dans le svg */
        var a=e.target;
        while(a.tagName.toLowerCase() !== 'html'){
            if(a.tagName.toLowerCase() === 'g'
                   && a.getAttribute( 'type_element' )
                   && a.getAttribute( 'type_element' ) === "conteneur_de_base"
            ){
                this.#id_svg_de_la_base_en_cours=parseInt( a.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 );
                this.#id_bdd_de_la_base_en_cours=parseInt( a.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 );
                if(isNaN( this.#id_svg_de_la_base_en_cours )){
                    debugger;
                }
                break;
            }
            a=a.parentNode;
        }
        if(e.target.getAttribute( 'type_element' ) === null){
            return;
        }
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
                }else if(tar.getAttribute( 'type_element' ) === 'rectangle_de_nom_de_table'){
                }else if(tar.getAttribute( 'type_element' ) === 'deplacement_de_table'){
                    var par=document.getElementById( tar.getAttribute( 'id_svg_conteneur_table' ) );
                    var valeur_translate=par.getAttribute( 'transform' ).replace( /translate\(/g , '' ).replace( /\)/g , '' ).split( ',' );
                    this.#souris_init_objet.id_svg_conteneur_table=parseInt( tar.getAttribute( 'id_svg_conteneur_table' ) , 10 );
                    this.#souris_init_objet.elem_bouge=par;
                    this.#souris_init_objet.param_bouge={"x" : parseFloat( valeur_translate[0] ) ,"y" : parseFloat( valeur_translate[1] )};
                    this.#souris_init_objet.id_bdd_de_la_base_en_cours=tar.getAttribute( 'id_bdd_de_la_base_en_cours' );
                    this.#souris_init_objet.id_svg_de_la_base_en_cours=tar.getAttribute( 'id_svg_de_la_base_en_cours' );
                    this.#souris_element_a_deplacer='table';
                    this.#div_svg.style.userSelect='none';
                    /* this.#id_svg_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_svg_de_la_base_en_cours' ) , 10 ); */
                    /* this.#id_bdd_de_la_base_en_cours=parseInt( tar.getAttribute( 'id_bdd_de_la_base_en_cours' ) , 10 ); */
                    /* if(isNaN( this.#id_svg_de_la_base_en_cours )){ */
                    /* debugger; */
                    /* } */
                }
                return;
            }else{
                /*
                  hugues
                  
                  "type_element" : 'deplacement_de_table' ,
                  "data-utilite" : 'deplacer_la_table',
                  
                */
                if(tar.tagName.toLowerCase() === 'rect'
                       && tar.getAttribute( 'id_svg_conteneur_table' )
                       && tar.getAttribute( 'data-utilite' )
                ){
                    debugger;
                    /* 2025-07-29 afr on ne devrait plus passer par là */
                    var par=document.getElementById( tar.getAttribute( 'id_svg_conteneur_table' ) );
                    var valeur_translate=par.getAttribute( 'transform' ).replace( /translate\(/g , '' ).replace( /\)/g , '' ).split( ',' );
                    this.#souris_init_objet.id_svg_conteneur_table=parseInt( tar.getAttribute( 'id_svg_conteneur_table' ) , 10 );
                    this.#souris_init_objet.elem_bouge=par;
                    this.#souris_init_objet.param_bouge={"x" : parseFloat( valeur_translate[0] ) ,"y" : parseFloat( valeur_translate[1] )};
                    this.#souris_init_objet.id_bdd_de_la_base_en_cours=tar.getAttribute( 'id_bdd_de_la_base_en_cours' );
                    this.#souris_init_objet.id_svg_de_la_base_en_cours=tar.getAttribute( 'id_svg_de_la_base_en_cours' );
                    this.#souris_element_a_deplacer='table';
                    this.#div_svg.style.userSelect='none';
                    return;
                }else{
                    /*  */
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
    */
    #svg_ajuster_la_position_des_liens( id_bdd ){
        var lst1=document.getElementById( 'refZnDessin' ).querySelectorAll( '[type_element="rectangle_de_base"]' );
        for( let i=0 ; i < lst1.length ; i++ ){
            if(lst1[i].getAttribute( 'id_bdd_de_la_base_en_cours' ) == id_bdd){
                var liste_des_paths=this.#svg_dessin.getElementById( lst1[i].getAttribute( 'id_svg_de_la_base_en_cours' ) ).getElementsByTagName( 'path' );
                for( let j=0 ; j < liste_des_paths.length ; j++ ){
                    if(liste_des_paths[j].getAttribute( 'type_element' )
                           && liste_des_paths[j].getAttribute( 'type_element' ) === 'reference_croisée'
                    ){
                        /*
                          
                          <path id="36" d="M 50 50 C 20 50 30 0 0 0" 
                          type_element="reference_croisée" id_svg_de_la_base_en_cours="0" 
                          id_svg_parent_table="4" id_svg_parent_champ="9" id_svg_enfant_table="21" 
                          id_svg_enfant_champ="32" nom_parent_table="tbl_zzzs" 
                          nom_parent_champ="chi_id_zzz" style="stroke:brown;stroke-width:3;fill:transparent;stroke-opacity:0.6;stroke-linejoin:round;stroke-linecap:round;"></path>
                        */
                        let id_svg_parent_table=parseInt( liste_des_paths[j].getAttribute( 'id_svg_parent_table' ) , 10 );
                        let id_svg_parent_champ=parseInt( liste_des_paths[j].getAttribute( 'id_svg_parent_champ' ) , 10 );
                        let id_svg_enfant_table=parseInt( liste_des_paths[j].getAttribute( 'id_svg_enfant_table' ) , 10 );
                        let id_svg_enfant_champ=parseInt( liste_des_paths[j].getAttribute( 'id_svg_enfant_champ' ) , 10 );
                        var parent_x=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_parent_table ).getAttribute( 'decallage_x' ) );
                        let refe_parent_gauche=false;
                        if(document.getElementById( 'refZnDessin' ).getElementById( id_svg_enfant_champ + 1 ).getAttribute( 'donnees_rev_du_champ' ).indexOf( 'refe_parent_gauche(1)' ) >= 0
                        ){
                            refe_parent_gauche=true;
                        }else{
                            var largeur_parent=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_parent_table + 1 ).getAttribute( 'width' ) );
                            parent_x+=largeur_parent;
                        }
                        var parent_y=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_parent_table ).getAttribute( 'decallage_y' ) );
                        parent_y+=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_parent_champ ).getAttribute( 'decallage_y' ) );
                        var enfant_x=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_enfant_table ).getAttribute( 'decallage_x' ) );
                        enfant_x+=this.#taille_bordure;
                        var enfant_y=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_enfant_table ).getAttribute( 'decallage_y' ) );
                        enfant_y+=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_enfant_champ ).getAttribute( 'decallage_y' ) );
                        let refe_enfant_droite=false;
                        if(document.getElementById( 'refZnDessin' ).getElementById( id_svg_enfant_champ + 1 ).getAttribute( 'donnees_rev_du_champ' ).indexOf( 'refe_enfant_droite(1)' ) >= 0
                        ){
                            refe_enfant_droite=true;
                            var largeur_enfant=parseFloat( document.getElementById( 'refZnDessin' ).getElementById( id_svg_enfant_table + 1 ).getAttribute( 'width' ) );
                            enfant_x+=largeur_enfant - this.#taille_bordure;
                        }
                        var ancien_chemin=liste_des_paths[j].getAttribute( 'd' );
                        var tab_chemin=[];
                        /* le chemin part de l'enfant */
                        /*  */
                        tab_chemin[0]='M';
                        tab_chemin[1]=enfant_x;
                        tab_chemin[2]=enfant_y + this.#hauteur_de_boite_affichage / 2;
                        tab_chemin[3]='C';
                        if(refe_enfant_droite === true){
                            tab_chemin[4]=enfant_x + 30;
                        }else{
                            tab_chemin[4]=enfant_x - 30;
                        }
                        tab_chemin[5]=enfant_y + this.#hauteur_de_boite_affichage / 2;
                        if(refe_parent_gauche === true){
                            tab_chemin[6]=parent_x - 30;
                        }else{
                            tab_chemin[6]=parent_x + 30;
                        }
                        tab_chemin[7]=parent_y + this.#hauteur_de_boite_affichage / 2;
                        tab_chemin[8]=parent_x;
                        tab_chemin[9]=parent_y + this.#hauteur_de_boite_affichage / 2;
                        var nouveau_chemin=tab_chemin.join( ' ' );
                        liste_des_paths[j].setAttribute( 'd' , nouveau_chemin );
                        for(let k in this.#svg_tableaux_des_references_amont_aval[id_bdd]){
                            if(this.#svg_tableaux_des_references_amont_aval[id_bdd][k]
                                   && this.#svg_tableaux_des_references_amont_aval[id_bdd][k].id_svg_enfant_table === id_svg_enfant_table
                                   && this.#svg_tableaux_des_references_amont_aval[id_bdd][k].id_svg_enfant_champ === id_svg_enfant_champ
                            ){
                                /*
                                  
                                  mise à jour de p222222
                                */
                                this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p2[0]=parseInt( tab_chemin[8] , 10 );
                                this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p2[1]=parseInt( tab_chemin[9] , 10 );
                                this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p1[0]=parseInt( tab_chemin[1] , 10 );
                                this.#svg_tableaux_des_references_amont_aval[id_bdd][k].p1[1]=parseInt( tab_chemin[2] , 10 );
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    #svg_ajuster_la_largeur_des_boites_de_la_table( tableau ){
        var id_svg_conteneur_table=tableau[0];
        var id_bdd=tableau[1];
        try{
            var id_svg_de_la_base_en_cours=this.#svg_dessin.getElementById( id_svg_conteneur_table ).getAttribute( 'id_svg_de_la_base_en_cours' );
        }catch(e){
            debugger;
        }
        var largeur_max=0;
        var groupe_table=this.#svg_dessin.getElementById( id_svg_conteneur_table );
        try{
            var lst=groupe_table.getElementsByTagName( 'g' );
        }catch(e){
            debugger;
        }
        for( i=0 ; i < lst.length ; i++ ){
            var bb=lst[i].getBBox();
            if(largeur_max < bb.width){
                largeur_max=Math.ceil( bb.width );
            }
        }
        /*
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
          }
          
        */
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
      function dessiner_le_svg
      pour les champs d'indexes <circle cx="-1" cy="10" r="2" stroke="rgb(0, 0, 0)" stroke-width="1" fill="yellowgreen" transform=""></circle>
    */
    #dessiner_le_svg(){
        var str='';
        this.#svg_dessin.innerHTML=str;
        /*
          pour chaque référence de base
        */
        var tableau_svg=[];
        var i={};
        for(i in this.#arbre){
            /*
              les indices peuvent commencer à n>0
              cette opération permet de transformet les n premiers en null
            */
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
                    /* debugger; */
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
            this.#svg_ajuster_la_position_des_liens( i );
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
          
          ( champ , 'chd__dtc_utilisateur'),
          ( a_une_valeur_par_defaut , 1),
          ( la_valeur_par_defaut_est_caractere , 1),
          ( valeur_par_defaut , '2000-01-01 00:00:00'),
          ( nom_bref_du_champ , 'à faire chd__dtc_utilisateur'),
          ( typologie , 'chi')
          ( espece_du_champ , 'VARCHAR' )
          ( longueur_du_champ , '' )
          
          
        */
        let champ=nom_du_champ;
        let a_une_valeur_par_defaut=0;
        let espece_du_champ='';
        let longueur_du_champ='';
        let la_valeur_par_defaut_est_caractere=0;
        let valeur_par_defaut='';
        let nom_bref_du_champ='';
        let abrege_du_champ='';
        let typologie='';
        let genre='1';
        let masquer_champ_dans_svg=0;
        let est_en_session=0;
        let nom_en_session='';
        let refe_enfant_droite=0;
        let refe_parent_gauche=0;
        let est_libelle_lien=0;
        let obj1=__gi1.__rev1.rev_tm( texte_meta_rev );
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
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_du_champ;
                            }
                            nom_du_champ=mat2[k + 1][1];
                            champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'a_une_valeur_par_defaut' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'a_une_valeur_par_defaut' )){
                                mat2[k + 1][1]=nouvelles_valeurs.a_une_valeur_par_defaut;
                            }
                            a_une_valeur_par_defaut=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'espece_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'espece_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.espece_du_champ.toUppercase();
                            }
                            espece_du_champ=mat2[k + 1][1].toUpperCase();
                        }else if(mat2[k][1] === 'longueur_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'longueur_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.longueur_du_champ;
                            }
                            longueur_du_champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'la_valeur_par_defaut_est_caractere' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'la_valeur_par_defaut_est_caractere' )){
                                mat2[k + 1][1]=nouvelles_valeurs.la_valeur_par_defaut_est_caractere;
                            }
                            la_valeur_par_defaut_est_caractere=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'valeur_par_defaut' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'valeur_par_defaut' )){
                                mat2[k + 1][1]=nouvelles_valeurs.valeur_par_defaut;
                            }
                            valeur_par_defaut=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'nom_bref_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_bref_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_bref_du_champ;
                            }
                            nom_bref_du_champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'abrege_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'abrege_du_champ' )){
                                mat2[k + 1][1]=nouvelles_valeurs.abrege_du_champ;
                            }
                            abrege_du_champ=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'masquer_champ_dans_svg' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'masquer_champ_dans_svg' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.masquer_champ_dans_svg , 10 );
                            }
                            masquer_champ_dans_svg=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'est_en_session' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'est_en_session' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.est_en_session , 10 );
                            }
                            est_en_session=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'nom_en_session' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'nom_en_session' )){
                                mat2[k + 1][1]=nouvelles_valeurs.nom_en_session;
                            }
                            nom_en_session=mat2[k + 1][1];
                        }else if(mat2[k][1] === 'refe_enfant_droite' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'refe_enfant_droite' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.refe_enfant_droite , 10 );
                            }
                            refe_enfant_droite=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'refe_parent_gauche' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'refe_parent_gauche' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.refe_parent_gauche , 10 );
                            }
                            refe_parent_gauche=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'est_libelle_lien' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'est_libelle_lien' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.est_libelle_lien , 10 );
                            }
                            est_libelle_lien=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === 'typologie' && mat2[k][2] === 'f'){
                            if(mat2[k][8] === 0){
                                typologie='';
                            }else{
                                if(nouvelles_valeurs.hasOwnProperty( 'typologie' )){
                                    mat2[k + 1][1]=nouvelles_valeurs.typologie;
                                }
                                typologie=mat2[k + 1][1];
                            }
                        }else if(mat2[k][1] === 'genre' && mat2[k][2] === 'f' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                            if(nouvelles_valeurs.hasOwnProperty( 'genre' )){
                                mat2[k + 1][1]=parseInt( nouvelles_valeurs.genre , 10 );
                            }
                            genre=parseInt( mat2[k + 1][1] , 10 );
                        }else if(mat2[k][1] === '' && mat2[k][2] === 'f' && mat2[k][8] === 2){
                            debugger;
                            /* plus utilisé */
                            if(mat2[k + 1][1] === 'champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'a_une_valeur_par_defaut' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                a_une_valeur_par_defaut=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'espece_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                espece_du_champ=mat2[k + 2][1].toUpperCase();
                            }else if(mat2[k + 1][1] === 'longueur_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                longueur_du_champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'la_valeur_par_defaut_est_caractere' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                la_valeur_par_defaut_est_caractere=parseInt( mat2[k + 2][1] , 10 );
                            }else if(mat2[k + 1][1] === 'valeur_par_defaut' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                valeur_par_defaut=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'nom_bref_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                nom_bref_du_champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'abrege_du_champ' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                abrege_du_champ=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'masquer_champ_dans_svg' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                masquer_champ_dans_svg=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'typologie' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                typologie=mat2[k + 2][1];
                            }else if(mat2[k + 1][1] === 'genre' && mat2[k + 1][2] === 'c' && mat2[k + 2][2] === 'c'){
                                genre=mat2[k + 2][1];
                            }
                        }else if(mat2[k][1] === 'longueur_du_champ' && mat2[k][2] === 'f' && mat2[k][8] === 0){
                        }else{
                            console.log( '%c meta "' + mat2[k][1] + '" non traité' , 'background:yellow;color:red;' );
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
        if(nouvelles_valeurs.hasOwnProperty( 'refe_enfant_droite' )
               && (nouvelles_valeurs.refe_enfant_droite === '1'
                   || nouvelles_valeurs.refe_enfant_droite === 1)
        ){
            refe_enfant_droite=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'refe_parent_gauche' )
               && (nouvelles_valeurs.refe_parent_gauche === '1'
                   || nouvelles_valeurs.refe_parent_gauche === 1)
        ){
            refe_parent_gauche=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'est_libelle_lien' )
               && (nouvelles_valeurs.est_libelle_lien === '1'
                   || nouvelles_valeurs.est_libelle_lien === 1)
        ){
            est_libelle_lien=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'masquer_champ_dans_svg' )
               && (nouvelles_valeurs.masquer_champ_dans_svg === '1'
                   || nouvelles_valeurs.masquer_champ_dans_svg === 1)
        ){
            masquer_champ_dans_svg=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'est_en_session' )
               && (nouvelles_valeurs.est_en_session === '1'
                   || nouvelles_valeurs.est_en_session === 1)
        ){
            est_en_session=1;
        }
        if(nouvelles_valeurs.hasOwnProperty( 'nom_en_session' ) && nouvelles_valeurs.nom_en_session != ''){
            nom_en_session=nouvelles_valeurs.nom_en_session;
        }
        if(espece_du_champ === '' && genre !== ''){
            for(let i in __gi1.__liste_des_genres){
                if(genre == __gi1.__liste_des_genres[i].chi_id_genre){
                    espece_du_champ=__gi1.__liste_des_genres[i].chp_espece_genre;
                    if(__gi1.__liste_des_genres[i].che_longueur_genre !== null && __gi1.__liste_des_genres[i].che_longueur_genre !== 0){
                        longueur_du_champ=__gi1.__liste_des_genres[i].che_longueur_genre;
                    }
                    break;
                }
            }
        }
        if(nom_bref_du_champ === ''
               || nom_bref_du_champ.indexOf( 'à faire' ) >= 0
               || nom_bref_du_champ.indexOf( 'AFR' ) >= 0
               || nom_bref_du_champ.indexOf( 'A faire' ) >= 0
        ){
            let tab=nom_du_champ.split( '_' );
            if(tab.length >= 2){
                tab.splice( 0 , 1 );
            }
            if(tab.length >= 2){
                tab.splice( tab.length - 1 , 1 );
            }
            nom_bref_du_champ=tab.join( ' ' );
        }
        if(abrege_du_champ === ''
               || abrege_du_champ.indexOf( 'à faire' ) >= 0
               || abrege_du_champ.indexOf( 'AFR' ) >= 0
               || abrege_du_champ.indexOf( 'A faire' ) >= 0
        ){
            let tab=nom_du_champ.split( '_' );
            if(tab.length >= 2){
                tab.splice( 0 , 1 );
            }
            if(tab.length >= 2){
                tab.splice( tab.length - 1 , 1 );
            }
            abrege_du_champ=tab.join( ' ' );
        }
        o1+='meta(';
        o1+='    genre_meta(champ),';
        o1+='    nom_du_champ(\'' + nom_du_champ + '\'),';
        /* o1+='    champ(\'' + champ + '\'),'; */
        o1+='    nom_bref_du_champ(\'' + nom_bref_du_champ + '\'),';
        o1+='    abrege_du_champ(\'' + abrege_du_champ + '\'),';
        o1+='    typologie(' + typologie + '),';
        o1+='    genre(' + genre + '),';
        o1+='    espece_du_champ(' + espece_du_champ + '),';
        if(refe_enfant_droite === 1){
            o1+='    refe_enfant_droite(' + refe_enfant_droite + '),';
        }
        if(refe_parent_gauche === 1){
            o1+='    refe_parent_gauche(' + refe_parent_gauche + '),';
        }
        if(est_libelle_lien === 1){
            o1+='    est_libelle_lien(' + est_libelle_lien + '),';
        }
        if(longueur_du_champ !== ''){
            o1+='    longueur_du_champ(' + longueur_du_champ + '),';
        }
        if(masquer_champ_dans_svg === 1){
            o1+='    masquer_champ_dans_svg(' + masquer_champ_dans_svg + '),';
        }
        if(est_en_session === 1){
            o1+='    est_en_session(' + est_en_session + '),';
        }
        if(nom_en_session !== ''){
            o1+='    nom_en_session(\'' + nom_en_session + '\'),';
        }
        o1+=')';
        let obj2=__gi1.__rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
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
                "nom_du_champ" : champ ,
                "a_une_valeur_par_defaut" : a_une_valeur_par_defaut ,
                "la_valeur_par_defaut_est_caractere" : la_valeur_par_defaut_est_caractere ,
                "valeur_par_defaut" : valeur_par_defaut ,
                "nom_bref_du_champ" : nom_bref_du_champ ,
                "abrege_du_champ" : abrege_du_champ ,
                "typologie" : typologie ,
                "masquer_champ_dans_svg" : masquer_champ_dans_svg ,
                "est_en_session" : est_en_session ,
                "nom_en_session" : nom_en_session ,
                "refe_enfant_droite" : refe_enfant_droite ,
                "refe_parent_gauche" : refe_parent_gauche ,
                "espece_du_champ" : espece_du_champ ,
                "longueur_du_champ" : longueur_du_champ ,
                "genre" : genre ,
                "est_libelle_lien" : est_libelle_lien
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
        let obj1=__gi1.__rev1.rev_tm( texte_meta_rev );
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
        let obj2=__gi1.__rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
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
    #corrige_meta_table( texte_meta_rev , nouvelles_valeurs={} , nom_de_la_table_en_parametre_pour_debug=null ){
        /*#
          meta(
             ( table , 'tbl_utilisateurs'),
             
             ( transform_table_sur_svg , transform( translate( 23 , 326 ) ))
          ),
        
          var obj=__gi1.__rev1.matrice_vers_source_rev1( nouvelle_matrice , 0 , false , 1 );
          if(obj.__xst === __xsu){
        */
        let table='';
        let nom_de_la_table='';
        let transform_table_sur_svg='';
        let decallage_x=0;
        let decallage_y=0;
        let obj1=__gi1.__rev1.rev_tm( texte_meta_rev );
        for(let i in this.#liste_des_meta_table){
            this.#liste_des_meta_table[i].valeur_normale_pour_meta=null;
            this.#liste_des_meta_table[i].valeur_brut_pour_meta=null;
        }
        /*
          
          if(nom_de_la_table_en_parametre_pour_debug==='tbl_utilisateurs'){
          debugger
          }
        */
        if(obj1.__xst === __xsu){
            let mat2=obj1.__xva;
            let l01=mat2.length;
            for( let l=1 ; l < l01 ; l=mat2[l][12] ){
                if(mat2[l][1] === 'meta' && mat2[l][2] === 'f'){
                    for( let k=l + 1 ; k < l01 ; k=mat2[k][12] ){
                        if(mat2[k][1] === 'genre_meta' && mat2[k][2] === 'f'){
                        }else if(mat2[k][1] === '#' && mat2[k][2] === 'f'){
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
                            var obj=__gi1.__rev1.matrice_vers_source_rev1( mat2 , k , false , k + 1 );
                            if(obj.__xst === __xsu){
                                transform_table_sur_svg=obj.__xva;
                            }else{
                                debugger;
                            }
                        }else{
                            let trouve=false;
                            if(mat2[k][2] === 'f'){
                                for(let l in this.#liste_des_meta_table){
                                    if(this.#liste_des_meta_table[l].nom_du_meta_table === mat2[k][1]){
                                        /*
                                          if(mat2[k][1]==='fonctions_spéciales1' && nom_de_la_table_en_parametre_pour_debug==='tbl_utilisateurs'){
                                          debugger
                                          }
                                        */
                                        if(mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                                            if(nouvelles_valeurs.hasOwnProperty( mat2[k][1] )){
                                                mat2[k + 1][1]=nouvelles_valeurs[mat2[k][1]];
                                            }
                                            this.#liste_des_meta_table[l].valeur_normale_pour_meta=__gi1.__rev1.ma_constante( mat2[k + 1] );
                                            this.#liste_des_meta_table[l].valeur_brut_pour_meta=__gi1.__rev1.ma_constante_inverse( mat2[k + 1] );
                                        }else{
                                            this.#liste_des_meta_table[l].valeur_normale_pour_meta='\'\'';
                                            this.#liste_des_meta_table[l].valeur_brut_pour_meta='';
                                        }
                                        trouve=true;
                                        break;
                                    }
                                }
                            }
                            if(trouve === false){
                                debugger;
                            }
                            /* console.log( mat2[k][1] + ' vide ' ); */
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
        for(let l in this.#liste_des_meta_table){
            if(nouvelles_valeurs.hasOwnProperty( this.#liste_des_meta_table[l].nom_du_meta_table )){
                this.#liste_des_meta_table[l].valeur_brut_pour_meta=nouvelles_valeurs[this.#liste_des_meta_table[l].nom_du_meta_table].replace( /\\'/g , '\'' ).replace( /\\\\/g , '\\' );
                if(this.#liste_des_meta_table[l].valeur_brut_pour_meta !== ''){
                    o1+=' ' + this.#liste_des_meta_table[l].nom_du_meta_table + '(\'' + this.#liste_des_meta_table[l].valeur_brut_pour_meta.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
                }else{
                    if(this.#liste_des_meta_table[l].doit_etre_dans_meta === true){
                        o1+=' ' + this.#liste_des_meta_table[l].nom_du_meta_table + '(\'\'),';
                    }
                }
            }else{
                if(this.#liste_des_meta_table[l].valeur_normale_pour_meta === '\'\''
                       || this.#liste_des_meta_table[l].valeur_normale_pour_meta === ''
                       || this.#liste_des_meta_table[l].valeur_normale_pour_meta === null
                ){
                    if(this.#liste_des_meta_table[l].doit_etre_dans_meta === true){
                        o1+=' ' + this.#liste_des_meta_table[l].nom_du_meta_table + '(\'\'),';
                    }
                }else{
                    o1+=' ' + this.#liste_des_meta_table[l].nom_du_meta_table + '(' + this.#liste_des_meta_table[l].valeur_normale_pour_meta + '),';
                }
            }
        }
        o1+=' transform_table_sur_svg(' + transform_table_sur_svg + ')';
        o1+=')';
        let obj2=__gi1.__rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
            if(obj3.__xst === __xsu){
                o1=obj3.__xva;
            }else{
                debugger;
            }
        }else{
            debugger;
        }
        let ret={"texte" : o1 ,"decallage_x" : decallage_x ,"decallage_y" : decallage_y};
        for(let l in this.#liste_des_meta_table){
            ret[this.#liste_des_meta_table[l].nom_du_meta_table]=this.#liste_des_meta_table[l].valeur_brut_pour_meta === null ?
              ( 
                ''
              ) : ( 
                this.#liste_des_meta_table[l].valeur_brut_pour_meta
              );
        }
        /*
          if(nom_de_la_table_en_parametre_pour_debug==='tbl_utilisateurs'){
          debugger
          }
        */
        return ret;
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
          var obj=__gi1.__rev1.matrice_vers_source_rev1( nouvelle_matrice , 0 , false , 1 );
          if(obj.__xst === __xsu){
        */
        let default_charset='';
        let collate='';
        let transform_base_sur_svg='';
        let decallage_x=0;
        let decallage_y=0;
        let obj1=__gi1.__rev1.rev_tm( texte_meta_rev );
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
                              var obj=__gi1.__rev1.matrice_vers_source_rev1( mat2 , k , false , k + 1 );
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
                                var obj=__gi1.__rev1.matrice_vers_source_rev1( mat2 , k + 2 , false , k + 3 );
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
        let obj2=__gi1.__rev1.rev_tm( o1 );
        if(obj2.__xst === __xsu){
            let obj3=__gi1.__rev1.matrice_vers_source_rev1( obj2.__xva , 0 , true , 1 );
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
            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + 'il y a eu un problème lors de la récupération de l\'arbre svg'} ));
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
    }
    /*
      =============================================================================================================
    */
    sauvegarder_la_base( mat , d ){
        let id_bdd_de_la_base=0;
        var l01=mat.length;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_bdd_de_la_base' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(id_bdd_de_la_base > 0){
            this.#id_bdd_de_la_base_en_cours=id_bdd_de_la_base;
            __gi1.supprimer_les_messages();
            let obj=this.#creer_rev_de_la_base_a_partir_de_svg( this.#id_bdd_de_la_base_en_cours );
            if(obj.__xst === __xsu){
                let objrev=__gi1.__rev1.rev_tm( obj.__xva );
                if(objrev.__xst === __xsu){
                    let obj_tableau_des_dependances=this.#construire_tableau_dependances( objrev.__xva , this.#id_bdd_de_la_base_en_cours );
                    var obj2=__gi1.__rev1.matrice_vers_source_rev1( objrev.__xva , 0 , true , 1 );
                    if(obj2.__xst === __xsu){
                        let a_envoyer={
                             /*  */
                            "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(envoyer_le_rev_de_le_base_en_post())))' ,
                            "__xva" : {
                                 /*  */
                                "id_bdd_de_la_base" : this.#id_bdd_de_la_base_en_cours ,
                                "source_rev_de_la_base" : obj2.__xva ,
                                "tableau_des_dependances" : obj_tableau_des_dependances.__xva
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( a_envoyer );
                        return({"__xst" : __xsu});
                    }
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
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
        let indice_svg_rectangle=indice_courant;
        indice_courant++;
        return({"indice_svg_rectangle" : indice_svg_rectangle ,"indice_courant" : indice_courant ,"id_svg_conteneur_table" : id_svg_conteneur_table});
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
            "id_parent" : id_svg_champ_en_cours ,
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
        /* hugues carré rouge 🟥 */
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'deplacement_de_table' ,
                "data-utilite" : 'deplacer_la_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : 2 * this.#taille_bordure ,
                "y" : 2 * this.#taille_bordure ,
                "width" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "height" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "style" : "stroke:black;stroke-width:" + this.#taille_bordure + ";fill:red;fill-opacity:0.2;cursor:move;"
            }
        };
        indice_courant++;
        /* hugues carré bleu 🟦 */
        var cmd='';
        cmd+='m1(n1(' + this.moi + '),f1(modale_gerer_la_table(id_svg_conteneur_table(' + id_svg_conteneur_table + '),id_bdd_de_la_base_en_cours(' + this.#id_bdd_de_la_base_en_cours + '))))';
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'edition_de_table' ,
                "data-utilite" : 'editer_la_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : 2 * this.#taille_bordure + this.#hauteur_de_boite ,
                "y" : 2 * this.#taille_bordure ,
                "width" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "height" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "style" : "stroke:black;stroke-width:" + this.#taille_bordure + ";fill:darkcyan;fill-opacity:1;cursor:pointer;" ,
                 /* "data-rev_click" : cmd */
                }
        };
        indice_courant++;
        /*
          texte du nom de la table  // ⇱🔎🎯 🟥
        */
        this.#arbre[this.#id_bdd_de_la_base_en_cours].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
            "contenu" : nom_de_la_table ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'texte_de_nom_de_table' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_bdd_de_la_base_en_cours" : this.#id_bdd_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : (this.#hauteur_de_boite + 2 * this.#taille_bordure) * 2 ,
                "y" : this.#hauteur_de_boite - 0.3 * __gi1.css_dimensions.t_police - this.#taille_bordure ,
                "style" : "fill:white;cursor:context-menu;"
            }
        };
        indice_courant++;
        largeur_de_la_boite=this.#ajuster_largeur_de_boite( largeur_de_la_boite , nom_de_la_table + '🟥' );
        return({
                "largeur_de_la_boite" : largeur_de_la_boite ,
                "id_svg_rectangle_du_nom_de_la_table" : id_svg_rectangle_du_nom_de_la_table ,
                "indice_courant" : indice_courant
            });
    }
    /*
      =============================================================================================================
    */
    #ajouter_champ_a_arbre( nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , id_bdd_de_la_base , donnees_rev_du_champ , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut , espece_du_champ , longueur_du_champ , valeur_par_defaut , la_valeur_par_defaut_est_caractere ){
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
        let genre_du_champ=1;
        if(donnees_rev_du_champ.indexOf( 'genre(1)' ) < 0){
            var obj1=__gi1.__rev1.rev_tm( donnees_rev_du_champ );
            if(obj1.__xst === __xsu){
                let mat=obj1.__xva;
                for( let i=1 ; i < mat.length ; i=mat[i][12] ){
                    if(mat[i][1] === 'meta' && mat[i][2] === 'f'){
                        for( let j=i + 1 ; j < mat.length ; j=mat[j][12] ){
                            if(mat[j][1] === 'genre' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                                genre_du_champ=mat[j + 1][1];
                            }
                        }
                    }
                }
            }
        }
        if(donnees_rev_du_champ.indexOf( 'masquer_champ_dans_svg(1)' ) >= 0){
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
        if(espece_du_champ === ''){
            debugger;
            if(type !== ''){
                if(type.indexOf( '(' ) >= 0){
                    espece_du_champ=type.substr( 0 , type.indexOf( '(' ) ).toUpperCase();
                    longueur_du_champ=type.substr( type.indexOf( '(' ) ).replace( /\(/ , '' ).replace( /\)/ , '' );
                }else{
                    espece_du_champ=type.toUpperCase();
                    longueur_du_champ='';
                }
            }else{
                debugger;
            }
        }
        let couleur_stroke='gold';
        let couleur_fill='pink';
        if(genre_du_champ === 1){
            couleur_stroke='navy';
            couleur_fill='red';
            /* console.log('genre_du_champ=',genre_du_champ); */
        }
        var indice_du_champ=indice_courant;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
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
                "style" : "stroke:" + couleur_stroke + ";stroke-width:" + this.#taille_bordure + ";fill:" + couleur_fill + ";fill-opacity:0.2;" ,
                "donnees_rev_du_champ" : donnees_rev_du_champ ,
                "espece_du_champ" : espece_du_champ.toUpperCase() ,
                "longueur_du_champ" : longueur_du_champ ,
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
        /*
          let cmd='';
          cmd+='m1(n1(' + this.moi + '),f1(modale_modifier_le_champ(';
          cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
          cmd+=' id_svg_champ_en_cours(' + id_svg_champ_en_cours + ')';
          cmd+=' nom_du_champ(\'' + nom_du_champ.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
          cmd+=' nom_de_la_table(\'' + nom_de_la_table + '\') ';
          cmd+=')))';
        */
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'selection_du_champ' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_du_champ" : nom_du_champ ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "x" : 2 * this.#taille_bordure ,
                "y" : 2 * this.#taille_bordure ,
                "width" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "height" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "style" : "stroke:black;stroke-width:" + this.#taille_bordure + ";fill:yellow;fill-opacity:0.2;cursor:pointer;" ,
                 /* "data-rev_click" : cmd */
                }
        };
        indice_courant++;
        var objrev=null;
        var tabrev=[];
        var couleur_nom_de_champ='navy';
        if(primary_key === 1){
            couleur_nom_de_champ='red';
        }
        let contenu='';
        contenu+='' + nom_du_champ;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
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
                "x" : this.#hauteur_de_boite + 2 * this.#taille_bordure + __gi1.css_dimensions.t_police * 1.8 ,
                "y" : this.#hauteur_de_boite - 0.3 * __gi1.css_dimensions.t_police - this.#taille_bordure ,
                "style" : "fill:" + couleur_nom_de_champ + ";"
            }
        };
        indice_courant++;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_champ_en_cours ,
             /* carré jaune */
            "contenu" : genre_du_champ ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'genre_de_champ' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "id_svg_champ_en_cours" : id_svg_champ_en_cours ,
                "nom_de_la_table" : nom_de_la_table ,
                "nom_du_champ" : nom_du_champ ,
                "x" : this.#hauteur_de_boite + 2 * this.#taille_bordure ,
                "y" : this.#hauteur_de_boite - 0.3 * __gi1.css_dimensions.t_police - this.#taille_bordure ,
                "style" : "fill:" + couleur_nom_de_champ + ";font-size: smaller;"
            }
        };
        indice_courant++;
        if(references !== ''){
            var tt=references.split( ',' );
            nom_parent_table=tt[0];
            nom_parent_champ=tt[1];
            for(let i in this.#arbre[id_bdd_de_la_base].arbre_svg){
                if(this.#arbre[id_bdd_de_la_base].arbre_svg[i]
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === 'conteneur_de_table'
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_de_la_table === nom_parent_table
                ){
                    id_svg_parent_table=parseInt( i , 0 );
                }
                if(this.#arbre[id_bdd_de_la_base].arbre_svg[i]
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === 'conteneur_de_champ'
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_du_champ === nom_parent_champ
                ){
                    id_svg_parent_champ=parseInt( i , 10 );
                    /*
                      le nom du champ vient toujours après le nom de la table
                    */
                    break;
                }
            }
        }
        return({"indice_du_champ" : indice_du_champ ,"id_svg_champ_en_cours" : id_svg_champ_en_cours ,"indice_courant" : indice_courant});
    }
    /*
      =============================================================================================================
      function ajouter_index_a_table
    */
    #ajouter_index_a_table( id_bdd_de_la_base , indice_courant , nom_de_l_index , id_svg_conteneur_table , nom_de_la_table , donnees_rev_de_l_index , champs , unique ){
        let id_svg_de_l_index=indice_courant;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'g' ,
            "id" : id_svg_de_l_index ,
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
        indice_courant++;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_de_l_index ,
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
        /*
          let cmd='';
          cmd+='m1(n1(' + this.moi + '),f1(modale_modifier_l_index(';
          cmd+=' id_svg_conteneur_table(' + id_svg_conteneur_table + ')';
          cmd+=' nom_de_l_index(\'' + nom_de_l_index.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
          cmd+=' id_svg_conteneur_d_index(' + id_svg_de_l_index + ')';
          cmd+=')))"';
        */
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'rect' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_de_l_index ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'selection_d_index' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table_pour_l_index" : nom_de_la_table ,
                "id_svg_conteneur_d_index" : id_svg_de_l_index ,
                "nom_de_l_index" : nom_de_l_index ,
                "donnees_rev_de_l_index" : donnees_rev_de_l_index ,
                "champs" : champs ,
                "unique" : unique ,
                "x" : 2 * this.#taille_bordure ,
                "y" : 2 * this.#taille_bordure ,
                "width" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "height" : this.#hauteur_de_boite - 4 * this.#taille_bordure ,
                "style" : "stroke:black;stroke-width:" + this.#taille_bordure + ";fill:green;fill-opacity:0.2;cursor:pointer;" ,
                 /* "data-rev_click" : cmd */
                }
        };
        indice_courant++;
        /*
          "contenu" : 'hello'+nom_de_l_index ,
        */
        /* carré vert */
        let contenu=nom_de_l_index;
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
            "type" : 'text' ,
            "id" : indice_courant ,
            "id_parent" : id_svg_de_l_index ,
            "contenu" : contenu ,
            "proprietes" : {
                "id" : indice_courant ,
                "type_element" : 'texte_d_index' ,
                "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                "id_svg_conteneur_table" : id_svg_conteneur_table ,
                "nom_de_la_table_pour_l_index" : nom_de_la_table ,
                "x" : this.#taille_bordure + this.#hauteur_de_boite + 2 * this.#taille_bordure ,
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
                            var objxx=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[l][7] , false , l , 0 , [] , null , true );
                            if(objxx.__xst === __xsu){
                                let obj_meta_de_la_base=this.#corrige_meta_table( objxx.__xva , {"nom_de_la_table" : nom_de_la_table} , nom_de_la_table );
                                meta_de_la_table=obj_meta_de_la_base.texte;
                                tt[0]=obj_meta_de_la_base.decallage_x;
                                tt[1]=obj_meta_de_la_base.decallage_y;
                            }else{
                                debugger;
                            }
                        }
                    }
                    var a=this.#ajouter_table_a_svg( nom_de_la_table , indice_courant , tt , meta_de_la_table );
                    indice_courant=a.indice_courant;
                    id_svg_conteneur_table=a.id_svg_conteneur_table;
                    position_gauche_de_la_table=parseFloat( tt[0] );
                    position_haut_de_la_table=parseFloat( tt[1] );
                    id_svg_champ_en_cours=indice_courant;
                    var a=this.#ajouter_nom_de_table_au_svg( nom_de_la_table , indice_courant , id_svg_conteneur_table , largeur_de_la_boite );
                    indice_courant=a.indice_courant;
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
                                var espece_du_champ='';
                                var longueur_du_champ='';
                                var la_valeur_par_defaut_est_caractere=0;
                                var valeur_par_defaut='';
                                let valeurs_en_dehors_de_meta=false;
                                let indice_meta=0;
                                let genre_du_champ=1;
                                for( let n=l + 1 ; n < l01 ; n=tab[n][12] ){
                                    if(tab[n][2] === 'f' && tab[n][1] === 'nom_du_champ' && tab[n][8] === 1){
                                        nom_du_champ=tab[n + 1][1];
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'type' && tab[n][8] === 1){
                                        type=tab[n + 1][1];
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'espece_du_champ' && tab[n][8] === 1){
                                        espece_du_champ=tab[n + 1][1].toUpperCase();
                                    }else if(tab[n][2] === 'f' && tab[n][1] === 'longueur_du_champ' && tab[n][8] === 1){
                                        longueur_du_champ=tab[n + 1][1];
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
                                if(espece_du_champ === ''){
                                    if(type !== ''){
                                        if(type.indexOf( '(' ) >= 0){
                                            espece_du_champ=type.substr( 0 , type.indexOf( '(' ) ).toUpperCase();
                                            longueur_du_champ=type.substr( type.indexOf( '(' ) ).replace( /\(/g , '' ).replace( /\)/g , '' );
                                        }else{
                                            espece_du_champ=type.toUpperCase();
                                            longueur_du_champ='';
                                        }
                                    }else{
                                        debugger;
                                    }
                                }
                                if(longueur_du_champ === ''){
                                    if(type.indexOf( '(' ) >= 0){
                                        longueur_du_champ=type.substr( type.indexOf( '(' ) ).replace( /\(/g , '' ).replace( /\)/g , '' );
                                    }
                                }
                                if(indice_meta > 0){
                                    var obj1=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[indice_meta][7] , false , indice_meta , 0 , [] , null , true );
                                    if(obj1.__xst === __xsu){
                                        donnees_rev_du_champ=obj1.__xva;
                                    }else{
                                        __gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : '0849 problème sur les données du champ "' + nom_du_champ + '"'} );
                                        /* __gi1.remplis_les_messages_et_affiche( '' ); */
                                        return({"__xst" : __xer});
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
                                var a=this.#ajouter_champ_a_arbre( /*  */ nom_du_champ , indice_courant , id_svg_conteneur_table , nom_de_la_table , id_bdd_de_la_base , donnees_rev_du_champ , primary_key , non_nulle , auto_increment , references , a_une_valeur_par_defaut , espece_du_champ , longueur_du_champ , valeur_par_defaut , la_valeur_par_defaut_est_caractere );
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
                            var obj1=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[indice_meta][7] , false , indice_meta , 0 , [] , null , true );
                            if(obj1.__xst === __xsu){
                                donnees_rev_de_l_index=obj1.__xva;
                                donnees_rev_de_l_index=this.#corrige_meta_index( donnees_rev_de_l_index , {} , nom_de_l_index );
                                donnees_rev_de_l_index=donnees_rev_de_l_index.texte;
                            }else{
                                __gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : '0849 problème sur les données de l\'index "' + nom_de_l_index + '"'} );
                                /* __gi1.remplis_les_messages_et_affiche( '' ); */
                                return({"__xst" : __xer});
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
    */
    #modifier_les_references_des_liens( id_bdd_de_la_base ){
        /*
          
          il faut mettre à jour les liens ici           
          car une table mère peut être déclarée après une table fille
          
          
          this.#svg_tableaux_des_references_amont_aval
          this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={type:'path',
          
          parent_nom_table:nom_parent_table,
          parent_nom_champ:nom_parent_champ,
          
        */
        /*
          rechercher rectangle_de_champ
        */
        /*
          raz des éléments existants
        */
        this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base]=[];
        let indice_courant=0;
        for(let i in this.#arbre[id_bdd_de_la_base].arbre_svg){
            if(this.#arbre[id_bdd_de_la_base].arbre_svg[i]
                   && (this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === "conteneur_reference_croisée"
                       || this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === "reference_croisée")
            ){
                this.#arbre[id_bdd_de_la_base].arbre_svg[i]=null;
            }
            indice_courant=i;
        }
        if(true){
            /* var indice_courant=this.#recuperer_prochain_id_svg(); */
            indice_courant++;
            for(let i in this.#arbre[id_bdd_de_la_base].arbre_svg){
                if(this.#arbre[id_bdd_de_la_base].arbre_svg[i]
                       && this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.type_element === "rectangle_de_champ"
                ){
                    if(this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.references !== ''){
                        /*
                          on a trouve un champ enfant qui a une référence
                        */
                        let indice_du_champ=i;
                        var tt=this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.references.split( ',' );
                        var nom_table_mere=tt[0];
                        var nom_champ_pere=tt[1];
                        let id_svg_enfant_table=this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.id_svg_conteneur_table;
                        let id_svg_enfant_champ=this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.id_svg_champ_en_cours;
                        let nom_enfant_table=this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_de_la_table;
                        let nom_enfant_champ=this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.nom_du_champ;
                        let non_nulle=parseInt( this.#arbre[id_bdd_de_la_base].arbre_svg[i].proprietes.non_nulle , 10 );
                        for(let j in this.#arbre[id_bdd_de_la_base].arbre_svg){
                            if(this.#arbre[id_bdd_de_la_base].arbre_svg[j]
                                   && this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.type_element === "rectangle_de_champ"
                            ){
                                if(this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_de_la_table === nom_table_mere
                                       && this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_du_champ === nom_champ_pere
                                ){
                                    let id_svg_parent_table=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.id_svg_conteneur_table;
                                    let id_svg_parent_champ=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.id_svg_champ_en_cours;
                                    let nom_parent_table=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_de_la_table;
                                    let nom_parent_champ=this.#arbre[id_bdd_de_la_base].arbre_svg[j].proprietes.nom_du_champ;
                                    let refe_enfant_droite=this.#arbre[id_bdd_de_la_base].arbre_svg[indice_du_champ].proprietes.donnees_rev_du_champ.indexOf( 'refe_enfant_droite(1)' ) >= 0 ? ( 1 ) : ( 0 );
                                    let refe_parent_gauche=this.#arbre[id_bdd_de_la_base].arbre_svg[indice_du_champ].proprietes.donnees_rev_du_champ.indexOf( 'refe_parent_gauche(1)' ) >= 0 ? ( 1 ) : ( 0 );
                                    /* debugger */
                                    this.#svg_tableaux_des_references_amont_aval[id_bdd_de_la_base].push( {
                                            "id_bdd_de_la_base_en_cours" : id_bdd_de_la_base ,
                                            "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                                            "id_svg_parent_table" : id_svg_parent_table ,
                                            "id_svg_parent_champ" : id_svg_parent_champ ,
                                            "id_svg_enfant_table" : id_svg_enfant_table ,
                                            "id_svg_enfant_champ" : id_svg_enfant_champ ,
                                            "nom_enfant_table" : nom_enfant_table ,
                                            "nom_enfant_champ" : nom_enfant_champ ,
                                            "nom_parent_table" : nom_parent_table ,
                                            "nom_parent_champ" : nom_parent_champ ,
                                            "id_du_path" : indice_courant ,
                                            "p1" : [50,50] ,
                                            "p2" : [0,0] ,
                                            "refe_enfant_droite" : refe_enfant_droite ,
                                            "refe_parent_gauche" : refe_parent_gauche
                                        } );
                                    var d='M 50 50 C 20 50 30 0 0 0';
                                    var couleur_du_lien='brown';
                                    if(non_nulle === 0){
                                        couleur_du_lien='coral';
                                    }
                                    /*
                                      le parent d'un lien appartient à la base et non pas à id_svg_champ_en_cours
                                    */
                                    this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
                                        "type" : 'g' ,
                                        "id" : indice_courant ,
                                        "id_parent" : this.#id_svg_de_la_base_en_cours ,
                                        "proprietes" : {
                                            "id" : indice_courant ,
                                            "type_element" : 'conteneur_reference_croisée' ,
                                            "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                                            "id_svg_parent_table" : id_svg_parent_table ,
                                            "id_svg_parent_champ" : id_svg_parent_champ ,
                                            "id_svg_enfant_table" : id_svg_enfant_table ,
                                            "id_svg_enfant_champ" : id_svg_enfant_champ ,
                                            "nom_parent_table" : nom_parent_table ,
                                            "nom_parent_champ" : nom_parent_champ ,
                                            "style" : 'stroke:' + couleur_du_lien + ';stroke-width:' + (this.#taille_bordure * 3) + ';fill:transparent;stroke-opacity:0.6;stroke-linejoin:round;stroke-linecap:round;'
                                        }
                                    };
                                    indice_courant++;
                                    this.#arbre[id_bdd_de_la_base].arbre_svg[indice_courant]={
                                        "type" : 'path' ,
                                        "id" : indice_courant ,
                                        "id_parent" : indice_courant - 1 ,
                                        "proprietes" : {
                                            "id" : indice_courant ,
                                            "d" : d ,
                                            "type_element" : 'reference_croisée' ,
                                            "id_svg_de_la_base_en_cours" : this.#id_svg_de_la_base_en_cours ,
                                            "id_svg_parent_table" : id_svg_parent_table ,
                                            "id_svg_parent_champ" : id_svg_parent_champ ,
                                            "id_svg_enfant_table" : id_svg_enfant_table ,
                                            "id_svg_enfant_champ" : id_svg_enfant_champ ,
                                            "nom_parent_table" : nom_parent_table ,
                                            "nom_parent_champ" : nom_parent_champ ,
                                            "style" : 'stroke:' + couleur_du_lien + ';stroke-width:' + (this.#taille_bordure * 3) + ';fill:transparent;stroke-opacity:0.6;stroke-linejoin:round;stroke-linecap:round;'
                                        }
                                    };
                                    indice_courant++;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    déselectionner_une_base( mat , d ){
        let id_bdd_de_la_base=0;
        let lmat=mat.length;
        for( let i=d + 1 ; i < lmat ; i=mat[i][12] ){
            if('id_bdd_de_la_base' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.#arbre[id_bdd_de_la_base].arbre_svg=[];
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_une_base( mat , d ){
        let id_bdd_de_la_base=0;
        let lmat=mat.length;
        for( let i=d + 1 ; i < lmat ; i=mat[i][12] ){
            if('id_bdd_de_la_base' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_bdd_de_la_base=parseInt( mat[i + 1][1] , 10 );
            }
        }
        var indice_svg_courant=0;
        for(let i in this.#arbre){
            if(this.#arbre[i].arbre_svg.length > 0){
                if(indice_svg_courant < this.#arbre[i].arbre_svg.length){
                    indice_svg_courant=this.#arbre[i].arbre_svg.length;
                }
            }
        }
        console.log( 'indice_svg_courant=' + indice_svg_courant );
        var id_svg_conteneur_table=0;
        var id_tab_table_en_cours=0;
        var id_svg_rectangle_base_en_cours=0;
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
        indice_svg_courant++;
        let contenu='';
        contenu+='<tspan type_element="edition_de_la_base" id_bdd_de_la_base="' + id_bdd_de_la_base + '" style="fill:blue;cursor:pointer;">base(' + id_bdd_de_la_base + ')</tspan>';
        contenu+='<tspan type_element="sauvegarde_de_la_base" id_bdd_de_la_base="' + id_bdd_de_la_base + '"  style="fill:green;cursor:pointer;">sauvegarder</tspan>';
        this.#arbre[id_bdd_de_la_base].arbre_svg[indice_svg_courant]={
            "type" : 'text' ,
            "id" : indice_svg_courant ,
            "id_parent" : indice_svg_courant - 1 ,
            "contenu" : contenu ,
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
        var tab=[];
        if(this.#arbre[id_bdd_de_la_base].hasOwnProperty( 'matrice' )){
            tab=this.#arbre[id_bdd_de_la_base]['matrice'];
        }
        var l01=tab.length;
        /*
          
          =====================================================================================================
          recherche des meta de la base i
          =====================================================================================================
        */
        var meta_de_la_base='';
        var decallage_x=0;
        var decallage_y=0;
        for( let indice_matr=1 ; indice_matr < l01 ; indice_matr=tab[indice_matr][12] ){
            if(tab[indice_matr][3] === 0 && tab[indice_matr][1] === 'meta' && tab[indice_matr][2] === 'f'){
                var objxx=__gi1.__rev1.matrice_vers_source_rev1( tab , tab[indice_matr][7] , false , indice_matr , 0 , [] , null , true );
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
          =====================================================================================================
          debut de recherche des créer_table
          =====================================================================================================
        */
        for( let indice_matr=1 ; indice_matr < l01 ; indice_matr++ ){
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
        this.#dessiner_le_svg();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    integrer_les_revs_des_bases( mat , d , le_message_du_serveur ){
        console.log( 'integrer_les_revs_des_bases' );
        /* this.#arbre={}; */
        for(let i in le_message_du_serveur.__xva.les_bases_du_projet){
            /* obj */
            this.#arbre[le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']]={
                 /*  */
                "chp_rev_travail_basedd" : le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] ,
                "arbre_svg" : []
            };
            if(le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] === ''
                   || le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] === null
            ){
                /*
                  // __gi1.ajoute_message( {"__xst" : __xif ,"__xme" : __gi1.__rev1.nl2() + 'le champ chp_rev_travail_basedd est vide'} ); 
                  __gi1.ajoute_message( {
                  "__xst" : __xer ,
                  "__xme" : '<b>Pour la base ' + le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd'] + '</b>, le champ chp_rev_travail_basedd est vide<br />' + __gi1.__rev1.nl2()
                  } );
                  return({"__xst" : __xer});
                */
            }else{
                var obj1=__gi1.__rev1.rev_tm( le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chp_rev_travail_basedd'] );
                if(obj1.__xst === __xsu){
                    this.#arbre[le_message_du_serveur.__xva.les_bases_du_projet[i]['T0.chi_id_basedd']]['matrice']=obj1.__xva;
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                    /* __gi1.remplis_les_messages_et_affiche( '' ); */
                    return({"__xst" : __xer});
                }
            }
        }
        return({"__xst" : __xsu});
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
    zoom_avec_bouton( sens ){
        debugger;
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
        if(e.deltaY > 0){
            this.zoomPlusMoins( 2 );
        }else{
            this.zoomPlusMoins( 0.5 );
        }
    }
    /*
      =============================================================================================================
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
            }
        }
    }
    /*
      =============================================================================================================
    */
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
export{z_svg_bdd1 as z_svg_bdd1};