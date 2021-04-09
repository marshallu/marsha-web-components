import {LitElement, html, css} from 'lit-element';
import './mu-nav-mobile.js';
import './mu-nav-green.js';
import './mu-nav-primary.js';
import './mu-nav-site.js';

class MuHeader extends LitElement {
	static get properties() {
		return {
			title: { type: String },
			href: { type: String },
			bgUrl: { type: String },
			bgPos: { type: String },
			navigation: { type: Object },
		};
	}

	constructor() {
    super();
    this.title = '';
    this.href = '/';
		this.bgUrl = '';
		this.bgPos = '';
		this.navigation = {}
	}

	render() {
		return html`
		<div x-data="{ mobileMenuOpen: false, megaOpen: 0, showSearch: false }">
			<mu-nav-mobile></mu-nav-mobile>

			<header>
				<nav aria-labelledby="primary-full-navigation">
					<mu-nav-green></mu-nav-green>

					<mu-nav-primary></mu-nav-primary>
				</nav>
			</header>

		${this.bgUrl ?
	 html`<div class="hero-tertiary relative min-h-48 bg-no-repeat bg-cover bg-gray-500 flex items-center px-4 lg:min-h-96 xl:px-0" style="background-image: url(${this.bgUrl}); background-position: 0% 0%">
		<div class="absolute inset-0 w-full h-full bg-gradient-to-t from-black-70 via-black-30 to-transparent">
			<div class="flex flex-col h-full justify-end">
				<div class="font-serif text-white uppercase text-3xl lg:text-5xl w-full xl:max-w-screen-xl px-6 lg:px-10 xl:px-0 xl:mx-auto leading-snug mb-4 lg:mb-6">
					<a href="${this.href}" class="text-white hover:text-white text-shadow-strong font-semibold">${this.title}</a>
				</div>
			</div>
		</div>
	</div>` :
	 html`<div class="bg-gray-800 text-white py-0 px-0">
			<div class="font-serif text-white uppercase text-2xl lg:text-5xl h-full w-full xl:max-w-screen-xl px-6 lg:px-10 xl:px-0 xl:mx-auto flex flex-col justify-center py-6">
				<a href="${this.href}" class="text-white hover:text-white">${this.title}</a>
			</div>
		</div>
		` }
			<div class="w-full hidden lg:block relative z-50">
				<div class="w-full xl:max-w-screen-xl lg:px-10 xl:px-0 mx-auto bg-white">
					<div class="nav-site">
						<mu-nav-site></mu-nav-site>
					</div>
				</div>
			</div>
		</div>
		<!-- END MOBILE NAV -->
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
customElements.define('mu-header', MuHeader);
