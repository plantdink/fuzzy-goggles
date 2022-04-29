import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavigationStyles = styled.div`
--orangeBlur: 
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;

  background: none;
  border: 0;
  cursor: pointer;


  .flex {
    display: flex;
    gap: var(--gap, 1rem);
    /* font-size: 2rem; */
  }

  /* Include styles to VISUALLY hide class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .primary-header {
    align-items: center;
    justify-content: space-between;
  }

  .mobile-nav-toggle {
    display: none;
  }

  /* if browser DOESN'T support blur, it gets this */
  .primary-navigation {
    margin: 0;
    padding: 0;
    display: flex;
    font-size: clamp(10px, 1.8rem, 2rem);

    list-style: none;
    text-transform: uppercase;
    text-decoration: none;
    background: none;
    color: white;
  }

  @media (min-width: 35rem) {
    a, button
    {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 3rem;
      padding-right: 2rem;
      display: flex;
      align-items: center;
      position: relative;
      font-weight: 900;
      font-size: 1em;
      background: none;
      border: 0;
      cursor: pointer;

      @media (max-width: 700px) {
        font-size: 10px;
        padding: 0 10px;
      }

      &:before {
        content: '';
        width: 2px;
        background: var(--lightGrey);
        height: 100%;
        left: 0;
        position: absolute;
        transform: skew(7deg);
        top: 0;
        bottom: 0;
      }

      &:after {
        height: 3px;
        background: var(--orange);
        content: '';
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 54%;
        margin-top: 2rem;
      }

      &:hover,
      &:focus {
        outline: none;
        &:after {
          width: calc(100% - 5rem);
        }
      }
    }
  }

  @supports (backdrop-filter: blur(0.75rem)) {
    .primary-navigation {
      background: none;
      backdrop-filter: blur(0.75rem);
      color: var(--text);
    }
  }

  /* menu for small screen */
  @media (max-width: 35em) {
    .primary-navigation {
      --gap: 2em;
      background: var(--orangeShade);


      font-size: 12px;
      font-weight: 800;
      padding: 0 10px;

      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;

      flex-direction: column;
      padding: min(20vh, 10rem) 2em;

      transform: translateX(100%);
      transition: transform 350ms ease-out;
    }

    .primary-navigation[data-visible='true'] {
      transform: translateX(0%);
    }

    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 9999;
      background-image: url('https://res.cloudinary.com/dbm1h5w02/image/upload/v1647480872/agent-field-manual/62329027ec80b2199ff2ab8b.svg');
      background-repeat: no-repeat;
      background-color: transparent;
      border: 0;
      width: 2.5rem;
      aspect-ratio: 1;
      top: 2rem;
      right: 2rem;
    }

    .mobile-nav-toggle[aria-expanded='true'] {
      background-image: url('https://res.cloudinary.com/dbm1h5w02/image/upload/v1647480812/agent-field-manual/62328fecec80b2199ff2aa87.svg');
      background-color: transparent;
    }
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavigationStyles>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isOpen ? 'false' : 'true'}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Menu</span>
        </button>

        <nav>
          <ul
            className="primary-navigation flex"
            id="primary-navigation" // aria-controls looks for id
            data-visible={isOpen ? 'false' : 'true'}
          >
            <>
              <li className="active">
                <Link href="/gear">Armour</Link>
              </li>
            </>
            <li>
              <Link href="/exotics">Exotics</Link>
            </li>
            <li>
              <Link href="/intel">Intel</Link>
            </li>
            <li>
              <Link href="/talents">Talents</Link>
            </li>
            <li>
              <Link href="/weapons">Weapons</Link>
            </li>
          </ul>
        </nav>
      </NavigationStyles>
    </>
  );
}
