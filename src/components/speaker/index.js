import { Component } from 'preact'

import style from './style'

import grillage from '../grillade-grid'

import speakerList from './speakers-list'

function OneSpeaker(props) {
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

function SpeakersList(props) {
  const speakers = props.speakers

	let listItems = []

	speakers.forEach(speaker => listItems.push(<OneSpeaker name={speaker.name} subtitle={speaker.subtitle} image={speaker.image}/>))

  return (
		<div class={['grid-3', style.speakerList].join(' ')}>
    	{listItems}
		</div>
  )
}

export default class Speaker extends Component {
	render() {
		return (
			<section id={style.speaker}>
				<header>
					<h1>Nos speakers</h1>
				</header>

				<SpeakersList speakers={speakerList} />
			</section>
		)
	}
}
