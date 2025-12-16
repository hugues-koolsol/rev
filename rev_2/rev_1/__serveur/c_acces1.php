<?php
class c_acces1{
    private $sql0=null;
    private $moi='c_acces1';
    private $fonction_liste='liste1';
    /*
      =============================================================================================================
    */
    public function __construct(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if(!isset($_SESSION[_CA_]) || $_SESSION[_CA_]['chi_id_utilisateur'] === 0){

            echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export(__LINE__,true) . '</pre>' ;
            exit(0);

        }

        require_once(__RACINE_PGMS__ . 'c__sql0.php');
        $this->sql0=new c__sql0($donnees_retournees,$mat,$donnees_recues);
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function construit_menu1($id_interne_parent,&$le_tableau_du_menu,$niveau,$parent_est_select=false){
        /* echo __FILE__ . ' ' . __LINE__ . ' $le_tableau_du_menu = <pre>' . htmlentities( var_export( $le_tableau_du_menu , true ) ) . '</pre>' ; exit(0);*/
        $contenu_menu1='';
        foreach($le_tableau_du_menu as $k1 => $v1){
            
            if($v1['id_interne_parent'] === $id_interne_parent){

                /*
                  
                  
                */
                
                if($v1['contient_des_enfants'] === 0){

                    
                    if($parent_est_select === true){

                        $bb='';
                        
                        if(isset($v1['attributs']['data-chp_nom_source']) && strpos($v1['attributs']['data-chp_nom_source'],'.js') !== false){

                            $la_classe='rev_bouton';
                            
                            if(strpos($v1['contenu'],'<svg') !== false){

                                $la_classe='rev_b_svg';

                            }

                            $bb .= PHP_EOL . '    <li><div id="menu_' . $v1['id_interne'] . '"  class="' . $la_classe . '" data-rev_click="';
                            $bb .= 'm1(n1(' . str_replace('.js','',$v1['attributs']['data-chp_nom_source']) . ')';
                            $bb .= ',f1(' . $v1['attributs']['data-chp_methode_menu'];
                            
                            if($v1['attributs']['data-cht_initialisation_menu'] === 'null'){

                                $bb .= '()';

                            }else{

                                $bb .= '(';
                                $bb .= $v1['attributs']['data-cht_initialisation_menu'];
                                $bb .= ')';
                            }

                            
                            $bb .= '))';
                            $bb .= '"';
                            $bb .= '>' . str_replace('height:25px;width:25px;','',$v1['contenu']) . '</div></li>';
                            $xx=var_export($bb,true);
                            
                            if(substr($xx,0,1) === "\r"){

                                $xx=substr($xx,1);

                            }

                            
                            if(substr($xx,0,1) === "\n"){

                                $xx=substr($xx,1);

                            }

                            
                            if($v1['attributs']['data-cht_condition_menu'] === ''){

                                $contenu_menu1 .= '$le_sous_menu1_' . ($niveau - 1) . '.=' . $xx . '.PHP_EOL;' . PHP_EOL;

                            }else{

                                $contenu_menu1 .= '/*' . PHP_EOL;
                                $contenu_menu1 .= '  ==================' . PHP_EOL;
                                $contenu_menu1 .= '*/' . PHP_EOL;
                                $tt=str_replace('<?' . 'php','',$v1['attributs']['data-cht_condition_php_menu']);
                                $tt=substr($tt,0,-1);
                                
                                if(substr($tt,0,1) === "\r"){

                                    $tt=substr($tt,1);

                                }

                                
                                if(substr($tt,0,1) === "\n"){

                                    $tt=substr($tt,1);

                                }

                                $contenu_menu1 .= 'if(' . $tt . '){' . PHP_EOL;
                                $contenu_menu1 .= '    $le_sous_menu1_' . ($niveau - 1) . '.=' . $xx . '.PHP_EOL;' . PHP_EOL;
                                $contenu_menu1 .= '}' . PHP_EOL;
                            }


                        }


                    }else{

                        
                        if(isset($v1['attributs']['data-liste_des_menus']) && $v1['attributs']['data-liste_des_menus'] === '1'){

                            /*
                              c'est une branche qui n'a pas d'enfants
                            */

                        }else{

                            
                            if(isset($v1['attributs']['data-chp_nom_source']) && strpos($v1['attributs']['data-chp_nom_source'],'.js') !== false){

                                $la_classe='rev_bouton';
                                
                                if(strpos($v1['contenu'],'<svg') !== false){

                                    $la_classe='rev_b_svg';

                                }

                                $bb='';
                                $bb .= '<li><div id="menu_' . $v1['id_interne'] . '"';
                                $bb .= ' data-id_menu="' . $v1['attributs']['data-chi_id_menu'] . '"';
                                $bb .= ' class="' . $la_classe . '"';
                                $bb .= ' data-rev_click="';
                                $bb .= 'm1(n1(' . str_replace('.js','',$v1['attributs']['data-chp_nom_source']) . ')';
                                $bb .= ',f1(' . $v1['attributs']['data-chp_methode_menu'];
                                
                                if($v1['attributs']['data-cht_initialisation_menu'] === 'null'){

                                    $bb .= '()';

                                }else{

                                    $bb .= '(';
                                    $bb .= $v1['attributs']['data-cht_initialisation_menu'];
                                    $bb .= ')';
                                }

                                
                                $bb .= '))';
                                /*
                                  $bb .= 'indice_menu(' . $v1['attributs']['data-chi_id_menu'] . ')';
                                  $bb .= 'id_interne(' . $v1['id_interne'] . ')';
                                */
                                $bb .= '"';
                                $bb .= ' title="' . $v1['attributs']['data-chp_titre_menu'] . '"';
                                $bb .= '>' . str_replace('height:25px;width:25px;','',str_replace('class="rev_bouton"','',$v1['contenu'])) . '</div></li>';
                                $xx=var_export($bb,true);
                                
                                if(substr($xx,0,1) === "\r"){

                                    $xx=substr($xx,1);

                                }

                                
                                if(substr($xx,0,1) === "\n"){

                                    $xx=substr($xx,1);

                                }

                                $nom_de_la_variable='$les_menu1';
                                
                                if($niveau >= 1){

                                    $nom_de_la_variable='$le_sous_menu1_' . ($niveau - 1);

                                }

                                
                                if($v1['attributs']['data-cht_condition_menu'] === ''){

                                    $contenu_menu1 .= '' . $nom_de_la_variable . '.=' . $xx . '.PHP_EOL;' . PHP_EOL;

                                }else{

                                    $contenu_menu1 .= '/*' . PHP_EOL;
                                    $contenu_menu1 .= '  ==================' . PHP_EOL;
                                    $contenu_menu1 .= '*/' . PHP_EOL;
                                    $tt=str_replace('<?' . 'php','',$v1['attributs']['data-cht_condition_php_menu']);
                                    $tt=substr($tt,0,-1);
                                    
                                    if(substr($tt,0,1) === "\n"){

                                        $tt=substr($tt,1);

                                    }

                                    $contenu_menu1 .= 'if(' . $tt . '){' . PHP_EOL;
                                    $contenu_menu1 .= '   ' . $nom_de_la_variable . '.=' . $xx . '.PHP_EOL;' . PHP_EOL;
                                    $contenu_menu1 .= '}' . PHP_EOL;
                                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . enti1(var_export( $contenu_menu1 , true )) . '</pre>' ; exit(0);*/
                                }


                            }

                        }

                    }


                }else{

                    $bb='';
                    $contenu_menu1 .= '/*' . PHP_EOL;
                    $contenu_menu1 .= '  ==================' . PHP_EOL;
                    $contenu_menu1 .= '*/' . PHP_EOL;
                    $contenu_menu1 .= '$le_sous_menu1_' . $niveau . '=\'\';' . PHP_EOL;
                    $contenu_menu1 .= $this->construit_menu1($v1['id_interne'],$le_tableau_du_menu,$niveau + 1,true);
                    $contenu_menu1 .= '/* niveau ' . $niveau . ' */' . PHP_EOL;
                    $nom_de_la_variable='$les_menu1';
                    
                    if($niveau >= 1){

                        $nom_de_la_variable='$le_sous_menu1_' . ($niveau - 1);

                    }

                    $contenu_menu1 .= 'if($le_sous_menu1_' . $niveau . '!==\'\'){' . PHP_EOL;
                    $contenu_menu1 .= '    ' . $nom_de_la_variable . '.=\'<li><div data-libelle_noeud_menu1="' . $niveau . '">' . $v1['contenu'] . '</div>\';' . PHP_EOL;
                    $bb .= '<ul id="menu_' . $v1['id_interne'] . '"';
                    $bb .= ' data-id_menu="' . $v1['id_interne'] . '"';
                    $bb .= '>' . PHP_EOL;
                    $contenu_menu1 .= '    ' . $nom_de_la_variable . '.=' . var_export($bb,true) . ';' . PHP_EOL;
                    $contenu_menu1 .= '    ' . $nom_de_la_variable . '.=$le_sous_menu1_' . $niveau . '.PHP_EOL;' . PHP_EOL;
                    $bb='';
                    $bb .= '</ul>';
                    $contenu_menu1 .= '    ' . $nom_de_la_variable . '.=' . var_export($bb,true) . '.PHP_EOL;' . PHP_EOL;
                    $contenu_menu1 .= '    ' . $nom_de_la_variable . '.=\'</li>\'.PHP_EOL;' . PHP_EOL;
                    $contenu_menu1 .= '}' . PHP_EOL;
                }


            }

        }
        return $contenu_menu1;
    }
    /*
      =============================================================================================================
    */
    function produire_le_menu(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_acces=$donnees_recues[__xva]['chi_id_acces'];
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt136[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        $le_contenu_du_menu='';
        $cht_parametres_acces=$tt136[__xva][0]['T0.cht_parametres_acces'];
        
        if(is_null($cht_parametres_acces)){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }else{

            $cht_parametres_acces=json_decode($cht_parametres_acces,true);
        }

        
        if(isset($cht_parametres_acces['le_json_du_menu'])){

            $le_tableau_du_menu=json_decode($cht_parametres_acces['le_json_du_menu'],true);

        }

        $menus1=$this->construit_menu1(0,$le_tableau_du_menu,0);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $_SESSION[_CA_]['chemin_du_projet'] , true ) . '</pre>' ; exit(0); */
        $fichier1=$GLOBALS['chemin_de_la_racine'] . '____menus1_acces_' . $chi_id_acces . '_.php';
        $contenu_fichier1='';
        $contenu_fichier1 .= '<?' . 'php' . PHP_EOL;
        $contenu_fichier1 .= '$les_menu1=\'\';' . PHP_EOL;
        
        if($menus1 === ''){


        }else{

            /* $contenu_fichier1 .= '$les_menu1=\'<ul id="menu_1_">\';' . PHP_EOL;*/
            $contenu_fichier1 .= $menus1 . PHP_EOL;
            $contenu_fichier1 .= 'if($les_menu1!==\'\'){' . PHP_EOL;
            $contenu_fichier1 .= '    $les_menu1=\'<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="menu_pour_acces_' . $chi_id_acces . '_">\'.$les_menu1.\'</ul>\';' . PHP_EOL;
            $contenu_fichier1 .= '}' . PHP_EOL;
            $contenu_fichier1 .= '' . PHP_EOL;
            /* $contenu_fichier1 .= PHP_EOL . '$les_menu1.=\'</ul>\';' . PHP_EOL;*/
        }

        
        if(file_put_contents($fichier1,$contenu_fichier1) === false){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

    }
    /*
      =============================================================================================================
    */
    function enregister_le_menu_de_l_acces2(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        
        if($_SESSION[_CA_]['chi_id_utilisateur'] === 1){

            
            if($donnees_recues[__xva]['chi_id_acces'] > 2){

                $donnees_retournees[__xsi][__xer][]=' Le développeur ne peut que modifier son menu ainsi que celui de l\'admin [' . __LINE__ . ']';
                return;

            }


        }else if($_SESSION[_CA_]['chi_id_utilisateur'] === 2){

            
            if($donnees_recues[__xva]['chi_id_acces'] <= 2){

                $donnees_retournees[__xsi][__xer][]='l\'admin peut modifier les menus >2 [' . __LINE__ . ']';
                return;

            }


        }else{

            $donnees_retournees[__xsi][__xer][]='seuls l\'administrateur et le développeur peuvent modifier un menu [' . __LINE__ . ']';
            return;
        }

        $le_json=$donnees_recues[__xva]['le_json'];
        $le_html=$donnees_recues[__xva]['le_html'];
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt136[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        
        if(is_null($tt136[__xva][0]['T0.cht_parametres_acces'])){

            $nouveau=array(/**/
                'le_json_du_menu' => $le_json,
                'le_html_ul_li_du_menu' => $le_html
            );

        }else{

            $nouveau=json_decode($tt136[__xva][0]['T0.cht_parametres_acces'],true);
            $nouveau['le_json_du_menu']=$le_json;
            $nouveau['le_html_ul_li_du_menu']=$le_html;
        }

        $tt154=/*sql_inclure_deb*/
            /* sql_154()
            UPDATE b1.tbl_acces SET 
               `cht_parametres_acces` = :n_cht_parametres_acces
            WHERE `chi_id_acces` = :c_chi_id_acces ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_154()*/ 154,
            array(/**/
                'c_chi_id_acces' => $donnees_recues[__xva]['chi_id_acces'],
                'n_cht_parametres_acces' => json_encode($nouveau,JSON_FORCE_OBJECT)
            ),
            $donnees_retournees
        );
        
        if($tt154[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        $donnees_retournees['__x_action']='maj_interface2(fermer_sous_fenetre1(c_acces1.page_liste_des_acces1()))';
        $donnees_retournees[__xst]=__xsu;
        $this->produire_le_menu($mat,$d,$donnees_retournees,$donnees_recues);
    }
    /*
      =============================================================================================================
    */
    function construit_html_du_menu($les_elements_du_menu_actuel,$id_interne_parent){
        $t='';
        foreach($les_elements_du_menu_actuel as $k1 => $v1){
            
            if($v1['id_interne_parent'] === $id_interne_parent){

                
                if(!isset($v1['attributs']['data-liste_des_menus'])){

                    /*
                      if(strpos($v1['contenu'],'projet')!==false){
                      echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $v1 , true ) . '</pre>' ; exit(0);
                      }
                    */
                    
                    if(isset($v1['attributs']['data-cht_libelle_menu'])){

                        $t .= '<li';
                        $t .= ' data-chi_id_source="' . $v1['attributs']['data-chi_id_source'] . '"';
                        $t .= ' data-chp_nom_source="' . $v1['attributs']['data-chp_nom_source'] . '"';
                        $t .= ' data-chp_methode_menu="' . $v1['attributs']['data-chp_methode_menu'] . '"';
                        $t .= ' data-chi_id_menu="' . $v1['attributs']['data-chi_id_menu'] . '"';
                        $t .= ' data-cht_initialisation_menu="' . $v1['attributs']['data-cht_initialisation_menu'] . '"';
                        $t .= ' data-chp_titre_menu="' . $v1['attributs']['data-chp_titre_menu'] . '"';
                        $t .= ' data-cht_condition_php_menu="' . $v1['attributs']['data-cht_condition_php_menu'] . '"';
                        $t .= ' data-cht_condition_menu="' . $v1['attributs']['data-cht_condition_menu'] . '"';
                        $t .= '>' . str_replace('height:25px;width:25px;','',$v1['attributs']['data-cht_libelle_menu']);
                        $t .= '</li>';

                    }


                }else{

                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $v1 , true ) . '</pre>' ; exit(0);*/
                    $t .= '<li';
                    $t .= ' data-liste_des_menus="1"';
                    $t .= '>' . $v1['contenu'];
                    $t .= '<ul>';
                    $t .= $this->construit_html_du_menu($les_elements_du_menu_actuel,$v1['id_interne']);
                    $t .= '</ul>';
                    $t .= '</li>';
                }


            }

        }
        
        if($id_interne_parent === 0){

            /* echo __FILE__ . ' ' . __LINE__ . ' $t = <pre>' . var_export( $t , true ) . '</pre>' ; exit(0);*/

        }

        return $t;
    }
    /*
      =============================================================================================================
    */
    function obtenir_les_menus_d_un_acces(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $chi_id_acces=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_acces' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_acces=(int)($mat[$i + 1][1]);

            }

        }
        
        if($chi_id_acces === 0){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            return;

        }

        $tt153=/*sql_inclure_deb*/
            /* sql_153()
            SELECT 
            `T1`.`chx_source_autorisation` , `T0`.`chp_titre_menu` , `T0`.`chp_methode_menu` , `T3`.`chp_nom_source` , `T0`.`cht_libelle_menu` , 
            `T0`.`cht_initialisation_menu` , `T0`.`chi_id_menu` , `T0`.`cht_condition_php_menu` , `T0`.`cht_condition_menu`
             FROM b1.tbl_menus T0 , 
                  b1.tbl_autorisations T1
             LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
            
             LEFT JOIN b1.tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
            
            WHERE ( / *** *** / `T2`.`chi_id_acces` = :T2_chi_id_acces
               AND T1.chi_id_autorisation = T0.chx_autorisation_menu)
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(153,array( 'T2_chi_id_acces' => $chi_id_acces),$donnees_retournees);
        
        if($tt153[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            return;

        }

        $liste_des_menus=array();
        foreach($tt153[__xva] as $k1 => $v1){
            $liste_des_menus[]=array(
                'chi_id_source' => $v1['T1.chx_source_autorisation'],
                'cht_libelle_menu' => $v1['T0.cht_libelle_menu'],
                'chp_titre_menu' => $v1['T0.chp_titre_menu'],
                'chp_methode_menu' => $v1['T0.chp_methode_menu'],
                'chp_nom_source' => $v1['T3.chp_nom_source'],
                'chi_id_menu' => $v1['T0.chi_id_menu'],
                'cht_initialisation_menu' => $v1['T0.cht_initialisation_menu'],
                'cht_condition_menu' => $v1['T0.cht_condition_menu'],
                'cht_condition_php_menu' => $v1['T0.cht_condition_php_menu']
            );
        }
        /* echo __FILE__ . ' ' . __LINE__ . ' $liste_des_menus = <pre>' . var_export( $liste_des_menus , true ) . '</pre>' ; exit(0);*/
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $chi_id_acces
            ),
            $donnees_retournees
        );
        
