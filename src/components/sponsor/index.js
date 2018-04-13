import { Component } from 'preact'

import style from './style'
import grillage from '../grillade-grid'

import sponsorsList from './sponsors-list'

function OneSponsor(props) {
	return (
    <div>
  		<div class={[style[props.cssclass], style.sponsorLogo].join(' ')}>
  		</div>
    </div>
	)
}

function SponsorsList(props) {
  const sponsors = props.sponsors

	let listItems = []

	sponsors.forEach(sponsor => listItems.push(<OneSponsor cssclass={sponsor.cssclass} />))

  return (
		<div class={grillage.autogrid}>
    	{listItems}
		</div>
  )
}

export default class Sponsor extends Component {
	render() {
		return (
			<section id={style.sponsor}>
				<div>
					<header>
						<h1>Merci à nos sponsors</h1>
					</header>
				</div>

				<SponsorsList sponsors={sponsorsList} />

				<div class={style.beComeSponsor}>
          <a class={[style.btn, style.btnBeComeSponsor].join(' ')} href="http://www.agilenantes.org/evenements/agile-tour-nantes/agile-tour-nantes-2018/">Devenir sponsor</a>
        </div>
			</section>
		)
	}
}
