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
    async vv_dossiers_nouveau_numero1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_dossier_ancienne=0;
        let chi_id_dossier_nouvelle=0;
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        if(form['vv_nouveau_numero_de_dossier'] && this.__gi1.est_num( form['vv_nouveau_numero_de_dossier'] )){
            chi_id_dossier_nouvelle=parseInt( form['vv_nouveau_numero_de_dossier'] , 10 );
        }else{
            this.__gi1.__xsi[__xer].push( ' le nouveau numéro doit être numérique [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['vv_ancien_numero_de_dossier'] && this.__gi1.est_num( form['vv_ancien_numero_de_dossier'] )){
            chi_id_dossier_ancienne=parseInt( form['vv_ancien_numero_de_dossier'] , 10 );
        }else{
            this.__gi1.__xsi[__xer].push( 'l\'ancien numéro doit être numérique [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Récupération du dossier actuel.
        */
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let criteres_386_1={"T0_chi_id_dossier" : chi_id_dossier_ancienne};
        let tt386_1=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_386_1 , donnees_retournees , __db1 );
        if(tt386_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection du dossier ancien [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        /*
          Essai de récupération du nouveau dossier.
        */
        let criteres_386_2={"T0_chi_id_dossier" : chi_id_dossier_nouvelle};
        let tt386_2=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_386_2 , donnees_retournees , __db1 );
        if(tt386_2[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection du dossier nouveau [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt386_2[__xva].length >= 1){
            /*
              c'est une erreur si le dossier existe déjà en base.
            */
            this.__gi1.__xsi[__xer].push( 'le dossier portant le numéro ' + chi_id_dossier_nouvelle + ' existe déjà [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let criteres_406={"c_chi_id_dossier" : chi_id_dossier_ancienne ,"n_chi_id_dossier" : chi_id_dossier_nouvelle};
        let tt406=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        UPDATE b1.tbl_dossiers SET 
           `chi_id_dossier` = :n_chi_id_dossier
        WHERE `chi_id_dossier` = :c_chi_id_dossier ;
        */
        /*sql_inclure_fin*/ 406 , criteres_406 , donnees_retournees , __db1 );
        if(tt406[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de sélection du dossier ancien [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async construire_chemin( chi_id_dossier , donnees_retournees , options_generales , __db1 ){
        if(chi_id_dossier === 1){
            let chemin='';
            if(this.__gi1._CA_ === 2 && donnees_retournees['chi_id_projet'] === 1){
                /*
                  quand on est sur l'env 2, le chemin absolu commence en rev_2;
                */
                chemin='../rev_2/';
            }else{
                chemin='../rev_' + donnees_retournees['chi_id_projet'] + '/';
            }
            let nom_chemin_relatif2='/';
            let nom_chemin_relatif1=chemin.substr( 3 );
            let chemin_complet1=options_generales.repertoire_racine_de_tous_les_projets + nom_chemin_relatif1;
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
        let tt386=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : id_dossier} , donnees_retournees , __db1 );
        if(tt386[__xst] !== __xsu){
            return({"__xst" : __xer ,"__xme" : 'problème sur construire_chemin [' + this.__gi1.nl2() + ']'});
        }
        let chemin='';
        /*
          Petite protection pour éviter les boucles infinies.
        */
        let continuer=30;
        do{
            continuer--;
            if(tt386[__xst] === __xsu){
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
                        tt386=await this.__gi1.sql_iii(
                        /*sql_inclure_deb*/ /*#
                        SELECT 
                        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
                         FROM b1.tbl_dossiers T0
                         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                        
                        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                        ;
                        */
                        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : id_dossier} , donnees_retournees , __db1 );
                    }
                }
            }else{
                return({"__xst" : __xer ,"__xme" : 'problème sur construire_chemin [' + this.__gi1.nl2() + ']'});
            }
        }while(continuer > 0);
        tt386=null;
        let nom_chemin_relatif2='';
        if(this.__gi1._CA_ === 2 && donnees_retournees['chi_id_projet'] === 1){
            /*
              quand on est sur l'env 2, le chemin absolu commence en rev_2;
            */
            nom_chemin_relatif2=chemin;
            chemin='../rev_2' + chemin + '/';
        }else{
            nom_chemin_relatif2=chemin;
            chemin='../rev_' + donnees_retournees['chi_id_projet'] + chemin + '/';
        }
        let nom_chemin_relatif1=chemin.substr( 3 );
        let chemin_complet1=options_generales.repertoire_racine_de_tous_les_projets + nom_chemin_relatif1;
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
    async supprimer_un_fichier_du_disque( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let obj=await this.construire_chemin( chi_id_dossier , donnees_retournees , options_generales , __db1 );
            if(obj[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'le chemin absolu n\'a pas pu être récupéré [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let chemin_fichier=obj[__xva]['chemin_absolu'] + chp_nom_source;
            let obj2=await this.__gi1.__fnt1.sauvegarder_et_supprimer_fichier( chemin_fichier , donnees_retournees );
            if(obj2.__xst === __xsu){
                this.__gi1.__xsi[__xif].push( 'le fichier "' + chp_nom_source + '" a été supprimé du disque et sauvegardé  [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xsu;
                await this.liste_des_fidos( chi_id_dossier , donnees_retournees , options_generales , __db1 );
                if(provenance === 'racine' && liste1 > 0){
                    d=liste1;
                    await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }else{
                this.__gi1.__xsi[__xer].push( 'le fichier "' + chp_nom_source + '" n\'a PAS été supprimé du disque [' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async liste_des_fidos( chi_id_dossier , donnees_retournees , options_generales , __db1 ){
        let liste_des_fido=[];
        let obj=await this.construire_chemin( chi_id_dossier , donnees_retournees , options_generales , __db1 );
        if(obj.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( obj.__xme + ' sur chi_id_dossier=' + chi_id_dossier + ' [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let isd=false;
        try{
            isd=await this.__gi1.is_dir( obj[__xva].chemin_absolu );
        }catch(e){
            this.__gi1.__xsi[__xer].push( ' erreur sur is_dir=' + obj[__xva].chemin_absolu + ' [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(isd === true){
            for await (const dirEntry of Deno.readDir( obj[__xva].chemin_absolu )){
                if(dirEntry.isDirectory === true){
                    liste_des_fido.push( {"type_element" : 'd' ,"nom" : dirEntry.name ,"present_en_base" : __xer} );
                }else if(dirEntry.isFile === true){
                    liste_des_fido.push( {"type_element" : 'f' ,"nom" : dirEntry.name ,"present_en_base" : __xer} );
                }
            }
            if(__db1 === null){
                __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            }
            let tt341=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chp_nom_source`
             FROM b1.tbl_sources T0
            WHERE `T0`.`chx_dossier_id_source` = :T0_chx_dossier_id_source
            ;
            */
            /*sql_inclure_fin*/ 341 , {"T0_chx_dossier_id_source" : chi_id_dossier} , donnees_retournees , __db1 );
            if(tt341[__xst] === __xsu){
                for(let k1 in liste_des_fido){
                    let v1=liste_des_fido[k1];
                    if(v1['type_element'] === 'f'){
                        for(let k2 in tt341[__xva]){
                            let v2=tt341[__xva][k2];
                            if(v2['T0.chp_nom_source'] === v1['nom']){
                                liste_des_fido[k1]['present_en_base']=__xsu;
                                break;
                            }
                        }
                    }
                }
            }
            let tt169=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
            WHERE `T0`.`chx_parent_dossier` = :T0_chx_parent_dossier
            ;
            */
            /*sql_inclure_fin*/ 169 , {"T0_chx_parent_dossier" : chi_id_dossier} , donnees_retournees , __db1 );
            if(tt169[__xst] === __xsu){
                for(let k1 in liste_des_fido){
                    let v1=liste_des_fido[k1];
                    if(v1['type_element'] === 'd'){
                        for(let k2 in tt169[__xva]){
                            let v2=tt169[__xva][k2];
                            if(v2['T0.chp_nom_dossier'] === v1['nom']){
                                liste_des_fido[k1]['present_en_base']=__xsu;
                                break;
                            }
                        }
                    }
                }
            }
        }else{
            this.__gi1.__xsi[__xif].push( ' "' + obj[__xva].chemin_absolu + '" n\'existe pas sur le disque :  [' + this.__gi1.nl2() + ']' );
        }
        donnees_retournees[__xva]['liste_des_fido']=liste_des_fido;
        donnees_retournees[__xva]['chi_id_dossier']=chi_id_dossier;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async test_dossier_vide( chemin ){
        if(!this.__gi1.is_dir( chemin )){
            return({"__xst" : __xsu ,"__xva" : {"chemin" : chemin ,"existe" : __xer}});
        }
        let tt=await this.__gi1.scandir( chemin );
        return({"__xst" : tt.length === 0 ? ( __xsu ) : ( __xer ) ,"__xva" : {"chemin" : chemin ,"existe" : __xsu}});
    }
    /*
      =============================================================================================================
    */
    async tester_arbre_dossier( donnees_retournees , options_generales , __db1 , nom_de_dossier , chx_parent_dossier , id_actuel=null ){
        /*
          on ne peut pas placer un dossier 
          dans lui même 
          ou dans une sous branche de lui même
        */
        if(nom_de_dossier == ''){
            return({"__xst" : __xer ,"__xme" : 'le nom de dossier ne doit pas être vide [' + this.__gi1.nl2() + ']'});
        }
        for( let i=0 ; i < nom_de_dossier.length ; i++ ){
            let c=nom_de_dossier.substr( i , 1 );
            if(c >= 'a' && c <= 'z' || c === '_' || c >= '0' && c <= '9'){
            }else{
                return({
                        "__xst" : __xer ,
                        "__xme" : 'le nom de dossier doit comporter que les caractères minuscules entre a et z ou bien le caractère souligné "_" [' + this.__gi1.nl2() + ']'
                    });
            }
        }
        if(chx_parent_dossier === null
               || chx_parent_dossier === 0
               || chx_parent_dossier === ''
               || !this.__gi1.est_num( chx_parent_dossier )
        ){
            return({"__xst" : __xer ,"__xme" : 'un dossier parent doit être indiqué  [' + this.__gi1.nl2() + ']'});
        }
        if(id_actuel === chx_parent_dossier){
            return({"__xst" : __xer ,"__xme" : 'un dossier ne peut être déplacé dans lui même   [' + this.__gi1.nl2() + ']'});
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
            let tt386=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : chx_parent_dossier} , donnees_retournees , __db1 );
            let continuer=30;
            do{
                continuer--;
                if(tt386[__xst] === __xsu){
                    if(tt386[__xva][0]['T0.chx_parent_dossier'] === id_actuel){
                        continuer=0;
                        return({"__xst" : __xer ,"__xme" : 'un dossier ne peut être déplacé sous un de ses enfants [' + this.__gi1.nl2() + ']'});
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
                            tt386=await this.__gi1.sql_iii(
                            /*sql_inclure_deb*/ /*#
                            SELECT 
                            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
                             FROM b1.tbl_dossiers T0
                             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
                            
                            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
                            ;
                            */
                            /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : tempo} , donnees_retournees , __db1 );
                        }
                    }
                }else{
                    return({"__xst" : __xer ,"__xme" : 'problème sur les dossiers parents [' + this.__gi1.nl2() + ']'});
                }
            }while(continuer > 0);
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async creer_le_dossier_sur_disque( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let chi_id_dossier=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'chi_id_dossier' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_dossier=parseInt( mat[i + 1][1] , 10 );
            }
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        if(chi_id_dossier > 0){
            let obj=await this.construire_chemin( chi_id_dossier , donnees_retournees , options_generales , __db1 );
            if(obj[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'le chemin absolu n\'a pas pu être récupéré [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            if((await this.__gi1.is_dir( obj[__xva]['chemin_absolu'] ))){
                donnees_retournees.__xst=__xsu;
                this.__gi1.__xsi[__xal].push( 'Le dossier existe déjà sur disque [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }else{
                try{
                    await Deno.mkdir( obj[__xva]['chemin_absolu'] , {"mode" : 0o777} );
                    this.__gi1.__xsi[__xif].push( 'le dossier a été créé du disque [' + this.__gi1.nl2() + ']' );
                    donnees_retournees.__xst=__xsu;
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'Erreur lors de la création du dossier [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xsu;
                }
            }
        }
        await this.liste_des_fidos( 1 , donnees_retournees , options_generales , __db1 );
        return({"__xst" : donnees_retournees.__xst});
    }
    /*
      =============================================================================================================
    */
    async integrer_ce_fichier_dans_les_sources( mat , d , donnees_recues , donnees_retournees , options_generales ){
        /*
          $this.__gi1.__xsi[__xdv][]='$mat =<pre>'.var_export( $mat , true ).'</pre> [' . __LINE__ . ']';
        */
        let chi_id_dossier=0;
        let chp_nom_source='';
        let che_binaire_source=0;
        let provenance='';
        let liste1=0;
        let l01=mat.length;
        /* this.__gi1.__xsi[__xdv][]='mat ='.json_encode( mat  , JSON_FORCE_OBJECT ); */
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
                }else if(mat[i][1] === 'chp_nom_source'){
                    chp_nom_source=mat[i + 1][1];
                }
            }
        }
        if(chi_id_dossier > 0 && chp_nom_source !== ''){
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let obj=await this.construire_chemin( chi_id_dossier , donnees_retournees , options_generales , __db1 );
            if(obj[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'le chemin absolu n\'a pas pu être récupéré [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let chemin_fichier=obj[__xva]['chemin_absolu'] + '/' + chp_nom_source;
            let chemin_absolu=obj[__xva]['chemin_absolu'];
            let contenu_fichier='';
            if(!(che_binaire_source === 1 || donnees_retournees.chi_id_projet === 1)){
                contenu_fichier=await this.__gi1.file_get_contents( chemin_fichier );
            }
            this.__gi1.ma_trace1( 'contenu_fichier="' + contenu_fichier + '"' );
            let donnees_sql={
                "donnees" : [{
                            "chp_nom_source" : chp_nom_source ,
                            "chx_dossier_id_source" : chi_id_dossier ,
                            "cht_commentaire_source" : null ,
                            "cht_rev_source" : null ,
                            "cht_genere_source" : contenu_fichier ,
                            "che_binaire_source" : che_binaire_source ,
                            "che_autorisation_globale_source" : 0
                        }]
            };
            this.__gi1.ma_trace1( '__db1=' );
            let tt117=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_sources`(
                `chx_dossier_id_source` , 
                `chp_nom_source` , 
                `cht_commentaire_source` , 
                `cht_rev_source` , 
                `cht_genere_source` , 
                `che_binaire_source`
            ) VALUES (
                :chx_dossier_id_source , 
                :chp_nom_source , 
                :cht_commentaire_source , 
                :cht_rev_source , 
                :cht_genere_source , 
                :che_binaire_source
            );
            */
            /*sql_inclure_fin*/ 117 , donnees_sql , donnees_retournees , __db1 );
            if(tt117[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'le fichier n\'a pas pu être intégré [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await this.liste_des_fidos( chi_id_dossier , donnees_retournees , options_generales , __db1 );
            if(provenance === 'racine' && liste1 > 0){
                d=liste1;
                await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
                return({"__xst" : __xsu});
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( 'il y a eu un problème [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async supprimer_un_dossier_du_disque( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
            let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
            let obj=await this.construire_chemin( chi_id_dossier , donnees_retournees , options_generales , __db1 );
            if(obj[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( 'le chemin absolu n\'a pas pu être récupéré [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            let chemin_dossier=obj[__xva]['chemin_absolu'] + chp_nom_dossier;
            try{
                await Deno.remove( chemin_dossier );
                this.__gi1.__xsi[__xsu].push( 'le dossier a été supprimé du disque [' + this.__gi1.nl2() + ']' );
                await this.liste_des_fidos( chi_id_dossier , donnees_retournees , options_generales , __db1 );
                if(provenance === 'racine' && liste1 > 0){
                    d=liste1;
                    await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
                }
                return({"__xst" : __xsu});
            }catch(e){}
        }
    }
    /*
      =============================================================================================================
    */
    async integrer_ce_dossier1( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        if(chp_nom_dossier !== '' && chx_parent_dossier > 0){
            let donnees_sql={"donnees" : [{"chp_nom_dossier" : chp_nom_dossier ,"chx_parent_dossier" : chx_parent_dossier}]};
            let tt378=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            INSERT INTO b1.`tbl_dossiers`(
                `chp_nom_dossier` , 
                `chx_parent_dossier`
            ) VALUES (
                :chp_nom_dossier , 
                :chx_parent_dossier
            );
            */
            /*sql_inclure_fin*/ 378 , donnees_sql , donnees_retournees , __db1 );
            let obj=await this.construire_chemin( chx_parent_dossier , donnees_retournees , options_generales , __db1 );
            if(obj[__xst] === __xsu){
                let chemin_absolu=obj[__xva]['chemin_absolu'];
                await this.liste_des_fidos( chx_parent_dossier , donnees_retournees , options_generales , __db1 );
                if(provenance === 'racine' && liste1 > 0){
                    d=liste1;
                    await this.filtre1( mat , d , donnees_recues , donnees_retournees , options_generales );
                }
                donnees_retournees.__xst=__xsu;
                return({"__xst" : __xsu});
            }else{
                this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , __xva_avant , __db1 ){
        let obj=await this.liste_des_fidos( __xva_avant['T0.chi_id_dossier'] , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] === __xsu){
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*  */
        let obj_construire_chemin_ancien_de_parent=await this.construire_chemin( __xva_avant['T0.chx_parent_dossier'] , donnees_retournees , options_generales , __db1 );
        if(obj_construire_chemin_ancien_de_parent[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'le chemin absolu ancien n\'a pas pu être récupéré [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_absolu_ancien_nom=obj_construire_chemin_ancien_de_parent[__xva]['chemin_absolu'] + __xva_avant['T0.chp_nom_dossier'];
        let obj_construire_chemin_nouveau=await this.construire_chemin( form['chx_parent_dossier'] , donnees_retournees , options_generales , __db1 );
        if(obj_construire_chemin_nouveau[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'le chemin absolu n\'a pas pu être récupéré [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let chemin_absolu_nouveau_nom=obj_construire_chemin_nouveau[__xva]['chemin_absolu'] + form['chp_nom_dossier'];
        if(chemin_absolu_nouveau_nom !== chemin_absolu_ancien_nom){
            if((await this.__gi1.is_dir( chemin_absolu_nouveau_nom ))){
                this.__gi1.__xsi[__xer].push( 'Il existe déjà sur le disque un dossier portant ce nom [' + this.__gi1.nl2() );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
        }
        if(chemin_absolu_ancien_nom !== chemin_absolu_nouveau_nom){
            /* Si on a renommé le dossier */
            if((await this.__gi1.is_dir( chemin_absolu_ancien_nom ))){
                try{
                    await Deno.rename( chemin_absolu_ancien_nom , chemin_absolu_nouveau_nom );
                }catch(e){
                    this.__gi1.__xsi[__xer].push( 'le dossier n\'a pas pu être renommé [' + this.__gi1.nl2( e ) );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        /*
          dans le cas où pour_les_js = 1, il faut vérifier que :
          1°] il est au bon format [ __j_AAAAMMJJ_HHMMSS_ ]
          2°] qu'il est unique dans la base
        */
        let obj=await this.tester_arbre_dossier( donnees_retournees , options_generales , __db1 , form['chp_nom_dossier'] , form['chx_parent_dossier'] , form['chi_id_dossier'] );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( obj['__xme'] );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async actions_apres_modifier( mat , d , donnees_retournees , donnees_recues , form , __xva_avant , __db1 ){
        /* this.__gi1.__xsi[__xdv][]='<pre>'.var_export( __xva_avant , true ) .'</pre> [' . __LINE__ . ']'; */
        /* return(array(__xst=>__xer)); */
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
        form['chi_id_dossier']=form['chi_id_dossier'] === null ? ( null ) : ( parseInt( form['chi_id_dossier'] , 10 ) );
        form['chx_parent_dossier']=form['chx_parent_dossier'] === null ? ( null ) : ( parseInt( form['chx_parent_dossier'] , 10 ) );
        /* conversion des données numériques fin */
        let __test_0_1=this.__gi1.__fnt1.test_du_nom_de_fichier1( form['chp_nom_dossier'] , 'nom' );
        if(__test_0_1[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'erreur sur le contenu de "nom" [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(form['chx_parent_dossier'] === null || form['chx_parent_dossier'] === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "parent" doit être renseigné [' + this.__gi1.nl2() + ']' );
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
        let criteres_select_386={"T0_chi_id_dossier" : form['chi_id_dossier']};
        let tt386=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , criteres_select_386 , donnees_retournees , __db1 );
        if(tt386[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : aucune modification effectuée [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        if(tt386[__xst] === __xsu && tt386[__xva].length === 1){
            let __actions_et_tests_avant_modifier=await this.actions_et_tests_avant_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt386[__xva][0] , __db1 );
            if(__actions_et_tests_avant_modifier[__xst] !== __xsu){
                return({"__xst" : __xer});
            }
            let donnees_sql={
                "c_chi_id_dossier" : form['chi_id_dossier'] ,
                "n_chp_nom_dossier" : form['chp_nom_dossier'] === '' ? ( NULL ) : ( form['chp_nom_dossier'] ) ,
                "n_chx_parent_dossier" : form['chx_parent_dossier']
            };
            await __db1.exec( 'BEGIN TRANSACTION;' );
            let tt407=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            UPDATE b1.tbl_dossiers SET 
               `chp_nom_dossier` = :n_chp_nom_dossier , 
               `chx_parent_dossier` = :n_chx_parent_dossier
            WHERE `chi_id_dossier` = :c_chi_id_dossier ;
            */
            /*sql_inclure_fin*/ 407 , donnees_sql , donnees_retournees , __db1 );
            if(tt407[__xst] !== __xsu){
                if(tt407['__xme'] !== ''){
                    this.__gi1.__xsi[__xer].push( tt407['__xme'] + ' [' + this.__gi1.nl2() );
                }else{
                    this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                }
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            let __taam=await this.tests_et_actions_apres_modifier( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt386[__xva][0] , __db1 );
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
            let tt386_bis=await this.__gi1.sql_iii(
            /*sql_inclure_deb*/ /*#
            SELECT 
            `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
             FROM b1.tbl_dossiers T0
             LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
            
            WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
            ;
            */
            /*sql_inclure_fin*/ 386 , criteres_select_386 , donnees_retournees , __db1 );
            donnees_retournees[__xva]['page_modification1']=tt386_bis;
        }else{
            donnees_retournees[__xva]['page_modification1']=tt386;
        }
        await this.liste_des_fidos( form['chi_id_dossier'] , donnees_retournees , options_generales , __db1 );
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , chi_id_dossier=null , __db1=null ){
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
            donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(page_modification1(chi_id_dossier(' + chi_id_dossier + ')))))';
        }
        if(chi_id_dossier === null){
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        if(__db1 === null){
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt386=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : chi_id_dossier} , donnees_retournees , __db1 );
        if(tt386[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'enregistrement non trouvé : modification impossible [' + this.__gi1.nl2() );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        let aetam=await this.actions_et_tests_apres_page_modifications( mat , d , donnees_recues , donnees_retournees , options_generales , tt386[__xva][0] , __db1 );
        if(aetam[__xst] !== __xsu){
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
        donnees_retournees[__xva]['page_modification1']=tt386;
        donnees_retournees.__xst=__xsu;
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 ){
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
        if(!form.hasOwnProperty( 'chp_nom_dossier' ) || form['chp_nom_dossier'] === null || form['chp_nom_dossier'].trim() === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur pour "nom" doit être renseignée ' );
            return({"__xst" : __xer});
        }
        if(!form.hasOwnProperty( 'chx_parent_dossier' ) || form.chx_parent_dossier === ''){
            this.__gi1.__xsi[__xer].push( 'la valeur "parent" doit être renseigné s[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tac=await this.tests_avant_creer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __db1 );
        if(tac[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let donnees_sql={"donnees" : [{"chx_parent_dossier" : form['chx_parent_dossier'] ,"chp_nom_dossier" : form['chp_nom_dossier']}]};
        await __db1.exec( 'BEGIN TRANSACTION;' );
        let tt378=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        INSERT INTO b1.`tbl_dossiers`(
            `chp_nom_dossier` , 
            `chx_parent_dossier`
        ) VALUES (
            :chp_nom_dossier , 
            :chx_parent_dossier
        );
        */
        /*sql_inclure_fin*/ 378 , donnees_sql , donnees_retournees , __db1 );
        if(tt378[__xst] === __xsu){
            if(tt378['changements'] === 0){
                this.__gi1.__xsi[__xer].push( 'l\'insertion a échoué [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
            await __db1.exec( 'COMMIT;' );
            if(retour_a_la_liste === true && form['__mat_liste_si_ok'] !== ''){
                let mat1=JSON.parse( form['__mat_liste_si_ok'] );
                await this.filtre1( mat1 , 1 , donnees_recues , donnees_retournees , options_generales , __db1 );
            }else{
                await this.page_modification1( mat , d , donnees_recues , donnees_retournees , options_generales , tt378['nouvel_id'] , __db1 );
            }
            donnees_retournees.__xst=__xsu;
            return({"__xst" : __xsu});
        }else{
            this.__gi1.__xsi[__xer].push( tt378['__xme'] + '\nl\'insertion a échoué [' + this.__gi1.nl2() + ']' );
            donnees_retournees.__xst=__xer;
            return({"__xst" : __xer});
        }
    }
    /*
      =============================================================================================================
    */
    async test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , __xva_avant , __db1 ){
        let obj=await this.construire_chemin( __xva_avant['T0.chi_id_dossier'] , donnees_retournees , options_generales , __db1 );
        if(obj[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'le chemin absolu n\'a pas pu être récupéré [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let obj2=await this.test_dossier_vide( obj[__xva]['chemin_absolu'] );
        if(obj2[__xst] === __xsu){
            /*
              ok il est vide, on l'efface du disque
            */
            if((await this.__gi1.is_dir( obj[__xva]['chemin_absolu'] ))){
                try{
                    await Deno.remove( obj[__xva]['chemin_absolu'] );
                    this.__gi1.__xsi[__xsu].push( 'le dossier a été supprimé du disque [' + this.__gi1.nl2() + ']' );
                    return({"__xst" : __xsu});
                }catch(e){
                    this.__gi1.__xsi[__xsu].push( 'le dossier n\'a PAS été supprimé du disque [' + this.__gi1.nl2( e ) + ']' );
                    return({"__xst" : __xer});
                }
            }else{
                /*
                  le dossier n'existe déjà plus sur le disque 
                */
                return({"__xst" : __xsu});
            }
        }else{
            this.__gi1.__xsi[__xer].push( 'le dossier n\'est pas vide [' + this.__gi1.nl2() + ']' );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    async supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
        let nom_formulaire=donnees_recues[__xva]['__co1'];
        let form=donnees_recues[__xva]['__fo1'][nom_formulaire];
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt386=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : form['chi_id_dossier']} , donnees_retournees , __db1 );
        if(tt386[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( '[' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        let __tests_avant_supprimer=await this.test_avant_supprimer( mat , d , donnees_recues , donnees_retournees , options_generales , form , tt386[__xva][0] , __db1 );
        if(__tests_avant_supprimer[__xst] !== __xsu){
            return({"__xst" : __xer});
        }
        let tt410=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        DELETE FROM b1.tbl_dossiers
        WHERE `chi_id_dossier` = :chi_id_dossier ;
        */
        /*sql_inclure_fin*/ 410 , {"chi_id_dossier" : form['chi_id_dossier']} , donnees_retournees , __db1 );
        if(tt410[__xst] !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur lors de le suppression [' + this.__gi1.nl2() + ']' );
            this.__gi1.ma_trace1( 'donnees_retournees.__xsi[__xer]=' , donnees_retournees.__xsi[__xer] );
            return({"__xst" : __xer});
        }
        if(form['__mat_liste_si_ok'] !== ''){
            let mat1=JSON.parse( form['__mat_liste_si_ok'] );
            await this.filtre1( mat1 , d , donnees_recues , donnees_retournees , options_generales , __db1 );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async page_confirmation_supprimer1( mat , d , donnees_recues , donnees_retournees , options_generales ){
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
            this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
            return({"__xst" : __xer});
        }
        let __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        let tt386=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_dossier` , `T0`.`chp_nom_dossier` , `T0`.`chx_parent_dossier` , `T1`.`chp_nom_dossier`
         FROM b1.tbl_dossiers T0
         LEFT JOIN b1.tbl_dossiers T1 ON T1.chi_id_dossier = T0.chx_parent_dossier
        
        WHERE `T0`.`chi_id_dossier` = :T0_chi_id_dossier
        ;
        */
        /*sql_inclure_fin*/ 386 , {"T0_chi_id_dossier" : chi_id_dossier} , donnees_retournees , __db1 );
        donnees_retournees[__xva]['page_confirmation_supprimer1']=tt386;
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
            __db1=await this.__gi1.ouvrir_bdd( options_generales.base_de_travail , donnees_retournees , options_generales );
        }
        let tt389=await this.__gi1.sql_iii(
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
        /*sql_inclure_fin*/ 389 , criteres389 , donnees_retournees , __db1 );
        if(tt389.__xst !== __xsu){
            this.__gi1.__xsi[__xer].push( 'Erreur de lecture de liste 1 [' + this.__gi1.nl2() + ']' );
            return({"__xst" : __xer});
        }
        if(tt389[__xst] === __xsu && tt389[__xva].length === 0 && __debut > 0){
            __debut=0;
            __num_page=0;
            criteres389['debut']=__debut;
            let tt389=await this.__gi1.sql_iii(
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
            /*sql_inclure_fin*/ 389 , criteres389 , donnees_retournees , __db1 );
            if(tt389.__xst !== __xsu){
                this.__gi1.__xsi[__xer].push( 'Erreur de lecture de liste 2 [' + this.__gi1.nl2() + ']' );
                return({"__xst" : __xer});
            }
        }
        let m=await import( './dossiers1_s.js' );
        let o=new m['dossiers1']( this.__gi1 );
        let le_chemin={};
        for(let i in tt389.__xva){
            le_chemin=await o.construire_chemin( tt389.__xva[i]['T0.chi_id_dossier'] , donnees_retournees , options_generales , __db1 );
            if(le_chemin[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + __xva_avant[les_chemins[i]] + '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            tt389.__xva[i]['nom_chemin_relatif2']=le_chemin.__xva.nom_chemin_relatif2;
            le_chemin=await o.construire_chemin( tt389.__xva[i]['T0.chx_parent_dossier'] , donnees_retournees , options_generales , __db1 );
            if(le_chemin[__xst] !== __xsu){
                this.__gi1.__xsi[__xer].push( ' erreur sur la construction du chemin pour le source ' + __xva_avant[les_chemins[i]] + '[' + this.__gi1.nl2() + ']' );
                donnees_retournees.__xst=__xer;
                return({"__xst" : __xer});
            }
            tt389.__xva[i]['parent_nom_chemin_relatif2']=le_chemin.__xva.nom_chemin_relatif2;
        }
        /*
          donnees_retournees[__xva]['les_chemins'][les_chemins[i]]=le_chemin.__xva.nom_chemin_relatif1;
        */
        if(this.fonction_liste === 'liste1'){
            await this.liste_des_fidos( 1 , donnees_retournees , options_generales , __db1 );
        }
        donnees_retournees.__xva['__nbMax']=__nbMax;
        donnees_retournees[__xva]['__debut']=__debut;
        donnees_retournees[__xva]['__num_page']=__num_page;
        donnees_retournees[__xac]='pm1(m1(n1(' + this.moi + '),f1(' + this.fonction_liste + '(';
        for(let i in formulaire){
            donnees_retournees[__xac]+=this.__gi1.__fnt1.critere_liste( formulaire , i );
        }
        donnees_retournees[__xac]+='))))';
        donnees_retournees[__xva][this.fonction_liste]=tt389;
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
    moi='dossiers1';
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
export{dossiers1 as dossiers1};