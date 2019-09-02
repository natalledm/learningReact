import React from 'react';
import './App.css';
import ReportFunctional from './Student/ReportFunctional';

// Functional Component
const AppFunctional = props => {
    const students = [
      {
        id: 1,
        name: 'Alice Smith',
        marks: { 
            math: 8, 
            science: 10, 
            english: 6, 
            social: 5
        }
      },
      {
        id: 2,
        name: 'John Smith',
        marks: { 
            math: 6, 
            science: 4, 
            english: 10, 
            social: 6
        }
      },
    ];
    return (
      <div className="App">
        <ReportFunctional students={students} />
      </div>
    )
  }
  
  export default AppFunctional;