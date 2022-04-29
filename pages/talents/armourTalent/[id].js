import { useQuery } from '@apollo/client';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import SingleTalent, {
  SINGLE_TALENT_QUERY,
} from '../../../components/SingleTalent';
import LinkSmallPiece from '../../../components/LinkSmallPiece';
import HeadSEOTag from '../../../components/HeadSEOTag';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleArmourTalentPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_TALENT_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const { ...singleTalent } = data.allArmourTalents[0];

  return (
    <>
      <SingleGearItemStyle>
        <HeadSEOTag item={singleTalent} />
        <SingleTalent singleTalent={singleTalent} />
        {singleTalent.piece !== '' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Compatible Equipment
              </h2>
            </div>
            <LinkSmallPiece piece={singleTalent} />
          </>
        )}
      </SingleGearItemStyle>
    </>
  );
}
