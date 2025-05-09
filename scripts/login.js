function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('error');

    if (username === 'student' && password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'home_page.html';
    } else {
      errorDiv.textContent = 'İstifadəçi adı və ya şifrə yanlışdır.';
    }
  }

  if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'home_page.html';
  }
