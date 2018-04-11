import { Component } from 'preact'

import style from './style'
import grillage from '../grillade-grid'

import speakerList from './sponsors-list'

function OneSponsor(props) {
	const imageInlineStyle = {
		backgroundImage: `url(${props.image})`
	}

	return (
		<div class={style.speaker}>
			<div class={style.speakerImg} style={imageInlineStyle}></div>
			<div class={style.name}>{props.name}</div>
			<div class={style.subtitle}>{props.subtitle}</div>
		</div>
	)
}

function SponsorsList(props) {
  const speakers = props.speakers

	let listItems = []

	speakers.forEach(speaker => listItems.push(<OneSponsor name={speaker.name} subtitle={speaker.subtitle} image={speaker.image}/>))

  return (
		<div class={[grillage.autogrid, style.speakerList].join(' ')}>
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

				TODO
			</section>
		)
	}
}
