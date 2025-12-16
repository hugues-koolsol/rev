import {z_rev_vers_txt1} from './z_rev_vers_txt1.js';
/*
*/
class ecran_rev_vers_txt1{
    moi='ecran_rev_vers_txt1';
    /*
      =============================================================================================================
    */
    #objet_conversion_rev_vers_texte=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d ){
        /* console.log( 'constructor fonctions 1' , e ); */
        this.#objet_conversion_rev_vers_texte=new z_rev_vers_txt1( '#objet_conversion_rev_vers_texte' , __gi1.__rev1 );
    }
    /*
      =============================================================================================================
    */
    rev_vers_texte1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }
        }
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        __gi1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        let tableau1=__gi1.__rev1.txt_en_tableau( t1.value );
        let obj1=__gi1.__rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        if(obj1.__xst === __xsu){
            /* on transforme le rev en texte */
            let obj2=this.#objet_conversion_rev_vers_texte.c_rev_vers_texte( obj1.__xva , 0 , 0 );
            if(obj2.__xst === __xsu){
                t2.value=obj2.__xva;
                return({"__xst" : __xsu});
            }else{
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
            }
        }else{
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    texte1_vers_rev( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        let options={"nettoyer_html" : false};
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
                    mettre_en_stockage_local=parseInt( mat[i + 1][1] );
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][1] === 'nettoyer_html' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        if(mat[j + 1][1] === 'true'){
                            options.nettoyer_html=true;
                        }
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( 'ecran_rev_vers_txt1' , t1.value );
                }
                try{
                    let obj1=this.#objet_conversion_rev_vers_texte.texte1_vers_rev( t1.value , {} );
                    if(obj1.__xst === __xsu){
                        t2.value=obj1.__xva;
                        return({"__xst" : __xsu});
                    }else{
                        return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2() + '<br />erreur lors de la convertion du texte'} ));
                    }
                }catch(e2){
                    return(__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : __gi1.__rev1.nl2( e2 ) + '<br />erreur lors de la convertion du texte'} ));
                }
            }
        }
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
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`"àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
n'ont pas le même aspect car ils ont un encodage différent.
J'aimerais bien que les navigateurs fassent la même chose dans le zones textarea.`;
        document.getElementById( 'vv_txtarea_txt_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t=`Bonjour le monde !:-)`;
        document.getElementById( 'vv_txtarea_txt_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ecran_rev_txt( mat , d ){
        let t='';
        t+='<h1>convertion de rev vers txt</h1>';
        /*
        */
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_txt_rev1' );
        /*  */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_rev_vers_txt1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_rev_vers_txt1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_txt_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && __gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'ecran_rev_vers_txt1' )
        ){
            t+=__gi1.stockage_local['zones_sauvegardées']['ecran_rev_vers_txt1'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        /*
        */
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(ecran_rev_vers_txt1),f1(texte1_vers_rev(zone_source(vv_txtarea_txt_rev1),zone_resultat(vv_txtarea_txt_rev2),mettre_en_stockage_local(1))))';
        t+='" title="cvt" >txt-&gt;rev 1</div>';
        t+=__gi1.__fnt1.boutons_rev3( 'vv_txtarea_txt_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_txt_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        /*
        */
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+='    <div ';
        t+=' class="rev_bouton yy__1" ';
        t+=' data-rev_click="';
        t+='m1(n1(ecran_rev_vers_txt1),f1(rev_vers_texte1(zone_source(vv_txtarea_txt_rev2),zone_resultat(vv_txtarea_txt_rev3))))';
        t+='" title="convertir en rev" >rev-&gt;txt</div>';
        /*  */
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_txt_rev3' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_txt_rev3" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        __gi1.maj_contenu_principal( t );
        __gi1.maj_hash( mat , 0 );
        return({"__xst" : __xsu});
    }
}
export{ecran_rev_vers_txt1 as ecran_rev_vers_txt1};