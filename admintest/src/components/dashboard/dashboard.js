import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import '../../styles/dashboard/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const dailyVisitsData = [
    { day: 'Mon', visits: 150 },
    { day: 'Tue', visits: 220 },
    { day: 'Wed', visits: 180 },
    { day: 'Thu', visits: 300 },
    { day: 'Fri', visits: 250 },
    { day: 'Sat', visits: 280 },
    { day: 'Sun', visits: 170 },
  ];

  const earthquakeData = [
    { month: 'Aug', earthquakes: 1 },
    { month: 'Sep', earthquakes: 1 },
    { month: 'Oct', earthquakes: 2 },
    { month: 'Nov', earthquakes: 2 },
    { month: 'Dec', earthquakes: 2 },
    { month: 'Jan', earthquakes: 2 },
    { month: 'Feb', earthquakes: 1 },
    { month: 'Mar', earthquakes: 0 },
    { month: 'Apr', earthquakes: 0 },
    { month: 'May', earthquakes: 3 },
    { month: 'Jun', earthquakes: 0 },
    { month: 'Jul', earthquakes: 0 },
  ];

  return (
    <div className="dashboard-container">
      <Row className='align-items-center'>
        <Col xs={12} className='d-flex justify-content-left mb-4'>
          <button 
            className="logout-button"
            onClick={() => navigate('/sign-in')} // Handle routing
          >
            Logout
          </button>
        </Col>
      </Row>
      <Row className='extend-margin'>
        <Col xs={12} className='mb-4'>
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="user-count-title">User Count</Card.Title>
              <Card.Text className="user-count-text">Currently: 24</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Daily Visits</Card.Title>
              <LineChart width={850} height={500} data={dailyVisitsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#007bff" />
              </LineChart>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Recently Recorded Earthquakes</Card.Title>
              <BarChart width={850} height={500} data={earthquakeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="earthquakes" fill="#7286D3" />
              </BarChart>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
