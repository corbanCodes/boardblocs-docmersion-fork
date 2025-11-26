// Footer Loader - Loads consistent footer across all pages
function loadFooter() {
  const footerHTML = `
    <!-- Footer -->
    <footer class="bg-gradient-to-t from-white to-purple-50/30 border-t border-purple-200/50 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <!-- Brand Column -->
          <div class="md:col-span-1">
            <div class="flex items-center gap-3 mb-4">
              <img src="logo.png" alt="DocMersion Logo" class="w-8 h-8">
              <div class="text-2xl font-bold"><span class="text-black">Doc</span><span style="color: #238CFF;">Mersion</span></div>
            </div>
            <a href="book-demo.html" class="inline-block text-sm text-gray-600 hover:text-blue-600 border border-gray-300 hover:border-blue-400 px-4 py-2 rounded-lg transition-colors duration-200">
              Book a Demo
            </a>
          </div>
          
          <!-- Industries Column -->
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Industries</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="government.html" class="text-gray-600 hover:text-blue-600 transition-colors">Government</a></li>
              <li><a href="education.html" class="text-gray-600 hover:text-blue-600 transition-colors">Education</a></li>
              <li><a href="non-profit.html" class="text-gray-600 hover:text-blue-600 transition-colors">Non-Profit</a></li>
              <li><a href="associations.html" class="text-gray-600 hover:text-blue-600 transition-colors">Associations</a></li>
            </ul>
          </div>
          
          <!-- Solutions Column -->
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="pricing.html" class="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="compliance.html" class="text-gray-600 hover:text-blue-600 transition-colors">Compliance</a></li>
              <li><a href="demo.html" class="text-gray-600 hover:text-blue-600 transition-colors">Live Demo</a></li>
            </ul>
          </div>
          
          <!-- Support Column -->
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Support</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html#contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="book-demo.html" class="text-gray-600 hover:text-blue-600 transition-colors">Get Started</a></li>
            </ul>
          </div>
          
          <!-- Legal Column -->
          <div>
            <h3 class="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="privacy-policy.html" class="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="text-sm text-gray-400">© <span id="year"></span> Sopris Apps, LLC</div>
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
