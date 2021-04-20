import {LitElement, html, css} from 'lit-element';

class MuNavSite extends LitElement {
	render() {
		return html`
			<div class="w-full hidden lg:block">
				<div class="w-full xl:max-w-screen-xl lg:px-10 xl:px-0 mx-auto bg-white">
					<div class="nav-site-container">
						<div id="menu-primary-navigation" class="nav-site">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
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
