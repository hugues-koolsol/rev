const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
class c_souche_bdd1{
 
    #liste_des_types_de_requetes=['liste_ecran','insert','select','update','delete'];
    #chp_rev_travail_basedd=null;
    #nom_de_la_table=null;
    #nom_ref=null; // u tilisateurs
    #chemin_module1=null;
    #nom_de_la_classe_générée=null; //c_u tilisateurs1
    #mat=null;
    #obj_bdd={};
    #obj_table={};
    /*
      =============================================================================================================
    */
    constructor( obj_init ){
        this.#chemin_module1=obj_init.chemin_module1;
        /* debugger; */
        /* console.log( 'ici' ); */
    }
    /*
      =============================================================================================================
    */
    générer_les_souches(par){
        let def_table=this.#obj_bdd[this.#nom_de_la_table];
        return({__xst:__xsu});
    }
    /*
      =============================================================================================================
    */
    enrichir_objet_base(mat2){
        let l02=mat2.length;
        let nom_de_la_table='';
        this.#obj_bdd={};
        this.#obj_table={};
        
        for( let j=1 ; j < l02 ; j=mat2[j][12] ){
            if(mat2[j][2] === 'f' && mat2[j][1] === 'créer_table'){
                nom_de_la_table='';
                for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                    if(mat2[k][2] === 'f' && mat2[k][1] === 'nom_de_la_table' && mat2[k][8] === 1 && mat2[k + 1][2] === 'c'){
                        nom_de_la_table=mat2[k + 1][1];
                        this.#obj_bdd[nom_de_la_table]={
                            champs:{},
                            ordre_des_champs:[],
                            meta:{}
                        }
                    }
                }
                if(nom_de_la_table !== ''){
                 
                    for( let k=j + 1 ; k < l02 ; k=mat2[k][12] ){
                        if(mat2[k][2] === 'f' && mat2[k][1] === 'meta'){
                            for( let l=k + 1 ; l < l02 ; l=mat2[l][12] ){
                                if(mat2[l][2] === 'f' && mat2[l][8] === 1 && mat2[l+1][2] === 'c'){
                                  this.#obj_bdd[nom_de_la_table].meta[mat2[l][1]]=mat2[l+1][1];
                                }
                            }
                        }
                    }
                 
                    for( let l=j + 1 ; l < l02 ; l=mat2[l][12] ){
                        if(mat2[l][1] === 'champs'){
                            for( let m=l + 1 ; m < l02 ; m=mat2[m][12] ){
                                if(mat2[m][1] === 'champ'){
                                    var nom_du_champ='';
                                    for( let n=m + 1 ; n < l02 ; n=mat2[n][12] ){
                                        if(mat2[n][1] === 'nom_du_champ'){
                                            nom_du_champ=mat2[n + 1][1];
                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]={"nom_du_champ" : nom_du_champ , meta:{}};
                                        }
                                    }
                                    if(nom_du_champ !== ''){
                                        this.#obj_bdd[nom_de_la_table].ordre_des_champs.push(nom_du_champ);
                                        for( let n=m + 1 ; n < l02 ; n=mat2[n][12] ){
                                            if(mat2[n][1] === 'type'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['type_du_champ']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'primary_key'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['primary_key']=true;
                                            }else if(mat2[n][1] === 'non_nulle'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['non_nulle']=true;
                                            }else if(mat2[n][1] === 'espece_du_champ'){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['espece_du_champ']=mat2[n + 1][1];
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['type_du_champ']=mat2[n + 1][1];
                                            }else if(mat2[n][1] === 'references' && mat2[n][8] === 2 ){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['table_mere']=mat2[n+1][1];
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['champ_pere']=mat2[n+2][1];
                                            }else if(mat2[n][1] === 'longueur_du_champ' && mat2[n][8] === 1  && mat2[n+1][2] === 'c'  ){
                                                this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['longueur_du_champ']=parseInt(mat2[n+1][1],10);
                                            }else if(mat2[n][1] === 'meta' && mat2[n][2] === 'f'){
                                                for( let o=n + 1 ; o < l02 ; o=mat2[o][12] ){
                                                    if(mat2[o][1] === 'genre' && mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o+1][2] === 'c'){
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_numerique_du_champ']=mat2[o + 1][1];
                                                        this.#obj_bdd[nom_de_la_table].champs[nom_du_champ]['genre_objet_du_champ']=__gi1.__liste_des_genres[mat2[o + 1][1]];
                                                        
                                                        /*
                                                        debugger
                                                        __gi1.__liste_des_genres
                                                        */
//                                                            console.log('mat2[o][1]='+nom_du_champ+ ' : ' +mat2[o+1][1]);
                                                    }else{
                                                        if(mat2[o][2] === 'f' && mat2[o][8] === 1 && mat2[o+1][2] === 'c'){
                                                            this.#obj_bdd[nom_de_la_table].champs[nom_du_champ].meta[mat2[o][1]]=mat2[o+1][1];
                                                        }
                                                    }
                                                 
                                                }
                                            }else{
//                                                 console.log('tab2[n][1]='+tab2[n][1]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }else{
                    debugger;
                }
            }
        }
        console.log('this.#obj_bdd',this.#obj_bdd);
        
        
    }
    /*
      =============================================================================================================
    */
    charger_base1( par ){
        console.log( 'par=' , par );
        this.#chp_rev_travail_basedd=par['donnees_bdd']['T0.chp_rev_travail_basedd'];
        
        var obj1=__gi1.__m_rev1.rev_tm( this.#chp_rev_travail_basedd );
        if(obj1.__xst === __xsu){
            this.#mat=obj1.__xva;
            this.enrichir_objet_base(obj1.__xva);
        }else{
            debugger;
        }
        
        this.#nom_de_la_table=par['nom_de_la_table'];
        this.#obj_table=this.#obj_bdd[this.#nom_de_la_table];

        let o1='';

        
        var cmd='';
        cmd+='interface1.module1(';
        cmd+=' chemin_module1(\'' + this.#chemin_module1 + '\'),';
        cmd+=' methode3(générer_les_souches),';
        cmd+=')';
        
        o1+='<div id="gererer_le_souches_bdd1" data-hug_click="'+cmd+'" style="" class="hug_bouton yy__x_signaux_1">générer</div>';
        
        let contenu_generer_les_souches=document.getElementById( 'contenu_generer_les_souches' );
        contenu_generer_les_souches.innerHTML=o1;
        __gi1.ajoute_les_evenements_aux_boutons( null );
    }
    /*
      =============================================================================================================
    */
    init0( par ){
        console.log( par );
        __gi1.fermer_sous_fenetre1( [] );
        this.#chp_rev_travail_basedd=null;
        this.#nom_de_la_table=null;
        let cmd='';
        cmd+='c_bases1.recuperer_zone_travail_pour_les_bases2(';
        cmd+=' les_id_des_bases(' + par.chi_id_basedd + '),';
        cmd+=' nom_de_la_table(\'' + par.nom_de_la_table.replace( /\\/g , '\\\\' ).replace( /\'/g , '\\\'' ) + '\'),';
        cmd+=' nom_du_module2(\'_js/c_souche_bdd1.js\'),';
        cmd+=' valeurs2(générer_les_souches)'
        cmd+=')';
        let obj={"__x_action" : cmd};
        __gi1.envoyer_un_message_au_worker( obj );
        return;
    }
}
export{c_souche_bdd1 as c_souche_bdd1};