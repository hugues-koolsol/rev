<?php
class c_accueil1{
    private $sql0=null;
    /*
      =============================================================================================================
    */
    public function __construct(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_sql0.php');
        $this->sql0=new c_sql0(
            $donnees_retournees,
             /*matrice*/ $mat,
            $donnees_recues
        );
    }
    /*
      =============================================================================================================
    */
    function creer_un_message_client($type,$texte){
        $htm1=htmlentities(str_replace('\\','\\\\',$texte),ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401,'UTF-8');
        $message=htmlentities("interface1.creer_un_message( type(" . $type . ") , valeur( '" . $htm1 . "'))",ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401,'UTF-8');
        return $message;
    }
    /*
      =============================================================================================================
    */
    function creer_un_message_serveur($type,$texte){
        $htm1=htmlentities(str_replace('\\','\\\\',$texte),ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401,'UTF-8');
        $message=htmlentities("c_divers1.creer_un_message_exemple( type(" . $type . ") , valeur( '" . $htm1 . "'))",ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401,'UTF-8');
        return $message;
    }
    /*
      =============================================================================================================
    */
    function recupere_blocs_bidons($nom_page){
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_cookies1.php');
        $le_cookie=new c_cookies1();
        $valeur=$le_cookie->valeur();
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $valeur , true ) . '</pre>' ; exit(0);*/
        
        if($valeur && $valeur['aspect']['données_bidon'] === 0){

            return;

        }

