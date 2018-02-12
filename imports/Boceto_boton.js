
import React from 'react'
import Image from 'react-image-resizer'

export default class Boceto_boton extends React.Component{
	
	getPosition () {
		navigator.geolocation.getCurrentPosition(location =>{
		})
	}

	render(){

	var style = {
	  	image: {
		    border: 'none',
		    background: '#fefefe',
		},
	};
		return(
			<div>
			<button onClick = {this.getPosition.bind(this)}>
				<Image 
				src="http://res.cloudinary.com/dssldws2k/image/upload/v1517926394/location.png"
				height={ 25 }
		        width={ 25 }
		        style={style.image}
				/>
			</button>
			</div>

		)
	}
}

