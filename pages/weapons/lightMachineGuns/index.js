import { useRouter } from 'next/dist/client/router';
import LightMachineGuns from '../../../components/LightMachineGuns';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';

export default function LightMachineGunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Light Machine Gun';
  const weaponLink = '/weapons/lightMachineGuns/';

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
        <LightMachineGuns page={page || 1} />
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
