import { useQuery } from '@apollo/client';
import SingleArmourPiece, {
  SINGLE_ARMOUR_PIECE_QUERY,
  SingleGearItemStyle,
} from '../../../components/SingleArmourPiece';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
import LinkSmallBrand from '../../../components/LinkSmallBrand';
import HeadSEOTag from '../../../components/HeadSEOTag';
import TitleBar from '../../../components/TitleBar';
import ItemUniqueFeature from '../../../components/ItemUniqueFeature';
import FlavourText from '../../../components/FlavourText';

import LoaderSpinner from '../../../components/LoaderSpinner';
import DisplayError from '../../../components/ErrorMessage';

export default function SingleArmourTypePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_ARMOUR_PIECE_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <LoaderSpinner />;
  if (error) return <DisplayError error={error} />;

  const { ...armourPiece } =
    data.allArmourTypes[0] || data.allExoticArmourPieces[0];

  return (
    <>
      <SingleGearItemStyle>
        <HeadSEOTag item={armourPiece} />
        <TitleBar item={armourPiece} />
        <FlavourText weapon={armourPiece} />
        <SingleArmourPiece armourPiece={armourPiece} />
        <ItemUniqueFeature item={armourPiece} />
        {armourPiece.armourTalent.length > 0 && armourPiece.isNamed === 'NO' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Item Compatible Talents
              </h2>
            </div>
            {armourPiece.armourTalent.map((talent) => (
              <LinkSmallTalent key={talent.id} talent={talent} />
            ))}
          </>
        )}

        {armourPiece.armourTalent.length > 0 && armourPiece.isNamed === 'YES' && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">
                Item Unique Talent
              </h2>
            </div>
            {armourPiece.armourTalent.map((talent) => (
              <LinkSmallTalent talent={talent} />
            ))}
          </>
        )}

        {armourPiece.brand.length > 0 && (
          <>
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">Item Brand</h2>
            </div>
            <LinkSmallBrand brand={armourPiece.brand[0]} />
          </>
        )}
      </SingleGearItemStyle>
    </>
  );
}
