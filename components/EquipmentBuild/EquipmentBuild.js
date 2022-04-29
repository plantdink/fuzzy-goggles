import { ItemColourStyles } from '../ItemColour';

export default function EquipmentBuild() {
  return (
    <>
      <div className="single-gear-item__title-bar">
        <h1 className="single-gear-item__heading">Gear Specifications</h1>
      </div>

      <div className="single-gear-item__content">
        <div className="single-gear-item__details">
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Core Attribute</h2>
          </div>
          <p>
            Each piece of SHD approved equipment uses comes with 1 Core
            attribute per item. A Core attribute is one of the following types:
          </p>
          <ItemColourStyles>
            <ul>
              <li>
                <span className="gear-color weapon-damage" /> - Offensive
              </li>
              <li>
                <span className="gear-color armour" /> - Defensive
              </li>
              <li>
                <span className="gear-color skill-tier" /> - Utility
              </li>
            </ul>
          </ItemColourStyles>

          <p>Each Core attribute will provide the following bonus per core:</p>
          <ul className="single-gear-item__intel">
            <li>Offensive: + % Weapon Damage</li>
            <li>Defensive: + additional Armour</li>
            <li>Utility: + 1 Skill Tier</li>
          </ul>

          <p>
            There are 6 pieces of equipment an agent will use on operations.
            Each additional Core attribute value, from each piece of equipment,
            will be added to the base value for that attribute.
          </p>
          <p>Example:</p>
          <ul className="single-gear-item__intel">
            <li>
              <strong>6 x</strong> pieces of equipment with{' '}
              <strong>+ 15%</strong> weapon damage will provide an additional{' '}
              <strong>90%</strong> weapon damage to the{' '}
              <strong>base weapon damage</strong> value.
            </li>
            <li>
              <strong>6 x</strong> pieces of equipment with{' '}
              <strong>+ 170,000</strong> armour will provide an additional{' '}
              <strong>1,020,000</strong> armour to an agents{' '}
              <strong>base armour</strong> value.
            </li>
            <li>
              <strong>6 x</strong> pieces of equipment with <strong>+ 1</strong>{' '}
              skill tier will provide an additional <strong>6</strong> skill
              tiers to an agents <strong>base skill tier</strong> value.
            </li>
          </ul>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Minor Attributes</h2>
          </div>
          <p>
            Each piece of SHD approved equipment comes with at least 2 minor
            attributes per piece. The minor attributes on any piece are random,
            the bonus amount will vary and will be from any of the following
            categories:{' '}
          </p>

          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__h3subheading">Offensive</h3>
          </div>
          <ul className="single-gear-item__intel">
            <li>Critical Hit Chance</li>
            <li>Critical Hit Damage</li>
            <li>Headshot Damage</li>
            <li>Weapon Handling</li>
          </ul>

          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__h3subheading">Defensive</h3>
          </div>
          <ul className="single-gear-item__intel">
            <li>Armour Regeneration (per second)</li>
            <li>Explosive Resistance</li>
            <li>Hazard Protection</li>
            <li>Health</li>
          </ul>

          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__h3subheading">Utility</h3>
          </div>
          <ul className="single-gear-item__intel">
            <li>Skill Damage</li>
            <li>Skill Haste</li>
            <li>Skill Repair</li>
            <li>Status Effects</li>
          </ul>

          <p>
            Some rare or unique equipment pieces will come with either a fixed
            minor attribute, or an additional fixed minor attribute.
          </p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Talents</h2>
          </div>
          <p>
            SHD Approved Chest pieces and Backpacks and weapons come equipped
            with a single talent. A talent will strengthen an agents preferred
            operational style and will fall into the following broad categories:
          </p>
          <ul className="single-gear-item__intel">
            <li>Weapon Damage (DPS)</li>
            <li>Tank and Bruiser</li>
            <li>Sustain</li>
            <li>Skill Damage (DPS)</li>
            <li>Heal and Support</li>
          </ul>
          <p>
            Some rare or unique Chest pieces, Backpacks and Weapons come with
            more than 1 talent.
          </p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Modification Slot</h2>
          </div>
          <p>
            Both Equipment and Weapon modification slots allows the mod to be
            freely changed as an agent needs to, with no penalty and agents
            should look to customise each slot depending on the nature of every
            operational situation they may encounter.
          </p>
          <p>
            Improvised (crafted) Holsters, Gloves and Kneepads come with a
            modification slot on each item. No Holster, Gloves or Kneepads
            manufactured by any of the SHD approved manufacturers has a
            modification slot.
          </p>
          <p>Some rare or unique Masks come with more than 1 mod slot.</p>

          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__h3subheading">Equipment</h3>
          </div>
          <p>
            Each Mask, Chest piece and Backpack comes equipped with a gear
            modification slot. Each slot allows agents to insert a different
            modification to further enhance their individual operational style.
          </p>
          <div className="single-gear-item__title-bar">
            <h3 className="single-gear-item__h3subheading">Weapon</h3>
          </div>
          <p>
            Each Weapon class also comes equipped with a number of weapon
            modification slots. Each slot allows agents to attach different
            modifications that give a bonus to any of the weapon specifications.
          </p>
          <p>Weapons may have anywhere from 1 - 4 modification slots.</p>
          <p>
            Some rare or unique Weapons may have anywhere from 1 - 4
            modification slots that agents are unable to change as the
            modification is integral to the way that particular weapon
            operations and functions.
          </p>
        </div>
      </div>
    </>
  );
}
