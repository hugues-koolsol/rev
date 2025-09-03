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
        let o1='<?php\n';
     

        o1+='class '+this.#nom_de_la_classe_générée+'{\n';
        o1+='    private $sql0=null;\n';
        o1+='    private const DUN_DUNE_ELEMENT_GERE = \''+def_table.meta.distinction_pour_isad+'\';\n';
        o1+='    private const LISTE_DES_ELEMENTS_GERES = \''+def_table.meta.distinction_pour_liste+'\';\n';
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    public function __construct(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o1+='        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . \'c_sql0.php\');\n';
        o1+='        $this->sql0=new c_sql0($donnees_retournees,$mat,$donnees_recues);\n';
        o1+='    }\n';
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    public function formulaire1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o1+='\n';
        o1+='\n';
        o1+='        $l01=count($mat);\n';
        o1+='        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){\n';
        o1+='            \n';
        o1+='            \n';
        o1+='            if($mat[$i][1] === \''+this.#nom_de_la_classe_générée+'.formulaire1\' && $mat[$i][2] === \'f\' && $mat[$i][8] >= 1){\n';
        o1+='\n';
        o1+='                $conteneur1=\'\';\n';
        o1+='                $action1=\'\';\n';
        o1+='                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){\n';
        o1+='                    \n';
        o1+='                    \n';
        o1+='                    if($mat[$j][1] === \'conteneur1\' && $mat[$j + 1][2] === \'c\'){\n';
        o1+='\n';
        o1+='                        $conteneur1=$mat[$j + 1][1];\n';
        o1+='\n';
        o1+='                    }else if($mat[$j][1] === \'action1\' && $mat[$j + 1][2] === \'c\'){\n';
        o1+='\n';
        o1+='                        $action1=$mat[$j + 1][1];\n';
        o1+='                    }\n';
        o1+='\n';
        o1+='                }\n';
        o1+='                \n';
        o1+='                if($action1 !== \'\'){\n';
        o1+='\n';
        o1+='                    \n';
        o1+='                    if($action1 === \'page_'+this.#nom_ref+'_creer1\'\n';
        o1+='                       || $action1 === \'page_'+this.#nom_ref+'_modifier1\'\n';
        o1+='                       || $action1 === \'page_'+this.#nom_ref+'_supprimer1\'\n';
        o1+='                       || $action1 === \'page_liste_des_'+this.#nom_ref+'1\'\n';
        o1+='                    ){\n';
        o1+='\n';
        o1+='                        $this->$action1(\n';
        o1+='                            $donnees_retournees,\n';
        o1+='                             /*matrice*/ $mat,\n';
        o1+='                            $donnees_recues\n';
        o1+='                        );\n';
        o1+='\n';
        o1+='                    }else{\n';
        o1+='\n';
        o1+='                        $donnees_retournees[__x_signaux][__xal][]=\'action non traitée "\' . $action1 . \'" [\' . __LINE__ . \']\';\n';
        o1+='                    }\n';
        o1+='\n';
        o1+='\n';
        o1+='                }else if($conteneur1 === \'vv_'+this.#nom_ref+'_modifier1\'\n';
        o1+='                   || $conteneur1 === \'vv_'+this.#nom_ref+'_creer1\'\n';
        o1+='                   || $conteneur1 === \'vv_'+this.#nom_ref+'_supprimer1\'\n';
        o1+='                   || $conteneur1 === \'vv_'+this.#nom_ref+'_filtre1\'\n';
        o1+='                ){\n';
        o1+='\n';
        o1+='                    $this->$conteneur1(\n';
        o1+='                        $donnees_retournees,\n';
        o1+='                         /*matrice*/ $mat,\n';
        o1+='                        $donnees_recues\n';
        o1+='                    );\n';
        o1+='\n';
        o1+='                }else{\n';
        o1+='\n';
        o1+='                    $donnees_retournees[__x_signaux][__xal][]=\'traitement à réaliser pour $donnees_recues \' . var_export($donnees_recues,true) . \' [\' . __LINE__ . \']\';\n';
        o1+='                }\n';
        o1+='\n';
        o1+='                break;\n';
        o1+='\n';
        o1+='            }\n';
        o1+='\n';
        o1+='        }\n';
        o1+='    }\n';
        
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    function vv_'+this.#nom_ref+'_creer1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o1+='        $page_liste_des_'+this.#nom_ref+'1=false;\n';
        o1+='        $l01=count($mat);\n';
        o1+='        for( $i=1 ; $i < $l01 ; $i++ ){\n';
        o1+='            \n';
        o1+='            \n';
        o1+='            if($mat[$i][1] === \'page_liste_des_'+this.#nom_ref+'1\' && $mat[$i][2] === \'f\' && $mat[$i][8] === 0){\n';
        o1+='\n';
        o1+='                $page_liste_des_'+this.#nom_ref+'1=true;\n';
        o1+='                break;\n';
        o1+='\n';
        o1+='            }\n';
        o1+='\n';
        o1+='        }\n';
        o1+='        \n';
/*
        o1+='        $mdp=password_hash($donnees_recues[__xva][\'chp_mot_de_passe_utilisateur\'],PASSWORD_BCRYPT,array( \'cost\' => 10));\n';
*/        
        o1+='        \n';
        let ref_insert=document.getElementById('reference_requete_insert').value;
        let objet_requete_insert=__gi1.__js_des_sql[ref_insert];
        let matrice_insert=__gi1.__m_rev1.rev_tm( objet_requete_insert.cht_rev_requete );
        if( matrice_insert.__xst !== __xsu ){
            debugger;
            return{__xst:__xer};
        }
        let mati=matrice_insert.__xva;
        let liste_des_champs_insert=[];
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
        let champ_primaire='AFR'
        for(let i in this.#obj_table.champs){
         if(this.#obj_table.champs[i].genre_objet_du_champ.che_est_incrément_genre===1 || this.#obj_table.champs[i].genre_objet_du_champ.che_est_primaire_genre===1){
          champ_primaire=i;
          break;
         }
        }
        o1+='        $donnees_sql=array( array(/**/\n';
        for(let i=0;i<liste_des_champs_insert.length;i++){
            let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
            }else{
                o1+='                    \''+nom_du_champ+'\' => $donnees_recues[__xva][\''+nom_du_champ+'\'],\n';
            }
        }
