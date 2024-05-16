<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);

    $to = "halter.guilhermenunes@gmail.com";
    $subject = "Entrando em Contato - Portifolio";

    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email. "\r\n".
            "Mensagem: ".$mensagem; 

    $header = "From:" .$email. "\r\n".
                "Reply-To:".$email. "\r\n".
                "X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?> 