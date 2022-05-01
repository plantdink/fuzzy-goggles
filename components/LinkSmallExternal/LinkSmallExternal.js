import { LinkStyles, TitleLink } from '../LinkSmallBrand';

export default function LinkSmallExternal({ text, link, image }) {
  return (
    <>
      <div className="single-gear-item__details">
        <LinkStyles key={text}>
          <TitleLink>
            <a href={link}>{text}</a>
          </TitleLink>
          <img className="standard-item" src={image} alt="External Link Icon" />
        </LinkStyles>
      </div>
    </>
  );
}
