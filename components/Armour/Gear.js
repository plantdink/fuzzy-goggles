import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from '../styles/ListStyles';
import {
  brandIconLink,
  gearsetIconLink,
  armourPiecesIconLink,
  namedArmourPiecesIconLink,
} from '../ItemIcons';

export default function Gear() {
  return (
    <>
      <ListStyles>
        <ListItem>
          <img src={brandIconLink} alt="All Brands" />
          <ListTitle>
            <Link href="/gear/brands">Brands</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={gearsetIconLink} alt="All Gear Sets" />
          <ListTitle>
            <Link href="/gear/gearsets">Gear Sets</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={armourPiecesIconLink} alt="All Armour Pieces" />
          <ListTitle>
            <Link href="/gear/armourTypes">Armour Pieces</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={namedArmourPiecesIconLink} alt="All Named Armour Pieces" />
          <ListTitle>
            <Link href="/gear/namedArmourPieces">Named Armour Pieces</Link>
          </ListTitle>
        </ListItem>
      </ListStyles>
    </>
  );
}
