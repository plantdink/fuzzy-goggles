import { useRouter } from 'next/dist/client/router';
import MarksmanRifles from '../../../components/MarksmanRifles';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function MarksmanRiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Marksman Rifle';
  const weaponLink = '/weapons/marksmanRifles/';

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
        <MarksmanRifles page={page || 1} />
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
