import React from 'react'
import Loc_button from './Loc_button'
import Date_comp from './Date_comp'
import Clock_comp from './Clock_comp'


export default class Header extends React.Component {

	render(){
		let style = {
			display:'grid',
			gridTemplateColumns:'1fr 1fr 1fr'
		}
		return(
			<div style={style} className="header_grid">
				<Loc_button className='row' getInfo = {this.props.getInfo}/>
				<Date_comp className='row'/>
				<Clock_comp className='row'/>
			</div>
		)
	}
}



