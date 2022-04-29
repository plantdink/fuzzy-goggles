import { gql } from '@apollo/client';
import styled from 'styled-components';
import {
  displayPercentage,
  humanReadableNumber,
} from '../../lib/displayNumbers';

export const SingleGearItemStyle = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-width: var(--maxWidth);
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  margin-bottom: 3rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;

  .title-icon-container {
    align-self: end;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
    right: 40px;
    top: 18px;
    z-index: 1;
  }

  .single-gear-item__icon-image {
    justify-self: center;
    align-self: end;
    position: absolute;
    z-index: 1;
    right: 35px;
    top: 25px;
    width: clamp(2vw, 4vw, 40px);
    object-fit: contain;
  }

  .multiple-gear-item__icon-image {
    justify-self: center;
    align-self: end;
    position: absolute;
    z-index: 1;
    right: -3px;
    top: 4px;
    width: clamp(2vw, 6vw, 40px);
    object-fit: contain;

    /* position: absolute;
    top: 3px;
    width: 50px;
    object-fit: contain; */
  }

  .single-gear-item__content {
    display: flex;
  }

  .single-gear-item__sub-content {
    margin-top: 2rem;
  }

  .single-gear-item__details {
    flex-direction: column;
  }

  .item-image {
    img {
      max-width: clamp(10vw, 25vw, 150px);
      object-fit: contain;
    }
  }

  .single-gear-item__title-bar {
    transform: skew(7deg);
    margin-top: 2rem;
  }
  .single-gear-item__title-bar:first-child {
    margin-top: 0rem;
  }

  .single-gear-item__heading {
    flex: auto;
    flex-grow: 1;
    margin: 0 0 1rem 0;
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    background: var(--orange);
    line-height: 1.3;
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--text);
    padding: 0 1rem;
  }

  .single-gear-item__subheading {
    flex: auto;
    margin-top: 1rem;
    margin-top: -3rem;
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    background: var(--orange);
    display: inline;
    line-height: 2;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text);
    padding: 0 1rem;
  }

  .single-gear-item__subheading:first-child {
    margin-top: 0rem;
  }

  .single-gear-item__h3subheading {
    margin: 0;
    margin-top: -3rem;
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    background: var(--orange);
    display: inline;
    line-height: 2;
    font-size: clamp(1rem, 3vw, 1.8rem);
    font-weight: 600;
    color: var(--text);
    padding: 0 1rem;
  }

  .single-gear-item__sub-subheading {
    flex: auto;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.3;
  }

  .single-gear-item__intel {
    list-style-type: circle;
    list-style-position: inside;
    padding-bottom: 1rem;
  }

  .single-gear-item__intel > li {
    padding: 0.5rem 0 0 1rem;
  }

  ul {
    margin: 0;
    color: var(--text);
    font-weight: 400;
    font-size: 1.6rem;
    padding: 0;
    list-style-type: none;
  }

  li {
    padding: 0.5rem 0 0 1.5rem;
  }

  p {
    color: var(--text);
    justify-self: start;
    flex: auto;
    padding: 0 1rem 0 1rem;
    margin: 0.5rem 0;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.3;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }

  table {
    table-layout: fixed;
    width: 100%;
    line-height: 1.3;
    border-collapse: collapse;
    color: var(--text);
    font-size: 1.6rem;
    font-variant-numeric: tabular-nums;
  }

  th {
    font-weight: 500;
  }

  th,
  td {
    padding: 0.5rem 2rem;
    text-align: left;
    vertical-align: baseline;
  }

  thead th:nth-child(1) {
    width: 20%;
  }

  thead th:nth-child(2) {
    width: 20%;
  }

  thead th:nth-child(3) {
    width: 20%;
  }

  thead th:nth-child(4) {
    width: 20%;
  }

  blockquote {
    color: var(--text);
    margin: 0.75rem 0;
    padding: 0 1rem;
    font-weight: 300;
    font-size: 1.6rem;
  }

  .standard-item {
    background: var(--orange);
  }

  .named-item {
    background: var(--namedGold);
  }

  .gearset-item {
    background: var(--gearsetGreen);
  }

  .exotic-item {
    background: var(--exoticOrange);
  }

  @media (max-width: 35em) {
    padding: 0;
    .single-gear-item__details {
      flex-direction: column;
    }
    .single-gear-item__content {
      flex-direction: column;
    }
  }
