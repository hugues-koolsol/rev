import {w_ast_js_vers_rev1} from './f0?n0=w_ast_js_vers_rev1_.js';
import {w_rev_vers_js1} from './f0?n0=w_rev_vers_js1_.js';
class x_ecran_rev_vers_js1{
    __gi1=null;
    /*
      =============================================================================================================
    */
    #parseur_javascript=null;
    #objet_conversion_ast_js_vers_rev=null;
    #objet_conversion_rev_vers_js=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        this.__gi1.charger_script_dynamique( '/f0?n0=bibliotheques_externes/acorn1.js' );
        this.#objet_conversion_ast_js_vers_rev=new w_ast_js_vers_rev1( '#objet_conversion_ast_js_vers_rev' , this.__gi1 );
        this.#objet_conversion_rev_vers_js=new w_rev_vers_js1( '#objet_conversion_rev_vers_js' , this.__gi1 );
    }
    /*
      =============================================================================================================
    */
    rev_vers_js1( mat , d ){
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
        /* on transforme le rev en js */
        let obj1=this.#objet_conversion_rev_vers_js.c_rev_vers_js( t1.value , {} );
        if(obj1.__xst === __xsu){
            t2.value=obj1.__xva;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    js_vers_rev1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let normaliser_le_rev=0;
        let mettre_en_stockage_local=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
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
            }else if(mat[i][2] === 'f' && mat[i][1] === 'normaliser_le_rev' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                normaliser_le_rev=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(this.#parseur_javascript === null){
            try{
                this.#parseur_javascript=window.acorn.Parser;
            }catch(e){
                return({"__xst" : __xer});
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.__gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'x_ecran_rev_vers_js1' , t1.value );
                }
                let obj=null;
                let tableau_des_commentaires_js=[];
                try{
                    /*
                      On retire les commentaires contenant le texte SQL.
                    */
                    let js_moins_commentaires_sql=t1.value;
                    let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
                    js_moins_commentaires_sql=js_moins_commentaires_sql.replace( regex , '' );
                    obj=this.#parseur_javascript.parse( js_moins_commentaires_sql , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
                }catch(e){
                    if(e.message){
                        if(e.message.indexOf( '(' ) >= 0 && e.message.indexOf( '(' ) >= 0 && e.message.indexOf( ':' ) >= 0){
                            /* && e.message.indexOf[ 'Unexpected token ' ] >= 0]{ */
                            let tt=e.message.substr( e.message.indexOf( 'Unexpected token ' ) + 17 );
                            let lig_col=null;
                            /* const text = "anything(aa:bb)otherthing"; */
                            const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                            const match=tt.match( regex );
                            if(match && this.__gi1.est_num( match[1] ) && this.__gi1.est_num( match[2] )){
                                lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                            }
                            /*
                              this.__gi1.__rev1.empiler _ erreur( {
                              "__xst" : __xer ,
                              "__xme" : this.__gi1.__rev1.nl2( e ) + ' <br />erreur dans le javascript :' + e.message ,
                              "zone_edition" : this.__gi1.zone_d_edition_en_cours ,
                              "lig_col" : lig_col
                              } );
                              
                            */
                            this.__gi1.ajoute_message( {
                                    "__xst" : __xer ,
                                    "__xme" : 'Erreur dans le javascript ' + this.__gi1.nl2( e ) ,
                                    "zone_edition" : this.__gi1.zone_d_edition_en_cours ,
                                    "lig_col" : lig_col
                                } );
                            this.__gi1.affiche_les_messages();
                            return({"__xst" : __xer ,"cumul_message" : __xer});
                        }else if(e.message.indexOf( 'Invalid number ' ) >= 0){
                            let tt=e.message.substr( e.message.indexOf( 'Invalid number ' ) + 15 );
                            let lig_col=null;
                            /* const text = "anything(aa:bb)otherthing"; */
                            const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                            const match=tt.match( regex );
                            if(match && this.__gi1.est_num( match[1] ) && this.__gi1.est_num( match[2] )){
                                lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                            }
                            /*
                              this.__gi1.__rev1.empiler _ erreur( {
                              "__xst" : __xer ,
                              "__xme" : this.__gi1.__rev1.nl2( e ) + ' <br />erreur dans le javascript :' + e.message ,
                              "zone_edition" : this.__gi1.zone_d_edition_en_cours ,
                              "lig_col" : lig_col
                              } );
                            */
                            this.__gi1.ajoute_message( {
                                    "__xst" : __xer ,
                                    "__xme" : this.__gi1.__rev1.nl2( e ) + ' <br />erreur dans le javascript :' + e.message ,
                                    "zone_edition" : this.__gi1.zone_d_edition_en_cours ,
                                    "lig_col" : lig_col
                                } );
                            this.__gi1.affiche_les_messages();
                            return({"__xst" : __xer ,"cumul_message" : __xer});
                        }else{
                            this.__gi1.ajoute_message( {
                                    "__xst" : __xer ,
                                    "__xme" : this.__gi1.__rev1.nl2( e ) + ' <br />erreur dans le javascript :' + e.message ,
                                    "zone_edition" : this.__gi1.zone_d_edition_en_cours ,
                                    "lig_col" : lig_col
                                } );
                        }
                    }
                    return({"__xst" : __xer});
                }
                /*
                  on retire les lignes de commentaires qui ne contiennent que
                  '<![CDATA[',
                  ']]>',
                  '<source_javascript_rev>',
                  '</source_javascript_rev>'
                  car ils seront réinsérés automatiquement.
                  on retire aussi les commentaires vides.
                */
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
                /* on transforme le ast du js en rev */
                let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
                if(obj1.__xst === __xsu){
                    t2.value=obj1.__xva;
                    if(normaliser_le_rev === 1){
                        let mato1=this.__gi1.__rev1.rev_tm( obj1.__xva );
                        if(mato1.__xst === __xsu){
                            let obj_txt_formatté=this.__gi1.__rev1.matrice_vers_source_rev1( mato1.__xva , 0 , true , 1 );
                            if(obj_txt_formatté.__xst === __xsu){
                                t2.value=obj_txt_formatté.__xva;
                                return({"__xst" : __xsu});
                            }
                        }
                        this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le format du rev n\'est pas correcte  ' + this.__gi1.__rev1.nl2()} );
                        this.__gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                        /* formater_le_rev_de_textarea1 */
                    }
                    return({"__xst" : __xsu});
                }else{
                    /* this.__gi1.__rev1.empiler _ erreur( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} ); */
                    this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2()} );
                    this.__gi1.affiche_les_messages();
                    return({"__xst" : __xer ,"cumul_message" : __xer});
                }
            }
        }
        return({"__xst" : __xsu});
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
        let t=`function x2(x){return x*2;}`;
        document.getElementById( 'vv_txtarea_js_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t=`var test=a===2;
(function toto(){
})();
var test0=a===2,test1=a==2;

a.b("c").d += '<e f="g">' + h.i[i] + "</e>";

for (var i = 0; i < b; i++) {
  a.b("c").d += '<e>' + h.i[i] + "</e>";
}
t = " ".repeat(NBESPACESSOURCEPRODUIT * i);
t += " ".repeat(NBESPACESSOURCEPRODUIT * i);
/*
  =====================================================================================================================
*/


function tagada() {
  for (var i = 0; i < tab.length; i++) {
    document.getElementById("tugudu").innerHTML += '<div class="yyerreur">' + tab[i] + "</div>";
  }
  var numLignePrecedente = -1;
  for (var i = 0; i < tab.length; i++) {
    var id = tab[i];
  }
}

`;
        document.getElementById( 'vv_txtarea_js_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers js</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_js_rev1' );
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_js_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && this.__gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'x_ecran_rev_vers_js1' )
        ){
            t+=this.__gi1.stockage_local['zones_sauvegardées']['x_ecran_rev_vers_js1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(js_vers_rev1(zone_source(vv_txtarea_js_rev1),zone_resultat(vv_txtarea_js_rev2),mettre_en_stockage_local(1))))" title="convertir en rev" data-rev_event="1" tabindex="0">js-&gt;rev</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_rev3( 'vv_txtarea_js_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_js_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="m1(n1(x_ecran_rev_vers_js1),f1(rev_vers_js1(zone_source(vv_txtarea_js_rev2),zone_resultat(vv_txtarea_js_rev3))))" title="convertir en rev" data-rev_event="1" tabindex="0">rev-&gt;js</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_js_rev3' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_js_rev3" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'cvt js' );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_rev_vers_js1 as x_ecran_rev_vers_js1};