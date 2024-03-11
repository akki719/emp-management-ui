import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { getEmployees } from './../Services/apiService';
import Popup from './Popup';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Manager Name', accessor: 'manager' }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: employees
  });

  const handleEmployeeInfo = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleClosePopup = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="container">
      <h2>Employees</h2>
      <table className="employeeTable" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => handleEmployeeInfo(row.original)}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedEmployee && <Popup employee={selectedEmployee} onClose={handleClosePopup} />}
    </div>
  );
};

export default Employees;