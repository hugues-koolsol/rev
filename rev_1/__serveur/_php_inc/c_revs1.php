<?php
class c_revs1{
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
      traitement des formulaires des revs
    */
    public function formulaire1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $l01=count($mat);
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'c_revs1.formulaire1' && $mat[$i][2] === 'f' && $mat[$i][8] >= 1){

                $conteneur1='';
                $action1='';
                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][1] === 'conteneur1' && $mat[$j + 1][2] === 'c'){

                        $conteneur1=$mat[$j + 1][1];

                    }else if($mat[$j][1] === 'action1' && $mat[$j + 1][2] === 'c'){

                        $action1=$mat[$j + 1][1];
                    }

                }
                
                if($action1 !== ''){

                    
                    if($action1 === 'page_liste_des_revs1'){

                        $this->$action1(
                            $donnees_retournees,
                             /*matrice*/ $mat,
                            $donnees_recues
                        );

                    }else{

                        $donnees_retournees[__x_signaux][__xal][]='action non traitée "' . $action1 . '" [' . __LINE__ . ']';
                    }


                }else if($conteneur1 === 'vv_revs_filtre1'){

                    $this->$conteneur1(
                        $donnees_retournees,
                         /*matrice*/ $mat,
                        $donnees_recues
                    );

                }else{

                    $donnees_retournees[__x_signaux][__xal][]='traitement à réaliser pour $donnees_recues ' . var_export($donnees_recues,true) . ' [' . __LINE__ . ']';
                }

                break;

            }

        }
    }
    /*
      =============================================================================================================
    */
    function tout_supprimer(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $tt=/*sql_inclure_deb*/
            /* sql_114()
            DELETE FROM b1.tbl_revs
            WHERE (`chx_projet_rev` = :chx_projet_rev) ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_114()*/ 114,
            array( 'chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet']),
            $donnees_retournees
        );
        $this->page_liste_des_revs1($donnees_retournees,$mat,$donnees_recues);
    }
    /*
      =============================================================================================================
    */
    function vv_revs_filtre1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txtPar='__num_page(0)';
        $nouvelles_valeurs=array( '__num_page' => 0);
        foreach($donnees_recues[__xva] as $k0 => $v0){
            
            if($k0 !== '__num_page'){

                $nouvelles_valeurs[$k0]=$v0;
                
                if(is_numeric($v0)){

                    $txtPar .= ',' . $k0 . '(' . $v0 . ')';

                }else{

                    $txtPar .= ',' . $k0 . '(\'' . str_replace('\'','\\\'',$v0) . '\')';
                }


            }

        }
        $_SESSION[__X_CLE_APPLICATION]['c_revs1.page_liste_des_revs1']=$nouvelles_valeurs;
        $obj_matrice=$GLOBALS['obj_rev1']->rev_vers_matrice('c_revs1.page_liste_des_revs1(' . $txtPar . ')');
        
        if($obj_matrice[__xst] === __xsu){

            $this->page_liste_des_revs1($donnees_retournees,$obj_matrice[__xva],$donnees_recues);

        }else{

            $donnees_retournees[__x_signaux][__xer][]=__LINE__ . ' erreur de convertion de ' . $txtPar . '';
        }

    }
    /*
      =============================================================================================================
    */
    function page_liste_des_revs1(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        
        if(!isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

            $donnees_retournees[__x_signaux][__xal][]=' vous devez activer un projet [' . __LINE__ . ']';
            $donnees_retournees[__xst]=__xsu;
            return;

        }

        $__nbMax=40;
        $par=array();
        $par['T0_chi_id_rev']='';
        $par['T0_chp_valeur_rev']='';
        $par['T0_chp_provenance_rev']='';
        $par['T1_chp_nom_source']='';
        $par['T0_chx_source_rev']='';
        $par['__num_page']=0;
        $numpage=-1;
        $par_mat=array();
        $l01=count($mat);
        $provenance_menu=false;
        /* $donnees_retournees[__x_signaux][__xdv][]='$mat ='.json_encode( $mat  , JSON_FORCE_OBJECT );*/
        for( $i=1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if('c_revs1.page_liste_des_revs1' === $mat[$i][1]){

                for( $j=$i + 1 ; $j < $l01 ; $j=$mat[$j][12] ){
                    
                    
                    if($mat[$j][2] === 'f' && $mat[$j][8] === 1 && $mat[$j + 1][2] === 'c'){

                        /* $donnees_retournees[__x_signaux][__xdv][]='$mat[$j][1] ='.json_encode( $mat[$j][1] . ' ' . $mat[$j+1][1]  , JSON_FORCE_OBJECT );*/
                        
                        if($mat[$j][1] === '__num_page'){

                            $numpage=$mat[$j + 1][1];
                            $par_mat['__num_page']=$mat[$j + 1][1];
                            $par['__num_page']=$mat[$j + 1][1];

                        }else if($mat[$j][1] === 'indice_menu'){

                            $numpage=0;
                            $par_mat['__num_page']=0;
                            $provenance_menu=true;
                            $par['__num_page']=0;

                        }else if($mat[$j + 1][1] !== ''){

                            $par_mat[$mat[$j][1]]=$mat[$j + 1][1];
                        }


                    }

                }

            }

        }
        /*
          echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $par , true ) . '</pre>' ; exit(0);
        */
        
        if(false === isset($_SESSION[__X_CLE_APPLICATION]['c_revs1.page_liste_des_revs1'])){

            $par=array_merge($par,$par_mat);
            $_SESSION[__X_CLE_APPLICATION]['c_revs1.page_liste_des_revs1']=$par;

        }else{

            $par=$_SESSION[__X_CLE_APPLICATION]['c_revs1.page_liste_des_revs1'];
            
            if($provenance_menu === true){

                $par['__num_page']=0;

            }else{

                
                if($numpage === -1){


                }else{

                    $par['__num_page']=$numpage;
                }

            }

            
            if(!isset($par['T0_chp_valeur_rev'])){

                $par['T0_chp_valeur_rev']='';

            }

            
            if(!isset($par['T0_chp_provenance_rev'])){

                $par['T0_chp_provenance_rev']='';

            }

            
            if(!isset($par['T1_chp_nom_source'])){

                $par['T1_chp_nom_source']='';

            }

            
            if(!isset($par['T0_chx_source_rev'])){

                $par['T0_chx_source_rev']='';

            }

            $_SESSION[__X_CLE_APPLICATION]['c_revs1.page_liste_des_revs1']=$par;
        }

        $par['T0_chi_id_rev']=$par['T0_chi_id_rev']??'';
        $fonction1='c_revs1.page_liste_des_revs1';
        $nom_filtre='vv_revs_filtre1';
        $o1='<h1>Liste des revs</h1>';
        $__num_page=!isset($par['__num_page']) ? 0 : (int)($par['__num_page']);
        $__debut=$__num_page * $__nbMax;
        $o1 .= '<div class="yy_filtre_liste1" id="' . $nom_filtre . '">' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chi_id_rev" value="' . $par['T0_chi_id_rev'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>provenance</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chp_provenance_rev" value="' . $par['T0_chp_provenance_rev'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>id source</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chx_source_rev" value="' . $par['T0_chx_source_rev'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>nom source</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T1_chp_nom_source" value="' . $par['T1_chp_nom_source'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>' . PHP_EOL;
        $o1 .= '    <div><span>valeur</span></div>' . PHP_EOL;
        $o1 .= '    <div><input type="text" id="T0_chp_valeur_rev" value="' . $par['T0_chp_valeur_rev'] . '" size="8" maxlength="32" autocapitalize="off" /></div>' . PHP_EOL;
        $o1 .= '   </div>' . PHP_EOL;
        /**/
        $o1 .= '   <div>    ' . PHP_EOL;
        $o1 .= '     <div><span>&nbsp;</span></div>' . PHP_EOL;
        $o1 .= '     <div><div class="hug_bouton yy_bouton_loupe" data-hug_click="c_revs1.formulaire1(conteneur1(' . $nom_filtre . '))" >🔎</div></div>' . PHP_EOL;
        $o1 .= '     <input type="hidden" id="__num_page" value="' . $__debut . '" />' . PHP_EOL;
        $o1 .= '   </div> ' . PHP_EOL;
        /**/
        $o1 .= '</div>';
        $tt=/*sql_inclure_deb*/
            /* sql_113()
            SELECT 
            `T0`.`chi_id_rev` , `T0`.`chx_projet_rev` , `T0`.`chp_provenance_rev` , `T0`.`chx_source_rev` , `T0`.`chp_id_rev` , 
            `T0`.`chp_valeur_rev` , `T0`.`chp_type_rev` , `T0`.`chp_niveau_rev` , `T0`.`chp_quotee_rev` , `T0`.`chp_pos_premier_rev` , 
            `T0`.`chp_pos_dernier_rev` , `T0`.`chp_parent_rev` , `T0`.`chp_nbr_enfants_rev` , `T0`.`chp_num_enfant_rev` , `T0`.`chp_profondeur_rev` , 
            `T0`.`chp_pos_ouver_parenthese_rev` , `T0`.`chp_enfant_suivant_rev` , `T0`.`chp_commentaire_rev` , `T1`.`chp_nom_source`
             FROM b1.tbl_revs T0
             LEFT JOIN b1.tbl_sources T1 ON T1.chi_id_source = T0.chx_source_rev
            
            WHERE ( / *** *** / `T0`.`chi_id_rev` = :T0_chi_id_rev
               AND `T0`.`chx_projet_rev` = :T0_chx_projet_rev
               AND `T0`.`chp_provenance_rev` LIKE :T0_chp_provenance_rev
               AND `T1`.`chp_nom_source` LIKE :T1_chp_nom_source
               AND `T0`.`chp_valeur_rev` LIKE :T0_chp_valeur_rev
               AND `T0`.`chx_source_rev` = :T0_chx_source_rev) 
            ORDER BY `T0`.`chi_id_rev` ASC  
            LIMIT :quantitee OFFSET :debut 
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_113()*/ 113,
            array(
                'T0_chi_id_rev' => $par['T0_chi_id_rev'] === '' ? '' : $par['T0_chi_id_rev'],
                'T0_chx_projet_rev' => $_SESSION[__X_CLE_APPLICATION]['chi_id_projet'],
                'T0_chp_valeur_rev' => $par['T0_chp_valeur_rev'] === '' ? '' : '' . $par['T0_chp_valeur_rev'] . '',
                'T0_chp_provenance_rev' => $par['T0_chp_provenance_rev'] === '' ? '' : '' . $par['T0_chp_provenance_rev'] . '',
                'T1_chp_nom_source' => $par['T1_chp_nom_source'] === '' ? '' : '' . $par['T1_chp_nom_source'] . '',
                'T0_chx_source_rev' => $par['T0_chx_source_rev'] === '' ? '' : $par['T0_chx_source_rev'],
                'quantitee' => $__nbMax,
                'debut' => $__debut
            ),
            $donnees_retournees
        );
        
        if($tt[__xst] !== __xsu){

            $donnees_retournees[__x_signaux][__xer][]='Erreur dans la liste des revs [' . __LINE__ . ']';
            return;

        }

        /*
          $donnees_retournees[__x_signaux][__xal][]=__LINE__ . 'TODO $tt '.var_export($tt,true);
        */
        $bouton_avant='<div class="hug_bouton yy__x_signaux___xer" data-hug_click="c_revs1.tout_supprimer()" title="tout supprimer" >🗑</div>';
        $o1 .= construire_navigation_pour_liste($__debut,$__nbMax,$tt['nombre'],$__num_page,$bouton_avant,$fonction1,$par,count($tt[__xva]));
        $lsttbl='';
        $lsttbl .= '<thead><tr>';
        $lsttbl .= '<th>action</th>';
        $lsttbl .= '<th>id</th>';
        $lsttbl .= '<th>provenance</th>';
        $lsttbl .= '<th>id source</th>';
        $lsttbl .= '<th>nom source</th>';
        $lsttbl .= '<th>valeur</th>';
        $lsttbl .= '<th>c/f</th>';
        $lsttbl .= '<th title="niveau">niv</th>';
        $lsttbl .= '</tr></thead>';
        $lsttbl .= '<tbody>';
        foreach($tt[__xva] as $k0 => $v0){
            $lsttbl .= '<tr>';
            /*
              
            */
            $lsttbl .= '<td data-label="" style="text-align:left!important;">';
            $lsttbl .= ' <div style="display:flex;min-width:calc(3*var(t_1boutons_carres))">';
            $lsttbl .= ' </div>';
            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:center;">';
            $lsttbl .= '' . $v0['T0.chi_id_rev'] . '';
            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_provenance_rev'] !== 'source'){

                $lsttbl .= '<span style="color:red;">' . $v0['T0.chp_provenance_rev'] . '</span>';

            }else{

                $lsttbl .= '' . $v0['T0.chp_provenance_rev'] . '';
            }

            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.chx_source_rev'] . '';
            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:left;">';
            
            if($v0['T0.chp_provenance_rev'] !== 'source'){

                $lsttbl .= '';

            }else{

                $lsttbl .= '' . $v0['T1.chp_nom_source'] . '';
            }

            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . enti1(mb_substr($v0['T0.chp_valeur_rev'],0,300)) . '';
            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.chp_type_rev'] . '';
            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '<td style="text-align:left;">';
            $lsttbl .= '' . $v0['T0.chp_niveau_rev'] . '';
            $lsttbl .= '</td>';
            /*
              
            */
            $lsttbl .= '</tr>';
        }
        $o1 .= '<div class="yy_div_contenant_table"><table class="yy_table_liste1">' . PHP_EOL . $lsttbl . '</tbody></table></div>' . PHP_EOL;
        $donnees_retournees[__x_page] .= $o1;
        $donnees_retournees[__x_action]='c_revs1.page_liste_des_revs1()';
        $donnees_retournees[__xst]=__xsu;
    }
}