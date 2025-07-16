<?php
class c_aides1{
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
    function recupere_la_page_d_aide(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txt='';
        $txt .= '<h1 style="color:red;">aide et paramètres</h1>';
        $txt .= '<div id="vv_gerer_les_parametres_de_l_interface"></div>';
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_cookies1.php');
        $le_cookie=new c_cookies1();
        $contraintes=$le_cookie->obtenir_contraintes_interface();
        $tailles_par_defaut=array();
        foreach($contraintes['defaut'] as $k1 => $v1){
            $tailles_par_defaut[$k1]=$v1;
        }
        
        if(isset($_COOKIE[__X_CLE_APPLICATION])){

            $le_cookie=json_decode($_COOKIE[__X_CLE_APPLICATION],true);
            foreach($tailles_par_defaut as $k1 => $v1){
                $tailles_par_defaut[$k1]=isset($le_cookie['aspect'][$k1])
                   && in_array($le_cookie['aspect'][$k1],$contraintes['valeurs'][$k1],true) ? $le_cookie['aspect'][$k1] : $tailles_par_defaut[$k1];
            }

        }

        foreach($contraintes['donnees_pour_l_interface'] as $cle => $champ){
            $txt .= '<div style="border:1px red solid;margin:10px;padding:10px;">';
            $txt .= '    <span for="' . $cle . '">' . $champ['label'] . '</span>';
            $txt .= '    <input type="range" id="' . $cle . '" ' . (isset($champ['class']) ? ' class="' . $champ['class'] . '" ' : '');
            $txt .= ' name="' . $cle . '" min="' . $champ['min'] . '" max="' . $champ['max'] . '" step="' . $champ['step'] . '" value="' . $tailles_par_defaut[$cle] . '" ';
            $txt .= ' data-hug_change_ou_entree="';
            $txt .= 'c_cookies1.enregistrer(champ(id(\'' . $cle . '\'),valeur(value),libelle(' . $champ['libelle'] . '),courant(' . $champ['courant'] . ')))';
            $txt .= ',maj_interface1(modifier(id(' . $cle . '_' . $champ['libelle'] . '),innerHTML(valeur_de_champ(' . $cle . '))))';
            $txt .= '" />';
            $txt .= '    ' . $champ['libelle'] . ' : <span id="' . $cle . '_' . $champ['libelle'] . '">' . $tailles_par_defaut[$cle] . '</span>' . $champ['dimension'] . ',';
            $txt .= '    ' . $champ['courant'] . ' : <span id="' . $cle . '_' . $champ['courant'] . '">' . $tailles_par_defaut[$cle] . '</span>' . $champ['dimension'] . '';
            $txt .= '</div>';
        }
        
        if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial'])
           && $_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial'] === 1
        ){

            $txt .= '<h2 style="color:blue;">Vous êtes connecté</h2>';
            $txt .= <<<EOT
    <div style="border:1px red solid;margin:10px;padding:10px;">
        <span class="hug_bouton" data-hug_click="c_divers1.generer_index_html()">generer la page d'accueil</span>
    </div>
    
EOT;

        }

        $txt .= '<h2 style="color:blue;">Paramètres du navigateur</h2>';
        $txt .= '<div id="vv_parametres_nagigateur" style="border:1px red solid;margin:10px;padding:10px;" ></div>';
        $donnees_retournees[__x_page] .= $txt;
        $donnees_retournees[__xva]['maj']='gerer_les_parametres_de_l_interface()';
        $donnees_retournees[__xst]=__xsu;
    }
}
/*
  =====================================================================================================================
*/