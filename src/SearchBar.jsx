// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ setPropertyList }) {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    // Simulated filter logic (replace with API calls)
    const filteredProperties = simulatedPropertyData.filter((property) => {
      return (
        (location === '' || property.location.toLowerCase() === location.toLowerCase()) &&
        (maxPrice === '' || property.price <= parseInt(maxPrice))
      );
    });

    setPropertyList(filteredProperties);
  };

  return (
    <div>
      <h2>Property Search</h2>
      <div>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
