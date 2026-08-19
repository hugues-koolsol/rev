const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';
/*
  =====================================================================================================================
*/
class dossiers2{
    /*
      =============================================================================================================
    */
    async actions_et_tests_apres_page_voir( mat , d , __xva_avant , __db1 ){
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
    async sous_liste2( mat , d ){
        let contexte='';
        let nom_de_variable=0;
        let l01=mat.length;
        for( let i=d + 1 ; i < l01 ; i=mat[i][12] ){
            if(mat[i][1] === 'methode_sur_click2' && mat[i][2] === 'f'){
                for( let j=i + 1 ; j < l01 ; j=mat[j][12] ){
                    if(mat[j][1] === 'f1' && mat[j][2] === 'f'){
                        for( let k=j + 1 ; k < l01 ; k=mat[k][12] ){
                            if(mat[k][1] === 'nom_du_contexte' && mat[k][2] === 'f'){
                                contexte='nom_du_contexte';
                                for( let l=k + 1 ; l < l01 ; l=mat[l][12] ){
                                    if(mat[l][1] === 'nom_de_variable' && mat[l][2] === 'f' && mat[l][8] === 1 && mat[l + 1][2] === 'c'){
                                        nom_de_variable=parseInt( mat[l + 1][1] , 10 );
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let __db1=await this.__ig1.ouvrir_bdd( this.__ig1.options_generales.base_de_travail );
        const __nbMax=40;
        let __num_page=0;
        let liste2={};
        let criteres_xxxx={};
        criteres_xxxx['quantitee']=__nbMax;
        if(true || contexte === 'nom_du_contexte'){
            /* on peut éventuellement ajouter des criteres ici, voir par exemple metiers1_s.js */
            liste2=await this.__ig1.generique_sous_liste2( mat , d , 1427 , criteres_xxxx , __nbMax , __db1 );
        }
        if(liste2.__xst === __xsu){
            /* faire éventuellement quelque chose ici avec les éléments contenus dans this.__ig1.donnees_retournees.__xva.sous_liste2.__xva */
            /* voir par exemple dossiers1_s.js */
        }
        return liste2;
    }
    /*
      =============================================================================================================
    */
    async liste1( mat , d ){
        return(await this.filtre1( mat , d ));
    }
    /*
      =============================================================================================================
    */
    moi='dossiers2';
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
}
export{dossiers2 as dossiers2};