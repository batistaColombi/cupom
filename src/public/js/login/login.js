document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            // Recuperar os usuários do localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Verificar se o usuário existe
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                alert('Login bem-sucedido!');
                // Redirecionar para o dashboard ou página principal
                window.location.href = 'dashboard.html';
            } else {
                alert('Usuário ou senha inválidos.');
            }
        });
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

    // Chama a verificação assim que o script é carregado
    checkIfLoggedIn();

// Manipulador do evento de envio do formulário
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (validateLogin(username, password)) {
    // Salva o estado de login no localStorage
    localStorage.setItem('currentUser', username);
    window.location.href = 'dashboard.html';
  } else {
    alert('Usuário ou senha inválidos.');
  }
});

function CadastrarUsuario() {
    window.open(href ="cadastrarUsuario.html");
}