import { render, screen } from '@testing-library/react';
import SingleTalent from '../SingleTalent';
import LinkSmallWeapon from '../LinkSmallWeapon';
import { fakeWeaponTalent } from '../../lib/testUtils';

describe('<SingleTalent />', () => {
  it('renders correctly for a Weapon talent', () => {
    const weaponTalent = fakeWeaponTalent();
    const { container, debug } = render(
      <SingleTalent singleTalent={weaponTalent} />
    );
    // debug();

    const singleTalentTitle = screen.getByText(weaponTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText('Weapon Talent icon');
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(weaponTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(weaponTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(weaponTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();
  });

  it('renders both components correctly for a Weapon talent', () => {
    const weaponTalent = fakeWeaponTalent();
    const { container, debug } = render(
      <>
        <SingleTalent singleTalent={weaponTalent} />
        <LinkSmallWeapon talent={weaponTalent} />
      </>
    );

    const singleTalentTitle = screen.getByText(weaponTalent.name);
    expect(singleTalentTitle).toBeInTheDocument();

    const talentPieceIcon = screen.getByAltText('Weapon Talent icon');
    expect(talentPieceIcon).toBeInTheDocument();

    const talentImage = screen.getByAltText(weaponTalent.image.altText);
    expect(talentImage).toBeInTheDocument();

    const talentPVEDescription = screen.getByText(weaponTalent.descriptionPVE);
    expect(talentPVEDescription).toBeInTheDocument();

    const talentPVPDescription = screen.getByText(weaponTalent.descriptionPVP);
    expect(talentPVPDescription).toBeInTheDocument();

    if (weaponTalent.classARTalent === true) {
      const link = screen.getByText('Assault Rifles');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classLMGTalent === true) {
      const link = screen.getByText('Light Machine Guns');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classMMRTalent === true) {
      const link = screen.getByText('Marksman Rifles');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classPistolTalent === true) {
      const link = screen.getByText('Pistols');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classRifleTalent === true) {
      const link = screen.getByText('Rifles');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classShotgunTalent === true) {
      const link = screen.getByText('Shotguns');
      expect(link).toBeInTheDocument();
    }
    if (weaponTalent.classSMGTalent === true) {
      const link = screen.getByText('Sub Machine Guns');
      expect(link).toBeInTheDocument();
    }
  });
});
