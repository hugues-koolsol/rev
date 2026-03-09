const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_119{
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
          \`T0\`.\`chi_id_utilisateur\` , \`T0\`.\`chp_nom_de_connexion_utilisateur\` , \`T0\`.\`chp_mot_de_passe_utilisateur\` , \`T0\`.\`chi_compteur1_utilisateur\` , \`T0\`.\`chx_acces_utilisateur\` , 
          \`T1\`.\`chp_nom_acces\` , \`T0\`.\`che_actif_utilisateur\` , \`T1\`.\`che_actif_acces\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_utilisateurs T0
            LEFT JOIN tbl_acces T1 ON T1.chi_id_acces = T0.chx_acces_utilisateur
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        if(par.hasOwnProperty( 'T0_chi_id_utilisateur' ) && par['T0_chi_id_utilisateur'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_utilisateur`' , par['T0_chi_id_utilisateur'] );
        }
        if(par.hasOwnProperty( 'T0_chp_nom_de_connexion_utilisateur' ) && par['T0_chp_nom_de_connexion_utilisateur'] !== ''){
            where0+=` AND \`T0\`.\`chp_nom_de_connexion_utilisateur\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_nom_de_connexion_utilisateur'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_che_actif_utilisateur' ) && par['T0_che_actif_utilisateur'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`che_actif_utilisateur`' , par['T0_che_actif_utilisateur'] );
        }
        if(par.hasOwnProperty( 'T0_chi_compteur1_utilisateur' ) && par['T0_chi_compteur1_utilisateur'] !== ''){
            where0+=` AND \`T0\`.\`chi_compteur1_utilisateur\` >= ` + this.__gi1.__fnt1.sq1( par['T0_chi_compteur1_utilisateur'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chx_acces_utilisateur' ) && par['T0_chx_acces_utilisateur'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_acces_utilisateur`' , par['T0_chx_acces_utilisateur'] );
        }
        if(par.hasOwnProperty( 'T1_chp_nom_acces' ) && par['T1_chp_nom_acces'] !== ''){
            where0+=` AND \`T1\`.\`chp_nom_acces\` LIKE ` + this.__gi1.__fnt1.sq2( par['T1_chp_nom_acces'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T1_che_actif_acces' ) && par['T1_che_actif_acces'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T1`.`che_actif_acces`' , par['T1_che_actif_acces'] );
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_utilisateur\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__gi1.__fnt1.sq1( par['quantitee'] ) + ` OFFSET ` + this.__gi1.__fnt1.sq1( par['debut'] ) + ` `;
        sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_119 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 119 , e , sql0 , donnees_retournees , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0.chi_id_utilisateur" : lignes[numero_de_ligne][0] ,
                    "T0.chp_nom_de_connexion_utilisateur" : lignes[numero_de_ligne][1] ,
                    "T0.chp_mot_de_passe_utilisateur" : lignes[numero_de_ligne][2] ,
                    "T0.chi_compteur1_utilisateur" : lignes[numero_de_ligne][3] ,
                    "T0.chx_acces_utilisateur" : lignes[numero_de_ligne][4] ,
                    "T1.chp_nom_acces" : lignes[numero_de_ligne][5] ,
                    "T0.che_actif_utilisateur" : lignes[numero_de_ligne][6] ,
                    "T1.che_actif_acces" : lignes[numero_de_ligne][7]
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
    moi='sql_119';
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
export{sql_119 as sql_119};