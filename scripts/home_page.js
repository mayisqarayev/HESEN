function toggleMenu() {
    const profileMenu = document.querySelector('.profile-menu');
    profileMenu.classList.toggle('active');
  }

  function saveProfileData() {
    const profileData = {
      username: 'İsmayıl',
      email: 'ismayil@example.com',
      age: 22,
    };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
  }

  function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userProfile');
    window.location.href = 'login.html';
  }

  document.getElementById('dashboard-link').addEventListener('click', function(event) {
    saveProfileData();
  });

  document.getElementById('logout-link').addEventListener('click', function(event) {
    logout();
  });
  
