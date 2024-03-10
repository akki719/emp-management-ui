import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDepartments } from './../Services/apiService'; // Import the getDepartments API function

const Home = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartments();
        setDepartments(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div>
      {departments.map((dept, index) => (
        <div key={index}>
          <Link to="/employees">
            <h2>{dept.department}</h2>
            <p>Headcount: {dept.headcount}</p>
          </Link>
        </div>
      ))}
      <div>
        <Link to="/employees">
          <h2>All</h2>
          <p>Total count: {departments.reduce((acc, curr) => acc + curr.headcount, 0)}</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;