import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function Gearset({ gearset }) {
  return (
    <ListItem>
      <img
        src={gearset.image?.image.publicUrlTransformed}
        alt={`${gearset.name} gear set`}
      />
      <ListTitle>
        <Link href={`/gear/gearset/${gearset.id}`}>{gearset.name}</Link>
      </ListTitle>
    </ListItem>
  );
}
