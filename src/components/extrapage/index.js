import { Component } from 'preact'

import style from './style'

// Font-Awesome
import { faHome } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Footer from 'async!../footer'

export default class ExtraPage extends Component {
	constructor(props) {
		super(props)

		this.props = props
	}

	render() {
		return (
			<div id={style.extrapage}>
				<header class={this.props.headerClass}>
          <div class={style.imageHeader}>
            <h1>{this.props.title}</h1>
          </div>
        </header>
				<section class={style.content}>
          <div class={style.home}>
            <a href="./"><FontAwesomeIcon icon={["fas", "home"]} /> Retour à l&apos;accueil</a>
          </div>

          {this.props.children}
				</section>
			</div>
		)
	}
}
