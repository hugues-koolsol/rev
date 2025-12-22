class ecran_rev_vers_matrice1{
    /*
      =============================================================================================================
    */
    #global_enteteTableau=[
        ['id','id',0],
        ['val','valeur',1],
        ['typ','type',2],
        ['niv','niveau',3],
        ['coQ','constante quotée(0,1\',2`,3",4/)',4],
        ['pre','position du premier caractère',5],
        ['der','position du dernier caractère',6],
        ['pId','Id du parent',7],
        ['nbE','nombre d\'enfants',8],
        ['nuE','numéro enfants',9],
        ['pro','profondeur',10],
        ['pop','position ouverture parenthese',11],
        ['efs','enfant suivant',12],
        ['com','commentaire',13]
    ];
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
      =============================================================================================================
      =============================================================================================================
      fonction qui produit un tableau html de  la
      liste des caractères du source du programme
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
    */
    construit_un_html_du_tableau_des_caracteres2( objTableau ){
        let numeroLigne=0;
        let debut=0;
        let i=0;
        let j=0;
        let l01=0;
        let tmps='';
        let tab=[];
        let out='';
        let nouvelle_ligne=true;
        let numero_de_ligne=0;
        let indice_nouvelle_ligne=0;
        out+='<table class="yy_tableau_catacteres">';
        tab=objTableau.__xva;
        /*
          première case du tableau = numéro de ligne
        */
        /* boucle principale */
        l01=tab.length;
        for( i=0 ; i < l01 ; i++ ){
            if(nouvelle_ligne === true){
                indice_nouvelle_ligne=i;
                out+='\n\n<tr><td>';
                out+=numero_de_ligne++;
                out+='</td>';
            }
            /*
              =============================================================================================
              ecriture du caractère DEBUT
              =============================================================================================
            */
            tmps=tab[i][0].codePointAt( 0 );
            out+='<td title="' + tmps + '">';
            out+=tab[i][0].replace( '\n' , '\\n' ).replace( '\r' , '\\r' );
            out+='</td>';
            /*
              =============================================================================================
              ecriture du caractère FIN
              =============================================================================================
            */
            if(tab[i][0] === '\n'){
                nouvelle_ligne=true;
                /* nouvelle ligne */
                out+='\n<tr><td></td>';
                for( j=indice_nouvelle_ligne ; j <= i ; j++ ){
                    if(tab[j][1] === 1){
                        out+='<td class="yy_td2">' + j + '</td>';
                    }else{
                        out+='<td class="yy_td4">' + j + '</td>';
                    }
                }
                out+='</tr>';
                out+='\n<tr><td></td>';
                for( j=indice_nouvelle_ligne ; j <= i ; j++ ){
                    if(tab[j][1] === 1){
                        out+='<td class="yy_td2">' + tab[j][2] + '</td>';
                    }else{
                        out+='<td class="yy_td4">' + tab[j][2] + '</td>';
                    }
                }
                out+='</tr>';
            }else{
                nouvelle_ligne=false;
            }
        }
        out+='</tr>\n<tr><td></td>';
        for( j=indice_nouvelle_ligne ; j < l01 ; j++ ){
            if(tab[j][1] == 1){
                out+='<td class="yy_td2">' + j + '</td>';
            }else{
                out+='<td class="yy_td4">' + j + '</td>';
            }
        }
        out+='</tr>';
        out+='\n<tr><td></td>';
        for( j=indice_nouvelle_ligne ; j < l01 ; j++ ){
            if(tab[j][1] === 1){
                out+='<td class="yy_td2">' + tab[j][2] + '</td>';
            }else{
                out+='<td class="yy_td4">' + tab[j][2] + '</td>';
            }
        }
        out+='</tr>';
        out+='</table>';
        return out;
    }
    /*
      =============================================================================================================
    */
    zone_rev_vers_zone_tableau2( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                let tt=__gi1.__rev1.txt_en_tableau( t1.value );
                t2.innerHTML=this.construit_un_html_du_tableau_des_caracteres2( tt );
                t2.style.display='';
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    sauvegarder_contenu_en_localstorage( nom_de_la_zone , valeur ){
        if(!__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )){
            __gi1.stockage_local['zones_sauvegardées']={};
        }
        __gi1.stockage_local['zones_sauvegardées'][nom_de_la_zone]=valeur;
        localStorage.setItem( __gi1.cle_lst0 , JSON.stringify( __gi1.stockage_local ) );
    }
    /*
      =============================================================================================================
    */
    construit_tableau_html_de_le_matrice_rev2( matriceFonction ){
        /*  */
        let i=0;
        let j=0;
        let l01=0;
        let l02=0;
        let temp='';
        const r6=new RegExp( "\\\\'" , 'g' );
        let out='';
        out+='<table class="yytableauMatrice1">';
        out+='<tr>';
        l01=this.#global_enteteTableau.length;
        for( i=0 ; i < l01 ; i++ ){
            out+='<th title="' + this.#global_enteteTableau[i][1] + '(' + i + ')' + '">';
            out+=i + this.#global_enteteTableau[i][0];
            out+='</th>';
            /*  */
        }
        out+='</tr>';
        l01=matriceFonction.__xva.length;
        for( i=0 ; i < l01 ; i++ ){
            out+='<tr>';
            l02=matriceFonction.__xva[i].length;
            for( j=0 ; j < l02 ; j++ ){
                if(j == 1 || j == 13){
                    /* Pour la valeur ou les commentaires */
                    temp=matriceFonction.__xva[i][j];
                    if(matriceFonction.__xva[i][4] === 3){
                        temp=temp.replace( r6 , "'" );
                    }
                    out+='<td class="yy_col_val">';
                    out+=temp.replace( /&/g , '&amp;' ).replace( /</g , '&lt;' ).replace( />/g , '&gt;' ).replace( / /g , '░' ).replace( /\n/g , '§' );
                }else if(j == 4){
                    if(matriceFonction.__xva[i][j] === 2){
                        out+='<td style="background:ligntgrey;">';
                    }else{
                        out+='<td>';
                    }
                    out+=matriceFonction.__xva[i][j];
                }else{
                    out+='<td>';
                    out+=matriceFonction.__xva[i][j];
                }
                out+='</td>';
            }
            out+='</tr>';
        }
        out+='</table>';
        return out;
    }
    /*
      =============================================================================================================
    */
    zone_rev_vers_zone_matrice2( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            __gi1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            this.sauvegarder_contenu_en_localstorage( 'ecran_rev_vers_matrice1' , t1.value );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                let tt=__gi1.__rev1.rev_tcm( t1.value );
                if(tt.__xst === __xsu){
                    t2.innerHTML=this.construit_tableau_html_de_le_matrice_rev2( tt );
                    t2.style.display='';
                    return({"__xst" : __xsu});
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test2( mat , i ){
        let t=`f(0,'1',\`2\`,"3",/4/)`;
        document.getElementById( 'vv_txtarea_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    donnees_de_test1( mat , i ){
        let t=`#(début aaaa  debut),a(#(test , 👍,𤭢,àà),b(xx(y(#(
                       dedans
                       commentaire bloc
                     ),t,v),#(aa),xx(#(
                       dedans
                       commentaire bloc
                     )),#( bb),5,#(
                    cc
                  )),#(comment 1),y(' dd&nbsp;',#(
                    bla
                    blu
                  ),ee,2,#( @ )),#( comment 2 ),a(b())),#(Iñtërnâtiônàà̀lizætiøn ☃ 💩 ❤ 😁 👍),f(g),#(👍😁💥💪👎☀🌞🟥🟩"àà")),a(p(/ " \\' \\" \\n \\r \\\\r \\\\n \\\\\\\\ /g),p(" \\\\ \\" \\\\\\" \\n \\r '"),p(' \\\\ \\' \\n \\r "  ')),#(
           p('\\\\\\' \\' \\r \\n ')
           
           
           a( p(/ " \\' \\" \\n \\r \\\\r \\\\n \\\\\\\\ /g) , p(" \\\\ \\" \\n \\r '") , p(' \\\\ \\n \\r "  ') ),
           
           appelf(nomf(f),p(/\\\\\\\\n/g),p('\\\\n'),p('\\\\r'))
           affecte(sql , "\\r\\n \\" \\\\\\\\
           select * from toto
           "),
           
           affecte(sql , '\\n \\r \\\\r \\\\n 
           select * from toto
           '),
           
         )    
`;
        document.getElementById( 'vv_txtarea_rev1' ).value=t;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    ecran_matrice( mat , d ){
        /* mat , d */
        let t='';
        t+='<h1>convertion de rev vers matrice</h1>';
        t+='<div class="yy_conteneur_txtara">';
        t+='  <div>';
        /*  */
        t+=__gi1.__fnt1.boutons_rev3( 'vv_txtarea_rev1' );
        /*  */
        t+='    <div style="float:right;" class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_matrice1),f1(donnees_de_test1()))" title="charger les données de test" >test1</div>    ';
        t+='    <div style="float:right;" class="rev_bouton" data-rev_click="m1(n1(ecran_rev_vers_matrice1),f1(donnees_de_test2()))" title="charger les données de test2" >test2</div>';
        t+='  </div>  ';
        t+='  <textarea id="vv_txtarea_rev1" data-editeur1="rev" rows="10" ,="" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false" >';
        if(__gi1.stockage_local.hasOwnProperty( 'zones_sauvegardées' )
               && __gi1.stockage_local['zones_sauvegardées'].hasOwnProperty( 'ecran_rev_vers_matrice1' )
        ){
            t+=__gi1.stockage_local['zones_sauvegardées']['ecran_rev_vers_matrice1'];
        }
        t+='</textarea>';
        t+='</div>';
        t+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(ecran_rev_vers_matrice1),f1(zone_rev_vers_zone_matrice2(zone_source(vv_txtarea_rev1),zone_resultat(vv_matrice1))))" title="transformer en matrice" >rev-&gt;mat</div>';
        t+='<div class="rev_bouton yy__1" data-rev_click="m1(n1(__interface1),f1(masquer_ou_afficher(zone_source(vv_matrice1))))" title="masquer ou afficher" >masquer/afficher</div>';
        t+='<div class="rev_bouton yy__3" data-rev_click="m1(n1(ecran_rev_vers_matrice1),f1(zone_rev_vers_zone_tableau2(zone_source(vv_txtarea_rev1),zone_resultat(vv_tableau1))))" title="transformer en tableau" >rev-&gt;tab</div>';
        t+='<div class="rev_bouton yy__3" data-rev_click="m1(n1(__interface1),f1(masquer_ou_afficher(zone_source(vv_tableau1))))" title="masquer ou afficher" >masquer/afficher</div>';
        t+='<div id="vv_matrice1" style="overflow-x:scroll;border:var(--t_border) lightgreen inset;transform: translate3d(0, 0, 0);"></div>';
        t+='<div id="vv_tableau1" style="overflow-x:scroll;border:var(--t_border) blue inset;transform: translate3d(0, 0, 0);"></div>';
        __gi1.maj_contenu_principal( t );
        __gi1.maj_hash( mat , 0 );
        return({"__xst" : __xsu});
    }
}
export{ecran_rev_vers_matrice1 as ecran_rev_vers_matrice1};