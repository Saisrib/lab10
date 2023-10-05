// PropertyList.js
import React from 'react';

function PropertyList({ propertyList, setSelectedProperty }) {
  return (
    <div>
      <h2>Property List</h2>
      <ul>
        {propertyList.map((property) => (
          <li key={property.id}>
            <a
              href={`/property/${property.id}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedProperty(property);
              }}
            >
              {property.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
