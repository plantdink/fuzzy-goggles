import { useRouter } from 'next/dist/client/router';
import NamedArmourPieces from '../../../components/NamedArmourPieces';
import GearPagination from '../../../components/GearPagination';
import { PaginationContainerStyles } from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function NamedArmourPiecesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Named Armour Piece';
  const gearLink = '/gear/namedArmourPieces/';

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
        <NamedArmourPieces page={page || 1} />
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
