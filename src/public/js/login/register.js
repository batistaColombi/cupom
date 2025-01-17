document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const isAdmin = document.getElementById('isAdmin').checked;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    if (isAdmin) {
        const adminPassword = document.getElementById('adminPassword').value;
        if (!adminPassword) {
            alert('Para criar uma conta de administrador, insira a senha do administrador.');
            return;
        }
    }

    document.getElementById('backButton').addEventListener('click', function() {
            window.location.href = 'index.html';
    });

    // Simulação de cadastro
    alert(`Usuário ${username} cadastrado com sucesso!`);
    // Fechar a janela ou redirecionar para outra página
    window.back;
});

document.getElementById('loginLink').addEventListener('click', function () {
    // Fechar a janela e abrir a tela de login
    window.history.back();
});