import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function pistol({ pistol }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{pistol.damageLevel40}</DamageTag>
      <img src={pistol.image?.image.publicUrlTransformed} alt={pistol.model} />
      <ListTitle>
        <Link href={`/weapons/pistol/${pistol.id}`}>{pistol.model}</Link>
      </ListTitle>
    </ListItem>
  );
}
