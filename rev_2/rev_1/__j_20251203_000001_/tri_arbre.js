import {tri_arbre1} from './tri_arbre1.js';
/* ======================================================= */
function appelee_apres_action1( reference_arbre , obj ){
    switch (obj.type_deplacement){
        case 'editer' : break;
        case 'supprimer' : break;
        case 'avant' : 
        case 'dedans' : 
        case 'apres' :
            console.log( 'appelee_apres_action1' , obj );
            /* console.log(JSON.stringify(arbre)); */
            reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
            break;
            
        default: break;
    }
}
/* ======================================================= */
let options1={
    "hauteur_max_en_vh" : 40 ,
     /* entre 20 et 80 */
    "largeur_max" : '400px' ,
     /* 'calc(100% - 50px)', */
    "afficher_le_bouton_supprimer" : 0 ,
    "fonction_appelee_apres_action" : appelee_apres_action1 ,
    "arborescent" : 1 ,
    "class_du_bouton_deplacer" : 'le_bo_bouton_deplacer' ,
    "boutons_du_menu" : [{"libelle" : '+' ,"fonction" : ajouter_une_branche}] ,
    "class_du_bouton_menu" : 'le_bo_bouton_menu' ,
    "class_du_bouton_replier" : 'le_bo_bouton_replier'
};
var nom_racine1='tri_arbre_racine1';
var arbre1=new tri_arbre1( nom_racine1 , options1 );
/*
  =====================================================================================================================
  =====================================================================================================================
  =====================================================================================================================
  =====================================================================================================================
*/
function appelee_apres_action2( reference_arbre , obj ){
    switch (obj.type_deplacement){
        case 'editer' :
            for( let i=0 ; i < obj.arbre.length ; i++ ){
                if(obj.id_cible === obj.arbre[i].id_interne){
                    let nouveau_nom=window.prompt( "nouveau nom ?" , obj.arbre[i].contenu );
                    if(nouveau_nom){
                        obj.arbre[i].contenu=nouveau_nom;
                        reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
                    }
                    break;
                }
            }
            break;
            
        case 'supprimer' :
            for( let i=0 ; i < obj.arbre.length ; i++ ){
                if(obj.id_cible === obj.arbre[i].id_interne){
                    obj.arbre.splice( i , 1 );
                    break;
                }
            }
            reference_arbre.action_externe_sur_arbre( 'supprimer_un_element' , obj.arbre );
            break;
            
        case 'avant' : 
        case 'dedans' : 
        case 'apres' :
            console.log( 'appelee_apres_action1' , obj );
            /* console.log(JSON.stringify(arbre)); */
            reference_arbre.action_externe_sur_arbre( 'mise_a_jour_arbre' , obj.arbre );
            break;
            
        default: break;
    }
    /* console.log(JSON.stringify(obj)); */
}
/* ======================================================= */
function ajouter_une_branche( e , reference_arbre ){
    console.log( e , reference_arbre );
    let max=0;
    for( let i=0 ; i < reference_arbre.arbre.length ; i++ ){
        if(reference_arbre.arbre[i].id_interne > max){
            max=reference_arbre.arbre[i].id_interne;
        }
    }
    max++;
    let a={
        "id_interne" : max ,
        "id_interne_parent" : 0 ,
        "replie" : 0 ,
        "contient_des_enfants" : 0 ,
        "contenu" : "nb " + max ,
        "attributs" : {}
    };
    reference_arbre.arbre.splice( 0 , 0 , a );
    reference_arbre.action_externe_sur_arbre( 'ajoute_branche' , reference_arbre.arbre );
}
/* ======================================================= */
/* ======================================================= */
/* ======================================================= */
let options2={
    "hauteur_max_en_vh" : 60 ,
     /* entre 20 et 80 */
    "largeur_max" : '400px' ,
     /* 'calc(100% - 50px)', */
    "afficher_le_bouton_supprimer" : 1 ,
    "fonction_appelee_apres_action" : appelee_apres_action2 ,
    "arborescent" : 1 ,
    "class_du_bouton_deplacer" : 'le_bo_bouton_deplacer' ,
    "decallage_entre_niveaux_en_px" : 20 ,
    "boutons_du_menu" : [{"libelle" : '+' ,"fonction" : ajouter_une_branche}] ,
    "class_du_bouton_menu" : 'le_bo_bouton_menu' ,
    "class_du_bouton_supprimer" : 'le_bo_bouton_supprimer' ,
    "hauteur_separateur_en_px" : 15 ,
    "afficher_le_bouton_editer" : 1 ,
    "class_du_bouton_editer" : 'le_bo_bouton_editer' ,
    "class_du_bouton_replier" : 'le_bo_bouton_replier'
};
var arbre2=new tri_arbre1( 'tri_arbre_racine2' , options2 );
/* ======================================================= */
/* ======================================================= */
/* ======================================================= */
let options3={
    "hauteur_max_en_vh" : 20 ,
     /* entre 20 et 80 */
    "largeur_max" : '400px' ,
     /* 'calc(100% - 50px)', */
    "afficher_le_bouton_supprimer" : 0 ,
    "fonction_appelee_apres_action" : appelee_apres_action2 ,
    "arborescent" : 0 ,
    "class_du_bouton_deplacer" : 'le_bo_bouton_deplacer' ,
    "decallage_entre_niveaux_en_px" : 20 ,
    "boutons_du_menu" : [{"libelle" : '+' ,"fonction" : ajouter_une_branche}] ,
    "class_du_bouton_menu" : 'le_bo_bouton_menu'
};
var arbre3=new tri_arbre1( 'tri_arbre_racine3' , options3 );
/* ======================================================= */
/* ======================================================= */
/* ======================================================= */
console.log( 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' );
setTimeout( () => {
        /* document.documentElement.scrollTo( 0 , 50 ); */
        console.log( arbre1.cle_aleatoire , nom_racine1 );
        let id1=nom_racine1 + '_' + arbre1.cle_aleatoire;
        console.log( 'id1=' + id1 );
        document.getElementById( id1 ).scrollTo( 0 , 0 );
        arbre1.calcul_des_positions_relatives();} , 50 );