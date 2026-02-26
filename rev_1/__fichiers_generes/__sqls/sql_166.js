const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xsi='__xsi';
class sql_166{
    /*
      =============================================================================================================
    */
    async sql(par,donnees_retournees){

        let sql0=`
          SELECT 
            \`T0\`.\`chp_nom_dossier\` , \`T0\`.\`chx_parent_dossier\` , \`T0\`.\`chi_id_dossier\`
                  FROM tbl_dossiers T0
            WHERE (\`T0\`.\`chi_id_dossier\` = '.sq1($par['T0_chi_id_dossier']).')
            ;
        `;
    /* this.__gi1.ma_trace1(' sql0 = ' + sql0 ); */
    try{
        $res0=$stmt0->execute();
        while(($tab0=$res0->fetchArray(SQLITE3_NUM))){
            $donnees0[]=$tab0;
        }
        return {
           "__xst"  => __xsu  ,
           "__xva"  => $donnees0   ,
           'sql0'    => $sql0          ,
        };
    }catch(Exception $e){
        return {
            "__xst" => __xer ,
            "sql0" => $sql0 ,
            "texte_requete" => 'la selection sur les éléments' ,
            "exception" => $e,
            };
        }
    /*
      =============================================================================================================
    */
    moi='sql_166';
    __gi1=null;
    __db1=null;
    /*
      =============================================================================================================
    */
    constructor(__gi1,__db1){
        this.__gi1=__gi1;
        this.__db1=__db1;
    }
}
export{sql_166 as sql_166};
