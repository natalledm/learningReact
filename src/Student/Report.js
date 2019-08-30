import React, {Component} from 'react';


// Create a report card component that receives (or show):
// the list of students with the headings (like a table), 
// have an extra table with total marks for each student.
// At the bottom, needs a total number of students,
// and a average marks for the entire class for each subject.


export class ReportCard extends Component {
    render () {
        const students = [
            {
                id: 1,
                fullName: 'Alice Smith',
                marks: { 
                    math: 8, 
                    science: 10, 
                    english: 6, 
                    social: 5
                }
            },
            {
                id: 2,
                fullName: 'John Smith',
                marks: { 
                    math: 6, 
                    science: 4, 
                    english: 10, 
                    social: 6
                }
            },

        ];


        const studentsHtml = students.map(student => {
            const marksTotal = student.marks.math + student.marks.science + student.marks.english + student.marks.social;
            return (
                <tr class="student">
                    <td>{ student.id }</td>
                    <td>{ student.fullName }</td>
                    <td>{ student.marks.math }</td>
                    <td>{ student.marks.science }</td>
                    <td>{ student.marks.english }</td>
                    <td>{ student.marks.social }</td>
                    <td>{ marksTotal }</td>
                </tr>
            );
        });




        return (
            <table>
                <tr>
                    <th>id</th>
                    <th>fullName</th>
                    <th>marksMath</th>
                    <th>marksScience</th>
                    <th>marksEnglish</th>
                    <th>marksSocial</th>
                    <th>total</th>
                </tr>
                
                { studentsHtml }

                <tr>
                    <th>total</th>
                    <td>2</td>
                    <td>8</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>32</td>
                </tr>
            </table>
        );
    }
}