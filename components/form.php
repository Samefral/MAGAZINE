<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet/less" href="/css/styleless.less" type="text/less">
    <link rel="stylesheet" href="/css/styleless.css">
    <title>MAGAZINE</title>
</head>

<body class="page">

    <header class="page__header">
        <div class="container">
            <nav class="header-nav">

                <a class="header-nav__logo logo" href="/index.php">
                    <h1 class="logo__title">MAGAZINE</h1>
                </a>

                <ul class="header-nav__list">
                    <li class="header-nav__item">
                        <a href="index.php" class="header-nav__link">Главная</a>
                    </li>
                    <li class="header-nav__item">
                        <a href="profile.php" class="header-nav__link header-nav__link--current">Личный кабинет</a>
                    </li>
                    <li class="header-nav__item header-nav__item--basket">
                        <a href="basket.php" class="header-nav__link">Корзина</a>
                        <span class="basket-items-quantity hidden"></span>
                    </li>
                </ul>

            </nav>
        </div>
    </header>


    <section class="page__authorization authorization">
        <div class="container">
            <form class="authorization__form form">
                <h2 class="form__title">Авторизация</h2>
                <div class="form__block">
                    <div class="form__input-block">
                        <label class="form__input-label" for="login">Логин</label>
                        <input class="form__input" type="text" id="login">
                    </div>
                    <div class="form__input-block">
                        <label class="form__input-label" for="password">Пароль</label>
                        <input class="form__input" type="password" id="password">
                    </div>

                </div>
                <button class="login-button">Войти</button>
                <div class="form__support form-support">
                    <a class="form-support__link" href="#">Забыли пароль?</a>
                    |
                    <a class="form-support__link" href="#">Регистрация</a>
                </div>
            </form>
        </div>
    </section>


    <script src="/scripts/quantity.js"></script>
    <script src="/scripts/form.js"></script>
</body>