`;

export const SINGLE_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_ARMOUR_PIECE_QUERY($id: ID!) {
    allArmourTypes(where: { id: $id }) {
      id
      name
      piece
      modSlots
      coreAttributeTypeOne
      coreAttributeTypeTwo
      coreAttributeTypeThree
      maxCoreDamageLevel40
      maxCoreArmourLevel40
      maxCoreSkillTierLevel40
      maxCoreValueDamageLevel30
      maxCoreArmourLevel30
      maxCoreSkillTierLevel30
      offensiveAttributeOneLevel40
      offensiveAttributeTwoLevel40
      offensiveAttributeThreeLevel40
      offensiveAttributeFourLevel40
      offensiveAttributeOneMaxValueLevel40
      offensiveAttributeTwoMaxValueLevel40
      offensiveAttributeThreeMaxValueLevel40
      offensiveAttributeFourMaxValueLevel40
      offensiveAttributeOneMaxValueLevel30
      offensiveAttributeTwoMaxValueLevel30
      offensiveAttributeThreeMaxValueLevel30
      offensiveAttributeFourMaxValueLevel30
      defensiveAttributeOneLevel40
      defensiveAttributeTwoLevel40
      defensiveAttributeThreeLevel40
      defensiveAttributeFourLevel40
      defensiveAttributeOneMaxValueLevel40
      defensiveAttributeTwoMaxValueLevel40
      defensiveAttributeThreeMaxValueLevel40
      defensiveAttributeFourMaxValueLevel40
      defensiveAttributeOneMaxValueLevel30
      defensiveAttributeTwoMaxValueLevel30
      defensiveAttributeThreeMaxValueLevel30
      defensiveAttributeFourMaxValueLevel30
      utilityAttributeOneLevel40
      utilityAttributeTwoLevel40
      utilityAttributeThreeLevel40
      utilityAttributeFourLevel40
      utilityAttributeOneMaxValueLevel40
      utilityAttributeTwoMaxValueLevel40
      utilityAttributeThreeMaxValueLevel40
      utilityAttributeFourMaxValueLevel40
      utilityAttributeOneMaxValueLevel30
      utilityAttributeTwoMaxValueLevel30
      utilityAttributeThreeMaxValueLevel30
      utilityAttributeFourMaxValueLevel30
      uniqueAttribute
      notes
      flavourText
      availableWT5
      isNamed
      image {
        id
        altText
        image {
          publicUrlTransformed
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
      }
    }
  }
`;

