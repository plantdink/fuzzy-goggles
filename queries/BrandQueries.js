import { gql } from '@apollo/client';

// export const SINGLE_BRAND_QUERY = gql`
//   query SINGLE_BRAND_QUERY($id: ID!) {
//     allBrands(where: { id: $id }) {
//       name
//       coreAttribute
//       coreAttributeValueLevel40
//       coreAttributeValueWT5
//       setBonusOne
//       setBonusTwo
//       setBonusThree
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//       notes
//       armourTalent {
//         id
//         name
//         piece
//         descriptionPVE
//         isNamed
//         isExotic
//         image {
//           image {
//             publicUrlTransformed
//           }
//         }
//         namedArmourPiece {
//           id
//           name
//         }
//       }
//       armourType {
//         id
//         name
//         piece
//         isNamed
//         image {
//           image {
//             publicUrlTransformed
//           }
//         }
//       }
//     }
//   }
// `;

// export const ALL_BRANDS_QUERY = gql`
//   query ALL_BRANDS_QUERY($skip: Int = 0, $first: Int) {
//     allBrands(first: $first, skip: $skip) {
//       id
//       name
//       image {
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;
