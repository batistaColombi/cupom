document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('edit-notification-form');
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');

    if (index === null || !notifications[index]) {
        alert('Notificação não encontrada!');
        window.location.href = 'notificacao.html';
        return;
    }

    // Preencher o formulário com os dados da notificação existente
    const notification = notifications[index];
    form.title.value = notification.title;
    form.message.value = notification.message;
    form.date.value = notification.date;
    form.status.value = notification.status;

    form.addEventListener('submit', event => {
        event.preventDefault();

        // Atualizar a notificação
        notifications[index] = {
            title: form.title.value,
            message: form.message.value,
            date: form.date.value,
            status: form.status.value
        };

        localStorage.setItem('notifications', JSON.stringify(notifications));

        alert('Notificação editada com sucesso!');
        window.location.href = 'notificacao.html';
    });
});