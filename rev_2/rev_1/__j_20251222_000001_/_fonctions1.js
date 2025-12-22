class _fonctions1{
    /*
      =============================================================================================================
    */
    constructor( e ){
        /*
          console.log( 'constructor fonctions 1' , e );
        */
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
        let lst=a.getElementsByTagName( 'pre' );
        if(lst.length === 0){
            /* il n'y a pas de pre, on l'ajoute */
            var child=document.createElement( 'pre' );
            child.innerHTML=a.title;
            a.appendChild( child );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entier_compris_entre( inf , sup , valeur , nom_champ ){
        let val=0;
        let mes_err='sur la valeur ' + valeur + ' sur le champ "' + nom_champ + '" qui doit être en entier compris entre 0 et 99 inclus<br />';
        try{
            val=parseInt( valeur , 10 );
        }catch(e1){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + __gi1.nl2( e )} );
            return({"__xst" : __xer});
        }
        if(isNaN( val )){
            __gi1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + __gi1.nl2( e )} );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
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
                __gi1.stockage_local[type_lsto][nom_zone].valeur=parseInt( document.getElementById( nom_zone ).value , 10 );
            } catch {}
            localStorage.setItem( __gi1.cle_lst0 , JSON.stringify( __gi1.stockage_local ) );
            __gi1.css1();
            let zone_actuelle=document.getElementById( nom_zone + '_actuelle' );
            if(zone_actuelle !== null){
                try{
                    zone_actuelle.innerHTML=__gi1.stockage_local[type_lsto][nom_zone].valeur;
                } catch {}
            }
        }
        return({"__xst" : __xsu});
    }
    /* function le_userAgent */
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
        let t='';
        t+='<h1>paramètres et aides</h1>';
        for(let i in __gi1.reference_stockage_local['aspect']){
            t+='<div style="border:1px red solid;margin:10px;padding:10px;overflow-x:scroll;">';
            t+='';
            t+='<table border="1"><tr>';
            t+='<td>';
            t+='<span style="font-size:16px;">' + __gi1.reference_stockage_local['aspect'][i].libelle0 + '</span>';
            t+='</td>';
            t+='<td>';
            t+='<input ';
            t+=' type="range" ';
            t+=' id="' + i + '" ';
            t+=' min="' + __gi1.reference_stockage_local['aspect'][i].min + '" ';
            t+=' max="' + __gi1.reference_stockage_local['aspect'][i].max + '" ';
            t+=' step="' + __gi1.reference_stockage_local['aspect'][i].step + '" ';
            t+=' value="' + __gi1.stockage_local['aspect'][i].valeur + '" ';
            t+=' data-rev_change_ou_entree="';
            t+='m1(';
            t+=' n1(__interface1)';
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
            if(__gi1.reference_stockage_local['aspect'][i].nom_du_style !== ''){
                t+='m1(n1(__interface1),f1(maj_contenu(';
                t+=' type_cible(style)';
                t+=' id(' + i + '_nouvelle),';
                t+=' valeur(';
                t+='   nom_du_style(' + __gi1.reference_stockage_local['aspect'][i].nom_du_style + ')';
                t+='   valeur_de_champ(' + i + '),';
                t+='   dimension(' + __gi1.stockage_local['aspect'][i].dimension + ')';
                t+=' )';
                t+=')))';
            }
            t+='"';
            t+=' data-rev_click="';
            t+='m1(n1(_fonctions1),f1(';
            t+=' maj_stockage_local(nom_zone(' + i + '),type_lsto(aspect))';
            t+='))';
            t+='"';
            if(__gi1.reference_stockage_local['aspect'][i].style_interface){
                t+=' style="' + __gi1.reference_stockage_local['aspect'][i].style_interface + '"';
            }
            t+='>';
            t+='</td>';
            t+='</tr>';
            t+='</tr>';
            t+='<td colspan="2" style="height:40px;font-size:16px;"> nouvelle : ';
            t+=' <div style="display:inline-block;border:1px blue solid;">';
            t+='  <span id="' + i + '_nouvelle" style="display:inline-block;border-color:red;border-style:solid;min-width:4rem;min-height:30px;';
            if(i === '--t_police'){
                t+='font-size:' + __gi1.stockage_local['aspect'][i].valeur + 'px;';
            }else{
                t+='font-size:14px;';
            }
            if(i === '--t_border'){
                t+='border-width:' + __gi1.stockage_local['aspect'][i].valeur + 'px;';
            }else{
                t+='border-width:1px;';
            }
            t+='">' + __gi1.stockage_local['aspect'][i].valeur + '</span>';
            t+=' </div>' + __gi1.stockage_local['aspect'][i].dimension + '';
            t+=' , actuelle : ';
            t+=' <span id="' + i + '_actuelle">' + __gi1.stockage_local['aspect'][i].valeur + '</span>';
            t+=' ' + __gi1.stockage_local['aspect'][i].dimension;
            t+='</td>';
            t+='</tr></table>';
            /* $t=''; */
            t+='</div>';
        }
        for(let i in __gi1.reference_stockage_local['parametres']){
            t+='<div style="border:1px red solid;margin:10px;padding:10px;overflow-x:scroll;">';
            t+='';
            t+='<table border="1"><tr>';
            t+='<td>';
            t+='<span style="font-size:16px;">' + __gi1.reference_stockage_local['parametres'][i].libelle0 + '</span>';
            t+='</td>';
            t+='<td>';
            t+='<input ';
            t+=' type="range" ';
            t+=' id="' + i + '" ';
            t+=' min="' + __gi1.reference_stockage_local['parametres'][i].min + '" ';
            t+=' max="' + __gi1.reference_stockage_local['parametres'][i].max + '" ';
            t+=' step="' + __gi1.reference_stockage_local['parametres'][i].step + '" ';
            t+=' value="' + __gi1.stockage_local['parametres'][i].valeur + '" ';
            t+=' data-rev_change_ou_entree="';
            t+='m1(';
            t+=' n1(__interface1)';
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
            if(__gi1.reference_stockage_local['parametres'][i].nom_du_style !== ''){
                t+='m1(';
                t+=' n1(__interface1)';
                t+=' f1(';
                t+='  maj_contenu(';
                t+='   type_cible(style)';
                t+='   id(' + i + '_nouvelle),';
                t+='   valeur(';
                t+='     nom_du_style(' + __gi1.reference_stockage_local['parametres'][i].nom_du_style + ')';
                t+='     valeur_de_champ(' + i + '),';
                t+='     dimension(' + __gi1.stockage_local['parametres'][i].dimension + ')';
                t+='   )';
                t+='  )';
                t+=' )';
                t+=')';
            }
            t+='"';
            t+=' data-rev_click="';
            t+='m1(';
            t+=' n1(_fonctions1)';
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
            t+='' + __gi1.stockage_local['parametres'][i].valeur + '';
            t+='</span>';
            t+='</div>' + __gi1.stockage_local['parametres'][i].dimension + '';
            t+=' , actuelle : ';
            t+='<span id="' + i + '_actuelle">' + __gi1.stockage_local['parametres'][i].valeur + '</span>' + __gi1.stockage_local['parametres'][i].dimension;
            t+='</td>';
            t+='</tr></table>';
            /* $t=''; */
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
        __gi1.maj_contenu_principal( t );
        __gi1.activer_menu( null , null , '-2' );
        __gi1.maj_hash( mat , 0 );
        __gi1.maj_title_htm1( 'paramètres et aide' );
        return({"__xst" : __xsu});
    }
}
export{_fonctions1 as _fonctions1};