import React, { useState, useEffect } from 'react';
import './PatientDetails.css';

const PatientDetails = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/patient-data');
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {patientData ? (
        <div className="patient-details">
          <div className="patient-info">
            <img src={patientData.patientImage} alt="Patient Image" />
            <h2>{patientData.name}</h2>
            <p>Date of Birth: {patientData.dateOfBirth}</p>
            <p>Gender: {patientData.gender}</p>
            <p>Contact Info: {patientData.contactInfo}</p>
            <p>Emergency Contacts: {patientData.emergencyContacts}</p>
            <p>Insurance Provider: {patientData.insuranceProvider}</p>
            <button>Show All Information</button>
          </div>
          <div className="diagnosis-history">
            <h3>Diagnosis History</h3>
            <div id="blood-pressure-chart">
              {/* Render the blood pressure chart here */}
            </div>
            <div className="vital-signs">
              <div className="vital-sign">
                <img src="lung-icon.png" alt="Respiratory Rate" />
                <p>Respiratory Rate: {patientData.respiratoryRate} bpm</p>
              </div>
              <div className="vital-sign">
                <img src="temperature-icon.png" alt="Temperature" />
                <p>Temperature: {patientData.temperature}°F</p>
              </div>
              <div className="vital-sign">
                <img src="heart-icon.png" alt="Heart Rate" />
                <p>Heart Rate: {patientData.heartRate} bpm</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientDetails;