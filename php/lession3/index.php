<?php
echo date('l F H:i:s', strtotime('-1 Week -2 Day'));
$lis = [5,4,3];
unset($lis[1]);//Удаляет элемент с массива  вместе с индексом
$lis =  array_values($lis);// обновляет массив
sort($lis);//Сортирует массив если наоборот то rsort
//shuffle($lis); Разбрасывает элементы массива по разным индексам

$arr = array_slice($lis, 0, count($lis));//Обрезает от 0 до конца

print_r($lis);//выодит массив
echo in_array(3, $lis); //проверяет если ли в массиве цифра 3 если есть возвращает 1 иначе ничего
$arr_1 = [5,7];
$arr_2 = [2,43,25];
$arr_3 = array_merge($arr_1, $arr_2);// Обьединяет два массива в один
$str = 'Example';
echo strpos($str, 'am');// СИмволы которые мы хотим найти и вырезает эти символы

$words = 'jong,bob,alex';
$arr_words = explode(',',$words);//Разобьет строку words сделает массив будет разбивать после запитой

$file = fopen('text.txt','a');//первый аргумент файл который нужно открыть если нет этого файла то php его создаст 2 параметр тип  w- позваляет с 0 записывать в файл, a-позволяет что-то добавлять в файл
fwrite($file, "Example \nHello ");//функция чтобы вписать в файл что либо
$content = fread($file);
file_get_contents("text.txt");// позволяет прочитать данный с файла
rename('text.txt', 'newName.txt');//переменование файла
unlink();//Удаление файла
fclose($file);//если открыть файл то его нужно закрывать этой функцией