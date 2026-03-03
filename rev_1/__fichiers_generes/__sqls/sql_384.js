const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_384{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_projets` SET \r\n';
        let tableau_champs=[];
        try{

            if(par['n_chp_nom_projet']===undefined || par['n_chp_nom_projet']==='' || par['n_chp_nom_projet'] === null ){
                tableau_champs.push('`chp_nom_projet` = NULL');
            }else{
                tableau_champs.push('`chp_nom_projet` = \''+this.__gi1.__fnt1.sq0(par['n_chp_nom_projet'])+'\'');
            }
            if(par['n_cht_commentaire_projet']===undefined || par['n_cht_commentaire_projet']==='' || par['n_cht_commentaire_projet'] === null ){
                tableau_champs.push('`cht_commentaire_projet` = NULL');
            }else{
                tableau_champs.push('`cht_commentaire_projet` = \''+this.__gi1.__fnt1.sq0(par['n_cht_commentaire_projet'])+'\'');
            }

            if(tableau_champs.length===0){
                return {/**/
                    "__xst" : __xer ,
                    "__xme" : 'aucun champ à mettre à jour' ,
                    "sql0" : sql0 , 
                    "texte_requete" : 'la modification dans la table des projets' ,
                };
            }
            sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_projet\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_projet'] ) + ``+'\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_384= ' + sql0 ); */
            let res=await this.__db1.exec(sql0);
            return({ "__xst" : __xsu, 'changements' : res});
        }catch(e){
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
                "texte_requete" : 'la modification dans la table des projets' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_384';
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
export{sql_384 as sql_384};