document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    // Função para carregar usuários do localStorage
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        userList.innerHTML = ''; // Limpa a lista antes de carregar os dados

        if (users.length === 0) {
            // Caso não existam usuários cadastrados
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="5" style="text-align: center; color: #e65100; font-size: 1rem;">Nenhum usuário encontrado.</td>
            `;
            userList.appendChild(row);
            return;
        }

        // Itera sobre os usuários e cria linhas na tabela
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <input type="text" value="${user.username}" 
                           style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; width: 100%;"
                           onchange="updateUsername(${index}, this.value)" />
                </td>
                <td>
                    <div class="password-container" style="display: flex; align-items: center;">
                        <input type="password" value="${user.password}" 
                               id="current-password-${index}" disabled
                               style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; width: calc(100% - 2rem); margin-right: 0.5rem;" />
                        <button onclick="togglePassword(${index})"
                                style="background-color: #e65100; color: white; border: none; padding: 0.5rem; border-radius: 5px; cursor: pointer;">
                            👁️
                        </button>
                    </div>
                </td>
                <td>
                    <input type="password" id="new-password-${index}" placeholder="Nova Senha"
                           style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; width: calc(100% - 2rem); margin-right: 0.5rem;" />
                    <button onclick="updatePassword(${index})"
                            style="background-color: #e65100; color: white; border: none; padding: 0.5rem; border-radius: 5px; cursor: pointer;">
                        Alterar
                    </button>
                </td>
                <td>
                    <select onchange="updateAccessLevel(${index}, this.value)"
                            style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; width: 100%;">
                        <option value="admin" ${user.accessLevel === 'admin' ? 'selected' : ''}>Administrador</option>
                        <option value="user" ${user.accessLevel === 'user' ? 'selected' : ''}>Usuário</option>
                    </select>
                </td>
                <td>
                    <button onclick="deleteUser(${index})"
                            style="background-color: #e65100; color: white; border: none; padding: 0.5rem; border-radius: 5px; cursor: pointer;">
                        Excluir
                    </button>
                </td>
            `;
            userList.appendChild(row);
        });
    }

    // Funções para manipular os dados dos usuários
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

    window.togglePassword = (index) => {
        const passwordField = document.getElementById(`current-password-${index}`);
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    };

    // Carrega os usuários na inicialização
    loadUsers();
});