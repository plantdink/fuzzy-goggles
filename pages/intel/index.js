import ItemColour from '../../components/ItemColour';
import EquipmentBuild from '../../components/EquipmentBuild';
import WeaponClasses from '../../components/WeaponClasses';
import { SingleGearItemStyle } from '../../components/SingleArmourPiece';
import HeadSEOTag from '../../components/HeadSEOTag';

export default function intel() {
  return (
    <>
      <HeadSEOTag string="Intelligence Briefing" />
      <SingleGearItemStyle>
        <WeaponClasses />
        <ItemColour />
        <EquipmentBuild />
      </SingleGearItemStyle>
    </>
  );
}
