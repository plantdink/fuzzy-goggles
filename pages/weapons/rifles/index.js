import { useRouter } from 'next/dist/client/router';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import Rifles from '../../../components/Rifles';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function RiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Rifle';
  const weaponLink = '/weapons/rifles/';

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
        <Rifles page={page || 1} />
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
