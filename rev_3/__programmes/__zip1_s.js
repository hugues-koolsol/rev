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
    __ig1=null;
    /*
      =============================================================================================================
    */
    constructor( __ig1 ){
        this.__ig1=__ig1;
    }
    /*
      // Import zip.js modules from CDN
      import {
      ZipWriter
      } from "https://deno.land/x/zipjs@2.7.33/index.js";
    */
    /*
      =============================================================================================================
    */
    async zipper_un_fichier_dans_un_repertoire( chemin_fichier_source , repertoire_en_sortie ){
        try{
            const sourceFilePath=chemin_fichier_source;
            /* "./largefile.dat"; // Change to your file */
            const zipFilePath=chemin_fichier_source + '.zip';
            /* "./archive.zip"; */
            /* Open the source file as a readable stream */
            const sourceFile=await Deno.open( sourceFilePath , {"read" : true} );
            /* Create a writable stream for the ZIP file */
            const zipFile=await Deno.open( zipFilePath , {"write" : true ,"create" : true ,"truncate" : true} );
            /* Create a ZipWriter that writes directly to the output file */
            const zipWriter=new ZipWriter( zipFile.writable );
            /* Get just the filename (fallback to "file" if null) */
            const fileNameInZip=sourceFilePath.split( "/" ).pop() || "file";
            /* Add the file to the ZIP using its stream */
            await zipWriter.add( fileNameInZip , sourceFile.readable );
            /* Finalize the ZIP (this will close the writable stream automatically) */
            try{
                await zipWriter.close();
            }catch(e){
                console.log( 'dans __zip1' + e.stack );
            }
            /* Close only the source file (output file is already closed by zipWriter) */
            try{
                sourceFile.close();
            }catch(e){
                /*
                  c'est normal d'avoir une erreur ici
                  console.log( 'dans __zip' + e.stack ) 
                */
            }
            this.__ig1.envoyer_un_message_a_l_utilisateur( {
                    "__xst" : __xal ,
                    "__xme" : '⏲️ fichier a été compressé/zip en arrière plan <div class="rev_bouton yy__0" data-rev_click="pm1(m1(n1(dossiers1),f1(page_modification1(chi_id_dossier(8)))))">rafraichir la page</div>'
                } );
            /* console.log(`✅ Created ZIP file: ${zipFilePath} (streaming mode)`); */
        }catch(err){
            /* console.error("❌ Error creating ZIP:", err.message); */
        }
        /*#
          // ici un exemple donné par microsoft copilote pour un répertoire 
          
          import { ZipWriter } from "https://deno.land/x/zipjs@2.7.33/index.js";
          
          //
          // * Recursively zips a folder (or list of files) in streaming mode.
          // * @param inputPath Path to a folder or file
          // * @param outputZip Path to the output ZIP file
          // 
          async function zipPath(inputPath: string, outputZip: string) {
            // Create writable stream for the ZIP file
            const zipFile = await Deno.open(outputZip, {
              write: true,
              create: true,
              truncate: true,
            });
          
            const zipWriter = new ZipWriter(zipFile.writable);
          
            // Helper: add a single file to the ZIP
            async function addFileToZip(filePath: string, relativePath: string) {
              const file = await Deno.open(filePath, { read: true });
              await zipWriter.add(relativePath, file.readable);
              file.close();
            }
          
            // Helper: recursively walk a directory
            async function walkDir(dirPath: string, basePath: string) {
              for await (const entry of Deno.readDir(dirPath)) {
                const fullPath = `${dirPath}/${entry.name}`;
                const relPath = `${basePath}${entry.name}`;
                if (entry.isFile) {
                  await addFileToZip(fullPath, relPath);
                } else if (entry.isDirectory) {
                  await walkDir(fullPath, `${relPath}/`);
                }
              }
            }
          
            // Check if input is file or directory
            const stat = await Deno.stat(inputPath);
            if (stat.isFile) {
              await addFileToZip(inputPath, inputPath.split("/").pop() || "file");
            } else if (stat.isDirectory) {
              await walkDir(inputPath, "");
            } else {
              throw new Error("Input path is neither a file nor a directory");
            }
          
            // Finalize ZIP (closes writable stream automatically)
            await zipWriter.close();
          
            console.log(`✅ Created ZIP: ${outputZip}`);
          }
          
          // Example 
          try {
            const inputPath = "./myfolder"; // Can be a folder or a single file
            const outputZip = "./archive.zip";
          
            await zipPath(inputPath, outputZip);
          } catch (err) {
            console.error("❌ Error:", err.message);
          }
        */
    }
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
            this.__ig1.envoyer_un_message_a_l_utilisateur( {
                    "__xst" : __xal ,
                    "__xme" : '⏲️ le dézip a été effectué en arrière plan <div class="rev_bouton yy__0" data-rev_click="pm1(m1(n1(dossiers1),f1(page_modification1(chi_id_dossier(8)))))">rafraichir la page</div>'
                } );
            /* console.log( "__zip1.js Extracted:" , entry.filename ); */
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