document.addEventListener('DOMContentLoaded', () => {
    const notificationList = document.getElementById('notification-list');

    // Lista de notificações simulada
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];

    // Função para renderizar notificações na tabela
    function renderNotifications() {
        notificationList.innerHTML = '';

        notifications.forEach((notification, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${notification.title}</td>
                <td>${notification.message}</td>
                <td>${notification.date}</td>
                <td>
                    <select class="status-select" data-index="${index}">
                        <option value="ativa" ${notification.status === 'ativa' ? 'selected' : ''}>Ativa</option>
                        <option value="inativa" ${notification.status === 'inativa' ? 'selected' : ''}>Inativa</option>
                    </select>
                </td>
                <td>
                    <button class="edit-button" data-index="${index}">Editar</button>
                    <button class="delete-button" data-index="${index}">Excluir</button>
                </td>
            `;

            notificationList.appendChild(row);
        });

        attachEventListeners();
    }

    // Função para adicionar os eventos de clique nos botões e alteração do select
    function attachEventListeners() {
        document.querySelectorAll('.status-select').forEach(select => {
            select.addEventListener('change', handleStatusChange);
        });

        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', handleEdit);
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', handleDelete);
        });
    }

    // Função para alterar o status
    function handleStatusChange(event) {
        const index = event.target.dataset.index;
        const newStatus = event.target.value;

        notifications[index].status = newStatus;
        localStorage.setItem('notifications', JSON.stringify(notifications));
        renderNotifications(); // Re-renderizar a tabela para refletir as alterações
    }

    // Função para editar uma notificação
    function handleEdit(event) {
        const index = event.target.dataset.index;
        window.location.href = `editarNotificacao.html?index=${index}`;
    }

    // Função para excluir uma notificação
    function handleDelete(event) {
        const index = event.target.dataset.index;
        const confirmation = confirm('Tem certeza de que deseja excluir esta notificação?');
        if (confirmation) {
            notifications.splice(index, 1);
            localStorage.setItem('notifications', JSON.stringify(notifications));
            renderNotifications();
        }
    }

    // Renderizar as notificações ao carregar a página
    renderNotifications();
});

//Modifica a cor do Ativo/Desativo
function updateSelectStyles() {
    document.querySelectorAll(".status-select").forEach((select) => {
        select.style.backgroundColor =
            select.value === "ativa" ? "#27ae60" : "#e74c3c"; // Verde ou Vermelho
        select.style.color = "#fff"; // Texto sempre branco
    });
}

// Adiciona evento de mudança ao carregar
document.addEventListener("DOMContentLoaded", () => {
    updateSelectStyles();

    document.querySelectorAll(".status-select").forEach((select) =>
        select.addEventListener("change", updateSelectStyles)
    );
});