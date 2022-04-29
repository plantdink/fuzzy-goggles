import Link from 'next/link';
import { LinkStyles, TitleLink } from '../LinkSmallBrand';
import { lowerCaseLink } from '../../lib/displayStrings';
import { chestIcon, backpackIcon } from '../ItemIcons';

// this will create a link to a piece

export default function LinkSmallPiece({ piece }) {
  const classArray = [];

  // set classArray for a chest talent, link to generic chest
  if (
    piece.__typename === 'ArmourType' &&
    piece.piece === 'Chest' &&
    piece.isNamed === 'NO' &&
    piece.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${piece.piece}`,
      link: `/gear/armourType/61e4fa8b4568c11c0804cd2e`,
      image: chestIcon,
      id: `620b16903f985c08074b794c`,
    });
  }

  if (
    piece.__typename === 'ArmourTalent' &&
    piece.piece === 'Chest' &&
    piece.isNamed === 'NO' &&
    piece.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${piece.piece}`,
      link: `/gear/armourType/61e4fa8b4568c11c0804cd2e`,
      image: chestIcon,
      id: `620b16903f985c08074b794c`,
    });
  }

  // set classArray for a backpack talent, link to generic backpack
  if (
    piece.__typename === 'ArmourType' &&
    piece.piece === 'Backpack' &&
    piece.isNamed === 'NO' &&
    piece.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${piece.piece}`,
      link: `/gear/armourType/61e4fb8f4568c11c0804cd7c`,
      image: backpackIcon,
      id: `620b16713f985c08074b7887`,
    });
  }

  if (
    piece.__typename === 'ArmourTalent' &&
    piece.piece === 'Backpack' &&
    piece.isNamed === 'NO' &&
    piece.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${piece.piece}`,
      link: `/gear/armourType/61e4fb8f4568c11c0804cd7c`,
      image: backpackIcon,
      id: `620b16713f985c08074b7886`,
    });
  }

  // set classArray for a Named armour talent, link to that specific item
  if (piece.__typename === 'ArmourType' && piece.isNamed === 'YES') {
    classArray.push({
      title: `${piece.name}`,
      link: `/gear/${lowerCaseLink(piece.__typename)}/${piece.id}`,
      image: `${
        piece.image?.image.publicUrlTransformed ||
        (piece.piece === 'Chest' ? chestIcon : backpackIcon)
      }`,
      id: `${piece.id}`,
    });
  }

  if (piece.__typename === 'ArmourTalent' && piece.isNamed === 'YES') {
    classArray.push({
      title: `${piece.namedArmourPiece.name}`,
      link: `/gear/armourType/${piece.namedArmourPiece.id}`,
      image: `${piece.piece === 'Chest' ? chestIcon : backpackIcon}`,
      id: `${piece.id}`,
    });
  }

  // set classArray for an Exotic armour talent, link to that specific item
  if (piece.__typename === 'ArmourType' && piece.isExotic === 'YES') {
    classArray.push({
      title: `${piece.exoticArmourPiece[0].name}`,
      link: `/exotics/${lowerCaseLink(piece.exoticArmourPiece[0].__typename)}/${
        piece.exoticArmourPiece[0].id
      }`,
      image: `${piece.piece === 'Chest' ? chestIcon : backpackIcon}`,
      id: `${piece.exoticArmourPiece[0].id}`,
    });
  }

  if (piece.__typename === 'ArmourTalent' && piece.isExotic === 'YES') {
    classArray.push({
      title: `${piece.exoticArmourPiece[0].name}`,
      link: `/exotics/${lowerCaseLink(piece.exoticArmourPiece[0].__typename)}/${
        piece.exoticArmourPiece[0].id
      }`,
      image: `${piece.exoticArmourPiece[0].image?.image.publicUrlTransformed}`,
      id: `${piece.exoticArmourPiece[0].id}`,
    });
  }

  return (
    <>
      {(piece.__typename === 'ArmourType' || 'ArmourTalent') && (
        <>
          <div className="single-gear-item__details">
            {classArray.map((arrayItem) => (
              <LinkStyles key={arrayItem.id}>
                <TitleLink>
                  <Link href={arrayItem.link}>{arrayItem.title}</Link>
                </TitleLink>
                <img
                  className="standard-item"
                  src={arrayItem.image}
                  alt={arrayItem.class}
                />
              </LinkStyles>
            ))}
          </div>
        </>
      )}
    </>
  );
}
