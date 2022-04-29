import { gql } from '@apollo/client';

export const COMMON_EXOTIC_ARMOUR_FIELDS = gql`
  fragment CommonExoticArmourFields on ExoticArmourPiece {
    id
    name
    piece
    modSlots
  }
`;

export const COMMON_ARMOUR_TYPE_FIELDS = gql`
  fragment CommonArmourTypeFields on ArmourType {
    id
    name
    piece
    modSlots
  }
`;
