import { Spacer } from '../../components/styles/GridStyles';
import Exotics from '../../components/Exotics';
import HeadSEOTag from '../../components/HeadSEOTag';

export default function exotics() {
  return (
    <>
      <HeadSEOTag string="Exotic Equipment" />
      <Spacer>
        <Exotics />
      </Spacer>
    </>
  );
}
