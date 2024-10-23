import React, { useState } from 'react';
import { useAddRequestMutation } from '../services/api'; 
import './AddRequest.css';

const AddRequest = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    partNo: '',
    quantity: '',
    dateOfNeed: '',
  });

  const [error, setError] = useState(null);
  const [addRequest] = useAddRequestMutation();

  if (!visible) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getCookie = (cookieName) => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie); 
    const cookies = decodedCookie.split(';'); 

    // Loop through cookies to find the one with the matching name
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length); 
        }
    }

    return ""; 
};

const decodeToken = (token) => {
    const base64Url = token.split('.')[1]; 
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); 

    // Decode the base64 payload to a JSON string
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload); 
};

const getDecodedTokenFromCookie = (cookieName) => {
    const token = getCookie(cookieName); 
    if (token) {
        return decodeToken(token).user.id; 
    } else {
        console.log('Token not found in cookie');
        return null;
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  
    const userId =  getDecodedTokenFromCookie('token'); 
  
    try {
      await addRequest({
        ...formData,
        userId 
      }).unwrap();
      onClose();  
    } catch (err) {
      console.error('Error adding request:', err);
      setError(err.message || 'Failed to add request. Please try again.');
    }
  };

  return (
    <div className="add-request-overlay">
      <div className="add-request-content">
        <h2>Add Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="partNo">Part No</label>
            <input
              type="text"
              id="partNo"
              name="partNo"
              value={formData.partNo}
              onChange={handleChange}
              placeholder="Enter part number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfNeed">Date of Need</label>
            <input
              type="date"
              id="dateOfNeed"
              name="dateOfNeed"
              value={formData.dateOfNeed}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-add">Add</button>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default AddRequest;
