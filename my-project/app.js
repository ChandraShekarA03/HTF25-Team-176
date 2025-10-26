document.addEventListener('DOMContentLoaded', () => {

  // --- Page Navigation Logic ---
  const allPages = document.querySelectorAll('[id^="page-"]');
  const navButtons = document.querySelectorAll('.page-switcher-btn');

  function showPage(pageId) {
    // Hide all pages
    allPages.forEach(page => {
      page.classList.add('hidden');
    });
    // Show the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.remove('hidden');
      window.scrollTo(0, 0); // Scroll to top
    } else {
      console.error(`Page not found: ${pageId}`);
      document.getElementById('page-login').classList.remove('hidden'); // Default to login
    }
  }

  // Add click listeners to all nav buttons
  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPageId = button.getAttribute('data-page');
      showPage(targetPageId);
    });
  });

  // --- Login Page Logic ---
  const tabCustomer = document.getElementById('tab-customer');
  const tabVendor = document.getElementById('tab-vendor');
  const tabAdmin = document.getElementById('tab-admin');
  const loginTitle = document.getElementById('login-title');
  const signupFields = document.getElementById('signup-fields');
  const companyField = document.getElementById('company-field');
  const toggleLink = document.getElementById('toggle-link');
  const toggleText = document.getElementById('toggle-text');
  const submitButton = document.getElementById('form-submit-btn');
  const loginForm = document.getElementById('login-form');

  let currentRole = 'customer'; // 'customer', 'vendor', 'admin'
  let isLogin = true; // true for login, false for sign up

  function updateFormState() {
    // Update tabs
    tabCustomer.classList.toggle('tab-active', currentRole === 'customer');
    tabVendor.classList.toggle('tab-active', currentRole === 'vendor');
    tabAdmin.classList.toggle('tab-active', currentRole === 'admin');

    // Update titles and fields
    if (isLogin) {
      loginTitle.textContent = `${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)} Login`;
      submitButton.textContent = 'Login';
      toggleText.textContent = "Don't have an account? ";
      toggleLink.textContent = 'Sign Up';
      signupFields.classList.add('hidden');
    } else {
      loginTitle.textContent = `${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)} Sign Up`;
      submitButton.textContent = 'Create Account';
      toggleText.textContent = 'Already have an account? ';
      toggleLink.textContent = 'Login';
      signupFields.classList.remove('hidden');
      
      // Show company field only for vendor sign-up
      companyField.classList.toggle('hidden', currentRole !== 'vendor');
    }
    
    // Admin can't sign up
    toggleLink.classList.toggle('hidden', currentRole === 'admin');
    toggleText.classList.toggle('hidden', currentRole === 'admin');
    if (currentRole === 'admin' && !isLogin) {
        isLogin = true;
        updateFormState();
    }
  }

  // Tab listeners
  tabCustomer.addEventListener('click', () => { currentRole = 'customer'; updateFormState(); });
  tabVendor.addEventListener('click', () => { currentRole = 'vendor'; updateFormState(); });
  tabAdmin.addEventListener('click', () => { currentRole = 'admin'; updateFormState(); });

  // Toggle Login/Sign Up
  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    updateFormState();
  });

  // Form Submit Handler
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // This is where you would send data to your backend
    // For now, we just simulate the login and redirect
    
    if (!isLogin) {
        // If signing up, just show a success message (or go to login)
        alert('Account creation successful! (Simulation). Please login.');
        isLogin = true;
        updateFormState();
        return;
    }

    // --- SIMULATED LOGIN REDIRECT ---
    switch (currentRole) {
      case 'customer':
        showPage('page-landing');
        break;
      case 'vendor':
        // In a real app, you'd check if the vendor is 'approved'
        showPage('page-vendor-dash');
        break;
      case 'admin':
        showPage('page-admin-dash');
        break;
    }
  });

  // Initialize form state
  updateFormState();
});