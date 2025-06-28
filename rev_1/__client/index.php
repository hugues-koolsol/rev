<?php
/* ==== ATTENTION, CE FICHIER EST GENERE ==== */

if(!ob_start("ob_gzhandler")){

    ob_start();

}


if(is_file("__version.txt")){

    $version=@file_get_contents("__version.txt");

}else{

    $version=date("Y_m_d_H_i_s");
}

echo <<<EOT
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>rev</title>
        <meta name="description" content="contenu de la description" />
        <style type="text/css" id="vv_style">
*,*::before,*::after{box-sizing:border-box;}
html{background:linear-gradient(to bottom, #ECEFF1 0%, #DBDEE0 100%);min-height:100%;}
body{
    font-size:16px;
    max-width:800px;
    border:0;
    color:#263238;
    font-family:verdana;
    margin:0 auto;
    overflow-y:scroll;
    padding-left:0;
    padding-right:0;
    padding-top:35px;
}
h1 {
    text-shadow: #ccc 1px 1px 1px;
    text-align: center;
    color: red;
}
        </style>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />        
        <script type="text/javascript">
//<![CDATA[
//<source_javascript_rev>
/*
  cette variable globale pointe sur le module interface chargé plus bas dans cette page
*/
var __gi1=null;
EOT ;
echo 'const __X_VERSION="' . $version . '";' . PHP_EOL ;
echo 'const __X_CLE_APPLICATION="rev_1";' . PHP_EOL ;
/* === transformation html incomplet en echo voir ci dessous pour la clé = "_fUrw5dppK4"*/
echo '
const __date_de_debut_des_traitements=performance.now();
function chargement_premier_script_termine(){
    if(__date_de_debut_des_traitements>=2000){
        console.log(\'__date_de_debut_des_traitements=\',__date_de_debut_des_traitements);
        let t=\'<h1>Veuillez patienter, chargement en cours</h1>\';
        t+=\'<div>le réseau est très lent et il va falloir être patient</div>\';
        t+=\'<div>le module principal a été chargé , ça va arriver !</div>\';
        try{
            document.getElementById(\'message_initial\').innerHTML=t;
        }catch{}
    }
}
setTimeout(()=>{
    try{
        document.getElementById(\'message_initial\').innerHTML=\'<h1>Veuillez patienter, chargement en cours</h1><div>le réseau est très lent et il va falloir être patient</div>\';
    }catch{}
},1500);
//</source_javascript_rev>
//]]>
</script>' ;
echo '
        <script type="module" src="_js/c_interface1.js?v=' . $version . '" onload="chargement_premier_script_termine()"></script>
' ;
echo '    </head>
    <body id="vv_body">
        <div id="message_initial" style="text-align:center;"></div>
    </body>
</html>' ;