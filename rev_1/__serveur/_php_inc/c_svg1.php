<?php
class c_svg1{
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
            
            
            if($mat[$i][1] === 'c_svg1.page_editer1'){

                for( $j=$i + 1 ; $j < count($mat) ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'chi_id_basedd' && $mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        $chi_id_basedd=$mat[$j + 1][1];

                    }

                }

            }

        }
        /*
          $donnees_retournees[__x_signaux][__xal][] = 'chi_id_basedd='.$chi_id_basedd.'';
          $donnees_retournees[__x_signaux][__xal][] = 'chi_id_basedd='.$chi_id_basedd.' , <pre>'.var_export( $mat , true ).'</pre>';
        */
        $o1='<h1>édition de la base</h1>' . PHP_EOL;
        $o1 .= '<div id="div_svg1" style="background: url(&quot;data:image/svg+xml,%3Csvg xmlns=\\&quot;http://www.w3.org/2000/svg\\&quot; viewBox=\\&quot;0 0 10 10\\&quot;%3E%3Cpath d=\\&quot;M 0 0 l 10 10 l 0 -10 l -10 10 Z\\&quot; fill=\\&quot;black\\&quot; fill-opacity=\\&quot;.04\\&quot;/%3E%3C/svg%3E&quot;) 208px 261px / 10px;">' . PHP_EOL;
        $o1 .= '    <svg id="refZnDessin" transform="rotate(0 0 0)" viewBox="0 0 400 400" style="border: 0; position: relative; background: transparent; top: 0px; left: 0px; width: 400px; height: 400px;">' . PHP_EOL;
        $o1 .= '        <text id="message_dans_le_svg" x="10" y="20" style="font-size:16px;stroke:black;stroke-width:0.1;fill:black;font-family:Verdana;">Veuillez patienter s\'il vous plaît !</text>' . PHP_EOL;
        $o1 .= '    </svg>' . PHP_EOL;
        $o1 .= '</div>' . PHP_EOL;
        $o1 .= '<input type="texthidden" id="vv_donnees_travail" value="' . $chi_id_basedd . '" />' . PHP_EOL;
        $donnees_retournees[__xva]['maj']='' . 'maj_interface1(' . 'charger_module1(' . 'chemin_module1("_js/c_svg_bdd1.js"),' . 'initialisation1(' . '(chi_id_basedd,' . $chi_id_basedd . '),' . '(nom_de_la_div_contenant_le_svg,div_svg1),' . '(module_js1,c_svg_bdd1.js),' . '(nom_module1,c_svg_bdd1)' . '(id_text_area_contenant_les_id_des_bases,vv_donnees_travail)' . '(methode_initiale,init0)' . ')' . ')' . ')';
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_svg1.page_editer1(chi_id_basedd(' . $chi_id_basedd . '))';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/