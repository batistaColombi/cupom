document.addEventListener("DOMContentLoaded", () => {
    const couponList = document.getElementById("coupon-list");

    // Recuperar cupons do localStorage
    function getCoupons() {
        return JSON.parse(localStorage.getItem("coupons")) || [];
    }

    // Formatar data para DD/MM/AAAA
    function formatDate(dateString) {
        const date = new Date(dateString);
        return isNaN(date) ? "-" : date.toLocaleDateString("pt-BR");
    }

    // Formatar hora para HH:MM
    function formatTime(dateString) {
        const date = new Date(dateString);
        return isNaN(date) ? "-" : date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    // Renderizar cupons na tabela
    function renderCoupons() {
        const coupons = getCoupons();
        couponList.innerHTML = "";

        if (coupons.length === 0) {
            couponList.innerHTML = `
                <tr>
                    <td colspan="11" style="text-align: center;">Nenhum cupom encontrado.</td>
                </tr>
            `;
            return;
        }

        coupons.forEach((coupon, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${coupon.code || "-"}</td>
                <td>${coupon.name || "-"}</td>
                <td>${coupon.discount || "-"} ${coupon.discountType}</td>
                <td>${coupon.minValue || "-"}</td>
                <td>${coupon.maxDiscount || "-"}</td>
                <td>${coupon.limit || "-"}</td>
                <td>${formatDate(coupon.expirationDate)}</td>
                <td>${formatTime(coupon.expirationDate)}</td>
                <td>${coupon.quantity || "-"}</td>
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

    // Adicionar eventos aos botões e selects
    function attachEventListeners() {
        document.querySelectorAll(".status-select").forEach((select) => {
            select.addEventListener("change", updateStatus);
        });

        document.querySelectorAll(".edit-button").forEach((button) => {
            button.addEventListener("click", handleEdit);
        });

        document.querySelectorAll(".delete-button").forEach((button) => {
            button.addEventListener("click", handleDelete);
        });
    }

    // Atualizar status do cupom
    function updateStatus(event) {
        const index = event.target.dataset.index;
        const coupons = getCoupons();
        coupons[index].active = event.target.value === "true";
        localStorage.setItem("coupons", JSON.stringify(coupons));
        renderCoupons();
    }

    // Editar cupom
    function handleEdit(event) {
        const index = event.target.dataset.index;
        localStorage.setItem("editIndex", index);
        window.location.href = "editarCupom.html";
    }

    // Excluir cupom
    function handleDelete(event) {
        const index = event.target.dataset.index;
        const coupons = getCoupons();

        if (confirm("Tem certeza de que deseja excluir este cupom?")) {
            coupons.splice(index, 1);
            localStorage.setItem("coupons", JSON.stringify(coupons));
            renderCoupons();
        }
    }

    // Inicializar a tabela de cupons
    renderCoupons();
});
