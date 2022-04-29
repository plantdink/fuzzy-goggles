import { gql } from '@apollo/client';

// export const ALL_GEARSETS_QUERY = gql`
//   query ALL_GEARSETS_QUERY($skip: Int = 0, $first: Int) {
//     allGearsets(first: $first, skip: $skip) {
//       id
//       name
//       image {
//         image {
//           publicUrlTransformed
//         }
//         altText
//       }
//     }
//   }
// `;

// export const SINGLE_GEARSET_QUERY = gql`
//   query SINGLE_GEARSET_QUERY($id: ID!) {
//     allGearsets(where: { id: $id }) {
//       name
//       coreAttribute
//       coreAttributeValueLevel40
//       coreAttributeValueWT5
//       setBonusOne
//       setBonusTwo
//       setBonusName
//       setBonusThree
//       setBackpackTalentName
//       setBackpackTalent
//       setChestTalentName
//       setChestTalent
//       image {
//         image {
//           publicUrlTransformed
//         }
//         altText
//       }
//       notes
//     }
//   }
// `;
