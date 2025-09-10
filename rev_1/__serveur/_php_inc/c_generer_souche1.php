<?php
class c_generer_souche1{
    private $sql0=null;
    /*
      =============================================================================================================
    */
    public function __construct(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_sql0.php');
        $this->sql0=new c_sql0(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
    */
    function page_editer1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $chi_id_basedd=0;
        for( $i=1 ; $i < count($mat) ; $i++ ){
            
            
            if($mat[$i][1] === 'c_generer_souche1.page_editer1'){

                for( $j=$i + 1 ; $j < count($mat) ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'chi_id_basedd' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_basedd=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'nom_de_la_table' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $nom_de_la_table=$mat[$j + 1][1];
                        

                    }

                }

            }

        }
        $o1='';
        $o1.='<h1>générer les souches sur '.$nom_de_la_table.'(' . $chi_id_basedd .')</h1>';
        $o1.='<div id="contenu_generer_les_souches"></div>';

        $cmd='';
        $cmd.='maj_interface1(
         charger_module1(
          chemin_module1("_js/c_souche_bdd1.js"),
          initialisation1(
           (chi_id_basedd,' . $chi_id_basedd . '),
           (nom_de_la_table,\'' . $nom_de_la_table . '\'),
           (module_js1,c_souche_bdd1.js),
           (nom_module1,c_souche_bdd1)
           (methode_initiale,init0)
          )
         )
        )';
        $donnees_retournees[__xva]['maj']=$cmd;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/