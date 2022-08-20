function ConverterDolar() {
  var valorElementoDolar = document.getElementById("valorReal");
  var valorReal = valorElementoDolar.value;
  var valorEmDolar = parseFloat(valorReal);
  var valorEmReal = (valorEmDolar * 0.1951334).toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Valor do Dólar é: US$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valorReal");
  var valorReal = valorElementoEuro.value;
  var valorEmEuro = parseFloat(valorReal);
  var valorEmReal = (valorEmEuro * 0.1911753).toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Valor do Euro é: Є " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibra() {
  var valorElementoLibra = document.getElementById("valorReal");
  var valorReal = valorElementoLibra.value;
  var valorEmLibra = parseFloat(valorReal);
  var valorEmReal = (valorEmLibra * 0.1613085).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O Valor da Libra é: £ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
