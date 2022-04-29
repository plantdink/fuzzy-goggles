import { gql } from '@apollo/client';

export const SEARCH_MANUAL_QUERY = gql`
  query SEARCH_MANUAL_QUERY($searchTerm: String!) {
    allBrands(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { setBonusOne_contains_i: $searchTerm }
          { setBonusTwo_contains_i: $searchTerm }
          { setBonusThree_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allWeapons(
      where: {
        OR: [
          { model_contains_i: $searchTerm }
          { family_contains_i: $searchTerm }
          { class_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      class
      model
    }
    allGearsets(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { setBonusOne_contains_i: $searchTerm }
          { setBonusTwo_contains_i: $searchTerm }
          { setBonusThree_contains_i: $searchTerm }
          { setChestTalent_contains_i: $searchTerm }
          { setBackpackTalent_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allArmourTypes(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { piece_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allArmourTalents(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { piece_contains_i: $searchTerm }
          { type_contains_i: $searchTerm }
          { descriptionPVE_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allWeaponTalents(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { type_contains_i: $searchTerm }
          { descriptionPVE_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
    allExoticArmourPieces(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { piece_contains_i: $searchTerm }
          { coreOne_contains_i: $searchTerm }
          { coreTwo_contains_i: $searchTerm }
          { coreThree_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
    }
  }
`;
