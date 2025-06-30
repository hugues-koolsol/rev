"use strict";
const CRLF="\r\n";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const NBESPACESREV=3;

import {c_astsql_parseur_cst_vers_rev1} from './c_astsql_parseur_cst_vers_rev1.js';

/*
  =====================================================================================================================
  conversion d'un AST produit par https://github.com/nikic/PHP-Parser en rev
  point d'entrée = traite_ast_nikic
  todo
  $c=$a<=>$b; // echo "a" <=> "b"; // -1 , ,,,, echo "a" <=> "a"; // 0 ,,,,, echo "b" <=> "a"; // 1
  =====================================================================================================================
*/
class c_astphpnikic_vers_rev1{
    #nom_de_la_variable='';
    #options_traitement={};
    #tableau_de_html_dans_php_a_convertir=[];
    #globale_tableau_des_js3=[];
    __m_rev1=null;
    __module_html1=null;
    objet_conversion_ast_sql_parseur_cst_vers_rev1=null;
    /*
      =============================================================================================================
      le seul argument est pour l'instant le nom de la variable qui est déclarée
    */
    constructor( nom_de_la_variable , module_rev , module_html ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.#tableau_de_html_dans_php_a_convertir=[];
        this.#globale_tableau_des_js3=[];
        this.__m_rev1=module_rev;
        this.__module_html1=module_html;
        this.objet_conversion_ast_sql_parseur_cst_vers_rev1=new c_astsql_parseur_cst_vers_rev1( 'objet_conversion_ast_sql_parseur_cst_vers_rev1' , module_rev );
    }
    /*
      =============================================================================================================
    */
    #astphp_le( o ){
        if(o.hasOwnProperty( 'element' )
               && o.element
               && o.element.hasOwnProperty( 'attributes' )
               && o.element.attributes.hasOwnProperty( 'startFilePos' )
               && o.element.attributes.hasOwnProperty( 'endFilePos' )
        ){
            o.plage=[o.element.attributes.startFilePos,o.element.attributes.endFilePos];
        }
        this.__m_rev1.empiler_erreur( o );
        return o;
    }
    /*
      =============================================================================================================
    */
    /*
    #recupNomOperateur( s ){
        switch (s){
            case 'typeof' : return 'Typeof';
            case 'instanceof' : return 'Instanceof';
            case '++' : return 'incr1';
            case '--' : return 'decr1';
            case '+' : return 'plus';
            case '-' : return 'moins';
            case '*' : return 'mult';
            case '/' : return 'divi';
            case '==' : return 'egal';
            case '===' : return 'egalstricte';
            case '!=' : return 'diff';
            case '!==' : return 'diffstricte';
            case '>' : return 'sup';
            case '<' : return 'inf';
            case '>=' : return 'supeg';
            case '<=' : return 'infeg';
            case '!' : return 'non';
            case '&&' : return 'et';
            case '||' : return 'ou';
            case '&' : return 'et_binaire';
            case '|' : return 'ou_binaire';
            default:
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + s + '" ' ,"element" : element} ));
                
        }
    }
    */
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Eval( element , niveau ){
        var t='';
        t+='appelf(';
        t+='nomf(eval)';
        var obj=this.#php_traite_Stmt_Expression( element.expr , false , element );
        if(obj.__xst === __xsu){
            t+=',p(' + obj.__xva + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Include( element , niveau ){
        var t='';
        t+='appelf(';
        if(element.type === 1){
            t+='nomf(include)';
        }else if(element.type === 2){
            t+='nomf(include_once)';
        }else if(element.type === 3){
            t+='nomf(require)';
        }else if(element.type === 4){
            t+='nomf(require_once)';
        }
        var obj=this.#php_traite_Stmt_Expression( element.expr , false , element );
        if(obj.__xst === __xsu){
            t+=',p(' + obj.__xva + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_Switch( element , niveau , dansFor , de_racine , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var leTest='';
        var tabSw=[];
        if(element.cond){
            var obj=this.#php_traite_Stmt_Expression( element.cond , niveau , false , element , options_traitement );
            if(obj.__xst === __xsu){
                leTest=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.cases){
            if(element.cases.length > 0){
                var i=0;
                for( i=0 ; i < element.cases.length ; i++ ){
                    var leSw=element.cases[i];
                    var laCondition='';
                    var lesInstructions='';
                    var les_commentaires=this.#ajouteCommentairesAvant( leSw , niveau + 3 );
                    if(leSw.cond){
                        var obj=this.#php_traite_Stmt_Expression( leSw.cond , niveau , false , element );
                        if(obj.__xst === __xsu){
                            laCondition=obj.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }else{
                        laCondition=null;
                    }
                    if(leSw.stmts){
                        if(leSw.stmts.length > 0){
                            var obj1=this.#traite_ast_nikic0( leSw.stmts , niveau + 3 , element , false , false , options_traitement );
                            if(obj1.__xst === __xsu){
                                lesInstructions+=obj1.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                    }
                    tabSw.push( [laCondition,lesInstructions,les_commentaires] );
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='\n' + esp0 + 'bascule(';
        t+='\n' + esp0 + esp1 + 'quand(' + leTest + ')';
        var i=0;
        for( i=0 ; i < tabSw.length ; i++ ){
            t+=',\n' + esp0 + esp1 + '' + tabSw[i][2];
            t+=',\n' + esp0 + esp1 + 'est(';
            if(tabSw[i][0] === null){
                t+='\n' + esp0 + esp1 + esp1 + 'valeurNonPrevue()';
            }else{
                t+='\n' + esp0 + esp1 + esp1 + 'valeur(' + tabSw[i][0] + ')';
            }
            t+=',\n' + esp0 + esp1 + esp1 + 'faire(\n' + tabSw[i][1];
            t+='\n' + esp0 + esp1 + esp1 + ')';
            t+='\n' + esp0 + esp1 + ')';
        }
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_TryCatch( element , niveau , dansFor , de_racine , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var contenu='';
        if(element.stmts && element.stmts.length > 0){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false , false , options_traitement );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='\n' + esp0 + 'essayer(';
        t+='\n' + esp0 + esp1 + 'faire(\n';
        t+=contenu;
        t+='\n' + esp0 + esp1 + '),';
        if(element.catches && element.catches.length > 0){
            var numc=0;
            for( numc=0 ; numc < element.catches.length ; numc++ ){
                contenu='';
                var lesTypesErreurs='';
                if(element.catches[numc].types && element.catches[numc].types.length > 0){
                    var i=0;
                    for( i=0 ; i < element.catches[numc].types.length ; i++ ){
                        if(element.catches[numc].types[i].nodeType === 'Name'){
                            lesTypesErreurs+=element.catches[numc].types[i].name + ' ';
                        }else if(element.catches[numc].types[i].nodeType === "Name_FullyQualified"){
                            lesTypesErreurs+='\\' + element.catches[numc].types[i].name + ' ';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
                var leNomErreur='';
                if(element.catches[numc].var && element.catches[numc].var.nodeType === "Expr_Variable"){
                    leNomErreur='$' + element.catches[numc].var.name;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
                if(element.catches[numc].stmts && element.catches[numc].stmts.length > 0){
                    niveau+=3;
                    var obj=this.#traite_ast_nikic0( element.catches[numc].stmts , niveau , element , false , false , options_traitement );
                    niveau-=3;
                    if(obj.__xst === __xsu){
                        contenu+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }
                t+='\n' + esp0 + esp1 + 'sierreur(';
                if(lesTypesErreurs === ''){
                    t+='\n' + esp0 + esp1 + esp1 + 'err(' + leNomErreur + ')';
                }else{
                    if(lesTypesErreurs.indexOf( '\\' ) >= 0){
                        t+='\n' + esp0 + esp1 + esp1 + 'err(\'' + lesTypesErreurs.replace( /\\/g , '\\\\' ) + '\',' + leNomErreur + ')';
                    }else{
                        t+='\n' + esp0 + esp1 + esp1 + 'err(' + lesTypesErreurs + ',' + leNomErreur + ')';
                    }
                }
                t+='\n' + esp0 + esp1 + esp1 + 'faire(\n';
                t+=contenu;
                t+='\n' + esp0 + esp1 + esp1 + ')';
                t+='\n' + esp0 + esp1 + ')';
            }
        }
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_Use( element , niveau ){
        var t='';
        var i=0;
        for( i=0 ; i < element.uses.length ; i++ ){
            if("UseItem" === element.uses[i].nodeType){
                if(element.uses[i].name.nodeType === "Name"){
                    t+='appelf(nomf(use),p(\'' + element.uses[i].name.name.replace( /\\/g , '\\\\' ) + '\'))';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
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
    #php_traite_Expr_Isset( element , niveau ){
        var t='';
        var nomFonction='isset';
        var lesArguments='';
        if(element.vars && element.vars.length > 0){
            var i=0;
            for( i=0 ; i < element.vars.length ; i++ ){
                var obj=this.#php_traite_Stmt_Expression( element.vars[i] , niveau , false , element );
                if(obj.__xst === __xsu){
                    lesArguments+=',p(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        t+='appelf(nomf(' + nomFonction + ')' + lesArguments + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Unset( element , niveau ){
        var t='';
        var nomFonction='unset';
        var lesArguments='';
        if(element.vars && element.vars.length > 0){
            var i=0;
            for( i=0 ; i < element.vars.length ; i++ ){
                var obj=this.#php_traite_Stmt_Expression( element.vars[i] , niveau , false , element );
                if(obj.__xst === __xsu){
                    lesArguments+=',p(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        t+='appelf(nomf(' + nomFonction + ')' + lesArguments + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_FuncCall( element , niveau ){
        var t='';
        var nomFonction='';
        var prefixStatic='';
        if(element.nodeType === "Expr_StaticCall"){
            if(element.class.nodeType === 'Name'){
                prefixStatic=element.class.name + '::';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(element.name){
            if(element.name.nodeType === 'Name'){
                nomFonction=prefixStatic + element.name.name;
            }else if(element.name.nodeType === "Expr_ArrayDimFetch"){
                var obj=this.#php_traite_Expr_ArrayDimFetch( element.name , niveau , 0 );
                if(obj.__xst === __xsu){
                    nomFonction=prefixStatic + obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else if("Identifier" === element.name.nodeType){
                if(prefixStatic.indexOf( '\\' ) >= 0){
                    nomFonction='\'' + prefixStatic.replace( /\\/g , '\\\\' ) + element.name.name + '\'';
                }else{
                    nomFonction=prefixStatic + element.name.name;
                }
            }else if(element.name.nodeType === "Expr_Variable"){
                nomFonction=prefixStatic + '$' + element.name.name;
            }else if(element.name.nodeType === "Name_FullyQualified"){
                /* nomFonction=prefixStatic + 'qualification_totale(' + element.name.name + ')'; */
                nomFonction=prefixStatic + '\'\\\\' + element.name.name.replace( /\\/ , '\\\\' ) + '\'';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var lesArgumentsCourts='';
        var lesArguments='';
        var tabArgs=[];
        if(element.args && element.args.length > 0){
            var i=0;
            for( i=0 ; i < element.args.length ; i++ ){
                var comm=this.#ajouteCommentairesAvant( element.args[i] , niveau );
                if(comm !== ''){
                    comm+=',';
                }
                var obj=this.#php_traite_Stmt_Expression( element.args[i] , niveau , false , element );
                if(obj.__xst === __xsu){
                    lesArguments+=',p(' + comm + obj.__xva + ')';
                    tabArgs.push( [obj.__xva,element.args[i].value.nodeType] );
                    lesArgumentsCourts+=',' + obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if('cst' === nomFonction){
            t+='cst(' + lesArgumentsCourts.substr( 1 ) + ')';
        }else if('sql_inclure_source' === nomFonction){
            t+='sql_inclure_source(' + lesArgumentsCourts.substr( 1 ) + ')';
        }else if('sql_inclure_reference' === nomFonction){
            t+='sql_inclure_reference(' + lesArgumentsCourts.substr( 1 ) + ')';
        }else if('sql_dans_php' === nomFonction){
            if(lesArgumentsCourts.substr( 0 , 1 ) === ','){
                lesArgumentsCourts=lesArgumentsCourts.substr( 1 );
            }
            var source=lesArgumentsCourts.substr( 1 , lesArgumentsCourts.length - 2 );
            var source=source.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' );

            let options_pour_le_parseur={
                "dialect" : "sqlite" ,
                 /* These are optional: */
                "includeSpaces" : true ,
                 /* Adds spaces/tabs */
                "includeNewlines" : true ,
                 /* Adds newlines */
                "includeComments" : true ,
                 /* Adds comments */
                "includeRange" : true ,
                 /* Adds source code location data */
            };
            
            
            source=source.replace( /\:/g , '___deux___points___' );
            
            var ast_de_sql=window.sql_parser_cst2.parse( source , options_pour_le_parseur );
            
            
            let obj1=this.objet_conversion_ast_sql_parseur_cst_vers_rev1.traite_ast_de_sql_parseur_cst( ast_de_sql , {} );
            if(obj1.__xst === __xsu){
                t+='sql(' + obj1.__xva.replace(/___deux___points___/g,':') + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else if('htmlDansPhp' === nomFonction){
            if(lesArgumentsCourts.substr( 0 , 1 ) === ','){
                lesArgumentsCourts=lesArgumentsCourts.substr( 1 );
            }
            var source=lesArgumentsCourts.substr( 1 , lesArgumentsCourts.length - 2 );
            var source=source.replace( /\\\'/g , '\'' ).replace( /\\\\/g , '\\' );
            var obj=this.__module_html1.TransformHtmlEnRev( source , 0 );
            if(obj.__xst === __xsu){
                t+='html_dans_php(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else if('concat' === nomFonction){
            if(lesArgumentsCourts.substr( 0 , 1 ) === ','){
                lesArgumentsCourts=lesArgumentsCourts.substr( 1 );
            }
            t+='' + nomFonction + '(' + lesArgumentsCourts + ')';
        }else{
            t+='appelf(nomf(' + nomFonction + ')' + lesArguments + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_printOuEcho( element , niveau , nomFonction ){
        var t='';
        var lesArguments='';
        if(element.exprs){
            var i=0;
            for( i=0 ; i < element.exprs.length ; i++ ){
                var obj=this.#php_traite_Stmt_Expression( element.exprs[i] , niveau , false , element );
                if(obj.__xst === __xsu){
                    lesArguments+=',p(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(element.expr){
            var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , false , element );
            if(obj.__xst === __xsu){
                lesArguments+=',p(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='appelf(nomf(' + nomFonction + ')' + lesArguments + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_print( element , niveau ){
        return(this.#php_traite_printOuEcho( element , niveau , 'print' ));
    }
    /*
      =============================================================================================================
    */
    #php_traite_echo( element , niveau ){
        return(this.#php_traite_printOuEcho( element , niveau , 'echo' ));
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_ClassMethod( element , niveau , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var lesArguments='';
        var contenu='';
        var type_retour='';
        t+='\n' + esp0 + 'méthode(';
        t+='\n' + esp0 + esp1 + 'definition(';
        if(element.name && "Identifier" === element.name.nodeType){
            t+='\n' + esp0 + esp1 + esp1 + 'nomm(' + element.name.name + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.params && element.params.length > 0){
            var i=0;
            for( i=0 ; i < element.params.length ; i++ ){
                var comm=this.#ajouteCommentairesAvant( element.params[i] , niveau );
                if(comm !== ''){
                    comm+=',';
                }
                if(element.params[i].var && "Expr_Variable" === element.params[i].var.nodeType){
                    if(element.params[i].byRef && element.params[i].byRef === true){
                        lesArguments+='\n' + esp0 + esp1 + esp1 + 'adresseArgument(';
                    }else{
                        lesArguments+='\n' + esp0 + esp1 + esp1 + 'argument(';
                    }
                    lesArguments+=comm;
                    if(element.params[i].variadic && element.params[i].variadic === true){
                        lesArguments+='...$' + element.params[i].var.name;
                    }else{
                        lesArguments+='$' + element.params[i].var.name;
                    }
                    if(element.params[i].default){
                        var obj=this.#php_traite_Stmt_Expression( element.params[i].default , niveau , false , element );
                        if(obj.__xst === __xsu){
                            lesArguments+=',valeur_defaut(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                    if(element.params[i].type){
                        var obj=this.#php_traite_Stmt_Expression( element.params[i].type , niveau , false , element );
                        if(obj.__xst === __xsu){
                            if(obj.__xva.indexOf( '\\' ) >= 0){
                                lesArguments+=',type_argument(\'' + obj.__xva.replace( /\\/g , '\\\\' ) + '\')';
                            }else{
                                lesArguments+=',type_argument(' + obj.__xva + ')';
                            }
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                    lesArguments+=')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(element.returnType){
            if(element.returnType.nodeType === 'Name'){
                type_retour=element.returnType.name;
            }else if(element.returnType.nodeType === 'Identifier'){
                type_retour=element.returnType.name;
            }else if(element.returnType.nodeType === 'NullableType'){
                if(element.returnType.type.nodeType === 'Identifier'){
                    type_retour='?' + element.returnType.type.name;
                }else if(element.returnType.type.nodeType === 'Name'){
                    type_retour='?' + element.returnType.type.name;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+=lesArguments;
        if(element.flags === 33){
            t+='\n' + esp0 + esp1 + esp1 + 'finale()';
            t+='\n' + esp0 + esp1 + esp1 + 'publique()';
        }else if(element.flags === 18){
            t+='\n' + esp0 + esp1 + esp1 + 'abstraite()';
            t+='\n' + esp0 + esp1 + esp1 + 'protégée()';
        }else if(element.flags === 12){
            t+='\n' + esp0 + esp1 + esp1 + 'privée()';
            t+='\n' + esp0 + esp1 + esp1 + 'statique()';
        }else if(element.flags === 9){
            t+='\n' + esp0 + esp1 + esp1 + 'publique()';
            t+='\n' + esp0 + esp1 + esp1 + 'statique(),';
        }else if(element.flags === 4){
            t+='\n' + esp0 + esp1 + esp1 + 'privée()';
        }else if(element.flags === 2){
            t+='\n' + esp0 + esp1 + esp1 + 'protégée()';
        }else if(element.flags === 1){
            t+='\n' + esp0 + esp1 + esp1 + 'publique()';
        }else if(element.flags === 0){
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.flags ,"element" : element} ));
        }
        if(type_retour !== ''){
            t+='\n' + esp0 + esp1 + 'type_retour(\'' + type_retour.replace( /\\/g , '\\\\' ) + '\')';
        }
        t+='\n' + esp0 + esp1 + '),';
        if(element.stmts && element.stmts.length > 0){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false , false , options_traitement );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(contenu !== ''){
            t+='\n' + esp0 + esp1 + 'contenu(' + contenu + ')';
        }
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_Function( element , niveau ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var nomFonction='';
        var lesArguments='';
        var contenu='';
        var type_retour='';
        if(element.name && element.name.nodeType === "Identifier"){
            nomFonction=element.name.name;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.params && element.params.length > 0){
            var i=0;
            for( i=0 ; i < element.params.length ; i++ ){
                var comm=this.#ajouteCommentairesAvant( element.params[i] , niveau );
                if(comm !== ''){
                    comm+=',';
                }
                if(element.params[i].var && "Expr_Variable" === element.params[i].var.nodeType){
                    if(element.params[i].byRef && element.params[i].byRef === true){
                        lesArguments+=',\n' + esp0 + esp1 + esp1 + 'adresseArgument(' + comm + '$' + element.params[i].var.name;
                        if(element.params[i].default){
                            var obj=this.#php_traite_Stmt_Expression( element.params[i].default , niveau , false , element );
                            if(obj.__xst === __xsu){
                                lesArguments+=',valeur_defaut(' + obj.__xva + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        if(element.params[i].type){
                            var obj=this.#php_traite_Stmt_Expression( element.params[i].type , niveau , false , element );
                            if(obj.__xst === __xsu){
                                if(obj.__xva.indexOf( '\\' ) >= 0){
                                    lesArguments+=',type_argument(\'' + obj.__xva.replace( /\\/g , '\\\\' ) + '\')';
                                }else{
                                    lesArguments+=',type_argument(' + obj.__xva + ')';
                                }
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        lesArguments+=')';
                    }else{
                        if(element.params[i].variadic && element.params[i].variadic === true){
                            lesArguments+=',\n' + esp0 + esp1 + esp1 + 'argument(' + comm + '...$' + element.params[i].var.name;
                        }else{
                            lesArguments+=',\n' + esp0 + esp1 + esp1 + 'argument(' + comm + '$' + element.params[i].var.name;
                        }
                        if(element.params[i].default){
                            var obj=this.#php_traite_Stmt_Expression( element.params[i].default , niveau , false , element );
                            if(obj.__xst === __xsu){
                                lesArguments+=',valeur_defaut(' + obj.__xva + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        if(element.params[i].type){
                            var obj=this.#php_traite_Stmt_Expression( element.params[i].type , niveau , false , element );
                            if(obj.__xst === __xsu){
                                if(obj.__xva.indexOf( '\\' ) >= 0){
                                    lesArguments+=',type_argument(\'' + obj.__xva.replace( /\\/g , '\\\\' ) + '\')';
                                }else{
                                    lesArguments+=',type_argument(' + obj.__xva + ')';
                                }
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        lesArguments+=')';
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(element.returnType){
            if(element.returnType.nodeType === 'Name'){
                type_retour=element.returnType.name;
            }else if(element.returnType.nodeType === 'Identifier'){
                type_retour=element.returnType.name;
            }else if(element.returnType.nodeType === 'NullableType'){
                if(element.returnType.type.nodeType === 'Identifier'){
                    type_retour='?' + element.returnType.type.name;
                }else if(element.returnType.type.nodeType === 'Name'){
                    type_retour='?' + element.returnType.type.name;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(element.stmts && element.stmts.length > 0){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='\n' + esp0 + 'fonction(';
        t+='\n' + esp0 + esp1 + 'definition(';
        t+='\n' + esp0 + esp1 + esp1 + 'nom(' + nomFonction + ')';
        t+=lesArguments;
        if(type_retour !== ''){
            t+='\n' + esp0 + esp1 + ',type_retour(\'' + type_retour.replace( /\\/g , '\\\\' ) + '\')';
        }
        t+='\n' + esp0 + esp1 + '),';
        t+='\n' + esp0 + esp1 + 'contenu(\n';
        t+=contenu;
        t+='\n' + esp0 + esp1 + ')';
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_Static( element , niveau ){
        var t='';
        if(element.vars && element.vars.length > 0){
            for( var i=0 ; i < element.vars.length ; i++ ){
                var obj=this.#php_traite_Stmt_Expression( element.vars[i] , niveau , false , element );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Clone( element , niveau ){
        var t='';
        if(element.expr && element.expr.nodeType === "Expr_Variable"){
            t+='appelf(nomf(clone),p($' + element.expr.name + '))';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Closure( element , niveau ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var lesArguments='';
        var les_utilisations='';
        var contenu='';
        var type_retour='';
        var type_argument='';
        var statique='';
        if(element.params && element.params.length > 0){
            var i=0;
            for( i=0 ; i < element.params.length ; i++ ){
                type_argument='';
                if(element.params[i].type){
                    if(element.params[i].type.nodeType == 'Name' || element.params[i].type.nodeType == 'Identifier'){
                        type_argument=',type_argument( \'' + element.params[i].type.name.replace( /\\/g , '\\\\' ) + '\' )';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }
                if(element.params[i].attrGroups && element.params[i].attrGroups.length > 0){
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
                if(element.params[i].hooks && element.params[i].hooks.length > 0){
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
                if(element.params[i].flags !== 0){
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
                if(element.params[i].var && "Expr_Variable" === element.params[i].var.nodeType){
                    if(element.params[i].byRef && element.params[i].byRef === true){
                        lesArguments+=',\n' + esp0 + esp1 + esp1 + 'adresseArgument($' + element.params[i].var.name;
                        if(element.params[i].default){
                            var obj=this.#php_traite_Stmt_Expression( element.params[i].default , niveau , false , element );
                            if(obj.__xst === __xsu){
                                lesArguments+=',valeur_defaut(' + obj.__xva + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        lesArguments+=')';
                    }else{
                        if(element.params[i].variadic && element.params[i].variadic === true){
                            lesArguments+=',\n' + esp0 + esp1 + esp1 + 'argument(...$' + element.params[i].var.name;
                        }else{
                            lesArguments+=',\n' + esp0 + esp1 + esp1 + 'argument($' + element.params[i].var.name;
                        }
                        if(element.params[i].default){
                            var obj=this.#php_traite_Stmt_Expression( element.params[i].default , niveau , false , element );
                            if(obj.__xst === __xsu){
                                lesArguments+=',valeur_defaut(' + obj.__xva + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        lesArguments+=type_argument + ')';
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
            if(lesArguments.length > 1){
                lesArguments=lesArguments.substr( 1 );
            }
        }
        if(element.uses && element.uses.length > 0){
            var i=0;
            for( i=0 ; i < element.uses.length ; i++ ){
                if(element.uses[i].var && "Expr_Variable" === element.uses[i].var.nodeType){
                    if(element.uses[i].byRef && element.uses[i].byRef === true){
                        les_utilisations+=',\n' + esp0 + esp1 + esp1 + 'utilise_par_adresse($' + element.uses[i].var.name;
                        if(element.uses[i].default){
                            var obj=this.#php_traite_Stmt_Expression( element.uses[i].default , niveau , false , element );
                            if(obj.__xst === __xsu){
                                les_utilisations+=',valeur_defaut(' + obj.__xva + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        les_utilisations+=')';
                    }else{
                        if(element.uses[i].variadic && element.uses[i].variadic === true){
                            les_utilisations+=',\n' + esp0 + esp1 + esp1 + 'utilise(...$' + element.uses[i].var.name;
                        }else{
                            les_utilisations+=',\n' + esp0 + esp1 + esp1 + 'utilise($' + element.uses[i].var.name;
                        }
                        if(element.uses[i].default){
                            var obj=this.#php_traite_Stmt_Expression( element.uses[i].default , niveau , false , element );
                            if(obj.__xst === __xsu){
                                les_utilisations+=',valeur_defaut(' + obj.__xva + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }
                        les_utilisations+=')';
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(element.stmts && element.stmts.length > 0){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false );
            if(obj.__xst === __xsu){
                contenu+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(element.static !== false){
            statique='statique()';
        }
        if(element.returnType){
            var obj=this.#php_traite_Stmt_Expression( element.returnType , niveau , false , element );
            if(obj.__xst === __xsu){
                type_retour+=',type_retour(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t='cloturée(';
        t+=statique;
        t+=lesArguments;
        t+=type_retour;
        t+=les_utilisations;
        t+='\n' + esp0 + esp1 + 'contenu(\n';
        t+=contenu;
        t+='\n' + esp0 + esp1 + ')';
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      traite un "new"
    */
    #php_traite_Expr_New( element , niveau ){
        var t='';
        if(element.class){
            var qualif_totale=false;
            var nomClasse='';
            if(element.class.nodeType === "Name"){
                nomClasse=element.class.name;
            }else if(element.class.nodeType === "Name_FullyQualified"){
                nomClasse=element.class.name;
                qualif_totale=true;
            }else if(element.class.nodeType === "Expr_Variable"){
                var obj=this.#php_traite_Stmt_Expression( element.class , niveau , false , element );
                if(obj.__xst === __xsu){
                    nomClasse=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            var lesArgumentsDeLaClass='';
            if(element.args){
                var i=0;
                for( i=0 ; i < element.args.length ; i++ ){
                    var obj=this.#php_traite_Stmt_Expression( element.args[i] , niveau , false , element );
                    if(obj.__xst === __xsu){
                        lesArgumentsDeLaClass+=',p(' + obj.__xva + ')';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }
            }
            /*#
              la doc dit :        
              If there are no arguments to be passed to the class's constructor, parentheses after the class name may be omitted. 
              Moi, je mets systématiquement des parenthèses !
            
              if(lesArgumentsDeLaClass===''){
                  lesArgumentsDeLaClass=',sans_arguments()';
              }
            */
            if(nomClasse.indexOf( '\\' ) >= 0){
                if(qualif_totale === true){
                    /* t+='nouveau(appelf(nomf(qualification_totale(\'' + (nomClasse.replace(/\\/g,'\\\\')) + '\'))' + lesArgumentsDeLaClass + ')),'; */
                    t+='nouveau(appelf(nomf(\'\\\\' + nomClasse.replace( /\\/g , '\\\\' ) + '\')' + lesArgumentsDeLaClass + ')),';
                }else{
                    if(qualif_totale === true){
                        /* t+='nouveau[appelf[nomf[qualification_totale\'' + [nomClasse.replace[/\\/g,'\\\\']] + '\']]' + lesArgumentsDeLaClass + ']],'; */
                        t+='nouveau(appelf(nomf(\'\\\\' + nomClasse.replace( /\\/g , '\\\\' ) + '\')' + lesArgumentsDeLaClass + ')),';
                    }else{
                        t+='nouveau(appelf(nomf(\'' + nomClasse.replace( /\\/g , '\\\\' ) + '\')' + lesArgumentsDeLaClass + ')),';
                    }
                }
            }else{
                if(qualif_totale === true){
                    t+='nouveau(appelf(nomf(\'\\\\' + nomClasse + '\')' + lesArgumentsDeLaClass + ')),';
                }else{
                    t+='nouveau(appelf(nomf(' + nomClasse + ')' + lesArgumentsDeLaClass + ')),';
                }
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_MethodCall( element , niveau ){
        var t='';
        var nomFonction='';
        var lelement='';
        var lesArguments='';
        if(element.var){
            var obj=this.#php_traite_Stmt_Expression( element.var , niveau , false , element );
            if(obj.__xst === __xsu){
                lelement+='element(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.name){
            if(element.name.nodeType === "Identifier"){
                nomFonction=element.name.name;
            }else{
                var obj=this.#php_traite_Stmt_Expression( element.name , niveau , false , element );
                if(obj.__xst === __xsu){
                    nomFonction+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var lesArguments='';
        if(element.args && element.args.length > 0){
            var i=0;
            for( i=0 ; i < element.args.length ; i++ ){
                var comm=this.#ajouteCommentairesAvant( element.args[i] , niveau );
                if(comm !== ''){
                    comm+=',';
                }
                var obj=this.#php_traite_Stmt_Expression( element.args[i] , niveau , false , element );
                if(obj.__xst === __xsu){
                    lesArguments+=',p(' + comm + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        t+='appelf(' + lelement + 'nomf(' + nomFonction + ')' + lesArguments + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_AssignOp_General( element , niveau , nodeType ){
        var operation='';
        if("Expr_AssignOp_Concat" === nodeType){
            operation='.=';
        }else if("Expr_AssignOp_Plus" === nodeType){
            operation='+=';
        }else if("Expr_AssignOp_BitwiseOr" === nodeType){
            operation='|=';
        }else if("Expr_AssignOp_Minus" === nodeType){
            operation='-=';
        }else if("Expr_AssignOp_Mod" === nodeType){
            operation='%=';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' "' + nodeType + '"' ,"element" : element} ));
        }
        var t='';
        var gauche='';
        if(element.var){
            var obj=this.#php_traite_Stmt_Expression( element.var , niveau , false , element );
            if(obj.__xst === __xsu){
                gauche+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var droite='';
        if(element.expr){
            var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , false , element );
            if(obj.__xst === __xsu){
                droite+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='affecteop(' + '\'' + operation + '\' , ' + gauche + ' , ' + droite + ' )';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_AssignRef( element , niveau ){
        var t='';
        var gauche='';
        var droite='';
        if(element.var){
            var obj=this.#php_traite_Stmt_Expression( element.var , niveau , false , element );
            if(obj.__xst === __xsu){
                gauche=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.expr){
            var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , false , element );
            if(obj.__xst === __xsu){
                droite=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='affecte_reference(' + gauche + ' , ' + droite + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_declare( element , niveau ){
        var t='';
        var texte_des_directives='';
        var instructions='';
        for( var i=0 ; i < element.declares.length ; i++ ){
            if(element.declares[i].nodeType === 'DeclareItem'){
                if(element.declares[i].key.nodeType === 'Identifier'){
                    if(element.declares[i].value.nodeType === 'Scalar_Int'){
                        texte_des_directives+=',' + element.declares[i].key.name + '=' + element.declares[i].value.value;
                    }else if(element.declares[i].value.nodeType === 'Scalar_String'){
                        texte_des_directives+=',' + element.declares[i].key.name + '=\'' + element.declares[i].value.value + '\'';
                    }else{
                        return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element});
                    }
                }else{
                    return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element});
                }
            }else{
                return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element});
            }
        }
        if(element.stmts && element.stmts.length > 0){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false );
            if(obj.__xst === __xsu){
                instructions+=obj.__xva;
            }else{
                return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element});
            }
        }
        if(texte_des_directives === ''){
            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element});
        }
        texte_des_directives=texte_des_directives.substr( 1 );
        if(instructions !== ''){
            t+='directive(texte(\'' + texte_des_directives.replace( /\'/g , '\\\'' ) + '\'),faire(' + instructions + '))';
        }else{
            t+='directive(texte(\'' + texte_des_directives.replace( /\'/g , '\\\'' ) + '\'))';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Assign( element , niveau , parent ){
        var t='';
        var gauche='';
        var droite='';
        if(element.var){
            if(element.var.nodeType === 'Expr_Variable'){
                /*
                  comme il y a beaucoup d'affectation à une variable simple,
                  on fait une affectation directe ici
                */
                gauche='$' + element.var.name;
            }else{
                var obj=this.#php_traite_Stmt_Expression( element.var , niveau , false , element );
                if(obj.__xst === __xsu){
                    gauche=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.expr){
            var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , false , element );
            if(obj.__xst === __xsu){
                if(element.expr.nodeType === "Expr_ClassConstFetch"){
                    /* $symbol = self::SYMBOL_NONE; */
                    if(obj.__xva.indexOf( '\\' ) >= 0){
                        droite='valeur_constante(' + obj.__xva + ')';
                    }else{
                        droite=obj.__xva;
                    }
                }else{
                    droite=obj.__xva;
                }
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='affecte(' + gauche + ' , ' + droite + ')';
        if(parent && parent.nodeType && parent.nodeType.substr( 0 , 14 ) === 'Expr_BinaryOp_'){
            t='(' + t + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_ArrayDimFetch( element , niveau , num ){
        var t='';
        var nomTableau='';
        var nom_variable='';
        var parametres='';
        if(element.var){
            if("Expr_Variable" === element.var.nodeType){
                nom_variable='nomt($' + element.var.name + ')';
            }else if("Expr_ArrayDimFetch" === element.var.nodeType){
                var obj=this.#php_traite_Expr_ArrayDimFetch( element.var , niveau , num + 1 );
                if(obj.__xst === __xsu){
                    nom_variable+=obj.__xva;
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                var obj=this.#php_traite_Stmt_Expression( element.var , niveau , true , element );
                if(obj.__xst === __xsu){
                    nom_variable+='nomt(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(element.dim){
            var obj=this.#php_traite_Stmt_Expression( element.dim , niveau , false , element );
            if(obj.__xst === __xsu){
                parametres+=',p(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            parametres+=',p()';
        }
        if(num === 0){
            if("Expr_Variable" === element.var.nodeType
                   || "Expr_ArrayDimFetch" === element.var.nodeType
                   || 'Expr_PropertyFetch' === element.var.nodeType
            ){
                t=this.#php_simplifie_tableau( nom_variable , parametres , num );
            }else{
                t='tableau(' + nom_variable + parametres + ')';
            }
        }else{
            if("Expr_Variable" === element.var.nodeType
                   || "Expr_ArrayDimFetch" === element.var.nodeType
                   || 'Expr_PropertyFetch' === element.var.nodeType
            ){
                t=this.#php_simplifie_tableau( nom_variable , parametres , num );
            }else{
                t=nom_variable + parametres;
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_simplifie_tableau( nom_variable , parametres , num ){
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
    #php_traite_Expr_List( element , niveau ){
        var t='';
        var lesElements='';
        if(element.items){
            var i=0;
            for( i=0 ; i < element.items.length ; i++ ){
                if(null === element.items[i]){
                    lesElements+='p()';
                }else if("ArrayItem" === element.items[i].nodeType){
                    var cle='';
                    if(element.items[i].value){
                        var objValeur=this.#php_traite_Stmt_Expression( element.items[i].value , niveau , false , element );
                        if(objValeur.__xst === __xsu){
                            if(lesElements !== ''){
                                lesElements+=' , ';
                            }
                            lesElements+='p(' + objValeur.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        t+='liste(' + lesElements + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Array( element , niveau ){
        var t='';
        var lesElements='';
        var format_court='';
        if(element.items){
            if(element.attributes.kind === 2){
                format_court='format_court(),';
            }
            var i=0;
            for( i=0 ; i < element.items.length ; i++ ){
                if("ArrayItem" === element.items[i].nodeType){
                    var cle='';
                    if(element.items[i].key){
                        var objcle=this.#php_traite_Stmt_Expression( element.items[i].key , niveau , false , element );
                        if(objcle.__xst === __xsu){
                            cle=objcle.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                    if(element.items[i].value){
                        var objValeur=this.#php_traite_Stmt_Expression( element.items[i].value , niveau , false , element );
                        if(objValeur.__xst === __xsu){
                            if(lesElements !== ''){
                                lesElements+=' , ';
                            }
                            if(element.items[i].attributes.hasOwnProperty( 'comments' ) && element.items[i].attributes.comments.length > 0){
                                lesElements+=this.#ajouteCommentairesAvant( element.items[i] , niveau );
                            }
                            if(cle !== ''){
                                if(element.items[i].byRef && element.items[i].byRef === true){
                                    lesElements+='(' + cle + ' , &' + objValeur.__xva + ')';
                                }else{
                                    lesElements+='(' + cle + ' , ' + objValeur.__xva + ')';
                                }
                            }else{
                                if(element.items[i].byRef && element.items[i].byRef === true){
                                    lesElements+='(&' + objValeur.__xva + ')';
                                }else{
                                    lesElements+='(' + objValeur.__xva + ')';
                                }
                            }
                            cle=objValeur.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                        }
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        t+='defTab(' + format_court + lesElements + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_chaine_raw( valeur_raw , element ){
        var t='';
        var rv=valeur_raw;
        var contenu=rv.substr( 1 , rv.length - 2 );
        /* si une chaine contient \\x, je préfère l'éclarter en '\\'.'x' */
        /*
          le traitement de 
          return '\\x' . str_pad($hex, 2, '0', \STR_PAD_LEFT);
          est assez tordu
        */
        /*
          \\x     => ""   , ""    => '\\'   .'x'
          aa\\x   => "aa" , ""    => 'aa'.'\\' .'x'
          aa\\xaa => "aa" , "aa"  => 'aa\\' .'x' . 'aa'
        */
        /*
          
          var tabcarspec=['x','f','o']
          for( var z in tabcarspec){
          var car_a_trouver=tabcarspec[z];
          var chaine_a_trouver='\\\\'+car_a_trouver;
          if(contenu.indexOf(chaine_a_trouver)>=0 ){
          //        return(this.#astphp_le({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element}));
          
          var caractere='';
          if(rv.substr(0,1)==='\''){
          var tableau=contenu.split(chaine_a_trouver);
          var tableau_a_concatener=[];
          for(var i=0;i<tableau.length;i++){
          if(i===tableau.length-1){
          if(tableau[i]===''){
          }else{
          var tt=php_traite_chaine_raw("'"+tableau[i]+"'",element);
          if(tt.__xst===true){
          tableau_a_concatener.push(tt.__xva);
          }else{
          return(this.#astphp_le({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element}));
          }
          }
          }else{
          if(tableau[i]===''){
          tableau_a_concatener.push("'\\\\'");
          tableau_a_concatener.push("'"+car_a_trouver+"'");
          }else{
          var tt=php_traite_chaine_raw("'"+tableau[i]+"'",element);
          if(tt.__xst===true){
          tableau_a_concatener.push(tt.__xva);
          tableau_a_concatener.push("'\\\\'");
          tableau_a_concatener.push("'"+car_a_trouver+"'");
          }else{
          return(this.#astphp_le({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element}));
          }
          }
          }
          }
          t='concat('+tableau_a_concatener.join(',')+')';
          return({__xst:true , __xva : t});
          }else{
          return(this.#astphp_le({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element}));
          }
          }
          }
        */
        var probablement_dans_une_regex=valeur_raw.substr( 1 , 1 ) === '/' ? ( true ) : ( false );
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
              en php, une chaine 'bla \ bla' avec un antislash au milieu est accepté 
              mais pour les fichiers rev, c'est pas excellent, 
              on accepte les \r \n \t \x \o , \" et \' \\ donc on fait une 
              petite analyse et on remonte une erreur si on n'est pas dans ces cas
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
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'entislash en dernière position  ' ,"element" : element} ));
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
                                            return(this.astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + rv.substr( i + 1 , 1 ) + '" après un backslash' ,"element" : element} ));
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
                                    return(this.astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + c + '" après un backslash' ,"element" : element} ));
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
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '<br />il doit y avoir un backslash avant un apostrophe ' ,"element" : element} ));
                    }
                }else if(rv.substr( i , 1 ) === '"' && rv.substr( 0 , 1 ) === '"'){
                    if(i >= 2 && rv.substr( i - 1 , 1 ) === '\\'){
                        nouvelle_chaine='\\"' + nouvelle_chaine;
                        i--;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '<br />il doit y avoir un backslash avant un guillemet ' ,"element" : element} ));
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
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      
      
      var comptage={};
    */
    #php_traite_Stmt_Expression( element , niveau , dansFor , parent , options_traitement ){
        /*#
          // pour perf
          if( parent && parent.hasOwnProperty('nodeType')){
              if(comptage.hasOwnProperty(element.nodeType+'___parent_'+parent.nodeType)){
                  comptage[element.nodeType+'___parent_'+parent.nodeType]++;
              }else{
                  comptage[element.nodeType+'___parent_'+parent.nodeType]=1;
              }
          }else{
              if(comptage.hasOwnProperty(element.nodeType+'____pas_de_parent')){
                  comptage[element.nodeType+'_no_parent']++;
              }else{
                  comptage[element.nodeType+'_no_parent']=1;
              }
          }
        */
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        if('Expr_BinaryOp_' === element.nodeType.substr( 0 , 14 )){
            var obj=this.#php_traite_Expr_BinaryOp_General( element , niveau , parent , options_traitement );
            if(obj.__xst === __xsu){
                t+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            /* =============================================== */
        }else if('Expr_Boolean' === element.nodeType.substr( 0 , 12 )){
            var obj=this.#php_traite_Expr_BooleanOp_General( element , niveau , options_traitement );
            if(obj.__xst === __xsu){
                t+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            /* =============================================== */
        }else if("Expr_AssignOp_" === element.nodeType.substr( 0 , 14 )){
            var obj=this.#php_traite_Expr_AssignOp_General( element , niveau , element.nodeType );
            if(obj.__xst === __xsu){
                t+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
            /* =============================================== */
        }else{
            switch (element.nodeType){
                case "Scalar_Int" : t+=element.attributes.rawValue;
                    break;
                case "Scalar_Float" : t+=element.value;
                    break;
                case "Expr_Variable" : t+='$' + element.name;
                    break;
                case "Identifier" : 
                case "Name" : t+=element.name;
                    break;
                case "NullableType" :
                    if(element.type.nodeType === 'Name'){
                        t+='?' + element.type.name + '';
                    }else if(element.type.nodeType === 'Identifier'){
                        t+='?' + element.type.name + '';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "Expr_ClassConstFetch" :
                    /* aaa\bbb::ccc */
                    if(element.class.nodeType === 'Name' && element.name.nodeType === 'Identifier'){
                        if(element.class.name.indexOf( '\\' ) >= 0){
                            if(parent.nodeType === 'Expr_Array'
                                   || 'Expr_Ternary' === parent.nodeType
                                   || 'Arg' === parent.nodeType
                                   || 'Expr_BinaryOp_' === parent.nodeType.substr( 0 , 14 )
                            ){
                                t+='valeur_constante(\'' + (element.class.name.replace( /\\/g , '\\\\' ) + '::' + element.name.name) + '\')';
                            }else{
                                t+='\'' + element.class.name.replace( /\\/g , '\\\\' ) + '::' + element.name.name + '\'';
                            }
                        }else{
                            t+='' + element.class.name + '::' + element.name.name + '';
                        }
                    }
                    break;
                    
                case "Stmt_ClassConst" :
                    var privee='';
                    var constantes='';
                    var protegee='';
                    var publique='';
                    if(element.flags && element.flags > 0){
                        if(element.flags === 1){
                            publique='publique()';
                        }else if(element.flags === 4){
                            privee='privée()';
                        }else if(element.flags === 2){
                            protegee='protégée()';
                        }else{
                            debugger;
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    if(element.consts && element.consts.length > 0){
                        for( var i=0 ; i < element.consts.length ; i++ ){
                            var nom_constante='';
                            var valeur_constante='';
                            if(element.consts[i].name.nodeType === 'Identifier'){
                                nom_constante=element.consts[i].name.name;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                            }
                            var obj=this.#php_traite_Stmt_Expression( element.consts[i].value , niveau , false , element , options_traitement );
                            if(obj.__xst === __xsu){
                                valeur_constante=obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                            }
                            constantes+=',constante(' + privee + publique + protegee + ',nomc(' + nom_constante + '),valeur(' + valeur_constante + '))';
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    t+=constantes.substr( 1 );
                    break;
                    
                case "Stmt_Property" :
                    if(element.props && element.props.length > 0){
                        var i=0;
                        for( i=0 ; i < element.props.length ; i++ ){
                            if("PropertyItem" === element.props[i].nodeType
                                   && element.props[i].name
                                   && element.props[i].name.nodeType === "VarLikeIdentifier"
                            ){
                                if(element.flags && element.flags === 4){
                                    t+='variable_privée(';
                                }else if(element.flags && element.flags === 2){
                                    t+='variable_protégée(';
                                }else if(element.flags && element.flags === 1){
                                    t+='variable_publique(';
                                }else if(element.flags && element.flags === 9){
                                    /*
                                      public static $embedding_file = __FILE__;
                                    */
                                    t+='variable_publique_statique(';
                                }else if(element.flags && element.flags === 12){
                                    /*
                                      private static $_resources = array();
                                    */
                                    t+='variable_privée_statique(';
                                }else if(element.flags && element.flags === 10){
                                    /*
                                      private static $_resources = array();
                                    */
                                    t+='variable_ptotégée_statique(';
                                }else{
                                    debugger;
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                                }
                                if(element.type){
                                    if(element.type.nodeType === 'Identifier'){
                                        t+='type_variable(' + element.type.name + '),';
                                    }else if(element.type.nodeType === 'Name'){
                                        t+='type_variable(' + element.type.name + '),';
                                    }else if(element.type.nodeType === "NullableType"){
                                        if(element.type.type.nodeType === 'Name_FullyQualified'){
                                            t+='type_variable(\'?\\\\' + element.type.type.name + '\'),';
                                        }else if(element.type.type.nodeType === 'Identifier'){
                                            if(element.type.type.name.indexOf( '\\' ) >= 0){
                                                t+='type_variable(\'?' + element.type.type.name + '\'),';
                                            }else{
                                                t+='type_variable(?' + element.type.type.name + '),';
                                            }
                                        }else if(element.type.type.nodeType === 'Name'){
                                            if(element.type.type.name.indexOf( '\\' ) >= 0){
                                                t+='type_variable(\'?' + element.type.type.name + '\'),';
                                            }else{
                                                t+='type_variable(?' + element.type.type.name + '),';
                                            }
                                        }else{
                                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                                        }
                                    }else{
                                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                                    }
                                }
                                /* le nom de la variable */
                                t+='$' + element.props[i].name.name;
                                /*  */
                                if(element.props[i].default){
                                    var obj=this.#php_traite_Stmt_Expression( element.props[i].default , niveau , true , element , options_traitement );
                                    if(obj.__xst === __xsu){
                                        t+=',valeur_defaut(' + obj.__xva + ')';
                                    }else{
                                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                                    }
                                }
                                t+=')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                            }
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Scalar_String" :
                    if(element.attributes.kind && element.attributes.kind === 3){
                        t+='heredoc(\'' + element.attributes.docLabel + '\',`\n' + element.attributes.rawValue.replace( /`/g , '\\`' ) + '`)';
                    }else if(element.attributes.kind && element.attributes.kind === 4){
                        t+='nowdoc(\'' + element.attributes.docLabel + '\',`\n' + element.attributes.rawValue.replace( /`/g , '\\`' ) + '`)';
                    }else if(element.attributes.rawValue.substr( 0 , 1 ) === '\'' || element.attributes.rawValue.substr( 0 , 1 ) === '"'){
                        var obj=this.#php_traite_chaine_raw( element.attributes.rawValue , element );
                        if(obj.__xst === __xsu){
                            t+=obj.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        t+=element.attributes.rawValue;
                    }
                    /* =============================================== */
                    break;
                    
                case "Stmt_ClassMethod" :
                    var obj=this.#php_traite_Stmt_ClassMethod( element , niveau , options_traitement );
                    if(obj.__xst === __xsu){
                        t+='\n' + esp0 + obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Stmt_Continue" :
                    if(element.num === null){
                        t+='\n' + esp0 + 'continue()';
                    }else{
                        var obj=this.#php_traite_Stmt_Expression( element.num , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='\n' + esp0 + 'continue(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_UnaryMinus" :
                    var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                    if(obj.__xst === __xsu){
                        if(obj.__xva.substr( 0 , 17 ) === 'valeur_constante('
                               || 'propriete' === obj.__xva.substr( 0 , 9 )
                               || element.expr.nodeType === 'Expr_ArrayDimFetch'
                        ){
                            t+='moins(' + obj.__xva + ')';
                        }else{
                            t+='-' + obj.__xva;
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "Stmt_Global" :
                    var variables='';
                    var i={};
                    for(i in element.vars){
                        if(element.vars[i].nodeType === "Expr_Variable"){
                            variables+=',$' + element.vars[i].name;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    if(variables !== ''){
                        variables=variables.substr( 1 );
                        t+='globale(' + variables + ')';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "Expr_UnaryPlus" :
                    var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                    if(obj.__xst === __xsu){
                        if(obj.__xva.substr( 0 , 17 ) === 'valeur_constante(' || 'propriete' === obj.__xva.substr( 0 , 9 )){
                            t+='plus(' + obj.__xva + ')';
                        }else{
                            t+='+' + obj.__xva;
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_ArrayDimFetch" :
                    var obj=this.#php_traite_Expr_ArrayDimFetch( element , niveau , 0 );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_MethodCall" :
                    var obj=this.#php_traite_Expr_MethodCall( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Scalar_MagicConst_File" : t+='__FILE__';
                    break;
                case "Scalar_MagicConst_Class" : t+='__CLASS__';
                    break;
                case "Scalar_MagicConst_Line" : t+='__LINE__';
                    break;
                case "Scalar_MagicConst_Dir" : t+='__DIR__';
                    break;
                case "Scalar_MagicConst_Method" : t+='__METHOD__';
                    break;
                case "Arg" :
                    /* =============================================== */
                    if(element.byRef === true){
                        t+='&';
                    }
                    var obj=this.#php_traite_Stmt_Expression( element.value , niveau , dansFor , element , options_traitement );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Assign" :
                    var obj=this.#php_traite_Expr_Assign( element , niveau , parent );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_AssignRef" :
                    var obj=this.#php_traite_Expr_AssignRef( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_FuncCall" :
                    var obj=this.#php_traite_Expr_FuncCall( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Include" :
                    var obj=this.#php_traite_Expr_Include( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Eval" :
                    var obj=this.#php_traite_Expr_Eval( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Ternary" :
                    var obj=this.#php_traite_Expr_Ternary( element , niveau , options_traitement );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case 'Expr_Isset' :
                    var obj=this.#php_traite_Expr_Isset( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case 'Expr_Array' :
                    var obj=this.#php_traite_Expr_Array( element , niveau , 0 );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_List" :
                    var obj=this.#php_traite_Expr_List( element , niveau , 0 );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Exit" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='sortir(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        t+='sortir()';
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_ConstFetch" :
                    if(element.name){
                        if(element.name.nodeType === 'Name'){
                            if(element.name.name === 'true'){
                                t+='vrai';
                            }else if(element.name.name === 'false'){
                                t+='faux';
                            }else{
                                t+=element.name.name;
                            }
                        }else if(element.name.nodeType === 'Name_FullyQualified'){
                            if(element.name.name.indexOf( '\\' ) >= 0){
                                t+='valeur_constante(\'\\\\' + element.name.name.replace( /\\/g , '\\\\' ) + '\')';
                            }else{
                                t+='valeur_constante(\'\\\\' + element.name.name + '\')';
                            }
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_ErrorSuppress" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='supprimeErreur(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Print" :
                    var obj=this.#php_traite_print( element , niveau );
                    if(obj.__xst === __xsu){
                        t+='\n' + esp0 + obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_New" :
                    var obj=this.#php_traite_Expr_New( element , niveau );
                    if(obj.__xst === __xsu){
                        t+='\n' + esp0 + obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_PostInc" :
                    if(element.var && element.var.nodeType === "Expr_Variable"){
                        if(parent.nodeType === "Stmt_For" || "Expr_Assign" === parent.nodeType){
                            t+='$' + element.var.name + '++';
                        }else{
                            t+='postinc($' + element.var.name + ')';
                        }
                    }else{
                        var obj=this.#php_traite_Stmt_Expression( element.var , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='postinc(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_PostDec" :
                    if(element.var && element.var.nodeType === "Expr_Variable"){
                        if(parent.nodeType === "Stmt_For" || "Expr_Assign" === parent.nodeType){
                            t+='$' + element.var.name + '--';
                        }else{
                            t+='postdec($' + element.var.name + ')';
                        }
                    }else{
                        var obj=this.#php_traite_Stmt_Expression( element.var , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='postdec(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_PreDec" :
                    if(element.var && element.var.nodeType === "Expr_Variable"){
                        if(parent.nodeType === "Stmt_For" || "Expr_Assign" === parent.nodeType){
                            t+='--$' + element.var.name;
                        }else{
                            t+='predec($' + element.var.name + ')';
                        }
                    }else{
                        var obj=this.#php_traite_Stmt_Expression( element.var , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='predec(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_PreInc" :
                    if(element.var && element.var.nodeType === "Expr_Variable"){
                        if(parent.nodeType === "Stmt_For" || "Expr_Assign" === parent.nodeType){
                            t+='++$' + element.var.name;
                        }else{
                            t+='preinc($' + element.var.name + ')';
                        }
                    }else{
                        var obj=this.#php_traite_Stmt_Expression( element.var , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='preinc(' + obj.__xva + ' )';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Cast_Array" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='casttableau(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Cast_Double" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='castfloat(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Cast_String" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='caststring(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Empty" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='appelf(nomf(empty),p(' + obj.__xva + '))';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Cast_Int" :
                    if(element.expr){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='castint(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_StaticCall" :
                    var obj=this.#php_traite_Expr_FuncCall( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_PropertyFetch" :
                    if('Expr_Variable' === element.var.nodeType && element.name.nodeType === 'Identifier'){
                        t+='$' + element.var.name + '->' + element.name.name;
                    }else{
                        var variable='';
                        if(element.var){
                            var obj=this.#php_traite_Stmt_Expression( element.var , niveau , dansFor , element , options_traitement );
                            if(obj.__xst === __xsu){
                                variable=obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                            }
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                        var propriete='';
                        if(element.name){
                            if(element.name.nodeType === 'Identifier'){
                                propriete=element.name.name;
                            }else if(element.name.nodeType === 'Expr_Variable'){
                                propriete='$' + element.name.name;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                            }
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                        t+='propriete(' + variable + ',' + propriete + ')';
                    }
                    /* =============================================== */
                    break;
                    
                case "Scalar_InterpolatedString" :
                    if(element.parts){
                        var chaine_concat='';
                        var i=0;
                        var tableau_des_elements=[];
                        for( i=0 ; i < element.parts.length ; i++ ){
                            if("InterpolatedStringPart" === element.parts[i].nodeType){
                                chaine_concat+=',"' + element.parts[i].value.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ) + '"';
                                tableau_des_elements.push( element.parts[i].value.replace( /\\/g , '\\\\' ).replace( /"/g , '\\"' ) );
                            }else if("Expr_Variable" === element.parts[i].nodeType){
                                chaine_concat+=',$' + element.parts[i].name + '';
                                tableau_des_elements.push( '{$' + element.parts[i].name + '}' );
                            }else if("Expr_PropertyFetch" === element.parts[i].nodeType){
                                var obj=this.#php_traite_Stmt_Expression( element.parts[i] , niveau , dansFor , element , options_traitement );
                                if(obj.__xst === __xsu){
                                    chaine_concat+=',' + obj.__xva + '';
                                    tableau_des_elements.push( '{' + obj.__xva + '}' );
                                }else{
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                                }
                            }else if("Expr_MethodCall" === element.parts[i].nodeType){
                                var obj=this.#php_traite_Expr_MethodCall( element.parts[i] , niveau );
                                if(obj.__xst === __xsu){
                                    chaine_concat+=',' + obj.__xva + '';
                                    /* à vérifier */
                                    debugger;
                                    /* à vérifier */
                                    tableau_des_elements.push( '{' + obj.__xva + '}' );
                                }else{
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                                }
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                            }
                        }
                        t+='encapsulé("';
                        for( i=0 ; i < tableau_des_elements.length ; i++ ){
                            t+=tableau_des_elements[i].replace( /"/g , '\\"' );
                        }
                        t+='")';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "Expr_ClassConstFetch" :
                    if(element.class && element.class.nodeType === "Name" && element.name && element.name.nodeType === "Identifier"){
                        t+=element.class.name + '::' + element.name.name;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "Expr_StaticPropertyFetch" :
                    /* $filename = self::$embedding_file; */
                    if(element.class && element.class.nodeType === 'Name' && element.name && element.name.nodeType === "VarLikeIdentifier"){
                        t+=element.class.name + '::$' + element.name.name;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "StaticVar" :
                    var variable="";
                    if(element.var){
                        var obj=this.#php_traite_Stmt_Expression( element.var , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            variable+=obj.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    var valeurDef="";
                    if(element.default && element.default !== null){
                        var obj=this.#php_traite_Stmt_Expression( element.default , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='\n' + esp0 + 'static(' + variable + ' , ' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        t+='\n' + esp0 + 'static(' + variable + ')';
                    }
                    break;
                    
                case "Expr_Instanceof" :
                    if(element.class
                           && element.class.nodeType === 'Name_FullyQualified'
                           && element.expr
                           && element.expr.nodeType === "Expr_Variable"
                    ){
                        t+='instance_de($' + element.expr.name + ' , valeur_constante(\'\\\\' + element.class.name.replace( /\\/g , '\\\\' ) + '\'))';
                    }else if(element.class && element.class.nodeType === 'Name'){
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            if(element.class.name.indexOf( '\\' ) >= 0){
                                t+='instance_de(' + obj.__xva + ' , \'' + element.class.name.replace( /\\/g , '\\\\' ) + '\')';
                            }else{
                                t+='instance_de(' + obj.__xva + ' , ' + element.class.name + ')';
                            }
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        var nom='';
                        var obj=this.#php_traite_Stmt_Expression( element.class , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            nom=obj.__xva;
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                        var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , dansFor , element , options_traitement );
                        if(obj.__xst === __xsu){
                            t+='instance_de(' + obj.__xva + ' , ' + nom + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }
                    break;
                    
                case "Expr_Throw" :
                    if(element.expr && element.expr.nodeType === "Expr_New"){
                        var obj=this.#php_traite_Expr_New( element.expr , niveau );
                        if(obj.__xst === __xsu){
                            t+='throw(' + obj.__xva + ')';
                        }else{
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                        }
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Closure" :
                    var obj=this.#php_traite_Expr_Closure( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    /* =============================================== */
                    break;
                    
                case "Expr_Clone" :
                    var obj=this.#php_traite_Expr_Clone( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                case "Stmt_Static" :
                    var obj=this.#php_traite_Stmt_Static( element , niveau );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + element.nodeType ,"element" : element} ));
                    }
                    break;
                    
                default:
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'non traité : ' + element.nodeType ,"element" : element} ));
                    break;
                    
            }
        }
        return({"__xst" : __xsu ,"__xva" : t ,"nodeType" : element.nodeType});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_Ternary( element , niveau , options_traitement ){
        var t='';
        var conditionIf='';
        if(element.cond){
            var obj=this.#php_traiteCondition1( element.cond , niveau , element );
            if(obj.__xst === __xsu){
                conditionIf=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var siVrai='';
        if(element.if){
            var objSiVrai=this.#php_traite_Stmt_Expression( element.if , niveau , false , element , options_traitement );
            if(objSiVrai.__xst === __xsu){
                siVrai=objSiVrai.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        var siFaux='';
        if(element.else){
            var objsiFaux=this.#php_traite_Stmt_Expression( element.else , niveau , false , element , options_traitement );
            if(objsiFaux.__xst === __xsu){
                siFaux=objsiFaux.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='testEnLigne(condition(' + conditionIf + '),siVrai(' + siVrai + '),siFaux(' + siFaux + '))';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Expr_BooleanOp_General( element , niveau , options_traitement ){
        var t='';
        if(element.expr){
            var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , false , element , options_traitement );
            if(obj.__xst === __xsu){
                if(element.nodeType === 'Expr_BooleanNot'){
                    t+='non(' + obj.__xva + ')';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
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
    #php_traite_Expr_BinaryOp_General( element , niveau , parent , options_traitement ){
        var t='';
        var gauche='';
        var objGauche=this.#php_traite_Stmt_Expression( element.left , niveau , false , element , options_traitement );
        if(objGauche.__xst === __xsu){
            gauche=objGauche.__xva;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var droite='';
        var objdroite=this.#php_traite_Stmt_Expression( element.right , niveau , false , element , options_traitement );
        if(objdroite.__xst === __xsu){
            if(objdroite.__xva.substr( 0 , 7 ) === 'concat(' && "Expr_BinaryOp_Concat" === element.nodeType){
                droite=objdroite.__xva.substr( 7 );
                droite=droite.substr( 0 , droite.length - 1 );
            }else{
                droite=objdroite.__xva;
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.nodeType === 'Expr_BinaryOp_BooleanOr'){
            if(parent.nodeType === 'Expr_BinaryOp_BooleanOr'){
                t+='' + gauche + ' , ' + droite + '';
            }else{
                t+='ou(' + gauche + ' , ' + droite + ')';
            }
        }else if(element.nodeType === 'Expr_BinaryOp_BooleanAnd'){
            if(parent.nodeType === 'Expr_BinaryOp_BooleanAnd'){
                t+='' + gauche + ' , ' + droite + '';
            }else{
                t+='et(' + gauche + ' , ' + droite + ')';
            }
        }else if(element.nodeType === 'Expr_BinaryOp_LogicalAnd'){
            t+='et_logique(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_LogicalOr'){
            t+='ou_logique(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_BitwiseXor'){
            t+='xou_binaire(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_BitwiseOr'){
            t+='ou_binaire(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_BitwiseAnd'){
            t+='et_binaire(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_NotIdentical'){
            t+='diffstricte(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Concat'){
            t+='concat(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_NotEqual'){
            t+='diff(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Equal'){
            t+='egal(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Identical'){
            t+='egalstricte(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Greater'){
            t+='sup(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BooleanNot'){
            t+='non(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Coalesce'){
            t+='??(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Mul'){
            t+='mult(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Plus'){
            t+='plus(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Minus'){
            t+='moins(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Smaller'){
            t+='inf(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_GreaterOrEqual'){
            t+='supeg(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_SmallerOrEqual'){
            t+='infeg(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Mod'){
            t+='modulo(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_ShiftLeft'){
            t+='decal_gauche(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_Div'){
            t+='divi(' + gauche + ' , ' + droite + ')';
        }else if(element.nodeType === 'Expr_BinaryOp_ShiftRight'){
            t+='decal_droite(' + gauche + ' , ' + droite + ')';
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'non prévu ' + element.nodeType ,"element" : element} ));
        }
        if(t.substr( 0 , 14 ) === 'concat(concat('
               || t.substr( 0 , 6 ) === 'et(et('
               || t.substr( 0 , 6 ) === 'ou(ou('
               || t.substr( 0 , 10 ) === 'plus(plus('
               || t.substr( 0 , 12 ) === 'moins(moins('
               || t.substr( 0 , 22 ) === 'ou_binaire(ou_binaire('
        ){
            var o=this.__m_rev1.rev_tm( t );
            if(o.__xst === __xsu){
                var nouveauTableau=this.__m_rev1.baisser_le_niveau_et_supprimer( o.__xva , 2 , 0 );
                var obj=this.__m_rev1.matrice_vers_source_rev1( nouveauTableau , 0 , true , 1 );
                if(obj.__xst === __xsu){
                    t=obj.__xva;
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traiteCondition1( element , niveau , parent , options_traitement ){
        var t='';
        var obj=this.#php_traite_Stmt_Expression( element , niveau , false , parent );
        if(obj.__xst === __xsu){
            /*
              il y a souvent un niveau de parenthèses en trop ici 
              On parcourt la matrice pour voir si 
              - la première entrée est une fonction vide
              - tous les autres niveaux sont >=1
            */
            if(obj.__xva.substr( 0 , 1 ) === '(' && obj.__xva.substr( obj.__xva.length - 1 , 1 ) === ')'){
                var matrice=this.__m_rev1.rev_tcm( obj.__xva );
                if(matrice.__xst === __xsu && matrice.__xva.length >= 2){
                    if(matrice.__xva[1][1] === ''){
                        var l01=matrice.__xva.length;
                        var tout_est_superieur=true;
                        var j=2;
                        for( j=2 ; j < l01 ; j++ ){
                            if(matrice.__xva[j][3] < 1){
                                tout_est_superieur=false;
                                break;
                            }
                        }
                        if(tout_est_superieur === true){
                            var nouveauTableau=this.__m_rev1.baisser_le_niveau_et_supprimer( matrice.__xva , 1 , 0 );
                            var obj1=this.__m_rev1.matrice_vers_source_rev1( nouveauTableau , 0 , true , 1 );
                            if(obj1.__xst === __xsu){
                                t+=obj1.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                            }
                        }else{
                            t+=obj.__xva;
                        }
                    }else{
                        t+=obj.__xva;
                    }
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }else{
                t+=obj.__xva;
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_While( element , niveau , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var conditionWhile='';
        if(element.cond){
            var obj=this.#php_traiteCondition1( element.cond , niveau , element , options_traitement );
            if(obj.__xst === __xsu){
                conditionWhile=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var instructionsDansWhile='';
        if(element.stmts){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false , false , options_traitement );
            if(obj.__xst === __xsu){
                instructionsDansWhile+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        t+='\n' + esp0 + 'tantQue(';
        t+='\n' + esp0 + esp1 + 'condition(' + conditionWhile + ')';
        t+='\n' + esp0 + esp1 + 'faire(\n';
        t+=instructionsDansWhile;
        t+='\n' + esp0 + esp1 + ')';
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_If( element , niveau , unElseIfOuUnElse , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var conditionIf='';
        /*
          attention, if($a){}else if($b){}else{} ressort avec ce parseur comme
          if($a){}else{if($b){}else{}} ( ça ajoute un niveau!!! )
        */
        var instructionsDansElseOuElseifIf='';
        if(element.cond){
            var obj=this.#php_traiteCondition1( element.cond , niveau , element , options_traitement );
            if(obj.__xst === __xsu){
                conditionIf=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            conditionIf='';
        }
        var instructionsDansIf='';
        if(element.stmts){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 3 , element , false , false , options_traitement );
            if(obj.__xst === __xsu){
                instructionsDansIf+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(unElseIfOuUnElse){
            t+='\n' + esp0 + esp1 + 'sinonsi(';
            t+='\n' + esp0 + esp1 + esp1 + 'condition(' + conditionIf + ')';
            t+='\n' + esp0 + esp1 + esp1 + 'alors(\n';
            t+=instructionsDansIf;
            t+='\n' + esp0 + esp1 + esp1 + ')';
            t+='\n' + esp0 + esp1 + ')';
        }else{
            t+='\n' + esp0 + 'choix(';
            t+='\n' + esp0 + esp1 + 'si(';
            t+='\n' + esp0 + esp1 + esp1 + 'condition(' + conditionIf + ')';
            t+='\n' + esp0 + esp1 + esp1 + 'alors(\n';
            t+=instructionsDansIf;
            t+='\n' + esp0 + esp1 + esp1 + ')';
            t+='\n' + esp0 + esp1 + ')';
        }
        if(element.elseifs){
            var j={};
            for(j in element.elseifs){
                var objElseIf=this.#php_traite_Stmt_If( element.elseifs[j] , niveau , true , options_traitement );
                if(objElseIf.__xst === __xsu){
                    t+='' + objElseIf.__xva + '';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        if(element.else){
            if(element.else.stmts){
                if(false && element.else.stmts.length === 1 && element.else.stmts[0].nodeType === "Stmt_If"){
                    var objElseIf=this.#php_traite_Stmt_If( element.else.stmts[0] , niveau , true , options_traitement );
                    if(objElseIf.__xst === __xsu){
                        t+='' + objElseIf.__xva + '';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }else{
                    niveau+=3;
                    var obj=this.#traite_ast_nikic0( element.else.stmts , niveau , element , false , false , options_traitement );
                    niveau-=3;
                    if(obj.__xst === __xsu){
                        t+='\n' + esp0 + esp1 + 'sinon(';
                        t+='\n' + esp0 + esp1 + esp1 + 'alors(\n';
                        t+=obj.__xva;
                        t+='\n' + esp0 + esp1 + esp1 + ')';
                        t+='\n' + esp0 + esp1 + ')';
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                    }
                }
            }
        }
        if(unElseIfOuUnElse){
        }else{
            t+='\n' + esp0 + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_Class( element , niveau , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var nom_de_classe='';
        var contenu='';
        var implemente='';
        var indicateurs='';
        var etend='';
        if(element.extends){
            if(element.extends.nodeType === 'Name'){
                if(element.extends.name.indexOf( '\\' ) >= 0){
                    etend+='\n' + esp0 + esp1 + ',étend(\'' + element.extends.name.replace( /\\/g , '\\\\' ) + '\')';
                }else{
                    etend+='\n' + esp0 + esp1 + ',étend(' + element.extends.name + ')';
                }
            }else if(element.extends.nodeType === 'Name_FullyQualified'){
                if(element.extends.name.indexOf( '\\' ) >= 0){
                    etend+='\n' + esp0 + esp1 + ',étend(\'\\\\' + element.extends.name.replace( /\\/g , '\\\\' ) + '\')';
                }else{
                    etend+='\n' + esp0 + esp1 + ',étend(\'\\\\' + element.extends.name + '\')';
                }
            }else{
                debugger;
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' "' + element.extends.nodeType + '"' ,"element" : element} ));
            }
        }
        if(element.implements && element.implements.length > 0){
            for( var i=0 ; i < element.implements.length ; i++ ){
                if(element.implements[i].nodeType === 'Name'){
                    implemente+=',' + element.implements[i].name;
                }else if(element.implements[i].nodeType === 'Name_FullyQualified'){
                    implemente+=',\'\\\\' + element.implements[i].name + '\'';
                }else{
                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
            implemente='\n' + esp0 + esp1 + ',implemente(' + implemente.substr( 1 ) + ')';
        }
        if(element.flags && element.flags > 0){
            if(element.flags === 16){
                indicateurs+=',abstraite()';
            }else if(element.flags === 32){
                indicateurs+=',finale()';
            }else{
                debugger;
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(element.name && element.name.nodeType === "Identifier"){
            nom_de_classe=element.name.name;
        }else{
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        if(element.stmts && element.stmts.length > 0){
            var obj=this.#traite_ast_nikic0( element.stmts , niveau + 2 , element , false , false , options_traitement );
            if(obj.__xst === __xsu){
                contenu=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            contenu='';
        }
        t+='\n' + esp0 + 'definition_de_classe(';
        t+='\n' + esp0 + esp1 + 'nom_classe(' + nom_de_classe + ')';
        t+=indicateurs;
        t+=implemente;
        t+=etend;
        t+='\n' + esp0 + esp1 + 'contenu(' + contenu;
        t+='\n' + esp0 + esp1 + ')';
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_DoWhile( element , niveau , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var condition='';
        if(element.cond && element.cond.length === 1){
            var obj=this.#php_traiteCondition1( element.cond[0] , niveau , element );
            if(obj.__xst === __xsu){
                condition+='(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else if(element.cond && element.cond.length === 0){
            condition='';
        }else if(element.cond && element.cond.nodeType){
            var obj=this.#php_traiteCondition1( element.cond , niveau , element );
            if(obj.__xst === __xsu){
                condition+='(' + obj.__xva + ')';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else{
            debugger;
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var instructions='';
        if(element.stmts && element.stmts.length > 0){
            var obj1=this.#traite_ast_nikic0( element.stmts , niveau , element , false , false , options_traitement );
            if(obj1.__xst === __xsu){
                instructions+=obj1.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='\n' + esp0 + 'faire_tant_que(';
        t+='\n' + esp0 + esp1 + 'faire(';
        t+='\n' + instructions;
        t+='\n' + esp0 + esp1 + ')';
        t+='\n' + esp0 + esp1 + 'condition' + condition + ',';
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_For( element , niveau , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var initialisation='';
        if(element.init && element.init.length > 0){
            var obj1=this.#traite_ast_nikic0( element.init , niveau , element , true , false , options_traitement );
            if(obj1.__xst === __xsu){
                initialisation+=obj1.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        var condition='';
        if(element.cond && element.cond.length === 1){
            var obj=this.#php_traiteCondition1( element.cond[0] , niveau , element );
            if(obj.__xst === __xsu){
                condition+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }else if(element.cond && element.cond.length === 0){
            condition='';
        }else{
            debugger;
            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
        }
        var increment='';
        if(element.loop && element.loop.length > 0){
            var obj1=this.#traite_ast_nikic0( element.loop , niveau , element , true , false , options_traitement );
            if(obj1.__xst === __xsu){
                increment+=obj1.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        var instructions='';
        if(element.stmts && element.stmts.length > 0){
            var obj1=this.#traite_ast_nikic0( element.stmts , niveau , element , false , false , options_traitement );
            if(obj1.__xst === __xsu){
                instructions+=obj1.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='\n' + esp0 + 'boucle(';
        t+='\n' + esp0 + esp1 + 'initialisation(' + initialisation + '),';
        t+='\n' + esp0 + esp1 + 'condition(' + condition + '),';
        t+='\n' + esp0 + esp1 + 'increment(' + increment + '),';
        t+='\n' + esp0 + esp1 + 'faire(';
        t+='\n' + instructions;
        t+='\n' + esp0 + esp1 + ')';
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #php_traite_Stmt_Foreach( element , niveau , options_traitement ){
        var t='';
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        var cleValeur='';
        if(element.keyVar){
            var obj=this.#php_traite_Stmt_Expression( element.keyVar , niveau , false , element , options_traitement );
            if(obj.__xst === __xsu){
                cleValeur=obj.__xva + ' , ';
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        if(element.valueVar){
            var obj=this.#php_traite_Stmt_Expression( element.valueVar , niveau , false , element , options_traitement );
            if(obj.__xst === __xsu){
                cleValeur+=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        var nomVariable='';
        if(element.expr){
            var obj=this.#php_traite_Stmt_Expression( element.expr , niveau , false , element , options_traitement );
            if(obj.__xst === __xsu){
                nomVariable=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        var instructions='';
        if(element.stmts){
            niveau+=2;
            var obj=this.#traite_ast_nikic0( element.stmts , niveau , element , false , false , options_traitement );
            niveau-=2;
            if(obj.__xst === __xsu){
                instructions=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
            }
        }
        t+='\n' + esp0 + 'boucleSurTableau(';
        t+='\n' + esp0 + esp1 + 'pourChaque(dans(' + cleValeur + ' , ' + nomVariable + ')),';
        t+='\n' + esp0 + esp1 + 'faire(';
        t+='\n' + instructions;
        t+='\n' + esp0 + esp1 + ')';
        t+='\n' + esp0 + ')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #ajouteCommentairesAvant( element , niveau ){
        var t='';
        if(element.attributes.comments){
            var esp0=' '.repeat( NBESPACESREV * niveau );
            var esp1=' '.repeat( NBESPACESREV );
            var j=0;
            for( j=0 ; j < element.attributes.comments.length ; j++ ){
                if("Comment" === element.attributes.comments[j].nodeType || "Comment_Doc" === element.attributes.comments[j].nodeType){
                    var txtComment=element.attributes.comments[j].text.substr( 2 );
                    if(element.attributes.comments[j].text.substr( 0 , 2 ) === '/*'){
                        var val=txtComment.substr( 0 , txtComment.length - 2 );
                        if(((txtComment.match( /\(/g ) || []).length) === ((txtComment.match( /\)/g ) || []).length)){
                            if(val.substr( 0 , 1 ) === '*' || val.substr( 0 , 1 ) === '#'){
                                t+='\n' + esp0 + '#(#' + val.substr( 1 ) + ')';
                            }else{
                                t+='\n' + esp0 + '#(' + val + ')';
                            }
                        }else{
                            if(val.substr( 0 , 1 ) === '*' || val.substr( 0 , 1 ) === '#'){
                                t+='\n' + esp0 + '#(#' + val.substr( 1 ).replace( /\(/g , '[' ).replace( /\)/g , ']' ) + ')';
                            }else{
                                t+='\n' + esp0 + '#(' + val.replace( /\(/g , '[' ).replace( /\)/g , ']' ) + ')';
                            }
                        }
                        element.attributes.comments[j].text='';
                    }else if(element.attributes.comments[j].text.substr( 0 , 2 ) === '//'){
                        if(((txtComment.match( /\(/g ) || []).length) === ((txtComment.match( /\)/g ) || []).length)){
                            t+='\n' + esp0 + '#( ' + txtComment.trim().replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                        }else{
                            t+='\n' + esp0 + '#( ' + txtComment.trim().replace( /\(/g , '[' ).replace( /\)/g , ']' ).replace( /\/\*/ , '/_*' ).replace( /\*\// , '*_/' ) + ')';
                        }
                        element.attributes.comments[j].text='';
                    }
                }
            }
        }
        return t;
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
    #traite_ast_nikic0( stmts , niveau , parent , dansFor , de_racine , options_traitement ){
        let t='';
        let obj=null;
        let i=0;
        let esp0=' '.repeat( NBESPACESREV * niveau );
        let esp1=' '.repeat( NBESPACESREV );
        if(stmts.length > 0){
            for( i=0 ; i < stmts.length ; i++ ){
                t+=this.#ajouteCommentairesAvant( stmts[i] , niveau );
                if(t !== '' && "Stmt_Nop" !== stmts[i].nodeType){
                    t+=',';
                }
                if(stmts[i].nodeType.substr( 0 , 14 ) === "Expr_AssignOp_"){
                    obj=this.#php_traite_Expr_AssignOp_General( stmts[i] , niveau , stmts[i].nodeType );
                    if(obj.__xst === __xsu){
                        t+=obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : stmts[i]} ));
                    }
                }else if('Expr_BinaryOp_' === stmts[i].nodeType.substr( 0 , 14 )){
                    obj=this.#php_traite_Stmt_Expression( stmts[i] , niveau , dansFor , stmts , options_traitement );
                    if(obj.__xst === __xsu){
                        t+='\n' + esp0 + obj.__xva;
                    }else{
                        return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                    }
                }else{
                    switch (stmts[i].nodeType){
                        case "Stmt_Nop" : t+='';
                            break;
                        case "Stmt_InlineHTML" :
                            obj=this.__module_html1.traite_html_de_php( stmts[i].value , options_traitement , niveau );
                            if(obj.__xst === __xsu){
                                t+='\n' + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Echo" :
                            obj=this.#php_traite_echo( stmts[i] , niveau );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_If" :
                            obj=this.#php_traite_Stmt_If( stmts[i] , niveau , false , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Expression" :
                            obj=this.#php_traite_Stmt_Expression( stmts[i].expr , niveau , dansFor , stmts , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Function" :
                            obj=this.#php_traite_Stmt_Function( stmts[i] , niveau );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Use" :
                            obj=this.#php_traite_Stmt_Use( stmts[i] , niveau );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_TryCatch" :
                            obj=this.#php_traite_Stmt_TryCatch( stmts[i] , niveau , false , false , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Return" :
                            if(stmts[i].expr === null){
                                t+='\n' + esp0 + 'revenir()';
                            }else{
                                obj=this.#php_traite_Stmt_Expression( stmts[i].expr , niveau , dansFor , stmts );
                                if(obj.__xst === __xsu){
                                    t+='\n' + esp0 + 'retourner(' + obj.__xva + ')';
                                }else{
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                                }
                            }
                            break;
                            
                        case "Stmt_Break" :
                            if(stmts[i].num === null){
                                t+='\n' + esp0 + 'break()';
                            }else if(stmts[i].num.nodeType === 'Scalar_Int'){
                                t+='\n' + esp0 + 'break(' + stmts[i].num.value + ')';
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Switch" :
                            obj=this.#php_traite_Stmt_Switch( stmts[i] , niveau , false , false , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case 'Stmt_Unset' :
                            /* =============================================== */
                            obj=this.#php_traite_Expr_Unset( stmts[i] , niveau );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Foreach" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_Foreach( stmts[i] , niveau , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Do" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_DoWhile( stmts[i] , niveau , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_For" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_For( stmts[i] , niveau , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Expr_Assign" :
                            /* =============================================== */
                            obj=this.#php_traite_Expr_Assign( stmts[i] , niveau , parent );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Class" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_Class( stmts[i] , niveau , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_ClassMethod" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_ClassMethod( stmts[i] , niveau , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Continue" : 
                        case "Stmt_Global" : 
                        case "Stmt_ClassConst" : 
                        case "Expr_Isset" : 
                        case "Expr_PostDec" : 
                        case "Expr_PostInc" : 
                        case "Expr_PreDec" : 
                        case "Expr_PreInc" : 
                        case "Stmt_Property" : 
                        case "Stmt_Static" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_Expression( stmts[i] , niveau , dansFor , parent , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_While" :
                            /* =============================================== */
                            obj=this.#php_traite_Stmt_While( stmts[i] , niveau , options_traitement );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_Declare" :
                            /* =============================================== */
                            obj=this.#php_traite_Expr_declare( stmts[i] , niveau );
                            if(obj.__xst === __xsu){
                                t+='\n' + esp0 + obj.__xva;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            break;
                            
                        case "Stmt_HaltCompiler" :
                            if(stmts[i].remaining && stmts[i].remaining !== ''){
                                t+='\n' + esp0 + '__halt_compiler(\'' + stmts[i].remaining.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
                            }else{
                                t+='\n' + esp0 + '__halt_compiler()';
                            }
                            break;
                            
                        case "Stmt_Namespace" :
                            var nom_de_l_espace='';
                            var faire='';
                            if("Name" === stmts[i].name.nodeType){
                                nom_de_l_espace=stmts[i].name.name;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            if(stmts[i].stmts && stmts[i].stmts.length > 0){
                                obj=this.#traite_ast_nikic0( stmts[i].stmts , niveau + 2 , stmts[i] , false , false , options_traitement );
                                if(obj.__xst === __xsu){
                                    faire+=obj.__xva;
                                }else{
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                                }
                            }
                            if(nom_de_l_espace.indexOf( '\\' ) >= 0){
                                t+='\n' + esp0 + 'espace_de_noms(nom_espace(\'' + nom_de_l_espace.replace( /\\/g , '\\\\' ) + '\'),faire(' + faire + '))';
                            }else{
                                t+='\n' + esp0 + 'espace_de_noms(nom_espace(' + nom_de_l_espace + '),faire(' + faire + '))';
                            }
                            break;
                            
                        case "Stmt_Interface" :
                            var nom_de_l_interface='';
                            var faire='';
                            if("Identifier" === stmts[i].name.nodeType){
                                nom_de_l_interface=stmts[i].name.name;
                            }else{
                                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                            }
                            if(stmts[i].stmts && stmts[i].stmts.length > 0){
                                obj=this.#traite_ast_nikic0( stmts[i].stmts , niveau + 2 , stmts[i] , false , false , options_traitement );
                                if(obj.__xst === __xsu){
                                    faire+=obj.__xva;
                                }else{
                                    return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + stmts[i].nodeType ,"element" : stmts[i]} ));
                                }
                            }
                            t+='\n' + esp0 + 'interface(nom_interface(\'' + nom_de_l_interface + '\'),faire(' + faire + '))';
                            break;
                            
                        default:
                            return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'non prévu "' + stmts[i].nodeType + '"' ,"element" : stmts[i]} ));
                            
                    }
                    /* =============================================== */
                }
            }
        }
        /* console.log('stmts'); */
        return({"__xst" : __xsu ,"__xva" : t});
        /* fin de traitement de la boucle principale #traite_ast_nikic0 */
    }
    /*
      =============================================================================================================
      point d'entrée
      =============================================================================================================
    */
    traite_ast_nikic( ast_de_php , options_traitement ){
        let t='';
        let obj=null;
        if(options_traitement !== undefined){
            this.#options_traitement=options_traitement;
        }
        this.#tableau_de_html_dans_php_a_convertir=[];
        /*
          =====================================================================================================
          on boucle sur chaque élément
          =====================================================================================================
        */
        if(ast_de_php.length > 0){
            obj=this.#traite_ast_nikic0( ast_de_php , 0 , null , false , true , options_traitement );
            if(obj.__xst === __xsu){
                t=obj.__xva;
            }else{
                return(this.#astphp_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : ast_de_php} ));
            }
        }
        if(t.substr( 0 , 2 ) === '\r\n'){
            t=t.substr( 2 );
        }else if(t.substr( 0 , 1 ) === '\r'){
            t=t.substr( 1 );
        }else if(t.substr( 0 , 1 ) === '\n'){
            t=t.substr( 1 );
        }
        return({"__xst" : __xsu ,"__xva" : 'php(' + t + ')'});
    }
    /*
      =============================================================================================================
      cette méthode devrait théoriquement être dans un autre module 
      c'est pour cette raison que "this" est templacé par "__m_astphpnikic_vers_rev1"
      =============================================================================================================
    */
    recupere_ast_de_php_du_serveur( source_php , opt , fonction_traitement_apres_recuperation_ast_de_php2_ok , fonction_traitement_apres_recuperation_ast_de_php2_ko ){
        opt.masquer_les_messages_du_serveur=false;
        var ajax_param={"call" : {"lib" : 'php' ,"file" : 'ast' ,"funct" : 'recuperer_ast_de_php2' ,"opt" : opt} ,"source_php" : source_php};
        var r=new XMLHttpRequest();
        r.timeout=4500;
        r.onerror=function( e ){
            debugger;
            console.error( 'e=' , e );
            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()});
        };
        r.onabort=function( e ){
            debugger;
            console.error( 'e=' , e );
            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()});
        };
        r.ontimeout=function( e ){
            /* console.error( 'e=' , e ); */
            var message_erreur={"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'le temps admis pour l\'exécution est écoulé'};
            this.__m_rev1.empiler_erreur( message_erreur );
            fonction_traitement_apres_recuperation_ast_de_php2_ko( '' , null );
            return message_erreur;
        };
        try{
            var numero_de_message=0;
            var page='za_ajax.php?recupererAstDePhp';
            r.open( "POST" , page , true );
            r.setRequestHeader( "Content-Type" , "application/x-www-form-urlencoded;charset=utf-8" );
            r.onreadystatechange=function(){
                /*
                  0 unsent	UNSENT (numeric value 0)	The object has been constructed.
                  1 opened	OPENED (numeric value 1)	The open() method has been successfully invoked. During this state request headers can be set using setRequestHeader() and the fetch can be initiated using the send() method.
                  2 headers received	HEADERS_RECEIVED (numeric value 2)	All redirects (if any) have been followed and all headers of a response have been received.
                  3 loading	LOADING (numeric value 3)	The response body is being received.
                  4 done	DONE (numeric value 4)	The data transfer has been completed or something went wrong during the transfer (e.g., infinite redirects).
                */
                if(r.readyState === 4 && r.status === 200){
                    /* tout est normal, on a tout reçu et on continue le traitement plus bas */
                }else{
                    if(r.status === 404){
                        if(0 === numero_de_message++){
                            this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '<br />404 page "' + page + '" non trouvée'} );
                            __gi1.remplir_et_afficher_les_messages1( '' );
                        }
                        return;
                    }else if(r.status >= 500){
                        if(0 === numero_de_message++){
                            this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '<br />erreur du serveur, peut-être une limite de temps de traitement atteinte'} );
                            __gi1.remplir_et_afficher_les_messages1( '' );
                        }
                        /*
                          ici return est en commentaire car si par exemple il y a une erreur dans un source,
                          alors elle sera traitée dans un boucle suivante car on capture les erreurs php
                        */
                        /* return */
                    }else{
                        if(r.readyState === 0 || r.readyState === 1 || r.readyState === 2 || r.readyState === 3){
                            /* on sort,  on reboucle pour traiter l'état suivant */
                            return;
                        }else{
                            console.log( r.readyState + ' ' + r.status );
                            return;
                        }
                    }
                }
                try{
                    var json_retour=JSON.parse( r.responseText );
                    if(json_retour.hasOwnProperty( 'signaux' )){
                        var tableau_des_signaux=[__xsu,__xer,__xal,__xif];
                        for( let j=0 ; j < tableau_des_signaux.length ; j++ ){
                            if(json_retour.signaux.hasOwnProperty( tableau_des_signaux[j] )){
                                for(let i in json_retour.signaux[tableau_des_signaux[j]]){
                                    if(tableau_des_signaux[j] === __xer){
                                        var le_message=json_retour.signaux[tableau_des_signaux[j]][i];
                                        /*  */
                                        if(le_message.indexOf( ' on line ' ) > 0
                                               && this.__m_rev1.est_num( le_message.substr( le_message.indexOf( ' on line ' ) + 9 ) )
                                        ){
                                            /* en cas d'erreur dans le php à analyser le parseur nikic retourne "blablabla on line 123" */
                                            var la_ligne=parseInt( le_message.substr( le_message.indexOf( ' on line ' ) + 9 ) , 10 );
                                            this.__m_rev1.empiler_erreur( {"__xst" : tableau_des_signaux[j] ,"__xme" : json_retour.signaux[tableau_des_signaux[j]][i] ,"ligne" : la_ligne ,"masquee" : false} );
                                        }else{
                                            /* en cas d'erreur dans le source php coté serveur */
                                            this.__m_rev1.empiler_erreur( {"__xst" : tableau_des_signaux[j] ,"__xme" : json_retour.signaux[tableau_des_signaux[j]][i] ,"masquee" : false} );
                                        }
                                    }else{
                                        this.__m_rev1.empiler_erreur( {"__xst" : tableau_des_signaux[j] ,"__xme" : json_retour.signaux[tableau_des_signaux[j]][i] ,"masquee" : false} );
                                    }
                                }
                                json_retour.signaux[tableau_des_signaux[j]]=[];
                            }
                        }
                    }
                    if(json_retour.__xst === __xsu){
                        if(fonction_traitement_apres_recuperation_ast_de_php2_ok !== undefined){
                            fonction_traitement_apres_recuperation_ast_de_php2_ok( json_retour );
                        }else{
                            this.__m_rev1.empiler_erreur( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'Il manque une fonction de traitement de retour OK'} );
                            console.error( 'veuillez définir une fonction de traitement' );
                        }
                    }else{
                        fonction_traitement_apres_recuperation_ast_de_php2_ko( r.responseText , json_retour );
                    }
                }catch(e){
                    fonction_traitement_apres_recuperation_ast_de_php2_ko( r.responseText , null , e );
                }
            };
            r.send( 'ajax_param=' + encodeURIComponent( JSON.stringify( ajax_param ) ) );
        }catch(e){
            debugger;
            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()});
        }
        return({"__xst" : __xsu});
    }
}
export{c_astphpnikic_vers_rev1 as c_astphpnikic_vers_rev1};