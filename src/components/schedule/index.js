import { Component } from 'preact'

import ExtraPage from 'async!../extrapage'

import style from './style'

import schedule from './sessions'
import level from './level'
import spectator from './spectator'
import rooms from './rooms'

function convertMinutesToHours(minutes) {
	let hour = Math.floor(minutes / 60)
	let min = minutes % 60

	let response

	if (hour > 0) {
		response = hour + 'h ' + min + 'm'
	} else {
		response = min + 'm'
	}

	return response
}

function ScheduleOneRoom(props) {
	let indexOfRoom = props.rooms.indexOf(props.roomName)
	let sessionOfRoom = props.schedule.filter(s => s.room == indexOfRoom)

	let listSession = []

	sessionOfRoom.forEach(s => {
		let speakers = s.speakers.join(', ')
		let spectators = s.spectator.map(spec => props.spectator[spec]).join(', ')
		let duration = convertMinutesToHours(s.duration)

		listSession.push(
			<div class={style.session}>
				<p class={style.name}>{s.name}</p>
				<pre class={style.abstract}>{s.abstract}</pre>
				<p class={style.infos}>
					<span class={style.title}>Speaker(s):</span> {speakers}<br />
					<span class={style.title}>Niveau:</span> {props.level[s.level]}<br />
					<span class={style.title}>Public:</span> {spectators}<br />
				  <span class={style.title}>Durée :</span> {duration}<br />
				  <span class={style.title}>Horaire :</span> {s.time}<br />
				</p>
			</div>
		)
		})

	return (
		<div class={style.schedule}>
			<div class={style.nameRoom}>{props.roomName}</div>
			<div>
				{listSession}
			</div>
		</div>
	)
}


function ScheduleTable(props) {
	let listRooms = []

	props.rooms.forEach(r => listRooms.push(
		<ScheduleOneRoom roomName={r} rooms={props.rooms} schedule={props.schedule} level={props.level} spectator={props.spectator}  />
	))

  return (
		<div class='grid-6'>
			{listRooms}
		</div>
  )
}

export default class Schedule extends Component {
	render() {
		return (
			<ExtraPage title="Liste des sessions" headerClass={style.speakerpresentation}>
				<div class={style.day}>Jeudi</div>
				<ScheduleTable schedule={schedule[0]} level={level} spectator={spectator} rooms={rooms} />
				<div></div>
				<div class={style.day}>Vendredi</div>
				<ScheduleTable schedule={schedule[1]} level={level} spectator={spectator} rooms={rooms} />
			</ExtraPage>
		)
	}
}
