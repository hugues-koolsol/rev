class _connexion1{
    moi='_connexion1';
    /*
      =============================================================================================================
    */
    constructor( mat , d ){
        /* console.log( 'constructor _connexion1' ); */
    }
    /*
      =============================================================================================================
    */
    deconnexion1( mat , d ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_connexion1( mat , d , le_message ){
        let t='';
        t+='<h1>connexion</h1>';
        let aff='none';
        if(document.getElementById( 'vv_bouton_connexion' ).className.indexOf( 'yy__0' ) >= 0
               || le_message
                   && le_message.__xva.chi_id_utilisateur > 0
        ){
            aff='block;';
        }
        t+='<div id="vv_se_deconnecter" style="padding:20px;text-align:center;display:' + aff + '">';
        t+='<h2>vous êtes connecté</h2>';
        t+='     <div style="margin:0 auto;"  class="rev_bouton yy__2" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(deconnexion1())))" title="Cliquez ici pour vous déconnecter" >❌ déconnexion</div>  ';
        t+='</div>';
        t+='<div class="yy_conteneur_table">';
        t+='<table border="1" id="vv_formulaire_de_connexion" style="min-width:340px;">';
        t+=' <tbody>';
        t+='  <tr>';
        t+='   <td style="text-align:right;">nom&nbsp;</td>  ';
        t+='   <td><input type="text" id="vv_chp_nom_de_connexion_utilisateur" style="width:100%;" value="" autocapitalize="off"></td> ';
        t+='  </tr> ';
        t+='  <tr>  ';
        t+='   <td style="text-align:right;">mot de passe&nbsp;</td>  ';
        t+='   <td><input type="password" autocomplete="off" id="vv_chp_mot_de_passe_utilisateur" style="width:100%;" value="" ></td> ';
        t+='  </tr> ';
        t+='  <tr>';
        t+='    <td colspan="2" style="text-align:center;">';
        t+='     <input type="hidden" id="vv_redirection" value="' + window.location.hash + '" />';
        t+='     <div style="margin:0 auto;" class="rev_bouton yy__3" data-rev_click="fo1(co1(vv_formulaire_de_connexion),pm1(m1(n1(' + this.moi + '),f1(page_connexion1()))))" title="Cliquez ici pour vous connecter" >connexion</div>  ';
        t+='    </td> ';
        t+='  </tr>';
        /*
          t+='  <tr>  ';
          t+='   <td>se souvenir &nbsp;<br>de mon nom&nbsp;</td>  ';
          t+='   <td style="text-align:center;"><input type="checkbox" id="vv_se_souvenir_de_moi" ></td> ';
          t+='  </tr> ';
        */
        t+=' </tbody>';
        t+='</table>';
        t+='</div>';
        t+='<div style="text-align:center;margin-top:40px;">ou bien aller ici: ';
        t+=' <div style="margin:0 auto;"  class="rev_bouton" data-rev_click="m1(n1(__interface1)f1(affiche_page_d_accueil()))" title="affiche la page d\'accueil" >Accueil</div>';
        t+='</div>';
        __gi1.maj_contenu_principal( t );
        __gi1.activer_menu( null , null , '-3' );
        __gi1.maj_hash( mat , 0 );
        return({"__xst" : __xsu});
    }
}
export{_connexion1 as _connexion1};