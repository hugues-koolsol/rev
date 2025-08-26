<?php
/*
  Fonctions générales utilisées dans les sources
*/
class c_fonctions1{
    /*
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    */
    function test_du_chaine_non_vide_ou_non_null($par,&$donnees_retournees=NULL){
        
        if($par === '' || is_null($par) ){

            return array( __xst => __xer);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
      un nom de fichier ne doit contenir que des chiffres ou des lettres minuscules ou "_" ou "."
      =============================================================================================================
    */
    function test_du_nom_de_fichier1($genre,$par,&$donnees_retournees=NULL){
        
        if($par === ''){

            return array( __xst => __xer);

        }

        for( $i=0 ; $i < strlen($par) ; $i++ ){
            
            $c=substr($par,$i,1);
            
            if(!($c >= 'a' && $c <= 'z' || $c >= '0' && $c <= '9' || $c === '_' || $c === '.')){

                if(!is_null($donnees_retournees) ){
                    $donnees_retournees[__x_signaux][__xer][]='le caractère "' . $c . '" n\'est pas admis';
                }
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
    function test_fonctions_de_c_fonctions1($par,&$donnees_retournees=NULL){
        
        if($par === '' || $par === null){

            return array( __xst => __xsu);

        }

        $tt=explode(',',$par);
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

                if(!is_null($donnees_retournees) ){
                    $donnees_retournees[__x_signaux][__xer][]='la méthode "' . $v1 . '" n\' aps été trouvée parmis la liste "' . $liste_des_méthodes . '"';
                }
                return array( __xst => __xer);

            }

        }
        return array( __xst => __xsu);
    }
}