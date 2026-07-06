const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1182{
    /*
      =============================================================================================================
    */
    async sql( par ){
        const champs0=`
          \`T0\`.\`chi_id_parametre\` , \`T0\`.\`chp_cle_parametre\` , \`T0\`.\`chp_nom_parametre\` , \`T0\`.\`cht_commentaire_parametre\` , \`T0\`.\`cht_rev_parametre\` , 
          \`T0\`.\`cht_ordre_parametre\` , \`T0\`.\`che_pour_admin_parametre\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_parametres T0        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_parametre\` = ` + this.__ig1.__fnt1.sq1( par['T0_chi_id_parametre'] , 'T0_chi_id_parametre' ) + ``;
        sql0+=where0;
    const order0='';
    sql0+=order0;
    const plage0='';
    sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1182 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1182 , e , sql0 , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_parametre" : col[0] ,
                    "T0.chp_cle_parametre" : col[1] ,
                    "T0.chp_nom_parametre" : col[2] ,
                    "T0.cht_commentaire_parametre" : col[3] ,
                    "T0.cht_rev_parametre" : col[4] ,
                    "T0.cht_ordre_parametre" : col[5] ,
                    "T0.che_pour_admin_parametre" : col[6]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_1182';
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
export{sql_1182 as sql_1182};