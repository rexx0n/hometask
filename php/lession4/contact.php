<?php
error_reporting(E_ALL ^E_NOTICE);
session_start()
?>
<h1>Контакты</h1>
<a href="index.php">Главная</a>
<form action="check_contact.php" method="post">
    <input type="text" value="<$_SESSION['username']?=?>" name="username" placeholder="Введите имя">
    <div style="color: red"><?=$_SESSION['error_username'] ?></div><br>
    <input type="email" value="<?=$_SESSION['email']?>" name="email" placeholder="Введите email">
    <div style="color: red"><?=$_SESSION['error_email'] ?></div><br>
    <input type="text" name="subject" value="<?=$_SESSION['subject']?>" placeholder="Тема сообщения">
    <div style="color: red"><?=$_SESSION['error_subject'] ?></div><br>
    <textarea name="message" placeholder="Ваше сообщение"><?=$_SESSION['message']?></textarea>
    <div style="color: red"><?=$_SESSION['error_message'] ?></div><br>
    <button type="submit">Отправить</button>
</form>
