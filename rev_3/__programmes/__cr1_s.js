/* SERVEUR */
const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
/*  */
class __cr1{
    moi='__cr1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
        this.__gi1.ma_trace1( 'constructeur de __cr1' );
    }
    /*
      =============================================================================================================
    */
    async executer_job_cron( donnees_recues , donnees_retournees , options_generales ){
        try{
            let __db1=await this.__gi1.ouvrir_bdd( 1 , donnees_retournees , options_generales );
            let criteres_400={"T0_chp_etat_travail" : 'en_file_d_attente' ,"quantitee" : 100};
            let tt400=await this.__gi1.sql_iii( 400 , criteres_400 , donnees_retournees , __db1 );
            if(tt400.__xst !== __xsu || tt400.__xva.length === 0){
                this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
                return({"__xst" : __xer});
            }
            for( let i=0 ; i < tt400.__xva.length ; i++ ){
                donnees_retournees.chi_id_utilisateur=tt400.__xva[i]['T0.chx_utilisateur_travail'];
                donnees_retournees.chi_id_projet=tt400.__xva[i]['T0.chx_projet_travail'];
                donnees_retournees.chi_id_acces=tt400.__xva[i]['T1.chx_acces_utilisateur'];
                if(donnees_retournees._CA_ === 1 || donnees_retournees._CA_ === 2){
                    await this.__gi1.obtenir_les_sql( [] , 0 , donnees_recues , donnees_retournees , options_generales );
                    await this.__gi1.obtenir_les_genres( [] , 0 , donnees_recues , donnees_retournees , options_generales );
                }
                let cht_rev_travail=tt400.__xva[i]['T0.cht_rev_travail'];
                let obj_matrice=await this.__gi1.__rev1.rev_tcm( cht_rev_travail );
                if(obj_matrice[__xst] !== __xsu){
                    donnees_retournees.__xsi[__xal].push( ' erreur de convertion en matrice [' + this.__gi1.nl2() + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                let ret=null;
                try{
                    ret=await this.__gi1.appel_fonction( obj_matrice[__xva] , 1 , donnees_recues , donnees_retournees , options_generales );
                }catch(e){
                    donnees_retournees.__xsi[__xal].push( ' erreur de appel_fonction [' + this.__gi1.nl2( e ) + ']' );
                    donnees_retournees.__xst=__xer;
                    ret={"__xst" : __xer};
                }
                if(ret.__xst !== __xsu){
                    let criteres_401={
                        "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                        "n_chp_etat_travail" : 'ko_termine' ,
                        "n_cht_log_travail" : JSON.stringify( this.__gi1.__xsi , null , 2 )
                    };
                    let tt401=await this.__gi1.sql_iii( 401 , criteres_401 , donnees_retournees , __db1 );
                    if(tt401[__xst] !== __xsu){
                        if(tt397['__xme'] !== ''){
                            this.__gi1.__xsi[__xer].push( tt397['__xme'] + ' [' + this.__gi1.nl2() );
                        }else{
                            this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                        }
                        donnees_retournees.__xst=__xer;
                        return({"__xst" : __xer});
                    }
                    donnees_retournees.__xsi[__xal].push( ' erreur de appel_fonction [' + this.__gi1.nl2() + ']' );
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
                let criteres_401={
                     /*  */
                    "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                    "n_chp_etat_travail" : 'ok_termine' ,
                    "n_cht_log_travail" : 'OK  executer_job_cron()'
                };
                let tt401=await this.__gi1.sql_iii( 401 , criteres_401 , donnees_retournees , __db1 );
                if(tt401[__xst] !== __xsu){
                    if(tt401['__xme'] !== ''){
                        this.__gi1.__xsi[__xer].push( tt401['__xme'] + ' [' + this.__gi1.nl2() );
                    }else{
                        this.__gi1.__xsi[__xer].push( 'erreur de modification [' + this.__gi1.nl2() );
                    }
                    donnees_retournees.__xst=__xer;
                    return({"__xst" : __xer});
                }
            }
        }catch(e){
            this.__gi1.ma_trace1( 'raaaah' , e );
        }
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{__cr1 as __cr1};