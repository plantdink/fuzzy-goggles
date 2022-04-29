import styled from 'styled-components';

export const ListStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: clamp(2rem, 6rem, 8rem);
  row-gap: clamp(2rem, 5rem, 8rem);
  /* padding: 1rem 0 2rem 0; */
`;

export const ListItem = styled.div`
  background: var(--orangeShade);
  border: 1px solid var(--lightGrey);
  box-shadow: var(--bs);
  max-width: 40rem;
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    max-width: clamp(10vw, 95vw, 280px);
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media (min-width: 35rem) {
    img {
      max-width: 40rem;
    }
  }
`;

export const ListTitle = styled.h3`
  margin: 0 1rem;
  margin-top: -3rem;
  transform: skew(5deg);
  text-align: center;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  a {
    background: var(--orange);
    display: inline;
    line-height: 1.3;
    text-transform: uppercase;
    font-size: clamp(1rem, 40vw, 2rem);
    text-align: center;
    color: var(--text);
    padding: 0 1rem;
  }

  @media (min-width: 35rem) {
    a {
      font-size: 3rem;
    }
  }
`;
