document.addEventListener('DOMContentLoaded', function() {
  const btnSignin = document.getElementById('signin-button');
  const btSignup = document.getElementById('signup-button');

  btnSignin.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  btSignup.addEventListener('click', function() {
    window.location.href = 'register.html'
  });
});
