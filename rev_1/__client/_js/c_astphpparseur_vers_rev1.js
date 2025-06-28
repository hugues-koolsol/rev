"use strict";
const CRLF="\r\n";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const NBESPACESREV=3;
/*
  =====================================================================================================================
  conversion d'un ast produit par https://github.com/glayzzle/php-parser en rev
  point d'entrée = traite_ast
  =====================================================================================================================
*/
class c_astphpparseur_vers_rev1{
    #nom_de_la_variable='';
    #options_traitement=null;
    __m_rev1=null;
    __module_html1=null;
    /*
      =============================================================================================================
      le seul argument est pour l'instant le nom de la variable qui est déclarée
    */
    constructor( nom_de_la_variable , module_rev , module_html ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__m_rev1=module_rev;
        this.__module_html1=module_html;
    }
    /*
      =============================================================================================================
    */
    #astphp_le( o ){
        if(o.hasOwnProperty( 'element' )
               && o.element
               && o.element.hasOwnProperty( 'loc' )
               && o.element.loc.hasOwnProperty( 'start' )
        ){
            o.plage=[o.element.loc.start.offset,o.element.loc.end.offset];
        }
        return(this.__m_rev1.empiler_erreur( o ));
    }
    /*
      =============================================================================================================
    */
    #traite_call( element , niveau , parent , tab_comm ){
        let t='';
        var obj=null;
        var nomFonction='';
        var les_parametres='';
        let les_arguments_courts='';
        obj=this.#traite_commentaires_debut( element , niveau , parent , tab_comm );
        if(obj.__xst === __xsu){
            t+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        obj=this.#traite_element( element.what , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            nomFonction+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element.what} ));
        }
        if(element.arguments && element.arguments.length > 0){
            obj=this.#traite_parametres( element , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                les_parametres+=obj.__xva;
                les_arguments_courts=obj.les_arguments_courts;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element.what} ));
            }
        }
        if(element.what.kind === 'propertylookup'){
            if(nomFonction.indexOf( 'element(' ) >= 0 && nomFonction.indexOf( 'nomf(' ) >= 0){
                if(nomFonction.substr( 0 , 9 ) === 'propriete'){
                    /* afr quand passe-t-on par ici */
                    debugger;
                    t+=this.#remplace_nom_fonction2( nomFonction , les_parametres );
                }else{
                    t+='appelf(' + nomFonction + les_parametres + ')';
                }
            }else{
                if(element.what.what.kind === 'variable' && element.what.offset && element.what.offset.kind === 'identifier'){
                    t+='appelf( element($' + element.what.what.name + ') , nomf(' + element.what.offset.name + ')' + les_parametres + ')';
                }else{
                    t+=this.#remplace_nom_fonction1( nomFonction , les_parametres );
                }
            }
        }else{
            if(nomFonction === 'sql_inclure_reference'){
                t+='sql_inclure_reference(' + les_arguments_courts + ')';
            }else{
                t+=this.#remplace_nom_fonction1( nomFonction , les_parametres );
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #remplace_nom_fonction2( nomFonction , les_parametres ){
        let t='';
        /*
          var tableau1=this.__m_rev1.txt_en_tableau(nomFonction);
          var o=functionToArray2(tableau1.__xva,false,true,'');
        */
        var o=this.__m_rev1.rev_tm( nomFonction );
        if(o.__xst === __xsu){
            if(o.__xva[0][8] === 1 && o.__xva[1][1] === 'propriete' && o.__xva[1][2] === 'f' && o.__xva[1][8] === 2){
                var _l_element='';
                for( var j=2 ; j < o.__xva.length ; j=o.__xva[j][12] ){
                    var tt=this.__m_rev1.matrice_vers_source_rev1( o.__xva , 1 , false , j , o.__xva[1][10] , [] , null , true );
                    if(tt.__xst === __xsu){
                        if(_l_element == ''){
                            _l_element=tt.__xva;
                        }else{
                            t+='appelf(element(' + _l_element + '),nomf(' + tt.__xva + ')' + les_parametres + ')';
                        }
                    }else{
                        t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
                    }
                }
            }else{
                t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
            }
        }else{
            debugger;
            t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
        }
        return t;
    }
    /*
      =============================================================================================================
    */
    #remplace_nom_fonction1( nomFonction , les_parametres ){
        let t='';
        if(nomFonction.indexOf( 'propriete' ) >= 0 && nomFonction.indexOf( 'element' ) < 0){
            /*
              on essaie de remplacer un
              appelf(nomf(propriete($this->createdArrays,detach)),p($node))
              par un
              appelf(element($this->createdArrays),nomf(detach),p($node))
              car le nom de la fonction est réellement "detach"
              "propriete(
              tableau(
              nomt($node->stmts)
              p(moins($numStmts,1))
              ),
              getAttributes)"
              
            */
            /*
              var tableau1=this.__m_rev1.txt_en_tableau(nomFonction);
              var o=functionToArray2(tableau1.__xva,false,true,'');
            */
            var o=this.__m_rev1.rev_tm( nomFonction );
            if(o.__xst === __xsu){
                if(o.__xva[0][8] === 1 && o.__xva[1][1] === 'propriete' && o.__xva[1][2] === 'f' && o.__xva[1][8] === 2){
                    var _l_element='';
                    for( var j=2 ; j < o.__xva.length ; j=o.__xva[j][12] ){
                        var tt=this.__m_rev1.matrice_vers_source_rev1( o.__xva , 1 , false , j , o.__xva[1][10] , [] , null , true );
                        if(tt.__xst === __xsu){
                            if(_l_element == ''){
                                _l_element=tt.__xva;
                            }else{
                                t+='appelf(element(' + _l_element + '),nomf(' + tt.__xva + ')' + les_parametres + ')';
                            }
                        }else{
                            t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
                        }
                    }
                }else{
                    t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
                }
            }else{
                debugger;
                t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
            }
        }else{
            t+='appelf(nomf(' + nomFonction + ')' + les_parametres + ')';
        }
        return t;
    }
    /*
      =============================================================================================================
    */
    #traite_propertylookup( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let what='';
        var les_arguments='';
        var offset='';
        if(element.what && element.what.kind === 'variable' && element.offset && element.offset.kind === 'identifier'){
            t+='$' + element.what.name + '->' + element.offset.name;
        }else{
            if(element.what){
                obj=this.#traite_element( element.what , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    what+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            if(element.offset){
                obj=this.#traite_element( element.offset , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    offset+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            t+='propriete(' + what + ',' + offset + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_include( element , niveau , parent , tab_comm ){
        let t='';
        var obj=null;
        var a_inclure='';
        var obj=this.#traite_element( element.target , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            a_inclure=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.once === true && element.require === true){
            t+='appelf(nomf(require_once),p(' + a_inclure + '))';
        }else if(element.once === false && element.require === true){
            t+='appelf(nomf(require),p(' + a_inclure + '))';
        }else if(element.once === false && element.require === false){
            t+='appelf(nomf(include),p(' + a_inclure + '))';
        }else if(element.once === true && element.require === false){
            t+='appelf(nomf(include_once),p(' + a_inclure + '))';
        }else{
            debugger;
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_construit_cle( l ){
        let resultat='';
        /* on retire I("I" de [i]ncrément ) O("o" de [o]bjet) l("l" de laitue)  0(zéro) 1(un) */
        const lettres='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
        const longueur=lettres.length;
        let c=0;
        while(c < l){
            resultat+=lettres.charAt( Math.floor( Math.random() * longueur ) );
            c++;
        }
        return('_' + resultat);
    }
    /*
      =============================================================================================================
    */
    #traite_inline( element , niveau , parent , tab_comm ){
        let t='';
        let tableau_de_html_dans_php_a_convertir=[];
        const esp0=' '.repeat( NBESPACESREV * niveau );
        const esp1=' '.repeat( NBESPACESREV );
        var contenu=element.raw;
        /*
          =====================================================================================================
          Quand un php contient du html, ou bien ce dernier est un dom valide qui ne contient pas de php
          par exemple ">? <div>que_du_html</div><?php"
          ou bien il contient du php, 
          par exemple ">? <div> <?php echo '';?> </div> <?php"
          Dans ce dernier car la chaine " <div> " n'est pas un html "parfait"
          =====================================================================================================
        */
        let obj=this.__module_html1.traite_html_de_php( contenu , this.#options_traitement , niveau );
        if(obj.__xst === __xsu){
            t+='\n' + obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t ,"tableau_de_html_dans_php_a_convertir" : tableau_de_html_dans_php_a_convertir});
    }
    /*
      =============================================================================================================
    */
    #traite_isset( element , niveau , parent , tab_comm ){
        let t='';
        let les_variables='';
        let obj=null;
        for( let i=0 ; i < element.variables.length ; i++ ){
            les_variables+=',';
            obj=this.#traite_element( element.variables[i] , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                les_variables+='p(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='appelf(nomf(isset)' + les_variables + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_unset( element , niveau , parent , tab_comm ){
        let t='';
        let les_variables='';
        let obj=null;
        for( let i=0 ; i < element.variables.length ; i++ ){
            les_variables+=',';
            obj=this.#traite_element( element.variables[i] , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                les_variables+='p(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='appelf(nomf(unset)' + les_variables + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_echo( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let les_variables='';
        if(element.expressions){
            for( let i=0 ; i < element.expressions.length ; i++ ){
                les_variables+=',';
                obj=this.#traite_element( element.expressions[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    les_variables+='p(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='appelf(nomf(echo)' + les_variables + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_print( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let les_variables='';
        obj=this.#traite_element( element.expression , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            les_variables+='p(' + obj.__xva + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='appelf(nomf(print)' + les_variables + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_usegroup( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        for( let i=0 ; i < element.items.length ; i++ ){
            if(element.items[i].kind === 'useitem'){
                if(t !== ''){
                    t+=',';
                }
                t+='appelf( nomf(use) , p( \'' + element.items[i].name.replace( /\\/g , '\\\\' ) + '\' ))';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_silent( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        obj=this.#traite_element( element.expr , niveau + 1 , element , tab_comm );
        if(obj.__xst === __xsu){
            t='supprimeErreur(' + obj.__xva + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_exit( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.expression === null){
            if(element.useDie === true){
                t='mourir()';
            }else{
                t='sortir()';
            }
        }else{
            obj=this.#traite_element( element.expression , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                if(element.useDie === true){
                    t='mourir(' + obj.__xva + ')';
                }else{
                    t='sortir(' + obj.__xva + ')';
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_return( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.expr === null){
            t='revenir()';
        }else{
            obj=this.#traite_element( element.expr , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                t='retourner(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_catch( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let what='';
        let variable='';
        let contenu='';
        if(element.what && element.what.length > 0){
            for( var i=0 ; i < element.what.length ; i++ ){
                obj=this.#traite_element( element.what[i] , niveau + 1 , element , tab_comm );
                if(obj.__xst === __xsu){
                    variable+=obj.__xva + ',';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' what' ,"element" : element} ));
                }
            }
        }
        if(element.variable){
            obj=this.#traite_element( element.variable , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                variable+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'variable' ,"element" : element} ));
            }
        }
        if(element.body){
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' body' ,"element" : element} ));
            }
        }
        t+='err(' + variable + '),faire(' + contenu + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_try( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let contenu='';
        let catches=[];
        if(element.body){
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' body' ,"element" : element} ));
            }
        }else if(element.kind === 'block'){
            obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' body' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' ni body ni block' ,"element" : element} ));
        }
        if(element.catches && element.catches.length && element.catches.length > 0){
            for( let i=0 ; i < element.catches.length ; i++ ){
                obj=this.#traite_element( element.catches[i] , niveau + 1 , element , tab_comm );
                if(obj.__xst === __xsu){
                    catches.push( obj.__xva );
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'catches' ,"element" : element} ));
                }
            }
        }
        t+='essayer(faire(' + contenu + ')';
        for( var i=0 ; i < catches.length ; i++ ){
            t+='sierreur(';
            t+=catches[i];
            t+=')';
        }
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_new( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        var les_parametres='';
        var what='';
        obj=this.#traite_parametres( element , niveau , parent , tab_comm , 'parametres' );
        if(obj.__xst === __xsu){
            les_parametres+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        /*#
          la doc dit :        
          If there are no arguments to be passed to the class's constructor, parentheses after the class name may be omitted. 
          Moi, je mets systématiquement des parenthèses !
          if(les_parametres===''){
              les_parametres=',sans_arguments()';
          }
        */
        if(element.what.kind === 'name'){
            if(element.what.name.indexOf( '\\' ) >= 0){
                what='\'' + element.what.name.replace( /\\/g , '\\\\' ) + '\'';
            }else{
                what=element.what.name;
            }
        }else{
            obj=this.#traite_element( element.what , niveau , parent , tab_comm , 'parametres' );
            if(obj.__xst === __xsu){
                what+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(element.parenthesizedExpression === true){
            t+='(nouveau(appelf(nomf(' + what + ')' + les_parametres + ')))';
        }else{
            t+='nouveau(appelf(nomf(' + what + ')' + les_parametres + '))';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      $s1=SQLite3::escapeString($s); -> affecte( $s1 , appelf( nomf(SQLite3::escapeString) , p($s) )),
    */
    #staticlookup( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let offset='';
        let what='';
        if(element.offset){
            obj=this.#traite_element( element.offset , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                offset+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'offset' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'pas de offset' ,"element" : element} ));
        }
        if(element.what){
            obj=this.#traite_element( element.what , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                what+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'pas de what' ,"element" : element} ));
        }
        if(what.substr( 0 , 1 ) === '\''){
            t='valeur_constante(' + what.substr( 0 , what.length - 1 ) + '::' + offset + '\')';
        }else if(what.substr( 0 , 17 ) === 'valeur_constante('){
            t='valeur_constante(' + what.substr( 17 , what.length - 19 ) + '::' + offset + '\')';
        }else{
            t=what + '::' + offset;
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_retif( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let condition='';
        let si_vrai='';
        let si_faux='';
        obj=this.#traite_element( element.test , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            condition+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'test' ,"element" : element} ));
        }
        if(element.trueExpr){
            obj=this.#traite_element( element.trueExpr , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                si_vrai+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'true' ,"element" : element} ));
            }
        }else{
            si_vrai='';
        }
        obj=this.#traite_element( element.falseExpr , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            si_faux+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'false' ,"element" : element} ));
        }
        t='testEnLigne( condition( ' + condition + ' ) , siVrai(' + si_vrai + ') , siFaux(' + si_faux + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_global( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let items='';
        for( let i=0 ; i < element.items.length ; i++ ){
            obj=this.#traite_element( element.items[i] , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                items+=',' + obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(items !== ''){
            items=items.substr( 1 );
        }
        t='globale(' + items + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_break( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        var niveau='';
        if(element.level !== null){
            niveau=element.level.value;
        }
        t+='break(' + niveau + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_closure( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        var lesArguments='';
        var les_utilisations='';
        var contenu='';
        var type_retour='';
        var statique='';
        obj=this.#traite_arguments( element , niveau , parent , tab_comm , 'argument' );
        if(obj.__xst === __xsu){
            lesArguments=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.byref !== false){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' byref' ,"element" : element} ));
        }
        if(element.isStatic !== false){
            statique='statique()';
        }
        if(element.nullable !== false){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nullable' ,"element" : element} ));
        }
        if(element.attrGroups.length !== 0){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'attrGroups' ,"element" : element} ));
        }
        if(element.uses.length !== 0){
            for( let i=0 ; i < element.uses.length ; i++ ){
                les_utilisations+=',';
                obj=this.#traite_element( element.uses[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    if(element.uses[i].hasOwnProperty( 'curly' ) && element.uses[i].curly !== false){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'curly' ,"element" : element} ));
                    }
                    if(element.uses[i].hasOwnProperty( 'variadic' ) && element.uses[i].variadic !== false){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'variadic' ,"element" : element} ));
                    }
                    if(element.uses[i].hasOwnProperty( 'flags' ) && element.uses[i].flags !== false){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'flags' ,"element" : element} ));
                    }
                    if(element.uses[i].hasOwnProperty( 'nullable' ) && element.uses[i].nullable !== false){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nullable' ,"element" : element} ));
                    }
                    if(element.uses[i].hasOwnProperty( 'readonly' ) && element.uses[i].readonly !== false){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'readonly' ,"element" : element} ));
                    }
                    if(element.uses[i].hasOwnProperty( 'type' ) && element.uses[i].type !== false){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'type' ,"element" : element} ));
                    }
                    if(element.uses[i].hasOwnProperty( 'value' )){
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'value' ,"element" : element} ));
                    }
                    if(element.uses[i].byref && element.uses[i].byref === true){
                        les_utilisations+='utilise_par_adresse(' + obj.__xva + ')';
                    }else{
                        les_utilisations+='utilise(' + obj.__xva + ')';
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'uses' ,"element" : element} ));
                }
            }
        }
        if(element.type){
            if(element.type.kind === 'typereference'){
                type_retour='type_retour(\'' + element.type.name.replace( /\\/g , '\\\\' ) + '\')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'type' ,"element" : element} ));
            }
        }
        if(element.body){
            if(element.body.kind === undefined){
                element.body.kind='body';
            }
            if(Array.isArray( element.body )){
                element.body.children=element.body;
            }
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                if(obj.__xva !== ''){
                    contenu=',contenu(' + obj.__xva + ')';
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }
        t='cloturée(';
        t+=statique;
        t+=lesArguments;
        t+=type_retour;
        t+=les_utilisations;
        t+=contenu;
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_clone( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.what){
            obj=this.#traite_element( element.what , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                t+='appelf(nomf(clone),p(' + obj.__xva + '))';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_constant( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let nom='';
        let valeur='';
        if(element.name && element.value){
            obj=this.#traite_element( element.name , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                nom+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            obj=this.#traite_element( element.value , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                valeur+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            t+='nomc(' + nom + '),valeur(' + valeur + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      private const SYMBOL_NONE = -1; declare_constante
    */
    #traite_classconstant( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let visibility='';
        if(element.attrGroups && element.attrGroups.length > 0){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'attrGroups' ,"element" : element} ));
        }
        if(element.final){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'final' ,"element" : element} ));
        }
        if(element.nullable){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nullable' ,"element" : element} ));
        }
        if(element.type){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'type' ,"element" : element} ));
        }
        if(element.visibility){
            if(element.visibility === 'private'){
                visibility='constante(privée(),';
            }else if(element.visibility === 'public'){
                visibility='constante(publique(),';
            }else if(element.visibility === 'protected'){
                visibility='constante(protégée(),';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'visibilitée non traité "' + element.visibility + '"' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'visibilitée' ,"element" : element} ));
        }
        for( let i=0 ; i < element.constants.length ; i++ ){
            obj=this.#traite_element( element.constants[i] , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                t+=(visibility + obj.__xva) + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'constants' ,"element" : element} ));
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_staticvariable( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let valeur='';
        let variable='';
        if(element.defaultValue){
            obj=this.#traite_element( element.defaultValue , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                valeur=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'defaultValue' ,"element" : element} ));
            }
        }
        obj=this.#traite_element( element.variable , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            variable=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'variable' ,"element" : element} ));
        }
        t='static(' + variable + ',' + valeur + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_static( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        for( let i=0 ; i < element.variables.length ; i++ ){
            obj=this.#traite_element( element.variables[i] , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                t+=',' + obj.__xva;
                /* obj.__xva; */
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(t !== ''){
            t=t.substr( 1 );
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_throw( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        obj=this.#traite_element( element.what , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            t+='throw(' + obj.__xva + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_typereference( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.name && element.name !== ''){
            if(element.name.indexOf( '\\' ) >= 0){
                t='\'' + element.name.replace( /\\/g , '\\\\' ) + '\'';
            }else{
                t=element.name;
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_interface( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let i=0;
        let nom_de_l_interface='';
        let faire='';
        if(element.name && element.name !== '' && element.name.kind == 'identifier'){
            nom_de_l_interface=element.name.name;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'name' ,"element" : element} ));
        }
        if(element.extends && element.extends !== null){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'extends' ,"element" : element} ));
        }
        if(element.attrGroups && element.attrGroups.length > 0){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'attrGroups' ,"element" : element} ));
        }
        if(element.body && element.body.length > 0){
            for( i=0 ; i < element.body.length ; i++ ){
                obj=this.#traite_element( element.body[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    faire+=',' + obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }
        }
        if(faire !== ''){
            faire=faire.substr( 1 );
        }
        t+='interface(nom_interface(\'' + nom_de_l_interface + '\'),faire(' + faire + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_namespace( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let i=0;
        let nom_de_l_espace='';
        let faire='';
        if(element.name && element.name !== ''){
            if(element.name.indexOf( '\\' ) >= 0){
                nom_de_l_espace='\'' + element.name.replace( /\\/g , '\\\\' ) + '\'';
            }else{
                nom_de_l_espace=element.name;
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.children && element.children.length > 0){
            for( i=0 ; i < element.children.length ; i++ ){
                if(element.children[i].kind === 'expressionstatement'){
                    obj=this.#traite_element( element.children[i].expression , niveau , element , tab_comm );
                    if(obj.__xst === __xsu){
                        faire+=',' + obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }else{
                    obj=this.#traite_element( element.children[i] , niveau , element , tab_comm );
                    if(obj.__xst === __xsu){
                        faire+=',' + obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }
            }
        }
        if(faire !== ''){
            faire=faire.substr( 1 );
        }
        t+='espace_de_noms(nom_espace(' + nom_de_l_espace + '),faire(' + faire + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_declare( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let cle='';
        let i=0;
        let texte_des_directives='';
        let instructions='';
        for( i=0 ; i < element.directives.length ; i++ ){
            cle='';
            obj=this.#traite_element( element.directives[i].key , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                cle+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'cle' ,"element" : element} ));
            }
            obj=this.#traite_element( element.directives[i].value , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                if(obj.__xva.indexOf( '\'' ) >= 0){
                    texte_des_directives+=',' + cle + '=\'' + obj.__xva + '\'';
                }else{
                    texte_des_directives+=',' + cle + '=' + obj.__xva + '';
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'valeur' ,"element" : element} ));
            }
        }
        if(element.children && element.children.length > 0){
            for( i=0 ; i < element.children.length ; i++ ){
                obj=this.#traite_element( element.children[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    instructions+=',' + obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(texte_des_directives === ''){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'texte directive non trouvé' ,"element" : element} ));
        }
        texte_des_directives=texte_des_directives.substr( 1 );
        if(instructions !== ''){
            instructions=instructions.substr( 1 );
            t+='directive(texte(\'' + texte_des_directives.replace( /\'/g , '\\\'' ) + '\'),faire(' + instructions + '))';
        }else{
            t+='directive(texte(\'' + texte_des_directives.replace( /\'/g , '\\\'' ) + '\'))';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_cast( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        obj=this.#traite_element( element.expr , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            if(element.raw === '(int)'){
                t='castint(' + obj.__xva + ')';
            }else if(element.raw === '(string)'){
                t='caststring(' + obj.__xva + ')';
            }else if(element.raw === '(float)'){
                t='castfloat(' + obj.__xva + ')';
            }else if(element.raw === '(array)'){
                t='casttableau(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' "' + element.raw + '"' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      <<<'EOT' ... EOT -> nowdoc('EOT' , `...`);
    */
    #traite_nowdoc( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.label === undefined && element.type === 'string'){
            obj=this.#traite_string( element , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                t+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' type non prévu "' + JSON.stringify( element ) + '"' ,"element" : element} ));
            }
        }else{
            let contenu=element.raw.replace( '<<<\'' + element.label + '\'' , '' ).replace( /`/g , '\\`' );
            let pos1=contenu.indexOf( element.label );
            contenu=contenu.substr( 0 , pos1 );
            if(contenu.substr( contenu.length - 2 , 2 ) === '\r\n'){
                contenu=contenu.substr( 0 , contenu.length - 2 );
            }else if(contenu.substr( contenu.length - 1 , 1 ) === '\n' || contenu.substr( contenu.length - 1 , 1 ) === '\r'){
                contenu=contenu.substr( 0 , contenu.length - 1 );
            }
            t+='nowdoc(\'' + element.label + '\',`' + contenu.replace( /`/g , '\\`' ) + '`)';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_encapsedpart( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.curly && element.curly === true){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'curly non traité "' + JSON.stringify( element ) + '"' ,"element" : element} ));
        }
        if(element.expression){
            if(element.expression.kind === 'string' && element.expression.isDoubleQuote === false){
                t+=element.expression.raw.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' );
            }else{
                obj=this.#traite_element( element.expression , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      <<<EOT ... EOT -> heredoc('EOT' , `...`);
    */
    #traite_encapsed( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        if(element.label === undefined && element.type === 'string'){
            if(element.value && Array.isArray( element.value )){
                t='encapsulé(' + element.raw + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'type non prévu "' + JSON.stringify( element ) + '"' ,"element" : element} ));
            }
        }else{
            let contenu=element.raw.replace( '<<<' + element.label , '' );
            let pos1=contenu.indexOf( element.label );
            contenu=contenu.substr( 0 , pos1 );
            if(contenu.substr( contenu.length - 2 , 2 ) === '\r\n'){
                contenu=contenu.substr( 0 , contenu.length - 2 );
            }else if(contenu.substr( contenu.length - 1 , 1 ) === '\n' || contenu.substr( contenu.length - 1 , 1 ) === '\r'){
                contenu=contenu.substr( 0 , contenu.length - 1 );
            }
            t+='heredoc(\'' + element.label + '\',`' + contenu.replace( /`/g , '\\`' ) + '`)';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      ++i , --i
    */
    #traite_pre( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let quoi='';
        obj=this.#traite_element( element.what , niveau , parent , tab_comm );
        if(obj.__xst === __xsu){
            quoi+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
        }
        if(element.type === '+'){
            if(element.what.kind === 'variable'){
                t+='++' + quoi;
            }else{
                t+='preinc(' + quoi + ')';
            }
        }else if(element.type === '-'){
            if(element.what.kind === 'variable'){
                t+='--' + quoi;
            }else{
                t+='predec(' + quoi + ')';
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      i++ , i--
    */
    #traite_post( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let quoi='';
        obj=this.#traite_element( element.what , niveau , parent , tab_comm );
        if(obj.__xst === __xsu){
            quoi+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
        }
        if(element.type === '+'){
            if(element.what.kind === 'variable' && (parent.kind === 'for' || parent.kind === 'assign')){
                t+=quoi + '++';
            }else{
                t+='postinc(' + quoi + ')';
            }
        }else if(element.type === '-'){
            if(element.what.kind === 'variable' && (parent.kind === 'for' || parent.kind === 'assign')){
                t+=quoi + '--';
            }else{
                t+='postdec(' + quoi + ')';
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_foreach( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let contenu='';
        let cle='';
        let source='';
        let valeur='';
        if(element.key){
            obj=this.#traite_element( element.key , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                cle+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'cle' ,"element" : element} ));
            }
        }else{
            cle='';
        }
        if(element.source){
            obj=this.#traite_element( element.source , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                source+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'source' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'source' ,"element" : element} ));
        }
        if(element.value){
            obj=this.#traite_element( element.value , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                valeur+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'value' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'value' ,"element" : element} ));
        }
        if(element.body){
            if(element.body.kind === 'expressionstatement' || element.body.kind === 'block'){
                obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }else{
                obj=this.#traite_element( element.body , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }
        }else if(element.kind === 'block'){
            obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'block' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ni body ni block' ,"element" : element} ));
        }
        if(cle === ''){
            t='boucleSurTableau(pourChaque( dans( ' + valeur + ' , ' + source + ' )),faire(' + contenu + '))';
        }else{
            t='boucleSurTableau(pourChaque( dans( ' + cle + ' , ' + valeur + ', ' + source + ' )),faire(' + contenu + '))';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_for( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let condition='';
        let contenu='';
        let increment='';
        let initialisation='';
        if(element.body){
            if(element.body.kind === 'expressionstatement' || element.body.kind === 'block'){
                obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }else{
                obj=this.#traite_element( element.body , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }
        }else if(element.kind === 'block'){
            obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'block'} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ni body ni block' ,"element" : element} ));
        }
        if(element.test){
            for( let i=0 ; i < element.test.length ; i++ ){
                obj=this.#traite_element( element.test[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    condition+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'test' ,"element" : element} ));
                }
            }
        }else{
            debugger;
        }
        if(element.increment){
            for( let i=0 ; i < element.increment.length ; i++ ){
                obj=this.#traite_element( element.increment[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    if(increment !== ''){
                        increment+=',';
                    }
                    increment+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'increment' ,"element" : element} ));
                }
            }
        }else{
            debugger;
        }
        if(element.init){
            for( let i=0 ; i < element.init.length ; i++ ){
                obj=this.#traite_element( element.init[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    initialisation+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'init' ,"element" : element} ));
                }
            }
        }else{
            debugger;
        }
        t='boucle(initialisation(' + initialisation + '),condition(' + condition + '),increment(' + increment + '),faire(' + contenu + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_do( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let condition='';
        let contenu='';
        if(element.test){
            obj=this.#traite_element( element.test , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                condition+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'test' ,"element" : element} ));
            }
        }else{
            debugger;
        }
        if(element.body){
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }else if(element.kind === 'block'){
            obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'block' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ni body ni block'} ));
        }
        t='faire_tant_que(faire(' + contenu + '),condition( ' + condition + ' ),)';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_while( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let condition='';
        let contenu='';
        if(element.test){
            obj=this.#traite_element( element.test , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                condition+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            debugger;
        }
        if(element.body){
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }else if(element.kind === 'block'){
            obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'block' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ni body ni block'} ));
        }
        t='tantQue(condition( ' + condition + ' ),faire(' + contenu + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_empty( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let express='';
        if(element.expression){
            obj=this.#traite_element( element.expression , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                express+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            debugger;
        }
        t+='appelf(nomf(empty),p(' + express + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_continue( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let level='';
        if(element.level){
            obj=this.#traite_element( element.level , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                level+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='continue(' + level + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_list( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let les_elements='';
        for( let i=0 ; i < element.items.length ; i++ ){
            if(element.items[i].kind === 'entry'){
                obj=this.#traite_element( element.items[i].value , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    les_elements+=',p(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else if(element.items[i].kind === 'noop'){
                les_elements+=',p()';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(les_elements !== ''){
            les_elements=les_elements.substr( 1 );
        }
        t+='liste(' + les_elements + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_case( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let valeur='';
        let contenu='';
        if(element.test){
            /* c'est un if ou un else if */
            obj=this.#traite_element( element.test , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                valeur+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            valeur='';
        }
        if(element.body){
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }else if(element.kind === 'block'){
            obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'block' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ni body ni block' ,"element" : element} ));
        }
        if(valeur === ''){
            t+='est(valeurNonPrevue(),faire(' + contenu + '))';
        }else{
            t+='est(valeur(' + valeur + '),faire(' + contenu + '))';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_switch( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let condition='';
        let les_cas='';
        if(element.body && element.body.children){
            for( let i=0 ; i < element.body.children.length ; i++ ){
                obj=this.#traite_element( element.body.children[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    les_cas+=',' + obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.test){
            /* c'est un if ou un else if */
            obj=this.#traite_element( element.test , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                condition+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'test' ,"element" : element} ));
            }
        }else{
            condition='';
            /* c'est un else */
        }
        t+='bascule(quand(' + condition + ')' + les_cas + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_if( element , niveau , parent , tab_comm , est_alternate ){
        let t='';
        let obj=null;
        let condition='';
        let c_est_un_sinon=false;
        let contenu='';
        let suite='';
        if(element.body === undefined){
            if(element.children){
                obj=this.#traite_ast0( element , niveau + 1 , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }else{
                if(element.expression){
                    obj=this.#traite_element( element.expression , niveau , element , tab_comm );
                    if(obj.__xst === __xsu){
                        contenu+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'expression' ,"element" : element} ));
                    }
                }else{
                    obj=this.#traite_element( element , niveau , element , tab_comm );
                    if(obj.__xst === __xsu){
                        contenu+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                    }
                }
            }
        }else if(element.body){
            if(element.body.children){
                obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }else if(element.body.kind === 'expressionstatement'){
                obj=this.#traite_element( element.body.expression , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'expressionstatement' ,"element" : element} ));
                }
            }else{
                obj=this.#traite_commentaires_debut( element.body , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
                obj=this.#traite_element( element.body , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    contenu+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
                }
            }
        }else{
            contenu='';
        }
        if(element.alternate){
            obj=this.#traite_if( element.alternate , niveau , element , tab_comm , true );
            if(obj.__xst === __xsu){
                suite+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'alternate' ,"element" : element} ));
            }
        }
        if(element.test){
            /* c'est un if ou un else if */
            obj=this.#traite_element( element.test , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                condition+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'test' ,"element" : element} ));
            }
        }else{
            c_est_un_sinon=true;
            /* c'est un else */
        }
        if(est_alternate !== undefined && est_alternate === true){
            /* sinon si ou sinon */
            if(c_est_un_sinon){
                t+='  sinon(';
                t+='    alors(' + contenu + ')';
                t+='  )';
            }else{
                t+='  sinonsi(';
                t+='    condition(' + condition + ')';
                t+='    alors(' + contenu + ')';
                t+='  )';
                t+=suite;
            }
        }else{
            t+='choix(';
            t+='  si(';
            t+='    condition(' + condition + ')';
            t+='    alors(' + contenu + ')';
            t+='  )';
            t+=suite;
            t+=')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_deftab( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let obj1=null;
        let les_elements='';
        let format_court='';
        for( let i=0 ; i < element.items.length ; i++ ){
            les_elements+=',';
            obj=this.#traite_commentaires_debut( element.items[i] , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                les_elements+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            if(element.items[i].kind === 'entry'){
                obj=this.#traite_element( element.items[i].value , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    if(element.items[i].key){
                        obj1=this.#traite_element( element.items[i].key , niveau , element , tab_comm );
                        if(obj1.__xst === __xsu){
                            les_elements+='(' + obj1.__xva + ',' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }else{
                        les_elements+='(' + obj.__xva + ')';
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            if(i === element.items.length - 1){
                les_elements+=this.#traite_commentaires_fin_tableau( element , niveau , parent , tab_comm );
            }
        }
        if(les_elements.length > 1){
            les_elements=les_elements.substr( 1 );
        }
        if(element.shortForm === true){
            format_court='format_court(),';
        }
        t+='defTab(' + format_court + les_elements + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_commentaires_fin_tableau( element , niveau , parent , tab_comm ){
        var t='';
        var position_de_debut_bloc=parent.loc.start.offset;
        var position_de_fin_bloc=parent.loc.end.offset;
        var position_de_debut_elem=element.loc.start.offset;
        var commentaires_a_retirer=[];
        for( var i=0 ; i < tab_comm.length ; i++ ){
            if(tab_comm[i].loc.end.offset < element.loc.end.offset && tab_comm[i].loc.start.offset > element.loc.start.offset){
                commentaires_a_retirer.push( i );
                var valeur=tab_comm[i].value;
                if(tab_comm[i].kind === 'commentline'){
                    if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                        t+='#( ' + valeur.trim().substr( 2 ).trim() + ')';
                    }else{
                        t+='#(' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).trim().substr( 2 ).trim() + ')';
                    }
                }else{
                    if(valeur.substr( 0 , 3 ) === '/**'){
                        valeur='/*#' + valeur.substr( 3 );
                    }
                    if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                        t+='#(' + valeur.substr( 2 , valeur.length - 4 ) + ')';
                    }else{
                        t+='#(' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).substr( 2 , valeur.length - 4 ) + ')';
                    }
                }
            }
        }
        for( var i=commentaires_a_retirer.length - 1 ; i >= 0 ; i-- ){
            tab_comm.splice( commentaires_a_retirer[i] , 1 );
        }
        return t;
    }
    /*
      =============================================================================================================
    */
    #traite_tableau( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let quoi='';
        let offset='';
        obj=this.#traite_element( element.what , niveau , parent , tab_comm );
        if(obj.__xst === __xsu){
            quoi+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
        }
        if(element.offset === false){
            offset='';
        }else{
            obj=this.#traite_element( element.offset , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                offset+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'offset' ,"element" : element} ));
            }
        }
        t=this.#simplifie_tableau( 'nomt(' + quoi + ')' , 'p(' + offset + ')' );
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #simplifie_tableau( nom_variable , parametres ){
        var t='';
        var obj_nom_tableau=this.__m_rev1.rev_tcm( nom_variable );
        if(obj_nom_tableau.__xst === __xsu){
            if(obj_nom_tableau.__xva.length === 2
                   && obj_nom_tableau.__xva[1][2] === 'c'
                   && obj_nom_tableau.__xva[1][4] === 0
                   && obj_nom_tableau.__xva[1][1].substr( 0 , 1 ) === '$'
            ){
                /*
                  cas $xxx
                */
                if(parametres.substr( 0 , 1 ) === ','){
                    parametres=parametres.substr( 1 );
                }
                var obj_indice_tableau=this.__m_rev1.rev_tcm( parametres );
                if(obj_indice_tableau.__xst === __xsu
                       && obj_indice_tableau.__xva.length === 3
                       && obj_indice_tableau.__xva[1][1] === 'p'
                       && obj_indice_tableau.__xva[1][2] === 'f'
                       && obj_indice_tableau.__xva[1][8] === 1
                       && obj_indice_tableau.__xva[2][2] === 'c'
                       && obj_indice_tableau.__xva[2][4] === 0
                ){
                    t=obj_nom_tableau.__xva[1][1] + '[' + obj_indice_tableau.__xva[2][1] + ']';
                }else{
                    t='tableau(nomt(' + nom_variable + ')' + parametres + ')';
                }
            }else if(obj_nom_tableau.__xva.length === 3
                   && obj_nom_tableau.__xva[2][2] === 'c'
                   && obj_nom_tableau.__xva[1][8] === 1
                   && obj_nom_tableau.__xva[1][1] === 'nomt'
            ){
                /*
                  cas nomt($xxx)
                */
                if(parametres.substr( 0 , 1 ) === ','){
                    parametres=parametres.substr( 1 );
                }
                var obj_indice_tableau=this.__m_rev1.rev_tcm( parametres );
                if(obj_indice_tableau.__xst === __xsu
                       && obj_indice_tableau.__xva.length === 3
                       && obj_indice_tableau.__xva[1][1] === 'p'
                       && obj_indice_tableau.__xva[1][2] === 'f'
                       && obj_indice_tableau.__xva[1][8] === 1
                       && obj_indice_tableau.__xva[2][2] === 'c'
                       && obj_indice_tableau.__xva[2][4] === 0
                ){
                    t=obj_nom_tableau.__xva[2][1] + '[' + obj_indice_tableau.__xva[2][1] + ']';
                }else{
                    t='tableau(' + nom_variable + '' + parametres + ')';
                }
            }else{
                /* si */
                if(nom_variable.substr( 0 , 4 ) === 'nomt'){
                    var ne_contient_que_des_nomt_et_p=true;
                    for( var i=1 ; i < obj_nom_tableau.__xva.length ; i++ ){
                        if(obj_nom_tableau.__xva[i][7] === 0){
                            if(obj_nom_tableau.__xva[i][2] === 'f' && (obj_nom_tableau.__xva[i][1] === 'nomt' || obj_nom_tableau.__xva[i][1] === 'p')){
                            }else{
                                ne_contient_que_des_nomt_et_p=false;
                            }
                        }
                    }
                    if(ne_contient_que_des_nomt_et_p === true){
                        t='tableau(' + nom_variable + '' + parametres + ')';
                    }else{
                        t='tableau(nomt(' + nom_variable + ')' + parametres + ')';
                    }
                }else{
                    t='tableau(nomt(' + nom_variable + ')' + parametres + ')';
                }
            }
        }else{
            t='tableau(nomt(' + nom_variable + ')' + parametres + ')';
        }
        return t;
    }
    /*
      =============================================================================================================
    */
    #traite_assignref( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let gauche='';
        let droite='';
        if(element.left && element.right){
            obj=this.#traite_element( element.left , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                gauche+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'gauche' ,"element" : element} ));
            }
            obj=this.#traite_element( element.right , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                droite+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'droite' ,"element" : element} ));
            }
            t+='affecte_reference(' + gauche + ',' + droite + ')';
            if(element.operator !== undefined){
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'opérateur non traité : "' + element.operator + '"' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'il manque un gauche ou un droite ' ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_assign( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let gauche='';
        let droite='';
        if(element.left && element.right){
            obj=this.#traite_element( element.left , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                gauche+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'gauche' ,"element" : element} ));
            }
            obj=this.#traite_element( element.right , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                droite+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'droite' ,"element" : element} ));
            }
            if(element.operator === '='){
                t+='affecte(' + gauche + ',' + droite + ')';
            }else{
                t+='affecteop( \'' + element.operator + '\' , ' + gauche + ' , ' + droite + ')';
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'il manque un gauche ou un droite' ,"element" : element} ));
        }
        if(parent && parent.kind && parent.kind === 'bin'){
            t='(' + t + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_unary( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let what='';
        if(element.what){
            obj=this.#traite_element( element.what , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                what+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'what' ,"element" : element} ));
        }
        switch (element.type){
            case '!' : t+='non(' + what + ')';
                break;
            case '-' :
                if(this.__m_rev1.est_num( what )){
                    t+='-' + what;
                }else if(element.what.kind === 'variable'){
                    t+='-' + what;
                }else{
                    t+='moins(' + what + ')';
                }
                break;
                
            case '+' :
                if(this.__m_rev1.est_num( what )){
                    t+='+' + what;
                }else if(element.what.kind === 'variable'){
                    t+='+' + what;
                }else{
                    t+='plus(' + what + ')';
                }
                break;
                
            default:
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'non traité : "' + element.type + '"' ,"element" : element} ));
                break;
                
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_bin( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let gauche='';
        let droite='';
        if(element.left){
            obj=this.#traite_element( element.left , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                gauche+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'gauche' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'gauche' ,"element" : element} ));
        }
        if(element.right){
            obj=this.#traite_element( element.right , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                if(element.type === 'instanceof'){
                    if(element.right.kind === 'name'){
                        if(element.right.name.indexOf( '\\' ) < 0){
                            droite+=element.right.name;
                        }else{
                            droite+=obj.__xva;
                        }
                    }else{
                        droite+=obj.__xva;
                    }
                }else{
                    droite+=obj.__xva;
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'droite' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'droite' ,"element" : element} ));
        }
        switch (element.type){
            case '&&' : t+='et(' + gauche + ',' + droite + ')';
                break;
            case 'and' : t+='et(' + gauche + ',' + droite + ')';
                break;
            case 'or' : t+='ou(' + gauche + ',' + droite + ')';
                break;
            case '||' : t+='ou(' + gauche + ',' + droite + ')';
                break;
            case '>' : t+='sup(' + gauche + ',' + droite + ')';
                break;
            case '<' : t+='inf(' + gauche + ',' + droite + ')';
                break;
            case '<=' : t+='infeg(' + gauche + ',' + droite + ')';
                break;
            case '>=' : t+='supeg(' + gauche + ',' + droite + ')';
                break;
            case '+' : t+='plus(' + gauche + ',' + droite + ')';
                break;
            case '-' : t+='moins(' + gauche + ',' + droite + ')';
                break;
            case '*' : t+='mult(' + gauche + ',' + droite + ')';
                break;
            case '/' : t+='divi(' + gauche + ',' + droite + ')';
                break;
            case '%' : t+='modulo(' + gauche + ',' + droite + ')';
                break;
            case '^' : t+='xou_binaire(' + gauche + ',' + droite + ')';
                break;
            case '<<' : t+='decal_gauche(' + gauche + ',' + droite + ')';
                break;
            case '>>' : t+='decal_droite(' + gauche + ',' + droite + ')';
                break;
            case '&' : t+='et_binaire(' + gauche + ',' + droite + ')';
                break;
            case '??' : t+='??(' + gauche + ',' + droite + ')';
                break;
            case '.' : t+='concat(' + gauche + ',' + droite + ')';
                break;
            case '===' : t+='egalstricte(' + gauche + ',' + droite + ')';
                break;
            case '!==' : t+='diffstricte(' + gauche + ',' + droite + ')';
                break;
            case '!=' : t+='diff(' + gauche + ',' + droite + ')';
                break;
            case '==' : t+='egal(' + gauche + ',' + droite + ')';
                break;
            case '|' : t+='ou_binaire(' + gauche + ',' + droite + ')';
                break;
            case 'instanceof' :
                if(gauche.substr( 0 , 4 ) === 'non('){
                    /*
                      cas if(!$a instanceof $b){
                      il y a un bug dans ce parseur car instance a une priorité supérieure à !(not)
                    */
                    var valeur_non='';
                    /*
                      var tableau1=this.__m_rev1.txt_en_tableau(gauche);
                      var o=functionToArray2(tableau1.__xva,false,true,'');
                    */
                    var o=this.__m_rev1.rev_tm( gauche );
                    if(o.__xst === __xsu){
                        var obj1=this.__m_rev1.matrice_vers_source_rev1( o.__xva , 1 , false , 2 );
                        if(obj1.__xst === __xsu){
                            valeur_non=obj1.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                    t+='non(instance_de(' + valeur_non + ',' + droite + '))';
                }else{
                    t+='instance_de(' + gauche + ',' + droite + ')';
                }
                break;
                
            default:
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'non traité : "' + element.type + '"' ,"element" : element} ));
                break;
                
        }
        if(gauche.substr( 0 , 7 ) === 'concat(' && element.type !== '.'){
            /*
              afr
              cas $b.$c+$d : ça donne avec ce parseur : 
              plus( concat( $b , $c ) , $d), 
              mais il faudrait que ça donne 
              concat( $b , plus( $c , $d )), 
              En attendant, on considère que la vraie façon d'écrire ceci en php est 
              $b.($c+$d)
              et dans ce dernier cas, ce parseur fonctionne
            */
            /*
              var tableau1=this.__m_rev1.txt_en_tableau(t);
              var o=functionToArray2(tableau1.__xva,false,true,'');
            */
            var o=this.__m_rev1.rev_tm( t );
            if(o.__xst === __xsu){
                /*
                  afr je ne ma rappelle plus pourquoi j'ai mis un déverminage
                */
                /* debugger; */
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(t.substr( 0 , 14 ) === 'concat(concat('
               || t.substr( 0 , 6 ) === 'et(et('
               || t.substr( 0 , 6 ) === 'ou(ou('
               || t.substr( 0 , 10 ) === 'plus(plus('
               || t.substr( 0 , 12 ) === 'moins(moins('
               || t.substr( 0 , 22 ) === 'ou_binaire(ou_binaire('
        ){
            /*
              var tableau1=this.__m_rev1.txt_en_tableau(t);
              var o=functionToArray2(tableau1.__xva,false,true,'');
            */
            var o=this.__m_rev1.rev_tm( t );
            if(o.__xst === __xsu){
                var nouveauTableau=this.__m_rev1.baisser_le_niveau_et_supprimer( o.__xva , 2 , 0 );
                var obj1=this.__m_rev1.matrice_vers_source_rev1( nouveauTableau , 0 , true , 1 );
                if(obj1.__xst === __xsu){
                    t=obj1.__xva;
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_chaine_raw( valeur_raw , element ){
        let t='';
        var rv=valeur_raw;
        var contenu=rv.substr( 1 , rv.length - 2 );
        /*
          \\x     => ""   , ""    => '\\'   .'x'
          aa\\x   => "aa" , ""    => 'aa'.'\\' .'x'
          aa\\xaa => "aa" , "aa"  => 'aa\\' .'x' . 'aa'
        */
        var probablement_dans_une_regex=contenu.substr( 0 , 1 ) === '/' && contenu.substr( contenu.length - 1 , 1 ) === '/' ? ( true ) : ( false );
        if(rv.substr( 0 , 1 ) === '\''
                   && contenu.indexOf( '\'' ) < 0
                   && contenu.indexOf( '\\' ) < 0
               || rv.substr( 0 , 1 ) === '"'
                   && contenu.indexOf( '"' ) < 0
                   && contenu.indexOf( '\\' ) < 0
        ){
            /*
              si c'est une chaine "simple" cad ne contenant ni terminateur ni antislash
            */
            t+=valeur_raw;
        }else{
            /*
            */
            var l01=rv.length - 2;
            /*
              la chaine reçue dans le "raw" inclue le " ou les ' en début et fin 
              on les retire pour l'analyse, donc on part de l'avant dernier caractère 
              et on redescend jusqu'à l'indice 1
            */
            var nouvelle_chaine='';
            var i=l01;
            for( i=l01 ; i > 0 ; i-- ){
                if(rv.substr( i , 1 ) === '\\'){
                    /* on remonte à partir du dernier caractère */
                    if(i === l01){
                        /* si le dernier caractère est un \ et que l'avant dernier est aussi un \, pas de problème */
                        if(rv.length > 2 && l01 > 1 && i > 1 && rv.substr( i - 1 , 1 ) === '\\'){
                            nouvelle_chaine='\\\\';
                            i--;
                        }else{
                            /* position du \ en dernier */
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'une chaine ne doit pas contenir un simple \\ en dernière position  ' ,"element" : element} ));
                        }
                    }else{
                        if(i > 1){
                            /*
                              si on est avant le dernier caractère;
                            */
                            if(rv.substr( i - 1 , 1 ) === '\\'){
                                nouvelle_chaine='\\\\' + nouvelle_chaine;
                                i--;
                            }else{
                                if(rv.substr( i + 1 , 1 ) === 'r'
                                       || rv.substr( i + 1 , 1 ) === 'n'
                                       || rv.substr( i + 1 , 1 ) === 't'
                                       || rv.substr( i + 1 , 1 ) === '\''
                                       || rv.substr( i + 1 , 1 ) === '.'
                                       || rv.substr( i + 1 , 1 ) === '-'
                                       || rv.substr( i + 1 , 1 ) === 'A'
                                       || rv.substr( i + 1 , 1 ) === '?'
                                       || rv.substr( i + 1 , 1 ) === 'd'
                                       || rv.substr( i + 1 , 1 ) === '/'
                                       || rv.substr( i + 1 , 1 ) === 'x'
                                       || rv.substr( i + 1 , 1 ) === 'o'
                                       || rv.substr( i + 1 , 1 ) === 'b'
                                       || rv.substr( i + 1 , 1 ) === 'B'
                                       || rv.substr( i + 1 , 1 ) === '"'
                                       || rv.substr( i + 1 , 1 ) === '$'
                                       || rv.substr( i + 1 , 1 ) === 'w'
                                       || rv.substr( i + 1 , 1 ) === 's'
                                       || rv.substr( i + 1 , 1 ) === 'z'
                                       || rv.substr( i + 1 , 1 ) === 'Z'
                                       || rv.substr( i + 1 , 1 ) === '('
                                       || rv.substr( i + 1 , 1 ) === ')'
                                       || rv.substr( i + 1 , 1 ) === '['
                                       || rv.substr( i + 1 , 1 ) === ']'
                                ){
                                    if(rv.substr( i + 1 , 1 ) === 'r'
                                           || rv.substr( i + 1 , 1 ) === 't'
                                           || rv.substr( i + 1 , 1 ) === 'n'
                                           || rv.substr( i + 1 , 1 ) === '\''
                                               && rv.substr( 0 , 1 ) === "'"
                                           || rv.substr( i + 1 , 1 ) === '"'
                                               && rv.substr( 0 , 1 ) === '"'
                                    ){
                                        nouvelle_chaine='\\' + nouvelle_chaine;
                                    }else{
                                        nouvelle_chaine='\\\\' + nouvelle_chaine;
                                    }
                                }else{
                                    if(probablement_dans_une_regex === false){
                                        if(i > 0 && rv.substr( i - 1 , 1 ) !== '\\'){
                                            nouvelle_chaine='\\\\' + nouvelle_chaine;
                                        }else{
                                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + rv.substr( i + 1 , 1 ) + '" après un backslash' ,"element" : element} ));
                                        }
                                    }else{
                                        /*
                                          commenté car $regex='/\'|\\\\(?=[\'\\\\]|$)|(?<=\\\\)\\\/'; ne passait plus 
                                          return(this.#astphp_le({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()+'après un backslash il ne peut y avoir que les caractères spéciaux et non pas "' + (rv.substr(i + 1,1)) + '" ' ,"element" : element}));
                                        */
                                        if(i > 0 && rv.substr( i - 1 , 1 ) !== '\\'){
                                            nouvelle_chaine='\\\\' + nouvelle_chaine;
                                        }else{
                                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + rv.substr( i + 1 , 1 ) + '" après un backslash' ,"element" : element} ));
                                        }
                                    }
                                }
                            }
                        }else{
                            /*
                              si on est au premier caractère;
                            */
                            if(rv.substr( i , 1 ) === '\\'){
                                var c=nouvelle_chaine.substr( 0 , 1 );
                                if(c === '.'
                                       || c === '0'
                                       || c === '-'
                                       || c === 'd'
                                       || c === 'f'
                                       || c === '/'
                                       || c === 'x'
                                       || c === 'o'
                                       || c === 'b'
                                       || c === 's'
                                       || c === 'v'
                                       || c === '\\'
                                       || c === ']'
                                       || c === '['
                                       || c === '$'
                                       || c === '"'
                                       || c === 'N'
                                       || c === '{'
                                           && rv.substr( 0 , 1 ) === '\''
                                ){
                                    nouvelle_chaine='\\\\' + nouvelle_chaine;
                                }else if(c === 'r'
                                       || c === 'n'
                                       || c === 't'
                                       || c === '\''
                                           && rv.substr( 0 , 1 ) === '\''
                                       || c === '"'
                                           && rv.substr( 0 , 1 ) === '"'
                                ){
                                    nouvelle_chaine='\\' + nouvelle_chaine;
                                }else{
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + c + '" après un backslash' ,"element" : element} ));
                                }
                            }else{
                                nouvelle_chaine=rv.substr( i , 1 ) + nouvelle_chaine;
                            }
                        }
                    }
                }else if(rv.substr( i , 1 ) === '\'' && rv.substr( 0 , 1 ) === '\''){
                    if(i >= 2 && rv.substr( i - 1 , 1 ) === '\\'){
                        nouvelle_chaine='\\\'' + nouvelle_chaine;
                        i--;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'il doit y avoir un backslash avant un apostrophe ' ,"element" : element} ));
                    }
                }else if(rv.substr( i , 1 ) === '"' && rv.substr( 0 , 1 ) === '"'){
                    if(i >= 2 && rv.substr( i - 1 , 1 ) === '\\'){
                        nouvelle_chaine='\\"' + nouvelle_chaine;
                        i--;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'il doit y avoir un backslash avant un guillemet ' ,"element" : element} ));
                    }
                }else{
                    nouvelle_chaine=rv.substr( i , 1 ) + nouvelle_chaine;
                }
            }
            t+=rv.substr( 0 , 1 ) + nouvelle_chaine + rv.substr( 0 , 1 );
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      en php, une chaine 'bla \ bla' avec un antislash au milieu est accepté 
      mais pour les fichiers rev, c'est pas excellent, 
      on accepte les \r \n \t \x \o , \" et \' \\ donc on fait une 
      petite analyse et on remonte une erreur si on n'est pas dans ces cas
      =============================================================================================================
    */
    #traite_string( element , niveau , parent , tab_comm ){
        return(this.#traite_chaine_raw( element.raw , element ));
    }
    /*
      =============================================================================================================
    */
    #traite_parametres( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let les_arguments='';
        let les_arguments_courts='';
        for( let i=0 ; i < element.arguments.length ; i++ ){
            t+=',';
            if(les_arguments_courts !== ''){
                les_arguments_courts+=',';
            }
            obj=this.#traite_element( element.arguments[i] , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                t+='p(' + obj.__xva + ')';
                les_arguments_courts+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'arguments' ,"element" : element} ));
            }
        }
        return({"__xst" : __xsu ,"__xva" : t ,"les_arguments_courts" : les_arguments_courts});
    }
    /*
      =============================================================================================================
    */
    #traite_arguments( element , niveau , parent , tab_comm , type ){
        let t='';
        let obj=null;
        let les_arguments='';
        let valeur_par_defaut='';
        let type_argument='';
        let nom_argument='';
        let nullable='';
        for( let i=0 ; i < element.arguments.length ; i++ ){
            t+=',';
            valeur_par_defaut='';
            if(element.arguments[i].value){
                obj=this.#traite_element( element.arguments[i].value , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    valeur_par_defaut=', valeur_defaut( ' + obj.__xva + ' )';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'arguments' ,"element" : element} ));
                }
            }
            /* on traite le variadic dans #traite_element. */
            obj=this.#traite_element( element.arguments[i].name , niveau , element.arguments[i] , tab_comm );
            if(obj.__xst === __xsu){
                nom_argument=obj.__xva;
                type_argument='';
                nullable='';
                /* pas encore traité */
                if(element.arguments[i].hasOwnProperty( 'flags' ) && element.arguments[i].flags !== 0){
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'flag != 0' ,"element" : element} ));
                }
                if(element.arguments[i].hasOwnProperty( 'nullable' ) && element.arguments[i].nullable !== false){
                    nullable='?';
                }
                if(element.arguments[i].hasOwnProperty( 'readonly' ) && element.arguments[i].readonly !== false){
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'readonly != false' ,"element" : element} ));
                }
                if(element.arguments[i].hasOwnProperty( 'type' ) && element.arguments[i].type !== null){
                    if(element.arguments[i].type.kind === 'name'){
                        if(element.arguments[i].type.name.indexOf( '\\' ) >= 0){
                            type_argument=',type_argument(\'' + nullable + element.arguments[i].type.name.replace( /\\/g , '\\\\' ) + '\')';
                        }else{
                            type_argument=',type_argument(' + nullable + element.arguments[i].type.name + ')';
                        }
                    }else{
                        obj=this.#traite_element( element.arguments[i].type , niveau , element , tab_comm );
                        if(obj.__xst === __xsu){
                            type_argument=',type_argument(' + nullable + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' "' + JSON.stringify( element.arguments[i].type ) + '"' ,"element" : element} ));
                        }
                    }
                }
                if(element.arguments[i].byref === true){
                    t+='adresseArgument(' + nom_argument + valeur_par_defaut + type_argument + ')';
                }else{
                    t+='argument(' + nom_argument + valeur_par_defaut + type_argument + ')';
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(t.length > 0){
            t=t.substr( 1 );
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_property( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let nullable='';
        if(element.nullable){
            nullable='?';
        }
        if(element.readonly){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'readonly' ,"element" : element} ));
        }
        if(element.name){
            obj=this.#traite_element( element.name , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                t+=nullable + '$' + obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'name' ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_propertystatement( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let visibility='';
        let statique='';
        let valeur_defaut='';
        let type_variable='';
        if(element.isStatic){
            statique='_statique';
        }
        if(element.visibility === 'private'){
            visibility='variable_privée' + statique;
        }else if(element.visibility === 'protected'){
            visibility='variable_protégée' + statique;
        }else if(element.visibility === 'public'){
            visibility='variable_publique' + statique;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'visibility "' + element.visibility + '"' ,"element" : element} ));
        }
        if(element.properties){
            for( let i=0 ; i < element.properties.length ; i++ ){
                valeur_defaut='';
                type_variable='';
                if(element.properties[i].type){
                    var nullable='';
                    if(element.properties[i].nullable === true){
                        nullable='?';
                    }
                    if(element.properties[i].type.kind === 'name' || element.properties[i].type.kind === 'typereference'){
                        if(element.properties[i].type.name.indexOf( '\\' ) >= 0){
                            type_variable='type_variable(\'' + nullable + element.properties[i].type.name.replace( /\\/g , '\\\\' ) + '\'),';
                        }else{
                            type_variable='type_variable(' + nullable + element.properties[i].type.name + '),';
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'propertie "' + element.properties[i].type.kind + '" ' ,"element" : element} ));
                    }
                }
                if(element.properties[i].value){
                    obj=this.#traite_element( element.properties[i].value , niveau , element , tab_comm );
                    if(obj.__xst === __xsu){
                        valeur_defaut=',valeur_defaut(' + obj.__xva + ')';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'value' ,"element" : element} ));
                    }
                }
                if(element.properties[i].name && element.properties[i].name.kind === 'identifier'){
                    t+=visibility + '(' + type_variable + '$' + element.properties[i].name.name + valeur_defaut + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'identifier' ,"element" : element} ));
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_method( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let visibility='';
        let nom_methode='';
        let les_arguments='';
        let contenu='';
        let statique='';
        let type_retour='';
        let abstraite='';
        let nullable='';
        let finale='';
        if(element.nullable){
            nullable='?';
        }
        if(element.isFinal){
            finale='finale()';
        }
        if(element.isStatic){
            statique=',statique()';
        }
        if(element.isReadonly){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'readonly' ,"element" : element} ));
        }
        if(element.isAbstract){
            abstraite='abstraite()';
        }
        if(element.byref){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'byref' ,"element" : element} ));
        }
        if(element.type){
            if(element.type.kind === 'typereference'){
                type_retour='type_retour(\'' + nullable + element.type.name.replace( /\\/g , '\\\\' ) + '\')';
            }else if(element.type.kind === 'name'){
                type_retour='type_retour(\'' + nullable + element.type.name.replace( /\\/g , '\\\\' ) + '\')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'type' ,"element" : element} ));
            }
        }
        obj=this.#traite_arguments( element , niveau , parent , tab_comm , 'argument' );
        if(obj.__xst === __xsu){
            les_arguments+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'arguments' ,"element" : element} ));
        }
        if(element.body){
            if(element.body.kind === undefined){
                element.body.kind='body';
            }
            if(Array.isArray( element.body )){
                element.body.children=element.body;
            }
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                if(obj.__xva !== ''){
                    contenu=',contenu(' + obj.__xva + ')';
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }
        if(element.visibility === 'public'){
            visibility+=',publique()';
        }else if(element.visibility === 'private'){
            visibility+=',privée()';
        }else if(element.visibility === 'protected'){
            visibility+=',protégée()';
        }else if(element.visibility === ''){
            visibility+='';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'visibility "' + element.visibility + '" ' ,"element" : element} ));
        }
        obj=this.#traite_element( element.name , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            nom_methode+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nom' ,"element" : element} ));
        }
        t+='méthode(definition( nomm(' + nom_methode + ') ' + finale + abstraite + statique + les_arguments + visibility + type_retour + ')' + contenu + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_class( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let nom_class='';
        let contenu='';
        let etend='';
        let implemente='';
        let abstraite='';
        let finale='';
        /*
          isAnonymous: false
          isFinal: false
          isReadonly: false
        */
        obj=this.#traite_element( element.name , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            nom_class+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'name' ,"element" : element} ));
        }
        if(element.body){
            if(element.body.kind === undefined){
                element.body.kind='body';
            }
            if(Array.isArray( element.body )){
                element.body.children=element.body;
            }
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }
        if(element.extends){
            obj=this.#traite_element( element.extends , niveau , element , tab_comm );
            if(obj.__xst === __xsu){
                etend+=',étend(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'extends' ,"element" : element} ));
            }
        }
        if(element.implements){
            for( let i=0 ; i < element.implements.length ; i++ ){
                implemente+=',';
                obj=this.#traite_element( element.implements[i] , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    implemente=',implemente(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'implements' ,"element" : element} ));
                }
            }
        }
        if(element.isAbstract){
            abstraite=',abstraite()';
        }
        if(element.isAnonymous){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'anonymous' ,"element" : element} ));
        }
        if(element.isFinal){
            finale=',finale()';
        }
        if(element.isReadonly){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'readonly' ,"element" : element} ));
        }
        t+='definition_de_classe( nom_classe(' + nom_class + ') ' + finale + abstraite + implemente + etend + ', contenu( ' + contenu + ' ))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_function( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        let contenu='';
        let nom_fonction='';
        let les_arguments='';
        let type_retour='';
        obj=this.#traite_element( element.name , niveau , element , tab_comm );
        if(obj.__xst === __xsu){
            nom_fonction+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nom fonction' ,"element" : element} ));
        }
        obj=this.#traite_arguments( element , niveau , parent , tab_comm , 'argument' );
        if(obj.__xst === __xsu){
            les_arguments+=obj.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'arguments' ,"element" : element} ));
        }
        if(element.body){
            obj=this.#traite_ast0( element.body , niveau + 1 , element , tab_comm );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'body' ,"element" : element} ));
            }
        }
        if(element.type){
            if(element.type.kind === 'typereference'){
                type_retour='type_retour(\'' + element.type.name.replace( /\\/g , '\\\\' ) + '\')';
            }else if(element.type.kind === 'name'){
                type_retour='type_retour(\'' + element.type.name.replace( /\\/g , '\\\\' ) + '\')';
            }else{
                debugger;
                obj=this.#traite_element( element.type , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    type_retour='type_retour(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        t+='fonction(';
        t+='definition(';
        t+='nom(' + nom_fonction + ')';
        t+=les_arguments;
        t+=type_retour;
        t+='),';
        t+='contenu(\n';
        t+=contenu;
        t+=')';
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_commentaires_fin( element , niveau , parent , tab_comm ){
        var t='';
        if(!element.hasOwnProperty( 'loc' )){
            return t;
        }
        if(!element.loc.hasOwnProperty( 'end' )){
            return t;
        }
        var position_de_fin=element.loc.end.offset;
        var commentaires_a_retirer=[];
        for( var i=0 ; i < tab_comm.length ; i++ ){
            if(tab_comm[i].loc.end.offset <= position_de_fin){
                commentaires_a_retirer.push( i );
                var valeur=tab_comm[i].value;
                if(tab_comm[i].kind === 'commentline'){
                    if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                        t+='#( ' + valeur.trim().substr( 2 ).trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                    }else{
                        t+='#( ' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).trim().substr( 2 ).trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                    }
                }else{
                    if(valeur.substr( 0 , 3 ) === '/**'){
                        valeur='/*#' + valeur.substr( 3 );
                    }
                    t+='#(' + valeur.substr( 2 , valeur.length - 4 ) + ')';
                }
            }
        }
        for( var i=commentaires_a_retirer.length - 1 ; i >= 0 ; i-- ){
            tab_comm.splice( commentaires_a_retirer[i] , 1 );
        }
        return t;
    }
    /*
      =============================================================================================================
    */
    #traite_commentaires_debut( element , niveau , parent , tab_comm ){
        var t='';
        try{
            var position_de_debut=element.loc.start.offset;
            var commentaires_a_retirer=[];
            for( var i=0 ; i < tab_comm.length ; i++ ){
                if(tab_comm[i].loc.end.offset <= position_de_debut){
                    commentaires_a_retirer.push( i );
                    var valeur=tab_comm[i].value;
                    if(tab_comm[i].kind === 'commentline'){
                        if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                            t+='#( ' + valeur.trim().substr( 2 ).trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                        }else{
                            t+='#(' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).trim().substr( 2 ).trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                        }
                    }else{
                        if(valeur.substr( 0 , 3 ) === '/**'){
                            valeur='/*#' + valeur.substr( 3 );
                        }
                        if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                            t+='#(' + valeur.substr( 2 , valeur.length - 4 ) + ')';
                        }else{
                            t+='#(' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).substr( 2 , valeur.length - 4 ) + ')';
                        }
                    }
                }
            }
            for( var i=commentaires_a_retirer.length - 1 ; i >= 0 ; i-- ){
                tab_comm.splice( commentaires_a_retirer[i] , 1 );
            }
        }catch(e){
            if(parent){
                return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2( e ) + 'cas non prévu pour enfant de "' + JSON.stringify( parent ) + '"' ,"element" : parent});
            }
            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2( e ) + ' cas non prévu'});
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_commentaires_dans_bloc( element , niveau , parent , tab_comm ){
        var t='';
        var position_de_debut_bloc=parent.loc.start.offset;
        var position_de_fin_bloc=parent.loc.end.offset;
        var position_de_debut_elem=element.loc.start.offset;
        var commentaires_a_retirer=[];
        for( var i=0 ; i < tab_comm.length ; i++ ){
            if(tab_comm[i].loc.start.offset >= position_de_debut_bloc
                   && tab_comm[i].loc.end.offset <= position_de_fin_bloc
                   && tab_comm[i].loc.end.offset < position_de_debut_elem
            ){
                commentaires_a_retirer.push( i );
                var valeur=tab_comm[i].value;
                if(tab_comm[i].kind === 'commentline'){
                    if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                        t+='#( ' + valeur.trim().substr( 2 ).trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                    }else{
                        t+='#(' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).trim().substr( 2 ).trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                    }
                }else{
                    if(valeur.substr( 0 , 3 ) === '/**'){
                        valeur='/*#' + valeur.substr( 3 );
                    }
                    if(((valeur.match( /\(/g ) || []).length) === ((valeur.match( /\)/g ) || []).length)){
                        t+='#(' + valeur.substr( 2 , valeur.length - 4 ) + ')';
                    }else{
                        t+='#(' + valeur.replace( /\(/g , '[' ).replace( /\)/g , ']' ).substr( 2 , valeur.length - 4 ) + ')';
                    }
                }
            }
        }
        for( var i=commentaires_a_retirer.length - 1 ; i >= 0 ; i-- ){
            tab_comm.splice( commentaires_a_retirer[i] , 1 );
        }
        return t;
    }
    /*
      =============================================================================================================
      0300
    */
    #traite_element( element , niveau , parent , tab_comm ){
        if(element === undefined){
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'element non défini ' ,"element" : parent} ));
        }
        let t='';
        let obj=null;
        if(parent.kind === 'if'){
            t+=this.#traite_commentaires_dans_bloc( parent , niveau , parent , tab_comm );
        }else{
            obj=this.#traite_commentaires_debut( element , niveau , parent , tab_comm );
            if(obj.__xst === __xsu){
                t+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : parent ? ( null ) : ( parent )} ));
            }
        }
        switch (element.kind){
            case 'magic' : t+=element.raw;
                break;
            case 'nullkeyword' : t+='null';
                break;
            case 'boolean' :
                if(element.raw === 'false'){
                    t+='faux';
                }else{
                    t+='vrai';
                }
                break;
                
            case 'number' : t+=element.value;
                break;
            case 'name' :
                /* console.log('pour name, parent.kind='+parent.kind) */
                if(parent.kind === 'array'
                       || parent.kind === 'bin'
                       || parent.kind === 'assign'
                       || parent.kind === 'unary'
                       || parent.kind === 'retif'
                       || parent.kind === 'constant'
                       || parent.kind === 'call'
                ){
                    if(parent.type === 'instanceof'){
                        t+='\'' + element.name.replace( /\\/g , '\\\\' ) + '\'';
                    }else{
                        if(element.name.indexOf( '\\' ) >= 0){
                            t+='valeur_constante(\'' + element.name.replace( /\\/g , '\\\\' ) + '\')';
                        }else{
                            t+=element.name;
                        }
                    }
                }else{
                    if(element.name.indexOf( '\\' ) >= 0){
                        t+='\'' + element.name.replace( /\\/g , '\\\\' ) + '\'';
                    }else{
                        t+=element.name;
                    }
                }
                break;
                
            case 'identifier' :
                /* par exemple un nom de fonction à appeler */
                if(parent.kind === 'parameter'){
                    if(parent.variadic === true){
                        t+=(t === '' ? ( '' ) : ( ',' )) + '...$' + element.name;
                    }else{
                        t+=(t === '' ? ( '' ) : ( ',' )) + '$' + element.name;
                    }
                }else{
                    t+=element.name;
                }
                break;
                
            case 'variable' : t+='$' + element.name;
                break;
            case 'noop' : t+='';
                break;
            case 'selfreference' : t+='self';
                break;
            case 'staticreference' : t+='static';
                break;
            case 'parentreference' : t+='parent';
                break;
            case 'halt' :
                if(element.after && element.after !== ''){
                    t+='__halt_compiler(\'' + element.after.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                }else{
                    t+='__halt_compiler()';
                }
                break;
                
            case 'string' :
                obj=this.#traite_string( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'string type non prévu "' + JSON.stringify( element ) + '"' ,"element" : element} ));
                }
                break;
                
            case 'offsetlookup' :
                obj=this.#traite_tableau( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'offsetlookup' ,"element" : element} ));
                }
                break;
                
            case 'call' :
                obj=this.#traite_call( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'call' ,"element" : element} ));
                }
                break;
                
            case 'include' :
                obj=this.#traite_include( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'include' ,"element" : element} ));
                }
                break;
                
            case 'print' :
                obj=this.#traite_print( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'print' ,"element" : element} ));
                }
                break;
                
            case 'echo' :
                obj=this.#traite_echo( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'echo' ,"element" : element} ));
                }
                break;
                
            case 'call' :
                obj=this.#traite_call( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'call' ,"element" : element} ));
                }
                break;
                
            case 'assign' :
                obj=this.#traite_assign( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'assign' ,"element" : element} ));
                }
                break;
                
            case 'function' :
                obj=this.#traite_function( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'function' ,"element" : element} ));
                }
                break;
                
            case 'unset' :
                obj=this.#traite_unset( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'unset' ,"element" : element} ));
                }
                break;
                
            case 'isset' :
                obj=this.#traite_isset( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'isset' ,"element" : element} ));
                }
                break;
                
            case 'inline' :
                obj=this.#traite_inline( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'inline' ,"element" : element} ));
                }
                break;
                
            case 'bin' :
                obj=this.#traite_bin( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'bin' ,"element" : element} ));
                }
                break;
                
            case 'unary' :
                obj=this.#traite_unary( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'unary' ,"element" : element} ));
                }
                break;
                
            case 'array' :
                obj=this.#traite_deftab( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'array' ,"element" : element} ));
                }
                break;
                
            case 'retif' :
                obj=this.#traite_retif( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'retif' ,"element" : element} ));
                }
                break;
                
            case 'usegroup' :
                obj=this.#traite_usegroup( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'usegroup' ,"element" : element} ));
                }
                break;
                
            case 'propertylookup' :
                obj=this.#traite_propertylookup( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'propertylookup' ,"element" : element} ));
                }
                break;
                
            case 'staticlookup' :
                obj=this.#staticlookup( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'staticlookup' ,"element" : element} ));
                }
                break;
                
            case 'new' :
                obj=this.#traite_new( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'new' ,"element" : element} ));
                }
                break;
                
            case 'try' :
                obj=this.#traite_try( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'try' ,"element" : element} ));
                }
                break;
                
            case 'catch' :
                obj=this.#traite_catch( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'catch' ,"element" : element} ));
                }
                break;
                
            case 'return' :
                obj=this.#traite_return( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'return' ,"element" : element} ));
                }
                break;
                
            case 'exit' :
                obj=this.#traite_exit( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'exit' ,"element" : element} ));
                }
                break;
                
            case 'silent' :
                obj=this.#traite_silent( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'silent' ,"element" : element} ));
                }
                break;
                
            case 'while' :
                obj=this.#traite_while( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'while' ,"element" : element} ));
                }
                break;
                
            case 'do' :
                obj=this.#traite_do( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'do' ,"element" : element} ));
                }
                break;
                
            case 'for' :
                obj=this.#traite_for( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'for' ,"element" : element} ));
                }
                break;
                
            case 'foreach' :
                obj=this.#traite_foreach( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'foreach' ,"element" : element} ));
                }
                break;
                
            case 'post' :
                obj=this.#traite_post( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'post' ,"element" : element} ));
                }
                break;
                
            case 'pre' :
                obj=this.#traite_pre( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'pre' ,"element" : element} ));
                }
                break;
                
            case 'encapsedpart' :
                obj=this.#traite_encapsedpart( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'encapsedpart' ,"element" : element} ));
                }
                break;
                
            case 'encapsed' :
                obj=this.#traite_encapsed( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'encapsed' ,"element" : element} ));
                }
                break;
                
            case 'cast' :
                obj=this.#traite_cast( element , niveau , parent , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'cast' ,"element" : element} ));
                }
                break;
                
            case 'break' :
                t+='';
                obj=this.#traite_break( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'break' ,"element" : element} ));
                }
                break;
                break;
                
            case 'if' :
                obj=this.#traite_if( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'if' ,"element" : element} ));
                }
                break;
                
            case 'switch' :
                obj=this.#traite_switch( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'switch' ,"element" : element} ));
                }
                break;
                
            case 'case' :
                obj=this.#traite_case( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'case' ,"element" : element} ));
                }
                break;
                
            case 'class' :
                obj=this.#traite_class( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'class' ,"element" : element} ));
                }
                break;
                
            case 'propertystatement' :
                obj=this.#traite_propertystatement( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'propertystatement' ,"element" : element} ));
                }
                break;
                
            case 'property' :
                obj=this.#traite_property( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'property' ,"element" : element} ));
                }
                break;
                
            case 'method' :
                obj=this.#traite_method( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'method' ,"element" : element} ));
                }
                break;
                
            case 'global' :
                obj=this.#traite_global( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'global' ,"element" : element} ));
                }
                break;
                
            case 'list' :
                obj=this.#traite_list( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'list' ,"element" : element} ));
                }
                break;
                
            case 'continue' :
                obj=this.#traite_continue( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'continue' ,"element" : element} ));
                }
                break;
                
            case 'empty' :
                obj=this.#traite_empty( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'empty' ,"element" : element} ));
                }
                break;
                
            case 'assignref' :
                obj=this.#traite_assignref( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'assignref' ,"element" : element} ));
                }
                break;
                
            case 'nowdoc' :
                obj=this.#traite_nowdoc( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nowdoc' ,"element" : element} ));
                }
                break;
                
            case 'declare' :
                obj=this.#traite_declare( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'declare' ,"element" : element} ));
                }
                break;
                
            case 'namespace' :
                obj=this.#traite_namespace( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'namespace' ,"element" : element} ));
                }
                break;
                
            case 'interface' :
                obj=this.#traite_interface( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'interface' ,"element" : element} ));
                }
                break;
                
            case 'typereference' :
                obj=this.#traite_typereference( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'typereference' ,"element" : element} ));
                }
                break;
                
            case 'throw' :
                obj=this.#traite_throw( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'throw' ,"element" : element} ));
                }
                break;
                
            case 'static' :
                obj=this.#traite_static( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'static' ,"element" : element} ));
                }
                break;
                
            case 'staticvariable' :
                obj=this.#traite_staticvariable( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'staticvariable' ,"element" : element} ));
                }
                break;
                
            case 'closure' :
                obj=this.#traite_closure( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'closure' ,"element" : element} ));
                }
                break;
                
            case 'classconstant' :
                obj=this.#traite_classconstant( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'classconstant' ,"element" : element} ));
                }
                break;
                
            case 'constant' :
                obj=this.#traite_constant( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'constant' ,"element" : element} ));
                }
                break;
                
            case 'clone' :
                obj=this.#traite_clone( element , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'clone' ,"element" : element} ));
                }
                break;
                
            default:
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '💥💥💥 non prévu kind = "' + element.kind + '"' ,"element" : element} ));
                
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_ast0( element , niveau , parent , tab_comm ){
        let t='';
        let obj=null;
        const espaces=CRLF + '   '.repeat( niveau );
        switch (element.kind){
            case 'program' : 
            case 'body' : 
            case 'block' :
                /* ========================== */
                for( let i=0 ; i < element.children.length ; i++ ){
                    if(element.kind === 'block' || element.kind === 'body'){
                        t+=this.#traite_commentaires_dans_bloc( element.children[i] , niveau , parent , tab_comm );
                    }else{
                        obj=this.#traite_commentaires_debut( element.children[i] , niveau , parent , tab_comm );
                        if(obj.__xst === __xsu){
                            t+=obj.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                    switch (element.children[i].kind){
                        case 'expressionstatement' :
                            obj=this.#traite_element( element.children[i].expression , niveau , element , tab_comm );
                            if(obj.__xst === __xsu){
                                t+=espaces + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'expressionstatement' ,"element" : element} ));
                            }
                            break;
                            
                        default:
                            obj=this.#traite_element( element.children[i] , niveau , element , tab_comm );
                            if(obj.__xst === __xsu){
                                t+=espaces + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'default' ,"element" : element} ));
                            }
                            break;
                            
                    }
                }
                break;
                
            case 'expressionstatement' :
                /* pour les if($condition) $a=1;, il y a une expression à la place d'un bloc ou d'un body */
                obj=this.#traite_element( element.expression , niveau , element , tab_comm );
                if(obj.__xst === __xsu){
                    t+=espaces + obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'expressionstatement' ,"element" : element.expression} ));
                }
                break;
                
            default:
                debugger;
                /* ========================== */
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'default' ,"element" : element} ));
                break;
                
        }
        t+=this.#traite_commentaires_fin( element , niveau , parent , tab_comm );
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    traite_ast( ast_de_php , options_traitement ){
        if(options_traitement !== undefined){
            this.#options_traitement=options_traitement;
        }
        let t='';
        if(ast_de_php.kind === 'program'){
            let niveau=0;
            var obj=this.#traite_ast0( ast_de_php , niveau , null , ast_de_php.comments );
            if(obj.__xst === __xsu){
                if(obj.__xva.substr( 0 , 4 ) !== 'php('){
                    obj.__xva='php(' + obj.__xva + ')';
                }
                t+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'ce n\'est pas un programme'} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
}
export{c_astphpparseur_vers_rev1 as c_astphpparseur_vers_rev1};