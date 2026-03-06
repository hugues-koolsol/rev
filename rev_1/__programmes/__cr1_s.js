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
import {Database} from "https://deno.land/x/sqlite3/mod.ts";
class __cr1{
    moi='__cr1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( __gi1 ){
        this.__gi1=__gi1;
        /* this.__gi1.ma_trace1( 'constructeur de __cr1' ); */
    }
    /*
      =============================================================================================================
    */
    async executer_job_cron( donnees_recues , donnees_retournees , options_generales ){
        /*
          on constitue la liste des projets 
        */
        let chemin_bdd_1='./__bases_de_donnees/bdd_1.sqlite';
        let __db1=null;
        try{
            __db1=new Database( chemin_bdd_1 , {"create" : false} );
        }catch(e){
            this.__gi1.ma_trace1( 'e=' , e , e.stack );
            this.__gi1.ma_trace1( 'Erreur ouverture ' + chemin_bdd_1 );
            return({"__xst" : __xer});
        }
        let criteres_316={};
        let tt316=await this.__gi1.sql_iii(
        /*sql_inclure_deb*/ /*#
        SELECT 
        `T0`.`chi_id_projet` , `T0`.`chp_nom_projet`
         FROM b1.tbl_projets T0
        WHERE `T0`.`chi_id_projet` > 2
        ;
        */
        /*sql_inclure_fin*/ 316 , criteres_316 , donnees_retournees , __db1 );
        /* this.__gi1.ma_trace1( 'tt316=' , tt316 ); */
        if(donnees_retournees._CA_ === 2){
            /* dans le cas du projet 2, on force un résultat */
            tt316.__xva.push( {"T0.chi_id_projet" : 1} );
        }else{
            if(tt316.__xst !== __xsu || tt316.__xva.length === 0){
                this.__gi1.__xsi[__xer].push( this.__gi1.nl2() );
                return({"__xst" : __xer});
            }
        }
        let t0=performance.now();
        console.log( 't0=' + t0 );
        let continuer=true;
        /* this.__gi1.ma_trace1( 'tt316.__xva=' , tt316.__xva ); */
        do{
            for(let i in tt316.__xva){
                try{
                    /*
                      base système du projet
                    */
                    let chemin_bdd_1='';
                    if(donnees_retournees._CA_ === 2){
                        chemin_bdd_1='../rev_2/__bases_de_donnees/bdd_' + tt316.__xva[i]['T0.chi_id_projet'] + '.sqlite';
                    }else{
                        chemin_bdd_1='../rev_1/__bases_de_donnees/bdd_' + tt316.__xva[i]['T0.chi_id_projet'] + '.sqlite';
                    }
                    /* this.__gi1.ma_trace1( 'chemin_bdd_1=' + chemin_bdd_1 ); */
                    let __dbn=null;
                    try{
                        __dbn=new Database( chemin_bdd_1 , {"create" : false} );
                        /* this.__gi1.ma_trace1('OK ouverture '+chemin_bdd_1); */
                    }catch(e){
                        console.log( 'e=' , e , e.stack );
                        this.__gi1.ma_trace1( 'Erreur ouverture ' + chemin_bdd_1 );
                        continue;
                    }
                    /* this.__gi1.ma_trace1('__dbn=',__dbn); */
                    let criteres_400={
                         /*
                          on ne prend que 50 travaux par projet pour ne pas bloquer les autres
                         */
                        "T0_chp_etat_travail" : 'en_file_d_attente' ,
                        "quantitee" : /* 5 */50
                    };
                    let tt400=await this.__gi1.sql_iii(
                    /*sql_inclure_deb*/ /*#
                    SELECT 
                    `T0`.`chi_id_travail` , `T0`.`chp_resume_travail` , `T0`.`cht_rev_travail` , `T0`.`chx_utilisateur_travail` , `T0`.`chd_dtc_travail` , 
                    `T0`.`chp_etat_travail` , `T0`.`chx_projet_travail` , `T1`.`chx_acces_utilisateur`
                     FROM b1.tbl_travaux T0
                     LEFT JOIN b1.tbl_utilisateurs T1 ON T1.chi_id_utilisateur = T0.chx_utilisateur_travail
                    
                    WHERE (`T0`.`chp_etat_travail` = :T0_chp_etat_travail) 
                    ORDER BY `T0`.`chi_id_travail` ASC  
                    LIMIT :quantitee OFFSET 0 
                    ;
                    */
                    /*sql_inclure_fin*/ 400 , criteres_400 , donnees_retournees , __dbn );
                    if(tt400.__xst !== __xsu){
                        this.__gi1.ma_trace1( 'erreur lecture des tâches ' );
                        return({"__xst" : __xer});
                    }
                    /* this.__gi1.ma_trace1('tt400.__xva.length='+tt400.__xva.length); */
                    for( let i=0 ; i < tt400.__xva.length ; i++ ){
                        let criteres_401_0={
                            "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                            "n_chp_etat_travail" : 'en_cours' ,
                            "n_cht_log_travail" : JSON.stringify( this.__gi1.__xsi , null , 2 ) ,
                            "n_chn_duree_travail" : 0
                        };
                        let tt401_0=await this.__gi1.sql_iii(
                        /*sql_inclure_deb*/ /*#
                        UPDATE b1.tbl_travaux SET 
                           `chp_etat_travail` = :n_chp_etat_travail , 
                           `cht_log_travail` = :n_cht_log_travail , 
                           `chn_duree_travail` = :n_chn_duree_travail
                        WHERE `chi_id_travail` = :c_chi_id_travail ;
                        */
                        /*sql_inclure_fin*/ 401 , criteres_401_0 , donnees_retournees , __dbn );
                        donnees_retournees.chi_id_utilisateur=1;
                        donnees_retournees.chi_id_projet=tt400.__xva[i]['T0.chx_projet_travail'];
                        donnees_retournees.chi_id_acces=tt400.__xva[i]['T1.chx_acces_utilisateur'];
                        options_generales.base_de_travail=tt400.__xva[i]['T0.chx_projet_travail'];
                        if(donnees_retournees._CA_ === 1 || donnees_retournees._CA_ === 2){
                            await this.__gi1.obtenir_les_sql( [] , 0 , donnees_recues , donnees_retournees , options_generales );
                            await this.__gi1.obtenir_les_genres( [] , 0 , donnees_recues , donnees_retournees , options_generales );
                        }
                        let cht_rev_travail=tt400.__xva[i]['T0.cht_rev_travail'];
                        /* this.__gi1.ma_trace1('cht_rev_travail='+cht_rev_travail); */
                        let obj_matrice=await this.__gi1.__rev1.rev_tcm( cht_rev_travail );
                        if(obj_matrice[__xst] !== __xsu){
                            donnees_retournees.__xsi[__xal].push( ' erreur de convertion en matrice [' + this.__gi1.nl2() + ']' );
                            donnees_retournees.__xst=__xer;
                            return({"__xst" : __xer});
                        }
                        let ret=null;
                        let heure_debut_travail=performance.now();
                        try{
                            /*
                              =============================================================
                              on exécute le travail ici
                              =============================================================
                            */
                            ret=await this.__gi1.appel_fonction( obj_matrice[__xva] , 1 , donnees_recues , donnees_retournees , options_generales );
                            /* this.__gi1.ma_trace1('ret=',ret,obj_matrice[__xva]); */
                            function sleep1( ms ){
                                return(new Promise( ( resolve ) => {
                                        setTimeout( resolve , ms );} ));
                            }
                            /*
                              simulation d'un travail long
                              await sleep1(15000)
                            */
                        }catch(e){
                            donnees_retournees.__xsi[__xal].push( ' erreur de appel_fonction [' + this.__gi1.nl2( e ) + ']' );
                            donnees_retournees.__xst=__xer;
                            ret={"__xst" : __xer};
                        }
                        if(ret.__xst !== __xsu){
                            let criteres_401={
                                "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                                "n_chp_etat_travail" : 'ko_termine' ,
                                "n_cht_log_travail" : JSON.stringify( this.__gi1.__xsi , null , 2 ) ,
                                "n_chn_duree_travail" : 0
                            };
                            let tt401=await this.__gi1.sql_iii(
                            /*sql_inclure_deb*/ /*#
                            UPDATE b1.tbl_travaux SET 
                               `chp_etat_travail` = :n_chp_etat_travail , 
                               `cht_log_travail` = :n_cht_log_travail , 
                               `chn_duree_travail` = :n_chn_duree_travail
                            WHERE `chi_id_travail` = :c_chi_id_travail ;
                            */
                            /*sql_inclure_fin*/ 401 , criteres_401 , donnees_retournees , __dbn );
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
                        let heure_fin_travail=performance.now();
                        let etat_travail='ok_termine';
                        let duree=parseInt( (heure_fin_travail - heure_debut_travail) * 1000 , 10 ) / 1000;
                        if(duree >= 3000){
                            /* un travail qui dure 3 secondes doit être signalé */
                            etat_travail='ok_mais_avertissement';
                        }
                        let criteres_401={
                             /*  */
                            "c_chi_id_travail" : tt400.__xva[i]['T0.chi_id_travail'] ,
                            "n_chp_etat_travail" : etat_travail ,
                            "n_cht_log_travail" : 'statut(OK),executer_job_cron(' + duree + ')' ,
                            "n_chn_duree_travail" : duree
                        };
                        let tt401=await this.__gi1.sql_iii(
                        /*sql_inclure_deb*/ /*#
                        UPDATE b1.tbl_travaux SET 
                           `chp_etat_travail` = :n_chp_etat_travail , 
                           `cht_log_travail` = :n_cht_log_travail , 
                           `chn_duree_travail` = :n_chn_duree_travail
                        WHERE `chi_id_travail` = :c_chi_id_travail ;
                        */
                        /*sql_inclure_fin*/ 401 , criteres_401 , donnees_retournees , __dbn );
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
                    __dbn.close();
                    let t1=performance.now();
                    let delta=t1 - t0;
                    if(delta < 55000){
                        /*
                          à priori, on continue
                        */
                        continuer=true;
                        /*
                          mais si on n'a rien eu à faire et que le traitement a duré moins de 100ms ...
                        */
                        if(tt400.__xva.length === 0 && delta < 100){
                            /*
                              ... alors on attend la prochaine vague
                            */
                            continuer=false;
                            this.__gi1.ma_trace1( 'on attend la prochaine vague' );
                        }else{
                            function sleep2( ms ){
                                return(new Promise( ( resolve ) => {
                                        setTimeout( resolve , ms );} ));
                            }
                            /*
                              on attend 3 secondes
                            */
                            await sleep2( 3000 );
                        }
                    }else{
                        continuer=false;
                    }
                }catch(e){
                    this.__gi1.ma_trace1( 'rrrraaaah' , e );
                }
            }
        }while(continuer === true);
        return({"__xst" : __xsu});
    }
    /*
      =============================================================================================================
    */
}
export{__cr1 as __cr1};