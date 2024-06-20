import { NavLink, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { getTotalCartProducts } from '../../../store/cart-data/selectors';
import { AppRoute } from '../../../const';

function Navigation(): JSX.Element {
  const { page } = useParams();
  const activeClassName = 'header-nav__link--current';
  const totalCartProducts = useAppSelector(getTotalCartProducts);

  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__item header-nav__item--home">
          <NavLink className={({ isActive }) => isActive || page ? `header-nav__link ${activeClassName}` : 'header-nav__link'}
            to={AppRoute.Root} end
          >
            Главная
          </NavLink>
        </li>
        <li className="header-nav__item header-nav__item--profile">
          <NavLink className={({ isActive }) => isActive ? `header-nav__link ${activeClassName}` : 'header-nav__link'}
            to={AppRoute.Login} end
          >
            Личный кабинет
          </NavLink>
        </li>
        <li className="header-nav__item header-nav__item--basket">
          <NavLink className={({ isActive }) => isActive ? `header-nav__link ${activeClassName}` : 'header-nav__link'}
            to={AppRoute.Cart} end
          >
            Корзина
          </NavLink>
          {totalCartProducts > 0 ? <span className="basket-items-quantity">{totalCartProducts}</span> : null}
        </li>
      </ul>

    </nav>
  );
}

export default Navigation;
