const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_114{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=''
        try{
            sql0=`DELETE FROM tbl_taches
              WHERE (\`chi_id_tache\` = ` + this.__gi1.__fnt1.sq1( par['chi_id_tache'] ) + `
                   AND \`chx_utilisateur_tache\` = ` + this.__gi1.__fnt1.sq1( par['chx_utilisateur_tache'] ) + `) ;
            `;
            /* this.__gi1.ma_trace1('sql_' , sql0 ); */
        }catch(e){
            if(this.__gi1.__deverminage===1){
                this.__gi1.__xsi[__xdv].push(this.__gi1.nl2(e));
            }else if(this.__gi1.__deverminage===2){
                let a=RegExp(this.__gi1.repertoire_du_pgm_serveur,'g');
                this.__gi1.__xsi[__xdv].push(e.stack.replace( /\n/g , '\n' ).replace( a, '').replace(/\(file\:\/\//g,'').replace(/ at/g,'<br />')+'<hr />' );
            }
            return {
                "__xst"  : __xer,
                "__xva"  : {},
                "__xme"  : 'erreur de construction de la requete 114',
            };
        }

        let obj1=await this.__gi1.tester_les_dependances1(
           {
              'table_parente'     : 'tbl_taches',
              'champ_parent'      : 'chi_id_tache',
              'id_enregistrement' : par['chi_id_tache'],
              '__db1'             : this.__db1,
           },
           donnees_retournees
        );
        if(obj1.__xst!==__xsu){
            return {
                "__xst"  : __xer,
                "__xva"  : {},
                "__xme"  : 'cet enregistrement possède des dépendants et ne peut être supprimé',
                "sql0"   : sql0,
            };
        }
        try{
            const res=await this.__db1.exec(sql0);
            /* this.__gi1.ma_trace1('res=',res) */;
            return {
                "__xst"  : __xsu,
                "__xva"  : {},
                "sql0"    : sql0,
                "changements" : res
            };
        }catch(e){
            let __xme=(e.stack.indexOf('FOREIGN KEY')>=0?'cet enregistrement possède des dépendants et ne peut être supprimé':'autre erreur DELETE') + ' [' + this.__gi1.nl2() + ']';
            if(e.stack.indexOf('FOREIGN KEY')>=0){
                __xme='cet enregistrement possède des dépendants et ne peut être supprimé';
                await this.__gi1.afficher_les_dependances1(
                   {
                      'table_parente'     : 'tbl_taches',
                      'champ_parent'      : 'chi_id_tache',
                      'id_enregistrement' : par['chi_id_tache'],
                      '__db1'             : this.__db1,
                   },
                   donnees_retournees
                );
            }

            if(this.__gi1.__deverminage===1){
                this.__gi1.__xsi[__xdv].push(this.__gi1.nl2(e));
            }else if(this.__gi1.__deverminage===2){
                let a=RegExp(this.__gi1.repertoire_du_pgm_serveur,'g');
                this.__gi1.__xsi[__xdv].push(e.stack.replace( /\n/g , '\n' ).replace( a, '').replace(/\(file\:\/\//g,'').replace(/ at/g,'<br />')+'<hr />' );
                this.__gi1.ma_trace1('par ici');
            }
            this.__gi1.__xsi[__xer].push(__xme);
            /* this.__gi1.ma_trace1('e=',e); */
            return {
                "__xst"  : __xer,
                "__xva"  : {},
                "__xme"  : __xme,
                "sql0"   : sql0,
            };
        }

    }
    /*
      =============================================================================================================
    */
    moi='sql_114';
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
export{sql_114 as sql_114};