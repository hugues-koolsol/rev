const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
class c_php_bdd1{
 
    #liste_des_types_de_requetes=['liste_ecran','insert','select','update','delete'];
    #chp_rev_travail_basedd=null;
    #nom_de_la_table=null;
    #nom_ref=null; // u tilisateurs
    #chemin_module1=null;
    #nom_de_la_classe_générée=null; //c_u tilisateurs1
    #mat=null;
    #obj_bdd={};
    #obj_table={};
    /*
      =============================================================================================================
    */
    constructor( obj_init ){
        this.#chemin_module1=obj_init.chemin_module1;
        /* debugger; */
        /* console.log( 'ici' ); */
    }
    /*
      =============================================================================================================
    */
    générer_le_php(par){
     
     
     
     
        let def_table=this.#obj_bdd[this.#nom_de_la_table];
        let incice_de_la_classe=document.getElementById('incice_de_la_classe').value
        
        
        if(this.#nom_de_la_table.substr(0,4)==='tbl_'){
            this.#nom_ref=this.#nom_de_la_table.substr(4);
            this.#nom_de_la_classe_générée='c_'+this.#nom_ref+incice_de_la_classe;
        }else{
            this.#nom_ref=this.#nom_de_la_table;
            this.#nom_de_la_classe_générée='c_'+this.#nom_ref+incice_de_la_classe;
        }
        
        let o2='<?php\n';
     

        o2+='class '+this.#nom_de_la_classe_générée+'{\n';
        o2+='    private $sql0=null;\n';
        o2+='    private const DUN_DUNE_ELEMENT_GERE = \''+def_table.meta.distinction_pour_isad+'\';\n';
        o2+='    private const LISTE_DES_ELEMENTS_GERES = \''+def_table.meta.distinction_pour_liste+'\';\n';
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    public function __construct(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . \'c_sql0.php\');\n';
        o2+='        $this->sql0=new c_sql0($donnees_retournees,$mat,$donnees_recues);\n';
        o2+='    }\n';
        
        
        let champ_primaire='';
        for(let i in this.#obj_table.champs){
            if(this.#obj_table.champs[i].genre_objet_du_champ.che_est_incrément_genre===1 || this.#obj_table.champs[i].genre_objet_du_champ.che_est_primaire_genre===1){
                champ_primaire=i;
                break;
            }
        }
        if(champ_primaire===''){
            debugger;
            return{__xst:__xer};
        }
        let champ_est_libelle_lien=null;
        
        let ref_insert=document.getElementById('reference_requete_insert').value;
        let liste_des_champs_insert=[];
        if(ref_insert!==''){
            let objet_requete_insert=__gi1.__js_des_sql[ref_insert];
            let matrice_insert=__gi1.__m_rev1.rev_tm( objet_requete_insert.cht_rev_requete );
            if( matrice_insert.__xst !== __xsu ){
                debugger;
                return{__xst:__xer};
            }
            let mati=matrice_insert.__xva;
            for(let i=1;i<mati.length;i=mati[i][12]){
                if(mati[i][1]==='insérer' && mati[i][2]==='f'){
                    for(let j=i+1;j<mati.length;j=mati[j][12]){
                        if(mati[j][1]==='valeurs' && mati[j][2]==='f'){
                            for(let k=j+1;k<mati.length;k=mati[k][12]){
                                if(mati[k][1]==='affecte' && mati[k][2]==='f'){
                                    for(let l=k+1;l<mati.length;l=mati[l][12]){
                                        if(mati[l][1]==='champ' && mati[l][2]==='f' && mati[l][8]===1 && mati[l+1][2]==='c'){
                                            liste_des_champs_insert.push({nom_du_champ:mati[l+1][1]});
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            for( let i in liste_des_champs_insert){
               let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_insert[i].nom_du_champ];
               liste_des_champs_insert[i].champ_dans_la_base=champ_dans_la_base;
               if(champ_dans_la_base.nom_du_champ === 'chp_nom_genre'){
//                debugger
               }
               if(champ_est_libelle_lien===null){
                   if(champ_dans_la_base.meta.hasOwnProperty('est_libelle_lien') && champ_dans_la_base.meta.est_libelle_lien === '1' ){
                       champ_est_libelle_lien=liste_des_champs_insert[i];
                   }
               }
            }
            
        }
        
        let mats=null;
        let ref_select=document.getElementById('reference_requete_select').value;
        if(ref_select!==''){
            let objet_requete_select=__gi1.__js_des_sql[ref_select];
            let matrice_select=__gi1.__m_rev1.rev_tm( objet_requete_select.cht_rev_requete );
            if( matrice_select.__xst !== __xsu ){
                debugger;
                return{__xst:__xer};
            }
            mats=matrice_select.__xva;
        }
        
        
        let ref_delete=document.getElementById('reference_requete_delete').value;
        if(ref_delete!==''){
            let objet_requete_delete=__gi1.__js_des_sql[ref_delete];
            let matrice_delete=__gi1.__m_rev1.rev_tm( objet_requete_delete.cht_rev_requete );
            if( matrice_delete.__xst !== __xsu ){
                debugger;
                return{__xst:__xer};
            }
            let matd=matrice_delete.__xva;
        }
        
        
        
        let liste_des_champs_update=[];
        let liste_des_champs_condition_update=[];
        let ref_update=document.getElementById('reference_requete_update').value;
        if(ref_update!==''){
            let objet_requete_update=__gi1.__js_des_sql[ref_update];
            let matrice_update=__gi1.__m_rev1.rev_tm( objet_requete_update.cht_rev_requete );
            if( matrice_update.__xst !== __xsu ){
                debugger;
                return{__xst:__xer};
            }
            
            let matu=matrice_update.__xva;
            for(let i=1;i<matu.length;i=matu[i][12]){
                if(matu[i][1]==='modifier' && matu[i][2]==='f'){
                    for(let j=i+1;j<matu.length;j=matu[j][12]){
                        if(matu[j][1]==='valeurs' && matu[j][2]==='f'){
                            for(let k=j+1;k<matu.length;k=matu[k][12]){
                                if(matu[k][1]==='affecte' && matu[k][2]==='f'){
                                    for(let l=k+1;l<matu.length;l=matu[l][12]){
                                        if(matu[l][1]==='champ' && matu[l][2]==='f' && matu[l][8]===1 && matu[l+1][2]==='c'){
                                            liste_des_champs_update.push({nom_du_champ:matu[l+1][1], alias_table_mere:''});
                                        }
                                    }
                                }
                            }
                        }else if(matu[j][1]==='conditions' && matu[j][2]==='f'){
                            for(let k=j+1;k<matu.length;k++){
                                if(matu[k][1]==='champ' && matu[k][2]==='f'  && matu[k][8]===1 && matu[k+1][2]==='c'){
                                    liste_des_champs_condition_update.push({nom_du_champ:matu[k+1][1],champ_dans_la_base:null});
                                }
                            }
                        }
                    }
                }
            }
        }
        let update_contient_nur='';
        
        for(let i in liste_des_champs_condition_update){
           let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_update[i].nom_du_champ];
           if(champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1){
               update_contient_nur=liste_des_champs_condition_update[i].nom_du_champ;
           }
           liste_des_champs_condition_update[i].champ_dans_la_base=champ_dans_la_base;
        }

        for(let i in liste_des_champs_update){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            /*ce champ fait-il référence à un champ amont qui est dans le ref_select */
               
            if(this.#obj_table.champs[nom_du_champ].hasOwnProperty('table_mere')){
                let table_mere=this.#obj_table.champs[nom_du_champ].table_mere;
                /*
                  on va chercher l'alias de la table mere dans la requere select
                */
                let l01s=mats.length;
                for( let j=1 ; j < l01s ; j++ ){
                    if(mats[j][1]==='provenance' && mats[j][2]==='f'){
                        for( let k=j+1 ; k < l01s ; k++ ){
                            if('nom_de_la_table' === mats[k][1] && mats[k][2] === 'f'){
                                for( let l=k+1;l<l01s;l=mats[l][12]){
                                    if(mats[l][1]===table_mere){
                                        for( let m=k+1;m<l01s;m=mats[m][12]){
                                            if(mats[m][1]==='alias' && mats[m][2] === 'f' && mats[m][8] === 1  && mats[m+1][2] === 'c'  ){
                                                this.#obj_table.champs[nom_du_champ]['alias']=mats[m+1][1];
                                                break;
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

        let liste_de_tables_liste_ecran={};
        let liste_des_champs_liste_ecran=[];
        let liste_des_champs_condition_liste_ecran={};
        let ref_liste_ecran=document.getElementById('reference_requete_liste_ecran').value;
        if(ref_liste_ecran!==''){
            let objet_requete_liste_ecran=__gi1.__js_des_sql[ref_liste_ecran];
            let matrice_liste_ecran=__gi1.__m_rev1.rev_tm( objet_requete_liste_ecran.cht_rev_requete );
            if( matrice_liste_ecran.__xst !== __xsu ){
                debugger;
                return{__xst:__xer};
            }
            let matle=matrice_liste_ecran.__xva;
            let le01=matle.length;
            for(let i=1;i<le01;i=matle[i][12]){
                if(matle[i][1]==='sélectionner' && matle[i][2]==='f'){
                    for(let j=i+1;j<le01;j=matle[j][12]){
                        if(matle[j][1]==='provenance' && matle[j][2]==='f'){
                            for(let k=j+1;k<le01;k++){
                                if(matle[k][1]==='nom_de_la_table' && matle[k][2]==='f' ){
                                    let nom_de_la_table='';
                                    let base='';
                                    let alias='';
                                    for(let l=k+1;l<le01;l=matle[l][12]){
                                        if(matle[l][2]==='f' && matle[l][8]===1){
                                            if(matle[l][1]==='alias' ){
                                                alias=matle[l+1][1];
                                            }else if(matle[l][1]==='base'){
                                                base=matle[l+1][1];
                                            }
                                        }else{
                                            nom_de_la_table=matle[l][1];
                                        }
                                    }
                                    liste_de_tables_liste_ecran[alias]={
                                        alias : alias,
                                        base : base,
                                        nom_de_la_table : nom_de_la_table,
                                    };
                                }
                            }
                        }
                    }
                }
            }
            for(let i=1;i<le01;i=matle[i][12]){
                if(matle[i][1]==='sélectionner' && matle[i][2]==='f'){
                    for(let j=i+1;j<le01;j=matle[j][12]){
                        if(matle[j][1]==='valeurs' && matle[j][2]==='f'){
                            for(let k=j+1;k<le01;k=matle[k][12]){
                                if(matle[k][1]==='champ' && matle[k][2]==='f' && matle[k][8] === 2){
                                    liste_des_champs_liste_ecran.push({
                                        nom_du_champ : matle[k+2][1] , 
                                        préfixe_du_champ : matle[k+1][1] , 
                                        champ_dans_la_base : null,
                                    });
                                }
                            }
                        }
                    }
                }
            }
            for(let i=1;i<le01;i=matle[i][12]){
                if(matle[i][1]==='sélectionner' && matle[i][2]==='f'){
                    for(let j=i+1;j<le01;j=matle[j][12]){
                        if(matle[j][1]==='conditions' && matle[j][2]==='f'){
                            for(let k=j+1;k<le01;k++){
                                if(matle[k][1]==='champ' && matle[k][2]==='f' && matle[k][8] === 2){
                                    let cle=matle[k+1][1]+'_'+matle[k+2][1];
                                    liste_des_champs_condition_liste_ecran[cle]={
                                        nom_du_champ : matle[k+2][1] , 
                                        préfixe_du_champ : matle[k+1][1] , 
                                        champ_dans_la_base : null,
                                    };
                                }
                            }
                        }
                    }
                }
            }
            for( let i in liste_des_champs_condition_liste_ecran){ // hugues
               if(liste_des_champs_condition_liste_ecran[i].préfixe_du_champ === 'T0'){
                   let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_condition_liste_ecran[i].nom_du_champ];
                   liste_des_champs_condition_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
               }else{

                   let nt=liste_de_tables_liste_ecran[liste_des_champs_condition_liste_ecran[i].préfixe_du_champ].nom_de_la_table;
                   let aa=this.#obj_bdd[nt];
                   let champ_dans_la_base=aa['champs'][liste_des_champs_condition_liste_ecran[i].nom_du_champ];
                   liste_des_champs_condition_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
               }
            }
            

            
            /*
              recherche du champ est_libelle_lien
            */
            
            for( let i in liste_des_champs_liste_ecran){
               if(liste_des_champs_liste_ecran[i].préfixe_du_champ==='T0'){
                   /* champ T0*/
                   let champ_dans_la_base=this.#obj_table.champs[liste_des_champs_liste_ecran[i].nom_du_champ];
                   liste_des_champs_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                   if(champ_est_libelle_lien===null){
                       if(champ_dans_la_base.meta.hasOwnProperty('est_libelle_lien') && champ_dans_la_base.meta.est_libelle_lien === '1'){
                           champ_est_libelle_lien=liste_des_champs_liste_ecran[i];
                       }
                    }
               }else{
                   /* champ Tn*/
                   let nt=liste_de_tables_liste_ecran[liste_des_champs_liste_ecran[i].préfixe_du_champ].nom_de_la_table;
                   let aa=this.#obj_bdd[nt];
                   let champ_dans_la_base=aa['champs'][liste_des_champs_liste_ecran[i].nom_du_champ];
                   liste_des_champs_liste_ecran[i].champ_dans_la_base=champ_dans_la_base;
                  
               }
            }
        }

        
        
        
        
        
        //if(false){
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    public function formulaire1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='\n';
        o2+='\n';
        o2+='        $l01=count($mat);\n';
        o2+='        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){\n';
        o2+='            \n';
        o2+='            \n';
        o2+='            if($mat[$i][1] === \''+this.#nom_de_la_classe_générée+'.formulaire1\' && $mat[$i][2] === \'f\' && $mat[$i][8] >= 1){\n';
        o2+='\n';
        o2+='                $conteneur1=\'\';\n';
        o2+='                $action1=\'\';\n';
        o2+='                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){\n';
        o2+='                    \n';
        o2+='                    \n';
        o2+='                    if($mat[$j][1] === \'conteneur1\' && $mat[$j + 1][2] === \'c\'){\n';
        o2+='\n';
        o2+='                        $conteneur1=$mat[$j + 1][1];\n';
        o2+='\n';
        o2+='                    }else if($mat[$j][1] === \'action1\' && $mat[$j + 1][2] === \'c\'){\n';
        o2+='\n';
        o2+='                        $action1=$mat[$j + 1][1];\n';
        o2+='                    }\n';
        o2+='\n';
        o2+='                }\n';
        o2+='                \n';
        o2+='                if($action1 !== \'\'){\n';
        o2+='\n';
        o2+='                    \n';
        o2+='                    if($action1 === \'page_'+this.#nom_ref+'_creer1\'\n';
        o2+='                       || $action1 === \'page_'+this.#nom_ref+'_modifier1\'\n';
        o2+='                       || $action1 === \'page_'+this.#nom_ref+'_supprimer1\'\n';
        o2+='                       || $action1 === \'page_liste_des_'+this.#nom_ref+'1\'\n';
        o2+='                    ){\n';
        o2+='\n';
        o2+='                        $this->$action1($donnees_retournees,$mat,$donnees_recues);\n';
        o2+='\n';
        o2+='                    }else{\n';
        o2+='\n';
        o2+='                        $donnees_retournees[__x_signaux][__xal][]=\'action non traitée "\' . $action1 . \'" [\' . __LINE__ . \']\';\n';
        o2+='                    }\n';
        o2+='\n';
        o2+='\n';
        o2+='                }else if($conteneur1 === \'vv_'+this.#nom_ref+'_modifier1\'\n';
        o2+='                   || $conteneur1 === \'vv_'+this.#nom_ref+'_creer1\'\n';
        o2+='                   || $conteneur1 === \'vv_'+this.#nom_ref+'_supprimer1\'\n';
        o2+='                   || $conteneur1 === \'vv_'+this.#nom_ref+'_filtre1\'\n';
        o2+='                ){\n';
        o2+='\n';
        o2+='                    $this->$conteneur1($donnees_retournees,$mat,$donnees_recues);\n';
        o2+='\n';
        o2+='                }else{\n';
        o2+='\n';
        o2+='                    $donnees_retournees[__x_signaux][__xal][]=\'traitement à réaliser pour $donnees_recues \' . var_export($donnees_recues,true) . \' [\' . __LINE__ . \']\';\n';
        o2+='                }\n';
        o2+='\n';
        o2+='                break;\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        o2+='    }\n';
        
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function vv_'+this.#nom_ref+'_creer1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $page_liste_des_'+this.#nom_ref+'1=false;\n';
        o2+='        $l01=count($mat);\n';
        o2+='        for( $i=1 ; $i < $l01 ; $i++ ){\n';
        o2+='            \n';
        o2+='            \n';
        o2+='            if($mat[$i][1] === \'page_liste_des_'+this.#nom_ref+'1\' && $mat[$i][2] === \'f\' && $mat[$i][8] === 0){\n';
        o2+='\n';
        o2+='                $page_liste_des_'+this.#nom_ref+'1=true;\n';
        o2+='                break;\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        o2+='        \n';
/*
        o2+='        $mdp=password_hash($donnees_recues[__xva][\'chp_mot_de_passe_utilisateur\'],PASSWORD_BCRYPT,array( \'cost\' => 10));\n';
*/        
        o2+='        \n';
        
        
        if(ref_insert!==''){
            for(let i=0;i<liste_des_champs_insert.length;i++){
             
             
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                
                if('chx_utilisateur_tache'===nom_du_champ){
//                    debugger
                }
                
                
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(
                     obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 
                  || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 
                  || obj_champ.genre_objet_du_champ.che_est_nur_genre===1
                  || ( obj_champ.genre_objet_du_champ.che_est_session_genre===1 && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null)
                ){
                }else{

                    if(obj_champ.genre_objet_du_champ.che_est_session_genre===1){
                    }else{
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre===1){
                            o2+='        if(is_null($donnees_recues[__xva][\''+nom_du_champ+'\']) || $donnees_recues[__xva][\''+nom_du_champ+'\']===\'\'){\n';
                            o2+='            $donnees_retournees[__x_signaux][__xer][]=\'la valeur "'+obj_champ.meta.nom_bref_du_champ+'" doit être renseigné [\' . __LINE__ . \']\';\n';
                            o2+='            return;\n';
                            o2+='        }\n';
                        }
                    }



                    if(obj_champ.genre_objet_du_champ.che_est_session_genre===1){
                    }else{
                        if(obj_champ.genre_objet_du_champ.cht_fonctions_genre!==null){
                         
                            var obj1=__gi1.__m_rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                            if(obj1.__xst !== __xsu){
                                return({__xst : __xer});
                            }
                            /*
                              $test=$GLOBALS['obj_fonctions1']->test_fonctions_de_c_fonctions1($donnees_recues[__xva]['cht_fonctions_genre'],$donnees_retournees);
                              if($test[__xst]!==__xsu){

                                      $donnees_retournees[__x_signaux][__xer][]='une des fonctions renseignées ne fait pas partie des fonctions disponibles [' . __LINE__ . ']';
                                      $donnees_retournees[__xst]=__xer;
                                      return;
                              }
                            */
                              
                            let mat1=obj1.__xva;
                            let l01=mat1.length;
                            for(let j=1;j<l01;j=mat1[j][12]){
                                if(mat1[j][2]==='f'){
                                    o2+='\n';
                                    o2+='        $__test=$GLOBALS[\'obj_fonctions1\']->'+mat1[j][1]+'(';
                                    if(mat1[j][8]===0){
                                    }else{
                                        for(let k=j+1;k<l01;k=mat1[k][12]){
                                            if(mat1[k][2]==='c'){
                                                if(mat1[k][4]===0){
                                                    o2+=mat1[k][1]+',';
                                                }else{
                                                  /*afr*/
                                                  debugger
                                                  return({__xst : __xer});
                                                }
                                            }else{
                                                return({__xst : __xer});
                                            }
                                        }
                                    }
                                    o2+='$donnees_recues[__xva][\''+nom_du_champ+'\'],$donnees_retournees);\n';
                                    o2+='        if($__test[__xst]!==__xsu){\n';
                                    o2+='            $donnees_retournees[__x_signaux][__xer][]=\'erreur sur le champ "'+obj_champ.meta.nom_bref_du_champ+'" [\' . __LINE__ . \']\';\n';
                                    o2+='            $donnees_retournees[__xst]=__xer;\n';
                                    o2+='            return;\n';
                                    o2+='        }\n\n';
                                }else{
                                    return({__xst : __xer});
                                }
                            }
                        }
                    }
                }
            }
            
            
            o2+='        $donnees_sql=array( array(/**/\n';
            for(let i=0;i<liste_des_champs_insert.length;i++){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
                }else if(obj_champ.genre_objet_du_champ.che_est_session_genre===1 && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre!==null){
                    o2+='                    \''+nom_du_champ+'\' => $_SESSION[__X_CLE_APPLICATION][\''+obj_champ.genre_objet_du_champ.chp_nom_en_session_genre+'\'],\n';
                }else{
                    o2+='                    \''+nom_du_champ+'\' => $donnees_recues[__xva][\''+nom_du_champ+'\'],\n';
                }
                
                
                
            }
            o2+='                ));\n';
            o2+='        /* echo __FILE__ . \' \' . __LINE__ . \' $donnees_sql = <pre>\' . var_export( $donnees_sql , true ) . \'</pre>\' ; exit(0);*/\n';
            o2+='        $tt'+ref_insert+'=$this->sql0->sql_iii('+ref_insert+',$donnees_sql,$donnees_retournees);\n';
            o2+='        \n';
            o2+='        if($tt'+ref_insert+'[__xst] !== __xsu){\n';
            o2+='\n';
            o2+='            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . \' [\' . __LINE__ . \']\';\n';
            o2+='            return;\n';
            o2+='\n';
            o2+='        }else if($tt'+ref_insert+'[\'changements\'] === 1){\n';
            o2+='\n';
            o2+='            $donnees_retournees[__xst]=__xsu;\n';
            o2+='            \n';
            o2+='            if($page_liste_des_'+this.#nom_ref+'1 === true){\n';
            o2+='\n';
            o2+='                $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$mat,$donnees_recues);\n';
            o2+='\n';
            o2+='            }else{\n';
            o2+='\n';
            o2+='                $action=\''+champ_primaire+'(\' . $tt'+ref_insert+'[\'nouvel_id\'] . \')\';\n';
            o2+='                $obj_matrice=$GLOBALS[\'obj_rev1\']->rev_vers_matrice($action);\n';
            o2+='                $this->page_'+this.#nom_ref+'_modifier1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);\n';
            o2+='                $donnees_retournees[__x_action]=\''+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_modifier1),'+champ_primaire+'(\' . $tt'+ref_insert+'[\'nouvel_id\'] . \'))\';\n';
            o2+='            }\n';
            o2+='\n';
            o2+='\n';
            o2+='        }else{\n';
            o2+='\n';
            o2+='            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \' aucune modification effectuée\';\n';
            o2+='        }\n';
        }
        
        o2+='\n';
        o2+='        $o1=\'\';\n';
        o2+='    }\n';            
        
        
        o2+='\n';
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function vv_'+this.#nom_ref+'_filtre1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $txtPar=\'__num_page(0)\';\n';
        o2+='        $nouvelles_valeurs=array( \'__num_page\' => 0);\n';
        o2+='        foreach($donnees_recues[__xva] as $k0 => $v0){\n';
        o2+='            \n';
        o2+='            if($k0 !== \'__num_page\'){\n';
        o2+='\n';
        o2+='                $nouvelles_valeurs[$k0]=$v0;\n';
        o2+='                \n';
        o2+='                if(is_numeric($v0)){\n';
        o2+='\n';
        o2+='                    $txtPar .= \',\' . $k0 . \'(\' . $v0 . \')\';\n';
        o2+='\n';
        o2+='                }else{\n';
        o2+='\n';
        o2+='                    $txtPar .= \',\' . $k0 . \'(\\\'\' . str_replace(\'\\\'\',\'\\\\\\\'\',$v0) . \'\\\')\';\n';
        o2+='                }\n';
        o2+='\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        o2+='        $_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\']=$nouvelles_valeurs;\n';
        o2+='        $obj_matrice=$GLOBALS[\'obj_rev1\']->rev_vers_matrice(\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1(\' . $txtPar . \')\');\n';
        o2+='        \n';
        o2+='        if($obj_matrice[__xst] === __xsu){\n';
        o2+='\n';
        o2+='            $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);\n';
        o2+='\n';
        o2+='        }else{\n';
        o2+='\n';
        o2+='            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . \' erreur de convertion de \' . $txtPar . \'\';\n';
        o2+='        }\n';
        o2+='\n';
        o2+='    }\n';
        o2+='\n';        
        
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function vv_'+this.#nom_ref+'_supprimer1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        if(ref_select!=='' && ref_delete!==''){
            o2+='        $tt'+ref_select+'=$this->sql0->sql_iii(\n';
            o2+='             /*sql_'+ref_select+'()*/ '+ref_select+',\n';
            o2+='            array(/**/\n';
            o2+='                \'T0_'+champ_primaire+'\' => $donnees_recues[__xva][\''+champ_primaire+'\']\n';
            o2+='            ),\n';
            o2+='            $donnees_retournees\n';
            o2+='        );\n';
            o2+='        \n';
            o2+='        if($tt'+ref_select+'[__xst] === __xsu && is_numeric($donnees_recues[__xva][\''+champ_primaire+'\'])){\n';
            o2+='\n';
            o2+='            $tt'+ref_delete+'=$this->sql0->sql_iii(\n';
            o2+='                 /*sql_'+ref_delete+'()*/ '+ref_delete+',\n';
            o2+='                array(/**/\n';
            o2+='                    \''+champ_primaire+'\' => $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\']\n';
            o2+='                ),\n';
            o2+='                $donnees_retournees\n';
            o2+='            );\n';
            o2+='            \n';
            o2+='            if($tt'+ref_delete+'[__xst] === __xer){\n';
            o2+='\n';
            o2+='                $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la suppression  \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
            o2+='\n';
            o2+='            }else if($tt'+ref_delete+'[\'changements\'] === 1){\n';
            o2+='\n';
            o2+='                $donnees_retournees[__x_signaux][__xsu][]=\'👍 suppression \' . self::DUN_DUNE_ELEMENT_GERE . \' effectuée avec succès (\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \')\';\n';
            o2+='                $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$mat,$donnees_recues);\n';
            o2+='\n';
            o2+='            }else{\n';
            o2+='\n';
            o2+='                $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la suppression  \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
            o2+='            }\n';
            o2+='\n';
            o2+='\n';
            o2+='        }else{\n';
            o2+='\n';
            o2+='            $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la suppression  \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
            o2+='        }\n';
        }
        o2+='\n';
        o2+='        $o1=\'\';\n';
        o2+='    }\n';        
        
            
        o2+='\n';
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function vv_'+this.#nom_ref+'_modifier1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $page_liste_des_'+this.#nom_ref+'1=false;\n';
        o2+='        $l01=count($mat);\n';
        o2+='        for( $i=1 ; $i < $l01 ; $i++ ){\n';
        o2+='            \n';
        o2+='            \n';
        o2+='            if($mat[$i][1] === \'page_liste_des_'+this.#nom_ref+'1\' && $mat[$i][2] === \'f\' && $mat[$i][8] === 0){\n';
        o2+='\n';
        o2+='                $page_liste_des_'+this.#nom_ref+'1=true;\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        if(ref_select!=='' && ref_update!==''){
            o2+='        $tt'+ref_select+'=$this->sql0->sql_iii(\n';
            o2+='             /*sql_'+ref_select+'()*/ '+ref_select+',\n';
            o2+='            array(/**/\n';
            o2+='                \'T0_'+champ_primaire+'\' => $donnees_recues[__xva][\''+champ_primaire+'\']\n';
            o2+='            ),\n';
            o2+='            $donnees_retournees\n';
            o2+='        );\n';
            o2+='        \n';
            o2+='        if($tt'+ref_select+'[__xst] !== __xsu){\n';
            o2+='\n';
            o2+='\n';
            o2+='            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \' aucune modification effectuée\';\n';
            o2+='            return;\n';
            o2+='        }\n';
                        

            o2+='\n';
            /*
            o2+='                $mot_de_passe_crypte=password_hash($donnees_recues[__xva][\'chp_mot_de_passe_utilisateur\'],PASSWORD_BCRYPT,array( \'cost\' => 10));\n';
            */
            for(let i=0;i<liste_des_champs_update.length;i++){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                
                if('cht_fonctions_genre'===nom_du_champ){
                    //debugger;
                }
                
                if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
                }else{
                    if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre===1){
                        o2+='        if(is_null($donnees_recues[__xva][\''+nom_du_champ+'\']) || $donnees_recues[__xva][\''+nom_du_champ+'\']===\'\'){\n';
                        o2+='            $donnees_retournees[__x_signaux][__xer][]=\'la valeur "'+obj_champ.meta.nom_bref_du_champ+'" doit être renseigné [\' . __LINE__ . \']\';\n';
                        o2+='            return;\n';
                        o2+='        }\n';
                    }
                    if(obj_champ.genre_objet_du_champ.cht_fonctions_genre!==null){
                     
                        var obj1=__gi1.__m_rev1.rev_tm( obj_champ.genre_objet_du_champ.cht_fonctions_genre );
                        if(obj1.__xst !== __xsu){
                            return({__xst : __xer});
                        }
                          
                        let mat1=obj1.__xva;
                        let l01=mat1.length;
                        for(let j=1;j<l01;j=mat1[j][12]){
                            if(mat1[j][2]==='f'){
                                o2+='\n';
                                o2+='        $__test=$GLOBALS[\'obj_fonctions1\']->'+mat1[j][1]+'(';
                                if(mat1[j][8]===0){
                                }else{
                                    for(let k=j+1;k<l01;k=mat1[k][12]){
                                        if(mat1[k][2]==='c'){
                                            if(mat1[k][4]===0){
                                                o2+=mat1[k][1]+',';
                                            }else{
                                              /*afr*/
                                              debugger
                                              return({__xst : __xer});
                                            }
                                        }else{
                                            return({__xst : __xer});
                                        }
                                    }
                                }
                                o2+='$donnees_recues[__xva][\''+nom_du_champ+'\'],$donnees_retournees);\n';
                                
                                o2+='        if($__test[__xst]!==__xsu){\n';
                                o2+='            $donnees_retournees[__x_signaux][__xer][]=\'erreur sur le champ "'+obj_champ.meta.nom_bref_du_champ+'" [\' . __LINE__ . \']\';\n';
                                o2+='            $donnees_retournees[__xst]=__xer;\n';
                                o2+='            return;\n';
                                o2+='        }\n\n';
                            }else{
                                return({__xst : __xer});
                            }
                        }
                    }
                }
            }
            o2+='\n';
            o2+='        $tt'+ref_update+'=$this->sql0->sql_iii(\n';
            o2+='             /*sql_'+ref_update+'()*/ '+ref_update+',\n';
            o2+='            array(/**/\n';
            
            for( let i=0;i<liste_des_champs_condition_update.length;i++){
                if(liste_des_champs_condition_update[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre === 1){
                    o2+='                    \'c_'+liste_des_champs_condition_update[i].nom_du_champ+'\' => $donnees_recues[__xva][\''+liste_des_champs_condition_update[i].nom_du_champ+'\'],\n';
                }else{
                    o2+='                    \'c_'+liste_des_champs_condition_update[i].nom_du_champ+'\' => $tt'+ref_select+'[__xva][0][\'T0.'+liste_des_champs_condition_update[i].nom_du_champ+'\'],\n';
                }
            }

            
            for(let i=0;i<liste_des_champs_update.length;i++){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
                }else{
                    o2+='                \'n_'+nom_du_champ+'\' => $donnees_recues[__xva][\''+nom_du_champ+'\'],\n';
                }
            }
            
            o2+='            ),\n';
            o2+='            $donnees_retournees\n';
            o2+='        );\n';
            o2+='\n';
            o2+='        if($tt'+ref_update+'[__xst] !== __xsu){\n';
            o2+='\n';
            o2+='            $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la modification \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
            o2+='\n';
            o2+='        }\n';
            o2+='\n';
            o2+='        if($tt'+ref_update+'[\'changements\'] === 1){\n';
            o2+='\n';
            o2+='            $donnees_retournees[__x_signaux][__xsu][]=\'👍 modification effectuée avec succès \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
            o2+='\n';
            o2+='\n';
            o2+='            if($page_liste_des_'+this.#nom_ref+'1 === true){\n';
            o2+='\n';
            o2+='                $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$mat,$donnees_recues);\n';
            o2+='\n';
            o2+='            }else{\n';
            o2+='\n';
            o2+='                $donnees_retournees[__x_action]=\''+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_modifier1),'+champ_primaire+'(\'.$donnees_recues[__xva][\''+champ_primaire+'\'].\'))\';\n';
            o2+='                $this->page_'+this.#nom_ref+'_modifier1($donnees_retournees,$mat,$donnees_recues);\n';
            o2+='\n';
            o2+='            }\n';
            o2+='\n';
            o2+='        }else{\n';
            o2+='\n';
            if(update_contient_nur!==''){;
                o2+='            if($tt'+ref_select+'[__xva][0][\'T0.'+update_contient_nur+'\']!==$donnees_recues[__xva][\''+update_contient_nur+'\']){\n';
                o2+='                $_message=\'\';\n';
                o2+='                $_message.=\'un autre utilisateur a peut être fait une modification entre temps\';\n';
                o2+='                $_message.=\'<br />Veuillez vérifier les champs puis réessayer d\\\'enregistrer les modifications\' ;\n';
                o2+='                $donnees_retournees[__x_signaux][__xal][]=$_message;\n';
                o2+='            }\n';
            }
            o2+='            $donnees_retournees[__x_signaux][__xal][]=\' aucune modification effectuée [\' . __LINE__ . \']\';\n';
            o2+='            $donnees_retournees[__x_action]=\''+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_modifier1),champ_primaire(\'.$donnees_recues[__xva][\'champ_primaire\'].\'))\';\n';
            o2+='            $this->page_'+this.#nom_ref+'_modifier1($donnees_retournees,$mat,$donnees_recues);\n';
            o2+='        }\n';
            o2+='\n';
        }
        o2+='\n';
        o2+='        $o1=\'\';\n';
        o2+='    }\n';
        
        
        o2+='\n';
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function page_'+this.#nom_ref+'_creer1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $o1=\'\';\n';
        o2+='        $o1 .= \'<h1>ajout \' . self::DUN_DUNE_ELEMENT_GERE . \' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_liste_des_'+this.#nom_ref+'1))" title="revenir à la liste" >⬱</div></h1>\' . PHP_EOL;\n';
        o2+='        $o1 .= \'<div id="vv_'+this.#nom_ref+'_creer1">\' . PHP_EOL;\n';
        
        if(ref_insert!==''){
        
            for(let i=0;i<liste_des_champs_insert.length;i++){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if('chx_utilisateur_tache' === obj_champ.nom_du_champ){
/*

*/
                }
                if(obj_champ.hasOwnProperty('table_mere') && obj_champ.hasOwnProperty('champ_pere') && obj_champ.table_mere !== ''  && obj_champ.champ_pere !== '' ){

                    o2+='        $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    <div class="yy_edition_libelle1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <span>'+obj_champ.meta.nom_bref_du_champ+'</span>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'        <input type="hidden" value=""  id="'+obj_champ.nom_du_champ+'" />\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'        <span id="'+obj_champ.nom_du_champ+'_libelle">*indéfini</span>\' . PHP_EOL;\n';
                    let nom_de_la_classe=obj_champ.table_mere.replace('tbl_','');
                    o2+='        $parametre_sous_fenetre=\'c_'+nom_de_la_classe+'1.page_'+nom_de_la_classe+'_sous_liste1(\';\n';
                    o2+='        $parametre_sous_fenetre .= \' sans_menus1()\';\n';
                    o2+='        $parametre_sous_fenetre .= \' nom_champ_dans_parent1('+obj_champ.nom_du_champ+')\';\n';
                    o2+='        $parametre_sous_fenetre .= \' nom_libelle_dans_parent1('+obj_champ.nom_du_champ+'_libelle)\';\n';
                    o2+='        $parametre_sous_fenetre .= \' libelle_si_vide1("*indéfini")\';\n';
                    o2+='        $parametre_sous_fenetre .= \')\';\n';
                    o2+='        $o1 .= \'      <div class="hug_bouton yy__x_signaux_1" \' . PHP_EOL;\n';
                    o2+='        $o1 .= \'data-hug_click="interface1.affiche_sous_fenetre1(\' . htmlentities($parametre_sous_fenetre) . \')"  title="selectionner">📁</div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(\' . htmlentities($parametre_sous_fenetre) . \')"  title="annuler">🚫</div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'  </div>\' . PHP_EOL;\n';

                
                }else if(  obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 
                  || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 
                  || obj_champ.genre_objet_du_champ.che_est_nur_genre===1 
                  || ( obj_champ.genre_objet_du_champ.che_est_session_genre===1 && obj_champ.genre_objet_du_champ.chp_nom_en_session_genre !== null)
                
                ){
                }else if( obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
                 
                }else{
                    o2+='        /*\n';
                    o2+='          =====================================================================================================\n';
                    o2+='        */\n';
                    o2+='        $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    <div class="yy_edition_libelle1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <span>'+obj_champ.meta.nom_bref_du_champ+'</span>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
                    
                    if('chp_nom_en_session_genre'===obj_champ.nom_du_champ){
                        //debugger;
                    }
                    
                    if(obj_champ.genre_objet_du_champ.chp_espece_genre==='VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre<=64){
                         size=' size="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" ';
                        }
                        o2+='        $o1 .= \'      <input ';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre!==null){
                         o2+=' disabled ';
                        }
                        o2+=' type="text" '+size+' ';
                        o2+=' maxlength="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" ';
                        o2+=' id="'+obj_champ.nom_du_champ+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ';
                        o2+=' value="\';\n';
                        o2+='        if(isset($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\'])){;\n';
                        o2+='            $o1 .= enti1($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\']);\n';
                        o2+='        }else{\n';
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre===0){
                            o2+='            $o1 .= \'\';\n';
                        }else{
                            o2+='            $o1 .= \''+(obj_champ.genre_objet_du_champ.cht_valeur_init_genre===null?'':obj_champ.genre_objet_du_champ.cht_valeur_init_genre)+'\';\n';
                        }
                        o2+='        }\n';
                        o2+='        $o1 .= \'" />\' . PHP_EOL;\n';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre!==null){
                            let tab=obj_champ.genre_objet_du_champ.cht_parmis_genre.split(',');
                            o2+='        $o1 .= \'      <br />\';\n';
                            for(let opt in tab){
                                o2+='        $o1 .= \'      <div class="hug_bouton" data-hug_click="c_fonctions_js1(affecte(zone('+obj_champ.nom_du_champ+',valeur),'+tab[opt]+'))">'+tab[opt]+'</div>\';\n';
                            }
                        }
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre==='TEXT'){
                        o2+='        $o1 .= \'        <div class="yy_conteneur_txtara">\' . PHP_EOL;\n';
                        o2+='        $o1 .= \'            <textarea id="'+obj_champ.nom_du_champ+'" rows="10" cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\';\n';
                        o2+='        if(isset($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\'])){;\n';
                        o2+='            $o1 .= enti1($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\']);\n';
                        o2+='        }else{\n';
                        if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre===0){
                            o2+='            $o1 .= \'\';\n';
                        }else{
                            o2+='            $o1 .= \''+(obj_champ.genre_objet_du_champ.cht_valeur_init_genre===null?'':obj_champ.genre_objet_du_champ.cht_valeur_init_genre)+'\';\n';
                        }
                        o2+='        }\n';
                        o2+='        $o1 .= \'</textarea>\' . PHP_EOL;\n';
                        o2+='        $o1 .= \'        </div>\' . PHP_EOL;\n';
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre!==null){
                             debugger
                        }
                     
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre==='INTEGER'){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre===null){

                            
                            o2+='        $o1 .= \'      <input type="number" ';
                            if(obj_champ.hasOwnProperty('longueur_du_champ') && obj_champ.longueur_du_champ>0 && obj_champ.longueur_du_champ <= 18){
                                /*18 caractères max*/
                                o2+=' size="' + obj_champ.longueur_du_champ + '" maxlength="' + obj_champ.longueur_du_champ +'" max="'+('9'.repeat(obj_champ.longueur_du_champ))+'" style="width:'+(obj_champ.longueur_du_champ+2)+'em;"';
                            }else{
                                o2+=' size="18" maxlength="18" max="999999999999999999"  min="-999999999999999999" ';
                            }
                            o2+=' id="'+obj_champ.nom_du_champ+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  value="\';\n';
                            /*champ entier standard*/
                            o2+='        if(isset($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\'])){;\n';
                            o2+='            $o1 .= enti1($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\']);\n';
                            o2+='        }else{\n';
                            if(obj_champ.genre_objet_du_champ.che_est_obligatoire_genre===0){
                                o2+='            $o1 .= \'\';\n';
                            }else{
                                o2+='            $o1 .= \''+(obj_champ.genre_objet_du_champ.cht_valeur_init_genre===null?'':obj_champ.genre_objet_du_champ.cht_valeur_init_genre)+'\';\n';
                            }
                            o2+='        }\n';
                            o2+='        $o1 .= \'"/>\' . PHP_EOL;\n';
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre!==null){
                                 debugger
                            }
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre==='0,1'){
                                o2+='        $o1 .= \'        <input type="range" id="'+obj_champ.nom_du_champ+'" class="yy_ouinon" min="0" max="1" step="1" value="\';\n';
                                o2+='        if(isset($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\'])){;\n';
                                o2+='            $o1 .= enti1($donnees_recues[\'dupliquer\'][\'T0.'+obj_champ.nom_du_champ+'\']);\n';
                                o2+='        }else{\n';
                                o2+='            $o1 .= \'0\';\n';
                                o2+='        }\n';
                                o2+='        $o1 .= \'" >\' . PHP_EOL;\n';
                            }else{
                                debugger
                            }
                        }

                    }else{
                        /*
                          afr
                        */
                        debugger
                        
                        
                    }
                    
                    o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'  </div>\' . PHP_EOL;\n';
                }
            }
        }
        o2+='        /*\n';
        o2+='          =====================================================================================================\n';
        o2+='        */\n';
        o2+='        $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
        o2+='        $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
        o2+='        $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_creer1),page_liste_des_'+this.#nom_ref+'1())" title="" >ajouter et revenir à la liste</div>\';\n';
        o2+='        $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_creer1))" title="" >ajouter</div>\';\n';
        o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
        o2+='        $o1 .= \'  </div>\' . PHP_EOL;\n';
        o2+='        /* */\n';
        o2+='        $o1 .= \'</div>\' . PHP_EOL;\n';
        o2+='        $donnees_retournees[__x_page] .= $o1;\n';
        o2+='        $donnees_retournees[__xst]=__xsu;\n';
        o2+='    }\n'; 


        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function page_'+this.#nom_ref+'_supprimer1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $o1=\'\';\n';
        o2+='        $'+champ_primaire+'=\'\';\n';
        o2+='        $l01=count($mat);\n';
        o2+='        for( $i=1 ; $i < $l01 ; $i++ ){\n';
        o2+='            \n';
        o2+='            \n';
        o2+='            if($mat[$i][1] === \''+champ_primaire+'\' && $mat[$i + 1][2] === \'c\' && $mat[$i][2] === \'f\'){\n';
        o2+='\n';
        o2+='                $'+champ_primaire+'=$mat[$i + 1][1];\n';
        o2+='                break;\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        o2+='        \n';
        o2+='        if(is_numeric($'+champ_primaire+') ){\n';
        if(ref_select!=='' && ref_delete!==''){
            o2+='\n';
            o2+='            $tt'+ref_select+'=$this->sql0->sql_iii(\n';
            o2+='                 /*sql_'+ref_select+'()*/ '+ref_select+',\n';
            o2+='                array(/**/\n';
            o2+='                    \'T0_'+champ_primaire+'\' => $'+champ_primaire+'\n';
            o2+='                ),\n';
            o2+='                $donnees_retournees\n';
            o2+='            );\n';
            o2+='            \n';
            o2+='            if($tt'+ref_select+'[__xst] === __xsu){\n';
            o2+='\n';
            o2+='                $o1 .= \'<h1>suppression \' . self::DUN_DUNE_ELEMENT_GERE . \'<div class="hug_bouton" style="font-weight:normal;" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_liste_des_'+this.#nom_ref+'1))" title="revenir à la liste" >⬱</div></h1>\' . PHP_EOL;\n';
            o2+='                $o1 .= \'<div id="vv_'+this.#nom_ref+'_supprimer1">\' . PHP_EOL;\n';
            o2+='                $o1 .= \'  <h3>confirmez vous la suppression \' . self::DUN_DUNE_ELEMENT_GERE . \'(<b>\' . $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\'] . \'</b>) ?</h3>\';\n';



            for(let i=0;i<liste_des_champs_insert.length;i++){
                let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
                }else{
                    o2+='                /*\n';
                    o2+='                  =====================================================================================================\n';
                    o2+='                */\n';
                    o2+='                $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
                    o2+='                $o1 .= \'    <div class="yy_edition_libelle1">\' . PHP_EOL;\n';
                    o2+='                $o1 .= \'      <span>'+obj_champ.meta.nom_bref_du_champ+'</span>\' . PHP_EOL;\n';
                    o2+='                $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='                $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
                    
                    if(obj_champ.genre_objet_du_champ.chp_espece_genre==='VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre<=64){
                         size=' size="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" ';
                        }
                        o2+='                $o1 .= \'      <input disabled value="\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+liste_des_champs_insert[i].nom_du_champ+'\']) . \'" type="text" '+size+' maxlength="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" id="'+obj_champ.nom_du_champ+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' . PHP_EOL;\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre==='TEXT'){
                        o2+='                $o1 .= \'        <div class="yy_conteneur_txtara">\' . PHP_EOL;\n';
                        o2+='                $o1 .= \'            <textarea disabled id="'+obj_champ.nom_du_champ+'" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+liste_des_champs_insert[i].nom_du_champ+'\']) . \'</textarea>\' . PHP_EOL;\n';
                        o2+='                $o1 .= \'        </div>\' . PHP_EOL;\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre==='INTEGER'){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre===null){
                            /*champ entier standard*/
                            o2+='                $o1 .= \'      <input value="\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+liste_des_champs_insert[i].nom_du_champ+'\']) . \'" disabled type="number" size="32" maxlength="32" id="'+obj_champ.nom_du_champ+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' . PHP_EOL;\n';
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre==='0,1'){
                                o2+='                $o1 .= \'        <input disabled type="range" id="'+obj_champ.nom_du_champ+'" class="yy_ouinon" min="0" max="1" step="1" value="\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+liste_des_champs_insert[i].nom_du_champ+'\']) . \'" >\'; . PHP_EOL;\n';
                            }else{
                                debugger
                            }
                        }
                    }else{
                        /*
                          afr
                        */
                        debugger
                    }
                    
                    o2+='                $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='                $o1 .= \'  </div>\' . PHP_EOL;\n';
                }
            }

            o2+='                /*\n';
            o2+='\n';
            o2+='                */\n';
            o2+='                $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
            o2+='                $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
            o2+='                $o1 .= \'    <input type="hidden" value="\' . $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\'] . \'" id="'+champ_primaire+'" />\' . PHP_EOL;\n';
            o2+='                $o1 .= \'    <div class="hug_bouton yy__x_signaux_2" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_supprimer1),page_liste_des_'+this.#nom_ref+'1())" title="" >Je confirme la suppression</div>\';\n';
            o2+='                $o1 .= \'    </div>\' . PHP_EOL;\n';
            o2+='                $o1 .= \'  </div>\' . PHP_EOL;\n';
            o2+='                $o1 .= \'</div>\' . PHP_EOL;\n';
            o2+='                $donnees_retournees[__x_page] .= $o1;\n';
            o2+='                $donnees_retournees[__xst]=__xsu;\n';
            o2+='\n';
            o2+='            }\n';
            o2+='\n';
            o2+='        }\n';
        }
        o2+='\n';
        o2+='    }\n';


        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function page_'+this.#nom_ref+'_modifier1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $o1=\'\';\n';
        o2+='        $'+champ_primaire+'=\'\';\n';
        o2+='        $l01=count($mat);\n';
        o2+='        for( $i=1 ; $i < $l01 ; $i++ ){\n';
        o2+='            \n';
        o2+='            \n';
        o2+='            if($mat[$i][1] === \''+champ_primaire+'\' && $mat[$i + 1][2] === \'c\' && $mat[$i][2] === \'f\'){\n';
        o2+='\n';
        o2+='                $'+champ_primaire+'=$mat[$i + 1][1];\n';
        o2+='                break;\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        o2+='        \n';
        o2+='        if(is_numeric($'+champ_primaire+') && $'+champ_primaire+' > 0){\n';
        o2+='\n';
        if(ref_select!=='' && ref_update!==''){
        
            o2+='            $tt'+ref_select+'=$this->sql0->sql_iii(\n';
            o2+='                 /*sql_'+ref_select+'()*/ '+ref_select+',\n';
            o2+='                array(/**/\n';
            o2+='                    \'T0_'+champ_primaire+'\' => $'+champ_primaire+'\n';
            o2+='                ),\n';
            o2+='                $donnees_retournees\n';
            o2+='            );\n';
            o2+='            \n';
            o2+='            if($tt'+ref_select+'[__xst] !== __xsu){\n';
            o2+='\n';
            o2+='            if($tt'+ref_select+'[__xst] !== __xsu){\n';
            o2+='\n';
            o2+='                return;\n';
            o2+='\n';
            o2+='            }\n';
            o2+='\n';
            o2+='            $o1 .= \'<h1>modification \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\'] . \') <div class="hug_bouton" style="font-weight:normal;" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_liste_des_'+this.#nom_ref+'1))" title="revenir à la liste" >⬱</div></h1>\' . PHP_EOL;\n';
            o2+='            $o1 .= \'<div id="vv_'+this.#nom_ref+'_modifier1">\' . PHP_EOL;\n';
            o2+='            /**/\n';
            o2+='            $o1 .= \'  <input type="hidden" value="\' . $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\'] . \'" id="'+champ_primaire+'" />\' . PHP_EOL;\n';
            o2+='            /*\n';
            
            for(let i=0;i<liste_des_champs_update.length;i++){
                let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
                let obj_champ=this.#obj_table.champs[nom_du_champ];
                
                
                if(obj_champ.hasOwnProperty('table_mere') && obj_champ.hasOwnProperty('champ_pere') && obj_champ.table_mere !== ''  && obj_champ.champ_pere !== '' ){

                    o2+='        $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    <div class="yy_edition_libelle1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <span>'+obj_champ.meta.nom_bref_du_champ+'</span>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'        <input type="hidden" value="\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+obj_champ.nom_du_champ+'\']) . \'"  id="'+obj_champ.nom_du_champ+'" />\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'        <span id="'+obj_champ.nom_du_champ+'_libelle">\';\n';
                    o2+='        if($tt'+ref_select+'[__xva][0][\'T0.'+obj_champ.nom_du_champ+'\'] === null){\n';
                    o2+='            $o1 .= \'*indéfini\' . PHP_EOL;\n';
                    o2+='        }else{\n';
                    o2+='            $o1 .= \'(\' . $tt'+ref_select+'[__xva][0][\'T0.'+obj_champ.nom_du_champ+'\'] . \') \';\n';

                    o2+='            $o1 .=  htmlentities($tt'+ref_select+'[__xva][0][\''+obj_champ.alias+'.'+obj_champ.champ_pere+'\']) . PHP_EOL;\n';
                    o2+='        }\n';
                    o2+='        $o1 .= \'</span>\' . PHP_EOL;\n';
                    let nom_de_la_classe=obj_champ.table_mere.replace('tbl_','');
                    o2+='        $parametre_sous_fenetre=\'c_'+nom_de_la_classe+'1.page_'+nom_de_la_classe+'_sous_liste1(\';\n';
                    o2+='        $parametre_sous_fenetre .= \' sans_menus1()\';\n';
                    o2+='        $parametre_sous_fenetre .= \' nom_champ_dans_parent1('+obj_champ.nom_du_champ+')\';\n';
                    o2+='        $parametre_sous_fenetre .= \' nom_libelle_dans_parent1('+obj_champ.nom_du_champ+'_libelle)\';\n';
                    o2+='        $parametre_sous_fenetre .= \' libelle_si_vide1("*indéfini")\';\n';
                    o2+='        $parametre_sous_fenetre .= \')\';\n';
                    o2+='        $o1 .= \'      <div class="hug_bouton yy__x_signaux_1" \' . PHP_EOL;\n';
                    o2+='        $o1 .= \'data-hug_click="interface1.affiche_sous_fenetre1(\' . htmlentities($parametre_sous_fenetre) . \')"  title="selectionner">📁</div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <div class="hug_bouton yy__x_signaux_2" data-hug_click="interface1.vider_champ1(\' . htmlentities($parametre_sous_fenetre) . \')"  title="annuler">🚫</div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'  </div>\' . PHP_EOL;\n';

                
                
                }else if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
                }else{
                    o2+='            /*\n';
                    o2+='              =====================================================================================\n';
                    o2+='            */\n';
                    o2+='            $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
                    o2+='            $o1 .= \'    <div class="yy_edition_libelle1">\' . PHP_EOL;\n';
                    o2+='            $o1 .= \'      <span>'+obj_champ.meta.nom_bref_du_champ+'</span>\' . PHP_EOL;\n';
                    o2+='            $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='            $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
                    if(obj_champ.genre_objet_du_champ.chp_espece_genre==='VARCHAR'){
                        let size='';
                        if(obj_champ.genre_objet_du_champ.che_longueur_genre<=64){
                         size=' size="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" ';
                        }
                        o2+='            $o1 .= \'      <input type="text" id="'+obj_champ.nom_du_champ+'" '+size+' maxlength="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" value="\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+obj_champ.nom_du_champ+'\']) . \'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' . PHP_EOL;\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre==='TEXT'){
                        o2+='            $o1 .= \'        <div class="yy_conteneur_txtara">\' . PHP_EOL;\n';
                        o2+='            $o1 .= \'            <textarea id="'+obj_champ.nom_du_champ+'" rows="10"  cols="50" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+obj_champ.nom_du_champ+'\']) . \'</textarea>\' . PHP_EOL;\n';
                        o2+='            $o1 .= \'        </div>\' . PHP_EOL;\n';
                    }else if(obj_champ.genre_objet_du_champ.chp_espece_genre==='INTEGER'){
                        if(obj_champ.genre_objet_du_champ.cht_parmis_genre===null){
                            /*champ entier standard*/
                            o2+='                $o1 .= \'      <input value="" type="number" size="32" maxlength="32" id="'+obj_champ.nom_du_champ+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' . PHP_EOL;\n';
                        }else{
                            if(obj_champ.genre_objet_du_champ.cht_parmis_genre==='0,1'){
                                o2+='            $o1 .= \'        <input type="range" id="'+obj_champ.nom_du_champ+'" class="yy_ouinon" min="0" max="1" step="1" value="\' . enti1($tt'+ref_select+'[__xva][0][\'T0.'+liste_des_champs_insert[i].nom_du_champ+'\']) . \'" >\'; . PHP_EOL;\n';
                            }else{
                                debugger
                            }
                        }
                    }else{
                         /*
                             AFR
                         */
                         debugger
                    }
                    o2+='            $o1 .= \'    </div>\' . PHP_EOL;\n';
                    o2+='            $o1 .= \'  </div>\' . PHP_EOL;\n';
                }
            }
        
        }
        o2+='            /*\n';
        o2+='              =====================================================================================\n';
        o2+='            */\n';
        o2+='            $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
        o2+='            $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
        o2+='            $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_modifier1),'+champ_primaire+'(\' . $'+champ_primaire+' . \'),page_liste_des_'+this.#nom_ref+'1())" title="" >enregistrer et revenir à la liste</div>\';\n';
        o2+='            $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_modifier1),'+champ_primaire+'(\' . $'+champ_primaire+' . \'))" title="" >enregistrer</div>\';\n';
        o2+='            $o1 .= \'    </div>\' . PHP_EOL;\n';
        o2+='            $o1 .= \'  </div>\' . PHP_EOL;\n';
        o2+='            /**/\n';
        o2+='            $o1 .= \'</div>\' . PHP_EOL;\n';
        o2+='            $donnees_retournees[__x_page] .= $o1;\n';
        o2+='            $donnees_retournees[__xst]=__xsu;\n';
        o2+='\n';
        o2+='        }\n';
        o2+='\n';
        o2+='    }\n';   



        o2+='\n';
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='      Pour les iframes sur les '+this.#nom_ref+'\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function vv_'+this.#nom_ref+'_filtre_choix_1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){\n';
        o2+='        $txtPar=\'__num_page(0)\';\n';
        o2+='        $nouvelles_valeurs=array( \'__num_page\' => 0);\n';
        o2+='        foreach($donnees_recues[__xva] as $k0 => $v0){\n';
        o2+='            \n';
        o2+='            if($k0 !== \'__num_page\'){\n';
        o2+='\n';
        o2+='                $nouvelles_valeurs[$k0]=$v0;\n';
        o2+='                \n';
        o2+='                if(is_numeric($v0)){\n';
        o2+='\n';
        o2+='                    $txtPar .= \',\' . $k0 . \'(\' . $v0 . \')\';\n';
        o2+='\n';
        o2+='                }else{\n';
        o2+='\n';
        o2+='                    $txtPar .= \',\' . $k0 . \'(\\\'\' . str_replace(\'\\\'\',\'\\\\\\\'\',$v0) . \'\\\')\';\n';
        o2+='                }\n';
        o2+='\n';
        o2+='\n';
        o2+='            }\n';
        o2+='\n';
        o2+='        }\n';
        o2+='        $_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_'+this.#nom_ref+'_sous_liste1\']=$nouvelles_valeurs;\n';
        o2+='        $obj_matrice=$GLOBALS[\'obj_rev1\']->rev_vers_matrice(\''+this.#nom_de_la_classe_générée+'.page_'+this.#nom_ref+'_sous_liste1(\' . $txtPar . \')\');\n';
        o2+='        \n';
        o2+='        if($obj_matrice[__xst] === __xsu){\n';
        o2+='\n';
        o2+='            $this->page_'+this.#nom_ref+'_sous_liste1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);\n';
        o2+='\n';
        o2+='        }else{\n';
        o2+='\n';
        o2+='            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . \' erreur de convertion de \' . $txtPar . \'\';\n';
        o2+='        }\n';
        o2+='\n';
        o2+='    }\n';
        o2+='\n';
        
        



        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function page_'+this.#nom_ref+'_sous_liste1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o2+='        $fonction1=\''+this.#nom_de_la_classe_générée+'.page_'+this.#nom_ref+'_sous_liste1\';\n';
        o2+='        $o1 = \'\';\n';
        o2+='        /* déverminage */\n';
        o2+='        $__nbMax=10;\n';
        o2+='        /*\n';
        o2+='          $donnees_retournees[__x_signaux][__xif][]=__LINE__ . \'TODO $par \'.var_export($par,true);\n';
        o2+='        */\n';
        o2+='        $par=array();\n';
        o2+='        $par[\'T0_'+champ_primaire+'\']=\'\';\n';
        if(champ_est_libelle_lien!==null){
           o2+='        $par[\'T0_'+champ_est_libelle_lien.nom_du_champ+'\']=\'\';\n';
           o2+='        $par[\'nom_champ_dans_parent1\']=\'\';\n';
           o2+='        $par[\'nom_libelle_dans_parent1\']=\'\';\n';
           o2+='        $par[\'__num_page\']=0;\n';
           o2+='        $numpage=-1;\n';
           o2+='        $par_mat=array();\n';
           o2+='        $l01=count($mat);\n';
           o2+='        $provenance_menu=false;\n';
           o2+='        /* $donnees_retournees[__x_signaux][__xdv][]=\'$mat =\'.json_encode( $mat  , JSON_FORCE_OBJECT );*/\n';
           o2+='        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){\n';
           o2+='            \n';
           o2+='            \n';
           o2+='            if($fonction1 === $mat[$i][1]){\n';
           o2+='\n';
           o2+='                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){\n';
           o2+='                    \n';
           o2+='                    \n';
           o2+='                    if($mat[$j][2] === \'f\' && $mat[$j][8] === 1 && $mat[$j + 1][2] === \'c\'){\n';
           o2+='\n';
           o2+='                        /* $donnees_retournees[__x_signaux][__xdv][]=\'$mat[$j][1] =\'.json_encode( $mat[$j][1] . \' \' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/\n';
           o2+='                        \n';
           o2+='                        if($mat[$j][1] === \'__num_page\'){\n';
           o2+='\n';
           o2+='                            $numpage=$mat[$j + 1][1];\n';
           o2+='                            $par_mat[\'__num_page\']=$mat[$j + 1][1];\n';
           o2+='                            $par[\'__num_page\']=$mat[$j + 1][1];\n';
           o2+='\n';
           o2+='                        }else if($mat[$j][1] === \'indice_menu\'){\n';
           o2+='\n';
           o2+='                            $numpage=0;\n';
           o2+='                            $par_mat[\'__num_page\']=0;\n';
           o2+='                            $provenance_menu=true;\n';
           o2+='                            $par[\'__num_page\']=0;\n';
           o2+='\n';
           o2+='                        }else if($mat[$j + 1][1] !== \'\'){\n';
           o2+='\n';
           o2+='                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];\n';
           o2+='                        }\n';
           o2+='\n';
           o2+='\n';
           o2+='                    }\n';
           o2+='\n';
           o2+='                }\n';
           o2+='\n';
           o2+='            }\n';
           o2+='\n';
           o2+='        }\n';
           o2+='        \n';
           o2+='        if(false === isset($_SESSION[__X_CLE_APPLICATION][$fonction1])){\n';
           o2+='\n';
           o2+='            $par=array_merge($par,$par_mat);\n';
           o2+='            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;\n';
           o2+='\n';
           o2+='        }else{\n';
           o2+='\n';
           o2+='            $par=$_SESSION[__X_CLE_APPLICATION][$fonction1];\n';
           o2+='            \n';
           o2+='            if($provenance_menu === true){\n';
           o2+='\n';
           o2+='                $par[\'__num_page\']=0;\n';
           o2+='\n';
           o2+='            }else{\n';
           o2+='\n';
           o2+='                \n';
           o2+='                if($numpage === -1){\n';
           o2+='\n';
           o2+='\n';
           o2+='                }else{\n';
           o2+='\n';
           o2+='                    $par[\'__num_page\']=$numpage;\n';
           o2+='                }\n';
           o2+='\n';
           o2+='            }\n';
           o2+='\n';
           o2+='            $_SESSION[__X_CLE_APPLICATION][$fonction1]=$par;\n';
           o2+='        }\n';
           o2+='\n';
           o2+='        $par[\'T0_'+champ_primaire+'\']=$par[\'T0_'+champ_primaire+'\']??\'\';\n';
           o2+='        $par[\''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\']=$par[\''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\']??\'\';\n';
           o2+='        $par[\'nom_champ_dans_parent1\']=$par_mat[\'nom_champ_dans_parent1\']??\'\';\n';
           o2+='        $par[\'nom_libelle_dans_parent1\']=$par_mat[\'nom_libelle_dans_parent1\']??\'\';\n';
           o2+='        $nom_filtre=\'vv_'+this.#nom_ref+'_filtre_choix_1\';\n';
           o2+='        $o1 .= \'<h1>\' . SELF::LISTE_DES_ELEMENTS_GERES . \'</h1>\';\n';
           o2+='        $__num_page=!isset($par[\'__num_page\']) ? 0 : (int)($par[\'__num_page\']);\n';
           o2+='        $__debut=$__num_page * $__nbMax;\n';
           o2+='        $o1 .= \'<div class="yy_filtre_liste1" id="\' . $nom_filtre . \'">\' . PHP_EOL;\n';
           o2+='        /**/\n';
           o2+='        $o1 .= \'   <div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'      <div><span>'+champ_est_libelle_lien.champ_dans_la_base.meta.nom_bref_du_champ+'</span></div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'      <div><input type="text" id="'+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'" value="\' . $par[\''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\'] . \'" size="8" maxlength="64" autocapitalize="off" />\' . PHP_EOL;\n';
           o2+='        \n';
           o2+='        if($par[\''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\'] !== \'\'){\n';
           o2+='\n';
           o2+='            $o1 .= \'         <span class="hug_bouton yy__x_signaux___xif" data-hug_click="maj_interface1(modifier(id('+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'),value(\\\'\\\'))),'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(\' . $nom_filtre . \'))" >x</span>\';\n';
           o2+='\n';
           o2+='        }\n';
           o2+='\n';
           o2+='        $o1 .= \'      </div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'   </div>\' . PHP_EOL;\n';
           o2+='        /**/\n';
           o2+='        $o1 .= \'   <div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'    <div><span>id</span></div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'    <div><input type="text" id="T0_'+champ_primaire+'" value="\' . $par[\'T0_'+champ_primaire+'\'] . \'" size="8" maxlength="32" autocapitalize="off" /></div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'   </div>\' . PHP_EOL;\n';
           o2+='        /**/\n';
           o2+='        $o1 .= \'   <div>    \' . PHP_EOL;\n';
           o2+='        $o1 .= \'     <div><span>&nbsp;</span></div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(\' . $nom_filtre . \'))" >🔎</div></div>\' . PHP_EOL;\n';
           o2+='        $o1 .= \'     <input type="hidden" id="__num_page" value="\' . $__debut . \'" />\' . PHP_EOL;\n';
           o2+='        $o1 .= \'     <input type="hidden" id="nom_champ_dans_parent1" value="\' . $par[\'nom_champ_dans_parent1\'] . \'"  />\' . PHP_EOL;\n';
           o2+='        $o1 .= \'     <input type="hidden" id="nom_libelle_dans_parent1" value="\' . $par[\'nom_libelle_dans_parent1\'] . \'"  />\' . PHP_EOL;\n';
           o2+='        $o1 .= \'   </div> \' . PHP_EOL;\n';
           o2+='        /**/\n';
           o2+='        $o1 .= \'</div>\';\n';
           if(ref_liste_ecran!=='' && ref_liste_ecran!==''){
           
               o2+='        $tt=$this->sql0->sql_iii(\n';
               o2+='             '+ref_liste_ecran+',\n';
               o2+='             /**/ array(\n';
               o2+='                /**/\n';
               o2+='                \'T0_'+champ_primaire+'\' => $par[\'T0_'+champ_primaire+'\'] === \'\' ? \'\' : $par[\'T0_'+champ_primaire+'\'],\n';
               o2+='                \''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\' => $par[\''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\'] === \'\' ? \'\' : \'\' . $par[\''+champ_est_libelle_lien.préfixe_du_champ+'_'+champ_est_libelle_lien.nom_du_champ+'\'] . \'\',\n';
               for( let i in liste_des_champs_liste_ecran){
                   try{
                       if(
                             liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_incrément_genre===1 
                          || liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_primaire_genre===1 
                          || liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.hasOwnProperty('est_libelle_lien')){
                       }else{
                          o2+='                \''+liste_des_champs_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_liste_ecran[i].nom_du_champ+'\' => \'\',\n';
                       }
                   }catch(e){
                       debugger;
                   }
               }
               
               o2+='                \'quantitee\' => $__nbMax,\n';
               o2+='                \'debut\' => $__debut\n';
               o2+='            ),\n';
               o2+='            $donnees_retournees\n';
               o2+='        );\n';
               o2+='        \n';
               o2+='        if($tt[__xst] === __xer){\n';
               o2+='\n';
               o2+='            $donnees_retournees[__x_signaux][__xer][]=\'Erreur dans la \' . SELF::LISTE_DES_ELEMENTS_GERES . \' [\' . __LINE__ . \']\';\n';
               o2+='            return;\n';
               o2+='\n';
               o2+='        }\n';
               o2+='\n';
               o2+='        /*\n';
               o2+='          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \'TODO $tt \'.var_export($tt,true);\n';
               o2+='        */\n';
               o2+='        $bouton_avant=\'\';\n';
               o2+='        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt[\'nombre\'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));\n';
               o2+='        $lsttbl=\'\';\n';
               o2+='        $lsttbl .= \'<thead><tr>\';\n';
               o2+='        $lsttbl .= \'<th></th>\';\n';
               o2+='        $lsttbl .= \'<th>id</th>\';\n';
               o2+='        $lsttbl .= \'<th>'+champ_est_libelle_lien.champ_dans_la_base.meta.nom_bref_du_champ+'</th>\';\n';
               o2+='        $lsttbl .= \'</tr></thead><tbody>\';\n';
               o2+='        foreach($tt[__xva] as $k0 => $v0){\n';
               o2+='            $lsttbl .= \'<tr>\';\n';
               o2+='            /**/\n';
               o2+='            $parametres=\'\';\n';
               o2+='            $parametres .= \'interface1.choisir_dans_sous_fenetre1(\';\n';
               o2+='            $parametres .= \'    nom_champ_dans_parent1(\' . $par[\'nom_champ_dans_parent1\'] . \')\';\n';
               o2+='            $parametres .= \'    nom_libelle_dans_parent1(\' . $par[\'nom_libelle_dans_parent1\'] . \')\';\n';
               o2+='            $parametres .= \'    id1(\' . $v0[\'T0.'+champ_primaire+'\'] . \')\';\n';
               o2+='            $parametres .= \'    libelle1("(\' . $v0[\'T0.'+champ_primaire+'\'] . \') \' . $v0[\''+champ_est_libelle_lien.préfixe_du_champ+'.'+champ_est_libelle_lien.nom_du_champ+'\'] . \'" )\';\n';
               o2+='            $parametres .= \')\';\n';
               o2+='            $lsttbl .= \'<td style="max-width:calc(1*var(t_1boutons_carres))">\';\n';
               o2+='            $lsttbl .= \'  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="\' . htmlentities($parametres) . \'">=&gt;</div>\';\n';
               o2+='            $lsttbl .= \'</td>\';\n';
               o2+='            /**/\n';
               o2+='            $lsttbl .= \'<td style="text-align:center;">\';\n';
               o2+='            $lsttbl .= \'\' . $v0[\'T0.'+champ_primaire+'\'] . \'\';\n';
               o2+='            $lsttbl .= \'</td>\';\n';
               o2+='            /**/\n';
               o2+='            $lsttbl .= \'<td style="text-align:left;">\';\n';
               o2+='            \n';
               o2+='            if($v0[\''+champ_est_libelle_lien.préfixe_du_champ+'.'+champ_est_libelle_lien.nom_du_champ+'\'] !== null){\n';
               o2+='\n';
               o2+='                $lsttbl .= \'\' . enti1($v0[\''+champ_est_libelle_lien.préfixe_du_champ+'.'+champ_est_libelle_lien.nom_du_champ+'\']) . \'\';\n';
               o2+='\n';
               o2+='            }\n';
               o2+='\n';
               o2+='            $lsttbl .= \'</td>\';\n';
               o2+='            /**/\n';
               o2+='            /**/\n';
               o2+='            $lsttbl .= \'</tr>\';\n';
               o2+='        }\n';
               o2+='        $o1 .= \'<div class="yy_div_contenant_table"><table class="yy_table_liste1">\' . PHP_EOL . $lsttbl . \'</tbody></table></div>\' . PHP_EOL;\n';
           }
        }
        o2+='        $donnees_retournees[__x_page] .= $o1;\n';
        o2+='        $donnees_retournees[__xst]=__xsu;\n';
        o2+='    }\n';


         // fin de if false



        o2+='\n';
        o2+='    /*\n';
        o2+='      =============================================================================================================\n';
        o2+='    */\n';
        o2+='    function page_liste_des_'+this.#nom_ref+'1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){\n';
        o2+='        $__nbMax=10;\n';
        o2+='        $par=array();\n';
        if(ref_liste_ecran!=='' && ref_liste_ecran!==''){
            for( let i in liste_des_champs_condition_liste_ecran){ // liste_des_champs_liste_ecran
                try{
                    if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre===1
                    ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre===1
                    ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1
                    ){
                    }else{
                        o2+='        $par[\''+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'\']=\'\';\n';
                    }
                }catch(e){
                    debugger
                }
            }
            o2+='        $par[\'__num_page\']=0;\n';
            o2+='        $numpage=-1;\n';
            o2+='        $par_mat=array();\n';
            o2+='        $l01=count($mat);\n';
            o2+='        $provenance_menu=false;\n';
            o2+='        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){\n';
            o2+='            \n';
            o2+='            \n';
            o2+='            if(\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\' === $mat[$i][1]){\n';
            o2+='\n';
            o2+='                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){\n';
            o2+='                    \n';
            o2+='                    \n';
            o2+='                    if($mat[$j][2] === \'f\' && $mat[$j][8] === 1 && $mat[$j + 1][2] === \'c\'){\n';
            o2+='\n';
            o2+='                        \n';
            o2+='                        if($mat[$j][1] === \'__num_page\'){\n';
            o2+='\n';
            o2+='                            $numpage=$mat[$j + 1][1];\n';
            o2+='                            $par_mat[\'__num_page\']=$mat[$j + 1][1];\n';
            o2+='                            $par[\'__num_page\']=$mat[$j + 1][1];\n';
            o2+='\n';
            o2+='                        }else if($mat[$j][1] === \'indice_menu\'){\n';
            o2+='\n';
            o2+='                            $numpage=0;\n';
            o2+='                            $par_mat[\'__num_page\']=0;\n';
            o2+='                            $provenance_menu=true;\n';
            o2+='                            $par[\'__num_page\']=0;\n';
            o2+='\n';
            o2+='                        }else if($mat[$j + 1][1] !== \'\'){\n';
            o2+='\n';
            o2+='                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];\n';
            o2+='                        }\n';
            o2+='\n';
            o2+='\n';
            o2+='                    }\n';
            o2+='\n';
            o2+='                }\n';
            o2+='\n';
            o2+='            }\n';
            o2+='\n';
            o2+='        }\n';
            o2+='        \n';
            o2+='        if(false === isset($_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\'])){\n';
            o2+='\n';
            o2+='            $par=array_merge($par,$par_mat);\n';
            o2+='            $_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\']=$par;\n';
            o2+='\n';
            o2+='        }else{\n';
            o2+='\n';
            o2+='            $par=$_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\'];\n';
            o2+='            \n';
            o2+='            if($provenance_menu === true){\n';
            o2+='\n';
            o2+='                $par[\'__num_page\']=0;\n';
            o2+='\n';
            o2+='            }else{\n';
            o2+='\n';
            o2+='                \n';
            o2+='                if($numpage === -1){\n';
            o2+='\n';
            o2+='\n';
            o2+='                }else{\n';
            o2+='\n';
            o2+='                    $par[\'__num_page\']=$numpage;\n';
            o2+='                }\n';
            o2+='\n';
            o2+='            }\n';
            o2+='\n';
            o2+='            $_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\']=$par;\n';
            o2+='        }\n';
            o2+='\n';
            for( let i in liste_des_champs_condition_liste_ecran){ // liste_des_champs_liste_ecran
                if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre===1
                ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre===1
                ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1
                ){
                }else{
                    o2+='        $par[\''+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'\']=$par[\''+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'\']??\'\';\n';
                }
            }
            
            o2+='        $fonction1=\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\';\n';
            o2+='        $nom_filtre=\'vv_'+this.#nom_ref+'_filtre1\';\n';
            o2+='        $o1=\'<h1>\' . SELF::LISTE_DES_ELEMENTS_GERES . \'</h1>\';\n';
            o2+='        $__num_page=!isset($par[\'__num_page\']) ? 0 : (int)($par[\'__num_page\']);\n';
            o2+='        $__debut=$__num_page * $__nbMax;\n';
            o2+='        $o1 .= \'<div class="yy_filtre_liste1" id="\' . $nom_filtre . \'">\' . PHP_EOL;\n';

            for( let i in liste_des_champs_condition_liste_ecran){
                if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre===1
                ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre===1
                ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1
                ){
                }else{
                    o2+='        /*\n';
                    o2+='          \n';
                    o2+='        */\n';
                    o2+='        $o1 .= \'   <div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <div><span>'+liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.meta.nom_bref_du_champ+'</span></div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      <div><input type="text" id="'+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'" value="\' . $par[\''+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'\'] . \'" size="8" maxlength="64" autocapitalize="off" />\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'      </div>\' . PHP_EOL;\n';
                    o2+='        $o1 .= \'   </div>\' . PHP_EOL;\n';
                }
            }
            
            o2+='        /*\n';
            o2+='          \n';
            o2+='        */\n';
            o2+='        $o1 .= \'   <div>    \' . PHP_EOL;\n';
            o2+='        $o1 .= \'     <div><span>&nbsp;</span></div>\' . PHP_EOL;\n';
            o2+='        $o1 .= \'     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(\' . $nom_filtre . \'))" >🔎</div></div>\' . PHP_EOL;\n';
            o2+='        $o1 .= \'     <input type="hidden" id="__num_page" value="\' . $__debut . \'" />\' . PHP_EOL;\n';
            o2+='        $o1 .= \'   </div> \' . PHP_EOL;\n';
            o2+='        $o1 .= \'</div>\';\n';
            o2+='        $tt=$this->sql0->sql_iii(\n';
            o2+='            '+ref_liste_ecran+',\n';
            o2+='            array(\n';
            o2+='                /**/\n';
            for( let i in liste_des_champs_condition_liste_ecran){
                if(liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre===1
                ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre===1
                ||liste_des_champs_condition_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1
                ){
                }else{
                    o2+='                \''+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'\' => $par[\''+liste_des_champs_condition_liste_ecran[i].préfixe_du_champ+'_'+liste_des_champs_condition_liste_ecran[i].nom_du_champ+'\'] ,\n';
                }
            }
            o2+='                \'quantitee\' => $__nbMax,\n';
            o2+='                \'debut\' => $__debut\n';
            o2+='            ),\n';
            o2+='            $donnees_retournees\n';
            o2+='        );\n';
            o2+='        \n';
            o2+='        if($tt[__xst] === __xer){\n';
            o2+='\n';
            o2+='            $o1=\'\';\n';
            o2+='            $o1 .= \'<div>\';\n';
            o2+='            $o1 .= \'  <h3 class="yy__x_signaux_0">Erreur technique [\' . __METHOD__ . \' \' . __LINE__ . \']</h1>\';\n';
            o2+='            $o1 .= \'  <div style="text-align:center">\';\n';
            o2+='            $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1()" title="" >\';\n';
            o2+='            $o1 .= \'      Réessayer\';\n';
            o2+='            $o1 .= \'    </div>\';\n';
            o2+='            $o1 .= \'    <br /><br />Si le problème persiste, veuillez contacter la maintenance de l\\\'application\';\n';
            o2+='            $o1 .= \'  </div>\';\n';
            o2+='            unset($_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\']);\n';
            o2+='            \n';
            o2+='            if($GLOBALS[DEVER_SRV] >= 2){\n';
            o2+='\n';
            o2+='                $o1 .= \'  <pre>\' . $tt[\'sql0\'] . \'</per>\';\n';
            o2+='\n';
            o2+='            }\n';
            o2+='\n';
            o2+='            $o1 .= \'</div>\';\n';
            o2+='            /* en fonction du déverminage */\n';
            o2+='            $donnees_retournees[__x_page] .= $o1;\n';
            o2+='            $donnees_retournees[__xst]=__xsu;\n';
            o2+='            return;\n';
            o2+='\n';
            o2+='        }\n';
            o2+='\n';
            o2+='        /*\n';
            o2+='          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \'TODO $tt \'.var_export($tt,true);\n';
            o2+='        */\n';
            o2+='        $bouton_avant=\'<div class="hug_bouton yy__x_signaux___xif" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_creer1))" title="création \' . self::DUN_DUNE_ELEMENT_GERE . \'" >+*</div>\';\n';
            o2+='        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt[\'nombre\'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));\n';
            o2+='        $lsttbl=\'\';\n';
            o2+='        $lsttbl .= \'<thead><tr>\';\n';
            o2+='        $lsttbl .= \'<th>action</th>\';\n';
            
            for( let i in liste_des_champs_liste_ecran){
                if(liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre===1
                ||liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre===1
                ||liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1
                ){
                }else{
                    o2+='        $lsttbl .= \'<th>'+liste_des_champs_liste_ecran[i].champ_dans_la_base.meta.nom_bref_du_champ+'</th>\';\n';
                }
            }
            
            o2+='        $lsttbl .= \'</tr></thead><tbody>\';\n';
            o2+='        foreach($tt[__xva] as $k0 => $v0){\n';
            o2+='            $lsttbl .= \'<tr>\';\n';
            o2+='            /**/\n';
            o2+='            $lsttbl .= \'<td data-label="" style="text-align:left!important;">\';\n';
            o2+='            $lsttbl .= \' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">\';\n';
            o2+='            $lsttbl .= \'  <div class="hug_bouton yy__x_signaux___xif" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_modifier1),'+champ_primaire+'(\' . $v0[\'T0.'+champ_primaire+'\'] . \'))">✎</div>\';\n';
            o2+='            $lsttbl .= \'  <div class="hug_bouton yy__x_signaux___xal" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_supprimer1),'+champ_primaire+'(\' . $v0[\'T0.'+champ_primaire+'\'] . \'))">🗑</div>\';\n';
            o2+='            $lsttbl .= \' </div>\';\n';
            o2+='            $lsttbl .= \'</td>\';\n';
            
            for( let i in liste_des_champs_liste_ecran){
                if(liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsc_genre===1
                ||liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_tsm_genre===1
                ||liste_des_champs_liste_ecran[i].champ_dans_la_base.genre_objet_du_champ.che_est_nur_genre===1
                ){
                }else{
                    o2+='            /*\n';
                    o2+='            */\n';
                    o2+='            $lsttbl .= \'<td style="text-align:center;">\';\n';
                    o2+='            $lsttbl .= \'\' . $v0[\''+liste_des_champs_liste_ecran[i].préfixe_du_champ+'.'+liste_des_champs_liste_ecran[i].nom_du_champ+'\'] . \'\';\n';
                    o2+='            $lsttbl .= \'</td>\';\n';
                }
            }
            
            o2+='            /**/\n';
            o2+='            $lsttbl .= \'</tr>\';\n';
            o2+='        }\n';
        }
        o2+='        $o1 .= \'<div class="yy_div_contenant_table"><table class="yy_table_liste1">\' . PHP_EOL . $lsttbl . \'</tbody></table></div>\' . PHP_EOL;\n';
        o2+='        $donnees_retournees[__x_page] .= $o1;\n';
        o2+='        $donnees_retournees[__x_action]=\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1()\';\n';
        o2+='        $donnees_retournees[__xst]=__xsu;\n';
        o2+='    }\n';


        /*
          =====================================================================================================
        */
        
        o2+='}';
        document.getElementById('php_bdd1').value=o2;
        return({__xst:__xsu});
    }
    /*
      =============================================================================================================
    */
    pre_selectionner(p){
        let tous_remplis=true;
        for(let type_requete in this.#liste_des_types_de_requetes){
            let lst=document.getElementById('reference_requete_' + this.#liste_des_types_de_requetes[type_requete]).getElementsByTagName('option');
            if(lst.length===2){
                let id_requete=parseInt(lst[1].value,10);
                document.getElementById('reference_requete_' + this.#liste_des_types_de_requetes[type_requete]).value=id_requete;
                document.getElementById('libelle_de_la_requete_' + this.#liste_des_types_de_requetes[type_requete] ).innerHTML='<pre>' + __gi1.__js_des_sql[id_requete].cht_sql_requete + '</pre>';
            }else{
                tous_remplis=false;
            }
        }
        if(true || tous_remplis === true){
            document.getElementById( 'gererer_le_php_bdd1' ).style.visibility='visible';
            let obj=this.générer_le_php(null);
            if(obj.__xst===__xsu){
            }else{
                debugger;
            }
            
        }else{
            document.getElementById( 'gererer_le_php_bdd1' ).style.visibility='hidden';
        }
    }
    /*
      =============================================================================================================
    */
    selectionner_une_requete( mat ){
        let zone_select='';
        let zone_td='';
        for( let i=1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_td' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_td=mat[i + 1][1];
            }
        }
        if(zone_select !== '' && zone_td !== ''){
            if(document.getElementById( zone_select ).value === ''){
                document.getElementById( zone_td ).innerHTML='';
            }else{
                document.getElementById( zone_td ).innerHTML='<pre>' + __gi1.__js_des_sql[document.getElementById( zone_select ).value].cht_sql_requete + '</pre>';
            }
        }
        let tous_remplis=true;
        for(let type_requete in this.#liste_des_types_de_requetes){
            if(document.getElementById( 'reference_requete_' + this.#liste_des_types_de_requetes[type_requete] ).value === ''){
                tous_remplis=false;
            }
        }
        if(tous_remplis === true){
            document.getElementById( 'gererer_le_php_bdd1' ).style.visibility='visible';
        }else{
            document.getElementById( 'gererer_le_php_bdd1' ).style.visibility='hidden';
        }
    }
    /*
      =============================================================================================================
    */
    enrichir_objet_base(mat2){
        let l02=mat2.length;
        let nom_de_la_table='';
        this.#obj_bdd={};
        this.#obj_table={};
        
        for( let j=1 ; j < l02 ; j=mat2[j][12] ){
            if(mat2[j][2] === 'f' && mat2[j][1] === 'créer_table'){
                nom_de_la_table='';
                for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                    if(mat2[k][2] === 'f' && mat2[k][1] === 'nom_de_la_table' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                        nom_de_la_table=mat2[k + 1][1];
                        this.#obj_bdd[nom_de_la_table]={
                            champs:{},
                            ordre_des_champs:[],
                            meta:{}
                        }
                    }
                }
                if(nom_de_la_table !== ''){
                 
                    for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                        if(mat2[k][2] === 'f' && mat2[k][1] === 'meta'){
                            for( let l=k + 1 ; l < l02 ; l=mat2[l][12] ){
                                if(mat2[l][2] === 'f' && mat2[l][8] === 1 && mat2[l+1][2] === 'c'){
                                  this.#obj_bdd[nom_de_la_table].meta[mat2[l][1]]=mat2[l+1][1];
                                }
                            }
                        }
                    }
                 
                    for( let l=j + 1 ; l < l02 ; l=mat2[l][12] ){
                        if(mat2[l][1] === 'champs'){
                            for( let m=l + 1 ; m < l02 ; m=mat2[m][12] ){
                                if(mat2[m][1] === 'champ'){
                                    var nom_du_champ='';
                                    for( let n=m + 1 ; n < l02 ; n=mat2[n][12] ){
                                        if(mat2[n][1] === 'nom_du_champ'){
                                            nom_du_champ=mat2[n + 1][1];
                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]={"nom_du_champ" : nom_du_champ , meta:{}};
                                        }
                                    }
                                    if(nom_du_champ !== ''){
                                        this.#obj_bdd[nom_de_la_table].ordre_des_champs.push(nom_du_champ);
                                        for( let n=m + 1 ; n < l02 ; n=mat2[n][12] ){
                                            if(mat2[n][1] === 'type'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['type_du_champ']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'primary_key'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['primary_key']=true;
                                            }else if(mat2[n][1] === 'non_nulle'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['non_nulle']=true;
                                            }else if(mat2[n][1] === 'espece_du_champ'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['espece_du_champ']=mat2[n + 1][1];
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['type_du_champ']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'references' && mat2[n][8] === 2 ){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['table_mere']=mat2[n+1][1];
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['champ_pere']=mat2[n+2][1];
                                            }else if(mat2[n][1] === 'longueur_du_champ' && mat2[n][8] === 1  && mat2[n+1][2] === 'c'  ){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['longueur_du_champ']=parseInt(mat2[n+1][1],10);
                                            }else if(mat2[n][1] === 'meta' && mat2[n][2] === 'f'){
                                                for( let o=n + 1 ; o < l02 ; o=mat2[o][12] ){
                                                    if(mat2[o][1] === 'genre' && mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o+1][2] === 'c'){
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_numerique_du_champ']=mat2[o + 1][1];
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_objet_du_champ']=__gi1.__liste_des_genres[mat2[o + 1][1]];
                                                        
                                                        /*
                                                        debugger
                                                        __gi1.__liste_des_genres
                                                        */
//                                                            console.log('mat2[o][1]='+nom_du_champ+ ' : ' +mat2[o+1][1]);
                                                    }else{
                                                        if(mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o+1][2] === 'c'){
                                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1]]=mat2[o+1][1];
                                                        }
                                                    }
                                                 
                                                }
                                            }else{
//                                                 console.log('tab2[n][1]='+tab2[n][1]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    debugger;
                }
            }
        }
        console.log('this.#obj_bdd',this.#obj_bdd);
        
        
    }
    /*
      =============================================================================================================
    */
    charger_base1( par ){
        console.log( 'par=' , par );
        this.#chp_rev_travail_basedd=par['donnees_bdd']['T0.chp_rev_travail_basedd'];
        
        var obj1=__gi1.__m_rev1.rev_tm( this.#chp_rev_travail_basedd );
        if(obj1.__xst === __xsu){
            this.#mat=obj1.__xva;
            this.enrichir_objet_base(obj1.__xva);
        }else{
            debugger;
        }
        
        this.#nom_de_la_table=par['nom_de_la_table'];
        this.#obj_table=this.#obj_bdd[this.#nom_de_la_table];

        let o1='';
        o1+='<table>';
        for(let type_requete in this.#liste_des_types_de_requetes){
            o1+='<tr>';
            o1+='<td>';
            var cmd='';
            cmd+='interface1.module1(';
            cmd+=' chemin_module1(\'_js/c_php_bdd1.js\'),';
            cmd+=' methode3(selectionner_une_requete),';
            cmd+=' parametre3( ';
            cmd+='  zone_select(reference_requete_' + this.#liste_des_types_de_requetes[type_requete] + ')';
            cmd+='  zone_td(libelle_de_la_requete_' + this.#liste_des_types_de_requetes[type_requete] + ')';
            cmd+=' )';
            cmd+=')';
            o1+=this.#liste_des_types_de_requetes[type_requete] + ' : ';
            o1+='<select id="reference_requete_' + this.#liste_des_types_de_requetes[type_requete] + '" data-hug_change="' + cmd + '">';
            o1+='<option value="">indéfini</option>';
            for(let i in __gi1.__js_des_sql){
                if(this.#liste_des_types_de_requetes[type_requete] === 'select' || this.#liste_des_types_de_requetes[type_requete] === 'liste_ecran'){
                    if(__gi1.__js_des_sql[i].cht_sql_requete.indexOf( par.nom_de_la_table + ' T0' ) >= 0
                           && __gi1.__js_des_sql[i].chp_type_requete === this.#liste_des_types_de_requetes[type_requete]
                           && __gi1.__js_des_sql[i].che_est_souche_requete === 1
                    ){
                        o1+='<option value="' + i + '">' + i + '</option>';
                    }
                }else{
                    if(__gi1.__js_des_sql[i].cht_sql_requete.indexOf( par.nom_de_la_table ) >= 0
                           && __gi1.__js_des_sql[i].chp_type_requete === this.#liste_des_types_de_requetes[type_requete]
                           && __gi1.__js_des_sql[i].che_est_souche_requete === 1
                    ){
                        o1+='<option value="' + i + '">' + i + '</option>';
                    }
                }
            }
            o1+='</select>';
            o1+='</td>';
            o1+='<td id="libelle_de_la_requete_' + this.#liste_des_types_de_requetes[type_requete] + '">';
            o1+='</td>';
            o1+='</tr>';
        }
        o1+='</table>';
        o1+='<select id="incice_de_la_classe">';
        o1+='<option value="1" selected>1</option>';
        o1+='<option value="2" >2</option>';
        o1+='<option value="3" >3</option>';
        o1+='<option value="4" >4</option>';
        o1+='<option value="5" >5</option>';
        o1+='<option value="6" >6</option>';
        o1+='<option value="7" >7</option>';
        o1+='<option value="8" >8</option>';
        o1+='<option value="9" >9</option>';
        o1+='</select>';
        
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(générer_le_php),';
        cmd+=')';
        
        o1+='<div id="gererer_le_php_bdd1" data-hug_click="'+cmd+'" style="visibility:hidden;" class="hug_bouton yy__x_signaux_1">générer</div>';
        
        o1+='<div class="yy_conteneur_txtara">';
        o1+='<div>';
        o1+=' <div class="hug_bouton" data-hug_click="c_fonctions_js1(agrandir_la_zone(zone(php_bdd1)))" title="agrandir la zone">🖐</div>';
        o1+=' <div class="hug_bouton" data-hug_click="c_fonctions_js1(retrecir_la_zone(zone(php_bdd1)))" title="retrecir la zone">👊</div>';
        o1+=' <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_position1(zone_source(php_bdd1)))" title="aller à la position" >position</div>';
        o1+=' <div class="hug_bouton yy__x_signaux_3" data-hug_click="c_fonctions_js1(aller_a_la_ligne1(zone_source(php_bdd1)))" title="aller à la ligne" >ligne</div>';
        o1+='</div>'
        
        
        o1+='<textarea id="php_bdd1" rows="10" cols="50" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>';
        o1+='</div>'
        let contenu_generer_le_php=document.getElementById( 'contenu_generer_le_php' );
        contenu_generer_le_php.innerHTML=o1;
        __gi1.ajoute_les_evenements_aux_boutons( null );
        setTimeout(()=>{this.pre_selectionner();},50);
    }
    /*
      =============================================================================================================
    */
    init0( par ){
        console.log( par );
        __gi1.fermer_sous_fenetre1( [] );
        this.#chp_rev_travail_basedd=null;
        this.#nom_de_la_table=null;
        let cmd='';
        cmd+='c_bases1.recuperer_zone_travail_pour_les_bases2(';
        cmd+=' les_id_des_bases(' + par.chi_id_basedd + '),';
        cmd+=' nom_de_la_table(\'' + par.nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        cmd+=' nom_du_module2(\'_js/c_php_bdd1.js\'),';
        cmd+=' valeurs2(generer_le_php)'
        cmd+=')';
        let obj={"__x_action" : cmd};
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
}
export{c_php_bdd1 as c_php_bdd1};