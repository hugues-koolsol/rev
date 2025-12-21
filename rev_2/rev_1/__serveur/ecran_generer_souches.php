<?php
class ecran_generer_souches{
    private $sql0=null;
    private $moi='ecran_generer_souches';
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
    public function charger_les_requetes_souches(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        $chi_id_basedd=0;
        $nom_de_la_table='';
        $l01=count($mat);
        for( $i=$d + 1 ; $i < $l01 ; $i=$mat[$i][12] ){
            
            
            if($mat[$i][1] === 'chi_id_basedd' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $chi_id_basedd=(int)($mat[$i + 1][1]);

            }else if($mat[$i][1] === 'nom_de_la_table' && $mat[$i][2] === 'f' && $mat[$i][8] === 1 && $mat[$i + 1][2] === 'c'){

                $nom_de_la_table=$mat[$i + 1][1];
            }

        }
        
        if($chi_id_basedd > 0 && $nom_de_la_table !== ''){

            $tt391=/*sql_inclure_deb*/
                /* sql_391()
                SELECT 
                `T0`.`chi_id_requete` , `T0`.`cht_commentaire_requete` , `T0`.`chp_type_requete` , `T0`.`cht_rev_requete` , `T0`.`cht_sql_requete` , 
                `T0`.`cht_php_requete` , `T0`.`cht_matrice_requete` , `T0`.`che_est_souche_requete` , `T0`.`chp_table_reference_requete`
                 FROM b1.tbl_requetes T0
                WHERE (`T0`.`chp_table_reference_requete` = :T0_chp_table_reference_requete
                   AND `T0`.`che_est_souche_requete` = :T0_che_est_souche_requete)
                ;
                */
                /*sql_inclure_fin*/
                $this->sql0->sql_iii(
                 /*sql_391()*/ 391,
                array( 'T0_chp_table_reference_requete' => $nom_de_la_table, 'T0_che_est_souche_requete' => 1),
                $donnees_retournees
            );
            
            if($tt391[__xst] === __xsu){

                $donnees_retournees[__xva]['requetes']=$tt391[__xva];
                $donnees_retournees[__xst]=__xsu;

            }


        }

        return;
    }
    /*
      =============================================================================================================
    */
    public function recuperer_zone_travail_pour_les_bases2(&$mat,&$d,&$donnees_retournees,&$donnees_recues){
        /*
          on récupère les rev de toutes les bases du projet actif
        */
        $criteres171=array();
        $tt171=/*sql_inclure_deb*/
            /* sql_171()
            SELECT 
            `T0`.`chi_id_basedd` , `T0`.`chp_rev_travail_basedd`
             FROM b1.tbl_bdds T0
            ;
            */
            /*sql_inclure_fin*/
            $this->sql0->sql_iii(
             /*sql_171()*/ 171,
            $criteres171,
            $donnees_retournees
        );
        $donnees_retournees[__xva]['les_bases_du_projet']=array();
        
        if($tt171[__xst] === __xsu && count($tt171[__xva]) > 0){

            $donnees_retournees[__xva]['les_bases_du_projet']=$tt171[__xva];
            $donnees_retournees[__xst]=__xsu;

        }

        return;
    }
}