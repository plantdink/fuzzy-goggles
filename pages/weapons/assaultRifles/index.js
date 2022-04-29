import { useRouter } from 'next/dist/client/router';
import AssaultRifles from '../../../components/AssaultRifles';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function AssaultRiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Assault Rifle';
  const weaponLink = '/weapons/assaultRifles/';

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
        <AssaultRifles page={page || 1} />
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
