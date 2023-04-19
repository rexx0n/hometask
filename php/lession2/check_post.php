<?php
print_r($_POST);
$name = $_POST['username'];
$email = $_POST['email'];
$password= $_POST['password'];
$message = $_POST['message'];
//sha1тоже кеширует пароль
$password = sha1($password);
$_POST['password'] = sha1($password);
echo   "<h1>Все данные</h1>";
foreach ($_POST as $key => $value)
    echo "<p>$value</p>";


if(trim($name) == '') {
    echo 'Вы не ввели имя пользователя';
}
else if(strlen(trim($name)) <=1) {
    echo 'Такого имени не сущетсвует';
}

header('Location: about.php');
exit;