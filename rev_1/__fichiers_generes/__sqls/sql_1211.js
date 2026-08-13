const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1211{
    /*
      =============================================================================================================
    */
    async sql( par ){
        let donnees0=[];
        let __nbEnregs=0;
        let where0='';
        let sql0='';
        let champs0='';
        let from0='';
        /*  */
        champs0=`
          \`T0\`.\`chi_id_grandeur\` , \`T0\`.\`chp_cle_grandeur\` , \`T0\`.\`cht_rev_grandeur\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_grandeurs T0    `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        try{
            if(par.T0_che_actif_grandeur !== undefined && par.T0_che_actif_grandeur !== '' ){
                where0+=` AND \`T0\`.\`che_actif_grandeur\` = 1`;
            }
            if(par.T0_chx_parametre_grandeur !== undefined && par.T0_chx_parametre_grandeur !== '' ){
                where0+=` AND \`T0\`.\`chx_parametre_grandeur\` = ` + this.__ig1.__fnt1.sq1( par.T0_chx_parametre_grandeur , 'T0_chx_parametre_grandeur' ) + ``;
            }
        }catch(e){
            return({"__xst" : __xer , "__xme" : 'erreur de construction de la requête [' + this.__ig1.nl2(e) + ' ] ' });
            
        }
        sql0+=where0;
    const order0=` ORDER BY ` + par.liste_des_tris + ``;
        sql0+=order0;
        /* ATTENTION : pas de limites */
        const plage0='';
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1211 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1211 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0_chi_id_grandeur" : lignes[numero_de_ligne][0] ,
                    "T0_chp_cle_grandeur" : (lignes[numero_de_ligne][1]===null?null:lignes[numero_de_ligne][1].substr(0,200)) ,
                    "T0_cht_rev_grandeur" : (lignes[numero_de_ligne][2]===null?null:lignes[numero_de_ligne][2].substr(0,200))
                } );
        }
        /* comptage */
        const sql1='SELECT COUNT(*) as __nbEnregs ' + from0 + where0;
        let statement1=await this.__db1.prepare( sql1 );
        lignes=await statement1.values();
        await statement1.finalize();
        for(let numero_de_ligne in lignes){
            __nbEnregs=lignes[numero_de_ligne][0];
        }
        /*  */
        return({
                 /*  */
                "__xst" : __xsu ,
                "__xva" : donnees0 ,
                "nombre" : __nbEnregs ,
                "sql0" : sql0 ,
                "where0" : where0
            });
    }
    /*
      =============================================================================================================
    */
    moi='sql_1211';
    __ig1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 , __db1 ){
        this.__ig1=__ig1;
        this.__db1=__db1;
    }
}
export{sql_1211 as sql_1211};