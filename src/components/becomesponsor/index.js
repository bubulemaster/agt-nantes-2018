import { Component } from 'preact'

import ExtraPage from 'async!../extrapage'

import style from './style'

export default class BeComeSponsor extends Component {
	render() {
		return (
			<ExtraPage title="Devenir sponsor" headerClass={style.becomesponsor}>
				<p>L&apos;appel à sponsors est désormais ouvert.</p>

				<p>Les informations sur le sponsoring peuvent être consultées <a href="https://drive.google.com/open?id=17S8IDf-Gk5TyZlM0yG0p9S0KmkPKJcMJ">ici</a>.</p>

				<p>Si vous souhaitez nous aider dans l&apos;organisation de cet événement, n&apos;hésitez pas à nous contacter via ce <a href="https://goo.gl/forms/Z7HHmQNSH4QjWE5B2">formulaire</a> pour que nous puissions vous envoyer la convention de sponsoring.</p>
			</ExtraPage>
		)
	}
}
