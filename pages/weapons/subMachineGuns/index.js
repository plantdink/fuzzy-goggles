import { useRouter } from 'next/dist/client/router';
import Pagination, {
  PaginationContainerStyles,
} from '../../../components/Pagination';
import { ContentContainerStyles } from '../../../components/styles/ContainerStyles';
import SubMachineGuns from '../../../components/SubMachineGuns';

export default function SubMachineGunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Sub Machine Gun';
  const weaponLink = '/weapons/subMachineGuns/';

  return (
    <>
      <PaginationContainerStyles>
        <Pagination
          queryString={queryString}
          weaponLink={weaponLink}
          page={page || 1}
        />
      </PaginationContainerStyles>
      <ContentContainerStyles>
        <SubMachineGuns page={page || 1} />
      </ContentContainerStyles>
      <PaginationContainerStyles>
        <Pagination
          queryString={queryString}
          weaponLink={weaponLink}
          page={page || 1}
        />
      </PaginationContainerStyles>
    </>
  );
}
