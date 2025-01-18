document.addEventListener('DOMContentLoaded', loadUsers);

function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('user-list');
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
                <input 
                    type="password" 
                    placeholder="Nova Senha" 
                    id="new-password-${index}" 
                />
                <button onclick="updatePassword(${index})">Alterar Senha</button>
            </td>
            <td>
                <select onchange="updateAccessLevel(${index}, this.value)">
                    <option value="1" ${user.accessLevel === 1 ? 'selected' : ''}>Administrador</option>
                    <option value="2" ${user.accessLevel === 2 ? 'selected' : ''}>Usuário</option>
                </select>
            </td>
            
            <td>
                <button onclick="deleteUser(${index})">Excluir</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

function updateUsername(index, newUsername) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some((user, i) => user.username === newUsername && i !== index)) {
        alert('Este nome de usuário já está em uso!');
        loadUsers(); // Recarregar para desfazer alteração inválida
    } else {
        users[index].username = newUsername;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function updateAccessLevel(index, newAccessLevel) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users[index].accessLevel = parseInt(newAccessLevel, 10);
    localStorage.setItem('users', JSON.stringify(users));
}

function updatePassword(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newPassword = document.getElementById(`new-password-${index}`).value;

    if (newPassword) {
        users[index].password = newPassword; // Atualizando a senha
        localStorage.setItem('users', JSON.stringify(users));
        alert('Senha alterada com sucesso!');
    } else {
        alert('Por favor, insira uma nova senha.');
    }
}

function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (confirm('Tem certeza de que deseja excluir este usuário?')) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }
}

function saveChanges() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
// Se houver usuários, significa que já há dados no localStorage para salvar
if (users.length > 0) {
        localStorage.setItem('users', JSON.stringify(users)); // Salva os dados de volta no localStorage
        alert('Alterações salvas com sucesso!');
        goBack()
    }
}


function goBack() {
    console.log('Registro cancelado. Redirecionando para a página de login.');
    localStorage.removeItem('currentUser');
    window.location.href = 'dashboard.html';
}