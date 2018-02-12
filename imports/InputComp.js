
import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng, geocodeByPlaceId } from 'react-places-autocomplete'

// geocodeByAddress and geocodeByPlaceId utility functions are named exports


export default class InputComp extends React.Component{

	constructor(props) {
    super(props)
    this.state = { address: 'Enter a city' }
    this.onChange = (address) => this.setState({ address })
  }


  handleFormSubmit (event)  {
    
    event.preventDefault()
      	var that = this

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then((latLng) => {
      	
      	that.props.getInfo(latLng.lat,latLng.lng)
      })

      .catch(error => console.error('Error', error))
      that.props.handleClose()
  }
  handleSelect(address, placeId){
    
  }
  render() {
    const inputProps = {

      value: this.state.address,
      onChange: this.onChange,
    }
    let style = {
		width: '300px' 
	} 


    return (
      <form 
      style={style}
      onSubmit={this.handleFormSubmit.bind(this)}
      className="button">
        <PlacesAutocomplete 

            className="top_item" inputProps={inputProps}
             />
            
            
          <Button
            color='blue' 
            onClick={this.handleClose} inverted
            onSubmit={this.handleFormSubmit} inverted
            >
            <Icon 
            name='checkmark' /> Go
          </Button>
        
      


      </form>
    )
  }
}