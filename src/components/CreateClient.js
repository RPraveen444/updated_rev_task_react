import React, { useState } from 'react';
import '../styles/CreateClient.css'; 

const CreateClient = () => {
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientDescription, setClientDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Client Created:', { clientName, clientEmail, clientDescription });
        alert('Client created successfully!');
        setClientName('');
        setClientEmail('');
        setClientDescription('');
    };

    return (
        <div className="create-client-container">
            <h2 className="create-client-title"><b>Create Client</b></h2>
            <form onSubmit={handleSubmit} className="create-client-form">
                <label htmlFor="client-name-field" className="create-client-label">Client Name:</label>
                <input
                    type="text"
                    id="client-name-field"
                    name="client-name-field"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="create-client-input"
                    required
                />
                <label htmlFor="client-email-field" className="create-client-label">Client Email:</label>
                <input
                    type="email"
                    id="client-email-field"
                    name="client-email-field"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="create-client-input"
                    required
                />
                <label htmlFor="client-description-field" className="create-client-label">Client Description:</label>
                <input
                    type="text"
                    id="client-description-field"
                    name="client-description-field"
                    value={clientDescription}
                    onChange={(e) => setClientDescription(e.target.value)}
                    className="create-client-input"
                    required
                />
                <button type="submit" className="create-client-button">Create Client</button>
            </form>
        </div>
    );
};

export default CreateClient;