import { useRouter } from 'next/dist/client/router';
import Brands from '../../../components/Brands';
import GearPagination from '../../../components/GearPagination';
import { PaginationContainerStyles } from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function BrandsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Brand';
  const gearLink = '/gear/brands/';

  return (
    <>
      <PaginationContainerStyles>
        <GearPagination
          queryString={queryString}
          gearLink={gearLink}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <Brands page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <GearPagination
          queryString={queryString}
          gearLink={gearLink}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
