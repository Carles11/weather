
import React from 'react'
import WeekItems from './WeekItems'

export default class WeatherList extends React.Component{


	render(){
			if(this.props.list.length > 0){
				return(
					<div className="body_grid">
					{this.props.list.map((ele,i)=>{
						if (i == 0 || i == 7){
							return null
						}else return <WeekItems 
							key	 = {i} 
							list = {ele.list}
							id 	 = {i}
							icon = {ele.weather[0].icon}
							max = {ele.temp.max} 
                			min = {ele.temp.min} 
							/>	
					})}
					</div>
				)
			}else return null

		}
}