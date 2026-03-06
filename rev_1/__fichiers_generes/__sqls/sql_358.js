const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_358{
    /*
      =============================================================================================================
    */
    async sql( par , donnees_retournees ){
        let sql0=`
      INSERT  INTO \`tbl_revs\`(
         \`chp_provenance_rev\` , 
         \`chx_source_rev\` , 
         \`chp_id_rev\` , 
         \`chp_valeur_rev\` , 
         \`chp_type_rev\` , 
         \`chp_niveau_rev\` , 
         \`chp_quotee_rev\` , 
         \`chp_pos_premier_rev\` , 
         \`chp_pos_dernier_rev\` , 
         \`chp_parent_rev\` , 
         \`chp_nbr_enfants_rev\` , 
         \`chp_num_enfant_rev\` , 
         \`chp_profondeur_rev\` , 
         \`chp_pos_ouver_parenthese_rev\` , 
         \`chp_enfant_suivant_rev\` , 
         \`chp_commentaire_rev\`
      ) VALUES 
        `;
        let liste_des_valeurs='';
        try{
            for(let i=0;i < par.donnees.length;i++){
                if(liste_des_valeurs != ''){
                    liste_des_valeurs+=',';
                }
                liste_des_valeurs+='(';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_provenance_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chx_source_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_id_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_valeur_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_type_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_niveau_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_quotee_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_pos_premier_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_pos_dernier_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_parent_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_nbr_enfants_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_num_enfant_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_profondeur_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_pos_ouver_parenthese_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq1( par.donnees[i]['chp_enfant_suivant_rev'] ) + ''+',';
                liste_des_valeurs+='\r\n      ' + this.__gi1.__fnt1.sq4( par.donnees[i]['chp_commentaire_rev'] ) + '';
                liste_des_valeurs+=')';
            }
            let res=0;
            let nouvel_id=-1;
            if(liste_des_valeurs!==''){
                sql0+=liste_des_valeurs;
                /* this.__gi1.ma_trace1('sql_358=',sql0); */
                res=await this.__db1.exec(sql0);
                /* this.__gi1.ma_trace1('res=',res); */
                const sql1='SELECT last_insert_rowid() as nouvel_id; ';
                let statement1=await this.__db1.prepare( sql1 );
                let lignes = await statement1.values();
                await statement1.finalize();
                for(let numero_de_ligne in lignes){
                    nouvel_id=lignes[numero_de_ligne][0];
                }
            }

            return {
                "__xst"  : __xsu,
                "__xva"  : {},
                "sql0"    : sql0,
                "changements" : res,
                "nouvel_id" : nouvel_id
            };
        }catch(e){
            if(this.__gi1.__deverminage===1){
                this.__gi1.__xsi[__xdv].push(this.__gi1.nl2(e));
            }else if(this.__gi1.__deverminage===2){
                let a=RegExp(this.__gi1.repertoire_du_pgm_serveur,'g');
                this.__gi1.__xsi[__xdv].push(e.stack.replace( /\n/g , '\n' ).replace( a, '').replace(/\(file\:\/\//g,'').replace(/ at/g,'<br />')+'<hr />' );
            }

            let __xme=e.stack.indexOf('UNIQUE constraint')>=0?'cet élément existe déjà dans la base ':'erreur d\'insertion ';
            /* this.__gi1.ma_trace1('e=',e); */
            return {
                "__xst"  : __xer,
                "__xme"  : __xme,
                "__xva"  : {},
                "sql0"    : sql0,
            };
        }

    }
    /*
      =============================================================================================================
    */
    moi='sql_358';
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
export{sql_358 as sql_358};