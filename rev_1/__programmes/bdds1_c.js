import {v_svg_bdd1} from '/f0?n0=v_svg_bdd1_c.js';
class bdds1{
    /*
      ref_select=371
      ref_insert=363
      ref_delete=364
      ref_update=362
      ref_liste_ecran=361
    */
    moi='bdds1';
    DUN_DUNE_ELEMENT_GERE='d\'une base de donnée';
    LISTE_DES_ELEMENTS_GERES='liste des bases de données';
    __gi1=null;
    /*
      filtres liste
    */
    tableau_des_filtres={
        "liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_basedd" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12}
        } ,
        "sous_liste1" : {
            "__num_page" : {"type_filtre" : 'entier' ,"défaut" : 0 ,"masqué" : true ,"nom" : '__num_page' ,"taille" : 8} ,
            "T0_chi_id_basedd" : {"type_filtre" : 'INTEGER' ,"défaut" : '' ,"masqué" : false ,"nom" : 'id' ,"taille" : 12}
        }
    };
    fonction_liste='liste1';
    filtres={};
    vv_ecran_liste_boutons_avant='';
    les_bases_du_projet=null;
    /*
      =============================================================================================================
    */
    zoom_moins( mat , d ){
        let rev='';
        rev+='zoomMoins()';
        let mat2=this.__gi1.__rev1.rev_tm( rev );
        this.__gi1.m1( 'v_svg_bdd1' , mat2.__xva , 0 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zoom_plus( mat , d ){
        let rev='';
        rev+='zoomPlus()';
        let mat2=this.__gi1.__rev1.rev_tm( rev );
        this.__gi1.m1( 'v_svg_bdd1' , mat2.__xva , 0 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    editer_le_schema( mat , d , chi_id_basedd ){
        if(chi_id_basedd === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if('chi_id_basedd' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        if(document.getElementById( 'bouton_bdd_' + chi_id_basedd ).className.indexOf( 'yy__1' ) < 0){
            document.getElementById( 'bouton_bdd_' + chi_id_basedd ).classList.add( 'yy__1' );
            var rev='';
            /* refZnDessin , nom_de_la_div_contenant_le_svg */
            rev+='   selectionner_une_base(id_bdd_de_la_base(' + chi_id_basedd + '))';
            let mat2=this.__gi1.__rev1.rev_tm( rev );
            this.__gi1.m1( 'v_svg_bdd1' , mat2.__xva , 0 );
            /* this.v_svg_bdd1.selectionner_une_base(chi_id_basedd); */
        }else{
            var rev='';
            /* refZnDessin , nom_de_la_div_contenant_le_svg */
            rev+='   déselectionner_une_base(id_bdd_de_la_base(' + chi_id_basedd + '))';
            let mat2=this.__gi1.__rev1.rev_tm( rev );
            this.__gi1.m1( 'v_svg_bdd1' , mat2.__xva , 0 );
            document.getElementById( 'bouton_bdd_' + chi_id_basedd ).classList.remove( 'yy__1' );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    apres_recuperer_les_revs_des_bases( mat , d , le_message_du_serveur=null ){
        let les_bases_a_editer='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('les_bases_a_editer' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                les_bases_a_editer=mat[i + 1][1];
            }
        }
        var rev='';
        /* refZnDessin , nom_de_la_div_contenant_le_svg */
        rev+='   init001(';
        rev+='    id_du_svg(refZnDessin)';
        rev+='    nom_de_la_div_contenant_le_svg(div_svg1)';
        rev+='   )';
        rev+='   integrer_les_revs_des_bases()';
        let mat1=this.__gi1.__rev1.rev_tm( rev );
        this.__gi1.m1( 'v_svg_bdd1' , mat1.__xva , 0 , le_message_du_serveur );
        this.les_bases_du_projet=le_message_du_serveur.__xva.les_bases_du_projet;
        document.getElementById( 'vv_liste_des_bases' ).innerHTML='';
        let bases_trouvées=false;
        for(let i in this.les_bases_du_projet){
            bases_trouvées=true;
        }
        if(bases_trouvées === true){
            document.getElementById( 'message_dans_le_svg' ).innerHTML='veuillez sélectionner les bases';
        }else{
            document.getElementById( 'message_dans_le_svg' ).innerHTML='pas de base trouvée';
            return({"__xst" : __xsu});
        }
        let cmds='';
        for(let i in this.les_bases_du_projet){
            cmds+='<div id="bouton_bdd_' + this.les_bases_du_projet[i]['T0.chi_id_basedd'] + '" class="rev_bouton"';
            cmds+=' data-rev_click="';
            cmds+='m1(n1(' + this.moi + '),f1(editer_le_schema(';
            cmds+=' chi_id_basedd(' + this.les_bases_du_projet[i]['T0.chi_id_basedd'] + ')';
            cmds+=')))';
            cmds+='">base ' + this.les_bases_du_projet[i]['T0.chi_id_basedd'] + '</div>';
        }
        cmds+='<div class="rev_bouton" data-rev_click="m1(n1(' + this.moi + '),f1(zoom_plus()))">++</div>';
        cmds+='<div class="rev_bouton" data-rev_click="m1(n1(' + this.moi + '),f1(zoom_moins()))">--</div>';
        document.getElementById( 'vv_liste_des_bases' ).innerHTML=cmds;
        this.__gi1.ajoute_les_evenements_aux_boutons();
        let tab_bases_a_editer=[];
        if(les_bases_a_editer !== ''){
            tab_bases_a_editer=les_bases_a_editer.split( ',' ).map( ( x ) => {
                return(parseInt( x , 10 ));} );
            for( let i=0 ; i < tab_bases_a_editer.length ; i++ ){
                setTimeout( () => {
                        this.editer_le_schema( null , null , tab_bases_a_editer[i] );} , 50 );
                window.location.hash='#m1(n1(' + this.moi + '),f1(editer_les_schemas(les_bases_a_editer(\'' + tab_bases_a_editer[0] + '\'))))';
            }
        }
        /*
          let cl='';
          if(tab_bases_a_editer.includes(this.les_bases_du_projet[i]['T0.chi_id_basedd'])){
          cl='yy__3'
          }
          
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    editer_les_schemas( mat , d ){
        let les_bases_a_editer='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if('les_bases_a_editer' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                les_bases_a_editer=mat[i + 1][1];
            }
        }
        let o1='';
        o1+='<h1>édition du schéma</h1>';
        o1+='<div id="vv_liste_des_bases"></div>';
        o1+='<div id="div_svg1"';
        o1+=' style="background: url(';
        o1+='&quot;data:image/svg+xml,%3Csvg xmlns=\\&quot;http://www.w3.org/2000/svg\\&quot; ';
        o1+=' viewBox=\\&quot;0 0 10 10\\&quot;%3E%3Cpath d=\\&quot;M 0 0 l 10 10 l 0 -10 l -10 10 Z\\&quot;';
        o1+=' fill=\\&quot;black\\&quot;';
        o1+=' fill-opacity=\\&quot;.04\\&quot;/%3E%3C/svg%3E&quot;';
        o1+=') 208px 261px / 10px;">';
        o1+='    <svg id="refZnDessin" transform="rotate(0 0 0)" viewBox="0 0 400 400" style="border: 0; position: relative; background: transparent; top: 0px; left: 0px; width: 400px; height: 400px;">';
        o1+='        <text id="message_dans_le_svg" x="10" y="20" style="stroke:black;stroke-width:0.1;fill:black;">Veuillez patienter s\'il vous plaît !</text>';
        o1+='    </svg>';
        o1+='</div>';
        this.__gi1.maj_contenu_principal( o1 );
        this.les_bases_du_projet=null;
        document.getElementById( 'message_dans_le_svg' ).innerHTML='Veuillez patienter s\'il vous plaît !';
        /* window.location.hash='#m1(n1(' + this.moi + '),f1(editer_les_schemas(les_bases_a_editer(\'' + les_bases_a_editer + '\'))))'; */
        this.__gi1.envoyer_un_message_au_worker( {"__xac" : 'pm1(m1(n1(' + this.moi + '),f1(recuperer_les_revs_des_bases())))' ,"__xva" : {"les_bases_a_editer" : les_bases_a_editer}} );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    f1( mat , d , le_message_du_serveur=null ){
        switch (mat[d][1]){
            case 'dump_de_la_base' : 
            case 'enregistrer_la_matrice_dans_la_table_rev' : break;
            default:
                this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'CLIENT : la fonction "' + mat[d][1] + '" n\'est pas traitée ou bien comporte une erreur'} );
                return({"__xst" : __xer});
                
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
        for( let i=d + 1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'nom_champ_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.nom_champ_dans_parent1=mat[i + 1][1];
            }else if(mat[i][1] === 'nom_libelle_dans_parent1' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                this.nom_libelle_dans_parent1=mat[i + 1][1];
            }
        }
        for(let i in this.tableau_des_filtres){
            this.filtres[i]={};
            for(let j in this.tableau_des_filtres[i]){
                this.filtres[i][j]=this.tableau_des_filtres[i][j].défaut;
            }
        }
        if(this.fonction_liste === 'liste1'){
            let aa=sessionStorage.getItem( this.__gi1.cle_lst0 + '_' + this.moi + '_' + this.fonction_liste );
            if(aa !== null){
                let jso=JSON.parse( aa );
                for(let i in this.tableau_des_filtres[this.fonction_liste]){
                    this.filtres[this.fonction_liste][i]=jso[i]??this.tableau_des_filtres[this.fonction_liste][i].défaut;
                }
            }
            this.vv_ecran_liste_boutons_avant+='<div class="rev_bouton yy__xif" data-rev_click="m1(n1(' + this.moi + '),f1(page_creer1()))" title="création' + this.DUN_DUNE_ELEMENT_GERE + '" >' + this.__gi1.les_svg.nouveau_document + '</div>';
        }
    }
    /*
      =============================================================================================================
    */
    modifier1( mat , d , le_message_du_serveur=null ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_modifier1( mat , d , données ){
        let retour_a_la_liste='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_rev_travail_basedd'] !== null && fo1['chp_rev_travail_basedd'] !== ''){
            let obj1=this.__gi1.__rev1.rev_tm( fo1['chp_rev_travail_basedd'] );
            if(obj1.__xst !== __xsu){
                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le contenu de "rev travail" n\'est pas dans un format rev valide'} );
                this.__gi1.affiche_les_messages();
                this.__gi1.retablir_les_boutons_masques();
                try{
                    document.getElementById( 'chp_rev_travail_basedd' ).focus();
                } catch {}
                return({"__xst" : __xsu});
            }
        }
        if(fo1['chp_fournisseur_basedd'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "fournisseur" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_fournisseur_basedd' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /* conversion des données numériques début */
        fo1['chi_id_basedd']=fo1['chi_id_basedd'] === '' ? ( null ) : ( parseInt( fo1['chi_id_basedd'] , 10 ) );
        /* conversion des données numériques fin */
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(modifier1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_modification1( mat , d , le_message_du_serveur=null ){
        if(!le_message_du_serveur.__xva.hasOwnProperty( 'page_modification1' )){
            return(this.__gi1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_message_du_serveur.__xva.page_modification1.__xva[0];
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_modification' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_basedd'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_commentaire_basedd'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_edition1( 'chp_commentaire_basedd' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  id="chp_commentaire_basedd" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.chp_commentaire_basedd'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_rev_travail_basedd'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='<div>\r\n';
        o1+=this.__gi1.__fnt1.boutons_rev3( 'chp_rev_travail_basedd' );
        o1+='</div>\r\n';
        var sty='';
        if(enreg['T0.cht_initialisation_menu'] === null){
            sty=' style="height:5vh;" ';
        }
        o1+='            <textarea  data-editeur1="rev"  id="chp_rev_travail_basedd" rows="10" cols="50" ' + sty + ' autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        o1+=this.__gi1.fi2( enreg['T0.chp_rev_travail_basedd'] );
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>fournisseur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        if(enreg['T0.chp_fournisseur_basedd'] === undefined){
            o1+='        <div class="yy__0">ATTENTION, ERREUR DE SQL :  LE CHAMP n\'est pas inclus dans le SELECT</div>';
        }
        o1+='      <input  type="text" style="height: var(--t_hauteur_input1);" id="chp_fournisseur_basedd"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( enreg['T0.chp_fournisseur_basedd'] ) + '"  autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_fournisseur_basedd' );
        o1+='      <div style="display : inline-flex;flex-wrap : balance;">';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_fournisseur_basedd),valeur(valeur_constante(sqlite)))))">sqlite</div>';
        o1+='          <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_fournisseur_basedd),valeur(valeur_constante(mysql)))))">mysql</div>';
        o1+='      </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_basedd" value="' + enreg['T0.chi_id_basedd'] + '">';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_modification_zone_contenu' ).innerHTML=o1;
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'modification ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_confirmation_supprimer1( mat , d , le_message_du_serveur=null ){
        if(!le_message_du_serveur.__xva.hasOwnProperty( 'page_confirmation_supprimer1' )){
            return(this.__gi1.affiche_les_messages( {"__xst" : __xer ,"__xme" : 'cet élément n\'a pas été trouvé'} ));
        }
        let enreg=le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0];
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_suppression' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , enreg['T0.chi_id_basedd'] , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="chp_commentaire_basedd" rows="2"  cols="50" >' + this.__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_commentaire_basedd'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>rev travail</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <textarea disabled id="chp_rev_travail_basedd" rows="2"  cols="50" >' + this.__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_rev_travail_basedd'] ) + '</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>fournisseur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input disabled  type="text" id="chp_fournisseur_basedd"  size="64"   maxlength="64"  value="' + this.__gi1.fi2( le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chp_fournisseur_basedd'] ) + '"   />';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='      <input type="hidden" id="chi_id_basedd" value="' + le_message_du_serveur.__xva.page_confirmation_supprimer1.__xva[0]['T0.chi_id_basedd'] + '" />';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_suppression_zone_contenu' ).innerHTML=o1;
        this.__gi1.maj_title_htm1( 'suppression ' + this.DUN_DUNE_ELEMENT_GERE );
        if(this.__gi1.stockage_local['parametres']['__deverminage']['valeur'] > 0){
            this.__gi1.maj_hash( mat , 0 );
        }
        this.__gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_duplication1( mat , d , le_message_du_serveur ){
        this.page_creer1( mat , d , le_message_du_serveur.__xva.page_duplication1.__xva[0] );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    verifier_creer1( mat , d , données ){
        let retour_a_la_liste='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste='retour_a_la_liste()';
            }
        }
        let co1=données.__co1;
        let fo1=données.__fo1[co1];
        if(fo1['chp_fournisseur_basedd'] === ''){
            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : 'la valeur pour "fournisseur" doit être renseigné'} );
            this.__gi1.affiche_les_messages();
            this.__gi1.retablir_les_boutons_masques();
            try{
                document.getElementById( 'chp_fournisseur_basedd' ).focus();
            } catch {}
            return({"__xst" : __xsu});
        }
        /*
          tout a été vérifié
        */
        let __fo1={};
        __fo1[co1]=fo1;
        this.__gi1.envoyer_un_message_au_worker( {
                 /*  */
                "__xac" : 'pm1(m1(n1(' + this.moi + '),f1(creer1(' + retour_a_la_liste + '))))' ,
                "__xva" : {"__fo1" : __fo1 ,"__co1" : co1}
            } );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    page_creer1( mat , d , dupliquer=null ){
        this.__gi1.afficher_le_titre_des_zones( 'vv_ecran_creation' , 'entree_module' , this.DUN_DUNE_ELEMENT_GERE , null , this.moi );
        let o1='';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>commentaire</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='        <div class="yy_conteneur_txtara">';
        o1+='            <div>\r\n';
        o1+='              ' + this.__gi1.__fnt1.boutons_edition1( 'chp_commentaire_basedd' );
        o1+='            </div>\r\n';
        o1+='            <textarea  id="chp_commentaire_basedd" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_commentaire_basedd' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_commentaire_basedd'] );
        }else{
            o1+='';
        }
        o1+='</textarea>';
        o1+='        </div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        o1+='  <div class="yy_edition_champ1">';
        o1+='    <div class="yy_edition_libelle1">';
        o1+='      <span>fournisseur</span>';
        o1+='    </div>';
        o1+='    <div class="yy_edition_valeur1">';
        o1+='      <input  disabled  type="text"  size="64"   maxlength="64"  id="chp_fournisseur_basedd" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="';
        if(dupliquer && dupliquer.hasOwnProperty( 'T0.chp_fournisseur_basedd' )){
            o1+=this.__gi1.fi2( dupliquer['T0.chp_fournisseur_basedd'] );
        }else{
            o1+='sqlite';
        }
        o1+='" />';
        o1+='    <div>';
        o1+=this.__gi1.__fnt1.boutons_edition_text( 'chp_fournisseur_basedd' );
        o1+='    </div>';
        o1+='      <br />';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_fournisseur_basedd),valeur(valeur_constante(sqlite)))))">sqlite</div>';
        o1+='      <div class="rev_bouton" data-rev_click="m1(n1(__gi1),f1(maj_contenu(type_cible(valeur_constante),id(chp_fournisseur_basedd),valeur(valeur_constante(mysql)))))">mysql</div>';
        o1+='    </div>';
        o1+='  </div>';
        /*
          =====================================================================================================
        */
        let cmd='';
        cmd+='liste1(';
        for(let i in this.tableau_des_filtres[this.fonction_liste]){
            if(this.filtres[this.fonction_liste][i] !== ''){
                cmd+=i + '(\'' + this.__gi1.fi2( this.filtres[this.fonction_liste][i] ) + '\')';
            }
        }
        cmd+=')';
        let obj2=this.__gi1.__rev1.rev_tm( cmd );
        let jso=JSON.stringify( obj2.__xva );
        o1+='      <input type="hidden" id="__mat_liste_si_ok" value="' + this.__gi1.fi2( jso ) + '" />';
        document.getElementById( 'vv_ecran_creation_zone_contenu' ).innerHTML=o1;
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( 'création ' + this.DUN_DUNE_ELEMENT_GERE );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    filtre1( mat , d , le_message_du_serveur=null ){
        let a=document.getElementById( 'vv_ecran_liste_zone_contenu' );
        if(a === null){
            return(this[this.fonction_liste]( mat , d , le_message_du_serveur ));
        }
        let tt=this.zones_liste1( le_message_du_serveur );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=tt.o1;
        this.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        let lst=document.getElementById( 'vv_filtre1' ).querySelectorAll( "input" );
        this.filtres={};
        for( let i=0 ; i < lst.length ; i++ ){
            if(lst[i].id){
                this.filtres[lst[i].id]=lst[i].value;
            }
        }
        let aa=sessionStorage.getItem( this.__gi1.cle_lst0 + '_' + this.moi );
        if(aa === null){
            sessionStorage.setItem( this.__gi1.cle_lst0 + '_' + this.moi , JSON.stringify( {"filtres" : this.filtres} ) );
        }else{
            let jso=JSON.parse( aa );
            jso['filtres']=this.filtres;
            sessionStorage.setItem( this.__gi1.cle_lst0 + '_' + this.moi , JSON.stringify( jso ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_filtres1( mat , d , le_message_du_serveur ){
        let l01=mat.length;
        for(let nom_champ_filtre in this.tableau_des_filtres[this.fonction_liste]){
            let trouvé=false;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(nom_champ_filtre === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    this.filtres[this.fonction_liste][nom_champ_filtre]=mat[i + 1][1].replace( /\\'/g , '\'' ).replace( /\\\\/g , '\\' );
                    trouvé=true;
                    break;
                }
            }
            if(trouvé === false){
                this.filtres[this.fonction_liste][nom_champ_filtre]='';
            }
        }
        let cle_session=this.__gi1.cle_lst0 + '_' + this.moi + '_' + this.fonction_liste;
        sessionStorage.setItem( cle_session , JSON.stringify( this.filtres[this.fonction_liste] ) );
        if(le_message_du_serveur.__xva.hasOwnProperty( '__fo1' )
               && le_message_du_serveur.__xva.__fo1 !== null
               && le_message_du_serveur.__xva.__fo1.hasOwnProperty( 'origine' )
               && le_message_du_serveur.__xva.__fo1.origine === 'aller_a_la_page'
        ){
            document.getElementById( '__num_page' ).value=__num_page;
            return;
        }
        if(document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML === ''){
            let o1='';
            let nom_zone_non_vide='';
            o1+='<div class="yy_filtre_liste1" id="' + this.fonction_liste + '">';
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                if(this.tableau_des_filtres[this.fonction_liste][i].masqué === false){
                    o1+='    <div>';
                    o1+='        <div><span>' + this.tableau_des_filtres[this.fonction_liste][i].nom + '</span></div>';
                    let bck='background:yellow;';
                    if(this.filtres[this.fonction_liste][i] === ''){
                        bck='';
                    }else{
                        if(nom_zone_non_vide === ''){
                            nom_zone_non_vide=i;
                        }
                    }
                    o1+='        <div>\r\n';
                    o1+='          <input ';
                    o1+='           type="text" id="' + i + '" ';
                    o1+='           value="' + this.__gi1.fi1( this.filtres[this.fonction_liste][i] ) + '" ';
                    o1+='           size="' + this.tableau_des_filtres[this.fonction_liste][i].taille + '" ';
                    o1+='           maxlength="64" ';
                    o1+='           autocapitalize="off" ';
                    o1+='           style="' + bck + '" />';
                    if(this.filtres[this.fonction_liste][i] && this.filtres[this.fonction_liste][i] !== ''){
                        o1+='            <div class="rev_bouton yy__4" data-rev_click="m1(n1(__fnt1),f1(raz_zone_et_select1(id(' + i + '))))">x</div>';
                    }
                    o1+='        </div>\r\n';
                    o1+='    </div>\r\n';
                }
            }
            o1+='   <div>';
            o1+='     <div>';
            o1+='       <span>&nbsp;</span>';
            o1+='     </div>';
            o1+='     <div>';
            o1+='        <div class="rev_bouton yy_bouton_loupe" data-rev_click="';
            o1+='fo1(co1(' + this.fonction_liste + '),pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(__num_page(0))))))';
            o1+='"';
            o1+='        >🔎</div>';
            o1+='     </div>';
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                if(this.tableau_des_filtres[this.fonction_liste][i].masqué === true){
                    o1+='     <input type="hidden" id="' + i + '" value="' + this.filtres[this.fonction_liste][i] + '" />';
                }
            }
            o1+='   </div>';
            o1+='</div>';
            document.getElementById( 'vv_ecran_liste_zone_filtre' ).innerHTML=o1;
            if(nom_zone_non_vide !== ''){
                document.getElementById( nom_zone_non_vide ).select();
            }
            let lst=document.getElementById( 'vv_ecran_liste_zone_filtre' ).querySelectorAll( 'input' );
            for( let i=0 ; i < lst.length ; i++ ){
                lst[i].addEventListener( 'keyup' , ( e ) => {
                        if(e.keyCode === 13){
                            this.aller_a_la_page( null , null , '__num_page' , 0 );
                            console.log( e , this );
                        }} );
            }
        }else{
            for(let i in this.tableau_des_filtres[this.fonction_liste]){
                document.getElementById( i ).value=this.filtres[this.fonction_liste][i];
                if(this.filtres[this.fonction_liste][i] !== ''){
                    document.getElementById( i ).style.background='yellow';
                }else{
                    document.getElementById( i ).style.background='';
                }
            }
        }
        this.__gi1.delai_selectionner_champ_filtre();
    }
    /*
      =============================================================================================================
    */
    supprimer1( mat , d , le_message_du_serveur ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    creer1( mat , d , le_message_du_serveur ){
        /* redirection vers modification */
        if(le_message_du_serveur && le_message_du_serveur.__xva.hasOwnProperty( 'page_modification1' )){
            this.page_modification1( mat , d , le_message_du_serveur );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    aller_a_la_page( mat , d , ref_zone=null , num_page=null ){
        return(this.__gi1.aller_a_la_page( mat , d , this.moi , this.fonction_liste , this.filtres , ref_zone , num_page ));
    }
    /*
      =============================================================================================================
    */
    sous_liste1( mat , d , le_message_du_serveur=null ){
        this.fonction_liste='sous_liste1';
        if(le_message_du_serveur == null || !le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            /* F5 */
            debugger;
            /* this.#init1(null,'liste1'); */
            return({"__xst" : __xsu});
        }
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__gi1.initialisation_des_zones( this.moi );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){
        }else{
            if(initialisation_fait === false){
                this.__gi1.initialisation_des_zones( this.moi );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__gi1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_message_du_serveur );
        this.__gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , '' , this.fonction_liste );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_sous_liste1( le_message_du_serveur );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    liste1( mat , d , le_message_du_serveur=null ){
        if(le_message_du_serveur == null || !le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            /* F5 */
            debugger;
            /* this.#init1(null,'liste1'); */
            return({"__xst" : __xsu});
        }
        let o1='';
        let initialisation_fait=false;
        let a=document.getElementById( 'vv_titre_de_la_page' );
        if(a === null){
            this.__gi1.initialisation_des_zones( this.moi );
            initialisation_fait=true;
        }
        a=document.getElementById( 'vv_titre_de_la_page' );
        if(a.innerHTML === this.LISTE_DES_ELEMENTS_GERES){
        }else{
            if(initialisation_fait === false){
                this.__gi1.initialisation_des_zones( this.moi );
                a=document.getElementById( 'vv_titre_de_la_page' );
            }
            a.innerHTML=this.LISTE_DES_ELEMENTS_GERES;
            this.__gi1.afficher_les_zones( 'vv_ecran_liste' );
        }
        this.zones_filtres1( mat , d , le_message_du_serveur );
        this.__gi1.vv_ecran_liste_zones_navigation1( le_message_du_serveur , this.vv_ecran_liste_boutons_avant , this.fonction_liste );
        document.getElementById( 'vv_ecran_liste_zone_contenu' ).innerHTML=this.zones_liste1( le_message_du_serveur );
        this.__gi1.ajoute_les_evenements_aux_boutons();
        this.__gi1.maj_hash( mat , 0 );
        this.__gi1.maj_title_htm1( this.LISTE_DES_ELEMENTS_GERES );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        this.__gi1.recupere_liste_initiale( mat , d , this );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    zones_sous_liste1( le_message_du_serveur ){
        let o1='';
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            let lst='';
            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){
                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];
                lst+='<tr>';
                lst+='<td style="text-wrap-mode: nowrap;">';
                let parametres='';
                parametres+='m1(n1(__gi1),f1(choisir_dans_sous_fenetre1(';
                parametres+=' nom_champ_dans_parent1(' + this.nom_champ_dans_parent1 + ')';
                parametres+=' nom_libelle_dans_parent1(' + this.nom_libelle_dans_parent1 + ')';
                parametres+=' id1(' + elem['T0.chi_id_basedd'] + ')';
                let libelle1='';
                libelle1+='(' + elem['T0.chi_id_basedd'] + ') ';
                parametres+=' libelle1(\'' + this.__gi1.fi1( libelle1 ) + '\')';
                parametres+=')))';
                lst+='  <div class="rev_bouton yy__2" data-rev_click="' + parametres + '">=&gt;</div>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_basedd'] !== null){
                    lst+=elem['T0.chi_id_basedd'];
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__gi1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
    zones_liste1( le_message_du_serveur ){
        let o1='';
        if(le_message_du_serveur !== null && le_message_du_serveur.__xva.hasOwnProperty( this.fonction_liste )){
            let lst='';
            for(let i in le_message_du_serveur.__xva[this.fonction_liste].__xva){
                let elem=le_message_du_serveur.__xva[this.fonction_liste].__xva[i];
                lst+='<tr>';
                lst+='<td>';
                lst+='<div style="display:inline-flex;">';
                /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
                if(elem['T0.chi_id_basedd'] <= 1){
                    lst+='<div class="rev_b_svg yy__2 yy__2_inactif">' + this.__gi1.les_svg.poubelle + '</div>';
                }else{
                    lst+='<div class="rev_b_svg yy__2" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + '),f1(page_confirmation_supprimer1(chi_id_basedd(' + elem['T0.chi_id_basedd'] + ')))))';
                    lst+='">' + this.__gi1.les_svg.poubelle + '</div>';
                }
                lst+='<div class="rev_b_svg yy__3" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_basedd(' + elem['T0.chi_id_basedd'] + ')))))">' + this.__gi1.les_svg.editer + '</div>';
                lst+='<div class="rev_b_svg yy__4" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(page_duplication1(chi_id_basedd(' + elem['T0.chi_id_basedd'] + ')))))">' + this.__gi1.les_svg.dupliquer + '</div>';
                lst+='<div class="rev_b_svg" data-rev_click="pm1(m1(n1(' + this.moi + '),f1(dump_de_la_base(chi_id_basedd(' + elem['T0.chi_id_basedd'] + ')))))" title="faire un dump de la base">' + this.__gi1.les_svg.disquette + '</div>';
                lst+='<div class="rev_b_svg yy__3" data-rev_click="m1(n1(' + this.moi + '),f1(editer_les_schemas(les_bases_a_editer(\'' + elem['T0.chi_id_basedd'] + '\'))))">' + this.__gi1.les_svg.bdd + '</div>';
                if(le_message_du_serveur._CA_ === 1 && le_message_du_serveur.chi_id_projet === 1){
                }else{
                    lst+='<div class="rev_bouton" data-rev_click="';
                    lst+='pm1(m1(n1(' + this.moi + ')f1(enregistrer_la_matrice_dans_la_table_rev(chi_id_basedd(' + elem['T0.chi_id_basedd'] + ')))))';
                    lst+='" title="enregistrer la matrice dans la table rev">rev()</div>';
                }
                lst+='</tdiv>';
                lst+='</td>';
                /*
                */
                lst+='<td style="text-align:center;">';
                if(elem['T0.chi_id_basedd'] !== null){
                    lst+=elem['T0.chi_id_basedd'];
                }
                lst+='</td>';
                /*
                */
                lst+='<td style="max-width:360px;overflow:hidden;">';
                if(elem['T0.chp_commentaire_basedd'] !== null){
                    lst+=this.__gi1.fi2( elem['T0.chp_commentaire_basedd'].substr( 0 , 200 ) );
                }
                lst+='</td>';
                lst+='</tr>';
            }
            if(lst !== ''){
                o1+='<div class="yy_conteneur_table">';
                o1+='<table border="1">';
                o1+='<tr>';
                o1+='<th>action</th>';
                o1+='<th>id</th>';
                o1+='<th style="max-width:360px;">commentaire</th>';
                o1+='</tr>';
                o1+=lst;
                o1+='</table>';
                o1+='</div>';
            }else{
                o1+=this.__gi1.la_liste_est_vide();
            }
        }
        return o1;
    }
    /*
      =============================================================================================================
    */
}
export{bdds1 as bdds1};