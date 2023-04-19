
<?php
require 'blocks/header.php'
?>
<h1>Про нас</h1>
<h1>Форма методом post</h1>
<form action="check_post.php" method="post">
    <input type="text" name="username" placeholder="Введите имя" class="form-control"><br>
    <input type="text" name="email" placeholder="Введите email" class="form-control"><br>
    <input type="text" name="password" placeholder="Введите пароль" class="form-control"><br>
    <textarea name="message" class="form-control" placeholder="Введите сообщение"></textarea>
    <button type="submit">Отправить</button>
</form>
<h1>Форма методом get</h1>
<form action="check_get.php" method="get">
    <input type="text" name="username" placeholder="Введите имя" class="form-control"><br>
    <input type="text" name="email" placeholder="Введите email" class="form-control"><br>
    <input type="text" name="password" placeholder="Введите пароль" class="form-control"><br>
    <textarea name="message" class="form-control" placeholder="Введите сообщение"></textarea>
    <button type="submit">Отправить</button>
</form>
<style>
    form {
        max-width: 400px;
        display: flex;
        flex-direction: column;
    }
</style>
<?php
require 'blocks/footer.php'

?>
