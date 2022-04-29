import { useQuery } from '@apollo/client';
import SingleTalent, {
  SINGLE_TALENT_QUERY,
} from '../../../components/SingleTalent';
import LinkSmallWeapon from '../../../components/LinkSmallWeapon';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import HeadSEOTag from '../../../components/HeadSEOTag';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleWeaponTalentPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_TALENT_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const { ...singleTalent } = data.allWeaponTalents[0];

  return (
    <>
      <SingleGearItemStyle>
        <>
          <HeadSEOTag item={singleTalent} />
          <SingleTalent singleTalent={singleTalent} />
          <LinkSmallWeapon talent={singleTalent} />
        </>
      </SingleGearItemStyle>
    </>
  );
}
