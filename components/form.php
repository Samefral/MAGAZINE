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

    <header class="page-header">
        <div class="container">
            <div class="header-top">
                <a class="logo" href="/index.php">
                    <h1>MAGAZINE</h1>
                </a>
                <div class="header-nav">
                    <nav>
                        <ul class="header-nav-list">
                            <a href="/index.php" class="nav-link">
                                <li>Главная</li>
                            </a>
                            <a href="/components/form.php" class="nav-link nav-current">
                                <li>Личный кабинет</li>
                            </a>
                            <a href="/basket.php" class="nav-link basket">
                                <li>Корзина</li>
                                <span class="basket-items-quantity hidden"></span>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <section class="forma">
            <form class="form">
                <h2 class="form-title">Авторизация</h2>
                <div class="input-block">
                    <h3 class="input-title">Логин</h3>
                    <input class="input" type="text">
                    <h3 class="input-title">Пароль</h3>
                    <input class="input" type="password">
                </div>
                <button class="login-button">Войти</button>
                <p class="form-support">
                    <a class="forget-password" href="#">Забыли пароль?</a>
                    |
                    <a class="registration" href="#">Регистрация</a>
                </p>
            </form>
        </section>
    </div>

    <script src="/scripts/quantity.js"></script>
    <script src="/scripts/form.js"></script>
</body>