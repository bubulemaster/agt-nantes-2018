import { Component } from 'preact'

// Font-Awesome
import { faMapSigns } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import style from './style'

export default class Map extends Component {
	render() {
		return (
			<section id={style.mapWithCursor}>
				<div class={style.blocknote}>
					<div class={style.locationIcon}>
						<FontAwesomeIcon icon={["fas", "map-signs"]} />
					</div>
					<p class={style.siteAndTime}>Lieu et horaires</p>
					<p>IMT Atlantique Bretagne-Pays de la Loire</p>
					<p>Campus de Nantes</p>
					<p>4, rue Alfred Kastler - La Chantrerie</p>
					<p>44307 Nantes cedex 3</p>
					<p>&nbsp;</p>
					08:30-17:45
				</div>
			</section>
		)
	}
}
