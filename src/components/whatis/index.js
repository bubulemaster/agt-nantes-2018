import { Component } from 'preact'

import style from './style'
import grillage from '../grillade-grid'

export default class Whatis extends Component {
	render() {
		return (
			<section id={style.whatIs}>
				<header>
					<h1>L'Agile Tour Nantes 2018 c'est...</h1>
				</header>

				<div class={grillage.autogrid}>
					<div class={[style.agtDay, style.agtDay1].join(' ')}>
						<div class={style.agtDayContent}>
							<h2>Journée #1 : par la pratique</h2>
							TODO mettre quelques photos qui représente le Dojo Coding, Fishball, Master Class
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
					<div class={[style.agtDay, style.agtDay2].join(' ')}>
						<div class={style.agtDayContent}>
							<h2>Journée #2 : les sessions</h2>
							TODO mettre quelques photos qui représente lighting talk, conférence
						</div>
					</div>
				</div>
			</section>
		)
	}
}
