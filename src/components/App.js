import React, { useState } from 'react';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

const App = () => {
  const [services, setServices] = useState([]);

  const handleServiceCreated = (service) => {
    setServices([...services, service]);
  };

  return (
    <div className="app">
      <h1>Services Manager</h1>
      <ServiceForm onServiceCreated={handleServiceCreated} />
      <ServiceList />
    </div>
  );
};

export default App;