        $nombre_de_paragraphes_par_bloc=4;
        $txt1='';
        $txt='';
        $txt1 .= '<a href="#vv_body">haut</a>' . PHP_EOL;
        $txt1 .= '<a href="#vv_p1_' . $nom_page . '">p1 ' . $nom_page . '</a>' . PHP_EOL;
        $txt1 .= '<a href="#vv_p2_' . $nom_page . '">p2 ' . $nom_page . '</a>' . PHP_EOL;
        $txt1 .= '<a href="#vv_p3_' . $nom_page . '">p3 ' . $nom_page . '</a>' . PHP_EOL;
        $txt1 .= '<a href="#vv_p4_' . $nom_page . '">p4 ' . $nom_page . '</a>' . PHP_EOL;
        $txt1 .= '<a href="#vv_p5_' . $nom_page . '">p5 ' . $nom_page . '</a>' . PHP_EOL;
        $txt .= '<h2 id="vv_p1_' . $nom_page . '">p1</h2>' . PHP_EOL;
        $txt .= $txt1;
        for( $i=0 ; $i < $nombre_de_paragraphes_par_bloc ; $i++ ){
            
            $txt .= '<p>' . PHP_EOL;
            $txt .= '    <b>données bidon</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at posuere lacus, vel tempus ligula. Proin ac pretium lectus. Aliquam at porttitor urna. Nullam mattis suscipit eros, ut mattis tortor iaculis ac. Cras egestas justo enim, id vehicula massa efficitur et. Integer dolor leo, ornare sed lacus luctus, porttitor suscipit tellus. Donec consequat diam ligula, condimentum elementum orci porta at. Donec at turpis massa. Pellentesque id venenatis velit. Aliquam consequat ex orci, vitae pulvinar lorem eleifend in. Mauris ante lorem, tempor sed sagittis mattis, feugiat eget dolor. Sed ultrices pharetra eros eget lacinia.' . PHP_EOL;
            $txt .= '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at posuere lacus, vel tempus ligula. Proin ac pretium lectus. Aliquam at porttitor urna. Nullam mattis suscipit eros, ut mattis tortor iaculis ac. Cras egestas justo enim, id vehicula massa efficitur et. Integer dolor leo, ornare sed lacus luctus, porttitor suscipit tellus. Donec consequat diam ligula, condimentum elementum orci porta at. Donec at turpis massa. Pellentesque id venenatis velit. Aliquam consequat ex orci, vitae pulvinar lorem eleifend in. Mauris ante lorem, tempor sed sagittis mattis, feugiat eget dolor. Sed ultrices pharetra eros eget lacinia.' . PHP_EOL;
            $txt .= '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at posuere lacus, vel tempus ligula. Proin ac pretium lectus. Aliquam at porttitor urna. Nullam mattis suscipit eros, ut mattis tortor iaculis ac. Cras egestas justo enim, id vehicula massa efficitur et. Integer dolor leo, ornare sed lacus luctus, porttitor suscipit tellus. Donec consequat diam ligula, condimentum elementum orci porta at. Donec at turpis massa. Pellentesque id venenatis velit. Aliquam consequat ex orci, vitae pulvinar lorem eleifend in. Mauris ante lorem, tempor sed sagittis mattis, feugiat eget dolor. Sed ultrices pharetra eros eget lacinia.' . PHP_EOL;
            $txt .= '</p>' . PHP_EOL;
        }
        $txt .= '<h2 id="vv_p2_' . $nom_page . '">p2</h2>' . PHP_EOL;
        $txt .= $txt1;
        for( $i=0 ; $i < $nombre_de_paragraphes_par_bloc ; $i++ ){
            
            $txt .= '<p>' . PHP_EOL;
            $txt .= '    <b>données bidon</b> In hac habitasse platea dictumst. Pellentesque ultrices rhoncus dolor sodales blandit. Nunc ut laoreet ante, quis dignissim nibh. Sed justo ligula, pulvinar a est ac, feugiat malesuada ante. Etiam sed neque dapibus, iaculis lacus rhoncus, gravida nibh. Fusce tincidunt congue gravida. Pellentesque porttitor mollis ex, eu auctor tortor tempor in. Nunc nec nisl convallis, viverra libero at, aliquet lectus. Nunc lacinia vel nisl nec ultrices. Nullam aliquet, turpis nec tempor vulputate, purus libero blandit purus, at egestas nibh metus iaculis eros. Ut dapibus ex non dignissim venenatis. Donec efficitur nisi mi, eu vehicula diam tristique ut. Vivamus tincidunt sodales finibus. Donec id tortor tempus tellus volutpat commodo. Quisque sit amet elit at velit aliquam semper eu quis tortor. Nunc maximus, tortor vitae auctor varius, elit tellus condimentum diam, id volutpat risus elit eu libero.' . PHP_EOL;
            $txt .= '    In hac habitasse platea dictumst. Pellentesque ultrices rhoncus dolor sodales blandit. Nunc ut laoreet ante, quis dignissim nibh. Sed justo ligula, pulvinar a est ac, feugiat malesuada ante. Etiam sed neque dapibus, iaculis lacus rhoncus, gravida nibh. Fusce tincidunt congue gravida. Pellentesque porttitor mollis ex, eu auctor tortor tempor in. Nunc nec nisl convallis, viverra libero at, aliquet lectus. Nunc lacinia vel nisl nec ultrices. Nullam aliquet, turpis nec tempor vulputate, purus libero blandit purus, at egestas nibh metus iaculis eros. Ut dapibus ex non dignissim venenatis. Donec efficitur nisi mi, eu vehicula diam tristique ut. Vivamus tincidunt sodales finibus. Donec id tortor tempus tellus volutpat commodo. Quisque sit amet elit at velit aliquam semper eu quis tortor. Nunc maximus, tortor vitae auctor varius, elit tellus condimentum diam, id volutpat risus elit eu libero.' . PHP_EOL;
            $txt .= '    In hac habitasse platea dictumst. Pellentesque ultrices rhoncus dolor sodales blandit. Nunc ut laoreet ante, quis dignissim nibh. Sed justo ligula, pulvinar a est ac, feugiat malesuada ante. Etiam sed neque dapibus, iaculis lacus rhoncus, gravida nibh. Fusce tincidunt congue gravida. Pellentesque porttitor mollis ex, eu auctor tortor tempor in. Nunc nec nisl convallis, viverra libero at, aliquet lectus. Nunc lacinia vel nisl nec ultrices. Nullam aliquet, turpis nec tempor vulputate, purus libero blandit purus, at egestas nibh metus iaculis eros. Ut dapibus ex non dignissim venenatis. Donec efficitur nisi mi, eu vehicula diam tristique ut. Vivamus tincidunt sodales finibus. Donec id tortor tempus tellus volutpat commodo. Quisque sit amet elit at velit aliquam semper eu quis tortor. Nunc maximus, tortor vitae auctor varius, elit tellus condimentum diam, id volutpat risus elit eu libero.' . PHP_EOL;
            $txt .= '</p>' . PHP_EOL;
        }
        $txt .= '<h2 id="vv_p3_' . $nom_page . '">p3</h2>' . PHP_EOL;
        $txt .= $txt1;
        for( $i=0 ; $i < $nombre_de_paragraphes_par_bloc ; $i++ ){
            
            $txt .= '<p>' . PHP_EOL;
            $txt .= '    <b>données bidon</b> Nunc et ex ut velit faucibus fermentum. Maecenas tincidunt enim sagittis purus semper, vel bibendum diam interdum. Phasellus egestas odio vel nibh scelerisque, in auctor turpis vestibulum. Fusce eget eros leo. Curabitur venenatis neque id libero condimentum, vitae porttitor ex feugiat. Donec id faucibus orci. Quisque convallis tellus vel quam aliquam, non vulputate augue posuere. Integer scelerisque eleifend consequat. Maecenas nec leo risus. Etiam sit amet tempus felis. Ut id nunc libero. Fusce libero est, eleifend laoreet iaculis eget, maximus a massa. Integer egestas ex at urna elementum pulvinar.' . PHP_EOL;
            $txt .= '    Nunc et ex ut velit faucibus fermentum. Maecenas tincidunt enim sagittis purus semper, vel bibendum diam interdum. Phasellus egestas odio vel nibh scelerisque, in auctor turpis vestibulum. Fusce eget eros leo. Curabitur venenatis neque id libero condimentum, vitae porttitor ex feugiat. Donec id faucibus orci. Quisque convallis tellus vel quam aliquam, non vulputate augue posuere. Integer scelerisque eleifend consequat. Maecenas nec leo risus. Etiam sit amet tempus felis. Ut id nunc libero. Fusce libero est, eleifend laoreet iaculis eget, maximus a massa. Integer egestas ex at urna elementum pulvinar.' . PHP_EOL;
            $txt .= '    Nunc et ex ut velit faucibus fermentum. Maecenas tincidunt enim sagittis purus semper, vel bibendum diam interdum. Phasellus egestas odio vel nibh scelerisque, in auctor turpis vestibulum. Fusce eget eros leo. Curabitur venenatis neque id libero condimentum, vitae porttitor ex feugiat. Donec id faucibus orci. Quisque convallis tellus vel quam aliquam, non vulputate augue posuere. Integer scelerisque eleifend consequat. Maecenas nec leo risus. Etiam sit amet tempus felis. Ut id nunc libero. Fusce libero est, eleifend laoreet iaculis eget, maximus a massa. Integer egestas ex at urna elementum pulvinar.' . PHP_EOL;
            $txt .= '</p>' . PHP_EOL;
        }
        $txt .= '<h2 id="vv_p4_' . $nom_page . '">p4</h2>' . PHP_EOL;
        $txt .= $txt1;
        $txt .= '<p>' . PHP_EOL;
        $txt .= '    <b>données bidon</b> Donec vulputate pharetra maximus. Nunc semper faucibus ultrices. Nunc nec lacinia ipsum. Curabitur tempor, metus ut finibus suscipit, sapien diam cursus erat, eu vestibulum ante felis eu sem. Nunc euismod, ante et maximus dapibus, est odio convallis urna, sed porttitor erat augue at ante. Nam placerat maximus dui quis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus quis turpis quis nunc condimentum viverra. Aenean mauris sapien, congue ut sollicitudin vitae, blandit at turpis. Curabitur commodo risus quis iaculis ultrices. Donec a lorem quis nisi varius dapibus. Vivamus nec tempus dolor. Duis condimentum felis elementum velit bibendum aliquet. Nam malesuada, turpis id tempus faucibus, magna dolor elementum mauris, pellentesque suscipit arcu libero sed leo. In vulputate augue eu libero finibus aliquam. Vestibulum et scelerisque tortor, vel efficitur purus.' . PHP_EOL;
        $txt .= '    Donec vulputate pharetra maximus. Nunc semper faucibus ultrices. Nunc nec lacinia ipsum. Curabitur tempor, metus ut finibus suscipit, sapien diam cursus erat, eu vestibulum ante felis eu sem. Nunc euismod, ante et maximus dapibus, est odio convallis urna, sed porttitor erat augue at ante. Nam placerat maximus dui quis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus quis turpis quis nunc condimentum viverra. Aenean mauris sapien, congue ut sollicitudin vitae, blandit at turpis. Curabitur commodo risus quis iaculis ultrices. Donec a lorem quis nisi varius dapibus. Vivamus nec tempus dolor. Duis condimentum felis elementum velit bibendum aliquet. Nam malesuada, turpis id tempus faucibus, magna dolor elementum mauris, pellentesque suscipit arcu libero sed leo. In vulputate augue eu libero finibus aliquam. Vestibulum et scelerisque tortor, vel efficitur purus.' . PHP_EOL;
        $txt .= '    Donec vulputate pharetra maximus. Nunc semper faucibus ultrices. Nunc nec lacinia ipsum. Curabitur tempor, metus ut finibus suscipit, sapien diam cursus erat, eu vestibulum ante felis eu sem. Nunc euismod, ante et maximus dapibus, est odio convallis urna, sed porttitor erat augue at ante. Nam placerat maximus dui quis fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus quis turpis quis nunc condimentum viverra. Aenean mauris sapien, congue ut sollicitudin vitae, blandit at turpis. Curabitur commodo risus quis iaculis ultrices. Donec a lorem quis nisi varius dapibus. Vivamus nec tempus dolor. Duis condimentum felis elementum velit bibendum aliquet. Nam malesuada, turpis id tempus faucibus, magna dolor elementum mauris, pellentesque suscipit arcu libero sed leo. In vulputate augue eu libero finibus aliquam. Vestibulum et scelerisque tortor, vel efficitur purus.' . PHP_EOL;
        $txt .= '</p>' . PHP_EOL;
        $txt .= '<h2 id="vv_p5_' . $nom_page . '">p5</h2>' . PHP_EOL;
        $txt .= $txt1;
        $txt .= '<p>' . PHP_EOL;
        $txt .= '    <b>données bidon</b> Nulla sit amet suscipit dolor, in congue lorem. Maecenas fringilla efficitur vestibulum. Aenean fringilla, tellus sed tincidunt bibendum, sem ante interdum nibh, nec sagittis elit purus porttitor ipsum. Ut lectus nisi, mollis ut mauris non, tincidunt dictum risus. Fusce in magna neque. Maecenas sapien enim, iaculis at semper vel, condimentum nec turpis. Integer vitae auctor eros.' . PHP_EOL;
        $txt .= '    Nulla sit amet suscipit dolor, in congue lorem. Maecenas fringilla efficitur vestibulum. Aenean fringilla, tellus sed tincidunt bibendum, sem ante interdum nibh, nec sagittis elit purus porttitor ipsum. Ut lectus nisi, mollis ut mauris non, tincidunt dictum risus. Fusce in magna neque. Maecenas sapien enim, iaculis at semper vel, condimentum nec turpis. Integer vitae auctor eros.' . PHP_EOL;
        $txt .= '    Nulla sit amet suscipit dolor, in congue lorem. Maecenas fringilla efficitur vestibulum. Aenean fringilla, tellus sed tincidunt bibendum, sem ante interdum nibh, nec sagittis elit purus porttitor ipsum. Ut lectus nisi, mollis ut mauris non, tincidunt dictum risus. Fusce in magna neque. Maecenas sapien enim, iaculis at semper vel, condimentum nec turpis. Integer vitae auctor eros.' . PHP_EOL;
        $txt .= '</p>' . PHP_EOL;
        $txt .= $txt1;
        $txt .= '' . PHP_EOL;
        return $txt;
    }
    /*
      =============================================================================================================
    */
    function recupere_la_page_d_accueil(&$donnees_retournees,/*matrice*/&$mat,&$donnees_recues){
        $txt='<h1 style="color:red;">accueil</h1>';
        $txt .= <<<EOT
    <div class="groupe_de_boites">
        <div class="hug_bouton boite_100_100_el" data-hug_click="c_accueil1.recupere_la_page_d_accueil()" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="6 8  49 59" style="transform:scale(0.95, 0.95) translate(0px, 2px);"><path d=" M 8 29 L 31 6 L 54 29 V 33 H 51 V 58  H 11 V 33 H 8 V 29" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.01;"></path><path d="M 17 57 H 11 c 0 -2 1 -4 2 -2 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:lawngreen;fill:transparent;stroke-width:4;"></path><rect x="20" y="27" width="7" height="7" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:0.1;"></rect><rect x="34" y="27" width="7" height="7" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:0.1;"></rect><rect x="34" y="41" width="7" height="7" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:0.1;"></rect><rect x="20" y="41" width="7" height="16" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:red;stroke-width:0.1;"></rect><path d=" M 11 30 l 20 -20 l 20 20 " stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:5;"></path><path d="M 30 57 H 50 c 0 -2 -1 -4 -2 -2 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:lawngreen;fill:transparent;stroke-width:4;"></path></svg>
        </div>
        <div class="hug_bouton boite_100_100_el" data-hug_click="interface1.affiche_ou_masque_les_messages()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 10  75 62" style="transform:scale(1,1)translate(0px, 0px)"><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d=" M 14 15 H 67 C 70 15 72 17 72 20 V 51 C 72 54 70 56 67 56 H 30 L 18 69  V 56 H 14 C 11 56 9 54 9 51 V 20 C 9 17 11 15 14 15" style="stroke:red;fill:white;stroke-width:3;"></path><circle cx="56" cy="36" r="3" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" transform="" style="stroke:red;fill:red;stroke-width:3;"></circle><circle cx="41" cy="36" r="3" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" transform="" style="stroke:red;fill:red;stroke-width:3;"></circle><circle cx="26" cy="36" r="3" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" transform="" style="stroke:red;fill:red;stroke-width:3;"></circle></svg>
        </div>
        <div class="hug_bouton boite_100_100_el" data-hug_click="c_aides1.recupere_la_page_d_aide()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-106 -107  214 201" style="transform:scale(1,1)translate(0px, 0px)"><path d=" M 100 0 C 100 0 79.7763 5.9784 79.7763 5.9784 C 79.7763 5.9784 77.9942 17.8017 77.9942 17.8017 C 77.9942 17.8017 95.5573 29.4755 95.5573 29.4755 C 95.5573 29.4755 90.0969 43.3884 90.0969 43.3884 C 90.0969 43.3884 69.282 40 69.282 40 C 69.282 40 62.5465 49.8792 62.5465 49.8792 C 62.5465 49.8792 73.3052 68.0173 73.3052 68.0173 C 73.3052 68.0173 62.349 78.1831 62.349 78.1831 C 62.349 78.1831 45.0656 66.0991 45.0656 66.0991 C 45.0656 66.0991 34.7107 72.0775 34.7107 72.0775 L 32.8729 50.3378  A 60.1854 60.4115 0 1 0 -25.1945 54.3907 L -23.5792 76.4455 C -26.0652 75.4525 -34.7107 72.0775 -34.7107 72.0775 C -34.7107 72.0775 -50 86.6025 -50 86.6025 C -50 86.6025 -62.349 78.1831 -62.349 78.1831 C -62.349 78.1831 -54.4138 58.6441 -54.4138 58.6441 C -54.4138 58.6441 -62.5465 49.8792 -62.5465 49.8792 C -62.5465 49.8792 -82.6239 56.332 -82.6239 56.332 C -82.6239 56.332 -90.0969 43.3884 -90.0969 43.3884 C -90.0969 43.3884 -74.4699 29.2273 -74.4699 29.2273 C -74.4699 29.2273 -77.9942 17.8017 -77.9942 17.8017 C -77.9942 17.8017 -98.8831 14.9042 -98.8831 14.9042 C -98.8831 14.9042 -100 0 -100 0 C -100 0 -79.7763 -5.9784 -79.7763 -5.9784 C -79.7763 -5.9784 -77.9942 -17.8017 -77.9942 -17.8017 C -77.9942 -17.8017 -95.5573 -29.4755 -95.5573 -29.4755 C -95.5573 -29.4755 -90.0969 -43.3884 -90.0969 -43.3884 C -90.0969 -43.3884 -69.282 -40 -69.282 -40 C -69.282 -40 -62.5465 -49.8792 -62.5465 -49.8792 C -62.5465 -49.8792 -73.3052 -68.0173 -73.3052 -68.0173 C -73.3052 -68.0173 -62.349 -78.1831 -62.349 -78.1831 C -62.349 -78.1831 -45.0656 -66.0991 -45.0656 -66.0991 C -45.0656 -66.0991 -34.7107 -72.0775 -34.7107 -72.0775 C -34.7107 -72.0775 -36.5341 -93.0874 -36.5341 -93.0874 C -36.5341 -93.0874 -22.2521 -97.4928 -22.2521 -97.4928 C -22.2521 -97.4928 -11.9234 -79.1065 -11.9234 -79.1065 C -11.9234 -79.1065 0 -80 0 -80 C 0 -80 7.473 -99.7204 7.473 -99.7204 C 7.473 -99.7204 22.2521 -97.4928 22.2521 -97.4928 C 22.2521 -97.4928 23.5804 -76.4458 23.5804 -76.4458 C 23.5804 -76.4458 34.7107 -72.0775 34.7107 -72.0775 C 34.7107 -72.0775 50 -86.6025 50 -86.6025 C 50 -86.6025 62.349 -78.1831 62.349 -78.1831 C 62.349 -78.1831 54.4138 -58.6441 54.4138 -58.6441 C 54.4138 -58.6441 62.5465 -49.8792 62.5465 -49.8792 C 62.5465 -49.8792 82.6239 -56.332 82.6239 -56.332 C 82.6239 -56.332 90.0969 -43.3884 90.0969 -43.3884 C 90.0969 -43.3884 74.4699 -29.2273 74.4699 -29.2273 C 74.4699 -29.2273 77.9942 -17.8017 77.9942 -17.8017 C 77.9942 -17.8017 98.8831 -14.9042 98.8831 -14.9042 C 98.8831 -14.9042 100 0 100 0 C 100 0 100 0 100 0" style="stroke-width:1;stroke:blue;fill:blue;" transform="rotate(4.3643 0 0 )"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M -19.9035 0.0665 H -47.5914 C -47.5803 -34.716 -29.2323 -48.6369 0.1918 -48.597 C 36.6062 -48.6442 45.8185 -25.4943 45.5704 -0.0489 C 45.13423 14.3612 35.214 28.2112 19.5487 43.9057 C 10.4376 51.5727 10.8315 58.2471 10.8315 61.997  H -12.0032 C -12.1844 60.6516 -11.786 47.7718 -8.6172 42.8653 C -1.4916 31.7469 17.8786 11.5852 17.915 -0.0303 C 18.6014 -16.3637 12.0753 -24.5501 -0.7396 -23.9992 C -13.9158 -23.9741 -20.6076 -15.9549 -20.0506 -0.1851 M -12.881 74.4678 H 11.4458 L 7.5960 93.5628 H -7.4803 Z" style="stroke:forestgreen;fill:forestgreen;stroke-width:1;"></path></svg>
        </div>
        <div class="hug_bouton boite_100_100_el" data-hug_click="c_connexion1.recupere_la_page_de_connexion()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="19 4  130 142"style="transform:scale(1,1)translate(0px, 0px)"><path d=" M 73 80 A 34 35 48 1 1 92 60 l 46 46 l 0 21 l -22 0 l 0 -12 l -11 0 l 0 -11 l -11 0 l 0 -11 l -8 0 l -13 -13 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:gold;stroke-width:4;"></path><circle cx="51" cy="38" r="8" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" transform="" style="stroke:red;fill:black;stroke-width:4;"></circle></svg>
        </div>
        
    </div>
    
EOT;
        $txt .= '<div style="border:1px red solid;margin:10px 0px;padding:10px;display:flex;justify-content: space-evenly;flex-wrap: wrap;">';
        $txt .= '    <span class="hug_bouton yy__x_signaux_0" data-hug_click="' . $this->creer_un_message_serveur(__xer,"👎 c'est un message d'erreur envoyé au serveur et retourné par le serveur") . '"> 👎 erreur </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_1" data-hug_click="' . $this->creer_un_message_serveur(__xsu,"👍 c'est un message de succés  envoyé au serveur et retourné par le serveur") . '"> 👍 succés </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_2" data-hug_click="' . $this->creer_un_message_serveur(__xal,"⚠ c'est un message de d'alerte envoyé au serveur et retourné par le serveur") . '"> ⚠ alerte </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_3" data-hug_click="' . $this->creer_un_message_serveur(__xif,"ℹ️ c'est un message d'information envoyé au serveur et retourné par le serveur") . '"> ℹ️ information </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_4" data-hug_click="' . $this->creer_un_message_serveur(__xdv,"🐛 c'est un message de déverminage envoyé au serveur et retourné par le serveur") . '"> 🐛 debug </span>';
        $txt .= '</div>';
        $txt .= '<div style="border:1px red solid;margin:10px 0px;padding:10px;display:flex;justify-content: space-evenly;flex-wrap: wrap;">';
        $txt .= '    <span class="hug_bouton yy__x_signaux_0" data-hug_click="' . $this->creer_un_message_client(__xer,"👎 c'est un message d'erreur envoyé par le client") . '"> 👎 erreur </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_1" data-hug_click="' . $this->creer_un_message_client(__xsu,"👍 c'est un message de succès envoyé par le client") . '"> 👍 succés </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_2" data-hug_click="' . $this->creer_un_message_client(__xal,"⚠ c'est un message d'alerte envoyé par le client") . '"> ⚠ alerte </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_3" data-hug_click="' . $this->creer_un_message_client(__xif,"ℹ️ c'est un message d'information envoyé par le client") . '"> ℹ️ information </span>';
        $txt .= '    <span class="hug_bouton yy__x_signaux_4" data-hug_click="' . $this->creer_un_message_client(__xdv,"🐛 c'est un message de déverminage envoyé par le client") . '"> 🐛 debug </span>';
        $txt .= '</div>';
        
        if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_utilisateur_initial'])){

            $txt .= '<div style="border:1px red solid;text-align:center;margin-top:2em;padding:5px;">';
            $txt .= ' <h2>Un compteur session php</h2>';
            $txt .= ' <p style="text-align:center;">il est remis à zéro à chaque déconnexion</p>';
            $txt .= ' <p style="text-align:center;">';
            
            if(isset($_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1'])){

                $txt .= ' <span id="vv_compteur_session_php1" style="display:inline-block;min-width:2em;text-align:center;">' . $_SESSION[__X_CLE_APPLICATION][__xva]['compteur_session_php1'] . '</span>';

            }else{

                $txt .= ' <span id="vv_compteur_session_php1" style="display:inline-block;min-width:2em;text-align:center;">0</span>';
            }

            $txt .= ' </p>';
            $txt .= ' <span class="hug_bouton" data-hug_click="c_divers1.ajoute_a_valeur_session(variable(compteur_session_php1),valeur(-1))">👎-1</span>';
            $txt .= ' <span class="hug_bouton" data-hug_click="c_divers1.ajoute_a_valeur_session(variable(compteur_session_php1),valeur(1))">+1👍</span>';
            $txt .= '</div>';

        }

        $txt .= '<div class="affichage_display_none_conditionne_par_socket" style="border:1px red solid;text-align:center;margin-top:2em;padding:5px;display:none;">';
        /* */
        $txt .= '    <h2>Un compteur socket</h2>';
        $txt .= ' <p style="text-align:center;">';
        $txt .= '    <span id="vv_compteur_socket1" style="display:inline-block;min-width:2em;text-align:center;"></span>';
        $txt .= ' </p>';
        $txt .= '    <span id="vv_socket_plus_1" class="hug_bouton" data-hug_click="interface1.ajoute_un_au_compteur_socket()">+1<span style="color:red;">❤</span></span>';
        $txt .= '</div>';
        $txt .= $this->recupere_blocs_bidons('accueil');
        $donnees_retournees[__xst]=__xsu;
        $donnees_retournees[__x_page] .= $txt;
    }
    /*
      =============================================================================================================
      la page initiale est le conteneur principal plus du contenu
      =============================================================================================================
    */
    function recupere_de_la_page_initiale(&$donnees_retournees,&$mat,&$donnees_recues){
        /* $donnees_retournees[__x_signaux][__xdv][]=__LINE__.'<pre>'.var_export($donnees_recues , true).'</pre>';*/
        $sans_menus1=false;
        
        if(isset($donnees_recues['__xva'])
           && isset($donnees_recues['__xva']['href'])
           && strpos($donnees_recues['__xva']['href'],'sans_menus1()') !== false
        ){

            $sans_menus1=true;

        }

        /* comme l'action [___x_action] sera peut être changée plus bas, on ajoute "en_cours_d_initialisation" */
        $donnees_retournees[__xva]['en_cours_d_initialisation']=true;
        require_once(REPERTOIRE_DES_CLASSES_PHP . DIRECTORY_SEPARATOR . 'c_cookies1.php');
        $le_cookie=new c_cookies1();
        $tab=$le_cookie->enregistrer($donnees_retournees,$mat);
        /* echo __FILE__ . ' ' . __LINE__ . ' __LINE__ = <pre>' . var_export( $tab , true ) . '</pre>' ; exit(0);*/
        
        if($tab['nouveau_cookie'] === true){

            $donnees_retournees[__x_signaux][__xif][]='😊 Bienvenue !';

        }else{

            
            if(time() - $tab['ancienne_date'] > 3600 * 24){

                /* si on ne s'est pas connecté depuis plus de 24h */
                $donnees_retournees[__x_signaux][__xif][]='😀 Content de vous revoir !';

            }

        }

        
        if($sans_menus1 === false){

            $donnees_retournees[__x_page] .= <<<EOT
                <!-- page_initiale -->
                <div id="vv_nav">
                    <div id="vv_nav_gauche">
                        <div data-id_menu="1" class="hug_bouton hug_bouton_carre hug_bouton_actif" style="display:inline-block;" data-hug_click="c_accueil1.recupere_la_page_d_accueil(),indice_menu(1)" >
                            <svg viewBox="6 8  49 59" style="transform:scale(0.95, 0.95) translate(0px, 0px);"><path d=" M 8 29 L 31 6 L 54 29 V 33 H 51 V 58  H 11 V 33 H 8 V 29" stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:white;stroke-width:0.01;"></path><path d="M 17 57 H 11 c 0 -2 1 -4 2 -2 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:lawngreen;fill:transparent;stroke-width:4;"></path><rect x="20" y="27" width="7" height="7" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:0.1;"></rect><rect x="34" y="27" width="7" height="7" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:0.1;"></rect><rect x="34" y="41" width="7" height="7" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:deepskyblue;stroke-width:0.1;"></rect><rect x="20" y="41" width="7" height="16" stroke="rgb(0, 0, 0)" stroke-width="0.1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:rgb(0, 0, 0);fill:red;stroke-width:0.1;"></rect><path d=" M 11 30 l 20 -20 l 20 20 " stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:5;"></path><path d="M 30 57 H 50 c 0 -2 -1 -4 -2 -2 " stroke="rgb(0, 0, 0)" stroke-width="5" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:lawngreen;fill:transparent;stroke-width:4;"></path></svg>
                        </div>            
                        <div id="vv_bouton_messages" class="hug_bouton hug_bouton_carre" data-hug_click="interface1.affiche_ou_masque_les_messages()" title="affiche ou masque les messages">
                            <svg viewBox="4 10  75 62" style="transform:translate(0px, 2px)"><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="miter" stroke-linecap="square" d=" M 14 15 H 67 C 70 15 72 17 72 20 V 51 C 72 54 70 56 67 56 H 30 L 18 69  V 56 H 14 C 11 56 9 54 9 51 V 20 C 9 17 11 15 14 15" style="stroke:red;fill:white;stroke-width:3;"></path><circle cx="56" cy="36" r="3" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" transform="" style="stroke:red;fill:red;stroke-width:3;"></circle><circle cx="41" cy="36" r="3" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" transform="" style="stroke:red;fill:red;stroke-width:3;"></circle><circle cx="26" cy="36" r="3" stroke="rgb(0, 0, 0)" stroke-width="3" fill="transparent" transform="" style="stroke:red;fill:red;stroke-width:3;"></circle></svg>
                        </div>
                    </div>
                    <div id="vv_nav_centre">
                      <div id="vv_nav_centre_defilement">
                      </div>
                    </div>
                    <div id="vv_nav_droite">
                        <div data-id_menu="3" class="hug_bouton hug_bouton_carre" id="vv_bouton_aide" data-hug_click="c_aides1.recupere_la_page_d_aide()" title="aide et paramètres">
                           <svg viewBox="-106 -100  213 200" style="transform:scale(1,1) translate(0px, 0px)"><path d=" M 100 0 C 100 0 79.7763 5.9784 79.7763 5.9784 C 79.7763 5.9784 77.9942 17.8017 77.9942 17.8017 C 77.9942 17.8017 95.5573 29.4755 95.5573 29.4755 C 95.5573 29.4755 90.0969 43.3884 90.0969 43.3884 C 90.0969 43.3884 69.282 40 69.282 40 C 69.282 40 62.5465 49.8792 62.5465 49.8792 C 62.5465 49.8792 73.3052 68.0173 73.3052 68.0173 C 73.3052 68.0173 62.349 78.1831 62.349 78.1831 C 62.349 78.1831 45.0656 66.0991 45.0656 66.0991 C 45.0656 66.0991 34.7107 72.0775 34.7107 72.0775 L 32.8729 50.3378  A 60.1854 60.4115 0 1 0 -25.1945 54.3907 L -23.5792 76.4455 C -26.0652 75.4525 -34.7107 72.0775 -34.7107 72.0775 C -34.7107 72.0775 -50 86.6025 -50 86.6025 C -50 86.6025 -62.349 78.1831 -62.349 78.1831 C -62.349 78.1831 -54.4138 58.6441 -54.4138 58.6441 C -54.4138 58.6441 -62.5465 49.8792 -62.5465 49.8792 C -62.5465 49.8792 -82.6239 56.332 -82.6239 56.332 C -82.6239 56.332 -90.0969 43.3884 -90.0969 43.3884 C -90.0969 43.3884 -74.4699 29.2273 -74.4699 29.2273 C -74.4699 29.2273 -77.9942 17.8017 -77.9942 17.8017 C -77.9942 17.8017 -98.8831 14.9042 -98.8831 14.9042 C -98.8831 14.9042 -100 0 -100 0 C -100 0 -79.7763 -5.9784 -79.7763 -5.9784 C -79.7763 -5.9784 -77.9942 -17.8017 -77.9942 -17.8017 C -77.9942 -17.8017 -95.5573 -29.4755 -95.5573 -29.4755 C -95.5573 -29.4755 -90.0969 -43.3884 -90.0969 -43.3884 C -90.0969 -43.3884 -69.282 -40 -69.282 -40 C -69.282 -40 -62.5465 -49.8792 -62.5465 -49.8792 C -62.5465 -49.8792 -73.3052 -68.0173 -73.3052 -68.0173 C -73.3052 -68.0173 -62.349 -78.1831 -62.349 -78.1831 C -62.349 -78.1831 -45.0656 -66.0991 -45.0656 -66.0991 C -45.0656 -66.0991 -34.7107 -72.0775 -34.7107 -72.0775 C -34.7107 -72.0775 -36.5341 -93.0874 -36.5341 -93.0874 C -36.5341 -93.0874 -22.2521 -97.4928 -22.2521 -97.4928 C -22.2521 -97.4928 -11.9234 -79.1065 -11.9234 -79.1065 C -11.9234 -79.1065 0 -80 0 -80 C 0 -80 7.473 -99.7204 7.473 -99.7204 C 7.473 -99.7204 22.2521 -97.4928 22.2521 -97.4928 C 22.2521 -97.4928 23.5804 -76.4458 23.5804 -76.4458 C 23.5804 -76.4458 34.7107 -72.0775 34.7107 -72.0775 C 34.7107 -72.0775 50 -86.6025 50 -86.6025 C 50 -86.6025 62.349 -78.1831 62.349 -78.1831 C 62.349 -78.1831 54.4138 -58.6441 54.4138 -58.6441 C 54.4138 -58.6441 62.5465 -49.8792 62.5465 -49.8792 C 62.5465 -49.8792 82.6239 -56.332 82.6239 -56.332 C 82.6239 -56.332 90.0969 -43.3884 90.0969 -43.3884 C 90.0969 -43.3884 74.4699 -29.2273 74.4699 -29.2273 C 74.4699 -29.2273 77.9942 -17.8017 77.9942 -17.8017 C 77.9942 -17.8017 98.8831 -14.9042 98.8831 -14.9042 C 98.8831 -14.9042 100 0 100 0 C 100 0 100 0 100 0" style="stroke-width:1;stroke:blue;fill:blue;" transform="rotate(4.3643 0 0 )"></path><path stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" d=" M -19.9035 0.0665 H -47.5914 C -47.5803 -34.716 -29.2323 -48.6369 0.1918 -48.597 C 36.6062 -48.6442 45.8185 -25.4943 45.5704 -0.0489 C 45.13423 14.3612 35.214 28.2112 19.5487 43.9057 C 10.4376 51.5727 10.8315 58.2471 10.8315 61.997  H -12.0032 C -12.1844 60.6516 -11.786 47.7718 -8.6172 42.8653 C -1.4916 31.7469 17.8786 11.5852 17.915 -0.0303 C 18.6014 -16.3637 12.0753 -24.5501 -0.7396 -23.9992 C -13.9158 -23.9741 -20.6076 -15.9549 -20.0506 -0.1851 M -12.881 74.4678 H 11.4458 L 7.5960 93.5628 H -7.4803 Z" style="stroke:forestgreen;fill:forestgreen;stroke-width:1;"></path></svg>
                        </div>
                        <div data-id_menu="2" class="hug_bouton hug_bouton_carre" id="vv_bouton_connexion" data-hug_click="c_connexion1.recupere_la_page_de_connexion(),indice_menu(2)" title="connexion ou déconnexion">
                           <svg viewBox="19 4  130 142"><path d=" M 73 80 A 34 35 48 1 1 92 60 l 46 46 l 0 21 l -22 0 l 0 -12 l -11 0 l 0 -11 l -11 0 l 0 -11 l -8 0 l -13 -13 " stroke="rgb(0, 0, 0)" stroke-width="1" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:gold;stroke-width:4;"></path><circle cx="51" cy="38" r="8" stroke="rgb(0, 0, 0)" stroke-width="4" fill="transparent" transform="" style="stroke:red;fill:black;stroke-width:4;"></circle></svg>
                        </div>
                    </div>
                </div>
                
EOT;

        }

        $donnees_retournees[__x_page] .= '<div id="vv_les_messages"></div>';
        $donnees_retournees[__x_page] .= '<div class="hug_bouton yy__x_signaux_1" id="vv_supprimer_les_messages_3" data-hug_click="interface1.supprimer_les_messages()" style="position: fixed;left:calc( 50vw - 80px);top: var(--h_barre);z-index:100;visibility:hidden;">supprimer les messages</div>';
        $donnees_retournees[__x_page] .= '<main id="vv_main">';
        $donnees_recues[__x_action]=$donnees_recues['fonction_a_appeler'];
        
        if(isset($donnees_recues['__xva']['href'])){

            $pos1=strpos($donnees_recues['__xva']['href'],'#');
            
            if($pos1 !== false){

                $fonction=substr($donnees_recues['__xva']['href'],$pos1 + 1);
                $donnees_recues[__x_action]=$fonction;
                $donnees_retournees[__xva]['redirection']=$fonction;

            }


        }

        /*
          =====================================================================================================
          ici on récupère le contenu réel de la page
          =====================================================================================================
        */
        traite_autre_fonction($donnees_recues,$donnees_retournees);
        /*
          =====================================================================================================
        */
        $donnees_retournees[__x_page] .= '</main>';
        
        if($sans_menus1 === false){

            $chi_id_projet=0;
            
            if(isset($_SESSION[__X_CLE_APPLICATION]['chi_id_projet'])){

                $chi_id_projet=$_SESSION[__X_CLE_APPLICATION]['chi_id_projet'];

            }

            $donnees_retournees[__x_page] .= '<nav id="vv_bas_de_page">';
            $donnees_retournees[__x_page] .= '<div id="vv_projet_en_cours" style="border-width:0;">' . $chi_id_projet . '</div>';
            $donnees_retournees[__x_page] .= <<<EOT
                    <div class="hug_bouton" data-hug_click="c_accueil1.recupere_la_page_d_accueil()" title="affiche la page d'accueil">Accueil</div>
                    <div class="hug_bouton" data-hug_click="c_connexion1.recupere_la_page_de_connexion()">connexion</div>
                    <div class="hug_bouton" data-hug_click="c_aides1.recupere_la_page_d_aide()">aide</div>
                    <div id="vv_haut_de_page3" class="hug_bouton" data-hug_click="interface1.haut_de_page()" title="haut de page" >
                        <svg style="transform: translate(0px, 5px);" xmlns="http://www.w3.org/2000/svg" viewBox="-7 -2  15 25"><path d="M -4 0   H 4   " stroke="rgb(0, 0, 0)" stroke-width="2" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform=""></path><path d="M -2 15   L -2 3   L -5 6   L 0 1   L 5 6   L 2 3   L 2 15   " stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:red;fill:transparent;stroke-width:2;"></path></svg>
                    </div>
                </nav>
                <dialog id="vv_sous_fenetre1"></dialog>
        
EOT;

        }

    }
}
/*
  =====================================================================================================================
*/