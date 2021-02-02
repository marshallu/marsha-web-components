import {LitElement, html, css} from 'lit-element';

class MuNavPrimary extends LitElement {
	render() {
		return html`
			<div class="bg-white w-full relative z-70">
				<div class="w-full xl:max-w-screen-xl px-6 lg:px-10 xl:px-0 xl:mx-auto flex justify-between items-center h-full">
					<a href="https://www.marshall.edu/" aria-label="Marshall University website"><img src="https://www.marshall.edu/wp-content/themes/marsha/images/m_primary.svg" class="h-12 xl:h-16" alt="Marshall University logo"></a>
					<div class="flex h-full">
						<div id="main-nav" class="hidden lg:flex items-center font-serif text-gray-200 text-xl font-semibold tracking-wide">
							<a href="https://www.marshall.edu/meet-marshall/" class="text-gray-500 transition-colors duration-75 ease-in hover:text-green-dark px-4 xl:px-6 py-10 cursor-pointer" x-on:click="megaOpen = 1" x-on:mouseenter="megaOpen = 1" x-on:mouseleave="megaOpen = 0"><span :class="{ 'text-green py-2' : megaOpen == 1}">Meet Marshall</span></a>
							<a href="https://www.marshall.edu/admissions/" class="text-gray-500 transition-colors duration-75 ease-in hover:text-green-dark px-4 xl:px-6 py-10 cursor-pointer" x-on:click="megaOpen = 2" x-on:mouseenter="megaOpen = 2" x-on:mouseleave="megaOpen = 0"><span :class="{ 'text-green py-2' : megaOpen == 2}">Admissions &amp; Aid</span></a>
							<a href="https://www.marshall.edu/academics/" class="text-gray-500 transition-colors duration-75 ease-in hover:text-green-dark px-4 xl:px-6 py-10 cursor-pointer" x-on:click="megaOpen = 3" x-on:mouseenter="megaOpen = 3" x-on:mouseleave="megaOpen = 0"><span :class="{ 'text-green py-2' : megaOpen == 3}">Academics</span></a>
							<a href="https://www.marshall.edu/marshall-life/" class="text-gray-500 transition-colors duration-75 ease-in hover:text-green-dark px-4 xl:px-6 py-10 cursor-pointer" x-on:click="megaOpen = 4" x-on:mouseenter="megaOpen = 4" x-on:mouseleave="megaOpen = 0"><span :class="{ 'text-green py-2' : megaOpen == 4}">Marshall Life</span></a>
							<a href="http://www.herdzone.com" class="text-gray-500 transition-colors duration-75 ease-in hover:text-green-dark py-10 pl-4 xl:pl-6 pr-3 group"><span class="group-hover:text-green py-2">Athletics</span></a>
						</div>
						<div class="flex items-center py-6 lg:hidden">
							<svg role="button" aria-label="search our site" xmlns="http://www.w3.org/2000/svg" x-on:click="showSearch = true; $refs.searchInput.focus()" :class="{ 'hidden' : showSearch }" viewBox="0 0 512 512" class="transition-all duration-75 text-gray-500 fill-current cursor-pointer mr-6 lg:mr-0 h-6 w-6">
								<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
							</svg>
							<svg role="button" aria-label="close search" xmlns="http://www.w3.org/2000/svg" x-on:click="showSearch = false; $refs.searchInput.blur()" :class="{ 'hidden' : !showSearch }" class="transition-all duration-75 hidden text-gray-500 fill-current cursor-pointer mr-6 lg:mr-0 h-6 w-6" viewBox="0 0 20 20">
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
							</svg>
							<svg role="button" aria-label="show mobile menu" xmlns="http://www.w3.org/2000/svg" x-on:click="mobileMenuOpen = true" viewBox="0 0 24 24" class="fill-current w-8 h-8 lg:hidden cursor-pointer text-gray-500">
								<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" class="heroicon-ui"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<!-- Start Mobile Search -->
			<div class="absolute block z-40 w-full bg-white pb-4 px-4 shadow transition-all duration-100 ease-in-out" x-transition:enter-start="transform -translate-y-full" x-transition:enter-end="transform translate-y-0" x-transition:leave-start="transform translate-y-0" x-transition:leave-end="transform -translate-y-full" x-show="showSearch" x-cloak>
				<form method="GET" action="https://www.marshall.edu/site-search/">
					<div class="relative mx-auto">
						<div class="absolute inset-y-0 left-0 flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="h-4 w-4 fill-current text-green">
								<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
							</svg>
						</div>
						<label for="q" class="sr-only">Search</label>
						<input x-ref="searchInput" type="text" name="q" aria-label="Search" class="w-full bg-transparent text-gray-500 focus:text-gray-800 font-semibold border-b border-green py-2 pl-6 block appearance-none leading-normal focus:outline-none rounded-none" placeholder="Search our site...">
					</div>
				</form>
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
customElements.define('mu-nav-primary', MuNavPrimary);
