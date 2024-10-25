const rectangleArea = (largo, ancho) => largo * ancho;

const greet = (nombre) => {
  const mensaje = `Hola, ${nombre}!`;
  return mensaje;
};

const mergeArray = (arr1, arr2) => [...arr1, ...arr2];

const ducplicateAndSum = (a, b, ...numeros) => {
  const suma = a + b;
  return numeros.map((numero) => numero + suma);
};

const setExercise = () => {
  const numbers = new Set([1, 2, 3, 2, 4, 1, 3, 6]);
  const size = numbers.size;
  return size;
};

const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");

const mapExercise = () => {
  const persona = new Map();
  persona.set("nombre", "Juan");
  persona.set("edad", 30);
  persona.set("profesion", "Desarrollador");
  persona.set("profesion", "Ingeniero de Software");
  persona.delete("edad");
  return persona;
};

const countRepeated = (string) => {
  const charCountMap = new Map();

  for (const char of string) {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char) + 1);
    } else {
      charCountMap.set(char, 1);
    }
  }

  return charCountMap;
};
