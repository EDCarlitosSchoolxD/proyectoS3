<?php

    if($_POST){
        $procesador = $_POST['procesador'];

        if($procesador == 'Intel'){
            $datos = ['Intel i3','Intel i5'];
            $json = json_encode($datos);
                echo "$json";

        }elseif($procesador == 'Ryzen'){
            $datos = ['Ryzen 2200G','Ryzen 3400G'];
            $json = json_encode($datos);
            echo "$json";
        }
    }

?>