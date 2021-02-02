import {LitElement, html, css} from 'lit-element';

class MuNavGreen extends LitElement {
	render() {
		return html`
			<div class="text-white bg-green antialiased relative z-80 text-base">
				<div class="w-full xl:max-w-screen-xl px-4 lg:px-10 xl:px-0 xl:mx-auto flex uppercase justify-between items-center tracking-wide antialiased  lg:h-20">
					<div class="hidden lg:flex h-full">
						<a href="https://www.marshall.edu/admissions/apply/" class="hidden lg:flex lg:flex-col text-white transition-colors duration-75 hover:bg-green-dark font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group">
							<div class="arrow-top-sm black-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center -mt-3">Apply</span>
						</a>
						<a href="https://www.marshall.edu/experience/" class="hidden lg:flex lg:flex-col text-white transition-colors duration-75 hover:bg-green-dark font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group">
							<div class="arrow-top-sm black-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center -mt-3">Experience MU</span>
						</a>
						<a href="https://www.marshall.edu/tour/" class="hidden lg:flex lg:flex-col text-white transition-colors duration-75 hover:bg-green-dark font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group">
							<div class="arrow-top-sm black-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center lg:-mt-3">Visit</span>
						</a>
					</div>
					<div class="hidden lg:inline-block flex-1 px-4 xl:px-0">
						<form method="GET" action="https://www.marshall.edu/site-search/" novalidate>
							<div class="relative w-full xl:w-2/3  mx-auto fw-search">
								<div class="absolute inset-y-0 left-0 flex items-center ml-3 text-gray-300">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4 w-4 fill-current">
										<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
									</svg>
								</div>
								<label for="q" class="sr-only">Search</label>
								<input type="text" name="q" aria-label="Search" class="w-full bg-white text-gray-500 focus:text-gray-800 font-semibold text-shadow border border-green-dark py-2 pl-10 block appearance-none leading-normal focus:outline-none rounded marsha-search-input" placeholder="Search our site..." autocomplete="off">
								<button type="submit" aria-label="Submit" class="hidden">Submit</button>
							</div>
						</form>
					</div>
					<div class="w-full lg:w-auto flex justify-between">
						<div class="hidden lg:block h-20">
							<div class="relative z-80 h-20" x-data="{ open: false }" x-on:mouseover="open = true" x-on:mouseleave="open = false">
								<a href="#" class="h-full flex items-center text-white py-6 px-3 xl:px-4 font-semibold text-shadow cursor-pointer transition-colors duration-75 hover:bg-green-dark" :class="{ 'bg-green-dark': open }">
									<span class="mr-1 font-semibold text-shadow">Find Info For</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4 w-4 fill-current">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</a>
								<div class="w-full absolute left-0 bg-gray-800 text-sm uppercase tracking-wide shadow-lg font-semibold text-shadow z-80" x-show="open" x-cloak>
									<a href="https://www.marshall.edu/future-students/" class="text-white block py-4 px-3 transition-colors duration-200 hover:bg-gray-900 hover:text-green-bright">Future Students</a>
									<a href="https://www.marshall.edu/current-students/" class="text-white block py-4 px-3 transition-colors duration-200 hover:bg-gray-900 hover:text-green-bright">Current Students</a>
									<a href="https://www.marshall.edu/parents/" class="text-white block py-4 px-3 transition-colors duration-200 hover:bg-gray-900 hover:text-green-bright">Parents &amp; Families</a>
									<a href="http://www.herdalum.com" class="text-white block py-4 px-3 transition-colors duration-200 hover:bg-gray-900 hover:text-green-bright">Alumni &amp; Friends</a>
									<a href="https://www.marshall.edu/faculty-staff/" class="text-white block py-4 px-3 transition-colors duration-200 hover:bg-gray-900 hover:text-green-bright">Faculty &amp; Staff</a>
								</div>
							</div>
						</div>
						<a href="https://www.marshall.edu/rises/" class="hidden lg:flex lg:flex-col text-white transition-colors duration-75 hover:bg-green-dark font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group">
							<div class="arrow-top-sm black-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center -mt-3">Give</span>
						</a>
						<a href="https://www.marshall.edu/design-center/?utm_source=nav-green&utm_medium=website&utm_campaign=blackboard" class="py-4 lg:py-0 lg:flex lg:flex-col text-white transition-colors duration-75 hover:bg-green-dark font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group">
							<div class="hidden lg:flex arrow-top-sm black-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center lg:-mt-3">Blackboard</span>
						</a>
						<a href="http://mymu.marshall.edu" class="py-4 lg:py-0 lg:flex lg:flex-col text-white transition-colors duration-75 hover:bg-green-dark font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group">
							<div class="hidden lg:flex arrow-top-sm black-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center lg:-mt-3">MyMU</span>
						</a>
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
customElements.define('mu-nav-green', MuNavGreen);
