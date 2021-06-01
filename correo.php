<?php    
    if(isset($_POST['enviar'])){
        if(!empty($_POST['nombre']) && !empty($_POST['correo']) && !empty($_POST['mensaje'])){
            $nombre = $_POST['nombre'];
            $correo = $_POST['correo'];
            $mensaje = $_POST['mensaje'];

            $asunto = "CONTACTO TECNISISTEMA";
            $destinatario = "atavernelli@tecnisistema.com";

            $elcorreo = "Este mensaje fue enviado desde el Sitio Web de Tecnisistema. \n";
            $elcorreo .= "DE: $nombre .\n";
            $elcorreo .= "CORREO ELECTRONICO: $correo .\n";
            $elcorreo .= "MENSAJE: $mensaje .\n";

            $mail = mail($destinatario, $asunto, $elcorreo);   
            
            if($mail){
                echo "<script> alert('Correo electrónico ENVIADO satisfactoriamente'); </script>"; 
            }else{
                echo "<script> alert('Tu correo no pudo ser enviado'); </script>";
            }
        }
    }
?>