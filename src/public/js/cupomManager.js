function saveCoupon() {
    // Captura os valores dos campos do formulário
    const code = document.getElementById('code').value.trim();
    const name = document.getElementById('name').value.trim();
    const discount = document.getElementById('discount').value.trim();
    const discountType = document.getElementById('discount-type').value;
    const minValue = document.getElementById('min-value').value.trim();
    const maxDiscount = document.getElementById('max-discount').value.trim();
    const limit = document.getElementById('limit').value.trim();
    const expirationDate = document.getElementById('expiration-date').value.trim();
    const expirationTime = document.getElementById('expiration-time').value.trim();
    const quantity = document.getElementById('quantity').value.trim();
    const active = document.getElementById('active').value;

    // Validação para garantir que todos os campos obrigatórios estão preenchidos
    if (
        !code ||
        !name ||
        !discount ||
        !minValue ||
        !limit ||
        !expirationDate ||
        !expirationTime ||
        !quantity ||
        !active
    ) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Recuperar os cupons já existentes no localStorage
    const coupons = JSON.parse(localStorage.getItem('coupons')) || [];

    // Adicionar o novo cupom à lista
    coupons.push({
        code,
        name,
        discount: parseFloat(discount),
        discountType,
        minValue: parseFloat(minValue),
        maxDiscount: maxDiscount ? parseFloat(maxDiscount) : null,
        limit: parseInt(limit, 10),
        expirationDate: `${expirationDate}T${expirationTime}:00`,
        quantity: parseInt(quantity, 10),
        active: active === 'true',
    });

    // Salvar os cupons atualizados no localStorage
    localStorage.setItem('coupons', JSON.stringify(coupons));

    alert('Cupom cadastrado com sucesso!');
    window.location.href = 'cupom.html'; // Redireciona para a página de cupons
}
