import { Component } from 'preact'
import { sampleSize } from 'lodash'
import style from './style'

import grillage from '../grillade-grid'

import speakerList from './speakers-list'

// Font-Awesome
import { faGlobe } from '@fortawesome/fontawesome-free-solid'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export function OneSpeaker(props) {
	const speaker = props.speaker
	const style = props.style

	return (
		<div class={style.speaker}>
			<div class={[style.speakerImg, style[speaker.cssclass]].join(' ')}></div>
			<div class={style.name}>{speaker.name}</div>
			<div class={style.subtitle}>{speaker.subtitle}
				<span class={style.icons}>
					{speaker.twitter &&
						<a href={speaker.twitter}><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
					}
					{speaker.web &&
						<a href={speaker.web}><FontAwesomeIcon icon={["fas", "globe"]} /></a>
					}
				</span>
			</div>
		</div>
	)
}

function SpeakersList(props) {
  const speakers = sampleSize(props.speakers, 8)

	let listItems = []

	speakers.forEach(speaker => listItems.push(<OneSpeaker speaker={speaker} style={style}/>))

  return (
		<div class={['grid-3', style.speakerList].join(' ')}>
    	{listItems}
			<div class={[style.speaker, style.speakersList].join(' ')}>
				<div class={style.speakerImg}></div>
				<a href="/speakers">Liste complète des présentateurs</a>
			</div>
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
