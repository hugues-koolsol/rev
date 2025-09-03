"use strict";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __x_action='__x_action';
const __xva='__xva';
const __xme='__xme';
import {c_astjs_vers_rev1} from './c_astjs_vers_rev1.js';
import {c_rev_vers_js1} from './c_rev_vers_js1.js';
import {c_html_vers_rev1} from './c_html_vers_rev1.js';
import {c_rev_vers_html1} from './c_rev_vers_html1.js';
import {c_astphpparseur_vers_rev1} from './c_astphpparseur_vers_rev1.js';
import {c_rev_vers_php1} from './c_rev_vers_php1.js';
import {c_astphpnikic_vers_rev1} from './c_astphpnikic_vers_rev1.js';
import {c_astsqliteparseur_vers_rev1} from './c_astsqliteparseur_vers_rev1.js';
import {c_rev_vers_sql1} from './c_rev_vers_sql1.js';
import {c_astpostcss_vers_rev1} from './c_astpostcss_vers_rev1.js';
import {c_rev_vers_css1} from './c_rev_vers_css1.js';
import {c_texte_vers_rev1} from './c_texte_vers_rev1.js';
import {c_rev_vers_texte1} from './c_rev_vers_texte1.js';
import {c_requete_sql1} from './c_requete_sql1.js';
import {c_astsql_parseur_cst_vers_rev1} from './c_astsql_parseur_cst_vers_rev1.js';
class c_fonctions_js1{
    #interface1=null;
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
    */
    #module_acorn_charge=null;
    #parseur_javascript=null;
    #objet_conversion_ast_js_vers_rev=null;
    /*
    */
    #objet_conversion_html_vers_rev=null;
    /*
    */
    #module_phpparseur_charge=null;
    #parseur_phpparseur=null;
    #objet_conversion_astphpparseur_vers_rev1=null;
    #objet_conversion_astphpnikic_vers_rev1=null;
    /*
    */
    #module_sqlite_parseur_charge=null;
    #objet_conversion_astsqliteparseur_vers_rev1=null;
    #parseur_sqlite_parseur=null;
    /*
    */
    #module_sql_parseur_cst_charge=null;
    #objet_conversion_ast_sql_parseur_cst_vers_rev1=null;
    #parseur_sql_parseur_cst=null;
    /*
    */
    #module_cssparseur_charge=null;
    #objet_conversion_astcss_vers_rev1=null;
    #parseur_cssparseur=null;
    /*
    */
    #objet_conversion_texte_vers_rev1=null;
    /*
    */
    #objet_conversion_requete1=null;
    /*
    */
    #objet_conversion_rev_vers_js=null;
    #objet_conversion_rev_vers_sql=null;
    #objet_conversion_rev_vers_php=null;
    #objet_conversion_rev_vers_css=null;
    #objet_conversion_rev_vers_html=null;
    #objet_conversion_rev_vers_texte=null;
    /*
    */
    #reference_arbre_du_menu=null;
    /*
      =============================================================================================================
    */
    constructor( par_interface1 ){
        this.#interface1=par_interface1;
        /*  */
        let acorn=document.createElement( 'script' );
        acorn.setAttribute( 'type' , "text/javascript" );
        acorn.setAttribute( 'src' , "_js/bibliotheques_externes/acorn.js" );
        document.getElementsByTagName( 'head' )[0].appendChild( acorn );
        this.#module_acorn_charge=acorn;
        /*  */
        let phpparseur=document.createElement( 'script' );
        phpparseur.setAttribute( 'type' , "text/javascript" );
        phpparseur.setAttribute( 'src' , "_js/bibliotheques_externes/php_parser.js" );
        document.getElementsByTagName( 'head' )[0].appendChild( phpparseur );
        this.#module_phpparseur_charge=phpparseur;
        /*  */
        let sqlparseur=document.createElement( 'script' );
        sqlparseur.setAttribute( 'type' , "text/javascript" );
        sqlparseur.setAttribute( 'src' , "_js/bibliotheques_externes/sqlite_parser.js" );
        document.getElementsByTagName( 'head' )[0].appendChild( sqlparseur );
        this.#module_sqlite_parseur_charge=sqlparseur;
        /*  */
        let sql_parseur_cst=document.createElement( 'script' );
        sql_parseur_cst.setAttribute( 'type' , "text/javascript" );
        sql_parseur_cst.setAttribute( 'src' , "_js/bibliotheques_externes/sql_parser_cst.js" );
        document.getElementsByTagName( 'head' )[0].appendChild( sql_parseur_cst );
        this.#module_sql_parseur_cst_charge=sql_parseur_cst;
        /*  */
        let cssparseur=document.createElement( 'script' );
        cssparseur.setAttribute( 'type' , "text/javascript" );
        cssparseur.setAttribute( 'src' , "_js/bibliotheques_externes/postcss0.js" );
        document.getElementsByTagName( 'head' )[0].appendChild( cssparseur );
        this.#module_cssparseur_charge=cssparseur;
        /*  */
        /* console.log(':-]'); */
        this.#objet_conversion_ast_js_vers_rev=new c_astjs_vers_rev1( '#objet_conversion_ast_js_vers_rev' , this.#interface1.__m_rev1 );
        /*  */
        this.#objet_conversion_html_vers_rev=new c_html_vers_rev1( '#objet_conversion_html_vers_rev' , this.#interface1.__m_rev1 , this.#objet_conversion_ast_js_vers_rev );
        /*  */
        this.#objet_conversion_astsqliteparseur_vers_rev1=new c_astsqliteparseur_vers_rev1( '#objet_conversion_astsqliteparseur_vers_rev1' , this.#interface1.__m_rev1 );
        this.#objet_conversion_ast_sql_parseur_cst_vers_rev1=new c_astsql_parseur_cst_vers_rev1( '#objet_conversion_ast_sql_parseur_cst_vers_rev1' , this.#interface1.__m_rev1 );
        /*  */
        this.#objet_conversion_astphpparseur_vers_rev1=new c_astphpparseur_vers_rev1( '#objet_conversion_astphpparseur_vers_rev1' , this.#interface1.__m_rev1 , this.#objet_conversion_html_vers_rev );
        this.#objet_conversion_astphpnikic_vers_rev1=new c_astphpnikic_vers_rev1( '#objet_conversion_astphpnikic_vers_rev1new' , this.#interface1.__m_rev1 , this.#objet_conversion_html_vers_rev );
        /*  */
        this.#objet_conversion_astcss_vers_rev1=new c_astpostcss_vers_rev1( '#objet_conversion_astcss_vers_rev1' , this.#interface1.__m_rev1 );
        /*  */
        this.#objet_conversion_texte_vers_rev1=new c_texte_vers_rev1( '#objet_conversion_texte_vers_rev1' , this.#interface1.__m_rev1 );
        /*  */
        this.#objet_conversion_rev_vers_js=new c_rev_vers_js1( '#objet_conversion_rev_vers_js' , this.#interface1.__m_rev1 );
        this.#objet_conversion_rev_vers_html=new c_rev_vers_html1( '#objet_conversion_rev_vers_html' , this.#interface1.__m_rev1 , this.#objet_conversion_rev_vers_js );
        this.#objet_conversion_rev_vers_php=new c_rev_vers_php1( '#objet_conversion_rev_vers_php' , this.#interface1.__m_rev1 , this.#objet_conversion_rev_vers_html );
        this.#objet_conversion_rev_vers_sql=new c_rev_vers_sql1( '#objet_conversion_rev_vers_sql' , this.#interface1.__m_rev1 );
        this.#objet_conversion_rev_vers_css=new c_rev_vers_css1( '#objet_conversion_rev_vers_css' , this.#interface1.__m_rev1 );
        this.#objet_conversion_rev_vers_texte=new c_rev_vers_texte1( '#objet_conversion_rev_vers_texte' , this.#interface1.__m_rev1 );
        this.#objet_conversion_requete1=new c_requete_sql1( {} );
    }
    
    
    /*
      =============================================================================================================
    */
    traite_delete(reference_table , /*matrice de la base */mat ){
     
     
        let l01=mat.length;
        let cht_rev_requete='';
        let condition_rev='';
        
        for(let i=1;i<l01;i=mat[i][12]){
            let indice=0;
            if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                for(let j=i+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                        if(mat[j+1][1]===reference_table.nom_de_la_table){
                         
                            indice=i;
                            break
                        }
                    }
                }
            }
            if(indice>0){
                for(let j=indice+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                        for(let k=j+1;k<l01;k=mat[k][12]){
                            if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                let nom_du_champ='';
                                let genre=0;
                                let genre_du_champ=null;
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                        nom_du_champ=mat[l+1][1];
                                    }else if(mat[l][1]==='meta' && mat[l][2] === 'f' ){
                                        for(let m=l+1;m<l01;m=mat[m][12]){
                                            if(mat[m][1]==='genre' && mat[m][2] === 'f'  && mat[m][8] === 1  && mat[m+1][2] === 'c' ){
                                                genre=parseInt(mat[m+1][1],10);
                                                genre_du_champ=__gi1.__liste_des_genres[genre];
                                            }
                                        }
                                    }
                                }
                                if(nom_du_champ !== '' && genre_du_champ && (genre_du_champ.che_est_incrément_genre===1 || genre_du_champ.che_est_primaire_genre === 1)){
                                    condition_rev+='\n      egal(champ(`'+nom_du_champ+'`),:'+nom_du_champ+')';
                                }
                            }
                        }
                    }
                }
            }
        }



        if(condition_rev!==''){
            cht_rev_requete+='supprimer(\n';
            cht_rev_requete+='   base_de_reference('+reference_table.base+'),\n';
            cht_rev_requete+='   provenance(\n';
            cht_rev_requete+='      table_reference(\n';
            cht_rev_requete+='         source(nom_de_la_table('+reference_table.nom_de_la_table+',base(b'+reference_table.base+')))\n';
            cht_rev_requete+='      )\n';
            cht_rev_requete+='   ),\n';
            cht_rev_requete+='   conditions(\n';
            cht_rev_requete+=condition_rev+'\n';
            cht_rev_requete+='   )\n';
            
            cht_rev_requete+=')';
        }else{
           __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
           __gi1.remplis_les_messages_et_affiche(null);
           return({__xst:__xer });
        }
