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
            let obj=this.__ig1.__fnts_c_et_s.test_heure_nulle_ou_comprise_entre( '00_00_00' , '23_59_59' , ref_champ_heure.value , nom_du_champ );
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
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + this.__ig1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + this.__ig1.les_svg.retrecir + '</div>\r\n';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_edition_text( nom_de_la_zone ){
        /* let svg_copier_la_selection='<svg xmlns="http://www.w3.org/2000/svg" class="yy_svg_el"viewBox="0 0  100 100"><rect x="7" y="6" width="0" height="0" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></rect><path d=" M 18 10 C 24 10 31 10 38 10 C 40 2 56 2 59 10 C 65 10 72 10 79 10 C 82 10 84 13 84 16 V 89 C 84 92 82 95 79 95 H 18 C 15 95 13 92 13 89 V 16 c 0 -3 2 -6 5 -6 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:white;stroke-width:4;"></path><rect x="24" y="25" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="30" x2="68" y2="30" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><rect x="24" y="43" width="48" height="11" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><rect x="24" y="61" width="24" height="10" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:fuchsia;fill:fuchsia;stroke-width:4;"></rect><line x1="27" y1="48" x2="68" y2="48" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="66" x2="68" y2="66" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><line x1="27" y1="83" x2="68" y2="83" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:aqua;fill:transparent;stroke-width:4;"></line><path d=" M 0 0 H 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:transparent;stroke-width:0.1;"></path></svg>'; */
        let o1='';
        o1+=' <div class="rev_b_svg yy__1 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + this.__ig1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0 rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + this.__ig1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg yy__xsi_2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + this.__ig1.les_svg.ensemble_vide + '</div>\r\n';
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
        o1+=' <div class="rev_b_svg yy__1  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu" >' + this.__ig1.les_svg.copier_tout + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__3  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(copier_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="copier le contenu sélectionné">' + this.__ig1.les_svg.copier_la_selection + '</div>';
        o1+=' <div class="rev_b_svg yy__0  rev_b_svg" data-rev_click="m1(n1(' + this.moi + '),f1(coller_le_contenu_sélectionné1(zone_source(' + nom_de_la_zone + '))))" title="coller le contenu sélectionné">' + this.__ig1.les_svg.scotcher + '</div>';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(agrandir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="agrandir la zone" >' + this.__ig1.les_svg.agrandir + '</div>\r\n';
        o1+=' <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(retrecir_la_zone(zone_source(' + nom_de_la_zone + '))))" title="retrecir la zone" >' + this.__ig1.les_svg.retrecir + '</div>\r\n';
        o1+=' <div class="rev_b_svg yy__0 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="vider la zone" >' + this.__ig1.les_svg.ensemble_vide + '</div>\r\n';
        o1+=' <div class="rev_bouton yy__1 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(remplacer_dans_la_zone(zone_source(' + nom_de_la_zone + '))))" title="remplacer un texte par un autre dans la zone" >remplacer</div>\r\n';
        o1+=' <div class="rev_bouton yy__2 rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(effacer_la_selection(zone_source(' + nom_de_la_zone + '))))" title="effacer la sélection">' + this.__ig1.les_svg.clav_supp + '</div>\r\n';
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
    boutons_date1( nom_de_la_zone ){
        let o1='';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(maj_date1(nom_du_champ(' + nom_de_la_zone + '))))">' + this.__ig1.les_svg.calendrier + '</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt yy__1" data-rev_click="m1(n1(' + this.moi + '),f1(jour_courant1(nom_du_champ(' + nom_de_la_zone + '))))" title="jour courant">JC</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt yy__0" data-rev_click="m1(n1(' + this.moi + '),f1(vider_la_zone(zone_source(' + nom_de_la_zone + '))))" title="raz">' + this.__ig1.les_svg.ensemble_vide + '</div>';
        return o1;
    }
    /*
      =============================================================================================================
    */
    boutons_heure1( nom_de_la_zone ){
        let o1='';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(' + this.moi + '),f1(popup_horloge1(nom_du_champ(' + nom_de_la_zone + '))))">' + this.__ig1.les_svg.calendrier + '</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'08:00:00\')))))">08</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'10:00:00\')))))">10</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'12:00:00\')))))">12</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'14:00:00\')))))">14</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'16:00:00\')))))">16</div>';
        o1+='      <div class="rev_b_svg rev_b_ctxt" data-rev_click="m1(n1(__ig1),f1(maj_contenu(type_cible(valeur_constante),id(' + nom_de_la_zone + '),valeur(valeur_constante(\'18:00:00\')))))">18</div>';
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
        let font_size_fixe='14px';
        let largeur_des_champs_input='3rem';
        let style_des_tds0='border:1px black solid;text-align:center;font-size:' + font_size_fixe + ';';
        let style_des_tds1=' style="border:1px black solid;"';
        let style_des_tds2=' style="border:1px green solid;height:40px;"';
        let le_style_des_tables1=' style="border:1px black solid;border-collapse:collapse;min-width:80vw;"';
        let t='';
        t+='<h1>paramètres et aides</h1>';
        for(let i in this.__ig1.reference_stockage_local['aspect']){
            t+='<div style="border:1px red solid;margin:1px;padding:1px;overflow-x:scroll;">';
            t+='';
            t+='<table ' + le_style_des_tables1 + ' ><tr>';
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
            t+='</tr>';
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
        t+='<table ' + le_style_des_tables1 + '>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>ecran tactile</td>';
        t+='    <td ' + style_des_tds1 + '><b>' + JSON.stringify( ecran_tactile ) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>safari mobile</td>';
        t+='    <td ' + style_des_tds1 + '><b>' + JSON.stringify( navigator.userAgent.match( /(iPod|iPhone|iPad)/ ) && navigator.userAgent.match( /AppleWebKit/ ) ) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>taille de l\'écran</td>';
        t+='    <td ' + style_des_tds1 + '><b> largeur=' + window.innerWidth + ' , hauteur=' + window.innerHeight + '</b></td>';
        t+='  </tr>';
        let genre_safari=this.#le_userAgent( /safari/i ) && !this.#le_userAgent( /chrome/i ) && !this.#le_userAgent( /android/i );
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>genre safari</td>';
        t+='    <td ' + style_des_tds1 + '><b>' + genre_safari + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>ipad ou iphone</td>';
        t+='    <td ' + style_des_tds1 + '><b>' + (genre_safari && navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>crios</td>';
        t+='    <td ' + style_des_tds1 + '><b>' + (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && ecran_tactile && this.#le_userAgent( /crios/i )) + '</b></td>';
        t+='  </tr>';
        t+='  <tr>';
        t+='    <td ' + style_des_tds1 + '>navigator.userAgent</td>';
        t+='    <td ' + style_des_tds1 + '><b>' + JSON.stringify( navigator.userAgent ) + '</b></td>';
        t+='  </tr>';
        t+='</table>';
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
    /*
      =============================================================================================================
    */
}
export{__fnt1 as __fnt1};