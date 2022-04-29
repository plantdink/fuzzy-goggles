import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function Rifle({ rifle }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{rifle.damageLevel40}</DamageTag>
      <img src={rifle.image?.image.publicUrlTransformed} alt={rifle.model} />
      <ListTitle>
        <Link href={`/weapons/rifle/${rifle.id}`}>{rifle.model}</Link>
      </ListTitle>
    </ListItem>
  );
}