/*
        debugger
        return({__xst:__xer });
*/        
        return({__xst:__xsu , cht_rev_requete : cht_rev_requete });
          
    }
    /*
      =============================================================================================================
    */
    traite_liste_ecran(reference_table , /*matrice de la base */mat ){
     
     
        let l01=mat.length;
        let cht_rev_requete='';
        let champs_rev='';
        let condition_rev='';
        let jointures='';
        let complements='';
        let liste_des_references=[];
        let numero_reference=1;
        
        for(let i=1;i<l01;i=mat[i][12]){
            let indice=0;
            if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                for(let j=i+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                        if(mat[j+1][1]===reference_table.nom_de_la_table){
                         
                            indice=i;
                            break
                        }
                    }
                }
            }
            if(indice>0){
                for(let j=indice+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                        for(let k=j+1;k<l01;k=mat[k][12]){
                            if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                let nom_du_champ='';
                                let genre=0;
                                let genre_du_champ=null;
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                        nom_du_champ=mat[l+1][1];
                                    }else if(mat[l][1]==='meta' && mat[l][2] === 'f' ){
                                        for(let m=l+1;m<l01;m=mat[m][12]){
                                            if(mat[m][1]==='genre' && mat[m][2] === 'f'  && mat[m][8] === 1  && mat[m+1][2] === 'c' ){
                                                genre=parseInt(mat[m+1][1],10);
                                                genre_du_champ=__gi1.__liste_des_genres[genre];
                                            }
                                        }
                                    }
                                }
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='references' && mat[l][2] === 'f' ){
                                        if(mat[l][8]===2){
                                         liste_des_references.push({
                                              numero_reference:numero_reference,
                                              table_mere : mat[l+1][1],
                                              champ_pere : mat[l+2][1],
                                              table_fille : reference_table.nom_de_la_table ,
                                              champ_fils : nom_du_champ ,
                                         })
                                         numero_reference++;
                                        }else{
                                            return({__xst:__xer });
                                        }
                                    }
                                }
                                champs_rev+='\n      champ(`T0`,`'+nom_du_champ+'`)';
                                
                                if(!(genre_du_champ.che_est_tsm_genre===1 || genre_du_champ.che_est_tsc_genre===1 || genre_du_champ.che_est_nur_genre===1)){
                                    if(genre_du_champ.chp_espece_genre==='INTEGER' || genre_du_champ.chp_espece_genre==='FLOAT'){
                                        condition_rev+='\n      egal(champ(`T0`,`'+nom_du_champ+'`),:T0_'+nom_du_champ+')';
                                    }else{
                                        condition_rev+='\n      comme(champ(`T0`,`'+nom_du_champ+'`),:T0_'+nom_du_champ+')';
                                    }
                                }
                                if(nom_du_champ !== '' && genre_du_champ && (genre_du_champ.che_est_incrément_genre===1 || genre_du_champ.che_est_primaire_genre === 1)){
                                    complements+='trier_par((champ(`T0`,`'+nom_du_champ+'`),décroissant())),'
                                    
                                }
                            }
                        }
                    }
                }
            }
        }

        if(liste_des_references.length>0){
            for( let ind_joint in liste_des_references){
                jointures+='      jointure_gauche(\n'
                jointures+='         source(nom_de_la_table('+liste_des_references[ind_joint].table_mere+',alias(T'+liste_des_references[ind_joint].numero_reference+'),base(b'+reference_table.base+'))),\n';
                jointures+='         contrainte(egal(champ(T'+liste_des_references[ind_joint].numero_reference+','+liste_des_references[ind_joint].champ_pere+'),champ(T0,'+liste_des_references[ind_joint].champ_fils+')))\n';
                jointures+='      )\n';
                
                
                
                
                
                for(let i=1;i<l01;i=mat[i][12]){
                    let indice=0;
                    if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                        for(let j=i+1;j<l01;j=mat[j][12]){
                            if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                                if(mat[j+1][1]===liste_des_references[ind_joint].table_mere){
                                 
                                    indice=i;
                                    break
                                }
                            }
                        }
                    }
                    if(indice>0){
                        let continuer=true;
                        for(let j=indice+1;j<l01 && continuer===true ;j=mat[j][12]){
                            if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                                for(let k=j+1;k<l01 && continuer===true ;k=mat[k][12]){
                                    if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                        let nom_du_champ='';
                                        let espece_du_champ='';
                                        let genre_du_champ=null;
                                        for(let l=k+1;l<l01;l=mat[l][12]){
                                            if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                                nom_du_champ=mat[l+1][1];
                                            }else if(mat[l][1]==='espece_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                                espece_du_champ=mat[l+1][1];
                                            }
                                        }
                                        if((espece_du_champ==='VARCHAR' || espece_du_champ==='TEXT' ) && nom_du_champ!==''){
                                            champs_rev+='\n      champ(`T'+liste_des_references[ind_joint].numero_reference+'`,`'+nom_du_champ+'`)';
                                            condition_rev+='\n      comme(champ(`T'+liste_des_references[ind_joint].numero_reference+'`,`'+nom_du_champ+'`),:T'+liste_des_references[ind_joint].numero_reference+'_'+nom_du_champ+')';
                                            continuer=false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }                
                
                
            }
            /*#
              sélectionner(
                 base_de_reference(1),
                 valeurs(
                    champ(`T0`,`chi_id_tache`),
                    champ(`T0`,`chp_texte_tache`),
                    champ(`T0`,`chx_utilisateur_tache`),
                    champ(`T0`,`che_priorite_tache`),
                    champ(`T1`,`chp_nom_de_connexion_utilisateur`),
                    champ(`T0`,`chd__dtm_tache`),
                    champ(`T0`,`chd__dtc_tache`),
                    champ(`T0`,`che__nur_tache`)
                 ),
                 provenance(
                    table_reference(
                       source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
                    ),
                    jointure_gauche(
                       source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
                       contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
                    )
                 ),
                 conditions(egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache))
              )  
            */                 
            
        }


        if(champs_rev!=='' && condition_rev!=='' && complements!=''){
            cht_rev_requete+='sélectionner(\n';
            cht_rev_requete+='   base_de_reference('+reference_table.base+'),\n';
            cht_rev_requete+='   valeurs(';
            cht_rev_requete+=champs_rev;
            cht_rev_requete+='\n   )\n';
            cht_rev_requete+='   provenance(\n';
            cht_rev_requete+='      table_reference(\n';
            cht_rev_requete+='         source(nom_de_la_table('+reference_table.nom_de_la_table+',base(b'+reference_table.base+'),alias(T0)))\n';
            cht_rev_requete+='      )\n';
            cht_rev_requete+=jointures
            
            cht_rev_requete+='   ),\n';
            cht_rev_requete+='   conditions(\n';
            cht_rev_requete+=condition_rev+'\n';
            cht_rev_requete+='   )\n';
            
            cht_rev_requete+='   complements(\n';
            cht_rev_requete+='       '+complements+'\n';
            cht_rev_requete+='       limité_à(quantité(:quantitee),début(:debut))\n';
            cht_rev_requete+='    )\n';
            
            cht_rev_requete+=')';
        }else{
           __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
           __gi1.remplis_les_messages_et_affiche(null);
           return({__xst:__xer });
        }
/*
        debugger
        return({__xst:__xer });
*/        
        return({__xst:__xsu , cht_rev_requete : cht_rev_requete });
          
    }
    /*
      =============================================================================================================
    */
    traite_select(reference_table , /*matrice de la base */mat ){
     
     
        let l01=mat.length;
        let cht_rev_requete='';
        let champs_rev='';
        let condition_rev='';
        let jointures='';
        let liste_des_references=[];
        let numero_reference=1;
        
        for(let i=1;i<l01;i=mat[i][12]){
            let indice=0;
            if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                for(let j=i+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                        if(mat[j+1][1]===reference_table.nom_de_la_table){
                         
                            indice=i;
                            break
                        }
                    }
                }
            }
            if(indice>0){
                for(let j=indice+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                        for(let k=j+1;k<l01;k=mat[k][12]){
                            if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                let nom_du_champ='';
                                let genre=0;
                                let genre_du_champ=null;
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                        nom_du_champ=mat[l+1][1];
                                    }else if(mat[l][1]==='meta' && mat[l][2] === 'f' ){
                                        for(let m=l+1;m<l01;m=mat[m][12]){
                                            if(mat[m][1]==='genre' && mat[m][2] === 'f'  && mat[m][8] === 1  && mat[m+1][2] === 'c' ){
                                                genre=parseInt(mat[m+1][1],10);
                                                genre_du_champ=__gi1.__liste_des_genres[genre];
                                            }
                                        }
                                    }
                                }
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='references' && mat[l][2] === 'f' ){
                                        if(mat[l][8]===2){
                                         liste_des_references.push({
                                              numero_reference:numero_reference,
                                              table_mere : mat[l+1][1],
                                              champ_pere : mat[l+2][1],
                                              table_fille : reference_table.nom_de_la_table ,
                                              champ_fils : nom_du_champ ,
                                         })
                                         numero_reference++;
                                        }else{
                                            return({__xst:__xer });
                                        }
                                    }
                                }
                                champs_rev+='\n      champ(`T0`,`'+nom_du_champ+'`)';
                                if(nom_du_champ !== '' && genre_du_champ && (genre_du_champ.che_est_incrément_genre===1 || genre_du_champ.che_est_primaire_genre === 1)){
                                    condition_rev+='\n      egal(champ(`T0`,`'+nom_du_champ+'`),:T0_'+nom_du_champ+')';
                                }
                            }
                        }
                    }
                }
            }
        }

        if(liste_des_references.length>0){
            for( let ind_joint in liste_des_references){
                jointures+='      jointure_gauche(\n'
                jointures+='         source(nom_de_la_table('+liste_des_references[ind_joint].table_mere+',alias(T'+liste_des_references[ind_joint].numero_reference+'),base(b'+reference_table.base+'))),\n';
                jointures+='         contrainte(egal(champ(T'+liste_des_references[ind_joint].numero_reference+','+liste_des_references[ind_joint].champ_pere+'),champ(T0,'+liste_des_references[ind_joint].champ_fils+')))\n';
                jointures+='      )\n';
                
                
                
                
                
                for(let i=1;i<l01;i=mat[i][12]){
                    let indice=0;
                    if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                        for(let j=i+1;j<l01;j=mat[j][12]){
                            if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                                if(mat[j+1][1]===liste_des_references[ind_joint].table_mere){
                                 
                                    indice=i;
                                    break
                                }
                            }
                        }
                    }
                    if(indice>0){
                        let continuer=true;
                        for(let j=indice+1;j<l01 && continuer===true ;j=mat[j][12]){
                            if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                                for(let k=j+1;k<l01 && continuer===true ;k=mat[k][12]){
                                    if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                        let nom_du_champ='';
                                        let espece_du_champ='';
                                        let genre_du_champ=null;
                                        for(let l=k+1;l<l01;l=mat[l][12]){
                                            if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                                nom_du_champ=mat[l+1][1];
                                            }else if(mat[l][1]==='espece_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                                espece_du_champ=mat[l+1][1];
                                            }
                                        }
                                        if((espece_du_champ==='VARCHAR' || espece_du_champ==='TEXT' ) && nom_du_champ!==''){
                                            champs_rev+='\n      champ(`T'+liste_des_references[ind_joint].numero_reference+'`,`'+nom_du_champ+'`)';
                                            continuer=false;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }                
                
                
            }
            /*#
              sélectionner(
                 base_de_reference(1),
                 valeurs(
                    champ(`T0`,`chi_id_tache`),
                    champ(`T0`,`chp_texte_tache`),
                    champ(`T0`,`chx_utilisateur_tache`),
                    champ(`T0`,`che_priorite_tache`),
                    champ(`T1`,`chp_nom_de_connexion_utilisateur`),
                    champ(`T0`,`chd__dtm_tache`),
                    champ(`T0`,`chd__dtc_tache`),
                    champ(`T0`,`che__nur_tache`)
                 ),
                 provenance(
                    table_reference(
                       source(nom_de_la_table(tbl_taches,alias(T0),base(b1)))
                    ),
                    jointure_gauche(
                       source(nom_de_la_table(tbl_utilisateurs,alias(T1),base(b1))),
                       contrainte(egal(champ(T1,chi_id_utilisateur),champ(T0,chx_utilisateur_tache)))
                    )
                 ),
                 conditions(egal(champ(`T0`,`chi_id_tache`),:T0_chi_id_tache))
              )  
            */                 
            
        }


        if(champs_rev!=='' && condition_rev!=='' ){
            cht_rev_requete+='sélectionner(\n';
            cht_rev_requete+='   base_de_reference('+reference_table.base+'),\n';
            cht_rev_requete+='   valeurs(';
            cht_rev_requete+=champs_rev;
            cht_rev_requete+='\n   )\n';
            cht_rev_requete+='   provenance(\n';
            cht_rev_requete+='      table_reference(\n';
            cht_rev_requete+='         source(nom_de_la_table('+reference_table.nom_de_la_table+',base(b'+reference_table.base+'),alias(T0)))\n';
            cht_rev_requete+='      )\n';
            cht_rev_requete+=jointures
            
            cht_rev_requete+='   ),\n';
            cht_rev_requete+='   conditions(\n';
            cht_rev_requete+=condition_rev;
            cht_rev_requete+='   )\n';
            cht_rev_requete+=')';
        }else{
           __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
           __gi1.remplis_les_messages_et_affiche(null);
           return({__xst:__xer });
        }
/*
        debugger
        return({__xst:__xer });
*/        
        return({__xst:__xsu , cht_rev_requete : cht_rev_requete });
     
    }
    /*
      =============================================================================================================
    */
    traite_update(reference_table , /*matrice de la base */mat ){
     
     
        let l01=mat.length;
        let cht_rev_requete='';
        let champs_rev='';
        let condition_rev='';
        for(let i=1;i<l01;i=mat[i][12]){
            let indice=0;
            if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                for(let j=i+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                        if(mat[j+1][1]===reference_table.nom_de_la_table){
                         
                            indice=i;
                            break
                        }
                    }
                }
            }
            if(indice>0){
                for(let j=indice+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                        for(let k=j+1;k<l01;k=mat[k][12]){
                            if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                let nom_du_champ='';
                                let genre=0;
                                let genre_du_champ=null;
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                        nom_du_champ=mat[l+1][1];
                                    }else if(mat[l][1]==='meta' && mat[l][2] === 'f' ){
                                        for(let m=l+1;m<l01;m=mat[m][12]){
                                            if(mat[m][1]==='genre' && mat[m][2] === 'f'  && mat[m][8] === 1  && mat[m+1][2] === 'c' ){
                                                genre=parseInt(mat[m+1][1],10);
                                                genre_du_champ=__gi1.__liste_des_genres[genre];
                                            }
                                        }
                                    }
                                }
                                if(nom_du_champ !== '' && genre_du_champ && !(genre_du_champ.che_est_incrément_genre===1 || genre_du_champ.che_est_primaire_genre === 1 || genre_du_champ.che_est_tsc_genre === 1 )){
                                    champs_rev+='\n      affecte(champ(`'+nom_du_champ+'`),:n_'+nom_du_champ+')';
                                }else if(nom_du_champ !== '' && genre_du_champ && (genre_du_champ.che_est_incrément_genre===1 || genre_du_champ.che_est_primaire_genre === 1)){
                                    condition_rev+='\n      egal(champ(`'+nom_du_champ+'`),:c_'+nom_du_champ+')';
                                }
                            }
                        }
                    }
                }
                break
            }
        }
        if(champs_rev!=='' && condition_rev!=='' ){
            cht_rev_requete+='modifier(\n';
            cht_rev_requete+='   base_de_reference('+reference_table.base+'),\n';
            cht_rev_requete+='   valeurs(';
            cht_rev_requete+=champs_rev;
            cht_rev_requete+='\n   )\n';
            cht_rev_requete+='   provenance(\n';
            cht_rev_requete+='      table_reference(\n';
            cht_rev_requete+='         source(nom_de_la_table('+reference_table.nom_de_la_table+',base(b'+reference_table.base+')))\n';
            cht_rev_requete+='      )\n';
            cht_rev_requete+='   ),\n';
            cht_rev_requete+='   conditions(\n';
            cht_rev_requete+=condition_rev;
            cht_rev_requete+='   )\n';
            cht_rev_requete+=')';
        }else{
           __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
           __gi1.remplis_les_messages_et_affiche(null);
           return({__xst:__xer });
        }
        return({__xst:__xsu , cht_rev_requete : cht_rev_requete });
     
    }
    /*
      =============================================================================================================
    */
    traite_insert(reference_table , /*matrice de la base */mat ){
        /*#
          {
            "alias"           : "" ,
            "base"            : 1 ,
            "nom_de_la_table" : "tbl_genres" ,
            "jointure"        : "table_reference"
          }
          champ(
             nom_du_champ('chx_utilisateur_tache'),
             espece_du_champ(INTEGER),
             non_nulle(1),
             meta(
                genre_meta(champ),
                nom_du_champ('chx_utilisateur_tache'),
                nom_bref_du_champ('utilisateur'),
                typologie(che),
                genre(9),
                afficher_champ_dans_svg(1),
                espece_du_champ(INTEGER)
             )
          ),
          
          insérer(
             base_de_reference(1),
             valeurs(
                affecte(champ(`chx_utilisateur_tache`),:chx_utilisateur_tache),
                affecte(champ(`chp_texte_tache`),:chp_texte_tache),
                affecte(champ(`chp_priorite_tache`),:chp_priorite_tache),
                affecte(champ(`chx_projet_tache`),:chx_projet_tache),
                affecte(champ(`chd__dtm_tache`),:chd__dtm_tache),
                affecte(champ(`chd__dtc_tache`),:chd__dtc_tache)
             ),
             provenance(
                table_reference(
                   source(nom_de_la_table(tbl_taches,base(b1)))
                )
             )
          )            

        */     
        let l01=mat.length;
        let cht_rev_requete='';
        let champs_rev='';
        for(let i=1;i<l01;i=mat[i][12]){
            let indice=0;
            if(mat[i][1]==='créer_table' && mat[i][2] === 'f' ){
                for(let j=i+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='nom_de_la_table' && mat[j][2] === 'f'  && mat[j][8] === 1 ){
                        if(mat[j+1][1]===reference_table.nom_de_la_table){
                         
                            indice=i;
                            break
                        }
                    }
                }
            }
            if(indice>0){
                for(let j=indice+1;j<l01;j=mat[j][12]){
                    if(mat[j][1]==='champs' && mat[j][2] === 'f' ){
                        for(let k=j+1;k<l01;k=mat[k][12]){
                            if(mat[k][1]==='champ' && mat[j][2] === 'f' ){
                                let nom_du_champ='';
                                let genre=0;
                                let genre_du_champ=null;
                                for(let l=k+1;l<l01;l=mat[l][12]){
                                    if(mat[l][1]==='nom_du_champ' && mat[l][2] === 'f'  && mat[l][8] === 1  && mat[l+1][2] === 'c' ){
                                        nom_du_champ=mat[l+1][1];
                                    }else if(mat[l][1]==='meta' && mat[l][2] === 'f' ){
                                        for(let m=l+1;m<l01;m=mat[m][12]){
                                            if(mat[m][1]==='genre' && mat[m][2] === 'f'  && mat[m][8] === 1  && mat[m+1][2] === 'c' ){
                                                genre=parseInt(mat[m+1][1],10);
                                                genre_du_champ=__gi1.__liste_des_genres[genre];
                                            }
                                        }
                                    }
                                }
                                if(nom_du_champ !== '' && genre_du_champ && !(genre_du_champ.che_est_incrément_genre===1 || genre_du_champ.che_est_primaire_genre === 1 || genre_du_champ.che_est_nur_genre===1)){
                                    champs_rev+='\n      affecte(champ(`'+nom_du_champ+'`),:'+nom_du_champ+')';
                                }
                            }
                        }
                    }
                }
                break
            }
        }
        if(champs_rev!==''){
            cht_rev_requete+='insérer(\n';
            cht_rev_requete+='   base_de_reference('+reference_table.base+'),\n';
            cht_rev_requete+='   valeurs(';
            cht_rev_requete+=champs_rev;
            cht_rev_requete+='\n   )\n';
            cht_rev_requete+='   provenance(\n';
            cht_rev_requete+='      table_reference(\n';
            cht_rev_requete+='         source(nom_de_la_table('+reference_table.nom_de_la_table+',base(b'+reference_table.base+')))\n';
            cht_rev_requete+='      )\n';
            cht_rev_requete+='   )\n';
            cht_rev_requete+=')';
        }else{
           __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
           __gi1.remplis_les_messages_et_affiche(null);
           return({__xst:__xer });
        }
        return({__xst:__xsu , cht_rev_requete : cht_rev_requete });

    }
    /*
      =============================================================================================================
    */
    basculer_l_indicateur_souche2( par ){
         
        //let requete=JSON.parse(par.requete);
        let forcer_a_1=0;
        if(par.hasOwnProperty('forcer_a_un')){
            forcer_a_1=parseInt(par.forcer_a_un,10);
        }
        
        let texte_rev=par.requete.replace(/\\n/g,'\n').replace(/\\r/g,'\r');
        let chp_type_requete=par.chp_type_requete;
        let tableau1=__gi1.__m_rev1.txt_en_tableau( texte_rev );
        let obj1=__gi1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        
        let liste_des_bases=JSON.parse(par.liste_des_bases.replace(/\\\\r/g,'').replace(/\\\\n/g,'').replace(/\\'/g,'\''))
        let tableau_des_bases_et_tables=JSON.parse(par.tableau_des_bases_et_tables.replace(/\\\\r/g,'').replace(/\\\\n/g,'').replace(/\\'/g,'\''));
//        debugger
        for(let i in liste_des_bases){
            let texte_rev_base=liste_des_bases[i]['T0.chp_rev_travail_basedd'].replace(/\\\\\'/g,'\\\'');
            let tableau2=__gi1.__m_rev1.txt_en_tableau( texte_rev_base );
            let obj2=__gi1.__m_rev1.tb_vers_matrice( tableau2.__xva , false , true , '' );
            if(obj2.__xst === __xsu){
                liste_des_bases[i]['mat']=obj2.__xva;
            }
         
        }
        let cht_rev_requete='';
        for(let i in tableau_des_bases_et_tables){
            switch(par.chp_type_requete){
                case 'delete':
                     let objd=this.traite_delete(tableau_des_bases_et_tables[i] , liste_des_bases[tableau_des_bases_et_tables[i].base].mat);
                     if(objd.__xst===__xsu){
                         cht_rev_requete=objd.cht_rev_requete;
                     }else{
                     }
                     break;
                     
                case 'liste_ecran':
                     let objle=this.traite_liste_ecran(tableau_des_bases_et_tables[i] , liste_des_bases[tableau_des_bases_et_tables[i].base].mat);
                     if(objle.__xst===__xsu){
                         cht_rev_requete=objle.cht_rev_requete;
                     }else{
                     }
                     break;
                     
                case 'select':
                     let objs=this.traite_select(tableau_des_bases_et_tables[i] , liste_des_bases[tableau_des_bases_et_tables[i].base].mat);
                     if(objs.__xst===__xsu){
                         cht_rev_requete=objs.cht_rev_requete;
                     }else{
                     }
                     break;
                     
                case 'update':
                     let obju=this.traite_update(tableau_des_bases_et_tables[i] , liste_des_bases[tableau_des_bases_et_tables[i].base].mat);
                     if(obju.__xst===__xsu){
                         cht_rev_requete=obju.cht_rev_requete;
                     }else{
                     }
                     break;
                     
                case 'insert':
                     let obji=this.traite_insert(tableau_des_bases_et_tables[i] , liste_des_bases[tableau_des_bases_et_tables[i].base].mat);
                     if(obji.__xst===__xsu){
                         cht_rev_requete=obji.cht_rev_requete;
                     }else{
                     }
                     break;
                default:
                     console.log('%c AFR, TODO','background:yellow;color:red;' , par.chp_type_requete )
                     __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
                     __gi1.remplis_les_messages_et_affiche(null);
                     return({__xst:__xer });
                     
            }
         
        }
        if( cht_rev_requete !== '' ){
            
            
            let obj={"__x_action" : "c_requetes1.basculer_l_indicateur_souche3()" ,"__xva" : {"chi_id_requete" : par.chi_id_requete , cht_rev_requete : cht_rev_requete , forcer_a_1:forcer_a_1}};
            __gi1.envoyer_un_message_au_worker( obj );
            return({"__xst" : __xsu});
            
            
        }else{
            __gi1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : __gi1.__m_rev1.nl2()} );
            __gi1.remplis_les_messages_et_affiche(null);
            return({__xst:__xer });
        }
        
        
        
         
    }
    /*
      =============================================================================================================
    */
    basculer_l_indicateur_souche1( mat , debut ){
        let chi_id_requete=0;
        let forcer_a_un=0;
        let l01=mat.length;
        for( let i=debut + 1 ; i < l01 ; i=mat[i][12] ){
            if('chi_id_requete' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_requete=parseInt( mat[i + 1][1] , 10 );
            }else if('forcer_a_un' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                forcer_a_un=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_requete > 0){
            let obj={"__x_action" : "c_requetes1.charger_la_requete()" ,"__xva" : {"chi_id_requete" : chi_id_requete,forcer_a_un:forcer_a_un}};
            this.#interface1.envoyer_un_message_au_worker( obj );
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
    */
    enregistrer_l_ordre_des_genres2( evenement , reference_arbre ){
        let tableau_des_ordre=[];
        let ordre=1;
        for(let i in reference_arbre.arbre){
            tableau_des_ordre.push( [reference_arbre.arbre[i].attributs.id,ordre++] );
        }
        let id_original=reference_arbre.reference_zone_triable.getAttribute( 'data-id_original_pour_tri' );
        let le_json=JSON.stringify( reference_arbre.arbre );
        let le_html=document.getElementById( id_original ).innerHTML;
        let obj={"__x_action" : "c_genres1.enregister_l_ordre_des_genres()" ,"__xva" : {"tableau_des_ordre" : tableau_des_ordre}};
        __gi1.envoyer_un_message_au_worker( obj );
    }
    /*
      =============================================================================================================
    */
    trier_la_liste_des_genres( reponse ){
        let id=reponse.zone_ul_li;
        let el=document.getElementById( id );
        let options={
            "hauteur_max_en_vh" : 80 ,
             /* entre 20 et 80 */
            "largeur_max" : '400px' ,
             /* 'calc(100% - 50px)', */
            "afficher_le_bouton_supprimer" : 0 ,
            "class_du_bouton_supprimer" : 'hug_bouton yy__x_signaux_0' ,
            "arborescent" : 0 ,
            "class_du_bouton_deplacer" : 'hug_bouton' ,
            "boutons_du_menu" : [] ,
            "class_du_bouton_menu" : 'hug_bouton' ,
            "class_du_bouton_replier" : 'hug_bouton yy__x_signaux_2'
        };
        options.boutons_du_menu.push( {"libelle" : '💾 enregistrer cet ordre' ,"fonction" : this.enregistrer_l_ordre_des_genres2} );
        options['afficher_le_bouton_editer']=0;
        options['class_du_bouton_editer']='hug_bouton yy__x_signaux___xif';
        new tri_arbre1( id , options );
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
    */
    enregistrer_le_menu2( evenement , reference_arbre ){
        let id_original=reference_arbre.reference_zone_triable.getAttribute( 'data-id_original_pour_tri' );
        let chi_id_acces=parseInt( document.getElementById( id_original ).getAttribute( 'data-chi_id_acces' ) , 10 );
        let le_json=JSON.stringify( reference_arbre.arbre );
        let le_html=document.getElementById( id_original ).innerHTML;
        let obj={
            "__x_action" : "c_acces1.enregister_le_menu_de_l_acces2()" ,
            "__xva" : {"chi_id_acces" : chi_id_acces ,"le_json" : le_json ,"le_html" : le_html}
        };
        __gi1.envoyer_un_message_au_worker( obj );
        /* return({"__xst" : __xsu}); */
    }
    /*
      =============================================================================================================
    */
    ajouter_une_branche_au_menu1( evenement , reference_arbre ){
        /* console.log(reference_arbre) */
        /* console.log( 'dans ajouter_une_branche' ); */
        /* console.log( 'evenement =' , evenement ); */
        /* console.log( 'reference =' , reference_arbre.reference_zone_triable.getAttribute('data-id_original_pour_tri')  ); */
        /* console.log( 'arbre =' ,  reference_arbre ); */
        let id_original=reference_arbre.reference_zone_triable.getAttribute( 'data-id_original_pour_tri' );
        if(id_original === 'liste_des_menus'){
            let max=0;
            for( let i=0 ; i < reference_arbre.arbre.length ; i++ ){
                if(reference_arbre.arbre[i].id_interne > max){
                    max=reference_arbre.arbre[i].id_interne;
                }
            }
            max++;
            let a={
                "id_interne" : max ,
                "id_interne_parent" : 0 ,
                "replie" : 0 ,
                "contient_des_enfants" : 0 ,
                "contenu" : "nouvelle branche " + max ,
                "attributs" : {}
            };
            if(id_original === 'liste_des_menus'){
                a["attributs"]={"data-liste_des_menus" : 1};
            }
            reference_arbre.arbre.splice( 0 , 0 , a );
            reference_arbre.action_externe_sur_arbre( 'ajoute_branche' , reference_arbre.arbre );
        }
    }
    /*
      =============================================================================================================
    */
    action_sur_tri_menu1( reference_arbre , obj ){
        console.log( 'dans action_sur_tri_menu1 ' , reference_arbre , obj );
        switch (obj.type_deplacement){
            case 'editer' :
                if(obj.id_original === 'liste_des_menus'){
                    for( let i=0 ; i < obj.arbre.length ; i++ ){
                        if(obj.id_cible === obj.arbre[i].id_interne){
                            let contenu_du_html='';
                            if(obj.arbre[i].attributs.hasOwnProperty( 'data-liste_des_menus' ) && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                                let nouveau_nom=window.prompt( "nouveau nom ?" , obj.arbre[i].contenu );
                                if(nouveau_nom){
                                    obj.arbre[i].contenu=nouveau_nom;
                                    reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                                }
                            }
                            break;
                        }
                    }
                }
                break;
                
            case 'supprimer' :
                /*
                  on ne peut supprimer que les branches qui ont été créées data-liste_des_menus
                */
                for( let i=0 ; i < obj.arbre.length ; i++ ){
                    if(obj.id_cible === obj.arbre[i].id_interne){
                        if(obj.arbre[i].attributs && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                            obj.arbre.splice( i , 1 );
                        }
                        break;
                    }
                }
                reference_arbre.action_externe_sur_arbre( 'supprimer_un_element' , obj.arbre );
                break;
                
            case 'dedans' :
                /* l'id_cible doit être une branche créée */
                for( let i=0 ; i < obj.arbre.length ; i++ ){
                    if(obj.id_cible === obj.arbre[i].id_interne){
                        if(obj.arbre[i].attributs && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                            /*
                              
                              l'id_source doit être une feuille
                              
                            */
                            for( let j=0 ; j < obj.arbre.length ; j++ ){
                                if(obj.id_source === obj.arbre[j].id_interne){
                                    if(!(obj.arbre[j].attributs && obj.arbre[j].attributs['data-liste_des_menus'] == 1)){
                                        reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                                    }else{
                                        reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre_avant );
                                    }
                                    break;
                                }
                            }
                        }else{
                            reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre_avant );
                        }
                        break;
                    }
                }
                break;
                
            case 'avant' : 
            case 'apres' :
                /* console.log( 'appelee_apres_action1' , obj ); */
                /*
                  si l'id_source est une branche alors l'id_interne_parent de l'id_cible doit être 0
                  
                */
                let id_source_est_branche=false;
                for( let i=0 ; i < obj.arbre.length ; i++ ){
                    if(obj.id_source === obj.arbre[i].id_interne){
                        if(obj.arbre[i].attributs && obj.arbre[i].attributs['data-liste_des_menus'] == 1){
                            id_source_est_branche=true;
                        }
                        break;
                    }
                }
                if(id_source_est_branche === true){
                    for( let i=0 ; i < obj.arbre.length ; i++ ){
                        if(obj.id_cible === obj.arbre[i].id_interne){
                            if(obj.arbre[i].id_interne_parent === 0){
                                reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                            }else{
                                reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre_avant );
                            }
                            break;
                        }
                    }
                }else{
                    reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                }
                break;
                
            default: break;
        }
        console.log( reference_arbre , obj );
    }
    /*
      =============================================================================================================
    */
    afficher_la_liste_des_menus( reponse ){
        var t='';
        t+='<h1>trier les menus de ' + reponse.__xva['chi_id_acces'] + '</h1>';
        t+='<div style="display:flex;flex-direction:row;justify-content: space-evenly;">';
        t+=' <div style="">';
        t+='  <ul id="liste_des_menus_ancien"  data-chi_id_acces="' + reponse.__xva['chi_id_acces'] + '">';
        if(reponse.__xva['cht_parametres_acces'] !== ''){
            t+=reponse.__xva['cht_parametres_acces'];
        }
        t+='  </ul>';
        t+=' </div>';
        t+=' <div style="">';
        t+='  <ul id="liste_des_menus" data-chi_id_acces="' + reponse.__xva['chi_id_acces'] + '">';
        t+=reponse.__xva.le_nouveau_html;
        t+='  </ul>';
        t+=' </div>';
        t+=' <div id="edition_des_contitions_du_menu">';
        t+=' </div>';
        t+='</div>';
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=t;
        vv_sous_fenetre1.showModal();
        let id='liste_des_menus';
        let el=document.getElementById( id );
        let options={
            "hauteur_max_en_vh" : 80 ,
             /* entre 20 et 80 */
            "largeur_max" : '400px' ,
             /* 'calc(100% - 50px)', */
            "afficher_le_bouton_supprimer" : 1 ,
            "class_du_bouton_supprimer" : 'hug_bouton yy__x_signaux_0' ,
            "fonction_appelee_apres_action" : this.action_sur_tri_menu1 ,
            "arborescent" : 1 ,
            "class_du_bouton_deplacer" : 'hug_bouton' ,
            "boutons_du_menu" : [] ,
            "class_du_bouton_menu" : 'hug_bouton' ,
            "class_du_bouton_replier" : 'hug_bouton yy__x_signaux_2'
        };
        options.boutons_du_menu.push( {"libelle" : '+' ,"fonction" : this.ajouter_une_branche_au_menu1} );
        options.boutons_du_menu.push( {"libelle" : '💾' ,"fonction" : this.enregistrer_le_menu2} );
        options['afficher_le_bouton_editer']=1;
        options['class_du_bouton_editer']='hug_bouton yy__x_signaux___xif';
        this.#reference_arbre_du_menu=new tri_arbre1( id , options );
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
      c_fonctions_js1(affecte(zone(vv_nouveau_numero_de_requete,valeur),plus( zone(vv_nouveau_numero_de_requete,valeur) , 100 )))
    */
    trier_les_menus( mat , debut ){
        let chi_id_acces=0;
        let l01=mat.length;
        for( let i=debut + 1 ; i < l01 ; i=mat[i][12] ){
            if('chi_id_acces' === mat[i][1] && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                chi_id_acces=parseInt( mat[i + 1][1] , 10 );
            }
        }
        if(chi_id_acces > 0){
            let obj={"__x_action" : "c_acces1.obtenir_les_menus_d_un_acces()" ,"__xva" : {"chi_id_acces" : chi_id_acces}};
            this.#interface1.envoyer_un_message_au_worker( obj );
            return({"__xst" : __xsu});
        }
    }
    /*
      =============================================================================================================
      c_fonctions_js1(affecte(zone(vv_nouveau_numero_de_requete,valeur),plus( zone(vv_nouveau_numero_de_requete,valeur) , 100 )))
    */
    affecte( mat , debut ){
        let l01=mat.length;
        if(mat[debut][8] === 2){
            let zone_cible=null;
            let zone_source=null;
            let constante=null;
            for( let i=debut + 1 ; i < l01 ; i=mat[i][12] ){
                if('zone' === mat[i][1] && mat[i][9] === 1 && mat[i][8] === 2){
                    for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                        if(mat[j][2] === 'c' && mat[j][9] === 1){
                        }else if(mat[j][2] === 'c' && mat[j][9] === 2 && mat[j][1] === 'valeur'){
                            zone_cible=document.getElementById( mat[j - 1][1] );
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                        }
                    }
                }else if('plus' === mat[i][1] && mat[i][9] === 2){
                    for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                        if('zone' === mat[j][1] && mat[j][9] === 1 && mat[j][8] === 2){
                            for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                                if(mat[k][2] === 'c' && mat[k][9] === 1){
                                }else if(mat[k][2] === 'c' && mat[k][9] === 2 && mat[k][1] === 'valeur'){
                                    zone_source=document.getElementById( mat[k - 1][1] );
                                }else{
                                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                                }
                            }
                        }else if('c' === mat[j][2] && mat[j][9] === 2){
                            constante=parseFloat( mat[j][1] );
                        }
                    }
                    if(zone_source !== null && zone_cible !== null && constante !== null && 'plus' === mat[i][1]){
                        zone_cible.value=parseFloat( zone_source.value ) + constante;
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                    }
                }else if('c' === mat[i][2] && mat[i][9] === 2){
                    if(this.#interface1.__m_rev1.est_num( mat[i][1] )){
                        constante=parseFloat( mat[i][1] );
                    }else{
                        constante=mat[i][1];
                    }
                    if(zone_cible !== null){
                        zone_cible.value=constante;
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                    }
                }else{
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                }
            }
        }else{
            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    compiler_zone_rev_vers_zone_php( mat , début ){
        let l01=mat.length;
        for( let i=début ; i < l01 ; i=mat[i][12] ){
            switch (mat[i][1]){
                case 'compiler_zone_rev_vers_zone_php' :
                    let zone_source='';
                    let zone_resultat='';
                    for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                        if(mat[j][1] === 'zone_source' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            zone_source=mat[j + 1][1];
                        }
                        if(mat[j][1] === 'zone_resultat' && mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                            zone_resultat=mat[j + 1][1];
                        }
                    }
                    if(zone_resultat !== '' && zone_source !== ''){
                        try{
                            let contenu_source=document.getElementById( zone_source ).value;
                            var obj1=this.#objet_conversion_rev_vers_php.c_rev_vers_php( contenu_source , {} );
                            if(obj1.__xst === __xsu){
                                if(obj1.__xva.endsWith( ";" )){
                                    obj1.__xva=obj1.__xva.substr( 0 , obj1.__xva.length - 1 );
                                }
                                document.getElementById( zone_resultat ).value=obj1.__xva;
                            }else{
                                return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                            }
                        }catch(e1){
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2( e1 )} ));
                        }
                    }
                    break;
                    
                default:
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} ));
                    
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    compiler_requete1( reponse ){
        if(reponse.__xva.contenu_bdd_requete['T0.cht_rev_requete'] === null
               || reponse.__xva.contenu_bdd_requete['T0.cht_rev_requete'] === ''
        ){
            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev est vide ' + this.#interface1.__m_rev1.nl2()} );
        }else{

            let obj1=this.#objet_conversion_requete1.init1( {"contenu_bdd_requete" : reponse.__xva.contenu_bdd_requete ,"bases_du_projet" : reponse.__xva.bases_du_projet} );
            if(obj1.__xst === __xsu){
                let obj={
                    "__x_action" : "c_requetes1.enregistrer_une_requete_compile1()" ,
                    "__xva" : {
                        "contenu_bdd_requete" : reponse.__xva.contenu_bdd_requete ,
                        "cht_sql_requete" : obj1.__xva.cht_sql_requete ,
                        "cht_php_requete" : obj1.__xva.cht_php_requete ,
                        "cht_matrice_requete" : obj1.__xva.cht_matrice_requete ,
                        "chi_id_requete" : reponse.__xva.contenu_bdd_requete['T0.chi_id_requete'] ,
                        "bouton_compiler" : reponse.__xva.bouton_compiler,
                        "rafraichir_liste" : reponse.__xva.rafraichir_liste
                    }
                };
                this.#interface1.envoyer_un_message_au_worker( obj );
                return;
            }else{
                this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : 'erreur de convertion de rev vers sql ' + this.#interface1.__m_rev1.nl2()} );
            }
        }
        this.#interface1.retablir_les_elements_masques( null );
        this.#interface1.remplis_les_messages_et_affiche( null );
    }
    /*
      =============================================================================================================
    */
    compiler_source1( reponse ){
        /* console.log(reponse.__xva); */
        let pas_de_message_de_succes=reponse.__xva.hasOwnProperty( 'pas_de_message_de_succes' ) ? ( reponse.__xva.pas_de_message_de_succes ) : ( 0 );
        let bouton_compiler=reponse.__xva.hasOwnProperty( 'bouton_compiler' ) ? ( reponse.__xva.bouton_compiler ) : ( '' );
        /*
          A partir de ce nombre de lignes, on ne transmet pas la matrice du rev mais seumement le source_texte.
          Ce dernier sera converti en matrice dans le php.
          Si la matrice est trop grosse, il y a une erreur de transmission des données.
          
        */
        let nombre_max_de_lignes_dans_la_matrice=64000;
        if(reponse.__xva.contenu_bdd['T0.chx_dossier_id_source'] === null){
            /*
              si le fichier n'existe pas sur disque, on compile le version rev
            */
            if(reponse.__xva.contenu_bdd['T0.cht_rev_source'] === null || reponse.__xva.contenu_bdd['T0.cht_rev_source'] === ''){
                /*
                  si le contenu rev est vide
                */
                this.#interface1.__m_rev1.empiler_erreur( {
                        "__xst" : __xer ,
                        "__xme" : 'le contenu rev est vide et le source n\'est pas rattaché à un répertoire ' + this.#interface1.__m_rev1.nl2()
                    } );
            }else{
                if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.htm'
                       || reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 5 , 5 ) === '.html'
                ){
                    /*
                      on transforme le rev en html 
                    */
                    var obj1=this.#objet_conversion_rev_vers_html.c_rev_vers_html( reponse.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                            "__xva" : {
                                "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        this.#interface1.envoyer_un_message_au_worker( obj );
                        /* debugger */
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du html n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.php'
                ){
                    /*
                      on transforme le rev en php 
                    */
                    var obj1=this.#objet_conversion_rev_vers_php.c_rev_vers_php( reponse.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                            "__xva" : {
                                "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        this.#interface1.envoyer_un_message_au_worker( obj );
                        /* debugger */
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du html n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 3 , 3 ) === '.js'
                ){
                    /*
                      on transforme le rev en js
                    */
                    var obj1=this.#objet_conversion_rev_vers_js.c_rev_vers_js( reponse.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                            "__xva" : {
                                "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        this.#interface1.envoyer_un_message_au_worker( obj );
                        /* debugger */
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du html n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.sql'
                ){
                    /*
                      on transforme le rev en sql
                    */
                    let tableau1=this.#interface1.__m_rev1.txt_en_tableau( reponse.__xva.contenu_bdd['T0.cht_rev_source'] );
                    let obj1=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj1.__xst === __xsu){
                        /* on transforme le rev en sql */
                        let obj2=this.#objet_conversion_rev_vers_sql.c_tab_vers_sql( obj1.__xva , {} );
                        if(obj2.__xst === __xsu){
                            let obj={
                                "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                "__xva" : {
                                    "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "enregistrer_la_matrice" : __xsu
                                }
                            };
                            this.#interface1.envoyer_un_message_au_worker( obj );
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                        }
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du sql n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.css'
                ){
                    let obj1=this.#objet_conversion_rev_vers_css.c_rev_vers_css( reponse.__xva.contenu_bdd['T0.cht_rev_source'] , {} );
                    if(obj1.__xst === __xsu){
                        let obj={
                            "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                            "__xva" : {
                                "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                "source_compile" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "enregistrer_la_matrice" : __xsu
                            }
                        };
                        this.#interface1.envoyer_un_message_au_worker( obj );
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du css n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.rev'
                ){
                    /*
                      on transforme le rev en rev
                    */
                    let tableau1=this.#interface1.__m_rev1.txt_en_tableau( reponse.__xva.contenu_bdd['T0.cht_rev_source'] );
                    let obj1=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj1.__xst === __xsu){
                        let obj2=this.#interface1.__m_rev1.matrice_vers_source_rev1( obj1.__xva , 0 , true , 1 );
                        if(obj2.__xst === __xsu){
                            let obj={
                                "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                "__xva" : {
                                    "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "enregistrer_la_matrice" : __xsu
                                }
                            };
                            this.#interface1.envoyer_un_message_au_worker( obj );
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de conversion de matrice vers rev ' + this.#interface1.__m_rev1.nl2()} );
                        }
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de conversion de rev vers matrice ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else{
                    /*
                      on transforme le rev en texte
                    */
                    let tableau1=this.#interface1.__m_rev1.txt_en_tableau( reponse.__xva.contenu_bdd['T0.cht_rev_source'] );
                    let obj1=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj1.__xst === __xsu){
                        let obj2=this.#objet_conversion_rev_vers_texte.c_rev_vers_texte( obj1.__xva , 0 , 0 );
                        if(obj2.__xst === __xsu){
                            let obj={
                                "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                "__xva" : {
                                    "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "enregistrer_la_matrice" : __xsu
                                }
                            };
                            this.#interface1.envoyer_un_message_au_worker( obj );
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le rev du texte n\'a pas pu être convertit ' + this.#interface1.__m_rev1.nl2()} );
                        }
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du texte n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }
            }
        }else{
            /*
              on transforme le source du disque en rev puis le rev en source
            */
            if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.htm'
                   || reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 5 , 5 ) === '.html'
            ){
                var obj1=this.#objet_conversion_html_vers_rev.TransformHtmlEnRev( reponse.__xva['contenu_disque'] , 0 , {} );
                if(obj1.__xst === __xsu){
                    var obj2=this.#objet_conversion_rev_vers_html.c_rev_vers_html( obj1.__xva , {} );
                    if(obj2.__xst === __xsu){
                        let matrice_source=null;
                        let enregistrer_la_matrice=__xsu;
                        if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                            matrice_source=obj2.matriceFonction;
                        }else{
                            enregistrer_la_matrice=__xer;
                        }
                        let obj={
                            "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                            "__xva" : {
                                "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                "source_compile" : obj2.__xva ,
                                "rev_du_disque" : obj1.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "matrice_source" : matrice_source ,
                                "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                "enregistrer_la_matrice" : enregistrer_la_matrice
                            }
                        };
                        this.#interface1.envoyer_un_message_au_worker( obj );
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du rev en html ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du html en rev ' + this.#interface1.__m_rev1.nl2()} );
                }
            }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.php'
            ){
                if(this.#parseur_phpparseur === null){
                    try{
                        this.#parseur_phpparseur=window.PhpParser.Engine( {"parser" : {"extractDoc" : true} ,"ast" : {"withPositions" : true}} );
                    }catch(e){
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'Erreur de chargement de php parseur ' + this.#interface1.__m_rev1.nl2( e )} );
                    }
                }
                if(this.#parseur_phpparseur !== null){
                    let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
                    let php_moins_commentaires_sql=reponse.__xva['contenu_disque'].replace( regex , '' );
                    let ast_de_php=null;
                    try{
                        ast_de_php=this.#parseur_phpparseur.parseCode( php_moins_commentaires_sql );
                    }catch(e1){
                        if(e1.message.indexOf( 'on line ' )){
                            let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                            console.log( tt );
                            if(this.#interface1.__m_rev1.est_num( tt )){
                                return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                            }else{
                                return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                            }
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }
                    let obj1=this.#objet_conversion_astphpparseur_vers_rev1.traite_ast( ast_de_php , {} );
                    if(obj1.__xst === __xsu){
                        var obj2=this.#objet_conversion_rev_vers_php.c_rev_vers_php( obj1.__xva , {} );
                        if(obj2.__xst === __xsu){
                            let matrice_source=null;
                            let enregistrer_la_matrice=__xsu;
                            if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                                matrice_source=obj2.matriceFonction;
                            }else{
                                enregistrer_la_matrice=__xer;
                            }
                            let obj={
                                "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                "__xva" : {
                                    "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "rev_du_disque" : obj1.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "matrice_source" : matrice_source ,
                                    "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                    "enregistrer_la_matrice" : enregistrer_la_matrice
                                }
                            };
                            this.#interface1.envoyer_un_message_au_worker( obj );
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du rev en html ' + this.#interface1.__m_rev1.nl2()} );
                        }
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'Erreur de convertion du html en rev ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de chargement de phpparseur ' + this.#interface1.__m_rev1.nl2()} );
                }
            }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.sql'
            ){
                let ast_de_sql=null;
                try{
                    ast_de_sql=window.sqliteParser( reponse.__xva['contenu_disque'] , {} );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(this.#interface1.__m_rev1.est_num( tt )){
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                /*
                  on récupère les commentaires pour les meta 
                */
                var tableau_des_commentaires=[];
                const matches=reponse.__xva['contenu_disque'].match( /\/\*([\s\S]*?)\*\//g );
                if(matches !== null){
                    for( let a=0 ; a < matches.length ; a++ ){
                        if(matches[a].substr( 0 , 2 ) === '/*' && matches[a].substr( matches[a].length - 2 , 2 ) === '*/'){
                            let tt=matches[a].substr( 2 , matches[a].length - 4 );
                            if(tt.indexOf( 'meta(' ) >= 0){
                                /* si il y a un meta, on essaie de le traiter */
                                let obj1=this.#interface1.__m_rev1.rev_tm( tt );
                                if(obj1.__xst === __xsu){
                                    tableau_des_commentaires.push( {"mat" : obj1.__xva ,"rev" : tt} );
                                }else{
                                    /* rien, on néglige les commentaires */
                                }
                            }
                        }
                    }
                }
                if(ast_de_sql === null){
                    /*
                      c'est peut être un sql vide qui ne contient que des commentaires meta
                    */
                    let t='';
                    if(tableau_des_commentaires.length > 0){
                        for( let i=0 ; i < tableau_des_commentaires.length ; i++ ){
                            t+=tableau_des_commentaires[i].rev;
                        }
                        debugger;
                        t2.value=t;
                        return({"__xst" : __xsu});
                    }else{
                        debugger;
                        t2.value='';
                        return({"__xst" : __xsu});
                    }
                }else{
                    let obj1=this.#objet_conversion_astsqliteparseur_vers_rev1.traite_ast_de_sqliteparseur( ast_de_sql , {} , tableau_des_commentaires );
                    if(obj1.__xst === __xsu){
                        let tableau1=this.#interface1.__m_rev1.txt_en_tableau( obj1.__xva );
                        let obj2=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                        if(obj2.__xst === __xsu){
                            /* on transforme le rev en sql */
                            let obj3=this.#objet_conversion_rev_vers_sql.c_tab_vers_sql( obj2.__xva , {} );
                            if(obj3.__xst === __xsu){
                                let matrice_source=null;
                                let enregistrer_la_matrice=__xsu;
                                if(obj2.__xva.length <= nombre_max_de_lignes_dans_la_matrice){
                                    matrice_source=obj2.__xva;
                                }else{
                                    enregistrer_la_matrice=__xer;
                                }
                                let obj={
                                    "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                    "__xva" : {
                                        "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                        "source_compile" : obj3.__xva ,
                                        "rev_du_disque" : obj1.__xva ,
                                        "bouton_compiler" : bouton_compiler ,
                                        "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                        "matrice_source" : matrice_source ,
                                        "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                        "enregistrer_la_matrice" : enregistrer_la_matrice
                                    }
                                };
                                this.#interface1.envoyer_un_message_au_worker( obj );
                            }else{
                                this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                            }
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du sql n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                        }
                        return({"__xst" : __xsu});
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
                    }
                }
            }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 3 , 3 ) === '.js'
            ){
                if(this.#parseur_javascript === null){
                    try{
                        this.#parseur_javascript=window.acorn.Parser;
                    }catch(e){
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'Erreur de chargement du parseur js ' + this.#interface1.__m_rev1.nl2( e )} );
                    }
                }
                if(this.#parseur_javascript !== null){
                    let obj=null;
                    let tableau_des_commentaires_js=[];
                    try{
                        obj=this.#parseur_javascript.parse( reponse.__xva['contenu_disque'] , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
                    }catch(e){
                        if(e.message){
                            let tt=e.message.substr( e.message.indexOf( 'Unexpected token ' ) + 17 );
                            let lig_col=null;
                            /* const text = "anything(aa:bb)otherthing"; */
                            const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                            const match=tt.match( regex );
                            if(match && this.#interface1.__m_rev1.est_num( match[1] ) && this.#interface1.__m_rev1.est_num( match[2] )){
                                lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                            }
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + ' <br />erreur dans le javascript :' + e.message} );
                        }
                        return({"__xst" : __xer});
                    }
                    let commentaires_a_remplacer=['<![CDATA[',']]>','<source_javascript_rev>','</source_javascript_rev>'];
                    for( let nn=0 ; nn < commentaires_a_remplacer.length ; nn++ ){
                        for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                            if(tableau_des_commentaires_js[indc].value.trim() === commentaires_a_remplacer[nn]){
                                tableau_des_commentaires_js.splice( indc , 1 );
                            }
                        }
                    }
                    for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                        if(tableau_des_commentaires_js[indc].value.trim() === '' && tableau_des_commentaires_js[indc].type === 'Line'){
                            tableau_des_commentaires_js.splice( indc , 1 );
                        }
                    }
                    /* on transforme le ast du js en rev */
                    let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
                    if(obj1.__xst === __xsu){
                        /* on transforme le rev en js */
                        let obj2=this.#objet_conversion_rev_vers_js.c_rev_vers_js( obj1.__xva , {} );
                        if(obj2.__xst === __xsu){
                            let matrice_source=null;
                            let enregistrer_la_matrice=__xsu;
                            if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                                matrice_source=obj2.matriceFonction;
                            }else{
                                enregistrer_la_matrice=__xer;
                            }
                            let obj={
                                "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                "__xva" : {
                                    "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                    "source_compile" : obj2.__xva ,
                                    "rev_du_disque" : obj1.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "matrice_source" : matrice_source ,
                                    "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                    "enregistrer_la_matrice" : enregistrer_la_matrice
                                }
                            };
                            this.#interface1.envoyer_un_message_au_worker( obj );
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                        }
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                    }
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de chargement  du parseur js ' + this.#interface1.__m_rev1.nl2()} );
                }
            }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.css'
            ){
                if(this.#parseur_cssparseur === null){
                    try{
                        this.#parseur_cssparseur=postcss.parse( 'html{}' , {} );
                    }catch(e){
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de chargement  du parseur css ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }
                if(this.#parseur_cssparseur !== null){
                    let ast_de_css=null;
                    try{
                        ast_de_css=window.postcss.parse( reponse.__xva['contenu_disque'] , {} );
                        try{
                            let obj1=this.#objet_conversion_astcss_vers_rev1.traite_ast_postcss( ast_de_css , {} );
                            if(obj1.__xst === __xsu){
                                let obj2=this.#objet_conversion_rev_vers_css.c_rev_vers_css( obj1.__xva , {} );
                                if(obj2.__xst === __xsu){
                                    let matrice_source=null;
                                    let enregistrer_la_matrice=__xsu;
                                    if(obj2.matriceFonction.length <= nombre_max_de_lignes_dans_la_matrice){
                                        matrice_source=obj2.matriceFonction;
                                    }else{
                                        enregistrer_la_matrice=__xer;
                                    }
                                    let obj={
                                        "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                        "__xva" : {
                                            "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                            "source_compile" : obj2.__xva ,
                                            "rev_du_disque" : obj1.__xva ,
                                            "bouton_compiler" : bouton_compiler ,
                                            "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                            "matrice_source" : matrice_source ,
                                            "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                            "enregistrer_la_matrice" : enregistrer_la_matrice
                                        }
                                    };
                                    this.#interface1.envoyer_un_message_au_worker( obj );
                                }else{
                                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du css n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                                }
                            }else{
                                this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur dans parseur css ' + this.#interface1.__m_rev1.nl2()} );
                            }
                        }catch(e1){
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur dans parseur css ' + this.#interface1.__m_rev1.nl2( e )} );
                        }
                    }catch(e1){
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur dans parseur css ' + this.#interface1.__m_rev1.nl2( e )} );
                    }
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de chargement  du parseur css ' + this.#interface1.__m_rev1.nl2()} );
                }
            }else if(reponse.__xva.contenu_bdd['T0.chp_nom_source'].substr( reponse.__xva.contenu_bdd['T0.chp_nom_source'].length - 4 , 4 ) === '.rev'
            ){
                let tableau1=this.#interface1.__m_rev1.txt_en_tableau( reponse.__xva['contenu_disque'] );
                let obj1=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                if(obj1.__xst === __xsu){
                    let obj2=this.#interface1.__m_rev1.matrice_vers_source_rev1( obj1.__xva , 0 , true , 1 );
                    if(obj2.__xst === __xsu){
                        let matrice_source=null;
                        let enregistrer_la_matrice=__xsu;
                        if(obj1.__xva.length <= nombre_max_de_lignes_dans_la_matrice){
                            matrice_source=obj1.__xva;
                        }else{
                            enregistrer_la_matrice=__xer;
                        }
                        let obj={
                            "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                            "__xva" : {
                                "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                "source_compile" : obj2.__xva ,
                                "rev_du_disque" : obj2.__xva ,
                                "bouton_compiler" : bouton_compiler ,
                                "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                "matrice_source" : matrice_source ,
                                "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                "enregistrer_la_matrice" : enregistrer_la_matrice
                            }
                        };
                        this.#interface1.envoyer_un_message_au_worker( obj );
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de conversion de matrice vers rev ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur de conversion de rev vers matrice ' + this.#interface1.__m_rev1.nl2()} );
                }
            }else{
                let obj1=this.#objet_conversion_texte_vers_rev1.texte1_vers_rev( reponse.__xva['contenu_disque'] , {} );
                if(obj1.__xst === __xsu){
                    let tableau1=this.#interface1.__m_rev1.txt_en_tableau( obj1.__xva );
                    let obj2=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
                    if(obj2.__xst === __xsu){
                        /* on transforme le rev en texte */
                        let obj3=this.#objet_conversion_rev_vers_texte.c_rev_vers_texte( obj2.__xva , 0 , 0 );
                        if(obj3.__xst === __xsu){
                            let matrice_source=null;
                            let enregistrer_la_matrice=__xer;
                            let obj={
                                "__x_action" : "c_sources1.enregistrer_un_source_compile1()" ,
                                "__xva" : {
                                    "contenu_bdd" : reponse.__xva.contenu_bdd ,
                                    "source_compile" : obj3.__xva ,
                                    "rev_du_disque" : obj1.__xva ,
                                    "bouton_compiler" : bouton_compiler ,
                                    "pas_de_message_de_succes" : pas_de_message_de_succes ,
                                    "matrice_source" : matrice_source ,
                                    "chi_id_source" : reponse.__xva.contenu_bdd['T0.chi_id_source'] ,
                                    "enregistrer_la_matrice" : enregistrer_la_matrice
                                }
                            };
                            this.#interface1.envoyer_un_message_au_worker( obj );
                        }else{
                            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                        }
                    }else{
                        this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'le contenu rev du texte n\'est pas bien formaté ' + this.#interface1.__m_rev1.nl2()} );
                    }
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : 'erreur dans parseur texte ' + this.#interface1.__m_rev1.nl2()} );
                }
            }
        }
        this.#interface1.retablir_les_elements_masques( null );
        this.#interface1.remplis_les_messages_et_affiche( null );
    }
    /*
      =============================================================================================================
    */
    importer_un_texte_de_test2( mat , ind ){
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
            let t=document.getElementById( zone_source );
            /* https://www.google.fr/search?q=%C3%A0a%CC%80%20_le_deuxieme_est_a_CC_80 */
            if(t){
                t.value=`"àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
n'ont pas le même aspect car ils ont un encodage différent.
J'aimerais bien que les navigateurs fassent la même chose dans le zones textarea.`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    rev_vers_texte1( mat , ind ){
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
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.#interface1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        let tableau1=this.#interface1.__m_rev1.txt_en_tableau( t1.value );
        let obj1=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        if(obj1.__xst === __xsu){
            /* on transforme le rev en texte */
            let obj2=this.#objet_conversion_rev_vers_texte.c_rev_vers_texte( obj1.__xva , 0 , 0 );
            if(obj2.__xst === __xsu){
                t2.value=obj2.__xva;
                return({"__xst" : __xsu});
            }else{
                this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
            }
        }else{
            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    texte1_vers_rev( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        let options={"nettoyer_html" : false};
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][1] === 'nettoyer_html' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        if(mat[j + 1][1] === 'true'){
                            options.nettoyer_html=true;
                        }
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_texte_rev1' , t1.value );
                }
                try{
                    let obj1=this.#objet_conversion_texte_vers_rev1.texte1_vers_rev( t1.value , {} );
                    if(obj1.__xst === __xsu){
                        t2.value=obj1.__xva;
                        return({"__xst" : __xsu});
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du texte'} ));
                    }
                }catch(e2){
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2( e2 ) + '<br />erreur lors de la convertion du texte'} ));
                }
            }
        }
    }
    /*
      =============================================================================================================
    */
    rev_vers_css1( mat , ind ){
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
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.#interface1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        /* on transforme le rev en css */
        let obj2=this.#objet_conversion_rev_vers_css.c_rev_vers_css( t1.value , {} );
        if(obj2.__xst === __xsu){
            t2.value=obj2.__xva;
            return({"__xst" : __xsu});
        }else{
            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    css1_vers_rev( mat , ind ){
        if(this.#module_cssparseur_charge === null){
            setTimeout( () => {
                    this.css1_vers_rev( mat , ind );} , 200 );
        }
        if(this.#parseur_cssparseur === null){
            try{
                this.#parseur_cssparseur=postcss.parse( 'html{}' , {} );
            }catch(e){
                setTimeout( () => {
                        this.css1_vers_rev( mat , ind );} , 20 );
                return({"__xst" : __xsu});
            }
        }
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        let options={"nettoyer_html" : false};
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][1] === 'nettoyer_html' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        if(mat[j + 1][1] === 'true'){
                            options.nettoyer_html=true;
                        }
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_css_rev1' , t1.value );
                }
                let ast_de_css=null;
                try{
                    ast_de_css=window.postcss.parse( t1.value , {} );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(this.#interface1.__m_rev1.est_num( tt )){
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                try{
                    let obj1=this.#objet_conversion_astcss_vers_rev1.traite_ast_postcss( ast_de_css , {} );
                    if(obj1.__xst === __xsu){
                        t2.value=obj1.__xva;
                        return({"__xst" : __xsu});
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du css'} ));
                    }
                }catch(e2){
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2( e2 ) + '<br />erreur lors de la convertion du css'} ));
                }
            }
        }
        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du css'} ));
    }
    /*
      =============================================================================================================
    */
    importer_un_css_de_test2( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=`html{/*fond*/background:linear-gradient(to bottom, #ECEFF1 0%, #DBDEE0 100%);}`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    rev_vers_sql1( mat , ind ){
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
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.#interface1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        let tableau1=this.#interface1.__m_rev1.txt_en_tableau( t1.value );
        let obj1=this.#interface1.__m_rev1.tb_vers_matrice( tableau1.__xva , false , true , '' );
        if(obj1.__xst === __xsu){
            /* on transforme le rev en sql */
            let obj2=this.#objet_conversion_rev_vers_sql.c_tab_vers_sql( obj1.__xva , {} );
            if(obj2.__xst === __xsu){
                t2.value=obj2.__xva;
                return({"__xst" : __xsu});
            }else{
                this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    sql2_vers_rev( mat , ind ){
        let options_pour_le_parseur={
            "dialect" : "sqlite" ,
             /* These are optional: */
            "includeSpaces" : true ,
             /* Adds spaces/tabs */
            "includeNewlines" : true ,
             /* Adds newlines */
            "includeComments" : true ,
             /* Adds comments */
            "includeRange" : true ,
             /* Adds source code location data */
            };
        if(this.#module_sql_parseur_cst_charge === null){
            setTimeout( () => {
                    this.sql2_vers_rev( mat , ind );} , 200 );
        }
        if(this.#parseur_sql_parseur_cst === null){
            try{
                this.#parseur_sql_parseur_cst=window.sql_parser_cst2.parse( 'select 1' , options_pour_le_parseur );
            }catch(e){
                setTimeout( () => {
                        this.sql2_vers_rev( mat , ind );} , 20 );
                return({"__xst" : __xsu});
            }
        }
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_sql_rev1' , t1.value );
                }
                let ast_de_sql=null;
                try{
                    let a_convertir=t1.value.replace( /\:/g , '___deux___points___' );
                    ast_de_sql=window.sql_parser_cst2.parse( a_convertir , options_pour_le_parseur );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' ) >= 0){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        if(this.#interface1.__m_rev1.est_num( tt )){
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else if(e1.message.indexOf( 'undefined:' ) >= 0){
                        let tt=e1.message.substr( e1.message.indexOf( 'undefined:' ) + 10 );
                        if(tt.indexOf( ':' ) >= 1){
                            tt=tt.substr( 0 , tt.indexOf( ':' ) );
                            if(this.#interface1.__m_rev1.est_num( tt )){
                                return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                            }else{
                                return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                            }
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                let obj1=this.#objet_conversion_ast_sql_parseur_cst_vers_rev1.traite_ast_de_sql_parseur_cst( ast_de_sql , {} );
                if(obj1.__xst === __xsu){
                    let tt=this.#interface1.__m_rev1.rev_tcm( obj1.__xva );
                    if(tt.__xst === __xsu){
                        let ttt=this.#interface1.__m_rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
                        if(ttt.__xst === __xsu){
                            t2.value=ttt.__xva;
                            return({"__xst" : __xsu});
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />de la matrice'} ));
                        }
                    }else{
                        t2.value=obj1.__xva;
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />du rev produit'} ));
                    }
                }else{
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
                }
            }
        }
        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
    }
    /*
      =============================================================================================================
    */
    sql1_vers_rev( mat , ind ){
        if(this.#module_sqlite_parseur_charge === null){
            setTimeout( () => {
                    this.sql1_vers_rev( mat , ind );} , 200 );
        }
        if(this.#parseur_sqlite_parseur === null){
            try{
                this.#parseur_sqlite_parseur=window.sqliteParser( 'select 1' , {} );
            }catch(e){
                setTimeout( () => {
                        this.sql1_vers_rev( mat , ind );} , 20 );
                return({"__xst" : __xsu});
            }
        }
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_sql_rev1' , t1.value );
                }
                let ast_de_sql=null;
                try{
                    ast_de_sql=window.sqliteParser( t1.value , {} );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(this.#interface1.__m_rev1.est_num( tt )){
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                try{
                    /*
                      on récupère les commentaires pour les meta 
                    */
                    var tableau_des_commentaires=[];
                    const matches=t1.value.match( /\/\*([\s\S]*?)\*\//g );
                    if(matches !== null){
                        for( let a=0 ; a < matches.length ; a++ ){
                            if(matches[a].substr( 0 , 2 ) === '/*' && matches[a].substr( matches[a].length - 2 , 2 ) === '*/'){
                                let tt=matches[a].substr( 2 , matches[a].length - 4 );
                                if(tt.indexOf( 'meta(' ) >= 0){
                                    /* si il y a un meta, on essaie de le traiter */
                                    let obj1=this.#interface1.__m_rev1.rev_tm( tt );
                                    if(obj1.__xst === __xsu){
                                        tableau_des_commentaires.push( {"mat" : obj1.__xva ,"rev" : tt} );
                                    }else{
                                        /* rien, on néglige les commentaires */
                                    }
                                }
                            }
                        }
                    }
                    if(ast_de_sql === null){
                        /*
                          c'est peut être un sql vide qui ne contient que des commentaires meta
                        */
                        let t='';
                        if(tableau_des_commentaires.length > 0){
                            for( let i=0 ; i < tableau_des_commentaires.length ; i++ ){
                                t+=tableau_des_commentaires[i].rev;
                            }
                            t2.value=t;
                            return({"__xst" : __xsu});
                        }else{
                            t2.value='';
                            return({"__xst" : __xsu});
                        }
                    }else{
                        let obj1=this.#objet_conversion_astsqliteparseur_vers_rev1.traite_ast_de_sqliteparseur( ast_de_sql , {} , tableau_des_commentaires );
                        if(obj1.__xst === __xsu){
                            let tt=this.#interface1.__m_rev1.rev_tcm( obj1.__xva );
                            if(tt.__xst === __xsu){
                                let ttt=this.#interface1.__m_rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
                                if(ttt.__xst === __xsu){
                                    t2.value=ttt.__xva;
                                    return({"__xst" : __xsu});
                                }else{
                                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />de la matrice'} ));
                                }
                            }else{
                                return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />du rev produit'} ));
                            }
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
                        }
                    }
                }catch(e2){
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2( e2 ) + '<br />erreur lors de la convertion du sql'} ));
                }
            }
        }
        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du sql'} ));
    }
    /*
      =============================================================================================================
      importer_un_sql_de_test2(zone_source(vv_txtarea_sql_rev1))
    */
    importer_un_sql_de_test2( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=`select * from toto`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    retour_convertir_source_php_vers_ast_nikic( reponse ){
        /* console.log('dans retour_convertir_source_php_vers_ast_nikic, reponse=' , reponse ); */
        let json_de_ast=JSON.parse( reponse.__xva.ast_nikic_de_php );
        let options=reponse.__xva.options;
        let obj=this.#objet_conversion_astphpnikic_vers_rev1.traite_ast_nikic( json_de_ast , options );
        if(options.hasOwnProperty( 'retablir_bouton1' ) && options.retablir_bouton1 !== ''){
            document.getElementById( options.retablir_bouton1 ).style.visibility='';
        }
        if(obj.__xst === __xsu){
            document.getElementById( options.zone_resultat ).value=obj.__xva;
            return({"__xst" : __xsu});
        }else{
            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion nikic du php'} ));
        }
    }
    /*
      =============================================================================================================
    */
    php2_vers_rev( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        let options={"nettoyer_html" : false};
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                    options.zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                    options.zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        options[mat[j][1]]=mat[j + 1][1];
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_php_rev1' , t1.value );
                }
                let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
                let php_moins_commentaires_sql=t1.value.replace( regex , '' );
                let obj={
                    "__x_action" : "c_rev_php1.convertir_source_php_vers_ast_nikic()" ,
                    "__xva" : {"php_moins_commentaires_sql" : php_moins_commentaires_sql ,"options" : options}
                };
                this.#interface1.envoyer_un_message_au_worker( obj );
                return({"__xst" : __xsu});
            }
        }
        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xal ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du php'} ));
    }
    /*
      =============================================================================================================
    */
    rev_vers_php1( mat , ind ){
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
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.#interface1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        /* on transforme le rev en php */
        let obj1=this.#objet_conversion_rev_vers_php.c_rev_vers_php( t1.value , {} );
        if(obj1.__xst === __xsu){
            t2.value=obj1.__xva;
            return({"__xst" : __xsu});
        }else{
            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    php1_vers_rev( mat , ind ){
        if(this.#module_phpparseur_charge === null){
            setTimeout( () => {
                    this.php1_vers_rev( mat , ind );} , 200 );
        }
        if(this.#parseur_phpparseur === null){
            try{
                this.#parseur_phpparseur=window.PhpParser.Engine( {"parser" : {"extractDoc" : true} ,"ast" : {"withPositions" : true}} );
            }catch(e){
                setTimeout( () => {
                        this.php1_vers_rev( mat , ind );} , 20 );
                return({"__xst" : __xsu});
            }
        }
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        let options={"nettoyer_html" : false};
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'options'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && mat[j][1] === 'nettoyer_html' && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        if(mat[j + 1][1] === 'true'){
                            options.nettoyer_html=true;
                        }
                    }
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_php_rev1' , t1.value );
                }
                let regex=/\/\*sql_inclure_deb[\s\S]*?sql_inclure_fin\*\//g;
                let php_moins_commentaires_sql=t1.value.replace( regex , '' );
                let ast_de_php=null;
                try{
                    ast_de_php=this.#parseur_phpparseur.parseCode( php_moins_commentaires_sql );
                }catch(e1){
                    if(e1.message.indexOf( 'on line ' )){
                        let tt=e1.message.substr( e1.message.indexOf( 'on line ' ) + 8 );
                        console.log( tt );
                        if(this.#interface1.__m_rev1.est_num( tt )){
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message ,"ligne" : parseInt( tt , 10 )} ));
                        }else{
                            return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                        }
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : e1.message} ));
                    }
                }
                try{
                    let obj1=this.#objet_conversion_astphpparseur_vers_rev1.traite_ast( ast_de_php , options );
                    if(obj1.__xst === __xsu){
                        t2.value=obj1.__xva;
                        return({"__xst" : __xsu});
                    }else{
                        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du php'} ));
                    }
                }catch(e2){
                    return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2( e2 ) + '<br />erreur lors de la convertion du php'} ));
                }
            }
        }
        return(this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2() + '<br />erreur lors de la convertion du php'} ));
    }
    /*
      =============================================================================================================
      importer_un_php_de_test2(zone_source(vv_txtarea_js_rev1))
    */
    importer_un_php_de_test2( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=`<?php
echo 'hella';`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    rev_vers_js1( mat , ind ){
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
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.#interface1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        /* on transforme le rev en js */
        let obj1=this.#objet_conversion_rev_vers_js.c_rev_vers_js( t1.value , {} );
        if(obj1.__xst === __xsu){
            t2.value=obj1.__xva;
            return({"__xst" : __xsu});
        }else{
            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    js1_vers_rev( mat , ind ){
        if(this.#module_acorn_charge === null){
            setTimeout( () => {
                    this.js1_vers_rev( mat , ind );} , 20 );
        }
        if(this.#parseur_javascript === null){
            try{
                this.#parseur_javascript=window.acorn.Parser;
            }catch(e){
                setTimeout( () => {
                        this.js1_vers_rev( mat , ind );} , 20 );
                return({"__xst" : __xsu});
            }
        }
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_js_rev1' , t1.value );
                }
                let obj=null;
                let tableau_des_commentaires_js=[];
                try{
                    obj=this.#parseur_javascript.parse( t1.value , {"ecmaVersion" : 'latest' ,"sourceType" : 'module' ,"ranges" : false ,"onComment" : tableau_des_commentaires_js} );
                }catch(e){
                    if(e.message){
                        if(e.message.indexOf( 'Unexpected token ' ) >= 0){
                            let tt=e.message.substr( e.message.indexOf( 'Unexpected token ' ) + 17 );
                            let lig_col=null;
                            /* const text = "anything(aa:bb)otherthing"; */
                            const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                            const match=tt.match( regex );
                            if(match && this.#interface1.__m_rev1.est_num( match[1] ) && this.#interface1.__m_rev1.est_num( match[2] )){
                                lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                            }
                            this.#interface1.__m_rev1.empiler_erreur( {
                                    "__xst" : __xer ,
                                    "__xme" : this.#interface1.__m_rev1.nl2( e ) + ' <br />erreur dans le javascript :' + e.message ,
                                    "zone_edition" : this.#interface1.zone_d_edition_en_cours ,
                                    "lig_col" : lig_col
                                } );
                        }else if(e.message.indexOf( 'Invalid number ' ) >= 0){
                            let tt=e.message.substr( e.message.indexOf( 'Invalid number ' ) + 15 );
                            let lig_col=null;
                            /* const text = "anything(aa:bb)otherthing"; */
                            const regex=/(?<=\()(\w+):(\w+)(?=\))/;
                            const match=tt.match( regex );
                            if(match && this.#interface1.__m_rev1.est_num( match[1] ) && this.#interface1.__m_rev1.est_num( match[2] )){
                                lig_col=[parseInt( match[1] , 10 ),parseInt( match[2] , 10 )];
                            }
                            this.#interface1.__m_rev1.empiler_erreur( {
                                    "__xst" : __xer ,
                                    "__xme" : this.#interface1.__m_rev1.nl2( e ) + ' <br />erreur dans le javascript :' + e.message ,
                                    "zone_edition" : this.#interface1.zone_d_edition_en_cours ,
                                    "lig_col" : lig_col
                                } );
                        }
                    }
                    return({"__xst" : __xer});
                }
                let commentaires_a_remplacer=['<![CDATA[',']]>','<source_javascript_rev>','</source_javascript_rev>'];
                for( let nn=0 ; nn < commentaires_a_remplacer.length ; nn++ ){
                    for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                        if(tableau_des_commentaires_js[indc].value.trim() === commentaires_a_remplacer[nn]){
                            tableau_des_commentaires_js.splice( indc , 1 );
                        }
                    }
                }
                for( let indc=tableau_des_commentaires_js.length - 1 ; indc >= 0 ; indc-- ){
                    if(tableau_des_commentaires_js[indc].value.trim() === '' && tableau_des_commentaires_js[indc].type === 'Line'){
                        tableau_des_commentaires_js.splice( indc , 1 );
                    }
                }
                /* on transforme le ast du js en rev */
                let obj1=this.#objet_conversion_ast_js_vers_rev.traite_ast( obj.body , tableau_des_commentaires_js , {} );
                if(obj1.__xst === __xsu){
                    t2.value=obj1.__xva;
                    return({"__xst" : __xsu});
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      copier_le_contenu1(zone_source(vv_txtarea_rev1))
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            const copyToClipboard=async ( str ) => {
                try{
                    await navigator.clipboard.writeText( str );
                    /* console.log("copied"); */
                }catch(e){
                    console.error( e );
                }
            };
            copyToClipboard( document.getElementById( zone_source ).value );
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      aller_a_la_ligne1(zone_source(vv_txtarea_rev1))
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let numero_de_ligne=window.prompt( "numero de ligne ?" , "0" );
            if(this.#interface1.__m_rev1.est_num( numero_de_ligne ) && parseInt( numero_de_ligne , 10 ) > 0){
                let cmd='interface1.placer_le_curseur_en_lig1(ligne(' + numero_de_ligne + '),zone(\'' + zone_source + '\'))';
                let mat=this.#interface1.__m_rev1.rev_tcm( cmd );
                if(mat.__xst === __xsu){
                    this.#interface1.placer_le_curseur_en_lig1( mat.__xva );
                    return({"__xst" : __xsu});
                }
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      aller_a_la_position1(zone_source(vv_txtarea_rev1))
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let position=window.prompt( "position ?" );
            if(this.#interface1.__m_rev1.est_num( position ) && parseInt( position , 10 ) >= 0){
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
                    let toto=par.that.#interface1.getCaretPos( aa , vrai_numero_de_ligne );
                }
                setTimeout( toto , 20 , {"zone_source" : zone_source ,"position" : position ,"that" : this} );
            }
            return({"__xst" : __xsu});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      c_fonctions_js1(vider_la_zone(zone(vv_txtarea_js_rev1)))
    */
    vider_la_zone( mat , ind ){
        let l01=mat.length;
        let zone='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone=mat[i + 1][1];
                }
            }
        }
        if(zone !== ''){
            let t1=document.getElementById( zone );
            if(t1){
                t1.value='';
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      c_fonctions_js1(retrecir_la_zone(zone(vv_txtarea_js_rev1)))
    */
    retrecir_la_zone( mat , ind ){
        let l01=mat.length;
        let zone='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone=mat[i + 1][1];
                }
            }
        }
        if(zone !== ''){
            let t1=document.getElementById( zone );
            if(t1){
                t1.style.height='10vh';
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      agrandir une zone textarea
      c_fonctions_js1(agrandir_la_zone(zone(vv_txtarea_js_rev1)))
    */
    agrandir_la_zone( mat , ind ){
        let l01=mat.length;
        let zone='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone=mat[i + 1][1];
                }
            }
        }
        if(zone !== ''){
            let t1=document.getElementById( zone );
            if(t1){
                let tt=t1.value.split( '\n' );
                if(tt.length < 60){
                    let le_texte=t1.value.replace( /</g , '&lt;' ).replace( />/g , '&gt;' );
                    t1.insertAdjacentHTML( 'afterend' , '<span style="white-space: pre;font-family:monospace;overflow-x:scroll;background:lightblue;" id="dummy">' + le_texte + '</span>' );
                    let rectangles=document.getElementById( 'dummy' ).getClientRects();
                    let numero_bloc=Math.max( rectangles.length - 1 , 0 );
                    let hauteur=Math.max( parseInt( ((rectangles[numero_bloc].y + rectangles[numero_bloc].height) - rectangles[0].y) + rectangles[0].height , 10 ) , 60 );
                    document.getElementById( 'dummy' ).remove();
                    t1.style.height=hauteur + 'px';
                }else{
                    t1.style.height=this.#interface1.css_dimensions.hauteur_max_textarea;
                }
                let dim=t1.getBoundingClientRect();
                let bosition_bas=dim.bottom;
                /* window.innerHeight = partie visible de la fenêtre */
                let difference=parseInt( window.innerHeight , 10 ) - parseInt( bosition_bas , 10 );
                if(difference - 2 * this.#interface1.css_dimensions.h_barre < 0){
                    /* il faut faire défiler le fenêtre de la différence */
                    let valeur_scroll_actuel=window.scrollY;
                    let decallage=valeur_scroll_actuel - difference;
                    /* on ajoute au décallage 2*( la hauteur du pied de page ) */
                    decallage=decallage + 2 * this.#interface1.css_dimensions.h_barre;
                    window.scrollTo( 0 , decallage );
                }
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      c_fonctions_js1(masquer_ou_afficher(zone(vv_tableau1)))
    */
    masquer_ou_afficher( mat , ind ){
        let l01=mat.length;
        let zone='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone=mat[i + 1][1];
                }
            }
        }
        if(zone !== ''){
            let t1=document.getElementById( zone );
            if(t1){
                if(t1.style.display === 'none'){
                    t1.style.display='';
                }else{
                    t1.style.display='none';
                }
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      c_fonctions_js1(zone_rev_vers_zone_tableau2(zone_source(vv_txtarea_rev1),zone_resultat(vv_tableau1)))
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                let tt=this.#interface1.__m_rev1.txt_en_tableau( t1.value );
                t2.innerHTML=this.construit_un_html_du_tableau_des_caracteres2( tt );
                t2.style.display='';
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
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
      =============================================================================================================
      =============================================================================================================
      fonction qui produit un tableau html de la
      forme matricielle du programme
      =============================================================================================================
      =============================================================================================================
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
      c_fonctions_js1(zone_rev_vers_zone_matrice(zone_source(vv_txtarea_rev1),zone_resultat(vv_matrice1)))
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_rev1' , t1.value );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                let tt=this.#interface1.__m_rev1.rev_tcm( t1.value );
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
    rechercher_dans_zone_source( mat , debut ){
        /* zone_quoi[vv_rechercher],zone_source[cht_genere_source]]] */
        let l01=mat.length;
        let zone_quoi='';
        let zone_source='';
        for( let i=debut ; i < l01 ; i=mat[i][12] ){
            if('rechercher_dans_zone_source' === mat[i][1] && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f' && 'zone_quoi' === mat[j][1] && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        zone_quoi=mat[j + 1][1];
                    }else if(mat[j][2] === 'f' && 'zone_source' === mat[j][1] && mat[j][8] === 1 && mat[j + 1][2] === 'c'){
                        zone_source=mat[j + 1][1];
                    }
                }
            }
        }
        /* debugger */
        if(zone_source !== '' && zone_quoi !== ''){
            setTimeout( () => {
                    let a=document.getElementById( zone_source );
                    let quoi=document.getElementById( zone_quoi ).value;
                    if(quoi === ''){
                        return({"__xst" : __xsu});
                    }
                    a.focus();
                    let position_actuelle=a.selectionStart;
                    console.log( 'position_actuelle=' + position_actuelle );
                    let position=a.value.substr( position_actuelle ).indexOf( quoi );
                    console.log( 'quoi=' + quoi , 'position_actuelle=' + position_actuelle , 'position=' + position );
                    if(position >= 0){
                        let nouvelle_position=position_actuelle + position;
                        console.log( 'nouvelle_position=' + nouvelle_position );
                        a.selectionStart=nouvelle_position;
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
                            let toto=par.that.#interface1.getCaretPos( aa , vrai_numero_de_ligne );
                        }
                        setTimeout( toto , 20 , {"zone_source" : zone_source ,"position" : nouvelle_position ,"that" : this} );
                    }} , 100 );
        }
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
        let lst=a.getElementsByTagName( 'pre' );
        if(lst.length === 0){
            /* il n'y a pas de pre, on l'ajoute */
            var child=document.createElement( 'pre' );
            child.innerHTML=a.title;
            a.appendChild( child );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    traiter_fonction_js1( mat ){
        let l01=mat.length;
        for( let i=1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && 'c_fonctions_js1' === mat[i][1]){
                for( let j=1 + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][2] === 'f'){
                        try{
                            let o=this[mat[j][1]]( mat , j );
                            if(o.__xst !== __xsu){
                                this.#afficher_un_message( o.__xst , this.#interface1.__m_rev1.nl2() + '<br />la fonction ' + mat[j][1] + ' a retourné une erreur ' );
                            }
                        }catch(e){
                            this.#afficher_un_message( __xer , 'la fonction <b>"' + mat[j][1] + '"</b> n\'a pas pu être appelée !<br />' + this.#interface1.__m_rev1.nl2( e ) );
                        }
                    }
                }
            }else if(mat[i][2] === 'f' && 'masquer_bouton1' === mat[i][1] && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                try{
                    document.getElementById( mat[i + 1][1] ).style.visibility='hidden';
                } catch {}
            }else if(mat[i][1].indexOf( 'formulaire1' ) > 0){
                let a_envoyer={"__xva" : {} ,"__x_action" : ""};
                let oba=this.#interface1.__m_rev1.matrice_vers_source_rev1( mat , i , false , i + 1 );
                if(oba.__xst !== __xsu){
                    this.#afficher_un_message( __xer , this.#interface1.__m_rev1.nl2() );
                }
                a_envoyer.__x_action=mat[i][1] + '(' + oba.__xva + ')';
                let conteneur1='';
                for( let j=i + 1 ; j < l01 ; j=mat[i][12] ){
                    if(mat[j][8] === 1 && mat[j][2] === 'f' && mat[j][1] === 'conteneur1'){
                        if(mat[j + 1][2] === 'c'){
                            conteneur1=mat[j + 1][1];
                        }
                    }
                }
                if(conteneur1 !== ''){
                    try{
                        let conteneur=document.getElementById( conteneur1 );
                        let elts=conteneur.getElementsByTagName( '*' );
                        for( let j=0 ; j < elts.length ; j++ ){
                            if(elts[j].value !== null && elts[j].id){
                                a_envoyer.__xva[elts[j].id]=elts[j].value;
                            }
                        }
                    }catch(e){
                        this.les_messages.__xer.push( this.__m_rev1.nl2( e ) + ' l\'id du conteneur"' + mat[i + 1][1] + '" n\' pas été trouvé' );
                        this.remplis_les_messages_et_affiche( null );
                        return;
                    }
                    /*
                      {
                      "__x_action":"
                      c_menus1.formulaire1(
                      conteneur1(vv_menus_modifier1),
                      chi_id_menu(6)
                      )",
                      "__xva":{
                      "chi_id_menu":"6",
                      "che_ordre_menu":"3",
                      "chx_page_menu":"6",
                      "cht_prerequis_rev_menu":"
                      appelf(
                      nomf(isset),
                      p( 
                      tableau( 
                      nomt($_SESSION[__X_CLE_APPLICATION]) , 
                      p( 'chi_id_projet' ) 
                      )
                      )
                      )","cht_prerequis_php_menu":""
                      }
                      }
                    */
                    this.#interface1.__m_worker.postMessage( a_envoyer );
                }else{
                    debugger;
                    /*
                      Ok, pas de conteneur, les données sont dans la requete
                      exemple : "c_taches1.formulaire1( action1(modifier_en_bdd1) , chi_id_tache(2) )"
                    */
                    /*
                      this.les_messages.__xer.push( this.__m_rev1.nl2() + 'conteneur1 n\a pas été trouvé !' );
                      this.remplis_les_messages_et_affiche( null );
                      return;
                    */
                }
            }else{
                debugger;
            }
        }
    }
    /*
      =============================================================================================================
      importer_un_js_de_test2(zone_source(vv_txtarea_js_rev1))
    */
    importer_un_js_de_test2( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=`var test=a===2;
(function toto(){
})();
var test0=a===2,test1=a==2;

a.b("c").d += '<e f="g">' + h.i[i] + "</e>";

for (var i = 0; i < b; i++) {
  a.b("c").d += '<e>' + h.i[i] + "</e>";
}
t = " ".repeat(NBESPACESSOURCEPRODUIT * i);
t += " ".repeat(NBESPACESSOURCEPRODUIT * i);
/*
  =====================================================================================================================
*/


function tagada() {
  for (var i = 0; i < tab.length; i++) {
    document.getElementById("tugudu").innerHTML += '<div class="yyerreur">' + tab[i] + "</div>";
  }
  var numLignePrecedente = -1;
  for (var i = 0; i < tab.length; i++) {
    var id = tab[i];
  }
}

`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    rev_vers_html1( mat , ind ){
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
        if(zone_source === '' || zone_resultat === ''){
            return({"__xst" : __xer});
        }
        this.#interface1.zone_d_edition_en_cours=zone_source;
        let t1=document.getElementById( zone_source );
        let t2=document.getElementById( zone_resultat );
        t2.innerHTML='';
        if(!(t1 && t2)){
            return({"__xst" : __xer});
        }
        /* on transforme le rev en html */
        var obj1=this.#objet_conversion_rev_vers_html.c_rev_vers_html( t1.value , {} );
        if(obj1.__xst === __xsu){
            t2.value=obj1.__xva;
            return({"__xst" : __xsu});
        }else{
            this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    html1_vers_rev( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        let zone_resultat='';
        let mettre_en_stockage_local=1;
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'zone_resultat'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_resultat=mat[i + 1][1];
                }
            }else if(mat[i][2] === 'f' && mat[i][1] === 'mettre_en_stockage_local'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    mettre_en_stockage_local=mat[i + 1][1];
                }
            }
        }
        if(zone_source !== '' && zone_resultat !== ''){
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t1=document.getElementById( zone_source );
            let t2=document.getElementById( zone_resultat );
            t2.innerHTML='';
            if(t1 && t2){
                if(mettre_en_stockage_local === 1){
                    this.#interface1.sauvegarder_contenu_en_localstorage( 'ls_html_rev1' , t1.value );
                }
                var source_html=t1.value;
                for( var i=0 ; i < t1.value.length ; i++ ){
                    var c=source_html.substr( i , 1 );
                    if(!(c == ' ' || c == '\n' || c == '\r' || c == '\t')){
                        source_html=source_html.substr( i );
                        break;
                    }
                }
                /* on transforme le html en rev */
                var obj1=this.#objet_conversion_html_vers_rev.TransformHtmlEnRev( source_html , 0 , {} );
                if(obj1.__xst === __xsu){
                    t2.value=obj1.__xva;
                    return({"__xst" : __xsu});
                }else{
                    this.#interface1.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.#interface1.__m_rev1.nl2()} );
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      importer_un_js_de_test2(zone_source(vv_txtarea_js_rev1))
    */
    importer_un_html_de_test2( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=`<!DOCTYPE html>
<html lang="fr">
 <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>title</title>
  <link rel="stylesheet" href="" />
  <style type="text/css">
  </style>
 </head>
 <body>
  <!-- content -->
  <script>
  var a=1;
  </script>
 </body>
</html>`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      importer_un_rev_de_test3(zone_source(vv_txtarea_rev1))
    */
    importer_un_rev_de_test3( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=`f(
   0,
   '1',
   \`2\`,
   "3",
   /4/
)`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      importer_un_rev_de_test2(zone_source(vv_txtarea_rev1))
    */
    importer_un_rev_de_test2( mat , ind ){
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
            /*
              "àà" <- dans l'excellent notepad++ de windows, ces deux a avec un accent grave 
              n'ont pas le même aspect car ils ont un encodage différent.
              J'aimerais bien que les navigateurs fassent la même chose.
            */
            let t=document.getElementById( zone_source );
            if(t){
                t.value=` h(début aaaa  debut) , a( h(test , 👍,𤭢,àà) , b( xx( y( h(
                       dedans
                       commentaire bloc
                     ) , t , v ) , h(aa) , xx( h(
                       dedans
                       commentaire bloc
                     ) ) , h( bb) , 5 , h(
                    cc
                  ) ) , h(comment 1) , y( ' dd&nbsp;' , h(
                    bla
                    blu
                  ) , ee , 2 , h( @ ) ) , h( comment 2 ) , a( b() ) ) , h(Iñtërnâtiônàà̀lizætiøn ☃ 💩 ❤ 😁 👍) , f(g) , h(👍😁💥💪👎☀🌞🟥🟩"àà") ) , a( p( / " \\' \\" \\n \\r \\\\r \\\\n \\\\\\\\ /g ) , p( " \\\\ \\" \\\\\\" \\n \\r '" ) , p( ' \\\\ \\' \\n \\r "  ' ) ) , h(
           p('\\\\\\' \\' \\r \\n ')
           
           
           a( p(/ " \\' \\" \\n \\r \\\\r \\\\n \\\\\\\\ /g) , p(" \\\\ \\" \\n \\r '") , p(' \\\\ \\n \\r "  ') ),
           
           appelf(nomf(f),p(/\\\\\\\\n/g),p('\\\\n'),p('\\\\r'))
           affecte(sql , "\\r\\n \\" \\\\\\\\
           select * from toto
           "),
           
           affecte(sql , '\\n \\r \\\\r \\\\n 
           select * from toto
           '),
           
         )`;
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      insère un commentaire vide #()
    */
    insérer_un_commentaire1( mat , ind ){
        let l01=mat.length;
        let zone_source='';
        for( let i=ind + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][2] === 'f' && mat[i][1] === 'zone_source'){
                if(mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    zone_source=mat[i + 1][1];
                }
            }
        }
        if(zone_source === __gi1.derniere_zone_editee.id){
            let debut=__gi1.derniere_zone_editee.value.substr( 0 , __gi1.position_dans_la_derniere_zone_editee );
            let fin=__gi1.derniere_zone_editee.value.substr( __gi1.position_dans_la_derniere_zone_editee );
            let nouveau=debut + '#()' + fin;
            __gi1.derniere_zone_editee.value=nouveau;
            let obj=this.formater_le_rev1( mat , ind );
            if(obj.__xst === __xsu){
                return({"__xst" : __xsu});
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      formater_le_rev1(zone_source(vv_txtarea_rev1))
    */
    formater_le_rev_sans_saut1( mat , ind ){
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t=document.getElementById( zone_source );
            if(t){
                let tt=this.#interface1.__m_rev1.rev_tcm( t.value );
                if(tt.__xst === __xsu){
                    let ttt=this.#interface1.__m_rev1.matrice_vers_source_rev1( tt.__xva , 0 , false , 1 );
                    if(ttt.__xst === __xsu){
                        t.value=ttt.__xva;
                        return({"__xst" : __xsu});
                    }
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
      formater_le_rev1(zone_source(vv_txtarea_rev1))
    */
    formater_le_rev1( mat , ind ){
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
            this.#interface1.zone_d_edition_en_cours=zone_source;
            let t=document.getElementById( zone_source );
            if(t){
                let tt=this.#interface1.__m_rev1.rev_tcm( t.value );
                if(tt.__xst === __xsu){
                    let ttt=this.#interface1.__m_rev1.matrice_vers_source_rev1( tt.__xva , 0 , true , 1 );
                    if(ttt.__xst === __xsu){
                        t.value=ttt.__xva;
                        return({"__xst" : __xsu});
                    }
                }
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    #afficher_un_message( type , texte ){
        let t='creer_un_message(type(' + type + '),valeur( \'' + texte.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'))';
        let o=this.#interface1.__m_rev1.rev_tcm( t );
        if(o.__xst === __xsu){
            this.#interface1.creer_un_message( o.__xva );
        }else{
            alert( this.#interface1.__m_rev1.nl2() + ' problème' );
        }
    }
    /*
      =============================================================================================================
    */
}
export{c_fonctions_js1 as c_fonctions_js1};