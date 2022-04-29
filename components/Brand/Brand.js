import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function Brand({ brand }) {
  return (
    <ListItem>
      <img
        src={brand.image?.image.publicUrlTransformed}
        alt={`${brand.name} icon`}
      />
      <ListTitle>
        <Link href={`/gear/brand/${brand.id}`}>{brand.name}</Link>
      </ListTitle>
    </ListItem>
  );
}
