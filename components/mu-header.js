import {LitElement, html, css} from 'lit-element';

class MuHeader extends LitElement {
	static get properties() { return {
    title: { type: String },
    href: { type: String },
    bgUrl: { type: String },
    bgPos: { type: String },
  };}

	constructor() {
    super();
    this.title = '';
    this.href = '/';
		this.bgUrl = '';
    this.bgPos = '';
	}

	render() {
		return html`
		<div x-data="{ mobileMenuOpen: false, megaOpen: 0, showSearch: false }">
		<!-- START MOBILE NAV -->
		<nav aria-labelledby="primary-mobile-navigation">
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
								<img src="//www.marshall.edu/assets/images/m_primary.svg" class="h-12 mx-auto" alt="Marshall University logo">
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
											<a href="https://www.marshall.edu/website/" class="text-white text-sm">Web Guidelines</a>
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
										<!-- <div class="block mt-1">
											<a href="https://www.marshall.edu/physical-therapy/" class="text-white text-sm">School of Physical Therapy</a>
										</div> -->
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
		<header>
			<nav aria-labelledby="primary-full-navigation">
				<!-- START NAV GREEN -->
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
				<!-- END NAV GREEN -->

				<!-- Start Primary Navigation -->
				<div class="bg-white w-full relative z-70">
					<div class="w-full xl:max-w-screen-xl px-6 lg:px-10 xl:px-0 xl:mx-auto flex justify-between items-center h-full">
						<a href="https://www.marshall.edu/" aria-label="Marshall University website"><img src="//www.marshall.edu/assets/images/m_primary.svg" class="h-12 xl:h-16" alt="Marshall University logo"></a>
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
									<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" class="heroicon-ui"></path></svg>
								</div>
							</div>
						</div>
					</div>
					<!-- End Main Naviation -->

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

					<!-- Start Meet Marshall Menu -->
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
				</div>
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
					<div class="nav-site"></div>
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
