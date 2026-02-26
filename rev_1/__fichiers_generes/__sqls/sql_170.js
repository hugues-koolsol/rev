const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_170{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=''
        try{
            sql0=`DELETE FROM tbl_dossiers
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
                "__xme"  : 'erreur de construction de la requete 170',
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
    moi='sql_170';
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
export{sql_170 as sql_170};