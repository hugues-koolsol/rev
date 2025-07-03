"use strict";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const NBESPACESREV=3;
/*
  =====================================================================================================================
  conversion d'un texte en rev
  point d'entrée = convertit_texte_en_rev_racine
  =====================================================================================================================
*/
class c_texte_vers_rev1{
    #nom_de_la_variable='';
    #options_traitement=null;
    __m_rev1=null;
    /* function constructor */
    constructor( nom_de_la_variable , module_rev ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__m_rev1=module_rev;
    }
    
    /* function texte1_vers_rev */
    texte1_vers_rev( le_texte , options ){
        var t='texte(`' + le_texte.replace( /`/g , '\\`' ) + '`)';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
}
export{c_texte_vers_rev1 as c_texte_vers_rev1};