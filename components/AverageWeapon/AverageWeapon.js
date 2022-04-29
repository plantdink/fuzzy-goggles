import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function AverageWeapon({ averageWeapon }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{averageWeapon.damageLevel40}</DamageTag>
      <img
        src={averageWeapon.image?.image.publicUrlTransformed}
        alt={averageWeapon.class}
      />
      <ListTitle>
        <Link href={`/weapons/averageWeapon/${averageWeapon.id}`}>
          {averageWeapon.class}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
