// Função para salvar o novo cupom
function saveCoupon() {
    const code = document.getElementById("code").value.trim();
    const name = document.getElementById("name").value.trim();
    const discount = parseFloat(document.getElementById("discount").value.trim());
    const discountType = document.getElementById("discount-type").value; // Tipo de desconto (% ou R$)
    const minValue = parseFloat(document.getElementById("min-value").value.trim());
    const maxDiscount = parseFloat(document.getElementById("max-discount").value.trim());
    const limit = parseInt(document.getElementById("limit").value.trim(), 10);
    const expirationDate = document.getElementById("expiration-date").value.trim();
    const quantity = parseInt(document.getElementById("quantity").value.trim(), 10);
    const active = document.getElementById("active") ? document.getElementById("active").checked : false; // Verificação segura

    // Verificar se todos os campos obrigatórios estão preenchidos
    if (!code || !name || isNaN(discount) || isNaN(minValue) || isNaN(maxDiscount) || isNaN(limit) || !expirationDate || isNaN(quantity)) {
        alert("Por favor, preencha todos os campos obrigatórios com valores válidos.");
        return;
    }

    // Criar o objeto do cupom
    const coupon = {
        code,
        name,
        discount,
        discountType,
        minValue,
        maxDiscount,
        limit,
        expirationDate,
        quantity,
        active
    };

    // Salvar o cupom no localStorage
    const coupons = JSON.parse(localStorage.getItem("coupons")) || [];
    coupons.push(coupon);
    localStorage.setItem("coupons", JSON.stringify(coupons));

    alert("Cupom cadastrado com sucesso!");
    window.location.href = "cupom.html"; // Redireciona para a lista de cupons
}

// Garantir que o formulário de cadastro seja carregado corretamente
document.addEventListener("DOMContentLoaded", function () {
    const couponForm = document.getElementById("coupon-form");
    if (couponForm) {
        couponForm.addEventListener("submit", function (event) {
            event.preventDefault();
            saveCoupon();
        });
    }
});

// Função para cancelar o cadastro
function cancel() {
    window.location.href = "cupom.html";
}
