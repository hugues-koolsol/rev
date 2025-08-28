class c_php_bdd1{

    /*
      =============================================================================================================
    */
    constructor( obj_init ){
        //debugger;
        /* console.log( 'ici' ); */
    }
    
    
    /*
        =======================================================================================================
    */
    charger_base1(par){
        console.log('par=' , par );


         let o1='';
         o1+='<h1>'+par.nom_de_la_table+'</h1>';
         
         
        let vv_sous_fenetre1=document.getElementById( 'vv_sous_fenetre1' );
        vv_sous_fenetre1.innerHTML=o1;
        /* __contenu_modale => vv_sous_fenetre1 */
        vv_sous_fenetre1.showModal();
        __gi1.ajoute_les_evenements_aux_boutons( null );
        
    }

    /*
        =======================================================================================================
    */
    generer_le_php1(par){
         console.log(par);
         __gi1.fermer_sous_fenetre1([])
         

        let obj={"__x_action" : 'c_bases1.recuperer_zone_travail_pour_les_bases2(les_id_des_bases(' + par.id_bdd_de_la_base_en_cours + '),nom_de_la_table(\''+par.nom_de_la_table.replace(/\\/g,'\\\\').replace(/\'/g,'\\\'')+'\'))'};
        __gi1.envoyer_un_message_au_worker( obj );
        return;
         
         
         
    }
    
}
export{c_php_bdd1 as c_php_bdd1};