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

					<!-- Start Meet Marshall Mega Menu -->
					<div class="block bg-gray-900 absolute w-full z-60 shadow-lg text-white" x-show="megaOpen == 1" x-on:mouseenter="megaOpen = 1" x-on:mouseleave="megaOpen = 0" x-cloak>
						<div class="flex flex-col">
							<div class="arrow-top white-arrow-top"></div>
							<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10" x-show="megaOpen == 1">
								<div class="flex xl:-mx-6">
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Welcome to Marshall</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/quick-facts" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Quick Facts</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/mission/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Mission, Vision, &amp; Creed</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/history-and-traditions/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>History &amp; Traditions</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/community-outreach/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Our Community</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/diversity/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Diversity &amp; Inclusion</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Administration</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/president/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>President's Office</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/board/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Board of Governors</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">News &amp; Marketing</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/calendar/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Events</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/academic-calendar/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>University Calendar</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/news/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>News</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/brandguide/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Branding Guidelines</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/website/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Web Guidelines</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/ucomm/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>University Communications</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End Meet Marshall Mega Menu -->

					<!-- Start Admissions & Aid Mega Menu -->
					<div class="block bg-gray-900 absolute w-full z-60 shadow-lg text-white" x-show="megaOpen == 2" x-on:mouseenter="megaOpen = 2" x-on:mouseleave="megaOpen = 0" style="display: none;">
						<div class="flex flex-col">
							<div class="arrow-top white-arrow-top"></div>
							<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10">
								<div class="flex xl:-mx-6">
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Information For</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/admissions/undergraduate/freshmen/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>First-Year Freshmen</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/admissions/undergraduate/transfer/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Transfer Students</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/admissions/international-undergraduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>International Undergraduate Students</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/admissions/graduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Graduate Students</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/admissions/international-graduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>International Graduate Students</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/online-learning/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Online Students</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Getting Started</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
										<div class="block mb-4">
												<a href="https://www.marshall.edu/experience/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Experience Marshall</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/recruitment/tour-our-campus/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Visit Campus</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/admissions/apply/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Apply for Admission</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/sfa/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Apply for Financial Aid</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Cost &amp; Aid</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="http://www.marshall.edu/tuition/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Tuition</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/admissions/apply/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Apply for Admission</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/sfa/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Financial Aid</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/sfa/types-of-aid/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Scholarships</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.marshall.edu/sfa/cost-of-attendance/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Estimate Your Cost</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End Admissions & Aid Mega Menu -->

					<!-- Start Academics Menu -->
					<div class="block bg-gray-900 absolute w-full z-60 shadow-lg text-white" x-show="megaOpen == 3" x-on:mouseenter="megaOpen = 3" x-on:mouseleave="megaOpen = 0" x-cloak>
						<div class="flex flex-col">
							<div class="arrow-top white-arrow-top"></div>
							<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10" x-show="megaOpen == 3">
								<div class="flex xl:-mx-6">
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Degrees</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/academics/undergraduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Undergraduate</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/academics/graduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Graduate</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/online-learning/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Online</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/academics/professional/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Professional</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">More Programs</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/occhs/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>College Courses in High School</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/ce/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Adult &amp; Continuing Ed</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://jcesom.marshall.edu" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>School of Medicine</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/pharmacy/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>School of Pharmacy</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Resources</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/student-support/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Support Services</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/academic-calendar/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Academic Calendar</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/library/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Libraries &amp; Online Research</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/careereducation/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Internships &amp; Career Development</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/colleges/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Colleges &amp; Schools</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.bkstr.com/marshallstore/home" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Campus Bookstore</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End Academics Menu -->

					<!-- Start Marshall Life Menu -->
					<div class="block bg-gray-900 absolute w-full z-60 shadow-lg text-white" x-show="megaOpen == 4" x-on:mouseenter="megaOpen = 4" x-on:mouseleave="megaOpen = 0" x-cloak>
						<div class="flex flex-col">
							<div class="arrow-top white-arrow-top"></div>
							<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10" x-show="megaOpen == 4">
								<div class="flex xl:-mx-6">
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Clubs &amp; Organizations</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://herdlink.marshall.edu" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Clubs &amp; Organizations</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/fsl/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Greek Life</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="http://www.herdzone.com/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Athletics</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Student Activities</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/community-outreach/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Community Service</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/student-activities/leadership-opportunities/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Leadership Opportunities</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/cab/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Campus Activities Board</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/campusrec/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Campus Rec</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
									<div class="w-1/3 lg:px-6">
										<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Student Resources</div>
										<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg');"></div>
										<div class="uppercase text-sm xl:text-base">
											<div class="block mb-4">
												<a href="https://www.marshall.edu/housing/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Residence Halls/Living</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/student-affairs/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Student Affairs</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/studenthealth/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Student Health</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/academic-affairs/policies/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Student Policies</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
											<div class="block mb-4">
												<a href="https://www.marshall.edu/colleges/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline">
													<span>Colleges &amp; Schools</span>
													<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
													<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
														<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- End Marshall Life Menu -->
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
