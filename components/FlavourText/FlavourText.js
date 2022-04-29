export default function FlavourText({ weapon }) {
  return (
    (weapon.flavourText !== '' || null) && (
      <blockquote>{weapon.flavourText}</blockquote>
    )
  );
}
