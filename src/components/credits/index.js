import { Component } from 'preact'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import style from './style'

import creditsList from './credits-list'

import Footer from 'async!../footer'

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
			<div id={style.credits}>
				<header>
          <div class={style.imageHeader}>
            <h1>Crédits</h1>
          </div>
        </header>
				<section class={style.content}>
          <div class={style.home}>
            <a href="./"><FontAwesomeIcon icon={["fas", "home"]} /> Retour à l&apos;accueil</a>
          </div>

  				Les images utilisées pour la réalisation de ce site web proviennent des sources suivantes :
  				<CreditsList credits={creditsList}/>
          <br />
          Le design du site a été inspiré par <a href='https://html5up.net/landed'>Html5up Landed</a>.
				</section>
        <Footer />
			</div>
		)
	}
}
