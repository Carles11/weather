import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import InputComp from './InputComp'

export default class Loc_button extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {

  let style = {
    height: '25px',
    width: '25px'
  } 
    return (
      <Modal
        trigger={
          <img style = {style} onClick={this.handleOpen}
            src="http://res.cloudinary.com/dssldws2k/image/upload/v1517926394/location.png"/>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
        <Header icon='browser' content='More weather!' />
        <Modal.Content >
          <h3>Check the weather in other cities.</h3>
          <InputComp 

          getInfo={this.props.getInfo} 
          handleClose={this.handleClose}
          className="go_butt" />
        </Modal.Content>
        
      </Modal>
    )
  }
}

