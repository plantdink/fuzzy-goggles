import { useQuery, gql } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { perPage } from '../../config';
import LoaderSpinner from '../LoaderSpinner';
import DisplayError from '../ErrorMessage';

export const PaginationContainerStyles = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 1rem auto;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 5px 12px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }

  @media (min-width: 425px) {
    margin: 2rem auto;
    & > * {
      margin: 0;
      padding: 15px 30px;
      border-right: 1px solid var(--lightGrey);
      &:last-child {
        border-right: 0;
      }
    }
  }
`;

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

export default function Pagination({ page, queryString, weaponLink }) {
  const isExotic = queryString !== 'Exotic Weapon' ? null : 'YES';
  const isNamed = queryString !== 'Named Weapon' ? null : 'YES';

  let weaponClass = queryString.toUpperCase();
  if (queryString === 'Exotic Weapon') weaponClass = null;
  if (queryString === 'Named Weapon') weaponClass = null;

  const { data, error, loading } = useQuery(WEAPON_PAGINATION_QUERY, {
    variables: {
      class: weaponClass,
      isExotic,
      isNamed,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const { count } = data._allWeaponsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          {`Agent Field Manual - ${queryString}s Page ${page} of ${pageCount}`}
        </title>
      </Head>
      <Link href={`${weaponLink}${page - 1}`} passHref>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{`${count} ${queryString}s Total`}</p>
      <Link href={`${weaponLink}${page + 1}`} passHref>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
