<?php
require('products_db.php');
require('components/header.php');
?>

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

<script src="/scripts/app.js"></script>
<script src="/scripts/form.js"></script>
</body>