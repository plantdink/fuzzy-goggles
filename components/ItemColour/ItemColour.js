import styled from 'styled-components';

export const ItemColourStyles = styled.div`
  .gear-color {
    display: inline-block;
    height: 20px;
    width: 40px;
  }

  .high-end {
    background-color: var(--highEndGold);
  }

  .superior {
    background-color: var(--superior);
  }

  .specialized {
    background-color: var(--specialized);
  }

  .standard {
    background-color: var(--standard);
  }

  .gear-set {
    background-color: var(--gearsetGreen);
  }

  .exotic {
    background-color: var(--exoticOrange);
  }

  .named-item {
    background-color: var(--namedGold);
  }

  .weapon-damage {
    background-color: var(--damageRed);
  }

  .armour {
    background-color: var(--armorBlue);
  }

  .skill-tier {
    background-color: var(--skillYellow);
  }
`;

export default function ItemColour() {
  return (
    <>
      <div className="single-gear-item__title-bar">
        <h1 className="single-gear-item__heading">Gear Quality</h1>
      </div>

      <div className="single-gear-item__content">
        <div className="single-gear-item__details">
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Background</h2>
          </div>
          <p>
            As you gain experience during operations (level up) agents will gain
            access to, or recover equipment of varying quality. Not every piece
            of equipment be suitable for every agent, or their individual
            operational style and preferences.
          </p>
          <p>
            A colour code system approved by SHD has been introduced to help
            agents identify equipment of differing quality and type. This will
            enable agents to decide if a piece of equipment is going to be
            beneficial to them and their individual operational style.
          </p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Colour Code</h2>
          </div>
          <p>
            Colour codes listed below will indicate different types of equipment
            as well as a range of differences between equipment.
          </p>

          <ItemColourStyles>
            <div className="single-gear-item__title-bar">
              <h3 className="single-gear-item__h3subheading">
                Weapon & Gear Quality (highest to lowest)
              </h3>
            </div>
            <p>
              <span aria-hidden="true" className="gear-color high-end" /> -{' '}
              High-end
            </p>
            <p>
              <span className="gear-color superior" /> - Superior
            </p>
            <p>
              <span className="gear-color specialized" /> - Specialized
            </p>
            <p>
              <span className="gear-color standard" /> - Standard
            </p>

            <div className="single-gear-item__title-bar">
              <h3 className="single-gear-item__h3subheading">
                Unique or High Value Equipment
              </h3>
            </div>
            <p>
              <span className="gear-color gear-set" /> - Gear Set (Gear only)
            </p>
            <p>
              <span className="gear-color named-item" /> - Named (Weapons &
              Gear)
            </p>
            <p>
              <span className="gear-color exotic" /> - Exotic (Weapons & Gear)
            </p>
          </ItemColourStyles>
        </div>
      </div>
    </>
  );
}
