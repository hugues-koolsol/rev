<?php
class ecran_generer_programmes{
    private $sql0=null;
    private $moi='ecran_generer_programmes';
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