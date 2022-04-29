export default function TitleBar({ item }) {
  let title;
  let divClass;
  let headingClass;

  if (item.__typename === 'AverageWeapon') {
    title = item.class;
    divClass = 'single-weapon__title-bar';
    headingClass = 'single-weapon__heading';
  }

  if (item.__typename === 'Weapon') {
    title = item.model;
    divClass = 'single-weapon__title-bar';
    headingClass = 'single-weapon__heading';
  }

  if (item.__typename === 'ArmourType') {
    title = item.name;
    divClass = 'single-gear-item__title-bar';
    headingClass = 'single-gear-item__heading';
  }

  if (item.__typename === 'ExoticArmourPiece') {
    title = item.name;
    divClass = 'single-gear-item__title-bar';
    headingClass = 'single-gear-item__heading';
  }

  if (item.__typename === 'Brand') {
    title = item.name;
    divClass = 'single-gear-item__title-bar';
    headingClass = 'single-gear-item__heading';
  }

  if (item.__typename === 'Gearset') {
    title = item.name;
    divClass = 'single-gear-item__title-bar';
    headingClass = 'single-gear-item__heading';
  }

  return (
    <>
      <div className={divClass}>
        <h1 className={headingClass}>{title}</h1>
      </div>
    </>
  );
}

// ------------- SubHeadingBar below --------------
export function SubHeadingBar({ subHeading = null, layout = null }) {
  let styleDivClass;
  let styleSubHeadingClass;

  if (layout === 'item') {
    styleDivClass = 'single-gear-item__title-bar';
    styleSubHeadingClass = 'single-gear-item__subheading';
  }

  if (layout === 'weapon' || null) {
    styleDivClass = 'single-weapon__title-bar';
    styleSubHeadingClass = 'single-weapon__section-heading';
  }

  return (
    <>
      <div className={styleDivClass}>
        <h3 className={styleSubHeadingClass}>{subHeading}</h3>
      </div>
    </>
  );
}
