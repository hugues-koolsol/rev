<?php
class c_rev_vers_matrice1{
    /*
     matrice_vers_source_rev1
    */
    /*erreur*/
    private const __xer = 0;
    /*succes*/
    private const __xsu = 1;
    /*alarme*/
    private const __xal = 2;
    /*information*/
    private const __xif = 3;
    /*déverminage*/
    private const __xdv = 4;
    private const __xst = '__xst';
    private const __xva = '__xva';
    private const NBESPACESREV = 3;
    private $globale_messages=array( "0" => array(), "1" => array(), "2" => array(), "3" => array());
    /*
      =============================================================================================================
    */
    function cst_rev_vers_texte($eltTab){
        $t='';
        switch ($eltTab[4]){
            case 1:
            /* entre simples apostrophes */
                $t=str_replace('\\\'','\'',$eltTab[1]);
                break;
                
            case 2:
            /* apostrophes inversées / accent grave */
                $t='`' . $eltTab[1] . '`';
                $t=str_replace(MON_LF,"\n",str_replace(MON_CR,"\r",$t));
                break;
                
            case 3:
            /* guillemets */
                $t=str_replace('\\"','"',$eltTab[1]);
                break;
                
            case 4:
            /* regex */
                $t='/' . $eltTab[1] . '/' . $eltTab[13];
                break;
                
            default:
            /* constante non quotée, généralement une variable ou une valeur numérique ou une constante */
                
                if($eltTab[1] === 'vrai'){

                    $t='true';

                }else if($eltTab[1] === 'faux'){

                    $t='false';

                }else{

                    $t=$eltTab[1];
                }

                
        }
        return $t;
    }
    /*
      =============================================================================================================
    */
    function ma_constante($eltTab){
        $t='';
        switch ($eltTab[4]){
            case 1:
            /* entre simples apostrophes */
                $t='\'' . $eltTab[1] . '\'';
                break;
                
            case 2:
            /* apostrophes inversées / accent grave */
                $t='`' . $eltTab[1] . '`';
                $t=str_replace(MON_LF,"\n",str_replace(MON_CR,"\r",$t));
                break;
                
            case 3:
            /* guillemets */
                $t='"' . $eltTab[1] . '"';
                break;
                
            case 4:
            /* regex */
                $t='/' . $eltTab[1] . '/' . $eltTab[13];
                break;
                
            default:
            /* constante non quotée, généralement une variable ou une valeur numérique ou une constante */
                
                if($eltTab[1] === 'vrai'){

                    $t='true';

                }else if($eltTab[1] === 'faux'){

                    $t='false';

                }else{

                    $t=$eltTab[1];
                }

                
        }
        return $t;
    }
    /*
      =============================================================================================================
      fonction transforme un commentaire 
      =============================================================================================================
    */
    private function traiteCommentaireSourceEtGenere1($texte,$niveau,$ind,$nbEspacesSrc1,$fichierRev0){
        /* Si c'est un commentaire mono$ligne, on le retourne sans aucune transformation */
        $i=strpos($texte,"\n");
        
        if($i === false){

            return $texte;

        }

        /*  */
        $i=0;
        $j=0;
        $l01=0;
        $min=0;
        $t='';
        $ligne='';
        $temps='';
        $unBloc='';
        $unBlocPlus1='';
        $newTab=array();
        $tab=array();
        $ne_contient_que_des_egals=false;
        $double_commentaire=false;
        /*  */
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $niveau , true ) . '</pre>' ; exit(0);*/
        $unBloc=str_repeat(' ',$nbEspacesSrc1 * $niveau);
        $a=str_replace("\r",'',$texte);
        $tab=explode("\n",$texte);
        $l01=count($tab);
        /*  */
        
        if(strlen($texte) > 1 && (substr($texte,0,1) === '#' || substr($texte,0,1) === '*')){

            
            if(strlen($texte) > 2 && substr($texte,1,1) === '#'){

                /*
                  un commentaire qui commence par ## sera décalé à gauche
                */
                $double_commentaire=true;

            }

            /*
              on a un commentaire de type bloc non formaté 
              car le premier caractère = #.
              On supprime les espaces inutiles en début de $ligne.
            */
            $t='';
            /* $minimim d'espaces au début de chaque $ligne */
            $min=120;
            for( $i=1 ; $i < $l01 ; $i++ ){
                
                $ligne=$tab[$i];
                for( $j=0 ; $j < strlen($ligne) ; $j++ ){
                    
                    /*
                      on balaye toutes les $lignes pour détecter 
                      le nombre d'espaces $minimal à gauche
                    */
                    $temps=substr($ligne,$j,1);
                    
                    if($temps !== ' '){

                        
                        if($j < $min){

                            /* on réajuste le $minimum d'espaces au début de chaque $ligne */
                            $min=$j;

                        }

                        /* et on passe à la $ligne suivante */
                        break;

                    }

                }
            }
            
            if($min > 2){

                /* tout décaler à gauche */
                for( $i=1 ; $i < $l01 ; $i++ ){
                    
                    $tab[$i]=substr($tab[$i],$min - 2);
                }

            }

            /* si c'est un $fichierRev0, on doit avoir la dernière $ligne vide */
            
            if($fichierRev0){

                /*
                  on retire les $lignes vierges de la fin 
                */
                for( $i=count($tab) - 1 ; $i >= 1 ; $i-- ){
                    
                    
                    if(trim($tab[$i]) === ''){

                        array_splice($tab,$i,1);

                    }else{

                        break;
                    }

                }
                $l01=count($tab);
                
                if($double_commentaire === false){

                    $t=str_repeat(' ',$nbEspacesSrc1 * $niveau);
                    for( $i=1 ; $i < $l01 ; $i++ ){
                        
                        $tab[$i]=$t . $tab[$i];
                    }

                }

                $texte=implode(PHP_EOL,$tab) . PHP_EOL . str_repeat(' ',$niveau * $nbEspacesSrc1);

            }else{

                /* on retire les $lignes vierges de la fin */
                for( $i=count($tab) - 1 ; $i >= 1 ; $i-- ){
                    
                    
                    if(trim($tab[$i]) === ''){

                        array_splice($tab,$i,1);

                    }else{

                        break;
                    }

                }
                $l01=count($tab);
                
                if($double_commentaire === false){

                    $t=str_repeat(' ',$nbEspacesSrc1 * $niveau);
                    for( $i=1 ; $i < $l01 ; $i++ ){
                        
                        $tab[$i]=$t . $tab[$i];
                    }

                }

                $texte=implode(PHP_EOL,$tab) . PHP_EOL . str_repeat(' ',$niveau * $nbEspacesSrc1);
            }

            return $texte;

        }

