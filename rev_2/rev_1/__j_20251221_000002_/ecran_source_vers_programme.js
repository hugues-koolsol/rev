class ecran_source_vers_programme{
    /*
      =============================================================================================================
    */
    moi='ecran_source_vers_programme';
    /*
      =============================================================================================================
    */
    constructor( mat , d ){
        /* console.log( 'constructor fonctions 1' , e ); */
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            __gi1.stockage_local['zones_sauvegardées']={};
        }
        __gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]={"valeur" : valeur};
        localStorage.setItem( __gi1.cle_lst0 , JSON.stringify( __gi1.stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`<?php
echo 'hella';`;
        document.getElementById( 'vv_txtarea_html_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t='';
        t+='//\n';
        t+='var a=1;';
        document.getElementById( 'vv_txtarea_html_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    transforme_en_php( tab , decallage_gauche , nom_de_la_variable ){
        let o1='';
        for( let i=0 ; i < tab.length ; i++ ){
            let x=tab[i];
            x=x.trimEnd();
            if(x === '<?php'){
                o1+=' '.repeat( decallage_gauche ) + '$' + nom_de_la_variable + '.=\'<?\'.\'php\'.PHP_EOL;\r\n';
            }else{
                o1+=' '.repeat( decallage_gauche ) + '$' + nom_de_la_variable + '.=\'' + x.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'.PHP_EOL;\r\n';
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    transforme_en_js( tab , decallage_gauche , nom_de_la_variable ){
        let o1='';
        for( let i=0 ; i < tab.length ; i++ ){
            let x=tab[i];
            x=x.trimEnd();
            o1+=(' '.repeat( decallage_gauche ) + nom_de_la_variable) + '+=\'' + x.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\\r\\n\';\r\n';
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    source_vers_genere1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let transformation='';
        let mettre_en_stockage_local=1;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_resultat=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mettre_en_stockage_local=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && mat[i][1] === 'transformation' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                transformation=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            let decallage_gauche=parseInt( document.getElementById( 'decallage_gauche' ).value , 10 );
            let nom_de_la_variable=document.getElementById( 'nom_de_la_variable' ).value;
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.sauvegarder_contenu_en_localstorage( this.moi , t1.value );
                }
            }
            let o1='';
            let aa=t1.value.replace( /\r\n/g , '\n' ).split( '\n' );
            if(transformation === 'php'){
                o1+=this.transforme_en_php( aa , decallage_gauche , nom_de_la_variable );
            }else if(transformation === 'js'){
                o1+=this.transforme_en_js( aa , decallage_gauche , nom_de_la_variable );
            }
            t2.value=o1;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    point_d_entree( mat , d ){
        let t='';
        t+='<h1>convertion de programme</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev1' );
        /*  */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_source_vers_programme),f1(donnees_de_test1()))" title="charger les données de test" >pgm js</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(ecran_source_vers_programme),f1(donnees_de_test2()))" title="charger les données de test2" >pgp php</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && __gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'ecran_source_vers_programme' )
               && __gi1.stockage_local['zones_sauvegardées'].ecran_source_vers_programme.hasOwnProperty( 'valeur' )
        ){
            t+=__gi1.stockage_local['zones_sauvegardées']['ecran_source_vers_programme']['valeur'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        /*  */
        t+='    <select title="décallage à gauche" id="decallage_gauche"><option value="4">4</option><option value="8">8</option><option value="12">12</option></select>';
        t+='    <select title="nom de la variable" id="nom_de_la_variable"><option value="o1">o1</option><option value="o2">o2</option><option value="t">t</option></select>';
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(ecran_source_vers_programme),f1(';
        t+='source_vers_genere1(zone_source(vv_txtarea_html_rev1),zone_resultat(vv_txtarea_html_rev2),mettre_en_stockage_local(1),transformation(php))';
        t+='))" title="cvt php" >src-&gt;php</div>';
        /*  */
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(ecran_source_vers_programme),f1(';
        t+='source_vers_genere1(zone_source(vv_txtarea_html_rev1),zone_resultat(vv_txtarea_html_rev2),mettre_en_stockage_local(1),transformation(js))';
        t+='))" title="cvt js" >src-&gt;js</div>';
        /*  */
        t+=__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        __gi1.maj_contenu_principal( t );
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'source vers programme' );
        return({"__xst" : __xsu});
    }
}
export{ecran_source_vers_programme as ecran_source_vers_programme};