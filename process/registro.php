<?php  
    include("./conexion.php");
    date_default_timezone_set('America/Mexico_City');
    $fecha = date("Y,m,d"); 
    
        if($_SERVER["REQUEST_METHOD"] == "POST"){    
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $user = $_POST['user'];
            $pass = $_POST['pass'];
                $mysql = mysqli_query($link,"INSERT INTO registro (nombre,apelllido,usuario,pass,fecha) VALUES ('$nombre','$apellido','$user','$pass','$fecha')");
                if (!$mysql) {
                    exit("Error al registrarse");  
                }else{
                    exit("Registro exitoso");
                }
            }
?>