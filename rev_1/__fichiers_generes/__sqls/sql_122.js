const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_122{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_utilisateurs` SET \r\n';
        let tableau_champs=[];
        try{

            if(par['n_chp_nom_de_connexion_utilisateur']===undefined || par['n_chp_nom_de_connexion_utilisateur']==='' || par['n_chp_nom_de_connexion_utilisateur'] === null ){
                tableau_champs.push('`chp_nom_de_connexion_utilisateur` = NULL');
            }else{
                tableau_champs.push('`chp_nom_de_connexion_utilisateur` = \''+this.__gi1.__fnt1.sq0(par['n_chp_nom_de_connexion_utilisateur'])+'\'');
            }
            if(par['n_chx_acces_utilisateur']===undefined || par['n_chx_acces_utilisateur']==='' || par['n_chx_acces_utilisateur'] === null ){
                tableau_champs.push('`chx_acces_utilisateur` = NULL');
            }else{
                tableau_champs.push('`chx_acces_utilisateur` = '+this.__gi1.__fnt1.sq0(par['n_chx_acces_utilisateur'])+'');
            }
            if(par['n_che_actif_utilisateur']===undefined || par['n_che_actif_utilisateur']==='' || par['n_che_actif_utilisateur'] === null ){
                tableau_champs.push('`che_actif_utilisateur` = NULL');
            }else{
                tableau_champs.push('`che_actif_utilisateur` = '+this.__gi1.__fnt1.sq0(par['n_che_actif_utilisateur'])+'');
            }

            if(tableau_champs.length===0){
                return {/**/
                    "__xst" : __xer ,
                    "__xme" : 'aucun champ à mettre à jour' ,
                    "sql0" : sql0 , 
                    "texte_requete" : 'la modification dans la table des utilisateurs' ,
                };
            }
            sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_utilisateur\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_utilisateur'] ) + ``+'\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_122= ' + sql0 ); */
            let res=await this.__db1.exec(sql0);
            return({ "__xst" : __xsu, 'changements' : res});
        }catch(e){
            if(e.stack.indexOf('API misuse')>=0){
                console.log('%c\nATTENTION API MISUSE, un await est il manquant quelquepart ?\n\n'+e.stack,'color:red;background-color:yellow;')
            }
            if(this.__gi1.__deverminage===1){
                this.__gi1.__xsi[__xdv].push(this.__gi1.nl2(e));
            }else if(this.__gi1.__deverminage===2){
                let a=RegExp(this.__gi1.repertoire_du_pgm_serveur,'g');
                this.__gi1.__xsi[__xdv].push(e.stack.replace( /\n/g , '\n' ).replace( a, '').replace(/\(file\:\/\//g,'').replace(/ at/g,'<br />')+'<hr />' );
            }
            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base ':'erreur de modification ';
            return {/**/
                "__xst" : __xer , 
                "sql0" : sql0 , 
                "texte_requete" : 'la modification dans la table des utilisateurs' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_122';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 , __db1 ){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_122 as sql_122};