// Contact Form Loader - Reusable contact form component
// This creates a standardized contact form that works with Formspree.io

function loadContactForm(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return;
  }

  // Default options
  const defaults = {
    title: "Contact Us",
    subtitle: "Ready to transform your board operations? Let's connect and discuss how BoardBlocs can help your organization.",
    buttonText: "Send Message",
    formAction: "https://formspree.io/f/mpwvrrap"
  };

  const config = { ...defaults, ...options };

  // Determine background class based on page context
  // Check if the page has a gradient background by looking at the main element
  const mainElement = document.querySelector('main');
  const hasGradientBg = mainElement && mainElement.classList.contains('bg-gradient-to-br');
  
  // Use white background only for pages without gradient backgrounds (like index.html)
  const sectionBgClass = hasGradientBg || containerId === 'pricing-contact-form-container' ? '' : 'bg-white';
  
  // Create the contact form HTML
  const contactFormHTML = `
    <section id="contact" class="py-24 ${sectionBgClass}">
      <div class="container mx-auto px-4 max-w-3xl">
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl">
            <i class="bi bi-envelope-fill"></i>
            <span>GET IN TOUCH</span>
          </div>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">${config.title}</h2>
          <p class="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">${config.subtitle}</p>
        </div>
        <div class="relative">
          <form action="${config.formAction}" method="POST" class="relative bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-8 md:p-10 flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label class="flex flex-col gap-2 font-semibold text-slate-900 text-sm">
                Name <span class="text-red-500">*</span>
                <input type="text" name="name" required class="rounded-lg px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-base font-normal text-slate-700" placeholder="Your full name">
              </label>
              <label class="flex flex-col gap-2 font-semibold text-slate-900 text-sm">
                Email <span class="text-red-500">*</span>
                <input type="email" name="email" required class="rounded-lg px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-base font-normal text-slate-700" placeholder="you@email.com">
              </label>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label class="flex flex-col gap-2 font-semibold text-slate-900 text-sm">
                Organization
                <input type="text" name="company" class="rounded-lg px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-base font-normal text-slate-700" placeholder="Your organization name">
              </label>
              <label class="flex flex-col gap-2 font-semibold text-slate-900 text-sm">
                Website URL
                <input type="text" name="website" class="rounded-lg px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-base font-normal text-slate-700" placeholder="yourwebsite.com">
              </label>
            </div>
            <label class="flex flex-col gap-2 font-semibold text-slate-900 text-sm">
              Board Size
              <input type="text" name="num_docs" class="rounded-lg px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-base font-normal text-slate-700" placeholder="Number of board members">
            </label>
            <label class="flex flex-col gap-2 font-semibold text-slate-900 text-sm">
              Message <span class="text-red-500">*</span>
              <textarea name="message" rows="5" required class="rounded-lg px-4 py-3 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-base resize-none font-normal text-slate-700" placeholder="Tell us about your board's needs..."></textarea>
            </label>
            <button type="submit" class="group relative w-full py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white mt-4" style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);">
              <span class="relative z-10 inline-flex items-center gap-2">
                ${config.buttonText}
                <i class="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  `;

  // Insert the HTML into the container
  container.innerHTML = contactFormHTML;
}

// Auto-load contact form if a container with id "contact-form-container" exists
document.addEventListener('DOMContentLoaded', function() {
  // Check for standard contact form container
  if (document.getElementById('contact-form-container')) {
    loadContactForm('contact-form-container');
  }
  
  // Check for pricing page contact form container
  if (document.getElementById('pricing-contact-form-container')) {
    loadContactForm('pricing-contact-form-container', {
      title: "Get Your Custom Quote",
      subtitle: "Tell us about your board's needs and we'll create a tailored BoardBlocs solution for your organization.",
      buttonText: "Get My Custom Quote"
    });
  }
});
