// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado)
{
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}

console.groupEnd();

//codigo de la circunferencia
console.group("Circulos");

function diametroCirculo(radio)
{
    return radio * 2;
}

function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radio)
{
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//funciones para HTML

//cuadrado HTML
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo HTML
function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("InputTriangulo-lado1")
    const valueT1 = parseFloat(input1.value);

    const input2 = document.getElementById("InputTriangulo-lado2")
    const valueT2 = parseFloat(input2.value);

    const inputBase = document.getElementById("InputTriangulo-base")
    const valueBase = parseFloat(inputBase.value);

    const perimetro = perimetroTriangulo(valueT1, valueT2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo()
{
    const inputBase = document.getElementById("InputTriangulo-base");
    const valueBase = parseFloat(inputBase.value);

    const inputAltura = document.getElementById("InputTriangulo-altura");
    const valueAltura = parseFloat(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

//Circulo HTML
function calcularDiametroCirculo()
{
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = parseFloat(inputRadio.value);

    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
}

function calcularPerimetroCirculo()
{
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = parseFloat(inputRadio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const inputRadio = document.getElementById("InputCirculo");
    const valueRadio = parseFloat(inputRadio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//codigo del triangulo isósceles
function alturaTrianguloIsosceles(lado1,lado2,ladoBase)
{
    if(lado1 == lado2 && lado1 != ladoBase)
    {
        const alturaTriangulo = Math.sqrt(((lado1*lado1) - (ladoBase*ladoBase)) / 4);
        alert("Es un triangulo isósceles con altura de: " + alturaTriangulo);
    }
    else
    {
        alert("No es un triangulo isósceles, intenta de nuevo");
    }
}

function calcularAlturaTriangulo()
{
    const input1 = document.getElementById("InputTriangulo-1");
    const value1 = parseFloat(input1.value);

    const input2 = document.getElementById("InputTriangulo-2");
    const value2 = parseFloat(input2.value);
    
    const input3 = document.getElementById("InputTriangulo-3");
    const value3 = parseFloat(input3.value);

    alturaTrianguloIsosceles(value1,value2,value3);
}