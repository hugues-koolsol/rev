<?php
class __interface1{
    private $sql0=null;
    private $moi='__interface1';
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        require_once('c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function affiche_page_d_accueil(&$mat,$d,&$donnees_retournees,&$donnees_recues){
        $donnees_retournees[__xac]='m1(n1(' . $this->moi . '),f1(affiche_page_d_accueil()))';
        $donnees_retournees[__xst]=__xsu;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat , true ) . '</pre>' ; exit(0);*/
    }
    /*
      =============================================================================================================
    */
    function init0(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $une_erreur_ou_hash_vide=true;
        
        if(count($donnees_recues['mat_hash']) > 0){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues['mat_hash'] , true ) . '</pre>' ; exit(0);*/
            appel_fonction($donnees_recues['mat_hash'],1,$donnees_retournees,$donnees_recues);
            $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_hash_init(' . substr($donnees_recues[__xva]['__hash'],1) . ')))';
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_retournees[__xac] , true ) . '</pre>' ; exit(0);*/
            $une_erreur_ou_hash_vide=false;

        }

        
        if($une_erreur_ou_hash_vide === true){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
            $this->affiche_page_d_accueil($mat,0,$donnees_retournees,$donnees_recues);
            $donnees_retournees[__xac]=$donnees_recues[__xac];
            /* 'm1(n1('.$this->moi.'),f1(affiche_page_d_accueil()))';*/
            $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_hash_init(m1(n1(__interface1),f1(affiche_page_d_accueil())))))';

        }

        
        if(isset($_SESSION[_CA_]['chi_id_utilisateur'])){

            $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(supprimer_class),valeur(nom_de_la_classe(yy__1)))))';
            $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(ajouter_class),valeur(nom_de_la_classe(yy__0)))))';
            
            if(isset($_SESSION[_CA_]['chi_id_projet']) && $_SESSION[_CA_]['chi_id_projet'] > 0){

                /*
                  maj des genres et des sql
                */
                
                if(substr(_CA_,-7) === '_rev_1_'){

                    $chemin_fichier__liste_des_genres=$_SESSION[_CA_]['chemin_des_sql'] . '__liste_des_genres.php';

                }else{

                    $chemin_fichier__liste_des_genres=$GLOBALS['chemin_des_sql'] . '__liste_des_genres.php';
                }

                
                if(is_file($chemin_fichier__liste_des_genres)){

                    include($chemin_fichier__liste_des_genres);
                    $donnees_retournees[__xva]['__liste_des_genres']=$__liste_des_genres;

                }else{

                    $donnees_retournees[__xva]['__liste_des_genres']=array();
                }

                $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))';
                
                if(substr(_CA_,-7) === '_rev_1_'){

                    $chemin_fichier__liste_des_sql=__CHEMIN_ABSOLU_SITE__ . 'rev_' . $_SESSION[_CA_]['chi_id_projet'] . '/__serveur/__sqls/__liste_des_sql.php';

                }else{

                    $chemin_fichier__liste_des_sql=$GLOBALS['chemin_des_sql'] . '__liste_des_sql.php';
                }

                
                if(is_file($chemin_fichier__liste_des_sql)){

                    include($chemin_fichier__liste_des_sql);
                    $donnees_retournees[__xva]['__liste_des_sql']=$__liste_des_sql;

                }else{

                    $donnees_retournees[__xva]['__liste_des_sql']=array();
                }

                $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_sql()))';

            }else{

                $donnees_retournees[__xva]['__liste_des_genres']=array();
                $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_genres()))';
                $donnees_retournees[__xva]['__liste_des_sql']=array();
                $donnees_retournees[__xac] .= 'm1(n1(_fonctions1),f1(maj_liste_des_sql()))';
            }

            
            if(isset($_SESSION[_CA_]['chi_id_acces']) && $_SESSION[_CA_]['chi_id_acces'] > 0){

                /*
                  include(__CHEMIN_ABSOLU_PROJET__ . '____menus0_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php');
                  $donnees_retournees[__xva]['$les_menu0']=$les_menu0;
                */
                $nom_fichier_acces=__CHEMIN_ABSOLU_PROJET__ . '____menus1_acces_' . $_SESSION[_CA_]['chi_id_acces'] . '_.php';
                
                if(is_file($nom_fichier_acces)){

                    include($nom_fichier_acces);

                }else{

                    $les_menu1=array();
                    /* include('___autorisations1_pour_acces_0_.php');*/
                }

                $donnees_retournees[__xva]['$les_menu1']=$les_menu1;

            }


        }else{

            $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(supprimer_class),valeur(nom_de_la_classe(yy__0)))))';
            $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_contenu(id(vv_bouton_connexion),type_cible(ajouter_class),valeur(nom_de_la_classe(yy__1)))))';
        }

        $donnees_retournees[__xac] .= 'm1(n1(__interface1),f1(maj_menu()))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/