import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDepartments } from './../Services/apiService';

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
    <div className="container">
      {departments.map((dept, index) => (
        <Link key={index} to="/employees" className="departmentLink">
          <div>
            <h2>{dept.department}</h2>
            <p>Headcount: {dept.headcount}</p>
          </div>
        </Link>
      ))}
      <Link to="/employees" className="totalCountLink">
        <div>
          <h2>All</h2>
          <p>Total count: {departments.reduce((acc, curr) => acc + curr.headcount, 0)}</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;