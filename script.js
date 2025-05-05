document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const loginForm = document.getElementById('login');
  const registerForm = document.getElementById('register');
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');
  const showRegisterBtn = document.getElementById('show-register-btn');
  const showLoginBtn = document.getElementById('show-login-btn');

  // Event Listeners
  showRegisterBtn.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  });

  showLoginBtn.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  // Login Functionality
  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    if (!username || !password) {
      alert('Please enter both fields');
      return;
    }
    
    // Simple validation (replace with your actual auth logic)
    if (username.length >= 3 && password.length >= 3) {
      localStorage.setItem('currentUser', username);
      alert('Login successful!');
      // Here you would redirect to your chat interface
    } else {
      alert('Invalid credentials');
    }
  });

  // Register Functionality
  registerBtn.addEventListener('click', () => {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    
    if (!username || !password) {
      alert('Please enter both fields');
      return;
    }
    
    // Simple registration (replace with your actual auth logic)
    const users = JSON.parse(localStorage.getItem('users')) || {};
    
    if (users[username]) {
      alert('Username already exists');
    } else {
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', username);
      alert('Registration successful!');
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    }
  });
});