export const SINGLE_EXOTIC_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_EXOTIC_ARMOUR_PIECE_QUERY($id: ID!) {
    allExoticArmourPieces(where: { id: $id }) {
      id
      name
      piece
      modSlots
      coreOne
      coreTwo
      coreThree
      maxCoreOneValueLevel40
      maxCoreTwoValueLevel40
      maxCoreThreeValueLevel40
      maxCoreOneValueLevel30
      attributeOneType
      attributeTwoType
      attributeOneValueLevel40
      attributeTwoValueLevel40
      attributeOneValueLevel30
      attributeTwoValueLevel30
      flavourText
      notes
      availableWT5
      image {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
      exoticArmourTalent {
        id
        name
        piece
        isExotic
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

export default function SingleArmourPiece({ armourPiece }) {
  return (
    <>
      <>
        <img
          className="single-gear-item__icon-image"
          src={armourPiece.image?.image.publicUrlTransformed}
          alt={armourPiece.image?.altText}
          data-testid="itemIcon"
        />
        <>
          <div>
            <p data-testid="itemPiece">{armourPiece.piece}</p>
            {armourPiece.notes !== '' && (
              <p data-testid="itemNotes">{armourPiece.notes}</p>
            )}
          </div>
        </>

        {/* ----------Exotic Items layout ---------- */}
        <>
          {armourPiece.__typename === 'ExoticArmourPiece' && (
            <>
              <div className="single-gear-item__content">
                <div className="single-gear-item__details">
                  <table data-testid="singleExoticArmourPieceLvl40">
                    <thead>
                      <tr className="single-gear-item__title-bar">
                        <th className="single-gear-item__subheading">
                          Level 40 stats
                        </th>
                      </tr>
                      <tr className="single-gear-item__title-bar">
                        <th className="single-gear-item__h3subheading">
                          Core Attribute
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{armourPiece.coreOne}</td>
                        <td>+ {armourPiece.maxCoreOneValueLevel40}</td>
                      </tr>
                      {armourPiece.coreTwo !== '' && (
                        <tr>
                          <td>{armourPiece.coreTwo}</td>
                          <td>+ {armourPiece.maxCoreTwoValueLevel40}</td>
                        </tr>
                      )}
                      {armourPiece.coreTwo !== '' && (
                        <tr>
                          <td>{armourPiece.coreThree}</td>
                          <td>
                            + {armourPiece.maxCoreThreeValueLevel40} Skill Tier
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {armourPiece.attributeOneType !== '' && (
                    <table data-testid="singleExoticArmourPieceLvl40Attributes">
                      <thead>
                        <tr className="single-gear-item__title-bar">
                          <th className="single-gear-item__h3subheading">
                            Minor Attributes
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>{armourPiece.attributeOneType}</td>
                          <td>+ {armourPiece.attributeOneValueLevel40}</td>
                        </tr>

                        <tr>
                          <td>{armourPiece.attributeTwoType}</td>
                          <td>+ {armourPiece.attributeTwoValueLevel40}</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>

                {armourPiece.availableWT5 === 'Yes' && (
                  <div className="single-gear-item__details">
                    <table data-testid="singleExoticArmourPieceWT5">
                      <thead>
                        <tr className="single-gear-item__title-bar">
                          <th className="single-gear-item__subheading">
                            World Tier 5 Stats
                          </th>
                        </tr>
                        <tr className="single-gear-item__title-bar">
                          <th className="single-gear-item__h3subheading">
                            Core Attribute
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>{armourPiece.coreOne}</td>
                          <td>+ {armourPiece.maxCoreOneValueLevel30}</td>
                        </tr>
                      </tbody>
                    </table>

                    <table data-testid="singleExoticArmourPieceWT5Attributes">
                      <thead>
                        <tr className="single-gear-item__title-bar">
                          <td className="single-gear-item__h3subheading">
                            Minor Attributes
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{armourPiece.attributeOneType}</td>
                          <td>+ {armourPiece.attributeOneValueLevel30}</td>
                        </tr>
                        <tr>
                          <td>{armourPiece.attributeTwoType}</td>
                          <td>+ {armourPiece.attributeTwoValueLevel30}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </>

        {/* -------- High end & named items Level 40 -------- */}
        <>
          {armourPiece.coreAttributeTypeOne && (
            <>
              <div
                className="single-gear-item__content"
                data-testid="singleArmourPiece"
              >
                <div className="single-gear-item__details">
                  <table data-testid="singleYellowArmourPiece">
                    <thead>
                      <tr className="single-gear-item__title-bar">
                        <th className="single-gear-item__subheading">
                          Level 40 Stats
                        </th>
                      </tr>
                      <tr className="single-gear-item__title-bar">
                        <th className="single-gear-item__subheading">
                          Core Attributes
                        </th>
                      </tr>
                      <tr>
                        <td />
                        <td>Max Value</td>
                      </tr>
                    </thead>
                    <tbody>
                      {armourPiece.coreAttributeTypeOne !== 'N/A' && (
                        <tr data-testid="itemCoreOneType">
                          <td>{armourPiece.coreAttributeTypeOne}</td>
                          <td>
                            +{' '}
                            {displayPercentage(
                              armourPiece.maxCoreDamageLevel40.toString()
                            )}
                            %
                          </td>
                        </tr>
                      )}
                      {armourPiece.coreAttributeTypeTwo !== 'N/A' && (
                        <tr data-testid="itemCoreTwoType">
                          <td>{armourPiece.coreAttributeTypeTwo}</td>
                          <td>
                            +{' '}
                            {humanReadableNumber(
                              armourPiece.maxCoreArmourLevel40.toString()
                            )}
                          </td>
                        </tr>
                      )}
                      {armourPiece.coreAttributeTypeThree !== 'N/A' && (
                        <tr data-testid="itemCoreThreeType">
                          <td>{armourPiece.coreAttributeTypeThree}</td>
                          <td>
                            + {armourPiece.maxCoreSkillTierLevel40.toString()}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {armourPiece.coreAttributeTypeOne && (
                    <>
                      <table>
                        <thead className="single-gear-item__title-bar">
                          <tr>
                            <th className="single-gear-item__h3subheading">
                              Offensive Minor Attributes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-testid="itemOffAttrOneMax40Value">
                            <td>{armourPiece.offensiveAttributeOneLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeOneMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemOffAttrTwoMax40Value">
                            <td>{armourPiece.offensiveAttributeTwoLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeTwoMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemOffAttrThreeMax40Value">
                            <td>
                              {armourPiece.offensiveAttributeThreeLevel40}
                            </td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeThreeMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemOffAttrFourMax40Value">
                            <td>{armourPiece.offensiveAttributeFourLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeFourMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}

                  {armourPiece.coreAttributeTypeTwo && (
                    <>
                      <table>
                        <thead className="single-gear-item__title-bar">
                          <tr>
                            <th className="single-gear-item__h3subheading">
                              Defensive Minor Attributes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-testid="itemDefAttrOneMax40Value">
                            <td>{armourPiece.defensiveAttributeOneLevel40}</td>
                            <td>
                              +{' '}
                              {humanReadableNumber(
                                armourPiece.defensiveAttributeOneMaxValueLevel40.toString()
                              )}{' '}
                              per second
                            </td>
                          </tr>
                          <tr data-testid="itemDefAttrTwoMax40Value">
                            <td>{armourPiece.defensiveAttributeTwoLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.defensiveAttributeTwoMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemDefAttrThreeMax40Value">
                            <td>
                              {armourPiece.defensiveAttributeThreeLevel40}
                            </td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.defensiveAttributeThreeMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemDefAttrFourMax40Value">
                            <td>{armourPiece.defensiveAttributeFourLevel40}</td>
                            <td>
                              +{' '}
                              {humanReadableNumber(
                                armourPiece.defensiveAttributeFourMaxValueLevel40.toString()
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}

                  {armourPiece.coreAttributeTypeTwo && (
                    <>
                      <table>
                        <thead className="single-gear-item__title-bar">
                          <tr>
                            <td className="single-gear-item__h3subheading">
                              Utility Minor Attributes
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-testid="itemUtilAttrOneMax40Value">
                            <td>{armourPiece.utilityAttributeOneLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeOneMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemUtilAttrTwoMax40Value">
                            <td>{armourPiece.utilityAttributeTwoLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeTwoMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemUtilAttrThreeMax40Value">
                            <td>{armourPiece.utilityAttributeThreeLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeThreeMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemUtilAttrFourMax40Value">
                            <td>{armourPiece.utilityAttributeFourLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeFourMaxValueLevel40.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}
                </div>

                {/* ------------- World Tier 5 below ----------- */}

                <div className="single-gear-item__details">
                  <table data-testid="singleYellowArmourPieceWT5">
                    <thead>
                      <tr className="single-gear-item__title-bar">
                        <th className="single-gear-item__subheading">
                          World Tier 5 Stats
                        </th>
                      </tr>
                      <tr className="single-gear-item__title-bar">
                        <th className="single-gear-item__subheading">
                          Core Attributes
                        </th>
                      </tr>
                      <tr>
                        <td />
                        <td>Max Value</td>
                      </tr>
                    </thead>
                    <tbody>
                      {armourPiece.coreAttributeTypeOne !== 'N/A' && (
                        <tr data-testid="itemCoreOneTypeWT5">
                          <td>{armourPiece.coreAttributeTypeOne}</td>
                          <td>
                            +{' '}
                            {displayPercentage(
                              armourPiece.maxCoreValueDamageLevel30.toString()
                            )}
                            %
                          </td>
                        </tr>
                      )}
                      {armourPiece.coreAttributeTypeTwo !== 'N/A' && (
                        <tr data-testid="itemCoreTwoTypeWT5">
                          <td>{armourPiece.coreAttributeTypeTwo}</td>
                          <td>
                            +{' '}
                            {humanReadableNumber(
                              armourPiece.maxCoreArmourLevel30.toString()
                            )}
                          </td>
                        </tr>
                      )}
                      {armourPiece.coreAttributeTypeThree !== 'N/A' && (
                        <tr data-testid="itemCoreThreeTypeWT5">
                          <td>{armourPiece.coreAttributeTypeThree}</td>
                          <td>
                            + {armourPiece.maxCoreSkillTierLevel30.toString()}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {armourPiece.coreAttributeTypeOne && (
                    <>
                      <table>
                        <thead className="single-gear-item__title-bar">
                          <tr>
                            <th className="single-gear-item__h3subheading">
                              Offensive Minor Attributes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-testid="itemOffAttrOneMaxWT5Value">
                            <td>{armourPiece.offensiveAttributeOneLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeOneMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemOffAttrTwoMaxWT5Value">
                            <td>{armourPiece.offensiveAttributeTwoLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeTwoMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemOffAttrThreeMaxWT5Value">
                            <td>
                              {armourPiece.offensiveAttributeThreeLevel40}
                            </td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeThreeMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemOffAttrFourMaxWT5Value">
                            <td>{armourPiece.offensiveAttributeFourLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.offensiveAttributeFourMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}

                  {armourPiece.coreAttributeTypeTwo && (
                    <>
                      <table>
                        <thead className="single-gear-item__title-bar">
                          <tr>
                            <th className="single-gear-item__h3subheading">
                              Defensive Minor Attributes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-testid="itemDefAttrOneMaxWT5Value">
                            <td>{armourPiece.defensiveAttributeOneLevel40}</td>
                            <td>
                              +{' '}
                              {humanReadableNumber(
                                armourPiece.defensiveAttributeOneMaxValueLevel30.toString()
                              )}{' '}
                              per second
                            </td>
                          </tr>
                          <tr data-testid="itemDefAttrTwoMaxWT5Value">
                            <td>{armourPiece.defensiveAttributeTwoLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.defensiveAttributeTwoMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemDefAttrThreeMaxWT5Value">
                            <td>
                              {armourPiece.defensiveAttributeThreeLevel40}
                            </td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.defensiveAttributeThreeMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemDefAttrFourMaxWT5Value">
                            <td>{armourPiece.defensiveAttributeFourLevel40}</td>
                            <td>
                              +{' '}
                              {humanReadableNumber(
                                armourPiece.defensiveAttributeFourMaxValueLevel30.toString()
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}

                  {armourPiece.coreAttributeTypeTwo && (
                    <>
                      <table>
                        <thead className="single-gear-item__title-bar">
                          <tr>
                            <td className="single-gear-item__h3subheading">
                              Utility Minor Attributes
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-testid="itemUtilAttrOneMaxWT5Value">
                            <td>{armourPiece.utilityAttributeOneLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeOneMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemUtilAttrTwoMaxWT5Value">
                            <td>{armourPiece.utilityAttributeTwoLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeTwoMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemUtilAttrThreeMaxWT5Value">
                            <td>{armourPiece.utilityAttributeThreeLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeThreeMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                          <tr data-testid="itemUtilAttrFourMaxWT5Value">
                            <td>{armourPiece.utilityAttributeFourLevel40}</td>
                            <td>
                              +{' '}
                              {displayPercentage(
                                armourPiece.utilityAttributeFourMaxValueLevel30.toString()
                              )}{' '}
                              %
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              </div>

              {armourPiece.modSlots > 0 && (
                <>
                  <div className="single-gear-item__title-bar">
                    <h3 className="single-gear-item__h3subheading">
                      Number of Mod Slots
                    </h3>
                  </div>
                  <ul>
                    <li>{armourPiece.modSlots}</li>
                  </ul>
                </>
              )}
            </>
          )}
        </>
      </>
    </>
  );
}
