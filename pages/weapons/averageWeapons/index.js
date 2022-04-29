import AverageWeapons from '../../../components/AverageWeapons';
import { Spacer } from '../../../components/styles/GridStyles';
import HeadSEOTag from '../../../components/HeadSEOTag';

export default function AverageWeaponsPage() {
  return (
    <>
      <HeadSEOTag string="All Average Weapons" />
      <Spacer />
      <AverageWeapons />
      <Spacer />
    </>
  );
}
