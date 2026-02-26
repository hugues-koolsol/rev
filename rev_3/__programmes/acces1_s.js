const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*
  =====================================================================================================================
*/
class acces1{
    /* function construit_menu_vjs2 */
    construit_menu_vjs2( id_interne_parent , le_tableau_du_menu , niveau , donnees_retournees , parent_est_select=false ){
        let contenu_menu1='';
        for(let k1 in le_tableau_du_menu){
            let v1=le_tableau_du_menu[k1];
            if(v1['id_interne_parent'] === id_interne_parent){
                if(v1['contient_des_enfants'] === 0){
                    if(parent_est_select === true){
                        let bb='';
                        if(v1['attributs'].hasOwnProperty( 'data-chp_nom_source' )
                               && v1['attributs']['data-chp_nom_source'].indexOf( '_c.js' ) >= 0
                        ){
                            let la_classe='rev_bouton';
                            if(v1['contenu'].indexOf( '<svg' ) >= 0){
                                la_classe='rev_b_svg';
                            }
                            bb+='<li>';
                            bb+='<div ';
                            bb+=' id="menu_' + v1['id_interne'] + '"  ';
                            bb+=' data-id_auto="' + v1['attributs']['data-chx_autorisation_menu'] + '"';
                            bb+=' data-id_menu="' + v1['attributs']['data-chi_id_menu'] + '"';
                            bb+=' class="' + la_classe + '" ';
                            bb+=' title="' + v1['attributs']['data-chp_titre_menu'] + '"';
                            bb+=' data-rev_click="';
                            bb+='m1(n1(' + v1['attributs']['data-chp_nom_source'].replace( '_c.js' , '' ) + ')';
                            bb+=',f1(' + v1['attributs']['data-chp_methode_menu'];
                            if(v1['attributs']['data-cht_initialisation_menu'] === 'null'){
                                bb+='()';
                            }else{
                                bb+='(';
                                bb+=v1['attributs']['data-cht_initialisation_menu'];
                                bb+=')';
                            }
                            bb+='))';
                            bb+='"';
                            bb+='>' + v1['contenu'].replace( 'height:25px;width:25px;' , '' ) + '</div></li>';
                            /* let xx=var_export(bb,true); */
                            let xx='`' + bb.replace( /`/ , '\\`' ) + '`';
                            if(xx.substr( 0 , 1 ) === "\r"){
                                xx=xx.substr( 1 );
                            }
                            if(xx.substr( 0 , 1 ) === "\n"){
                                xx=xx.substr( 1 );
                            }
                            if(v1['attributs']['data-cht_condition_menu'] === ''){
                                /* contenu_menu1 += 'le_sous_menu1_' + (niveau - 1) + '+=' + xx + ';' + '\r\n'; */
                                contenu_menu1+='les_sous_menus[' + (niveau - 1) + ']+=' + xx + ';';
                            }else{
                                /*
                                  contenu_menu1 += '/*' + '\r\n';
                                  contenu_menu1 += '  a ==================' + '\r\n';
                                  contenu_menu1 += '* /' + '\r\n';
                                */
                                let cht_condition_js_menu=v1['attributs']['data-cht_condition_js_menu'];
                                if(cht_condition_js_menu !== null && cht_condition_js_menu.trim() !== '' && cht_condition_js_menu !== 'null'){
                                    if(cht_condition_js_menu.slice( -1 ) === ";"){
                                        cht_condition_js_menu=cht_condition_js_menu.substr( 0 , cht_condition_js_menu.length - 1 );
                                    }
                                    if(cht_condition_js_menu.substr( 0 , 1 ) === "\r"){
                                        cht_condition_js_menu=cht_condition_js_menu.substr( 1 );
                                    }
                                    if(cht_condition_js_menu.substr( 0 , 1 ) === "\n"){
                                        cht_condition_js_menu=cht_condition_js_menu.substr( 1 );
                                    }
                                    contenu_menu1+='        if(' + cht_condition_js_menu + '){' + '\r\n';
                                    /* repere0 */
                                    /* contenu_menu1 += '            le_sous_menu1_' + (niveau - 1) + '+=' + xx + ';' + '\r\n'; */
                                    contenu_menu1+='            les_sous_menus[' + (niveau - 1) + ']+=' + xx + ';' + '\r\n';
                                    contenu_menu1+='        }' + '\r\n';
                                }else{
                                    /* contenu_menu1 += '        le_sous_menu1_' + (niveau - 1) + '+=' + xx + ';' + '\r\n'; */
                                    contenu_menu1+='        les_sous_menus[' + (niveau - 1) + ']+=' + xx + ';' + '\r\n';
                                }
                            }
                        }else{
                            if(v1['separateur'] === '1' || v1['separateur'] === 1){
                                /* this.__gi1.ma_trace1('v1=',v1); */
                                let bb='';
                                bb+='<li data-separateur="' + v1['separateur'] + '">' + v1['contenu'].replace( 'class="rev_bouton"' , '' ).replace( 'height:25px;width:25px;' , '' ) + '</li>';
                                let xx='`' + bb.replace( /`/g , '\\`' ) + '`';
                                if(xx.substr( 0 , 1 ) === "\r"){
                                    xx=xx.substr( 1 );
                                }
                                if(xx.substr( 0 , 1 ) === "\n"){
                                    xx=xx.substr( 1 );
                                }
                                let nom_de_la_variable='les_menu1';
                                if(niveau >= 1){
                                    nom_de_la_variable='les_sous_menus[' + (niveau - 1) + ']';
                                }
                                contenu_menu1+='        ' + nom_de_la_variable + '+=' + xx + ';' + '\r\n';
                            }
                        }
                    }else{
                        if(v1['contenu'] === 'aaa'){
                            this.__gi1.ma_trace1( 'v1=' , v1 );
                        }
                        if(v1['attributs'].hasOwnProperty( 'data-liste_des_menus' ) && v1['attributs']['data-liste_des_menus'] === '1'){
                            if(v1['separateur'] === '1' || v1['separateur'] === 1){
                                /* c'est un séparateur */
                                let bb='';
                                bb+='<li data-separateur="' + v1['separateur'] + '">' + v1['contenu'].replace( 'class="rev_bouton"' , '' ).replace( 'height:25px;width:25px;' , '' ) + '</li>';
                                let xx='`' + bb.replace( /`/g , '\\`' ) + '`';
                                if(xx.substr( 0 , 1 ) === "\r"){
                                    xx=xx.substr( 1 );
                                }
                                if(xx.substr( 0 , 1 ) === "\n"){
                                    xx=xx.substr( 1 );
                                }
                                let nom_de_la_variable='les_menu1';
                                if(niveau >= 1){
                                    nom_de_la_variable='les_sous_menus[' + (niveau - 1) + ']';
                                    /* 'le_sous_menu1_' + (niveau - 1); */
                                }
                                contenu_menu1+='        ' + nom_de_la_variable + '+=' + xx + ';' + '\r\n';
                            }
                            /*
                              c'est une branche qui n'a pas d'enfants
                            */
                        }else{
                            if(v1['attributs'].hasOwnProperty( 'data-chp_nom_source' ) && v1['attributs']['data-chp_nom_source'].indexOf( '.js' ) >= 0){
                                let la_classe='rev_bouton';
                                if(v1['contenu'].indexOf( '<svg' ) >= 0){
                                    la_classe='rev_b_svg';
                                }
                                let bb='';
                                bb+='<li';
                                if(v1['separateur'] === '1'){
                                    bb+=' data-separateur="' + v1['separateur'] + '"';
                                }
                                bb+='><div id="menu_' + v1['id_interne'] + '"';
                                bb+=' data-id_auto="' + v1['attributs']['data-chx_autorisation_menu'] + '"';
                                bb+=' data-id_menu="' + v1['attributs']['data-chi_id_menu'] + '"';
                                if(v1['separateur'] === '1'){
                                    bb+=' data-separateur="' + v1['separateur'] + '"';
                                }
                                bb+=' class="' + la_classe + '"';
                                bb+=' data-rev_click="';
                                bb+='m1(n1(' + v1['attributs']['data-chp_nom_source'].replace( '_c.js' , '' ) + ')';
                                bb+=',f1(' + v1['attributs']['data-chp_methode_menu'];
                                if(v1['attributs']['data-cht_initialisation_menu'] === 'null'){
                                    bb+='()';
                                }else{
                                    bb+='(';
                                    bb+=v1['attributs']['data-cht_initialisation_menu'];
                                    bb+=')';
                                }
                                bb+='))';
                                bb+='"';
                                bb+=' title="' + v1['attributs']['data-chp_titre_menu'] + '"';
                                bb+='>' + v1['contenu'].replace( 'class="rev_bouton"' , '' ).replace( 'height:25px;width:25px;' , '' ) + '</div></li>';
                                let xx='`' + bb.replace( /`/g , '\\`' ) + '`';
                                if(xx.substr( 0 , 1 ) === "\r"){
                                    xx=xx.substr( 1 );
                                }
                                if(xx.substr( 0 , 1 ) === "\n"){
                                    xx=xx.substr( 1 );
                                }
                                let nom_de_la_variable='les_menu1';
                                if(niveau >= 1){
                                    nom_de_la_variable='les_sous_menus[' + (niveau - 1) + '];';
                                    /* 'le_sous_menu1_' + (niveau - 1); */
                                }
                                if(v1['attributs']['data-cht_condition_menu'] === ''){
                                    contenu_menu1+='' + nom_de_la_variable + '+=' + xx + ';' + '\r\n';
                                }else{
                                    /*
                                      contenu_menu1 += '/*' + '\r\n';
                                      contenu_menu1 += '  b ==================' + '\r\n';
                                      contenu_menu1 += '* /' + '\r\n';
                                    */
                                    let cht_condition_js_menu=v1['attributs']['data-cht_condition_js_menu'];
                                    if(cht_condition_js_menu !== null && cht_condition_js_menu.trim() !== '' && cht_condition_js_menu !== 'null'){
                                        if(cht_condition_js_menu.substr( 0 , 1 ) === "\r"){
                                            cht_condition_js_menu=cht_condition_js_menu.substr( 1 );
                                        }
                                        if(cht_condition_js_menu.substr( 0 , 1 ) === "\n"){
                                            cht_condition_js_menu=cht_condition_js_menu.substr( 1 );
                                        }
                                        if(cht_condition_js_menu.slice( -1 ) === ";"){
                                            cht_condition_js_menu=cht_condition_js_menu.substr( 0 , cht_condition_js_menu.length - 1 );
                                        }
                                        if(xx.indexOf( 'taches1_c' ) >= 0){
                                            this.__gi1.ma_trace1( 'v1=' , v1 );
                                        }
                                        contenu_menu1+='        if(' + cht_condition_js_menu + '){' + '\r\n';
                                        /* repere1 */
                                        contenu_menu1+='            ' + nom_de_la_variable + '+=' + xx + ';' + '\r\n';
                                        contenu_menu1+='        }' + '\r\n';
                                    }else{
                                        contenu_menu1+='        ' + nom_de_la_variable + '+=' + xx + ';' + '\r\n';
                                    }
                                }
                            }
                        }
                    }
                }else{
                    let bb='';
                    contenu_menu1+='        /* ================== */' + '\r\n';
                    if(niveau >= 1){
                        contenu_menu1+='        les_sous_menus.push(\'\');\r\n';
                    }
                    /* contenu_menu1 += 'le_sous_menu1_' + niveau + '=\'\';' + '\r\n'; */
                    /*
                      =============================================================================
                      Appel au récursif
                      =============================================================================
                    */
                    let le_contenu_recursif=this.construit_menu_vjs2( v1['id_interne'] , le_tableau_du_menu , niveau + 1 , donnees_retournees , true );
                    /*
                      =============================================================================
                      Appel au récursif
                      =============================================================================
                    */
                    if(le_contenu_recursif.__xst !== __xsu){
                        this.__gi1.__xsi[__xer].push( (le_contenu_recursif.hasOwnProperty( '__xme' ) ? ( le_contenu_recursif.__xma ) : ( '' )) + '[' + this.__gi1.nl2() + ']' );
                        donnees_retournees.__xst=__xer;
                        return({"__xst" : __xer});
                    }
                    contenu_menu1+=le_contenu_recursif.__xva;
                    contenu_menu1+='        /* niveau ' + niveau + ' */' + '\r\n';
                    let nom_de_la_variable='les_menu1';
                    if(niveau >= 1){
                        nom_de_la_variable='les_sous_menus[' + (niveau - 1) + ']';
                        /* 'le_sous_menu1_' + (niveau - 1)+''; */
                    }
                    contenu_menu1+='        if(les_sous_menus[' + niveau + '] !== \'\'){' + '\r\n';
                    contenu_menu1+='            ' + nom_de_la_variable + '+=\'<li><div data-separateur="0" data-libelle_noeud_menu1="' + niveau + '">' + v1['contenu'] + '</div>\';' + '\r\n';
                    bb+='<ul id="menu_' + v1['id_interne'] + '"';
                    bb+=' data-id_menu="' + v1['id_interne'] + '"';
                    bb+='>';
                    /* contenu_menu1 += '    ' + nom_de_la_variable + '+=' + var_export(bb,true) + ';' + '\r\n'; */
                    /* let xx='`'+bb.replace(/`/g,'\\`')+'`'; */
                    contenu_menu1+='            ' + nom_de_la_variable + '+=`' + bb.replace( /`/g , '\\`' ) + '`;' + '\r\n';
                    contenu_menu1+='            ' + nom_de_la_variable + '+=les_sous_menus[' + niveau + '];' + '\r\n';
                    bb='';
                    bb+='</ul>';
                    /* contenu_menu1 += '    ' + nom_de_la_variable + '+=' + var_export(bb,true) + ';' + '\r\n'; */
                    contenu_menu1+='            ' + nom_de_la_variable + '+=`' + bb.replace( /`/g , '\\`' ) + '`;' + '\r\n';
                    contenu_menu1+='            ' + nom_de_la_variable + '+=\'</li>\';' + '\r\n';
                    contenu_menu1+='        }' + '\r\n';
                    contenu_menu1+='        les_sous_menus.pop();\r\n';
                }
            }
        }
        if(niveau === 0){
            /* return(this.__gi1.bug1('valeur de contenu_menu1 =',contenu_menu1)) */
        }
        return({"__xst" : __xsu ,"__xva" : contenu_menu1});
    }
    /*
      =============================================================================================================
    */
    async produire_le_menu( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 ){
        let chi_id_acces=donnees_recues[__xva]['chi_id_acces'];
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : chi_id_acces
        };
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let le_contenu_du_menu='';
        let cht_parametres_acces=tt136[__xva][0]['T0.cht_parametres_acces'];
        if(cht_parametres_acces === null){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }else{
            cht_parametres_acces=JSON.parse( cht_parametres_acces );
            /* this.__gi1.ma_trace1('cht_parametres_acces=',cht_parametres_acces); */
        }
        let le_tableau_du_menu={};
        if(cht_parametres_acces.hasOwnProperty( 'le_json_du_menu' )){
            /* this.__gi1.ma_trace1('type',typeof cht_parametres_acces.le_json_du_menu); */
            if( typeof cht_parametres_acces.le_json_du_menu === 'string'){
                le_tableau_du_menu=JSON.parse( cht_parametres_acces['le_json_du_menu'] );
            }else{
                le_tableau_du_menu=cht_parametres_acces['le_json_du_menu'];
            }
        }
        /* this.__gi1.ma_trace1('le_tableau_du_menu=',le_tableau_du_menu); */
        let menus2=this.construit_menu_vjs2( 0 , le_tableau_du_menu , 0 , donnees_retournees );
        if(menus2.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( menus2.__xme + '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xer});
        }
        let contenu_fichier2='';
        contenu_fichier2+='class v2_menu_pour_acces_' + chi_id_acces + '{\r\n';
        contenu_fichier2+='    /*\r\n';
        contenu_fichier2+='      =============================================================================================================\r\n';
        contenu_fichier2+='    */\r\n';
        contenu_fichier2+='    constructor(){\r\n';
        contenu_fichier2+='        /* console.log(\'constructor de menu' + chi_id_acces + '\'); */\r\n';
        contenu_fichier2+='    }\r\n';
        contenu_fichier2+='    /*\r\n';
        contenu_fichier2+='      =============================================================================================================\r\n';
        contenu_fichier2+='    */\r\n';
        contenu_fichier2+='    obtenir_le_html_des_menus( donnees_retournees ){\r\n';
        contenu_fichier2+='        let les_menu1=\'\';\r\n';
        contenu_fichier2+='        /* contenu initialisé avec une chaine vide pour indice 0 */\r\n';
        contenu_fichier2+='        let les_sous_menus=[\'\'];\r\n';
        if(menus2.__xva === ''){
        }else{
            /* this.__gi1.ma_trace1('menus2=',menus2); */
            contenu_fichier2+=menus2.__xva + '\r\n';
            contenu_fichier2+='' + '\r\n';
        }
        contenu_fichier2+='        if(les_menu1 !== \'\'){\r\n';
        contenu_fichier2+='            les_menu1=\'<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="v2_menu_pour_acces_' + chi_id_acces + '">\' + les_menu1 + \'</ul>\';\r\n';
        contenu_fichier2+='        }\r\n';
        contenu_fichier2+='        return les_menu1;\r\n';
        contenu_fichier2+='\r\n';
        contenu_fichier2+='    }\r\n';
        contenu_fichier2+='}\r\n';
        contenu_fichier2+='export{v2_menu_pour_acces_' + chi_id_acces + ' as v2_menu_pour_acces_' + chi_id_acces + '};\r\n';
        contenu_fichier2+='\r\n';
        let fichier2='';
        if(donnees_retournees._CA_ === 2){
            fichier2='../rev_2/__fichiers_generes/__v2_menu_pour_acces_' + chi_id_acces + '.js';
        }else{
            fichier2='../rev_' + donnees_retournees.chi_id_projet + '/__fichiers_generes/__v2_menu_pour_acces_' + chi_id_acces + '.js';
        }
        try{
            await this.__gi1.file_put_contents( fichier2 , contenu_fichier2 );
        }catch(e){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async enregister_le_menu_de_l_acces2( mat , d , donnees_recues , donnees_retournees , options_generales ){
        if(donnees_retournees.chi_id_utilisateur === 1){
            if(donnees_retournees.chi_id_acces > 2){
                this.__gi1.__xsi[__xer].push( 'Le développeur ne peut que modifier son menu ainsi que celui de l\'admin [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else if(donnees_retournees.chi_id_utilisateur === 2){
            if(donnees_recues[__xva]['chi_id_acces'] <= 2){
                this.__gi1.__xsi[__xer].push( 'l\'admin peut modifier les menus >2  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }else{
            this.__gi1.__xsi[__xer].push( 'seuls l\'administrateur et le développeur peuvent modifier un menu  [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let le_json=donnees_recues[__xva]['le_json'];
        let le_html=donnees_recues[__xva]['le_html'];
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : donnees_recues[__xva]['chi_id_acces']
        };
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let nouveau={};
        if(tt136[__xva][0]['T0.cht_parametres_acces'] === null){
            nouveau={
                 /*  */
                "le_json_du_menu" : le_json ,
                "le_html_ul_li_du_menu" : le_html
            };
        }else{
            nouveau=JSON.parse( tt136[__xva][0]['T0.cht_parametres_acces'] );
            nouveau['le_json_du_menu']=le_json;
            nouveau['le_html_ul_li_du_menu']=le_html;
        }
        let criteres_154={"c_chi_id_acces" : donnees_recues[__xva]['chi_id_acces'] ,"n_cht_parametres_acces" : JSON.stringify( nouveau )};
        let tt154=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_acces SET 
           `cht_parametres_acces` = :n_cht_parametres_acces
        WHERE `chi_id_acces` = :c_chi_id_acces ;
        */
        /*sql_inclure_fin*/ 154 , criteres_154 , donnees_retournees , __db1 );
        if(tt154[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let obj=await this.produire_le_menu( mat , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        if(obj.__xst !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    construit_html_du_menu( les_elements_du_menu_actuel , id_interne_parent ){
        let t='';
        for(let k1 in les_elements_du_menu_actuel){
            let v1=les_elements_du_menu_actuel[k1];
            if(v1['id_interne_parent'] === id_interne_parent){
                if(!(v1['attributs'].hasOwnProperty( 'data-liste_des_menus' ) || v1['attributs']['data-liste_des_menus'] === null)){
                    if(v1['attributs'].hasOwnProperty( 'data-cht_libelle_menu' ) && v1['attributs']['data-cht_libelle_menu'] !== null){
                        t+='<li';
                        t+=' data-chi_id_source="' + v1['attributs']['data-chi_id_source'] + '"';
                        t+=' data-chp_nom_source="' + v1['attributs']['data-chp_nom_source'] + '"';
                        t+=' data-chp_methode_menu="' + v1['attributs']['data-chp_methode_menu'] + '"';
                        t+=' data-chi_id_menu="' + v1['attributs']['data-chi_id_menu'] + '"';
                        t+=' data-cht_initialisation_menu="' + v1['attributs']['data-cht_initialisation_menu'] + '"';
                        t+=' data-chp_titre_menu="' + v1['attributs']['data-chp_titre_menu'] + '"';
                        t+=' data-cht_condition_js_menu="' + v1['attributs']['data-cht_condition_js_menu'] + '"';
                        t+=' data-cht_condition_menu="' + v1['attributs']['data-cht_condition_menu'] + '"';
                        t+=' data-chx_autorisation_menu="' + v1['attributs']['data-chx_autorisation_menu'] + '"';
                        t+=' data-separateur="' + v1['separateur'] + '"';
                        t+='>' + v1['attributs']['data-cht_libelle_menu'].replace( 'height:25px;width:25px;' , '' );
                        t+='</li>';
                    }
                }else{
                    if(v1['separateur'] === '1' || v1['separateur'] === 1){
                        t+='<li data-liste_des_menus="1" data-separateur="1">' + v1['contenu'];
                    }else{
                        t+='<li data-liste_des_menus="1">' + v1['contenu'];
                    }
                    t+='<ul>';
                    t+=this.construit_html_du_menu( les_elements_du_menu_actuel , v1['id_interne'] );
                    t+='</ul>';
                    t+='</li>';
                }
            }
        }
        return t;
    }
    /*
      =============================================================================================================
    */
    async recuperer_les_menus_d_un_acces( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_acces=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_acces'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_acces=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_acces === 0){
            this.__gi1.__xsi[__xer].push( ' [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_153={
             /*  */
            "T2_chi_id_acces" : chi_id_acces
        };
        let tt153=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
        `T0`.`cht_initialisation_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_menu` , `T0`.`cht_condition_js_menu` , `T0`.`chx_autorisation_menu`
         FROM b1.tbl_menus T0 , 
              b1.tbl_autorisations T1
         LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
        
         LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
        
        WHERE (   `T2`.`chi_id_acces` = :T2_chi_id_acces
           AND T1.chi_id_autorisation = T0.chx_autorisation_menu)
        ;
        */
        /*sql_inclure_fin*/ 153 , criteres_153 , donnees_retournees , __db1 );
        if(tt153[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let liste_des_menus=[];
        /* this.__gi1.ma_trace1('tt153[__xva]=',tt153[__xva]); */
        for(let k1 in tt153[__xva]){
            let v1=tt153[__xva][k1];
            liste_des_menus.push( {
                    "chi_id_source" : v1['T1.chx_source_autorisation'] ,
                    "cht_libelle_menu" : v1['T0.cht_libelle_menu'] ,
                    "chp_titre_menu" : v1['T0.chp_titre_menu'] ,
                    "chp_methode_menu" : v1['T0.chp_methode_menu'] ,
                    "chp_nom_source" : v1['T3.chp_nom_source'] ,
                    "chi_id_menu" : v1['T0.chi_id_menu'] ,
                    "cht_initialisation_menu" : v1['T0.cht_initialisation_menu'] ,
                    "cht_condition_menu" : v1['T0.cht_condition_menu'] ,
                    "cht_condition_js_menu" : v1['T0.cht_condition_js_menu'] ,
                    "chx_autorisation_menu" : v1['T0.chx_autorisation_menu']
                } );
        }
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : chi_id_acces
        };
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let les_elements_du_menu_actuel=[];
        let cht_parametres_acces=[];
        if(tt136[__xva][0]['T0.cht_parametres_acces'] === null){
            cht_parametres_acces=[];
        }else{
            let nouveau=JSON.parse( tt136[__xva][0]['T0.cht_parametres_acces'] );
            if(nouveau.hasOwnProperty( 'le_html_ul_li_du_menu' )){
                cht_parametres_acces=nouveau['le_html_ul_li_du_menu'];
            }else{
                cht_parametres_acces=[];
            }
            if(nouveau.hasOwnProperty( 'le_json_du_menu' )){
                if( typeof nouveau['le_json_du_menu'] === 'string'){
                    les_elements_du_menu_actuel=JSON.parse( nouveau['le_json_du_menu'] );
                }else{
                    les_elements_du_menu_actuel=nouveau['le_json_du_menu'];
                }
            }else{
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        /* this.__gi1.ma_trace1('les_elements_du_menu_actuel=',les_elements_du_menu_actuel); */
        /* this.__gi1.ma_trace1('liste_des_menus',liste_des_menus); */
        /* 1°] on vérifie que les_elements_du_menu_actuel ne contient que des éléments de liste_des_menus */
        for(let k1 in les_elements_du_menu_actuel){
            let v1=les_elements_du_menu_actuel[k1];
            if(!v1['attributs'].hasOwnProperty( 'data-liste_des_menus' )){
                /* si ce n'est pas un dossier */
                let trouve=false;
                for(let k2 in liste_des_menus){
                    let v2=liste_des_menus[k2];
                    /* this.__gi1.ma_trace1('v2=',v2); */
                    if(v1['attributs']['data-chi_id_menu'] == v2['chi_id_menu']){
                        les_elements_du_menu_actuel[k1]['attributs']['data-cht_libelle_menu']=v2['cht_libelle_menu'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-chp_titre_menu']=v2['chp_titre_menu'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-cht_initialisation_menu']=v2['cht_initialisation_menu'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-chp_methode_menu']=v2['chp_methode_menu'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-chp_nom_source']=v2['chp_nom_source'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-chi_id_source']=v2['chi_id_source'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-cht_condition_js_menu']=v2['cht_condition_js_menu'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-cht_condition_menu']=v2['cht_condition_menu'];
                        les_elements_du_menu_actuel[k1]['attributs']['data-chx_autorisation_menu']=v2['chx_autorisation_menu'];
                        trouve=true;
                        break;
                    }
                }
                if(trouve === false){
                    /* bizarre */
                    debugger;
                }
            }
        }
        /*
        */
        for(let k1 in liste_des_menus){
            let v1=liste_des_menus[k1];
            let trouve=false;
            for(let k2 in les_elements_du_menu_actuel){
                let v2=les_elements_du_menu_actuel[k2];
                if(v2['attributs'].hasOwnProperty( 'data-chi_id_menu' ) && v2['attributs']['data-chi_id_menu'] == v1['chi_id_menu']){
                    trouve=true;
                    break;
                }
            }
            if(trouve === false){
                let id_interne=les_elements_du_menu_actuel.length;
                les_elements_du_menu_actuel.push( {
                        "id_interne" : id_interne ,
                        "id_interne_parent" : 0 ,
                        "replie" : 0 ,
                        "contient_des_enfants" : 0 ,
                        "contenu" : v1['cht_libelle_menu'] ,
                        "separateur" : 0 ,
                        "attributs" : {
                            "data-chi_id_source" : v1['chi_id_source'] ,
                            "data-chp_nom_source" : v1['chp_nom_source'] ,
                            "data-chp_methode_menu" : v1['chp_methode_menu'] ,
                            "data-chi_id_menu" : v1['chi_id_menu'] ,
                            "data-cht_initialisation_menu" : v1['cht_initialisation_menu'] ,
                            "data-chp_titre_menu" : v1['chp_titre_menu'] ,
                            "data-cht_libelle_menu" : v1['cht_libelle_menu'] ,
                            "data-cht_condition_menu" : v1['cht_condition_menu'] ,
                            "data-cht_condition_js_menu" : v1['cht_condition_js_menu'] ,
                            "data-chx_autorisation_menu" : v1['chx_autorisation_menu']
                        }
                    } );
            }
        }
        /* this.__gi1.ma_trace1('les_elements_du_menu_actuel=',les_elements_du_menu_actuel); */
        let le_nouveau_html=this.construit_html_du_menu( les_elements_du_menu_actuel , 0 );
        /* this.__gi1.ma_trace1('le_nouveau_html='+le_nouveau_html); */
        /* this.__gi1.ma_trace1('le_nouveau_html=',le_nouveau_html); */
        donnees_retournees[__xva]['liste_des_menus']=liste_des_menus;
        donnees_retournees[__xva]['cht_parametres_acces']=cht_parametres_acces;
        donnees_retournees[__xva]['le_nouveau_html']=le_nouveau_html;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        /*#
          let obj=await this.faire_un_traitement( __xva_avant['T0.chi_id_acces'] ,  donnees_retournees , options_generales , __db1 );
          if(obj[__xst] === __xsu){
              return({"__xst" : __xsu});
          }else{
              return({"__xst" : __xer});
          }
        */
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        if(form['chi_id_acces'] === 2){
            if(form['che_actif_acces'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'accès admin doit toujours être actif' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if(form['chx_groupe_acces'] !== 2){
                this.__gi1.__xsi[__xer].push( 'l\'accès admin doit toujours être sur le groupe admin(2)' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if(form['chx_metier_acces'] !== 2){
                this.__gi1.__xsi[__xer].push( 'l\'accès admin doit toujours être sur le métier admin(2)' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        if(form['chi_id_acces'] === 1){
            if(form['chx_groupe_acces'] !== 1){
                this.__gi1.__xsi[__xer].push( 'l\'accès dev doit toujours être sur le groupe dev(1)' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            if(form['chx_metier_acces'] !== 1){
                this.__gi1.__xsi[__xer].push( 'l\'accès dev doit toujours être sur le métier dev(1)' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        /*
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , nouvel_id , form , __db1 ){
        /*
          this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
          donnees_retournees.__xst=__xer;
          return({"__xst" : __xer});
        */
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_acces']=form['chi_id_acces'] === null ? ( null ) : ( parseInt( form['chi_id_acces'] , 10 ) );
        form['chx_groupe_acces']=form['chx_groupe_acces'] === null ? ( null ) : ( parseInt( form['chx_groupe_acces'] , 10 ) );
        form['chx_metier_acces']=form['chx_metier_acces'] === null ? ( null ) : ( parseInt( form['chx_metier_acces'] , 10 ) );
        form['che_actif_acces']=form['che_actif_acces'] === null ? ( null ) : ( parseInt( form['che_actif_acces'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_acces'] === null || form['chp_nom_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_groupe_acces'] === null || form['chx_groupe_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "groupe" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_metier_acces'] === null || form['chx_metier_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "metier" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['che_actif_acces'] === null || form['che_actif_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "actif" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        /* sélection du champ à modifier */
        let criteres_select_136={"T0_chi_id_acces" : form['chi_id_acces']};
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_select_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt136[__xst] === __xsu && tt136[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt136[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let donnees_sql={
                "c_chi_id_acces" : form['chi_id_acces'] ,
                "n_chp_nom_acces" : form['chp_nom_acces'] ,
                "n_chx_groupe_acces" : form['chx_groupe_acces'] ,
                "n_chx_metier_acces" : form['chx_metier_acces'] ,
                "n_che_actif_acces" : form['che_actif_acces']
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt138=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_acces SET 
               `chp_nom_acces` = :n_chp_nom_acces , 
               `chx_groupe_acces` = :n_chx_groupe_acces , 
               `chx_metier_acces` = :n_chx_metier_acces , 
               `che_actif_acces` = :n_che_actif_acces
            WHERE `chi_id_acces` = :c_chi_id_acces ;
            */
            /*sql_inclure_fin*/ 138 , donnees_sql , donnees_retournees , __db1 );
            if(tt138[__xst] !== __xsu){
                if(tt138['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt138['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt136[__xva][0] , __db1 );
            if(__taam[__xst] !== __xsu){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'erreur après modification [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true){
                if(form['__mat_liste_si_ok']){
                    let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                    let d=1;
                    await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }
            let tt136_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/ 136 , criteres_select_136 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt136_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt136;
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_acces=null , __db1=null ){
        if(chi_id_acces === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_acces'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_acces=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_acces(' + chi_id_acces + ')))))';
        }
        if(chi_id_acces === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , {"T0_chi_id_acces" : chi_id_acces} , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt136[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt136;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      recherche dans la base de données l'enregistrement à dupliquer.
    */
    async page_duplication1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_acces=null ){
        if(chi_id_acces === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_acces'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_acces=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : chi_id_acces
        };
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_duplication1']=tt136;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(2)) */
        if(form['chi_id_acces'] <= 2){
            this.__gi1.__xsi[__xer].push( 'il n\'est pas possible de supprimer cet élément [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_136={
             /*  */
            "T0_chi_id_acces" : form['chi_id_acces']
        };
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , criteres_136 , donnees_retournees , __db1 );
        if(tt136[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*  */
        let tas=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt136[__xva][0] , __db1 );
        if(tas[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_139={
             /*  */
            "chi_id_acces" : form['chi_id_acces']
        };
        let tt139=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_acces
        WHERE `chi_id_acces` = :chi_id_acces ;
        */
        /*sql_inclure_fin*/ 139 , criteres_139 , donnees_retournees , __db1 );
        /*  */
        if(tt139[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let aac=await this.actions_apres_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt136[__xva][0] , __db1 );
        if(aac[__xst] === __xer){
            this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_acces=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_acces'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_acces=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_acces === 0){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let critere_136={"T0_chi_id_acces" : chi_id_acces};
        let tt136=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier` , `T0`.`che_actif_acces`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
        ;
        */
        /*sql_inclure_fin*/ 136 , critere_136 , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt136;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* conversion des données numériques début */
        form['chx_groupe_acces']=form['chx_groupe_acces'] === null || form['chx_groupe_acces'] === '' || form['chx_groupe_acces'] === undefined ? ( null ) : ( parseInt( form['chx_groupe_acces'] , 10 ) );
        form['chx_metier_acces']=form['chx_metier_acces'] === null || form['chx_metier_acces'] === '' || form['chx_metier_acces'] === undefined ? ( null ) : ( parseInt( form['chx_metier_acces'] , 10 ) );
        /* conversion des données numériques fin */
        if(form['chp_nom_acces'] === null || form['chp_nom_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_groupe_acces'] === null || form['chx_groupe_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "groupe" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(form['chx_metier_acces'] === null || form['chx_metier_acces'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "metier" doit être renseigné [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let __tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(__tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={
            "donnees" : [{"chp_nom_acces" : form['chp_nom_acces'] ,"chx_groupe_acces" : form['chx_groupe_acces'] ,"chx_metier_acces" : form['chx_metier_acces']}]
        };
        /*  */
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt137=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_acces`(
            `chp_nom_acces` , 
            `chx_groupe_acces` , 
            `chx_metier_acces`
        ) VALUES (
            :chp_nom_acces , 
            :chx_groupe_acces , 
            :chx_metier_acces
        );
        */
        /*sql_inclure_fin*/ 137 , donnees_sql , donnees_retournees , __db1 );
        if(tt137[__xst] === __xsu){
            if(tt137['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let aac=await this.action_apres_creer( mat , d , donnees_recues , donnees_retournees , options_generales , tt137['nouvel_id'] , form , __db1 );
            if(aac[__xst] === __xer){
                await __db1.exec( 'ROLLBACK;' );
                this.__gi1.__xsi[__xer].push( 'les actions après créer ont échouées [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt137['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt137['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async page_creer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*#
          page optionnelle si on veut vérifier quelque chose avant de créer un projet
          dans ce cas, dans le lien de la page, il faudra remplacer :
               m1(n1('+this.moi+'),f1(page_creer1()))
          par :
          pm1( m1(n1('+this.moi+'),f1(page_creer1())) )
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        donnees_retournees[__xva]['nouveau_numero_projet']=nouveau_numero_projet;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , __db1=null ){
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__gi1.__fnt1.debut_filtre1( mat , d , donnees_recues , donnees_retournees , options_generales , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__gi1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres135={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres135[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt135=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`che_actif_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , 
        `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
         FROM b1.tbl_acces T0
         LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
        
         LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
        
        WHERE (`T0`.`chi_id_acces` = :T0_chi_id_acces
           AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces
           AND `T0`.`che_actif_acces` = :T0_che_actif_acces
           AND `T0`.`chx_groupe_acces` = :T0_chx_groupe_acces
           AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
           AND `T0`.`chx_metier_acces` = :T0_chx_metier_acces
           AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier) 
        ORDER BY `T0`.`chi_id_acces` DESC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 135 , criteres135 , donnees_retournees , __db1 );
        if(tt135.__xst !== __xsu){
            return({"__xst" : __xer});
        }
        if(tt135[__xst] === __xsu && tt135[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres135['debut']=__debut;
            let tt135=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`che_actif_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE (`T0`.`chi_id_acces` = :T0_chi_id_acces
               AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces
               AND `T0`.`che_actif_acces` = :T0_che_actif_acces
               AND `T0`.`chx_groupe_acces` = :T0_chx_groupe_acces
               AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
               AND `T0`.`chx_metier_acces` = :T0_chx_metier_acces
               AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier) 
            ORDER BY `T0`.`chi_id_acces` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 135 , criteres135 , donnees_retournees , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt135;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        this.fonction_liste='sous_liste1';
        await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='acces1';
    __gi1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
    */
}
export{acces1 as acces1};