import {LitElement, html, css} from 'lit-element';

class MuNavMobile extends LitElement {
	render() {
		return html`<nav aria-labelledby="primary-mobile-navigation">
		<div class="relative">
			<div class="flex z-90 w-full h-full fixed top-0 left-0 mobile-nav off-canvas" :class="{ 'active' : mobileMenuOpen }">
				<div class="w-1/5">
					<div class="h-10 w-10 bg-white text-gray-800 shadow-lg rounded-full p-3 mx-auto mt-6 border-2 border-black" x-on:click="mobileMenuOpen = false">
						<svg role="button" aria-label="hide mobile menu" x-on:click="mobileMenuOpen = false" class="fill-current shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
						</svg>
					</div>
				</div>
				<div class="w-4/5 h-full bg-gray-800 shadow-lg overflow-x-hidden overflow-y-auto pb-16">
					<div class="w-full my-8">
						<a href="https://www.marshall.edu/" aria-label="Marshall University website">
							<img src="https://www.marshall.edu/wp-content/themes/marsha/images/m_primary.svg" class="h-12 mx-auto" alt="Marshall University logo">
						</a>
					</div>
					<div>
						<div class="block w-full font-semibold" x-data="{ open: false }">
							<a href="#" class="text-white flex items-center justify-between px-4 border-b border-gray-900 py-4" x-on:click.prevent="open = !open">
								<span>Meet Marshall</span>
								<div class="flex items-center transition-all duration-75 ease-linear" :class="{ 'transform rotate-90': open }">
									<svg class="ml-1 h-4 w-4 text-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
									<svg class="-ml-2 h-4 w-4 text-green-bright" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
								</div>
							</a>
							<div class="bg-gray-900 w-full py-4 px-4 text-white font-normal flex flex-col" x-show="open" x-cloak>
								<div class="">
									<div class="pt-2 pb-5 mx-auto flex">
										<a href="https://www.marshall.edu/meet-marshall" class="btn btn-green flex-1">Meet Marshall</a>
									</div>
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Welcome Marshall</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/quick-facts/" class="text-white text-sm">Quick Facts</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/mission/" class="text-white text-sm">Mission, Vision, &amp; Creed</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/history-and-traditions/" class="text-white text-sm">History &amp; Traditions</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/community-outreach/" class="text-white text-sm">Our Community</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/diversity/" class="text-white text-sm">Diversity &amp; Inclusion</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Administration</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/president/" class="text-white text-sm">President's Office</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/board/" class="text-white text-sm">Board of Governors</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">News &amp; Marketing</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/calendar/" class="text-white text-sm">Events</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/academic-calendar/" class="text-white text-sm">University Calendar</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/news/" class="text-white text-sm">News</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/brandguide/" class="text-white text-sm">Branding Guidelines</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/marsha/" class="text-white text-sm">Web Guidelines</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/ucomm/" class="text-white text-sm">University Communications</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block w-full font-semibold" x-data="{ open: false }">
							<a href="#" class="text-white flex items-center justify-between px-4 border-b border-gray-900 py-4" x-on:click.prevent="open = !open">
								<span>Admissions &amp; Aid</span>
								<div class="flex items-center transition-all duration-75 ease-linear" :class="{ 'transform rotate-90': open }">
									<svg class="ml-1 h-4 w-4 text-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
									<svg class="-ml-2 h-4 w-4 text-green-bright" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
								</div>
							</a>
							<div class="bg-gray-900 w-full py-4 px-4 text-white font-normal flex flex-col" x-show="open" x-cloak>
								<div class="">
									<div class="pt-2 pb-5 mx-auto flex">
										<a href="https://www.marshall.edu/admissions" class="btn btn-green flex-1">Admissions &amp; Aid</a>
									</div>
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Information For</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/admissions/freshmen/" class="text-white text-sm">First-Year Freshmen</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/admissions/transfer-students/" class="text-white text-sm">Transfer Students</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/admissions/international/" class="text-white text-sm">International Students</a>
									</div>
									<div class="block mt-1">
										<a href="http://www.marshall.edu/graduate/" class="text-white text-sm">Graduate Students</a>
									</div>
									<div class="block mt-1">
										<a href="http://www.marshall.edu/design-center/" class="text-white text-sm">Online Students</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Getting Started</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/recruitment/tour-our-campus/" class="text-white text-sm">Visit Campus</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/admissions/apply/" class="text-white text-sm">Apply for Admission</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/sfa/" class="text-white text-sm">Apply for Financial Aid</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Cost &amp; Aid</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/tuition/" class="text-white text-sm">Tuition</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/admissions/apply/" class="text-white text-sm">Apply for Admission</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/sfa/" class="text-white text-sm">Financial Aid</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/sfa/types-of-aid/" class="text-white text-sm">Scholarships</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/sfa/cost-of-attendance/" class="text-white text-sm">Estimate Your Cost</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block w-full font-semibold" x-data="{ open: false }">
							<a href="#" class="text-white flex items-center justify-between px-4 border-b border-gray-900 py-4" x-on:click.prevent="open = !open">
								<span>Academics</span>
								<div class="flex items-center transition-all duration-75 ease-linear" :class="{ 'transform rotate-90': open }">
									<svg class="ml-1 h-4 w-4 text-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
									<svg class="-ml-2 h-4 w-4 text-green-bright" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
								</div>
							</a>
							<div class="bg-gray-900 w-full py-4 px-4 text-white font-normal flex flex-col" x-show="open" x-cloak>
								<div class="">
									<div class="pt-2 pb-5 mx-auto flex">
										<a href="https://www.marshall.edu/academics/" class="btn btn-green flex-1">Academics</a>
									</div>
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Degrees</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/academics/undergraduate/" class="text-white text-sm">Undergraduate</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/academics/graduate/" class="text-white text-sm">Graduate</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/design-center/" class="text-white text-sm">Online</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/academics/professional/" class="text-white text-sm">Professional</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">More Programs</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/occhs/" class="text-white text-sm">College Courses in High School</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/ce/" class="text-white text-sm">Adult &amp; Continuing Ed</a>
									</div>
									<div class="block mt-1">
										<a href="https://jcesom.marshall.edu/" class="text-white text-sm">School of Medicine</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/pharmacy/" class="text-white text-sm">School of Pharmacy</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Resources</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/student-support/" class="text-white text-sm">Support Services</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/academic-calendar/" class="text-white text-sm">Academic Calendar</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/library/" class="text-white text-sm">Libraries &amp; Online Research</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/careereducation/" class="text-white text-sm">Internships &amp; Career Development</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/colleges/" class="text-white text-sm">Colleges &amp; Schools</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.bkstr.com/marshallstore/home" class="text-white text-sm">Campus Bookstore</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block w-full font-semibold" x-data="{ open: false }">
							<a href="#" class="text-white flex items-center justify-between px-4 border-b border-gray-900 py-4" x-on:click.prevent="open = !open">
								<span>Marshall Life</span>
								<div class="flex items-center transition-all duration-75 ease-linear" :class="{ 'transform rotate-90': open }">
									<svg class="ml-1 h-4 w-4 text-green-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
									<svg class="-ml-2 h-4 w-4 text-green-bright" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
										<path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
									</svg>
								</div>
							</a>
							<div class="bg-gray-900 w-full py-4 px-4 text-white font-normal flex flex-col" x-show="open" x-cloak>
								<div class="">
									<div class="pt-2 pb-5 mx-auto flex">
										<a href="https://www.marshall.edu/marshall-life" class="btn btn-green flex-1">Marshall Life</a>
									</div>
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Student Organizations</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://herdlink.marshall.edu/" class="text-white text-sm">Clubs &amp; Organizations</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/fsl/" class="text-white text-sm">Greek Life</a>
									</div>
									<div class="block mt-1">
										<a href="http://www.herdzone.com" class="text-white text-sm">Athletics</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Student Activities</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/community-outreach/" class="text-white text-sm">Community Service</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/student-activities/leadership-opportunities/" class="text-white text-sm">Leadership Opportunities</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/cab/" class="text-white text-sm">Campus Activities Board</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/campusrec/" class="text-white text-sm">Campus Rec</a>
									</div>
								</div>
								<div class="mt-5">
									<h3 class="font-serif text-lg font-semibold tracking-wide border-gray-500 pb-1">Student Resources</h3>
									<div class="block flex-1 text-center text-white tracking-wide h-1 mb-2 bg-repeat-x" style="background-image: url('//www.marshall.edu/assets/images/grey-lighter-dot.svg')"></div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/housing/" class="text-white text-sm">Residence Halls/Living</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/student-affairs/" class="text-white text-sm">Student Affairs</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/studenthealth/" class="text-white text-sm">Student Health</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/academic-affairs/policies/" class="text-white text-sm">Student Policies</a>
									</div>
									<div class="block mt-1">
										<a href="https://www.marshall.edu/colleges/" class="text-white text-sm">Colleges &amp; Schools</a>
									</div>
								</div>
							</div>
						</div>
						<div class="w-full border-b border-gray-900 py-4 px-4 font-semibold">
							<a href="http://www.herdzone.com" class="text-white flex items-center">Athletics</a>
						</div>
					</div>

					<div class="my-6 flex flex-col px-4 lg:mx-16">
						<a href="https://www.marshall.edu/recruitment/tour-our-campus/" class="btn btn-green">Visit</a>
						<a href="https://www.marshall.edu/admissions/apply/" class="btn btn-green mt-6">Apply</a>
						<a href="https://www.marshall.edu/rises/" class="btn btn-green mt-6">Give</a>
					</div>

					<div class="px-4 mb-6">
						<h4 class="text-base uppercase tracking-wide mb-2 font-semibold text-green-bright">More Links</h4>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/directory/">Faculty &amp; Staff Directory</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/emergency/">Emergency Info</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/human-resources/job-opportunities/">Jobs</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/irp/">Institutional Research &amp; Planning</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/newstudentchecklist/submit-enrollment-deposit/">Enrollment Deposit</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/sfa/">Financial Aid</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/recruitment/tour-our-campus/">Visit</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/siteindex.php">A-Z Index</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="http://mymu.marshall.edu">MyMU</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/map/">Maps &amp; Locations</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/ucomm/">Media</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://jcesom.marshall.edu/">Healthcare &amp; Medicine</a></div>
						<div class="block pl-2 py-2 text-sm"><a class="text-white" href="https://www.marshall.edu/research/">Research</a></div>
					</div>
				</div>
			</div>
		</div>
	</nav>
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
customElements.define('mu-nav-mobile', MuNavMobile);