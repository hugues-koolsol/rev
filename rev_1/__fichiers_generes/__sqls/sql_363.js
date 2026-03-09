const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_363{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=`
      INSERT  INTO \`tbl_bdds\`(
         \`chp_commentaire_basedd\` , 
         \`chp_fournisseur_basedd\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for( let i=0 ; i < par.donnees.length ; i++ ){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_commentaire_basedd'] ) + '' + ',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_fournisseur_basedd'] ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs !== ''){
                sql0+=liste_des_valeurs;
                /* this.__gi1.ma_trace1( 'sql_363=' + sql0 ); */
                res=await this.__db1.exec( sql0 );
                /* this.__gi1.ma_trace1('res=',res); */
                const sql1='SELECT last_insert_rowid() as nouvel_id; ';
                let statement1=await this.__db1.prepare( sql1 );
                let lignes=await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    nouvel_id=lignes[numero_de_ligne][0];
                }
            }
            return({"__xst" : __xsu ,"__xva" : {} ,"sql0" : sql0 ,"changements" : res ,"nouvel_id" : nouvel_id});
        }catch(e){
            return(this.__gi1.traite_erreur_sql( 363 , e , sql0 , donnees_retournees , {} ));
        }
    }
    /*
      =============================================================================================================
    */
    moi='sql_363';
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
export{sql_363 as sql_363};