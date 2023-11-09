
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

    $resend = Resend::client('re_goP6uK6a_9fZ7HXBJEN3ghEGjpzfHeoDv');

    $resend->emails->send([
  'from' => 'onboarding@resend.dev',
  'to' => 'bloosterone@gmail.com',
  'subject' => $subject,
  'html' => $message
    ]);
    } 
?>
