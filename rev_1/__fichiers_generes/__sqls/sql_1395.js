const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_1395{
    /*
      =============================================================================================================
    */
    async sql( tup ){
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
        /* this.__ig1.ma_trace1( 'tup=' , tup ); */
        try{
            if(tup.hasOwnProperty( 'T0_chi_id_travail' ) && tup.T0_chi_id_travail !== ''){
                if(tup.T0_chi_id_travail === 0){
                    where0+=' AND `T0`.`chi_id_travail` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chi_id_travail`' , tup.T0_chi_id_travail );
                }
            }
            if(tup.hasOwnProperty( 'T0_chp_resume_travail' ) && tup.T0_chp_resume_travail !== ''){
                where0+=` AND \`T0\`.\`chp_resume_travail\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_resume_travail , 'T0_chp_resume_travail' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_cht_rev_travail' ) && tup.T0_cht_rev_travail !== ''){
                where0+=` AND \`T0\`.\`cht_rev_travail\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_cht_rev_travail , 'T0_cht_rev_travail' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chx_utilisateur_travail' ) && tup.T0_chx_utilisateur_travail !== ''){
                if(tup.T0_chx_utilisateur_travail === 0){
                    where0+=' AND `T0`.`chx_utilisateur_travail` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_utilisateur_travail`' , tup.T0_chx_utilisateur_travail );
                }
            }
            if(tup.hasOwnProperty( 'T0_chd_dtc_travail' ) && tup.T0_chd_dtc_travail !== ''){
                where0+=` AND \`T0\`.\`chd_dtc_travail\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chd_dtc_travail , 'T0_chd_dtc_travail' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T1_chp_nom_de_connexion_utilisateur' ) && tup.T1_chp_nom_de_connexion_utilisateur !== ''){
                where0+=` AND \`T1\`.\`chp_nom_de_connexion_utilisateur\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T1_chp_nom_de_connexion_utilisateur , 'T1_chp_nom_de_connexion_utilisateur' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chp_etat_travail' ) && tup.T0_chp_etat_travail !== ''){
                where0+=` AND \`T0\`.\`chp_etat_travail\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_etat_travail , 'T0_chp_etat_travail' ) + '\r\n';
            }
        }catch(e){
            return({"__xst" : __xer , "__xme" : 'erreur de construction de la requête [' + this.__ig1.nl2(e) + ' ] ' });
            
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chi_id_travail\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( tup.quantitee , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( tup.debut , 'debut' ) + ` `;
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_1395 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 1395 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0_chi_id_travail" : lignes[numero_de_ligne][0] ,
                    "T0_chp_resume_travail" : lignes[numero_de_ligne][1] ,
                    "T0_cht_rev_travail" : (lignes[numero_de_ligne][2]===null?null:lignes[numero_de_ligne][2].substr(0,200)) ,
                    "T0_chx_utilisateur_travail" : lignes[numero_de_ligne][3] ,
                    "T0_chd_dtc_travail" : lignes[numero_de_ligne][4] ,
                    "T1_chp_nom_de_connexion_utilisateur" : lignes[numero_de_ligne][5] ,
                    "T0_chp_etat_travail" : lignes[numero_de_ligne][6] ,
                    "T0_chx_projet_travail" : lignes[numero_de_ligne][7] ,
                    "T0_cht_utilisateur_travail" : (lignes[numero_de_ligne][8]===null?null:lignes[numero_de_ligne][8].substr(0,200)) ,
                    "T0_chn_duree_travail" : lignes[numero_de_ligne][9]
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
    moi='sql_1395';
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
export{sql_1395 as sql_1395};