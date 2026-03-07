const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_145{
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
          \`T0\`.\`chi_id_menu\` , \`T0\`.\`chp_titre_menu\` , \`T0\`.\`chx_autorisation_menu\` , \`T0\`.\`chp_methode_menu\` , \`T0\`.\`cht_libelle_menu\` , 
          \`T0\`.\`cht_condition_menu\` , \`T1\`.\`chx_acces_autorisation\` , \`T1\`.\`chx_source_autorisation\` , \`T2\`.\`chp_nom_acces\` , \`T3\`.\`chp_nom_source\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_menus T0
            LEFT JOIN tbl_autorisations T1 ON T1.chi_id_autorisation = T0.chx_autorisation_menu
     
            LEFT JOIN tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_autorisation
     
            LEFT JOIN tbl_sources T3 ON T3.chi_id_source = T1.chx_source_autorisation
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        if(par.hasOwnProperty( 'T3_chp_nom_source' ) && par['T3_chp_nom_source'] !== ''){
            where0+=` AND \`T3\`.\`chp_nom_source\` LIKE ` + this.__gi1.__fnt1.sq2( par['T3_chp_nom_source'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chi_id_menu' ) && par['T0_chi_id_menu'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_menu`' , par['T0_chi_id_menu'] );
        }
        if(par.hasOwnProperty( 'T0_cht_libelle_menu' ) && par['T0_cht_libelle_menu'] !== ''){
            where0+=` AND \`T0\`.\`cht_libelle_menu\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_cht_libelle_menu'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chp_titre_menu' ) && par['T0_chp_titre_menu'] !== ''){
            where0+=` AND \`T0\`.\`chp_titre_menu\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_titre_menu'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chx_autorisation_menu' ) && par['T0_chx_autorisation_menu'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_autorisation_menu`' , par['T0_chx_autorisation_menu'] );
        }
        if(par.hasOwnProperty( 'T1_chp_nom_autorisation' ) && par['T1_chp_nom_autorisation'] !== ''){
            where0+=` AND \`T1\`.\`chp_nom_autorisation\` LIKE ` + this.__gi1.__fnt1.sq2( par['T1_chp_nom_autorisation'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chp_methode_menu' ) && par['T0_chp_methode_menu'] !== ''){
            where0+=` AND \`T0\`.\`chp_methode_menu\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_methode_menu'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T1_chx_acces_autorisation' ) && par['T1_chx_acces_autorisation'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T1`.`chx_acces_autorisation`' , par['T1_chx_acces_autorisation'] );
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_menu\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__gi1.__fnt1.sq1( par['quantitee'] ) + ` OFFSET ` + this.__gi1.__fnt1.sq1( par['debut'] ) + ` `;
        sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_145 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            if(e.stack.indexOf('API misuse')>=0){
                console.log('%c\nATTENTION API MISUSE, un await est il manquant quelquepart ?\n\n'+e.stack,'color:red;background-color:yellow;')
            }
            donnees_retournees.__xst=__xer;
            this.__gi1.__xsi[__xer].push( 'erreur sql 145 ' + sql0 + ' [' + this.__gi1.nl2( e ) + ']' );
            return({"__xst" : __xer});
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0.chi_id_menu" : lignes[numero_de_ligne][0] ,
                    "T0.chp_titre_menu" : lignes[numero_de_ligne][1] ,
                    "T0.chx_autorisation_menu" : lignes[numero_de_ligne][2] ,
                    "T0.chp_methode_menu" : lignes[numero_de_ligne][3] ,
                    "T0.cht_libelle_menu" : lignes[numero_de_ligne][4] ,
                    "T0.cht_condition_menu" : lignes[numero_de_ligne][5] ,
                    "T1.chx_acces_autorisation" : lignes[numero_de_ligne][6] ,
                    "T1.chx_source_autorisation" : lignes[numero_de_ligne][7] ,
                    "T2.chp_nom_acces" : lignes[numero_de_ligne][8] ,
                    "T3.chp_nom_source" : lignes[numero_de_ligne][9]
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
    moi='sql_145';
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
export{sql_145 as sql_145};