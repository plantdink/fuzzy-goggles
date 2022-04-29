import { render, screen, cleanup } from '@testing-library/react';
import SingleGearset from '.';
import { fakeGearset } from '../../lib/testUtils';

const gearset = fakeGearset();

afterEach(cleanup);

describe('<SingleGearset />', () => {
  it('renders correctly for a single gearset', () => {
    const { container, debug } = render(<SingleGearset gearset={gearset} />);

    // move to singleGearsetPage test
    // const testGearsetTitle = screen.getByText(gearset.name);
    // expect(testGearsetTitle).toBeInTheDocument();

    const testGearsetImage = screen.getByAltText(gearset.image.altText);
    expect(testGearsetImage).toBeInTheDocument();

    const testGearsetCoreAttribute = screen.getByRole('row', {
      name: /core attribute type \- armour/i,
    });
    expect(testGearsetCoreAttribute).toHaveTextContent(gearset.coreAttribute);

    const testGearsetCoreAttribute40Value = screen.getByRole('row', {
      name: /170,000/i,
    });
    expect(testGearsetCoreAttribute40Value).toHaveTextContent(
      gearset.coreAttributeValueLevel40
    );

    const testGearsetCoreAttributeWT5Value = screen.getByRole('cell', {
      name: /42,935/i,
    });
    expect(testGearsetCoreAttributeWT5Value).toHaveTextContent(
      gearset.coreAttributeValueWT5
    );

    const testGearsetSetBonusOne = screen.getByRole('cell', {
      name: /15% status effects/i,
    });
    expect(testGearsetSetBonusOne).toHaveTextContent(gearset.setBonusOne);

    const testGearsetSetBonusTwo = screen.getByRole('row', {
      name: /\+ 15% skill haste, \+ 30% hazard protection/i,
    });
    expect(testGearsetSetBonusTwo).toHaveTextContent(gearset.setBonusTwo);

    const testGearsetSetBonusThree = screen.getByRole('cell', {
      name: /enemies that die while affected by your status effects spread those status effects to another enemy within 10m and refresh the duration\./i,
    });
    expect(testGearsetSetBonusThree).toHaveTextContent(gearset.setBonusThree);

    const testGearsetChestTalent = screen.getByRole('cell', {
      name: /proliferation\: increase contagion range from 10m to 15m/i,
    });
    expect(testGearsetChestTalent).toHaveTextContent(gearset.setChestTalent);

    const testGearsetBackpackTalent = screen.getByRole('cell', {
      name: /symptom aggravator\: amplifies all damage you deal to status affected targets by 30%/i,
    });
    expect(testGearsetBackpackTalent).toHaveTextContent(
      gearset.setBackpackTalent
    );
  });
});
