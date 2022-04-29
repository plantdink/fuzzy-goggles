import { gql } from '@apollo/client';
import { chestIcon, backpackIcon, weaponTalentIcon } from '../ItemIcons';

export const SINGLE_TALENT_QUERY = gql`
  query SINGLE_TALENT_QUERY($id: ID!) {
    allArmourTalents(where: { id: $id }) {
      id
      name
      piece
      type
      descriptionPVE
      descriptionPVP
      isNamed
      namedItem
      namedArmourPiece {
        id
        piece
        name
        image {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
      exoticArmourPiece {
        id
        name
        image {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
      brand {
        id
        name
        image {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
      isExotic
      exoticItem
      image {
        id
        altText
        image {
          publicUrlTransformed
        }
        altText
      }
    }
    allWeaponTalents(where: { id: $id }) {
      id
      name
      type
      descriptionPVE
      descriptionPVP
      classARTalent
      classLMGTalent
      classMMRTalent
      classPistolTalent
      classRifleTalent
      classShotgunTalent
      classSMGTalent
      isNamed
      isExotic
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      weaponName {
        id
        class
        model
      }
    }
  }
`;

export default function SingleTalent({ singleTalent }) {
  let armourPieceIcon = '';
  if (singleTalent.piece === 'Chest') armourPieceIcon = chestIcon;
  if (singleTalent.piece === 'Backpack') armourPieceIcon = backpackIcon;

  return (
    <>
      <div className="single-gear-item__title-bar">
        <h1 className="single-gear-item__heading">{singleTalent.name}</h1>
      </div>

      {armourPieceIcon !== '' && (
        <img
          className="single-gear-item__icon-image"
          src={armourPieceIcon}
          alt={`${singleTalent.piece} icon`}
        />
      )}

      <>
        <div className="title-icon-container">
          {singleTalent.__typename === 'WeaponTalent' && (
            <img
              className="multiple-gear-item__icon-image"
              src={weaponTalentIcon}
              alt="Weapon Talent icon"
            />
          )}
        </div>
      </>

      <div className="single-gear-item__content">
        <div className="single-item__details">
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Characteristics</h2>
          </div>
          {singleTalent.__typename === 'ArmourTalent' && (
            <>
              <p>{singleTalent.type}</p>
            </>
          )}
          <p>
            <span className="single-gear-item__sub-subheading">PVE:</span>{' '}
            {singleTalent.descriptionPVE}
          </p>
          {singleTalent.descriptionPVP && (
            <>
              <p>
                <span className="single-gear-item__sub-subheading">PVP:</span>{' '}
                {singleTalent.descriptionPVP}
              </p>
            </>
          )}
        </div>

        <div className="item-image">
          <img
            className="standard-item"
            src={singleTalent.image?.image.publicUrlTransformed}
            alt={singleTalent.image?.altText}
          />
        </div>
      </div>
    </>
  );
}
