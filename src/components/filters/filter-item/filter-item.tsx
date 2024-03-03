
function FilterItem(): JSX.Element {
  return (
    <li className="filter-list__item">
      <a href="/index.php?product_type=<?= $filter['url'] ?>" className="filter-list__link <?= $type === $filter['url'] ? 'filter-list__link--current' : '' ?>">
        Amd
      </a>
    </li>
  );
}

export default FilterItem;
