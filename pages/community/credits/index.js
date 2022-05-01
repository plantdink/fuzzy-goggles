import { SingleGearItemStyle } from '../../../components/SingleArmourPiece';
import HeadSEOTag from '../../../components/HeadSEOTag';
import Credits, {
  EquipmentInformationSheets,
  CommunityResources,
  SubReddit,
} from '../../../components/Credits/Credits';
import {
  gearAttributeSheet,
  theSpreadsheetTwo,
  weeklyVendorReset,
  div2Builds,
  subReddit,
} from '../../../components/ExternalLinks';
import LinkSmallExternal from '../../../components/LinkSmallExternal';
import {
  externalLinkIcon,
  externalLinkAltIcon,
} from '../../../components/ItemIcons';

export default function credits() {
  return (
    <>
      <HeadSEOTag string="Development Credits" />
      <SingleGearItemStyle>
        <Credits />
        <CommunityResources />
        <LinkSmallExternal
          text="Weekly Vendor Rest"
          link={weeklyVendorReset}
          image={externalLinkIcon}
        />
        <LinkSmallExternal
          text="Division 2 Build Tool"
          link={div2Builds}
          image={externalLinkAltIcon}
        />
        <EquipmentInformationSheets />
        <LinkSmallExternal
          text="The Division 2 Gear Attribute Spreadsheet"
          link={gearAttributeSheet}
          image={externalLinkIcon}
        />
        <LinkSmallExternal
          text="Tom Clancy's The Spreadsheet 2"
          link={theSpreadsheetTwo}
          image={externalLinkAltIcon}
        />
        <SubReddit />
        <LinkSmallExternal
          text="Division 2 subreddit"
          link={subReddit}
          image={externalLinkIcon}
        />
      </SingleGearItemStyle>
    </>
  );
}
