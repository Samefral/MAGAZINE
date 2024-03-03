import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';

function Layout(): JSX.Element {
  return (
    <div className='container'>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
