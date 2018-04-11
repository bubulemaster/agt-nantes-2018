import { Component } from 'preact'

import style from './style'

function Year(props) {
	if (props.year % 2 === 0) {
		return <div class={style.year}>{props.year}</div>
	}

	return (
		<div class={[style.year, style.odd].join(' ')}>{props.year}</div>
	)
}

function YearList(props) {
  const start = props.start
	const end = props.end

	let listItems = []

	for (let index = start; index <= end; index++) {
		listItems.push(<Year year={index} />)
	}

  return (
    <div>{listItems}</div>
  )
}

export default class Timeline extends Component {
	render() {
		return (
			<div class={style.timeline}>
				<YearList start="2009" end="2018" />
				<div class={[style.year, style.image].join(' ')}>&nbsp;</div>
		  </div>
		)
	}
}
