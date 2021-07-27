/* const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100; 

console.log({
    precioOriginal, 
    descuento, 
    porcentajePrecioConDescuento, 
    precioConDescuento
}); */

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = ['cupon 1', 'cupon 2', 'cupon 3'];

function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) 
    {
        case 'cupon 1':
            descuento = 15;
            break;

        case 'cupon 2':
            descuento = 20;
            break;

        case 'cupon 3':
            descuento = 50;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}