import React, { useState } from 'react';
import { createService } from './api';

const ServiceForm = ({ onServiceCreated }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createService({ name, code });
      onServiceCreated(response.data);
      setName('');
      setCode('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="service-form">
      <h2>Add Service Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Service Code:</label>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
        </div>
        <button type="submit">Create Service</button>
        <button type="button" onClick={() => { setName(''); setCode(''); }}>Cancel</button>
      </form>
    </div>
  );
};

export default ServiceForm;