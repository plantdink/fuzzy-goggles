import React from 'react';
import { gql } from '@apollo/client';
import styled from 'styled-components';
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../../lib/displayNumbers';
import { deAbbreviate } from '../../lib/abbreviationsDictionary';

export const SingleWeaponStyles = styled.div`
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

  .single-weapon__content {
    display: flex;
    max-width: var(--maxWidth);
    justify-content: center;
    align-items: top;
    gap: 2rem;
    background: white;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .single-weapon__sub-content {
    display: flex;
    justify-content: space-between;
  }

  .single-weapon__details {
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .single-weapon__title-bar {
    transform: skew(7deg);
    margin-bottom: 1rem;
  }

  .single-weapon__heading {
    margin: 0 1rem;
    margin-top: -3rem;
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    font-size: clamp(2rem, 5vw, 4rem);
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  .single-weapon__section-heading {
    margin: 0 1rem;
    margin-top: -3rem;
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    font-size: clamp(2rem, 4vw, 3.5rem);
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
  }

  .single-weapon__subheading {
    margin: 0 1rem;
    /* margin-top: 0rem; */
    background: var(--orange);
    display: inline;
    line-height: 2;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: 600;
    color: var(--text);
    /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
    padding: 0 1rem;
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
    margin: 0.75rem 0;
    /* padding: 0.5rem 0 0 1.5rem; */
    padding: 0 2.4rem;
  }

  p {
    color: var(--text);
    margin: 0.75rem 0;
    font-weight: 400;
    padding: 0 2.4rem;
    font-size: 1.6rem;
    line-height: 1.3;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    color: var(--text);
    line-height: 1.3;
    font-size: 1.6rem;
    font-variant-numeric: tabular-nums;
  }

  th {
    font-weight: 500;
    /* width: 100%; */
  }

  th,
  td {
    padding: 0.5rem 2rem;
    text-align: left;
    vertical-align: baseline;
  }

  /* thead th:nth-child(1) {
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
  } */

  blockquote {
    color: var(--text);
    margin: 0.85rem 0;
    padding: 0 2.4rem;
    font-weight: 300;
    font-size: 1.6rem;
  }

  small {
    color: var(--text);
    font-size: 1.2rem;
    padding: 0 2.4rem;
  }

  .named-weapon {
    background: var(--namedGold);
  }

  .exotic-weapon {
    background: var(--exoticOrange);
  }

  @media (max-width: 35em) {
    padding: 0;
    .single-weapon__content {
      padding-top: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }

    .single-weapon__sub-content {
      flex-direction: column;
    }
  }
`;

export const SINGLE_WEAPON_QUERY = gql`
  query SINGLE_WEAPON_QUERY($id: ID!) {
    allWeapons(where: { id: $id }) {
      id
      class
      model
      family
      magazineSize
      rpm
      modSlots
      reloadSpeed
      reloadSpeedFromEmpty
      accuracy
      stability
      optimalRange
      maxRange
      headshotMultiplier
      weaponBonusType
      maxBonusValue
      weaponBonusTypeTwo
      maxBonusTwoValue
      damageLevel40
      damageWt5
      flavourText
      isNamed
      isExotic
      weaponTalent {
        id
        name
        image {
          id
          image {
            publicUrlTransformed
          }
        }
      }
      exoticWeaponAttachment {
        id
        name
        attachmentSlot
        opticsSlotBonusType
        opticsBonusValueLevel40
        opticsValueWT5
        magazineSlotBonusType
        magazineValueLevel40
        magazineValueWT5
        underbarrelSlotBonusType
        underbarrelValueLevel40
        underbarrelValueWT5
        muzzleSlotBonusType
        muzzleValueLevel40
        muzzleValueWT5
      }
      averageWeapon {
        id
        class
        classBonusType
        maxClassBonusValue
        modSlots
        rpm
        magazineSize
        headshotMultiplier
        accuracy
        stability
        optimalRange
        maxRange
        reloadSpeed
        reloadSpeedFromEmpty
        damageLevel40
        damageWT5
        weaponTalent {
          id
          name
          image {
            id
            image {
              publicUrlTransformed
            }
          }
        }
        weaponThirdAttribute {
          id
          attribute
          valueLevel40
          valueWT5
          classARAttribute
          classLMGAttribute
          classMMRAttribute
          classPistolAttribute
          classRifleAttribute
          classShotgunAttribute
          classSMGAttribute
        }
      }
    }
  }
`;

export default function SingleWeapon({ weapon }) {
  return (
    <>
      <div className="single-weapon__content">
        <div className="single-weapon__details">
          <div />
          <table>
            <thead className="single-weapon__title-bar">
              <tr>
                <th className="single-weapon__subheading">Base Damage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Level 40</th>
                <td>{humanReadableNumber(weapon.damageLevel40)}</td>
              </tr>
              <tr>
                <th scope="row">World Tier 5</th>
                <td>{humanReadableNumber(weapon.damageWt5) || 'N/A'}</td>
              </tr>
            </tbody>
            <thead className="single-weapon__title-bar">
              <tr>
                <th className="single-weapon__subheading">Specifications</th>
              </tr>
            </thead>

            <tbody>
              {(!weapon.accuracy || !weapon.stability) && (
                <>
                  <tfoot>
                    <tr>
                      <td colSpan="2">
                        <small>
                          0 indicates no community-sourced value available
                        </small>
                      </td>
                    </tr>
                  </tfoot>
                </>
              )}

              {weapon.maxBonusValue > 1 && (
                <>
                  <tr>
                    <th scope="row">{deAbbreviate(weapon.weaponBonusType)}</th>
                    <td>{weapon.maxBonusValue} %</td>
                  </tr>
                </>
              )}

              {weapon.maxBonusTwoValue > 1 && (
                <>
                  <tr>
                    <th scope="row" data-testid="secondDamageBonusTest">
                      {deAbbreviate(weapon.weaponBonusTypeTwo)}
                    </th>
                    <td>{displayPercentage(weapon.maxBonusTwoValue)} %</td>
                  </tr>
                </>
              )}

              <tr>
                <th scope="row">Headshot Multiplier</th>
                <td>x {hsDisplay(weapon.headshotMultiplier)}</td>
              </tr>
              <tr>
                <th scope="row">Rate of Fire</th>
                <td>{weapon.rpm} rounds per minute</td>
              </tr>
              <tr>
                <th scope="row">Magazine</th>
                <td>{weapon.magazineSize}</td>
              </tr>

              {weapon.modSlots === 0 && (
                <>
                  <tr>
                    <th scope="row">Mod Slots</th>
                    <td>Nil adjustable</td>
                  </tr>
                </>
              )}

              {weapon.modSlots > 0 && (
                <>
                  <tr>
                    <th scope="row">Mod Slots</th>
                    <td>{weapon.modSlots}</td>
                  </tr>
                </>
              )}

              <tr>
                <th scope="row">Accuracy</th>
                <td>{displayPercentage(weapon.accuracy)} %</td>
              </tr>
              <tr>
                <th scope="row">Stability</th>
                <td>{displayPercentage(weapon.stability)} %</td>
              </tr>
              <tr>
                <th scope="row">Optimal Range</th>
                <td>{weapon.optimalRange} m</td>
              </tr>
              <tr>
                <th scope="row">Max Range</th>
                <td>{weapon.maxRange} m</td>
              </tr>
              <tr>
                <th scope="row">Reload Speed</th>
                <td>{millisecondsToSeconds(weapon.reloadSpeed)} seconds</td>
              </tr>
              <tr>
                <th scope="row">Reload Speed (empty magazine)</th>
                <td>
                  {millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} seconds
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
