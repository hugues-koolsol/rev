const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_169{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        const champs0=`
          \`T0\`.\`chi_id_dossier\` , \`T0\`.\`chp_nom_dossier\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_dossiers T0        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chx_parent_dossier\` = ` + this.__gi1.__fnt1.sq1( par['T0_chx_parent_dossier'] ) + ``;
        sql0+=where0;
        /* this.__gi1.ma_trace1('sql_169 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 169 , e , sql0 , donnees_retournees , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_dossier" : col[0] ,
                    "T0.chp_nom_dossier" : col[1]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_169';
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
export{sql_169 as sql_169};