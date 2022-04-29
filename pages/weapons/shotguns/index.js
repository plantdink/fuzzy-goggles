import { useRouter } from 'next/dist/client/router';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import Shotguns from '../../../components/Shotguns';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function ShotgunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Shotgun';
  const weaponLink = '/weapons/shotguns/';

  return (
    <>
      <PaginationContainerStyles>
        <Pagination
          weaponLink={weaponLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <Shotguns page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <Pagination
          weaponLink={weaponLink}
          queryString={queryString}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
