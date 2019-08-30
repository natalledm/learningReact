import React, {Component} from 'react';


// Create a report card component that receives (or show):
// the list of students with the headings (like a table), 
// have an extra table with total marks for each student.
// At the bottom, needs a total number of students,
// and a average marks for the entire class for each subject.


export class ReportCard extends Component {
    render () {
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
                <tr>
                    <td>1</td>
                    <td>Alice Smith</td>
                    <td>8</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>John Smith</td>
                    <td>8</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>32</td>
                </tr>
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