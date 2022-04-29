import Link from 'next/link';
import { LinkStyles, TitleLink } from '../LinkSmallBrand';
import { lowerCaseLink } from '../../lib/displayStrings';
import { chestIcon, backpackIcon } from '../ItemIcons';

export default function LinkSmallTalent({ talent }) {
  const classArray = [];

  // set classArray for a chest talent, link to specific talent
  if (
    talent.__typename === 'ArmourTalent' &&
    talent.piece === 'Chest' &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${talent.name}`,
      link: `/talents/armourTalent/${talent.id}`,
      image: `${talent.image?.image.publicUrlTransformed || chestIcon}`,
      id: `${talent.id}`,
    });
  }

  // set classArray for a backpack talent, link to specific talent
  if (
    talent.__typename === 'ArmourTalent' &&
    talent.piece === 'Backpack' &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${talent.name}`,
      link: `/talents/armourTalent/${talent.id}`,
      image: `${talent.image?.image.publicUrlTransformed || backpackIcon}`,
      id: `${talent.id}`,
    });
  }

  // set classArray for a Named armour talent, link to that specific item
  if (talent.__typename === 'ArmourTalent' && talent.isNamed === 'YES') {
    classArray.push({
      title: `${talent.name}`,
      link: `/talents/${lowerCaseLink(talent.__typename)}/${talent.id}`,
      image: `${
        talent.image?.image.publicUrlTransformed ||
        (talent.piece === 'Chest' ? chestIcon : backpackIcon)
      }`,
      id: `${talent.id}`,
    });
  }

  // set classArray for an Exotic armour talent, link to that specific item
  if (talent.__typename === 'ArmourTalent' && talent.isExotic === 'YES') {
    classArray.push({
      title: `${talent.name}`,
      link: `/talents/${lowerCaseLink(talent.__typename)}/${talent.id}`,
      image: `${talent.image?.image.publicUrlTransformed}`,
      id: `${talent.id}`,
    });
  }

  return (
    <>
      {talent.__typename === 'ArmourTalent' && (
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
