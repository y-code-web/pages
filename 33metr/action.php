<?php 
	if(isset($_POST['tel'])) {

		$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000000);
		$tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 1000000);

		// $to - кому отправляем 

		$to = 'chprof93@gmail.com';
		$name_company = '33metr';

		$message = '';

		if ($name) {
			$message .= 'Имя: '. $name .'<br />';
		}
		if ($tel) {
			$message .= 'Телефон: '. $tel .'<br />';
		}

		$headers = "Content-Type: text/html; charset=utf-8\r\n";

		// функция, которая отправляет наше письмо
		mail($to,  $name_company, $message, $headers);
	}

?>