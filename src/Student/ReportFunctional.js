import React from 'react';
import StudentFunctional from './StudentFunctional';

const ReportFunctional = props => {
    const {students} = props;

    const studentsHtml = students.map(student => {
        return (
            <StudentFunctional id={student.id} name={student.name} math={student.marks.math} 
                        science={student.marks.science} english={student.marks.english} social={student.marks.social} />
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

export default ReportFunctional;