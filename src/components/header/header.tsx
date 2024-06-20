import Logo from './logo/logo';
import Navigation from './navigation/navigation';

function Header(): JSX.Element {
  return (
    <header className="header page__header">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
