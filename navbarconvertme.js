(function () {
  /**
   * Injects a shared Bootstrap navbar into the page.
   * The navbar HTML lives here so it can be reused across pages.
   */
  function loadNavbar() {
    var container = document.getElementById("navbar-container");
    if (!container) return;

    container.innerHTML = `
      <style>
        .navbar-brand img {
          height: 40px;
        }

        .navbar-brand span {
          font-size: 1.25rem;
        }

        /* Hamburger menu styling */
        .navbar-toggler {
          border: none;
          padding: 0.25rem 0.5rem;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        .navbar-nav .nav-link {
          font-size: 0.95rem;
          padding-right: 1.25rem !important;
          padding-left: 1.25rem !important;
          color: #3f4347;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link:focus {
          color: #111;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .nav-caret {
          width: 7px;
          height: 7px;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: rotate(45deg);
          display: inline-block;
          margin-left: 2px;
          margin-top: 1px;
          transform-origin: center;
          flex-shrink: 0;
          transition: transform 0.2s ease-in-out;
        }

        .login-arrow {
          height: 14px;
          width: auto;
          display: block;
        }

        /* Log In link styling */
        a.text-decoration-none.text-body {
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        a.text-decoration-none.text-body span {
          display: inline-block;
        }

        a.text-decoration-none.text-body:hover {
          text-decoration: underline !important;
          text-underline-offset: 4px !important;
        }

        a.text-decoration-none.text-body:hover span {
          text-decoration: underline !important;
        }

        .btn-trial {
          border-radius: 999px;
          border-width: 2px;
          padding-inline: 1.5rem;
          font-weight: 500;
          border-color: #ff6b3d;
          color: #000;
          background-color: transparent;
          transition: all 0.2s ease-in-out;
        }

        .btn-trial:hover {
          background-color: #ff6b3d;
          color: #fff;
          border-color: #ff6b3d;
          text-decoration: none;
        }

        /* Product mega menu */
        .dropdown-product {
          position: static;
        }

        /* Solutions mega menu */
        .dropdown-solutions {
          position: static;
        }

        /* Resources mega menu */
        .dropdown-resources {
          position: static;
        }

        /* Why Boardblocs mega menu */
        .dropdown-why {
          position: static;
        }

        .dropdown-product-panel {
          display: none;
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          margin-top: 0.75rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
          padding: 1.75rem 2.5rem 0;
          max-width: min(1200px, calc(100vw - 4rem));
          width: 1200px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          z-index: 1050;
        }

        .dropdown-product.show-panel .dropdown-product-panel {
          display: block;
        }

        .dropdown-product.show-panel .nav-caret {
          transform: rotate(-135deg) translateY(-2px);
        }

        .dropdown-product.show-panel .nav-link {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .dropdown-solutions-panel {
          display: none;
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          margin-top: 0.75rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
          padding: 1.75rem 2.5rem 0;
          max-width: min(1100px, calc(100vw - 4rem));
          width: 1100px;
          z-index: 1050;
        }

        .dropdown-solutions.show-panel .dropdown-solutions-panel {
          display: block;
        }

        .dropdown-solutions.show-panel .nav-caret {
          transform: rotate(-135deg) translateY(-2px);
        }

        .dropdown-solutions.show-panel .nav-link {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .solutions-columns {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3.5rem;
        }

        .solutions-column-title {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.85rem;
          color: #1f2937;
        }

        .solutions-list {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .solutions-list.single-column {
          gap: 2rem;
        }

        .solutions-list.single-column .solutions-item-icon {
          width: 42px;
          height: 42px;
          font-size: 1.15rem;
        }

        .solutions-list.single-column .solutions-item-title {
          font-size: 0.9375rem;
          line-height: 1.4;
        }

        .solutions-list.two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.95rem 2rem;
        }

        .solutions-item {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .solutions-item:hover .solutions-item-title {
          text-decoration: underline;
        }

        .solutions-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          background-color: #ffe7db;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6b3d;
          font-size: 1rem;
          font-weight: 400;
          flex-shrink: 0;
        }

        .solutions-item-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          line-height: 1.35;
          color: #1f2937;
        }

        .solutions-item-body {
          margin: 0;
          color: #6b7280;
          line-height: 1.5;
          font-size: 0.8125rem;
        }

        .solutions-footer {
          margin-top: 1rem;
          margin-left: -2.5rem;
          margin-right: -2.5rem;
          padding: 1rem 2.5rem;
          background-color: #f3f4f6;
          border-radius: 0 0 12px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .solutions-footer a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ff6b3d;
          font-weight: 500;
        }

        .solutions-footer a i {
          font-size: 1rem;
        }

        .dropdown-resources-panel {
          display: none;
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          margin-top: 0.75rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
          padding: 1.75rem 2.5rem 0;
          max-width: min(1100px, calc(100vw - 4rem));
          width: 1100px;
          z-index: 1050;
        }

        .dropdown-resources.show-panel .dropdown-resources-panel {
          display: block;
        }

        .dropdown-resources.show-panel .nav-caret {
          transform: rotate(-135deg) translateY(-2px);
        }

        .dropdown-resources.show-panel .nav-link {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .resources-columns {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3.5rem;
        }

        .resources-column-title {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.85rem;
          color: #1f2937;
        }

        .resources-list {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
        }

        .resources-list.single-column {
          gap: 1.45rem;
        }

        .resources-list.single-column .resources-item-icon {
          width: 42px;
          height: 42px;
          font-size: 1.15rem;
        }

        .resources-list.single-column .resources-item-title {
          font-size: 0.9375rem;
          line-height: 1.4;
        }

        .resources-list.two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.95rem 2rem;
        }

        .resources-item {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .resources-item:hover .resources-item-title {
          text-decoration: underline;
        }

        .resources-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          background-color: #ffe7db;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6b3d;
          font-size: 1rem;
          font-weight: 400;
          flex-shrink: 0;
        }

        .resources-item-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          line-height: 1.35;
          color: #1f2937;
        }

        .resources-item-body {
          margin: 0;
          color: #6b7280;
          line-height: 1.5;
          font-size: 0.8125rem;
        }

        .resources-footer {
          margin-top: 1rem;
          margin-left: -2.5rem;
          margin-right: -2.5rem;
          padding: 1rem 2.5rem;
          background-color: #f3f4f6;
          border-radius: 0 0 12px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .resources-footer a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ff6b3d;
          font-weight: 500;
        }

        .resources-footer a i {
          font-size: 1rem;
        }

        .dropdown-why-panel {
          display: none;
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          margin-top: 0.75rem;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
          padding: 1.75rem 2.5rem 0;
          max-width: min(950px, calc(100vw - 4rem));
          width: 950px;
          z-index: 1050;
        }

        .dropdown-why.show-panel .dropdown-why-panel {
          display: block;
        }

        .dropdown-why.show-panel .nav-caret {
          transform: rotate(-135deg) translateY(-2px);
        }

        .dropdown-why.show-panel .nav-link {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .why-sections {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .why-item {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          cursor: pointer;
        }

        .why-item:hover .why-item-title {
          text-decoration: underline;
        }

        .why-item-icon {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background-color: #ffe7db;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6b3d;
          font-size: 1.1rem;
          font-weight: 400;
          flex-shrink: 0;
        }

        .why-item-title {
          font-weight: 600;
          font-size: 0.9375rem;
          line-height: 1.35;
          color: #1f2937;
          margin-bottom: 0.35rem;
        }

        .why-item-body {
          margin: 0;
          color: #6b7280;
          line-height: 1.5;
          font-size: 0.8125rem;
        }

        .why-footer {
          margin-top: 1rem;
          margin-left: -2.5rem;
          margin-right: -2.5rem;
          padding: 1rem 2.5rem;
          background-color: #f3f4f6;
          border-radius: 0 0 12px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .why-footer a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ff6b3d;
          font-weight: 500;
        }

        .why-footer a i {
          font-size: 1rem;
        }

        /* Hide mobile submenus on desktop */
        @media (min-width: 1100px) {
          .mobile-submenu {
            display: none !important;
          }
          
          .mobile-cta {
            display: none !important;
          }
        }

        /* Mobile menu styling */
        @media (max-width: 1099px) {
          /* Hide desktop mega menus on mobile */
          .dropdown-product-panel,
          .dropdown-solutions-panel,
          .dropdown-resources-panel,
          .dropdown-why-panel {
            display: none !important;
          }

          .nav-caret {
            margin-left: auto;
          }

          .navbar-nav .nav-link {
            padding: 0.75rem 0;
            border-bottom: 1px solid #e5e7eb;
            font-size: 1rem;
            font-weight: 500;
          }

          .navbar-nav .nav-item:last-child .nav-link {
            border-bottom: none;
          }

          /* Mobile submenu styling */
          .mobile-submenu {
            display: none;
            padding-left: 1rem;
            margin-top: 0.5rem;
          }

          .mobile-submenu.show {
            display: block;
          }

          .mobile-submenu-item {
            padding: 0.5rem 0;
            font-size: 0.9375rem;
            color: #6b7280;
            text-decoration: none;
            display: block;
          }

          .mobile-submenu-item:hover {
            color: #ff6b3d;
          }

          .mobile-submenu-header {
            font-weight: 600;
            color: #1f2937;
            margin-top: 0.75rem;
            margin-bottom: 0.5rem;
            font-size: 0.875rem;
          }

          .mobile-submenu-header:first-child {
            margin-top: 0.5rem;
          }

          .mobile-cta {
            padding-top: 1rem;
            margin-top: 1rem;
            border-top: 1px solid #e5e7eb;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .mobile-cta .btn-trial {
            width: 100%;
            text-align: center;
          }

          .mobile-cta a:not(.btn) {
            padding: 0.75rem 0;
            text-align: center;
          }
        }

        .product-grid-title {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.85rem 1.75rem;
        }

        .product-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.83rem;
          cursor: pointer;
        }

        .product-item:hover .product-item-title {
          text-decoration: underline;
        }

        .product-item-icon {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          background-color: #ffe7db;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff6b3d;
          font-size: 1.05rem;
          font-weight: 400;
          flex-shrink: 0;
        }

        .product-item-title {
          font-weight: 600;
          margin-bottom: 0.15rem;
          font-size: 0.875rem;
        }

        .product-item-body {
          margin: 0;
          color: #6b7280;
          line-height: 1.4;
          font-size: 0.8125rem;
        }

        .product-footer {
          margin-top: 1rem;
          margin-left: -2.5rem;
          margin-right: -2.5rem;
          padding: 1rem 2.5rem;
          background-color: #f3f4f6;
          border-radius: 0 0 12px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .product-footer a {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ff6b3d;
          font-weight: 500;
        }

        .product-footer a i {
          font-size: 1rem;
        }

        /* Mobile menu overlay fix */
        @media (max-width: 1199.98px) {
          .navbar-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            padding: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            max-height: 85vh;
            overflow-y: auto;
            border-top: 1px solid #f3f4f6;
          }
        }
      </style>

      <nav class="navbar navbar-expand-xl bg-white py-3" style="position: sticky; top: 0; z-index: 1020; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <div class="container-fluid px-4">
          <a class="navbar-brand d-flex align-items-center" href="index.html">
            <img src="logo.png" alt="Boardblocs logo" class="me-2" />
            <span class="fw-semibold">Boardblocs</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown-product">
                <a class="nav-link d-flex align-items-center gap-1" href="#" id="navProduct">
                  <span>Product</span>
                  <span class="nav-caret"></span>
                </a>
                <div class="mobile-submenu" id="mobileProduct">
                  <div class="mobile-submenu-header">Product</div>
                  <a href="#" class="mobile-submenu-item">Modern Meetings</a>
                  <a href="#" class="mobile-submenu-item">Document Center</a>
                  <a href="#" class="mobile-submenu-item">Boardblocs AI</a>
                  <a href="#" class="mobile-submenu-item">Agenda Builder</a>
                  <a href="#" class="mobile-submenu-item">Groups & Committees</a>
                  <a href="#" class="mobile-submenu-item">Boardblocs Mobile App</a>
                  <a href="#" class="mobile-submenu-item">Boardblocs Video</a>
                  <a href="#" class="mobile-submenu-item">Boardblocs Surveys</a>
                  <a href="#" class="mobile-submenu-item">Integrations</a>
                  <a href="#" class="mobile-submenu-item">Public Sites</a>
                  <a href="#" class="mobile-submenu-item">eSignatures</a>
                  <a href="#" class="mobile-submenu-item">Accessibility</a>
                  <a href="#" class="mobile-submenu-item">Discussions</a>
                  <a href="#" class="mobile-submenu-item">Task Manager</a>
                  <a href="#" class="mobile-submenu-item">Reporting</a>
                  <a href="#" class="mobile-submenu-item">Polls</a>
                  <a href="#" class="mobile-submenu-item">Security</a>
                  <a href="#" class="mobile-submenu-item">View All Features</a>
                </div>
                <div class="dropdown-product-panel">
                  <div class="product-grid-title">Product</div>
                  <div class="product-grid">
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-calendar-check"></i></div>
                      <div>
                        <div class="product-item-title">Modern Meetings</div>
                        <p class="product-item-body">Everything from prep to follow-up — streamlined with intuitive tools and AI support.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-folder"></i></div>
                      <div>
                        <div class="product-item-title">Document Center</div>
                        <p class="product-item-body">Access all your files securely — no digging through emails required.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-stars"></i></div>
                      <div>
                        <div class="product-item-title">Boardblocs AI</div>
                        <p class="product-item-body">Easy-to-use AI-powered assistance where nonprofits need it most.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-list-ul"></i></div>
                      <div>
                        <div class="product-item-title">Agenda Builder</div>
                        <p class="product-item-body">Start fast with customizable templates and intuitive agenda creation.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-people"></i></div>
                      <div>
                        <div class="product-item-title">Groups & Committees</div>
                        <p class="product-item-body">Empower committees and task forces with focused, dedicated workspaces.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-phone"></i></div>
                      <div>
                        <div class="product-item-title">Boardblocs Mobile App</div>
                        <p class="product-item-body">Stay connected and productive on the go with the Boardblocs Mobile App.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-camera-video"></i></div>
                      <div>
                        <div class="product-item-title">Boardblocs Video</div>
                        <p class="product-item-body">Hold seamless virtual meetings with built-in video and instant AI-generated minutes.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-clipboard-data"></i></div>
                      <div>
                        <div class="product-item-title">Boardblocs Surveys</div>
                        <p class="product-item-body">Easily gather feedback to make better decisions for your nonprofit organization.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-link-45deg"></i></div>
                      <div>
                        <div class="product-item-title">Integrations</div>
                        <p class="product-item-body">Our platform integrates easily with the apps you use every day.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-megaphone"></i></div>
                      <div>
                        <div class="product-item-title">Public Sites</div>
                        <p class="product-item-body">ADA-compliant public hub for agendas, minutes, and policies.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-pen"></i></div>
                      <div>
                        <div class="product-item-title">eSignatures</div>
                        <p class="product-item-body">Request and track eSignatures — all in one place.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-universal-access"></i></div>
                      <div>
                        <div class="product-item-title">Accessibility</div>
                        <p class="product-item-body">The most accessible board software — designed for every board member, on any device.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-chat-dots"></i></div>
                      <div>
                        <div class="product-item-title">Discussions</div>
                        <p class="product-item-body">Keep board communication secure, organized, and on track between meetings.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-check-square"></i></div>
                      <div>
                        <div class="product-item-title">Task Manager</div>
                        <p class="product-item-body">Keep track of to-dos and due dates to stay on task and on target.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-graph-up"></i></div>
                      <div>
                        <div class="product-item-title">Reporting</div>
                        <p class="product-item-body">Use platform data to generate reports that optimize your board's performance.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-bar-chart"></i></div>
                      <div>
                        <div class="product-item-title">Polls</div>
                        <p class="product-item-body">Polls encourages decision-making between and leading up to meetings.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-shield-check"></i></div>
                      <div>
                        <div class="product-item-title">Security</div>
                        <p class="product-item-body">Added safeguards and systems ensure better governance and privacy.</p>
                      </div>
                    </div>
                    <div class="product-item">
                      <div class="product-item-icon"><i class="bi bi-play-circle"></i></div>
                      <div>
                        <div class="product-item-title">View All Features</div>
                        <p class="product-item-body">See how our features work together through the entire meeting lifecycle.</p>
                      </div>
                    </div>
                  </div>
                  <div class="product-footer">
                    <a href="#">
                      <i class="bi bi-person-circle"></i>
                      <span>Start free trial</span>
                    </a>
                    <a href="#">
                      <i class="bi bi-play-circle"></i>
                      <span>Watch demo</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown-solutions">
                <a class="nav-link d-flex align-items-center gap-1" href="#" id="navSolutions">
                  <span>Solutions</span>
                  <span class="nav-caret"></span>
                </a>
                <div class="mobile-submenu" id="mobileSolutions">
                  <div class="mobile-submenu-header">By Industry</div>
                  <a href="#" class="mobile-submenu-item">Associations</a>
                  <a href="#" class="mobile-submenu-item">Community Organizations</a>
                  <a href="#" class="mobile-submenu-item">Education</a>
                  <a href="#" class="mobile-submenu-item">Government</a>
                  <a href="#" class="mobile-submenu-item">Healthcare</a>
                  <a href="#" class="mobile-submenu-item">Real Estate</a>
                  <a href="#" class="mobile-submenu-item">Technology</a>
                  <div class="mobile-submenu-header">By Role</div>
                  <a href="#" class="mobile-submenu-item">Board Management Solutions for Administrators</a>
                  <a href="#" class="mobile-submenu-item">Board Management Solutions for Board Leaders</a>
                  <a href="#" class="mobile-submenu-item">Solutions for Board Members</a>
                  <a href="#" class="mobile-submenu-item">Solutions for CEOs and Executives</a>
                </div>
                <div class="dropdown-solutions-panel">
                  <div class="solutions-columns">
                    <div>
                      <div class="solutions-column-title">By Industry</div>
                      <div class="solutions-list two-columns">
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-building"></i></div>
                          <div>
                            <div class="solutions-item-title">Associations</div>
                            <p class="solutions-item-body">The platform that simplifies board operations at scale.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-people-fill"></i></div>
                          <div>
                            <div class="solutions-item-title">Community Organizations</div>
                            <p class="solutions-item-body">A platform for serving communities and building trust.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-mortarboard"></i></div>
                          <div>
                            <div class="solutions-item-title">Education</div>
                            <p class="solutions-item-body">Created for informed decision making and collaboration.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-bank"></i></div>
                          <div>
                            <div class="solutions-item-title">Government</div>
                            <p class="solutions-item-body">Built for better governance and shaping policies.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-heart-pulse"></i></div>
                          <div>
                            <div class="solutions-item-title">Healthcare</div>
                            <p class="solutions-item-body">The platform to take action on what matters.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-houses"></i></div>
                          <div>
                            <div class="solutions-item-title">Real Estate</div>
                            <p class="solutions-item-body">One place for all materials and communications.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-laptop"></i></div>
                          <div>
                            <div class="solutions-item-title">Technology</div>
                            <p class="solutions-item-body">A cloud-based solution for leaders in tech.</p>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-grid-3x3"></i></div>
                          <div>
                            <div class="solutions-item-title">View All Solutions</div>
                            <p class="solutions-item-body">View All Solutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="solutions-column-title">By Role</div>
                      <div class="solutions-list single-column">
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-briefcase"></i></div>
                          <div>
                            <div class="solutions-item-title">Board Management Solutions for Administrators</div>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-person-badge"></i></div>
                          <div>
                            <div class="solutions-item-title">Board Management Solutions for Board Leaders</div>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-house-door"></i></div>
                          <div>
                            <div class="solutions-item-title">Solutions for Board Members</div>
                          </div>
                        </div>
                        <div class="solutions-item">
                          <div class="solutions-item-icon"><i class="bi bi-person-vcard"></i></div>
                          <div>
                            <div class="solutions-item-title">Solutions for CEOs and Executives</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="solutions-footer">
                    <a href="#">
                      <i class="bi bi-person-circle"></i>
                      <span>Start free trial</span>
                    </a>
                    <a href="#">
                      <i class="bi bi-play-circle"></i>
                      <span>Watch demo</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown-resources">
                <a class="nav-link d-flex align-items-center gap-1" href="#" id="navResources">
                  <span>Resources</span>
                  <span class="nav-caret"></span>
                </a>
                <div class="mobile-submenu" id="mobileResources">
                  <div class="mobile-submenu-header">By Topic</div>
                  <a href="#" class="mobile-submenu-item">Board Governance</a>
                  <a href="#" class="mobile-submenu-item">Board Recruitment & Onboarding</a>
                  <a href="#" class="mobile-submenu-item">Board Engagement</a>
                  <a href="#" class="mobile-submenu-item">Board Roles & Responsibilities</a>
                  <a href="#" class="mobile-submenu-item">Board & Committee Meetings</a>
                  <a href="#" class="mobile-submenu-item">Fundraising</a>
                  <a href="#" class="mobile-submenu-item">Agendas, Minutes & Record Keeping</a>
                  <div class="mobile-submenu-header">By Type</div>
                  <a href="#" class="mobile-submenu-item">Blogs</a>
                  <a href="#" class="mobile-submenu-item">Case Studies</a>
                  <a href="#" class="mobile-submenu-item">E-books & Whitepapers</a>
                  <a href="#" class="mobile-submenu-item">Webinars & Events</a>
                  <a href="#" class="mobile-submenu-item">Boardblocs Consultant</a>
                </div>
                <div class="dropdown-resources-panel">
                  <div class="resources-columns">
                    <div>
                      <div class="resources-column-title">View By Topic</div>
                      <div class="resources-list two-columns">
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-diagram-3"></i></div>
                          <div>
                            <div class="resources-item-title">Board Governance</div>
                            <p class="resources-item-body">Best practices for policies, regulations, and board management.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-person-arms-up"></i></div>
                          <div>
                            <div class="resources-item-title">Board Recruitment & Onboarding</div>
                            <p class="resources-item-body">Attract top talent and make a smooth transition.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-people"></i></div>
                          <div>
                            <div class="resources-item-title">Board Engagement</div>
                            <p class="resources-item-body">Strategies to optimize board collaboration.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-card-list"></i></div>
                          <div>
                            <div class="resources-item-title">Board Roles & Responsibilities</div>
                            <p class="resources-item-body">Insightful resources on defining board roles and duties.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-calendar3"></i></div>
                          <div>
                            <div class="resources-item-title">Board & Committee Meetings</div>
                            <p class="resources-item-body">Resources for effective virtual and in-person meetings.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-cash-coin"></i></div>
                          <div>
                            <div class="resources-item-title">Fundraising</div>
                            <p class="resources-item-body">Actionable tips and strategies to improve fundraising.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-journal-text"></i></div>
                          <div>
                            <div class="resources-item-title">Agendas, Minutes & Record Keeping</div>
                            <p class="resources-item-body">Best practices and templates for meeting materials.</p>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-grid-3x3"></i></div>
                          <div>
                            <div class="resources-item-title">View All Resources</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="resources-column-title">View By Type</div>
                      <div class="resources-list single-column">
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-rss"></i></div>
                          <div>
                            <div class="resources-item-title">Blogs</div>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-file-earmark-text"></i></div>
                          <div>
                            <div class="resources-item-title">Case Studies</div>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-book"></i></div>
                          <div>
                            <div class="resources-item-title">E-books & Whitepapers</div>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-mic"></i></div>
                          <div>
                            <div class="resources-item-title">Webinars & Events</div>
                          </div>
                        </div>
                        <div class="resources-item">
                          <div class="resources-item-icon"><i class="bi bi-phone"></i></div>
                          <div>
                            <div class="resources-item-title">Boardblocs Consultant</div>
                            <p class="resources-item-body">Meet Boardblocs Consultant, your new go-to advisor for elevating your nonprofit!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="resources-footer">
                    <a href="#">
                      <i class="bi bi-person-circle"></i>
                      <span>Start free trial</span>
                    </a>
                    <a href="#">
                      <i class="bi bi-play-circle"></i>
                      <span>Watch demo</span>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown-why">
                <a class="nav-link d-flex align-items-center gap-1" href="#" id="navWhy">
                  <span>Why Boardblocs</span>
                  <span class="nav-caret"></span>
                </a>
                <div class="mobile-submenu" id="mobileWhy">
                  <a href="#" class="mobile-submenu-item">About Us</a>
                  <a href="#" class="mobile-submenu-item">Contact Us</a>
                  <a href="#" class="mobile-submenu-item">Why Boardblocs</a>
                </div>
                <div class="dropdown-why-panel">
                  <div class="why-sections">
                    <div class="why-item">
                      <div class="why-item-icon"><i class="bi bi-card-heading"></i></div>
                      <div>
                        <div class="why-item-title">About Us</div>
                        <p class="why-item-body">Discover how Boardblocs revolutionizes nonprofit board management with a mission-driven team and cutting-edge technology.</p>
                      </div>
                    </div>
                    <div class="why-item">
                      <div class="why-item-icon"><i class="bi bi-envelope"></i></div>
                      <div>
                        <div class="why-item-title">Contact Us</div>
                        <p class="why-item-body">Get in touch with Boardblocs—whether you have questions, need a demo, or want to elevate your board meetings, we're here to help!</p>
                      </div>
                    </div>
                    <div class="why-item">
                      <div class="why-item-icon"><i class="bi bi-patch-check"></i></div>
                      <div>
                        <div class="why-item-title">Why Boardblocs</div>
                        <p class="why-item-body">Learn why nonprofit leaders choose Boardblocs to streamline meetings, improve collaboration, and deliver impact that endures.</p>
                      </div>
                    </div>
                  </div>
                  <div class="why-footer">
                    <a href="#">
                      <i class="bi bi-person-circle"></i>
                      <span>Start free trial</span>
                    </a>
                    <a href="#">
                      <i class="bi bi-play-circle"></i>
                      <span>Watch demo</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <div class="mobile-cta d-lg-none">
              <a href="#" class="btn btn-outline-danger btn-trial">Start Trial</a>
              <a href="#" class="text-decoration-none text-body">Log In</a>
            </div>

            <div class="d-none d-lg-flex align-items-center gap-3">
              <a href="#" class="btn btn-outline-danger btn-trial">Start Trial</a>
              <a href="#" class="text-decoration-none text-body d-flex align-items-center gap-1">
                <span>Log In</span>
                <img src="log-in.png" alt="Log in" class="login-arrow" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;

    // Helper function to check if we're in mobile view
    var isMobileView = function () {
      return window.innerWidth < 1100;
    };

    // Wire up Product, Solutions, Resources, and Why click behavior for mega menus
    var productItem = container.querySelector(".dropdown-product");
    var productLink = container.querySelector("#navProduct");
    var productPanel = container.querySelector(".dropdown-product-panel");
    var mobileProductMenu = container.querySelector("#mobileProduct");

    var solutionsItem = container.querySelector(".dropdown-solutions");
    var solutionsLink = container.querySelector("#navSolutions");
    var solutionsPanel = container.querySelector(".dropdown-solutions-panel");
    var mobileSolutionsMenu = container.querySelector("#mobileSolutions");

    var resourcesItem = container.querySelector(".dropdown-resources");
    var resourcesLink = container.querySelector("#navResources");
    var resourcesPanel = container.querySelector(".dropdown-resources-panel");
    var mobileResourcesMenu = container.querySelector("#mobileResources");

    var whyItem = container.querySelector(".dropdown-why");
    var whyLink = container.querySelector("#navWhy");
    var whyPanel = container.querySelector(".dropdown-why-panel");
    var mobileWhyMenu = container.querySelector("#mobileWhy");

    var isProductOpen = false;
    var isSolutionsOpen = false;
    var isResourcesOpen = false;
    var isWhyOpen = false;

    var closeProduct = function () {
      if (isProductOpen) {
        isProductOpen = false;
        productItem.classList.remove("show-panel");
      }
    };

    var closeSolutions = function () {
      if (isSolutionsOpen) {
        isSolutionsOpen = false;
        solutionsItem.classList.remove("show-panel");
      }
    };

    var closeResources = function () {
      if (isResourcesOpen) {
        isResourcesOpen = false;
        resourcesItem.classList.remove("show-panel");
      }
    };

    var closeWhy = function () {
      if (isWhyOpen) {
        isWhyOpen = false;
        whyItem.classList.remove("show-panel");
      }
    };

    // Product menu
    if (productItem && productLink && productPanel) {
      var toggleProduct = function (e) {
        e.preventDefault();

        // On mobile, toggle mobile submenu instead
        if (isMobileView()) {
          mobileProductMenu.classList.toggle("show");
          return;
        }

        e.stopPropagation();
        // Close other menus if open
        if (isSolutionsOpen) {
          closeSolutions();
        }
        if (isResourcesOpen) {
          closeResources();
        }
        if (isWhyOpen) {
          closeWhy();
        }
        isProductOpen = !isProductOpen;
        if (isProductOpen) {
          productItem.classList.add("show-panel");
        } else {
          productItem.classList.remove("show-panel");
        }
      };

      // Toggle on click
      productLink.addEventListener("click", toggleProduct);

      // Close when clicking outside
      document.addEventListener("click", function (e) {
        if (isProductOpen && !productItem.contains(e.target) && !productPanel.contains(e.target)) {
          closeProduct();
        }
      });

      // Prevent clicks inside the panel from closing it
      productPanel.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Solutions menu
    if (solutionsItem && solutionsLink && solutionsPanel) {
      var toggleSolutions = function (e) {
        e.preventDefault();

        // On mobile, toggle mobile submenu instead
        if (isMobileView()) {
          mobileSolutionsMenu.classList.toggle("show");
          return;
        }

        e.stopPropagation();
        // Close other menus if open
        if (isProductOpen) {
          closeProduct();
        }
        if (isResourcesOpen) {
          closeResources();
        }
        if (isWhyOpen) {
          closeWhy();
        }
        isSolutionsOpen = !isSolutionsOpen;
        if (isSolutionsOpen) {
          solutionsItem.classList.add("show-panel");
        } else {
          solutionsItem.classList.remove("show-panel");
        }
      };

      // Toggle on click
      solutionsLink.addEventListener("click", toggleSolutions);

      // Close when clicking outside
      document.addEventListener("click", function (e) {
        if (isSolutionsOpen && !solutionsItem.contains(e.target) && !solutionsPanel.contains(e.target)) {
          closeSolutions();
        }
      });

      // Prevent clicks inside the panel from closing it
      solutionsPanel.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Resources menu
    if (resourcesItem && resourcesLink && resourcesPanel) {
      var toggleResources = function (e) {
        e.preventDefault();

        // On mobile, toggle mobile submenu instead
        if (isMobileView()) {
          mobileResourcesMenu.classList.toggle("show");
          return;
        }

        e.stopPropagation();
        // Close other menus if open
        if (isProductOpen) {
          closeProduct();
        }
        if (isSolutionsOpen) {
          closeSolutions();
        }
        if (isWhyOpen) {
          closeWhy();
        }
        isResourcesOpen = !isResourcesOpen;
        if (isResourcesOpen) {
          resourcesItem.classList.add("show-panel");
        } else {
          resourcesItem.classList.remove("show-panel");
        }
      };

      // Toggle on click
      resourcesLink.addEventListener("click", toggleResources);

      // Close when clicking outside
      document.addEventListener("click", function (e) {
        if (isResourcesOpen && !resourcesItem.contains(e.target) && !resourcesPanel.contains(e.target)) {
          closeResources();
        }
      });

      // Prevent clicks inside the panel from closing it
      resourcesPanel.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Why menu
    if (whyItem && whyLink && whyPanel) {
      var toggleWhy = function (e) {
        e.preventDefault();

        // On mobile, toggle mobile submenu instead
        if (isMobileView()) {
          mobileWhyMenu.classList.toggle("show");
          return;
        }

        e.stopPropagation();
        // Close other menus if open
        if (isProductOpen) {
          closeProduct();
        }
        if (isSolutionsOpen) {
          closeSolutions();
        }
        if (isResourcesOpen) {
          closeResources();
        }
        isWhyOpen = !isWhyOpen;
        if (isWhyOpen) {
          whyItem.classList.add("show-panel");
        } else {
          whyItem.classList.remove("show-panel");
        }
      };

      // Toggle on click
      whyLink.addEventListener("click", toggleWhy);

      // Close when clicking outside
      document.addEventListener("click", function (e) {
        if (isWhyOpen && !whyItem.contains(e.target) && !whyPanel.contains(e.target)) {
          closeWhy();
        }
      });

      // Prevent clicks inside the panel from closing it
      whyPanel.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadNavbar);
  } else {
    loadNavbar();
  }
})();
