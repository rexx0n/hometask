<?php
    session_start();
    $user_name = htmlspecialchars(trim($_POST['username']));
    $from = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    $_SESSION['user_name'] = $user_name;
    $_SESSION['email'] = $from;
    $_SESSION['subject'] = $subject;
    $_SESSION['message'] = $message;

    if(strlen($user_name)<=1)
        $_SESSION['$error_username'] = "Введите корректное имя";
    else if (strlen($from) <5 || strpos($from, "@") == false)
        $_SESSION['$error_email'] = "Вы ввели некорректный email";
    else if(strlen($subject) <= 15)
    $_SESSION['$error_message']= "Сообщение не менее 15 символов";
    else {
        $_SESSION['$error_username'] = "";
        $_SESSION['$error_email'] = "";
        $_SESSION['$error_message'] = "";
        $_SESSION['$error_subject'] = "";
    }