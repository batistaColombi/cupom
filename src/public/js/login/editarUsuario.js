document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        userList.innerHTML = '';

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <input 
                        type="text" 
                        value="${user.username}" 
                        onchange="updateUsername(${index}, this.value)"
                    />
                </td>
                <td>
                    <div class="password-container">
                        <input 
                            type="password" 
                            value="${user.password}" 
                            id="current-password-${index}" 
                            class="password-field"
                            disabled 
                        />
                        <button 
                            type="button" 
                            class="toggle-password-btn"
                            onclick="togglePasswordVisibility(${index})"
                        >
                            👁️
                        </button>
                    </div>
                </td>
                <td>
                    <input 
                        type="password" 
                        placeholder="Nova Senha" 
                        id="new-password-${index}" 
                        class="password-field"
                    />
                    <button class="update-password-btn" onclick="updatePassword(${index})">Alterar Senha</button>
                </td>
                <td>
                    <select class="access-level-dropdown" onchange="updateAccessLevel(${index}, this.value)">
                        <option value="1" ${user.accessLevel === '1' ? 'selected' : ''}>Admin</option>
                        <option value="2" ${user.accessLevel === '2' ? 'selected' : ''}>Usuer</option>
                    </select>
                </td>
                <td>
                    <button class="delete-user-btn" onclick="deleteUser(${index})">Excluir</button>
                </td>
            `;
            userList.appendChild(row);
        });
    }

    window.updateUsername = (index, newUsername) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some((user, i) => user.username === newUsername && i !== index)) {
            alert('Este nome de usuário já está em uso!');
            loadUsers();
        } else {
            users[index].username = newUsername;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Nome de usuário atualizado com sucesso!');
        }
    };

    window.updatePassword = (index) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newPassword = document.getElementById(`new-password-${index}`).value;

        if (newPassword) {
            users[index].password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            alert('Senha alterada com sucesso!');
        } else {
            alert('Por favor, insira uma nova senha.');
        }
    };

    window.updateAccessLevel = (index, newAccessLevel) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users[index].accessLevel = newAccessLevel;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Nível de acesso atualizado com sucesso!');
    };

    window.deleteUser = (index) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (confirm('Tem certeza de que deseja excluir este usuário?')) {
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            loadUsers();
        }
    };

    window.togglePasswordVisibility = (index) => {
        const passwordField = document.getElementById(`current-password-${index}`);
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    };

    loadUsers();
});


function goBack() {
    console.log('Registro cancelado. Redirecionando para a página de login.');
    localStorage.removeItem('currentUser');
    window.location.href = 'dashboard.html';
}