"use strict";
const CRLF="\r\n";
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
/*
  =====================================================================================================================
  point d'entrée : c_tab_vers_sql
  =====================================================================================================================
*/
class c_rev_vers_sql1{
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
    #rev_sql_le( o ){
        if(o.hasOwnProperty( 'id' )){
            o.plage=[this.#tb[o.id][5],this.#tb[o.id][6]];
        }
        this.__m_rev1.empiler_erreur( o );
        return o;
    }
    /*
      =============================================================================================================
    */
    #recuperer_operateur_sqlite( op ){
        var t='';
        if(op === ''){
            t='';
        }else if(op === 'décroissant'){
            t='DESC';
        }else if(op === 'croissant'){
            t='ASC';
        }else if(op === 'plus'){
            t='+';
        }else if(op === 'moins'){
            t='-';
        }else if(op === 'mult'){
            t='*';
        }else if(op === 'divi'){
            t='/';
        }else if(op === 'egal'){
            t=' = ';
        }else if(op === 'supegal'){
            t=' >= ';
        }else if(op === 'infegal'){
            t=' <= ';
        }else if(op === 'sup'){
            t=' > ';
        }else if(op === 'inf'){
            t=' < ';
        }else if(op === 'diff'){
            t=' <> ';
        }else if(op === 'comme'){
            t=' LIKE ';
        }else if(op === 'pas_comme'){
            t=' NOT LIKE ';
        }else if(op === 'pas_equivalent'){
            t=' NOT LIKE ';
        }else if(op === 'equivalent'){
            t=' LIKE ';
        }else if(op === 'et'){
            t=' AND ';
        }else if(op === 'ou'){
            t=' OR ';
        }else if(op === 'champ'){
            t='';
        }else if(op === 'tous_les_champs'){
            t='* ';
        }else if(op === 'concat'){
            t='concat';
        }else if(op === 'nombre_d_element'){
            t='nombre_d_element';
        }else if(op === 'compter'){
            t='compter';
        }else if(op === 'limité_à'){
            t='LIMIT';
        }else if(op === 'quantité'){
            t='';
        }else if(op === 'début'){
            t='OFFSET';
        }else if(op === '#'){
            t='/* */';
        }else if(op === 'conditions'){
            t='';
        }else if(op === 'dans'){
            t=' IN ';
        }else if(op === 'est'){
            t=' IS ';
        }else if(op === 'max'){
            t='MAX';
        }else if(op === 'min'){
            t='MIN';
        }else if(op === 'n_est_pas'){
            t=' IS NOT ';
        }else{
            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' inconnu opérateur "' + op + '"'} ));
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
    */
    traite_sqlite_fonction_de_champ( tab , id , niveau , options ){
        var t='';
        if(tab[id][1] === 'champ' && tab[id][2] === 'f'){
            if(tab[id][8] === 1 && tab[id + 1][2] === 'c'){
                t+=this.__m_rev1.ma_constante( tab[id + 1] );
                return({"__xst" : __xsu ,"__xva" : t});
            }else if(tab[id][8] === 2 && tab[id + 1][2] === 'c' && tab[id + 2][2] === 'c'){
                t+=this.__m_rev1.ma_constante( tab[id + 1] ) + '.' + this.__m_rev1.ma_constante( tab[id + 2] );
                if(options.au_format_php === true
                       && options.hasOwnProperty( 'pour_where' )
                       && options.pour_where === true
                       && options.hasOwnProperty( 'tableau_des_tables_utilisees' )
                       && options.tableau_des_tables_utilisees.length > 0
                ){
                    for( var i=0 ; i < options.tableau_des_tables_utilisees.length ; i++ ){
                        if(options.tableau_des_tables_utilisees[i].nom_de_l_alias === tab[id + 1][1]){
                            for( var j=0 ; j < options.tableau_des_tables_utilisees[i].champs.length ; j++ ){
                                try{
                                    if(options.tableau_des_tables_utilisees[i].champs[j].hasOwnProperty( 'nom_du_champ' )
                                           && options.tableau_des_tables_utilisees[i].champs[j].nom_du_champ === tab[id + 2][1]
                                    ){
                                        options.type_de_champ_pour_where=options.tableau_des_tables_utilisees[i].champs[j].type;
                                        options.nom_du_champ_pour_where=this.__m_rev1.ma_constante( tab[id + 1] ) + '.' + this.__m_rev1.ma_constante( tab[id + 2] );
                                        break;
                                    }
                                }catch(e){
                                    debugger;
                                }
                            }
                        }
                    }
                }
                return({"__xst" : __xsu ,"__xva" : t});
            }else{
                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
            }
        }
        var operateur_rev=tab[id][1];
        if(operateur_rev === 'sql'){
            /*
              un sql dans un autre sql , par exemple select * from a where id in (select id from b); 
            */
            debugger;
            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'problème sur sql dans sql '} ));
            /*#            
              var obj=this.#rev_sql1(id,niveau,options);
              if(obj.__xst === __xsu){
                  if(obj.__xva.substr(obj.__xva.length - 1,1) === ';'){
                      obj.__xva=obj.__xva.substr(0,obj.__xva.length - 1);
                  }
                  t+=obj.__xva;
              }else{
                  return(this.#rev_sql_le({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()}));
              }
              return({"__xst" : __xsu ,"__xva" : t ,"operateur" : operateur_rev});
            */
        }
        var operateur='';
        var obj_op=this.#recuperer_operateur_sqlite( tab[id][1] );
        if(obj_op.__xst === __xsu){
            operateur=obj_op.__xva;
            if(tab[id][8] === 0){
                /*
                  si c'est un opérateur de type décroissant() dans "trier_par( champ(...) , décroissant())"
                  de même : tous_les_champs() , #
                */
                return({"__xst" : __xsu ,"__xva" : ' ' + operateur ,"operateur_retour" : tab[id][1]});
            }
        }else{
            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'problème sur l\'opérateur'} ));
        }
        var premierChamp=true;
        var l01=tab.length;
        for( var i=id + 1 ; i < l01 ; i=tab[i][12] ){
            if(premierChamp === false){
                if(operateur === 'CONCAT' || operateur === 'MAX' || operateur === 'MIN'){
                    t+=',';
                }else if(operateur === 'LIMIT'){
                    t=' LIMIT ' + t;
                }else if(operateur === '' && tab[tab[i][7]][1] === '' && tab[tab[i][7]][2] === 'f' && tab[tab[id][7]][1] === 'dans'){
                    /* suite d'éléments comme dans un IN () */
                    t+=',';
                }else{
                    t+=operateur;
                }
            }
            if(tab[i][2] === 'c'){
                if(tab[i][1].toLowerCase() === 'null'){
                    t+='NULL';
                }else{
                    if(tab[i][4] === 0){
                        if(options.au_format_php === true){
                            if(tab[i][1].substr( 0 , 1 ) === ':'){
                                if(operateur_rev === '' && tab[tab[id][7]][1] === 'dans' || operateur_rev === 'dans'){
                                    t+='\'.sq0($par[\'' + tab[i][1].substr( 1 ) + '\']).\'';
                                }else{
                                    if(operateur_rev === 'equivalent' || operateur_rev === 'pas_equivalent'){
                                        t+='\'.sq3($par[\'' + tab[i][1].substr( 1 ) + '\']).\'';
                                    }else if(operateur_rev === 'comme' || operateur_rev === 'pas_comme'){
                                        t+='\'.sq2($par[\'' + tab[i][1].substr( 1 ) + '\']).\'';
                                    }else{
                                        t+='\'.sq1($par[\'' + tab[i][1].substr( 1 ) + '\']).\'';
                                    }
                                }
                            }else{
                                if(operateur_rev === 'moins' && tab[tab[i][7]][8] === 1){
                                    t+='-' + tab[i][1];
                                }else{
                                    t+=tab[i][1];
                                }
                            }
                        }else{
                            if(operateur_rev === 'moins' && tab[tab[i][7]][8] === 1){
                                t+='-' + tab[i][1];
                            }else{
                                t+=tab[i][1];
                            }
                        }
                    }else{
                        if(options.au_format_php === true){
                            if(tab[i][1].substr( 0 , 1 ) === ':'){
                                if(operateur_rev === '' && tab[tab[id][7]][1] === 'dans' || operateur_rev === 'dans'){
                                    debugger;
                                    t+='\'.sq0($par[\'' + tab[i][1].substr( 1 ).replace( /\'/g , "''" ) + '\']).\'';
                                }else{
                                    t+='\'.sq1($par[\'' + tab[i][1].substr( 1 ).replace( /\'/g , "''" ) + '\']).\'';
                                }
                            }else{
                                t+='\'' + tab[i][1].replace( /\'/g , "''" ) + '\'';
                            }
                        }else{
                            t+='\'' + tab[i][1].replace( /\'/g , "''" ) + '\'';
                        }
                    }
                }
                premierChamp=false;
            }else{
                var obj=this.traite_sqlite_fonction_de_champ( tab , i , niveau , options );
                if(obj.__xst === __xsu){
                    if(premierChamp === false && tab[i][1] === 'sql' && tab[i][2] === 'f'){
                        t+='(' + obj.__xva + ')';
                    }else{
                        t+=obj.__xva;
                    }
                    if(obj.operateur_retour && obj.operateur_retour === '#' && premierChamp === true){
                        /*
                          cas d'un commentaire avant les contitions,
                          / *  * /`T0`.`chi_id_test` = :par0 AND `T0`.`chp_nom_test` = :par1
                          le commentaire n'est pas un premier champ
                        */
                        t+=' ';
                    }else{
                        premierChamp=false;
                    }
                }else{
                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + '"' + tab[i][1] + '"'} ));
                }
            }
        }
        if(operateur === 'conditions'){
            t+='';
        }else if(operateur.substr( 0 , 7 ) === 'inconnu'){
            t+='/* ' + operateur + ' */';
        }else if(operateur === '#'){
            t='/* ' + t.trim() + ' */';
        }else if(operateur.toUpperCase() === 'DESC'){
            t+=' DESC';
        }else if(operateur.toUpperCase() === 'ASC'){
            t+=' ASC';
        }else if(operateur.toLowerCase() === 'compter'){
            t='COUNT(' + t + ')';
        }else if(operateur.toLowerCase() === 'tous_les_champs'){
            t='*';
        }else if(operateur.toUpperCase() === 'MIN'){
            t='MIN(' + t + ')';
        }else if(operateur.toUpperCase() === 'MAX'){
            t='MAX(' + t + ')';
        }else if(operateur.toUpperCase() === 'CONCAT'){
            t='CONCAT(' + t + ')';
        }else if(operateur === '' && tab[tab[id][7]][1].toLowerCase() === 'dans' && tab[tab[id][7]][2] === 'f'){
            t='(' + t + ')';
        }else if(operateur.toUpperCase() === 'OFFSET'){
            t=' OFFSET ' + t + ' ';
        }
        if(operateur === '+'
               || operateur === '-'
               || operateur === '*'
               || operateur === '/'
               || operateur === ' AND '
               || operateur === ' OR '
        ){
            t='(' + t + ')';
        }
        return({"__xst" : __xsu ,"__xva" : t ,"operateur_retour" : operateur});
    }
    /*
      =============================================================================================================
    */
    #rev_sql1( id , niveau , options ){
        let obj=null;
        let t='';
        let i=0;
        let j=0;
        let k=0;
        let l=0;
        let m=0;
        let n=0;
        let o=0;
        let c='';
        var nam='';
        var oldnam='';
        var list='';
        var conditions='';
        var def='';
        var uniq='';
        var la_valeur='';
        var liste_des_valeurs='';
        var premiere_jointure_croisee=true;
        var un_espace=this.__m_rev1.resps( niveau );
        var meta='';
        let nom_de_la_table='';
        if(this.#tb[id][1] === 'bases' && this.#tb[id][2] === 'f'){
            return({"__xst" : __xsu ,"__xva" : ''});
        }
        for( i=id + 1 ; i < this.#l02 ; i=this.#tb[i][12] ){
            if(t !== ''){
                t+=un_espace;
            }
            if(this.#tb[i][2] === 'c'){
                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'constante non traitée'} ));
            }else{
                switch (this.#tb[i][1]){
                    case 'sql' : 
                    case 'requete_manuelle' :
                        obj=this.#rev_sql1( i , niveau + 1 , options );
                        if(obj.__xst === __xsu){
                            t+=obj.__xva;
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2()} ));
                        }
                        break;
                        
                    case 'base_de_reference' : t+='';
                        break;
                    case 'sélectionner' :
                        /*
                          
                          =====================================================================
                          SELECT
                          =====================================================================
                        */
                        nam='';
                        list='';
                        conditions='';
                        la_valeur='';
                        var nom_du_champ='';
                        var valeur_du_champ='';
                        var liste_des_tables='';
                        var tableau_des_alias=[];
                        var tableau_des_champs_pour_select_php=[];
                        liste_des_tables='';
                        /* on commence par les tables pour avoir les références des alias ( select * from tbl T0 ) */
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'provenance' && this.#tb[j][8] >= 1){
                                premiere_jointure_croisee=true;
                                for( l=j + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                    if(this.#tb[l][2] === 'f'
                                           && (this.#tb[l][1] === 'table_reference'
                                               || this.#tb[l][1] === 'jointure_croisée'
                                               || this.#tb[l][1] === 'jointure_gauche')
                                    ){
                                        /*
                                          
                                          on commence par la source pour avoir les références des alias
                                        */
                                        for( m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][1] === 'source'){
                                                for( n=m + 1 ; n < this.#l02 ; n=this.#tb[n][12] ){
                                                    if(this.#tb[n][1] === 'nom_de_la_table'){
                                                        nom_de_la_table='';
                                                        var nom_de_la_base='';
                                                        var nom_de_l_alias='';
                                                        o=n + 1;
                                                        for( o=n + 1 ; o < this.#l02 ; o=this.#tb[o][12] ){
                                                            if(this.#tb[o][2] === 'c'){
                                                                nom_de_la_table=this.#tb[o][1];
                                                            }else if(this.#tb[o][2] === 'f' && this.#tb[o][1] === 'alias' && this.#tb[o][8] === 1){
                                                                nom_de_l_alias=this.#tb[o + 1][1];
                                                            }else if(this.#tb[o][2] === 'f' && this.#tb[o][1] === 'base' && this.#tb[o][8] === 1){
                                                                nom_de_la_base=this.#tb[o + 1][1];
                                                            }else{
                                                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nom_de_la_table doit avoir que 1 ou 2 ou 3 paramètre(s) "' + this.#tb[n][1] + '"'} ));
                                                            }
                                                        }
                                                        if(nom_de_la_table === ''){
                                                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'nom_de_la_table non trouvé'} ));
                                                        }
                                                        if(options.au_format_php === true){
                                                            if(nom_de_la_base.substr( 0 , 1 ) === 'b'){
                                                                nom_de_la_base=nom_de_la_base.substr( 1 );
                                                            }
                                                        }
                                                        if(this.#tb[l][1] === 'jointure_gauche'){
                                                            if(options.au_format_php === true){
                                                                if(options.sur_base_de_reference === 1){
                                                                    liste_des_tables+=CRLF + '       LEFT JOIN ' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                                }else{
                                                                    liste_des_tables+=CRLF + '       LEFT JOIN `\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                                }
                                                                options.tableau_des_tables_utilisees.push( {"base" : nom_de_la_base ,"table" : nom_de_la_table ,"nom_de_l_alias" : nom_de_l_alias ,"champs" : []} );
                                                            }else{
                                                                liste_des_tables+=CRLF + ' LEFT JOIN ' + (nom_de_la_base !== '' ? ( nom_de_la_base + '.' ) : ( '' )) + '' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                            }
                                                        }else if(this.#tb[l][1] === 'table_reference'){
                                                            if(options.au_format_php === true){
                                                                if(options.sur_base_de_reference === 1){
                                                                    liste_des_tables+='      FROM ' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                                }else{
                                                                    liste_des_tables+='      FROM `\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                                }
                                                                options.id_base_principale=nom_de_la_base;
                                                                options.tableau_des_tables_utilisees.push( {"base" : nom_de_la_base ,"table" : nom_de_la_table ,"nom_de_l_alias" : nom_de_l_alias ,"champs" : []} );
                                                            }else{
                                                                liste_des_tables+=' FROM ' + (nom_de_la_base !== '' ? ( nom_de_la_base + '.' ) : ( '' )) + '' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                            }
                                                        }else if(this.#tb[l][1] === 'jointure_croisée'){
                                                            if(options.au_format_php === true){
                                                                if(options.sur_base_de_reference === 1){
                                                                    liste_des_tables+='      , ' + CRLF + '           ' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                                }else{
                                                                    liste_des_tables+='      , ' + CRLF + '           `\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                                }
                                                                options.tableau_des_tables_utilisees.push( {"base" : nom_de_la_base ,"table" : nom_de_la_table ,"nom_de_l_alias" : nom_de_l_alias ,"champs" : []} );
                                                            }else{
                                                                liste_des_tables+=' , ' + CRLF + '      ' + (nom_de_la_base !== '' ? ( nom_de_la_base + '.' ) : ( '' )) + '' + nom_de_la_table + '' + (nom_de_l_alias !== '' ? ( ' ' + nom_de_l_alias ) : ( '' )) + '';
                                                            }
                                                        }else{
                                                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'type jointure non prévue "' + this.#tb[l][1] + '"'} ));
                                                        }
                                                        if(nom_de_l_alias !== ''){
                                                            tableau_des_alias.push( {"minuscule" : nom_de_l_alias.toLowerCase() ,"majuscule" : nom_de_l_alias.toUpperCase() ,"original" : nom_de_l_alias} );
                                                        }
                                                    }else if(this.#tb[m][1] === '#'){
                                                        liste_des_tables+='/* ' + this.#tb[n][13].trim() + ' */';
                                                    }else{
                                                        return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' inconnu  "' + this.#tb[n][1] + '"'} ));
                                                    }
                                                }
                                            }
                                        }
                                        for( m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][1] === 'contrainte'){
                                                options.tableau_des_alias=tableau_des_alias;
                                                obj=this.traite_sqlite_fonction_de_champ( this.#tb , m + 1 , niveau , options );
                                                if(obj.__xst === __xsu){
                                                    liste_des_tables+=' ON ' + obj.__xva + '\n';
                                                }else{
                                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'erreur contrainte "' + this.#tb[l][1] + '"'} ));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if(liste_des_tables.substr( liste_des_tables.length - 1 , 1 ) === ','){
                            liste_des_tables=liste_des_tables.substr( 0 , liste_des_tables.length - 1 );
                        }
                        /* liste des champs extraits */
                        var precedent_est_commentaire=false;
                        var numero_de_champ=0;
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'valeurs' && this.#tb[j][8] >= 1){
                                liste_des_valeurs='';
                                for( l=j + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                    if(la_valeur !== ''){
                                        if(precedent_est_commentaire === false){
                                            la_valeur+=' , ';
                                        }
                                        if(numero_de_champ% 5 === 0){
                                            la_valeur+=this.__m_rev1.resps( niveau );
                                        }
                                    }
                                    if(this.#tb[l][2] === 'f' && this.#tb[l][1] === '#'){
                                        precedent_est_commentaire=true;
                                    }else if(this.#tb[l][2] === 'f' && this.#tb[l][1] === 'champ'){
                                        if(this.#tb[l][8] === 1 && this.#tb[l + 1][2] === 'c'){
                                            /*
                                              une seule valeur constante, c'est un nom de champ 
                                            */
                                            nom_du_champ=this.__m_rev1.ma_constante( this.#tb[l + 1] );
                                            if(options.au_format_php === true){
                                                tableau_des_champs_pour_select_php.push( {"type" : 'champ' ,"nom_du_champ" : this.#tb[l + 2][1]} );
                                            }
                                        }else if(this.#tb[l][8] === 2 && this.#tb[l + 1][2] === 'c' && this.#tb[l + 2][2] === 'c'){
                                            /*
                                              deux valeurs constantes, c'est un alias de table + un nom de de champ 
                                            */
                                            var nom_de_alias=this.#tb[l + 1][1];
                                            var dans_tableau_des_alias=-1;
                                            var ind=0;
                                            for( ind=0 ; ind < tableau_des_alias.length ; ind++ ){
                                                if(tableau_des_alias[ind].minuscule === nom_de_alias.toLowerCase()){
                                                    dans_tableau_des_alias=ind;
                                                    break;
                                                }
                                            }
                                            if(tableau_des_alias.length > 0 && dans_tableau_des_alias >= 0){
                                                nom_du_champ='`' + tableau_des_alias[dans_tableau_des_alias].original + '`.' + this.__m_rev1.ma_constante( this.#tb[l + 2] );
                                                if(options.au_format_php === true){
                                                    tableau_des_champs_pour_select_php.push( {"type" : 'champ' ,"alias" : tableau_des_alias[dans_tableau_des_alias].original ,"nom_du_champ" : this.#tb[l + 2][1]} );
                                                }
                                            }else{
                                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select champ "' + this.#tb[l + 1][1] + '"'} ));
                                            }
                                        }else if(this.#tb[l][8] === 2
                                               && this.#tb[l + 1][2] === 'c'
                                               && this.#tb[l + 2][2] === 'f'
                                               && this.#tb[l + 2][1] === 'alias_champ'
                                               && this.#tb[l + 2][8] === 1
                                        ){
                                            /* deux éléments dont un alias de table */
                                            nom_du_champ=this.__m_rev1.ma_constante( this.#tb[l + 1] ) + ' as ' + this.__m_rev1.ma_constante( this.#tb[l + 3] );
                                            if(options.au_format_php === true){
                                                tableau_des_champs_pour_select_php.push( {"type" : 'champ' ,"nom_du_champ" : this.#tb[l + 2][1] ,"alias_champ" : this.__m_rev1.ma_constante( this.#tb[l + 3] )} );
                                            }
                                        }else if(this.#tb[l][8] === 3
                                               && this.#tb[l + 1][2] === 'c'
                                               && this.#tb[l + 1][2] === 'c'
                                               && this.#tb[l + 3][2] === 'f'
                                               && this.#tb[l + 3][1] === 'alias_champ'
                                               && this.#tb[l + 3][8] === 1
                                        ){
                                            var nom_de_alias=this.#tb[l + 1][1];
                                            var dans_tableau_des_alias=-1;
                                            var ind=0;
                                            for( ind=0 ; ind < tableau_des_alias.length ; ind++ ){
                                                if(tableau_des_alias[ind].minuscule === nom_de_alias.toLowerCase()){
                                                    dans_tableau_des_alias=ind;
                                                    break;
                                                }
                                            }
                                            if(tableau_des_alias.length > 0 && dans_tableau_des_alias >= 0){
                                                nom_du_champ='`' + tableau_des_alias[dans_tableau_des_alias].original + '`.' + this.__m_rev1.ma_constante( this.#tb[l + 2] ) + ' as ' + this.__m_rev1.ma_constante( this.#tb[l + 4] );
                                                if(options.au_format_php === true){
                                                    tableau_des_champs_pour_select_php.push( {
                                                            "type" : 'champ' ,
                                                            "alias" : tableau_des_alias[dans_tableau_des_alias].original ,
                                                            "nom_du_champ" : this.#tb[l + 2][1] ,
                                                            "alias_champ" : this.__m_rev1.ma_constante( this.#tb[l + 4] )
                                                        } );
                                                }
                                            }else{
                                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select champ "' + this.#tb[l + 1][1] + '"'} ));
                                            }
                                        }else{
                                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select champ "' + this.#tb[l + 1][1] + '"'} ));
                                        }
                                        precedent_est_commentaire=false;
                                        la_valeur+='' + nom_du_champ;
                                        numero_de_champ++;
                                    }else{
                                        if(this.#tb[l][2] === 'f'){
                                            options.tableau_des_alias=tableau_des_alias;
                                            obj=this.traite_sqlite_fonction_de_champ( this.#tb , l , niveau , options );
                                            if(obj.__xst === __xsu){
                                                nom_du_champ=obj.__xva;
                                                if(options.au_format_php === true){
                                                    tableau_des_champs_pour_select_php.push( {"type" : 'formule' ,"formule" : nom_du_champ} );
                                                }
                                            }else{
                                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'fonction dans select "' + this.#tb[l][1] + '"'} ));
                                            }
                                        }else{
                                            if(this.#tb[l][1].toLowerCase() === 'null'){
                                                nom_du_champ='NULL';
                                                if(options.au_format_php === true){
                                                    tableau_des_champs_pour_select_php.push( {"type" : 'constante' ,"valeur" : nom_du_champ} );
                                                }
                                            }else if(this.#tb[l][1].substr( 0 , 1 ) === ':'){
                                                /*
                                                  les variables sql commencent par un caractère ":"
                                                */
                                                if(options.au_format_php === true){
                                                    nom_du_champ='\'.sq1($par[\'' + this.#tb[l][1].substr( 1 ) + '\']).\'';
                                                }else{
                                                    nom_du_champ='' + this.#tb[l][1] + '';
                                                }
                                                if(options.au_format_php === true){
                                                    tableau_des_champs_pour_select_php.push( {"type" : 'variable' ,"valeur" : nom_du_champ} );
                                                }
                                            }else{
                                                if(this.#tb[l][4] === 1){
                                                    nom_du_champ='\'' + this.#tb[l][1].replace( /\\\'/g , "''" ) + '\'';
                                                }else{
                                                    nom_du_champ=this.__m_rev1.ma_constante( this.#tb[l] );
                                                }
                                                if(options.au_format_php === true){
                                                    tableau_des_champs_pour_select_php.push( {"type" : 'constante' ,"valeur" : nom_du_champ} );
                                                }
                                            }
                                        }
                                        precedent_est_commentaire=false;
                                        la_valeur+='' + nom_du_champ;
                                        numero_de_champ++;
                                    }
                                }
                                if(la_valeur !== ''){
                                    liste_des_valeurs+=this.__m_rev1.resps( niveau );
                                    liste_des_valeurs+=la_valeur;
                                }
                            }
                        }
                        options.tableau_des_champs_pour_select_php=tableau_des_champs_pour_select_php;
                        /* liste des conditions (where) */
                        var liste_des_conditions='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'conditions' && this.#tb[j][8] >= 1){
                                options.tableau_des_alias=tableau_des_alias;
                                obj=this.traite_sqlite_fonction_de_champ( this.#tb , j , niveau , options );
                                if(obj.__xst === __xsu){
                                    liste_des_conditions=obj.__xva;
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'conditions dans select '} ));
                                }
                            }
                        }
                        if(liste_des_conditions !== ''){
                            liste_des_conditions='\nWHERE ' + liste_des_conditions;
                        }
                        /* liste des tris (ORDER BY) */
                        var liste_des_tris='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'complements'){
                                for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                    if(this.#tb[k][1] === 'trier_par' && this.#tb[k][8] >= 1){
                                        for( l=k + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                            options.tableau_des_alias=tableau_des_alias;
                                            obj=this.traite_sqlite_fonction_de_champ( this.#tb , l , niveau , options );
                                            if(obj.__xst === __xsu){
                                                if(obj.operateur && (obj.operateur === 'ASC' || obj.operateur === 'DESC')){
                                                    liste_des_tris+=' ' + obj.__xva;
                                                }else{
                                                    liste_des_tris+=', ' + obj.__xva;
                                                }
                                            }else{
                                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'conditions dans select '} ));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if(liste_des_tris !== ''){
                            liste_des_tris=' ORDER BY ' + liste_des_tris.substr( 1 );
                            if(options.au_format_php === true){
                                options.liste_des_tris=CRLF + '      ' + liste_des_tris;
                            }
                        }
                        /* LIMIT */
                        var liste_des_limites='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'complements'){
                                for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                    if(this.#tb[k][1] === 'limité_à' && this.#tb[k][8] >= 1){
                                        options.tableau_des_alias=tableau_des_alias;
                                        obj=this.traite_sqlite_fonction_de_champ( this.#tb , k , niveau , options );
                                        if(obj.__xst === __xsu){
                                            liste_des_limites+=',' + obj.__xva;
                                        }else{
                                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'conditions dans select '} ));
                                        }
                                    }
                                }
                            }
                        }
                        if(liste_des_limites !== ''){
                            liste_des_limites=' ' + liste_des_limites.substr( 1 );
                            if(options.au_format_php === true){
                                options.liste_des_limites=CRLF + '      ' + liste_des_limites;
                            }
                        }
                        if(liste_des_valeurs !== ''){
                            t+='SELECT ' + liste_des_valeurs + '\n' + liste_des_tables + liste_des_conditions + liste_des_tris + liste_des_limites + '\n;';
                            if(options.au_format_php === true){
                                options.liste_des_tables_pour_select_php=liste_des_tables;
                            }
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'select, pas de valeurs sélectionnées'} ));
                        }
                        break;
                        
                    case 'conditions' :
                        /* hugues */
                        options.tableau_des_alias=tableau_des_alias;
                        obj=this.traite_sqlite_fonction_de_champ( this.#tb , i , niveau , options );
                        if(obj.__xst === __xsu){
                            t+=obj.__xva;
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'conditions dans select '} ));
                        }
                        break;
                        
                    case 'modifier' : 
                    case 'insérer' : 
                    case 'supprimer' :
                        /*
                          =====================================================================
                          UPDATE OR INSERT OR DELETE
                          =====================================================================
                        */
                        nom_de_la_table='';
                        var nom_de_la_base='';
                        list='';
                        conditions='';
                        la_valeur='';
                        var nom_du_champ='';
                        var liste_des_champs_pour_insert='';
                        var liste_des_valeurs_pour_insert='';
                        var valeur_du_champ='';
                        var commentaire_general='';
                        var ignorer='';
                        var sous_requete_insert=false;
                        let champ_date_modification='';
                        let format_date_modification=0;
                        let champ_date_creation='';
                        let format_date_creation=0;
                        let champ_numero_de_revision='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'complements' && this.#tb[j][8] >= 1 && this.#tb[j][2] === 'f'){
                                for( l=j + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                    if(this.#tb[l][2] === 'f' && this.#tb[l][1] === 'ignorer'){
                                        ignorer=' OR IGNORE ';
                                    }else if(this.#tb[l][1] === 'gerer_champ_date_modification' && this.#tb[l][2] === 'f'){
                                        for( let m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][1] === 'champ' && this.#tb[m][2] === 'f' && this.#tb[m][8] === 1){
                                                champ_date_modification=this.#tb[m + 1][1];
                                            }else if(this.#tb[m][1] === 'format' && this.#tb[m][2] === 'f' && this.#tb[m][8] === 1){
                                                format_date_modification=parseInt( this.#tb[m + 1][1] , 10 );
                                            }
                                        }
                                    }else if(this.#tb[l][1] === 'gerer_champ_date_creation' && this.#tb[l][2] === 'f'){
                                        for( let m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][1] === 'champ' && this.#tb[m][2] === 'f' && this.#tb[m][8] === 1){
                                                champ_date_creation=this.#tb[m + 1][1];
                                            }else if(this.#tb[m][1] === 'format' && this.#tb[m][2] === 'f' && this.#tb[m][8] === 1){
                                                format_date_creation=parseInt( this.#tb[m + 1][1] , 10 );
                                            }
                                        }
                                    }else if(this.#tb[l][1] === 'gerer_champ_numero_de_revision' && this.#tb[l][2] === 'f'){
                                        for( let m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][1] === 'champ' && this.#tb[m][2] === 'f' && this.#tb[m][8] === 1){
                                                champ_numero_de_revision=this.#tb[m + 1][1];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'provenance' && this.#tb[j][8] >= 1){
                                for( l=j + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                    if(this.#tb[l][2] === 'f' && this.#tb[l][1] === 'table_reference'){
                                        /*
                                          
                                          on commence par la source pour avoir les références des alias
                                        */
                                        for( m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][1] === 'source'){
                                                for( n=m + 1 ; n < this.#l02 ; n=this.#tb[n][12] ){
                                                    if(this.#tb[n][1] === 'nom_de_la_table'){
                                                        o=n + 1;
                                                        for( o=n + 1 ; o < this.#l02 ; o=this.#tb[o][12] ){
                                                            if(this.#tb[o][2] === 'c'){
                                                                nom_de_la_table=this.#tb[o][1];
                                                            }else if(this.#tb[o][2] === 'f' && this.#tb[o][1] === 'base' && this.#tb[o][8] === 1){
                                                                nom_de_la_base=this.#tb[o + 1][1];
                                                                options.id_base_principale=nom_de_la_base;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if(this.#tb[j][1] === 'ignorer' && this.#tb[j][2] === 'f'){
                                ignorer=' OR IGNORE ';
                            }
                            if(this.#tb[j][1] === 'nom_de_la_table' && this.#tb[j][2] === 'f'){
                                o=j + 1;
                                for( o=j + 1 ; o < this.#l02 ; o=this.#tb[o][12] ){
                                    if(this.#tb[o][2] === 'c'){
                                        nom_de_la_table=this.#tb[o][1];
                                    }else if(this.#tb[o][2] === 'f' && this.#tb[o][1] === 'base' && this.#tb[o][8] === 1){
                                        nom_de_la_base=this.#tb[o + 1][1];
                                        options.id_base_principale=nom_de_la_base;
                                    }
                                }
                            }
                            if(options.au_format_php === true){
                                if(nom_de_la_base.substr( 0 , 1 ) === 'b'){
                                    nom_de_la_base=nom_de_la_base.substr( 1 );
                                }
                                options.liste_des_tables_pour_select_php=nom_de_la_table;
                            }
                            if(this.#tb[j][1] === 'sql' && this.#tb[j][8] >= 1){
                                la_valeur='';
                                obj=this.#rev_sql1( j , niveau , options );
                                if(obj.__xst === __xsu){
                                    if(obj.__xva.substr( obj.__xva.length - 1 , 1 ) === ';'){
                                        obj.__xva=obj.__xva.substr( 0 , obj.__xva.length - 1 );
                                    }
                                    la_valeur+=obj.__xva;
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'insert update delete'} ));
                                }
                                if(this.#tb[i][1] === 'insérer'){
                                    /* insert into a(x0,x1) select * from d; */
                                    sous_requete_insert=true;
                                }
                            }
                            if(this.#tb[j][1] === 'valeurs' && this.#tb[j][8] >= 1){
                                liste_des_valeurs='';
                                for( l=j + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                    if(la_valeur !== ''){
                                        la_valeur+=' , ';
                                    }
                                    if(this.#tb[l][1] === 'champ' && this.#tb[l][2] === 'f'){
                                        nom_du_champ=this.#tb[l + 1][1];
                                    }
                                    if(this.#tb[l][1] === 'affecte'){
                                        for( m=l + 1 ; m < this.#l02 ; m=this.#tb[m][12] ){
                                            if(this.#tb[m][2] === 'f' && this.#tb[m][1] === 'champ'){
                                                nom_du_champ=this.#tb[m + 1][1];
                                            }else{
                                                if(this.#tb[m][2] === 'f'){
                                                    obj=this.traite_sqlite_fonction_de_champ( this.#tb , m , niveau , options );
                                                    if(obj.__xst === __xsu){
                                                        valeur_du_champ=obj.__xva;
                                                    }else{
                                                        return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'fonction dans update conditions "' + this.#tb[l][1] + '"'} ));
                                                    }
                                                }else{
                                                    if(this.#tb[m][1].toLowerCase() === 'null' && this.#tb[m][4] === 0){
                                                        valeur_du_champ='NULL';
                                                    }else{
                                                        if(this.#tb[m][1].substr( 0 , 1 ) === ':'){
                                                            if(options.au_format_php === true){
                                                                valeur_du_champ='\'.sq1($par[\'' + this.#tb[m][1].substr( 1 ) + '\']).\'';
                                                            }else{
                                                                valeur_du_champ=this.#tb[m][1];
                                                            }
                                                        }else{
                                                            if(this.__m_rev1.est_num( this.#tb[m][1] )){
                                                                valeur_du_champ=this.#tb[m][1];
                                                            }else{
                                                                valeur_du_champ='\'' + this.#tb[m][1].replace( /\\\'/g , "''" ) + '\'';
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if(nom_du_champ === '' && valeur_du_champ === ''){
                                        /*
                                          dans le cas d'un commentaire
                                        */
                                    }else{
                                        if(options.au_format_php === true){
                                            la_valeur+='\n      `' + nom_du_champ + '` = ' + valeur_du_champ + '';
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+=' , ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '   `' + nom_du_champ + '`';
                                            if(liste_des_valeurs_pour_insert !== ''){
                                                liste_des_valeurs_pour_insert+=' , ';
                                            }
                                            liste_des_valeurs_pour_insert+=CRLF + '    ' + valeur_du_champ;
                                            options.tableau_des_valeurs_pour_insert.push( valeur_du_champ.replace( /\$par\[/g , '$par[$i][' ) );
                                        }else{
                                            if(this.#tb[i][1] === 'modifier'){
                                                la_valeur+=CRLF + '   ';
                                            }
                                            la_valeur+='`' + nom_du_champ + '` = ' + valeur_du_champ + '';
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+=' , ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '    `' + nom_du_champ + '`';
                                            if(liste_des_valeurs_pour_insert !== ''){
                                                liste_des_valeurs_pour_insert+=' , ';
                                            }
                                            liste_des_valeurs_pour_insert+=CRLF + '    ' + valeur_du_champ;
                                        }
                                    }
                                }
                                if(la_valeur !== ''){
                                    liste_des_valeurs+=this.__m_rev1.resps( niveau ) + ' (';
                                    liste_des_valeurs+=la_valeur + ' ) ,';
                                }
                            }
                            if(this.#tb[j][1] === 'conditions' && this.#tb[j][8] >= 1){
                                conditions='';
                                for( l=j + 1 ; l < this.#l02 ; l=this.#tb[l][12] ){
                                    if(conditions !== ''){
                                        conditions+=' , ';
                                    }
                                    if(this.#tb[l][2] === 'f'){
                                        obj=this.traite_sqlite_fonction_de_champ( this.#tb , l , niveau , options );
                                        if(obj.__xst === __xsu){
                                            conditions+=obj.__xva;
                                        }else{
                                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'fonction dans update conditions "' + this.#tb[l][1] + '"'} ));
                                        }
                                    }
                                }
                            }
                            if(this.#tb[j][1] === '#' && this.#tb[j][2] === 'f'){
                                commentaire_general=this.#tb[j][13];
                            }
                        }
                        if(nom_de_la_table !== '' && (la_valeur !== '' || this.#tb[i][1] === 'supprimer' && la_valeur === '')){
                            t+=this.__m_rev1.resps( niveau );
                            if(this.#tb[i][1] === 'supprimer'){
                                if(options.au_format_php === true){
                                    t+='DELETE ' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' )) + 'FROM ' + (nom_de_la_base !== '' ?
                                          ( 
                                            '`\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.'
                                          ) : ( 
                                            ''
                                          )) + nom_de_la_table + '';
                                }else{
                                    t+='DELETE ' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' )) + 'FROM ' + (nom_de_la_base !== '' ? ( nom_de_la_base + '.' ) : ( '' )) + nom_de_la_table + '';
                                }
                                if(conditions.length > 0){
                                    if(options.au_format_php === true){
                                        t+='\n    WHERE ' + conditions + ' ;';
                                    }else{
                                        t+='\nWHERE ' + conditions + ' ;';
                                    }
                                }
                            }else if(this.#tb[i][1] === 'insérer'){
                                if(sous_requete_insert === true){
                                    if(options.au_format_php === true){
                                        t+='INSERT ' + ignorer + '' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' ));
                                        t+='INTO ';
                                        if(nom_de_la_base !== '' && options.sur_base_de_reference === 0){
                                            t+='`\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.';
                                        }
                                        t+='`' + nom_de_la_table + '`';
                                        if(champ_date_modification !== '' && format_date_modification === 23){
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+=',';
                                            }else{
                                                liste_des_champs_pour_insert+=' ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '  `' + champ_date_modification + '`';
                                        }
                                        if(champ_date_creation !== '' && format_date_creation === 23){
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+='  ,';
                                            }else{
                                                liste_des_champs_pour_insert+='  ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '   `' + champ_date_creation + '`';
                                        }
                                        if(champ_numero_de_revision !== ''){
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+='  ,';
                                            }else{
                                                liste_des_champs_pour_insert+='  ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '   `' + champ_numero_de_revision + '`';
                                        }
                                        if(liste_des_champs_pour_insert !== ''){
                                            t+='(' + liste_des_champs_pour_insert + CRLF + ') ';
                                        }else{
                                            t+=' ';
                                        }
                                        t+=la_valeur.replace( /\n/g , ' ' ).replace( /\r/g , ' ' ) + ';';
                                        options.debut_sql_pour_insert='INSERT ' + ignorer + ' INTO ';
                                        if(nom_de_la_base !== '' && options.sur_base_de_reference === 0){
                                            options.debut_sql_pour_insert+='`\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.';
                                        }
                                        options.debut_sql_pour_insert+='`' + nom_de_la_table + '`';
                                        if(liste_des_champs_pour_insert !== ''){
                                            options.debut_sql_pour_insert+='(' + liste_des_champs_pour_insert + CRLF + ')  ';
                                        }else{
                                            t+=' ';
                                        }
                                    }else{
                                        t+='INSERT ' + ignorer + '' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' ));
                                        t+='INTO ';
                                        if(nom_de_la_base !== '' && options.sur_base_de_reference === 0){
                                            t+=nom_de_la_base + '.';
                                        }
                                        t+='`' + nom_de_la_table + '`';
                                        if(liste_des_champs_pour_insert !== ''){
                                            t+='(' + liste_des_champs_pour_insert + CRLF + ') ';
                                        }else{
                                            t+=' ';
                                        }
                                        /*
                                          t+=la_valeur.replace( /\n/g , ' ' ).replace( /\r/g , ' ' ) + '\n;';
                                        */
                                        t+=la_valeur + ';';
                                    }
                                }else{
                                    if(options.au_format_php === true){
                                        t+='INSERT ' + ignorer + '' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' ));
                                        t+='INTO ';
                                        if(nom_de_la_base !== '' && options.sur_base_de_reference === 0){
                                            t+='`\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.';
                                        }
                                        t+='`' + nom_de_la_table + '`(';
                                        if(champ_date_modification !== '' && format_date_modification === 23){
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+=',';
                                            }else{
                                                liste_des_champs_pour_insert+=' ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '   `' + champ_date_modification + '`';
                                        }
                                        if(champ_date_creation !== '' && format_date_creation === 23){
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+='  ,';
                                            }else{
                                                liste_des_champs_pour_insert+='  ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '   `' + champ_date_creation + '`';
                                        }
                                        if(champ_numero_de_revision !== ''){
                                            if(liste_des_champs_pour_insert !== ''){
                                                liste_des_champs_pour_insert+='  ,';
                                            }else{
                                                liste_des_champs_pour_insert+='  ';
                                            }
                                            liste_des_champs_pour_insert+=CRLF + '   `' + champ_numero_de_revision + '`';
                                        }
                                        t+='' + liste_des_champs_pour_insert + CRLF + ') VALUES (' + liste_des_valeurs_pour_insert + CRLF + ');';
                                        options.debut_sql_pour_insert='INSERT ' + ignorer;
                                        options.debut_sql_pour_insert+=' INTO ';
                                        if(nom_de_la_base !== '' && options.sur_base_de_reference === 0){
                                            options.debut_sql_pour_insert+='`\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.';
                                        }
                                        options.debut_sql_pour_insert+='`' + nom_de_la_table + '`(' + liste_des_champs_pour_insert + CRLF + ') VALUES ';
                                    }else{
                                        t+='INSERT ' + ignorer + '' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' ));
                                        t+='INTO ';
                                        if(nom_de_la_base !== '' && options.sur_base_de_reference === 0){
                                            t+=nom_de_la_base + '.';
                                        }
                                        t+='`' + nom_de_la_table + '`(';
                                        t+=(liste_des_champs_pour_insert + CRLF) + ') VALUES (' + liste_des_valeurs_pour_insert + CRLF + ');';
                                    }
                                }
                            }else{
                                if(options.au_format_php === true){
                                    t+='UPDATE ' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' )) + '' + (nom_de_la_base !== '' ?
                                          ( 
                                            '`\'.$GLOBALS[__BDD][BDD_NUMERO_' + nom_de_la_base + '][PREFIXE_BDD].\'`.'
                                          ) : ( 
                                            ''
                                          )) + nom_de_la_table + ' SET ' + la_valeur + '';
                                }else{
                                    t+='UPDATE ' + (commentaire_general !== '' ? ( '/* ' + commentaire_general + ' */ ' ) : ( '' )) + '' + (nom_de_la_base !== '' ? ( nom_de_la_base + '.' ) : ( '' )) + nom_de_la_table + ' SET ' + la_valeur + '';
                                }
                                if(conditions.length > 0){
                                    if(options.au_format_php === true){
                                        t+='\n    WHERE ' + conditions + ' ;';
                                    }else{
                                        t+='\nWHERE ' + conditions + ' ;';
                                    }
                                }
                            }
                        }
                        break;
                        
                    case 'add_index' :
                        return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + ' supprimer add_index et remplacer par ajouter_index'} ));
                        break;
                        
                    case 'ajouter_index' :
                        nam='';
                        list='';
                        uniq=' INDEX ';
                        def='';
                        meta='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if((this.#tb[j][1] === 'nom_de_la_table_pour_l_index'
                                       || this.#tb[j][1] === 'on_table'
                                       || 'sur_table' === this.#tb[j][1])
                                   && this.#tb[j][8] === 1
                            ){
                                nam=this.#tb[j + 1][1];
                            }
                            if(this.#tb[j][1] === 'nom_de_l_index' && this.#tb[j][8] === 1){
                                def=this.#tb[j + 1][1];
                            }
                            if(this.#tb[j][1] === 'unique' && this.#tb[j][8] === 0){
                                uniq=' UNIQUE INDEX ';
                            }
                            if(this.#tb[j][1] === 'fields' && this.#tb[j][8] >= 1){
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'mettre champs à la place de fields '} ));
                            }
                            if(this.#tb[j][1] === 'champs' && this.#tb[j][8] >= 1){
                                for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                    list+=' `' + this.#tb[k][1] + '` ,';
                                }
                            }
                            if(this.#tb[j][1] === 'meta' && this.#tb[j][2] === 'f' && this.#tb[j][8] > 0){
                                obj=this.__m_rev1.matrice_vers_source_rev1( this.#tb , j , false , j + 1 );
                                if(obj.__xst === __xsu){
                                    meta=this.__m_rev1.resps( niveau + 2 );
                                    meta+='/* meta(' + obj.__xva + ') */';
                                    meta+=this.__m_rev1.resps( niveau + 2 );
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'index meta'} ));
                                }
                            }
                        }
                        if(nam !== '' && list !== '' && def !== ''){
                            t+=this.__m_rev1.resps( niveau );
                            /* t+='/_* ==========DEBUT DEFINITION=========== *_/'; */
                            /* t+=this.__m_rev1.resps( niveau ); */
                            t+='CREATE ' + uniq + ' ' + def + ' ON `' + nam + '` ' + meta + ' (' + list.substr( 0 , list.length - 1 ) + ') ;';
                        }
                        break;
                        
                    case 'change_field' :
                        nam='';
                        oldnam='';
                        def='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'nom_du_champ' && this.#tb[j][8] === 1){
                                nam=this.#tb[j + 1][1];
                            }
                            if(this.#tb[j][1] === 'old_name' && this.#tb[j][8] === 1){
                                oldnam=this.#tb[j + 1][1];
                            }
                            if(this.#tb[j][1] === 'new_def'){
                                options.dans_definition_de_champ=true;
                                obj=this.#rev_sql1( j , niveau , options );
                                options.dans_definition_de_champ=false;
                                if(obj.__xst === __xsu){
                                    for( k=obj.__xva.length - 1 ; k >= 0 ; k-- ){
                                        c=obj.__xva.substr( k , 1 );
                                        if(c === ','){
                                            def=obj.__xva.substr( 0 , k );
                                            break;
                                        }
                                    }
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'change_field'} ));
                                }
                            }
                        }
                        if(nam !== '' && oldnam !== ''){
                            t+=this.__m_rev1.resps( niveau );
                            t+='ALTER TABLE ' + nam + ' CHANGE ' + oldnam + ' ' + def + ';';
                        }
                        break;
                        
                    case 'add_primary_key' :
                        nam='';
                        list='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'nom_de_la_table' && this.#tb[j][8] === 1){
                                nam=this.#tb[j + 1][1];
                            }
                            if(this.#tb[j][1] === 'fields' && this.#tb[j][8] >= 1){
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + ' mettre champs à la place de fields '} ));
                            }
                            if(this.#tb[j][1] === 'champs' && this.#tb[j][8] >= 1){
                                for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                    list+=' ' + this.#tb[k][1] + ' ,';
                                }
                                break;
                            }
                        }
                        if(nam !== '' && list !== ''){
                            t+=this.__m_rev1.resps( niveau );
                            t+='ALTER TABLE ' + nam + ' ADD PRIMARY KEY (' + list.substr( 0 , list.length - 1 ) + ');';
                        }
                        break;
                        
                    case 'use' :
                        if(this.#tb[i][8] === 1 && this.#tb[i + 1][2] === 'c'){
                            t+=this.__m_rev1.resps( niveau );
                            t+='use ' + this.#tb[i + 1][1] + ';';
                            j++;
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'use'} ));
                        }
                        break;
                        
                    case 'set' :
                        if(this.#tb[i][8] === 2 && this.#tb[i + 1][2] === 'c' && this.#tb[i + 2][2] === 'c'){
                            t+=this.__m_rev1.resps( niveau );
                            t+='set ';
                            if(this.#tb[i + 1][1] === 'NAMES'){
                                t+=this.#tb[i + 1][1];
                                t+='  ';
                                t+=this.#tb[i + 2][1];
                            }else{
                                t+=this.#tb[i + 1][4] === true ? ( '\'' + this.#tb[i + 1][1] + '\'' ) : ( this.#tb[i + 1][1] );
                                t+=' = ';
                                t+=this.#tb[i + 2][4] === true ? ( '\'' + this.#tb[i + 2][1] + '\'' ) : ( this.#tb[i + 2][1] );
                            }
                            t+=';';
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'set'} ));
                        }
                        break;
                        
                    case 'champ' : 
                    case 'field' :
                        /*
                          
                          field[
                          n[fld_id_user],
                          type[bigint],
                          unsigned[],
                          notnull[]
                          default[0]
                          comment[0]
                          `fld_id_css` bigint[20] UNSIGNED NOT NULL AUTO_INCREMENT,
                          `fld_name_css` varchar[32] COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '{"showDeleteField":true}',
                          
                        */
                        var variables_pour_tableau_tables={
                             /*  */
                            "nom_du_champ" : '' ,
                            "autoincrement" : false ,
                            "non_nulle" : false ,
                            "defaut" : {"est_defini" : false ,"__xva" : null} ,
                            "cle_primaire" : false ,
                            "reference" : {"est_defini" : false ,"table" : '' ,"champ" : ''} ,
                            "type" : {"nom" : false ,"longueur" : false} ,
                            "commentaire" : '' ,
                            "meta" : '' ,
                            "tableau_meta" : {},
                            "espece_du_champ" : '' ,
                            "longueur_du_champ" : '' ,
                            "non_signe" : false ,
                            "la_valeur_par_defaut_est_caractere" : false ,
                            "a_une_valeur_par_defaut" : false ,
                            "valeur_par_defaut" : '' ,
                        };
                        var definition_sql_du_champ='';
                        var meta_du_champ='';
                        let contient_un_autoincr=false;
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'auto_increment' && this.#tb[j][2] === 'f'){
                                if(this.#tb[j][8] === 0
                                       || this.#tb[j][8] === 1
                                           && this.#tb[j + 1][2] === 'c'
                                           && (this.#tb[j + 1][1] === 1
                                               || this.#tb[j + 1][1] === '1')
                                ){
                                    contient_un_autoincr=true;
                                    variables_pour_tableau_tables.autoincrement=true;
                                }
                            }
                        }
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'auto_increment' && this.#tb[j][2] === 'f'){
                                /*
                                  on l'a fait plus haut 
                                */
                            }else if(this.#tb[j][1] === 'nom_du_champ' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                if(options.longueur_maximum_des_champs < this.#tb[j + 1][1].length + 1){
                                    options.longueur_maximum_des_champs=this.#tb[j + 1][1].length + 1;
                                    options.nom_du_champ_max=this.#tb[j + 1][1];
                                }
                                /*
                                  
                                */
                                variables_pour_tableau_tables.nom_du_champ=this.#tb[j + 1][1];

                                definition_sql_du_champ+=' ' + variables_pour_tableau_tables.nom_du_champ + ''; /**/

                                
                            }else if(this.#tb[j][1] === 'espece_du_champ' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){

                                variables_pour_tableau_tables.espece_du_champ=this.#tb[j + 1][1].toUpperCase();
                            
                            }else if(this.#tb[j][1] === 'longueur_du_champ' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                
                                variables_pour_tableau_tables.longueur_du_champ=this.#tb[j + 1][1];
                            
                            }else if(this.#tb[j][1] === '#'){
                                debugger
                                if(this.#tb[j][13] === ''){
                                }else{
                                    console.log('%cafr','background:yellow;color:red;');

                                    variables_pour_tableau_tables.commentaire=this.#tb[j][13];
                                    definition_sql_du_champ+='/* ' + variables_pour_tableau_tables.commentaire.replace( /\/\*/g , '/ *' ).replace( /\*\//g , '* /' ) + ' */';
                                }
                                definition_sql_du_champ+=this.__m_rev1.resps( niveau );
                            }else if(this.#tb[j][1] === 'unsigned' && this.#tb[j][2] === 'f'){
                                if(this.#tb[j][8] === 0
                                       || this.#tb[j][8] === 1
                                           && this.#tb[j + 1][2] === 'c'
                                           && (this.#tb[j + 1][1] === 1
                                               || this.#tb[j + 1][1] === '1')
                                ){
                                    variables_pour_tableau_tables.non_signe=true;
                                    definition_sql_du_champ+=variables_pour_tableau_tables.non_signe?' UNSIGNED':'';
                                }
                            }else if((this.#tb[j][1] === 'notnull' || this.#tb[j][1] === 'not_null') && this.#tb[j][2] === 'f'){
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'remplacer not_null et notnull '} ));
                            }else if(this.#tb[j][1] === 'non_nulle' && this.#tb[j][2] === 'f'){
                                if(this.#tb[j][8] === 0
                                       || this.#tb[j][8] === 1
                                           && this.#tb[j + 1][2] === 'c'
                                           && (this.#tb[j + 1][1] === 1
                                               || this.#tb[j + 1][1] === '1')
                                ){
                                    variables_pour_tableau_tables.non_nulle=true;
                                    definition_sql_du_champ+=variables_pour_tableau_tables.non_nulle?' NOT NULL':'';
                                }
                            }else if(this.#tb[j][1] === 'la_valeur_par_defaut_est_caractere' && this.#tb[j][8] === 1){
                            }else if(this.#tb[j][1] === 'valeur_par_defaut' && this.#tb[j][8] === 1){
                            }else if(this.#tb[j][1] === 'a_une_valeur_par_defaut' && this.#tb[j][8] === 1){
                                if(this.#tb[j + 1][1] === '1'){
                                    variables_pour_tableau_tables.a_une_valeur_par_defaut=true;
                                    
                                    definition_sql_du_champ+=' DEFAULT ';
                                    let la_valeur_par_defaut_est_caractere=false;
                                    let valeur_par_defaut='';
                                    for( let k=i + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                        if(this.#tb[k][1] === 'la_valeur_par_defaut_est_caractere' && this.#tb[k][8] === 1){
                                            if(this.#tb[k + 1][1] === '1'){
                                                variables_pour_tableau_tables.la_valeur_par_defaut_est_caractere=true;
                                                la_valeur_par_defaut_est_caractere=true;
                                            }
                                        }else if(this.#tb[k][1] === 'valeur_par_defaut' && this.#tb[k][8] === 1){
                                            valeur_par_defaut=this.#tb[k + 1][1];
                                            variables_pour_tableau_tables.valeur_par_defaut=this.#tb[k + 1][1];
                                        }
                                    }
                                    variables_pour_tableau_tables.defaut.est_defini=true;
                                    variables_pour_tableau_tables.defaut.valeur=this.__m_rev1.ma_constante( this.#tb[j + 1] );
                                    if(la_valeur_par_defaut_est_caractere === true){
                                        definition_sql_du_champ+=' \'' + valeur_par_defaut.replace( /\\\'/ , '\'\'' ) + '\'';
                                    }else{
                                        if(valeur_par_defaut.toUpperCase() === 'NULL'){
                                            definition_sql_du_champ+=' NULL';
                                        }else{
                                            definition_sql_du_champ+=' ' + valeur_par_defaut;
                                        }
                                    }
                                }
                            }else if(this.#tb[j][1] === 'primary_key' && this.#tb[j][2] === 'f'){
                                if(this.#tb[j][8] === 0
                                       || this.#tb[j][8] === 1
                                           && this.#tb[j + 1][2] === 'c'
                                           && (this.#tb[j + 1][1] === 1
                                               || this.#tb[j + 1][1] === '1')
                                ){
                                    variables_pour_tableau_tables.cle_primaire=true;
                                    definition_sql_du_champ+=' PRIMARY KEY';
                                    if(variables_pour_tableau_tables.autoincrement === true){
                                        definition_sql_du_champ+=' AUTOINCREMENT';
                                    }
                                }
                            }else if(this.#tb[j][1] === 'references' && this.#tb[j][8] === 2 && this.#tb[j + 1][2] === 'c'){
                                definition_sql_du_champ+=' REFERENCES ' + this.__m_rev1.ma_constante( this.#tb[j + 1] ) + '(' + this.__m_rev1.ma_constante( this.#tb[j + 2] ) + ') ';
                                variables_pour_tableau_tables.reference.est_defini=true;
                                variables_pour_tableau_tables.reference.table=this.__m_rev1.ma_constante( this.#tb[j + 1] );
                                variables_pour_tableau_tables.reference.champ=this.__m_rev1.ma_constante( this.#tb[j + 2] );

                            }else if(this.#tb[j][1] === 'type' && (this.#tb[j][8] === 1 || this.#tb[j][8] === 2)){
                                debugger

                                if(this.#tb[j][8] === 1){
                                    if(this.#tb[j + 1][2] === 'c'){
                                        definition_sql_du_champ+=' ' + this.#tb[j + 1][1] + '';
                                        variables_pour_tableau_tables.type.nom=this.#tb[j + 1][1];
                                    }else{
                                        if(this.#tb[j + 2][2] === 'c'){
                                            definition_sql_du_champ+=' ' + this.#tb[j + 1][1] + '(' + this.#tb[j + 2][1] + ')';
                                        }else{
                                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'field type'} ));
                                        }
                                    }
                                }else if(this.#tb[j][8] === 2){
                                    definition_sql_du_champ+=' ' + this.#tb[j + 1][1] + '(' + this.#tb[j + 2][1] + ')';
                                    variables_pour_tableau_tables.type.nom=this.#tb[j + 1][1];
                                    variables_pour_tableau_tables.type.longueur=this.#tb[j + 2][1];
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'field type'} ));
                                }
                            }else if(this.#tb[j][1] === 'meta' && this.#tb[j][8] > 0){
                                obj=this.__m_rev1.matrice_vers_source_rev1( this.#tb , j , true , j + 1 );
                                if(obj.__xst === __xsu){
                                    meta_du_champ+=this.__m_rev1.resps( niveau + 2 );
                                    meta_du_champ+='/*\r\n            meta(\n            ' + obj.__xva.replace( /\/\*/g , '' ).replace( /\*\//g , '' ).replace( /\),\(/g , '),\n            (' ) + '\r\n            )\r\n            */';
                                    meta_du_champ=meta_du_champ.replace( /\),\(/g , '),\n            (' );
                                    /* typologie(chi),primary_key(),non_nulle(),auto_increment() */
                                    meta_du_champ=meta_du_champ.replace( /,typologie\(/g , ',\r\n            typologie(' );
                                    meta_du_champ=meta_du_champ.replace( /,primary_key\(/g , ',\r\n            primary_key(' );
                                    meta_du_champ=meta_du_champ.replace( /,non_nulle\(/g , ',\r\n            non_nulle(' );
                                    meta_du_champ=meta_du_champ.replace( /,auto_increment\(/g , ',\r\n            auto_increment(' );
                                    meta_du_champ=meta_du_champ.replace( /,nom_du_champ\(/g , ',\r\n            nom_du_champ(' );
                                    meta_du_champ=meta_du_champ.replace( /,nom_long_du_champ\(/g , ',\r\n            nom_long_du_champ(' );
                                    meta_du_champ=meta_du_champ.replace( /,nom_court_du_champ\(/g , ',\r\n            nom_court_du_champ(' );
                                    meta_du_champ=meta_du_champ.replace( /,nom_bref_du_champ\(/g , ',\r\n            nom_bref_du_champ(' );
                                    meta_du_champ=meta_du_champ.replace( /,genre\(/g , ',\r\n            genre(' );
                                    meta_du_champ=meta_du_champ.replace( /,espece_du_champ\(/g , ',\r\n            espece_du_champ(' );
                                    meta_du_champ=meta_du_champ.replace( /,afficher_champ_dans_svg\(/g , ',\r\n            afficher_champ_dans_svg(' );
                                    variables_pour_tableau_tables.meta=obj.__xva;
                                    meta_du_champ+=this.__m_rev1.resps( niveau + 2 );
                                    for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                        if(this.#tb[k][8] === 2){
                                            variables_pour_tableau_tables.tableau_meta[this.#tb[k + 1][1]]=this.#tb[k + 2][1];
                                        }
                                    }
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'field meta'} ));
                                }
                            }else{
                                return(this.#rev_sql_le( {"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'field ' + this.#tb[j][1]} ));
                            }
                        }
                        /*
                          definition_sql_du_champ
                        */
                        let definition_sql_du_champ2='';
                        definition_sql_du_champ2+=' ' + variables_pour_tableau_tables.nom_du_champ + '';
                        definition_sql_du_champ2+=' '+variables_pour_tableau_tables.espece_du_champ.toUpperCase();
                        if(variables_pour_tableau_tables.longueur_du_champ!==''){
                            definition_sql_du_champ2+='('+variables_pour_tableau_tables.longueur_du_champ+')';
                        }
                        if(variables_pour_tableau_tables.cle_primaire){
                            definition_sql_du_champ2+=' PRIMARY KEY';
                        }
                        if(variables_pour_tableau_tables.non_nulle){
                            definition_sql_du_champ2+=' NOT NULL';
                        }
                        if(variables_pour_tableau_tables.reference.est_defini){
                         
                            definition_sql_du_champ2+=' REFERENCES ' + variables_pour_tableau_tables.reference.table + '(' + variables_pour_tableau_tables.reference.champ + ') ';
                         
                        }
                        if(variables_pour_tableau_tables.a_une_valeur_par_defaut===true){
                            definition_sql_du_champ2+=' DEFAULT ';
                            if(variables_pour_tableau_tables.la_valeur_par_defaut_est_caractere===true){
                                definition_sql_du_champ2+=' \'' + variables_pour_tableau_tables.valeur_par_defaut.replace( /\\\'/ , '\'\'' ) + '\'';
                            }else{
                                definition_sql_du_champ2+=' ' + variables_pour_tableau_tables.valeur_par_defaut + '';
                            }
                        }
                        
/*                        
                        if(definition_sql_du_champ!==definition_sql_du_champ2){
                            console.log('\n\n'+definition_sql_du_champ+'\n'+definition_sql_du_champ2);
                            console.log('%cdifférents','background:red;color:yellow;');
                        }
*/                        
                        
//                        debugger

                        
                        
                        if(options.dans_definition_de_table === true){
                            t+=',';
                            t+=this.__m_rev1.resps( niveau );
                        }
                        t+=meta_du_champ + definition_sql_du_champ2;
                        if(options.hasOwnProperty( 'dans_definition_de_champ' ) && options.dans_definition_de_champ === true){
                            options.tableau_tables_champs[options.tableau_tables_champs.length - 1].champs.push( variables_pour_tableau_tables );
                        }
                        if(options.hasOwnProperty( 'tableau_champ' )){
                            options.tableau_champ=variables_pour_tableau_tables;
                        }
                        break;
                        
                    case 'create_table' :
                        return(this.#rev_sql_le( {"__xst" : __xer ,"id" : i ,"__xme" : this.__m_rev1.nl2() + ' plus de create_table svp'} ));
                        break;
                        
                    case 'créer_table' :
                        var engine='';
                        var auto_increment='';
                        var charset='';
                        var collate='';
                        t+=this.__m_rev1.resps( niveau );
                        t+=this.__m_rev1.resps( niveau );
                        /* t+='/_* ==========DEBUT DEFINITION=========== *_/'; */
                        /* t+=this.__m_rev1.resps( niveau ); */
                        t+=this.__m_rev1.resps( niveau );
                        var nom_table_en_cours='';
                        var donnees_table={
                             /*  */
                            "nom_de_la_table" : '' ,
                            "champs" : [] ,
                            "engine" : '' ,
                            "charset" : '' ,
                            "collate" : '' ,
                            "meta" : {} ,
                            "chaine_meta" : ''
                        };
                        var if_exists='';
                        var complementaires='';
                        var definitions_des_champs='';
                        var chaine_meta_table='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'ifexists' && this.#tb[j][8] === 0){
                                if_exists='IF EXISTS';
                            }else if(this.#tb[j][1] === 'ifnotexists' && this.#tb[j][8] === 0){
                                if_exists='IF NOT EXISTS';
                            }else if(this.#tb[j][1] === 'engine' && this.#tb[j][8] === 1){
                                complementaires+=' ENGINE=' + this.#tb[j + 1][1] + '';
                                donnees_table.engine=this.#tb[j + 1][1];
                            }else if(this.#tb[j][1] === 'auto_increment' && this.#tb[j][8] === 1){
                                complementaires+=' AUTO_INCREMENT=' + this.#tb[j + 1][1] + '';
                            }else if(this.#tb[j][1] === 'charset' && this.#tb[j][8] === 1){
                                complementaires+=' DEFAULT CHARSET=' + this.#tb[j + 1][1] + '';
                                donnees_table.charset=this.#tb[j + 1][1];
                            }else if(this.#tb[j][1] === 'collate' && this.#tb[j][8] === 1){
                                complementaires+=' COLLATE=' + this.#tb[j + 1][1] + '';
                                donnees_table.collate=this.#tb[j + 1][1];
                            }else if(this.#tb[j][1] === 'nom_de_la_table' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                nom_table_en_cours=this.#tb[j + 1][1];
                            }else if(this.#tb[j][1] === 'fields' && this.#tb[j][8] > 0){
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'mettre champs à la place de fields'} ));
                            }else if(this.#tb[j][1] === 'champs' && this.#tb[j][8] > 0){
                                options.dans_definition_de_table=true;
                                options.dans_definition_de_champ=true;
                                donnees_table.nom_de_la_table=nom_table_en_cours;
                                options.tableau_tables_champs.push( donnees_table );
                                options.dans_definition_de_champ=false;
                                obj=this.#rev_sql1( j , niveau + 1 , options );
                                if(obj.__xst === __xsu){
                                    /*
                                      on supprime la virgule
                                    */
                                    definitions_des_champs=obj.__xva.substr( 1 );
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'create table field'} ));
                                }
                                options.dans_definition_de_table=false;
                            }else if(this.#tb[j][1] === 'meta' && this.#tb[j][8] > 0){
                                obj=this.__m_rev1.matrice_vers_source_rev1( this.#tb , j , true , j + 1 );
                                if(obj.__xst === __xsu){
                                    chaine_meta_table='/*\n meta(' + obj.__xva.replace( /\/\*/g , '' ).replace( /\*\//g , '' ).replace( /\),\(/g , '),\n(' ) + ') \n*/';
                                    for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                        if(this.#tb[k][8] === 2){
                                            donnees_table.meta[this.#tb[k + 1][1]]=this.#tb[k + 2][1];
                                        }
                                    }
                                    chaine_meta_table=chaine_meta_table.replace( /,genre_meta\(/g , ',\r\n   genre_meta(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,table\(/g , ',\r\n   table(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,nom_de_la_table\(/g , ',\r\n   nom_de_la_table(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,nom_long_de_la_table\(/g , ',\r\n   nom_long_de_la_table(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,nom_court_de_la_table\(/g , ',\r\n   nom_court_de_la_table(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,nom_bref_de_la_table\(/g , ',\r\n   nom_bref_de_la_table(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,transform_table_sur_svg\(/g , ',\r\n   transform_table_sur_svg(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,default_charset\(/g , ',\r\n   default_charset(' );
                                    chaine_meta_table=chaine_meta_table.replace( /,collate\(/g , ',\r\n   collate(' );
                                    
                                    
                                    
                                    
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'create_table meta'} ));
                                }
                            }else{
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'create table ' + this.#tb[j][1]} ));
                            }
                        }
                        if(chaine_meta_table === ''){
                            chaine_meta_table='/* meta(';
                            chaine_meta_table+='(table , \'' + nom_table_en_cours + '\'),';
                            chaine_meta_table+='(nom_long_de_la_table  , \'à faire ' + nom_table_en_cours + '\'),';
                            chaine_meta_table+='(nom_court_de_la_table , \'à faire ' + nom_table_en_cours + '\'),';
                            chaine_meta_table+='(nom_bref_de_la_table  , \'à faire ' + nom_table_en_cours + '\'),';
                            chaine_meta_table+=') */';
                            donnees_table.chaine_meta=chaine_meta_table;
                        }
                        if(definitions_des_champs === ''){
                            t+='/*\r\n';
                            t+='-- ========== ATTENTION : TABLE SANS CHAMP ============================================================\r\n';
                            t+='-- \n';
                            t+='CREATE TABLE ' + if_exists + ' ' + nom_table_en_cours + '(\r\n';
                            t+=')' + complementaires + ';\r\n';
                            t+='*/\r\n';
                            t+=chaine_meta_table;
                            t+='\r\n-- ========== ATTENTION : TABLE SANS CHAMP ============================================================\r\n';
                        }else{
                            t+='CREATE TABLE ' + if_exists + ' ' + nom_table_en_cours + '(';
                            t+=this.__m_rev1.resps( niveau );
                            t+=chaine_meta_table;
                            t+=definitions_des_champs;
                            t+=this.__m_rev1.resps( niveau + 1 );
                            t+=')' + complementaires + ';';
                        }
                        nom_table_en_cours='';
                        break;
                        
                    case 'drop_table' :
                        t+=this.__m_rev1.resps( niveau );
                        t+='DROP TABLE';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'ifexists' && this.#tb[j][8] === 0){
                                t+=' IF EXISTS';
                            }else if(this.#tb[j][1] === 'ifnotexists' && this.#tb[j][8] === 0){
                                t+=' IF NOT EXISTS';
                            }else if(this.#tb[j][1] === 'nom_de_la_table' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                t+=' ' + this.#tb[j + 1][1] + '';
                                j++;
                            }else{
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'drop table ' + this.#tb[j][1]} ));
                            }
                        }
                        t+=';';
                        break;
                        
                    case 'create_database' :
                        t+=this.__m_rev1.resps( niveau );
                        t+='CREATE DATABASE';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][3] === this.#tb[i][3] + 1){
                                if(this.#tb[j][1] === 'ifnotexists' && this.#tb[j][8] === 0){
                                    t+=' IF NOT EXISTS';
                                }else if(this.#tb[j][1] === 'ifexists' && this.#tb[j][8] === 0){
                                    t+=' IF EXISTS';
                                }else if(this.#tb[j][1] === 'nom_de_la_base' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                    t+=' ' + this.#tb[j + 1][1] + '';
                                    j++;
                                }else if(this.#tb[j][1] === 'charset' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                    t+=' CHARACTER SET ' + this.#tb[j + 1][1] + '';
                                    j++;
                                }else if(this.#tb[j][1] === 'collate' && this.#tb[j][8] === 1 && this.#tb[j + 1][2] === 'c'){
                                    t+=' COLLATE ' + this.#tb[j + 1][1] + '';
                                    j++;
                                }else{
                                    return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'create_database ' + this.#tb[j][1]} ));
                                }
                            }
                        }
                        t+=';';
                        break;
                        
                    case 'commit' :
                        t+=this.__m_rev1.resps( niveau );
                        t+='COMMIT;';
                        break;
                        
                    case 'rollback' :
                        t+=this.__m_rev1.resps( niveau );
                        t+='ROLLBACK;';
                        break;
                        
                    case '#' :
                        if(this.#tb[i][13] === ''){
                        }else{
                            t+=this.__m_rev1.resps( niveau );
                            t+='/*';
                            t+=this.__m_rev1.tr_co_src( this.#tb[i][13] , niveau , i );
                            t+='*/';
                        }
                        break;
                        
                    case 'meta' :
                        /*
                          case 'transaction' :
                          obj=this.#rev_sql1( i , niveau + 1 , options );
                          if(obj.__xst === __xsu){
                          t+=this.__m_rev1.resps( niveau );
                          t+='BEGIN TRANSACTION;';
                          t+=obj.__xva;
                          t+=this.__m_rev1.resps( niveau );
                          }else{
                          return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'transaction'} ));
                          }
                          break;
                        */

                        obj=this.__m_rev1.matrice_vers_source_rev1( this.#tb , i , false , i + 1 );
                        if(obj.__xst === __xsu){
                            t+=this.__m_rev1.resps( niveau );
                            let texte_meta_base=obj.__xva;
                            texte_meta_base=texte_meta_base.replace( /,genre_meta\(/g , ',\r\n   genre_meta(' );
                            texte_meta_base=texte_meta_base.replace( /,default_charset\(/g , ',\r\n   default_charset(' );
                            texte_meta_base=texte_meta_base.replace( /,collate\(/g , ',\r\n   collate(' );
                            texte_meta_base=texte_meta_base.replace( /,transform_base_sur_svg\(/g , ',\r\n   transform_base_sur_svg(' );
                            t+='/* meta(' + texte_meta_base + ') */';
                            t+=this.__m_rev1.resps( niveau );
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'meta'} ));
                        }
                        break;
                        
                    case 'transaction' :
                        if(this.#tb[i][8] === 0){
                            t+='BEGIN TRANSACTION;';
                        }else{
                            obj=this.#rev_sql1( i , niveau + 1 , options );
                            if(obj.__xst === __xsu){
                                t+='BEGIN TRANSACTION;';
                                t+=obj.__xva;
                            }else{
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xva" : t ,"id" : i ,"__xme" : this.__m_rev1.nl2() + 'transaction'} ));
                            }
                        }
                        break;
                        
                    case 'modifier_table' :
                        nom_de_la_table='';
                        let drop_column='';
                        for( j=i + 1 ; j < this.#l02 ; j=this.#tb[j][12] ){
                            if(this.#tb[j][1] === 'nom_de_la_table' && this.#tb[j][8] === 1){
                                nom_de_la_table+=this.#tb[j + 1][1];
                            }else if(this.#tb[j][1] === 'base_de_reference' && this.#tb[j][8] === 1 && this.#tb[j][2] === 'f'){
                                /*
                                  eventuellement pour les requetes manuelles
                                */
                            }else if(this.#tb[j][1] === '#' && this.#tb[j][2] === 'f'){
                                /*
                                  eventuellement pour les requetes manuelles
                                */
                            }else if(this.#tb[j][1] === 'actions' && this.#tb[j][2] === 'f'){
                                for( k=j + 1 ; k < this.#l02 ; k=this.#tb[k][12] ){
                                    if(this.#tb[k][1] === 'drop_column' && this.#tb[k][2] === 'f' && this.#tb[k][8] === 1){
                                        drop_column=this.#tb[k + 1][1];
                                    }else{
                                        return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : (this.__m_rev1.nl2() + this.#tb[k][1]) + '"'} ));
                                    }
                                }
                            }else{
                                return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'fonction non traitée "' + this.#tb[j][1] + '"'} ));
                            }
                        }
                        if(drop_column !== ''){
                            t+='ALTER TABLE ' + nom_de_la_table + ' DROP COLUMN ' + drop_column;
                        }else{
                            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'fonction non traitée "' + this.#tb[i][1] + '"'} ));
                        }
                        break;
                        
                    default:
                        return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'fonction non traitée "' + this.#tb[i][1] + '"'} ));
                        
                }
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      =============================================================================================================
    */
    traite_le_tableau_de_la_base_sqlite_v3( par ){
        var nom_de_la_table='';
        var txt='';
        var tab_meta=[];
        var i=0;
        var j=0;
        var k=0;
        var ci='';
        var dans_comm=false;
        var l01=0;
        var txt_meta='';
        var obj={};
        var t='\n';
        var cle_etrangere=false;
        var meta_ecrit=false;
        var nom_champ='';
        for(nom_de_la_table in par['donnees']){
            /*
              
              analyse des requêtes ayant permis de créer les tables 
            */
            txt=par['donnees'][nom_de_la_table].create_table;
            tab_meta=[];
            var l02=txt.length;
            for( i=0 ; i < l02 ; i++ ){
                ci=txt.substr( i , 1 );
                if(dans_comm === true){
                    if(ci === '*'){
                        if(i === l02 - 1){
                            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' erreur commentaire'});
                        }else{
                            if(txt.substr( i + 1 , 1 ) === '/'){
                                dans_comm=false;
                                i++;
                                tab_meta.push( {"txt_meta" : txt_meta ,"etat" : false ,"matrice" : [] ,"type_element" : 'table|champ' ,"nom_element" : ''} );
                                txt_meta='';
                            }
                        }
                    }else{
                        txt_meta+=ci;
                    }
                }else{
                    if(ci === '/'){
                        if(i === l02 - 1){
                            return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' erreur commentaire'});
                        }else{
                            if(txt.substr( i + 1 , 1 ) === '*'){
                                dans_comm=true;
                                i++;
                            }
                        }
                    }
                }
            }
            for(j in par['donnees'][nom_de_la_table].create_index){
                txt=par['donnees'][nom_de_la_table].create_index[j];
                if(txt !== null){
                    /*
                      on peut avoir un index du type "sqlite_autoindex_tbl_a_1" avec un texte qui est nul
                    */
                    l02=txt.length;
                    for( i=0 ; i < l02 ; i++ ){
                        ci=txt.substr( i , 1 );
                        if(dans_comm === true){
                            if(ci === '*'){
                                if(i === l02 - 1){
                                    return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' erreur commentaire'});
                                }else{
                                    if(txt.substr( i + 1 , 1 ) === '/'){
                                        dans_comm=false;
                                        i++;
                                        tab_meta.push( {"txt_meta" : txt_meta ,"etat" : false ,"matrice" : [] ,"type_element" : 'table|champ' ,"nom_element" : ''} );
                                        txt_meta='';
                                    }
                                }
                            }else{
                                txt_meta+=ci;
                            }
                        }else{
                            if(ci === '/'){
                                if(i === l02 - 1){
                                    return({"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + ' erreur commentaire'});
                                }else{
                                    if(txt.substr( i + 1 , 1 ) === '*'){
                                        dans_comm=true;
                                        i++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for( i=0 ; i < tab_meta.length ; i++ ){
                if(tab_meta[i].txt_meta.indexOf( 'meta' ) >= 0){
                    obj=this.__m_rev1.rev_tm( tab_meta[i].txt_meta );
                    if(obj.__xst === __xsu){
                        tab_meta[i].etat=true;
                        tab_meta[i].matrice=obj.__xva;
                        for( j=1 ; j < tab_meta[i].matrice.length ; j++ ){
                            if(tab_meta[i].matrice[j][3] === 2
                                   && tab_meta[i].matrice[j][9] === 1
                                   && tab_meta[i].matrice[j][1] === 'table'
                                   && tab_meta[i].matrice[tab_meta[i].matrice[j][7]][8] === 2
                            ){
                                tab_meta[i].type_element='table';
                                tab_meta[i].nom_element=tab_meta[i].matrice[j + 1][1];
                                tab_meta[i].etat=true;
                                break;
                            }
                            if(tab_meta[i].matrice[j][3] === 2
                                   && tab_meta[i].matrice[j][9] === 1
                                   && tab_meta[i].matrice[j][1] === 'champ'
                                   && tab_meta[i].matrice[tab_meta[i].matrice[j][7]][8] === 2
                            ){
                                tab_meta[i].type_element='champ';
                                tab_meta[i].nom_element=tab_meta[i].matrice[j + 1][1];
                                tab_meta[i].etat=true;
                                break;
                            }
                            if(tab_meta[i].matrice[j][3] === 2
                                   && tab_meta[i].matrice[j][9] === 1
                                   && tab_meta[i].matrice[j][1] === 'index'
                                   && tab_meta[i].matrice[tab_meta[i].matrice[j][7]][8] === 2
                            ){
                                tab_meta[i].type_element='index';
                                tab_meta[i].nom_element=tab_meta[i].matrice[j + 1][1];
                                tab_meta[i].etat=true;
                                break;
                            }
                        }
                    }
                }
            }
            /*
              utf8mb4_unicode_ci OK
              utf8mb4_general_ci ne pas utiliser 
            */
            meta_ecrit=false;
            t+='\n' + '#(\n  =================================================================================';
            t+='\n' + '  table ' + nom_de_la_table + '';
            t+='\n' + '=================================================================================\n)';
            t+='\n' + 'créer_table(';
            /*
              on remplit les éléments par défaut
            */
            var liste_meta_table={
                "table" : nom_de_la_table ,
                "nom_long_de_la_table" : 'à faire ' + nom_de_la_table + '' ,
                "nom_court_de_la_table" : 'à faire ' + nom_de_la_table + '' ,
                "nom_bref_de_la_table" : 'à faire ' + nom_de_la_table + '' ,
                "transform_table_sur_svg" : '' ,
                "engine" : '' ,
                "default_charset" : '' ,
                "collate" : ''
            };
            var texte_meta_champ='';
            /* on vérifie que pour chaque libellé ci dessus on a quelque chose, sinon, on complète */
            for( i=0 ; i < tab_meta.length ; i++ ){
                if(tab_meta[i].etat === true && tab_meta[i].type_element === 'table'){
                    var elt_meta={};
                    var tab=tab_meta[i].matrice;
                    for(elt_meta in liste_meta_table){
                        if(elt_meta === 'transform_table_sur_svg'){
                            for( j=1 ; j < tab.length ; j++ ){
                                if(tab[j][1] === 'transform_table_sur_svg'){
                                    var obj=this.__m_rev1.matrice_vers_source_rev1( tab , j + 1 , false , j + 2 );
                                    if(obj.__xst === __xsu){
                                        liste_meta_table[elt_meta]='transform(' + obj.__xva + ')';
                                        break;
                                    }else{
                                        debugger;
                                    }
                                }
                            }
                        }else{
                            for( j=1 ; j < tab.length ; j++ ){
                                if(elt_meta === tab[j][1]
                                       && tab[j][3] === 2
                                       && tab[j][2] === 'c'
                                       && tab[tab[j][7]][8] === 2
                                       && tab[j + 1][2] === 'c'
                                ){
                                    liste_meta_table[elt_meta]=tab[j + 1][1];
                                }
                            }
                        }
                    }
                }
            }
            t+='\n' + ' meta(';
            var elt_meta={};
            for(elt_meta in liste_meta_table){
                if(elt_meta === 'transform_table_sur_svg'){
                    if(liste_meta_table[elt_meta] !== ''){
                        t+='\n' + '  (' + elt_meta + ' , ' + liste_meta_table[elt_meta] + '),';
                    }else{
                        t+='\n' + '  (' + elt_meta + ' , transform(translate(0,0))),';
                    }
                }else{
                    if(liste_meta_table[elt_meta] !== ''){
                        t+='\n' + '  (' + elt_meta + ' , \'' + liste_meta_table[elt_meta] + '\'),';
                    }
                }
            }
            t+='\n' + ' ),';
            t+='\n' + ' nom_de_la_table(\'' + nom_de_la_table + '\'),';
            t+='\n' + ' champs(#(),';
            for(nom_champ in par['donnees'][nom_de_la_table]['structure']['liste_des_champs']){
                var pc=par['donnees'][nom_de_la_table]['structure']['liste_des_champs'][nom_champ];
                cle_etrangere=false;
                if(pc['cle_etrangere'] && pc['cle_etrangere']['from'] && pc['cle_etrangere']['from'] === nom_champ){
                    cle_etrangere=true;
                }
                var type_champ=pc['type'].toUpperCase();
                if(type_champ.indexOf( '(' ) >= 0){
                    type_champ=type_champ.substr( 0 , type_champ.indexOf( '(' ) );
                }
                /*
                  
                  <select id="type_du_champ">
                  <option __xva="">choisissez un type</option>
                  <option __xva="chi">index entier (chi) integer[n]</option>
                  <option __xva="chx">référence croisée (chx) integer[n]</option>
                  <option __xva="che">entier (che) integer[n]</option>
                  
                  <option __xva="chn">numérique (chn) float</option>
                  
                  <option __xva="chu">choix unique (chu) integer(n)</option>
                  
                  <option __xva="chm">choix multiple (chm) text</option>
                  <option __xva="cht">texte (cht) text</option>
                  <option __xva="chp">phrase (chp) varchar(n)</option>
                  <option __xva="cho">mot (cho) character(n)</option>
                  <option __xva="chd">date heure (chd) text(23) YYYY-MM-DD HH:MM:SS.SSS</option>
                  <option __xva="cha">date character(10)</option>
                  <option __xva="chh">heure character(8)</option>
                  <option __xva="chb">blob (chb) blob</option></select>
                */
                var typologie='ch?';
                var types_entiers=[
                    'INT',
                    'INTEGER',
                    'TINYINT',
                    'SMALLINT',
                    'MEDIUMINT',
                    'BIGINT',
                    'UNSIGNED BIG INT',
                    'INT2',
                    'INT8'
                ];
                var types_caracteres=[
                    'CHARACTER',
                    'CHAR',
                    'VARCHAR',
                    'VARYING CHARACTER',
                    'NCHAR',
                    'NATIVE CHARACTER',
                    'NVARCHAR',
                    'TEXT',
                    'CLOB',
                    'STRING'
                ];
                if(types_entiers.includes( type_champ )){
                    if(pc['pk'] === 1){
                        typologie='chi';
                    }else{
                        if(cle_etrangere === true){
                            typologie='chx';
                        }else{
                            typologie='che';
                        }
                    }
                }
                if(typologie === 'ch?'){
                    if(types_caracteres.includes( type_champ )){
                        if(type_champ === 'CHARACTER' || type_champ === 'CHAR'){
                            typologie='cho';
                        }else if(type_champ === 'VARCHAR'
                               || type_champ === 'VARYING CHARACTER'
                               || type_champ === 'NCHAR'
                               || type_champ === 'NATIVE CHARACTER'
                               || type_champ === 'NVARCHAR'
                        ){
                            typologie='chp';
                        }else if(type_champ === 'TEXT' || type_champ === 'CLOB' || type_champ === 'STRING'){
                            typologie='cht';
                        }
                    }
                }
                var liste_meta_champ={
                     /*  */
                    "champ" : nom_champ ,
                    "nom_long_du_champ" : 'à faire ' + nom_champ + '' ,
                    "nom_court_du_champ" : 'à faire ' + nom_champ + '' ,
                    "nom_bref_du_champ" : 'à faire ' + nom_champ + '' ,
                    "typologie" : typologie ,
                    "default_charset" : '' ,
                    "collate" : ''
                };
                var texte_meta_champ='';
                /* on vérifie que pour chaque libellé ci dessus on a quelque chose, sinon, on complète */
                for( i=0 ; i < tab_meta.length ; i++ ){
                    if(tab_meta[i].etat === true && tab_meta[i].type_element === 'champ' && tab_meta[i].nom_element === nom_champ){
                        var elt_meta={};
                        for(elt_meta in liste_meta_champ){
                            var tab=tab_meta[i].matrice;
                            for( j=1 ; j < tab.length ; j++ ){
                                if(elt_meta === tab[j][1]
                                       && tab[j][3] === 2
                                       && tab[j][2] === 'c'
                                       && tab[tab[j][7]][8] === 2
                                       && tab[j + 1][2] === 'c'
                                ){
                                    liste_meta_champ[elt_meta]=tab[j + 1][1];
                                }
                            }
                        }
                    }
                }
                t+='\n' + '  champ(';
                t+='\n' + '   nom_du_champ(' + nom_champ + ')';
                if(pc['type'].indexOf( '(' ) >= 0 && pc['type'].lastIndexOf( ')' ) >= pc['type'].indexOf( '(' )){
                    t+='\n' + '   type(' + pc['type'].substr( 0 , pc['type'].indexOf( '(' ) ) + ' , ' + pc['type'].substr( pc['type'].indexOf( '(' ) + 1 , pc['type'].lastIndexOf( ')' ) - pc['type'].indexOf( '(' ) - 1 ) + ')';
                }else{
                    t+='\n' + '   type(' + pc['type'] + ')';
                }
                if(pc['type'].toUpperCase() === 'INTEGER' && pc['pk'] === 1 && pc['auto_increment'] === true){
                    t+='\n' + '   primary_key()';
                    t+='\n' + '   auto_increment()';
                }else{
                    if(pc['pk'] === 1){
                        t+='\n' + '   primary_key()';
                    }
                }
                if(pc['notnull'] === 1){
                    t+='\n' + '   non_nulle()';
                }
                if(pc['dflt_value']){
                    if(pc['dflt_value'] !== '' && pc['dflt_value'].substr( 0 , 1 ) === "'"){
                        t+='\n' + '   valeur_par_defaut(\'' + pc['dflt_value'].substr( 1 , pc['dflt_value'].length - 2 ).replace( /\'\'/g , '\\\'' ) + '\')';
                    }else if(pc['dflt_value'] !== '' && pc['dflt_value'].substr( 0 , 1 ) === '"'){
                        t+='\n' + '   valeur_par_defaut("' + pc['dflt_value'].substr( 1 , pc['dflt_value'].length - 2 ) + '")';
                    }else{
                        t+='\n' + '   valeur_par_defaut(' + pc['dflt_value'] + ')';
                    }
                }
                if(cle_etrangere === true){
                    t+='\n' + '   references(\'' + pc['cle_etrangere']['table'].replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\' , \'' + pc['cle_etrangere']['to'].replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\' )';
                }
                t+='\n' + '   meta(';
                var elt_meta={};
                for(elt_meta in liste_meta_champ){
                    if(liste_meta_champ[elt_meta] !== ''){
                        t+='\n' + '    (' + elt_meta + ' , \'' + liste_meta_champ[elt_meta] + '\'),';
                    }
                }
                t+='\n' + '   )';
                t+='\n' + '  ),';
            }
            t+='\n' + ' )';
            t+='\n' + ')';
            t+='\n';
            /*
              
              =============================================================================================
              ====== les indexes ===
              =============================================================================================
            */
            var nom_index={};
            for(nom_index in par['donnees'][nom_de_la_table]['structure']['liste_des_indexes']){
                var pc=par['donnees'][nom_de_la_table]['structure']['liste_des_indexes'][nom_index];
                if(pc.origin && pc.origin !== 'c'){
                    /*
                      seuls les indexes utilisateurs doivent être pris en compte
                      vu: pc.origin='pk' dans le cas ou un autoindex était créé sur un champ primary_key
                    */
                    continue;
                }
                t+=',';
                t+='\n' + '#(==============================)';
                var liste_meta_index={"index" : nom_index ,"__xme" : 'à faire ' + nom_index + ''};
                var texte_meta_index='';
                /* on vérifie que pour chaque libellé ci dessus on a quelque chose, sinon, on complète */
                for( i=0 ; i < tab_meta.length ; i++ ){
                    if(tab_meta[i].etat === true && tab_meta[i].type_element === 'index' && tab_meta[i].nom_element === nom_index){
                        var tab=tab_meta[i].matrice;
                        var elt_meta={};
                        for(elt_meta in liste_meta_index){
                            for( j=1 ; j < tab.length ; j++ ){
                                if(elt_meta === tab[j][1]
                                       && tab[j][3] === 2
                                       && tab[j][2] === 'c'
                                       && tab[tab[j][7]][8] === 2
                                       && tab[j + 1][2] === 'c'
                                ){
                                    liste_meta_index[elt_meta]=tab[j + 1][1];
                                }
                            }
                        }
                    }
                }
                t+='\n' + 'ajouter_index(';
                t+='\n' + '   nom_de_la_table_pour_l_index(\'' + nom_de_la_table + '\'),';
                if(pc['unique'] === 1){
                    t+='\n' + '   unique(),';
                }
                t+='\n' + '   nom_de_l_index(\'' + nom_index + '\'),';
                var lc='';
                var champ_de_l_index={};
                for(champ_de_l_index in pc['champs']){
                    lc+=',' + '\'' + champ_de_l_index + '\'';
                }
                if(lc !== ''){
                    t+='\n' + '   champs(' + lc.substr( 1 ) + ')';
                }
                t+='\n' + '   meta(';
                var elt_meta={};
                for(elt_meta in liste_meta_index){
                    if(liste_meta_table[elt_meta] !== ''){
                        t+='\n' + '    (' + elt_meta + ' , \'' + liste_meta_index[elt_meta].replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
                    }
                }
                t+='\n' + '   )';
                t+='\n' + ')';
            }
        }
        t=t.substr( 1 );
        if(par['zone_rev']){
            if('___produire_le_rev_v2' === par['contexte']){
                try{
                    document.getElementById( par['zone_rev'] ).value=t;
                }catch(e){
                    debugger;
                }
                __gi1.formatter_le_source_rev( par['zone_rev'] );
            }else{
                console.error( 'TODO' );
                debugger;
            }
        }
        return({"__xst" : __xsu ,"__xva" : t});
    }
    /*
      =============================================================================================================
      point d'entrée : convertion du sql au format tableau rev vers un texte format sql
      =============================================================================================================
    */
    c_tab_vers_sql( tab , les_options ){
        let t='';
        let obj=null;
        let indice_de_debut=0;
        this.#tb=tab;
        this.#l02=tab.length;
        let au_format_php=false;
        let sur_base_de_reference=0;
        if(les_options.hasOwnProperty( 'indice_de_debut' )){
            indice_de_debut=les_options.indice_de_debut;
        }
        if(les_options.hasOwnProperty( 'au_format_php' )){
            au_format_php=les_options.au_format_php;
        }
        if(les_options.hasOwnProperty( 'sur_base_de_reference' )){
            sur_base_de_reference=les_options.sur_base_de_reference;
        }
        var options={
            "au_format_php" : au_format_php ,
            "sur_base_de_reference" : sur_base_de_reference ,
            "dans_definition_de_table" : false ,
            "dans_definition_de_champ" : false ,
            "longueur_maximum_des_champs" : 0 ,
            "nom_du_champ_max" : '' ,
            "tableau_tables_champs" : [] ,
            "tableau_champ" : [] ,
            "tableau_des_alias" : [] ,
            "id_base_principale" : 0 ,
            "debut_sql_pour_insert" : '' ,
            "tableau_des_valeurs_pour_insert" : [] ,
            "tableau_des_champs_pour_select_php" : [] ,
            "liste_des_tables_pour_select_php" : '' ,
            "tableau_des_tables_utilisees" : [] ,
            "liste_des_tris" : '' ,
            "liste_des_limites" : ''
        };
        obj=this.#rev_sql1( indice_de_debut , 0 , options );
        if(obj.__xst === __xsu){
            if(obj.__xva.length >= 2 && obj.__xva.substr( 0 , 2 ) === '\r\n'){
                obj.__xva=obj.__xva.substr( 2 );
            }
            if(obj.__xva.length >= 1 && obj.__xva.substr( 0 , 1 ) === '\r'){
                obj.__xva=obj.__xva.substr( 1 );
            }
            if(obj.__xva.length >= 1 && obj.__xva.substr( 0 , 1 ) === '\n'){
                obj.__xva=obj.__xva.substr( 1 );
            }
            obj.matriceFonction=this.#tb;
            obj.longueur_maximum_des_champs=options.longueur_maximum_des_champs;
            obj.nom_du_champ_max=options.nom_du_champ_max;
            obj.tableau_tables_champs=options.tableau_tables_champs;
            obj.tableau_champ=options.tableau_champ;
            obj.id_base_principale=options.id_base_principale;
            obj.debut_sql_pour_insert=options.debut_sql_pour_insert;
            obj.tableau_des_valeurs_pour_insert=options.tableau_des_valeurs_pour_insert;
            obj.tableau_des_champs_pour_select_php=options.tableau_des_champs_pour_select_php;
            obj.liste_des_tables_pour_select_php=options.liste_des_tables_pour_select_php;
            obj.tableau_des_tables_utilisees=options.tableau_des_tables_utilisees;
            obj.liste_des_tris=options.liste_des_tris;
            obj.liste_des_limites=options.liste_des_limites;
            return obj;
        }else{
            return(this.#rev_sql_le( {"__xst" : __xer ,"__xme" : this.__m_rev1.nl2() + 'erreur de conversion en sql'} ));
        }
    }
}
export{c_rev_vers_sql1 as c_rev_vers_sql1};