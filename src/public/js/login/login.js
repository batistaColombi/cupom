// Função para verificar o login com dados armazenados no localStorage
function authenticateUser(username, password) {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Verifica se os dados do usuário estão no localStorage e são válidos
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        return true;
    }
    return false;
}

// Função para simular a recuperação de senha
function recoverPassword() {
    alert('Uma nova senha foi enviada para seu Email.');
}

// Event listener para o login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se o usuário existe no localStorage e se a senha corresponde
    if (authenticateUser(username, password)) {
        alert('Login realizado com sucesso!');
        // Redirecionar para o dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

// Event listener para recuperação de senha
document.getElementById('forgotPassword').addEventListener('click', function () {
    recoverPassword();
});