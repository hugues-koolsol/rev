<?php
class c_cookies1{
    /*
      =============================================================================================================
    */
    public function obtenir_contraintes_interface(){
        $tp=array( 16, 18, 20);
        $arr=array(/**/
            'valeurs' => array(/**/
                    'données_bidon' => array( 0, 1),
                    'déverminage' => array( 0, 1, 2),
                    'utiliser_les_sockets' => array( 0, 1)
                ),
            'defaut' => array(/**/
                    'données_bidon' => 1,
                    'déverminage' => 0,
                    'utiliser_les_sockets' => 0
                ),
            'donnees_pour_l_interface' => array(/**/
                    'données_bidon' => array(/*tbel*/ 'type_html' => 'input_range1', 'class' => 'yy_ouinon', 'label' => 'afficher des données bidon', 'min' => 0, 'max' => 1, 'step' => 1, 'libelle' => 'nouveau', 'courant' => 'actuel', 'dimension' => '', 'fonction' => ',recharger_la_page()'
                        ),
                    'déverminage' => array(/*tbel*/ 'type_html' => 'input_range1', 'label' => 'niveau de déverminage', 'min' => 0, 'max' => 2, 'step' => 1, 'libelle' => 'nouveau', 'courant' => 'actuel', 'dimension' => '', 'fonction' => ',recharger_la_page()'),
                    'utiliser_les_sockets' => array(/*tbel*/ 'type_html' => 'input_range1', 'class' => 'yy_ouinon', 'label' => 'utiliser les socket', 'min' => 0, 'max' => 1, 'step' => 1, 'libelle' => 'nouveau', 'courant' => 'actuel', 'dimension' => '', 'fonction' => ',recharger_la_page()'
                        )
                )
        );
        return $arr;
    }
    /*
      =============================================================================================================
    */
    public function valeur(){
        $le_cookie=null;
        
        if(isset($_COOKIE[__X_CLE_APPLICATION])){

            $le_cookie=json_decode($_COOKIE[__X_CLE_APPLICATION],true);

        }

        return $le_cookie;
    }
    /*
      =============================================================================================================
    */
    public function enregistrer(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues=null){
        $le_cookie=array();
        $nouveau_cookie=true;
        $ancienne_date=time() - 3600 * 24;
        
        if(isset($_COOKIE[__X_CLE_APPLICATION])){

            $le_cookie=json_decode($_COOKIE[__X_CLE_APPLICATION],true);
            $nouveau_cookie=false;
            
            if(isset($le_cookie['date_de_maj'])){

                $ancienne_date=$le_cookie['date_de_maj'];

            }


        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $le_cookie = <pre>' . var_export( $le_cookie , true ) . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' $le_cookie = <pre>' . var_export( $le_cookie , true ) . '</pre>' ; exit(0);*/
        $contraintes=$this->obtenir_contraintes_interface();
        $aspect=array();
        foreach($contraintes['defaut'] as $k1 => $v1){
            $aspect[$k1]=isset($le_cookie['aspect'][$k1])
               && in_array($le_cookie['aspect'][$k1],$contraintes['valeurs'][$k1],true) ? $le_cookie['aspect'][$k1] : $contraintes['defaut'][$k1];
        }
        /* le cookie existant peut déjà contenir des valeurs valides ou non valides, */
        $valeur_cookie=array(/**/
            'aspect' => $aspect,
            'chaine_de_test' => '+;="\'_-:[]{}\\' . "\n" . PHP_EOL,
            'date_de_maj' => time()
        );
        
        if($donnees_recues !== null && isset($donnees_recues[__x_action])){

            $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice($donnees_recues[__x_action]);
            
            if(count($obj_matrice[__xva]) > 1 && $obj_matrice[__xva][1][2] === 'f'){

                $mat=$obj_matrice[__xva];
                /*cookies.enregistrer( champ( id( 'taille_de_la_police' ) , valeur(20) ) )*/
                $l01=count($mat);
                for( $i=2 ; $i < $l01 ; $i=$mat[$i][12] ){
                    
                    
                    if($mat[$i][1] === 'champ'){

                        $id='';
                        $valeur='';
                        $libelle='';
                        $courant='';
                        for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                            
                            
                            if($mat[$j][1] === 'valeur' && $mat[$j][2] === 'f'){

                                $valeur=(int)($mat[$j + 1][1]);

                            }else if($mat[$j][1] === 'id' && $mat[$j][2] === 'f'){

                                $id=$mat[$j + 1][1];

                            }else if($mat[$j][1] === 'libelle' && $mat[$j][2] === 'f'){

                                $libelle=$mat[$j + 1][1];

                            }else if($mat[$j][1] === 'courant' && $mat[$j][2] === 'f'){

                                $courant=$mat[$j + 1][1];
                            }

                        }
                        /* echo __FILE__ . ' ' . __LINE__ . ' $id = <pre>' . var_export( $id , true ) . '</pre> ,$valeur=<pre>' . var_export( $valeur , true ) . '</pre>' ; exit(0);*/
                        
                        if($id !== ''
                           && isset($contraintes['valeurs'][$id])
                           && is_numeric($valeur)
                           && in_array($valeur,$contraintes['valeurs'][$id],true)
                        ){

                            $valeur_cookie['aspect'][$id]=$valeur;
                            $donnees_retournees[__xva]['maj']='maj_interface1(modifier(id(' . $id . '_' . $courant . '),innerHTML(\'' . $valeur . '\'))),cookies()' . $contraintes['donnees_pour_l_interface'][$id]['fonction'];

                        }


                    }

                }

            }


        }

        $arr_cookie_options=array(
            'expires' => time() + ((60 * 60) * 24) * 30,
            'path' => '/',
            /* leading dot for compatibility or use subdomain */
            'domain' => '.' . $_SERVER['SERVER_NAME'],
            /* true ( mais de toutes les façons, même avec true, c'est une intégrité faible) or false */
            'secure' => true,
            /* il faut que le javascript puisse lire ce cookie  donc false. [true|false] */
            'httponly' => false,
            /* None || Lax  || Strict */
            'samesite' => 'Strict'
        );
        setcookie(__X_CLE_APPLICATION,json_encode($valeur_cookie,JSON_FORCE_OBJECT),$arr_cookie_options);
        $donnees_retournees[__xst]=__xsu;
        return array( __xst => __xsu, 'nouveau_cookie' => $nouveau_cookie, __xva => $valeur_cookie, 'ancienne_date' => $ancienne_date);
        /* return $valeur_cookie;*/
    }
}