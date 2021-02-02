import {LitElement, html, css} from 'lit-element';

class MuNavSite extends LitElement {
	render() {
		return html`

	`;
	}

	createRenderRoot() {
		/**
		* Render template without shadow DOM. Note that shadow DOM features like
		* encapsulated CSS and slots are unavailable.
		*/
		return this;
	}
}
customElements.define('mu-nav-site', MuNavSite);
