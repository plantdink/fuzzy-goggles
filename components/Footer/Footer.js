import Link from 'next/link';
import styled from 'styled-components';
import {
  websiteFaults,
  contactMe,
  githubRepo,
  div2Builds,
  weeklyVendorReset,
  subReddit,
  backend,
} from '../ExternalLinks';

const FooterStyles = styled.footer`
  font-size: 1.5rem;
  padding: 1rem 0;
  background-color: var(--orange);
  border-top: 10px solid var(--black, black);

  h4 {
    color: var(--text);
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .footer-content__parent {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  .footer-content__child {
    margin: 0 3rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.2rem 0;
  }

  a {
    color: var(--text);
  }

  @media (max-width: 425px) {
    .footer-content__parent {
      flex-direction: column;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <nav className="footer-content__parent">
        <div className="footer-content__child">
          <h4>Support</h4>
          <ul>
            <li>
              <a href={websiteFaults}>Report Website Issues, Bugs</a>
            </li>
            <li>
              <a href={contactMe}>Contact the Developer</a>
            </li>
            <li>
              <a href={githubRepo}>Code Repository</a>
            </li>
          </ul>
        </div>

        <div className="footer-content__child">
          <h4>Community Sites</h4>
          <ul>
            <li>
              <a href={div2Builds}>Div2 Builds</a>
            </li>
            <li>
              <a href={weeklyVendorReset}>Weekly Vendor Reset</a>
            </li>
            <li>
              <a href={subReddit}>Division 2 SubReddit</a>
            </li>
          </ul>
        </div>

        <div className="footer-content__child">
          <h4>Acknowledgements</h4>
          <ul>
            <Link href="/community/credits">Community Credits</Link>
          </ul>
        </div>

        <div className="footer-content__child">
          <h4>Admin Portal</h4>
          <ul>
            <li>
              <a href={backend}>Admin Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </FooterStyles>
  );
}
