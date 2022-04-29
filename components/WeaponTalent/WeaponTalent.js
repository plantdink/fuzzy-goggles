import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function WeaponTalent({ weaponTalent }) {
  return (
    <ListItem>
      <img
        src={weaponTalent.image?.image.publicUrlTransformed}
        alt={`${weaponTalent.name} talent`}
      />
      <ListTitle>
        <Link href={`/talents/weaponTalent/${weaponTalent.id}`}>
          {weaponTalent.name}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
