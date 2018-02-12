import React from 'react';
var FontAwesome = require('react-fontawesome');

export default class Date_comp extends React.Component {
    constructor() {
        super();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        var today = new Date(),
        	date = today.toLocaleDateString('en-EN', options);
            //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                <FontAwesome name='calendar' />{this.state.date}
            </div>
        )
    }
}