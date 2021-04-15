import {LitElement, html, css} from 'lit-element';

class MuNavGreen extends LitElement {
	render() {
		return html`
			<div class="bg-white border-t-4 border-green antialiased relative z-80 text-base">
				<div class="w-full xl:max-w-screen-xl px-4 lg:px-10 xl:px-0 xl:mx-auto flex uppercase justify-between items-center tracking-wide antialiased  lg:h-20">
					<div class="hidden lg:flex h-full">
					<a href="https://www.marshall.edu/admissions/apply/" class="hidden lg:flex lg:flex-col text-gray-500 transition-colors duration-75 hover:bg-gray-100 hover:text-gray-900 font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group focus:bg-gray-100 no-underline">
							<div class="arrow-top-sm green-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center -mt-3 font-semibold text-lg">Apply</span>
						</a>
						<a href="https://www.marshall.edu/experience/" class="hidden lg:flex lg:flex-col text-gray-500 transition-colors duration-75 hover:bg-gray-100 hover:text-gray-900 font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group focus:bg-gray-100 no-underline">
							<div class="arrow-top-sm green-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center -mt-3 font-semibold text-lg">Experience MU</span>
						</a>
						<a href="https://www.marshall.edu/tour/" class="hidden lg:flex lg:flex-col text-gray-500 transition-colors duration-75 hover:bg-gray-100 hover:text-gray-900 font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group focus:bg-gray-100 no-underline">
							<div class="arrow-top-sm green-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center lg:-mt-3 font-semibold text-lg">Visit</span>
						</a>
					</div>
					<div class="hidden lg:inline-block flex-1 px-4 xl:px-0">
						<form method="GET" action="//www.marshall.edu/site-search/" novalidate="">
							<div class="relative w-full xl:w-2/3  mx-auto fw-search">
								<div class="absolute inset-y-0 left-0 flex items-center ml-3 text-gray-300">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4 w-4 fill-current">
										<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
								</div>
								<label for="q" class="sr-only">Search</label>
								<input x-ref="sitesearch" type="text" name="q" aria-label="Search" class="w-full text-gray-500 focus:text-gray-800 font-semibold text-shadow border border-gray-300 py-2 pl-10 block appearance-none bg-white leading-normal focus:ring-4 focus:outline-none focus:ring-green-darker focus:shadow-sm focus:bg-gray-100 rounded marsha-search-input" placeholder="Search our site..." autocomplete="off">
								<button type="submit" aria-label="Submit" class="hidden">Submit</button>
							</div>
						</form>
					</div>
					<div class="w-full lg:w-auto flex justify-between">
						<div class="hidden lg:block h-20">
							<div class="dropdown relative z-80 h-20 group">
								<div tabindex="0" class="h-full flex items-center text-gray-500 py-6 px-3 xl:px-4 font-semibold text-shadow cursor-pointer transition-colors duration-75 group-hover:bg-gray-100 focus:bg-gray-100 focus-within:bg-gray-100 focus-within:text-gray-900 hover:text-gray-900">
									<span class="mr-1 text-shadow font-semibold text-lg">Find Info For</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4 w-4 fill-current">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
									</svg>
								</div>
								<div class="dropdown-nav transition-all duration-500 ease-in-out absolute left-0 w-60 bg-gray-100 text-sm uppercase tracking-wide shadow-md font-semibold text-shadow z-80 divide-y divide-gray-200 invisible opacity-0 hidden group-hover:visible group-hover:opacity-100 group-hover:block group-focus:visible group-focus:opacity-100 group-focus:block">
									<a href="https://www.marshall.edu/future-students/" class="text-gray-500 block py-4 px-4 transition-colors duration-200 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900">Future Students</a>
									<a href="https://www.marshall.edu/current-students/" class="text-gray-500 block py-4 px-4 transition-colors duration-200 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900">Current Students</a>
									<a href="https://www.marshall.edu/parents/" class="text-gray-500 block py-4 px-4 transition-colors duration-200 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900">Parents &amp; Families</a>
									<a href="http://www.herdalum.com" class="text-gray-500 block py-4 px-4 transition-colors duration-200 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900">Alumni &amp; Friends</a>
									<a href="https://www.marshall.edu/faculty-staff/" class="text-gray-500 block py-4 px-4 transition-colors duration-200 hover:bg-white hover:text-gray-900 focus:bg-white focus:text-gray-900">Faculty &amp; Staff</a>
								</div>
							</div>
						</div>
						<a href="https://www.marshall.edu/rises/" class="hidden lg:flex lg:flex-col text-gray-500 transition-colors duration-75 hover:bg-gray-100 hover:text-gray-900 font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group focus:bg-gray-100 no-underline">
							<div class="arrow-top-sm green-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center -mt-3 font-semibold text-lg">Give</span>
						</a>
						<a href="https://www.marshall.edu/design-center/?utm_source=nav-green&amp;utm_medium=website&amp;utm_campaign=blackboard" class="py-4 lg:py-0 lg:flex lg:flex-col text-gray-500 transition-colors duration-75 hover:bg-gray-100 hover:text-gray-900 font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group focus:bg-gray-100 no-underline">
							<div class="hidden lg:flex arrow-top-sm green-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center lg:-mt-3 font-semibold lg:text-lg">Blackboard</span>
						</a>
						<a href="http://mymu.marshall.edu" class="py-4 lg:py-0 lg:flex lg:flex-col text-gray-500 transition-colors duration-75 hover:bg-gray-100 hover:text-gray-900 font-semibold text-shadow px-0 lg:px-3 xl:px-4 mr-0 group focus:bg-gray-100 no-underline">
							<div class="hidden lg:flex arrow-top-sm green-arrow-top lg:invisible lg:group-hover:visible"></div>
							<span class="flex-1 flex items-center lg:-mt-3 font-semibold lg:text-lg">MyMU</span>
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
