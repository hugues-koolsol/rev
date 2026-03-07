const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_343{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0='UPDATE `tbl_requetes` SET \r\n';
        let tableau_champs=[];
        try{

            if(par['n_cht_sql_requete']===undefined || par['n_cht_sql_requete']==='' || par['n_cht_sql_requete'] === null ){
                tableau_champs.push('`cht_sql_requete` = NULL');
            }else{
                tableau_champs.push('`cht_sql_requete` = \''+this.__gi1.__fnt1.sq0(par['n_cht_sql_requete'])+'\'');
            }
            if(par['n_chp_table_reference_requete']===undefined || par['n_chp_table_reference_requete']==='' || par['n_chp_table_reference_requete'] === null ){
                tableau_champs.push('`chp_table_reference_requete` = NULL');
            }else{
                tableau_champs.push('`chp_table_reference_requete` = \''+this.__gi1.__fnt1.sq0(par['n_chp_table_reference_requete'])+'\'');
            }

            if(tableau_champs.length===0){
                return {/**/
                    "__xst" : __xer ,
                    "__xme" : 'aucun champ à mettre à jour' ,
                    "sql0" : sql0 , 
                    "texte_requete" : 'la modification dans la table des requetes' ,
                };
            }
            sql0+=tableau_champs.join(','+'\r\n'+'    ')+'\r\n';
            let where0='';
            where0+=' WHERE 1=1 \r\n';
            where0+=` AND \`chi_id_requete\` = ` + this.__gi1.__fnt1.sq1( par['c_chi_id_requete'] ) + ``+'\r\n';
            sql0+=where0;
            /* this.__gi1.ma_trace1(' sql_343= ' + sql0 ); */
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
                "texte_requete" : 'la modification dans la table des requetes' ,
                "exception" : e , 
                "__xme" : __xme , 
            };
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_343';
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
export{sql_343 as sql_343};