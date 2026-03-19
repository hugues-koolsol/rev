/*
  effectue la convertion d'un rev de sql en fonction js exécutant ce sql
*/
/*
  transformer_requete_en_fonction_js1
  transform_source_rev_vers_sql
  traiter_donnees_bases_rev
  convertir_rev_pour_construction
  x_ecran_concevoir_une_requete1_c
  compiler_en_ligne
*/
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
const CRLF='\r\n';
class _rev_de_sql_vers_js1{
    __gi1=null;
    #obj_webs_init={
        "type_de_requete" : 'select' ,
        "bases" : {} ,
        "ordre_des_tables" : [] ,
        "nom_zone_cible" : 'champs_sortie' ,
        "indice_table_pour_jointure_gauche" : 0 ,
        "gauche_0_droite_1" : 0 ,
        "champs_sortie" : [] ,
        "conditions" : [] ,
        "complements" : [] ,
        "tableau_des_bases_tables_champs" : {} ,
        "ne_pas_tester_les_dependances_de_suppression" : 0 ,
        "ne_pas_traiter_la_maj_ts_modification" : 0 ,
        "ne_pas_traiter_la_maj_ts_creation" : 0 ,
        "ne_pas_traiter_le_numero_de_revision" : 0 ,
        "inclure_le_prefixe_de_la_base_devant_la_table" : 0 ,
        "insert_brut" : 0
    };
    #obj_webs={};
    #deb_selection_dans_formule=0;
    #globale_id_requete=0;
    #globale_rev_requete='';
    #globale_type_requete='';
    #globale_commentaire_requete='';
    #globale_chp_table_reference_requete='';
    #che_est_souche_requete='0';
    #div_de_travail=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
        if(__gi1.hasOwnProperty( 'css_dimensions' )){
            import( '/f0?n0=w_rev_vers_sql1_.js' ).then( ( m ) => {
                    this.__m_rev_vers_sql1=new m['w_rev_vers_sql1']( '__m_rev_vers_sql1' , this.__gi1 );
                } );
        }else{
            import( './w_rev_vers_sql1_.js' ).then( ( m ) => {
                    this.__m_rev_vers_sql1=new m['w_rev_vers_sql1']( '__m_rev_vers_sql1' , this.__gi1 );
                } );
        }
    }
    /*
      =============================================================================================================
    */
    changer_gauche_0_droite_1( valeur ){
        this.#obj_webs['gauche_0_droite_1']=valeur;
    }
    /*
      =============================================================================================================
    */
    changer_nom_zone_cible( valeur ){
        this.#obj_webs['nom_zone_cible']=valeur;
    }
    /*
      =============================================================================================================
    */
    changer_la_jointure( ind , valeur ){
        this.#obj_webs['ordre_des_tables'][ind].jointure=valeur;
    }
    /*
      =============================================================================================================
    */
    obtenir_le_tableau_des_conditions( formule , obj3 , type_de_requete=null ){
        var tableau_des_conditions=[];
        var matriceFonction=this.__gi1.__rev1.rev_tm( formule );
        var tab=matriceFonction.__xva;
        var l01=tab.length;
        var options={
            "au_format_programme" : true ,
            "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
            "pour_where" : true ,
            "type_de_champ_pour_where" : '' ,
            "nom_du_champ_pour_where" : '' ,
            "recuperer_nom_du_champ" : true ,
            "type_de_requete" : type_de_requete
        };
        for( let i=1 ; i < l01 ; i++ ){
            if(tab[i][7] === 0){
                if(tab[i][1] === '#' && tab[i][2] === 'f'){
                }else{
                    if((tab[i][1] === 'et' || tab[i][1] === 'ou') && tab[i][2] === 'f'){
                        for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                            if(tab[j][2] === 'f'
                                   && (tab[j][1] === 'ou'
                                       || tab[j][1] === 'et'
                                       || tab[j][1] === 'egal'
                                       || tab[j][1] === 'diff'
                                       || tab[j][1] === 'comme'
                                       || tab[j][1] === 'pas_comme'
                                       || tab[j][1] === 'equivalent'
                                       || tab[j][1] === 'pas_equivalent'
                                       || tab[j][1] === 'sup'
                                       || tab[j][1] === 'supegal'
                                       || tab[j][1] === 'inf'
                                       || tab[j][1] === 'infegal'
                                       || tab[j][1] === 'est'
                                       || tab[j][1] === 'n_est_pas'
                                       || tab[j][1] === 'dans')
                            ){
                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , j , 0 , options );
                                if(obj.__xst === __xsu){
                                    var parametre=obj.__xva.match( /\par\[(.*)\]/ );
                                    if(parametre === null){
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'constante' ,
                                                "valeur" : obj.__xva ,
                                                "valeur_js" : obj.t_js ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.__xva ,
                                                "valeur_js" : obj.t_js ,
                                                "condition" : parametre[0] ,
                                                "operation" : tab[j][1] ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                            } );
                                    }
                                }else{
                                    debugger;
                                }
                            }else if(tab[j][2] === 'f' && tab[j][1] === '#'){
                            }else{
                                debugger;
                            }
                        }
                    }else if(tab[i][2] === 'f'
                           && (tab[i][1] === 'egal'
                               || tab[i][1] === 'diff'
                               || tab[i][1] === 'comme'
                               || tab[i][1] === 'pas_comme'
                               || tab[i][1] === 'equivalent'
                               || tab[i][1] === 'pas_equivalent'
                               || tab[i][1] === 'sup'
                               || tab[i][1] === 'supegal'
                               || tab[i][1] === 'inf'
                               || tab[i][1] === 'infegal'
                               || tab[i][1] === 'est'
                               || tab[i][1] === 'n_est_pas'
                               || tab[i][1] === 'dans')
                    ){
                        var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , i , 0 , options );
                        if(obj.__xst === __xsu){
                            var parametre=obj.__xva.match( /\par\[(.*)\]/ );
                            if(parametre === null){
                                tableau_des_conditions.push( {
                                        "type_condition" : 'constante' ,
                                        "valeur" : obj.__xva ,
                                        "valeur_js" : obj.t_js ,
                                        "type" : options.type_de_champ_pour_where ,
                                        "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                    } );
                            }else{
                                tableau_des_conditions.push( {
                                        "type_condition" : 'variable' ,
                                        "valeur" : obj.__xva ,
                                        "valeur_js" : obj.t_js ,
                                        "condition" : parametre[0] ,
                                        "operation" : tab[i][1] ,
                                        "type" : options.type_de_champ_pour_where ,
                                        "nom_du_champ_pour_where" : options.nom_du_champ_pour_where
                                    } );
                            }
                        }else{
                            this.__gi1.ajoute_message( {"__xst" : __xal ,"__xme" : 'erreur sur la condition du champ ' + this.__gi1.__rev1.nl2()} );
                            this.__gi1.affiche_les_messages();
                        }
                    }else{
                        debugger;
                    }
                }
            }
        }
        return tableau_des_conditions;
    }
    /*
      =============================================================================================================
    */
    #traiter_chaine_sql_pour_js( chaine ){
        var i=0;
        var nouvelle_chaine='';
        var c='';
        var l01=chaine.length;
        for( i=0 ; i < l01 ; i++ ){
            c=chaine.substr( i , 1 );
            if(c === '\''){
                if(i > 0 && chaine.substr( i - 1 , 1 ) === '.'){
                    nouvelle_chaine+=c;
                }else if(i < l01 - 1 && chaine.substr( i + 1 , 1 ) === '.'){
                    nouvelle_chaine+=c;
                }else if(i > 0 && chaine.substr( i - 1 , 1 ) === '['){
                    nouvelle_chaine+=c;
                }else if(i < l01 - 1 && chaine.substr( i + 1 , 1 ) === ']'){
                    nouvelle_chaine+=c;
                }else{
                    nouvelle_chaine+='\\\'';
                }
            }else{
                nouvelle_chaine+=c;
            }
        }
        return nouvelle_chaine;
    }
    /*
      =============================================================================================================
    */
    transformer_requete_en_fonction_js1( type_de_requete , obj3 , id_requete_en_base , matrice_requete ){
     
        let nom_des_bases=[];
        let lmr01=matrice_requete.length;
        for(let i=1 ; i < lmr01 ; i=matrice_requete[i][12]){
            if(matrice_requete[i][1]==='sélectionner' && matrice_requete[i][2]==='f' ){
                for(let j=i+1 ; j < lmr01 ; j=matrice_requete[j][12]){
                    if(matrice_requete[j][1]==='provenance' && matrice_requete[j][2]==='f' ){
                        for(let k=j+1 ; k < lmr01 ; k=matrice_requete[k][12]){
                            if(( matrice_requete[k][1]==='table_reference' || matrice_requete[k][1]==='jointure_gauche' || matrice_requete[k][1]==='jointure_croisée' ) && matrice_requete[k][2]==='f' ){
                                for(let l=k+1 ; l < lmr01 ; l=matrice_requete[l][12]){
                                    if(matrice_requete[l][1]==='source' && matrice_requete[l][2]==='f' ){
                                        for(let m=l+1 ; m < lmr01 ; m=matrice_requete[m][12]){
                                            if(matrice_requete[m][1]==='nom_de_la_table' && matrice_requete[m][2]==='f' ){
                                                for(let n=m+1 ; n < lmr01 ; n=matrice_requete[n][12]){
                                                    if(matrice_requete[n][1]==='base' && matrice_requete[n][2]==='f'  && matrice_requete[n][8]=== 1  && matrice_requete[n+1][2]=== 'c' ){
                                                        let trouvé=false;
                                                        for(let zz in nom_des_bases){
                                                            if(matrice_requete[n+1][1]===nom_des_bases[zz]){
                                                                trouve=true;
                                                                break;
                                                            }
                                                        }
                                                        if(trouvé === false){
                                                            nom_des_bases.push(matrice_requete[n+1][1])
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(nom_des_bases.length>1){
        }
        
        
        
        let t='';
        t+='const __xer=0;\r\n';
        t+='const __xsu=1;\r\n';
        t+='const __xal=2;\r\n';
        t+='const __xif=3;\r\n';
        t+='const __xdv=4;\r\n';
        t+='const __xst=\'__xst\';\r\n';
        t+='const __xsi=\'__xsi\';\r\n';
        /* t+='const __xva=\'__xva\';\r\n'; */
        /* t+='const __xac=\'__xac\';\r\n'; */
        t+='class sql_' + id_requete_en_base + '{\r\n';
        t+='    /*\r\n';
        t+='      =============================================================================================================\r\n';
        t+='    */\r\n';
        t+='    async sql( par , donnees_retournees ){\r\n';
        if(this.__gi1.le_niveau_de_deverminage > 0){
            console.log( 'obj3=' , obj3 );
        }
        var i=0;
        var c='';
        var nouvelle_chaine='';
        if(type_de_requete === 'requete_manuelle'){
            var text_rev='';
            try{
                text_rev=document.getElementById( 'vv_zone_rev_01' ).value;
            }catch(e){
                let mat1=obj3.matriceFonction;
                let obj1=this.__gi1.__rev1.matrice_vers_source_rev1( mat1 , 0 , true , 1 );
                if(obj1.__xst === __xsu){
                    text_rev=obj1.__xva;
                }else{
                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'requete manuelle avec rev incorrecte '} ));
                }
            }
        }
        let id_numerique_base_principale=0;
        if(obj3.id_base_principale === 0){
            /*
              si c'est une requete de type "SELECT 1;", on prend la première référence de base disponible
            */
            var n={};
            for(n in this.#obj_webs.bases){
                obj3.id_base_principale='BDD_NUMERO_' + n;
                id_numerique_base_principale=parseInt( n , 10 );
                break;
            }
        }else{
            if(obj3.id_base_principale === 'BASE_REFERENCE'){
                id_numerique_base_principale=1;
            }else if(obj3.id_base_principale.substr( 0 , 11 ) === 'BDD_NUMERO_'){
                id_numerique_base_principale=parseInt( obj3.id_base_principale.substr( 11 ) , 10 );
            }else if(obj3.id_base_principale.substr( 0 , 1 ) === 'b'){
                id_numerique_base_principale=parseInt( obj3.id_base_principale.substr( 1 ) , 10 );
                obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale.substr( 1 );
            }else{
                if(this.__gi1.est_num( obj3.id_base_principale )){
                    id_numerique_base_principale=parseInt( obj3.id_base_principale , 10 );
                    obj3.id_base_principale='BDD_NUMERO_' + obj3.id_base_principale;
                }else{
                    obj3.id_base_principale='';
                }
            }
        }
        if(type_de_requete === 'requete_manuelle'){
            /*  */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_js( obj3.__xva );
            nouvelle_chaine=nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' );
            const regex=/:\w+/g;
            const matches=nouvelle_chaine.match( regex );
            /* console.log(matches); // Output: [':t', ':a'] */
            if(matches !== null){
                let rgx={};
                for( let n=0 ; n < matches.length ; n++ ){
                    rgx=new RegExp( matches[n] , 'g' );
                    nouvelle_chaine=nouvelle_chaine.replace( rgx , '\' . par[\'' + matches[n].substr( 1 ) + '\'] . \'' );
                }
            }
            let c_est_un_select=false;
            for( let ind=1 ; ind < matrice_requete.length ; ind=matrice_requete[ind][12] ){
                if(matrice_requete[ind][2] === 'f' && matrice_requete[ind][1] === 'sélectionner'){
                    c_est_un_select=true;
                    break;
                }
            }
            t+='        let sql0=`' + CRLF;
            t+='          ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ).replace( /`/g , '\\`' ) + CRLF;
            t+='        `;' + CRLF;
            t+='    /* this.__gi1.ma_trace1(\' sql0 = \' + sql0 ); */' + CRLF;
            if(c_est_un_select === true){
                debugger;
                /* AFRAFRAFR */
                t+='    try{' + CRLF;
                t+='        $res0=$stmt0->execute();' + CRLF;
                t+='        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){' + CRLF;
                t+='            $donnees0[]=$tab0;' + CRLF;
                t+='        }' + CRLF;
                t+='        return {' + CRLF;
                t+='           "__xst"  => __xsu  ,' + CRLF;
                t+='           "__xva"  => $donnees0   ,' + CRLF;
                t+='           \'sql0\'    => sql0          ,' + CRLF;
                t+='        };' + CRLF;
                t+='    }catch(Exception $e){' + CRLF;
                t+='        if(e.stack.indexOf(\'API misuse\')>=0){\r\n';
                t+='            console.log(\'%c\\nATTENTION API MISUSE, un await est il manquant quelquepart ?\\n\\n\'+e.stack,\'color:red;background-color:yellow;\')\r\n';
                t+='        }\r\n';
                t+='        return {' + CRLF;
                t+='            "__xst" => __xer ,' + CRLF;
                t+='            "sql0" => sql0 ,' + CRLF;
                t+='            "texte_requete" => \'la selection sur les éléments\' ,' + CRLF;
                t+='            "exception" => $e,' + CRLF;
                t+='            };' + CRLF;
                t+='        }' + CRLF;
            }else{
                t+='    try{' + CRLF;
                t+='            let ret=this.__db1.exec(sql0);' + CRLF;
                t+='            return({ "__xst" : __xsu, \'changements\' : res});;' + CRLF;
                t+='        }catch(e){' + CRLF;
                t+='            if(e.stack.indexOf(\'API misuse\')>=0){\r\n';
                t+='                console.log(\'%c\\nATTENTION API MISUSE, un await est il manquant quelquepart ?\\n\\n\'+e.stack,\'color:red;background-color:yellow;\')\r\n';
                t+='            }\r\n';
                t+='            let __xme=e.stack.indexOf(\'UNIQUE constraint\')>=0?\'cet élément existe déjà dans la base \':\'erreur SQL\';\r\n';
                t+='            return {/**/\r\n';
                t+='                "__xst" : __xer ,\r\n';
                t+='                "sql0" : sql0 ,\r\n';
                t+='                "texte_requete" : \'\' ,\r\n';
                t+='                    "exception" : e ,\r\n';
                t+='                "__xme" : __xme ,\r\n';
                t+='            };\r\n';
                t+='        }' + CRLF;
                t+='    }' + CRLF;
            }
            /*
              
            */
        }else if(type_de_requete === 'delete'){
            var nom_de_la_table=obj3.liste_des_tables_pour_select_js;
            nouvelle_chaine=this.#traiter_chaine_sql_pour_js( obj3.t_js );
            if(this.#obj_webs.ne_pas_tester_les_dependances_de_suppression === 0){
                let nom_du_champ_cle='';
                for(let id_champcle in this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs){
                    let elem=this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs[id_champcle];
                    if(elem.primary_key === 1 || elem.primary_key === true){
                        nom_du_champ_cle=elem.nom_du_champ;
                    }
                }
                if(nom_du_champ_cle !== ''){
                    if(nouvelle_chaine.indexOf( nom_du_champ_cle ) < 0){
                        this.__gi1.ajoute_message( {"__xst" : __xdv ,"__xme" : 'cette requete supprimer ne peut pas tester les dépendances sur le champ "' + nom_du_champ_cle + '"'} );
                        this.__gi1.affiche_les_messages();
                        return({"__xst" : __xer});
                    }
                    t+='        let obj1=await this.__gi1.tester_les_dependances1( {';
                    t+='"table_parente" : \'' + nom_de_la_table + '\' ,';
                    t+='"champ_parent" : \'' + nom_du_champ_cle + '\' ,';
                    t+='"id_enregistrement" : par[\'' + nom_du_champ_cle + '\'] ,';
                    t+='"__db1" : this.__db1} , donnees_retournees );\r\n';
                    t+='        if(obj1.__xst !== __xsu){\r\n';
                    t+='            return({"__xst" : __xer ,"__xva" : {} ,"__xme" : \'cet enregistrement possède des dépendants et ne peut être supprimé\' ,"sql0" : sql0});\r\n';
                    t+='        }\r\n';
                }
            }
            t+='        let sql0=\'\';' + CRLF;
            t+='        try{\r\n';
            t+='            sql0=`' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '          ' ) + CRLF;
            t+='            `;' + CRLF;
            t+='            /* this.__gi1.ma_trace1(\'sql_\' , sql0 ); */' + CRLF;
            t+='            const res=await this.__db1.exec( sql0 );\r\n';
            t+='            /* this.__gi1.ma_trace1(\'res=\',res) */\r\n';
            t+='            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res});\r\n';
            t+='        }catch(e){\r\n';
            if(this.#obj_webs.ne_pas_tester_les_dependances_de_suppression === 0){
                let nom_du_champ_cle='';
                for(let id_champcle in this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs){
                    let elem=this.#obj_webs.bases[id_numerique_base_principale].tables[nom_de_la_table].champs[id_champcle];
                    if(elem.primary_key === 1 || elem.primary_key === true){
                        nom_du_champ_cle=elem.nom_du_champ;
                    }
                }
                if(nom_du_champ_cle !== ''){
                    t+='            if(e.stack.indexOf( \'FOREIGN KEY\' ) >= 0){\r\n';
                    t+='                await this.__gi1.afficher_les_dependances1( {';
                    t+='"table_parente" : \'' + nom_de_la_table + '\' ,';
                    t+='"champ_parent" : \'' + nom_du_champ_cle + '\' ,';
                    t+='"id_enregistrement" : par[\'' + nom_du_champ_cle + '\'] ,';
                    t+='"__db1" : this.__db1} , donnees_retournees );\r\n';
                    t+='            }\r\n';
                }
            }
            t+='            return(this.__gi1.traite_erreur_sql( ' + id_requete_en_base + ' , e , sql0 , donnees_retournees , {} ));\r\n';
            t+='        }\r\n';
            t+='    }\r\n';
            /*
              
            */
        }else if(type_de_requete === 'insert'){
            /*
              
            */
            var nom_de_la_table=obj3.liste_des_tables_pour_select_js;
            nouvelle_chaine=obj3.debut_sql_pour_insert_js;
            if(this.#obj_webs.insert_brut === 1){
                t+='        let sql0=\'INSERT INTO `' + this.#obj_webs.ordre_des_tables[0].nom_de_la_table + '` VALUES \';' + CRLF;
            }else{
                t+='        let sql0=`' + CRLF;
                t+='      ' + nouvelle_chaine.replace( /\r/g , '' ).replace( /\n/g , CRLF + '      ' ) + CRLF;
                t+='        `;' + CRLF;
            }
            t+='        let liste_des_valeurs=\'\';' + CRLF;
            t+='        try{' + CRLF;
            if(this.#obj_webs.insert_brut === 1){
                t+='            for( let i=0 ; i < par.length ; i++ ){' + CRLF;
            }else{
                t+='            for( let i=0 ; i < par.donnees.length ; i++ ){' + CRLF;
            }
            t+='                if(liste_des_valeurs != \'\'){' + CRLF;
            t+='                    liste_des_valeurs+=\',\';' + CRLF;
            t+='                }' + CRLF;
            t+='                liste_des_valeurs+=\'(\';' + CRLF;
            let tableau_des_insert=[];
            /* this.__gi1.ma_trace1('obj3.tableau_des_valeurs_pour_insert_js=',obj3.tableau_des_valeurs_pour_insert_js); */
            for( i=0 ; i < obj3.tableau_des_valeurs_pour_insert_js.length ; i++ ){
                if(!this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'].hasOwnProperty( obj3.tableau_des_valeurs_pour_insert_js[i][1] )
                ){
                    return(this.__gi1.ajoute_message( {
                            "__xst" : __xer ,
                            "__xme" : 'Le champ "' + obj3.tableau_des_valeurs_pour_insert_js[i][1] + '" n\'existe pas dans la base ' + this.__gi1.__rev1.nl2()
                        } ));
                }
                /* console.log(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]]); */
                let detail_champ=this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][obj3.tableau_des_valeurs_pour_insert_js[i][1]];
                if(this.#obj_webs.insert_brut === 1){
                    let virgule=',';
                    if(i === obj3.tableau_des_valeurs_pour_insert_js.length - 1){
                        virgule=' ';
                    }
                    if(detail_champ.espece_du_champ.toLowerCase() === 'varchar'
                           && detail_champ.genre_objet_du_champ.che_a_init_genre === 1
                           && detail_champ.genre_objet_du_champ.cht_valeur_init_genre.toUpperCase() === 'NULL'
                    ){
                        tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      \' + ( par[i][' + i + ']===\'\' ? \'NULL\' : this.__gi1.__fnt1.sq1( par[i][' + i + '] ) ) + \'\' + \'' + virgule + '\'; // ' + obj3.tableau_des_valeurs_pour_insert_js[i][1] + '\r\n' );
                    }else{
                        tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      \' + this.__gi1.__fnt1.sq1( par[i][' + i + '] ) + \'\' + \'' + virgule + '\'; // ' + obj3.tableau_des_valeurs_pour_insert_js[i][1] + '\r\n' );
                    }
                }else if(detail_champ.genre_objet_du_champ
                       && (detail_champ.genre_objet_du_champ.che_est_tsc_genre === 1
                           || detail_champ.genre_objet_du_champ.che_est_tsm_genre === 1)
                       && this.#obj_webs.ne_pas_traiter_la_maj_ts_creation === 0
                ){
                    tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      \' + this.__gi1.__fnt1.sq1( donnees_retournees.date_heure_serveur ) + \'\'' );
                }else if(detail_champ.genre_objet_du_champ && detail_champ.genre_objet_du_champ.che_est_nur_genre === 1){
                    tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      \'+this.__gi1.__fnt1.sq1(\'0\') + \'\'' );
                }else{
                    let spec=detail_champ.genre_objet_du_champ.chp_espece_genre.toLowerCase();
                    if(spec === 'varchar' || spec === 'text'){
                        /* debugger */
                        let s01=obj3.tableau_des_valeurs_pour_insert_js[i][0];
                        s01=s01.replace( /__fnt1\.sq1\(/g , '__fnt1.sq4(' );
                        tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      ' + s01 + '\'' );
                    }else{
                        tableau_des_insert.push( '                liste_des_valeurs+=\'\\r\\n      ' + obj3.tableau_des_valeurs_pour_insert_js[i][0] + '\'' );
                    }
                }
            }
            /* this.__gi1.ma_trace1('tableau_des_insert=',tableau_des_insert); */
            if(this.#obj_webs.insert_brut === 1){
                t+=tableau_des_insert.join( '' );
            }else{
                t+=tableau_des_insert.join( ' + \',\';' + CRLF );
            }
            if(tableau_des_insert.length > 0){
                if(this.#obj_webs.insert_brut === 1){
                }else{
                    t+=';';
                }
            }else{
                return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'pas de valeur pour insert'} ));
            }
            t+=CRLF;
            t+='                liste_des_valeurs+=\')\';' + CRLF;
            t+='            }' + CRLF;
            t+='            let res=0;' + CRLF;
            t+='            let nouvel_id=-1;' + CRLF;
            t+='            if(liste_des_valeurs !== \'\'){' + CRLF;
            t+='                sql0+=liste_des_valeurs;' + CRLF;
            t+='                /* this.__gi1.ma_trace1( \'sql_' + id_requete_en_base + '=\' + sql0 ); */\r\n';
            t+='                res=await this.__db1.exec( sql0 );\r\n';
            t+='                /* this.__gi1.ma_trace1(\'res=\',res); */\r\n';
            t+='                const sql1=\'SELECT last_insert_rowid() as nouvel_id; \';\r\n';
            t+='                let statement1=await this.__db1.prepare( sql1 );\r\n';
            t+='                let lignes=await statement1.values();\r\n';
            t+='                await statement1.finalize();\r\n';
            t+='                for(let numero_de_ligne in lignes){\r\n';
            t+='                    nouvel_id=lignes[numero_de_ligne][0];\r\n';
            t+='                }\r\n';
            t+='            }\r\n';
            t+='            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res ,"nouvel_id" : nouvel_id});\r\n';
            t+='        }catch(e){\r\n';
            t+='            return(this.__gi1.traite_erreur_sql( ' + id_requete_en_base + ' , e , sql0 , donnees_retournees , {} ));\r\n';
            t+='        }\r\n';
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'update'){
            /*
              =============================================================================================
            */
            nouvelle_chaine=this.#traiter_chaine_sql_pour_js( obj3.__xva );
            var nom_de_la_table=obj3.liste_des_tables_pour_select_js;
            /* ''; */
            var champs_bdd={};
            if(this.#obj_webs['ordre_des_tables'].length === 0){
            }else{
                champs_bdd=this.#obj_webs['tableau_des_bases_tables_champs'][id_numerique_base_principale][nom_de_la_table].champs;
            }
            t+='        let sql0=\'UPDATE `' + nom_de_la_table + '` SET \\r\\n\';' + CRLF;
            t+='        let tableau_champs=[];' + CRLF;
            t+='        try{' + CRLF;
            var lng_max=0;
            var champ_sortie=0;
            for( champ_sortie=0 ; champ_sortie < this.#obj_webs['champs_sortie'].length ; champ_sortie++ ){
                if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'champ'){
                    var nom_du_champ=this.#obj_webs['champs_sortie'][champ_sortie].nom_du_champ;
                    if(nom_du_champ.length > lng_max){
                        lng_max=nom_du_champ.length;
                    }
                }
            }
            lng_max+=1;
            var numero_de_champ=0;
            var tableau_des_champs_en_sortie=[];
            var champ_sortie=0;
            for( champ_sortie=0 ; champ_sortie < this.#obj_webs['champs_sortie'].length ; champ_sortie++ ){
                if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'formule'){
                    var formule=this.#obj_webs['champs_sortie'][champ_sortie].formule;
                    /*
                      var tableau1=this.__gi1.__rev1.txt_en_tableau(formule);
                      var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                    */
                    var matriceFonction=this.__gi1.__rev1.rev_tm( formule );
                    var tab=matriceFonction.__xva;
                    var l01=tab.length;
                    var nom_du_champ='';
                    var valeur_du_champ='';
                    var type_de_champ='constante';
                    var options={"au_format_programme" : true ,"tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees};
                    for( var l=1 ; l < l01 ; l++ ){
                        if(tab[l][7] === 0){
                            if(tab[l][1] === '#' && tab[l][2] === 'f'){
                                /*
                                  un commentaire => on passe au suivant
                                */
                                continue;
                            }
                            if(tab[l][1] === 'champ' && tab[l][2] === 'f'){
                                nom_du_champ=tab[l + 1][1];
                            }
                            if(tab[l][1] === 'affecte'){
                                var m=l + 1;
                                for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                    if(tab[m][7] === tab[l][0]){
                                        if(tab[m][2] === 'f' && tab[m][1] === 'champ'){
                                            nom_du_champ=tab[m + 1][1];
                                        }else{
                                            if(tab[m][2] === 'f'){
                                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , m , 0 , options );
                                                if(obj.__xst === __xsu){
                                                    valeur_du_champ=obj.__xva;
                                                }else{
                                                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'fonction dans update conditions "' + tab[l][1] + '"'} ));
                                                }
                                            }else{
                                                if(tab[m][1].toLowerCase() === 'null' && tab[m][4] === 0){
                                                    valeur_du_champ='NULL';
                                                }else{
                                                    if(tab[m][1].substr( 0 , 1 ) === ':'){
                                                        valeur_du_champ='\' + this.__gi1.__fnt1.sq0( par[\'' + tab[m][1].substr( 1 ) + '\'] ) + \'';
                                                        type_de_champ='variable';
                                                    }else{
                                                        valeur_du_champ='\'' + tab[m][1].replace( /\'/g , "''" ) + '\'';
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            var champ_de_la_base=champs_bdd[nom_du_champ];
                            var lng=lng_max - nom_du_champ.length;
                            var rpt=' ';
                            /* .repeat( lng ); */
                            var encadrement_variable='\\\'';
                            if(champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'int' ) >= 0
                                   || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'float' ) >= 0
                                   || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'decimal' ) >= 0
                            ){
                                encadrement_variable='';
                            }
                            /* type_du_champ // espece_du_champ */
                            let ind=-1;
                            for(let tt in this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs){
                                if(this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[tt].nom_du_champ === nom_du_champ){
                                    ind=tt;
                                    break;
                                }
                            }
                            tableau_des_champs_en_sortie.push( {
                                    "non_du_champ_en_bdd" : nom_du_champ ,
                                    "valeur_du_champ" : valeur_du_champ ,
                                    "encadrement_variable" : encadrement_variable ,
                                    "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                                    "type_de_champ" : type_de_champ ,
                                    "champ_en_bdd" : this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[ind]
                                } );
                        }
                    }
                }else if(this.#obj_webs['champs_sortie'][champ_sortie].type_d_element === 'champ'){
                    var nom_du_champ=this.#obj_webs['champs_sortie'][champ_sortie].nom_du_champ;
                    var champ_de_la_base=champs_bdd[nom_du_champ];
                    var lng=lng_max - nom_du_champ.length;
                    var rpt=' '.repeat( lng );
                    var encadrement_variable='\\\'';
                    try{
                        if(champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'int' ) >= 0
                               || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'float' ) >= 0
                               || champ_de_la_base.espece_du_champ.toLowerCase().indexOf( 'decimal' ) >= 0
                        ){
                            encadrement_variable='';
                        }
                    }catch(e){
                        /* afr pourquoi ???? */
                        debugger;
                    }
                    let ind=-1;
                    for(let tt in this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs){
                        if(this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[tt].nom_du_champ === nom_du_champ){
                            ind=tt;
                            break;
                        }
                    }
                    tableau_des_champs_en_sortie.push( {
                            "non_du_champ_en_bdd" : nom_du_champ ,
                            "valeur_du_champ" : '\'.sq0(par[\'n_' + nom_du_champ + '\']).\'' ,
                            "encadrement_variable" : encadrement_variable ,
                            "non_null" : champ_de_la_base.hasOwnProperty( 'non_nulle' ) && champ_de_la_base.non_nulle === true ? ( true ) : ( false ) ,
                            "type_de_champ" : 'variable' ,
                            "champ_en_bdd" : this.#obj_webs['bases'][id_numerique_base_principale].tables[nom_de_la_table].champs[ind]
                        } );
                }
            }
            if(tableau_des_champs_en_sortie.length === 0){
                return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ' il manque les champs en sortie '} ));
            }
            var liste_des_champs_pour_update3='';
            for( var i=0 ; i < tableau_des_champs_en_sortie.length ; i++ ){
                var la_sortie=tableau_des_champs_en_sortie[i];
                if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ
                       && this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_nur_genre === 1
                       && this.#obj_webs.ne_pas_traiter_le_numero_de_revision === 0
                ){
                    liste_des_champs_pour_update3+='            tableau_champs.push(\'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.non_du_champ_en_bdd + ' + 1 \');' + CRLF;
                }else if(this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ
                       && (this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_tsc_genre === 1
                           || this.#obj_webs.tableau_des_bases_tables_champs[id_numerique_base_principale][nom_de_la_table]['champs'][la_sortie.non_du_champ_en_bdd].genre_objet_du_champ.che_est_tsm_genre === 1)
                       && this.#obj_webs.ne_pas_traiter_la_maj_ts_modification === 0
                ){
                    liste_des_champs_pour_update3+='            tableau_champs.push( \'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = \\\'\' + donnees_retournees.date_heure_serveur + \'\\\' \' );' + CRLF;
                }else if(la_sortie.type_de_champ === 'constante'){
                    liste_des_champs_pour_update3+='            tableau_champs.push( \'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\' );' + CRLF;
                }else{
                    liste_des_champs_pour_update3+='            if(par[\'n_' + la_sortie.non_du_champ_en_bdd + '\'] === undefined || par[\'n_' + la_sortie.non_du_champ_en_bdd + '\'] === \'\' || par[\'n_' + la_sortie.non_du_champ_en_bdd + '\'] === null){' + CRLF;
                    liste_des_champs_pour_update3+='                tableau_champs.push( \'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = NULL\' );' + CRLF;
                    liste_des_champs_pour_update3+='            }else{' + CRLF;
                    liste_des_champs_pour_update3+='                tableau_champs.push( \'`' + la_sortie.non_du_champ_en_bdd + '`' + ' = ' + la_sortie.encadrement_variable + la_sortie.valeur_du_champ + la_sortie.encadrement_variable + '\' );' + CRLF;
                    liste_des_champs_pour_update3+='            }' + CRLF;
                }
            }
            t+=liste_des_champs_pour_update3;
            t+='            if(tableau_champs.length === 0){' + CRLF;
            t+='                return({' + CRLF;
            t+='                         /*  */' + CRLF;
            t+='                        "__xst" : __xer ,' + CRLF;
            t+='                        "__xme" : \'aucun champ à mettre à jour\' ,' + CRLF;
            t+='                        "sql0" : sql0 ,' + CRLF;
            t+='                        "texte_requete" : \'la modification dans la table des ' + nom_de_la_table.replace( /tbl_/ , '' ) + '\'' + CRLF;
            t+='                    });' + CRLF;
            t+='            }' + CRLF;
            t+='            sql0+=tableau_champs.join( \',\' + \'\\r\\n\' + \'    \' ) + \'\\r\\n\';' + CRLF;
            t+='            let where0=\'\';' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='            /* ATTENTION : pas de condition */' + CRLF;
                t+='            where0+=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                t+='            where0+=\' WHERE 1=1 \\r\\n\';' + CRLF;
                var formule=this.#obj_webs.conditions[0].formule;
                tableau_des_conditions=this.obtenir_le_tableau_des_conditions( this.#obj_webs.conditions[0].formule , obj3 , type_de_requete );
            }
            var i=0;
            for( i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='            where0+=` AND ' + elem.valeur_js + '`+\'\\r\\n\';' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    if((elem.type.toLowerCase() === 'integer'
                               || elem.type.toLowerCase() === 'int')
                           && (elem.operation === 'egal'
                               || elem.operation === 'dans')
                    ){
                        t+='            where0+=\'\\r\\n\' + this.__gi1.__fnt1.construction_where_sql_sur_id1(\'' + elem.nom_du_champ_pour_where + '\',' + elem.condition + ');' + CRLF;
                    }else{
                        let tt='            where0+=` AND ' + elem.valeur_js + '` + \'\\r\\n\';' + CRLF;
                        tt=tt.replace( /\+ `` \+ '/ , '+ \'' );
                        t+=tt;
                    }
                }
            }
            t+='            sql0+=where0;' + CRLF;
            t+='            /* this.__gi1.ma_trace1(\' sql_' + id_requete_en_base + '= \' + sql0 ); */' + CRLF;
            t+='            let res=await this.__db1.exec( sql0 );' + CRLF;
            t+='            return({"__xst" : __xsu ,"changements" : res});' + CRLF;
            t+='        }catch(e){' + CRLF;
            t+='            return(this.__gi1.traite_erreur_sql( ' + id_requete_en_base + ' , e , sql0 , donnees_retournees , {} ));\r\n';
            t+='        }' + CRLF;
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'select'){
            /*
              =============================================================================================
            */
            var champs0='';
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_js.length ; i++ ){
                if(champs0 !== ''){
                    champs0+=' , ';
                }
                if(i% 5 === 0){
                    champs0+=CRLF + '          ';
                }
                if(obj3.tableau_des_champs_pour_select_js[i].type === 'champ'){
                    champs0+='`' + obj3.tableau_des_champs_pour_select_js[i].alias + '`.`' + obj3.tableau_des_champs_pour_select_js[i].nom_du_champ + '`';
                    if(obj3.tableau_des_champs_pour_select_js[i].hasOwnProperty( 'alias_champ' )
                           && obj3.tableau_des_champs_pour_select_js[i].alias_champ !== ''
                    ){
                        champs0+=' as `' + obj3.tableau_des_champs_pour_select_js[i].alias_champ + '`';
                    }
                }else if(obj3.tableau_des_champs_pour_select_js[i].type === 'formule'){
                    champs0+=obj3.tableau_des_champs_pour_select_js[i].formule;
                }else if(obj3.tableau_des_champs_pour_select_js[i].type === 'constante'){
                    champs0+=obj3.tableau_des_champs_pour_select_js[i].valeur;
                }else if(obj3.tableau_des_champs_pour_select_js[i].type === 'variable'){
                    champs0+=obj3.tableau_des_champs_pour_select_js[i].valeur;
                }
            }
            t+='        const champs0=`' + champs0.replace( /\`/g , '\\`' ) + CRLF + '        `;' + CRLF;
            t+='        let sql0=\'SELECT \' + champs0;' + CRLF;
            t+='        const from0=`' + CRLF;
            t+=obj3.liste_des_tables_pour_select_js.replace( /    /g , '        ' );
            t+='        `;' + CRLF;
            t+='        sql0+=from0;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='        /* ATTENTION : pas de condition dans cette liste */' + CRLF;
                t+='        const where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                var formule='conditions(' + this.#obj_webs.conditions[0].formule + ')';
                var tableau2=this.__gi1.__rev1.txt_en_tableau( formule );
                var matriceFonction=this.__gi1.__rev1.tb_vers_matrice( tableau2.__xva , true , false , '' );
                var les_conditions=this.__m_rev_vers_sql1.c_tab_vers_sql( matriceFonction.__xva , {"au_format_programme" : true} );
                if(les_conditions.__xst === __xsu){
                    t+='        const where0=` WHERE ' + les_conditions.t_js + '`;' + CRLF;
                }else{
                    return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ' conversion en php '} ));
                }
            }
            t+='        sql0+=where0;' + CRLF;
            if(this.#obj_webs.complements.length === 0){
            }else{
                if(obj3.liste_des_tris !== ''){
                    t+='    const order0=`' + obj3.liste_des_tris.replace( /`/g , '\\`' ) + '`;' + CRLF;
                }else{
                    t+='    const order0=\'\';' + CRLF;
                }
                t+='    sql0+=order0;' + CRLF;
                if(obj3.liste_des_limites_js !== ''){
                    t+='    const plage0=`' + obj3.liste_des_limites_js + '`;' + CRLF;
                }else{
                    t+='    const plage0=\'\';' + CRLF;
                }
                t+='    sql0+=plage0;' + CRLF;
            }
            t+='        /* this.__gi1.ma_trace1(\'sql_' + id_requete_en_base + ' sql0=\',sql0); */\r\n';
            t+='        let lignes=[];\r\n';
            t+='        try{\r\n';
            t+='            let statement=await this.__db1.prepare( sql0 );\r\n';
            t+='            lignes=await statement.values();\r\n';
            t+='            await statement.finalize();\r\n';
            t+='        }catch(e){\r\n';
            t+='            return(this.__gi1.traite_erreur_sql( ' + id_requete_en_base + ' , e , sql0 , donnees_retournees , {} ));\r\n';
            t+='        }\r\n';
            t+='        let donnees0=[];\r\n';
            t+='        for(let col of lignes){\r\n';
            t+='            donnees0.push( {\r\n';
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_js.length ; i++ ){
                if(obj3.tableau_des_champs_pour_select_js[i].type === 'champ'){
                    t+='                    "' + obj3.tableau_des_champs_pour_select_js[i].alias + '.' + obj3.tableau_des_champs_pour_select_js[i].nom_du_champ + '" : col[' + i + ']';
                }else{
                    t+='                    "' + i + '" => col[' + i + ']';
                }
                if(i < obj3.tableau_des_champs_pour_select_js.length - 1){
                    t+=' ,';
                }
                t+=CRLF;
            }
            t+='                } );\r\n';
            t+='        }\r\n';
            t+='        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});\r\n';
            t+='    }' + CRLF;
            /*
              =============================================================================================
            */
        }else if(type_de_requete === 'liste_ecran'){
            /*
              =============================================================================================
              console.log( this.#obj_webs );
            */
            var champs0='';
            var i=0;
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_js.length ; i++ ){
                if(champs0 !== ''){
                    champs0+=' , ';
                }
                if(i% 5 === 0){
                    champs0+=CRLF + '          ';
                }
                if(obj3.tableau_des_champs_pour_select_js[i].type === 'champ'){
                    champs0+='`' + obj3.tableau_des_champs_pour_select_js[i].alias + '`.`' + obj3.tableau_des_champs_pour_select_js[i].nom_du_champ + '`';
                    if(obj3.tableau_des_champs_pour_select_js[i].hasOwnProperty( 'alias_champ' )
                           && obj3.tableau_des_champs_pour_select_js[i].alias_champ !== ''
                    ){
                        champs0+=' as `' + obj3.tableau_des_champs_pour_select_js[i].alias_champ + '`';
                    }
                }else if(obj3.tableau_des_champs_pour_select_js[i].type === 'formule'){
                    champs0+=obj3.tableau_des_champs_pour_select_js[i].formule;
                }else if(obj3.tableau_des_champs_pour_select_js[i].type === 'constante'){
                    champs0+=obj3.tableau_des_champs_pour_select_js[i].valeur;
                }else if(obj3.tableau_des_champs_pour_select_js[i].type === 'variable'){
                    champs0+=obj3.tableau_des_champs_pour_select_js[i].valeur;
                }
            }
            t+='        let donnees0=[];\r\n';
            t+='        let __nbEnregs=0;\r\n';
            t+='        let where0=\'\';\r\n';
            t+='        let sql0=\'\';\r\n';
            t+='        let champs0=\'\';\r\n';
            t+='        let from0=\'\';\r\n';
            t+='        /*  */\r\n';
            t+='        champs0=`' + champs0.replace( /\`/g , '\\`' ) + CRLF + '        `;' + CRLF;
            t+='        sql0=\'SELECT \' + champs0;' + CRLF;
            t+='        from0=`' + CRLF;
            /* debugger */
            t+='    ' + obj3.liste_des_tables_pour_select_js.replace( /\n/g , '\n     ' );
            /* .replace(/`/g,'\\`'); */
            t+='    `;' + CRLF;
            t+='        sql0+=from0;' + CRLF;
            var tableau_des_conditions=[];
            if(this.#obj_webs.conditions.length === 0){
                t+='        /* ATTENTION : pas de condition dans cette liste */' + CRLF;
                t+='        where0=\' WHERE 1 \';' + CRLF;
            }else{
                /*
                  les conditions dans un select list sont soit une seule conditions, soit une liste contenue dans un et[] 
                  Il n'y a alors qu'une seule formule
                */
                t+='        where0=\' WHERE 1=1 \';' + CRLF;
                var formule=this.#obj_webs.conditions[0].formule;
                /*
                  var tableau1=this.__gi1.__rev1.txt_en_tableau(formule);
                  var matriceFonction=functionToArray2(tableau1.__xva,true,true,'');
                */
                var matriceFonction=this.__gi1.__rev1.rev_tm( formule );
                var tab=matriceFonction.__xva;
                var l01=tab.length;
                var options={
                    "au_format_programme" : true ,
                    "tableau_des_tables_utilisees" : obj3.tableau_des_tables_utilisees ,
                    "pour_where" : true ,
                    "type_de_champ_pour_where" : '' ,
                    "nom_du_champ_pour_where" : '' ,
                    "espece_du_champ_pour_where" : ''
                };
                for( var i=1 ; i < l01 ; i++ ){
                    if(tab[i][7] === 0){
                        if(tab[i][1] === '#' && tab[i][2] === 'f'){
                        }else{
                            if(tab[i][1] === 'et' && tab[i][2] === 'f'){
                                var j=i + 1;
                                for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                                    if(tab[j][7] === i){
                                        if(tab[j][2] === 'f'
                                               && (tab[j][1] === 'egal'
                                                   || tab[j][1] === 'diff'
                                                   || tab[j][1] === 'comme'
                                                   || tab[j][1] === 'pas_comme'
                                                   || tab[j][1] === 'equivalent'
                                                   || tab[j][1] === 'pas_equivalent'
                                                   || tab[j][1] === 'sup'
                                                   || tab[j][1] === 'supegal'
                                                   || tab[j][1] === 'inf'
                                                   || tab[j][1] === 'infegal'
                                                   || tab[j][1] === 'dans'
                                                   || tab[j][1] === 'est'
                                                   || tab[j][1] === 'n_est_pas')
                                        ){
                                            var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , j , 0 , options );
                                            if(obj.__xst === __xsu){
                                                var parametre=obj.t_js.match( /\par\[(.*)\]/ );
                                                if(parametre === null){
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'constante' ,
                                                            "valeur" : obj.t_js ,
                                                            "type" : options.type_de_champ_pour_where ,
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                            "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                                        } );
                                                }else{
                                                    tableau_des_conditions.push( {
                                                            "type_condition" : 'variable' ,
                                                            "valeur" : obj.t_js ,
                                                            "condition" : parametre[0] ,
                                                            "operation" : tab[j][1] ,
                                                            "type" : options.type_de_champ_pour_where ,
                                                            "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                            "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                                        } );
                                                }
                                            }else{
                                                debugger;
                                            }
                                        }else if(tab[j][2] === 'f' && tab[j][1] === '#'){
                                        }else{
                                            debugger;
                                        }
                                    }
                                }
                            }else if(tab[i][2] === 'f'
                                   && (tab[i][1] === 'egal'
                                       || tab[i][1] === 'diff'
                                       || tab[i][1] === 'comme'
                                       || tab[i][1] === 'pas_comme'
                                       || tab[i][1] === 'equivalent'
                                       || tab[i][1] === 'pas_equivalent'
                                       || tab[i][1] === 'sup'
                                       || tab[i][1] === 'supegal'
                                       || tab[i][1] === 'inf'
                                       || tab[i][1] === 'infegal'
                                       || tab[i][1] === 'dans'
                                       || tab[i][1] === 'est'
                                       || tab[i][1] === 'n_est_pas')
                            ){
                                var obj=this.__m_rev_vers_sql1.traite_sqlite_fonction_de_champ( tab , i , 0 , options );
                                if(obj.__xst === __xsu){
                                    var parametre=obj.__xva.match( /\par\[(.*)\]/ );
                                    if(parametre === null){
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'constante' ,
                                                "valeur" : obj.t_js ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                            } );
                                    }else{
                                        tableau_des_conditions.push( {
                                                "type_condition" : 'variable' ,
                                                "valeur" : obj.t_js ,
                                                "condition" : parametre[0] ,
                                                "operation" : tab[i][1] ,
                                                "type" : options.type_de_champ_pour_where ,
                                                "nom_du_champ_pour_where" : options.nom_du_champ_pour_where ,
                                                "espece_du_champ_pour_where" : options.espece_du_champ_pour_where
                                            } );
                                    }
                                }else{
                                    debugger;
                                }
                            }else{
                                debugger;
                            }
                        }
                    }
                }
            }
            for( var i=0 ; i < tableau_des_conditions.length ; i++ ){
                var elem=tableau_des_conditions[i];
                if(elem.type_condition === 'constante'){
                    t+='        where0+=` AND ' + elem.valeur + '`;' + CRLF;
                }else if(elem.type_condition === 'variable'){
                    t+='        if(par.hasOwnProperty( ' + elem.condition.replace( /\par/ , '' ).replace( /\[/ , '' ).replace( /]/ , '' ) + ' ) && par[' + elem.condition.replace( /\par/ , '' ).replace( /\[/ , '' ).replace( /]/ , '' ) + '] !== \'\'){' + CRLF;
                    if((elem.espece_du_champ_pour_where.toLowerCase() === 'integer'
                               || elem.espece_du_champ_pour_where.toLowerCase() === 'int')
                           && elem.operation === 'egal'
                    ){
                        t+='            where0+=\'\\r\\n\' + this.__gi1.__fnt1.construction_where_sql_sur_id1( \'' + elem.nom_du_champ_pour_where + '\' , par[' + elem.condition.replace( /\par/ , '' ).replace( /\[/ , '' ).replace( /]/ , '' ) + '] );' + CRLF;
                    }else{
                        let s00='            where0+=` AND ' + elem.valeur + '` + \'\\r\\n\';' + CRLF;
                        if(elem.valeur.substr( elem.valeur.length - 4 , 4 ) === ' + `'){
                            t+='            where0+=` AND ' + elem.valeur.substr( 0 , elem.valeur.length - 1 ) + '\'\\r\\n\';' + CRLF;
                        }else{
                            t+='            where0+=` AND ' + elem.valeur + '` + \'\\r\\n\';' + CRLF;
                        }
                        /* PHP_EOL */
                    }
                    t+='        }' + CRLF;
                }
            }
            t+='        sql0+=where0;' + CRLF;
            if(this.#obj_webs.complements.length === 0){
                t+='        /* ATTENTION : pas de complements ( order by , limit dans cette liste */' + CRLF;
                t+='        const order0=\'\';' + CRLF;
                t+='        const plage0=\'\';' + CRLF;
            }else{
                if(obj3.liste_des_tris !== ''){
                    t+='        const order0=`' + obj3.liste_des_tris.replace( /\`/g , '\\`' ).replace( /\n/g , '\n    ' ) + '`;' + CRLF;
                }else{
                    t+='        /* ATTENTION : pas de tri */' + CRLF;
                    t+='        const order0=\'\';' + CRLF;
                }
                t+='        sql0+=order0;' + CRLF;
                if(obj3.liste_des_limites !== ''){
                    t+='        const plage0=`' + obj3.liste_des_limites_js + '`;' + CRLF;
                }else{
                    t+='        /* ATTENTION : pas de limites */' + CRLF;
                    t+='        const plage0=\'\';' + CRLF;
                }
                t+='        sql0+=plage0;' + CRLF;
            }
            t+='        /* this.__gi1.ma_trace1(\'sql_' + id_requete_en_base + ' sql0=\',sql0); */\r\n';
            t+='        let lignes=[];\r\n';
            t+='        try{\r\n';
            t+='            let statement=await this.__db1.prepare( sql0 );\r\n';
            t+='            lignes=await statement.values();\r\n';
            t+='            await statement.finalize();\r\n';
            t+='        }catch(e){\r\n';
            t+='            return(this.__gi1.traite_erreur_sql( ' + id_requete_en_base + ' , e , sql0 , donnees_retournees , {} ));\r\n';
            t+='        }\r\n';
            t+='        /*  */\r\n';
            t+='        for(let numero_de_ligne in lignes){\r\n';
            t+='            donnees0.push( {\r\n';
            for( i=0 ; i < obj3.tableau_des_champs_pour_select_js.length ; i++ ){
                t+='                    "' + obj3.tableau_des_champs_pour_select_js[i].alias + '.' + obj3.tableau_des_champs_pour_select_js[i].nom_du_champ + '" : lignes[numero_de_ligne][' + i + ']';
                if(i < obj3.tableau_des_champs_pour_select_js.length - 1){
                    t+=' ,';
                }
                t+='\r\n';
            }
            t+='                } );\r\n';
            t+='        }\r\n';
            t+='        /* comptage */\r\n';
            t+='        const sql1=\'SELECT COUNT(*) as __nbEnregs \' + from0 + where0;\r\n';
            t+='        let statement1=await this.__db1.prepare( sql1 );\r\n';
            t+='        lignes=await statement1.values();\r\n';
            t+='        await statement1.finalize();\r\n';
            t+='        for(let numero_de_ligne in lignes){\r\n';
            t+='            __nbEnregs=lignes[numero_de_ligne][0];\r\n';
            t+='        }\r\n';
            t+='        /*  */\r\n';
            t+='        return({\r\n';
            t+='                 /*  */\r\n';
            t+='                "__xst" : __xsu ,\r\n';
            t+='                "__xva" : donnees0 ,\r\n';
            t+='                "nombre" : __nbEnregs ,\r\n';
            t+='                "sql0" : sql0 ,\r\n';
            t+='                "where0" : where0\r\n';
            t+='            });\r\n';
            t+='    }' + CRLF;
        }
        t+='    /*\r\n';
        t+='      =============================================================================================================\r\n';
        t+='    */\r\n';
        t+='    moi=\'sql_' + id_requete_en_base + '\';\r\n';
        t+='    __gi1=null;\r\n';
        t+='    __db1=null;\r\n';
        t+='    /*\r\n';
        t+='      =============================================================================================================\r\n';
        t+='    */\r\n';
        t+='    constructor( __gi1 , __db1 ){\r\n';
        t+='        this.__gi1=__gi1;\r\n';
        t+='        this.__db1=__db1;\r\n';
        t+='    }\r\n';
        t+='}' + CRLF;
        t+='export{sql_' + id_requete_en_base + ' as sql_' + id_requete_en_base + '};';
        return({"__xst" : __xsu ,"__xva" : t ,"chp_table_reference_requete" : this.#globale_chp_table_reference_requete});
    }
    /*
      =============================================================================================================
      =============================================================================================================
      lors d'une initialisation à partir d'une requête initiale,
      il faut vérifier que le rev de la requete contient bien les références des tables et des champs
      contenus dans init.bases[n].matrices
      puis mettre les valeurs dans les champs de #obj_webs
    */
    convertir_rev_pour_construction( mat , d , donnees_recues , donnees_retournees , options_generales , bases ){
        this.#obj_webs.type_de_requete=this.#globale_type_requete;
        /* this.#obj_webs.bases=bases; */
        /*
          console.log( 'this.#obj_webs.tableau_des_bases_tables_champs=' , this.#obj_webs.tableau_des_bases_tables_champs );
        */
        var obj1=this.__gi1.__rev1.rev_tm( this.#globale_rev_requete );
        if(obj1.__xst !== __xsu){
            return;
        }
        var tab=obj1.__xva;
        var l01=tab.length;
        var indice_table=0;
        var jointure='';
        var nom_de_la_table='';
        var id_bdd=0;
        /*
          etape 1 références des tables
        */
        this.#obj_webs['ordre_des_tables']=[];
        for( var i=1 ; i < l01 ; i=tab[i][12] ){
            if(tab[i][2] === 'f'){
                /* sélectionner, supprimer , insérer, modifier ... */
                for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                    if(tab[j][1] === 'provenance' && tab[j][2] === 'f'){
                        for( var k=j + 1 ; k < l01 ; k=tab[k][12] ){
                            if(tab[k][2] === 'f'){
                                /* jointure_gauche , table_reference */
                                var tab_jointure_gauche=[];
                                var champs_jointure_gauche={};
                                let nom_de_la_table='';
                                let id_bdd=0;
                                let alias=0;
                                let base=0;
                                let ordre_de_table={
                                    "id_bdd" : 0 ,
                                    "nom_de_la_table" : "" ,
                                    "alias_de_la_table" : "" ,
                                    "indice_table" : this.#obj_webs['ordre_des_tables'].length ,
                                    "jointure" : "" ,
                                    "champs_jointure_gauche" : {"champ_table_mere" : {} ,"champ_table_fille" : {}}
                                };
                                ordre_de_table.jointure=tab[k][1];
                                for( var l=k + 1 ; l < l01 ; l=tab[l][12] ){
                                    if(tab[l][1] === 'source' && tab[l][2] === 'f'){
                                        for( var m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                            if(tab[m][1] === 'nom_de_la_table' && tab[m][2] === 'f'){
                                                for( var n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                                    if(tab[n][1] === 'alias' && tab[n][2] === 'f' && tab[n][8] === 1 && tab[n + 1][2] === 'c'){
                                                        ordre_de_table.alias_de_la_table=tab[n + 1][1];
                                                    }else if(tab[n][1] === 'base' && tab[n][2] === 'f' && tab[n][8] === 1 && tab[n + 1][2] === 'c'){
                                                        try{
                                                            let base=parseInt( tab[n + 1][1].replace( /b/ , '' ) );
                                                            for(let ind in this.#obj_webs['bases']){
                                                                if(this.#obj_webs['bases'][ind].chi_id_basedd === base){
                                                                    this.#obj_webs['bases'][ind].selectionne=true;
                                                                    ordre_de_table.id_bdd=ind;
                                                                    break;
                                                                }
                                                            }
                                                        } catch {}
                                                    }else if(tab[n][2] === 'c'){
                                                        ordre_de_table.nom_de_la_table=tab[n][1];
                                                        /* console.log( tab[n][1] ); */
                                                    }
                                                }
                                            }
                                        }
                                    }else if(tab[l][1] === 'contrainte' && tab[l][2] === 'f'){
                                        for( var m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                            if(tab[m][1] === 'egal' && tab[m][2] === 'f'){
                                                /* contrainte(egal(champ(T1,chi_id_groupe),champ(T0,chx_parent_groupe))) */
                                                for( var n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                                    if(tab[n][1] === 'champ' && tab[n][2] === 'f' && tab[n][8] === 2 && tab[n + 1][2] === 'c'){
                                                        var nom_du_champ='';
                                                        var alias_de_la_table_pour_le_champ='';
                                                        /*
                                                          champ(`T0` , `chi_id_test`)
                                                        */
                                                        for( let o=n + 1 ; o < l01 ; o=tab[o][12] ){
                                                            if(tab[o][2] === 'c'){
                                                                if(alias_de_la_table_pour_le_champ === ''){
                                                                    alias_de_la_table_pour_le_champ=tab[o][1];
                                                                }else{
                                                                    nom_du_champ=tab[o][1];
                                                                }
                                                            }
                                                        }
                                                        tab_jointure_gauche.push( {"alias_de_la_table_pour_le_champ" : alias_de_la_table_pour_le_champ ,"nom_du_champ" : nom_du_champ} );
                                                    }else{
                                                        debugger;
                                                    }
                                                }
                                            }else{
                                                debugger;
                                            }
                                        }
                                    }
                                }
                                if(ordre_de_table.nom_de_la_table !== '' && ordre_de_table.id_bdd !== 0){
                                    /* this.#obj_webs['bases'][ind] */
                                    this.#obj_webs['bases'][ordre_de_table.id_bdd].tables[ordre_de_table.nom_de_la_table].active=true;
                                    this.#obj_webs['ordre_des_tables'].push( ordre_de_table );
                                }
                                if(tab_jointure_gauche.length === 2){
                                    for( let indj=0 ; indj < tab_jointure_gauche.length ; indj++ ){
                                        for( let indtbl=0 ; indtbl < this.#obj_webs['ordre_des_tables'].length ; indtbl++ ){
                                            if(tab_jointure_gauche[indj].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][indtbl].alias_de_la_table
                                                   && ordre_de_table.alias_de_la_table === this.#obj_webs['ordre_des_tables'][indtbl].alias_de_la_table
                                                   && this.#obj_webs['ordre_des_tables'][indtbl].jointure === 'jointure_gauche'
                                            ){
                                                ordre_de_table.champs_jointure_gauche['champ_table_mere']={
                                                    "nom_du_champ" : tab_jointure_gauche[indj].nom_du_champ ,
                                                    "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][indtbl].nom_de_la_table ,
                                                    "id_bdd" : this.#obj_webs['ordre_des_tables'][indtbl].id_bdd ,
                                                    "indice_table" : this.#obj_webs['ordre_des_tables'][indtbl].indice_table
                                                };
                                            }else if(tab_jointure_gauche[indj].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][indtbl].alias_de_la_table
                                            ){
                                                ordre_de_table.champs_jointure_gauche['champ_table_fille']={
                                                    "nom_du_champ" : tab_jointure_gauche[indj].nom_du_champ ,
                                                    "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][indtbl].nom_de_la_table ,
                                                    "id_bdd" : this.#obj_webs['ordre_des_tables'][indtbl].id_bdd ,
                                                    "indice_table" : this.#obj_webs['ordre_des_tables'][indtbl].indice_table
                                                };
                                            }
                                        }
                                    }
                                    this.#obj_webs['ordre_des_tables'][this.#obj_webs['ordre_des_tables'].length - 1].champs_jointure_gauche=ordre_de_table.champs_jointure_gauche;
                                    tab_jointure_gauche=[];
                                }
                            }
                        }
                    }
                }
            }
        }
        this.#obj_webs['champs_sortie']=[];
        for( var i=1 ; i < l01 ; i=tab[i][12] ){
            if(tab[i][2] === 'f'){
                /* sélectionner, supprimer , insérer, modifier ... */
                for( var j=i + 1 ; j < l01 ; j=tab[j][12] ){
                    if(tab[j][1] === 'valeurs' && tab[j][2] === 'f'){
                        for( var k=j + 1 ; k < l01 ; k=tab[k][12] ){
                            if(tab[k][2] === 'f'){
                                /* champ , formule */
                                /* console.log( tab[k][1] ); */
                                let le_champ_sortie={
                                    "type_d_element" : /* formule, champ */'' ,
                                    "Tn" : '' ,
                                    "nom_du_champ" : '' ,
                                    "id_bdd" : 0 ,
                                    "nom_de_la_table" : '' ,
                                    "indice_table" : '' ,
                                    "alias_du_champ" : '' ,
                                    "formule" : ''
                                };
                                if(tab[k][1] === 'champ'){
                                    if(tab[k][8] === 2){
                                        le_champ_sortie.type_d_element='champ';
                                        le_champ_sortie.Tn=tab[k + 1][1];
                                        le_champ_sortie.nom_du_champ=tab[k + 2][1];
                                        for(let tbl in this.#obj_webs['ordre_des_tables']){
                                            if(this.#obj_webs['ordre_des_tables'][tbl].alias_de_la_table === le_champ_sortie.Tn){
                                                le_champ_sortie.id_bdd=parseInt( this.#obj_webs['ordre_des_tables'][tbl].id_bdd );
                                                le_champ_sortie.nom_de_la_table=this.#obj_webs['ordre_des_tables'][tbl].nom_de_la_table;
                                                le_champ_sortie.indice_table=parseInt( tbl );
                                                this.#obj_webs['champs_sortie'].push( le_champ_sortie );
                                                break;
                                            }
                                        }
                                    }else{
                                        debugger;
                                    }
                                }else if(tab[k][1] === 'compter'){
                                }else if(tab[k][1] === 'affecte'){
                                }else if(tab[k][1] === '#'){
                                }else{
                                    debugger;
                                }
                            }
                        }
                    }
                }
            }
        }
        this.#obj_webs['conditions']=[];
        this.#obj_webs['complements']=[];
        this.#obj_webs.ne_pas_tester_les_dependances_de_suppression=0;
        this.#obj_webs.ne_pas_traiter_la_maj_ts_modification=0;
        this.#obj_webs.ne_pas_traiter_la_maj_ts_creation=0;
        this.#obj_webs.insert_brut=0;
        this.#obj_webs.ne_pas_traiter_le_numero_de_revision=0;
        this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table=0;
        var i=0;
        for( var i=0 ; i < l01 ; i++ ){
            if(tab[i][3] === 0 && tab[i][1] === '#' && tab[i][2] === 'f' && tab[i][13].indexOf( 'meta(' ) >= 0){
                /* cette requête a un commentaire que contient un meta , on essaie de le convertir */
                var obj2=this.__gi1.__rev1.rev_tm( tab[i][13] );
                if(obj2.__xst !== __xsu){
                    continue;
                }
                for( let j=1 ; j < obj2.__xva.length ; j=obj2.__xva[j][12] ){
                    if(obj2.__xva[j][1] === 'meta' && obj2.__xva[j][2] === 'f'){
                        for( let k=j + 1 ; k < obj2.__xva.length ; k=obj2.__xva[k][12] ){
                            if(obj2.__xva[k][1] === 'ne_pas_tester_les_dependances_de_suppression'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_tester_les_dependances_de_suppression=1;
                                }
                            }else if(obj2.__xva[k][1] === 'ne_pas_traiter_la_maj_ts_modification'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_traiter_la_maj_ts_modification=1;
                                }
                            }else if(obj2.__xva[k][1] === 'ne_pas_traiter_la_maj_ts_creation'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_traiter_la_maj_ts_creation=1;
                                }
                            }else if(obj2.__xva[k][1] === 'insert_brut' && obj2.__xva[k][2] === 'f' && obj2.__xva[k + 1][2] === 'c' && obj2.__xva[k][8] === 1){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.insert_brut=1;
                                }
                            }else if(obj2.__xva[k][1] === 'inclure_le_prefixe_de_la_base_devant_la_table'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table=1;
                                }
                            }else if(obj2.__xva[k][1] === 'ne_pas_traiter_le_numero_de_revision'
                                   && obj2.__xva[k][2] === 'f'
                                   && obj2.__xva[k + 1][2] === 'c'
                                   && obj2.__xva[k][8] === 1
                            ){
                                if(obj2.__xva[k + 1][1] === '1'){
                                    this.#obj_webs.ne_pas_traiter_le_numero_de_revision=1;
                                }
                            }
                        }
                    }
                }
            }
            nom_de_la_table='';
            var alias_de_la_table='';
            var indice_de_la_base='0';
            if(tab[i][2] === 'f'
                   && ('table_reference' === tab[i][1]
                       || 'jointure_croisée' === tab[i][1]
                       || 'jointure_gauche' === tab[i][1])
            ){
                jointure=tab[i][1];
                var j=i + 1;
                for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                    if(tab[j][2] === 'f' && "nom_de_la_table" === tab[j][1]){
                        if(tab[j + 1][2] === 'c'){
                            nom_de_la_table=tab[j + 1][1];
                            if('table_reference' === tab[i][1]){
                                this.#globale_chp_table_reference_requete=nom_de_la_table;
                            }
                        }
                        var k=j;
                        for( k=j ; k < l01 && tab[k][3] > tab[i + 1][3] ; k++ ){
                            if(tab[k][2] === 'f' && "alias" === tab[k][1]){
                                if(tab[k + 1][2] === 'c'){
                                    alias_de_la_table=tab[k + 1][1];
                                }
                            }
                        }
                    }
                }
            }
            if(nom_de_la_table !== '' && indice_de_la_base !== '0'){
                if(bases.hasOwnProperty( indice_de_la_base )){
                    /*
                      il faut chercher dans la matrice le 'créer_table[nom_de_la_table[' de la table
                    */
                    var trouve=false;
                    if(this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base]
                           && this.#obj_webs.tableau_des_bases_tables_champs[indice_de_la_base][nom_de_la_table]
                    ){
                        trouve=true;
                    }
                    if(trouve === true){
                        /*
                          on peut remplir ordre_des_tables
                        */
                        var champs_jointure_gauche={};
                        if('jointure_gauche' === tab[i][1]){
                            var j=i + 1;
                            for( j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j++ ){
                                if(tab[j][1] === 'contrainte' && tab[j][2] === 'f'){
                                    var k=j + 1;
                                    for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                        if(tab[k][1] === 'egal' && tab[j][2] === 'f'){
                                            var l=k + 1;
                                            for( l=k + 1 ; l < l01 && tab[l][3] > tab[k][3] ; l++ ){
                                                if(tab[l][1] === 'champ' && tab[l][2] === 'f'){
                                                    var nom_du_champ='';
                                                    var alias_de_la_table_pour_le_champ='';
                                                    /*
                                                      champ(`T0` , `chi_id_test`)
                                                    */
                                                    if(tab[l][8] === 2){
                                                        var m=l + 1;
                                                        for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                                            if(tab[m][2] === 'c'){
                                                                if(alias_de_la_table_pour_le_champ === ''){
                                                                    alias_de_la_table_pour_le_champ=tab[m][1];
                                                                }else{
                                                                    nom_du_champ=tab[m][1];
                                                                }
                                                            }
                                                        }
                                                    }else if(tab[l][8] === 1){
                                                        var m=l + 1;
                                                        for( m=l + 1 ; m < l01 && tab[m][3] > tab[l][3] ; m++ ){
                                                            if(tab[m][2] === 'c'){
                                                                nom_du_champ=tab[m][1];
                                                            }
                                                        }
                                                    }
                                                    tab_jointure_gauche.push( {"alias_de_la_table_pour_le_champ" : alias_de_la_table_pour_le_champ ,"nom_du_champ" : nom_du_champ} );
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        this.#obj_webs['ordre_des_tables'].push( {
                                "id_bdd" : indice_de_la_base ,
                                "nom_de_la_table" : nom_de_la_table ,
                                "alias_de_la_table" : alias_de_la_table ,
                                "indice_table" : indice_table ,
                                "jointure" : jointure ,
                                "champs_jointure_gauche" : champs_jointure_gauche
                            } );
                        if(tab_jointure_gauche.length === 2){
                            var j=0;
                            for( j=0 ; j < tab_jointure_gauche.length ; j++ ){
                                var k=0;
                                for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                                    if(tab_jointure_gauche[j].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table
                                           && alias_de_la_table === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table
                                           && this.#obj_webs['ordre_des_tables'][k].jointure === 'jointure_gauche'
                                    ){
                                        champs_jointure_gauche['champ_table_mere']={
                                            "nom_du_champ" : tab_jointure_gauche[j].nom_du_champ ,
                                            "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                            "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                            "indice_table" : this.#obj_webs['ordre_des_tables'][k].indice_table
                                        };
                                    }else if(tab_jointure_gauche[j].alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table){
                                        champs_jointure_gauche['champ_table_fille']={
                                            "nom_du_champ" : tab_jointure_gauche[j].nom_du_champ ,
                                            "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                            "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                            "indice_table" : this.#obj_webs['ordre_des_tables'][k].indice_table
                                        };
                                    }
                                }
                            }
                            this.#obj_webs['ordre_des_tables'][this.#obj_webs['ordre_des_tables'].length - 1].champs_jointure_gauche=champs_jointure_gauche;
                        }
                        tab_jointure_gauche=[];
                        indice_table++;
                    }
                }
            }
        }
        /*
          pour un update, insert,delete, il n'y a qu'une table
        */
        if(this.#obj_webs.type_de_requete === 'update'
               || this.#obj_webs.type_de_requete === 'insert'
               || this.#obj_webs.type_de_requete === 'delete'
        ){
            if(this.#obj_webs['ordre_des_tables'].length === 1){
                nom_de_la_table=this.#obj_webs['ordre_des_tables'][0].nom_de_la_table;
                id_bdd=this.#obj_webs['ordre_des_tables'][0].id_bdd;
            }
        }
        /*
          etape 2 références des champs pour champs_sortie chercher "valeurs"
        */
        var nom_du_champ='';
        var alias_du_champ='';
        var formule_update='';
        for( let i=1 ; i < l01 ; i++ ){
            if(tab[i][2] === 'f' && 'valeurs' === tab[i][1] && tab[i][3] === 1){
                for( let j=i + 1 ; j < l01 && tab[j][3] > tab[i][3] ; j=tab[j][12] ){
                    /*
                      dans les valeurs, il peut y avoir des
                      - champs,
                      - formules
                      -constantes
                    */
                    if(tab[j][2] === 'c'){
                        this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'constante' ,"constante" : tab[j]} );
                    }else if(tab[j][2] === 'f' && "#" === tab[j][1]){
                    }else if(tab[j][2] === 'f' && "champ" === tab[j][1]){
                        nom_du_champ='';
                        var alias_de_la_table_pour_le_champ='';
                        /*
                          champ(`T0` , `chi_id_test`)
                        */
                        if(tab[j][8] === 2){
                            var k=j + 1;
                            for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                if(tab[k][2] === 'c'){
                                    if(alias_de_la_table_pour_le_champ === ''){
                                        alias_de_la_table_pour_le_champ=tab[k][1];
                                    }else{
                                        nom_du_champ=tab[k][1];
                                    }
                                }
                            }
                        }else if(tab[j][8] === 1){
                            var k=j + 1;
                            for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                if(tab[k][2] === 'c'){
                                    nom_du_champ=tab[k][1];
                                }
                            }
                        }else if(tab[j][8] === 3){
                            var k=j + 1;
                            for( k=j + 1 ; k < l01 && tab[k][3] > tab[j][3] ; k++ ){
                                if(tab[k][2] === 'c'){
                                    if(alias_de_la_table_pour_le_champ === ''){
                                        alias_de_la_table_pour_le_champ=tab[k][1];
                                    }else{
                                        nom_du_champ=tab[k][1];
                                    }
                                }else if(tab[k][2] === 'f' && tab[k][1] === 'alias_champ'){
                                    alias_du_champ=tab[k + 1][1];
                                    break;
                                }
                            }
                        }
                        if(nom_du_champ !== ''){
                            /*
                              il faut vérifier que ce champ appartient bien à une table référencée
                              à la fois dans la base et dans la requête
                            */
                            var dans_requete_et_base=false;
                            var nom_des_table_pouvant_contenir_le_champ=[];
                            if(alias_de_la_table_pour_le_champ !== ''){
                                var k=0;
                                for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                                    if(alias_de_la_table_pour_le_champ === this.#obj_webs['ordre_des_tables'][k].alias_de_la_table){
                                        nom_des_table_pouvant_contenir_le_champ.push( {
                                                "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                                "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                                "indice_table" : k
                                            } );
                                    }
                                }
                            }
                            if(nom_des_table_pouvant_contenir_le_champ.length === 0){
                                /*
                                  si on a pas trouvé on var chercher le champ dans toutes les tables référencées plus haut
                                */
                                var k=0;
                                for( k=0 ; k < this.#obj_webs['ordre_des_tables'].length ; k++ ){
                                    nom_des_table_pouvant_contenir_le_champ.push( {
                                            "nom_de_la_table" : this.#obj_webs['ordre_des_tables'][k].nom_de_la_table ,
                                            "id_bdd" : this.#obj_webs['ordre_des_tables'][k].id_bdd ,
                                            "indice_table" : k
                                        } );
                                }
                            }
                            var trouve=false;
                            for( let k=0 ; k < nom_des_table_pouvant_contenir_le_champ.length && trouve === false ; k++ ){
                                /* var tab2=bases[nom_des_table_pouvant_contenir_le_champ[k].id_bdd].matrice; */
                                var tab2=this.#obj_webs.bases[nom_des_table_pouvant_contenir_le_champ[k].id_bdd].matrice;
                                var l02=tab2.length;
                                var l=0;
                                for( l=0 ; l < l02 && trouve === false ; l++ ){
                                    if(tab2[l][1] === 'créer_table' && tab2[l][2] === 'f' && tab2[l][3] === 0){
                                        var m=l + 1;
                                        for( m=l + 1 ; m < l02 && trouve === false ; m=tab2[m][12] ){
                                            if(tab2[m][1] === 'nom_de_la_table'
                                                   && tab2[m + 1][2] === 'c'
                                                   && tab2[m + 1][1] === nom_des_table_pouvant_contenir_le_champ[k].nom_de_la_table
                                            ){
                                                trouve=nom_des_table_pouvant_contenir_le_champ[k];
                                                nom_de_la_table=tab2[m + 1][1];
                                            }
                                        }
                                    }
                                }
                            }
                            if(trouve !== false && tab[j][7] === i){
                                /*
                                  si c'est une référence de champ directe sous le 'valeurs'
                                  alors c'est un champ en sortie,
                                  sinon il est dans une formule
                                */
                                let déjà_pris_en_compte=false;
                                for(let i in this.#obj_webs['champs_sortie']){
                                    if(this.#obj_webs['champs_sortie'][i].nom_du_champ === nom_du_champ
                                           && this.#obj_webs['champs_sortie'][i].Tn === alias_de_la_table_pour_le_champ
                                    ){
                                        déjà_pris_en_compte=true;
                                        break;
                                    }
                                }
                                if(déjà_pris_en_compte === false){
                                    console.log( '%c ====================A ETUDIER ========================' , 'background:yellow;color:red;' );
                                    this.#obj_webs['champs_sortie'].push( {
                                            "type_d_element" : 'champ' ,
                                            "id_bdd" : trouve.id_bdd ,
                                            "nom_de_la_table" : nom_de_la_table ,
                                            "nom_du_champ" : nom_du_champ ,
                                            "indice_table" : trouve.indice_table ,
                                            "alias_du_champ" : alias_du_champ ,
                                            "Tn" : alias_de_la_table_pour_le_champ ,
                                            "formule" : ''
                                        } );
                                }else{
                                    /* console.log( '%c BIEEEENNNN ' , 'background:yellow;color:red;' ); */
                                }
                            }
                        }
                    }else if(tab[j][2] === 'f' && "champ" !== tab[j][1]){
                        /*
                          c'est probablement une formule
                        */
                        if(this.#obj_webs.type_de_requete === 'update' || this.#obj_webs.type_de_requete === 'insert'){
                            /* si on a un update, et un affecte */
                            if(tab[j][1] === 'affecte' && tab[j][2] === 'f'){
                                /*
                                  si le premier paramètre de affecte est un champ et le deuxième est une variable,
                                  alors c'est un champ en sortie
                                */
                                var indice_du_champ=-1;
                                var indice_de_la_variable=-1;
                                var k=j + 1;
                                for( k=j + 1 ; k < l01 ; k=tab[k][12] ){
                                    if(tab[k][1] === 'champ' && tab[k][2] === 'f'){
                                        indice_du_champ=k;
                                        nom_du_champ=tab[k + 1][1];
                                    }else if(tab[k][1].substr( 0 , 1 ) === ':' && tab[k][2] === 'c'){
                                        indice_de_la_variable=k;
                                    }
                                }
                                if(indice_de_la_variable > 0 && indice_du_champ > 0){
                                    /*
                                      c'est un champ
                                    */
                                    if(this.#obj_webs.type_de_requete === 'update'){
                                        if(tab[j][1] === 'affecte' && tab[j][2] === 'f'){
                                            var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , j , false , j + 1 );
                                            if(obj.__xst === __xsu){
                                                if(formule_update !== ''){
                                                    formule_update+=',';
                                                }
                                                formule_update+='affecte(' + obj.__xva + ')';
                                            }else{
                                                this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ' il faut un affecte pour une requete update '} );
                                            }
                                        }else{
                                            this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ' il faut un affecte pour une requete update '} );
                                        }
                                    }else{
                                        this.#obj_webs['champs_sortie'].push( {
                                                "type_d_element" : 'champ' ,
                                                "id_bdd" : id_bdd ,
                                                "nom_de_la_table" : nom_de_la_table ,
                                                "nom_du_champ" : nom_du_champ ,
                                                "indice_table" : 0 ,
                                                "alias_du_champ" : alias_du_champ
                                            } );
                                    }
                                }else{
                                    /*
                                      c'est une formule
                                    */
                                    if(tab[j][1] === 'affecte'){
                                        var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , j , true , j + 1 );
                                        if(obj.__xst === __xsu){
                                            this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : 'affecte(' + obj.__xva + ')'} );
                                        }
                                    }else{
                                        var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , tab[j][7] , true , j );
                                        if(obj.__xst === __xsu){
                                            this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                                        }
                                    }
                                }
                            }else{
                                /*
                                  c'est une formule
                                */
                                var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , tab[j][7] , true , j );
                                if(obj.__xst === __xsu){
                                    this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                                }
                            }
                        }else{
                            if(tab[j][1] === 'alias_champ'){
                            }else{
                                var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , j , true , j + 1 );
                                if(obj.__xst === __xsu){
                                    this.#obj_webs['champs_sortie'].push( {"type_d_element" : 'formule' ,"formule" : tab[j][1] + '(' + obj.__xva + ')'} );
                                }
                            }
                        }
                    }else{
                        debugger;
                    }
                }
            }else if(tab[i][2] === 'f' && 'conditions' === tab[i][1]){
                if(tab[i][8] > 0){
                    var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , tab[i + 1][7] , true , i + 1 );
                    if(obj.__xst === __xsu){
                        this.#obj_webs['conditions'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                    }
                }
            }else if(tab[i][2] === 'f' && 'complements' === tab[i][1]){
                if(tab[i][8] > 0){
                    var obj=this.__gi1.__rev1.matrice_vers_source_rev1( tab , tab[i + 1][7] , true , i + 1 );
                    if(obj.__xst === __xsu){
                        this.#obj_webs['complements'].push( {"type_d_element" : 'formule' ,"formule" : obj.__xva} );
                    }
                }
            }
        }
        if(this.#obj_webs.type_de_requete === 'update'){
            if(this.#obj_webs['champs_sortie'].length === 0 && formule_update !== ''){
                /* debugger */
                this.#obj_webs['champs_sortie']=[{"type_d_element" : 'formule' ,"formule" : formule_update}];
            }
        }
    }
    /*
      =============================================================================================================
    */
    traiter_donnees_bases_rev( mat , d , donnees_recues , donnees_retournees , options_generales , bases ){
        for(let i in bases){
            /* donnees.__xva]{ */
            if(bases[i]['T0.chp_rev_travail_basedd'] === null){
                this.#obj_webs['bases'][bases[i]['T0.chi_id_basedd']]={"chi_id_basedd" : bases[i]['T0.chi_id_basedd'] ,"chp_rev_travail_basedd" : '' ,"matrice" : [] ,"tables" : {} ,"selectionne" : false};
            }else{
                this.#obj_webs['bases'][bases[i]['T0.chi_id_basedd']]={
                    "chi_id_basedd" : bases[i]['T0.chi_id_basedd'] ,
                    "chp_rev_travail_basedd" : bases[i]['T0.chp_rev_travail_basedd'] ,
                    "matrice" : bases[i].matrice ,
                    "tables" : {} ,
                    "selectionne" : false
                };
            }
        }
        for(let ind in this.#obj_webs['bases']){
            this.#obj_webs['tableau_des_bases_tables_champs'][ind]={};
            var tab=this.#obj_webs['bases'][ind]['matrice'];
            var l01=tab.length;
            for( let i=1 ; i < l01 ; i=tab[i][12] ){
                if(tab[i][1] === 'créer_table' && tab[i][2] === 'f'){
                    var nom_de_la_table='';
                    var la_classe_de_la_table='';
                    for( let j=i + 1 ; j < l01 ; j=tab[j][12] ){
                        if("nom_de_la_table" === tab[j][1] && tab[j][2] === 'f'){
                            nom_de_la_table=tab[j + 1][1];
                            this.#obj_webs['bases'][ind]['tables'][nom_de_la_table]={"active" : false ,"champs" : []};
                            break;
                        }
                    }
                    if(nom_de_la_table !== ''){
                        /* this.#obj_webs['bases'][indice_de_la_base]['tables'][nom_de_la_table]={champs:[]} */
                        /* debugger */
                        this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]={"champs" : {}};
                        this.#obj_webs['bases'][ind]['tables'][nom_de_la_table].champs=[];
                        for( let l=i + 1 ; l < l01 ; l=tab[l][12] ){
                            if(tab[l][1] === 'fields' || tab[l][1] === 'champs'){
                                for( let m=l + 1 ; m < l01 ; m=tab[m][12] ){
                                    if(tab[m][1] === 'field' || tab[m][1] === 'champ'){
                                        var nom_du_champ='';
                                        for( let n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                            if(tab[n][1] === 'nom_du_champ'){
                                                nom_du_champ=tab[n + 1][1];
                                                this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]={"nom_du_champ" : nom_du_champ};
                                            }
                                        }
                                        if(nom_du_champ !== ''){
                                            for( let n=m + 1 ; n < l01 ; n=tab[n][12] ){
                                                if(tab[n][1] === 'type'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['type_du_champ']=tab[n + 1][1];
                                                }else if(tab[n][1] === 'primary_key'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['primary_key']=true;
                                                }else if(tab[n][1] === 'non_nulle'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['non_nulle']=true;
                                                }else if(tab[n][1] === 'espece_du_champ'){
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['espece_du_champ']=tab[n + 1][1];
                                                    this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['type_du_champ']=tab[n + 1][1];
                                                }else if(tab[n][1] === 'meta' && tab[n][2] === 'f'){
                                                    for( let o=n + 1 ; o < l01 ; o=tab[o][12] ){
                                                        if(tab[o][1] === 'genre' && tab[o][2] === 'f' && tab[o][8] === 1 && tab[o + 1][2] === 'c'){
                                                            this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['genre_numerique_du_champ']=parseInt( tab[o + 1][1] , 10 );
                                                            this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ]['genre_objet_du_champ']=this.__gi1.__liste_des_genres[tab[o + 1][1]];
                                                            /*
                                                              debugger
                                                              this.__gi1.__liste_des_genres
                                                            */
                                                            /* console.log('tab[o][1]='+nom_du_champ+ ' : ' +tab[o+1][1]); */
                                                        }
                                                    }
                                                }else{
                                                    /* console.log('tab[n][1]='+tab[n][1]); */
                                                }
                                            }
                                        }
                                        if(nom_du_champ !== ''){
                                            /* debugger */
                                            this.#obj_webs['bases'][ind]['tables'][nom_de_la_table]['champs'].push( this.#obj_webs.tableau_des_bases_tables_champs[ind][nom_de_la_table]['champs'][nom_du_champ] );
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        this.__gi1.__xsi[__xer].push( 'nom_de_la_table est vide  [' + this.__gi1.nl2() + ']' );
                        donnees_retournees.__xst=__xer;
                        return({"__xst" : __xer});
                    }
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    traite_les_donnees_base_et_requetes_du_serveur( mat , d , le_message_du_serveur=null ){
        this.#obj_webs=this.#obj_webs_init;
        let chi_id_requete=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_requete' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] );
            }
        }
        this.#div_de_travail=document.getElementById( 'div_de_travail' );
        this.#globale_id_requete=chi_id_requete;
        let bases=le_message_du_serveur.__xva.les_bases_du_projet;
        for(let indice_de_la_base in bases){
            var obj1=this.__gi1.__rev1.rev_tm( bases[indice_de_la_base]['T0.chp_rev_travail_basedd'] );
            if(obj1.__xst !== __xsu){
                return;
            }
            bases[indice_de_la_base]['matrice']=obj1.__xva;
            bases[indice_de_la_base]['selectionne']=false;
        }
        /*
          this.traiter_donnees_bases_rev( bases );
        */
        this.traiter_donnees_bases_rev( [] , 0 , {} , {"__xst" : __xer} , {} , bases );
        /* this.#enrichir_tableau_des_bases_tables_champs( bases ); */
        let a_retourner={
            "globale_id_requete" : 0 ,
            "globale_rev_requete" : '' ,
            "globale_type_requete" : 'select' ,
            "globale_commentaire_requete" : '' ,
            "globale_chp_table_reference_requete" : '' ,
            "che_est_souche_requete" : 0 ,
            "obj_webs" : {}
        };
        a_retourner.obj_webs=this.#obj_webs;
        if(chi_id_requete > 0){
            this.#globale_id_requete=le_message_du_serveur.__xva.requete['T0.chi_id_requete'];
            this.#globale_rev_requete=le_message_du_serveur.__xva.requete['T0.cht_rev_requete'];
            this.#globale_type_requete=le_message_du_serveur.__xva.requete['T0.chp_type_requete'];
            this.#globale_commentaire_requete=le_message_du_serveur.__xva.requete['T0.cht_commentaire_requete']??'';
            this.#globale_chp_table_reference_requete=le_message_du_serveur.__xva.requete['T0.chp_table_reference_requete']??'';
            this.#che_est_souche_requete=le_message_du_serveur.__xva.requete['T0.che_est_souche_requete'];
            /*
              this.convertir_rev_pour_construction( bases );
            */
            this.convertir_rev_pour_construction( bases );
            /*
            */
            a_retourner.globale_id_requete=this.#globale_id_requete;
            a_retourner.globale_rev_requete=this.#globale_rev_requete;
            a_retourner.globale_type_requete=this.#globale_type_requete;
            a_retourner.globale_commentaire_requete=this.#globale_commentaire_requete;
            a_retourner.globale_chp_table_reference_requete=this.#globale_chp_table_reference_requete;
            a_retourner.che_est_souche_requete=this.#che_est_souche_requete;
        }
        return({"__xst" : __xsu ,"__xva" : {"a_retourner" : a_retourner}});
    }
    /*
      =============================================================================================================
      donnees_recues contient les revs
      - le rev des bases
      - le rev de la requete
      - chi_id_requete
    */
    compiler_requete_vers_js1( mat , d , donnees_recues , donnees_retournees=null , options_generales=null ){
        this.#obj_webs=this.#obj_webs_init;
        /*
          1°] la partie traite_les_donnees_base_et_requetes_du_serveur
        */
        let bases=donnees_recues.__xva.les_bases_du_projet;
        this.#globale_id_requete=donnees_recues.__xva.chi_id_requete;
        /*  */
        for(let indice_de_la_base in bases){
            let obj0=this.__gi1.__rev1.rev_tm( bases[indice_de_la_base]['T0.chp_rev_travail_basedd'] );
            if(obj0.__xst !== __xsu){
                this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            bases[indice_de_la_base]['matrice']=obj0.__xva;
            bases[indice_de_la_base]['selectionne']=false;
        }
        let obj0=this.traiter_donnees_bases_rev( mat , d , donnees_recues , donnees_retournees , options_generales , bases );
        if(obj0.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(this.#globale_id_requete > 0){
            this.#globale_id_requete=donnees_recues.__xva.requete['T0.chi_id_requete'];
            this.#globale_rev_requete=donnees_recues.__xva.requete['T0.cht_rev_requete'];
            this.#globale_type_requete=donnees_recues.__xva.requete['T0.chp_type_requete'];
            this.#globale_commentaire_requete=donnees_recues.__xva.requete['T0.cht_commentaire_requete']??'';
            this.#globale_chp_table_reference_requete=donnees_recues.__xva.requete['T0.chp_table_reference_requete']??'';
            this.#che_est_souche_requete=donnees_recues.__xva.requete['T0.che_est_souche_requete'];
            this.convertir_rev_pour_construction( mat , d , donnees_recues , donnees_retournees , options_generales , bases );
        }
        /*
          2°] le partie transform_source_rev_vers_sql( le_message_du_serveur.__xva.requete['T0.cht_rev_requete'] , chi_id_requete );
        */
        var obj1=this.__gi1.__rev1.rev_tm( this.#globale_rev_requete );
        if(obj1.__xst !== __xsu){
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + ''} ));
        }
        let matrice_requete=obj1.__xva;
        var obj2=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {} );
        if(obj2.__xst !== __xsu){
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__gi1.__rev1.nl2() + 'conversion en sql '} ));
        }
        obj2.__xva=obj2.__xva.replace( /\/\* ==========DEBUT DEFINITION=========== \*\//g , '' );
        if(obj2.__xva.indexOf( 'WHERE ' ) >= 0){
            var str1=obj2.__xva.substr( 0 , obj2.__xva.indexOf( 'WHERE ' ) );
            var str2=obj2.__xva.substr( obj2.__xva.indexOf( 'WHERE ' ) );
            str2=str2.replace( / AND/g , CRLF + '   AND' );
            if(str2.indexOf( 'ORDER BY ' ) >= 0){
                str2=str2.replace( /ORDER BY /g , CRLF + 'ORDER BY' );
            }
            if(str2.indexOf( 'LIMIT ' ) >= 0){
                str2=str2.replace( /LIMIT /g , CRLF + 'LIMIT ' );
            }
            obj2.__xva=str1 + str2;
        }
        var obj3=this.__m_rev_vers_sql1.c_tab_vers_sql( obj1.__xva , {
             /*  */
            "au_format_programme" : true ,
            "inclure_le_prefixe_de_la_base_devant_la_table" : this.#obj_webs.inclure_le_prefixe_de_la_base_devant_la_table
        } );
        if(obj3.__xst !== __xsu){
            return(this.__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"message" : this.__gi1.__rev1.nl2() + 'conversion en sql '} ));
        }
        for( let i=0 ; i < obj3.tableau_des_tables_utilisees.length ; i++ ){
            var base={};
            for(base in this.#obj_webs.bases){
                if(base === obj3.tableau_des_tables_utilisees[i].base){
                    var table={};
                    for(table in this.#obj_webs.bases[base].tables){
                        if(table === obj3.tableau_des_tables_utilisees[i].table){
                            obj3.tableau_des_tables_utilisees[i].champs=this.#obj_webs.bases[base].tables[table].champs;
                            break;
                        }
                    }
                }
            }
        }
        try{
            var obj5=this.transformer_requete_en_fonction_js1( this.#obj_webs.type_de_requete , obj3 , this.#globale_id_requete , obj1.__xva );
            if(obj5.__xst === __xsu){
                return({
                        "__xst" : __xsu ,
                        "source_sql" : obj2.__xva ,
                        "source_php" : '' ,
                        "source_js" : obj5.__xva ,
                        "matrice_requete" : matrice_requete ,
                        "chp_table_reference_requete" : obj5.chp_table_reference_requete
                    });
            }else{
                return(this.__gi1.ajoute_message( {"__xst" : __xer ,"source_sql" : obj2.__xva ,"__xme" : this.__gi1.__rev1.nl2() + 'conversion en js '} ));
            }
        }catch(e){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
        /*  */
    }
}
export{_rev_de_sql_vers_js1 as _rev_de_sql_vers_js1};