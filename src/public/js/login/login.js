document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  if (loginForm) {
      loginForm.addEventListener('submit', async (event) => {
          event.preventDefault();

          // Exibe a tela de carregamento
          const loadingScreen = document.querySelector('.loading-screen');
          if (loadingScreen) {
              loadingScreen.style.display = 'flex';
          }

          const username = usernameInput.value.trim();
          const password = passwordInput.value;

          try {
              // Recuperar os usuários do localStorage
              const users = JSON.parse(localStorage.getItem('users')) || [];

              // Verificar se o usuário existe
              const user = users.find(u => u.username === username && u.password === password);

              if (user) {
                  // Salva o estado de login no localStorage
                  localStorage.setItem('currentUser', username);

                  // Simula tempo de carregamento antes de redirecionar
                  setTimeout(() => {
                      window.location.href = 'dashboard.html';
                  }, 2000); // Tempo de 2 segundos para mostrar a tela de carregamento
              } else {
                  alert('Usuário ou senha inválidos.');
                  // Oculta a tela de carregamento
                  if (loadingScreen) {
                      loadingScreen.style.display = 'none';
                  }
              }
          } catch (error) {
              console.error('Erro ao processar o login:', error);
              alert('Erro ao processar o login.');
              // Oculta a tela de carregamento em caso de erro
              if (loadingScreen) {
                  loadingScreen.style.display = 'none';
              }
          }
      });
  }

  // Verifica se o usuário já está logado ao carregar a página
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
      window.location.href = 'dashboard.html';
  }

  // Garante que a tela de carregamento esteja oculta no carregamento da página
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) {
      loadingScreen.style.display = 'none';
  }
});

// Função para verificar o login
function validateLogin(username, password) {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  return storedUsers.some(user => user.username === username && user.password === password);
}

// Verifica se o usuário já está logado
function checkIfLoggedIn() {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
      // Redireciona para o dashboard se já estiver logado
      window.location.href = 'dashboard.html';
  }
}