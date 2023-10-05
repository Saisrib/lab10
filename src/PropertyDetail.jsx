// PropertyDetail.js
import React from 'react';

function PropertyDetail({ selectedProperty }) {
  return (
    <div>
      <h2>Property Detail</h2>
      {selectedProperty ? (
        <div>
          <h3>{selectedProperty.name}</h3>
          <p>Price: ${selectedProperty.price}</p>
          <p>Location: {selectedProperty.location}</p>
        </div>
      ) : (
        <p>No property selected.</p>
      )}
    </div>
  );
}

export default PropertyDetail;
