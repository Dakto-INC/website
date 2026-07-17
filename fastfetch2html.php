<?php
$outputA=null;
$outputB=null;
$useless=null;
function loopoutput($fuck){
$length = count($fuck); 
for ($i = 0; $i < $length; $i++) { 
    echo $fuck[$i]; 
    if ( ! empty($fuck[$i]) ) {
//put new line in each html tag
            echo('<br>');
    }
}

}
// the arch logo get printed first in neofetch
// after the logo puted out
// then the system info got print out
// neofetch use ascii stuff to put logo next to the info
// Sadly aha dont support but i could do that via css/html stuff
echo ' <!DOCTYPE html>';
echo '<html>';
echo '<head><style>.archlogo {margin-right: 2em;}.archbox {display: flex;}.archlogo,.archinfo{display: block;}</style></head>';
echo '<body>';
 echo '<br>';
 echo '<br>';
 echo '<div class="archbox">';
 echo '<pre class="archlogo">';
//get neofetch logo
exec('neofetch -L | aha --no-header', $outputA, $useless);

loopoutput($outputA);

 echo '</pre>';
//get neofetch info

 echo '<pre  class="archinfo">';
exec('fastfetch -L none -c none | aha --no-header', $outputB, $useless);
loopoutput($outputB);

echo '</pre>';
echo '</div>';
echo '</body>';
echo '</html>';
?>
