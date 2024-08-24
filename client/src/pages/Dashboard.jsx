import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../services/ApiEndpoint';
import './Dashboard.css'; 
function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details upon loading the dashboard
    const fetchUser = async () => {
      try {
        const request = await get('/api/auth/checkUser');
        const response = request.data;

        if (response) {
          setUser(response); // Set the user data
        } else {
          alert('User not authenticated, redirecting to login.');
          navigate('/login'); // Redirect to login if user is not authenticated
        }
      } catch (error) {
        console.log(error);
        alert('Error fetching user data.');
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const request = await post('/api/auth/logout');
      if (request.data.message === 'user Logout successfully') {
        alert('Logout successful');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
      alert('Error during logout.');
    }
  };

  return (
    <div className="dashboard-container">
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <h3>
            {user.role === 'admin' ? 'Hello Admin!' : 'Hello User!'}
          </h3>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default Dashboard;
