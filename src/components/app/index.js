import { Component } from 'preact'

import './style'

import Banner from 'async!../banner'
import Whatis from 'async!../whatis'
import Map from 'async!../map'
import Speaker from 'async!../speaker'
import Sponsor from 'async!../sponsor'
import Buy from 'async!../buy'
import Footer from 'async!../footer'

export default class App extends Component {
	render() {
		return (
			<div>
				<Banner />
				<Whatis />
				<Map />
				<Speaker />
				<Sponsor />
				<Buy />
				<Footer />
			</div>
		)
	}
}
