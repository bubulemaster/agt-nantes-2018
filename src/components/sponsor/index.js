import { Component } from 'preact'

import style from './style'
import btnStyle from '../btn'

import sponsorsList from './sponsors-list'

function OneSponsor(props) {
	return (
    <div>
  		<a class={[style[props.cssclass], style.sponsorLogo].join(' ')} href={props.web}>
  		</a>
    </div>
	)
}

function SponsorsList(props) {
  const sponsors = props.sponsors

	let listItems = []

	sponsors.forEach(sponsor => listItems.push(<OneSponsor cssclass={sponsor.cssclass} web={sponsor.web}/>))

  return (
		<div class={'grid-3'}>
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
          <a class={[btnStyle.btn, style.btnBeComeSponsor].join(' ')} href="/becomesponsor">Devenir sponsor</a>
        </div>
			</section>
		)
	}
}
