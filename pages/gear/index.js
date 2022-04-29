import { Spacer } from '../../components/styles/GridStyles';
import HeadSEOTag from '../../components/HeadSEOTag';
import Gear from '../../components/Armour';

export default function gear() {
  return (
    <>
      <HeadSEOTag string="Equipment" />
      <Spacer>
        <Gear />
      </Spacer>
    </>
  );
}
