import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function ArmourTalent({ armourTalent }) {
  return (
    <ListItem>
      <img
        src={armourTalent.image?.image.publicUrlTransformed}
        alt="Generic armour talent"
      />
      <ListTitle>
        <Link href={`/talents/armourTalent/${armourTalent.id}`}>
          {armourTalent.name}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
