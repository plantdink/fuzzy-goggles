import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function ArmourType({ armourType }) {
  return (
    <ListItem>
      <img
        src={armourType.image?.image.publicUrlTransformed}
        alt={`${armourType.name} icon`}
      />
      <ListTitle>
        <Link href={`/gear/armourType/${armourType.id}`}>
          {armourType.name}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
