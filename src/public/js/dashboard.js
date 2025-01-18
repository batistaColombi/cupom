document.addEventListener("DOMContentLoaded", () => {
    // Mock data
    const downloadsData = [1000, 1200, 1400, 1500, 1700];
    const retentionData = [800, 900, 1100, 1300, 1400];
    const couponUsageData = [50, 70, 90, 110, 130];
    const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

    // Downloads chart
    const downloadsCtx = document.getElementById("downloadsChart").getContext("2d");
    new Chart(downloadsCtx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Downloads",
                data: downloadsData,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" }
            }
        }
    });

    // Retention chart
    const retentionCtx = document.getElementById("retentionChart").getContext("2d");
    new Chart(retentionCtx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Retention",
                data: retentionData,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" }
            }
        }
    });

    // Coupon usage chart
    const couponCtx = document.getElementById("couponChart").getContext("2d");
    new Chart(couponCtx, {
        type: "pie",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            datasets: [{
                label: "Coupon Usage",
                data: couponUsageData,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)"
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 205, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)"
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" }
            }
        }
    });
});

// Função de logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}