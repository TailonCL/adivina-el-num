/* En caso de no acertar durante un intento, se mide que tan cerca estuvo
el jugador y se da un hint */

var checkDif = function(n1, n2) {
  diff = n1 - n2;
  if (diff < 0) {
    diff *= -1;
  }
  document.getElementById('debug0').innerHTML = diff;
  switch (true) {
    case diff <= 3 && diff >= 1:
      document.getElementById('output').innerHTML = 'Caliente caliente!... ' +
      'casi le atinas!';
      break;
    case diff <= 6 && diff >= 4:
      document.getElementById('output').innerHTML = 'Tibio tibio... ' +
      'uff, muy lejos!';
      break;
    case diff <= 10 && diff >= 7:
      document.getElementById('output').innerHTML = 'Frio ... Ni te acercaste.';
      break;
    default:

  }
};

// Activado por el boton del paso 1
var magicNum = function() {
  //Opcion 1 para crear el numero aleatorio
  //num = Math.floor((Math.random() * 10));

  //Opcion 2 para crear el numero aleatorio
  num = getRandomInt(1, 11);
  document.getElementById('debug2').innerHTML = num;
};

var intentos = 3;
document.getElementById('lives').innerHTML = intentos;
document.getElementById('debug3').innerHTML = intentos;


// Input y revisiones del mismo: type y valor
var revisarNum = function() {
  userAnswer = Number(window.prompt('Recuerda: El numero esta entre el 1 y el 10', 'Adivina...'));
  document.getElementById('debug1').innerHTML = userAnswer;
  if (isNaN(userAnswer)) {
    document.getElementById('output').innerHTML = 'Lo que pusiste no es un ' +
    'numero valido!';
  }
  else {
    if (userAnswer == num) {
      document.getElementById('output').innerHTML = 'Felicidades! Lo adivinaste! ' +
      'el numero es: ' + num + '. ' + 'Te ganaste una pizza. Va en camino a tu casa!';
      document.getElementById('final').innerHTML = 'Lo has conseguido!';
    }
    else if (userAnswer < 1 | userAnswer > 10) {
      document.getElementById('output').innerHTML = 'Oops, te pasaste. ' +
      'recuerda que el numero esta entre el 1 y el 10.';
    }
    else {
      checkDif(userAnswer, num);
      intentos -= 1;
      document.getElementById('lives').innerHTML = intentos;
      document.getElementById('debug3').innerHTML = intentos;
    }
  }
};


// Activado por el boton del paso 2

var playGate = function() {
  if (intentos < 1) {
    document.getElementById('output').innerHTML = 'Lo siento, ya no te ' +
    'quedan mas intentos';
  }
  else {
    revisarNum();
  }
};

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
