const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
class __fnt1{
    /*
      =============================================================================================================
      fonctions côté client
    */
    moi='__fnt1';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    affiche_palette1( le_chetemel ){
        let a=this.getPageSize();
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=le_chetemel;
        setTimeout( function( p ){
                /* ajustement horizontal */
                let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                let tt=vv_sous_fenetre1.getBoundingClientRect();
                if(tt.right > p.width){
                    let nouveau_left=Math.max( parseInt( vv_sous_fenetre1.style.left.replace( /px/ , '' ) , 10 ) - (tt.right - p.width) , 0 );
                    if(nouveau_left >= 20){
                        nouveau_left-=20;
                    }
                    if(nouveau_left <= 10){
                        nouveau_left=0;
                    }
                    vv_sous_fenetre1.style.left=nouveau_left + 'px';
                }
                /* ajustement vertical */
                setTimeout( function( p ){
                        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                        let tt=vv_sous_fenetre1.getBoundingClientRect();
                        if(tt.bottom > p.height){
                            console.log( tt , p );
                            window.scrollTo( {"top" : parseInt( tt.bottom - p.height , 10 )} );
                        }
                } , 50 , p );
        } , 50 , a );
    }
    /*
      =============================================================================================================
    */
    selectionner_couleur_1( mat , d ){
        let l01=mat.length;
        let indice1=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'indice1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice1=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nombre_de_couleur_en_cours_de_selection=1;
        let couleur_en_cours_de_selection=1;
        let __radio_couleur_fond_1=document.getElementById( '__radio_couleur_fond_1' );
        let __radio_couleur_texte_1=document.getElementById( '__radio_couleur_texte_1' );
        if(__radio_couleur_fond_1 && __radio_couleur_texte_1){
            nombre_de_couleur_en_cours_de_selection=2;
            if(__radio_couleur_texte_1.checked){
                couleur_en_cours_de_selection=2;
            }
        }
        if(nombre_de_couleur_en_cours_de_selection === 1){
            try{
                let elem=this.__couleurs_web0[indice1];
                let __couleur1=document.getElementById( '__couleur1' );
                let vv_nom_couleur_selectionne1=document.getElementById( 'vv_nom_couleur_selectionne1' );
                __couleur1.value='#' + elem[0].substr( 0 , 6 );
                let tt='';
                if(elem[0].length > 6){
                    tt='<span style="background:' + elem[0].substr( 6 ).toLowerCase() + ';color:' + elem[1][2] + ';">' + elem[0].substr( 6 ).toLowerCase() + '</span>';
                    vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , elem[0].substr( 6 ).toLowerCase() );
                }else{
                    tt='<span style="background:#' + elem[0] + ';color:' + elem[1][2] + ';">#' + elem[0] + '</span>';
                    vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , '#' + elem[0] );
                }
                vv_nom_couleur_selectionne1.innerHTML=tt;
            } catch {}
        }else{
            let vv_nom_couleur_selectionne1=document.getElementById( 'vv_nom_couleur_selectionne1' );
            let vv_nom_couleur_selectionne2=document.getElementById( 'vv_nom_couleur_selectionne2' );
            if(couleur_en_cours_de_selection === 1){
                /* on sélectionne la couleur de fond donc on récupère la couleur du texte */
                let couleur_texte=document.getElementById( 'vv_nom_couleur_selectionne2' ).getAttribute( 'data-valeur_couleur2' );
                let elem=this.__couleurs_web0[indice1];
                let __couleur1=document.getElementById( '__couleur1' );
                __couleur1.value='#' + elem[0].substr( 0 , 6 );
                let tt='';
                if(elem[0].length > 6){
                    tt='<span style="background:' + elem[0].substr( 6 ).toLowerCase() + ';color:' + couleur_texte + ';">' + elem[0].substr( 6 ).toLowerCase() + ' / ' + couleur_texte + '</span>';
                    vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , elem[0].substr( 6 ).toLowerCase() );
                }else{
                    tt='<span style="background:#' + elem[0] + ';color:' + couleur_texte + ';">#' + elem[0] + ' / ' + couleur_texte + '</span>';
                    vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , '#' + elem[0] );
                }
                vv_nom_couleur_selectionne1.innerHTML=tt;
                vv_nom_couleur_selectionne2.innerHTML=tt;
            }else{
                /* on sélectionne la couleur de texte donc on récupère la couleur du fond */
                let couleur_fond=document.getElementById( 'vv_nom_couleur_selectionne1' ).getAttribute( 'data-valeur_couleur1' );
                let elem=this.__couleurs_web0[indice1];
                let __couleur2=document.getElementById( '__couleur2' );
                let vv_nom_couleur_selectionne2=document.getElementById( 'vv_nom_couleur_selectionne2' );
                __couleur2.value='#' + elem[0].substr( 0 , 6 );
                let tt='';
                if(elem[0].length > 6){
                    tt='<span style="background:' + couleur_fond + ';color:' + elem[0].substr( 6 ).toLowerCase() + ';">' + couleur_fond + ' / ' + elem[0].substr( 6 ).toLowerCase() + '</span>';
                    vv_nom_couleur_selectionne2.setAttribute( 'data-valeur_couleur2' , elem[0].substr( 6 ).toLowerCase() );
                }else{
                    tt='<span style="background:#' + couleur_fond + ';color:' + elem[0] + ';">' + couleur_fond + ' / #' + elem[0] + '</span>';
                    vv_nom_couleur_selectionne2.setAttribute( 'data-valeur_couleur2' , '#' + elem[0] );
                }
                vv_nom_couleur_selectionne1.innerHTML=tt;
                vv_nom_couleur_selectionne2.innerHTML=tt;
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    montrer_couleur_1( mat , d ){
        let l01=mat.length;
        let indice1=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'indice1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice1=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let nombre_de_couleur_en_cours_de_selection=1;
        let couleur_en_cours_de_selection=1;
        let __radio_couleur_fond_1=document.getElementById( '__radio_couleur_fond_1' );
        let __radio_couleur_texte_1=document.getElementById( '__radio_couleur_texte_1' );
        if(__radio_couleur_fond_1 && __radio_couleur_texte_1){
            nombre_de_couleur_en_cours_de_selection=2;
            if(__radio_couleur_texte_1.checked){
                couleur_en_cours_de_selection=2;
            }
        }
        let vv_nom_couleur_souris1=document.getElementById( 'vv_nom_couleur_souris1' );
        if(nombre_de_couleur_en_cours_de_selection === 1){
            try{
                let elem=this.__couleurs_web0[indice1];
                let tt='';
                if(elem[0].length > 6){
                    tt='<div style="display:inline-block;min-height:18px;background:' + elem[0].substr( 6 ).toLowerCase() + ';color:' + elem[1][2] + ';">' + elem[0].substr( 6 ).toLowerCase() + '</div>';
                }else{
                    tt='<span style="background:#' + elem[0] + ';color:#' + elem[1][2] + ';">#' + elem[0] + '</span>';
                }
                vv_nom_couleur_souris1.innerHTML=tt;
            } catch {}
        }else{
            let vv_nom_couleur_souris2=document.getElementById( 'vv_nom_couleur_souris2' );
            if(couleur_en_cours_de_selection === 1){
                /* on sélectionne la couleur de fond donc on récupère la couleur du texte */
                let couleur_texte=document.getElementById( 'vv_nom_couleur_selectionne2' ).getAttribute( 'data-valeur_couleur2' );
                let elem=this.__couleurs_web0[indice1];
                let tt='';
                if(elem[0].length > 6){
                    tt='<div style="display:inline-block;min-height:18px;background:' + elem[0].substr( 6 ).toLowerCase() + ';color:' + couleur_texte + ';">' + elem[0].substr( 6 ).toLowerCase() + ' / ' + couleur_texte + '</div>';
                }else{
                    tt='<span style="background:#' + elem[0] + ';color:' + couleur_texte + ';">#' + elem[0] + ' / ' + couleur_texte + '</span>';
                }
                vv_nom_couleur_souris1.innerHTML=tt;
                vv_nom_couleur_souris2.innerHTML=tt;
            }else{
                /* on sélectionne la couleur de texte donc on récupère la couleur du fond */
                let couleur_fond=document.getElementById( 'vv_nom_couleur_selectionne1' ).getAttribute( 'data-valeur_couleur1' );
                let elem=this.__couleurs_web0[indice1];
                let tt='';
                if(elem[0].length > 6){
                    tt='<div style="display:inline-block;min-height:18px;background:' + couleur_fond + ';color:' + elem[0].substr( 6 ).toLowerCase() + ';">' + couleur_fond + ' / ' + elem[0].substr( 6 ).toLowerCase() + '</div>';
                }else{
                    tt='<span style="background:' + couleur_fond + ';color:#' + elem[1][2] + ';">' + couleur_fond + ' / #' + elem[0] + '</span>';
                }
                vv_nom_couleur_souris1.innerHTML=tt;
                vv_nom_couleur_souris2.innerHTML=tt;
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    voir_couleur_du_selecteur1( mat , d ){
        let nom_zone='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_zone' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone=mat[i + 1][1];
            }
        }
        let nombre_de_couleur_en_cours_de_selection=1;
        let __radio_couleur_fond_1=document.getElementById( '__radio_couleur_fond_1' );
        let __radio_couleur_texte_1=document.getElementById( '__radio_couleur_texte_1' );
        if(__radio_couleur_fond_1 && __radio_couleur_texte_1){
            nombre_de_couleur_en_cours_de_selection=2;
        }
        if(nom_zone !== ''){
            if(nombre_de_couleur_en_cours_de_selection === 1){
                let vv_nom_couleur_selectionne1=document.getElementById( 'vv_nom_couleur_selectionne1' );
                let nouvelle_valeur=document.getElementById( nom_zone ).value;
                vv_nom_couleur_selectionne1.innerHTML='<span style="background:' + nouvelle_valeur + ';color:contrast-color(' + nouvelle_valeur + ');">' + nouvelle_valeur + '</span>';
                vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , nouvelle_valeur );
            }else{
                let couleur_texte=document.getElementById( 'vv_nom_couleur_selectionne2' ).getAttribute( 'data-valeur_couleur2' );
                let nouvelle_valeur=document.getElementById( nom_zone ).value;
                vv_nom_couleur_selectionne1.innerHTML='<span style="background:' + nouvelle_valeur + ';color:' + couleur_texte + ';">' + nouvelle_valeur + '/' + couleur_texte + '</span>';
                vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , nouvelle_valeur );
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    voir_couleur_du_selecteur2( mat , d ){
        let nom_zone='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_zone' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone=mat[i + 1][1];
            }
        }
        /* console.log('nom_zone',nom_zone,mat,d) */
        if(nom_zone !== ''){
            let couleur_fond=document.getElementById( 'vv_nom_couleur_selectionne1' ).getAttribute( 'data-valeur_couleur1' );
            let vv_nom_couleur_selectionne2=document.getElementById( 'vv_nom_couleur_selectionne2' );
            let nouvelle_valeur=document.getElementById( nom_zone ).value;
            vv_nom_couleur_selectionne2.innerHTML='<span style="background:' + couleur_fond + ';color:' + nouvelle_valeur + ';">' + couleur_fond + ' / ' + nouvelle_valeur + '</span>';
            vv_nom_couleur_selectionne2.setAttribute( 'data-valeur_couleur2' , nouvelle_valeur );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      // https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
      // note: minimal recommended contrast ratio is 4.5, or 3 for larger font-sizes
      // moi je prends 2.4
    */
    calcul_contraste( couleur_fond , couleur_texte ){
        function hexToRGBArray( color ){
            if(color.length === 3){
                color=color.charAt( 0 ) + color.charAt( 0 ) + color.charAt( 1 ) + color.charAt( 1 ) + color.charAt( 2 ) + color.charAt( 2 );
            }else if(color.length !== 6){
                throw( 'Invalid hex color: ' + color);
            }
            var rgb=[];
            for( var i=0 ; i <= 2 ; i++ ){
                rgb[i]=parseInt( color.substr( i * 2 , 2 ) , 16 );
            }
            return rgb;
        }
        let rgb1=[];
        if(couleur_fond.substr( 0 , 1 ) === '#'){
            rgb1=hexToRGBArray( couleur_fond.substr( 1 ) );
        }else{
            for( let i=0 ; i < this.__couleurs_web0.length ; i++ ){
                if(this.__couleurs_web0[i][0].substr( 6 ).toLowerCase() === couleur_fond.toLowerCase()){
                    rgb1=hexToRGBArray( this.__couleurs_web0[i][0].substr( 0 , 6 ) );
                }
            }
        }
        let rgb2=[];
        if(couleur_texte.substr( 0 , 1 ) === '#'){
            rgb2=hexToRGBArray( couleur_texte.substr( 1 ) );
        }else{
            for( let i=0 ; i < this.__couleurs_web0.length ; i++ ){
                if(this.__couleurs_web0[i][0].substr( 6 ).toLowerCase() === couleur_texte.toLowerCase()){
                    rgb2=hexToRGBArray( this.__couleurs_web0[i][0].substr( 0 , 6 ) );
                }
            }
        }
        if(rgb1.length !== 3 || rgb2.length !== 3){
            return({"__xst" : __xer ,"__xme" : 'rahhhh: ' + couleur_fond + ' ' + couleur_texte});
        }
        const RED=0.2126;
        const GREEN=0.7152;
        const BLUE=0.0722;
        const GAMMA=2.4;
        function luminance( r , g , b ){
            var a=[r,g,b].map( ( v ) => {
                v/=255;
                return(v <= 0.03928 ? ( v / 12.92 ) : ( Math.pow( (v + 0.055) / 1.055 , GAMMA ) ));
        } );
            return(a[0] * RED + a[1] * GREEN + a[2] * BLUE);
        }
        var lum1=luminance( ...rgb1 );
        var lum2=luminance( ...rgb2 );
        var brightest=Math.max( lum1 , lum2 );
        var darkest=Math.min( lum1 , lum2 );
        let contraste=(brightest + 0.05) / (darkest + 0.05);
        return({"__xst" : __xsu ,"__xva" : contraste});
    }
    /*
      =============================================================================================================
    */
    raz_zone_couleur2( mat , d ){
        /*
          maj effective de/des couleur(s) dans la page
        */
        let nom_du_champ1='';
        let nom_du_champ2='';
        let nom_du_champ_a_modifier='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ1=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ2' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ2=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ_a_modifier' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ_a_modifier=mat[i + 1][1];
            }
        }
        if(nom_du_champ1 !== ''){
            document.getElementById( nom_du_champ1 ).value='';
            if(nom_du_champ_a_modifier !== ''){
                document.getElementById( nom_du_champ_a_modifier ).style.background='';
            }
        }
        if(nom_du_champ2 !== ''){
            document.getElementById( nom_du_champ2 ).value='';
            if(nom_du_champ_a_modifier !== ''){
                document.getElementById( nom_du_champ_a_modifier ).style.color='';
            }
        }
    }
    /*
      =============================================================================================================
    */
    maj_champ_de_couleur1( mat , d ){
        /*
          maj effective de/des couleur(s) dans la page
        */
        let nom_du_champ1='';
        let nom_du_champ2='';
        let nom_du_champ_a_modifier='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ1=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ2' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ2=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ_a_modifier' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ_a_modifier=mat[i + 1][1];
            }
        }
        if(nom_du_champ1 !== '' && nom_du_champ2 === ''){
            let vv_nom_couleur_selectionne1=document.getElementById( 'vv_nom_couleur_selectionne1' );
            let nouvelle_valeur1=vv_nom_couleur_selectionne1.getAttribute( 'data-valeur_couleur1' );
            if(nouvelle_valeur1 !== ''){
                document.getElementById( nom_du_champ1 ).value=nouvelle_valeur1;
                this.__ig1.fermer_la_sous_fenetre();
            }
        }else if(nom_du_champ1 !== '' && nom_du_champ2 !== ''){
            let vv_nom_couleur_selectionne1=document.getElementById( 'vv_nom_couleur_selectionne1' );
            let nouvelle_valeur1=vv_nom_couleur_selectionne1.getAttribute( 'data-valeur_couleur1' );
            let vv_nom_couleur_selectionne2=document.getElementById( 'vv_nom_couleur_selectionne2' );
            let nouvelle_valeur2=vv_nom_couleur_selectionne2.getAttribute( 'data-valeur_couleur2' );
            if(nouvelle_valeur1 && nouvelle_valeur2 && nouvelle_valeur1 !== '' && nouvelle_valeur2 !== ''){
                let obj_contraste=this.calcul_contraste( nouvelle_valeur1 , nouvelle_valeur2 );
                if(obj_contraste.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'erreur de calcul de contraste'});
                }
                if(obj_contraste.__xva < 2.4){
                    return({"__xst" : __xer ,"__xme" : 'le contraste entre les couleurs (' + obj_contraste.__xva + ') n\'est pas assez élevé '});
                }
                document.getElementById( nom_du_champ1 ).value=nouvelle_valeur1;
                document.getElementById( nom_du_champ2 ).value=nouvelle_valeur2;
                if(nom_du_champ_a_modifier !== ''){
                    document.getElementById( nom_du_champ_a_modifier ).style.background=nouvelle_valeur1;
                    document.getElementById( nom_du_champ_a_modifier ).style.color=nouvelle_valeur2;
                }
                this.__ig1.fermer_la_sous_fenetre();
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_combinee_1( mat , d ){
        let l01=mat.length;
        let indice1=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'indice1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice1=parseInt( mat[i + 1][1] , 10 );
            }
        }
        try{
            let elem=this.__couleurs_combinees0[indice1];
            let __couleur1=document.getElementById( '__couleur1' );
            let __couleur2=document.getElementById( '__couleur2' );
            let vv_nom_couleur_selectionne1=document.getElementById( 'vv_nom_couleur_selectionne1' );
            let vv_nom_couleur_selectionne2=document.getElementById( 'vv_nom_couleur_selectionne2' );
            let couleur1=elem[0];
            if(couleur1.substr( 0 , 1 ) === '#'){
            }else{
                for( let i=0 ; i < this.__couleurs_web0.length ; i++ ){
                    if(this.__couleurs_web0[i][0].substr( 6 ).toLowerCase() === couleur1.toLowerCase()){
                        couleur1='#' + this.__couleurs_web0[i][0].substr( 0 , 6 );
                    }
                }
            }
            let couleur2=elem[1];
            if(couleur2.substr( 0 , 1 ) === '#'){
            }else{
                for( let i=0 ; i < this.__couleurs_web0.length ; i++ ){
                    if(this.__couleurs_web0[i][0].substr( 6 ).toLowerCase() === couleur2.toLowerCase()){
                        couleur2='#' + this.__couleurs_web0[i][0].substr( 0 , 6 );
                    }
                }
            }
            __couleur1.value=couleur1;
            __couleur2.value=couleur2;
            let tt='';
            tt='<span style="background:' + elem[0] + ';color:' + elem[1] + ';font-size:0.7em;">' + elem[0] + ' / ' + elem[1] + '</span>';
            vv_nom_couleur_selectionne1.setAttribute( 'data-valeur_couleur1' , elem[0] );
            vv_nom_couleur_selectionne2.setAttribute( 'data-valeur_couleur2' , elem[1] );
            vv_nom_couleur_selectionne1.innerHTML=tt;
            vv_nom_couleur_selectionne2.innerHTML=tt;
        } catch {}
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    montrer_couleur_combinee_1( mat , d ){
        let l01=mat.length;
        let indice1=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'indice1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                indice1=parseInt( mat[i + 1][1] , 10 );
            }
        }
        try{
            let vv_nom_couleur_souris1=document.getElementById( 'vv_nom_couleur_souris1' );
            let elem=this.__couleurs_combinees0[indice1];
            let tt='';
            tt='<span style="background:' + elem[0] + ';color:' + elem[1] + ';font-size:0.7em;">' + elem[0] + ' / ' + elem[1] + '</span>';
            vv_nom_couleur_souris1.innerHTML=tt;
        } catch {}
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    html_de_palette1( format_palette , nom_du_champ1 , nom_du_champ2 , nom_du_champ_a_modifier ){
        let o1='';
        let couleur1='';
        let couleur_hexa1='';
        let couleur2='';
        let couleur_hexa2='';
        let ref_champ_couleur1=document.getElementById( nom_du_champ1 );
        if(ref_champ_couleur1.value !== ''){
            couleur1=ref_champ_couleur1.value;
            couleur_hexa1=ref_champ_couleur1.value;
        }
        let ref_champ_couleur2=document.getElementById( nom_du_champ2 );
        if(ref_champ_couleur2.value !== ''){
            couleur2=ref_champ_couleur2.value;
            couleur_hexa2=ref_champ_couleur2.value;
        }
        if(couleur_hexa1 !== ''){
            if(couleur_hexa1.substr( 0 , 1 ) === '#'){
            }else{
                for( let i=0 ; i < this.__couleurs_web0.length ; i++ ){
                    if(this.__couleurs_web0[i][0].substr( 6 ).toLowerCase() === couleur_hexa1.toLowerCase()){
                        couleur_hexa1='#' + this.__couleurs_web0[i][0].substr( 0 , 6 );
                        break;
                    }
                }
            }
        }
        if(couleur_hexa2 !== ''){
            if(couleur_hexa2.substr( 0 , 1 ) === '#'){
            }else{
                for( let i=0 ; i < this.__couleurs_web0.length ; i++ ){
                    if(this.__couleurs_web0[i][0].substr( 6 ).toLowerCase() === couleur_hexa2.toLowerCase()){
                        couleur_hexa2='#' + this.__couleurs_web0[i][0].substr( 0 , 6 );
                        break;
                    }
                }
            }
        }
        o1+='<style type="text/css">';
        o1+='#afr td{';
        o1+='  min-width:2em;';
        o1+='  text-align:center;';
        o1+='  border-width:' + this.__ig1.css_dimensions.t_border + 'px;';
        o1+='  border-style:solid;';
        o1+='  border-color:white;';
        o1+='}';
        o1+='</style>';
        o1+='<div id="vv_div_des_couleurs">';
        o1+='<table style="background:white;min-width:21em;">';
        o1+='  <tr>';
        o1+='    <td style="height:1.8em;">';
        if('2_couleurs' === format_palette){
            o1+='      <input id="__radio_couleur_fond_1" type="radio" checked name="__selecteur_fond_ou_texte" />';
            o1+=' fond :';
        }else{
            o1+=' selecteur :';
        }
        o1+='       <input id="__couleur1"  value="' + couleur_hexa1 + '" type="color" oninput="__action_interactive1(\'__fnt1\' , \'voir_couleur_du_selecteur1\' , \'nom_zone(&quot;__couleur1&quot;)\')" />';
        o1+='    </td>';
        o1+='  </tr>';
        o1+='  <tr>';
        o1+='    <td style="height:1.8em;">';
        o1+='       <div class="rev_bouton yy__3" data-rev_click="m1(n1(__fnt1),f1(maj_champ_de_couleur1(';
        o1+='nom_du_champ1(' + nom_du_champ1 + ')';
        o1+='nom_du_champ2(' + nom_du_champ2 + ')';
        o1+='nom_du_champ_a_modifier(' + nom_du_champ_a_modifier + ')';
        o1+=')))" >s</div>';
        o1+='       <div data-valeur_couleur1="' + couleur1 + '" id="vv_nom_couleur_selectionne1" style="display:inline-block;">';
        o1+='<span style="background:' + couleur1 + ';color:' + couleur2 + ';">' + couleur1 + ' / ' + couleur2 + '</span>';
        o1+='       </div>';
        o1+='    </td>';
        o1+='  </tr>';
        o1+='  <tr>';
        o1+='    <td style="height:1.8em;">';
        o1+='       v:<div id="vv_nom_couleur_souris1"      style="display:inline-block;"></div>';
        o1+='    </td>';
        o1+='  </tr>';
        if('2_couleurs' === format_palette){
            o1+='  <tr>';
            o1+='    <td style="height:1.8em;">';
            o1+='      <input id="__radio_couleur_texte_1" type="radio" name="__selecteur_fond_ou_texte" />';
            o1+='      texte : <input id="__couleur2" value="' + couleur_hexa2 + '" type="color" oninput="__action_interactive1(\'__fnt1\' , \'voir_couleur_du_selecteur2\' , \'nom_zone(&quot;__couleur2&quot;)\')" />';
            o1+='    </td>';
            o1+='  </tr>';
            o1+='  <tr>';
            o1+='    <td style="height:1.8em;">';
            o1+='       <div data-valeur_couleur2="' + couleur2 + '" id="vv_nom_couleur_selectionne2" style="display:inline-block;">';
            o1+='<span style="background:' + couleur1 + ';color:' + couleur2 + ';">' + couleur1 + ' / ' + couleur2 + '</span>';
            o1+='       </div>';
            o1+='    </td>';
            o1+='  </tr>';
            o1+='  <tr>';
            o1+='    <td style="height:1.8em;">';
            o1+='       v:<div id="vv_nom_couleur_souris2"      style="display:inline-block;"></div>';
            o1+='    </td>';
            o1+='  </tr>';
        }
        o1+='</table>';
        /*
        */
        o1+='<div style="max-height:15em;overflow-y:scroll;">';
        let nbCoulParLigne=14;
        let border='';
        let count1=0;
        if('2_couleurs' === format_palette){
            o1+='<table cellpadding="0" cellspacing="0" summary="" style=" border:0px blue solid;">';
            o1+='<tr><td colspan="' + nbCoulParLigne + '"><span class="aadmin02">combinaisons</span></td></tr>';
            for( let j=0 ; j < this.__couleurs_combinees0.length ; j++ ){
                if(count1% nbCoulParLigne == 0){
                    o1+='<tr>';
                }
                border='border:0px white outset;padding:0;height:1.5em;width:1.5em;';
                o1+='<td ';
                o1+=' style="cursor:pointer;text-align:center;color:' + this.__couleurs_combinees0[j][1] + ';background-color:' + this.__couleurs_combinees0[j][0] + ';' + border + '"';
                o1+=' onclick="__action_interactive1(\'__fnt1\' , \'selectionner_combinee_1\',\'indice1(' + j + ')\')"';
                o1+=' onmouseover="__action_interactive1(\'__fnt1\' , \'montrer_couleur_combinee_1\',\'indice1(' + j + ')\')" >ft</td>';
                count1++;
            }
            o1+='</table>';
        }
        count1=0;
        o1+='<table cellpadding="0" cellspacing="0" summary="" style=" border:0px blue solid;">';
        o1+='<tr><td colspan="' + nbCoulParLigne + '"><span class="aadmin02">WEB named</span></td></tr>';
        for( let j=0 ; j < this.__couleurs_web0.length ; j++ ){
            if(count1% nbCoulParLigne == 0){
                o1+='<tr>';
            }
            border='border:0px white outset;padding:0;height:1.5em;width:1.5em;';
            o1+='<td ';
            /* id="tab_' + this.__couleurs_web0[j][0] + '"'; */
            o1+=' style="cursor:pointer;color:' + this.__couleurs_web0[j][1][2] + ';background-color:#' + this.__couleurs_web0[j][0].substr( 0 , 6 ) + ';' + border + '"';
            o1+=' onclick="__action_interactive1(\'__fnt1\' , \'selectionner_couleur_1\',\'indice1(' + j + ')\')"';
            o1+=' onmouseover="__action_interactive1(\'__fnt1\' , \'montrer_couleur_1\',\'indice1(' + j + ')\')" ></td>';
            count1++;
            if(count1 == 140){
                o1+='</tr><tr><td colspan="' + nbCoulParLigne + '"><span class="aadmin02">WEB not named</span></td></tr>';
            }else{
                if(count1% nbCoulParLigne == 0){
                    o1+='</tr>';
                }
            }
        }
        o1+='</table>';
        o1+='</div>';
        o1+='</div>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    maj_couleur1( mat , d , x , evenement_navigateur ){
        let l01=mat.length;
        let nom_du_champ1='';
        let nom_du_champ2='';
        let format_palette='1_couleur';
        /* 2_couleurs */
        let nom_du_champ_a_modifier='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ1=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ2' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ2=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'format_palette' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                format_palette=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ_a_modifier' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ_a_modifier=mat[i + 1][1];
            }
        }
        if(nom_du_champ1 === ''){
            return({"__xst" : __xer ,"__xme" : 'paramètre "nom_du_champ1" non trouvé !'});
        }
        let ref_champ_couleur=null;
        try{
            ref_champ_couleur=document.getElementById( nom_du_champ1 );
        } catch {}
        if(ref_champ_couleur === null){
            return({"__xst" : __xer ,"__xme" : '"' + nom_du_champ1 + '" non trouvé dans la page !'});
        }
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        let dim=null;
        if(evenement_navigateur && evenement_navigateur.target){
            dim=evenement_navigateur.target.getBoundingClientRect();
        }else{
            dim=ref_champ_couleur.getBoundingClientRect();
        }
        vv_sous_fenetre1.style.minWidth='auto';
        vv_sous_fenetre1.style.maxWidth='none';
        vv_sous_fenetre1.style.width='fit-content';
        vv_sous_fenetre1.style.minHeight='auto';
        vv_sous_fenetre1.style.maxHeight='none';
        vv_sous_fenetre1.style.position='absolute';
        vv_sous_fenetre1.style.top=parseInt( dim.top , 10 ) + 'px';
        vv_sous_fenetre1.style.left=parseInt( dim.left , 10 ) + 'px';
        vv_sous_fenetre1.style.margin='0';
        vv_sous_fenetre1.style.padding='0';
        vv_sous_fenetre1.className='backdrop_transparent';
        /*
          affichage de la palette
        */
        let maintenant=new Date();
        if(ref_champ_couleur.value !== ''){
        }
        this.affiche_palette1( this.html_de_palette1( format_palette , nom_du_champ1 , nom_du_champ2 , nom_du_champ_a_modifier ) );
        /* html_de_date1 */
        vv_sous_fenetre1.showModal();
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    generique_selectionner_une_grandeur_sous_liste2( mat , d ){
        let id_zone='';
        let chi_id_grandeur=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_grandeur !== 0 && id_zone !== ''){
            let aa=document.getElementById( 'vv_sous_sous_fenetre_de_liste2' );
            aa.innerHTML='';
            aa.close();
            aa.remove();
            document.getElementById( id_zone ).value=chi_id_grandeur;
            try{
                let yy_bouton_loupe_sous_fenetre2=document.getElementById( 'yy_bouton_loupe_sous_fenetre2' );
                this.__ig1.executer1( yy_bouton_loupe_sous_fenetre2.getAttribute( 'data-rev_click' ) );
            } catch {}
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    generique_obtenir_les_grandeurs_pour_sous_liste2( mat , d , le_colis , that ){
        let id_zone='';
        let __sous_titre_a_afficher='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if(mat[i][1] === '__sous_titre_a_afficher' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                __sous_titre_a_afficher=mat[i + 1][1];
            }
        }
        let lst1='';
        for(let i in le_colis.__xva.liste_des_grandeurs){
            let tup=le_colis.__xva.liste_des_grandeurs[i];
            lst1+='<tr>';
            lst1+='<td>';
            lst1+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + that.moi + '),f1(selectionner_une_grandeur_sous_liste2(';
            lst1+='id_zone(' + id_zone + '),';
            lst1+='chi_id_grandeur(' + tup.T0_chi_id_grandeur + ')';
            lst1+=')))">=&gt;</div>';
            lst1+='</td>';
            lst1+='<td>';
            lst1+=tup.T0_chi_id_grandeur;
            lst1+='</td>';
            lst1+='<td>';
            lst1+=tup.T0_chp_cle_grandeur;
            lst1+='</td>';
            lst1+='</tr>';
        }
        if(lst1 !== ''){
            lst1='<table><tr><th colspan="3">' + __sous_titre_a_afficher + '</th></tr>' + lst1 + '</table>';
        }else{
            lst1='<table><tr><th colspan="3">' + __sous_titre_a_afficher + '</th></tr><tr><td>pas de valeur disponible</td></tr></table>';
        }
        document.getElementById( 'vv_sous_sous_fenetre_de_liste2' ).innerHTML=lst1;
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    generique_selectionner_des_grandeur_de_la_liste_pour_le_filtre( mat , d ){
        let id_zone='';
        let origine_de_l_appel_liste='';
        let champ_texte_associé='';
        let champ_libelle_associé='';
        let cle_session='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'origine_de_l_appel_liste' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                origine_de_l_appel_liste=mat[i + 1][1];
            }else if(mat[i][1] === 'champ_texte_associé' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_texte_associé=mat[i + 1][1];
            }else if(mat[i][1] === 'champ_libelle_associé' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_libelle_associé=mat[i + 1][1];
            }else if(mat[i][1] === 'cle_session' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                cle_session=mat[i + 1][1];
            }
        }
        try{
            document.getElementById( champ_texte_associé ).type='hidden';
            document.getElementById( champ_texte_associé ).value='';
            document.getElementById( champ_libelle_associé ).innerHTML='!!!!!';
            document.getElementById( champ_libelle_associé ).style.visibility='visible';
            document.getElementById( champ_libelle_associé ).style.backgroundColor='yellow';
            document.getElementById( champ_libelle_associé ).style.color='red';
        } catch {}
        if(id_zone !== ''){
            let la_liste='';
            let les_cases=document.getElementById( 'vv_liste_des_grandeurs' ).getElementsByTagName( 'input' );
            for( let i=0 ; i < les_cases.length ; i++ ){
                if(les_cases[i].checked === true){
                    la_liste+=',' + les_cases[i].value;
                }
            }
            if(la_liste !== ''){
                la_liste=la_liste.substr( 1 );
            }
            try{
                document.getElementById( id_zone ).value=la_liste;
                this.__ig1.fermer_la_sous_fenetre();
            } catch {}
            let cmd1='m1(n1(' + origine_de_l_appel_liste + '),f1(raz_champ_filtre_grandeurs0(' + champ_texte_associé + ')))';
            this.__ig1.executer1( cmd1 );
            let cmd2='fo1(co1(liste1),pm1(m1(n1(' + origine_de_l_appel_liste + '),f1(liste1(__num_page(0))))))';
            this.__ig1.executer1( cmd2 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      UNE grandeurs quand on est sur une zone filtre
    */
    generique_selectionner_une_grandeur_de_la_liste_pour_le_filtre( mat , d ){
        let chi_id_grandeur=-1;
        let id_zone='';
        let origine_de_l_appel_liste='';
        let champ_texte_associé='';
        let champ_libelle_associé='';
        let l01=mat.length;
        let cle_session='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_grandeur' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_grandeur=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'id_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'origine_de_l_appel_liste' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                origine_de_l_appel_liste=mat[i + 1][1];
            }else if(mat[i][1] === 'champ_texte_associé' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_texte_associé=mat[i + 1][1];
            }else if(mat[i][1] === 'champ_libelle_associé' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_libelle_associé=mat[i + 1][1];
            }else if(mat[i][1] === 'cle_session' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                cle_session=mat[i + 1][1];
            }
        }
        let aa=sessionStorage.getItem( cle_session );
        if(aa !== null){
            aa=JSON.parse( aa );
            aa[champ_texte_associé]='';
            sessionStorage.setItem( cle_session , JSON.stringify( aa ) );
        }
        try{
            document.getElementById( champ_texte_associé ).type='hidden';
            document.getElementById( champ_texte_associé ).value='';
            document.getElementById( champ_libelle_associé ).innerHTML='!!!!!';
            document.getElementById( champ_libelle_associé ).style.visibility='visible';
            document.getElementById( champ_libelle_associé ).style.backgroundColor='yellow';
            document.getElementById( champ_libelle_associé ).style.color='red';
        } catch {}
        /* la grandeur zéro pour trouver les valeurs IS NULL */
        if(chi_id_grandeur >= 0 && id_zone !== ''){
            try{
                document.getElementById( id_zone ).value=chi_id_grandeur;
                this.__ig1.fermer_la_sous_fenetre();
            } catch {}
            let cmd1='m1(n1(' + origine_de_l_appel_liste + '),f1(raz_champ_filtre_grandeurs0(' + champ_texte_associé + ')))';
            this.__ig1.executer1( cmd1 );
            let cmd2='fo1(co1(liste1),pm1(m1(n1(' + origine_de_l_appel_liste + '),f1(liste1(__num_page(0))))))';
            this.__ig1.executer1( cmd2 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      PLUSIEURS grandeurs quand on est sur une zone filtre
    */
    generique_obtenir_les_grandeurs_pour_filtre_liste2( mat , d , le_colis1=null , that ){
        let chi_id_parametre=le_colis1.__xva.chi_id_parametre;
        let champ_texte_associé=le_colis1.__xva.champ_texte_associé;
        let champ_libelle_associé=le_colis1.__xva.champ_libelle_associé;
        let id_zone=le_colis1.__xva.id_zone;
        let origine_de_l_appel_liste=le_colis1.__xva.origine_de_l_appel_liste;
        let cle_session=le_colis1.__xva.cle_session;
        let __sous_titre_a_afficher=le_colis1.__xva.__sous_titre_a_afficher;
        let tab_valeurs=[];
        try{
            let valeurs_dans_zone=document.getElementById( id_zone ).value;
            if(valeurs_dans_zone !== ''){
                tab_valeurs=valeurs_dans_zone.split( ',' );
                tab_valeurs=tab_valeurs.map( ( str ) => {
                    return(parseInt( str , 10 ));
            } );
            }
        } catch {}
        let o1='';
        if(__sous_titre_a_afficher !== ''){
            o1+='<h1>sélection pour filtre ' + __sous_titre_a_afficher + '</h1>';
        }else{
            o1+='<h1>Choisir une grandeur</h1>';
        }
        o1+='<table id="vv_liste_des_grandeurs">';
        o1+='<tr>';
        o1+='<th>';
        o1+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + that.moi + '),f1(selectionner_des_grandeur_de_la_liste_pour_le_filtre(';
        o1+='id_zone(' + id_zone + '),';
        o1+='origine_de_l_appel_liste(' + origine_de_l_appel_liste + ')';
        o1+='champ_libelle_associé(' + champ_libelle_associé + ')';
        o1+='champ_texte_associé(' + champ_texte_associé + ')';
        o1+='cle_session(' + cle_session + ')';
        o1+=')))">=&gt;</div>';
        o1+='';
        o1+='</th>';
        o1+='<th>id</th>';
        o1+='<th>cle</th>';
        o1+='</tr>';
        o1+='<tr>';
        o1+='<td>';
        o1+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + that.moi + '),f1(selectionner_une_grandeur_de_la_liste_pour_le_filtre(';
        o1+='id_zone(' + id_zone + '),';
        /* la grandeur zéro pour trouver les valeurs IS NULL */
        o1+='chi_id_grandeur(0),';
        o1+='origine_de_l_appel_liste(' + origine_de_l_appel_liste + ')';
        o1+='champ_texte_associé(' + champ_texte_associé + ')';
        o1+='champ_libelle_associé(' + champ_libelle_associé + ')';
        o1+='cle_session(' + cle_session + ')';
        o1+=')))">=&gt;</div>';
        o1+='</td>';
        o1+='<td>';
        o1+='indéfinie';
        o1+='</td>';
        o1+='<td></td>';
        o1+='</tr>';
        for(let i in le_colis1.__xva.liste_des_grandeurs){
            let tup=le_colis1.__xva.liste_des_grandeurs[i];
            o1+='<tr>';
            o1+='<td>';
            let cochee=' unchecked';
            if(tab_valeurs.includes( tup.T0_chi_id_grandeur )){
                cochee=' checked';
            }
            o1+='<input type="checkbox"  value="' + tup.T0_chi_id_grandeur + '" ' + cochee + ' />';
            o1+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(' + that.moi + '),f1(selectionner_une_grandeur_de_la_liste_pour_le_filtre(';
            o1+='chi_id_grandeur(' + tup.T0_chi_id_grandeur + '),';
            o1+='id_zone(' + id_zone + '),';
            o1+='origine_de_l_appel_liste(' + origine_de_l_appel_liste + ')';
            o1+='champ_texte_associé(' + champ_texte_associé + ')';
            o1+='champ_libelle_associé(' + champ_libelle_associé + ')';
            o1+='cle_session(' + cle_session + ')';
            o1+=')))">=&gt;</div>';
            o1+='</td>';
            o1+='<td>';
            o1+=tup.T0_chi_id_grandeur;
            o1+='</td>';
            o1+='<td>';
            if(tup.T0_chc_couleur_fond_grandeur !== null){
                o1+='<span style="color:' + tup.T0_chc_couleur_texte_grandeur + ';background:' + tup.T0_chc_couleur_fond_grandeur + '">' + tup.T0_chp_cle_grandeur + '</span>';
            }else{
                o1+=tup.T0_chp_cle_grandeur;
            }
            o1+='</td>';
            o1+='</tr>';
        }
        o1+='</table>';
        this.__ig1.affiche_sous_fenetre1( o1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    generique_liste_des_grandeurs_pour_selection_unique( mat , d , le_colis1 , that ){
        let nom_libelle_dans_parent2='';
        let nom_champ_dans_parent2='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_libelle_dans_parent2' && mat[i][2] === 'f' && mat[i][8] === 1){
                nom_libelle_dans_parent2=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_champ_dans_parent2' && mat[i][2] === 'f' && mat[i][8] === 1){
                nom_champ_dans_parent2=mat[i + 1][1];
            }
        }
        let o1='';
        let __sous_titre_a_afficher=le_colis1.__xva.__sous_titre_a_afficher??'';
        if(le_colis1 !== null && le_colis1.__xva.hasOwnProperty( 'sous_liste2' )){
            let la_methode='';
            let contient_une_methode=false;
            if(le_colis1.__xva.hasOwnProperty( 'methode_sur_click2' ) && le_colis1.__xva.methode_sur_click2.trim() !== ''){
                let methode_sur_click2=le_colis1.__xva.methode_sur_click2.trim();
                methode_sur_click2='m1(' + methode_sur_click2.substr( methode_sur_click2 , methode_sur_click2.length - 2 );
                la_methode='' + methode_sur_click2;
                contient_une_methode=true;
            }else{
                la_methode='m1(n1(__ig1),f1(choisir_dans_sous_fenetre2(';
            }
            let lst='';
            for(let i in le_colis1.__xva.sous_liste2.__xva){
                let tup=le_colis1.__xva.sous_liste2.__xva[i];
                lst+='<tr>';
                lst+='<td style="text-wrap-mode: nowrap;">';
                let parametres='';
                parametres+=la_methode;
                parametres+=' nom_champ_dans_parent2(' + nom_champ_dans_parent2 + ')';
                parametres+=' nom_libelle_dans_parent2(' + nom_libelle_dans_parent2 + ')';
                parametres+=' id2(' + tup.T0_chi_id_grandeur + ')';
                let libelle2='';
                libelle2+='(' + tup.T0_chi_id_grandeur + ') ';
                libelle2+=tup.T0_chp_cle_grandeur ? ( ' , ' + this.__ig1.fi2( tup.T0_chp_cle_grandeur ) ) : ( '' );
                parametres+=' libelle2(\'' + this.__ig1.fi1( libelle2 ).replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                lst+='<td style="text-align:center;">';
                lst+=this.__ig1.fi2( tup.T0_chi_id_grandeur );
                lst+='</td>';
                lst+='<td style="max-width:24em;overflow:hidden;">';
                if(tup.T0_chc_couleur_fond_grandeur !== null){
                    lst+='<span style="color:' + tup.T0_chc_couleur_texte_grandeur + ';background:' + tup.T0_chc_couleur_fond_grandeur + '">' + tup.T0_chp_cle_grandeur + '</span>';
                }else{
                    lst+=tup.T0_chp_cle_grandeur;
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table>';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='<th>' + (__sous_titre_a_afficher === '' ? ( 'cle' ) : ( __sous_titre_a_afficher )) + '</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__ig1.la_liste_est_vide();
            }
        }
        this.__ig1.initialisation_filtre_sous_fenetre2( 'sous_liste2' , o1 , this.DUN_DUNE_ELEMENT_GERE , __sous_titre_a_afficher );
        this.__ig1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    obtenir_les_grandeurs_pour_sous_liste2( mat , d , le_colis ){
        debugger;
    }
    /*
      =============================================================================================================
    */
    selection_sous_grandeur_filtre2( mat , d ){
        /*
          document.getElementById('vv_les_messages_dans_la_sous_fenetre').style.display='none';
          document.getElementById('vv_titre_sous_liste_2').style.display='none';
          document.getElementById('vv_contenu_de_sous_liste2').style.display='none';
        */
        let id_zone='';
        let module_appelant1='';
        let module_appele1='';
        let chi_id_parametre=0;
        let puiser_avec='';
        let __sous_titre_a_afficher='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('id_zone' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if('module_appelant1' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                module_appelant1=mat[i + 1][1];
            }else if('module_appele1' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                module_appele1=mat[i + 1][1];
            }else if('chi_id_parametre' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if('puiser_avec' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                puiser_avec=mat[i + 1][1];
            }else if('__sous_titre_a_afficher' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                __sous_titre_a_afficher=mat[i + 1][1];
            }
        }
        let ref_vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        let elt=document.createElement( 'dialog' );
        elt.setAttribute( 'id' , "vv_sous_sous_fenetre_de_liste2" );
        elt.style.width='70%';
        elt.style.height='70%';
        ref_vv_sous_fenetre1.appendChild( elt );
        elt.showModal();
        let cmd1='';
        cmd1+='pm1(m1(n1(' + puiser_avec + '),f1(obtenir_les_grandeurs_pour_sous_liste2(';
        cmd1+='id_zone( ' + id_zone + '),';
        cmd1+='chi_id_parametre(' + chi_id_parametre + '),';
        cmd1+='__sous_titre_a_afficher(\'' + __sous_titre_a_afficher.replace( /\\/ , '\\\\' ).replace( /\'/ , '\\\'' ) + '\')';
        cmd1+='))))';
        this.__ig1.envoyer_un_colis_au_worker( {
                 /*  */
                "__xac" : cmd1 ,
                "__xva" : {}
            } );
        return({"__xst" : __xsu});
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    action_maj_nulle_zero_un( mat , d ){
        let vv_id='';
        let valeur='';
        let contexte='';
        const l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('vv_id' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                vv_id=mat[i + 1][1];
            }else if('valeur' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=mat[i + 1][1];
            }else if('contexte' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                contexte=mat[i + 1][1];
            }
        }
        if(vv_id === ''){
            return '<div class="yy__0">erreur champ</div>';
        }
        if(contexte !== 'modifier1'){
            return({"__xst" : __xsu});
        }
        let lst=document.querySelectorAll( '[data-nulle_zero_un="' + vv_id + '"]' );
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].getAttribute( 'data-valeur' ) === ''){
                if(valeur === ''){
                    lst[i].classList.add( 'yy__2' );
                    document.getElementById( vv_id ).value='';
                    lst[i].style.opacity='0.5';
                }else{
                    lst[i].classList.remove( 'yy__2' );
                    lst[i].style.opacity='0.5';
                }
            }
            if(lst[i].getAttribute( 'data-valeur' ) === '0'){
                if(valeur === '0'){
                    lst[i].classList.add( 'yy__0' );
                    document.getElementById( vv_id ).value='0';
                    lst[i].style.opacity='1';
                }else{
                    lst[i].classList.remove( 'yy__0' );
                    lst[i].style.opacity='0.3';
                }
            }
            if(lst[i].getAttribute( 'data-valeur' ) === '1'){
                if(valeur === '1'){
                    lst[i].classList.add( 'yy__1' );
                    document.getElementById( vv_id ).value='1';
                    lst[i].style.opacity='1';
                }else{
                    lst[i].classList.remove( 'yy__1' );
                    lst[i].style.opacity='0.3';
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    html_edition_de_zones_text2( tup , les_donnees_du_champ ){
        /*#
          {
            "__contexte" : 'creer1' , // modification1
            "nom_du_champ" : "fld_nom_modele" ,
            "longueur_du_champ" : 255 ,
            "les_suggestions" : [] ,
            "cht_parmis_genre" : null ,
            "libelle_du_champ" : "nom du modèle" ,
            "description_du_champ" : "le bô nom de modèle" ,
            "valeur_par_defaut" : "l'e\"x\"emp\\le"
          }
        */
        let o1='<!-- html_de_zones_text2 -->';
        o1+='<div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>' + les_donnees_du_champ.libelle_du_champ + '</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(les_donnees_du_champ.__contexte === 'modification1' && tup['T0_' + les_donnees_du_champ.nom_du_champ] === undefined){
            o1+='<div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        if(les_donnees_du_champ.description_du_champ && les_donnees_du_champ.description_du_champ !== ''){
            o1+='<div class="yy_contient_description">\r\n';
        }
        o1+='      <input id="' + les_donnees_du_champ.nom_du_champ + '"';
        o1+=' type="text" ';
        o1+=' style="height: var(--t_hauteur_input1);"';
        if(les_donnees_du_champ.longueur_du_champ > 48){
            o1+=' size="48"';
            o1+=' maxlength="' + les_donnees_du_champ.longueur_du_champ + '"';
        }else{
            o1+=' size="' + les_donnees_du_champ.longueur_du_champ + '"';
            o1+=' maxlength="' + les_donnees_du_champ.longueur_du_champ + '"';
        }
        /*
          if(les_donnees_du_champ.nom_du_champ === 'fld_nom_modele'){
          debugger
          }
        */
        /* lors de d'un refresh, le "tup" est le_colis */
        if(tup && !tup.hasOwnProperty( '_CA_' )){
            o1+=' value="' + this.__ig1.fi2( tup['T0_' + les_donnees_du_champ.nom_du_champ] ) + '"';
        }else{
            if(les_donnees_du_champ.__contexte === 'creer1'){
                o1+=' value="' + les_donnees_du_champ.valeur_par_defaut.replace( /"/g , '&quot;' ) + '"';
            }else{
                o1+=' value=""';
            }
        }
        o1+=' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"';
        o1+=' />';
        if(les_donnees_du_champ.les_suggestions.length > 0){
            o1+=les_donnees_du_champ.les_suggestions.join( '&nbsp;' );
        }
        o1+=this.__ig1.__fnt1.boutons_edition_text( les_donnees_du_champ.nom_du_champ );
        if(les_donnees_du_champ.description_du_champ && les_donnees_du_champ.description_du_champ !== ''){
            o1+='          <div><i style="text-align:left;font-weight:100;">';
            o1+=les_donnees_du_champ.description_du_champ.replace( /¶LF¶/g , '<br />' );
            o1+='          </i></div>\r\n';
            o1+='      </div>\r\n';
        }
        o1+='    </div>';
        o1+='</div>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    html_de_zones_decimale1( nom_du_champ , enreg , contexte , libelle=null , lng_size , lng_maxlength ){
        let o1='<!-- html_de_zones_decimale1 -->';
        if(libelle !== null){
            o1+='<label for="' + nom_du_champ + '_libelle" style="display:inline-flex;margin-left:3px;border: var(--t_border) #669900 solid;margin:3px;">';
            o1+='    <div id="' + nom_du_champ + '_libelle" style="display:flex;">';
            o1+='        <div class="yy__elt_sl1" style="margin:auto 3px;">' + libelle + ' :&nbsp;</div>';
            o1+='    </div>';
        }
        if(contexte === 'modifier1'){
            o1+='      <input';
            o1+=' id="' + nom_du_champ + '"';
            o1+=' value="' + this.__ig1.fi2( enreg['T0_' + nom_du_champ] ) + '" ';
            o1+=' style="width:' + (lng_size + 1) + 'em;text-align:right;"';
            o1+=' type="number" size="' + lng_size + '" maxlength="' + lng_maxlength + '" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"';
            o1+='  />';
        }else{
            o1+=this.__ig1.fi2( enreg['T0_' + nom_du_champ] );
        }
        if(libelle !== null){
            o1+='</label>';
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    html_de_zones_zero_un_pour_ecran1( nom_du_champ , enreg , contexte , libelle=null ){
        let o1='';
        if(libelle !== null){
            o1+='<label for="' + nom_du_champ + '_libelle" style="display:inline-flex;margin-left:3px;border: var(--t_border) #669900 solid;margin:3px;">';
            o1+='    <div id="' + nom_du_champ + '_libelle" style="display:flex;">';
            o1+='        <div class="yy__elt_sl1" style="margin:auto 3px;">' + libelle + ' :&nbsp;</div>';
            o1+='    </div>';
        }
        o1+='        <div class="yy__elt_sl1">';
        if(contexte === 'modifier1'){
            o1+='        <input type="range"';
            o1+=' id="' + nom_du_champ + '"';
            o1+=' class="yy_ouinon" min="0" max="1" step="1"';
            o1+=' value="' + this.__ig1.fi2( enreg['T0_' + nom_du_champ] ) + '" >';
        }else{
            if(enreg['T0_' + nom_du_champ] === 0){
                o1+='NON';
            }else{
                o1+='OUI';
            }
        }
        o1+='&nbsp;</div>';
        if(libelle !== null){
            o1+='</label>';
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    html_de_zones_nulle_zero_un_pour_ecran( nom_du_champ , enreg , contexte , libelle=null ){
        let o1='';
        if(libelle !== null){
            o1+='<label for="' + nom_du_champ + '_libelle" style="display:inline-flex;margin-left:3px;border: var(--t_border) #669900 solid;margin:3px;">';
            o1+='    <div id="' + nom_du_champ + '_libelle" style="display:flex;">';
            o1+='        <div class="yy__elt_sl1';
            if(enreg['T0_' + nom_du_champ + ''] === 0){
                o1+=' yy__0';
            }else if(enreg['T0_' + nom_du_champ + ''] === 1){
                o1+=' yy__1';
            }
            o1+='" style="margin:auto 3px;';
            if(enreg['T0_' + nom_du_champ + ''] === null){
                o1+='opacity:0.7;';
            }
            o1+='">' + libelle + ' :&nbsp;</div>';
            o1+='    </div>';
        }
        /*  */
        if(contexte === 'modifier1'){
            o1+='        <input';
            o1+=' type="hidden"';
            o1+=' value="' + (enreg['T0_' + nom_du_champ] === null ? ( '' ) : ( enreg['T0_' + nom_du_champ] )) + '"';
            o1+=' id="' + nom_du_champ + '" />';
        }
        o1+='        <div';
        o1+=' data-nulle_zero_un="' + nom_du_champ + '"';
        o1+=' data-valeur=""';
        o1+=' class="rev_bouton' + (enreg['T0_' + nom_du_champ + ''] === null ? ( ' yy__2' ) : ( '' )) + '"';
        o1+=' style="opacity:0.5;"';
        o1+=' data-rev_click="';
        o1+='m1(n1(__fnt1),f1(action_maj_nulle_zero_un(';
        o1+='vv_id(' + nom_du_champ + '),';
        o1+='valeur(),';
        o1+='contexte(' + contexte + ')';
        o1+=')))" >' + this.__ig1.les_svg.ensemble_vide + '</div>';
        /*  */
        o1+='        <div';
        o1+=' data-nulle_zero_un="' + nom_du_champ + '"';
        o1+=' data-valeur="0"';
        o1+=' class="rev_bouton' + (enreg['T0_' + nom_du_champ + ''] === 0 ? ( ' yy__0' ) : ( '' )) + '"';
        o1+=' style="' + (enreg['T0_' + nom_du_champ + ''] === 0 ? ( '' ) : ( 'opacity:0.3;' )) + '"';
        o1+=' data-rev_click="';
        o1+='m1(n1(__fnt1),f1(action_maj_nulle_zero_un(';
        o1+='vv_id(' + nom_du_champ + '),';
        o1+='valeur(0),';
        o1+='contexte(' + contexte + ')';
        o1+=')))">0</div>';
        /*  */
        o1+='        <div';
        o1+=' data-nulle_zero_un="' + nom_du_champ + '"';
        o1+=' data-valeur="1"';
        o1+=' class="rev_bouton' + (enreg['T0_' + nom_du_champ + ''] === 1 ? ( ' yy__1' ) : ( '' )) + '"';
        o1+=' style="' + (enreg['T0_' + nom_du_champ + ''] === 1 ? ( '' ) : ( 'opacity:0.3;' )) + '"';
        o1+=' data-rev_click="';
        o1+='m1(n1(__fnt1),f1(action_maj_nulle_zero_un(';
        o1+='vv_id(' + nom_du_champ + '),';
        o1+='valeur(1),';
        o1+='contexte(' + contexte + ')';
        o1+=')))">1</div>';
        /*  */
        if(libelle !== null){
            o1+='</label>';
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    valeur_interface1( nom_de_la_fonction ){
        switch (nom_de_la_fonction){
            case 'date_maintenant' :
                let dt_maintenant=new Date();
                return(dt_maintenant.getFullYear() + '-' + (dt_maintenant.getMonth() + 1 < 10 ? ( '0' + (dt_maintenant.getMonth() + 1) ) : ( '' )) + '-' + (dt_maintenant.getDate() < 10 ? ( '0' + dt_maintenant.getDate() ) : ( dt_maintenant.getDate() )));
                break;
                
            case 'constante' : return arguments[1];
                break;
        }
        console.error( 'afr dans __fnt1.valeur_interface1 : "' + nom_de_la_fonction + '"' );
        return '';
    }
    /*
      =============================================================================================================
    */
    zones_filtres0( mat , d , le_colis1 , that , table_reference_est_table_virtuelle , nom_grandeur ){
        const l01=mat.length;
        let de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('de_13' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                de_13=mat[i + 1][1];
            }
        }
        for(let nom_champ_filtre in that.tableau_des_filtres['liste1']){
            let trouvé=false;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(nom_champ_filtre === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    that.filtres['liste1'][nom_champ_filtre]=mat[i + 1][1].replace( /\\'/g , '\'' ).replace( /\\\\/g , '\\' );
                    trouvé=true;
                    break;
                }
            }
            if(trouvé === false){
                that.filtres['liste1'][nom_champ_filtre]='';
            }
        }
        let cle_session=that.__ig1.cle_lst0 + '_' + that.moi + '_liste1';
        sessionStorage.setItem( cle_session , JSON.stringify( that.filtres['liste1'] ) );
        if(le_colis1.__xva.hasOwnProperty( '__fo1' )
               && le_colis1.__xva.__fo1 !== null
               && le_colis1.__xva.__fo1.hasOwnProperty( 'origine' )
               && le_colis1.__xva.__fo1.origine === 'aller_a_la_page'
        ){
            document.getElementById( '__num_page' ).value=__num_page;
            return;
        }
        if(document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML === ''){
            let o1='';
            let nom_zone_non_vide='';
            o1+='<div class="yy_filtre_liste1" id="liste1">';
            for(let i in that.tableau_des_filtres['liste1']){
                let l_elem_filtre=that.tableau_des_filtres['liste1'][i];
                if(l_elem_filtre.masqué === false){
                    if(l_elem_filtre.hasOwnProperty( 'rerefence_a_une_grandeur' )){
                        let bck='background:yellow;';
                        if(that.filtres['liste1'][i] === ''){
                            bck='';
                        }
                        o1+='    <div class="yy_bloc_filtre" style="' + bck + '">';
                        /*  */
                        o1+='        <div class="yy_libelle_filtre">';
                        o1+='            <span>' + this.__ig1.fi2( l_elem_filtre.nom ) + '</span>';
                        o1+='            <div class="rev_bouton yy__4" data-rev_click="m1(n1(' + this.moi + '),f1(selection_grandeur_filtre1(';
                        o1+='id_zone(' + i + '),';
                        o1+='chi_id_parametre(' + l_elem_filtre.rerefence_a_une_grandeur.chi_id_parametre + '),';
                        o1+='table_mere(' + l_elem_filtre.rerefence_a_une_grandeur.chi_id_parametre + '),';
                        o1+='puiser_avec(' + nom_grandeur + '),';
                        o1+='origine_de_l_appel_liste(' + that.moi + '),';
                        if(l_elem_filtre.champ_texte_associé !== undefined){
                            o1+='champ_texte_associé(' + l_elem_filtre.champ_texte_associé + '),';
                        }
                        if(l_elem_filtre.champ_libelle_associé !== undefined){
                            o1+='champ_libelle_associé(' + l_elem_filtre.champ_libelle_associé + ')';
                        }
                        o1+='cle_session(' + cle_session + ')';
                        o1+='__sous_titre_a_afficher(\'' + l_elem_filtre.nom.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                        o1+=')))">?</div>';
                        o1+='             <div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(';
                        o1+='id(' + i + '),';
                        o1+='origine_de_l_appel_liste(' + that.moi + '),';
                        if(l_elem_filtre.champ_texte_associé !== undefined){
                            o1+='champ_texte_associé(' + l_elem_filtre.champ_texte_associé + '),';
                        }
                        if(l_elem_filtre.champ_libelle_associé !== undefined){
                            o1+='champ_libelle_associé(' + l_elem_filtre.champ_libelle_associé + ')';
                        }
                        o1+='cle_session(' + cle_session + ')';
                        o1+=')))">x</div>';
                        o1+='        </div>';
                        /*  */
                        o1+='        <div>\r\n';
                        if(l_elem_filtre.champ_libelle_associé !== undefined){
                            if(that.filtres['liste1'][i] !== ''){
                                o1+='          <span id="' + l_elem_filtre.champ_libelle_associé + '" style="background-color:yellow;color:red;">!!!!!</span>';
                            }else{
                                o1+='          <span id="' + l_elem_filtre.champ_libelle_associé + '"></span>';
                            }
                        }
                        o1+='          <input type="hidden" id="' + i + '" aria-autocomplete="list" size="5" style="background:red;" value="' + that.__ig1.fi1( that.filtres['liste1'][i] ) + '" /> ';
                        if(l_elem_filtre.champ_texte_associé !== undefined){
                            if(that.filtres['liste1'][i] !== ''){
                                o1+='          <input type="hidden" id="' + l_elem_filtre.champ_texte_associé + '" aria-autocomplete="list" ';
                                o1+='           value="" ';
                            }else{
                                o1+='          <input type="text" id="' + l_elem_filtre.champ_texte_associé + '" aria-autocomplete="list" ';
                                o1+='           value="';
                                if(that.filtres['liste1'][l_elem_filtre.champ_texte_associé] !== undefined){
                                    o1+=that.__ig1.fi1( that.filtres['liste1'][l_elem_filtre.champ_texte_associé] ) + '';
                                }
                                o1+='" ';
                            }
                            o1+='           size="' + l_elem_filtre.taille + '" ';
                            o1+='           maxlength="64" ';
                            o1+='           autocapitalize="off" ';
                            o1+='           style="' + bck + '" />';
                        }
                        o1+='        </div>\r\n';
                    }else{
                        let val=that.filtres['liste1'][i];
                        if(val === ''){
                            o1+='    <div class="yy_bloc_filtre">';
                        }else{
                            o1+='    <div class="yy_bloc_filtre" style="background:yellow;">';
                        }
                        o1+='        <div class="yy_libelle_filtre"><span>' + this.__ig1.fi2( l_elem_filtre.nom ) + '</span></div>';
                        if(l_elem_filtre.genre === 5){
                            let bck='background:yellow;';
                            if(that.filtres['liste1'][i] === ''){
                                bck='';
                            }else{
                                if(nom_zone_non_vide === ''){
                                    nom_zone_non_vide=i;
                                }
                            }
                            o1+='<div>';
                            o1+='          <input type="hidden" id="' + i + '" value="' + val + '" maxlength="1" />';
                            o1+='    <div style="padding-right:10px;">';
                            o1+='    <div data-pos=""  data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '' ? ( 'yy__4' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_zero_un(id(' + i + '),valeur())))">x</div>';
                            o1+='    <div data-pos="0" data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '0' ? ( 'yy__0' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_zero_un(id(' + i + '),valeur(0))))" >0</div>';
                            o1+='    <div data-pos="1" data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '1' ? ( 'yy__1' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_zero_un(id(' + i + '),valeur(1))))" >1</div>';
                            o1+='    </div>';
                            o1+='</div>';
                        }else if(l_elem_filtre.genre === 25){
                            let bck='background:yellow;';
                            if(that.filtres['liste1'][i] === ''){
                                bck='';
                            }else{
                                if(nom_zone_non_vide === ''){
                                    nom_zone_non_vide=i;
                                }
                            }
                            o1+='<div>';
                            o1+='          <input type="hidden" id="' + i + '" value="' + val + '" maxlength="2" />';
                            o1+='    <div style="padding-right:10px;">';
                            o1+='    <div data-pos=""  data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '' ? ( 'yy__4' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_nulle_zero_un(id(' + i + '),valeur())))">x</div>';
                            o1+='    <div data-pos="-1" data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '-1' ? ( 'yy__2' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_nulle_zero_un(id(' + i + '),valeur(-1))))">&nbsp;</div>';
                            o1+='    <div data-pos="0" data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '0' ? ( 'yy__0' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_nulle_zero_un(id(' + i + '),valeur(0))))" >0</div>';
                            o1+='    <div data-pos="1" data-filtre_zero_id="' + i + '" class="rev_bouton ' + (val === '1' ? ( 'yy__1' ) : ( '' )) + '" data-rev_click="m1(n1(__fnt1),f1(filtre_nulle_zero_un(id(' + i + '),valeur(1))))" >1</div>';
                            o1+='    </div>';
                            o1+='</div>';
                        }else{
                            let bck='background:yellow;';
                            if(that.filtres['liste1'][i] === ''){
                                bck='';
                            }else{
                                if(nom_zone_non_vide === ''){
                                    nom_zone_non_vide=i;
                                }
                            }
                            o1+='<div>';
                            o1+='          <input type="text" id="' + i + '" aria-autocomplete="list" ';
                            o1+='           value="' + that.__ig1.fi1( val ) + '" ';
                            o1+='           size="' + l_elem_filtre.taille + '" ';
                            o1+='           maxlength="64" ';
                            o1+='           autocapitalize="off" ';
                            o1+='           style="' + bck + '" />';
                            o1+='<div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(' + i + '))))">x</div>';
                            o1+='</div>';
                        }
                    }
                    o1+='        </div>\r\n';
                }
            }
            o1+='   <div class="yy_bloc_loupe">';
            o1+='        <div id="vv_bouton_loupe" class="rev_bouton" style="margin:auto auto;min-width:' + this.__ig1.css_dimensions.t_boutons_carres + 'px;min-height:' + this.__ig1.css_dimensions.t_boutons_carres + 'px;" data-rev_click="';
            if(table_reference_est_table_virtuelle === true){
                o1+='fo1(sur_table_virtuelle(),co1(liste1),pm1(m1(n1(' + that.moi + '),f1(liste1(__num_page(0))))))';
            }else{
                o1+='fo1(co1(liste1),pm1(m1(n1(' + that.moi + '),f1(liste1(__num_page(0))))))';
            }
            o1+='"';
            o1+='        >' + that.__ig1.les_svg.loupe + '</div>';
            for(let i in that.tableau_des_filtres['liste1']){
                if(that.tableau_des_filtres['liste1'][i].masqué === true){
                    o1+='     <input type="hidden" id="' + i + '" value="' + that.filtres['liste1'][i] + '" />';
                }
            }
            o1+='   </div>';
            o1+='</div>';
            document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML=o1;
            if(nom_zone_non_vide !== ''){
                try{
                    document.getElementById( nom_zone_non_vide ).select();
                } catch {}
            }
            let lst=document.getElementById( 'vv_ecran_liste_zone_filtre' ).querySelectorAll( 'input' );
            for( let i=0 ; i < lst.length ; i++ ){
                lst[i].addEventListener( 'keyup' , ( e ) => {
                        if(e.keyCode === 13){
                            if(table_reference_est_table_virtuelle === true){
                                that.aller_a_la_page( null , null , '__num_page' , 0 , true , e.target.id );
                            }else{
                                that.aller_a_la_page( null , null , '__num_page' , 0 , false , e.target.id );
                            }
                        }
                    } );
            }
        }else{
            for(let i in that.tableau_des_filtres['liste1']){
                try{
                    let elem=document.getElementById( i );
                    elem.value=that.filtres['liste1'][i];
                    if(that.filtres['liste1'][i] !== ''){
                        elem.style.background='yellow';
                        if(elem.id !== '__num_page'){
                            elem.parentNode.parentNode.style.backgroundColor='yellow';
                        }
                    }else{
                        elem.style.background='';
                        if(elem.id !== '__num_page'){
                            elem.parentNode.parentNode.style.backgroundColor='';
                        }
                    }
                } catch {}
            }
        }
        if(de_13 === ''){
            that.__ig1.delai_selectionner_champ_filtre();
        }else{
            try{
                document.getElementById( de_13 ).select();
            } catch {}
        }
    }
    /*
      =============================================================================================================
    */
    raz_zone_et_select1( mat , d , x ){
        let l01=mat.length;
        let id='';
        let origine_de_l_appel_liste='';
        let champ_texte_associé='';
        let champ_libelle_associé='';
        let cle_session='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id=mat[i + 1][1];
            }else if(mat[i][1] === 'origine_de_l_appel_liste' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                origine_de_l_appel_liste=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'champ_texte_associé' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_texte_associé=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'champ_libelle_associé' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_libelle_associé=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'cle_session' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                cle_session=mat[i + 1][1];
            }
        }
        if(champ_texte_associé !== ''){
            try{
                document.getElementById( champ_texte_associé ).value='';
                document.getElementById( champ_texte_associé ).type='text';
                document.getElementById( champ_libelle_associé ).innerHTML='';
                document.getElementById( champ_libelle_associé ).style.visibility='hidden';
            } catch {}
        }
        try{
            document.getElementById( id ).value='';
            document.getElementById( id ).focus();
        }catch(e){}
        let appel_fait=false;
        if(origine_de_l_appel_liste !== ''){
            if(champ_texte_associé !== ''){
                let cmd1='m1(n1(' + origine_de_l_appel_liste + '),f1(raz_champ_filtre_grandeurs0(' + champ_texte_associé + ')))';
                appel_fait=true;
                this.__ig1.executer1( cmd1 );
            }
        }
        if(!appel_fait){
            try{
                let vv_bouton_loupe=document.getElementById( 'vv_bouton_loupe' );
                if(vv_bouton_loupe === null){
                    let yy_bouton_loupe_sous_fenetre2=document.getElementById( 'yy_bouton_loupe_sous_fenetre2' );
                    if(yy_bouton_loupe_sous_fenetre2 !== null){
                        this.__ig1.executer1( yy_bouton_loupe_sous_fenetre2.getAttribute( 'data-rev_click' ) );
                    }
                }else{
                    this.__ig1.executer1( vv_bouton_loupe.getAttribute( 'data-rev_click' ) );
                }
            }catch(e1){
                debugger;
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    filtre_zero_un( mat , d , x ){
        let l01=mat.length;
        let id='';
        let valeur='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'id' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'valeur' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=mat[i + 1][1];
            }
        }
        document.getElementById( id ).value=valeur;
        let le_parent=null;
        let lst=document.querySelectorAll( '[data-filtre_zero_id="' + id + '"]' );
        for( let i=0 ; i < lst.length ; i++ ){
            le_parent=lst[i].parentNode.parentNode.parentNode;
            if(lst[i].getAttribute( 'data-pos' ) === ''){
                if(valeur === ''){
                    lst[i].classList.add( 'yy__4' );
                }else{
                    lst[i].classList.remove( 'yy__4' );
                }
            }
            if(lst[i].getAttribute( 'data-pos' ) === '0'){
                if(valeur === '0'){
                    lst[i].classList.add( 'yy__0' );
                }else{
                    lst[i].classList.remove( 'yy__0' );
                }
            }
            if(lst[i].getAttribute( 'data-pos' ) === '1'){
                if(valeur === '1'){
                    lst[i].classList.add( 'yy__1' );
                }else{
                    lst[i].classList.remove( 'yy__1' );
                }
            }
        }
        if(valeur === ''){
            try{
                le_parent.style.backgroundColor='';
            } catch {}
        }else{
            try{
                le_parent.style.backgroundColor='yellow';
            } catch {}
        }
        let vv_bouton_loupe=document.getElementById( 'vv_bouton_loupe' );
        this.__ig1.executer1( vv_bouton_loupe.getAttribute( 'data-rev_click' ) );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    filtre_nulle_zero_un( mat , d , x ){
        let l01=mat.length;
        let id='';
        let valeur='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'id' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'valeur' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=mat[i + 1][1];
            }
        }
        document.getElementById( id ).value=valeur;
        let le_parent=null;
        let lst=document.querySelectorAll( '[data-filtre_zero_id="' + id + '"]' );
        for( let i=0 ; i < lst.length ; i++ ){
            le_parent=lst[i].parentNode.parentNode.parentNode;
            if(lst[i].getAttribute( 'data-pos' ) === ''){
                if(valeur === ''){
                    lst[i].classList.add( 'yy__4' );
                }else{
                    lst[i].classList.remove( 'yy__4' );
                }
            }
            if(lst[i].getAttribute( 'data-pos' ) === '0'){
                if(valeur === '0'){
                    lst[i].classList.add( 'yy__0' );
                }else{
                    lst[i].classList.remove( 'yy__0' );
                }
            }
            if(lst[i].getAttribute( 'data-pos' ) === '1'){
                if(valeur === '1'){
                    lst[i].classList.add( 'yy__1' );
                }else{
                    lst[i].classList.remove( 'yy__1' );
                }
            }
            if(lst[i].getAttribute( 'data-pos' ) === '-1'){
                if(valeur === '-1'){
                    lst[i].classList.add( 'yy__2' );
                }else{
                    lst[i].classList.remove( 'yy__2' );
                }
            }
        }
        if(valeur === ''){
            try{
                le_parent.style.backgroundColor='';
            } catch {}
        }else{
            try{
                le_parent.style.backgroundColor='yellow';
            } catch {}
        }
        let vv_bouton_loupe=document.getElementById( 'vv_bouton_loupe' );
        this.__ig1.executer1( vv_bouton_loupe.getAttribute( 'data-rev_click' ) );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selection_grandeur_filtre1( mat , d ){
        let l01=mat.length;
        let id_zone='';
        let table_mere='';
        let puiser_avec='';
        let chi_id_parametre=0;
        let origine_de_l_appel_liste='';
        let champ_texte_associé='';
        let champ_libelle_associé='';
        let cle_session='';
        let __sous_titre_a_afficher='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'id_zone' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'chi_id_parametre' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_parametre=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'table_mere' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                table_mere=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'puiser_avec' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                puiser_avec=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'origine_de_l_appel_liste' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                origine_de_l_appel_liste=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'champ_texte_associé' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_texte_associé=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'champ_libelle_associé' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ_libelle_associé=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'cle_session' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                cle_session=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && '__sous_titre_a_afficher' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                __sous_titre_a_afficher=mat[i + 1][1];
            }
        }
        if(champ_texte_associé !== ''){
        }
        if(chi_id_parametre > 0 && id_zone !== '' && table_mere !== '' && puiser_avec !== ''){
            let cmd1='';
            cmd1+='pm1(m1(n1(' + puiser_avec + '),f1(obtenir_les_grandeurs_pour_filtre_liste2(';
            cmd1+='id_zone( ' + id_zone + '),';
            cmd1+='chi_id_parametre(' + chi_id_parametre + '),';
            cmd1+='origine_de_l_appel_liste(' + origine_de_l_appel_liste + ')';
            cmd1+='champ_texte_associé(' + champ_texte_associé + ')';
            cmd1+='champ_libelle_associé(' + champ_libelle_associé + ')';
            cmd1+='cle_session(' + cle_session + ')';
            cmd1+='__sous_titre_a_afficher(\'' + __sous_titre_a_afficher.replace( /\\/ , '\\\\' ).replace( /\'/ , '\\\'' ) + '\')';
            cmd1+='))))';
            this.__ig1.envoyer_un_colis_au_worker( {
                     /*  */
                    "__xac" : cmd1 ,
                    "__xva" : {}
                } );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xer" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    popup_horloge1( mat , d , x , evenement_navigateur ){
        let l01=mat.length;
        let nom_du_champ='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        if(nom_du_champ === ''){
            return({"__xst" : __xer ,"__xme" : 'paramètre "nom_du_champ" non trouvé !'});
        }
        let ref_champ_heure=null;
        try{
            ref_champ_heure=document.getElementById( nom_du_champ );
        } catch {}
        if(ref_champ_heure === null){
            return({"__xst" : __xer ,"__xme" : '"' + nom_du_champ + '" non trouvé dans la page !'});
        }
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        let dim=null;
        if(evenement_navigateur && evenement_navigateur.target){
            dim=evenement_navigateur.target.getBoundingClientRect();
        }else{
            dim=ref_champ_heure.getBoundingClientRect();
        }
        vv_sous_fenetre1.style.minWidth='auto';
        vv_sous_fenetre1.style.maxWidth='none';
        vv_sous_fenetre1.style.width='fit-content';
        vv_sous_fenetre1.style.minHeight='auto';
        vv_sous_fenetre1.style.maxHeight='none';
        vv_sous_fenetre1.style.position='absolute';
        vv_sous_fenetre1.style.top=parseInt( dim.top , 10 ) + 'px';
        vv_sous_fenetre1.style.left=parseInt( dim.left , 10 ) + 'px';
        vv_sous_fenetre1.style.margin='0';
        vv_sous_fenetre1.style.padding='0';
        vv_sous_fenetre1.style.borderRadius=this.__ig1.css_dimensions.t_rayon_b + 'px';
        /*
          affichage du calendrier
        */
        let maintenant=new Date();
        let heure_a_afficher=maintenant.getHours();
        let minute_a_afficher=maintenant.getMinutes();
        let seconde_a_afficher=maintenant.getSeconds();
        if(ref_champ_heure.value !== ''){
            let obj=this.__ig1.__fnts_c_et_s.test_heure_nulle_ou_comprise_entre( '00:00:00' , '23:59:59' , ref_champ_heure.value , nom_du_champ );
            if(obj.__xst === __xsu){
                heure_a_afficher=parseInt( ref_champ_heure.value.substr( 0 , 2 ) , 10 );
                minute_a_afficher=parseInt( ref_champ_heure.value.substr( 3 , 2 ) , 10 );
                seconde_a_afficher=parseInt( ref_champ_heure.value.substr( 6 , 2 ) , 10 );
            }
        }
        this.affiche_horloge1( this.html_de_horloge1( nom_du_champ , heure_a_afficher , minute_a_afficher , seconde_a_afficher ) );
        vv_sous_fenetre1.showModal();
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_drop_horloge( mat , d ){
        let l01=mat.length;
        let zone_select='';
        let nom_du_champ='';
        let valeur=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'zone_select' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        if(zone_select === 'vv_option_heure'){
            let val=parseInt( document.getElementById( zone_select ).value , 10 );
            this.maj_heure1( nom_du_champ , val );
        }else if(zone_select === 'vv_option_minute'){
            let val=parseInt( document.getElementById( zone_select ).value , 10 );
            this.maj_minute( nom_du_champ , val );
        }else if(zone_select === 'vv_option_seconde'){
            let val=parseInt( document.getElementById( zone_select ).value , 10 );
            this.maj_seconde( nom_du_champ , val );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    definir_l_heure( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let valeur=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'valeur' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.maj_heure1( nom_du_champ , valeur );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_heure1( nom_du_champ , valeur ){
        let sepa_heure=':';
        let heure_a_afficher=valeur;
        let minute_a_afficher=0;
        let seconde_a_afficher=0;
        let dt=new Date();
        let t='';
        let valeur_courante=document.getElementById( nom_du_champ ).value;
        if(valeur_courante === ''){
            heure_a_afficher=valeur;
            t=((valeur < 10 ? ( '0' + valeur ) : ( valeur )) + sepa_heure) + '00' + sepa_heure + '00';
        }else{
            t=valeur < 10 ? ( '0' + valeur ) : ( valeur );
            try{
                minute_a_afficher=parseInt( valeur_courante.substr( 3 , 2 ) , 10 );
            }catch{
                minute_a_afficher=0;
            }
            try{
                seconde_a_afficher=parseInt( valeur_courante.substr( 6 , 2 ) , 10 );
            }catch{
                seconde_a_afficher=0;
            }
            minute_a_afficher=minute_a_afficher > 59 ? ( 0 ) : ( minute_a_afficher );
            minute_a_afficher=minute_a_afficher < 10 ? ( '0' + minute_a_afficher ) : ( minute_a_afficher );
            seconde_a_afficher=seconde_a_afficher > 59 ? ( 0 ) : ( seconde_a_afficher );
            seconde_a_afficher=seconde_a_afficher < 10 ? ( '0' + seconde_a_afficher ) : ( seconde_a_afficher );
            t+=sepa_heure + minute_a_afficher + sepa_heure + seconde_a_afficher;
        }
        document.getElementById( nom_du_champ ).value=t;
        let a=document.getElementById( 'vv_option_heure' );
        let es=a.getElementsByTagName( 'option' );
        for(let e in es){
            if(e == valeur){
                a.selectedIndex=valeur;
                break;
            }
        }
        this.affiche_horloge1( this.html_de_horloge1( nom_du_champ , heure_a_afficher , parseInt( minute_a_afficher , 10 ) , parseInt( seconde_a_afficher , 10 ) ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    definir_la_minute( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let valeur=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'valeur' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.maj_minute( nom_du_champ , valeur );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_minute( nom_du_champ , valeur ){
        let sepa_heure=':';
        let heure_a_afficher=0;
        let minute_a_afficher=valeur;
        let seconde_a_afficher=0;
        let dt=new Date();
        let t='';
        let valeur_courante=document.getElementById( nom_du_champ ).value;
        if(valeur_courante === ''){
            t='00' + sepa_heure + (valeur < 10 ? ( '0' + valeur ) : ( valeur )) + sepa_heure + '00';
        }else{
            t=valeur_courante.substr( 0 , 3 ) + (valeur < 10 ? ( '0' + valeur ) : ( valeur )) + valeur_courante.substr( 5 );
            heure_a_afficher=parseInt( valeur_courante.substr( 0 , 2 ) , 10 );
            seconde_a_afficher=parseInt( valeur_courante.substr( 6 , 2 ) , 10 );
        }
        document.getElementById( nom_du_champ ).value=t;
        let a=document.getElementById( 'vv_option_minute' );
        let es=a.getElementsByTagName( 'option' );
        for(let e in es){
            if(e == valeur){
                a.selectedIndex=valeur;
                break;
            }
        }
        this.affiche_horloge1( this.html_de_horloge1( nom_du_champ , heure_a_afficher , minute_a_afficher , seconde_a_afficher ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    definir_la_seconde( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let valeur=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'valeur' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                valeur=parseInt( mat[i + 1][1] , 10 );
            }
        }
        this.maj_seconde( nom_du_champ , valeur );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_seconde( nom_du_champ , valeur ){
        let sepa_heure=':';
        let heure_a_afficher=0;
        let minute_a_afficher=0;
        let seconde_a_afficher=valeur;
        let dt=new Date();
        let t='';
        let valeur_courante=document.getElementById( nom_du_champ ).value;
        if(valeur_courante === ''){
            t='00' + sepa_heure + (valeur < 10 ? ( '0' + valeur ) : ( valeur )) + sepa_heure + '00';
        }else{
            t=valeur_courante.substr( 0 , 6 ) + (valeur < 10 ? ( '0' + valeur ) : ( valeur ));
            heure_a_afficher=parseInt( valeur_courante.substr( 0 , 2 ) , 10 );
            minute_a_afficher=parseInt( valeur_courante.substr( 3 , 2 ) , 10 );
        }
        document.getElementById( nom_du_champ ).value=t;
        let a=document.getElementById( 'vv_option_seconde' );
        let es=a.getElementsByTagName( 'option' );
        for(let e in es){
            if(e == valeur){
                a.selectedIndex=valeur;
                break;
            }
        }
        this.affiche_horloge1( this.html_de_horloge1( nom_du_champ , heure_a_afficher , minute_a_afficher , seconde_a_afficher ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    html_de_horloge1( nom_du_champ , heure_a_afficher , minute_a_afficher , seconde_a_afficher ){
        let o1='';
        let maintenant=new Date();
        let ref_champ_date=document.getElementById( nom_du_champ );
        let annee_courante=maintenant.getFullYear();
        var la_date_est_renseignee=false;
        if(ref_champ_date.value !== ''){
            annee_courante=parseInt( ref_champ_date.value.substr( 0 , 4 ) , 10 );
        }
        o1+='<style type="text/css">';
        o1+='#vv_horloge td{';
        o1+='  min-width:2em;';
        o1+='  text-align:center;';
        o1+='  border-width:' + this.__ig1.css_dimensions.t_border + 'px;';
        o1+='  border-style:solid;';
        o1+='  border-color:white;';
        o1+='}';
        o1+='</style>';
        o1+='<table id="vv_horloge" border="0">';
        /*
          =====================================================================================================
          les 3 dropdown
        */
        o1+='<tr style="box-shadow:none;">';
        /* dropdown hh */
        o1+='<td style="border-color:hotpink;" colspan="2">';
        o1+='<select id="vv_option_heure" data-rev_change="m1( n1(' + this.moi + '), f1(maj_drop_horloge(zone_select(vv_option_heure),nom_du_champ(' + nom_du_champ + '))))">';
        for( let i=0 ; i < 24 ; i++ ){
            let sele1='';
            if(heure_a_afficher === i){
                sele1=' selected="true" ';
            }
            o1+='<option ' + sele1 + ' value="' + i + '">' + (i < 10 ? ( '0' + i ) : ( i )) + '</option>';
        }
        o1+='</select>';
        o1+='</td>';
        /* dropdown mm */
        o1+='<td style="border-color:hotpink;" colspan="2">';
        o1+='<select id="vv_option_minute" data-rev_change="m1( n1(' + this.moi + '), f1(maj_drop_horloge(zone_select(vv_option_minute),nom_du_champ(' + nom_du_champ + '))))">';
        for( let i=0 ; i < 60 ; i++ ){
            let sele1='';
            if(minute_a_afficher === i){
                sele1=' selected="true" ';
            }
            o1+='<option ' + sele1 + ' value="' + i + '">' + (i < 10 ? ( '0' + i ) : ( i )) + '</option>';
        }
        o1+='</select>';
        o1+='</td>';
        /* dropdown ss */
        o1+='<td style="border-color:hotpink;" colspan="2">';
        o1+='<select  id="vv_option_seconde" data-rev_change="m1( n1(' + this.moi + '), f1(maj_drop_horloge(zone_select(vv_option_seconde),nom_du_champ(' + nom_du_champ + '))))">';
        for( let i=0 ; i < 60 ; i++ ){
            let sele1='';
            if(seconde_a_afficher === i){
                sele1=' selected="true" ';
            }
            o1+='<option ' + sele1 + ' value="' + i + '">' + (i < 10 ? ( '0' + i ) : ( i )) + '</option>';
        }
        o1+='</select>';
        o1+='</td>';
        o1+='</tr>';
        /*
          =====================================================================================================
          les 24 heures
        */
        for( let i=0 ; i < 24 ; i++ ){
            if(i% 6 === 0){
                o1+='<tr style="box-shadow:none;">';
            }
            o1+='<td style="border-color:red;">';
            if(ref_champ_date.value !== '' && heure_a_afficher === i){
                o1+='<span style="background:yellow;">' + (i < 10 ? ( '0' + i ) : ( i )) + '</span>';
            }else{
                o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(definir_l_heure(nom_du_champ(' + nom_du_champ + '),valeur(' + i + '))))" title="' + i + 'h">' + (i < 10 ? ( '0' + i ) : ( i )) + '</div>';
            }
            o1+='</td>';
            if(i + 1% 6 === 0){
                o1+='</tr>';
            }
        }
        /*
          =====================================================================================================
          les 10 minutes
        */
        o1+='<tr style="box-shadow:none;">';
        for( let i=0 ; i < 60 ; i+=10 ){
            o1+='<td style="border-color:lime;">';
            if(ref_champ_date.value !== '' && minute_a_afficher === i){
                o1+='<span style="background:yellow;">' + (i < 10 ? ( '0' + i ) : ( i )) + '</span>';
            }else{
                o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(definir_la_minute(nom_du_champ(' + nom_du_champ + '),valeur(' + i + '))))" title="' + i + 'mn">' + (i < 10 ? ( '0' + i ) : ( i )) + '</div>';
            }
            o1+='</td>';
            o1+='</td>';
        }
        o1+='</tr>';
        /*
          =====================================================================================================
          les 10 secondes
        */
        o1+='<tr style="box-shadow:none;">';
        for( let i=0 ; i < 60 ; i+=10 ){
            o1+='<td style="border-color:hotpink;">';
            if(ref_champ_date.value !== '' && seconde_a_afficher === i){
                o1+='<span style="background:yellow;">' + (i < 10 ? ( '0' + i ) : ( i )) + '</span>';
            }else{
                o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(definir_la_seconde(nom_du_champ(' + nom_du_champ + '),valeur(' + i + '))))" title="' + i + 'ss">' + (i < 10 ? ( '0' + i ) : ( i )) + '</div>';
            }
            o1+='</td>';
        }
        o1+='</tr>';
        /*
          les boutons du bas
        */
        o1+='<tr style="box-shadow:none;">';
        /*
        */
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt yy__4" data-rev_click="m1(n1(__fnt1),f1(maintenant_hhmmss(nom_du_champ(' + nom_du_champ + '),option(0))))" title="nulle">Ø</div>';
        o1+='</td>';
        /*
          maintenant hh mm ss
        */
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(maintenant_hhmmss(nom_du_champ(' + nom_du_champ + '),option(1))))" title="maintenant">mn</div>';
        o1+='</td>';
        /*
        */
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(maintenant_hhmmss(nom_du_champ(' + nom_du_champ + '),option(2))))" title="secondes à zéro">hm</div>';
        o1+='</td>';
        /*
        */
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(maintenant_hhmmss(nom_du_champ(' + nom_du_champ + '),option(3))))" title="minutes et secondes à zéro">00</div>';
        o1+='</td>';
        /*
        */
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt yy__1" data-rev_click="m1(n1(__fnt1),f1(maintenant_hhmmss(nom_du_champ(' + nom_du_champ + '),option(4))))" title="valider">OK</div>';
        o1+='</td>';
        /*
        */
        o1+='</tr>';
        o1+='</table>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    maintenant_hhmmss( mat , d ){
        let sepa_heure=':';
        let l01=mat.length;
        let nom_du_champ='';
        let option='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'option' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let tt=new Date();
        let t='';
        let heure_a_afficher=0;
        let minute_a_afficher=0;
        let seconde_a_afficher=0;
        if(option === 0){
            /* nulle */
        }else if(option === 1){
            t=(tt.getHours() < 10 ? ( '0' + tt.getHours() ) : ( tt.getHours() )) + sepa_heure + (tt.getMinutes() < 10 ? ( '0' + tt.getMinutes() ) : ( tt.getMinutes() )) + sepa_heure + (tt.getSeconds() < 10 ? ( '0' + tt.getSeconds() ) : ( tt.getSeconds() ));
            heure_a_afficher=tt.getHours();
            minute_a_afficher=tt.getMinutes();
            seconde_a_afficher=tt.getSeconds();
        }else if(option === 2){
            t=((tt.getHours() < 10 ? ( '0' + tt.getHours() ) : ( tt.getHours() )) + sepa_heure + (tt.getMinutes() < 10 ? ( '0' + tt.getMinutes() ) : ( tt.getMinutes() )) + sepa_heure) + '00';
            heure_a_afficher=tt.getHours();
            minute_a_afficher=tt.getMinutes();
            seconde_a_afficher=0;
        }else if(option === 3){
            t=((tt.getHours() < 10 ? ( '0' + tt.getHours() ) : ( tt.getHours() )) + sepa_heure) + '00' + sepa_heure + '00';
            heure_a_afficher=tt.getHours();
            minute_a_afficher=0;
            seconde_a_afficher=0;
        }else if(option === 4){
            this.__ig1.fermer_la_sous_fenetre();
            return({"__xst" : __xsu});
        }
        document.getElementById( nom_du_champ ).value=t;
        this.affiche_horloge1( this.html_de_horloge1( nom_du_champ , heure_a_afficher , minute_a_afficher , seconde_a_afficher ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        /* this.__ig1.fermer_la_sous_fenetre(); */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    affiche_horloge1( le_chetemel ){
        let a=this.getPageSize();
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=le_chetemel;
        setTimeout( function( p ){
                /* ajustement horizontal */
                let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                let tt=vv_sous_fenetre1.getBoundingClientRect();
                if(tt.right > p.width){
                    let nouveau_left=Math.max( parseInt( vv_sous_fenetre1.style.left.replace( /px/ , '' ) , 10 ) - (tt.right - p.width) , 0 );
                    if(nouveau_left >= 20){
                        nouveau_left-=20;
                    }
                    if(nouveau_left <= 10){
                        nouveau_left=0;
                    }
                    vv_sous_fenetre1.style.left=nouveau_left + 'px';
                }
                /* ajustement vertical */
                setTimeout( function( p ){
                        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                        let tt=vv_sous_fenetre1.getBoundingClientRect();
                        if(tt.bottom > p.height){
                            window.scrollTo( {"top" : parseInt( tt.bottom - p.height , 10 )} );
                        }
                } , 50 , p );
        } , 50 , a );
    }
    /* ===================================================================================================================== */
    numero_de_semaine( dt ){
        var d=new Date( Date.UTC( dt.getFullYear() , dt.getMonth() , dt.getDate() ) );
        var dayNum=d.getUTCDay() || 7;
        d.setUTCDate( (d.getUTCDate() + 4) - dayNum );
        var yearStart=new Date( Date.UTC( d.getUTCFullYear() , 0 , 1 ) );
        return(Math.ceil( ((d - yearStart) / 86400000 + 1) / 7 ));
    }
    /*
      =============================================================================================================
    */
    ajouter_jours( dt , nb_jours ){
        var dat=new Date( dt.valueOf() );
        dat.setDate( dat.getDate() + nb_jours );
        return dat;
    }
    /*
      =============================================================================================================
    */
    annuler_le_champ_date1( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        document.getElementById( nom_du_champ ).value='';
        this.__ig1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_le_jour_courant( mat , d ){
        let sepa_date='-';
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        let tt=new Date();
        let t=tt.getFullYear() + sepa_date + (tt.getMonth() + 1 < 10 ? ( '0' + (tt.getMonth() + 1) ) : ( tt.getMonth() + 1 )) + sepa_date + (tt.getDate() < 10 ? ( '0' + tt.getDate() ) : ( tt.getDate() ));
        document.getElementById( nom_du_champ ).value=t;
        this.__ig1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    selectionner_la_date1( mat , d ){
        let sepa_date='-';
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'jour' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                jour=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let t=annee + sepa_date + (mois < 10 ? ( '0' + mois ) : ( mois )) + sepa_date + (jour < 10 ? ( '0' + jour ) : ( jour ));
        document.getElementById( nom_du_champ ).value=t;
        this.__ig1.fermer_la_sous_fenetre();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    mois_suivant( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(mois === 12){
            annee+=1;
            mois=1;
        }else{
            mois++;
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    mois_precedent( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(mois === 1){
            annee-=1;
            mois=12;
        }else{
            mois--;
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    annee_precedente( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(annee > 1000){
            annee-=1;
        }else{
            annee=1000;
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    annee_suivante( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(annee < 9999){
            annee+=1;
        }else{
            annee=9999;
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    affiche_mois_courant( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }
        }
        let tt=new Date();
        annee=tt.getFullYear();
        mois=tt.getMonth() + 1;
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    afficher_siecle( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        annee=annee - annee% 50;
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois , true ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    demi_siecle_precedent( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(annee >= 1050){
            annee-=50;
        }else{
            annee=1000;
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois , true ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    demi_siecle_suivant( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(annee < 9950){
            annee+=50;
        }else{
            annee=9950;
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois , true ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    choisir_annee( mat , d ){
        let l01=mat.length;
        let nom_du_champ='';
        let jour='';
        let mois='';
        let annee='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'mois' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                mois=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][2] === 'f' && 'annee' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                annee=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(!(annee >= 1000 && annee <= 9999)){
            let dt=new Date();
            annee=dt.getFullYear();
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee , mois ) );
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    html_de_date1( format_calendrier , nom_du_champ , annee_a_afficher , mois_a_afficher , afficher_siecle=false ){
        let o1='';
        let maintenant=new Date();
        let ref_champ_date=document.getElementById( nom_du_champ );
        let annee_courante=maintenant.getFullYear();
        var la_date_est_renseignee=false;
        if(ref_champ_date.value !== ''){
            annee_courante=parseInt( ref_champ_date.value.substr( 0 , 4 ) , 10 );
        }
        o1+='<style type="text/css">';
        o1+='#vv_calendrier td{';
        o1+='  min-width:2em;';
        o1+='  text-align:center;';
        o1+='  border-width:' + this.__ig1.css_dimensions.t_border + 'px;';
        o1+='  border-style:solid;';
        o1+='  border-color:white;';
        o1+='}';
        o1+='</style>';
        o1+='<table id="vv_calendrier" border="0">';
        if(afficher_siecle === true){
            o1+='<tr id="vv_premiere_ligne" style="box-shadow:none;">';
            /*  */
            let annee_de_debut=parseInt( annee_a_afficher / 100 , 10 ) * 100;
            if(annee_a_afficher - annee_de_debut >= 50){
                annee_de_debut+=50;
            }
            let derniere_annee=annee_de_debut + 49;
            /*  */
            o1+='<td id="vv_demi_siecle_precedente">';
            o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(demi_siecle_precedent(nom_du_champ(' + nom_du_champ + '),annee(' + annee_de_debut + '),mois(' + mois_a_afficher + '))))">&lt;</div>';
            o1+='</td>';
            /*  */
            o1+='<td colspan="3">';
            o1+='' + annee_de_debut + ' - ' + derniere_annee + '';
            o1+='</td>';
            /*  */
            o1+='<td id="vv_demi_siecle_precedente">';
            o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(demi_siecle_suivant(nom_du_champ(' + nom_du_champ + '),annee(' + annee_de_debut + '),mois(' + mois_a_afficher + '))))">&gt;</div>';
            o1+='</td>';
            /*  */
            o1+='</tr>';
            o1+='<tr>';
            annee_courante=annee_de_debut;
            let nb_annees_par_ligne=5;
            for( let i=0 ; i <= 49 ; i++ ){
                if(i% nb_annees_par_ligne == 0){
                    o1+='<tr>';
                }
                let sty1='';
                if(maintenant.getFullYear() === annee_courante){
                    sty1=' style="border-color:red;"';
                }
                o1+='<td ' + sty1 + ' data-i="' + i + '-' + (i% (nb_annees_par_ligne - 1)) + '-' + ((i - 1)% nb_annees_par_ligne) + '-' + '">';
                o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(choisir_annee(nom_du_champ(' + nom_du_champ + '),annee(' + annee_courante + '),mois(' + mois_a_afficher + '))))">' + annee_courante + '</div>';
                o1+='</td>';
                if(i >= nb_annees_par_ligne - 1 && (i - (nb_annees_par_ligne - 1))% nb_annees_par_ligne == 0){
                    o1+='</tr>';
                }
                annee_courante++;
            }
            o1+='</table>';
            return o1;
        }
        /*
          
          
        */
        o1+='<tr id="vv_premiere_ligne" style="box-shadow:none;">';
        /*
          
        */
        o1+='<td id="vv_annee_precedente">';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(annee_precedente(nom_du_champ(' + nom_du_champ + '),annee(' + annee_a_afficher + '),mois(' + mois_a_afficher + '))))">&lt;</div>';
        o1+='</td>';
        o1+='<td id="vv_annee_courante" colspan="2">';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(afficher_siecle(nom_du_champ(' + nom_du_champ + '),annee(' + annee_a_afficher + '),mois(' + mois_a_afficher + '))))">' + annee_a_afficher + '</div>';
        o1+='</td>';
        o1+='<td id="vv_annee_suivante">';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(annee_suivante(nom_du_champ(' + nom_du_champ + '),annee(' + annee_a_afficher + '),mois(' + mois_a_afficher + '))))">&gt;</div>';
        o1+='</td>';
        o1+='<td>&nbsp;</td>';
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt yy__4" data-rev_click="m1(n1(__fnt1),f1(annuler_le_champ_date1(nom_du_champ(' + nom_du_champ + '))))">Ø</div>';
        o1+='';
        o1+='</td>';
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt yy__1" data-rev_click="m1(n1(__fnt1),f1(selectionner_le_jour_courant(nom_du_champ(' + nom_du_champ + '))))" title="jour courant">JC</div>';
        o1+='</td>';
        o1+='<td>';
        o1+='<div class="rev_bouton rev_b_ctxt yy__4" data-rev_click="m1(n1(__fnt1),f1(affiche_mois_courant(nom_du_champ(' + nom_du_champ + '))))" title="mois courant">MC</div>';
        o1+='</td>';
        /*
          
        */
        o1+='</tr>';
        /*
          
          
        */
        let mois_courant=maintenant.getMonth() + 1;
        if(ref_champ_date.value !== ''){
            mois_courant=parseInt( ref_champ_date.value.substr( 5 , 2 ) , 10 );
        }
        let mois_courant_texte=mois_courant < 10 ? ( '0' + mois_courant ) : ( mois_courant );
        o1+='<tr id="vv_deuxieme_ligne" style="box-shadow:none;">';
        /*
          
        */
        o1+='<td>&nbsp;</td>';
        o1+='<td id="vv_mois_precedent">';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(mois_precedent(nom_du_champ(' + nom_du_champ + '),annee(' + annee_a_afficher + '),mois(' + mois_a_afficher + '))))">&lt;</div>';
        o1+='';
        o1+='</td>';
        o1+='<td id="vv_mois_courant" colspan="4">';
        o1+=annee_a_afficher + ' ' + (mois_a_afficher < 10 ? ( '0' + mois_a_afficher ) : ( mois_a_afficher ));
        o1+='</td>';
        o1+='<td id="vv_mois_suivant">';
        o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(mois_suivant(nom_du_champ(' + nom_du_champ + '),annee(' + annee_a_afficher + '),mois(' + mois_a_afficher + '))))">&gt;</div>';
        o1+='';
        o1+='</td>';
        o1+='<td>&nbsp;</td>';
        /*
          
        */
        o1+='</tr>';
        /*
          
          
        */
        o1+='<tr id="vv_trisieme_ligne" style="box-shadow:none;">';
        /*
          
        */
        o1+='<td>se</td>';
        o1+='<td>Lu</td>';
        o1+='<td>Ma</td>';
        o1+='<td>Me</td>';
        o1+='<td>Je</td>';
        o1+='<td>Ve</td>';
        o1+='<td>Sa</td>';
        o1+='<td>Di</td>';
        /*
          
        */
        o1+='</tr>';
        /*
          
          
        */
        let jour_courant=maintenant.getDate();
        let obj_date_de_la_zone=null;
        if(ref_champ_date.value !== ''){
            jour_courant=parseInt( ref_champ_date.value.substr( 8 , 2 ) , 10 );
            la_date_est_renseignee=true;
            obj_date_de_la_zone=new Date( annee_courante , mois_courant_texte - 1 , jour_courant );
        }
        let premier_jour_du_mois=new Date( annee_a_afficher , mois_a_afficher - 1 , 1 );
        /* 2017-11-01 = mercredi */
        let jour_du_premier_jour=premier_jour_du_mois.getDay();
        let dtFirstDay2=premier_jour_du_mois;
        if(jour_du_premier_jour == 0){
            jour_du_premier_jour=7;
            /* dayOfFirstDay */
        }
        o1+='<tr style="box-shadow:none;">';
        o1+='<td>' + this.numero_de_semaine( premier_jour_du_mois ) + '</td>';
        /* numeroDeSemaine */
        let numero_de_colonne=1;
        for( let i=0 ; i < jour_du_premier_jour - 1 ; i++ ){
            o1+='<td>&nbsp;</td>';
            numero_de_colonne++;
        }
        /* nM = mois_courant */
        /* nY = annee_courante */
        /* maxDay = jour_max */
        let jour_max=31;
        if(mois_a_afficher == 2){
            if(annee_a_afficher% 4 == 0 && !(annee_a_afficher% 100 == 0) || annee_a_afficher% 400 == 0){
                jour_max=29;
            }else{
                jour_max=28;
            }
        }else if(mois_a_afficher == 4 || mois_a_afficher == 6 || mois_a_afficher == 9 || mois_a_afficher == 11){
            jour_max=30;
        }
        /* lineNumber = numero_de_ligne */
        var numero_de_ligne=1;
        /* dateIsSet = la_date_est_renseignee */
        /* nD = jour_courant */
        for( let i=1 ; i <= jour_max ; i++ ){
            let date_en_cours=false;
            let fontWeight='';
            let borderSty1='';
            if(i == maintenant.getDate()
                   && mois_a_afficher == maintenant.getMonth() + 1
                   && annee_a_afficher == maintenant.getFullYear()
            ){
                if(obj_date_de_la_zone !== null
                       && i == jour_courant
                       && mois_a_afficher == obj_date_de_la_zone.getMonth() + 1
                       && annee_a_afficher == obj_date_de_la_zone.getFullYear()
                ){
                    borderSty1+='border-color:red;';
                    date_en_cours=true;
                }else{
                    borderSty1+='border-color:red;';
                }
            }else{
                if(obj_date_de_la_zone !== null
                       && i == jour_courant
                       && mois_a_afficher == obj_date_de_la_zone.getMonth() + 1
                       && annee_a_afficher == obj_date_de_la_zone.getFullYear()
                ){
                    borderSty1+='border-color:blue;border-style:inset;';
                    date_en_cours=true;
                }else{
                    borderSty1+='';
                    /* border-color:hotpink;' */
                }
            }
            /*#
              if (obj_date_de_la_zone!==null && i == jour_courant && mois_courant == obj_date_de_la_zone.getMonth() + 1 && annee_courante == obj_date_de_la_zone.getFullYear()) {
                  borderSty1+= 'border-color:red;'
              }
            */
            o1+='<td style="' + borderSty1;
            if((jour_du_premier_jour + 1)% 7 === 0 || (jour_du_premier_jour + 7)% 7 === 0){
                o1+='background-color:yellow;';
            }
            o1+='">';
            /* href="javascript:putDate1(' + annee_courante + ',' + mois_courant + ',' + i + ',\'' + valueId + '\',\'' + buttonId + '\',\'' + divId + '\',' + withDateNull + ',' + searchDateMode + ',\'' + callBackDate1 + '\')" */
            if(date_en_cours === true){
                o1+='<span>' + i + '</span>';
            }else{
                o1+='<div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(__fnt1),f1(selectionner_la_date1(nom_du_champ(' + nom_du_champ + '),jour(' + i + '),mois(' + mois_a_afficher + '),annee(' + annee_a_afficher + '))))">' + i + '</div>';
            }
            o1+='</td>';
            if(jour_du_premier_jour% 7 == 0){
                o1+='</tr>';
                o1+='<tr style="box-shadow:none;">';
                if(i + 1 <= jour_max){
                    dtFirstDay2=this.ajouter_jours( dtFirstDay2 , 7 );
                    o1+='<td>' + this.numero_de_semaine( dtFirstDay2 ) + '</td>';
                    /* numeroDeSemaine */
                    numero_de_colonne=1;
                }
                numero_de_ligne++;
            }
            jour_du_premier_jour++;
        }
        o1+='</tr>';
        if(numero_de_ligne < 6){
            for( let i=0 ; i < 6 - numero_de_ligne ; i++ ){
                o1+='<tr><td colspan="8">&nbsp;</td></tr>';
            }
        }else{
            if(numero_de_colonne === 1){
                o1+='<tr><td colspan="8">&nbsp;</td></tr>';
            }
        }
        /*
          
          
        */
        o1+='</table>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    maj_date1( mat , d , x , evenement_navigateur ){
        let l01=mat.length;
        let nom_du_champ='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'format_calendrier' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                format_calendrier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(nom_du_champ === ''){
            return({"__xst" : __xer ,"__xme" : 'paramètre "nom_du_champ" non trouvé !'});
        }
        let ref_champ_date=null;
        try{
            ref_champ_date=document.getElementById( nom_du_champ );
        } catch {}
        if(ref_champ_date === null){
            return({"__xst" : __xer ,"__xme" : '"' + nom_du_champ + '" non trouvé dans la page !'});
        }
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        let dim=null;
        if(evenement_navigateur && evenement_navigateur.target){
            dim=evenement_navigateur.target.getBoundingClientRect();
        }else{
            dim=ref_champ_date.getBoundingClientRect();
        }
        vv_sous_fenetre1.style.minWidth='auto';
        vv_sous_fenetre1.style.maxWidth='none';
        vv_sous_fenetre1.style.width='fit-content';
        vv_sous_fenetre1.style.minHeight='auto';
        vv_sous_fenetre1.style.maxHeight='none';
        vv_sous_fenetre1.style.position='absolute';
        vv_sous_fenetre1.style.top=parseInt( dim.top , 10 ) + 'px';
        vv_sous_fenetre1.style.left=parseInt( dim.left , 10 ) + 'px';
        vv_sous_fenetre1.style.margin='0';
        vv_sous_fenetre1.style.padding='0';
        /*
          affichage du calendrier
        */
        let maintenant=new Date();
        let annee_a_afficher=maintenant.getFullYear();
        let mois_a_afficher=maintenant.getMonth() + 1;
        if(ref_champ_date.value !== ''){
            let obj=this.__ig1.__fnts_c_et_s.test_date_nulle_ou_comprise_entre( '1000_01_01' , '9999_12_31' , ref_champ_date.value , nom_du_champ );
            if(obj.__xst === __xsu){
                annee_a_afficher=parseInt( ref_champ_date.value.substr( 0 , 4 ) , 10 );
                mois_a_afficher=parseInt( ref_champ_date.value.substr( 5 , 2 ) , 10 );
            }
        }
        this.affiche_calendrier( this.html_de_date1( format_calendrier , nom_du_champ , annee_a_afficher , mois_a_afficher ) );
        vv_sous_fenetre1.showModal();
        this.__ig1.ajoute_les_evenements_aux_boutons( null );
        return({"__xst" : __xsu});
    }
    /* ===================================================================================================================== */
    getPageSize(){
        let dkW=100;
        let dkH=100;
        if( typeof window.innerWidth === 'number'){
            /* adans la majorité des cas, on passe ici */
            dkW=window.innerWidth;
            dkH=window.innerHeight;
        }else{
            if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)){
                dkW=document.documentElement.clientWidth;
                dkH=document.documentElement.clientHeight;
            }else{
                if(document.body && (document.body.clientWidth || document.body.clientHeight)){
                    dkW=document.body.clientWidth;
                    dkH=document.body.clientHeight;
                }
            }
        }
        return({"width" : dkW ,"height" : dkH});
    }
    /*
      =============================================================================================================
    */
    affiche_calendrier( le_chetemel ){
        let a=this.getPageSize();
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=le_chetemel;
        setTimeout( function( p ){
                /* ajustement horizontal */
                let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                let tt=vv_sous_fenetre1.getBoundingClientRect();
                if(tt.right > p.width){
                    let nouveau_left=Math.max( parseInt( vv_sous_fenetre1.style.left.replace( /px/ , '' ) , 10 ) - (tt.right - p.width) , 0 );
                    if(nouveau_left >= 20){
                        nouveau_left-=20;
                    }
                    if(nouveau_left <= 10){
                        nouveau_left=0;
                    }
                    vv_sous_fenetre1.style.left=nouveau_left + 'px';
                }
                /* ajustement vertical */
                setTimeout( function( p ){
                        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
                        let tt=vv_sous_fenetre1.getBoundingClientRect();
                        if(tt.bottom > p.height){
                            console.log( tt , p );
                            window.scrollTo( {"top" : parseInt( tt.bottom - p.height , 10 )} );
                        }
                } , 50 , p );
        } , 50 , a );
    }
    /*
      =============================================================================================================
    */
    jour_courant1( mat , d , x , evenement_navigateur ){
        let sepa_date='-';
        let l01=mat.length;
        let nom_du_champ='';
        let format_calendrier=0;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'nom_du_champ' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_du_champ=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && 'format_calendrier' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                format_calendrier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(nom_du_champ === ''){
            return({"__xst" : __xer ,"__xme" : 'paramètre "nom_du_champ" non trouvé !'});
        }
        let maintenant=new Date();
        let t=maintenant.getFullYear() + sepa_date + (maintenant.getMonth() + 1 < 10 ? ( '0' + (maintenant.getMonth() + 1) ) : ( maintenant.getMonth() + 1 )) + sepa_date + (maintenant.getDate() < 10 ? ( '0' + maintenant.getDate() ) : ( maintenant.getDate() ));
        document.getElementById( nom_du_champ ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ajoute_le_contenu_du_titre( mat , debut ){
        let l01=mat.length;
        let id_zone='';
        for( let i=debut ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'ajoute_le_contenu_du_titre' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id_zone=mat[i + 1][1];
            }
        }
        if(id_zone === ''){
            return({"__xst" : __xsu});
        }
        let a=document.getElementById( id_zone );
        if(a !== null){
            let lst=a.getElementsByTagName( 'pre' );
            if(lst.length === 0){
                /* il n'y a pas de pre, on l'ajoute */
                var child=document.createElement( 'pre' );
                child.innerHTML=a.title;
                a.appendChild( child );
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    placer_le_curseur_en_lig_col1( mat , d ){
        let l01=mat.length;
        let ligne=null;
        let colonne=null;
        let zone_source=null;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('ligne' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                ligne=parseInt( mat[i + 1][1] , 10 );
            }
            if('colonne' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                colonne=parseInt( mat[i + 1][1] , 10 );
            }
            if('zone_source' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }
        }
        if(ligne !== null && colonne !== null && zone_source !== null){
            try{
                this.__ig1.masquer_la_zone_message();
                let aa=document.getElementById( zone_source );
                let tt=aa.value.split( '\n' );
                let pos_deb=0;
                for( let i=ligne - 2 ; i >= 0 ; i-- ){
                    pos_deb+=tt[i].length + 1;
                }
                aa.focus();
                aa.selectionStart=pos_deb;
                aa.selectionEnd=pos_deb + colonne;
                let toto=this.getCaretPos( aa , ligne );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    insérer_un_commentaire_rev1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            if(this.__ig1.derniere_zone_editee && zone_source === this.__ig1.derniere_zone_editee.id){
                let debut=this.__ig1.derniere_zone_editee.value.substr( 0 , this.__ig1.position_dans_la_derniere_zone_editee );
                let fin=this.__ig1.derniere_zone_editee.value.substr( this.__ig1.position_dans_la_derniere_zone_editee );
                let nouveau=debut + '#()' + fin;
                this.__ig1.derniere_zone_editee.value=nouveau;
                let obj=this.formater_le_rev_de_textarea1( mat , d );
                if(obj.__xst === __xsu){
                    return({"__xst" : __xsu});
                }
            }else{
                let a=document.getElementById( zone_source );
                let fin=a.value;
                let nouveau='#()' + fin;
                a.value=nouveau;
                let obj=this.formater_le_rev_de_textarea1( mat , d );
                if(obj.__xst === __xsu){
                    return({"__xst" : __xsu});
                }
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    formater_le_rev_de_textarea1( mat , d ){
        let l01=mat.length;
        let zone_source='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }
        }
        if(zone_source !== ''){
            let t=document.getElementById( zone_source );
            if(t){
                let tt=this.__ig1.__rev1.rev_tcm( t.value );
                if(tt.__xst === __xsu){
                    let ttt=this.__ig1.__rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
                    if(ttt.__xst === __xsu){
                        try{
                            t.value=ttt.__xva;
                        }catch(e){
                            debugger;
                        }
                        return({"__xst" : __xsu});
                    }
                }
            }
        }else{
            return({"__xst" : __xer ,"__xme" : 'zone source non trouvée ' + this.__ig1.nl2()});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    vider_la_zone( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            let t1=document.getElementById( zone_source );
            if(t1){
                t1.value='';
                t1.focus();
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    retrecir_la_zone( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            let t1=document.getElementById( zone_source );
            if(t1){
                t1.style.height='10vh';
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
      agrandir une zone textarea
    */
    agrandir_la_zone( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_source=mat[i + 1][1];
            }
        }
        if(zone_source !== ''){
            let t1=document.getElementById( zone_source );
            if(t1){
                let tt=t1.value.split( '\n' );
                if(tt.length < 60){
                    let le_texte=t1.value.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
                    t1.insertAdjacentHTML( 'afterend' , '<span style="white-space: pre;font-family:monospace;overflow-x:scroll;background:lightblue;" id="dummy">' + le_texte + '</span>' );
                    let rectangles=document.getElementById( 'dummy' ).getClientRects();
                    let numero_bloc=Math.max( rectangles.length - 1 , 0 );
                    let hauteur=Math.max( parseInt( ((rectangles[numero_bloc].y + rectangles[numero_bloc].height) - rectangles[0].y) + rectangles[0].height , 10 ) , 60 );
                    document.getElementById( 'dummy' ).remove();
                    /* ajout d'un espace de hauteur de police */
                    hauteur+=this.__ig1.css_dimensions.t_police;
                    t1.style.height=hauteur + 'px';
                }else{
                    t1.style.height=this.__ig1.css_dimensions.hauteur_max_textarea + 'vh';
                }
                let dim=t1.getBoundingClientRect();
                let bosition_bas=dim.bottom;
                /* window.innerHeight = partie visible de la fenêtre */
                let difference=parseInt( window.innerHeight , 10 ) - parseInt( bosition_bas , 10 );
                if(difference - 2 * this.__ig1.css_dimensions.h_barre < 0){
                    /* il faut faire défiler le fenêtre de la différence */
                    let valeur_scroll_actuel=window.scrollY;
                    let decallage=valeur_scroll_actuel - difference;
                    /* on ajoute au décallage 2*( la hauteur du pied de page ) */
                    decallage=decallage + 2 * this.__ig1.css_dimensions.h_barre;
                    window.scrollTo( 0 , decallage );
                }
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    remplacer_la_valeur_dans_la_zone( mat , d ){
        let l01=mat.length;
        let zone_source='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            let aa=document.getElementById( zone_source ).value;
            let cc=document.getElementById( 'vv_valeur_a_remplacer' ).value;
            if(cc !== ''){
                let dd=document.getElementById( 'vv_valeur_remplacante' ).value;
                let b=new RegExp( cc , 'g' );
                aa=aa.replace( b , dd );
                document.getElementById( zone_source ).value=aa;
                this.__ig1.fermer_la_sous_fenetre();
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    remplacer_dans_la_zone( mat , d ){
        let l01=mat.length;
        let zone_source='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            this.__ig1.zone_d_edition_en_cours=zone_source;
            let aa=document.getElementById( zone_source );
            let bb='';
            if(aa.selectionStart === aa.selectionEnd){
            }else{
                bb=document.getElementById( zone_source ).value.substr( aa.selectionStart , aa.selectionEnd - aa.selectionStart );
            }
            let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
            let o1='';
            o1+='<h1>remplacer</h1>';
            o1+='<input id="vv_valeur_a_remplacer" value="' + bb + '" />';
            o1+='<br />';
            o1+='<input id="vv_valeur_remplacante" value="" />';
            o1+='<br />';
            o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(remplacer_la_valeur_dans_la_zone(zone_source(' + zone_source + '))))" title="remplacer_dans_la_zone" >remplacer</div>\r\n';
            this.__ig1.affiche_sous_fenetre1( o1 );
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    copier_le_contenu1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            this.__ig1.zone_d_edition_en_cours=zone_source;
            const copyToClipboard=async ( str ) => {
                try{
                    await navigator.clipboard.writeText( str );
                }catch(e){
                    console.error( e );
                }
            };
            copyToClipboard( document.getElementById( zone_source ).value );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    effacer_la_selection( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            this.__ig1.zone_d_edition_en_cours=zone_source;
            let aa=document.getElementById( zone_source );
            if(aa.selectionStart === aa.selectionEnd){
                this.__ig1.affiche_les_messages( {"__xst" : __xsu ,"__xme" : 'zone de sélection vide'} );
                return({"__xst" : __xsu});
            }else{
                let debut=aa.value.substr( 0 , aa.selectionStart );
                let fin=aa.value.substr( aa.selectionEnd );
                aa.value=debut + fin;
                return({"__xst" : __xsu});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    copier_contenu_de_champ1_dans_champ_2( mat , d ){
        let l01=mat.length;
        let champ1='';
        let champ2='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'champ1' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ1=mat[i + 1][1];
            }else if(mat[i][2] === 'f' && mat[i][1] === 'champ2' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                champ2=mat[i + 1][1];
            }
        }
        if(champ1 !== '' && champ2 !== ''){
            try{
                document.getElementById( champ2 ).value=document.getElementById( champ1 ).value;
            }catch{
                return({"__xst" : __xer ,"__xme" : 'erreur de copie'});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    copier_le_contenu_sélectionné1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            this.__ig1.zone_d_edition_en_cours=zone_source;
            const copyToClipboard=async ( str ) => {
                try{
                    await navigator.clipboard.writeText( str );
                    /* console.log("copied"); */
                }catch(e){
                    console.error( e );
                }
            };
            let aa=document.getElementById( zone_source );
            if(aa.selectionStart === aa.selectionEnd){
                this.__ig1.affiche_les_messages( {"__xst" : __xsu ,"__xme" : 'zone de sélection vide'} );
                return({"__xst" : __xsu});
            }else{
                let bb=document.getElementById( zone_source ).value.substr( aa.selectionStart , aa.selectionEnd - aa.selectionStart );
                copyToClipboard( bb );
                return({"__xst" : __xsu});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    coller_le_contenu_sélectionné1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            document.getElementById( zone_source ).focus();
            const paste_from=async ( zone_source ) => {
                try{
                    const clipboardContents=await navigator.clipboard.read();
                    for(let item of clipboardContents){
                        if(!item.types.includes( "text/plain" )){
                            this.__ig1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'le contenu du press-papier n\'est pas de type texte'} );
                            this.__ig1.affiche_les_messages();
                            return({"__xst" : __xsu});
                        }
                        const blob=await item.getType( "text/plain" );
                        const blobText=await blob.text();
                        let zone=document.getElementById( zone_source );
                        let contenu_actuel=zone.value;
                        let contenu_avant=contenu_actuel.substr( 0 , zone.selectionStart );
                        let contenu_apres=contenu_actuel.substr( zone.selectionEnd );
                        let nouveau_contenu=contenu_avant + blobText + contenu_apres;
                        zone.value=nouveau_contenu;
                        let tt=contenu_avant + blobText;
                        zone.selectionStart=contenu_avant.length;
                        zone.selectionEnd=tt.length;
                        zone.focus();
                    }
                }catch(e){
                    console.error( e );
                }
            };
            paste_from( zone_source );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      // inspiré de https://erikmartinjordan.com/get-caret-position-textarea-pixels
    */
    getCaretPos( la_textarea , numero_de_ligne ){
        let le_texte=la_textarea.value.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
        /* Appending element to the DOM after textarea */
        let le_bounding=la_textarea.getBoundingClientRect();
        let le_top=le_bounding.top + this.__ig1.css_dimensions.t_padding_de_input + this.__ig1.css_dimensions.t_border;
        let le_left=parseInt( le_bounding.left + this.__ig1.css_dimensions.t_padding_de_input + this.__ig1.css_dimensions.t_border , 10 );
        let le_height=parseInt( le_bounding.height , 10 );
        let le_contenu='';
        /*
          je ne comprends pas pourquoi il faut absolument mettre un span ici
          Le fait d'un mettre un span permet d'utiliser getClientRects();
          et chaque ligne est dans un rectangle, il suffit alors de choisir le bon rectangle
        */
        le_contenu+='<span ';
        le_contenu+=' style="';
        le_contenu+='white-space: pre;';
        le_contenu+='font-family:monospace;';
        le_contenu+='overflow-x:scroll;';
        le_contenu+='background:lightblue;';
        le_contenu+='margin-top: -363px;';
        le_contenu+='margin-left: 6px; ';
        le_contenu+='line-height: ' + (this.__ig1.css_dimensions.t_police + 2) + 'px;';
        /*#
          ne pas mettre ceci sauf pour la phase de debug
          le_contenu+='display: block; ';
          mettre le contenu en js pour exemple
           var a='001';
           var a='002';
           var a='003';
           var a='004';
           var a='005';
           var a='006';
           var a='007';
           var a='008';
           var a='009';
           var a='010';
           var a='011';
           var a='012';
           var a='013';
           var a='014';
           var a='015';
           var a='016';
           var a='017';
           var a='018';
           var a='019';
           var a='020';
           var a='021';
           var a='022';
           var a bb='023';
           var a='024';
           var a='025';
           var a='026';
           var a='027';
           var a='028';
           var a='029';
           var a='030';
           var a='031';
           var a='032';
           var a='033';
           var a='034';
           var a='035';
           var a='036';
           var a='037';
           var a='038';
        */
        le_contenu+='" ';
        le_contenu+=' id="vv_bidon_pour_positionnement">';
        le_contenu+=le_texte;
        le_contenu+='</span>';
        la_textarea.insertAdjacentHTML( 'afterend' , le_contenu );
        let rectangles=document.getElementById( 'vv_bidon_pour_positionnement' ).getClientRects();
        let numero_bloc=Math.min( rectangles.length - 1 , numero_de_ligne );
        /* debugger */
        let decallage_y=0;
        if(rectangles.length >= numero_bloc){
            /* decallage_y=parseInt( rectangles[numero_bloc].y - rectangles[0].y - rectangles[0].height - 2 * this.__ig1.css_dimensions.t_border - 2 * this.__ig1.css_dimensions.t_padding_de_input - numero_bloc , 10 ); */
            decallage_y=parseInt( rectangles[numero_bloc].y - rectangles[0].y , 10 );
        }else{
            decallage_y=999999999;
        }
        document.getElementById( 'vv_bidon_pour_positionnement' ).remove();
        if(decallage_y <= le_height / 2){
            decallage_y=0;
        }else{
            decallage_y=decallage_y - le_height / 2;
        }
        function decal( par ){
            /* console.log(par) */
            par.la_textarea.scrollTo( 0 , par.decallage_y );
            par.la_textarea.focus();
        }
        setTimeout( decal , 20 , {"la_textarea" : la_textarea ,"decallage_y" : decallage_y ,"numero_bloc" : numero_bloc} );
    }
    /*
      =============================================================================================================
    */
    placer_le_curseur_en_lig1( mat , d ){
        let l01=mat.length;
        let ligne=null;
        let zone=null;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if('ligne' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                ligne=parseInt( mat[i + 1][1] , 10 );
            }else if('zone' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone=mat[i + 1][1];
            }
        }
        if(ligne && zone){
            try{
                let aa=document.getElementById( zone );
                let tt=aa.value.split( '\n' );
                let pos_deb=0;
                if(ligne - 2 > tt.length - 1){
                    pos_deb=999999999;
                }else{
                    for( let i=ligne - 2 ; i >= 0 ; i-- ){
                        pos_deb+=tt[i].length + 1;
                    }
                }
                aa.focus();
                aa.selectionStart=pos_deb;
                aa.selectionEnd=pos_deb + 1;
                let toto=this.getCaretPos( aa , ligne );
                /* console.log('toto=',toto); */
            }catch(e){
                console.error( e );
            }
        }
    }
    /*
      =============================================================================================================
    */
    aller_a_la_ligne1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            this.__ig1.zone_d_edition_en_cours=zone_source;
            let numero_de_ligne=window.prompt( "numero de ligne ?" , "0" );
            if(this.__ig1.est_num( numero_de_ligne ) && parseInt( numero_de_ligne , 10 ) > 0){
                let cmd='ligne(' + numero_de_ligne + '),zone(\'' + zone_source + '\')';
                let mat=this.__ig1.__rev1.rev_tcm( cmd );
                if(mat.__xst === __xsu){
                    this.placer_le_curseur_en_lig1( mat.__xva , 0 );
                    return({"__xst" : __xsu});
                }
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    aller_a_la_position1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== ''){
            this.__ig1.zone_d_edition_en_cours=zone_source;
            let position=window.prompt( "position ?" );
            if(this.__ig1.est_num( position ) && parseInt( position , 10 ) >= 0){
                function toto( par ){
                    let aa=document.getElementById( par.zone_source );
                    aa.focus();
                    aa.scrollTo( 0 , 0 );
                    aa.selectionStart=parseInt( par.position , 10 );
                    aa.selectionEnd=parseInt( par.position , 10 ) + 1;
                    let vrai_numero_de_ligne=0;
                    try{
                        let tt=aa.value.substr( 0 , par.position ).split( '\n' );
                        vrai_numero_de_ligne=tt.length;
                        console.log( 'vrai_numero_de_ligne=' , vrai_numero_de_ligne );
                    }catch(e){
                        debugger;
                    }
                    let toto=this.getCaretPos( aa , vrai_numero_de_ligne );
                }
                setTimeout( toto.bind( this ) , 20 , {"zone_source" : zone_source ,"position" : position ,"that" : this} );
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    #btn_esvege={
        "scotcher" : '<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el" viewBox="0 0  100 100"><g transform=""><path d=" M 0 0 C 36 0 65 0 100 0 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.1;fill-opacity:0.5;"></path><path stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 68 63 C 97 66 97 82 92 89  C 86 96 48 98 36 87 C 25 77 51 79 74 83 C 67 76 72 74 62 69" style="stroke:orange;fill:gold;stroke-width:4;fill-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 3 28 C 10 20 20 10 27 3 C 30 10 42 26 65 47 C 67 49 66 52 64 54 C 66 56 68 58 70 60 C 68 63 63 67 60 70 C 58 68 57 67 55 65 C 53 67 49 65 47 64 C 25 39 11 30 3 28 " style="stroke:rgb(0, 0, 0);fill:fuchsia;stroke-width:4;"></path></g></svg>'
    };
    /*
      =============================================================================================================
    */
    boutons_suppression2( nom_de_la_zone ){
        let o1='';
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_suppression1( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el" viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+='<div class="yy__lst_btns1 yy__aff_be1">&nbsp;\r\n';
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + this.__ig1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + this.__ig1.les_svg.retrecir + '</div>\r\n';
        o1+='</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_edition_text( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el"viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+='<div class="yy__lst_btns1 yy__aff_be1">&nbsp;\r\n';
        o1+=' <div class="rev_b_svg yy__1 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + this.__ig1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + this.__ig1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg yy__xsi_2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + this.__ig1.les_svg.ensemble_vide + '</div>\r\n';
        o1+='</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_edition1( nom_de_la_zone , sans_div=false ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el" viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        if(sans_div === false){
            o1+='<div class="yy__lst_btns1 yy__aff_be1">&nbsp;\r\n';
        }
        o1+=' <div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(aller_a_la_position1(zone_source(' + nom_de_la_zone + '))))" title="aller à la position" >position</div>\r\n';
        o1+=' <div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(aller_a_la_ligne1(zone_source(' + nom_de_la_zone + '))))" title="aller à la ligne" >ligne</div>\r\n';
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + this.__ig1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + this.__ig1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + this.__ig1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + this.__ig1.les_svg.retrecir + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__0 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + this.__ig1.les_svg.ensemble_vide + '</div>\r\n';
        o1+=' <div class="rev_bouton yy__1 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(remplacer_dans_la_zone(zone_source(' + nom_de_la_zone + '))))" title="remplacer un texte par un autre dans la zone" >remplacer</div>\r\n';
        o1+=' <div class="rev_bouton yy__2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(effacer_la_selection(zone_source(' + nom_de_la_zone + '))))" title="effacer la sélection">' + this.__ig1.les_svg.clav_supp + '</div>\r\n';
        if(sans_div === false){
            o1+='</div>\r\n';
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_rev3( nom_de_la_zone ){
        let o1='';
        o1+='<div class="yy__lst_btns1 yy__aff_be1">&nbsp;\r\n';
        o1+=' <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(formater_le_rev_de_textarea1(zone_source(' + nom_de_la_zone + '))))" title="formater le source rev" >(😊)</div>\r\n';
        o1+=' <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(insérer_un_commentaire_rev1(zone_source(' + nom_de_la_zone + '))))" title="insérer un commentaire" >#(😎)</div>\r\n';
        o1+=this.boutons_edition1( nom_de_la_zone , true );
        o1+='</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_date1( nom_de_la_zone ){
        let o1='';
        o1+='<div class="yy__lst_btns1">\r\n';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(maj_date1(nom_du_champ(' + nom_de_la_zone + '))))">' + this.__ig1.les_svg.calendrier + '</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(jour_courant1(nom_du_champ(' + nom_de_la_zone + '))))" title="jour courant">JC</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="raz">' + this.__ig1.les_svg.ensemble_vide + '</div>';
        o1+='</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_heure1( nom_de_la_zone ){
        let o1='';
        o1+='<div class="yy__lst_btns1">\r\n';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(popup_horloge1(nom_du_champ(' + nom_de_la_zone + '))))">' + this.__ig1.les_svg.calendrier + '</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'08:00:00\')))))">08</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'10:00:00\')))))">10</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'12:00:00\')))))">12</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'14:00:00\')))))">14</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'16:00:00\')))))">16</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'18:00:00\')))))">18</div>';
        o1+='</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    maj_stockage_local( mat , d ){
        let l01=mat.length;
        let nom_zone='';
        let type_lsto='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_zone' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                nom_zone=mat[i + 1][1];
            }else if(mat[i][1] === 'type_lsto' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                type_lsto=mat[i + 1][1];
            }
        }
        if(nom_zone !== '' && type_lsto !== ''){
            try{
                this.__ig1.stockage_local[type_lsto][nom_zone].valeur=parseInt( document.getElementById( nom_zone ).value , 10 );
            } catch {}
            let deverminage_avant=this.__ig1.__deverminage;
            this.__ig1.__deverminage=this.__ig1.stockage_local.parametres.__deverminage.valeur;
            if(deverminage_avant !== this.__ig1.__deverminage){
                console.log( 'Changement de déverminage=' , this.__ig1.__deverminage );
            }
            if(this.__ig1.__deverminage === 2){
                console.log( this.__ig1.stockage_local );
            }
            localStorage.setItem( this.__ig1.cle_lst0 , JSON.stringify( this.__ig1.stockage_local ) );
            this.__ig1.css1();
            let zone_actuelle=document.getElementById( nom_zone + '_actuelle' );
            if(zone_actuelle !== null){
                try{
                    zone_actuelle.innerHTML=this.__ig1.stockage_local[type_lsto][nom_zone].valeur;
                } catch {}
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    #le_userAgent( regx_a_trouver ){
        if( typeof window !== 'undefined' && window.navigator){
            return(!!navigator.userAgent.match( regx_a_trouver ));
        }
    }
    /*
      =============================================================================================================
    */
    lsto( mat , d , x ){
        let min=0;
        let max=10;
        let step=1;
        let font_size_fixe='14px';
        let largeur_des_champs_input='3rem';
        let style_des_tds0='border:1px black solid;text-align:center;font-size:' + font_size_fixe + ';width:40%;';
        let style_des_tds1=' style="border:1px black solid;"';
        let style_des_tds2=' style="border:1px green solid;height:40px;"';
        let le_style_des_tables1=' style="border:1px black solid;border-collapse:collapse;min-width:100%;"';
        let t='';
        t+='<div style="min-height:var(--h_barre);"></div>';
        t+='<h1>paramètres et aides</h1>';
        t+='<div style="display:inline-block;border:1px red solid;position:fixed;right:0;top:var(--h_barre);background:white;">';
        t+='<div style="border:1px blue solid;">';
        let le_style1='';
        le_style1+='display:inline-block;border:var(--t_border) red solid;border-radius:var(--t_rayon_b);';
        le_style1+='font-size:var(--t_police);';
        le_style1+='margin-left:var(--t_marge_gd_plus);';
        le_style1+='margin-right:var(--t_marge_gd_plus);';
        le_style1+='margin-top:var(--t_marge_hb_plus);';
        le_style1+='margin-bottom:var(--t_marge_hb_plus);';
        le_style1+='padding:var(--t_padding);';
        t+='<div style="' + le_style1 + '">aa</div>';
        t+='<div style="' + le_style1 + '">bb</div>';
        t+='</div>';
        t+='</div>';
        for(let i in this.__ig1.reference_stockage_local['aspect']){
            t+='<div style="border:1px red solid;margin:1px;padding:1px;overflow-x:scroll;">';
            t+='';
            t+='<table border="1" style="width:100%;"><tr>';
            t+='<td style="' + style_des_tds0 + '">';
            t+='<b>' + this.__ig1.reference_stockage_local['aspect'][i].libelle0 + '</b>';
            t+='</td>';
            t+='<td  ' + style_des_tds1 + '>';
            t+='<input ';
            t+=' type="range" ';
            t+=' id="' + i + '" ';
            t+=' min="' + this.__ig1.reference_stockage_local['aspect'][i].min + '" ';
            t+=' max="' + this.__ig1.reference_stockage_local['aspect'][i].max + '" ';
            t+=' step="' + this.__ig1.reference_stockage_local['aspect'][i].step + '" ';
            t+=' value="' + this.__ig1.stockage_local['aspect'][i].valeur + '" ';
            t+=' data-rev_change_ou_entree="';
            t+='m1(n1(__ig1),f1(maj_contenu(';
            t+=' type_cible(inner_html)';
            t+=' id(' + i + '_nouvelle),';
            t+=' valeur(';
            t+='  valeur_de_champ(' + i + ')';
            t+=' )';
            t+='))),';
            if(this.__ig1.reference_stockage_local['aspect'][i].nom_du_style !== ''){
                t+='m1(n1(__ig1),f1(maj_contenu(';
                t+=' type_cible(style)';
                t+=' id(' + i + '_nouvelle),';
                t+=' valeur(';
                t+='   nom_du_style(' + this.__ig1.reference_stockage_local['aspect'][i].nom_du_style + ')';
                t+='   valeur_de_champ(' + i + '),';
                t+='   dimension(' + this.__ig1.stockage_local['aspect'][i].dimension + ')';
                t+=' )';
                t+=')))';
            }
            t+='"';
            t+=' data-rev_click="';
            t+='m1(n1(__fnt1),f1(';
            t+=' maj_stockage_local(nom_zone(' + i + '),type_lsto(aspect))';
            t+='))';
            t+='"';
            if(this.__ig1.reference_stockage_local['aspect'][i].style_interface){
                t+=' style="' + this.__ig1.reference_stockage_local['aspect'][i].style_interface + '"';
            }
            t+='>';
            t+='</td>';
            t+='</tr>';
            t+='<tr>';
            t+='<td colspan="2" ' + style_des_tds2 + '> nouvelle : ';
            t+=' <div style="display:inline-block;border:1px blue solid;">';
            t+='  <span id="' + i + '_nouvelle" style="display:inline-block;border-color:red;border-style:solid;min-width:' + largeur_des_champs_input + ';min-height:22px;';
            if(i === '--t_police'){
                t+='font-size:' + this.__ig1.stockage_local['aspect'][i].valeur + 'px;';
            }else{
                t+='font-size:14px;';
            }
            if(i === '--t_border'){
                t+='border-width:' + this.__ig1.stockage_local['aspect'][i].valeur + 'px;';
            }else{
                t+='border-width:1px;';
            }
            t+='">' + this.__ig1.stockage_local['aspect'][i].valeur + '</span>';
            t+=' </div>' + this.__ig1.stockage_local['aspect'][i].dimension + '';
            t+=' , actuelle : ';
            t+=' <span id="' + i + '_actuelle">' + this.__ig1.stockage_local['aspect'][i].valeur + '</span>';
            t+=' ' + this.__ig1.stockage_local['aspect'][i].dimension;
            t+='</td>';
            t+='</tr></table>';
            t+='</div>';
        }
        for(let i in this.__ig1.reference_stockage_local['parametres']){
            t+='<div style="border:1px red solid;margin:1px;padding:1px;overflow-x:scroll;">';
            t+='';
            t+='<table ' + le_style_des_tables1 + '><tr>';
            if(i === '__deverminage'){
                if(this.__ig1.stockage_local['parametres'][i].valeur === 0){
                    t+='<td style="' + style_des_tds0 + ';background:SpringGreen;color:black;min-width:70%;">';
                }else if(this.__ig1.stockage_local['parametres'][i].valeur === 1){
                    t+='<td style="' + style_des_tds0 + ';background:DarkOrange;color:black;min-width:70%;">';
                }else if(this.__ig1.stockage_local['parametres'][i].valeur === 2){
                    t+='<td style="' + style_des_tds0 + ';background:yellow;color:red;min-width:70%;">';
                }else{
                    t+='<td style="' + style_des_tds0 + ';background:SaddleBrown;color:white;min-width:70%;">';
                }
            }else{
                t+='<td style="' + style_des_tds0 + '">';
            }
            t+='<b>' + this.__ig1.reference_stockage_local['parametres'][i].libelle0 + '</b>';
            t+='</td>';
            t+='<td ' + style_des_tds1 + '>';
            t+='<input ';
            if(i === '__deverminage'){
                t+=' style="width:80px;" ';
            }
            t+=' type="range" ';
            t+=' id="' + i + '" ';
            t+=' min="' + this.__ig1.reference_stockage_local['parametres'][i].min + '" ';
            t+=' max="' + this.__ig1.reference_stockage_local['parametres'][i].max + '" ';
            t+=' step="' + this.__ig1.reference_stockage_local['parametres'][i].step + '" ';
            t+=' value="' + this.__ig1.stockage_local['parametres'][i].valeur + '" ';
            t+=' data-rev_change_ou_entree="';
            t+='m1(';
            t+=' n1(__ig1)';
            t+=' f1(';
            t+='  maj_contenu(';
            t+='   type_cible(inner_html)';
            t+='   id(' + i + '_nouvelle),';
            t+='   valeur(';
            t+='    valeur_de_champ(' + i + ')';
            t+='   )';
            t+='  )';
            t+=' ),';
            t+='),';
            if(this.__ig1.reference_stockage_local['parametres'][i].nom_du_style !== ''){
                t+='m1(n1(__ig1),f1(maj_contenu(';
                t+=' type_cible(style)';
                t+=' id(' + i + '_nouvelle),';
                t+=' valeur(';
                t+='   nom_du_style(' + this.__ig1.reference_stockage_local['parametres'][i].nom_du_style + ')';
                t+='   valeur_de_champ(' + i + '),';
                t+='   dimension(' + this.__ig1.stockage_local['parametres'][i].dimension + ')';
                t+=' )';
                t+=')))';
            }
            t+='"';
            t+=' data-rev_click="';
            t+='m1(n1(__fnt1),f1(maj_stockage_local(nom_zone(' + i + '),type_lsto(parametres))))';
            t+='"';
            t+='>';
            t+='</td>';
            t+='</tr>';
            t+='</tr>';
            t+='<td colspan="2" ' + style_des_tds2 + '> nouvelle : ';
            t+='<div style="display:inline-block;border:1px blue solid;">';
            t+='  <span id="' + i + '_nouvelle" style="display:inline-block;border-color:red:border-style:solid;min-width:' + largeur_des_champs_input + ';min-height:22px;">';
            t+='' + this.__ig1.stockage_local['parametres'][i].valeur + '';
            t+='</span>';
            t+='</div>' + this.__ig1.stockage_local['parametres'][i].dimension + '';
            t+=' , actuelle : ';
            t+='<span id="' + i + '_actuelle">' + this.__ig1.stockage_local['parametres'][i].valeur + '</span>' + this.__ig1.stockage_local['parametres'][i].dimension;
            t+='</td>';
            t+='</tr></table>';
            t+='</div>';
        }
        let ecran_tactile='ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        let style_des_tds3=' style="border:1px black solid; max-width:30%;"';
        let style_des_tds4=' style="border:1px black solid; max-width:70%;"';
        t+='<div class="yy_conteneur_table">';
        t+='<table border="1">';
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>ecran tactile</td>';
        t+='    <td ' + style_des_tds4 + '><b>' + JSON.stringify( ecran_tactile ) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>safari mobile</td>';
        t+='    <td ' + style_des_tds4 + '><b>' + JSON.stringify( navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) && navigator.userAgent.match( /AppleWebKit/ ) ) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>taille de l\'écran</td>';
        t+='    <td ' + style_des_tds4 + '><b> largeur=' + window.innerWidth + ' , hauteur=' + window.innerHeight + '</b></td>';
        t+='  </tr>';
        let genre_safari=this.#le_userAgent( /safari/i ) && !this.#le_userAgent( /chrome/i ) && !this.#le_userAgent( /android/i );
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>genre safari</td>';
        t+='    <td ' + style_des_tds4 + '><b>' + genre_safari + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>ipad ou iphone</td>';
        t+='    <td ' + style_des_tds4 + '><b>' + (genre_safari && navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>crios</td>';
        t+='    <td ' + style_des_tds4 + '><b>' + (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && ecran_tactile && this.#le_userAgent( /crios/i )) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds3 + '>userAgent</td>';
        t+='    <td ' + style_des_tds4 + '><b>' + JSON.stringify( navigator.userAgent ) + '</b></td>';
        t+='  </tr>';
        t+='</table>';
        t+='</div class="yy_conteneur_table">';
        t+='<br />';
        /*
          t+='#genre crios = <b>' + JSON.stringify( this.#genre_crios ) + '</b>';
          t+='<br />';
          t+='navigator.userAgent = <b>' + JSON.stringify( navigator.userAgent ) + '</b>';
        */
        this.__ig1.maj_contenu_principal( t );
        this.__ig1.activer_menu( null , null , '-2' );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'paramètres et aide' );
        return({"__xst" : __xsu});
    }
    /* fond et texte */
    __couleurs_combinees0=[
        /* ['lightgoldenrodyellow' , 'mediumaquamarine'], */
        ['white','black'],
        ['white','red'],
        ['white','blue'],
        ['white','green'],
        /*  */
        ['black','white'],
        ['black','yellow'],
        ['black','red'],
        ['black','deepskyblue'],
        /*  */
        ['red','yellow'],
        ['red','lime'],
        ['red','white'],
        ['red','lavender'],
        /*  */
        ['yellow','red'],
        ['yellow','black'],
        ['yellow','darkblue'],
        ['yellow','darkgreen'],
        /*  */
        ['blue','white'],
        ['blue','yellow'],
        ['blue','cyan'],
        ['blue','darksalmon'],
        /*  */
        ['lime','red'],
        ['lime','black'],
        ['lime','darkblue'],
        ['lime','darkgreen'],
        /*  */
        ['coral','white'],
        ['coral','black'],
        ['blueviolet','white']
    ];
    /*
      =============================================================================================================
      nom de la couleurhex + nom de la couleur nommée , [ 0 = couleur nommée ou web uniquement / 1 = à la fois couleur nommée et couleur web , 'commentaire' , couleur de contraste ]
      remarques : Aqua et Cyan sont les mêmes, Fuchsia et Magenta sont les mêmes
    */
    __couleurs_web0=[
        ['F0F8FFAliceBlue',['0','','black']],
        ['FAEBD7AntiqueWhite',['0','','black']],
        ['00FFFFAqua',['1','Aqua = cyan','black']],
        ['7FFFD4Aquamarine',['0','','black']],
        ['F0FFFFAzure',['0','','black']],
        ['F5F5DCBeige',['0','','black']],
        ['FFE4C4Bisque',['0','','black']],
        ['000000Black',['1','','white']],
        ['FFEBCDBlanchedAlmond',['0','','black']],
        ['0000FFBlue',['1','','white']],
        ['8A2BE2BlueViolet',['0','','black']],
        ['A52A2ABrown',['0','','white']],
        ['DEB887BurlyWood',['0','','black']],
        ['5F9EA0CadetBlue',['0','','white']],
        ['7FFF00Chartreuse',['0','','black']],
        ['D2691EChocolate',['0','','black']],
        ['FF7F50Coral',['0','','white']],
        ['6495EDCornflowerBlue',['0','','black']],
        ['FFF8DCCornsilk',['0','','black']],
        ['DC143CCrimson',['0','','black']],
        ['00FFFFCyan',['1','Aqua = cyan','black']],
        ['00008BDarkBlue',['0','','white']],
        ['008B8BDarkCyan',['0','','white']],
        ['B8860BDarkGoldenRod',['0','','black']],
        ['A9A9A9DarkGray',['0','','black']],
        ['006400DarkGreen',['0','','white']],
        ['BDB76BDarkKhaki',['0','','black']],
        ['8B008BDarkMagenta',['0','','white']],
        ['556B2FDarkOliveGreen',['0','','black']],
        ['FF8C00Darkorange',['0','','white']],
        ['9932CCDarkOrchid',['0','','white']],
        ['8B0000DarkRed',['0','','white']],
        ['E9967ADarkSalmon',['0','','black']],
        ['8FBC8FDarkSeaGreen',['0','','black']],
        ['483D8BDarkSlateBlue',['0','','white']],
        ['2F4F4FDarkSlateGray',['0','','white']],
        ['00CED1DarkTurquoise',['0','','white']],
        ['9400D3DarkViolet',['0','','black']],
        ['FF1493DeepPink',['0','','white']],
        ['00BFFFDeepSkyBlue',['0','','black']],
        ['696969DimGray',['0','','black']],
        ['1E90FFDodgerBlue',['0','','black']],
        ['B22222FireBrick',['0','','black']],
        ['FFFAF0FloralWhite',['0','','black']],
        ['228B22ForestGreen',['0','','black']],
        ['FF00FFFuchsia',['1','Fuchsia = Magenta','white']],
        ['DCDCDCGainsboro',['0','','black']],
        ['F8F8FFGhostWhite',['0','','black']],
        ['FFD700Gold',['0','','black']],
        ['DAA520GoldenRod',['0','','black']],
        ['808080Gray',['0','','black']],
        ['008000Green',['0','','white']],
        ['ADFF2FGreenYellow',['0','','black']],
        ['F0FFF0HoneyDew',['0','','black']],
        ['FF69B4HotPink',['0','','white']],
        ['CD5C5CIndianRed ',['0','','black']],
        ['4B0082Indigo ',['0','','white']],
        ['FFFFF0Ivory',['0','','black']],
        ['F0E68CKhaki',['0','','black']],
        ['E6E6FALavender',['0','','black']],
        ['FFF0F5LavenderBlush',['0','','black']],
        ['7CFC00LawnGreen',['0','','black']],
        ['FFFACDLemonChiffon',['0','','black']],
        ['ADD8E6LightBlue',['0','','black']],
        ['F08080LightCoral',['0','','black']],
        ['E0FFFFLightCyan',['0','','black']],
        ['FAFAD2LightGoldenRodYellow',['0','','black']],
        ['D3D3D3LightGrey',['0','','black']],
        ['90EE90LightGreen',['0','','black']],
        ['FFB6C1LightPink',['0','','black']],
        ['FFA07ALightSalmon',['0','','black']],
        ['20B2AALightSeaGreen',['0','','black']],
        ['87CEFALightSkyBlue',['0','','black']],
        ['778899LightSlateGray',['0','','black']],
        ['B0C4DELightSteelBlue',['0','','black']],
        ['FFFFE0LightYellow',['0','','black']],
        ['00FF00Lime',['1','','black']],
        ['32CD32LimeGreen',['0','','black']],
        ['FAF0E6Linen',['0','','black']],
        ['FF00FFMagenta',['1','Fuchsia = Magenta','white']],
        ['800000Maroon',['0','','white']],
        ['66CDAAMediumAquaMarine',['0','','black']],
        ['0000CDMediumBlue',['0','','white']],
        ['BA55D3MediumOrchid',['0','','white']],
        ['9370D8MediumPurple',['0','','black']],
        ['3CB371MediumSeaGreen',['0','','black']],
        ['7B68EEMediumSlateBlue',['0','','black']],
        ['00FA9AMediumSpringGreen',['0','','black']],
        ['48D1CCMediumTurquoise',['0','','black']],
        ['C71585MediumVioletRed',['0','','black']],
        ['191970MidnightBlue',['0','','white']],
        ['F5FFFAMintCream',['0','','black']],
        ['FFE4E1MistyRose',['0','','black']],
        ['FFE4B5Moccasin',['0','','black']],
        ['FFDEADNavajoWhite',['0','','black']],
        ['000080Navy',['0','','white']],
        ['FDF5E6OldLace',['0','','black']],
        ['808000Olive',['0','','white']],
        ['6B8E23OliveDrab',['0','','black']],
        ['FFA500Orange',['0','','black']],
        ['FF4500OrangeRed',['0','','white']],
        ['DA70D6Orchid',['0','','black']],
        ['EEE8AAPaleGoldenRod',['0','','black']],
        ['98FB98PaleGreen',['0','','black']],
        ['AFEEEEPaleTurquoise',['0','','black']],
        ['D87093PaleVioletRed',['0','','black']],
        ['FFEFD5PapayaWhip',['0','','black']],
        ['FFDAB9PeachPuff',['0','','black']],
        ['CD853FPeru',['0','','black']],
        ['FFC0CBPink',['0','','black']],
        ['DDA0DDPlum',['0','','black']],
        ['B0E0E6PowderBlue',['0','','black']],
        ['800080Purple',['0','','white']],
        ['FF0000Red',['1','','white']],
        ['BC8F8FRosyBrown',['0','','black']],
        ['4169E1RoyalBlue',['0','','black']],
        ['8B4513SaddleBrown',['0','','black']],
        ['FA8072Salmon',['0','','black']],
        ['F4A460SandyBrown',['0','','black']],
        ['2E8B57SeaGreen',['0','','black']],
        ['FFF5EESeaShell',['0','','black']],
        ['A0522DSienna',['0','','black']],
        ['C0C0C0Silver',['0','','black']],
        ['87CEEBSkyBlue',['0','','black']],
        ['6A5ACDSlateBlue',['0','','black']],
        ['708090SlateGray',['0','','white']],
        ['FFFAFASnow',['0','','black']],
        ['00FF7FSpringGreen',['0','','black']],
        ['4682B4SteelBlue',['0','','black']],
        ['D2B48CTan',['0','','black']],
        ['008080Teal',['0','','white']],
        ['D8BFD8Thistle',['0','','black']],
        ['FF6347Tomato',['0','','white']],
        ['40E0D0Turquoise',['0','','black']],
        ['EE82EEViolet',['0','','black']],
        ['F5DEB3Wheat',['0','','black']],
        ['FFFFFFWhite',['1','','black']],
        ['F5F5F5WhiteSmoke',['0','','black']],
        ['FFFF00Yellow',['1','','black']],
        ['9ACD32YellowGreen',['0','','black']],
        ['000000',['1','','white']],
        ['003300',['0','','white']],
        ['006600',['0','','white']],
        ['009900',['0','','black']],
        ['00CC00',['0','','black']],
        ['00FF00',['1','','black']],
        ['330000',['0','','white']],
        ['333300',['0','','white']],
        ['336600',['0','','white']],
        ['339900',['0','','black']],
        ['33CC00',['0','','black']],
        ['33FF00',['0','','black']],
        ['660000',['0','','white']],
        ['663300',['0','','white']],
        ['666600',['0','','white']],
        ['669900',['0','','black']],
        ['66CC00',['0','','black']],
        ['66FF00',['0','','black']],
        ['990000',['0','','white']],
        ['993300',['0','','white']],
        ['996600',['0','','white']],
        ['999900',['0','','black']],
        ['99CC00',['0','','black']],
        ['99FF00',['0','','black']],
        ['CC0000',['0','','white']],
        ['CC3300',['0','','white']],
        ['CC6600',['0','','white']],
        ['CC9900',['0','','black']],
        ['CCCC00',['0','','black']],
        ['CCFF00',['0','','black']],
        ['FF0000',['1','','white']],
        ['FF3300',['0','','white']],
        ['FF6600',['0','','white']],
        ['FF9900',['0','','black']],
        ['FFCC00',['0','','black']],
        ['FFFF00',['1','','black']],
        ['000033',['0','','white']],
        ['003333',['0','','white']],
        ['006633',['0','','white']],
        ['009933',['0','','black']],
        ['00CC33',['0','','black']],
        ['00FF33',['0','','black']],
        ['330033',['0','','white']],
        ['333333',['0','','white']],
        ['336633',['0','','white']],
        ['339933',['0','','black']],
        ['33CC33',['0','','black']],
        ['33FF33',['0','','black']],
        ['660033',['0','','white']],
        ['663333',['0','','white']],
        ['666633',['0','','white']],
        ['669933',['0','','black']],
        ['66CC33',['0','','black']],
        ['66FF33',['0','','black']],
        ['990033',['0','','white']],
        ['993333',['0','','white']],
        ['996633',['0','','white']],
        ['999933',['0','','black']],
        ['99CC33',['0','','black']],
        ['99FF33',['0','','black']],
        ['CC0033',['0','','white']],
        ['CC3333',['0','','white']],
        ['CC6633',['0','','white']],
        ['CC9933',['0','','black']],
        ['CCCC33',['0','','black']],
        ['CCFF33',['0','','black']],
        ['FF0033',['0','','white']],
        ['FF3333',['0','','white']],
        ['FF6633',['0','','white']],
        ['FF9933',['0','','black']],
        ['FFCC33',['0','','black']],
        ['FFFF33',['0','','black']],
        ['000066',['0','','white']],
        ['003366',['0','','white']],
        ['006666',['0','','white']],
        ['009966',['0','','black']],
        ['00CC66',['0','','black']],
        ['00FF66',['0','','black']],
        ['330066',['0','','white']],
        ['333366',['0','','white']],
        ['336666',['0','','white']],
        ['339966',['0','','black']],
        ['33CC66',['0','','black']],
        ['33FF66',['0','','black']],
        ['660066',['0','','white']],
        ['663366',['0','','white']],
        ['666666',['0','','white']],
        ['669966',['0','','black']],
        ['66CC66',['0','','black']],
        ['66FF66',['0','','black']],
        ['990066',['0','','white']],
        ['993366',['0','','white']],
        ['996666',['0','','white']],
        ['999966',['0','','black']],
        ['99CC66',['0','','black']],
        ['99FF66',['0','','black']],
        ['CC0066',['0','','white']],
        ['CC3366',['0','','white']],
        ['CC6666',['0','','white']],
        ['CC9966',['0','','black']],
        ['CCCC66',['0','','black']],
        ['CCFF66',['0','','black']],
        ['FF0066',['0','','white']],
        ['FF3366',['0','','white']],
        ['FF6666',['0','','white']],
        ['FF9966',['0','','black']],
        ['FFCC66',['0','','black']],
        ['FFFF66',['0','','black']],
        ['000099',['0','','white']],
        ['003399',['0','','white']],
        ['006699',['0','','white']],
        ['009999',['0','','black']],
        ['00CC99',['0','','black']],
        ['00FF99',['0','','black']],
        ['330099',['0','','white']],
        ['333399',['0','','white']],
        ['336699',['0','','white']],
        ['339999',['0','','black']],
        ['33CC99',['0','','black']],
        ['33FF99',['0','','black']],
        ['660099',['0','','white']],
        ['663399',['0','','white']],
        ['666699',['0','','white']],
        ['669999',['0','','black']],
        ['66CC99',['0','','black']],
        ['66FF99',['0','','black']],
        ['990099',['0','','white']],
        ['993399',['0','','white']],
        ['996699',['0','','white']],
        ['999999',['0','','black']],
        ['99CC99',['0','','black']],
        ['99FF99',['0','','black']],
        ['CC0099',['0','','white']],
        ['CC3399',['0','','white']],
        ['CC6699',['0','','white']],
        ['CC9999',['0','','black']],
        ['CCCC99',['0','','black']],
        ['CCFF99',['0','','black']],
        ['FF0099',['0','','white']],
        ['FF3399',['0','','white']],
        ['FF6699',['0','','white']],
        ['FF9999',['0','','black']],
        ['FFCC99',['0','','black']],
        ['FFFF99',['0','','black']],
        ['0000CC',['0','','white']],
        ['0033CC',['0','','white']],
        ['0066CC',['0','','white']],
        ['0099CC',['0','','black']],
        ['00CCCC',['0','','black']],
        ['00FFCC',['0','','black']],
        ['3300CC',['0','','white']],
        ['3333CC',['0','','white']],
        ['3366CC',['0','','white']],
        ['3399CC',['0','','black']],
        ['33CCCC',['0','','black']],
        ['33FFCC',['0','','black']],
        ['6600CC',['0','','white']],
        ['6633CC',['0','','white']],
        ['6666CC',['0','','white']],
        ['6699CC',['0','','black']],
        ['66CCCC',['0','','black']],
        ['66FFCC',['0','','black']],
        ['9900CC',['0','','white']],
        ['9933CC',['0','','white']],
        ['9966CC',['0','','white']],
        ['9999CC',['0','','black']],
        ['99CCCC',['0','','black']],
        ['99FFCC',['0','','black']],
        ['CC00CC',['0','','white']],
        ['CC33CC',['0','','white']],
        ['CC66CC',['0','','white']],
        ['CC99CC',['0','','black']],
        ['CCCCCC',['0','','black']],
        ['CCFFCC',['0','','black']],
        ['FF00CC',['0','','white']],
        ['FF33CC',['0','','white']],
        ['FF66CC',['0','','white']],
        ['FF99CC',['0','','black']],
        ['FFCCCC',['0','','black']],
        ['FFFFCC',['0','','black']],
        ['0000FF',['1','','white']],
        ['0033FF',['0','','white']],
        ['0066FF',['0','','white']],
        ['0099FF',['0','','black']],
        ['00CCFF',['0','','black']],
        ['00FFFF',['1','','black']],
        ['3300FF',['0','','white']],
        ['3333FF',['0','','white']],
        ['3366FF',['0','','white']],
        ['3399FF',['0','','black']],
        ['33CCFF',['0','','black']],
        ['33FFFF',['0','','black']],
        ['6600FF',['0','','white']],
        ['6633FF',['0','','white']],
        ['6666FF',['0','','white']],
        ['6699FF',['0','','black']],
        ['66CCFF',['0','','black']],
        ['66FFFF',['0','','black']],
        ['9900FF',['0','','white']],
        ['9933FF',['0','','white']],
        ['9966FF',['0','','white']],
        ['9999FF',['0','','black']],
        ['99CCFF',['0','','black']],
        ['99FFFF',['0','','black']],
        ['CC00FF',['0','','white']],
        ['CC33FF',['0','','white']],
        ['CC66FF',['0','','white']],
        ['CC99FF',['0','','black']],
        ['CCCCFF',['0','','black']],
        ['CCFFFF',['0','','black']],
        ['FF00FF',['1','','white']],
        ['FF33FF',['0','','white']],
        ['FF66FF',['0','','white']],
        ['FF99FF',['0','','black']],
        ['FFCCFF',['0','','black']],
        ['FFFFFF',['1','','black']]
    ];
    /*
      =============================================================================================================
    */
}
export{__fnt1 as __fnt1};