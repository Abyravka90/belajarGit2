<?php
    if(isset($_POST['submit']))
    {
    $star= $_POST['star'];
    for($a=1;$a<=$star;$a++)
    {
        for($a1=1;$a1<=$a;$a1++)
    {   
        echo"*";
    }
        echo"<p>";
    }
    }
?>