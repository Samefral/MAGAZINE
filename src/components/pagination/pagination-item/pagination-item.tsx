import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import { useGetParamsPath } from '../../../hooks/use-get-params-path';
import { AppRoute } from '../../../const';

type PaginationItemProps = {
  pageNumber: number;
  isActive: boolean;
}

function PaginationItem({pageNumber, isActive}: PaginationItemProps): JSX.Element {
  const paramsPath = useGetParamsPath();

  const getBtnPath = (page: number) =>
    `${generatePath(AppRoute.Catalog, { page: `${page}` })}?${paramsPath}`;

  return (
    <li className={classNames('pagination-list__item pagination-button', isActive && 'pagination-button--active')}>
      <Link className="pagination-list__link" to={getBtnPath(pageNumber)}>
        {pageNumber}
      </Link>
    </li>
  );
}

export default PaginationItem;
