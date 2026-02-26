class x_ecran_coordonnees1{
    moi='x_ecran_coordonnees1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
      au retour du serveur
    */
    modifier1( mat , d , données ){
        if(données.__xst === __xsu){
            this.__gi1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'vos coordonnées ont bien été modifiées'} );
            this.__gi1.affiche_les_messages();
        }else{
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    recupérer_mes_coordonnées( mat , d , données ){
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            debugger;
        }
        if(données.__xst === __xsu && données.__xva.hasOwnProperty( '__xva' ) && données.__xva.__xva.hasOwnProperty( '0' )){
            document.getElementById( 'chp_nom_de_connexion_utilisateur' ).value=données.__xva.__xva[0]['T0.chp_nom_de_connexion_utilisateur'];
            document.getElementById( 'chp_nom_de_connexion_utilisateur_ancien' ).value=données.__xva.__xva[0]['T0.chp_nom_de_connexion_utilisateur'];
            document.getElementById( 'nombre_de_connexions' ).innerHTML='Vous vous êtes connecté <b>' + données.__xva.__xva[0]['T0.chi_compteur1_utilisateur'] + '</b> fois ;-)';
        }
        setTimeout( () => {
                document.getElementById( 'chp_mot_de_passe_utilisateur' ).value='';} , 500 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_modifier1( mat , d , données ){
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_mot_de_passe_utilisateur'] !== fo1['chp_mot_de_passe_utilisateur2']){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'les mots de passe ne correspondent pas'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_mot_de_passe_utilisateur' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_mot_de_passe_utilisateur'].length < 7){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le mot de passe doit faire au moins 7 caractères'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_mot_de_passe_utilisateur' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_de_connexion_utilisateur'].length < 5){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le nom de connexion doit comporter au moins 5 caractères'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_de_connexion_utilisateur' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_de_connexion_utilisateur'].indexOf( ' ' ) >= 0 || fo1['chp_mot_de_passe_utilisateur'].indexOf( ' ' ) >= 0){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le nom de connexion et le mot de passe ne doivent pas comporter le caractère espace'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_nom_de_connexion_utilisateur' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1())))' ,"__xva" : {"__fo1" : __fo1 ,"__co1" : co1}} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let t='';
        t+='<h1>mes coordonnées</h1>';
        t+='<div class="yy_conteneur_table">';
        t+='  <table border="1" id="vv_formulaire_de_changement_de_nom_et_de_mot_de_passe">';
        t+='    <tr>';
        t+='      <td>nouveau nom</td>';
        t+='      <td>';
        t+='        <input type="hidden" id="chp_nom_de_connexion_utilisateur_ancien" value="" autocapitalize="off">';
        t+='        <input type="text" id="chp_nom_de_connexion_utilisateur" value="" autocapitalize="off">';
        t+='      </td>';
        t+='    </tr>';
        t+='    <tr>';
        t+='      <td>nouveau mot de passe</td>';
        t+='      <td>';
        t+='        <input type="password" id="chp_mot_de_passe_utilisateur" value="" autocomplete="new-password">';
        t+='      </td>';
        t+='    </tr>';
        t+='    <tr>';
        t+='    <tr>';
        t+='      <td>nouveau mot de passe<br /> pour confirmation</td>';
        t+='      <td>';
        t+='        <input type="password" id="chp_mot_de_passe_utilisateur2" value="" autocomplete="off">';
        t+='      </td>';
        t+='    </tr>';
        t+='    <tr>';
        t+='      <td>ancien mot de passe</td>';
        t+='      <td>';
        t+='        <input type="password" id="chp_mot_de_passe_utilisateur3" value="" autocomplete="off">';
        t+='      </td>';
        t+='    </tr>';
        t+='    <tr>';
        t+='      <td colspan="2" style="text-align:center;">';
        t+='        <div class="rev_bouton yy__3" data-rev_click="';
        t+='fo1(co1(vv_formulaire_de_changement_de_nom_et_de_mot_de_passe),m1(n1(' + this.moi + '),f1(verifier_modifier1())))';
        t+='" title="Cliquez ici pour vous connecter" >changer mes coordonnées</div>';
        t+='      </td>';
        t+='    </tr>';
        t+='  </table>';
        t+='</div>';
        t+=' <p id="nombre_de_connexions"></p>';
        t+=' <p></p>';
        this.__gi1.maj_contenu_principal( t );
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'mes coordonnées' );
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(recupérer_mes_coordonnées())))';
        let obj={"__xac" : cmd};
        this.__gi1.envoyer_un_message_au_worker( obj );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_coordonnees1 as x_ecran_coordonnees1};