// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  const filteredArray = ages.filter(function (age) {
    return age > 18;
  });
  return filteredArray;
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  const filteredStreamers = streamers.filter(function (streamer) {
    return streamer.gameMorePlayed === "League of legends";
  });
  return filteredStreamers;
}

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  const newIncreasedArray = numbers.map(function (number) {
    return number + 10;
  });
  return newIncreasedArray;
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const newInvertedSignArray = numbers.map(function (number) {
    return number * -1;
  });
  return newInvertedSignArray;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const newgetSum = numbers.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
  return newgetSum;
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const newgetAverage = numbers.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
  return newgetAverage / numbers.length;
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  const newgetRepetitions = array.reduce((acumulador, elemento) => {
    if (acumulador[elemento]) {
      acumulador[elemento] += 1;
    } else {
      acumulador[elemento] = 1;
    }
    return acumulador;
  }, {});
  return newgetRepetitions;
}

// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  const totalAge = people.reduce((acumulador, persona) => {
    return acumulador + persona.age;
  }, 0);
  return totalAge;
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  const totalAgeWithDogs = people.reduce((acumulador, persona) => {
    return persona.hasDog ? acumulador + persona.age : acumulador;
  }, 0);
  return totalAgeWithDogs;
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const newFind100 = numbers.find(number => number >= 100);
  return newFind100;
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  const newsortFromMinToMax = numbers.sort((a, b) => a - b);
  return newsortFromMinToMax;
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const newthereAreEven = numbers.some(elemento => elemento % 2 === 0);
  return newthereAreEven;
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const newareAllFilms2018 = films.every(elemento => elemento === 2018);
  return newareAllFilms2018;
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  const newjoinNames = names.join(", ");
  return newjoinNames;
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  const newthereIsADog = animals.includes("Perro");
  return newthereIsADog;
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  numbers.reverse();
  return numbers;
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  const newfromStringToArray = Array.from(string);
  return newfromStringToArray;
}
