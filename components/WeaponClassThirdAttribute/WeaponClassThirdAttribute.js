import { displayPercentage } from '../../lib/displayNumbers';

export default function WeaponClassThirdAttribute({ weapon }) {
  // console.log('Weapon', weapon);
  const classDisplayArray = [];

  if (weapon.class === 'ASSAULT RIFLE' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classARAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'LIGHT MACHINE GUN' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classLMGAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'MARKSMAN RIFLE' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classMMRAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'PISTOL' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classPistolAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'RIFLE' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classRifleAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'SHOTGUN' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classShotgunAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'SUB MACHINE GUN' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classSMGAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  return (
    <>
      {classDisplayArray.length > 0 && (
        <>
          <div
            className="single-weapon__details"
            data-testid="thirdAttributeTest"
          >
            <div className="single-weapon__title-bar">
              <h3 className="single-weapon__subheading">
                Class Compatible Attributes
              </h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col">Level 40</th>
                  <th scope="col">World Tier 5</th>
                </tr>
              </thead>
              <tbody>
                {classDisplayArray.map((attribute) => (
                  <tr key={attribute.id}>
                    <th scope="row">{attribute.attribute}</th>
                    <td>{displayPercentage(attribute.valueLevel40)} %</td>
                    <td>{displayPercentage(attribute.valueWT5)} %</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
