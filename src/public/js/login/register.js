document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const accessLevelSelect = document.getElementById('access-level');
    const cancelButton = document.getElementById('cancelButton');

    function registerUser(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const accessLevel = accessLevelSelect.value;

        if (!username || !password || !confirmPassword || !accessLevel) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.username === username)) {
            alert('Este nome de usuário já está em uso!');
            return;
        }

        users.push({ username, password, accessLevel });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'editarUsuario.html';
    }

    function cancelRegistration() {
        window.location.href = 'editarUsuario.html';
    }

    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', cancelRegistration);
    }
});