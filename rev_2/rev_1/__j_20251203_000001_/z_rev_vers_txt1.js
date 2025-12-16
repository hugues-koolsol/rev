"use strict";
const CRLF="\r\n";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const MON_LF='¶' + 'LF' + '¶';
const MON_CR='¶' + 'CR' + '¶';
const MON_CRLF='¶' + 'CR¶' + '¶' + 'LF¶';
const REGEX_LF=new RegExp( MON_LF , 'g' );
const REGEX_CR=new RegExp( MON_CR , 'g' );
/*
  =====================================================================================================================
  conversion de rev en texte
  point d'entrée = c_rev_vers_texte
  =====================================================================================================================
*/
class z_rev_vers_txt1{
    #nom_de_la_variable='';
    #tb=[];
    #l02=0;
    __m_rev1=null;
    /*
      =============================================================================================================
    */
    constructor( nom_de_la_variable , module_rev ){
        /* console.log('constructor'); */
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__m_rev1=module_rev;
    }
    /*
      =============================================================================================================
    */
    texte1_vers_rev( le_texte , options ){
        var t='texte(`' + le_texte.replace( /`/g , '\\`' ) + '`)';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    c_rev_vers_texte( tab , id , niveau ){
        /*
          appel à la fonction récursive
        */
        if(!Array.isArray( tab )){
            return(__m_rev1.empiler_erreur( {"__xst" : __xer ,"id" : i ,"__xme" : 'il faut une matrice pour la fonction c_rev_vers_texte '} ));
        }
        var ob=this.convertir_tableau_rev_vers_texte1( tab , id , niveau );
        if(ob.__xst === __xsu){
            if(ob.__xva.substr( 0 , 2 ) === CRLF){
                ob.__xva=ob.__xva.substr( 2 );
            }
        }
        return ob;
    }
    /*
      =============================================================================================================
    */
    convertir_tableau_rev_vers_texte1( tab , id , niveau ){
        var t='';
        var i=0;
        var contenu='';
        var l01=tab.length;
        for( i=id + 1 ; i < l01 ; i=tab[i][12] ){
            /*
              pour chaque élément du tableau dont le niveau est supérieur ou égal à l'id de référence
            */
            if(tab[i][2] === 'f'){
                /*
                  si c'est une fonction alors on accepte deux fonctions ....
                */
                if(tab[i][1] === '#'){
                    /*
                      ... la fonction commentaire pour laquelle on ne fait rien
                    */
                }else if(tab[i][1] === 'texte'){
                    /*
                      ... la fonction texte pour laquelle on appelle le récursif 
                    */
                    var objTexte=this.convertir_tableau_rev_vers_texte1( tab , i , niveau );
                    if(objTexte.__xst === __xsu){
                        t+=objTexte.__xva;
                    }else{
                        return(__m_rev1.empiler_erreur( {"__xst" : __xer ,"id" : i ,"__xme" : '0070 erreur dans un texte'} ));
                    }
                }else{
                    return(__m_rev1.empiler_erreur( {"__xst" : __xer ,"id" : i ,"__xme" : '0067seules les fonctions texte et # sont admises dans un texte'} ));
                }
            }else if(tab[i][2] === 'c'){
                /*
                  si c'est une constante, on ajoute le texte
                */
                if(tab[i][4] === 0){
                    /* c'est une constante non quotée, on ne fait aucune transformation */
                    contenu=tab[i][1];
                }else if(tab[i][4] === 1){
                    /* c'est une constante quotée par des apostrophes ['] */
                    contenu=tab[i][1].replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' );
                }else if(tab[i][4] === 2){
                    /* c'est une constante quotée par des apostrophes inversés / accent graves [`] */
                    contenu=tab[i][1].replace( /\\`/g , '`' ).replace( /\\/g , '\\' );
                }else if(tab[i][4] === 3){
                    /* c'est une constante quotée par des guillemets ["] */
                    contenu=tab[i][1].replace( /\\\"/g , '"' ).replace( /\\\\/g , '\\' );
                }else if(tab[i][4] === 4){
                    /* c'est une constante quotée par des slashs [/] */
                    contenu=tab[i][1].replace( /\\\//g , '/' ).replace( /\\\\/g , '\\' );
                }
                contenu=contenu.replace( REGEX_CR , '\r' ).replace( REGEX_LF , '\n' );
                t+=contenu;
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
}
export{z_rev_vers_txt1 as z_rev_vers_txt1};