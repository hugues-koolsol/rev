class __fnt1{
    /*
      =============================================================================================================
    */
    moi='__fnt1';
    /*
      =============================================================================================================
    */
    constructor(){
        /*
          console.log( 'constructor fnt1' , e );
        */
    }
    /*
      =============================================================================================================
    */
    test_du_nom_technique1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseigné' + __gi1.nl2()} );
            return({"__xst" : __xer});
        }
        let mes_err='erreur sur le champ "' + nom_champ + '" car ce caractère n\est pas admis : ';
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(!(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '.')){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + '<b>"' + c + '"</b> <br />'} );
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    test_fonctions_de_c_fonctions1( valeur , nom_champ ){
        if(valeur === ''){
            return({"__xst" : __xsu});
        }else{
            let tt=__gi1.__rev1.rev_tcm( valeur );
            if(tt.__xst === __xsu){
                let des_fonctions_non_trouvees='';
                let mat=tt.__xva;
                for( let i=1 ; i < mat.length ; i=mat[i][12] ){
                    if( typeof this[mat[i][1]] !== 'function'){
                        des_fonctions_non_trouvees+=' , ' + mat[i][1];
                    }
                }
                if(des_fonctions_non_trouvees === ''){
                    return({"__xst" : __xsu});
                }
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'des fonctions ne sont pas définies " ' + des_fonctions_non_trouvees + '" ' + __gi1.nl2()} );
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    doit_contenir_n_caracteres( n , valeur , nom_champ ){
        if(valeur && valeur.length === n){
            return({"__xst" : __xsu});
        }
        __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit doit contenir ' + n + ' caractères.' + __gi1.nl2()} );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    test_du_nom_de_fichier1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseigné' + __gi1.nl2()} );
            return({"__xst" : __xer});
        }
        let mes_err='Erreur sur le champ "' + nom_champ + '" , ce caractère n\est pas admis : ';
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(!(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '.')){
                __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + '<b>"' + c + '"</b> <br />'} );
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entier_compris_entre( inf , sup , valeur ){
        let val=0;
        let mes_err='sur la valeur ' + valeur + ' qui doit être en entier compris entre 0 et 99 inclus<br />';
        try{
            val=parseInt( valeur , 10 );
        }catch(e1){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + __gi1.nl2()} );
            return({"__xst" : __xer});
        }
        if(isNaN( val )){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + __gi1.nl2()} );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
    */
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
                __gi1.masquer_la_zone_message();
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
                /* console.log('toto=',toto); */
            }catch(e){
                return({"__xst" : __xer});
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
            if(__gi1.derniere_zone_editee && zone_source === __gi1.derniere_zone_editee.id){
                let debut=__gi1.derniere_zone_editee.value.substr( 0 , __gi1.position_dans_la_derniere_zone_editee );
                let fin=__gi1.derniere_zone_editee.value.substr( __gi1.position_dans_la_derniere_zone_editee );
                let nouveau=debut + '#()' + fin;
                __gi1.derniere_zone_editee.value=nouveau;
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
        return({"__xst" : __xer});
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
                let tt=__gi1.__rev1.rev_tcm( t.value );
                if(tt.__xst === __xsu){
                    let ttt=__gi1.__rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
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
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'zone source non trouvée ' + __gi1.nl2()} );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xer});
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
        return({"__xst" : __xer});
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
        return({"__xst" : __xer});
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
                    t1.style.height=hauteur + 'px';
                }else{
                    t1.style.height=__gi1.css_dimensions.hauteur_max_textarea + 'vh';
                }
                let dim=t1.getBoundingClientRect();
                let bosition_bas=dim.bottom;
                /* window.innerHeight = partie visible de la fenêtre */
                let difference=parseInt( window.innerHeight , 10 ) - parseInt( bosition_bas , 10 );
                if(difference - 2 * __gi1.css_dimensions.h_barre < 0){
                    /* il faut faire défiler le fenêtre de la différence */
                    let valeur_scroll_actuel=window.scrollY;
                    let decallage=valeur_scroll_actuel - difference;
                    /* on ajoute au décallage 2*( la hauteur du pied de page ) */
                    decallage=decallage + 2 * __gi1.css_dimensions.h_barre;
                    window.scrollTo( 0 , decallage );
                }
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
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
            __gi1.zone_d_edition_en_cours=zone_source;
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
        return({"__xst" : __xer});
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
            __gi1.zone_d_edition_en_cours=zone_source;
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
                __gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'zone de sélection vide '} );
                __gi1.affiche_les_messages();
                return({"__xst" : __xsu});
            }else{
                let bb=document.getElementById( zone_source ).value.substr( aa.selectionStart , aa.selectionEnd - aa.selectionStart );
                copyToClipboard( bb );
                return({"__xst" : __xsu});
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
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
                            __gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'le contenu du press-papier n\'est pas de type texte'} );
                            __gi1.affiche_les_messages();
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
        /* Getting the textarea element */
        /* let textarea = document.getElementById('textarea'); */
        /* Adjusting textarea to prevent scrolling */
        /* textarea.style.height = `${e.target.scrollHeight}px` */
        /* la_textarea.style.height = `${la_textarea.scrollHeight}px`; */
        let le_texte=la_textarea.value.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
        /* Appending element to the DOM after textarea */
        let le_bounding=la_textarea.getBoundingClientRect();
        let le_top=le_bounding.top + __gi1.css_dimensions.t_padding_de_input + __gi1.css_dimensions.t_border;
        let le_left=parseInt( le_bounding.left + __gi1.css_dimensions.t_padding_de_input + __gi1.css_dimensions.t_border , 10 );
        let le_height=parseInt( le_bounding.height , 10 );
        /* la_textarea.scrollTo(0,0); // ; */
        /*
          la_textarea.insertAdjacentHTML('afterend', '<span style="white-space: pre;font-family:monospace;overflow-x:scroll;background:lightblue;opacity:0.5;position:absolute;left:'+le_left+'px;top:'+le_top+'px;" id="dummy">'+le_texte+'</span>');
          debugger
        */
        la_textarea.insertAdjacentHTML( 'afterend' , '<span style="white-space: pre;font-family:monospace;overflow-x:scroll;background:lightblue;opacity:0.5;" id="dummy">' + le_texte + '</span>' );
        /* Getting position info of the rectangles inside dummy element */
        let rectangles=document.getElementById( 'dummy' ).getClientRects();
        let numero_bloc=Math.min( rectangles.length - 1 , numero_de_ligne );
        /* debugger */
        let decallage_y=0;
        if(rectangles.length >= numero_bloc){
            /* console.log( rectangles[numero_bloc].y ); */
            /* console.log( rectangles[0].y ); */
            /* decallage_y=parseInt(rectangles[numero_bloc].y-rectangles[0].y-rectangles[0].height,10); */
            /*
              à la fin de la formule çi dessous il y a un "-numero_bloc' comme si yl y avait in pixem en trop par ligne
            */
            decallage_y=parseInt( rectangles[numero_bloc].y - rectangles[0].y - rectangles[0].height - 2 * __gi1.css_dimensions.t_border - 2 * __gi1.css_dimensions.t_padding_de_input - numero_bloc , 10 );
            /* rectangles[62].top-rectangles[0].top-rectangles[0].height-2*__gi1.css_dimensions.t_border-2*__gi1.css_dimensions.t_padding_de_input */
        }else{
            decallage_y=999999999;
        }
        document.getElementById( 'dummy' ).remove();
        if(decallage_y <= le_height / 2){
            decallage_y=0;
        }else{
            decallage_y=decallage_y - le_height / 2;
        }
        /* la_textarea.scrollTo(0,0); */
        /* console.log( 'decallage_y=' , decallage_y ); */
        function decal( par ){
            /* console.log(par) */
            par.la_textarea.scrollTo( 0 , par.decallage_y );
            par.la_textarea.focus();
        }
        setTimeout( decal , 20 , {"la_textarea" : la_textarea ,"decallage_y" : decallage_y ,"numero_bloc" : numero_bloc} );
        /*
          
          let last = rectangles[rectangles.length - 1];
          
          // Getting position info of the textarea
          let text = la_textarea.getBoundingClientRect();
          
          // Setting coordinates
          let x = last.x + last.width;
          let y = text.y + text.height - last.height;
          
          // Removing dummy
          //dummy.remove();
          
          // Returning variables
          return [x, y];
        */
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
            __gi1.zone_d_edition_en_cours=zone_source;
            let numero_de_ligne=window.prompt( "numero de ligne ?" , "0" );
            if(__gi1.est_num( numero_de_ligne ) && parseInt( numero_de_ligne , 10 ) > 0){
                let cmd='ligne(' + numero_de_ligne + '),zone(\'' + zone_source + '\')';
                let mat=__gi1.__rev1.rev_tcm( cmd );
                if(mat.__xst === __xsu){
                    this.placer_le_curseur_en_lig1( mat.__xva , 0 );
                    return({"__xst" : __xsu});
                }
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
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
            __gi1.zone_d_edition_en_cours=zone_source;
            let position=window.prompt( "position ?" );
            if(__gi1.est_num( position ) && parseInt( position , 10 ) >= 0){
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
        return({"__xst" : __xer});
    }
    #btn_esvege={
        "scotcher" : '<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el" viewBox="0 0  100 100"><g transform=""><path d=" M 0 0 C 36 0 65 0 100 0 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.1;fill-opacity:0.5;"></path><path stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 68 63 C 97 66 97 82 92 89  C 86 96 48 98 36 87 C 25 77 51 79 74 83 C 67 76 72 74 62 69" style="stroke:orange;fill:gold;stroke-width:4;fill-opacity:1;"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M 3 28 C 10 20 20 10 27 3 C 30 10 42 26 65 47 C 67 49 66 52 64 54 C 66 56 68 58 70 60 C 68 63 63 67 60 70 C 58 68 57 67 55 65 C 53 67 49 65 47 64 C 25 39 11 30 3 28 " style="stroke:rgb(0, 0, 0);fill:fuchsia;stroke-width:4;"></path></g></svg>'
    };
    /*
      =============================================================================================================
    */
    boutons_edition_text( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el"viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+=' <div class="rev_b_svg yy__1 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + __gi1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + __gi1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + __gi1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg yy__xsi_2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + __gi1.les_svg.ensemble_vide + '</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_edition1( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el" viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+=' <div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(aller_a_la_position1(zone_source(' + nom_de_la_zone + '))))" title="aller à la position" >position</div>\r\n';
        o1+=' <div class="rev_bouton yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(aller_a_la_ligne1(zone_source(' + nom_de_la_zone + '))))" title="aller à la ligne" >ligne</div>\r\n';
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + __gi1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + __gi1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + __gi1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + __gi1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + __gi1.les_svg.retrecir + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__xsi_2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + __gi1.les_svg.ensemble_vide + '</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_rev3( nom_de_la_zone ){
        let o1='';
        o1+=' <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(formater_le_rev_de_textarea1(zone_source(' + nom_de_la_zone + '))))" title="formater le source rev" >(😊)</div>\r\n';
        o1+=' <div class="rev_bouton rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(insérer_un_commentaire_rev1(zone_source(' + nom_de_la_zone + '))))" title="insérer un commentaire" >#(😎)</div>\r\n';
        o1+=this.boutons_edition1( nom_de_la_zone );
        return o1;
    }
    /*
      =============================================================================================================
    */
    maj_liste_des_sql( mat , d , le_message_du_serveur ){
        if(le_message_du_serveur
               && le_message_du_serveur.hasOwnProperty( '__xva' )
               && le_message_du_serveur.__xva.hasOwnProperty( '__liste_des_sql' )
        ){
            __gi1.__liste_des_sql=le_message_du_serveur.__xva.__liste_des_sql;
        }else{
            __gi1.__liste_des_sql={};
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    maj_liste_des_genres( mat , d , le_message_du_serveur ){
        if(le_message_du_serveur
               && le_message_du_serveur.hasOwnProperty( '__xva' )
               && le_message_du_serveur.__xva.hasOwnProperty( '__liste_des_genres' )
        ){
            __gi1.__liste_des_genres=le_message_du_serveur.__xva.__liste_des_genres;
        }else{
            __gi1.__liste_des_genres={};
        }
        return({"__xst" : __xsu});
    }
}
export{__fnt1 as __fnt1};