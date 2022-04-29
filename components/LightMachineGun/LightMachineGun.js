import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function LightMachineGun({ lightMachineGun }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{lightMachineGun.damageLevel40}</DamageTag>
      <img
        src={lightMachineGun.image?.image.publicUrlTransformed}
        alt={lightMachineGun.model}
      />
      <ListTitle>
        <Link href={`/weapons/lightMachineGun/${lightMachineGun.id}`}>
          {lightMachineGun.model}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