        if($tt136[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=' [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xer;
            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt136[__xva] = <pre>' . htmlentities( var_export( $tt136[__xva] , true ) ). '</pre>' ; exit(0);*/
        $les_elements_du_menu_actuel=array();
        
        if(is_null($tt136[__xva][0]['T0.cht_parametres_acces'])){

            $cht_parametres_acces=array();

        }else{

            $nouveau=json_decode($tt136[__xva][0]['T0.cht_parametres_acces'],true);
            /* echo __FILE__ . ' ' . __LINE__ . ' $nouveau = <pre>' . htmlentities( var_export( $nouveau , true ) ) . '</pre>' ; exit(0);*/
            
            if(isset($nouveau['le_html_ul_li_du_menu'])){

                $cht_parametres_acces=$nouveau['le_html_ul_li_du_menu'];
                /* echo __FILE__ . ' ' . __LINE__ . ' $cht_parametres_acces = <pre>' . htmlentities( var_export( $cht_parametres_acces , true ) ) . '</pre>' ; exit(0);*/

            }else{

                $cht_parametres_acces=array();
            }

            
            if(isset($nouveau['le_json_du_menu'])){

                $les_elements_du_menu_actuel=json_decode($nouveau['le_json_du_menu'],true);
                /* echo __FILE__ . ' ' . __LINE__ . ' $les_elements_du_menu_actuel = <pre>' . htmlentities( var_export( $les_elements_du_menu_actuel , true )) . '</pre>' ; exit(0);*/

            }else{

                echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export(__LINE__,true) . '</pre>' ;
                exit(0);
            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $liste_des_menus = <pre>' . var_export( $liste_des_menus , true ) . '</pre>' ; exit(0);*/
        /*
          1°] on vérifie que $les_elements_du_menu_actuel ne contient que des éléments de $liste_des_menus
        */
        foreach($les_elements_du_menu_actuel as $k1 => $v1){
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $v1 , true ) . '</pre>' ; exit(0);*/
            
            if(!isset($v1['attributs']['data-liste_des_menus'])){

                /*
                  si ce n'est pas un dossier
                */
                $trouve=false;
                /* echo __FILE__ . ' ' . __LINE__ . ' $liste_des_menus = <pre>' . htmlentities( var_export( $liste_des_menus , true )) . '</pre>' ; exit(0);*/
                foreach($liste_des_menus as $k2 => $v2){
                    /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $v1['attributs']['data-chi_id_menu'] , true ) . '</pre>' ; exit(0);*/
                    
                    if($v1['attributs']['data-chi_id_menu'] == $v2['chi_id_menu']){

                        /*#
                          if(strpos($v2['cht_libelle_menu'],'projet')!==false){
                             echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $v2['cht_libelle_menu'] , true ) . '</pre>' ; exit(0);
                          }
                        */
                        /* echo __FILE__ . ' ' . __LINE__ . ' $v1 = <pre>' . var_export( $v1['attributs']['data-chi_id_menu'] , true ) . '</pre> <pre>' . var_export( $v2 , true ) . '</pre>' ; exit(0);*/
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-cht_libelle_menu']=$v2['cht_libelle_menu'];
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-chp_titre_menu']=$v2['chp_titre_menu'];
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-cht_initialisation_menu']=$v2['cht_initialisation_menu'];
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-chp_methode_menu']=$v2['chp_methode_menu'];
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-chp_nom_source']=$v2['chp_nom_source'];
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-chi_id_source']=$v2['chi_id_source'];
                        /*#
                          if($v2['cht_libelle_menu']==='tâches'){
                              echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $v2['cht_condition_menu'] , true ) . '</pre>' ; exit(0);
                          }
                        */
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-cht_condition_php_menu']=$v2['cht_condition_php_menu'];
                        $les_elements_du_menu_actuel[$k1]['attributs']['data-cht_condition_menu']=$v2['cht_condition_menu'];
                        $trouve=true;
                        break;

                    }

                }
                
                if($trouve === false){

                    /*afr*/
                    /*
                      echo __FILE__ . ' ' . __LINE__ . 'NON TROUVE $k1='.$k1.' dans $les_elements_du_menu_actuel $v1 = <pre>' . htmlentities(var_export($v1,true)) . '</pre>' ;
                      exit(0);
                    */

                }


            }

        }
        foreach($liste_des_menus as $k1 => $v1){
            $trouve=false;
            foreach($les_elements_du_menu_actuel as $k2 => $v2){
                
                if(isset($v2['attributs']['data-chi_id_menu']) && $v2['attributs']['data-chi_id_menu'] == $v1['chi_id_menu']){

                    $trouve=true;
                    break;

                }

            }
            
            if($trouve === false){

                $id_interne=count($les_elements_du_menu_actuel);
                $les_elements_du_menu_actuel[]=array(
                    'id_interne' => $id_interne,
                    'id_interne_parent' => 0,
                    'replie' => 0,
                    'contient_des_enfants' => 0,
                    'contenu' => $v1['cht_libelle_menu'],
                    'attributs' => array(
                            'data-chi_id_source' => $v1['chi_id_source'],
                            'data-chp_nom_source' => $v1['chp_nom_source'],
                            'data-chp_methode_menu' => $v1['chp_methode_menu'],
                            'data-chi_id_menu' => $v1['chi_id_menu'],
                            'data-cht_initialisation_menu' => $v1['cht_initialisation_menu'],
                            'data-chp_titre_menu' => $v1['chp_titre_menu'],
                            'data-cht_libelle_menu' => $v1['cht_libelle_menu'],
                            'data-cht_condition_menu' => $v1['cht_condition_menu'],
                            'data-cht_condition_php_menu' => $v1['cht_condition_php_menu']
                        )
                );

            }

        }
        $le_nouveau_html=$this->construit_html_du_menu($les_elements_du_menu_actuel,0);
        $donnees_retournees[__xva]['liste_des_menus']=$liste_des_menus;
        /* $donnees_retournees[__xva]['chi_id_acces']=$donnees_recues[__xva]['chi_id_acces'];*/
        $donnees_retournees[__xva]['cht_parametres_acces']=$cht_parametres_acces;
        $donnees_retournees[__xva]['le_nouveau_html']=$le_nouveau_html;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function actions_apres_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$xva_avant){
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_et_tests_avant_modifier(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form,&$__xva){
        
        if($form['chi_id_acces'] === 1 && !($form['chx_groupe_acces'] === 1 && $form['chx_metier_acces'] === 1)){

            $donnees_retournees[__xsi][__xer][]='pour l\'accès 1 le groupe doit être 1 et le metier doit être 1 [' . __LINE__ . ']';
            return array( __xst => __xer);

        }

        
        if($form['chi_id_acces'] === 2 && !($form['chx_groupe_acces'] === 2 && $form['chx_metier_acces'] === 2)){

            $donnees_retournees[__xsi][__xer][]='pour l\'accès 2 le groupe doit être 2 et le metier doit être 2 [' . __LINE__ . ']';
            return array( __xst => __xer);

        }

        
        if($form['chi_id_acces'] > 2 && ($form['chx_groupe_acces'] <= 2 || $form['chx_metier_acces'] <= 2)){

            $donnees_retournees[__xsi][__xer][]='pour un accès >2 le groupe et le métier ne peuvent pas être 1 ou 2 [' . __LINE__ . ']';
            return array( __xst => __xer);

        }

        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function test_avant_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function actions_apres_supprimer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$__xva){
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function tests_avant_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,&$form){
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function action_apres_creer(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$nouvel_id,&$form){
        return array( __xst => __xsu);
    }
    /*
      =============================================================================================================
    */
    function modifier1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* conversion des données numériques début */
        $form['chi_id_acces']=is_null($form['chi_id_acces']) ? null : (int)($form['chi_id_acces']);
        $form['chx_groupe_acces']=is_null($form['chx_groupe_acces']) ? null : (int)($form['chx_groupe_acces']);
        $form['chx_metier_acces']=is_null($form['chx_metier_acces']) ? null : (int)($form['chx_metier_acces']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_acces']) || $form['chp_nom_acces'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_groupe_acces']) || $form['chx_groupe_acces'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "groupe" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_metier_acces']) || $form['chx_metier_acces'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "metier" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        /*#
                                                    Si l'utilisateur courant est ... 
                                                       il peut gérer le menu pour l'acces(chi_id)
          dans le projet(rev), utilisateur courant => dev(1) admin(2) autres 
                 1/2              dev(1)            =>  1       1        0
                 1/2              adm(2)            =>  0       0        1
                 n                dev(1)            =>  0       1        0
                 n                adm(2)            =>  0       0        1
        */
        $projet_1_ou_2=false;
        
        if(substr(_CA_,-7) === '_rev_1_' || substr(_CA_,-7) === '_rev_2_'){

            $projet_1_ou_2=true;

        }

        $boutons_activés=false;
        
        if($projet_1_ou_2 === true
           && $_SESSION[_CA_]['chi_id_utilisateur'] === 1
           && ($form['chi_id_acces'] === 1
               || elem['chi_id_acces'] === 2)
        ){

            $boutons_activés=true;

        }else if($projet_1_ou_2 === true && $_SESSION[_CA_]['chi_id_utilisateur'] === 2 && $form['chi_id_acces'] > 2){

            $boutons_activés=true;

        }else if($projet_1_ou_2 === false && $_SESSION[_CA_]['chi_id_utilisateur'] === 1 && $form['chi_id_acces'] === 2){

            $boutons_activés=true;

        }else if($projet_1_ou_2 === false && $_SESSION[_CA_]['chi_id_utilisateur'] === 2 && $form['chi_id_acces'] > 2){

            $boutons_activés=true;
        }

        
        if($boutons_activés === false){

            $donnees_retournees[__xsi][__xer][]='la combinaison projet/utilisateur/accès ne convient pas [' . __LINE__ . ']';
            return;

        }

        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $form['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt136[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xal][]=__LINE__ . ' aucune modification effectuée';
            return;

        }

        
        if($tt136[__xst] === __xsu && count($tt136[__xva]) === 1){

            $__actions_et_tests_avant_modifier=$this->actions_et_tests_avant_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt136[__xva][0]);
            
            if($__actions_et_tests_avant_modifier[__xst] !== __xsu){

                return;

            }

            $tt138=/*sql_inclure_deb*/
                /* sql_138()
                UPDATE b1.tbl_acces SET 
                   `chp_nom_acces` = :n_chp_nom_acces , 
                   `chx_groupe_acces` = :n_chx_groupe_acces , 
                   `chx_metier_acces` = :n_chx_metier_acces
                WHERE `chi_id_acces` = :c_chi_id_acces ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_138()*/ 138,
                array(
                    /**/
                    'c_chi_id_acces' => $form['chi_id_acces'],
                    'n_chp_nom_acces' => $form['chp_nom_acces'],
                    'n_chx_groupe_acces' => $form['chx_groupe_acces'],
                    'n_chx_metier_acces' => $form['chx_metier_acces']
                ),
                $donnees_retournees
            );
            
            if($tt138[__xst] !== __xsu){

                return;

            }

            $this->actions_apres_modifier($mat,$d,$donnees_retournees,$donnees_recues,$form,$tt136[__xva][0]);
            
            if($retour_a_la_liste === true){

                
                if(isset($form['__mat_liste_si_ok'])){

                    $mat1=json_decode($form['__mat_liste_si_ok'],true);
                    $d=1;
                    $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

                }

                return;

            }

            $tt136=/*sql_inclure_deb*/
                /* sql_136()
                SELECT 
                `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
                `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
                 FROM b1.tbl_acces T0
                 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
                
                 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
                
                WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_136()*/ 136,
                array(/**/
                    'T0_chi_id_acces' => $form['chi_id_acces']
                ),
                $donnees_retournees
            );
            $donnees_retournees[__xva]['page_modification1']=$tt136;

        }else{

            $donnees_retournees[__xva]['page_modification1']=$tt136;
        }

        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_duplication1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_acces=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_acces)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_acces'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_acces=(int)($mat[$i + 1][1]);

                }

            }

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_acces , true ) . '</pre>' ; exit(0);*/
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $chi_id_acces
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt136 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_duplication1']=$tt136;
        /* $donnees_retournees[__xac]='pm1(m1(n1('.$this->moi.'),f1(page_duplication1(chi_id_acces('.$chi_id_acces.')))))';*/
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function page_modification1(&$mat,&$d,&$donnees_retournees,&$donnees_recues,$chi_id_acces=null){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = '.$d.' <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        
        if(is_null($chi_id_acces)){

            $l01=count($mat);
            for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
                
                
                if($mat[$i][1] === 'chi_id_acces'
                   && $mat[$i][2] === 'f'
                   && $mat[$i][8] === 1
                   && $mat[$i + 1][2] === 'c'
                   && $mat[$i + 1][4] === 0
                ){

                    $chi_id_acces=(int)($mat[$i + 1][1]);

                }

            }

        }else{

            $donnees_retournees[__xac]='pm1(m1(n1(' . $this->moi . '),f1(page_modification1(chi_id_acces(' . $chi_id_acces . ')))))';
        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_acces , true ) . '</pre>' ; exit(0);*/
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $chi_id_acces
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt136 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_modification1']=$tt136;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* fonctions_spéciales1(ne_pas_supprimer_id_un(1)) */
        
        if($form['chi_id_acces'] === 1){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $form['chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt136[__xst] !== __xsu){

            $donnees_retournees[__xsi][__xer][]=__METHOD__ . ' [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_supprimer=$this->test_avant_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt136[__xva][0]);
        
        if($__tests_avant_supprimer[__xst] !== __xsu){

            return;

        }

        $tt139=/*sql_inclure_deb*/
            /* sql_139()
            DELETE FROM b1.tbl_acces
            WHERE `chi_id_acces` = :chi_id_acces ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_139()*/ 139,
            array(/**/
                'chi_id_acces' => $tt136[__xva][0]['T0.chi_id_acces']
            ),
            $donnees_retournees
        );
        
        if($tt139[__xst] !== __xsu){

            return;

        }

        $__actions_apres_supprimer=$this->actions_apres_supprimer($mat,$d,$donnees_retournees,$donnees_recues,$tt136[__xva][0]);
        
        if(isset($form['__mat_liste_si_ok'])){

            $mat1=json_decode($form['__mat_liste_si_ok'],true);
            $d=1;
            $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

        }

    }
    /*
      =============================================================================================================
    */
    function page_confirmation_supprimer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $chi_id_acces=0;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_acces'
               && $mat[$i][2] === 'f'
               && $mat[$i][8] === 1
               && $mat[$i + 1][2] === 'c'
               && $mat[$i + 1][4] === 0
            ){

                $chi_id_acces=(int)($mat[$i + 1][1]);

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $chi_id_acces , true ) . '</pre>' ; exit(0);*/
        $tt136=/*sql_inclure_deb*/
            /* sql_136()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T0`.`cht_parametres_acces` , 
            `T1`.`chp_nom_groupe` , `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE `T0`.`chi_id_acces` = :T0_chi_id_acces
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_136()*/ 136,
            array(/**/
                'T0_chi_id_acces' => $chi_id_acces
            ),
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt136 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['page_confirmation_supprimer1']=$tt136;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function creer1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $d . var_export( $donnees_recues , true ) . '</pre>' ; exit(0);*/
        $retour_a_la_liste=false;
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'retour_a_la_liste' && $mat[$i][2] === 'f'){

                $retour_a_la_liste=true;

            }

        }
        $nom_formulaire=$donnees_recues[__xva]['__co1'];
        $form=$donnees_recues[__xva][__fo1][$nom_formulaire];
        /* conversion des données numériques début */
        $form['chx_groupe_acces']=is_null($form['chx_groupe_acces'])
           || $form['chx_groupe_acces'] === '' ? null : (int)($form['chx_groupe_acces']);
        $form['chx_metier_acces']=is_null($form['chx_metier_acces'])
           || $form['chx_metier_acces'] === '' ? null : (int)($form['chx_metier_acces']);
        /* conversion des données numériques fin */
        
        if(is_null($form['chp_nom_acces']) || $form['chp_nom_acces'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "nom" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_groupe_acces']) || $form['chx_groupe_acces'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "groupe" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        
        if(is_null($form['chx_metier_acces']) || $form['chx_metier_acces'] === ''){

            $donnees_retournees[__xsi][__xer][]='la valeur pour "metier" doit être renseigné [' . __LINE__ . ']';
            return;

        }

        $__tests_avant_creer=$this->tests_avant_creer($mat,$d,$donnees_retournees,$donnees_recues,$form);
        
        if($__tests_avant_creer[__xst] !== __xsu){

            return;

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $retour_a_la_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_sql=array( array(/**/
                    'chp_nom_acces' => $form['chp_nom_acces'],
                    'chx_groupe_acces' => $form['chx_groupe_acces'],
                    'chx_metier_acces' => $form['chx_metier_acces']
                ));
        /* echo __FILE__ . ' ' . __LINE__ . ' $donnees_sql = <pre>' . var_export( $donnees_sql , true ) . '</pre>' ; exit(0);*/
        $tt137=/*sql_inclure_deb*/
            /* sql_137()
            INSERT INTO b1.`tbl_acces`(
                `chp_nom_acces` , 
                `chx_groupe_acces` , 
                `chx_metier_acces`
            ) VALUES (
                :chp_nom_acces , 
                :chx_groupe_acces , 
                :chx_metier_acces
            );
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_137()*/ 137,
            $donnees_sql,
            $donnees_retournees
        );
        
        if($tt137[__xst] === __xsu && $tt137['changements'] === 1){

            $this->action_apres_creer($mat,$d,$donnees_retournees,$donnees_recues,$tt137['nouvel_id'],$form);
            
            if($retour_a_la_liste === false){

                $this->page_modification1($mat,$d,$donnees_retournees,$donnees_recues,$tt137['nouvel_id']);
                return;

            }

            
            if(isset($form['__mat_liste_si_ok'])){

                $mat1=json_decode($form['__mat_liste_si_ok'],true);
                /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $mat1 , true ) . '</pre>' ; exit(0);*/
                $d=1;
                $this->filtre1($mat1,$d,$donnees_retournees,$donnees_recues);

            }


        }

    }
    /*
      =============================================================================================================
    */
    function filtre1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $__nbMax=40;
        $form=$GLOBALS['__fnt1']->debut_filtre1($mat,$d,$donnees_retournees,$donnees_recues,$this->fonction_liste);
        
        if(!isset($form['$__num_page'])){

            $__num_page=0;

        }else{

            $__num_page=(int)($form['$__num_page']);
        }

        $__debut=$__num_page * $__nbMax;
        $criteres135=array(/**/
            'quantitee' => $__nbMax,
            'debut' => $__debut
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $form , true ) . '</pre>' ; exit(0);*/
        foreach($form as $k1 => $v1){
            
            if($k1 !== '$__num_page'){

                $criteres135[$k1]=$form[$k1];

            }

        }
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $criteres135 , true ) . '</pre>' ; exit(0);*/
        $tt135=/*sql_inclure_deb*/
            /* sql_135()
            SELECT 
            `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
            `T2`.`chp_nom_metier`
             FROM b1.tbl_acces T0
             LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
            
             LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
            
            WHERE (`T0`.`chi_id_acces` = :T0_chi_id_acces
               AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces
               AND `T0`.`chx_groupe_acces` = :T0_chx_groupe_acces
               AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
               AND `T0`.`chx_metier_acces` = :T0_chx_metier_acces
               AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier) 
            ORDER BY `T0`.`chi_id_acces` DESC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_135()*/ 135,
            $criteres135,
            $donnees_retournees
        );
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt135[__xst]===__xsu && count($tt135[__xva])===0 && $__debut>0 , true ) . '</pre>' ; exit(0);*/
        
        if($tt135[__xst] === __xsu && count($tt135[__xva]) === 0 && $__debut > 0){

            $__debut=0;
            $__num_page=0;
            $criteres135['debut']=$__debut;
            $tt135=/*sql_inclure_deb*/
                /* sql_135()
                SELECT 
                `T0`.`chi_id_acces` , `T0`.`chp_nom_acces` , `T0`.`chx_groupe_acces` , `T0`.`chx_metier_acces` , `T1`.`chp_nom_groupe` , 
                `T2`.`chp_nom_metier`
                 FROM b1.tbl_acces T0
                 LEFT JOIN b1.tbl_groupes T1 ON T1.chi_id_groupe = T0.chx_groupe_acces
                
                 LEFT JOIN b1.tbl_metiers T2 ON T2.chi_id_metier = T0.chx_metier_acces
                
                WHERE (`T0`.`chi_id_acces` = :T0_chi_id_acces
                   AND `T0`.`chp_nom_acces` LIKE :T0_chp_nom_acces
                   AND `T0`.`chx_groupe_acces` = :T0_chx_groupe_acces
                   AND `T1`.`chp_nom_groupe` LIKE :T1_chp_nom_groupe
                   AND `T0`.`chx_metier_acces` = :T0_chx_metier_acces
                   AND `T2`.`chp_nom_metier` LIKE :T2_chp_nom_metier) 
                ORDER BY `T0`.`chi_id_acces` DESC  
                LIMIT :quantitee OFFSET :debut 
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_135()*/ 135,
                $criteres135,
                $donnees_retournees
            );
            /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tt135 , true ) . '</pre>' ; exit(0);*/

        }

        /* echo __FILE__ . ' ' . __LINE__ . ' $tt135 = <pre>' . var_export( $tt135 , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva]['$__nbMax']=$__nbMax;
        $donnees_retournees[__xva]['$__debut']=$__debut;
        $donnees_retournees[__xva]['$__num_page']=$__num_page;
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $donnees_retournees[__xac] , true ) . '</pre>' ; exit(0);*/
        /* */
        $donnees_retournees[__xac]='';
        $donnees_retournees[__xac] .= 'pm1(';
        $donnees_retournees[__xac] .= ' m1(';
        $donnees_retournees[__xac] .= '  n1(' . __CLASS__ . ')';
        $donnees_retournees[__xac] .= '  f1(';
        $donnees_retournees[__xac] .= '   ' . $this->fonction_liste . '(';
        foreach($form as $k1 => $v1){
            $donnees_retournees[__xac] .= critere_liste($form,$k1);
        }
        $donnees_retournees[__xac] .= '   )';
        $donnees_retournees[__xac] .= '  )';
        $donnees_retournees[__xac] .= ' )';
        $donnees_retournees[__xac] .= ')';
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . $donnees_retournees[__xac]  . '</pre>' ; exit(0);*/
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $this->fonction_liste , true ) . '</pre>' ; exit(0);*/
        $donnees_retournees[__xva][$this->fonction_liste]=$tt135;
        $donnees_retournees[__xst]=__xsu;
    }
    /*
      =============================================================================================================
    */
    function sous_liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $this->fonction_liste='sous_liste1';
        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
        return;
    }
    /*
      =============================================================================================================
    */
    function liste1(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $this->fonction_liste='liste1';
        $this->filtre1($mat,$d,$donnees_retournees,$donnees_recues);
        return;
    }
}