<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = '8888089@mail.ru';    // Наш логин
$mail->Password = 'password';           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;               
 
$mail->setFrom('8888089@mail.ru', 'Письмо с сайта AliCheck'); // Наш логин 
$mail->addAddress('ap@appyfurious.com');     // Куда отправлять письмо
$mail->isHTML(true);

$mail->Subject = 'Письмо с сайта AliCheck';
$mail->Body    = '
	Пользователь оставил свои данные: <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . ' <br>
	Текст сообщения: ' . $message . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>