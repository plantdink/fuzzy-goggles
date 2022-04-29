import { gql } from '@apollo/client';

export const WEAPON_PAGINATION_QUERY = gql`
  query WEAPON_PAGINATION_QUERY(
    $class: String
    $isExotic: String
    $isNamed: String
  ) {
    _allWeaponsMeta(
      where: {
        OR: [{ class: $class }, { isExotic: $isExotic }, { isNamed: $isNamed }]
      }
    ) {
      count
    }
  }
`;

export const BRAND_PAGINATION_QUERY = gql`
  query BRAND_PAGINATION_QUERY {
    _allBrandsMeta {
      count
    }
  }
`;

export const GEARSET_PAGINATION_QUERY = gql`
  query GEARSET_PAGINATION_QUERY {
    _allGearsetsMeta {
      count
    }
  }
`;

export const NAMED_ITEMS_PAGINATION_QUERY = gql`
  query NAMED_ITEMS_PAGINATION_QUERY {
    namedCount: _allArmourTypesMeta(where: { isNamed: "YES" }) {
      count
    }
  }
`;

export const ARMOUR_TYPES_PAGINATION_QUERY = gql`
  query ARMOUR_TYPES_PAGINATION_QUERY {
    allCount: _allArmourTypesMeta {
      count
    }
  }
`;

export const WEAPON_TALENT_PAGINATION_QUERY = gql`
  query WEAPON_TALENT_PAGINATION_QUERY {
    _allWeaponTalentsMeta {
      count
    }
  }
`;

export const ARMOUR_TALENT_PAGINATION_QUERY = gql`
  query ARMOUR_TALENT_PAGINATION_QUERY {
    _allArmourTalentsMeta {
      count
    }
  }
`;

export const EXOTIC_ARMOUR_PIECES_PAGINATION_QUERY = gql`
  query EXOTIC_ARMOUR_PIECES_PAGINATION_QUERY {
    _allExoticArmourPiecesMeta {
      count
    }
  }
`;
