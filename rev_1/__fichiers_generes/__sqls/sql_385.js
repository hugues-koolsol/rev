const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_385{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        const champs0=`
          \`T0\`.\`chi_id_requete\` , \`T0\`.\`cht_sql_requete\` , \`T0\`.\`cht_commentaire_requete\` , \`T0\`.\`chp_type_requete\` , \`T0\`.\`che_est_souche_requete\` , 
          \`T0\`.\`cht_rev_requete\`
        `;
        let sql0='SELECT ' + champs0;
        const from0=`
          FROM  tbl_requetes T0        `;
        sql0+=from0;
        const where0=` WHERE \`T0\`.\`chi_id_requete\` < ` + this.__gi1.__fnt1.sq1( par['nb_max'] ) + ``;
        sql0+=where0;
    const order0=`
       ORDER BY  \`T0\`.\`chi_id_requete\` ASC`;
    sql0+=order0;
    const plage0='';
    sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_385 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 385 , e , sql0 , donnees_retournees , {} ));
        }
        let donnees0=[];
        for(let col of lignes){
            donnees0.push( {
                    "T0.chi_id_requete" : col[0] ,
                    "T0.cht_sql_requete" : col[1] ,
                    "T0.cht_commentaire_requete" : col[2] ,
                    "T0.chp_type_requete" : col[3] ,
                    "T0.che_est_souche_requete" : col[4] ,
                    "T0.cht_rev_requete" : col[5]
                } );
        }
        return({"__xst" : __xsu ,"__xva" : donnees0 ,"sql0" : sql0 ,"where0" : where0});
    }
    /*
      =============================================================================================================
    */
    moi='sql_385';
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
export{sql_385 as sql_385};