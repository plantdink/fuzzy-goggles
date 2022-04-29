import { gql } from '@apollo/client';
import { stringToParagraphs } from '../../lib/displayStrings';

export const SINGLE_GEARSET_QUERY = gql`
  query SINGLE_GEARSET_QUERY($id: ID!) {
    allGearsets(where: { id: $id }) {
      id
      name
      coreAttribute
      coreAttributeValueLevel40
      coreAttributeValueWT5
      setBonusOne
      setBonusTwo
      setBonusName
      setBonusThree
      setBackpackTalentName
      setBackpackTalent
      setChestTalentName
      setChestTalent
      image {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      notes
    }
  }
`;

export default function SingleGearset({ gearset }) {
  return (
    <>
      <div className="single-gear-item__content" data-testid="testGearset">
        <div className="single-item__details">
          {stringToParagraphs(gearset.notes)}
          <table>
            <thead>
              <tr className="single-gear-item__title-bar">
                <td className="single-gear-item__subheading">
                  Core Attribute Type - {gearset.coreAttribute}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Level 40</th>
                <td>+ {gearset.coreAttributeValueLevel40}</td>
              </tr>
              <tr>
                <th scope="row">World Tier 5</th>
                <td>+ {gearset.coreAttributeValueWT5}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr className="single-gear-item__title-bar">
                <td className="single-gear-item__subheading">
                  Gear Set Bonuses
                </td>
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
                <td>{gearset.setBonusOne}</td>
              </tr>
              <tr>
                <th scope="row" className="single-gear-item__sub-subheading">
                  2 Piece
                </th>
                <td>{gearset.setBonusTwo}</td>
              </tr>
              <tr>
                <th scope="row" className="single-gear-item__sub-subheading">
                  3 Piece
                </th>
                <td>
                  {gearset.setBonusName}: {gearset.setBonusThree}
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr className="single-gear-item__title-bar">
                <td className="single-gear-item__subheading">
                  Gear Set Talents
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Whilst wearing:</td>
              </tr>
              <tr>
                <th scope="row" className="single-gear-item__sub-subheading">
                  Chest
                </th>
                <td>
                  {gearset.setChestTalentName}: {gearset.setChestTalent}
                </td>
              </tr>
              <tr>
                <th scope="row" className="single-gear-item__sub-subheading">
                  Backpack
                </th>
                <td>
                  {gearset.setBackpackTalentName}: {gearset.setBackpackTalent}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="item-image" data-testid="testGearsetImage">
          <img
            className="standard-item"
            id="gearset-page__image"
            src={gearset.image?.image.publicUrlTransformed}
            alt={gearset.image?.altText}
          />
        </div>
      </div>
    </>
  );
}
