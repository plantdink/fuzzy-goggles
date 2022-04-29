export default function WeaponClasses() {
  return (
    <>
      <div className="single-gear-item__title-bar">
        <h1 className="single-gear-item__heading">Weapon Stats</h1>
      </div>

      <div className="single-gear-item__content">
        <div className="single-gear-item__details">
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Background</h2>
          </div>
          <p>
            Agents will at times be required to secure suitable weapons from a
            variety of sources and it is expected they will be proficient with
            all classes of weapons. As an Agent you will naturally find that one
            or two classes of weapons will suit your individual operational
            preferences and it is expected that you will gain a high degree of
            proficiency using these weapon classes.
          </p>
          <p>
            When the tactical situation dictates, an Agent will be required to
            conduct operations with up to 7 other agents. By utilising a mix of
            weapon classes and understanding the strengths and weaknesses of
            each class, a group of agents will have an exponential impact on an
            enemy group that is many times larger.
          </p>

          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__subheading">Weapon Attributes</h3>
          </div>
          <p>
            All weapons that an agent will use during operations come with the
            following attributes:
          </p>
          <ul className="single-gear-item__intel">
            <li>weapon damage (random percentage up to level max)</li>
            <li>bonus damage type (class specific & fixed)</li>
            <li>third attribute (random)</li>
            <li>talent (class specific & random)</li>
          </ul>
          <p>
            Each weapon will also have from 1 - 4 modification slots that allow
            an agent to mount a range of attachments in order to customise each
            weapon to their particular preferences or operational requirements.
          </p>
          <p>
            A Named weapon will usually come with a fixed talent that has a
            higher value than the normal version of the talent or , sometimes, a
            fixed attribute that is of a higher value than the normal attribute
            value. Exotic weapons may come with more than one talent, or have a
            combination of class specific attributes. Exotic weapons will also
            have fixed modification slots that are unable to be modified by an
            agent.
          </p>

          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__subheading">Third Attribute</h3>
          </div>
          <p>
            A weapons third attribute type and value is random but does depend
            on the weapon class. It can be any of the following list:
          </p>
          <ul className="single-gear-item__intel">
            <li>Damage to Armour</li>
            <li>Critical Hit Chance</li>
            <li>Health Damage</li>
            <li>Damage to Targets out of Cover</li>
            <li>Headshot Damage</li>
            <li>Critical Hit Damage</li>
            <li>Reload Speed</li>
            <li>Stability</li>
            <li>Accuracy</li>
            <li>Optimal Range</li>
            <li>Magazine Size</li>
            <li>Rate of Fire</li>
            <li>Swap Speed</li>
          </ul>
          <p>
            See each the Average weapon section for further details about each
            of the weapon classes, including how the weapons class will affect
            its second & third attribute.
          </p>
        </div>
      </div>
    </>
  );
}
