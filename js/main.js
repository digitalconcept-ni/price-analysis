(function () {
    const calculate = () => {
        console.log('calculando')

        // valores de inputs
        let product = document.getElementById('product');
        let cant = document.getElementById('cant');
        let cost = document.getElementById('cost');
        let discount = document.getElementById('discount');
        let extraDiscount = document.getElementById('extra-discount');
        let udm = document.getElementById('select-udm');


        // calculo del descuento

        var totalDesc = (parseFloat(discount.value) + parseFloat(extraDiscount.value)) / 100;
        var subTotal = cant.value * cost.value;
        var desc = subTotal * totalDesc;
        var subConDescuento = subTotal - desc;
        var iva = subConDescuento * 0.15
        var total = subConDescuento + iva;


        document.getElementById('sp-product').innerText = product.value;
        document.getElementById('sp-cant').innerText = `${cant.value} ${udm.value}`;
        document.getElementById('sp-cost').innerText = cost.value;
        document.getElementById('sp-desc').innerText = desc.toFixed(2);
        document.getElementById('sp-sub').innerText = subTotal.toFixed(2);
        document.getElementById('sp-iva').innerText = iva.toFixed(2);
        document.getElementById('sp-total').innerText = total.toFixed(2);
        document.getElementById('sp-percentage').innerText = `${totalDesc * 100}%`;

    }

    document.getElementById('btn-calculate').addEventListener('click', function () {
        calculate();

        let infoCard = document.getElementById('info-card');

        infoCard.classList.remove('d-none');
        infoCard.classList.add('d-block');
    })

})();