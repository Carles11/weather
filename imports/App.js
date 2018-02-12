import React from 'react'
//this imports the React library
import Header from './Header'
import ModalExampleSize from './Loc_button'
import axios from 'axios'
import FlipMove from 'react-flip-move'
import TodayItem from './TodayItem'  
import WeatherList from './WeatherList'

export default class App extends React.Component{
//this declares the class App and at the same time it exports it

	constructor(){
		super()
		this.state = {
			city: '',
			icon: '',
			list: [],
			max: '',
			min: ''
		}

		this.getInfo = this.getInfo.bind(this)
		//this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this)
	}

	componentWillMount(){
		var that = this
		navigator.geolocation.getCurrentPosition(location =>{
			that.getInfo(location.coords.latitude, location.coords.longitude)

		})
	}
	getInfo(latitude, longitude){
		var that = this
		let url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&units=metric&cnt=8&APPID=71d4009dcf0a0170e9a484cd0064f300`
	    axios.get(url)
	    	.then((response)=>{
	    		that.setState({
	    			city: response.data.city.name, 
	    			icon: response.data.list[0].weather[0].icon,
	    			description: response.data.list[0].weather[0].description,
	    			list: response.data.list,
	    			max:  response.data.list[0].temp.max,
	    			min:  response.data.list[0].temp.min
	    		})
	    		console.log(response)
			})

		}
	

	//	capitalizeFirstLetter(descript) {
	//		var descript = this.state.description;
	//	  	return descript.charAt(0).toUpperCase() + descript.slice(1);
	//	}
		
		

	render(){

		let style = {
			margin:'auto',
			marginHight: '100px' 
		}
		
        //this is the render function inside of which 
        //we have what that needs to be displayed from this component
        return(
                <center>
                <div className = 'App'>	
                	<span >
                		<Header getInfo ={this.getInfo}/> 
                	</span>
                	<span style={style}>
                		<TodayItem 
                			city = {this.state.city} 
                			icon = {this.state.icon}
                			descript = {this.state.description} 
                			max = {this.state.max} 
                			min = {this.state.min} 
                		/>
                	</span>
                	<span>
                		<WeatherList list = {this.state.list}
                		/>
                	</span>
                </div>
                </center>
                )
    }
}