import { useRouter } from 'next/dist/client/router';
import ExoticWeapons from '../../../components/ExoticWeapons';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function ExoticWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Exotic Weapon';
  const weaponLink = '/weapons/exoticWeapons/';

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
        <ExoticWeapons page={page || 1} />
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
