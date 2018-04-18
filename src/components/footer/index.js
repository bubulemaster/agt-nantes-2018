import { Component } from 'preact'

import style from './style'

// Font-Awesome
import { faGlobe } from '@fortawesome/fontawesome-free-solid'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
	render() {
		return (
			<footer id={style.footer}>
				<ul class={style.icons}>
				  <li><a href="https://twitter.com/agilenantes" class="icon"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
					<li><a href="http://www.agilenantes.org" class="icon"><FontAwesomeIcon icon={["fas", "globe"]} /></a></li>
					<li><a href="https://groups.google.com/group/agilenantes" class="icon"><FontAwesomeIcon icon={["far", "envelope"]} /></a></li>
				</ul>
				<ul class={style.copyright}>
					<li>&copy; Agile Nantes. Tous droits réservés.</li>
					<li>Download <a href="https://github.com/bubulemaster/agt-nantes-2018">source code</a> of this website</li>
					<li><a href="./credits">Crédits</a></li>
					<li><a href="./becomesponsor">Devenir sponsor</a></li>
				</ul>
			</footer>
		)
	}
}
