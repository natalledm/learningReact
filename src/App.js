import React, { Component } from 'react';
import './App.css';
import { ReportCard } from './Student/Report';

class App extends Component {
  render() {
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
        <ReportCard students={students} />
      </div>
    );
  }
}

export default App;