document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loadingScreen = document.getElementById('loadingScreen'); // Referência à tela de carregamento

  function validateLogin(username, password) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      return storedUsers.some(user => user.username === username && user.password === password);
  }

  function showLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.style.display = 'flex'; // Mostrar a tela de carregamento
    }
}

function hideLoadingScreen() {
  if (loadingScreen) {
      loadingScreen.style.display = 'none'; // Ocultar a tela de carregamento
  }
}

  function checkIfLoggedIn() {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
          window.location.href = 'dashboard.html';
      }
  }

  if (loginForm) {
      hideLoadingScreen();
      loginForm.addEventListener('submit', (event) => {
          event.preventDefault();

          const username = usernameInput.value.trim();
          const password = passwordInput.value.trim();

          if (validateLogin(username, password)) {
              // Exibir tela de carregamento
              showLoadingScreen();

              // Salvar o usuário logado
              localStorage.setItem('currentUser', JSON.stringify({ username }));

              // Simular atraso para redirecionar
              setTimeout(() => {
                  window.location.href = 'dashboard.html';
              }, 2000); // Exibir por 2 segundos antes de redirecionar
          } else {
              alert('Usuário ou senha inválidos.');
          }
      });
  }

  // Função para exibir a tela de carregamento
  function showLoadingScreen() {
      if (loadingScreen) {
          loadingScreen.style.display = 'flex'; // Mostrar a tela de carregamento
      }
  }

  // Verificar login ao carregar a página
  checkIfLoggedIn();
});