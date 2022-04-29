export default function ItemUniqueFeature({ item }) {
  return (
    <>
      {(item.uniqueAttribute || item.modSlots > 0) && (
        <div
          className="single-gear-item__sub-content"
          data-testid="uniqueAttributeTest"
        >
          <div className="single-gear-item__details">
            {item.uniqueAttribute && (
              <>
                <div className="single-gear-item__title-bar">
                  <h3 className="single-gear-item__h3subheading">
                    Item Unique Feature
                  </h3>
                </div>
                <ul>
                  <li>{item.uniqueAttribute}</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
