// import { gql } from '@apollo/client';

// export const SINGLE_WEAPON_QUERY = gql`
//   query SINGLE_WEAPON_QUERY($id: ID!) {
//     allWeapons(where: { id: $id }) {
//       id
//       class
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       flavourText
//       isNamed
//       isExotic
//       weaponTalent {
//         id
//         name
//         image {
//           image {
//             publicUrlTransformed
//           }
//         }
//       }
//       averageWeapon {
//         class
//         magazineSize
//         rpm
//         modSlots
//         reloadSpeed
//         reloadSpeedFromEmpty
//         accuracy
//         stability
//         optimalRange
//         maxRange
//         headshotMultiplier
//         damageLevel40
//         damageWT5
//       }
//     }
//   }
// `;

// ------------- Average Weapon Queries -----------

// export const ALL_AVERAGE_WEAPONS_QUERY = gql`
//   query ALL_AVERAGE_WEAPONS_QUERY {
//     allAverageWeapons {
//       id
//       class
//       modSlots
//       rpm
//       magazineSize
//       headshotMultiplier
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       reloadSpeed
//       reloadSpeedFromEmpty
//       damageLevel40
//       damageWT5
//       weaponTalent {
//         id
//         name
//         image {
//           image {
//             publicUrlTransformed
//           }
//         }
//       }
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const SINGLE_AVERAGE_WEAPON_QUERY = gql`
//   query SINGLE_AVERAGE_WEAPONS_QUERY($id: ID!) {
//     allAverageWeapons(where: { id: $id }) {
//       id
//       class
//       modSlots
//       rpm
//       magazineSize
//       headshotMultiplier
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       reloadSpeed
//       reloadSpeedFromEmpty
//       damageLevel40
//       damageWT5
//       weaponTalent {
//         id
//         name
//         image {
//           image {
//             publicUrlTransformed
//           }
//         }
//       }
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

//  ------------ Exotic Weapon Queries -------------

// export const ALL_EXOTIC_WEAPONS_QUERY = gql`
//   query ALL_EXOTIC_WEAPONS_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { isExotic: "YES" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

//  -------------- Named Weapon Queries ------------

// export const ALL_NAMED_WEAPONS_QUERY = gql`
//   query ALL_NAMED_WEAPONS_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { isNamed: "YES" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

//  ------------- Weapon Class queries --------------

// export const ALL_ASSAULT_RIFLES_QUERY = gql`
//   query ALL_ASSAULT_RIFLES_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { class: "ASSAULT RIFLE" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const ALL_LIGHT_MACHINE_GUNS_QUERY = gql`
//   query ALL_LIGHT_MACHINE_GUNS_QUERY($skip: Int, $first: Int) {
//     allWeapons(
//       where: { class: "LIGHT MACHINE GUN" }
//       first: $first
//       skip: $skip
//     ) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const ALL_MARKSMAN_RIFLES_QUERY = gql`
//   query ALL_MARKSMAN_RIFLES_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { class: "MARKSMAN RIFLE" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const ALL_PISTOLS_QUERY = gql`
//   query ALL_PISTOLS_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { class: "PISTOL" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const ALL_RIFLES_QUERY = gql`
//   query ALL_RIFLES_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { class: "RIFLE" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const ALL_SHOTGUNS_QUERY = gql`
//   query ALL_SHOTGUNS_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(where: { class: "SHOTGUN" }, first: $first, skip: $skip) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

// export const ALL_SUB_MACHINE_GUNS_QUERY = gql`
//   query ALL_SUB_MACHINE_GUNS_QUERY($skip: Int = 0, $first: Int) {
//     allWeapons(
//       where: { class: "SUB MACHINE GUN" }
//       first: $first
//       skip: $skip
//     ) {
//       id
//       model
//       family
//       magazineSize
//       rpm
//       modSlots
//       reloadSpeed
//       reloadSpeedFromEmpty
//       accuracy
//       stability
//       optimalRange
//       maxRange
//       headshotMultiplier
//       weaponBonusType
//       maxBonusValue
//       damageLevel40
//       damageWt5
//       notes
//       isNamed
//       isExotic
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;
