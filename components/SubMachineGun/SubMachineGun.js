import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function SubMachineGun({ subMachineGun }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{subMachineGun.damageLevel40}</DamageTag>
      <img
        src={subMachineGun.image?.image.publicUrlTransformed}
        alt={subMachineGun.model}
      />
      <ListTitle>
        <Link href={`/weapons/subMachineGun/${subMachineGun.id}`}>
          {subMachineGun.model}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
