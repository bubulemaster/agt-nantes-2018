import { Component } from 'preact'

import ExtraPage from 'async!../extrapage'

import style from './style'

import creditsList from './credits-list'

function CreditsList(props) {
  const credits = props.credits

	let listItems = []

	credits.forEach(credit => listItems.push(<li><a href={credit}>{credit}</a></li>))

  return (
		<ul>
    	{listItems}
		</ul>
  )
}

export default class Credits extends Component {
	render() {
		return (
      <ExtraPage title="Crédits" headerClass={style.credits}>
        Les images utilisées pour la réalisation de ce site web proviennent des sources suivantes :
        <CreditsList credits={creditsList}/>
        <br />
        Le design du site a été inspiré par <a href='https://html5up.net/landed'>Html5up Landed</a>.
      </ExtraPage>
		)
	}
}
