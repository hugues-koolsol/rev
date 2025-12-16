<?php
$les_menu1='';
/*
  ==================
*/
if(isset($_SESSION[_CA_]['chi_id_utilisateur']) && $_SESSION[_CA_]['chi_id_utilisateur'] > 0){
   $les_menu1.='<li><div id="menu_1" data-id_menu="29" class="rev_b_svg" data-rev_click="m1(n1(ecran_coordonnees1),f1(ecran_coordonnees1()))" title="mon profile"><svg class="rev_svg_dans_menu1" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50  100 100"><g style="stroke:rgb(255, 255, 255);fill:transparent;stroke-width:8;" transform="   "><circle cx="0" cy="-10" r="30"></circle><path d=" M -40 45 C -30 20 30 20 40 45"></path><circle cx="-10" cy="-15" r="5"></circle><circle cx="10" cy="-15" r="5"></circle><path d=" M -10 0 C -15 10 15 10 10 0"></path><path d=" M 0 -10 V 0"></path><path d=" M -15 -15 H -30"></path><path d=" M 15 -15 H 30"></path><path d=" M -5 -15 c 0 -5 10 -5 10 0"></path></g><path d=" M -50 -50 h 100 v 100 h -100 v -100 " stroke="rgb(0, 0, 0)" stroke-width="0" fill="transparent" stroke-linejoin="round" stroke-linecap="round" transform="" style="stroke:black;fill:transparent;stroke-width:1;"></path></svg></div></li>'.PHP_EOL;
}

if($les_menu1!==''){
    $les_menu1='<ul data-rev_menu="1" class="vv_nav_centre_defilement" style="display:none;"  id="menu_pour_acces_2_">'.$les_menu1.'</ul>';
}

