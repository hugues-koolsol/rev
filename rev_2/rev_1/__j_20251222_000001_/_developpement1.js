import {z_ast_js_vers_rev1} from './z_ast_js_vers_rev1.js';
import {z_rev_vers_js1} from './z_rev_vers_js1.js';
import {z_html_vers_rev1} from './z_html_vers_rev1.js';
import {z_ast_phpparseur_vers_rev1} from './z_ast_phpparseur_vers_rev1.js';
import {z_rev_vers_html1} from './z_rev_vers_html1.js';
import {z_rev_vers_php1} from './z_rev_vers_php1.js';
import {z_rev_vers_txt1} from './z_rev_vers_txt1.js';
import {z_ast_sqliteparseur_vers_rev1} from './z_ast_sqliteparseur_vers_rev1.js';
import {z_rev_vers_sql1} from './z_rev_vers_sql1.js';
import {z_ast_postcss_vers_rev1} from './z_ast_postcss_vers_rev1.js';
import {z_rev_vers_css1} from './z_rev_vers_css1.js';
/*
  import {c_astsql_parseur_cst_vers_rev1} from './c_astsql_parseur_cst_vers_rev1.js';
*/
class _developpement1{
    /*
    */
    #module_acorn_charge=null;
    #parseur_javascript=null;
    #objet_conversion_ast_js_vers_rev=null;
    /*
    */
    #objet_conversion_html_vers_rev=null;
    /*
    */
    #module_phpparseur_charge=null;
    #parseur_phpparseur=null;
    #objet_conversion_astphpparseur_vers_rev1=null;
    #objet_conversion_astphpnikic_vers_rev1=null;
    /*
    */
    #module_sqlite_parseur_charge=null;
    #objet_conversion_astsqliteparseur_vers_rev1=null;
    #parseur_sqlite_parseur=null;
    /*
    */
    #module_sql_parseur_cst_charge=null;
    #objet_conversion_ast_sql_parseur_cst_vers_rev1=null;
    #parseur_sql_parseur_cst=null;
    /*
    */
    #module_cssparseur_charge=null;
    #objet_conversion_astcss_vers_rev1=null;
    #parseur_cssparseur=null;
    /*
    */
    #objet_conversion_texte_vers_rev1=null;
    /*
    */
    #objet_conversion_rev_vers_js=null;
    #objet_conversion_rev_vers_sql=null;
    #objet_conversion_rev_vers_php=null;
    #objet_conversion_rev_vers_css=null;
    #objet_conversion_rev_vers_html=null;
    /*
      =============================================================================================================
    */
    constructor( e ){
        /*
          console.log( 'constructor _developpement1' , e );
        */
        /* js */
        this.#objet_conversion_ast_js_vers_rev=new z_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , __gi1.__rev1 );
        this.#objet_conversion_rev_vers_js=new z_rev_vers_js1( '#objet_conversion_rev_vers_js' , __gi1.__rev1 );
        /* html */
        this.#objet_conversion_html_vers_rev=new z_html_vers_rev1( '#objet_conversion_html_vers_rev' , __gi1.__rev1 , this.#objet_conversion_ast_js_vers_rev );
        this.#objet_conversion_rev_vers_html=new z_rev_vers_html1( '#objet_conversion_rev_vers_html' , __gi1.__rev1 , this.#objet_conversion_rev_vers_js );
        /* php */
        this.#objet_conversion_astphpparseur_vers_rev1=new z_ast_phpparseur_vers_rev1( '#objet_conversion_astphpparseur_vers_rev1' , __gi1.__rev1 , this.#objet_conversion_html_vers_rev );
        this.#objet_conversion_rev_vers_php=new z_rev_vers_php1( '#objet_conversion_rev_vers_php' , __gi1.__rev1 , this.#objet_conversion_rev_vers_html );
        /* txt */
        this.#objet_conversion_texte_vers_rev1=new z_rev_vers_txt1( '#objet_conversion_texte_vers_rev1' , __gi1.__rev1 );
        /* sql */
        this.#objet_conversion_astsqliteparseur_vers_rev1=new z_ast_sqliteparseur_vers_rev1( '#objet_conversion_astsqliteparseur_vers_rev1' , __gi1.__rev1 );
        this.#objet_conversion_rev_vers_sql=new z_rev_vers_sql1( __gi1.__rev1 );
        /* css */
        this.#objet_conversion_astcss_vers_rev1=new z_ast_postcss_vers_rev1( __gi1.__rev1 );
        this.#objet_conversion_rev_vers_css=new z_rev_vers_css1( __gi1.__rev1 );
    }
    /*
      =============================================================================================================
    */
    normaliser_javascript( src_js ){
        /*
          =====================================================================================================
          javascript
        */
        if(this.#parseur_javascript === null){
            try{
                this.#parseur_javascript=window.acorn.Parser;
            }catch(e){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de chargement du parseur js ' + __gi1.__rev1.nl2( e )} );
            }
        }
        if(this.#parseur_javascript !== null){
            let obj=null;
            let tableau_des_commentaires_js=[];
            /*
              =============================================================================================
              src->ast
            */
            try{
                obj=this.#parseur_javascript.parse( src_js , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
            }catch(e){
                if(e.message){
                    let tt=e.message.substr( e.message.indexOf( 'Unexpected token ' ) + 17 );
                    let lig_col=null;
                    /* const text = "anything(aa:bb)otherthing"; */
                    const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                    const match=tt.match( regex );
                    if(match && __gi1.est_num( match[1] ) && __gi1.est_num( match[2] )){
                        lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                    }
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + ' <br />erreur dans le javascript :' + e.message} );
                }
                return({"__xst" : __xer});
            }
            let commentaires_a_remplacer=['<![CDATA[',']]>','<source_javascript_rev>','</source_javascript_rev>'];
            for( let nn=0 ; nn < commentaires_a_remplacer.length ; nn++ ){
                for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                    if(tableau_des_commentaires_js[indc].value.trim() === commentaires_a_remplacer[nn]){
                        tableau_des_commentaires_js.splice( indc , 1 );
                    }
                }
            }
            for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                if(tableau_des_commentaires_js[indc].value.trim() === '' && tableau_des_commentaires_js[indc].type === 'Line'){
                    tableau_des_commentaires_js.splice( indc , 1 );
                }
            }
            /*
              ast -> rev 
            */
            let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
            if(obj1.__xst === __xsu){
                /*
                  =====================================================================================
                  rev -> js 
                */
                let obj2=this.#objet_conversion_rev_vers_js.c_rev_vers_js( obj1.__xva , {} );
                if(obj2.__xst === __xsu){
                    return({"__xst" : __xsu ,"js_vers_rev" : obj1 ,"rev_vers_js" : obj2});
                    /*
                      let matrice_source=null;
                      let enregistrer_la_matrice=__xsu;
                      if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                      matrice_source=obj2.matriceFonction;
                      }else{
                      enregistrer_la_matrice=__xer;
                      }
                      
                      let obj={
                      "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                      "__xva" : {
                      "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                      "source_compile" : obj2.__xva ,
                      "rev_du_disque" : obj1.__xva ,
                      "bouton_compiler" : bouton_compiler ,
                      "pas_de_message_de_succes" : pas_de_message_de_succes ,
                      "matrice_source" : matrice_source ,
                      "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                      "enregistrer_la_matrice" : enregistrer_la_matrice
                      }
                      };
                      __gi1.envoyer_un_message_au_worker( obj );
                    */
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                }
            }else{
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
            }
        }else{
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de chargement  du parseur js ' + __gi1.__rev1.nl2()} );
        }
    }
    /*
      =============================================================================================================
    */
    normaliser_php( src_php ){
        if(this.#parseur_phpparseur === null){
            try{
                this.#parseur_phpparseur=window.PhpParser.Engine( {"parser" : {"extractDoc" : true} ,"ast" : {"withPositions" : true}} );
            }catch(e){
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de chargement de php parseur ' + __gi1.__rev1.nl2( e )} ));
            }
        }
        if(this.#parseur_phpparseur !== null){
            let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
            let php_moins_commentaires_sql=src_php.replace( regex , '' );
            let ast_de_php=null;
            /*
              =============================================================================================
              src->ast
            */
            try{
                ast_de_php=this.#parseur_phpparseur.parseCode( php_moins_commentaires_sql );
            }catch(e1){
                if(e1.message.indexOf( 'on line ' )){
                    let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                    console.log( tt );
                    if(__gi1.est_num( tt )){
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                }
            }
            /*
              =============================================================================================
              ast->rev
            */
            let obj1=this.#objet_conversion_astphpparseur_vers_rev1.traite_ast( ast_de_php , {} );
            if(obj1.__xst === __xsu){
                var obj2=this.#objet_conversion_rev_vers_php.c_rev_vers_php( obj1.__xva , {} );
                /*
                  =====================================================================================
                  rev -> php 
                */
                if(obj2.__xst === __xsu){
                    return({"__xst" : __xsu ,"php_vers_rev" : obj1 ,"rev_vers_php" : obj2});
                }else{
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du rev en php ' + __gi1.__rev1.nl2()} ));
                }
            }else{
                return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du php en rev ' + __gi1.__rev1.nl2()} ));
            }
        }else{
            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de chargement de phpparseur ' + __gi1.__rev1.nl2()} ));
        }
    }
    /*
      =============================================================================================================
    */
    compiler_source1( mat , d , le_message_du_serveur=null ){
        let xx=__gi1.__rev1.matrice_vers_source_rev1( mat , d , true , d + 1 );
        let parametres_entree=xx.__xva;
        /* console.log(le_message_du_serveur.__xva); */
        let pas_de_message_de_succes=le_message_du_serveur.__xva.hasOwnProperty( 'pas_de_message_de_succes' ) ?
          ( 
            le_message_du_serveur.__xva.pas_de_message_de_succes
          ) : ( 
            0
          );
        let bouton_compiler=le_message_du_serveur.__xva.hasOwnProperty( 'bouton_compiler' ) ? ( le_message_du_serveur.__xva.bouton_compiler ) : ( '' );
        /*
          A partir de ce nombre de lignes, on ne transmet pas la matrice du rev mais seumement le source_texte.
          Ce dernier sera converti en matrice dans le php.
          Si la matrice est trop grosse, il y a une erreur de transmission des données.
          
        */
        if(!le_message_du_serveur.__xva.hasOwnProperty('contenu_bdd')){
            debugger;
        }
        let nombre_max_de_lignes_dans_la_matrice=64000;
        if(le_message_du_serveur.__xva.contenu_bdd['T0.chx_dossier_id_source'] === null){
            /*
              si le fichier n'existe pas sur disque, on compile le version rev
            */
            if(le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] === null
                   || le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] === ''
            ){
                /*
                  si le contenu rev est vide
                */
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev est vide et le source n\'est pas rattaché à un répertoire ' + __gi1.__rev1.nl2()} );
            }else{
                if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.htm'
                       || le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 5 , 5 ) === '.html'
                ){
                    /*
                      on transforme le rev en html 
                    */
                    var obj1=this.#objet_conversion_rev_vers_html.c_rev_vers_html( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                            "__xva" : {
                                "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( obj );
                        /* debugger */
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du html n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.php'
                ){
                    /*
                      on transforme le rev en php 
                    */
                    var obj1=this.#objet_conversion_rev_vers_php.c_rev_vers_php( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                            "__xva" : {
                                "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( obj );
                        /* debugger */
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du html n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 3 , 3 ) === '.js'
                ){
                    /*
                      on transforme le rev en js
                    */
                    var obj1=this.#objet_conversion_rev_vers_js.c_rev_vers_js( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                            "__xva" : {
                                "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( obj );
                        /* debugger */
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du html n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.sql'
                ){
                    /*
                      on transforme le rev en sql
                    */
                    let tableau1=__gi1.__rev1.txt_en_tableau( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] );
                    let obj1=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj1.__xst === __xsu){
                        /* on transforme le rev en sql */
                        let obj2=this.#objet_conversion_rev_vers_sql.c_tab_vers_sql( obj1.__xva , {} );
                        if(obj2.__xst === __xsu){
                            let obj={
                                "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                                "__xva" : {
                                    "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "enregistrer_la_matrice" : __xsu
                                }
                            };
                            __gi1.envoyer_un_message_au_worker( obj );
                        }else{
                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                        }
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du sql n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.css'
                ){
                    let obj1=this.#objet_conversion_rev_vers_css.c_rev_vers_css( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                            "__xva" : {
                                "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( obj );
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du css n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.rev'
                ){
                    /*
                      on transforme le rev en rev
                    */
                    let tableau1=__gi1.__rev1.txt_en_tableau( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] );
                    let obj1=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj1.__xst === __xsu){
                        let obj2=__gi1.__rev1.matrice_vers_source_rev1( obj1.__xva , 0 , true , 1 );
                        if(obj2.__xst === __xsu){
                            let obj={
                                "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                                "__xva" : {
                                    "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "enregistrer_la_matrice" : __xsu
                                }
                            };
                            __gi1.envoyer_un_message_au_worker( obj );
                        }else{
                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de conversion de matrice vers rev ' + __gi1.__rev1.nl2()} );
                        }
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de conversion de rev vers matrice ' + __gi1.__rev1.nl2()} );
                    }
                }else{
                    /*
                      on transforme le rev en texte
                    */
                    let tableau1=__gi1.__rev1.txt_en_tableau( le_message_du_serveur.__xva.contenu_bdd['T0.cht_rev_source'] );
                    let obj1=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj1.__xst === __xsu){
                        let obj2=this.#objet_conversion_texte_vers_rev1.c_rev_vers_texte( obj1.__xva , 0 , 0 );
                        if(obj2.__xst === __xsu){
                            let obj={
                                "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                                "__xva" : {
                                    "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "enregistrer_la_matrice" : __xsu
                                }
                            };
                            __gi1.envoyer_un_message_au_worker( obj );
                        }else{
                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le rev du texte n\'a pas pu être convertit ' + __gi1.__rev1.nl2()} );
                        }
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du texte n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }
            }
        }else{
            /*
              on transforme le source du disque en rev puis le rev en source
            */
            if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.htm'
                   || le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 5 , 5 ) === '.html'
            ){
                /*
                  =====================================================================================
                  html
                */
                var obj1=this.#objet_conversion_html_vers_rev.TransformHtmlEnRev( le_message_du_serveur.__xva['contenu_disque'] , 0 , {} );
                if(obj1.__xst === __xsu){
                    var obj2=this.#objet_conversion_rev_vers_html.c_rev_vers_html( obj1.__xva , {} );
                    if(obj2.__xst === __xsu){
                        let matrice_source=null;
                        let enregistrer_la_matrice=__xsu;
                        if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                            matrice_source=obj2.matriceFonction;
                        }else{
                            enregistrer_la_matrice=__xer;
                        }
                        let obj={
                            "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                            "__xva" : {
                                "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                "source_compile" : obj2.__xva ,
                                "rev_du_disque" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "matrice_source" : matrice_source ,
                                "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                                "enregistrer_la_matrice" : enregistrer_la_matrice
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( obj );
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du rev en html ' + __gi1.__rev1.nl2()} );
                    }
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du html en rev ' + __gi1.__rev1.nl2()} );
                }
            }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.php'
            ){
                /*
                  =====================================================================================
                  php
                */
                let a=this.normaliser_php( le_message_du_serveur.__xva['contenu_disque'] );
                if(a.__xst === __xsu){
                    let matrice_source=null;
                    let enregistrer_la_matrice=__xsu;
                    if(a.rev_vers_php.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                        matrice_source=a.rev_vers_php.matriceFonction;
                    }else{
                        enregistrer_la_matrice=__xer;
                    }
                    let obj={
                        "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                        "__xva" : {
                            "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                            "source_compile" : a.rev_vers_php.__xva ,
                            "rev_du_disque" : a.php_vers_rev.__xva ,
                            "bouton_compiler" : bouton_compiler ,
                            "pas_de_message_de_succes" : pas_de_message_de_succes ,
                            "matrice_source" : matrice_source ,
                            "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                            "enregistrer_la_matrice" : enregistrer_la_matrice
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'Erreur de normalisation du php ' + __gi1.__rev1.nl2()} );
                }
            }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.sql'
            ){
                /*
                  =====================================================================================
                  sql
                */
                let ast_de_sql=null;
                try{
                    ast_de_sql=window.sqliteParser( le_message_du_serveur.__xva['contenu_disque'] , {} );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(__gi1.est_num( tt )){
                            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                /*
                  on récupère les commentaires pour les meta 
                */
                var tableau_des_commentaires=[];
                const matches=le_message_du_serveur.__xva['contenu_disque'].match( /\/\*([\s\S]*?)\*\//g );
                if(matches !== null){
                    for( let a=0 ; a < matches.length ; a++ ){
                        if(matches[a].substr( 0 , 2 ) === '/*' && matches[a].substr( matches[a].length - 2 , 2 ) === '*/'){
                            let tt=matches[a].substr( 2 , matches[a].length - 4 );
                            if(tt.indexOf( 'meta(' ) >= 0){
                                /* si il y a un meta, on essaie de le traiter */
                                let obj1=__gi1.__rev1.rev_tm( tt );
                                if(obj1.__xst === __xsu){
                                    tableau_des_commentaires.push( {"mat" : obj1.__xva ,"rev" : tt} );
                                }else{
                                    /* rien, on néglige les commentaires */
                                }
                            }
                        }
                    }
                }
                if(ast_de_sql === null){
                    /*
                      c'est peut être un sql vide qui ne contient que des commentaires meta
                    */
                    let t='';
                    if(tableau_des_commentaires.length > 0){
                        for( let i=0 ; i < tableau_des_commentaires.length ; i++ ){
                            t+=tableau_des_commentaires[i].rev;
                        }
                        debugger;
                        t2.value=t;
                        return({"__xst" : __xsu});
                    }else{
                        debugger;
                        t2.value='';
                        return({"__xst" : __xsu});
                    }
                }else{
                    let obj1=this.#objet_conversion_astsqliteparseur_vers_rev1.traite_ast_de_sqliteparseur( ast_de_sql , {} , tableau_des_commentaires );
                    if(obj1.__xst === __xsu){
                        let tableau1=__gi1.__rev1.txt_en_tableau( obj1.__xva );
                        let obj2=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                        if(obj2.__xst === __xsu){
                            /* on transforme le rev en sql */
                            let obj3=this.#objet_conversion_rev_vers_sql.c_tab_vers_sql( obj2.__xva , {} );
                            if(obj3.__xst === __xsu){
                                let matrice_source=null;
                                let enregistrer_la_matrice=__xsu;
                                if(obj2.__xva.length <= nombre_max_de_lignes_dans_la_matrice){
                                    matrice_source=obj2.__xva;
                                }else{
                                    enregistrer_la_matrice=__xer;
                                }
                                let obj={
                                    "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                                    "__xva" : {
                                        "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                        "source_compile" : obj3.__xva ,
                                        "rev_du_disque" : obj1.__xva ,
                                        "bouton_compiler" : bouton_compiler ,
                                        "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                        "matrice_source" : matrice_source ,
                                        "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                                        "enregistrer_la_matrice" : enregistrer_la_matrice
                                    }
                                };
                                __gi1.envoyer_un_message_au_worker( obj );
                            }else{
                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                            }
                        }else{
                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du sql n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                        }
                        return({"__xst" : __xsu});
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
                    }
                }
            }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 3 , 3 ) === '.js'
            ){
                /*
                  =====================================================================================
                  javascript
                */
                let aa=this.normaliser_javascript( le_message_du_serveur.__xva['contenu_disque'] );
                if(aa.__xst === __xsu){
                    let matrice_source=null;
                    let enregistrer_la_matrice=__xsu;
                    if(aa.rev_vers_js.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                        matrice_source=aa.rev_vers_js.matriceFonction;
                    }else{
                        enregistrer_la_matrice=__xer;
                    }
                    let obj={
                        "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                        "__xva" : {
                            "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                            "source_compile" : aa.rev_vers_js.__xva ,
                            "rev_du_disque" : aa.js_vers_rev.__xva ,
                            "bouton_compiler" : bouton_compiler ,
                            "pas_de_message_de_succes" : pas_de_message_de_succes ,
                            "matrice_source" : matrice_source ,
                            "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                            "enregistrer_la_matrice" : enregistrer_la_matrice
                        }
                    };
                    __gi1.envoyer_un_message_au_worker( obj );
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                }
            }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.css'
            ){
                /*
                  =====================================================================================
                  css
                */
                if(this.#parseur_cssparseur === null){
                    try{
                        this.#parseur_cssparseur=postcss.parse( 'html{}' , {} );
                    }catch(e){
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de chargement  du parseur css ' + __gi1.__rev1.nl2()} );
                    }
                }
                if(this.#parseur_cssparseur !== null){
                    let ast_de_css=null;
                    try{
                        ast_de_css=window.postcss.parse( le_message_du_serveur.__xva['contenu_disque'] , {} );
                        try{
                            let obj1=this.#objet_conversion_astcss_vers_rev1.traite_ast_postcss( ast_de_css , {} );
                            if(obj1.__xst === __xsu){
                                let obj2=this.#objet_conversion_rev_vers_css.c_rev_vers_css( obj1.__xva , {} );
                                if(obj2.__xst === __xsu){
                                    let matrice_source=null;
                                    let enregistrer_la_matrice=__xsu;
                                    if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                                        matrice_source=obj2.matriceFonction;
                                    }else{
                                        enregistrer_la_matrice=__xer;
                                    }
                                    let obj={
                                        "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                                        "__xva" : {
                                            "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                            "source_compile" : obj2.__xva ,
                                            "rev_du_disque" : obj1.__xva ,
                                            "bouton_compiler" : bouton_compiler ,
                                            "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                            "matrice_source" : matrice_source ,
                                            "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                                            "enregistrer_la_matrice" : enregistrer_la_matrice
                                        }
                                    };
                                    __gi1.envoyer_un_message_au_worker( obj );
                                }else{
                                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du css n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                                }
                            }else{
                                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur dans parseur css ' + __gi1.__rev1.nl2()} );
                            }
                        }catch(e1){
                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur dans parseur css ' + __gi1.__rev1.nl2( e )} );
                        }
                    }catch(e1){
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur dans parseur css ' + __gi1.__rev1.nl2( e )} );
                    }
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de chargement  du parseur css ' + __gi1.__rev1.nl2()} );
                }
            }else if(le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].substr( le_message_du_serveur.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.rev'
            ){
                let tableau1=__gi1.__rev1.txt_en_tableau( le_message_du_serveur.__xva['contenu_disque'] );
                let obj1=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                if(obj1.__xst === __xsu){
                    let obj2=__gi1.__rev1.matrice_vers_source_rev1( obj1.__xva , 0 , true , 1 );
                    if(obj2.__xst === __xsu){
                        let matrice_source=null;
                        let enregistrer_la_matrice=__xsu;
                        if(obj1.__xva.length <= nombre_max_de_lignes_dans_la_matrice){
                            matrice_source=obj1.__xva;
                        }else{
                            enregistrer_la_matrice=__xer;
                        }
                        let obj={
                            "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                            "__xva" : {
                                "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                "source_compile" : obj2.__xva ,
                                "rev_du_disque" : obj2.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "matrice_source" : matrice_source ,
                                "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                                "enregistrer_la_matrice" : enregistrer_la_matrice
                            }
                        };
                        __gi1.envoyer_un_message_au_worker( obj );
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de conversion de matrice vers rev ' + __gi1.__rev1.nl2()} );
                    }
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur de conversion de rev vers matrice ' + __gi1.__rev1.nl2()} );
                }
            }else{
                let obj1=this.#objet_conversion_texte_vers_rev1.texte1_vers_rev( le_message_du_serveur.__xva['contenu_disque'] , {} );
                if(obj1.__xst === __xsu){
                    let tableau1=__gi1.__rev1.txt_en_tableau( obj1.__xva );
                    let obj2=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj2.__xst === __xsu){
                        /* on transforme le rev en texte */
                        let obj3=this.#objet_conversion_texte_vers_rev1.c_rev_vers_texte( obj2.__xva , 0 , 0 );
                        if(obj3.__xst === __xsu){
                            let matrice_source=null;
                            let enregistrer_la_matrice=__xer;
                            let obj={
                                "__xac" : 'pm1(m1(n1(c_sources1),f1(enregistrer_un_source_compile1(' + parametres_entree + '))))' ,
                                "__xva" : {
                                    "contenu_bdd" : le_message_du_serveur.__xva.contenu_bdd ,
                                    "source_compile" : obj3.__xva ,
                                    "rev_du_disque" : obj1.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "matrice_source" : matrice_source ,
                                    "chi_id_source" : le_message_du_serveur.__xva.contenu_bdd['T0.chi_id_source'] ,
                                    "enregistrer_la_matrice" : enregistrer_la_matrice
                                }
                            };
                            __gi1.envoyer_un_message_au_worker( obj );
                        }else{
                            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
                        }
                    }else{
                        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu rev du texte n\'est pas bien formaté ' + __gi1.__rev1.nl2()} );
                    }
                }else{
                    __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'erreur dans parseur texte ' + __gi1.__rev1.nl2()} );
                }
            }
        }
        return({"__xst" : __xsu});
        /* __gi1.retablir_les_elements_masques( null ); */
        /* __gi1.remplis_les_messages_et_affiche( null ); */
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            __gi1.stockage_local['zones_sauvegardées']={};
        }
        __gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        localStorage.setItem( __gi1.cle_lst0 , JSON.stringify( __gi1.stockage_local ) );
    }
}
export{_developpement1 as _developpement1};