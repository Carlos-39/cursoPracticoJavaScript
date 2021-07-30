function calcularMediaAritmetica(lista)
{ 
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana(lista)
{
    const listaOrdenada = lista.sort(
        function(primerElemento, segundoElemento)
        {
            return primerElemento - segundoElemento
        });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numero)
    {
        if(numero % 2 === 0)
        {
            return true;
        }
        else{
            return false;
        }
    }

    if(esPar(lista.length))
    {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    
        return promedioElemento1y2;
    }   
    else
    {
        return listaOrdenada[mitadLista];
    }
}