import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function ExoticWeapon({ exoticWeapon }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{exoticWeapon.damageLevel40}</DamageTag>
      <img
        src={exoticWeapon.image?.image.publicUrlTransformed}
        alt={exoticWeapon.model}
      />
      <ListTitle>
        <Link href={`/weapons/exoticWeapon/${exoticWeapon.id}`}>
          {exoticWeapon.model}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
