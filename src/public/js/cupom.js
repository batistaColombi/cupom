document.addEventListener("DOMContentLoaded", () => {
    const couponList = document.getElementById("coupon-list");

    // Recuperar cupons do localStorage
    const getCoupons = () => JSON.parse(localStorage.getItem("coupons")) || [];

    // Salvar cupons no localStorage
    const saveCoupons = (coupons) => {
        localStorage.setItem("coupons", JSON.stringify(coupons));
    };

    // Formatar valores monetários
    const formatCurrency = (value) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value || 0);
    };

    // Formatar data para dd/mm/aaaa
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return isNaN(date) ? "-" : date.toLocaleDateString("pt-BR");
    };

    // Função para renderizar cupons na tabela
    function renderCoupons() {
        const coupons = getCoupons();
        couponList.innerHTML = "";

        coupons.forEach((coupon, index) => {
            const row = document.createElement("tr");
            const discountType = coupon.discountType === "R$" ? "R$" : "%";
            row.innerHTML = `
                <td>${coupon.code || "-"}</td>
                <td>${coupon.name || "-"}</td>
                <td>
                    ${formatCurrency(coupon.discount)} (${discountType})
                </td>
                <td>${formatCurrency(coupon.minValue)}</td>
                <td>${coupon.maxDiscount ? formatCurrency(coupon.maxDiscount) : ""}</td>
                <td>${coupon.limit || ""}</td>
                <td>${formatDate(coupon.expirationDate)}</td>
                <td>${coupon.quantity || ""}</td>
                <td>
                    <select class="status-select" data-index="${index}">
                        <option value="true" ${coupon.active ? "selected" : ""}>Ativo</option>
                        <option value="false" ${!coupon.active ? "selected" : ""}>Inativo</option>
                    </select>
                </td>
                <td>
                    <button class="edit-button" data-index="${index}">Editar</button>
                    <button class="delete-button" data-index="${index}">Excluir</button>
                </td>
            `;
            couponList.appendChild(row);
        });

        attachEventListeners();
    }

    // Função para adicionar eventos aos botões e selects
    function attachEventListeners() {
        document.querySelectorAll(".status-select").forEach((select) =>
            select.addEventListener("change", updateCouponStatus)
        );

        document.querySelectorAll(".edit-button").forEach((button) =>
            button.addEventListener("click", handleEdit)
        );

        document.querySelectorAll(".delete-button").forEach((button) =>
            button.addEventListener("click", handleDelete)
        );
    }

    function updateCouponStatus(event) {
        const index = event.target.dataset.index;
        const coupons = getCoupons();
        coupons[index].active = event.target.value === "true"; // Atualiza o status com base no valor selecionado
        saveCoupons(coupons);
        renderCoupons(); // Atualiza a tabela
    }

    // Função para editar cupom
    function handleEdit(event) {
        const index = event.target.dataset.index;
        localStorage.setItem("editIndex", index);
        window.location.href = "editarCupom.html";
    }

    // Função para deletar cupom
    function handleDelete(event) {
        const index = event.target.dataset.index;
        const coupons = getCoupons();

        if (confirm("Tem certeza de que deseja excluir este cupom?")) {
            coupons.splice(index, 1);
            saveCoupons(coupons);
            renderCoupons();
        }
    }

    // Renderizar cupons ao carregar a página
    renderCoupons();
});


//Modifica a cor do Ativo/Desativo
function updateSelectStyles() {
    document.querySelectorAll(".status-select").forEach((select) => {
        select.style.backgroundColor =
            select.value === "true" ? "#27ae60" : "#e74c3c"; // Verde ou Vermelho
    });
}

// Adiciona evento de mudança ao carregar
document.addEventListener("DOMContentLoaded", () => {
    updateSelectStyles();

    document.querySelectorAll(".status-select").forEach((select) =>
        select.addEventListener("change", updateSelectStyles)
    );
});