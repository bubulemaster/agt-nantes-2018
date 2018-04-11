import { Component } from 'preact'

import style from './style'

import Timeline from 'async!../timeline'

// Font-Awesome
import { faArrowDown } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//fontawesome.library.add(faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

export default class Banner extends Component {
	render() {
		return (
			<section id={style.banner}>
			  <Timeline />

		    <div class={style.content}>
		      <header>
		        <h1>Les 8 et 9 Novembre 2018</h1>
		        <p>IMT Atlantique Bretagne-Pays de la Loire<br />
		        Campus de Nantes<br />
		        4, rue Alfred Kastler - La Chantrerie<br />
		        44307 Nantes cedex 3</p>
		      </header>
		      <div class={style.image}>&nbsp;</div>
		    </div>

		    <a id={style.more} href="#me">
					<FontAwesomeIcon icon={["fas", "angle-down"]} />
		    </a>
		  </section>
		)
	}
}
