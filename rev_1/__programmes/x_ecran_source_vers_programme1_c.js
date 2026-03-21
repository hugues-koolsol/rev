class x_ecran_source_vers_programme1{
    /*
      =============================================================================================================
    */
    moi='x_ecran_source_vers_programme1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            this.__gi1.stockage_local['zones_sauvegardées']={};
        }
        this.__gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]={"valeur" : valeur};
        localStorage.setItem( this.__gi1.cle_lst0 , JSON.stringify( this.__gi1.stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`<?php
print('hella');`;
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
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            let decallage_gauche=parseInt( document.getElementById( 'decallage_gauche' ).value , 10 );
            let nom_de_la_variable=document.getElementById( 'nom_de_la_variable' ).value;
            this.__gi1.zone_d_edition_en_cours=zone_source;
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
            o1+=this.transforme_en_js( aa , decallage_gauche , nom_de_la_variable );
            t2.value=o1;
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ecrire_boucle1( mat , d ){
        let nvc=document.getElementById( 'vv_nom_de_la_variable_compteur' ).value;
        let nvm=document.getElementById( 'vv_nom_de_la_variable_matrice' ).value;
        let tab=document.getElementById( 'vv_liste_des_variables_internes' ).value.split( ',' );
        let t='let ' + nvc + '=' + nvm + '.length;\n';
        let prec='';
        for( let i=tab.length - 1 ; i >= 0 ; i-- ){
            let esp=i >= 1 ? ( '    '.repeat( i * 2 ) ) : ( '' );
            let x='';
            x+=esp + 'for(let ' + tab[i] + '=' + (i === 0 ? ( '1' ) : ( tab[i - 1] + '+1' )) + ' ; ' + tab[i] + ' < ' + nvc + ' ; ' + tab[i] + '=' + nvm + '[' + tab[i] + '][12]){\n';
            if(prec === ''){
                x+=esp + '    if(' + nvm + '[' + tab[i] + '][1]===\'xxxxx' + i + '\' && ' + nvm + '[' + tab[i] + '][2]===\'f\' && ' + nvm + '[' + tab[i] + '][8]===1 && ' + nvm + '[' + tab[i] + '+1][2]===\'c\'){\n';
                x+=esp + '        /* */\n';
            }else{
                x+=esp + '    if(' + nvm + '[' + tab[i] + '][1]===\'xxxxx' + i + '\' && ' + nvm + '[' + tab[i] + '][2]===\'f\'){\n';
                x+=prec;
            }
            x+=esp + '    }\n';
            x+=esp + '}\n';
            prec=x;
        }
        t+=prec;
        document.getElementById( 'vv_txtarea_html_rev2' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let t='';
        t+='<h1>convertion de programme</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev1' );
        /*  */
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(' + this.moi + '),f1(donnees_de_test1()))" title="charger les données de test" >pgm js</div>    ';
        t+='    <div class="rev_bouton" style="float:right;" data-rev_click="m1(n1(' + this.moi + '),f1(donnees_de_test2()))" title="charger les données de test2" >pgp php</div>';
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev1" data-editeur1="source_editeur1" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(this.__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && this.__gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( this.moi )
               && this.__gi1.stockage_local['zones_sauvegardées'][this.moi].hasOwnProperty( 'valeur' )
        ){
            t+=this.__gi1.stockage_local['zones_sauvegardées'][this.moi]['valeur'].replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( /"/g , '&quot;' );
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        /*  */
        t+='    <select title="décallage à gauche" id="decallage_gauche"><option value="12">12</option><option value="8">8</option><option value="4">4</option><option value="16">16</option></select>';
        t+='    <select title="nom de la variable" id="nom_de_la_variable"><option value="src_serveur_js2">src_serveur_js2</option><option value="o1">o1</option><option value="o2">o2</option><option value="t">t</option></select>';
        /*  */
        t+='    <div class="rev_bouton yy__1" data-rev_click="';
        t+='m1(n1(' + this.moi + '),f1(';
        t+='source_vers_genere1(zone_source(vv_txtarea_html_rev1),zone_resultat(vv_txtarea_html_rev2),mettre_en_stockage_local(1),transformation(js))';
        t+='))" title="cvt js" >src-&gt;js</div>';
        /*  */
        t+=this.__gi1.__fnt1.boutons_edition1( 'vv_txtarea_html_rev2' );
        t+='  </div>';
        t+='  <textarea id="vv_txtarea_html_rev2" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        t+='</textarea>';
        t+='</div>';
        t+='<br />';
        t+='<input type="text" value="mat" id="vv_nom_de_la_variable_matrice" />';
        t+='<input type="text" value="l01" id="vv_nom_de_la_variable_compteur" />';
        t+='<input type="text" value="i,j,k,l,m,n" id="vv_liste_des_variables_internes" />';
        t+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(ecrire_boucle1()))" title="ecrire boucle 1" >ecrire boucle 1</div>';
        /*
          for(let i=1 ; i < l01 ; i=matrice_requete[i][12]){
          if(matrice_requete[i][1]==='sélectionner' && matrice_requete[i][2]==='f' ){
          for(let j=i+1 ; j < l01 ; j=matrice_requete[j][12]){
          if(matrice_requete[j][1]==='provenance' && matrice_requete[i][2]==='f' ){
          }
          }
          }
          }
          
        */
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'source vers programme' );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_source_vers_programme1 as x_ecran_source_vers_programme1};