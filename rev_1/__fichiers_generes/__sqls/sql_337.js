const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_337{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let donnees0=[];
        let __nbEnregs=0;
        let where0='';
        let sql0='';
        let champs0='';
        let from0='';
        /*  */
        champs0=`
          \`T0\`.\`chi_id_menu\` , \`T0\`.\`cht_libelle_menu\` , \`T0\`.\`chp_titre_menu\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_menus T0    `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        if(par.hasOwnProperty( 'T0_chi_id_menu' ) && par['T0_chi_id_menu'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_menu`' , par['T0_chi_id_menu'] );
        }
        if(par.hasOwnProperty( 'T0_cht_libelle_menu' ) && par['T0_cht_libelle_menu'] !== ''){
            where0+=` AND \`T0\`.\`cht_libelle_menu\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_cht_libelle_menu'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chp_titre_menu' ) && par['T0_chp_titre_menu'] !== ''){
            where0+=` AND \`T0\`.\`chp_titre_menu\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_titre_menu'] ) + '\r\n';
        }
        where0+=` AND \`T0\`.\`chx_autorisation_menu\` IS NULL`;
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_menu\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__gi1.__fnt1.sq1( par['quantitee'] ) + ` OFFSET ` + this.__gi1.__fnt1.sq1( par['debut'] ) + ` `;
        sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_337 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 337 , e , sql0 , donnees_retournees , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0.chi_id_menu" : lignes[numero_de_ligne][0] ,
                    "T0.cht_libelle_menu" : lignes[numero_de_ligne][1] ,
                    "T0.chp_titre_menu" : lignes[numero_de_ligne][2]
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
    moi='sql_337';
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
export{sql_337 as sql_337};