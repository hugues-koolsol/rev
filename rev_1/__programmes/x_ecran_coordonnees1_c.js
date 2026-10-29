class x_ecran_coordonnees1{
    moi='x_ecran_coordonnees1';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
      au retour du serveur
    */
    modifier1( mat , d , données ){
        if(données.__xst === __xsu){
            this.__ig1.ajoute_message( {"__xst" : __xsu ,"__xme" : 'vos coordonnées ont bien été modifiées'} );
            this.__ig1.affiche_les_messages();
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
            document.getElementById( 'chp_nom_de_connexion_utilisateur' ).value=données.__xva.__xva[0]['T0_chp_nom_de_connexion_utilisateur'];
            document.getElementById( 'chp_nom_de_connexion_utilisateur_ancien' ).value=données.__xva.__xva[0]['T0_chp_nom_de_connexion_utilisateur'];
            document.getElementById( 'nombre_de_connexions' ).innerHTML='Vous vous êtes connecté <b>' + données.__xva.__xva[0]['T0_chi_compteur1_utilisateur'] + '</b> fois ;-)';
        }
        setTimeout( () => {
                document.getElementById( 'chp_mot_de_passe_utilisateur' ).value='';
        } , 500 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_modifier1( mat , d , données ){
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_mot_de_passe_utilisateur'] !== fo1['chp_mot_de_passe_utilisateur2']){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'les mots de passe ne correspondent pas'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_mot_de_passe_utilisateur' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_mot_de_passe_utilisateur'].length < 7){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le mot de passe doit faire au moins 7 caractères'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_mot_de_passe_utilisateur' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        if(fo1['chp_nom_de_connexion_utilisateur'].length < 5){
            if(this.__ig1.chi_id_utilisateur === 1 && fo1['chp_nom_de_connexion_utilisateur'].length >= 3){
            }else{
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le nom de connexion doit comporter au moins 5 caractères'} );
                this.__ig1.affiche_les_messages();
                this.__ig1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'chp_nom_de_connexion_utilisateur' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['chp_nom_de_connexion_utilisateur'].indexOf( ' ' ) >= 0 || fo1['chp_mot_de_passe_utilisateur'].indexOf( ' ' ) >= 0){
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le nom de connexion et le mot de passe ne doivent pas comporter le caractère espace'} );
            this.__ig1.affiche_les_messages();
            this.__ig1.retablir_les_boutons_masques();
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
        this.__ig1.envoyer_un_colis_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1())))' ,"__xva" : {"__fo1" : __fo1 ,"__co1" : co1}} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let o1='';
        o1+='<h1>mes coordonnées</h1>';
        
        o1+='<div id="vv_formulaire_de_changement_de_nom_et_de_mot_de_passe">';
        /* t+=this.__ig1.__fnt1.html_edition_de_zones_text2( tup , {"nom_du_champ" : "chp_nom_de_connexion_utilisateur" ,"__contexte" : "modification1" ,"longueur_du_champ" : '64' ,"libelle_du_champ" : "nouveau nom"} ); */
        
        o1+='        <input type="hidden" id="chp_nom_de_connexion_utilisateur_ancien" value="" />';
        let tt=[
            /*  */
            ['nouveau nom','chp_nom_de_connexion_utilisateur','text'],
            ['nouveau mot de passe','chp_mot_de_passe_utilisateur','password'],
            ['nouveau mot de passe<br /> pour confirmation','chp_mot_de_passe_utilisateur2','password'],
            ['ancien mot de passe','chp_mot_de_passe_utilisateur3','password']
            
        ];
        let lng_px=(64 * this.__ig1.css_dimensions.largeur_du_m + 2 * (this.__ig1.css_dimensions.t_pad_inp + this.__ig1.css_dimensions.t_input_border));
        for(let i=0;i<tt.length;i++){
            o1+='<div class="yy_edition_champ1">';
            o1+='    <div class="yy_edition_libelle1">';
            o1+='        <div style="color:red;">' + tt[i][0] + '</div>';
            o1+='    </div>';
            o1+='    <div class="yy_edition_valeur1">';
            o1+='        <div class="yy_contient_description">';
            o1+='<input id="' + tt[i][1] + '" type="' + tt[i][2] + '" size="48" maxlength="64" value="" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="yy_input1" style="width: min( 100% , ' + lng_px + 'px)" />';
            o1+='        </div>\r\n';
            o1+='    </div>';
            o1+='</div>';
        }
        o1+='<div class="yy_conteneur_table">';
        o1+='  <table border="1">';
        o1+='    <tr>';
        o1+='      <td colspan="2" style="text-align:center;">';
        o1+='        <div class="yy_b1 yy__3" style="max-height:3em;" rev_clic1="';
        o1+='fo1(co1(vv_formulaire_de_changement_de_nom_et_de_mot_de_passe),m1(n1(' + this.moi + '),f1(verifier_modifier1())))';
        o1+='" title="Cliquez ici pour vous connecter" >changer mes coordonnées</div>';
        o1+='      </td>';
        o1+='    </tr>';
        o1+='  </table>';
        o1+='</div>';
        o1+='</div>';
        o1+=' <p id="nombre_de_connexions"></p>';
        o1+=' <p></p>';
        this.__ig1.maj_contenu_principal( o1 );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'mes coordonnées' );
        let cmd='';
        cmd+='pm1(m1(n1(' + this.moi + '),f1(recupérer_mes_coordonnées())))';
        let obj={"__xac" : cmd};
        this.__ig1.envoyer_un_colis_au_worker( obj );
        return({"__xst" : __xsu});
    }
}
export{x_ecran_coordonnees1 as x_ecran_coordonnees1};