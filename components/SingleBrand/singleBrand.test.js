import { render, screen, cleanup } from '@testing-library/react';
import SingleBrand from '.';
import { fakeBrand } from '../../lib/testUtils';

const brand = fakeBrand();

afterEach(cleanup);

describe('<SingleBrand />', () => {
  it('renders correctly for a single brand', async () => {
    const { container, debug } = render(<SingleBrand brand={brand} />);

    await screen.findByTestId('testBrand');
    expect(container).toMatchSnapshot();

    const testBrandCoreAttribute = screen.getByRole('row', {
      name: /core attribute type \- armour/i,
    });
    expect(testBrandCoreAttribute).toHaveTextContent(brand.coreAttribute);

    const testCoreAttribute40Value = screen.getByRole('cell', {
      name: /\+ 170,000 armour/i,
    });
    expect(testCoreAttribute40Value).toHaveTextContent(
      brand.coreAttributeValueLevel40
    );

    const testCoreAttributeWT5Value = screen.getByRole('cell', {
      name: /\+ 42,458 armour/i,
    });
    expect(testCoreAttributeWT5Value).toHaveTextContent(
      brand.coreAttributeValueWT5
    );

    const testSetBonusOne = screen.getByRole('row', { name: /1 piece/i });
    expect(testSetBonusOne).toHaveTextContent(brand.setBonusOne);

    const testSetBonusTwo = screen.getByRole('row', { name: /2 piece/i });
    expect(testSetBonusTwo).toBeInTheDocument(brand.setBonusTwo);

    const testSetBonusThree = screen.getByRole('row', {
      name: /3 piece/i,
    });
    expect(testSetBonusThree).toBeInTheDocument(brand.setBonusThree);

    const testBrandImage = screen.getByRole('img', {
      name: /fake brand image alt text/i,
    });
    expect(testBrandImage).toBeInTheDocument();
    expect(testBrandImage).toHaveAttribute(
      'src',
      `${brand.image.image.publicUrlTransformed}`
    );
    expect(testBrandImage).toHaveAttribute('alt', `${brand.image.altText}`);
  });
});
