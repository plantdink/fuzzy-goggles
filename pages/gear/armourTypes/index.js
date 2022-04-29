import { useRouter } from 'next/dist/client/router';
import ArmourTypes from '../../../components/ArmourTypes';
import GearPagination from '../../../components/GearPagination';
import { PaginationContainerStyles } from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function ArmourTypesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Armour Type';
  const gearLink = '/gear/armourTypes/';

  return (
    <>
      <PaginationContainerStyles>
        <GearPagination
          gearLink={gearLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <ArmourTypes page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <GearPagination
          gearLink={gearLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
