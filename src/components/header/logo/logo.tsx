import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

function Logo(): JSX.Element {
  return (
    <Link to={AppRoute.Root} className="header-nav__logo logo" >
      <h1 className="logo__title">MAGAZINE</h1>
    </Link>
  );
}

export default Logo;
