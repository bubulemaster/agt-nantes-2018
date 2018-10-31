import { Component } from 'preact'

import style from './style'
import btnStyle from '../btn'

import grillage from '../grillade-grid'

import whatisList from './whatis-list'

function OneDay(props) {
	return (
    <div class={style.whatisDay}>
  		<div class={[style[props.cssclass], style.whatisDayItem].join(' ')}>
  		</div>
			<h3>{props.text}</h3>
    </div>
	)
}

function WhatisList(props) {
  const whatis = props.whatis

	let listItems = []

	whatis.forEach(day => listItems.push(<OneDay cssclass={day.cssclass} text={day.text} />))

  return (
		<div>
    	{listItems}
		</div>
  )
}

export default class Whatis extends Component {
	render() {
		return (
			<section id={style.whatIs}>
				<header>
					<h1>L'Agile Tour Nantes 2018 c'est...</h1>
				</header>

				<div class={grillage.autogrid}>
					<div class={[style.agtDay, style.agtDay1].join(' ')}>
						<div class={style.agtDayBackgroundOpacity}>
							<div class={style.agtDayContent}>
								<h2>Journée #1 : par la pratique</h2>

								<WhatisList whatis={whatisList.dayOne} />
							</div>
						</div>
					</div>
					<div class={[style.agtDay, style.agtDay2].join(' ')}>
						<div class={style.agtDayBackgroundOpacity}>
							<div class={style.agtDayContent}>
								<h2>Journée #2 : les sessions</h2>

								<WhatisList whatis={whatisList.dayTwo} />
							</div>
						</div>
					</div>
				</div>

				<div class={style.schedule}>
					<a class={[btnStyle.btn, style.btnSchedule].join(' ')} href="/schedule">Programme complet</a>
				</div>
			</section>
		)
	}
}
