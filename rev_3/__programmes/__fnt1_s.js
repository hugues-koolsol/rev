const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
class __fnt1{
    /*
      =============================================================================================================
      fonctions côté serveur
    */
    moi='__fnt1';
    __ig1=null;
    tab_de_remplacement1={
         /* tbel */
        "à" : 'à' ,
        "â" : 'â' ,
        "ã" : 'ã' ,
        "á" : 'á' ,
        "é" : 'é' ,
        "è" : 'è' ,
        "ê" : 'ê' ,
        "É" : 'É' ,
        "ï" : 'ï' ,
        "î" : 'î' ,
        "ñ" : 'ñ' ,
        "Ñ" : 'Ñ' ,
        "ó" : 'ó' ,
        "ô" : 'ô' ,
        "ö" : 'ö' ,
        "ü" : 'ü' ,
        "Ü" : 'Ü'
    };
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    async supprimer_fichier_sans_sauvegarde( chemin , donnees_retournees ){
        try{
            await Deno.remove( chemin );
        }catch(e){
            donnees_retournees[__xsi][__xdv].push( 'erreur supprimer_fichier_sans_sauvegarde "' + chemin + '" ' + this.__ig1.nl2( e ) );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sauvegarder_et_supprimer_fichier( chemin , donnees_retournees ){
        /* ne_pas_faire_une_sauvegarde]{ */
        if(donnees_retournees.chi_id_projet === 0){
            donnees_retournees[__xsi][__xer].push( 'on ne peut pas supprimer un fichier si on n\'a pas sélectionné un environnement ' + this.__ig1.nl2() );
            return({"__xst" : __xer});
        }
        let prefix1='../rev_' + donnees_retournees.chi_id_projet + '/';
        let sous_chemin=chemin.substr( prefix1.length );
        let la_cle=await this.__ig1.cle_aleatoire();
        /* crypto.randomUUID(); */
        let amj=donnees_retournees.date_heure_serveur;
        let chemin_date=amj.substr( 0 , 4 ) + '/' + amj.substr( 5 , 2 ) + '/' + amj.substr( 8 , 2 ) + '/';
        let chemin_absolu_sauvegarde='../sauvegarde_fichiers/rev_' + donnees_retournees.chi_id_projet + '/' + chemin_date + sous_chemin + '.' + amj.replace( / /g , '_' ).replace( /:/g , '_' ) + '.' + la_cle + '.bak';
        /* this.__ig1.ma_trace1('chemin_absolu_sauvegarde='+chemin_absolu_sauvegarde); */
        let repertoire_absolu_sauvegarde=chemin_absolu_sauvegarde.substr( 0 , chemin_absolu_sauvegarde.lastIndexOf( '/' ) );
        /* this.__ig1.ma_trace1('repertoire_absolu_sauvegarde='+repertoire_absolu_sauvegarde); */
        if(!(await this.__ig1.is_dir( repertoire_absolu_sauvegarde ))){
            try{
                await Deno.mkdir( repertoire_absolu_sauvegarde , {"mode" : 0o777 ,"recursive" : true} );
                /* this.__ig1.ma_trace1( 'repertoire créé' ); */
            }catch(e){
                donnees_retournees[__xsi][__xer].push( 'erreur de création du répertoire "' + repertoire_absolu_sauvegarde + '" ' + this.__ig1.nl2( e ) );
                return({"__xst" : __xer});
            }
        }else{
            /* this.__ig1.ma_trace1('repertoire existe repertoire_absolu_sauvegarde='+repertoire_absolu_sauvegarde); */
        }
        if((await this.__ig1.is_file( chemin ))){
            try{
                /* this.__ig1.ma_trace1(chemin, chemin_absolu_sauvegarde); */
                /*
                  ../rev_1/toto.txt
                  ../sauvegarde_fichiers/rev_1/2026/01/23/toto.txt.2026-01-23_14_56_51.045.43aaa27f-9dba-4d1c-914d-c29537029931.bak
                */
                await Deno.rename( chemin , chemin_absolu_sauvegarde );
                /* this.__ig1.ma_trace1('\n\n\n\n\n\n\n\n\n/_**************** rename OK **********************_/\n\n\n'); */
                return({"__xst" : __xsu});
            }catch(e){
                this.__ig1.ma_trace1( 'e=' , e );
                donnees_retournees[__xsi][__xer].push( 'erreur de renommage du fichier "' + chemin + '" vers "' + chemin_absolu_sauvegarde + '"' + this.__ig1.nl2( e ) );
                return({"__xst" : __xer});
            }
        }else{
            return({"__xst" : __xer});
        }
        return({"__xst" : __xer});
    }
    /*
      =============================================================================================================
    */
    critere_liste( a , b ){
        if(a.hasOwnProperty( b ) && a[b] !== ''){
            if(this.__ig1.est_num( a[b] )){
                return(b + '(' + a[b] + ')');
            }
            let x=b + '(\'' + a[b].replace( /\\/g , '\\\\' ).replace( /'/g , '\\\'' ) + '\')';
            return x;
        }
        return '';
    }
    /*#
       =====================================================================================================================
      * JavaScript equivalent of PHP's strtr()
      * Supports both:
      *  - strtr(string, from, to)  // character translation
      *  - strtr(string, replacements) // object map replacement
    */
    strtr( str , from , to ){
        /* Mode 1: Character translation */
        if( typeof from === 'string' &&  typeof to === 'string'){
            if(from.length !== to.length){
                throw new Error( "From and To strings must be the same length" );
            }
            let result='';
            for(let char of str){
                let index=from.indexOf( char );
                result+=index > -1 ? ( to[index] ) : ( char );
            }
            return result;
        }
        /* Mode 2: Object map replacement */
        if( typeof from === 'object' && from !== null){
            let result=str;
            /* Sort keys by length (longest first) to mimic PHP's behavior */
            const keys=Object.keys( from ).sort( ( a , b ) => {
                return(b.length - a.length);} );
            for(let key of keys){
                let value=from[key];
                /* Escape regex special characters in key */
                let escapedKey=key.replace( /[.*+?^${}()|[\]\\]/g , '\\$&' );
                result=result.replace( new RegExp( escapedKey , 'g' ) , value );
            }
            return result;
        }
        throw new Error( "Invalid arguments for strtr()" );
    }
    /*
      =============================================================================================================
      si s=0o777, on veut quand même mettre cette valeur en texte donc on ne teste pas est_num
    */
    sq4( s , nom_du_champ='' ){
        if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq4 "' + nom_du_champ + '" n\'est pas défini , e1=' + e1.replace( /\n/g , '\n' ) );
        }else if( typeof s !== 'string'){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq4 n\'est pas une valeur de type "string"' );
        }
        /* cette fonction remplace les apostrophes par des doubles apostrophes */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s); */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        return('\'' + s1 + '\'');
    }
    /*
      =============================================================================================================
      condition "equivalent" 
      %tagada% => \%tagada\%
    */
    sq3( s ){
        if(this.__ig1.est_num( s )){
            return s;
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'Paramètre de sq3 non défini , e1=' + e1.replace( /\n/g , '<br />' ) );
        }
        /* cette fonction escapeString remplace les apostrophes par des doubles apostrophes */
        /* $s1=SQLite3::escapeString($s); */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s);*_/ */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        if(s.indexOf( '_' ) >= 0 || s.indexOf( '%' ) !== false){
            let t='\'' + s1 + '\' ';
            return t;
        }else{
            return('\'%' + s1 + '%\'');
        }
    }
    /*
      =============================================================================================================
      %tagada% => \%tagada\%
      condition "comme" 
    */
    sq2( s ){
        if(this.__ig1.est_num( s )){
            return('\'%' + s + '%\'');
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'Paramètre de sq2 non défini , e1=' + e1.replace( /\n/g , '<br />' ) );
        }
        /* cette fonction escapeString remplace les apostrophes par des doubles apostrophes */
        /* $s1=SQLite3::escapeString($s); */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s);*_/ */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        if(s.indexOf( '_' ) >= 0 || s.indexOf( '%' ) !== false){
            let t='\'%' + s1.replace( /%/g , '\\%' ).replace( /_/g , '\\_' ) + '%\' ESCAPE \'\\\'';
            return t;
        }else{
            return('\'%' + s1 + '%\'');
        }
    }
    /*
      =============================================================================================================
    */
    sq1( s ){
        if(this.__ig1.est_num( s )){
            return s;
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq1 n\'est pas défini , e1=' + e1.replace( /\n/g , '\n' ) );
        }else if( typeof s !== 'string'){
            let e1=(new Error()).stack;
            throw new Error( 'le paramètre de sq1 n\'est pas une valeur de type "string"' );
        }
        /* cette fonction remplace les apostrophes par des doubles apostrophes */
        let s1=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s); */
        s1=this.strtr( s1 , this.tab_de_remplacement1 );
        return('\'' + s1 + '\'');
    }
    /*
      =============================================================================================================
    */
    sq0( s ){
        if(this.__ig1.est_num( s )){
            return s;
        }else if(s === null){
            return 'NULL';
        }else if(s === undefined){
            let e1=(new Error()).stack;
            throw new Error( 'Paramètre de sq0 non défini , e1=' + e1.replace( /\n/g , '<br />' ) );
        }
        /* cette fonction remplace les apostrophes par des doubles apostrophes */
        s=s.replace( /\'/g , '\'\'' );
        /* SQLite3::escapeString(s);*_/ */
        s=this.strtr( s , this.tab_de_remplacement1 );
        return s;
    }
    /*
      =============================================================================================================
      quand un champ de recherche contient des id, ils sont séparés par des virgules ou des points
      par exemple, 1,2,3 ou bien 1.2.3  , le where doit être sous la forme WHERE id in ( 1 , 2 , 3 )
      =============================================================================================================
    */
    construction_where_sql_sur_id1( nom_du_champ , critere ){
        let champ_where='';
        critere=String( '' + critere + '' ).replace( /\./g , ',' );
        if(critere !== null && critere.indexOf( ',' ) >= 0){
            let tableau_liste_des_valeurs=critere.split( ',' );
            let chaine_recherche='';
            for(let i in tableau_liste_des_valeurs){
                if(this.__ig1.est_num( tableau_liste_des_valeurs[i] )){
                    chaine_recherche+=',' + tableau_liste_des_valeurs[i];
                }
            }
            if(chaine_recherche !== ''){
                chaine_recherche=chaine_recherche.substr( 1 );
                champ_where+='AND ' + this.sq0( nom_du_champ ) + ' in (' + this.sq0( chaine_recherche ) + ') ';
            }
        }else if(critere === null){
            champ_where+='AND ' + this.sq0( nom_du_champ ) + ' IS NULL ';
        }else if(this.__ig1.est_num( critere )){
            champ_where+='AND ' + this.sq0( nom_du_champ ) + ' = ' + this.sq0( critere ) + ' ';
        }
        return champ_where;
    }
    /*
      =============================================================================================================
      pour les écrans liste
      =============================================================================================================
    */
    debut_filtre1( mat , d , fonction_liste ){
        /* , donnees_recues , donnees_retournees , options_generales ,  ]{ */
        let formulaire={};
        const l01=mat.length;
        /* console.log(this.__ig1.donnees_recues) */
        if(!this.__ig1.donnees_recues.__xva.hasOwnProperty( '__fo1' )
               || !this.__ig1.donnees_recues.__xva.__fo1.hasOwnProperty( fonction_liste )
        ){
            this.__ig1.donnees_recues.__xva['__fo1']={};
            this.__ig1.donnees_recues.__xva.__fo1[fonction_liste]={};
            for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
                if(mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                    this.__ig1.donnees_recues.__xva.__fo1[fonction_liste][mat[i][1]]=mat[i + 1][1];
                }
            }
        }
        formulaire=this.__ig1.donnees_recues.__xva.__fo1[fonction_liste];
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === '__num_page' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                if(this.__ig1.est_num( mat[i + 1][1] )){
                    formulaire['__num_page']=parseInt( mat[i + 1][1] , 10 );
                }
            }
        }
        return formulaire;
    }
    /*
      =============================================================================================================
    */
}
export{__fnt1 as __fnt1};