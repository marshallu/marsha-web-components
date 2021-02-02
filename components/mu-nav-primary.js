import {LitElement, html, css} from 'lit-element';

class MuNavPrimary extends LitElement {
	render() {
		return html`
			<div class="bg-white w-full relative z-70">
				<div class="w-full xl:max-w-screen-xl px-6 lg:px-10 xl:px-0 xl:mx-auto flex justify-between items-center h-full">
					<a href="https://www.marshall.edu/" aria-label="Marshall University website"><img src="https://www.marshall.edu/wp-content/themes/marsha/images/m_primary.svg" class="h-12 xl:h-16" alt="Marshall University logo"></a>
					<div class="flex h-full">
						<div id="main-nav" class="hidden lg:flex items-center font-serif text-gray-200 text-xl font-semibold tracking-wide">
							<div class="mega-item transition-colors duration-75 ease-in px-4 xl:px-6 py-10">
								<a href="https://www.marshall.edu/meet-marshall/" class="mega-link">Meet Marshall</a>
								<div class="mega-container mt-10 bg-gray-900 absolute w-full z-60 shadow-lg text-white left-0">
									<div class="flex flex-col">
										<div class="arrow-top white-arrow-top"></div>
										<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10">
											<div class="flex xl:-mx-6">
												<div class="w-1/3 lg:px-6">
													<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Welcome to Marshall</div>
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-sans font-normal">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/quick-facts" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/mission/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/history-and-traditions/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/community-outreach/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/diversity/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-sans font-normal">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/president/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/board/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-sans font-normal">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/calendar/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/academic-calendar/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/news/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/brandguide/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/marsha/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/ucomm/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
							</div>
							<div class="mega-item transition-colors duration-75 ease-in px-4 xl:px-6 py-10">
								<a href="https://www.marshall.edu/admissions/" class="mega-link">Admissions</a>
								<div class="mega-container mt-10 bg-gray-900 absolute w-full z-60 shadow-lg text-white left-0">
									<div class="flex flex-col">
										<div class="arrow-top white-arrow-top"></div>
										<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10">
											<div class="flex xl:-mx-6">
												<div class="w-1/3 lg:px-6">
													<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Information For</div>
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/admissions/undergraduate/freshmen/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/admissions/undergraduate/transfer/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/admissions/international-undergraduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/admissions/graduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/admissions/international-graduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/online-learning/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
													<div class="block mb-4">
															<a href="https://www.marshall.edu/experience/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/recruitment/tour-our-campus/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/admissions/apply/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/sfa/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
																<span>Apply for Financial Aid</span>
																<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
																	<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
																</svg>
																<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
																	<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
																</svg>
															</a>
														</div>
														<!-- <div class="block mb-4">
															<a href="/newstudentchecklist/submit-enrollment-deposit/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
																<span>Pay Enrollment Deposit</span>
																<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
																	<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
																</svg>
																<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
																	<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
																</svg>
															</a>
														</div> -->
														<!-- <div class="block mb-4">
															<a href="#" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
																<span>Next Steps</span>
																<svg class="opacity-0 transition-all ease-out duration-200 transform ml-1 h-3 w-3 text-green-dark group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
																<svg class="opacity-0 transition-all ease-out duration-200 transform -ml-1 h-3 w-3 text-green-bright group-hover:opacity-100 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
															</a>
														</div> -->
													</div>
												</div>
												<div class="w-1/3 lg:px-6">
													<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Cost &amp; Aid</div>
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="http://www.marshall.edu/tuition/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/admissions/apply/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/sfa/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/sfa/types-of-aid/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/sfa/cost-of-attendance/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
							</div>
							<div class="mega-item transition-colors duration-75 ease-in px-4 xl:px-6 py-10">
								<a href="https://www.marshall.edu/academics/" class="mega-link">Academics</a>
								<div class="mega-container mt-10 bg-gray-900 absolute w-full z-60 shadow-lg text-white left-0">
									<div class="flex flex-col">
										<div class="arrow-top white-arrow-top"></div>
										<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10">
											<div class="flex xl:-mx-6">
												<div class="w-1/3 lg:px-6">
													<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Degrees</div>
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/academics/undergraduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/academics/graduate/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/online-learning/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/academics/professional/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/occhs/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/ce/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://jcesom.marshall.edu" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/pharmacy/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="https://www.marshall.edu/student-support/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/academic-calendar/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/library/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/careereducation/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.marshall.edu/colleges/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="https://www.bkstr.com/marshallstore/home" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
							</div>
							<div class="mega-item transition-colors duration-75 ease-in px-4 xl:px-6 py-10">
								<a href="https://www.marshall.edu/marshall-life/" class="mega-link">Marshall Life</a>
								<div class="mega-container mt-10 bg-gray-900 absolute w-full z-60 shadow-lg text-white left-0">
									<div class="flex flex-col">
										<div class="arrow-top white-arrow-top"></div>
										<div class="w-full xl:max-w-screen-xl px-6 xl:px-0 mx-auto py-10">
											<div class="flex xl:-mx-6">
												<div class="w-1/3 lg:px-6">
													<div class="font-serif text-xl xl:text-2xl font-semibold border-gray-500 pb-2">Clubs &amp; Organizations</div>
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="https://herdlink.marshall.edu" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/fsl/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.herdzone.com/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="http://www.marshall.edu/community-outreach/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/student-activities/leadership-opportunities/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/cab/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/campusrec/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
													<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('https://www.marshall.edu/wp-content/themes/marsha/images/grey-lighter-dot.svg');"></div>
													<div class="uppercase text-sm xl:text-base font-normal font-sans">
														<div class="block mb-4">
															<a href="http://www.marshall.edu/housing/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/student-affairs/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/studenthealth/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/academic-affairs/policies/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
															<a href="http://www.marshall.edu/colleges/" class="text-white hover:text-green-bright group flex items-center transition-colors duration-100 ease-in cursor-pointer group hover:no-underline focus:text-green-bright">
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
							</div>
							<a href="http://www.herdzone.com" class="text-gray-500 transition-colors duration-75 ease-in hover:text-green-dark py-10 pl-4 xl:pl-6 pr-3 focus:text-green-dark"><span class="py-2">Athletics</span></a>
						</div>
						<div class=" flex items-center py-6 lg:hidden">
							<svg role="button" aria-label="search our site" xmlns="http://www.w3.org/2000/svg" x-on:click="showSearch = true; $refs.searchInput.focus()" :class="{ 'hidden' : showSearch }" viewBox="0 0 512 512" class="transition-all duration-75 text-gray-500 fill-current cursor-pointer mr-6 lg:mr-0 h-6 w-6">
								<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
							<svg role="button" aria-label="close search" xmlns="http://www.w3.org/2000/svg" x-on:click="showSearch = false; $refs.searchInput.blur()" :class="{ 'hidden' : !showSearch }" class="transition-all duration-75 hidden text-gray-500 fill-current cursor-pointer mr-6 lg:mr-0 h-6 w-6" viewBox="0 0 20 20">
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" /></svg>
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
