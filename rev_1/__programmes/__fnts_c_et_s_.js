const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
class __fnts_c_et_s{
    /*
      =============================================================================================================
      fonctions communes au client et au serveur, on teste d'abord le client et surtout dans le serveur
      =============================================================================================================
    */
    moi='__fnts_c_et_s';
    __ig1=null;
    __cote_c_ou_s='';
    /*
      =============================================================================================================
    */
    constructor( __ig1 , __cote_c_ou_s ){
        /*
          console.log( 'constructor fnt1' , mat , d , __ig1 );
        */
        this.__ig1=__ig1;
        this.__cote_c_ou_s=__cote_c_ou_s;
    }
    /*
      =============================================================================================================
    */
    test_du_nom_de_fichier1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseigné (' + this.__cote_c_ou_s + ')'} ));
        }
        let mes_err='erreur sur le champ "' + nom_champ + '" , ce caractère n\est pas admis : ';
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(!(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '.')){
                return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + '<b>"' + c + '"</b> (' + this.__cote_c_ou_s + ')'} ));
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    test_du_nom_technique1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseigné'} ));
            this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : this.__ig1.nl2()} );
            return({"__xst" : __xer});
        }
        let mes_err='erreur sur le champ "' + nom_champ + '" car ce caractère n\'est pas admis : ';
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(!(c >= 'a' && c <= 'z' || c >= '0' && c <= '9' || c === '_' || c === '.')){
                return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : mes_err + '<b>"' + c + '"</b>'} ));
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
      on recherche dans ce module ( moi ) si la fonction passée en paramètre dans 
      valeur ( par exemple : test_du_nom_de_fichier1() ) existe
    */
    test_fonctions_de_c_fonctions1( valeur , nom_champ ){
        if(valeur === '' || valeur === null){
            return({"__xst" : __xsu});
        }else{
            let tt=this.__ig1.__rev1.rev_tcm( valeur );
            if(tt.__xst === __xsu){
                let des_fonctions_non_trouvees='';
                let mat=tt.__xva;
                for( let i=1 ; i < mat.length ; i=mat[i][12] ){
                    if( typeof this[mat[i][1]] !== 'function'){
                        des_fonctions_non_trouvees+=' , ' + mat[i][1];
                    }
                }
                if(des_fonctions_non_trouvees === ''){
                    return({"__xst" : __xsu});
                }
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'des fonctions ne sont pas définies " ' + des_fonctions_non_trouvees + '" ' + this.__ig1.nl2()} );
            }
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    test_longueur_de_champ_dans_genre( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            return({"__xst" : __xsu});
        }
        if(this.__ig1.est_num( valeur )){
            let v=parseFloat( valeur );
            /* si on a entré "3.4" 34  est différent de 30 ] */
            if(v * 10 !== parseInt( v , 10 ) * 10){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit contenir une nombre avec une virgule ( "," )' + this.__ig1.nl2()} );
                return({"__xst" : __xer});
            }
            return({"__xst" : __xsu});
        }
        let contient_virgule=false;
        for( let i=0 ; i < valeur.length ; i++ ){
            let c=valeur.substr( i , 1 );
            if(c >= '0' && c <= '9' || c === ','){
                if(c === ','){
                    contient_virgule=true;
                }
            }else{
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit contenir des chiffres et/ou des virgules' + this.__ig1.nl2()} );
                return({"__xst" : __xer});
            }
        }
        if(contient_virgule === true){
            /* c'est probablement un champ décimal */
            let tab=valeur.split( ',' );
            if(tab.length > 2){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit  contenir une virgule uniquement' + this.__ig1.nl2()} );
                return({"__xst" : __xer});
            }
            let val1=parseInt( tab[0] , 10 );
            let val2=parseInt( tab[1] , 10 );
            if(val1 + val2 > 20){
                this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" contenir une longueur cumulée de 20' + this.__ig1.nl2()} );
                return({"__xst" : __xer});
            }
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    test_doit_contenir_n_caracteres( n , valeur , nom_champ ){
        if(valeur && valeur.length === n){
            return({"__xst" : __xsu});
        }
        this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit doit contenir ' + n + ' caractères.' + this.__ig1.nl2()} );
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    test_entier_compris_entre( inf , sup , valeur , nom_du_champ ){
        let val=0;
        let mes_err='Erreur sur le champ ' + nom_du_champ + ' qui doit être en entier compris entre 0 et 99 inclus<br />';
        try{
            val=parseInt( valeur , 10 );
        }catch(e1){
            return({"__xst" : __xer ,"__xme" : mes_err});
        }
        if(isNaN( val )){
            return({"__xst" : __xer ,"__xme" : mes_err});
        }
        if(val < inf || val > sup){
            return({"__xst" : __xer ,"__xme" : mes_err});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{__fnts_c_et_s as __fnts_c_et_s};