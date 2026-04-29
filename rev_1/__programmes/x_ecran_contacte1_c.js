class x_ecran_contacte1{
    moi='x_ecran_contacte1';
    #mat=null;
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      =============================================================================================================
    */
    entree_module( mat , d ){
        let o1='';
        o1+='<h1>comment nous contacter</h1>';
        o1+='<p style="text-align:center;">bla bla bla</p>';
        this.__ig1.maj_contenu_principal( o1 );
        this.__ig1.maj_hash( mat , 0 );
        this.__ig1.maj_title_htm1( 'à propos' );
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{x_ecran_contacte1 as x_ecran_contacte1};