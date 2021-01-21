import {LitElement, html, css} from 'lit-element';

class MuSiteTitle extends LitElement {

  render() {
		return html`
		<link rel="stylesheet" href="//www.marshall.edu/wp-content/themes/marsha/css/marsha2.0.css">
		<div class="bg-gray-800 text-white py-0 px-0">
			<div class="font-serif text-white uppercase text-2xl lg:text-5xl h-full w-full xl:max-w-screen-xl px-6 lg:px-10 xl:px-0 xl:mx-auto flex flex-col justify-center py-6">
				<a href="https://www.marshall.edu/ucomm/" class="text-white hover:text-white"><slot>University Communications</slot></a>
			</div>
			<div class="w-full hidden lg:block relative z-50">
				<div class="w-full xl:max-w-screen-xl lg:px-10 xl:px-0 mx-auto bg-white">
					<div class="nav-site"></div>
				</div>
			</div>
		</div>
		`;
	}
}

customElements.define('mu-site-title', MuSiteTitle);
