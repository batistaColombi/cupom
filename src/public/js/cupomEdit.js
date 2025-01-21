document.addEventListener("DOMContentLoaded", () => {
    initializeEditForm();

    const form = document.getElementById("coupon-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            saveCoupon();
        });
    } else {
        console.error("Formulário 'coupon-form' não encontrado!");
    }
});

// Inicializar o formulário de edição
function initializeEditForm() {
    const editIndex = localStorage.getItem("editIndex");
    console.log("editIndex:", editIndex);

    if (editIndex === null) {
        alert("Índice de edição não encontrado!");
        return;
    }

    const coupons = JSON.parse(localStorage.getItem("coupons")) || [];
    if (!Array.isArray(coupons)) {
        alert("Dados de cupons inválidos!");
        return;
    }

    const coupon = coupons[editIndex];
    if (!coupon) {
        alert("Cupom não encontrado!");
        return;
    }

    console.log("Dados do cupom recuperados:", coupon);

    const fields = [
        { id: "code", value: coupon.code || "" },
        { id: "name", value: coupon.name || "" },
        { id: "discount", value: coupon.discount || "" },
        { id: "min-value", value: coupon.minValue || "" },
        { id: "max-discount", value: coupon.maxDiscount || "" },
        { id: "limit", value: coupon.limit || "" },
        { id: "expiration-date", value: coupon.expirationDate?.split("T")[0] || "" },
        { id: "expiration-time", value: coupon.expirationDate?.split("T")[1]?.slice(0, 5) || "" },
        { id: "active", value: coupon.active ? "true" : "false" },
        { id: "discount-type", value: coupon.discountType || "%" },
        { id: "quantity", value: coupon.quantity || "" },
    ];

    fields.forEach(({ id, value }) => {
        const element = document.getElementById(id);
        if (element) {
            element.value = value;
        } else {
            console.warn(`Elemento com ID '${id}' não encontrado!`);
        }
    });
}

// Salvar as alterações do cupom
function saveCoupon() {
    const editIndex = localStorage.getItem("editIndex");

    if (editIndex === null) {
        alert("Índice de edição não encontrado!");
        return;
    }

    const coupons = JSON.parse(localStorage.getItem("coupons")) || [];
    if (!Array.isArray(coupons)) {
        alert("Dados de cupons inválidos!");
        return;
    }

    const coupon = coupons[editIndex];

    coupon.code = document.getElementById("code").value.trim();
    coupon.name = document.getElementById("name").value.trim();
    coupon.discount = parseFloat(document.getElementById("discount").value.trim()) || 0;
    coupon.discountType = document.getElementById("discount-type").value;
    coupon.minValue = parseFloat(document.getElementById("min-value").value.trim()) || 0;
    coupon.maxDiscount = parseFloat(document.getElementById("max-discount").value.trim()) || null;
    coupon.limit = parseInt(document.getElementById("limit").value.trim(), 10) || 0;
    coupon.expirationDate = `${document.getElementById("expiration-date").value}T${document.getElementById("expiration-time").value}:00`;
    coupon.quantity = parseInt(document.getElementById("quantity").value.trim(), 10) || 0;
    coupon.active = document.getElementById("active").value === "true";

    if (
        !coupon.code ||
        !coupon.name ||
        !coupon.discount ||
        !coupon.minValue ||
        !coupon.limit ||
        !coupon.expirationDate ||
        !coupon.quantity
    ) {
        console.error("Preencha todos os campos obrigatórios. Dados do cupom:", coupon);
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    localStorage.setItem("coupons", JSON.stringify(coupons));
    alert("Cupom editado com sucesso!");
    window.location.href = "cupom.html";
}