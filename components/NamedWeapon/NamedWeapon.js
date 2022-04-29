import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function NamedWeapon({ namedWeapon }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{namedWeapon.damageLevel40}</DamageTag>
      <img
        src={namedWeapon.image?.image.publicUrlTransformed}
        alt={namedWeapon.model}
      />
      <ListTitle>
        <Link href={`/weapons/namedWeapon/${namedWeapon.id}`}>
          {namedWeapon.model}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
