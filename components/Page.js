import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import ScrollToTopBtn from './ScrollToTopBtn/ScrollToTopBtn';

const GlobalStyles = createGlobalStyle`
  html {
    --text: #444444;
    --offWhite: #dfdfdf;
    --orange: #ff6d10; //ff7f00 - ff6813
    --orangeShade: rgba(255, 109, 16, 0.3);
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #8d8d8d;
    --lightGray: var(--lightGray);
    --damageRed: #a43b3b;
    --armorBlue: #45618e;
    --skillYellow: #ffd373;
    --highEndGold: #ffaf10;
    --namedGold: #eaa213;
    --exoticOrange: #ff6f36;
    --gearsetGreen: #01ff90;
    --rogueRed: #e61f1e;
    --superior: #99109c;
    --specialized: #1937e0;
    --standard: #11ab2b;
    --background: #f9f9f9;
    --minWidth: 900px;
    --maxWidth: 1200px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.5);
    background: var(--background);
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    /* overflow-x: hidden; //check for mobile menu */
  }
  a {
    text-decoration: none;
    color: var(--text);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const ContentStyle = styled.div`
  min-height: 100vh;
  display: grid;
  /* grid-template-rows: auto 1fr auto; */
  /* grid-template-columns: 100%; */
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem 0 0 0;
`;

export default function Page({ children }) {
  return (
    <ContentStyle>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <ScrollToTopBtn />
      <Footer />
    </ContentStyle>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
