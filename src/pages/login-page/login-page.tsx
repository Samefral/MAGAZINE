// import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '../../hooks';
// import { getAuthorizationStatus } from '../../store/user-process/selectors';
// import { AuthorizationStatus, AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function LoginPage(): JSX.Element {
  // const authorizationStatus = useAppSelector(getAuthorizationStatus);

  // if (authorizationStatus === AuthorizationStatus.Auth) {
  //   return (
  //     <Navigate to={AppRoute.Root} />
  //   );
  // }

  return (
    <main>
      <Helmet>
        <title>Авторизация - Magazine</title>
      </Helmet>
      <section className="page__authorization authorization">
        <div className="container">
          <form className="authorization__form form">
            <h2 className="form__title">Авторизация</h2>
            <div className="form__block">
              <div className="form__input-block">
                <label className="form__input-label" htmlFor="login">Логин</label>
                <input className="form__input" type="text" id="login" />
              </div>
              <div className="form__input-block">
                <label className="form__input-label" htmlFor="password">Пароль</label>
                <input className="form__input" type="password" id="password" />
              </div>
            </div>
            <button className="login-button">Войти</button>
            <div className="form__support form-support">
              <Link className="form-support__link" to="#">Забыли пароль?</Link> | <Link className="form-support__link" to="#">Регистрация</Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
