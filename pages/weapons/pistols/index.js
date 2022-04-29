import { useRouter } from 'next/dist/client/router';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import Pistols from '../../../components/Pistols';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function PistolsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Pistol';
  const weaponLink = '/weapons/pistols/';

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
        <Pistols page={page || 1} />
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
