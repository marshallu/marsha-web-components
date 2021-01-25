import {LitElement, html, css} from 'lit-element';

class MuHeaderMinimal extends LitElement {
	static get properties() { return {
    title: { type: String },
    href: { type: String },
  };}

	constructor() {
    super();
    this.title = '';
    this.href = '/';
	}

	render() {
		return html`
		<div>
			<div class="bg-green h-6"></div>
			<div>
				<div class="bg-white w-full">
        	<div class="container mx-auto flex justify-between items-center px-4 xl:px-0 h-full py-4">
						<a href="https://www.marshall.edu/" aria-label="Marshall University website"><img src="//www.marshall.edu/assets/images/m_primary.svg" class="h-12 xl:h-16" alt="Marshall University logo"></a>
					</div>
				</div>
			</div>
			<div class="bg-gray-900 text-white py-4 px-0 mb-10">
				<div class="font-serif text-white uppercase text-2xl lg:text-4xl h-full container mx-auto px-4 lg:px-0 flex flex-col justify-center">
        	<h2><a href="${this.href}" class="text-white hover:text-white">${this.title}</a></h2>
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
customElements.define('mu-header-minimal', MuHeaderMinimal);
