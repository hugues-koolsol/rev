const __xer=/* code erreur */0;
const __xsu=/* code succès */1;
const __xal=/* code alarme */2;
const __xif=/* code information */3;
const __xdv=/* code déverminage */4;
const __xst=/* statut */'__xst';
const __xva=/* valeurs */'__xva';
const __xsi=/* signaux */'__xsi';
const __xac=/* actions */'__xac';

import {format as formater_la_date} from "jsr:@std/datetime";

let repertoire_du_pgm_serveur=Deno.cwd().replace( /\\/g , '/' );
/* console.log('repertoire_du_pgm_serveur=',repertoire_du_pgm_serveur); */
let repertoire_racine_de_tous_les_projets=repertoire_du_pgm_serveur.substr( 0 , repertoire_du_pgm_serveur.lastIndexOf( '/' ) ) + '/';
console.log('repertoire_racine_de_tous_les_projets='+repertoire_racine_de_tous_les_projets)
const _CA_=parseInt( repertoire_du_pgm_serveur.substr( repertoire_du_pgm_serveur.lastIndexOf( '_' ) + 1 ) , 10 );
const __version='__j_20251231_000002_';

let maintenant=new Date();
let heure=maintenant.getHours();
heure=heure<10?'0'+heure:heure;

let minute=maintenant.getMinutes();
minute=minute<10?'0'+minute:minute;

let seconde=maintenant.getSeconds();
seconde=seconde<10?'0'+seconde:seconde;

console.log( '%c== CRON  CRON  CRON  CRON ='+heure+'_'+minute+'_'+seconde+'==============\n' , 'color:red;background-color:#00FFFF;' );


Deno.cron( "chaque_minute" , {
         /*  */
        "minute" : {"every" : 1}
    } , {
         /*  */
        "backoffSchedule" : [10000,30000,120000]
    } , async (p) => {

        let m__gi1=await import( './__programmes/__gi1_s.js?__version=' + __version );
        let m__cron1=await import( './__programmes/__cr1_s.js?__version=' + __version );
        maintenant=new Date();
        
        heure=maintenant.getHours();
        heure=heure<10?'0'+heure:heure;

        minute=maintenant.getMinutes();
        minute=minute<10?'0'+minute:minute;

        seconde=maintenant.getSeconds();
        seconde=seconde<10?'0'+seconde:seconde;
        
        let __gi1=new m__gi1['__gi1']( _CA_ , repertoire_du_pgm_serveur , '__programmes/' , repertoire_racine_de_tous_les_projets , 2 );
        let __cr1=new m__cron1['__cr1'](__gi1);
        console.log( '%c== '+heure+'_'+minute+'_'+seconde+'==============\n' , 'color:red;background-color:#FFFFFF;' );
        
        const date_heure_serveur=formater_la_date( new Date() , "yyyy-MM-dd HH:mm:ss.SSS" , {"timeZone" : 'Europe/Paris'} );
        const donnees_recues={};
        const donnees_retournees={
            "_CA_" : _CA_ ,
             /* statut __xer:0:erreur , à priori en erreur */
            "__xst" : 0 ,
            "date_heure_serveur" : date_heure_serveur ,
             /* valeurs */
            "__xva" : {} ,
             /* actions au format rev */
            "__xac" : '' ,
             /* liste des signaux __xer:0:erreur, __xsu:1:succès, __xal:2:alarme, __xif:3:info, __xdv:4:déverminage */
            //"__xsi" : {"__xer" : [] ,"__xsu" : [] ,"__xal" : [] ,"__xif" : [] ,"__xdv" : []} ,
            "__xsi" : {0 : [] ,1 : [] ,2 : [] ,3 : [] ,4 : []} ,
            /* 
              c'est l'utilisateur dev(1) qui lance le cron
              puis dans le cron, l'utilisateur sera ajusté
            */
            "chi_id_acces" : 1 ,
            "chi_id_utilisateur" : 1 ,
            "chi_id_projet" : 1,
            "__version" : __version
        };
        let options_generales={
            "repertoire_du_pgm_serveur" : repertoire_du_pgm_serveur ,
            "bdd_ouvertes" : {} ,
            "chemin_des_bdd" : './__bases_de_donnees/' ,
            "chemin_absolu_projet" : '',
            "repertoire_racine_de_tous_les_projets" : repertoire_racine_de_tous_les_projets,
            "mode_cron":true,
            "base_de_reference" : 1 ,
            "base_de_travail" : 1
        };
/*        
        let action1='pm1(m1(n1(__cr1),f1(executer_job_cron())))';
        let mat1=__gi1.__rev1.rev_tm(action1);
*/        
        
//        console.log('mat1=',mat1);
        try{
            /*
              faire pleins de trucs
            */
            let ret=await __cr1.executer_job_cron( donnees_recues , donnees_retournees , options_generales );
            if(ret.__xst!==__xsu){
                /* __gi1.ma_trace1('ret=',ret); */
                /* __gi1.ma_trace1('donnees_retournees=',donnees_retournees); */
            }
        }catch(e){
            __gi1.ma_trace1('erreur executer_job_cron e=',e);
        }
        for(let i in options_generales.bdd_ouvertes){
            try{
                await options_generales.bdd_ouvertes[i].base.close();
            } catch {}
        }
        
        __gi1=null;
        __cr1=null;
        
        //console.log( "Retrying task..." );
        //throw new Error( "Simulated failure" );
    } 
);