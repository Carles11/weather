import React from 'react'
import Image from 'react-image-resizer'
import { Images } from './Images'

//use this to get the changing icons to display
//response.data.list[0].weather[0].icon

export default class TodayItem extends React.Component {

	constructor() {
        super();

        var today = new Date(),
        	date = today.getDate();
        this.state = {
            date: date
        };
    }

	render(){
		let style = {
			width:'150px',
			margin:'auto',
		}

		return(
			
			<div className="top_item">
				<h1>{this.props.city}</h1>
				<p>Today</p>
				<img style={style} src={Images[this.props.icon]}
				/>< br/>
				<p>{this.props.descript}</p>< br/>
				Max: {this.props.max}<br />
				Min: {this.props.min}
				
			</div>
			
		)
	}
}