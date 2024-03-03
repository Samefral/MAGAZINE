import { PRODUCTS_PER_PAGE } from '../../const';
import PaginationItem from './pagination-item/pagination-item';

type PaginationProps = {
  productsLength: number;
  currentPage: number;
}

function Pagination({productsLength, currentPage}: PaginationProps): JSX.Element {
  const pagesCount = Math.ceil(productsLength / PRODUCTS_PER_PAGE);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <ol className="product-catalog__paginator pagination-list">
      {
        pages.length === 0
          ?
          null
          :
          pages.map((page) =>
            (
              <PaginationItem
                key={page}
                pageNumber={page}
                isActive={currentPage === page}
              />
            )
          )
      }
    </ol>
  );
}

export default Pagination;
