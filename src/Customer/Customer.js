import React, {Component} from 'react';

/*
export class Customer extends Component {
    render() {
        return (
            <React.Fragment>
                <h6>My name is {this.props.name} and I am {this.props.age} years old </h6>        
            </React.Fragment>            
        );    
    }
}
*/



export function Customer ( props ) {
    const { name, age, city = "God knows where!", taxPercentage = 50 } = props;
    const taxDue = ( 1000000 * taxPercentage ) / 100;
    return (
        <React.Fragment>
            <h6>My name is {name} and I am {age} years old.  I live in { city } </h6>
            <h6>I pay {taxDue} every year</h6>        
        </React.Fragment>            
    );    
}