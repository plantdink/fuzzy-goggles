export default function ExoticWeaponAttachment({ weapon }) {
  const checkAttachment = weapon.exoticWeaponAttachment[0];
  return (
    <>
      <div className="single-weapon__details" data-testid="exoticWeaponTest">
        <div className="single-weapon__title-bar">
          <h3 className="single-weapon__subheading">Weapon Attachments</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">Slot</th>
              <th scope="col">Name</th>
              <th scope="col">Level 40</th>
              <th scope="col">World Tier 5</th>
            </tr>
          </thead>
          {checkAttachment.opticsValueWT5 === null &&
            checkAttachment.magazineValueWT5 === null &&
            checkAttachment.underbarrelValueWT5 === null &&
            checkAttachment.muzzleValueWT5 === null && (
              <tfoot>
                <tr>
                  <td colSpan="4">
                    <small>
                      * indicates weapon not available at World Tier 5
                    </small>
                  </td>
                </tr>
              </tfoot>
            )}

          {checkAttachment.opticsValueWT5 !== null &&
            checkAttachment.magazineValueWT5 !== null &&
            checkAttachment.underbarrelValueWT5 !== null &&
            checkAttachment.muzzleValueWT5 !== null && (
              <tfoot>
                <tr>
                  <td colSpan="4">
                    <small>
                      World Tier 5 values have not been verified in-game
                    </small>
                  </td>
                </tr>
              </tfoot>
            )}

          <tbody>
            {weapon.exoticWeaponAttachment.map((attachment) => (
              <tr key={attachment.id}>
                <th scope="row">{attachment.attachmentSlot}</th>
                <td>{attachment.name}</td>
                {attachment.opticsSlotBonusType !== null && (
                  <>
                    <td>{attachment.opticsBonusValueLevel40}</td>
                    <td>{attachment.opticsValueWT5 || '*'}</td>
                  </>
                )}
                {attachment.magazineSlotBonusType !== null && (
                  <>
                    <td>{attachment.magazineValueLevel40}</td>
                    <td>{attachment.magazineValueWT5 || '*'}</td>
                  </>
                )}
                {attachment.underbarrelSlotBonusType !== null && (
                  <>
                    <td>{attachment.underbarrelValueLevel40}</td>
                    <td>{attachment.underbarrelValueWT5 || '*'}</td>
                  </>
                )}
                {attachment.muzzleSlotBonusType !== null && (
                  <>
                    <td>{attachment.muzzleValueLevel40}</td>
                    <td>{attachment.muzzleValueWT5 || '*'}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
