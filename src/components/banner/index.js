import { Component } from 'preact'
import CountUp from 'react-countup'

import style from './style'
import grillage from '../grillade-grid'

import Timeline from 'async!../timeline'

export default class Banner extends Component {
	render() {
		return (
			<section id={style.banner}>
		    <div class={style.content}>
		      <header>
		        <h1>Les 8 et 9 Novembre 2018</h1>
		        <p>IMT Atlantique Bretagne-Pays de la Loire<br />
		        Campus de Nantes<br />
		        4, rue Alfred Kastler - La Chantrerie<br />
		        44307 Nantes cedex 3</p>
		      </header>

		      <div class={style.image}>&nbsp;</div>

					<div class={[style.stats, grillage.autogrid].join(' ')}>
						<div>
							<CountUp start={0} end={280} redraw={true} duration={3} className={style.counter} /> <br />
							Participants
						</div>
						<div>
							<CountUp start={0} end={25} redraw={true} duration={5} className={style.counter} /> <br />
							Conférences
						</div>
						<div>
							<CountUp start={0} end={50} redraw={true} duration={4} className={style.counter} /> <br />
							Présentateurs
						</div>
					</div>
		    </div>
		  </section>
		)
	}
}
