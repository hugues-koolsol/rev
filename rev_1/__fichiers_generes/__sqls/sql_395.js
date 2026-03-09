const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_395{
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
          \`T0\`.\`chi_id_travail\` , \`T0\`.\`chp_resume_travail\` , \`T0\`.\`cht_rev_travail\` , \`T0\`.\`chx_utilisateur_travail\` , \`T0\`.\`chd_dtc_travail\` , 
          \`T1\`.\`chp_nom_de_connexion_utilisateur\` , \`T0\`.\`chp_etat_travail\` , \`T0\`.\`chx_projet_travail\` , \`T0\`.\`cht_utilisateur_travail\` , \`T0\`.\`chn_duree_travail\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  tbl_travaux T0
            LEFT JOIN tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        if(par.hasOwnProperty( 'T0_chi_id_travail' ) && par['T0_chi_id_travail'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_travail`' , par['T0_chi_id_travail'] );
        }
        if(par.hasOwnProperty( 'T0_chp_resume_travail' ) && par['T0_chp_resume_travail'] !== ''){
            where0+=` AND \`T0\`.\`chp_resume_travail\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_resume_travail'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_cht_rev_travail' ) && par['T0_cht_rev_travail'] !== ''){
            where0+=` AND \`T0\`.\`cht_rev_travail\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_cht_rev_travail'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chx_utilisateur_travail' ) && par['T0_chx_utilisateur_travail'] !== ''){
            where0+='\r\n' + this.__gi1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_utilisateur_travail`' , par['T0_chx_utilisateur_travail'] );
        }
        if(par.hasOwnProperty( 'T0_chd_dtc_travail' ) && par['T0_chd_dtc_travail'] !== ''){
            where0+=` AND \`T0\`.\`chd_dtc_travail\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chd_dtc_travail'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T1_chp_nom_de_connexion_utilisateur' ) && par['T1_chp_nom_de_connexion_utilisateur'] !== ''){
            where0+=` AND \`T1\`.\`chp_nom_de_connexion_utilisateur\` LIKE ` + this.__gi1.__fnt1.sq2( par['T1_chp_nom_de_connexion_utilisateur'] ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chp_etat_travail' ) && par['T0_chp_etat_travail'] !== ''){
            where0+=` AND \`T0\`.\`chp_etat_travail\` LIKE ` + this.__gi1.__fnt1.sq2( par['T0_chp_etat_travail'] ) + '\r\n';
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_travail\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__gi1.__fnt1.sq1( par['quantitee'] ) + ` OFFSET ` + this.__gi1.__fnt1.sq1( par['debut'] ) + ` `;
        sql0+=plage0;
        /* this.__gi1.ma_trace1('sql_395 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 395 , e , sql0 , donnees_retournees , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0.chi_id_travail" : lignes[numero_de_ligne][0] ,
                    "T0.chp_resume_travail" : lignes[numero_de_ligne][1] ,
                    "T0.cht_rev_travail" : lignes[numero_de_ligne][2] ,
                    "T0.chx_utilisateur_travail" : lignes[numero_de_ligne][3] ,
                    "T0.chd_dtc_travail" : lignes[numero_de_ligne][4] ,
                    "T1.chp_nom_de_connexion_utilisateur" : lignes[numero_de_ligne][5] ,
                    "T0.chp_etat_travail" : lignes[numero_de_ligne][6] ,
                    "T0.chx_projet_travail" : lignes[numero_de_ligne][7] ,
                    "T0.cht_utilisateur_travail" : lignes[numero_de_ligne][8] ,
                    "T0.chn_duree_travail" : lignes[numero_de_ligne][9]
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
    moi='sql_395';
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
export{sql_395 as sql_395};