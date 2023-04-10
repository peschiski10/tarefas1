//exercício 1:
for(int i = 1;  i <= 10;  eu++) {
  Sistema. fora. println(i);
}

int i = 1;
enquanto(i <= 10) {
    Sistema. fora. println(i);
    eu++;
}

//exercício 2: 
função verificaParImpar(numero) {
  if (numero % 2 === 0) {
    console. log(numero + " é par.");
  } mais {
    console. log(numero + " é ímpar.");
  }
}

//exercício 3:
função calculaMedia(lista) {
  var soma = 0;
  para (var i = 0;  i < lista. comprimento;  eu++) {
    soma += lista[i];
  }
  var media = soma / lista. comprimento;
  mídia de retorno;
}

//exercício 4: 
função encontraMaiorNumero(lista) {
  var maior = lista[0];
  para (var i = 1;  i < lista. comprimento;  eu++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  retorno maior;
}

//exercício 5:
função contaOcorrencias(lista, elemento) {
  var contador = 0;
  para (var i = 0;  i < lista. comprimento;  eu++) {
    if (lista[i] === elemento) {
      contador |++;
    }
  }
  contador de retorno ;
}

//exercício 6:
function removeOcorrencias(lista, elemento) {
  para (var i = lista. comprimento - 1;  i >= 0;  eu--) {
    if (lista[i] === elemento) {
      lista. splice(i, 1);
    }
  }
  lista de retorno ;
}

//exercício 7:
função inverteString(str) {
  var novaStr | = "";
  para (var i = str. comprimento - 1;  i >= 0;  eu--) {
    novaStr += str[i];
  }
  retorno novaStr;
}

//exercício 8:
função verificaPalindromo(palavra) {
   palavra = palavra. toLowerCase(). substituir(/[\W_]/g, "");
  if (palavra === palavraInvertida) {
    return true;
  } mais {
    retornar false;
  }
}

//exercício 9:
função calcularFatorial(numero) {
  if (numero < 0) {
  if (numero === 0) {
    retorno 1;
  }
  var fatorial = 1;
  para (var i = 1;  i <= numero;  eu++) {
  }
  retorno fatorial;
}

//exercício 10:
função gerarFibonacci(n) {
  var fibonacci = [0, 1];
    var proximo = fibonacci[i - 1] + fibonacci[i -  2];
    fibonacci. empurrar (proximo);
  }
  
  fibonacci retorno;
}