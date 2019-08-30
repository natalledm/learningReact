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

        const totals = {
            count: 0,
            math: 0,
            science: 0,
            english: 0,
            social: 0,
            sum: 0
        };

        for (let student of students) {
            totals.count += 1;
            totals.math += student.marks.math;
            totals.science += student.marks.science;
            totals.english += student.marks.english;
            totals.social += student.marks.social;
            totals.sum += student.marks.math + student.marks.science + student.marks.english + student.marks.social;
        }

        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>English</th>
                    <th>Social</th>
                    <th>Sum</th>
                </tr>
                
                { studentsHtml }

                <tr>
                    <th>Total</th>
                    <td>{totals.count}</td>
                    <td>{totals.math / totals.count}</td>
                    <td>{totals.science / totals.count}</td>
                    <td>{totals.english / totals.count}</td>
                    <td>{totals.social / totals.count}</td>
                    <td>{totals.sum / totals.count}</td>
                </tr>
            </table>
        );
    }
}