function saveNotificacao() {
    const title = document.getElementById('notification-title').value;
    const message = document.getElementById('notification-message').value;
    const date = document.getElementById('notification-date').value;
    const status = document.getElementById('notification-status').value;

    if (!title || !message || !date || !status) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    notifications.push({ title, message, date, status });

    localStorage.setItem('notifications', JSON.stringify(notifications));

    alert('Notificação cadastrada com sucesso!');
    window.location.href = 'notificacao.html';
}