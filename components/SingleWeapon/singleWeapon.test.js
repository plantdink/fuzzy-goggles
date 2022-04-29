import { render, screen } from '@testing-library/react';
import SingleWeapon from '.';
import { fakeWeapon, fakeAverageWeapon } from '../../lib/testUtils';
import {
  humanReadableNumber,
  hsDisplay,
  displayPercentage,
  millisecondsToSeconds,
} from '../../lib/displayNumbers';
import { deAbbreviate } from '../../lib/abbreviationsDictionary';

const weapon = fakeWeapon();
const avgWeapon = fakeAverageWeapon();

describe('<SingleWeapon />', () => {
  it('renders the data correctly for a single weapon', async () => {
    const { container, debug } = render(
      <SingleWeapon weapon={weapon} avgWeapon={avgWeapon} />
    );
    // debug();

    expect(container).toMatchSnapshot();

    const weaponDamageLvl40 = humanReadableNumber(weapon.damageLevel40);
    const testLvl40WeaponDamage = screen.getByText(weaponDamageLvl40);
    expect(testLvl40WeaponDamage).toBeInTheDocument();

    const weaponDamageWT5 = humanReadableNumber(weapon.damageWt5);
    const testWT5WeaponDamage = screen.getByText(weaponDamageWT5);
    expect(testWT5WeaponDamage).toBeInTheDocument();

    //  Class Bonus Damage type & value
    const weaponTestBonusDamage = screen.getByRole('rowheader', {
      name: /damage to armour/i,
    });
    expect(weaponTestBonusDamage).toHaveTextContent(
      deAbbreviate(weapon.weaponBonusType)
    );
    const weaponTestBonusDamageValue = screen.getByRole('cell', {
      name: /21 %/i,
    });
    expect(weaponTestBonusDamageValue).toHaveTextContent(
      `${weapon.maxBonusValue} %`
    );

    // weapon HSD multiplier title & value
    const weaponTestHSDMultiplier = screen.getByRole('rowheader', {
      name: /headshot multiplier/i,
    });
    expect(weaponTestHSDMultiplier).toHaveTextContent('Headshot Multiplier');
    const weaponTestHSDMultiplierValue = screen.getByRole('cell', {
      name: /x 1\.55/i,
    });
    expect(weaponTestHSDMultiplierValue).toHaveTextContent(
      hsDisplay(weapon.headshotMultiplier)
    );

    //  weapon rpm heading & value
    const weaponTestRPM = screen.getByRole('row', {
      name: /rate of fire/i,
    });
    expect(weaponTestRPM).toHaveTextContent(`${weapon.rpm} rounds per minute`);

    //  weapon mag heading & size
    const weaponTestMagazineSize = screen.getByRole('row', {
      name: /magazine 30/i,
    });
    expect(weaponTestMagazineSize).toHaveTextContent(weapon.magazineSize);

    // weapon mod slots
    const weaponTestModSlots = screen.getByRole('row', {
      name: /mod slots/i,
    });
    expect(weaponTestModSlots).toHaveTextContent(weapon.modSlots);

    // weapon accuracy
    const weaponTestAccuracy = screen.getByRole('row', { name: /accuracy/i });
    expect(weaponTestAccuracy).toHaveTextContent(
      displayPercentage(weapon.accuracy)
    );

    // weapon stability
    const weaponTestStability = screen.getByRole('row', { name: /stability/i });
    expect(weaponTestStability).toHaveTextContent(
      displayPercentage(weapon.stability)
    );

    // weapon optimal range
    const weaponTestOptimalRange = screen.getByRole('row', {
      name: /optimal range/i,
    });
    expect(weaponTestOptimalRange).toHaveTextContent(
      `${weapon.optimalRange} m`
    );

    const weaponTestMaxRange = screen.getByRole('row', { name: /max range/i });
    expect(weaponTestMaxRange).toHaveTextContent(`${weapon.maxRange} m`);

    // weapon reload speed
    const weaponTestReloadSpeed = screen.getByRole('cell', {
      name: /2\.00 seconds/i,
    });
    expect(weaponTestReloadSpeed).toHaveTextContent(
      `${millisecondsToSeconds(weapon.reloadSpeed)} seconds`
    );

    // weapon empty mag reload speed
    const weaponTestEmptyReloadSpeed = screen.getByRole('cell', {
      name: /2\.50 seconds/i,
    });
    expect(weaponTestEmptyReloadSpeed).toHaveTextContent(
      `${millisecondsToSeconds(weapon.reloadSpeedFromEmpty)} seconds`
    );

    if (weapon.accuracy || weapon.stability > 0) {
      const small = container.querySelector('small');
      expect(small).not.toBeInTheDocument();
    }

    // it('Renders a Radar Chart', () => {
    //   const wrapper = mount(
    //     <RadarChart />
    //   )
    //   expect(wrapper).toMatchSnapshot();
  });
});
