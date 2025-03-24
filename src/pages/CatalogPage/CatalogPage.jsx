import { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';

import css from './CatalogPage.module.css';

import { fetchCampers, resetCampers, selectHasMore } from '@redux/slices/campersSlice';
import { setFilters } from '@redux/slices/filtersSlice';

import Button from '@components/Button/Button';
import CamperList from '@components/CamperList/CamperList';
import CatalogFilters from '@components/CatalogFilters/CatalogFilters';
import Loader from '@components/Loader/Loader';

import { BASE_TITLE, CATALOG_PAGE_TITLE } from '@constants/pages';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const {
    items,
    isLoading,
    error,
    page,
  } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, ...filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    dispatch(fetchCampers({
      page: page + 1,
      ...filters,
    }));
  };

  const handleFiltersSubmit = (values) => {
    // Reset campers list before applying new filters
    dispatch(resetCampers());

    // Update filters in Redux
    dispatch(setFilters(values));
  };

  return (
    <>
      <Helmet>
        <title>{CATALOG_PAGE_TITLE} | {BASE_TITLE}</title>
        <meta
          name="description"
          content="Explore our wide selection of camper vans. Filter by features, location, and price to find your perfect travel companion."
        />
        <meta
          name="keywords"
          content="camper van rental, RV catalog, travel trucks, camping vehicles"
        />
      </Helmet>

      <main>
        <div className="container">
          <div className={css.catalog}>
            <aside className={css.sidebar}>
              <CatalogFilters
                filters={filters}
                onSubmit={handleFiltersSubmit}
              />
            </aside>

            <div className={css.content}>
              <CamperList
                campers={items}
                isLoading={isLoading}
                error={error}
              />

              <div className={css.loadMoreWrapper}>
                {isLoading ? (
                  <Loader size={24} />
                ) : (
                  hasMore && (
                    <Button onClick={handleLoadMore}>
                    Load More
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CatalogPage;