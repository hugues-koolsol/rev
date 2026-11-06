const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_2001{
    /*
      ================================liste_ecran=============================================================================
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
          \`T0\`.\`chp_nom_acteur\` , \`T0\`.\`chp_prenom_acteur\` , \`T0\`.\`chx_utilisateur_acteur\` , \`T1\`.\`chp_nom_de_connexion_utilisateur\` , \`T2\`.\`chi_id_acces\` , 
          \`T1\`.\`chx_acces_utilisateur\` , \`T2\`.\`chp_nom_acces\` , \`T2\`.\`chx_groupe_acces\` , \`T2\`.\`chx_metier_acces\` , \`T3\`.\`chp_nom_groupe\` , 
          \`T4\`.\`chp_nom_metier\` , \`T0\`.\`chx_utilisateur_acteur\` , \`T0\`.\`chx_statut_acteur\`
        `;
        sql0='SELECT ' + champs0;
        from0=`
          FROM  b2.tbl_acteurs T0
            LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_acteur
     
            LEFT JOIN b1.tbl_acces T2 ON T2.chi_id_acces = T1.chx_acces_utilisateur
     
            LEFT JOIN b1.tbl_groupes T3 ON T3.chi_id_groupe = T2.chx_groupe_acces
     
            LEFT JOIN b1.tbl_metiers T4 ON T4.chi_id_metier = T2.chx_metier_acces
         `;
        sql0+=from0;
        where0=' WHERE 1=1 ';
        /* this.__ig1.ma_trace1( 'tup=' , tup ); */
        try{
            if(tup.hasOwnProperty( 'T0_chp_nom_acteur' ) && tup.T0_chp_nom_acteur !== ''){
                where0+=` AND \`T0\`.\`chp_nom_acteur\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_nom_acteur , 'T0_chp_nom_acteur' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chp_prenom_acteur' ) && tup.T0_chp_prenom_acteur !== ''){
                where0+=` AND \`T0\`.\`chp_prenom_acteur\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T0_chp_prenom_acteur , 'T0_chp_prenom_acteur' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T1_chp_nom_de_connexion_utilisateur' ) && tup.T1_chp_nom_de_connexion_utilisateur !== ''){
                where0+=` AND \`T1\`.\`chp_nom_de_connexion_utilisateur\` LIKE ` + this.__ig1.__fnt1.sq2( tup.T1_chp_nom_de_connexion_utilisateur , 'T1_chp_nom_de_connexion_utilisateur' ) + '\r\n';
            }
            if(tup.hasOwnProperty( 'T0_chx_utilisateur_acteur' ) && tup.T0_chx_utilisateur_acteur !== ''){
                if(tup.T0_chx_utilisateur_acteur === 0){
                    where0+=' AND `T0`.`chx_utilisateur_acteur` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_utilisateur_acteur`' , tup.T0_chx_utilisateur_acteur );
                }
            }
            if(tup.hasOwnProperty( 'T0_chx_statut_acteur' ) && tup.T0_chx_statut_acteur !== ''){
                if(tup.T0_chx_statut_acteur === 0){
                    where0+=' AND `T0`.`chx_statut_acteur` IS NULL \r\n';
                }else{
                    where0+='\r\n' + this.__ig1.__fnt1.construction_where_sql_sur_id1( '`T0`.`chx_statut_acteur`' , tup.T0_chx_statut_acteur );
                }
            }
        }catch(e){
            return({"__xst" : __xer , "__xme" : 'erreur de construction de la requête [' + this.__ig1.nl2(e) + ' ] ' });
            
        }
        sql0+=where0;
        if(tup.hasOwnProperty( '__ordre_de_tri_de_la_liste1' ) && tup.__ordre_de_tri_de_la_liste1 !== ''){
            sql0+=`
              ORDER BY ` + tup.__ordre_de_tri_de_la_liste1 + ``;
        }else{
            sql0+=`
           ORDER BY  \`T0\`.\`chx_utilisateur_acteur\` DESC`;
        }
        const plage0=`
        LIMIT ` + this.__ig1.__fnt1.sq1( tup.quantitee , 'quantitee' ) + ` OFFSET ` + this.__ig1.__fnt1.sq1( tup.debut , 'debut' ) + ` `;
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
                    "T0_chp_nom_acteur" : lignes[numero_de_ligne][0] ,
                    "T0_chp_prenom_acteur" : lignes[numero_de_ligne][1] ,
                    "T0_chx_utilisateur_acteur" : lignes[numero_de_ligne][2] ,
                    "T1_chp_nom_de_connexion_utilisateur" : lignes[numero_de_ligne][3] ,
                    "T2_chi_id_acces" : lignes[numero_de_ligne][4] ,
                    "T1_chx_acces_utilisateur" : lignes[numero_de_ligne][5] ,
                    "T2_chp_nom_acces" : lignes[numero_de_ligne][6] ,
                    "T2_chx_groupe_acces" : lignes[numero_de_ligne][7] ,
                    "T2_chx_metier_acces" : lignes[numero_de_ligne][8] ,
                    "T3_chp_nom_groupe" : lignes[numero_de_ligne][9] ,
                    "T4_chp_nom_metier" : lignes[numero_de_ligne][10] ,
                    "T0_chx_utilisateur_acteur" : lignes[numero_de_ligne][11] ,
                    "T0_chx_statut_acteur" : lignes[numero_de_ligne][12]
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