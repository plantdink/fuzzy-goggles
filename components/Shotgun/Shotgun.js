import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';
import { DamageTag, DamageTagText } from '../DamageTag';

export default function Shotgun({ shotgun }) {
  return (
    <ListItem>
      <DamageTagText>Damage Level 40</DamageTagText>
      <DamageTag>{shotgun.damageLevel40}</DamageTag>
      <img
        src={shotgun.image?.image.publicUrlTransformed}
        alt={shotgun.model}
      />
      <ListTitle>
        <Link href={`/weapons/shotgun/${shotgun.id}`}>{shotgun.model}</Link>
      </ListTitle>
    </ListItem>
  );
}
