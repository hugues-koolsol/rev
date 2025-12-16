<?php
$a=realpath(dirname(__RACINE_PGMS__,2));
require($a . DIRECTORY_SEPARATOR . 'phplib' . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php');
use PhpParser\Error;
use PhpParser\NodeDumper;
use PhpParser\ParserFactory;
class c_parse_php1{
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
    }
    /*
      =============================================================================================================
    */
    function ast_nicki1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( __LINE__ , true ) . '</pre>' ; exit(0);*/
        $parser=(new ParserFactory())->createForNewestSupportedVersion();
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . enti1(var_export( $donnees_recues , true )) . '</pre>' ; exit(0);*/
        try{
            $contenu=preg_replace('/\/\\*sql_' . 'inclure_deb\\*\/(.*?)\/\\*sql_' . 'inclure_fin\\*\//us','',$donnees_recues['__xva']['php_source']);
            $ast_nikic_de_php=$parser->parse($contenu);
            /*
              sans le JSON_INVALID_UTF8_IGNORE, le source
              $a = "\x80" ;
              retourne false
            */
            /* $donnees_retournees[__xsi][__xsu][]=' conversion nikic OK [' . __LINE__ . ']';*/
            $donnees_retournees[__xva]['ast_nikic_de_php']=json_encode($ast_nikic_de_php,JSON_INVALID_UTF8_IGNORE);
            $donnees_retournees[__xva]['options']=$donnees_recues['__xva']['options'];
            /* $donnees_retournees[__xac]='module1(nom("__js/ecran_rev_vers_php1"),fonctions(traite_astnikic1()))';*/
            $donnees_retournees[__xst]=__xsu;
        }catch(Error $error){
            $cmd='';
            $pos=strpos($error->getMessage(),'on line ');
            
            if($pos !== false
               && isset($donnees_recues['__xva']['options'])
               && isset($donnees_recues['__xva']['options']['zone_source'])
            ){

                $lig=(int)(substr($error->getMessage(),$pos + 8));
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $lig . var_export( substr($error->getMessage(),$pos+8) , true ) . '</pre>' ; exit(0);*/
                $cmd .= '<div';
                $cmd .= ' class="rev_bouton yy__0"';
                $cmd .= ' data-rev_click="';
                $cmd .= 'm1(n1(__fnt1),f1(placer_le_curseur_en_lig_col1(';
                $cmd .= ' zone_source(' . $donnees_recues['__xva']['options']['zone_source'] . '),';
                $cmd .= ' ligne(' . $lig . '),';
                $cmd .= ' colonne(0)';
                $cmd .= ')))';
                $cmd .= '" title="aller à la ligne" >lig_col[' . $lig . ',0]</div>';

            }

            $donnees_retournees[__xva]['options']=$donnees_recues['__xva']['options'];
            $donnees_retournees[__xsi][__xer][]=$cmd . $error->getMessage() . '[' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
        }
    }
}