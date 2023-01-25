// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: PlayerData<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 23,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

enum NameOfFigures {
  Rect = "rect",
  Triangle = "triangle",
  Circle = "circle",
  Line = "line",
}

interface FiguresData {
  name: NameOfFigures;
  data?: object;
}

function calculateAmountOfFigures<T extends FiguresData>(
  figure: T[]
): AmountOfFigures {
  const sumAllFigures: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  figure.forEach((elem) => {
    switch (elem.name) {
      case NameOfFigures.Circle:
        sumAllFigures.circles++;
        break;
      case NameOfFigures.Rect:
        sumAllFigures.squares++;
        break;
      case NameOfFigures.Triangle:
        sumAllFigures.triangles++;
        break;
      default:
        sumAllFigures.others++;
        break;
    }
  });

  return sumAllFigures;
}

const data: FiguresData[] = [
  {
    name: NameOfFigures.Rect,
    data: { a: 5, b: 10 },
  },
  {
    name: NameOfFigures.Rect,
    data: { a: 6, b: 11 },
  },
  {
    name: NameOfFigures.Triangle,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: NameOfFigures.Line,
    data: { l: 15 },
  },
  {
    name: NameOfFigures.Circle,
    data: { r: 10 },
  },
  {
    name: NameOfFigures.Circle,
    data: { r: 5 },
  },
  {
    name: NameOfFigures.Rect,
    data: { a: 15, b: 7 },
  },
  {
    name: NameOfFigures.Triangle,
  },
];

console.log(calculateAmountOfFigures(data));
