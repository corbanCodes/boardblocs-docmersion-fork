// Footer Loader - Loads consistent footer across all pages
function loadFooter() {
  const footerHTML = `
    <!-- Footer -->
    <footer class="bg-gradient-to-t from-white to-slate-50 border-t border-slate-200 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          <!-- Brand Column -->
          <div class="md:col-span-1">
            <div class="flex items-center gap-3 mb-4">
              <img src="logo.png" alt="BoardBlocs Logo" class="w-8 h-8">
              <div class="text-2xl font-bold text-slate-900">Boardblocs</div>
            </div>
            <a href="book-demo.html" class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap w-fit">
              Book a Demo
              <i class="bi bi-arrow-right text-xs"></i>
            </a>
          </div>
          
          <!-- Product Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Product</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="public-and-private-sites.html" class="text-slate-600 hover:text-blue-600 transition-colors">Public & Private Sites</a></li>
              <li><a href="policies-&-documents.html" class="text-slate-600 hover:text-blue-600 transition-colors">Policies & Documents</a></li>
              <li><a href="meetings-and-agenda.html" class="text-slate-600 hover:text-blue-600 transition-colors">Meetings & Agendas</a></li>
              <li><a href="committees-&-groups.html" class="text-slate-600 hover:text-blue-600 transition-colors">Committees & Groups</a></li>
              <li><a href="discussions.html" class="text-slate-600 hover:text-blue-600 transition-colors">Discussions</a></li>
              <li><a href="integrations.html" class="text-slate-600 hover:text-blue-600 transition-colors">Integrations</a></li>
              <li><a href="mobileapp.html" class="text-slate-600 hover:text-blue-600 transition-colors">Mobile App</a></li>
              <li><a href="accessibility.html" class="text-slate-600 hover:text-blue-600 transition-colors">Accessibility</a></li>
              <li><a href="welcome-chat.html" class="text-slate-600 hover:text-blue-600 transition-colors">Welcome Chat</a></li>
              <li><a href="board-news.html" class="text-slate-600 hover:text-blue-600 transition-colors">Board News</a></li>
            </ul>
          </div>
          
          <!-- Solutions Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Solutions</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="associations.html" class="text-slate-600 hover:text-blue-600 transition-colors">Associations</a></li>
              <li><a href="community-organizations.html" class="text-slate-600 hover:text-blue-600 transition-colors">Community Organizations</a></li>
              <li><a href="education.html" class="text-slate-600 hover:text-blue-600 transition-colors">Education</a></li>
              <li><a href="government.html" class="text-slate-600 hover:text-blue-600 transition-colors">Government</a></li>
              <li><a href="healthcare.html" class="text-slate-600 hover:text-blue-600 transition-colors">Healthcare</a></li>
              <li><a href="real-estate.html" class="text-slate-600 hover:text-blue-600 transition-colors">Real Estate</a></li>
              <li><a href="technology.html" class="text-slate-600 hover:text-blue-600 transition-colors">Technology</a></li>
            </ul>
          </div>
          
          <!-- Resources Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="board-governance.html" class="text-slate-600 hover:text-blue-600 transition-colors">Board Governance</a></li>
              <li><a href="board-recruitment.html" class="text-slate-600 hover:text-blue-600 transition-colors">Board Recruitment</a></li>
              <li><a href="board-engagement.html" class="text-slate-600 hover:text-blue-600 transition-colors">Board Engagement</a></li>
              <li><a href="board-roles-and-responsibilities.html" class="text-slate-600 hover:text-blue-600 transition-colors">Roles & Responsibilities</a></li>
              <li><a href="board-committee-meetings.html" class="text-slate-600 hover:text-blue-600 transition-colors">Board Meetings</a></li>
              <li><a href="fundraising.html" class="text-slate-600 hover:text-blue-600 transition-colors">Fundraising</a></li>
              <li><a href="agenda-resources.html" class="text-slate-600 hover:text-blue-600 transition-colors">Agendas & Minutes</a></li>
              <li><a href="view-all-resources.html" class="text-slate-600 hover:text-blue-600 transition-colors">View All</a></li>
            </ul>
          </div>
          
          <!-- Why BoardBlocs Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Why BoardBlocs</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="why-board-blocs.html" class="text-slate-600 hover:text-blue-600 transition-colors">Why BoardBlocs</a></li>
              <li><a href="about-us.html" class="text-slate-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="pricing.html" class="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="compliance.html" class="text-slate-600 hover:text-blue-600 transition-colors">Compliance</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Security</a></li>
            </ul>
          </div>
          
          <!-- Support Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Support</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="contact-us.html" class="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="book-demo.html" class="text-slate-600 hover:text-blue-600 transition-colors">Get Started</a></li>
              <li><a href="privacy-policy.html" class="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-sm text-slate-500">© <span id="year"></span> Sopris Apps, LLC. All rights reserved.</div>
        </div>
      </div>
    </footer>`;

  // Insert footer at the end of body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  // Initialize footer functionality
  initializeFooter();
}

function initializeFooter() {
  // Set current year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
