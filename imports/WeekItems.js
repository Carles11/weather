import React from 'react'
import { Images } from './Images'

//use this to get the changing icons to display
//response.data.list[0].weather[0].icon

export default class WeekItems extends React.Component {

	render(){

		let style = {
			width:'50px',
			margin:'auto'
		}
		return(
			
			<div>
					<img style={style} src={Images[this.props.icon]}/><br />
					Max: {this.props.max}<br />
					Min: {this.props.min}				
			</div>
		)
	}
}