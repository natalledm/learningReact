import React from 'react';

const StudentFunctional = props => { 
    const { id, name, math, science, english, social } = props;
    const marksTotal = math + science + english + social;
    return (
        <tr class="student">
            <td>{ id }</td>
            <td>{ name }</td>
            <td>{ math }</td>
            <td>{ science }</td>
            <td>{ english }</td>
            <td>{ social }</td>
            <td>{ marksTotal }</td>
        </tr>
    )
}

export default StudentFunctional;