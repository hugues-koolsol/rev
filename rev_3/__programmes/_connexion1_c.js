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
        a.select();
        return({"__xst" : __xsu});
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
    traite_touche_haut_sur_formulaire_de_connexion( e ){
        /* console.log(' dans keyup traite_touche_haut_sur_formulaire_de_connexion e=',e); */
        if(e.keyCode === 13){
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
        t+='<div class="yy__1" style="padding:10px;display:inline-block;margin:auto;margin;5px;">vous êtes connecté</div><br/>';
        t+='     <div style="margin:5px auto;"  class="rev_bouton yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(deconnexion1())))" title="Cliquez ici pour vous déconnecter" >❌ déconnexion</div>  ';
        t+='</div>';
        t+='<div class="yy_conteneur_table">';
        t+='<table border="1" id="vv_formulaire_de_connexion" style="min-width:340px;">';
        t+=' <tbody>';
        t+='  <tr>';
        t+='   <td style="text-align:right;">nom&nbsp;</td>  ';
        t+='   <td><input type="text" aria-autocomplete="list" id="chp_nom_de_connexion_utilisateur" style="width:100%;" value="" autocapitalize="off"></td> ';
        t+='  </tr> ';
        t+='  <tr>  ';
        t+='   <td style="text-align:right;">mot de passe&nbsp;</td>  ';
        t+='   <td><input type="password" autocomplete="off" id="chp_mot_de_passe_utilisateur_en_clair" style="width:100%;" value="" ></td> ';
        t+='  </tr> ';
        t+='  <tr>';
        t+='    <td colspan="2" style="text-align:center;">';
        t+='     <input type="hidden" id="vv_redirection" value="' + window.location.hash + '" />';
        t+='     <div style="margin:0 auto;" class="rev_bouton yy__3" data-rev_click="fo1(co1(vv_formulaire_de_connexion),pm1(m1(n1(' + this.moi + '),f1(verifier_connexion1()))))" title="Cliquez ici pour vous connecter" >connexion</div>  ';
        t+='    </td> ';
        t+='  </tr>';
        t+=' </tbody>';
        t+='</table>';
        t+='</div>';
        t+='<div style="text-align:center;margin-top:40px;">ou bien aller ici: ';
        t+=' <div style="margin:0 auto;"  class="rev_bouton" data-rev_click="m1(n1(__ig1)f1(affiche_page_d_accueil()))" title="affiche la page d\'accueil" >Accueil</div>';
        t+='</div>';
        this.__ig1.maj_contenu_principal( t );
        this.__ig1.activer_menu( null , null , '-3' );
        this.__ig1.maj_hash( mat , 0 );
        let a=document.getElementById( 'chp_nom_de_connexion_utilisateur' );
        a.addEventListener( 'keyup' , function( e ){
                /* console.log(e.keyCode) */
                if(e.keyCode === 39 || e.keyCode === 35){
                    /* touche flèche droite ou fin */
                    let a=document.getElementById( 'chp_nom_de_connexion_utilisateur' );
                    a.select();
                }
        } );
        let b=document.getElementById( 'vv_formulaire_de_connexion' );
        b.addEventListener( 'keyup' , this.traite_touche_haut_sur_formulaire_de_connexion.bind( this ) );
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