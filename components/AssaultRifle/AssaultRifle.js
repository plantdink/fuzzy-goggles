import Link from 'next/link';
import { DamageTag, DamageTagText } from '../DamageTag';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function AssaultRifle({ assaultRifle }) {
  return (
    <>
      <ListItem>
        <DamageTagText>Damage Level 40</DamageTagText>
        <DamageTag>{assaultRifle.damageLevel40}</DamageTag>
        <img
          src={assaultRifle.image?.image.publicUrlTransformed}
          alt={assaultRifle.model}
        />
        <ListTitle>
          <Link href={`/weapons/assaultRifle/${assaultRifle.id}`}>
            {assaultRifle.model}
          </Link>
        </ListTitle>
      </ListItem>
    </>
  );
}
