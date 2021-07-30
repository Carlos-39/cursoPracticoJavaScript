function calcularModa(lista)
{
    const listaCount = {};

    lista.map(function(elemento){
        if(listaCount[elemento])
        {
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });

//object.entries se le puede enviar el objeto que queremos convertir en array
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor)
        {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
}