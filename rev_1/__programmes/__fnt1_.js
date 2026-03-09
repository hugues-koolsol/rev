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
    */
    moi='__fnt1';
    __gi1=null;
    tab_de_remplacement1={
         /* tbel */
        "à" : 'à' ,
        "â" : 'â' ,
        "ã" : 'ã' ,
        "á" : 'á' ,
        "é" : 'é' ,
        "è" : 'è' ,
        "ê" : 'ê' ,
        "É" : 'É' ,
        "ï" : 'ï' ,
        "î" : 'î' ,
        "ñ" : 'ñ' ,
        "Ñ" : 'Ñ' ,
        "ó" : 'ó' ,
        "ô" : 'ô' ,
        "ö" : 'ö' ,
        "ü" : 'ü' ,
        "Ü" : 'Ü'
    };
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        /*
          console.log( 'constructor fnt1' , mat , d , __gi1 );
        */
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
      fonctions serveur
    */
    async supprimer_fichier_sans_sauvegarde( chemin , donnees_retournees ){
        try{
            await Deno.remove( chemin );
        }catch(e){
            donnees_retournees[__xsi][__xdv].push( 'erreur supprimer_fichier_sans_sauvegarde "' + chemin + '" ' + this.__gi1.nl2( e ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sauvegarder_et_supprimer_fichier( chemin , donnees_retournees ){
        /* ne_pas_faire_une_sauvegarde]{ */
        if(donnees_retournees.chi_id_projet === 0){
            donnees_retournees[__xsi][__xer].push( 'on ne peut pas supprimer un fichier si on n\'a pas sélectionné un environnement ' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let prefix1='../rev_' + donnees_retournees.chi_id_projet + '/';
        let sous_chemin=chemin.substr( prefix1.length );
        let la_cle=await this.__gi1.cle_aleatoire();
        /* crypto.randomUUID(); */
        let amj=donnees_retournees.date_heure_serveur;
        let chemin_date=amj.substr( 0 , 4 ) + '/' + amj.substr( 5 , 2 ) + '/' + amj.substr( 8 , 2 ) + '/';
        let chemin_absolu_sauvegarde='../sauvegarde_fichiers/rev_' + donnees_retournees.chi_id_projet + '/' + chemin_date + sous_chemin + '.' + amj.replace( / /g , '_' ).replace( /:/g , '_' ) + '.' + la_cle + '.bak';
        /* this.__gi1.ma_trace1('chemin_absolu_sauvegarde='+chemin_absolu_sauvegarde); */
        let repertoire_absolu_sauvegarde=chemin_absolu_sauvegarde.substr( 0 , chemin_absolu_sauvegarde.lastIndexOf( '/' ) );
        /* this.__gi1.ma_trace1('repertoire_absolu_sauvegarde='+repertoire_absolu_sauvegarde); */
        if(!(await this.__gi1.is_dir( repertoire_absolu_sauvegarde ))){
            try{
                await Deno.mkdir( repertoire_absolu_sauvegarde , {"mode" : 0o777 ,"recursive" : true} );
                /* this.__gi1.ma_trace1( 'repertoire créé' ); */
            }catch(e){
                donnees_retournees[__xsi][__xer].push( 'erreur de création du répertoire "' + repertoire_absolu_sauvegarde + '" ' + this.__gi1.nl2( e ) );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            /* this.__gi1.ma_trace1('repertoire existe repertoire_absolu_sauvegarde='+repertoire_absolu_sauvegarde); */
        }
        if((await this.__gi1.is_file( chemin ))){
            try{
                /*
                  ../rev_1/toto.txt
                  ../sauvegarde_fichiers/rev_1/2026/01/23/toto.txt.2026-01-23_14_56_51.045.43aaa27f-9dba-4d1c-914d-c29537029931.bak
                */
                /* this.__gi1.ma_trace1(chemin, chemin_absolu_sauvegarde); */
                await Deno.rename( chemin , chemin_absolu_sauvegarde );
                /* this.__gi1.ma_trace1('\n\n\n\n\n\n\n\n\n/_**************** rename OK **********************_/\n\n\n'); */
                return({"__xst" : __xsu});
            }catch(e){
                this.__gi1.ma_trace1( 'e=' , e );
                donnees_retournees[__xsi][__xer].push( 'erreur de renommage du fichier "' + chemin + '" vers "' + chemin_absolu_sauvegarde + '"' + this.__gi1.nl2( e ) );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            return({"__xst" : __xer});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    test_du_nom_technique1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseigné' + this.__gi1.nl2()} );
            return({"__xst" : __xer});
        }
        let mes_err='erreur sur le champ "' + nom_champ + '" car ce caractère n\est pas admis : ';
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(!(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '.')){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + '<b>"' + c + '"</b> <br />'} );
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
            let tt=this.__gi1.__rev1.rev_tcm( valeur );
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
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'des fonctions ne sont pas définies " ' + des_fonctions_non_trouvees + '" ' + this.__gi1.nl2()} );
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
        this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit doit contenir ' + n + ' caractères.' + this.__gi1.nl2()} );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    test_du_nom_de_fichier1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseigné' + this.__gi1.nl2()} );
            return({"__xst" : __xer});
        }
        let mes_err='Erreur sur le champ "' + nom_champ + '" , ce caractère n\est pas admis : ';
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(!(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '.')){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + '<b>"' + c + '"</b> <br />'} );
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entier_compris_entre( inf , sup , valeur , nom_du_champ ){
        let val=0;
        let mes_err='Erreur sur le champ ' + nom_du_champ + ' qui doit être en entier compris entre 0 et 99 inclus<br />';
        try{
            val=parseInt( valeur , 10 );
        }catch(e1){
            return({"__xst" : __xer ,"__xme" : mes_err});
        }
        if(isNaN( val )){
            return({"__xst" : __xer ,"__xme" : mes_err});
        }
        if(val < inf || val > sup){
            return({"__xst" : __xer ,"__xme" : mes_err});
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
        return({"__xst" : __xer});
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
                this.__gi1.masquer_la_zone_message();
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
            if(this.__gi1.derniere_zone_editee && zone_source === this.__gi1.derniere_zone_editee.id){
                let debut=this.__gi1.derniere_zone_editee.value.substr( 0 , this.__gi1.position_dans_la_derniere_zone_editee );
                let fin=this.__gi1.derniere_zone_editee.value.substr( this.__gi1.position_dans_la_derniere_zone_editee );
                let nouveau=debut + '#()' + fin;
                this.__gi1.derniere_zone_editee.value=nouveau;
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
                let tt=this.__gi1.__rev1.rev_tcm( t.value );
                if(tt.__xst === __xsu){
                    let ttt=this.__gi1.__rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
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
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'zone source non trouvée ' + this.__gi1.nl2()} );
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
                    /* ajout d'un espace de hauteur de police */
                    hauteur+=this.__gi1.css_dimensions.t_police;
                    t1.style.height=hauteur + 'px';
                }else{
                    t1.style.height=this.__gi1.css_dimensions.hauteur_max_textarea + 'vh';
                }
                let dim=t1.getBoundingClientRect();
                let bosition_bas=dim.bottom;
                /* window.innerHeight = partie visible de la fenêtre */
                let difference=parseInt( window.innerHeight , 10 ) - parseInt( bosition_bas , 10 );
                if(difference - 2 * this.__gi1.css_dimensions.h_barre < 0){
                    /* il faut faire défiler le fenêtre de la différence */
                    let valeur_scroll_actuel=window.scrollY;
                    let decallage=valeur_scroll_actuel - difference;
                    /* on ajoute au décallage 2*( la hauteur du pied de page ) */
                    decallage=decallage + 2 * this.__gi1.css_dimensions.h_barre;
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
            this.__gi1.zone_d_edition_en_cours=zone_source;
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
            this.__gi1.zone_d_edition_en_cours=zone_source;
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
                this.__gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'zone de sélection vide '} );
                this.__gi1.affiche_les_messages();
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
                            this.__gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'le contenu du press-papier n\'est pas de type texte'} );
                            this.__gi1.affiche_les_messages();
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
        let le_top=le_bounding.top + this.__gi1.css_dimensions.t_padding_de_input + this.__gi1.css_dimensions.t_border;
        let le_left=parseInt( le_bounding.left + this.__gi1.css_dimensions.t_padding_de_input + this.__gi1.css_dimensions.t_border , 10 );
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
            decallage_y=parseInt( rectangles[numero_bloc].y - rectangles[0].y - rectangles[0].height - 2 * this.__gi1.css_dimensions.t_border - 2 * this.__gi1.css_dimensions.t_padding_de_input - numero_bloc , 10 );
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
            this.__gi1.zone_d_edition_en_cours=zone_source;
            let numero_de_ligne=window.prompt( "numero de ligne ?" , "0" );
            if(this.__gi1.est_num( numero_de_ligne ) && parseInt( numero_de_ligne , 10 ) > 0){
                let cmd='ligne(' + numero_de_ligne + '),zone(\'' + zone_source + '\')';
                let mat=this.__gi1.__rev1.rev_tcm( cmd );
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
            this.__gi1.zone_d_edition_en_cours=zone_source;
            let position=window.prompt( "position ?" );
            if(this.__gi1.est_num( position ) && parseInt( position , 10 ) >= 0){
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
    boutons_suppression2( nom_de_la_zone ){
        let o1='';
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__gi1.les_svg.copier_tout + '</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_suppression1( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el" viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__gi1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + this.__gi1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + this.__gi1.les_svg.retrecir + '</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_edition_text( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el"viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+=' <div class="rev_b_svg yy__1 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__gi1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + this.__gi1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + this.__gi1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg yy__xsi_2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + this.__gi1.les_svg.ensemble_vide + '</div>\r\n';
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
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__gi1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + this.__gi1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + this.__gi1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + this.__gi1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + this.__gi1.les_svg.retrecir + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__xsi_2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + this.__gi1.les_svg.ensemble_vide + '</div>\r\n';
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
                this.__gi1.stockage_local[type_lsto][nom_zone].valeur=parseInt( document.getElementById( nom_zone ).value , 10 );
            } catch {}
            let deverminage_avant=this.__gi1.__deverminage;
            this.__gi1.__deverminage=this.__gi1.stockage_local.parametres.__deverminage.valeur;
            if(deverminage_avant !== this.__gi1.__deverminage){
                console.log( 'Changement de déverminage=' , this.__gi1.__deverminage );
            }
            if(this.__gi1.__deverminage === 2){
                console.log( this.__gi1.stockage_local );
            }
            localStorage.setItem( this.__gi1.cle_lst0 , JSON.stringify( this.__gi1.stockage_local ) );
            this.__gi1.css1();
            let zone_actuelle=document.getElementById( nom_zone + '_actuelle' );
            if(zone_actuelle !== null){
                try{
                    zone_actuelle.innerHTML=this.__gi1.stockage_local[type_lsto][nom_zone].valeur;
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
    raz_zone_et_select1( mat , d , x ){
        let l01=mat.length;
        let id='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'id' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                id=mat[i + 1][1];
            }
        }
        try{
            document.getElementById( id ).value='';
            document.getElementById( id ).focus();
        }catch(e){}
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    lsto( mat , d , x ){
        let min=0;
        let max=10;
        let step=1;
        let t='';
        t+='<h1>paramètres et aides</h1>';
        for(let i in this.__gi1.reference_stockage_local['aspect']){
            t+='<div style="border:1px red solid;margin:10px;padding:10px;overflow-x:scroll;">';
            t+='';
            t+='<table border="1"><tr>';
            t+='<td>';
            t+='<span style="font-size:16px;">' + this.__gi1.reference_stockage_local['aspect'][i].libelle0 + '</span>';
            t+='</td>';
            t+='<td>';
            t+='<input ';
            t+=' type="range" ';
            t+=' id="' + i + '" ';
            t+=' min="' + this.__gi1.reference_stockage_local['aspect'][i].min + '" ';
            t+=' max="' + this.__gi1.reference_stockage_local['aspect'][i].max + '" ';
            t+=' step="' + this.__gi1.reference_stockage_local['aspect'][i].step + '" ';
            t+=' value="' + this.__gi1.stockage_local['aspect'][i].valeur + '" ';
            t+=' data-rev_change_ou_entree="';
            t+='m1(';
            t+=' n1(__gi1)';
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
            if(this.__gi1.reference_stockage_local['aspect'][i].nom_du_style !== ''){
                t+='m1(n1(__gi1),f1(maj_contenu(';
                t+=' type_cible(style)';
                t+=' id(' + i + '_nouvelle),';
                t+=' valeur(';
                t+='   nom_du_style(' + this.__gi1.reference_stockage_local['aspect'][i].nom_du_style + ')';
                t+='   valeur_de_champ(' + i + '),';
                t+='   dimension(' + this.__gi1.stockage_local['aspect'][i].dimension + ')';
                t+=' )';
                t+=')))';
            }
            t+='"';
            t+=' data-rev_click="';
            t+='m1(n1(__fnt1_),f1(';
            t+=' maj_stockage_local(nom_zone(' + i + '),type_lsto(aspect))';
            t+='))';
            t+='"';
            if(this.__gi1.reference_stockage_local['aspect'][i].style_interface){
                t+=' style="' + this.__gi1.reference_stockage_local['aspect'][i].style_interface + '"';
            }
            t+='>';
            t+='</td>';
            t+='</tr>';
            t+='</tr>';
            t+='<td colspan="2" style="height:40px;font-size:16px;"> nouvelle : ';
            t+=' <div style="display:inline-block;border:1px blue solid;">';
            t+='  <span id="' + i + '_nouvelle" style="display:inline-block;border-color:red;border-style:solid;min-width:4rem;min-height:30px;';
            if(i === '--t_police'){
                t+='font-size:' + this.__gi1.stockage_local['aspect'][i].valeur + 'px;';
            }else{
                t+='font-size:14px;';
            }
            if(i === '--t_border'){
                t+='border-width:' + this.__gi1.stockage_local['aspect'][i].valeur + 'px;';
            }else{
                t+='border-width:1px;';
            }
            t+='">' + this.__gi1.stockage_local['aspect'][i].valeur + '</span>';
            t+=' </div>' + this.__gi1.stockage_local['aspect'][i].dimension + '';
            t+=' , actuelle : ';
            t+=' <span id="' + i + '_actuelle">' + this.__gi1.stockage_local['aspect'][i].valeur + '</span>';
            t+=' ' + this.__gi1.stockage_local['aspect'][i].dimension;
            t+='</td>';
            t+='</tr></table>';
            t+='</div>';
        }
        for(let i in this.__gi1.reference_stockage_local['parametres']){
            t+='<div style="border:1px red solid;margin:10px;padding:10px;overflow-x:scroll;">';
            t+='';
            t+='<table border="1"><tr>';
            t+='<td>';
            t+='<span style="font-size:16px;">' + this.__gi1.reference_stockage_local['parametres'][i].libelle0 + '</span>';
            t+='</td>';
            t+='<td>';
            t+='<input ';
            t+=' type="range" ';
            t+=' id="' + i + '" ';
            t+=' min="' + this.__gi1.reference_stockage_local['parametres'][i].min + '" ';
            t+=' max="' + this.__gi1.reference_stockage_local['parametres'][i].max + '" ';
            t+=' step="' + this.__gi1.reference_stockage_local['parametres'][i].step + '" ';
            t+=' value="' + this.__gi1.stockage_local['parametres'][i].valeur + '" ';
            t+=' data-rev_change_ou_entree="';
            t+='m1(';
            t+=' n1(__gi1)';
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
            if(this.__gi1.reference_stockage_local['parametres'][i].nom_du_style !== ''){
                t+='m1(';
                t+=' n1(__gi1)';
                t+=' f1(';
                t+='  maj_contenu(';
                t+='   type_cible(style)';
                t+='   id(' + i + '_nouvelle),';
                t+='   valeur(';
                t+='     nom_du_style(' + this.__gi1.reference_stockage_local['parametres'][i].nom_du_style + ')';
                t+='     valeur_de_champ(' + i + '),';
                t+='     dimension(' + this.__gi1.stockage_local['parametres'][i].dimension + ')';
                t+='   )';
                t+='  )';
                t+=' )';
                t+=')';
            }
            t+='"';
            t+=' data-rev_click="';
            t+='m1(';
            t+=' n1(__fnt1_)';
            t+=' f1(';
            t+='  maj_stockage_local(nom_zone(' + i + '),type_lsto(parametres))';
            t+=' )';
            t+=')';
            t+='"';
            t+='>';
            t+='</td>';
            t+='</tr>';
            t+='</tr>';
            t+='<td colspan="2" style="height:40px;font-size:16px;"> nouvelle : ';
            t+='<div style="display:inline-block;border:1px blue solid;">';
            t+='<span id="' + i + '_nouvelle" style="display:inline-block;border:1px red solid;min-width:4rem;min-height:30px;">';
            t+='' + this.__gi1.stockage_local['parametres'][i].valeur + '';
            t+='</span>';
            t+='</div>' + this.__gi1.stockage_local['parametres'][i].dimension + '';
            t+=' , actuelle : ';
            t+='<span id="' + i + '_actuelle">' + this.__gi1.stockage_local['parametres'][i].valeur + '</span>' + this.__gi1.stockage_local['parametres'][i].dimension;
            t+='</td>';
            t+='</tr></table>';
            t+='</div>';
        }
        let ecran_tactile='ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        t+='<table border="1">';
        t+='  <tr>';
        t+='    <td>ecran tactile</td>';
        t+='    <td><b>' + JSON.stringify( ecran_tactile ) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td>safari mobile</td>';
        t+='    <td><b>' + JSON.stringify( navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) && navigator.userAgent.match( /AppleWebKit/ ) ) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td>taille de l\'écran</td>';
        t+='    <td><b> largeur=' + window.innerWidth + ' , hauteur=' + window.innerHeight + '</b></td>';
        t+='  </tr>';
        let genre_safari=this.#le_userAgent( /safari/i ) && !this.#le_userAgent( /chrome/i ) && !this.#le_userAgent( /android/i );
        t+='  <tr>';
        t+='    <td>genre safari</td>';
        t+='    <td><b>' + genre_safari + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td>ipad ou iphone</td>';
        t+='    <td><b>' + (genre_safari && navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td>crios</td>';
        t+='    <td><b>' + (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && ecran_tactile && this.#le_userAgent( /crios/i )) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td>navigator.userAgent</td>';
        t+='    <td><b>' + JSON.stringify( navigator.userAgent ) + '</b></td>';
        t+='  </tr>';
        t+='</table>';
        t+='<br />';
        /*
          t+='#genre crios = <b>' + JSON.stringify( this.#genre_crios ) + '</b>';
          t+='<br />';
          t+='navigator.userAgent = <b>' + JSON.stringify( navigator.userAgent ) + '</b>';
        */
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.activer_menu( null , null , '-2' );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'paramètres et aide' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    critere_liste( a , b ){
        if(a.hasOwnProperty( b ) && a[b] !== ''){
            if(this.__gi1.est_num( a[b] )){
                return(b + '(' + a[b] + ')');
            }
            return(b + '(\'' + a[b].replace( /\\/g , '\\\\' ).replace( /\''/g , '\\\'' ) + '\')');
        }
        return '';
    }
    /*#
       =====================================================================================================================
      * JavaScript equivalent of PHP's strtr()
      * Supports both:
      *  - strtr(string, from, to)  // character translation
      *  - strtr(string, replacements) // object map replacement
    */
    strtr( str , from , to ){
        /* Mode 1: Character translation */
        if( typeof from === 'string' &&  typeof to === 'string'){
            if(from.length !== to.length){
                throw new Error( "From and To strings must be the same length" );
            }
            let result='';
            for(let char of str){
                let index=from.indexOf( char );
                result+=index > -1 ? ( to[index] ) : ( char );
            }
            return result;
        }
        /* Mode 2: Object map replacement */
        if( typeof from === 'object' && from !== null){
            let result=str;
            /* Sort keys by length (longest first) to mimic PHP's behavior */
            const keys=Object.keys( from ).sort( ( a , b ) => {
                return(b.length - a.length);} );
            for(let key of keys){
                let value=from[key];
                /* Escape regex special characters in key */
                let escapedKey=key.replace( /[.*+?^${}()|[\]\\]/g , '\\$&' );
                result=result.replace( new RegExp( escapedKey , 'g' ) , value );
            }
            return result;
        }
        throw new Error( "Invalid arguments for strtr()" );
    }
    /*
      =============================================================================================================
      si s=0o777, on veut quand même mettre cette valeur en texte donc on ne teste pas est_num
    */
    sq4( s ){
        if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq1 n\'est pas défini , e1=' + e1.replace( /\n/g , '\n' ) );
        }else if( typeof s !== 'string'){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq1 n\'est pas une valeur de type "string"' );
        }
        /* cette fonction remplace les apostrophes par des doubles apostrophes */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s); */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        return('\'' + s1 + '\'');
    }
    /*
      =============================================================================================================
      condition "equivalent" 
      %tagada% => \%tagada\%
    */
    sq3( s ){
        if(this.__gi1.est_num( s )){
            return s;
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'Paramètre de sq3 non défini , e1=' + e1.replace( /\n/g , '<br />' ) );
        }
        /* cette fonction escapeString remplace les apostrophes par des doubles apostrophes */
        /* $s1=SQLite3::escapeString($s); */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s);*_/ */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        if(s.indexOf( '_' ) >= 0 || s.indexOf( '%' ) !== false){
            let t='\'' + s1 + '\' ';
            return t;
        }else{
            return('\'%' + s1 + '%\'');
        }
    }
    /*
      =============================================================================================================
      %tagada% => \%tagada\%
      condition "comme" 
    */
    sq2( s ){
        if(this.__gi1.est_num( s )){
            return('\'%' + s + '%\'');
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'Paramètre de sq1 non défini , e1=' + e1.replace( /\n/g , '<br />' ) );
        }
        /* cette fonction escapeString remplace les apostrophes par des doubles apostrophes */
        /* $s1=SQLite3::escapeString($s); */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s);*_/ */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        if(s.indexOf( '_' ) >= 0 || s.indexOf( '%' ) !== false){
            let t='\'%' + s1.replace( /%/g , '\\%' ).replace( /_/g , '\\_' ) + '%\' ESCAPE \'\\\'';
            return t;
        }else{
            return('\'%' + s1 + '%\'');
        }
    }
    /*
      =============================================================================================================
    */
    sq1( s ){
        if(this.__gi1.est_num( s )){
            return s;
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq1 n\'est pas défini , e1=' + e1.replace( /\n/g , '\n' ) );
        }else if( typeof s !== 'string'){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq1 n\'est pas une valeur de type "string"' );
        }
        /* cette fonction remplace les apostrophes par des doubles apostrophes */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s); */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        return('\'' + s1 + '\'');
    }
    /*
      =============================================================================================================
    */
    sq0( s ){
        if(this.__gi1.est_num( s )){
            return s;
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'Paramètre de sq1 non défini , e1=' + e1.replace( /\n/g , '<br />' ) );
        }
        /* cette fonction remplace les apostrophes par des doubles apostrophes */
        s=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s);*_/ */
        s=this.strtr( s , this.tab_de_remplacement1 );
        return s;
    }
    /*
      =============================================================================================================
      quand un champ de recherche contient des id, ils sont séparés par des virgules ou des points
      par exemple, 1,2,3 ou bien 1.2.3  , le where doit être sous la forme WHERE id in ( 1 , 2 , 3 )
      =============================================================================================================
    */
    construction_where_sql_sur_id1( nom_du_champ , critere ){
        let champ_where='';
        critere=String( '' + critere + '' ).replace( /\./g , ',' );
        if(critere !== null && critere.indexOf( ',' ) >= 0){
            let tableau_liste_des_valeurs=critere.split( ',' );
            let chaine_recherche='';
            for(let i in tableau_liste_des_valeurs){
                if(this.__gi1.est_num( tableau_liste_des_valeurs[i] )){
                    chaine_recherche+=',' + tableau_liste_des_valeurs[i];
                }
            }
            if(chaine_recherche !== ''){
                chaine_recherche=chaine_recherche.substr( 1 );
                champ_where+='AND ' + this.sq0( nom_du_champ ) + ' in (' + this.sq0( chaine_recherche ) + ') ';
            }
        }else if(critere === null){
            champ_where+='AND ' + this.sq0( nom_du_champ ) + ' IS NULL ';
        }else if(this.__gi1.est_num( critere )){
            champ_where+='AND ' + this.sq0( nom_du_champ ) + ' = ' + this.sq0( critere ) + ' ';
        }
        return champ_where;
    }
    /*
      =============================================================================================================
      pour les écrans liste
      =============================================================================================================
    */
    debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , fonction_liste ){
        let formulaire={};
        const l01=mat.length;
        /* console.log(donnees_recues) */
        if(!donnees_recues.__xva.hasOwnProperty( '__fo1' ) || !donnees_recues.__xva.__fo1.hasOwnProperty( fonction_liste )){
            donnees_recues.__xva['__fo1']={};
            donnees_recues.__xva.__fo1[fonction_liste]={};
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    donnees_recues.__xva.__fo1[fonction_liste][mat[i][1]]=mat[i + 1][1];
                }
            }
        }
        formulaire=donnees_recues.__xva.__fo1[fonction_liste];
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === '__num_page' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(this.__gi1.est_num( mat[i + 1][1] )){
                    formulaire['__num_page']=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        return formulaire;
    }
    /*
      =============================================================================================================
    */
}
export{__fnt1 as __fnt1};