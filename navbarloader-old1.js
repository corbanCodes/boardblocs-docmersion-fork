// Navbar Loader - Loads consistent navbar across all pages
function loadNavbar() {
  const navbarHTML = `
    <!-- Navbar -->
    <nav class="fixed w-full z-30 bg-white/90 backdrop-blur shadow-sm border-b border-gray-100">
      <div class="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="index.html" class="flex items-center text-2xl font-bold">
          <img src="logo.png" alt="DocMersion Logo" class="h-8 w-8 mr-3 flex-shrink-0">
          <span class="text-black">Doc</span><span style="color: #238CFF;">Mersion</span>
        </a>
        <div class="hidden lg:flex space-x-6 xl:space-x-8 items-center">
          <div class="relative" id="solutions-desktop">
            <button id="solutions-desktop-btn" class="hover:text-brand transition flex items-center focus:outline-none whitespace-nowrap">
              <span>Industries</span>
              <svg class="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="solutions-desktop-dropdown" class="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 pointer-events-none transition-all duration-300 z-50 text-right overflow-hidden">
              <a href="non-profit.html" class="block px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 text-gray-700 hover:text-blue-600 font-medium">Nonprofits</a>
              <a href="government.html" class="block px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 text-gray-700 hover:text-blue-600 font-medium">Government</a>
              <a href="associations.html" class="block px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 text-gray-700 hover:text-blue-600 font-medium">Associations</a>
              <a href="education.html" class="block px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 text-gray-700 hover:text-blue-600 font-medium">Education</a>
            </div>
          </div>
          <a href="pricing.html" class="hover:text-brand transition whitespace-nowrap">Pricing</a>
          <a href="compliance.html" class="hover:text-brand transition whitespace-nowrap">Compliance</a>
          <a href="demo.html" class="hover:text-brand transition whitespace-nowrap">Demo</a>
          <a href="DocMersion%20Case%20Study_FinalDraft.pdf" class="hover:text-brand transition whitespace-nowrap">Case Study</a>
          <a href="book-demo.html" class="group relative ml-4 px-4 xl:px-5 py-2 rounded-full font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap" style="background: linear-gradient(135deg, #238CFF 0%, #6366f1 100%);">
            <span class="relative z-10">Book a Demo</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        <button class="lg:hidden text-3xl" id="mobile-menu-btn"><i class="bi bi-list"></i></button>
      </div>
      <!-- Mobile nav -->
      <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
        <div class="relative" id="solutions-mobile">
          <button class="block py-2 w-full text-left hover:text-brand focus:outline-none flex justify-between items-center" id="mobile-solutions-btn">
            <span>Industries</span>
            <svg class="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div id="mobile-solutions-menu" class="hidden absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50 text-right">
            <a href="non-profit.html" class="block px-4 py-2 hover:bg-blue-50">Nonprofits</a>
            <a href="government.html" class="block px-4 py-2 hover:bg-blue-50">Government</a>
            <a href="associations.html" class="block px-4 py-2 hover:bg-blue-50">Associations</a>
            <a href="education.html" class="block px-4 py-2 hover:bg-blue-50">Education</a>
          </div>
        </div>
        <a href="pricing.html" class="block py-2 hover:text-brand">Pricing</a>
        <a href="compliance.html" class="block py-2 hover:text-brand">Compliance</a>
        <a href="demo.html" class="block py-2 hover:text-brand">Demo</a>
        <a href="DocMersion%20Case%20Study_FinalDraft.pdf" class="block py-2 hover:text-brand">Case Study</a>
        <a href="book-demo.html" class="group relative block py-2 mt-2 px-5 rounded-full font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105" style="background: linear-gradient(135deg, #238CFF 0%, #6366f1 100%);">
          <span class="relative z-10">Book a Demo</span>
          <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </nav>`;

  // Insert navbar at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  
  // Initialize navbar functionality
  initializeNavbar();
}

function initializeNavbar() {
  // Mobile nav toggle
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.onclick = () => menu.classList.toggle('hidden');
  }

  // Desktop Industries Dropdown (click-to-open)
  const solutionsDesktop = document.getElementById('solutions-desktop');
  const solutionsDesktopBtn = document.getElementById('solutions-desktop-btn');
  const solutionsDesktopDropdown = document.getElementById('solutions-desktop-dropdown');
  let desktopDropdownOpen = false;
  
  if (solutionsDesktop && solutionsDesktopBtn && solutionsDesktopDropdown) {
    solutionsDesktopBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      desktopDropdownOpen = !desktopDropdownOpen;
      if (desktopDropdownOpen) {
        solutionsDesktopDropdown.classList.add('dropdown-open');
      } else {
        solutionsDesktopDropdown.classList.remove('dropdown-open');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (desktopDropdownOpen && !solutionsDesktop.contains(e.target)) {
        solutionsDesktopDropdown.classList.remove('dropdown-open');
        desktopDropdownOpen = false;
      }
    });
  }

  // Mobile Industries Dropdown
  const mobileIndustriesBtn = document.getElementById('mobile-solutions-btn');
  const mobileIndustriesMenu = document.getElementById('mobile-solutions-menu');
  
  if (mobileIndustriesBtn && mobileIndustriesMenu) {
    mobileIndustriesBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileIndustriesMenu.classList.toggle('hidden');
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileIndustriesMenu.classList.contains('hidden')) {
        if (!mobileIndustriesBtn.contains(e.target) && !mobileIndustriesMenu.contains(e.target)) {
          mobileIndustriesMenu.classList.add('hidden');
        }
      }
    });
  }
}


// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
});
