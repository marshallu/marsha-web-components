import {LitElement, html, css} from 'lit-element';

class MuFooter extends LitElement {
  render() {
		let date = new Date()
		return html`
		<link rel="stylesheet" href="//www.marshall.edu/wp-content/themes/marsha/css/marsha2.0.css">
		<footer class="z-30 relative flex-shrink-0 bg-gray-900">
			<div class="w-full xl:max-w-screen-xl lg:px-8 xl:px-0 xl:mx-auto flex flex-col-reverse lg:flex-row mb-0">
				<div class="text-center justify-end lg:text-left w-full lg:w-1/5 xl:w-1/6 lg:bg-inherit px-4 text-white text-sm leading-normal mt-0 pb-12 lg:pb-6 antialiased lg:bg-no-repeat bg-cover bg-inherit footer-flag">
					<div class="lg:h-full lg:flex lg:justify-end lg:flex-col">
						<a href="https://www.marshall.edu" aria-label="Marshall University website"><img src="//www.marshall.edu/assets/images/m_primary.svg" class="lg:hidden h-12 lg:h-16 mt-8 mb-4 inline w-auto" alt="Marshall University logo"></a>

						<div class="mt-8 lg:mt-6 flex mx-auto px-16 lg:px-0 w-full justify-between lg:justify-between">
							<a href="http://www.instagram.com/marshallu" class="text-white transition-all duration-100 hover:-mt-1">
								<span class="sr-only">Marshall on Instagram</span>
								<svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8 w-8 fill-current">
									<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
							</a>
							<a href="http://www.facebook.com/marshallu" class="text-white transition-all duration-100 hover:-mt-1">
								<span class="sr-only">Marshall on Facebook</span>
								<svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" class="h-8 w-8 fill-current">
									<path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" /></svg>
							</a>
							<a href="http://www.twitter.com/marshallu" class="text-white transition-all duration-100 hover:-mt-1">
								<span class="sr-only">Marshall on Twitter</span>
								<svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 w-8 fill-current">
									<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
							</a>
							<a href="http://www.youtube.com/herdvideo" class="text-white transition-all duration-100 hover:-mt-1">
								<span class="sr-only">Marshall on YouTube</span>
								<svg role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-8 w-8 fill-current">
									<path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
							</a>
						</div>

						<div class="lg:hidden mt-6 text-white text-sm mx-auto">Copyright &copy; ${date.getFullYear()} Marshall University, One John Marshall Drive, Huntington, WV 25755 | An Equal Opportunity University | <a href="https://www.marshall.edu/accreditation" class="text-green-bright hover:underline">Accreditation</a> | <a href="https://www.marshall.edu/disclosures" class="text-green-bright hover:text-underline">Consumer Information and Disclosures</a> | <a href="https://www.marshall.edu/disclosures/studentcomplaints/" class="text-green-bright hover:text-underline">Student Complaints</a></div>
					</div>
				</div>
				<div class="flex-col hidden lg:flex antialiased lg:w-3/5 xl:w-2/3 px-6 xl:px-10 pt-16">
					<div class="text-base font-serif font-medium xl:text-lg">
						<div class="mx-auto">
							<nav aria-labelledby="footer-navigation">
							<div id="footer-navigation" class="flex -mx-4">
								<div class="w-1/3 px-4 xl:px-6">
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/directory/">Directory</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/emergency/">Emergency Info</a></div>
									<!-- <div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="http://www.marshall.edu/students/">Services &amp; Resources</a></div> -->
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/human-resources/job-opportunities/">Jobs</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out  hover:text-green-bright" href="https://www.marshall.edu/irp/">Institutional Research<span class="hidden xl:inline-block"> &amp; Planning </span></a></div>
								</div>
								<div class="w-1/3 px-4 xl:px-6">
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/newstudentchecklist/submit-enrollment-deposit/">Enrollment Deposit</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/sfa/">Financial Aid</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/recruitment/tour-our-campus/">Visit</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://www.marshall.edu/siteindex.php">A-Z Index</a></div>
								</div>
								<div class="w-1/3 px-4 xl:px-6">
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="http://www.marshall.edu/map/">Maps &amp; Locations</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="http://www.marshall.edu/ucomm/">Media</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out mb-4 hover:text-green-bright" href="https://jcesom.marshall.edu/">Healthcare &amp; Medicine</a></div>
									<div><a class="block text-white leading-normal transition-colors duration-200 ease-out  hover:text-green-bright" href="http://www.marshall.edu/murc/">Research</a></div>
								</div>
							</div>
							</nav>
						</div>
					</div>
					<div class="mt-6 text-white text-sm mx-auto lg:mb-6 text-center leading-loose">Copyright &copy; ${date.getFullYear()} Marshall University, One John Marshall Drive, Huntington, WV 25755<br>An Equal Opportunity University | <a href="https://www.marshall.edu/accreditation" class="text-green-bright hover:underline">Accreditation</a> | <a href="https://www.marshall.edu/disclosures" class="text-green-bright hover:underline">Consumer Information and Disclosures</a> | <a href="https://www.marshall.edu/disclosures/studentcomplaints/" class="text-green-bright hover:underline">Student Complaints</a></div>
				</div>
				<div class="bg-green lg:bg-inherit w-full lg:w-1/5 xl:w-1/6 pb-8 xl:pb-0">
					<div class="flex flex-col lg:justify-between pt-8 lg:pt-16 mx-12 lg:mx-0">
						<div class="w-full px-0 g:px-0 lg:w-full flex">
							<a href="http://www.marshall.edu/contact-us/" class="btn bg-white text-green lg:bg-green hover:bg-green-dark lg:text-white transition-colors duration-100 mx-auto w-full">Contact Us</a>
						</div>
						<div class="w-full px-0 g:px-0 lg:w-full flex mt-4">
							<a href="https://www.marshall.edu/admissions/apply/" class="btn bg-white text-green lg:bg-green hover:bg-green-dark lg:text-white transition-colors duration-100 mx-auto w-full">Apply Now</a>
						</div>
						<div class="w-full px-0 g:px-0 lg:w-full mt-4">
							<a href="http://www.marshall.edu/rises/" class="btn bg-white text-green lg:bg-green hover:bg-green-dark lg:text-white transition-colors duration-100 mx-auto w-full">Give Now</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	`;
  }
}
customElements.define('mu-footer', MuFooter);
