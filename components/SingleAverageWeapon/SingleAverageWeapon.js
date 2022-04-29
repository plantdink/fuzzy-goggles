import React from 'react';
import { gql } from '@apollo/client';
import {
  displayPercentage,
  hsDisplay,
  millisecondsToSeconds,
  humanReadableNumber,
} from '../../lib/displayNumbers';
import { deAbbreviate } from '../../lib/abbreviationsDictionary';

export const SINGLE_AVERAGE_WEAPON_QUERY = gql`
  query SINGLE_AVERAGE_WEAPONS_QUERY($id: ID!) {
    allAverageWeapons(where: { id: $id }) {
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
          altText
          image {
            publicUrlTransformed
          }
        }
      }
      image {
        id
        altText
        image {
          publicUrlTransformed
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
`;

export default function SingleAverageWeapon({ weapon }) {
  return (
    <>
      <div className="single-weapon__content">
        <div className="single-weapon__details">
          <table>
            <thead className="single-weapon__title-bar">
              <tr>
                <td className="single-weapon__subheading">Base Damage</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Level 40</th>
                <td>{humanReadableNumber(weapon.damageLevel40)}</td>
              </tr>
              <tr>
                <th scope="row">World Tier 5</th>
                <td>{humanReadableNumber(weapon.damageWT5) || 'N/A'}</td>
              </tr>
            </tbody>
            <thead className="single-weapon__title-bar">
              <tr>
                <td className="single-weapon__subheading">Specifications</td>
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
                    <th scope="row">
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
