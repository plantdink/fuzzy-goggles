import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function MarksmanRifle({ marksmanRifle }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{marksmanRifle.damageLevel40}</DamageTag>
      <img
        src={marksmanRifle.image?.image.publicUrlTransformed}
        alt={marksmanRifle.model}
      />
      <ListTitle>
        <Link href={`/weapons/marksmanRifle/${marksmanRifle.id}`}>
          {marksmanRifle.model}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
