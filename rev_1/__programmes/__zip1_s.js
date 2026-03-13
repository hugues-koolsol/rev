const __xer=0;
const __xsu=1;
const __xal=2;
const __xif=3;
const __xdv=4;
const __xst='__xst';
const __xva='__xva';
const __xsi='__xsi';
const __xac='__xac';
import {ZipReader , ZipWriter} from "https://deno.land/x/zipjs/index.js";
class __zip1{
    /*
      =============================================================================================================
    */
    moi='__zip1';
    __gi1=null;
    /*
      =============================================================================================================
    */
    constructor( mat , d , __gi1 ){
        this.__gi1=__gi1;
    }
    /*
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
      fonctions serveur
      =============================================================================================================
      =============================================================================================================
      =============================================================================================================
    */
    /*
      =============================================================================================================
    */
    async dezipper_un_fichier_dans_un_repertoire( chemin_fichier_zip , repertoire_en_sortie ){
        /* Convertit un Deno.FsFile en WritableStream */
        function fileWritableStream( file ){
            return(new WritableStream( {
                     write( chunk ){
                        return(file.write( chunk ));
                    }  ,
                    
                     close(){
                        file.close();
                    }  ,
                    
                     abort(){
                        file.close();
                    } 
                
                } ));
        }
        /* Ouvre le ZIP en streaming */
        const zipFile=await Deno.open( chemin_fichier_zip , {"read" : true} );
        const zipStream=zipFile.readable;
        /* Initialise zip.js avec un stream */
        let reader=null;
        try{
            reader=new ZipReader( zipStream );
        }catch(e){
            throw new Error( e.stack );
            return;
        }
        let entries=null;
        try{
            entries=await reader.getEntries();
        }catch(e){
            throw new Error( e.stack );
            return;
        }
        for(const entry of entries){
            const fullPath=repertoire_en_sortie + '/' + entry.filename;
            if(entry.directory){
                await Deno.mkdir( fullPath , {"recursive" : true} );
                continue;
            }
            /* Crée les dossiers si nécessaire */
            const dir=fullPath.substring( 0 , fullPath.lastIndexOf( "/" ) );
            await Deno.mkdir( dir , {"recursive" : true} );
            /* Ouvre le fichier de sortie */
            const outFile=await Deno.open( fullPath , {"write" : true ,"create" : true ,"truncate" : true} );
            /* Transforme le fichier en WritableStream */
            const writable=fileWritableStream( outFile );
            /* Extraction en streaming */
            await entry.getData?.( writable );
            console.log( "Extracted:" , entry.filename );
        }
        try{
            await reader.close();
        } catch {}
        try{
            zipFile.close();
        } catch {}
    }
}
export{__zip1 as __zip1};