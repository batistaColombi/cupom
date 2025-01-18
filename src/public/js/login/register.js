document.addEventListener('DOMContentLoaded', () => {
  // Elementos do formulário
  const registerForm = document.getElementById('registerForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const accessLevelSelect = document.getElementById('access-level');
  const cancelButton = document.getElementById('cancelButton');

  // Função para registrar o usuário
  function registerUser(event) {
      event.preventDefault(); // Impede a atualização da página

      const username = usernameInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const accessLevel = accessLevelSelect.value;

      console.log('Dados capturados:', { username, password, confirmPassword, accessLevel });

      // Validação dos campos
      if (!username || !password || !confirmPassword || !accessLevel) {
          alert('Por favor, preencha todos os campos!');
          console.log('Erro: Campos obrigatórios não preenchidos.');
          return;
      }

      if (password !== confirmPassword) {
          alert('As senhas não coincidem!');
          console.log('Erro: As senhas não coincidem.');
          return;
      }

      // Recuperar usuários existentes no localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      console.log('Usuários existentes:', users);

      // Verificar se o nome de usuário já está em uso
      if (users.some(user => user.username === username)) {
          alert('Este nome de usuário já está em uso!');
          console.log(`Erro: Nome de usuário "${username}" já está em uso.`);
          return;
      }

      // Adicionar o novo usuário
      users.push({ username, password, accessLevel });
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Usuário cadastrado com sucesso:', { username, password, accessLevel });

      alert('Usuário cadastrado com sucesso!');
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html'; // Redireciona para a página de login
  }

  // Função para cancelar o registro
  function cancelRegistration() {
      console.log('Registro cancelado. Redirecionando para a página de login.');
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
  }

  // Adicionar eventos aos elementos
  registerForm.addEventListener('submit', registerUser);
  cancelButton.addEventListener('click', cancelRegistration);
});