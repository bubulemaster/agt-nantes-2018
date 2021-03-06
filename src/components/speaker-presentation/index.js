import { Component } from 'preact'

import ExtraPage from 'async!../extrapage'

import style from './style'
import styleSpeaker from '../speaker/style'
import speakerList from '../speaker/speakers-list'

import { OneSpeaker } from '../speaker'

function SpeakerLine(props) {
	const speaker = props.speaker

	const imageInlineStyle = {
		backgroundImage: `url(${speaker.image})`
	}

	return (
		<tr>
			<td class={style.speakerPhoto}>
				<OneSpeaker speaker={speaker} style={styleSpeaker}/>
			</td>
			<td class={style.speakerBio}>
			  <pre>
				{speaker.bio}
			  </pre>
			</td>
		</tr>
	)
}

function SpeakersTable(props) {
  const speakers = props.speakers.sort((a, b) => {
		let speakerName1 = a.name.split(' ')[1].trim()
		let speakerName2 = b.name.split(' ')[1].trim()

		return speakerName1.localeCompare(speakerName2)
	})

	let listItems = []

	speakers.forEach(speaker => listItems.push(<SpeakerLine speaker={speaker}/>))

  return (
		<table class={style.speakerTable}>
    	{listItems}
		</table>
  )
}

export default class SpeakerPresentation extends Component {
	render() {
		return (
			<ExtraPage title="Liste des speakers" headerClass={style.speakerpresentation}>
				<SpeakersTable speakers={speakerList} />
			</ExtraPage>
		)
	}
}
