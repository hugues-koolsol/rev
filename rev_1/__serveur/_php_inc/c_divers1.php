<?php

if(defined('BNF')){

    define('BNF',basename(__FILE__));

}

class c_divers1{
    /*
      =============================================================================================================
    */
    function generer_index_html(&$donnees_retournees){
        
        if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])
           && $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'] === 1
        ){
            $date_de_reference=date('Y_m_d_H_i_s');

            
            if($fd=fopen(REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '__lock.txt','x')){

                file_put_contents(REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '__version.txt',$date_de_reference);
                file_put_contents(REPERTOIRE_DU_CLIENT . DIRECTORY_SEPARATOR . '__version.txt',$date_de_reference);
                fclose($fd);
                unlink(REPERTOIRE_DU_SERVEUR . DIRECTORY_SEPARATOR . '__lock.txt');
                $donnees_retournees[__X_VERSION]=$date_de_reference;
                $donnees_retournees[__xst]=__xsu;
                $donnees_retournees[__x_signaux][__xsu][]=__LINE__ . '👍 la page d\'accueil bien été générée (' . date('H_i_s') . ')';

            }


        }

    }
    /*
      =============================================================================================================
    */
    function ajoute_a_valeur_session(&$donnees_retournees,/*matrice*/&$mat){
        
        if($donnees_retournees[__x_authentifie] === __xsu){

            
            if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_courant'])){

                /*variable(compteur_session_php1),valeur(-1)*/
                $variable='';
                $valeur='';
                $l01=count($mat);
                for( $i=2 ; $i < $l01 ; $i=$mat[$i][12] ){
                    
                    
                    if($mat[$i][1] === 'valeur'){

                        for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                            
                            
                            if($mat[$j][2] === 'c'){

                                $valeur=(int)($mat[$j][1]);

                            }

                        }

                    }else if($mat[$i][1] === 'variable'){

                        for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                            
                            
                            if($mat[$j][2] === 'c'){

                                $variable=$mat[$j][1];

                            }

                        }
                    }

                }
                
                if($variable === 'compteur_session_php1' && ($valeur === 1 || $valeur === -1)){

                    /*
                      // pour les tests
                      if($valeur===1){
                      usleep(100000);
                      }else{
                      usleep(200000);
                      }
                    */
                    $_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1'] += $valeur;
                    $donnees_retournees[__xva]['compteur_session_php1']=$_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1'];
                    $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(vv_compteur_session_php1),innerHTML(' . $donnees_retournees[__xva]['compteur_session_php1'] . ')))';
                    $donnees_retournees[__xst]=__xsu;

                }


            }


        }

    }
    /*
      =============================================================================================================
    */
    function creer_un_message_exemple(&$donnees_retournees,/*matrice*/&$mat){
        $type=-1;
        $valeur='valeur non trouvée';
        $l01=count($mat);
        for( $i=2 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'valeur'){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'c'){

                        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat[$j][1] , true ) . '</pre>' ; exit(0);*/
                        $valeur=$mat[$j][1];

                    }

                }

            }else if($mat[$i][1] === 'type'){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'c'){

                        $type=$mat[$j][1];
                        switch ($type){
                            case '__xer':
                            $type=__xer;
                                break;
                                
                            case '__xsu':
                            $type=__xsu;
                                break;
                                
                            case '__xal':
                            $type=__xal;
                                break;
                                
                            case '__xif':
                            $type=__xif;
                                break;
                                
                            case '__xdv':
                            $type=__xdv;
                                break;
                                
                            case '0':
                            $type=__xer;
                                break;
                                
                            case '1':
                            $type=__xsu;
                                break;
                                
                            case '2':
                            $type=__xal;
                                break;
                                
                            case '3':
                            $type=__xif;
                                break;
                                
                            case '4':
                            $type=__xdv;
                                break;
                                
                        }

                    }

                }
            }

        }
        
        if($type >= 0){

            $donnees_retournees[__x_signaux][$type][]=$valeur;
            $donnees_retournees[__xst]=__xsu;

        }else{

            $donnees_retournees[__x_signaux][__xsu][]=BNF . __LINE__ . ' les paramètres ne conviennent pas';
        }

    }
}