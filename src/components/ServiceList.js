import React, { useEffect, useState } from 'react';
import { getAllServices, deleteService } from './api';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await getAllServices();
      setServices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteService(id);
      fetchServices();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="service-list">
      <h2>Services</h2>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Service Name</th>
            <th>Service Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service.id}>
              <td>{index + 1}</td>
              <td>{service.name}</td>
              <td>{service.code}</td>
              <td>
                <button onClick={() => handleDelete(service.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;