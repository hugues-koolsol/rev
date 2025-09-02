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
    selectionner_une_requete(mat){
        let zone_select='';
        let zone_td='';
        for( let i=1 ; i < mat.length ; i=mat[i][12] ){
            if(mat[i][1] === 'zone_select' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_select=mat[i + 1][1];
            }else if(mat[i][1] === 'zone_td' && mat[i][2] === 'f' && mat[i][8] === 1 && mat[i + 1][2] === 'c'){
                zone_td=mat[i + 1][1];
            }
        }
        if(zone_select!=='' && zone_td!==''){
            if(document.getElementById(zone_select).value===''){
                document.getElementById(zone_td).innerHTML='';
            }else{
                document.getElementById(zone_td).innerHTML='<pre>'+__gi1.__js_des_sql[document.getElementById(zone_select).value].cht_sql_requete+'</pre>';
            }
        }
    }
    /*
        =======================================================================================================
    */
    charger_base1(par){
        console.log('par=' , par );


         let o1='';
         o1+='<h1>générer le php pour le table : '+par.nom_de_la_table+'</h1>';
         
         o1+='<table>'
         var tab1=[['liste_ecran',0],['insert',0],['select',0],['update',0],['delete',0]];
         for( let type_requete in tab1){
             o1+='<tr>'
             o1+='<td>'
             var cmd=''
             cmd+='interface1.module1(';
             cmd+=' chemin_module1(\'_js/c_php_bdd1.js\'),';
             cmd+=' methode3(selectionner_une_requete),';
             cmd+=' parametre3( ';
             cmd+='  zone_select(reference_requete_'+tab1[type_requete][0]+')';
             cmd+='  zone_td(libelle_de_la_requete_'+tab1[type_requete][0]+')';
             cmd+=' )';
             cmd+=')';
             o1+=tab1[type_requete][0] + ' : ' ;
             o1+='<select id="reference_requete_'+tab1[type_requete][0]+'" data-hug_change="'+cmd+'">';
             o1+='<option value="">choisissez une requête</option>';
             for(let i in __gi1.__js_des_sql){
                 if(__gi1.__js_des_sql[i].cht_sql_requete.indexOf(par.nom_de_la_table)>=0 && __gi1.__js_des_sql[i].chp_type_requete===tab1[type_requete][0] && __gi1.__js_des_sql[i].che_est_souche_requete===1){
                     o1+='<option value="'+i+'">'+i+'</option>';
                 }
             }
             o1+='</select>';
             o1+='</td>'
             o1+='<td id="libelle_de_la_requete_'+tab1[type_requete][0]+'">'
             o1+='</td>'
             o1+='</tr>'
         }
         o1+='</table>'
         
         
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
        
        let cmd='';
        cmd+='c_bases1.recuperer_zone_travail_pour_les_bases2(';
        cmd+=' les_id_des_bases(' + par.id_bdd_de_la_base_en_cours + '),';
        cmd+=' nom_de_la_table(\''+par.nom_de_la_table.replace(/\\/g,'\\\\').replace(/\'/g,'\\\'')+'\')';
        cmd+=')'
        

        let obj={/**/
            "__x_action" : cmd 
        };
        __gi1.envoyer_un_message_au_worker( obj );
        return;
         
         
         
    }
    
}
export{c_php_bdd1 as c_php_bdd1};