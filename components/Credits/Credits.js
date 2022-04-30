import {
  gearAttributeSheet,
  theSpreadsheetTwo,
  weeklyVendorReset,
  div2Builds,
  subReddit,
} from '../ExternalLinks';

export default function Credits() {
  return (
    <>
      <div className="single-gear-item__title-bar">
        <h1 className="single-gear-item__heading">Credits & Thanks</h1>
      </div>

      <div className="single-gear-item__content">
        <div className="single-gear-item__details">
          <p>
            I would like to take the opportunity to publicly thank each of the
            people listed below for their (unknowing) contributions to this
            site.
          </p>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">
              Weapon Visualisation Stats
            </h2>
          </div>
          <p>Vikeman45</p>
          <p>
            Many people will not realise that a few of the stats necessary for
            the graph visualisations are not actually available in-game. A lot
            of individual weapon stats are given as a figure in-game but a few
            of the more important ones (accuracy & stability) are only given as
            a sliding bar with no actual specific value.
          </p>
          <p>
            Comparing these types of figures between more than 2 weapons at once
            easily in game becomes a frustrating experience.
          </p>
          <p>
            If you find value in the graph visualisations in this site, please
            keep in mind that the work done by Vikeman45 really drives this and
            the graphs would simply not be as useful without this kind of
            information.
          </p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">
              Equipment Information Sheets
            </h2>
          </div>
          <p>
            Ahmad, Google-1234, DizNoots, Dartrunner, Regis, Azuremen32, Bend3n,
            Eph, GingerBeard_x, Saint Landwalker, Skyfir, Maplestruck, bitilin,
            AA_Brian, SaulGood23, BobtailedMoss3, anyone who has contributed
          </p>
          <p>
            The gear sheets that are so often referred to, are a result of
            countless hours of (fairly boring) sourcing, collating and data
            entry by these folk. The gear sheets provide a central location for
            agents to refer to without having to boot up the game. A lot of the
            information on this site has been sourced from, or cross-checked
            using the gear sheets each of the people above has contributed to.
          </p>
          <p>
            Link -{' '}
            <a href={gearAttributeSheet}>
              The Division 2 Gear Attribute Spreadsheet
            </a>
          </p>
          <p>
            Link - <a href={theSpreadsheetTwo}>The Spreadsheet Two</a>
          </p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">
              Community Resources
            </h2>
          </div>
          <p>Rueben Alamina, msxwat</p>
          <p>
            Since the early days of Divison 1, the community has sourced the
            weekly vendor items at each reset and supplied that data to a
            central location. Rueben has run a website dedicated to this for
            almost as long as I can remember, many agents have used this
            information during their play sessions.
          </p>
          <p>
            Link - <a href={weeklyVendorReset}>Weekly Vendor Reset</a>
          </p>
          <p>
            A huge amount of time and thought goes into an effective equipment
            load out or build during an agents journey in Division 2. mxswat has
            developed and enhanced a fantastic build tool which allows an agent
            to theorycraft a build in a very short amount of time.
          </p>
          <p>
            Link - <a href={div2Builds}>Division 2 Build Tool</a>
          </p>
          <p>I highly recommend checking out both of these sites.</p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">
              Division 2 Sub Reddit
            </h2>
          </div>
          <p>D3ltafr0st, all Div 2 subReddit users</p>
          <p>
            Shout out to D3ltafr0st for giving me a link to an older community
            gearsheet that allowed me to check the World Tier 5 availability of
            some of the equipment. Also a shout out and thanks for all of the
            users of the sub reddit. Community questions, ideas and answers
            continue to provide a rich source of ideas.
          </p>
          <p>
            Link - <a href={subReddit}>Sub Reddit</a>
          </p>
        </div>
      </div>
    </>
  );
}
