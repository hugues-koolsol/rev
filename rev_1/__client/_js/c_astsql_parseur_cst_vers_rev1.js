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
  conversion d'un ast produit par 
  
  https://www.npmjs.com/package/sql-parser-cst
  https://github.com/nene/sql-parser-cst
  
  point d'entrée = traite_ast_de_sql_parseur_cst
  =====================================================================================================================
*/
class c_astsql_parseur_cst_vers_rev1{
    #nom_de_la_variable='';
    #options_traitement=null;
    __m_rev1=null;
    #meta_table_fait=true;
    #meta_table='';
    /*
      pour intégrer des commentaires rev
    */
    /*
      =============================================================================================================
      le seul argument est pour l'instant le nom de la variable qui est déclarée
    */
    constructor( nom_de_la_variable , module_rev ){
        this.#nom_de_la_variable=nom_de_la_variable;
        this.__m_rev1=module_rev;
    }
    /*
      =============================================================================================================
    */
    #astsql_le( o ){
        /*#
          if(o.hasOwnProperty('element') && o.element && o.element.hasOwnProperty('loc') && o.element.loc.hasOwnProperty('start')){
              o.plage=[o.element.loc.start.offset,o.element.loc.end.offset];
          }
        */
        this.__m_rev1.empiler_erreur( o );
        return o;
    }
    /*
      =============================================================================================================
    */
    #traite_alter_action_drop_column( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let behaviorKw='';
        let column='';
        let ifExistsKw='';
        if(element.behaviorKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.ifExistsKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.column){
            obj1=this.#traite_expr( element.column , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                column=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        t+=' drop_column(\'' + column.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #alter_table_stmt( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let actions='';
        let table='';
        let ifExistsKw='';
        if(element.ifExistsKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.actions && element.actions.type === 'list_expr' && element.actions.items.length > 0){
            for(let i in element.actions.items){
                obj1=this.#traite_expr( element.actions.items[i] , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    actions=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        obj1=this.#traite_expr( element.table , niveau , element , options , vient_de );
        if(obj1.__xst === __xsu){
            table=obj1.__xva;
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(table !== ''){
            t+='modifier_table(';
            t+='   nom_de_la_table(\'' + table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
            t+='   actions(' + actions + ')';
            t+=')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #delete_stmt( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let where_clause='';
        /*
          une seule table pour l'instant 
        */
        let table='';
        if(element.clauses
               && Array.isArray( element.clauses )
               && element.clauses.length >= 1
               && "delete_clause" === element.clauses[0].type
        ){
            if(element.clauses[0].modifiers && element.clauses[0].modifiers.length > 0){
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[0].tables
                   && 'list_expr' === element.clauses[0].tables.type
                   && element.clauses[0].tables.items
                   && element.clauses[0].tables.items.length === 1
            ){
                for(let i in element.clauses[0].tables.items){
                    obj1=this.#traite_expr( element.clauses[0].tables.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        table=obj1.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                }
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses.length > 1){
                if(element.clauses.length === 2){
                    if(element.clauses[1].type === 'where_clause'){
                        vient_de.push( 'where_clause' );
                        obj1=this.#traite_expr( element.clauses[1].expr , niveau , element , options , vient_de );
                        if(obj1.__xst === __xsu){
                            where_clause+=obj1.__xva;
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                        vient_de.pop();
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
            }
            if(table !== ''){
                t+='supprimer(';
                t+='   nom_de_la_table(\'' + table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
                if(where_clause !== ''){
                    t+='   conditions(';
                    t+='      ' + where_clause + '';
                    t+='   )';
                }
                t+=')';
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #update_stmt( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        /*
          une seule table pour l'instant 
        */
        let table='';
        let les_colonnes=[];
        let les_valeurs=[];
        let where_clause='';
        if(element.clauses
               && Array.isArray( element.clauses )
               && element.clauses.length >= 2
               && "update_clause" === element.clauses[0].type
               && 'set_clause' === element.clauses[1].type
        ){
            if(element.clauses[0].orAction){
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[0].modifiers && element.clauses[0].modifiers.length > 0){
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[0].tables
                   && 'list_expr' === element.clauses[0].tables.type
                   && element.clauses[0].tables.items
                   && element.clauses[0].tables.items.length === 1
            ){
                for(let i in element.clauses[0].tables.items){
                    obj1=this.#traite_expr( element.clauses[0].tables.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        table=obj1.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                }
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[1].assignments
                   && 'list_expr' === element.clauses[1].assignments.type
                   && element.clauses[1].assignments.items
                   && element.clauses[1].assignments.items.length >= 1
            ){
                for(let i in element.clauses[1].assignments.items){
                    if(element.clauses[1].assignments.items[i].column && element.clauses[1].assignments.items[i].expr){
                        obj1=this.#traite_expr( element.clauses[1].assignments.items[i].column , niveau , element , options , vient_de );
                        if(obj1.__xst === __xsu){
                            les_colonnes.push( obj1.__xva );
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                        obj1=this.#traite_expr( element.clauses[1].assignments.items[i].expr , niveau , element , options , vient_de );
                        if(obj1.__xst === __xsu){
                            les_valeurs.push( obj1.__xva );
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                    }
                }
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses.length > 2){
                if(element.clauses.length === 3){
                    if(element.clauses[2].type === 'where_clause'){
                        vient_de.push( 'where_clause' );
                        obj1=this.#traite_expr( element.clauses[2].expr , niveau , element , options , vient_de );
                        if(obj1.__xst === __xsu){
                            where_clause+=obj1.__xva;
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                        vient_de.pop();
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
            }
            if(table !== '' && les_colonnes.length === les_valeurs.length && les_valeurs.length >= 1){
                t+='modifier(';
                t+='   nom_de_la_table(\'' + table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
                t+='   valeurs( ';
                for( let i=0 ; i < les_colonnes.length ; i++ ){
                    t+='     affecte( champ(' + les_colonnes[i] + ') , ' + les_valeurs[i] + ' ) , ';
                }
                t+='   )';
                if(where_clause !== ''){
                    t+='   conditions(';
                    t+='      ' + where_clause + '';
                    t+='   )';
                }
                t+=')';
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #insert_stmt( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let les_champs=[];
        let les_valeurs=[];
        let table='';
        if(element.clauses
               && Array.isArray( element.clauses )
               && element.clauses.length === 2
               && 'insert_clause' === element.clauses[0].type
               && 'values_clause' === element.clauses[1].type
        ){
            if(element.clauses[0].orAction){
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[0].modifiers && element.clauses[0].modifiers.length > 0){
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[0].table){
                obj1=this.#traite_expr( element.clauses[0].table , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    table=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[0].columns
                   && element.clauses[0].columns.type === 'paren_expr'
                   && element.clauses[0].columns.expr
                   && element.clauses[0].columns.expr.type === 'list_expr'
                   && element.clauses[0].columns.expr.items
            ){
                for(let i in element.clauses[0].columns.expr.items){
                    obj1=this.#traite_expr( element.clauses[0].columns.expr.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        les_champs.push( obj1.__xva );
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                }
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.clauses[1].values
                   && element.clauses[1].values.type === 'list_expr'
                   && element.clauses[1].values.items
                   && element.clauses[1].values.items.length === 1
                   && element.clauses[1].values.items[0].type === 'paren_expr'
                   && element.clauses[1].values.items[0].expr
                   && element.clauses[1].values.items[0].expr.items
            ){
                for(let i in element.clauses[1].values.items[0].expr.items){
                    obj1=this.#traite_expr( element.clauses[1].values.items[0].expr.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        les_valeurs.push( obj1.__xva );
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                }
            }
            if(table !== '' && les_valeurs.length === les_champs.length && les_valeurs.length > 0){
                t+='insérer(';
                t+=' nom_de_la_table(' + table + '),';
                t+=' valeurs(';
                for( let i=0 ; i < les_champs.length ; i++ ){
                    t+='affecte( champ( ' + les_champs[i] + ' ) , ' + les_valeurs[i] + ')';
                }
                t+=' )';
                t+=')';
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            debugger;
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_index_specification( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let direction='';
        let expr='';
        let nullHandlingKw='';
        let opclass='';
        if(element.direction){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.nullHandlingKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.opclass){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.expr){
            obj1=this.#traite_expr( element.expr , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                expr=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        t+='`' + expr + '`';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #create_index_stmt( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let columns='';
        let name='';
        let table='';
        let meta_index='';
        let indexTypeKw='';
        let clauses='';
        let ifNotExistsKw='';
        let orReplaceKw='';
        if(element.clauses && element.clauses.length > 0){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.ifNotExistsKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.orReplaceKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.indexTypeKw){
            obj1=this.#traite_expr( element.indexTypeKw , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                if('UNIQUE' === obj1.__xva){
                    indexTypeKw='unique()';
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        if(element.columns){
            obj1=this.#traite_expr( element.columns , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                columns=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.name){
            obj1=this.#traite_expr( element.name , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                name=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.table){
            obj1=this.#traite_expr( element.table , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                table=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
            if(element.table.trailing && Array.isArray( element.table.trailing ) && element.table.trailing.length > 0){
                for( let i=0 ; i < element.table.trailing.length ; i++ ){
                    if(element.table.trailing[i].type === 'block_comment'){
                        if(element.table.trailing[i].text.indexOf( 'genre_meta(index_de_table)' ) >= 0){
                            meta_index='' + element.table.trailing[i].text.substr( 2 , element.table.trailing[i].text.length - 4 ) + '';
                        }
                    }
                }
            }else{
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        t+='ajouter_index(';
        t+='   ' + meta_index + '';
        t+='   sur_table( `' + table + '`),';
        t+='   ' + indexTypeKw + '';
        t+='   nom_de_l_index( `' + name + '`),';
        t+='   champs( ' + columns + ')';
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_args( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        vient_de.push( 'args' );
        obj1=this.#traite_expr( element.expr , niveau , element , options , vient_de );
        if(obj1.__xst === __xsu){
            t+=obj1.__xva;
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        vient_de.pop();
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_columns( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let items='';
        vient_de.push( 'columns' );
        for(let i in element.items){
            if(t !== ''){
                t+=',';
            }
            switch (element.items[i].type){
                case 'identifier' : 
                case 'member_expr' :
                    obj1=this.#traite_expr( element.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        if(obj1.__xva.substr( 0 , 6 ) === 'champ('){
                            t+=obj1.__xva;
                        }else{
                            t+='champ(' + obj1.__xva + ')';
                        }
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    break;
                    
                case 'string_literal' :
                    obj1=this.#traite_expr( element.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        t+=obj1.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    break;
                    
                case 'func_call' :
                    let name='';
                    let args='';
                    if(element.items[i].name){
                        obj1=this.#traite_expr( element.items[i].name , niveau , element , options , vient_de );
                        if(obj1.__xst === __xsu){
                            name+=obj1.__xva;
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                        if(element.items[i].args){
                            obj1=this.#traite_args( element.items[i].args , niveau , element , options , vient_de );
                            if(obj1.__xst === __xsu){
                                args+=obj1.__xva;
                            }else{
                                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                            }
                        }
                        switch (name.toLowerCase()){
                            case 'count' : name='compter';
                                break;
                            case 'max' : name='max';
                                break;
                            case 'min' : name='min';
                                break;
                            default:
                                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' ' + name.toLowerCase()} ));
                                
                        }
                        t+=name + args;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' ' } ));
                    }
                    break;
                    
                case 'binary_expr' :
                    obj1=this.#traite_binary_expr( element.items[i] , niveau , element , options , vient_de );
                    if(obj1.__xst === __xsu){
                        t+=obj1.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    break;
                    
                case 'all_columns' : t+='tous_les_champs()';
                    break;
                case 'boolean_literal' : t+=element.items[i].valueKw.name;
                    break;
                case 'number_literal' : t+=element.items[i].value;
                    break;
                default:
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' ' + element.items[i].type } ));
                    break;
                    
            }
        }
        vient_de.pop();
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_binary_expr( element , niveau , parent , options , vient_de ){
        let t='';
        let t1='';
        let t2='';
        let obj1=null;
        let obj2=null;
        vient_de.push( 'binary_expr' );
        obj1=this.#traite_expr( element.left , niveau , element , options , vient_de );
        if(obj1.__xst === __xsu){
            t1=obj1.__xva;
        }else{
            return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : this.__m_rev1.nl2()} ));
        }
        obj2=this.#traite_expr( element.right , niveau , element , options , vient_de );
        if(obj2.__xst === __xsu){
            t2=obj2.__xva;
        }else{
            return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : this.__m_rev1.nl2()} ));
        }
        vient_de.pop();
        let operator='';
        if(Array.isArray( element.operator )){
            for( let i=0 ; i < element.operator.length ; i++ ){
                if(operator !== ''){
                    operator+=' ';
                }
                operator+=element.operator[i].name;
            }
        }else if(element.operator.name){
            operator=element.operator.name;
        }else{
            operator=element.operator;
        }
        switch (operator.toUpperCase()){
            case '=' : t+='egal(' + t1 + ',' + t2 + ')';
                break;
            case 'AND' : t+='et(' + t1 + ',' + t2 + ')';
                break;
            case 'OR' : t+='ou(' + t1 + ',' + t2 + ')';
                break;
            case '<' : t+='inf(' + t1 + ',' + t2 + ')';
                break;
            case '>' : t+='sup(' + t1 + ',' + t2 + ')';
                break;
            case '>=' : t+='supegal(' + t1 + ',' + t2 + ')';
                break;
            case '<=' : t+='infegal(' + t1 + ',' + t2 + ')';
                break;
            case '!=' : 
            case '<>' : t+='diff(' + t1 + ',' + t2 + ')';
                break;
            case 'LIKE' : t+='comme(' + t1 + ',' + t2 + ')';
                break;
            case '+' : t+='plus(' + t1 + ',' + t2 + ')';
                break;
            case '-' : t+='moins(' + t1 + ',' + t2 + ')';
                break;
            case 'IS' : t+='est(' + t1 + ',' + t2 + ')';
                break;
            case 'IS NOT' : t+='n_est_pas(' + t1 + ',' + t2 + ')';
                break;
            case 'NOT LIKE' : t+='pas_comme(' + t1 + ',' + t2 + ')';
                break;
            case 'IN' : t+='dans(' + t1 + ',' + t2 + ')';
                break;
            default:
                return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : operator+ ' ' + this.__m_rev1.nl2()} ));
                break;
                
        }
        if(t.substr( 0 , 6 ) === 'et(et('){
            var obj=this.__m_rev1.rev_tm( t );
            if(obj.__xst === __xsu){
                var nouveau_tableau=this.__m_rev1.baisser_le_niveau_et_supprimer( obj.__xva , 2 , 0 );
                obj=this.__m_rev1.matrice_vers_source_rev1( nouveau_tableau , 0 , false , 1 );
                if(obj.__xst === __xsu){
                    t=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() ,"element" : element} ));
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      dans les left join : on a = b
    */
    #traite_specification( element , niveau , parent , options , vient_de ){
        let t='';
        let t1='';
        let t2='';
        let obj1=null;
        let obj2=null;
        switch (element.type){
            case 'join_on_specification' :
                vient_de.push( 'join_on_specification' );
                obj1=this.#traite_expr( element.expr , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    t+='contrainte(' + obj1.__xva + ')';
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            default: 
                return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : this.__m_rev1.nl2()} ));
                break;
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_list_expr( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        vient_de.push( 'list_expr' );
        for( let i=0 ; i < element.items.length ; i++ ){
            obj1=this.#traite_expr( element.items[i] , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                if(t !== ''){
                    t+=',';
                }
                t+=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        vient_de.pop();
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_func_args( element , niveau , parent , options , vient_de ){
        let t='';
        let args='';
        let distinctKw='';
        let having='';
        let limit='';
        let nullHandlingKw='';
        let orderBy='';
        let obj1=null;
        vient_de.push( 'func_args' );
        /*
          
          args: {type: 'list_expr', items: Array(1), range: Array(2)}
          distinctKw: undefined
          having: undefined
          leading: [{…}]
          limit: undefined
          nullHandlingKw: undefined
          orderBy: undefined
          type: "func_args"
          
        */
        if(element.distinctKw
               || element.limit
               || element.having
               || element.nullHandlingKw
               || element.orderBy
        ){
            return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : this.__m_rev1.nl2() + ' a traiter'} ));
        }
        if(element.args){
            obj1=this.#traite_expr( element.args , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                args+=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        t+=args;
        vient_de.pop();
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_sort_specification( element , niveau , parent , options , vient_de ){
        let t='';
        let t1='';
        let t2='';
        let obj1=null;
        let obj2=null;
        let direction='';
        let expr='';
        vient_de.push( 'sort_specification' );
        if(element.direction){
            if(element.direction.type === 'sort_direction_asc'){
                direction='croissant()';
            }else if(element.direction.type === 'sort_direction_desc'){
                direction='décroissant()';
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.expr){
            obj1=this.#traite_expr( element.expr , niveau , element , options , vient_de );
            if(obj1.__xst === __xsu){
                expr=obj1.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        t='(' + expr + ',' + direction + ')';
        vient_de.pop();
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_column_definition( element , niveau , parent , options , vient_de ){
        let t='';
        let obj1=null;
        let constraints='';
        /*
          {type: 'constraint_primary_key', primaryKeyKw: Array(2), direction: undefined, clauses: Array(0), range: Array(2), …}
          {type: 'constraint_auto_increment', autoIncrementKw: {…}, range: Array(2), leading: Array(1)}
          {type: 'constraint_not_null', notNullKw: Array(2), clauses: Array(0), range: Array(2), leading: Array(1)}
        */
        let dataType='';
        /*
          {type: 'named_data_type', name: {…}, range: Array(2), leading: Array(1)}
        */
        let name='';
        obj1=this.#traite_expr( element.name , niveau , element , options , vient_de );
        if(obj1.__xst === __xsu){
            name=obj1.__xva;
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.dataType){
            if(element.dataType
                   && element.dataType.hasOwnProperty( 'params' )
                   && element.dataType.params.hasOwnProperty( 'expr' )
                   && element.dataType.params.expr.items[0].type === 'number_literal'
            ){
                dataType=element.dataType.name.name + '(' + element.dataType.params.expr.items[0].value + ')';
            }else{
                dataType=element.dataType.name.name;
            }
        }else{
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' type de donnée non précisé pour le champ ' + name + ' '} ));
        }
        if(element.constraints){
            for( let i=0 ; i < element.constraints.length ; i++ ){
                if('constraint_primary_key' === element.constraints[i].type){
                    constraints+='primary_key()';
                }else if('constraint_auto_increment' === element.constraints[i].type){
                    constraints+='auto_increment()';
                }else if("constraint_not_null" === element.constraints[i].type){
                    constraints+='non_nulle()';
                }else if("references_specification" === element.constraints[i].type){
                    constraints+='references(`' + element.constraints[i].table.name + '` , `' + element.constraints[i].columns.expr.items[0].name + '`)';
                }else if("constraint_default" === element.constraints[i].type){
                    if('string_literal' === element.constraints[i].expr.type){
                        constraints+='a_une_valeur_par_defaut(1),';
                        constraints+='la_valeur_par_defaut_est_caractere(1),';
                        constraints+='valeur_par_defaut(\'' + element.constraints[i].expr.value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ).replace( /___deux___points___/g , ':' ) + '\')';
                    }else if('null_literal' === element.constraints[i].expr.type){
                        constraints+='a_une_valeur_par_defaut(1),';
                        constraints+='la_valeur_par_defaut_est_caractere(0),';
                        constraints+='valeur_par_defaut(' + element.constraints[i].expr.value + ')';
                    }else if('number_literal' === element.constraints[i].expr.type){
                        constraints+='a_une_valeur_par_defaut(1),';
                        constraints+='la_valeur_par_defaut_est_caractere(0),';
                        constraints+='valeur_par_defaut(' + element.constraints[i].expr.value + ')';
                    }else{
                        console.log( element.constraints[i] );
                        debugger;
                    }
                }else{
                    console.log( element.constraints[i] );
                    debugger;
                }
            }
        }
        /*
          nom_du_champ( `chi_id_y`),
          type(integer),
          primary_key(),
          auto_increment(),
          non_nulle()
          
        */
        let meta_champ='';
        if(element.leading && Array.isArray( element.leading ) && element.leading.length > 0){
            for( let i=0 ; i < element.leading.length ; i++ ){
                if(element.leading[i].type === 'block_comment'){
                    if(element.leading[i].text.indexOf( 'genre_meta(champ)' ) >= 0){
                        meta_champ='' + element.leading[i].text.substr( 2 , element.leading[i].text.length - 4 ) + '';
                    }
                }
            }
        }else{
            if(parent.leading && Array.isArray( parent.leading ) && parent.leading.length > 0){
                for( let i=0 ; i < parent.leading.length ; i++ ){
                    if(parent.leading[i].type === 'block_comment'){
                        if(this.#meta_table_fait === false && parent.leading[i].text.indexOf( 'genre_meta(table_de_base)' ) >= 0){
                            this.#meta_table='' + parent.leading[i].text.substr( 2 , parent.leading[i].text.length - 4 ) + '';
                            this.#meta_table_fait=true;
                        }else if(parent.leading[i].text.indexOf( 'genre_meta(champ)' ) >= 0){
                            meta_champ='' + parent.leading[i].text.substr( 2 , parent.leading[i].text.length - 4 ) + '';
                        }
                    }
                }
            }
        }
        t+='champ(';
        t+=meta_champ;
        t+='nom_du_champ( `' + name + '`),';
        t+='type(' + dataType + ')';
        t+='' + constraints + '';
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_expr( element , niveau , parent , options , vient_de ){
        let t='';
        let t1='';
        let t2='';
        let obj1=null;
        let obj2=null;
        switch (element.type){
            case 'keyword' : t=element.name;
                break;
            case 'number_literal' : t+=element.value;
                break;
            case 'string_literal' :
                t+='\'' + element.value.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'';
                break;
                
            case 'null_literal' : t+='NULL';
                break;
            case 'identifier' :
                t+=element.name.replace( /___deux___points___/g , ':' );
                /*#
                  if[vient_de.length-2>=0 && [ vient_de[vient_de.length-2]==='from_clause' ||  vient_de[vient_de.length-2]==='join_expr' ] ]{
                      t+='source[nom_de_la_table['+element.name+']]';
                  }else if[vient_de.length-2>=0 && vient_de[vient_de.length-2]==='select_clause' && vient_de[vient_de.length-1]==='columns' ] ]{
                      t+='champ[`'+element.name+'`]';
                  }else{
                   
                  }
                */
                break;
                
            case 'join_expr' :
                vient_de.push( 'join_expr' );
                obj1=this.#traite_expr( element.left , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    t1=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : this.__m_rev1.nl2() + ' ' + element.type} ));
                }
                obj2=this.#traite_expr( element.right , niveau , element , options , vient_de );
                if(obj2.__xst === __xsu){
                    t2=obj2.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xsu ,"__xme" : this.__m_rev1.nl2() + ' ' + element.type} ));
                }
                vient_de.pop();
                switch (parent.type){
                    case 'select_stmt' :
                        if(element.hasOwnProperty( 'operator' ) && Array.isArray( element.operator )){
                            if(element.operator.length === 2
                                   && element.operator[0].type === 'keyword'
                                   && element.operator[1].type === 'keyword'
                                   && element.operator[0].name.toUpperCase() === 'LEFT'
                                   && element.operator[1].name.toUpperCase() === 'JOIN'
                            ){
                                let specification='';
                                if(element.specification){
                                    vient_de.push( 'join_expr' );
                                    obj2=this.#traite_specification( element.specification , niveau , element , options , vient_de );
                                    if(obj2.__xst === __xsu){
                                        specification=obj2.__xva;
                                    }else{
                                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                                    }
                                    vient_de.pop();
                                }
                                if(t1.substr( 0 , 15 ) === 'table_reference'){
                                    t+=t1;
                                }else{
                                    if(t1.substr( 0 , 7 ) === 'source('){
                                        t+='table_reference(' + t1 + ')';
                                    }else{
                                        t+='table_reference(source(nom_de_la_table(' + t1 + ')))';
                                    }
                                }
                                if(t2.substr( 0 , 7 ) === 'source('){
                                    t+='jointure_gauche(' + t2 + ',#(1),' + specification + ')';
                                    /* contrainte[egal[champ[`t2`,`id`] , champ[`t1`,`xref`]]]],'; */
                                }else{
                                    t+='jointure_gauche(source(nom_de_la_table(' + t2 + ')),' + specification + ')';
                                    /* contrainte[egal[champ[`t2`,`id`] , champ[`t1`,`xref`]]]],'; */
                                }
                            }else{
                                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                            }
                        }else if(element.hasOwnProperty( 'operator' ) && element.operator === ','){
                            t+='table_reference(' + t1 + ')';
                            t+='jointure_croisée(' + t2 + ')';
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                        break;
                        
                    case 'join_expr' :
                        if(t1.substr( 0 , 7 ) === 'source('){
                            t+='table_reference(' + t1 + '),';
                        }else{
                            t+='table_reference(source(nom_de_la_table(' + t1 + '))),';
                        }
                        if(parent.operator.length === 2
                               && parent.operator[0].name.toUpperCase() === 'LEFT'
                               && parent.operator[1].name.toUpperCase() === 'JOIN'
                        ){
                            let specification='';
                            if(element.specification){
                                vient_de.push( 'join_expr' );
                                obj2=this.#traite_specification( element.specification , niveau , parent , options , vient_de );
                                if(obj2.__xst === __xsu){
                                    specification=obj2.__xva;
                                }else{
                                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                                }
                                vient_de.pop();
                            }
                            if(t2.substr( 0 , 7 ) === 'source('){
                                t+='jointure_gauche(' + t2 + ',#(2),' + specification + '),';
                            }else{
                                t+='jointure_gauche(source(nom_de_la_table(' + t2 + ')),' + specification + '),';
                            }
                        }else{
                            if(t2.substr( 0 , 7 ) === 'source('){
                                t+='jointure_croisée(' + t2 + '),';
                            }else{
                                t+='jointure_croisée(source(nom_de_la_table(' + t2 + '))),';
                            }
                        }
                        break;
                        
                    default:
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        
                }
                break;
                
            case 'alias' :
                vient_de.push( 'alias' );
                obj1=this.#traite_expr( element.expr , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    t1=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                obj2=this.#traite_expr( element.alias , niveau , element , options , vient_de );
                if(obj2.__xst === __xsu){
                    t2=obj2.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                switch (parent.type){
                    case 'join_expr' :
                        if(vient_de.length - 2 >= 0 && vient_de[vient_de.length - 2] === 'from_clause'){
                            t+='source(nom_de_la_table(' + t1 + ',alias(' + t2 + ')))';
                        }else if(vient_de.length - 2 >= 0 && vient_de[vient_de.length - 2] === 'join_expr'){
                            t+='source(nom_de_la_table(' + t1 + ',alias(' + t2 + ')))';
                        }else{
                            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        }
                        break;
                        
                    case 'select_stmt' :
                        if(vient_de.length - 1 >= 0 && vient_de[vient_de.length - 1] === 'from_clause'){
                            t+='table_reference(source(nom_de_la_table(' + t1 + ',alias(' + t2 + '))))';
                        }else{
                            t+='source(nom_de_la_table(' + t1 + ',alias(' + t2 + ')))';
                        }
                        break;
                        
                    default:
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                        
                }
                break;
                
            case 'member_expr' :
                vient_de.push( 'member_expr' );
                obj1=this.#traite_expr( element.object , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    t1=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                obj2=this.#traite_expr( element.property , niveau , element , options , vient_de );
                if(obj2.__xst === __xsu){
                    t2=obj2.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                if(vient_de.length >= 1 && vient_de[vient_de.length - 1] === "delete_stmt"){
                    if(t1 !== ''){
                        t+='`' + t1 + '`.`' + t2 + '`';
                    }else{
                        t+='`' + t2 + '`';
                    }
                }else if(vient_de.length >= 1 && vient_de[vient_de.length - 1] === "update_stmt"){
                    if(t1 !== ''){
                        t+='`' + t1 + '`.`' + t2 + '`';
                    }else{
                        t+='`' + t2 + '`';
                    }
                }else if(vient_de.length >= 1 && vient_de[vient_de.length - 1] === "insert_clause"){
                    if(t1 !== ''){
                        t+='`' + t1 + '`.`' + t2 + '`';
                    }else{
                        t+='`' + t2 + '`';
                    }
                }else if(vient_de.length >= 2 && vient_de[vient_de.length - 2] === "from_clause"){
                    t+='`' + t2 + '` , base(`' + t1 + '`)';
                }else if(vient_de.length >= 2 && vient_de[vient_de.length - 2] === "join_expr"){
                    t+='`' + t2 + '` , base(`' + t1 + '`)';
                }else{
                    t+='champ( `' + t1 + '` , `' + t2 + '`)';
                }
                break;
                
            case 'binary_expr' :
                obj1=this.#traite_binary_expr( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t+=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                break;
                
            case 'paren_expr' :
                vient_de.push( 'paren_expr' );
                obj1=this.#traite_expr( element.expr , niveau , element , options , vient_de );
                if(obj1.__xst === __xsu){
                    t='(' + obj1.__xva + ')';
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            case 'func_args' :
                vient_de.push( 'func_args' );
                obj1=this.#traite_func_args( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t='(' + obj1.__xva + ')';
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            case 'list_expr' :
                vient_de.push( 'list_expr' );
                obj1=this.#traite_list_expr( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                break;
                
            case 'all_columns' : t+='tous_les_champs()';
                break;
            case 'sort_specification' :
                vient_de.push( 'list_expr' );
                obj1=this.#traite_sort_specification( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            case 'column_definition' :
                vient_de.push( 'column_definition' );
                obj1=this.#traite_column_definition( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            case 'index_specification' :
                vient_de.push( 'index_specification' );
                obj1=this.#traite_index_specification( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            case 'alter_action_drop_column' :
                vient_de.push( 'alter_action_drop_column' );
                obj1=this.#traite_alter_action_drop_column( element , niveau , parent , options , vient_de );
                if(obj1.__xst === __xsu){
                    t=obj1.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
                break;
                
            default: 
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                break;
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_limit( element , niveau , parent , options , vient_de ){
        let t='';
        let obj=null;
        let count='';
        let offset='';
        vient_de.push( 'limit' );
        if(element.offset){
            obj=this.#traite_expr( element.offset , niveau , element , options , vient_de );
            if(obj.__xst === __xsu){
                offset=obj.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        if(element.count){
            obj=this.#traite_expr( element.count , niveau , element , options , vient_de );
            if(obj.__xst === __xsu){
                count=obj.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        vient_de.pop();
        if(count !== ''){
            t+='quantité(' + count + ')';
        }
        if(offset !== ''){
            t+='début(' + offset + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_create_table_stmt( element , niveau , parent , options , vient_de ){
        let t='';
        let obj=null;
        let clauses='';
        let ifNotExistsKw='';
        let kind='';
        let ofType='';
        let loptions='';
        let orReplaceKw='';
        let partitionOf='';
        let columns='';
        let name='';
        this.#meta_table_fait=false;
        this.#meta_table='';
        if(Array.isArray( element.clauses ) && element.clauses.length > 0){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.ifNotExistsKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.kind){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.ofType){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.options){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.orReplaceKw){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        if(element.columns){
            obj=this.#traite_expr( element.columns , niveau , element , options , vient_de );
            if(obj.__xst === __xsu){
                columns=obj.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        if(element.name){
            obj=this.#traite_expr( element.name , niveau , element , options , vient_de );
            if(obj.__xst === __xsu){
                name=obj.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        t+='créer_table(';
        t+=this.#meta_table;
        t+=' nom_de_la_table(' + name + '),';
        t+=' champs' + columns + ',';
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #convertit_select( element , niveau , parent , options , vient_de ){
        let t='';
        let obj=null;
        let select_clause='';
        let from_clause='';
        let where_clause='';
        let order_by_clause='';
        let limit_clause='';
        for(let i in element.clauses){
            switch (element.clauses[i].type){
                case 'select_clause' :
                    vient_de.push( 'select_clause' );
                    obj=this.#traite_columns( element.clauses[i].columns , niveau , element , options , vient_de );
                    if(obj.__xst === __xsu){
                        select_clause+=obj.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    vient_de.pop();
                    break;
                    
                case 'from_clause' :
                    vient_de.push( 'from_clause' );
                    obj=this.#traite_expr( element.clauses[i].expr , niveau , element , options , vient_de );
                    if(obj.__xst === __xsu){
                        if(obj.__xva.substr( 0 , 16 ) === 'table_reference('){
                            from_clause+=obj.__xva;
                        }else{
                            from_clause+='table_reference(source(nom_de_la_table(`' + obj.__xva + '`)))';
                        }
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    vient_de.pop();
                    break;
                    
                case 'where_clause' :
                    vient_de.push( 'where_clause' );
                    obj=this.#traite_expr( element.clauses[i].expr , niveau , element , options , vient_de );
                    if(obj.__xst === __xsu){
                        where_clause+=obj.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    vient_de.pop();
                    break;
                    
                case 'order_by_clause' :
                    vient_de.push( 'order_by_clause' );
                    obj=this.#traite_expr( element.clauses[i].specifications , niveau , element , options , vient_de );
                    if(obj.__xst === __xsu){
                        order_by_clause+=obj.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    vient_de.pop();
                    break;
                    
                case 'limit_clause' :
                    vient_de.push( 'limit_clause' );
                    obj=this.#traite_limit( element.clauses[i] , niveau , element , options , vient_de );
                    if(obj.__xst === __xsu){
                        limit_clause+=obj.__xva;
                    }else{
                        return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    }
                    vient_de.pop();
                    break;
                    
                default:
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                    break;
                    
            }
        }
        t+='sélectionner(';
        t+='valeurs(' + select_clause + '),';
        t+='provenance(' + from_clause + '),';
        if(where_clause !== ''){
            t+='conditions(' + where_clause + '),';
        }
        if(order_by_clause !== '' || limit_clause !== ''){
            t+='complements(';
            if(order_by_clause !== ''){
                t+='trier_par(' + order_by_clause + '),';
            }
            if(limit_clause !== ''){
                t+='limité_à(' + limit_clause + '),';
            }
            t+=')';
        }
        if(element.trailing && Array.isArray( element.trailing )){
            for( let i=0 ; i < element.trailing.length ; i++ ){
                if(element.trailing[i].type === 'block_comment'){
                    t+='#(' + element.trailing[i].text.substr( 2 , element.trailing[i].text.length - 4 ) + ')';
                }
            }
        }
        t+=')';
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    #traite_ast_sql_parseur_cst( element , niveau , parent , options={} , vient_de ){
        let t='';
        let obj=null;
        var esp0=' '.repeat( NBESPACESREV * niveau );
        var esp1=' '.repeat( NBESPACESREV );
        if(element === null){
            return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'null'} ));
        }
        if(element.hasOwnProperty( 'leading' )){
            let tableau=element.leading;
            for( let i=0 ; i < tableau.length ; i++ ){
                vient_de.push( 'leading' );
                obj=this.#traite_ast_sql_parseur_cst( tableau[i] , 0 , element , options );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
                vient_de.pop();
            }
        }
        switch (element.type){
            case 'empty' : 
            case 'newline' : t+='';
                break;
            case 'space' : t+=' ';
                break;
            case 'line_comment' :
                t+='#(' + element.text.substr( 2 ).replace( /\(/g , '(' ).replace( /\)/g , ')' ) + ')';
                break;
                
            case 'block_comment' :
                if(element.text.indexOf( 'genre_meta(base_de_données)' ) >= 0){
                }else{
                    t+='#(' + element.text.substr( 2 , element.text.length - 4 ).replace( /\(/g , '(' ).replace( /\)/g , ')' ) + ')';
                }
                break;
                
            case 'commit_transaction_stmt' : t+='commit()';
                break;
            case 'rollback_transaction_stmt' : t+='rollback()';
                break;
            case 'start_transaction_stmt' : t+='transaction()';
                break;
            case 'select_stmt' :
                vient_de.push( 'select_stmt' );
                obj=this.#convertit_select( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            case 'create_table_stmt' :
                vient_de.push( 'create_table_stmt' );
                obj=this.#traite_create_table_stmt( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            case 'create_index_stmt' :
                vient_de.push( 'create_index_stmt' );
                obj=this.#create_index_stmt( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            case 'insert_stmt' :
                vient_de.push( 'insert_stmt' );
                obj=this.#insert_stmt( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            case 'update_stmt' :
                vient_de.push( 'update_stmt' );
                obj=this.#update_stmt( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            case 'delete_stmt' :
                vient_de.push( 'delete_stmt' );
                obj=this.#delete_stmt( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            case 'alter_table_stmt' :
                vient_de.push( 'alter_table_stmt' );
                obj=this.#alter_table_stmt( element , niveau , parent , options , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select'} ));
                }
                vient_de.pop();
                break;
                
            default:
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    traite_ast_de_sql_parseur_cst( ast , options_traitement ){
        let t='';
        let obj=null;
        let vient_de=['racine'];
        if(ast.hasOwnProperty( 'leading' )){
            let tableau=ast.leading;
            for( let i=0 ; i < tableau.length ; i++ ){
                obj=this.#traite_ast_sql_parseur_cst( tableau[i] , 0 , null , options_traitement , vient_de );
                if(obj.__xst === __xsu){
                    t+=obj.__xva;
                }else{
                    return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
                }
            }
        }
        let tableau=ast.statements;
        let meta_bdd='';
        if(ast.leading && Array.isArray( ast.leading ) && ast.leading.length > 0){
            for( let i=0 ; i < ast.leading.length ; i++ ){
                if(ast.leading[i].type === 'block_comment' && ast.leading[i].text.indexOf( 'genre_meta(base_de_données)' ) >= 0){
                    meta_bdd=ast.leading[i].text.substr( 2 , ast.leading[i].text.length - 4 );
                }
            }
        }
        t+=meta_bdd;
        for( let i=0 ; i < tableau.length ; i++ ){
            obj=this.#traite_ast_sql_parseur_cst( tableau[i] , 0 , null , options_traitement , vient_de );
            if(obj.__xst === __xsu){
                t+=obj.__xva;
            }else{
                return(this.#astsql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' '} ));
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
}
export{c_astsql_parseur_cst_vers_rev1 as c_astsql_parseur_cst_vers_rev1};