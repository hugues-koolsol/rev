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
    test_heure_nulle_ou_comprise_entre( inf , sup , valeur , nom_du_champ ){
        let sepa_heure=':';
        let mes_err='Erreur sur le champ ' + nom_du_champ + ' qui doit être  00_00_00 et 23_59_59 inclus<br />';
        if(valeur === '' || valeur === null){
            return({"__xst" : __xsu});
        }
        if(valeur.length !== 8){
            return({"__xst" : __xer ,"__xme" : mes_err + ' ' + this.__ig1.nl2()});
        }
        if(!(this.__ig1.est_num( valeur.substr( 0 , 2 ) )
                   && this.__ig1.est_num( valeur.substr( 3 , 2 ) )
                   && this.__ig1.est_num( valeur.substr( 6 , 2 ) ))
        ){
            return({"__xst" : __xer ,"__xme" : mes_err + ' ' + this.__ig1.nl2()});
        }
        if(!(valeur.substr( 2 , 1 ) === sepa_heure && valeur.substr( 5 , 1 ) === sepa_heure)){
            return({"__xst" : __xer ,"__xme" : mes_err + ' [' + this.__ig1.nl2() + ']'});
        }
        let heure_num=parseInt( valeur.substr( 0 , 2 ) , 10 );
        if(heure_num < 0 || heure_num > 23){
            return({"__xst" : __xer ,"__xme" : 'l\'heure doit être comprise entre 00 et 23 inclus '});
        }
        let minutes_num=parseInt( valeur.substr( 3 , 2 ) , 10 );
        if(minutes_num < 0 || minutes_num > 59){
            return({"__xst" : __xer ,"__xme" : ' les minutes doit être comprises entre 01 et 12 inclus'});
        }
        let secondes_num=parseInt( valeur.substr( 6 , 2 ) , 10 );
        if(secondes_num < 0 || secondes_num > 59){
            return({"__xst" : __xer ,"__xme" : 'les secondes doivent être comprises entre 00 et 59 inclus'});
        }
        if(valeur < inf || valeur > sup){
            return({"__xst" : __xer ,"__xme" : mes_err + ' [' + this.__ig1.nl2() + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    test_date_nulle_ou_comprise_entre( inf , sup , valeur , nom_du_champ ){
        let sepa_date='-';
        let mes_err='Erreur sur le champ ' + nom_du_champ + ' qui doit être  1000_01_01 et 9999_12_31 inclus<br />';
        if(valeur === '' || valeur === null){
            return({"__xst" : __xsu});
        }
        if(valeur.length !== 10){
            return({"__xst" : __xer ,"__xme" : mes_err + ' ' + this.__ig1.nl2()});
        }
        if(!(this.__ig1.est_num( valeur.substr( 0 , 4 ) )
                   && this.__ig1.est_num( valeur.substr( 5 , 2 ) )
                   && this.__ig1.est_num( valeur.substr( 8 , 2 ) ))
        ){
            return({"__xst" : __xer ,"__xme" : mes_err + ' ' + this.__ig1.nl2()});
        }
        if(!(valeur.substr( 4 , 1 ) === sepa_date && valeur.substr( 7 , 1 ) === sepa_date)){
            return({"__xst" : __xer ,"__xme" : mes_err + ' [' + this.__ig1.nl2() + ']'});
        }
        let annee_num=parseInt( valeur.substr( 0 , 4 ) , 10 );
        if(annee_num < 1000){
            return({"__xst" : __xer ,"__xme" : ' l\'année doit être comprise entre 1000 et 9999 inclus '});
        }
        let mois_num=parseInt( valeur.substr( 5 , 2 ) , 10 );
        if(mois_num < 1 || mois_num > 12){
            return({"__xst" : __xer ,"__xme" : ' le mois doit être compris entre 01 et 12 inclus'});
        }
        let jour_num=parseInt( valeur.substr( 8 , 2 ) , 10 );
        if(jour_num < 1 || jour_num > 31){
            return({"__xst" : __xer ,"__xme" : ' le mois jour être compris entre 01 et 31 inclus'});
        }
        if(mois_num === 4 || mois_num === 6 || mois_num === 9 || mois_num === 11){
            if(jour_num === 31){
                return({"__xst" : __xer ,"__xme" : ' pour les mois 4,6,9 et 11 le jour ne doit pas être supérieur à 30 '});
            }
        }else if(mois_num === 2){
            if(jour_num <= 28){
            }else if(jour_num === 29){
                if(annee_num% 4 === 0 && !(annee_num% 100 === 0) || annee_num% 400 === 0){
                    /*
                      une année est bisextile si elle est divisible par 4 et pas pas 100 ou bien divisible par 400 ( cf k&r  )
                    */
                }else{
                    return({"__xst" : __xer ,"__xme" : ' cette année n\'est pas bisextile '});
                }
            }else{
                return({"__xst" : __xer ,"__xme" : ' le mois de février ne comporte que 28 ou 29 jours '});
            }
        }
        if(valeur < inf || valeur > sup){
            return({"__xst" : __xer ,"__xme" : mes_err + ' [' + this.__ig1.nl2() + ']'});
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    test_du_nom_de_fichier1( valeur , nom_champ ){
        if(valeur === null || valeur === ''){
            return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseignée (' + this.__cote_c_ou_s + ')'} ));
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
            return(this.__ig1.ajoute_message( {"__xst" : __xer ,"__xme" : 'le champ "' + nom_champ + '" doit être renseignée'} ));
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