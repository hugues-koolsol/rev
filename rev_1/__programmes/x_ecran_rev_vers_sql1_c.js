import {w_ast_sqliteparseur_vers_rev1} from '/f0?n0=w_ast_sqliteparseur_vers_rev1_.js';
import {w_rev_vers_sql1} from '/f0?n0=w_rev_vers_sql1_.js';
class x_ecran_rev_vers_sql1{
    moi='x_ecran_rev_vers_sql1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    #objet_conversion_astsqliteparseur_vers_rev1=null;
    /*
      pour les js dans le html
    */
    #parseur_javascript=null;
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_rev_vers_js=null;
    /*
      pour le html dans le sql
    */
    #objet_conversion_html_vers_rev=null;
    #objet_conversion_rev_vers_html=null;
    /*
      pour le sql
    */
    #parseur_sqlparseur=null;
    #objet_conversion_astsqlparseur_vers_rev1=null;
    #objet_conversion_astsqlnikic_vers_rev1=null;
    #objet_conversion_rev_vers_sql=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        /* console.log( 'constructor fonctions 1' , e ); */
        this.__gi1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/sqlite_parser1_c.js' );
        this.#objet_conversion_astsqliteparseur_vers_rev1=new w_ast_sqliteparseur_vers_rev1( '#objet_conversion_astsqliteparseur_vers_rev1' , this.__gi1 );
        this.#objet_conversion_rev_vers_sql=new w_rev_vers_sql1( '#objet_conversion_rev_vers_sql' , this.__gi1 );
    }
    /*
      =============================================================================================================
    */
    rev_vers_sql1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }
        }
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.__gi1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        /* on transforme le rev en sql */
        let tableau1=this.__gi1.__rev1.txt_en_tableau( t1.value );
        let obj2=this.__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        if(obj2.__xst === __xsu){
            let obj0=this.#objet_conversion_rev_vers_sql.c_tab_vers_sql( obj2.__xva , false , true , '' );
            if(obj0.__xst === __xsu){
                t2.value=obj0.__xva;
                return({"__xst" : __xsu});
            }else{
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} );
            }
        }else{
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    sql1_vers_rev( mat , ind ){
        /*#
        
          if(this.#module_sqlite_parseur_charge === null){
              setTimeout( () => {
                      this.sql1_vers_rev( mat , ind );} , 200 );
          }
          if(this.#parseur_sqlite_parseur === null){
              try{
                  this.#parseur_sqlite_parseur=window.sqliteParser( 'select 1' , {} );
              }catch(e){
                  setTimeout( () => {
                          this.sql1_vers_rev( mat , ind );} , 20 );
                  return({"__xst" : __xsu});
              }
          }
        */
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.__gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'x_ecran_rev_vers_sql1' , t1.value );
                }
                let ast_de_sql=null;
                try{
                    ast_de_sql=window.sqliteParser( t1.value , {} );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(this.__gi1.est_num( tt )){
                            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                try{
                    /*
                      on récupère les commentaires pour les meta 
                    */
                    var tableau_des_commentaires=[];
                    const matches=t1.value.match( /\/\*([\s\S]*?)\*\//g );
                    if(matches !== null){
                        for( let a=0 ; a < matches.length ; a++ ){
                            if(matches[a].substr( 0 , 2 ) === '/*' && matches[a].substr( matches[a].length - 2 , 2 ) === '*/'){
                                let tt=matches[a].substr( 2 , matches[a].length - 4 );
                                if(tt.indexOf( 'meta(' ) >= 0){
                                    /* si il y a un meta, on essaie de le traiter */
                                    let obj1=this.__gi1.__rev1.rev_tm( tt );
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
                            t2.value=t;
                            return({"__xst" : __xsu});
                        }else{
                            t2.value='';
                            return({"__xst" : __xsu});
                        }
                    }else{
                        let obj1=this.#objet_conversion_astsqliteparseur_vers_rev1.traite_ast_de_sqliteparseur( ast_de_sql , {} , tableau_des_commentaires );
                        if(obj1.__xst === __xsu){
                            let tt=this.__gi1.__rev1.rev_tcm( obj1.__xva );
                            if(tt.__xst === __xsu){
                                let ttt=this.__gi1.__rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
                                if(ttt.__xst === __xsu){
                                    t2.value=ttt.__xva;
                                    return({"__xst" : __xsu});
                                }else{
                                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + '<br />de la matrice'} ));
                                }
                            }else{
                                return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + '<br />du rev produit'} ));
                            }
                        }else{
                            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
                        }
                    }
                }catch(e2){
                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2( e2 ) + '<br />erreur lors de la convertion du sql'} ));
                }
            }
        }
        return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            this.__gi1.stockage_local['zones_sauvegardées']={};
        }
        this.__gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        localStorage.setItem( this.__gi1.cle_lst0 , JSON.stringify( this.__gi1.stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`select a2 from toto`;
        document.getElementById( 'vv_txtarea_sql_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t=`select a1 from t1`;
        document.getElementById( 'vv_txtarea_sql_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers sql</h1>';
        /*
        */
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_sql_rev1' );
        /*  */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_sql1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_sql1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_sql_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && this.__gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'x_ecran_rev_vers_sql1' )
        ){
            t+=this.__gi1.stockage_local['zones_sauvegardées']['x_ecran_rev_vers_sql1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        /*
        */
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(x_ecran_rev_vers_sql1),f1(sql1_vers_rev(zone_source(vv_txtarea_sql_rev1),zone_resultat(vv_txtarea_sql_rev2),mettre_en_stockage_local(1))))';
        t+='" title="cvt" >sql-&gt;rev 1</div>';
        /*#
          // ancien code qui utilisait sql_parser_cst1
          t+='    <div class="rev_bouton yy__1" data-rev_click="';
          t+='m1(n1(x_ecran_rev_vers_sql1),f1(sql2_vers_rev(zone_source(vv_txtarea_sql_rev1),zone_resultat(vv_txtarea_sql_rev2))))';
          t+='" title="cvt" >sql-&gt;rev 2</div>';
        */
        t+=this.__gi1.__fnt1.boutons_rev3( 'vv_txtarea_sql_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_sql_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div ';
        t+=' class="rev_bouton yy__1" ';
        t+=' data-rev_click="';
        t+='m1(n1(x_ecran_rev_vers_sql1),f1(rev_vers_sql1(zone_source(vv_txtarea_sql_rev2),zone_resultat(vv_txtarea_sql_rev3),mettre_en_stockage_local(1))))';
        t+='" title="convertir en rev" >rev-&gt;sql</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_sql_rev3' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_sql_rev3" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'cvt sql' );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_rev_vers_sql1 as x_ecran_rev_vers_sql1};