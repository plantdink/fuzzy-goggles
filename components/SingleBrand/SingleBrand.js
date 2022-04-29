import { gql } from '@apollo/client';
import { stringToParagraphs } from '../../lib/displayStrings';

export const SINGLE_BRAND_QUERY = gql`
  query SINGLE_BRAND_QUERY($id: ID!) {
    allBrands(where: { id: $id }) {
      id
      name
      coreAttribute
      coreAttributeValueLevel40
      coreAttributeValueWT5
      setBonusOne
      setBonusTwo
      setBonusThree
      image {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      notes
      armourTalent {
        id
        name
        piece
        descriptionPVE
        isNamed
        isExotic
        image {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
        namedArmourPiece {
          id
          name
        }
      }
      armourType {
        id
        name
        piece
        isNamed
        image {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleBrand({ brand }) {
  return (
    <>
      <div className="single-gear-item__content" data-testid="testBrand">
        <div className="single-gear-item__details">
          {stringToParagraphs(brand.notes)}
          <table>
            <thead className="single-gear-item__title-bar">
              <tr>
                <th className="single-gear-item__subheading">
                  Core Attribute Type - {brand.coreAttribute}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Level 40</th>
                <td>+ {brand.coreAttributeValueLevel40}</td>
              </tr>
              <tr>
                <th scope="row">World Tier 5</th>
                <td>+ {brand.coreAttributeValueWT5}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead className="single-gear-item__title-bar">
              <tr>
                <th className="single-gear-item__subheading">Set Bonuses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Whilst wearing:</td>
              </tr>
              <tr>
                <th scope="row" className="single-gear-item__sub-subheading">
                  1 Piece
                </th>
                <td>{brand.setBonusOne}</td>
              </tr>
              <tr>
                <th scope="row">2 Piece</th>
                <td>{brand.setBonusTwo}</td>
              </tr>
              <tr>
                <th scope="row">3 Piece</th>
                <td>{brand.setBonusThree}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="item-image" data-testid="testImage">
          <img
            className="standard-item"
            id="brand-page__image"
            alt={brand.image?.altText}
            src={brand.image?.image.publicUrlTransformed}
          />
        </div>
      </div>
    </>
  );
}
