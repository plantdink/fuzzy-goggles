import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function NamedArmourPiece({ armourType }) {
  return (
    <ListItem>
      <img
        src={armourType.image?.image.publicUrlTransformed}
        alt={`${armourType.name} icon`}
      />
      <ListTitle>
        <Link href={`/gear/namedArmourPiece/${armourType.id}`}>
          {armourType.name}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
