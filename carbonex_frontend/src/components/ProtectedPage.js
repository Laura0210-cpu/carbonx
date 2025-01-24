import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Use the token stored after login
    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
    } else {
      // Check the token by making an API call to the protected endpoint
      fetch('http://127.0.0.1:8000/api/protected/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            setAuthorized(true);
          } else {
            navigate('/login'); // Redirect if the user isn't authorized
          }
        })
        .catch(() => navigate('/login')) // Handle server errors
        .finally(() => setLoading(false));
    }
  }, [navigate]);

  if (loading) return <div>Loading...</div>;

  return authorized ? (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to the Protected Page</h1>
      <p>This page is only accessible to logged-in users!</p>
    </div>
  ) : null;
};

export default ProtectedPage;
