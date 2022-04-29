import { useQuery } from '@apollo/client';
import SingleNamedArmourPiece, {
  SINGLE_NAMED_ARMOUR_PIECE_QUERY,
} from '../../../components/SingleNamedArmourPiece';
import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import LinkSmallBrand from '../../../components/LinkSmallBrand';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import HeadSEOTag from '../../../components/HeadSEOTag';
import TitleBar from '../../../components/TitleBar';
import ItemUniqueFeature from '../../../components/ItemUniqueFeature';
import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleNamedArmourPiecePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_NAMED_ARMOUR_PIECE_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const { ...singleNamedPiece } = data.allArmourTypes[0];

  return (
    <SingleGearItemStyle>
      <HeadSEOTag item={singleNamedPiece} />
      <TitleBar item={singleNamedPiece} />
      <SingleNamedArmourPiece singleNamedPiece={singleNamedPiece} />
      <ItemUniqueFeature item={singleNamedPiece} />

      {singleNamedPiece.armourTalent.length > 0 && (
        <>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Item Unique Talent</h2>
          </div>
          {singleNamedPiece.armourTalent.map((talent) => (
            <LinkSmallTalent key={talent.id} talent={talent} />
          ))}
        </>
      )}
      {singleNamedPiece.brand.length > 0 && (
        <>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Item Brand</h2>
          </div>
          {singleNamedPiece.brand.map((brand) => (
            <LinkSmallBrand key={brand.id} brand={brand} />
          ))}
        </>
      )}
    </SingleGearItemStyle>
  );
}
