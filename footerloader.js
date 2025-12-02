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
            <a href="book-demo.html" class="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Book a Demo
              <i class="bi bi-arrow-right text-xs"></i>
            </a>
          </div>
          
          <!-- Product Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Product</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Modern Meetings</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Document Center</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">BoardBlocs AI</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Public Sites</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Accessibility</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Discussions</a></li>
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
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Webinars</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</a></li>
              <li><a href="demo.html" class="text-slate-600 hover:text-blue-600 transition-colors">Live Demo</a></li>
            </ul>
          </div>
          
          <!-- Why BoardBlocs Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Why BoardBlocs</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="pricing.html" class="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="compliance.html" class="text-slate-600 hover:text-blue-600 transition-colors">Compliance</a></li>
              <li><a href="#" class="text-slate-600 hover:text-blue-600 transition-colors">Security</a></li>
            </ul>
          </div>
          
          <!-- Support Column -->
          <div>
            <h3 class="font-semibold text-slate-900 mb-4">Support</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html#contact" class="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="book-demo.html" class="text-slate-600 hover:text-blue-600 transition-colors">Get Started</a></li>
              <li><a href="privacy-policy.html" class="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
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
