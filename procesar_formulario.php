<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Aquí puedes realizar validaciones adicionales si es necesario

    // Crear el mensaje de correo
    $to = "xldiegoo@gmail.com";
    $subject = "Nuevo mensaje de contacto";
    $message = "Nombre: $nombre\n";
    $message .= "Correo electrónico: $email\n";
    $message .= "Mensaje:\n$mensaje";

    // Enviar el correo
    $headers = "From: $email";

    // Puedes añadir más cabeceras según tus necesidades

    mail($to, $subject, $message, $headers);

    // Redireccionar o mostrar un mensaje de éxito
    header("Location: gracias.html");
} else {
    // Si se accede directamente a este script sin enviar el formulario, redirigir a la página de contacto
    header("Location: contacto.html");
}
?>
