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
class dossiers1{
    /*
      =============================================================================================================
    */
    async zipper( mat , d ){
        let m=null;
        try{
            m=await import( './__zip1_s.js' );
            /* this.__ig1.ma_trace1('le module est importé'); */
            /* this.__ig1.donnees_retournees.__xsi[__xif].push('chargement du module module "'+nom_du_fichier+'" pour la fonction '+nom_de_la_fonction_a_appeler+'()' + this.nl2()); *_/ */
        }catch(e){
            return({"__xst" : __xer ,"__xme" : e.stack});
        }
        let l_objet_zip=null;
        try{
            l_objet_zip=new m['__zip1']( this.__ig1 );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : e.stack});
        }
        let chp_nom_source='';
        let chi_id_dossier=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chp_nom_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chp_nom_source=mat[i + 1][1];
            }
        }
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            let chemin_fichier_zip=obj[__xva]['chemin_absolu'] + '/' + chp_nom_source;
            l_objet_zip.zipper_un_fichier_dans_un_repertoire( chemin_fichier_zip , obj[__xva]['chemin_absolu'] );
            /* on se fiche du retour car c'est exécuté de manière asynchrone */
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async dézipper( mat , d ){
        let m=null;
        try{
            m=await import( './__zip1_s.js' );
            /* this.__ig1.ma_trace1('le module est importé'); */
            /* this.__ig1.donnees_retournees.__xsi[__xif].push('chargement du module module "'+nom_du_fichier+'" pour la fonction '+nom_de_la_fonction_a_appeler+'()' + this.nl2()); *_/ */
        }catch(e){
            return({"__xst" : __xer ,"__xme" : e.stack});
        }
        let l_objet_zip=null;
        try{
            l_objet_zip=new m['__zip1']( this.__ig1 );
            /* this.__ig1.ma_trace1("l'objet est initialisé"); */
        }catch(e){
            return({"__xst" : __xer ,"__xme" : e.stack});
        }
        let chp_nom_source='';
        let chi_id_dossier=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chp_nom_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chp_nom_source=mat[i + 1][1];
            }
        }
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            let chemin_fichier_zip=obj[__xva]['chemin_absolu'] + '/' + chp_nom_source;
            this.__ig1.ma_trace1( "chemin_fichier_zip=" + chemin_fichier_zip );
            l_objet_zip.dezipper_un_fichier_dans_un_repertoire( chemin_fichier_zip , obj[__xva]['chemin_absolu'] );
            /* on se fiche du retour car c'est exécuté de manière asynchrone */
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async integrer_des_enregistrements_de_fichier_csv1( tableau_des_enregistrements , la_table , les_champs , __db1 , nombre_d_entrees , nombre_max_d_entrees ){
        /* this.__ig1.ma_trace1('tableau_des_enregistrements=',tableau_des_enregistrements, la_table , les_champs); */
        let les_inserts='';
        let sql0='';
        try{
            for( let i=0 ; i < tableau_des_enregistrements.length ; i++ ){
                les_inserts+='\n(';
                let l_insert='';
                for( let j=0 ; j < tableau_des_enregistrements[i].length ; j++ ){
                    if(tableau_des_enregistrements[i][j] === null){
                        l_insert+=' NULL ,';
                    }else{
                        l_insert+=' \'' + tableau_des_enregistrements[i][j].replace( /\'/g , '\'\'' ) + '\' ,';
                    }
                }
                if(l_insert !== ''){
                    l_insert=l_insert.substr( 0 , l_insert.length - 1 );
                    les_inserts+=l_insert;
                    les_inserts+='),';
                }
            }
            if(les_inserts !== ''){
                les_inserts=les_inserts.substr( 0 , les_inserts.length - 1 );
                sql0='INSERT INTO  ' + la_table + ' (\n' + les_champs.join( ' ,\n' ) + '\n) VALUES ';
                sql0+=les_inserts;
                /* this.__ig1.ma_trace1('sql0='+sql0); */
                let res=await __db1.exec( sql0 );
            }
        }catch(e){
            let la_pile=e.stack;
            const repl0=new RegExp( 'file:///' + this.__ig1.options_generales.repertoire_du_pgm_serveur , 'g' );
            la_pile=la_pile.replace( repl0 , '' );
            la_pile=la_pile.replace( /https:\/\/deno.land\//g , '' );
            la_pile=la_pile.replace( /\n/g , '<br />\n' );
            la_pile=la_pile.replace( /\?__version=\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2}_\d{3}/g , '' );
            if(nombre_max_d_entrees === 1){
                la_pile+='<br /><pre>sql0=' + sql0 + '\r\n\r\n</pre>';
            }else{
                la_pile+='<br /> nombre_d_entrees=' + nombre_d_entrees + '';
            }
            return({"__xst" : __xer ,"__xme" : la_pile});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async asynchrone_importer_un_csv_methode_01( chi_id_dossier , chi_id_basedd , chi_id_source , la_table , les_champs , sauter_n_enregistrements=1 , nombre_max_d_entrees=0 , interactif=false , __db1=null ){
        /* let nom_complet_du_fichier='./__fichiers_generes/' + nom_du_fichier; */
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let obj=await this.construire_chemin( chi_id_dossier , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
        }
        let criteres_select_419={"T0_chi_id_source" : chi_id_source};
        let tt419=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
        `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
        `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
         FROM b1.tbl_sources T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
        
        WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
        ;
        */
        /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
        if(tt419.__xst !== __xsu){
            return({
                    "__xst" : __xer ,
                    "__xme" : 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']'
                });
        }
        let chemin_du_fichier=obj[__xva]['chemin_absolu'] + '/' + tt419.__xva[0]['T0.chp_nom_source'];
        /* this.__ig1.ma_trace1('chemin_fichier='+chemin_fichier); */
        if(interactif === false){
            __db1.close();
        }
        let chemin_base_cible='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + chi_id_basedd + '.sqlite';
        /* this.__ig1.ma_trace1( 'chemin_base_cible=' + chemin_base_cible ); */
        if((await this.__ig1.is_file( chemin_base_cible ))){
            /* this.__ig1.ma_trace1('c\'est un fichier bdd'); */
        }else{
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db_cible=null;
        let debut=performance.now();
        try{
            __db_cible=await this.__ig1.ouvrir_bdd_temp( chemin_base_cible , this.__ig1.donnees_retournees , this.__ig1.options_generales );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        /*
          =====================================================================================================
        */
        function sleep1( ms ){
            return(new Promise( ( resolve ) => {
                    setTimeout( resolve , ms );} ));
        }
        /*
          =====================================================================================================
        */
        let le_debug=false;
        let buf_cumule=[];
        let texte_du_buffer='';
        let buffer_temporaire=null;
        let numero_de_ligne=0;
        let nombre_d_entrees=0;
        let tableau_des_lignes_a_integrer=[];
        let file=null;
        try{
            file=await Deno.open( chemin_du_fichier , {"read" : true} );
            /* this.__ig1.ma_trace1('le fichier est ouvert'); */
        }catch(e){
            __db_cible.close();
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        /*
          =====================================================================================================
          avec ces deux constantes il faut compter en moyenne une milliseconde par enregistrement
        */
        const taille_du_buffer=100000;
        const nb_enregistrements_par_insert=1000;
        /*
          =====================================================================================================
        */
        let ligne_du_csv='';
        let fileInfo=null;
        let tableau_des_enregistrements=[];
        let comptage_du_nombre_d_enregistrements_inseres=0;
        try{
            fileInfo=await file.stat();
        }catch(e){
            this.__ig1.ma_trace1( '\n\n==== ERREUR CE N\'EST PAS UN FICHIER =========================================' );
            __db_cible.close();
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        if(fileInfo.isFile){
            /*
              on lit par paquets de taille_du_buffer octets
              le csv est produit avec l'option par défaut de mysqladmin "csv" et non pas "csv pour ms" , 
              séparateur = ","  
              tous les champs sont contenus dans des guillemets 
            */
            let continuer=true;
            let dans_quotes=false;
            let tab=[];
            while(continuer === true){
                let buf=new Uint8Array( taille_du_buffer );
                let numberOfBytesRead=await file.readSync( buf );
                if(numberOfBytesRead === null){
                    continuer=false;
                    break;
                }
                for( let i=0 ; i < taille_du_buffer && continuer === true ; i++ ){
                    if(le_debug === true){
                        if(i >= 3067){
                            /* this.__ig1.ma_trace1('i='+i+', buf[i]='+  buf[i] + ' dans_quotes = '+(dans_quotes?'true' : 'false') ); */
                        }
                    }
                    if(buf[i] === 0){
                        break;
                    }else if(buf[i] === 34){
                        /*
                          un guillemet
                        */
                        if(dans_quotes === true){
                            if(le_debug === true){
                                if(i >= 3067 && i <= 3090){
                                    /* this.__ig1.ma_trace1('i='+i+', buf[i]='+  buf[i] + ' dans_quotes = '+(dans_quotes?'true' : 'false') + ' buf_cumule=',buf_cumule ); */
                                }
                            }
                            if(i < taille_du_buffer - 1 && buf[i + 1] === 34){
                                buf_cumule.push( buf[i] );
                                i++;
                            }else{
                                dans_quotes=false;
                                buffer_temporaire=new Uint8Array( buf_cumule );
                                texte_du_buffer=new TextDecoder().decode( buffer_temporaire );
                                if(le_debug === true){
                                    if(i >= 3067){
                                        this.__ig1.ma_trace1( 'i= "' + i + '" texte_du_buffer=<' + texte_du_buffer + '> dans_quotes=' + (dans_quotes ? ( 'true' ) : ( 'false' )) + ' , tab=' , tab );
                                    }
                                }
                                /* this.__ig1.ma_trace1('texte_du_buffer='+texte_du_buffer); */
                                if(texte_du_buffer.substr( 0 , 5 ) === ',NULL'){
                                    /* il faut boucler sur tous les "null potentiels */
                                    let en_boucle=true;
                                    do{
                                        tab.push( null );
                                        texte_du_buffer=texte_du_buffer.substr( 5 );
                                        if(texte_du_buffer.substr( 0 , 5 ) === ',NULL'){
                                        }else{
                                            en_boucle=false;
                                        }
                                    }while(en_boucle === true);
                                }
                                if(tab.length === 0 && texte_du_buffer.substr( 0 , 1 ) === '"'){
                                    /*
                                      premier champ 
                                    */
                                    if(le_debug === true){
                                        if(i >= 3067){
                                            this.__ig1.ma_trace1( 'i=' + i + ', buf[i]=' + buf[i] + ' dans_quotes = ' + (dans_quotes ? ( 'true' ) : ( 'false' )) + ' , texte_du_buffer=<' + texte_du_buffer + '> buf_cumule=' , buf_cumule );
                                        }
                                    }
                                    texte_du_buffer=texte_du_buffer.substr( 1 );
                                }else if(tab.length > 0 && (texte_du_buffer.substr( 0 , 2 ) === ';"' || texte_du_buffer.substr( 0 , 2 ) === ',"')){
                                    /*
                                      champ suivant 
                                    */
                                    texte_du_buffer=texte_du_buffer.substr( 2 );
                                }else if(tab.length > 0 && (texte_du_buffer.substr( 0 , 3 ) === ';;"' || texte_du_buffer.substr( 0 , 3 ) === ',,"')){
                                    /*
                                      champ suivant vide ( ,," ou ;;" ) 
                                    */
                                    tab.push( '' );
                                    texte_du_buffer=texte_du_buffer.substr( 3 );
                                }else if(tab.length > 0 && (texte_du_buffer.substr( 0 , 3 ) === ';;;' || texte_du_buffer.substr( 0 , 3 ) === ',,,')){
                                    if(le_debug === true){
                                        if(i >= 3067){
                                            this.__ig1.ma_trace1( 'i= "' + i + '" texte_du_buffer=<' + texte_du_buffer + '> dans_quotes=' + (dans_quotes ? ( 'true' ) : ( 'false' )) + ' , tab=' , tab );
                                        }
                                    }
                                    /* this.__ig1.ma_trace1('texte_du_buffer=',texte_du_buffer); */
                                    /*
                                      plusieurs champs vides ( ,,, " ou ;;;" ) 
                                    */
                                    let guillemet_trouve=0;
                                    for( let j=0 ; j < texte_du_buffer.length ; j++ ){
                                        if(texte_du_buffer.substr( j , 1 ) === '"'){
                                            guillemet_trouve=j;
                                            break;
                                        }
                                    }
                                    /* this.__ig1.ma_trace1('ici guillemet_trouve=',guillemet_trouve); */
                                    if(guillemet_trouve > 0){
                                        let chaine_avant_guillemets=texte_du_buffer.substr( 0 , guillemet_trouve );
                                        let nb_champs=0;
                                        if(chaine_avant_guillemets.split( ',' ).length - 1 === 0){
                                            if(chaine_avant_guillemets.split( ';' ).length - 1 === 0){
                                            }else{
                                                nb_champs=chaine_avant_guillemets.split( ';' ).length - 1;
                                            }
                                        }else{
                                            nb_champs=chaine_avant_guillemets.split( ',' ).length - 1;
                                        }
                                        if(nb_champs < 3){
                                            await __db_cible.close();
                                            await file.close();
                                            return({"__xst" : __xer ,"__xme" : 'RRRRRRAAAAAA nb_champs<3' + this.__ig1.nl2()});
                                        }
                                        for( let j=0 ; j < nb_champs - 1 ; j++ ){
                                            tab.push( '' );
                                        }
                                        texte_du_buffer=texte_du_buffer.substr( guillemet_trouve );
                                    }else{
                                        /*
                                          en fin de ligne
                                        */
                                    }
                                }
                                tab.push( texte_du_buffer );
                                buf_cumule=[];
                            }
                        }else if(dans_quotes === false){
                            dans_quotes=true;
                            buf_cumule.push( buf[i] );
                        }
                    }else if(buf[i] === 10){
                        /*
                          un LF = 10
                        */
                        if(dans_quotes === true){
                            /* this.__ig1.ma_trace1('ici ================================') */
                            buf_cumule.push( buf[i] );
                        }else if(dans_quotes === false){
                            numero_de_ligne++;
                            if(numero_de_ligne <= sauter_n_enregistrements){
                                buf_cumule=[];
                                tab=[];
                                continue;
                            }
                            /* c'est une fin de ligne */
                            buffer_temporaire=new Uint8Array( buf_cumule );
                            texte_du_buffer=new TextDecoder().decode( buffer_temporaire );
                            if(texte_du_buffer === '\r'){
                            }else{
                                if(texte_du_buffer.substr( 0 , 1 ) === ',' || texte_du_buffer.substr( 0 , 1 ) === ';'){
                                    /* this.__ig1.ma_trace1('Fin de ligne avec que des "," ou des ";" texte_du_buffer='+texte_du_buffer); */
                                    let chaine_avant_guillemets=texte_du_buffer;
                                    /* this.__ig1.ma_trace1(chaine_avant_guillemets.split(',')); */
                                    let nb_champs=chaine_avant_guillemets.split( ',' ).length - 1;
                                    /* this.__ig1.ma_trace1('nb_champs='+nb_champs); */
                                    for( let j=0 ; j < nb_champs ; j++ ){
                                        tab.push( '' );
                                    }
                                }else{
                                    tab.push( texte_du_buffer );
                                }
                            }
                            /*#
                              if(le_debug === true){
                                  if(i >= 2353){
                                      this.__ig1.ma_trace1( 'tab=' , tab );
                                  }
                              }
                            */
                            nombre_d_entrees++;
                            if(nombre_max_d_entrees > 0 && nombre_d_entrees > nombre_max_d_entrees){
                                let ret1=await this.integrer_des_enregistrements_de_fichier_csv1( tableau_des_enregistrements , la_table , les_champs , __db_cible , nombre_d_entrees , nombre_max_d_entrees );
                                if(ret1.__xst !== __xsu){
                                    await __db_cible.close();
                                    await file.close();
                                    return({"__xst" : __xer ,"__xme" : ret1.__xme});
                                }
                                tableau_des_enregistrements=[];
                                continuer=false;
                                continue;
                            }else if(tableau_des_enregistrements.length === nb_enregistrements_par_insert){
                                /*#
                                  if( tableau_des_enregistrements[1][0] == '19'){
                                      le_debug=true;
                                      this.__ig1.ma_trace1('le_debug=' , le_debug );
                                  }
                                */
                                let ret1=await this.integrer_des_enregistrements_de_fichier_csv1( tableau_des_enregistrements , la_table , les_champs , __db_cible , nombre_d_entrees , nombre_max_d_entrees );
                                if(ret1.__xst !== __xsu){
                                    await __db_cible.close();
                                    await file.close();
                                    return({"__xst" : __xer ,"__xme" : ret1.__xme});
                                }
                                /*
                                  on met un petit timeout entre chaque insert pour ne pas bloquer 
                                  les autres actions lors de l'intégration
                                */
                                await sleep1( 25 );
                                /* this.__ig1.ma_trace1('dormir 25'); */
                                tableau_des_enregistrements=[];
                            }
                            tableau_des_enregistrements.push( tab );
                            comptage_du_nombre_d_enregistrements_inseres++;
                            /* this.__ig1.ma_trace1('tab=',tab); */
                            tab=[];
                            buf_cumule=[];
                        }
                    }else{
                        buf_cumule.push( buf[i] );
                    }
                }
            }
        }
        if(tableau_des_enregistrements.length > 0){
            let ret2=await this.integrer_des_enregistrements_de_fichier_csv1( tableau_des_enregistrements , la_table , les_champs , __db_cible , nombre_d_entrees , nombre_max_d_entrees );
            if(ret2.__xst !== __xsu){
                await __db_cible.close();
                await file.close();
                return({"__xst" : __xer ,"__xme" : ret2.__xme});
            }
        }
        /* comptage */
        let __nbEnregs=0;
        try{
            const sql1='SELECT COUNT(*) as __nbEnregs FROM ' + la_table;
            let statement1=await __db_cible.prepare( sql1 );
            let lignes=await statement1.values();
            await statement1.finalize();
            for(let numero_de_ligne in lignes){
                __nbEnregs=lignes[numero_de_ligne][0];
            }
        }catch(e){
            await __db_cible.close();
            await file.close();
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        /*  */
        await __db_cible.close();
        await file.close();
        let fin=performance.now();
        /* this.__ig1.ma_trace1( __nbEnregs + 'e ' + parseInt( fin - debut , 10 ) + 'ms ( enregs et temps )' ); */
        return({"__xst" : __xsu ,"comptage_du_nombre_d_enregistrements_inseres" : comptage_du_nombre_d_enregistrements_inseres});
    }
    /*
      =============================================================================================================
    */
    async traitement_integrer_csv0( mat , d ){
        let chi_id_dossier=0;
        let chi_id_basedd=0;
        let chi_id_source=0;
        let vv_nb_enreg=0;
        let vv_sauter_enreg=0;
        let la_table='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chi_id_source' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_source=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                la_table=mat[i + 1][1];
            }else if(mat[i][1] === 'vv_nb_enreg' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                vv_nb_enreg=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'vv_sauter_enreg' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                vv_sauter_enreg=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_dossier > 0 && chi_id_basedd > 0 && chi_id_source > 0 && la_table !== ''){
            /* let nom_complet_du_fichier='./__fichiers_generes/' + nom_du_fichier; */
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            let criteres_select_419={"T0_chi_id_source" : chi_id_source};
            let tt419=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_source` , `T0`.`chx_dossier_id_source` , `T0`.`chp_nom_source` , `T0`.`cht_commentaire_source` , `T0`.`cht_rev_source` , 
            `T0`.`cht_genere_source` , `T0`.`che_binaire_source` , `T0`.`che_autorisation_globale_source` , `T1`.`chp_nom_dossier` , `T0`.`cht_condition_rev_source` , 
            `T0`.`cht_condition_js_source` , `T0`.`cht_notification_ko_source` , `T0`.`chp_usage_source` , `T0`.`che_pour_util_source`
             FROM b1.tbl_sources T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_dossier_id_source
            
            WHERE (   `T0`.`chi_id_source` = :T0_chi_id_source)
            ;
            */
            /*sql_inclure_fin*/ 419 , criteres_select_419 , this.__ig1.donnees_retournees , __db1 );
            if(tt419.__xst !== __xsu){
                this.__ig1.donnees_retournees.__xsi[__xer].push( 'les données n\'ont pas pu être récupérées pour le source ' + chi_id_source + '  [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer ,"__xme" : tt419.__xme});
            }
            let chemin_du_fichier=obj[__xva]['chemin_absolu'] + '/' + tt419.__xva[0]['T0.chp_nom_source'];
            let chemin_base_cible='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + chi_id_basedd + '.sqlite';
            if(!(await this.__ig1.is_file( chemin_base_cible ))){
                return({"__xst" : __xer ,"__xme" : 'chemin_base_cible ' + chemin_base_cible + ' non trouvé'});
            }
            if(!(await this.__ig1.is_file( chemin_du_fichier ))){
                return({"__xst" : __xer ,"__xme" : 'chemin_du_fichier ' + chemin_du_fichier + ' non trouvé'});
            }
            let fileInfo=null;
            try{
                fileInfo=await Deno.lstat( chemin_du_fichier );
            }catch(e){
                return({"__xst" : __xer ,"__xme" : 'erreur stats fichier [' + this.__ig1.nl2( e ) + ']'});
            }
            /*
              si la taille du fichier est inférieure à 500ko, 
              alors on lance le traitement interactif
              sinon on le lance en batch
              pour un fichier de 385216 octets avec une table contenant 13 champs, la réponse est quasi immédiate
            */
            if(fileInfo.size < 500e3 || vv_nb_enreg > 0 && vv_nb_enreg <= 1000){
                /* await asynchrone donc synchrone */
                let ret0=await this.asynchrone_importer_un_csv_methode_01( chi_id_dossier , chi_id_basedd , chi_id_source , la_table , this.__ig1.donnees_recues.__xva.les_champs , vv_sauter_enreg + 1 , vv_nb_enreg , true , __db1 );
                if(ret0.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : 'erreur d\'itégration [' + this.__ig1.nl2() + ']'});
                }
                this.__ig1.donnees_retournees.__xsi[__xdv].push( ret0.comptage_du_nombre_d_enregistrements_inseres + ' enregistrements intégrés [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xsu});
            }else{
                this.fermer_bdd( this.__ig1.options_generales.base_de_travail , __db1 );
                /* __db1.close(); */
                this.asynchrone_importer_un_csv_methode_01( chi_id_dossier , chi_id_basedd , chi_id_source , la_table , this.__ig1.donnees_recues.__xva.les_champs , vv_sauter_enreg + 1 , vv_nb_enreg , false , null );
                this.__ig1.donnees_retournees.__xsi[__xal].push( 'l\'import a été lancé en arrière plan' );
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    fermer_bdd( chi_id_basedd , __db1 ){
        if(this.__ig1.donnees_retournees.chi_id_utilisateur === 0){
            this.__ig1.donnees_retournees.__xsi[__xer].push( ' Vous n\'etes pas connecté ' );
            throw new Error( 'veuillez utiliser le formulaire de connexion' );
        }
        if(this.__ig1.donnees_retournees._CA_ === 2){
            chi_id_basedd=1;
        }
        this.__ig1.options_generales.bdd_ouvertes[chi_id_basedd]=null;
        try{
            __db1.close();
        } catch {}
    }
    /*
      =============================================================================================================
    */
    async analyser_premiere_ligne_de_csv( mat , d ){
        let chp_nom_source='';
        let chi_id_dossier=0;
        let provenance='';
        let liste1=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'provenance' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                provenance=mat[i + 1][1];
            }else if(mat[i][1] === 'liste1' && mat[i][2] === 'f'){
                liste1=i;
            }else if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(mat[i][1] === 'chi_id_dossier'){
                    chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
                }else if(mat[i][1] === 'chp_nom_source'){
                    chp_nom_source=mat[i + 1][1];
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            let chemin_du_fichier=obj[__xva]['chemin_absolu'] + chp_nom_source;
            /* this.__ig1.ma_trace1('chemin_du_fichier='+chemin_du_fichier); */
            let file=await Deno.open( chemin_du_fichier , {"read" : true} );
            let buf=new Uint8Array( 100000 );
            let numberOfBytesRead=await file.readSync( buf );
            let buf_cumule=[];
            for(let i in buf){
                if(buf[i] === 0 || buf[i] === 10 || buf[i] === 13){
                    break;
                }
                buf_cumule.push( buf[i] );
            }
            let buffer_temporaire=new Uint8Array( buf_cumule );
            let texte_du_buffer=new TextDecoder().decode( buffer_temporaire );
            this.__ig1.donnees_retournees.__xva['premiere_ligne']=texte_du_buffer;
            await file.close();
        }
        let criteres_171={};
        let tt171=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
         FROM b1.tbl_bdds T0
        ;
        */
        /*sql_inclure_fin*/ 171 , criteres_171 , this.__ig1.donnees_retournees , __db1 );
        if(tt171.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( '[' + this.__ig1.nl2() + ']' );
            return({"__xst" : __xer ,"__xme" : tt171.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']=[];
        if(tt171[__xva].length > 0){
            this.__ig1.donnees_retournees[__xva]['les_bases_du_projet']=tt171[__xva];
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async traitement_vider_la_table( mat , d ){
        let chi_id_basedd=0;
        let la_table='';
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_basedd' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_basedd=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'la_table' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                la_table=mat[i + 1][1];
            }
        }
        if(!(chi_id_basedd > 0 && la_table !== '')){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let chemin_base_cible='../rev_' + this.__ig1.donnees_retournees.chi_id_projet + '/__bases_de_donnees/bdd_' + chi_id_basedd + '.sqlite';
        if(!(await this.__ig1.is_file( chemin_base_cible ))){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db_cible=null;
        try{
            __db_cible=await this.__ig1.ouvrir_bdd_temp( chemin_base_cible );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        let sql0='DELETE FROM ' + la_table + ';';
        try{
            let res=await __db_cible.exec( sql0 );
        }catch(e){
            __db_cible.close();
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2( e )});
        }
        __db_cible.close();
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async vv_dossiers_nouveau_numero1( mat , d ){
        let chi_id_dossier_ancienne=0;
        let chi_id_dossier_nouvelle=0;
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['vv_nouveau_numero_de_dossier'] && this.__ig1.est_num( form['vv_nouveau_numero_de_dossier'] )){
            chi_id_dossier_nouvelle=parseInt( form['vv_nouveau_numero_de_dossier'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : ' le nouveau numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        if(form['vv_ancien_numero_de_dossier'] && this.__ig1.est_num( form['vv_ancien_numero_de_dossier'] )){
            chi_id_dossier_ancienne=parseInt( form['vv_ancien_numero_de_dossier'] , 10 );
        }else{
            return({"__xst" : __xer ,"__xme" : 'l\'ancien numéro doit être numérique [' + this.__ig1.nl2() + ']'});
        }
        /*
          Récupération du dossier actuel.
        */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let criteres_386_1={"T0_chi_id_dossier" : chi_id_dossier_ancienne};
        let tt386_1=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_386_1 , this.__ig1.donnees_retournees , __db1 );
        if(tt386_1.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt386_1.__xme});
        }
        /*
          Essai de récupération du nouveau dossier.
        */
        let criteres_386_2={"T0_chi_id_dossier" : chi_id_dossier_nouvelle};
        let tt386_2=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_386_2 , this.__ig1.donnees_retournees , __db1 );
        if(tt386_2.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt386_2.__xme});
        }
        if(tt386_2[__xva].length >= 1){
            /*
              c'est une erreur si le dossier existe déjà en base.
            */
            return({"__xst" : __xer ,"__xme" : 'le dossier portant le numéro ' + chi_id_dossier_nouvelle + ' existe déjà [' + this.__ig1.nl2()});
        }
        let criteres_406={"c_chi_id_dossier" : chi_id_dossier_ancienne ,"n_chi_id_dossier" : chi_id_dossier_nouvelle};
        let tt406=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_dossiers SET 
           `chi_id_dossier` = :n_chi_id_dossier
        WHERE `chi_id_dossier` = :c_chi_id_dossier ;
        */
        /*sql_inclure_fin*/ 406 , criteres_406 , this.__ig1.donnees_retournees , __db1 );
        if(tt406.__xst !== __xsu){
            this.__ig1.donnees_retournees.__xsi[__xer].push( 'Erreur de sélection du dossier ancien [' + this.__ig1.nl2() );
            return({"__xst" : __xer ,"__xme" : tt406.__xme});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async construire_chemin( chi_id_dossier , __db1 ){
        if(chi_id_dossier === 1){
            let chemin='';
            if(this.__ig1._CA_ === 2 && this.__ig1.donnees_retournees['chi_id_projet'] === 1){
                /*
                  quand on est sur l'env 2, le chemin absolu commence en rev_2;
                */
                chemin='../rev_2/';
            }else{
                chemin='../rev_' + this.__ig1.donnees_retournees['chi_id_projet'] + '/';
            }
            let nom_chemin_relatif2='/';
            let nom_chemin_relatif1=chemin.substr( 3 );
            let chemin_complet1=this.__ig1.options_generales.repertoire_racine_de_tous_les_projets + nom_chemin_relatif1;
            return({
                    "__xst" : __xsu ,
                    "__xva" : {
                        "chemin_absolu" : chemin ,
                        "chemin_relatif" : chemin ,
                        "chemin_complet1" : chemin_complet1 ,
                        "nom_chemin_relatif1" : nom_chemin_relatif1 ,
                        "nom_chemin_relatif2" : nom_chemin_relatif2
                    }
                });
        }
        let id_dossier=chi_id_dossier;
        let tt386=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : id_dossier} , this.__ig1.donnees_retournees , __db1 );
        if(tt386.__xst !== __xsu || tt386[__xva].length !== 1){
            if(this.__ig1.__deverminage === 2){
                let e=new Error( 'construire_chemin' );
                this.__ig1.donnees_retournees.__xsi[__xer].push( this.__ig1.formatter_erreur_serveur( e.stack ) + ' ' + this.__ig1.nl2( e ) );
            }
            return({"__xst" : __xer ,"__xme" : 'problème sur construire_chemin pour id_dossier=' + id_dossier + ' [' + this.__ig1.nl2() + ']'});
        }
        let chemin='';
        /*
          Petite protection pour éviter les boucles infinies.
        */
        let continuer=30;
        do{
            continuer--;
            if(tt386.__xst === __xsu){
                if(tt386[__xva][0]['T0.chx_parent_dossier'] === 1){
                    chemin='/' + tt386[__xva][0]['T0.chp_nom_dossier'] + chemin;
                    continuer=0;
                    break;
                }else{
                    id_dossier=tt386[__xva][0]['T0.chx_parent_dossier'];
                    if(id_dossier === 1){
                        continuer=0;
                    }else{
                        chemin='/' + tt386[__xva][0]['T0.chp_nom_dossier'] + chemin;
                        tt386=null;
                        tt386=await this.__ig1.sql_iii(
                        /*sql_inclure_deb*/ /*#
                        SELECT 
                        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
                         FROM b1.tbl_dossiers T0
                         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                        
                        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                        ;
                        */
                        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : id_dossier} , this.__ig1.donnees_retournees , __db1 );
                    }
                }
            }else{
                return({"__xst" : __xer ,"__xme" : tt386.__xme});
            }
        }while(continuer > 0);
        tt386=null;
        let nom_chemin_relatif2='';
        if(this.__ig1._CA_ === 2 && this.__ig1.donnees_retournees['chi_id_projet'] === 1){
            /*
              quand on est sur l'env 2, le chemin absolu commence en rev_2;
            */
            nom_chemin_relatif2=chemin;
            chemin='../rev_2' + chemin + '/';
        }else{
            nom_chemin_relatif2=chemin;
            chemin='../rev_' + this.__ig1.donnees_retournees['chi_id_projet'] + chemin + '/';
        }
        let nom_chemin_relatif1=chemin.substr( 3 );
        let chemin_complet1=this.__ig1.options_generales.repertoire_racine_de_tous_les_projets + nom_chemin_relatif1;
        let le_retour={
            "chemin_absolu" : chemin ,
            "chemin_relatif" : chemin ,
            "chemin_complet1" : chemin_complet1 ,
            "nom_chemin_relatif1" : nom_chemin_relatif1 ,
            "nom_chemin_relatif2" : nom_chemin_relatif2
        };
        return({"__xst" : __xsu ,"__xva" : le_retour});
    }
    /*
      =============================================================================================================
    */
    async supprimer_un_fichier_du_disque( mat , d ){
        let chi_id_dossier=0;
        let chp_nom_source='';
        let che_binaire_source=0;
        let provenance='';
        let liste1=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][8] === 0 && mat[i][1] === 'che_binaire_source'){
                che_binaire_source=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'provenance' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                provenance=mat[i + 1][1];
            }else if(mat[i][1] === 'liste1' && mat[i][2] === 'f'){
                liste1=i;
            }else if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(mat[i][1] === 'chi_id_dossier'){
                    chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
                }else if(mat[i][1] === 'chp_nom_source'){
                    chp_nom_source=mat[i + 1][1];
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : obj.__xme});
            }
            let chemin_fichier=obj[__xva]['chemin_absolu'] + chp_nom_source;
            let obj2=await this.__ig1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier , this.__ig1.donnees_retournees );
            if(obj2.__xst === __xsu){
                this.__ig1.donnees_retournees.__xsi[__xif].push( 'le fichier "' + chp_nom_source + '" a été supprimé du disque et sauvegardé  [' + this.__ig1.nl2() + ']' );
                await this.liste_des_fidos( chi_id_dossier , __db1 );
                if(provenance === 'racine' && liste1 > 0){
                    d=liste1;
                    await this.filtre1( mat , d , __db1 );
                }
                return({"__xst" : __xsu});
            }else{
                return({"__xst" : __xer ,"__xme" : 'le fichier "' + chemin_fichier + '" n\'a PAS été supprimé du disque [' + this.__ig1.nl2() + ']'});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async liste_des_fidos( chi_id_dossier , __db1 ){
        let liste_des_fido=[];
        let obj=await this.construire_chemin( chi_id_dossier , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : obj.__xme + ' sur chi_id_dossier=' + chi_id_dossier + ' [' + this.__ig1.nl2() + ']'});
        }
        let isd=false;
        try{
            isd=await this.__ig1.is_dir( obj[__xva].chemin_absolu );
        }catch(e){
            return({"__xst" : __xer ,"__xme" : ' erreur sur is_dir=' + obj[__xva].chemin_absolu + ' [' + this.__ig1.nl2() + ']'});
        }
        if(isd === true){
            for await (const dirEntry of Deno.readDir( obj.__xva.chemin_absolu )){
                if(dirEntry.isDirectory === true){
                    liste_des_fido.push( {"type_element" : 'd' ,"nom" : dirEntry.name ,"present_en_base" : __xer ,"chi_id_dossier" : 0} );
                }else if(dirEntry.isFile === true){
                    /* this.__ig1.ma_trace1("dirEntry",dirEntry); */
                    /* this.__ig1.ma_trace1("obj[__xva].chemin_absolu",obj[__xva].chemin_absolu); */
                    let chemin_du_fichier=obj[__xva].chemin_absolu + dirEntry.name;
                    const fileInfo=await Deno.stat( chemin_du_fichier );
                    /* this.__ig1.ma_trace1("fileInfo=",fileInfo); */
                    let poids_arrondi_octet=0;
                    if(fileInfo.size < 1024){
                        poids_arrondi_octet=fileInfo.size + 'uo';
                    }else if(fileInfo.size < 1024 * 1024){
                        poids_arrondi_octet=(parseInt( (fileInfo.size / 1024) * 10 , 10 ) / 10) + 'ko';
                    }else if(fileInfo.size < 1024 * 1024 * 1024){
                        poids_arrondi_octet=(parseInt( (fileInfo.size / (1024 * 1024)) * 10 , 10 ) / 10) + 'mo';
                    }else if(fileInfo.size < 1024 * 1024 * 1024 * 1024){
                        poids_arrondi_octet=(parseInt( (fileInfo.size / (1024 * 1024 * 1024)) * 10 , 10 ) / 10) + 'go';
                    }else{
                        poids_arrondi_octet=(parseInt( (fileInfo.size / (1024 * 1024 * 1024 * 1024)) * 10 , 10 ) / 10) + 'to';
                    }
                    /* this.__ig1.ma_trace1("poids_arrondi_octet="+poids_arrondi_octet); */
                    liste_des_fido.push( {
                            "type_element" : 'f' ,
                            "nom" : dirEntry.name ,
                            "present_en_base" : __xer ,
                            "chi_id_source" : 0 ,
                            "poids_octet" : fileInfo.size ,
                            "poids_arrondi_octet" : poids_arrondi_octet
                        } );
                }
            }
            if(__db1 === null){
                __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            }
            let tt341=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chp_nom_source` , `T0`.`chi_id_source`
             FROM b1.tbl_sources T0
            WHERE `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
            ;
            */
            /*sql_inclure_fin*/ 341 , {"T0_chx_dossier_id_source" : chi_id_dossier} , this.__ig1.donnees_retournees , __db1 );
            if(tt341.__xst === __xsu){
                for(let k1 in liste_des_fido){
                    let v1=liste_des_fido[k1];
                    if(v1['type_element'] === 'f'){
                        for(let k2 in tt341[__xva]){
                            let v2=tt341[__xva][k2];
                            if(v2['T0.chp_nom_source'] === v1['nom']){
                                liste_des_fido[k1]['present_en_base']=__xsu;
                                liste_des_fido[k1]['chi_id_source']=v2['T0.chi_id_source'];
                                break;
                            }
                        }
                    }
                }
            }
            let tt169=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
            WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
            ;
            */
            /*sql_inclure_fin*/ 169 , {"T0_chx_parent_dossier" : chi_id_dossier} , this.__ig1.donnees_retournees , __db1 );
            if(tt169.__xst === __xsu){
                for(let k1 in liste_des_fido){
                    let v1=liste_des_fido[k1];
                    if(v1['type_element'] === 'd'){
                        for(let k2 in tt169[__xva]){
                            let v2=tt169[__xva][k2];
                            if(v2['T0.chp_nom_dossier'] === v1['nom']){
                                liste_des_fido[k1]['present_en_base']=__xsu;
                                liste_des_fido[k1]['chi_id_source']=v2['T0.chi_id_dossier'];
                                break;
                            }
                        }
                    }
                }
            }
        }else{
            this.__ig1.donnees_retournees.__xsi[__xif].push( ' "' + obj[__xva].chemin_absolu + '" n\'existe pas sur le disque :  [' + this.__ig1.nl2() + ']' );
        }
        this.__ig1.donnees_retournees[__xva]['liste_des_fido']=liste_des_fido;
        this.__ig1.donnees_retournees[__xva]['chi_id_dossier']=chi_id_dossier;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_dossier_vide( chemin ){
        if(!this.__ig1.is_dir( chemin )){
            return({"__xst" : __xsu ,"__xva" : {"chemin" : chemin ,"existe" : __xer}});
        }
        let tt=await this.__ig1.scandir( chemin );
        return({"__xst" : tt.length === 0 ? ( __xsu ) : ( __xer ) ,"__xva" : {"chemin" : chemin ,"existe" : __xsu}});
    }
    /*
      =============================================================================================================
    */
    async tester_arbre_dossier( __db1 , nom_de_dossier , chx_parent_dossier , id_actuel=null ){
        /*
          on ne peut pas placer un dossier 
          dans lui même 
          ou dans une sous branche de lui même
        */
        if(nom_de_dossier == ''){
            return({"__xst" : __xer ,"__xme" : 'le nom de dossier ne doit pas être vide [' + this.__ig1.nl2() + ']'});
        }
        for( let i=0 ; i < nom_de_dossier.length ; i++ ){
            let c=nom_de_dossier.substr( i , 1 );
            if(c >= 'a' && c <= 'z' || c === '_' || c >= '0' && c <= '9'){
            }else{
                return({
                        "__xst" : __xer ,
                        "__xme" : 'le nom de dossier doit comporter que les caractères minuscules entre a et z ou bien le caractère souligné "_" [' + this.__ig1.nl2() + ']'
                    });
            }
        }
        if(chx_parent_dossier === null
               || chx_parent_dossier === 0
               || chx_parent_dossier === ''
               || !this.__ig1.est_num( chx_parent_dossier )
        ){
            return({"__xst" : __xer ,"__xme" : 'un dossier parent doit être indiqué  [' + this.__ig1.nl2() + ']'});
        }
        if(id_actuel === chx_parent_dossier){
            return({"__xst" : __xer ,"__xme" : 'un dossier ne peut être déplacé dans lui même   [' + this.__ig1.nl2() + ']'});
        }
        /*#
          en modification
          4 a
           5 b 
            6 c
             7 d
          b(5=id_actuel) ne peut être mis sous c(6=chx_parent_dossier) ou  sous d(7=chx_parent_dossier)
        */
        if(id_actuel !== null){
            /* 2 */
            id_actuel=parseInt( id_actuel , 10 );
            /*
              il faut vérifier que chx_parent_dossier n'est pas sous id_actuel 
              => on remonte les parents de chx_parent_dossier et si on trouve id_actuel ==> bug
              on s'arrête quand chx_parent_dossier = null
            */
            let tt386=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : chx_parent_dossier} , this.__ig1.donnees_retournees , __db1 );
            let continuer=30;
            do{
                continuer--;
                if(tt386.__xst === __xsu){
                    if(tt386[__xva][0]['T0.chx_parent_dossier'] === id_actuel){
                        continuer=0;
                        return({"__xst" : __xer ,"__xme" : 'un dossier ne peut être déplacé sous un de ses enfants [' + this.__ig1.nl2() + ']'});
                    }else{
                        if(tt386[__xva][0]['T0.chx_parent_dossier'] === null){
                            continuer=0;
                            break;
                        }else{
                            let tempo=parseInt( tt386[__xva][0]['T0.chx_parent_dossier'] , 10 );
                            if(tempo === 1){
                                return({"__xst" : __xsu});
                            }
                            tt386=null;
                            tt386=await this.__ig1.sql_iii(
                            /*sql_inclure_deb*/ /*#
                            SELECT 
                            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
                             FROM b1.tbl_dossiers T0
                             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                            
                            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                            ;
                            */
                            /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : tempo} , this.__ig1.donnees_retournees , __db1 );
                        }
                    }
                }else{
                    return({"__xst" : __xer ,"__xme" : 'problème sur les dossiers parents [' + this.__ig1.nl2() + ']'});
                }
            }while(continuer > 0);
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer_le_dossier_sur_disque( mat , d ){
        let chi_id_dossier=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        if(chi_id_dossier > 0){
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            if((await this.__ig1.is_dir( obj[__xva]['chemin_absolu'] ))){
                return({"__xst" : __xer ,"__xme" : 'Le dossier existe déjà sur disque [' + this.__ig1.nl2() + ']'});
            }else{
                try{
                    await Deno.mkdir( obj[__xva]['chemin_absolu'] , {"mode" : 0o777} );
                    this.__ig1.donnees_retournees.__xsi[__xif].push( 'le dossier a été créé du disque [' + this.__ig1.nl2() + ']' );
                    await this.liste_des_fidos( 1 , __db1 );
                    return({"__xst" : __xsu});
                }catch(e){
                    return({"__xst" : __xer ,"__xme" : 'Erreur lors de la création du dossier [' + this.__ig1.nl2( e ) + ']'});
                }
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async integrer_ce_fichier_dans_les_sources( mat , d ){
        /*
          $this.__ig1.donnees_retournees.__xsi[__xdv][]='$mat =<pre>'.var_export( $mat , true ).'</pre> [' . __LINE__ . ']';
        */
        let chi_id_dossier=0;
        let chp_nom_source='';
        let che_binaire_source=0;
        let provenance='';
        let liste1=0;
        let l01=mat.length;
        /* this.__ig1.donnees_retournees.__xsi[__xdv][]='mat ='.json_encode( mat  , JSON_FORCE_OBJECT ); */
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i][1] === 'che_binaire_source'){
                che_binaire_source=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'provenance' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                provenance=mat[i + 1][1];
            }else if(mat[i][1] === 'liste1' && mat[i][2] === 'f'){
                liste1=i;
            }else if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(mat[i][1] === 'chi_id_dossier'){
                    chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
                }else if(mat[i][1] === 'chp_nom_source'){
                    chp_nom_source=mat[i + 1][1];
                }
            }
        }
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            let chemin_fichier=obj[__xva]['chemin_absolu'] + '/' + chp_nom_source;
            let nouveau_nom='';
            for( let i=0 ; i < chp_nom_source.length ; i++ ){
                let c=chp_nom_source.substr( i , 1 );
                if(c >= '0' && c <= '9' || c >= 'a' && c <= 'z' || c === '_' || c === '.'){
                    nouveau_nom+=c;
                }else{
                    nouveau_nom+='_';
                }
            }
            if(nouveau_nom !== chp_nom_source){
                try{
                    await Deno.rename( obj[__xva]['chemin_absolu'] + '/' + chp_nom_source , obj[__xva]['chemin_absolu'] + '/' + nouveau_nom );
                    chemin_fichier=obj[__xva]['chemin_absolu'] + '/' + nouveau_nom;
                }catch(e){
                    return({"__xst" : __xer ,"__xme" : 'le fichier n\'a pas pu être renommé car il comporte des caractères interdits [' + this.__ig1.nl2() + ']'});
                }
            }
            let contenu_fichier='';
            if(!(che_binaire_source === 1 || this.__ig1.donnees_retournees.chi_id_projet === 1)){
                contenu_fichier=await this.__ig1.file_get_contents( chemin_fichier );
            }
            /* this.__ig1.ma_trace1( 'contenu_fichier="' + contenu_fichier + '"' ); */
            let donnees_sql={
                "donnees" : [{
                            "chp_nom_source" : nouveau_nom ,
                            "chx_dossier_id_source" : chi_id_dossier ,
                            "cht_commentaire_source" : null ,
                            "cht_rev_source" : null ,
                            "cht_genere_source" : contenu_fichier ,
                            "che_binaire_source" : che_binaire_source ,
                            "che_autorisation_globale_source" : 0 ,
                            "chp_usage_source" : 'fichier'
                        }]
            };
            /* this.__ig1.ma_trace1( 'che_binaire_source=' , che_binaire_source ); */
            /* this.__ig1.ma_trace1( '__db1=' ); */
            let tt420=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_sources`(
                `chx_dossier_id_source` , 
                `chp_nom_source` , 
                `cht_commentaire_source` , 
                `cht_rev_source` , 
                `cht_genere_source` , 
                `che_binaire_source` , 
                `chp_usage_source`
            ) VALUES (
                :chx_dossier_id_source , 
                :chp_nom_source , 
                :cht_commentaire_source , 
                :cht_rev_source , 
                :cht_genere_source , 
                :che_binaire_source , 
                :chp_usage_source
            );
            */
            /*sql_inclure_fin*/ 420 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
            if(tt420.__xst !== __xsu){
                this.__ig1.donnees_retournees.__xsi[__xer].push( 'le fichier n\'a pas pu être intégré [' + this.__ig1.nl2() + ']' );
                return({"__xst" : __xer ,"__xme" : tt420.__xme});
            }
            await this.liste_des_fidos( chi_id_dossier , __db1 );
            if(provenance === 'racine' && liste1 > 0){
                d=liste1;
                await this.filtre1( mat , d , __db1 );
                return({"__xst" : __xsu});
            }
            return({"__xst" : __xsu});
        }else{
            return({"__xst" : __xer ,"__xme" : 'il y a eu un problème [' + this.__ig1.nl2() + ']'});
        }
    }
    /*
      =============================================================================================================
    */
    async supprimer_un_dossier_du_disque( mat , d ){
        let chi_id_dossier=0;
        let chp_nom_dossier='';
        let che_binaire_source=0;
        let provenance='';
        let liste1=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][8] === 0 && mat[i][1] === 'che_binaire_source'){
                che_binaire_source=int( mat[i + 1][1] );
            }else if(mat[i][1] === 'provenance' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                provenance=mat[i + 1][1];
            }else if(mat[i][1] === 'liste1' && mat[i][2] === 'f'){
                liste1=i;
            }else if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(mat[i][1] === 'chi_id_dossier'){
                    chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
                }else if(mat[i][1] === 'chp_nom_dossier'){
                    chp_nom_dossier=mat[i + 1][1];
                }
            }
        }
        if(chi_id_dossier > 0 && chp_nom_dossier !== ''){
            let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
            let obj=await this.construire_chemin( chi_id_dossier , __db1 );
            if(obj.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
            }
            let chemin_dossier=obj[__xva]['chemin_absolu'] + chp_nom_dossier;
            try{
                await Deno.remove( chemin_dossier );
                this.__ig1.donnees_retournees.__xsi[__xsu].push( 'le dossier a été supprimé du disque [' + this.__ig1.nl2() + ']' );
                await this.liste_des_fidos( chi_id_dossier , __db1 );
                if(provenance === 'racine' && liste1 > 0){
                    d=liste1;
                    await this.filtre1( mat , d );
                }
                return({"__xst" : __xsu});
            }catch(e){}
        }
    }
    /*
      =============================================================================================================
    */
    async integrer_ce_dossier1( mat , d ){
        let chx_parent_dossier=-1;
        let chp_nom_dossier='';
        let provenance='';
        let liste1=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chx_parent_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chx_parent_dossier=parseInt( mat[i + 1][1] , 10 );
            }else if(mat[i][1] === 'chp_nom_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chp_nom_dossier=mat[i + 1][1];
            }else if(mat[i][1] === 'provenance' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                provenance=mat[i + 1][1];
            }else if(mat[i][1] === 'liste1' && mat[i][2] === 'f'){
                liste1=i;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        if(chp_nom_dossier !== '' && chx_parent_dossier > 0){
            let donnees_sql={"donnees" : [{"chp_nom_dossier" : chp_nom_dossier ,"chx_parent_dossier" : chx_parent_dossier}]};
            let tt378=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_dossiers`(
                `chp_nom_dossier` , 
                `chx_parent_dossier`
            ) VALUES (
                :chp_nom_dossier , 
                :chx_parent_dossier
            );
            */
            /*sql_inclure_fin*/ 378 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
            let obj=await this.construire_chemin( chx_parent_dossier , __db1 );
            if(obj.__xst === __xsu){
                let chemin_absolu=obj[__xva]['chemin_absolu'];
                await this.liste_des_fidos( chx_parent_dossier , __db1 );
                if(provenance === 'racine' && liste1 > 0){
                    d=liste1;
                    await this.filtre1( mat , d );
                }
                return({"__xst" : __xsu});
            }else{
                return({"__xst" : __xer ,"__xme" : obj.__xme});
            }
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , __xva_avant , __db1 ){
        let obj=await this.liste_des_fidos( __xva_avant['T0.chi_id_dossier'] , __db1 );
        if(obj.__xst === __xsu){
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        /*  */
        let obj_construire_chemin_ancien_de_parent=await this.construire_chemin( __xva_avant['T0.chx_parent_dossier'] , __db1 );
        if(obj_construire_chemin_ancien_de_parent.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'le chemin absolu ancien n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
        }
        let chemin_absolu_ancien_nom=obj_construire_chemin_ancien_de_parent[__xva]['chemin_absolu'] + __xva_avant['T0.chp_nom_dossier'];
        let obj_construire_chemin_nouveau=await this.construire_chemin( form['chx_parent_dossier'] , __db1 );
        if(obj_construire_chemin_nouveau.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
        }
        let chemin_absolu_nouveau_nom=obj_construire_chemin_nouveau[__xva]['chemin_absolu'] + form['chp_nom_dossier'];
        if(chemin_absolu_nouveau_nom !== chemin_absolu_ancien_nom){
            if((await this.__ig1.is_dir( chemin_absolu_nouveau_nom ))){
                return({"__xst" : __xer ,"__xme" : 'Il existe déjà sur le disque un dossier portant ce nom [' + this.__ig1.nl2() + ']'});
            }
        }
        if(chemin_absolu_ancien_nom !== chemin_absolu_nouveau_nom){
            /* Si on a renommé le dossier */
            if((await this.__ig1.is_dir( chemin_absolu_ancien_nom ))){
                try{
                    await Deno.rename( chemin_absolu_ancien_nom , chemin_absolu_nouveau_nom );
                }catch(e){
                    return({"__xst" : __xer ,"__xme" : 'le dossier n\'a pas pu être renommé [' + this.__ig1.nl2( e ) + ']'});
                }
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , form , __xva_avant , __db1 ){
        return(await this.tester_arbre_dossier( __db1 , form['chp_nom_dossier'] , form['chx_parent_dossier'] , form['chi_id_dossier'] ));
    }
    /*
      =============================================================================================================
    */
    async actions_apres_modifier( mat , d , form , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async modifier1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /*  */
        /* conversion des données numériques début */
        form['chi_id_dossier']=form['chi_id_dossier'] === null ? ( null ) : ( parseInt( form['chi_id_dossier'] , 10 ) );
        form['chx_parent_dossier']=form['chx_parent_dossier'] === null ? ( null ) : ( parseInt( form['chx_parent_dossier'] , 10 ) );
        /* conversion des données numériques fin */
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        /* sélection du champ à modifier */
        let criteres_select_386={"T0_chi_id_dossier" : form['chi_id_dossier']};
        let tt386=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_select_386 , this.__ig1.donnees_retournees , __db1 );
        if(tt386.__xst !== __xsu || tt386[__xva].length !== 1){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : aucune modification effectuée [386 ' + this.__ig1.nl2() + ']'});
        }
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , form , tt386[__xva][0] , __db1 );
        if(__actions_et_tests_avant_modifier.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __actions_et_tests_avant_modifier.__xme});
        }
        let donnees_sql={
            "c_chi_id_dossier" : form['chi_id_dossier'] ,
            "n_chp_nom_dossier" : form['chp_nom_dossier'] === '' ? ( NULL ) : ( form['chp_nom_dossier'] ) ,
            "n_chx_parent_dossier" : form['chx_parent_dossier']
        };
        /* =========================== mise à jour effective ======================== */
        let tt407=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_dossiers SET 
           `chp_nom_dossier` = :n_chp_nom_dossier , 
           `chx_parent_dossier` = :n_chx_parent_dossier
        WHERE `chi_id_dossier` = :c_chi_id_dossier ;
        */
        /*sql_inclure_fin*/ 407 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
        if(tt407.__xst !== __xsu || tt407.changements !== 1){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : tt407.__xme});
        }
        let __taam=await this.tests_et_actions_apres_modifier( mat , d , form , tt386[__xva][0] , __db1 );
        if(__taam.__xst !== __xsu){
            await __db1.exec( 'ROLLBACK;' );
            return({"__xst" : __xer ,"__xme" : __taam.__xme});
        }
        await __db1.exec( 'COMMIT;' );
        if(retour_a_la_liste === true){
            if(form['__mat_liste_si_ok']){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                let d=1;
                await this.filtre1( mat1 , 1 , __db1 );
            }
            return({"__xst" : __xsu});
        }
        let tt386_bis=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_select_386 , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt386_bis;
        await this.liste_des_fidos( form['chi_id_dossier'] , __db1 );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , chi_id_dossier=null , __db1=null ){
        if(chi_id_dossier === null){
            let l01=mat.length;
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][1] === 'chi_id_dossier'
                       && mat[i][2] === 'f'
                       && mat[i][8] === 1
                       && mat[i + 1][2] === 'c'
                       && mat[i + 1][4] === 0
                ){
                    chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }else{
            this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_dossier(' + chi_id_dossier + ')))))';
        }
        if(chi_id_dossier === null){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt386=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : chi_id_dossier} , this.__ig1.donnees_retournees , __db1 );
        if(tt386.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'enregistrement non trouvé : modification impossible [' + this.__ig1.nl2() + ']'});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , tt386[__xva][0] , __db1 );
        if(aetam.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : aetam.__xme});
        }
        this.__ig1.donnees_retournees[__xva]['page_modification1']=tt386;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , form , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer1( mat , d ){
        let retour_a_la_liste=false;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'retour_a_la_liste' && mat[i][2] === 'f'){
                retour_a_la_liste=true;
            }
        }
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tac=await this.tests_avant_creer( mat , d , form , __db1 );
        if(tac.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tac.__xme});
        }
        let donnees_sql={"donnees" : [{"chx_parent_dossier" : form['chx_parent_dossier'] ,"chp_nom_dossier" : form['chp_nom_dossier']}]};
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt378=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_dossiers`(
            `chp_nom_dossier` , 
            `chx_parent_dossier`
        ) VALUES (
            :chp_nom_dossier , 
            :chx_parent_dossier
        );
        */
        /*sql_inclure_fin*/ 378 , donnees_sql , this.__ig1.donnees_retournees , __db1 );
        if(tt378.__xst === __xsu){
            if(tt378['changements'] === 0){
                return({"__xst" : __xer ,"__xme" : 'l\'insertion a échoué [' + this.__ig1.nl2() + ']'});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , __db1 );
            }else{
                await this.page_modification1( mat , d , tt378['nouvel_id'] , __db1 );
            }
            return({"__xst" : __xsu});
        }else{
            return({"__xst" : __xer ,"__xme" : tt378.__xme + '\nl\'insertion a échoué [' + this.__ig1.nl2() + ']'});
        }
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , form , __xva_avant , __db1 ){
        let obj=await this.construire_chemin( __xva_avant['T0.chi_id_dossier'] , __db1 );
        if(obj.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'le chemin absolu n\'a pas pu être récupéré [' + this.__ig1.nl2() + ']'});
        }
        let obj2=await this.test_dossier_vide( obj[__xva]['chemin_absolu'] );
        if(obj2.__xst === __xsu){
            /*
              ok il est vide, on l'efface du disque
            */
            if((await this.__ig1.is_dir( obj[__xva]['chemin_absolu'] ))){
                try{
                    await Deno.remove( obj[__xva]['chemin_absolu'] );
                    this.__ig1.donnees_retournees.__xsi[__xsu].push( 'le dossier a été supprimé du disque [' + this.__ig1.nl2() + ']' );
                    return({"__xst" : __xsu});
                }catch(e){
                    return({"__xst" : __xer ,"__xme" : 'le dossier n\'a PAS été supprimé du disque [' + this.__ig1.nl2( e ) + ']'});
                }
            }else{
                /*
                  le dossier n'existe déjà plus sur le disque 
                */
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer ,"__xme" : 'le dossier n\'est pas vide [' + this.__ig1.nl2() + ']'});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d ){
        let nom_formulaire=this.__ig1.donnees_recues[__xva]['__co1'];
        let form=this.__ig1.donnees_recues[__xva]['__fo1'][nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(8)) */
        if(form['chi_id_dossier'] <= 9){
            return({"__xst" : __xer ,"__xme" : 'il n\'est pas possible de supprimer cet élément [' + this.__ig1.nl2() + ']'});
        }
        /*  */
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt386=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : form['chi_id_dossier']} , this.__ig1.donnees_retournees , __db1 );
        if(tt386.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : '[' + this.__ig1.nl2() + ']'});
        }
        let __tests_avant_supprimer=await this.test_avant_supprimer( mat , d , form , tt386[__xva][0] , __db1 );
        if(__tests_avant_supprimer.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : __tests_avant_supprimer.__xme});
        }
        let tt410=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_dossiers
        WHERE `chi_id_dossier` = :chi_id_dossier ;
        */
        /*sql_inclure_fin*/ 410 , {"chi_id_dossier" : form['chi_id_dossier']} , this.__ig1.donnees_retournees , __db1 );
        if(tt410.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt410.__xme});
        }
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , d , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d ){
        /*
          afr test de dépendance et répertoire non vide
        */
        let chi_id_dossier=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier'
                   && mat[i][2] === 'f'
                   && mat[i][8] === 1
                   && mat[i + 1][2] === 'c'
                   && mat[i + 1][4] === 0
            ){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_dossier === 0){
            return({"__xst" : __xer ,"__xme" : this.__ig1.nl2()});
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let tt386=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : chi_id_dossier} , this.__ig1.donnees_retournees , __db1 );
        this.__ig1.donnees_retournees[__xva]['page_confirmation_supprimer1']=tt386;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async filtre1( mat , d , __db1=null ){
        let l01=mat.length;
        let option_de_13='';
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'de_13' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                option_de_13='de_13(' + mat[i + 1][1] + ')';
            }
        }
        const __nbMax=40;
        let __num_page=0;
        let formulaire=this.__ig1.__fnt1.debut_filtre1( mat , d , this.fonction_liste );
        if(!formulaire.hasOwnProperty( '__num_page' ) || !this.__ig1.est_num( formulaire.__num_page )){
            __num_page=0;
        }else{
            __num_page=parseInt( formulaire.__num_page , 10 );
        }
        let __debut=__num_page * __nbMax;
        let criteres389={
             /*  */
            "quantitee" : __nbMax ,
            "debut" : __debut
        };
        for(let i in formulaire){
            if(i !== '__num_page'){
                criteres389[i]=formulaire[i];
            }
        }
        if(__db1 === null){
            __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        }
        let tt389=await this.__ig1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
           AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
           AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
           AND `T1`.`chp_nom_dossier` = :T1_chp_nom_dossier) 
        ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
        LIMIT :quantitee OFFSET :debut 
        ;
        */
        /*sql_inclure_fin*/ 389 , criteres389 , this.__ig1.donnees_retournees , __db1 );
        if(tt389.__xst !== __xsu){
            return({"__xst" : __xer ,"__xme" : tt389.__xme});
        }
        if(tt389.__xst === __xsu && tt389[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres389['debut']=__debut;
            tt389=await this.__ig1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE (`T0`.`chi_id_dossier` = :T0_chi_id_dossier
               AND `T0`.`chp_nom_dossier` LIKE :T0_chp_nom_dossier
               AND `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
               AND `T1`.`chp_nom_dossier` = :T1_chp_nom_dossier) 
            ORDER BY `T0`.`chx_parent_dossier` ASC, `T0`.`chp_nom_dossier` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/ 389 , criteres389 , this.__ig1.donnees_retournees , __db1 );
            if(tt389.__xst !== __xsu){
                return({"__xst" : __xer ,"__xme" : tt389.__xme});
            }
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__ig1 );
        let le_chemin={};
        for(let i in tt389.__xva){
            le_chemin=await o.construire_chemin( tt389.__xva[i]['T0.chi_id_dossier'] , __db1 );
            if(le_chemin.__xst !== __xsu){
                return({
                        "__xst" : __xer ,
                        "__xme" : ' erreur sur la construction du chemin ' + tt389.__xva[i]['T0.chi_id_dossier'] + '[' + this.__ig1.nl2() + ']'
                    });
            }
            tt389.__xva[i]['nom_chemin_relatif2']=le_chemin.__xva.nom_chemin_relatif2;
            le_chemin=await o.construire_chemin( tt389.__xva[i]['T0.chx_parent_dossier'] , __db1 );
            if(le_chemin.__xst !== __xsu){
                return({
                        "__xst" : __xer ,
                        "__xme" : ' erreur sur la construction du chemin ' + tt389.__xva[i]['T0.chx_parent_dossier'] + '[' + this.__ig1.nl2() + ']'
                    });
            }
            tt389.__xva[i]['parent_nom_chemin_relatif2']=le_chemin.__xva.nom_chemin_relatif2;
        }
        if(this.fonction_liste === 'liste1'){
            await this.liste_des_fidos( 1 , __db1 );
        }
        this.__ig1.donnees_retournees.__xva['__nbMax']=__nbMax;
        this.__ig1.donnees_retournees[__xva]['__debut']=__debut;
        this.__ig1.donnees_retournees[__xva]['__num_page']=__num_page;
        this.__ig1.donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(' + option_de_13;
        for(let i in formulaire){
            this.__ig1.donnees_retournees[__xac]+=this.__ig1.__fnt1.critere_liste( formulaire , i );
        }
        this.__ig1.donnees_retournees[__xac]+='))))';
        this.__ig1.donnees_retournees[__xva][this.fonction_liste]=tt389;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        const __nbMax=40;
        let criteres_389={};
        criteres_389['quantitee']=__nbMax;
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        let liste2=await this.__ig1.generique_sous_liste2( mat , d , 389 , criteres_389 , __nbMax , __db1 );
        if(liste2.__xst === __xsu){
            let m=await import( './dossiers1_s.js' );
            let o=new m['dossiers1']( this.__ig1 );
            let le_chemin={};
            for(let i in this.__ig1.donnees_retournees.__xva.sous_liste2.__xva){
                let elem=this.__ig1.donnees_retournees.__xva.sous_liste2.__xva[i];
                le_chemin=await o.construire_chemin( elem['T0.chi_id_dossier'] , __db1 );
                if(le_chemin.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin ' + elem['T0.chi_id_dossier'] + '[' + this.__ig1.nl2() + ']'});
                }
                this.__ig1.donnees_retournees.__xva.sous_liste2.__xva[i]['nom_chemin_relatif2']=le_chemin.__xva.nom_chemin_relatif2;
                le_chemin=await o.construire_chemin( elem['T0.chx_parent_dossier'] , __db1 );
                if(le_chemin.__xst !== __xsu){
                    return({"__xst" : __xer ,"__xme" : ' erreur sur la construction du chemin ' + elem['T0.chx_parent_dossier'] + '[' + this.__ig1.nl2() + ']'});
                }
                this.__ig1.donnees_retournees.__xva.sous_liste2.__xva[i]['parent_nom_chemin_relatif2']=le_chemin.__xva.nom_chemin_relatif2;
            }
        }
        return liste2;
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        this.fonction_liste='liste1';
        await this.filtre1( mat , d );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    moi='dossiers1';
    __ig1=null;
    fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{dossiers1 as dossiers1};