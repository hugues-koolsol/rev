const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_2001{
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
          \`T0\`.\`chp_nom_acteur\` , \`T0\`.\`chp_prenom_acteur\` , \`T0\`.\`chx_utilisateur_acteur\` , \`T1\`.\`chp_nom_de_connexion_utilisateur\` , \`T2\`.\`chi_id_acces\` , 
          \`T1\`.\`chx_acces_utilisateur\` , \`T2\`.\`chp_nom_acces\` , \`T2\`.\`chx_groupe_acces\` , \`T2\`.\`chx_metier_acces\` , \`T3\`.\`chp_nom_groupe\` , 
          \`T4\`.\`chp_nom_metier\` , \`T0\`.\`chx_utilisateur_acteur\` , \`T0\`.\`chx_statut_acteur\` , \`T5\`.\`chp_cle_grandeur\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  b2.tbl_acteurs T0
            LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
     
            LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
     
            LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
     
            LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
     
            LEFT JOIN b1.tbl_grandeurs T5 ON T5.chi_id_grandeur = T0.chx_statut_acteur
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        if(par.hasOwnProperty( 'T0_chp_nom_acteur' ) && par['T0_chp_nom_acteur'] !== ''){
            where0+=` AND \`T0\`.\`chp_nom_acteur\` LIKE ` + this.__ig1.__fnt1.sq2( par['T0_chp_nom_acteur'] , 'T0_chp_nom_acteur' ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chp_prenom_acteur' ) && par['T0_chp_prenom_acteur'] !== ''){
            where0+=` AND \`T0\`.\`chp_prenom_acteur\` LIKE ` + this.__ig1.__fnt1.sq2( par['T0_chp_prenom_acteur'] , 'T0_chp_prenom_acteur' ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T1_chp_nom_de_connexion_utilisateur' ) && par['T1_chp_nom_de_connexion_utilisateur'] !== ''){
            where0+=` AND \`T1\`.\`chp_nom_de_connexion_utilisateur\` LIKE ` + this.__ig1.__fnt1.sq2( par['T1_chp_nom_de_connexion_utilisateur'] , 'T1_chp_nom_de_connexion_utilisateur' ) + '\r\n';
        }
        if(par.hasOwnProperty( 'T0_chx_utilisateur_acteur' ) && par['T0_chx_utilisateur_acteur'] !== ''){
            where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_utilisateur_acteur`' , par['T0_chx_utilisateur_acteur'] );
        }
        if(par.hasOwnProperty( 'T0_chx_statut_acteur' ) && par['T0_chx_statut_acteur'] !== ''){
            where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_statut_acteur`' , par['T0_chx_statut_acteur'] );
        }
        sql0+=where0;
        const order0=`
           ORDER BY  \`T0\`.\`chx_utilisateur_acteur\` DESC`;
        sql0+=order0;
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( par['quantitee'] , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( par['debut'] , 'debut' ) + ` `;
        sql0+=plage0;
        /* this.__ig1.ma_trace1('sql_2001 sql0=',sql0); */
        let lignes=[];
        try{
            let statement=await this.__db1.prepare( sql0 );
            lignes=await statement.values();
            await statement.finalize();
        }catch(e){
            return(this.__ig1.traite_erreur_sql( 2001 , e , sql0 , {} ));
        }
        /*  */
        for(let numero_de_ligne in lignes){
            donnees0.push( {
                    "T0.chp_nom_acteur" : lignes[numero_de_ligne][0] ,
                    "T0.chp_prenom_acteur" : lignes[numero_de_ligne][1] ,
                    "T0.chx_utilisateur_acteur" : lignes[numero_de_ligne][2] ,
                    "T1.chp_nom_de_connexion_utilisateur" : lignes[numero_de_ligne][3] ,
                    "T2.chi_id_acces" : lignes[numero_de_ligne][4] ,
                    "T1.chx_acces_utilisateur" : lignes[numero_de_ligne][5] ,
                    "T2.chp_nom_acces" : lignes[numero_de_ligne][6] ,
                    "T2.chx_groupe_acces" : lignes[numero_de_ligne][7] ,
                    "T2.chx_metier_acces" : lignes[numero_de_ligne][8] ,
                    "T3.chp_nom_groupe" : lignes[numero_de_ligne][9] ,
                    "T4.chp_nom_metier" : lignes[numero_de_ligne][10] ,
                    "T0.chx_utilisateur_acteur" : lignes[numero_de_ligne][11] ,
                    "T0.chx_statut_acteur" : lignes[numero_de_ligne][12] ,
                    "T5.chp_cle_grandeur" : lignes[numero_de_ligne][13]
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
    moi='sql_2001';
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
export{sql_2001 as sql_2001};