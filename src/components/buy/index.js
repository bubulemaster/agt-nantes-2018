import { Component } from 'preact'

import style from './style'

export default class Buy extends Component {
	render() {
		return (
			<section id={style.buy}>
				<div>
					<header>
						<h1>Billets et réservation</h1>
					</header>
				</div>

				<div style="width:100%; text-align:left;">
					<iframe src="https://eventbrite.fr/tickets-external?eid=47351755375&ref=etckt"
						frameborder="0" height="393" width="100%" vspace="0" hspace="0"
						marginheight="5" marginwidth="5" scrolling="auto"
						allowtransparency="true"></iframe>

					<div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" >
						<a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="https://www.eventbrite.fr/">Développé par Eventbrite</a>
					</div>
				</div>
			</section>
		)
	}
}
