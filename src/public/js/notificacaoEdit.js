document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notification-form');
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index'); // Obtém o índice da notificação a ser editada

    if (index === null || !notifications[index]) {
        alert('Notificação não encontrada!');
        window.location.href = 'notificacao.html';
        return;
    }

    // Preencher o formulário com os dados existentes
    const notification = notifications[index];

    // Obtenha os elementos do formulário
    const titleInput = document.getElementById('notification-title');
    const messageInput = document.getElementById('notification-message');
    const dateInput = document.getElementById('notification-date');
    const timeInput = document.getElementById('notification-time');
    const statusSelect = document.getElementById('notification-status');

    // Preencher os campos com os dados existentes
    titleInput.value = notification.title || '';
    messageInput.value = notification.message || '';
    dateInput.value = notification.date || '';
    timeInput.value = notification.time || '';
    statusSelect.value = notification.status || 'ativa';

    // Submeter alterações ao salvar
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Atualizar os dados da notificação
        notifications[index] = {
            title: titleInput.value,
            message: messageInput.value,
            date: dateInput.value,
            time: timeInput.value,
            status: statusSelect.value,
        };

        // Salvar as alterações no localStorage
        localStorage.setItem('notifications', JSON.stringify(notifications));

        alert('Notificação editada com sucesso!');
        window.location.href = 'notificacao.html';
    });
});

function voltar() {
    window.location.href = 'notificacao.html';
}
