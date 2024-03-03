import Logo from './logo/logo';
import Navigation from './navigation/navigation';

// <input type="hidden" class="data-php-quantity" data-products-quantity="<?= $total_products_length ?>">
function Header(): JSX.Element {
  return (
    <header className="header page__header">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
