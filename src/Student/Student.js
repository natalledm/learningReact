import React, {Component} from 'react';

// Create a list of students with the following: id, fullName, marksMath, marksScience, marksEnglish, marksSocial

export class Student extends Component {
    render () {
        const { id, name, math, science, english, social } = this.props;
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
}