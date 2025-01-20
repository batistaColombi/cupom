// Função para inicializar o formulário de edição
function initializeEditForm() {
    const editIndex = localStorage.getItem("editIndex");
    console.log("editIndex:", editIndex);  // Verifique se o índice foi recuperado corretamente

    if (editIndex !== null) {
        const coupons = JSON.parse(localStorage.getItem("coupons")) || [];
        const coupon = coupons[editIndex];
        console.log("Cupom encontrado:", coupon);  // Verifique se o cupom foi encontrado corretamente

        if (coupon) {
            document.getElementById("code").value = coupon.code || '';
            document.getElementById("name").value = coupon.name || '';
            document.getElementById("discount").value = coupon.discount || '';
            document.getElementById("min-value").value = coupon.minValue || '';
            document.getElementById("max-discount").value = coupon.maxDiscount || '';
            document.getElementById("limit").value = coupon.limit || '';
            document.getElementById("quantity").value = coupon.quantity || '';
            document.getElementById("active").checked = coupon.active || false;

            // Converter a data para o formato 'yyyy-mm-dd' para o campo de data
            if (coupon.expirationDate) {
                const formattedDate = new Date(coupon.expirationDate).toISOString().split('T')[0];
                document.getElementById("expiration-date").value = formattedDate;
            }
        } else {
            alert("Cupom não encontrado!");
        }
    } else {
        alert("Índice de edição não encontrado!");
    }
}

// Função para salvar os dados editados
function saveEdit() {
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
        const coupons = JSON.parse(localStorage.getItem("coupons")) || [];
        const coupon = coupons[editIndex];

        coupon.code = document.getElementById("code").value;
        coupon.name = document.getElementById("name").value;
        coupon.discount = document.getElementById("discount").value;
        coupon.minValue = document.getElementById("min-value").value;
        coupon.maxDiscount = document.getElementById("max-discount").value;
        coupon.limit = document.getElementById("limit").value;
        coupon.expirationDate = document.getElementById("expiration-date").value;
        coupon.quantity = document.getElementById("quantity").value;
        coupon.active = document.getElementById("active").checked;

        localStorage.setItem("coupons", JSON.stringify(coupons));
        alert("Cupom editado com sucesso!");
        window.location.href = "cupom.html"; // Redireciona para a lista de cupons
    }
}

// Função de cancelamento (voltar para a lista de cupons sem salvar)
function cancelEdit() {
    window.location.href = "cupom.html"; // Redireciona para a lista de cupons
}

// Adiciona evento ao formulário para salvar
document.getElementById("coupon-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveEdit();
});

// Carregar os dados ao carregar a página
window.onload = initializeEditForm;
