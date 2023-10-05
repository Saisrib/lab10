// InquiryForm.js
import React, { useState } from 'react';

function InquiryForm({ selectedProperty }) {
  const [message, setMessage] = useState('');

  const handleInquirySubmit = () => {
    // Simulated inquiry submission logic (replace with API calls)
    console.log(`Inquiry sent for property ${selectedProperty.id}: ${message}`);
  };

  return (
    <div>
      <h2>Inquiry Form</h2>
      {selectedProperty ? (
        <div>
          <h3>Property: {selectedProperty.name}</h3>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleInquirySubmit}>Submit Inquiry</button>
        </div>
      ) : (
        <p>No property selected.</p>
      )}
    </div>
  );
}

export default InquiryForm;