/*        
        o1+='                    \'chp_nom_de_connexion_utilisateur\' => $donnees_recues[__xva][\'chp_nom_de_connexion_utilisateur\'],\n';
        o1+='                    \'chp_mot_de_passe_utilisateur\' => $mdp\n';
*/        
        o1+='                ));\n';
        o1+='        /* echo __FILE__ . \' \' . __LINE__ . \' $donnees_sql = <pre>\' . var_export( $donnees_sql , true ) . \'</pre>\' ; exit(0);*/\n';
        o1+='        $tt'+ref_insert+'=$this->sql0->sql_iii('+ref_insert+',$donnees_sql,$donnees_retournees);\n';
        o1+='        \n';
        o1+='        if($tt'+ref_insert+'[__xst] !== __xsu){\n';
        o1+='\n';
        o1+='            $donnees_retournees[__x_signaux][__xer][]=__METHOD__ . \' [\' . __LINE__ . \']\';\n';
        o1+='            return;\n';
        o1+='\n';
        o1+='        }else if($tt'+ref_insert+'[\'changements\'] === 1){\n';
        o1+='\n';
        o1+='            $donnees_retournees[__xst]=__xsu;\n';
        o1+='            \n';
        o1+='            if($page_liste_des_'+this.#nom_ref+'1 === true){\n';
        o1+='\n';
        o1+='                $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$mat,$donnees_recues);\n';
        o1+='\n';
        o1+='            }else{\n';
        o1+='\n';
        o1+='                $action=\''+champ_primaire+'(\' . $tt'+ref_insert+'[\'nouvel_id\'] . \')\';\n';
        o1+='                $obj_matrice=$GLOBALS[\'obj_rev1\']->rev_vers_matrice($action);\n';
        o1+='                $this->page_'+this.#nom_ref+'_modifier1(\n';
        o1+='                    $donnees_retournees,\n';
        o1+='                     /*matrice*/ $obj_matrice[__xva],\n';
        o1+='                    $donnees_recues\n';
        o1+='                );\n';
        o1+='                $donnees_retournees[__x_action]=\''+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_'+this.#nom_ref+'_modifier1),'+champ_primaire+'(\' . $tt'+ref_insert+'[\'nouvel_id\'] . \'))\';\n';
        o1+='            }\n';
        o1+='\n';
        o1+='\n';
        o1+='        }else{\n';
        o1+='\n';
        o1+='            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \' aucune modification efféctuée\';\n';
        o1+='        }\n';
        o1+='\n';
        o1+='        $o1=\'\';\n';
        o1+='    }\n';            
        
        
        o1+='\n';
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    function vv_'+this.#nom_ref+'_filtre1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o1+='        $txtPar=\'__num_page(0)\';\n';
        o1+='        $nouvelles_valeurs=array( \'__num_page\' => 0);\n';
        o1+='        foreach($donnees_recues[__xva] as $k0 => $v0){\n';
        o1+='            \n';
        o1+='            if($k0 !== \'__num_page\'){\n';
        o1+='\n';
        o1+='                $nouvelles_valeurs[$k0]=$v0;\n';
        o1+='                \n';
        o1+='                if(is_numeric($v0)){\n';
        o1+='\n';
        o1+='                    $txtPar .= \',\' . $k0 . \'(\' . $v0 . \')\';\n';
        o1+='\n';
        o1+='                }else{\n';
        o1+='\n';
        o1+='                    $txtPar .= \',\' . $k0 . \'(\\\'\' . str_replace(\'\\\'\',\'\\\\\\\'\',$v0) . \'\\\')\';\n';
        o1+='                }\n';
        o1+='\n';
        o1+='\n';
        o1+='            }\n';
        o1+='\n';
        o1+='        }\n';
        o1+='        $_SESSION[__X_CLE_APPLICATION][\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1\']=$nouvelles_valeurs;\n';
        o1+='        $obj_matrice=$GLOBALS[\'obj_rev1\']->rev_vers_matrice(\''+this.#nom_de_la_classe_générée+'.page_liste_des_'+this.#nom_ref+'1(\' . $txtPar . \')\');\n';
        o1+='        \n';
        o1+='        if($obj_matrice[__xst] === __xsu){\n';
        o1+='\n';
        o1+='            $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);\n';
        o1+='\n';
        o1+='        }else{\n';
        o1+='\n';
        o1+='            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . \' erreur de convertion de \' . $txtPar . \'\';\n';
        o1+='        }\n';
        o1+='\n';
        o1+='    }\n';
        o1+='\n';        
        
        let ref_select=document.getElementById('reference_requete_select').value;
        let objet_requete_select=__gi1.__js_des_sql[ref_select];
        let matrice_select=__gi1.__m_rev1.rev_tm( objet_requete_select.cht_rev_requete );
        if( matrice_select.__xst !== __xsu ){
            debugger;
            return{__xst:__xer};
        }
        let mats=matrice_select.__xva;
        
        let ref_delete=document.getElementById('reference_requete_delete').value;
        let objet_requete_delete=__gi1.__js_des_sql[ref_delete];
        let matrice_delete=__gi1.__m_rev1.rev_tm( objet_requete_delete.cht_rev_requete );
        if( matrice_delete.__xst !== __xsu ){
            debugger;
            return{__xst:__xer};
        }
        let matd=matrice_delete.__xva;
        
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    function vv_'+this.#nom_ref+'_supprimer1(&$donnees_retournees,&$mat,&$donnees_recues){\n';
        o1+='        $tt'+ref_select+'=$this->sql0->sql_iii(\n';
        o1+='             /*sql_'+ref_select+'()*/ '+ref_select+',\n';
        o1+='            array(/**/\n';
        o1+='                \'T0_'+champ_primaire+'\' => $donnees_recues[__xva][\''+champ_primaire+'\']\n';
        o1+='            ),\n';
        o1+='            $donnees_retournees\n';
        o1+='        );\n';
        o1+='        \n';
        o1+='        if($tt'+ref_select+'[__xst] === __xsu && is_numeric($donnees_recues[__xva][\''+champ_primaire+'\'])){\n';
        o1+='\n';
        o1+='            $tt'+ref_delete+'=$this->sql0->sql_iii(\n';
        o1+='                 /*sql_'+ref_delete+'()*/ '+ref_delete+',\n';
        o1+='                array(/**/\n';
        o1+='                    \''+champ_primaire+'\' => $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\']\n';
        o1+='                ),\n';
        o1+='                $donnees_retournees\n';
        o1+='            );\n';
        o1+='            \n';
        o1+='            if($tt'+ref_delete+'[__xst] === __xer){\n';
        o1+='\n';
        o1+='                $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la suppression  \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
        o1+='\n';
        o1+='            }else if($tt'+ref_delete+'[\'changements\'] === 1){\n';
        o1+='\n';
        o1+='                $donnees_retournees[__x_signaux][__xsu][]=\'👍 suppression \' . self::DUN_DUNE_ELEMENT_GERE . \' effectuée avec succès (\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \')\';\n';
        o1+='                $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$mat,$donnees_recues);\n';
        o1+='\n';
        o1+='            }else{\n';
        o1+='\n';
        o1+='                $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la suppression  \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
        o1+='            }\n';
        o1+='\n';
        o1+='\n';
        o1+='        }else{\n';
        o1+='\n';
        o1+='            $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la suppression  \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
        o1+='        }\n';
        o1+='\n';
        o1+='        $o1=\'\';\n';
        o1+='    }\n';        
        
        let ref_update=document.getElementById('reference_requete_update').value;
        let objet_requete_update=__gi1.__js_des_sql[ref_update];
        let matrice_update=__gi1.__m_rev1.rev_tm( objet_requete_update.cht_rev_requete );
        if( matrice_update.__xst !== __xsu ){
            debugger;
            return{__xst:__xer};
        }
        
        let matu=matrice_update.__xva;
        let liste_des_champs_update=[];
        for(let i=1;i<matu.length;i=matu[i][12]){
            if(matu[i][1]==='modifier' && matu[i][2]==='f'){
                for(let j=i+1;j<matu.length;j=matu[j][12]){
                    if(matu[j][1]==='valeurs' && matu[j][2]==='f'){
                        for(let k=j+1;k<matu.length;k=matu[k][12]){
                            if(matu[k][1]==='affecte' && matu[k][2]==='f'){
                                for(let l=k+1;l<matu.length;l=matu[l][12]){
                                    if(matu[l][1]==='champ' && matu[l][2]==='f' && matu[l][8]===1 && matu[l+1][2]==='c'){
                                        liste_des_champs_update.push({nom_du_champ:matu[l+1][1]});
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
            
        o1+='\n';
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    function vv_'+this.#nom_ref+'_modifier1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){\n';
        o1+='        $page_liste_des_'+this.#nom_ref+'1=false;\n';
        o1+='        $l01=count($mat);\n';
        o1+='        for( $i=1 ; $i < $l01 ; $i++ ){\n';
        o1+='            \n';
        o1+='            \n';
        o1+='            if($mat[$i][1] === \'page_liste_des_'+this.#nom_ref+'1\' && $mat[$i][2] === \'f\' && $mat[$i][8] === 0){\n';
        o1+='\n';
        o1+='                $page_liste_des_'+this.#nom_ref+'1=true;\n';
        o1+='\n';
        o1+='            }\n';
        o1+='\n';
        o1+='        }\n';
        o1+='        $tt'+ref_select+'=$this->sql0->sql_iii(\n';
        o1+='             /*sql_'+ref_select+'()*/ '+ref_select+',\n';
        o1+='            array(/**/\n';
        o1+='                \'T0_'+champ_primaire+'\' => $donnees_recues[__xva][\''+champ_primaire+'\']\n';
        o1+='            ),\n';
        o1+='            $donnees_retournees\n';
        o1+='        );\n';
        o1+='        \n';
        o1+='        if($tt'+ref_select+'[__xst] === __xsu){\n';
        o1+='\n';
        o1+='\n';
        /*
        o1+='                $mot_de_passe_crypte=password_hash($donnees_recues[__xva][\'chp_mot_de_passe_utilisateur\'],PASSWORD_BCRYPT,array( \'cost\' => 10));\n';
        */
        o1+='\n';
        o1+='            $tt'+ref_update+'=$this->sql0->sql_iii(\n';
        o1+='                 /*sql_'+ref_update+'()*/ '+ref_update+',\n';
        o1+='                array(/**/\n';
        o1+='                    \'c_'+champ_primaire+'\' => $tt'+ref_select+'[__xva][0][\'T0.'+champ_primaire+'\'],\n';
        for(let i=0;i<liste_des_champs_update.length;i++){
            let nom_du_champ=liste_des_champs_update[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
            }else{
                o1+='                    \'n_'+nom_du_champ+'\' => $donnees_recues[__xva][\''+nom_du_champ+'\'],\n';
            }
        }
        
        o1+='                ),\n';
        o1+='                $donnees_retournees\n';
        o1+='            );\n';
        o1+='\n';
        o1+='            if($tt'+ref_select+'[__xst] === __xer){\n';
        o1+='\n';
        o1+='                $donnees_retournees[__x_signaux][__xer][]=\'erreur lors de la modification \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
        o1+='\n';
        o1+='            }else if($tt'+ref_select+'[\'changements\'] === 1){\n';
        o1+='\n';
        o1+='                \n';
        o1+='                if($page_liste_des_'+this.#nom_ref+'1 === true){\n';
        o1+='\n';
        o1+='                    $this->page_liste_des_'+this.#nom_ref+'1($donnees_retournees,$mat,$donnees_recues);\n';
        o1+='\n';
        o1+='                }else{\n';
        o1+='\n';
        o1+='                    $donnees_retournees[__xst]=__xsu;\n';
        o1+='                }\n';
        o1+='\n';
        o1+='                $donnees_retournees[__x_signaux][__xsu][]=\'👍 modification effectuée avec succès \' . self::DUN_DUNE_ELEMENT_GERE . \'(\' . $donnees_recues[__xva][\''+champ_primaire+'\'] . \') [\' . __LINE__ . \']\';\n';
        o1+='\n';
        o1+='            }else{\n';
        o1+='\n';
        o1+='                $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \' aucune modification efféctuée\';\n';
        o1+='            }\n';
        o1+='\n';
        o1+='\n';
        o1+='        }else{\n';
        o1+='\n';
        o1+='            $donnees_retournees[__x_signaux][__xal][]=__LINE__ . \' aucune modification efféctuée\';\n';
        o1+='        }\n';
        o1+='\n';
        o1+='        $o1=\'\';\n';
        o1+='    }\n';
        
        
        o1+='\n';
        o1+='    /*\n';
        o1+='      =============================================================================================================\n';
        o1+='    */\n';
        o1+='    function page_'+this.#nom_ref+'_creer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){\n';
        o1+='        $o1=\'\';\n';
        o1+='        $o1 .= \'<h1>ajout \' . self::DUN_DUNE_ELEMENT_GERE . \' <div class="hug_bouton" style="font-weight:normal;" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(action1(page_liste_des_'+this.#nom_ref+'1))" title="revenir à la liste" >⬱</div></h1>\' . PHP_EOL;\n';
        o1+='        $o1 .= \'<div id="vv_'+this.#nom_ref+'_creer1">\' . PHP_EOL;\n';
        
        
        for(let i=0;i<liste_des_champs_insert.length;i++){
            let nom_du_champ=liste_des_champs_insert[i].nom_du_champ;
            let obj_champ=this.#obj_table.champs[nom_du_champ];
            if(obj_champ.genre_objet_du_champ.che_est_tsm_genre===1 || obj_champ.genre_objet_du_champ.che_est_tsc_genre===1 || obj_champ.genre_objet_du_champ.che_est_nur_genre===1){
            }else{
                o1+='        /*\n';
                o1+='          =====================================================================================================\n';
                o1+='        */\n';
                o1+='        $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
                o1+='        $o1 .= \'    <div class="yy_edition_libelle1">\' . PHP_EOL;\n';
                o1+='        $o1 .= \'      <span>'+obj_champ.meta.nom_bref_du_champ+'</span>\' . PHP_EOL;\n';
                o1+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                o1+='        $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
                
                if(obj_champ.genre_objet_du_champ.chp_espece_genre==='VARCHAR'){
                    let size='';
                    if(obj_champ.genre_objet_du_champ.che_longueur_genre<=64){
                     size=' size="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" ';
                    }
                    o1+='        $o1 .= \'      <input type="text" '+size+' maxlength="'+obj_champ.genre_objet_du_champ.che_longueur_genre+'" id="'+obj_champ.nom_du_champ+'" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />\' . PHP_EOL;\n';
                }else{
                 debugger
                }
                
                o1+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
                o1+='        $o1 .= \'  </div>\' . PHP_EOL;\n';
            }
        }
        
        o1+='        /*\n';
        o1+='          =====================================================================================================\n';
        o1+='        */\n';
        o1+='        $o1 .= \'  <div class="yy_edition_champ1">\' . PHP_EOL;\n';
        o1+='        $o1 .= \'    <div class="yy_edition_valeur1">\' . PHP_EOL;\n';
        o1+='        $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_creer1),page_liste_des_'+this.#nom_ref+'1())" title="" >ajouter et revenir à la liste</div>\';\n';
        o1+='        $o1 .= \'    <div class="hug_bouton" data-hug_click="'+this.#nom_de_la_classe_générée+'.formulaire1(conteneur1(vv_'+this.#nom_ref+'_creer1))" title="" >ajouter</div>\';\n';
        o1+='        $o1 .= \'    </div>\' . PHP_EOL;\n';
        o1+='        $o1 .= \'  </div>\' . PHP_EOL;\n';
        o1+='        /* */\n';
        o1+='        $o1 .= \'</div>\' . PHP_EOL;\n';
        o1+='        $donnees_retournees[__x_page] .= $o1;\n';
        o1+='        $donnees_retournees[__xst]=__xsu;\n';
        o1+='    }\n';        
        o1+='}';
        document.getElementById('php_bdd1').value=o1;
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
        if(tous_remplis === true){
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
                        this.#obj_bdd[nom_de_la_table]={champs:{},ordre_des_champs:[],meta:{}}
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

        if(this.#nom_de_la_table.substr(0,4)==='tbl_'){
            this.#nom_ref=this.#nom_de_la_table.substr(4);
            this.#nom_de_la_classe_générée='c_'+this.#nom_ref+'1';
        }else{
            this.#nom_ref=this.#nom_de_la_table;
            this.#nom_de_la_classe_générée='c_'+this.#nom_ref+'1';
        }
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
            o1+='<option value="">choisissez une requête</option>';
            for(let i in __gi1.__js_des_sql){
                if(this.#liste_des_types_de_requetes[type_requete] === 'select'){
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
        cmd+=')';
        let obj={"__x_action" : cmd};
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
}
export{c_php_bdd1 as c_php_bdd1};