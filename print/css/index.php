<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">
	<title>Tiny-one</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
	<link rel="sshortcut icon" href="img/fingerprint.png">
	<link rel="stylesheet" href="bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,600,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
	<link rel="stylesheet" href="animate.css">
	<link rel="stylesheet" href="main.css">

</head>
<body>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<img src="img/logo.png" alt="TinyOne" class="logo">

				</div>
				<div class="col-lg-5 ml-auto">
					<nav>
						<ul class="menu justify-content-center d-flex">
							<li class="menu__item"><a href="#">Главная</a></li>
							<li class="menu__item"><a href="#">Товары</a></li>
							<li class="menu__item"><a href="#">Контакты</a></li>
						</ul>
					</nav>
				</div>	
			</div>
			<div class="row">
				<div class="col-lg-6">
					<div class="offer animated fadeInLeft">
						<h1 class="offer__title">Экономим время на распечатке</h1>
						<div class="offer__intro">Возможность предварительного заказа</div>
						<p class="offer__text">Вы всегда можете заказать распечатку заранее чтобы сэкономить свое время</p>
						<ul class="icons d-flex">
							<li class="icons__item"><a target="_blank" href="https://vk.com/sudondie"><i class="fab fa-vk"></i></a></li>
							<li class="icons__item"><a href="mailto:manivixsteam@gmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-5 ml-auto">
					<img class="ipad animated fadeInRight" src="img/iPad Mini White facing.png" alt="">
				</div>
			</div>
		</div>
	</header>

	<section id="features" class="features">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title">
						<div class="title__main">Наши товары</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4">
					<div class="feature d-flex">
						<i class="fas fa-copy feature__icon"></i>
						<div class="feature__block">
							<h3 class="feature__title">ЧБ распечатка</h3>
							<p class="feature__text">Распечатка черной краской</p>
							<p class="feature__text">Цена: 3 руб лист</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="feature d-flex">
						<i class="fas fa-copy feature__icon purple__icon"></i>
						<div class="feature__block">
							<h3 class="feature__title">Цветная распечатка</h3>
							<p class="feature__text">Распечатка цветными красками</p>
							<p class="feature__text">Цена: 4 руб лист</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="feature d-flex">
						<i class="fas fa-file feature__icon"></i>
						<div class="feature__block">
							<h3 class="feature__title">Файл</h3>
							<p class="feature__text">Прозрачный файл для документа</p>
							<p class="feature__text">Цена: 5 руб</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="feature d-flex">
						<i class="fas fa-folder feature__icon"></i>
						<div class="feature__block">
							<h3 class="feature__title">Скоросшиватель</h3>
							<p class="feature__text">Скоросшиватель для файлов</p>
							<p class="feature__text">Цена: 15 руб</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="feature d-flex">
						<i class="fas fa-tablet-alt feature__icon"></i>
						<div class="feature__block">
							<h3 class="feature__title">Еще что-то</h3>
							<p class="feature__text">Какое-то описание</p>
							<p class="feature__text">Какая-то цена</p>
						</div>
					</div>
				</div>

				<div class="col-lg-4">
					<div class="feature d-flex pdb">
						<i class="fas fa-tablet-alt feature__icon"></i>
						<div class="feature__block">
							<h3 class="feature__title">Еще что-то</h3>
							<p class="feature__text">Какое-то описание</p>
							<p class="feature__text">Какая-то цена</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="touch" class="touch">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title">
						<div class="title__main">Сделайте заказ</div>
						<p class="title__text">Заполните форму и мы свяжемся с вами как только заказ будет готов</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-10 m-auto">
				<form action="#" class="form" enctype="multipart/form-data" method="post">
					<input type="email" placeholder="Введите свой email" class="form__input" required>
					<input type="text" placeholder="Ваш заказ" class="form__input" required>
					<input type="file" class="form__file form__input" multiple>
					<button type="submit" class="form__btn form__input">отправить</button>
				</form>
				</div>
			</div>
		</div>
	</section>

	<footer id="footer" class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title">
						<p class="title__text">Ростов-на-Дону<br> Ул.Зорге 28<br>Общежитие 4Б 217 комната</p>
					</div>
				</div>
			</div>
		</div>
	</footer>




<script src="js/bootstrap.min.js"></script>
</body>
</html>