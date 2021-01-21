import {LitElement, html, css} from 'lit-element';

class MuPageTitle extends LitElement {


  render() {
		return html`
		<link rel="stylesheet" href="//www.marshall.edu/wp-content/themes/marsha/css/marsha2.0.css">
		<h1><slot class="entry-title font-sans uppercase font-semibold text-gray-700 mb-4 text-3xl lg:text-4xl"></slot></h1>
		`;
	}
}

customElements.define('mu-page-title', MuPageTitle);
