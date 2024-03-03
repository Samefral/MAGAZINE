import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getProductsLoadingStatus } from '../../store/videocards-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import Filters from '../../components/filters/filters';
import MainProductList from '../../components/product-lists/main-product-list/main-product-list';

function CatalogPage(): JSX.Element {
  const isProductsLoading = useAppSelector(getProductsLoadingStatus);

  return (
    <main>
      <Helmet>
        <title>Каталог - Magazine</title>
      </Helmet>
      <section className="page__product-catalog product-catalog">
        <div className="product-catalog_columns">
          <Filters />
          {isProductsLoading ? <LoadingScreen /> : <MainProductList />}
        </div>
      </section>
    </main>
  );
}

export default CatalogPage;
