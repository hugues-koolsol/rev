<?php
/*
  Fonctions générales utilisées dans les sources
*/
class __fnt1{
    /*
      =============================================================================================================
      pour les écrans liste
      =============================================================================================================
    */
    function debut_filtre1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$fonction_liste){
        
        if(!isset($donnees_recues[__xva][__fo1]) || !isset($donnees_recues[__xva][__fo1][$fonction_liste])){

            $donnees_recues[__xva][__fo1]=array( $fonction_liste => array());
            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                    $donnees_recues[__xva][__fo1][$fonction_liste][$mat[$i][1]]=$mat[$i + 1][1];

                }

            }

        }

        $form=$donnees_recues[__xva][__fo1][$fonction_liste];
        
        if(isset($donnees_recues[__xva][__fo1]) && isset($donnees_recues[__xva][__fo1][$fonction_liste])){

            /* le bouton loupe fait commencer la liste à zéro */
            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === '$__num_page' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                    
                    if(is_numeric($mat[$i + 1][1])){

                        $form['$__num_page']=(int)($mat[$i + 1][1]);

                    }


                }

            }

        }

        return $form;
    }
    /*
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    */
    function test_du_nom_technique1($par,&$donnees_retournees=null){
        
        if($par === ''){

            return array( __xst => __xer);

        }

        for( $i=0 ; $i < strlen($par) ; $i++ ){
            
            $c=substr($par,$i,1);
            
            if(!($c >= 'a' && $c <= 'z' || $c >= '0' && $c <= '9' || $c === '_' || $c === '.')){

                $donnees_retournees[__xsi][__xer][]='le caractère "' . $c . '" n\'est pas admis';
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      une fonction qui permet de tester si un champ contenant des noms de fonctions séparées par des virgules
      ne contient que des fonctions contenues dans ce fichier
      =============================================================================================================
    */
    function test_fonctions_de_c_fonctions1($par,&$donnees_retournees){
        
        if($par === '' || $par === null){

            /*
              si la fonction de test est vide, tout va bien
            */
            return array( __xst => __xsu);

        }

        $obj_matrice=$GLOBALS['__rev_vers_matrice1']->rev_vers_matrice($par);
        
        if($obj_matrice[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='le champ fonctions doit contenir des fonctions()';
            return array( __xst => __xer);

        }

        $tt=array();
        for( $i=1 ; $i < count($obj_matrice[__xva]) ; $i=$obj_matrice[__xva][$i][12] ){
            
            
            if($obj_matrice[__xva][$i][2] === 'f'){

                
                if($obj_matrice[__xva][$i][1] !== ''){

                    $tt[]=$obj_matrice[__xva][$i][1];

                }else{

                    $donnees_retournees[__xsi][__xer][]='le champ fonctions doit contenir des fonctions';
                    return array( __xst => __xer);
                }


            }else{

                $donnees_retournees[__xsi][__xer][]='le champ fonctions doit contenir des fonctions';
                return array( __xst => __xer);
            }

        }
        $class_methods=get_class_methods($this);
        $liste_des_méthodes='';
        foreach($class_methods as $k1 => $v1){
            $liste_des_méthodes .= $v1 . ',';
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_méthodes , true ) . '</pre>' ; exit(0);*/
        foreach($tt as $k1 => $v1){
            $trouve=false;
            foreach($class_methods as $method_name){
                
                if($method_name === $v1){

                    $trouve=true;
                    break;

                }

            }
            
            if($trouve === false){

                $donnees_retournees[__xsi][__xer][]='la méthode "' . $v1 . '" n\' aps été trouvée parmis la liste "' . $liste_des_méthodes . '"';
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function doit_contenir_n_caracteres($n,$par,&$donnees_retournees){
        
        if(is_null($par) || strlen($par) !== $n){

            $donnees_retournees[__xsi][__xer][]='le champ doit contenir "' . $n . '" caractères';
            return array( __xst => __xer);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function entier_compris_entre($inf,$sup,$par,&$donnees_retournees){
        
        if($par === '' || is_null($par)){

            $donnees_retournees[__xsi][__xer][]='la valeur doit être comprise entre ' . $inf . ' et ' . $sup . ' inclus.';
            return array( __xst => __xer);

        }

        
        if(!is_numeric($par)){

            $donnees_retournees[__xsi][__xer][]='la valeur doit être comprise entre ' . $inf . ' et ' . $sup . ' inclus.';
            return array( __xst => __xer);

        }

        
        if(!($par >= $inf && $par <= $sup)){

            $donnees_retournees[__xsi][__xer][]='la valeur doit être comprise entre ' . $inf . ' et ' . $sup . ' inclus.';
            return array( __xst => __xer);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    */
    function test_du_chaine_non_vide_ou_non_null($par,&$donnees_retournees=null){
        
        if($par === '' || is_null($par)){

            return array( __xst => __xer);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    */
    function test_du_nom_de_fichier1($par,&$donnees_retournees=null){
        
        if($par === ''){

            return array( __xst => __xer);

        }

        for( $i=0 ; $i < strlen($par) ; $i++ ){
            
            $c=substr($par,$i,1);
            
            if(!($c >= 'a' && $c <= 'z' || $c >= '0' && $c <= '9' || $c === '_' || $c === '.')){

                $donnees_retournees[__xsi][__xer][]='le caractère "' . $c . '" n\'est pas admis';
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      une fonction qui permet de tester si un champ contenant des noms de fonctions séparées par des virgules
      ne contient que des fonctions contenues dans ce fichier
      =============================================================================================================
    */
    function test_fonctions_de___fonctions1($par,&$donnees_retournees){
        
        if($par === '' || $par === null){

            /*
              si la fonction de test est vide, tout va bien
            */
            return array( __xst => __xsu);

        }

        $obj_matrice=$GLOBALS['__rev_vers_matrice1']->rev_vers_matrice($par);
        
        if($obj_matrice[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]='le champ fonctions doit contenir des fonctions()';
            return array( __xst => __xer);

        }

        $tt=array();
        for( $i=1 ; $i < count($obj_matrice[__xva]) ; $i=$obj_matrice[__xva][$i][12] ){
            
            
            if($obj_matrice[__xva][$i][2] === 'f'){

                
                if($obj_matrice[__xva][$i][1] !== ''){

                    $tt[]=$obj_matrice[__xva][$i][1];

                }else{

                    $donnees_retournees[__xsi][__xer][]='le champ fonctions doit contenir des fonctions';
                    return array( __xst => __xer);
                }


            }else{

                $donnees_retournees[__xsi][__xer][]='le champ fonctions doit contenir des fonctions';
                return array( __xst => __xer);
            }

        }
        $class_methods=get_class_methods($this);
        $liste_des_méthodes='';
        foreach($class_methods as $k1 => $v1){
            $liste_des_méthodes .= $v1 . ',';
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $liste_des_méthodes , true ) . '</pre>' ; exit(0);*/
        foreach($tt as $k1 => $v1){
            $trouve=false;
            foreach($class_methods as $method_name){
                
                if($method_name === $v1){

                    $trouve=true;
                    break;

                }

            }
            
            if($trouve === false){

                $donnees_retournees[__xsi][__xer][]='la méthode "' . $v1 . '" n\' a pas été trouvée parmis la liste "' . $liste_des_méthodes . '"';
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
}