        /*
          si on est ici, c'est qu'on a un commentaire multi$ligne
          qu'il faut formatter en alignant à gauche les $textes 
          d'un nombre d'espaces correspondant au $niveau
        */
        $unBlocPlus1=str_repeat(' ',$nbEspacesSrc1 * $niveau + 2);
        $s1='';
        $s2='';
        for( $i=0 ; $i < $l01 ; $i++ ){
            
            $t='';
            /* les CR (les zimac) ne sont pas faits pour écrire des vrais programmes ! */
            $tab[$i]=str_replace("\r",'',$tab[$i]);
            /* on enlève les espaces au début */
            for( $j=0 ; $j < strlen($tab[$i]) ; $j++ ){
                
                $temps=substr($tab[$i],$j,1);
                
                if($temps !== ' '){

                    $t .= substr($tab[$i],$j);
                    break;

                }

            }
            $s1=$unBloc . $t;
            $s2=$unBlocPlus1 . $t;
            
            if($i === $l01 - 1){

                /* la dernière $ligne du commentaire de bloc doit être vide */
                
                if($t === ''){

                    array_push($newTab,$unBloc);

                }else{

                    /* on met la $ligne et on ajoute une $ligne vide */
                    array_push($newTab,$s2);
                    array_push($newTab,$unBloc);
                }


            }else if($i === 0){

                /* la première $ligne du commentaire de bloc doit être vide */
                
                if($t === ''){

                    array_push($newTab,$t);

                }else{

                    /*
                      on ajoute une $ligne vide en début de tableau
                      on fait un unshift ici mais on aurait pu faire
                      un push car on est à i=0
                    */
                    array_unshift($newTab,'');
                    array_push($newTab,$s2);
                }


            }else{

                array_push($newTab,$s2);
            }

        }
        $l01=count($newTab);
        $l02=0;
        $calcul=0;
        for( $i=0 ; $i < $l01 ; $i++ ){
            
            $ligne=$newTab[$i];
            
            if(strpos($ligne,'====') !== false){

                $ne_contient_que_des_egals=true;
                $l02=strlen($ligne);
                for( $j=0 ; $j < $l02 ; $j++ ){
                    
                    
                    if(!(substr($ligne,$j,1) === '=' || substr($ligne,$j,1) === ' ')){

                        $ne_contient_que_des_egals=false;
                        break;

                    }

                }
                
                if($ne_contient_que_des_egals === true){

                    $calcul=117 - (2 * $niveau) * $nbEspacesSrc1;
                    
                    if($calcul > 0){

                        $newTab[$i]='  ' . str_repeat(' ',$niveau * $nbEspacesSrc1) . str_repeat('=',$calcul);

                    }


                }


            }

        }
        $t=implode("\r\n",$newTab);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $newTab , true ) . '</pre> <pre>' . var_export( $t , true ) . '</pre>' ; exit(0);*/
        return $t;
    }
    /*
      =============================================================================================================
    */
    private function tr_commentaire_rev1($texte,$niveau,$ind){
        $s='';
        $s=$this->traiteCommentaireSourceEtGenere1($texte,$niveau,$ind,self::NBESPACESREV,true);
        return $s;
    }
    /*
      =============================================================================================================
    */
    public function matrice_vers_source_rev1($tab,$parentId,$retourLigne,$debut,$profondeur_parent=0,&$tab_retour_ligne=array(),&$contient_un_defTab_tbel=null,&$ne_prendre_qu_un_element=false){
        /*
          le parent id=0 et début=1
        */
        
        if(count($tab) <= 1){

            return array( "__xst" => __xsu, "__xva" => '');

        }

        $i=0;
        $j=0;
        $obj=array();
        $t='';
        $profondeurLimite=3;
        $nombreEnfantsLimite=5;
        $commentaire='';
        $l01=count($tab);
        $chaine='';
        $les_espaces='';
        
        if($tab[$debut][3] > 0){

            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tab[$debut] , true ) . '</pre>' ; exit(0);*/
            $les_espaces=PHP_EOL . str_repeat(' ',$tab[$debut][3] * self::NBESPACESREV);

        }

        $avant=$contient_un_defTab_tbel;
        $indice_tab=count($tab_retour_ligne);
        /*$tab_retour_ligne.push( [$retourLigne,$retourLigne,false] );*/
        array_push($tab_retour_ligne,array( $retourLigne, $retourLigne, false));
        /*
          if($tab[$debut][1]==='f1' || $tab[$debut][1]==='f2'){
          debugger;
          }
        */
        
        if($retourLigne === true
           && $tab_retour_ligne[$indice_tab][2] === false
           && $parentId > 0
           && $tab[$parentId][10] <= $profondeurLimite
           && $tab[$parentId][8] < $nombreEnfantsLimite
        ){

            /*
              à priori on supprime le retour de ligne
            */
            $tab_retour_ligne[$indice_tab][1]=false;
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tab_retour_ligne , true ) . '</pre>' ; exit(0);*/
            /*
              on ne veut pas de retour de ligne mais il faut vérifier
              que toute les sous fonctions n'aient pas plus de 5 arguments
            */
            for( $i=$debut ; $i < $l01 && $tab[$i][3] >= $tab[$debut][3] ; $i++ ){
                
                
                if($tab[$i][8] >= $nombreEnfantsLimite){

                    for( $j=$i + 1 ; $j < $l01 && $tab[$j][3] > $tab[$i][3] ; $j++ ){
                        
                        
                        if($tab[$j][7] === $i){

                            
                            if($tab[$j][1] === '#' && $tab[$j][2] === 'f' && strpos($tab[$j][13],'tbel') !== 0){

                                $contient_un_defTab_tbel=true;
                                break;

                            }


                        }

                    }
                    
                    if($contient_un_defTab_tbel){

                        $retourLigne=true;
                        $tab_retour_ligne[$indice_tab][1]=true;
                        break;

                    }else{

                        /* si il y a trop d'enfants, on met les retour de ligne */
                        $retourLigne=true;
                        $tab_retour_ligne[$indice_tab][1]=true;
                        break;
                    }


                }else if($tab[$i][1] === '#' && $tab[$i][2] === 'f'){

                    $retourLigne=true;
                    $tab_retour_ligne[$indice_tab][1]=true;
                    break;
                }

            }

        }

        $retourLigne=$tab_retour_ligne[$indice_tab][1];
        
        if($avant === true){

            $tab_retour_ligne[$indice_tab][1]=false;
            $retourLigne=$tab_retour_ligne[$indice_tab][1];

        }

        $count=0;
        for( $i=$debut ; $i < $l01 ; $i=$tab[$i][12] ){
            
            
            if($tab[$i][7] === $parentId){

                
                if($t !== ''){

                    
                    if($retourLigne === false){

                        $t .= ' , ';

                    }else{

                        $t .= ',';
                    }


                }else{

                    
                    if($retourLigne === false){

                        $t .= ' ';

                    }

                }

                
                if($retourLigne === true){

                    
                    if($tab[$i][3] > 0){

                        
                        if($profondeur_parent > 0){

                            $t .= $les_espaces;

                        }


                    }else{

                        
                        if($count > 0){

                            $t .= PHP_EOL;

                        }

                    }


                }

                /*
                  =====================================================================================
                  on insère les données
                  =====================================================================================
                */
                
                if($tab[$i][2] === 'c'){

                    $chaine='';
                    switch ($tab[$i][4]){
                        case 1:
                        /* simple quote */
                            /*
                              $chaine=tab[$i][1].replace( /
                              /g , '\n' ).replace( //g , '\r' );
                            */
                            $chaine=str_replace(MON_LF,"\n",$chaine);
                            $chaine=str_replace(MON_CR,"\r",$chaine);
                            $t .= '\'' . $chaine . '\'';
                            break;
                            
                        case 2:
                        /* modele apostrophes inversées ` */
                            /*
                              $chaine=tab[$i][1].replace( /
                              /g , '\n' ).replace( //g , '\r' );
                            */
                            $chaine=str_replace(MON_LF,"\n",$chaine);
                            $chaine=str_replace(MON_CR,"\r",$chaine);
                            $t .= '`' . $chaine . '`';
                            break;
                            
                        case 3:
                        /* double quote */
                            /*
                              $chaine=tab[$i][1].replace( /
                              /g , '\n' ).replace( //g , '\r' );
                            */
                            $chaine=str_replace(MON_LF,"\n",$chaine);
                            $chaine=str_replace(MON_CR,"\r",$chaine);
                            $t .= '"' . $chaine . '"';
                            break;
                            
                        case 4:
                        /* regex */
                            $chaine=$tab[$i][1];
                            $t .= ('/' . $chaine . '/') + $tab[$i][13];
                            break;
                            
                        case 0:
                        /* variable en dur */
                            $t .= $tab[$i][1];
                            break;
                            
                    }
                    $count++;
                    
                    if($contient_un_defTab_tbel === true && $count% 10 === 0){

                        $t .= $les_espaces;

                    }


                }else if($tab[$i][2] === 'f' && $tab[$i][1] === '#'){

                    /*
                      =============================================================================
                      on est dans un commentaire
                      =============================================================================
                    */
                    $commentaire=$this->tr_commentaire_rev1($tab[$i][13],$tab[$i][3],$i);
                    $t .= $tab[$i][1] . '(' . $commentaire . ')';
                    $count++;
                    
                    if($contient_un_defTab_tbel === true && $count% 10 === 0){

                        $t .= $les_espaces;

                    }


                }else if($tab[$i][2] === 'f' && $tab[$i][1] === '@'){

                    /*
                      =============================================================================
                      on est dans un bloc en dur, par exemple si on a :
                      <script type="xxxx">a=1;</script>
                      le type xxxx n'est pas connu et on ne peut pas être certain que le contenu
                      sera en $javascript donc on met le code "en dur" comme ceci :
                      script( ( 'type' , "xxxx" ) , @(a=1;))
                      =============================================================================
                    */
                    $commentaire=tab[$i][13];
                    $t .= $tab[$i][1] . '(' . $commentaire . ')';
                    $count++;
                    
                    if($contient_un_defTab_tbel === true && $count% 10 === 0){

                        $t .= $les_espaces;

                    }


                }else if($tab[$i][2] === 'f' && $tab[$i][8] === 0){

                    /*
                      =============================================================================
                      fonction sans argument
                      =============================================================================
                    */
                    $t .= $tab[$i][1] . '()';
                    $count++;
                    
                    if($contient_un_defTab_tbel === true && $count% 10 === 0){

                        $t .= $les_espaces;

                    }


                }else if($tab[$i][2] === 'f' && $tab[$i][8] === 1 && $tab[$i + 1][2] === 'c' && $tab[$i + 1][4] === 0){

                    /*
                      =============================================================================
                      fonction avec 1 argument constant ( permet d'éviter un appel car ce cas est très courant );
                      =============================================================================
                    */
                    $t .= $tab[$i][1] . '(' . $tab[$i + 1][1] . ')';
                    $count++;
                    
                    if($contient_un_defTab_tbel === true && $count% 10 === 0){

                        $t .= $les_espaces;

                    }


                }else{

                    /*
                      =============================================================================
                      pour toutes les autres fonctions, on fait un appel récursif
                      =============================================================================
                      
                      #
                      console.log('t='+t, 'on va dans "'+tab[$i][1]+'"');
                      if(false && ( $tab[$i][1]==='f2' || $tab[$i][1]==='f1' ) ){
                      debugger;
                      }
                    */
                    $obj=$this->matrice_vers_source_rev1($tab,$i,$retourLigne,$i + 1,$tab[$i][10],$tab_retour_ligne,$contient_un_defTab_tbel);
                    
                    if($obj[__xst] === __xsu){

                        $retour_ligne_stocke=array_pop($tab_retour_ligne);
                        /*
                          =====================================================================
                          on ouvre la fonction
                          =====================================================================
                        */
                        $t .= $tab[$i][1] . '(';
                        /*
                          =====================================================================
                          on ajoute le contenu récursif de la fonction
                          =====================================================================
                        */
                        $t .= $obj[__xva];
                        /*
                          =====================================================================
                          on ferme la fonction
                          =====================================================================
                        */
                        
                        if($retourLigne === true && $retour_ligne_stocke[1] === true){

                            
                            if($les_espaces === ''){

                                $t .= PHP_EOL;

                            }else{

                                
                                if($tab[$i][10] > 1){

                                    /* si la profondeur est supérieure à 1 */
                                    $t .= $les_espaces;

                                }else if($tab[$i][9] < $tab[$tab[$i][7]][8]){

                                    /* si ce n'est pas le dernier enfant */
                                    $t .= $les_espaces;

                                }else if($tab[$i][9] === $tab[$tab[$i][7]][8]){

                                    /* si c'est le dernier enfant */
                                    $t .= $les_espaces;
                                }

                            }


                        }

                        
                        if($retourLigne === false){

                            $t .= ' ';

                        }

                        $t .= ')';

                    }else{

                        return array( "__xst" => self::__xer, "__xme" => __LINE__ . 'erreur', "id" => $i);
                    }

                    $count++;
                }

                
                if($ne_prendre_qu_un_element === true){

                    break;

                }


            }

        }
        return array( "__xst" => __xsu, "__xva" => $t, "retour_ligne_parent" => $retourLigne);
    }
    /*
      =============================================================================================================
    */
    private function _uniord($c){
        
        if(ord($c[0]) >= 0 && ord($c[0]) <= 127){

            return ord($c[0]);

        }

        
        if(ord($c[0]) >= 192 && ord($c[0]) <= 223){

            return (ord($c[0]) - 192) * 64 + (ord($c[1]) - 128);

        }

        
        if(ord($c[0]) >= 224 && ord($c[0]) <= 239){

            return (ord($c[0]) - 224) * 4096 + (ord($c[1]) - 128) * 64 + (ord($c[2]) - 128);

        }

        
        if(ord($c[0]) >= 240 && ord($c[0]) <= 247){

            return (ord($c[0]) - 240) * 262144 + (ord($c[1]) - 128) * 4096 + (ord($c[2]) - 128) * 64 + (ord($c[3]) - 128);

        }

        
        if(ord($c[0]) >= 248 && ord($c[0]) <= 251){

            return (ord($c[0]) - 248) * 16777216 + (ord($c[1]) - 128) * 262144 + (ord($c[2]) - 128) * 4096 + (ord($c[3]) - 128) * 64 + (ord($c[4]) - 128);

        }

        
        if(ord($c[0]) >= 252 && ord($c[0]) <= 253){

            return (ord($c[0]) - 252) * 1073741824 + (ord($c[1]) - 128) * 16777216 + (ord($c[2]) - 128) * 262144 + (ord($c[3]) - 128) * 4096 + (ord($c[4]) - 128) * 64 + (ord($c[5]) - 128);

        }

        
        if(ord($c[0]) >= 254 && ord($c[0]) <= 255){

            /* error*/
            return true;

        }

        return 0;
    }
    /*
      =============================================================================================================
      €
      HTML Entity (decimal)	&#8364;
      HTML Entity (hex)	&#x20ac;
      HTML Entity (named)	&euro;
      How to type in Microsoft Windows	Alt +20AC
      UTF-8 (hex)	0xE2 0x82 0xAC (e282ac)
      UTF-8 (binary)	11100010:10000010:10101100
      UTF-16 (hex)	0x20AC (20ac)
      UTF-16 (decimal)	8 364
      UTF-32 (hex)	0x000020AC (20ac)
      UTF-32 (decimal)	8 364
      C/C++/Java source code	"\u20AC"
      Python source code	u"\u20AC"
    */
    public function txt_en_tableau($str){
        $l01=strlen($str);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $l01 , true ) . '</pre>' ; exit(0);*/
        $tab=array();
        $i=0;
        $exceptions=0;
        $numLigne=0;
        $codeCaractere='';
        $indiceTab=0;
        $position=0;
        do{
            $cd0=ord($str[$position]);
            
            if($cd0 <= 127){

                $lettre=substr($str,$position,1);
                $codeCaractere=$cd0;
                $longueur=1;

            }else{

                $lettre=mb_substr($str,$indiceTab,1);
                $codeCaractere=$this->_uniord($lettre);
                $longueur=strlen($lettre);
            }

            
            if(!($codeCaractere === 8203 || $codeCaractere === 11)){

                $tab[]=array( $lettre, $longueur, $position, $numLigne);
                $indiceTab++;
                
                if($codeCaractere === 10){

                    $numLigne++;

                }


            }else{

                $exceptions++;
            }

            $position += $longueur;
        }while($position < $l01);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tab , true ) . '</pre>' ; exit(0);*/
        return array( self::__xva => $tab, "numLigne" => $numLigne, "exceptions" => $exceptions);
    }
    /*
      =============================================================================================================
    */
    public function tb_vers_matrice($tableauEntree,$quitter_si_erreur_niveau,$autoriserCstDansRacine){
        /*
          // pour la mesure des performances, voir à la fin de cette fonction pour l'utilisation
          var startMicro = performance.now();
          
          
          =====================================================================================================
          les chaines de caractères
          =====================================================================================================
        */
        $texte='';
        $texte_precedent='';
        $commentaire='';
        $c='';
        $c1='';
        $c2='';
        /*
          je mets les éléments dans une chaine car chrome est particulièrement lent sur les tableau.push()
          à la fin de la boucle, on fait un json.parse sur $chaine_tableau
        */
        $chaine_tableau='';
        $type_precedent='';
        $drapeau_regex='';
        /*
          =====================================================================================================
          les entiers
          =====================================================================================================
        */
        $i=0;
        $j=0;
        $k=0;
        $l=0;
        $indice=0;
        $niveau=0;
        $premier=0;
        $dernier=0;
        $pos_ouv_par=0;
        $pos_fer_par=0;
        $niveau_debut_ccommentaire=0;
        $niveauDans_commentaire=0;
        $indice_tab_commentaire=0;
        $niveauPrecedent=0;
        /*
          =====================================================================================================
          les booléens
          =====================================================================================================
        */
        $dansCstSimple=false;
        $dansCstDouble=false;
        $dansCstModele=false;
        $dansCstRegex=false;
        $dans_commentaire=false;
        $ds_bloc=false;
        $constante_quotee=0;
        $constante_quotee_precedente=0;
        /*
          =====================================================================================================
          Le tableau en sortie si tout va bien
          =====================================================================================================
        */
        $tab_commentaire_et_fin_parentheses=[];
        $chaine_tableau_commentaires='';
        $T=[];
        /*
          =====================================================================================================
          initialisation du tableau contenant le source structuré en arborescence
          =====================================================================================================
          0id    1val  2typ  3niv  4coQ
          5pre   6der  7pId  8nbE  9numEnfant  
          10pro 11OPa 12FPa 13comm
          
          
          =====================================================================================================
          Les performances sur chrome sont très mauvaises en utilisant des push
          c'est pourquoi on construit cette variable $texte : "$chaine_tableau" 
          qui sera traitée avec un JSON.parse() plus bas.
          Sur un tableau de 25000 éléments, on multiplie la vitesse d'exécution 
          par un facteur compris entre 30 et 60
          =====================================================================================================
          
          
          la première version avec push était :
          T.push(Array(0,$texte,'__I',-1,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,$pos_fer_par,''));
        */
        $chaine_tableau .= '[0,"' . $texte . '","__I",-1,' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
        $type_precedent='__I';
        $niveauPrecedent=$niveau;
        $l01=count($tableauEntree);
        /*
          =====================================================================================================
          =====================================================================================================
          boucle principale sur tous les caractères du tableau passé en argument,
          on commence par analyser les cas ou on est dans  des $commentaires ou des chaines, 
          puis on analyse les caractères
          =====================================================================================================
          =====================================================================================================
        */
        $time_start=microtime(true);
        for( $i=0 ; $i < $l01 ; $i++ ){
            
            $c=$tableauEntree[$i][0];
            
            if($dans_commentaire === true){

                /*
                  
                  
                  
                  =====================================================================================
                  Si on est dans un $commentaire
                  =====================================================================================
                */
                
                if($c === ')'){

                    
                    if($niveau === $niveau_debut_ccommentaire + 1 && $niveauDans_commentaire === 0){

                        $pos_fer_par=$i;
                        /*
                          comme on a supprimé les push sur le tableau principal et qu'on remplit les $commentaires
                          après avoir rempli la fonction, on met les $commentaires dans un tableau et on remplira 
                          le tableau principal "T" à la fin
                        */
                        /*                        $chaine_tableau_commentaires.=',[' . $indice . ',"' . $commentaire.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ).replace( /\n/g , MON_LF ).replace( /\r/g , MON_CR ).replace( /\t/g , '\\t' ) . '"]'; */
                        /*#
                          $chaine_tableau_commentaires.=',[' . $indice . ',"' . $commentaire.
                          replace( /\\/g , '\\\\' ).
                          replace( /"/g , '\\"' ).
                          replace( /\n/g , MON_LF ).
                          replace( /\r/g , MON_CR ).
                          replace( /\t/g , '\\t' ) . '"]';
                        */
                        $commentaire=str_replace('\\','\\\\',$commentaire);
                        $commentaire=str_replace('"','\\"',$commentaire);
                        $commentaire=str_replace("\n",MON_LF,$commentaire);
                        $commentaire=str_replace("\r",MON_CR,$commentaire);
                        $commentaire=str_replace("\t",'\\t',$commentaire);
                        $chaine_tableau_commentaires .= ',[' . $indice . ',"' . $commentaire . '"]';
                        $indice_tab_commentaire++;
                        $pos_fer_par=0;
                        /*
                          la première version version faisait :
                          $T[$indice][13]=$commentaire;
                        */
                        $commentaire='';
                        $dans_commentaire=false;
                        $niveau--;

                    }else{

                        $commentaire .= $c;
                        $niveauDans_commentaire--;
                    }


                }else if($c === '('){

                    $commentaire .= $c;
                    $niveauDans_commentaire++;

                }else{

                    $commentaire .= $c;
                }

                /*
                  =====================================================================================
                  FIN de Si on est dans un $commentaire
                  =====================================================================================
                  
                  
                  
                */

            }else if($dansCstDouble === true){

                /*
                  
                  
                  
                  =====================================================================================
                  Si on est dans une constante double
                  =====================================================================================
                */
                
                if($c === '"'){

                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($i === $l01 - 1){

                            /*
                              cas : directive["use strict"
                            */
                            
                            if($niveau > 0){

                                return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                            "__xst" => self::__xer,
                                            "ind" => $i,
                                            "__xme" => __LINE__ . 'les parenthèses ne se finissent pas à la fin du rev',
                                            "type" => 'rev',
                                            "texte" => $texte,
                                            "chaine_tableau" => $chaine_tableau,
                                            "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                            "tableauEntree" => $tableauEntree,
                                            "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                            "autoriserCstDansRacine" => $autoriserCstDansRacine
                                        )));

                            }else{

                                return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                            "__xst" => self::__xer,
                                            "ind" => $i,
                                            "__xme" => __LINE__ . 'le $niveau ',
                                            "type" => 'rev',
                                            "texte" => $texte,
                                            "chaine_tableau" => $chaine_tableau,
                                            "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                            "tableauEntree" => $tableauEntree,
                                            "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                            "autoriserCstDansRacine" => $autoriserCstDansRacine
                                        )));
                            }


                        }


                    }

                    
                    if($i + 1 < $l01){

                        $c1=$tableauEntree[$i + 1][0];
                        
                        if($c1 === ',' || $c1 === "\t" || $c1 === "\n" || $c1 === "\r" || $c1 === '/' || $c1 === ' ' || $c1 === ')'){

                            $dernier=$i - 1;

                        }else{

                            /* cas d'erreur = f(""") */
                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'une constante encadrée par des guillemets est incorrecte ',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));
                        }


                    }else{

                        
                        if($autoriserCstDansRacine === false){

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantess ',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));

                        }

                    }

                    $dansCstDouble=false;
                    
                    if($autoriserCstDansRacine === false && $niveau === 0){

                        /* cas d'erreur = "" */
                        return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                    "__xst" => self::__xer,
                                    "ind" => $i,
                                    "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes ',
                                    "type" => 'rev',
                                    "texte" => $texte,
                                    "chaine_tableau" => $chaine_tableau,
                                    "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                    "tableauEntree" => $tableauEntree,
                                    "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                    "autoriserCstDansRacine" => $autoriserCstDansRacine
                                )));

                    }

                    $constante_quotee=3;
                    $constante_quotee_precedente=3;
                    /* methode3" */
                    /*
                      $texte=$texte.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' );
                      $texte=$texte.replace( /\n/g , MON_LF ).replace( /\r/g , MON_CR ).replace( /\t/g , '\\t' );
                    */
                    $texte=str_replace('\\','\\\\',$texte);
                    $texte=str_replace('"','\\"',$texte);
                    $texte=str_replace("\n",MON_LF,$texte);
                    $texte=str_replace("\r",MON_CR,$texte);
                    $texte=str_replace("\t",'\\t',$texte);
                    $indice++;
                    $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                    /*
                      version avec push mais c'est très lent sur chrome                
                      T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                    */
                    $type_precedent='c';
                    $niveauPrecedent=$niveau;
                    $texte_precedent=$texte;
                    $texte='';
                    $constante_quotee=0;

                }else if($c === '\\'){

                    
                    if($i === $l01 - 1){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash ne doit pas terminer une constante en i=' . $i));

                    }

                    /*  */
                    $c1=$tableauEntree[$i + 1][0];
                    
                    if($c1 === '\\'
                       || $c1 === '"'
                       || $c1 === 'n'
                       || $c1 === 't'
                       || $c1 === 'r'
                       || $c1 === 'u'
                       || $c1 === 'b'
                       || $c1 === 'f'
                       || $c1 === 'x'
                       || $c1 === 'v'
                       || $c1 === '0'
                       || $c1 === '>'
                       || $c1 === '<'
                       || $c1 === '/'
                       || $c1 === '&'
                       || $c1 === '$'
                    ){

                        
                        if($texte === ''){

                            $premier=$i;

                        }

                        $texte .= '\\' . $c1;
                        $i++;

                    }else if($c1 === '"'){

                        $texte .= $texte . '"';
                        $i++;

                    }else{

                        return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                    "__xst" => self::__xer,
                                    "ind" => $i,
                                    "__xme" => __LINE__ . 'un antislash doit être suivi par un autre antislash ou un apostrophe ou n,t,r,u ',
                                    "type" => 'rev',
                                    "texte" => $texte,
                                    "chaine_tableau" => $chaine_tableau,
                                    "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                    "tableauEntree" => $tableauEntree,
                                    "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                    "autoriserCstDansRacine" => $autoriserCstDansRacine
                                )));
                    }


                }else{

                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $texte .= $c;
                }

                /*
                  =====================================================================================
                  Fin de Si on est dans une constante double
                  =====================================================================================
                */

            }else if($dansCstRegex === true){

                /*
                  =====================================================================================
                  Si on est dans une regex
                  =====================================================================================
                */
                
                if($c === '/'){

                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($i === $l01 - 1){

                            return $this->empiler_erreur(array( "__xst" => self::__xer, "id" => $i, "__xva" => $T, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                        }


                    }

                    
                    if($i + 1 < $l01){

                        $c1=$tableauEntree[$i + 1][0];
                        
                        if($c1 === '+' || $c1 === '*'){

                            /*
                              cas des caractères gloutons , ça ne correspond pas à un drapeau de regex
                              voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet
                            */
                            $texte .= '/' . $c1;
                            $i++;
                            continue;

                        }

                        $drapeau_regex='';
                        
                        if($c1 === ',' || $c1 === "\t" || $c1 === "\n" || $c1 === "\r" || $c1 === '/' || $c1 === ' ' || $c1 === ')'){

                            $dernier=$i - 1;

                        }else{

                            for( $j=$i + 1 ; $j < $l01 ; $j++ ){
                                
                                $c1=$tableauEntree[$j][0];
                                
                                if($c1 === ',' || $c1 === "\t" || $c1 === "\n" || $c1 === "\r" || $c1 === '/' || $c1 === ' ' || $c1 === ')'){

                                    $dernier=$j;
                                    $i=$j - 1;
                                    break;

                                }else{

                                    $drapeau_regex .= $c1;
                                    
                                    if($j === $l01 - 1){

                                        $i=$j;

                                    }

                                }

                            }
                        }


                    }else{

                        
                        if(!($autoriserCstDansRacine === true)){

                            return $this->empiler_erreur(array( "__xst" => self::__xer, "id" => $i, "__xva" => $T, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                        }

                    }

                    $dansCstRegex=false;
                    $constante_quotee=4;
                    $constante_quotee_precedente=4;
                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($niveau === 0){

                            return $this->empiler_erreur(array( "__xst" => self::__xer, "id" => $i, "__xva" => $T, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                        }


                    }

                    /* methode3regex */
                    /* $texte=$texte.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ); */
                    $texte=str_replace('\\','\\\\',$texte);
                    $texte=str_replace('"','\\"',$texte);
                    /*                    if($texte.indexOf( "\n" ) > 0 || $texte.indexOf( "\r" ) >= 0 || $texte.indexOf( "\t" ) > 0){*/
                    
                    if(strpos("\n",$texte) !== false || strpos("\r",$texte) !== false || strpos("\t",$texte) !== false){

                        return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                    "__xst" => self::__xer,
                                    "ind" => $premier,
                                    "__xme" => __LINE__ . 'il ne peut pas y avoir des retours à la ligne ou des tabulations dans une chaine de type regex ',
                                    "type" => 'rev',
                                    "texte" => $texte,
                                    "chaine_tableau" => $chaine_tableau,
                                    "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                    "tableauEntree" => $tableauEntree,
                                    "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                    "autoriserCstDansRacine" => $autoriserCstDansRacine
                                )));

                    }

                    $indice++;
                    $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                    /*
                      version avec push mais c'est très lent sur chrome                
                      T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                      
                      
                      pour une regex, on met les drapeaux ( g,...) dans la zone $commentaire [13]
                    */
                    /*
                      $chaine_tableau_commentaires.=',[' . $indice . ',"' . $drapeau_regex.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ).replace( /\n/g , MON_LF ).replace( /\r/g , MON_CR ).replace( /\t/g , '\\t' ) . '"]';
                    */
                    $drapeau_regex=str_replace('\\','\\\\',$drapeau_regex);
                    $drapeau_regex=str_replace('"','\\"',$drapeau_regex);
                    $drapeau_regex=str_replace("\n",MON_LF,$drapeau_regex);
                    $drapeau_regex=str_replace("\r",MON_CR,$drapeau_regex);
                    $drapeau_regex=str_replace('\t','\\t',$drapeau_regex);
                    $chaine_tableau_commentaires .= ',[' . $indice . ',"' . $drapeau_regex . '"]';
                    $indice_tab_commentaire++;
                    $type_precedent='c';
                    $niveauPrecedent=$niveau;
                    $texte_precedent=$texte;
                    $texte='';
                    $constante_quotee=0;

                }else if($c === '\\'){

                    
                    if($i === $l01 - 1){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash ne doit pas terminer une fonction'));

                    }

                    /*  */
                    $c1=$tableauEntree[$i + 1][0];
                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $texte .= '\\' . $c1;
                    $i++;

                }else if($c === "\n" || $c === "\r"){

                    return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                "__xst" => self::__xer,
                                "ind" => $premier,
                                "__xme" => __LINE__ . 'il ne peut pas y avoir des retours à la ligne dans une chaine de type regex ',
                                "type" => 'rev',
                                "texte" => $texte,
                                "chaine_tableau" => $chaine_tableau,
                                "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                "tableauEntree" => $tableauEntree,
                                "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                "autoriserCstDansRacine" => $autoriserCstDansRacine
                            )));

                }else{

                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $texte .= $c;
                }

                /*
                  =====================================================================================
                  Fin de Si on est dans une regex
                  =====================================================================================
                  
                  
                  
                  
                */

            }else if($dansCstModele === true){

                /*
                  
                  
                  
                  =====================================================================================
                  Si on est dans une constante modèle
                  =====================================================================================
                */
                
                if($c === '`'){

                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($i === $l01 - 1){

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));

                        }


                    }

                    
                    if($i + 1 < $l01){

                        $c1=$tableauEntree[$i + 1][0];
                        
                        if($c1 === ',' || $c1 === "\t" || $c1 === "\n" || $c1 === "\r" || $c1 === '/' || $c1 === ' ' || $c1 === ')'){

                            $dernier=$i - 1;

                        }else{

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'apres une constante, il doit y avoir un caractère d\'echappement',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));
                        }


                    }else{

                        
                        if(!($autoriserCstDansRacine === true)){

                            return $this->empiler_erreur(array( "__xst" => self::__xer, "id" => $i, "__xva" => $T, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                        }

                    }

                    $dansCstModele=false;
                    $constante_quotee=2;
                    $constante_quotee_precedente=2;
                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($niveau === 0){

                            return $this->empiler_erreur(array( "__xst" => self::__xer, "id" => $i, "__xva" => $T, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                        }


                    }

                    /* methode3m */
                    /*$texte=$texte.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ).replace( /\n/g , MON_LF ).replace( /\r/g , MON_CR ).replace( /\t/g , '\\t' );*/
                    $texte=str_replace('\\','\\\\',$texte);
                    $texte=str_replace('"','\\"',$texte);
                    $texte=str_replace("\n",MON_LF,$texte);
                    $texte=str_replace("\r",MON_CR,$texte);
                    $texte=str_replace('\t','\\t',$texte);
                    $indice++;
                    $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                    /*
                      version avec push mais c'est très lent sur chrome                
                      T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                    */
                    $type_precedent='c';
                    $niveauPrecedent=$niveau;
                    $texte_precedent=$texte;
                    $texte='';
                    $constante_quotee=0;

                }else if($c === '\\'){

                    
                    if($i === $l01 - 1){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash ne doit pas terminer une fonction'));

                    }

                    /*  */
                    $c1=$tableauEntree[$i + 1][0];
                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $texte .= '\\' . $c1;
                    $i++;

                }else{

                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $texte .= $c;
                }

                /*
                  =====================================================================================
                  Fin de Si on est dans une constante modèle
                  =====================================================================================
                  
                  
                  
                */

            }else if($dansCstSimple === true){

                /*
                  
                  
                  
                  =====================================================================================
                  Si on est dans une constante simple
                  =====================================================================================
                */
                
                if($c === '\''){

                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($i === $l01 - 1){

                            return $this->empiler_erreur(array( "__xst" => self::__xer, "id" => $i, "__xva" => $T, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                        }


                    }

                    
                    if($i + 1 < $l01){

                        $c1=$tableauEntree[$i + 1][0];
                        
                        if($c1 === ',' || $c1 === "\t" || $c1 === "\n" || $c1 === "\r" || $c1 === '/' || $c1 === ' ' || $c1 === ')'){

                            $dernier=$i - 1;

                        }else{

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'il doit y avoir un caractère d\'echappement apres une constante encadrée par des apostrophes',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));
                        }


                    }else{

                        
                        if(!($autoriserCstDansRacine === true)){

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));

                        }

                    }

                    
                    if($autoriserCstDansRacine !== true){

                        
                        if($niveau === 0){

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes',
                                        "type" => 'rev',
                                        "texte" => $texte,
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));

                        }


                    }

                    $dansCstSimple=false;
                    $constante_quotee=1;
                    $constante_quotee_precedente=1;
                    /* methode3' */
                    /*                    $texte=$texte.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ).replace( /\n/g , MON_LF ).replace( /\r/g , MON_CR ).replace( /\t/g , '\\t' );*/
                    $texte=str_replace('\\','\\\\',$texte);
                    $texte=str_replace('"','\\"',$texte);
                    $texte=str_replace("\n",MON_LF,$texte);
                    $texte=str_replace("\r",MON_CR,$texte);
                    $texte=str_replace('\t','\\t',$texte);
                    $indice++;
                    $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                    /*
                      version avec push mais c'est très lent sur chrome                
                      T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                    */
                    $type_precedent='c';
                    $niveauPrecedent=$niveau;
                    $texte_precedent=$texte;
                    $texte='';
                    $constante_quotee=0;

                }else if($c === '\\'){

                    
                    if($i === $l01 - 1){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash ne doit pas terminer une fonction'));

                    }

                    /*  */
                    $c1=$tableauEntree[$i + 1][0];
                    
                    if(false){

                        
                        if($texte === ''){

                            $premier=$i;

                        }

                        $texte .= $c1;
                        $i++;

                    }else if($c1 === '\\'
                       || $c1 === '\''
                       || $c1 === '/'
                       || $c1 === 'b'
                       || $c1 === 'e'
                       || $c1 === 'f'
                       || $c1 === 'n'
                       || $c1 === 'r'
                       || $c1 === 't'
                       || $c1 === 'u'
                       || $c1 === 'v'
                       || $c1 === 'x'
                       || $c1 === '0'
                       || $c1 === '2'
                       || $c1 === '&'
                       || $c1 === '$'
                    ){

                        
                        if($texte === ''){

                            $premier=$i;

                        }

                        
                        if(false && $c1 === '\''){

                            $texte .= '\'';

                        }else{

                            $texte .= '\\' . $c1;
                        }

                        $i++;

                    }else{

                        return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                    "__xst" => self::__xer,
                                    "ind" => $i,
                                    "__xme" => __LINE__ . 'un antislash doit être suivi par un autre antislash ou un apostrophe ou n,t,r,u',
                                    "type" => 'rev',
                                    "texte" => $texte,
                                    "chaine_tableau" => $chaine_tableau,
                                    "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                    "tableauEntree" => $tableauEntree,
                                    "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                    "autoriserCstDansRacine" => $autoriserCstDansRacine
                                )));
                    }


                }else{

                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $texte .= $c;
                }

                /*
                  =====================================================================================
                  Fin de Si on est dans une constante simple
                  =====================================================================================
                  
                  
                  
                */

            }else{

                /*
                  
                  
                  
                  =====================================================================================
                  on n'est pas dans un $commentaire ou une constante,  
                  donc c'est un nouveau type qu'il faut détecter
                  =====================================================================================
                */
                
                if($c === '('){

                    /*
                      =============================================================================
                      Parenthèse ouvrante
                      =============================================================================
                      
                      
                    */
                    $pos_ouv_par=$tableauEntree[$i][2];
                    
                    if($texte === '#'){

                        $dans_commentaire=true;
                        $niveau_debut_ccommentaire=$niveau;

                    }

                    
                    if($texte === '@'){

                        $dans_commentaire=true;
                        $niveau_debut_ccommentaire=$niveau;

                    }

                    /*
                      le nom d'une fonction peut être vide , par exemple dans le cas html, on écrit a[[href,'exemple']]
                    */
                    $indice++;
                    $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"f"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                    /*
                      T.push(Array($indice,$texte,'f',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                    */
                    $type_precedent='f';
                    $niveauPrecedent=$niveau;
                    $niveau++;
                    $texte_precedent=$texte;
                    $texte='';
                    $dansCstSimple=false;
                    $dansCstDouble=false;
                    $dansCstModele=false;
                    $dansCstRegex=false;
                    /*
                      =============================================================================
                      FIN DE Parenthèse ouvrante
                      =============================================================================
                      
                      
                    */

                }else if($c === ')'){

                    /*
                      
                      
                      =============================================================================
                      Parenthèse fermante
                      =============================================================================
                    */
                    $pos_fer_par=$i;
                    
                    if($texte !== ''){

                        
                        if($niveau === 0){

                            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                        "__xst" => self::__xer,
                                        "ind" => $i,
                                        "__xme" => __LINE__ . 'une fermeture de parenthése ne doit pas être au $niveau 0',
                                        "type" => 'rev',
                                        "chaine_tableau" => $chaine_tableau,
                                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                        "tableauEntree" => $tableauEntree,
                                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                                    )));

                        }

                        $indice++;
                        $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                        /*
                          T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,0,0,''));
                        */
                        $type_precedent='c';
                        $niveauPrecedent=$niveau;
                        $texte_precedent=$texte;
                        $texte='';

                    }else{

                        /*
                          à faire éventuellement, : parenthèse fermante avec un virgule avant : x(a,) 
                          ce n'est pas réellement à traiter car la virgule sera supprimée silencieusement
                          mais on peut éventuellement le signaler ... à voir
                        */
                    }

                    $niveau--;
                    $pos_fer_par=0;
                    $dansCstSimple=false;
                    $dansCstDouble=false;
                    $dansCstModele=false;
                    $dansCstRegex=false;
                    /*
                      =============================================================================
                      FIN de Parenthèse fermante
                      =============================================================================
                      
                      
                    */

                }else if($c === '\\'){

                    /*
                      
                      
                      =============================================================================
                      anti slash 
                      =============================================================================
                    */
                    
                    if(!$dansCstSimple){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash doit être dans une constante en i=' . $i));

                    }

                    
                    if(!$dansCstDouble){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash doit être dans une constante en i=' . $i));

                    }

                    
                    if(!$dansCstModele){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash doit être dans une constante en i=' . $i));

                    }

                    
                    if(!$dansCstRegex){

                        return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'un antislash doit être dans une constante en i=' . $i));

                    }

                    /*
                      =============================================================================
                      Fin d'un anti slash
                      =============================================================================
                      
                      
                    */

                }else if($c === '\''){

                    /*
                      
                      
                      =============================================================================
                      apostrophe '
                      =============================================================================
                    */
                    $premier=$i;
                    
                    if($dansCstSimple === true){

                        $dansCstSimple=false;

                    }else{

                        
                        if($texte !== ''){

                            $indice++;
                            $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                            /*
                              T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                            */
                            $type_precedent='c';
                            $niveauPrecedent=$niveau;
                            $texte_precedent=$texte;
                            $texte='';

                        }

                        $dansCstSimple=true;
                    }

                    /*
                      =============================================================================
                      FIN apostrophe
                      =============================================================================
                      
                      
                    */

                }else if($c === '/'){

                    /*
                      =============================================================================
                      regex /
                      =============================================================================
                    */
                    $premier=$i;
                    
                    if($dansCstRegex === true){

                        $dansCstRegex=false;

                    }else{

                        
                        if($texte !== ''){

                            $indice++;
                            $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                            /*
                              T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                            */
                            $type_precedent='c';
                            $niveauPrecedent=$niveau;
                            $texte_precedent=$texte;
                            $texte='';

                        }

                        $dansCstRegex=true;
                    }

                    /*
                      =============================================================================
                      FIN regex /
                      =============================================================================
                    */

                }else if($c === '`'){

                    /*
                      
                      
                      =============================================================================
                      modele `
                      =============================================================================
                    */
                    $premier=$i;
                    
                    if($dansCstModele === true){

                        $dansCstModele=false;

                    }else{

                        
                        if($texte !== ''){

                            $indice++;
                            /*
                              T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                            */
                            $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                            $type_precedent='c';
                            $niveauPrecedent=$niveau;
                            $texte_precedent=$texte;
                            $texte='';

                        }

                        $dansCstModele=true;
                    }

                    /*
                      =============================================================================
                      FIN modele `
                      =============================================================================
                      
                      
                    */

                }else if($c === '"'){

                    /*
                      
                      
                      =============================================================================
                      double quote "
                      =============================================================================
                    */
                    $premier=$i;
                    
                    if($dansCstDouble === true){

                        $dansCstDouble=false;

                    }else{

                        
                        if($texte !== ''){

                            $indice++;
                            $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                            /*
                              T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,$pos_ouv_par,0,''));
                            */
                            $type_precedent='c';
                            $niveauPrecedent=$niveau;
                            $texte_precedent=$texte;
                            $texte='';

                        }

                        $dansCstDouble=true;
                    }

                    /*
                      =============================================================================
                      FIN double quote "
                      =============================================================================
                      
                      
                    */

                }else if($c === ','){

                    /*
                      
                      
                      
                      =============================================================================
                      virgule donc séparateur
                      =============================================================================
                    */
                    
                    if($texte !== ''){

                        
                        if($autoriserCstDansRacine !== true){

                            
                            if($niveau === 0){

                                return $this->empiler_erreur(array( "__xst" => self::__xer, "__xva" => $T, "id" => $i, "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes'));

                            }


                        }

                        $indice++;
                        $chaine_tableau .= ',[' . $indice . ',"' . $texte . '","c",' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,' . $pos_ouv_par . ',0,""]';
                        /*
                          T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,0,0,''));
                        */
                        $texte_precedent='';
                        $texte='';
                        $type_precedent='c';
                        $niveauPrecedent=$niveau;

                    }else{

                        
                        if($type_precedent === 'f'){

                            
                            if($niveauPrecedent === $niveau){

                                /*
                                  cas très spécial : todo
                                */
                                $type_precedent='c';
                                $texte_precedent='';
                                $constante_quotee_precedente=0;

                            }else{

                                
                                if($niveauPrecedent < $niveau){

                                    return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                                "__xst" => self::__xer,
                                                "ind" => $premier,
                                                "__xme" => __LINE__ . 'une virgule ne doit pas être précédée d\'un vide',
                                                "type" => 'rev',
                                                "texte" => $texte,
                                                "chaine_tableau" => $chaine_tableau,
                                                "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                                "tableauEntree" => $tableauEntree,
                                                "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                                "autoriserCstDansRacine" => $autoriserCstDansRacine
                                            )));

                                }

                            }


                        }else{

                            
                            if($niveauPrecedent < $niveau){

                                return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                            "__xst" => self::__xer,
                                            "ind" => $premier,
                                            "__xme" => __LINE__ . 'une virgule ne doit pas être précédée d\'un vide',
                                            "type" => 'rev',
                                            "texte" => $texte,
                                            "chaine_tableau" => $chaine_tableau,
                                            "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                            "tableauEntree" => $tableauEntree,
                                            "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                            "autoriserCstDansRacine" => $autoriserCstDansRacine
                                        )));

                            }else if($niveauPrecedent === $niveau && $texte_precedent === '' && $constante_quotee_precedente === 0){

                                return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                            "__xst" => self::__xer,
                                            "ind" => $premier,
                                            "__xme" => __LINE__ . 'une virgule ne doit pas être précédée d\'un vide ',
                                            "type" => 'rev',
                                            "texte" => $texte,
                                            "chaine_tableau" => $chaine_tableau,
                                            "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                            "tableauEntree" => $tableauEntree,
                                            "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                            "autoriserCstDansRacine" => $autoriserCstDansRacine
                                        )));
                            }

                        }

                    }

                    $dansCstSimple=false;
                    $dansCstDouble=false;
                    $dansCstModele=false;
                    $dansCstRegex=false;
                    /*
                      =============================================================================
                      FIN virgule donc séparateur
                      =============================================================================
                      
                      
                      
                    */

                }else if($c === ' ' || $c === "\t" || $c === "\r" || $c === "\n"){

                    /*
                      
                      
                      
                      =============================================================================
                      caractères séparateurs de mot
                      =============================================================================
                    */
                    
                    if($texte !== ''){

                        
                        if($autoriserCstDansRacine !== true){

                            
                            if($niveau === 0){

                                return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                            "__xst" => self::__xer,
                                            "ind" => $premier,
                                            "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes',
                                            "type" => 'rev',
                                            "texte" => $texte,
                                            "chaine_tableau" => $chaine_tableau,
                                            "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                            "tableauEntree" => $tableauEntree,
                                            "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                            "autoriserCstDansRacine" => $autoriserCstDansRacine
                                        )));

                            }


                        }

                        $indice++;
                        $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,0,0,""]';
                        /*
                          T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,0,0,''));
                        */
                        $type_precedent='c';
                        $niveauPrecedent=$niveau;
                        $texte_precedent=$texte;
                        $texte='';
                        $dansCstSimple=false;
                        $dansCstDouble=false;
                        $dansCstModele=false;
                        $dansCstRegex=false;

                    }

                    /*
                      =============================================================================
                      FIN de caractères séparateurs de mot
                      =============================================================================
                      
                      
                    */

                }else{

                    
                    if($texte === ''){

                        $premier=$i;

                    }

                    $dernier=$i;
                    $texte .= $c;
                }

            }

        }
        $time_end=microtime(true);
        $time=($time_end - $time_start) * 1000;
        /* echo "<br />delta parse = $time ms\n"; */
        /*
          =====================================================================================================
          on est en dehors de la boucle principale
          =====================================================================================================
        */
        
        if($niveau !== 0 && $quitter_si_erreur_niveau){

            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                        "__xst" => self::__xer,
                        "ind" => $l01 - 1,
                        "__xme" => ((__LINE__ . '💥 des parenthèses ne correspondent pas, (') + ($niveau > 0 ? 'il en manque :' : 'il y en a trop : ')) . '$niveau=' . $niveau . ') ',
                        "type" => 'rev',
                        "texte" => $texte,
                        "chaine_tableau" => $chaine_tableau,
                        "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                        "tableauEntree" => $tableauEntree,
                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                    )));

        }

        /*
          Si on autorise les constantes à la racine, il reste peut être du $texte à traiter
        */
        
        if($texte !== ''){

            $indice++;
            
            if($autoriserCstDansRacine !== true){

                
                if($niveau === 0){

                    return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                                "__xst" => self::__xer,
                                "ind" => $l01 - 1,
                                "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes ',
                                "type" => 'rev',
                                "texte" => $texte,
                                "chaine_tableau" => $chaine_tableau,
                                "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
                                "tableauEntree" => $tableauEntree,
                                "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                                "autoriserCstDansRacine" => $autoriserCstDansRacine
                            )));

                }


            }

            /*
              T.push(Array($indice,$texte,'c',$niveau,$constante_quotee,$premier,$dernier,0,0,0,0,0,0,''));
            */
            $chaine_tableau .= ',[' . $indice . ',"' . $texte . '",' . '"c"' . ',' . $niveau . ',' . $constante_quotee . ',' . $premier . ',' . $dernier . ',0,0,0,0,0,0,""]';
            $type_precedent='c';
            $niveauPrecedent=$niveau;

        }

        /*
          =====================================================================================================
          On reconstruit $chaine_tableau ici
          =====================================================================================================
        */
        $chaine_tableau='[' . $chaine_tableau . ']';
        $time_start=microtime(true);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' .  $chaine_tableau  . '</pre>' ; exit(0);*/
        $T=json_decode($chaine_tableau,JSON_INVALID_UTF8_IGNORE);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $T[5] , true ) . '</pre>' ; exit(0);*/
        $time_end=microtime(true);
        $time=($time_end - $time_start) * 1000;
        /* echo "<br />delta json_decode= $time ms\n"; */
        
        if($T === false){

            return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
                        "ejson" => "ejson",
                        "erreur_conversion_$chaine_tableau_en_json" => true,
                        "__xst" => self::__xer,
                        "__xme" => __LINE__ . 'erreur de conversion de tableau',
                        "type" => 'rev',
                        "chaine_tableau" => $chaine_tableau,
                        "tableauEntree" => $tableauEntree,
                        "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
                        "autoriserCstDansRacine" => $autoriserCstDansRacine
                    )));

        }

        
        if($chaine_tableau_commentaires !== ''){

            $chaine_tableau_commentaires='[' . substr($chaine_tableau_commentaires,1) . ']';
            /*
              try{
              $tab_commentaire_et_fin_parentheses=JSON.parse( $chaine_tableau_commentaires );
              }catch(e){
              debugger;
              }
            */
            $tab_commentaire_et_fin_parentheses=json_decode($chaine_tableau_commentaires,JSON_INVALID_UTF8_IGNORE);
            /*
              Puis on ajoute les $commentaires 
              $tab_commentaire_et_fin_parentheses[$indice_tab_commentaire]=[$indice,$commentaire];
              $T[$indice][13]=$commentaire;
            */
            /* var rgx1=new RegExp( MON_LF , "g" );*/
            /* var rgx2=new RegExp( MON_CR , "g" );*/
            $l01=count($tab_commentaire_et_fin_parentheses);
            for( $i=0 ; $i < $l01 ; $i++ ){
                
                /*                $T[$tab_commentaire_et_fin_parentheses[$i][0]][13]=$tab_commentaire_et_fin_parentheses[$i][1].replace( rgx1 , "\n" ).replace( rgx2 , "\r" );*/
                $tab_commentaire_et_fin_parentheses[$i][1]=str_replace(MON_LF,"\n",$tab_commentaire_et_fin_parentheses[$i][1]);
                $tab_commentaire_et_fin_parentheses[$i][1]=str_replace(MON_CR,"\r",$tab_commentaire_et_fin_parentheses[$i][1]);
                $T[$tab_commentaire_et_fin_parentheses[$i][0]][13]=$tab_commentaire_et_fin_parentheses[$i][1];
            }

        }

        /*
          =====================================================================================================
          mise à jour de l'id du parent[7] et du nombre d'enfants[8]
          =====================================================================================================
        */
        $l01=count($T);
        for( $i=$l01 - 1 ; $i > 0 ; $i-- ){
            
            $k=$T[$i][3];
            for( $j=$i - 1 ; $j >= 0 ; $j-- ){
                
                
                if($T[$j][3] === $k - 1){

                    $T[$i][7]=$j;
                    $T[$j][8]++;
                    break;

                }

            }
        }
        /*
          =====================================================================================================
          numéro d'enfant + bidouille performances car on boucle souvent sur les enfants
          numenfant = $k
          en position 12 on met l'$indice de l'enfant suivant ou $l01 
          =====================================================================================================
        */
        $indice_enfant_precedent=0;
        for( $i=0 ; $i < $l01 ; $i++ ){
            
            $k=0;
            for( $j=$i + 1 ; $j < $l01 && $T[$j][3] > $T[$i][3] ; $j++ ){
                
                
                if($T[$j][7] === $T[$i][0]){

                    $k++;
                    $T[$j][9]=$k;
                    /*
                      pour le $dernier, on met $l01 à priori 
                      et on mettra la vraie valeur à la prochaine boucle
                    */
                    $T[$j][12]=$l01;
                    
                    if($k > 1){

                        $T[$indice_enfant_precedent][12]=$j;

                    }

                    $indice_enfant_precedent=$j;

                }

            }
        }
        /*
          =====================================================================================================
          profondeur des fonctions
          k=remonterAu$niveau
          l=$idParent
          =====================================================================================================
        */
        $niveau=0;
        $id_parent=0;
        for( $i=$l01 - 1 ; $i > 0 ; $i-- ){
            
            /* si c'est une constante */
            
            if($T[$i][2] === 'c'){

                $T[$i][10]=0;

            }

            
            if($T[$i][7] > 0){

                /* si l'élément a un parent */
                $niveau=$T[$i][3];
                $id_parent=$T[$i][7];
                /* pour chacun des $niveaux enfants */
                for( $j=1 ; $j <= $niveau ; $j++ ){
                    
                    
                    if($T[$id_parent][10] < $j){

                        /* on change la profondeur */
                        $T[$id_parent][10]=$j;

                    }

                    $id_parent=$T[$id_parent][7];
                }

            }

        }
        /*
          //pour la mesure des performances
          var endMicro = performance.now();
          var temps=parseInt((endMicro - startMicro) * 1000,10) / 1000;
          if($Temps >=0.2){
          console.log(' temps = '+temps +' pour T.length='+T.length);
          if(false && T.length<=5){
          console.log('T=',T);
          }
          }
        */
        return array( "__xst" => self::__xsu, "__xva" => $T);
    }
    /*
      =============================================================================================================
    */
    public function rev_vers_matrice($texte){
        $obj1=$this->txt_en_tableau($texte);
        $obj2=$this->tb_vers_matrice(
            $obj1[__xva],
             /*quitter si erreur de niveau*/ true,
             /*autoriser constantes*/ false
        );
        return array( __xst => $obj2[__xst], __xva => $obj2[__xva]);
    }
    /*
      =============================================================================================================
      return $this->empiler_erreur($this->formatter_une_erreur_rev(array(
      "__xst" => self::__xer,
      "ind" => $l01 - 1,
      "__xme" => __LINE__ . 'la racine ne peut pas contenir des constantes ',
      "type" => 'rev',
      "texte" => $texte,
      "chaine_tableau" => $chaine_tableau,
      "chaine_tableau_commentaires" => $chaine_tableau_commentaires,
      "tableauEntree" => $tableauEntree,
      "quitterSiErreur$niveau" => $quitter_si_erreur_niveau,
      "autoriserCstDansRacine" => $autoriserCstDansRacine
      )));
    */
    function formatter_une_erreur_rev($obj){
        /*# 
          exemple de donnée en entrée
          {
            type          : 'rev',
            __xst         : false,
            ind           : i,
            __xme         : '1839 il ne peut pas y avoir des retours à la ligne dans une chaine de type regex ',
            texte         : texte,
            chaine_tableau : chaine_tableau,
            chaine_tableau_commentaires:chaine_tableau_commentaires
            tableauEntree : tableauEntree,
            quitterSiErreurNiveau:quitterSiErreurNiveau,
            autoriserCstDansRacine:autoriserCstDansRacine
          }
        */
        $t='';
        $i=0;
        $j=0;
        $finGrasFait=false;
        $presDe='';
        $ligne=0;
        $message_ajoute='';
        $position=0;
        
        if(isset($obj['erreur_conversion_chaineTableau_en_json']) && $obj['erreur_conversion_chaineTableau_en_json'] === true){

            /*
              si il y a un problème avec le JSON.parse:
            */
            /*
              if(obj.ejson.message.indexOf( 'at position ' ) >= 0){
              position=obj.ejson.message.substr( obj.ejson.message.indexOf( 'at position ' ) + 12 );
              if(obj.ejson.message.indexOf( ' ' ) >= 0){
              position=parseInt( position.substr( 0 , obj.ejson.message.indexOf( ' ' ) ) , 10 );
              for( i=position ; i >= 0 && message_ajoute === '' ; i-- ){
              if(obj.chaine_tableau.substr( i , 1 ) === '['){
              for( j=i ; j < obj.chaine_tableau.length && message_ajoute === '' ; j++ ){
              if(obj.chaine_tableau.substr( j , 1 ) === ']'){
              message_ajoute='près de `' + obj.chaine_tableau.substr( i , (j - i) + 1 ) + '`';
              break;
              }
              }
              }
              }
              }
              }
            */
            return array( "__xst" => $obj['__xst'], "__xva" => '', "id" => $obj['ind'], "__xme" => $obj['__xme'] . ' ' . $message_ajoute);

        }

        $chaine_tableau='[' . $obj['chaine_tableau'] . ']';
        
        if(isset($obj['tableauEntree'])){

            
            if(isset($obj['ind'])){

                
                if($obj['ind'] > 50){

                    for( $i=$obj['ind'] - 50 ; $i <= $obj['ind'] + 50 && $i < count($obj['tableauEntree']) ; $i++ ){
                        
                        
                        if($i === $obj['ind'] - 5){

                            $presDe .= '<b>';

                        }

                        $presDe .= htmlentities($obj['tableauEntree'][$i][0],ENT_COMPAT,'UTF-8');
                        
                        if($i === $obj['ind'] + 5){

                            $presDe .= '</b>';
                            $finGrasFait=true;

                        }

                    }
                    
                    if(!$finGrasFait){

                        $presDe .= '</b>';

                    }


                }else{

                    $presDe='<b>';
                    for( $i=0 ; $i <= $obj['ind'] + 50 && $i < count($obj['tableauEntree']) ; $i++ ){
                        
                        $presDe .= htmlentities($obj['tableauEntree'][$i][0],ENT_COMPAT,'UTF-8');
                        
                        if($i === $obj['ind'] + 5){

                            $presDe .= '</b>';
                            $finGrasFait=true;

                        }

                    }
                    
                    if(!$finGrasFait){

                        $presDe .= '</b>';

                    }

                }

                $message_ajoute .= ' position caractère=' . $obj['ind'];
                $message_ajoute .= '<br />près de ----' . $presDe . '----<br />';
                $ligne=0;
                for( $i=$obj['ind'] ; $i >= 0 ; $i-- ){
                    
                    
                    if($obj['tableauEntree'][$i][0] === '\n'){

                        $ligne++;

                    }

                }

            }


        }

        $T=json_decode($chaine_tableau,true);
        return array(
            "__xst" => $obj['__xst'],
            "__xva" => $T,
            "id" => $obj['ind'],
            "__xme" => $obj['__xme'] . $message_ajoute,
            "ligne" => $ligne + 1
        );
    }
    /*
      =============================================================================================================
      met les valeurs dans la variable $globale_messages ( l og erreu r ) logerreur __m_rev1.empiler_erreur
      =============================================================================================================
    */
    function empiler_erreur($o){
        $a_retourner=array(
            "__xst" => isset($o['__xst']) ? $o['__xst'] : __xer,
            "__xme" => isset($o['__xme']) ? $o['__xme'] : null,
            "__xva" => isset($o['__xva']) ? $o['__xva'] : null,
            "masquee" => isset($o['masquee']) ? $o['masquee'] : false,
            "plage" => isset($o['plage']) ? $o['plage'] : null,
            "ligne" => isset($o['ligne']) ? $o['ligne'] : null
        );
        /*
          if($a_retourner['__xst'] === self::__xal){
          this.globale_messages['alarmes'].push( a_retourner );
          }else if(a_retourner.__xst === __xif){
          this.globale_messages['infos'].push( a_retourner );
          }else if(a_retourner.__xst === __xsu){
          this.globale_messages['succes'].push( a_retourner );
          }else{
          this.globale_messages['erreurs'].push( a_retourner );
          }
        */
        return $a_retourner;
    }
}
/*
  
  $z=new c_rev1();
  
  //$y=file_get_contents('gros_rev.txt');
  $y='toto(a,€,𤭢,👍,#())';
  
  
  
  if(strlen($y)<500){
  echo '-> '.var_export( $y , true ).'<br />';
  }
  $time_start = microtime(true);
  
  $x=$z->txt_en_tableau($y);
  
  $time_end = microtime(true);
  $time = ($time_end - $time_start)*1000;
  echo "<br />delta txt_en_tableau = $time ms\n"; 
  
  
  $time_start = microtime(true);
  
  $w=$z->tb_vers_matrice($x[__xva], /* quitter si erreur de niveau * / true, /* autoriser constantes * / true);
  
  $time_end = microtime(true);
  $time = ($time_end - $time_start)*1000;
  echo "<br />delta tb-vers_matrice = $time ms<br />"; 
  
  
  //echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $w[__xva],true  ) . '</pre>' ; exit(0);
  if(count($w[__xva][0])<50){
  $tt='<table border="1">';
  $tt .= '<tr>';
  for( $j=0 ; $j < count($w[__xva][0]) ; $j++ ){
  
  $tt .= '<td>' . $j . '</td>';
  }
  $tt .= '</tr>';
  for( $i=0 ; $i < count($w[__xva]) ; $i++ ){
  
  $tt .= '<tr>';
  for( $j=0 ; $j < count($w[__xva][$i]) ; $j++ ){
  
  $tt .= '<td>';
  $tt .= $w[__xva][$i][$j];
  $tt .= '</td>';
  }
  $tt .= '</tr>';
  }
  $tt .= '</table>';
  //echo $tt ;
  }
  echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ;
  
  $v=matrice_vers_source_rev1($w[__xva], /*$parentId* / 0, /*$retourLigne* / true, /*$debut* / 1);
  echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <br/><textarea rows="10" cols="30" style="border:1px red solid;">' . $v[__xva] . '</textarea>' ;
  exit(0);
*/