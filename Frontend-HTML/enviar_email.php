<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $destinatario = "halter.guilhermenunes@gmail.com";
    $assunto = "Contato pelo site";
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem: $mensagem\n";

    if (mail($destinatario, $assunto, $corpo_email)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Erro ao enviar o email.";
    }
}
?>
