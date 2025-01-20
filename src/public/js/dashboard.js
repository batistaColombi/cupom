document.addEventListener('DOMContentLoaded', () => {
    // Configuração do gráfico de Downloads
    const downloadsCtx = document.getElementById('downloadsChart').getContext('2d');
    new Chart(downloadsCtx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [{
                label: 'Downloads',
                data: [120, 190, 300, 500],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração do gráfico de Retenção
    const retentionCtx = document.getElementById('retentionChart').getContext('2d');
    new Chart(retentionCtx, {
        type: 'line',
        data: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
            datasets: [{
                label: 'Retenção (%)',
                data: [80, 75, 70, 65],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração do gráfico de Uso de Cupons
    const couponCtx = document.getElementById('couponChart').getContext('2d');
    new Chart(couponCtx, {
        type: 'pie',
        data: {
            labels: ['Usados', 'Não Usados'],
            datasets: [{
                label: 'Cupons',
                data: [70, 30],
                backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});

// Função de logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}