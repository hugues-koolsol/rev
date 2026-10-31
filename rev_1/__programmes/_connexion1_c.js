class _connexion1{
    moi='_connexion1';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
        console.log( 'constructor _connexion1' );
    }
    /*
      =============================================================================================================
    */
    deconnexion1( mat , d , le_colis1 ){
        try{
            document.getElementById( 'vv_info_projet' ).innerHTML='';
        } catch {}
        this.__ig1.maj_fav_icone( le_colis1._CA_ , 0 );
        let a=document.getElementById( 'chp_nom_de_connexion_utilisateur' );
        document.getElementById( 'vv_se_deconnecter' ).style.display='none';
        a.select();
        this.__ig1.ajoute_message( {"__xst" : __xsu ,"__xme" : '<br /><b style="font-size:1.5em;min-height:1.8em;">A bientôt :-)</b><br /><br />'} );
        this.__ig1.affiche_les_messages();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    repositionner_le_bouton_deconnexion(){
        if(window.innerWidth > this.__ig1.css_dimensions.t_fenetre){
            let a=parseInt( (window.innerWidth - this.__ig1.css_dimensions.t_fenetre) / 2 , 10 );
            document.getElementById( 'vv_bouton_deconnexion' ).style.right=a + 'px';
        }
    }
    /*
      =============================================================================================================
    */
    verifier_connexion1( mat , d , le_colis1 ){
        if(le_colis1.chi_id_utilisateur > 0){
            try{
                document.getElementById( 'vv_se_deconnecter' ).style.display='block';
                document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__1' );
                document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__0' );
            } catch {}
            try{
                if(this._CA_ === 1){
                    document.getElementById( 'vv_info_projet' ).innerHTML='<div class="yy_texte_clair_fond_fonce" title="projet ' + le_colis1.chi_id_projet + '" style="margin:auto;">p' + le_colis1.chi_id_projet + '/' + le_colis1.chp_nom_de_connexion_utilisateur.substr( 0 , 4 ) + '</div>';
                }else{
                    document.getElementById( 'vv_info_projet' ).innerHTML='<div class="yy_texte_clair_fond_fonce" title="utilisateur ' + le_colis1.chi_id_utilisateur + '" style="margin:auto;">' + le_colis1.chp_nom_de_connexion_utilisateur.substr( 0 , 4 ) + '</div>';
                }
            } catch {}
            if(window.location.hash !== '#pm1(m1(n1(_connexion1),f1(page_connexion1())))'){
                /*
                  dans le cas d'une redirection
                */
                this.__ig1.executer1( window.location.hash.substr( 1 ) );
                /* debugger */
            }else{
                this.repositionner_le_bouton_deconnexion();
            }
        }else{
            try{
                document.getElementById( 'vv_se_deconnecter' ).style.display='none';
                document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__0' );
                document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__1' );
            } catch {}
            try{
                document.getElementById( 'vv_info_projet' ).innerHTML='';
            } catch {}
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    traite_touche_bas_sur_formulaire_de_connexion( e ){
        console.log( ' dans traite_touche_bas_sur_formulaire_de_connexion e=' , e );
        if(e.keyCode === 13
               && e.target
               && (e.target.id === 'chp_mot_de_passe_utilisateur_en_clair'
                   || e.target.id === 'chp_nom_de_connexion_utilisateur')
        ){
            let aaa='fo1(co1(vv_formulaire_de_connexion),pm1(m1(n1(' + this.moi + '),f1(verifier_connexion1()))))';
            this.__ig1.executer1( aaa , null , null );
        }
    }
    /*
      =============================================================================================================
    */
    page_connexion1( mat , d , le_colis1 ){
        let t='';
        t+='<h1>connexion</h1>';
        let aff='none';
        if(le_colis1 && le_colis1.chi_id_utilisateur === 0){
            try{
                document.getElementById( 'vv_bouton_connexion' ).classList.remove( 'yy__0' );
                document.getElementById( 'vv_bouton_connexion' ).classList.add( 'yy__1' );
            } catch {}
        }else{
            if(document.getElementById( 'vv_bouton_connexion' ).className.indexOf( 'yy__0' ) >= 0
                   || le_colis1
                       && le_colis1.chi_id_utilisateur > 0
            ){
                aff='block;';
            }
        }
        t+='<div id="vv_se_deconnecter" style="padding:20px;text-align:center;display:' + aff + '">';
        t+='<div class="yy__1" style="padding:10px;display:inline-block;margin:auto;margin;5px;border-radius:10px;    background: linear-gradient(to bottom, #5DBB00, #7FFF00 );font-weight:bold;">vous êtes connecté</div><br/>';
        t+='<button id="vv_bouton_deconnexion" style="position:fixed;top:var(--h_barre);right:0px;padding:0;margin:0;border-width:1px;opacity:0.9;"  class="yy_b1 yy__2" rev_clic1="pm1(m1(n1(' + this.moi + '),f1(deconnexion1())))" title="Cliquez ici pour vous déconnecter" >❌ déconnexion</button>';
        t+='</div>';
        /*  */
        t+='<table  id="vv_formulaire_de_connexion" style="max-width:360px;">';
        t+='<tr>';
        /*  */
        t+='<th style="">nom</th>';
        t+='</tr>';
        t+='<tr>';
        t+='<td><input id="chp_nom_de_connexion_utilisateur" type="text" aria-autocomplete="list" style="width:100%;margin:0 auto 0 auto;display:block;max-width:25em;text-align:center;" value="" autocapitalize="off" class="yy_input1" /></td>';
        t+='</tr>';
        t+='<tr>';
        t+='<td>mot de passe</td>';
        t+='</tr>';
        t+='<tr>';
        t+='<td><input id="chp_mot_de_passe_utilisateur_en_clair" type="password" autocomplete="off" style="width:100%;margin:0 auto 0 auto;display:block;max-width:25em;text-align:center;" value="" class="yy_input1" /></td>';
        t+='</tr>';
        t+='<tr>';
        t+='<td>';
        t+='<input type="hidden" id="vv_redirection" value="' + window.location.hash + '" />';
        t+='<button style="margin:0 auto;display:block;width:10em;" class="yy_b1 yy__3" rev_clic1="fo1(co1(vv_formulaire_de_connexion),pm1(m1(n1(' + this.moi + '),f1(verifier_connexion1()))))" title="Cliquez ici pour vous connecter" >connexion</button>';
        t+='</td>';
        t+='</tr>';
        t+='</table>';
        t+='<div style="text-align:center;margin-top:40px;">ou bien aller ici: ';
        t+=' <button style="margin:0 auto;"  class="yy_b1" rev_clic1="m1(n1(__ig1)f1(affiche_page_d_accueil()))" title="affiche la page d\'accueil" >Accueil</button>';
        t+='</div>';
        this.__ig1.maj_contenu_principal( t );
        this.__ig1.activer_menu( null , null , '-3' );
        this.__ig1.maj_hash( mat , 0 );
        this.repositionner_le_bouton_deconnexion();
        let b=document.getElementById( 'vv_formulaire_de_connexion' );
        b.addEventListener( 'keydown' , this.traite_touche_bas_sur_formulaire_de_connexion.bind( this ) );
        setTimeout( () => {
                let b=document.getElementById( 'chp_nom_de_connexion_utilisateur' );
                b.focus();
                b.select();
                /* console.log('a.value="'+a.value+'"'); */
        } , 250 );
        /* =============================================================== */
        this.__ig1.maj_title_htm1( 'connexion' );
        return({"__xst" : __xsu});
    }
}
export{_connexion1 as _connexion1};