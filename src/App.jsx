// App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';
import InquiryForm from './InquiryForm';

// Simulated property data (replace with API data)
const simulatedPropertyData = [
  { id: 1, name: 'Property 1', price: 100000, location: 'Hyderabad' },
  { id: 2, name: 'Property 2', price: 150000, location: 'Chennai' },
  { id: 3, name: 'Property 3', price: 200000, location: 'Bangalore' },
  { id: 4, name: 'Property 4', price: 250000, location: 'Bangalore' },
  { id: 5, name: 'Property 5', price: 300000, location: 'Delhi' },
  { id: 6, name: 'Property 6', price: 400000, location: 'Mumbai' },
  // Add more properties as needed
];

function App() {
  const [propertyList, setPropertyList] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleSearch = (locationFilter) => {
    const filteredProperties = simulatedPropertyData.filter((property) =>
      property.location.toLowerCase() === locationFilter.toLowerCase()
    );
    setPropertyList(filteredProperties);
    setSelectedProperty(null); // Clear selected property when performing a new search
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PropertyList propertyList={propertyList} setSelectedProperty={setSelectedProperty} />
      {selectedProperty && <PropertyDetail property={selectedProperty} />}
      <InquiryForm selectedProperty={selectedProperty} />
    </div>
  );
}

export default App;
